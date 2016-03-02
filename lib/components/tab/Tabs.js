"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new TabsConfig();
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _this.addCallbacks = _this.addCallbacks.bind(_this);
        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
        _this.propsManager = new PropsManager();

        return _this;
    }

    _createClass(Tabs, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                if (nextProps.settings) {
                    this.removeCallbacks();
                    this.settings = nextProps.settings;
                    this.addCallbacks();
                }
            }
            if (this.props.style !== nextProps.style) {
                // user style added through UI is Sessioned
                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
            }
            if (this.props.children !== nextProps.children) {
                _App2.default.hookSessionStateForComponentChildren(nextProps.children, this.settings);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {}
    }, {
        key: "render",
        value: function render() {

            var styleObject = this.settings.style.getStyleFor();

            return _react2.default.createElement(
                "div",
                { style: styleObject },
                _react2.default.createElement(TabNav, { settings: this.props.settings, clickCallback: this.props.clickCallback, titles: this.props.titles }),
                _react2.default.createElement(
                    TabChildren,
                    { settings: this.props.settings, toolClass: this.props.toolClass, toolProps: this.props.toolProps },
                    this.props.children
                )
            );
        }
    }]);

    return Tabs;
}(_react2.default.Component);

weavereact.registerToolImplementation("admindesk.TabComponentConfig", TabComponent);

exports.default = TabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1NOzs7QUFFRixhQUZFLElBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixNQUVpQjs7MkVBRmpCLGlCQUdRLFFBRFM7O0FBRWYsY0FBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQixJQUFJLFVBQUosRUFBMUMsQ0FGRDtBQUdmLHNCQUFJLG9DQUFKLENBQXlDLE1BQUssS0FBTCxDQUFXLFFBQVgsRUFBb0IsTUFBSyxRQUFMLENBQTdELENBSGU7QUFJZixjQUFLLFlBQUwsR0FBb0IsTUFBSyxZQUFMLENBQWtCLElBQWxCLE9BQXBCLENBSmU7QUFLZixjQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCLENBTGU7QUFNZixjQUFLLFlBQUwsR0FBcUIsSUFBSSxZQUFKLEVBQXJCLENBTmU7OztLQUFuQjs7aUJBRkU7O2tEQVl3QixXQUFVO0FBQ2hDLGdCQUFHLEtBQUssS0FBTCxDQUFXLFFBQVgsS0FBd0IsVUFBVSxRQUFWLEVBQW1CO0FBQzFDLG9CQUFHLFVBQVUsUUFBVixFQUFtQjtBQUNsQix5QkFBSyxlQUFMLEdBRGtCO0FBRWxCLHlCQUFLLFFBQUwsR0FBZ0IsVUFBVSxRQUFWLENBRkU7QUFHbEIseUJBQUssWUFBTCxHQUhrQjtpQkFBdEI7YUFESjtBQU9BLGdCQUFHLEtBQUssS0FBTCxDQUFXLEtBQVgsS0FBcUIsVUFBVSxLQUFWLEVBQWdCOztBQUNwQyxvQkFBRyxVQUFVLEtBQVYsRUFBZ0IsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixVQUFwQixDQUErQixLQUEvQixHQUF1QyxVQUFVLEtBQVYsQ0FBMUQ7YUFESjtBQUdBLGdCQUFHLEtBQUssS0FBTCxDQUFXLFFBQVgsS0FBd0IsVUFBVSxRQUFWLEVBQW1CO0FBQzFDLDhCQUFJLG9DQUFKLENBQXlDLFVBQVUsUUFBVixFQUFtQixLQUFLLFFBQUwsQ0FBNUQsQ0FEMEM7YUFBOUM7Ozs7NENBTWU7OzsrQ0FJRzs7O2lDQU9iOztBQUVULGdCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixFQUFkLENBRks7O0FBS1QsbUJBQVE7O2tCQUFLLE9BQU8sV0FBUCxFQUFMO2dCQUNJLDhCQUFDLE1BQUQsSUFBUSxVQUFVLEtBQUssS0FBTCxDQUFXLFFBQVgsRUFBcUIsZUFBZSxLQUFLLEtBQUwsQ0FBVyxhQUFYLEVBQTBCLFFBQVEsS0FBSyxLQUFMLENBQVcsTUFBWCxFQUF4RixDQURKO2dCQUVJO0FBQUMsK0JBQUQ7c0JBQWEsVUFBVSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXNCLFdBQVcsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUFzQixXQUFXLEtBQUssS0FBTCxDQUFXLFNBQVgsRUFBekY7b0JBQ0ssS0FBSyxLQUFMLENBQVcsUUFBWDtpQkFIVDthQUFSLENBTFM7Ozs7V0F4Q1A7RUFBYSxnQkFBTSxTQUFOOztBQXVEbkIsV0FBVywwQkFBWCxDQUFzQyw4QkFBdEMsRUFBcUUsWUFBckU7O2tCQUVlIiwiZmlsZSI6IlRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcblxuXG5cbmNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFRhYnNDb25maWcoKTtcbiAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcyA9IHRoaXMuYWRkQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzID0gdGhpcy5yZW1vdmVDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIgPSAgbmV3IFByb3BzTWFuYWdlcigpXG4gICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc3R5bGUpdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbil7XG4gICAgICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuXG4gICAgcmVuZGVyKCkge1xuICAgIFxuICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICBcblxuICAgIHJldHVybiAoPGRpdiBzdHlsZT17c3R5bGVPYmplY3R9PlxuICAgICAgICAgICAgICAgIDxUYWJOYXYgc2V0dGluZ3M9e3RoaXMucHJvcHMuc2V0dGluZ3N9IGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30gdGl0bGVzPXt0aGlzLnByb3BzLnRpdGxlc30vPlxuICAgICAgICAgICAgICAgIDxUYWJDaGlsZHJlbiBzZXR0aW5ncz17dGhpcy5wcm9wcy5zZXR0aW5nc30gIHRvb2xDbGFzcz17dGhpcy5wcm9wcy50b29sQ2xhc3N9IHRvb2xQcm9wcz17dGhpcy5wcm9wcy50b29sUHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L1RhYkNoaWxkcmVuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53ZWF2ZXJlYWN0LnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwiYWRtaW5kZXNrLlRhYkNvbXBvbmVudENvbmZpZ1wiLFRhYkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYkNvbXBvbmVudDsiXX0=
