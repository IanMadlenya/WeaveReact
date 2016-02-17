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
                    flexDirection: "row",
                    flex: "1"
                };
                if (this.props.position !== "right" && this.props.position !== "left" && this.settings.rightAlign) {
                    styleObject["justifyContent"] = "flex-end";
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
//# sourceMappingURL=data:application/json;base64,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cG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNvbnRyb2xsZXJzLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jb250cm9sbGVycy5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMucG9zaXRpb25UeXBlICE9PSBuZXh0UHJvcHMucG9zaXRpb25UeXBlKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVzZUNTUyAhPT0gbmV4dFByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG5hdkZvcm1VSSA9IDxkaXYvPjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgICAgIGZsZXg6XCIxXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCh0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBcInJpZ2h0XCIpICYmICh0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBcImxlZnRcIikgJiYgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImp1c3RpZnlDb250ZW50XCJdID0gXCJmbGV4LWVuZFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBcImF1dG9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzcGFjZSA9IHRoaXMuc2V0dGluZ3Muc3BhY2UudmFsdWU7XG4gICAgICAgICAgICB2YXIgY2hpbGRTdHlsZU9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDpzcGFjZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnBvc2l0aW9uVHlwZSA9PT0gXCJmaXhlZFwiKXtcbiAgICAgICAgICAgICAgICBpZigodGhpcy5wcm9wcy5wb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB8fCAodGhpcy5wcm9wcy5wb3NpdGlvbiA9PT0gXCJsZWZ0XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRTdHlsZU9iamVjdFtcIm1hcmdpblJpZ2h0XCJdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRTdHlsZU9iamVjdFtcIm1hcmdpbkJvdHRvbVwiXSA9IHNwYWNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXJzVUkgPSB0aGlzLnNldHRpbmdzLmNvbnRyb2xsZXJzLmdldE5hbWVzKCkubWFwKGZ1bmN0aW9uKGNvbnRyb2xsZXJOYW1lLGluZGV4KXtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY29udHJvbGxlcnMuZ2V0T2JqZWN0KGNvbnRyb2xsZXJOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgVG9vbENsYXNzID0gQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihXZWF2ZS5nZXRQYXRoKGZvcm1Db25maWcpLmdldFR5cGUoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0gc3R5bGU9e2NoaWxkU3R5bGVPYmplY3R9PjxUb29sQ2xhc3Mgc2V0dGluZ3M9e2Zvcm1Db25maWd9IC8+PC9zcGFuPlxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgICAgIG5hdkZvcm1VSSA9IDxkaXYgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jc3N9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xsZXJzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgbmF2Rm9ybVVJID0gPGRpdiAgc3R5bGU9e3N0eWxlT2JqZWN0fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250cm9sbGVyc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChuYXZGb3JtVUkpO1xuICAgIH1cblxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhci5Gb3JtJywgRm9ybSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdfQ==
