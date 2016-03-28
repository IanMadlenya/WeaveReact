"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_AbstractComponent) {
    _inherits(SideBar, _AbstractComponent);

    function SideBar(props) {
        _classCallCheck(this, SideBar);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SideBar).call(this, props, "container"));
    }

    _createClass(SideBar, [{
        key: "renderChildren",
        value: function renderChildren() {
            var iconMode = false;
            if (!this.settings.open.state && this.settings.static.state) iconMode = true;
            this.settings.props.addChildProps("iconMode", iconMode);
            return _ComponentManager2.default.renderChildren(this);
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Sidebar - render");
            if (!this.settings.visible.state) return React.createElement("div", null);

            var styleObject = this.settings.style.state;
            var childrenUI = this.renderChildren();
            return React.createElement(
                "div",
                { style: styleObject },
                childrenUI
            );
        }
    }]);

    return SideBar;
}(_AbstractComponent3.default);

Weave.registerClass("weavereact.sideBarContainer.SideBar", SideBar, [weavejs.api.core.ILinkableObject]);

exports.default = SideBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUNGLGFBREUsT0FDRixDQUFZLEtBQVosRUFBbUI7OEJBRGpCLFNBQ2lCOztzRUFEakIsb0JBRVEsT0FBTSxjQURHO0tBQW5COztpQkFERTs7eUNBTWM7QUFDWixnQkFBSSxXQUFXLEtBQVgsQ0FEUTtBQUVaLGdCQUFHLENBQUMsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixJQUE0QixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQzNCLFdBQVcsSUFBWCxDQURMO0FBRUEsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsYUFBcEIsQ0FBa0MsVUFBbEMsRUFBNkMsUUFBN0MsRUFKWTtBQUtaLG1CQUFRLDJCQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFSLENBTFk7Ozs7aUNBU1A7QUFDTCxnQkFBRywyQkFBaUIsS0FBakIsRUFBdUIsUUFBUSxHQUFSLENBQVksa0JBQVosRUFBMUI7QUFDQSxnQkFBRyxDQUFDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsRUFDQSxPQUFPLGdDQUFQLENBREo7O0FBR0EsZ0JBQUksY0FBZSxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLENBTGQ7QUFNTCxnQkFBSSxhQUFhLEtBQUssY0FBTCxFQUFiLENBTkM7QUFPTCxtQkFBTzs7a0JBQUssT0FBTyxXQUFQLEVBQUw7Z0JBQ0ssVUFETDthQUFQLENBUEs7Ozs7V0FmUDs7O0FBNkJOLE1BQU0sYUFBTixDQUFvQixxQ0FBcEIsRUFBMkQsT0FBM0QsRUFBbUUsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXBFOztrQkFFZSIsImZpbGUiOiJTaWRlQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gJy4uLy4uL0Fic3RyYWN0Q29tcG9uZW50JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cbmNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsXCJjb250YWluZXJcIilcbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHZhciBpY29uTW9kZSA9IGZhbHNlO1xuICAgICAgICBpZighdGhpcy5zZXR0aW5ncy5vcGVuLnN0YXRlICYmIHRoaXMuc2V0dGluZ3Muc3RhdGljLnN0YXRlKVxuICAgICAgICAgICAgIGljb25Nb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiaWNvbk1vZGVcIixpY29uTW9kZSk7XG4gICAgICAgIHJldHVybiAgQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXIgLSByZW5kZXJcIik7XG4gICAgICAgIGlmKCF0aGlzLnNldHRpbmdzLnZpc2libGUuc3RhdGUpXG4gICAgICAgICAgICByZXR1cm4gPGRpdi8+O1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9ICB0aGlzLnNldHRpbmdzLnN0eWxlLnN0YXRlO1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlT2JqZWN0fT5cbiAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgIDwvZGl2PjtcblxuICAgIH1cbn1cblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lci5TaWRlQmFyXCIsIFNpZGVCYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG5cbiJdfQ==
