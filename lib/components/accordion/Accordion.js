"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

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
        if (_App2.default.debug) console.log("Accordion - constructor");
        _this.settings.setIconModeLayout(_this.props.iconMode);
        return _this;
    }

    _createClass(Accordion, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (_App2.default.debug) console.log("Accordion - componentWillReceiveProps");
            _App2.default.componentWillReceiveProps(this, nextProps);
            this.settings.setIconModeLayout(nextProps.iconMode);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (_App2.default.debug) console.log("Accordion - componentWillUnmount");
            _App2.default.removeForceUpdateFromCallbacks(this);
        }

        // allowe render only when React Parent render is called with new iconMode value

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (_App2.default.debug) console.log("Accordion - shouldComponentUpdate");
            if (this.props.iconMode !== nextProps.iconMode) return true;else return false;
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

            this.settings.props.addChildEvent("onClick", this.onClickCallback);
            this.settings.props.addChildProps("open", false, true);
            this.settings.props.addChildProps("style", childStyle, activeChildStyle);
            this.settings.props.addChildProps("iconMode", this.props.iconMode);
            this.settings.props.keyProp = "index";
            this.settings.props.addOddChildren([this.settings.activeChild.state]);

            return _App2.default.renderChildren(this);
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
//# sourceMappingURL=data:application/json;base64,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QUExQjthQUFMLENBTkM7QUFPTCxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTJCO0FBQzFCLG9CQUFJLFVBQVUsS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUFWLENBRHNCO0FBRTFCLHFCQUFLOztzQkFBSyxXQUFXLE9BQVgsRUFBb0IsT0FBTyxXQUFQLEVBQXpCO29CQUE4QyxVQUE5QztpQkFBTCxDQUYwQjthQUE5Qjs7QUFLQSxtQkFBUSxFQUFSLENBWks7Ozs7V0FwRFA7RUFBa0IsZ0JBQU0sU0FBTjs7QUFvRXhCLE1BQU0sYUFBTixDQUFvQixzQkFBcEIsRUFBNEMsU0FBNUMsRUFBc0QsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXZEOztBQUVBLGNBQUksa0JBQUosQ0FBdUIsU0FBdkI7QUFDQSxjQUFJLDBCQUFKLENBQStCLDRCQUEvQixFQUE0RCxTQUE1RDs7a0JBRWUiLCJmaWxlIjoiQWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IEFjY29yZGlvbkNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcblxuXG5jbGFzcyBBY2NvcmRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIEFwcC5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHRoaXMpO1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJBY2NvcmRpb24gLSBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZXRJY29uTW9kZUxheW91dCh0aGlzLnByb3BzLmljb25Nb2RlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkFjY29yZGlvbiAtIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIik7XG4gICAgICAgIEFwcC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHRoaXMsbmV4dFByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZXRJY29uTW9kZUxheW91dChuZXh0UHJvcHMuaWNvbk1vZGUpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiQWNjb3JkaW9uIC0gY29tcG9uZW50V2lsbFVubW91bnRcIik7XG4gICAgICAgICBBcHAucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGFsbG93ZSByZW5kZXIgb25seSB3aGVuIFJlYWN0IFBhcmVudCByZW5kZXIgaXMgY2FsbGVkIHdpdGggbmV3IGljb25Nb2RlIHZhbHVlXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkFjY29yZGlvbiAtIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pY29uTW9kZSAhPT0gbmV4dFByb3BzLmljb25Nb2RlKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgb25DbGlja0NhbGxiYWNrKGNoaWxkQ29uZmlnLGluZGV4KXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVDaGlsZC5zdGF0ZSA9IGluZGV4O1xuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHZhciBhY3RpdmVDaGlsZFN0eWxlID0gdGhpcy5zZXR0aW5ncy5hY3RpdmVDaGlsZFN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgIHZhciBjaGlsZFN0eWxlID0gdGhpcy5zZXR0aW5ncy5jaGlsZFN0eWxlLmdldFN0eWxlRm9yKCk7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZEV2ZW50KFwib25DbGlja1wiLHRoaXMub25DbGlja0NhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwib3BlblwiLGZhbHNlLHRydWUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJzdHlsZVwiLGNoaWxkU3R5bGUsYWN0aXZlQ2hpbGRTdHlsZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImljb25Nb2RlXCIsdGhpcy5wcm9wcy5pY29uTW9kZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMua2V5UHJvcCA9IFwiaW5kZXhcIjtcbiAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZE9kZENoaWxkcmVuKFt0aGlzLnNldHRpbmdzLmFjdGl2ZUNoaWxkLnN0YXRlXSk7XG5cbiAgICAgICAgcmV0dXJuICBBcHAucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkFjY29yZGlvbiAtIHJlbmRlclwiKTtcblxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgICAgIHZhciB1aSA9IDxkaXYgc3R5bGU9e3N0eWxlT2JqZWN0fT57Y2hpbGRyZW5VSX08L2Rpdj47XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnN0YXRlKXtcbiAgICAgICAgICAgIHZhciBjc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5DU1MuZ2V0Q1NTRm9yKCk7XG4gICAgICAgICAgICB1aSA9IDxkaXYgY2xhc3NOYW1lPXtjc3NOYW1lfSBzdHlsZT17c3R5bGVPYmplY3R9PntjaGlsZHJlblVJfTwvZGl2PjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodWkpO1xuICAgIH1cblxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuQWNjb3JkaW9uXCIsIEFjY29yZGlvbixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhBY2NvcmRpb24sQWNjb3JkaW9uQ29uZmlnKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuQWNjb3JkaW9uQ29uZmlnXCIsQWNjb3JkaW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIl19
