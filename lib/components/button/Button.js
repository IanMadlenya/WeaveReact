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
            var label = this.settings.iconOnly.state || this.settings.iconMode.state ? "" : this.settings.label.state;

            var iconName = this.settings.getIcon();
            if (iconName && iconName.length > 0) {
                var iconStyleObject = this.settings.iconModeStyle.state;
                iconUI = _react2.default.createElement(
                    "i",
                    { style: iconStyleObject, className: iconName },
                    " "
                );
            }

            var styleObject = this.settings.style.state;

            var buttonUI = _react2.default.createElement(
                "span",
                { onClick: this.onClickListener, style: styleObject },
                iconUI,
                " ",
                Weave.lang(label)
            );
            if (this.settings.useCSS.state) {
                var cssName = this.settings.CSS.getCSSFor();
                buttonUI = _react2.default.createElement(
                    "span",
                    { onClick: this.onClickListener, className: cssName, style: styleObject },
                    iconUI,
                    " ",
                    label
                );
            }
            return buttonUI;
        }
    }]);

    return Button;
}(_AbstractComponent3.default);

Weave.registerClass(Button, ["weavereact.Button"], [weavejs.api.core.ILinkableObject], "Button");

_ComponentManager2.default.registerToolConfig(Button, _Config2.default);
_ComponentManager2.default.registerToolImplementation("weavereact.ButtonConfig", Button);

exports.default = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07OztBQUVGLGFBRkUsTUFFRixDQUFZLEtBQVosRUFBa0I7OEJBRmhCLFFBRWdCOzsyRUFGaEIsbUJBR1EsUUFEUTs7QUFFZCxjQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCLENBRmM7O0tBQWxCOzs7OztpQkFGRTs7OENBUW9CLFdBQVU7QUFDNUIsdUNBVEYsNkRBUzhCLFVBQTVCLENBRDRCO0FBRTVCLGdCQUFHLEtBQUssS0FBTCxDQUFXLFFBQVgsS0FBd0IsVUFBVSxRQUFWLEVBQ3ZCLE9BQU8sSUFBUCxDQURKLEtBR0ksT0FBTyxLQUFQLENBSEo7Ozs7MENBTWE7QUFDYixpQkFBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixHQUE4QixDQUFDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsQ0FEbEI7QUFFYixnQkFBRyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW1CLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBdEI7Ozs7aUNBSUs7QUFDTCxnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksaUJBQVosRUFBMUI7QUFDQSxnQkFBSSxTQUFTLEVBQVQsQ0FGQztBQUdMLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixJQUFnQyxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEdBQTZCLEVBQTdELEdBQWdFLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FIdkU7O0FBS0wsZ0JBQUksV0FBVyxLQUFLLFFBQUwsQ0FBYyxPQUFkLEVBQVgsQ0FMQztBQU1MLGdCQUFHLFlBQVksU0FBUyxNQUFULEdBQWdCLENBQWhCLEVBQWtCO0FBQzdCLG9CQUFJLGtCQUFrQixLQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLEtBQTVCLENBRE87QUFFN0IseUJBQVU7O3NCQUFHLE9BQU8sZUFBUCxFQUF3QixXQUFhLFFBQWIsRUFBM0I7O2lCQUFWLENBRjZCO2FBQWpDOztBQUtBLGdCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQVhiOztBQWFMLGdCQUFJLFdBQVc7O2tCQUFNLFNBQVMsS0FBSyxlQUFMLEVBQXNCLE9BQU8sV0FBUCxFQUFyQztnQkFBMEQsTUFBMUQ7O2dCQUF3RSxNQUFNLElBQU4sQ0FBVyxLQUFYLENBQXhFO2FBQVgsQ0FiQztBQWNMLGdCQUFHLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsRUFBMkI7QUFDMUIsb0JBQUksVUFBVSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQVYsQ0FEc0I7QUFFMUIsMkJBQVc7O3NCQUFNLFNBQVMsS0FBSyxlQUFMLEVBQXNCLFdBQVcsT0FBWCxFQUFvQixPQUFPLFdBQVAsRUFBekQ7b0JBQThFLE1BQTlFOztvQkFBNEYsS0FBNUY7aUJBQVgsQ0FGMEI7YUFBOUI7QUFJQSxtQkFBUSxRQUFSLENBbEJLOzs7O1dBdEJQOzs7QUE0Q04sTUFBTSxhQUFOLENBQXFCLE1BQXJCLEVBQTRCLENBQUMsbUJBQUQsQ0FBNUIsRUFBa0QsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQW5ELEVBQXNGLFFBQXRGOztBQUVBLDJCQUFpQixrQkFBakIsQ0FBb0MsTUFBcEM7QUFDQSwyQkFBaUIsMEJBQWpCLENBQTRDLHlCQUE1QyxFQUFzRSxNQUF0RTs7a0JBRWUiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgQnV0dG9uQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tMaXN0ZW5lciA9IHRoaXMub25DbGlja0xpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gYWxsb3dlIHJlbmRlciBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWQgd2l0aCBuZXcgaWNvbk1vZGUgdmFsdWVcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuaWNvbk1vZGUgIT09IG5leHRQcm9wcy5pY29uTW9kZSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkNsaWNrTGlzdGVuZXIoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jbGlja2VkLnN0YXRlID0gIXRoaXMuc2V0dGluZ3MuY2xpY2tlZC5zdGF0ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vbkNsaWNrKXRoaXMucHJvcHMub25DbGljaygpXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJCdXR0b24gLSByZW5kZXJcIik7XG4gICAgICAgIHZhciBpY29uVUkgPSBcIlwiO1xuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnNldHRpbmdzLmljb25Pbmx5LnN0YXRlIHx8IHRoaXMuc2V0dGluZ3MuaWNvbk1vZGUuc3RhdGU/XCJcIjp0aGlzLnNldHRpbmdzLmxhYmVsLnN0YXRlO1xuXG4gICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuc2V0dGluZ3MuZ2V0SWNvbigpO1xuICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGg+MCl7XG4gICAgICAgICAgICB2YXIgaWNvblN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5pY29uTW9kZVN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgaWNvblVJID0gIDxpIHN0eWxlPXtpY29uU3R5bGVPYmplY3R9IGNsYXNzTmFtZSA9IHtpY29uTmFtZX0+IDwvaT5cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuc3RhdGU7XG5cbiAgICAgICAgdmFyIGJ1dHRvblVJID0gPHNwYW4gb25DbGljaz17dGhpcy5vbkNsaWNrTGlzdGVuZXJ9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2ljb25VSX0mbmJzcDt7V2VhdmUubGFuZyhsYWJlbCl9PC9zcGFuPjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1Muc3RhdGUpe1xuICAgICAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgICAgIGJ1dHRvblVJID0gPHNwYW4gb25DbGljaz17dGhpcy5vbkNsaWNrTGlzdGVuZXJ9IGNsYXNzTmFtZT17Y3NzTmFtZX0gc3R5bGU9e3N0eWxlT2JqZWN0fT57aWNvblVJfSZuYnNwO3tsYWJlbH08L3NwYW4+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYnV0dG9uVUkpO1xuICAgIH1cblxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyggQnV0dG9uLFtcIndlYXZlcmVhY3QuQnV0dG9uXCJdLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sIFwiQnV0dG9uXCIpO1xuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhCdXR0b24sQnV0dG9uQ29uZmlnKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LkJ1dHRvbkNvbmZpZ1wiLEJ1dHRvbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ==