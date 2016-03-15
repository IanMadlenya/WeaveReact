"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Tree = require("../../components/tree/Tree");

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeSection = function (_React$Component) {
    _inherits(TreeSection, _React$Component);

    function TreeSection(props) {
        _classCallCheck(this, TreeSection);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TreeSection).call(this, props));
    }

    _createClass(TreeSection, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            Weave.getCallbacks(this.props.tree).addGroupedCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            Weave.getCallbacks(this.props.tree).removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.tree !== nextProps.tree) {
                // tree value will swithc between null and sessionstate tree, when new file is loaded
                if (this.props.tree) Weave.getCallbacks(this.props.tree).removeCallback(this, this.forceUpdate);
                if (nextProps.tree) {
                    Weave.getCallbacks(nextProps.tree).addGroupedCallback(this, this.forceUpdate);
                } else {
                    this.props.settings.treeConfig.rootNode.reset();
                }
            }
        }
    }, {
        key: "render",
        value: function render() {

            var treeUI = "";
            if (this.props.tree) {
                treeUI = _react2.default.createElement(_Tree2.default, { data: this.props.tree, label: "label", nodes: "children", clickCallback: this.props.nodeClick, settings: this.props.settings.treeConfig, dataTypesMap: this.props.settings.dataTypesMap, getDataType: this.props.settings.getDataType });
            }

            var treeContainerStyle = {
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
                { style: treeContainerStyle },
                treeUI
            );
        }
    }]);

    return TreeSection;
}(_react2.default.Component);

exports.default = TreeSection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWVTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzs7QUFFSixhQUZJLFdBRUosQ0FBWSxLQUFaLEVBQW1COzhCQUZmLGFBRWU7O3NFQUZmLHdCQUdJLFFBRFc7S0FBbkI7O2lCQUZJOzs0Q0FPZTtBQUNqQixrQkFBTSxZQUFOLENBQW1CLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBbkIsQ0FBb0Msa0JBQXBDLENBQXVELElBQXZELEVBQTZELEtBQUssV0FBTCxDQUE3RCxDQURpQjs7OzsrQ0FJSztBQUN0QixrQkFBTSxZQUFOLENBQW1CLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBbkIsQ0FBb0MsY0FBcEMsQ0FBbUQsSUFBbkQsRUFBeUQsS0FBSyxXQUFMLENBQXpELENBRHNCOzs7O2tEQUlJLFdBQVU7QUFDaEMsZ0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixVQUFVLElBQVYsRUFBZTs7QUFDakMsb0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFnQixNQUFNLFlBQU4sQ0FBbUIsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFuQixDQUFvQyxjQUFwQyxDQUFtRCxJQUFuRCxFQUF5RCxLQUFLLFdBQUwsQ0FBekQsQ0FBbkI7QUFDRCxvQkFBRyxVQUFVLElBQVYsRUFBZTtBQUNkLDBCQUFNLFlBQU4sQ0FBbUIsVUFBVSxJQUFWLENBQW5CLENBQW1DLGtCQUFuQyxDQUFzRCxJQUF0RCxFQUE0RCxLQUFLLFdBQUwsQ0FBNUQsQ0FEYztpQkFBbEIsTUFHSTtBQUNBLHlCQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFVBQXBCLENBQStCLFFBQS9CLENBQXdDLEtBQXhDLEdBREE7aUJBSEo7YUFGSjs7OztpQ0FhRzs7QUFFUCxnQkFBSSxTQUFTLEVBQVQsQ0FGRztBQUdQLGdCQUFHLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBZ0I7QUFDZix5QkFBUyxnREFBTSxNQUFNLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsT0FBTSxPQUFOLEVBQWMsT0FBTSxVQUFOLEVBQWtCLGVBQWUsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUFzQixVQUFVLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsVUFBcEIsRUFBZ0MsY0FBYyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFlBQXBCLEVBQWtDLGFBQWEsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixXQUFwQixFQUF6TSxDQUFULENBRGU7YUFBbkI7O0FBSUEsZ0JBQUkscUJBQXFCO0FBQ3JCLHVCQUFNLE1BQU47QUFDQSx3QkFBTyxNQUFQO0FBQ0EsNkJBQVksT0FBWjtBQUNBLDhCQUFhLEtBQWI7QUFDQSw2QkFBWSxLQUFaO0FBQ0EsNkJBQVksTUFBWjtBQUNBLDJCQUFXLFFBQVg7QUFDQSwyQkFBVyxRQUFYO0FBQ0EseUJBQVEsS0FBUjthQVRBLENBUEc7O0FBbUJQLG1CQUFTOztrQkFBSyxPQUFPLGtCQUFQLEVBQUw7Z0JBQ2dCLE1BRGhCO2FBQVQsQ0FuQk87Ozs7V0E3Qkw7RUFBb0IsZ0JBQU0sU0FBTjs7a0JBdURYIiwiZmlsZSI6IlRyZWVTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJlZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90cmVlL1RyZWVcIjtcblxuXG5jbGFzcyBUcmVlU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMucHJvcHMudHJlZSkuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnByb3BzLnRyZWUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudHJlZSAhPT0gbmV4dFByb3BzLnRyZWUpey8vIHRyZWUgdmFsdWUgd2lsbCBzd2l0aGMgYmV0d2VlbiBudWxsIGFuZCBzZXNzaW9uc3RhdGUgdHJlZSwgd2hlbiBuZXcgZmlsZSBpcyBsb2FkZWRcbiAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWUpV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMucHJvcHMudHJlZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICBpZihuZXh0UHJvcHMudHJlZSl7XG4gICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG5leHRQcm9wcy50cmVlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0dGluZ3MudHJlZUNvbmZpZy5yb290Tm9kZS5yZXNldCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgdHJlZVVJID0gXCJcIjtcbiAgICBpZih0aGlzLnByb3BzLnRyZWUpe1xuICAgICAgICB0cmVlVUkgPSA8VHJlZSBkYXRhPXt0aGlzLnByb3BzLnRyZWV9IGxhYmVsPVwibGFiZWxcIiBub2Rlcz1cImNoaWxkcmVuXCIgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMubm9kZUNsaWNrfSBzZXR0aW5ncz17dGhpcy5wcm9wcy5zZXR0aW5ncy50cmVlQ29uZmlnfSBkYXRhVHlwZXNNYXA9e3RoaXMucHJvcHMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwfSBnZXREYXRhVHlwZT17dGhpcy5wcm9wcy5zZXR0aW5ncy5nZXREYXRhVHlwZX0vPlxuICAgIH1cblxuICAgIHZhciB0cmVlQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXG4gICAgICAgIGJvcmRlclN0eWxlOlwic29saWRcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOlwiNHB4XCIsXG4gICAgICAgIGJvcmRlcldpZHRoOlwiMXB4XCIsXG4gICAgICAgIGJvcmRlckNvbG9yOlwiZ3JleVwiLFxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICBvdmVyZmxvd1g6ICdzY3JvbGwnLFxuICAgICAgICBwYWRkaW5nOlwiNHB4XCJcbiAgICB9XG5cbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXt0cmVlQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVlVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVHJlZVNlY3Rpb247XG4iXX0=
