"use strict";

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _configsBorderConfig = require("../../configs/BorderConfig");

var _configsBorderConfig2 = _interopRequireDefault(_configsBorderConfig);

(function (module) {

    function ModalPanelConfig() {

        _Object$defineProperties(this, {
            "border": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableDynamicObject(_configsBorderConfig2["default"]))
            },
            "title": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }

        });

        _Object$defineProperties(this, {
            "width": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("60%"))
            },
            "height": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("80%"))
            },
            "marginLeft": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("-20%"))
            },
            "marginTop": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("-20%"))
            },
            "left": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
            },
            "top": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
            }

        });
    }

    var p = ModalPanelConfig.prototype;

    p.getLayoutState = function () {
        return {
            "top": this.top.value,
            "left": this.left.value,
            "marginTop": this.marginTop.value,
            "marginLeft": this.marginLeft.value,
            "width": this.width.value,
            "height": this.height.value
        };
    };

    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.ModalPanelConfig', ModalPanelConfig);

    module.exports = ModalPanelConfig;
})(module);
