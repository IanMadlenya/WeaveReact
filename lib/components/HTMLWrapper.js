"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ComponentManager = require("../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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

        return _possibleConstructorReturn(this, Object.getPrototypeOf(HTMLWrapper).call(this, props));
    }

    _createClass(HTMLWrapper, [{
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

_ComponentManager2.default.registerToolConfig(HTMLWrapper, _HTMLWrapperConfig2.default);
_ComponentManager2.default.registerToolImplementation("weavereact.HTMLWrapperConfig", HTMLWrapper);

Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper, [weavejs.api.core.ILinkableObject]);

exports.default = HTMLWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTTs7O0FBRUYsYUFGRSxXQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsYUFFaUI7O3NFQUZqQix3QkFHUSxRQURTO0tBQW5COztpQkFGRTs7aUNBUU87O0FBRUwsbUJBQVE7O2tCQUFLLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixTQUFTLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBdkM7Z0JBQ0ssS0FBSyxLQUFMLENBQVcsUUFBWDthQURiLENBRks7Ozs7V0FSUDtFQUFvQixnQkFBTSxTQUFOOztBQWlCMUIsMkJBQWlCLGtCQUFqQixDQUFvQyxXQUFwQztBQUNBLDJCQUFpQiwwQkFBakIsQ0FBNEMsOEJBQTVDLEVBQTJFLFdBQTNFOztBQUVBLE1BQU0sYUFBTixDQUFvQix3QkFBcEIsRUFBOEMsV0FBOUMsRUFBMEQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTNEOztrQkFFZSIsImZpbGUiOiJIVE1MV3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSFRNTFdyYXBwZXJDb25maWcgZnJvbSBcIi4uL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcblxuY2xhc3MgSFRNTFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgfVxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhIVE1MV3JhcHBlcixIVE1MV3JhcHBlckNvbmZpZyk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5IVE1MV3JhcHBlckNvbmZpZ1wiLEhUTUxXcmFwcGVyKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuSFRNTFdyYXBwZXJcIiwgSFRNTFdyYXBwZXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxXcmFwcGVyO1xuIl19
