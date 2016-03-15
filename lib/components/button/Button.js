"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

var _Config = require("./Config");

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _Config2.default();
        _App2.default.addForceUpdateToCallbacks(_this);
        _this.onClickListener = _this.onClickListener.bind(_this);
        if (_App2.default.debug) console.log("Button - constructor");
        return _this;
    }

    _createClass(Button, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (_App2.default.debug) console.log("Button - componentWillReceiveProps");
            _App2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (_App2.default.debug) console.log("Button - componentWillUnmount");
            _App2.default.removeForceUpdateFromCallbacks(this);
        }

        // allowe render only when React Parent render is called with new iconMode value

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (_App2.default.debug) console.log("Button - shouldComponentUpdate");
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
            if (_App2.default.debug) console.log("Button - render");
            var iconUI = "";
            var label = this.settings.iconOnly.state ? "" : this.settings.label.state;

            var iconName = this.settings.getIcon();
            if (iconName && iconName.length > 0) {
                var iconStyleObject = this.settings.iconStyle.getStyleFor(null, true);
                iconUI = _react2.default.createElement(
                    "i",
                    { style: iconStyleObject, className: iconName },
                    " "
                );
            }

            var styleObject = this.settings.style.getStyleFor(null, true);

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
}(_react2.default.Component);

Weave.registerClass("weavereact.Button", Button, [weavejs.api.core.ILinkableObject]);

_App2.default.registerToolConfig(Button, _Config2.default);
_App2.default.registerToolImplementation("weavereact.ButtonConfig", Button);

