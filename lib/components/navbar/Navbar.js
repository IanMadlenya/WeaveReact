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
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
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
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.children !== nextProps.children) {
                _App2.default.hookSessionStateForComponentChildren(nextProps.children, this.settings);
            }
            if (this.props.style !== nextProps.style) {
                // user style added through UI is Sessioned
                this.settings.style.domDefined.state = nextProps.style;
            }
        }
    }, {
        key: "renderChildren",
        value: function renderChildren(CSS) {
            var clonedChildren = _react2.default.Children.map(this.props.children, function (child, index) {
                var childName = "";
                var props = _App2.default.mergeInto({}, child.props);
                if (typeof child.type === "string") {
                    childName = child.type + index;
                    var htmlWrapperConfig = this.settings.children.getObject(childName);
                    return _react2.default.createElement(
                        _HTMLWrapper2.default,
                        { settings: htmlWrapperConfig },
                        child
                    );
                } else {
                    var additionalProps = {
                        "dock": this.settings.dock.value,
                        "position": this.settings.style.position.value,
                        "useCSS": this.settings.useCSS.value
                    };
                    props = _App2.default.mergeInto(props, additionalProps);
                    childName = child.type.name + index;
                    var childConfig = this.settings.children.getObject(childName);
                    props["settings"] = childConfig;
                    if (CSS) {
                        props["className"] = CSS[childName];
                        props["CSS"] = CSS;
                    } else {
                        var styleConfig = childConfig.style;
                        props["style"] = styleConfig.getStyleFor(null, true);
                    }
                    return _react2.default.cloneElement(child, props);
                }
            }, this);
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
Navbar.List = _List2.default;
Navbar.Link = _Link2.default;
Navbar.Form = _Form2.default;

_App2.default.registerToolConfig(Navbar, _Config2.default.Navbar);
_App2.default.registerToolConfig(Navbar.Brand, _Config2.default.Brand);
_App2.default.registerToolConfig(Navbar.List, _Config2.default.List);
_App2.default.registerToolConfig(Navbar.Link, _Config2.default.Link);
_App2.default.registerToolConfig(Navbar.Form, _Config2.default.Form);

Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

exports.default = Navbar;
//# sourceMappingURL=data:application/json;base64,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QUpDOztBQVVMLGdCQUFJLGFBQWEsRUFBYixDQVZDOztBQVlMLGdCQUFHLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsRUFBMkI7QUFDMUIsb0JBQUksU0FBUyxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLENBRGE7QUFFMUIsNkJBQWEsS0FBSyxjQUFMLENBQW9CLE1BQXBCLENBQWIsQ0FGMEI7QUFHMUIsdUJBQ0k7O3NCQUFLLFdBQVcsT0FBTyxNQUFQLEVBQWhCO29CQUNLLFVBREw7aUJBREosQ0FIMEI7YUFBOUIsTUFRSztBQUNELDZCQUFhLEtBQUssY0FBTCxFQUFiLENBREM7QUFFRCx1QkFDSTs7c0JBQUssT0FBTyxRQUFQLEVBQUw7b0JBQ0ssVUFETDtpQkFESixDQUZDO2FBUkw7Ozs7V0F4R0Y7RUFBZSxnQkFBTSxTQUFOOztBQTRIckIsT0FBTyxLQUFQO0FBQ0EsT0FBTyxJQUFQO0FBQ0EsT0FBTyxJQUFQO0FBQ0EsT0FBTyxJQUFQOztBQUdBLGNBQUksa0JBQUosQ0FBdUIsTUFBdkIsRUFBOEIsaUJBQWEsTUFBYixDQUE5QjtBQUNBLGNBQUksa0JBQUosQ0FBdUIsT0FBTyxLQUFQLEVBQWEsaUJBQWEsS0FBYixDQUFwQztBQUNBLGNBQUksa0JBQUosQ0FBdUIsT0FBTyxJQUFQLEVBQVksaUJBQWEsSUFBYixDQUFuQztBQUNBLGNBQUksa0JBQUosQ0FBdUIsT0FBTyxJQUFQLEVBQVksaUJBQWEsSUFBYixDQUFuQztBQUNBLGNBQUksa0JBQUosQ0FBdUIsT0FBTyxJQUFQLEVBQVksaUJBQWEsSUFBYixDQUFuQzs7QUFFQSxNQUFNLGFBQU4sQ0FBb0IsbUJBQXBCLEVBQXlDLE1BQXpDLEVBQWdELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRDs7a0JBRWUiLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXIgZnJvbSBcIi4uL0hUTUxXcmFwcGVyXCI7XG5pbXBvcnQgbmF2YmFyQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiOyBcblxuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5ncyA6IG5ldyBuYXZiYXJDb25maWcuTmF2YmFyKCk7XG4gICAgICAgIHRoaXMuZ2V0U3R5bGUgPSB0aGlzLmdldFN0eWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG4gICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICB9XG4gICAgXG4gICAgIGdldFN0eWxlKCkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwpXG4gICAgICAgICBpZihzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID09PSBcImZpeGVkXCIpe1xuICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJ0b3BcIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ0b3BcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwiYm90dG9tXCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYm90dG9tXCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcInJpZ2h0XCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wicmlnaHRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImxlZnRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgIH1cbiAgICBcbiAgICBcblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuQ1NTLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudXNlQ1NTLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZG9jay5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLkNTUy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVzZUNTUy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRvY2sucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihuZXh0UHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICByZW5kZXJDaGlsZHJlbihDU1Mpe1xuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbixmdW5jdGlvbihjaGlsZCxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGROYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IEFwcC5tZXJnZUludG8oe30sY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICBjaGlsZE5hbWUgPSAgY2hpbGQudHlwZSArIGluZGV4O1xuICAgICAgICAgICAgICAgIHZhciBodG1sV3JhcHBlckNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0KGNoaWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxIVE1MV3JhcHBlciBzZXR0aW5ncz17aHRtbFdyYXBwZXJDb25maWd9PntjaGlsZH08L0hUTUxXcmFwcGVyPlxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIGFkZGl0aW9uYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkb2NrXCI6IHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiOnRoaXMuc2V0dGluZ3Muc3R5bGUucG9zaXRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIFwidXNlQ1NTXCI6dGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHByb3BzLGFkZGl0aW9uYWxQcm9wcyk7XG4gICAgICAgICAgICAgICAgY2hpbGROYW1lID0gIGNoaWxkLnR5cGUubmFtZSArIGluZGV4OyBcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRDb25maWcgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdChjaGlsZE5hbWUpO1xuICAgICAgICAgICAgICAgIHByb3BzW1wic2V0dGluZ3NcIl0gPSBjaGlsZENvbmZpZztcbiAgICAgICAgICAgICAgICBpZihDU1Mpe1xuICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSBDU1NbY2hpbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wiQ1NTXCJdID0gQ1NTO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGVDb25maWcgPSBjaGlsZENvbmZpZy5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzdHlsZVwiXSAgPSBzdHlsZUNvbmZpZy5nZXRTdHlsZUZvcihudWxsLHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH0sdGhpcyk7XG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgc3R5bGVPYmogPSB0aGlzLmdldFN0eWxlKCk7XG4gICAgICAgIHZhciBuZXdQcm9wcyA9IHt9XG4gICAgICAgIHZhciBhZGRpdGlvbmFsUHJvcHMgPSB7XG4gICAgICAgICAgICBcImRvY2tcIjogdGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlLFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOnRoaXMuc2V0dGluZ3Muc3R5bGUucG9zaXRpb24udmFsdWUsXG4gICAgICAgICAgICBcInVzZUNTU1wiOnRoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gW11cbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciBjc3NPYmogPSB0aGlzLnNldHRpbmdzLkNTUy5zdGF0ZTtcbiAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKGNzc09iaik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjc3NPYmoubmF2YmFyfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbk5hdmJhci5CcmFuZCA9IEJyYW5kO1xuTmF2YmFyLkxpc3QgPSBMaXN0O1xuTmF2YmFyLkxpbmsgPSBMaW5rO1xuTmF2YmFyLkZvcm0gPSBGb3JtO1xuXG5cbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLG5hdmJhckNvbmZpZy5OYXZiYXIpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuQnJhbmQsbmF2YmFyQ29uZmlnLkJyYW5kKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxpc3QsbmF2YmFyQ29uZmlnLkxpc3QpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTGluayxuYXZiYXJDb25maWcuTGluayk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5Gb3JtLG5hdmJhckNvbmZpZy5Gb3JtKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuTmF2YmFyXCIsIE5hdmJhcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cblxuXG5cblxuIl19
