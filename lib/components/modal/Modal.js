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
            this.settings.open.addGroupedCallback(this, this.forceUpdate);
            this.settings.buttonIcon.addGroupedCallback(this, this.forceUpdate);
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
                this.settings.open.addGroupedCallback(this, this.forceUpdate);
                this.settings.buttonIcon.addGroupedCallback(this, this.forceUpdate);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT007OztBQUVGLGFBRkUsS0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE9BRWlCOzsyRUFGakIsa0JBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLDJCQUExQyxDQUZEO0FBR2YsY0FBSyxTQUFMLEdBQWlCLE1BQUssU0FBTCxDQUFlLElBQWYsT0FBakIsQ0FIZTs7O0tBQW5COztpQkFGRTs7NENBU2lCO0FBQ2YsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsa0JBQW5CLENBQXNDLElBQXRDLEVBQTRDLEtBQUssV0FBTCxDQUE1QyxDQURlO0FBRWYsaUJBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsa0JBQXpCLENBQTRDLElBQTVDLEVBQWtELEtBQUssV0FBTCxDQUFsRCxDQUZlOzs7OytDQU9LO0FBQ3BCLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLGNBQW5CLENBQWtDLElBQWxDLEVBQXdDLEtBQUssV0FBTCxDQUF4QyxDQURvQjtBQUVwQixpQkFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixjQUF6QixDQUF3QyxJQUF4QyxFQUE4QyxLQUFLLFdBQUwsQ0FBOUMsQ0FGb0I7Ozs7b0NBTWI7QUFDUCxpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixHQUEyQixJQUEzQixDQURPOzs7O2tEQUllLFdBQVU7QUFDaEMsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFBbUI7QUFDMUMscUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsY0FBbkIsQ0FBa0MsSUFBbEMsRUFBd0MsS0FBSyxXQUFMLENBQXhDLENBRDBDO0FBRTFDLHFCQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLGNBQXpCLENBQXdDLElBQXhDLEVBQThDLEtBQUssV0FBTCxDQUE5QyxDQUYwQztBQUcxQyxxQkFBSyxRQUFMLEdBQWdCLFVBQVUsUUFBVixDQUgwQjtBQUkxQyxxQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixrQkFBbkIsQ0FBc0MsSUFBdEMsRUFBNEMsS0FBSyxXQUFMLENBQTVDLENBSjBDO0FBSzFDLHFCQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLGtCQUF6QixDQUE0QyxJQUE1QyxFQUFrRCxLQUFLLFdBQUwsQ0FBbEQsQ0FMMEM7YUFBOUM7Ozs7aUNBVUs7QUFDVCxnQkFBSSxTQUFTLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsQ0FESjtBQUVULGdCQUFJLFVBQVUsZ0JBQU0sZ0JBQU4sQ0FBdUIsTUFBdkIsQ0FBVixDQUZLO0FBR1QsZ0JBQUksUUFBUSxnQkFBTSxLQUFOLENBQVksTUFBWixDQUFSLENBSEs7QUFJVCxnQkFBSSxnQkFBZ0IsRUFBaEIsQ0FKSztBQUtULGdCQUFJLGVBQWUsRUFBZixDQUxLO0FBTVQsZ0JBQUcsTUFBSCxFQUFVO0FBQ04sK0JBQWU7O3NCQUFZLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFtQixhQUFhLEtBQUssUUFBTCxDQUFjLElBQWQsRUFBb0IsVUFBVSxLQUFLLFFBQUwsQ0FBYyxXQUFkLEVBQWpGO29CQUNNLEtBQUssS0FBTCxDQUFXLFFBQVg7aUJBRHJCLENBRE07YUFBVjs7QUFNQSxnQkFBSSxDQUFDLEtBQUssS0FBTCxDQUFXLFFBQVgsRUFBb0I7QUFDckIsb0JBQUcsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixLQUF6QixFQUErQjtBQUM5QixvQ0FBZ0I7OzBCQUFNLE9BQU8sRUFBQyxRQUFPLFNBQVAsRUFBUixFQUEyQixTQUFTLEtBQUssU0FBTCxFQUExQzt3QkFBMEQscUNBQUcsV0FBVyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEtBQXpCLEVBQWQsQ0FBMUQ7cUJBQWhCLENBRDhCO2lCQUFsQyxNQUdJO0FBQ0Esb0NBQWdCOzswQkFBTSxNQUFLLFFBQUwsRUFBYyxXQUFVLGlCQUFWLEVBQTRCLFNBQVMsS0FBSyxTQUFMLEVBQXpEOztxQkFBaEIsQ0FEQTtpQkFISjthQURKO0FBU0EsbUJBQVE7OztnQkFDUyxhQURUO2dCQUdRLHVDQUFLLE9BQU8sT0FBUCxFQUFMLENBSFI7Z0JBSVE7O3NCQUFLLE9BQU8sS0FBUCxFQUFMO29CQUNLLFlBREw7aUJBSlI7YUFBUixDQXJCUzs7OztXQXJDUDtFQUFjLGdCQUFNLFNBQU47O2tCQXNFTCIsImZpbGUiOiJNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTW9kYWxDb25maWcgZnJvbSBcIi4vTW9kYWxDb25maWdcIjtcbmltcG9ydCBNb2RhbFBhbmVsIGZyb20gXCIuL01vZGFsUGFuZWxcIjtcblxuXG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBNb2RhbENvbmZpZygpO1xuICAgICAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMub3Blbk1vZGFsLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgb3Blbk1vZGFsKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgdmFyIGlzT3BlbiA9IHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICB2YXIgb3ZlcmxheSA9IFN0eWxlLm92ZXJsYXlDb250YWluZXIoaXNPcGVuKTtcbiAgICB2YXIgbW9kYWwgPSBTdHlsZS5tb2RhbChpc09wZW4pO1xuICAgIHZhciBtb2RhbEJ1dHRvblVJID0gXCJcIjtcbiAgICB2YXIgbW9kYWxQYW5lbFVJID0gXCJcIjtcbiAgICBpZihpc09wZW4pe1xuICAgICAgICBtb2RhbFBhbmVsVUkgPSA8TW9kYWxQYW5lbCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gIHNlc3Npb25PcGVuPXt0aGlzLnNldHRpbmdzLm9wZW59IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnBhbmVsQ29uZmlnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWxQYW5lbD5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvcHMua2V5UHJlc3Mpe1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24udmFsdWUpe1xuICAgICAgICAgICAgbW9kYWxCdXR0b25VSSA9IDxzcGFuIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17dGhpcy5vcGVuTW9kYWx9PjxpIGNsYXNzTmFtZT17dGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnZhbHVlfT48L2k+PC9zcGFuPjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbW9kYWxCdXR0b25VSSA9IDxzcGFuIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+T3Blbjwvc3Bhbj47XG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gKDxzcGFuID5cbiAgICAgICAgICAgICAgICAgICAge21vZGFsQnV0dG9uVUl9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17b3ZlcmxheX0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kYWxQYW5lbFVJfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl19
