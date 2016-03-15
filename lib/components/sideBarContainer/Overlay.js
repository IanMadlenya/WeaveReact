'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_React$Component) {
    _inherits(Overlay, _React$Component);

    function Overlay(props) {
        _classCallCheck(this, Overlay);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).call(this, props));

        _this.settings = _this.props.settings;
        App.addForceUpdateToCallbacks(_this);

        return _this;
    }

    _createClass(Overlay, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            App.removeForceUpdateFromCallbacks(this);
        }
    }, {
        key: 'render',
        value: function render() {
            var styleObject = this.settings.style.getStyleFor();
            return _react2.default.createElement('div', { style: styleObject });
        }
    }]);

    return Overlay;
}(_react2.default.Component);

module.exports = Overlay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk92ZXJsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDRixhQURFLE9BQ0YsQ0FBWSxLQUFaLEVBQW1COzhCQURqQixTQUNpQjs7MkVBRGpCLG9CQUVRLFFBRFM7O0FBRWYsY0FBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQVgsQ0FGRDtBQUdmLFlBQUkseUJBQUosUUFIZTs7O0tBQW5COztpQkFERTs7K0NBUXFCO0FBQ2xCLGdCQUFJLDhCQUFKLENBQW1DLElBQW5DLEVBRGtCOzs7O2lDQUlkO0FBQ0wsZ0JBQUksY0FBZSxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLEVBQWYsQ0FEQztBQUVMLG1CQUFTLHVDQUFNLE9BQVMsV0FBVCxFQUFOLENBQVQsQ0FGSzs7OztXQVpQO0VBQWdCLGdCQUFNLFNBQU47O0FBbUJ0QixPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiT3ZlcmxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE92ZXJsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgQXBwLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3ModGhpcyk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgIEFwcC5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3ModGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSAgdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICByZXR1cm4gKCA8ZGl2ICBzdHlsZSA9IHtzdHlsZU9iamVjdH0gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3ZlcmxheTtcbiJdfQ==
