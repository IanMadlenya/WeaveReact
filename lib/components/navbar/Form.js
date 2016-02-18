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
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
            this.settings.space.addImmediateCallback(this, this.forceUpdate);
            this.settings.controllers.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
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
                if (!this.props.useCSS) {
                    var iconOnly = false;
                    var styleObject = this.settings.style.getStyleFor(null);
                    if (this.props.dock !== "right" && this.props.dock !== "left" && this.settings.rightAlign) {
                        styleObject["justifyContent"] = "flex-end";
                        styleObject["marginRight"] = "auto";
                    }
                    styleObject = _Style2.default.appendVendorPrefix(styleObject);
                }
                var childStyleObject = {};
                var mode = "large";
                var space = this.settings.space.value;

                if (this.props.dock === "right" || this.props.dock === "left") {
                    mode = "small";
                    childStyleObject["marginBottom"] = space;
                } else if (this.props.dock === "top" || this.props.dock === "bottom") {
                    mode = "large";
                    childStyleObject["marginRight"] = space;
                }

                var controllersUI = this.settings.controllers.getNames().map(function (controllerName, index) {
                    var formConfig = this.settings.controllers.getObject(controllerName);
                    var ToolClass = _App2.default.getToolImplementation(Weave.getPath(formConfig).getType());
                    return _react2.default.createElement(
                        "span",
                        { key: index, style: childStyleObject },
                        _react2.default.createElement(ToolClass, { device: mode, settings: formConfig })
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
//# sourceMappingURL=data:application/json;base64,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RCxDQUF6QyxDQUFoQixDQXhCc0I7O0FBOEIxQixvQkFBRyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQWtCO0FBQ2pCLGdDQUFZOzswQkFBTSxXQUFXLEtBQUssS0FBTCxDQUFXLEdBQVgsRUFBakI7d0JBQ0ssYUFETDtxQkFBWixDQURpQjtpQkFBckIsTUFJSztBQUNGLGdDQUFZOzswQkFBTSxPQUFPLFdBQVAsRUFBTjt3QkFDTSxhQUROO3FCQUFaLENBREU7aUJBSkw7YUE5Qko7O0FBMkNBLG1CQUFRLFNBQVIsQ0E3Q0s7Ozs7V0FuQ1A7RUFBYSxnQkFBTSxTQUFOOztBQXFGbkIsTUFBTSxhQUFOLENBQW9CLHdCQUFwQixFQUE4QyxJQUE5QyxFQUFtRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBcEQ7O2tCQUVlIiwiZmlsZSI6IkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNvbnRyb2xsZXJzLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNvbnRyb2xsZXJzLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wb3NpdGlvblR5cGUgIT09IG5leHRQcm9wcy5wb3NpdGlvblR5cGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbmF2Rm9ybVVJID0gPGRpdi8+O1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG4gICAgICAgICAgICBpZighdGhpcy5wcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgICAgIHZhciBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbCk7XG4gICAgICAgICAgICAgICAgaWYoKHRoaXMucHJvcHMuZG9jayAhPT0gXCJyaWdodFwiKSAmJiAodGhpcy5wcm9wcy5kb2NrICE9PSBcImxlZnRcIikgJiYgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduKXtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJqdXN0aWZ5Q29udGVudFwiXSA9IFwiZmxleC1lbmRcIjtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdCA9IFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2hpbGRTdHlsZU9iamVjdD17fTtcbiAgICAgICAgICAgIHZhciBtb2RlID0gXCJsYXJnZVwiO1xuICAgICAgICAgICAgdmFyIHNwYWNlID0gdGhpcy5zZXR0aW5ncy5zcGFjZS52YWx1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJyaWdodFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImxlZnRcIikpe1xuICAgICAgICAgICAgICAgIG1vZGUgPSBcInNtYWxsXCI7XG4gICAgICAgICAgICAgICAgY2hpbGRTdHlsZU9iamVjdFtcIm1hcmdpbkJvdHRvbVwiXSA9IHNwYWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInRvcFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImJvdHRvbVwiKSl7XG4gICAgICAgICAgICAgICAgbW9kZSA9IFwibGFyZ2VcIjtcbiAgICAgICAgICAgICAgICBjaGlsZFN0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBzcGFjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB2YXIgY29udHJvbGxlcnNVSSA9IHRoaXMuc2V0dGluZ3MuY29udHJvbGxlcnMuZ2V0TmFtZXMoKS5tYXAoZnVuY3Rpb24oY29udHJvbGxlck5hbWUsaW5kZXgpe1xuICAgICAgICAgICAgICAgIHZhciBmb3JtQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jb250cm9sbGVycy5nZXRPYmplY3QoY29udHJvbGxlck5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKFdlYXZlLmdldFBhdGgoZm9ybUNvbmZpZykuZ2V0VHlwZSgpKVxuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2luZGV4fSBzdHlsZT17Y2hpbGRTdHlsZU9iamVjdH0+PFRvb2xDbGFzcyBkZXZpY2U9e21vZGV9IHNldHRpbmdzPXtmb3JtQ29uZmlnfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICBuYXZGb3JtVUkgPSA8ZGl2ICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY3NzfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250cm9sbGVyc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICBuYXZGb3JtVUkgPSA8ZGl2ICBzdHlsZT17c3R5bGVPYmplY3R9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xsZXJzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChuYXZGb3JtVUkpO1xuICAgIH1cblxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhci5Gb3JtJywgRm9ybSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdfQ==
