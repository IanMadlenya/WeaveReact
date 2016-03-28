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

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_AbstractComponent) {
    _inherits(Logo, _AbstractComponent);

    function Logo(props) {
        _classCallCheck(this, Logo);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Logo).call(this, props));

        if (_this.props.src) //to-do in component manager check the settings prop is there if there set the state
            _this.settings.src.state = _this.props.src;
        return _this;
    }

    _createClass(Logo, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _get(Object.getPrototypeOf(Logo.prototype), "componentWillReceiveProps", this).call(this, nextProps);
            if (this.props.src !== nextProps.src) {
                // user style added through UI is Sessioned
                this.settings.src.state = nextProps.src;
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            _get(Object.getPrototypeOf(Logo.prototype), "shouldComponentUpdate", this).call(this, nextProps);
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
            if (_ComponentManager2.default.debug) console.log("Logo - render");
            if (!this.settings.visible.value) return _react2.default.createElement("div", null);

            if (this.settings.src.state) {
                var styleObj = this.settings.style.state;
                return _react2.default.createElement("img", { style: styleObj, src: this.settings.src.value });
            } else return _react2.default.createElement("div", null);
        }
    }]);

    return Logo;
}(_AbstractComponent3.default);

Weave.registerClass("weavereact.navbar.Logo", Logo, [weavejs.api.core.ILinkableObject]);
exports.default = Logo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvZ28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUVGLGFBRkUsSUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE1BRWlCOzsyRUFGakIsaUJBR1EsUUFEUzs7QUFFZixZQUFHLE1BQUssS0FBTCxDQUFXLEdBQVg7QUFDQyxrQkFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQixHQUEyQixNQUFLLEtBQUwsQ0FBVyxHQUFYLENBRC9CO3FCQUZlO0tBQW5COztpQkFGRTs7a0RBU3dCLFdBQVU7QUFDaEMsdUNBVkYsK0RBVWtDLFVBQWhDLENBRGdDO0FBRWhDLGdCQUFHLEtBQUssS0FBTCxDQUFXLEdBQVgsS0FBbUIsVUFBVSxHQUFWLEVBQWM7O0FBQ2hDLHFCQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLEdBQTBCLFVBQVUsR0FBVixDQURNO2FBQXBDOzs7OzhDQU1rQixXQUFVO0FBQzVCLHVDQWxCRiwyREFrQjhCLFVBQTVCLENBRDRCO0FBRTVCLGdCQUFHLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsVUFBVSxJQUFWLEVBQWU7QUFDbEMsdUJBQU8sSUFBUCxDQURrQzthQUF0QyxNQUVNLElBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFBbUI7QUFDaEQsdUJBQU8sSUFBUCxDQURnRDthQUE5QyxNQUVEO0FBQ0QsdUJBQU8sS0FBUCxDQURDO2FBRkM7Ozs7aUNBUUQ7QUFDTCxnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksZUFBWixFQUExQjtBQUNBLGdCQUFHLENBQUMsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUNBLE9BQU8sMENBQVAsQ0FESjs7QUFHQSxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLEVBQXdCO0FBQ3ZCLG9CQUFJLFdBQVcsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQURRO0FBRXZCLHVCQUFPLHVDQUFLLE9BQU8sUUFBUCxFQUFpQixLQUFLLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsS0FBbEIsRUFBM0IsQ0FBUCxDQUZ1QjthQUEzQixNQUtJLE9BQU8sMENBQVAsQ0FMSjs7OztXQWxDRjs7O0FBMENOLE1BQU0sYUFBTixDQUFvQix3QkFBcEIsRUFBOEMsSUFBOUMsRUFBbUQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXBEO2tCQUNlIiwiZmlsZSI6IkxvZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcblxuY2xhc3MgTG9nbyBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zcmMpLy90by1kbyBpbiBjb21wb25lbnQgbWFuYWdlciBjaGVjayB0aGUgc2V0dGluZ3MgcHJvcCBpcyB0aGVyZSBpZiB0aGVyZSBzZXQgdGhlIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNyYy5zdGF0ZSA9ICB0aGlzLnByb3BzLnNyYztcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLnNyYyAhPT0gbmV4dFByb3BzLnNyYyl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zcmMuc3RhdGUgPSBuZXh0UHJvcHMuc3JjO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jayAhPT0gbmV4dFByb3BzLmRvY2spe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJMb2dvIC0gcmVuZGVyXCIpO1xuICAgICAgICBpZighdGhpcy5zZXR0aW5ncy52aXNpYmxlLnZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnNyYy5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgc3R5bGVPYmogPSB0aGlzLnNldHRpbmdzLnN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3R5bGU9e3N0eWxlT2JqfSBzcmM9e3RoaXMuc2V0dGluZ3Muc3JjLnZhbHVlfS8+XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPlxuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5Mb2dvXCIsIExvZ28sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuIl19
