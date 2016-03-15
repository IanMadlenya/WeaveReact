import React from 'react';
import App from "../../utils/App";
import Style from "../../utils/Style";
import NodeConfig from "./NodeConfig";



class Node extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new NodeConfig();
        this.toggle = this.toggle.bind(this);
        this.getTreeNodes = this.getTreeNodes.bind(this);
        this.getTreeLabel = this.getTreeLabel.bind(this);
        this.getIconName = this.getIconName.bind(this);
        this.createSessionStateForTree = this.createSessionStateForTree.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
        this.isSessionStateCreatedForTreeData = false;
        App.addForceUpdateToCallbacks(this);
        this.settings.open.addImmediateCallback(this,this.showChildren);
    }


    componentDidMount(){
        this.createSessionStateForTree();
    }

    componentWillUnmount () {
        App.removeForceUpdateFromCallbacks(this);
        this.settings.open.removeCallback(this,this.showChildren);
    }

    toggle(){
         this.settings.open.value = !this.settings.open.value;
        if(this.props.clickCallback)
            this.props.clickCallback.call(this,this.props.data,this.settings);
        this.props.treeConfig.changeActiveNode(this.settings);
    }


    createSessionStateForTree(data,label,nodes,icon) {
        if(data){ // calling with data arguments indicates data is changed so wipe the session state
             this.settings.reset();
        }
        this.settings.label.value = this.getTreeLabel(data,label);
        this.settings.iconName.value = this.getIconName(data,icon);
        var treeNodes = this.getTreeNodes(data,nodes);

        if(treeNodes && treeNodes.length){
            this.settings.children.delayCallbacks();
            for(var i = 0; i < treeNodes.length; i++){
                var objectName = "node" + i;
                var nodeConfig = this.settings.children.requestObject(objectName, NodeConfig);
                var nodeLabel = this.getTreeLabel(treeNodes[i])
                nodeConfig.label.state = nodeLabel;
                var nodeIcon = this.getIconName(treeNodes[i])
                nodeConfig.iconName.state = nodeIcon;
            }
            this.settings.children.resumeCallbacks();
        }
        this.isSessionStateCreatedForTreeData = true;
    }

    showChildren(){
        if(!this.isSessionStateCreatedForTreeData){
            this.createSessionStateForTree()
        }
        if(this.props.treeConfig.defaultSelectedNodes){
            if(this.props.treeConfig.defaultSelectedNodes.length>0){
                var nodeConfigs = this.settings.children.getObjects();
                nodeConfigs.map(function(nodeConfig,index){
                    var nodeLabel = nodeConfig.label.state;
                    if(this.props.treeConfig.defaultSelectedNodes.indexOf(nodeLabel) !== -1){
                        nodeConfig.open.value = true;
                    }
                }.bind(this));
            }else{
                var nodeConfigs = this.settings.children.getObjects();
                nodeConfigs.map(function(nodeConfig,index){
                    var nodeLabel = nodeConfig.label.state;
                    nodeConfig.open.value = true;
                    this.props.treeConfig.defaultSelectedNodes.push(nodeLabel);
                }.bind(this));
            }

        }
    }

    getTreeNodes(data,nodes){
        if(!data && this.props.data)data = this.props.data;
        if(!nodes && this.props.nodes)nodes = this.props.nodes;
        if(data){
            if(data[nodes] instanceof Function){
                return data[nodes]();
            }else{
               return data[nodes];
            }
        }
        else return [];
    }

    getIconName(data,icon){

        if(!data && this.props.data)data = this.props.data;
        if(!icon && this.props.icon)icon = this.props.icon;

       if(data){
            if(data[icon] instanceof Function){
                return data[icon]();
            }else if(icon instanceof Function){
                return icon(data);
            }else{
                return data[icon];
            }
        }else{
            return "";
        }
    }

    getTreeLabel(data,label){
        if(!data && this.props.data)data = this.props.data;
        if(!label && this.props.label)label = this.props.label;

        if(data){
            if(data[label] instanceof Function){
                return data[label]();
            }else{
                return data[label];
            }
        }else{
            return "";
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props.data !== nextProps.data){
            this.createSessionStateForTree(nextProps.data,nextProps.label,nextProps.nodes,nextProps.icon);
        }
        if(this.props.open !== nextProps.open){
            this.settings.open.value = nextProps.open;
        }
    }


    renderChildren(){
        this.settings.props.addChildProps("treeConfig",this.props.treeConfig);
        this.settings.props.addChildProps("label",this.props.label);
        this.settings.props.addChildProps("nodes",this.props.nodes);
        this.settings.props.addChildProps("icon",this.props.icon);
        this.settings.props.addChildProps("clickCallback",this.props.clickCallback);
        this.settings.props.addChildProps("data",null, null,this.getTreeNodes() );
        return App.renderChildren(this);
    }

    render() {
        var nodeUI = <div/>;
        var domeDefinedStyle = this.props.style;
        if(this.props.data){
            var nodesUI = [];
            var nodes = this.settings.getNodes();
            var isOpen = this.settings.open.value;
            if(isOpen){
                nodesUI = this.renderChildren();
            }

            var iconName = this.settings.iconName.value;
            var label = this.settings.label.value;

            var iconUI = "";



            if(nodes.length > 0){ //folder
                var branchStyle = this.props.treeConfig.branchStyle.getStyleFor();
                var nodeStyle = this.props.treeConfig.nodeStyle.getStyleFor();
                if(domeDefinedStyle)Style.mergeStyleObjects(nodeStyle,domeDefinedStyle,true);//this happens for rootNode
                var controlName = this.props.treeConfig.getFolderIcon(isOpen);
                if(iconName && iconName.length > 0){
                    var iconStyleObj = this.props.treeConfig.nodeIconStyle.getStyleFor();
                    if(iconName.indexOf("/") == -1){ // fontAwesome Icon Name
                        iconUI = <i style = {iconStyleObj} className={iconName} ></i>
                    }else {
                        iconUI = <img style = {iconStyleObj} src={iconName}/>
                    }
                }

                var folderUI = <span style={nodeStyle} onClick={this.toggle}>
                                    {iconUI}
                                    &nbsp;{label}
                                    <span style={{flex:"1"}}/>
                                    <i className={controlName} ></i>
                                </span>;

                var nodePadding = this.props.treeConfig.nodePadding.state;
                nodeUI = <span style={branchStyle}>
                            {folderUI}
                            <ul style={{listStyleType:"none",paddingLeft:nodePadding}}>
                                {nodesUI}
                            </ul>
                         </span>;
            }
            else{ //leaf
                var fileIcon = this.props.treeConfig.getFileIcon(this.props.data,this.settings.open.value);
                // this will return either normal/Active/Slected Style based on state of the leaf
                var leafStyle = this.props.treeConfig.getLeafStyle(isOpen,this.settings.active.value);
                if(iconName && iconName.length > 0){
                    var iconStyleObj = this.props.treeConfig.leafIconStyle.getStyleFor();
                    if(iconName.indexOf("/") == -1){ // fontAwesome Icon Name
                        iconUI = <i style = {iconStyleObj} className={iconName} ></i>
                    }else {
                        iconUI = <img style = {iconStyleObj} src={iconName}/>
                    }
                }

                nodeUI = <li style={leafStyle} onClick={this.toggle}>
                            {iconUI}
                            &nbsp;{label}
                            <span style={{flex:"1"}}/>
                            <i className={fileIcon}></i>
                         </li>
            }
        }


    return ( nodeUI);
    }

}

App.registerToolImplementation("weavereact.NodeConfig",Node);
export default Node;
