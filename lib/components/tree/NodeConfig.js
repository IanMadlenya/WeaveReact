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
                this.iconName.state = this.reverseLayout.state ? iconName + " fa-flip-horizontal" : iconName;
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
//# sourceMappingURL=data:application/json;base64,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SyxTQTZFZixDQUFNLGFBQU4sQ0FBb0IsdUJBQXBCLEVBQTZDLFVBQTdDLEVBN0VlOztBQStFZixXQUFPLE9BQVAsR0FBaUIsVUFBakIsQ0EvRWU7Q0FBbEIsRUFpRkMsTUFqRkQsQ0FBRCIsImZpbGUiOiJOb2RlQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE5vZGVDb25maWcoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMsXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25OYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wZW4uc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUuc3RhdGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZXZlcnNlTGF5b3V0LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZmxpcEljb24pXG5cblxuICAgIH1cblxuXG5cblxuICAgIHZhciBwID0gTm9kZUNvbmZpZy5wcm90b3R5cGU7XG5cblxuICAgIHAuZmxpcEljb24gPSBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLmljb25OYW1lLnN0YXRlO1xuICAgICAgICBpZihpY29uTmFtZSAgJiYgaWNvbk5hbWUubGVuZ3RoID4gMCApe1xuICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIi9cIikgPT0gLTEpeyAvLyBmb250YXdlb3NtZSBpY29uc1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbk5hbWUuc3RhdGUgPSB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/aWNvbk5hbWUgKyBcIiBmYS1mbGlwLWhvcml6b250YWxcIjppY29uTmFtZTtcbiAgICAgICAgICAgIH1lbHNley8vdG9kbyBmb3IgaW1hZ2VcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHAuZ2V0Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmdldE5hbWVzKCk7XG4gICAgfVxuXG4gICAgcC5nZXROb2RlVmFsdWVGb3IgPSBmdW5jdGlvbihwcm9wZXJ0eSxkYXRhKXtcbiAgICAgICAgZGF0YSA9IGRhdGE/IGRhdGE6dGhpcy5kYXRhO1xuXG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbcHJvcGVydHldKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihwcm9wZXJ0eSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHkoZGF0YSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtwcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxhYmVsLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy5pY29uTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICB9XG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lk5vZGVDb25maWcnLCBOb2RlQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTm9kZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
