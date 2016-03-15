"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_React$Component) {
    _inherits(SideBar, _React$Component);

    function SideBar(props) {
        _classCallCheck(this, SideBar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SideBar).call(this, props));

        _this.settings = props.settings;
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _App2.default.addForceUpdateToCallbacks(_this);
        if (_App2.default.debug) console.log("Sidebar - constructor");
        return _this;
    }

    _createClass(SideBar, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (_App2.default.debug) console.log("Sidebar - componentWillReceiveProps");
            _App2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (_App2.default.debug) console.log("Sidebar - componentWillUnmount");
            _App2.default.removeForceUpdateFromCallbacks(this);
        }

        // allowe render only when React Parent render is called with new iconMode value

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (_App2.default.debug) console.log("Sidebar - shouldComponentUpdate");
            if (this.props.iconMode !== nextProps.iconMode) return true;else return false;
        }
    }, {
        key: "renderChildren",
        value: function renderChildren(childList) {
            var iconMode = false;
            if (!this.settings.open.state && this.settings.static.state) iconMode = true;
            this.settings.props.addChildProps("iconMode", iconMode);
            return _App2.default.renderChildren(this, childList);
        }
    }, {
        key: "render",
        value: function render() {
            if (_App2.default.debug) console.log("Sidebar - render");
            var ui = _react2.default.createElement("div", null);
            if (this.settings.enable.state) {
                var styleObject = this.settings.style.getStyleFor();
                var childrenUI = this.renderChildren();
                // need to consider in a mode where ony the button to bring them visible
                /*if(this.settings.open.state){
                    childrenUI = this.renderChildren();
                }else if(this.settings.static.state){
                    childrenUI = this.renderChildren(['switchButton']);
                }*/
                ui = _react2.default.createElement(
                    "div",
                    { style: styleObject },
                    childrenUI
                );
            }
            return ui;
        }
    }]);

    return SideBar;
}(_react2.default.Component);

Weave.registerClass("weavereact.sideBarContainer.SideBar", SideBar, [weavejs.api.core.ILinkableObject]);

exports.default = SideBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNGLGFBREUsT0FDRixDQUFZLEtBQVosRUFBbUI7OEJBRGpCLFNBQ2lCOzsyRUFEakIsb0JBRVEsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBTSxRQUFOLENBRkQ7QUFHZixzQkFBSSxvQ0FBSixDQUF5QyxNQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQW9CLE1BQUssUUFBTCxDQUE3RCxDQUhlO0FBSWYsc0JBQUkseUJBQUosUUFKZTtBQUtmLFlBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksdUJBQVosRUFBYjtxQkFMZTtLQUFuQjs7aUJBREU7O2tEQVN3QixXQUFVO0FBQ2hDLGdCQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLHFDQUFaLEVBQWI7QUFDQSwwQkFBSSx5QkFBSixDQUE4QixJQUE5QixFQUFtQyxTQUFuQyxFQUZnQzs7OzsrQ0FNZDtBQUNsQixnQkFBRyxjQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSxnQ0FBWixFQUFiO0FBQ0MsMEJBQUksOEJBQUosQ0FBbUMsSUFBbkMsRUFGaUI7Ozs7Ozs7OENBTUEsV0FBVTtBQUM1QixnQkFBRyxjQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSxpQ0FBWixFQUFiO0FBQ0EsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFDdkIsT0FBTyxJQUFQLENBREosS0FHSSxPQUFPLEtBQVAsQ0FISjs7Ozt1Q0FPVyxXQUFVO0FBQ3JCLGdCQUFJLFdBQVcsS0FBWCxDQURpQjtBQUVyQixnQkFBRyxDQUFDLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsSUFBNEIsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUMzQixXQUFXLElBQVgsQ0FETDtBQUVBLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLGFBQXBCLENBQWtDLFVBQWxDLEVBQTZDLFFBQTdDLEVBSnFCO0FBS3JCLG1CQUFRLGNBQUksY0FBSixDQUFtQixJQUFuQixFQUF3QixTQUF4QixDQUFSLENBTHFCOzs7O2lDQVNoQjtBQUNMLGdCQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLGtCQUFaLEVBQWI7QUFDQSxnQkFBSSxLQUFLLDBDQUFMLENBRkM7QUFHTCxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTJCO0FBQzFCLG9CQUFJLGNBQWUsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixFQUFmLENBRHNCO0FBRTFCLG9CQUFJLGFBQWEsS0FBSyxjQUFMLEVBQWI7Ozs7Ozs7QUFGc0Isa0JBUzFCLEdBQUs7O3NCQUFLLE9BQU8sV0FBUCxFQUFMO29CQUNPLFVBRFA7aUJBQUwsQ0FUMEI7YUFBOUI7QUFhQSxtQkFBUSxFQUFSLENBaEJLOzs7O1dBdkNQO0VBQWdCLGdCQUFNLFNBQU47O0FBMkR0QixNQUFNLGFBQU4sQ0FBb0IscUNBQXBCLEVBQTJELE9BQTNELEVBQW1FLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFwRTs7a0JBRWUiLCJmaWxlIjoiU2lkZUJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcblxuY2xhc3MgU2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBwcm9wcy5zZXR0aW5ncyA7XG4gICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgQXBwLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3ModGhpcyk7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXIgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXIgLSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIpO1xuICAgICAgICBBcHAuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJTaWRlYmFyIC0gY29tcG9uZW50V2lsbFVubW91bnRcIik7XG4gICAgICAgICBBcHAucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGFsbG93ZSByZW5kZXIgb25seSB3aGVuIFJlYWN0IFBhcmVudCByZW5kZXIgaXMgY2FsbGVkIHdpdGggbmV3IGljb25Nb2RlIHZhbHVlXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXIgLSBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuaWNvbk1vZGUgIT09IG5leHRQcm9wcy5pY29uTW9kZSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKGNoaWxkTGlzdCl7XG4gICAgICAgIHZhciBpY29uTW9kZSA9IGZhbHNlO1xuICAgICAgICBpZighdGhpcy5zZXR0aW5ncy5vcGVuLnN0YXRlICYmIHRoaXMuc2V0dGluZ3Muc3RhdGljLnN0YXRlKVxuICAgICAgICAgICAgIGljb25Nb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiaWNvbk1vZGVcIixpY29uTW9kZSk7XG4gICAgICAgIHJldHVybiAgQXBwLnJlbmRlckNoaWxkcmVuKHRoaXMsY2hpbGRMaXN0KTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiU2lkZWJhciAtIHJlbmRlclwiKTtcbiAgICAgICAgdmFyIHVpID0gPGRpdi8+O1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSAgdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIGNvbnNpZGVyIGluIGEgbW9kZSB3aGVyZSBvbnkgdGhlIGJ1dHRvbiB0byBicmluZyB0aGVtIHZpc2libGVcbiAgICAgICAgICAgIC8qaWYodGhpcy5zZXR0aW5ncy5vcGVuLnN0YXRlKXtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZXR0aW5ncy5zdGF0aWMuc3RhdGUpe1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKFsnc3dpdGNoQnV0dG9uJ10pO1xuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICB1aSA9IDxkaXYgc3R5bGU9e3N0eWxlT2JqZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodWkpO1xuICAgIH1cbn1cblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lci5TaWRlQmFyXCIsIFNpZGVCYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG5cbiJdfQ==
