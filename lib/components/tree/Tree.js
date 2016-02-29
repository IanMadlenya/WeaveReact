"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        _this.addCallbacks = _this.addCallbacks.bind(_this);
        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
        return _this;
    }

    _createClass(Tree, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.addCallbacks();
        }
    }, {
        key: "addCallbacks",
        value: function addCallbacks() {
            this.settings.align.addGroupedCallback(this, this.forceUpdate);
            this.settings.nodePadding.addGroupedCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.rootStyle).addGroupedCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.branchStyle).addGroupedCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.nodeStyle).addGroupedCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.leafStyle).addGroupedCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.selectedLeafStyle).addGroupedCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.activeLeafStyle).addGroupedCallback(this, this.forceUpdate);
        }
    }, {
        key: "removeCallbacks",
        value: function removeCallbacks() {
            this.settings.align.removeCallback(this, this.forceUpdate);
            this.settings.nodePadding.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.rootStyle).removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.branchStyle).removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.nodeStyle).removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.leafStyle).removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.selectedLeafStyle).removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.activeLeafStyle).removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.removeCallbacks();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                this.addCallbacks();
                this.settings = nextProps.settings;
                this.removeCallbacks();

                this.settings.dataTypesMap = nextProps.dataTypesMap;
                this.settings.getDataType = nextProps.getDataType;
            }
            if (this.props.data !== nextProps.data) {
                console.log("Data Changed");
            }
        }
    }, {
        key: "render",
        value: function render() {
            var rootNodeStyle = this.settings.rootStyle.getStyleFor(null, true);
            return _react2.default.createElement(_Node2.default, { style: rootNodeStyle, data: this.props.data, label: this.props.label, nodes: this.props.nodes,
                settings: this.settings.rootNode,
                treeConfig: this.settings,
                clickCallback: this.props.clickCallback });
        }
    }]);

    return Tree;
}(_react2.default.Component);

