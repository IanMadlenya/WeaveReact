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
                null,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007OztBQUVGLGFBRkUsV0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLGFBRWlCOzsyRUFGakIsd0JBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLGlDQUExQyxDQUZEO0FBR2YsY0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QixDQUhlOztLQUFuQjs7aUJBRkU7OzRDQVFpQjtBQUNmLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQW5CLENBQWtDLGtCQUFsQyxDQUFxRCxJQUFyRCxFQUEwRCxLQUFLLFdBQUwsQ0FBMUQsQ0FEZTs7OzsrQ0FJSztBQUNuQixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFuQixDQUFrQyxjQUFsQyxDQUFpRCxJQUFqRCxFQUFzRCxLQUFLLFdBQUwsQ0FBdEQsQ0FEbUI7Ozs7dUNBSVQsS0FBSTtBQUNmLGdCQUFJLGlCQUFpQixnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQW9CLFVBQVMsS0FBVCxFQUFlLEtBQWYsRUFBcUI7QUFDN0Usb0JBQUksWUFBWSxFQUFaLENBRHlFO0FBRTdFLG9CQUFJLFFBQVEsY0FBSSxTQUFKLENBQWMsRUFBZCxFQUFpQixNQUFNLEtBQU4sQ0FBekIsQ0FGeUU7QUFHN0Usb0JBQUcsT0FBTyxNQUFNLElBQU4sS0FBZ0IsUUFBdkIsRUFBZ0M7QUFDL0IsZ0NBQWEsTUFBTSxJQUFOLEdBQWEsS0FBYixDQURrQjtBQUUvQix3QkFBRyxHQUFILEVBQU87QUFDSCw4QkFBTSxXQUFOLElBQXFCLEtBQUssS0FBTCxDQUFXLFNBQVgsQ0FEbEI7cUJBQVAsTUFHSTtBQUNBLDRCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQURsQjtBQUVBLDRCQUFJLGNBQWMsWUFBWSxXQUFaLENBQXdCLElBQXhCLEVBQTZCLElBQTdCLENBQWQsQ0FGSjtBQUdBLDhCQUFNLE9BQU4sSUFBaUIsTUFBTSxLQUFOLENBQVksS0FBWixHQUFvQixnQkFBTyxpQkFBUCxDQUF5QixXQUF6QixFQUFxQyxNQUFNLEtBQU4sQ0FBWSxLQUFaLEVBQWtCLElBQXZELENBQXBCLEdBQWtGLFdBQWxGLENBSGpCO3FCQUhKO2lCQUZKO0FBV0EsdUJBQU8sZ0JBQU0sWUFBTixDQUFtQixLQUFuQixFQUF5QixLQUF6QixDQUFQLENBZDZFO2FBQXJCLEVBZTFELElBZm1CLENBQWpCLENBRFc7QUFpQmYsbUJBQU8sY0FBUCxDQWpCZTs7OztpQ0FvQlY7QUFDTCxnQkFBSSxhQUFhLEVBQWIsQ0FEQztBQUVMLGdCQUFHLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBa0I7QUFDakIsNkJBQWEsS0FBSyxjQUFMLENBQW9CLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBakMsQ0FEaUI7YUFBckIsTUFFSztBQUNELDZCQUFhLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUFiLENBREM7YUFGTDs7QUFNQSxtQkFBUTs7O2dCQUNLLFVBREw7YUFBUixDQVJLOzs7O1dBcENQO0VBQW9CLGdCQUFNLFNBQU47O0FBbUQxQixjQUFJLGtCQUFKLENBQXVCLFdBQXZCO0FBQ0EsY0FBSSwwQkFBSixDQUErQiw4QkFBL0IsRUFBOEQsV0FBOUQ7O0FBRUEsTUFBTSxhQUFOLENBQW9CLHdCQUFwQixFQUE4QyxXQUE5QyxFQUEwRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBM0Q7O2tCQUVlIiwiZmlsZSI6IkhUTUxXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi91dGlscy9BcHBcIjtcbmltcG9ydCBIVE1MV3JhcHBlckNvbmZpZyBmcm9tIFwiLi4vY29uZmlncy9IVE1MV3JhcHBlckNvbmZpZ1wiO1xuXG5jbGFzcyBIVE1MV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgSFRNTFdyYXBwZXJDb25maWcoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oQ1NTKXtcbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sZnVuY3Rpb24oY2hpbGQsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHt9LGNoaWxkLnByb3BzKTtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgY2hpbGROYW1lID0gIGNoaWxkLnR5cGUgKyBpbmRleDtcbiAgICAgICAgICAgICAgICBpZihDU1Mpe1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImNsYXNzTmFtZVwiXSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGVDb25maWcgPSB0aGlzLnNldHRpbmdzLnN0eWxlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSBzdHlsZUNvbmZpZy5nZXRTdHlsZUZvcihudWxsLHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wic3R5bGVcIl0gPSBjaGlsZC5wcm9wcy5zdHlsZSA/IFN0eWxlcy5tZXJnZVN0eWxlT2JqZWN0cyhzdHlsZU9iamVjdCxjaGlsZC5wcm9wcy5zdHlsZSx0cnVlKTogc3R5bGVPYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7XG4gICAgICAgIH0sdGhpcyk7XG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gW107XG4gICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKHRoaXMucHJvcHMuQ1NTKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbihudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhIVE1MV3JhcHBlcixIVE1MV3JhcHBlckNvbmZpZyk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LkhUTUxXcmFwcGVyQ29uZmlnXCIsSFRNTFdyYXBwZXIpO1xuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5IVE1MV3JhcHBlclwiLCBIVE1MV3JhcHBlcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTFdyYXBwZXI7XG4iXX0=
