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

        _this.renderChildren = _this.renderChildren.bind(_this);
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _App2.default.addForceUpdateToCallbacks(_this);
        return _this;
    }

    _createClass(Navbar, [{
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
            this.settings.props.addChildProps("dock", this.settings.dock.value);
            this.settings.props.addChildProps("useCSS", this.settings.useCSS.value);
            return _App2.default.renderChildren(this, this.propsManager);
        }
    }, {
        key: "render",
        value: function render() {
            if (_App2.default.debug) console.log("Navbar ---Render---");
            var styleObj = this.settings.style.getStyleFor(null);
            var cssName = this.settings.CSS.getCSSFor();
            var childrenUI = this.renderChildren();

            if (this.settings.useCSS.value) {
                return _react2.default.createElement(
                    "nav",
                    { className: cssName, style: styleObj },
                    childrenUI
                );
            } else {
                return _react2.default.createElement(
                    "nav",
                    { style: styleObj },
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
//# sourceMappingURL=data:application/json;base64,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LEtBQVAsRUFBYSxpQkFBYSxLQUFiLENBQXBDO0FBQ0EsY0FBSSxrQkFBSixDQUF1QixPQUFPLElBQVAsRUFBWSxpQkFBYSxJQUFiLENBQW5DO0FBQ0EsY0FBSSxrQkFBSixDQUF1QixPQUFPLElBQVAsRUFBWSxpQkFBYSxJQUFiLENBQW5DO0FBQ0EsY0FBSSxrQkFBSixDQUF1QixPQUFPLElBQVAsRUFBWSxpQkFBYSxJQUFiLENBQW5DOztBQUVBLGNBQUksMEJBQUosQ0FBK0IsZ0NBQS9CLEVBQWdFLE1BQWhFO0FBQ0EsY0FBSSwwQkFBSixDQUErQiwrQkFBL0IsRUFBK0QsT0FBTyxLQUFQLENBQS9EO0FBQ0EsY0FBSSwwQkFBSixDQUErQiw4QkFBL0IsRUFBOEQsT0FBTyxJQUFQLENBQTlEO0FBQ0EsY0FBSSwwQkFBSixDQUErQiwrQkFBL0IsRUFBK0QsT0FBTyxLQUFQLENBQS9EO0FBQ0EsY0FBSSwwQkFBSixDQUErQiw4QkFBL0IsRUFBOEQsT0FBTyxJQUFQLENBQTlEO0FBQ0EsY0FBSSwwQkFBSixDQUErQiw4QkFBL0IsRUFBOEQsT0FBTyxJQUFQLENBQTlEO0FBQ0EsY0FBSSwwQkFBSixDQUErQiw4QkFBL0IsRUFBOEQsT0FBTyxJQUFQLENBQTlEOztBQUVBLE1BQU0sYUFBTixDQUFvQixtQkFBcEIsRUFBeUMsTUFBekMsRUFBZ0QsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQWpEOztrQkFFZSIsImZpbGUiOiJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgQnJhbmQgZnJvbSBcIi4vQnJhbmRcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IEhUTUxXcmFwcGVyIGZyb20gXCIuLi9IVE1MV3JhcHBlclwiO1xuaW1wb3J0IG5hdmJhckNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IFByb3BzTWFuYWdlciBmcm9tIFwiLi4vUHJvcHNNYW5hZ2VyXCI7XG5cblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIk5hdmJhciBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3MgOiBuZXcgbmF2YmFyQ29uZmlnLk5hdmJhcigpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG4gICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgQXBwLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3ModGhpcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJOYXZiYXIgY29tcG9uZW50V2lsbFVubW91bnRcIik7XG4gICAgICAgIEFwcC5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3ModGhpcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIk5hdmJhciBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIpO1xuICAgICAgICBBcHAuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgLy8gd2VhdmVzdGF0ZSBjaGFuZ2UgZGlyZWN0bHkgY2FsbHMgZm9yY2VVcGRhdGUsIHNvIG5vIG5lZWQgdG8gdXNlIFdlYXZlLmRldGVjdENoYW5nZVxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJOYXZiYXIgc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xuICAgICAgICAvLyBkZWZhdWx0IHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gdGhpcyBlbnN1cmVzIHBhcmVudCByZW5kZXIgd29udCByZW5kZXIgdGhlIG5hdmJhclxuICAgIH1cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiZG9ja1wiLHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInVzZUNTU1wiLHRoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLHRoaXMucHJvcHNNYW5hZ2VyKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTmF2YmFyIC0tLVJlbmRlci0tLVwiKTtcbiAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsKTtcbiAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWUpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y3NzTmFtZX0gc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBzdHlsZT17c3R5bGVPYmp9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuTmF2YmFyLkJyYW5kID0gQnJhbmQ7XG5OYXZiYXIuTG9nbyA9IExvZ287XG5OYXZiYXIuVGl0bGUgPSBUaXRsZTtcbk5hdmJhci5MaXN0ID0gTGlzdDtcbk5hdmJhci5MaW5rID0gTGluaztcbk5hdmJhci5Gb3JtID0gRm9ybTtcblxuXG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhcixuYXZiYXJDb25maWcuTmF2YmFyKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkJyYW5kLG5hdmJhckNvbmZpZy5CcmFuZCk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5Mb2dvLG5hdmJhckNvbmZpZy5Mb2dvKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLlRpdGxlLG5hdmJhckNvbmZpZy5UaXRsZSk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5MaXN0LG5hdmJhckNvbmZpZy5MaXN0KTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxpbmssbmF2YmFyQ29uZmlnLkxpbmspO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuRm9ybSxuYXZiYXJDb25maWcuRm9ybSk7XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLk5hdmJhclwiLE5hdmJhcik7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5CcmFuZFwiLE5hdmJhci5CcmFuZCk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5Mb2dvXCIsTmF2YmFyLkxvZ28pO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuVGl0bGVcIixOYXZiYXIuVGl0bGUpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGlzdFwiLE5hdmJhci5MaXN0KTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpbmtcIixOYXZiYXIuTGluayk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5Gb3JtXCIsTmF2YmFyLkZvcm0pO1xuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5OYXZiYXJcIiwgTmF2YmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuXG5cblxuXG4iXX0=
