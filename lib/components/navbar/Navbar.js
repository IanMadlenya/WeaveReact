"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

var _Brand = require("./Brand");

var _Brand2 = _interopRequireDefault(_Brand);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _Title = require("./Title");

var _Title2 = _interopRequireDefault(_Title);

var _List = require("./List");

var _List2 = _interopRequireDefault(_List);

var _Form = require("./Form");

var _Form2 = _interopRequireDefault(_Form);

var _Link = require("./Link");

var _Link2 = _interopRequireDefault(_Link);

var _HTMLWrapper = require("../HTMLWrapper");

var _HTMLWrapper2 = _interopRequireDefault(_HTMLWrapper);

var _Config = require("./Config");

var _Config2 = _interopRequireDefault(_Config);

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _PropsManager = require("../PropsManager");

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        if (_App2.default.debug) console.log("Navbar constructor");

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _Config2.default.Navbar();
        _this.getStyle = _this.getStyle.bind(_this);

        _this.renderChildren = _this.renderChildren.bind(_this);
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _App2.default.addForceUpdateToCallbacks(_this);
        _this.propsManager = new _PropsManager2.default();
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
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (_App2.default.debug) console.log("Navbar componentWillUnmount");
            _App2.default.removeForceUpdateFromCallbacks(this);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (_App2.default.debug) console.log("Navbar componentWillReceiveProps");
            _App2.default.componentWillReceiveProps(this, nextProps);
        }

        // weavestate change directly calls forceUpdate, so no need to use Weave.detectChange

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            if (_App2.default.debug) console.log("Navbar shouldComponentUpdate");
            // default return true
            return false; // this ensures parent render wont render the navbar
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            this.propsManager.addNewProps("dock", this.settings.dock.value);
            this.propsManager.addNewProps("useCSS", this.settings.useCSS.value);
            return _App2.default.renderChildren(this, this.propsManager);
        }
    }, {
        key: "render",
        value: function render() {
            if (_App2.default.debug) console.log("Navbar ---Render---");
            var styleObj = this.getStyle();
            var cssName = this.settings.CSS.getCSSFor();
            var childrenUI = this.renderChildren();

            if (this.settings.useCSS.value) {
                return _react2.default.createElement(
                    "nav",
                    { className: cssName },
                    childrenUI
                );
            } else {
                return _react2.default.createElement(
                    "nav",
                    { className: cssName, style: styleObj },
                    childrenUI
                );
            }
        }
    }]);

    return Navbar;
}(_react2.default.Component);

Navbar.Brand = _Brand2.default;
Navbar.Logo = _Logo2.default;
Navbar.Title = _Title2.default;
Navbar.List = _List2.default;
Navbar.Link = _Link2.default;
Navbar.Form = _Form2.default;

_App2.default.registerToolConfig(Navbar, _Config2.default.Navbar);
_App2.default.registerToolConfig(Navbar.Brand, _Config2.default.Brand);
_App2.default.registerToolConfig(Navbar.Logo, _Config2.default.Logo);
_App2.default.registerToolConfig(Navbar.Title, _Config2.default.Title);
_App2.default.registerToolConfig(Navbar.List, _Config2.default.List);
_App2.default.registerToolConfig(Navbar.Link, _Config2.default.Link);
_App2.default.registerToolConfig(Navbar.Form, _Config2.default.Form);

_App2.default.registerToolImplementation("weavereact.navbarConfig.Navbar", Navbar);
_App2.default.registerToolImplementation("weavereact.navbarConfig.Brand", Navbar.Brand);
_App2.default.registerToolImplementation("weavereact.navbarConfig.Logo", Navbar.Logo);
_App2.default.registerToolImplementation("weavereact.navbarConfig.Title", Navbar.Title);
_App2.default.registerToolImplementation("weavereact.navbarConfig.List", Navbar.List);
_App2.default.registerToolImplementation("weavereact.navbarConfig.Link", Navbar.Link);
_App2.default.registerToolImplementation("weavereact.navbarConfig.Form", Navbar.Form);

Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

