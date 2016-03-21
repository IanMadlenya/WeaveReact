"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

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

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

        _this.WrapperConfigClass = _Tab2.default;
        _ComponentManager2.default.initialize(_this, "container");
        return _this;
    }

    _createClass(Tabs, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _ComponentManager2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _ComponentManager2.default.componentWillUnmount(this);
        }

        // weavestate change directly calls forceUpdate, so no need to use Weave.detectChange

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate() {
            if (App.debug) console.log("Tabs shouldComponentUpdate");
            // default return true
            return false; // this ensures parent render of this wont render the navbar
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            this.propsManager.addKeyProps("tabName");
            this.propsManager.addOddChild(this.settings.activeTab.state, { isActive: "true" });
            return componentWillUnmount.renderChildren(this);
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

            if (App.debug) console.log("Tabs ---Render---");

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPTTs7O0FBRUYsYUFGRSxJQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsTUFFaUI7OzJFQUZqQixpQkFHUSxRQURTOztBQUVmLGNBQUssa0JBQUwsaUJBRmU7QUFHZixtQ0FBaUIsVUFBakIsUUFBaUMsV0FBakMsRUFIZTs7S0FBbkI7O2lCQUZFOztrREFRd0IsV0FBVTtBQUNoQyx1Q0FBaUIseUJBQWpCLENBQTJDLElBQTNDLEVBQWdELFNBQWhELEVBRGdDOzs7OytDQUlkO0FBQ2xCLHVDQUFpQixvQkFBakIsQ0FBc0MsSUFBdEMsRUFEa0I7Ozs7Ozs7Z0RBS0M7QUFDbkIsZ0JBQUcsSUFBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksNEJBQVosRUFBYjs7QUFEbUIsbUJBR1osS0FBUDtBQUhtQjs7O3lDQU9QO0FBQ1osaUJBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixTQUE5QixFQURZO0FBRVosaUJBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLEtBQXhCLEVBQThCLEVBQUMsVUFBUyxNQUFULEVBQTdELEVBRlk7QUFHWixtQkFBTyxxQkFBcUIsY0FBckIsQ0FBb0MsSUFBcEMsQ0FBUCxDQUhZOzs7O2tDQU1OLFNBQVEsT0FBTTtBQUNwQixpQkFBSyxRQUFMLENBQWMsU0FBZCxDQUF3QixLQUF4QixHQUFnQyxPQUFoQyxDQURvQjtBQUVwQixnQkFBRyxDQUFDLFNBQUQsSUFBYSxLQUFLLEtBQUwsQ0FBVyxhQUFYLEVBQXlCLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsSUFBekIsQ0FBOEIsSUFBOUIsRUFBbUMsT0FBbkMsRUFBMkMsS0FBM0MsRUFBekM7Ozs7aUNBSUs7O0FBRUwsZ0JBQUcsSUFBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksbUJBQVosRUFBYjs7QUFFQSxnQkFBSSxjQUFjLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsV0FBcEIsRUFBZCxDQUpDO0FBS0wsZ0JBQUksVUFBVSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQVYsQ0FMQztBQU1MLGdCQUFJLGFBQWEsS0FBSyxjQUFMLEVBQWIsQ0FOQztBQU9MLGdCQUFJLGNBQWMsMENBQWQsQ0FQQzs7QUFTTCxtQkFBUTs7a0JBQUssT0FBTyxXQUFQLEVBQUw7Z0JBQ0ssVUFETDtnQkFFSyxXQUZMO2FBQVIsQ0FUSzs7OztXQXBDUDtFQUFhLGdCQUFNLFNBQU47Ozs7QUFxRG5CLE1BQU0sYUFBTixDQUFvQixpQkFBcEIsRUFBdUMsSUFBdkMsRUFBNEMsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTdDOztrQkFFZSIsImZpbGUiOiJUYWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCB0YWJzQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFRhYiBmcm9tIFwiLi9UYWJcIjtcblxuXG5cbmNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLldyYXBwZXJDb25maWdDbGFzcyA9IFRhYjtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5pbml0aWFsaXplKHRoaXMsXCJjb250YWluZXJcIik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModGhpcyxuZXh0UHJvcHMpO1xuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNvbXBvbmVudFdpbGxVbm1vdW50KHRoaXMpO1xuICAgIH1cblxuICAgIC8vIHdlYXZlc3RhdGUgY2hhbmdlIGRpcmVjdGx5IGNhbGxzIGZvcmNlVXBkYXRlLCBzbyBubyBuZWVkIHRvIHVzZSBXZWF2ZS5kZXRlY3RDaGFuZ2VcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUoKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiVGFicyBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIC8vIGRlZmF1bHQgcmV0dXJuIHRydWVcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyB0aGlzIGVuc3VyZXMgcGFyZW50IHJlbmRlciBvZiB0aGlzIHdvbnQgcmVuZGVyIHRoZSBuYXZiYXJcbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZEtleVByb3BzKFwidGFiTmFtZVwiKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkT2RkQ2hpbGQodGhpcy5zZXR0aW5ncy5hY3RpdmVUYWIuc3RhdGUse2lzQWN0aXZlOlwidHJ1ZVwifSk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRXaWxsVW5tb3VudC5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cbiAgICBzd2l0Y2hUYWIodGFiTmFtZSxpbmRleCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlVGFiLnZhbHVlID0gdGFiTmFtZTtcbiAgICAgICAgaWYoIWlzRGVmYXVsdCAmJnRoaXMucHJvcHMuY2xpY2tDYWxsYmFjayl0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRhYk5hbWUsaW5kZXgpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlRhYnMgLS0tUmVuZGVyLS0tXCIpO1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgdmFyIHRhYkxpbmtzVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgIHZhciBhY3RpdmVUYWJVSSA9IDxkaXYvPlxuXG4gICAgICAgIHJldHVybiAoPGRpdiBzdHlsZT17c3R5bGVPYmplY3R9PlxuICAgICAgICAgICAgICAgICAgICB7dGFiTGlua3NVSX1cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVRhYlVJfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbi8vcmVxdWlyZWQgd2hlbiB3ZSBjaGFuZ2UgdGhpcyB0byB1c2UgTGlua2FibGVQbGFjZUhvbGRlciBPYmplY3RcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LlRhYnNcIiwgVGFicyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFicztcbiJdfQ==
