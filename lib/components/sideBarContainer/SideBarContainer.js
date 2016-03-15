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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXJDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPTTs7O0FBQ0YsYUFERSxnQkFDRixDQUFZLEtBQVosRUFBbUI7OEJBRGpCLGtCQUNpQjs7MkVBRGpCLDZCQUVRLFFBRFM7O0FBRWYsY0FBSyxRQUFMLEdBQWdCLE1BQU0sUUFBTixDQUZEO0FBR2Ysc0JBQUksb0NBQUosQ0FBeUMsTUFBSyxLQUFMLENBQVcsUUFBWCxFQUFvQixNQUFLLFFBQUwsQ0FBN0QsQ0FIZTtBQUlmLHNCQUFJLHlCQUFKLFFBSmU7QUFLZixjQUFLLFlBQUwsR0FBb0IsSUFBSSxZQUFKLEVBQXBCLENBTGU7QUFNZixZQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLGdDQUFaLEVBQWI7cUJBTmU7S0FBbkI7O2lCQURFOztrREFVd0IsV0FBVTtBQUNoQyxnQkFBRyxjQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSw4Q0FBWixFQUFiO0FBQ0EsMEJBQUkseUJBQUosQ0FBOEIsSUFBOUIsRUFBbUMsU0FBbkMsRUFGZ0M7Ozs7K0NBTWQ7QUFDbEIsZ0JBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVkseUNBQVosRUFBYjtBQUNBLDBCQUFJLDhCQUFKLENBQW1DLElBQW5DLEVBRmtCOzs7Ozs7OzhDQU1BLFdBQVU7QUFDNUIsZ0JBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksMENBQVosRUFBYjtBQUNBLG1CQUFPLEtBQVAsQ0FGNEI7Ozs7eUNBS2hCO0FBQ1osbUJBQVEsY0FBSSxjQUFKLENBQW1CLElBQW5CLEVBQXdCLEtBQUssWUFBTCxDQUFoQyxDQURZOzs7O2lDQUlQO0FBQ0osZ0JBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksMkJBQVosRUFBYjs7QUFFRCxnQkFBSSxhQUFhLEtBQUssY0FBTCxFQUFiLENBSEM7O0FBS0wsZ0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLEVBQWQsQ0FMQztBQU1MLG1CQUFTOztrQkFBSyxPQUFTLFdBQVQsRUFBTDtnQkFDRyxtREFBUyxVQUFVLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBbkIsQ0FESDtnQkFFRzs7O29CQUNJLG1EQUFTLFVBQVUsS0FBSyxRQUFMLENBQWMsVUFBZCxFQUFuQixDQURKO29CQUVLLFVBRkw7b0JBR0ksbURBQVMsVUFBVSxLQUFLLFFBQUwsQ0FBYyxhQUFkLEVBQW5CLENBSEo7aUJBRkg7Z0JBT0csbURBQVMsVUFBVSxLQUFLLFFBQUwsQ0FBYyxZQUFkLEVBQW5CLENBUEg7YUFBVCxDQU5LOzs7O1dBL0JQO0VBQXlCLGdCQUFNLFNBQU47O0FBa0QvQixpQkFBaUIsT0FBakI7QUFDQSxpQkFBaUIsT0FBakI7O0FBR0EsY0FBSSxrQkFBSixDQUF1QixnQkFBdkIsRUFBd0MsaUJBQXVCLFNBQXZCLENBQXhDO0FBQ0EsY0FBSSxrQkFBSixDQUF1QixpQkFBaUIsT0FBakIsRUFBeUIsaUJBQXVCLE9BQXZCLENBQWhEO0FBQ0EsY0FBSSxrQkFBSixDQUF1QixpQkFBaUIsT0FBakIsRUFBeUIsaUJBQXVCLE9BQXZCLENBQWhEOztBQUVBLGNBQUksMEJBQUosQ0FBK0IsNkNBQS9CLEVBQTZFLGdCQUE3RTtBQUNBLGNBQUksMEJBQUosQ0FBK0IsMkNBQS9CLEVBQTJFLGlCQUFpQixPQUFqQixDQUEzRTtBQUNBLGNBQUksMEJBQUosQ0FBK0IsMkNBQS9CLEVBQTJFLGlCQUFpQixPQUFqQixDQUEzRTs7QUFFQSxNQUFNLGFBQU4sQ0FBb0IsNkJBQXBCLEVBQW1ELGdCQUFuRCxFQUFvRSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBckU7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJTaWRlQmFyQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vdXRpbHMvQXBwJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheSc7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9TaWRlQmFyXCI7XG5pbXBvcnQgc2lkZUJhckNvbnRhaW5lckNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcblxuXG5jbGFzcyBTaWRlQmFyQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHByb3BzLnNldHRpbmdzO1xuICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIEFwcC5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlciA9IG5ldyBQcm9wc01hbmFnZXIoKTtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiU2lkZWJhckNvbnRhaW5lciAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiU2lkZWJhckNvbnRhaW5lciAtIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIik7XG4gICAgICAgIEFwcC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHRoaXMsbmV4dFByb3BzKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXJDb250YWluZXIgLSBjb21wb25lbnRXaWxsVW5tb3VudFwiKTtcbiAgICAgICAgQXBwLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsZWQgb25seSB3aGVuIFJlYWN0IFBhcmVudCByZW5kZXIgaXMgY2FsbGVkXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXJDb250YWluZXIgLSBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICByZXR1cm4gIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLHRoaXMucHJvcHNNYW5hZ2VyKTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiU2lkZWJhckNvbnRhaW5lciAtIHJlbmRlclwiKTtcblxuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgIHJldHVybiAoIDxkaXYgc3R5bGUgPSB7c3R5bGVPYmplY3R9PlxuICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5sZWZ0U2lkZUJhcn0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGVCYXIgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MudG9wU2lkZUJhcn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5ib3R0b21TaWRlQmFyfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5yaWdodFNpZGVCYXJ9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgIH1cbn1cblxuU2lkZUJhckNvbnRhaW5lci5PdmVybGF5ID0gT3ZlcmxheTtcblNpZGVCYXJDb250YWluZXIuU2lkZUJhciA9IFNpZGVCYXI7XG5cblxuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhTaWRlQmFyQ29udGFpbmVyLHNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoU2lkZUJhckNvbnRhaW5lci5PdmVybGF5LHNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheSk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKFNpZGVCYXJDb250YWluZXIuU2lkZUJhcixzaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXIpO1xuXG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyXCIsU2lkZUJhckNvbnRhaW5lcik7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheVwiLFNpZGVCYXJDb250YWluZXIuT3ZlcmxheSk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuU2lkZUJhclwiLFNpZGVCYXJDb250YWluZXIuU2lkZUJhcik7XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LlNpZGVCYXJDb250YWluZXJcIiwgU2lkZUJhckNvbnRhaW5lcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlQmFyQ29udGFpbmVyO1xuIl19
