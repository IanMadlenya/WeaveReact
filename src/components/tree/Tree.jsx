import React from "react";
import App from "../../utils/App";
import Styles from "../../utils/Style";
import TreeConfig from "./TreeConfig";

class Tree extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new TreeConfig();
        this.toggle = this.toggle.bind(this);
        this.getTreeNodes = this.getTreeNodes.bind(this);
        this.getTreeLabel = this.getTreeLabel.bind(this);
        this.settings.enableTypeIcon.value= true;//temp to check
    }

    componentDidMount(){
        this.settings.open.addImmediateCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        this.settings.folderIcon.addImmediateCallback(this, this.forceUpdate);
        this.settings.folderOpenIcon.addImmediateCallback(this, this.forceUpdate);
        this.settings.fileIcon.addImmediateCallback(this, this.forceUpdate);
        this.settings.fileOpenIcon.addImmediateCallback(this, this.forceUpdate);
         this.settings.label.addImmediateCallback(this, this.forceUpdate);
    }

    componentWillUnmount () {
        this.settings.open.removeCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
        this.settings.folderIcon.removeCallback(this, this.forceUpdate);
        this.settings.folderOpenIcon.removeCallback(this, this.forceUpdate);
        this.settings.fileIcon.removeCallback(this, this.forceUpdate);
        this.settings.fileOpenIcon.removeCallback(this, this.forceUpdate);
        this.settings.label.removeCallback(this, this.forceUpdate);
    }

    toggle(){
        this.settings.open.value = !this.settings.open.value;
        if(this.props.clickCallback)
            this.props.clickCallback.call(this,this.props.data);
    }


    setSessionStateFromTree() {
        this.settings.label.value = this.getTreeLabel();
        var treeNodes = this.getTreeNodes();
        if (treeNodes && treeNodes.length !== this.settings.children.getNames().length) {
            this.settings.children.delayCallbacks();
            for (var i = 0; i < treeNodes.length; i++) {
                var objectName = "node" + i;
                this.settings.children.requestObject(objectName, TreeConfig);
            }
            this.settings.children.resumeCallbacks();
        }
    }

    getTreeNodes(){
        if(this.props.data[this.props.nodes] instanceof Function){
            return this.props.data[this.props.nodes]();
        }else{
           return this.props.data[this.props.nodes];
        }
    }

    getTreeLabel(){
        if(this.props.data[this.props.label] instanceof Function){
            return this.props.data[this.props.label]();
        }else{
            return this.props.data[this.props.label];
        }
    }

    componentWillReceiveProps(nextProps){
    // to-do:
    // has to be done here for asynchrnous data
    // else need to call in constructor
        this.setSessionStateFromTree();
    }

    render() {
        var nodesUI = [];
        var folderIcon = this.settings.folderIcon.value;

        var nodeUI = "";
        var nodes = this.settings.getNodes();
        if(this.settings.open.value){
            folderIcon = this.settings.folderOpenIcon.value;
            //fileIcon = this.settings.fileOpenIcon.value;

            if(nodes.length > 0){
                var treeNodes = this.getTreeNodes();
                for (var i = 0 ; i < nodes.length ;i++){
                    var treeItem = treeNodes[i];
                    var treeConfig = this.settings.children.getObject( nodes[i]);
                    nodesUI.push(<Tree key={i} data={treeItem} label={this.props.label} nodes={this.props.nodes} settings={treeConfig} clickCallback={this.props.clickCallback}/>) ;
                }
            }
        }

        var nodeIconStyleObject = Styles.appendVendorPrefix({color:"#7fd6f9",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"});

        if(nodes.length > 0){ //folder

            nodeUI = <span>
                    <span onClick={this.toggle}>
                    <i className={folderIcon} style={nodeIconStyleObject} ></i>
                        &#160;{this.settings.label.value}
                    </span>
                    <ul style={{listStyleType:"none"}}>
                        {nodesUI}
                    </ul>
                </span>;
        }
        else{ //leaf
            var leaf = this.settings.label.value;
            var fileIcon = this.settings.getFileIcon(this.props.data.data.value);
            if(fileIcon.indexOf("fa fa-") > 0)
                nodeUI = <li onClick={this.toggle}><i className={fileIcon}></i>&#160;{leaf}</li>
            else
                nodeUI = <li onClick={this.toggle}>{fileIcon}<i ></i>&#160;{leaf}</li>
        }

    return ( nodeUI);
    }

}

App.registerToolImplementation("reactweave.TreeConfig",Tree);
export default Tree;
