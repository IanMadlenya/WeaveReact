"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _Link = require("./Link");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));

        _this.settings = _this.props.settings;

        return _this;
    }

    _createClass(List, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
            this.settings.space.addImmediateCallback(this, this.forceUpdate);
            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
            this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
            this.settings.links.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
            this.settings.space.removeCallback(this, this.forceUpdate);
            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
            this.settings.activePage.removeCallback(this, this.forceUpdate);
            this.settings.links.childListCallbacks.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.dock !== nextProps.dock) {
                return true;
            } else if (this.props.position !== nextProps.position) {
                return true;
            } else if (this.props.useCSS !== nextProps.useCSS) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var navLinks = _react2.default.createElement("div", null);

            if (this.settings.enable.value) {
                if (!this.props.useCSS) {
                    var styleObject = this.settings.style.getStyleFor(null);
                    if (this.props.dock !== "right" && this.props.dock !== "left" && this.settings.rightAlign) {
                        styleObject["justifyContent"] = "flex-end";
                        styleObject["marginRight"] = "auto";
                    }
                    styleObject = _Style2.default.appendVendorPrefix(styleObject);
                }
                var linkStyleObject = {};
                var iconOnly = false;
                var space = this.settings.space.value;
                if (this.props.dock === "right" || this.props.dock === "left") {
                    iconOnly = true;
                    linkStyleObject["marginBottom"] = space;
                } else if (this.props.dock === "top" || this.props.dock === "bottom") {
                    iconOnly = false;
                    linkStyleObject["marginRight"] = space;
                }

                var links = this.settings.links.getNames().map(function (linkName, index) {

                    //var linkablePlaceHolder = this.links.getObject(linkName);
                    //var ToolClass = linkablePlaceHolder.getClass();
                    var linkConfig = this.settings.links.getObject(linkName);

                    if (linkName === this.settings.activePage.value) {
                        return _react2.default.createElement(_Link2.default, { style: linkStyleObject, key: index, iconOnly: iconOnly, isActive: true, pageName: linkName, settings: linkConfig });
                    } else {
                        return _react2.default.createElement(_Link2.default, { style: linkStyleObject, key: index, iconOnly: iconOnly, isActive: false, pageName: linkName, settings: linkConfig });
                    }
                }.bind(this));

                styleObject = _Style2.default.appendVendorPrefix(styleObject);
                if (this.props.useCSS) navLinks = _react2.default.createElement(
                    "ul",
                    { className: this.props.css },
                    links
                );else navLinks = _react2.default.createElement(
                    "ul",
                    { style: styleObject },
                    links
                );
            }

            return navLinks;
        }
    }]);

    return List;
}(_react2.default.Component);

Weave.registerClass("weavereact.navbar.List", List, [weavejs.api.core.ILinkableObject]);
exports.default = List;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzs7QUFFRixhQUZFLElBRUYsQ0FBWSxLQUFaLEVBQWtCOzhCQUZoQixNQUVnQjs7MkVBRmhCLGlCQUdRLFFBRFE7O0FBRWQsY0FBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQVgsQ0FGRjs7O0tBQWxCOztpQkFGRTs7NENBUWlCO0FBQ2YsaUJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsb0JBQXJCLENBQTBDLElBQTFDLEVBQWdELEtBQUssV0FBTCxDQUFoRCxDQURlO0FBRWYsa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW5CLENBQXdDLG9CQUF4QyxDQUE2RCxJQUE3RCxFQUFtRSxLQUFLLFdBQUwsQ0FBbkUsQ0FGZTtBQUdmLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLG9CQUFwQixDQUF5QyxJQUF6QyxFQUErQyxLQUFLLFdBQUwsQ0FBL0MsQ0FIZTtBQUlmLGlCQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLG9CQUF6QixDQUE4QyxJQUE5QyxFQUFvRCxLQUFLLFdBQUwsQ0FBcEQsQ0FKZTtBQUtmLGlCQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLG9CQUF6QixDQUE4QyxJQUE5QyxFQUFvRCxLQUFLLFdBQUwsQ0FBcEQsQ0FMZTtBQU1mLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLGtCQUFwQixDQUF1QyxvQkFBdkMsQ0FBNEQsSUFBNUQsRUFBa0UsS0FBSyxXQUFMLENBQWxFLENBTmU7Ozs7K0NBV0c7QUFDbEIsaUJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsY0FBckIsQ0FBb0MsSUFBcEMsRUFBMEMsS0FBSyxXQUFMLENBQTFDLENBRGtCO0FBRWxCLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFuQixDQUF3QyxjQUF4QyxDQUF1RCxJQUF2RCxFQUE2RCxLQUFLLFdBQUwsQ0FBN0QsQ0FGa0I7QUFHbEIsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsY0FBcEIsQ0FBbUMsSUFBbkMsRUFBeUMsS0FBSyxXQUFMLENBQXpDLENBSGtCO0FBSWxCLGlCQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLGNBQXpCLENBQXdDLElBQXhDLEVBQThDLEtBQUssV0FBTCxDQUE5QyxDQUprQjtBQUtsQixpQkFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixjQUF6QixDQUF3QyxJQUF4QyxFQUE4QyxLQUFLLFdBQUwsQ0FBOUMsQ0FMa0I7QUFNbEIsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0Isa0JBQXBCLENBQXVDLGNBQXZDLENBQXNELElBQXRELEVBQTRELEtBQUssV0FBTCxDQUE1RCxDQU5rQjs7Ozs4Q0FTQSxXQUFVO0FBQzVCLGdCQUFHLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsVUFBVSxJQUFWLEVBQWU7QUFDbEMsdUJBQU8sSUFBUCxDQURrQzthQUF0QyxNQUVNLElBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFBbUI7QUFDaEQsdUJBQU8sSUFBUCxDQURnRDthQUE5QyxNQUVBLElBQUcsS0FBSyxLQUFMLENBQVcsTUFBWCxLQUFzQixVQUFVLE1BQVYsRUFBaUI7QUFDNUMsdUJBQU8sSUFBUCxDQUQ0QzthQUExQyxNQUVEO0FBQ0QsdUJBQU8sS0FBUCxDQURDO2FBRkM7Ozs7aUNBUUQ7QUFDTCxnQkFBSSxXQUFXLDBDQUFYLENBREM7O0FBR0wsZ0JBQUcsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUEyQjtBQUMxQixvQkFBRyxDQUFDLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBa0I7QUFDbEIsd0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLENBQWdDLElBQWhDLENBQWQsQ0FEYztBQUVsQix3QkFBRyxJQUFDLENBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsT0FBcEIsSUFBaUMsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixNQUFwQixJQUErQixLQUFLLFFBQUwsQ0FBYyxVQUFkLEVBQXlCO0FBQ3pGLG9DQUFZLGdCQUFaLElBQWdDLFVBQWhDLENBRHlGO0FBRXpGLG9DQUFZLGFBQVosSUFBNkIsTUFBN0IsQ0FGeUY7cUJBQTdGO0FBSUEsa0NBQWMsZ0JBQU0sa0JBQU4sQ0FBeUIsV0FBekIsQ0FBZCxDQU5rQjtpQkFBdEI7QUFRQSxvQkFBSSxrQkFBZ0IsRUFBaEIsQ0FUc0I7QUFVMUIsb0JBQUksV0FBVyxLQUFYLENBVnNCO0FBVzFCLG9CQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQVhjO0FBWTFCLG9CQUFHLElBQUMsQ0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixPQUFwQixJQUFpQyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLE1BQXBCLEVBQTRCO0FBQzdELCtCQUFXLElBQVgsQ0FENkQ7QUFFN0Qsb0NBQWdCLGNBQWhCLElBQWtDLEtBQWxDLENBRjZEO2lCQUFqRSxNQUlLLElBQUcsSUFBQyxDQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLEtBQXBCLElBQStCLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsUUFBcEIsRUFBOEI7QUFDbEUsK0JBQVcsS0FBWCxDQURrRTtBQUVsRSxvQ0FBZ0IsYUFBaEIsSUFBaUMsS0FBakMsQ0FGa0U7aUJBQWpFOztBQUtMLG9CQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixRQUFwQixHQUErQixHQUEvQixDQUFtQyxVQUFTLFFBQVQsRUFBa0IsS0FBbEIsRUFBd0I7Ozs7QUFJbkUsd0JBQUksYUFBYSxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFNBQXBCLENBQThCLFFBQTlCLENBQWIsQ0FKK0Q7O0FBTW5FLHdCQUFHLGFBQWEsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixLQUF6QixFQUFnQztBQUM1QywrQkFBUSxnREFBTSxPQUFPLGVBQVAsRUFBd0IsS0FBSyxLQUFMLEVBQVksVUFBVSxRQUFWLEVBQW9CLFVBQVUsSUFBVixFQUFnQixVQUFVLFFBQVYsRUFBb0IsVUFBVSxVQUFWLEVBQWxHLENBQVIsQ0FENEM7cUJBQWhELE1BR0k7QUFDQSwrQkFBUSxnREFBTSxPQUFPLGVBQVAsRUFBd0IsS0FBSyxLQUFMLEVBQVksVUFBVSxRQUFWLEVBQW9CLFVBQVUsS0FBVixFQUFpQixVQUFVLFFBQVYsRUFBb0IsVUFBVSxVQUFWLEVBQW5HLENBQVIsQ0FEQTtxQkFISjtpQkFOMkMsQ0FZN0MsSUFaNkMsQ0FZeEMsSUFad0MsQ0FBbkMsQ0FBUixDQXJCc0I7O0FBbUMxQiw4QkFBYyxnQkFBTSxrQkFBTixDQUF5QixXQUF6QixDQUFkLENBbkMwQjtBQW9DMUIsb0JBQUcsS0FBSyxLQUFMLENBQVcsTUFBWCxFQUNDLFdBQVc7O3NCQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsR0FBWCxFQUFmO29CQUFnQyxLQUFoQztpQkFBWCxDQURKLEtBR0ksV0FBVzs7c0JBQUksT0FBTyxXQUFQLEVBQUo7b0JBQXlCLEtBQXpCO2lCQUFYLENBSEo7YUFwQ0o7O0FBMENBLG1CQUFRLFFBQVIsQ0E3Q0s7Ozs7V0F6Q1A7RUFBYSxnQkFBTSxTQUFOOztBQTBGbkIsTUFBTSxhQUFOLENBQW9CLHdCQUFwQixFQUE4QyxJQUE5QyxFQUFtRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBcEQ7a0JBQ2UiLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5cblxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5saW5rcy5jaGlsZExpc3RDYWxsYmFja3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxpbmtzLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51c2VDU1MgIT09IG5leHRQcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG5hdkxpbmtzID0gPGRpdi8+O1xuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIGlmKCF0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsKVxuICAgICAgICAgICAgICAgIGlmKCh0aGlzLnByb3BzLmRvY2sgIT09IFwicmlnaHRcIikgJiYgKHRoaXMucHJvcHMuZG9jayAhPT0gXCJsZWZ0XCIpICYmIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbil7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wianVzdGlmeUNvbnRlbnRcIl0gPSBcImZsZXgtZW5kXCI7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3QgPSBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpbmtTdHlsZU9iamVjdD17fTtcbiAgICAgICAgICAgIHZhciBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHNwYWNlID0gdGhpcy5zZXR0aW5ncy5zcGFjZS52YWx1ZTtcbiAgICAgICAgICAgIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwicmlnaHRcIikgfHwgKHRoaXMucHJvcHMuZG9jayA9PT0gXCJsZWZ0XCIpKXtcbiAgICAgICAgICAgICAgICBpY29uT25seSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGlua1N0eWxlT2JqZWN0W1wibWFyZ2luQm90dG9tXCJdID0gc3BhY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwidG9wXCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwiYm90dG9tXCIpKXtcbiAgICAgICAgICAgICAgICBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxpbmtTdHlsZU9iamVjdFtcIm1hcmdpblJpZ2h0XCJdID0gc3BhY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBsaW5rcyA9IHRoaXMuc2V0dGluZ3MubGlua3MuZ2V0TmFtZXMoKS5tYXAoZnVuY3Rpb24obGlua05hbWUsaW5kZXgpe1xuXG4gICAgICAgICAgICAgICAgLy92YXIgbGlua2FibGVQbGFjZUhvbGRlciA9IHRoaXMubGlua3MuZ2V0T2JqZWN0KGxpbmtOYW1lKTtcbiAgICAgICAgICAgICAgICAvL3ZhciBUb29sQ2xhc3MgPSBsaW5rYWJsZVBsYWNlSG9sZGVyLmdldENsYXNzKCk7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmtDb25maWcgPSB0aGlzLnNldHRpbmdzLmxpbmtzLmdldE9iamVjdChsaW5rTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZihsaW5rTmFtZSA9PT0gdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPExpbmsgc3R5bGU9e2xpbmtTdHlsZU9iamVjdH0ga2V5PXtpbmRleH0gaWNvbk9ubHk9e2ljb25Pbmx5fSBpc0FjdGl2ZT17dHJ1ZX0gcGFnZU5hbWU9e2xpbmtOYW1lfSBzZXR0aW5ncz17bGlua0NvbmZpZ30gLz4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxMaW5rIHN0eWxlPXtsaW5rU3R5bGVPYmplY3R9IGtleT17aW5kZXh9IGljb25Pbmx5PXtpY29uT25seX0gaXNBY3RpdmU9e2ZhbHNlfSBwYWdlTmFtZT17bGlua05hbWV9IHNldHRpbmdzPXtsaW5rQ29uZmlnfS8+KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICBzdHlsZU9iamVjdCA9IFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdCk7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUylcbiAgICAgICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBjbGFzc05hbWU9e3RoaXMucHJvcHMuY3NzfT57bGlua3N9PC91bD47XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbmF2TGlua3MgPSA8dWwgc3R5bGU9e3N0eWxlT2JqZWN0fT57bGlua3N9PC91bD47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5hdkxpbmtzKTtcbiAgICB9XG5cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5MaXN0XCIsIExpc3QsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl19
