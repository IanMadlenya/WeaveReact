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
                icon: this.props.icon, level: 0,
                reverseLayout: this.settings.reverseLayout.state,
                settings: this.settings.rootNode,
                treeConfig: this.settings,
                onClick: this.props.onClick,
                onOpen: this.props.onOpen,
                onChange: this.props.onChange
            });
        }
    }]);

    return Tree;
}(_AbstractComponent3.default);

_ComponentManager2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
exports.default = Tree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzs7QUFFRixhQUZFLElBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixNQUVpQjs7MkVBRmpCLGlCQUdRLFFBRFM7O0FBRWYsY0FBSyxRQUFMLENBQWMsWUFBZCxHQUE2QixNQUFLLEtBQUwsQ0FBVyxZQUFYLENBRmQ7QUFHZixjQUFLLFFBQUwsQ0FBYyxXQUFkLEdBQTRCLE1BQUssS0FBTCxDQUFXLFdBQVgsQ0FIYjs7O0tBQW5COztpQkFGRTs7a0RBVXdCLFdBQzFCO0FBQ0ksdUNBWkYsK0RBWWtDLFVBQWhDLENBREo7QUFFSSxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUMzQjtBQUNJLHFCQUFLLFFBQUwsQ0FBYyxZQUFkLEdBQTZCLFVBQVUsWUFBVixDQURqQztBQUVJLHFCQUFLLFFBQUwsQ0FBYyxXQUFkLEdBQTRCLFVBQVUsV0FBVixDQUZoQzthQURBOzs7OzhDQVFrQixXQUN0QjtBQUNJLHVDQXZCRiwyREF1QjhCLFVBQTVCLENBREo7QUFFSSxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLFVBQVUsSUFBVixFQUNuQixPQUFPLElBQVAsQ0FESjtBQUVBLG1CQUFPLEtBQVAsQ0FKSjs7OztpQ0FRUztBQUNMLGdCQUFHLDJCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxlQUFaLEVBQTFCO0FBQ0EsZ0JBQUcsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixFQUNIO0FBQ0ksb0JBQUksV0FBVyxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFFBQXZCLENBQWdDLEtBQWhDLENBRG5CO0FBRUksb0JBQUksU0FBUywyQ0FBVCxDQUZSO0FBR0ksb0JBQUcsWUFBWSxTQUFTLE1BQVQsR0FBa0IsQ0FBbEIsRUFDZjtBQUNJLHdCQUFJLGVBQWUsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixLQUE1QixDQUR2QjtBQUVJLHdCQUFHLFNBQVMsT0FBVCxDQUFpQixHQUFqQixLQUF5QixDQUFDLENBQUQsRUFBRzs7QUFDM0IsaUNBQVMscUNBQUcsT0FBUyxZQUFULEVBQXVCLFdBQVcsUUFBWCxFQUExQixDQUFULENBRDJCO3FCQUEvQixNQUVNO0FBQ0YsaUNBQVMsdUNBQUssT0FBUyxZQUFULEVBQXVCLEtBQUssUUFBTCxFQUE1QixDQUFULENBREU7cUJBRk47aUJBSEo7QUFTQSx1QkFBTyxNQUFQLENBWko7YUFEQTs7QUFnQkEsZ0JBQUksZ0JBQWdCLEtBQUssUUFBTCxDQUFjLFNBQWQsQ0FBd0IsV0FBeEIsQ0FBb0MsSUFBcEMsRUFBeUMsSUFBekMsQ0FBaEIsQ0FsQkM7QUFtQkwsbUJBQVMsZ0RBQU0sT0FBTyxhQUFQO0FBQ0gsc0JBQU0sS0FBSyxLQUFMLENBQVcsSUFBWDtBQUNOLHVCQUFPLEtBQUssS0FBTCxDQUFXLEtBQVg7QUFDUCx1QkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYO0FBQ1Asc0JBQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixPQUFPLENBQVA7QUFDdkIsK0JBQWUsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixLQUE1QjtBQUNmLDBCQUFVLEtBQUssUUFBTCxDQUFjLFFBQWQ7QUFDViw0QkFBWSxLQUFLLFFBQUw7QUFDWix5QkFBUyxLQUFLLEtBQUwsQ0FBVyxPQUFYO0FBQ1Qsd0JBQVEsS0FBSyxLQUFMLENBQVcsTUFBWDtBQUNSLDBCQUFVLEtBQUssS0FBTCxDQUFXLFFBQVg7YUFWYixDQUFULENBbkJLOzs7O1dBOUJQOzs7QUFrRU4sMkJBQWlCLDBCQUFqQixDQUE0Qyx1QkFBNUMsRUFBb0UsSUFBcEU7a0JBQ2UiLCJmaWxlIjoiVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuXG5jbGFzcyBUcmVlIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGFUeXBlc01hcCA9IHRoaXMucHJvcHMuZGF0YVR5cGVzTWFwO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmdldERhdGFUeXBlID0gdGhpcy5wcm9wcy5nZXREYXRhVHlwZTtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcylcbiAgICB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGFUeXBlc01hcCA9IG5leHRQcm9wcy5kYXRhVHlwZXNNYXA7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmdldERhdGFUeXBlID0gbmV4dFByb3BzLmdldERhdGFUeXBlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKVxuICAgIHtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiVHJlZSAtIHJlbmRlclwiKTtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5pY29uTW9kZS5zdGF0ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGljb25OYW1lID0gdGhpcy5zZXR0aW5ncy5yb290Tm9kZS5pY29uTmFtZS5zdGF0ZTtcbiAgICAgICAgICAgIHZhciBpY29uVUkgPSA8c3Bhbi8+XG4gICAgICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBpY29uU3R5bGVPYmogPSB0aGlzLnNldHRpbmdzLm5vZGVJY29uU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIi9cIikgPT0gLTEpeyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWNvblVJO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJvb3ROb2RlU3R5bGUgPSB0aGlzLnNldHRpbmdzLnJvb3RTdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpO1xuICAgICAgICByZXR1cm4gKCA8Tm9kZSBzdHlsZT17cm9vdE5vZGVTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZXM9e3RoaXMucHJvcHMubm9kZXN9XG4gICAgICAgICAgICAgICAgICAgIGljb249e3RoaXMucHJvcHMuaWNvbn0gbGV2ZWw9ezB9XG4gICAgICAgICAgICAgICAgICAgIHJldmVyc2VMYXlvdXQ9e3RoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3Mucm9vdE5vZGV9XG4gICAgICAgICAgICAgICAgICAgIHRyZWVDb25maWc9e3RoaXMuc2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICAgICAgb25PcGVuPXt0aGlzLnByb3BzLm9uT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICApO1xuICAgIH1cblxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5UcmVlQ29uZmlnXCIsVHJlZSk7XG5leHBvcnQgZGVmYXVsdCBUcmVlO1xuIl19