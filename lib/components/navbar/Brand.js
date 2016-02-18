"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Brand = function (_React$Component) {
    _inherits(Brand, _React$Component);

    function Brand(props) {
        _classCallCheck(this, Brand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Brand).call(this, props));

        _this.settings = _this.props.settings;
        _this.langSettings = _this.props && _this.props.langSettings ? _this.props.langSettings : null;
        return _this;
    }

    _createClass(Brand, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
            this.settings.title.addImmediateCallback(this, this.forceUpdate);
            this.settings.logoPath.addImmediateCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.logoStyle).addImmediateCallback(this, this.forceUpdate);
            if (this.langSettings) this.langSettings.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            this.settings.title.removeCallback(this, this.forceUpdate);
            this.settings.logoPath.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.logoStyle).removeCallback(this, this.forceUpdate);
            if (this.langSettings) this.langSettings.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.positionType !== nextProps.positionType) {
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
        key: "render",
        value: function render() {
            var BrandUI = _react2.default.createElement("div", null);

            if (this.settings.enable.value) {
                var title = this.settings.title.value;

                if (this.langSettings) {
                    title = App.getTranslatedWord(this.settings.title.value);
                }
                var logoUI = "";
                if (this.settings.logoPath.value) {
                    var logoStyle = this.settings.logoStyle.getStyleFor();
                    logoUI = _react2.default.createElement("img", { style: logoStyle, alt: title, src: this.settings.logoPath.value });
                }
                if (this.props.useCSS) {
                    var headerCSS = this.props.css.header;
                    var titleCSS = this.props.css.title;

                    BrandUI = _react2.default.createElement(
                        "div",
                        { className: headerCSS },
                        _react2.default.createElement(
                            "div",
                            { className: titleCSS },
                            logoUI,
                            title
                        )
                    );
                } else {
                    BrandUI = _react2.default.createElement(
                        "div",
                        null,
                        logoUI,
                        title
                    );
                }
            }
            return BrandUI;
        }
    }]);

    return Brand;
}(_react2.default.Component);

