"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Style = require("./Style");

var _Style2 = _interopRequireDefault(_Style);

var _HTMLWrapperConfig = require("../configs/HTMLWrapperConfig");

var _HTMLWrapperConfig2 = _interopRequireDefault(_HTMLWrapperConfig);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);
    }

    _createClass(App, null, [{
        key: "registerToolImplementation",
        value: function registerToolImplementation(asClassName, jsClass) {
            if (!App.toolRegistry[asClassName]) App.toolRegistry[asClassName] = jsClass;
        }
    }, {
        key: "getToolImplementation",
        value: function getToolImplementation(asClassName) {
            return App.toolRegistry[asClassName];
        }
    }, {
        key: "registerToolConfig",
        value: function registerToolConfig(tool, config) {
            if (!App.toolConfigMap.has(tool)) App.toolConfigMap.set(tool, config);
        }
    }, {
        key: "getToolConfig",
        value: function getToolConfig(tool) {
            return App.toolConfigMap.get(tool);
        }
    }, {
        key: "hookSessionStateForComponentChildren",
        value: function hookSessionStateForComponentChildren(children, config) {
            config.children.delayCallbacks();

            config.childConfigMap = new Map();
            config.configChildMap.forEach(function (value, key) {
                var configName = config.children.getName(key);
                config.children.removeObject(configName);
            });
            config.configChildMap = new Map();

            _react2.default.Children.forEach(children, function (child, index) {
                var childName = "";
                var childConfig = config.childConfigMap.get(child);
                var childConfigName = "";
                if (typeof child.type === "string") {
                    // for HTML Elements
                    if (!childConfig) {
                        childConfig = config.children.requestObject('', _HTMLWrapperConfig2.default);
                    }
                } else {
                    // for React Composite Elements
                    var configClass = App.getToolConfig(child.type);
                    if (!childConfig && configClass) {
                        childConfig = config.children.requestObject('', configClass);
                    }
                }
                if (child.props.style) childConfig.style.domDefined.state = child.props.style;
                if (child.props.className) childConfig.CSS.className.state = child.props.className;
                config.childConfigMap.set(child, childConfig);
                config.configChildMap.set(childConfig, child);
            });
            config.children.resumeCallbacks();
        }
    }, {
        key: "renderChildren",
        value: function renderChildren(reactComp, propsManager) {
            var childConfigs = reactComp.settings.children.getObjects();

            var clonedChildren = childConfigs.map(function (childConfig, index) {
                var child = reactComp.settings.configChildMap.get(childConfig);
                var configName = reactComp.settings.children.getName(childConfig);
                var props = {};
                if (!child.props.settings) props["settings"] = childConfig;
                if (child) {
                    App.mergeInto(props, child.props);
                }

                if (propsManager) {
                    var odd = propsManager.odd;
                    if (odd.children.length > 0) {
                        var oddChildrenIndex = odd.children.indexOf(configName);
                        if (oddChildrenIndex > -1) {
                            App.mergeInto(props, odd.values[oddChildrenIndex]);
                        } else if (propsManager["defaultValues"]) {
                            App.mergeInto(props, propsManager["defaultValues"]);
                        }
                    }

                    if (propsManager.all.properties.length > 0) {
                        propsManager.all.properties.map(function (propName, i) {
                            var value = propsManager.all.values[i];
                            props[propName] = value ? value[index] : configName;
                        });
                    }

                    if (propsManager.new) {
                        App.mergeInto(props, propsManager.new);
                    }

                    if (props.style && propsManager.style) {
                        App.mergeInto(props.style, propsManager.style);
                    }
                }

                if (child) {
                    if (typeof child.type === "string") {
                        props["key"] = configName;
                        var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                        var ToolClass = App.getToolImplementation(configClass);
                        return _react2.default.createElement(
                            ToolClass,
                            props,
                            child
                        );
                    } else {
                        props = App.mergeInto(props, propsManager.new);
                        if (reactComp.settings.childConfigMap.has(child)) reactComp.settings.childConfigMap.delete(child);
                        var clonedChild = _react2.default.cloneElement(child, props);
                        reactComp.settings.configChildMap.set(childConfig, clonedChild);
                        reactComp.settings.childConfigMap.set(clonedChild, childConfig);
                        return clonedChild;
                    }
                } else {
                    props["key"] = configName;
                    //to-do need to replace with flexinfo file or tiher mean, create a utility function
                    //this solution will fail when config not part of session tree
                    var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                    var ToolClass = App.getToolImplementation(configClass);
                    var newChild = _react2.default.createElement(ToolClass, props);
                    return newChild;
                }
            }.bind(this));

            return clonedChildren;
        }
    }, {
        key: "mergeInto",
        value: function mergeInto(into, obj, ignoreProps) {
            for (var attr in obj) {
                into[attr] = obj[attr];
            }
            return into;
        }
    }]);

    return App;
}();

