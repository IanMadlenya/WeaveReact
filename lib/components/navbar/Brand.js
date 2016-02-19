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
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
            if (this.langSettings) this.langSettings.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            this.settings.title.removeCallback(this, this.forceUpdate);
            this.settings.logoPath.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.logoStyle).removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
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

                var titleStyle = this.settings.style.getStyleFor();
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
                            _react2.default.createElement(
                                "span",
                                { style: titleStyle },
                                title
                            )
                        )
                    );
                } else {
                    BrandUI = _react2.default.createElement(
                        "div",
                        null,
                        logoUI,
                        _react2.default.createElement(
                            "span",
                            { style: titleStyle },
                            title
                        )
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
//# sourceMappingURL=data:application/json;base64,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QyxLQUEvQyxFQUFxRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdEQ7a0JBQ2UiLCJmaWxlIjoiQnJhbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEJyYW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG4gICAgICAgIHRoaXMubGFuZ1NldHRpbmdzID0gKHRoaXMucHJvcHMgJiYgdGhpcy5wcm9wcy5sYW5nU2V0dGluZ3MpP3RoaXMucHJvcHMubGFuZ1NldHRpbmdzOm51bGw7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxvZ29QYXRoLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmxvZ29TdHlsZSkuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIGlmKHRoaXMubGFuZ1NldHRpbmdzKXRoaXMubGFuZ1NldHRpbmdzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sb2dvUGF0aC5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5sb2dvU3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBpZih0aGlzLmxhbmdTZXR0aW5ncyl0aGlzLmxhbmdTZXR0aW5ncy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnBvc2l0aW9uVHlwZSAhPT0gbmV4dFByb3BzLnBvc2l0aW9uVHlwZSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51c2VDU1MgIT09IG5leHRQcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBCcmFuZFVJID0gPGRpdi8+O1xuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciB0aXRsZVN0eWxlICA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgICAgIGlmKHRoaXMubGFuZ1NldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IEFwcC5nZXRUcmFuc2xhdGVkV29yZCh0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsb2dvVUkgPSBcIlwiO1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5sb2dvUGF0aC52YWx1ZSl7XG4gICAgICAgICAgICAgICAgdmFyIGxvZ29TdHlsZSA9IHRoaXMuc2V0dGluZ3MubG9nb1N0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgICAgICAgICAgbG9nb1VJID0gPGltZyBzdHlsZT17bG9nb1N0eWxlfSBhbHQ9e3RpdGxlfSBzcmM9e3RoaXMuc2V0dGluZ3MubG9nb1BhdGgudmFsdWV9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZGVyQ1NTID0gdGhpcy5wcm9wcy5jc3MuaGVhZGVyO1xuICAgICAgICAgICAgICAgIHZhciB0aXRsZUNTUyA9IHRoaXMucHJvcHMuY3NzLnRpdGxlXG5cbiAgICAgICAgICAgICAgICBCcmFuZFVJID0gPGRpdiBjbGFzc05hbWU9e2hlYWRlckNTU30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpdGxlQ1NTfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ29VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3RpdGxlU3R5bGV9Pnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgQnJhbmRVSSA9IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ29VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17dGl0bGVTdHlsZX0+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoQnJhbmRVSSk7XG4gICAgfVxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QubmF2YmFyLkJyYW5kXCIsIEJyYW5kLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgQnJhbmQ7XG4iXX0=
