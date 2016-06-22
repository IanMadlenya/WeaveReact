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

var _HTMLWrapper = require("../HTMLWrapper");

var _HTMLWrapper2 = _interopRequireDefault(_HTMLWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Brand = function (_AbstractComponent) {
    _inherits(Brand, _AbstractComponent);

    function Brand(props) {
        _classCallCheck(this, Brand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Brand).call(this, props, "container"));
    }

    _createClass(Brand, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            _get(Object.getPrototypeOf(Brand.prototype), "shouldComponentUpdate", this).call(this, nextProps);
            if (this.props.dock !== nextProps.dock) {
                return true;
            } else if (this.props.position !== nextProps.position) {
                return true;
            } else if (this.props.useCSS !== nextProps.useCSS) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            return _ComponentManager2.default.renderChildren(this);
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Brand - render");
            var BrandUI = _react2.default.createElement("div", null);

            if (!this.settings.visible.value) return BrandUI;

            var cssName = this.settings.CSS.getCSSFor();
            var styleObject = this.settings.style.state;
            var childrenUI = this.renderChildren();

            if (this.settings.useCSS.value) {
                BrandUI = _react2.default.createElement(
                    "div",
                    { className: cssName },
                    childrenUI
                );
            } else {
                BrandUI = _react2.default.createElement(
                    "div",
                    { style: styleObject },
                    childrenUI
                );
            }

            return BrandUI;
        }
    }]);

    return Brand;
}(_AbstractComponent3.default);

Weave.registerClass(Brand, ["weavereact.navbar.Brand"], [weavejs.api.core.ILinkableObject], 'Navbar Brand');
exports.default = Brand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJyYW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTTs7O0FBRUYsYUFGRSxLQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsT0FFaUI7O3NFQUZqQixrQkFHUSxPQUFNLGNBREc7S0FBbkI7O2lCQUZFOzs4Q0FPb0IsV0FBVTtBQUM1Qix1Q0FSRiw0REFROEIsVUFBNUIsQ0FENEI7QUFFNUIsZ0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixVQUFVLElBQVYsRUFBZTtBQUNsQyx1QkFBTyxJQUFQLENBRGtDO2FBQXRDLE1BRU0sSUFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUFtQjtBQUNoRCx1QkFBTyxJQUFQLENBRGdEO2FBQTlDLE1BRUEsSUFBRyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEtBQXNCLFVBQVUsTUFBVixFQUFpQjtBQUM1Qyx1QkFBTyxJQUFQLENBRDRDO2FBQTFDLE1BRUQ7QUFDRCx1QkFBTyxLQUFQLENBREM7YUFGQzs7Ozt5Q0FRTTtBQUNaLG1CQUFPLDJCQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFQLENBRFk7Ozs7aUNBTVA7QUFDSixnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksZ0JBQVosRUFBMUI7QUFDRCxnQkFBSSxVQUFVLDBDQUFWLENBRkM7O0FBSUwsZ0JBQUcsQ0FBQyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEVBQ0EsT0FBTyxPQUFQLENBREo7O0FBR0EsZ0JBQUksVUFBVSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQVYsQ0FQQztBQVFMLGdCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQVJiO0FBU0wsZ0JBQUksYUFBYSxLQUFLLGNBQUwsRUFBYixDQVRDOztBQVdMLGdCQUFHLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsRUFBMkI7QUFDMUIsMEJBQVU7O3NCQUFLLFdBQVcsT0FBWCxFQUFMO29CQUNHLFVBREg7aUJBQVYsQ0FEMEI7YUFBOUIsTUFJSztBQUNELDBCQUFVOztzQkFBSyxPQUFPLFdBQVAsRUFBTDtvQkFDRyxVQURIO2lCQUFWLENBREM7YUFKTDs7QUFXQSxtQkFBUSxPQUFSLENBdEJLOzs7O1dBM0JQOzs7QUFvRE4sTUFBTSxhQUFOLENBQXFCLEtBQXJCLEVBQTJCLENBQUMseUJBQUQsQ0FBM0IsRUFBdUQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXhELEVBQTBGLGNBQTFGO2tCQUNlIiwiZmlsZSI6IkJyYW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgSFRNTFdyYXBwZXIgZnJvbSBcIi4uL0hUTUxXcmFwcGVyXCI7XG5cbmNsYXNzIEJyYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsXCJjb250YWluZXJcIik7XG4gICAgfVxuXG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jayAhPT0gbmV4dFByb3BzLmRvY2spe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIkJyYW5kIC0gcmVuZGVyXCIpO1xuICAgICAgICB2YXIgQnJhbmRVSSA9IDxkaXYvPjtcblxuICAgICAgICBpZighdGhpcy5zZXR0aW5ncy52aXNpYmxlLnZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIEJyYW5kVUk7XG5cbiAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWUpe1xuICAgICAgICAgICAgQnJhbmRVSSA9IDxkaXYgY2xhc3NOYW1lPXtjc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIEJyYW5kVUkgPSA8ZGl2IHN0eWxlPXtzdHlsZU9iamVjdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIChCcmFuZFVJKTtcbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBCcmFuZCxbXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5CcmFuZFwiXSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdLCdOYXZiYXIgQnJhbmQnKTtcbmV4cG9ydCBkZWZhdWx0IEJyYW5kO1xuIl19