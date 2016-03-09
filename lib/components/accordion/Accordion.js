"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

var _PropsManager = require("../PropsManager");

var _PropsManager2 = _interopRequireDefault(_PropsManager);

var _Config = require("./Config");

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_React$Component) {
    _inherits(Accordion, _React$Component);

    function Accordion(props) {
        _classCallCheck(this, Accordion);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).call(this, props));

        _this.settings = _this.props.settings;
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _App2.default.addForceUpdateToCallbacks(_this);
        _this.propsManager = new _PropsManager2.default();
        if (_App2.default.debug) console.log("Accordion - constructor");
        return _this;
    }

    _createClass(Accordion, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (_App2.default.debug) console.log("Accordion - componentWillReceiveProps");
            _App2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (_App2.default.debug) console.log("Accordion - componentWillUnmount");
            _App2.default.removeForceUpdateFromCallbacks(this);
        }

        // called only when React Parent render is called

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (_App2.default.debug) console.log("Accordion - shouldComponentUpdate");
            return false;
        }
    }, {
        key: "onClickCallback",
        value: function onClickCallback(childConfig, index) {
            this.settings.activeChild.state = index;
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            var activeChildStyle = this.settings.activeChildStyle.getStyleFor();
            var childStyle = this.settings.childStyle.getStyleFor();

            this.propsManager.addKeyProps("index");
            this.propsManager.addNewProps("open", false);
            this.propsManager.updateStyle(childStyle);
            this.propsManager.addOddChild(this.settings.activeChild.state, { style: activeChildStyle, open: true }, true);
            this.propsManager.addEvent("onClick", this.onClickCallback);
            return _App2.default.renderChildren(this, this.propsManager);
        }
    }, {
        key: "render",
        value: function render() {
            if (_App2.default.debug) console.log("Accordion - render");

            var styleObject = this.settings.style.getStyleFor(null, true);
            var childrenUI = this.renderChildren();

            var ui = _react2.default.createElement(
                "div",
                { style: styleObject },
                childrenUI
            );
            if (this.settings.useCSS.state) {
                var cssName = this.settings.CSS.getCSSFor();
                ui = _react2.default.createElement(
                    "div",
                    { className: cssName, style: styleObject },
                    childrenUI
                );
            }

            return ui;
        }
    }]);

    return Accordion;
}(_react2.default.Component);

Weave.registerClass("weavereact.Accordion", Accordion, [weavejs.api.core.ILinkableObject]);

_App2.default.registerToolConfig(Accordion, _Config2.default);
_App2.default.registerToolImplementation("weavereact.AccordionConfig", Accordion);

exports.default = Accordion;
//# sourceMappingURL=data:application/json;base64,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QUErRHhCLE1BQU0sYUFBTixDQUFvQixzQkFBcEIsRUFBNEMsU0FBNUMsRUFBc0QsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXZEOztBQUVBLGNBQUksa0JBQUosQ0FBdUIsU0FBdkI7QUFDQSxjQUFJLDBCQUFKLENBQStCLDRCQUEvQixFQUE0RCxTQUE1RDs7a0JBRWUiLCJmaWxlIjoiQWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IFByb3BzTWFuYWdlciBmcm9tIFwiLi4vUHJvcHNNYW5hZ2VyXCI7XG5pbXBvcnQgQWNjb3JkaW9uQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5cbmNsYXNzIEFjY29yZGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG4gICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgQXBwLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3ModGhpcyk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyID0gbmV3IFByb3BzTWFuYWdlcigpO1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJBY2NvcmRpb24gLSBjb25zdHJ1Y3RvclwiKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkFjY29yZGlvbiAtIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIik7XG4gICAgICAgIEFwcC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHRoaXMsbmV4dFByb3BzKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkFjY29yZGlvbiAtIGNvbXBvbmVudFdpbGxVbm1vdW50XCIpO1xuICAgICAgICAgQXBwLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgb25seSB3aGVuIFJlYWN0IFBhcmVudCByZW5kZXIgaXMgY2FsbGVkXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkFjY29yZGlvbiAtIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uQ2xpY2tDYWxsYmFjayhjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlQ2hpbGQuc3RhdGUgPSBpbmRleDtcbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICB2YXIgYWN0aXZlQ2hpbGRTdHlsZSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlQ2hpbGRTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICB2YXIgY2hpbGRTdHlsZSA9IHRoaXMuc2V0dGluZ3MuY2hpbGRTdHlsZS5nZXRTdHlsZUZvcigpO1xuXG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZEtleVByb3BzKFwiaW5kZXhcIik7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwib3BlblwiLGZhbHNlKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIudXBkYXRlU3R5bGUoY2hpbGRTdHlsZSk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE9kZENoaWxkKHRoaXMuc2V0dGluZ3MuYWN0aXZlQ2hpbGQuc3RhdGUse3N0eWxlOmFjdGl2ZUNoaWxkU3R5bGUsb3Blbjp0cnVlfSx0cnVlKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkRXZlbnQoXCJvbkNsaWNrXCIsdGhpcy5vbkNsaWNrQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLHRoaXMucHJvcHNNYW5hZ2VyKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiQWNjb3JkaW9uIC0gcmVuZGVyXCIpO1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgdmFyIHVpID0gPGRpdiBzdHlsZT17c3R5bGVPYmplY3R9PntjaGlsZHJlblVJfTwvZGl2PjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1Muc3RhdGUpe1xuICAgICAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgICAgIHVpID0gPGRpdiBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2NoaWxkcmVuVUl9PC9kaXY+O1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIHJldHVybiAodWkpO1xuICAgIH1cblxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuQWNjb3JkaW9uXCIsIEFjY29yZGlvbixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhBY2NvcmRpb24sQWNjb3JkaW9uQ29uZmlnKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuQWNjb3JkaW9uQ29uZmlnXCIsQWNjb3JkaW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIl19
