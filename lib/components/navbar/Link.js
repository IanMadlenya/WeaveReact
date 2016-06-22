"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_AbstractComponent) {
    _inherits(Link, _AbstractComponent);

    function Link(props) {
        _classCallCheck(this, Link);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this, props));

        if (_this.props.children) _this.settings.title.value = _this.props.children;
        return _this;
    }

    _createClass(Link, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _get(Object.getPrototypeOf(Link.prototype), "componentWillReceiveProps", this).call(this, nextProps);
            if (this.props.children !== nextProps.children) this.settings.title.value = nextProps.children;
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Link - render");
            var title = this.settings.title.value;
            var hrefLink = title.toLowerCase();
            if (this.settings.iconMode.state) {
                title = "";
            }
            var styleObject = this.settings.style.state;
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
                        Weave.lang(title)
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
                        Weave.lang(title)
                    )
                );
            }
        }
    }]);

    return Link;
}(_AbstractComponent3.default);

Weave.registerClass(Link, ["weavereact.navbar.Link"], [weavejs.api.core.ILinkableObject], "Navbar Link");
exports.default = Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUVGLGFBRkUsSUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE1BRWlCOzsyRUFGakIsaUJBR1EsUUFEUzs7QUFFZixZQUFHLE1BQUssS0FBTCxDQUFXLFFBQVgsRUFDQyxNQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLEdBQTRCLE1BQUssS0FBTCxDQUFXLFFBQVgsQ0FEaEM7cUJBRmU7S0FBbkI7O2lCQUZFOztrREFTd0IsV0FBVTtBQUNoQyx1Q0FWRiwrREFVa0MsVUFBaEMsQ0FEZ0M7QUFFaEMsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFDdkIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixHQUE0QixVQUFVLFFBQVYsQ0FEaEM7Ozs7aUNBSUs7QUFDTCxnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksZUFBWixFQUExQjtBQUNBLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQUZQO0FBR0wsZ0JBQUksV0FBVyxNQUFNLFdBQU4sRUFBWCxDQUhDO0FBSUwsZ0JBQUcsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixFQUE2QjtBQUM1Qix3QkFBUSxFQUFSLENBRDRCO2FBQWhDO0FBR0EsZ0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLENBUGI7QUFRTCxnQkFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCOztBQUVyQix1QkFBUzs7c0JBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQVg7b0JBQ0c7OzBCQUFHLE9BQU8sV0FBUCxFQUFvQixNQUFRLE1BQU0sUUFBTixFQUEvQjt3QkFDSTs7OEJBQUcsV0FBYSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEVBQWhCOzt5QkFESjt3QkFFSyxNQUFNLElBQU4sQ0FBVyxLQUFYLENBRkw7cUJBREg7aUJBQVQsQ0FGcUI7YUFBekIsTUFTTztBQUNILHVCQUFROztzQkFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsRUFBWDtvQkFDSTs7MEJBQUcsT0FBTyxXQUFQLEVBQW9CLE1BQVEsTUFBTSxRQUFOLEVBQS9CO3dCQUNJOzs4QkFBRyxXQUFhLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsS0FBdkIsRUFBaEI7O3lCQURKO3dCQUVLLE1BQU0sSUFBTixDQUFXLEtBQVgsQ0FGTDtxQkFESjtpQkFBUixDQURHO2FBVFA7Ozs7V0F2QkY7OztBQTJDTixNQUFNLGFBQU4sQ0FBcUIsSUFBckIsRUFBMEIsQ0FBQyx3QkFBRCxDQUExQixFQUFxRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdEQsRUFBd0YsYUFBeEY7a0JBQ2UiLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IG5leHRQcm9wcy5jaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJMaW5rIC0gcmVuZGVyXCIpO1xuICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlO1xuICAgICAgICB2YXIgaHJlZkxpbmsgPSB0aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlKXtcbiAgICAgICAgICAgIHRpdGxlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLnN0YXRlXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzQWN0aXZlKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoIDxsaSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17c3R5bGVPYmplY3R9IGhyZWYgPSB7JyMnICsgaHJlZkxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtXZWF2ZS5sYW5nKHRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDxsaSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17c3R5bGVPYmplY3R9IGhyZWYgPSB7JyMnICsgaHJlZkxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtXZWF2ZS5sYW5nKHRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBMaW5rLFtcIndlYXZlcmVhY3QubmF2YmFyLkxpbmtcIl0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSxcIk5hdmJhciBMaW5rXCIpO1xuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdfQ==