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
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
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
            this.settings.addGapAt.addImmediateCallback(this, this.forceUpdate);
            //this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "removeCallbacks",
        value: function removeCallbacks() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
            this.settings.space.removeCallback(this, this.forceUpdate);
            this.settings.addGapAt.removeCallback(this, this.forceUpdate);
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
                    if (this.props.dock !== "right" && this.props.dock !== "left" && this.settings.rightAlign.state) {
                        styleObject["justifyContent"] = "flex-end";
                        //styleObject["marginRight"] = "auto";
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
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXBEOztrQkFFZSIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcyA9IHRoaXMuYWRkQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzID0gdGhpcy5yZW1vdmVDYWxsYmFja3MuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc3R5bGUpdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbil7XG4gICAgICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hZGRHYXBBdC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgLy90aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFja3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hZGRHYXBBdC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgLy90aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgIH1cblxuXG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wb3NpdGlvblR5cGUgIT09IG5leHRQcm9wcy5wb3NpdGlvblR5cGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXJDaGlsZHJlbihDU1Mpe1xuICAgICAgICB2YXIgY2hpbGRTdHlsZU9iamVjdD17fTtcbiAgICAgICAgdmFyIHNwYWNlID0gdGhpcy5zZXR0aW5ncy5zcGFjZS52YWx1ZTtcbiAgICAgICAgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJyaWdodFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImxlZnRcIikpe1xuICAgICAgICAgICAgY2hpbGRTdHlsZU9iamVjdFtcIm1hcmdpbkJvdHRvbVwiXSA9IHNwYWNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJ0b3BcIikgfHwgKHRoaXMucHJvcHMuZG9jayA9PT0gXCJib3R0b21cIikpe1xuICAgICAgICAgICAgY2hpbGRTdHlsZU9iamVjdFtcIm1hcmdpblJpZ2h0XCJdID0gc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGRDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IGNoaWxkQ29uZmlncy5tYXAoZnVuY3Rpb24oY2hpbGRDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5nZXQoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IEFwcC5tZXJnZUludG8oe30sY2hpbGQucHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgICAgIHByb3BzW1wia2V5XCJdID0gY29uZmlnTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmKENTUyl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wiY2xhc3NOYW1lXCJdID0gQ1NTW2NoaWxkTmFtZV07XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wic3R5bGVcIl0gPSBjaGlsZFN0eWxlT2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5kZWxldGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgIHZhciBjbG9uZWRDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KGNsb25lZENoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGQ7XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV2VhdmUuZ2V0UGF0aChjaGlsZENvbmZpZykuZ2V0VHlwZSgpO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSA8VG9vbENsYXNzIGtleT17Y29uZmlnTmFtZX0gIHNldHRpbmdzPXtjaGlsZENvbmZpZ30vPjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBuYXZGb3JtVUkgPSA8ZGl2Lz47XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIGlmKCF0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsKTtcbiAgICAgICAgICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrICE9PSBcInJpZ2h0XCIpICYmICh0aGlzLnByb3BzLmRvY2sgIT09IFwibGVmdFwiKSAmJiB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24uc3RhdGUpe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImp1c3RpZnlDb250ZW50XCJdID0gXCJmbGV4LWVuZFwiO1xuICAgICAgICAgICAgICAgICAgICAvL3N0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3QgPSBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyc1VJID0gW11cblxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJzVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKHRoaXMucHJvcHMuQ1NTKVxuICAgICAgICAgICAgICAgIG5hdkZvcm1VSSA9IDxkaXYgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jc3N9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xsZXJzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbihudWxsKVxuICAgICAgICAgICAgICAgIG5hdkZvcm1VSSA9IDxkaXYgIHN0eWxlPXtzdHlsZU9iamVjdH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbGxlcnNVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5hdkZvcm1VSSk7XG4gICAgfVxuXG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyLkZvcm0nLCBGb3JtLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl19
