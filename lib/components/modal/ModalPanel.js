"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ModalPanelConfig = require("./ModalPanelConfig");

var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalPanel = function (_React$Component) {
    _inherits(ModalPanel, _React$Component);

    function ModalPanel(props) {
        _classCallCheck(this, ModalPanel);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalPanel).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _ModalPanelConfig2.default();
        _this.settings.title.value = _this.props.title;
        window.modalLayout = _this.settings; // for testing
        _this.sessionOpen = _this.props.sessionOpen;

        _this.closeModal = _this.closeModal.bind(_this);
        return _this;
    }

    _createClass(ModalPanel, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "closeModal",
        value: function closeModal() {
            this.sessionOpen.value = false;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
                this.settings = nextProps.settings;
                Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
            }
            if (this.props.title !== nextProps.title) {
                this.settings.title.value = this.props.title;
            }
        }
    }, {
        key: "render",
        value: function render() {
            //we could have used this.state.layout, but style of div will get the same reference, which is deprecated in react
            var layoutStyle = this.settings.getLayoutState(); // this will make sure we get new object everytime

            var bodyStyle = {
                height: this.settings.height.value,
                width: "100%",
                overflowY: 'scroll',
                overflowX: 'hidden'
            };

            layoutStyle["position"] = 'fixed';
            this.sessionOpen.value ? layoutStyle["display"] = 'block' : layoutStyle["display"] = 'none';

            return _react2.default.createElement(
                "div",
                { style: layoutStyle },
                _react2.default.createElement(
                    "div",
                    { className: "modal-content" },
                    _react2.default.createElement(
                        "div",
                        { className: "modal-header" },
                        _react2.default.createElement(
                            "button",
                            { type: "button", className: "close", onClick: this.closeModal },
                            "×"
                        ),
                        _react2.default.createElement(
                            "h4",
                            { className: "modal-title" },
                            this.settings.title.value
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "modal-body", style: bodyStyle },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return ModalPanel;
}(_react2.default.Component);

exports.default = ModalPanel;
//# sourceMappingURL=data:application/json;base64,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a0JBbUVWIiwiZmlsZSI6Ik1vZGFsUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsUGFuZWxDb25maWcgZnJvbSBcIi4vTW9kYWxQYW5lbENvbmZpZ1wiO1xuXG5cbmNsYXNzIE1vZGFsUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE1vZGFsUGFuZWxDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAgIHdpbmRvdy5tb2RhbExheW91dCA9IHRoaXMuc2V0dGluZ3M7Ly8gZm9yIHRlc3RpbmdcbiAgICAgICAgdGhpcy5zZXNzaW9uT3BlbiA9IHRoaXMucHJvcHMuc2Vzc2lvbk9wZW47XG5cblxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwgPSAgdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuXG4gICAgY2xvc2VNb2RhbCgpe1xuICAgICAgICB0aGlzLnNlc3Npb25PcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy50aXRsZSAhPT0gbmV4dFByb3BzLnRpdGxlKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWUgPSB0aGlzLnByb3BzLnRpdGxlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vd2UgY291bGQgaGF2ZSB1c2VkIHRoaXMuc3RhdGUubGF5b3V0LCBidXQgc3R5bGUgb2YgZGl2IHdpbGwgZ2V0IHRoZSBzYW1lIHJlZmVyZW5jZSwgd2hpY2ggaXMgZGVwcmVjYXRlZCBpbiByZWFjdFxuICAgICAgICB2YXIgbGF5b3V0U3R5bGUgPSB0aGlzLnNldHRpbmdzLmdldExheW91dFN0YXRlKCk7Ly8gdGhpcyB3aWxsIG1ha2Ugc3VyZSB3ZSBnZXQgbmV3IG9iamVjdCBldmVyeXRpbWVcblxuICAgICAgICB2YXIgYm9keVN0eWxlID0ge1xuICAgICAgICAgICAgaGVpZ2h0OnRoaXMuc2V0dGluZ3MuaGVpZ2h0LnZhbHVlLFxuICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJ1xuICAgICAgICB9XG5cbiAgICAgICAgbGF5b3V0U3R5bGVbXCJwb3NpdGlvblwiXSA9ICdmaXhlZCc7XG4gICAgICAgICh0aGlzLnNlc3Npb25PcGVuLnZhbHVlKT8obGF5b3V0U3R5bGVbXCJkaXNwbGF5XCJdID0gJ2Jsb2NrJyk6KGxheW91dFN0eWxlW1wiZGlzcGxheVwiXSA9ICdub25lJylcblxuICAgICAgICByZXR1cm4gKDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfT4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RoaXMuc2V0dGluZ3MudGl0bGUudmFsdWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e2JvZHlTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxQYW5lbDtcbiJdfQ==