App.toolRegistry = {};
App.toolConfigMap = new Map();

exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTTtBQUNGLGFBREUsR0FDRixHQUFjOzhCQURaLEtBQ1k7S0FBZDs7aUJBREU7O21EQUtnQyxhQUFhLFNBQVM7QUFDcEQsZ0JBQUksQ0FBQyxJQUFJLFlBQUosQ0FBaUIsV0FBakIsQ0FBRCxFQUNBLElBQUksWUFBSixDQUFpQixXQUFqQixJQUFnQyxPQUFoQyxDQURKOzs7OzhDQUl5QixhQUFhO0FBQ3RDLG1CQUFPLElBQUksWUFBSixDQUFpQixXQUFqQixDQUFQLENBRHNDOzs7OzJDQUlmLE1BQU0sUUFBUTtBQUNyQyxnQkFBSSxDQUFDLElBQUksYUFBSixDQUFrQixHQUFsQixDQUFzQixJQUF0QixDQUFELEVBQ0EsSUFBSSxhQUFKLENBQWtCLEdBQWxCLENBQXNCLElBQXRCLEVBQTJCLE1BQTNCLEVBREo7Ozs7c0NBSWlCLE1BQU07QUFDdkIsbUJBQU8sSUFBSSxhQUFKLENBQWtCLEdBQWxCLENBQXNCLElBQXRCLENBQVAsQ0FEdUI7Ozs7NkRBSWlCLFVBQVMsUUFBTztBQUN4RCxtQkFBTyxRQUFQLENBQWdCLGNBQWhCLEdBRHdEOztBQUd4RCxtQkFBTyxjQUFQLEdBQXdCLElBQUksR0FBSixFQUF4QixDQUh3RDtBQUl4RCxtQkFBTyxjQUFQLENBQXNCLE9BQXRCLENBQThCLFVBQVMsS0FBVCxFQUFnQixHQUFoQixFQUFvQjtBQUM5QyxvQkFBSSxhQUFhLE9BQU8sUUFBUCxDQUFnQixPQUFoQixDQUF3QixHQUF4QixDQUFiLENBRDBDO0FBRTlDLHVCQUFPLFFBQVAsQ0FBZ0IsWUFBaEIsQ0FBNkIsVUFBN0IsRUFGOEM7YUFBcEIsQ0FBOUIsQ0FKd0Q7QUFReEQsbUJBQU8sY0FBUCxHQUF3QixJQUFJLEdBQUosRUFBeEIsQ0FSd0Q7O0FBVXhELDRCQUFNLFFBQU4sQ0FBZSxPQUFmLENBQXVCLFFBQXZCLEVBQWdDLFVBQVMsS0FBVCxFQUFlLEtBQWYsRUFBcUI7QUFDakQsb0JBQUksWUFBWSxFQUFaLENBRDZDO0FBRWpELG9CQUFJLGNBQWMsT0FBTyxjQUFQLENBQXNCLEdBQXRCLENBQTBCLEtBQTFCLENBQWQsQ0FGNkM7QUFHakQsb0JBQUksa0JBQWtCLEVBQWxCLENBSDZDO0FBSWpELG9CQUFHLE9BQU8sTUFBTSxJQUFOLEtBQWdCLFFBQXZCLEVBQWdDOztBQUMvQix3QkFBRyxDQUFDLFdBQUQsRUFBYTtBQUNaLHNDQUFjLE9BQU8sUUFBUCxDQUFnQixhQUFoQixDQUE4QixFQUE5Qiw4QkFBZCxDQURZO3FCQUFoQjtpQkFESixNQUlLOztBQUNELHdCQUFJLGNBQWMsSUFBSSxhQUFKLENBQWtCLE1BQU0sSUFBTixDQUFoQyxDQURIO0FBRUQsd0JBQUcsQ0FBQyxXQUFELElBQWdCLFdBQWhCLEVBQTRCO0FBQzNCLHNDQUFjLE9BQU8sUUFBUCxDQUFnQixhQUFoQixDQUE4QixFQUE5QixFQUFpQyxXQUFqQyxDQUFkLENBRDJCO3FCQUEvQjtpQkFOSjtBQVVBLG9CQUFHLE1BQU0sS0FBTixDQUFZLEtBQVosRUFBa0IsWUFBWSxLQUFaLENBQWtCLFVBQWxCLENBQTZCLEtBQTdCLEdBQXFDLE1BQU0sS0FBTixDQUFZLEtBQVosQ0FBMUQ7QUFDQSxvQkFBRyxNQUFNLEtBQU4sQ0FBWSxTQUFaLEVBQXNCLFlBQVksR0FBWixDQUFnQixTQUFoQixDQUEwQixLQUExQixHQUFrQyxNQUFNLEtBQU4sQ0FBWSxTQUFaLENBQTNEO0FBQ0EsdUJBQU8sY0FBUCxDQUFzQixHQUF0QixDQUEwQixLQUExQixFQUFnQyxXQUFoQyxFQWhCaUQ7QUFpQmpELHVCQUFPLGNBQVAsQ0FBc0IsR0FBdEIsQ0FBMEIsV0FBMUIsRUFBc0MsS0FBdEMsRUFqQmlEO2FBQXJCLENBQWhDLENBVndEO0FBNkJ4RCxtQkFBTyxRQUFQLENBQWdCLGVBQWhCLEdBN0J3RDs7Ozt1Q0FrQ3RDLFdBQVUsY0FBYTtBQUN6QyxnQkFBSSxlQUFlLFVBQVUsUUFBVixDQUFtQixRQUFuQixDQUE0QixVQUE1QixFQUFmLENBRHFDOztBQUd6QyxnQkFBSSxpQkFBaUIsYUFBYSxHQUFiLENBQWlCLFVBQVMsV0FBVCxFQUFxQixLQUFyQixFQUEyQjtBQUM3RCxvQkFBSSxRQUFRLFVBQVUsUUFBVixDQUFtQixjQUFuQixDQUFrQyxHQUFsQyxDQUFzQyxXQUF0QyxDQUFSLENBRHlEO0FBRTdELG9CQUFJLGFBQWMsVUFBVSxRQUFWLENBQW1CLFFBQW5CLENBQTRCLE9BQTVCLENBQW9DLFdBQXBDLENBQWQsQ0FGeUQ7QUFHN0Qsb0JBQUksUUFBTyxFQUFQLENBSHlEO0FBSTdELG9CQUFHLENBQUMsTUFBTSxLQUFOLENBQVksUUFBWixFQUFxQixNQUFNLFVBQU4sSUFBb0IsV0FBcEIsQ0FBekI7QUFDQSxvQkFBRyxLQUFILEVBQVM7QUFDTCx3QkFBSSxTQUFKLENBQWMsS0FBZCxFQUFvQixNQUFNLEtBQU4sQ0FBcEIsQ0FESztpQkFBVDs7QUFJQSxvQkFBRyxZQUFILEVBQWdCO0FBQ1osd0JBQUksTUFBTSxhQUFhLEdBQWIsQ0FERTtBQUVaLHdCQUFHLElBQUksUUFBSixDQUFhLE1BQWIsR0FBc0IsQ0FBdEIsRUFBd0I7QUFDdkIsNEJBQUksbUJBQW1CLElBQUksUUFBSixDQUFhLE9BQWIsQ0FBcUIsVUFBckIsQ0FBbkIsQ0FEbUI7QUFFdkIsNEJBQUcsbUJBQW1CLENBQUMsQ0FBRCxFQUFJO0FBQ3RCLGdDQUFJLFNBQUosQ0FBYyxLQUFkLEVBQW9CLElBQUksTUFBSixDQUFXLGdCQUFYLENBQXBCLEVBRHNCO3lCQUExQixNQUVNLElBQUcsYUFBYSxlQUFiLENBQUgsRUFBaUM7QUFDbkMsZ0NBQUksU0FBSixDQUFjLEtBQWQsRUFBb0IsYUFBYSxlQUFiLENBQXBCLEVBRG1DO3lCQUFqQztxQkFKVjs7QUFTQSx3QkFBRyxhQUFhLEdBQWIsQ0FBaUIsVUFBakIsQ0FBNEIsTUFBNUIsR0FBcUMsQ0FBckMsRUFBdUM7QUFDdEMscUNBQWEsR0FBYixDQUFpQixVQUFqQixDQUE0QixHQUE1QixDQUFnQyxVQUFTLFFBQVQsRUFBa0IsQ0FBbEIsRUFBb0I7QUFDaEQsZ0NBQUksUUFBUSxhQUFhLEdBQWIsQ0FBaUIsTUFBakIsQ0FBd0IsQ0FBeEIsQ0FBUixDQUQ0QztBQUVoRCxrQ0FBTSxRQUFOLElBQWtCLFFBQVEsTUFBTSxLQUFOLENBQVIsR0FBcUIsVUFBckIsQ0FGOEI7eUJBQXBCLENBQWhDLENBRHNDO3FCQUExQzs7QUFPQSx3QkFBRyxhQUFhLEdBQWIsRUFBaUI7QUFDaEIsNEJBQUksU0FBSixDQUFjLEtBQWQsRUFBb0IsYUFBYSxHQUFiLENBQXBCLENBRGdCO3FCQUFwQjs7QUFJQSx3QkFBRyxNQUFNLEtBQU4sSUFBZSxhQUFhLEtBQWIsRUFBbUI7QUFDakMsNEJBQUksU0FBSixDQUFjLE1BQU0sS0FBTixFQUFZLGFBQWEsS0FBYixDQUExQixDQURpQztxQkFBckM7aUJBdEJKOztBQTRCQSxvQkFBRyxLQUFILEVBQVM7QUFDTCx3QkFBRyxPQUFPLE1BQU0sSUFBTixLQUFnQixRQUF2QixFQUFnQztBQUM5Qiw4QkFBTSxLQUFOLElBQWUsVUFBZixDQUQ4QjtBQUUvQiw0QkFBSSxjQUFjLFlBQVksaUJBQVosQ0FBOEIsS0FBOUIsQ0FBb0MsQ0FBcEMsRUFBdUMsS0FBdkMsQ0FGYTtBQUcvQiw0QkFBSSxZQUFhLElBQUkscUJBQUosQ0FBMEIsV0FBMUIsQ0FBYixDQUgyQjtBQUkvQiwrQkFBTztBQUFDLHFDQUFEOzRCQUFlLEtBQWY7NEJBQXVCLEtBQXZCO3lCQUFQLENBSitCO3FCQUFuQyxNQUtLO0FBQ0QsZ0NBQVEsSUFBSSxTQUFKLENBQWMsS0FBZCxFQUFvQixhQUFhLEdBQWIsQ0FBNUIsQ0FEQztBQUVELDRCQUFHLFVBQVUsUUFBVixDQUFtQixjQUFuQixDQUFrQyxHQUFsQyxDQUFzQyxLQUF0QyxDQUFILEVBQ0ksVUFBVSxRQUFWLENBQW1CLGNBQW5CLENBQWtDLE1BQWxDLENBQXlDLEtBQXpDLEVBREo7QUFFQSw0QkFBSSxjQUFjLGdCQUFNLFlBQU4sQ0FBbUIsS0FBbkIsRUFBeUIsS0FBekIsQ0FBZCxDQUpIO0FBS0Qsa0NBQVUsUUFBVixDQUFtQixjQUFuQixDQUFrQyxHQUFsQyxDQUFzQyxXQUF0QyxFQUFrRCxXQUFsRCxFQUxDO0FBTUQsa0NBQVUsUUFBVixDQUFtQixjQUFuQixDQUFrQyxHQUFsQyxDQUFzQyxXQUF0QyxFQUFrRCxXQUFsRCxFQU5DO0FBT0QsK0JBQU8sV0FBUCxDQVBDO3FCQUxMO2lCQURKLE1BZU07QUFDRiwwQkFBTSxLQUFOLElBQWUsVUFBZjs7O0FBREUsd0JBSUUsY0FBYyxZQUFZLGlCQUFaLENBQThCLEtBQTlCLENBQW9DLENBQXBDLEVBQXVDLEtBQXZDLENBSmhCO0FBS0Ysd0JBQUksWUFBYSxJQUFJLHFCQUFKLENBQTBCLFdBQTFCLENBQWIsQ0FMRjtBQU1GLHdCQUFJLFdBQVcsOEJBQUMsU0FBRCxFQUFlLEtBQWYsQ0FBWCxDQU5GO0FBT0YsMkJBQU8sUUFBUCxDQVBFO2lCQWZOO2FBckNrQyxDQThEcEMsSUE5RG9DLENBOEQvQixJQTlEK0IsQ0FBakIsQ0FBakIsQ0FIcUM7O0FBbUV6QyxtQkFBTyxjQUFQLENBbkV5Qzs7OztrQ0FzRTVCLE1BQU0sS0FBSSxhQUFhO0FBQ3BDLGlCQUFLLElBQUksSUFBSixJQUFZLEdBQWpCLEVBQXNCO0FBQ2xCLHFCQUFLLElBQUwsSUFBYSxJQUFJLElBQUosQ0FBYixDQURrQjthQUF0QjtBQUdBLG1CQUFPLElBQVAsQ0FKb0M7Ozs7V0EvSHRDOzs7QUF1SU4sSUFBSSxZQUFKLEdBQW1CLEVBQW5CO0FBQ0EsSUFBSSxhQUFKLEdBQXFCLElBQUksR0FBSixFQUFyQjs7a0JBRWUiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXJDb25maWcgIGZyb20gXCIuLi9jb25maWdzL0hUTUxXcmFwcGVyQ29uZmlnXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oYXNDbGFzc05hbWUsIGpzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFBcHAudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSlcbiAgICAgICAgICAgIEFwcC50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdID0ganNDbGFzcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9vbEltcGxlbWVudGF0aW9uKGFzQ2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBBcHAudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVnaXN0ZXJUb29sQ29uZmlnICh0b29sLCBjb25maWcpIHtcbiAgICAgICAgaWYgKCFBcHAudG9vbENvbmZpZ01hcC5oYXModG9vbCkpXG4gICAgICAgICAgICBBcHAudG9vbENvbmZpZ01hcC5zZXQodG9vbCxjb25maWcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb29sQ29uZmlnKHRvb2wpIHtcbiAgICAgICAgcmV0dXJuIEFwcC50b29sQ29uZmlnTWFwLmdldCh0b29sKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKGNoaWxkcmVuLGNvbmZpZyl7XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuXG4gICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSl7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9IGNvbmZpZy5jaGlsZHJlbi5nZXROYW1lKGtleSk7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVtb3ZlT2JqZWN0KGNvbmZpZ05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sZnVuY3Rpb24oY2hpbGQsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRDb25maWdNYXAuZ2V0KGNoaWxkKTtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZ05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXsgLy8gZm9yIEhUTUwgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZighY2hpbGRDb25maWcpe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXsgLy8gZm9yIFJlYWN0IENvbXBvc2l0ZSBFbGVtZW50c1xuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IEFwcC5nZXRUb29sQ29uZmlnKGNoaWxkLnR5cGUpO1xuICAgICAgICAgICAgICAgIGlmKCFjaGlsZENvbmZpZyAmJiBjb25maWdDbGFzcyl7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNoaWxkLnByb3BzLnN0eWxlKWNoaWxkQ29uZmlnLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBjaGlsZC5wcm9wcy5zdHlsZTtcbiAgICAgICAgICAgIGlmKGNoaWxkLnByb3BzLmNsYXNzTmFtZSljaGlsZENvbmZpZy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gY2hpbGQucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkQ29uZmlnTWFwLnNldChjaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIHJlbmRlckNoaWxkcmVuKHJlYWN0Q29tcCxwcm9wc01hbmFnZXIpe1xuICAgICAgICB2YXIgY2hpbGRDb25maWdzID0gcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcblxuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBjaGlsZENvbmZpZ3MubWFwKGZ1bmN0aW9uKGNoaWxkQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5nZXQoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSAgcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgdmFyIHByb3BzID17fVxuICAgICAgICAgICAgaWYoIWNoaWxkLnByb3BzLnNldHRpbmdzKXByb3BzW1wic2V0dGluZ3NcIl0gPSBjaGlsZENvbmZpZztcbiAgICAgICAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgICAgICAgICBBcHAubWVyZ2VJbnRvKHByb3BzLGNoaWxkLnByb3BzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocHJvcHNNYW5hZ2VyKXtcbiAgICAgICAgICAgICAgICB2YXIgb2RkID0gcHJvcHNNYW5hZ2VyLm9kZDtcbiAgICAgICAgICAgICAgICBpZihvZGQuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZGRDaGlsZHJlbkluZGV4ID0gb2RkLmNoaWxkcmVuLmluZGV4T2YoY29uZmlnTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9kZENoaWxkcmVuSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcyxvZGQudmFsdWVzW29kZENoaWxkcmVuSW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihwcm9wc01hbmFnZXJbXCJkZWZhdWx0VmFsdWVzXCJdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMscHJvcHNNYW5hZ2VyW1wiZGVmYXVsdFZhbHVlc1wiXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHByb3BzTWFuYWdlci5hbGwucHJvcGVydGllcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNNYW5hZ2VyLmFsbC5wcm9wZXJ0aWVzLm1hcChmdW5jdGlvbihwcm9wTmFtZSxpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHByb3BzTWFuYWdlci5hbGwudmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gdmFsdWUgPyB2YWx1ZVtpbmRleF06Y29uZmlnTmFtZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihwcm9wc01hbmFnZXIubmV3KXtcbiAgICAgICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcyxwcm9wc01hbmFnZXIubmV3KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihwcm9wcy5zdHlsZSAmJiBwcm9wc01hbmFnZXIuc3R5bGUpe1xuICAgICAgICAgICAgICAgICAgICBBcHAubWVyZ2VJbnRvKHByb3BzLnN0eWxlLHByb3BzTWFuYWdlci5zdHlsZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBjb25maWdOYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBjaGlsZENvbmZpZy5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9ICBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUb29sQ2xhc3Mgey4uLnByb3BzfT57Y2hpbGR9PC9Ub29sQ2xhc3M+O1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IEFwcC5tZXJnZUludG8ocHJvcHMscHJvcHNNYW5hZ2VyLm5ldyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5oYXMoY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmRlbGV0ZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWRDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KGNsb25lZENoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGNvbmZpZ05hbWU7XG4gICAgICAgICAgICAgICAgLy90by1kbyBuZWVkIHRvIHJlcGxhY2Ugd2l0aCBmbGV4aW5mbyBmaWxlIG9yIHRpaGVyIG1lYW4sIGNyZWF0ZSBhIHV0aWxpdHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAvL3RoaXMgc29sdXRpb24gd2lsbCBmYWlsIHdoZW4gY29uZmlnIG5vdCBwYXJ0IG9mIHNlc3Npb24gdHJlZVxuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPFRvb2xDbGFzcyB7Li4ucHJvcHN9Lz47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVyZ2VJbnRvKGludG8sIG9iaixpZ25vcmVQcm9wcykge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG59XG5cbkFwcC50b29sUmVnaXN0cnkgPSB7fTtcbkFwcC50b29sQ29uZmlnTWFwID0gIG5ldyBNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbiJdfQ==
