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
        _App2.default.addForceUpdateToCallbacks(_this);
        if (_App2.default.debug) console.log("List - constructor");
        return _this;
    }

    _createClass(List, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (_App2.default.debug) console.log("List - componentWillReceiveProps");
            _App2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (_App2.default.debug) console.log("List - componentWillUnmount");
            _App2.default.removeForceUpdateFromCallbacks(this);
        }

        // called only when React Parent render is called

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (_App2.default.debug) console.log("List - shouldComponentUpdate");
            if (this.props.dock !== nextProps.dock) {
                if (_App2.default.debug) console.log("props.dock changed");
                return true;
            } else if (this.props.position !== nextProps.position) {
                if (_App2.default.debug) console.log("props.position changed");
                return true;
            } else if (this.props.useCSS !== nextProps.useCSS) {
                if (_App2.default.debug) console.log("props.useCSS changed");
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
            return _App2.default.renderChildren(this, this.propsManager);
        }
    }, {
        key: "render",
        value: function render() {
            if (_App2.default.debug) console.log("List - render");
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
//# sourceMappingURL=data:application/json;base64,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TCxDQUFjLEtBQWQsQ0FBb0IsY0FBcEIsQ0FBbUMsQ0FBQyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEtBQXpCLENBQXBDLEVBbEJZO0FBbUJaLG1CQUFRLGNBQUksY0FBSixDQUFtQixJQUFuQixFQUF3QixLQUFLLFlBQUwsQ0FBaEMsQ0FuQlk7Ozs7aUNBdUJQO0FBQ0wsZ0JBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksZUFBWixFQUFiO0FBQ0EsZ0JBQUksV0FBVywwQ0FBWCxDQUZDO0FBR0wsZ0JBQUcsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUEyQjtBQUMxQixvQkFBSSxjQUFjLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsV0FBcEIsQ0FBZ0MsSUFBaEMsRUFBcUMsSUFBckMsQ0FBZCxDQURzQjtBQUUxQixvQkFBSSxVQUFVLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsU0FBbEIsRUFBVixDQUZzQjtBQUcxQixvQkFBSSxhQUFhLEtBQUssY0FBTCxFQUFiLENBSHNCO0FBSTFCLG9CQUFHLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBa0I7QUFDakIsK0JBQVc7OzBCQUFJLFdBQVcsT0FBWCxFQUFKO3dCQUF5QixVQUF6QjtxQkFBWCxDQURpQjtpQkFBckIsTUFHSTtBQUNBLCtCQUFXOzswQkFBSyxPQUFPLFdBQVAsRUFBTDt3QkFBMEIsVUFBMUI7cUJBQVgsQ0FEQTtpQkFISjthQUpKO0FBV0EsbUJBQVEsUUFBUixDQWRLOzs7O1dBakVQO0VBQWEsZ0JBQU0sU0FBTjs7QUFtRm5CLE1BQU0sYUFBTixDQUFvQix3QkFBcEIsRUFBOEMsSUFBOUMsRUFBbUQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXBEO2tCQUNlIiwiZmlsZSI6Ikxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5cblxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG4gICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgQXBwLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3ModGhpcyk7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkxpc3QgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkxpc3QgLSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIpO1xuICAgICAgICBBcHAuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJMaXN0IC0gY29tcG9uZW50V2lsbFVubW91bnRcIik7XG4gICAgICAgICBBcHAucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWRcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTGlzdCAtIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJwcm9wcy5kb2NrIGNoYW5nZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwicHJvcHMucG9zaXRpb24gY2hhbmdlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcInByb3BzLnVzZUNTUyBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcblxuICAgICAgICB2YXIgbGlua1N0eWxlT2JqZWN0PXt9O1xuICAgICAgICB2YXIgaWNvbk9ubHkgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNwYWNlID0gdGhpcy5zZXR0aW5ncy5zcGFjZS52YWx1ZTtcbiAgICAgICAgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJyaWdodFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImxlZnRcIikpe1xuICAgICAgICAgICAgaWNvbk9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgbGlua1N0eWxlT2JqZWN0W1wibWFyZ2luQm90dG9tXCJdID0gc3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInRvcFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImJvdHRvbVwiKSl7XG4gICAgICAgICAgICBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgbGlua1N0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImljb25Pbmx5XCIsaWNvbk9ubHkpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJzdHlsZVwiLGxpbmtTdHlsZU9iamVjdCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImlzQWN0aXZlXCIsZmFsc2UsdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMua2V5UHJvcCA9IFwib2JqZWN0TmFtZVwiO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZE9kZENoaWxkcmVuKFt0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UudmFsdWVdKTtcbiAgICAgICAgcmV0dXJuICBBcHAucmVuZGVyQ2hpbGRyZW4odGhpcyx0aGlzLnByb3BzTWFuYWdlcik7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkxpc3QgLSByZW5kZXJcIik7XG4gICAgICAgIHZhciBuYXZMaW5rcyA9IDxkaXYvPjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpO1xuICAgICAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgICAgIG5hdkxpbmtzID0gPHVsIGNsYXNzTmFtZT17Y3NzTmFtZX0+e2NoaWxkcmVuVUl9PC91bD47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIG5hdkxpbmtzID0gPHVsICBzdHlsZT17c3R5bGVPYmplY3R9PntjaGlsZHJlblVJfTwvdWw+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobmF2TGlua3MpO1xuICAgIH1cblxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QubmF2YmFyLkxpc3RcIiwgTGlzdCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXX0=
