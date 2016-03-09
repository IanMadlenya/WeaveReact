"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

var _PropsManager = require("../PropsManager");

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_React$Component) {
    _inherits(Accordion, _React$Component);

    function Accordion(props) {
        _classCallCheck(this, Accordion);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).call(this, props));

        _this.settings = _this.props.settings;
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _App2.default.addForceUpdateToCallbacks(_this);
        _this.propsManager = new _PropsManager2.default();
        if (_App2.default.debug) console.log("Accordion - constructor");
        return _this;
    }

    _createClass(Accordion, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (_App2.default.debug) console.log("Accordion - componentWillReceiveProps");
            _App2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (_App2.default.debug) console.log("Accordion - componentWillUnmount");
            _App2.default.removeForceUpdateFromCallbacks(this);
        }

        // called only when React Parent render is called

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (_App2.default.debug) console.log("Accordion - shouldComponentUpdate");
            return false;
        }
    }, {
        key: "onClickCallback",
        value: function onClickCallback(childConfig, index) {
            console.log(childConfig, index);
            this.settings.activeChild.state = index;
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            var activeChildStyle = this.settings.activeChildStyle.getStyleFor();
            var childStyle = this.settings.childStyle.getStyleFor();

            this.propsManager.addKeyProps("index");
            this.propsManager.addNewProps("open", false);
            this.propsManager.updateStyle(childStyle);
            this.propsManager.addOddChild(this.settings.activeChild.state, { style: activeChildStyle, open: true }, true);
            this.propsManager.addEvent("onClick", this.onClickCallback);
            return _App2.default.renderChildren(this, this.propsManager);
        }
    }, {
        key: "render",
        value: function render() {
            if (_App2.default.debug) console.log("Accordion - render");

            var styleObject = this.settings.style.getStyleFor(null, true);
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
}(_react2.default.Component);

Weave.registerClass("weavereact.Accordion", Accordion, [weavejs.api.core.ILinkableObject]);
exports.default = Accordion;
//# sourceMappingURL=data:application/json;base64,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QUFRLEVBQVIsQ0FkSzs7OztXQTlDUDtFQUFrQixnQkFBTSxTQUFOOztBQWdFeEIsTUFBTSxhQUFOLENBQW9CLHNCQUFwQixFQUE0QyxTQUE1QyxFQUFzRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkQ7a0JBQ2UiLCJmaWxlIjoiQWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IFByb3BzTWFuYWdlciBmcm9tIFwiLi4vUHJvcHNNYW5hZ2VyXCI7XG5cblxuY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICBBcHAuYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIgPSBuZXcgUHJvcHNNYW5hZ2VyKCk7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkFjY29yZGlvbiAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiQWNjb3JkaW9uIC0gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiKTtcbiAgICAgICAgQXBwLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModGhpcyxuZXh0UHJvcHMpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiQWNjb3JkaW9uIC0gY29tcG9uZW50V2lsbFVubW91bnRcIik7XG4gICAgICAgICBBcHAucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWRcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiQWNjb3JkaW9uIC0gc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIG9uQ2xpY2tDYWxsYmFjayhjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoaWxkQ29uZmlnLGluZGV4KTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVDaGlsZC5zdGF0ZSA9IGluZGV4O1xuICAgIH1cbiAgICBcbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICB2YXIgYWN0aXZlQ2hpbGRTdHlsZSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlQ2hpbGRTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICB2YXIgY2hpbGRTdHlsZSA9IHRoaXMuc2V0dGluZ3MuY2hpbGRTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkS2V5UHJvcHMoXCJpbmRleFwiKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJvcGVuXCIsZmFsc2UpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci51cGRhdGVTdHlsZShjaGlsZFN0eWxlKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkT2RkQ2hpbGQodGhpcy5zZXR0aW5ncy5hY3RpdmVDaGlsZC5zdGF0ZSx7c3R5bGU6YWN0aXZlQ2hpbGRTdHlsZSxvcGVuOnRydWV9LHRydWUpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGRFdmVudChcIm9uQ2xpY2tcIix0aGlzLm9uQ2xpY2tDYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAgQXBwLnJlbmRlckNoaWxkcmVuKHRoaXMsdGhpcy5wcm9wc01hbmFnZXIpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJBY2NvcmRpb24gLSByZW5kZXJcIik7XG4gICAgICAgIFxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICBcbiAgICAgICAgdmFyIHVpID0gPGRpdiBzdHlsZT17c3R5bGVPYmplY3R9PntjaGlsZHJlblVJfTwvZGl2PjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1Muc3RhdGUpe1xuICAgICAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgICAgIHVpID0gPGRpdiBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2NoaWxkcmVuVUl9PC9kaXY+O1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAodWkpO1xuICAgIH1cblxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuQWNjb3JkaW9uXCIsIEFjY29yZGlvbixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiJdfQ==
