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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(reactComp, nextProps) {
            if (reactComp.props.settings !== nextProps.settings) {
                if (nextProps.settings) {
                    App.removeForceUpdateFromCallbacks(reactComp);
                    reactComp.settings = nextProps.settings;
                    App.addForceUpdateToCallbacks(reactComp);
                }
            }
            if (reactComp.props.style !== nextProps.style) {
                // user style added through UI is Sessioned
                if (nextProps.style) reactComp.settings.style.domDefined.state = nextProps.style;
            }
            if (reactComp.props.children !== nextProps.children) {
                var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
                App.hookSessionStateForComponentChildren(nextProps.children, reactComp.settings, WrapperConfigClass);
            }
        }
    }, {
        key: "addForceUpdateToCallbacks",
        value: function addForceUpdateToCallbacks(reactComp) {
            var config = reactComp.settings;
            if (!Weave.isLinkable(config)) console.error(config, " is not a LinkableObject");
            var propertyNames = Object.getOwnPropertyNames(config);
            for (var i = 0; i < propertyNames.length; i++) {
                var pn = propertyNames[i];
                var obj = config[pn];
                if (Weave.isLinkable(obj)) {
                    if (obj instanceof weavejs.core.LinkableHashMap) obj = obj.childListCallbacks;
                    Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
                }
            }
        }
    }, {
        key: "removeForceUpdateFromCallbacks",
        value: function removeForceUpdateFromCallbacks(reactComp) {
            var config = reactComp.settings;
            if (!Weave.isLinkable(config)) console.error(config, " is not a LinkableObject");
            var propertyNames = Object.getOwnPropertyNames(config);
            for (var i = 0; i < propertyNames.length; i++) {
                var pn = propertyNames[i];
                var obj = config[pn];
                if (Weave.isLinkable(obj)) {
                    if (obj instanceof weavejs.core.LinkableHashMap) obj = obj.childListCallbacks;
                    Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
                }
            }
        }

        //For testing  and debug

    }, {
        key: "isSessionChangedFor",
        value: function isSessionChangedFor(config) {
            if (!Weave.isLinkable(config)) console.error(config, " is not a LinkableObject");
            var propertyNames = Object.getOwnPropertyNames(config);
            var linkbleObject = null;
            var moreLinkableObjects = [];
            for (var i = 0; i < propertyNames.length; i++) {
                var pn = propertyNames[i];
                var obj = config[pn];
                if (Weave.isLinkable(obj)) {
                    var lo = obj instanceof weavejs.core.LinkableHashMap ? obj.childListCallbacks : obj;
                    if (!linkbleObject) linkbleObject = lo;else moreLinkableObjects.push(lo);
                }
            }

            if (App.debug) {
                var isChanged = false;
                if (moreLinkableObjects.length > 0) {

                    for (var i = 0; i < moreLinkableObjects.length; i++) {
                        isChanged = Weave.detectChange(config, moreLinkableObjects[i]);
                        if (isChanged) {
                            console.log(moreLinkableObjects[i], " changed");
                        }
                    }
                } else if (linkbleObject) {
                    isChanged = Weave.detectChange(config, linkbleObject);
                    if (isChanged) {
                        console.log(linkbleObject, " changed");
                    }
                } else {
                    console.log(config, " no session Children");
                }
            }

            if (moreLinkableObjects.length > 0) return Weave.detectChange(config, linkbleObject, moreLinkableObjects);else if (linkbleObject) return Weave.detectChange(config, linkbleObject);else return false;
        }
    }, {
        key: "hookSessionStateForComponentChildren",
        value: function hookSessionStateForComponentChildren(children, config, WrapperConfigClass) {
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
                        var configClass = WrapperConfigClass ? WrapperConfigClass : _HTMLWrapperConfig2.default;
                        childConfig = config.children.requestObject('', configClass);
                    }
                } else {
                    // for React Composite Elements
                    var configClass = App.getToolConfig(child.type);
                    if (!childConfig && configClass) {
                        childConfig = config.children.requestObject('', configClass);
                    }
                }
                var _child$props = child.props;
                var className = _child$props.className;
                var style = _child$props.style;

                var other = _objectWithoutProperties(_child$props, ["className", "style"]);

                if (child.props.enable && childConfig.enable) childConfig.enable.state = child.props.enable;
                if (style) childConfig.style.domDefined.state = style;
                if (className) childConfig.CSS.className.state = className;
                if (other && childConfig.props) childConfig.props.merge(other);
                config.childConfigMap.set(child, childConfig);
                config.configChildMap.set(childConfig, child);
            });

            if (config["addGapAt"]) {
                config.children.requestObject('gapDiv', _HTMLWrapperConfig2.default);
            }
            config.children.resumeCallbacks();
        }
    }, {
        key: "renderChildren",
        value: function renderChildren(reactComp, childList) {
            var childConfigs = reactComp.settings.children.getObjects();
            var propsConfig = reactComp.settings.props;

            var clonedChildren = childConfigs.map(function (childConfig, index) {
                var child = reactComp.settings.configChildMap.get(childConfig);
                var configName = reactComp.settings.children.getName(childConfig);

                if (childList) {
                    if (childList.indexOf(configName) == -1) {
                        return null; //
                    }
                }
                var props = {};

                props["settings"] = childConfig;
                if (child) {
                    //if(child.props && !child.props.settings)

                    App.mergeInto(props, child.props);
                }
                if (propsConfig && propsConfig.hasChildProps()) {
                    var obj = propsConfig.getPropsForChild(reactComp, childConfig, configName, index);
                    App.mergeInto(props, obj);
                    var key = propsConfig.keyProp;
                    if (key && key.length > 0) {
                        if (key === "index") props["key"] = index;else if (key === "objectName") props["key"] = configName;else if (childConfig[key]) {
                            if (childConfig[key] instanceof weavejs.core.LinkableVariable) props["key"] = childConfig[key].state;else props["key"] = childConfig[key];
                        }
                    } else {
                        props["key"] = index;
                    }
                } else {
                    props["key"] = index;
                }

                if (childConfig.props) {
                    var thisArg = child ? child : childConfig;
                    App.mergeInto(props, childConfig.props.getProps(thisArg, childConfig, configName, index));
                }

                if (child) {
                    if (typeof child.type === "string") {
                        var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                        var ToolClass = App.getToolImplementation(configClass);
                        return _react2.default.createElement(
                            ToolClass,
                            props,
                            " ",
                            child,
                            " "
                        );
                    } else {
                        if (reactComp.settings.childConfigMap.has(child)) reactComp.settings.childConfigMap.delete(child);
                        var clonedChild = _react2.default.cloneElement(child, props);
                        reactComp.settings.configChildMap.set(childConfig, clonedChild);
                        reactComp.settings.childConfigMap.set(clonedChild, childConfig);
                        return clonedChild;
                    }
                } else {
                    if (configName === "gapDiv") {
                        var orderValue = String(reactComp.settings.addGapAt.state);
                        if (!isNaN(orderValue)) {
                            props["style"] = {
                                flex: "1",
                                order: orderValue
                            };
                        }
                    }
                    //to-do need to replace with flexinfo file or tiher mean, create a utility function
                    //this solution will fail when config not part of session tree
                    var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                    var ToolClass = App.getToolImplementation(configClass);
                    var newChild = _react2.default.createElement(ToolClass, props);
                    return newChild;
                }
            }.bind(this));

            if (childList && childList.length > 0) {
                var filteredChildren = clonedChildren.filter(function (child, index) {
                    if (child === null) return false;else return true;
                }, this);
                return filteredChildren;
            } else return clonedChildren;
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
App.debug = false;

exports.default = App;
//# sourceMappingURL=data:application/json;base64,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QU0sT0FBTixJQUFpQjtBQUNiLHNDQUFNLEdBQU47QUFDQSx1Q0FBTyxVQUFQOzZCQUZKLENBRG9CO3lCQUF4QjtxQkFGSjs7O0FBREcsd0JBWUMsY0FBYyxZQUFZLGlCQUFaLENBQThCLEtBQTlCLENBQW9DLENBQXBDLEVBQXVDLEtBQXZDLENBWmY7QUFhSCx3QkFBSSxZQUFZLElBQUkscUJBQUosQ0FBMEIsV0FBMUIsQ0FBWixDQWJEO0FBY0gsd0JBQUksV0FBVyw4QkFBRSxTQUFGLEVBQWdCLEtBQWhCLENBQVgsQ0FkRDtBQWVILDJCQUFPLFFBQVAsQ0FmRztpQkFiUDthQXpDa0MsQ0F3RXBDLElBeEVvQyxDQXdFL0IsSUF4RStCLENBQWpCLENBQWpCLENBSm1DOztBQThFdkMsZ0JBQUcsYUFBYSxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsRUFBcUI7QUFDakMsb0JBQUksbUJBQW1CLGVBQWUsTUFBZixDQUFzQixVQUFTLEtBQVQsRUFBZSxLQUFmLEVBQXFCO0FBQzlELHdCQUFHLFVBQVUsSUFBVixFQUNDLE9BQU8sS0FBUCxDQURKLEtBR0ksT0FBTyxJQUFQLENBSEo7aUJBRHlDLEVBSzNDLElBTHFCLENBQW5CLENBRDZCO0FBT2pDLHVCQUFPLGdCQUFQLENBUGlDO2FBQXJDLE1BU0ksT0FBTyxjQUFQLENBVEo7Ozs7a0NBWWEsTUFBTSxLQUFLLGFBQWE7QUFDckMsaUJBQUssSUFBSSxJQUFKLElBQVksR0FBakIsRUFBc0I7QUFDbEIscUJBQUssSUFBTCxJQUFhLElBQUksSUFBSixDQUFiLENBRGtCO2FBQXRCO0FBR0EsbUJBQU8sSUFBUCxDQUpxQzs7OztXQW5RdkM7OztBQTJRTixJQUFJLFlBQUosR0FBbUIsRUFBbkI7QUFDQSxJQUFJLGFBQUosR0FBb0IsSUFBSSxHQUFKLEVBQXBCO0FBQ0EsSUFBSSxLQUFKLEdBQVksS0FBWjs7a0JBRWUiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnIGZyb20gXCIuLi9jb25maWdzL0hUTUxXcmFwcGVyQ29uZmlnXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oYXNDbGFzc05hbWUsIGpzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFBcHAudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSlcbiAgICAgICAgICAgIEFwcC50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdID0ganNDbGFzcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9vbEltcGxlbWVudGF0aW9uKGFzQ2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBBcHAudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVnaXN0ZXJUb29sQ29uZmlnKHRvb2wsIGNvbmZpZykge1xuICAgICAgICBpZiAoIUFwcC50b29sQ29uZmlnTWFwLmhhcyh0b29sKSlcbiAgICAgICAgICAgIEFwcC50b29sQ29uZmlnTWFwLnNldCh0b29sLCBjb25maWcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb29sQ29uZmlnKHRvb2wpIHtcbiAgICAgICAgcmV0dXJuIEFwcC50b29sQ29uZmlnTWFwLmdldCh0b29sKTtcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocmVhY3RDb21wLCBuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgQXBwLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyhyZWFjdENvbXApO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICBBcHAuYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSkgeyAvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnN0eWxlKSByZWFjdENvbXAuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHZhciBXcmFwcGVyQ29uZmlnQ2xhc3MgPSByZWFjdENvbXBbXCJXcmFwcGVyQ29uZmlnQ2xhc3NcIl0gPyByZWFjdENvbXBbXCJXcmFwcGVyQ29uZmlnQ2xhc3NcIl0gOiBudWxsO1xuICAgICAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihuZXh0UHJvcHMuY2hpbGRyZW4sIHJlYWN0Q29tcC5zZXR0aW5ncywgV3JhcHBlckNvbmZpZ0NsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3MocmVhY3RDb21wKSB7XG4gICAgICAgIHZhciBjb25maWcgPSByZWFjdENvbXAuc2V0dGluZ3M7XG4gICAgICAgIGlmICghV2VhdmUuaXNMaW5rYWJsZShjb25maWcpKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb25maWcsIFwiIGlzIG5vdCBhIExpbmthYmxlT2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbmZpZyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBuID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBvYmogPSBjb25maWdbcG5dO1xuICAgICAgICAgICAgaWYgKFdlYXZlLmlzTGlua2FibGUob2JqKSkge1xuICAgICAgICAgICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKVxuICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzO1xuICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLmFkZEdyb3VwZWRDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyhyZWFjdENvbXApIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncztcbiAgICAgICAgaWYgKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZiAoV2VhdmUuaXNMaW5rYWJsZShvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG9iai5jaGlsZExpc3RDYWxsYmFja3M7XG4gICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikucmVtb3ZlQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG4gICAgLy9Gb3IgdGVzdGluZyAgYW5kIGRlYnVnXG4gICAgc3RhdGljIGlzU2Vzc2lvbkNoYW5nZWRGb3IoY29uZmlnKSB7XG4gICAgICAgIGlmICghV2VhdmUuaXNMaW5rYWJsZShjb25maWcpKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb25maWcsIFwiIGlzIG5vdCBhIExpbmthYmxlT2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbmZpZyk7XG4gICAgICAgIHZhciBsaW5rYmxlT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgdmFyIG1vcmVMaW5rYWJsZU9iamVjdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZiAoV2VhdmUuaXNMaW5rYWJsZShvYmopKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvID0gKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApID8gb2JqLmNoaWxkTGlzdENhbGxiYWNrcyA6IG9ialxuICAgICAgICAgICAgICAgIGlmICghbGlua2JsZU9iamVjdCkgbGlua2JsZU9iamVjdCA9IGxvO1xuICAgICAgICAgICAgICAgIGVsc2UgbW9yZUxpbmthYmxlT2JqZWN0cy5wdXNoKGxvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcHAuZGVidWcpIHtcbiAgICAgICAgICAgIHZhciBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChtb3JlTGlua2FibGVPYmplY3RzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9yZUxpbmthYmxlT2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpc0NoYW5nZWQgPSBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBtb3JlTGlua2FibGVPYmplY3RzW2ldKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtb3JlTGlua2FibGVPYmplY3RzW2ldLCBcIiBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaW5rYmxlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkID0gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbGlua2JsZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaW5rYmxlT2JqZWN0LCBcIiBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlnLCBcIiBubyBzZXNzaW9uIENoaWxkcmVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBsaW5rYmxlT2JqZWN0LCBtb3JlTGlua2FibGVPYmplY3RzKVxuICAgICAgICBlbHNlIGlmIChsaW5rYmxlT2JqZWN0KVxuICAgICAgICAgICAgcmV0dXJuIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyBob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4oY2hpbGRyZW4sIGNvbmZpZywgV3JhcHBlckNvbmZpZ0NsYXNzKSB7XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuXG4gICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gY29uZmlnLmNoaWxkcmVuLmdldE5hbWUoa2V5KTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZW1vdmVPYmplY3QoY29uZmlnTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRDb25maWdNYXAuZ2V0KGNoaWxkKTtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZ05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpIHsgLy8gZm9yIEhUTUwgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IFdyYXBwZXJDb25maWdDbGFzcyA/IFdyYXBwZXJDb25maWdDbGFzcyA6IEhUTUxXcmFwcGVyQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsIGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBmb3IgUmVhY3QgQ29tcG9zaXRlIEVsZW1lbnRzXG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gQXBwLmdldFRvb2xDb25maWcoY2hpbGQudHlwZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZENvbmZpZyAmJiBjb25maWdDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLCBjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHtjbGFzc05hbWUsIHN0eWxlLCAuLi5vdGhlcn0gPSBjaGlsZC5wcm9wcztcbiAgICAgICAgICAgIGlmKGNoaWxkLnByb3BzLmVuYWJsZSAmJiBjaGlsZENvbmZpZy5lbmFibGUpY2hpbGRDb25maWcuZW5hYmxlLnN0YXRlID0gY2hpbGQucHJvcHMuZW5hYmxlO1xuICAgICAgICAgICAgaWYgKHN0eWxlKSBjaGlsZENvbmZpZy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gc3R5bGU7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSBjaGlsZENvbmZpZy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gY2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKG90aGVyICYmIGNoaWxkQ29uZmlnLnByb3BzKSBjaGlsZENvbmZpZy5wcm9wcy5tZXJnZShvdGhlcik7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRDb25maWdNYXAuc2V0KGNoaWxkLCBjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLCBjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb25maWdbXCJhZGRHYXBBdFwiXSkge1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJ2dhcERpdicsIEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyByZW5kZXJDaGlsZHJlbihyZWFjdENvbXAsY2hpbGRMaXN0KSB7XG4gICAgICAgIHZhciBjaGlsZENvbmZpZ3MgPSByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICB2YXIgcHJvcHNDb25maWcgPSByZWFjdENvbXAuc2V0dGluZ3MucHJvcHM7XG5cbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbiAoY2hpbGRDb25maWcsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihjaGlsZExpc3Qpe1xuICAgICAgICAgICAgICAgICBpZihjaGlsZExpc3QuaW5kZXhPZihjb25maWdOYW1lKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHt9XG5cbiAgICAgICAgICAgIHByb3BzW1wic2V0dGluZ3NcIl0gPSBjaGlsZENvbmZpZztcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIC8vaWYoY2hpbGQucHJvcHMgJiYgIWNoaWxkLnByb3BzLnNldHRpbmdzKVxuXG4gICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcywgY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJvcHNDb25maWcgJiYgcHJvcHNDb25maWcuaGFzQ2hpbGRQcm9wcygpKXtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gcHJvcHNDb25maWcuZ2V0UHJvcHNGb3JDaGlsZChyZWFjdENvbXAsIGNoaWxkQ29uZmlnLGNvbmZpZ05hbWUsaW5kZXgpO1xuICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMsIG9iaik7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHByb3BzQ29uZmlnLmtleVByb3A7XG4gICAgICAgICAgICAgICAgaWYoa2V5ICYmIGtleS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoa2V5ID09PSBcImluZGV4XCIpIHByb3BzW1wia2V5XCJdID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoa2V5ID09PSBcIm9iamVjdE5hbWVcIikgcHJvcHNbXCJrZXlcIl0gPSBjb25maWdOYW1lO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGNoaWxkQ29uZmlnW2tleV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2hpbGRDb25maWdba2V5XSBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKXByb3BzW1wia2V5XCJdID0gY2hpbGRDb25maWdba2V5XS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcHJvcHNbXCJrZXlcIl0gPSBjaGlsZENvbmZpZ1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wia2V5XCJdID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBpbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY2hpbGRDb25maWcucHJvcHMpe1xuICAgICAgICAgICAgICAgIHZhciB0aGlzQXJnID0gY2hpbGQgPyBjaGlsZCA6IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMsIGNoaWxkQ29uZmlnLnByb3BzLmdldFByb3BzKHRoaXNBcmcsY2hpbGRDb25maWcsY29uZmlnTmFtZSwgaW5kZXgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gY2hpbGRDb25maWcuRkxFWEpTX0NMQVNTX0lORk8ubmFtZXNbMF0ucU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUb29sQ2xhc3Mgey4uLnByb3BzfSA+IHtjaGlsZH0gPCAvVG9vbENsYXNzPjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmhhcyhjaGlsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsIGNsb25lZENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCwgY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnTmFtZSA9PT0gXCJnYXBEaXZcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3JkZXJWYWx1ZSA9IFN0cmluZyhyZWFjdENvbXAuc2V0dGluZ3MuYWRkR2FwQXQuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG9yZGVyVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInN0eWxlXCJdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBvcmRlclZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90by1kbyBuZWVkIHRvIHJlcGxhY2Ugd2l0aCBmbGV4aW5mbyBmaWxlIG9yIHRpaGVyIG1lYW4sIGNyZWF0ZSBhIHV0aWxpdHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAvL3RoaXMgc29sdXRpb24gd2lsbCBmYWlsIHdoZW4gY29uZmlnIG5vdCBwYXJ0IG9mIHNlc3Npb24gdHJlZVxuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSA8IFRvb2xDbGFzcyB7Li4ucHJvcHN9Lz47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIFxuICAgICAgICBpZihjaGlsZExpc3QgJiYgY2hpbGRMaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgdmFyIGZpbHRlcmVkQ2hpbGRyZW4gPSBjbG9uZWRDaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24oY2hpbGQsaW5kZXgpe1xuICAgICAgICAgICAgICAgIGlmKGNoaWxkID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkQ2hpbGRyZW47XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgc3RhdGljIG1lcmdlSW50byhpbnRvLCBvYmosIGlnbm9yZVByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICBpbnRvW2F0dHJdID0gb2JqW2F0dHJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cbn1cblxuQXBwLnRvb2xSZWdpc3RyeSA9IHt9O1xuQXBwLnRvb2xDb25maWdNYXAgPSBuZXcgTWFwKCk7XG5BcHAuZGVidWcgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19
