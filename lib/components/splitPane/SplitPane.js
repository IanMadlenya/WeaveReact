"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _SplitPaneConfig = require("./SplitPaneConfig");

var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

var _Pane = require("./Pane");

var _Pane2 = _interopRequireDefault(_Pane);

var _Resizer = require("./Resizer");

var _Resizer2 = _interopRequireDefault(_Resizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//code logic taken from https://github.com/tomkp/react-split-pane

var SplitPane = function (_React$Component) {
    _inherits(SplitPane, _React$Component);

    function SplitPane(props) {
        _classCallCheck(this, SplitPane);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SplitPane).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _SplitPaneConfig2.default();
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
    }

    _createClass(SplitPane, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.active.addGroupedCallback(this, this.forceUpdate);
            this.settings.resized.addGroupedCallback(this, this.forceUpdate);
            this.settings.position.addGroupedCallback(this, this.forceUpdate);
            this.settings.unFocusCount.addImmediateCallback(this, this.unFocus);
            document.addEventListener('mouseup', this.onMouseUp);
            document.addEventListener('mousemove', this.onMouseMove);
            var ref = this.refs.pane1;
            if (ref && this.props.defaultSize && !this.settings.resized.value) {
                this.settings.pane1.size.value = this.props.defaultSize;
                //ref.setSessionState( this.props.defaultSize);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.active.removeCallback(this, this.forceUpdate);
            this.settings.resized.removeCallback(this, this.forceUpdate);
            this.settings.position.removeCallback(this, this.forceUpdate);
            this.settings.unFocusCount.removeCallback(this, this.unFocus);
            document.removeEventListener('mouseup', this.onMouseUp);
            document.removeEventListener('mousemove', this.onMouseMove);
        }
    }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
            this.settings.updateUnFocus();
            var position = this.props.split === 'vertical' ? event.clientX : event.clientY;
            this.settings.position.value = position;
            this.settings.active.value = true;
        }
    }, {
        key: "onMouseMove",
        value: function onMouseMove(event) {
            if (this.settings.active.value) {
                this.settings.updateUnFocus();
                var ref = this.refs.pane1;
                if (ref) {
                    var node = _reactDom2.default.findDOMNode(ref);
                    if (node.getBoundingClientRect) {
                        var width = node.getBoundingClientRect().width;
                        var height = node.getBoundingClientRect().height;
                        var current = this.props.split === 'vertical' ? event.clientX : event.clientY;
                        var size = this.props.split === 'vertical' ? width : height;
                        var position = this.settings.position.value;

                        var newSize = size - (position - current);

                        this.settings.position.value = current;
                        this.settings.resized.value = true;

                        if (newSize >= this.props.minSize) {
                            if (this.props.onChange) {
                                this.props.onChange(newSize);
                            }
                            this.settings.pane1.size.value = newSize;
                        }
                    }
                }
            }
        }
    }, {
        key: "onMouseUp",
        value: function onMouseUp() {
            if (this.settings.active.value) {
                if (this.props.onDragFinished) {
                    this.props.onDragFinished();
                }
                this.settings.active.value = false;
            }
        }
    }, {
        key: "unFocus",
        value: function unFocus() {
            // need to be called change of session value so that we can see them in session Log
            if (document.selection) {
                document.selection.empty();
            } else {
                window.getSelection().removeAllRanges();
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                this.settings.active.removeCallback(this, this.forceUpdate);
                this.settings.resized.removeCallback(this, this.forceUpdate);
                this.settings.position.removeCallback(this, this.forceUpdate);
                this.settings.unFocusCount.removeCallback(this, this.unFocus);
                this.settings = nextProps.settings;
                this.settings.active.addGroupedCallback(this, this.forceUpdate);
                this.settings.resized.addGroupedCallback(this, this.forceUpdate);
                this.settings.position.addGroupedCallback(this, this.forceUpdate);
                this.settings.unFocusCount.addImmediateCallback(this, this.unFocus);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var split = this.props.split;

            var styleObj = _Style2.default.appendVendorPrefix({
                display: 'flex',
                flex: 1,
                position: 'relative',
                outline: 'none',
                overflow: 'hidden',
                MozUserSelect: 'text',
                WebkitUserSelect: 'text',
                msUserSelect: 'text',
                userSelect: 'text'
            });

            if (split === 'vertical') {
                _Style2.default.mergeStyleObjects(styleObj, {
                    flexDirection: 'row',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    right: 0
                }, true);
            } else {
                _Style2.default.mergeStyleObjects(styleObj, {
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '100%',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    width: '100%'
                }, true);
            }
            var children = this.props.children;

            var classes = ['SplitPane', split];

            return _react2.default.createElement(
                "div",
                { className: classes.join(' '),
                    style: styleObj,
                    ref: "splitPane" },
                _react2.default.createElement(
                    _Pane2.default,
                    { ref: "pane1",
                        key: "pane1",
                        split: split,
                        settings: this.settings.pane1 },
                    " ",
                    children[0],
                    " "
                ),
                " ",
                _react2.default.createElement(_Resizer2.default, { ref: "resizer",
                    key: "resizer",
                    onMouseDown: this.onMouseDown,
                    split: split
                }),
                " ",
                _react2.default.createElement(
                    _Pane2.default,
                    { ref: "pane2",
                        key: "pane2",
                        split: split,
                        settings: this.settings.pane2 },
                    " ",
                    children[1],
                    " "
                ),
                " "
            );
        }
    }]);

    return SplitPane;
}(_react2.default.Component);

