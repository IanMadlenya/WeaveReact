"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

var _Config = require("./Config");

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_React$Component) {
    _inherits(Accordion, _React$Component);

    function Accordion(props) {
        _classCallCheck(this, Accordion);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).call(this, props));

        _this.settings = _this.props.settings;
        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _App2.default.addForceUpdateToCallbacks(_this);
        if (_App2.default.debug) console.log("Accordion - constructor");
        return _this;
    }

    _createClass(Accordion, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (_App2.default.debug) console.log("Accordion - componentWillReceiveProps");
            _App2.default.componentWillReceiveProps(this, nextProps);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (_App2.default.debug) console.log("Accordion - componentWillUnmount");
            _App2.default.removeForceUpdateFromCallbacks(this);
        }

        // called only when React Parent render is called

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (_App2.default.debug) console.log("Accordion - shouldComponentUpdate");
            return false;
        }
    }, {
        key: "onClickCallback",
        value: function onClickCallback(childConfig, index) {
            this.settings.activeChild.state = index;
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            var activeChildStyle = this.settings.activeChildStyle.getStyleFor();
            var childStyle = this.settings.childStyle.getStyleFor();

            this.settings.props.addEvent("onClick", this.onClickCallback);
            this.settings.props.addChildProps("open", false, true);
            this.settings.props.addChildProps("style", childStyle, activeChildStyle);
            this.settings.props.keyProp = "index";
            this.settings.props.addOddChildren([this.settings.activeChild.state]);

            return _App2.default.renderChildren(this);
        }
    }, {
        key: "render",
        value: function render() {
            if (_App2.default.debug) console.log("Accordion - render");

            var styleObject = this.settings.style.getStyleFor(null, true);
            var childrenUI = this.renderChildren();

            var ui = _react2.default.createElement(
                "div",
                { style: styleObject },
                childrenUI
            );
            if (this.settings.useCSS.state) {
                var cssName = this.settings.CSS.getCSSFor();
                ui = _react2.default.createElement(
                    "div",
                    { className: cssName, style: styleObject },
                    childrenUI
                );
            }

            return ui;
        }
    }]);

    return Accordion;
}(_react2.default.Component);

Weave.registerClass("weavereact.Accordion", Accordion, [weavejs.api.core.ILinkableObject]);

_App2.default.registerToolConfig(Accordion, _Config2.default);
_App2.default.registerToolImplementation("weavereact.AccordionConfig", Accordion);

