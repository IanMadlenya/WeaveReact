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

        this.state = {
            open: this.settings.open.value
        };
        this.updateState = this.updateState.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    Modal.prototype.componentDidMount = function componentDidMount() {
        this.settings.open.addImmediateCallback(this, this.updateState);
    };

    Modal.prototype.componentWillUnmount = function componentWillUnmount() {
        this.settings.open.removeCallback(this, this.updateState);
    };

    Modal.prototype.updateState = function updateState() {
        this.setState({
            open: this.settings.open.value
        });
    };

    Modal.prototype.openModal = function openModal() {
        this.settings.open.value = true;
    };

    Modal.prototype.render = function render() {

        var overlay = _utilsStyle2["default"].overlayContainer(this.state.open);
        var modal = _utilsStyle2["default"].modal(this.state.open);
        //if(this.state.open)modal['width'] = this.state.width;

        // important to put modalpanel in wrapper in style, as style is not applied to custom react component, react takes the style of outer contianer in
        // react Component render function
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