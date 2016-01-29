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
            }

        });

    }




    Weave.registerClass('weavereactdemo.SessionEditorConfig', SessionEditorConfig);

    module.exports = SessionEditorConfig;

}(module));
