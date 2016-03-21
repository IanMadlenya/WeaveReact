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

Weave.registerClass("weavereact.Modal", Modal, [weavejs.api.core.ILinkableObject]);
_ComponentManager2.default.registerToolConfig(Modal, _ModalConfig2.default);
_ComponentManager2.default.registerToolImplementation("weavereact.ModalConfig", Modal);

exports.default = Modal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT007OztBQUVGLGFBRkUsS0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE9BRWlCOzsyRUFGakIsa0JBR1EsUUFEUzs7QUFFZixtQ0FBaUIsVUFBakIsUUFGZTtBQUdmLGNBQUssU0FBTCxHQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLENBSGU7OztLQUFuQjs7aUJBRkU7OytDQVNvQjtBQUNsQix1Q0FBaUIsb0JBQWpCLENBQXNDLElBQXRDLEVBRGtCOzs7O29DQUtYO0FBQ1AsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsR0FBMkIsSUFBM0IsQ0FETzs7OztrREFJZSxXQUFVO0FBQy9CLHVDQUFpQix5QkFBakIsQ0FBMkMsSUFBM0MsRUFBZ0QsU0FBaEQsRUFEK0I7Ozs7aUNBSzNCO0FBQ0wsZ0JBQUksU0FBUyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQW5CLENBRFI7QUFFTCxnQkFBSSxVQUFVLE1BQU0sZ0JBQU4sQ0FBdUIsTUFBdkIsQ0FBVixDQUZDO0FBR0wsZ0JBQUksUUFBUSxNQUFNLEtBQU4sQ0FBWSxNQUFaLENBQVIsQ0FIQztBQUlMLGdCQUFJLGdCQUFnQixFQUFoQixDQUpDO0FBS0wsZ0JBQUksZUFBZSxFQUFmLENBTEM7QUFNTCxnQkFBRyxNQUFILEVBQVU7QUFDTiwrQkFBZTs7c0JBQVksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQW1CLGFBQWEsS0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixVQUFVLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBakY7b0JBQ00sS0FBSyxLQUFMLENBQVcsUUFBWDtpQkFEckIsQ0FETTthQUFWOztBQU1BLGdCQUFJLENBQUMsS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFvQjtBQUNyQixvQkFBRyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEtBQXpCLEVBQStCO0FBQzlCLG9DQUFnQjs7MEJBQU0sT0FBTyxFQUFDLFFBQU8sU0FBUCxFQUFSLEVBQTJCLFNBQVMsS0FBSyxTQUFMLEVBQTFDO3dCQUEwRCxxQ0FBRyxXQUFXLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsS0FBekIsRUFBZCxDQUExRDtxQkFBaEIsQ0FEOEI7aUJBQWxDLE1BR0k7QUFDQSxvQ0FBZ0I7OzBCQUFNLE1BQUssUUFBTCxFQUFjLFdBQVUsaUJBQVYsRUFBNEIsU0FBUyxLQUFLLFNBQUwsRUFBekQ7O3FCQUFoQixDQURBO2lCQUhKO2FBREo7QUFTQSxtQkFBUTs7O2dCQUNTLGFBRFQ7Z0JBR1EsdUNBQUssT0FBTyxPQUFQLEVBQUwsQ0FIUjtnQkFJUTs7c0JBQUssT0FBTyxLQUFQLEVBQUw7b0JBQ0ssWUFETDtpQkFKUjthQUFSLENBckJLOzs7O1dBdkJQO0VBQWMsZ0JBQU0sU0FBTjs7QUF3RHBCLE1BQU0sYUFBTixDQUFvQixrQkFBcEIsRUFBd0MsS0FBeEMsRUFBOEMsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQS9DO0FBQ0EsMkJBQWlCLGtCQUFqQixDQUFvQyxLQUFwQztBQUNBLDJCQUFpQiwwQkFBakIsQ0FBNEMsd0JBQTVDLEVBQXFFLEtBQXJFOztrQkFFZSIsImZpbGUiOiJNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IE1vZGFsQ29uZmlnIGZyb20gXCIuL01vZGFsQ29uZmlnXCI7XG5pbXBvcnQgTW9kYWxQYW5lbCBmcm9tIFwiLi9Nb2RhbFBhbmVsXCI7XG5cblxuXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuaW5pdGlhbGl6ZSh0aGlzKTtcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jb21wb25lbnRXaWxsVW5tb3VudCh0aGlzKTtcbiAgICB9XG5cblxuICAgIG9wZW5Nb2RhbCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgIENvbXBvbmVudE1hbmFnZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBpc09wZW4gPSB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgICAgIHZhciBvdmVybGF5ID0gU3R5bGUub3ZlcmxheUNvbnRhaW5lcihpc09wZW4pO1xuICAgICAgICB2YXIgbW9kYWwgPSBTdHlsZS5tb2RhbChpc09wZW4pO1xuICAgICAgICB2YXIgbW9kYWxCdXR0b25VSSA9IFwiXCI7XG4gICAgICAgIHZhciBtb2RhbFBhbmVsVUkgPSBcIlwiO1xuICAgICAgICBpZihpc09wZW4pe1xuICAgICAgICAgICAgbW9kYWxQYW5lbFVJID0gPE1vZGFsUGFuZWwgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9ICBzZXNzaW9uT3Blbj17dGhpcy5zZXR0aW5ncy5vcGVufSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5wYW5lbENvbmZpZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWxQYW5lbD5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5rZXlQcmVzcyl7XG4gICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIG1vZGFsQnV0dG9uVUkgPSA8c3BhbiBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT48aSBjbGFzc05hbWU9e3RoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi52YWx1ZX0+PC9pPjwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIG1vZGFsQnV0dG9uVUkgPSA8c3BhbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9Pk9wZW48L3NwYW4+O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8c3BhbiA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kYWxCdXR0b25VSX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17b3ZlcmxheX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RhbFBhbmVsVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gIH1cbn1cblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuTW9kYWxcIiwgTW9kYWwsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhNb2RhbCxNb2RhbENvbmZpZyk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Nb2RhbENvbmZpZ1wiLE1vZGFsKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXX0=