_App2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
exports.default = Tree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTTs7O0FBRUYsYUFGRSxJQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsTUFFaUI7OzJFQUZqQixpQkFHUSxRQURTOztBQUVmLGNBQUssUUFBTCxHQUFnQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBb0IsSUFBSSxVQUFKLEVBQTFDLENBRkQ7QUFHZixjQUFLLFFBQUwsQ0FBYyxZQUFkLEdBQTZCLE1BQUssS0FBTCxDQUFXLFlBQVgsQ0FIZDtBQUlmLGNBQUssUUFBTCxDQUFjLFdBQWQsR0FBNEIsTUFBSyxLQUFMLENBQVcsV0FBWCxDQUpiO0FBS2YsY0FBSyxZQUFMLEdBQW9CLE1BQUssWUFBTCxDQUFrQixJQUFsQixPQUFwQixDQUxlO0FBTWYsY0FBSyxlQUFMLEdBQXVCLE1BQUssZUFBTCxDQUFxQixJQUFyQixPQUF2QixDQU5lOztLQUFuQjs7aUJBRkU7OzRDQVdpQjtBQUNoQixpQkFBSyxZQUFMLEdBRGdCOzs7O3VDQUlMO0FBQ1YsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0Isa0JBQXBCLENBQXVDLElBQXZDLEVBQTZDLEtBQUssV0FBTCxDQUE3QyxDQURVO0FBRVYsaUJBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsa0JBQTFCLENBQTZDLElBQTdDLEVBQW1ELEtBQUssV0FBTCxDQUFuRCxDQUZVO0FBR1Ysa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQW5CLENBQTRDLGtCQUE1QyxDQUErRCxJQUEvRCxFQUFxRSxLQUFLLFdBQUwsQ0FBckUsQ0FIVTtBQUlWLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQWMsV0FBZCxDQUFuQixDQUE4QyxrQkFBOUMsQ0FBaUUsSUFBakUsRUFBdUUsS0FBSyxXQUFMLENBQXZFLENBSlU7QUFLVixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBbkIsQ0FBNEMsa0JBQTVDLENBQStELElBQS9ELEVBQXFFLEtBQUssV0FBTCxDQUFyRSxDQUxVO0FBTVYsa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQW5CLENBQTRDLGtCQUE1QyxDQUErRCxJQUEvRCxFQUFxRSxLQUFLLFdBQUwsQ0FBckUsQ0FOVTtBQU9WLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQWMsaUJBQWQsQ0FBbkIsQ0FBb0Qsa0JBQXBELENBQXVFLElBQXZFLEVBQTZFLEtBQUssV0FBTCxDQUE3RSxDQVBVO0FBUVYsa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBYyxlQUFkLENBQW5CLENBQWtELGtCQUFsRCxDQUFxRSxJQUFyRSxFQUEyRSxLQUFLLFdBQUwsQ0FBM0UsQ0FSVTs7OzswQ0FXRztBQUNiLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLGNBQXBCLENBQW1DLElBQW5DLEVBQXlDLEtBQUssV0FBTCxDQUF6QyxDQURhO0FBRWIsaUJBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsY0FBMUIsQ0FBeUMsSUFBekMsRUFBK0MsS0FBSyxXQUFMLENBQS9DLENBRmE7QUFHWixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBbkIsQ0FBNEMsY0FBNUMsQ0FBMkQsSUFBM0QsRUFBaUUsS0FBSyxXQUFMLENBQWpFLENBSFk7QUFJWixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFjLFdBQWQsQ0FBbkIsQ0FBOEMsY0FBOUMsQ0FBNkQsSUFBN0QsRUFBbUUsS0FBSyxXQUFMLENBQW5FLENBSlk7QUFLWixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBbkIsQ0FBNEMsY0FBNUMsQ0FBMkQsSUFBM0QsRUFBaUUsS0FBSyxXQUFMLENBQWpFLENBTFk7QUFNWixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBbkIsQ0FBNEMsY0FBNUMsQ0FBMkQsSUFBM0QsRUFBaUUsS0FBSyxXQUFMLENBQWpFLENBTlk7QUFPWixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFjLGlCQUFkLENBQW5CLENBQW9ELGNBQXBELENBQW1FLElBQW5FLEVBQXlFLEtBQUssV0FBTCxDQUF6RSxDQVBZO0FBUVosa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBYyxlQUFkLENBQW5CLENBQWtELGNBQWxELENBQWlFLElBQWpFLEVBQXVFLEtBQUssV0FBTCxDQUF2RSxDQVJZOzs7OytDQWFPO0FBQ3BCLGlCQUFLLGVBQUwsR0FEb0I7Ozs7a0RBSUUsV0FBVTtBQUNoQyxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUFtQjtBQUMxQyxxQkFBSyxZQUFMLEdBRDBDO0FBRTFDLHFCQUFLLFFBQUwsR0FBZ0IsVUFBVSxRQUFWLENBRjBCO0FBRzFDLHFCQUFLLGVBQUwsR0FIMEM7O0FBSzFDLHFCQUFLLFFBQUwsQ0FBYyxZQUFkLEdBQTZCLFVBQVUsWUFBVixDQUxhO0FBTTFDLHFCQUFLLFFBQUwsQ0FBYyxXQUFkLEdBQTRCLFVBQVUsV0FBVixDQU5jO2FBQTlDO0FBUUEsZ0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixVQUFVLElBQVYsRUFBZTtBQUNsQyx3QkFBUSxHQUFSLENBQVksY0FBWixFQURrQzthQUF0Qzs7OztpQ0FRSztBQUNMLGdCQUFJLGdCQUFnQixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLFdBQXhCLENBQW9DLElBQXBDLEVBQXlDLElBQXpDLENBQWhCLENBREM7QUFFYixtQkFBUyxnREFBTSxPQUFPLGFBQVAsRUFBc0IsTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixPQUFPLEtBQUssS0FBTCxDQUFXLEtBQVg7QUFDaEYsMEJBQVUsS0FBSyxRQUFMLENBQWMsUUFBZDtBQUNWLDRCQUFZLEtBQUssUUFBTDtBQUNaLCtCQUFlLEtBQUssS0FBTCxDQUFXLGFBQVgsRUFIbEIsQ0FBVCxDQUZhOzs7O1dBNURQO0VBQWEsZ0JBQU0sU0FBTjs7QUF1RW5CLGNBQUksMEJBQUosQ0FBK0IsdUJBQS9CLEVBQXVELElBQXZEO2tCQUNlIiwiZmlsZSI6IlRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5cbmNsYXNzIFRyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFRyZWVDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXAgPSB0aGlzLnByb3BzLmRhdGFUeXBlc01hcDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5nZXREYXRhVHlwZSA9IHRoaXMucHJvcHMuZ2V0RGF0YVR5cGU7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hbGlnbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mubm9kZVBhZGRpbmcuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5yb290U3R5bGUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MuYnJhbmNoU3R5bGUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Mubm9kZVN0eWxlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmxlYWZTdHlsZSkuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zZWxlY3RlZExlYWZTdHlsZSkuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5hY3RpdmVMZWFmU3R5bGUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hbGlnbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5ub2RlUGFkZGluZy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnJvb3RTdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5icmFuY2hTdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5ub2RlU3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MubGVhZlN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnNlbGVjdGVkTGVhZlN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmFjdGl2ZUxlYWZTdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXAgPSBuZXh0UHJvcHMuZGF0YVR5cGVzTWFwO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5nZXREYXRhVHlwZSA9IG5leHRQcm9wcy5nZXREYXRhVHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBDaGFuZ2VkXCIpXG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciByb290Tm9kZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5yb290U3R5bGUuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKTtcbnJldHVybiAoIDxOb2RlIHN0eWxlPXtyb290Tm9kZVN0eWxlfSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBub2Rlcz17dGhpcy5wcm9wcy5ub2Rlc30gXG4gICAgICAgICAgICBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5yb290Tm9kZX0gXG4gICAgICAgICAgICB0cmVlQ29uZmlnPXt0aGlzLnNldHRpbmdzfSBcbiAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30vPiBcbiAgICAgICApO1xuICAgIH1cblxufVxuXG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LlRyZWVDb25maWdcIixUcmVlKTtcbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4iXX0=
