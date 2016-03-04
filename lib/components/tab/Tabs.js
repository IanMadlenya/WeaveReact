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

var _PropsManager = require("../PropsManager");

var _PropsManager2 = _interopRequireDefault(_PropsManager);

var _Config = require("./Config");

var _Config2 = _interopRequireDefault(_Config);

var _Tab = require("./Tab");

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        if (_App2.default.debug) console.log("Tabs constructor");

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _Config2.default.Tabs();
        _this.WrapperConfigClass = _Tab2.default;
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings, _this.WrapperConfigClass);
        _App2.default.addForceUpdateToCallbacks(_this);
        _this.propsManager = new _PropsManager2.default();

        _this.renderChildren = _this.renderChildren.bind(_this);
        return _this;
    }

    _createClass(Tabs, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (_App2.default.debug) console.log("Tabs componentWillReceiveProps");
            _App2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (_App2.default.debug) console.log("Tabs componentWillUnmount");
            _App2.default.removeForceUpdateFromCallbacks(this);
        }

        // weavestate change directly calls forceUpdate, so no need to use Weave.detectChange

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            if (_App2.default.debug) console.log("Tabs shouldComponentUpdate");
            // default return true
            return false; // this ensures parent render of this wont render the navbar
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            this.propsManager.addKeyProps("tabName");
            this.propsManager.addOddChild(this.settings.activeTab.state, { isActive: "true" });
            return _App2.default.renderChildren(this, this.propsManager);
        }
    }, {
        key: "switchTab",
        value: function switchTab(tabName, index) {
            this.settings.activeTab.value = tabName;
            if (!isDefault && this.props.clickCallback) this.props.clickCallback.call(this, tabName, index);
        }
    }, {
        key: "render",
        value: function render() {

            if (_App2.default.debug) console.log("Tabs ---Render---");

            var styleObject = this.settings.style.getStyleFor();
            var cssName = this.settings.CSS.getCSSFor();
            var tabLinksUI = this.renderChildren();
            var activeTabUI = _react2.default.createElement("div", null);

            return _react2.default.createElement(
                "div",
                { style: styleObject },
                tabLinksUI,
                activeTabUI
            );
        }
    }]);

    return Tabs;
}(_react2.default.Component);
//required when we change this to use LinkablePlaceHolder Object


Weave.registerClass("weavereact.Tabs", Tabs, [weavejs.api.core.ILinkableObject]);

