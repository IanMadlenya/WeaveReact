"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SimpleNode = require("./SimpleNode");

var _SimpleNode2 = _interopRequireDefault(_SimpleNode);

var _SimpleTreeConfig = require("./SimpleTreeConfig");

var _SimpleTreeConfig2 = _interopRequireDefault(_SimpleTreeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleTree = function (_React$Component) {
    _inherits(SimpleTree, _React$Component);

    function SimpleTree(props) {
        _classCallCheck(this, SimpleTree);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleTree).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _SimpleTreeConfig2.default();
        _this.settings.labelAccessor = _this.props.label;
        _this.settings.childrenAccessor = _this.props.children;
        _this.addCallbacks = _this.addCallbacks.bind(_this);
        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
        return _this;
    }

    _createClass(SimpleTree, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.addCallbacks();
        }
    }, {
        key: "addCallbacks",
        value: function addCallbacks() {
            this.settings.nodePadding.addGroupedCallback(this, this.forceUpdate);
            this.settings.nodeStyle.addGroupedCallback(this, this.forceUpdate);
            this.settings.leafStyle.addGroupedCallback(this, this.forceUpdate);
            this.settings.selectedLeafStyle.addGroupedCallback(this, this.forceUpdate);
            this.settings.activeLeafStyle.addGroupedCallback(this, this.forceUpdate);
        }
    }, {
        key: "removeCallbacks",
        value: function removeCallbacks() {
            this.settings.nodePadding.removeCallback(this, this.forceUpdate);
            this.settings.nodeStyle.removeCallback(this, this.forceUpdate);
            this.settings.leafStyle.removeCallback(this, this.forceUpdate);
            this.settings.selectedLeafStyle.removeCallback(this, this.forceUpdate);
            this.settings.activeLeafStyle.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.removeCallbacks();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_SimpleNode2.default, { data: this.props.data,
                label: this.props.label,
                children: this.props.children,
                treeConfig: this.settings,
                clickCallback: this.props.click });
        }
    }]);

    return SimpleTree;
}(_react2.default.Component);

exports.default = SimpleTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpbXBsZVRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzs7QUFFRixhQUZFLFVBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixZQUVpQjs7MkVBRmpCLHVCQUdRLFFBRFM7O0FBRWYsY0FBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQixnQ0FBMUMsQ0FGRDtBQUdmLGNBQUssUUFBTCxDQUFjLGFBQWQsR0FBOEIsTUFBSyxLQUFMLENBQVcsS0FBWCxDQUhmO0FBSWYsY0FBSyxRQUFMLENBQWMsZ0JBQWQsR0FBaUMsTUFBSyxLQUFMLENBQVcsUUFBWCxDQUpsQjtBQUtmLGNBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEIsQ0FMZTtBQU1mLGNBQUssZUFBTCxHQUF1QixNQUFLLGVBQUwsQ0FBcUIsSUFBckIsT0FBdkIsQ0FOZTs7S0FBbkI7O2lCQUZFOzs0Q0FXaUI7QUFDaEIsaUJBQUssWUFBTCxHQURnQjs7Ozt1Q0FJTDtBQUNWLGlCQUFLLFFBQUwsQ0FBYyxXQUFkLENBQTBCLGtCQUExQixDQUE2QyxJQUE3QyxFQUFtRCxLQUFLLFdBQUwsQ0FBbkQsQ0FEVTtBQUVWLGlCQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLGtCQUF4QixDQUEyQyxJQUEzQyxFQUFpRCxLQUFLLFdBQUwsQ0FBakQsQ0FGVTtBQUdWLGlCQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLGtCQUF4QixDQUEyQyxJQUEzQyxFQUFpRCxLQUFLLFdBQUwsQ0FBakQsQ0FIVTtBQUlWLGlCQUFLLFFBQUwsQ0FBYyxpQkFBZCxDQUFnQyxrQkFBaEMsQ0FBbUQsSUFBbkQsRUFBeUQsS0FBSyxXQUFMLENBQXpELENBSlU7QUFLVixpQkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixrQkFBOUIsQ0FBaUQsSUFBakQsRUFBdUQsS0FBSyxXQUFMLENBQXZELENBTFU7Ozs7MENBUUc7QUFDYixpQkFBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixjQUExQixDQUF5QyxJQUF6QyxFQUErQyxLQUFLLFdBQUwsQ0FBL0MsQ0FEYTtBQUViLGlCQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLGNBQXhCLENBQXVDLElBQXZDLEVBQTZDLEtBQUssV0FBTCxDQUE3QyxDQUZhO0FBR2IsaUJBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsY0FBeEIsQ0FBdUMsSUFBdkMsRUFBNkMsS0FBSyxXQUFMLENBQTdDLENBSGE7QUFJYixpQkFBSyxRQUFMLENBQWMsaUJBQWQsQ0FBZ0MsY0FBaEMsQ0FBK0MsSUFBL0MsRUFBcUQsS0FBSyxXQUFMLENBQXJELENBSmE7QUFLYixpQkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixjQUE5QixDQUE2QyxJQUE3QyxFQUFtRCxLQUFLLFdBQUwsQ0FBbkQsQ0FMYTs7OzsrQ0FTTztBQUNwQixpQkFBSyxlQUFMLEdBRG9COzs7O2lDQUtmO0FBQ0wsbUJBQVMsc0RBQWEsTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYO0FBQ2hCLHVCQUFPLEtBQUssS0FBTCxDQUFXLEtBQVg7QUFDUCwwQkFBVSxLQUFLLEtBQUwsQ0FBVyxRQUFYO0FBQ1YsNEJBQVksS0FBSyxRQUFMO0FBQ1osK0JBQWUsS0FBSyxLQUFMLENBQVcsS0FBWCxFQUpsQixDQUFULENBREs7Ozs7V0FyQ1A7RUFBbUIsZ0JBQU0sU0FBTjs7a0JBZ0RWIiwiZmlsZSI6IlNpbXBsZVRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2ltcGxlTm9kZSBmcm9tIFwiLi9TaW1wbGVOb2RlXCI7XG5pbXBvcnQgU2ltcGxlVHJlZUNvbmZpZyBmcm9tIFwiLi9TaW1wbGVUcmVlQ29uZmlnXCI7XG5cbmNsYXNzIFNpbXBsZVRyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFNpbXBsZVRyZWVDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbEFjY2Vzc29yID0gdGhpcy5wcm9wcy5sYWJlbDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbkFjY2Vzc29yID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MgPSB0aGlzLmFkZENhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcyA9IHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIGFkZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm5vZGVQYWRkaW5nLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5ub2RlU3R5bGUuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxlYWZTdHlsZS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2VsZWN0ZWRMZWFmU3R5bGUuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZUxlYWZTdHlsZS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mubm9kZVBhZGRpbmcucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mubm9kZVN0eWxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxlYWZTdHlsZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZWxlY3RlZExlYWZTdHlsZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVMZWFmU3R5bGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKClcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICggPFNpbXBsZU5vZGUgIGRhdGE9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICB0cmVlQ29uZmlnPXt0aGlzLnNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICBjbGlja0NhbGxiYWNrPXt0aGlzLnByb3BzLmNsaWNrfS8+XG4gICAgICAgICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVUcmVlO1xuIl19