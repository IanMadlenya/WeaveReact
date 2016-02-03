import Weave from 'Weave';
import weavejs from 'weavejs';
(function (module) {

    function NodeConfig() {

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
            "active": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });
    }


    var p = NodeConfig.prototype;

    p.getNodes = function () {
        return this.children.getNames();
    }





    p.reset = function () {
        this.label.value = "";
        this.open.value = false;
        this.children.removeAllObjects();
    }

    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.NodeConfig', NodeConfig);

    module.exports = NodeConfig;

}(module));
