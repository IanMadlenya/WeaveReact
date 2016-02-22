"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        if (_this.props.children) _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _this.addCallbacks = _this.addCallbacks.bind(_this);
        _this.removeCallbacks = _this.removeCallbacks.bind(_this);

        return _this;
    }

    _createClass(Form, [{
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
            if (this.props.children !== nextProps.children) {
                _App2.default.hookSessionStateForComponentChildren(nextProps.children, this.settings);
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
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
            this.settings.space.addImmediateCallback(this, this.forceUpdate);
            //this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "removeCallbacks",
        value: function removeCallbacks() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
            this.settings.space.removeCallback(this, this.forceUpdate);
            //this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.removeCallbacks();
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
        key: "renderChildren",
        value: function renderChildren(CSS) {
            var childStyleObject = {};
            var space = this.settings.space.value;
            if (this.props.dock === "right" || this.props.dock === "left") {
                childStyleObject["marginBottom"] = space;
            } else if (this.props.dock === "top" || this.props.dock === "bottom") {
                childStyleObject["marginRight"] = space;
            }

            var childConfigs = this.settings.children.getObjects();
            var clonedChildren = childConfigs.map(function (childConfig, index) {
                var child = this.settings.configChildMap.get(childConfig);
                var configName = this.settings.children.getName(childConfig);
                if (child) {
                    var props = _App2.default.mergeInto({}, child.props);

                    props["settings"] = childConfig;
                    props["key"] = configName;

                    if (CSS) {
                        props["className"] = CSS[childName];
                    } else {
                        props["style"] = childStyleObject;
                    }

                    if (this.settings.childConfigMap.has(child)) this.settings.childConfigMap.delete(child);
                    var clonedChild = _react2.default.cloneElement(child, props);
                    this.settings.configChildMap.set(childConfig, clonedChild);
                    this.settings.childConfigMap.set(clonedChild, childConfig);
                    return clonedChild;
                } else {
                    var configClass = Weave.getPath(childConfig).getType();
                    var ToolClass = _App2.default.getToolImplementation(configClass);
                    var configName = this.settings.children.getName(childConfig);
                    var newChild = _react2.default.createElement(ToolClass, { key: configName, settings: childConfig });
                    return newChild;
                }
            }.bind(this));

            return clonedChildren;
        }
    }, {
        key: "render",
        value: function render() {
            var navFormUI = _react2.default.createElement("div", null);
            if (this.settings.enable.value) {
                if (!this.props.useCSS) {
                    var styleObject = this.settings.style.getStyleFor(null);
                    if (this.props.dock !== "right" && this.props.dock !== "left" && this.settings.rightAlign) {
                        styleObject["justifyContent"] = "flex-end";
                        styleObject["marginRight"] = "auto";
                    }
                    styleObject = _Style2.default.appendVendorPrefix(styleObject);
                }

                var controllersUI = [];

                if (this.props.useCSS) {
                    controllersUI = this.renderChildren(this.props.CSS);
                    navFormUI = _react2.default.createElement(
                        "div",
                        { className: this.props.css },
                        controllersUI
                    );
                } else {
                    controllersUI = this.renderChildren(null);
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
//# sourceMappingURL=data:application/json;base64,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b20gXCJyZWFjdFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSl0aGlzLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIGFkZENhbGxiYWNrcygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAvL3RoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrcygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAvL3RoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnBvc2l0aW9uVHlwZSAhPT0gbmV4dFByb3BzLnBvc2l0aW9uVHlwZSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51c2VDU1MgIT09IG5leHRQcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKENTUyl7XG4gICAgICAgIHZhciBjaGlsZFN0eWxlT2JqZWN0PXt9O1xuICAgICAgICB2YXIgc3BhY2UgPSB0aGlzLnNldHRpbmdzLnNwYWNlLnZhbHVlO1xuICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInJpZ2h0XCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwibGVmdFwiKSl7XG4gICAgICAgICAgICBjaGlsZFN0eWxlT2JqZWN0W1wibWFyZ2luQm90dG9tXCJdID0gc3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInRvcFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImJvdHRvbVwiKSl7XG4gICAgICAgICAgICBjaGlsZFN0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGlsZENvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbihjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLmdldChjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICBpZihjaGlsZCl7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BzID0gQXBwLm1lcmdlSW50byh7fSxjaGlsZC5wcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBwcm9wc1tcInNldHRpbmdzXCJdID0gY2hpbGRDb25maWc7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBjb25maWdOYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYoQ1NTKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSBDU1NbY2hpbGROYW1lXTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzdHlsZVwiXSA9IGNoaWxkU3R5bGVPYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5oYXMoY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmRlbGV0ZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQoY2xvbmVkQ2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBXZWF2ZS5nZXRQYXRoKGNoaWxkQ29uZmlnKS5nZXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9ICBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9ICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZCA9IDxUb29sQ2xhc3Mga2V5PXtjb25maWdOYW1lfSAgc2V0dGluZ3M9e2NoaWxkQ29uZmlnfS8+O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG5hdkZvcm1VSSA9IDxkaXYvPjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgaWYoIXRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwpO1xuICAgICAgICAgICAgICAgIGlmKCh0aGlzLnByb3BzLmRvY2sgIT09IFwicmlnaHRcIikgJiYgKHRoaXMucHJvcHMuZG9jayAhPT0gXCJsZWZ0XCIpICYmIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbil7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wianVzdGlmeUNvbnRlbnRcIl0gPSBcImZsZXgtZW5kXCI7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3QgPSBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyc1VJID0gW11cblxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJzVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKHRoaXMucHJvcHMuQ1NTKVxuICAgICAgICAgICAgICAgIG5hdkZvcm1VSSA9IDxkaXYgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jc3N9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xsZXJzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbihudWxsKVxuICAgICAgICAgICAgICAgIG5hdkZvcm1VSSA9IDxkaXYgIHN0eWxlPXtzdHlsZU9iamVjdH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbGxlcnNVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5hdkZvcm1VSSk7XG4gICAgfVxuXG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyLkZvcm0nLCBGb3JtLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl19
