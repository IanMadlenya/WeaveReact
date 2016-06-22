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

var _Link = require("./Link");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_AbstractComponent) {
    _inherits(List, _AbstractComponent);

    function List(props) {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props, "container"));
    }

    // called only when React Parent render is called


    _createClass(List, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            _get(Object.getPrototypeOf(List.prototype), "shouldComponentUpdate", this).call(this, nextProps);
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

            var linkStyleObject = {};
            var iconOnly = false;
            var space = this.settings.space.value;
            if (this.props.dock === "right" || this.props.dock === "left") {
                iconOnly = true;
                linkStyleObject["marginBottom"] = space;
            } else if (this.props.dock === "top" || this.props.dock === "bottom") {
                iconOnly = false;
                linkStyleObject["marginRight"] = space;
            }

            this.settings.props.addChildProps("iconOnly", iconOnly);
            this.settings.props.addChildProps("style", linkStyleObject);
            this.settings.props.addChildProps("isActive", false, true);
            this.settings.props.keyProp = "objectName";
            this.settings.props.addOddChildren([this.settings.activePage.value]);
            return _ComponentManager2.default.renderChildren(this);
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("List - render");
            if (!this.settings.visible.value) return _react2.default.createElement("div", null);

            var styleObject = this.settings.style.state;
            var cssName = this.settings.CSS.getCSSFor();
            var childrenUI = this.renderChildren();

            if (this.settings.useCSS.state) {
                return _react2.default.createElement(
                    "ul",
                    { className: cssName },
                    childrenUI
                );
            } else {
                return _react2.default.createElement(
                    "ul",
                    { style: styleObject },
                    childrenUI
                );
            }
        }
    }]);

    return List;
}(_AbstractComponent3.default);

Weave.registerClass(List, ["weavereact.navbar.List"], [weavejs.api.core.ILinkableObject], 'Navbar List');
exports.default = List;
//# sourceMappingURL=data:application/json;base64,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QUFLLE9BQU8sV0FBUCxFQUFMO29CQUEwQixVQUExQjtpQkFBUCxDQURBO2FBSEo7Ozs7V0F0REY7OztBQStETixNQUFNLGFBQU4sQ0FBcUIsSUFBckIsRUFBMEIsQ0FBQyx3QkFBRCxDQUExQixFQUFxRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdEQsRUFBd0YsYUFBeEY7a0JBQ2UiLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuXG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzLFwiY29udGFpbmVyXCIpO1xuICAgIH1cblxuXG4gICAgLy8gY2FsbGVkIG9ubHkgd2hlbiBSZWFjdCBQYXJlbnQgcmVuZGVyIGlzIGNhbGxlZFxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwicHJvcHMuZG9jayBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJwcm9wcy5wb3NpdGlvbiBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcblxuICAgICAgICB2YXIgbGlua1N0eWxlT2JqZWN0PXt9O1xuICAgICAgICB2YXIgaWNvbk9ubHkgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNwYWNlID0gdGhpcy5zZXR0aW5ncy5zcGFjZS52YWx1ZTtcbiAgICAgICAgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJyaWdodFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImxlZnRcIikpe1xuICAgICAgICAgICAgaWNvbk9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgbGlua1N0eWxlT2JqZWN0W1wibWFyZ2luQm90dG9tXCJdID0gc3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInRvcFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImJvdHRvbVwiKSl7XG4gICAgICAgICAgICBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgbGlua1N0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImljb25Pbmx5XCIsaWNvbk9ubHkpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJzdHlsZVwiLGxpbmtTdHlsZU9iamVjdCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImlzQWN0aXZlXCIsZmFsc2UsdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMua2V5UHJvcCA9IFwib2JqZWN0TmFtZVwiO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZE9kZENoaWxkcmVuKFt0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UudmFsdWVdKTtcbiAgICAgICAgcmV0dXJuICBDb21wb25lbnRNYW5hZ2VyLnJlbmRlckNoaWxkcmVuKHRoaXMpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiTGlzdCAtIHJlbmRlclwiKTtcbiAgICAgICAgaWYoIXRoaXMuc2V0dGluZ3MudmlzaWJsZS52YWx1ZSlcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1Muc3RhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9e2Nzc05hbWV9PntjaGlsZHJlblVJfTwvdWw+O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gPHVsICBzdHlsZT17c3R5bGVPYmplY3R9PntjaGlsZHJlblVJfTwvdWw+O1xuICAgICAgICB9XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBMaXN0LFtcIndlYXZlcmVhY3QubmF2YmFyLkxpc3RcIl0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSwnTmF2YmFyIExpc3QnKTtcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXX0=