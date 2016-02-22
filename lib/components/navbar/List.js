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
        if (_this.props.children) _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _this.addCallbacks = _this.addCallbacks.bind(_this);
        _this.removeCallbacks = _this.removeCallbacks.bind(_this);

        return _this;
    }

    _createClass(List, [{
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
        key: "componentDidMount",
        value: function componentDidMount() {
            this.addCallbacks();
        }
    }, {
        key: "addCallbacks",
        value: function addCallbacks() {
            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
            this.settings.space.addImmediateCallback(this, this.forceUpdate);
            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
            this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
            this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "removeCallbacks",
        value: function removeCallbacks() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
            this.settings.space.removeCallback(this, this.forceUpdate);
            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
            this.settings.activePage.removeCallback(this, this.forceUpdate);
            this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.removeCallbacks();
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
            } else if (Weave.detectChange(this, this.settings.space, this.settings.rightAlign, this.settings.activePage)) {
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

            var childConfigs = this.settings.children.getObjects();
            var clonedChildren = childConfigs.map(function (childConfig, index) {
                var child = this.settings.configChildMap.get(childConfig);
                var configName = this.settings.children.getName(childConfig);
                if (child) {
                    var props = _App2.default.mergeInto({}, child.props);

                    props["settings"] = childConfig;
                    props["pageName"] = configName;
                    props["iconOnly"] = iconOnly;
                    props["key"] = configName;
                    if (configName === this.settings.activePage.value) {
                        props["isActive"] = true;
                    } else {
                        props["isActive"] = false;
                    }
                    if (CSS) {
                        props["className"] = CSS[childName];
                    } else {
                        props["style"] = linkStyleObject;
                    }

                    if (this.settings.childConfigMap.has(child)) this.settings.childConfigMap.delete(child);
                    var clonedChild = _react2.default.cloneElement(child, props);
                    this.settings.configChildMap.set(childConfig, clonedChild);
                    this.settings.childConfigMap.set(clonedChild, childConfig);
                    return clonedChild;
                } else {
                    var configClass = Weave.getPath(childConfig).getType();
                    var ToolClass = _App2.default.getToolImplementation(configClass);
                    var configName = this.settings.children.getName(childConfig);
                    var newChild = _react2.default.createElement(ToolClass, { key: configName, settings: childConfig });
                    return newChild;
                }
            }.bind(this));

            return clonedChildren;
        }
    }, {
        key: "render",
        value: function render() {
            var navLinks = _react2.default.createElement("div", null);
            if (this.settings.enable.value) {
                var childrenUI = [];
                var styleObject = this.settings.style.getStyleFor(null, true);

                if (!this.props.useCSS) {
                    if (this.props.dock !== "right" && this.props.dock !== "left" && this.settings.rightAlign.value) {
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
                        { style: styleObject },
                        childrenUI
                    );
                }
            }

            return navLinks;
        }
    }]);

    return List;
}(_react2.default.Component);

