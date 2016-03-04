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
        _this.props.sessionOpen.addImmediateCallback(_this, _this.forceUpdate);
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
            this.props.sessionOpen.value = false;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
                this.props.sessionOpen.removeCallback(this, this.forceUpdate);
                this.settings = nextProps.settings;
                nextProps.sessionOpen.addImmediateCallback(this, this.forceUpdate);
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
            var childrenUI = [];
            if (this.props.sessionOpen.value) {
                childrenUI = this.props.children;
            }

            return _react2.default.createElement(
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
                    childrenUI
                )
            );
        }
    }]);

    return ModalPanel;
}(_react2.default.Component);

exports.default = ModalPanel;
//# sourceMappingURL=data:application/json;base64,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QUFwQjtxQkFGakM7aUJBREo7Z0JBS0k7O3NCQUFLLFdBQVUsWUFBVixFQUF1QixPQUFPLFNBQVAsRUFBNUI7b0JBQ0ssVUFETDtpQkFMSjthQUFSLENBZks7Ozs7V0F4Q1A7RUFBbUIsZ0JBQU0sU0FBTjs7a0JBb0VWIiwiZmlsZSI6Ik1vZGFsUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsUGFuZWxDb25maWcgZnJvbSBcIi4vTW9kYWxQYW5lbENvbmZpZ1wiO1xuXG5cbmNsYXNzIE1vZGFsUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE1vZGFsUGFuZWxDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAgIHdpbmRvdy5tb2RhbExheW91dCA9IHRoaXMuc2V0dGluZ3M7Ly8gZm9yIHRlc3RpbmdcbiAgICAgICAgdGhpcy5wcm9wcy5zZXNzaW9uT3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsID0gIHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuXG4gICAgY2xvc2VNb2RhbCgpe1xuICAgICAgICB0aGlzLnByb3BzLnNlc3Npb25PcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXNzaW9uT3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICBuZXh0UHJvcHMuc2Vzc2lvbk9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMudGl0bGUgIT09IG5leHRQcm9wcy50aXRsZSl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlID0gdGhpcy5wcm9wcy50aXRsZVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy93ZSBjb3VsZCBoYXZlIHVzZWQgdGhpcy5zdGF0ZS5sYXlvdXQsIGJ1dCBzdHlsZSBvZiBkaXYgd2lsbCBnZXQgdGhlIHNhbWUgcmVmZXJlbmNlLCB3aGljaCBpcyBkZXByZWNhdGVkIGluIHJlYWN0XG4gICAgICAgIHZhciBsYXlvdXRTdHlsZSA9IHRoaXMuc2V0dGluZ3MuZ2V0TGF5b3V0U3RhdGUoKTsvLyB0aGlzIHdpbGwgbWFrZSBzdXJlIHdlIGdldCBuZXcgb2JqZWN0IGV2ZXJ5dGltZVxuXG4gICAgICAgIHZhciBib2R5U3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6dGhpcy5zZXR0aW5ncy5oZWlnaHQudmFsdWUsXG4gICAgICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSBbXTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXNzaW9uT3Blbi52YWx1ZSl7XG4gICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfT4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e2JvZHlTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxQYW5lbDtcbiJdfQ==
