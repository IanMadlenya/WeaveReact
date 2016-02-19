"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _ModalConfig = require("./ModalConfig");

var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

var _ModalPanel = require("./ModalPanel");

var _ModalPanel2 = _interopRequireDefault(_ModalPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _ModalConfig2.default();
        _this.openModal = _this.openModal.bind(_this);

        return _this;
    }

    _createClass(Modal, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.open.addImmediateCallback(this, this.forceUpdate);
            this.settings.buttonIcon.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.open.removeCallback(this, this.forceUpdate);
            this.settings.buttonIcon.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "openModal",
        value: function openModal() {
            this.settings.open.value = true;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                this.settings.open.removeCallback(this, this.forceUpdate);
                this.settings.buttonIcon.removeCallback(this, this.forceUpdate);
                this.settings = nextProps.settings;
                this.settings.open.addImmediateCallback(this, this.forceUpdate);
                this.settings.buttonIcon.addImmediateCallback(this, this.forceUpdate);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var isOpen = this.settings.open.value;
            var overlay = _Style2.default.overlayContainer(isOpen);
            var modal = _Style2.default.modal(isOpen);
            var modalButtonUI = "";
            var modalPanelUI = "";
            if (isOpen) {
                modalPanelUI = _react2.default.createElement(
                    _ModalPanel2.default,
                    { title: this.props.title, sessionOpen: this.settings.open, settings: this.settings.panelConfig },
                    this.props.children
                );
            }

            if (!this.props.keyPress) {
                if (this.settings.buttonIcon.value) {
                    modalButtonUI = _react2.default.createElement(
                        "span",
                        { style: { cursor: "pointer" }, onClick: this.openModal },
                        _react2.default.createElement("i", { className: this.settings.buttonIcon.value })
                    );
                } else {
                    modalButtonUI = _react2.default.createElement(
                        "span",
                        { type: "button", className: "btn btn-primary", onClick: this.openModal },
                        "Open"
                    );
                }
            }
            return _react2.default.createElement(
                "span",
                null,
                modalButtonUI,
                _react2.default.createElement("div", { style: overlay }),
                _react2.default.createElement(
                    "div",
                    { style: modal },
                    modalPanelUI
                )
            );
        }
    }]);

    return Modal;
}(_react2.default.Component);

exports.default = Modal;
//# sourceMappingURL=data:application/json;base64,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QUFLLFFBQUwsRUFBYyxXQUFVLGlCQUFWLEVBQTRCLFNBQVMsS0FBSyxTQUFMLEVBQXpEOztxQkFBaEIsQ0FEQTtpQkFISjthQURKO0FBU0EsbUJBQVE7OztnQkFDUyxhQURUO2dCQUdRLHVDQUFLLE9BQU8sT0FBUCxFQUFMLENBSFI7Z0JBSVE7O3NCQUFLLE9BQU8sS0FBUCxFQUFMO29CQUNLLFlBREw7aUJBSlI7YUFBUixDQXJCUzs7OztXQXJDUDtFQUFjLGdCQUFNLFNBQU47O2tCQXNFTCIsImZpbGUiOiJNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTW9kYWxDb25maWcgZnJvbSBcIi4vTW9kYWxDb25maWdcIjtcbmltcG9ydCBNb2RhbFBhbmVsIGZyb20gXCIuL01vZGFsUGFuZWxcIjtcblxuXG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBNb2RhbENvbmZpZygpO1xuICAgICAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMub3Blbk1vZGFsLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuICAgIG9wZW5Nb2RhbCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICB2YXIgaXNPcGVuID0gdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuICAgIHZhciBvdmVybGF5ID0gU3R5bGUub3ZlcmxheUNvbnRhaW5lcihpc09wZW4pO1xuICAgIHZhciBtb2RhbCA9IFN0eWxlLm1vZGFsKGlzT3Blbik7XG4gICAgdmFyIG1vZGFsQnV0dG9uVUkgPSBcIlwiO1xuICAgIHZhciBtb2RhbFBhbmVsVUkgPSBcIlwiO1xuICAgIGlmKGlzT3Blbil7XG4gICAgICAgIG1vZGFsUGFuZWxVSSA9IDxNb2RhbFBhbmVsIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSAgc2Vzc2lvbk9wZW49e3RoaXMuc2V0dGluZ3Mub3Blbn0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MucGFuZWxDb25maWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbFBhbmVsPlxuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5rZXlQcmVzcyl7XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi52YWx1ZSl7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvblVJID0gPHNwYW4gc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+PGkgY2xhc3NOYW1lPXt0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24udmFsdWV9PjwvaT48L3NwYW4+O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvblVJID0gPHNwYW4gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5PcGVuPC9zcGFuPjtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiAoPHNwYW4gPlxuICAgICAgICAgICAgICAgICAgICB7bW9kYWxCdXR0b25VSX1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtvdmVybGF5fS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RhbFBhbmVsVUl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXX0=
