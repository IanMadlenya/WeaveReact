"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_React$Component) {
    _inherits(Logo, _React$Component);

    function Logo(props) {
        _classCallCheck(this, Logo);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Logo).call(this, props));

        _ComponentManager2.default.initialize(_this);
        if (_this.props.src) //to-do in component manager check the settings prop is there if there set the state
            _this.settings.src.state = _this.props.src;
        return _this;
    }

    _createClass(Logo, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _ComponentManager2.default.componentWillReceiveProps(this, nextProps);
            if (this.props.src !== nextProps.src) {
                // user style added through UI is Sessioned
                this.settings.src.state = nextProps.src;
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _ComponentManager2.default.componentWillUnmount(this);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.dock !== nextProps.dock) {
                return true;
            } else if (this.props.position !== nextProps.position) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.settings.visible.value) return _react2.default.createElement("div", null);

            if (this.settings.src.state) {
                var styleObj = this.settings.style.getStyleFor();
                return _react2.default.createElement("img", { style: styleObj, src: this.settings.src.value });
            } else return _react2.default.createElement("div", null);
        }
    }]);

    return Logo;
}(_react2.default.Component);

Weave.registerClass("weavereact.navbar.Logo", Logo, [weavejs.api.core.ILinkableObject]);
exports.default = Logo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvZ28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUVGLGFBRkUsSUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE1BRWlCOzsyRUFGakIsaUJBR1EsUUFEUzs7QUFFZixtQ0FBaUIsVUFBakIsUUFGZTtBQUdmLFlBQUcsTUFBSyxLQUFMLENBQVcsR0FBWDtBQUNDLGtCQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLEdBQTJCLE1BQUssS0FBTCxDQUFXLEdBQVgsQ0FEL0I7cUJBSGU7S0FBbkI7O2lCQUZFOztrREFVd0IsV0FBVTtBQUNoQyx1Q0FBaUIseUJBQWpCLENBQTJDLElBQTNDLEVBQWdELFNBQWhELEVBRGdDO0FBRWhDLGdCQUFHLEtBQUssS0FBTCxDQUFXLEdBQVgsS0FBbUIsVUFBVSxHQUFWLEVBQWM7O0FBQ2hDLHFCQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLEdBQTBCLFVBQVUsR0FBVixDQURNO2FBQXBDOzs7OytDQUtvQjtBQUNwQix1Q0FBaUIsb0JBQWpCLENBQXNDLElBQXRDLEVBRG9COzs7OzhDQUlGLFdBQVU7QUFDNUIsZ0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixVQUFVLElBQVYsRUFBZTtBQUNsQyx1QkFBTyxJQUFQLENBRGtDO2FBQXRDLE1BRU0sSUFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUFtQjtBQUNoRCx1QkFBTyxJQUFQLENBRGdEO2FBQTlDLE1BRUQ7QUFDRCx1QkFBTyxLQUFQLENBREM7YUFGQzs7OztpQ0FRRDtBQUNMLGdCQUFHLENBQUMsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUNBLE9BQU8sMENBQVAsQ0FESjs7QUFHQSxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLEVBQXdCO0FBQ3ZCLG9CQUFJLFdBQVcsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixFQUFYLENBRG1CO0FBRXZCLHVCQUFPLHVDQUFLLE9BQU8sUUFBUCxFQUFpQixLQUFLLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsS0FBbEIsRUFBM0IsQ0FBUCxDQUZ1QjthQUEzQixNQUtJLE9BQU8sMENBQVAsQ0FMSjs7OztXQXBDRjtFQUFhLGdCQUFNLFNBQU47O0FBNENuQixNQUFNLGFBQU4sQ0FBb0Isd0JBQXBCLEVBQThDLElBQTlDLEVBQW1ELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFwRDtrQkFDZSIsImZpbGUiOiJMb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuY2xhc3MgTG9nbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuaW5pdGlhbGl6ZSh0aGlzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zcmMpLy90by1kbyBpbiBjb21wb25lbnQgbWFuYWdlciBjaGVjayB0aGUgc2V0dGluZ3MgcHJvcCBpcyB0aGVyZSBpZiB0aGVyZSBzZXQgdGhlIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNyYy5zdGF0ZSA9ICB0aGlzLnByb3BzLnNyYztcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHRoaXMsbmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zcmMgIT09IG5leHRQcm9wcy5zcmMpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc3JjLnN0YXRlID0gbmV4dFByb3BzLnNyYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jb21wb25lbnRXaWxsVW5tb3VudCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoIXRoaXMuc2V0dGluZ3MudmlzaWJsZS52YWx1ZSlcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5zcmMuc3RhdGUpe1xuICAgICAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3R5bGU9e3N0eWxlT2JqfSBzcmM9e3RoaXMuc2V0dGluZ3Muc3JjLnZhbHVlfS8+XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz5cbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTG9nb1wiLCBMb2dvLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiJdfQ==
