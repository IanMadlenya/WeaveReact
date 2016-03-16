'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../../utils/App');

var _App2 = _interopRequireDefault(_App);

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

        _this.settings = props.settings;
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _App2.default.addForceUpdateToCallbacks(_this);
        if (_App2.default.debug) console.log("SidebarContainer - constructor");
        return _this;
    }

    _createClass(SideBarContainer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (_App2.default.debug) console.log("SidebarContainer - componentWillReceiveProps");
            _App2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (_App2.default.debug) console.log("SidebarContainer - componentWillUnmount");
            _App2.default.removeForceUpdateFromCallbacks(this);
        }

        // called only when React Parent render is called

    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (_App2.default.debug) console.log("SidebarContainer - shouldComponentUpdate");
            return false;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            return _App2.default.renderChildren(this);
        }
    }, {
        key: 'render',
        value: function render() {
            if (_App2.default.debug) console.log("SidebarContainer - render");

            var childrenUI = this.renderChildren();
            var leftSideBarUI = this.settings.leftSideBar.enable.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.leftSideBar }) : "";
            var rightSideBarUI = this.settings.rightSideBar.enable.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.rightSideBar }) : "";
            var topSideBarUI = this.settings.topSideBar.enable.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.topSideBar }) : "";
            var bottomSideBarUI = this.settings.bottomSideBar.enable.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.bottomSideBar }) : "";

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

_App2.default.registerToolConfig(SideBarContainer, _Config2.default.Container);
_App2.default.registerToolConfig(SideBarContainer.Overlay, _Config2.default.Overlay);
_App2.default.registerToolConfig(SideBarContainer.SideBar, _Config2.default.SideBar);

_App2.default.registerToolImplementation("weavereact.sideBarContainerConfig.Container", SideBarContainer);
_App2.default.registerToolImplementation("weavereact.sideBarContainerConfig.Overlay", SideBarContainer.Overlay);
_App2.default.registerToolImplementation("weavereact.sideBarContainerConfig.SideBar", SideBarContainer.SideBar);

Weave.registerClass("weavereact.SideBarContainer", SideBarContainer, [weavejs.api.core.ILinkableObject]);

module.exports = SideBarContainer;
//# sourceMappingURL=data:application/json;base64,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O0FBRUEsY0FBSSwwQkFBSixDQUErQiw2Q0FBL0IsRUFBNkUsZ0JBQTdFO0FBQ0EsY0FBSSwwQkFBSixDQUErQiwyQ0FBL0IsRUFBMkUsaUJBQWlCLE9BQWpCLENBQTNFO0FBQ0EsY0FBSSwwQkFBSixDQUErQiwyQ0FBL0IsRUFBMkUsaUJBQWlCLE9BQWpCLENBQTNFOztBQUVBLE1BQU0sYUFBTixDQUFvQiw2QkFBcEIsRUFBbUQsZ0JBQW5ELEVBQW9FLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFyRTs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6IlNpZGVCYXJDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi91dGlscy9BcHAnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5JztcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL1NpZGVCYXJcIjtcbmltcG9ydCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5cbmNsYXNzIFNpZGVCYXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnNldHRpbmdzID0gcHJvcHMuc2V0dGluZ3M7XG4gICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgQXBwLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3ModGhpcyk7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXJDb250YWluZXIgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXJDb250YWluZXIgLSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIpO1xuICAgICAgICBBcHAuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJTaWRlYmFyQ29udGFpbmVyIC0gY29tcG9uZW50V2lsbFVubW91bnRcIik7XG4gICAgICAgIEFwcC5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3ModGhpcyk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIG9ubHkgd2hlbiBSZWFjdCBQYXJlbnQgcmVuZGVyIGlzIGNhbGxlZFxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJTaWRlYmFyQ29udGFpbmVyIC0gc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgcmV0dXJuICBBcHAucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiU2lkZWJhckNvbnRhaW5lciAtIHJlbmRlclwiKTtcblxuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgICAgdmFyIGxlZnRTaWRlQmFyVUkgPSB0aGlzLnNldHRpbmdzLmxlZnRTaWRlQmFyLmVuYWJsZS5zdGF0ZT88U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5sZWZ0U2lkZUJhcn0vPjpcIlwiO1xuICAgICAgICB2YXIgcmlnaHRTaWRlQmFyVUkgPSB0aGlzLnNldHRpbmdzLnJpZ2h0U2lkZUJhci5lbmFibGUuc3RhdGU/PFNpZGVCYXIgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MucmlnaHRTaWRlQmFyfS8+OlwiXCI7XG4gICAgICAgIHZhciB0b3BTaWRlQmFyVUkgPSB0aGlzLnNldHRpbmdzLnRvcFNpZGVCYXIuZW5hYmxlLnN0YXRlPzxTaWRlQmFyIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnRvcFNpZGVCYXJ9Lz46XCJcIjtcbiAgICAgICAgdmFyIGJvdHRvbVNpZGVCYXJVSSA9IHRoaXMuc2V0dGluZ3MuYm90dG9tU2lkZUJhci5lbmFibGUuc3RhdGU/PFNpZGVCYXIgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MuYm90dG9tU2lkZUJhcn0vPjpcIlwiO1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgcmV0dXJuICggPGRpdiBzdHlsZSA9IHtzdHlsZU9iamVjdH0+XG4gICAgICAgICAgICAgICAgICAgIHtsZWZ0U2lkZUJhclVJfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9wU2lkZUJhclVJfVxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym90dG9tU2lkZUJhclVJfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3JpZ2h0U2lkZUJhclVJfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxufVxuXG5TaWRlQmFyQ29udGFpbmVyLk92ZXJsYXkgPSBPdmVybGF5O1xuU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyID0gU2lkZUJhcjtcblxuXG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKFNpZGVCYXJDb250YWluZXIsc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXIpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhTaWRlQmFyQ29udGFpbmVyLk92ZXJsYXksc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5KTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyLHNpZGVCYXJDb250YWluZXJDb25maWcuU2lkZUJhcik7XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXJcIixTaWRlQmFyQ29udGFpbmVyKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5XCIsU2lkZUJhckNvbnRhaW5lci5PdmVybGF5KTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyXCIsU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuU2lkZUJhckNvbnRhaW5lclwiLCBTaWRlQmFyQ29udGFpbmVyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVCYXJDb250YWluZXI7XG4iXX0=
