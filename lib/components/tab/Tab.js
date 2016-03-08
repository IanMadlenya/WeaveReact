"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab(props) {
        _classCallCheck(this, Tab);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this, props));

        _this.settings = _this.props.settings;
        App.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        App.addForceUpdateToCallbacks(_this);
        _this.propsManager = new PropsManager();
        if (App.debug) console.log("Nav - constructor");

        _this.setTabsSessionState = _this.setTabsSessionState.bind(_this);
        _this.setTabsSessionState(); // add the same for propsUpdate
        return _this;
    }

    _createClass(Tab, [{
        key: "setTabsSessionState",
        value: function setTabsSessionState() {

            if (this.props.titles) {
                var tabs = this.props.titles;
                for (var i = 0; i < tabs.length; i++) {
                    this.settings.tabs.requestObject(this.props.titles[i], TabConfig);
                }
            }

            this.switchTab.call(this, this.props.titles[0], 0, true); // let the first value be default value
        }
    }, {
        key: "switchTab",
        value: function switchTab(tabName, index, isDefault) {
            this.settings.activeTab.value = tabName;
            if (!isDefault && this.props.clickCallback) this.props.clickCallback.call(this, tabName, index);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.activeTab.addImmediateCallback(this, this.forceUpdate);
            this.settings.tabs.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.activeTab.removeCallback(this, this.forceUpdate);
            this.settings.tabs.childListCallbacks.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "render",
        value: function render() {

            var tabsNames = this.settings.tabs.getNames();
            var tabsList = tabsNames.map(function (tabName, index) {
                if (this.settings.activeTab.value === tabName) return _react2.default.createElement(
                    "li",
                    { key: index, onClick: this.switchTab.bind(this, tabName, index), className: "active" },
                    _react2.default.createElement(
                        "a",
                        { href: "#" },
                        tabName
                    )
                );else return _react2.default.createElement(
                    "li",
                    { key: index, onClick: this.switchTab.bind(this, tabName, index) },
                    _react2.default.createElement(
                        "a",
                        { href: "#" },
                        tabName
                    )
                );
            }.bind(this));

            return _react2.default.createElement(
                "ul",
                { className: "nav nav-tabs" },
                tabsList
            );
        }
    }]);

    return Tab;
}(_react2.default.Component);

exports.default = TabNav;
//# sourceMappingURL=data:application/json;base64,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RUFBWSxTQUFTLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEIsRUFBeUIsT0FBekIsRUFBaUMsS0FBakMsQ0FBVCxFQUFoQjtvQkFBa0U7OzBCQUFHLE1BQUssR0FBTCxFQUFIO3dCQUFhLE9BQWI7cUJBQWxFO2lCQUFQLENBSEo7YUFEeUIsQ0FLM0IsSUFMMkIsQ0FLdEIsSUFMc0IsQ0FBZCxDQUFYLENBSEM7O0FBVUwsbUJBQVE7O2tCQUFJLFdBQVUsY0FBVixFQUFKO2dCQUNLLFFBREw7YUFBUixDQVZLOzs7O1dBMUNQO0VBQVksZ0JBQU0sU0FBTjs7a0JBMkRIIiwiZmlsZSI6IlRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5jbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICBBcHAuYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIgPSBuZXcgUHJvcHNNYW5hZ2VyKCk7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIk5hdiAtIGNvbnN0cnVjdG9yXCIpO1xuXG4gICAgICAgIHRoaXMuc2V0VGFic1Nlc3Npb25TdGF0ZSA9IHRoaXMuc2V0VGFic1Nlc3Npb25TdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFRhYnNTZXNzaW9uU3RhdGUoKTsvLyBhZGQgdGhlIHNhbWUgZm9yIHByb3BzVXBkYXRlXG4gICAgfVxuXG4gICAgc2V0VGFic1Nlc3Npb25TdGF0ZSgpe1xuXG4gICAgICAgIGlmKHRoaXMucHJvcHMudGl0bGVzKXtcbiAgICAgICAgICAgIHZhciB0YWJzID0gdGhpcy5wcm9wcy50aXRsZXM7XG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTwgdGFicy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50YWJzLnJlcXVlc3RPYmplY3QodGhpcy5wcm9wcy50aXRsZXNbaV0sVGFiQ29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoVGFiLmNhbGwodGhpcyx0aGlzLnByb3BzLnRpdGxlc1swXSwwLHRydWUpOy8vIGxldCB0aGUgZmlyc3QgdmFsdWUgYmUgZGVmYXVsdCB2YWx1ZVxuICAgIH1cblxuICAgIHN3aXRjaFRhYih0YWJOYW1lLGluZGV4LGlzRGVmYXVsdCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlVGFiLnZhbHVlID0gdGFiTmFtZTtcbiAgICAgICAgaWYoIWlzRGVmYXVsdCAmJnRoaXMucHJvcHMuY2xpY2tDYWxsYmFjayl0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRhYk5hbWUsaW5kZXgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlVGFiLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRhYnMuY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVUYWIucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSlcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50YWJzLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgdGFic05hbWVzID0gdGhpcy5zZXR0aW5ncy50YWJzLmdldE5hbWVzKCk7XG4gICAgICAgIHZhciB0YWJzTGlzdCA9IHRhYnNOYW1lcy5tYXAoZnVuY3Rpb24odGFiTmFtZSxpbmRleCl7XG4gICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmFjdGl2ZVRhYi52YWx1ZSA9PT0gdGFiTmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IG9uQ2xpY2s9e3RoaXMuc3dpdGNoVGFiLmJpbmQodGhpcyx0YWJOYW1lLGluZGV4KX0gY2xhc3NOYW1lPVwiYWN0aXZlXCI+PGEgaHJlZj1cIiNcIj57dGFiTmFtZX08L2E+PC9saT5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IG9uQ2xpY2s9e3RoaXMuc3dpdGNoVGFiLmJpbmQodGhpcyx0YWJOYW1lLGluZGV4KX0+PGEgaHJlZj1cIiNcIj57dGFiTmFtZX08L2E+PC9saT5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gKDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3RhYnNMaXN0fVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYk5hdjtcbiJdfQ==