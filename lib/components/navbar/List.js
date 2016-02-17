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
            var navLinks = _react2.default.createElement("div", null);

            if (this.settings.enable.value) {
                var iconOnly = false;
                var styleObject = {
                    display: "flex",
                    flex: "1",
                    flexDirection: "row",
                    listStyleType: "none",
                    paddingLeft: 0
                };

                if (this.props.position !== "right" && this.props.position !== "left" && this.settings.rightAlign) {
                    styleObject["justifyContent"] = "flex-end";
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
//# sourceMappingURL=data:application/json;base64,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LGdCQUFNLGtCQUFOLENBQXlCLFdBQXpCLENBQWQsQ0ExQzBCO0FBMkMxQixvQkFBRyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQ0MsV0FBVzs7c0JBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWY7b0JBQWdDLEtBQWhDO2lCQUFYLENBREosS0FHSSxXQUFXOztzQkFBSSxPQUFPLFdBQVAsRUFBSjtvQkFBeUIsS0FBekI7aUJBQVgsQ0FISjthQTNDSjs7QUFpREEsbUJBQVEsUUFBUixDQXBESzs7OztXQXRDUDtFQUFhLGdCQUFNLFNBQU47O0FBOEZuQixNQUFNLGFBQU4sQ0FBb0Isd0JBQXBCLEVBQThDLElBQTlDLEVBQW1ELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFwRDtrQkFDZSIsImZpbGUiOiJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcblxuXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5saW5rcy5jaGlsZExpc3RDYWxsYmFja3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5saW5rcy5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMucG9zaXRpb25UeXBlICE9PSBuZXh0UHJvcHMucG9zaXRpb25UeXBlKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVzZUNTUyAhPT0gbmV4dFByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG5hdkxpbmtzID0gPGRpdi8+O1xuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgZmxleDpcIjFcIixcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTpcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDowXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCh0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBcInJpZ2h0XCIpICYmICh0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBcImxlZnRcIikgJiYgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImp1c3RpZnlDb250ZW50XCJdID0gXCJmbGV4LWVuZFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBcImF1dG9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzcGFjZSA9IHRoaXMuc2V0dGluZ3Muc3BhY2UudmFsdWU7XG4gICAgICAgICAgICB2YXIgbGlua1N0eWxlT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OnNwYWNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMucG9zaXRpb25UeXBlID09PSBcImZpeGVkXCIpe1xuICAgICAgICAgICAgICAgIGlmKCh0aGlzLnByb3BzLnBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHx8ICh0aGlzLnByb3BzLnBvc2l0aW9uID09PSBcImxlZnRcIikpe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgICAgICBpY29uT25seSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxpbmtTdHlsZU9iamVjdFtcIm1hcmdpblJpZ2h0XCJdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGlua1N0eWxlT2JqZWN0W1wibWFyZ2luQm90dG9tXCJdID0gc3BhY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbGlua3MgPSB0aGlzLnNldHRpbmdzLmxpbmtzLmdldE5hbWVzKCkubWFwKGZ1bmN0aW9uKGxpbmtOYW1lLGluZGV4KXtcblxuICAgICAgICAgICAgICAgIC8vdmFyIGxpbmthYmxlUGxhY2VIb2xkZXIgPSB0aGlzLmxpbmtzLmdldE9iamVjdChsaW5rTmFtZSk7XG4gICAgICAgICAgICAgICAgLy92YXIgVG9vbENsYXNzID0gbGlua2FibGVQbGFjZUhvbGRlci5nZXRDbGFzcygpO1xuICAgICAgICAgICAgICAgIHZhciBsaW5rQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5saW5rcy5nZXRPYmplY3QobGlua05hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYobGlua05hbWUgPT09IHRoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxMaW5rIHN0eWxlPXtsaW5rU3R5bGVPYmplY3R9IGtleT17aW5kZXh9IGljb25Pbmx5PXtpY29uT25seX0gaXNBY3RpdmU9e3RydWV9IHBhZ2VOYW1lPXtsaW5rTmFtZX0gc2V0dGluZ3M9e2xpbmtDb25maWd9IC8+KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8TGluayBzdHlsZT17bGlua1N0eWxlT2JqZWN0fSBrZXk9e2luZGV4fSBpY29uT25seT17aWNvbk9ubHl9IGlzQWN0aXZlPXtmYWxzZX0gcGFnZU5hbWU9e2xpbmtOYW1lfSBzZXR0aW5ncz17bGlua0NvbmZpZ30vPik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgc3R5bGVPYmplY3QgPSBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy51c2VDU1MpXG4gICAgICAgICAgICAgICAgbmF2TGlua3MgPSA8dWwgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNzc30+e2xpbmtzfTwvdWw+O1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG5hdkxpbmtzID0gPHVsIHN0eWxlPXtzdHlsZU9iamVjdH0+e2xpbmtzfTwvdWw+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChuYXZMaW5rcyk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTGlzdFwiLCBMaXN0LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiJdfQ==
