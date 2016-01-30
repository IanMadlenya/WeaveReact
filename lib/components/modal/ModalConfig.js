"use strict";

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _ModalPanelConfig = require("./ModalPanelConfig");

var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

(function (module) {

    function ModalConfig() {

        _Object$defineProperties(this, {
            "panelConfig": {
                value: Weave.linkableChild(this, new _ModalPanelConfig2["default"]())
            },
            "open": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "buttonIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }

        });
    }

    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.ModalConfig', ModalConfig);

    module.exports = ModalConfig;
})(module);