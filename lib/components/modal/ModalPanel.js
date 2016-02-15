"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ModalPanelConfig = require("./ModalPanelConfig");

var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalPanel = function (_React$Component) {
    _inherits(ModalPanel, _React$Component);

    function ModalPanel(props) {
        _classCallCheck(this, ModalPanel);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalPanel).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _ModalPanelConfig2.default();
        window.modalLayout = _this.settings; // for testing
        _this.sessionOpen = _this.props.sessionOpen;

        _this.state = _this.settings.getLayoutState();

        _this.closeModal = _this.closeModal.bind(_this);
        _this.updateState = _this.updateState.bind(_this);
        return _this;
    }

    _createClass(ModalPanel, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var cc = Weave.getCallbacks(this.settings);
            cc.addImmediateCallback(this, this.updateState);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            var cc = Weave.getCallbacks(this.settings);
            cc.removeCallback(this, this.updateState);
        }
    }, {
        key: "updateState",
        value: function updateState() {
            this.setState(this.settings.getLayoutState());
        }
    }, {
        key: "closeModal",
        value: function closeModal() {
            this.sessionOpen.value = false;
        }
    }, {
        key: "render",
        value: function render() {
            //we could have used this.state.layout, but style of div will get the same reference, which is deprecated in react
            var layoutStyle = this.settings.getLayoutState(); // this will make sure we get new object everytime

            var bodyStyle = {
                height: this.settings.height.value,
                width: "100%",
                overflowY: 'scroll',
                overflowX: 'hidden'
            };

            layoutStyle["position"] = 'fixed';
            this.sessionOpen.value ? layoutStyle["display"] = 'block' : layoutStyle["display"] = 'none';

            return _react2.default.createElement(
                "div",
                { style: layoutStyle },
                _react2.default.createElement(
                    "div",
                    { className: "modal-content" },
                    _react2.default.createElement(
                        "div",
                        { className: "modal-header" },
                        _react2.default.createElement(
                            "button",
                            { type: "button", className: "close", onClick: this.closeModal },
                            "×"
                        ),
                        _react2.default.createElement(
                            "h4",
                            { className: "modal-title" },
                            this.settings.title.value
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "modal-body", style: bodyStyle },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return ModalPanel;
}(_react2.default.Component);

exports.default = ModalPanel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsUGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUVGLGFBRkUsVUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLFlBRWlCOzsyRUFGakIsdUJBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLGdDQUExQyxDQUZEO0FBR2YsZUFBTyxXQUFQLEdBQXFCLE1BQUssUUFBTDtBQUhOLGFBSWYsQ0FBSyxXQUFMLEdBQW1CLE1BQUssS0FBTCxDQUFXLFdBQVgsQ0FKSjs7QUFNZixjQUFLLEtBQUwsR0FBYSxNQUFLLFFBQUwsQ0FBYyxjQUFkLEVBQWIsQ0FOZTs7QUFRZixjQUFLLFVBQUwsR0FBbUIsTUFBSyxVQUFMLENBQWdCLElBQWhCLE9BQW5CLENBUmU7QUFTZixjQUFLLFdBQUwsR0FBb0IsTUFBSyxXQUFMLENBQWlCLElBQWpCLE9BQXBCLENBVGU7O0tBQW5COztpQkFGRTs7NENBY2lCO0FBQ2YsZ0JBQUksS0FBSyxNQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQXhCLENBRFc7QUFFZixlQUFHLG9CQUFILENBQXdCLElBQXhCLEVBQThCLEtBQUssV0FBTCxDQUE5QixDQUZlOzs7OytDQUtLO0FBQ3BCLGdCQUFJLEtBQUssTUFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUF4QixDQURnQjtBQUVwQixlQUFHLGNBQUgsQ0FBa0IsSUFBbEIsRUFBd0IsS0FBSyxXQUFMLENBQXhCLENBRm9COzs7O3NDQUtYO0FBQ1QsaUJBQUssUUFBTCxDQUFjLEtBQUssUUFBTCxDQUFjLGNBQWQsRUFBZCxFQURTOzs7O3FDQUlEO0FBQ1IsaUJBQUssV0FBTCxDQUFpQixLQUFqQixHQUF5QixLQUF6QixDQURROzs7O2lDQUlIOztBQUVULGdCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsY0FBZCxFQUFkOztBQUZLLGdCQUlMLFlBQVk7QUFDWix3QkFBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCO0FBQ1AsdUJBQU0sTUFBTjtBQUNBLDJCQUFXLFFBQVg7QUFDQSwyQkFBVyxRQUFYO2FBSkEsQ0FKSzs7QUFXVCx3QkFBWSxVQUFaLElBQTBCLE9BQTFCLENBWFM7QUFZVCxnQkFBQyxDQUFLLFdBQUwsQ0FBaUIsS0FBakIsR0FBeUIsWUFBWSxTQUFaLElBQXlCLE9BQXpCLEdBQW1DLFlBQVksU0FBWixJQUF5QixNQUF6QixDQVpwRDs7QUFjVCxtQkFBUTs7a0JBQUssT0FBTyxXQUFQLEVBQUw7Z0JBQ0k7O3NCQUFLLFdBQVUsZUFBVixFQUFMO29CQUNJOzswQkFBSyxXQUFVLGNBQVYsRUFBTDt3QkFDSTs7OEJBQVEsTUFBSyxRQUFMLEVBQWMsV0FBVSxPQUFWLEVBQWtCLFNBQVMsS0FBSyxVQUFMLEVBQWpEOzt5QkFESjt3QkFFSTs7OEJBQUksV0FBVSxhQUFWLEVBQUo7NEJBQTZCLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsS0FBcEI7eUJBRmpDO3FCQURKO29CQUtJOzswQkFBSyxXQUFVLFlBQVYsRUFBdUIsT0FBTyxTQUFQLEVBQTVCO3dCQUNLLEtBQUssS0FBTCxDQUFXLFFBQVg7cUJBTlQ7aUJBREo7YUFBUixDQWRTOzs7O1dBaENQO0VBQW1CLGdCQUFNLFNBQU47O2tCQTZEViIsImZpbGUiOiJNb2RhbFBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbFBhbmVsQ29uZmlnIGZyb20gXCIuL01vZGFsUGFuZWxDb25maWdcIjtcblxuXG5jbGFzcyBNb2RhbFBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBNb2RhbFBhbmVsQ29uZmlnKCk7XG4gICAgICAgIHdpbmRvdy5tb2RhbExheW91dCA9IHRoaXMuc2V0dGluZ3M7Ly8gZm9yIHRlc3RpbmdcbiAgICAgICAgdGhpcy5zZXNzaW9uT3BlbiA9IHRoaXMucHJvcHMuc2Vzc2lvbk9wZW47XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0TGF5b3V0U3RhdGUoKTtcblxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwgPSAgdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUgPSAgdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHZhciBjYyA9IFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgY2MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy51cGRhdGVTdGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB2YXIgY2MgPSBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIGNjLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMudXBkYXRlU3RhdGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zZXR0aW5ncy5nZXRMYXlvdXRTdGF0ZSgpKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKCl7XG4gICAgICAgIHRoaXMuc2Vzc2lvbk9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgLy93ZSBjb3VsZCBoYXZlIHVzZWQgdGhpcy5zdGF0ZS5sYXlvdXQsIGJ1dCBzdHlsZSBvZiBkaXYgd2lsbCBnZXQgdGhlIHNhbWUgcmVmZXJlbmNlLCB3aGljaCBpcyBkZXByZWNhdGVkIGluIHJlYWN0XG4gICAgdmFyIGxheW91dFN0eWxlID0gdGhpcy5zZXR0aW5ncy5nZXRMYXlvdXRTdGF0ZSgpOy8vIHRoaXMgd2lsbCBtYWtlIHN1cmUgd2UgZ2V0IG5ldyBvYmplY3QgZXZlcnl0aW1lXG5cbiAgICB2YXIgYm9keVN0eWxlID0ge1xuICAgICAgICBoZWlnaHQ6dGhpcy5zZXR0aW5ncy5oZWlnaHQudmFsdWUsXG4gICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nXG4gICAgfVxuXG4gICAgbGF5b3V0U3R5bGVbXCJwb3NpdGlvblwiXSA9ICdmaXhlZCc7XG4gICAgKHRoaXMuc2Vzc2lvbk9wZW4udmFsdWUpPyhsYXlvdXRTdHlsZVtcImRpc3BsYXlcIl0gPSAnYmxvY2snKToobGF5b3V0U3R5bGVbXCJkaXNwbGF5XCJdID0gJ25vbmUnKVxuXG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RoaXMuc2V0dGluZ3MudGl0bGUudmFsdWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXtib2R5U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFBhbmVsO1xuIl19
