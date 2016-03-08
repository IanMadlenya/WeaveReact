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
//# sourceMappingURL=data:application/json;base64,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bkM7QUFDQSxjQUFJLGtCQUFKLENBQXVCLE9BQU8sSUFBUCxFQUFZLGlCQUFhLElBQWIsQ0FBbkM7QUFDQSxjQUFJLGtCQUFKLENBQXVCLE9BQU8sSUFBUCxFQUFZLGlCQUFhLElBQWIsQ0FBbkM7O0FBRUEsY0FBSSwwQkFBSixDQUErQixnQ0FBL0IsRUFBZ0UsTUFBaEU7QUFDQSxjQUFJLDBCQUFKLENBQStCLCtCQUEvQixFQUErRCxPQUFPLEtBQVAsQ0FBL0Q7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7QUFDQSxjQUFJLDBCQUFKLENBQStCLCtCQUEvQixFQUErRCxPQUFPLEtBQVAsQ0FBL0Q7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7O0FBRUEsTUFBTSxhQUFOLENBQW9CLG1CQUFwQixFQUF5QyxNQUF6QyxFQUFnRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakQ7O2tCQUVlIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBCcmFuZCBmcm9tIFwiLi9CcmFuZFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXIgZnJvbSBcIi4uL0hUTUxXcmFwcGVyXCI7XG5pbXBvcnQgbmF2YmFyQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgUHJvcHNNYW5hZ2VyIGZyb20gXCIuLi9Qcm9wc01hbmFnZXJcIjtcblxuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTmF2YmFyIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5ncyA6IG5ldyBuYXZiYXJDb25maWcuTmF2YmFyKCk7XG4gICAgICAgIHRoaXMuZ2V0U3R5bGUgPSB0aGlzLmdldFN0eWxlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICBBcHAuYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIgPSAgbmV3IFByb3BzTWFuYWdlcigpO1xuICAgIH1cblxuICAgICBnZXRTdHlsZSgpIHtcbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsKTtcbiAgICAgICAgIGlmKHN0eWxlT2JqZWN0W1wicG9zaXRpb25cIl0gPT09IFwiZml4ZWRcIil7XG4gICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcInRvcFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcInRvcFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJib3R0b21cIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJib3R0b21cIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwicmlnaHRcIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJyaWdodFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiNSVcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJsZWZ0XCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wibGVmdFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiNSVcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdCk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIk5hdmJhciBjb21wb25lbnRXaWxsVW5tb3VudFwiKTtcbiAgICAgICAgQXBwLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyh0aGlzKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTmF2YmFyIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIik7XG4gICAgICAgIEFwcC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHRoaXMsbmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICAvLyB3ZWF2ZXN0YXRlIGNoYW5nZSBkaXJlY3RseSBjYWxscyBmb3JjZVVwZGF0ZSwgc28gbm8gbmVlZCB0byB1c2UgV2VhdmUuZGV0ZWN0Q2hhbmdlXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIk5hdmJhciBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIC8vIGRlZmF1bHQgcmV0dXJuIHRydWVcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyB0aGlzIGVuc3VyZXMgcGFyZW50IHJlbmRlciB3b250IHJlbmRlciB0aGUgbmF2YmFyXG4gICAgfVxuXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJkb2NrXCIsdGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlKTtcbiAgICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwidXNlQ1NTXCIsdGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWUpO1xuICAgICAgICAgcmV0dXJuIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLHRoaXMucHJvcHNNYW5hZ2VyKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTmF2YmFyIC0tLVJlbmRlci0tLVwiKTtcbiAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZSl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9ian0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5OYXZiYXIuQnJhbmQgPSBCcmFuZDtcbk5hdmJhci5Mb2dvID0gTG9nbztcbk5hdmJhci5UaXRsZSA9IFRpdGxlO1xuTmF2YmFyLkxpc3QgPSBMaXN0O1xuTmF2YmFyLkxpbmsgPSBMaW5rO1xuTmF2YmFyLkZvcm0gPSBGb3JtO1xuXG5cbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLG5hdmJhckNvbmZpZy5OYXZiYXIpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuQnJhbmQsbmF2YmFyQ29uZmlnLkJyYW5kKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxvZ28sbmF2YmFyQ29uZmlnLkxvZ28pO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuVGl0bGUsbmF2YmFyQ29uZmlnLlRpdGxlKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxpc3QsbmF2YmFyQ29uZmlnLkxpc3QpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTGluayxuYXZiYXJDb25maWcuTGluayk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5Gb3JtLG5hdmJhckNvbmZpZy5Gb3JtKTtcblxuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTmF2YmFyXCIsTmF2YmFyKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkJyYW5kXCIsTmF2YmFyLkJyYW5kKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxvZ29cIixOYXZiYXIuTG9nbyk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5UaXRsZVwiLE5hdmJhci5UaXRsZSk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaXN0XCIsTmF2YmFyLkxpc3QpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGlua1wiLE5hdmJhci5MaW5rKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkZvcm1cIixOYXZiYXIuRm9ybSk7XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lk5hdmJhclwiLCBOYXZiYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cblxuXG5cbiJdfQ==