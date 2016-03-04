"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _HTMLWrapper = require("../HTMLWrapper");

var _HTMLWrapper2 = _interopRequireDefault(_HTMLWrapper);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Brand = function (_React$Component) {
    _inherits(Brand, _React$Component);

    function Brand(props) {
        _classCallCheck(this, Brand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Brand).call(this, props));

        _this.settings = _this.props.settings;
        _this.langSettings = _this.props && _this.props.langSettings ? _this.props.langSettings : null;
        if (_this.props.children) _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
        _this.addCallbacks = _this.addCallbacks.bind(_this);
        _this.removeCallbacks = _this.removeCallbacks.bind(_this);

        return _this;
    }

    _createClass(Brand, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                if (nextProps.settings) {
                    this.removeCallbacks();
                    this.settings = nextProps.settings;
                    this.addCallbacks();
                }
            }
            if (this.props.style !== nextProps.style) {
                // user style added through UI is Sessioned
                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
            }
            if (this.props.children !== nextProps.children) {
                _App2.default.hookSessionStateForComponentChildren(nextProps.children, this.settings);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.addCallbacks();
        }
    }, {
        key: "addCallbacks",
        value: function addCallbacks() {
            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
            this.settings.title.addImmediateCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
            if (this.langSettings) this.langSettings.addImmediateCallback(this, this.forceUpdate);
            //this.settings.children.childListCallbacks.addGroupedCallback(this,this.forceUpdate);
        }
    }, {
        key: "removeCallbacks",
        value: function removeCallbacks() {
            this.settings.enable.removeCallback(this, this.forceUpdate);
            this.settings.title.removeCallback(this, this.forceUpdate);
            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
            if (this.langSettings) this.langSettings.removeCallback(this, this.forceUpdate);
            //this.settings.children.childListCallbacks.removeCallback(this,this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.removeCallbacks();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.dock !== nextProps.dock) {
                return true;
            } else if (this.props.position !== nextProps.position) {
                return true;
            } else if (this.props.useCSS !== nextProps.useCSS) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "renderChildren",
        value: function renderChildren(CSS) {
            var childConfigs = this.settings.children.getObjects();
            var clonedChildren = childConfigs.map(function (childConfig, index) {
                var child = this.settings.configChildMap.get(childConfig);

                if (child) {
                    var props = _App2.default.mergeInto({}, child.props);
                    if (typeof child.type === "string") {
                        var configName = this.settings.children.getName(childConfig);
                        return _react2.default.createElement(
                            _HTMLWrapper2.default,
                            { key: configName, settings: childConfig },
                            child
                        );
                    } else {
                        props["settings"] = childConfig;
                        if (CSS) {
                            props["className"] = CSS[childName];
                            props["CSS"] = CSS;
                        }
                        if (this.settings.childConfigMap.has(child)) this.settings.childConfigMap.delete(child);
                        var clonedChild = _react2.default.cloneElement(child, props);
                        this.settings.configChildMap.set(childConfig, clonedChild);
                        this.settings.childConfigMap.set(clonedChild, childConfig);
                        return clonedChild;
                    }
                } else {
                    var configClass = Weave.getPath(childConfig).getType();
                    var ToolClass = _App2.default.getToolImplementation(configClass);
                    var configName = this.settings.children.getName(childConfig);
                    var newChild = _react2.default.createElement(ToolClass, { key: configName, settings: childConfig });
                    this.settings.configChildMap.set(childConfig, newChild);
                    this.settings.childConfigMap.set(newChild, childConfig);
                    return newChild;
                }
            }.bind(this));

            return clonedChildren;
        }
    }, {
        key: "render",
        value: function render() {
            var BrandUI = _react2.default.createElement("div", null);

            if (this.settings.enable.value) {
                /*var title = this.settings.title.value;
                 var titleStyle  = this.settings.style.getStyleFor();
                if(this.langSettings){
                    title = App.getTranslatedWord(this.settings.title.value);
                }*/

                var childrenUI = [];
                if (this.props.useCSS) {
                    childrenUI = this.renderChildren(this.props.css);
                    var cssName = this.settings.CSS.getCSSFor();

                    BrandUI = _react2.default.createElement(
                        "div",
                        { className: cssName },
                        childrenUI
                    );
                } else {
                    var styleObject = this.settings.style.getStyleFor(null, true);
                    childrenUI = this.renderChildren(null);
                    BrandUI = _react2.default.createElement(
                        "div",
                        { style: styleObject },
                        childrenUI
                    );
                }
            }
            return BrandUI;
        }
    }]);

    return Brand;
}(_react2.default.Component);

