/*import Weave from 'Weave';
import weavejs from 'weavejs';*/
import App from "../utils/App";

(function (module) {

    function BorderConfig() {

        Object.defineProperties(this, {
            "borderColor": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('#bebebe'))
            },
            "borderWidth": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('1px'))
            },
            "borderRadius": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('5px'))
            },
            "borderStyle": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('solid'))
            }
        });

    }

    var p = BorderConfig.prototype;


    p.getBorderStateFor = function (properties) {
        if (!properties) properties = ["borderColor", "borderWidth", "borderRadius", "borderStyle"];
        return App.getStateFor(this, properties);
    }

    Weave.registerClass('weavereact.BorderConfig', BorderConfig);

    module.exports = BorderConfig;


}(module));
