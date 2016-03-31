
import NodeConfig from "./NodeConfig";
import InlineStyle from "../../configs/InlineStyle";
import ComponentManager from "../../ComponentManager";

(function (module) {

    function TreeConfig() {
        ComponentManager.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            "treeIconState":{
                 value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
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
            },
            selectAll:{
                value: Weave.linkableChild(this,  new weavejs.core.LinkableBoolean(false))
            },
            enableSelectAll:{
                value: Weave.linkableChild(this,  new weavejs.core.LinkableBoolean(false))
            }
        });

        this.activeNode = null;
        this.dataTypesMap = null;
        this.getDataType = null;

        this.branchStyle.state = {
            "display": "flex",
            "flexDirection": "column"
        }

        this.nodeStyle.state = {
            "display": "flex",
            "flexDirection": this.reverseLayout.state?"row-reverse" : "row",
            "alignItems":"center"
        }

        //todo - add getter setter to facilitate settings only one state
        // or create like InlineStyle
        this.treeIconState.state = {
            "nodeDefault" : this.reverseLayout.state?"fa fa-folder fa-flip-horizontal":"fa fa-folder",
            "nodeOpen" : this.reverseLayout.state?"fa fa-folder-open fa-flip-horizontal":"fa fa-folder-open",
            "leafDefault" : this.reverseLayout.state?"fa fa-file-text fa-flip-horizontal":"fa fa-file-text",
            "leafOpen" : this.reverseLayout.state?"fa fa-file-text-o fa-flip-horizontal":"fa-file-text-o",
            "selectAll":this.reverseLayout.state?"fa fa-check-square-o fa-flip-horizontal":"fa fa-check-square-o",
            "unSelectAll":this.reverseLayout.state?"fa fa-square-o fa-flip-horizontal":"fa fa-square-o",
        }

        this.nodeIconStyle.state = {
            width: "20px",
            height : "20px",
            paddingRight:"2px"
        }


        this.leafStyle.state = {
            "display": "flex",
            "flexDirection": this.reverseLayout.state?"row-reverse" : "row",
            "alignItems":"center"
        }


        this.activeLeafStyle.state = {
            "background" : "orange"
        }

        this.defaultSelectedNodes = [];

        //todo move this to componentManager defaultCallbacks
        this.reverseLayout.addImmediateCallback(this, this.updateStyle);
    }


    var p = TreeConfig.prototype;

    p.updateStyle = function(){
        var flexDir = this.reverseLayout.state?"row-reverse":"row";
        this.nodeStyle.state = {flexDirection:flexDir};
        this.leafStyle.state = {flexDirection:flexDir};
        ComponentManager.flipIcons(this,["treeIconState"]);

    }


    function mergeInto (into, obj) {
        for (let attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    }

    p.getLeafStyle = function(open, active){
        var style = this.leafStyle.state;
        if(open){
            mergeInto(style,this.selectedLeafStyle.state)
            if(active)
                return mergeInto(style,this.activeLeafStyle.state);
        }
        return style;

    }



    //to-do do this for entire tree rather only for the first child
    p.setDefaultNodeSelection = function(nodesLabel){
        this.defaultSelectedNodes = nodesLabel
    }

    //to-do do this for entire tree rather only for the first child
    /*p.setOpenNodes = function(nodesLabel){
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

    }*/

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
                return isOpen ? this.treeIconState.state.leafOpen  : this.treeIconState.state.leafDefault ;
            }
        }else
            return "";
    }

    p.getFolderIcon = function ( isOpen) {
        return isOpen ? this.treeIconState.state.nodeOpen : this.treeIconState.state.nodeDefault;
    }


    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

    module.exports = TreeConfig;

}(module));
