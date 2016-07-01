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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudE1hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPTTtBQUNGLGFBREUsZ0JBQ0YsR0FBYzs4QkFEWixrQkFDWTtLQUFkOztpQkFERTs7bURBS2dDLGFBQWEsU0FBUztBQUNwRCxnQkFBSSxDQUFDLGlCQUFpQixZQUFqQixDQUE4QixXQUE5QixDQUFELEVBQ0EsaUJBQWlCLFlBQWpCLENBQThCLFdBQTlCLElBQTZDLE9BQTdDLENBREo7Ozs7OENBSXlCLGFBQWE7QUFDdEMsbUJBQU8saUJBQWlCLFlBQWpCLENBQThCLFdBQTlCLENBQVAsQ0FEc0M7Ozs7MkNBSWhCLFdBQVcsUUFBUTtBQUN6QyxnQkFBSSxDQUFDLGlCQUFpQixhQUFqQixDQUErQixHQUEvQixDQUFtQyxTQUFuQyxDQUFELEVBQ0EsaUJBQWlCLGFBQWpCLENBQStCLEdBQS9CLENBQW1DLFNBQW5DLEVBQThDLE1BQTlDLEVBREo7Ozs7c0NBSWlCLFdBQVc7QUFDNUIsbUJBQU8saUJBQWlCLGFBQWpCLENBQStCLEdBQS9CLENBQW1DLFNBQW5DLENBQVAsQ0FENEI7Ozs7bUNBS2QsV0FBVSxNQUFNO0FBQzlCLGdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsaUJBQTdCLENBQVosQ0FBMUI7QUFDQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsRUFBMEI7QUFDMUIsMEJBQVUsUUFBVixHQUFxQixVQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsQ0FESzthQUE5QixNQUVLO0FBQ0Qsb0JBQUksWUFBWSxpQkFBaUIsYUFBakIsQ0FBK0IsVUFBVSxXQUFWLENBQTNDLENBREg7QUFFRCwwQkFBVSxRQUFWLEdBQXFCLFNBQXJCLENBRkM7YUFGTDtBQU1BLGdCQUFJLFVBQVUsS0FBVixDQUFnQixLQUFoQixFQUF1Qjs7QUFDdkIsMEJBQVUsUUFBVixDQUFtQixLQUFuQixDQUF5QixVQUF6QixDQUFvQyxLQUFwQyxHQUE0QyxVQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FEckI7YUFBM0I7QUFHQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsRUFBMkI7O0FBQzNCLDBCQUFVLFFBQVYsQ0FBbUIsR0FBbkIsQ0FBdUIsU0FBdkIsQ0FBaUMsS0FBakMsR0FBeUMsVUFBVSxLQUFWLENBQWdCLFNBQWhCLENBRGQ7YUFBL0I7QUFHQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0I7QUFDeEIsb0JBQUksVUFBVSxRQUFWLENBQW1CLE1BQW5CLEVBQTJCLFVBQVUsUUFBVixDQUFtQixNQUFuQixDQUEwQixLQUExQixHQUFrQyxVQUFVLEtBQVYsQ0FBZ0IsTUFBaEIsQ0FBakU7YUFESjtBQUdBLGdCQUFJLFVBQVUsS0FBVixDQUFnQixNQUFoQixFQUF3QjtBQUN4QixvQkFBSSxVQUFVLFFBQVYsQ0FBbUIsTUFBbkIsRUFBMkIsVUFBVSxRQUFWLENBQW1CLE1BQW5CLENBQTBCLEtBQTFCLEdBQWtDLFVBQVUsS0FBVixDQUFnQixNQUFoQixDQUFqRTthQURKO0FBR0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLE9BQWhCLEVBQXlCO0FBQ3pCLG9CQUFJLFVBQVUsUUFBVixDQUFtQixPQUFuQixFQUE0QixVQUFVLFFBQVYsQ0FBbUIsT0FBbkIsQ0FBMkIsS0FBM0IsR0FBbUMsVUFBVSxLQUFWLENBQWdCLE9BQWhCLENBQW5FO2FBREo7QUFHQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsRUFBNEI7QUFDNUIsb0JBQUksVUFBVSxRQUFWLENBQW1CLFVBQW5CLEVBQStCLFVBQVUsUUFBVixDQUFtQixVQUFuQixDQUE4QixLQUE5QixHQUFzQyxVQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FBekU7YUFESjtBQUdBLGdCQUFJLFVBQVUsS0FBVixDQUFnQixRQUFoQixFQUEwQjtBQUMxQixvQkFBSSxVQUFVLFFBQVYsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBVSxRQUFWLENBQW1CLFFBQW5CLENBQTRCLEtBQTVCLEdBQW9DLFVBQVUsS0FBVixDQUFnQixRQUFoQixDQUFyRTthQURKO0FBR0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLGFBQWhCLEVBQStCO0FBQy9CLG9CQUFJLFVBQVUsUUFBVixDQUFtQixhQUFuQixFQUFrQyxVQUFVLFFBQVYsQ0FBbUIsYUFBbkIsQ0FBaUMsS0FBakMsR0FBeUMsVUFBVSxLQUFWLENBQWdCLGFBQWhCLENBQS9FO2FBREo7QUFHQSxnQkFBSSxRQUFRLFdBQVIsSUFBd0IsVUFBVSxXQUFWLENBQXNCLElBQXRCLElBQThCLGFBQTlCLEVBQTZDO0FBQ3JFLG9CQUFJLHFCQUFxQixVQUFVLG9CQUFWLElBQWtDLFVBQVUsb0JBQVYsQ0FBbEMsR0FBb0UsSUFBcEUsQ0FENEM7QUFFckUsaUNBQWlCLG9DQUFqQixDQUFzRCxVQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsRUFBMEIsVUFBVSxRQUFWLEVBQW9CLGtCQUFwRyxFQUZxRTtBQUdyRSwwQkFBVSxjQUFWLEdBQTJCLFVBQVUsY0FBVixDQUF5QixJQUF6QixDQUE4QixTQUE5QixDQUEzQixDQUhxRTthQUF6RTs7QUFNQSw2QkFBaUIseUJBQWpCLENBQTJDLFNBQTNDLEVBdEM4Qjs7Ozs7OztrQ0E2Q2pCLFFBQU8sZ0JBQWU7QUFDbkMsZ0JBQUcsQ0FBQyxPQUFPLGFBQVAsRUFBcUI7QUFDckIsd0JBQVEsSUFBUixDQUFhLGlDQUFiLEVBRHFCO0FBRXJCLHVCQUZxQjthQUF6Qjs7QUFLQSxpQkFBSSxJQUFJLElBQUksQ0FBSixFQUFRLElBQUksZUFBZSxNQUFmLEVBQXdCLEdBQTVDLEVBQWdEO0FBQzVDLG9CQUFJLFVBQVUsT0FBTyxlQUFlLENBQWYsQ0FBUCxFQUEwQixLQUExQixDQUQ4Qjs7QUFHNUMsb0JBQUcsT0FBSCxFQUFXO0FBQ1Asd0JBQUcsT0FBTyxPQUFQLElBQWtCLFFBQWxCLEVBQTJCOztBQUMxQiw0QkFBSSxPQUFPLE9BQU8sSUFBUCxDQUFZLE9BQVosQ0FBUCxDQURzQjtBQUUxQiw0QkFBRyxPQUFPLGFBQVAsQ0FBcUIsS0FBckIsRUFBMkI7QUFDMUIsaUNBQUssR0FBTCxDQUFTLFVBQVMsR0FBVCxFQUFhLEtBQWIsRUFBbUI7QUFDeEIsb0NBQUcsUUFBUSxHQUFSLEVBQWEsT0FBYixDQUFxQixHQUFyQixLQUE2QixDQUFDLENBQUQsRUFBRzs7QUFDL0Isd0NBQUcsUUFBUSxHQUFSLEVBQWEsT0FBYixDQUFxQixxQkFBckIsS0FBK0MsQ0FBQyxDQUFELEVBQUc7O0FBQ2pELGdEQUFRLEdBQVIsSUFBZSxRQUFRLEdBQVIsSUFBZSxxQkFBZixDQURrQztxQ0FBckQ7aUNBREo7NkJBREssQ0FBVCxDQUQwQjt5QkFBOUIsTUFTSztBQUNELGlDQUFLLEdBQUwsQ0FBUyxVQUFTLEdBQVQsRUFBYSxLQUFiLEVBQW1CO0FBQ3hCLG9DQUFHLFFBQVEsR0FBUixFQUFhLE9BQWIsQ0FBcUIscUJBQXJCLEtBQStDLENBQUMsQ0FBRCxFQUFHOztBQUNqRCx3Q0FBSSxRQUFRLFFBQVEsR0FBUixFQUFhLE9BQWIsQ0FBcUIscUJBQXJCLENBQVIsQ0FENkM7QUFFakQsNENBQVEsR0FBUixJQUFlLFFBQVEsR0FBUixFQUFhLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBeUIsS0FBekIsQ0FBZixDQUZpRDtpQ0FBckQ7NkJBREssQ0FBVCxDQURDO3lCQVRMO3FCQUZKLE1Bb0JLOztBQUNELDRCQUFHLE9BQU8sYUFBUCxDQUFxQixLQUFyQixFQUEyQjtBQUMxQixnQ0FBRyxRQUFRLE9BQVIsQ0FBZ0IsR0FBaEIsS0FBd0IsQ0FBQyxDQUFELEVBQUc7O0FBQzFCLG9DQUFHLFFBQVEsT0FBUixDQUFnQixxQkFBaEIsS0FBMEMsQ0FBQyxDQUFELEVBQUc7O0FBQzVDLDhDQUFVLFVBQVUscUJBQVYsQ0FEa0M7aUNBQWhEOzZCQURKO3lCQURKLE1BTUs7QUFDRCxnQ0FBRyxRQUFRLE9BQVIsQ0FBZ0IscUJBQWhCLEtBQTBDLENBQUMsQ0FBRCxFQUFHOztBQUM1QyxvQ0FBSSxRQUFRLFFBQVEsT0FBUixDQUFnQixxQkFBaEIsQ0FBUixDQUR3QztBQUU1QywwQ0FBVSxRQUFRLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBb0IsS0FBcEIsQ0FBVixDQUY0Qzs2QkFBaEQ7eUJBUEo7cUJBckJKOztBQW9DQSwyQkFBTyxlQUFlLENBQWYsQ0FBUCxFQUEwQixLQUExQixHQUFrQyxPQUFsQyxDQXJDTztpQkFBWDthQUhKOzs7O3VEQWdEa0MsUUFBTyxNQUFLO0FBQzlDLGdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxPQUFPLFdBQVAsQ0FBbUIsSUFBbkIsR0FBMEIsaUJBQTFCLENBQVosQ0FBMUI7QUFDQSxtQkFBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUM1Qix5QkFBUTtBQUNKLDJCQUFPLE1BQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QiwyQkFBNUIsQ0FBUDtpQkFESjtBQUdBLGlDQUFnQjtBQUNaLDJCQUFPLE1BQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QiwyQkFBNUIsQ0FBUDtpQkFESjtBQUdBLGdDQUFlO0FBQ1gsMkJBQU8sTUFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixFQUFoQyxDQUE1QixDQUFQO2lCQURKO0FBR0MsdUJBQU07QUFDSCwyQkFBTyxNQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsbUJBQTVCLENBQVA7aUJBREg7QUFHRCwwQkFBUztBQUNMLDJCQUFPLE1BQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsS0FBakMsQ0FBNUIsQ0FBUDtpQkFESjtBQUdBLDBCQUFTO0FBQ0wsMkJBQU8sTUFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUE1QixDQUFQO2lCQURKO0FBR0EsMkJBQVU7QUFDTiwyQkFBTyxNQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLElBQWpDLENBQTVCLENBQVA7aUJBREo7QUFHQSw0QkFBVztBQUNQLDJCQUFPLE1BQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsS0FBakMsQ0FBNUIsQ0FBUDtpQkFESjtBQUdBLDhCQUFhO0FBQ1QsMkJBQU8sTUFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixPQUFoQyxDQUE1QixDQUFQO2lCQURKO0FBR0EsaUNBQWdCO0FBQ1osMkJBQU8sTUFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUE1QixDQUFQO2lCQURKO0FBR0EseUJBQVE7QUFDSiwyQkFBUSxxQkFBUjtpQkFESjthQS9CSixFQUY4Qzs7QUFzQzlDLGdCQUFHLFNBQVMsV0FBVCxFQUFxQjtBQUNwQix1QkFBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUM1QixnQ0FBVztBQUNQLCtCQUFPLE1BQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsRUFBaEMsQ0FBUDtxQkFESjtBQUdBLGdDQUFXO0FBQ1AsK0JBQU8sTUFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixFQUFoQyxDQUFQO3FCQURKO2lCQUpKLEVBRG9COztBQVVwQix1QkFBTyxjQUFQLEdBQXdCLElBQUksR0FBSixFQUF4QixDQVZvQjtBQVdwQix1QkFBTyxjQUFQLEdBQXdCLElBQUksR0FBSixFQUF4QixDQVhvQjthQUF4Qjs7OztrREFpQjZCLFdBQVcsV0FBVztBQUNuRCxnQkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLG1DQUE3QixDQUFaLENBQTFCO0FBQ0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLFFBQWhCLEtBQTZCLFVBQVUsUUFBVixFQUFvQjtBQUNqRCxvQkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLDRCQUE3QixDQUFaLENBQTFCO0FBQ0Esb0JBQUksVUFBVSxRQUFWLEVBQW9CO0FBQ3BCLHdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsY0FBN0IsQ0FBWixDQUExQjtBQUNBLHFDQUFpQiw4QkFBakIsQ0FBZ0QsU0FBaEQsRUFGb0I7QUFHcEIsOEJBQVUsUUFBVixHQUFxQixVQUFVLFFBQVYsQ0FIRDtBQUlwQixxQ0FBaUIseUJBQWpCLENBQTJDLFNBQTNDLEVBSm9CO2lCQUF4QjthQUZKO0FBU0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLEtBQWhCLEtBQTBCLFVBQVUsS0FBVixFQUFpQjs7QUFDM0Msb0JBQUcsaUJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLFVBQVUsV0FBVixDQUFzQixJQUF0QixHQUE2QiwrQkFBN0IsR0FBK0QsVUFBVSxLQUFWLENBQWdCLEtBQWhCLEdBQXdCLE1BQXZGLEdBQWdHLFVBQVUsS0FBVixDQUE1RyxDQUExQjtBQUNBLG9CQUFJLFVBQVUsS0FBVixFQUFpQjtBQUNoQix3QkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLFdBQTdCLENBQVosQ0FBMUI7QUFDRCw4QkFBVSxRQUFWLENBQW1CLEtBQW5CLENBQXlCLFVBQXpCLENBQW9DLEtBQXBDLEdBQTRDLFVBQVUsS0FBVixDQUYzQjtpQkFBckI7YUFGSjtBQU9BLGdCQUFJLFVBQVUsS0FBVixDQUFnQixTQUFoQixLQUE4QixVQUFVLFNBQVYsRUFBcUI7O0FBQ25ELG9CQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsbUNBQTdCLEdBQW1FLFVBQVUsS0FBVixDQUFnQixTQUFoQixHQUE0QixNQUEvRixHQUF3RyxVQUFVLFNBQVYsQ0FBcEgsQ0FBMUI7QUFDQSxvQkFBSSxVQUFVLFNBQVYsRUFBcUI7QUFDcEIsd0JBQUcsaUJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLFVBQVUsV0FBVixDQUFzQixJQUF0QixHQUE2QixlQUE3QixDQUFaLENBQTFCO0FBQ0QsOEJBQVUsUUFBVixDQUFtQixHQUFuQixDQUF1QixTQUF2QixDQUFpQyxLQUFqQyxHQUF5QyxVQUFVLFNBQVYsQ0FGcEI7aUJBQXpCO2FBRko7QUFPQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsTUFBaEIsS0FBMkIsVUFBVSxNQUFWLEVBQWtCO0FBQzdDLG9CQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsaUNBQTdCLEdBQWlFLFVBQVUsS0FBVixDQUFnQixNQUFoQixHQUF5QixNQUExRixHQUFtRyxVQUFVLE1BQVYsQ0FBL0csQ0FBMUI7QUFDQSxvQkFBSSxVQUFVLE1BQVYsS0FBcUIsU0FBckIsSUFBa0MsVUFBVSxRQUFWLENBQW1CLE1BQW5CLEVBQTJCO0FBQzdELHdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsWUFBN0IsQ0FBWixDQUExQjtBQUNBLDhCQUFVLFFBQVYsQ0FBbUIsTUFBbkIsQ0FBMEIsS0FBMUIsR0FBa0MsVUFBVSxNQUFWLENBRjJCO2lCQUFqRTthQUZKO0FBT0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLE9BQWhCLEtBQTRCLFVBQVUsT0FBVixFQUFtQjtBQUMvQyxvQkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLGlDQUE3QixHQUFpRSxVQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsTUFBM0YsR0FBb0csVUFBVSxPQUFWLENBQWhILENBQTFCO0FBQ0Esb0JBQUksVUFBVSxPQUFWLEtBQXNCLFNBQXRCLElBQW1DLFVBQVUsUUFBVixDQUFtQixPQUFuQixFQUE0QjtBQUMvRCx3QkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLGFBQTdCLENBQVosQ0FBMUI7QUFDQSw4QkFBVSxRQUFWLENBQW1CLE9BQW5CLENBQTJCLEtBQTNCLEdBQW1DLFVBQVUsT0FBVixDQUY0QjtpQkFBbkU7YUFGSjtBQU9BLGdCQUFJLFVBQVUsS0FBVixDQUFnQixVQUFoQixLQUErQixVQUFVLFVBQVYsRUFBc0I7QUFDckQsb0JBQUcsaUJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLFVBQVUsV0FBVixDQUFzQixJQUF0QixHQUE2QixvQ0FBN0IsR0FBb0UsVUFBVSxLQUFWLENBQWdCLFVBQWhCLEdBQTZCLE1BQWpHLEdBQTBHLFVBQVUsVUFBVixDQUF0SCxDQUExQjtBQUNBLG9CQUFJLFVBQVUsVUFBVixLQUF5QixTQUF6QixJQUFzQyxVQUFVLFFBQVYsQ0FBbUIsVUFBbkIsRUFBK0I7QUFDckUsd0JBQUcsaUJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLFVBQVUsV0FBVixDQUFzQixJQUF0QixHQUE2QixnQkFBN0IsQ0FBWixDQUExQjtBQUNBLDhCQUFVLFFBQVYsQ0FBbUIsVUFBbkIsQ0FBOEIsS0FBOUIsR0FBc0MsVUFBVSxVQUFWLENBRitCO2lCQUF6RTthQUZKO0FBT0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLGFBQWhCLEtBQWtDLFVBQVUsYUFBVixFQUF5QjtBQUMzRCxvQkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLHVDQUE3QixHQUF1RSxVQUFVLEtBQVYsQ0FBZ0IsYUFBaEIsR0FBZ0MsTUFBdkcsR0FBZ0gsVUFBVSxhQUFWLENBQTVILENBQTFCO0FBQ0Esb0JBQUksVUFBVSxhQUFWLEtBQTRCLFNBQTVCLElBQXlDLFVBQVUsUUFBVixDQUFtQixhQUFuQixFQUFrQztBQUMzRSx3QkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLG1CQUE3QixDQUFaLENBQTFCO0FBQ0EsOEJBQVUsUUFBVixDQUFtQixhQUFuQixDQUFpQyxLQUFqQyxHQUF5QyxVQUFVLGFBQVYsQ0FGa0M7aUJBQS9FO2FBRko7QUFPQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsS0FBNkIsVUFBVSxRQUFWLEVBQW9CO0FBQ2pELG9CQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsa0NBQTdCLEdBQWtFLFVBQVUsS0FBVixDQUFnQixRQUFoQixHQUEyQixNQUE3RixHQUFzRyxVQUFVLFFBQVYsQ0FBbEgsQ0FBMUI7QUFDQSxvQkFBSSxVQUFVLFFBQVYsS0FBdUIsU0FBdkIsSUFBcUMsVUFBVSxRQUFWLENBQW1CLFFBQW5CLEVBQTRCO0FBQ2pFLHdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsY0FBN0IsQ0FBWixDQUExQjtBQUNBLDhCQUFVLFFBQVYsQ0FBbUIsUUFBbkIsQ0FBNEIsS0FBNUIsR0FBb0MsVUFBVSxRQUFWLENBRjZCO2lCQUFyRTthQUZKO0FBT0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLFFBQWhCLEtBQTZCLFVBQVUsUUFBVixFQUFvQjtBQUNqRCxvQkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLFVBQTdCLENBQVosQ0FBMUI7QUFDQSxvQkFBSSxxQkFBcUIsVUFBVSxvQkFBVixJQUFrQyxVQUFVLG9CQUFWLENBQWxDLEdBQW9FLElBQXBFLENBRndCO0FBR2pELGlDQUFpQixvQ0FBakIsQ0FBc0QsVUFBVSxRQUFWLEVBQW9CLFVBQVUsUUFBVixFQUFvQixrQkFBOUYsRUFIaUQ7YUFBckQ7Ozs7NkNBUXdCLFdBQVU7QUFDbEMsZ0JBQUcsaUJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLFVBQVUsV0FBVixDQUFzQixJQUF0QixHQUE2Qix5QkFBN0IsQ0FBWixDQUExQjtBQUNDLDZCQUFpQiw4QkFBakIsQ0FBZ0QsU0FBaEQsRUFGaUM7Ozs7OENBS1QsV0FBVyxXQUFXO0FBQy9DLGdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsMEJBQTdCLENBQVosQ0FBMUI7O0FBRCtDLG1CQUd4QyxLQUFQLENBSCtDOzs7O2tEQU9sQixXQUFXO0FBQ3hDLGdCQUFJLFNBQVMsVUFBVSxRQUFWLENBRDJCO0FBRXhDLGdCQUFJLENBQUMsTUFBTSxVQUFOLENBQWlCLE1BQWpCLENBQUQsRUFDQSxRQUFRLEtBQVIsQ0FBYyxNQUFkLEVBQXNCLDBCQUF0QixFQURKO0FBRUEsZ0JBQUksZ0JBQWdCLE9BQU8sbUJBQVAsQ0FBMkIsTUFBM0IsQ0FBaEIsQ0FKb0M7QUFLeEMsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGNBQWMsTUFBZCxFQUFzQixHQUExQyxFQUErQztBQUMzQyxvQkFBSSxLQUFLLGNBQWMsQ0FBZCxDQUFMLENBRHVDO0FBRTNDLG9CQUFJLE1BQU0sT0FBTyxFQUFQLENBQU4sQ0FGdUM7QUFHM0Msb0JBQUksTUFBTSxVQUFOLENBQWlCLEdBQWpCLENBQUosRUFBMkI7QUFDdkIsd0JBQUksZUFBZSxRQUFRLElBQVIsQ0FBYSxlQUFiLEVBQTZCO0FBQzVDLDhCQUFNLElBQUksa0JBQUosQ0FEc0M7QUFFNUMsOEJBQU0sWUFBTixDQUFtQixHQUFuQixFQUF3QixrQkFBeEIsQ0FBMkMsU0FBM0MsRUFBc0QsVUFBVSxXQUFWLENBQXRELENBRjRDO3FCQUFoRCxNQUdNLElBQUcsZUFBZSxRQUFRLElBQVIsQ0FBYSxnQkFBYixFQUE4QjtBQUNqRCw4QkFBTSxZQUFOLENBQW1CLEdBQW5CLEVBQXdCLGtCQUF4QixDQUEyQyxTQUEzQyxFQUFzRCxVQUFVLFdBQVYsQ0FBdEQsQ0FEaUQ7cUJBQWhELE1BRUEsSUFBRyxvQ0FBSCxFQUE4QjtBQUMvQiw4QkFBTSxZQUFOLENBQW1CLEdBQW5CLEVBQXdCLGtCQUF4QixDQUEyQyxTQUEzQyxFQUFzRCxVQUFVLFdBQVYsQ0FBdEQsQ0FEK0I7cUJBQTlCLE1BRUEsSUFBRyw0QkFBSCxFQUFzQjtBQUN2Qiw4QkFBTSxZQUFOLENBQW1CLEdBQW5CLEVBQXdCLGtCQUF4QixDQUEyQyxTQUEzQyxFQUFzRCxVQUFVLFdBQVYsQ0FBdEQsQ0FEdUI7cUJBQXRCO2lCQVJWO2FBSEo7Ozs7dURBb0JrQyxXQUFXO0FBQzdDLGdCQUFJLFNBQVMsVUFBVSxRQUFWLENBRGdDO0FBRTdDLGdCQUFJLENBQUMsTUFBTSxVQUFOLENBQWlCLE1BQWpCLENBQUQsRUFDQSxRQUFRLEtBQVIsQ0FBYyxNQUFkLEVBQXNCLDBCQUF0QixFQURKO0FBRUEsZ0JBQUksZ0JBQWdCLE9BQU8sbUJBQVAsQ0FBMkIsTUFBM0IsQ0FBaEIsQ0FKeUM7QUFLN0MsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGNBQWMsTUFBZCxFQUFzQixHQUExQyxFQUErQztBQUMzQyxvQkFBSSxLQUFLLGNBQWMsQ0FBZCxDQUFMLENBRHVDO0FBRTNDLG9CQUFJLE1BQU0sT0FBTyxFQUFQLENBQU4sQ0FGdUM7QUFHM0Msb0JBQUksTUFBTSxVQUFOLENBQWlCLEdBQWpCLENBQUosRUFBMkI7QUFDdkIsd0JBQUksZUFBZSxRQUFRLElBQVIsQ0FBYSxlQUFiLEVBQTZCO0FBQzVDLDhCQUFNLElBQUksa0JBQUosQ0FEc0M7QUFFNUMsOEJBQU0sWUFBTixDQUFtQixHQUFuQixFQUF3QixjQUF4QixDQUF1QyxTQUF2QyxFQUFrRCxVQUFVLFdBQVYsQ0FBbEQsQ0FGNEM7cUJBQWhELE1BR00sSUFBRyxlQUFlLFFBQVEsSUFBUixDQUFhLGdCQUFiLEVBQThCO0FBQ2pELDhCQUFNLFlBQU4sQ0FBbUIsR0FBbkIsRUFBd0IsY0FBeEIsQ0FBdUMsU0FBdkMsRUFBa0QsVUFBVSxXQUFWLENBQWxELENBRGlEO3FCQUFoRCxNQUVBLElBQUcsb0NBQUgsRUFBOEI7QUFDL0IsOEJBQU0sWUFBTixDQUFtQixHQUFuQixFQUF3QixjQUF4QixDQUF1QyxTQUF2QyxFQUFrRCxVQUFVLFdBQVYsQ0FBbEQsQ0FEK0I7cUJBQTlCLE1BRUEsSUFBRyw0QkFBSCxFQUFzQjtBQUN2Qiw4QkFBTSxZQUFOLENBQW1CLEdBQW5CLEVBQXdCLGNBQXhCLENBQXVDLFNBQXZDLEVBQWtELFVBQVUsV0FBVixDQUFsRCxDQUR1QjtxQkFBdEI7aUJBUlY7YUFISjs7Ozs7Ozs0Q0FzQnVCLFFBQVE7QUFDL0IsZ0JBQUksQ0FBQyxNQUFNLFVBQU4sQ0FBaUIsTUFBakIsQ0FBRCxFQUNBLFFBQVEsS0FBUixDQUFjLE1BQWQsRUFBc0IsMEJBQXRCLEVBREo7QUFFQSxnQkFBSSxnQkFBZ0IsT0FBTyxtQkFBUCxDQUEyQixNQUEzQixDQUFoQixDQUgyQjtBQUkvQixnQkFBSSxnQkFBZ0IsSUFBaEIsQ0FKMkI7QUFLL0IsZ0JBQUksc0JBQXNCLEVBQXRCLENBTDJCO0FBTS9CLGlCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxjQUFjLE1BQWQsRUFBc0IsR0FBMUMsRUFBK0M7QUFDM0Msb0JBQUksS0FBSyxjQUFjLENBQWQsQ0FBTCxDQUR1QztBQUUzQyxvQkFBSSxNQUFNLE9BQU8sRUFBUCxDQUFOLENBRnVDO0FBRzNDLG9CQUFJLE1BQU0sVUFBTixDQUFpQixHQUFqQixDQUFKLEVBQTJCO0FBQ3ZCLHdCQUFJLEtBQUssR0FBQyxZQUFlLFFBQVEsSUFBUixDQUFhLGVBQWIsR0FBZ0MsSUFBSSxrQkFBSixHQUF5QixHQUF6RSxDQURjO0FBRXZCLHdCQUFJLENBQUMsYUFBRCxFQUFnQixnQkFBZ0IsRUFBaEIsQ0FBcEIsS0FDSyxvQkFBb0IsSUFBcEIsQ0FBeUIsRUFBekIsRUFETDtpQkFGSjthQUhKOztBQVVBLGdCQUFJLGlCQUFpQixLQUFqQixFQUF3QjtBQUN4QixvQkFBSSxZQUFZLEtBQVosQ0FEb0I7QUFFeEIsb0JBQUksb0JBQW9CLE1BQXBCLEdBQTZCLENBQTdCLEVBQWdDOztBQUVoQyx5QkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksb0JBQW9CLE1BQXBCLEVBQTRCLEdBQWhELEVBQXFEO0FBQ2pELG9DQUFZLE1BQU0sWUFBTixDQUFtQixNQUFuQixFQUEyQixvQkFBb0IsQ0FBcEIsQ0FBM0IsQ0FBWixDQURpRDtBQUVqRCw0QkFBSSxTQUFKLEVBQWU7QUFDWCxvQ0FBUSxHQUFSLENBQVksb0JBQW9CLENBQXBCLENBQVosRUFBb0MsVUFBcEMsRUFEVzt5QkFBZjtxQkFGSjtpQkFGSixNQVFPLElBQUksYUFBSixFQUFtQjtBQUN0QixnQ0FBWSxNQUFNLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkIsYUFBM0IsQ0FBWixDQURzQjtBQUV0Qix3QkFBSSxTQUFKLEVBQWU7QUFDWCxnQ0FBUSxHQUFSLENBQVksYUFBWixFQUEyQixVQUEzQixFQURXO3FCQUFmO2lCQUZHLE1BS0E7QUFDSCw0QkFBUSxHQUFSLENBQVksTUFBWixFQUFvQixzQkFBcEIsRUFERztpQkFMQTthQVZYOztBQW9CQSxnQkFBSSxvQkFBb0IsTUFBcEIsR0FBNkIsQ0FBN0IsRUFDQSxPQUFPLE1BQU0sWUFBTixDQUFtQixNQUFuQixFQUEyQixhQUEzQixFQUEwQyxtQkFBMUMsQ0FBUCxDQURKLEtBRUssSUFBSSxhQUFKLEVBQ0QsT0FBTyxNQUFNLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkIsYUFBM0IsQ0FBUCxDQURDLEtBR0QsT0FBTyxLQUFQLENBSEM7Ozs7NkRBUW1DLFVBQVUsUUFBUSxvQkFBb0I7QUFDOUUsbUJBQU8sUUFBUCxDQUFnQixjQUFoQixHQUQ4RTs7QUFHOUUsbUJBQU8sY0FBUCxHQUF3QixJQUFJLEdBQUosRUFBeEIsQ0FIOEU7QUFJOUUsbUJBQU8sY0FBUCxDQUFzQixPQUF0QixDQUE4QixVQUFVLEtBQVYsRUFBaUIsR0FBakIsRUFBc0I7QUFDaEQsb0JBQUksYUFBYSxPQUFPLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FBd0IsR0FBeEIsQ0FBYixDQUQ0QztBQUVoRCx1QkFBTyxRQUFQLENBQWdCLFlBQWhCLENBQTZCLFVBQTdCLEVBRmdEO2FBQXRCLENBQTlCLENBSjhFO0FBUTlFLG1CQUFPLGNBQVAsR0FBd0IsSUFBSSxHQUFKLEVBQXhCLENBUjhFOztBQVU5RSw0QkFBTSxRQUFOLENBQWUsT0FBZixDQUF1QixRQUF2QixFQUFpQyxVQUFVLEtBQVYsRUFBaUIsS0FBakIsRUFBd0I7QUFDckQsb0JBQUksWUFBWSxFQUFaLENBRGlEO0FBRXJELG9CQUFJLGNBQWMsT0FBTyxjQUFQLENBQXNCLEdBQXRCLENBQTBCLEtBQTFCLENBQWQsQ0FGaUQ7QUFHckQsb0JBQUksa0JBQWtCLEVBQWxCLENBSGlEO0FBSXJELG9CQUFJLE9BQVEsTUFBTSxJQUFOLEtBQWdCLFFBQXhCLEVBQWtDOztBQUNsQyx3QkFBSSxDQUFDLFdBQUQsRUFBYztBQUNkLDRCQUFJLGNBQWMscUJBQXFCLGtCQUFyQiw4QkFBZCxDQURVO0FBRWQsc0NBQWMsT0FBTyxRQUFQLENBQWdCLGFBQWhCLENBQThCLEVBQTlCLEVBQWtDLFdBQWxDLENBQWQsQ0FGYztxQkFBbEI7aUJBREosTUFLTzs7QUFDSCx3QkFBRyxDQUFDLE1BQU0sUUFBTixJQUFrQixDQUFDLE1BQU0sS0FBTixDQUFZLFFBQVosRUFBcUI7QUFDeEMsNEJBQUksY0FBYyxpQkFBaUIsYUFBakIsQ0FBK0IsTUFBTSxJQUFOLENBQTdDLENBRG9DO0FBRXhDLDRCQUFJLENBQUMsV0FBRCxJQUFnQixXQUFoQixFQUE2QjtBQUM3QiwwQ0FBYyxPQUFPLFFBQVAsQ0FBZ0IsYUFBaEIsQ0FBOEIsRUFBOUIsRUFBa0MsV0FBbEMsQ0FBZCxDQUQ2Qjt5QkFBakM7cUJBRkosTUFLSztBQUNELHNDQUFjLE1BQU0sUUFBTixHQUFlLE1BQU0sUUFBTixHQUFlLE1BQU0sS0FBTixDQUFZLFFBQVosQ0FEM0M7QUFFRCwrQkFBTyxRQUFQLENBQWdCLFNBQWhCLENBQTBCLEVBQTFCLEVBQThCLFdBQTlCLEVBRkM7cUJBTEw7aUJBTko7bUNBaUJtQyxNQUFNLEtBQU4sQ0FyQmtCO29CQXFCaEQsbUNBckJnRDtvQkFxQnJDLDJCQXJCcUM7O29CQXFCM0IsdUVBckIyQjs7QUFzQnJELG9CQUFHLE1BQU0sS0FBTixDQUFZLE1BQVosSUFBc0IsWUFBWSxNQUFaLEVBQW1CLFlBQVksTUFBWixDQUFtQixLQUFuQixHQUEyQixNQUFNLEtBQU4sQ0FBWSxNQUFaLENBQXZFO0FBQ0Esb0JBQUksS0FBSixFQUFXLFlBQVksS0FBWixDQUFrQixVQUFsQixDQUE2QixLQUE3QixHQUFxQyxLQUFyQyxDQUFYO0FBQ0Esb0JBQUksU0FBSixFQUFlLFlBQVksR0FBWixDQUFnQixTQUFoQixDQUEwQixLQUExQixHQUFrQyxTQUFsQyxDQUFmO0FBQ0Esb0JBQUksU0FBUyxZQUFZLEtBQVosRUFBbUIsWUFBWSxLQUFaLENBQWtCLEtBQWxCLENBQXdCLEtBQXhCLEVBQWhDO0FBQ0EsdUJBQU8sY0FBUCxDQUFzQixHQUF0QixDQUEwQixLQUExQixFQUFpQyxXQUFqQyxFQTFCcUQ7QUEyQnJELHVCQUFPLGNBQVAsQ0FBc0IsR0FBdEIsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBdkMsRUEzQnFEO2FBQXhCLENBQWpDLENBVjhFOztBQXdDOUUsZ0JBQUksT0FBTyxVQUFQLENBQUosRUFBd0I7QUFDcEIsdUJBQU8sUUFBUCxDQUFnQixhQUFoQixDQUE4QixRQUE5QiwrQkFEb0I7YUFBeEI7QUFHQSxtQkFBTyxRQUFQLENBQWdCLGVBQWhCLEdBM0M4RTs7Ozt1Q0FnRDVELFdBQVUsV0FDaEM7QUFDSSxnQkFBRyxpQkFBaUIsS0FBakIsRUFDRixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsb0JBQTdCLENBQVosQ0FERDs7QUFHQSxnQkFBSSxlQUFlLFVBQVUsUUFBVixDQUFtQixRQUFuQixDQUE0QixVQUE1QixFQUFmLENBSlI7QUFLSSxnQkFBSSxjQUFjLFVBQVUsUUFBVixDQUFtQixLQUFuQixDQUx0Qjs7QUFPSSxnQkFBSSxpQkFBaUIsYUFBYSxHQUFiLENBQWlCLFVBQVUsV0FBVixFQUF1QixLQUF2QixFQUE4QjtBQUNoRSxvQkFBSSxRQUFRLFVBQVUsUUFBVixDQUFtQixjQUFuQixDQUFrQyxHQUFsQyxDQUFzQyxXQUF0QyxDQUFSLENBRDREO0FBRWhFLG9CQUFJLGFBQWEsVUFBVSxRQUFWLENBQW1CLFFBQW5CLENBQTRCLE9BQTVCLENBQW9DLFdBQXBDLENBQWIsQ0FGNEQ7O0FBSWhFLG9CQUFHLFNBQUgsRUFDQTtBQUNLLHdCQUFHLFVBQVUsT0FBVixDQUFrQixVQUFsQixLQUFpQyxDQUFDLENBQUQsRUFDcEM7QUFDRywrQkFBTyxJQUFQO0FBREgscUJBREE7aUJBRkw7QUFPQSxvQkFBSSxRQUFRLEVBQVIsQ0FYNEQ7O0FBYWhFLHNCQUFNLFVBQU4sSUFBb0IsV0FBcEIsQ0FiZ0U7QUFjaEUsb0JBQUksS0FBSixFQUNBO0FBQ0kscUNBQWlCLFNBQWpCLENBQTJCLEtBQTNCLEVBQWtDLE1BQU0sS0FBTixDQUFsQyxDQURKO2lCQURBOztBQUtBLG9CQUFHLGVBQWUsWUFBWSxhQUFaLEVBQWYsRUFDSDtBQUNJLHdCQUFJLE1BQU0sWUFBWSxnQkFBWixDQUE2QixTQUE3QixFQUF3QyxXQUF4QyxFQUFvRCxVQUFwRCxFQUErRCxLQUEvRCxDQUFOLENBRFI7QUFFSSxxQ0FBaUIsU0FBakIsQ0FBMkIsS0FBM0IsRUFBa0MsR0FBbEMsRUFGSjtBQUdJLHdCQUFJLE1BQU0sWUFBWSxPQUFaLENBSGQ7QUFJSSx3QkFBRyxPQUFPLElBQUksTUFBSixHQUFhLENBQWIsRUFDVjtBQUNJLDRCQUFHLFFBQVEsT0FBUixFQUFpQixNQUFNLEtBQU4sSUFBZSxLQUFmLENBQXBCLEtBQ0ssSUFBRyxRQUFRLFlBQVIsRUFBc0IsTUFBTSxLQUFOLElBQWUsVUFBZixDQUF6QixLQUNBLElBQUcsWUFBWSxHQUFaLENBQUgsRUFDTDtBQUNJLGdDQUFHLFlBQVksR0FBWixhQUE0QixRQUFRLElBQVIsQ0FBYSxnQkFBYixFQUE4QixNQUFNLEtBQU4sSUFBZSxZQUFZLEdBQVosRUFBaUIsS0FBakIsQ0FBNUUsS0FDSyxNQUFNLEtBQU4sSUFBZSxZQUFZLEdBQVosQ0FBZixDQURMO3lCQUZDO3FCQUpULE1BV0E7QUFDSSw4QkFBTSxLQUFOLElBQWUsS0FBZixDQURKO3FCQVhBO2lCQUxKLE1Bc0JBO0FBQ1EsMEJBQU0sS0FBTixJQUFlLEtBQWYsQ0FEUjtpQkF0QkE7O0FBMEJBLG9CQUFHLFlBQVksS0FBWixFQUNIO0FBQ0ksd0JBQUksVUFBVSxRQUFRLEtBQVIsR0FBZ0IsV0FBaEIsQ0FEbEI7QUFFSSxxQ0FBaUIsU0FBakIsQ0FBMkIsS0FBM0IsRUFBa0MsWUFBWSxLQUFaLENBQWtCLFFBQWxCLENBQTJCLE9BQTNCLEVBQW1DLFdBQW5DLEVBQStDLFVBQS9DLEVBQTJELEtBQTNELENBQWxDLEVBRko7aUJBREE7QUFLQSxvQkFBSSxlQUFlLFFBQWYsRUFBeUI7QUFDekIsd0JBQUksYUFBYSxPQUFPLFVBQVUsUUFBVixDQUFtQixRQUFuQixDQUE0QixLQUE1QixDQUFwQixDQURxQjtBQUV6Qix3QkFBSSxDQUFDLE1BQU0sVUFBTixDQUFELEVBQW9CO0FBQ3BCLDhCQUFNLE9BQU4sSUFBaUI7QUFDYixrQ0FBTSxHQUFOO0FBQ0EsbUNBQU8sVUFBUDt5QkFGSixDQURvQjtxQkFBeEI7aUJBRko7O0FBVUEsb0JBQUksS0FBSixFQUNBO0FBQ0ksd0JBQUksT0FBUSxNQUFNLElBQU4sS0FBZ0IsUUFBeEIsRUFDSjtBQUNJLDRCQUFJLGNBQWMsWUFBWSxpQkFBWixDQUE4QixLQUE5QixDQUFvQyxDQUFwQyxFQUF1QyxLQUF2QyxDQUR0QjtBQUVJLDRCQUFJLFlBQVksaUJBQWlCLHFCQUFqQixDQUF1QyxXQUF2QyxDQUFaLENBRlI7QUFHQyw0QkFBRyxDQUFDLFNBQUQsRUFBWSxRQUFRLEtBQVIsQ0FBYyw2QkFBZCxFQUE0QyxXQUE1QyxFQUFmO0FBQ0csK0JBQU87QUFBQyxxQ0FBRDs0QkFBZSxLQUFmOzs0QkFBeUIsS0FBekI7O3lCQUFQLENBSko7cUJBREEsTUFRQTtBQUNJLDRCQUFJLFVBQVUsUUFBVixDQUFtQixjQUFuQixDQUFrQyxHQUFsQyxDQUFzQyxLQUF0QyxDQUFKLEVBQ0ksVUFBVSxRQUFWLENBQW1CLGNBQW5CLENBQWtDLE1BQWxDLENBQXlDLEtBQXpDLEVBREo7QUFFQSw0QkFBSSxjQUFjLGdCQUFNLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEIsS0FBMUIsQ0FBZCxDQUhSO0FBSUksa0NBQVUsUUFBVixDQUFtQixjQUFuQixDQUFrQyxHQUFsQyxDQUFzQyxXQUF0QyxFQUFtRCxXQUFuRCxFQUpKO0FBS0ksa0NBQVUsUUFBVixDQUFtQixjQUFuQixDQUFrQyxHQUFsQyxDQUFzQyxXQUF0QyxFQUFtRCxXQUFuRCxFQUxKO0FBTUksK0JBQU8sV0FBUCxDQU5KO3FCQVJBO2lCQUZKLE1Bb0JBOzs7QUFHSSx3QkFBSSxjQUFjLFlBQVksaUJBQVosQ0FBOEIsS0FBOUIsQ0FBb0MsQ0FBcEMsRUFBdUMsS0FBdkMsQ0FIdEI7QUFJSSx3QkFBSSxZQUFZLGlCQUFpQixxQkFBakIsQ0FBdUMsV0FBdkMsQ0FBWixDQUpSO0FBS0Msd0JBQUcsQ0FBQyxTQUFELEVBQVksUUFBUSxLQUFSLENBQWMsNkJBQWQsRUFBNEMsV0FBNUMsRUFBZjtBQUNHLHdCQUFJLFdBQVcsOEJBQUUsU0FBRixFQUFnQixLQUFoQixDQUFYLENBTlI7QUFPSSwyQkFBTyxRQUFQLENBUEo7aUJBcEJBO2FBNURrQyxDQTBGcEMsSUExRm9DLENBMEYvQixJQTFGK0IsQ0FBakIsQ0FBakIsQ0FQUjs7QUFtR0ksZ0JBQUcsYUFBYSxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsRUFBcUI7QUFDakMsb0JBQUksbUJBQW1CLGVBQWUsTUFBZixDQUFzQixVQUFTLEtBQVQsRUFBZSxLQUFmLEVBQXFCO0FBQzlELHdCQUFHLFVBQVUsSUFBVixFQUNDLE9BQU8sS0FBUCxDQURKLEtBR0ksT0FBTyxJQUFQLENBSEo7aUJBRHlDLEVBSzNDLElBTHFCLENBQW5CLENBRDZCO0FBT2pDLHVCQUFPLGdCQUFQLENBUGlDO2FBQXJDLE1BU0ksT0FBTyxjQUFQLENBVEo7Ozs7a0NBWWEsTUFBTSxLQUFLLGFBQWE7QUFDckMsaUJBQUssSUFBSSxJQUFKLElBQVksR0FBakIsRUFBc0I7QUFDbEIscUJBQUssSUFBTCxJQUFhLElBQUksSUFBSixDQUFiLENBRGtCO2FBQXRCO0FBR0EsbUJBQU8sSUFBUCxDQUpxQzs7OztXQXBnQnZDOzs7QUE4Z0JOLGlCQUFpQixZQUFqQixHQUFnQyxFQUFoQztBQUNBLGlCQUFpQixhQUFqQixHQUFpQyxJQUFJLEdBQUosRUFBakM7QUFDQSxpQkFBaUIsS0FBakIsR0FBeUIsS0FBekI7O2tCQUVlIiwiZmlsZSI6IkNvbXBvbmVudE1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVzIGZyb20gXCIuL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXJDb25maWcgZnJvbSBcIi4vY29uZmlncy9IVE1MV3JhcHBlckNvbmZpZ1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcbmltcG9ydCBDU1MgZnJvbSBcIi4vY29uZmlncy9DU1NcIjtcbmltcG9ydCBQcm9wcyBmcm9tIFwiLi9jb25maWdzL1Byb3BzXCI7XG5cbmNsYXNzIENvbXBvbmVudE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc3RhdGljIHJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKSB7XG4gICAgICAgIGlmICghQ29tcG9uZW50TWFuYWdlci50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdKVxuICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdID0ganNDbGFzcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9vbEltcGxlbWVudGF0aW9uKGFzQ2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV07XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZ2lzdGVyVG9vbENvbmZpZyh0b29sQ2xhc3MsIGNvbmZpZykge1xuICAgICAgICBpZiAoIUNvbXBvbmVudE1hbmFnZXIudG9vbENvbmZpZ01hcC5oYXModG9vbENsYXNzKSlcbiAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIudG9vbENvbmZpZ01hcC5zZXQodG9vbENsYXNzLCBjb25maWcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb29sQ29uZmlnKHRvb2xDbGFzcykge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci50b29sQ29uZmlnTWFwLmdldCh0b29sQ2xhc3MpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGluaXRpYWxpemUocmVhY3RDb21wLHR5cGUpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiIC0tIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnNldHRpbmdzKSB7XG4gICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MgPSByZWFjdENvbXAucHJvcHMuc2V0dGluZ3M7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmFyIG5ld0NvbmZpZyA9IENvbXBvbmVudE1hbmFnZXIuZ2V0VG9vbENvbmZpZyhyZWFjdENvbXAuY29uc3RydWN0b3IpXG4gICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MgPSBuZXdDb25maWc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5zdHlsZSkgeyAvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmNsYXNzTmFtZSkgeyAvLyB1c2VyIGNsYXNzTmFtZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSByZWFjdENvbXAucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuZW5hYmxlKSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLmVuYWJsZSkgcmVhY3RDb21wLnNldHRpbmdzLmVuYWJsZS5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy5lbmFibGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy51c2VDU1MpIHtcbiAgICAgICAgICAgIGlmIChyZWFjdENvbXAuc2V0dGluZ3MudXNlQ1NTKSByZWFjdENvbXAuc2V0dGluZ3MudXNlQ1NTLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLnVzZUNTUztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGlmIChyZWFjdENvbXAuc2V0dGluZ3MudmlzaWJsZSkgcmVhY3RDb21wLnNldHRpbmdzLnZpc2libGUuc3RhdGUgPSByZWFjdENvbXAucHJvcHMudmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmRldmljZU1vZGUpIHtcbiAgICAgICAgICAgIGlmIChyZWFjdENvbXAuc2V0dGluZ3MuZGV2aWNlTW9kZSkgcmVhY3RDb21wLnNldHRpbmdzLmRldmljZU1vZGUuc3RhdGUgPSByZWFjdENvbXAucHJvcHMuZGV2aWNlTW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmljb25Nb2RlKSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLmljb25Nb2RlKSByZWFjdENvbXAuc2V0dGluZ3MuaWNvbk1vZGUuc3RhdGUgPSByZWFjdENvbXAucHJvcHMuaWNvbk1vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5yZXZlcnNlTGF5b3V0KSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLnJldmVyc2VMYXlvdXQpIHJlYWN0Q29tcC5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlID0gcmVhY3RDb21wLnByb3BzLnJldmVyc2VMYXlvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJjb250YWluZXJcIiAgJiYgcmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgIT0gXCJIVE1MV3JhcHBlclwiKSB7XG4gICAgICAgICAgICB2YXIgV3JhcHBlckNvbmZpZ0NsYXNzID0gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdID8gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdIDogbnVsbDtcbiAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHJlYWN0Q29tcC5wcm9wcy5jaGlsZHJlbiwgcmVhY3RDb21wLnNldHRpbmdzLCBXcmFwcGVyQ29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgcmVhY3RDb21wLnJlbmRlckNoaWxkcmVuID0gcmVhY3RDb21wLnJlbmRlckNoaWxkcmVuLmJpbmQocmVhY3RDb21wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApO1xuXG5cblxuICAgIH1cblxuICAgIC8vdG9kbyBvcmdhbml6ZSBiZXR0ZXJcbiAgICBzdGF0aWMgZmxpcEljb25zKGNvbmZpZyxpY29uU3RhdGVOYW1lcyl7XG4gICAgICAgIGlmKCFjb25maWcucmV2ZXJzZUxheW91dCl7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJubyByZXZlcnNlTGF5b3V0IFNlc3Npb24gT2JqZWN0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBpY29uU3RhdGVOYW1lcy5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgdmFyIGljb25PYmogPSBjb25maWdbaWNvblN0YXRlTmFtZXNbaV1dLnN0YXRlO1xuXG4gICAgICAgICAgICBpZihpY29uT2JqKXtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgaWNvbk9iaiAhPSBcInN0cmluZ1wiKXsgLy9saW5rYWJsZVZyYWlibGUgT2JqXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoaWNvbk9iaik7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpZy5yZXZlcnNlTGF5b3V0LnN0YXRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMubWFwKGZ1bmN0aW9uKGtleSxpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk9ialtrZXldLmluZGV4T2YoXCIvXCIpID09IC0xKXsvL2ZvbnRhd2Vzb21lIGljb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGljb25PYmpba2V5XS5pbmRleE9mKFwiIGZhLWZsaXAtaG9yaXpvbnRhbFwiKSA9PSAtMSl7Ly9ub3QgZmxpcHBlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbk9ialtrZXldID0gaWNvbk9ialtrZXldICsgXCIgZmEtZmxpcC1ob3Jpem9udGFsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMubWFwKGZ1bmN0aW9uKGtleSxpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk9ialtrZXldLmluZGV4T2YoXCIgZmEtZmxpcC1ob3Jpem9udGFsXCIpICE9IC0xKXsvLyBmbGlwcGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGljb25PYmpba2V5XS5pbmRleE9mKFwiIGZhLWZsaXAtaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbk9ialtrZXldID0gaWNvbk9ialtrZXldLnN1YnN0cmluZygwLGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2V7IC8vTGlua2FibGVTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlnLnJldmVyc2VMYXlvdXQuc3RhdGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk9iai5pbmRleE9mKFwiL1wiKSA9PSAtMSl7Ly9mb250YXdlc29tZSBpY29uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGljb25PYmouaW5kZXhPZihcIiBmYS1mbGlwLWhvcml6b250YWxcIikgPT0gLTEpey8vbm90IGZsaXBwZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbk9iaiA9IGljb25PYmogKyBcIiBmYS1mbGlwLWhvcml6b250YWxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk9iai5pbmRleE9mKFwiIGZhLWZsaXAtaG9yaXpvbnRhbFwiKSAhPSAtMSl7Ly8gZmxpcHBlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGljb25PYmouaW5kZXhPZihcIiBmYS1mbGlwLWhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbk9iaiA9IGljb25PYmouc3Vic3RyaW5nKDAsaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25maWdbaWNvblN0YXRlTmFtZXNbaV1dLnN0YXRlID0gaWNvbk9iajtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIHN0YXRpYyBjcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXMoY29uZmlnLHR5cGUpe1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKGNvbmZpZy5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgLS0gY29uc3RydWN0b3JcIik7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbmZpZywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk1vZGVTdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk1vZGVOYW1lXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgQ1NTKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTW9kZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRldmljZU1vZGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwibGFyZ2VcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXZlcnNlTGF5b3V0XCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicHJvcHNcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICBuZXcgUHJvcHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZih0eXBlID09PSBcImNvbnRhaW5lclwiKXtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbmZpZywge1xuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjp7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiYWRkR2FwQXRcIjp7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZU51bWJlcigpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25maWcuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc3RhdGljIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocmVhY3RDb21wLCBuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiIC0tIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgLS0tXCIpO1xuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBwcm9wcyBTZXR0aW5ncyBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5zZXR0aW5ncykge1xuICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBTZXR0aW5nc1wiKTtcbiAgICAgICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyhyZWFjdENvbXApO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3MocmVhY3RDb21wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpIHsgLy8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIHN0eWxlIGNoYW5nZWQgZnJvbSBcIiArIHJlYWN0Q29tcC5wcm9wcy5zdHlsZSArIFwiIHRvIFwiICsgbmV4dFByb3BzLnN0eWxlKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHN0eWxlXCIpO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuY2xhc3NOYW1lICE9PSBuZXh0UHJvcHMuY2xhc3NOYW1lKSB7IC8vIHVzZXIgY2xhc3NOYW1lIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgY2xhc3NOYW1lIGNoYW5nZWQgZnJvbSBcIiArIHJlYWN0Q29tcC5wcm9wcy5jbGFzc05hbWUgKyBcIiB0byBcIiArIG5leHRQcm9wcy5jbGFzc05hbWUpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIGNsYXNzTmFtZVwiKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IG5leHRQcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5lbmFibGUgIT09IG5leHRQcm9wcy5lbmFibGUpIHtcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBwcm9wcyBlbmFibGUgY2hhbmdlZCAgZnJvbSBcIiArIHJlYWN0Q29tcC5wcm9wcy5lbmFibGUgKyBcIiB0byBcIiArIG5leHRQcm9wcy5lbmFibGUpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5lbmFibGUgIT09IHVuZGVmaW5lZCAmJiByZWFjdENvbXAuc2V0dGluZ3MuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIGVuYWJsZVwiKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuZW5hYmxlLnN0YXRlID0gbmV4dFByb3BzLmVuYWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnZpc2libGUgIT09IG5leHRQcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgdmlzaWJsZSBjaGFuZ2VkIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMudmlzaWJsZSArIFwiIHRvIFwiICsgbmV4dFByb3BzLnZpc2libGUpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy52aXNpYmxlICE9PSB1bmRlZmluZWQgJiYgcmVhY3RDb21wLnNldHRpbmdzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogdmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MudmlzaWJsZS5zdGF0ZSA9IG5leHRQcm9wcy52aXNpYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuZGV2aWNlTW9kZSAhPT0gbmV4dFByb3BzLmRldmljZU1vZGUpIHtcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBwcm9wcyBkZXZpY2VNb2RlIGNoYW5nZWQgZnJvbSBcIiArIHJlYWN0Q29tcC5wcm9wcy5kZXZpY2VNb2RlICsgXCIgdG8gXCIgKyBuZXh0UHJvcHMuZGV2aWNlTW9kZSk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmRldmljZU1vZGUgIT09IHVuZGVmaW5lZCAmJiByZWFjdENvbXAuc2V0dGluZ3MuZGV2aWNlTW9kZSkge1xuICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBkZXZpY2VNb2RlXCIpO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5kZXZpY2VNb2RlLnN0YXRlID0gbmV4dFByb3BzLmRldmljZU1vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5yZXZlcnNlTGF5b3V0ICE9PSBuZXh0UHJvcHMucmV2ZXJzZUxheW91dCkge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIHJldmVyc2VMYXlvdXQgY2hhbmdlZCBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLnJldmVyc2VMYXlvdXQgKyBcIiB0byBcIiArIG5leHRQcm9wcy5yZXZlcnNlTGF5b3V0KTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMucmV2ZXJzZUxheW91dCAhPT0gdW5kZWZpbmVkICYmIHJlYWN0Q29tcC5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHJldmVyc2VMYXlvdXRcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUgPSBuZXh0UHJvcHMucmV2ZXJzZUxheW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmljb25Nb2RlICE9PSBuZXh0UHJvcHMuaWNvbk1vZGUpIHtcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBwcm9wcyBpY29uTW9kZSBjaGFuZ2VkIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMuaWNvbk1vZGUgKyBcIiB0byBcIiArIG5leHRQcm9wcy5pY29uTW9kZSk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmljb25Nb2RlICE9PSB1bmRlZmluZWQgICYmIHJlYWN0Q29tcC5zZXR0aW5ncy5pY29uTW9kZSl7XG4gICAgICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIGljb25Nb2RlXCIpO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5pY29uTW9kZS5zdGF0ZSA9IG5leHRQcm9wcy5pY29uTW9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcImNoaWxkcmVuXCIpO1xuICAgICAgICAgICAgdmFyIFdyYXBwZXJDb25maWdDbGFzcyA9IHJlYWN0Q29tcFtcIldyYXBwZXJDb25maWdDbGFzc1wiXSA/IHJlYWN0Q29tcFtcIldyYXBwZXJDb25maWdDbGFzc1wiXSA6IG51bGw7XG4gICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihuZXh0UHJvcHMuY2hpbGRyZW4sIHJlYWN0Q29tcC5zZXR0aW5ncywgV3JhcHBlckNvbmZpZ0NsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbXBvbmVudFdpbGxVbm1vdW50KHJlYWN0Q29tcCl7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtIGNvbXBvbmVudFdpbGxVbm1vdW50XCIpO1xuICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3MocmVhY3RDb21wKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHJlYWN0Q29tcCwgbmV4dFByb3BzKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcbiAgICAgICAgLy90by1kbyBzeW5jIGJldHdlZW4gcHJvcHMgY2xhc3MgYW5kIHdlYXZlc3RhdGVcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3MocmVhY3RDb21wKSB7XG4gICAgICAgIHZhciBjb25maWcgPSByZWFjdENvbXAuc2V0dGluZ3M7XG4gICAgICAgIGlmICghV2VhdmUuaXNMaW5rYWJsZShjb25maWcpKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb25maWcsIFwiIGlzIG5vdCBhIExpbmthYmxlT2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbmZpZyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBuID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBvYmogPSBjb25maWdbcG5dO1xuICAgICAgICAgICAgaWYgKFdlYXZlLmlzTGlua2FibGUob2JqKSkge1xuICAgICAgICAgICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKXtcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gb2JqLmNoaWxkTGlzdENhbGxiYWNrcztcbiAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikuYWRkR3JvdXBlZENhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSl7XG4gICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5hZGRHcm91cGVkQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iaiBpbnN0YW5jZW9mIElubGluZVN0eWxlKXtcbiAgICAgICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLmFkZEdyb3VwZWRDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2JqIGluc3RhbmNlb2YgQ1NTKXtcbiAgICAgICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLmFkZEdyb3VwZWRDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3MocmVhY3RDb21wKSB7XG4gICAgICAgIHZhciBjb25maWcgPSByZWFjdENvbXAuc2V0dGluZ3M7XG4gICAgICAgIGlmICghV2VhdmUuaXNMaW5rYWJsZShjb25maWcpKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb25maWcsIFwiIGlzIG5vdCBhIExpbmthYmxlT2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbmZpZyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBuID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBvYmogPSBjb25maWdbcG5dO1xuICAgICAgICAgICAgaWYgKFdlYXZlLmlzTGlua2FibGUob2JqKSkge1xuICAgICAgICAgICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKXtcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gb2JqLmNoaWxkTGlzdENhbGxiYWNrcztcbiAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikucmVtb3ZlQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLnJlbW92ZUNhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmogaW5zdGFuY2VvZiBJbmxpbmVTdHlsZSl7XG4gICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5yZW1vdmVDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2JqIGluc3RhbmNlb2YgQ1NTKXtcbiAgICAgICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLnJlbW92ZUNhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgICAvL0ZvciB0ZXN0aW5nICBhbmQgZGVidWdcbiAgICBzdGF0aWMgaXNTZXNzaW9uQ2hhbmdlZEZvcihjb25maWcpIHtcbiAgICAgICAgaWYgKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgdmFyIGxpbmtibGVPYmplY3QgPSBudWxsO1xuICAgICAgICB2YXIgbW9yZUxpbmthYmxlT2JqZWN0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwbiA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgb2JqID0gY29uZmlnW3BuXTtcbiAgICAgICAgICAgIGlmIChXZWF2ZS5pc0xpbmthYmxlKG9iaikpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG8gPSAob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCkgPyBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzIDogb2JqXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5rYmxlT2JqZWN0KSBsaW5rYmxlT2JqZWN0ID0gbG87XG4gICAgICAgICAgICAgICAgZWxzZSBtb3JlTGlua2FibGVPYmplY3RzLnB1c2gobG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvbXBvbmVudE1hbmFnZXIuZGVidWcpIHtcbiAgICAgICAgICAgIHZhciBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChtb3JlTGlua2FibGVPYmplY3RzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9yZUxpbmthYmxlT2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpc0NoYW5nZWQgPSBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBtb3JlTGlua2FibGVPYmplY3RzW2ldKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtb3JlTGlua2FibGVPYmplY3RzW2ldLCBcIiBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaW5rYmxlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkID0gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbGlua2JsZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaW5rYmxlT2JqZWN0LCBcIiBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlnLCBcIiBubyBzZXNzaW9uIENoaWxkcmVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBsaW5rYmxlT2JqZWN0LCBtb3JlTGlua2FibGVPYmplY3RzKVxuICAgICAgICBlbHNlIGlmIChsaW5rYmxlT2JqZWN0KVxuICAgICAgICAgICAgcmV0dXJuIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyBob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4oY2hpbGRyZW4sIGNvbmZpZywgV3JhcHBlckNvbmZpZ0NsYXNzKSB7XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuXG4gICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gY29uZmlnLmNoaWxkcmVuLmdldE5hbWUoa2V5KTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZW1vdmVPYmplY3QoY29uZmlnTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRDb25maWdNYXAuZ2V0KGNoaWxkKTtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZ05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpIHsgLy8gZm9yIEhUTUwgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IFdyYXBwZXJDb25maWdDbGFzcyA/IFdyYXBwZXJDb25maWdDbGFzcyA6IEhUTUxXcmFwcGVyQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsIGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBmb3IgUmVhY3QgQ29tcG9zaXRlIEVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaWYoIWNoaWxkLnNldHRpbmdzICYmICFjaGlsZC5wcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IENvbXBvbmVudE1hbmFnZXIuZ2V0VG9vbENvbmZpZyhjaGlsZC50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZENvbmZpZyAmJiBjb25maWdDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJywgY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY2hpbGQuc2V0dGluZ3M/Y2hpbGQuc2V0dGluZ3M6Y2hpbGQucHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5zZXRPYmplY3QoJycsIGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB7Y2xhc3NOYW1lLCBzdHlsZSwgLi4ub3RoZXJ9ID0gY2hpbGQucHJvcHM7XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5lbmFibGUgJiYgY2hpbGRDb25maWcuZW5hYmxlKWNoaWxkQ29uZmlnLmVuYWJsZS5zdGF0ZSA9IGNoaWxkLnByb3BzLmVuYWJsZTtcbiAgICAgICAgICAgIGlmIChzdHlsZSkgY2hpbGRDb25maWcuc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IHN0eWxlO1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkgY2hpbGRDb25maWcuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgICAgIGlmIChvdGhlciAmJiBjaGlsZENvbmZpZy5wcm9wcykgY2hpbGRDb25maWcucHJvcHMubWVyZ2Uob3RoZXIpO1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkQ29uZmlnTWFwLnNldChjaGlsZCwgY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZywgY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29uZmlnW1wiYWRkR2FwQXRcIl0pIHtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCdnYXBEaXYnLCBIVE1MV3JhcHBlckNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgcmVuZGVyQ2hpbGRyZW4ocmVhY3RDb21wLGNoaWxkTGlzdClcbiAgICB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpXG5cdCAgICAgICAgY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSByZW5kZXJDaGlsZHJlblwiKTtcblxuICAgICAgICB2YXIgY2hpbGRDb25maWdzID0gcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgdmFyIHByb3BzQ29uZmlnID0gcmVhY3RDb21wLnNldHRpbmdzLnByb3BzO1xuXG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IGNoaWxkQ29uZmlncy5tYXAoZnVuY3Rpb24gKGNoaWxkQ29uZmlnLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gcmVhY3RDb21wLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLmdldChjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcblxuICAgICAgICAgICAgaWYoY2hpbGRMaXN0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBpZihjaGlsZExpc3QuaW5kZXhPZihjb25maWdOYW1lKSA9PSAtMSlcbiAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSB7fVxuXG4gICAgICAgICAgICBwcm9wc1tcInNldHRpbmdzXCJdID0gY2hpbGRDb25maWc7XG4gICAgICAgICAgICBpZiAoY2hpbGQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5tZXJnZUludG8ocHJvcHMsIGNoaWxkLnByb3BzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocHJvcHNDb25maWcgJiYgcHJvcHNDb25maWcuaGFzQ2hpbGRQcm9wcygpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSBwcm9wc0NvbmZpZy5nZXRQcm9wc0ZvckNoaWxkKHJlYWN0Q29tcCwgY2hpbGRDb25maWcsY29uZmlnTmFtZSxpbmRleCk7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5tZXJnZUludG8ocHJvcHMsIG9iaik7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHByb3BzQ29uZmlnLmtleVByb3A7XG4gICAgICAgICAgICAgICAgaWYoa2V5ICYmIGtleS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoa2V5ID09PSBcImluZGV4XCIpIHByb3BzW1wia2V5XCJdID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoa2V5ID09PSBcIm9iamVjdE5hbWVcIikgcHJvcHNbXCJrZXlcIl0gPSBjb25maWdOYW1lO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGNoaWxkQ29uZmlnW2tleV0pXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNoaWxkQ29uZmlnW2tleV0gaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSlwcm9wc1tcImtleVwiXSA9IGNoaWxkQ29uZmlnW2tleV0uc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHByb3BzW1wia2V5XCJdID0gY2hpbGRDb25maWdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGluZGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGlsZENvbmZpZy5wcm9wcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0FyZyA9IGNoaWxkID8gY2hpbGQgOiBjaGlsZENvbmZpZztcbiAgICAgICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLm1lcmdlSW50byhwcm9wcywgY2hpbGRDb25maWcucHJvcHMuZ2V0UHJvcHModGhpc0FyZyxjaGlsZENvbmZpZyxjb25maWdOYW1lLCBpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZ05hbWUgPT09IFwiZ2FwRGl2XCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JkZXJWYWx1ZSA9IFN0cmluZyhyZWFjdENvbXAuc2V0dGluZ3MuYWRkR2FwQXQuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4ob3JkZXJWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzdHlsZVwiXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG9yZGVyVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoaWxkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKSBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgVG9vbENsYXNzID0gQ29tcG9uZW50TWFuYWdlci5nZXRUb29sSW1wbGVtZW50YXRpb24oY29uZmlnQ2xhc3MpO1xuXHQgICAgICAgICAgICAgICAgaWYoIVRvb2xDbGFzcykgY29uc29sZS5lcnJvcihcIlRvb2wgTm90IGZvdW5kIGZvciBjb25maWc6IFwiLGNvbmZpZ0NsYXNzKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRvb2xDbGFzcyB7Li4ucHJvcHN9ID4ge2NoaWxkfSA8L1Rvb2xDbGFzcz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5kZWxldGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkQ2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZywgY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KGNsb25lZENoaWxkLCBjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy90by1kbyBuZWVkIHRvIHJlcGxhY2Ugd2l0aCBmbGV4aW5mbyBmaWxlIG9yIHRpaGVyIG1lYW4sIGNyZWF0ZSBhIHV0aWxpdHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAvL3RoaXMgc29sdXRpb24gd2lsbCBmYWlsIHdoZW4gY29uZmlnIG5vdCBwYXJ0IG9mIHNlc3Npb24gdHJlZVxuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG5cdCAgICAgICAgICAgIGlmKCFUb29sQ2xhc3MpIGNvbnNvbGUuZXJyb3IoXCJUb29sIE5vdCBmb3VuZCBmb3IgY29uZmlnOiBcIixjb25maWdDbGFzcylcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSA8IFRvb2xDbGFzcyB7Li4ucHJvcHN9Lz47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYoY2hpbGRMaXN0ICYmIGNoaWxkTGlzdC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gY2xvbmVkQ2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uKGNoaWxkLGluZGV4KXtcbiAgICAgICAgICAgICAgICBpZihjaGlsZCA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkQ2hpbGRyZW47XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgc3RhdGljIG1lcmdlSW50byhpbnRvLCBvYmosIGlnbm9yZVByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICBpbnRvW2F0dHJdID0gb2JqW2F0dHJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cblxuXG59XG5cbkNvbXBvbmVudE1hbmFnZXIudG9vbFJlZ2lzdHJ5ID0ge307XG5Db21wb25lbnRNYW5hZ2VyLnRvb2xDb25maWdNYXAgPSBuZXcgTWFwKCk7XG5Db21wb25lbnRNYW5hZ2VyLmRlYnVnID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudE1hbmFnZXI7XG4iXX0=