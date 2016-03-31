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
        value: function shouldComponentUpdate(nextProps, nextState) {
            return _ComponentManager2.default.shouldComponentUpdate(this, nextProps, nextState);
        }
    }]);

    return AbstractComponent;
}(_react2.default.Component);

exports.default = AbstractComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFic3RyYWN0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNOzs7QUFFRixhQUZFLGlCQUVGLENBQVksS0FBWixFQUFrQixJQUFsQixFQUF1Qjs4QkFGckIsbUJBRXFCOzsyRUFGckIsOEJBR1EsUUFEYTs7QUFFbkIsbUNBQWlCLFVBQWpCLFFBQWlDLElBQWpDLEVBRm1COztLQUF2Qjs7aUJBRkU7OytDQU9vQjtBQUNsQix1Q0FBaUIsb0JBQWpCLENBQXNDLElBQXRDLEVBRGtCOzs7O2tEQUlJLFdBQVU7QUFDaEMsdUNBQWlCLHlCQUFqQixDQUEyQyxJQUEzQyxFQUFnRCxTQUFoRCxFQURnQzs7Ozs7Ozs4Q0FLZCxXQUFXLFdBQVU7QUFDdkMsbUJBQU8sMkJBQWlCLHFCQUFqQixDQUF1QyxJQUF2QyxFQUE2QyxTQUE3QyxFQUF3RCxTQUF4RCxDQUFQLENBRHVDOzs7O1dBaEJ6QztFQUEwQixnQkFBTSxTQUFOOztrQkF1QmpCIiwiZmlsZSI6IkFic3RyYWN0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuXG5jbGFzcyBBYnN0cmFjdENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyx0eXBlKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmluaXRpYWxpemUodGhpcyx0eXBlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNvbXBvbmVudFdpbGxVbm1vdW50KHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHRoaXMsbmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICAvLyBhbGxvd2UgcmVuZGVyIG9ubHkgd2hlbiBSZWFjdCBQYXJlbnQgcmVuZGVyIGlzIGNhbGxlZCB3aXRoIG5ldyBpY29uTW9kZSB2YWx1ZVxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSl7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnNob3VsZENvbXBvbmVudFVwZGF0ZSh0aGlzLCBuZXh0UHJvcHMsIG5leHRTdGF0ZSk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RDb21wb25lbnQ7XG5cblxuXG5cblxuXG4iXX0=
