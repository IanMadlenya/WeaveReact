import weavejs from "weavejs";
import Weave from "Weave";

(function (module) {

    function TreeConfig() {

        Object.defineProperties(this, {
            "label": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "children": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap()) // important to be prototype as type restriction is compared with prototype
            },
            "open": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
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
            "enableTypeIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });

        this.activeLeaf = null;
    }


    var p = TreeConfig.prototype;

    p.getNodes = function () {
        return this.children.getNames();
    }

    p.getFileIcon = function (data) {
        if (this.enableTypeIcon.value) {
            if (typeof (data) === "string") {
                return "fa fa-info";
            } else if (typeof (data) === "number") {
                return "fa fa-hashtag";

            } else if (typeof (data) === "boolean") {
                return "fa fa-flag";

            }

        }
        return this.fileIcon.value;

    }

    p.reset = function () {
        this.label.value = "";
        this.open.value = false;
        this.children.removeAllObjects();
    }

    //This Function makes this class as SessionClass
    Weave.registerClass('reactweave.TreeConfig', TreeConfig);

    module.exports = TreeConfig;

}(module));
