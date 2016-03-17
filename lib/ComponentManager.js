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

var _InlineStyle = require("./configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _CSS = require("./configs/CSS");

var _CSS2 = _interopRequireDefault(_CSS);

var _Props = require("./configs/Props");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentManager = function () {
    function ComponentManager() {
        _classCallCheck(this, ComponentManager);
    }

    _createClass(ComponentManager, null, [{
        key: "registerToolImplementation",
        value: function registerToolImplementation(asClassName, jsClass) {
            if (!ComponentManager.toolRegistry[asClassName]) ComponentManager.toolRegistry[asClassName] = jsClass;
        }
    }, {
        key: "getToolImplementation",
        value: function getToolImplementation(asClassName) {
            return ComponentManager.toolRegistry[asClassName];
        }
    }, {
        key: "registerToolConfig",
        value: function registerToolConfig(tool, config) {
            if (!ComponentManager.toolConfigMap.has(tool)) ComponentManager.toolConfigMap.set(tool, config);
        }
    }, {
        key: "getToolConfig",
        value: function getToolConfig(tool) {
            return ComponentManager.toolConfigMap.get(tool);
        }
    }, {
        key: "initialize",
        value: function initialize(reactComp) {
            if (ComponentManager.debug) console.log(reactComp.constructor.name + " -- constructor");
            if (reactComp.props.settings) {
                reactComp.settings = reactComp.props.settings;
            }
            if (reactComp.props.style) {
                // user style added through UI is Sessioned
                reactComp.settings.style.domDefined.state = reactComp.props.style;
            }
            if (reactComp.props.className) {
                // user className added through UI is Sessioned
                reactComp.settings.CSS.className.state = reactComp.props.className;
            }
            if (reactComp.props.enable) {
                if (reactComp.settings.enable) reactComp.settings.enable.state = reactComp.props.enable;
            }
            if (reactComp.props.visible) {
                if (reactComp.settings.visible) reactComp.settings.visible.state = reactComp.props.visible;
            }
            if (reactComp.props.deviceMode) {
                if (reactComp.settings.deviceMode) reactComp.settings.deviceMode.state = reactComp.props.deviceMode;
            }
            if (reactComp.props.iconMode) {
                if (reactComp.settings.iconMode) reactComp.settings.iconMode.state = reactComp.props.iconMode;
            }
            if (reactComp.props.children) {
                //to-do - (WrapperConfigClass)is  required?
                var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
                ComponentManager.hookSessionStateForComponentChildren(reactComp.props.children, reactComp.settings, WrapperConfigClass);
            }

            ComponentManager.addForceUpdateToCallbacks(reactComp);
        }
    }, {
        key: "createDefaultSessionProperties",
        value: function createDefaultSessionProperties(config) {
            if (ComponentManager.debug) console.log(config.constructor.name + " -- constructor");
            Object.defineProperties(config, {
                "style": {
                    value: Weave.linkableChild(config, new _InlineStyle2.default())
                },
                "CSS": {
                    value: Weave.linkableChild(config, new _CSS2.default())
                },
                "useCSS": {
                    value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
                },
                "enable": {
                    value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
                },
                "visible": {
                    value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
                },
                "iconMode": {
                    value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
                },
                "deviceMode": {
                    value: Weave.linkableChild(config, new weavejs.core.LinkableString("large"))
                },
                "props": {
                    value: new _Props2.default()
                }
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(reactComp, nextProps) {
            if (ComponentManager.debug) console.log(reactComp.constructor.name + " -- componentWillReceiveProps");
            if (reactComp.props.settings !== nextProps.settings) {
                if (nextProps.settings) {
                    ComponentManager.removeForceUpdateFromCallbacks(reactComp);
                    reactComp.settings = nextProps.settings;
                    ComponentManager.addForceUpdateToCallbacks(reactComp);
                }
            }
            if (reactComp.props.style !== nextProps.style) {
                // user style added through UI is Sessioned
                if (nextProps.style) reactComp.settings.style.domDefined.state = nextProps.style;
            }
            if (reactComp.props.className !== nextProps.className) {
                // user className added through UI is Sessioned
                if (nextProps.className) reactComp.settings.CSS.className.state = nextProps.className;
            }
            if (reactComp.props.enable !== nextProps.enable) {
                if (nextProps.enable && reactComp.settings.enable) reactComp.settings.enable.state = nextProps.enable;
            }
            if (reactComp.props.visible !== nextProps.visible) {
                if (nextProps.visible && reactComp.settings.visible) reactComp.settings.visible.state = nextProps.visible;
            }
            if (reactComp.props.deviceMode !== nextProps.deviceMode) {
                if (nextProps.deviceMode && reactComp.settings.deviceMode) reactComp.settings.deviceMode.state = nextProps.deviceMode;
            }
            if (reactComp.props.iconMode !== nextProps.iconMode) {
                if (nextProps.deviceMode && reactComp.settings.deviceMode) reactComp.settings.deviceMode.state = nextProps.deviceMode;
            }
            if (reactComp.props.children !== nextProps.children) {
                var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
                ComponentManager.hookSessionStateForComponentChildren(nextProps.children, reactComp.settings, WrapperConfigClass);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount(reactComp) {
            if (ComponentManager.debug) console.log(reactComp.constructor.name + " - componentWillUnmount");
            ComponentManager.removeForceUpdateFromCallbacks(reactComp);
        }

        /*static shouldComponentUpdate(reactComp, nextProps) {

         }*/

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

            if (ComponentManager.debug) {
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
                    if (!child.settings && !child.props.settings) {
                        var configClass = ComponentManager.getToolConfig(child.type);
                        if (!childConfig && configClass) {
                            childConfig = config.children.requestObject('', configClass);
                        }
                    } else {
                        childConfig = child.settings ? child.settings : child.props.settings;
                        config.children.setObject('', childConfig);
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
            if (ComponentManager.debug) console.log(reactComp.constructor.name + " -- renderChildren");
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

                    ComponentManager.mergeInto(props, child.props);
                }
                if (propsConfig && propsConfig.hasChildProps()) {
                    var obj = propsConfig.getPropsForChild(reactComp, childConfig, configName, index);
                    ComponentManager.mergeInto(props, obj);
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
                    ComponentManager.mergeInto(props, childConfig.props.getProps(thisArg, childConfig, configName, index));
                }

                if (child) {
                    if (typeof child.type === "string") {
                        var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                        var ToolClass = ComponentManager.getToolImplementation(configClass);
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
                    var ToolClass = ComponentManager.getToolImplementation(configClass);
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

    return ComponentManager;
}();

ComponentManager.toolRegistry = {};
ComponentManager.toolConfigMap = new Map();
ComponentManager.debug = false;

exports.default = ComponentManager;
//# sourceMappingURL=data:application/json;base64,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aW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnIGZyb20gXCIuLi9jb25maWdzL0hUTUxXcmFwcGVyQ29uZmlnXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENTUyBmcm9tIFwiLi9jb25maWdzL0NTU1wiO1xuaW1wb3J0IFByb3BzIGZyb20gXCIuL2NvbmZpZ3MvUHJvcHNcIjtcblxuY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oYXNDbGFzc05hbWUsIGpzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0pXG4gICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0gPSBqc0NsYXNzO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb29sSW1wbGVtZW50YXRpb24oYXNDbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVnaXN0ZXJUb29sQ29uZmlnKHRvb2wsIGNvbmZpZykge1xuICAgICAgICBpZiAoIUNvbXBvbmVudE1hbmFnZXIudG9vbENvbmZpZ01hcC5oYXModG9vbCkpXG4gICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLnRvb2xDb25maWdNYXAuc2V0KHRvb2wsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xDb25maWcodG9vbCkge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci50b29sQ29uZmlnTWFwLmdldCh0b29sKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0aWFsaXplKHJlYWN0Q29tcCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgLS0gY29uc3RydWN0b3JcIik7XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncyA9IHJlYWN0Q29tcC5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnN0eWxlKSB7IC8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuY2xhc3NOYW1lKSB7IC8vIHVzZXIgY2xhc3NOYW1lIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5lbmFibGUpIHsgXG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLmVuYWJsZSkgcmVhY3RDb21wLnNldHRpbmdzLmVuYWJsZS5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy5lbmFibGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy52aXNpYmxlKSB7IFxuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy52aXNpYmxlKSByZWFjdENvbXAuc2V0dGluZ3MudmlzaWJsZS5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy52aXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuZGV2aWNlTW9kZSkgeyBcbiAgICAgICAgICAgIGlmIChyZWFjdENvbXAuc2V0dGluZ3MuZGV2aWNlTW9kZSkgcmVhY3RDb21wLnNldHRpbmdzLmRldmljZU1vZGUuc3RhdGUgPSByZWFjdENvbXAucHJvcHMuZGV2aWNlTW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmljb25Nb2RlKSB7IFxuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5pY29uTW9kZSkgcmVhY3RDb21wLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLmljb25Nb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIC8vdG8tZG8gLSAoV3JhcHBlckNvbmZpZ0NsYXNzKWlzICByZXF1aXJlZD9cbiAgICAgICAgICAgIHZhciBXcmFwcGVyQ29uZmlnQ2xhc3MgPSByZWFjdENvbXBbXCJXcmFwcGVyQ29uZmlnQ2xhc3NcIl0gPyByZWFjdENvbXBbXCJXcmFwcGVyQ29uZmlnQ2xhc3NcIl0gOiBudWxsO1xuICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4ocmVhY3RDb21wLnByb3BzLmNoaWxkcmVuLCByZWFjdENvbXAuc2V0dGluZ3MsIFdyYXBwZXJDb25maWdDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApO1xuICAgICAgICBcblxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKGNvbmZpZyl7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coY29uZmlnLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uZmlnLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25Nb2RlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGV2aWNlTW9kZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsYXJnZVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInByb3BzXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiAgbmV3IFByb3BzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuXG4gICAgc3RhdGljIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocmVhY3RDb21wLCBuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiIC0tIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIik7XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncykge1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5zZXR0aW5ncykge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIuYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSkgeyAvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnN0eWxlKSByZWFjdENvbXAuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmNsYXNzTmFtZSAhPT0gbmV4dFByb3BzLmNsYXNzTmFtZSkgeyAvLyB1c2VyIGNsYXNzTmFtZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5jbGFzc05hbWUpIHJlYWN0Q29tcC5zZXR0aW5ncy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gbmV4dFByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmVuYWJsZSAhPT0gbmV4dFByb3BzLmVuYWJsZSkgeyBcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuZW5hYmxlICYmIHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUpIHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUuc3RhdGUgPSBuZXh0UHJvcHMuZW5hYmxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMudmlzaWJsZSAhPT0gbmV4dFByb3BzLnZpc2libGUpIHsgXG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnZpc2libGUgJiYgcmVhY3RDb21wLnNldHRpbmdzLnZpc2libGUpIHJlYWN0Q29tcC5zZXR0aW5ncy52aXNpYmxlLnN0YXRlID0gbmV4dFByb3BzLnZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5kZXZpY2VNb2RlICE9PSBuZXh0UHJvcHMuZGV2aWNlTW9kZSkgeyBcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuZGV2aWNlTW9kZSAmJiByZWFjdENvbXAuc2V0dGluZ3MuZGV2aWNlTW9kZSkgcmVhY3RDb21wLnNldHRpbmdzLmRldmljZU1vZGUuc3RhdGUgPSBuZXh0UHJvcHMuZGV2aWNlTW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmljb25Nb2RlICE9PSBuZXh0UHJvcHMuaWNvbk1vZGUpIHsgXG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmRldmljZU1vZGUgJiYgcmVhY3RDb21wLnNldHRpbmdzLmRldmljZU1vZGUpIHJlYWN0Q29tcC5zZXR0aW5ncy5kZXZpY2VNb2RlLnN0YXRlID0gbmV4dFByb3BzLmRldmljZU1vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB2YXIgV3JhcHBlckNvbmZpZ0NsYXNzID0gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdID8gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdIDogbnVsbDtcbiAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbiwgcmVhY3RDb21wLnNldHRpbmdzLCBXcmFwcGVyQ29uZmlnQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGNvbXBvbmVudFdpbGxVbm1vdW50KHJlYWN0Q29tcCl7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtIGNvbXBvbmVudFdpbGxVbm1vdW50XCIpO1xuICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3MocmVhY3RDb21wKTtcbiAgICB9XG4gICAgXG4gICAgLypzdGF0aWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHJlYWN0Q29tcCwgbmV4dFByb3BzKSB7XG4gICAgICAgIFxuXG4gICAgfSovXG5cbiAgICBzdGF0aWMgYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncztcbiAgICAgICAgaWYgKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZiAoV2VhdmUuaXNMaW5rYWJsZShvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG9iai5jaGlsZExpc3RDYWxsYmFja3M7XG4gICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikuYWRkR3JvdXBlZENhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCkge1xuICAgICAgICB2YXIgY29uZmlnID0gcmVhY3RDb21wLnNldHRpbmdzO1xuICAgICAgICBpZiAoIVdlYXZlLmlzTGlua2FibGUoY29uZmlnKSlcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29uZmlnLCBcIiBpcyBub3QgYSBMaW5rYWJsZU9iamVjdFwiKTtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjb25maWcpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwbiA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgb2JqID0gY29uZmlnW3BuXTtcbiAgICAgICAgICAgIGlmIChXZWF2ZS5pc0xpbmthYmxlKG9iaikpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcClcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gb2JqLmNoaWxkTGlzdENhbGxiYWNrcztcbiAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5yZW1vdmVDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgICAvL0ZvciB0ZXN0aW5nICBhbmQgZGVidWdcbiAgICBzdGF0aWMgaXNTZXNzaW9uQ2hhbmdlZEZvcihjb25maWcpIHtcbiAgICAgICAgaWYgKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgdmFyIGxpbmtibGVPYmplY3QgPSBudWxsO1xuICAgICAgICB2YXIgbW9yZUxpbmthYmxlT2JqZWN0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwbiA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgb2JqID0gY29uZmlnW3BuXTtcbiAgICAgICAgICAgIGlmIChXZWF2ZS5pc0xpbmthYmxlKG9iaikpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG8gPSAob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCkgPyBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzIDogb2JqXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5rYmxlT2JqZWN0KSBsaW5rYmxlT2JqZWN0ID0gbG87XG4gICAgICAgICAgICAgICAgZWxzZSBtb3JlTGlua2FibGVPYmplY3RzLnB1c2gobG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvbXBvbmVudE1hbmFnZXIuZGVidWcpIHtcbiAgICAgICAgICAgIHZhciBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChtb3JlTGlua2FibGVPYmplY3RzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9yZUxpbmthYmxlT2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpc0NoYW5nZWQgPSBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBtb3JlTGlua2FibGVPYmplY3RzW2ldKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtb3JlTGlua2FibGVPYmplY3RzW2ldLCBcIiBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaW5rYmxlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkID0gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbGlua2JsZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaW5rYmxlT2JqZWN0LCBcIiBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlnLCBcIiBubyBzZXNzaW9uIENoaWxkcmVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBsaW5rYmxlT2JqZWN0LCBtb3JlTGlua2FibGVPYmplY3RzKVxuICAgICAgICBlbHNlIGlmIChsaW5rYmxlT2JqZWN0KVxuICAgICAgICAgICAgcmV0dXJuIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyBob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4oY2hpbGRyZW4sIGNvbmZpZywgV3JhcHBlckNvbmZpZ0NsYXNzKSB7XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuXG4gICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gY29uZmlnLmNoaWxkcmVuLmdldE5hbWUoa2V5KTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZW1vdmVPYmplY3QoY29uZmlnTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRDb25maWdNYXAuZ2V0KGNoaWxkKTtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZ05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpIHsgLy8gZm9yIEhUTUwgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IFdyYXBwZXJDb25maWdDbGFzcyA/IFdyYXBwZXJDb25maWdDbGFzcyA6IEhUTUxXcmFwcGVyQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsIGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBmb3IgUmVhY3QgQ29tcG9zaXRlIEVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaWYoIWNoaWxkLnNldHRpbmdzICYmICFjaGlsZC5wcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IENvbXBvbmVudE1hbmFnZXIuZ2V0VG9vbENvbmZpZyhjaGlsZC50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZENvbmZpZyAmJiBjb25maWdDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJywgY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY2hpbGQuc2V0dGluZ3M/Y2hpbGQuc2V0dGluZ3M6Y2hpbGQucHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5zZXRPYmplY3QoJycsIGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB7Y2xhc3NOYW1lLCBzdHlsZSwgLi4ub3RoZXJ9ID0gY2hpbGQucHJvcHM7XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5lbmFibGUgJiYgY2hpbGRDb25maWcuZW5hYmxlKWNoaWxkQ29uZmlnLmVuYWJsZS5zdGF0ZSA9IGNoaWxkLnByb3BzLmVuYWJsZTtcbiAgICAgICAgICAgIGlmIChzdHlsZSkgY2hpbGRDb25maWcuc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IHN0eWxlO1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkgY2hpbGRDb25maWcuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgICAgIGlmIChvdGhlciAmJiBjaGlsZENvbmZpZy5wcm9wcykgY2hpbGRDb25maWcucHJvcHMubWVyZ2Uob3RoZXIpO1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkQ29uZmlnTWFwLnNldChjaGlsZCwgY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZywgY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29uZmlnW1wiYWRkR2FwQXRcIl0pIHtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCdnYXBEaXYnLCBIVE1MV3JhcHBlckNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgcmVuZGVyQ2hpbGRyZW4ocmVhY3RDb21wLGNoaWxkTGlzdCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgLS0gcmVuZGVyQ2hpbGRyZW5cIik7XG4gICAgICAgIHZhciBjaGlsZENvbmZpZ3MgPSByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICB2YXIgcHJvcHNDb25maWcgPSByZWFjdENvbXAuc2V0dGluZ3MucHJvcHM7XG5cbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbiAoY2hpbGRDb25maWcsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuXG4gICAgICAgICAgICBpZihjaGlsZExpc3Qpe1xuICAgICAgICAgICAgICAgICBpZihjaGlsZExpc3QuaW5kZXhPZihjb25maWdOYW1lKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHt9XG5cbiAgICAgICAgICAgIHByb3BzW1wic2V0dGluZ3NcIl0gPSBjaGlsZENvbmZpZztcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIC8vaWYoY2hpbGQucHJvcHMgJiYgIWNoaWxkLnByb3BzLnNldHRpbmdzKVxuXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5tZXJnZUludG8ocHJvcHMsIGNoaWxkLnByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByb3BzQ29uZmlnICYmIHByb3BzQ29uZmlnLmhhc0NoaWxkUHJvcHMoKSl7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IHByb3BzQ29uZmlnLmdldFByb3BzRm9yQ2hpbGQocmVhY3RDb21wLCBjaGlsZENvbmZpZyxjb25maWdOYW1lLGluZGV4KTtcbiAgICAgICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLm1lcmdlSW50byhwcm9wcywgb2JqKTtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gcHJvcHNDb25maWcua2V5UHJvcDtcbiAgICAgICAgICAgICAgICBpZihrZXkgJiYga2V5Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihrZXkgPT09IFwiaW5kZXhcIikgcHJvcHNbXCJrZXlcIl0gPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihrZXkgPT09IFwib2JqZWN0TmFtZVwiKSBwcm9wc1tcImtleVwiXSA9IGNvbmZpZ05hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoY2hpbGRDb25maWdba2V5XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjaGlsZENvbmZpZ1trZXldIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUpcHJvcHNbXCJrZXlcIl0gPSBjaGlsZENvbmZpZ1trZXldLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBwcm9wc1tcImtleVwiXSA9IGNoaWxkQ29uZmlnW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGluZGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGlsZENvbmZpZy5wcm9wcyl7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNBcmcgPSBjaGlsZCA/IGNoaWxkIDogY2hpbGRDb25maWc7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5tZXJnZUludG8ocHJvcHMsIGNoaWxkQ29uZmlnLnByb3BzLmdldFByb3BzKHRoaXNBcmcsY2hpbGRDb25maWcsY29uZmlnTmFtZSwgaW5kZXgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gY2hpbGRDb25maWcuRkxFWEpTX0NMQVNTX0lORk8ubmFtZXNbMF0ucU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VG9vbENsYXNzIHsuLi5wcm9wc30gPiB7Y2hpbGR9IDwgL1Rvb2xDbGFzcz47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5oYXMoY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmRlbGV0ZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWRDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLCBjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQoY2xvbmVkQ2hpbGQsIGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ05hbWUgPT09IFwiZ2FwRGl2XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yZGVyVmFsdWUgPSBTdHJpbmcocmVhY3RDb21wLnNldHRpbmdzLmFkZEdhcEF0LnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihvcmRlclZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzdHlsZVwiXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogb3JkZXJWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdG8tZG8gbmVlZCB0byByZXBsYWNlIHdpdGggZmxleGluZm8gZmlsZSBvciB0aWhlciBtZWFuLCBjcmVhdGUgYSB1dGlsaXR5IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgLy90aGlzIHNvbHV0aW9uIHdpbGwgZmFpbCB3aGVuIGNvbmZpZyBub3QgcGFydCBvZiBzZXNzaW9uIHRyZWVcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBjaGlsZENvbmZpZy5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgVG9vbENsYXNzID0gQ29tcG9uZW50TWFuYWdlci5nZXRUb29sSW1wbGVtZW50YXRpb24oY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZCA9IDwgVG9vbENsYXNzIHsuLi5wcm9wc30vPjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBpZihjaGlsZExpc3QgJiYgY2hpbGRMaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgdmFyIGZpbHRlcmVkQ2hpbGRyZW4gPSBjbG9uZWRDaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24oY2hpbGQsaW5kZXgpe1xuICAgICAgICAgICAgICAgIGlmKGNoaWxkID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0sdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRDaGlsZHJlbjtcbiAgICAgICAgfWVsc2VcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVyZ2VJbnRvKGludG8sIG9iaiwgaWdub3JlUHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludG87XG4gICAgfVxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnRvb2xSZWdpc3RyeSA9IHt9O1xuQ29tcG9uZW50TWFuYWdlci50b29sQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuQ29tcG9uZW50TWFuYWdlci5kZWJ1ZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRNYW5hZ2VyO1xuIl19