exports.default = Accordion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007OztBQUVGLGFBRkUsU0FFRixDQUFZLEtBQVosRUFBa0I7OEJBRmhCLFdBRWdCOzsyRUFGaEIsc0JBR1EsUUFEUTs7QUFFZCxjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxDQUZGO0FBR2Qsc0JBQUksb0NBQUosQ0FBeUMsTUFBSyxLQUFMLENBQVcsUUFBWCxFQUFvQixNQUFLLFFBQUwsQ0FBN0QsQ0FIYztBQUlkLHNCQUFJLHlCQUFKLFFBSmM7QUFLZCxZQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLHlCQUFaLEVBQWI7cUJBTGM7S0FBbEI7O2lCQUZFOztrREFVd0IsV0FBVTtBQUNoQyxnQkFBRyxjQUFJLEtBQUosRUFBVSxRQUFRLEdBQVIsQ0FBWSx1Q0FBWixFQUFiO0FBQ0EsMEJBQUkseUJBQUosQ0FBOEIsSUFBOUIsRUFBbUMsU0FBbkMsRUFGZ0M7Ozs7K0NBTWQ7QUFDbEIsZ0JBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksa0NBQVosRUFBYjtBQUNDLDBCQUFJLDhCQUFKLENBQW1DLElBQW5DLEVBRmlCOzs7Ozs7OzhDQU1BLFdBQVU7QUFDNUIsZ0JBQUcsY0FBSSxLQUFKLEVBQVUsUUFBUSxHQUFSLENBQVksbUNBQVosRUFBYjtBQUNBLG1CQUFPLEtBQVAsQ0FGNEI7Ozs7d0NBS2hCLGFBQVksT0FBTTtBQUM5QixpQkFBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixLQUExQixHQUFrQyxLQUFsQyxDQUQ4Qjs7Ozt5Q0FJbEI7QUFDWixnQkFBSSxtQkFBbUIsS0FBSyxRQUFMLENBQWMsZ0JBQWQsQ0FBK0IsV0FBL0IsRUFBbkIsQ0FEUTtBQUVaLGdCQUFJLGFBQWEsS0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixXQUF6QixFQUFiLENBRlE7O0FBSVosaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsUUFBcEIsQ0FBNkIsU0FBN0IsRUFBdUMsS0FBSyxlQUFMLENBQXZDLENBSlk7QUFLWixpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixhQUFwQixDQUFrQyxNQUFsQyxFQUF5QyxLQUF6QyxFQUErQyxJQUEvQyxFQUxZO0FBTVosaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsYUFBcEIsQ0FBa0MsT0FBbEMsRUFBMEMsVUFBMUMsRUFBcUQsZ0JBQXJELEVBTlk7QUFPWixpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixPQUFwQixHQUE4QixPQUE5QixDQVBZO0FBUWIsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsY0FBcEIsQ0FBbUMsQ0FBQyxLQUFLLFFBQUwsQ0FBYyxXQUFkLENBQTBCLEtBQTFCLENBQXBDLEVBUmE7O0FBVVosbUJBQVEsY0FBSSxjQUFKLENBQW1CLElBQW5CLENBQVIsQ0FWWTs7OztpQ0FjUDtBQUNMLGdCQUFHLGNBQUksS0FBSixFQUFVLFFBQVEsR0FBUixDQUFZLG9CQUFaLEVBQWI7O0FBRUEsZ0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLENBQWdDLElBQWhDLEVBQXFDLElBQXJDLENBQWQsQ0FIQztBQUlMLGdCQUFJLGFBQWEsS0FBSyxjQUFMLEVBQWIsQ0FKQzs7QUFNTCxnQkFBSSxLQUFLOztrQkFBSyxPQUFPLFdBQVAsRUFBTDtnQkFBMEIsVUFBMUI7YUFBTCxDQU5DO0FBT0wsZ0JBQUcsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUEyQjtBQUMxQixvQkFBSSxVQUFVLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsU0FBbEIsRUFBVixDQURzQjtBQUUxQixxQkFBSzs7c0JBQUssV0FBVyxPQUFYLEVBQW9CLE9BQU8sV0FBUCxFQUF6QjtvQkFBOEMsVUFBOUM7aUJBQUwsQ0FGMEI7YUFBOUI7O0FBT0EsbUJBQVEsRUFBUixDQWRLOzs7O1dBN0NQO0VBQWtCLGdCQUFNLFNBQU47O0FBK0R4QixNQUFNLGFBQU4sQ0FBb0Isc0JBQXBCLEVBQTRDLFNBQTVDLEVBQXNELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUF2RDs7QUFFQSxjQUFJLGtCQUFKLENBQXVCLFNBQXZCO0FBQ0EsY0FBSSwwQkFBSixDQUErQiw0QkFBL0IsRUFBNEQsU0FBNUQ7O2tCQUVlIiwiZmlsZSI6IkFjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBBY2NvcmRpb25Db25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XG5cblxuY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICBBcHAuYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyh0aGlzKTtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiQWNjb3JkaW9uIC0gY29uc3RydWN0b3JcIik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJBY2NvcmRpb24gLSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIpO1xuICAgICAgICBBcHAuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJBY2NvcmRpb24gLSBjb21wb25lbnRXaWxsVW5tb3VudFwiKTtcbiAgICAgICAgIEFwcC5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3ModGhpcyk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIG9ubHkgd2hlbiBSZWFjdCBQYXJlbnQgcmVuZGVyIGlzIGNhbGxlZFxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJBY2NvcmRpb24gLSBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkNsaWNrQ2FsbGJhY2soY2hpbGRDb25maWcsaW5kZXgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZUNoaWxkLnN0YXRlID0gaW5kZXg7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdmFyIGFjdGl2ZUNoaWxkU3R5bGUgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZUNoaWxkU3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgdmFyIGNoaWxkU3R5bGUgPSB0aGlzLnNldHRpbmdzLmNoaWxkU3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkRXZlbnQoXCJvbkNsaWNrXCIsdGhpcy5vbkNsaWNrQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJvcGVuXCIsZmFsc2UsdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInN0eWxlXCIsY2hpbGRTdHlsZSxhY3RpdmVDaGlsZFN0eWxlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5rZXlQcm9wID0gXCJpbmRleFwiO1xuICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkT2RkQ2hpbGRyZW4oW3RoaXMuc2V0dGluZ3MuYWN0aXZlQ2hpbGQuc3RhdGVdKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAgQXBwLnJlbmRlckNoaWxkcmVuKHRoaXMpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJBY2NvcmRpb24gLSByZW5kZXJcIik7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpO1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgICAgICB2YXIgdWkgPSA8ZGl2IHN0eWxlPXtzdHlsZU9iamVjdH0+e2NoaWxkcmVuVUl9PC9kaXY+O1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICAgICAgdWkgPSA8ZGl2IGNsYXNzTmFtZT17Y3NzTmFtZX0gc3R5bGU9e3N0eWxlT2JqZWN0fT57Y2hpbGRyZW5VSX08L2Rpdj47XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgcmV0dXJuICh1aSk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5BY2NvcmRpb25cIiwgQWNjb3JkaW9uLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKEFjY29yZGlvbixBY2NvcmRpb25Db25maWcpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5BY2NvcmRpb25Db25maWdcIixBY2NvcmRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iXX0=
