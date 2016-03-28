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

        // allowe render only when React Parent render is called with new iconMode value

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
                    var iconStyleObj = this.settings.nodeIconStyle.getStyleFor();
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
            return _react2.default.createElement(_Node2.default, { style: rootNodeStyle, data: this.props.data, label: this.props.label, nodes: this.props.nodes, icon: this.props.icon,
                settings: this.settings.rootNode,
                treeConfig: this.settings,
                clickCallback: this.props.clickCallback });
        }
    }]);

    return Tree;
}(_AbstractComponent3.default);

_ComponentManager2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
exports.default = Tree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzs7QUFFRixhQUZFLElBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixNQUVpQjs7MkVBRmpCLGlCQUdRLFFBRFM7O0FBRWYsY0FBSyxRQUFMLENBQWMsWUFBZCxHQUE2QixNQUFLLEtBQUwsQ0FBVyxZQUFYLENBRmQ7QUFHZixjQUFLLFFBQUwsQ0FBYyxXQUFkLEdBQTRCLE1BQUssS0FBTCxDQUFXLFdBQVgsQ0FIYjs7S0FBbkI7O2lCQUZFOztrREFTd0IsV0FBVTtBQUNoQyx1Q0FWRiwrREFVa0MsVUFBaEMsQ0FEZ0M7QUFFaEMsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFBbUI7QUFDMUMscUJBQUssUUFBTCxDQUFjLFlBQWQsR0FBNkIsVUFBVSxZQUFWLENBRGE7QUFFMUMscUJBQUssUUFBTCxDQUFjLFdBQWQsR0FBNEIsVUFBVSxXQUFWLENBRmM7YUFBOUM7Ozs7Ozs7OENBUWtCLFdBQVU7QUFDNUIsdUNBcEJGLDJEQW9COEIsVUFBNUIsQ0FENEI7QUFFNUIsZ0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixVQUFVLElBQVYsRUFDbkIsT0FBTyxJQUFQLENBREo7QUFFQSxtQkFBTyxLQUFQLENBSjRCOzs7O2lDQVF2QjtBQUNMLGdCQUFHLDJCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxlQUFaLEVBQTFCO0FBQ0EsZ0JBQUcsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixFQUE2QjtBQUM1QixvQkFBSSxXQUFXLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsUUFBdkIsQ0FBZ0MsS0FBaEMsQ0FEYTtBQUU1QixvQkFBSSxTQUFTLDJDQUFULENBRndCO0FBRzVCLG9CQUFHLFlBQVksU0FBUyxNQUFULEdBQWtCLENBQWxCLEVBQW9CO0FBQy9CLHdCQUFJLGVBQWUsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixXQUE1QixFQUFmLENBRDJCO0FBRS9CLHdCQUFHLFNBQVMsT0FBVCxDQUFpQixHQUFqQixLQUF5QixDQUFDLENBQUQsRUFBRzs7QUFDM0IsaUNBQVMscUNBQUcsT0FBUyxZQUFULEVBQXVCLFdBQVcsUUFBWCxFQUExQixDQUFULENBRDJCO3FCQUEvQixNQUVNO0FBQ0YsaUNBQVMsdUNBQUssT0FBUyxZQUFULEVBQXVCLEtBQUssUUFBTCxFQUE1QixDQUFULENBREU7cUJBRk47aUJBRko7QUFRQSx1QkFBTyxNQUFQLENBWDRCO2FBQWhDO0FBYUEsZ0JBQUksZ0JBQWdCLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsV0FBeEIsQ0FBb0MsSUFBcEMsRUFBeUMsSUFBekMsQ0FBaEIsQ0FmQztBQWdCTCxtQkFBUyxnREFBTSxPQUFPLGFBQVAsRUFBc0IsTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixPQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsRUFBa0IsTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYO0FBQ3hHLDBCQUFVLEtBQUssUUFBTCxDQUFjLFFBQWQ7QUFDViw0QkFBWSxLQUFLLFFBQUw7QUFDWiwrQkFBZSxLQUFLLEtBQUwsQ0FBVyxhQUFYLEVBSGxCLENBQVQsQ0FoQks7Ozs7V0EzQlA7OztBQW9ETiwyQkFBaUIsMEJBQWpCLENBQTRDLHVCQUE1QyxFQUFvRSxJQUFwRTtrQkFDZSIsImZpbGUiOiJUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5cbmNsYXNzIFRyZWUgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwID0gdGhpcy5wcm9wcy5kYXRhVHlwZXNNYXA7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0RGF0YVR5cGUgPSB0aGlzLnByb3BzLmdldERhdGFUeXBlO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGFUeXBlc01hcCA9IG5leHRQcm9wcy5kYXRhVHlwZXNNYXA7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmdldERhdGFUeXBlID0gbmV4dFByb3BzLmdldERhdGFUeXBlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBhbGxvd2UgcmVuZGVyIG9ubHkgd2hlbiBSZWFjdCBQYXJlbnQgcmVuZGVyIGlzIGNhbGxlZCB3aXRoIG5ldyBpY29uTW9kZSB2YWx1ZVxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJUcmVlIC0gcmVuZGVyXCIpO1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlKXtcbiAgICAgICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuc2V0dGluZ3Mucm9vdE5vZGUuaWNvbk5hbWUuc3RhdGU7XG4gICAgICAgICAgICB2YXIgaWNvblVJID0gPHNwYW4vPlxuICAgICAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iaiA9IHRoaXMuc2V0dGluZ3Mubm9kZUljb25TdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgICAgIGlmKGljb25OYW1lLmluZGV4T2YoXCIvXCIpID09IC0xKXsgLy8gZm9udEF3ZXNvbWUgSWNvbiBOYW1lXG4gICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpIHN0eWxlID0ge2ljb25TdHlsZU9ian0gY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpbWcgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBzcmM9e2ljb25OYW1lfS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGljb25VSTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcm9vdE5vZGVTdHlsZSA9IHRoaXMuc2V0dGluZ3Mucm9vdFN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG4gICAgICAgIHJldHVybiAoIDxOb2RlIHN0eWxlPXtyb290Tm9kZVN0eWxlfSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBub2Rlcz17dGhpcy5wcm9wcy5ub2Rlc30gaWNvbj17dGhpcy5wcm9wcy5pY29ufVxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5yb290Tm9kZX1cbiAgICAgICAgICAgICAgICAgICAgdHJlZUNvbmZpZz17dGhpcy5zZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrfSAvPlxuICAgICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuVHJlZUNvbmZpZ1wiLFRyZWUpO1xuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiJdfQ==
