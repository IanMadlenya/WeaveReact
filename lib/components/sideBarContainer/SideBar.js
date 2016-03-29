'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent2 = require('../../AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _ComponentManager = require('../../ComponentManager');

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
        key: 'renderChildren',
        value: function renderChildren() {
            var iconMode = false;
            if (!this.settings.open.state && this.settings.static.state) iconMode = true;
            this.settings.props.addChildProps("iconMode", iconMode);
            this.settings.props.addChildProps("reverseLayout", this.settings.reverseLayout.state);
            return _ComponentManager2.default.renderChildren(this);
        }
    }, {
        key: 'render',
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Sidebar - render");
            if (!this.settings.visible.state) return _react2.default.createElement('div', null);

            var styleObject = this.settings.style.state;
            var childrenUI = this.renderChildren();
            return _react2.default.createElement(
                'div',
                { style: styleObject },
                childrenUI
            );
        }
    }]);

    return SideBar;
}(_AbstractComponent3.default);

Weave.registerClass("weavereact.sideBarContainer.SideBar", SideBar, [weavejs.api.core.ILinkableObject]);

exports.default = SideBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNOzs7QUFDRixhQURFLE9BQ0YsQ0FBWSxLQUFaLEVBQW1COzhCQURqQixTQUNpQjs7c0VBRGpCLG9CQUVRLE9BQU0sY0FERztLQUFuQjs7aUJBREU7O3lDQU1jO0FBQ1osZ0JBQUksV0FBVyxLQUFYLENBRFE7QUFFWixnQkFBRyxDQUFDLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsSUFBNEIsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUMzQixXQUFXLElBQVgsQ0FETDtBQUVBLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLGFBQXBCLENBQWtDLFVBQWxDLEVBQTZDLFFBQTdDLEVBSlk7QUFLWixpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixhQUFwQixDQUFrQyxlQUFsQyxFQUFrRCxLQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLEtBQTVCLENBQWxELENBTFk7QUFNWixtQkFBUSwyQkFBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBUixDQU5ZOzs7O2lDQVVQO0FBQ0wsZ0JBQUcsMkJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLGtCQUFaLEVBQTFCO0FBQ0EsZ0JBQUcsQ0FBQyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEVBQ0EsT0FBTywwQ0FBUCxDQURKOztBQUdBLGdCQUFJLGNBQWUsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQUxkO0FBTUwsZ0JBQUksYUFBYSxLQUFLLGNBQUwsRUFBYixDQU5DO0FBT0wsbUJBQU87O2tCQUFLLE9BQU8sV0FBUCxFQUFMO2dCQUNLLFVBREw7YUFBUCxDQVBLOzs7O1dBaEJQOzs7QUE4Qk4sTUFBTSxhQUFOLENBQW9CLHFDQUFwQixFQUEyRCxPQUEzRCxFQUFtRSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBcEU7O2tCQUVlIiwiZmlsZSI6IlNpZGVCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gJy4uLy4uL0Fic3RyYWN0Q29tcG9uZW50JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cbmNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsXCJjb250YWluZXJcIilcbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHZhciBpY29uTW9kZSA9IGZhbHNlO1xuICAgICAgICBpZighdGhpcy5zZXR0aW5ncy5vcGVuLnN0YXRlICYmIHRoaXMuc2V0dGluZ3Muc3RhdGljLnN0YXRlKVxuICAgICAgICAgICAgIGljb25Nb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiaWNvbk1vZGVcIixpY29uTW9kZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInJldmVyc2VMYXlvdXRcIix0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUpO1xuICAgICAgICByZXR1cm4gIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJTaWRlYmFyIC0gcmVuZGVyXCIpO1xuICAgICAgICBpZighdGhpcy5zZXR0aW5ncy52aXNpYmxlLnN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcblxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSAgdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZU9iamVjdH0+XG4gICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICA8L2Rpdj47XG5cbiAgICB9XG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXIuU2lkZUJhclwiLCBTaWRlQmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xuXG4iXX0=
