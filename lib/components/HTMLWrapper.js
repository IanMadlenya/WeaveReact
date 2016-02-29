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
        _this.renderChildren = _this.renderChildren.bind(_this);
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
        key: "renderChildren",
        value: function renderChildren(CSS) {
            var clonedChildren = _react2.default.Children.map(this.props.children, function (child, index) {
                var childName = "";
                var props = _App2.default.mergeInto({}, child.props);
                if (typeof child.type === "string") {
                    childName = child.type + index;
                    if (CSS) {
                        props["className"] = this.props.className;
                    } else {
                        var styleConfig = this.settings.style;
                        var styleObject = styleConfig.getStyleFor(null, true);
                        props["style"] = child.props.style ? _Style2.default.mergeStyleObjects(styleObject, child.props.style, true) : styleObject;
                    }
                }
                return _react2.default.cloneElement(child, props);
            }, this);
            return clonedChildren;
        }
    }, {
        key: "render",
        value: function render() {
            var childrenUI = [];
            if (this.props.useCSS) {
                childrenUI = this.renderChildren(this.props.CSS);
            } else {
                childrenUI = this.renderChildren(null);
            }

            return _react2.default.createElement(
                "div",
                { style: this.props.style },
                childrenUI
            );
        }
    }]);

    return HTMLWrapper;
}(_react2.default.Component);

_App2.default.registerToolConfig(HTMLWrapper, _HTMLWrapperConfig2.default);
_App2.default.registerToolImplementation("weavereact.HTMLWrapperConfig", HTMLWrapper);

Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper, [weavejs.api.core.ILinkableObject]);

exports.default = HTMLWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007OztBQUVGLGFBRkUsV0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLGFBRWlCOzsyRUFGakIsd0JBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLGlDQUExQyxDQUZEO0FBR2YsY0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QixDQUhlOztLQUFuQjs7aUJBRkU7OzRDQVFpQjtBQUNmLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQW5CLENBQWtDLGtCQUFsQyxDQUFxRCxJQUFyRCxFQUEwRCxLQUFLLFdBQUwsQ0FBMUQsQ0FEZTs7OzsrQ0FJSztBQUNuQixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFuQixDQUFrQyxjQUFsQyxDQUFpRCxJQUFqRCxFQUFzRCxLQUFLLFdBQUwsQ0FBdEQsQ0FEbUI7Ozs7dUNBSVQsS0FBSTtBQUNmLGdCQUFJLGlCQUFpQixnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQW9CLFVBQVMsS0FBVCxFQUFlLEtBQWYsRUFBcUI7QUFDN0Usb0JBQUksWUFBWSxFQUFaLENBRHlFO0FBRTdFLG9CQUFJLFFBQVEsY0FBSSxTQUFKLENBQWMsRUFBZCxFQUFpQixNQUFNLEtBQU4sQ0FBekIsQ0FGeUU7QUFHN0Usb0JBQUcsT0FBTyxNQUFNLElBQU4sS0FBZ0IsUUFBdkIsRUFBZ0M7QUFDL0IsZ0NBQWEsTUFBTSxJQUFOLEdBQWEsS0FBYixDQURrQjtBQUUvQix3QkFBRyxHQUFILEVBQU87QUFDSCw4QkFBTSxXQUFOLElBQXFCLEtBQUssS0FBTCxDQUFXLFNBQVgsQ0FEbEI7cUJBQVAsTUFHSTtBQUNBLDRCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQURsQjtBQUVBLDRCQUFJLGNBQWMsWUFBWSxXQUFaLENBQXdCLElBQXhCLEVBQTZCLElBQTdCLENBQWQsQ0FGSjtBQUdBLDhCQUFNLE9BQU4sSUFBaUIsTUFBTSxLQUFOLENBQVksS0FBWixHQUFvQixnQkFBTyxpQkFBUCxDQUF5QixXQUF6QixFQUFxQyxNQUFNLEtBQU4sQ0FBWSxLQUFaLEVBQWtCLElBQXZELENBQXBCLEdBQWtGLFdBQWxGLENBSGpCO3FCQUhKO2lCQUZKO0FBV0EsdUJBQU8sZ0JBQU0sWUFBTixDQUFtQixLQUFuQixFQUF5QixLQUF6QixDQUFQLENBZDZFO2FBQXJCLEVBZTFELElBZm1CLENBQWpCLENBRFc7QUFpQmYsbUJBQU8sY0FBUCxDQWpCZTs7OztpQ0FvQlY7QUFDTCxnQkFBSSxhQUFhLEVBQWIsQ0FEQztBQUVMLGdCQUFHLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBa0I7QUFDakIsNkJBQWEsS0FBSyxjQUFMLENBQW9CLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBakMsQ0FEaUI7YUFBckIsTUFFSztBQUNELDZCQUFhLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUFiLENBREM7YUFGTDs7QUFNQSxtQkFBUTs7a0JBQUssT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQVo7Z0JBQ0ssVUFETDthQUFSLENBUks7Ozs7V0FwQ1A7RUFBb0IsZ0JBQU0sU0FBTjs7QUFtRDFCLGNBQUksa0JBQUosQ0FBdUIsV0FBdkI7QUFDQSxjQUFJLDBCQUFKLENBQStCLDhCQUEvQixFQUE4RCxXQUE5RDs7QUFFQSxNQUFNLGFBQU4sQ0FBb0Isd0JBQXBCLEVBQThDLFdBQTlDLEVBQTBELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUEzRDs7a0JBRWUiLCJmaWxlIjoiSFRNTFdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnIGZyb20gXCIuLi9jb25maWdzL0hUTUxXcmFwcGVyQ29uZmlnXCI7XG5cbmNsYXNzIEhUTUxXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBIVE1MV3JhcHBlckNvbmZpZygpO1xuICAgICAgICB0aGlzLnJlbmRlckNoaWxkcmVuID0gdGhpcy5yZW5kZXJDaGlsZHJlbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbihDU1Mpe1xuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbixmdW5jdGlvbihjaGlsZCxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGROYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IEFwcC5tZXJnZUludG8oe30sY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICBjaGlsZE5hbWUgPSAgY2hpbGQudHlwZSArIGluZGV4O1xuICAgICAgICAgICAgICAgIGlmKENTUyl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wiY2xhc3NOYW1lXCJdID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3Muc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHN0eWxlQ29uZmlnLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzdHlsZVwiXSA9IGNoaWxkLnByb3BzLnN0eWxlID8gU3R5bGVzLm1lcmdlU3R5bGVPYmplY3RzKHN0eWxlT2JqZWN0LGNoaWxkLnByb3BzLnN0eWxlLHRydWUpOiBzdHlsZU9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSBbXTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4odGhpcy5wcm9wcy5DU1MpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhIVE1MV3JhcHBlcixIVE1MV3JhcHBlckNvbmZpZyk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LkhUTUxXcmFwcGVyQ29uZmlnXCIsSFRNTFdyYXBwZXIpO1xuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5IVE1MV3JhcHBlclwiLCBIVE1MV3JhcHBlcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTFdyYXBwZXI7XG4iXX0=
