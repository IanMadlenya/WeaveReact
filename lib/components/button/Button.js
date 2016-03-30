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

Weave.registerClass("weavereact.Button", Button, [weavejs.api.core.ILinkableObject]);

_ComponentManager2.default.registerToolConfig(Button, _Config2.default);
_ComponentManager2.default.registerToolImplementation("weavereact.ButtonConfig", Button);

exports.default = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07OztBQUVGLGFBRkUsTUFFRixDQUFZLEtBQVosRUFBa0I7OEJBRmhCLFFBRWdCOzsyRUFGaEIsbUJBR1EsUUFEUTs7QUFFZCxjQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCLENBRmM7O0tBQWxCOzs7OztpQkFGRTs7OENBUW9CLFdBQVU7QUFDNUIsdUNBVEYsNkRBUzhCLFVBQTVCLENBRDRCO0FBRTVCLGdCQUFHLEtBQUssS0FBTCxDQUFXLFFBQVgsS0FBd0IsVUFBVSxRQUFWLEVBQ3ZCLE9BQU8sSUFBUCxDQURKLEtBR0ksT0FBTyxLQUFQLENBSEo7Ozs7MENBTWE7QUFDYixpQkFBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixHQUE4QixDQUFDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsQ0FEbEI7QUFFYixnQkFBRyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW1CLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBdEI7Ozs7aUNBSUs7QUFDTCxnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksaUJBQVosRUFBMUI7QUFDQSxnQkFBSSxTQUFTLEVBQVQsQ0FGQztBQUdMLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixJQUFnQyxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEdBQTZCLEVBQTdELEdBQWdFLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FIdkU7O0FBS0wsZ0JBQUksV0FBVyxLQUFLLFFBQUwsQ0FBYyxPQUFkLEVBQVgsQ0FMQztBQU1MLGdCQUFHLFlBQVksU0FBUyxNQUFULEdBQWdCLENBQWhCLEVBQWtCO0FBQzdCLG9CQUFJLGtCQUFrQixLQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLEtBQTVCLENBRE87QUFFN0IseUJBQVU7O3NCQUFHLE9BQU8sZUFBUCxFQUF3QixXQUFhLFFBQWIsRUFBM0I7O2lCQUFWLENBRjZCO2FBQWpDOztBQUtBLGdCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQVhiOztBQWFMLGdCQUFJLFdBQVc7O2tCQUFNLFNBQVMsS0FBSyxlQUFMLEVBQXNCLE9BQU8sV0FBUCxFQUFyQztnQkFBMEQsTUFBMUQ7O2dCQUF3RSxNQUFNLElBQU4sQ0FBVyxLQUFYLENBQXhFO2FBQVgsQ0FiQztBQWNMLGdCQUFHLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsRUFBMkI7QUFDMUIsb0JBQUksVUFBVSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQVYsQ0FEc0I7QUFFMUIsMkJBQVc7O3NCQUFNLFNBQVMsS0FBSyxlQUFMLEVBQXNCLFdBQVcsT0FBWCxFQUFvQixPQUFPLFdBQVAsRUFBekQ7b0JBQThFLE1BQTlFOztvQkFBNEYsS0FBNUY7aUJBQVgsQ0FGMEI7YUFBOUI7QUFJQSxtQkFBUSxRQUFSLENBbEJLOzs7O1dBdEJQOzs7QUE0Q04sTUFBTSxhQUFOLENBQW9CLG1CQUFwQixFQUF5QyxNQUF6QyxFQUFnRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakQ7O0FBRUEsMkJBQWlCLGtCQUFqQixDQUFvQyxNQUFwQztBQUNBLDJCQUFpQiwwQkFBakIsQ0FBNEMseUJBQTVDLEVBQXNFLE1BQXRFOztrQkFFZSIsImZpbGUiOiJCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcbmltcG9ydCBCdXR0b25Db25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XG5cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMub25DbGlja0xpc3RlbmVyID0gdGhpcy5vbkNsaWNrTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBhbGxvd2UgcmVuZGVyIG9ubHkgd2hlbiBSZWFjdCBQYXJlbnQgcmVuZGVyIGlzIGNhbGxlZCB3aXRoIG5ldyBpY29uTW9kZSB2YWx1ZVxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pY29uTW9kZSAhPT0gbmV4dFByb3BzLmljb25Nb2RlKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uQ2xpY2tMaXN0ZW5lcigpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNsaWNrZWQuc3RhdGUgPSAhdGhpcy5zZXR0aW5ncy5jbGlja2VkLnN0YXRlO1xuICAgICAgICBpZih0aGlzLnByb3BzLm9uQ2xpY2spdGhpcy5wcm9wcy5vbkNsaWNrKClcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIkJ1dHRvbiAtIHJlbmRlclwiKTtcbiAgICAgICAgdmFyIGljb25VSSA9IFwiXCI7XG4gICAgICAgIHZhciBsYWJlbCA9IHRoaXMuc2V0dGluZ3MuaWNvbk9ubHkuc3RhdGUgfHwgdGhpcy5zZXR0aW5ncy5pY29uTW9kZS5zdGF0ZT9cIlwiOnRoaXMuc2V0dGluZ3MubGFiZWwuc3RhdGU7XG5cbiAgICAgICAgdmFyIGljb25OYW1lID0gdGhpcy5zZXR0aW5ncy5nZXRJY29uKCk7XG4gICAgICAgIGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aD4wKXtcbiAgICAgICAgICAgIHZhciBpY29uU3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLmljb25Nb2RlU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICBpY29uVUkgPSAgPGkgc3R5bGU9e2ljb25TdHlsZU9iamVjdH0gY2xhc3NOYW1lID0ge2ljb25OYW1lfT4gPC9pPlxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcblxuICAgICAgICB2YXIgYnV0dG9uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tMaXN0ZW5lcn0gc3R5bGU9e3N0eWxlT2JqZWN0fT57aWNvblVJfSZuYnNwO3tXZWF2ZS5sYW5nKGxhYmVsKX08L3NwYW4+O1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICAgICAgYnV0dG9uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tMaXN0ZW5lcn0gY2xhc3NOYW1lPXtjc3NOYW1lfSBzdHlsZT17c3R5bGVPYmplY3R9PntpY29uVUl9Jm5ic3A7e2xhYmVsfTwvc3Bhbj47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChidXR0b25VSSk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5CdXR0b25cIiwgQnV0dG9uLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhCdXR0b24sQnV0dG9uQ29uZmlnKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LkJ1dHRvbkNvbmZpZ1wiLEJ1dHRvbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ==
