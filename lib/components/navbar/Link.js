"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_React$Component) {
    _inherits(Link, _React$Component);

    function Link(props) {
        _classCallCheck(this, Link);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this, props));

        _this.settings = _this.props.settings;
        _this.addCallbacks = _this.addCallbacks.bind(_this);
        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
        return _this;
    }

    _createClass(Link, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.addCallbacks();
        }
    }, {
        key: "addCallbacks",
        value: function addCallbacks() {
            this.settings.title.addImmediateCallback(this, this.forceUpdate);
            this.settings.iconName.addImmediateCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "removeCallbacks",
        value: function removeCallbacks() {
            this.settings.title.removeCallback(this, this.forceUpdate);
            this.settings.iconName.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.removeCallbacks();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                if (nextProps.settings) {
                    this.removeCallbacks();
                    this.settings = nextProps.settings;
                    this.addCallbacks();
                }
            }
            if (this.props.style !== nextProps.style) {
                // user style added through UI is Sessioned
                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var title = this.settings.title.value;
            if (this.props.iconOnly) {
                title = "";
            }
            var styleObject = this.settings.style.getStyleFor(null, true);
            if (this.props.isActive) {

                return _react2.default.createElement(
                    "li",
                    { style: this.props.style },
                    _react2.default.createElement(
                        "a",
                        { style: styleObject, href: '#' + title.toLowerCase() },
                        _react2.default.createElement(
                            "i",
                            { className: this.settings.iconName.value },
                            " "
                        ),
                        title
                    )
                );
            } else {
                return _react2.default.createElement(
                    "li",
                    { style: this.props.style },
                    _react2.default.createElement(
                        "a",
                        { style: styleObject, href: '#' + title.toLowerCase() },
                        _react2.default.createElement(
                            "i",
                            { className: this.settings.iconName.value },
                            " "
                        ),
                        title
                    )
                );
            }
        }
    }]);

    return Link;
}(_react2.default.Component);

Weave.registerClass("weavereact.navbar.Link", Link, [weavejs.api.core.ILinkableObject]);
exports.default = Link;
//# sourceMappingURL=data:application/json;base64,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QUFNLFdBQU4sRUFBTixFQUEvQjt3QkFDSTs7OEJBQUcsV0FBYSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEVBQWhCOzt5QkFESjt3QkFFSyxLQUZMO3FCQURKO2lCQUFSLENBREc7YUFUUDs7OztXQXJERjtFQUFhLGdCQUFNLFNBQU47O0FBeUVuQixNQUFNLGFBQU4sQ0FBb0Isd0JBQXBCLEVBQThDLElBQTlDLEVBQW1ELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFwRDtrQkFDZSIsImZpbGUiOiJMaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIGFkZENhbGxiYWNrcygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnN0eWxlKXRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pY29uT25seSl7XG4gICAgICAgICAgICB0aXRsZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzQWN0aXZlKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoIDxsaSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17c3R5bGVPYmplY3R9IGhyZWYgPSB7JyMnICsgdGl0bGUudG9Mb3dlckNhc2UoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lID0ge3RoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWV9PiA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoPGxpIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtzdHlsZU9iamVjdH0gaHJlZiA9IHsnIycgKyB0aXRsZS50b0xvd2VyQ2FzZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSB7dGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZX0+IDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QubmF2YmFyLkxpbmtcIiwgTGluayxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXX0=
