"use strict";

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _utilsApp = require("../utils/App");

var _utilsApp2 = _interopRequireDefault(_utilsApp);

(function (module) {

    function BorderConfig() {

        _Object$defineProperties(this, {
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
        return _utilsApp2["default"].getStateFor(this, properties);
    };

    Weave.registerClass('weavereact.BorderConfig', BorderConfig);

    module.exports = BorderConfig;
})(module);