exports.default = Navbar;
//# sourceMappingURL=data:application/json;base64,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bkM7QUFDQSxjQUFJLGtCQUFKLENBQXVCLE9BQU8sSUFBUCxFQUFZLGlCQUFhLElBQWIsQ0FBbkM7QUFDQSxjQUFJLGtCQUFKLENBQXVCLE9BQU8sSUFBUCxFQUFZLGlCQUFhLElBQWIsQ0FBbkM7O0FBRUEsY0FBSSwwQkFBSixDQUErQixnQ0FBL0IsRUFBZ0UsTUFBaEU7QUFDQSxjQUFJLDBCQUFKLENBQStCLCtCQUEvQixFQUErRCxPQUFPLEtBQVAsQ0FBL0Q7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7QUFDQSxjQUFJLDBCQUFKLENBQStCLCtCQUEvQixFQUErRCxPQUFPLEtBQVAsQ0FBL0Q7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7O0FBRUEsTUFBTSxhQUFOLENBQW9CLG1CQUFwQixFQUF5QyxNQUF6QyxFQUFnRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakQ7O2tCQUVlIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBCcmFuZCBmcm9tIFwiLi9CcmFuZFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXIgZnJvbSBcIi4uL0hUTUxXcmFwcGVyXCI7XG5pbXBvcnQgbmF2YmFyQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgUHJvcHNNYW5hZ2VyIGZyb20gXCIuLi9Qcm9wc01hbmFnZXJcIjtcblxuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTmF2YmFyIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5ncyA6IG5ldyBuYXZiYXJDb25maWcuTmF2YmFyKCk7XG4gICAgICAgIHRoaXMuZ2V0U3R5bGUgPSB0aGlzLmdldFN0eWxlLmJpbmQodGhpcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbmRlckNoaWxkcmVuID0gdGhpcy5yZW5kZXJDaGlsZHJlbi5iaW5kKHRoaXMpO1xuICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIEFwcC5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlciA9ICBuZXcgUHJvcHNNYW5hZ2VyKCk7XG4gICAgfVxuXG4gICAgIGdldFN0eWxlKCkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwpXG4gICAgICAgICBpZihzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID09PSBcImZpeGVkXCIpe1xuICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJ0b3BcIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ0b3BcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwiYm90dG9tXCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYm90dG9tXCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcInJpZ2h0XCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wicmlnaHRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImxlZnRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgIH1cblxuICAgIFxuICAgIFxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIk5hdmJhciBjb21wb25lbnRXaWxsVW5tb3VudFwiKTtcbiAgICAgICAgQXBwLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJOYXZiYXIgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiKTtcbiAgICAgICAgQXBwLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModGhpcyxuZXh0UHJvcHMpO1xuICAgIH1cbiAgICBcbiAgICAvLyB3ZWF2ZXN0YXRlIGNoYW5nZSBkaXJlY3RseSBjYWxscyBmb3JjZVVwZGF0ZSwgc28gbm8gbmVlZCB0byB1c2UgV2VhdmUuZGV0ZWN0Q2hhbmdlXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIk5hdmJhciBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIC8vIGRlZmF1bHQgcmV0dXJuIHRydWVcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyB0aGlzIGVuc3VyZXMgcGFyZW50IHJlbmRlciB3b250IHJlbmRlciB0aGUgbmF2YmFyXG4gICAgfVxuICAgIFxuICAgIFxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGROZXdQcm9wcyhcImRvY2tcIix0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUpO1xuICAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJ1c2VDU1NcIix0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZSk7XG4gICAgICAgICByZXR1cm4gQXBwLnJlbmRlckNoaWxkcmVuKHRoaXMsdGhpcy5wcm9wc01hbmFnZXIpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJOYXZiYXIgLS0tUmVuZGVyLS0tXCIpO1xuICAgICAgICB2YXIgc3R5bGVPYmogPSB0aGlzLmdldFN0eWxlKCk7XG4gICAgICAgIHZhciBjc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5DU1MuZ2V0Q1NTRm9yKCk7XG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y3NzTmFtZX0gc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbk5hdmJhci5CcmFuZCA9IEJyYW5kO1xuTmF2YmFyLkxvZ28gPSBMb2dvO1xuTmF2YmFyLlRpdGxlID0gVGl0bGU7XG5OYXZiYXIuTGlzdCA9IExpc3Q7XG5OYXZiYXIuTGluayA9IExpbms7XG5OYXZiYXIuRm9ybSA9IEZvcm07XG5cblxuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIsbmF2YmFyQ29uZmlnLk5hdmJhcik7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5CcmFuZCxuYXZiYXJDb25maWcuQnJhbmQpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTG9nbyxuYXZiYXJDb25maWcuTG9nbyk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5UaXRsZSxuYXZiYXJDb25maWcuVGl0bGUpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTGlzdCxuYXZiYXJDb25maWcuTGlzdCk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5MaW5rLG5hdmJhckNvbmZpZy5MaW5rKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkZvcm0sbmF2YmFyQ29uZmlnLkZvcm0pO1xuXG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5OYXZiYXJcIixOYXZiYXIpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuQnJhbmRcIixOYXZiYXIuQnJhbmQpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTG9nb1wiLE5hdmJhci5Mb2dvKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLlRpdGxlXCIsTmF2YmFyLlRpdGxlKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpc3RcIixOYXZiYXIuTGlzdCk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaW5rXCIsTmF2YmFyLkxpbmspO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuRm9ybVwiLE5hdmJhci5Gb3JtKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuTmF2YmFyXCIsIE5hdmJhcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cblxuXG5cblxuIl19
