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
//# sourceMappingURL=data:application/json;base64,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LENBQXVCLE9BQU8sSUFBUCxFQUFZLGlCQUFhLElBQWIsQ0FBbkM7O0FBRUEsY0FBSSwwQkFBSixDQUErQixnQ0FBL0IsRUFBZ0UsTUFBaEU7QUFDQSxjQUFJLDBCQUFKLENBQStCLCtCQUEvQixFQUErRCxPQUFPLEtBQVAsQ0FBL0Q7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7QUFDQSxjQUFJLDBCQUFKLENBQStCLCtCQUEvQixFQUErRCxPQUFPLEtBQVAsQ0FBL0Q7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxPQUFPLElBQVAsQ0FBOUQ7O0FBRUEsTUFBTSxhQUFOLENBQW9CLG1CQUFwQixFQUF5QyxNQUF6QyxFQUFnRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakQ7O2tCQUVlIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBCcmFuZCBmcm9tIFwiLi9CcmFuZFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXIgZnJvbSBcIi4uL0hUTUxXcmFwcGVyXCI7XG5pbXBvcnQgbmF2YmFyQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuXG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzIDogbmV3IG5hdmJhckNvbmZpZy5OYXZiYXIoKTtcbiAgICAgICAgdGhpcy5nZXRTdHlsZSA9IHRoaXMuZ2V0U3R5bGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSl0aGlzLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgIGdldFN0eWxlKCkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwpXG4gICAgICAgICBpZihzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID09PSBcImZpeGVkXCIpe1xuICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJ0b3BcIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ0b3BcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwiYm90dG9tXCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYm90dG9tXCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcInJpZ2h0XCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wicmlnaHRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImxlZnRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKClcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuQ1NTLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudXNlQ1NTLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZG9jay5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFja3MoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuQ1NTLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudXNlQ1NTLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZG9jay5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgIH1cblxuXG5cbiAgICByZW5kZXJDaGlsZHJlbihDU1Mpe1xuICAgICAgICB2YXIgY2hpbGRDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IGNoaWxkQ29uZmlncy5tYXAoZnVuY3Rpb24oY2hpbGRDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5nZXQoY2hpbGRDb25maWcpO1xuXG4gICAgICAgICAgICB2YXIgYWRkaXRpb25hbFByb3BzID0ge1xuICAgICAgICAgICAgICAgIFwiZG9ja1wiOiB0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiOnRoaXMuc2V0dGluZ3Muc3R5bGUucG9zaXRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgXCJ1c2VDU1NcIjp0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IEFwcC5tZXJnZUludG8oe30sY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8SFRNTFdyYXBwZXIga2V5PXtjb25maWdOYW1lfSBzZXR0aW5ncz17Y2hpbGRDb25maWd9PntjaGlsZH08L0hUTUxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IEFwcC5tZXJnZUludG8ocHJvcHMsYWRkaXRpb25hbFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICBpZihDU1Mpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSBDU1NbY2hpbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wiQ1NTXCJdID0gQ1NTO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV2VhdmUuZ2V0UGF0aChjaGlsZENvbmZpZykuZ2V0VHlwZSgpO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSA8VG9vbENsYXNzIGtleT17Y29uZmlnTmFtZX0gIHNldHRpbmdzPXtjaGlsZENvbmZpZ30vPjtcbiAgICAgICAgICAgICAgICAvL3RoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KG5ld0NoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgICB2YXIgbmV3UHJvcHMgPSB7fVxuICAgICAgICB2YXIgYWRkaXRpb25hbFByb3BzID0ge1xuICAgICAgICAgICAgXCJkb2NrXCI6IHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSxcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjp0aGlzLnNldHRpbmdzLnN0eWxlLnBvc2l0aW9uLnZhbHVlLFxuICAgICAgICAgICAgXCJ1c2VDU1NcIjp0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSBbXVxuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciBjc3NPYmogPSB0aGlzLnNldHRpbmdzLkNTUy5zdGF0ZTtcbiAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKGNzc09iaik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjc3NPYmoubmF2YmFyfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbk5hdmJhci5CcmFuZCA9IEJyYW5kO1xuTmF2YmFyLkxvZ28gPSBMb2dvO1xuTmF2YmFyLlRpdGxlID0gVGl0bGU7XG5OYXZiYXIuTGlzdCA9IExpc3Q7XG5OYXZiYXIuTGluayA9IExpbms7XG5OYXZiYXIuRm9ybSA9IEZvcm07XG5cblxuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIsbmF2YmFyQ29uZmlnLk5hdmJhcik7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5CcmFuZCxuYXZiYXJDb25maWcuQnJhbmQpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTG9nbyxuYXZiYXJDb25maWcuTG9nbyk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5UaXRsZSxuYXZiYXJDb25maWcuVGl0bGUpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTGlzdCxuYXZiYXJDb25maWcuTGlzdCk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5MaW5rLG5hdmJhckNvbmZpZy5MaW5rKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkZvcm0sbmF2YmFyQ29uZmlnLkZvcm0pO1xuXG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5OYXZiYXJcIixOYXZiYXIpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuQnJhbmRcIixOYXZiYXIuQnJhbmQpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTG9nb1wiLE5hdmJhci5Mb2dvKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLlRpdGxlXCIsTmF2YmFyLlRpdGxlKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpc3RcIixOYXZiYXIuTGlzdCk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaW5rXCIsTmF2YmFyLkxpbmspO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuRm9ybVwiLE5hdmJhci5Gb3JtKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuTmF2YmFyXCIsIE5hdmJhcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cblxuXG5cblxuIl19
