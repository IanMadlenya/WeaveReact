"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
                var iconUI = React.createElement("span", null);
                if (iconName && iconName.length > 0) {
                    var iconStyleObj = this.settings.nodeIconStyle.getStyleFor();
                    if (iconName.indexOf("/") == -1) {
                        // fontAwesome Icon Name
                        iconUI = React.createElement("i", { style: iconStyleObj, className: iconName });
                    } else {
                        iconUI = React.createElement("img", { style: iconStyleObj, src: iconName });
                    }
                }
                return iconUI;
            }
            var rootNodeStyle = this.settings.rootStyle.getStyleFor(null, true);
            return React.createElement(_Node2.default, { style: rootNodeStyle, data: this.props.data, label: this.props.label, nodes: this.props.nodes, icon: this.props.icon,
                settings: this.settings.rootNode,
                treeConfig: this.settings,
                clickCallback: this.props.clickCallback });
        }
    }]);

    return Tree;
}(_AbstractComponent3.default);

_ComponentManager2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
exports.default = Tree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUVGLGFBRkUsSUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE1BRWlCOzsyRUFGakIsaUJBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsQ0FBYyxZQUFkLEdBQTZCLE1BQUssS0FBTCxDQUFXLFlBQVgsQ0FGZDtBQUdmLGNBQUssUUFBTCxDQUFjLFdBQWQsR0FBNEIsTUFBSyxLQUFMLENBQVcsV0FBWCxDQUhiOztLQUFuQjs7aUJBRkU7O2tEQVN3QixXQUFVO0FBQ2hDLHVDQVZGLCtEQVVrQyxVQUFoQyxDQURnQztBQUVoQyxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUFtQjtBQUMxQyxxQkFBSyxRQUFMLENBQWMsWUFBZCxHQUE2QixVQUFVLFlBQVYsQ0FEYTtBQUUxQyxxQkFBSyxRQUFMLENBQWMsV0FBZCxHQUE0QixVQUFVLFdBQVYsQ0FGYzthQUE5Qzs7Ozs7Ozs4Q0FRa0IsV0FBVTtBQUM1Qix1Q0FwQkYsMkRBb0I4QixVQUE1QixDQUQ0QjtBQUU1QixnQkFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLFVBQVUsSUFBVixFQUNuQixPQUFPLElBQVAsQ0FESjtBQUVBLG1CQUFPLEtBQVAsQ0FKNEI7Ozs7aUNBUXZCO0FBQ0wsZ0JBQUcsMkJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLGVBQVosRUFBMUI7QUFDQSxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEVBQTZCO0FBQzVCLG9CQUFJLFdBQVcsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixRQUF2QixDQUFnQyxLQUFoQyxDQURhO0FBRTVCLG9CQUFJLFNBQVMsaUNBQVQsQ0FGd0I7QUFHNUIsb0JBQUcsWUFBWSxTQUFTLE1BQVQsR0FBa0IsQ0FBbEIsRUFBb0I7QUFDL0Isd0JBQUksZUFBZSxLQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLFdBQTVCLEVBQWYsQ0FEMkI7QUFFL0Isd0JBQUcsU0FBUyxPQUFULENBQWlCLEdBQWpCLEtBQXlCLENBQUMsQ0FBRCxFQUFHOztBQUMzQixpQ0FBUywyQkFBRyxPQUFTLFlBQVQsRUFBdUIsV0FBVyxRQUFYLEVBQTFCLENBQVQsQ0FEMkI7cUJBQS9CLE1BRU07QUFDRixpQ0FBUyw2QkFBSyxPQUFTLFlBQVQsRUFBdUIsS0FBSyxRQUFMLEVBQTVCLENBQVQsQ0FERTtxQkFGTjtpQkFGSjtBQVFBLHVCQUFPLE1BQVAsQ0FYNEI7YUFBaEM7QUFhQSxnQkFBSSxnQkFBZ0IsS0FBSyxRQUFMLENBQWMsU0FBZCxDQUF3QixXQUF4QixDQUFvQyxJQUFwQyxFQUF5QyxJQUF6QyxDQUFoQixDQWZDO0FBZ0JMLG1CQUFTLHNDQUFNLE9BQU8sYUFBUCxFQUFzQixNQUFNLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixNQUFNLEtBQUssS0FBTCxDQUFXLElBQVg7QUFDeEcsMEJBQVUsS0FBSyxRQUFMLENBQWMsUUFBZDtBQUNWLDRCQUFZLEtBQUssUUFBTDtBQUNaLCtCQUFlLEtBQUssS0FBTCxDQUFXLGFBQVgsRUFIbEIsQ0FBVCxDQWhCSzs7OztXQTNCUDs7O0FBb0ROLDJCQUFpQiwwQkFBakIsQ0FBNEMsdUJBQTVDLEVBQW9FLElBQXBFO2tCQUNlIiwiZmlsZSI6IlRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuXG5jbGFzcyBUcmVlIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGFUeXBlc01hcCA9IHRoaXMucHJvcHMuZGF0YVR5cGVzTWFwO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmdldERhdGFUeXBlID0gdGhpcy5wcm9wcy5nZXREYXRhVHlwZTtcbiAgICB9XG5cbiAgICBcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwID0gbmV4dFByb3BzLmRhdGFUeXBlc01hcDtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0RGF0YVR5cGUgPSBuZXh0UHJvcHMuZ2V0RGF0YVR5cGU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGFsbG93ZSByZW5kZXIgb25seSB3aGVuIFJlYWN0IFBhcmVudCByZW5kZXIgaXMgY2FsbGVkIHdpdGggbmV3IGljb25Nb2RlIHZhbHVlXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIlRyZWUgLSByZW5kZXJcIik7XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuaWNvbk1vZGUuc3RhdGUpe1xuICAgICAgICAgICAgdmFyIGljb25OYW1lID0gdGhpcy5zZXR0aW5ncy5yb290Tm9kZS5pY29uTmFtZS5zdGF0ZTtcbiAgICAgICAgICAgIHZhciBpY29uVUkgPSA8c3Bhbi8+XG4gICAgICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB2YXIgaWNvblN0eWxlT2JqID0gdGhpcy5zZXR0aW5ncy5ub2RlSWNvblN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIi9cIikgPT0gLTEpeyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWNvblVJO1xuICAgICAgICB9XG4gICAgICAgIHZhciByb290Tm9kZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5yb290U3R5bGUuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKTtcbiAgICAgICAgcmV0dXJuICggPE5vZGUgc3R5bGU9e3Jvb3ROb2RlU3R5bGV9IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gbGFiZWw9e3RoaXMucHJvcHMubGFiZWx9IG5vZGVzPXt0aGlzLnByb3BzLm5vZGVzfSBpY29uPXt0aGlzLnByb3BzLmljb259XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnJvb3ROb2RlfVxuICAgICAgICAgICAgICAgICAgICB0cmVlQ29uZmlnPXt0aGlzLnNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICBjbGlja0NhbGxiYWNrPXt0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2t9IC8+XG4gICAgICAgICAgICAgICApO1xuICAgIH1cblxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5UcmVlQ29uZmlnXCIsVHJlZSk7XG5leHBvcnQgZGVmYXVsdCBUcmVlO1xuIl19
