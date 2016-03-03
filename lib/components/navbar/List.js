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
        _App2.default.addForceUpdateToCallbacks(_this);
        _this.propsManager = new _PropsManager2.default();
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

            this.propsManager.addNewProps("iconOnly", iconOnly);
            this.propsManager.updateStyle(linkStyleObject);
            this.propsManager.addKeyProps("pageName");
            this.propsManager.addOddChild(this.settings.activePage.value, { isActive: "true" });
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
//# sourceMappingURL=data:application/json;base64,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QWtCWixtQkFBUSxjQUFJLGNBQUosQ0FBbUIsSUFBbkIsRUFBd0IsS0FBSyxZQUFMLENBQWhDLENBbEJZOzs7O2lDQXNCUDtBQUNMLGdCQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLGVBQVosRUFBYjtBQUNBLGdCQUFJLFdBQVcsMENBQVgsQ0FGQztBQUdMLGdCQUFHLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsRUFBMkI7QUFDMUIsb0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLENBQWdDLElBQWhDLEVBQXFDLElBQXJDLENBQWQsQ0FEc0I7QUFFMUIsb0JBQUksVUFBVSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQVYsQ0FGc0I7QUFHMUIsb0JBQUksYUFBYSxLQUFLLGNBQUwsRUFBYixDQUhzQjtBQUkxQixvQkFBRyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQWtCO0FBQ2pCLCtCQUFXOzswQkFBSSxXQUFXLE9BQVgsRUFBSjt3QkFBeUIsVUFBekI7cUJBQVgsQ0FEaUI7aUJBQXJCLE1BR0k7QUFDQSwrQkFBVzs7MEJBQUksV0FBVyxPQUFYLEVBQW9CLE9BQU8sV0FBUCxFQUF4Qjt3QkFBNkMsVUFBN0M7cUJBQVgsQ0FEQTtpQkFISjthQUpKO0FBV0EsbUJBQVEsUUFBUixDQWRLOzs7O1dBakVQO0VBQWEsZ0JBQU0sU0FBTjs7QUFtRm5CLE1BQU0sYUFBTixDQUFvQix3QkFBcEIsRUFBOEMsSUFBOUMsRUFBbUQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXBEO2tCQUNlIiwiZmlsZSI6Ikxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgUHJvcHNNYW5hZ2VyIGZyb20gXCIuLi9Qcm9wc01hbmFnZXJcIjtcblxuXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICBBcHAuYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIgPSBuZXcgUHJvcHNNYW5hZ2VyKCk7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkxpc3QgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkxpc3QgLSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIpO1xuICAgICAgICBBcHAuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJMaXN0IC0gY29tcG9uZW50V2lsbFVubW91bnRcIik7XG4gICAgICAgICBBcHAucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWRcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTGlzdCAtIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJwcm9wcy5kb2NrIGNoYW5nZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwicHJvcHMucG9zaXRpb24gY2hhbmdlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcInByb3BzLnVzZUNTUyBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcblxuICAgICAgICB2YXIgbGlua1N0eWxlT2JqZWN0PXt9O1xuICAgICAgICB2YXIgaWNvbk9ubHkgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNwYWNlID0gdGhpcy5zZXR0aW5ncy5zcGFjZS52YWx1ZTtcbiAgICAgICAgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJyaWdodFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImxlZnRcIikpe1xuICAgICAgICAgICAgaWNvbk9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgbGlua1N0eWxlT2JqZWN0W1wibWFyZ2luQm90dG9tXCJdID0gc3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInRvcFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImJvdHRvbVwiKSl7XG4gICAgICAgICAgICBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgbGlua1N0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwiaWNvbk9ubHlcIixpY29uT25seSk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLnVwZGF0ZVN0eWxlKGxpbmtTdHlsZU9iamVjdCk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZEtleVByb3BzKFwicGFnZU5hbWVcIik7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE9kZENoaWxkKHRoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZS52YWx1ZSx7aXNBY3RpdmU6XCJ0cnVlXCJ9KTtcbiAgICAgICAgcmV0dXJuICBBcHAucmVuZGVyQ2hpbGRyZW4odGhpcyx0aGlzLnByb3BzTWFuYWdlcilcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTGlzdCAtIHJlbmRlclwiKTtcbiAgICAgICAgdmFyIG5hdkxpbmtzID0gPGRpdi8+O1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG4gICAgICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICAgICAgbmF2TGlua3MgPSA8dWwgY2xhc3NOYW1lPXtjc3NOYW1lfT57Y2hpbGRyZW5VSX08L3VsPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbmF2TGlua3MgPSA8dWwgY2xhc3NOYW1lPXtjc3NOYW1lfSBzdHlsZT17c3R5bGVPYmplY3R9PntjaGlsZHJlblVJfTwvdWw+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobmF2TGlua3MpO1xuICAgIH1cblxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QubmF2YmFyLkxpc3RcIiwgTGlzdCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXX0=
