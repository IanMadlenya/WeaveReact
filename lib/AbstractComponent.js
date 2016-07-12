"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("./ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractComponent = function (_React$Component) {
    _inherits(AbstractComponent, _React$Component);

    function AbstractComponent(props, type) {
        _classCallCheck(this, AbstractComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractComponent).call(this, props));

        _ComponentManager2.default.initialize(_this, type);
        return _this;
    }

    _createClass(AbstractComponent, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _ComponentManager2.default.componentWillUnmount(this);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _ComponentManager2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return _ComponentManager2.default.shouldComponentUpdate(this, nextProps, nextState);
        }
    }]);

    return AbstractComponent;
}(_react2.default.Component);

exports.default = AbstractComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFic3RyYWN0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNOzs7QUFFRixhQUZFLGlCQUVGLENBQVksS0FBWixFQUFrQixJQUFsQixFQUF1Qjs4QkFGckIsbUJBRXFCOzsyRUFGckIsOEJBR1EsUUFEYTs7QUFFbkIsbUNBQWlCLFVBQWpCLFFBQWlDLElBQWpDLEVBRm1COztLQUF2Qjs7aUJBRkU7OytDQU9vQjtBQUNsQix1Q0FBaUIsb0JBQWpCLENBQXNDLElBQXRDLEVBRGtCOzs7O2tEQUlJLFdBQVU7QUFDaEMsdUNBQWlCLHlCQUFqQixDQUEyQyxJQUEzQyxFQUFnRCxTQUFoRCxFQURnQzs7Ozs4Q0FJZCxXQUFXLFdBQVU7QUFDdkMsbUJBQU8sMkJBQWlCLHFCQUFqQixDQUF1QyxJQUF2QyxFQUE2QyxTQUE3QyxFQUF3RCxTQUF4RCxDQUFQLENBRHVDOzs7O1dBZnpDO0VBQTBCLGdCQUFNLFNBQU47O2tCQXNCakIiLCJmaWxlIjoiQWJzdHJhY3RDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5cbmNsYXNzIEFic3RyYWN0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLHR5cGUpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuaW5pdGlhbGl6ZSh0aGlzLHR5cGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY29tcG9uZW50V2lsbFVubW91bnQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModGhpcyxuZXh0UHJvcHMpO1xuICAgIH1cbiAgICBcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpe1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5zaG91bGRDb21wb25lbnRVcGRhdGUodGhpcywgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0Q29tcG9uZW50O1xuXG5cblxuXG5cblxuIl19