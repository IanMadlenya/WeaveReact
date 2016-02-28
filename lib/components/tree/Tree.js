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
            return _react2.default.createElement(_Node2.default, { style: rootNodeStyle, data: this.props.data, label: this.props.label, nodes: this.props.nodes, settings: this.settings.rootNode, treeConfig: this.settings, clickCallback: this.props.clickCallback });
        }
    }]);

    return Tree;
}(_react2.default.Component);

_App2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
exports.default = Tree;
//# sourceMappingURL=data:application/json;base64,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QUFLLEtBQUwsQ0FBVyxhQUFYLEVBQWpMLENBQVQsQ0FGYTs7OztXQTVEUDtFQUFhLGdCQUFNLFNBQU47O0FBbUVuQixjQUFJLDBCQUFKLENBQStCLHVCQUEvQixFQUF1RCxJQUF2RDtrQkFDZSIsImZpbGUiOiJUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuXG5jbGFzcyBUcmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBUcmVlQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwID0gdGhpcy5wcm9wcy5kYXRhVHlwZXNNYXA7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0RGF0YVR5cGUgPSB0aGlzLnByb3BzLmdldERhdGFUeXBlO1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcyA9IHRoaXMuYWRkQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzID0gdGhpcy5yZW1vdmVDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWxpZ24uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm5vZGVQYWRkaW5nLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Mucm9vdFN0eWxlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmJyYW5jaFN0eWxlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLm5vZGVTdHlsZSkuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5sZWFmU3R5bGUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc2VsZWN0ZWRMZWFmU3R5bGUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MuYWN0aXZlTGVhZlN0eWxlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWxpZ24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mubm9kZVBhZGRpbmcucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5yb290U3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MuYnJhbmNoU3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Mubm9kZVN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmxlYWZTdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zZWxlY3RlZExlYWZTdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5hY3RpdmVMZWFmU3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKClcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwID0gbmV4dFByb3BzLmRhdGFUeXBlc01hcDtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0RGF0YVR5cGUgPSBuZXh0UHJvcHMuZ2V0RGF0YVR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGEgQ2hhbmdlZFwiKVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgcm9vdE5vZGVTdHlsZSA9IHRoaXMuc2V0dGluZ3Mucm9vdFN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG5yZXR1cm4gKCA8Tm9kZSBzdHlsZT17cm9vdE5vZGVTdHlsZX0gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH0gbm9kZXM9e3RoaXMucHJvcHMubm9kZXN9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnJvb3ROb2RlfSB0cmVlQ29uZmlnPXt0aGlzLnNldHRpbmdzfSBjbGlja0NhbGxiYWNrPXt0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2t9Lz4gKTtcbiAgICB9XG5cbn1cblxuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5UcmVlQ29uZmlnXCIsVHJlZSk7XG5leHBvcnQgZGVmYXVsdCBUcmVlO1xuIl19