Weave.registerClass("weavereact.navbar.Brand", Brand, [weavejs.api.core.ILinkableObject]);
exports.default = Brand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJyYW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU07OztBQUVGLGFBRkUsS0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE9BRWlCOzsyRUFGakIsa0JBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxDQUZEO0FBR2YsY0FBSyxZQUFMLEdBQW9CLEtBQUMsQ0FBSyxLQUFMLElBQWMsTUFBSyxLQUFMLENBQVcsWUFBWCxHQUF5QixNQUFLLEtBQUwsQ0FBVyxZQUFYLEdBQXdCLElBQWhFLENBSEw7O0tBQW5COztpQkFGRTs7NENBUWlCO0FBQ2YsaUJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsb0JBQXJCLENBQTBDLElBQTFDLEVBQStDLEtBQUssV0FBTCxDQUEvQyxDQURlO0FBRWYsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0Isb0JBQXBCLENBQXlDLElBQXpDLEVBQThDLEtBQUssV0FBTCxDQUE5QyxDQUZlO0FBR2YsaUJBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsb0JBQXZCLENBQTRDLElBQTVDLEVBQWlELEtBQUssV0FBTCxDQUFqRCxDQUhlO0FBSWYsa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQW5CLENBQTRDLG9CQUE1QyxDQUFpRSxJQUFqRSxFQUFzRSxLQUFLLFdBQUwsQ0FBdEUsQ0FKZTtBQUtmLGdCQUFHLEtBQUssWUFBTCxFQUFrQixLQUFLLFlBQUwsQ0FBa0Isb0JBQWxCLENBQXVDLElBQXZDLEVBQTRDLEtBQUssV0FBTCxDQUE1QyxDQUFyQjs7OzsrQ0FJb0I7QUFDcEIsaUJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsY0FBckIsQ0FBb0MsSUFBcEMsRUFBeUMsS0FBSyxXQUFMLENBQXpDLENBRG9CO0FBRXBCLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLGNBQXBCLENBQW1DLElBQW5DLEVBQXdDLEtBQUssV0FBTCxDQUF4QyxDQUZvQjtBQUdwQixpQkFBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixjQUF2QixDQUFzQyxJQUF0QyxFQUEyQyxLQUFLLFdBQUwsQ0FBM0MsQ0FIb0I7QUFJcEIsa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQW5CLENBQTRDLGNBQTVDLENBQTJELElBQTNELEVBQWdFLEtBQUssV0FBTCxDQUFoRSxDQUpvQjtBQUtwQixnQkFBRyxLQUFLLFlBQUwsRUFBa0IsS0FBSyxZQUFMLENBQWtCLGNBQWxCLENBQWlDLElBQWpDLEVBQXNDLEtBQUssV0FBTCxDQUF0QyxDQUFyQjs7Ozs4Q0FHa0IsV0FBVTtBQUM1QixnQkFBRyxLQUFLLEtBQUwsQ0FBVyxZQUFYLEtBQTRCLFVBQVUsWUFBVixFQUF1QjtBQUNsRCx1QkFBTyxJQUFQLENBRGtEO2FBQXRELE1BRU0sSUFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUFtQjtBQUNoRCx1QkFBTyxJQUFQLENBRGdEO2FBQTlDLE1BRUEsSUFBRyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEtBQXNCLFVBQVUsTUFBVixFQUFpQjtBQUM1Qyx1QkFBTyxJQUFQLENBRDRDO2FBQTFDLE1BRUQ7QUFDRCx1QkFBTyxLQUFQLENBREM7YUFGQzs7OztpQ0FPRDtBQUNMLGdCQUFJLFVBQVUsMENBQVYsQ0FEQzs7QUFHTCxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTJCO0FBQzFCLG9CQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQURjOztBQUkxQixvQkFBRyxLQUFLLFlBQUwsRUFBa0I7QUFDakIsNEJBQVEsSUFBSSxpQkFBSixDQUFzQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLENBQTlCLENBRGlCO2lCQUFyQjtBQUdBLG9CQUFJLFNBQVMsRUFBVCxDQVBzQjtBQVExQixvQkFBRyxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEVBQTZCO0FBQzVCLHdCQUFJLFlBQVksS0FBSyxRQUFMLENBQWMsU0FBZCxDQUF3QixXQUF4QixFQUFaLENBRHdCO0FBRTVCLDZCQUFTLHVDQUFLLE9BQU8sU0FBUCxFQUFrQixLQUFLLEtBQUwsRUFBWSxLQUFLLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsS0FBdkIsRUFBeEMsQ0FBVCxDQUY0QjtpQkFBaEM7QUFJQSxvQkFBRyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQWtCO0FBQ2pCLHdCQUFJLFlBQVksS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFlLE1BQWYsQ0FEQztBQUVqQix3QkFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxLQUFmLENBRkU7O0FBSWpCLDhCQUFVOzswQkFBSyxXQUFXLFNBQVgsRUFBTDt3QkFDRTs7OEJBQUssV0FBVyxRQUFYLEVBQUw7NEJBQ0ssTUFETDs0QkFFSyxLQUZMO3lCQURGO3FCQUFWLENBSmlCO2lCQUFyQixNQVlLO0FBQ0QsOEJBQVU7Ozt3QkFDRyxNQURIO3dCQUVHLEtBRkg7cUJBQVYsQ0FEQztpQkFaTDthQVpKO0FBZ0NBLG1CQUFRLE9BQVIsQ0FuQ0s7Ozs7V0FyQ1A7RUFBYyxnQkFBTSxTQUFOOztBQTJFcEIsTUFBTSxhQUFOLENBQW9CLHlCQUFwQixFQUErQyxLQUEvQyxFQUFxRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdEQ7a0JBQ2UiLCJmaWxlIjoiQnJhbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEJyYW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG4gICAgICAgIHRoaXMubGFuZ1NldHRpbmdzID0gKHRoaXMucHJvcHMgJiYgdGhpcy5wcm9wcy5sYW5nU2V0dGluZ3MpP3RoaXMucHJvcHMubGFuZ1NldHRpbmdzOm51bGw7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxvZ29QYXRoLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmxvZ29TdHlsZSkuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3MpdGhpcy5sYW5nU2V0dGluZ3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxvZ29QYXRoLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmxvZ29TdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3MpdGhpcy5sYW5nU2V0dGluZ3MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wb3NpdGlvblR5cGUgIT09IG5leHRQcm9wcy5wb3NpdGlvblR5cGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgQnJhbmRVSSA9IDxkaXYvPjtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlO1xuXG5cbiAgICAgICAgICAgIGlmKHRoaXMubGFuZ1NldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IEFwcC5nZXRUcmFuc2xhdGVkV29yZCh0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsb2dvVUkgPSBcIlwiO1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5sb2dvUGF0aC52YWx1ZSl7XG4gICAgICAgICAgICAgICAgdmFyIGxvZ29TdHlsZSA9IHRoaXMuc2V0dGluZ3MubG9nb1N0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgICAgICAgICAgbG9nb1VJID0gPGltZyBzdHlsZT17bG9nb1N0eWxlfSBhbHQ9e3RpdGxlfSBzcmM9e3RoaXMuc2V0dGluZ3MubG9nb1BhdGgudmFsdWV9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZGVyQ1NTID0gdGhpcy5wcm9wcy5jc3MuaGVhZGVyO1xuICAgICAgICAgICAgICAgIHZhciB0aXRsZUNTUyA9IHRoaXMucHJvcHMuY3NzLnRpdGxlXG5cbiAgICAgICAgICAgICAgICBCcmFuZFVJID0gPGRpdiBjbGFzc05hbWU9e2hlYWRlckNTU30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpdGxlQ1NTfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ29VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIEJyYW5kVUkgPSA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dvVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChCcmFuZFVJKTtcbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuQnJhbmRcIiwgQnJhbmQsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBCcmFuZDtcbiJdfQ==
