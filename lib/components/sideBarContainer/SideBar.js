"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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
        App.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        App.addForceUpdateToCallbacks(_this);
        _this.propsManager = new PropsManager();
        if (App.debug) console.log("Sidebar - constructor");
        return _this;
    }

    _createClass(SideBar, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (App.debug) console.log("Sidebar - componentWillReceiveProps");
            App.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (App.debug) console.log("Sidebar - componentWillUnmount");
            App.removeForceUpdateFromCallbacks(this);
        }

        // called only when React Parent render is called

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (App.debug) console.log("Sidebar - shouldComponentUpdate");
            return false;
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            return App.renderChildren(this, this.propsManager);
        }
    }, {
        key: "render",
        value: function render() {
            if (App.debug) console.log("Sidebar - render");
            var styleObject = this.settings.style.getStyleFor();
            var childrenUI = this.renderChildren();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0YsYUFERSxPQUNGLENBQVksS0FBWixFQUFtQjs4QkFEakIsU0FDaUI7OzJFQURqQixvQkFFUSxRQURTOztBQUVmLGNBQUssUUFBTCxHQUFnQixNQUFNLFFBQU4sQ0FGRDtBQUdmLFlBQUksb0NBQUosQ0FBeUMsTUFBSyxLQUFMLENBQVcsUUFBWCxFQUFvQixNQUFLLFFBQUwsQ0FBN0QsQ0FIZTtBQUlmLFlBQUkseUJBQUosUUFKZTtBQUtmLGNBQUssWUFBTCxHQUFvQixJQUFJLFlBQUosRUFBcEIsQ0FMZTtBQU1mLFlBQUcsSUFBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksdUJBQVosRUFBYjtxQkFOZTtLQUFuQjs7aUJBREU7O2tEQVV3QixXQUFVO0FBQ2hDLGdCQUFHLElBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLHFDQUFaLEVBQWI7QUFDQSxnQkFBSSx5QkFBSixDQUE4QixJQUE5QixFQUFtQyxTQUFuQyxFQUZnQzs7OzsrQ0FNZDtBQUNsQixnQkFBRyxJQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSxnQ0FBWixFQUFiO0FBQ0MsZ0JBQUksOEJBQUosQ0FBbUMsSUFBbkMsRUFGaUI7Ozs7Ozs7OENBTUEsV0FBVTtBQUM1QixnQkFBRyxJQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSxpQ0FBWixFQUFiO0FBQ0EsbUJBQU8sS0FBUCxDQUY0Qjs7Ozt5Q0FNaEI7QUFDWixtQkFBUSxJQUFJLGNBQUosQ0FBbUIsSUFBbkIsRUFBd0IsS0FBSyxZQUFMLENBQWhDLENBRFk7Ozs7aUNBS1A7QUFDTCxnQkFBRyxJQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSxrQkFBWixFQUFiO0FBQ0EsZ0JBQUksY0FBZSxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLEVBQWYsQ0FGQztBQUdMLGdCQUFJLGFBQWEsS0FBSyxjQUFMLEVBQWIsQ0FIQzs7QUFLTCxtQkFBUzs7a0JBQUssT0FBTyxXQUFQLEVBQUw7Z0JBQ08sVUFEUDthQUFULENBTEs7Ozs7V0FqQ1A7RUFBZ0IsZ0JBQU0sU0FBTjs7QUE2Q3RCLE1BQU0sYUFBTixDQUFvQixxQ0FBcEIsRUFBMkQsT0FBM0QsRUFBbUUsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXBFOztrQkFFZSIsImZpbGUiOiJTaWRlQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgU2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBwcm9wcy5zZXR0aW5ncyA7XG4gICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgQXBwLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3ModGhpcyk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyID0gbmV3IFByb3BzTWFuYWdlcigpO1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJTaWRlYmFyIC0gY29uc3RydWN0b3JcIik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJTaWRlYmFyIC0gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiKTtcbiAgICAgICAgQXBwLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModGhpcyxuZXh0UHJvcHMpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiU2lkZWJhciAtIGNvbXBvbmVudFdpbGxVbm1vdW50XCIpO1xuICAgICAgICAgQXBwLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgb25seSB3aGVuIFJlYWN0IFBhcmVudCByZW5kZXIgaXMgY2FsbGVkXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXIgLSBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHJldHVybiAgQXBwLnJlbmRlckNoaWxkcmVuKHRoaXMsdGhpcy5wcm9wc01hbmFnZXIpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJTaWRlYmFyIC0gcmVuZGVyXCIpO1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSAgdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgICAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXtzdHlsZU9iamVjdH0+XG4gICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgKTtcbiAgICB9XG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXIuU2lkZUJhclwiLCBTaWRlQmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xuXG4iXX0=
