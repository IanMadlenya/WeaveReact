"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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
        key: "render",
        value: function render() {
            var navFormUI = _react2.default.createElement("div", null);
            if (this.settings.enable.value) {
                var cssNames = this.settings.rightAlign.value ? "navbar-form navbar-right" : "navbar-form";
                var controllersUI = this.settings.controllers.getNames().map(function (controllerName, index) {
                    var linkablePlaceHolder = this.settings.controllers.getObject(controllerName);
                    var ToolClass = linkablePlaceHolder.getClass();
                    var spaceValue = this.settings.space.value;
                    var marginStyle = { marginLeft: spaceValue, marginRight: spaceValue };
                    return _react2.default.createElement(
                        "span",
                        { key: index, style: marginStyle },
                        _react2.default.createElement(ToolClass, null)
                    );
                }.bind(this));
                navFormUI = _react2.default.createElement(
                    "div",
                    { className: cssNames, style: { margin: "0" } },
                    _react2.default.createElement(
                        "div",
                        { className: "form-group", style: { width: "100%" } },
                        controllersUI
                    )
                );
            }

            return navFormUI;
        }
    }]);

    return Form;
}(_react2.default.Component);

Weave.registerClass('weavereact.navbar.Form', Form, [weavejs.api.core.ILinkableObject]);

exports.default = Form;
//# sourceMappingURL=data:application/json;base64,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QUFpQixlQUFqQixDQUFwRDs7a0JBRWUiLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jb250cm9sbGVycy5jaGlsZExpc3RDYWxsYmFja3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY29udHJvbGxlcnMuY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG5hdkZvcm1VSSA9IDxkaXYvPjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgdmFyIGNzc05hbWVzID0gdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLnZhbHVlP1wibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCI6XCJuYXZiYXItZm9ybVwiO1xuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXJzVUkgPSB0aGlzLnNldHRpbmdzLmNvbnRyb2xsZXJzLmdldE5hbWVzKCkubWFwKGZ1bmN0aW9uKGNvbnRyb2xsZXJOYW1lLGluZGV4KXtcbiAgICAgICAgICAgICAgICB2YXIgbGlua2FibGVQbGFjZUhvbGRlciA9IHRoaXMuc2V0dGluZ3MuY29udHJvbGxlcnMuZ2V0T2JqZWN0KGNvbnRyb2xsZXJOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgVG9vbENsYXNzID0gbGlua2FibGVQbGFjZUhvbGRlci5nZXRDbGFzcygpO1xuICAgICAgICAgICAgICAgIHZhciBzcGFjZVZhbHVlID0gdGhpcy5zZXR0aW5ncy5zcGFjZS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgbWFyZ2luU3R5bGUgPSB7bWFyZ2luTGVmdDpzcGFjZVZhbHVlLG1hcmdpblJpZ2h0OnNwYWNlVmFsdWV9XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlPXttYXJnaW5TdHlsZX0+PFRvb2xDbGFzcyAvPjwvc3Bhbj5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBuYXZGb3JtVUkgPSA8ZGl2IGNsYXNzTmFtZT17Y3NzTmFtZXN9IHN0eWxlPXt7bWFyZ2luOlwiMFwifX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiICBzdHlsZSA9IHt7d2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250cm9sbGVyc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAobmF2Rm9ybVVJKTtcbiAgICB9XG5cbn1cbiAgICBcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyLkZvcm0nLCBGb3JtLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pOyBcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiXX0=
