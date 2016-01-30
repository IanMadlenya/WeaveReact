"use strict";

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _utilsApp = require("../utils/App");

var _utilsApp2 = _interopRequireDefault(_utilsApp);

(function (module) {

    function PositionConfig() {

        _Object$defineProperties(this, {
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
        return _utilsApp2["default"].getStateFor(this, properties);
    };

    Weave.registerClass('weavereact.PositionConfig', PositionConfig);

    module.exports = PositionConfig;
})(module);
