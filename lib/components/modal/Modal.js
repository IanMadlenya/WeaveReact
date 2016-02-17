"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
            console.log("componentDidMount");
            this.settings.open.addImmediateCallback(this, this.forceUpdate);
            this.settings.buttonIcon.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("componentWillUnmount.....");
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
                console.log("componentWillReceiveProps");
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
//# sourceMappingURL=data:application/json;base64,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LHFDQUFHLFdBQVcsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixLQUF6QixFQUFkLENBQTFEO3FCQUFoQixDQUQ4QjtpQkFBbEMsTUFHSTtBQUNBLG9DQUFnQjs7MEJBQU0sTUFBSyxRQUFMLEVBQWMsV0FBVSxpQkFBVixFQUE0QixTQUFTLEtBQUssU0FBTCxFQUF6RDs7cUJBQWhCLENBREE7aUJBSEo7YUFESjtBQVNBLG1CQUFROzs7Z0JBQ1MsYUFEVDtnQkFHUSx1Q0FBSyxPQUFPLE9BQVAsRUFBTCxDQUhSO2dCQUlROztzQkFBSyxPQUFPLEtBQVAsRUFBTDtvQkFDSyxZQURMO2lCQUpSO2FBQVIsQ0FyQlM7Ozs7V0F4Q1A7RUFBYyxnQkFBTSxTQUFOOztrQkF5RUwiLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE1vZGFsQ29uZmlnIGZyb20gXCIuL01vZGFsQ29uZmlnXCI7XG5pbXBvcnQgTW9kYWxQYW5lbCBmcm9tIFwiLi9Nb2RhbFBhbmVsXCI7XG5cblxuXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgTW9kYWxDb25maWcoKTtcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50RGlkTW91bnRcIilcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnRXaWxsVW5tb3VudC4uLi4uXCIpXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgb3Blbk1vZGFsKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgIHZhciBpc09wZW4gPSB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgdmFyIG92ZXJsYXkgPSBTdHlsZS5vdmVybGF5Q29udGFpbmVyKGlzT3Blbik7XG4gICAgdmFyIG1vZGFsID0gU3R5bGUubW9kYWwoaXNPcGVuKTtcbiAgICB2YXIgbW9kYWxCdXR0b25VSSA9IFwiXCI7XG4gICAgdmFyIG1vZGFsUGFuZWxVSSA9IFwiXCI7XG4gICAgaWYoaXNPcGVuKXtcbiAgICAgICAgbW9kYWxQYW5lbFVJID0gPE1vZGFsUGFuZWwgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9ICBzZXNzaW9uT3Blbj17dGhpcy5zZXR0aW5ncy5vcGVufSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5wYW5lbENvbmZpZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsUGFuZWw+XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3BzLmtleVByZXNzKXtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnZhbHVlKXtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uVUkgPSA8c3BhbiBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT48aSBjbGFzc05hbWU9e3RoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi52YWx1ZX0+PC9pPjwvc3Bhbj47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uVUkgPSA8c3BhbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9Pk9wZW48L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuICg8c3BhbiA+XG4gICAgICAgICAgICAgICAgICAgIHttb2RhbEJ1dHRvblVJfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e292ZXJsYXl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGFsUGFuZWxVSX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdfQ==
