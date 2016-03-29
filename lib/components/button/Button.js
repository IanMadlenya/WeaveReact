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
                var iconStyleObject = this.settings.iconModeStyle.getStyleFor();
                iconUI = _react2.default.createElement(
                    "i",
                    { style: iconStyleObject, className: iconName },
                    " "
                );
            }

            var styleObject = this.settings.style.getStyleFor();

            var buttonUI = _react2.default.createElement(
                "span",
                { onClick: this.onClickListener, style: styleObject },
                iconUI,
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

Weave.registerClass("weavereact.Button", Button, [weavejs.api.core.ILinkableObject]);

_ComponentManager2.default.registerToolConfig(Button, _Config2.default);
_ComponentManager2.default.registerToolImplementation("weavereact.ButtonConfig", Button);

exports.default = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07OztBQUVGLGFBRkUsTUFFRixDQUFZLEtBQVosRUFBa0I7OEJBRmhCLFFBRWdCOzsyRUFGaEIsbUJBR1EsUUFEUTs7QUFFZCxjQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCLENBRmM7O0tBQWxCOzs7OztpQkFGRTs7OENBUW9CLFdBQVU7QUFDNUIsdUNBVEYsNkRBUzhCLFVBQTVCLENBRDRCO0FBRTVCLGdCQUFHLEtBQUssS0FBTCxDQUFXLFFBQVgsS0FBd0IsVUFBVSxRQUFWLEVBQ3ZCLE9BQU8sSUFBUCxDQURKLEtBR0ksT0FBTyxLQUFQLENBSEo7Ozs7MENBTWE7QUFDYixpQkFBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixHQUE4QixDQUFDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsQ0FEbEI7QUFFYixnQkFBRyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW1CLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBdEI7Ozs7aUNBSUs7QUFDTCxnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksaUJBQVosRUFBMUI7QUFDQSxnQkFBSSxTQUFTLEVBQVQsQ0FGQztBQUdMLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixJQUFnQyxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEdBQTZCLEVBQTdELEdBQWdFLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FIdkU7O0FBS0wsZ0JBQUksV0FBVyxLQUFLLFFBQUwsQ0FBYyxPQUFkLEVBQVgsQ0FMQztBQU1MLGdCQUFHLFlBQVksU0FBUyxNQUFULEdBQWdCLENBQWhCLEVBQWtCO0FBQzdCLG9CQUFJLGtCQUFrQixLQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLFdBQTVCLEVBQWxCLENBRHlCO0FBRTdCLHlCQUFVOztzQkFBRyxPQUFPLGVBQVAsRUFBd0IsV0FBYSxRQUFiLEVBQTNCOztpQkFBVixDQUY2QjthQUFqQzs7QUFLQSxnQkFBSSxjQUFjLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsV0FBcEIsRUFBZCxDQVhDOztBQWFMLGdCQUFJLFdBQVc7O2tCQUFNLFNBQVMsS0FBSyxlQUFMLEVBQXNCLE9BQU8sV0FBUCxFQUFyQztnQkFBMEQsTUFBMUQ7Z0JBQWtFLE1BQU0sSUFBTixDQUFXLEtBQVgsQ0FBbEU7YUFBWCxDQWJDO0FBY0wsZ0JBQUcsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUEyQjtBQUMxQixvQkFBSSxVQUFVLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsU0FBbEIsRUFBVixDQURzQjtBQUUxQiwyQkFBVzs7c0JBQU0sU0FBUyxLQUFLLGVBQUwsRUFBc0IsV0FBVyxPQUFYLEVBQW9CLE9BQU8sV0FBUCxFQUF6RDtvQkFBOEUsTUFBOUU7O29CQUE0RixLQUE1RjtpQkFBWCxDQUYwQjthQUE5QjtBQUlBLG1CQUFRLFFBQVIsQ0FsQks7Ozs7V0F0QlA7OztBQTRDTixNQUFNLGFBQU4sQ0FBb0IsbUJBQXBCLEVBQXlDLE1BQXpDLEVBQWdELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRDs7QUFFQSwyQkFBaUIsa0JBQWpCLENBQW9DLE1BQXBDO0FBQ0EsMkJBQWlCLDBCQUFqQixDQUE0Qyx5QkFBNUMsRUFBc0UsTUFBdEU7O2tCQUVlIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuaW1wb3J0IEJ1dHRvbkNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcblxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrTGlzdGVuZXIgPSB0aGlzLm9uQ2xpY2tMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGFsbG93ZSByZW5kZXIgb25seSB3aGVuIFJlYWN0IFBhcmVudCByZW5kZXIgaXMgY2FsbGVkIHdpdGggbmV3IGljb25Nb2RlIHZhbHVlXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmljb25Nb2RlICE9PSBuZXh0UHJvcHMuaWNvbk1vZGUpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DbGlja0xpc3RlbmVyKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2xpY2tlZC5zdGF0ZSA9ICF0aGlzLnNldHRpbmdzLmNsaWNrZWQuc3RhdGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMub25DbGljayl0aGlzLnByb3BzLm9uQ2xpY2soKVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiQnV0dG9uIC0gcmVuZGVyXCIpO1xuICAgICAgICB2YXIgaWNvblVJID0gXCJcIjtcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5zZXR0aW5ncy5pY29uT25seS5zdGF0ZSB8fCB0aGlzLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlP1wiXCI6dGhpcy5zZXR0aW5ncy5sYWJlbC5zdGF0ZTtcblxuICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmdldEljb24oKTtcbiAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoPjApe1xuICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3MuaWNvbk1vZGVTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgaWNvblVJID0gIDxpIHN0eWxlPXtpY29uU3R5bGVPYmplY3R9IGNsYXNzTmFtZSA9IHtpY29uTmFtZX0+IDwvaT5cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcblxuICAgICAgICB2YXIgYnV0dG9uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tMaXN0ZW5lcn0gc3R5bGU9e3N0eWxlT2JqZWN0fT57aWNvblVJfXtXZWF2ZS5sYW5nKGxhYmVsKX08L3NwYW4+O1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICAgICAgYnV0dG9uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tMaXN0ZW5lcn0gY2xhc3NOYW1lPXtjc3NOYW1lfSBzdHlsZT17c3R5bGVPYmplY3R9PntpY29uVUl9Jm5ic3A7e2xhYmVsfTwvc3Bhbj47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChidXR0b25VSSk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5CdXR0b25cIiwgQnV0dG9uLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhCdXR0b24sQnV0dG9uQ29uZmlnKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LkJ1dHRvbkNvbmZpZ1wiLEJ1dHRvbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ==
