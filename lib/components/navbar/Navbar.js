"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_AbstractComponent) {
    _inherits(Navbar, _AbstractComponent);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props, "container"));
    }

    _createClass(Navbar, [{
        key: "renderChildren",
        value: function renderChildren() {
            this.settings.props.addChildProps("dock", this.settings.dock.value);
            this.settings.props.addChildProps("useCSS", this.settings.useCSS.value);
            return _ComponentManager2.default.renderChildren(this, this.propsManager);
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Navbar ---Render---");
            var styleObj = this.settings.style.state;
            var cssName = this.settings.CSS.getCSSFor();
            var childrenUI = this.renderChildren();

            if (this.settings.useCSS.value) {
                return React.createElement(
                    "nav",
                    { className: cssName, style: styleObj },
                    childrenUI
                );
            } else {
                return React.createElement(
                    "nav",
                    { style: styleObj },
                    childrenUI
                );
            }
        }
    }]);

    return Navbar;
}(_AbstractComponent3.default);

Navbar.Brand = _Brand2.default;
Navbar.Logo = _Logo2.default;
Navbar.Title = _Title2.default;
Navbar.List = _List2.default;
Navbar.Link = _Link2.default;
Navbar.Form = _Form2.default;

_ComponentManager2.default.registerToolConfig(Navbar, _Config2.default.Navbar);
_ComponentManager2.default.registerToolConfig(Navbar.Brand, _Config2.default.Brand);
_ComponentManager2.default.registerToolConfig(Navbar.Logo, _Config2.default.Logo);
_ComponentManager2.default.registerToolConfig(Navbar.Title, _Config2.default.Title);
_ComponentManager2.default.registerToolConfig(Navbar.List, _Config2.default.List);
_ComponentManager2.default.registerToolConfig(Navbar.Link, _Config2.default.Link);
_ComponentManager2.default.registerToolConfig(Navbar.Form, _Config2.default.Form);

_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Navbar", Navbar);
_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Brand", Navbar.Brand);
_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Logo", Navbar.Logo);
_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Title", Navbar.Title);
_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.List", Navbar.List);
_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Link", Navbar.Link);
_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Form", Navbar.Form);

Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

exports.default = Navbar;
//# sourceMappingURL=data:application/json;base64,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UUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRDs7a0JBRWUiLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcbmltcG9ydCBCcmFuZCBmcm9tIFwiLi9CcmFuZFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXIgZnJvbSBcIi4uL0hUTUxXcmFwcGVyXCI7XG5pbXBvcnQgbmF2YmFyQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMsXCJjb250YWluZXJcIik7XG4gICAgfVxuXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJkb2NrXCIsdGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwidXNlQ1NTXCIsdGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWUpO1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzLHRoaXMucHJvcHNNYW5hZ2VyKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIk5hdmJhciAtLS1SZW5kZXItLS1cIik7XG4gICAgICAgIHZhciBzdHlsZU9iaiA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuc3RhdGU7XG4gICAgICAgIHZhciBjc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5DU1MuZ2V0Q1NTRm9yKCk7XG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9ian0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbk5hdmJhci5CcmFuZCA9IEJyYW5kO1xuTmF2YmFyLkxvZ28gPSBMb2dvO1xuTmF2YmFyLlRpdGxlID0gVGl0bGU7XG5OYXZiYXIuTGlzdCA9IExpc3Q7XG5OYXZiYXIuTGluayA9IExpbms7XG5OYXZiYXIuRm9ybSA9IEZvcm07XG5cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLG5hdmJhckNvbmZpZy5OYXZiYXIpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkJyYW5kLG5hdmJhckNvbmZpZy5CcmFuZCk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTG9nbyxuYXZiYXJDb25maWcuTG9nbyk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuVGl0bGUsbmF2YmFyQ29uZmlnLlRpdGxlKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5MaXN0LG5hdmJhckNvbmZpZy5MaXN0KTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5MaW5rLG5hdmJhckNvbmZpZy5MaW5rKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5Gb3JtLG5hdmJhckNvbmZpZy5Gb3JtKTtcblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLk5hdmJhclwiLE5hdmJhcik7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuQnJhbmRcIixOYXZiYXIuQnJhbmQpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxvZ29cIixOYXZiYXIuTG9nbyk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuVGl0bGVcIixOYXZiYXIuVGl0bGUpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpc3RcIixOYXZiYXIuTGlzdCk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGlua1wiLE5hdmJhci5MaW5rKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5Gb3JtXCIsTmF2YmFyLkZvcm0pO1xuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5OYXZiYXJcIiwgTmF2YmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuXG5cblxuXG4iXX0=
