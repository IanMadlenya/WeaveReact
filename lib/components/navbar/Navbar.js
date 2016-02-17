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
        _this.getStyle = _this.getStyle.bind(_this);
        return _this;
    }

    _createClass(Navbar, [{
        key: "getStyle",
        value: function getStyle() {
            var styleObject = {
                display: "flex",
                flexDirection: "row",
                flex: "1",
                width: "100%",
                height: "5%",
                position: this.settings.positionType.value,
                backgroundColor: this.settings.backgroundColor.value

            };
            var border = this.settings.border.state;
            var padding = this.settings.padding.state;
            _Style2.default.mergeStyleObjects(styleObject, border);
            _Style2.default.mergeStyleObjects(styleObject, padding);

            if (styleObject["position"] === "fixed") {
                if (this.settings.position.value === "top") {
                    styleObject["top"] = "0";
                } else if (this.settings.position.value === "bottom") {
                    styleObject["bottom"] = "0";
                } else if (this.settings.position.value === "right") {
                    styleObject["right"] = "0";
                    styleObject["flexDirection"] = "column";
                    styleObject["width"] = "5%";
                    styleObject["height"] = "100%";
                } else if (this.settings.position.value === "left") {
                    styleObject["left"] = "0";
                    styleObject["flexDirection"] = "column";
                    styleObject["width"] = "5%";
                    styleObject["height"] = "100%";
                }
            }
            return _Style2.default.appendVendorPrefix(styleObject);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.positionType.addImmediateCallback(this, this.forceUpdate);
            this.settings.position.addImmediateCallback(this, this.forceUpdate);
            this.settings.backgroundColor.addImmediateCallback(this, this.forceUpdate);
            this.settings.border.addImmediateCallback(this, this.forceUpdate);
            this.settings.padding.addImmediateCallback(this, this.forceUpdate);
            this.settings.useCSS.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.positionType.removeCallback(this, this.forceUpdate);
            this.settings.position.removeCallback(this, this.forceUpdate);
            this.settings.backgroundColor.removeCallback(this, this.forceUpdate);
            this.settings.border.removeCallback(this, this.forceUpdate);
            this.settings.padding.removeCallback(this, this.forceUpdate);
            this.settings.useCSS.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {}
    }, {
        key: "render",
        value: function render() {

            var styleObj = this.getStyle();
            var posType = this.settings.positionType.value;
            var pos = this.settings.position.value;
            var cssObj = null;
            if (this.settings.useCSS.value) {
                cssObj = this.settings.CSS.state;
                var brandCSS = cssObj.brand;
                var listCSS = cssObj.list;
                var formCSS = cssObj.form;
                return _react2.default.createElement(
                    "nav",
                    { className: cssObj.navbar },
                    _react2.default.createElement(_Brand2.default, { css: brandCSS, useCSS: this.settings.useCSS.value, settings: this.settings.brand, positionType: posType, position: pos }),
                    _react2.default.createElement(_List2.default, { css: listCSS, useCSS: this.settings.useCSS.value, settings: this.settings.navList, positionType: posType, position: pos }),
                    _react2.default.createElement(_Form2.default, { css: formCSS, useCSS: this.settings.useCSS.value, settings: this.settings.form, positionType: posType, position: pos })
                );
            } else {
                return _react2.default.createElement(
                    "nav",
                    { style: styleObj },
                    _react2.default.createElement(_Brand2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.brand, positionType: posType, position: pos }),
                    _react2.default.createElement(_List2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.navList, positionType: posType, position: pos }),
                    _react2.default.createElement(_Form2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.form, positionType: posType, position: pos })
                );
            }
        }
    }]);

    return Navbar;
}(_react2.default.Component);

Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

