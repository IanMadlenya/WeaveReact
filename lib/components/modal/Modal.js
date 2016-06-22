"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

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

        _ComponentManager2.default.initialize(_this);
        _this.openModal = _this.openModal.bind(_this);

        return _this;
    }

    _createClass(Modal, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _ComponentManager2.default.componentWillUnmount(this);
        }
    }, {
        key: "openModal",
        value: function openModal() {
            this.settings.open.value = true;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _ComponentManager2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "render",
        value: function render() {
            var isOpen = this.settings.open.value;
            var overlay = Style.overlayContainer(isOpen);
            var modal = Style.modal(isOpen);
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

Weave.registerClass(Modal, ["weavereact.Modal"], [weavejs.api.core.ILinkableObject], "Modal");
_ComponentManager2.default.registerToolConfig(Modal, _ModalConfig2.default);
_ComponentManager2.default.registerToolImplementation("weavereact.ModalConfig", Modal);

exports.default = Modal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT007OztBQUVGLGFBRkUsS0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE9BRWlCOzsyRUFGakIsa0JBR1EsUUFEUzs7QUFFZixtQ0FBaUIsVUFBakIsUUFGZTtBQUdmLGNBQUssU0FBTCxHQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLENBSGU7OztLQUFuQjs7aUJBRkU7OytDQVNvQjtBQUNsQix1Q0FBaUIsb0JBQWpCLENBQXNDLElBQXRDLEVBRGtCOzs7O29DQUtYO0FBQ1AsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsR0FBMkIsSUFBM0IsQ0FETzs7OztrREFJZSxXQUFVO0FBQy9CLHVDQUFpQix5QkFBakIsQ0FBMkMsSUFBM0MsRUFBZ0QsU0FBaEQsRUFEK0I7Ozs7aUNBSzNCO0FBQ0wsZ0JBQUksU0FBUyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQW5CLENBRFI7QUFFTCxnQkFBSSxVQUFVLE1BQU0sZ0JBQU4sQ0FBdUIsTUFBdkIsQ0FBVixDQUZDO0FBR0wsZ0JBQUksUUFBUSxNQUFNLEtBQU4sQ0FBWSxNQUFaLENBQVIsQ0FIQztBQUlMLGdCQUFJLGdCQUFnQixFQUFoQixDQUpDO0FBS0wsZ0JBQUksZUFBZSxFQUFmLENBTEM7QUFNTCxnQkFBRyxNQUFILEVBQVU7QUFDTiwrQkFBZTs7c0JBQVksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQW1CLGFBQWEsS0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixVQUFVLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBakY7b0JBQ00sS0FBSyxLQUFMLENBQVcsUUFBWDtpQkFEckIsQ0FETTthQUFWOztBQU1BLGdCQUFJLENBQUMsS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFvQjtBQUNyQixvQkFBRyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEtBQXpCLEVBQStCO0FBQzlCLG9DQUFnQjs7MEJBQU0sT0FBTyxFQUFDLFFBQU8sU0FBUCxFQUFSLEVBQTJCLFNBQVMsS0FBSyxTQUFMLEVBQTFDO3dCQUEwRCxxQ0FBRyxXQUFXLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsS0FBekIsRUFBZCxDQUExRDtxQkFBaEIsQ0FEOEI7aUJBQWxDLE1BR0k7QUFDQSxvQ0FBZ0I7OzBCQUFNLE1BQUssUUFBTCxFQUFjLFdBQVUsaUJBQVYsRUFBNEIsU0FBUyxLQUFLLFNBQUwsRUFBekQ7O3FCQUFoQixDQURBO2lCQUhKO2FBREo7QUFTQSxtQkFBUTs7O2dCQUNTLGFBRFQ7Z0JBR1EsdUNBQUssT0FBTyxPQUFQLEVBQUwsQ0FIUjtnQkFJUTs7c0JBQUssT0FBTyxLQUFQLEVBQUw7b0JBQ0ssWUFETDtpQkFKUjthQUFSLENBckJLOzs7O1dBdkJQO0VBQWMsZ0JBQU0sU0FBTjs7QUF3RHBCLE1BQU0sYUFBTixDQUFxQixLQUFyQixFQUEyQixDQUFDLGtCQUFELENBQTNCLEVBQWdELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRCxFQUFtRixPQUFuRjtBQUNBLDJCQUFpQixrQkFBakIsQ0FBb0MsS0FBcEM7QUFDQSwyQkFBaUIsMEJBQWpCLENBQTRDLHdCQUE1QyxFQUFxRSxLQUFyRTs7a0JBRWUiLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBNb2RhbENvbmZpZyBmcm9tIFwiLi9Nb2RhbENvbmZpZ1wiO1xuaW1wb3J0IE1vZGFsUGFuZWwgZnJvbSBcIi4vTW9kYWxQYW5lbFwiO1xuXG5cblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmluaXRpYWxpemUodGhpcyk7XG4gICAgICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY29tcG9uZW50V2lsbFVubW91bnQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBvcGVuTW9kYWwoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModGhpcyxuZXh0UHJvcHMpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgaXNPcGVuID0gdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IFN0eWxlLm92ZXJsYXlDb250YWluZXIoaXNPcGVuKTtcbiAgICAgICAgdmFyIG1vZGFsID0gU3R5bGUubW9kYWwoaXNPcGVuKTtcbiAgICAgICAgdmFyIG1vZGFsQnV0dG9uVUkgPSBcIlwiO1xuICAgICAgICB2YXIgbW9kYWxQYW5lbFVJID0gXCJcIjtcbiAgICAgICAgaWYoaXNPcGVuKXtcbiAgICAgICAgICAgIG1vZGFsUGFuZWxVSSA9IDxNb2RhbFBhbmVsIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSAgc2Vzc2lvbk9wZW49e3RoaXMuc2V0dGluZ3Mub3Blbn0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MucGFuZWxDb25maWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsUGFuZWw+XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMucHJvcHMua2V5UHJlc3Mpe1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBtb2RhbEJ1dHRvblVJID0gPHNwYW4gc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+PGkgY2xhc3NOYW1lPXt0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24udmFsdWV9PjwvaT48L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBtb2RhbEJ1dHRvblVJID0gPHNwYW4gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5PcGVuPC9zcGFuPjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPHNwYW4gPlxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGFsQnV0dG9uVUl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e292ZXJsYXl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kYWxQYW5lbFVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICB9XG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoIE1vZGFsLFtcIndlYXZlcmVhY3QuTW9kYWxcIl0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSxcIk1vZGFsXCIpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoTW9kYWwsTW9kYWxDb25maWcpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTW9kYWxDb25maWdcIixNb2RhbCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl19