"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

            var styleObject = this.settings.style.getStyleFor(null);
            if (styleObject["position"] === "fixed") {
                if (this.settings.dock.value === "top") {
                    styleObject["top"] = "0";
                } else if (this.settings.dock.value === "bottom") {
                    styleObject["bottom"] = "0";
                } else if (this.settings.dock.value === "right") {
                    styleObject["right"] = "0";
                    styleObject["flexDirection"] = "column";
                    styleObject["width"] = "5%";
                    styleObject["height"] = "100%";
                } else if (this.settings.dock.value === "left") {
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
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
            this.settings.CSS.addImmediateCallback(this, this.forceUpdate);
            this.settings.useCSS.addImmediateCallback(this, this.forceUpdate);
            this.settings.dock.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
            this.settings.CSS.removeCallback(this, this.forceUpdate);
            this.settings.useCSS.removeCallback(this, this.forceUpdate);
            this.settings.dock.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {}
    }, {
        key: "render",
        value: function render() {

            var styleObj = this.getStyle();
            var pos = this.settings.style.position.value;
            var dock = pos === "fixed" ? this.settings.dock.value : null;
            var cssObj = null;
            if (this.settings.useCSS.value) {
                cssObj = this.settings.CSS.state;
                var brandCSS = cssObj.brand;
                var listCSS = cssObj.list;
                var formCSS = cssObj.form;
                return _react2.default.createElement(
                    "nav",
                    { className: cssObj.navbar },
                    _react2.default.createElement(_Brand2.default, { css: brandCSS, useCSS: this.settings.useCSS.value, settings: this.settings.brand, dock: dock, position: pos }),
                    _react2.default.createElement(_List2.default, { css: listCSS, useCSS: this.settings.useCSS.value, settings: this.settings.navList, dock: dock, position: pos }),
                    _react2.default.createElement(_Form2.default, { css: formCSS, useCSS: this.settings.useCSS.value, settings: this.settings.form, dock: dock, position: pos })
                );
            } else {
                return _react2.default.createElement(
                    "nav",
                    { style: styleObj },
                    _react2.default.createElement(_Brand2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.brand, dock: dock, position: pos }),
                    _react2.default.createElement(_List2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.navList, dock: dock, position: pos }),
                    _react2.default.createElement(_Form2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.form, dock: dock, position: pos })
                );
            }
        }
    }]);

    return Navbar;
}(_react2.default.Component);

Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

exports.default = Navbar;
//# sourceMappingURL=data:application/json;base64,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QUNELHVCQUNJOztzQkFBTyxPQUFPLFFBQVAsRUFBUDtvQkFDSSxpREFBTyxRQUFRLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsRUFBNEIsVUFBVSxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLE1BQU0sSUFBTixFQUFZLFVBQVUsR0FBVixFQUF0RixDQURKO29CQUVJLGdEQUFPLFFBQVEsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUE0QixVQUFVLEtBQUssUUFBTCxDQUFjLE9BQWQsRUFBdUIsTUFBTSxJQUFOLEVBQVksVUFBVSxHQUFWLEVBQXhGLENBRko7b0JBR0ksZ0RBQU8sUUFBUSxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTRCLFVBQVUsS0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixNQUFNLElBQU4sRUFBWSxVQUFVLEdBQVYsRUFBckYsQ0FISjtpQkFESixDQURDO2FBWkw7Ozs7V0EzREY7RUFBZSxnQkFBTSxTQUFOOztBQTBGckIsTUFBTSxhQUFOLENBQW9CLG1CQUFwQixFQUF5QyxNQUF6QyxFQUFnRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakQ7O2tCQUVlIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQnJhbmQgZnJvbSBcIi4vQnJhbmRcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcbmltcG9ydCB7TmF2YmFyQ29uZmlnfSBmcm9tIFwiLi9Db25maWdcIjtcblxuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5ncyA6IG5ldyBOYXZiYXJDb25maWcoKTtcbiAgICAgICAgdGhpcy5nZXRTdHlsZSA9IHRoaXMuZ2V0U3R5bGUuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuICAgICBnZXRTdHlsZSAgKCkge1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbClcbiAgICAgICAgIGlmKHN0eWxlT2JqZWN0W1wicG9zaXRpb25cIl0gPT09IFwiZml4ZWRcIil7XG4gICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcInRvcFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcInRvcFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJib3R0b21cIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJib3R0b21cIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwicmlnaHRcIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJyaWdodFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiNSVcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuXG4gICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcImxlZnRcIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJsZWZ0XCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCI1JVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlT2JqZWN0KTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLkNTUy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVzZUNTUy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRvY2suYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5DU1MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy51c2VDU1MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5kb2NrLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG5cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgc3R5bGVPYmogPSB0aGlzLmdldFN0eWxlKCk7XG4gICAgICAgIHZhciBwb3MgPSB0aGlzLnNldHRpbmdzLnN0eWxlLnBvc2l0aW9uLnZhbHVlO1xuICAgICAgICB2YXIgZG9jayA9IHBvcyA9PT0gXCJmaXhlZFwiP3RoaXMuc2V0dGluZ3MuZG9jay52YWx1ZTpudWxsO1xuICAgICAgICB2YXIgY3NzT2JqID0gbnVsbDtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWUpe1xuICAgICAgICAgICAgY3NzT2JqID0gdGhpcy5zZXR0aW5ncy5DU1Muc3RhdGU7XG4gICAgICAgICAgICB2YXIgYnJhbmRDU1MgPSBjc3NPYmouYnJhbmQ7XG4gICAgICAgICAgICB2YXIgbGlzdENTUyA9IGNzc09iai5saXN0O1xuICAgICAgICAgICAgdmFyIGZvcm1DU1MgPSBjc3NPYmouZm9ybTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nzc09iai5uYXZiYXJ9PlxuICAgICAgICAgICAgICAgICAgICA8QnJhbmQgY3NzPXticmFuZENTU30gdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MuYnJhbmR9IGRvY2s9e2RvY2t9IHBvc2l0aW9uPXtwb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgY3NzPXtsaXN0Q1NTfSB1c2VDU1M9e3RoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5uYXZMaXN0fSBkb2NrPXtkb2NrfSBwb3NpdGlvbj17cG9zfS8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNzcz17Zm9ybUNTU30gdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MuZm9ybX0gZG9jaz17ZG9ja30gcG9zaXRpb249e3Bvc30vPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgICBzdHlsZT17c3R5bGVPYmp9PlxuICAgICAgICAgICAgICAgICAgICA8QnJhbmQgdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MuYnJhbmR9IGRvY2s9e2RvY2t9IHBvc2l0aW9uPXtwb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgIHVzZUNTUz17dGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWV9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLm5hdkxpc3R9IGRvY2s9e2RvY2t9IHBvc2l0aW9uPXtwb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gIHVzZUNTUz17dGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWV9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLmZvcm19IGRvY2s9e2RvY2t9IHBvc2l0aW9uPXtwb3N9Lz5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKTtcblxuICAgICAgICB9XG5cblxuICAgIH1cblxufVxuXG5cblxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5OYXZiYXJcIiwgTmF2YmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuXG5cblxuXG4iXX0=
