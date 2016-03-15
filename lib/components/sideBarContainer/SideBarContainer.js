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
        _this.propsManager = new PropsManager();
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
            return _App2.default.renderChildren(this, this.propsManager);
        }
    }, {
        key: 'render',
        value: function render() {
            if (_App2.default.debug) console.log("SidebarContainer - render");

            var childrenUI = this.renderChildren();

            var styleObject = this.settings.style.getStyleFor();
            return _react2.default.createElement(
                'div',
                { style: styleObject },
                _react2.default.createElement(_SideBar2.default, { settings: this.settings.leftSideBar }),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_SideBar2.default, { settings: this.settings.topSideBar }),
                    childrenUI,
                    _react2.default.createElement(_SideBar2.default, { settings: this.settings.bottomSideBar })
                ),
                _react2.default.createElement(_SideBar2.default, { settings: this.settings.rightSideBar })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXJDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPTTs7O0FBQ0YsYUFERSxnQkFDRixDQUFZLEtBQVosRUFBbUI7OEJBRGpCLGtCQUNpQjs7MkVBRGpCLDZCQUVRLFFBRFM7O0FBRWYsY0FBSyxRQUFMLEdBQWdCLE1BQU0sUUFBTixDQUZEO0FBR2Ysc0JBQUksb0NBQUosQ0FBeUMsTUFBSyxLQUFMLENBQVcsUUFBWCxFQUFvQixNQUFLLFFBQUwsQ0FBN0QsQ0FIZTtBQUlmLHNCQUFJLHlCQUFKLFFBSmU7QUFLZixjQUFLLFlBQUwsR0FBb0IsSUFBSSxZQUFKLEVBQXBCLENBTGU7QUFNZixZQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLGdDQUFaLEVBQWI7cUJBTmU7S0FBbkI7O2lCQURFOztrREFVd0IsV0FBVTtBQUNoQyxnQkFBRyxjQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSw4Q0FBWixFQUFiO0FBQ0EsMEJBQUkseUJBQUosQ0FBOEIsSUFBOUIsRUFBbUMsU0FBbkMsRUFGZ0M7Ozs7K0NBTWQ7QUFDbEIsZ0JBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVkseUNBQVosRUFBYjtBQUNBLDBCQUFJLDhCQUFKLENBQW1DLElBQW5DLEVBRmtCOzs7Ozs7OzhDQU1BLFdBQVU7QUFDNUIsZ0JBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksMENBQVosRUFBYjtBQUNBLG1CQUFPLEtBQVAsQ0FGNEI7Ozs7eUNBS2hCO0FBQ1osbUJBQVEsY0FBSSxjQUFKLENBQW1CLElBQW5CLEVBQXdCLEtBQUssWUFBTCxDQUFoQyxDQURZOzs7O2lDQUlQO0FBQ0osZ0JBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksMkJBQVosRUFBYjs7QUFFRCxnQkFBSSxhQUFhLEtBQUssY0FBTCxFQUFiLENBSEM7O0FBS0wsZ0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLEVBQWQsQ0FMQztBQU1MLG1CQUFTOztrQkFBSyxPQUFTLFdBQVQsRUFBTDtnQkFDRyxtREFBUyxVQUFVLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBbkIsQ0FESDtnQkFFRzs7O29CQUNJLG1EQUFTLFVBQVUsS0FBSyxRQUFMLENBQWMsVUFBZCxFQUFuQixDQURKO29CQUVLLFVBRkw7b0JBR0ksbURBQVMsVUFBVSxLQUFLLFFBQUwsQ0FBYyxhQUFkLEVBQW5CLENBSEo7aUJBRkg7Z0JBT0csbURBQVMsVUFBVSxLQUFLLFFBQUwsQ0FBYyxZQUFkLEVBQW5CLENBUEg7YUFBVCxDQU5LOzs7O1dBL0JQO0VBQXlCLGdCQUFNLFNBQU47O0FBa0QvQixpQkFBaUIsT0FBakI7QUFDQSxpQkFBaUIsT0FBakI7O0FBR0EsY0FBSSxrQkFBSixDQUF1QixnQkFBdkIsRUFBd0MsaUJBQXVCLFNBQXZCLENBQXhDO0FBQ0EsY0FBSSxrQkFBSixDQUF1QixpQkFBaUIsT0FBakIsRUFBeUIsaUJBQXVCLE9BQXZCLENBQWhEO0FBQ0EsY0FBSSxrQkFBSixDQUF1QixpQkFBaUIsT0FBakIsRUFBeUIsaUJBQXVCLE9BQXZCLENBQWhEOztBQUVBLGNBQUksMEJBQUosQ0FBK0IsNkNBQS9CLEVBQTZFLGdCQUE3RTtBQUNBLGNBQUksMEJBQUosQ0FBK0IsMkNBQS9CLEVBQTJFLGlCQUFpQixPQUFqQixDQUEzRTtBQUNBLGNBQUksMEJBQUosQ0FBK0IsMkNBQS9CLEVBQTJFLGlCQUFpQixPQUFqQixDQUEzRTs7QUFFQSxNQUFNLGFBQU4sQ0FBb0IsNkJBQXBCLEVBQW1ELGdCQUFuRCxFQUFvRSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBckU7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJTaWRlQmFyQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vdXRpbHMvQXBwJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheSc7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9TaWRlQmFyXCI7XG5pbXBvcnQgc2lkZUJhckNvbnRhaW5lckNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcblxuXG5jbGFzcyBTaWRlQmFyQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHByb3BzLnNldHRpbmdzO1xuICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIEFwcC5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlciA9IG5ldyBQcm9wc01hbmFnZXIoKTtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiU2lkZWJhckNvbnRhaW5lciAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiU2lkZWJhckNvbnRhaW5lciAtIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIik7XG4gICAgICAgIEFwcC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHRoaXMsbmV4dFByb3BzKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXJDb250YWluZXIgLSBjb21wb25lbnRXaWxsVW5tb3VudFwiKTtcbiAgICAgICAgQXBwLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgb25seSB3aGVuIFJlYWN0IFBhcmVudCByZW5kZXIgaXMgY2FsbGVkXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXJDb250YWluZXIgLSBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICByZXR1cm4gIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLHRoaXMucHJvcHNNYW5hZ2VyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJTaWRlYmFyQ29udGFpbmVyIC0gcmVuZGVyXCIpO1xuXG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgcmV0dXJuICggPGRpdiBzdHlsZSA9IHtzdHlsZU9iamVjdH0+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLmxlZnRTaWRlQmFyfS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy50b3BTaWRlQmFyfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLmJvdHRvbVNpZGVCYXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnJpZ2h0U2lkZUJhcn0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxufVxuXG5TaWRlQmFyQ29udGFpbmVyLk92ZXJsYXkgPSBPdmVybGF5O1xuU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyID0gU2lkZUJhcjtcblxuXG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKFNpZGVCYXJDb250YWluZXIsc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXIpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhTaWRlQmFyQ29udGFpbmVyLk92ZXJsYXksc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5KTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyLHNpZGVCYXJDb250YWluZXJDb25maWcuU2lkZUJhcik7XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXJcIixTaWRlQmFyQ29udGFpbmVyKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5XCIsU2lkZUJhckNvbnRhaW5lci5PdmVybGF5KTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyXCIsU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuU2lkZUJhckNvbnRhaW5lclwiLCBTaWRlQmFyQ29udGFpbmVyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVCYXJDb250YWluZXI7XG4iXX0=
