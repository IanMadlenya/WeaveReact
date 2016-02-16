"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

        _this.settings = _this.props.settings;
        return _this;
    }

    _createClass(Form, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
            this.settings.space.addImmediateCallback(this, this.forceUpdate);
            this.settings.controllers.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
            this.settings.space.removeCallback(this, this.forceUpdate);
            this.settings.controllers.childListCallbacks.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.positionType !== nextProps.positionType) {
                return true;
            } else if (this.props.position !== nextProps.position) {
                return true;
            } else if (this.props.useCSS !== nextProps.useCSS) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var navFormUI = _react2.default.createElement("div", null);
            if (this.settings.enable.value) {
                var styleObject = {
                    display: "flex",
                    flexDirection: "row"
                };
                if (this.setings.rightAlign) {
                    styleObject["marginRight"] = "auto";
                }
                var space = this.settings.space.value;
                var childStyleObject = {
                    marginRight: space
                };

                if (this.props.positionType === "fixed") {
                    if (this.props.position === "right" || this.props.position === "left") {
                        styleObject["flexDirection"] = "column";
                        childStyleObject["marginRight"] = 0;
                        childStyleObject["marginBottom"] = space;
                    }
                }

                var controllersUI = this.settings.controllers.getNames().map(function (controllerName, index) {
                    var formConfig = this.settings.controllers.getObject(controllerName);
                    var ToolClass = _App2.default.getToolImplementation(Weave.getPath(formConfig).getType());
                    return _react2.default.createElement(
                        "span",
                        { key: index, style: childStyleObject },
                        _react2.default.createElement(ToolClass, { settings: formConfig })
                    );
                }.bind(this));

                if (this.props.useCSS) {
                    navFormUI = _react2.default.createElement(
                        "div",
                        { className: this.props.css },
                        controllersUI
                    );
                } else {
                    navFormUI = _react2.default.createElement(
                        "div",
                        { style: styleObject },
                        controllersUI
                    );
                }
            }

            return navFormUI;
        }
    }]);

    return Form;
}(_react2.default.Component);

Weave.registerClass('weavereact.navbar.Form', Form, [weavejs.api.core.ILinkableObject]);

