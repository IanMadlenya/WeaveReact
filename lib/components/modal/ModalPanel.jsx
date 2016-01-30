"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ModalPanelConfig = require("./ModalPanelConfig");

var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

var ModalPanel = (function (_React$Component) {
    _inherits(ModalPanel, _React$Component);

    function ModalPanel(props) {
        _classCallCheck(this, ModalPanel);

        _React$Component.call(this, props);
        this.settings = this.props.settings ? this.props.settings : new _ModalPanelConfig2["default"]();
        window.modalLayout = this.settings; // for testing
        this.sessionOpen = this.props.sessionOpen;

        this.state = this.settings.getLayoutState();

        this.closeModal = this.closeModal.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    ModalPanel.prototype.componentDidMount = function componentDidMount() {
        var cc = Weave.getCallbacks(this.settings);
        cc.addImmediateCallback(this, this.updateState);
    };

    ModalPanel.prototype.componentWillUnmount = function componentWillUnmount() {
        var cc = Weave.getCallbacks(this.settings);
        cc.removeCallback(this, this.updateState);
    };

    ModalPanel.prototype.updateState = function updateState() {
        this.setState(this.settings.getLayoutState());
    };

    ModalPanel.prototype.closeModal = function closeModal() {
        this.sessionOpen.value = false;
    };

    ModalPanel.prototype.render = function render() {
        //we could have used this.state.layout, but style of div will get the same reference, which is deprecated in react
        var layoutStyle = this.settings.getLayoutState(); // this will make sure we get new object everytime

        var bodyStyle = {
            height: this.settings.height.value,
            width: "100%",
            overflowY: 'scroll',
            overflowX: 'hidden'
        };

        layoutStyle["position"] = 'absolute';
        this.sessionOpen.value ? layoutStyle["display"] = 'block' : layoutStyle["display"] = 'none';

        return _react2["default"].createElement(
            "div",
            { style: layoutStyle },
            _react2["default"].createElement(
                "div",
                { className: "modal-content" },
                _react2["default"].createElement(
                    "div",
                    { className: "modal-header" },
                    _react2["default"].createElement(
                        "button",
                        { type: "button", className: "close", onClick: this.closeModal },
                        "×"
                    ),
                    _react2["default"].createElement(
                        "h4",
                        { className: "modal-title" },
                        "Title"
                    )
                ),
                _react2["default"].createElement(
                    "div",
                    { className: "modal-body", style: bodyStyle },
                    this.props.children
                )
            )
        );
    };

    return ModalPanel;
})(_react2["default"].Component);

exports["default"] = ModalPanel;
module.exports = exports["default"];