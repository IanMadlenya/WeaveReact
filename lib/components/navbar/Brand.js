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
            this.settings.logoBorder.addImmediateCallback(this, this.forceUpdate);
            if (this.langSettings) this.langSettings.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            this.settings.title.removeCallback(this, this.forceUpdate);
            this.settings.logoPath.removeCallback(this, this.forceUpdate);
            this.settings.logoBorder.removeCallback(this, this.forceUpdate);
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
//# sourceMappingURL=data:application/json;base64,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S0FBekIsQ0FEVztBQUU1Qiw2QkFBUyx1Q0FBSyxPQUFPLFVBQVAsRUFBbUIsS0FBSyxLQUFMLEVBQVksS0FBSyxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEVBQXpDLENBQVQsQ0FGNEI7aUJBQWhDO0FBSUEsb0JBQUcsS0FBSyxLQUFMLENBQVcsTUFBWCxFQUFrQjtBQUNqQix3QkFBSSxZQUFZLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxNQUFmLENBREM7QUFFakIsd0JBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsS0FBZixDQUZFOztBQUlqQiw4QkFBVTs7MEJBQUssV0FBVyxTQUFYLEVBQUw7d0JBQ0U7OzhCQUFLLFdBQVcsUUFBWCxFQUFMOzRCQUNLLE1BREw7NEJBRUssS0FGTDt5QkFERjtxQkFBVixDQUppQjtpQkFBckIsTUFZSztBQUNELDhCQUFVOzs7d0JBQ0csTUFESDt3QkFFRyxLQUZIO3FCQUFWLENBREM7aUJBWkw7YUFaSjtBQWdDQSxtQkFBUSxPQUFSLENBbkNLOzs7O1dBckNQO0VBQWMsZ0JBQU0sU0FBTjs7QUEyRXBCLE1BQU0sYUFBTixDQUFvQix5QkFBcEIsRUFBK0MsS0FBL0MsRUFBcUQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXREO2tCQUNlIiwiZmlsZSI6IkJyYW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBCcmFuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICB0aGlzLmxhbmdTZXR0aW5ncyA9ICh0aGlzLnByb3BzICYmIHRoaXMucHJvcHMubGFuZ1NldHRpbmdzKT90aGlzLnByb3BzLmxhbmdTZXR0aW5nczpudWxsO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sb2dvUGF0aC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxvZ29Cb3JkZXIuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3MpdGhpcy5sYW5nU2V0dGluZ3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxvZ29QYXRoLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubG9nb0JvcmRlci5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBpZih0aGlzLmxhbmdTZXR0aW5ncyl0aGlzLmxhbmdTZXR0aW5ncy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnBvc2l0aW9uVHlwZSAhPT0gbmV4dFByb3BzLnBvc2l0aW9uVHlwZSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51c2VDU1MgIT09IG5leHRQcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBCcmFuZFVJID0gPGRpdi8+O1xuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWU7XG5cblxuICAgICAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRpdGxlID0gQXBwLmdldFRyYW5zbGF0ZWRXb3JkKHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxvZ29VSSA9IFwiXCI7XG4gICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmxvZ29QYXRoLnZhbHVlKXtcbiAgICAgICAgICAgICAgICB2YXIgbG9nb0JvcmRlciA9IHRoaXMuc2V0dGluZ3MubG9nb0JvcmRlci5zdGF0ZTtcbiAgICAgICAgICAgICAgICBsb2dvVUkgPSA8aW1nIHN0eWxlPXtsb2dvQm9yZGVyfSBhbHQ9e3RpdGxlfSBzcmM9e3RoaXMuc2V0dGluZ3MubG9nb1BhdGgudmFsdWV9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZGVyQ1NTID0gdGhpcy5wcm9wcy5jc3MuaGVhZGVyO1xuICAgICAgICAgICAgICAgIHZhciB0aXRsZUNTUyA9IHRoaXMucHJvcHMuY3NzLnRpdGxlXG5cbiAgICAgICAgICAgICAgICBCcmFuZFVJID0gPGRpdiBjbGFzc05hbWU9e2hlYWRlckNTU30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpdGxlQ1NTfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ29VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIEJyYW5kVUkgPSA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dvVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChCcmFuZFVJKTtcbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuQnJhbmRcIiwgQnJhbmQsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBCcmFuZDtcbiJdfQ==
