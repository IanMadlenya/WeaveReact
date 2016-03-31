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
                clickCallback: this.props.clickCallback,
                enableSelectAll: this.props.enableSelectAll || this.settings.enableSelectAll.state });
        }
    }]);

    return Tree;
}(_AbstractComponent3.default);

_ComponentManager2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
exports.default = Tree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzs7QUFFRixhQUZFLElBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixNQUVpQjs7MkVBRmpCLGlCQUdRLFFBRFM7O0FBRWYsY0FBSyxRQUFMLENBQWMsWUFBZCxHQUE2QixNQUFLLEtBQUwsQ0FBVyxZQUFYLENBRmQ7QUFHZixjQUFLLFFBQUwsQ0FBYyxXQUFkLEdBQTRCLE1BQUssS0FBTCxDQUFXLFdBQVgsQ0FIYjs7S0FBbkI7O2lCQUZFOztrREFTd0IsV0FBVTtBQUNoQyx1Q0FWRiwrREFVa0MsVUFBaEMsQ0FEZ0M7QUFFaEMsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFBbUI7QUFDMUMscUJBQUssUUFBTCxDQUFjLFlBQWQsR0FBNkIsVUFBVSxZQUFWLENBRGE7QUFFMUMscUJBQUssUUFBTCxDQUFjLFdBQWQsR0FBNEIsVUFBVSxXQUFWLENBRmM7YUFBOUM7Ozs7OENBT2tCLFdBQVU7QUFDNUIsdUNBbkJGLDJEQW1COEIsVUFBNUIsQ0FENEI7QUFFNUIsZ0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixVQUFVLElBQVYsRUFDbkIsT0FBTyxJQUFQLENBREo7QUFFQSxtQkFBTyxLQUFQLENBSjRCOzs7O2lDQVF2QjtBQUNMLGdCQUFHLDJCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxlQUFaLEVBQTFCO0FBQ0EsZ0JBQUcsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixLQUF2QixFQUE2QjtBQUM1QixvQkFBSSxXQUFXLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsUUFBdkIsQ0FBZ0MsS0FBaEMsQ0FEYTtBQUU1QixvQkFBSSxTQUFTLDJDQUFULENBRndCO0FBRzVCLG9CQUFHLFlBQVksU0FBUyxNQUFULEdBQWtCLENBQWxCLEVBQW9CO0FBQy9CLHdCQUFJLGVBQWUsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixLQUE1QixDQURZO0FBRS9CLHdCQUFHLFNBQVMsT0FBVCxDQUFpQixHQUFqQixLQUF5QixDQUFDLENBQUQsRUFBRzs7QUFDM0IsaUNBQVMscUNBQUcsT0FBUyxZQUFULEVBQXVCLFdBQVcsUUFBWCxFQUExQixDQUFULENBRDJCO3FCQUEvQixNQUVNO0FBQ0YsaUNBQVMsdUNBQUssT0FBUyxZQUFULEVBQXVCLEtBQUssUUFBTCxFQUE1QixDQUFULENBREU7cUJBRk47aUJBRko7QUFRQSx1QkFBTyxNQUFQLENBWDRCO2FBQWhDOztBQWNBLGdCQUFJLGdCQUFnQixLQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLFdBQXhCLENBQW9DLElBQXBDLEVBQXlDLElBQXpDLENBQWhCLENBaEJDO0FBaUJMLG1CQUFTLGdEQUFNLE9BQU8sYUFBUDtBQUNILHNCQUFNLEtBQUssS0FBTCxDQUFXLElBQVg7QUFDTix1QkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYO0FBQ1AsdUJBQU8sS0FBSyxLQUFMLENBQVcsS0FBWDtBQUNQLHNCQUFNLEtBQUssS0FBTCxDQUFXLElBQVg7QUFDTiwrQkFBZSxLQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLEtBQTVCO0FBQ2YsMEJBQVUsS0FBSyxRQUFMLENBQWMsUUFBZDtBQUNWLDRCQUFZLEtBQUssUUFBTDtBQUNaLCtCQUFlLEtBQUssS0FBTCxDQUFXLGFBQVg7QUFDZixpQ0FBaUIsS0FBSyxLQUFMLENBQVcsZUFBWCxJQUE4QixLQUFLLFFBQUwsQ0FBYyxlQUFkLENBQThCLEtBQTlCLEVBVGxELENBQVQsQ0FqQks7Ozs7V0ExQlA7OztBQTBETiwyQkFBaUIsMEJBQWpCLENBQTRDLHVCQUE1QyxFQUFvRSxJQUFwRTtrQkFDZSIsImZpbGUiOiJUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5cbmNsYXNzIFRyZWUgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwID0gdGhpcy5wcm9wcy5kYXRhVHlwZXNNYXA7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0RGF0YVR5cGUgPSB0aGlzLnByb3BzLmdldERhdGFUeXBlO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGFUeXBlc01hcCA9IG5leHRQcm9wcy5kYXRhVHlwZXNNYXA7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmdldERhdGFUeXBlID0gbmV4dFByb3BzLmdldERhdGFUeXBlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiVHJlZSAtIHJlbmRlclwiKTtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5pY29uTW9kZS5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLnJvb3ROb2RlLmljb25OYW1lLnN0YXRlO1xuICAgICAgICAgICAgdmFyIGljb25VSSA9IDxzcGFuLz5cbiAgICAgICAgICAgIGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHZhciBpY29uU3R5bGVPYmogPSB0aGlzLnNldHRpbmdzLm5vZGVJY29uU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIi9cIikgPT0gLTEpeyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaWNvblVJO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJvb3ROb2RlU3R5bGUgPSB0aGlzLnNldHRpbmdzLnJvb3RTdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpO1xuICAgICAgICByZXR1cm4gKCA8Tm9kZSBzdHlsZT17cm9vdE5vZGVTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZXM9e3RoaXMucHJvcHMubm9kZXN9XG4gICAgICAgICAgICAgICAgICAgIGljb249e3RoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZUxheW91dD17dGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5yb290Tm9kZX1cbiAgICAgICAgICAgICAgICAgICAgdHJlZUNvbmZpZz17dGhpcy5zZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrfSBcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlU2VsZWN0QWxsPXt0aGlzLnByb3BzLmVuYWJsZVNlbGVjdEFsbCB8fCB0aGlzLnNldHRpbmdzLmVuYWJsZVNlbGVjdEFsbC5zdGF0ZX0vPlxuICAgICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuVHJlZUNvbmZpZ1wiLFRyZWUpO1xuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiJdfQ==
