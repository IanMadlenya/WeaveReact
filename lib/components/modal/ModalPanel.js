"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        _this.settings.title.value = _this.props.title;
        window.modalLayout = _this.settings; // for testing
        _this.sessionOpen = _this.props.sessionOpen;

        _this.closeModal = _this.closeModal.bind(_this);
        _this.updateState = _this.updateState.bind(_this);
        return _this;
    }

    _createClass(ModalPanel, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "closeModal",
        value: function closeModal() {
            this.sessionOpen.value = false;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
                this.settings = nextProps.settings;
                Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
            }
            if (this.props.title !== nextProps.title) {
                this.settings.title.value = this.props.title;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsUGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUVGLGFBRkUsVUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLFlBRWlCOzsyRUFGakIsdUJBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLGdDQUExQyxDQUZEO0FBR2YsY0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixHQUE0QixNQUFLLEtBQUwsQ0FBVyxLQUFYLENBSGI7QUFJZixlQUFPLFdBQVAsR0FBcUIsTUFBSyxRQUFMO0FBSk4sYUFLZixDQUFLLFdBQUwsR0FBbUIsTUFBSyxLQUFMLENBQVcsV0FBWCxDQUxKOztBQVFmLGNBQUssVUFBTCxHQUFtQixNQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsT0FBbkIsQ0FSZTtBQVNmLGNBQUssV0FBTCxHQUFvQixNQUFLLFdBQUwsQ0FBaUIsSUFBakIsT0FBcEIsQ0FUZTs7S0FBbkI7O2lCQUZFOzs0Q0FjaUI7QUFDZixrQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFuQixDQUFrQyxrQkFBbEMsQ0FBcUQsSUFBckQsRUFBMkQsS0FBSyxXQUFMLENBQTNELENBRGU7Ozs7K0NBSUs7QUFDcEIsa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBbkIsQ0FBa0MsY0FBbEMsQ0FBaUQsSUFBakQsRUFBdUQsS0FBSyxXQUFMLENBQXZELENBRG9COzs7O3FDQU1aO0FBQ1IsaUJBQUssV0FBTCxDQUFpQixLQUFqQixHQUF5QixLQUF6QixDQURROzs7O2tEQUljLFdBQVU7QUFDaEMsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFBbUI7QUFDMUMsc0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBbkIsQ0FBa0MsY0FBbEMsQ0FBaUQsSUFBakQsRUFBdUQsS0FBSyxXQUFMLENBQXZELENBRDBDO0FBRTFDLHFCQUFLLFFBQUwsR0FBZ0IsVUFBVSxRQUFWLENBRjBCO0FBRzFDLHNCQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQW5CLENBQWtDLGtCQUFsQyxDQUFxRCxJQUFyRCxFQUEyRCxLQUFLLFdBQUwsQ0FBM0QsQ0FIMEM7YUFBOUM7QUFLQSxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEtBQXFCLFVBQVUsS0FBVixFQUFnQjtBQUNwQyxxQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixHQUE0QixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBRFE7YUFBeEM7Ozs7aUNBS0s7O0FBRUwsZ0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxjQUFkLEVBQWQ7O0FBRkMsZ0JBSUQsWUFBWTtBQUNaLHdCQUFPLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckI7QUFDUCx1QkFBTSxNQUFOO0FBQ0EsMkJBQVcsUUFBWDtBQUNBLDJCQUFXLFFBQVg7YUFKQSxDQUpDOztBQVdMLHdCQUFZLFVBQVosSUFBMEIsT0FBMUIsQ0FYSztBQVlMLGdCQUFDLENBQUssV0FBTCxDQUFpQixLQUFqQixHQUF5QixZQUFZLFNBQVosSUFBeUIsT0FBekIsR0FBbUMsWUFBWSxTQUFaLElBQXlCLE1BQXpCLENBWnhEOztBQWNMLG1CQUFROztrQkFBSyxPQUFPLFdBQVAsRUFBTDtnQkFDSTs7c0JBQUssV0FBVSxlQUFWLEVBQUw7b0JBQ0k7OzBCQUFLLFdBQVUsY0FBVixFQUFMO3dCQUNJOzs4QkFBUSxNQUFLLFFBQUwsRUFBYyxXQUFVLE9BQVYsRUFBa0IsU0FBUyxLQUFLLFVBQUwsRUFBakQ7O3lCQURKO3dCQUVJOzs4QkFBSSxXQUFVLGFBQVYsRUFBSjs0QkFBNkIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQjt5QkFGakM7cUJBREo7b0JBS0k7OzBCQUFLLFdBQVUsWUFBVixFQUF1QixPQUFPLFNBQVAsRUFBNUI7d0JBQ0ssS0FBSyxLQUFMLENBQVcsUUFBWDtxQkFOVDtpQkFESjthQUFSLENBZEs7Ozs7V0F2Q1A7RUFBbUIsZ0JBQU0sU0FBTjs7a0JBb0VWIiwiZmlsZSI6Ik1vZGFsUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsUGFuZWxDb25maWcgZnJvbSBcIi4vTW9kYWxQYW5lbENvbmZpZ1wiO1xuXG5cbmNsYXNzIE1vZGFsUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE1vZGFsUGFuZWxDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAgIHdpbmRvdy5tb2RhbExheW91dCA9IHRoaXMuc2V0dGluZ3M7Ly8gZm9yIHRlc3RpbmdcbiAgICAgICAgdGhpcy5zZXNzaW9uT3BlbiA9IHRoaXMucHJvcHMuc2Vzc2lvbk9wZW47XG5cblxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwgPSAgdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUgPSAgdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgXG5cbiAgICBjbG9zZU1vZGFsKCl7XG4gICAgICAgIHRoaXMuc2Vzc2lvbk9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMudGl0bGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy93ZSBjb3VsZCBoYXZlIHVzZWQgdGhpcy5zdGF0ZS5sYXlvdXQsIGJ1dCBzdHlsZSBvZiBkaXYgd2lsbCBnZXQgdGhlIHNhbWUgcmVmZXJlbmNlLCB3aGljaCBpcyBkZXByZWNhdGVkIGluIHJlYWN0XG4gICAgICAgIHZhciBsYXlvdXRTdHlsZSA9IHRoaXMuc2V0dGluZ3MuZ2V0TGF5b3V0U3RhdGUoKTsvLyB0aGlzIHdpbGwgbWFrZSBzdXJlIHdlIGdldCBuZXcgb2JqZWN0IGV2ZXJ5dGltZVxuXG4gICAgICAgIHZhciBib2R5U3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6dGhpcy5zZXR0aW5ncy5oZWlnaHQudmFsdWUsXG4gICAgICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nXG4gICAgICAgIH1cblxuICAgICAgICBsYXlvdXRTdHlsZVtcInBvc2l0aW9uXCJdID0gJ2ZpeGVkJztcbiAgICAgICAgKHRoaXMuc2Vzc2lvbk9wZW4udmFsdWUpPyhsYXlvdXRTdHlsZVtcImRpc3BsYXlcIl0gPSAnYmxvY2snKToobGF5b3V0U3R5bGVbXCJkaXNwbGF5XCJdID0gJ25vbmUnKVxuXG4gICAgICAgIHJldHVybiAoPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9PiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17Ym9keVN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFBhbmVsO1xuIl19
