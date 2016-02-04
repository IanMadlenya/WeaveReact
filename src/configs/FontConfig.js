/*import Weave from 'Weave';
import weavejs from 'weavejs';*/
import App from "../utils/App";

(function (module) {

    function FontConfig() {

        Object.defineProperties(this, {
            "fontFamily": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('Helvetica'))
            },
            "fontStyle": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('normal'))
            },
            "fontWeight": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('normal'))
            },
            "fontVariant": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('normal'))
            },
            "fontSize": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('100%'))
            }
        });

    }

    var p = FontConfig.prototype;


    p.getFontStateFor = function (properties) {
        if (!properties) properties = ["fontFamily", "fontStyle", "fontWeight", "fontVariant", "fontSize"];
        return App.getStateFor(this, properties);
    }

    Weave.registerClass('weavereact.FontConfig', FontConfig);

    module.exports = FontConfig;

}(module));
