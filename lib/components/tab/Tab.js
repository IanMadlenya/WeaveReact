"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab(props) {
        _classCallCheck(this, Tab);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this, props));

        _ComponentManager2.default.initialize(_this);

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
            this.settings.activeTab.addGroupedCallback(this, this.forceUpdate);
            this.settings.tabs.childListCallbacks.addGroupedCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _ComponentManager2.default.componentWillUnmount(this);
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
//# sourceMappingURL=data:application/json;base64,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LENBQWQsQ0FBWCxDQUhDOztBQVVMLG1CQUFROztrQkFBSSxXQUFVLGNBQVYsRUFBSjtnQkFDSyxRQURMO2FBQVIsQ0FWSzs7OztXQXZDUDtFQUFZLGdCQUFNLFNBQU47O2tCQXdESCIsImZpbGUiOiJUYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmluaXRpYWxpemUodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zZXRUYWJzU2Vzc2lvblN0YXRlID0gdGhpcy5zZXRUYWJzU2Vzc2lvblN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0VGFic1Nlc3Npb25TdGF0ZSgpOy8vIGFkZCB0aGUgc2FtZSBmb3IgcHJvcHNVcGRhdGVcbiAgICB9XG5cbiAgICBzZXRUYWJzU2Vzc2lvblN0YXRlKCl7XG5cbiAgICAgICAgaWYodGhpcy5wcm9wcy50aXRsZXMpe1xuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnByb3BzLnRpdGxlcztcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPCB0YWJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnRhYnMucmVxdWVzdE9iamVjdCh0aGlzLnByb3BzLnRpdGxlc1tpXSxUYWJDb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hUYWIuY2FsbCh0aGlzLHRoaXMucHJvcHMudGl0bGVzWzBdLDAsdHJ1ZSk7Ly8gbGV0IHRoZSBmaXJzdCB2YWx1ZSBiZSBkZWZhdWx0IHZhbHVlXG4gICAgfVxuXG4gICAgc3dpdGNoVGFiKHRhYk5hbWUsaW5kZXgsaXNEZWZhdWx0KXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVUYWIudmFsdWUgPSB0YWJOYW1lO1xuICAgICAgICBpZighaXNEZWZhdWx0ICYmdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrKXRoaXMucHJvcHMuY2xpY2tDYWxsYmFjay5jYWxsKHRoaXMsdGFiTmFtZSxpbmRleCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVUYWIuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRhYnMuY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY29tcG9uZW50V2lsbFVubW91bnQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlVGFiLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpXG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGFicy5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHRhYnNOYW1lcyA9IHRoaXMuc2V0dGluZ3MudGFicy5nZXROYW1lcygpO1xuICAgICAgICB2YXIgdGFic0xpc3QgPSB0YWJzTmFtZXMubWFwKGZ1bmN0aW9uKHRhYk5hbWUsaW5kZXgpe1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5hY3RpdmVUYWIudmFsdWUgPT09IHRhYk5hbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBvbkNsaWNrPXt0aGlzLnN3aXRjaFRhYi5iaW5kKHRoaXMsdGFiTmFtZSxpbmRleCl9IGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjXCI+e3RhYk5hbWV9PC9hPjwvbGk+XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBvbkNsaWNrPXt0aGlzLnN3aXRjaFRhYi5iaW5kKHRoaXMsdGFiTmFtZSxpbmRleCl9PjxhIGhyZWY9XCIjXCI+e3RhYk5hbWV9PC9hPjwvbGk+XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuICg8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0YWJzTGlzdH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJOYXY7XG4iXX0=
