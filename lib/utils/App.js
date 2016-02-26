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

                if (child) {
                    if (child.props && !child.props.settings) props["settings"] = childConfig;
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
//# sourceMappingURL=data:application/json;base64,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QXpCLENBQWQsQ0FKSDtBQUtELGtDQUFVLFFBQVYsQ0FBbUIsY0FBbkIsQ0FBa0MsR0FBbEMsQ0FBc0MsV0FBdEMsRUFBa0QsV0FBbEQsRUFMQztBQU1ELGtDQUFVLFFBQVYsQ0FBbUIsY0FBbkIsQ0FBa0MsR0FBbEMsQ0FBc0MsV0FBdEMsRUFBa0QsV0FBbEQsRUFOQztBQU9ELCtCQUFPLFdBQVAsQ0FQQztxQkFMTDtpQkFESixNQWVNO0FBQ0YsMEJBQU0sS0FBTixJQUFlLFVBQWY7OztBQURFLHdCQUlFLGNBQWMsWUFBWSxpQkFBWixDQUE4QixLQUE5QixDQUFvQyxDQUFwQyxFQUF1QyxLQUF2QyxDQUpoQjtBQUtGLHdCQUFJLFlBQWEsSUFBSSxxQkFBSixDQUEwQixXQUExQixDQUFiLENBTEY7QUFNRix3QkFBSSxXQUFXLDhCQUFDLFNBQUQsRUFBZSxLQUFmLENBQVgsQ0FORjtBQU9GLDJCQUFPLFFBQVAsQ0FQRTtpQkFmTjthQXRDa0MsQ0ErRHBDLElBL0RvQyxDQStEL0IsSUEvRCtCLENBQWpCLENBQWpCLENBSHFDOztBQW9FekMsbUJBQU8sY0FBUCxDQXBFeUM7Ozs7a0NBdUU1QixNQUFNLEtBQUksYUFBYTtBQUNwQyxpQkFBSyxJQUFJLElBQUosSUFBWSxHQUFqQixFQUFzQjtBQUNsQixxQkFBSyxJQUFMLElBQWEsSUFBSSxJQUFKLENBQWIsQ0FEa0I7YUFBdEI7QUFHQSxtQkFBTyxJQUFQLENBSm9DOzs7O1dBaEl0Qzs7O0FBd0lOLElBQUksWUFBSixHQUFtQixFQUFuQjtBQUNBLElBQUksYUFBSixHQUFxQixJQUFJLEdBQUosRUFBckI7O2tCQUVlIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnICBmcm9tIFwiLi4vY29uZmlncy9IVE1MV3JhcHBlckNvbmZpZ1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc3RhdGljIHJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKSB7XG4gICAgICAgIGlmICghQXBwLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0pXG4gICAgICAgICAgICBBcHAudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSA9IGpzQ2xhc3M7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gQXBwLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV07XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZ2lzdGVyVG9vbENvbmZpZyAodG9vbCwgY29uZmlnKSB7XG4gICAgICAgIGlmICghQXBwLnRvb2xDb25maWdNYXAuaGFzKHRvb2wpKVxuICAgICAgICAgICAgQXBwLnRvb2xDb25maWdNYXAuc2V0KHRvb2wsY29uZmlnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9vbENvbmZpZyh0b29sKSB7XG4gICAgICAgIHJldHVybiBBcHAudG9vbENvbmZpZ01hcC5nZXQodG9vbCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihjaGlsZHJlbixjb25maWcpe1xuICAgICAgICBjb25maWcuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcblxuICAgICAgICBjb25maWcuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpe1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSBjb25maWcuY2hpbGRyZW4uZ2V0TmFtZShrZXkpO1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlbW92ZU9iamVjdChjb25maWdOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLGZ1bmN0aW9uKGNoaWxkLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZE5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkQ29uZmlnTWFwLmdldChjaGlsZCk7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWdOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7IC8vIGZvciBIVE1MIEVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaWYoIWNoaWxkQ29uZmlnKXtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJyxIVE1MV3JhcHBlckNvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7IC8vIGZvciBSZWFjdCBDb21wb3NpdGUgRWxlbWVudHNcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBBcHAuZ2V0VG9vbENvbmZpZyhjaGlsZC50eXBlKTtcbiAgICAgICAgICAgICAgICBpZighY2hpbGRDb25maWcgJiYgY29uZmlnQ2xhc3Mpe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5zdHlsZSljaGlsZENvbmZpZy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gY2hpbGQucHJvcHMuc3R5bGU7XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5jbGFzc05hbWUpY2hpbGRDb25maWcuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IGNoaWxkLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcC5zZXQoY2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyByZW5kZXJDaGlsZHJlbihyZWFjdENvbXAscHJvcHNNYW5hZ2VyKXtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG5cbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbihjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9e31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIGlmKGNoaWxkLnByb3BzICYmICFjaGlsZC5wcm9wcy5zZXR0aW5ncylwcm9wc1tcInNldHRpbmdzXCJdID0gY2hpbGRDb25maWc7XG4gICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcyxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHByb3BzTWFuYWdlcil7XG4gICAgICAgICAgICAgICAgdmFyIG9kZCA9IHByb3BzTWFuYWdlci5vZGQ7XG4gICAgICAgICAgICAgICAgaWYob2RkLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2RkQ2hpbGRyZW5JbmRleCA9IG9kZC5jaGlsZHJlbi5pbmRleE9mKGNvbmZpZ05hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZihvZGRDaGlsZHJlbkluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMsb2RkLnZhbHVlc1tvZGRDaGlsZHJlbkluZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocHJvcHNNYW5hZ2VyW1wiZGVmYXVsdFZhbHVlc1wiXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAubWVyZ2VJbnRvKHByb3BzLHByb3BzTWFuYWdlcltcImRlZmF1bHRWYWx1ZXNcIl0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihwcm9wc01hbmFnZXIuYWxsLnByb3BlcnRpZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzTWFuYWdlci5hbGwucHJvcGVydGllcy5tYXAoZnVuY3Rpb24ocHJvcE5hbWUsaSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wc01hbmFnZXIuYWxsLnZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IHZhbHVlID8gdmFsdWVbaW5kZXhdOmNvbmZpZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYocHJvcHNNYW5hZ2VyLm5ldyl7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMscHJvcHNNYW5hZ2VyLm5ldyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYocHJvcHMuc3R5bGUgJiYgcHJvcHNNYW5hZ2VyLnN0eWxlKXtcbiAgICAgICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcy5zdHlsZSxwcm9wc01hbmFnZXIuc3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGlsZCl7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wia2V5XCJdID0gY29uZmlnTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gY2hpbGRDb25maWcuRkxFWEpTX0NMQVNTX0lORk8ubmFtZXNbMF0ucU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VG9vbENsYXNzIHsuLi5wcm9wc30+e2NoaWxkfTwvVG9vbENsYXNzPjtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHByb3BzLHByb3BzTWFuYWdlci5uZXcpO1xuICAgICAgICAgICAgICAgICAgICBpZihyZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5kZWxldGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkQ2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLGNsb25lZENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBjb25maWdOYW1lO1xuICAgICAgICAgICAgICAgIC8vdG8tZG8gbmVlZCB0byByZXBsYWNlIHdpdGggZmxleGluZm8gZmlsZSBvciB0aWhlciBtZWFuLCBjcmVhdGUgYSB1dGlsaXR5IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgLy90aGlzIHNvbHV0aW9uIHdpbGwgZmFpbCB3aGVuIGNvbmZpZyBub3QgcGFydCBvZiBzZXNzaW9uIHRyZWVcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBjaGlsZENvbmZpZy5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgVG9vbENsYXNzID0gIEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24oY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZCA9IDxUb29sQ2xhc3Mgey4uLnByb3BzfS8+O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgc3RhdGljIG1lcmdlSW50byhpbnRvLCBvYmosaWdub3JlUHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludG87XG4gICAgfVxufVxuXG5BcHAudG9vbFJlZ2lzdHJ5ID0ge307XG5BcHAudG9vbENvbmZpZ01hcCA9ICBuZXcgTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4iXX0=
