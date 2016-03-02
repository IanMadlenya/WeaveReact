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
                App.hookSessionStateForComponentChildren(nextProps.children, reactComp.settings);
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

            if (config["addGapAt"]) {
                config.children.requestObject('gapDiv', _HTMLWrapperConfig2.default);
            }
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
                    //if(child.props && !child.props.settings)

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

                    if (propsManager.style) {
                        props.style = props.style || {};
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
App.debug = true;

exports.default = App;
//# sourceMappingURL=data:application/json;base64,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M0VvQyxDQTJFL0IsSUEzRStCLENBQWpCLENBQWpCLENBSHFDOztBQWdGekMsbUJBQU8sY0FBUCxDQWhGeUM7Ozs7a0NBbUY1QixNQUFNLEtBQUksYUFBYTtBQUNwQyxpQkFBSyxJQUFJLElBQUosSUFBWSxHQUFqQixFQUFzQjtBQUNsQixxQkFBSyxJQUFMLElBQWEsSUFBSSxJQUFKLENBQWIsQ0FEa0I7YUFBdEI7QUFHQSxtQkFBTyxJQUFQLENBSm9DOzs7O1dBMVB0Qzs7O0FBa1FOLElBQUksWUFBSixHQUFtQixFQUFuQjtBQUNBLElBQUksYUFBSixHQUFxQixJQUFJLEdBQUosRUFBckI7QUFDQSxJQUFJLEtBQUosR0FBWSxJQUFaOztrQkFFZSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vU3R5bGVcIjtcbmltcG9ydCBIVE1MV3JhcHBlckNvbmZpZyAgZnJvbSBcIi4uL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbiAgICBcbiAgIFxuXG4gICAgc3RhdGljIHJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKSB7XG4gICAgICAgIGlmICghQXBwLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0pXG4gICAgICAgICAgICBBcHAudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSA9IGpzQ2xhc3M7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gQXBwLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV07XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZ2lzdGVyVG9vbENvbmZpZyAodG9vbCwgY29uZmlnKSB7XG4gICAgICAgIGlmICghQXBwLnRvb2xDb25maWdNYXAuaGFzKHRvb2wpKVxuICAgICAgICAgICAgQXBwLnRvb2xDb25maWdNYXAuc2V0KHRvb2wsY29uZmlnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9vbENvbmZpZyh0b29sKSB7XG4gICAgICAgIHJldHVybiBBcHAudG9vbENvbmZpZ01hcC5nZXQodG9vbCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIHN0YXRpYyBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHJlYWN0Q29tcCxuZXh0UHJvcHMpe1xuICAgICAgICBpZihyZWFjdENvbXAucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIEFwcC5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3MocmVhY3RDb21wKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgQXBwLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3MocmVhY3RDb21wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihyZWFjdENvbXAucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnN0eWxlKXJlYWN0Q29tcC5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHJlYWN0Q29tcC5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHJlYWN0Q29tcC5zZXR0aW5ncyk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApe1xuICAgICAgICB2YXIgY29uZmlnID0gcmVhY3RDb21wLnNldHRpbmdzO1xuICAgICAgICBpZighV2VhdmUuaXNMaW5rYWJsZShjb25maWcpKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb25maWcsIFwiIGlzIG5vdCBhIExpbmthYmxlT2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbmZpZyk7XG4gICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgdmFyIHBuID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBvYmogPSBjb25maWdbcG5dO1xuICAgICAgICAgICAgaWYoV2VhdmUuaXNMaW5rYWJsZShvYmopKXtcbiAgICAgICAgICAgICAgICBpZihvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKVxuICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzO1xuICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLmFkZEdyb3VwZWRDYWxsYmFjayhyZWFjdENvbXAscmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCl7XG4gICAgICAgIHZhciBjb25maWcgPSByZWFjdENvbXAuc2V0dGluZ3M7XG4gICAgICAgIGlmKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZihXZWF2ZS5pc0xpbmthYmxlKG9iaikpe1xuICAgICAgICAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG9iai5jaGlsZExpc3RDYWxsYmFja3M7XG4gICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikucmVtb3ZlQ2FsbGJhY2socmVhY3RDb21wLHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLy9Gb3IgdGVzdGluZyAgYW5kIGRlYnVnXG4gICAgc3RhdGljIGlzU2Vzc2lvbkNoYW5nZWRGb3IoY29uZmlnKXtcbiAgICAgICAgaWYoIVdlYXZlLmlzTGlua2FibGUoY29uZmlnKSlcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29uZmlnLCBcIiBpcyBub3QgYSBMaW5rYWJsZU9iamVjdFwiKTtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjb25maWcpO1xuICAgICAgICB2YXIgbGlua2JsZU9iamVjdCA9IG51bGw7XG4gICAgICAgIHZhciBtb3JlTGlua2FibGVPYmplY3RzID0gW107XG4gICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgdmFyIHBuID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBvYmogPSBjb25maWdbcG5dO1xuICAgICAgICAgICAgaWYoV2VhdmUuaXNMaW5rYWJsZShvYmopKXtcbiAgICAgICAgICAgICAgICB2YXIgbG8gPSAob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCk/IG9iai5jaGlsZExpc3RDYWxsYmFja3MgOiBvYmpcbiAgICAgICAgICAgICAgICBpZighbGlua2JsZU9iamVjdCkgbGlua2JsZU9iamVjdCA9IGxvO1xuICAgICAgICAgICAgICAgIGVsc2UgbW9yZUxpbmthYmxlT2JqZWN0cy5wdXNoKGxvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoQXBwLmRlYnVnKXtcbiAgICAgICAgICAgIHZhciBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaXNDaGFuZ2VkID0gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbW9yZUxpbmthYmxlT2JqZWN0c1tpXSlcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNDaGFuZ2VkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBtb3JlTGlua2FibGVPYmplY3RzW2ldICwgXCIgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYobGlua2JsZU9iamVjdCl7XG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkID0gIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QpO1xuICAgICAgICAgICAgICAgIGlmKGlzQ2hhbmdlZCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBsaW5rYmxlT2JqZWN0ICwgXCIgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggY29uZmlnICwgXCIgbm8gc2Vzc2lvbiBDaGlsZHJlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYobW9yZUxpbmthYmxlT2JqZWN0cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QgLCBtb3JlTGlua2FibGVPYmplY3RzKVxuICAgICAgICBlbHNlIGlmKGxpbmtibGVPYmplY3QpXG4gICAgICAgICAgICByZXR1cm4gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbGlua2JsZU9iamVjdCk7XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIFxuXG4gICAgc3RhdGljIGhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihjaGlsZHJlbixjb25maWcpe1xuICAgICAgICBjb25maWcuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcblxuICAgICAgICBjb25maWcuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpe1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSBjb25maWcuY2hpbGRyZW4uZ2V0TmFtZShrZXkpO1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlbW92ZU9iamVjdChjb25maWdOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLGZ1bmN0aW9uKGNoaWxkLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZE5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkQ29uZmlnTWFwLmdldChjaGlsZCk7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWdOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7IC8vIGZvciBIVE1MIEVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaWYoIWNoaWxkQ29uZmlnKXtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJyxIVE1MV3JhcHBlckNvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7IC8vIGZvciBSZWFjdCBDb21wb3NpdGUgRWxlbWVudHNcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBBcHAuZ2V0VG9vbENvbmZpZyhjaGlsZC50eXBlKTtcbiAgICAgICAgICAgICAgICBpZighY2hpbGRDb25maWcgJiYgY29uZmlnQ2xhc3Mpe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5zdHlsZSljaGlsZENvbmZpZy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gY2hpbGQucHJvcHMuc3R5bGU7XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5jbGFzc05hbWUpY2hpbGRDb25maWcuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IGNoaWxkLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcC5zZXQoY2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGNvbmZpZ1tcImFkZEdhcEF0XCJdKXtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCdnYXBEaXYnLEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyByZW5kZXJDaGlsZHJlbihyZWFjdENvbXAscHJvcHNNYW5hZ2VyKXtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG5cbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbihjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9e31cblxuICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIC8vaWYoY2hpbGQucHJvcHMgJiYgIWNoaWxkLnByb3BzLnNldHRpbmdzKVxuXG4gICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcyxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHByb3BzTWFuYWdlcil7XG4gICAgICAgICAgICAgICAgdmFyIG9kZCA9IHByb3BzTWFuYWdlci5vZGQ7XG4gICAgICAgICAgICAgICAgaWYob2RkLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2RkQ2hpbGRyZW5JbmRleCA9IG9kZC5jaGlsZHJlbi5pbmRleE9mKGNvbmZpZ05hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZihvZGRDaGlsZHJlbkluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMsb2RkLnZhbHVlc1tvZGRDaGlsZHJlbkluZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocHJvcHNNYW5hZ2VyW1wiZGVmYXVsdFZhbHVlc1wiXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAubWVyZ2VJbnRvKHByb3BzLHByb3BzTWFuYWdlcltcImRlZmF1bHRWYWx1ZXNcIl0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihwcm9wc01hbmFnZXIuYWxsLnByb3BlcnRpZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzTWFuYWdlci5hbGwucHJvcGVydGllcy5tYXAoZnVuY3Rpb24ocHJvcE5hbWUsaSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wc01hbmFnZXIuYWxsLnZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IHZhbHVlID8gdmFsdWVbaW5kZXhdOmNvbmZpZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYocHJvcHNNYW5hZ2VyLm5ldyl7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMscHJvcHNNYW5hZ2VyLm5ldyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIHByb3BzTWFuYWdlci5zdHlsZSl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlID0gcHJvcHMuc3R5bGUgfHwge307XG4gICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMuc3R5bGUscHJvcHNNYW5hZ2VyLnN0eWxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGNvbmZpZ05hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgVG9vbENsYXNzID0gIEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24oY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRvb2xDbGFzcyB7Li4ucHJvcHN9PntjaGlsZH08L1Rvb2xDbGFzcz47XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzID0gQXBwLm1lcmdlSW50byhwcm9wcyxwcm9wc01hbmFnZXIubmV3KTtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmhhcyhjaGlsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQoY2xvbmVkQ2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHByb3BzW1wia2V5XCJdID0gY29uZmlnTmFtZTtcbiAgICAgICAgICAgICAgICBpZihjb25maWdOYW1lID09PSBcImdhcERpdlwiKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yZGVyVmFsdWUgPSBTdHJpbmcocmVhY3RDb21wLnNldHRpbmdzLmFkZEdhcEF0LnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWlzTmFOKG9yZGVyVmFsdWUpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wic3R5bGVcIl0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDpcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjpvcmRlclZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90by1kbyBuZWVkIHRvIHJlcGxhY2Ugd2l0aCBmbGV4aW5mbyBmaWxlIG9yIHRpaGVyIG1lYW4sIGNyZWF0ZSBhIHV0aWxpdHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAvL3RoaXMgc29sdXRpb24gd2lsbCBmYWlsIHdoZW4gY29uZmlnIG5vdCBwYXJ0IG9mIHNlc3Npb24gdHJlZVxuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPFRvb2xDbGFzcyB7Li4ucHJvcHN9Lz47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVyZ2VJbnRvKGludG8sIG9iaixpZ25vcmVQcm9wcykge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG59XG5cbkFwcC50b29sUmVnaXN0cnkgPSB7fTtcbkFwcC50b29sQ29uZmlnTWFwID0gIG5ldyBNYXAoKTtcbkFwcC5kZWJ1ZyA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4iXX0=
