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

var _Config = require("./Config");

var _Config2 = _interopRequireDefault(_Config);

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_AbstractComponent) {
    _inherits(Accordion, _AbstractComponent);

    function Accordion(props) {
        _classCallCheck(this, Accordion);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).call(this, props));

        _this.settings.setIconModeLayout(_this.props.iconMode);
        return _this;
    }

    _createClass(Accordion, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _get(Object.getPrototypeOf(Accordion.prototype), "componentWillReceiveProps", this).call(this, nextProps);
            this.settings.setIconModeLayout(nextProps.iconMode);
        }
    }, {
        key: "onClickCallback",
        value: function onClickCallback(childConfig, index) {
            this.settings.activeChild.state = index;
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            var activeChildStyle = this.settings.activeChildStyle.state;
            var childStyle = this.settings.childStyle.state;

            this.settings.props.addChildEvent("onClick", this.onClickCallback);
            this.settings.props.addChildProps("open", false, true);
            this.settings.props.addChildProps("style", childStyle, activeChildStyle);
            this.settings.props.addChildProps("iconMode", this.settings.iconMode.state);
            this.settings.props.keyProp = "index";
            this.settings.props.addOddChildren([this.settings.activeChild.state]);

            return _ComponentManager2.default.renderChildren(this);
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Accordion - render");

            var styleObject = this.settings.style.state;
            var childrenUI = this.renderChildren();

            var ui = _react2.default.createElement(
                "div",
                { style: styleObject },
                childrenUI
            );
            if (this.settings.useCSS.state) {
                var cssName = this.settings.CSS.getCSSFor();
                ui = _react2.default.createElement(
                    "div",
                    { className: cssName, style: styleObject },
                    childrenUI
                );
            }

            return ui;
        }
    }]);

    return Accordion;
}(_AbstractComponent3.default);

Weave.registerClass("weavereact.Accordion", Accordion, [weavejs.api.core.ILinkableObject]);

_ComponentManager2.default.registerToolConfig(Accordion, _Config2.default);
_ComponentManager2.default.registerToolImplementation("weavereact.AccordionConfig", Accordion);

