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

        // allowe render only when React Parent render is called with new iconMode value

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return _ComponentManager2.default.shouldComponentUpdate(nextProps);
        }
    }]);

    return AbstractComponent;
}(_react2.default.Component);

exports.default = AbstractComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFic3RyYWN0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNOzs7QUFFRixhQUZFLGlCQUVGLENBQVksS0FBWixFQUFrQixJQUFsQixFQUF1Qjs4QkFGckIsbUJBRXFCOzsyRUFGckIsOEJBR1EsUUFEYTs7QUFFbkIsbUNBQWlCLFVBQWpCLFFBQWlDLElBQWpDLEVBRm1COztLQUF2Qjs7aUJBRkU7OytDQU9vQjtBQUNsQix1Q0FBaUIsb0JBQWpCLENBQXNDLElBQXRDLEVBRGtCOzs7O2tEQUlJLFdBQVU7QUFDaEMsdUNBQWlCLHlCQUFqQixDQUEyQyxJQUEzQyxFQUFnRCxTQUFoRCxFQURnQzs7Ozs7Ozs4Q0FLZCxXQUFVO0FBQzVCLG1CQUFPLDJCQUFpQixxQkFBakIsQ0FBdUMsU0FBdkMsQ0FBUCxDQUQ0Qjs7OztXQWhCOUI7RUFBMEIsZ0JBQU0sU0FBTjs7a0JBdUJqQiIsImZpbGUiOiJBYnN0cmFjdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cblxuY2xhc3MgQWJzdHJhY3RDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsdHlwZSl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5pbml0aWFsaXplKHRoaXMsdHlwZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jb21wb25lbnRXaWxsVW5tb3VudCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuICAgIFxuICAgIC8vIGFsbG93ZSByZW5kZXIgb25seSB3aGVuIFJlYWN0IFBhcmVudCByZW5kZXIgaXMgY2FsbGVkIHdpdGggbmV3IGljb25Nb2RlIHZhbHVlXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpO1xuICAgIH1cbiAgICBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdENvbXBvbmVudDtcblxuXG5cblxuXG5cbiJdfQ==
