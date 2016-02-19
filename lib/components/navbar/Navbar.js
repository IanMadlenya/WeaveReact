"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _Brand = require("./Brand");

var _Brand2 = _interopRequireDefault(_Brand);

var _List = require("./List");

var _List2 = _interopRequireDefault(_List);

var _Form = require("./Form");

var _Form2 = _interopRequireDefault(_Form);

var _Link = require("./Link");

var _Link2 = _interopRequireDefault(_Link);

var _Config = require("./Config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _Config.NavbarConfig();
        _this.getStyle = _this.getStyle.bind(_this);
        return _this;
    }

    _createClass(Navbar, [{
        key: "getStyle",
        value: function getStyle() {

            var styleObject = this.settings.style.getStyleFor(null);
            if (styleObject["position"] === "fixed") {
                if (this.settings.dock.value === "top") {
                    styleObject["top"] = "0";
                } else if (this.settings.dock.value === "bottom") {
                    styleObject["bottom"] = "0";
                } else if (this.settings.dock.value === "right") {
                    styleObject["right"] = "0";
                    styleObject["flexDirection"] = "column";
                    styleObject["width"] = "5%";
                    styleObject["height"] = "100%";
                } else if (this.settings.dock.value === "left") {
                    styleObject["left"] = "0";
                    styleObject["flexDirection"] = "column";
                    styleObject["width"] = "5%";
                    styleObject["height"] = "100%";
                }
            }
            return _Style2.default.appendVendorPrefix(styleObject);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
            this.settings.CSS.addImmediateCallback(this, this.forceUpdate);
            this.settings.useCSS.addImmediateCallback(this, this.forceUpdate);
            this.settings.dock.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
            this.settings.CSS.removeCallback(this, this.forceUpdate);
            this.settings.useCSS.removeCallback(this, this.forceUpdate);
            this.settings.dock.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {}
    }, {
        key: "render",
        value: function render() {

            var styleObj = this.getStyle();
            var pos = this.settings.style.position.value;
            var dock = this.settings.dock.value;
            var cssObj = null;
            if (this.settings.useCSS.value) {
                cssObj = this.settings.CSS.state;
                var brandCSS = cssObj.brand;
                var listCSS = cssObj.list;
                var formCSS = cssObj.form;
                return _react2.default.createElement(
                    "nav",
                    { className: cssObj.navbar },
                    _react2.default.createElement(_Brand2.default, { css: brandCSS, useCSS: this.settings.useCSS.value, settings: this.settings.brand, dock: dock, position: pos }),
                    _react2.default.createElement(_List2.default, { css: listCSS, useCSS: this.settings.useCSS.value, settings: this.settings.navList, dock: dock, position: pos }),
                    _react2.default.createElement(_Form2.default, { css: formCSS, useCSS: this.settings.useCSS.value, settings: this.settings.form, dock: dock, position: pos })
                );
            } else {
                return _react2.default.createElement(
                    "nav",
                    { style: styleObj },
                    _react2.default.createElement(_Brand2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.brand, dock: dock, position: pos }),
                    _react2.default.createElement(_List2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.navList, dock: dock, position: pos }),
                    _react2.default.createElement(_Form2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.form, dock: dock, position: pos })
                );
            }
        }
    }]);

    return Navbar;
}(_react2.default.Component);

Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

exports.default = Navbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTTTs7O0FBRUYsYUFGRSxNQUVGLENBQVksS0FBWixFQUFrQjs4QkFGaEIsUUFFZ0I7OzJFQUZoQixtQkFHUSxRQURROztBQUVkLGNBQUssUUFBTCxHQUFnQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsMEJBQTVDLENBRkY7QUFHZCxjQUFLLFFBQUwsR0FBZ0IsTUFBSyxRQUFMLENBQWMsSUFBZCxPQUFoQixDQUhjOztLQUFsQjs7aUJBRkU7O21DQVNZOztBQUVWLGdCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixDQUFnQyxJQUFoQyxDQUFkLENBRk07QUFHVCxnQkFBRyxZQUFZLFVBQVosTUFBNEIsT0FBNUIsRUFBb0M7QUFDbkMsb0JBQUcsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixLQUE2QixLQUE3QixFQUFtQztBQUNuQyxnQ0FBWSxLQUFaLElBQXFCLEdBQXJCLENBRG1DO2lCQUF0QyxNQUVNLElBQUcsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixLQUE2QixRQUE3QixFQUFzQztBQUM1QyxnQ0FBWSxRQUFaLElBQXdCLEdBQXhCLENBRDRDO2lCQUF6QyxNQUVBLElBQUcsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixLQUE2QixPQUE3QixFQUFxQztBQUMzQyxnQ0FBWSxPQUFaLElBQXVCLEdBQXZCLENBRDJDO0FBRTNDLGdDQUFZLGVBQVosSUFBK0IsUUFBL0IsQ0FGMkM7QUFHM0MsZ0NBQVksT0FBWixJQUF1QixJQUF2QixDQUgyQztBQUkzQyxnQ0FBWSxRQUFaLElBQXdCLE1BQXhCLENBSjJDO2lCQUF4QyxNQU1BLElBQUcsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixLQUE2QixNQUE3QixFQUFvQztBQUMxQyxnQ0FBWSxNQUFaLElBQXNCLEdBQXRCLENBRDBDO0FBRTFDLGdDQUFZLGVBQVosSUFBK0IsUUFBL0IsQ0FGMEM7QUFHMUMsZ0NBQVksT0FBWixJQUF1QixJQUF2QixDQUgwQztBQUkxQyxnQ0FBWSxRQUFaLElBQXdCLE1BQXhCLENBSjBDO2lCQUF2QzthQVhWO0FBa0JELG1CQUFPLGdCQUFNLGtCQUFOLENBQXlCLFdBQXpCLENBQVAsQ0FyQlU7Ozs7NENBeUJLO0FBQ2Ysa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW5CLENBQXdDLG9CQUF4QyxDQUE2RCxJQUE3RCxFQUFrRSxLQUFLLFdBQUwsQ0FBbEUsQ0FEZTtBQUVmLGlCQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLG9CQUFsQixDQUF1QyxJQUF2QyxFQUE0QyxLQUFLLFdBQUwsQ0FBNUMsQ0FGZTtBQUdmLGlCQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLG9CQUFyQixDQUEwQyxJQUExQyxFQUErQyxLQUFLLFdBQUwsQ0FBL0MsQ0FIZTtBQUlmLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLG9CQUFuQixDQUF3QyxJQUF4QyxFQUE2QyxLQUFLLFdBQUwsQ0FBN0MsQ0FKZTs7OzsrQ0FPRztBQUNsQixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBbkIsQ0FBd0MsY0FBeEMsQ0FBdUQsSUFBdkQsRUFBNEQsS0FBSyxXQUFMLENBQTVELENBRGtCO0FBRWxCLGlCQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLGNBQWxCLENBQWlDLElBQWpDLEVBQXNDLEtBQUssV0FBTCxDQUF0QyxDQUZrQjtBQUdsQixpQkFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixjQUFyQixDQUFvQyxJQUFwQyxFQUF5QyxLQUFLLFdBQUwsQ0FBekMsQ0FIa0I7QUFJbEIsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsY0FBbkIsQ0FBa0MsSUFBbEMsRUFBdUMsS0FBSyxXQUFMLENBQXZDLENBSmtCOzs7OzZDQU9GOzs7aUNBS1g7O0FBRUwsZ0JBQUksV0FBVyxLQUFLLFFBQUwsRUFBWCxDQUZDO0FBR0wsZ0JBQUksTUFBTSxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFFBQXBCLENBQTZCLEtBQTdCLENBSEw7QUFJTCxnQkFBSSxPQUFPLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsQ0FKTjtBQUtMLGdCQUFJLFNBQVMsSUFBVCxDQUxDO0FBTUwsZ0JBQUcsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUEyQjtBQUMxQix5QkFBUyxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLENBRGlCO0FBRTFCLG9CQUFJLFdBQVcsT0FBTyxLQUFQLENBRlc7QUFHMUIsb0JBQUksVUFBVSxPQUFPLElBQVAsQ0FIWTtBQUkxQixvQkFBSSxVQUFVLE9BQU8sSUFBUCxDQUpZO0FBSzFCLHVCQUNJOztzQkFBSyxXQUFXLE9BQU8sTUFBUCxFQUFoQjtvQkFDSSxpREFBTyxLQUFLLFFBQUwsRUFBZSxRQUFRLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsRUFBNEIsVUFBVSxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLE1BQU0sSUFBTixFQUFZLFVBQVUsR0FBVixFQUFyRyxDQURKO29CQUVJLGdEQUFNLEtBQUssT0FBTCxFQUFjLFFBQVEsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUE0QixVQUFVLEtBQUssUUFBTCxDQUFjLE9BQWQsRUFBdUIsTUFBTSxJQUFOLEVBQVksVUFBVSxHQUFWLEVBQXJHLENBRko7b0JBR0ksZ0RBQU0sS0FBSyxPQUFMLEVBQWMsUUFBUSxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTRCLFVBQVUsS0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixNQUFNLElBQU4sRUFBWSxVQUFVLEdBQVYsRUFBbEcsQ0FISjtpQkFESixDQUwwQjthQUE5QixNQVlLO0FBQ0QsdUJBQ0k7O3NCQUFPLE9BQU8sUUFBUCxFQUFQO29CQUNJLGlEQUFPLFFBQVEsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUE0QixVQUFVLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsTUFBTSxJQUFOLEVBQVksVUFBVSxHQUFWLEVBQXRGLENBREo7b0JBRUksZ0RBQU8sUUFBUSxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTRCLFVBQVUsS0FBSyxRQUFMLENBQWMsT0FBZCxFQUF1QixNQUFNLElBQU4sRUFBWSxVQUFVLEdBQVYsRUFBeEYsQ0FGSjtvQkFHSSxnREFBTyxRQUFRLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsRUFBNEIsVUFBVSxLQUFLLFFBQUwsQ0FBYyxJQUFkLEVBQW9CLE1BQU0sSUFBTixFQUFZLFVBQVUsR0FBVixFQUFyRixDQUhKO2lCQURKLENBREM7YUFaTDs7OztXQTNERjtFQUFlLGdCQUFNLFNBQU47O0FBMEZyQixNQUFNLGFBQU4sQ0FBb0IsbUJBQXBCLEVBQXlDLE1BQXpDLEVBQWdELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRDs7a0JBRWUiLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBCcmFuZCBmcm9tIFwiLi9CcmFuZFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IHtOYXZiYXJDb25maWd9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzIDogbmV3IE5hdmJhckNvbmZpZygpO1xuICAgICAgICB0aGlzLmdldFN0eWxlID0gdGhpcy5nZXRTdHlsZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgIGdldFN0eWxlICAoKSB7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsKVxuICAgICAgICAgaWYoc3R5bGVPYmplY3RbXCJwb3NpdGlvblwiXSA9PT0gXCJmaXhlZFwiKXtcbiAgICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwidG9wXCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1widG9wXCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcImJvdHRvbVwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImJvdHRvbVwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJyaWdodFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcInJpZ2h0XCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCI1JVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG5cbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImxlZnRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuQ1NTLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudXNlQ1NTLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZG9jay5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLkNTUy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVzZUNTUy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRvY2sucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcblxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciBzdHlsZU9iaiA9IHRoaXMuZ2V0U3R5bGUoKTtcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMuc2V0dGluZ3Muc3R5bGUucG9zaXRpb24udmFsdWU7XG4gICAgICAgIHZhciBkb2NrID0gdGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlO1xuICAgICAgICB2YXIgY3NzT2JqID0gbnVsbDtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWUpe1xuICAgICAgICAgICAgY3NzT2JqID0gdGhpcy5zZXR0aW5ncy5DU1Muc3RhdGU7XG4gICAgICAgICAgICB2YXIgYnJhbmRDU1MgPSBjc3NPYmouYnJhbmQ7XG4gICAgICAgICAgICB2YXIgbGlzdENTUyA9IGNzc09iai5saXN0O1xuICAgICAgICAgICAgdmFyIGZvcm1DU1MgPSBjc3NPYmouZm9ybTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nzc09iai5uYXZiYXJ9PlxuICAgICAgICAgICAgICAgICAgICA8QnJhbmQgY3NzPXticmFuZENTU30gdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MuYnJhbmR9IGRvY2s9e2RvY2t9IHBvc2l0aW9uPXtwb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgY3NzPXtsaXN0Q1NTfSB1c2VDU1M9e3RoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5uYXZMaXN0fSBkb2NrPXtkb2NrfSBwb3NpdGlvbj17cG9zfS8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNzcz17Zm9ybUNTU30gdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MuZm9ybX0gZG9jaz17ZG9ja30gcG9zaXRpb249e3Bvc30vPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgICBzdHlsZT17c3R5bGVPYmp9PlxuICAgICAgICAgICAgICAgICAgICA8QnJhbmQgdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MuYnJhbmR9IGRvY2s9e2RvY2t9IHBvc2l0aW9uPXtwb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgIHVzZUNTUz17dGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWV9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLm5hdkxpc3R9IGRvY2s9e2RvY2t9IHBvc2l0aW9uPXtwb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gIHVzZUNTUz17dGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWV9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLmZvcm19IGRvY2s9e2RvY2t9IHBvc2l0aW9uPXtwb3N9Lz5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKTtcblxuICAgICAgICB9XG5cblxuICAgIH1cblxufVxuXG5cblxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5OYXZiYXJcIiwgTmF2YmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuXG5cblxuXG4iXX0=
