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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNOzs7QUFDRixhQURFLE9BQ0YsQ0FBWSxLQUFaLEVBQW1COzhCQURqQixTQUNpQjs7c0VBRGpCLG9CQUVRLE9BQU0sY0FERztLQUFuQjs7aUJBREU7O3lDQU1jO0FBQ1osZ0JBQUksV0FBVyxLQUFYLENBRFE7QUFFWixnQkFBRyxDQUFDLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsSUFBNEIsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUMzQixXQUFXLElBQVgsQ0FETDtBQUVBLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLGFBQXBCLENBQWtDLFVBQWxDLEVBQTZDLFFBQTdDLEVBSlk7QUFLWixtQkFBUSwyQkFBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBUixDQUxZOzs7O2lDQVNQO0FBQ0wsZ0JBQUcsMkJBQWlCLEtBQWpCLEVBQXVCLFFBQVEsR0FBUixDQUFZLGtCQUFaLEVBQTFCO0FBQ0EsZ0JBQUcsQ0FBQyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEVBQ0EsT0FBTywwQ0FBUCxDQURKOztBQUdBLGdCQUFJLGNBQWUsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQUxkO0FBTUwsZ0JBQUksYUFBYSxLQUFLLGNBQUwsRUFBYixDQU5DO0FBT0wsbUJBQU87O2tCQUFLLE9BQU8sV0FBUCxFQUFMO2dCQUNLLFVBREw7YUFBUCxDQVBLOzs7O1dBZlA7OztBQTZCTixNQUFNLGFBQU4sQ0FBb0IscUNBQXBCLEVBQTJELE9BQTNELEVBQW1FLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFwRTs7a0JBRWUiLCJmaWxlIjoiU2lkZUJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSAnLi4vLi4vQWJzdHJhY3RDb21wb25lbnQnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuY2xhc3MgU2lkZUJhciBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyxcImNvbnRhaW5lclwiKVxuICAgIH1cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdmFyIGljb25Nb2RlID0gZmFsc2U7XG4gICAgICAgIGlmKCF0aGlzLnNldHRpbmdzLm9wZW4uc3RhdGUgJiYgdGhpcy5zZXR0aW5ncy5zdGF0aWMuc3RhdGUpXG4gICAgICAgICAgICAgaWNvbk1vZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJpY29uTW9kZVwiLGljb25Nb2RlKTtcbiAgICAgICAgcmV0dXJuICBDb21wb25lbnRNYW5hZ2VyLnJlbmRlckNoaWxkcmVuKHRoaXMpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiU2lkZWJhciAtIHJlbmRlclwiKTtcbiAgICAgICAgaWYoIXRoaXMuc2V0dGluZ3MudmlzaWJsZS5zdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gIHRoaXMuc2V0dGluZ3Muc3R5bGUuc3RhdGU7XG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGVPYmplY3R9PlxuICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgPC9kaXY+O1xuXG4gICAgfVxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5zaWRlQmFyQ29udGFpbmVyLlNpZGVCYXJcIiwgU2lkZUJhcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcblxuIl19
