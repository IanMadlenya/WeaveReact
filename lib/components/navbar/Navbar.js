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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _Config2.default.Navbar();
        _this.getStyle = _this.getStyle.bind(_this);
        _this.renderChildren = _this.renderChildren.bind(_this);
        if (_this.props.children) _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _this.addCallbacks = _this.addCallbacks.bind(_this);
        _this.removeCallbacks = _this.removeCallbacks.bind(_this);

        return _this;
    }

    _createClass(Navbar, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                if (nextProps.settings) {
                    this.removeCallbacks();
                    this.settings = nextProps.settings;
                    this.addCallbacks();
                }
            }
            if (this.props.style !== nextProps.style) {
                // user style added through UI is Sessioned
                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
            }
            if (this.props.children !== nextProps.children) {
                _App2.default.hookSessionStateForComponentChildren(nextProps.children, this.settings);
            }
        }
    }, {
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
            this.addCallbacks();
        }
    }, {
        key: "addCallbacks",
        value: function addCallbacks() {
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
            this.settings.CSS.addImmediateCallback(this, this.forceUpdate);
            this.settings.useCSS.addImmediateCallback(this, this.forceUpdate);
            this.settings.dock.addImmediateCallback(this, this.forceUpdate);
            this.settings.children.childListCallbacks.addGroupedCallback(this, this.forceUpdate);
        }
    }, {
        key: "removeCallbacks",
        value: function removeCallbacks() {
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
            this.settings.CSS.removeCallback(this, this.forceUpdate);
            this.settings.useCSS.removeCallback(this, this.forceUpdate);
            this.settings.dock.removeCallback(this, this.forceUpdate);
            this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.removeCallbacks();
        }
    }, {
        key: "renderChildren",
        value: function renderChildren(CSS) {
            var childConfigs = this.settings.children.getObjects();
            var clonedChildren = childConfigs.map(function (childConfig, index) {
                var child = this.settings.configChildMap.get(childConfig);

                var additionalProps = {
                    "dock": this.settings.dock.value,
                    "position": this.settings.style.position.value,
                    "useCSS": this.settings.useCSS.value
                };
                if (child) {
                    var props = _App2.default.mergeInto({}, child.props);
                    if (typeof child.type === "string") {
                        var configName = this.settings.children.getName(childConfig);
                        return _react2.default.createElement(
                            _HTMLWrapper2.default,
                            { key: configName, settings: childConfig },
                            child
                        );
                    } else {
                        props = _App2.default.mergeInto(props, additionalProps);
                        props["settings"] = childConfig;
                        if (CSS) {
                            props["className"] = CSS[childName];
                            props["CSS"] = CSS;
                        }
                        if (this.settings.childConfigMap.has(child)) this.settings.childConfigMap.delete(child);
                        var clonedChild = _react2.default.cloneElement(child, props);
                        this.settings.configChildMap.set(childConfig, clonedChild);
                        this.settings.childConfigMap.set(clonedChild, childConfig);
                        return clonedChild;
                    }
                } else {
                    var configClass = Weave.getPath(childConfig).getType();
                    var ToolClass = _App2.default.getToolImplementation(configClass);
                    var configName = this.settings.children.getName(childConfig);
                    var newChild = _react2.default.createElement(ToolClass, { key: configName, settings: childConfig });
                    //this.settings.configChildMap.set(childConfig,newChild);
                    //this.settings.childConfigMap.set(newChild,childConfig);
                    return newChild;
                }
            }.bind(this));

            return clonedChildren;
        }
    }, {
        key: "render",
        value: function render() {

            var styleObj = this.getStyle();
            var newProps = {};
            var additionalProps = {
                "dock": this.settings.dock.value,
                "position": this.settings.style.position.value,
                "useCSS": this.settings.useCSS.value
            };

            var childrenUI = [];

            if (this.settings.useCSS.value) {
                var cssObj = this.settings.CSS.state;
                childrenUI = this.renderChildren(cssObj);
                return _react2.default.createElement(
                    "nav",
                    { className: cssObj.navbar },
                    childrenUI
                );
            } else {
                childrenUI = this.renderChildren();
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
Navbar.List = _List2.default;
Navbar.Link = _Link2.default;
Navbar.Form = _Form2.default;

_App2.default.registerToolConfig(Navbar, _Config2.default.Navbar);
_App2.default.registerToolConfig(Navbar.Brand, _Config2.default.Brand);
_App2.default.registerToolConfig(Navbar.Logo, _Config2.default.Logo);
_App2.default.registerToolConfig(Navbar.List, _Config2.default.List);
_App2.default.registerToolConfig(Navbar.Link, _Config2.default.Link);
_App2.default.registerToolConfig(Navbar.Form, _Config2.default.Form);

_App2.default.registerToolImplementation("weavereact.navbarConfig.Navbar", Navbar);
_App2.default.registerToolImplementation("weavereact.navbarConfig.Brand", Navbar.Brand);
_App2.default.registerToolImplementation("weavereact.navbarConfig.Logo", Navbar.Logo);
_App2.default.registerToolImplementation("weavereact.navbarConfig.List", Navbar.List);
_App2.default.registerToolImplementation("weavereact.navbarConfig.Link", Navbar.Link);
_App2.default.registerToolImplementation("weavereact.navbarConfig.Form", Navbar.Form);

Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

exports.default = Navbar;
//# sourceMappingURL=data:application/json;base64,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RSxNQUFoRTtBQUNBLGNBQUksMEJBQUosQ0FBK0IsK0JBQS9CLEVBQStELE9BQU8sS0FBUCxDQUEvRDtBQUNBLGNBQUksMEJBQUosQ0FBK0IsOEJBQS9CLEVBQThELE9BQU8sSUFBUCxDQUE5RDtBQUNBLGNBQUksMEJBQUosQ0FBK0IsOEJBQS9CLEVBQThELE9BQU8sSUFBUCxDQUE5RDtBQUNBLGNBQUksMEJBQUosQ0FBK0IsOEJBQS9CLEVBQThELE9BQU8sSUFBUCxDQUE5RDtBQUNBLGNBQUksMEJBQUosQ0FBK0IsOEJBQS9CLEVBQThELE9BQU8sSUFBUCxDQUE5RDs7QUFFQSxNQUFNLGFBQU4sQ0FBb0IsbUJBQXBCLEVBQXlDLE1BQXpDLEVBQWdELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRDs7a0JBRWUiLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXIgZnJvbSBcIi4uL0hUTUxXcmFwcGVyXCI7XG5pbXBvcnQgbmF2YmFyQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuXG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzIDogbmV3IG5hdmJhckNvbmZpZy5OYXZiYXIoKTtcbiAgICAgICAgdGhpcy5nZXRTdHlsZSA9IHRoaXMuZ2V0U3R5bGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSl0aGlzLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgIGdldFN0eWxlKCkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwpXG4gICAgICAgICBpZihzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID09PSBcImZpeGVkXCIpe1xuICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJ0b3BcIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ0b3BcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwiYm90dG9tXCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYm90dG9tXCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcInJpZ2h0XCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wicmlnaHRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImxlZnRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKClcbiAgICB9XG4gICAgXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLkNTUy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVzZUNTUy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRvY2suYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLkNTUy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVzZUNTUy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRvY2sucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oQ1NTKXtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBjaGlsZENvbmZpZ3MubWFwKGZ1bmN0aW9uKGNoaWxkQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGFkZGl0aW9uYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBcImRvY2tcIjogdGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlLFxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIjp0aGlzLnNldHRpbmdzLnN0eWxlLnBvc2l0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIFwidXNlQ1NTXCI6dGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHt9LGNoaWxkLnByb3BzKTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9ICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEhUTUxXcmFwcGVyIGtleT17Y29uZmlnTmFtZX0gc2V0dGluZ3M9e2NoaWxkQ29uZmlnfT57Y2hpbGR9PC9IVE1MV3JhcHBlcj5cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHByb3BzLGFkZGl0aW9uYWxQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wic2V0dGluZ3NcIl0gPSBjaGlsZENvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgaWYoQ1NTKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wiY2xhc3NOYW1lXCJdID0gQ1NTW2NoaWxkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1tcIkNTU1wiXSA9IENTUztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmhhcyhjaGlsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmRlbGV0ZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWRDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLGNsb25lZENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQoY2xvbmVkQ2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IFdlYXZlLmdldFBhdGgoY2hpbGRDb25maWcpLmdldFR5cGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgVG9vbENsYXNzID0gIEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24oY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPFRvb2xDbGFzcyBrZXk9e2NvbmZpZ05hbWV9ICBzZXR0aW5ncz17Y2hpbGRDb25maWd9Lz47XG4gICAgICAgICAgICAgICAgLy90aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgLy90aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChuZXdDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkOyBcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgICB2YXIgbmV3UHJvcHMgPSB7fVxuICAgICAgICB2YXIgYWRkaXRpb25hbFByb3BzID0ge1xuICAgICAgICAgICAgXCJkb2NrXCI6IHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSxcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjp0aGlzLnNldHRpbmdzLnN0eWxlLnBvc2l0aW9uLnZhbHVlLFxuICAgICAgICAgICAgXCJ1c2VDU1NcIjp0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSBbXVxuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciBjc3NPYmogPSB0aGlzLnNldHRpbmdzLkNTUy5zdGF0ZTtcbiAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKGNzc09iaik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjc3NPYmoubmF2YmFyfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbk5hdmJhci5CcmFuZCA9IEJyYW5kO1xuTmF2YmFyLkxvZ28gPSBMb2dvO1xuTmF2YmFyLkxpc3QgPSBMaXN0O1xuTmF2YmFyLkxpbmsgPSBMaW5rO1xuTmF2YmFyLkZvcm0gPSBGb3JtO1xuXG5cbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLG5hdmJhckNvbmZpZy5OYXZiYXIpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuQnJhbmQsbmF2YmFyQ29uZmlnLkJyYW5kKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxvZ28sbmF2YmFyQ29uZmlnLkxvZ28pO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTGlzdCxuYXZiYXJDb25maWcuTGlzdCk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5MaW5rLG5hdmJhckNvbmZpZy5MaW5rKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkZvcm0sbmF2YmFyQ29uZmlnLkZvcm0pO1xuXG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5OYXZiYXJcIixOYXZiYXIpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuQnJhbmRcIixOYXZiYXIuQnJhbmQpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTG9nb1wiLE5hdmJhci5Mb2dvKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpc3RcIixOYXZiYXIuTGlzdCk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaW5rXCIsTmF2YmFyLkxpbmspO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuRm9ybVwiLE5hdmJhci5Gb3JtKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuTmF2YmFyXCIsIE5hdmJhcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cblxuXG5cblxuIl19
