"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
            this.settings.space.addImmediateCallback(this, this.forceUpdate);
            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
            this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
            this.settings.links.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            this.settings.space.removeCallback(this, this.forceUpdate);
            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
            this.settings.activePage.removeCallback(this, this.forceUpdate);
            this.settings.links.childListCallbacks.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.positionType !== nextProps.positionType) {
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
            var navLinks = "";

            if (this.settings.enable.value) {
                var iconOnly = false;
                var styleObject = {
                    display: "flex",
                    flexDirection: "row",
                    listStyleType: "none",
                    paddingLeft: 0
                };

                if (this.settings.rightAlign) {
                    styleObject["marginRight"] = "auto";
                }
                var space = this.settings.space.value;
                var linkStyleObject = {
                    marginRight: space
                };

                if (this.props.positionType === "fixed") {
                    if (this.props.position === "right" || this.props.position === "left") {
                        styleObject["flexDirection"] = "column";
                        iconOnly = true;
                        linkStyleObject["marginRight"] = 0;
                        linkStyleObject["marginBottom"] = space;
                    }
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
//# sourceMappingURL=data:application/json;base64,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WCxDQURKLEtBR0ksV0FBVzs7c0JBQUksT0FBTyxXQUFQLEVBQUo7b0JBQXlCLEtBQXpCO2lCQUFYLENBSEo7YUF6Q0o7O0FBK0NBLG1CQUFRLFFBQVIsQ0FsREs7Ozs7V0F0Q1A7RUFBYSxnQkFBTSxTQUFOOztBQTRGbkIsTUFBTSxhQUFOLENBQW9CLHdCQUFwQixFQUE4QyxJQUE5QyxFQUFtRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBcEQ7a0JBQ2UiLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5cblxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGlua3MuY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGlua3MuY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cbiAgICBcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wb3NpdGlvblR5cGUgIT09IG5leHRQcm9wcy5wb3NpdGlvblR5cGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbmF2TGlua3MgPSBcIlwiO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgdmFyIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTpcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDowXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNwYWNlID0gdGhpcy5zZXR0aW5ncy5zcGFjZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBsaW5rU3R5bGVPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6c3BhY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5wb3NpdGlvblR5cGUgPT09IFwiZml4ZWRcIil7XG4gICAgICAgICAgICAgICAgaWYoKHRoaXMucHJvcHMucG9zaXRpb24gPT09IFwicmlnaHRcIikgfHwgKHRoaXMucHJvcHMucG9zaXRpb24gPT09IFwibGVmdFwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgICAgIGljb25Pbmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGlua1N0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBsaW5rcyA9IHRoaXMuc2V0dGluZ3MubGlua3MuZ2V0TmFtZXMoKS5tYXAoZnVuY3Rpb24obGlua05hbWUsaW5kZXgpe1xuXG4gICAgICAgICAgICAgICAgLy92YXIgbGlua2FibGVQbGFjZUhvbGRlciA9IHRoaXMubGlua3MuZ2V0T2JqZWN0KGxpbmtOYW1lKTtcbiAgICAgICAgICAgICAgICAvL3ZhciBUb29sQ2xhc3MgPSBsaW5rYWJsZVBsYWNlSG9sZGVyLmdldENsYXNzKCk7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmtDb25maWcgPSB0aGlzLnNldHRpbmdzLmxpbmtzLmdldE9iamVjdChsaW5rTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZihsaW5rTmFtZSA9PT0gdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPExpbmsgc3R5bGU9e2xpbmtTdHlsZU9iamVjdH0ga2V5PXtpbmRleH0gaWNvbk9ubHk9e2ljb25Pbmx5fSBpc0FjdGl2ZT17dHJ1ZX0gcGFnZU5hbWU9e2xpbmtOYW1lfSBzZXR0aW5ncz17bGlua0NvbmZpZ30gLz4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxMaW5rIHN0eWxlPXtsaW5rU3R5bGVPYmplY3R9IGtleT17aW5kZXh9IGljb25Pbmx5PXtpY29uT25seX0gaXNBY3RpdmU9e2ZhbHNlfSBwYWdlTmFtZT17bGlua05hbWV9IHNldHRpbmdzPXtsaW5rQ29uZmlnfS8+KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICBzdHlsZU9iamVjdCA9IFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdCk7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUylcbiAgICAgICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBjbGFzc05hbWU9e3RoaXMucHJvcHMuY3NzfT57bGlua3N9PC91bD47XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbmF2TGlua3MgPSA8dWwgc3R5bGU9e3N0eWxlT2JqZWN0fT57bGlua3N9PC91bD47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5hdkxpbmtzKTtcbiAgICB9XG5cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5MaXN0XCIsIExpc3QsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl19
