'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

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
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.settings.title.addImmediateCallback(this, this.forceUpdate);
            this.settings.iconName.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.settings.title.removeCallback(this, this.forceUpdate);
            this.settings.iconName.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return true;
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.isActive) {
                return _react2.default.createElement(
                    'li',
                    { className: 'active' },
                    _react2.default.createElement(
                        'a',
                        { href: '#' + this.props.pageName },
                        _react2.default.createElement(
                            'i',
                            { className: this.settings.iconName.value },
                            ' '
                        ),
                        this.settings.title.value,
                        _react2.default.createElement(
                            'span',
                            { className: 'sr-only' },
                            ' (current) '
                        )
                    )
                );
            } else {
                return _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#' + this.props.pageName },
                        _react2.default.createElement(
                            'i',
                            { className: this.settings.iconName.value },
                            ' '
                        ),
                        this.settings.title.value
                    )
                );
            }
        }
    }]);

    return Link;
}(_react2.default.Component);

Weave.registerClass("weavereact.navbar.Link", Link, [weavejs.api.core.ILinkableObject]);
exports.default = Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTTs7O0FBRUYsYUFGRSxJQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsTUFFaUI7OzJFQUZqQixpQkFHUSxRQURTOztBQUVmLGNBQUssUUFBTCxHQUFnQixNQUFLLEtBQUwsQ0FBVyxRQUFYLENBRkQ7OztLQUFuQjs7aUJBRkU7OzRDQVNrQjtBQUNoQixpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixvQkFBcEIsQ0FBeUMsSUFBekMsRUFBK0MsS0FBSyxXQUFMLENBQS9DLENBRGdCO0FBRWhCLGlCQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLG9CQUF2QixDQUE0QyxJQUE1QyxFQUFrRCxLQUFLLFdBQUwsQ0FBbEQsQ0FGZ0I7Ozs7K0NBTUc7QUFDbkIsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsY0FBcEIsQ0FBbUMsSUFBbkMsRUFBeUMsS0FBSyxXQUFMLENBQXpDLENBRG1CO0FBRW5CLGlCQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLGNBQXZCLENBQXNDLElBQXRDLEVBQTRDLEtBQUssV0FBTCxDQUE1QyxDQUZtQjs7OztrREFLRyxXQUFVOzs7OENBSWQsV0FBVTtBQUM1QixtQkFBTyxJQUFQLENBRDRCOzs7O2lDQUt2QjtBQUNMLGdCQUFJLEtBQUssS0FBTCxDQUFXLFFBQVgsRUFBcUI7QUFDckIsdUJBQVM7O3NCQUFJLFdBQVksUUFBWixFQUFKO29CQUNHOzswQkFBRyxNQUFRLE1BQU0sS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFqQjt3QkFDSTs7OEJBQUcsV0FBYSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEVBQWhCOzt5QkFESjt3QkFFSyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCO3dCQUNEOzs4QkFBTSxXQUFZLFNBQVosRUFBTjs7eUJBSEo7cUJBREg7aUJBQVQsQ0FEcUI7YUFBekIsTUFTTztBQUNILHVCQUFROzs7b0JBQ0k7OzBCQUFHLE1BQVEsTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQWpCO3dCQUNJOzs4QkFBRyxXQUFhLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsS0FBdkIsRUFBaEI7O3lCQURKO3dCQUVLLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsS0FBcEI7cUJBSFQ7aUJBQVIsQ0FERzthQVRQOzs7O1dBOUJGO0VBQWEsZ0JBQU0sU0FBTjs7QUFrRG5CLE1BQU0sYUFBTixDQUFvQix3QkFBcEIsRUFBOEMsSUFBOUMsRUFBbUQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXBEO2tCQUNlIiwiZmlsZSI6IkxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuICAgIFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICBcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gKCA8bGkgY2xhc3NOYW1lID0gJ2FjdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmID0geycjJyArIHRoaXMucHJvcHMucGFnZU5hbWUgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSB7dGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZX0+IDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0gXCJzci1vbmx5XCI+IChjdXJyZW50KSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmID0geycjJyArIHRoaXMucHJvcHMucGFnZU5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5MaW5rXCIsIExpbmssW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBMaW5rOyJdfQ==
