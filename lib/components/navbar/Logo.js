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

Weave.registerClass(Logo, ["weavereact.navbar.Logo"], [weavejs.api.core.ILinkableObject], 'Navbar Logo');
exports.default = Logo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvZ28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUVGLGFBRkUsSUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE1BRWlCOzsyRUFGakIsaUJBR1EsUUFEUzs7QUFFZixZQUFHLE1BQUssS0FBTCxDQUFXLEdBQVg7QUFDQyxrQkFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQixHQUEyQixNQUFLLEtBQUwsQ0FBVyxHQUFYLENBRC9CO3FCQUZlO0tBQW5COztpQkFGRTs7a0RBU3dCLFdBQVU7QUFDaEMsdUNBVkYsK0RBVWtDLFVBQWhDLENBRGdDO0FBRWhDLGdCQUFHLEtBQUssS0FBTCxDQUFXLEdBQVgsS0FBbUIsVUFBVSxHQUFWLEVBQWM7O0FBQ2hDLHFCQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLEdBQTBCLFVBQVUsR0FBVixDQURNO2FBQXBDOzs7OzhDQU1rQixXQUFVO0FBQzVCLHVDQWxCRiwyREFrQjhCLFVBQTVCLENBRDRCO0FBRTVCLGdCQUFHLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsVUFBVSxJQUFWLEVBQWU7QUFDbEMsdUJBQU8sSUFBUCxDQURrQzthQUF0QyxNQUVNLElBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFBbUI7QUFDaEQsdUJBQU8sSUFBUCxDQURnRDthQUE5QyxNQUVEO0FBQ0QsdUJBQU8sS0FBUCxDQURDO2FBRkM7Ozs7aUNBUUQ7QUFDTCxnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksZUFBWixFQUExQjtBQUNBLGdCQUFHLENBQUMsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUNBLE9BQU8sMENBQVAsQ0FESjs7QUFHQSxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLEVBQXdCO0FBQ3ZCLG9CQUFJLFdBQVcsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQURRO0FBRXZCLHVCQUFPLHVDQUFLLE9BQU8sUUFBUCxFQUFpQixLQUFLLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsS0FBbEIsRUFBM0IsQ0FBUCxDQUZ1QjthQUEzQixNQUtJLE9BQU8sMENBQVAsQ0FMSjs7OztXQWxDRjs7O0FBMENOLE1BQU0sYUFBTixDQUFxQixJQUFyQixFQUEwQixDQUFDLHdCQUFELENBQTFCLEVBQXFELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUF0RCxFQUF3RixhQUF4RjtrQkFDZSIsImZpbGUiOiJMb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5cbmNsYXNzIExvZ28gZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3JjKS8vdG8tZG8gaW4gY29tcG9uZW50IG1hbmFnZXIgY2hlY2sgdGhlIHNldHRpbmdzIHByb3AgaXMgdGhlcmUgaWYgdGhlcmUgc2V0IHRoZSBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zcmMuc3RhdGUgPSAgdGhpcy5wcm9wcy5zcmM7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zcmMgIT09IG5leHRQcm9wcy5zcmMpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc3JjLnN0YXRlID0gbmV4dFByb3BzLnNyYztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiTG9nbyAtIHJlbmRlclwiKTtcbiAgICAgICAgaWYoIXRoaXMuc2V0dGluZ3MudmlzaWJsZS52YWx1ZSlcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5zcmMuc3RhdGUpe1xuICAgICAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHN0eWxlPXtzdHlsZU9ian0gc3JjPXt0aGlzLnNldHRpbmdzLnNyYy52YWx1ZX0vPlxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz5cbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBMb2dvLFtcIndlYXZlcmVhY3QubmF2YmFyLkxvZ29cIl0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSwnTmF2YmFyIExvZ28nKTtcbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iXX0=