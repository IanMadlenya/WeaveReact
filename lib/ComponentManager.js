"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Style = require("./utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _HTMLWrapperConfig = require("./configs/HTMLWrapperConfig");

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
        value: function registerToolConfig(toolClass, config) {
            if (!ComponentManager.toolConfigMap.has(toolClass)) ComponentManager.toolConfigMap.set(toolClass, config);
        }
    }, {
        key: "getToolConfig",
        value: function getToolConfig(toolClass) {
            return ComponentManager.toolConfigMap.get(toolClass);
        }
    }, {
        key: "initialize",
        value: function initialize(reactComp, type) {
            if (ComponentManager.debug) console.log(reactComp.constructor.name + " -- constructor");
            if (reactComp.props.settings) {
                reactComp.settings = reactComp.props.settings;
            } else {
                var newConfig = ComponentManager.getToolConfig(reactComp.constructor);
                reactComp.settings = newConfig;
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
            if (reactComp.props.useCSS) {
                if (reactComp.settings.useCSS) reactComp.settings.useCSS.state = reactComp.props.useCSS;
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
            if (reactComp.props.reverseLayout) {
                if (reactComp.settings.reverseLayout) reactComp.settings.reverseLayout.state = reactComp.props.reverseLayout;
            }
            if (type == "container" && reactComp.constructor.name != "HTMLWrapper") {
                var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
                ComponentManager.hookSessionStateForComponentChildren(reactComp.props.children, reactComp.settings, WrapperConfigClass);
                reactComp.renderChildren = reactComp.renderChildren.bind(reactComp);
            }

            ComponentManager.addForceUpdateToCallbacks(reactComp);
        }

        //todo organize better

    }, {
        key: "flipIcons",
        value: function flipIcons(config, iconStateNames) {
            if (!config.reverseLayout) {
                console.warn("no reverseLayout Session Object");
                return;
            }

            for (var i = 0; i < iconStateNames.length; i++) {
                var iconObj = config[iconStateNames[i]].state;

                if (iconObj) {
                    if (typeof iconObj != "string") {
                        //linkableVraible Obj
                        var keys = Object.keys(iconObj);
                        if (config.reverseLayout.state) {
                            keys.map(function (key, index) {
                                if (iconObj[key].indexOf("/") == -1) {
                                    //fontawesome icons
                                    if (iconObj[key].indexOf(" fa-flip-horizontal") == -1) {
                                        //not flipped
                                        iconObj[key] = iconObj[key] + " fa-flip-horizontal";
                                    }
                                }
                            });
                        } else {
                            keys.map(function (key, index) {
                                if (iconObj[key].indexOf(" fa-flip-horizontal") != -1) {
                                    // flipped
                                    var index = iconObj[key].indexOf(" fa-flip-horizontal");
                                    iconObj[key] = iconObj[key].substring(0, index);
                                }
                            });
                        }
                    } else {
                        //LinkableString
                        if (config.reverseLayout.state) {
                            if (iconObj.indexOf("/") == -1) {
                                //fontawesome icons
                                if (iconObj.indexOf(" fa-flip-horizontal") == -1) {
                                    //not flipped
                                    iconObj = iconObj + " fa-flip-horizontal";
                                }
                            }
                        } else {
                            if (iconObj.indexOf(" fa-flip-horizontal") != -1) {
                                // flipped
                                var index = iconObj.indexOf(" fa-flip-horizontal");
                                iconObj = iconObj.substring(0, index);
                            }
                        }
                    }

                    config[iconStateNames[i]].state = iconObj;
                }
            }
        }
    }, {
        key: "createDefaultSessionProperties",
        value: function createDefaultSessionProperties(config, type) {
            if (ComponentManager.debug) console.log(config.constructor.name + " -- constructor");
            Object.defineProperties(config, {
                "style": {
                    value: Weave.linkableChild(config, new _InlineStyle2.default())
                },
                "iconModeStyle": {
                    value: Weave.linkableChild(config, new _InlineStyle2.default())
                },
                "iconModeName": {
                    value: Weave.linkableChild(config, new weavejs.core.LinkableString(""))
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
                    value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(true))
                },
                "iconMode": {
                    value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
                },
                "deviceMode": {
                    value: Weave.linkableChild(config, new weavejs.core.LinkableString("large"))
                },
                "reverseLayout": {
                    value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
                },
                "props": {
                    value: new _Props2.default()
                }
            });

            if (type === "container") {
                Object.defineProperties(config, {
                    "children": {
                        value: Weave.linkableChild(config, new weavejs.core.LinkableHashMap())
                    },
                    "addGapAt": {
                        value: Weave.linkableChild(config, new weavejs.core.LinkableNumber())
                    }
                });

                config.childConfigMap = new Map();
                config.configChildMap = new Map();
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(reactComp, nextProps) {
            if (ComponentManager.debug) console.log(reactComp.constructor.name + " -- componentWillReceiveProps ---");
            if (reactComp.props.settings !== nextProps.settings) {
                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props Settings changed");
                if (nextProps.settings) {
                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** Settings");
                    ComponentManager.removeForceUpdateFromCallbacks(reactComp);
                    reactComp.settings = nextProps.settings;
                    ComponentManager.addForceUpdateToCallbacks(reactComp);
                }
            }
            if (reactComp.props.style !== nextProps.style) {
                // user style added through UI is Sessioned
                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props style changed from " + reactComp.props.style + " to " + nextProps.style);
                if (nextProps.style) {
                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** style");
                    reactComp.settings.style.domDefined.state = nextProps.style;
                }
            }
            if (reactComp.props.className !== nextProps.className) {
                // user className added through UI is Sessioned
                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props className changed from " + reactComp.props.className + " to " + nextProps.className);
                if (nextProps.className) {
                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** className");
                    reactComp.settings.CSS.className.state = nextProps.className;
                }
            }
            if (reactComp.props.enable !== nextProps.enable) {
                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props enable changed  from " + reactComp.props.enable + " to " + nextProps.enable);
                if (nextProps.enable !== undefined && reactComp.settings.enable) {
                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** enable");
                    reactComp.settings.enable.state = nextProps.enable;
                }
            }
            if (reactComp.props.visible !== nextProps.visible) {
                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props visible changed from " + reactComp.props.visible + " to " + nextProps.visible);
                if (nextProps.visible !== undefined && reactComp.settings.visible) {
                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** visible");
                    reactComp.settings.visible.state = nextProps.visible;
                }
            }
            if (reactComp.props.deviceMode !== nextProps.deviceMode) {
                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props deviceMode changed from " + reactComp.props.deviceMode + " to " + nextProps.deviceMode);
                if (nextProps.deviceMode !== undefined && reactComp.settings.deviceMode) {
                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** deviceMode");
                    reactComp.settings.deviceMode.state = nextProps.deviceMode;
                }
            }
            if (reactComp.props.reverseLayout !== nextProps.reverseLayout) {
                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props reverseLayout changed from " + reactComp.props.reverseLayout + " to " + nextProps.reverseLayout);
                if (nextProps.reverseLayout !== undefined && reactComp.settings.reverseLayout) {
                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** reverseLayout");
                    reactComp.settings.reverseLayout.state = nextProps.reverseLayout;
                }
            }
            if (reactComp.props.iconMode !== nextProps.iconMode) {
                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props iconMode changed from " + reactComp.props.iconMode + " to " + nextProps.iconMode);
                if (nextProps.iconMode !== undefined && reactComp.settings.iconMode) {
                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** iconMode");
                    reactComp.settings.iconMode.state = nextProps.iconMode;
                }
            }
            if (reactComp.props.children !== nextProps.children) {
                if (ComponentManager.debug) console.log(reactComp.constructor.name + "children");
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
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(reactComp, nextProps) {
            if (ComponentManager.debug) console.log(reactComp.constructor.name + " - shouldComponentUpdate");
            //to-do sync between props class and weavestate
            return false;
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
                    if (obj instanceof weavejs.core.LinkableHashMap) {
                        obj = obj.childListCallbacks;
                        Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
                    } else if (obj instanceof weavejs.core.LinkableVariable || obj instanceof weavejs.core.LinkableDynamicObject) {
                        Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
                    } else if (obj instanceof _InlineStyle2.default) {
                        Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
                    } else if (obj instanceof _CSS2.default) {
                        Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
                    }
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
                    if (obj instanceof weavejs.core.LinkableHashMap) {
                        obj = obj.childListCallbacks;
                        Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
                    } else if (obj instanceof weavejs.core.LinkableVariable) {
                        Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
                    } else if (obj instanceof _InlineStyle2.default) {
                        Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
                    } else if (obj instanceof _CSS2.default) {
                        Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
                    }
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
                if (configName === "gapDiv") {
                    var orderValue = String(reactComp.settings.addGapAt.state);
                    if (!isNaN(orderValue)) {
                        props["style"] = {
                            flex: "1",
                            order: orderValue
                        };
                    }
                }

                if (child) {
                    if (typeof child.type === "string") {
                        var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                        var ToolClass = ComponentManager.getToolImplementation(configClass);
                        if (!ToolClass) console.error("Tool Not found for config: ", configClass);
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
                    //to-do need to replace with flexinfo file or tiher mean, create a utility function
                    //this solution will fail when config not part of session tree
                    var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                    var ToolClass = ComponentManager.getToolImplementation(configClass);
                    if (!ToolClass) console.error("Tool Not found for config: ", configClass);
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
//# sourceMappingURL=data:application/json;base64,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QUFWLEVBQ0MsT0FBTyxLQUFQLENBREosS0FHSSxPQUFPLElBQVAsQ0FISjtpQkFEeUMsRUFLM0MsSUFMcUIsQ0FBbkIsQ0FENkI7QUFPakMsdUJBQU8sZ0JBQVAsQ0FQaUM7YUFBckMsTUFTSSxPQUFPLGNBQVAsQ0FUSjs7OztrQ0FZYSxNQUFNLEtBQUssYUFBYTtBQUNyQyxpQkFBSyxJQUFJLElBQUosSUFBWSxHQUFqQixFQUFzQjtBQUNsQixxQkFBSyxJQUFMLElBQWEsSUFBSSxJQUFKLENBQWIsQ0FEa0I7YUFBdEI7QUFHQSxtQkFBTyxJQUFQLENBSnFDOzs7O1dBcGdCdkM7OztBQThnQk4saUJBQWlCLFlBQWpCLEdBQWdDLEVBQWhDO0FBQ0EsaUJBQWlCLGFBQWpCLEdBQWlDLElBQUksR0FBSixFQUFqQztBQUNBLGlCQUFpQixLQUFqQixHQUF5QixLQUF6Qjs7a0JBRWUiLCJmaWxlIjoiQ29tcG9uZW50TWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZXMgZnJvbSBcIi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBIVE1MV3JhcHBlckNvbmZpZyBmcm9tIFwiLi9jb25maWdzL0hUTUxXcmFwcGVyQ29uZmlnXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENTUyBmcm9tIFwiLi9jb25maWdzL0NTU1wiO1xuaW1wb3J0IFByb3BzIGZyb20gXCIuL2NvbmZpZ3MvUHJvcHNcIjtcblxuY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oYXNDbGFzc05hbWUsIGpzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0pXG4gICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0gPSBqc0NsYXNzO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb29sSW1wbGVtZW50YXRpb24oYXNDbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVnaXN0ZXJUb29sQ29uZmlnKHRvb2xDbGFzcywgY29uZmlnKSB7XG4gICAgICAgIGlmICghQ29tcG9uZW50TWFuYWdlci50b29sQ29uZmlnTWFwLmhhcyh0b29sQ2xhc3MpKVxuICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci50b29sQ29uZmlnTWFwLnNldCh0b29sQ2xhc3MsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xDb25maWcodG9vbENsYXNzKSB7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnRvb2xDb25maWdNYXAuZ2V0KHRvb2xDbGFzcyk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgaW5pdGlhbGl6ZShyZWFjdENvbXAsdHlwZSkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgLS0gY29uc3RydWN0b3JcIik7XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncyA9IHJlYWN0Q29tcC5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YXIgbmV3Q29uZmlnID0gQ29tcG9uZW50TWFuYWdlci5nZXRUb29sQ29uZmlnKHJlYWN0Q29tcC5jb25zdHJ1Y3RvcilcbiAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncyA9IG5ld0NvbmZpZztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnN0eWxlKSB7IC8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuY2xhc3NOYW1lKSB7IC8vIHVzZXIgY2xhc3NOYW1lIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5lbmFibGUpIHtcbiAgICAgICAgICAgIGlmIChyZWFjdENvbXAuc2V0dGluZ3MuZW5hYmxlKSByZWFjdENvbXAuc2V0dGluZ3MuZW5hYmxlLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLmVuYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnVzZUNTUykge1xuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy51c2VDU1MpIHJlYWN0Q29tcC5zZXR0aW5ncy51c2VDU1Muc3RhdGUgPSByZWFjdENvbXAucHJvcHMudXNlQ1NTO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy52aXNpYmxlKSByZWFjdENvbXAuc2V0dGluZ3MudmlzaWJsZS5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy52aXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuZGV2aWNlTW9kZSkge1xuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5kZXZpY2VNb2RlKSByZWFjdENvbXAuc2V0dGluZ3MuZGV2aWNlTW9kZS5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy5kZXZpY2VNb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuaWNvbk1vZGUpIHtcbiAgICAgICAgICAgIGlmIChyZWFjdENvbXAuc2V0dGluZ3MuaWNvbk1vZGUpIHJlYWN0Q29tcC5zZXR0aW5ncy5pY29uTW9kZS5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy5pY29uTW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnJldmVyc2VMYXlvdXQpIHtcbiAgICAgICAgICAgIGlmIChyZWFjdENvbXAuc2V0dGluZ3MucmV2ZXJzZUxheW91dCkgcmVhY3RDb21wLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUgPSByZWFjdENvbXAucHJvcHMucmV2ZXJzZUxheW91dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PSBcImNvbnRhaW5lclwiICAmJiByZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSAhPSBcIkhUTUxXcmFwcGVyXCIpIHtcbiAgICAgICAgICAgIHZhciBXcmFwcGVyQ29uZmlnQ2xhc3MgPSByZWFjdENvbXBbXCJXcmFwcGVyQ29uZmlnQ2xhc3NcIl0gPyByZWFjdENvbXBbXCJXcmFwcGVyQ29uZmlnQ2xhc3NcIl0gOiBudWxsO1xuICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4ocmVhY3RDb21wLnByb3BzLmNoaWxkcmVuLCByZWFjdENvbXAuc2V0dGluZ3MsIFdyYXBwZXJDb25maWdDbGFzcyk7XG4gICAgICAgICAgICByZWFjdENvbXAucmVuZGVyQ2hpbGRyZW4gPSByZWFjdENvbXAucmVuZGVyQ2hpbGRyZW4uYmluZChyZWFjdENvbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG5cblxuXG4gICAgfVxuXG4gICAgLy90b2RvIG9yZ2FuaXplIGJldHRlclxuICAgIHN0YXRpYyBmbGlwSWNvbnMoY29uZmlnLGljb25TdGF0ZU5hbWVzKXtcbiAgICAgICAgaWYoIWNvbmZpZy5yZXZlcnNlTGF5b3V0KXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm5vIHJldmVyc2VMYXlvdXQgU2Vzc2lvbiBPYmplY3RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IGljb25TdGF0ZU5hbWVzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICB2YXIgaWNvbk9iaiA9IGNvbmZpZ1tpY29uU3RhdGVOYW1lc1tpXV0uc3RhdGU7XG5cbiAgICAgICAgICAgIGlmKGljb25PYmope1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBpY29uT2JqICE9IFwic3RyaW5nXCIpeyAvL2xpbmthYmxlVnJhaWJsZSBPYmpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhpY29uT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlnLnJldmVyc2VMYXlvdXQuc3RhdGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5tYXAoZnVuY3Rpb24oa2V5LGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpY29uT2JqW2tleV0uaW5kZXhPZihcIi9cIikgPT0gLTEpey8vZm9udGF3ZXNvbWUgaWNvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk9ialtrZXldLmluZGV4T2YoXCIgZmEtZmxpcC1ob3Jpem9udGFsXCIpID09IC0xKXsvL25vdCBmbGlwcGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uT2JqW2tleV0gPSBpY29uT2JqW2tleV0gKyBcIiBmYS1mbGlwLWhvcml6b250YWxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5tYXAoZnVuY3Rpb24oa2V5LGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpY29uT2JqW2tleV0uaW5kZXhPZihcIiBmYS1mbGlwLWhvcml6b250YWxcIikgIT0gLTEpey8vIGZsaXBwZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gaWNvbk9ialtrZXldLmluZGV4T2YoXCIgZmEtZmxpcC1ob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uT2JqW2tleV0gPSBpY29uT2JqW2tleV0uc3Vic3RyaW5nKDAsaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXsgLy9MaW5rYWJsZVN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBpZihjb25maWcucmV2ZXJzZUxheW91dC5zdGF0ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpY29uT2JqLmluZGV4T2YoXCIvXCIpID09IC0xKXsvL2ZvbnRhd2Vzb21lIGljb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk9iai5pbmRleE9mKFwiIGZhLWZsaXAtaG9yaXpvbnRhbFwiKSA9PSAtMSl7Ly9ub3QgZmxpcHBlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uT2JqID0gaWNvbk9iaiArIFwiIGZhLWZsaXAtaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpY29uT2JqLmluZGV4T2YoXCIgZmEtZmxpcC1ob3Jpem9udGFsXCIpICE9IC0xKXsvLyBmbGlwcGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gaWNvbk9iai5pbmRleE9mKFwiIGZhLWZsaXAtaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uT2JqID0gaWNvbk9iai5zdWJzdHJpbmcoMCxpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbmZpZ1tpY29uU3RhdGVOYW1lc1tpXV0uc3RhdGUgPSBpY29uT2JqO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgc3RhdGljIGNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyhjb25maWcsdHlwZSl7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coY29uZmlnLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uZmlnLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTW9kZVN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTW9kZU5hbWVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZpc2libGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25Nb2RlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGV2aWNlTW9kZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsYXJnZVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJldmVyc2VMYXlvdXRcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwcm9wc1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogIG5ldyBQcm9wcygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKHR5cGUgPT09IFwiY29udGFpbmVyXCIpe1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uZmlnLCB7XG4gICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOntcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJhZGRHYXBBdFwiOntcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlTnVtYmVyKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhyZWFjdENvbXAsIG5leHRQcm9wcykge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgLS0gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAtLS1cIik7XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncykge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIFNldHRpbmdzIGNoYW5nZWRcIik7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIFNldHRpbmdzXCIpO1xuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIuYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSkgeyAvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgc3R5bGUgY2hhbmdlZCBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLnN0eWxlICsgXCIgdG8gXCIgKyBuZXh0UHJvcHMuc3R5bGUpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5zdHlsZSkge1xuICAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogc3R5bGVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5jbGFzc05hbWUgIT09IG5leHRQcm9wcy5jbGFzc05hbWUpIHsgLy8gdXNlciBjbGFzc05hbWUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBwcm9wcyBjbGFzc05hbWUgY2hhbmdlZCBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLmNsYXNzTmFtZSArIFwiIHRvIFwiICsgbmV4dFByb3BzLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogY2xhc3NOYW1lXCIpO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gbmV4dFByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmVuYWJsZSAhPT0gbmV4dFByb3BzLmVuYWJsZSkge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIGVuYWJsZSBjaGFuZ2VkICBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLmVuYWJsZSArIFwiIHRvIFwiICsgbmV4dFByb3BzLmVuYWJsZSk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmVuYWJsZSAhPT0gdW5kZWZpbmVkICYmIHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogZW5hYmxlXCIpO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUuc3RhdGUgPSBuZXh0UHJvcHMuZW5hYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMudmlzaWJsZSAhPT0gbmV4dFByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBwcm9wcyB2aXNpYmxlIGNoYW5nZWQgZnJvbSBcIiArIHJlYWN0Q29tcC5wcm9wcy52aXNpYmxlICsgXCIgdG8gXCIgKyBuZXh0UHJvcHMudmlzaWJsZSk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCAmJiByZWFjdENvbXAuc2V0dGluZ3MudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiB2aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy52aXNpYmxlLnN0YXRlID0gbmV4dFByb3BzLnZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5kZXZpY2VNb2RlICE9PSBuZXh0UHJvcHMuZGV2aWNlTW9kZSkge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIGRldmljZU1vZGUgY2hhbmdlZCBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLmRldmljZU1vZGUgKyBcIiB0byBcIiArIG5leHRQcm9wcy5kZXZpY2VNb2RlKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuZGV2aWNlTW9kZSAhPT0gdW5kZWZpbmVkICYmIHJlYWN0Q29tcC5zZXR0aW5ncy5kZXZpY2VNb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIGRldmljZU1vZGVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmRldmljZU1vZGUuc3RhdGUgPSBuZXh0UHJvcHMuZGV2aWNlTW9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnJldmVyc2VMYXlvdXQgIT09IG5leHRQcm9wcy5yZXZlcnNlTGF5b3V0KSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgcmV2ZXJzZUxheW91dCBjaGFuZ2VkIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMucmV2ZXJzZUxheW91dCArIFwiIHRvIFwiICsgbmV4dFByb3BzLnJldmVyc2VMYXlvdXQpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5yZXZlcnNlTGF5b3V0ICE9PSB1bmRlZmluZWQgJiYgcmVhY3RDb21wLnNldHRpbmdzLnJldmVyc2VMYXlvdXQpIHtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcmV2ZXJzZUxheW91dFwiKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSA9IG5leHRQcm9wcy5yZXZlcnNlTGF5b3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuaWNvbk1vZGUgIT09IG5leHRQcm9wcy5pY29uTW9kZSkge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIGljb25Nb2RlIGNoYW5nZWQgZnJvbSBcIiArIHJlYWN0Q29tcC5wcm9wcy5pY29uTW9kZSArIFwiIHRvIFwiICsgbmV4dFByb3BzLmljb25Nb2RlKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuaWNvbk1vZGUgIT09IHVuZGVmaW5lZCAgJiYgcmVhY3RDb21wLnNldHRpbmdzLmljb25Nb2RlKXtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogaWNvbk1vZGVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlID0gbmV4dFByb3BzLmljb25Nb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiY2hpbGRyZW5cIik7XG4gICAgICAgICAgICB2YXIgV3JhcHBlckNvbmZpZ0NsYXNzID0gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdID8gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdIDogbnVsbDtcbiAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbiwgcmVhY3RDb21wLnNldHRpbmdzLCBXcmFwcGVyQ29uZmlnQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgY29tcG9uZW50V2lsbFVubW91bnQocmVhY3RDb21wKXtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiIC0gY29tcG9uZW50V2lsbFVubW91bnRcIik7XG4gICAgICAgICBDb21wb25lbnRNYW5hZ2VyLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyhyZWFjdENvbXApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzaG91bGRDb21wb25lbnRVcGRhdGUocmVhY3RDb21wLCBuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiIC0gc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xuICAgICAgICAvL3RvLWRvIHN5bmMgYmV0d2VlbiBwcm9wcyBjbGFzcyBhbmQgd2VhdmVzdGF0ZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncztcbiAgICAgICAgaWYgKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZiAoV2VhdmUuaXNMaW5rYWJsZShvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApe1xuICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzO1xuICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5hZGRHcm91cGVkQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlIHx8IG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUR5bmFtaWNPYmplY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikuYWRkR3JvdXBlZENhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmogaW5zdGFuY2VvZiBJbmxpbmVTdHlsZSl7XG4gICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5hZGRHcm91cGVkQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iaiBpbnN0YW5jZW9mIENTUyl7XG4gICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5hZGRHcm91cGVkQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCkge1xuICAgICAgICB2YXIgY29uZmlnID0gcmVhY3RDb21wLnNldHRpbmdzO1xuICAgICAgICBpZiAoIVdlYXZlLmlzTGlua2FibGUoY29uZmlnKSlcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29uZmlnLCBcIiBpcyBub3QgYSBMaW5rYWJsZU9iamVjdFwiKTtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjb25maWcpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwbiA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgb2JqID0gY29uZmlnW3BuXTtcbiAgICAgICAgICAgIGlmIChXZWF2ZS5pc0xpbmthYmxlKG9iaikpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCl7XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG9iai5jaGlsZExpc3RDYWxsYmFja3M7XG4gICAgICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLnJlbW92ZUNhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSl7XG4gICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5yZW1vdmVDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2JqIGluc3RhbmNlb2YgSW5saW5lU3R5bGUpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikucmVtb3ZlQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iaiBpbnN0YW5jZW9mIENTUyl7XG4gICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5yZW1vdmVDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG4gICAgLy9Gb3IgdGVzdGluZyAgYW5kIGRlYnVnXG4gICAgc3RhdGljIGlzU2Vzc2lvbkNoYW5nZWRGb3IoY29uZmlnKSB7XG4gICAgICAgIGlmICghV2VhdmUuaXNMaW5rYWJsZShjb25maWcpKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb25maWcsIFwiIGlzIG5vdCBhIExpbmthYmxlT2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbmZpZyk7XG4gICAgICAgIHZhciBsaW5rYmxlT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgdmFyIG1vcmVMaW5rYWJsZU9iamVjdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZiAoV2VhdmUuaXNMaW5rYWJsZShvYmopKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvID0gKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApID8gb2JqLmNoaWxkTGlzdENhbGxiYWNrcyA6IG9ialxuICAgICAgICAgICAgICAgIGlmICghbGlua2JsZU9iamVjdCkgbGlua2JsZU9iamVjdCA9IGxvO1xuICAgICAgICAgICAgICAgIGVsc2UgbW9yZUxpbmthYmxlT2JqZWN0cy5wdXNoKGxvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChDb21wb25lbnRNYW5hZ2VyLmRlYnVnKSB7XG4gICAgICAgICAgICB2YXIgaXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAobW9yZUxpbmthYmxlT2JqZWN0cy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXNDaGFuZ2VkID0gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbW9yZUxpbmthYmxlT2JqZWN0c1tpXSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9yZUxpbmthYmxlT2JqZWN0c1tpXSwgXCIgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlua2JsZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlzQ2hhbmdlZCA9IFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QpO1xuICAgICAgICAgICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGlua2JsZU9iamVjdCwgXCIgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZywgXCIgbm8gc2Vzc2lvbiBDaGlsZHJlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3JlTGlua2FibGVPYmplY3RzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbGlua2JsZU9iamVjdCwgbW9yZUxpbmthYmxlT2JqZWN0cylcbiAgICAgICAgZWxzZSBpZiAobGlua2JsZU9iamVjdClcbiAgICAgICAgICAgIHJldHVybiBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBsaW5rYmxlT2JqZWN0KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKGNoaWxkcmVuLCBjb25maWcsIFdyYXBwZXJDb25maWdDbGFzcykge1xuICAgICAgICBjb25maWcuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcblxuICAgICAgICBjb25maWcuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9IGNvbmZpZy5jaGlsZHJlbi5nZXROYW1lKGtleSk7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVtb3ZlT2JqZWN0KGNvbmZpZ05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZE5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkQ29uZmlnTWFwLmdldChjaGlsZCk7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWdOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKSB7IC8vIGZvciBIVE1MIEVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZENvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBXcmFwcGVyQ29uZmlnQ2xhc3MgPyBXcmFwcGVyQ29uZmlnQ2xhc3MgOiBIVE1MV3JhcHBlckNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLCBjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gZm9yIFJlYWN0IENvbXBvc2l0ZSBFbGVtZW50c1xuICAgICAgICAgICAgICAgIGlmKCFjaGlsZC5zZXR0aW5ncyAmJiAhY2hpbGQucHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xDb25maWcoY2hpbGQudHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRDb25maWcgJiYgY29uZmlnQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsIGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNoaWxkLnNldHRpbmdzP2NoaWxkLnNldHRpbmdzOmNoaWxkLnByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuY2hpbGRyZW4uc2V0T2JqZWN0KCcnLCBjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIge2NsYXNzTmFtZSwgc3R5bGUsIC4uLm90aGVyfSA9IGNoaWxkLnByb3BzO1xuICAgICAgICAgICAgaWYoY2hpbGQucHJvcHMuZW5hYmxlICYmIGNoaWxkQ29uZmlnLmVuYWJsZSljaGlsZENvbmZpZy5lbmFibGUuc3RhdGUgPSBjaGlsZC5wcm9wcy5lbmFibGU7XG4gICAgICAgICAgICBpZiAoc3R5bGUpIGNoaWxkQ29uZmlnLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBzdHlsZTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIGNoaWxkQ29uZmlnLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICBpZiAob3RoZXIgJiYgY2hpbGRDb25maWcucHJvcHMpIGNoaWxkQ29uZmlnLnByb3BzLm1lcmdlKG90aGVyKTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcC5zZXQoY2hpbGQsIGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsIGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbmZpZ1tcImFkZEdhcEF0XCJdKSB7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnZ2FwRGl2JywgSFRNTFdyYXBwZXJDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIHJlbmRlckNoaWxkcmVuKHJlYWN0Q29tcCxjaGlsZExpc3QpXG4gICAge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKVxuXHQgICAgICAgIGNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgLS0gcmVuZGVyQ2hpbGRyZW5cIik7XG5cbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIHZhciBwcm9wc0NvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5wcm9wcztcblxuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBjaGlsZENvbmZpZ3MubWFwKGZ1bmN0aW9uIChjaGlsZENvbmZpZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5nZXQoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG5cbiAgICAgICAgICAgIGlmKGNoaWxkTGlzdClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgaWYoY2hpbGRMaXN0LmluZGV4T2YoY29uZmlnTmFtZSkgPT0gLTEpXG4gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BzID0ge31cblxuICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgaWYgKGNoaWxkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIubWVyZ2VJbnRvKHByb3BzLCBjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHByb3BzQ29uZmlnICYmIHByb3BzQ29uZmlnLmhhc0NoaWxkUHJvcHMoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gcHJvcHNDb25maWcuZ2V0UHJvcHNGb3JDaGlsZChyZWFjdENvbXAsIGNoaWxkQ29uZmlnLGNvbmZpZ05hbWUsaW5kZXgpO1xuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIubWVyZ2VJbnRvKHByb3BzLCBvYmopO1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBwcm9wc0NvbmZpZy5rZXlQcm9wO1xuICAgICAgICAgICAgICAgIGlmKGtleSAmJiBrZXkubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleSA9PT0gXCJpbmRleFwiKSBwcm9wc1tcImtleVwiXSA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGtleSA9PT0gXCJvYmplY3ROYW1lXCIpIHByb3BzW1wia2V5XCJdID0gY29uZmlnTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihjaGlsZENvbmZpZ1trZXldKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjaGlsZENvbmZpZ1trZXldIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUpcHJvcHNbXCJrZXlcIl0gPSBjaGlsZENvbmZpZ1trZXldLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBwcm9wc1tcImtleVwiXSA9IGNoaWxkQ29uZmlnW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBpbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY2hpbGRDb25maWcucHJvcHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNBcmcgPSBjaGlsZCA/IGNoaWxkIDogY2hpbGRDb25maWc7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5tZXJnZUludG8ocHJvcHMsIGNoaWxkQ29uZmlnLnByb3BzLmdldFByb3BzKHRoaXNBcmcsY2hpbGRDb25maWcsY29uZmlnTmFtZSwgaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWdOYW1lID09PSBcImdhcERpdlwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yZGVyVmFsdWUgPSBTdHJpbmcocmVhY3RDb21wLnNldHRpbmdzLmFkZEdhcEF0LnN0YXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG9yZGVyVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wic3R5bGVcIl0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBvcmRlclZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGlsZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIikgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBjaGlsZENvbmZpZy5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9IENvbXBvbmVudE1hbmFnZXIuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcblx0ICAgICAgICAgICAgICAgIGlmKCFUb29sQ2xhc3MpIGNvbnNvbGUuZXJyb3IoXCJUb29sIE5vdCBmb3VuZCBmb3IgY29uZmlnOiBcIixjb25maWdDbGFzcylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUb29sQ2xhc3Mgey4uLnByb3BzfSA+IHtjaGlsZH0gPC9Ub29sQ2xhc3M+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmhhcyhjaGlsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsIGNsb25lZENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCwgY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vdG8tZG8gbmVlZCB0byByZXBsYWNlIHdpdGggZmxleGluZm8gZmlsZSBvciB0aWhlciBtZWFuLCBjcmVhdGUgYSB1dGlsaXR5IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgLy90aGlzIHNvbHV0aW9uIHdpbGwgZmFpbCB3aGVuIGNvbmZpZyBub3QgcGFydCBvZiBzZXNzaW9uIHRyZWVcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBjaGlsZENvbmZpZy5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgVG9vbENsYXNzID0gQ29tcG9uZW50TWFuYWdlci5nZXRUb29sSW1wbGVtZW50YXRpb24oY29uZmlnQ2xhc3MpO1xuXHQgICAgICAgICAgICBpZighVG9vbENsYXNzKSBjb25zb2xlLmVycm9yKFwiVG9vbCBOb3QgZm91bmQgZm9yIGNvbmZpZzogXCIsY29uZmlnQ2xhc3MpXG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPCBUb29sQ2xhc3Mgey4uLnByb3BzfS8+O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmKGNoaWxkTGlzdCAmJiBjaGlsZExpc3QubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IGNsb25lZENoaWxkcmVuLmZpbHRlcihmdW5jdGlvbihjaGlsZCxpbmRleCl7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZENoaWxkcmVuO1xuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuICAgIH1cblxuICAgIHN0YXRpYyBtZXJnZUludG8oaW50bywgb2JqLCBpZ25vcmVQcm9wcykge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG5cblxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnRvb2xSZWdpc3RyeSA9IHt9O1xuQ29tcG9uZW50TWFuYWdlci50b29sQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuQ29tcG9uZW50TWFuYWdlci5kZWJ1ZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRNYW5hZ2VyO1xuIl19