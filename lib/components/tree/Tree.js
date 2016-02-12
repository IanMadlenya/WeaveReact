"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _Node = require("./Node");

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tree = function (_React$Component) {
    _inherits(Tree, _React$Component);

    function Tree(props) {
        _classCallCheck(this, Tree);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tree).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new TreeConfig();
        _this.settings.dataTypesMap = _this.props.dataTypesMap;
        _this.settings.getDataType = _this.props.getDataType;
        return _this;
    }

    _createClass(Tree, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {}
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                this.settings = nextProps.settings;
                this.settings.dataTypesMap = this.props.dataTypesMap;
                this.settings.getDataType = this.props.getDataType;
            }
        }
    }, {
        key: "render",
        value: function render() {
            console.log("Tree render");

            return _react2.default.createElement(_Node2.default, { data: this.props.data, label: this.props.label, nodes: this.props.nodes, treeConfig: this.settings, clickCallback: this.props.clickCallback });
        }
    }]);

    return Tree;
}(_react2.default.Component);

_App2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
exports.default = Tree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTTs7O0FBRUYsYUFGRSxJQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsTUFFaUI7OzJFQUZqQixpQkFHUSxRQURTOztBQUVmLGNBQUssUUFBTCxHQUFnQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBb0IsSUFBSSxVQUFKLEVBQTFDLENBRkQ7QUFHZixjQUFLLFFBQUwsQ0FBYyxZQUFkLEdBQTZCLE1BQUssS0FBTCxDQUFXLFlBQVgsQ0FIZDtBQUlmLGNBQUssUUFBTCxDQUFjLFdBQWQsR0FBNEIsTUFBSyxLQUFMLENBQVcsV0FBWCxDQUpiOztLQUFuQjs7aUJBRkU7OzRDQVNpQjs7OytDQUlLOzs7a0RBSUUsV0FBVTtBQUNoQyxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUFtQjtBQUMxQyxxQkFBSyxRQUFMLEdBQWdCLFVBQVUsUUFBVixDQUQwQjtBQUUxQyxxQkFBSyxRQUFMLENBQWMsWUFBZCxHQUE2QixLQUFLLEtBQUwsQ0FBVyxZQUFYLENBRmE7QUFHMUMscUJBQUssUUFBTCxDQUFjLFdBQWQsR0FBNEIsS0FBSyxLQUFMLENBQVcsV0FBWCxDQUhjO2FBQTlDOzs7O2lDQVlLO0FBQ0wsb0JBQVEsR0FBUixDQUFZLGFBQVosRUFESzs7QUFHYixtQkFBUyxnREFBTSxNQUFNLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixZQUFZLEtBQUssUUFBTCxFQUFlLGVBQWUsS0FBSyxLQUFMLENBQVcsYUFBWCxFQUF6SCxDQUFULENBSGE7Ozs7V0E5QlA7RUFBYSxnQkFBTSxTQUFOOztBQXNDbkIsY0FBSSwwQkFBSixDQUErQix1QkFBL0IsRUFBdUQsSUFBdkQ7a0JBQ2UiLCJmaWxlIjoiVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcblxuY2xhc3MgVHJlZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgVHJlZUNvbmZpZygpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGFUeXBlc01hcCA9IHRoaXMucHJvcHMuZGF0YVR5cGVzTWFwO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmdldERhdGFUeXBlID0gdGhpcy5wcm9wcy5nZXREYXRhVHlwZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuXG4gICAgfVxuICAgIFxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3NcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwID0gdGhpcy5wcm9wcy5kYXRhVHlwZXNNYXA7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmdldERhdGFUeXBlID0gdGhpcy5wcm9wcy5nZXREYXRhVHlwZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRyZWUgcmVuZGVyXCIpXG5cbnJldHVybiAoIDxOb2RlIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gbGFiZWw9e3RoaXMucHJvcHMubGFiZWx9IG5vZGVzPXt0aGlzLnByb3BzLm5vZGVzfSB0cmVlQ29uZmlnPXt0aGlzLnNldHRpbmdzfSBjbGlja0NhbGxiYWNrPXt0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2t9Lz4gKTtcbiAgICB9XG5cbn1cblxuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5UcmVlQ29uZmlnXCIsVHJlZSk7XG5leHBvcnQgZGVmYXVsdCBUcmVlO1xuIl19
