import weavejs from "weavejs";
import weavereact from "weavereact";
import Weave from "Weave";


(function (module) {



    function SessionEditorConfig() {

        Object.defineProperties(this, {

            "treeConfig": {
                value: Weave.linkableChild(this, new weavereact.TreeConfig())
            },
            showTree: {
                value: new weavejs.core.LinkableBoolean(false)
            },
            activeNodeValue: {
                value: new weavejs.core.LinkableVariable()
            },
            modalConfig: {
                value: new weavereact.ModalConfig()
            }

        });

        this.dataTypesMap = {
            "weavejs.core.LinkableString": "S",
            "weavejs.core.LinkableNumber": "N",
            "weavejs.core.LinkableBoolean": "B",
            "weavejs.data.source.WeaveDataSource": "fa fa-database",
            "weavejs.data.key.KeySet": "fa fa-key",
            "weavejs.data.key.KeyFilter": "fa fa-filter"
        }


    }


    SessionEditorConfig.prototype.getDataType = function (treeItem) {
        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
    }


    Weave.registerClass('weavereactdemo.SessionEditorConfig', SessionEditorConfig);

    module.exports = SessionEditorConfig;

}(module));
