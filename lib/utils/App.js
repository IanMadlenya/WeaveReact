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
                props["settings"] = childConfig;
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
        value: function mergeInto(into, obj) {
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
//# sourceMappingURL=data:application/json;base64,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bEMsQ0FBc0MsV0FBdEMsRUFBa0QsV0FBbEQsRUFMQztBQU1ELGtDQUFVLFFBQVYsQ0FBbUIsY0FBbkIsQ0FBa0MsR0FBbEMsQ0FBc0MsV0FBdEMsRUFBa0QsV0FBbEQsRUFOQztBQU9ELCtCQUFPLFdBQVAsQ0FQQztxQkFMTDtpQkFESixNQWVNO0FBQ0YsMEJBQU0sS0FBTixJQUFlLFVBQWY7OztBQURFLHdCQUlFLGNBQWMsWUFBWSxpQkFBWixDQUE4QixLQUE5QixDQUFvQyxDQUFwQyxFQUF1QyxLQUF2QyxDQUpoQjtBQUtGLHdCQUFJLFlBQWEsSUFBSSxxQkFBSixDQUEwQixXQUExQixDQUFiLENBTEY7QUFNRix3QkFBSSxXQUFXLDhCQUFDLFNBQUQsRUFBZSxLQUFmLENBQVgsQ0FORjtBQU9GLDJCQUFPLFFBQVAsQ0FQRTtpQkFmTjthQXRDa0MsQ0ErRHBDLElBL0RvQyxDQStEL0IsSUEvRCtCLENBQWpCLENBQWpCLENBSHFDOztBQW9FekMsbUJBQU8sY0FBUCxDQXBFeUM7Ozs7a0NBdUU1QixNQUFNLEtBQUs7QUFDeEIsaUJBQUssSUFBSSxJQUFKLElBQVksR0FBakIsRUFBc0I7QUFDbEIscUJBQUssSUFBTCxJQUFhLElBQUksSUFBSixDQUFiLENBRGtCO2FBQXRCO0FBR0EsbUJBQU8sSUFBUCxDQUp3Qjs7OztXQWhJMUI7OztBQXdJTixJQUFJLFlBQUosR0FBbUIsRUFBbkI7QUFDQSxJQUFJLGFBQUosR0FBcUIsSUFBSSxHQUFKLEVBQXJCOztrQkFFZSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBIVE1MV3JhcHBlckNvbmZpZyAgZnJvbSBcIi4uL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSwganNDbGFzcykge1xuICAgICAgICBpZiAoIUFwcC50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdKVxuICAgICAgICAgICAgQXBwLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0gPSBqc0NsYXNzO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb29sSW1wbGVtZW50YXRpb24oYXNDbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIEFwcC50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xDb25maWcgKHRvb2wsIGNvbmZpZykge1xuICAgICAgICBpZiAoIUFwcC50b29sQ29uZmlnTWFwLmhhcyh0b29sKSlcbiAgICAgICAgICAgIEFwcC50b29sQ29uZmlnTWFwLnNldCh0b29sLGNvbmZpZyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xDb25maWcodG9vbCkge1xuICAgICAgICByZXR1cm4gQXBwLnRvb2xDb25maWdNYXAuZ2V0KHRvb2wpO1xuICAgIH1cblxuICAgIHN0YXRpYyBob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4oY2hpbGRyZW4sY29uZmlnKXtcbiAgICAgICAgY29uZmlnLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG5cbiAgICAgICAgY29uZmlnLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KXtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gY29uZmlnLmNoaWxkcmVuLmdldE5hbWUoa2V5KTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZW1vdmVPYmplY3QoY29uZmlnTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbixmdW5jdGlvbihjaGlsZCxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGROYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZENvbmZpZ01hcC5nZXQoY2hpbGQpO1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29uZmlnTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpeyAvLyBmb3IgSFRNTCBFbGVtZW50c1xuICAgICAgICAgICAgICAgIGlmKCFjaGlsZENvbmZpZyl7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsSFRNTFdyYXBwZXJDb25maWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNleyAvLyBmb3IgUmVhY3QgQ29tcG9zaXRlIEVsZW1lbnRzXG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gQXBwLmdldFRvb2xDb25maWcoY2hpbGQudHlwZSk7XG4gICAgICAgICAgICAgICAgaWYoIWNoaWxkQ29uZmlnICYmIGNvbmZpZ0NsYXNzKXtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJyxjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY2hpbGQucHJvcHMuc3R5bGUpY2hpbGRDb25maWcuc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IGNoaWxkLnByb3BzLnN0eWxlO1xuICAgICAgICAgICAgaWYoY2hpbGQucHJvcHMuY2xhc3NOYW1lKWNoaWxkQ29uZmlnLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBjaGlsZC5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRDb25maWdNYXAuc2V0KGNoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgcmVuZGVyQ2hpbGRyZW4ocmVhY3RDb21wLHByb3BzTWFuYWdlcil7XG4gICAgICAgIHZhciBjaGlsZENvbmZpZ3MgPSByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuXG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IGNoaWxkQ29uZmlncy5tYXAoZnVuY3Rpb24oY2hpbGRDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gcmVhY3RDb21wLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLmdldChjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9ICByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPXt9XG4gICAgICAgICAgICBwcm9wc1tcInNldHRpbmdzXCJdID0gY2hpbGRDb25maWc7XG4gICAgICAgICAgICBpZihjaGlsZCl7XG4gICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcyxjaGlsZC5wcm9wcyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocHJvcHNNYW5hZ2VyKXtcbiAgICAgICAgICAgICAgICB2YXIgb2RkID0gcHJvcHNNYW5hZ2VyLm9kZDtcbiAgICAgICAgICAgICAgICBpZihvZGQuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZGRDaGlsZHJlbkluZGV4ID0gb2RkLmNoaWxkcmVuLmluZGV4T2YoY29uZmlnTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9kZENoaWxkcmVuSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcyxvZGQudmFsdWVzW29kZENoaWxkcmVuSW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihwcm9wc01hbmFnZXJbXCJkZWZhdWx0VmFsdWVzXCJdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMscHJvcHNNYW5hZ2VyW1wiZGVmYXVsdFZhbHVlc1wiXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHByb3BzTWFuYWdlci5hbGwucHJvcGVydGllcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNNYW5hZ2VyLmFsbC5wcm9wZXJ0aWVzLm1hcChmdW5jdGlvbihwcm9wTmFtZSxpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHByb3BzTWFuYWdlci5hbGwudmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gdmFsdWUgPyB2YWx1ZVtpbmRleF06Y29uZmlnTmFtZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihwcm9wc01hbmFnZXIubmV3KXtcbiAgICAgICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcyxwcm9wc01hbmFnZXIubmV3KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihwcm9wcy5zdHlsZSAmJiBwcm9wc01hbmFnZXIuc3R5bGUpe1xuICAgICAgICAgICAgICAgICAgICBBcHAubWVyZ2VJbnRvKHByb3BzLnN0eWxlLHByb3BzTWFuYWdlci5zdHlsZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBjb25maWdOYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBjaGlsZENvbmZpZy5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9ICBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUb29sQ2xhc3Mgey4uLnByb3BzfT57Y2hpbGR9PC9Ub29sQ2xhc3M+O1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IEFwcC5tZXJnZUludG8ocHJvcHMscHJvcHNNYW5hZ2VyLm5ldyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5oYXMoY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmRlbGV0ZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWRDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KGNsb25lZENoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGNvbmZpZ05hbWU7XG4gICAgICAgICAgICAgICAgLy90by1kbyBuZWVkIHRvIHJlcGxhY2Ugd2l0aCBmbGV4aW5mbyBmaWxlIG9yIHRpaGVyIG1lYW4sIGNyZWF0ZSBhIHV0aWxpdHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAvL3RoaXMgc29sdXRpb24gd2lsbCBmYWlsIHdoZW4gY29uZmlnIG5vdCBwYXJ0IG9mIHNlc3Npb24gdHJlZVxuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPFRvb2xDbGFzcyB7Li4ucHJvcHN9Lz47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVyZ2VJbnRvKGludG8sIG9iaikge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG59XG5cbkFwcC50b29sUmVnaXN0cnkgPSB7fTtcbkFwcC50b29sQ29uZmlnTWFwID0gIG5ldyBNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbiJdfQ==