exports.default = Accordion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07OztBQUVGLGFBRkUsU0FFRixDQUFZLEtBQVosRUFBa0I7OEJBRmhCLFdBRWdCOzsyRUFGaEIsc0JBR1EsUUFEUTs7QUFFZCxjQUFLLFFBQUwsQ0FBYyxpQkFBZCxDQUFnQyxNQUFLLEtBQUwsQ0FBVyxRQUFYLENBQWhDLENBRmM7O0tBQWxCOztpQkFGRTs7a0RBT3dCLFdBQVU7QUFDL0IsdUNBUkgsb0VBUW1DLFVBQWhDLENBRCtCO0FBRWhDLGlCQUFLLFFBQUwsQ0FBYyxpQkFBZCxDQUFnQyxVQUFVLFFBQVYsQ0FBaEMsQ0FGZ0M7Ozs7d0NBT3BCLGFBQVksT0FBTTtBQUM5QixpQkFBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixLQUExQixHQUFrQyxLQUFsQyxDQUQ4Qjs7Ozt5Q0FJbEI7QUFDWixnQkFBSSxtQkFBbUIsS0FBSyxRQUFMLENBQWMsZ0JBQWQsQ0FBK0IsS0FBL0IsQ0FEWDtBQUVaLGdCQUFJLGFBQWEsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixLQUF6QixDQUZMOztBQUlaLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLGFBQXBCLENBQWtDLFNBQWxDLEVBQTRDLEtBQUssZUFBTCxDQUE1QyxDQUpZO0FBS1osaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsYUFBcEIsQ0FBa0MsTUFBbEMsRUFBeUMsS0FBekMsRUFBK0MsSUFBL0MsRUFMWTtBQU1aLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLGFBQXBCLENBQWtDLE9BQWxDLEVBQTBDLFVBQTFDLEVBQXFELGdCQUFyRCxFQU5ZO0FBT1osaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsYUFBcEIsQ0FBa0MsVUFBbEMsRUFBNkMsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixDQUE3QyxDQVBZO0FBUVosaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsT0FBcEIsR0FBOEIsT0FBOUIsQ0FSWTtBQVNaLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLGNBQXBCLENBQW1DLENBQUMsS0FBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixLQUExQixDQUFwQyxFQVRZOztBQVdaLG1CQUFRLDJCQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFSLENBWFk7Ozs7aUNBZVA7QUFDTCxnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksb0JBQVosRUFBMUI7O0FBRUEsZ0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLENBSGI7QUFJTCxnQkFBSSxhQUFhLEtBQUssY0FBTCxFQUFiLENBSkM7O0FBTUwsZ0JBQUksS0FBSzs7a0JBQUssT0FBTyxXQUFQLEVBQUw7Z0JBQTBCLFVBQTFCO2FBQUwsQ0FOQztBQU9MLGdCQUFHLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsRUFBMkI7QUFDMUIsb0JBQUksVUFBVSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQVYsQ0FEc0I7QUFFMUIscUJBQUs7O3NCQUFLLFdBQVcsT0FBWCxFQUFvQixPQUFPLFdBQVAsRUFBekI7b0JBQThDLFVBQTlDO2lCQUFMLENBRjBCO2FBQTlCOztBQUtBLG1CQUFRLEVBQVIsQ0FaSzs7OztXQWpDUDs7O0FBaUROLE1BQU0sYUFBTixDQUFvQixzQkFBcEIsRUFBNEMsU0FBNUMsRUFBc0QsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXZEOztBQUVBLDJCQUFpQixrQkFBakIsQ0FBb0MsU0FBcEM7QUFDQSwyQkFBaUIsMEJBQWpCLENBQTRDLDRCQUE1QyxFQUF5RSxTQUF6RTs7a0JBRWUiLCJmaWxlIjoiQWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWNjb3JkaW9uQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuXG5cbmNsYXNzIEFjY29yZGlvbiBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNldEljb25Nb2RlTGF5b3V0KHRoaXMucHJvcHMuaWNvbk1vZGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZXRJY29uTW9kZUxheW91dChuZXh0UHJvcHMuaWNvbk1vZGUpO1xuICAgIH1cblxuXG5cbiAgICBvbkNsaWNrQ2FsbGJhY2soY2hpbGRDb25maWcsaW5kZXgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZUNoaWxkLnN0YXRlID0gaW5kZXg7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdmFyIGFjdGl2ZUNoaWxkU3R5bGUgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZUNoaWxkU3R5bGUuc3RhdGU7XG4gICAgICAgIHZhciBjaGlsZFN0eWxlID0gdGhpcy5zZXR0aW5ncy5jaGlsZFN0eWxlLnN0YXRlO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRFdmVudChcIm9uQ2xpY2tcIix0aGlzLm9uQ2xpY2tDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9wZW5cIixmYWxzZSx0cnVlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwic3R5bGVcIixjaGlsZFN0eWxlLGFjdGl2ZUNoaWxkU3R5bGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJpY29uTW9kZVwiLHRoaXMuc2V0dGluZ3MuaWNvbk1vZGUuc3RhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmtleVByb3AgPSBcImluZGV4XCI7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkT2RkQ2hpbGRyZW4oW3RoaXMuc2V0dGluZ3MuYWN0aXZlQ2hpbGQuc3RhdGVdKTtcblxuICAgICAgICByZXR1cm4gIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJBY2NvcmRpb24gLSByZW5kZXJcIik7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgdmFyIHVpID0gPGRpdiBzdHlsZT17c3R5bGVPYmplY3R9PntjaGlsZHJlblVJfTwvZGl2PjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1Muc3RhdGUpe1xuICAgICAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgICAgIHVpID0gPGRpdiBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2NoaWxkcmVuVUl9PC9kaXY+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh1aSk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5BY2NvcmRpb25cIiwgQWNjb3JkaW9uLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhBY2NvcmRpb24sQWNjb3JkaW9uQ29uZmlnKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LkFjY29yZGlvbkNvbmZpZ1wiLEFjY29yZGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiJdfQ==
