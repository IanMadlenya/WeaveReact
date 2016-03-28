"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _Config = require("./Config");

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_AbstractComponent) {
    _inherits(Button, _AbstractComponent);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

        _this.onClickListener = _this.onClickListener.bind(_this);
        return _this;
    }

    // allowe render only when React Parent render is called with new iconMode value


    _createClass(Button, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            _get(Object.getPrototypeOf(Button.prototype), "shouldComponentUpdate", this).call(this, nextProps);
            if (this.props.iconMode !== nextProps.iconMode) return true;else return false;
        }
    }, {
        key: "onClickListener",
        value: function onClickListener() {
            this.settings.clicked.state = !this.settings.clicked.state;
            if (this.props.onClick) this.props.onClick();
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Button - render");
            var iconUI = "";
            var label = this.settings.iconOnly.state ? "" : this.settings.label.state;

            var iconName = this.settings.getIcon();
            if (iconName && iconName.length > 0) {
                var iconStyleObject = this.settings.iconModeStyle.getStyleFor();
                iconUI = React.createElement(
                    "i",
                    { style: iconStyleObject, className: iconName },
                    " "
                );
            }

            var styleObject = this.settings.style.getStyleFor();

            var buttonUI = React.createElement(
                "span",
                { onClick: this.onClickListener, style: styleObject },
                iconUI,
                label
            );
            if (this.settings.useCSS.state) {
                var cssName = this.settings.CSS.getCSSFor();
                buttonUI = React.createElement(
                    "span",
                    { onClick: this.onClickListener, className: cssName, style: styleObject },
                    iconUI,
                    label
                );
            }
            return buttonUI;
        }
    }]);

    return Button;
}(_AbstractComponent3.default);

Weave.registerClass("weavereact.Button", Button, [weavejs.api.core.ILinkableObject]);

_ComponentManager2.default.registerToolConfig(Button, _Config2.default);
_ComponentManager2.default.registerToolImplementation("weavereact.ButtonConfig", Button);

exports.default = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTTs7O0FBRUYsYUFGRSxNQUVGLENBQVksS0FBWixFQUFrQjs4QkFGaEIsUUFFZ0I7OzJFQUZoQixtQkFHUSxRQURROztBQUVkLGNBQUssZUFBTCxHQUF1QixNQUFLLGVBQUwsQ0FBcUIsSUFBckIsT0FBdkIsQ0FGYzs7S0FBbEI7Ozs7O2lCQUZFOzs4Q0FRb0IsV0FBVTtBQUM1Qix1Q0FURiw2REFTOEIsVUFBNUIsQ0FENEI7QUFFNUIsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFDdkIsT0FBTyxJQUFQLENBREosS0FHSSxPQUFPLEtBQVAsQ0FISjs7OzswQ0FNYTtBQUNiLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEdBQThCLENBQUMsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixDQURsQjtBQUViLGdCQUFHLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBbUIsS0FBSyxLQUFMLENBQVcsT0FBWCxHQUF0Qjs7OztpQ0FJSztBQUNMLGdCQUFHLDJCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxpQkFBWixFQUExQjtBQUNBLGdCQUFJLFNBQVMsRUFBVCxDQUZDO0FBR0wsZ0JBQUksUUFBUSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEdBQTZCLEVBQTdCLEdBQWdDLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FIdkM7O0FBS0wsZ0JBQUksV0FBVyxLQUFLLFFBQUwsQ0FBYyxPQUFkLEVBQVgsQ0FMQztBQU1MLGdCQUFHLFlBQVksU0FBUyxNQUFULEdBQWdCLENBQWhCLEVBQWtCO0FBQzdCLG9CQUFJLGtCQUFrQixLQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLFdBQTVCLEVBQWxCLENBRHlCO0FBRTdCLHlCQUFVOztzQkFBRyxPQUFPLGVBQVAsRUFBd0IsV0FBYSxRQUFiLEVBQTNCOztpQkFBVixDQUY2QjthQUFqQzs7QUFLQSxnQkFBSSxjQUFjLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsV0FBcEIsRUFBZCxDQVhDOztBQWFMLGdCQUFJLFdBQVc7O2tCQUFNLFNBQVMsS0FBSyxlQUFMLEVBQXNCLE9BQU8sV0FBUCxFQUFyQztnQkFBMEQsTUFBMUQ7Z0JBQWtFLEtBQWxFO2FBQVgsQ0FiQztBQWNMLGdCQUFHLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsRUFBMkI7QUFDMUIsb0JBQUksVUFBVSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQVYsQ0FEc0I7QUFFMUIsMkJBQVc7O3NCQUFNLFNBQVMsS0FBSyxlQUFMLEVBQXNCLFdBQVcsT0FBWCxFQUFvQixPQUFPLFdBQVAsRUFBekQ7b0JBQThFLE1BQTlFO29CQUFzRixLQUF0RjtpQkFBWCxDQUYwQjthQUE5QjtBQUlBLG1CQUFRLFFBQVIsQ0FsQks7Ozs7V0F0QlA7OztBQTRDTixNQUFNLGFBQU4sQ0FBb0IsbUJBQXBCLEVBQXlDLE1BQXpDLEVBQWdELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRDs7QUFFQSwyQkFBaUIsa0JBQWpCLENBQW9DLE1BQXBDO0FBQ0EsMkJBQWlCLDBCQUFqQixDQUE0Qyx5QkFBNUMsRUFBc0UsTUFBdEU7O2tCQUVlIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgQnV0dG9uQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tMaXN0ZW5lciA9IHRoaXMub25DbGlja0xpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gYWxsb3dlIHJlbmRlciBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWQgd2l0aCBuZXcgaWNvbk1vZGUgdmFsdWVcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuaWNvbk1vZGUgIT09IG5leHRQcm9wcy5pY29uTW9kZSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkNsaWNrTGlzdGVuZXIoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jbGlja2VkLnN0YXRlID0gIXRoaXMuc2V0dGluZ3MuY2xpY2tlZC5zdGF0ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vbkNsaWNrKXRoaXMucHJvcHMub25DbGljaygpXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJCdXR0b24gLSByZW5kZXJcIik7XG4gICAgICAgIHZhciBpY29uVUkgPSBcIlwiO1xuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnNldHRpbmdzLmljb25Pbmx5LnN0YXRlP1wiXCI6dGhpcy5zZXR0aW5ncy5sYWJlbC5zdGF0ZTtcblxuICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmdldEljb24oKTtcbiAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoPjApe1xuICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3MuaWNvbk1vZGVTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgaWNvblVJID0gIDxpIHN0eWxlPXtpY29uU3R5bGVPYmplY3R9IGNsYXNzTmFtZSA9IHtpY29uTmFtZX0+IDwvaT5cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcblxuICAgICAgICB2YXIgYnV0dG9uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tMaXN0ZW5lcn0gc3R5bGU9e3N0eWxlT2JqZWN0fT57aWNvblVJfXtsYWJlbH08L3NwYW4+O1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICAgICAgYnV0dG9uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tMaXN0ZW5lcn0gY2xhc3NOYW1lPXtjc3NOYW1lfSBzdHlsZT17c3R5bGVPYmplY3R9PntpY29uVUl9e2xhYmVsfTwvc3Bhbj47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChidXR0b25VSSk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5CdXR0b25cIiwgQnV0dG9uLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhCdXR0b24sQnV0dG9uQ29uZmlnKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LkJ1dHRvbkNvbmZpZ1wiLEJ1dHRvbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ==
