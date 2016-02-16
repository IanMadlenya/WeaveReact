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
            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
            this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
            this.settings.links.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
            this.settings.activePage.removeCallback(this, this.forceUpdate);
            this.settings.links.childListCallbacks.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "render",
        value: function render() {
            var navLinks = "";
            if (this.settings.enable.value) {
                var links = this.settings.links.getNames().map(function (linkName, index) {

                    //var linkablePlaceHolder = this.links.getObject(linkName);
                    //var ToolClass = linkablePlaceHolder.getClass();
                    var linkConfig = this.settings.links.getObject(linkName);

                    if (linkName === this.settings.activePage.value) {
                        return _react2.default.createElement(_Link2.default, { key: index, isActive: true, pageName: linkName, settings: linkConfig });
                    } else {
                        return _react2.default.createElement(_Link2.default, { key: index, isActive: false, pageName: linkName, settings: linkConfig });
                    }
                }.bind(this));

                navLinks = _react2.default.createElement(
                    "ul",
                    { className: "nav navbar-nav" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzs7QUFFRixhQUZFLElBRUYsQ0FBWSxLQUFaLEVBQWtCOzhCQUZoQixNQUVnQjs7MkVBRmhCLGlCQUdRLFFBRFE7O0FBRWQsY0FBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQVgsQ0FGRjs7O0tBQWxCOztpQkFGRTs7NENBUWlCO0FBQ2YsaUJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsb0JBQXJCLENBQTBDLElBQTFDLEVBQWdELEtBQUssV0FBTCxDQUFoRCxDQURlO0FBRWYsaUJBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsb0JBQXpCLENBQThDLElBQTlDLEVBQW9ELEtBQUssV0FBTCxDQUFwRCxDQUZlO0FBR2YsaUJBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsb0JBQXpCLENBQThDLElBQTlDLEVBQW9ELEtBQUssV0FBTCxDQUFwRCxDQUhlO0FBSWYsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0Isa0JBQXBCLENBQXVDLG9CQUF2QyxDQUE0RCxJQUE1RCxFQUFrRSxLQUFLLFdBQUwsQ0FBbEUsQ0FKZTs7OzsrQ0FTRztBQUNsQixpQkFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixjQUFyQixDQUFvQyxJQUFwQyxFQUEwQyxLQUFLLFdBQUwsQ0FBMUMsQ0FEa0I7QUFFbEIsaUJBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsY0FBekIsQ0FBd0MsSUFBeEMsRUFBOEMsS0FBSyxXQUFMLENBQTlDLENBRmtCO0FBR2xCLGlCQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLGNBQXpCLENBQXdDLElBQXhDLEVBQThDLEtBQUssV0FBTCxDQUE5QyxDQUhrQjtBQUlsQixpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixrQkFBcEIsQ0FBdUMsY0FBdkMsQ0FBc0QsSUFBdEQsRUFBNEQsS0FBSyxXQUFMLENBQTVELENBSmtCOzs7O2lDQU9iO0FBQ0wsZ0JBQUksV0FBVyxFQUFYLENBREM7QUFFTCxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTJCO0FBQzFCLG9CQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixRQUFwQixHQUErQixHQUEvQixDQUFtQyxVQUFTLFFBQVQsRUFBa0IsS0FBbEIsRUFBd0I7Ozs7QUFJbkUsd0JBQUksYUFBYSxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFNBQXBCLENBQThCLFFBQTlCLENBQWIsQ0FKK0Q7O0FBTW5FLHdCQUFHLGFBQWEsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixLQUF6QixFQUFnQztBQUM1QywrQkFBUSxnREFBTSxLQUFLLEtBQUwsRUFBWSxVQUFVLElBQVYsRUFBZ0IsVUFBVSxRQUFWLEVBQW9CLFVBQVUsVUFBVixFQUF0RCxDQUFSLENBRDRDO3FCQUFoRCxNQUdJO0FBQ0EsK0JBQVEsZ0RBQU0sS0FBSyxLQUFMLEVBQVksVUFBVSxLQUFWLEVBQWlCLFVBQVUsUUFBVixFQUFvQixVQUFVLFVBQVYsRUFBdkQsQ0FBUixDQURBO3FCQUhKO2lCQU4yQyxDQVk3QyxJQVo2QyxDQVl4QyxJQVp3QyxDQUFuQyxDQUFSLENBRHNCOztBQWUxQiwyQkFBVzs7c0JBQUksV0FBVSxnQkFBVixFQUFKO29CQUFnQyxLQUFoQztpQkFBWCxDQWYwQjthQUE5Qjs7QUFrQkEsbUJBQVEsUUFBUixDQXBCSzs7OztXQXhCUDtFQUFhLGdCQUFNLFNBQU47O0FBZ0RuQixNQUFNLGFBQU4sQ0FBb0Isd0JBQXBCLEVBQThDLElBQTlDLEVBQW1ELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFwRDtrQkFDZSIsImZpbGUiOiJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcblxuXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5saW5rcy5jaGlsZExpc3RDYWxsYmFja3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5saW5rcy5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbmF2TGlua3MgPSBcIlwiO1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG4gICAgICAgICAgICB2YXIgbGlua3MgPSB0aGlzLnNldHRpbmdzLmxpbmtzLmdldE5hbWVzKCkubWFwKGZ1bmN0aW9uKGxpbmtOYW1lLGluZGV4KXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL3ZhciBsaW5rYWJsZVBsYWNlSG9sZGVyID0gdGhpcy5saW5rcy5nZXRPYmplY3QobGlua05hbWUpO1xuICAgICAgICAgICAgICAgIC8vdmFyIFRvb2xDbGFzcyA9IGxpbmthYmxlUGxhY2VIb2xkZXIuZ2V0Q2xhc3MoKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlua0NvbmZpZyA9IHRoaXMuc2V0dGluZ3MubGlua3MuZ2V0T2JqZWN0KGxpbmtOYW1lKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihsaW5rTmFtZSA9PT0gdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPExpbmsga2V5PXtpbmRleH0gaXNBY3RpdmU9e3RydWV9IHBhZ2VOYW1lPXtsaW5rTmFtZX0gc2V0dGluZ3M9e2xpbmtDb25maWd9IC8+KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8TGluayBrZXk9e2luZGV4fSBpc0FjdGl2ZT17ZmFsc2V9IHBhZ2VOYW1lPXtsaW5rTmFtZX0gc2V0dGluZ3M9e2xpbmtDb25maWd9Lz4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5hdkxpbmtzID0gPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+e2xpbmtzfTwvdWw+O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiAobmF2TGlua3MpO1xuICAgIH1cbiAgICBcbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5MaXN0XCIsIExpc3QsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl19
