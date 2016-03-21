"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

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

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

        _ComponentManager2.default.initialize(_this, "container");
        return _this;
    }

    _createClass(Navbar, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _ComponentManager2.default.componentWillUnmount(this);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _ComponentManager2.default.componentWillReceiveProps(this, nextProps);
        }

        // weavestate change directly calls forceUpdate, so no need to use Weave.detectChange

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            if (App.debug) console.log("Navbar shouldComponentUpdate");
            // default return true
            return false; // this ensures parent render wont render the navbar
        }
    }, {
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
//# sourceMappingURL=data:application/json;base64,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QSwyQkFBaUIsMEJBQWpCLENBQTRDLCtCQUE1QyxFQUE0RSxPQUFPLEtBQVAsQ0FBNUU7QUFDQSwyQkFBaUIsMEJBQWpCLENBQTRDLDhCQUE1QyxFQUEyRSxPQUFPLElBQVAsQ0FBM0U7QUFDQSwyQkFBaUIsMEJBQWpCLENBQTRDLDhCQUE1QyxFQUEyRSxPQUFPLElBQVAsQ0FBM0U7QUFDQSwyQkFBaUIsMEJBQWpCLENBQTRDLDhCQUE1QyxFQUEyRSxPQUFPLElBQVAsQ0FBM0U7O0FBRUEsTUFBTSxhQUFOLENBQW9CLG1CQUFwQixFQUF5QyxNQUF6QyxFQUFnRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakQ7O2tCQUVlIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcbmltcG9ydCBIVE1MV3JhcHBlciBmcm9tIFwiLi4vSFRNTFdyYXBwZXJcIjtcbmltcG9ydCBuYXZiYXJDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XG5cblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmluaXRpYWxpemUodGhpcyxcImNvbnRhaW5lclwiKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNvbXBvbmVudFdpbGxVbm1vdW50KHRoaXMpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModGhpcyxuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIC8vIHdlYXZlc3RhdGUgY2hhbmdlIGRpcmVjdGx5IGNhbGxzIGZvcmNlVXBkYXRlLCBzbyBubyBuZWVkIHRvIHVzZSBXZWF2ZS5kZXRlY3RDaGFuZ2VcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUoKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTmF2YmFyIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcbiAgICAgICAgLy8gZGVmYXVsdCByZXR1cm4gdHJ1ZVxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHRoaXMgZW5zdXJlcyBwYXJlbnQgcmVuZGVyIHdvbnQgcmVuZGVyIHRoZSBuYXZiYXJcbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImRvY2tcIix0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJ1c2VDU1NcIix0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZSk7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnJlbmRlckNoaWxkcmVuKHRoaXMsdGhpcy5wcm9wc01hbmFnZXIpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiTmF2YmFyIC0tLVJlbmRlci0tLVwiKTtcbiAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsKTtcbiAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWUpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y3NzTmFtZX0gc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBzdHlsZT17c3R5bGVPYmp9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuTmF2YmFyLkJyYW5kID0gQnJhbmQ7XG5OYXZiYXIuTG9nbyA9IExvZ287XG5OYXZiYXIuVGl0bGUgPSBUaXRsZTtcbk5hdmJhci5MaXN0ID0gTGlzdDtcbk5hdmJhci5MaW5rID0gTGluaztcbk5hdmJhci5Gb3JtID0gRm9ybTtcblxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIsbmF2YmFyQ29uZmlnLk5hdmJhcik7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuQnJhbmQsbmF2YmFyQ29uZmlnLkJyYW5kKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5Mb2dvLG5hdmJhckNvbmZpZy5Mb2dvKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5UaXRsZSxuYXZiYXJDb25maWcuVGl0bGUpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxpc3QsbmF2YmFyQ29uZmlnLkxpc3QpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxpbmssbmF2YmFyQ29uZmlnLkxpbmspO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkZvcm0sbmF2YmFyQ29uZmlnLkZvcm0pO1xuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTmF2YmFyXCIsTmF2YmFyKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5CcmFuZFwiLE5hdmJhci5CcmFuZCk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTG9nb1wiLE5hdmJhci5Mb2dvKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5UaXRsZVwiLE5hdmJhci5UaXRsZSk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGlzdFwiLE5hdmJhci5MaXN0KTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaW5rXCIsTmF2YmFyLkxpbmspO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkZvcm1cIixOYXZiYXIuRm9ybSk7XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lk5hdmJhclwiLCBOYXZiYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cblxuXG5cbiJdfQ==
