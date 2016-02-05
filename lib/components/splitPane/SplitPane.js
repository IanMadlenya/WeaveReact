"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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
                    var node = ReactDOM.findDOMNode(ref);
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
                { className: classes.join(' '), style: styleObj, ref: "splitPane" },
                _react2.default.createElement(
                    _Pane2.default,
                    { ref: "pane1", key: "pane1", split: split, settings: this.settings.pane1 },
                    children[0]
                ),
                _react2.default.createElement(_Resizer2.default, { ref: "resizer", key: "resizer", onMouseDown: this.onMouseDown, split: split }),
                _react2.default.createElement(
                    _Pane2.default,
                    { ref: "pane2", key: "pane2", split: split, settings: this.settings.pane2 },
                    children[1]
                )
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
//# sourceMappingURL=data:application/json;base64,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LEVBREk7YUFSUDtBQW1CQSxnQkFBTSxXQUFXLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FsQ1o7O0FBb0NMLGdCQUFNLFVBQVUsQ0FBQyxXQUFELEVBQWMsS0FBZCxDQUFWLENBcENEOztBQXNDTCxtQkFBUTs7a0JBQUssV0FBVyxRQUFRLElBQVIsQ0FBYSxHQUFiLENBQVgsRUFBOEIsT0FBTyxRQUFQLEVBQWlCLEtBQUksV0FBSixFQUFwRDtnQkFDSTs7c0JBQU0sS0FBSSxPQUFKLEVBQVksS0FBSSxPQUFKLEVBQVksT0FBTyxLQUFQLEVBQWMsVUFBVSxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXREO29CQUE0RSxTQUFTLENBQVQsQ0FBNUU7aUJBREo7Z0JBRUksbURBQVMsS0FBSSxTQUFKLEVBQWMsS0FBSSxTQUFKLEVBQWMsYUFBYSxLQUFLLFdBQUwsRUFBa0IsT0FBTyxLQUFQLEVBQXBFLENBRko7Z0JBR0k7O3NCQUFNLEtBQUksT0FBSixFQUFZLEtBQUksT0FBSixFQUFZLE9BQU8sS0FBUCxFQUFlLFVBQVUsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUF2RDtvQkFBNkUsU0FBUyxDQUFULENBQTdFO2lCQUhKO2FBQVIsQ0F0Q0s7Ozs7V0EzRlA7RUFBa0IsZ0JBQU0sU0FBTjs7QUEwSXhCLFVBQVUsWUFBVixHQUF5QjtBQUNiLGFBQVMsQ0FBVDtBQUNBLFdBQU0sVUFBTjtDQUZaOztrQkFLZSIsImZpbGUiOiJTcGxpdFBhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IFNwbGl0UGFuZUNvbmZpZyBmcm9tIFwiLi9TcGxpdFBhbmVDb25maWdcIjtcbmltcG9ydCBQYW5lIGZyb20gJy4vUGFuZSc7XG5pbXBvcnQgUmVzaXplciBmcm9tICcuL1Jlc2l6ZXInO1xuXG4vL2NvZGUgbG9naWMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdG9ta3AvcmVhY3Qtc3BsaXQtcGFuZVxuXG5jbGFzcyBTcGxpdFBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFNwbGl0UGFuZUNvbmZpZygpO1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2l6ZWQuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb24uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudW5Gb2N1c0NvdW50LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy51bkZvY3VzKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMucmVmcy5wYW5lMTtcbiAgICAgICAgaWYgKHJlZiAmJiB0aGlzLnByb3BzLmRlZmF1bHRTaXplICYmICF0aGlzLnNldHRpbmdzLnJlc2l6ZWQudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucGFuZTEuc2l6ZS52YWx1ZSA9IHRoaXMucHJvcHMuZGVmYXVsdFNpemU7XG4gICAgICAgICAgICAvL3JlZi5zZXRTZXNzaW9uU3RhdGUoIHRoaXMucHJvcHMuZGVmYXVsdFNpemUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2l6ZWQucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVuRm9jdXNDb3VudC5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMudW5Gb2N1cyk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgIH1cblxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy51cGRhdGVVbkZvY3VzKCk7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyBldmVudC5jbGllbnRYIDogZXZlbnQuY2xpZW50WTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSA9ICB0cnVlO1xuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy51cGRhdGVVbkZvY3VzKCk7XG4gICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLnJlZnMucGFuZTE7XG4gICAgICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHJlZik7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTaXplID0gc2l6ZSAtIChwb3NpdGlvbiAtIGN1cnJlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb24udmFsdWUgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2l6ZWQudmFsdWUgPSAgdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3U2l6ZSA+PSB0aGlzLnByb3BzLm1pblNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucGFuZTEuc2l6ZS52YWx1ZSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnRmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ0ZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5Gb2N1cygpIHsgLy8gbmVlZCB0byBiZSBjYWxsZWQgY2hhbmdlIG9mIHNlc3Npb24gdmFsdWUgc28gdGhhdCB3ZSBjYW4gc2VlIHRoZW0gaW4gc2Vzc2lvbiBMb2dcbiAgICAgICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgICAgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0ID0gdGhpcy5wcm9wcy5zcGxpdDtcblxuICAgICAgICBsZXQgc3R5bGVPYmogPSBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoe1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgTW96VXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICAgICAgV2Via2l0VXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICAgICAgbXNVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICB1c2VyU2VsZWN0OiAndGV4dCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNwbGl0ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhzdHlsZU9iaiwge1xuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgIH0sdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKHN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9LHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gWydTcGxpdFBhbmUnLCBzcGxpdF07XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2luKCcgJyl9IHN0eWxlPXtzdHlsZU9ian0gcmVmPVwic3BsaXRQYW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lIHJlZj1cInBhbmUxXCIga2V5PVwicGFuZTFcIiBzcGxpdD17c3BsaXR9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnBhbmUxfT57Y2hpbGRyZW5bMF19PC9QYW5lPlxuICAgICAgICAgICAgICAgICAgICA8UmVzaXplciByZWY9XCJyZXNpemVyXCIga2V5PVwicmVzaXplclwiIG9uTW91c2VEb3duPXt0aGlzLm9uTW91c2VEb3dufSBzcGxpdD17c3BsaXR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lIHJlZj1cInBhbmUyXCIga2V5PVwicGFuZTJcIiBzcGxpdD17c3BsaXR9ICBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5wYW5lMn0+e2NoaWxkcmVuWzFdfTwvUGFuZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgfVxufVxuXG5TcGxpdFBhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgICAgICAgICAgbWluU2l6ZTogMCxcbiAgICAgICAgICAgIHNwbGl0OlwidmVydGljYWxcIlxuICAgICAgICB9O1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdFBhbmU7XG4iXX0=
