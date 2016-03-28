'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require('../../ComponentManager');

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent2 = require('../../AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

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

var SideBarContainer = function (_AbstractComponent) {
    _inherits(SideBarContainer, _AbstractComponent);

    function SideBarContainer(props) {
        _classCallCheck(this, SideBarContainer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SideBarContainer).call(this, props, "container"));
    }

    _createClass(SideBarContainer, [{
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

            var styleObject = this.settings.style.state;
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
}(_AbstractComponent3.default);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXJDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUU07OztBQUNGLGFBREUsZ0JBQ0YsQ0FBWSxLQUFaLEVBQW1COzhCQURqQixrQkFDaUI7O3NFQURqQiw2QkFFUSxPQUFNLGNBREc7S0FBbkI7O2lCQURFOzt5Q0FRYztBQUNaLG1CQUFRLDJCQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFSLENBRFk7Ozs7aUNBSVA7QUFDSixnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksMkJBQVosRUFBMUI7O0FBRUQsZ0JBQUksYUFBYSxLQUFLLGNBQUwsRUFBYixDQUhDO0FBSUwsZ0JBQUksZ0JBQWdCLEtBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsT0FBMUIsQ0FBa0MsS0FBbEMsR0FBd0MsbURBQVMsVUFBVSxLQUFLLFFBQUwsQ0FBYyxXQUFkLEVBQW5CLENBQXhDLEdBQXdGLEVBQXhGLENBSmY7QUFLTCxnQkFBSSxpQkFBaUIsS0FBSyxRQUFMLENBQWMsWUFBZCxDQUEyQixPQUEzQixDQUFtQyxLQUFuQyxHQUF5QyxtREFBUyxVQUFVLEtBQUssUUFBTCxDQUFjLFlBQWQsRUFBbkIsQ0FBekMsR0FBMEYsRUFBMUYsQ0FMaEI7QUFNTCxnQkFBSSxlQUFlLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsT0FBekIsQ0FBaUMsS0FBakMsR0FBdUMsbURBQVMsVUFBVSxLQUFLLFFBQUwsQ0FBYyxVQUFkLEVBQW5CLENBQXZDLEdBQXNGLEVBQXRGLENBTmQ7QUFPTCxnQkFBSSxrQkFBa0IsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixPQUE1QixDQUFvQyxLQUFwQyxHQUEwQyxtREFBUyxVQUFVLEtBQUssUUFBTCxDQUFjLGFBQWQsRUFBbkIsQ0FBMUMsR0FBNEYsRUFBNUYsQ0FQakI7O0FBU0wsZ0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLENBVGI7QUFVTCxtQkFBUzs7a0JBQUssT0FBUyxXQUFULEVBQUw7Z0JBQ0ksYUFESjtnQkFFRzs7c0JBQUssT0FBTyxFQUFDLE9BQU0sTUFBTixFQUFhLFFBQU8sTUFBUCxFQUFyQixFQUFMO29CQUNLLFlBREw7b0JBRUssVUFGTDtvQkFHSyxlQUhMO2lCQUZIO2dCQU9JLGNBUEo7YUFBVCxDQVZLOzs7O1dBWlA7OztBQW1DTixpQkFBaUIsT0FBakI7QUFDQSxpQkFBaUIsT0FBakI7O0FBR0EsMkJBQWlCLGtCQUFqQixDQUFvQyxnQkFBcEMsRUFBcUQsaUJBQXVCLFNBQXZCLENBQXJEO0FBQ0EsMkJBQWlCLGtCQUFqQixDQUFvQyxpQkFBaUIsT0FBakIsRUFBeUIsaUJBQXVCLE9BQXZCLENBQTdEO0FBQ0EsMkJBQWlCLGtCQUFqQixDQUFvQyxpQkFBaUIsT0FBakIsRUFBeUIsaUJBQXVCLE9BQXZCLENBQTdEOztBQUVBLDJCQUFpQiwwQkFBakIsQ0FBNEMsNkNBQTVDLEVBQTBGLGdCQUExRjtBQUNBLDJCQUFpQiwwQkFBakIsQ0FBNEMsMkNBQTVDLEVBQXdGLGlCQUFpQixPQUFqQixDQUF4RjtBQUNBLDJCQUFpQiwwQkFBakIsQ0FBNEMsMkNBQTVDLEVBQXdGLGlCQUFpQixPQUFqQixDQUF4Rjs7QUFFQSxNQUFNLGFBQU4sQ0FBb0IsNkJBQXBCLEVBQW1ELGdCQUFuRCxFQUFvRSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBckU7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJTaWRlQmFyQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4uLy4uL0NvbXBvbmVudE1hbmFnZXInO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gJy4uLy4uL0Fic3RyYWN0Q29tcG9uZW50JztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheSc7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9TaWRlQmFyXCI7XG5pbXBvcnQgc2lkZUJhckNvbnRhaW5lckNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcblxuXG5jbGFzcyBTaWRlQmFyQ29udGFpbmVyIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzLFwiY29udGFpbmVyXCIpXG4gICAgfVxuXG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgcmV0dXJuICBDb21wb25lbnRNYW5hZ2VyLnJlbmRlckNoaWxkcmVuKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJTaWRlYmFyQ29udGFpbmVyIC0gcmVuZGVyXCIpO1xuXG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICB2YXIgbGVmdFNpZGVCYXJVSSA9IHRoaXMuc2V0dGluZ3MubGVmdFNpZGVCYXIudmlzaWJsZS5zdGF0ZT88U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5sZWZ0U2lkZUJhcn0vPjpcIlwiO1xuICAgICAgICB2YXIgcmlnaHRTaWRlQmFyVUkgPSB0aGlzLnNldHRpbmdzLnJpZ2h0U2lkZUJhci52aXNpYmxlLnN0YXRlPzxTaWRlQmFyIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnJpZ2h0U2lkZUJhcn0vPjpcIlwiO1xuICAgICAgICB2YXIgdG9wU2lkZUJhclVJID0gdGhpcy5zZXR0aW5ncy50b3BTaWRlQmFyLnZpc2libGUuc3RhdGU/PFNpZGVCYXIgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MudG9wU2lkZUJhcn0vPjpcIlwiO1xuICAgICAgICB2YXIgYm90dG9tU2lkZUJhclVJID0gdGhpcy5zZXR0aW5ncy5ib3R0b21TaWRlQmFyLnZpc2libGUuc3RhdGU/PFNpZGVCYXIgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MuYm90dG9tU2lkZUJhcn0vPjpcIlwiO1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuc3RhdGU7XG4gICAgICAgIHJldHVybiAoIDxkaXYgc3R5bGUgPSB7c3R5bGVPYmplY3R9PlxuICAgICAgICAgICAgICAgICAgICB7bGVmdFNpZGVCYXJVSX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RvcFNpZGVCYXJVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAge2JvdHRvbVNpZGVCYXJVSX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtyaWdodFNpZGVCYXJVSX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgIH1cbn1cblxuU2lkZUJhckNvbnRhaW5lci5PdmVybGF5ID0gT3ZlcmxheTtcblNpZGVCYXJDb250YWluZXIuU2lkZUJhciA9IFNpZGVCYXI7XG5cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoU2lkZUJhckNvbnRhaW5lcixzaWRlQmFyQ29udGFpbmVyQ29uZmlnLkNvbnRhaW5lcik7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhTaWRlQmFyQ29udGFpbmVyLk92ZXJsYXksc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5KTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKFNpZGVCYXJDb250YWluZXIuU2lkZUJhcixzaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXIpO1xuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLkNvbnRhaW5lclwiLFNpZGVCYXJDb250YWluZXIpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5XCIsU2lkZUJhckNvbnRhaW5lci5PdmVybGF5KTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuU2lkZUJhclwiLFNpZGVCYXJDb250YWluZXIuU2lkZUJhcik7XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LlNpZGVCYXJDb250YWluZXJcIiwgU2lkZUJhckNvbnRhaW5lcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlQmFyQ29udGFpbmVyO1xuIl19
