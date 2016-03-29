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
            this.settings.props.addChildProps("reverseLayout", this.settings.reverseLayout.state);
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
//# sourceMappingURL=data:application/json;base64,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ZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFjY29yZGlvbkNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcblxuXG5jbGFzcyBBY2NvcmRpb24gZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZXRJY29uTW9kZUxheW91dCh0aGlzLnByb3BzLmljb25Nb2RlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2V0SWNvbk1vZGVMYXlvdXQobmV4dFByb3BzLmljb25Nb2RlKTtcbiAgICB9XG5cblxuXG4gICAgb25DbGlja0NhbGxiYWNrKGNoaWxkQ29uZmlnLGluZGV4KXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVDaGlsZC5zdGF0ZSA9IGluZGV4O1xuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHZhciBhY3RpdmVDaGlsZFN0eWxlID0gdGhpcy5zZXR0aW5ncy5hY3RpdmVDaGlsZFN0eWxlLnN0YXRlO1xuICAgICAgICB2YXIgY2hpbGRTdHlsZSA9IHRoaXMuc2V0dGluZ3MuY2hpbGRTdHlsZS5zdGF0ZTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkRXZlbnQoXCJvbkNsaWNrXCIsdGhpcy5vbkNsaWNrQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJvcGVuXCIsZmFsc2UsdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInN0eWxlXCIsY2hpbGRTdHlsZSxhY3RpdmVDaGlsZFN0eWxlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiaWNvbk1vZGVcIix0aGlzLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwicmV2ZXJzZUxheW91dFwiLHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMua2V5UHJvcCA9IFwiaW5kZXhcIjtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRPZGRDaGlsZHJlbihbdGhpcy5zZXR0aW5ncy5hY3RpdmVDaGlsZC5zdGF0ZV0pO1xuXG4gICAgICAgIHJldHVybiAgQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIkFjY29yZGlvbiAtIHJlbmRlclwiKTtcblxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLnN0YXRlO1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgICAgICB2YXIgdWkgPSA8ZGl2IHN0eWxlPXtzdHlsZU9iamVjdH0+e2NoaWxkcmVuVUl9PC9kaXY+O1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICAgICAgdWkgPSA8ZGl2IGNsYXNzTmFtZT17Y3NzTmFtZX0gc3R5bGU9e3N0eWxlT2JqZWN0fT57Y2hpbGRyZW5VSX08L2Rpdj47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHVpKTtcbiAgICB9XG5cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LkFjY29yZGlvblwiLCBBY2NvcmRpb24sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKEFjY29yZGlvbixBY2NvcmRpb25Db25maWcpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuQWNjb3JkaW9uQ29uZmlnXCIsQWNjb3JkaW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIl19
