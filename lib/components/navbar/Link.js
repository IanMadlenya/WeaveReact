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

        return _this;
    }

    _createClass(Link, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.title.addImmediateCallback(this, this.forceUpdate);
            this.settings.iconName.addImmediateCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.title.removeCallback(this, this.forceUpdate);
            this.settings.iconName.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return true;
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
                        { style: styleObject, href: '#' + this.props.pageName },
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
                        { style: styleObject, href: '#' + this.props.pageName },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTTs7O0FBRUYsYUFGRSxJQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsTUFFaUI7OzJFQUZqQixpQkFHUSxRQURTOztBQUVmLGNBQUssUUFBTCxHQUFnQixNQUFLLEtBQUwsQ0FBVyxRQUFYLENBRkQ7OztLQUFuQjs7aUJBRkU7OzRDQVNrQjtBQUNoQixpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixvQkFBcEIsQ0FBeUMsSUFBekMsRUFBK0MsS0FBSyxXQUFMLENBQS9DLENBRGdCO0FBRWhCLGlCQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLG9CQUF2QixDQUE0QyxJQUE1QyxFQUFrRCxLQUFLLFdBQUwsQ0FBbEQsQ0FGZ0I7QUFHaEIsa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW5CLENBQXdDLG9CQUF4QyxDQUE2RCxJQUE3RCxFQUFtRSxLQUFLLFdBQUwsQ0FBbkUsQ0FIZ0I7Ozs7K0NBT0c7QUFDbkIsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsY0FBcEIsQ0FBbUMsSUFBbkMsRUFBeUMsS0FBSyxXQUFMLENBQXpDLENBRG1CO0FBRW5CLGlCQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLGNBQXZCLENBQXNDLElBQXRDLEVBQTRDLEtBQUssV0FBTCxDQUE1QyxDQUZtQjtBQUduQixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBbkIsQ0FBd0MsY0FBeEMsQ0FBdUQsSUFBdkQsRUFBNkQsS0FBSyxXQUFMLENBQTdELENBSG1COzs7O2tEQU1HLFdBQVU7Ozs4Q0FJZCxXQUFVO0FBQzVCLG1CQUFPLElBQVAsQ0FENEI7Ozs7aUNBS3ZCO0FBQ0wsZ0JBQUksUUFBUSxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLENBRFA7QUFFTCxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQW9CO0FBQ25CLHdCQUFRLEVBQVIsQ0FEbUI7YUFBdkI7QUFHQSxnQkFBSSxjQUFjLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsV0FBcEIsQ0FBZ0MsSUFBaEMsRUFBcUMsSUFBckMsQ0FBZCxDQUxDO0FBTUwsZ0JBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFxQjs7QUFFckIsdUJBQVM7O3NCQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFYO29CQUNHOzswQkFBRyxPQUFPLFdBQVAsRUFBb0IsTUFBUSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQVgsRUFBckM7d0JBQ0k7OzhCQUFHLFdBQWEsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixFQUFoQjs7eUJBREo7d0JBRUssS0FGTDtxQkFESDtpQkFBVCxDQUZxQjthQUF6QixNQVNPO0FBQ0gsdUJBQVE7O3NCQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFYO29CQUNJOzswQkFBRyxPQUFPLFdBQVAsRUFBb0IsTUFBUSxNQUFNLEtBQUssS0FBTCxDQUFXLFFBQVgsRUFBckM7d0JBQ0k7OzhCQUFHLFdBQWEsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixFQUFoQjs7eUJBREo7d0JBRUssS0FGTDtxQkFESjtpQkFBUixDQURHO2FBVFA7Ozs7V0FyQ0Y7RUFBYSxnQkFBTSxTQUFOOztBQXlEbkIsTUFBTSxhQUFOLENBQW9CLHdCQUFwQixFQUE4QyxJQUE5QyxFQUFtRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBcEQ7a0JBQ2UiLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuXG4gICAgfVxuXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG5cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciB0aXRsZSA9IHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuaWNvbk9ubHkpe1xuICAgICAgICAgICAgdGl0bGUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xuXG4gICAgICAgICAgICByZXR1cm4gKCA8bGkgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3N0eWxlT2JqZWN0fSBocmVmID0geycjJyArIHRoaXMucHJvcHMucGFnZU5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDxsaSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17c3R5bGVPYmplY3R9IGhyZWYgPSB7JyMnICsgdGhpcy5wcm9wcy5wYWdlTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lID0ge3RoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWV9PiA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5MaW5rXCIsIExpbmssW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuIl19
