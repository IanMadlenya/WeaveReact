'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require('../../ComponentManager');

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _SideBar = require('./SideBar');

var _SideBar2 = _interopRequireDefault(_SideBar);

var _Config = require('./Config');

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBarContainer = function (_React$Component) {
    _inherits(SideBarContainer, _React$Component);

    function SideBarContainer(props) {
        _classCallCheck(this, SideBarContainer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SideBarContainer).call(this, props));

        _ComponentManager2.default.initialize(_this, "container");
        return _this;
    }

    _createClass(SideBarContainer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            _ComponentManager2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ComponentManager2.default.componentWillUnmount(this);
        }

        // called only when React Parent render is called

    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (_ComponentManager2.default.debug) console.log("SidebarContainer - shouldComponentUpdate");
            return false;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            return _ComponentManager2.default.renderChildren(this);
        }
    }, {
        key: 'render',
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("SidebarContainer - render");

            var childrenUI = this.renderChildren();
            var leftSideBarUI = this.settings.leftSideBar.visible.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.leftSideBar }) : "";
            var rightSideBarUI = this.settings.rightSideBar.visible.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.rightSideBar }) : "";
            var topSideBarUI = this.settings.topSideBar.visible.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.topSideBar }) : "";
            var bottomSideBarUI = this.settings.bottomSideBar.visible.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.bottomSideBar }) : "";

            var styleObject = this.settings.style.getStyleFor();
            return _react2.default.createElement(
                'div',
                { style: styleObject },
                leftSideBarUI,
                _react2.default.createElement(
                    'div',
                    { style: { width: "100%", height: "100%" } },
                    topSideBarUI,
                    childrenUI,
                    bottomSideBarUI
                ),
                rightSideBarUI
            );
        }
    }]);

    return SideBarContainer;
}(_react2.default.Component);

SideBarContainer.Overlay = _Overlay2.default;
SideBarContainer.SideBar = _SideBar2.default;

_ComponentManager2.default.registerToolConfig(SideBarContainer, _Config2.default.Container);
_ComponentManager2.default.registerToolConfig(SideBarContainer.Overlay, _Config2.default.Overlay);
_ComponentManager2.default.registerToolConfig(SideBarContainer.SideBar, _Config2.default.SideBar);

_ComponentManager2.default.registerToolImplementation("weavereact.sideBarContainerConfig.Container", SideBarContainer);
_ComponentManager2.default.registerToolImplementation("weavereact.sideBarContainerConfig.Overlay", SideBarContainer.Overlay);
_ComponentManager2.default.registerToolImplementation("weavereact.sideBarContainerConfig.SideBar", SideBarContainer.SideBar);

Weave.registerClass("weavereact.SideBarContainer", SideBarContainer, [weavejs.api.core.ILinkableObject]);

module.exports = SideBarContainer;
//# sourceMappingURL=data:application/json;base64,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LElBQVosQ0FBaUIsZUFBakIsQ0FBckU7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJTaWRlQmFyQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4uLy4uL0NvbXBvbmVudE1hbmFnZXInO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5JztcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL1NpZGVCYXJcIjtcbmltcG9ydCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5cbmNsYXNzIFNpZGVCYXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmluaXRpYWxpemUodGhpcyxcImNvbnRhaW5lclwiKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNvbXBvbmVudFdpbGxVbm1vdW50KHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWRcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXJDb250YWluZXIgLSBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICByZXR1cm4gIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXJDb250YWluZXIgLSByZW5kZXJcIik7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgIHZhciBsZWZ0U2lkZUJhclVJID0gdGhpcy5zZXR0aW5ncy5sZWZ0U2lkZUJhci52aXNpYmxlLnN0YXRlPzxTaWRlQmFyIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLmxlZnRTaWRlQmFyfS8+OlwiXCI7XG4gICAgICAgIHZhciByaWdodFNpZGVCYXJVSSA9IHRoaXMuc2V0dGluZ3MucmlnaHRTaWRlQmFyLnZpc2libGUuc3RhdGU/PFNpZGVCYXIgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MucmlnaHRTaWRlQmFyfS8+OlwiXCI7XG4gICAgICAgIHZhciB0b3BTaWRlQmFyVUkgPSB0aGlzLnNldHRpbmdzLnRvcFNpZGVCYXIudmlzaWJsZS5zdGF0ZT88U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy50b3BTaWRlQmFyfS8+OlwiXCI7XG4gICAgICAgIHZhciBib3R0b21TaWRlQmFyVUkgPSB0aGlzLnNldHRpbmdzLmJvdHRvbVNpZGVCYXIudmlzaWJsZS5zdGF0ZT88U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5ib3R0b21TaWRlQmFyfS8+OlwiXCI7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICByZXR1cm4gKCA8ZGl2IHN0eWxlID0ge3N0eWxlT2JqZWN0fT5cbiAgICAgICAgICAgICAgICAgICAge2xlZnRTaWRlQmFyVUl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b3BTaWRlQmFyVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtib3R0b21TaWRlQmFyVUl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7cmlnaHRTaWRlQmFyVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICB9XG59XG5cblNpZGVCYXJDb250YWluZXIuT3ZlcmxheSA9IE92ZXJsYXk7XG5TaWRlQmFyQ29udGFpbmVyLlNpZGVCYXIgPSBTaWRlQmFyO1xuXG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKFNpZGVCYXJDb250YWluZXIsc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXIpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoU2lkZUJhckNvbnRhaW5lci5PdmVybGF5LHNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheSk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhTaWRlQmFyQ29udGFpbmVyLlNpZGVCYXIsc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyKTtcblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXJcIixTaWRlQmFyQ29udGFpbmVyKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheVwiLFNpZGVCYXJDb250YWluZXIuT3ZlcmxheSk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXJcIixTaWRlQmFyQ29udGFpbmVyLlNpZGVCYXIpO1xuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5TaWRlQmFyQ29udGFpbmVyXCIsIFNpZGVCYXJDb250YWluZXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZUJhckNvbnRhaW5lcjtcbiJdfQ==
