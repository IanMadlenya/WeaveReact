'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
            var leftSideBarUI = this.settings.leftSideBar.visible.state ? React.createElement(_SideBar2.default, { settings: this.settings.leftSideBar }) : "";
            var rightSideBarUI = this.settings.rightSideBar.visible.state ? React.createElement(_SideBar2.default, { settings: this.settings.rightSideBar }) : "";
            var topSideBarUI = this.settings.topSideBar.visible.state ? React.createElement(_SideBar2.default, { settings: this.settings.topSideBar }) : "";
            var bottomSideBarUI = this.settings.bottomSideBar.visible.state ? React.createElement(_SideBar2.default, { settings: this.settings.bottomSideBar }) : "";

            var styleObject = this.settings.style.state;
            return React.createElement(
                'div',
                { style: styleObject },
                leftSideBarUI,
                React.createElement(
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXJDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPTTs7O0FBQ0YsYUFERSxnQkFDRixDQUFZLEtBQVosRUFBbUI7OEJBRGpCLGtCQUNpQjs7c0VBRGpCLDZCQUVRLE9BQU0sY0FERztLQUFuQjs7aUJBREU7O3lDQVFjO0FBQ1osbUJBQVEsMkJBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQVIsQ0FEWTs7OztpQ0FJUDtBQUNKLGdCQUFHLDJCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSwyQkFBWixFQUExQjs7QUFFRCxnQkFBSSxhQUFhLEtBQUssY0FBTCxFQUFiLENBSEM7QUFJTCxnQkFBSSxnQkFBZ0IsS0FBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixPQUExQixDQUFrQyxLQUFsQyxHQUF3Qyx5Q0FBUyxVQUFVLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBbkIsQ0FBeEMsR0FBd0YsRUFBeEYsQ0FKZjtBQUtMLGdCQUFJLGlCQUFpQixLQUFLLFFBQUwsQ0FBYyxZQUFkLENBQTJCLE9BQTNCLENBQW1DLEtBQW5DLEdBQXlDLHlDQUFTLFVBQVUsS0FBSyxRQUFMLENBQWMsWUFBZCxFQUFuQixDQUF6QyxHQUEwRixFQUExRixDQUxoQjtBQU1MLGdCQUFJLGVBQWUsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixPQUF6QixDQUFpQyxLQUFqQyxHQUF1Qyx5Q0FBUyxVQUFVLEtBQUssUUFBTCxDQUFjLFVBQWQsRUFBbkIsQ0FBdkMsR0FBc0YsRUFBdEYsQ0FOZDtBQU9MLGdCQUFJLGtCQUFrQixLQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLE9BQTVCLENBQW9DLEtBQXBDLEdBQTBDLHlDQUFTLFVBQVUsS0FBSyxRQUFMLENBQWMsYUFBZCxFQUFuQixDQUExQyxHQUE0RixFQUE1RixDQVBqQjs7QUFTTCxnQkFBSSxjQUFjLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FUYjtBQVVMLG1CQUFTOztrQkFBSyxPQUFTLFdBQVQsRUFBTDtnQkFDSSxhQURKO2dCQUVHOztzQkFBSyxPQUFPLEVBQUMsT0FBTSxNQUFOLEVBQWEsUUFBTyxNQUFQLEVBQXJCLEVBQUw7b0JBQ0ssWUFETDtvQkFFSyxVQUZMO29CQUdLLGVBSEw7aUJBRkg7Z0JBT0ksY0FQSjthQUFULENBVks7Ozs7V0FaUDs7O0FBbUNOLGlCQUFpQixPQUFqQjtBQUNBLGlCQUFpQixPQUFqQjs7QUFHQSwyQkFBaUIsa0JBQWpCLENBQW9DLGdCQUFwQyxFQUFxRCxpQkFBdUIsU0FBdkIsQ0FBckQ7QUFDQSwyQkFBaUIsa0JBQWpCLENBQW9DLGlCQUFpQixPQUFqQixFQUF5QixpQkFBdUIsT0FBdkIsQ0FBN0Q7QUFDQSwyQkFBaUIsa0JBQWpCLENBQW9DLGlCQUFpQixPQUFqQixFQUF5QixpQkFBdUIsT0FBdkIsQ0FBN0Q7O0FBRUEsMkJBQWlCLDBCQUFqQixDQUE0Qyw2Q0FBNUMsRUFBMEYsZ0JBQTFGO0FBQ0EsMkJBQWlCLDBCQUFqQixDQUE0QywyQ0FBNUMsRUFBd0YsaUJBQWlCLE9BQWpCLENBQXhGO0FBQ0EsMkJBQWlCLDBCQUFqQixDQUE0QywyQ0FBNUMsRUFBd0YsaUJBQWlCLE9BQWpCLENBQXhGOztBQUVBLE1BQU0sYUFBTixDQUFvQiw2QkFBcEIsRUFBbUQsZ0JBQW5ELEVBQW9FLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFyRTs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6IlNpZGVCYXJDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuLi8uLi9Db21wb25lbnRNYW5hZ2VyJztcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tICcuLi8uLi9BYnN0cmFjdENvbXBvbmVudCc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL092ZXJsYXknO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZUJhclwiO1xuaW1wb3J0IHNpZGVCYXJDb250YWluZXJDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XG5cblxuY2xhc3MgU2lkZUJhckNvbnRhaW5lciBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyxcImNvbnRhaW5lclwiKVxuICAgIH1cblxuXG4gICAgXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICByZXR1cm4gIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXJDb250YWluZXIgLSByZW5kZXJcIik7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgIHZhciBsZWZ0U2lkZUJhclVJID0gdGhpcy5zZXR0aW5ncy5sZWZ0U2lkZUJhci52aXNpYmxlLnN0YXRlPzxTaWRlQmFyIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLmxlZnRTaWRlQmFyfS8+OlwiXCI7XG4gICAgICAgIHZhciByaWdodFNpZGVCYXJVSSA9IHRoaXMuc2V0dGluZ3MucmlnaHRTaWRlQmFyLnZpc2libGUuc3RhdGU/PFNpZGVCYXIgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MucmlnaHRTaWRlQmFyfS8+OlwiXCI7XG4gICAgICAgIHZhciB0b3BTaWRlQmFyVUkgPSB0aGlzLnNldHRpbmdzLnRvcFNpZGVCYXIudmlzaWJsZS5zdGF0ZT88U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy50b3BTaWRlQmFyfS8+OlwiXCI7XG4gICAgICAgIHZhciBib3R0b21TaWRlQmFyVUkgPSB0aGlzLnNldHRpbmdzLmJvdHRvbVNpZGVCYXIudmlzaWJsZS5zdGF0ZT88U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5ib3R0b21TaWRlQmFyfS8+OlwiXCI7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgcmV0dXJuICggPGRpdiBzdHlsZSA9IHtzdHlsZU9iamVjdH0+XG4gICAgICAgICAgICAgICAgICAgIHtsZWZ0U2lkZUJhclVJfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9wU2lkZUJhclVJfVxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym90dG9tU2lkZUJhclVJfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3JpZ2h0U2lkZUJhclVJfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxufVxuXG5TaWRlQmFyQ29udGFpbmVyLk92ZXJsYXkgPSBPdmVybGF5O1xuU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyID0gU2lkZUJhcjtcblxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhTaWRlQmFyQ29udGFpbmVyLHNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKFNpZGVCYXJDb250YWluZXIuT3ZlcmxheSxzaWRlQmFyQ29udGFpbmVyQ29uZmlnLk92ZXJsYXkpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyLHNpZGVCYXJDb250YWluZXJDb25maWcuU2lkZUJhcik7XG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyXCIsU2lkZUJhckNvbnRhaW5lcik7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLk92ZXJsYXlcIixTaWRlQmFyQ29udGFpbmVyLk92ZXJsYXkpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyXCIsU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuU2lkZUJhckNvbnRhaW5lclwiLCBTaWRlQmFyQ29udGFpbmVyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVCYXJDb250YWluZXI7XG4iXX0=
