'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('../../utils/Styles');

var _Styles2 = _interopRequireDefault(_Styles);

var _weavereact = require('weavereact');

var _weavereact2 = _interopRequireDefault(_weavereact);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _ContentWrap = require('./ContentWrap');

var _ContentWrap2 = _interopRequireDefault(_ContentWrap);

var _SideBar = require('./SideBar');

var _SideBar2 = _interopRequireDefault(_SideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBarContainer = function (_React$Component) {
    _inherits(SideBarContainer, _React$Component);

    function SideBarContainer(props) {
        _classCallCheck(this, SideBarContainer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SideBarContainer).call(this, props));

        _this.settings = props.settings;

        return _this;
    }

    _createClass(SideBarContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.settings.height.addImmediateCallback(this, this.forceUpdate);
            this.settings.showSideBars.addImmediateCallback(this, this.forceUpdate);
            this.settings.sideBars.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.settings.height.removeCallback(this, this.forceUpdate);
            this.settings.showSideBars.removeCallback(this, this.forceUpdate);
            this.settings.sideBars.childListCallbacks.removeCallback(this, this.forceUpdate);
            //this.settings.sideBars.dispose();//to-do: double check this to make sure this is required, i m doing this as in render i m adding callback
        }
    }, {
        key: 'render',
        value: function render() {

            var isOpen = this.settings.showSideBars.value;
            var sideBarsUI = [];
            var staticBar = "";
            sideBarsUI = this.settings.sideBars.getNames().map(function (barName, index) {
                var obj = this.settings.sideBars.getObject(barName);
                if (obj.static.value) staticBar = obj.direction.value;
                var configClass = Weave.getPath(obj).getType();
                var ToolClass = _weavereact2.default.getToolImplementation(configClass);
                var keyIndex = barName + index;
                return _react2.default.createElement(ToolClass, { key: keyIndex, isOpen: isOpen, settings: obj });
            }.bind(this));

            var styleObject = this.settings.getState(this.props.isOpen, staticBar);

            var overLayUi = "";
            if (this.settings.overlay.enable.true) {
                overLayUi = _react2.default.createElement(_Overlay2.default, { isOpen: isOpen, open: this.settings.showSideBars, settings: this.settings.overlay });
            }

            var contentUI = _react2.default.createElement(
                _ContentWrap2.default,
                { isOpen: isOpen, contianerSettings: this.settings },
                this.props.children
            );

            return _react2.default.createElement(
                'div',
                { style: _Styles2.default.appendVendorPrefix(styleObject) },
                sideBarsUI,
                overLayUi,
                contentUI
            );
        }
    }]);

    return SideBarContainer;
}(_react2.default.Component);

