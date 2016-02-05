"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _PaneConfig = require("./PaneConfig");

var _PaneConfig2 = _interopRequireDefault(_PaneConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//code logic taken from https://github.com/tomkp/react-split-pane

var Pane = function (_React$Component) {
    _inherits(Pane, _React$Component);

    function Pane(props) {
        _classCallCheck(this, Pane);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pane).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _PaneConfig2.default();
        _this.setSessionState = _this.setSessionState.bind(_this);
        //this.state ={};
        return _this;
    }

    _createClass(Pane, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.size.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.size.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "setSessionState",
        value: function setSessionState(size) {
            this.settings.size.value = size;
        }
    }, {
        key: "render",
        value: function render() {

            var split = this.props.split;
            var classes = ['Pane', split];

            var styleObj = _Style2.default.appendVendorPrefix({
                flex: 1,
                position: 'relative',
                outline: 'none',
                overflow: 'auto'
            });

            if (this.settings.size.value) {
                if (split === 'vertical') {
                    styleObj.width = this.settings.size.value;
                } else {
                    styleObj.height = this.settings.size.value;
                    styleObj.display = 'flex';
                }
                styleObj.flex = 'none';
            }

            return _react2.default.createElement(
                "div",
                { className: classes.join(' '), style: styleObj },
                this.props.children
            );
        }
    }]);

    return Pane;
}(_react2.default.Component);

exports.default = Pane;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07OztBQUVGLGFBRkUsSUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE1BRWlCOzsyRUFGakIsaUJBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLDBCQUExQyxDQUZEO0FBR2YsY0FBSyxlQUFMLEdBQXVCLE1BQUssZUFBTCxDQUFxQixJQUFyQixPQUF2Qjs7QUFIZTtLQUFuQjs7aUJBRkU7OzRDQVNpQjtBQUNmLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLG9CQUFuQixDQUF3QyxJQUF4QyxFQUE2QyxLQUFLLFdBQUwsQ0FBN0MsQ0FEZTs7OzsrQ0FLSztBQUNwQixpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixjQUFuQixDQUFrQyxJQUFsQyxFQUF1QyxLQUFLLFdBQUwsQ0FBdkMsQ0FEb0I7Ozs7d0NBSVIsTUFBSztBQUNqQixpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixHQUEyQixJQUEzQixDQURpQjs7OztpQ0FJWjs7QUFFTCxnQkFBTSxRQUFRLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FGVDtBQUdMLGdCQUFNLFVBQVUsQ0FBQyxNQUFELEVBQVMsS0FBVCxDQUFWLENBSEQ7O0FBS0wsZ0JBQUksV0FBVyxnQkFBTSxrQkFBTixDQUF5QjtBQUNwQyxzQkFBTSxDQUFOO0FBQ0EsMEJBQVUsVUFBVjtBQUNBLHlCQUFTLE1BQVQ7QUFDQSwwQkFBVSxNQUFWO2FBSlcsQ0FBWCxDQUxDOztBQWNMLGdCQUFJLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFDMUIsb0JBQUksVUFBVSxVQUFWLEVBQXNCO0FBQ3RCLDZCQUFTLEtBQVQsR0FBaUIsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixDQURLO2lCQUExQixNQUVPO0FBQ0gsNkJBQVMsTUFBVCxHQUFrQixLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQW5CLENBRGY7QUFFSCw2QkFBUyxPQUFULEdBQW1CLE1BQW5CLENBRkc7aUJBRlA7QUFNQSx5QkFBUyxJQUFULEdBQWdCLE1BQWhCLENBUDBCO2FBQTlCOztBQVVBLG1CQUFROztrQkFBSyxXQUFXLFFBQVEsSUFBUixDQUFhLEdBQWIsQ0FBWCxFQUE4QixPQUFPLFFBQVAsRUFBbkM7Z0JBQ0ssS0FBSyxLQUFMLENBQVcsUUFBWDthQURiLENBeEJLOzs7O1dBdEJQO0VBQWEsZ0JBQU0sU0FBTjs7a0JBcURKIiwiZmlsZSI6IlBhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IFBhbmVDb25maWcgZnJvbSBcIi4vUGFuZUNvbmZpZ1wiO1xuXG4vL2NvZGUgbG9naWMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdG9ta3AvcmVhY3Qtc3BsaXQtcGFuZVxuXG5jbGFzcyBQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBQYW5lQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuc2V0U2Vzc2lvblN0YXRlID0gdGhpcy5zZXRTZXNzaW9uU3RhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgLy90aGlzLnN0YXRlID17fTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNpemUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zaXplLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgc2V0U2Vzc2lvblN0YXRlKHNpemUpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNpemUudmFsdWUgPSBzaXplO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbJ1BhbmUnLCBzcGxpdF07XG5cbiAgICAgICAgbGV0IHN0eWxlT2JqID0gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHtcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNpemUudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChzcGxpdCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqLndpZHRoID0gdGhpcy5zZXR0aW5ncy5zaXplLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZU9iai5oZWlnaHQgPSB0aGlzLnNldHRpbmdzLnNpemUudmFsdWU7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmouZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlT2JqLmZsZXggPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0gc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZTtcbiJdfQ==