Weave.registerClass("weavereact.navbar.List", List, [weavejs.api.core.ILinkableObject]);
exports.default = List;
//# sourceMappingURL=data:application/json;base64,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QUcsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQWtCO0FBQ2xCLHdCQUFHLElBQUMsQ0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixPQUFwQixJQUFpQyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLE1BQXBCLElBQStCLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsS0FBekIsRUFBK0I7QUFDL0Ysb0NBQVksZ0JBQVosSUFBZ0MsVUFBaEMsQ0FEK0Y7QUFFL0Ysb0NBQVksYUFBWixJQUE2QixNQUE3QixDQUYrRjtxQkFBbkc7QUFJQSxrQ0FBYyxnQkFBTSxrQkFBTixDQUF5QixXQUF6QixDQUFkLENBTGtCO2lCQUF0Qjs7QUFRQSxvQkFBRyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQWtCO0FBQ2pCLGlDQUFhLEtBQUssY0FBTCxDQUFvQixLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWpDLENBRGlCO0FBRWpCLCtCQUFXOzswQkFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLFNBQVgsRUFBZjt3QkFBc0MsVUFBdEM7cUJBQVgsQ0FGaUI7aUJBQXJCLE1BSUk7QUFDQSxpQ0FBYSxLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBYixDQURBO0FBRUEsK0JBQVc7OzBCQUFJLE9BQU8sV0FBUCxFQUFKO3dCQUF5QixVQUF6QjtxQkFBWCxDQUZBO2lCQUpKO2FBWko7O0FBd0JBLG1CQUFRLFFBQVIsQ0ExQks7Ozs7V0FoSVA7RUFBYSxnQkFBTSxTQUFOOztBQThKbkIsTUFBTSxhQUFOLENBQW9CLHdCQUFwQixFQUE4QyxJQUE5QyxFQUFtRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBcEQ7a0JBQ2UiLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcblxuXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSl0aGlzLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpXG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVzZUNTUyAhPT0gbmV4dFByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZihXZWF2ZS5kZXRlY3RDaGFuZ2UodGhpcyx0aGlzLnNldHRpbmdzLnNwYWNlLHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbix0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UpKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHJlbmRlckNoaWxkcmVuKENTUyl7XG4gICAgICAgIHZhciBsaW5rU3R5bGVPYmplY3Q9e307XG4gICAgICAgIHZhciBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICB2YXIgc3BhY2UgPSB0aGlzLnNldHRpbmdzLnNwYWNlLnZhbHVlO1xuICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInJpZ2h0XCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwibGVmdFwiKSl7XG4gICAgICAgICAgICBpY29uT25seSA9IHRydWU7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwidG9wXCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwiYm90dG9tXCIpKXtcbiAgICAgICAgICAgIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IHNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBjaGlsZENvbmZpZ3MubWFwKGZ1bmN0aW9uKGNoaWxkQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHt9LGNoaWxkLnByb3BzKTtcblxuICAgICAgICAgICAgICAgIHByb3BzW1wic2V0dGluZ3NcIl0gPSBjaGlsZENvbmZpZztcbiAgICAgICAgICAgICAgICBwcm9wc1tcInBhZ2VOYW1lXCJdID0gY29uZmlnTmFtZTtcbiAgICAgICAgICAgICAgICBwcm9wc1tcImljb25Pbmx5XCJdID0gaWNvbk9ubHk7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBjb25maWdOYW1lO1xuICAgICAgICAgICAgICAgIGlmKGNvbmZpZ05hbWUgPT09IHRoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImlzQWN0aXZlXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJpc0FjdGl2ZVwiXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihDU1Mpe1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImNsYXNzTmFtZVwiXSA9IENTU1tjaGlsZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInN0eWxlXCJdID0gbGlua1N0eWxlT2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5kZWxldGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgIHZhciBjbG9uZWRDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KGNsb25lZENoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGQ7XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV2VhdmUuZ2V0UGF0aChjaGlsZENvbmZpZykuZ2V0VHlwZSgpO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSA8VG9vbENsYXNzIGtleT17Y29uZmlnTmFtZX0gIHNldHRpbmdzPXtjaGlsZENvbmZpZ30vPjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbmF2TGlua3MgPSA8ZGl2Lz47XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlblVJID0gW11cbiAgICAgICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKTtcblxuICAgICAgICAgICAgaWYoIXRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrICE9PSBcInJpZ2h0XCIpICYmICh0aGlzLnByb3BzLmRvY2sgIT09IFwibGVmdFwiKSAmJiB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24udmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImp1c3RpZnlDb250ZW50XCJdID0gXCJmbGV4LWVuZFwiO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcIm1hcmdpblJpZ2h0XCJdID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0ID0gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlT2JqZWN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKHRoaXMucHJvcHMuQ1NTKTtcbiAgICAgICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT57Y2hpbGRyZW5VSX08L3VsPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4obnVsbCk7XG4gICAgICAgICAgICAgICAgbmF2TGlua3MgPSA8dWwgc3R5bGU9e3N0eWxlT2JqZWN0fT57Y2hpbGRyZW5VSX08L3VsPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiAobmF2TGlua3MpO1xuICAgIH1cblxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QubmF2YmFyLkxpc3RcIiwgTGlzdCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXX0=
