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
            "active": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
            }
        });

        this.open.state = false;
        this.active.state = false;

        this.data = null;

        this.reverseLayout.addImmediateCallback(this, this.flipIcon);
    }

    var p = NodeConfig.prototype;

    p.flipIcon = function () {
        var iconName = this.iconName.state;
        if (iconName && iconName.length > 0) {
            if (iconName.indexOf("/") == -1) {
                // fontaweosme icons
                if (this.reverseLayout.state) {
                    if (iconName.indexOf(" fa-flip-horizontal") == -1) {
                        //notflipped
                        this.iconName.state = iconName + " fa-flip-horizontal";
                    }
                } else {
                    if (iconName.indexOf(" fa-flip-horizontal") != -1) {
                        //flipped
                        var index = iconName.indexOf(" fa-flip-horizontal");
                        this.iconName.state = iconName.substring(0, index);
                    }
                }
            } else {//todo for image

            }
        }
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
//# sourceMappingURL=data:application/json;base64,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RUFBUCxDQURDO1NBUkw7S0FIZ0IsQ0E3REw7O0FBNkVmLE1BQUUsS0FBRixHQUFVLFlBQVk7QUFDbEIsYUFBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixFQUFuQixDQURrQjtBQUVsQixhQUFLLFFBQUwsQ0FBYyxLQUFkLEdBQXNCLEVBQXRCLENBRmtCO0FBR2xCLGFBQUssSUFBTCxDQUFVLEtBQVYsR0FBa0IsS0FBbEIsQ0FIa0I7QUFJbEIsYUFBSyxNQUFMLENBQVksS0FBWixHQUFvQixLQUFwQixDQUprQjtBQUtsQixhQUFLLFFBQUwsQ0FBYyxnQkFBZCxHQUxrQjtLQUFaOzs7QUE3RUssU0FzRmYsQ0FBTSxhQUFOLENBQW9CLHVCQUFwQixFQUE2QyxVQUE3QyxFQXRGZTs7QUF3RmYsV0FBTyxPQUFQLEdBQWlCLFVBQWpCLENBeEZlO0NBQWxCLEVBMEZDLE1BMUZELENBQUQiLCJmaWxlIjoiTm9kZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBOb2RlQ29uZmlnKCkge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcGVuLnN0YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlLnN0YXRlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcblxuICAgICAgICB0aGlzLnJldmVyc2VMYXlvdXQuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mbGlwSWNvbilcblxuXG4gICAgfVxuXG5cblxuXG4gICAgdmFyIHAgPSBOb2RlQ29uZmlnLnByb3RvdHlwZTtcblxuXG4gICAgcC5mbGlwSWNvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuaWNvbk5hbWUuc3RhdGU7XG4gICAgICAgIGlmKGljb25OYW1lICAmJiBpY29uTmFtZS5sZW5ndGggPiAwICl7XG4gICAgICAgICAgICBpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSl7IC8vIGZvbnRhd2Vvc21lIGljb25zXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIiBmYS1mbGlwLWhvcml6b250YWxcIikgPT0gLTEpey8vbm90ZmxpcHBlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uTmFtZS5zdGF0ZSA9IGljb25OYW1lICsgXCIgZmEtZmxpcC1ob3Jpem9udGFsXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIiBmYS1mbGlwLWhvcml6b250YWxcIikgIT0gLTEpey8vZmxpcHBlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gaWNvbk5hbWUuaW5kZXhPZihcIiBmYS1mbGlwLWhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmljb25OYW1lLnN0YXRlID0gaWNvbk5hbWUuc3Vic3RyaW5nKDAsaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7Ly90b2RvIGZvciBpbWFnZVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHAuZ2V0Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmdldE5hbWVzKCk7XG4gICAgfVxuXG4gICAgcC5nZXROb2RlVmFsdWVGb3IgPSBmdW5jdGlvbihwcm9wZXJ0eSxkYXRhKXtcbiAgICAgICAgZGF0YSA9IGRhdGE/IGRhdGE6dGhpcy5kYXRhO1xuXG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbcHJvcGVydHldKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihwcm9wZXJ0eSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHkoZGF0YSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtwcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxhYmVsLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy5pY29uTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICB9XG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lk5vZGVDb25maWcnLCBOb2RlQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTm9kZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
