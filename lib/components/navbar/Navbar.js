"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _Brand = require("./Brand");

var _Brand2 = _interopRequireDefault(_Brand);

var _List = require("./List");

var _List2 = _interopRequireDefault(_List);

var _Form = require("./Form");

var _Form2 = _interopRequireDefault(_Form);

var _Link = require("./Link");

var _Link2 = _interopRequireDefault(_Link);

var _Config = require("./Config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _Config.NavbarConfig();
        _this.getCssClassName = _this.getCssClassName.bind(_this);
        return _this;
    }

    _createClass(Navbar, [{
        key: "getCssClassName",
        value: function getCssClassName() {
            return _Config.NavbarConfig.MAIN + " " + "navbar-" + this.settings.type.value + " " + "navbar-" + this.settings.positionType.value + '-' + this.settings.position.value;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {}
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {}
    }, {
        key: "render",
        value: function render() {

            var cssClassName = this.getCssClassName();
            return _react2.default.createElement(
                "nav",
                { className: cssClassName, style: { margin: "0", height: "50px" } },
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_Brand2.default, { settings: this.settings.brand }),
                    _react2.default.createElement(_List2.default, { settings: this.settings.navList }),
                    _react2.default.createElement(_Form2.default, { settings: this.settings.form })
                )
            );
        }
    }]);

    return Navbar;
}(_react2.default.Component);

Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

exports.default = Navbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTTTs7O0FBRUYsYUFGRSxNQUVGLENBQVksS0FBWixFQUFrQjs4QkFGaEIsUUFFZ0I7OzJFQUZoQixtQkFHUSxRQURROztBQUVkLGNBQUssUUFBTCxHQUFnQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsMEJBQTVDLENBRkY7QUFHZCxjQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCLENBSGM7O0tBQWxCOztpQkFGRTs7MENBUW1CO0FBQ2pCLG1CQUFPLHFCQUFhLElBQWIsR0FBb0IsR0FBcEIsR0FBMEIsU0FBMUIsR0FBc0MsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixHQUEyQixHQUFqRSxHQUF1RSxTQUF2RSxHQUFtRixLQUFLLFFBQUwsQ0FBYyxZQUFkLENBQTJCLEtBQTNCLEdBQW1DLEdBQXRILEdBQTRILEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsS0FBdkIsQ0FEbEg7Ozs7NENBS0Y7OzsrQ0FJRzs7OzZDQUlGOzs7aUNBS1g7O0FBRUwsZ0JBQUksZUFBZSxLQUFLLGVBQUwsRUFBZixDQUZDO0FBR0wsbUJBQ0k7O2tCQUFLLFdBQVcsWUFBWCxFQUF5QixPQUFPLEVBQUMsUUFBTyxHQUFQLEVBQVcsUUFBTyxNQUFQLEVBQW5CLEVBQTlCO2dCQUNJOzs7b0JBQ0ksaURBQU8sVUFBVSxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQWpCLENBREo7b0JBRUksZ0RBQU0sVUFBVSxLQUFLLFFBQUwsQ0FBYyxPQUFkLEVBQWhCLENBRko7b0JBR0ksZ0RBQU0sVUFBVSxLQUFLLFFBQUwsQ0FBYyxJQUFkLEVBQWhCLENBSEo7aUJBREo7YUFESixDQUhLOzs7O1dBMUJQO0VBQWUsZ0JBQU0sU0FBTjs7QUE2Q3JCLE1BQU0sYUFBTixDQUFvQixtQkFBcEIsRUFBeUMsTUFBekMsRUFBZ0QsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQWpEOztrQkFFZSIsImZpbGUiOiJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQge05hdmJhckNvbmZpZ30gZnJvbSBcIi4vQ29uZmlnXCI7XG5cblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3MgOiBuZXcgTmF2YmFyQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuZ2V0Q3NzQ2xhc3NOYW1lID0gdGhpcy5nZXRDc3NDbGFzc05hbWUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgIGdldENzc0NsYXNzTmFtZSAgKCkge1xuICAgICAgICByZXR1cm4gTmF2YmFyQ29uZmlnLk1BSU4gKyBcIiBcIiArIFwibmF2YmFyLVwiICsgdGhpcy5zZXR0aW5ncy50eXBlLnZhbHVlICsgXCIgXCIgKyBcIm5hdmJhci1cIiArIHRoaXMuc2V0dGluZ3MucG9zaXRpb25UeXBlLnZhbHVlICsgJy0nICsgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZTtcbiAgICB9XG4gICAgXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG4gICAgcmVuZGVyKCkge1xuICAgIFxuICAgICAgICB2YXIgY3NzQ2xhc3NOYW1lID0gdGhpcy5nZXRDc3NDbGFzc05hbWUoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjc3NDbGFzc05hbWV9IHN0eWxlPXt7bWFyZ2luOlwiMFwiLGhlaWdodDpcIjUwcHhcIn19PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCcmFuZCBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5icmFuZH0vPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5uYXZMaXN0fS8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLmZvcm19Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApO1xuICAgIH1cbiAgICBcbn1cblxuXG5cblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuTmF2YmFyXCIsIE5hdmJhcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cblxuXG5cblxuIl19
