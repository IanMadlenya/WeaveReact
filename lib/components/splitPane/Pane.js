"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _PaneConfig = require("./PaneConfig");

var _PaneConfig2 = _interopRequireDefault(_PaneConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//code logic taken from https://github.com/tomkp/react-split-pane

var Pane = function (_React$Component) {
    _inherits(Pane, _React$Component);

    function Pane(props) {
        _classCallCheck(this, Pane);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pane).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _PaneConfig2.default();
        _this.setSessionState = _this.setSessionState.bind(_this);
        //this.state ={};
        return _this;
    }

    _createClass(Pane, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.size.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.size.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "setSessionState",
        value: function setSessionState(size) {
            this.settings.size.value = size;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                this.settings.size.removeCallback(this, this.forceUpdate);
                this.settings = nextProps.settings;
                this.settings.size.addImmediateCallback(this, this.forceUpdate);
            }
        }
    }, {
        key: "render",
        value: function render() {

            var split = this.props.split;
            var classes = ['Pane', split];

            var styleObj = _Style2.default.appendVendorPrefix({
                flex: 1,
                position: 'relative',
                outline: 'none',
                overflow: 'auto'
            });

            if (this.settings.size.value) {
                if (split === 'vertical') {
                    styleObj.width = this.settings.size.value;
                } else {
                    styleObj.height = this.settings.size.value;
                    styleObj.display = 'flex';
                }
                styleObj.flex = 'none';
            }

            return _react2.default.createElement(
                "div",
                { className: classes.join(' '), style: styleObj },
                this.props.children
            );
        }
    }]);

    return Pane;
}(_react2.default.Component);

exports.default = Pane;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07OztBQUVGLGFBRkUsSUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE1BRWlCOzsyRUFGakIsaUJBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLDBCQUExQyxDQUZEO0FBR2YsY0FBSyxlQUFMLEdBQXVCLE1BQUssZUFBTCxDQUFxQixJQUFyQixPQUF2Qjs7QUFIZTtLQUFuQjs7aUJBRkU7OzRDQVNpQjtBQUNmLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLG9CQUFuQixDQUF3QyxJQUF4QyxFQUE2QyxLQUFLLFdBQUwsQ0FBN0MsQ0FEZTs7OzsrQ0FLSztBQUNwQixpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixjQUFuQixDQUFrQyxJQUFsQyxFQUF1QyxLQUFLLFdBQUwsQ0FBdkMsQ0FEb0I7Ozs7d0NBSVIsTUFBSztBQUNqQixpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixHQUEyQixJQUEzQixDQURpQjs7OztrREFJSyxXQUFVO0FBQ2hDLGdCQUFHLEtBQUssS0FBTCxDQUFXLFFBQVgsS0FBd0IsVUFBVSxRQUFWLEVBQW1CO0FBQzFDLHFCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLGNBQW5CLENBQWtDLElBQWxDLEVBQXVDLEtBQUssV0FBTCxDQUF2QyxDQUQwQztBQUUxQyxxQkFBSyxRQUFMLEdBQWdCLFVBQVUsUUFBVixDQUYwQjtBQUcxQyxxQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixvQkFBbkIsQ0FBd0MsSUFBeEMsRUFBNkMsS0FBSyxXQUFMLENBQTdDLENBSDBDO2FBQTlDOzs7O2lDQU9LOztBQUVMLGdCQUFNLFFBQVEsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUZUO0FBR0wsZ0JBQU0sVUFBVSxDQUFDLE1BQUQsRUFBUyxLQUFULENBQVYsQ0FIRDs7QUFLTCxnQkFBSSxXQUFXLGdCQUFNLGtCQUFOLENBQXlCO0FBQ3BDLHNCQUFNLENBQU47QUFDQSwwQkFBVSxVQUFWO0FBQ0EseUJBQVMsTUFBVDtBQUNBLDBCQUFVLE1BQVY7YUFKVyxDQUFYLENBTEM7O0FBY0wsZ0JBQUksS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixFQUEwQjtBQUMxQixvQkFBSSxVQUFVLFVBQVYsRUFBc0I7QUFDdEIsNkJBQVMsS0FBVCxHQUFpQixLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQW5CLENBREs7aUJBQTFCLE1BRU87QUFDSCw2QkFBUyxNQUFULEdBQWtCLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsQ0FEZjtBQUVILDZCQUFTLE9BQVQsR0FBbUIsTUFBbkIsQ0FGRztpQkFGUDtBQU1BLHlCQUFTLElBQVQsR0FBZ0IsTUFBaEIsQ0FQMEI7YUFBOUI7O0FBVUEsbUJBQVE7O2tCQUFLLFdBQVcsUUFBUSxJQUFSLENBQWEsR0FBYixDQUFYLEVBQThCLE9BQU8sUUFBUCxFQUFuQztnQkFDSyxLQUFLLEtBQUwsQ0FBVyxRQUFYO2FBRGIsQ0F4Qks7Ozs7V0E5QlA7RUFBYSxnQkFBTSxTQUFOOztrQkE2REoiLCJmaWxlIjoiUGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgUGFuZUNvbmZpZyBmcm9tIFwiLi9QYW5lQ29uZmlnXCI7XG5cbi8vY29kZSBsb2dpYyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS90b21rcC9yZWFjdC1zcGxpdC1wYW5lXG5cbmNsYXNzIFBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFBhbmVDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uU3RhdGUgPSB0aGlzLnNldFNlc3Npb25TdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAvL3RoaXMuc3RhdGUgPXt9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2l6ZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNpemUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBzZXRTZXNzaW9uU3RhdGUoc2l6ZSl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2l6ZS52YWx1ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zaXplLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zaXplLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qgc3BsaXQgPSB0aGlzLnByb3BzLnNwbGl0O1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gWydQYW5lJywgc3BsaXRdO1xuXG4gICAgICAgIGxldCBzdHlsZU9iaiA9IFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeCh7XG4gICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5zaXplLnZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoc3BsaXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBzdHlsZU9iai53aWR0aCA9IHRoaXMuc2V0dGluZ3Muc2l6ZS52YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmouaGVpZ2h0ID0gdGhpcy5zZXR0aW5ncy5zaXplLnZhbHVlO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZU9iai5mbGV4ID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2luKCcgJyl9IHN0eWxlPXtzdHlsZU9ian0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmU7XG4iXX0=
