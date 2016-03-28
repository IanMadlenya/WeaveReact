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
}(_AbstractComponent3.default);

Weave.registerClass("weavereact.navbar.Link", Link, [weavejs.api.core.ILinkableObject]);
exports.default = Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUVGLGFBRkUsSUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE1BRWlCOzsyRUFGakIsaUJBR1EsUUFEUzs7QUFFZixZQUFHLE1BQUssS0FBTCxDQUFXLFFBQVgsRUFDQyxNQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLEdBQTRCLE1BQUssS0FBTCxDQUFXLFFBQVgsQ0FEaEM7cUJBRmU7S0FBbkI7O2lCQUZFOztrREFTd0IsV0FBVTtBQUNoQyx1Q0FWRiwrREFVa0MsVUFBaEMsQ0FEZ0M7QUFFaEMsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFDdkIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixHQUE0QixVQUFVLFFBQVYsQ0FEaEM7Ozs7aUNBSUs7QUFDTCxnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksZUFBWixFQUExQjtBQUNBLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQUZQO0FBR0wsZ0JBQUksV0FBVyxNQUFNLFdBQU4sRUFBWCxDQUhDO0FBSUwsZ0JBQUcsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixFQUE2QjtBQUM1Qix3QkFBUSxFQUFSLENBRDRCO2FBQWhDO0FBR0EsZ0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLENBUGI7QUFRTCxnQkFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCOztBQUVyQix1QkFBUzs7c0JBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQVg7b0JBQ0c7OzBCQUFHLE9BQU8sV0FBUCxFQUFvQixNQUFRLE1BQU0sUUFBTixFQUEvQjt3QkFDSTs7OEJBQUcsV0FBYSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEVBQWhCOzt5QkFESjt3QkFFSyxLQUZMO3FCQURIO2lCQUFULENBRnFCO2FBQXpCLE1BU087QUFDSCx1QkFBUTs7c0JBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQVg7b0JBQ0k7OzBCQUFHLE9BQU8sV0FBUCxFQUFvQixNQUFRLE1BQU0sUUFBTixFQUEvQjt3QkFDSTs7OEJBQUcsV0FBYSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEVBQWhCOzt5QkFESjt3QkFFSyxLQUZMO3FCQURKO2lCQUFSLENBREc7YUFUUDs7OztXQXZCRjs7O0FBMkNOLE1BQU0sYUFBTixDQUFvQix3QkFBcEIsRUFBOEMsSUFBOUMsRUFBbUQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXBEO2tCQUNlIiwiZmlsZSI6IkxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcblxuY2xhc3MgTGluayBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWUgPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbilcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWUgPSBuZXh0UHJvcHMuY2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiTGluayAtIHJlbmRlclwiKTtcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZTtcbiAgICAgICAgdmFyIGhyZWZMaW5rID0gdGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5pY29uTW9kZS5zdGF0ZSl7XG4gICAgICAgICAgICB0aXRsZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xuXG4gICAgICAgICAgICByZXR1cm4gKCA8bGkgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3N0eWxlT2JqZWN0fSBocmVmID0geycjJyArIGhyZWZMaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSB7dGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZX0+IDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8bGkgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3N0eWxlT2JqZWN0fSBocmVmID0geycjJyArIGhyZWZMaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSB7dGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZX0+IDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QubmF2YmFyLkxpbmtcIiwgTGluayxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXX0=
