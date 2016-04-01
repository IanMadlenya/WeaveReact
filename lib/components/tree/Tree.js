"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _Node = require("./Node");

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tree = function (_AbstractComponent) {
    _inherits(Tree, _AbstractComponent);

    function Tree(props) {
        _classCallCheck(this, Tree);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tree).call(this, props));

        _this.settings.dataTypesMap = _this.props.dataTypesMap;
        _this.settings.getDataType = _this.props.getDataType;
        return _this;
    }

    _createClass(Tree, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _get(Object.getPrototypeOf(Tree.prototype), "componentWillReceiveProps", this).call(this, nextProps);
            if (this.props.settings !== nextProps.settings) {
                this.settings.dataTypesMap = nextProps.dataTypesMap;
                this.settings.getDataType = nextProps.getDataType;
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            _get(Object.getPrototypeOf(Tree.prototype), "shouldComponentUpdate", this).call(this, nextProps);
            if (this.props.data !== nextProps.data) return true;
            return false;
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Tree - render");
            if (this.settings.iconMode.state) {
                var iconName = this.settings.rootNode.iconName.state;
                var iconUI = _react2.default.createElement("span", null);
                if (iconName && iconName.length > 0) {
                    var iconStyleObj = this.settings.nodeIconStyle.state;
                    if (iconName.indexOf("/") == -1) {
                        // fontAwesome Icon Name
                        iconUI = _react2.default.createElement("i", { style: iconStyleObj, className: iconName });
                    } else {
                        iconUI = _react2.default.createElement("img", { style: iconStyleObj, src: iconName });
                    }
                }
                return iconUI;
            }

            var rootNodeStyle = this.settings.rootStyle.getStyleFor(null, true);
            return _react2.default.createElement(_Node2.default, { style: rootNodeStyle,
                data: this.props.data,
                label: this.props.label,
                nodes: this.props.nodes,
                icon: this.props.icon,
                reverseLayout: this.settings.reverseLayout.state,
                settings: this.settings.rootNode,
                treeConfig: this.settings,
                onOpenClick: this.props.onOpenClick,
                onSelectClick: this.props.onSelectClick,
                onSelectAllClick: this.props.onSelectAllClick,
                enableSelectAll: this.props.enableSelectAll || this.settings.enableSelectAll.state });
        }
    }]);

    return Tree;
}(_AbstractComponent3.default);

_ComponentManager2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
exports.default = Tree;
//# sourceMappingURL=data:application/json;base64,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cmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcblxuY2xhc3MgVHJlZSBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXAgPSB0aGlzLnByb3BzLmRhdGFUeXBlc01hcDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5nZXREYXRhVHlwZSA9IHRoaXMucHJvcHMuZ2V0RGF0YVR5cGU7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwID0gbmV4dFByb3BzLmRhdGFUeXBlc01hcDtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0RGF0YVR5cGUgPSBuZXh0UHJvcHMuZ2V0RGF0YVR5cGU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJUcmVlIC0gcmVuZGVyXCIpO1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlKXtcbiAgICAgICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuc2V0dGluZ3Mucm9vdE5vZGUuaWNvbk5hbWUuc3RhdGU7XG4gICAgICAgICAgICB2YXIgaWNvblVJID0gPHNwYW4vPlxuICAgICAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iaiA9IHRoaXMuc2V0dGluZ3Mubm9kZUljb25TdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSl7IC8vIGZvbnRBd2Vzb21lIEljb24gTmFtZVxuICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aSBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aW1nIHN0eWxlID0ge2ljb25TdHlsZU9ian0gc3JjPXtpY29uTmFtZX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpY29uVUk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcm9vdE5vZGVTdHlsZSA9IHRoaXMuc2V0dGluZ3Mucm9vdFN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG4gICAgICAgIHJldHVybiAoIDxOb2RlIHN0eWxlPXtyb290Tm9kZVN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnByb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICBub2Rlcz17dGhpcy5wcm9wcy5ub2Rlc31cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17dGhpcy5wcm9wcy5pY29ufVxuICAgICAgICAgICAgICAgICAgICByZXZlcnNlTGF5b3V0PXt0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnJvb3ROb2RlfVxuICAgICAgICAgICAgICAgICAgICB0cmVlQ29uZmlnPXt0aGlzLnNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICBvbk9wZW5DbGljaz17dGhpcy5wcm9wcy5vbk9wZW5DbGlja31cbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RDbGljaz17dGhpcy5wcm9wcy5vblNlbGVjdENsaWNrfVxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEFsbENsaWNrPXt0aGlzLnByb3BzLm9uU2VsZWN0QWxsQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVNlbGVjdEFsbD17dGhpcy5wcm9wcy5lbmFibGVTZWxlY3RBbGwgfHwgdGhpcy5zZXR0aW5ncy5lbmFibGVTZWxlY3RBbGwuc3RhdGV9Lz5cbiAgICAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LlRyZWVDb25maWdcIixUcmVlKTtcbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4iXX0=
