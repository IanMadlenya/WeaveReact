"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_AbstractComponent) {
    _inherits(Title, _AbstractComponent);

    function Title(props) {
        _classCallCheck(this, Title);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Title).call(this, props));

        if (_this.props.title) _this.settings.title.state = _this.props.title;
        return _this;
    }

    _createClass(Title, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _get(Object.getPrototypeOf(Title.prototype), "componentWillReceiveProps", this).call(this, nextProps);
            if (this.props.title !== nextProps.title) {
                // user style added through UI is Sessioned
                if (nextProps.title) this.settings.title.state = nextProps.title;
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            _get(Object.getPrototypeOf(Title.prototype), "shouldComponentUpdate", this).call(this, nextProps);
            if (this.props.dock !== nextProps.dock) {
                return true;
            } else if (this.props.position !== nextProps.position) {
                return true;
            } else if (this.props.title !== nextProps.title) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Title ---Render---");
            if (!this.settings.visible.value) return _react2.default.createElement("div", null);

            var styleObj = this.settings.style.state;

            return _react2.default.createElement(
                "span",
                { style: styleObj },
                this.settings.title.value
            );
        }
    }]);

    return Title;
}(_AbstractComponent3.default);

Weave.registerClass("weavereact.navbar.Title", Title, [weavejs.api.core.ILinkableObject]);
exports.default = Title;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNOzs7QUFFRixhQUZFLEtBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixPQUVpQjs7MkVBRmpCLGtCQUdRLFFBRFM7O0FBRWYsWUFBRyxNQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQ0MsTUFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixHQUE2QixNQUFLLEtBQUwsQ0FBVyxLQUFYLENBRGpDO3FCQUZlO0tBQW5COztpQkFGRTs7a0RBU3dCLFdBQVU7QUFDaEMsdUNBVkYsZ0VBVWtDLFVBQWhDLENBRGdDO0FBRWhDLGdCQUFHLEtBQUssS0FBTCxDQUFXLEtBQVgsS0FBcUIsVUFBVSxLQUFWLEVBQWdCOztBQUNwQyxvQkFBRyxVQUFVLEtBQVYsRUFBZ0IsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixHQUE0QixVQUFVLEtBQVYsQ0FBL0M7YUFESjs7Ozs4Q0FPa0IsV0FBVTtBQUM1Qix1Q0FuQkYsNERBbUI4QixVQUE1QixDQUQ0QjtBQUU1QixnQkFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLFVBQVUsSUFBVixFQUFlO0FBQ2xDLHVCQUFPLElBQVAsQ0FEa0M7YUFBdEMsTUFFTSxJQUFHLEtBQUssS0FBTCxDQUFXLFFBQVgsS0FBd0IsVUFBVSxRQUFWLEVBQW1CO0FBQ2hELHVCQUFPLElBQVAsQ0FEZ0Q7YUFBOUMsTUFFQSxJQUFHLEtBQUssS0FBTCxDQUFXLEtBQVgsS0FBcUIsVUFBVSxLQUFWLEVBQWdCO0FBQzFDLHVCQUFPLElBQVAsQ0FEMEM7YUFBeEMsTUFFRDtBQUNELHVCQUFPLEtBQVAsQ0FEQzthQUZDOzs7O2lDQVFEO0FBQ0wsZ0JBQUcsMkJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLG9CQUFaLEVBQTFCO0FBQ0EsZ0JBQUcsQ0FBQyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEVBQ0MsT0FBTywwQ0FBUCxDQURMOztBQUdBLGdCQUFJLFdBQVcsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQUxWOztBQU9MLG1CQUFPOztrQkFBTSxPQUFPLFFBQVAsRUFBTjtnQkFBd0IsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQjthQUEvQixDQVBLOzs7O1dBaENQOzs7QUEwQ04sTUFBTSxhQUFOLENBQW9CLHlCQUFwQixFQUErQyxLQUEvQyxFQUFxRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdEQ7a0JBQ2UiLCJmaWxlIjoiVGl0bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcblxuY2xhc3MgVGl0bGUgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudGl0bGUpXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnN0YXRlID0gIHRoaXMucHJvcHMudGl0bGU7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50aXRsZSAhPT0gbmV4dFByb3BzLnRpdGxlKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihuZXh0UHJvcHMudGl0bGUpdGhpcy5zZXR0aW5ncy50aXRsZS5zdGF0ZSA9IG5leHRQcm9wcy50aXRsZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcylcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy50aXRsZSAhPT0gbmV4dFByb3BzLnRpdGxlKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJUaXRsZSAtLS1SZW5kZXItLS1cIik7XG4gICAgICAgIGlmKCF0aGlzLnNldHRpbmdzLnZpc2libGUudmFsdWUpXG4gICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcblxuICAgICAgICB2YXIgc3R5bGVPYmogPSB0aGlzLnNldHRpbmdzLnN0eWxlLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiA8c3BhbiBzdHlsZT17c3R5bGVPYmp9Pnt0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlfTwvc3Bhbj5cbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuVGl0bGVcIiwgVGl0bGUsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiJdfQ==
