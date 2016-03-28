"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _Link = require("./Link");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_AbstractComponent) {
    _inherits(List, _AbstractComponent);

    function List(props) {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props, "container"));
    }

    // called only when React Parent render is called


    _createClass(List, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            _get(Object.getPrototypeOf(List.prototype), "shouldComponentUpdate", this).call(this, nextProps);
            if (this.props.dock !== nextProps.dock) {
                if (_ComponentManager2.default.debug) console.log("props.dock changed");
                return true;
            } else if (this.props.position !== nextProps.position) {
                if (_ComponentManager2.default.debug) console.log("props.position changed");
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

            this.settings.props.addChildProps("iconOnly", iconOnly);
            this.settings.props.addChildProps("style", linkStyleObject);
            this.settings.props.addChildProps("isActive", false, true);
            this.settings.props.keyProp = "objectName";
            this.settings.props.addOddChildren([this.settings.activePage.value]);
            return _ComponentManager2.default.renderChildren(this);
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("List - render");
            if (!this.settings.visible.value) return _react2.default.createElement("div", null);

            var styleObject = this.settings.style.state;
            var cssName = this.settings.CSS.getCSSFor();
            var childrenUI = this.renderChildren();

            if (this.settings.useCSS.state) {
                return _react2.default.createElement(
                    "ul",
                    { className: cssName },
                    childrenUI
                );
            } else {
                return _react2.default.createElement(
                    "ul",
                    { style: styleObject },
                    childrenUI
                );
            }
        }
    }]);

    return List;
}(_AbstractComponent3.default);

Weave.registerClass("weavereact.navbar.List", List, [weavejs.api.core.ILinkableObject]);
exports.default = List;
//# sourceMappingURL=data:application/json;base64,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QUFLLE9BQU8sV0FBUCxFQUFMO29CQUEwQixVQUExQjtpQkFBUCxDQURBO2FBSEo7Ozs7V0F0REY7OztBQStETixNQUFNLGFBQU4sQ0FBb0Isd0JBQXBCLEVBQThDLElBQTlDLEVBQW1ELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFwRDtrQkFDZSIsImZpbGUiOiJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5cblxuY2xhc3MgTGlzdCBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMsXCJjb250YWluZXJcIik7XG4gICAgfVxuXG5cbiAgICAvLyBjYWxsZWQgb25seSB3aGVuIFJlYWN0IFBhcmVudCByZW5kZXIgaXMgY2FsbGVkXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJwcm9wcy5kb2NrIGNoYW5nZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcInByb3BzLnBvc2l0aW9uIGNoYW5nZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuXG4gICAgICAgIHZhciBsaW5rU3R5bGVPYmplY3Q9e307XG4gICAgICAgIHZhciBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICB2YXIgc3BhY2UgPSB0aGlzLnNldHRpbmdzLnNwYWNlLnZhbHVlO1xuICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInJpZ2h0XCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwibGVmdFwiKSl7XG4gICAgICAgICAgICBpY29uT25seSA9IHRydWU7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwidG9wXCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwiYm90dG9tXCIpKXtcbiAgICAgICAgICAgIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IHNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiaWNvbk9ubHlcIixpY29uT25seSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInN0eWxlXCIsbGlua1N0eWxlT2JqZWN0KTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiaXNBY3RpdmVcIixmYWxzZSx0cnVlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5rZXlQcm9wID0gXCJvYmplY3ROYW1lXCI7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkT2RkQ2hpbGRyZW4oW3RoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZS52YWx1ZV0pO1xuICAgICAgICByZXR1cm4gIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJMaXN0IC0gcmVuZGVyXCIpO1xuICAgICAgICBpZighdGhpcy5zZXR0aW5ncy52aXNpYmxlLnZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcblxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLnN0YXRlO1xuICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy5zdGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT17Y3NzTmFtZX0+e2NoaWxkcmVuVUl9PC91bD47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiA8dWwgIHN0eWxlPXtzdHlsZU9iamVjdH0+e2NoaWxkcmVuVUl9PC91bD47XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5MaXN0XCIsIExpc3QsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl19
