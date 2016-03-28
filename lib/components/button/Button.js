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
            var label = this.settings.iconOnly.state ? "" : this.settings.label.state;

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
                label
            );
            if (this.settings.useCSS.state) {
                var cssName = this.settings.CSS.getCSSFor();
                buttonUI = _react2.default.createElement(
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07OztBQUVGLGFBRkUsTUFFRixDQUFZLEtBQVosRUFBa0I7OEJBRmhCLFFBRWdCOzsyRUFGaEIsbUJBR1EsUUFEUTs7QUFFZCxjQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCLENBRmM7O0tBQWxCOzs7OztpQkFGRTs7OENBUW9CLFdBQVU7QUFDNUIsdUNBVEYsNkRBUzhCLFVBQTVCLENBRDRCO0FBRTVCLGdCQUFHLEtBQUssS0FBTCxDQUFXLFFBQVgsS0FBd0IsVUFBVSxRQUFWLEVBQ3ZCLE9BQU8sSUFBUCxDQURKLEtBR0ksT0FBTyxLQUFQLENBSEo7Ozs7MENBTWE7QUFDYixpQkFBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixHQUE4QixDQUFDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsQ0FEbEI7QUFFYixnQkFBRyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW1CLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBdEI7Ozs7aUNBSUs7QUFDTCxnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksaUJBQVosRUFBMUI7QUFDQSxnQkFBSSxTQUFTLEVBQVQsQ0FGQztBQUdMLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixHQUE2QixFQUE3QixHQUFnQyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLENBSHZDOztBQUtMLGdCQUFJLFdBQVcsS0FBSyxRQUFMLENBQWMsT0FBZCxFQUFYLENBTEM7QUFNTCxnQkFBRyxZQUFZLFNBQVMsTUFBVCxHQUFnQixDQUFoQixFQUFrQjtBQUM3QixvQkFBSSxrQkFBa0IsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixXQUE1QixFQUFsQixDQUR5QjtBQUU3Qix5QkFBVTs7c0JBQUcsT0FBTyxlQUFQLEVBQXdCLFdBQWEsUUFBYixFQUEzQjs7aUJBQVYsQ0FGNkI7YUFBakM7O0FBS0EsZ0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLEVBQWQsQ0FYQzs7QUFhTCxnQkFBSSxXQUFXOztrQkFBTSxTQUFTLEtBQUssZUFBTCxFQUFzQixPQUFPLFdBQVAsRUFBckM7Z0JBQTBELE1BQTFEO2dCQUFrRSxLQUFsRTthQUFYLENBYkM7QUFjTCxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTJCO0FBQzFCLG9CQUFJLFVBQVUsS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUFWLENBRHNCO0FBRTFCLDJCQUFXOztzQkFBTSxTQUFTLEtBQUssZUFBTCxFQUFzQixXQUFXLE9BQVgsRUFBb0IsT0FBTyxXQUFQLEVBQXpEO29CQUE4RSxNQUE5RTtvQkFBc0YsS0FBdEY7aUJBQVgsQ0FGMEI7YUFBOUI7QUFJQSxtQkFBUSxRQUFSLENBbEJLOzs7O1dBdEJQOzs7QUE0Q04sTUFBTSxhQUFOLENBQW9CLG1CQUFwQixFQUF5QyxNQUF6QyxFQUFnRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakQ7O0FBRUEsMkJBQWlCLGtCQUFqQixDQUFvQyxNQUFwQztBQUNBLDJCQUFpQiwwQkFBakIsQ0FBNEMseUJBQTVDLEVBQXNFLE1BQXRFOztrQkFFZSIsImZpbGUiOiJCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcbmltcG9ydCBCdXR0b25Db25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XG5cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMub25DbGlja0xpc3RlbmVyID0gdGhpcy5vbkNsaWNrTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBhbGxvd2UgcmVuZGVyIG9ubHkgd2hlbiBSZWFjdCBQYXJlbnQgcmVuZGVyIGlzIGNhbGxlZCB3aXRoIG5ldyBpY29uTW9kZSB2YWx1ZVxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pY29uTW9kZSAhPT0gbmV4dFByb3BzLmljb25Nb2RlKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uQ2xpY2tMaXN0ZW5lcigpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNsaWNrZWQuc3RhdGUgPSAhdGhpcy5zZXR0aW5ncy5jbGlja2VkLnN0YXRlO1xuICAgICAgICBpZih0aGlzLnByb3BzLm9uQ2xpY2spdGhpcy5wcm9wcy5vbkNsaWNrKClcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIkJ1dHRvbiAtIHJlbmRlclwiKTtcbiAgICAgICAgdmFyIGljb25VSSA9IFwiXCI7XG4gICAgICAgIHZhciBsYWJlbCA9IHRoaXMuc2V0dGluZ3MuaWNvbk9ubHkuc3RhdGU/XCJcIjp0aGlzLnNldHRpbmdzLmxhYmVsLnN0YXRlO1xuXG4gICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuc2V0dGluZ3MuZ2V0SWNvbigpO1xuICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGg+MCl7XG4gICAgICAgICAgICB2YXIgaWNvblN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5pY29uTW9kZVN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgICAgICBpY29uVUkgPSAgPGkgc3R5bGU9e2ljb25TdHlsZU9iamVjdH0gY2xhc3NOYW1lID0ge2ljb25OYW1lfT4gPC9pPlxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcigpO1xuXG4gICAgICAgIHZhciBidXR0b25VSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMub25DbGlja0xpc3RlbmVyfSBzdHlsZT17c3R5bGVPYmplY3R9PntpY29uVUl9e2xhYmVsfTwvc3Bhbj47XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnN0YXRlKXtcbiAgICAgICAgICAgIHZhciBjc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5DU1MuZ2V0Q1NTRm9yKCk7XG4gICAgICAgICAgICBidXR0b25VSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMub25DbGlja0xpc3RlbmVyfSBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2ljb25VSX17bGFiZWx9PC9zcGFuPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGJ1dHRvblVJKTtcbiAgICB9XG5cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LkJ1dHRvblwiLCBCdXR0b24sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKEJ1dHRvbixCdXR0b25Db25maWcpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuQnV0dG9uQ29uZmlnXCIsQnV0dG9uKTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19
