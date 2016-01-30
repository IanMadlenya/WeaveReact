import App from "../utils/App";

(function (module) {

    function PositionConfig() {

        Object.defineProperties(this, {
            "paddingLeft": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("4px"))
            },
            "paddingRight": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("4px"))
            },
            "paddingTop": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("4px"))
            },
            "paddingBottom": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("4px"))
            },
            "marginLeft": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "marginRight": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "marginTop": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "marginBottom": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }
        });

    }

    var p = PositionConfig.prototype;


    p.getPositionStateFor = function (properties) {
        if (!properties) properties = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"];
        return App.getStateFor(this, properties);
    }

    Weave.registerClass('weavereact.PositionConfig', PositionConfig);

    module.exports = PositionConfig;


}(module));
