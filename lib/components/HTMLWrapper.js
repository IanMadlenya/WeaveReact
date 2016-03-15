"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Style = require("../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _App = require("../utils/App");

var _App2 = _interopRequireDefault(_App);

var _HTMLWrapperConfig = require("../configs/HTMLWrapperConfig");

var _HTMLWrapperConfig2 = _interopRequireDefault(_HTMLWrapperConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTMLWrapper = function (_React$Component) {
    _inherits(HTMLWrapper, _React$Component);

    function HTMLWrapper(props) {
        _classCallCheck(this, HTMLWrapper);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HTMLWrapper).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _HTMLWrapperConfig2.default();
        return _this;
    }

    _createClass(HTMLWrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { style: this.props.style, onClick: this.props.onClick },
                this.props.children
            );
        }
    }]);

    return HTMLWrapper;
}(_react2.default.Component);

_App2.default.registerToolConfig(HTMLWrapper, _HTMLWrapperConfig2.default);
_App2.default.registerToolImplementation("weavereact.HTMLWrapperConfig", HTMLWrapper);

Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper, [weavejs.api.core.ILinkableObject]);

exports.default = HTMLWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007OztBQUVGLGFBRkUsV0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLGFBRWlCOzsyRUFGakIsd0JBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLGlDQUExQyxDQUZEOztLQUFuQjs7aUJBRkU7OzRDQU9pQjtBQUNmLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQW5CLENBQWtDLGtCQUFsQyxDQUFxRCxJQUFyRCxFQUEwRCxLQUFLLFdBQUwsQ0FBMUQsQ0FEZTs7OzsrQ0FJSztBQUNuQixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFuQixDQUFrQyxjQUFsQyxDQUFpRCxJQUFqRCxFQUFzRCxLQUFLLFdBQUwsQ0FBdEQsQ0FEbUI7Ozs7aUNBS2Y7O0FBRUwsbUJBQVE7O2tCQUFLLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixTQUFTLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBdkM7Z0JBQ0ssS0FBSyxLQUFMLENBQVcsUUFBWDthQURiLENBRks7Ozs7V0FoQlA7RUFBb0IsZ0JBQU0sU0FBTjs7QUF5QjFCLGNBQUksa0JBQUosQ0FBdUIsV0FBdkI7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxXQUE5RDs7QUFFQSxNQUFNLGFBQU4sQ0FBb0Isd0JBQXBCLEVBQThDLFdBQTlDLEVBQTBELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUEzRDs7a0JBRWUiLCJmaWxlIjoiSFRNTFdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnIGZyb20gXCIuLi9jb25maWdzL0hUTUxXcmFwcGVyQ29uZmlnXCI7XG5cbmNsYXNzIEhUTUxXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBIVE1MV3JhcHBlckNvbmZpZygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICB9XG59XG5cbkFwcC5yZWdpc3RlclRvb2xDb25maWcoSFRNTFdyYXBwZXIsSFRNTFdyYXBwZXJDb25maWcpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5IVE1MV3JhcHBlckNvbmZpZ1wiLEhUTUxXcmFwcGVyKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuSFRNTFdyYXBwZXJcIiwgSFRNTFdyYXBwZXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxXcmFwcGVyO1xuIl19