exports.default = Form;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNOzs7QUFFRixhQUZFLElBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixNQUVpQjs7MkVBRmpCLGlCQUdRLFFBRFM7O0FBRWQsY0FBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQVgsQ0FGRjs7S0FBbkI7O2lCQUZFOzs0Q0FPa0I7QUFDaEIsaUJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsb0JBQXJCLENBQTBDLElBQTFDLEVBQWdELEtBQUssV0FBTCxDQUFoRCxDQURnQjtBQUVoQixpQkFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixvQkFBekIsQ0FBOEMsSUFBOUMsRUFBb0QsS0FBSyxXQUFMLENBQXBELENBRmdCO0FBR2hCLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLG9CQUFwQixDQUF5QyxJQUF6QyxFQUErQyxLQUFLLFdBQUwsQ0FBL0MsQ0FIZ0I7QUFJaEIsaUJBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsa0JBQTFCLENBQTZDLG9CQUE3QyxDQUFrRSxJQUFsRSxFQUF3RSxLQUFLLFdBQUwsQ0FBeEUsQ0FKZ0I7Ozs7K0NBT0c7QUFDbkIsaUJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsY0FBckIsQ0FBb0MsSUFBcEMsRUFBMEMsS0FBSyxXQUFMLENBQTFDLENBRG1CO0FBRW5CLGlCQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLGNBQXpCLENBQXdDLElBQXhDLEVBQThDLEtBQUssV0FBTCxDQUE5QyxDQUZtQjtBQUduQixpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixjQUFwQixDQUFtQyxJQUFuQyxFQUF5QyxLQUFLLFdBQUwsQ0FBekMsQ0FIbUI7QUFJbkIsaUJBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsa0JBQTFCLENBQTZDLGNBQTdDLENBQTRELElBQTVELEVBQWtFLEtBQUssV0FBTCxDQUFsRSxDQUptQjs7Ozs4Q0FPRCxXQUFVO0FBQzVCLGdCQUFHLEtBQUssS0FBTCxDQUFXLFlBQVgsS0FBNEIsVUFBVSxZQUFWLEVBQXVCO0FBQ2xELHVCQUFPLElBQVAsQ0FEa0Q7YUFBdEQsTUFFTSxJQUFHLEtBQUssS0FBTCxDQUFXLFFBQVgsS0FBd0IsVUFBVSxRQUFWLEVBQW1CO0FBQ2hELHVCQUFPLElBQVAsQ0FEZ0Q7YUFBOUMsTUFFQSxJQUFHLEtBQUssS0FBTCxDQUFXLE1BQVgsS0FBc0IsVUFBVSxNQUFWLEVBQWlCO0FBQzVDLHVCQUFPLElBQVAsQ0FENEM7YUFBMUMsTUFFRDtBQUNELHVCQUFPLEtBQVAsQ0FEQzthQUZDOzs7O2lDQU9EO0FBQ0wsZ0JBQUksWUFBWSwwQ0FBWixDQURDO0FBRUwsZ0JBQUcsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUEyQjtBQUMxQixvQkFBSSxjQUFjO0FBQ2QsNkJBQVEsTUFBUjtBQUNBLG1DQUFjLEtBQWQ7aUJBRkEsQ0FEc0I7QUFLMUIsb0JBQUcsS0FBSyxPQUFMLENBQWEsVUFBYixFQUF3QjtBQUN2QixnQ0FBWSxhQUFaLElBQTZCLE1BQTdCLENBRHVCO2lCQUEzQjtBQUdBLG9CQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQVJjO0FBUzFCLG9CQUFJLG1CQUFtQjtBQUNuQixpQ0FBWSxLQUFaO2lCQURBLENBVHNCOztBQWExQixvQkFBRyxLQUFLLEtBQUwsQ0FBVyxZQUFYLEtBQTRCLE9BQTVCLEVBQW9DO0FBQ25DLHdCQUFHLElBQUMsQ0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixPQUF4QixJQUFxQyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLE1BQXhCLEVBQWdDO0FBQ3JFLG9DQUFZLGVBQVosSUFBK0IsUUFBL0IsQ0FEcUU7QUFFckUseUNBQWlCLGFBQWpCLElBQWtDLENBQWxDLENBRnFFO0FBR3JFLHlDQUFpQixjQUFqQixJQUFtQyxLQUFuQyxDQUhxRTtxQkFBekU7aUJBREo7O0FBUUEsb0JBQUksZ0JBQWdCLEtBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsUUFBMUIsR0FBcUMsR0FBckMsQ0FBeUMsVUFBUyxjQUFULEVBQXdCLEtBQXhCLEVBQThCO0FBQ3ZGLHdCQUFJLGFBQWEsS0FBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixTQUExQixDQUFvQyxjQUFwQyxDQUFiLENBRG1GO0FBRXZGLHdCQUFJLFlBQVksY0FBSSxxQkFBSixDQUEwQixNQUFNLE9BQU4sQ0FBYyxVQUFkLEVBQTBCLE9BQTFCLEVBQTFCLENBQVosQ0FGbUY7QUFHdkYsMkJBQU87OzBCQUFNLEtBQUssS0FBTCxFQUFZLE9BQU8sZ0JBQVAsRUFBbEI7d0JBQTJDLDhCQUFDLFNBQUQsSUFBVyxVQUFVLFVBQVYsRUFBWCxDQUEzQztxQkFBUCxDQUh1RjtpQkFBOUIsQ0FJM0QsSUFKMkQsQ0FJdEQsSUFKc0QsQ0FBekMsQ0FBaEIsQ0FyQnNCOztBQTJCMUIsb0JBQUcsS0FBSyxLQUFMLENBQVcsTUFBWCxFQUFrQjtBQUNqQixnQ0FBWTs7MEJBQU0sV0FBVyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWpCO3dCQUNLLGFBREw7cUJBQVosQ0FEaUI7aUJBQXJCLE1BSUs7QUFDRixnQ0FBWTs7MEJBQU0sT0FBTyxXQUFQLEVBQU47d0JBQ00sYUFETjtxQkFBWixDQURFO2lCQUpMO2FBM0JKOztBQXdDQSxtQkFBUSxTQUFSLENBMUNLOzs7O1dBakNQO0VBQWEsZ0JBQU0sU0FBTjs7QUFnRm5CLE1BQU0sYUFBTixDQUFvQix3QkFBcEIsRUFBOEMsSUFBOUMsRUFBbUQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXBEOztrQkFFZSIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY29udHJvbGxlcnMuY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNvbnRyb2xsZXJzLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG4gICAgXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMucG9zaXRpb25UeXBlICE9PSBuZXh0UHJvcHMucG9zaXRpb25UeXBlKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVzZUNTUyAhPT0gbmV4dFByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG5hdkZvcm1VSSA9IDxkaXYvPjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnNldGluZ3MucmlnaHRBbGlnbil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNwYWNlID0gdGhpcy5zZXR0aW5ncy5zcGFjZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBjaGlsZFN0eWxlT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OnNwYWNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMucG9zaXRpb25UeXBlID09PSBcImZpeGVkXCIpe1xuICAgICAgICAgICAgICAgIGlmKCh0aGlzLnByb3BzLnBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHx8ICh0aGlzLnByb3BzLnBvc2l0aW9uID09PSBcImxlZnRcIikpe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFN0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFN0eWxlT2JqZWN0W1wibWFyZ2luQm90dG9tXCJdID0gc3BhY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY29udHJvbGxlcnNVSSA9IHRoaXMuc2V0dGluZ3MuY29udHJvbGxlcnMuZ2V0TmFtZXMoKS5tYXAoZnVuY3Rpb24oY29udHJvbGxlck5hbWUsaW5kZXgpe1xuICAgICAgICAgICAgICAgIHZhciBmb3JtQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jb250cm9sbGVycy5nZXRPYmplY3QoY29udHJvbGxlck5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKFdlYXZlLmdldFBhdGgoZm9ybUNvbmZpZykuZ2V0VHlwZSgpKVxuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2luZGV4fSBzdHlsZT17Y2hpbGRTdHlsZU9iamVjdH0+PFRvb2xDbGFzcyBzZXR0aW5ncz17Zm9ybUNvbmZpZ30gLz48L3NwYW4+XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICAgICAgbmF2Rm9ybVVJID0gPGRpdiAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNzc30gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbGxlcnNVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICBuYXZGb3JtVUkgPSA8ZGl2ICBzdHlsZT17c3R5bGVPYmplY3R9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xsZXJzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChuYXZGb3JtVUkpO1xuICAgIH1cblxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhci5Gb3JtJywgRm9ybSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdfQ==
