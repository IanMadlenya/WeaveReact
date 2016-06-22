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

var Form = function (_AbstractComponent) {
    _inherits(Form, _AbstractComponent);

    function Form(props) {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props, "container"));
    }

    // called only when React Parent render is called


    _createClass(Form, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            _get(Object.getPrototypeOf(Form.prototype), "shouldComponentUpdate", this).call(this, nextProps);
            if (this.props.dock !== nextProps.dock) {
                if (_ComponentManager2.default.debug) console.log("props.dock changed");
                return true;
            } else if (this.props.position !== nextProps.position) {
                if (_ComponentManager2.default.debug) console.log("props.position changed");
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            var childStyleObject = {};
            var space = this.settings.space.value;
            if (this.props.dock === "right" || this.props.dock === "left") {
                childStyleObject["marginBottom"] = space;
            } else if (this.props.dock === "top" || this.props.dock === "bottom") {
                childStyleObject["marginRight"] = space;
            }

            this.settings.props.addChildProps("style", childStyleObject);
            return _ComponentManager2.default.renderChildren(this);
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Form - render");
            if (!this.settings.visible.value) return _react2.default.createElement("div", null);

            var styleObject = this.settings.style.state;
            var cssName = this.settings.CSS.getCSSFor();
            var childrenUI = this.renderChildren();

            if (this.settings.useCSS.state) {
                return _react2.default.createElement(
                    "div",
                    { className: cssName },
                    childrenUI
                );
            } else {
                return _react2.default.createElement(
                    "div",
                    { style: styleObject },
                    childrenUI
                );
            }
        }
    }]);

    return Form;
}(_AbstractComponent3.default);

Weave.registerClass(Form, ['weavereact.navbar.Form'], [weavejs.api.core.ILinkableObject], 'Navbar Form');

exports.default = Form;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUVGLGFBRkUsSUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE1BRWlCOztzRUFGakIsaUJBR1EsT0FBTSxjQURHO0tBQW5COzs7OztpQkFGRTs7OENBU29CLFdBQVU7QUFDNUIsdUNBVkYsMkRBVThCLFVBQTVCLENBRDRCO0FBRTVCLGdCQUFHLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsVUFBVSxJQUFWLEVBQWU7QUFDbEMsb0JBQUcsMkJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLG9CQUFaLEVBQTFCO0FBQ0EsdUJBQU8sSUFBUCxDQUZrQzthQUF0QyxNQUdNLElBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFBbUI7QUFDaEQsb0JBQUcsMkJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLHdCQUFaLEVBQTFCO0FBQ0EsdUJBQU8sSUFBUCxDQUZnRDthQUE5QyxNQUdEO0FBQ0QsdUJBQU8sS0FBUCxDQURDO2FBSEM7Ozs7eUNBUU07QUFDWixnQkFBSSxtQkFBaUIsRUFBakIsQ0FEUTtBQUVaLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQUZBO0FBR1osZ0JBQUcsSUFBQyxDQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLE9BQXBCLElBQWlDLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsTUFBcEIsRUFBNEI7QUFDN0QsaUNBQWlCLGNBQWpCLElBQW1DLEtBQW5DLENBRDZEO2FBQWpFLE1BR0ssSUFBRyxJQUFDLENBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsS0FBcEIsSUFBK0IsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixRQUFwQixFQUE4QjtBQUNsRSxpQ0FBaUIsYUFBakIsSUFBa0MsS0FBbEMsQ0FEa0U7YUFBakU7O0FBSUwsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsYUFBcEIsQ0FBa0MsT0FBbEMsRUFBMEMsZ0JBQTFDLEVBVlk7QUFXWixtQkFBTywyQkFBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBUCxDQVhZOzs7O2lDQWlCUDtBQUNMLGdCQUFHLDJCQUFpQixLQUFqQixFQUF1QixRQUFRLEdBQVIsQ0FBWSxlQUFaLEVBQTFCO0FBQ0EsZ0JBQUcsQ0FBQyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEVBQ0EsT0FBTywwQ0FBUCxDQURKOztBQUdBLGdCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQUxiO0FBTUwsZ0JBQUksVUFBVSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFNBQWxCLEVBQVYsQ0FOQztBQU9MLGdCQUFJLGFBQWEsS0FBSyxjQUFMLEVBQWIsQ0FQQzs7QUFTTCxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTJCO0FBQzFCLHVCQUFPOztzQkFBTSxXQUFXLE9BQVgsRUFBTjtvQkFDVSxVQURWO2lCQUFQLENBRDBCO2FBQTlCLE1BSUs7QUFDRCx1QkFBTzs7c0JBQU0sT0FBTyxXQUFQLEVBQU47b0JBQ1UsVUFEVjtpQkFBUCxDQURDO2FBSkw7Ozs7V0FoREY7OztBQThETixNQUFNLGFBQU4sQ0FBcUIsSUFBckIsRUFBMEIsQ0FBQyx3QkFBRCxDQUExQixFQUFxRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdEQsRUFBd0YsYUFBeEY7O2tCQUVlIiwiZmlsZSI6IkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcblxuY2xhc3MgRm9ybSBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzLFwiY29udGFpbmVyXCIpO1xuICAgIH1cblxuXG5cbiAgICAvLyBjYWxsZWQgb25seSB3aGVuIFJlYWN0IFBhcmVudCByZW5kZXIgaXMgY2FsbGVkXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jayAhPT0gbmV4dFByb3BzLmRvY2spe1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcInByb3BzLmRvY2sgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwicHJvcHMucG9zaXRpb24gY2hhbmdlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICB2YXIgY2hpbGRTdHlsZU9iamVjdD17fTtcbiAgICAgICAgdmFyIHNwYWNlID0gdGhpcy5zZXR0aW5ncy5zcGFjZS52YWx1ZTtcbiAgICAgICAgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJyaWdodFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImxlZnRcIikpe1xuICAgICAgICAgICAgY2hpbGRTdHlsZU9iamVjdFtcIm1hcmdpbkJvdHRvbVwiXSA9IHNwYWNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJ0b3BcIikgfHwgKHRoaXMucHJvcHMuZG9jayA9PT0gXCJib3R0b21cIikpe1xuICAgICAgICAgICAgY2hpbGRTdHlsZU9iamVjdFtcIm1hcmdpblJpZ2h0XCJdID0gc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJzdHlsZVwiLGNoaWxkU3R5bGVPYmplY3QpO1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJGb3JtIC0gcmVuZGVyXCIpO1xuICAgICAgICBpZighdGhpcy5zZXR0aW5ncy52aXNpYmxlLnZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcblxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLnN0YXRlO1xuICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy5zdGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiAgY2xhc3NOYW1lPXtjc3NOYW1lfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiAgc3R5bGU9e3N0eWxlT2JqZWN0fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoIEZvcm0sWyd3ZWF2ZXJlYWN0Lm5hdmJhci5Gb3JtJ10sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSwnTmF2YmFyIEZvcm0nKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdfQ==