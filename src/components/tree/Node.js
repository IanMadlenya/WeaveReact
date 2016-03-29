import React from 'react';
import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";
import Style from "../../utils/Style";
import NodeConfig from "./NodeConfig";


class Node extends AbstractComponent {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.createSessionStateForTree = this.createSessionStateForTree.bind(this);
        this.isSessionStateCreatedForTreeData = false;
        if(this.props.data){
            this.settings.data = this.props.data;
            this.createSessionStateForTree();
        }
        this.settings.open.addImmediateCallback(this,this.setChildrenSessionValues);
    }


    componentWillReceiveProps(nextProps){
        super.componentWillReceiveProps(nextProps);
        if(this.props.data !== nextProps.data){
            this.settings.data = this.props.data;
            this.createSessionStateForTree(nextProps.data,nextProps.label,nextProps.nodes,nextProps.icon);
        }
        if(this.props.open !== nextProps.open){
            this.settings.open.value = nextProps.open;
        }
    }


    componentWillUnmount () {
        super.componentWillUnmount();
        this.settings.open.removeCallback(this,this.setChildrenSessionValues);
    }



    toggle(){
        this.settings.open.value = !this.settings.open.value;
        if(this.props.clickCallback)
            this.props.clickCallback.call(this,this.props.data,this.settings);
        this.props.treeConfig.changeActiveNode(this.settings);
    }


    createSessionStateForTree(data,label,nodes,icon) {
        var label = label?label:this.props.label;
        var nodes = nodes?nodes:this.props.nodes;
        var icon = icon?icon:this.props.icon;
        if(data){ // calling with data arguments indicates data is changed so wipe the session state
             this.settings.reset();
        }else{
            data = this.props.data;
        }
        //to-do only required for rootnode
        this.settings.label.value = this.settings.getNodeValueFor(label);
        this.settings.iconName.value = this.settings.getNodeValueFor(icon);

        var treeNodes = this.settings.getNodeValueFor(nodes);
        if(treeNodes && treeNodes.length){
            this.settings.children.delayCallbacks();
            for(var i = 0; i < treeNodes.length; i++){
                var nodeConfig = this.settings.children.requestObject("node" + i, NodeConfig);
                nodeConfig.label.state = this.settings.getNodeValueFor(label,treeNodes[i]);
                nodeConfig.iconName.state = this.settings.getNodeValueFor(icon,treeNodes[i]);
            }
            this.settings.children.resumeCallbacks();
        }
        this.isSessionStateCreatedForTreeData = true;
    }

    setChildrenSessionValues(){
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



    renderChildren(){
        this.settings.props.addChildProps("treeConfig",this.props.treeConfig);
        this.settings.props.addChildProps("label",this.props.label);
        this.settings.props.addChildProps("nodes",this.props.nodes);
        this.settings.props.addChildProps("icon",this.props.icon);
        this.settings.props.addChildProps("reverseLayout",this.settings.reverseLayout.state);
        this.settings.props.addChildProps("clickCallback",this.props.clickCallback);
        this.settings.props.addChildProps("data",null, null,this.settings.getNodeValueFor(this.props.nodes) );
        return ComponentManager.renderChildren(this);
    }

    render() {
        if(ComponentManager.debug)console.log("Node - render");
        var nodeUI = <div/>;
        var domDefinedStyle = this.props.style;
        if(this.props.data){
            var nodesUI = [];
            var nodes = this.settings.getNodes();
            var isOpen = this.settings.open.value;

            var iconName = this.settings.iconName.value;
            var label = this.settings.label.value;

            var iconUI = "";

            if(nodes.length > 0){ //folder
                if(isOpen){
                    nodesUI = this.renderChildren();
                }

                var branchStyle = this.props.treeConfig.branchStyle.state;
                var nodeStyle = this.props.treeConfig.nodeStyle.state;
                if(domDefinedStyle)Style.mergeStyleObjects(nodeStyle,domDefinedStyle,true);//this happens for rootNode
                var controlName = this.props.treeConfig.getFolderIcon(isOpen);
                if(iconName && iconName.length > 0){
                    var iconStyleObj = this.props.treeConfig.nodeIconStyle.state;
                    if(iconName.indexOf("/") == -1){ // fontAwesome Icon Name
                        iconUI = <i style = {iconStyleObj} className={iconName} ></i>
                    }else {
                        iconUI = <img style = {iconStyleObj} src={iconName}/>
                    }
                }

                var folderUI = <span style={nodeStyle} onClick={this.toggle}>
                                    {iconUI}
                                    &nbsp;{Weave.lang(label)}
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
                    var iconStyleObj = this.props.treeConfig.leafIconStyle.state;
                    if(iconName.indexOf("/") == -1){ // fontAwesome Icon Name
                        iconUI = <i style = {iconStyleObj} className={iconName} ></i>
                    }else {
                        iconUI = <img style = {iconStyleObj} src={iconName}/>
                    }
                }

                nodeUI = <li style={leafStyle} onClick={this.toggle}>
                            {iconUI}
                            &nbsp;{Weave.lang(label)}
                            <span style={{flex:"1"}}/>
                            <i className={fileIcon}></i>
                         </li>
            }
        }


    return ( nodeUI);
    }

}

ComponentManager.registerToolImplementation("weavereact.NodeConfig",Node);
export default Node;
