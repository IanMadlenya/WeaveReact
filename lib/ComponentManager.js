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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudE1hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPTTtBQUNGLGFBREUsZ0JBQ0YsR0FBYzs4QkFEWixrQkFDWTtLQUFkOztpQkFERTs7bURBS2dDLGFBQWEsU0FBUztBQUNwRCxnQkFBSSxDQUFDLGlCQUFpQixZQUFqQixDQUE4QixXQUE5QixDQUFELEVBQ0EsaUJBQWlCLFlBQWpCLENBQThCLFdBQTlCLElBQTZDLE9BQTdDLENBREo7Ozs7OENBSXlCLGFBQWE7QUFDdEMsbUJBQU8saUJBQWlCLFlBQWpCLENBQThCLFdBQTlCLENBQVAsQ0FEc0M7Ozs7MkNBSWhCLFdBQVcsUUFBUTtBQUN6QyxnQkFBSSxDQUFDLGlCQUFpQixhQUFqQixDQUErQixHQUEvQixDQUFtQyxTQUFuQyxDQUFELEVBQ0EsaUJBQWlCLGFBQWpCLENBQStCLEdBQS9CLENBQW1DLFNBQW5DLEVBQThDLE1BQTlDLEVBREo7Ozs7c0NBSWlCLFdBQVc7QUFDNUIsbUJBQU8saUJBQWlCLGFBQWpCLENBQStCLEdBQS9CLENBQW1DLFNBQW5DLENBQVAsQ0FENEI7Ozs7bUNBS2QsV0FBVSxNQUFNO0FBQzlCLGdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsaUJBQTdCLENBQVosQ0FBMUI7QUFDQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsRUFBMEI7QUFDMUIsMEJBQVUsUUFBVixHQUFxQixVQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsQ0FESzthQUE5QixNQUVLO0FBQ0Qsb0JBQUksWUFBWSxpQkFBaUIsYUFBakIsQ0FBK0IsVUFBVSxXQUFWLENBQTNDLENBREg7QUFFRCwwQkFBVSxRQUFWLEdBQXFCLFNBQXJCLENBRkM7YUFGTDtBQU1BLGdCQUFJLFVBQVUsS0FBVixDQUFnQixLQUFoQixFQUF1Qjs7QUFDdkIsMEJBQVUsUUFBVixDQUFtQixLQUFuQixDQUF5QixVQUF6QixDQUFvQyxLQUFwQyxHQUE0QyxVQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FEckI7YUFBM0I7QUFHQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsRUFBMkI7O0FBQzNCLDBCQUFVLFFBQVYsQ0FBbUIsR0FBbkIsQ0FBdUIsU0FBdkIsQ0FBaUMsS0FBakMsR0FBeUMsVUFBVSxLQUFWLENBQWdCLFNBQWhCLENBRGQ7YUFBL0I7QUFHQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0I7QUFDeEIsb0JBQUksVUFBVSxRQUFWLENBQW1CLE1BQW5CLEVBQTJCLFVBQVUsUUFBVixDQUFtQixNQUFuQixDQUEwQixLQUExQixHQUFrQyxVQUFVLEtBQVYsQ0FBZ0IsTUFBaEIsQ0FBakU7YUFESjtBQUdBLGdCQUFJLFVBQVUsS0FBVixDQUFnQixNQUFoQixFQUF3QjtBQUN4QixvQkFBSSxVQUFVLFFBQVYsQ0FBbUIsTUFBbkIsRUFBMkIsVUFBVSxRQUFWLENBQW1CLE1BQW5CLENBQTBCLEtBQTFCLEdBQWtDLFVBQVUsS0FBVixDQUFnQixNQUFoQixDQUFqRTthQURKO0FBR0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLE9BQWhCLEVBQXlCO0FBQ3pCLG9CQUFJLFVBQVUsUUFBVixDQUFtQixPQUFuQixFQUE0QixVQUFVLFFBQVYsQ0FBbUIsT0FBbkIsQ0FBMkIsS0FBM0IsR0FBbUMsVUFBVSxLQUFWLENBQWdCLE9BQWhCLENBQW5FO2FBREo7QUFHQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsRUFBNEI7QUFDNUIsb0JBQUksVUFBVSxRQUFWLENBQW1CLFVBQW5CLEVBQStCLFVBQVUsUUFBVixDQUFtQixVQUFuQixDQUE4QixLQUE5QixHQUFzQyxVQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FBekU7YUFESjtBQUdBLGdCQUFJLFVBQVUsS0FBVixDQUFnQixRQUFoQixFQUEwQjtBQUMxQixvQkFBSSxVQUFVLFFBQVYsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBVSxRQUFWLENBQW1CLFFBQW5CLENBQTRCLEtBQTVCLEdBQW9DLFVBQVUsS0FBVixDQUFnQixRQUFoQixDQUFyRTthQURKO0FBR0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLGFBQWhCLEVBQStCO0FBQy9CLG9CQUFJLFVBQVUsUUFBVixDQUFtQixhQUFuQixFQUFrQyxVQUFVLFFBQVYsQ0FBbUIsYUFBbkIsQ0FBaUMsS0FBakMsR0FBeUMsVUFBVSxLQUFWLENBQWdCLGFBQWhCLENBQS9FO2FBREo7QUFHQSxnQkFBSSxRQUFRLFdBQVIsSUFBd0IsVUFBVSxXQUFWLENBQXNCLElBQXRCLElBQThCLGFBQTlCLEVBQTZDO0FBQ3JFLG9CQUFJLHFCQUFxQixVQUFVLG9CQUFWLElBQWtDLFVBQVUsb0JBQVYsQ0FBbEMsR0FBb0UsSUFBcEUsQ0FENEM7QUFFckUsaUNBQWlCLG9DQUFqQixDQUFzRCxVQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsRUFBMEIsVUFBVSxRQUFWLEVBQW9CLGtCQUFwRyxFQUZxRTtBQUdyRSwwQkFBVSxjQUFWLEdBQTJCLFVBQVUsY0FBVixDQUF5QixJQUF6QixDQUE4QixTQUE5QixDQUEzQixDQUhxRTthQUF6RTs7QUFNQSw2QkFBaUIseUJBQWpCLENBQTJDLFNBQTNDLEVBdEM4Qjs7Ozt1REEyQ0ksUUFBTyxNQUFLO0FBQzlDLGdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxPQUFPLFdBQVAsQ0FBbUIsSUFBbkIsR0FBMEIsaUJBQTFCLENBQVosQ0FBMUI7QUFDQSxtQkFBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUM1Qix5QkFBUTtBQUNKLDJCQUFPLE1BQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QiwyQkFBNUIsQ0FBUDtpQkFESjtBQUdBLGlDQUFnQjtBQUNaLDJCQUFPLE1BQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QiwyQkFBNUIsQ0FBUDtpQkFESjtBQUdBLGdDQUFlO0FBQ1gsMkJBQU8sTUFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixFQUFoQyxDQUE1QixDQUFQO2lCQURKO0FBR0MsdUJBQU07QUFDSCwyQkFBTyxNQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsbUJBQTVCLENBQVA7aUJBREg7QUFHRCwwQkFBUztBQUNMLDJCQUFPLE1BQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsS0FBakMsQ0FBNUIsQ0FBUDtpQkFESjtBQUdBLDBCQUFTO0FBQ0wsMkJBQU8sTUFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUE1QixDQUFQO2lCQURKO0FBR0EsMkJBQVU7QUFDTiwyQkFBTyxNQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLElBQWpDLENBQTVCLENBQVA7aUJBREo7QUFHQSw0QkFBVztBQUNQLDJCQUFPLE1BQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsS0FBakMsQ0FBNUIsQ0FBUDtpQkFESjtBQUdBLDhCQUFhO0FBQ1QsMkJBQU8sTUFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixPQUFoQyxDQUE1QixDQUFQO2lCQURKO0FBR0EsaUNBQWdCO0FBQ1osMkJBQU8sTUFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUE1QixDQUFQO2lCQURKO0FBR0EseUJBQVE7QUFDSiwyQkFBUSxxQkFBUjtpQkFESjthQS9CSixFQUY4Qzs7QUFzQzlDLGdCQUFHLFNBQVMsV0FBVCxFQUFxQjtBQUNwQix1QkFBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUM1QixnQ0FBVztBQUNQLCtCQUFPLE1BQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsRUFBaEMsQ0FBUDtxQkFESjtBQUdBLGdDQUFXO0FBQ1AsK0JBQU8sTUFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixFQUFoQyxDQUFQO3FCQURKO2lCQUpKLEVBRG9COztBQVVwQix1QkFBTyxjQUFQLEdBQXdCLElBQUksR0FBSixFQUF4QixDQVZvQjtBQVdwQix1QkFBTyxjQUFQLEdBQXdCLElBQUksR0FBSixFQUF4QixDQVhvQjthQUF4Qjs7OztrREFpQjZCLFdBQVcsV0FBVztBQUNuRCxnQkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLG1DQUE3QixDQUFaLENBQTFCO0FBQ0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLFFBQWhCLEtBQTZCLFVBQVUsUUFBVixFQUFvQjtBQUNqRCxvQkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLDRCQUE3QixDQUFaLENBQTFCO0FBQ0Esb0JBQUksVUFBVSxRQUFWLEVBQW9CO0FBQ3BCLHdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsY0FBN0IsQ0FBWixDQUExQjtBQUNBLHFDQUFpQiw4QkFBakIsQ0FBZ0QsU0FBaEQsRUFGb0I7QUFHcEIsOEJBQVUsUUFBVixHQUFxQixVQUFVLFFBQVYsQ0FIRDtBQUlwQixxQ0FBaUIseUJBQWpCLENBQTJDLFNBQTNDLEVBSm9CO2lCQUF4QjthQUZKO0FBU0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLEtBQWhCLEtBQTBCLFVBQVUsS0FBVixFQUFpQjs7QUFDM0Msb0JBQUcsaUJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLFVBQVUsV0FBVixDQUFzQixJQUF0QixHQUE2QiwrQkFBN0IsR0FBK0QsVUFBVSxLQUFWLENBQWdCLEtBQWhCLEdBQXdCLE1BQXZGLEdBQWdHLFVBQVUsS0FBVixDQUE1RyxDQUExQjtBQUNBLG9CQUFJLFVBQVUsS0FBVixFQUFpQjtBQUNoQix3QkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLFdBQTdCLENBQVosQ0FBMUI7QUFDRCw4QkFBVSxRQUFWLENBQW1CLEtBQW5CLENBQXlCLFVBQXpCLENBQW9DLEtBQXBDLEdBQTRDLFVBQVUsS0FBVixDQUYzQjtpQkFBckI7YUFGSjtBQU9BLGdCQUFJLFVBQVUsS0FBVixDQUFnQixTQUFoQixLQUE4QixVQUFVLFNBQVYsRUFBcUI7O0FBQ25ELG9CQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsbUNBQTdCLEdBQW1FLFVBQVUsS0FBVixDQUFnQixTQUFoQixHQUE0QixNQUEvRixHQUF3RyxVQUFVLFNBQVYsQ0FBcEgsQ0FBMUI7QUFDQSxvQkFBSSxVQUFVLFNBQVYsRUFBcUI7QUFDcEIsd0JBQUcsaUJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLFVBQVUsV0FBVixDQUFzQixJQUF0QixHQUE2QixlQUE3QixDQUFaLENBQTFCO0FBQ0QsOEJBQVUsUUFBVixDQUFtQixHQUFuQixDQUF1QixTQUF2QixDQUFpQyxLQUFqQyxHQUF5QyxVQUFVLFNBQVYsQ0FGcEI7aUJBQXpCO2FBRko7QUFPQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsTUFBaEIsS0FBMkIsVUFBVSxNQUFWLEVBQWtCO0FBQzdDLG9CQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsaUNBQTdCLEdBQWlFLFVBQVUsS0FBVixDQUFnQixNQUFoQixHQUF5QixNQUExRixHQUFtRyxVQUFVLE1BQVYsQ0FBL0csQ0FBMUI7QUFDQSxvQkFBSSxVQUFVLE1BQVYsS0FBcUIsU0FBckIsSUFBa0MsVUFBVSxRQUFWLENBQW1CLE1BQW5CLEVBQTJCO0FBQzdELHdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsWUFBN0IsQ0FBWixDQUExQjtBQUNBLDhCQUFVLFFBQVYsQ0FBbUIsTUFBbkIsQ0FBMEIsS0FBMUIsR0FBa0MsVUFBVSxNQUFWLENBRjJCO2lCQUFqRTthQUZKO0FBT0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLE9BQWhCLEtBQTRCLFVBQVUsT0FBVixFQUFtQjtBQUMvQyxvQkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLGlDQUE3QixHQUFpRSxVQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsTUFBM0YsR0FBb0csVUFBVSxPQUFWLENBQWhILENBQTFCO0FBQ0Esb0JBQUksVUFBVSxPQUFWLEtBQXNCLFNBQXRCLElBQW1DLFVBQVUsUUFBVixDQUFtQixPQUFuQixFQUE0QjtBQUMvRCx3QkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLGFBQTdCLENBQVosQ0FBMUI7QUFDQSw4QkFBVSxRQUFWLENBQW1CLE9BQW5CLENBQTJCLEtBQTNCLEdBQW1DLFVBQVUsT0FBVixDQUY0QjtpQkFBbkU7YUFGSjtBQU9BLGdCQUFJLFVBQVUsS0FBVixDQUFnQixVQUFoQixLQUErQixVQUFVLFVBQVYsRUFBc0I7QUFDckQsb0JBQUcsaUJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLFVBQVUsV0FBVixDQUFzQixJQUF0QixHQUE2QixvQ0FBN0IsR0FBb0UsVUFBVSxLQUFWLENBQWdCLFVBQWhCLEdBQTZCLE1BQWpHLEdBQTBHLFVBQVUsVUFBVixDQUF0SCxDQUExQjtBQUNBLG9CQUFJLFVBQVUsVUFBVixLQUF5QixTQUF6QixJQUFzQyxVQUFVLFFBQVYsQ0FBbUIsVUFBbkIsRUFBK0I7QUFDckUsd0JBQUcsaUJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLFVBQVUsV0FBVixDQUFzQixJQUF0QixHQUE2QixnQkFBN0IsQ0FBWixDQUExQjtBQUNBLDhCQUFVLFFBQVYsQ0FBbUIsVUFBbkIsQ0FBOEIsS0FBOUIsR0FBc0MsVUFBVSxVQUFWLENBRitCO2lCQUF6RTthQUZKO0FBT0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLGFBQWhCLEtBQWtDLFVBQVUsYUFBVixFQUF5QjtBQUMzRCxvQkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLHVDQUE3QixHQUF1RSxVQUFVLEtBQVYsQ0FBZ0IsYUFBaEIsR0FBZ0MsTUFBdkcsR0FBZ0gsVUFBVSxhQUFWLENBQTVILENBQTFCO0FBQ0Esb0JBQUksVUFBVSxhQUFWLEtBQTRCLFNBQTVCLElBQXlDLFVBQVUsUUFBVixDQUFtQixhQUFuQixFQUFrQztBQUMzRSx3QkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLG1CQUE3QixDQUFaLENBQTFCO0FBQ0EsOEJBQVUsUUFBVixDQUFtQixhQUFuQixDQUFpQyxLQUFqQyxHQUF5QyxVQUFVLGFBQVYsQ0FGa0M7aUJBQS9FO2FBRko7QUFPQSxnQkFBSSxVQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsS0FBNkIsVUFBVSxRQUFWLEVBQW9CO0FBQ2pELG9CQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsa0NBQTdCLEdBQWtFLFVBQVUsS0FBVixDQUFnQixRQUFoQixHQUEyQixNQUE3RixHQUFzRyxVQUFVLFFBQVYsQ0FBbEgsQ0FBMUI7QUFDQSxvQkFBSSxVQUFVLFFBQVYsS0FBdUIsU0FBdkIsSUFBcUMsVUFBVSxRQUFWLENBQW1CLFFBQW5CLEVBQTRCO0FBQ2pFLHdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsY0FBN0IsQ0FBWixDQUExQjtBQUNBLDhCQUFVLFFBQVYsQ0FBbUIsUUFBbkIsQ0FBNEIsS0FBNUIsR0FBb0MsVUFBVSxRQUFWLENBRjZCO2lCQUFyRTthQUZKO0FBT0EsZ0JBQUksVUFBVSxLQUFWLENBQWdCLFFBQWhCLEtBQTZCLFVBQVUsUUFBVixFQUFvQjtBQUNqRCxvQkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLFVBQTdCLENBQVosQ0FBMUI7QUFDQSxvQkFBSSxxQkFBcUIsVUFBVSxvQkFBVixJQUFrQyxVQUFVLG9CQUFWLENBQWxDLEdBQW9FLElBQXBFLENBRndCO0FBR2pELGlDQUFpQixvQ0FBakIsQ0FBc0QsVUFBVSxRQUFWLEVBQW9CLFVBQVUsUUFBVixFQUFvQixrQkFBOUYsRUFIaUQ7YUFBckQ7Ozs7NkNBUXdCLFdBQVU7QUFDbEMsZ0JBQUcsaUJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLFVBQVUsV0FBVixDQUFzQixJQUF0QixHQUE2Qix5QkFBN0IsQ0FBWixDQUExQjtBQUNDLDZCQUFpQiw4QkFBakIsQ0FBZ0QsU0FBaEQsRUFGaUM7Ozs7OENBS1QsV0FBVyxXQUFXO0FBQy9DLGdCQUFHLGlCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxVQUFVLFdBQVYsQ0FBc0IsSUFBdEIsR0FBNkIsMEJBQTdCLENBQVosQ0FBMUI7O0FBRCtDLG1CQUd4QyxLQUFQLENBSCtDOzs7O2tEQU9sQixXQUFXO0FBQ3hDLGdCQUFJLFNBQVMsVUFBVSxRQUFWLENBRDJCO0FBRXhDLGdCQUFJLENBQUMsTUFBTSxVQUFOLENBQWlCLE1BQWpCLENBQUQsRUFDQSxRQUFRLEtBQVIsQ0FBYyxNQUFkLEVBQXNCLDBCQUF0QixFQURKO0FBRUEsZ0JBQUksZ0JBQWdCLE9BQU8sbUJBQVAsQ0FBMkIsTUFBM0IsQ0FBaEIsQ0FKb0M7QUFLeEMsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGNBQWMsTUFBZCxFQUFzQixHQUExQyxFQUErQztBQUMzQyxvQkFBSSxLQUFLLGNBQWMsQ0FBZCxDQUFMLENBRHVDO0FBRTNDLG9CQUFJLE1BQU0sT0FBTyxFQUFQLENBQU4sQ0FGdUM7QUFHM0Msb0JBQUksTUFBTSxVQUFOLENBQWlCLEdBQWpCLENBQUosRUFBMkI7QUFDdkIsd0JBQUksZUFBZSxRQUFRLElBQVIsQ0FBYSxlQUFiLEVBQTZCO0FBQzVDLDhCQUFNLElBQUksa0JBQUosQ0FEc0M7QUFFNUMsOEJBQU0sWUFBTixDQUFtQixHQUFuQixFQUF3QixrQkFBeEIsQ0FBMkMsU0FBM0MsRUFBc0QsVUFBVSxXQUFWLENBQXRELENBRjRDO3FCQUFoRCxNQUdNLElBQUcsZUFBZSxRQUFRLElBQVIsQ0FBYSxnQkFBYixFQUE4QjtBQUNqRCw4QkFBTSxZQUFOLENBQW1CLEdBQW5CLEVBQXdCLGtCQUF4QixDQUEyQyxTQUEzQyxFQUFzRCxVQUFVLFdBQVYsQ0FBdEQsQ0FEaUQ7cUJBQWhELE1BRUEsSUFBRyxvQ0FBSCxFQUE4QjtBQUMvQiw4QkFBTSxZQUFOLENBQW1CLEdBQW5CLEVBQXdCLGtCQUF4QixDQUEyQyxTQUEzQyxFQUFzRCxVQUFVLFdBQVYsQ0FBdEQsQ0FEK0I7cUJBQTlCLE1BRUEsSUFBRyw0QkFBSCxFQUFzQjtBQUN2Qiw4QkFBTSxZQUFOLENBQW1CLEdBQW5CLEVBQXdCLGtCQUF4QixDQUEyQyxTQUEzQyxFQUFzRCxVQUFVLFdBQVYsQ0FBdEQsQ0FEdUI7cUJBQXRCO2lCQVJWO2FBSEo7Ozs7dURBb0JrQyxXQUFXO0FBQzdDLGdCQUFJLFNBQVMsVUFBVSxRQUFWLENBRGdDO0FBRTdDLGdCQUFJLENBQUMsTUFBTSxVQUFOLENBQWlCLE1BQWpCLENBQUQsRUFDQSxRQUFRLEtBQVIsQ0FBYyxNQUFkLEVBQXNCLDBCQUF0QixFQURKO0FBRUEsZ0JBQUksZ0JBQWdCLE9BQU8sbUJBQVAsQ0FBMkIsTUFBM0IsQ0FBaEIsQ0FKeUM7QUFLN0MsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGNBQWMsTUFBZCxFQUFzQixHQUExQyxFQUErQztBQUMzQyxvQkFBSSxLQUFLLGNBQWMsQ0FBZCxDQUFMLENBRHVDO0FBRTNDLG9CQUFJLE1BQU0sT0FBTyxFQUFQLENBQU4sQ0FGdUM7QUFHM0Msb0JBQUksTUFBTSxVQUFOLENBQWlCLEdBQWpCLENBQUosRUFBMkI7QUFDdkIsd0JBQUksZUFBZSxRQUFRLElBQVIsQ0FBYSxlQUFiLEVBQTZCO0FBQzVDLDhCQUFNLElBQUksa0JBQUosQ0FEc0M7QUFFNUMsOEJBQU0sWUFBTixDQUFtQixHQUFuQixFQUF3QixjQUF4QixDQUF1QyxTQUF2QyxFQUFrRCxVQUFVLFdBQVYsQ0FBbEQsQ0FGNEM7cUJBQWhELE1BR00sSUFBRyxlQUFlLFFBQVEsSUFBUixDQUFhLGdCQUFiLEVBQThCO0FBQ2pELDhCQUFNLFlBQU4sQ0FBbUIsR0FBbkIsRUFBd0IsY0FBeEIsQ0FBdUMsU0FBdkMsRUFBa0QsVUFBVSxXQUFWLENBQWxELENBRGlEO3FCQUFoRCxNQUVBLElBQUcsb0NBQUgsRUFBOEI7QUFDL0IsOEJBQU0sWUFBTixDQUFtQixHQUFuQixFQUF3QixjQUF4QixDQUF1QyxTQUF2QyxFQUFrRCxVQUFVLFdBQVYsQ0FBbEQsQ0FEK0I7cUJBQTlCLE1BRUEsSUFBRyw0QkFBSCxFQUFzQjtBQUN2Qiw4QkFBTSxZQUFOLENBQW1CLEdBQW5CLEVBQXdCLGNBQXhCLENBQXVDLFNBQXZDLEVBQWtELFVBQVUsV0FBVixDQUFsRCxDQUR1QjtxQkFBdEI7aUJBUlY7YUFISjs7Ozs7Ozs0Q0FzQnVCLFFBQVE7QUFDL0IsZ0JBQUksQ0FBQyxNQUFNLFVBQU4sQ0FBaUIsTUFBakIsQ0FBRCxFQUNBLFFBQVEsS0FBUixDQUFjLE1BQWQsRUFBc0IsMEJBQXRCLEVBREo7QUFFQSxnQkFBSSxnQkFBZ0IsT0FBTyxtQkFBUCxDQUEyQixNQUEzQixDQUFoQixDQUgyQjtBQUkvQixnQkFBSSxnQkFBZ0IsSUFBaEIsQ0FKMkI7QUFLL0IsZ0JBQUksc0JBQXNCLEVBQXRCLENBTDJCO0FBTS9CLGlCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxjQUFjLE1BQWQsRUFBc0IsR0FBMUMsRUFBK0M7QUFDM0Msb0JBQUksS0FBSyxjQUFjLENBQWQsQ0FBTCxDQUR1QztBQUUzQyxvQkFBSSxNQUFNLE9BQU8sRUFBUCxDQUFOLENBRnVDO0FBRzNDLG9CQUFJLE1BQU0sVUFBTixDQUFpQixHQUFqQixDQUFKLEVBQTJCO0FBQ3ZCLHdCQUFJLEtBQUssR0FBQyxZQUFlLFFBQVEsSUFBUixDQUFhLGVBQWIsR0FBZ0MsSUFBSSxrQkFBSixHQUF5QixHQUF6RSxDQURjO0FBRXZCLHdCQUFJLENBQUMsYUFBRCxFQUFnQixnQkFBZ0IsRUFBaEIsQ0FBcEIsS0FDSyxvQkFBb0IsSUFBcEIsQ0FBeUIsRUFBekIsRUFETDtpQkFGSjthQUhKOztBQVVBLGdCQUFJLGlCQUFpQixLQUFqQixFQUF3QjtBQUN4QixvQkFBSSxZQUFZLEtBQVosQ0FEb0I7QUFFeEIsb0JBQUksb0JBQW9CLE1BQXBCLEdBQTZCLENBQTdCLEVBQWdDOztBQUVoQyx5QkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksb0JBQW9CLE1BQXBCLEVBQTRCLEdBQWhELEVBQXFEO0FBQ2pELG9DQUFZLE1BQU0sWUFBTixDQUFtQixNQUFuQixFQUEyQixvQkFBb0IsQ0FBcEIsQ0FBM0IsQ0FBWixDQURpRDtBQUVqRCw0QkFBSSxTQUFKLEVBQWU7QUFDWCxvQ0FBUSxHQUFSLENBQVksb0JBQW9CLENBQXBCLENBQVosRUFBb0MsVUFBcEMsRUFEVzt5QkFBZjtxQkFGSjtpQkFGSixNQVFPLElBQUksYUFBSixFQUFtQjtBQUN0QixnQ0FBWSxNQUFNLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkIsYUFBM0IsQ0FBWixDQURzQjtBQUV0Qix3QkFBSSxTQUFKLEVBQWU7QUFDWCxnQ0FBUSxHQUFSLENBQVksYUFBWixFQUEyQixVQUEzQixFQURXO3FCQUFmO2lCQUZHLE1BS0E7QUFDSCw0QkFBUSxHQUFSLENBQVksTUFBWixFQUFvQixzQkFBcEIsRUFERztpQkFMQTthQVZYOztBQW9CQSxnQkFBSSxvQkFBb0IsTUFBcEIsR0FBNkIsQ0FBN0IsRUFDQSxPQUFPLE1BQU0sWUFBTixDQUFtQixNQUFuQixFQUEyQixhQUEzQixFQUEwQyxtQkFBMUMsQ0FBUCxDQURKLEtBRUssSUFBSSxhQUFKLEVBQ0QsT0FBTyxNQUFNLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkIsYUFBM0IsQ0FBUCxDQURDLEtBR0QsT0FBTyxLQUFQLENBSEM7Ozs7NkRBUW1DLFVBQVUsUUFBUSxvQkFBb0I7QUFDOUUsbUJBQU8sUUFBUCxDQUFnQixjQUFoQixHQUQ4RTs7QUFHOUUsbUJBQU8sY0FBUCxHQUF3QixJQUFJLEdBQUosRUFBeEIsQ0FIOEU7QUFJOUUsbUJBQU8sY0FBUCxDQUFzQixPQUF0QixDQUE4QixVQUFVLEtBQVYsRUFBaUIsR0FBakIsRUFBc0I7QUFDaEQsb0JBQUksYUFBYSxPQUFPLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FBd0IsR0FBeEIsQ0FBYixDQUQ0QztBQUVoRCx1QkFBTyxRQUFQLENBQWdCLFlBQWhCLENBQTZCLFVBQTdCLEVBRmdEO2FBQXRCLENBQTlCLENBSjhFO0FBUTlFLG1CQUFPLGNBQVAsR0FBd0IsSUFBSSxHQUFKLEVBQXhCLENBUjhFOztBQVU5RSw0QkFBTSxRQUFOLENBQWUsT0FBZixDQUF1QixRQUF2QixFQUFpQyxVQUFVLEtBQVYsRUFBaUIsS0FBakIsRUFBd0I7QUFDckQsb0JBQUksWUFBWSxFQUFaLENBRGlEO0FBRXJELG9CQUFJLGNBQWMsT0FBTyxjQUFQLENBQXNCLEdBQXRCLENBQTBCLEtBQTFCLENBQWQsQ0FGaUQ7QUFHckQsb0JBQUksa0JBQWtCLEVBQWxCLENBSGlEO0FBSXJELG9CQUFJLE9BQVEsTUFBTSxJQUFOLEtBQWdCLFFBQXhCLEVBQWtDOztBQUNsQyx3QkFBSSxDQUFDLFdBQUQsRUFBYztBQUNkLDRCQUFJLGNBQWMscUJBQXFCLGtCQUFyQiw4QkFBZCxDQURVO0FBRWQsc0NBQWMsT0FBTyxRQUFQLENBQWdCLGFBQWhCLENBQThCLEVBQTlCLEVBQWtDLFdBQWxDLENBQWQsQ0FGYztxQkFBbEI7aUJBREosTUFLTzs7QUFDSCx3QkFBRyxDQUFDLE1BQU0sUUFBTixJQUFrQixDQUFDLE1BQU0sS0FBTixDQUFZLFFBQVosRUFBcUI7QUFDeEMsNEJBQUksY0FBYyxpQkFBaUIsYUFBakIsQ0FBK0IsTUFBTSxJQUFOLENBQTdDLENBRG9DO0FBRXhDLDRCQUFJLENBQUMsV0FBRCxJQUFnQixXQUFoQixFQUE2QjtBQUM3QiwwQ0FBYyxPQUFPLFFBQVAsQ0FBZ0IsYUFBaEIsQ0FBOEIsRUFBOUIsRUFBa0MsV0FBbEMsQ0FBZCxDQUQ2Qjt5QkFBakM7cUJBRkosTUFLSztBQUNELHNDQUFjLE1BQU0sUUFBTixHQUFlLE1BQU0sUUFBTixHQUFlLE1BQU0sS0FBTixDQUFZLFFBQVosQ0FEM0M7QUFFRCwrQkFBTyxRQUFQLENBQWdCLFNBQWhCLENBQTBCLEVBQTFCLEVBQThCLFdBQTlCLEVBRkM7cUJBTEw7aUJBTko7bUNBaUJtQyxNQUFNLEtBQU4sQ0FyQmtCO29CQXFCaEQsbUNBckJnRDtvQkFxQnJDLDJCQXJCcUM7O29CQXFCM0IsdUVBckIyQjs7QUFzQnJELG9CQUFHLE1BQU0sS0FBTixDQUFZLE1BQVosSUFBc0IsWUFBWSxNQUFaLEVBQW1CLFlBQVksTUFBWixDQUFtQixLQUFuQixHQUEyQixNQUFNLEtBQU4sQ0FBWSxNQUFaLENBQXZFO0FBQ0Esb0JBQUksS0FBSixFQUFXLFlBQVksS0FBWixDQUFrQixVQUFsQixDQUE2QixLQUE3QixHQUFxQyxLQUFyQyxDQUFYO0FBQ0Esb0JBQUksU0FBSixFQUFlLFlBQVksR0FBWixDQUFnQixTQUFoQixDQUEwQixLQUExQixHQUFrQyxTQUFsQyxDQUFmO0FBQ0Esb0JBQUksU0FBUyxZQUFZLEtBQVosRUFBbUIsWUFBWSxLQUFaLENBQWtCLEtBQWxCLENBQXdCLEtBQXhCLEVBQWhDO0FBQ0EsdUJBQU8sY0FBUCxDQUFzQixHQUF0QixDQUEwQixLQUExQixFQUFpQyxXQUFqQyxFQTFCcUQ7QUEyQnJELHVCQUFPLGNBQVAsQ0FBc0IsR0FBdEIsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBdkMsRUEzQnFEO2FBQXhCLENBQWpDLENBVjhFOztBQXdDOUUsZ0JBQUksT0FBTyxVQUFQLENBQUosRUFBd0I7QUFDcEIsdUJBQU8sUUFBUCxDQUFnQixhQUFoQixDQUE4QixRQUE5QiwrQkFEb0I7YUFBeEI7QUFHQSxtQkFBTyxRQUFQLENBQWdCLGVBQWhCLEdBM0M4RTs7Ozt1Q0FnRDVELFdBQVUsV0FBVztBQUN2QyxnQkFBRyxpQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksVUFBVSxXQUFWLENBQXNCLElBQXRCLEdBQTZCLG9CQUE3QixDQUFaLENBQTFCO0FBQ0EsZ0JBQUksZUFBZSxVQUFVLFFBQVYsQ0FBbUIsUUFBbkIsQ0FBNEIsVUFBNUIsRUFBZixDQUZtQztBQUd2QyxnQkFBSSxjQUFjLFVBQVUsUUFBVixDQUFtQixLQUFuQixDQUhxQjs7QUFLdkMsZ0JBQUksaUJBQWlCLGFBQWEsR0FBYixDQUFpQixVQUFVLFdBQVYsRUFBdUIsS0FBdkIsRUFBOEI7QUFDaEUsb0JBQUksUUFBUSxVQUFVLFFBQVYsQ0FBbUIsY0FBbkIsQ0FBa0MsR0FBbEMsQ0FBc0MsV0FBdEMsQ0FBUixDQUQ0RDtBQUVoRSxvQkFBSSxhQUFhLFVBQVUsUUFBVixDQUFtQixRQUFuQixDQUE0QixPQUE1QixDQUFvQyxXQUFwQyxDQUFiLENBRjREOztBQUloRSxvQkFBRyxTQUFILEVBQWE7QUFDUix3QkFBRyxVQUFVLE9BQVYsQ0FBa0IsVUFBbEIsS0FBaUMsQ0FBQyxDQUFELEVBQUc7QUFDcEMsK0JBQU8sSUFBUDtBQURvQyxxQkFBdkM7aUJBREw7QUFLQSxvQkFBSSxRQUFRLEVBQVIsQ0FUNEQ7O0FBV2hFLHNCQUFNLFVBQU4sSUFBb0IsV0FBcEIsQ0FYZ0U7QUFZaEUsb0JBQUksS0FBSixFQUFXOzs7QUFHUCxxQ0FBaUIsU0FBakIsQ0FBMkIsS0FBM0IsRUFBa0MsTUFBTSxLQUFOLENBQWxDLENBSE87aUJBQVg7QUFLQSxvQkFBRyxlQUFlLFlBQVksYUFBWixFQUFmLEVBQTJDO0FBQzFDLHdCQUFJLE1BQU0sWUFBWSxnQkFBWixDQUE2QixTQUE3QixFQUF3QyxXQUF4QyxFQUFvRCxVQUFwRCxFQUErRCxLQUEvRCxDQUFOLENBRHNDO0FBRTFDLHFDQUFpQixTQUFqQixDQUEyQixLQUEzQixFQUFrQyxHQUFsQyxFQUYwQztBQUcxQyx3QkFBSSxNQUFNLFlBQVksT0FBWixDQUhnQztBQUkxQyx3QkFBRyxPQUFPLElBQUksTUFBSixHQUFhLENBQWIsRUFBZTtBQUNyQiw0QkFBRyxRQUFRLE9BQVIsRUFBaUIsTUFBTSxLQUFOLElBQWUsS0FBZixDQUFwQixLQUNLLElBQUcsUUFBUSxZQUFSLEVBQXNCLE1BQU0sS0FBTixJQUFlLFVBQWYsQ0FBekIsS0FDQSxJQUFHLFlBQVksR0FBWixDQUFILEVBQW9CO0FBQ3JCLGdDQUFHLFlBQVksR0FBWixhQUE0QixRQUFRLElBQVIsQ0FBYSxnQkFBYixFQUE4QixNQUFNLEtBQU4sSUFBZSxZQUFZLEdBQVosRUFBaUIsS0FBakIsQ0FBNUUsS0FDSyxNQUFNLEtBQU4sSUFBZSxZQUFZLEdBQVosQ0FBZixDQURMO3lCQURDO3FCQUhULE1BT0s7QUFDRCw4QkFBTSxLQUFOLElBQWUsS0FBZixDQURDO3FCQVBMO2lCQUpKLE1BZUs7QUFDRywwQkFBTSxLQUFOLElBQWUsS0FBZixDQURIO2lCQWZMOztBQW1CQSxvQkFBRyxZQUFZLEtBQVosRUFBa0I7QUFDakIsd0JBQUksVUFBVSxRQUFRLEtBQVIsR0FBZ0IsV0FBaEIsQ0FERztBQUVqQixxQ0FBaUIsU0FBakIsQ0FBMkIsS0FBM0IsRUFBa0MsWUFBWSxLQUFaLENBQWtCLFFBQWxCLENBQTJCLE9BQTNCLEVBQW1DLFdBQW5DLEVBQStDLFVBQS9DLEVBQTJELEtBQTNELENBQWxDLEVBRmlCO2lCQUFyQjtBQUlBLG9CQUFJLGVBQWUsUUFBZixFQUF5QjtBQUN6Qix3QkFBSSxhQUFhLE9BQU8sVUFBVSxRQUFWLENBQW1CLFFBQW5CLENBQTRCLEtBQTVCLENBQXBCLENBRHFCO0FBRXpCLHdCQUFJLENBQUMsTUFBTSxVQUFOLENBQUQsRUFBb0I7QUFDcEIsOEJBQU0sT0FBTixJQUFpQjtBQUNiLGtDQUFNLEdBQU47QUFDQSxtQ0FBTyxVQUFQO3lCQUZKLENBRG9CO3FCQUF4QjtpQkFGSjs7QUFVQSxvQkFBSSxLQUFKLEVBQVc7QUFDUCx3QkFBSSxPQUFRLE1BQU0sSUFBTixLQUFnQixRQUF4QixFQUFrQztBQUNsQyw0QkFBSSxjQUFjLFlBQVksaUJBQVosQ0FBOEIsS0FBOUIsQ0FBb0MsQ0FBcEMsRUFBdUMsS0FBdkMsQ0FEZ0I7QUFFbEMsNEJBQUksWUFBWSxpQkFBaUIscUJBQWpCLENBQXVDLFdBQXZDLENBQVosQ0FGOEI7QUFHbEMsK0JBQU87QUFBQyxxQ0FBRDs0QkFBZSxLQUFmOzs0QkFBeUIsS0FBekI7O3lCQUFQLENBSGtDO3FCQUF0QyxNQUlPO0FBQ0gsNEJBQUksVUFBVSxRQUFWLENBQW1CLGNBQW5CLENBQWtDLEdBQWxDLENBQXNDLEtBQXRDLENBQUosRUFDSSxVQUFVLFFBQVYsQ0FBbUIsY0FBbkIsQ0FBa0MsTUFBbEMsQ0FBeUMsS0FBekMsRUFESjtBQUVBLDRCQUFJLGNBQWMsZ0JBQU0sWUFBTixDQUFtQixLQUFuQixFQUEwQixLQUExQixDQUFkLENBSEQ7QUFJSCxrQ0FBVSxRQUFWLENBQW1CLGNBQW5CLENBQWtDLEdBQWxDLENBQXNDLFdBQXRDLEVBQW1ELFdBQW5ELEVBSkc7QUFLSCxrQ0FBVSxRQUFWLENBQW1CLGNBQW5CLENBQWtDLEdBQWxDLENBQXNDLFdBQXRDLEVBQW1ELFdBQW5ELEVBTEc7QUFNSCwrQkFBTyxXQUFQLENBTkc7cUJBSlA7aUJBREosTUFhTzs7O0FBR0gsd0JBQUksY0FBYyxZQUFZLGlCQUFaLENBQThCLEtBQTlCLENBQW9DLENBQXBDLEVBQXVDLEtBQXZDLENBSGY7QUFJSCx3QkFBSSxZQUFZLGlCQUFpQixxQkFBakIsQ0FBdUMsV0FBdkMsQ0FBWixDQUpEO0FBS0gsd0JBQUksV0FBVyw4QkFBRSxTQUFGLEVBQWdCLEtBQWhCLENBQVgsQ0FMRDtBQU1ILDJCQUFPLFFBQVAsQ0FORztpQkFiUDthQWxEa0MsQ0F3RXBDLElBeEVvQyxDQXdFL0IsSUF4RStCLENBQWpCLENBQWpCLENBTG1DOztBQStFdkMsZ0JBQUcsYUFBYSxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsRUFBcUI7QUFDakMsb0JBQUksbUJBQW1CLGVBQWUsTUFBZixDQUFzQixVQUFTLEtBQVQsRUFBZSxLQUFmLEVBQXFCO0FBQzlELHdCQUFHLFVBQVUsSUFBVixFQUNDLE9BQU8sS0FBUCxDQURKLEtBR0ksT0FBTyxJQUFQLENBSEo7aUJBRHlDLEVBSzNDLElBTHFCLENBQW5CLENBRDZCO0FBT2pDLHVCQUFPLGdCQUFQLENBUGlDO2FBQXJDLE1BU0ksT0FBTyxjQUFQLENBVEo7Ozs7a0NBWWEsTUFBTSxLQUFLLGFBQWE7QUFDckMsaUJBQUssSUFBSSxJQUFKLElBQVksR0FBakIsRUFBc0I7QUFDbEIscUJBQUssSUFBTCxJQUFhLElBQUksSUFBSixDQUFiLENBRGtCO2FBQXRCO0FBR0EsbUJBQU8sSUFBUCxDQUpxQzs7OztXQXZidkM7OztBQStiTixpQkFBaUIsWUFBakIsR0FBZ0MsRUFBaEM7QUFDQSxpQkFBaUIsYUFBakIsR0FBaUMsSUFBSSxHQUFKLEVBQWpDO0FBQ0EsaUJBQWlCLEtBQWpCLEdBQXlCLEtBQXpCOztrQkFFZSIsImZpbGUiOiJDb21wb25lbnRNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnIGZyb20gXCIuL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ1NTIGZyb20gXCIuL2NvbmZpZ3MvQ1NTXCI7XG5pbXBvcnQgUHJvcHMgZnJvbSBcIi4vY29uZmlncy9Qcm9wc1wiO1xuXG5jbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSwganNDbGFzcykge1xuICAgICAgICBpZiAoIUNvbXBvbmVudE1hbmFnZXIudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSlcbiAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSA9IGpzQ2xhc3M7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xDb25maWcodG9vbENsYXNzLCBjb25maWcpIHtcbiAgICAgICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnRvb2xDb25maWdNYXAuaGFzKHRvb2xDbGFzcykpXG4gICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLnRvb2xDb25maWdNYXAuc2V0KHRvb2xDbGFzcywgY29uZmlnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9vbENvbmZpZyh0b29sQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIudG9vbENvbmZpZ01hcC5nZXQodG9vbENsYXNzKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0aWFsaXplKHJlYWN0Q29tcCx0eXBlKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5zZXR0aW5ncykge1xuICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gcmVhY3RDb21wLnByb3BzLnNldHRpbmdzO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciBuZXdDb25maWcgPSBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xDb25maWcocmVhY3RDb21wLmNvbnN0cnVjdG9yKVxuICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gbmV3Q29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc3R5bGUpIHsgLy8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSByZWFjdENvbXAucHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5jbGFzc05hbWUpIHsgLy8gdXNlciBjbGFzc05hbWUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmVuYWJsZSkge1xuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUpIHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUuc3RhdGUgPSByZWFjdENvbXAucHJvcHMuZW5hYmxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMudXNlQ1NTKSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLnVzZUNTUykgcmVhY3RDb21wLnNldHRpbmdzLnVzZUNTUy5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy51c2VDU1M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLnZpc2libGUpIHJlYWN0Q29tcC5zZXR0aW5ncy52aXNpYmxlLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLnZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5kZXZpY2VNb2RlKSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLmRldmljZU1vZGUpIHJlYWN0Q29tcC5zZXR0aW5ncy5kZXZpY2VNb2RlLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLmRldmljZU1vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5pY29uTW9kZSkge1xuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5pY29uTW9kZSkgcmVhY3RDb21wLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLmljb25Nb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMucmV2ZXJzZUxheW91dCkge1xuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0KSByZWFjdENvbXAuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy5yZXZlcnNlTGF5b3V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09IFwiY29udGFpbmVyXCIgICYmIHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICE9IFwiSFRNTFdyYXBwZXJcIikge1xuICAgICAgICAgICAgdmFyIFdyYXBwZXJDb25maWdDbGFzcyA9IHJlYWN0Q29tcFtcIldyYXBwZXJDb25maWdDbGFzc1wiXSA/IHJlYWN0Q29tcFtcIldyYXBwZXJDb25maWdDbGFzc1wiXSA6IG51bGw7XG4gICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihyZWFjdENvbXAucHJvcHMuY2hpbGRyZW4sIHJlYWN0Q29tcC5zZXR0aW5ncywgV3JhcHBlckNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgIHJlYWN0Q29tcC5yZW5kZXJDaGlsZHJlbiA9IHJlYWN0Q29tcC5yZW5kZXJDaGlsZHJlbi5iaW5kKHJlYWN0Q29tcCk7XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3MocmVhY3RDb21wKTtcblxuXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyhjb25maWcsdHlwZSl7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coY29uZmlnLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uZmlnLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTW9kZVN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTW9kZU5hbWVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZpc2libGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25Nb2RlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGV2aWNlTW9kZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsYXJnZVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJldmVyc2VMYXlvdXRcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwcm9wc1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogIG5ldyBQcm9wcygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKHR5cGUgPT09IFwiY29udGFpbmVyXCIpe1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uZmlnLCB7XG4gICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOntcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJhZGRHYXBBdFwiOntcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlTnVtYmVyKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhyZWFjdENvbXAsIG5leHRQcm9wcykge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgLS0gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAtLS1cIik7XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncykge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIFNldHRpbmdzIGNoYW5nZWRcIik7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIFNldHRpbmdzXCIpO1xuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIuYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSkgeyAvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgc3R5bGUgY2hhbmdlZCBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLnN0eWxlICsgXCIgdG8gXCIgKyBuZXh0UHJvcHMuc3R5bGUpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5zdHlsZSkge1xuICAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogc3R5bGVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5jbGFzc05hbWUgIT09IG5leHRQcm9wcy5jbGFzc05hbWUpIHsgLy8gdXNlciBjbGFzc05hbWUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBwcm9wcyBjbGFzc05hbWUgY2hhbmdlZCBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLmNsYXNzTmFtZSArIFwiIHRvIFwiICsgbmV4dFByb3BzLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogY2xhc3NOYW1lXCIpO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gbmV4dFByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmVuYWJsZSAhPT0gbmV4dFByb3BzLmVuYWJsZSkge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIGVuYWJsZSBjaGFuZ2VkICBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLmVuYWJsZSArIFwiIHRvIFwiICsgbmV4dFByb3BzLmVuYWJsZSk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmVuYWJsZSAhPT0gdW5kZWZpbmVkICYmIHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogZW5hYmxlXCIpO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUuc3RhdGUgPSBuZXh0UHJvcHMuZW5hYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMudmlzaWJsZSAhPT0gbmV4dFByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBwcm9wcyB2aXNpYmxlIGNoYW5nZWQgZnJvbSBcIiArIHJlYWN0Q29tcC5wcm9wcy52aXNpYmxlICsgXCIgdG8gXCIgKyBuZXh0UHJvcHMudmlzaWJsZSk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCAmJiByZWFjdENvbXAuc2V0dGluZ3MudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiB2aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy52aXNpYmxlLnN0YXRlID0gbmV4dFByb3BzLnZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5kZXZpY2VNb2RlICE9PSBuZXh0UHJvcHMuZGV2aWNlTW9kZSkge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIGRldmljZU1vZGUgY2hhbmdlZCBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLmRldmljZU1vZGUgKyBcIiB0byBcIiArIG5leHRQcm9wcy5kZXZpY2VNb2RlKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuZGV2aWNlTW9kZSAhPT0gdW5kZWZpbmVkICYmIHJlYWN0Q29tcC5zZXR0aW5ncy5kZXZpY2VNb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIGRldmljZU1vZGVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmRldmljZU1vZGUuc3RhdGUgPSBuZXh0UHJvcHMuZGV2aWNlTW9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnJldmVyc2VMYXlvdXQgIT09IG5leHRQcm9wcy5yZXZlcnNlTGF5b3V0KSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgcmV2ZXJzZUxheW91dCBjaGFuZ2VkIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMucmV2ZXJzZUxheW91dCArIFwiIHRvIFwiICsgbmV4dFByb3BzLnJldmVyc2VMYXlvdXQpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5yZXZlcnNlTGF5b3V0ICE9PSB1bmRlZmluZWQgJiYgcmVhY3RDb21wLnNldHRpbmdzLnJldmVyc2VMYXlvdXQpIHtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcmV2ZXJzZUxheW91dFwiKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSA9IG5leHRQcm9wcy5yZXZlcnNlTGF5b3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuaWNvbk1vZGUgIT09IG5leHRQcm9wcy5pY29uTW9kZSkge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIGljb25Nb2RlIGNoYW5nZWQgZnJvbSBcIiArIHJlYWN0Q29tcC5wcm9wcy5pY29uTW9kZSArIFwiIHRvIFwiICsgbmV4dFByb3BzLmljb25Nb2RlKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuaWNvbk1vZGUgIT09IHVuZGVmaW5lZCAgJiYgcmVhY3RDb21wLnNldHRpbmdzLmljb25Nb2RlKXtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogaWNvbk1vZGVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlID0gbmV4dFByb3BzLmljb25Nb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiY2hpbGRyZW5cIik7XG4gICAgICAgICAgICB2YXIgV3JhcHBlckNvbmZpZ0NsYXNzID0gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdID8gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdIDogbnVsbDtcbiAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbiwgcmVhY3RDb21wLnNldHRpbmdzLCBXcmFwcGVyQ29uZmlnQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgY29tcG9uZW50V2lsbFVubW91bnQocmVhY3RDb21wKXtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiIC0gY29tcG9uZW50V2lsbFVubW91bnRcIik7XG4gICAgICAgICBDb21wb25lbnRNYW5hZ2VyLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyhyZWFjdENvbXApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzaG91bGRDb21wb25lbnRVcGRhdGUocmVhY3RDb21wLCBuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiIC0gc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xuICAgICAgICAvL3RvLWRvIHN5bmMgYmV0d2VlbiBwcm9wcyBjbGFzcyBhbmQgd2VhdmVzdGF0ZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncztcbiAgICAgICAgaWYgKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZiAoV2VhdmUuaXNMaW5rYWJsZShvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApe1xuICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzO1xuICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5hZGRHcm91cGVkQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLmFkZEdyb3VwZWRDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2JqIGluc3RhbmNlb2YgSW5saW5lU3R5bGUpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikuYWRkR3JvdXBlZENhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmogaW5zdGFuY2VvZiBDU1Mpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikuYWRkR3JvdXBlZENhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyhyZWFjdENvbXApIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncztcbiAgICAgICAgaWYgKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZiAoV2VhdmUuaXNMaW5rYWJsZShvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApe1xuICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzO1xuICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5yZW1vdmVDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikucmVtb3ZlQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iaiBpbnN0YW5jZW9mIElubGluZVN0eWxlKXtcbiAgICAgICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLnJlbW92ZUNhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmogaW5zdGFuY2VvZiBDU1Mpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikucmVtb3ZlQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cblxuICAgIC8vRm9yIHRlc3RpbmcgIGFuZCBkZWJ1Z1xuICAgIHN0YXRpYyBpc1Nlc3Npb25DaGFuZ2VkRm9yKGNvbmZpZykge1xuICAgICAgICBpZiAoIVdlYXZlLmlzTGlua2FibGUoY29uZmlnKSlcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29uZmlnLCBcIiBpcyBub3QgYSBMaW5rYWJsZU9iamVjdFwiKTtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjb25maWcpO1xuICAgICAgICB2YXIgbGlua2JsZU9iamVjdCA9IG51bGw7XG4gICAgICAgIHZhciBtb3JlTGlua2FibGVPYmplY3RzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBuID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBvYmogPSBjb25maWdbcG5dO1xuICAgICAgICAgICAgaWYgKFdlYXZlLmlzTGlua2FibGUob2JqKSkge1xuICAgICAgICAgICAgICAgIHZhciBsbyA9IChvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKSA/IG9iai5jaGlsZExpc3RDYWxsYmFja3MgOiBvYmpcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmtibGVPYmplY3QpIGxpbmtibGVPYmplY3QgPSBsbztcbiAgICAgICAgICAgICAgICBlbHNlIG1vcmVMaW5rYWJsZU9iamVjdHMucHVzaChsbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zykge1xuICAgICAgICAgICAgdmFyIGlzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb3JlTGlua2FibGVPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQ2hhbmdlZCA9IFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIG1vcmVMaW5rYWJsZU9iamVjdHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vcmVMaW5rYWJsZU9iamVjdHNbaV0sIFwiIGNoYW5nZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpbmtibGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpc0NoYW5nZWQgPSBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBsaW5rYmxlT2JqZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmtibGVPYmplY3QsIFwiIGNoYW5nZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb25maWcsIFwiIG5vIHNlc3Npb24gQ2hpbGRyZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9yZUxpbmthYmxlT2JqZWN0cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QsIG1vcmVMaW5rYWJsZU9iamVjdHMpXG4gICAgICAgIGVsc2UgaWYgKGxpbmtibGVPYmplY3QpXG4gICAgICAgICAgICByZXR1cm4gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbGlua2JsZU9iamVjdCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIGhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihjaGlsZHJlbiwgY29uZmlnLCBXcmFwcGVyQ29uZmlnQ2xhc3MpIHtcbiAgICAgICAgY29uZmlnLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG5cbiAgICAgICAgY29uZmlnLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSBjb25maWcuY2hpbGRyZW4uZ2V0TmFtZShrZXkpO1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlbW92ZU9iamVjdChjb25maWdOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2hpbGROYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZENvbmZpZ01hcC5nZXQoY2hpbGQpO1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29uZmlnTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICBpZiAodHlwZW9mIChjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIikgeyAvLyBmb3IgSFRNTCBFbGVtZW50c1xuICAgICAgICAgICAgICAgIGlmICghY2hpbGRDb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV3JhcHBlckNvbmZpZ0NsYXNzID8gV3JhcHBlckNvbmZpZ0NsYXNzIDogSFRNTFdyYXBwZXJDb25maWdcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJywgY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGZvciBSZWFjdCBDb21wb3NpdGUgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZighY2hpbGQuc2V0dGluZ3MgJiYgIWNoaWxkLnByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gQ29tcG9uZW50TWFuYWdlci5nZXRUb29sQ29uZmlnKGNoaWxkLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkQ29uZmlnICYmIGNvbmZpZ0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLCBjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjaGlsZC5zZXR0aW5ncz9jaGlsZC5zZXR0aW5nczpjaGlsZC5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnNldE9iamVjdCgnJywgY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHtjbGFzc05hbWUsIHN0eWxlLCAuLi5vdGhlcn0gPSBjaGlsZC5wcm9wcztcbiAgICAgICAgICAgIGlmKGNoaWxkLnByb3BzLmVuYWJsZSAmJiBjaGlsZENvbmZpZy5lbmFibGUpY2hpbGRDb25maWcuZW5hYmxlLnN0YXRlID0gY2hpbGQucHJvcHMuZW5hYmxlO1xuICAgICAgICAgICAgaWYgKHN0eWxlKSBjaGlsZENvbmZpZy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gc3R5bGU7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSBjaGlsZENvbmZpZy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gY2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKG90aGVyICYmIGNoaWxkQ29uZmlnLnByb3BzKSBjaGlsZENvbmZpZy5wcm9wcy5tZXJnZShvdGhlcik7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRDb25maWdNYXAuc2V0KGNoaWxkLCBjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLCBjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb25maWdbXCJhZGRHYXBBdFwiXSkge1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJ2dhcERpdicsIEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyByZW5kZXJDaGlsZHJlbihyZWFjdENvbXAsY2hpbGRMaXN0KSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSByZW5kZXJDaGlsZHJlblwiKTtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIHZhciBwcm9wc0NvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5wcm9wcztcblxuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBjaGlsZENvbmZpZ3MubWFwKGZ1bmN0aW9uIChjaGlsZENvbmZpZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5nZXQoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG5cbiAgICAgICAgICAgIGlmKGNoaWxkTGlzdCl7XG4gICAgICAgICAgICAgICAgIGlmKGNoaWxkTGlzdC5pbmRleE9mKGNvbmZpZ05hbWUpID09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BzID0ge31cblxuICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgLy9pZihjaGlsZC5wcm9wcyAmJiAhY2hpbGQucHJvcHMuc2V0dGluZ3MpXG5cbiAgICAgICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLm1lcmdlSW50byhwcm9wcywgY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJvcHNDb25maWcgJiYgcHJvcHNDb25maWcuaGFzQ2hpbGRQcm9wcygpKXtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gcHJvcHNDb25maWcuZ2V0UHJvcHNGb3JDaGlsZChyZWFjdENvbXAsIGNoaWxkQ29uZmlnLGNvbmZpZ05hbWUsaW5kZXgpO1xuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIubWVyZ2VJbnRvKHByb3BzLCBvYmopO1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBwcm9wc0NvbmZpZy5rZXlQcm9wO1xuICAgICAgICAgICAgICAgIGlmKGtleSAmJiBrZXkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleSA9PT0gXCJpbmRleFwiKSBwcm9wc1tcImtleVwiXSA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGtleSA9PT0gXCJvYmplY3ROYW1lXCIpIHByb3BzW1wia2V5XCJdID0gY29uZmlnTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihjaGlsZENvbmZpZ1trZXldKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNoaWxkQ29uZmlnW2tleV0gaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSlwcm9wc1tcImtleVwiXSA9IGNoaWxkQ29uZmlnW2tleV0uc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHByb3BzW1wia2V5XCJdID0gY2hpbGRDb25maWdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wia2V5XCJdID0gaW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNoaWxkQ29uZmlnLnByb3BzKXtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0FyZyA9IGNoaWxkID8gY2hpbGQgOiBjaGlsZENvbmZpZztcbiAgICAgICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLm1lcmdlSW50byhwcm9wcywgY2hpbGRDb25maWcucHJvcHMuZ2V0UHJvcHModGhpc0FyZyxjaGlsZENvbmZpZyxjb25maWdOYW1lLCBpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZ05hbWUgPT09IFwiZ2FwRGl2XCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JkZXJWYWx1ZSA9IFN0cmluZyhyZWFjdENvbXAuc2V0dGluZ3MuYWRkR2FwQXQuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4ob3JkZXJWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzdHlsZVwiXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG9yZGVyVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gY2hpbGRDb25maWcuRkxFWEpTX0NMQVNTX0lORk8ubmFtZXNbMF0ucU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VG9vbENsYXNzIHsuLi5wcm9wc30gPiB7Y2hpbGR9IDwgL1Rvb2xDbGFzcz47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5oYXMoY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmRlbGV0ZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWRDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLCBjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQoY2xvbmVkQ2hpbGQsIGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy90by1kbyBuZWVkIHRvIHJlcGxhY2Ugd2l0aCBmbGV4aW5mbyBmaWxlIG9yIHRpaGVyIG1lYW4sIGNyZWF0ZSBhIHV0aWxpdHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAvL3RoaXMgc29sdXRpb24gd2lsbCBmYWlsIHdoZW4gY29uZmlnIG5vdCBwYXJ0IG9mIHNlc3Npb24gdHJlZVxuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPCBUb29sQ2xhc3Mgey4uLnByb3BzfS8+O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmKGNoaWxkTGlzdCAmJiBjaGlsZExpc3QubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IGNsb25lZENoaWxkcmVuLmZpbHRlcihmdW5jdGlvbihjaGlsZCxpbmRleCl7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZENoaWxkcmVuO1xuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuICAgIH1cblxuICAgIHN0YXRpYyBtZXJnZUludG8oaW50bywgb2JqLCBpZ25vcmVQcm9wcykge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG59XG5cbkNvbXBvbmVudE1hbmFnZXIudG9vbFJlZ2lzdHJ5ID0ge307XG5Db21wb25lbnRNYW5hZ2VyLnRvb2xDb25maWdNYXAgPSBuZXcgTWFwKCk7XG5Db21wb25lbnRNYW5hZ2VyLmRlYnVnID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudE1hbmFnZXI7XG4iXX0=
