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

var _PropsManager = require("../PropsManager");

var _PropsManager2 = _interopRequireDefault(_PropsManager);

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
        _this.addCallbacks = _this.addCallbacks.bind(_this);
        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
        _this.propsManager = new _PropsManager2.default();
        _this.updateRender = _this.updateRender.bind(_this);

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
            // Weave.getCallbacks(this.settings).addGroupedCallback(this,this.updateRender);
            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.CSS).addImmediateCallback(this, this.forceUpdate);
            this.settings.space.addImmediateCallback(this, this.forceUpdate);
            this.settings.align.addImmediateCallback(this, this.forceUpdate);
            this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
            this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "updateRender",
        value: function updateRender() {
            if (Weave.detectChange(this, this.settings.enable, this.settings.style, this.settings.space, this.settings.align, this.settings.activePage, this.settings.children.childListCallbacks)) {
                this.forceUpdate();
            }
        }
    }, {
        key: "removeCallbacks",
        value: function removeCallbacks() {
            //Weave.getCallbacks(this.settings).removeCallback(this,this.updateRender)
            this.settings.enable.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.CSS).removeCallback(this, this.forceUpdate);
            this.settings.space.removeCallback(this, this.forceUpdate);
            this.settings.align.removeCallback(this, this.forceUpdate);
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
        value: function renderChildren() {
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

            this.propsManager.addNewProps("iconOnly", iconOnly);
            this.propsManager.updateStyle(linkStyleObject);
            this.propsManager.addKeyProps("pageName");
            this.propsManager.addOddChild(this.settings.activePage.value, { isActive: "true" });
            return _App2.default.renderChildren(this, this.propsManager);
        }
    }, {
        key: "render",
        value: function render() {
            var navLinks = _react2.default.createElement("div", null);
            if (this.settings.enable.value) {
                var styleObject = this.settings.style.getStyleFor(null, true);
                var cssName = this.settings.CSS.getCSSFor();
                var childrenUI = this.renderChildren();

                if (this.props.useCSS) {
                    navLinks = _react2.default.createElement(
                        "ul",
                        { className: cssName },
                        childrenUI
                    );
                } else {
                    navLinks = _react2.default.createElement(
                        "ul",
                        { className: cssName, style: styleObject },
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
//# sourceMappingURL=data:application/json;base64,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OUQsRUFoQlk7QUFpQlosbUJBQVEsY0FBSSxjQUFKLENBQW1CLElBQW5CLEVBQXdCLEtBQUssWUFBTCxDQUFoQyxDQWpCWTs7OztpQ0FzQlA7QUFDTCxnQkFBSSxXQUFXLDBDQUFYLENBREM7QUFFTCxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTJCO0FBQzFCLG9CQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixDQUFnQyxJQUFoQyxFQUFxQyxJQUFyQyxDQUFkLENBRHNCO0FBRTFCLG9CQUFJLFVBQVUsS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUFWLENBRnNCO0FBRzFCLG9CQUFJLGFBQWEsS0FBSyxjQUFMLEVBQWIsQ0FIc0I7O0FBTTFCLG9CQUFHLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBa0I7QUFDakIsK0JBQVc7OzBCQUFJLFdBQVcsT0FBWCxFQUFKO3dCQUF5QixVQUF6QjtxQkFBWCxDQURpQjtpQkFBckIsTUFHSTtBQUNBLCtCQUFXOzswQkFBSSxXQUFXLE9BQVgsRUFBb0IsT0FBTyxXQUFQLEVBQXhCO3dCQUE2QyxVQUE3QztxQkFBWCxDQURBO2lCQUhKO2FBTko7O0FBZ0JBLG1CQUFRLFFBQVIsQ0FsQks7Ozs7V0F6R1A7RUFBYSxnQkFBTSxTQUFOOztBQStIbkIsTUFBTSxhQUFOLENBQW9CLHdCQUFwQixFQUE4QyxJQUE5QyxFQUFtRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBcEQ7a0JBQ2UiLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcbmltcG9ydCBQcm9wc01hbmFnZXIgZnJvbSBcIi4uL1Byb3BzTWFuYWdlclwiO1xuXG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlciA9IG5ldyBQcm9wc01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZW5kZXIgPSB0aGlzLnVwZGF0ZVJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSl0aGlzLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpXG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgLy8gV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMudXBkYXRlUmVuZGVyKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MuQ1NTKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hbGlnbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZW5kZXIoKXtcbiAgICAgICAgaWYoV2VhdmUuZGV0ZWN0Q2hhbmdlKHRoaXMsdGhpcy5zZXR0aW5ncy5lbmFibGUsdGhpcy5zZXR0aW5ncy5zdHlsZSx0aGlzLnNldHRpbmdzLnNwYWNlLHRoaXMuc2V0dGluZ3MuYWxpZ24sdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzKSl7XG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbW92ZUNhbGxiYWNrcygpe1xuICAgICAgICAgLy9XZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVJlbmRlcilcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MuQ1NTKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hbGlnbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVzZUNTUyAhPT0gbmV4dFByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZihXZWF2ZS5kZXRlY3RDaGFuZ2UodGhpcyx0aGlzLnNldHRpbmdzLnNwYWNlLHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbix0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UpKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHZhciBsaW5rU3R5bGVPYmplY3Q9e307XG4gICAgICAgIHZhciBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICB2YXIgc3BhY2UgPSB0aGlzLnNldHRpbmdzLnNwYWNlLnZhbHVlO1xuICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInJpZ2h0XCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwibGVmdFwiKSl7XG4gICAgICAgICAgICBpY29uT25seSA9IHRydWU7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwidG9wXCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwiYm90dG9tXCIpKXtcbiAgICAgICAgICAgIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IHNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJpY29uT25seVwiLGljb25Pbmx5KTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIudXBkYXRlU3R5bGUobGlua1N0eWxlT2JqZWN0KTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkS2V5UHJvcHMoXCJwYWdlTmFtZVwiKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkT2RkQ2hpbGQodGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnZhbHVlLHtpc0FjdGl2ZTpcInRydWVcIn0pO1xuICAgICAgICByZXR1cm4gIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLHRoaXMucHJvcHNNYW5hZ2VyKVxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBuYXZMaW5rcyA9IDxkaXYvPjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpO1xuICAgICAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBjbGFzc05hbWU9e2Nzc05hbWV9PntjaGlsZHJlblVJfTwvdWw+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2NoaWxkcmVuVUl9PC91bD47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgcmV0dXJuIChuYXZMaW5rcyk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTGlzdFwiLCBMaXN0LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiJdfQ==
