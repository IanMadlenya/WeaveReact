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
        _this.closeModal = _this.closeModal.bind(_this);
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
            this.props.sessionOpen.value = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsUGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUVGLGFBRkUsVUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLFlBRWlCOzsyRUFGakIsdUJBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLGdDQUExQyxDQUZEO0FBR2YsY0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixHQUE0QixNQUFLLEtBQUwsQ0FBVyxLQUFYLENBSGI7QUFJZixlQUFPLFdBQVAsR0FBcUIsTUFBSyxRQUFMO0FBSk4sYUFLZixDQUFLLFVBQUwsR0FBbUIsTUFBSyxVQUFMLENBQWdCLElBQWhCLE9BQW5CLENBTGU7O0tBQW5COztpQkFGRTs7NENBVWlCO0FBQ2Ysa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBbkIsQ0FBa0Msa0JBQWxDLENBQXFELElBQXJELEVBQTJELEtBQUssV0FBTCxDQUEzRCxDQURlOzs7OytDQUlLO0FBQ3BCLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQW5CLENBQWtDLGNBQWxDLENBQWlELElBQWpELEVBQXVELEtBQUssV0FBTCxDQUF2RCxDQURvQjs7OztxQ0FPWjtBQUNSLGlCQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEtBQXZCLEdBQStCLEtBQS9CLENBRFE7Ozs7a0RBSWMsV0FBVTtBQUNoQyxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUFtQjtBQUMxQyxzQkFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUFuQixDQUFrQyxjQUFsQyxDQUFpRCxJQUFqRCxFQUF1RCxLQUFLLFdBQUwsQ0FBdkQsQ0FEMEM7QUFFMUMscUJBQUssUUFBTCxHQUFnQixVQUFVLFFBQVYsQ0FGMEI7QUFHMUMsc0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBbkIsQ0FBa0Msa0JBQWxDLENBQXFELElBQXJELEVBQTJELEtBQUssV0FBTCxDQUEzRCxDQUgwQzthQUE5QztBQUtBLGdCQUFHLEtBQUssS0FBTCxDQUFXLEtBQVgsS0FBcUIsVUFBVSxLQUFWLEVBQWdCO0FBQ3BDLHFCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLEdBQTRCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FEUTthQUF4Qzs7OztpQ0FNSzs7QUFFTCxnQkFBSSxjQUFjLEtBQUssUUFBTCxDQUFjLGNBQWQsRUFBZDs7QUFGQyxnQkFJRCxZQUFZO0FBQ1osd0JBQU8sS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQjtBQUNQLHVCQUFNLE1BQU47QUFDQSwyQkFBVyxRQUFYO0FBQ0EsMkJBQVcsUUFBWDthQUpBLENBSkM7O0FBYUwsd0JBQVksVUFBWixJQUEwQixPQUExQixDQWJLOztBQWVMLG1CQUFROztrQkFBSyxPQUFPLFdBQVAsRUFBTDtnQkFDSTs7c0JBQUssV0FBVSxlQUFWLEVBQUw7b0JBQ0k7OzBCQUFLLFdBQVUsY0FBVixFQUFMO3dCQUNJOzs4QkFBUSxNQUFLLFFBQUwsRUFBYyxXQUFVLE9BQVYsRUFBa0IsU0FBUyxLQUFLLFVBQUwsRUFBakQ7O3lCQURKO3dCQUVJOzs4QkFBSSxXQUFVLGFBQVYsRUFBSjs0QkFBNkIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQjt5QkFGakM7cUJBREo7b0JBS0k7OzBCQUFLLFdBQVUsWUFBVixFQUF1QixPQUFPLFNBQVAsRUFBNUI7d0JBQ0ssS0FBSyxLQUFMLENBQVcsUUFBWDtxQkFOVDtpQkFESjthQUFSLENBZks7Ozs7V0FyQ1A7RUFBbUIsZ0JBQU0sU0FBTjs7a0JBb0VWIiwiZmlsZSI6Ik1vZGFsUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsUGFuZWxDb25maWcgZnJvbSBcIi4vTW9kYWxQYW5lbENvbmZpZ1wiO1xuXG5cbmNsYXNzIE1vZGFsUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE1vZGFsUGFuZWxDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAgIHdpbmRvdy5tb2RhbExheW91dCA9IHRoaXMuc2V0dGluZ3M7Ly8gZm9yIHRlc3RpbmdcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsID0gIHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuXG4gICAgY2xvc2VNb2RhbCgpe1xuICAgICAgICB0aGlzLnByb3BzLnNlc3Npb25PcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy50aXRsZSAhPT0gbmV4dFByb3BzLnRpdGxlKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWUgPSB0aGlzLnByb3BzLnRpdGxlXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy93ZSBjb3VsZCBoYXZlIHVzZWQgdGhpcy5zdGF0ZS5sYXlvdXQsIGJ1dCBzdHlsZSBvZiBkaXYgd2lsbCBnZXQgdGhlIHNhbWUgcmVmZXJlbmNlLCB3aGljaCBpcyBkZXByZWNhdGVkIGluIHJlYWN0XG4gICAgICAgIHZhciBsYXlvdXRTdHlsZSA9IHRoaXMuc2V0dGluZ3MuZ2V0TGF5b3V0U3RhdGUoKTsvLyB0aGlzIHdpbGwgbWFrZSBzdXJlIHdlIGdldCBuZXcgb2JqZWN0IGV2ZXJ5dGltZVxuXG4gICAgICAgIHZhciBib2R5U3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6dGhpcy5zZXR0aW5ncy5oZWlnaHQudmFsdWUsXG4gICAgICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgbGF5b3V0U3R5bGVbXCJwb3NpdGlvblwiXSA9ICdmaXhlZCc7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXtib2R5U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxQYW5lbDtcbiJdfQ==
