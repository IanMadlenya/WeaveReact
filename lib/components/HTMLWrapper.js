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

Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper, [weavejs.api.core.ILinkableObject]);

exports.default = HTMLWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007OztBQUVGLGFBRkUsV0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLGFBRWlCOzsyRUFGakIsd0JBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLGlDQUExQyxDQUZEO0FBR2YsY0FBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QixDQUhlOztLQUFuQjs7aUJBRkU7OzRDQVFpQjtBQUNmLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQW5CLENBQWtDLGtCQUFsQyxDQUFxRCxJQUFyRCxFQUEwRCxLQUFLLFdBQUwsQ0FBMUQsQ0FEZTs7OzsrQ0FJSztBQUNuQixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFuQixDQUFrQyxjQUFsQyxDQUFpRCxJQUFqRCxFQUFzRCxLQUFLLFdBQUwsQ0FBdEQsQ0FEbUI7Ozs7dUNBSVQsS0FBSTtBQUNmLGdCQUFJLGlCQUFpQixnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQW9CLFVBQVMsS0FBVCxFQUFlLEtBQWYsRUFBcUI7QUFDN0Usb0JBQUksWUFBWSxFQUFaLENBRHlFO0FBRTdFLG9CQUFJLFFBQVEsY0FBSSxTQUFKLENBQWMsRUFBZCxFQUFpQixNQUFNLEtBQU4sQ0FBekIsQ0FGeUU7QUFHN0Usb0JBQUcsT0FBTyxNQUFNLElBQU4sS0FBZ0IsUUFBdkIsRUFBZ0M7QUFDL0IsZ0NBQWEsTUFBTSxJQUFOLEdBQWEsS0FBYixDQURrQjtBQUUvQix3QkFBRyxHQUFILEVBQU87QUFDSCw4QkFBTSxXQUFOLElBQXFCLEtBQUssS0FBTCxDQUFXLFNBQVgsQ0FEbEI7cUJBQVAsTUFHSTtBQUNBLDRCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQURsQjtBQUVBLDRCQUFJLGNBQWMsWUFBWSxXQUFaLENBQXdCLElBQXhCLEVBQTZCLElBQTdCLENBQWQsQ0FGSjtBQUdBLDhCQUFNLE9BQU4sSUFBaUIsTUFBTSxLQUFOLENBQVksS0FBWixHQUFvQixnQkFBTyxpQkFBUCxDQUF5QixXQUF6QixFQUFxQyxNQUFNLEtBQU4sQ0FBWSxLQUFaLEVBQWtCLElBQXZELENBQXBCLEdBQWtGLFdBQWxGLENBSGpCO3FCQUhKO2lCQUZKO0FBV0EsdUJBQU8sZ0JBQU0sWUFBTixDQUFtQixLQUFuQixFQUF5QixLQUF6QixDQUFQLENBZDZFO2FBQXJCLEVBZTFELElBZm1CLENBQWpCLENBRFc7QUFpQmYsbUJBQU8sY0FBUCxDQWpCZTs7OztpQ0FvQlY7QUFDTCxnQkFBSSxhQUFhLEVBQWIsQ0FEQztBQUVMLGdCQUFHLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBa0I7QUFDakIsNkJBQWEsS0FBSyxjQUFMLENBQW9CLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBakMsQ0FEaUI7YUFBckIsTUFFSztBQUNELDZCQUFhLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUFiLENBREM7YUFGTDs7QUFNQSxtQkFBUTs7O2dCQUNLLFVBREw7YUFBUixDQVJLOzs7O1dBcENQO0VBQW9CLGdCQUFNLFNBQU47O0FBbUQxQixjQUFJLGtCQUFKLENBQXVCLFdBQXZCOztBQUVBLE1BQU0sYUFBTixDQUFvQix3QkFBcEIsRUFBOEMsV0FBOUMsRUFBMEQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTNEOztrQkFFZSIsImZpbGUiOiJIVE1MV3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXJDb25maWcgZnJvbSBcIi4uL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcblxuY2xhc3MgSFRNTFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IEhUTUxXcmFwcGVyQ29uZmlnKCk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKENTUyl7XG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLGZ1bmN0aW9uKGNoaWxkLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZE5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIHByb3BzID0gQXBwLm1lcmdlSW50byh7fSxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgIGNoaWxkTmFtZSA9ICBjaGlsZC50eXBlICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgaWYoQ1NTKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gc3R5bGVDb25maWcuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKVxuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInN0eWxlXCJdID0gY2hpbGQucHJvcHMuc3R5bGUgPyBTdHlsZXMubWVyZ2VTdHlsZU9iamVjdHMoc3R5bGVPYmplY3QsY2hpbGQucHJvcHMuc3R5bGUsdHJ1ZSk6IHN0eWxlT2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICB9LHRoaXMpO1xuICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IFtdO1xuICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbih0aGlzLnByb3BzLkNTUyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4obnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICB9XG59XG5cbkFwcC5yZWdpc3RlclRvb2xDb25maWcoSFRNTFdyYXBwZXIsSFRNTFdyYXBwZXJDb25maWcpO1xuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5IVE1MV3JhcHBlclwiLCBIVE1MV3JhcHBlcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTFdyYXBwZXI7XG4iXX0=
