"use strict";

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _utilsApp = require("../utils/App");

var _utilsApp2 = _interopRequireDefault(_utilsApp);

(function (module) {

    function FontConfig() {

        _Object$defineProperties(this, {
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
        return _utilsApp2["default"].getStateFor(this, properties);
    };

    Weave.registerClass('weavereact.FontConfig', FontConfig);

    module.exports = FontConfig;
})(module);