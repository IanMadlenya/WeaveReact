"use strict";

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function NodeConfig() {
        _ComponentManager2.default.createDefaultSessionProperties(this, "container");

        Object.defineProperties(this, {
            "label": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "iconName": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            "open": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
            },
            "select": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
            },
            "active": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
            }
        });

        this.open.state = false; // this one for folder
        this.select.state = false; // this one for leaf
        this.active.state = false;

        this.data = null;

        this.reverseLayout.addImmediateCallback(this, this.flipIcon);
    }

    var p = NodeConfig.prototype;

    p.flipIcon = function () {
        _ComponentManager2.default.flipIcons(this, ["iconName"]);
    };

    p.getNodes = function () {
        return this.children.getNames();
    };

    p.getNodeValueFor = function (property, data) {
        data = data ? data : this.data;

        if (data) {
            if (data[property] instanceof Function) {
                return data[property]();
            } else if (property instanceof Function) {
                return property(data);
            } else {
                return data[property];
            }
        } else {
            return "";
        }
    };

    p.reset = function () {
        this.label.value = "";
        this.iconName.value = "";
        this.open.value = false;
        this.active.value = false;
        this.children.removeAllObjects();
    };

    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.NodeConfig', NodeConfig);

    module.exports = NodeConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,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V0FBTyxPQUFQLEdBQWlCLFVBQWpCLENBM0VlO0NBQWxCLEVBNkVDLE1BN0VELENBQUQiLCJmaWxlIjoiTm9kZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBOb2RlQ29uZmlnKCkge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNlbGVjdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcGVuLnN0YXRlID0gZmFsc2U7IC8vIHRoaXMgb25lIGZvciBmb2xkZXJcbiAgICAgICAgdGhpcy5zZWxlY3Quc3RhdGUgPSBmYWxzZTsgLy8gdGhpcyBvbmUgZm9yIGxlYWZcbiAgICAgICAgdGhpcy5hY3RpdmUuc3RhdGUgPSBmYWxzZTsgXG5cbiAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcblxuICAgICAgICB0aGlzLnJldmVyc2VMYXlvdXQuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mbGlwSWNvbik7XG5cblxuICAgIH1cblxuXG5cblxuICAgIHZhciBwID0gTm9kZUNvbmZpZy5wcm90b3R5cGU7XG5cblxuICAgIHAuZmxpcEljb24gPSBmdW5jdGlvbigpe1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmZsaXBJY29ucyh0aGlzLFtcImljb25OYW1lXCJdKTtcbiAgICB9XG5cbiAgICBwLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5nZXROYW1lcygpO1xuICAgIH1cblxuICAgIHAuZ2V0Tm9kZVZhbHVlRm9yID0gZnVuY3Rpb24ocHJvcGVydHksZGF0YSl7XG4gICAgICAgIGRhdGEgPSBkYXRhPyBkYXRhOnRoaXMuZGF0YTtcblxuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGFbcHJvcGVydHldIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW3Byb3BlcnR5XSgpO1xuICAgICAgICAgICAgfWVsc2UgaWYocHJvcGVydHkgaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5KGRhdGEpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuaWNvbk5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5yZW1vdmVBbGxPYmplY3RzKCk7XG4gICAgfVxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Ob2RlQ29uZmlnJywgTm9kZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE5vZGVDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
