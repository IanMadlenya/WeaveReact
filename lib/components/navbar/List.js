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

var _Link = require("./Link");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));

        _this.settings = _this.props.settings;
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);

        return _this;
    }

    _createClass(List, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.children !== nextProps.children) {
                _App2.default.hookSessionStateForComponentChildren(nextProps.children, this.settings);
            }
            if (this.props.style !== nextProps.style) {
                this.settings.style.other.state = nextProps.style;
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
            this.settings.space.addImmediateCallback(this, this.forceUpdate);
            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
            this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
            //this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
            this.settings.space.removeCallback(this, this.forceUpdate);
            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
            this.settings.activePage.removeCallback(this, this.forceUpdate);
            //this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.dock !== nextProps.dock) {
                return true;
            } else if (this.props.position !== nextProps.position) {
                return true;
            } else if (this.props.useCSS !== nextProps.useCSS) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "renderChildren",
        value: function renderChildren(CSS) {
            var linkStyleObject = {};
            var iconOnly = false;
            var space = this.settings.space.value;
            if (this.props.dock === "right" || this.props.dock === "left") {
                iconOnly = true;
                linkStyleObject["marginBottom"] = space;
            } else if (this.props.dock === "top" || this.props.dock === "bottom") {
                iconOnly = false;
                linkStyleObject["marginRight"] = space;
            }

            var clonedChildren = this.settings.children.getNames().map(function (configName, index) {
                var config = this.settings.children.getObject(configName);
                var child = this.props.children[index];
                var props = _App2.default.mergeInto({}, child.props);
                props["pageName"] = configName;
                props["iconOnly"] = iconOnly;
                props["settings"] = config;
                props["key"] = configName;

                if (configName === this.settings.activePage.value) {
                    props["isActive"] = true;
                } else {
                    props["isActive"] = false;
                }
                if (CSS) {
                    props["className"] = CSS[childName];
                } else {
                    props["style"] = config.style.getStyleFor(null, true);
                }
                return _react2.default.cloneElement(child, props);
            }.bind(this));

            return clonedChildren;
        }
    }, {
        key: "render",
        value: function render() {
            var navLinks = _react2.default.createElement("div", null);

            var childrenUI = [];
            var styleObject = this.props.style;

            if (!this.props.useCSS) {
                if (this.props.dock !== "right" && this.props.dock !== "left" && this.settings.rightAlign) {
                    styleObject["justifyContent"] = "flex-end";
                    styleObject["marginRight"] = "auto";
                }
                styleObject = _Style2.default.appendVendorPrefix(styleObject);
            }

            if (this.props.useCSS) {
                childrenUI = this.renderChildren(this.props.CSS);
                navLinks = _react2.default.createElement(
                    "ul",
                    { className: this.props.className },
                    childrenUI
                );
            } else {
                childrenUI = this.renderChildren(null);
                navLinks = _react2.default.createElement(
                    "ul",
                    { style: this.props.style },
                    childrenUI
                );
            }

            return navLinks;
        }
    }]);

    return List;
}(_react2.default.Component);

Weave.registerClass("weavereact.navbar.List", List, [weavejs.api.core.ILinkableObject]);
exports.default = List;
//# sourceMappingURL=data:application/json;base64,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b0IsSUFBcEIsQ0FBYixDQURBO0FBRUEsMkJBQVc7O3NCQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFYO29CQUE4QixVQUE5QjtpQkFBWCxDQUZBO2FBSko7O0FBV0EsbUJBQVEsUUFBUixDQXpCSzs7OztXQTVGUDtFQUFhLGdCQUFNLFNBQU47O0FBeUhuQixNQUFNLGFBQU4sQ0FBb0Isd0JBQXBCLEVBQThDLElBQTlDLEVBQW1ELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFwRDtrQkFDZSIsImZpbGUiOiJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuXG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG5cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihuZXh0UHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc3R5bGUub3RoZXIuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgLy90aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIC8vdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jayAhPT0gbmV4dFByb3BzLmRvY2spe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHJlbmRlckNoaWxkcmVuKENTUyl7XG4gICAgICAgIHZhciBsaW5rU3R5bGVPYmplY3Q9e307XG4gICAgICAgIHZhciBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICB2YXIgc3BhY2UgPSB0aGlzLnNldHRpbmdzLnNwYWNlLnZhbHVlO1xuICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInJpZ2h0XCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwibGVmdFwiKSl7XG4gICAgICAgICAgICBpY29uT25seSA9IHRydWU7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwidG9wXCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwiYm90dG9tXCIpKXtcbiAgICAgICAgICAgIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IHNwYWNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWVzKCkubWFwKGZ1bmN0aW9uKGNvbmZpZ05hbWUsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0KGNvbmZpZ05hbWUpO1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5wcm9wcy5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHt9LGNoaWxkLnByb3BzKTtcbiAgICAgICAgICAgIHByb3BzW1wicGFnZU5hbWVcIl0gPSBjb25maWdOYW1lO1xuICAgICAgICAgICAgcHJvcHNbXCJpY29uT25seVwiXSA9IGljb25Pbmx5O1xuICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNvbmZpZztcbiAgICAgICAgICAgIHByb3BzW1wia2V5XCJdID0gY29uZmlnTmFtZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoY29uZmlnTmFtZSA9PT0gdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJpc0FjdGl2ZVwiXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHByb3BzW1wiaXNBY3RpdmVcIl0gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKENTUyl7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSBDU1NbY2hpbGROYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJzdHlsZVwiXSA9IGNvbmZpZy5zdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG5hdkxpbmtzID0gPGRpdi8+O1xuICAgICAgICBcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSBbXVxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnByb3BzLnN0eWxlO1xuICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIGlmKCh0aGlzLnByb3BzLmRvY2sgIT09IFwicmlnaHRcIikgJiYgKHRoaXMucHJvcHMuZG9jayAhPT0gXCJsZWZ0XCIpICYmIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJqdXN0aWZ5Q29udGVudFwiXSA9IFwiZmxleC1lbmRcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcIm1hcmdpblJpZ2h0XCJdID0gXCJhdXRvXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZU9iamVjdCA9IFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbih0aGlzLnByb3BzLkNTUyk7XG4gICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT57Y2hpbGRyZW5VSX08L3VsPjtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKG51bGwpO1xuICAgICAgICAgICAgbmF2TGlua3MgPSA8dWwgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PntjaGlsZHJlblVJfTwvdWw+O1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIChuYXZMaW5rcyk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTGlzdFwiLCBMaXN0LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiJdfQ==
