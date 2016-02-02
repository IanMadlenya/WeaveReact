"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utilsStyle = require("../../utils/Style");

var _utilsStyle2 = _interopRequireDefault(_utilsStyle);

var _ModalConfig = require("./ModalConfig");

var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

var _ModalPanel = require("./ModalPanel");

var _ModalPanel2 = _interopRequireDefault(_ModalPanel);

var Modal = (function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        _React$Component.call(this, props);
        this.settings = this.props.settings ? this.props.settings : new _ModalConfig2["default"]();

        this.openModal = this.openModal.bind(this);
    }

    Modal.prototype.componentDidMount = function componentDidMount() {
        this.settings.open.addImmediateCallback(this, this.forceUpdate);
        this.settings.buttonIcon.addImmediateCallback(this, this.forceUpdate);
    };

    Modal.prototype.componentWillUnmount = function componentWillUnmount() {
        this.settings.open.removeCallback(this, this.forceUpdate);
        this.settings.buttonIcon.removeCallback(this, this.forceUpdate);
    };

    Modal.prototype.openModal = function openModal() {
        this.settings.open.value = true;
    };

    Modal.prototype.render = function render() {
        var isOpen = this.settings.open.value;
        var overlay = _utilsStyle2["default"].overlayContainer(isOpen);
        var modal = _utilsStyle2["default"].modal(isOpen);
        var modalButtonUI = "";

        if (!this.props.keyPress) {
            if (this.settings.buttonIcon.value) {
                modalButtonUI = _react2["default"].createElement(
                    "span",
                    { style: { cursor: "pointer" }, onClick: this.openModal },
                    _react2["default"].createElement("i", { className: this.settings.buttonIcon.value })
                );
            } else {
                modalButtonUI = _react2["default"].createElement(
                    "span",
                    { type: "button", className: "btn btn-primary", onClick: this.openModal },
                    "Open"
                );
            }
        }
        return _react2["default"].createElement(
            "span",
            null,
            _react2["default"].createElement(
                "span",
                { type: "button", className: "btn btn-primary", onClick: this.openModal },
                "Open"
            ),
            _react2["default"].createElement("div", { style: overlay }),
            _react2["default"].createElement(
                "div",
                { style: modal },
                _react2["default"].createElement(
                    _ModalPanel2["default"],
                    { sessionOpen: this.settings.open, settings: this.settings.panelConfig },
                    this.props.children
                )
            )
        );
    };

    return Modal;
})(_react2["default"].Component);

exports["default"] = Modal;
module.exports = exports["default"];