SplitPane.defaultProps = {
    minSize: 0,
    split: "vertical"
};

exports.default = SplitPane;
//# sourceMappingURL=data:application/json;base64,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USxJQUFSLENBQWEsR0FBYixDQURPO0FBR1gsMkJBQ0ksUUFESjtBQUdBLHlCQUFNLFdBQU4sRUFOSztnQkFPTDs7c0JBQU8sS0FBTSxPQUFOO0FBQ1AsNkJBQU0sT0FBTjtBQUNBLCtCQUNJLEtBREo7QUFHQSxrQ0FDSSxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBTko7O29CQVFJLFNBQVMsQ0FBVCxDQVJKOztpQkFQSzs7Z0JBZ0JNLG1EQUFVLEtBQU0sU0FBTjtBQUNyQix5QkFBTSxTQUFOO0FBQ0EsaUNBQ0ksS0FBSyxXQUFMO0FBRUosMkJBQ0ksS0FESjtpQkFMVyxDQWhCTjs7Z0JBd0JGOztzQkFBTyxLQUFNLE9BQU47QUFDViw2QkFBTSxPQUFOO0FBQ0EsK0JBQ0ksS0FESjtBQUdBLGtDQUNJLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFORDs7b0JBUUMsU0FBUyxDQUFULENBUkQ7O2lCQXhCRTs7YUFBVCxDQXRDSzs7OztXQXhHUDtFQUFrQixnQkFBTSxTQUFOOztBQW9MeEIsVUFBVSxZQUFWLEdBQXlCO0FBQ3JCLGFBQVMsQ0FBVDtBQUNBLFdBQU8sVUFBUDtDQUZKOztrQkFLZSIsImZpbGUiOiJTcGxpdFBhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBTcGxpdFBhbmVDb25maWcgZnJvbSBcIi4vU3BsaXRQYW5lQ29uZmlnXCI7XG5pbXBvcnQgUGFuZSBmcm9tICcuL1BhbmUnO1xuaW1wb3J0IFJlc2l6ZXIgZnJvbSAnLi9SZXNpemVyJztcblxuLy9jb2RlIGxvZ2ljIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RvbWtwL3JlYWN0LXNwbGl0LXBhbmVcblxuY2xhc3MgU3BsaXRQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzIDogbmV3IFNwbGl0UGFuZUNvbmZpZygpO1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmVzaXplZC5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb24uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVuRm9jdXNDb3VudC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVuRm9jdXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5yZWZzLnBhbmUxO1xuICAgICAgICBpZiAocmVmICYmIHRoaXMucHJvcHMuZGVmYXVsdFNpemUgJiYgIXRoaXMuc2V0dGluZ3MucmVzaXplZC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYW5lMS5zaXplLnZhbHVlID0gdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZTtcbiAgICAgICAgICAgIC8vcmVmLnNldFNlc3Npb25TdGF0ZSggdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmVzaXplZC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy51bkZvY3VzQ291bnQucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy51bkZvY3VzKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgfVxuXG5cblxuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudXBkYXRlVW5Gb2N1cygpO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LmNsaWVudFk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy51cGRhdGVVbkZvY3VzKCk7XG4gICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLnJlZnMucGFuZTE7XG4gICAgICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHJlZik7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTaXplID0gc2l6ZSAtIChwb3NpdGlvbiAtIGN1cnJlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb24udmFsdWUgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2l6ZWQudmFsdWUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdTaXplID49IHRoaXMucHJvcHMubWluU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1NpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYW5lMS5zaXplLnZhbHVlID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VVcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdGaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25EcmFnRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bkZvY3VzKCkgeyAvLyBuZWVkIHRvIGJlIGNhbGxlZCBjaGFuZ2Ugb2Ygc2Vzc2lvbiB2YWx1ZSBzbyB0aGF0IHdlIGNhbiBzZWUgdGhlbSBpbiBzZXNzaW9uIExvZ1xuICAgICAgICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudW5Gb2N1c0NvdW50LnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMudW5Gb2N1cyk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb24uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy51bkZvY3VzQ291bnQuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy51bkZvY3VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3BsaXQgPSB0aGlzLnByb3BzLnNwbGl0O1xuXG4gICAgICAgIGxldCBzdHlsZU9iaiA9IFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeCh7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBNb3pVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICBXZWJraXRVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICBtc1VzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgIHVzZXJTZWxlY3Q6ICd0ZXh0J1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3BsaXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKHN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICByaWdodDogMFxuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhzdHlsZU9iaiwge1xuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbJ1NwbGl0UGFuZScsIHNwbGl0XTtcblxuICAgICAgICByZXR1cm4gKCA8IGRpdiBjbGFzc05hbWUgPSB7XG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5qb2luKCcgJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWYgPSBcInNwbGl0UGFuZVwiID5cbiAgICAgICAgICAgIDwgUGFuZSByZWYgPSBcInBhbmUxXCJcbiAgICAgICAgICAgIGtleSA9IFwicGFuZTFcIlxuICAgICAgICAgICAgc3BsaXQgPSB7XG4gICAgICAgICAgICAgICAgc3BsaXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucGFuZTFcbiAgICAgICAgICAgIH0gPiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF1cbiAgICAgICAgICAgIH0gPCAvUGFuZT4gPCBSZXNpemVyIHJlZiA9IFwicmVzaXplclwiXG4gICAgICAgICAgICBrZXkgPSBcInJlc2l6ZXJcIlxuICAgICAgICAgICAgb25Nb3VzZURvd24gPSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk1vdXNlRG93blxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BsaXQgPSB7XG4gICAgICAgICAgICAgICAgc3BsaXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+IDwgUGFuZSByZWYgPSBcInBhbmUyXCJcbiAgICAgICAgICAgIGtleSA9IFwicGFuZTJcIlxuICAgICAgICAgICAgc3BsaXQgPSB7XG4gICAgICAgICAgICAgICAgc3BsaXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucGFuZTJcbiAgICAgICAgICAgIH0gPiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMV1cbiAgICAgICAgICAgIH0gPCAvUGFuZT4gPCAvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3BsaXRQYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBtaW5TaXplOiAwLFxuICAgIHNwbGl0OiBcInZlcnRpY2FsXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwbGl0UGFuZTtcbiJdfQ==
