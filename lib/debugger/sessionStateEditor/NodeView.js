"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeView = function (_React$Component) {
  _inherits(NodeView, _React$Component);

  function NodeView(props) {
    _classCallCheck(this, NodeView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NodeView).call(this, props));

    _this.textAreaChange = _this.textAreaChange.bind(_this);

    return _this;
  }

  _createClass(NodeView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.activeNodeValue.removeCallback(this, this.forceUpdate);
    }
  }, {
    key: "textAreaChange",
    value: function textAreaChange(e) {
      this.props.activeNodeValue.state = e.target.value;
    }
  }, {
    key: "render",
    value: function render() {

      var resultContainerStyle = {
        width: "100%",
        height: "100%",
        borderStyle: "solid",
        borderRadius: "4px",
        borderWidth: "1px",
        borderColor: "grey",
        overflowY: 'scroll',
        overflowX: 'scroll',
        padding: "4px"
      };

      return _react2.default.createElement(
        "div",
        { style: resultContainerStyle },
        _react2.default.createElement("textarea", { style: { width: "100%", height: "100%", border: "none" }, value: this.props.activeNodeValue.state, onChange: this.textAreaChange })
      );
    }
  }]);

  return NodeView;
}(_react2.default.Component);

exports.default = NodeView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGVWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUVKLFdBRkksUUFFSixDQUFZLEtBQVosRUFBbUI7MEJBRmYsVUFFZTs7dUVBRmYscUJBR0ksUUFEVzs7QUFHakIsVUFBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QixDQUhpQjs7O0dBQW5COztlQUZJOzt3Q0FTZTtBQUNqQixXQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLG9CQUEzQixDQUFnRCxJQUFoRCxFQUFxRCxLQUFLLFdBQUwsQ0FBckQsQ0FEaUI7Ozs7MkNBSUs7QUFDdEIsV0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixjQUEzQixDQUEwQyxJQUExQyxFQUErQyxLQUFLLFdBQUwsQ0FBL0MsQ0FEc0I7Ozs7bUNBTVQsR0FBRTtBQUNmLFdBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsS0FBM0IsR0FBbUMsRUFBRSxNQUFGLENBQVMsS0FBVCxDQURwQjs7Ozs2QkFJUjs7QUFFUCxVQUFJLHVCQUF1QjtBQUN2QixlQUFNLE1BQU47QUFDQSxnQkFBTyxNQUFQO0FBQ0EscUJBQVksT0FBWjtBQUNBLHNCQUFhLEtBQWI7QUFDQSxxQkFBWSxLQUFaO0FBQ0EscUJBQVksTUFBWjtBQUNBLG1CQUFXLFFBQVg7QUFDQSxtQkFBVyxRQUFYO0FBQ0EsaUJBQVEsS0FBUjtPQVRBLENBRkc7O0FBZVAsYUFBUzs7VUFBSyxPQUFPLG9CQUFQLEVBQUw7UUFDRyw0Q0FBVSxPQUFPLEVBQUMsT0FBTSxNQUFOLEVBQWEsUUFBTyxNQUFQLEVBQWMsUUFBTyxNQUFQLEVBQW5DLEVBQW1ELE9BQU8sS0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixLQUEzQixFQUFrQyxVQUFVLEtBQUssY0FBTCxFQUFoSCxDQURIO09BQVQsQ0FmTzs7OztTQXZCTDtFQUFpQixnQkFBTSxTQUFOOztrQkE2Q1IiLCJmaWxlIjoiTm9kZVZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuY2xhc3MgTm9kZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy50ZXh0QXJlYUNoYW5nZSA9IHRoaXMudGV4dEFyZWFDaGFuZ2UuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMuYWN0aXZlTm9kZVZhbHVlLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuXG5cbiAgdGV4dEFyZWFDaGFuZ2UoZSl7XG4gICAgdGhpcy5wcm9wcy5hY3RpdmVOb2RlVmFsdWUuc3RhdGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciByZXN1bHRDb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDpcIjEwMCVcIixcbiAgICAgICAgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6XCIxcHhcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6XCJncmV5XCIsXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXG4gICAgICAgIHBhZGRpbmc6XCI0cHhcIlxuICAgIH1cblxuXG4gICAgcmV0dXJuICggPGRpdiBzdHlsZT17cmVzdWx0Q29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIixib3JkZXI6XCJub25lXCJ9fSB2YWx1ZT17dGhpcy5wcm9wcy5hY3RpdmVOb2RlVmFsdWUuc3RhdGV9IG9uQ2hhbmdlPXt0aGlzLnRleHRBcmVhQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgTm9kZVZpZXc7XG4iXX0=