exports.default = Navbar;
//# sourceMappingURL=data:application/json;base64,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UUFBTCxDQUFjLElBQWQsRUFBb0IsY0FBYyxPQUFkLEVBQXVCLFVBQVUsR0FBVixFQUFoRyxDQUhKO2lCQURKLENBREM7YUFaTDs7OztXQTNFRjtFQUFlLGdCQUFNLFNBQU47O0FBMEdyQixNQUFNLGFBQU4sQ0FBb0IsbUJBQXBCLEVBQXlDLE1BQXpDLEVBQWdELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRDs7a0JBRWUiLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBCcmFuZCBmcm9tIFwiLi9CcmFuZFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IHtOYXZiYXJDb25maWd9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzIDogbmV3IE5hdmJhckNvbmZpZygpO1xuICAgICAgICB0aGlzLmdldFN0eWxlID0gdGhpcy5nZXRTdHlsZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgICBnZXRTdHlsZSAgKCkge1xuICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0ge1xuICAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgIGZsZXg6XCIxXCIsXG4gICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICAgaGVpZ2h0OlwiNSVcIixcbiAgICAgICAgICAgICBwb3NpdGlvbjp0aGlzLnNldHRpbmdzLnBvc2l0aW9uVHlwZS52YWx1ZSxcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc2V0dGluZ3MuYmFja2dyb3VuZENvbG9yLnZhbHVlLFxuXG4gICAgICAgICB9XG4gICAgICAgICB2YXIgYm9yZGVyID0gdGhpcy5zZXR0aW5ncy5ib3JkZXIuc3RhdGU7XG4gICAgICAgICB2YXIgcGFkZGluZyA9IHRoaXMuc2V0dGluZ3MucGFkZGluZy5zdGF0ZTtcbiAgICAgICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKHN0eWxlT2JqZWN0LGJvcmRlcik7XG4gICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhzdHlsZU9iamVjdCxwYWRkaW5nKTtcblxuICAgICAgICAgaWYoc3R5bGVPYmplY3RbXCJwb3NpdGlvblwiXSA9PT0gXCJmaXhlZFwiKXtcbiAgICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnZhbHVlID09PSBcInRvcFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcInRvcFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MucG9zaXRpb24udmFsdWUgPT09IFwiYm90dG9tXCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYm90dG9tXCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZSA9PT0gXCJyaWdodFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcInJpZ2h0XCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCI1JVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG5cbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnZhbHVlID09PSBcImxlZnRcIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJsZWZ0XCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCI1JVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlT2JqZWN0KTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb25UeXBlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5ib3JkZXIuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wYWRkaW5nLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudXNlQ1NTLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvblR5cGUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmJhY2tncm91bmRDb2xvci5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmJvcmRlci5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnBhZGRpbmcucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy51c2VDU1MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcblxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciBzdHlsZU9iaiA9IHRoaXMuZ2V0U3R5bGUoKTtcbiAgICAgICAgdmFyIHBvc1R5cGUgPSB0aGlzLnNldHRpbmdzLnBvc2l0aW9uVHlwZS52YWx1ZTtcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMuc2V0dGluZ3MucG9zaXRpb24udmFsdWU7XG4gICAgICAgIHZhciBjc3NPYmogPSBudWxsO1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZSl7XG4gICAgICAgICAgICBjc3NPYmogPSB0aGlzLnNldHRpbmdzLkNTUy5zdGF0ZTtcbiAgICAgICAgICAgIHZhciBicmFuZENTUyA9IGNzc09iai5icmFuZDtcbiAgICAgICAgICAgIHZhciBsaXN0Q1NTID0gY3NzT2JqLmxpc3Q7XG4gICAgICAgICAgICB2YXIgZm9ybUNTUyA9IGNzc09iai5mb3JtO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y3NzT2JqLm5hdmJhcn0+XG4gICAgICAgICAgICAgICAgICAgIDxCcmFuZCBjc3M9e2JyYW5kQ1NTfSB1c2VDU1M9e3RoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5icmFuZH0gcG9zaXRpb25UeXBlPXtwb3NUeXBlfSBwb3NpdGlvbj17cG9zfS8+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IGNzcz17bGlzdENTU30gdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MubmF2TGlzdH0gcG9zaXRpb25UeXBlPXtwb3NUeXBlfSBwb3NpdGlvbj17cG9zfS8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNzcz17Zm9ybUNTU30gdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MuZm9ybX0gcG9zaXRpb25UeXBlPXtwb3NUeXBlfSBwb3NpdGlvbj17cG9zfS8+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiAgIHN0eWxlPXtzdHlsZU9ian0+XG4gICAgICAgICAgICAgICAgICAgIDxCcmFuZCB1c2VDU1M9e3RoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5icmFuZH0gcG9zaXRpb25UeXBlPXtwb3NUeXBlfSBwb3NpdGlvbj17cG9zfS8+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0ICB1c2VDU1M9e3RoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5uYXZMaXN0fSBwb3NpdGlvblR5cGU9e3Bvc1R5cGV9IHBvc2l0aW9uPXtwb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gIHVzZUNTUz17dGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWV9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLmZvcm19IHBvc2l0aW9uVHlwZT17cG9zVHlwZX0gcG9zaXRpb249e3Bvc30vPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApO1xuXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG59XG5cblxuXG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lk5hdmJhclwiLCBOYXZiYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cblxuXG5cbiJdfQ==
