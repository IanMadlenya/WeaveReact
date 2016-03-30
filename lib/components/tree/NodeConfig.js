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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFFZixhQUFTLFVBQVQsR0FBc0I7QUFDbEIsbUNBQWlCLDhCQUFqQixDQUFnRCxJQUFoRCxFQUFxRCxXQUFyRCxFQURrQjs7QUFHbEIsZUFBTyxnQkFBUCxDQUF3QixJQUF4QixFQUE4QjtBQUMxQixxQkFBUztBQUNMLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsRUFBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0Esd0JBQVk7QUFDUix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLEVBQTlCLENBQVA7YUFESjtBQUdBLG9CQUFRO0FBQ0osdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixFQUE5QixDQUFQO2FBREo7QUFHQSxzQkFBVTtBQUNOLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsRUFBOUIsQ0FBUDthQURKO1NBVkosRUFIa0I7O0FBa0JsQixhQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLEtBQWxCLENBbEJrQjtBQW1CbEIsYUFBSyxNQUFMLENBQVksS0FBWixHQUFvQixLQUFwQixDQW5Ca0I7O0FBcUJsQixhQUFLLElBQUwsR0FBWSxJQUFaLENBckJrQjs7QUF1QmxCLGFBQUssYUFBTCxDQUFtQixvQkFBbkIsQ0FBd0MsSUFBeEMsRUFBOEMsS0FBSyxRQUFMLENBQTlDLENBdkJrQjtLQUF0Qjs7QUErQkEsUUFBSSxJQUFJLFdBQVcsU0FBWCxDQWpDTzs7QUFvQ2YsTUFBRSxRQUFGLEdBQWEsWUFBVTtBQUNuQixtQ0FBaUIsU0FBakIsQ0FBMkIsSUFBM0IsRUFBZ0MsQ0FBQyxVQUFELENBQWhDLEVBRG1CO0tBQVYsQ0FwQ0U7O0FBd0NmLE1BQUUsUUFBRixHQUFhLFlBQVk7QUFDckIsZUFBTyxLQUFLLFFBQUwsQ0FBYyxRQUFkLEVBQVAsQ0FEcUI7S0FBWixDQXhDRTs7QUE0Q2YsTUFBRSxlQUFGLEdBQW9CLFVBQVMsUUFBVCxFQUFrQixJQUFsQixFQUF1QjtBQUN2QyxlQUFPLE9BQU0sSUFBTixHQUFXLEtBQUssSUFBTCxDQURxQjs7QUFHdkMsWUFBRyxJQUFILEVBQVE7QUFDSixnQkFBRyxLQUFLLFFBQUwsYUFBMEIsUUFBMUIsRUFBbUM7QUFDbEMsdUJBQU8sS0FBSyxRQUFMLEdBQVAsQ0FEa0M7YUFBdEMsTUFFTSxJQUFHLG9CQUFvQixRQUFwQixFQUE2QjtBQUNsQyx1QkFBTyxTQUFTLElBQVQsQ0FBUCxDQURrQzthQUFoQyxNQUVEO0FBQ0QsdUJBQU8sS0FBSyxRQUFMLENBQVAsQ0FEQzthQUZDO1NBSFYsTUFRSztBQUNELG1CQUFPLEVBQVAsQ0FEQztTQVJMO0tBSGdCLENBNUNMOztBQTREZixNQUFFLEtBQUYsR0FBVSxZQUFZO0FBQ2xCLGFBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsRUFBbkIsQ0FEa0I7QUFFbEIsYUFBSyxRQUFMLENBQWMsS0FBZCxHQUFzQixFQUF0QixDQUZrQjtBQUdsQixhQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLEtBQWxCLENBSGtCO0FBSWxCLGFBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsS0FBcEIsQ0FKa0I7QUFLbEIsYUFBSyxRQUFMLENBQWMsZ0JBQWQsR0FMa0I7S0FBWjs7O0FBNURLLFNBcUVmLENBQU0sYUFBTixDQUFvQix1QkFBcEIsRUFBNkMsVUFBN0MsRUFyRWU7O0FBdUVmLFdBQU8sT0FBUCxHQUFpQixVQUFqQixDQXZFZTtDQUFsQixFQXlFQyxNQXpFRCxDQUFEIiwiZmlsZSI6Ik5vZGVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gTm9kZUNvbmZpZygpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk5hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3Blbi5zdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZS5zdGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5yZXZlcnNlTGF5b3V0LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZmxpcEljb24pO1xuXG5cbiAgICB9XG5cblxuXG5cbiAgICB2YXIgcCA9IE5vZGVDb25maWcucHJvdG90eXBlO1xuXG5cbiAgICBwLmZsaXBJY29uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5mbGlwSWNvbnModGhpcyxbXCJpY29uTmFtZVwiXSk7XG4gICAgfVxuXG4gICAgcC5nZXROb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZ2V0TmFtZXMoKTtcbiAgICB9XG5cbiAgICBwLmdldE5vZGVWYWx1ZUZvciA9IGZ1bmN0aW9uKHByb3BlcnR5LGRhdGEpe1xuICAgICAgICBkYXRhID0gZGF0YT8gZGF0YTp0aGlzLmRhdGE7XG5cbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtwcm9wZXJ0eV0oKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKHByb3BlcnR5IGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eShkYXRhKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGFiZWwudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLmljb25OYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucmVtb3ZlQWxsT2JqZWN0cygpO1xuICAgIH1cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuTm9kZUNvbmZpZycsIE5vZGVDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBOb2RlQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
