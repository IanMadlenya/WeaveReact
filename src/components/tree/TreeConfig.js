
import NodeConfig from "./NodeConfig";
import InlineStyle from "../../configs/InlineStyle";
import ComponentManager from "../../ComponentManager";

(function (module) {

    function TreeConfig() {
        ComponentManager.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            "treeIconState":{
                 value: Weave.linkableChild(this, new weavejs.core.LinkableVariable("fa fa-folder"))
            },
            "nodeIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder"))
            },
            "nodeOpenIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder-open"))
            },
            "leafIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text"))
            },
            "leafOpenIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text-o"))
            },
            "enableDataTypeIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "align": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
            },
            "nodePadding": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20px"))
            },
            rootNode:{
                value: Weave.linkableChild(this, new NodeConfig())
            },
            rootStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            nodeStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            leafStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            selectedLeafStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            activeLeafStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            branchStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            nodeIconStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            leafIconStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            allowMultipleSelection:{
                value: Weave.linkableChild(this,  new weavejs.core.LinkableBoolean(false))
            }
        });

        this.activeNode = null;
        this.dataTypesMap = null;
        this.getDataType = null;

        this.nodeStyle.display.state = "flex";
        this.nodeStyle.other.state = {
            "flexDirection": "row"
        }

        this.treeIconState.state = {
            "nodeDefault" : "fa fa-folder",
            "nodeOpen" : "fa fa-folder-open",
            "leafDefault" : "fa fa-file-text",
            "leafOpen" : "fa fa-file-text-o"
        }

        this.nodeIconStyle.other.state = {
            width: "20px",
            height : "20px",
            paddingRight:"2px"
        }



        this.leafStyle.display.state = "flex";
        this.leafStyle.other.state = {
            "flexDirection": "row"
        }


        this.activeLeafStyle.other.state = {
            "background" : "orange"
        }

        this.defaultSelectedNodes = [];
    }


    var p = TreeConfig.prototype;

    function mergeInto (into, obj) {
        for (let attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    }

    p.getLeafStyle = function(open, active){
        var style = this.leafStyle.getStyleFor();
        if(open){
            mergeInto(style,this.selectedLeafStyle.getStyleFor())
            if(active)
                return mergeInto(style,this.activeLeafStyle.getStyleFor());
        }
        return style;

    }

    function setChildrenStateToOpen(parentNode,openNodes){
        var nodes = parentNode.children.getObjects();
        if(nodes && nodes.length > 0){
            nodes.map(function(node){
                var nodeIndex = openNodes.indexOf(node.label.state);
                if(nodeIndex > -1){
                    node.open.value = true;
                    openNodes.splice(nodeIndex,1);
                    setChildrenStateToOpen(node,openNodes);
                }
                else{
                    node.open.value = false;
                    node.active.value = false;
                }
            }.bind(this))
        }
    }

    //to-do do this for entire tree rather only for the first child
    p.setDefaultNodeSelection = function(nodesLabel){
        this.defaultSelectedNodes = nodesLabel
        //setChildrenStateToOpen(this.rootNode,nodesLabel)
    }

    //to-do do this for entire tree rather only for the first child
    p.setOpenNodes = function(nodesLabel){
        var rootNodes = this.rootNode.children.getObjects();
        rootNodes.map(function(node){
            if(nodesLabel.indexOf(node.label.state) > -1){
                node.open.value = true;
            }
            else{
                node.open.value = false;
                node.active.value = false;
            }
        }.bind(this))

    }

    p.changeActiveNode = function (nodeConfig) {
        if (this.activeNode) {
            this.activeNode.active.value = false;
            if(!this.allowMultipleSelection.value){
                if(this.activeNode !== nodeConfig){
                    var activeNodeChild = this.activeNode.children.getName(nodeConfig);
                    if(!activeNodeChild)
                        this.activeNode.open.value = false;
                }
            }
        }
        this.activeNode = nodeConfig;
        this.activeNode.active.value = true;
    }

    p.getFileIcon = function (data,isOpen) {
        if(data){
            if(this.enableDataTypeIcon.value){
                var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
                if (this.dataTypesMap && this.dataTypesMap[datType])
                    return this.dataTypesMap[datType];
            }else{
                return isOpen ? this.leafOpenIcon.value : this.leafIcon.value;
            }
        }else
            return "";
    }

    p.getFolderIcon = function ( isOpen) {
        return isOpen ? this.nodeOpenIcon.value : this.nodeIcon.value;
    }


    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

    module.exports = TreeConfig;

}(module));
