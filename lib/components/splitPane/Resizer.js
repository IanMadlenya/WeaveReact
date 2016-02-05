"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//code logic taken from https://github.com/tomkp/react-split-pane

var Resizer = function (_React$Component) {
    _inherits(Resizer, _React$Component);

    function Resizer(props) {
        _classCallCheck(this, Resizer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Resizer).call(this, props));

        _this.onMouseDown = _this.onMouseDown.bind(_this);
        return _this;
    }

    _createClass(Resizer, [{
        key: "onMouseDown",
        value: function onMouseDown(event) {
            this.props.onMouseDown(event);
        }
    }, {
        key: "render",
        value: function render() {
            var resizerStyle = {
                boxSizing: "border-box",
                background: "#000",
                opacity: ".2",
                zIndex: "1",
                MozBackgroundClip: "padding",
                WebkitBackgroundClip: "padding",
                backgroundClip: "padding-box"
            };

            var split = this.props.split;
            var splitStyle;
            if (split === 'horizontal') {
                splitStyle = {
                    height: "11px",
                    margin: "-5px 0",
                    borderTop: "5px solid rgba(255, 255, 255, 0)",
                    borderBottom: "5px solid rgba(255, 255, 255, 0)",
                    cursor: "row-resize",
                    width: "100%"
                };
            } else {
                splitStyle = {
                    width: "11px",
                    margin: "0 -5px",
                    borderLeft: "5px solid rgba(255, 255, 255, 0)",
                    borderRight: "5px solid rgba(255, 255, 255, 0)",
                    cursor: "col-resize",
                    height: "100%"
                };
            }

            _Style2.default.mergeStyleObjects(resizerStyle, splitStyle, true);

            return _react2.default.createElement("span", { style: resizerStyle, onMouseDown: this.onMouseDown });
        }
    }]);

    return Resizer;
}(_react2.default.Component);

exports.default = Resizer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlc2l6ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTTs7O0FBRUYsYUFGRSxPQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsU0FFaUI7OzJFQUZqQixvQkFHUSxRQURTOztBQUVmLGNBQUssV0FBTCxHQUFtQixNQUFLLFdBQUwsQ0FBaUIsSUFBakIsT0FBbkIsQ0FGZTs7S0FBbkI7O2lCQUZFOztvQ0FTVSxPQUFPO0FBQ2YsaUJBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsS0FBdkIsRUFEZTs7OztpQ0FJVjtBQUNMLGdCQUFJLGVBQWU7QUFDZiwyQkFBVyxZQUFYO0FBQ0EsNEJBQVcsTUFBWDtBQUNBLHlCQUFTLElBQVQ7QUFDQSx3QkFBUSxHQUFSO0FBQ0EsbUNBQW1CLFNBQW5CO0FBQ0Esc0NBQXNCLFNBQXRCO0FBQ0EsZ0NBQWdCLGFBQWhCO2FBUEEsQ0FEQzs7QUFXTCxnQkFBTSxRQUFRLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FYVDtBQVlMLGdCQUFJLFVBQUosQ0FaSztBQWFMLGdCQUFHLFVBQVUsWUFBVixFQUF1QjtBQUN0Qiw2QkFBYztBQUNWLDRCQUFRLE1BQVI7QUFDQSw0QkFBUSxRQUFSO0FBQ0EsK0JBQVcsa0NBQVg7QUFDQSxrQ0FBYyxrQ0FBZDtBQUNBLDRCQUFRLFlBQVI7QUFDQSwyQkFBTyxNQUFQO2lCQU5KLENBRHNCO2FBQTFCLE1BU0s7QUFDRCw2QkFBYTtBQUNULDJCQUFPLE1BQVA7QUFDQSw0QkFBUSxRQUFSO0FBQ0EsZ0NBQVksa0NBQVo7QUFDQSxpQ0FBYSxrQ0FBYjtBQUNBLDRCQUFRLFlBQVI7QUFDQSw0QkFBUSxNQUFSO2lCQU5KLENBREM7YUFUTDs7QUFvQkEsNEJBQU0saUJBQU4sQ0FBd0IsWUFBeEIsRUFBcUMsVUFBckMsRUFBZ0QsSUFBaEQsRUFqQ0s7O0FBb0NMLG1CQUFRLHdDQUFNLE9BQU8sWUFBUCxFQUFxQixhQUFhLEtBQUssV0FBTCxFQUF4QyxDQUFSLENBcENLOzs7O1dBYlA7RUFBZ0IsZ0JBQU0sU0FBTjs7a0JBcURQIiwiZmlsZSI6IlJlc2l6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuXG4vL2NvZGUgbG9naWMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdG9ta3AvcmVhY3Qtc3BsaXQtcGFuZVxuXG5jbGFzcyBSZXNpemVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB9XG5cblxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgcmVzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6XCIjMDAwXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiBcIi4yXCIsXG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgTW96QmFja2dyb3VuZENsaXA6IFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgV2Via2l0QmFja2dyb3VuZENsaXA6IFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG4gICAgICAgIHZhciBzcGxpdFN0eWxlO1xuICAgICAgICBpZihzcGxpdCA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgIHNwbGl0U3R5bGUgPSAge1xuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIi01cHggMFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcDogXCI1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCI1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJyb3ctcmVzaXplXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNwbGl0U3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTFweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIC01cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwiY29sLXJlc2l6ZVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhyZXNpemVyU3R5bGUsc3BsaXRTdHlsZSx0cnVlKTtcblxuXG4gICAgICAgIHJldHVybiAoPHNwYW4gc3R5bGU9e3Jlc2l6ZXJTdHlsZX0gb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259IC8+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpemVyO1xuIl19
