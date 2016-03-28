"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ComponentManager = require("../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent = require("../AbstractComponent");

var _AbstractComponent2 = _interopRequireDefault(_AbstractComponent);

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

            return React.createElement(
                "div",
                { style: this.props.style, onClick: this.props.onClick },
                this.props.children
            );
        }
    }]);

    return HTMLWrapper;
}(React.Component);

_ComponentManager2.default.registerToolConfig(HTMLWrapper, _HTMLWrapperConfig2.default);
_ComponentManager2.default.registerToolImplementation("weavereact.HTMLWrapperConfig", HTMLWrapper);

Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper, [weavejs.api.core.ILinkableObject]);

exports.default = HTMLWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTTs7O0FBRUYsYUFGRSxXQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsYUFFaUI7O3NFQUZqQix3QkFHUSxRQURTO0tBQW5COztpQkFGRTs7aUNBUU87O0FBRUwsbUJBQVE7O2tCQUFLLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixTQUFTLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBdkM7Z0JBQ0ssS0FBSyxLQUFMLENBQVcsUUFBWDthQURiLENBRks7Ozs7V0FSUDtFQUFvQixNQUFNLFNBQU47O0FBaUIxQiwyQkFBaUIsa0JBQWpCLENBQW9DLFdBQXBDO0FBQ0EsMkJBQWlCLDBCQUFqQixDQUE0Qyw4QkFBNUMsRUFBMkUsV0FBM0U7O0FBRUEsTUFBTSxhQUFOLENBQW9CLHdCQUFwQixFQUE4QyxXQUE5QyxFQUEwRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBM0Q7O2tCQUVlIiwiZmlsZSI6IkhUTUxXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcbmltcG9ydCBIVE1MV3JhcHBlckNvbmZpZyBmcm9tIFwiLi4vY29uZmlncy9IVE1MV3JhcHBlckNvbmZpZ1wiO1xuXG5jbGFzcyBIVE1MV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgfVxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhIVE1MV3JhcHBlcixIVE1MV3JhcHBlckNvbmZpZyk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5IVE1MV3JhcHBlckNvbmZpZ1wiLEhUTUxXcmFwcGVyKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuSFRNTFdyYXBwZXJcIiwgSFRNTFdyYXBwZXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxXcmFwcGVyO1xuIl19
