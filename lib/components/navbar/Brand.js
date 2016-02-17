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
            if (this.langSettings) this.langSettings.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            this.settings.title.removeCallback(this, this.forceUpdate);
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
                    var logoBorder = this.settings.logoBorder.state;
                    logoUI = _react2.default.createElement("img", { style: logoBorder, alt: title, src: this.settings.logoPath.value });
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
//# sourceMappingURL=data:application/json;base64,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LFFBQVgsRUFBTDs0QkFDSyxNQURMOzRCQUVLLEtBRkw7eUJBREY7cUJBQVYsQ0FKaUI7aUJBQXJCLE1BWUs7QUFDRCw4QkFBVTs7O3dCQUNHLE1BREg7d0JBRUcsS0FGSDtxQkFBVixDQURDO2lCQVpMO2FBWko7QUFnQ0EsbUJBQVEsT0FBUixDQW5DSzs7OztXQWpDUDtFQUFjLGdCQUFNLFNBQU47O0FBdUVwQixNQUFNLGFBQU4sQ0FBb0IseUJBQXBCLEVBQStDLEtBQS9DLEVBQXFELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUF0RDtrQkFDZSIsImZpbGUiOiJCcmFuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQnJhbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgdGhpcy5sYW5nU2V0dGluZ3MgPSAodGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLmxhbmdTZXR0aW5ncyk/dGhpcy5wcm9wcy5sYW5nU2V0dGluZ3M6bnVsbDtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIGlmKHRoaXMubGFuZ1NldHRpbmdzKXRoaXMubGFuZ1NldHRpbmdzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3MpdGhpcy5sYW5nU2V0dGluZ3MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wb3NpdGlvblR5cGUgIT09IG5leHRQcm9wcy5wb3NpdGlvblR5cGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgQnJhbmRVSSA9IDxkaXYvPjtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRpdGxlID0gQXBwLmdldFRyYW5zbGF0ZWRXb3JkKHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxvZ29VSSA9IFwiXCI7XG4gICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmxvZ29QYXRoLnZhbHVlKXtcbiAgICAgICAgICAgICAgICB2YXIgbG9nb0JvcmRlciA9IHRoaXMuc2V0dGluZ3MubG9nb0JvcmRlci5zdGF0ZTtcbiAgICAgICAgICAgICAgICBsb2dvVUkgPSA8aW1nIHN0eWxlPXtsb2dvQm9yZGVyfSBhbHQ9e3RpdGxlfSBzcmM9e3RoaXMuc2V0dGluZ3MubG9nb1BhdGgudmFsdWV9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZGVyQ1NTID0gdGhpcy5wcm9wcy5jc3MuaGVhZGVyO1xuICAgICAgICAgICAgICAgIHZhciB0aXRsZUNTUyA9IHRoaXMucHJvcHMuY3NzLnRpdGxlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgQnJhbmRVSSA9IDxkaXYgY2xhc3NOYW1lPXtoZWFkZXJDU1N9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aXRsZUNTU30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dvVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgQnJhbmRVSSA9IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ29VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKEJyYW5kVUkpO1xuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5CcmFuZFwiLCBCcmFuZCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IEJyYW5kO1xuIl19