module.exports = SideBarContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXJDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUU07OztBQUNGLGFBREUsZ0JBQ0YsQ0FBWSxLQUFaLEVBQW1COzhCQURqQixrQkFDaUI7OzJFQURqQiw2QkFFUSxRQURTOztBQUVmLGNBQUssUUFBTCxHQUFnQixNQUFNLFFBQU4sQ0FGRDs7O0tBQW5COztpQkFERTs7NENBT2tCO0FBQ2pCLGlCQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLG9CQUFyQixDQUEwQyxJQUExQyxFQUFnRCxLQUFLLFdBQUwsQ0FBaEQsQ0FEaUI7QUFFakIsaUJBQUssUUFBTCxDQUFjLFlBQWQsQ0FBMkIsb0JBQTNCLENBQWdELElBQWhELEVBQXNELEtBQUssV0FBTCxDQUF0RCxDQUZpQjtBQUdqQixpQkFBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixrQkFBdkIsQ0FBMEMsb0JBQTFDLENBQStELElBQS9ELEVBQXFFLEtBQUssV0FBTCxDQUFyRSxDQUhpQjs7OzsrQ0FPRztBQUNuQixpQkFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixjQUFyQixDQUFvQyxJQUFwQyxFQUEwQyxLQUFLLFdBQUwsQ0FBMUMsQ0FEbUI7QUFFbkIsaUJBQUssUUFBTCxDQUFjLFlBQWQsQ0FBMkIsY0FBM0IsQ0FBMEMsSUFBMUMsRUFBZ0QsS0FBSyxXQUFMLENBQWhELENBRm1CO0FBR25CLGlCQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLGtCQUF2QixDQUEwQyxjQUExQyxDQUF5RCxJQUF6RCxFQUErRCxLQUFLLFdBQUwsQ0FBL0Q7O0FBSG1COzs7aUNBU2Q7O0FBRUwsZ0JBQUksU0FBUyxLQUFLLFFBQUwsQ0FBYyxZQUFkLENBQTJCLEtBQTNCLENBRlI7QUFHTCxnQkFBSSxhQUFjLEVBQWQsQ0FIQztBQUlMLGdCQUFJLFlBQVksRUFBWixDQUpDO0FBS0wseUJBQWEsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixRQUF2QixHQUFrQyxHQUFsQyxDQUFzQyxVQUFTLE9BQVQsRUFBaUIsS0FBakIsRUFBdUI7QUFDdEUsb0JBQUksTUFBTSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFNBQXZCLENBQWlDLE9BQWpDLENBQU4sQ0FEa0U7QUFFdEUsb0JBQUcsSUFBSSxNQUFKLENBQVcsS0FBWCxFQUFpQixZQUFZLElBQUksU0FBSixDQUFjLEtBQWQsQ0FBaEM7QUFDQSxvQkFBSSxjQUFjLE1BQU0sT0FBTixDQUFjLEdBQWQsRUFBbUIsT0FBbkIsRUFBZCxDQUhrRTtBQUl0RSxvQkFBSSxZQUFZLHFCQUFXLHFCQUFYLENBQWlDLFdBQWpDLENBQVosQ0FKa0U7QUFLdEUsb0JBQUksV0FBVyxVQUFVLEtBQVYsQ0FMdUQ7QUFNdEUsdUJBQU8sOEJBQUMsU0FBRCxJQUFXLEtBQUssUUFBTCxFQUFlLFFBQVEsTUFBUixFQUFnQixVQUFVLEdBQVYsRUFBMUMsQ0FBUCxDQU5zRTthQUF2QixDQU9qRCxJQVBpRCxDQU81QyxJQVA0QyxDQUF0QyxDQUFiLENBTEs7O0FBY0wsZ0JBQUksY0FBZSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBa0IsU0FBekMsQ0FBZixDQWRDOztBQWdCTCxnQkFBSSxZQUFZLEVBQVosQ0FoQkM7QUFpQkwsZ0JBQUcsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixNQUF0QixDQUE2QixJQUE3QixFQUFrQztBQUNqQyw0QkFBWSxtREFBUyxRQUFRLE1BQVIsRUFBZ0IsTUFBTSxLQUFLLFFBQUwsQ0FBYyxZQUFkLEVBQTRCLFVBQVksS0FBSyxRQUFMLENBQWMsT0FBZCxFQUF2RSxDQUFaLENBRGlDO2FBQXJDOztBQUlBLGdCQUFJLFlBQVk7O2tCQUFhLFFBQVEsTUFBUixFQUFpQixtQkFBbUIsS0FBSyxRQUFMLEVBQWpEO2dCQUNLLEtBQUssS0FBTCxDQUFXLFFBQVg7YUFEakIsQ0FyQkM7O0FBeUJMLG1CQUFTOztrQkFBSyxPQUFTLGlCQUFPLGtCQUFQLENBQTBCLFdBQTFCLENBQVQsRUFBTDtnQkFDSSxVQURKO2dCQUVJLFNBRko7Z0JBR0ksU0FISjthQUFULENBekJLOzs7O1dBdkJQO0VBQXlCLGdCQUFNLFNBQU47O0FBeUQvQixPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6IlNpZGVCYXJDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlcyBmcm9tICcuLi8uLi91dGlscy9TdHlsZXMnO1xuaW1wb3J0IHdlYXZlcmVhY3QgZnJvbSAnd2VhdmVyZWFjdCc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL092ZXJsYXknO1xuaW1wb3J0IENvbnRlbnRXcmFwIGZyb20gJy4vQ29udGVudFdyYXAnO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4vU2lkZUJhclwiO1xuXG5cbmNsYXNzIFNpZGVCYXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnNldHRpbmdzID0gcHJvcHMuc2V0dGluZ3M7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICB0aGlzLnNldHRpbmdzLmhlaWdodC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICB0aGlzLnNldHRpbmdzLnNob3dTaWRlQmFycy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICB0aGlzLnNldHRpbmdzLnNpZGVCYXJzLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmhlaWdodC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zaG93U2lkZUJhcnMucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2lkZUJhcnMuY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAvL3RoaXMuc2V0dGluZ3Muc2lkZUJhcnMuZGlzcG9zZSgpOy8vdG8tZG86IGRvdWJsZSBjaGVjayB0aGlzIHRvIG1ha2Ugc3VyZSB0aGlzIGlzIHJlcXVpcmVkLCBpIG0gZG9pbmcgdGhpcyBhcyBpbiByZW5kZXIgaSBtIGFkZGluZyBjYWxsYmFja1xuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIGlzT3BlbiA9IHRoaXMuc2V0dGluZ3Muc2hvd1NpZGVCYXJzLnZhbHVlO1xuICAgICAgICB2YXIgc2lkZUJhcnNVSSAgPSBbXTtcbiAgICAgICAgdmFyIHN0YXRpY0JhciA9IFwiXCI7XG4gICAgICAgIHNpZGVCYXJzVUkgPSB0aGlzLnNldHRpbmdzLnNpZGVCYXJzLmdldE5hbWVzKCkubWFwKGZ1bmN0aW9uKGJhck5hbWUsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMuc2V0dGluZ3Muc2lkZUJhcnMuZ2V0T2JqZWN0KGJhck5hbWUpO1xuICAgICAgICAgICAgaWYob2JqLnN0YXRpYy52YWx1ZSlzdGF0aWNCYXIgPSBvYmouZGlyZWN0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV2VhdmUuZ2V0UGF0aChvYmopLmdldFR5cGUoKTtcbiAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSB3ZWF2ZXJlYWN0LmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICB2YXIga2V5SW5kZXggPSBiYXJOYW1lICsgaW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gPFRvb2xDbGFzcyBrZXk9e2tleUluZGV4fSBpc09wZW49e2lzT3Blbn0gc2V0dGluZ3M9e29ian0vPlxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9ICB0aGlzLnNldHRpbmdzLmdldFN0YXRlKHRoaXMucHJvcHMuaXNPcGVuLHN0YXRpY0Jhcik7XG5cbiAgICAgICAgdmFyIG92ZXJMYXlVaSA9IFwiXCI7XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3Mub3ZlcmxheS5lbmFibGUudHJ1ZSl7XG4gICAgICAgICAgICBvdmVyTGF5VWkgPSA8T3ZlcmxheSBpc09wZW49e2lzT3Blbn0gb3Blbj17dGhpcy5zZXR0aW5ncy5zaG93U2lkZUJhcnN9IHNldHRpbmdzID0ge3RoaXMuc2V0dGluZ3Mub3ZlcmxheX0vPlxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnRlbnRVSSA9IDxDb250ZW50V3JhcCBpc09wZW49e2lzT3Blbn0gIGNvbnRpYW5lclNldHRpbmdzPXt0aGlzLnNldHRpbmdzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudFdyYXA+XG5cbiAgICAgICAgcmV0dXJuICggPGRpdiBzdHlsZSA9IHtTdHlsZXMuYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlT2JqZWN0KX0+XG4gICAgICAgICAgICAgICAgICAgIHtzaWRlQmFyc1VJfVxuICAgICAgICAgICAgICAgICAgICB7b3ZlckxheVVpfVxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudFVJfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVCYXJDb250YWluZXI7XG4iXX0=