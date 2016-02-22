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

        /*renderChildren(CSS){
           var clonedChildren = React.Children.map(this.props.children,function(child,index){
               var childName = "";
               var props = App.mergeInto({},child.props);
               if(typeof(child.type) === "string"){
                   childName =  child.type + index;
                   var htmlWrapperConfig = this.settings.children.getObject(childName);
                   return <HTMLWrapper settings={htmlWrapperConfig}>{child}</HTMLWrapper>
               }else{
                   childName =  child.type.name + index;
                   var childConfig = this.settings.children.getObject(childName);
                   props["settings"] = childConfig;
                   if(CSS){
                        props["className"] = CSS[childName];
                        props["CSS"] = CSS;
                   }
                   return React.cloneElement(child,props);
               }
            },this);
           return clonedChildren;
        }*/

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

                    BrandUI = _react2.default.createElement(
                        "div",
                        { className: this.props.css.header },
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
//# sourceMappingURL=data:application/json;base64,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RyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLEVBQTJCOzs7Ozs7O0FBUTFCLG9CQUFJLGFBQWEsRUFBYixDQVJzQjtBQVMxQixvQkFBRyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQWtCO0FBQ2pCLGlDQUFhLEtBQUssY0FBTCxDQUFvQixLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWpDLENBRGlCOztBQUdqQiw4QkFBVTs7MEJBQUssV0FBVyxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsTUFBZixFQUFoQjt3QkFDRyxVQURIO3FCQUFWLENBSGlCO2lCQUFyQixNQU1LO0FBQ0Qsd0JBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFdBQXBCLENBQWdDLElBQWhDLEVBQXFDLElBQXJDLENBQWQsQ0FESDtBQUVELGlDQUFhLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUFiLENBRkM7QUFHRCw4QkFBVTs7MEJBQUssT0FBTyxXQUFQLEVBQUw7d0JBQ0csVUFESDtxQkFBVixDQUhDO2lCQU5MO2FBVEo7QUF3QkEsbUJBQVEsT0FBUixDQTNCSzs7OztXQXBJUDtFQUFjLGdCQUFNLFNBQU47O0FBa0twQixNQUFNLGFBQU4sQ0FBb0IseUJBQXBCLEVBQStDLEtBQS9DLEVBQXFELENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUF0RDtrQkFDZSIsImZpbGUiOiJCcmFuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIVE1MV3JhcHBlciBmcm9tIFwiLi4vSFRNTFdyYXBwZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuXG5jbGFzcyBCcmFuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICB0aGlzLmxhbmdTZXR0aW5ncyA9ICh0aGlzLnByb3BzICYmIHRoaXMucHJvcHMubGFuZ1NldHRpbmdzKT90aGlzLnByb3BzLmxhbmdTZXR0aW5nczpudWxsO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuKUFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MgPSB0aGlzLmFkZENhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcyA9IHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnN0eWxlKXRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihuZXh0UHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIGlmKHRoaXMubGFuZ1NldHRpbmdzKXRoaXMubGFuZ1NldHRpbmdzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIC8vdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cbiAgICByZW1vdmVDYWxsYmFja3MgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBpZih0aGlzLmxhbmdTZXR0aW5ncyl0aGlzLmxhbmdTZXR0aW5ncy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAvL3RoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgIH1cblxuXG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51c2VDU1MgIT09IG5leHRQcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oQ1NTKXtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBjaGlsZENvbmZpZ3MubWFwKGZ1bmN0aW9uKGNoaWxkQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcblxuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IEFwcC5tZXJnZUludG8oe30sY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8SFRNTFdyYXBwZXIga2V5PXtjb25maWdOYW1lfSBzZXR0aW5ncz17Y2hpbGRDb25maWd9PntjaGlsZH08L0hUTUxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInNldHRpbmdzXCJdID0gY2hpbGRDb25maWc7XG4gICAgICAgICAgICAgICAgICAgIGlmKENTUyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImNsYXNzTmFtZVwiXSA9IENTU1tjaGlsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJDU1NcIl0gPSBDU1M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5oYXMoY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5kZWxldGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkQ2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KGNsb25lZENoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBXZWF2ZS5nZXRQYXRoKGNoaWxkQ29uZmlnKS5nZXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9ICBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9ICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZCA9IDxUb29sQ2xhc3Mga2V5PXtjb25maWdOYW1lfSAgc2V0dGluZ3M9e2NoaWxkQ29uZmlnfS8+O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChuZXdDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcblxuICAgIH1cblxuICAgICAvKnJlbmRlckNoaWxkcmVuKENTUyl7XG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLGZ1bmN0aW9uKGNoaWxkLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZE5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIHByb3BzID0gQXBwLm1lcmdlSW50byh7fSxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgIGNoaWxkTmFtZSA9ICBjaGlsZC50eXBlICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgdmFyIGh0bWxXcmFwcGVyQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3QoY2hpbGROYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEhUTUxXcmFwcGVyIHNldHRpbmdzPXtodG1sV3JhcHBlckNvbmZpZ30+e2NoaWxkfTwvSFRNTFdyYXBwZXI+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjaGlsZE5hbWUgPSAgY2hpbGQudHlwZS5uYW1lICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3QoY2hpbGROYW1lKTtcbiAgICAgICAgICAgICAgICBwcm9wc1tcInNldHRpbmdzXCJdID0gY2hpbGRDb25maWc7XG4gICAgICAgICAgICAgICAgaWYoQ1NTKXtcbiAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wiY2xhc3NOYW1lXCJdID0gQ1NTW2NoaWxkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICBwcm9wc1tcIkNTU1wiXSA9IENTUztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuICAgIH0qL1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgQnJhbmRVSSA9IDxkaXYvPjtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG4gICAgICAgICAgICAvKnZhciB0aXRsZSA9IHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciB0aXRsZVN0eWxlICA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgICAgIGlmKHRoaXMubGFuZ1NldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IEFwcC5nZXRUcmFuc2xhdGVkV29yZCh0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlKTtcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IFtdXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4odGhpcy5wcm9wcy5jc3MpO1xuXG4gICAgICAgICAgICAgICAgQnJhbmRVSSA9IDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNzcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKTtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbihudWxsKTtcbiAgICAgICAgICAgICAgICBCcmFuZFVJID0gPGRpdiBzdHlsZT17c3R5bGVPYmplY3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoQnJhbmRVSSk7XG4gICAgfVxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QubmF2YmFyLkJyYW5kXCIsIEJyYW5kLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgQnJhbmQ7XG4iXX0=
