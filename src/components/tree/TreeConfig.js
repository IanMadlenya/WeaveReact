/*import Weave from 'Weave';
import weavejs from 'weavejs';*/
import NodeConfig from "./NodeConfig";
(function (module) {

    function TreeConfig() {

        Object.defineProperties(this, {
            "folderIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder"))
            },
            "folderOpenIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder-open"))
            },
            "fileIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text"))
            },
            "fileOpenIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text-o"))
            },
            "enableDataTypeIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "rightAlign": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "nodePadding": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20px"))
            },
            "nodeColor": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "leafColor": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "leafBorder": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            rootNode:{
                value: Weave.linkableChild(this, new NodeConfig())
            },
            allowMultipleSelection:{
                value: Weave.linkableChild(this,  new weavejs.core.LinkableBoolean(false))
            }
        });

        this.activeNode = null;
        this.dataTypesMap = null;
        this.getDataType = null;

        this.leafBorder.state = {
            borderBottom:"1px solid #0369B1"
        };
    }


    var p = TreeConfig.prototype;



    p.changeActiveNode = function (nodeConfig) {
        if (this.activeNode) {
            if(!this.allowMultipleSelection.value)this.activeNode.active.value = false;
        }
        this.activeNode = nodeConfig;
        this.activeNode.active.value = true;
    }

    p.getFileIcon = function (data) {
        if(data){
            if(this.enableDataTypeIcon.value){
                var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
                if (this.dataTypesMap && this.dataTypesMap[datType])
                    return this.dataTypesMap[datType];
                else
                    return this.fileOpenIcon.value;
            }
            return "";
        }else
            return "";

    }

    p.getFolderIcon = function (data, isOpen) {
        if(data){
            var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
            if (this.dataTypesMap && this.dataTypesMap[datType])
                return this.dataTypesMap[datType];
            else
                return isOpen ? this.folderOpenIcon.value : this.folderIcon.value;
        }else
            return "";

    }

    p.getFileIconStyle = function () {
        return {
            fontStyle: "bold",
            borderStyle: "solid",
            borderColor: "#7fd6f9",
            borderWidth: "1px",
            borderRadius: "4px",
            paddingLeft: "3px",
            paddingRight: "3px",
            fontSize: "11px"
        }
    }

    p.getNodeIconStyle = function () {
        return {
            color: "#7fd6f9",
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
        }
    }





    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

    module.exports = TreeConfig;

}(module));
