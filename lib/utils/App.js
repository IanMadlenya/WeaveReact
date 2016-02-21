"use strict";

var _Style = require("./Style");

var _Style2 = _interopRequireDefault(_Style);

var _HTMLWrapperConfig = require("../configs/HTMLWrapperConfig");

var _HTMLWrapperConfig2 = _interopRequireDefault(_HTMLWrapperConfig);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function App() {}

    var toolRegistry = {};

    App.registerToolImplementation = function (asClassName, jsClass) {
        if (!toolRegistry[asClassName]) toolRegistry[asClassName] = jsClass;
    };

    App.getToolImplementation = function (asClassName) {
        return toolRegistry[asClassName];
    };

    var toolConfigMap = new Map();

    App.registerToolConfig = function (tool, config) {
        if (!toolConfigMap.has(tool)) toolConfigMap.set(tool, config);
    };

    App.getToolConfig = function (tool) {
        return toolConfigMap.get(tool);
    };

    //to-do remove children has to remove the forceUdpate
    App.hookSessionStateForComponentChildren = function (children, config) {
        config.children.delayCallbacks();
        _react2.default.Children.forEach(children, function (child, index) {
            var childName = "";
            if (typeof child.type === "string") {
                // for HTML Elements
                childName = child.type + index;
                var wrapperConfig = null;
                if (!config.children.getObject(childName)) {
                    wrapperConfig = config.children.requestObject(childName, _HTMLWrapperConfig2.default);
                } else {
                    // style is sessioned for DOM elements
                    wrapperConfig = config.children.getObject(childName);
                }
                wrapperConfig.style.domDefined.state = child.props.style;
            } else {
                // for React Composite Elements
                childName = child.type.name + index;
                var configClass = App.getToolConfig(child.type);
                if (!config.children.getObject(childName) && configClass) {
                    config.children.requestObject(childName, configClass);
                }
            }
        });
        config.children.resumeCallbacks();
    };

    App.mergeInto = function (into, obj) {
        for (var attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    };

    module.exports = App;
})(module);
//# sourceMappingURL=data:application/json;base64,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OlsiXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1N0eWxlXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXJDb25maWcgIGZyb20gXCIuLi9jb25maWdzL0hUTUxXcmFwcGVyQ29uZmlnXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG5cbiAgICBmdW5jdGlvbiBBcHAoKSB7XG5cbiAgICB9XG5cbiAgICB2YXIgdG9vbFJlZ2lzdHJ5ID0ge307XG5cblxuICAgIEFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uIChhc0NsYXNzTmFtZSwganNDbGFzcykge1xuICAgICAgICBpZiAoIXRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0pXG4gICAgICAgICAgICB0b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdID0ganNDbGFzcztcbiAgICB9XG5cbiAgICBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uID0gZnVuY3Rpb24gKGFzQ2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiB0b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdO1xuICAgIH1cbiAgICBcbiAgICB2YXIgdG9vbENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICBcbiAgICBBcHAucmVnaXN0ZXJUb29sQ29uZmlnID0gZnVuY3Rpb24gKHRvb2wsIGNvbmZpZykge1xuICAgICAgICBpZiAoIXRvb2xDb25maWdNYXAuaGFzKHRvb2wpKVxuICAgICAgICAgICAgdG9vbENvbmZpZ01hcC5zZXQodG9vbCxjb25maWcpO1xuICAgIH1cbiAgICBcbiAgICBBcHAuZ2V0VG9vbENvbmZpZyA9IGZ1bmN0aW9uICh0b29sKSB7XG4gICAgICAgIHJldHVybiB0b29sQ29uZmlnTWFwLmdldCh0b29sKTtcbiAgICB9XG4gICAgXG4gICAgLy90by1kbyByZW1vdmUgY2hpbGRyZW4gaGFzIHRvIHJlbW92ZSB0aGUgZm9yY2VVZHBhdGVcbiAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGRyZW4sY29uZmlnKXtcbiAgICAgICAgY29uZmlnLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sZnVuY3Rpb24oY2hpbGQsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpeyAvLyBmb3IgSFRNTCBFbGVtZW50c1xuICAgICAgICAgICAgICAgIGNoaWxkTmFtZSA9ICBjaGlsZC50eXBlICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZXJDb25maWcgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmKCFjb25maWcuY2hpbGRyZW4uZ2V0T2JqZWN0KGNoaWxkTmFtZSkpe1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoY2hpbGROYW1lLEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXsvLyBzdHlsZSBpcyBzZXNzaW9uZWQgZm9yIERPTSBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLmdldE9iamVjdChjaGlsZE5hbWUpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgIHdyYXBwZXJDb25maWcuc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IGNoaWxkLnByb3BzLnN0eWxlO1xuICAgICAgICAgICAgfWVsc2V7IC8vIGZvciBSZWFjdCBDb21wb3NpdGUgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBjaGlsZE5hbWUgPSBjaGlsZC50eXBlLm5hbWUgKyBpbmRleDtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBBcHAuZ2V0VG9vbENvbmZpZyhjaGlsZC50eXBlKTtcbiAgICAgICAgICAgICAgICBpZighY29uZmlnLmNoaWxkcmVuLmdldE9iamVjdChjaGlsZE5hbWUpICYmIGNvbmZpZ0NsYXNzKXtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoY2hpbGROYW1lLGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBBcHAubWVyZ2VJbnRvID0gZnVuY3Rpb24oaW50bywgb2JqKSB7XG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICBpbnRvW2F0dHJdID0gb2JqW2F0dHJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cblxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxufShtb2R1bGUpKTtcbiJdfQ==
