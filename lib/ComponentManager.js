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
                    } else if (obj instanceof weavejs.core.LinkableVariable) {
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
//# sourceMappingURL=data:application/json;base64,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TUFBTSxLQUFLLGFBQWE7QUFDckMsaUJBQUssSUFBSSxJQUFKLElBQVksR0FBakIsRUFBc0I7QUFDbEIscUJBQUssSUFBTCxJQUFhLElBQUksSUFBSixDQUFiLENBRGtCO2FBQXRCO0FBR0EsbUJBQU8sSUFBUCxDQUpxQzs7OztXQS9ldkM7OztBQXlmTixpQkFBaUIsWUFBakIsR0FBZ0MsRUFBaEM7QUFDQSxpQkFBaUIsYUFBakIsR0FBaUMsSUFBSSxHQUFKLEVBQWpDO0FBQ0EsaUJBQWlCLEtBQWpCLEdBQXlCLEtBQXpCOztrQkFFZSIsImZpbGUiOiJDb21wb25lbnRNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnIGZyb20gXCIuL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ1NTIGZyb20gXCIuL2NvbmZpZ3MvQ1NTXCI7XG5pbXBvcnQgUHJvcHMgZnJvbSBcIi4vY29uZmlncy9Qcm9wc1wiO1xuXG5jbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSwganNDbGFzcykge1xuICAgICAgICBpZiAoIUNvbXBvbmVudE1hbmFnZXIudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSlcbiAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSA9IGpzQ2xhc3M7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xDb25maWcodG9vbENsYXNzLCBjb25maWcpIHtcbiAgICAgICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnRvb2xDb25maWdNYXAuaGFzKHRvb2xDbGFzcykpXG4gICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLnRvb2xDb25maWdNYXAuc2V0KHRvb2xDbGFzcywgY29uZmlnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9vbENvbmZpZyh0b29sQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIudG9vbENvbmZpZ01hcC5nZXQodG9vbENsYXNzKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0aWFsaXplKHJlYWN0Q29tcCx0eXBlKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5zZXR0aW5ncykge1xuICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gcmVhY3RDb21wLnByb3BzLnNldHRpbmdzO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciBuZXdDb25maWcgPSBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xDb25maWcocmVhY3RDb21wLmNvbnN0cnVjdG9yKVxuICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gbmV3Q29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc3R5bGUpIHsgLy8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSByZWFjdENvbXAucHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5jbGFzc05hbWUpIHsgLy8gdXNlciBjbGFzc05hbWUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmVuYWJsZSkge1xuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUpIHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUuc3RhdGUgPSByZWFjdENvbXAucHJvcHMuZW5hYmxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMudXNlQ1NTKSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLnVzZUNTUykgcmVhY3RDb21wLnNldHRpbmdzLnVzZUNTUy5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy51c2VDU1M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLnZpc2libGUpIHJlYWN0Q29tcC5zZXR0aW5ncy52aXNpYmxlLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLnZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5kZXZpY2VNb2RlKSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLmRldmljZU1vZGUpIHJlYWN0Q29tcC5zZXR0aW5ncy5kZXZpY2VNb2RlLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLmRldmljZU1vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5pY29uTW9kZSkge1xuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5pY29uTW9kZSkgcmVhY3RDb21wLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLmljb25Nb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMucmV2ZXJzZUxheW91dCkge1xuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0KSByZWFjdENvbXAuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy5yZXZlcnNlTGF5b3V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09IFwiY29udGFpbmVyXCIgICYmIHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICE9IFwiSFRNTFdyYXBwZXJcIikge1xuICAgICAgICAgICAgdmFyIFdyYXBwZXJDb25maWdDbGFzcyA9IHJlYWN0Q29tcFtcIldyYXBwZXJDb25maWdDbGFzc1wiXSA/IHJlYWN0Q29tcFtcIldyYXBwZXJDb25maWdDbGFzc1wiXSA6IG51bGw7XG4gICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihyZWFjdENvbXAucHJvcHMuY2hpbGRyZW4sIHJlYWN0Q29tcC5zZXR0aW5ncywgV3JhcHBlckNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgIHJlYWN0Q29tcC5yZW5kZXJDaGlsZHJlbiA9IHJlYWN0Q29tcC5yZW5kZXJDaGlsZHJlbi5iaW5kKHJlYWN0Q29tcCk7XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3MocmVhY3RDb21wKTtcbiAgICAgICAgXG5cblxuICAgIH1cbiAgICBcbiAgICAvL3RvZG8gb3JnYW5pemUgYmV0dGVyXG4gICAgc3RhdGljIGZsaXBJY29ucyhjb25maWcsaWNvblN0YXRlTmFtZXMpe1xuICAgICAgICBpZighY29uZmlnLnJldmVyc2VMYXlvdXQpe1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibm8gcmV2ZXJzZUxheW91dCBTZXNzaW9uIE9iamVjdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgaWNvblN0YXRlTmFtZXMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBpY29uT2JqID0gY29uZmlnW2ljb25TdGF0ZU5hbWVzW2ldXS5zdGF0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoaWNvbk9iail7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGljb25PYmogIT0gXCJzdHJpbmdcIil7IC8vbGlua2FibGVWcmFpYmxlIE9ialxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGljb25PYmopO1xuICAgICAgICAgICAgICAgICAgICBpZihjb25maWcucmV2ZXJzZUxheW91dC5zdGF0ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLm1hcChmdW5jdGlvbihrZXksaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGljb25PYmpba2V5XS5pbmRleE9mKFwiL1wiKSA9PSAtMSl7Ly9mb250YXdlc29tZSBpY29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpY29uT2JqW2tleV0uaW5kZXhPZihcIiBmYS1mbGlwLWhvcml6b250YWxcIikgPT0gLTEpey8vbm90IGZsaXBwZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25PYmpba2V5XSA9IGljb25PYmpba2V5XSArIFwiIGZhLWZsaXAtaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLm1hcChmdW5jdGlvbihrZXksaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGljb25PYmpba2V5XS5pbmRleE9mKFwiIGZhLWZsaXAtaG9yaXpvbnRhbFwiKSAhPSAtMSl7Ly8gZmxpcHBlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBpY29uT2JqW2tleV0uaW5kZXhPZihcIiBmYS1mbGlwLWhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25PYmpba2V5XSA9IGljb25PYmpba2V5XS5zdWJzdHJpbmcoMCxpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNleyAvL0xpbmthYmxlU3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpZy5yZXZlcnNlTGF5b3V0LnN0YXRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGljb25PYmouaW5kZXhPZihcIi9cIikgPT0gLTEpey8vZm9udGF3ZXNvbWUgaWNvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpY29uT2JqLmluZGV4T2YoXCIgZmEtZmxpcC1ob3Jpem9udGFsXCIpID09IC0xKXsvL25vdCBmbGlwcGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25PYmogPSBpY29uT2JqICsgXCIgZmEtZmxpcC1ob3Jpem9udGFsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGljb25PYmouaW5kZXhPZihcIiBmYS1mbGlwLWhvcml6b250YWxcIikgIT0gLTEpey8vIGZsaXBwZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBpY29uT2JqLmluZGV4T2YoXCIgZmEtZmxpcC1ob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25PYmogPSBpY29uT2JqLnN1YnN0cmluZygwLGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uZmlnW2ljb25TdGF0ZU5hbWVzW2ldXS5zdGF0ZSA9IGljb25PYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG5cbiAgICBzdGF0aWMgY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKGNvbmZpZyx0eXBlKXtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhjb25maWcuY29uc3RydWN0b3IubmFtZSArIFwiIC0tIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25maWcsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25Nb2RlU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25Nb2RlTmFtZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk1vZGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZXZpY2VNb2RlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImxhcmdlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmV2ZXJzZUxheW91dFwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInByb3BzXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiAgbmV3IFByb3BzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYodHlwZSA9PT0gXCJjb250YWluZXJcIil7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25maWcsIHtcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6e1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImFkZEdhcEF0XCI6e1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uZmlnLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHJlYWN0Q29tcCwgbmV4dFByb3BzKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIC0tLVwiKTtcbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgU2V0dGluZ3MgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogU2V0dGluZ3NcIik7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3MocmVhY3RDb21wKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKSB7IC8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBwcm9wcyBzdHlsZSBjaGFuZ2VkIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMuc3R5bGUgKyBcIiB0byBcIiArIG5leHRQcm9wcy5zdHlsZSk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmNsYXNzTmFtZSAhPT0gbmV4dFByb3BzLmNsYXNzTmFtZSkgeyAvLyB1c2VyIGNsYXNzTmFtZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIGNsYXNzTmFtZSBjaGFuZ2VkIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMuY2xhc3NOYW1lICsgXCIgdG8gXCIgKyBuZXh0UHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBjbGFzc05hbWVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBuZXh0UHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuZW5hYmxlICE9PSBuZXh0UHJvcHMuZW5hYmxlKSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgZW5hYmxlIGNoYW5nZWQgIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMuZW5hYmxlICsgXCIgdG8gXCIgKyBuZXh0UHJvcHMuZW5hYmxlKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuZW5hYmxlICE9PSB1bmRlZmluZWQgJiYgcmVhY3RDb21wLnNldHRpbmdzLmVuYWJsZSkge1xuICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBlbmFibGVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmVuYWJsZS5zdGF0ZSA9IG5leHRQcm9wcy5lbmFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy52aXNpYmxlICE9PSBuZXh0UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIHZpc2libGUgY2hhbmdlZCBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLnZpc2libGUgKyBcIiB0byBcIiArIG5leHRQcm9wcy52aXNpYmxlKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMudmlzaWJsZSAhPT0gdW5kZWZpbmVkICYmIHJlYWN0Q29tcC5zZXR0aW5ncy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLnZpc2libGUuc3RhdGUgPSBuZXh0UHJvcHMudmlzaWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmRldmljZU1vZGUgIT09IG5leHRQcm9wcy5kZXZpY2VNb2RlKSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgZGV2aWNlTW9kZSBjaGFuZ2VkIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMuZGV2aWNlTW9kZSArIFwiIHRvIFwiICsgbmV4dFByb3BzLmRldmljZU1vZGUpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5kZXZpY2VNb2RlICE9PSB1bmRlZmluZWQgJiYgcmVhY3RDb21wLnNldHRpbmdzLmRldmljZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogZGV2aWNlTW9kZVwiKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuZGV2aWNlTW9kZS5zdGF0ZSA9IG5leHRQcm9wcy5kZXZpY2VNb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMucmV2ZXJzZUxheW91dCAhPT0gbmV4dFByb3BzLnJldmVyc2VMYXlvdXQpIHtcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBwcm9wcyByZXZlcnNlTGF5b3V0IGNoYW5nZWQgZnJvbSBcIiArIHJlYWN0Q29tcC5wcm9wcy5yZXZlcnNlTGF5b3V0ICsgXCIgdG8gXCIgKyBuZXh0UHJvcHMucmV2ZXJzZUxheW91dCk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnJldmVyc2VMYXlvdXQgIT09IHVuZGVmaW5lZCAmJiByZWFjdENvbXAuc2V0dGluZ3MucmV2ZXJzZUxheW91dCkge1xuICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiByZXZlcnNlTGF5b3V0XCIpO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlID0gbmV4dFByb3BzLnJldmVyc2VMYXlvdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5pY29uTW9kZSAhPT0gbmV4dFByb3BzLmljb25Nb2RlKSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgaWNvbk1vZGUgY2hhbmdlZCBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLmljb25Nb2RlICsgXCIgdG8gXCIgKyBuZXh0UHJvcHMuaWNvbk1vZGUpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5pY29uTW9kZSAhPT0gdW5kZWZpbmVkICAmJiByZWFjdENvbXAuc2V0dGluZ3MuaWNvbk1vZGUpe1xuICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBpY29uTW9kZVwiKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuaWNvbk1vZGUuc3RhdGUgPSBuZXh0UHJvcHMuaWNvbk1vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCJjaGlsZHJlblwiKTtcbiAgICAgICAgICAgIHZhciBXcmFwcGVyQ29uZmlnQ2xhc3MgPSByZWFjdENvbXBbXCJXcmFwcGVyQ29uZmlnQ2xhc3NcIl0gPyByZWFjdENvbXBbXCJXcmFwcGVyQ29uZmlnQ2xhc3NcIl0gOiBudWxsO1xuICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLCByZWFjdENvbXAuc2V0dGluZ3MsIFdyYXBwZXJDb25maWdDbGFzcyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyBjb21wb25lbnRXaWxsVW5tb3VudChyZWFjdENvbXApe1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgLSBjb21wb25lbnRXaWxsVW5tb3VudFwiKTtcbiAgICAgICAgIENvbXBvbmVudE1hbmFnZXIucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3VsZENvbXBvbmVudFVwZGF0ZShyZWFjdENvbXAsIG5leHRQcm9wcykge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgLSBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIC8vdG8tZG8gc3luYyBiZXR3ZWVuIHByb3BzIGNsYXNzIGFuZCB3ZWF2ZXN0YXRlXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHJlYWN0Q29tcCkge1xuICAgICAgICB2YXIgY29uZmlnID0gcmVhY3RDb21wLnNldHRpbmdzO1xuICAgICAgICBpZiAoIVdlYXZlLmlzTGlua2FibGUoY29uZmlnKSlcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29uZmlnLCBcIiBpcyBub3QgYSBMaW5rYWJsZU9iamVjdFwiKTtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjb25maWcpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwbiA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgb2JqID0gY29uZmlnW3BuXTtcbiAgICAgICAgICAgIGlmIChXZWF2ZS5pc0xpbmthYmxlKG9iaikpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCl7XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG9iai5jaGlsZExpc3RDYWxsYmFja3M7XG4gICAgICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLmFkZEdyb3VwZWRDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikuYWRkR3JvdXBlZENhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmogaW5zdGFuY2VvZiBJbmxpbmVTdHlsZSl7XG4gICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5hZGRHcm91cGVkQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iaiBpbnN0YW5jZW9mIENTUyl7XG4gICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5hZGRHcm91cGVkQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCkge1xuICAgICAgICB2YXIgY29uZmlnID0gcmVhY3RDb21wLnNldHRpbmdzO1xuICAgICAgICBpZiAoIVdlYXZlLmlzTGlua2FibGUoY29uZmlnKSlcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29uZmlnLCBcIiBpcyBub3QgYSBMaW5rYWJsZU9iamVjdFwiKTtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjb25maWcpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwbiA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgb2JqID0gY29uZmlnW3BuXTtcbiAgICAgICAgICAgIGlmIChXZWF2ZS5pc0xpbmthYmxlKG9iaikpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCl7XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG9iai5jaGlsZExpc3RDYWxsYmFja3M7XG4gICAgICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLnJlbW92ZUNhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSl7XG4gICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5yZW1vdmVDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2JqIGluc3RhbmNlb2YgSW5saW5lU3R5bGUpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikucmVtb3ZlQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iaiBpbnN0YW5jZW9mIENTUyl7XG4gICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5yZW1vdmVDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG4gICAgLy9Gb3IgdGVzdGluZyAgYW5kIGRlYnVnXG4gICAgc3RhdGljIGlzU2Vzc2lvbkNoYW5nZWRGb3IoY29uZmlnKSB7XG4gICAgICAgIGlmICghV2VhdmUuaXNMaW5rYWJsZShjb25maWcpKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb25maWcsIFwiIGlzIG5vdCBhIExpbmthYmxlT2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbmZpZyk7XG4gICAgICAgIHZhciBsaW5rYmxlT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgdmFyIG1vcmVMaW5rYWJsZU9iamVjdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZiAoV2VhdmUuaXNMaW5rYWJsZShvYmopKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvID0gKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApID8gb2JqLmNoaWxkTGlzdENhbGxiYWNrcyA6IG9ialxuICAgICAgICAgICAgICAgIGlmICghbGlua2JsZU9iamVjdCkgbGlua2JsZU9iamVjdCA9IGxvO1xuICAgICAgICAgICAgICAgIGVsc2UgbW9yZUxpbmthYmxlT2JqZWN0cy5wdXNoKGxvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChDb21wb25lbnRNYW5hZ2VyLmRlYnVnKSB7XG4gICAgICAgICAgICB2YXIgaXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAobW9yZUxpbmthYmxlT2JqZWN0cy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXNDaGFuZ2VkID0gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbW9yZUxpbmthYmxlT2JqZWN0c1tpXSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9yZUxpbmthYmxlT2JqZWN0c1tpXSwgXCIgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlua2JsZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlzQ2hhbmdlZCA9IFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QpO1xuICAgICAgICAgICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGlua2JsZU9iamVjdCwgXCIgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZywgXCIgbm8gc2Vzc2lvbiBDaGlsZHJlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3JlTGlua2FibGVPYmplY3RzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbGlua2JsZU9iamVjdCwgbW9yZUxpbmthYmxlT2JqZWN0cylcbiAgICAgICAgZWxzZSBpZiAobGlua2JsZU9iamVjdClcbiAgICAgICAgICAgIHJldHVybiBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBsaW5rYmxlT2JqZWN0KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKGNoaWxkcmVuLCBjb25maWcsIFdyYXBwZXJDb25maWdDbGFzcykge1xuICAgICAgICBjb25maWcuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcblxuICAgICAgICBjb25maWcuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9IGNvbmZpZy5jaGlsZHJlbi5nZXROYW1lKGtleSk7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVtb3ZlT2JqZWN0KGNvbmZpZ05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZE5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkQ29uZmlnTWFwLmdldChjaGlsZCk7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWdOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKSB7IC8vIGZvciBIVE1MIEVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZENvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBXcmFwcGVyQ29uZmlnQ2xhc3MgPyBXcmFwcGVyQ29uZmlnQ2xhc3MgOiBIVE1MV3JhcHBlckNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLCBjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gZm9yIFJlYWN0IENvbXBvc2l0ZSBFbGVtZW50c1xuICAgICAgICAgICAgICAgIGlmKCFjaGlsZC5zZXR0aW5ncyAmJiAhY2hpbGQucHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xDb25maWcoY2hpbGQudHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRDb25maWcgJiYgY29uZmlnQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsIGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNoaWxkLnNldHRpbmdzP2NoaWxkLnNldHRpbmdzOmNoaWxkLnByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuY2hpbGRyZW4uc2V0T2JqZWN0KCcnLCBjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIge2NsYXNzTmFtZSwgc3R5bGUsIC4uLm90aGVyfSA9IGNoaWxkLnByb3BzO1xuICAgICAgICAgICAgaWYoY2hpbGQucHJvcHMuZW5hYmxlICYmIGNoaWxkQ29uZmlnLmVuYWJsZSljaGlsZENvbmZpZy5lbmFibGUuc3RhdGUgPSBjaGlsZC5wcm9wcy5lbmFibGU7XG4gICAgICAgICAgICBpZiAoc3R5bGUpIGNoaWxkQ29uZmlnLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBzdHlsZTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIGNoaWxkQ29uZmlnLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICBpZiAob3RoZXIgJiYgY2hpbGRDb25maWcucHJvcHMpIGNoaWxkQ29uZmlnLnByb3BzLm1lcmdlKG90aGVyKTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcC5zZXQoY2hpbGQsIGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsIGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbmZpZ1tcImFkZEdhcEF0XCJdKSB7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnZ2FwRGl2JywgSFRNTFdyYXBwZXJDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIHJlbmRlckNoaWxkcmVuKHJlYWN0Q29tcCxjaGlsZExpc3QpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiIC0tIHJlbmRlckNoaWxkcmVuXCIpO1xuICAgICAgICB2YXIgY2hpbGRDb25maWdzID0gcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgdmFyIHByb3BzQ29uZmlnID0gcmVhY3RDb21wLnNldHRpbmdzLnByb3BzO1xuXG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IGNoaWxkQ29uZmlncy5tYXAoZnVuY3Rpb24gKGNoaWxkQ29uZmlnLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gcmVhY3RDb21wLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLmdldChjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcblxuICAgICAgICAgICAgaWYoY2hpbGRMaXN0KXtcbiAgICAgICAgICAgICAgICAgaWYoY2hpbGRMaXN0LmluZGV4T2YoY29uZmlnTmFtZSkgPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSB7fVxuXG4gICAgICAgICAgICBwcm9wc1tcInNldHRpbmdzXCJdID0gY2hpbGRDb25maWc7XG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAvL2lmKGNoaWxkLnByb3BzICYmICFjaGlsZC5wcm9wcy5zZXR0aW5ncylcblxuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIubWVyZ2VJbnRvKHByb3BzLCBjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcm9wc0NvbmZpZyAmJiBwcm9wc0NvbmZpZy5oYXNDaGlsZFByb3BzKCkpe1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSBwcm9wc0NvbmZpZy5nZXRQcm9wc0ZvckNoaWxkKHJlYWN0Q29tcCwgY2hpbGRDb25maWcsY29uZmlnTmFtZSxpbmRleCk7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5tZXJnZUludG8ocHJvcHMsIG9iaik7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHByb3BzQ29uZmlnLmtleVByb3A7XG4gICAgICAgICAgICAgICAgaWYoa2V5ICYmIGtleS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoa2V5ID09PSBcImluZGV4XCIpIHByb3BzW1wia2V5XCJdID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoa2V5ID09PSBcIm9iamVjdE5hbWVcIikgcHJvcHNbXCJrZXlcIl0gPSBjb25maWdOYW1lO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGNoaWxkQ29uZmlnW2tleV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2hpbGRDb25maWdba2V5XSBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKXByb3BzW1wia2V5XCJdID0gY2hpbGRDb25maWdba2V5XS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcHJvcHNbXCJrZXlcIl0gPSBjaGlsZENvbmZpZ1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wia2V5XCJdID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBpbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY2hpbGRDb25maWcucHJvcHMpe1xuICAgICAgICAgICAgICAgIHZhciB0aGlzQXJnID0gY2hpbGQgPyBjaGlsZCA6IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIubWVyZ2VJbnRvKHByb3BzLCBjaGlsZENvbmZpZy5wcm9wcy5nZXRQcm9wcyh0aGlzQXJnLGNoaWxkQ29uZmlnLGNvbmZpZ05hbWUsIGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnTmFtZSA9PT0gXCJnYXBEaXZcIikge1xuICAgICAgICAgICAgICAgIHZhciBvcmRlclZhbHVlID0gU3RyaW5nKHJlYWN0Q29tcC5zZXR0aW5ncy5hZGRHYXBBdC5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihvcmRlclZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInN0eWxlXCJdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogb3JkZXJWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBjaGlsZENvbmZpZy5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9IENvbXBvbmVudE1hbmFnZXIuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUb29sQ2xhc3Mgey4uLnByb3BzfSA+IHtjaGlsZH0gPCAvVG9vbENsYXNzPjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmhhcyhjaGlsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsIGNsb25lZENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCwgY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3RvLWRvIG5lZWQgdG8gcmVwbGFjZSB3aXRoIGZsZXhpbmZvIGZpbGUgb3IgdGloZXIgbWVhbiwgY3JlYXRlIGEgdXRpbGl0eSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIC8vdGhpcyBzb2x1dGlvbiB3aWxsIGZhaWwgd2hlbiBjb25maWcgbm90IHBhcnQgb2Ygc2Vzc2lvbiB0cmVlXG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gY2hpbGRDb25maWcuRkxFWEpTX0NMQVNTX0lORk8ubmFtZXNbMF0ucU5hbWU7XG4gICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9IENvbXBvbmVudE1hbmFnZXIuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSA8IFRvb2xDbGFzcyB7Li4ucHJvcHN9Lz47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYoY2hpbGRMaXN0ICYmIGNoaWxkTGlzdC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gY2xvbmVkQ2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uKGNoaWxkLGluZGV4KXtcbiAgICAgICAgICAgICAgICBpZihjaGlsZCA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkQ2hpbGRyZW47XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgc3RhdGljIG1lcmdlSW50byhpbnRvLCBvYmosIGlnbm9yZVByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICBpbnRvW2F0dHJdID0gb2JqW2F0dHJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuQ29tcG9uZW50TWFuYWdlci50b29sUmVnaXN0cnkgPSB7fTtcbkNvbXBvbmVudE1hbmFnZXIudG9vbENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbkNvbXBvbmVudE1hbmFnZXIuZGVidWcgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50TWFuYWdlcjtcbiJdfQ==
