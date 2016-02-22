import React from 'react';
import App from "../../utils/App";
import Styles from "../../utils/Style";
import NodeConfig from "./NodeConfig";

class Node extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new NodeConfig();
        this.toggle = this.toggle.bind(this);
        this.getTreeNodes = this.getTreeNodes.bind(this);
        this.getTreeLabel = this.getTreeLabel.bind(this);
        this.setSessionStateFromTree = this.setSessionStateFromTree.bind(this);
        this.setSessionStateFromTree(this.props.data,this.props.label,this.props.nodes);
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
            this.props.clickCallback.call(this,this.props.data);
        this.props.treeConfig.changeActiveNode(this.settings)
    }


    setSessionStateFromTree(data,label,nodes) {
        this.settings.label.value = this.getTreeLabel(data,label);
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
        if(data){
            if(data[nodes] instanceof Function){
                return data[nodes]();
            }else{
               return data[nodes];
            }
        }
        else return [];

    }

    getTreeLabel(data,label){
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
            this.setSessionStateFromTree(nextProps.data,nextProps.label,nextProps.nodes);
        }

    }




    render() {
        var nodeUI = <div/>;
        if(this.props.data){
            var nodesUI = [];
            var nodes = this.settings.getNodes();
            if(this.settings.open.value){
                if(nodes.length > 0){
                    var treeNodes = this.getTreeNodes(this.props.data,this.props.nodes);
                    for (var i = 0 ; i < nodes.length ;i++){
                        var treeItem = treeNodes[i];
                        var nodeConfig = this.settings.children.getObject( nodes[i]);
                        nodesUI.push(<Node key={i} data={treeItem} label={this.props.label} nodes={this.props.nodes} treeConfig={this.props.treeConfig} settings={nodeConfig} clickCallback={this.props.clickCallback}/>) ;
                    }
                }
            }

            if(nodes.length > 0){ //folder
                var nodeIconStyleObject = Styles.appendVendorPrefix(this.props.treeConfig.getNodeIconStyle());
                var folderIcon = this.props.treeConfig.getFolderIcon(this.props.data,this.settings.open.value);
                var folderUI = <span onClick={this.toggle}>
                                    <i className={folderIcon} style={nodeIconStyleObject} ></i>
                                    &#160;{this.settings.label.value}
                                </span>;
                if(this.props.treeConfig.rightAlign.value){
                    folderUI = <span onClick={this.toggle}>
                                    {this.settings.label.value}&#160;
                                    <i className={folderIcon} style={nodeIconStyleObject} ></i>
                                </span>;
                }
                var nodePadding = this.props.treeConfig.nodePadding.value;
                nodeUI = <span style={{backgroundColor:this.props.treeConfig.nodeColor.value}}>
                            {folderUI}
                            <ul style={{listStyleType:"none",paddingLeft:nodePadding}}>
                                {nodesUI}
                            </ul>
                        </span>;
            }
            else{ //leaf
                var leaf = this.settings.label.value;
                var fileIcon = this.props.treeConfig.getFileIcon(this.props.data,this.settings.open.value);
                var fileIconStyle = this.props.treeConfig.getFileIconStyle();
                var activeLeafColor = this.settings.active.value?"#000000":"#9d9d9d";
                var leafStyleObj = {color:activeLeafColor,backgroundColor:this.props.treeConfig.leafColor.value}
                leafStyleObj = Styles.mergeStyleObjects(leafStyleObj,this.props.treeConfig.leafBorder.state)
                if(fileIcon && fileIcon.indexOf("fa fa-") > -1)
                    nodeUI = <li style={leafStyleObj} onClick={this.toggle}>
                                <i className={fileIcon}></i>
                                &#160;{leaf}
                             </li>
                else if(this.props.treeConfig.enableDataTypeIcon.value)
                    nodeUI = <li style={leafStyleObj} onClick={this.toggle}>
                                <span style={fileIconStyle}>{fileIcon}</span>
                                &#160;{leaf}
                             </li>
                else
                    nodeUI = <li style={leafStyleObj} onClick={this.toggle}>
                                &#160;{leaf}
                             </li>
            }
        }


    return ( nodeUI);
    }

}

App.registerToolImplementation("weavereact.NodeConfig",Node);
export default Node;
