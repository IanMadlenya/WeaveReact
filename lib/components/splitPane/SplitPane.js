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
//# sourceMappingURL=data:application/json;base64,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QUFQO2lCQVBKLEVBUUcsSUFSSCxFQURHO2FBUlA7QUFtQkEsZ0JBQU0sV0FBVyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBbENaOztBQW9DTCxnQkFBTSxVQUFVLENBQUMsV0FBRCxFQUFjLEtBQWQsQ0FBVixDQXBDRDs7QUFzQ0wsbUJBQVM7O2tCQUFNLFdBQ1AsUUFBUSxJQUFSLENBQWEsR0FBYixDQURPO0FBR1gsMkJBQ0ksUUFESjtBQUdBLHlCQUFNLFdBQU4sRUFOSztnQkFPTDs7c0JBQU8sS0FBTSxPQUFOO0FBQ1AsNkJBQU0sT0FBTjtBQUNBLCtCQUNJLEtBREo7QUFHQSxrQ0FDSSxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBTko7O29CQVFJLFNBQVMsQ0FBVCxDQVJKOztpQkFQSzs7Z0JBZ0JNLG1EQUFVLEtBQU0sU0FBTjtBQUNyQix5QkFBTSxTQUFOO0FBQ0EsaUNBQ0ksS0FBSyxXQUFMO0FBRUosMkJBQ0ksS0FESjtpQkFMVyxDQWhCTjs7Z0JBd0JGOztzQkFBTyxLQUFNLE9BQU47QUFDViw2QkFBTSxPQUFOO0FBQ0EsK0JBQ0ksS0FESjtBQUdBLGtDQUNJLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFORDs7b0JBUUMsU0FBUyxDQUFULENBUkQ7O2lCQXhCRTs7YUFBVCxDQXRDSzs7OztXQTNGUDtFQUFrQixnQkFBTSxTQUFOOztBQXVLeEIsVUFBVSxZQUFWLEdBQXlCO0FBQ3JCLGFBQVMsQ0FBVDtBQUNBLFdBQU8sVUFBUDtDQUZKOztrQkFLZSIsImZpbGUiOiJTcGxpdFBhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBTcGxpdFBhbmVDb25maWcgZnJvbSBcIi4vU3BsaXRQYW5lQ29uZmlnXCI7XG5pbXBvcnQgUGFuZSBmcm9tICcuL1BhbmUnO1xuaW1wb3J0IFJlc2l6ZXIgZnJvbSAnLi9SZXNpemVyJztcblxuLy9jb2RlIGxvZ2ljIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RvbWtwL3JlYWN0LXNwbGl0LXBhbmVcblxuY2xhc3MgU3BsaXRQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzIDogbmV3IFNwbGl0UGFuZUNvbmZpZygpO1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmVzaXplZC5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb24uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVuRm9jdXNDb3VudC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVuRm9jdXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5yZWZzLnBhbmUxO1xuICAgICAgICBpZiAocmVmICYmIHRoaXMucHJvcHMuZGVmYXVsdFNpemUgJiYgIXRoaXMuc2V0dGluZ3MucmVzaXplZC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYW5lMS5zaXplLnZhbHVlID0gdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZTtcbiAgICAgICAgICAgIC8vcmVmLnNldFNlc3Npb25TdGF0ZSggdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmVzaXplZC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy51bkZvY3VzQ291bnQucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy51bkZvY3VzKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgfVxuXG5cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVwZGF0ZVVuRm9jdXMoKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wcm9wcy5zcGxpdCA9PT0gJ3ZlcnRpY2FsJyA/IGV2ZW50LmNsaWVudFggOiBldmVudC5jbGllbnRZO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudXBkYXRlVW5Gb2N1cygpO1xuICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy5yZWZzLnBhbmUxO1xuICAgICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShyZWYpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5wcm9wcy5zcGxpdCA9PT0gJ3ZlcnRpY2FsJyA/IGV2ZW50LmNsaWVudFggOiBldmVudC5jbGllbnRZO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy5wcm9wcy5zcGxpdCA9PT0gJ3ZlcnRpY2FsJyA/IHdpZHRoIDogaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuc2V0dGluZ3MucG9zaXRpb24udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2l6ZSA9IHNpemUgLSAocG9zaXRpb24gLSBjdXJyZW50KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnZhbHVlID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLnZhbHVlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3U2l6ZSA+PSB0aGlzLnByb3BzLm1pblNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucGFuZTEuc2l6ZS52YWx1ZSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnRmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ0ZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5Gb2N1cygpIHsgLy8gbmVlZCB0byBiZSBjYWxsZWQgY2hhbmdlIG9mIHNlc3Npb24gdmFsdWUgc28gdGhhdCB3ZSBjYW4gc2VlIHRoZW0gaW4gc2Vzc2lvbiBMb2dcbiAgICAgICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgICAgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0ID0gdGhpcy5wcm9wcy5zcGxpdDtcblxuICAgICAgICBsZXQgc3R5bGVPYmogPSBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoe1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgTW96VXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICAgICAgV2Via2l0VXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICAgICAgbXNVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICB1c2VyU2VsZWN0OiAndGV4dCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNwbGl0ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhzdHlsZU9iaiwge1xuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMoc3R5bGVPYmosIHtcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gWydTcGxpdFBhbmUnLCBzcGxpdF07XG5cbiAgICAgICAgcmV0dXJuICggPCBkaXYgY2xhc3NOYW1lID0ge1xuICAgICAgICAgICAgICAgIGNsYXNzZXMuam9pbignICcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBzdHlsZU9ialxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmID0gXCJzcGxpdFBhbmVcIiA+XG4gICAgICAgICAgICA8IFBhbmUgcmVmID0gXCJwYW5lMVwiXG4gICAgICAgICAgICBrZXkgPSBcInBhbmUxXCJcbiAgICAgICAgICAgIHNwbGl0ID0ge1xuICAgICAgICAgICAgICAgIHNwbGl0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhbmUxXG4gICAgICAgICAgICB9ID4ge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzBdXG4gICAgICAgICAgICB9IDwgL1BhbmU+IDwgUmVzaXplciByZWYgPSBcInJlc2l6ZXJcIlxuICAgICAgICAgICAga2V5ID0gXCJyZXNpemVyXCJcbiAgICAgICAgICAgIG9uTW91c2VEb3duID0ge1xuICAgICAgICAgICAgICAgIHRoaXMub25Nb3VzZURvd25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwbGl0ID0ge1xuICAgICAgICAgICAgICAgIHNwbGl0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvPiA8IFBhbmUgcmVmID0gXCJwYW5lMlwiXG4gICAgICAgICAgICBrZXkgPSBcInBhbmUyXCJcbiAgICAgICAgICAgIHNwbGl0ID0ge1xuICAgICAgICAgICAgICAgIHNwbGl0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhbmUyXG4gICAgICAgICAgICB9ID4ge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzFdXG4gICAgICAgICAgICB9IDwgL1BhbmU+IDwgL2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwbGl0UGFuZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbWluU2l6ZTogMCxcbiAgICBzcGxpdDogXCJ2ZXJ0aWNhbFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdFBhbmU7Il19
