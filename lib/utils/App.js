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
                    if (!child.settings && !child.props.settings) {
                        var configClass = App.getToolConfig(child.type);
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
//# sourceMappingURL=data:application/json;base64,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QSxtQkFBTyxJQUFQLENBSnFDOzs7O1dBelF2Qzs7O0FBaVJOLElBQUksWUFBSixHQUFtQixFQUFuQjtBQUNBLElBQUksYUFBSixHQUFvQixJQUFJLEdBQUosRUFBcEI7QUFDQSxJQUFJLEtBQUosR0FBWSxLQUFaOztrQkFFZSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVzIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXJDb25maWcgZnJvbSBcIi4uL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSwganNDbGFzcykge1xuICAgICAgICBpZiAoIUFwcC50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdKVxuICAgICAgICAgICAgQXBwLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0gPSBqc0NsYXNzO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb29sSW1wbGVtZW50YXRpb24oYXNDbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIEFwcC50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xDb25maWcodG9vbCwgY29uZmlnKSB7XG4gICAgICAgIGlmICghQXBwLnRvb2xDb25maWdNYXAuaGFzKHRvb2wpKVxuICAgICAgICAgICAgQXBwLnRvb2xDb25maWdNYXAuc2V0KHRvb2wsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xDb25maWcodG9vbCkge1xuICAgICAgICByZXR1cm4gQXBwLnRvb2xDb25maWdNYXAuZ2V0KHRvb2wpO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhyZWFjdENvbXAsIG5leHRQcm9wcykge1xuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBBcHAucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIEFwcC5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKSB7IC8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuc3R5bGUpIHJlYWN0Q29tcC5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgdmFyIFdyYXBwZXJDb25maWdDbGFzcyA9IHJlYWN0Q29tcFtcIldyYXBwZXJDb25maWdDbGFzc1wiXSA/IHJlYWN0Q29tcFtcIldyYXBwZXJDb25maWdDbGFzc1wiXSA6IG51bGw7XG4gICAgICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbiwgcmVhY3RDb21wLnNldHRpbmdzLCBXcmFwcGVyQ29uZmlnQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncztcbiAgICAgICAgaWYgKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZiAoV2VhdmUuaXNMaW5rYWJsZShvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG9iai5jaGlsZExpc3RDYWxsYmFja3M7XG4gICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikuYWRkR3JvdXBlZENhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCkge1xuICAgICAgICB2YXIgY29uZmlnID0gcmVhY3RDb21wLnNldHRpbmdzO1xuICAgICAgICBpZiAoIVdlYXZlLmlzTGlua2FibGUoY29uZmlnKSlcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29uZmlnLCBcIiBpcyBub3QgYSBMaW5rYWJsZU9iamVjdFwiKTtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjb25maWcpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwbiA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgb2JqID0gY29uZmlnW3BuXTtcbiAgICAgICAgICAgIGlmIChXZWF2ZS5pc0xpbmthYmxlKG9iaikpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcClcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gb2JqLmNoaWxkTGlzdENhbGxiYWNrcztcbiAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5yZW1vdmVDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgICAvL0ZvciB0ZXN0aW5nICBhbmQgZGVidWdcbiAgICBzdGF0aWMgaXNTZXNzaW9uQ2hhbmdlZEZvcihjb25maWcpIHtcbiAgICAgICAgaWYgKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgdmFyIGxpbmtibGVPYmplY3QgPSBudWxsO1xuICAgICAgICB2YXIgbW9yZUxpbmthYmxlT2JqZWN0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwbiA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgb2JqID0gY29uZmlnW3BuXTtcbiAgICAgICAgICAgIGlmIChXZWF2ZS5pc0xpbmthYmxlKG9iaikpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG8gPSAob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCkgPyBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzIDogb2JqXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5rYmxlT2JqZWN0KSBsaW5rYmxlT2JqZWN0ID0gbG87XG4gICAgICAgICAgICAgICAgZWxzZSBtb3JlTGlua2FibGVPYmplY3RzLnB1c2gobG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFwcC5kZWJ1Zykge1xuICAgICAgICAgICAgdmFyIGlzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb3JlTGlua2FibGVPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQ2hhbmdlZCA9IFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIG1vcmVMaW5rYWJsZU9iamVjdHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vcmVMaW5rYWJsZU9iamVjdHNbaV0sIFwiIGNoYW5nZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpbmtibGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpc0NoYW5nZWQgPSBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBsaW5rYmxlT2JqZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmtibGVPYmplY3QsIFwiIGNoYW5nZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb25maWcsIFwiIG5vIHNlc3Npb24gQ2hpbGRyZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9yZUxpbmthYmxlT2JqZWN0cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QsIG1vcmVMaW5rYWJsZU9iamVjdHMpXG4gICAgICAgIGVsc2UgaWYgKGxpbmtibGVPYmplY3QpXG4gICAgICAgICAgICByZXR1cm4gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbGlua2JsZU9iamVjdCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIGhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihjaGlsZHJlbiwgY29uZmlnLCBXcmFwcGVyQ29uZmlnQ2xhc3MpIHtcbiAgICAgICAgY29uZmlnLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG5cbiAgICAgICAgY29uZmlnLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSBjb25maWcuY2hpbGRyZW4uZ2V0TmFtZShrZXkpO1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlbW92ZU9iamVjdChjb25maWdOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2hpbGROYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZENvbmZpZ01hcC5nZXQoY2hpbGQpO1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29uZmlnTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICBpZiAodHlwZW9mIChjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIikgeyAvLyBmb3IgSFRNTCBFbGVtZW50c1xuICAgICAgICAgICAgICAgIGlmICghY2hpbGRDb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV3JhcHBlckNvbmZpZ0NsYXNzID8gV3JhcHBlckNvbmZpZ0NsYXNzIDogSFRNTFdyYXBwZXJDb25maWdcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJywgY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGZvciBSZWFjdCBDb21wb3NpdGUgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZighY2hpbGQuc2V0dGluZ3MgJiYgIWNoaWxkLnByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gQXBwLmdldFRvb2xDb25maWcoY2hpbGQudHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRDb25maWcgJiYgY29uZmlnQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsIGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNoaWxkLnNldHRpbmdzP2NoaWxkLnNldHRpbmdzOmNoaWxkLnByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuY2hpbGRyZW4uc2V0T2JqZWN0KCcnLCBjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIge2NsYXNzTmFtZSwgc3R5bGUsIC4uLm90aGVyfSA9IGNoaWxkLnByb3BzO1xuICAgICAgICAgICAgaWYoY2hpbGQucHJvcHMuZW5hYmxlICYmIGNoaWxkQ29uZmlnLmVuYWJsZSljaGlsZENvbmZpZy5lbmFibGUuc3RhdGUgPSBjaGlsZC5wcm9wcy5lbmFibGU7XG4gICAgICAgICAgICBpZiAoc3R5bGUpIGNoaWxkQ29uZmlnLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBzdHlsZTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIGNoaWxkQ29uZmlnLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICBpZiAob3RoZXIgJiYgY2hpbGRDb25maWcucHJvcHMpIGNoaWxkQ29uZmlnLnByb3BzLm1lcmdlKG90aGVyKTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcC5zZXQoY2hpbGQsIGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsIGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbmZpZ1tcImFkZEdhcEF0XCJdKSB7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnZ2FwRGl2JywgSFRNTFdyYXBwZXJDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIHJlbmRlckNoaWxkcmVuKHJlYWN0Q29tcCxjaGlsZExpc3QpIHtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIHZhciBwcm9wc0NvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5wcm9wcztcblxuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBjaGlsZENvbmZpZ3MubWFwKGZ1bmN0aW9uIChjaGlsZENvbmZpZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5nZXQoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG5cbiAgICAgICAgICAgIGlmKGNoaWxkTGlzdCl7XG4gICAgICAgICAgICAgICAgIGlmKGNoaWxkTGlzdC5pbmRleE9mKGNvbmZpZ05hbWUpID09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BzID0ge31cblxuICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgLy9pZihjaGlsZC5wcm9wcyAmJiAhY2hpbGQucHJvcHMuc2V0dGluZ3MpXG5cbiAgICAgICAgICAgICAgICBBcHAubWVyZ2VJbnRvKHByb3BzLCBjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcm9wc0NvbmZpZyAmJiBwcm9wc0NvbmZpZy5oYXNDaGlsZFByb3BzKCkpe1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSBwcm9wc0NvbmZpZy5nZXRQcm9wc0ZvckNoaWxkKHJlYWN0Q29tcCwgY2hpbGRDb25maWcsY29uZmlnTmFtZSxpbmRleCk7XG4gICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcywgb2JqKTtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gcHJvcHNDb25maWcua2V5UHJvcDtcbiAgICAgICAgICAgICAgICBpZihrZXkgJiYga2V5Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihrZXkgPT09IFwiaW5kZXhcIikgcHJvcHNbXCJrZXlcIl0gPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihrZXkgPT09IFwib2JqZWN0TmFtZVwiKSBwcm9wc1tcImtleVwiXSA9IGNvbmZpZ05hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoY2hpbGRDb25maWdba2V5XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjaGlsZENvbmZpZ1trZXldIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUpcHJvcHNbXCJrZXlcIl0gPSBjaGlsZENvbmZpZ1trZXldLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBwcm9wc1tcImtleVwiXSA9IGNoaWxkQ29uZmlnW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGluZGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGlsZENvbmZpZy5wcm9wcyl7XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNBcmcgPSBjaGlsZCA/IGNoaWxkIDogY2hpbGRDb25maWc7XG4gICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcywgY2hpbGRDb25maWcucHJvcHMuZ2V0UHJvcHModGhpc0FyZyxjaGlsZENvbmZpZyxjb25maWdOYW1lLCBpbmRleCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBjaGlsZENvbmZpZy5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9IEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24oY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRvb2xDbGFzcyB7Li4ucHJvcHN9ID4ge2NoaWxkfSA8IC9Ub29sQ2xhc3M+O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5kZWxldGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkQ2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZywgY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KGNsb25lZENoaWxkLCBjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb25maWdOYW1lID09PSBcImdhcERpdlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmRlclZhbHVlID0gU3RyaW5nKHJlYWN0Q29tcC5zZXR0aW5ncy5hZGRHYXBBdC5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ob3JkZXJWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wic3R5bGVcIl0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG9yZGVyVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3RvLWRvIG5lZWQgdG8gcmVwbGFjZSB3aXRoIGZsZXhpbmZvIGZpbGUgb3IgdGloZXIgbWVhbiwgY3JlYXRlIGEgdXRpbGl0eSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIC8vdGhpcyBzb2x1dGlvbiB3aWxsIGZhaWwgd2hlbiBjb25maWcgbm90IHBhcnQgb2Ygc2Vzc2lvbiB0cmVlXG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gY2hpbGRDb25maWcuRkxFWEpTX0NMQVNTX0lORk8ubmFtZXNbMF0ucU5hbWU7XG4gICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9IEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24oY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZCA9IDwgVG9vbENsYXNzIHsuLi5wcm9wc30vPjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBpZihjaGlsZExpc3QgJiYgY2hpbGRMaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgdmFyIGZpbHRlcmVkQ2hpbGRyZW4gPSBjbG9uZWRDaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24oY2hpbGQsaW5kZXgpe1xuICAgICAgICAgICAgICAgIGlmKGNoaWxkID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0sdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRDaGlsZHJlbjtcbiAgICAgICAgfWVsc2VcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVyZ2VJbnRvKGludG8sIG9iaiwgaWdub3JlUHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludG87XG4gICAgfVxufVxuXG5BcHAudG9vbFJlZ2lzdHJ5ID0ge307XG5BcHAudG9vbENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbkFwcC5kZWJ1ZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=
