import React from 'react';
import App from "../../utils/App";
import Style from "../../utils/Style";
import NodeConfig from "./NodeConfig";
import PropsManager from "../PropsManager"

class Node extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new NodeConfig();
        this.toggle = this.toggle.bind(this);
        this.getTreeNodes = this.getTreeNodes.bind(this);
        this.getTreeLabel = this.getTreeLabel.bind(this);
        this.getIconName = this.getIconName.bind(this);
        this.setSessionStateFromTree = this.setSessionStateFromTree.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
        this.setSessionStateFromTree(this.props.data,this.props.label,this.props.nodes,this.props.icon);
        this.propsManager = new PropsManager()
    }

    componentDidMount(){
        this.settings.open.addImmediateCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        this.settings.label.addImmediateCallback(this, this.forceUpdate);
        this.settings.active.addImmediateCallback(this, this.forceUpdate);
    }

    componentWillUnmount () {
        this.settings.open.removeCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
        this.settings.label.removeCallback(this, this.forceUpdate);
        this.settings.active.removeCallback(this, this.forceUpdate);
    }

    toggle(){
        this.settings.open.value = !this.settings.open.value;
        if(this.props.clickCallback)
            this.props.clickCallback.call(this,this.props.data,this.settings);
        this.props.treeConfig.changeActiveNode(this.settings)
    }


    setSessionStateFromTree(data,label,nodes,icon) {
        this.settings.label.value = this.getTreeLabel(data,label);
        this.settings.iconName.value = this.getIconName(data,icon);
        var treeNodes = this.getTreeNodes(data,nodes);
        if (treeNodes && treeNodes.length) {
            this.settings.children.delayCallbacks();
            for (var i = 0; i < treeNodes.length; i++) {
                var objectName = "node" + i;
                this.settings.children.requestObject(objectName, NodeConfig);
            }
            this.settings.children.resumeCallbacks();
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
            this.setSessionStateFromTree(nextProps.data,nextProps.label,nextProps.nodes,nextProps.icon);
        }
    }


    renderChildren(){
        this.propsManager.addNewProps("treeConfig",this.props.treeConfig);
        this.propsManager.addNewProps("label",this.props.label);
        this.propsManager.addNewProps("nodes",this.props.nodes);
        this.propsManager.addNewProps("icon",this.props.icon);
        this.propsManager.addNewProps("clickCallback",this.props.clickCallback);
        var treeNodes = this.getTreeNodes(this.props.data,this.props.nodes);
        this.propsManager.addKeyProps("data",treeNodes);
        return App.renderChildren(this, this.propsManager);
    }

    render() {
        var nodeUI = <div/>;
        var domeDefinedStyle = this.props.style;
        if(this.props.data){
            var nodesUI = [];
            var nodes = this.settings.getNodes();
            if(this.settings.open.value){
                nodesUI = this.renderChildren();
            }

            var iconName = this.settings.iconName.value;
            var label = this.settings.label.value;
            if(nodes.length > 0){ //folder
                var branchStyle = this.props.treeConfig.branchStyle.getStyleFor();
                var nodeStyle = this.props.treeConfig.nodeStyle.getStyleFor();
                if(domeDefinedStyle)Style.mergeStyleObjects(nodeStyle,domeDefinedStyle,true);//this happens for rootNode
                var controlName = this.props.treeConfig.getFolderIcon(this.settings.open.value);

                var folderUI = <span style={nodeStyle} onClick={this.toggle}>
                                    <i className={iconName} ></i>
                                    {label}
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
                var leafStyle = this.props.treeConfig.getLeafStyle(this.settings.open.value,this.settings.active.value);

                nodeUI = <li style={leafStyle} onClick={this.toggle}>
                            <i className={iconName} ></i>
                            {label}
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
