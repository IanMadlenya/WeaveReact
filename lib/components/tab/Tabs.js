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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPTTs7O0FBRUYsYUFGRSxJQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsTUFFaUI7OzJFQUZqQixpQkFHUSxRQURTOztBQUVmLGNBQUssa0JBQUwsaUJBRmU7QUFHZixtQ0FBaUIsVUFBakIsUUFBaUMsV0FBakMsRUFIZTs7S0FBbkI7O2lCQUZFOztrREFRd0IsV0FBVTtBQUNoQyx1Q0FBaUIseUJBQWpCLENBQTJDLElBQTNDLEVBQWdELFNBQWhELEVBRGdDOzs7OytDQUlkO0FBQ2xCLHVDQUFpQixvQkFBakIsQ0FBc0MsSUFBdEMsRUFEa0I7Ozs7Ozs7Z0RBS0M7QUFDbkIsZ0JBQUcsSUFBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksNEJBQVosRUFBYjs7QUFEbUIsbUJBR1osS0FBUDtBQUhtQjs7O3lDQU9QO0FBQ1osaUJBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixTQUE5QixFQURZO0FBRVosaUJBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLEtBQXhCLEVBQThCLEVBQUMsVUFBUyxNQUFULEVBQTdELEVBRlk7QUFHWixtQkFBTyxxQkFBcUIsY0FBckIsQ0FBb0MsSUFBcEMsQ0FBUCxDQUhZOzs7O2tDQU1OLFNBQVEsT0FBTTtBQUNwQixpQkFBSyxRQUFMLENBQWMsU0FBZCxDQUF3QixLQUF4QixHQUFnQyxPQUFoQyxDQURvQjtBQUVwQixnQkFBRyxDQUFDLFNBQUQsSUFBYSxLQUFLLEtBQUwsQ0FBVyxhQUFYLEVBQXlCLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsSUFBekIsQ0FBOEIsSUFBOUIsRUFBbUMsT0FBbkMsRUFBMkMsS0FBM0MsRUFBekM7Ozs7aUNBSUs7O0FBRUwsZ0JBQUcsSUFBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksbUJBQVosRUFBYjs7QUFFQSxnQkFBSSxjQUFjLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsV0FBcEIsRUFBZCxDQUpDO0FBS0wsZ0JBQUksVUFBVSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQVYsQ0FMQztBQU1MLGdCQUFJLGFBQWEsS0FBSyxjQUFMLEVBQWIsQ0FOQztBQU9MLGdCQUFJLGNBQWMsMENBQWQsQ0FQQzs7QUFTTCxtQkFBUTs7a0JBQUssT0FBTyxXQUFQLEVBQUw7Z0JBQ0ssVUFETDtnQkFFSyxXQUZMO2FBQVIsQ0FUSzs7OztXQXBDUDtFQUFhLGdCQUFNLFNBQU47Ozs7QUFxRG5CLE1BQU0sYUFBTixDQUFvQixpQkFBcEIsRUFBdUMsSUFBdkMsRUFBNEMsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTdDOztrQkFFZSIsImZpbGUiOiJUYWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCB0YWJzQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFRhYiBmcm9tIFwiLi9UYWJcIjtcblxuXG5cbmNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLldyYXBwZXJDb25maWdDbGFzcyA9IFRhYjtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5pbml0aWFsaXplKHRoaXMsXCJjb250YWluZXJcIik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModGhpcyxuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY29tcG9uZW50V2lsbFVubW91bnQodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gd2VhdmVzdGF0ZSBjaGFuZ2UgZGlyZWN0bHkgY2FsbHMgZm9yY2VVcGRhdGUsIHNvIG5vIG5lZWQgdG8gdXNlIFdlYXZlLmRldGVjdENoYW5nZVxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJUYWJzIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcbiAgICAgICAgLy8gZGVmYXVsdCByZXR1cm4gdHJ1ZVxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHRoaXMgZW5zdXJlcyBwYXJlbnQgcmVuZGVyIG9mIHRoaXMgd29udCByZW5kZXIgdGhlIG5hdmJhclxuICAgIH1cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkS2V5UHJvcHMoXCJ0YWJOYW1lXCIpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGRPZGRDaGlsZCh0aGlzLnNldHRpbmdzLmFjdGl2ZVRhYi5zdGF0ZSx7aXNBY3RpdmU6XCJ0cnVlXCJ9KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFdpbGxVbm1vdW50LnJlbmRlckNoaWxkcmVuKHRoaXMpO1xuICAgIH1cblxuICAgIHN3aXRjaFRhYih0YWJOYW1lLGluZGV4KXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVUYWIudmFsdWUgPSB0YWJOYW1lO1xuICAgICAgICBpZighaXNEZWZhdWx0ICYmdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrKXRoaXMucHJvcHMuY2xpY2tDYWxsYmFjay5jYWxsKHRoaXMsdGFiTmFtZSxpbmRleCk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiVGFicyAtLS1SZW5kZXItLS1cIik7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICB2YXIgdGFiTGlua3NVSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgICAgdmFyIGFjdGl2ZVRhYlVJID0gPGRpdi8+XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IHN0eWxlPXtzdHlsZU9iamVjdH0+XG4gICAgICAgICAgICAgICAgICAgIHt0YWJMaW5rc1VJfVxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlVGFiVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuLy9yZXF1aXJlZCB3aGVuIHdlIGNoYW5nZSB0aGlzIHRvIHVzZSBMaW5rYWJsZVBsYWNlSG9sZGVyIE9iamVjdFxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuVGFic1wiLCBUYWJzLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIl19