exports.default = Tabs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVNNOzs7QUFFRixhQUZFLElBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixNQUVpQjs7QUFDZixZQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLGtCQUFaLEVBQWI7OzJFQUhGLGlCQUlRLFFBRlM7O0FBR2YsY0FBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQixJQUFJLGlCQUFXLElBQVgsRUFBOUMsQ0FIRDtBQUlmLGNBQUssa0JBQUwsaUJBSmU7QUFLZixzQkFBSSxvQ0FBSixDQUF5QyxNQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQW9CLE1BQUssUUFBTCxFQUFjLE1BQUssa0JBQUwsQ0FBM0UsQ0FMZTtBQU1mLHNCQUFJLHlCQUFKLFFBTmU7QUFPZixjQUFLLFlBQUwsR0FBcUIsNEJBQXJCLENBUGU7O0FBU2YsY0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QixDQVRlOztLQUFuQjs7aUJBRkU7O2tEQWN3QixXQUFVO0FBQ2hDLGdCQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLGdDQUFaLEVBQWI7QUFDQSwwQkFBSSx5QkFBSixDQUE4QixJQUE5QixFQUFtQyxTQUFuQyxFQUZnQzs7OzsrQ0FPZDtBQUNsQixnQkFBRyxjQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSwyQkFBWixFQUFiO0FBQ0EsMEJBQUksOEJBQUosQ0FBbUMsSUFBbkMsRUFGa0I7Ozs7Ozs7Z0RBTUM7QUFDbkIsZ0JBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksNEJBQVosRUFBYjs7QUFEbUIsbUJBR1osS0FBUDtBQUhtQjs7O3lDQU9QO0FBQ1osaUJBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixTQUE5QixFQURZO0FBRVosaUJBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLEtBQXhCLEVBQThCLEVBQUMsVUFBUyxNQUFULEVBQTdELEVBRlk7QUFHWixtQkFBTyxjQUFJLGNBQUosQ0FBbUIsSUFBbkIsRUFBd0IsS0FBSyxZQUFMLENBQS9CLENBSFk7Ozs7a0NBTU4sU0FBUSxPQUFNO0FBQ3BCLGlCQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLEtBQXhCLEdBQWdDLE9BQWhDLENBRG9CO0FBRXBCLGdCQUFHLENBQUMsU0FBRCxJQUFhLEtBQUssS0FBTCxDQUFXLGFBQVgsRUFBeUIsS0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixJQUF6QixDQUE4QixJQUE5QixFQUFtQyxPQUFuQyxFQUEyQyxLQUEzQyxFQUF6Qzs7OztpQ0FJSzs7QUFFTCxnQkFBRyxjQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSxtQkFBWixFQUFiOztBQUVBLGdCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixFQUFkLENBSkM7QUFLTCxnQkFBSSxVQUFVLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsU0FBbEIsRUFBVixDQUxDO0FBTUwsZ0JBQUksYUFBYSxLQUFLLGNBQUwsRUFBYixDQU5DO0FBT0wsZ0JBQUksY0FBYywwQ0FBZCxDQVBDOztBQVNMLG1CQUFROztrQkFBSyxPQUFPLFdBQVAsRUFBTDtnQkFDSyxVQURMO2dCQUVLLFdBRkw7YUFBUixDQVRLOzs7O1dBOUNQO0VBQWEsZ0JBQU0sU0FBTjs7OztBQStEbkIsTUFBTSxhQUFOLENBQW9CLGlCQUFwQixFQUF1QyxJQUF2QyxFQUE0QyxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBN0M7O2tCQUVlIiwiZmlsZSI6IlRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBQcm9wc01hbmFnZXIgZnJvbSBcIi4uL1Byb3BzTWFuYWdlclwiO1xuaW1wb3J0IHRhYnNDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgVGFiIGZyb20gXCIuL1RhYlwiO1xuXG5cblxuY2xhc3MgVGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJUYWJzIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgdGFic0NvbmZpZy5UYWJzKCk7XG4gICAgICAgIHRoaXMuV3JhcHBlckNvbmZpZ0NsYXNzID0gVGFiO1xuICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyx0aGlzLldyYXBwZXJDb25maWdDbGFzcyk7XG4gICAgICAgIEFwcC5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlciA9ICBuZXcgUHJvcHNNYW5hZ2VyKCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlRhYnMgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiKTtcbiAgICAgICAgQXBwLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModGhpcyxuZXh0UHJvcHMpO1xuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJUYWJzIGNvbXBvbmVudFdpbGxVbm1vdW50XCIpO1xuICAgICAgICBBcHAucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIHdlYXZlc3RhdGUgY2hhbmdlIGRpcmVjdGx5IGNhbGxzIGZvcmNlVXBkYXRlLCBzbyBubyBuZWVkIHRvIHVzZSBXZWF2ZS5kZXRlY3RDaGFuZ2VcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUoKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiVGFicyBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIC8vIGRlZmF1bHQgcmV0dXJuIHRydWVcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyB0aGlzIGVuc3VyZXMgcGFyZW50IHJlbmRlciBvZiB0aGlzIHdvbnQgcmVuZGVyIHRoZSBuYXZiYXJcbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZEtleVByb3BzKFwidGFiTmFtZVwiKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkT2RkQ2hpbGQodGhpcy5zZXR0aW5ncy5hY3RpdmVUYWIuc3RhdGUse2lzQWN0aXZlOlwidHJ1ZVwifSk7XG4gICAgICAgIHJldHVybiBBcHAucmVuZGVyQ2hpbGRyZW4odGhpcyx0aGlzLnByb3BzTWFuYWdlcik7XG4gICAgfVxuXG4gICAgc3dpdGNoVGFiKHRhYk5hbWUsaW5kZXgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZVRhYi52YWx1ZSA9IHRhYk5hbWU7XG4gICAgICAgIGlmKCFpc0RlZmF1bHQgJiZ0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrLmNhbGwodGhpcyx0YWJOYW1lLGluZGV4KTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJUYWJzIC0tLVJlbmRlci0tLVwiKTtcblxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgIHZhciBjc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5DU1MuZ2V0Q1NTRm9yKCk7XG4gICAgICAgIHZhciB0YWJMaW5rc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICB2YXIgYWN0aXZlVGFiVUkgPSA8ZGl2Lz5cblxuICAgICAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3N0eWxlT2JqZWN0fT5cbiAgICAgICAgICAgICAgICAgICAge3RhYkxpbmtzVUl9XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVUYWJVSX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4vL3JlcXVpcmVkIHdoZW4gd2UgY2hhbmdlIHRoaXMgdG8gdXNlIExpbmthYmxlUGxhY2VIb2xkZXIgT2JqZWN0XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5UYWJzXCIsIFRhYnMsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG4iXX0=
