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
//# sourceMappingURL=data:application/json;base64,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QUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsUUFBMUIsR0FBcUMsR0FBckMsQ0FBeUMsVUFBUyxjQUFULEVBQXdCLEtBQXhCLEVBQThCO0FBQ3ZGLHdCQUFJLGFBQWEsS0FBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixTQUExQixDQUFvQyxjQUFwQyxDQUFiLENBRG1GO0FBRXZGLHdCQUFJLFlBQVksY0FBSSxxQkFBSixDQUEwQixNQUFNLE9BQU4sQ0FBYyxVQUFkLEVBQTBCLE9BQTFCLEVBQTFCLENBQVosQ0FGbUY7QUFHdkYsMkJBQU87OzBCQUFNLEtBQUssS0FBTCxFQUFZLE9BQU8sZ0JBQVAsRUFBbEI7d0JBQTJDLDhCQUFDLFNBQUQsSUFBVyxVQUFVLFVBQVYsRUFBWCxDQUEzQztxQkFBUCxDQUh1RjtpQkFBOUIsQ0FJM0QsSUFKMkQsQ0FJdEQsSUFKc0QsQ0FBekMsQ0FBaEIsQ0FyQnNCOztBQTJCMUIsb0JBQUcsS0FBSyxLQUFMLENBQVcsTUFBWCxFQUFrQjtBQUNqQixnQ0FBWTs7MEJBQU0sV0FBVyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWpCO3dCQUNLLGFBREw7cUJBQVosQ0FEaUI7aUJBQXJCLE1BSUs7QUFDRixnQ0FBWTs7MEJBQU0sT0FBTyxXQUFQLEVBQU47d0JBQ00sYUFETjtxQkFBWixDQURFO2lCQUpMO2FBM0JKOztBQXdDQSxtQkFBUSxTQUFSLENBMUNLOzs7O1dBakNQO0VBQWEsZ0JBQU0sU0FBTjs7QUFnRm5CLE1BQU0sYUFBTixDQUFvQix3QkFBcEIsRUFBOEMsSUFBOUMsRUFBbUQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXBEOztrQkFFZSIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY29udHJvbGxlcnMuY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNvbnRyb2xsZXJzLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wb3NpdGlvblR5cGUgIT09IG5leHRQcm9wcy5wb3NpdGlvblR5cGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbmF2Rm9ybVVJID0gPGRpdi8+O1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG4gICAgICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMuc2V0aW5ncy5yaWdodEFsaWduKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcIm1hcmdpblJpZ2h0XCJdID0gXCJhdXRvXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3BhY2UgPSB0aGlzLnNldHRpbmdzLnNwYWNlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGNoaWxkU3R5bGVPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6c3BhY2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5wb3NpdGlvblR5cGUgPT09IFwiZml4ZWRcIil7XG4gICAgICAgICAgICAgICAgaWYoKHRoaXMucHJvcHMucG9zaXRpb24gPT09IFwicmlnaHRcIikgfHwgKHRoaXMucHJvcHMucG9zaXRpb24gPT09IFwibGVmdFwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkU3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyc1VJID0gdGhpcy5zZXR0aW5ncy5jb250cm9sbGVycy5nZXROYW1lcygpLm1hcChmdW5jdGlvbihjb250cm9sbGVyTmFtZSxpbmRleCl7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1Db25maWcgPSB0aGlzLnNldHRpbmdzLmNvbnRyb2xsZXJzLmdldE9iamVjdChjb250cm9sbGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9IEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24oV2VhdmUuZ2V0UGF0aChmb3JtQ29uZmlnKS5nZXRUeXBlKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlPXtjaGlsZFN0eWxlT2JqZWN0fT48VG9vbENsYXNzIHNldHRpbmdzPXtmb3JtQ29uZmlnfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICBuYXZGb3JtVUkgPSA8ZGl2ICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY3NzfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250cm9sbGVyc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgIG5hdkZvcm1VSSA9IDxkaXYgIHN0eWxlPXtzdHlsZU9iamVjdH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbGxlcnNVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAobmF2Rm9ybVVJKTtcbiAgICB9XG5cbn1cblxuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXIuRm9ybScsIEZvcm0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXX0=
