import weavejs from "weavejs";
import reactweave from "reactweave";
import Weave from "Weave";


(function (module) {



    function SessionEditorConfig() {

        Object.defineProperties(this, {

            "treeConfig": {
                value: Weave.linkableChild(this, new reactweave.TreeConfig())
            },
            showTree: {
                value: new weavejs.core.LinkableBoolean(false)
            },
            activeNodeValue: {
                value: new weavejs.core.LinkableVariable()
            }

        });

    }




    Weave.registerClass('reactweavedemo.SessionEditorConfig', SessionEditorConfig);

    module.exports = SessionEditorConfig;

}(module));
