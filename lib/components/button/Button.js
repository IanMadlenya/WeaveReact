"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _Config = require("./Config");

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

        _ComponentManager2.default.initialize(_this);
        _this.onClickListener = _this.onClickListener.bind(_this);
        return _this;
    }

    _createClass(Button, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _ComponentManager2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _ComponentManager2.default.componentWillUnmount(this);
        }

        // allowe render only when React Parent render is called with new iconMode value

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (_ComponentManager2.default.debug) console.log("Button - shouldComponentUpdate");
            if (this.props.iconMode !== nextProps.iconMode) return true;else return false;
        }
    }, {
        key: "onClickListener",
        value: function onClickListener() {
            this.settings.clicked.state = !this.settings.clicked.state;
            if (this.props.onClick) this.props.onClick();
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Button - render");
            var iconUI = "";
            var label = this.settings.iconOnly.state ? "" : this.settings.label.state;

            var iconName = this.settings.getIcon();
            if (iconName && iconName.length > 0) {
                var iconStyleObject = this.settings.iconModeStyle.getStyleFor(null, true);
                iconUI = _react2.default.createElement(
                    "i",
                    { style: iconStyleObject, className: iconName },
                    " "
                );
            }

            var styleObject = this.settings.style.getStyleFor(null, true);

            var buttonUI = _react2.default.createElement(
                "span",
                { onClick: this.onClickListener, style: styleObject },
                iconUI,
                label
            );
            if (this.settings.useCSS.state) {
                var cssName = this.settings.CSS.getCSSFor();
                buttonUI = _react2.default.createElement(
                    "span",
                    { onClick: this.onClickListener, className: cssName, style: styleObject },
                    iconUI,
                    label
                );
            }
            return buttonUI;
        }
    }]);

    return Button;
}(_react2.default.Component);

Weave.registerClass("weavereact.Button", Button, [weavejs.api.core.ILinkableObject]);

_ComponentManager2.default.registerToolConfig(Button, _Config2.default);
_ComponentManager2.default.registerToolImplementation("weavereact.ButtonConfig", Button);

exports.default = Button;
//# sourceMappingURL=data:application/json;base64,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ZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEJ1dHRvbkNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcblxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuaW5pdGlhbGl6ZSh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrTGlzdGVuZXIgPSB0aGlzLm9uQ2xpY2tMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHRoaXMsbmV4dFByb3BzKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY29tcG9uZW50V2lsbFVubW91bnQodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gYWxsb3dlIHJlbmRlciBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWQgd2l0aCBuZXcgaWNvbk1vZGUgdmFsdWVcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIkJ1dHRvbiAtIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pY29uTW9kZSAhPT0gbmV4dFByb3BzLmljb25Nb2RlKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uQ2xpY2tMaXN0ZW5lcigpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNsaWNrZWQuc3RhdGUgPSAhdGhpcy5zZXR0aW5ncy5jbGlja2VkLnN0YXRlO1xuICAgICAgICBpZih0aGlzLnByb3BzLm9uQ2xpY2spdGhpcy5wcm9wcy5vbkNsaWNrKClcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIkJ1dHRvbiAtIHJlbmRlclwiKTtcbiAgICAgICAgdmFyIGljb25VSSA9IFwiXCI7XG4gICAgICAgIHZhciBsYWJlbCA9IHRoaXMuc2V0dGluZ3MuaWNvbk9ubHkuc3RhdGU/XCJcIjp0aGlzLnNldHRpbmdzLmxhYmVsLnN0YXRlO1xuXG4gICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuc2V0dGluZ3MuZ2V0SWNvbigpO1xuICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGg+MCl7XG4gICAgICAgICAgICB2YXIgaWNvblN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5pY29uTW9kZVN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG4gICAgICAgICAgICBpY29uVUkgPSAgPGkgc3R5bGU9e2ljb25TdHlsZU9iamVjdH0gY2xhc3NOYW1lID0ge2ljb25OYW1lfT4gPC9pPlxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpO1xuXG4gICAgICAgIHZhciBidXR0b25VSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMub25DbGlja0xpc3RlbmVyfSBzdHlsZT17c3R5bGVPYmplY3R9PntpY29uVUl9e2xhYmVsfTwvc3Bhbj47XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnN0YXRlKXtcbiAgICAgICAgICAgIHZhciBjc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5DU1MuZ2V0Q1NTRm9yKCk7XG4gICAgICAgICAgICBidXR0b25VSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMub25DbGlja0xpc3RlbmVyfSBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2ljb25VSX17bGFiZWx9PC9zcGFuPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGJ1dHRvblVJKTtcbiAgICB9XG5cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LkJ1dHRvblwiLCBCdXR0b24sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKEJ1dHRvbixCdXR0b25Db25maWcpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuQnV0dG9uQ29uZmlnXCIsQnV0dG9uKTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19
