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

Weave.registerClass(HTMLWrapper, ["weavereact.HTMLWrapper"], [weavejs.api.core.ILinkableObject], "HTML Wrapper");

exports.default = HTMLWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTTs7O0FBRUYsYUFGRSxXQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsYUFFaUI7O3NFQUZqQix3QkFHUSxRQURTO0tBQW5COztpQkFGRTs7aUNBUU87O0FBRUwsbUJBQVE7O2tCQUFLLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixTQUFTLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBdkM7Z0JBQ0ssS0FBSyxLQUFMLENBQVcsUUFBWDthQURiLENBRks7Ozs7V0FSUDtFQUFvQixnQkFBTSxTQUFOOztBQWlCMUIsMkJBQWlCLGtCQUFqQixDQUFvQyxXQUFwQztBQUNBLDJCQUFpQiwwQkFBakIsQ0FBNEMsOEJBQTVDLEVBQTJFLFdBQTNFOztBQUVBLE1BQU0sYUFBTixDQUFxQixXQUFyQixFQUFpQyxDQUFDLHdCQUFELENBQWpDLEVBQTRELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUE3RCxFQUErRixjQUEvRjs7a0JBRWUiLCJmaWxlIjoiSFRNTFdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnIGZyb20gXCIuLi9jb25maWdzL0hUTUxXcmFwcGVyQ29uZmlnXCI7XG5cbmNsYXNzIEhUTUxXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoSFRNTFdyYXBwZXIsSFRNTFdyYXBwZXJDb25maWcpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuSFRNTFdyYXBwZXJDb25maWdcIixIVE1MV3JhcHBlcik7XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoIEhUTUxXcmFwcGVyLFtcIndlYXZlcmVhY3QuSFRNTFdyYXBwZXJcIl0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSxcIkhUTUwgV3JhcHBlclwiKTtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTFdyYXBwZXI7XG4iXX0=