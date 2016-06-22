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

Weave.registerClass(Accordion, ["weavereact.Accordion"], [weavejs.api.core.ILinkableObject], "Accordion");

_ComponentManager2.default.registerToolConfig(Accordion, _Config2.default);
_ComponentManager2.default.registerToolImplementation("weavereact.AccordionConfig", Accordion);

exports.default = Accordion;
//# sourceMappingURL=data:application/json;base64,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OztrQkFFZSIsImZpbGUiOiJBY2NvcmRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBY2NvcmRpb25Db25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5cblxuY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2V0SWNvbk1vZGVMYXlvdXQodGhpcy5wcm9wcy5pY29uTW9kZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNldEljb25Nb2RlTGF5b3V0KG5leHRQcm9wcy5pY29uTW9kZSk7XG4gICAgfVxuXG5cblxuICAgIG9uQ2xpY2tDYWxsYmFjayhjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlQ2hpbGQuc3RhdGUgPSBpbmRleDtcbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICB2YXIgYWN0aXZlQ2hpbGRTdHlsZSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlQ2hpbGRTdHlsZS5zdGF0ZTtcbiAgICAgICAgdmFyIGNoaWxkU3R5bGUgPSB0aGlzLnNldHRpbmdzLmNoaWxkU3R5bGUuc3RhdGU7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZEV2ZW50KFwib25DbGlja1wiLHRoaXMub25DbGlja0NhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwib3BlblwiLGZhbHNlLHRydWUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJzdHlsZVwiLGNoaWxkU3R5bGUsYWN0aXZlQ2hpbGRTdHlsZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImljb25Nb2RlXCIsdGhpcy5zZXR0aW5ncy5pY29uTW9kZS5zdGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInJldmVyc2VMYXlvdXRcIix0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmtleVByb3AgPSBcImluZGV4XCI7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkT2RkQ2hpbGRyZW4oW3RoaXMuc2V0dGluZ3MuYWN0aXZlQ2hpbGQuc3RhdGVdKTtcblxuICAgICAgICByZXR1cm4gIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJBY2NvcmRpb24gLSByZW5kZXJcIik7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgdmFyIHVpID0gPGRpdiBzdHlsZT17c3R5bGVPYmplY3R9PntjaGlsZHJlblVJfTwvZGl2PjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1Muc3RhdGUpe1xuICAgICAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgICAgIHVpID0gPGRpdiBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2NoaWxkcmVuVUl9PC9kaXY+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh1aSk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBBY2NvcmRpb24sW1wid2VhdmVyZWFjdC5BY2NvcmRpb25cIl0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSwgXCJBY2NvcmRpb25cIik7XG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKEFjY29yZGlvbixBY2NvcmRpb25Db25maWcpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuQWNjb3JkaW9uQ29uZmlnXCIsQWNjb3JkaW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIl19