"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_React$Component) {
    _inherits(Title, _React$Component);

    function Title(props) {
        _classCallCheck(this, Title);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Title).call(this, props));

        _this.settings = _this.props.settings;
        if (_this.props.style) _this.settings.style.domDefined.state = _this.props.style;
        if (_this.props.title) _this.settings.title.state = _this.props.title;
        _this.addCallbacks = _this.addCallbacks.bind(_this);
        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
        return _this;
    }

    _createClass(Title, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                if (nextProps.settings) {
                    this.removeCallbacks();
                    this.settings = nextProps.settings;
                    this.addCallbacks();
                }
            }
            if (this.props.style !== nextProps.style) {
                // user style added through UI is Sessioned
                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
            }
            if (this.props.title !== nextProps.title) {
                // user style added through UI is Sessioned
                if (nextProps.title) this.settings.title.state = nextProps.title;
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.addCallbacks();
        }
    }, {
        key: "addCallbacks",
        value: function addCallbacks() {
            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
            this.settings.title.addImmediateCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "removeCallbacks",
        value: function removeCallbacks() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            this.settings.title.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.removeCallbacks();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.dock !== nextProps.dock) {
                return true;
            } else if (this.props.position !== nextProps.position) {
                return true;
            } else if (this.props.useCSS !== nextProps.useCSS) {
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
            var titleUI = _react2.default.createElement("div", null);

            if (this.settings.enable.value) {

                var styleObj = this.settings.style.getStyleFor();
                titleUI = _react2.default.createElement(
                    "span",
                    { style: styleObj },
                    " ",
                    this.settings.title.value
                );
            }
            return titleUI;
        }
    }]);

    return Title;
}(_react2.default.Component);

Weave.registerClass("weavereact.navbar.Title", Title, [weavejs.api.core.ILinkableObject]);
exports.default = Title;
//# sourceMappingURL=data:application/json;base64,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LEtBQUwsQ0FBVyxNQUFYLEtBQXNCLFVBQVUsTUFBVixFQUFpQjtBQUM1Qyx1QkFBTyxJQUFQLENBRDRDO2FBQTFDLE1BRUEsSUFBRyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEtBQXFCLFVBQVUsS0FBVixFQUFnQjtBQUMxQyx1QkFBTyxJQUFQLENBRDBDO2FBQXhDLE1BRUQ7QUFDRCx1QkFBTyxLQUFQLENBREM7YUFGQzs7OztpQ0FRRDtBQUNMLGdCQUFJLFVBQVUsMENBQVYsQ0FEQzs7QUFHTCxnQkFBRyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTJCOztBQUV0QixvQkFBSSxXQUFXLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsV0FBcEIsRUFBWCxDQUZrQjtBQUd0QiwwQkFBVTs7c0JBQU0sT0FBTyxRQUFQLEVBQU47O29CQUF5QixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCO2lCQUFuQyxDQUhzQjthQUE5QjtBQU1BLG1CQUFRLE9BQVIsQ0FUSzs7OztXQXRFUDtFQUFjLGdCQUFNLFNBQU47O0FBa0ZwQixNQUFNLGFBQU4sQ0FBb0IseUJBQXBCLEVBQStDLEtBQS9DLEVBQXFELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUF0RDtrQkFDZSIsImZpbGUiOiJUaXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuXG5jbGFzcyBUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlKVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50aXRsZSlcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUuc3RhdGUgPSAgdGhpcy5wcm9wcy50aXRsZTtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MgPSB0aGlzLmFkZENhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcyA9IHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc3R5bGUpdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMudGl0bGUgIT09IG5leHRQcm9wcy50aXRsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnRpdGxlKXRoaXMuc2V0dGluZ3MudGl0bGUuc3RhdGUgPSBuZXh0UHJvcHMudGl0bGU7XG4gICAgICAgIH1cblxuXG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jayAhPT0gbmV4dFByb3BzLmRvY2spe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudGl0bGUgIT09IG5leHRQcm9wcy50aXRsZSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgdGl0bGVVSSA9IDxkaXYvPjtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG5cbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVPYmogPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgICAgICAgICAgdGl0bGVVSSA9IDxzcGFuIHN0eWxlPXtzdHlsZU9ian0+IHt0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlfTwvc3Bhbj5cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGl0bGVVSSk7XG4gICAgfVxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QubmF2YmFyLlRpdGxlXCIsIFRpdGxlLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iXX0=