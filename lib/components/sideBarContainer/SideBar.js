"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_React$Component) {
    _inherits(SideBar, _React$Component);

    function SideBar(props) {
        _classCallCheck(this, SideBar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SideBar).call(this, props));

        _this.settings = props.settings;
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _App2.default.addForceUpdateToCallbacks(_this);
        if (_App2.default.debug) console.log("Sidebar - constructor");
        return _this;
    }

    _createClass(SideBar, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (_App2.default.debug) console.log("Sidebar - componentWillReceiveProps");
            _App2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (_App2.default.debug) console.log("Sidebar - componentWillUnmount");
            _App2.default.removeForceUpdateFromCallbacks(this);
        }

        // called only when React Parent render is called

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (_App2.default.debug) console.log("Sidebar - shouldComponentUpdate");
            return false;
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            return _App2.default.renderChildren(this);
        }
    }, {
        key: "render",
        value: function render() {
            if (_App2.default.debug) console.log("Sidebar - render");
            var styleObject = this.settings.style.getStyleFor();
            var childrenUI = this.settings.open.state ? this.renderChildren() : [];

            return _react2.default.createElement(
                "div",
                { style: styleObject },
                childrenUI
            );
        }
    }]);

    return SideBar;
}(_react2.default.Component);

Weave.registerClass("weavereact.sideBarContainer.SideBar", SideBar, [weavejs.api.core.ILinkableObject]);

exports.default = SideBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNGLGFBREUsT0FDRixDQUFZLEtBQVosRUFBbUI7OEJBRGpCLFNBQ2lCOzsyRUFEakIsb0JBRVEsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBTSxRQUFOLENBRkQ7QUFHZixzQkFBSSxvQ0FBSixDQUF5QyxNQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQW9CLE1BQUssUUFBTCxDQUE3RCxDQUhlO0FBSWYsc0JBQUkseUJBQUosUUFKZTtBQUtmLFlBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksdUJBQVosRUFBYjtxQkFMZTtLQUFuQjs7aUJBREU7O2tEQVN3QixXQUFVO0FBQ2hDLGdCQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLHFDQUFaLEVBQWI7QUFDQSwwQkFBSSx5QkFBSixDQUE4QixJQUE5QixFQUFtQyxTQUFuQyxFQUZnQzs7OzsrQ0FNZDtBQUNsQixnQkFBRyxjQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSxnQ0FBWixFQUFiO0FBQ0MsMEJBQUksOEJBQUosQ0FBbUMsSUFBbkMsRUFGaUI7Ozs7Ozs7OENBTUEsV0FBVTtBQUM1QixnQkFBRyxjQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSxpQ0FBWixFQUFiO0FBQ0EsbUJBQU8sS0FBUCxDQUY0Qjs7Ozt5Q0FNaEI7QUFDWixtQkFBUSxjQUFJLGNBQUosQ0FBbUIsSUFBbkIsQ0FBUixDQURZOzs7O2lDQUtQO0FBQ0wsZ0JBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksa0JBQVosRUFBYjtBQUNBLGdCQUFJLGNBQWUsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixFQUFmLENBRkM7QUFHTCxnQkFBSSxhQUFhLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsR0FBeUIsS0FBSyxjQUFMLEVBQXpCLEdBQStDLEVBQS9DLENBSFo7O0FBS0wsbUJBQVM7O2tCQUFLLE9BQU8sV0FBUCxFQUFMO2dCQUNPLFVBRFA7YUFBVCxDQUxLOzs7O1dBaENQO0VBQWdCLGdCQUFNLFNBQU47O0FBNEN0QixNQUFNLGFBQU4sQ0FBb0IscUNBQXBCLEVBQTJELE9BQTNELEVBQW1FLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFwRTs7a0JBRWUiLCJmaWxlIjoiU2lkZUJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcblxuY2xhc3MgU2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBwcm9wcy5zZXR0aW5ncyA7XG4gICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgQXBwLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3ModGhpcyk7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXIgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXIgLSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIpO1xuICAgICAgICBBcHAuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJTaWRlYmFyIC0gY29tcG9uZW50V2lsbFVubW91bnRcIik7XG4gICAgICAgICBBcHAucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWRcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiU2lkZWJhciAtIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgcmV0dXJuICBBcHAucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXIgLSByZW5kZXJcIik7XG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9ICB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5zZXR0aW5ncy5vcGVuLnN0YXRlP3RoaXMucmVuZGVyQ2hpbGRyZW4oKTpbXTtcblxuICAgICAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXtzdHlsZU9iamVjdH0+XG4gICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgKTtcbiAgICB9XG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXIuU2lkZUJhclwiLCBTaWRlQmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xuXG4iXX0=
