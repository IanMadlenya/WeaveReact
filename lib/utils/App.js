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
App.debug = false;

exports.default = App;
//# sourceMappingURL=data:application/json;base64,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LHdCQUFJLFlBQWEsSUFBSSxxQkFBSixDQUEwQixXQUExQixDQUFiLENBZEY7QUFlRix3QkFBSSxXQUFXLDhCQUFDLFNBQUQsRUFBZSxLQUFmLENBQVgsQ0FmRjtBQWdCRiwyQkFBTyxRQUFQLENBaEJFO2lCQWZOO2FBekNrQyxDQTJFcEMsSUEzRW9DLENBMkUvQixJQTNFK0IsQ0FBakIsQ0FBakIsQ0FIcUM7O0FBZ0Z6QyxtQkFBTyxjQUFQLENBaEZ5Qzs7OztrQ0FtRjVCLE1BQU0sS0FBSSxhQUFhO0FBQ3BDLGlCQUFLLElBQUksSUFBSixJQUFZLEdBQWpCLEVBQXNCO0FBQ2xCLHFCQUFLLElBQUwsSUFBYSxJQUFJLElBQUosQ0FBYixDQURrQjthQUF0QjtBQUdBLG1CQUFPLElBQVAsQ0FKb0M7Ozs7V0E1UHRDOzs7QUFvUU4sSUFBSSxZQUFKLEdBQW1CLEVBQW5CO0FBQ0EsSUFBSSxhQUFKLEdBQXFCLElBQUksR0FBSixFQUFyQjtBQUNBLElBQUksS0FBSixHQUFZLEtBQVo7O2tCQUVlIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnICBmcm9tIFwiLi4vY29uZmlncy9IVE1MV3JhcHBlckNvbmZpZ1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSwganNDbGFzcykge1xuICAgICAgICBpZiAoIUFwcC50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdKVxuICAgICAgICAgICAgQXBwLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0gPSBqc0NsYXNzO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb29sSW1wbGVtZW50YXRpb24oYXNDbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIEFwcC50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xDb25maWcgKHRvb2wsIGNvbmZpZykge1xuICAgICAgICBpZiAoIUFwcC50b29sQ29uZmlnTWFwLmhhcyh0b29sKSlcbiAgICAgICAgICAgIEFwcC50b29sQ29uZmlnTWFwLnNldCh0b29sLGNvbmZpZyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xDb25maWcodG9vbCkge1xuICAgICAgICByZXR1cm4gQXBwLnRvb2xDb25maWdNYXAuZ2V0KHRvb2wpO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhyZWFjdENvbXAsbmV4dFByb3BzKXtcbiAgICAgICAgaWYocmVhY3RDb21wLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICBBcHAucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIEFwcC5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYocmVhY3RDb21wLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSlyZWFjdENvbXAuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZihyZWFjdENvbXAucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbil7XG4gICAgICAgICAgICB2YXIgV3JhcHBlckNvbmZpZ0NsYXNzID0gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdPyByZWFjdENvbXBbXCJXcmFwcGVyQ29uZmlnQ2xhc3NcIl06bnVsbDtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHJlYWN0Q29tcC5zZXR0aW5ncyxXcmFwcGVyQ29uZmlnQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApe1xuICAgICAgICB2YXIgY29uZmlnID0gcmVhY3RDb21wLnNldHRpbmdzO1xuICAgICAgICBpZighV2VhdmUuaXNMaW5rYWJsZShjb25maWcpKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb25maWcsIFwiIGlzIG5vdCBhIExpbmthYmxlT2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbmZpZyk7XG4gICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgdmFyIHBuID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBvYmogPSBjb25maWdbcG5dO1xuICAgICAgICAgICAgaWYoV2VhdmUuaXNMaW5rYWJsZShvYmopKXtcbiAgICAgICAgICAgICAgICBpZihvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKVxuICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzO1xuICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLmFkZEdyb3VwZWRDYWxsYmFjayhyZWFjdENvbXAscmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCl7XG4gICAgICAgIHZhciBjb25maWcgPSByZWFjdENvbXAuc2V0dGluZ3M7XG4gICAgICAgIGlmKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZihXZWF2ZS5pc0xpbmthYmxlKG9iaikpe1xuICAgICAgICAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG9iai5jaGlsZExpc3RDYWxsYmFja3M7XG4gICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikucmVtb3ZlQ2FsbGJhY2socmVhY3RDb21wLHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgICAvL0ZvciB0ZXN0aW5nICBhbmQgZGVidWdcbiAgICBzdGF0aWMgaXNTZXNzaW9uQ2hhbmdlZEZvcihjb25maWcpe1xuICAgICAgICBpZighV2VhdmUuaXNMaW5rYWJsZShjb25maWcpKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb25maWcsIFwiIGlzIG5vdCBhIExpbmthYmxlT2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbmZpZyk7XG4gICAgICAgIHZhciBsaW5rYmxlT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgdmFyIG1vcmVMaW5rYWJsZU9iamVjdHMgPSBbXTtcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZihXZWF2ZS5pc0xpbmthYmxlKG9iaikpe1xuICAgICAgICAgICAgICAgIHZhciBsbyA9IChvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKT8gb2JqLmNoaWxkTGlzdENhbGxiYWNrcyA6IG9ialxuICAgICAgICAgICAgICAgIGlmKCFsaW5rYmxlT2JqZWN0KSBsaW5rYmxlT2JqZWN0ID0gbG87XG4gICAgICAgICAgICAgICAgZWxzZSBtb3JlTGlua2FibGVPYmplY3RzLnB1c2gobG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoQXBwLmRlYnVnKXtcbiAgICAgICAgICAgIHZhciBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoID4gMCl7XG5cbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaXNDaGFuZ2VkID0gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbW9yZUxpbmthYmxlT2JqZWN0c1tpXSlcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNDaGFuZ2VkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBtb3JlTGlua2FibGVPYmplY3RzW2ldICwgXCIgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYobGlua2JsZU9iamVjdCl7XG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkID0gIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QpO1xuICAgICAgICAgICAgICAgIGlmKGlzQ2hhbmdlZCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBsaW5rYmxlT2JqZWN0ICwgXCIgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggY29uZmlnICwgXCIgbm8gc2Vzc2lvbiBDaGlsZHJlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBsaW5rYmxlT2JqZWN0ICwgbW9yZUxpbmthYmxlT2JqZWN0cylcbiAgICAgICAgZWxzZSBpZihsaW5rYmxlT2JqZWN0KVxuICAgICAgICAgICAgcmV0dXJuIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyBob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4oY2hpbGRyZW4sY29uZmlnLFdyYXBwZXJDb25maWdDbGFzcyl7XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuXG4gICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSl7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9IGNvbmZpZy5jaGlsZHJlbi5nZXROYW1lKGtleSk7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVtb3ZlT2JqZWN0KGNvbmZpZ05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sZnVuY3Rpb24oY2hpbGQsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRDb25maWdNYXAuZ2V0KGNoaWxkKTtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZ05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXsgLy8gZm9yIEhUTUwgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZighY2hpbGRDb25maWcpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBXcmFwcGVyQ29uZmlnQ2xhc3MgPyBXcmFwcGVyQ29uZmlnQ2xhc3M6SFRNTFdyYXBwZXJDb25maWdcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJyxjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7IC8vIGZvciBSZWFjdCBDb21wb3NpdGUgRWxlbWVudHNcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBBcHAuZ2V0VG9vbENvbmZpZyhjaGlsZC50eXBlKTtcbiAgICAgICAgICAgICAgICBpZighY2hpbGRDb25maWcgJiYgY29uZmlnQ2xhc3Mpe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5zdHlsZSljaGlsZENvbmZpZy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gY2hpbGQucHJvcHMuc3R5bGU7XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5jbGFzc05hbWUpY2hpbGRDb25maWcuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IGNoaWxkLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcC5zZXQoY2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGNvbmZpZ1tcImFkZEdhcEF0XCJdKXtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCdnYXBEaXYnLEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyByZW5kZXJDaGlsZHJlbihyZWFjdENvbXAscHJvcHNNYW5hZ2VyKXtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG5cbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbihjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9e31cblxuICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIC8vaWYoY2hpbGQucHJvcHMgJiYgIWNoaWxkLnByb3BzLnNldHRpbmdzKVxuXG4gICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcyxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHByb3BzTWFuYWdlcil7XG4gICAgICAgICAgICAgICAgdmFyIG9kZCA9IHByb3BzTWFuYWdlci5vZGQ7XG4gICAgICAgICAgICAgICAgaWYob2RkLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2RkQ2hpbGRyZW5JbmRleCA9IG9kZC5jaGlsZHJlbi5pbmRleE9mKGNvbmZpZ05hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZihvZGRDaGlsZHJlbkluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMsb2RkLnZhbHVlc1tvZGRDaGlsZHJlbkluZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocHJvcHNNYW5hZ2VyW1wiZGVmYXVsdFZhbHVlc1wiXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAubWVyZ2VJbnRvKHByb3BzLHByb3BzTWFuYWdlcltcImRlZmF1bHRWYWx1ZXNcIl0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihwcm9wc01hbmFnZXIuYWxsLnByb3BlcnRpZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzTWFuYWdlci5hbGwucHJvcGVydGllcy5tYXAoZnVuY3Rpb24ocHJvcE5hbWUsaSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wc01hbmFnZXIuYWxsLnZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IHZhbHVlID8gdmFsdWVbaW5kZXhdOmNvbmZpZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYocHJvcHNNYW5hZ2VyLm5ldyl7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMscHJvcHNNYW5hZ2VyLm5ldyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIHByb3BzTWFuYWdlci5zdHlsZSl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlID0gcHJvcHMuc3R5bGUgfHwge307XG4gICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMuc3R5bGUscHJvcHNNYW5hZ2VyLnN0eWxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGNvbmZpZ05hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgVG9vbENsYXNzID0gIEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24oY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRvb2xDbGFzcyB7Li4ucHJvcHN9PntjaGlsZH08L1Rvb2xDbGFzcz47XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzID0gQXBwLm1lcmdlSW50byhwcm9wcyxwcm9wc01hbmFnZXIubmV3KTtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmhhcyhjaGlsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQoY2xvbmVkQ2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHByb3BzW1wia2V5XCJdID0gY29uZmlnTmFtZTtcbiAgICAgICAgICAgICAgICBpZihjb25maWdOYW1lID09PSBcImdhcERpdlwiKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yZGVyVmFsdWUgPSBTdHJpbmcocmVhY3RDb21wLnNldHRpbmdzLmFkZEdhcEF0LnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWlzTmFOKG9yZGVyVmFsdWUpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wic3R5bGVcIl0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDpcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjpvcmRlclZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90by1kbyBuZWVkIHRvIHJlcGxhY2Ugd2l0aCBmbGV4aW5mbyBmaWxlIG9yIHRpaGVyIG1lYW4sIGNyZWF0ZSBhIHV0aWxpdHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAvL3RoaXMgc29sdXRpb24gd2lsbCBmYWlsIHdoZW4gY29uZmlnIG5vdCBwYXJ0IG9mIHNlc3Npb24gdHJlZVxuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPFRvb2xDbGFzcyB7Li4ucHJvcHN9Lz47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVyZ2VJbnRvKGludG8sIG9iaixpZ25vcmVQcm9wcykge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG59XG5cbkFwcC50b29sUmVnaXN0cnkgPSB7fTtcbkFwcC50b29sQ29uZmlnTWFwID0gIG5ldyBNYXAoKTtcbkFwcC5kZWJ1ZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuIl19