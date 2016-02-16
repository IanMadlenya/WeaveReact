"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
            var styleObject = {
                display: "flex",
                flexDirection: "row",
                width: "100%",
                heigh: "5%",
                position: this.settings.positionType.value,
                backgroundColor: this.settings.backgroundColor.value

            };
            var border = this.settings.border.state;
            var padding = this.settings.padding.state;
            _Style2.default.mergeStyleObjects(styleObject, border);
            _Style2.default.mergeStyleObjects(styleObject, padding);

            if (styleObject["position"] === "fixed") {
                if (this.settings.position.value === "top") {
                    styleObject["top"] = "0";
                } else if (this.settings.position.value === "bottom") {
                    styleObject["bottom"] = "0";
                } else if (this.settings.position.value === "right") {
                    styleObject["right"] = "0";
                    styleObject["flexDirection"] = "column";
                    styleObject["width"] = "5%";
                    styleObject["height"] = "100%";
                } else if (this.settings.position.value === "left") {
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
            this.settings.positionType.addImmediateCallback(this, this.forceUpdate);
            this.settings.position.addImmediateCallback(this, this.forceUpdate);
            this.settings.backgroundColor.addImmediateCallback(this, this.forceUpdate);
            this.settings.border.addImmediateCallback(this, this.forceUpdate);
            this.settings.padding.addImmediateCallback(this, this.forceUpdate);
            this.settings.useCSS.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.positionType.removeCallback(this, this.forceUpdate);
            this.settings.position.removeCallback(this, this.forceUpdate);
            this.settings.backgroundColor.removeCallback(this, this.forceUpdate);
            this.settings.border.removeCallback(this, this.forceUpdate);
            this.settings.padding.removeCallback(this, this.forceUpdate);
            this.settings.useCSS.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {}
    }, {
        key: "render",
        value: function render() {

            var styleObj = this.getStyle();
            var posType = this.settings.positionType.value;
            var pos = this.settings.position.value;
            var cssObj = null;
            if (this.settings.useCSS.value) {
                cssObj = this.settings.CSS.state;
                var brandCSS = cssObj.brand;
                var listCSS = cssObj.list;
                var formCSS = cssObj.form;
            }
            return _react2.default.createElement(
                "nav",
                { id: "navbar", style: styleObj },
                _react2.default.createElement(_Brand2.default, { css: brandCSS, useCSS: this.settings.useCSS.value, settings: this.settings.brand, positionType: posType, position: pos }),
                _react2.default.createElement(_List2.default, { css: listCSS, useCSS: this.settings.useCSS.value, settings: this.settings.navList, positionType: posType, position: pos }),
                _react2.default.createElement(_Form2.default, { css: formCSS, useCSS: this.settings.useCSS.value, settings: this.settings.form, positionType: posType, position: pos })
            );
        }
    }]);

    return Navbar;
}(_react2.default.Component);

Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

exports.default = Navbar;
//# sourceMappingURL=data:application/json;base64,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RzFCLG9CQUFJLFVBQVUsT0FBTyxJQUFQLENBSFk7QUFJMUIsb0JBQUksVUFBVSxPQUFPLElBQVAsQ0FKWTthQUE5QjtBQU1BLG1CQUNJOztrQkFBSyxJQUFHLFFBQUgsRUFBYSxPQUFPLFFBQVAsRUFBbEI7Z0JBQ0ksaURBQU8sS0FBSyxRQUFMLEVBQWUsUUFBUSxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTRCLFVBQVUsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixjQUFjLE9BQWQsRUFBdUIsVUFBVSxHQUFWLEVBQWhILENBREo7Z0JBRUksZ0RBQU0sS0FBSyxPQUFMLEVBQWMsUUFBUSxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTRCLFVBQVUsS0FBSyxRQUFMLENBQWMsT0FBZCxFQUF1QixjQUFjLE9BQWQsRUFBdUIsVUFBVSxHQUFWLEVBQWhILENBRko7Z0JBR0ksZ0RBQU0sS0FBSyxPQUFMLEVBQWMsUUFBUSxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTRCLFVBQVUsS0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixjQUFjLE9BQWQsRUFBdUIsVUFBVSxHQUFWLEVBQTdHLENBSEo7YUFESixDQVpLOzs7O1dBcEVQO0VBQWUsZ0JBQU0sU0FBTjs7QUE4RnJCLE1BQU0sYUFBTixDQUFvQixtQkFBcEIsRUFBeUMsTUFBekMsRUFBZ0QsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQWpEOztrQkFFZSIsImZpbGUiOiJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQge05hdmJhckNvbmZpZ30gZnJvbSBcIi4vQ29uZmlnXCI7XG5cblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3MgOiBuZXcgTmF2YmFyQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuZ2V0U3R5bGUgPSB0aGlzLmdldFN0eWxlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgIGdldFN0eWxlICAoKSB7XG4gICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB7XG4gICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICAgaGVpZ2g6XCI1JVwiLFxuICAgICAgICAgICAgIHBvc2l0aW9uOnRoaXMuc2V0dGluZ3MucG9zaXRpb25UeXBlLnZhbHVlLFxuICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IudmFsdWUsXG4gICAgICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICB2YXIgYm9yZGVyID0gdGhpcy5zZXR0aW5ncy5ib3JkZXIuc3RhdGU7XG4gICAgICAgICB2YXIgcGFkZGluZyA9IHRoaXMuc2V0dGluZ3MucGFkZGluZy5zdGF0ZTtcbiAgICAgICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKHN0eWxlT2JqZWN0LGJvcmRlcik7XG4gICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhzdHlsZU9iamVjdCxwYWRkaW5nKTtcbiAgICAgICAgIFxuICAgICAgICAgaWYoc3R5bGVPYmplY3RbXCJwb3NpdGlvblwiXSA9PT0gXCJmaXhlZFwiKXtcbiAgICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnZhbHVlID09PSBcInRvcFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcInRvcFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MucG9zaXRpb24udmFsdWUgPT09IFwiYm90dG9tXCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYm90dG9tXCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZSA9PT0gXCJyaWdodFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcInJpZ2h0XCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCI1JVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MucG9zaXRpb24udmFsdWUgPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImxlZnRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvblR5cGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmJhY2tncm91bmRDb2xvci5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmJvcmRlci5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnBhZGRpbmcuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy51c2VDU1MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uVHlwZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYmFja2dyb3VuZENvbG9yLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYm9yZGVyLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucGFkZGluZy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVzZUNTUy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgICB2YXIgcG9zVHlwZSA9IHRoaXMuc2V0dGluZ3MucG9zaXRpb25UeXBlLnZhbHVlO1xuICAgICAgICB2YXIgcG9zID0gdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZTtcbiAgICAgICAgdmFyIGNzc09iaiA9IG51bGw7XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlKXtcbiAgICAgICAgICAgIGNzc09iaiA9IHRoaXMuc2V0dGluZ3MuQ1NTLnN0YXRlO1xuICAgICAgICAgICAgdmFyIGJyYW5kQ1NTID0gY3NzT2JqLmJyYW5kO1xuICAgICAgICAgICAgdmFyIGxpc3RDU1MgPSBjc3NPYmoubGlzdDtcbiAgICAgICAgICAgIHZhciBmb3JtQ1NTID0gY3NzT2JqLmZvcm07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgaWQ9XCJuYXZiYXJcIiAgc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICA8QnJhbmQgY3NzPXticmFuZENTU30gdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MuYnJhbmR9IHBvc2l0aW9uVHlwZT17cG9zVHlwZX0gcG9zaXRpb249e3Bvc30vPlxuICAgICAgICAgICAgICAgIDxMaXN0IGNzcz17bGlzdENTU30gdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MubmF2TGlzdH0gcG9zaXRpb25UeXBlPXtwb3NUeXBlfSBwb3NpdGlvbj17cG9zfS8+XG4gICAgICAgICAgICAgICAgPEZvcm0gY3NzPXtmb3JtQ1NTfSB1c2VDU1M9e3RoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5mb3JtfSBwb3NpdGlvblR5cGU9e3Bvc1R5cGV9IHBvc2l0aW9uPXtwb3N9Lz5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5cblxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5OYXZiYXJcIiwgTmF2YmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuXG5cblxuXG4iXX0=
