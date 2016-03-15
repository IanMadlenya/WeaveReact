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
        if (_this.props.children) _this.settings.title.value = _this.props.children;
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
            if (this.props.children !== nextProps.children) this.settings.title.value = nextProps.children;
        }
    }, {
        key: "render",
        value: function render() {
            var title = this.settings.title.value;
            var hrefLink = title.toLowerCase();
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
                        { style: styleObject, href: '#' + hrefLink },
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
                        { style: styleObject, href: '#' + hrefLink },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTTs7O0FBRUYsYUFGRSxJQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsTUFFaUI7OzJFQUZqQixpQkFHUSxRQURTOztBQUVmLGNBQUssUUFBTCxHQUFnQixNQUFLLEtBQUwsQ0FBVyxRQUFYLENBRkQ7QUFHZixjQUFLLFlBQUwsR0FBb0IsTUFBSyxZQUFMLENBQWtCLElBQWxCLE9BQXBCLENBSGU7QUFJZixjQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCLENBSmU7QUFLZixZQUFHLE1BQUssS0FBTCxDQUFXLFFBQVgsRUFBb0IsTUFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixHQUE0QixNQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW5EO3FCQUxlO0tBQW5COztpQkFGRTs7NENBVWtCO0FBQ2hCLGlCQUFLLFlBQUwsR0FEZ0I7Ozs7dUNBSUw7QUFDWCxpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixvQkFBcEIsQ0FBeUMsSUFBekMsRUFBK0MsS0FBSyxXQUFMLENBQS9DLENBRFc7QUFFWCxpQkFBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixvQkFBdkIsQ0FBNEMsSUFBNUMsRUFBa0QsS0FBSyxXQUFMLENBQWxELENBRlc7QUFHWCxrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBbkIsQ0FBd0Msb0JBQXhDLENBQTZELElBQTdELEVBQW1FLEtBQUssV0FBTCxDQUFuRSxDQUhXOzs7OzBDQU9HO0FBQ2QsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsY0FBcEIsQ0FBbUMsSUFBbkMsRUFBeUMsS0FBSyxXQUFMLENBQXpDLENBRGM7QUFFZCxpQkFBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixjQUF2QixDQUFzQyxJQUF0QyxFQUE0QyxLQUFLLFdBQUwsQ0FBNUMsQ0FGYztBQUdkLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFuQixDQUF3QyxjQUF4QyxDQUF1RCxJQUF2RCxFQUE2RCxLQUFLLFdBQUwsQ0FBN0QsQ0FIYzs7OzsrQ0FNSztBQUNuQixpQkFBSyxlQUFMLEdBRG1COzs7O2tEQUtHLFdBQVU7QUFDaEMsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFBbUI7QUFDMUMsb0JBQUcsVUFBVSxRQUFWLEVBQW1CO0FBQ2xCLHlCQUFLLGVBQUwsR0FEa0I7QUFFbEIseUJBQUssUUFBTCxHQUFnQixVQUFVLFFBQVYsQ0FGRTtBQUdsQix5QkFBSyxZQUFMLEdBSGtCO2lCQUF0QjthQURKO0FBT0EsZ0JBQUcsS0FBSyxLQUFMLENBQVcsS0FBWCxLQUFxQixVQUFVLEtBQVYsRUFBZ0I7O0FBQ3BDLG9CQUFHLFVBQVUsS0FBVixFQUFnQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFVBQXBCLENBQStCLEtBQS9CLEdBQXVDLFVBQVUsS0FBVixDQUExRDthQURKO0FBR0EsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFDdkIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixHQUE0QixVQUFVLFFBQVYsQ0FEaEM7Ozs7aUNBT0s7QUFDTCxnQkFBSSxRQUFRLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FEUDtBQUVMLGdCQUFJLFdBQVcsTUFBTSxXQUFOLEVBQVgsQ0FGQztBQUdMLGdCQUFHLEtBQUssS0FBTCxDQUFXLFFBQVgsRUFBb0I7QUFDbkIsd0JBQVEsRUFBUixDQURtQjthQUF2QjtBQUdBLGdCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixDQUFnQyxJQUFoQyxFQUFxQyxJQUFyQyxDQUFkLENBTkM7QUFPTCxnQkFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCOztBQUVyQix1QkFBUzs7c0JBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQVg7b0JBQ0c7OzBCQUFHLE9BQU8sV0FBUCxFQUFvQixNQUFRLE1BQU0sUUFBTixFQUEvQjt3QkFDSTs7OEJBQUcsV0FBYSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEVBQWhCOzt5QkFESjt3QkFFSyxLQUZMO3FCQURIO2lCQUFULENBRnFCO2FBQXpCLE1BU087QUFDSCx1QkFBUTs7c0JBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQVg7b0JBQ0k7OzBCQUFHLE9BQU8sV0FBUCxFQUFvQixNQUFRLE1BQU0sUUFBTixFQUEvQjt3QkFDSTs7OEJBQUcsV0FBYSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEVBQWhCOzt5QkFESjt3QkFFSyxLQUZMO3FCQURKO2lCQUFSLENBREc7YUFUUDs7OztXQXpERjtFQUFhLGdCQUFNLFNBQU47O0FBNkVuQixNQUFNLGFBQU4sQ0FBb0Isd0JBQXBCLEVBQThDLElBQTlDLEVBQW1ELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFwRDtrQkFDZSIsImZpbGUiOiJMaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuKXRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWUgPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIGFkZENhbGxiYWNrcygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnN0eWxlKXRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlID0gbmV4dFByb3BzLmNoaWxkcmVuO1xuICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZTtcbiAgICAgICAgdmFyIGhyZWZMaW5rID0gdGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pY29uT25seSl7XG4gICAgICAgICAgICB0aXRsZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzQWN0aXZlKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoIDxsaSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17c3R5bGVPYmplY3R9IGhyZWYgPSB7JyMnICsgaHJlZkxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDxsaSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17c3R5bGVPYmplY3R9IGhyZWYgPSB7JyMnICsgaHJlZkxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTGlua1wiLCBMaW5rLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdfQ==
