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
        this.openedChild = null;
        this.selectedChild = null;
        this.selectedNodes = [];

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
    Weave.registerClass(NodeConfig, ['weavereact.NodeConfig'], [weavejs.api.core.ILinkableObject], "Node Config");

    module.exports = NodeConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,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QixDQUprQjtBQUtsQixhQUFLLFFBQUwsQ0FBYyxnQkFBZCxHQUxrQjtLQUFaOzs7QUFyRUssU0E4RWYsQ0FBTSxhQUFOLENBQXFCLFVBQXJCLEVBQWdDLENBQUMsdUJBQUQsQ0FBaEMsRUFBMEQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTNELEVBQTZGLGFBQTdGLEVBOUVlOztBQWdGZixXQUFPLE9BQVAsR0FBaUIsVUFBakIsQ0FoRmU7Q0FBbEIsRUFrRkMsTUFsRkQsQ0FBRCIsImZpbGUiOiJOb2RlQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE5vZGVDb25maWcoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMsXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25OYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wZW4uc3RhdGUgPSBmYWxzZTsgLy8gdGhpcyBvbmUgZm9yIGZvbGRlclxuICAgICAgICB0aGlzLnNlbGVjdC5zdGF0ZSA9IGZhbHNlOyAvLyB0aGlzIG9uZSBmb3IgbGVhZlxuICAgICAgICB0aGlzLmFjdGl2ZS5zdGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMub3BlbmVkQ2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbXTtcblxuICAgICAgICB0aGlzLnJldmVyc2VMYXlvdXQuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mbGlwSWNvbik7XG5cblxuICAgIH1cblxuXG5cblxuICAgIHZhciBwID0gTm9kZUNvbmZpZy5wcm90b3R5cGU7XG5cblxuICAgIHAuZmxpcEljb24gPSBmdW5jdGlvbigpe1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmZsaXBJY29ucyh0aGlzLFtcImljb25OYW1lXCJdKTtcbiAgICB9XG5cblx0XG5cbiAgICBwLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5nZXROYW1lcygpO1xuICAgIH1cblxuICAgIHAuZ2V0Tm9kZVZhbHVlRm9yID0gZnVuY3Rpb24ocHJvcGVydHksZGF0YSl7XG4gICAgICAgIGRhdGEgPSBkYXRhPyBkYXRhOnRoaXMuZGF0YTtcblxuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGFbcHJvcGVydHldIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW3Byb3BlcnR5XSgpO1xuICAgICAgICAgICAgfWVsc2UgaWYocHJvcGVydHkgaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5KGRhdGEpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuaWNvbk5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5yZW1vdmVBbGxPYmplY3RzKCk7XG4gICAgfVxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcyggTm9kZUNvbmZpZyxbJ3dlYXZlcmVhY3QuTm9kZUNvbmZpZyddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJOb2RlIENvbmZpZ1wiKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTm9kZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==