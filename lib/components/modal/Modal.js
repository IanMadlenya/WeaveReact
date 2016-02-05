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
        if (_this.props.title) _this.settings.panelConfig.title.value = _this.props.title;

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
                    { sessionOpen: this.settings.open, settings: this.settings.panelConfig },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT007OztBQUVGLGFBRkUsS0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE9BRWlCOzsyRUFGakIsa0JBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLDJCQUExQyxDQUZEO0FBR2YsWUFBRyxNQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLE1BQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsS0FBMUIsQ0FBZ0MsS0FBaEMsR0FBeUMsTUFBSyxLQUFMLENBQVcsS0FBWCxDQUE5RDs7QUFHQSxjQUFLLFNBQUwsR0FBaUIsTUFBSyxTQUFMLENBQWUsSUFBZixPQUFqQixDQU5lOzs7S0FBbkI7O2lCQUZFOzs0Q0FZaUI7QUFDZixpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixvQkFBbkIsQ0FBd0MsSUFBeEMsRUFBOEMsS0FBSyxXQUFMLENBQTlDLENBRGU7QUFFZixpQkFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixvQkFBekIsQ0FBOEMsSUFBOUMsRUFBb0QsS0FBSyxXQUFMLENBQXBELENBRmU7Ozs7K0NBT0s7QUFDcEIsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsY0FBbkIsQ0FBa0MsSUFBbEMsRUFBd0MsS0FBSyxXQUFMLENBQXhDLENBRG9CO0FBRXBCLGlCQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLGNBQXpCLENBQXdDLElBQXhDLEVBQThDLEtBQUssV0FBTCxDQUE5QyxDQUZvQjs7OztvQ0FNYjtBQUNQLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQW5CLEdBQTJCLElBQTNCLENBRE87Ozs7aUNBS0Y7QUFDVCxnQkFBSSxTQUFTLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsQ0FESjtBQUVULGdCQUFJLFVBQVUsZ0JBQU0sZ0JBQU4sQ0FBdUIsTUFBdkIsQ0FBVixDQUZLO0FBR1QsZ0JBQUksUUFBUSxnQkFBTSxLQUFOLENBQVksTUFBWixDQUFSLENBSEs7QUFJVCxnQkFBSSxnQkFBZ0IsRUFBaEIsQ0FKSztBQUtULGdCQUFJLGVBQWUsRUFBZixDQUxLO0FBTVQsZ0JBQUcsTUFBSCxFQUFVO0FBQ04sK0JBQWU7O3NCQUFhLGFBQWEsS0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixVQUFVLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBeEQ7b0JBQ00sS0FBSyxLQUFMLENBQVcsUUFBWDtpQkFEckIsQ0FETTthQUFWOztBQU1BLGdCQUFJLENBQUMsS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFvQjtBQUNyQixvQkFBRyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEtBQXpCLEVBQStCO0FBQzlCLG9DQUFnQjs7MEJBQU0sT0FBTyxFQUFDLFFBQU8sU0FBUCxFQUFSLEVBQTJCLFNBQVMsS0FBSyxTQUFMLEVBQTFDO3dCQUEwRCxxQ0FBRyxXQUFXLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsS0FBekIsRUFBZCxDQUExRDtxQkFBaEIsQ0FEOEI7aUJBQWxDLE1BR0k7QUFDQSxvQ0FBZ0I7OzBCQUFNLE1BQUssUUFBTCxFQUFjLFdBQVUsaUJBQVYsRUFBNEIsU0FBUyxLQUFLLFNBQUwsRUFBekQ7O3FCQUFoQixDQURBO2lCQUhKO2FBREo7QUFTQSxtQkFBUTs7O2dCQUNTLGFBRFQ7Z0JBR1EsdUNBQUssT0FBTyxPQUFQLEVBQUwsQ0FIUjtnQkFJUTs7c0JBQUssT0FBTyxLQUFQLEVBQUw7b0JBQ0ssWUFETDtpQkFKUjthQUFSLENBckJTOzs7O1dBOUJQO0VBQWMsZ0JBQU0sU0FBTjs7a0JBK0RMIiwiZmlsZSI6Ik1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBNb2RhbENvbmZpZyBmcm9tIFwiLi9Nb2RhbENvbmZpZ1wiO1xuaW1wb3J0IE1vZGFsUGFuZWwgZnJvbSBcIi4vTW9kYWxQYW5lbFwiO1xuXG5cblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE1vZGFsQ29uZmlnKCk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudGl0bGUpIHRoaXMuc2V0dGluZ3MucGFuZWxDb25maWcudGl0bGUudmFsdWUgPSAgdGhpcy5wcm9wcy50aXRsZTtcblxuXG4gICAgICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5idXR0b25JY29uLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKVxuICAgICAgICB0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSlcbiAgICB9XG5cblxuICAgIG9wZW5Nb2RhbCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgIHZhciBpc09wZW4gPSB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgdmFyIG92ZXJsYXkgPSBTdHlsZS5vdmVybGF5Q29udGFpbmVyKGlzT3Blbik7XG4gICAgdmFyIG1vZGFsID0gU3R5bGUubW9kYWwoaXNPcGVuKTtcbiAgICB2YXIgbW9kYWxCdXR0b25VSSA9IFwiXCI7XG4gICAgdmFyIG1vZGFsUGFuZWxVSSA9IFwiXCI7XG4gICAgaWYoaXNPcGVuKXtcbiAgICAgICAgbW9kYWxQYW5lbFVJID0gPE1vZGFsUGFuZWwgIHNlc3Npb25PcGVuPXt0aGlzLnNldHRpbmdzLm9wZW59IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnBhbmVsQ29uZmlnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWxQYW5lbD5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvcHMua2V5UHJlc3Mpe1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24udmFsdWUpe1xuICAgICAgICAgICAgbW9kYWxCdXR0b25VSSA9IDxzcGFuIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17dGhpcy5vcGVuTW9kYWx9PjxpIGNsYXNzTmFtZT17dGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnZhbHVlfT48L2k+PC9zcGFuPjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbW9kYWxCdXR0b25VSSA9IDxzcGFuIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+T3Blbjwvc3Bhbj47XG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gKDxzcGFuID5cbiAgICAgICAgICAgICAgICAgICAge21vZGFsQnV0dG9uVUl9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17b3ZlcmxheX0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kYWxQYW5lbFVJfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl19