exports.default = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007OztBQUVGLGFBRkUsTUFFRixDQUFZLEtBQVosRUFBa0I7OEJBRmhCLFFBRWdCOzsyRUFGaEIsbUJBR1EsUUFEUTs7QUFFZCxjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLHNCQUExQyxDQUZGO0FBR2Qsc0JBQUkseUJBQUosUUFIYztBQUlkLGNBQUssZUFBTCxHQUF1QixNQUFLLGVBQUwsQ0FBcUIsSUFBckIsT0FBdkIsQ0FKYztBQUtkLFlBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksc0JBQVosRUFBYjtxQkFMYztLQUFsQjs7aUJBRkU7O2tEQVV3QixXQUFVO0FBQ2hDLGdCQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLG9DQUFaLEVBQWI7QUFDQSwwQkFBSSx5QkFBSixDQUE4QixJQUE5QixFQUFtQyxTQUFuQyxFQUZnQzs7OzsrQ0FNZDtBQUNsQixnQkFBRyxjQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSwrQkFBWixFQUFiO0FBQ0MsMEJBQUksOEJBQUosQ0FBbUMsSUFBbkMsRUFGaUI7Ozs7Ozs7OENBTUEsV0FBVTtBQUM1QixnQkFBRyxjQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSxnQ0FBWixFQUFiO0FBQ0EsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFDdkIsT0FBTyxJQUFQLENBREosS0FHSSxPQUFPLEtBQVAsQ0FISjs7OzswQ0FNYTtBQUNiLGlCQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEdBQThCLENBQUMsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixDQURsQjtBQUViLGdCQUFHLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBbUIsS0FBSyxLQUFMLENBQVcsT0FBWCxHQUF0Qjs7OztpQ0FJSztBQUNMLGdCQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLGlCQUFaLEVBQWI7QUFDQSxnQkFBSSxTQUFTLEVBQVQsQ0FGQztBQUdMLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixHQUE2QixFQUE3QixHQUFnQyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLENBSHZDOztBQUtMLGdCQUFJLFdBQVcsS0FBSyxRQUFMLENBQWMsT0FBZCxFQUFYLENBTEM7QUFNTCxnQkFBRyxZQUFZLFNBQVMsTUFBVCxHQUFnQixDQUFoQixFQUFrQjtBQUM3QixvQkFBSSxrQkFBa0IsS0FBSyxRQUFMLENBQWMsU0FBZCxDQUF3QixXQUF4QixDQUFvQyxJQUFwQyxFQUF5QyxJQUF6QyxDQUFsQixDQUR5QjtBQUU3Qix5QkFBVTs7c0JBQUcsT0FBTyxlQUFQLEVBQXdCLFdBQWEsUUFBYixFQUEzQjs7aUJBQVYsQ0FGNkI7YUFBakM7O0FBS0EsZ0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLENBQWdDLElBQWhDLEVBQXFDLElBQXJDLENBQWQsQ0FYQzs7QUFhTCxnQkFBSSxXQUFXOztrQkFBTSxTQUFTLEtBQUssZUFBTCxFQUFzQixPQUFPLFdBQVAsRUFBckM7Z0JBQTBELE1BQTFEO2dCQUFrRSxLQUFsRTthQUFYLENBYkM7QUFjTCxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTJCO0FBQzFCLG9CQUFJLFVBQVUsS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUFWLENBRHNCO0FBRTFCLDJCQUFXOztzQkFBTSxTQUFTLEtBQUssZUFBTCxFQUFzQixXQUFXLE9BQVgsRUFBb0IsT0FBTyxXQUFQLEVBQXpEO29CQUE4RSxNQUE5RTtvQkFBc0YsS0FBdEY7aUJBQVgsQ0FGMEI7YUFBOUI7QUFJQSxtQkFBUSxRQUFSLENBbEJLOzs7O1dBcENQO0VBQWUsZ0JBQU0sU0FBTjs7QUEwRHJCLE1BQU0sYUFBTixDQUFvQixtQkFBcEIsRUFBeUMsTUFBekMsRUFBZ0QsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQWpEOztBQUVBLGNBQUksa0JBQUosQ0FBdUIsTUFBdkI7QUFDQSxjQUFJLDBCQUFKLENBQStCLHlCQUEvQixFQUF5RCxNQUF6RDs7a0JBRWUiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IEJ1dHRvbkNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcblxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzP3RoaXMucHJvcHMuc2V0dGluZ3MgOiBuZXcgQnV0dG9uQ29uZmlnKCk7XG4gICAgICAgIEFwcC5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tMaXN0ZW5lciA9IHRoaXMub25DbGlja0xpc3RlbmVyLmJpbmQodGhpcylcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiQnV0dG9uIC0gY29uc3RydWN0b3JcIik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJCdXR0b24gLSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIpO1xuICAgICAgICBBcHAuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJCdXR0b24gLSBjb21wb25lbnRXaWxsVW5tb3VudFwiKTtcbiAgICAgICAgIEFwcC5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3ModGhpcyk7XG4gICAgfVxuXG4gICAgLy8gYWxsb3dlIHJlbmRlciBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWQgd2l0aCBuZXcgaWNvbk1vZGUgdmFsdWVcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiQnV0dG9uIC0gc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmljb25Nb2RlICE9PSBuZXh0UHJvcHMuaWNvbk1vZGUpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DbGlja0xpc3RlbmVyKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2xpY2tlZC5zdGF0ZSA9ICF0aGlzLnNldHRpbmdzLmNsaWNrZWQuc3RhdGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMub25DbGljayl0aGlzLnByb3BzLm9uQ2xpY2soKVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJCdXR0b24gLSByZW5kZXJcIik7XG4gICAgICAgIHZhciBpY29uVUkgPSBcIlwiO1xuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnNldHRpbmdzLmljb25Pbmx5LnN0YXRlP1wiXCI6dGhpcy5zZXR0aW5ncy5sYWJlbC5zdGF0ZTtcblxuICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmdldEljb24oKTtcbiAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoPjApe1xuICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3MuaWNvblN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG4gICAgICAgICAgICBpY29uVUkgPSAgPGkgc3R5bGU9e2ljb25TdHlsZU9iamVjdH0gY2xhc3NOYW1lID0ge2ljb25OYW1lfT4gPC9pPlxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpO1xuXG4gICAgICAgIHZhciBidXR0b25VSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMub25DbGlja0xpc3RlbmVyfSBzdHlsZT17c3R5bGVPYmplY3R9PntpY29uVUl9e2xhYmVsfTwvc3Bhbj47XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnN0YXRlKXtcbiAgICAgICAgICAgIHZhciBjc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5DU1MuZ2V0Q1NTRm9yKCk7XG4gICAgICAgICAgICBidXR0b25VSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMub25DbGlja0xpc3RlbmVyfSBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2ljb25VSX17bGFiZWx9PC9zcGFuPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGJ1dHRvblVJKTtcbiAgICB9XG5cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LkJ1dHRvblwiLCBCdXR0b24sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbkFwcC5yZWdpc3RlclRvb2xDb25maWcoQnV0dG9uLEJ1dHRvbkNvbmZpZyk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LkJ1dHRvbkNvbmZpZ1wiLEJ1dHRvbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ==