Weave.registerClass("weavereact.navbar.Brand", Brand, [weavejs.api.core.ILinkableObject]);
exports.default = Brand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJyYW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTTs7O0FBRUYsYUFGRSxLQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsT0FFaUI7OzJFQUZqQixrQkFHUSxRQURTOztBQUVmLGNBQUssUUFBTCxHQUFnQixNQUFLLEtBQUwsQ0FBVyxRQUFYLENBRkQ7QUFHZixjQUFLLFlBQUwsR0FBb0IsS0FBQyxDQUFLLEtBQUwsSUFBYyxNQUFLLEtBQUwsQ0FBVyxZQUFYLEdBQXlCLE1BQUssS0FBTCxDQUFXLFlBQVgsR0FBd0IsSUFBaEUsQ0FITDtBQUlmLFlBQUcsTUFBSyxLQUFMLENBQVcsUUFBWCxFQUFvQixjQUFJLG9DQUFKLENBQXlDLE1BQUssS0FBTCxDQUFXLFFBQVgsRUFBb0IsTUFBSyxRQUFMLENBQTdELENBQXZCO0FBQ0EsY0FBSyxZQUFMLEdBQW9CLE1BQUssWUFBTCxDQUFrQixJQUFsQixPQUFwQixDQUxlO0FBTWYsY0FBSyxlQUFMLEdBQXVCLE1BQUssZUFBTCxDQUFxQixJQUFyQixPQUF2QixDQU5lOzs7S0FBbkI7O2lCQUZFOztrREFZd0IsV0FBVTtBQUNoQyxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUFtQjtBQUMxQyxvQkFBRyxVQUFVLFFBQVYsRUFBbUI7QUFDbEIseUJBQUssZUFBTCxHQURrQjtBQUVsQix5QkFBSyxRQUFMLEdBQWdCLFVBQVUsUUFBVixDQUZFO0FBR2xCLHlCQUFLLFlBQUwsR0FIa0I7aUJBQXRCO2FBREo7QUFPQSxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEtBQXFCLFVBQVUsS0FBVixFQUFnQjs7QUFDcEMsb0JBQUcsVUFBVSxLQUFWLEVBQWdCLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsVUFBcEIsQ0FBK0IsS0FBL0IsR0FBdUMsVUFBVSxLQUFWLENBQTFEO2FBREo7QUFHQSxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUFtQjtBQUMxQyw4QkFBSSxvQ0FBSixDQUF5QyxVQUFVLFFBQVYsRUFBbUIsS0FBSyxRQUFMLENBQTVELENBRDBDO2FBQTlDOzs7OzRDQU1lO0FBQ2YsaUJBQUssWUFBTCxHQURlOzs7O3VDQUlMO0FBQ1YsaUJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsb0JBQXJCLENBQTBDLElBQTFDLEVBQStDLEtBQUssV0FBTCxDQUEvQyxDQURVO0FBRVYsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0Isb0JBQXBCLENBQXlDLElBQXpDLEVBQThDLEtBQUssV0FBTCxDQUE5QyxDQUZVO0FBR1Ysa0JBQU0sWUFBTixDQUFtQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW5CLENBQXdDLG9CQUF4QyxDQUE2RCxJQUE3RCxFQUFrRSxLQUFLLFdBQUwsQ0FBbEUsQ0FIVTtBQUlWLGdCQUFHLEtBQUssWUFBTCxFQUFrQixLQUFLLFlBQUwsQ0FBa0Isb0JBQWxCLENBQXVDLElBQXZDLEVBQTRDLEtBQUssV0FBTCxDQUE1QyxDQUFyQjs7QUFKVTs7OzBDQVNLO0FBQ2YsaUJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsY0FBckIsQ0FBb0MsSUFBcEMsRUFBeUMsS0FBSyxXQUFMLENBQXpDLENBRGU7QUFFZixpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixjQUFwQixDQUFtQyxJQUFuQyxFQUF3QyxLQUFLLFdBQUwsQ0FBeEMsQ0FGZTtBQUdmLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFuQixDQUF3QyxjQUF4QyxDQUF1RCxJQUF2RCxFQUE0RCxLQUFLLFdBQUwsQ0FBNUQsQ0FIZTtBQUlmLGdCQUFHLEtBQUssWUFBTCxFQUFrQixLQUFLLFlBQUwsQ0FBa0IsY0FBbEIsQ0FBaUMsSUFBakMsRUFBc0MsS0FBSyxXQUFMLENBQXRDLENBQXJCOztBQUplOzs7K0NBUUs7QUFDcEIsaUJBQUssZUFBTCxHQURvQjs7Ozs4Q0FNRixXQUFVO0FBQzVCLGdCQUFHLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsVUFBVSxJQUFWLEVBQWU7QUFDbEMsdUJBQU8sSUFBUCxDQURrQzthQUF0QyxNQUVNLElBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFBbUI7QUFDaEQsdUJBQU8sSUFBUCxDQURnRDthQUE5QyxNQUVBLElBQUcsS0FBSyxLQUFMLENBQVcsTUFBWCxLQUFzQixVQUFVLE1BQVYsRUFBaUI7QUFDNUMsdUJBQU8sSUFBUCxDQUQ0QzthQUExQyxNQUVEO0FBQ0QsdUJBQU8sS0FBUCxDQURDO2FBRkM7Ozs7dUNBU0ssS0FBSTtBQUNmLGdCQUFJLGVBQWUsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixVQUF2QixFQUFmLENBRFc7QUFFZixnQkFBSSxpQkFBaUIsYUFBYSxHQUFiLENBQWlCLFVBQVMsV0FBVCxFQUFxQixLQUFyQixFQUEyQjtBQUM3RCxvQkFBSSxRQUFRLEtBQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsR0FBN0IsQ0FBaUMsV0FBakMsQ0FBUixDQUR5RDs7QUFHN0Qsb0JBQUcsS0FBSCxFQUFTO0FBQ0wsd0JBQUksUUFBUSxjQUFJLFNBQUosQ0FBYyxFQUFkLEVBQWlCLE1BQU0sS0FBTixDQUF6QixDQURDO0FBRUwsd0JBQUcsT0FBTyxNQUFNLElBQU4sS0FBZ0IsUUFBdkIsRUFBZ0M7QUFDL0IsNEJBQUksYUFBYyxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLE9BQXZCLENBQStCLFdBQS9CLENBQWQsQ0FEMkI7QUFFL0IsK0JBQU87OzhCQUFhLEtBQUssVUFBTCxFQUFpQixVQUFVLFdBQVYsRUFBOUI7NEJBQXNELEtBQXREO3lCQUFQLENBRitCO3FCQUFuQyxNQUdLO0FBQ0QsOEJBQU0sVUFBTixJQUFvQixXQUFwQixDQURDO0FBRUQsNEJBQUcsR0FBSCxFQUFPO0FBQ0gsa0NBQU0sV0FBTixJQUFxQixJQUFJLFNBQUosQ0FBckIsQ0FERztBQUVILGtDQUFNLEtBQU4sSUFBZSxHQUFmLENBRkc7eUJBQVA7QUFJQSw0QkFBRyxLQUFLLFFBQUwsQ0FBYyxjQUFkLENBQTZCLEdBQTdCLENBQWlDLEtBQWpDLENBQUgsRUFDSSxLQUFLLFFBQUwsQ0FBYyxjQUFkLENBQTZCLE1BQTdCLENBQW9DLEtBQXBDLEVBREo7QUFFQSw0QkFBSSxjQUFjLGdCQUFNLFlBQU4sQ0FBbUIsS0FBbkIsRUFBeUIsS0FBekIsQ0FBZCxDQVJIO0FBU0QsNkJBQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsR0FBN0IsQ0FBaUMsV0FBakMsRUFBNkMsV0FBN0MsRUFUQztBQVVELDZCQUFLLFFBQUwsQ0FBYyxjQUFkLENBQTZCLEdBQTdCLENBQWlDLFdBQWpDLEVBQTZDLFdBQTdDLEVBVkM7QUFXRCwrQkFBTyxXQUFQLENBWEM7cUJBSEw7aUJBRkosTUFrQk07QUFDRix3QkFBSSxjQUFjLE1BQU0sT0FBTixDQUFjLFdBQWQsRUFBMkIsT0FBM0IsRUFBZCxDQURGO0FBRUYsd0JBQUksWUFBYSxjQUFJLHFCQUFKLENBQTBCLFdBQTFCLENBQWIsQ0FGRjtBQUdGLHdCQUFJLGFBQWMsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixPQUF2QixDQUErQixXQUEvQixDQUFkLENBSEY7QUFJRix3QkFBSSxXQUFXLDhCQUFDLFNBQUQsSUFBVyxLQUFLLFVBQUwsRUFBa0IsVUFBVSxXQUFWLEVBQTdCLENBQVgsQ0FKRjtBQUtGLHlCQUFLLFFBQUwsQ0FBYyxjQUFkLENBQTZCLEdBQTdCLENBQWlDLFdBQWpDLEVBQTZDLFFBQTdDLEVBTEU7QUFNRix5QkFBSyxRQUFMLENBQWMsY0FBZCxDQUE2QixHQUE3QixDQUFpQyxRQUFqQyxFQUEwQyxXQUExQyxFQU5FO0FBT0YsMkJBQU8sUUFBUCxDQVBFO2lCQWxCTjthQUhrQyxDQStCcEMsSUEvQm9DLENBK0IvQixJQS9CK0IsQ0FBakIsQ0FBakIsQ0FGVzs7QUFtQ2YsbUJBQU8sY0FBUCxDQW5DZTs7OztpQ0F5Q1Y7QUFDTCxnQkFBSSxVQUFVLDBDQUFWLENBREM7O0FBR0wsZ0JBQUcsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUEyQjs7Ozs7OztBQVExQixvQkFBSSxhQUFhLEVBQWIsQ0FSc0I7QUFTMUIsb0JBQUcsS0FBSyxLQUFMLENBQVcsTUFBWCxFQUFrQjtBQUNqQixpQ0FBYSxLQUFLLGNBQUwsQ0FBb0IsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFqQyxDQURpQjtBQUVqQix3QkFBSSxVQUFVLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsU0FBbEIsRUFBVixDQUZhOztBQUlqQiw4QkFBVTs7MEJBQUssV0FBVyxPQUFYLEVBQUw7d0JBQ0csVUFESDtxQkFBVixDQUppQjtpQkFBckIsTUFPSztBQUNELHdCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixXQUFwQixDQUFnQyxJQUFoQyxFQUFxQyxJQUFyQyxDQUFkLENBREg7QUFFRCxpQ0FBYSxLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBYixDQUZDO0FBR0QsOEJBQVU7OzBCQUFLLE9BQU8sV0FBUCxFQUFMO3dCQUNHLFVBREg7cUJBQVYsQ0FIQztpQkFQTDthQVRKO0FBeUJBLG1CQUFRLE9BQVIsQ0E1Qks7Ozs7V0EvR1A7RUFBYyxnQkFBTSxTQUFOOztBQThJcEIsTUFBTSxhQUFOLENBQW9CLHlCQUFwQixFQUErQyxLQUEvQyxFQUFxRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdEQ7a0JBQ2UiLCJmaWxlIjoiQnJhbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSFRNTFdyYXBwZXIgZnJvbSBcIi4uL0hUTUxXcmFwcGVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcblxuY2xhc3MgQnJhbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgdGhpcy5sYW5nU2V0dGluZ3MgPSAodGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLmxhbmdTZXR0aW5ncyk/dGhpcy5wcm9wcy5sYW5nU2V0dGluZ3M6bnVsbDtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSl0aGlzLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIGFkZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBpZih0aGlzLmxhbmdTZXR0aW5ncyl0aGlzLmxhbmdTZXR0aW5ncy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAvL3RoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3MpdGhpcy5sYW5nU2V0dGluZ3MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgLy90aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jayAhPT0gbmV4dFByb3BzLmRvY2spe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHJlbmRlckNoaWxkcmVuKENTUyl7XG4gICAgICAgIHZhciBjaGlsZENvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbihjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLmdldChjaGlsZENvbmZpZyk7XG5cbiAgICAgICAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHt9LGNoaWxkLnByb3BzKTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9ICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEhUTUxXcmFwcGVyIGtleT17Y29uZmlnTmFtZX0gc2V0dGluZ3M9e2NoaWxkQ29uZmlnfT57Y2hpbGR9PC9IVE1MV3JhcHBlcj5cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICBpZihDU1Mpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSBDU1NbY2hpbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wiQ1NTXCJdID0gQ1NTO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV2VhdmUuZ2V0UGF0aChjaGlsZENvbmZpZykuZ2V0VHlwZSgpO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSA8VG9vbENsYXNzIGtleT17Y29uZmlnTmFtZX0gIHNldHRpbmdzPXtjaGlsZENvbmZpZ30vPjtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQobmV3Q2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG5cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgQnJhbmRVSSA9IDxkaXYvPjtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG4gICAgICAgICAgICAvKnZhciB0aXRsZSA9IHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciB0aXRsZVN0eWxlICA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgICAgIGlmKHRoaXMubGFuZ1NldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IEFwcC5nZXRUcmFuc2xhdGVkV29yZCh0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlKTtcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IFtdXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4odGhpcy5wcm9wcy5jc3MpO1xuICAgICAgICAgICAgICAgIHZhciBjc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5DU1MuZ2V0Q1NTRm9yKCk7XG5cbiAgICAgICAgICAgICAgICBCcmFuZFVJID0gPGRpdiBjbGFzc05hbWU9e2Nzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKTtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbihudWxsKTtcbiAgICAgICAgICAgICAgICBCcmFuZFVJID0gPGRpdiBzdHlsZT17c3R5bGVPYmplY3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoQnJhbmRVSSk7XG4gICAgfVxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QubmF2YmFyLkJyYW5kXCIsIEJyYW5kLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgQnJhbmQ7XG4iXX0=
