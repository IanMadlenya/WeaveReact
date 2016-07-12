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

        this.activeChildNode = null;

        this.reverseLayout.addImmediateCallback(this, this.flipIcon);
    }

    var p = NodeConfig.prototype;

    p.flipIcon = function () {
        _ComponentManager2.default.flipIcons(this, ["iconName"]);
    };

    // this function mkaes node to behave like radio options
    p.changeActiveChildNode = function (nodeConfig) {
        if (this.activeChildNode) {
            if (this.activeChildNode !== nodeConfig) {
                this.activeChildNode.active.value = false;
                this.activeChildNode.select.value = false;

                nodeConfig.active.value = true;
                nodeConfig.select.value = true;
            }
        }
        this.activeChildNode = nodeConfig;
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
    Weave.registerClass(NodeConfig, ['weavereact.NodeConfig'], [weavejs.api.core.ILinkableObject], "Node Config");

    module.exports = NodeConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,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a0M7YUFBaEMsTUFFRDtBQUNELHVCQUFPLEtBQUssUUFBTCxDQUFQLENBREM7YUFGQztTQUhWLE1BUUs7QUFDRCxtQkFBTyxFQUFQLENBREM7U0FSTDtLQUhnQixDQXJFTDs7QUFxRmYsTUFBRSxLQUFGLEdBQVUsWUFBWTtBQUNsQixhQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQW1CLEVBQW5CLENBRGtCO0FBRWxCLGFBQUssUUFBTCxDQUFjLEtBQWQsR0FBc0IsRUFBdEIsQ0FGa0I7QUFHbEIsYUFBSyxJQUFMLENBQVUsS0FBVixHQUFrQixLQUFsQixDQUhrQjtBQUlsQixhQUFLLE1BQUwsQ0FBWSxLQUFaLEdBQW9CLEtBQXBCLENBSmtCO0FBS2xCLGFBQUssUUFBTCxDQUFjLGdCQUFkLEdBTGtCO0tBQVo7OztBQXJGSyxTQThGZixDQUFNLGFBQU4sQ0FBcUIsVUFBckIsRUFBZ0MsQ0FBQyx1QkFBRCxDQUFoQyxFQUEwRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBM0QsRUFBNkYsYUFBN0YsRUE5RmU7O0FBZ0dmLFdBQU8sT0FBUCxHQUFpQixVQUFqQixDQWhHZTtDQUFsQixFQWtHQyxNQWxHRCxDQUFEIiwiZmlsZSI6Ik5vZGVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gTm9kZUNvbmZpZygpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk5hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZWxlY3RcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3Blbi5zdGF0ZSA9IGZhbHNlOyAvLyB0aGlzIG9uZSBmb3IgZm9sZGVyXG4gICAgICAgIHRoaXMuc2VsZWN0LnN0YXRlID0gZmFsc2U7IC8vIHRoaXMgb25lIGZvciBsZWFmXG4gICAgICAgIHRoaXMuYWN0aXZlLnN0YXRlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcblxuICAgICAgICB0aGlzLmFjdGl2ZUNoaWxkTm9kZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5yZXZlcnNlTGF5b3V0LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZmxpcEljb24pO1xuXG5cbiAgICB9XG5cblxuXG5cbiAgICB2YXIgcCA9IE5vZGVDb25maWcucHJvdG90eXBlO1xuXG5cbiAgICBwLmZsaXBJY29uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5mbGlwSWNvbnModGhpcyxbXCJpY29uTmFtZVwiXSk7XG4gICAgfVxuXG5cdC8vIHRoaXMgZnVuY3Rpb24gbWthZXMgbm9kZSB0byBiZWhhdmUgbGlrZSByYWRpbyBvcHRpb25zXG5cdHAuY2hhbmdlQWN0aXZlQ2hpbGROb2RlID0gZnVuY3Rpb24gKG5vZGVDb25maWcpIFxuXHR7XG5cdFx0aWYgKHRoaXMuYWN0aXZlQ2hpbGROb2RlKVxuXHRcdHtcblx0XHRcdGlmKHRoaXMuYWN0aXZlQ2hpbGROb2RlICE9PSBub2RlQ29uZmlnKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUNoaWxkTm9kZS5hY3RpdmUudmFsdWUgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5hY3RpdmVDaGlsZE5vZGUuc2VsZWN0LnZhbHVlID0gZmFsc2U7XG5cblx0XHRcdFx0bm9kZUNvbmZpZy5hY3RpdmUudmFsdWUgPSB0cnVlO1xuXHRcdFx0XHRub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9IHRydWU7XG5cblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHR0aGlzLmFjdGl2ZUNoaWxkTm9kZSA9IG5vZGVDb25maWc7XG5cdH07XG5cbiAgICBwLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5nZXROYW1lcygpO1xuICAgIH1cblxuICAgIHAuZ2V0Tm9kZVZhbHVlRm9yID0gZnVuY3Rpb24ocHJvcGVydHksZGF0YSl7XG4gICAgICAgIGRhdGEgPSBkYXRhPyBkYXRhOnRoaXMuZGF0YTtcblxuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGFbcHJvcGVydHldIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW3Byb3BlcnR5XSgpO1xuICAgICAgICAgICAgfWVsc2UgaWYocHJvcGVydHkgaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5KGRhdGEpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuaWNvbk5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5yZW1vdmVBbGxPYmplY3RzKCk7XG4gICAgfVxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcyggTm9kZUNvbmZpZyxbJ3dlYXZlcmVhY3QuTm9kZUNvbmZpZyddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJOb2RlIENvbmZpZ1wiKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTm9kZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==