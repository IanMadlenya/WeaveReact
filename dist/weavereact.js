(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["weavereact"] = factory(require("React"), require("ReactDOM"));
	else
		root["weavereact"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Tree = __webpack_require__(1);

	var _Tree2 = _interopRequireDefault(_Tree);

	var _TreeConfig = __webpack_require__(10);

	var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

	var _Node = __webpack_require__(8);

	var _Node2 = _interopRequireDefault(_Node);

	var _NodeConfig = __webpack_require__(9);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	var _Modal = __webpack_require__(11);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _ModalConfig = __webpack_require__(12);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _SplitPane = __webpack_require__(16);

	var _SplitPane2 = _interopRequireDefault(_SplitPane);

	var _SplitPaneConfig = __webpack_require__(18);

	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

	var _App = __webpack_require__(3);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Tree = _Tree2.default;
	exports.Modal = _Modal2.default;
	exports.TreeConfig = _TreeConfig2.default;
	exports.ModalConfig = _ModalConfig2.default;
	exports.SplitPane = _SplitPane2.default;
	exports.SplitPaneConfig = _SplitPaneConfig2.default;

	exports.getToolForConfigName = function (name) {
	    if (_App2.default.getToolImplementation(name)) {
	        return _App2.default.getToolImplementation(name);
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsUUFBUSxJQUFSO0FBQ0EsUUFBUSxLQUFSO0FBQ0EsUUFBUSxVQUFSO0FBQ0EsUUFBUSxXQUFSO0FBQ0EsUUFBUSxTQUFSO0FBQ0EsUUFBUSxlQUFSOztBQUVBLFFBQVEsb0JBQVIsR0FBK0IsVUFBVSxJQUFWLEVBQWdCO0FBQzNDLFFBQUksY0FBSSxxQkFBSixDQUEwQixJQUExQixDQUFKLEVBQXFDO0FBQ2pDLGVBQU8sY0FBSSxxQkFBSixDQUEwQixJQUExQixDQUFQLENBRGlDO0tBQXJDO0NBRDJCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJlZSBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvVHJlZVwiO1xuaW1wb3J0IFRyZWVDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy90cmVlL1RyZWVDb25maWdcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9Ob2RlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvTm9kZUNvbmZpZ1wiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbFwiO1xuaW1wb3J0IE1vZGFsQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxDb25maWdcIjtcblxuaW1wb3J0IFNwbGl0UGFuZSBmcm9tIFwiLi9jb21wb25lbnRzL3NwbGl0UGFuZS9TcGxpdFBhbmVcIjtcbmltcG9ydCBTcGxpdFBhbmVDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9zcGxpdFBhbmUvU3BsaXRQYW5lQ29uZmlnXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vdXRpbHMvQXBwXCI7XG5cblxuZXhwb3J0cy5UcmVlID0gVHJlZTtcbmV4cG9ydHMuTW9kYWwgPSBNb2RhbDtcbmV4cG9ydHMuVHJlZUNvbmZpZyA9IFRyZWVDb25maWc7XG5leHBvcnRzLk1vZGFsQ29uZmlnID0gTW9kYWxDb25maWc7XG5leHBvcnRzLlNwbGl0UGFuZSA9IFNwbGl0UGFuZTtcbmV4cG9ydHMuU3BsaXRQYW5lQ29uZmlnID0gU3BsaXRQYW5lQ29uZmlnO1xuXG5leHBvcnRzLmdldFRvb2xGb3JDb25maWdOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihuYW1lKSkge1xuICAgICAgICByZXR1cm4gQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihuYW1lKTtcbiAgICB9XG5cbn1cbiJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(3);

	var _App2 = _interopRequireDefault(_App);

	var _Style = __webpack_require__(5);

	var _Style2 = _interopRequireDefault(_Style);

	var _Node = __webpack_require__(8);

	var _Node2 = _interopRequireDefault(_Node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tree = function (_React$Component) {
	    _inherits(Tree, _React$Component);

	    function Tree(props) {
	        _classCallCheck(this, Tree);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tree).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new TreeConfig();
	        _this.settings.dataTypesMap = _this.props.dataTypesMap;
	        _this.settings.getDataType = _this.props.getDataType;
	        return _this;
	    }

	    _createClass(Tree, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {}
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                this.settings = nextProps.settings;
	                this.settings.dataTypesMap = this.props.dataTypesMap;
	                this.settings.getDataType = this.props.getDataType;
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            console.log("Tree render");

	            return _react2.default.createElement(_Node2.default, { data: this.props.data, label: this.props.label, nodes: this.props.nodes, treeConfig: this.settings, clickCallback: this.props.clickCallback });
	        }
	    }]);

	    return Tree;
	}(_react2.default.Component);

	_App2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
	exports.default = Tree;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3RyZWUvVHJlZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1NOzs7QUFFRixhQUZFLElBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixNQUVpQjs7MkVBRmpCLGlCQUdRLFFBRFM7O0FBRWYsY0FBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQixJQUFJLFVBQUosRUFBMUMsQ0FGRDtBQUdmLGNBQUssUUFBTCxDQUFjLFlBQWQsR0FBNkIsTUFBSyxLQUFMLENBQVcsWUFBWCxDQUhkO0FBSWYsY0FBSyxRQUFMLENBQWMsV0FBZCxHQUE0QixNQUFLLEtBQUwsQ0FBVyxXQUFYLENBSmI7O0tBQW5COztpQkFGRTs7NENBU2lCOzs7K0NBSUs7OztrREFJRSxXQUFVO0FBQ2hDLGdCQUFHLEtBQUssS0FBTCxDQUFXLFFBQVgsS0FBd0IsVUFBVSxRQUFWLEVBQW1CO0FBQzFDLHFCQUFLLFFBQUwsR0FBZ0IsVUFBVSxRQUFWLENBRDBCO0FBRTFDLHFCQUFLLFFBQUwsQ0FBYyxZQUFkLEdBQTZCLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FGYTtBQUcxQyxxQkFBSyxRQUFMLENBQWMsV0FBZCxHQUE0QixLQUFLLEtBQUwsQ0FBVyxXQUFYLENBSGM7YUFBOUM7Ozs7aUNBWUs7QUFDTCxvQkFBUSxHQUFSLENBQVksYUFBWixFQURLOztBQUdiLG1CQUFTLGdEQUFNLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixPQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsRUFBa0IsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLFlBQVksS0FBSyxRQUFMLEVBQWUsZUFBZSxLQUFLLEtBQUwsQ0FBVyxhQUFYLEVBQXpILENBQVQsQ0FIYTs7OztXQTlCUDtFQUFhLGdCQUFNLFNBQU47O0FBc0NuQixjQUFJLDBCQUFKLENBQStCLHVCQUEvQixFQUF1RCxJQUF2RDtrQkFDZSIsImZpbGUiOiJUcmVlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5cbmNsYXNzIFRyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFRyZWVDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXAgPSB0aGlzLnByb3BzLmRhdGFUeXBlc01hcDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5nZXREYXRhVHlwZSA9IHRoaXMucHJvcHMuZ2V0RGF0YVR5cGU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGFUeXBlc01hcCA9IHRoaXMucHJvcHMuZGF0YVR5cGVzTWFwO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5nZXREYXRhVHlwZSA9IHRoaXMucHJvcHMuZ2V0RGF0YVR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUcmVlIHJlbmRlclwiKVxuXG5yZXR1cm4gKCA8Tm9kZSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBub2Rlcz17dGhpcy5wcm9wcy5ub2Rlc30gdHJlZUNvbmZpZz17dGhpcy5zZXR0aW5nc30gY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrfS8+ICk7XG4gICAgfVxuXG59XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuVHJlZUNvbmZpZ1wiLFRyZWUpO1xuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	(function (module) {

	    function App() {}

	    var toolRegistry = {};

	    App.registerToolImplementation = function (asClassName, jsClass) {
	        if (!toolRegistry[asClassName]) toolRegistry[asClassName] = jsClass;
	    };

	    App.getToolImplementation = function (asClassName) {
	        return toolRegistry[asClassName];
	    };

	    module.exports = App;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9BcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFHZixhQUFTLEdBQVQsR0FBZSxFQUFmOztBQUlBLFFBQUksZUFBZSxFQUFmLENBUFc7O0FBVWYsUUFBSSwwQkFBSixHQUFpQyxVQUFVLFdBQVYsRUFBdUIsT0FBdkIsRUFBZ0M7QUFDN0QsWUFBSSxDQUFDLGFBQWEsV0FBYixDQUFELEVBQ0EsYUFBYSxXQUFiLElBQTRCLE9BQTVCLENBREo7S0FENkIsQ0FWbEI7O0FBZWYsUUFBSSxxQkFBSixHQUE0QixVQUFVLFdBQVYsRUFBdUI7QUFDL0MsZUFBTyxhQUFhLFdBQWIsQ0FBUCxDQUQrQztLQUF2QixDQWZiOztBQW1CZixXQUFPLE9BQVAsR0FBaUIsR0FBakIsQ0FuQmU7Q0FBbEIsRUFxQkMsTUFyQkQsQ0FBRCIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVSZWFjdCIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuICAgIGZ1bmN0aW9uIEFwcCgpIHtcblxuICAgIH1cblxuICAgIHZhciB0b29sUmVnaXN0cnkgPSB7fTtcblxuXG4gICAgQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uID0gZnVuY3Rpb24gKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKSB7XG4gICAgICAgIGlmICghdG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSlcbiAgICAgICAgICAgIHRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0gPSBqc0NsYXNzO1xuICAgIH1cblxuICAgIEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAoYXNDbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _appendVendorPrefix = __webpack_require__(6);

	var _appendVendorPrefix2 = _interopRequireDefault(_appendVendorPrefix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (module) {

	    function Style() {}

	    function merge(into, obj) {
	        for (var attr in obj) {
	            into[attr] = obj[attr];
	        }

	        return into;
	    }

	    Style.mergeStyleObjects = function (into, obj, appendVendorPrefix) {
	        var styleObject = merge(into, obj);
	        if (appendVendorPrefix) return Style.appendVendorPrefix(styleObject);else return styleObject;
	    };

	    Style.getStyle = function (style) {
	        return (0, _appendVendorPrefix2.default)(style);
	    };

	    Style.appendVendorPrefix = function (style) {
	        return (0, _appendVendorPrefix2.default)(style);
	    };

	    // due to bootstrap Navbar zindex (1029) value we have to give 1030 for overlay
	    Style.overlayContainer = function (isOpen) {
	        return (0, _appendVendorPrefix2.default)({
	            position: 'fixed',
	            width: '100%',
	            height: '100%',
	            left: 0,
	            top: 0,
	            background: 'rgba(0, 0, 0, 0.1)',
	            opacity: isOpen ? 1 : 0,
	            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
	            transition: isOpen ? 'opacity 0.5s' : 'opacity 0.5s, transform 0.1s 0.5s',
	            zIndex: 1030
	        });
	    };

	    Style.modal = function (isOpen) {
	        return (0, _appendVendorPrefix2.default)({
	            position: 'fixed',
	            zIndex: 1050,
	            width: '100%',
	            height: '100%',
	            left: 0,
	            top: 0,
	            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
	            transition: 'all 0.5s'

	        });
	    };

	    module.exports = Style;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9TdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUdmLGFBQVMsS0FBVCxHQUFpQixFQUFqQjs7QUFNQSxhQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLEdBQXJCLEVBQTBCO0FBQ3RCLGFBQUssSUFBSSxJQUFKLElBQVksR0FBakIsRUFBc0I7QUFDbEIsaUJBQUssSUFBTCxJQUFhLElBQUksSUFBSixDQUFiLENBRGtCO1NBQXRCOztBQUlBLGVBQU8sSUFBUCxDQUxzQjtLQUExQjs7QUFRQSxVQUFNLGlCQUFOLEdBQTBCLFVBQVUsSUFBVixFQUFnQixHQUFoQixFQUFxQixrQkFBckIsRUFBeUM7QUFDL0QsWUFBSSxjQUFjLE1BQU0sSUFBTixFQUFZLEdBQVosQ0FBZCxDQUQyRDtBQUUvRCxZQUFJLGtCQUFKLEVBQ0ksT0FBTyxNQUFNLGtCQUFOLENBQXlCLFdBQXpCLENBQVAsQ0FESixLQUVLLE9BQU8sV0FBUCxDQUZMO0tBRnNCLENBakJYOztBQTJCZixVQUFNLFFBQU4sR0FBaUIsVUFBVSxLQUFWLEVBQWlCO0FBQzlCLGVBQU8sa0NBQW1CLEtBQW5CLENBQVAsQ0FEOEI7S0FBakIsQ0EzQkY7O0FBK0JmLFVBQU0sa0JBQU4sR0FBMkIsVUFBVSxLQUFWLEVBQWlCO0FBQ3hDLGVBQU8sa0NBQW1CLEtBQW5CLENBQVAsQ0FEd0M7S0FBakI7OztBQS9CWixTQTBDZixDQUFNLGdCQUFOLEdBQXlCLFVBQVUsTUFBVixFQUFrQjtBQUN2QyxlQUFPLGtDQUFtQjtBQUN0QixzQkFBVSxPQUFWO0FBQ0EsbUJBQU8sTUFBUDtBQUNBLG9CQUFRLE1BQVI7QUFDQSxrQkFBTSxDQUFOO0FBQ0EsaUJBQUssQ0FBTDtBQUNBLHdCQUFZLG9CQUFaO0FBQ0EscUJBQVMsU0FBUyxDQUFULEdBQWEsQ0FBYjtBQUNULHVCQUFXLFNBQVMsc0JBQVQsR0FBa0MsMEJBQWxDO0FBQ1gsd0JBQVksU0FBUyxjQUFULEdBQTBCLG1DQUExQjtBQUNaLG9CQUFRLElBQVI7U0FWRyxDQUFQLENBRHVDO0tBQWxCLENBMUNWOztBQXlEZixVQUFNLEtBQU4sR0FBYyxVQUFVLE1BQVYsRUFBa0I7QUFDNUIsZUFBTyxrQ0FBbUI7QUFDdEIsc0JBQVUsT0FBVjtBQUNBLG9CQUFRLElBQVI7QUFDQSxtQkFBTyxNQUFQO0FBQ0Esb0JBQVEsTUFBUjtBQUNBLGtCQUFNLENBQU47QUFDQSxpQkFBSyxDQUFMO0FBQ0EsdUJBQVcsU0FBUyxzQkFBVCxHQUFrQywwQkFBbEM7QUFDWCx3QkFBWSxVQUFaOztTQVJHLENBQVAsQ0FENEI7S0FBbEIsQ0F6REM7O0FBMkVmLFdBQU8sT0FBUCxHQUFpQixLQUFqQixDQTNFZTtDQUFsQixFQTZFQyxNQTdFRCxDQUFEIiwiZmlsZSI6IlN0eWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwZW5kVmVuZG9yUHJlZml4IGZyb20gJy4vYXBwZW5kVmVuZG9yUHJlZml4JztcblxuXG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuICAgIGZ1bmN0aW9uIFN0eWxlKCkge1xuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIG1lcmdlKGludG8sIG9iaikge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cblxuICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzID0gZnVuY3Rpb24gKGludG8sIG9iaiwgYXBwZW5kVmVuZG9yUHJlZml4KSB7XG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IG1lcmdlKGludG8sIG9iaik7XG4gICAgICAgIGlmIChhcHBlbmRWZW5kb3JQcmVmaXgpXG4gICAgICAgICAgICByZXR1cm4gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlT2JqZWN0KVxuICAgICAgICBlbHNlIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9XG5cblxuXG5cbiAgICBTdHlsZS5nZXRTdHlsZSA9IGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICByZXR1cm4gYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlKTtcbiAgICB9XG5cbiAgICBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXggPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeChzdHlsZSk7XG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgLy8gZHVlIHRvIGJvb3RzdHJhcCBOYXZiYXIgemluZGV4ICgxMDI5KSB2YWx1ZSB3ZSBoYXZlIHRvIGdpdmUgMTAzMCBmb3Igb3ZlcmxheVxuICAgIFN0eWxlLm92ZXJsYXlDb250YWluZXIgPSBmdW5jdGlvbiAoaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBhcHBlbmRWZW5kb3JQcmVmaXgoe1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgICAgICAgICBvcGFjaXR5OiBpc09wZW4gPyAxIDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNPcGVuID8gJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyA6ICd0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCknLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaXNPcGVuID8gJ29wYWNpdHkgMC41cycgOiAnb3BhY2l0eSAwLjVzLCB0cmFuc2Zvcm0gMC4xcyAwLjVzJyxcbiAgICAgICAgICAgIHpJbmRleDogMTAzMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBTdHlsZS5tb2RhbCA9IGZ1bmN0aW9uIChpc09wZW4pIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHpJbmRleDogMTA1MCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGlzT3BlbiA/ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScgOiAndHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cycsXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFN0eWxlO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getVendorPropertyName = __webpack_require__(7);

	module.exports = function (target, sources) {
	    var to = Object(target);
	    var hasOwnProperty = Object.prototype.hasOwnProperty;

	    for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	        var nextSource = arguments[nextIndex];
	        if (nextSource == null) {
	            continue;
	        }

	        var from = Object(nextSource);

	        for (var key in from) {
	            if (hasOwnProperty.call(from, key)) {
	                to[key] = from[key];
	            }
	        }
	    }

	    var prefixed = {};
	    for (var key in to) {
	        prefixed[getVendorPropertyName(key)] = to[key];
	    }

	    return prefixed;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9hcHBlbmRWZW5kb3JQcmVmaXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBSSx3QkFBd0IsUUFBUSx5QkFBUixDQUF4Qjs7QUFFSixPQUFPLE9BQVAsR0FBaUIsVUFBVSxNQUFWLEVBQWtCLE9BQWxCLEVBQTJCO0FBQ3hDLFFBQUksS0FBSyxPQUFPLE1BQVAsQ0FBTCxDQURvQztBQUV4QyxRQUFJLGlCQUFpQixPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FGbUI7O0FBSXhDLFNBQUssSUFBSSxZQUFZLENBQVosRUFBZSxZQUFZLFVBQVUsTUFBVixFQUFrQixXQUF0RCxFQUFtRTtBQUMvRCxZQUFJLGFBQWEsVUFBVSxTQUFWLENBQWIsQ0FEMkQ7QUFFL0QsWUFBSSxjQUFjLElBQWQsRUFBb0I7QUFDcEIscUJBRG9CO1NBQXhCOztBQUlBLFlBQUksT0FBTyxPQUFPLFVBQVAsQ0FBUCxDQU4yRDs7QUFRL0QsYUFBSyxJQUFJLEdBQUosSUFBVyxJQUFoQixFQUFzQjtBQUNsQixnQkFBSSxlQUFlLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEIsR0FBMUIsQ0FBSixFQUFvQztBQUNoQyxtQkFBRyxHQUFILElBQVUsS0FBSyxHQUFMLENBQVYsQ0FEZ0M7YUFBcEM7U0FESjtLQVJKOztBQWVBLFFBQUksV0FBVyxFQUFYLENBbkJvQztBQW9CeEMsU0FBSyxJQUFJLEdBQUosSUFBVyxFQUFoQixFQUFvQjtBQUNoQixpQkFBUyxzQkFBc0IsR0FBdEIsQ0FBVCxJQUF1QyxHQUFHLEdBQUgsQ0FBdkMsQ0FEZ0I7S0FBcEI7O0FBSUEsV0FBTyxRQUFQLENBeEJ3QztDQUEzQiIsImZpbGUiOiJhcHBlbmRWZW5kb3JQcmVmaXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVSZWFjdCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFZlbmRvclByb3BlcnR5TmFtZSA9IHJlcXVpcmUoJy4vZ2V0VmVuZG9yUHJvcGVydHlOYW1lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlcykge1xuICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAgIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgICBmb3IgKHZhciBuZXh0SW5kZXggPSAxOyBuZXh0SW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBuZXh0SW5kZXgrKykge1xuICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgICAgICBpZiAobmV4dFNvdXJjZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmVmaXhlZCA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiB0bykge1xuICAgICAgICBwcmVmaXhlZFtnZXRWZW5kb3JQcm9wZXJ0eU5hbWUoa2V5KV0gPSB0b1trZXldXG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeGVkXG59XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var div = document.createElement('div');
	var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
	var domVendorPrefix;

	// Helper function to get the proper vendor property name. (transition => WebkitTransition)
	module.exports = function (prop) {

	    if (prop in div.style) return prop;

	    var prop = prop.charAt(0).toUpperCase() + prop.substr(1);
	    if (domVendorPrefix) {
	        return domVendorPrefix + prop;
	    } else {
	        for (var i = 0; i < prefixes.length; ++i) {
	            var vendorProp = prefixes[i] + prop;
	            if (vendorProp in div.style) {
	                domVendorPrefix = prefixes[i];
	                return vendorProp;
	            }
	        }
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9nZXRWZW5kb3JQcm9wZXJ0eU5hbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBSSxNQUFNLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFOO0FBQ0osSUFBSSxXQUFXLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsR0FBbEIsRUFBdUIsSUFBdkIsQ0FBWDtBQUNKLElBQUksZUFBSjs7O0FBR0EsT0FBTyxPQUFQLEdBQWlCLFVBQVUsSUFBVixFQUFnQjs7QUFFN0IsUUFBSSxRQUFRLElBQUksS0FBSixFQUFXLE9BQU8sSUFBUCxDQUF2Qjs7QUFFQSxRQUFJLE9BQU8sS0FBSyxNQUFMLENBQVksQ0FBWixFQUFlLFdBQWYsS0FBK0IsS0FBSyxNQUFMLENBQVksQ0FBWixDQUEvQixDQUprQjtBQUs3QixRQUFJLGVBQUosRUFBcUI7QUFDakIsZUFBTyxrQkFBa0IsSUFBbEIsQ0FEVTtLQUFyQixNQUVPO0FBQ0gsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBUyxNQUFULEVBQWlCLEVBQUUsQ0FBRixFQUFLO0FBQ3RDLGdCQUFJLGFBQWEsU0FBUyxDQUFULElBQWMsSUFBZCxDQURxQjtBQUV0QyxnQkFBSSxjQUFjLElBQUksS0FBSixFQUFXO0FBQ3pCLGtDQUFrQixTQUFTLENBQVQsQ0FBbEIsQ0FEeUI7QUFFekIsdUJBQU8sVUFBUCxDQUZ5QjthQUE3QjtTQUZKO0tBSEo7Q0FMYSIsImZpbGUiOiJnZXRWZW5kb3JQcm9wZXJ0eU5hbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVSZWFjdCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudmFyIHByZWZpeGVzID0gWydNb3onLCAnV2Via2l0JywgJ08nLCAnbXMnXTtcbnZhciBkb21WZW5kb3JQcmVmaXg7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIHByb3BlciB2ZW5kb3IgcHJvcGVydHkgbmFtZS4gKHRyYW5zaXRpb24gPT4gV2Via2l0VHJhbnNpdGlvbilcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHByb3ApIHtcblxuICAgIGlmIChwcm9wIGluIGRpdi5zdHlsZSkgcmV0dXJuIHByb3A7XG5cbiAgICB2YXIgcHJvcCA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnN1YnN0cigxKTtcbiAgICBpZiAoZG9tVmVuZG9yUHJlZml4KSB7XG4gICAgICAgIHJldHVybiBkb21WZW5kb3JQcmVmaXggKyBwcm9wO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB2ZW5kb3JQcm9wID0gcHJlZml4ZXNbaV0gKyBwcm9wO1xuICAgICAgICAgICAgaWYgKHZlbmRvclByb3AgaW4gZGl2LnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgZG9tVmVuZG9yUHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlbmRvclByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(3);

	var _App2 = _interopRequireDefault(_App);

	var _Style = __webpack_require__(5);

	var _Style2 = _interopRequireDefault(_Style);

	var _NodeConfig = __webpack_require__(9);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Node = function (_React$Component) {
	    _inherits(Node, _React$Component);

	    function Node(props) {
	        _classCallCheck(this, Node);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Node).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _NodeConfig2.default();
	        _this.toggle = _this.toggle.bind(_this);
	        _this.getTreeNodes = _this.getTreeNodes.bind(_this);
	        _this.getTreeLabel = _this.getTreeLabel.bind(_this);
	        _this.setSessionStateFromTree();
	        return _this;
	    }

	    _createClass(Node, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.settings.open.addImmediateCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	            this.settings.label.addImmediateCallback(this, this.forceUpdate);
	            this.settings.active.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.open.removeCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
	            this.settings.label.removeCallback(this, this.forceUpdate);
	            this.settings.active.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "toggle",
	        value: function toggle() {
	            this.settings.open.value = !this.settings.open.value;
	            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data);
	            this.props.treeConfig.changeActiveNode(this.settings);
	        }
	    }, {
	        key: "setSessionStateFromTree",
	        value: function setSessionStateFromTree() {
	            this.settings.label.value = this.getTreeLabel();
	            var treeNodes = this.getTreeNodes();
	            if (treeNodes && treeNodes.length !== this.settings.children.getNames().length) {
	                this.settings.children.delayCallbacks();
	                for (var i = 0; i < treeNodes.length; i++) {
	                    var objectName = "node" + i;
	                    this.settings.children.requestObject(objectName, _NodeConfig2.default);
	                }
	                this.settings.children.resumeCallbacks();
	            }
	        }
	    }, {
	        key: "getTreeNodes",
	        value: function getTreeNodes() {
	            if (this.props.data[this.props.nodes] instanceof Function) {
	                return this.props.data[this.props.nodes]();
	            } else {
	                return this.props.data[this.props.nodes];
	            }
	        }
	    }, {
	        key: "getTreeLabel",
	        value: function getTreeLabel() {
	            if (this.props.data[this.props.label] instanceof Function) {
	                return this.props.data[this.props.label]();
	            } else {
	                return this.props.data[this.props.label];
	            }
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            var flag = false;
	            if (this.settings !== nextProps.settings) {
	                this.settings = nextProps.settings;
	                flag = true;
	            } else if (this.props.label !== nextProps.label) flag = true;else if (this.props.nodes !== nextProps.nodes) flag = true;

	            if (flag) this.setSessionStateFromTree();
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            if (Weave.detectLinkableObjectChange(this.settings)) return true;
	            if (this.props.settings !== nextProps.settings) return true;else if (this.props.label !== nextProps.label) return true;else if (this.props.nodes !== nextProps.nodes) return true;else if (this.props.clickCallback !== nextProps.clickCallback) return true;else return false;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var nodesUI = [];

	            var nodeUI = "";
	            var nodes = this.settings.getNodes();
	            if (this.settings.open.value) {

	                if (nodes.length > 0) {
	                    var treeNodes = this.getTreeNodes();
	                    for (var i = 0; i < nodes.length; i++) {
	                        var treeItem = treeNodes[i];
	                        var nodeConfig = this.settings.children.getObject(nodes[i]);
	                        nodesUI.push(_react2.default.createElement(Node, { key: i, data: treeItem, label: this.props.label, nodes: this.props.nodes, treeConfig: this.props.treeConfig, settings: nodeConfig, clickCallback: this.props.clickCallback }));
	                    }
	                }
	            }

	            if (nodes.length > 0) {
	                //folder
	                var nodeIconStyleObject = _Style2.default.appendVendorPrefix(this.props.treeConfig.getNodeIconStyle());
	                var folderIcon = this.props.treeConfig.getFolderIcon(this.props.data, this.settings.open.value);
	                nodeUI = _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement(
	                        "span",
	                        { onClick: this.toggle },
	                        _react2.default.createElement("i", { className: folderIcon, style: nodeIconStyleObject }),
	                        " ",
	                        this.settings.label.value
	                    ),
	                    _react2.default.createElement(
	                        "ul",
	                        { style: { listStyleType: "none", paddingLeft: "20px" } },
	                        nodesUI
	                    )
	                );
	            } else {
	                //leaf
	                var leaf = this.settings.label.value;
	                var fileIcon = this.props.treeConfig.getFileIcon(this.props.data);
	                var fileIconStyle = this.props.treeConfig.getFileIconStyle();
	                var activeLeafColor = this.settings.active.value ? "#8e8d8d" : "black";
	                if (fileIcon.indexOf("fa fa-") > -1) nodeUI = _react2.default.createElement(
	                    "li",
	                    { style: { color: activeLeafColor }, onClick: this.toggle },
	                    _react2.default.createElement("i", { className: fileIcon }),
	                    " ",
	                    leaf
	                );else nodeUI = _react2.default.createElement(
	                    "li",
	                    { style: { color: activeLeafColor }, onClick: this.toggle },
	                    _react2.default.createElement(
	                        "span",
	                        { style: fileIconStyle },
	                        fileIcon
	                    ),
	                    " ",
	                    leaf
	                );
	            }

	            return nodeUI;
	        }
	    }]);

	    return Node;
	}(_react2.default.Component);

	_App2.default.registerToolImplementation("weavereact.NodeConfig", Node);
	exports.default = Node;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3RyZWUvTm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzs7QUFFRixhQUZFLElBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixNQUVpQjs7MkVBRmpCLGlCQUdRLFFBRFM7O0FBRWYsY0FBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQiwwQkFBMUMsQ0FGRDtBQUdmLGNBQUssTUFBTCxHQUFjLE1BQUssTUFBTCxDQUFZLElBQVosT0FBZCxDQUhlO0FBSWYsY0FBSyxZQUFMLEdBQW9CLE1BQUssWUFBTCxDQUFrQixJQUFsQixPQUFwQixDQUplO0FBS2YsY0FBSyxZQUFMLEdBQW9CLE1BQUssWUFBTCxDQUFrQixJQUFsQixPQUFwQixDQUxlO0FBTWYsY0FBSyx1QkFBTCxHQU5lOztLQUFuQjs7aUJBRkU7OzRDQVdpQjtBQUNmLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLG9CQUFuQixDQUF3QyxJQUF4QyxFQUE4QyxLQUFLLFdBQUwsQ0FBOUMsQ0FEZTtBQUVmLGlCQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLGtCQUF2QixDQUEwQyxvQkFBMUMsQ0FBK0QsSUFBL0QsRUFBcUUsS0FBSyxXQUFMLENBQXJFLENBRmU7QUFHZixpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixvQkFBcEIsQ0FBeUMsSUFBekMsRUFBK0MsS0FBSyxXQUFMLENBQS9DLENBSGU7QUFJZixpQkFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixvQkFBckIsQ0FBMEMsSUFBMUMsRUFBZ0QsS0FBSyxXQUFMLENBQWhELENBSmU7Ozs7K0NBT0s7QUFDcEIsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsY0FBbkIsQ0FBa0MsSUFBbEMsRUFBd0MsS0FBSyxXQUFMLENBQXhDLENBRG9CO0FBRXBCLGlCQUFLLFFBQUwsQ0FB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QUFTLE9BQVQsQ0FBaUIsUUFBakIsSUFBNkIsQ0FBQyxDQUFELEVBQzVCLFNBQVM7O3NCQUFJLE9BQU8sRUFBQyxPQUFNLGVBQU4sRUFBUixFQUFnQyxTQUFTLEtBQUssTUFBTCxFQUE3QztvQkFDRyxxQ0FBRyxXQUFXLFFBQVgsRUFBSCxDQURIOztvQkFFVSxJQUZWO2lCQUFULENBREosS0FNSSxTQUFTOztzQkFBSSxPQUFPLEVBQUMsT0FBTSxlQUFOLEVBQVIsRUFBZ0MsU0FBUyxLQUFLLE1BQUwsRUFBN0M7b0JBQ0c7OzBCQUFNLE9BQU8sYUFBUCxFQUFOO3dCQUE2QixRQUE3QjtxQkFESDs7b0JBRVUsSUFGVjtpQkFBVCxDQU5KO2FBbEJKOztBQThCSixtQkFBUyxNQUFULENBL0NTOzs7O1dBNUZQO0VBQWEsZ0JBQU0sU0FBTjs7QUFnSm5CLGNBQUksMEJBQUosQ0FBK0IsdUJBQS9CLEVBQXVELElBQXZEO2tCQUNlIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVSZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE5vZGVDb25maWcoKTtcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0VHJlZUxhYmVsID0gdGhpcy5nZXRUcmVlTGFiZWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uU3RhdGVGcm9tVHJlZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9ICF0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncylcbiAgICB9XG5cblxuICAgIHNldFNlc3Npb25TdGF0ZUZyb21UcmVlKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlID0gdGhpcy5nZXRUcmVlTGFiZWwoKTtcbiAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzKCk7XG4gICAgICAgIGlmICh0cmVlTm9kZXMgJiYgdHJlZU5vZGVzLmxlbmd0aCAhPT0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lcygpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0TmFtZSA9IFwibm9kZVwiICsgaTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3Qob2JqZWN0TmFtZSwgTm9kZUNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VHJlZU5vZGVzKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLm5vZGVzXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5ub2Rlc10oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5ub2Rlc107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUcmVlTGFiZWwoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubGFiZWxdIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmxhYmVsXSgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5sYWJlbF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHZhciBmbGFnID0gZmFsc2U7XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIH0gICAgICAgXG4gICAgICAgIGVsc2UgaWYodGhpcy5wcm9wcy5sYWJlbCAhPT0gbmV4dFByb3BzLmxhYmVsKVxuICAgICAgICAgICAgZmxhZyA9ICB0cnVlO1xuICAgICAgICBlbHNlIGlmKHRoaXMucHJvcHMubm9kZXMgIT09IG5leHRQcm9wcy5ub2RlcylcbiAgICAgICAgICAgIGZsYWcgPSAgdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGlmKGZsYWcpdGhpcy5zZXRTZXNzaW9uU3RhdGVGcm9tVHJlZSgpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYoV2VhdmUuZGV0ZWN0TGlua2FibGVPYmplY3RDaGFuZ2UodGhpcy5zZXR0aW5ncykpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgaWYodGhpcy5wcm9wcy5sYWJlbCAhPT0gbmV4dFByb3BzLmxhYmVsKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgaWYodGhpcy5wcm9wcy5ub2RlcyAhPT0gbmV4dFByb3BzLm5vZGVzKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgaWYodGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrICE9PSBuZXh0UHJvcHMuY2xpY2tDYWxsYmFjaylcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbm9kZXNVSSA9IFtdO1xuXG4gICAgICAgIHZhciBub2RlVUkgPSBcIlwiO1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSl7XG5cbiAgICAgICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2RlcygpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IG5vZGVzLmxlbmd0aCA7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWVJdGVtID0gdHJlZU5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0KCBub2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzVUkucHVzaCg8Tm9kZSBrZXk9e2l9IGRhdGE9e3RyZWVJdGVtfSBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH0gbm9kZXM9e3RoaXMucHJvcHMubm9kZXN9IHRyZWVDb25maWc9e3RoaXMucHJvcHMudHJlZUNvbmZpZ30gc2V0dGluZ3M9e25vZGVDb25maWd9IGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30vPikgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApeyAvL2ZvbGRlclxuICAgICAgICAgICAgdmFyIG5vZGVJY29uU3R5bGVPYmplY3QgPSBTdHlsZXMuYXBwZW5kVmVuZG9yUHJlZml4KHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXROb2RlSWNvblN0eWxlKCkpO1xuICAgICAgICAgICAgdmFyIGZvbGRlckljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0Rm9sZGVySWNvbih0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgIG5vZGVVSSA9IDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZvbGRlckljb259IHN0eWxlPXtub2RlSWNvblN0eWxlT2JqZWN0fSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgJiMxNjA7e3RoaXMuc2V0dGluZ3MubGFiZWwudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTpcIm5vbmVcIixwYWRkaW5nTGVmdDpcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAge25vZGVzVUl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgfVxuICAgICAgICBlbHNleyAvL2xlYWZcbiAgICAgICAgICAgIHZhciBsZWFmID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcbiAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEpO1xuICAgICAgICAgICAgdmFyIGZpbGVJY29uU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0RmlsZUljb25TdHlsZSgpO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUxlYWZDb2xvciA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlP1wiIzhlOGQ4ZFwiOlwiYmxhY2tcIjtcbiAgICAgICAgICAgIGlmKGZpbGVJY29uLmluZGV4T2YoXCJmYSBmYS1cIikgPiAtMSlcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e3tjb2xvcjphY3RpdmVMZWFmQ29sb3J9fSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3tsZWFmfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbm9kZVVJID0gPGxpIHN0eWxlPXt7Y29sb3I6YWN0aXZlTGVhZkNvbG9yfX0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtmaWxlSWNvblN0eWxlfT57ZmlsZUljb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3tsZWFmfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIH1cblxuICAgIHJldHVybiAoIG5vZGVVSSk7XG4gICAgfVxuXG59XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	/*import Weave from 'Weave';
	import weavejs from 'weavejs';*/
	(function (module) {

	    function NodeConfig() {

	        Object.defineProperties(this, {
	            "label": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            },
	            "children": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap()) // important to be prototype as type restriction is compared with prototype
	            },
	            "open": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "active": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            }
	        });
	    }

	    var p = NodeConfig.prototype;

	    p.getNodes = function () {
	        return this.children.getNames();
	    };

	    p.reset = function () {
	        this.label.value = "";
	        this.open.value = false;
	        this.children.removeAllObjects();
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.NodeConfig', NodeConfig);

	    module.exports = NodeConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3RyZWUvTm9kZUNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsQ0FBQyxVQUFVLE1BQVYsRUFBa0I7O0FBRWYsYUFBUyxVQUFULEdBQXNCOztBQUVsQixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLHFCQUFTO0FBQ0wsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixFQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSx3QkFBWTtBQUNSLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsRUFBOUIsQ0FBUDtBQURRLGFBQVo7QUFHQSxvQkFBUTtBQUNKLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsS0FBakMsQ0FBMUIsQ0FBUDthQURKO0FBR0Esc0JBQVU7QUFDTix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLEtBQWpDLENBQTFCLENBQVA7YUFESjtTQVZKLEVBRmtCO0tBQXRCOztBQW1CQSxRQUFJLElBQUksV0FBVyxTQUFYLENBckJPOztBQXVCZixNQUFFLFFBQUYsR0FBYSxZQUFZO0FBQ3JCLGVBQU8sS0FBSyxRQUFMLENBQWMsUUFBZCxFQUFQLENBRHFCO0tBQVosQ0F2QkU7O0FBK0JmLE1BQUUsS0FBRixHQUFVLFlBQVk7QUFDbEIsYUFBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixFQUFuQixDQURrQjtBQUVsQixhQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLEtBQWxCLENBRmtCO0FBR2xCLGFBQUssUUFBTCxDQUFjLGdCQUFkLEdBSGtCO0tBQVo7OztBQS9CSyxTQXNDZixDQUFNLGFBQU4sQ0FBb0IsdUJBQXBCLEVBQTZDLFVBQTdDLEVBdENlOztBQXdDZixXQUFPLE9BQVAsR0FBaUIsVUFBakIsQ0F4Q2U7Q0FBbEIsRUEwQ0MsTUExQ0QsQ0FBRCIsImZpbGUiOiJOb2RlQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE5vZGVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKSAvLyBpbXBvcnRhbnQgdG8gYmUgcHJvdG90eXBlIGFzIHR5cGUgcmVzdHJpY3Rpb24gaXMgY29tcGFyZWQgd2l0aCBwcm90b3R5cGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHZhciBwID0gTm9kZUNvbmZpZy5wcm90b3R5cGU7XG5cbiAgICBwLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5nZXROYW1lcygpO1xuICAgIH1cblxuXG5cblxuXG4gICAgcC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICB9XG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lk5vZGVDb25maWcnLCBOb2RlQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTm9kZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	/*import Weave from 'Weave';
	import weavejs from 'weavejs';*/
	(function (module) {

	    function TreeConfig() {

	        Object.defineProperties(this, {
	            "folderIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder"))
	            },
	            "folderOpenIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder-open"))
	            },
	            "fileIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text"))
	            },
	            "fileOpenIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text-o"))
	            },
	            "enableDataTypeIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            }
	        });

	        this.activeNode = null;
	        this.dataTypesMap = null;
	        this.getDataType = null;
	    }

	    var p = TreeConfig.prototype;

	    p.changeActiveNode = function (nodeConfig) {
	        if (this.activeNode) {
	            this.activeNode.active.value = false;
	        }
	        this.activeNode = nodeConfig;
	        this.activeNode.active.value = true;
	    };

	    p.getFileIcon = function (data) {
	        var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
	        if (this.dataTypesMap[datType]) return this.dataTypesMap[datType];
	        return this.fileOpenIcon.value;
	    };

	    p.getFolderIcon = function (data, isOpen) {
	        var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
	        if (this.dataTypesMap[datType]) return this.dataTypesMap[datType];
	        return isOpen ? this.folderOpenIcon.value : this.folderIcon.value;
	    };

	    p.getFileIconStyle = function () {
	        return {
	            fontStyle: "bold",
	            borderStyle: "solid",
	            borderColor: "#7fd6f9",
	            borderWidth: "1px",
	            borderRadius: "4px",
	            paddingLeft: "3px",
	            paddingRight: "3px",
	            fontSize: "11px"
	        };
	    };

	    p.getNodeIconStyle = function () {
	        return {
	            color: "#7fd6f9",
	            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
	        };
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

	    module.exports = TreeConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3RyZWUvVHJlZUNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsQ0FBQyxVQUFVLE1BQVYsRUFBa0I7O0FBRWYsYUFBUyxVQUFULEdBQXNCOztBQUVsQixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLDBCQUFjO0FBQ1YsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixjQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSw4QkFBa0I7QUFDZCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLG1CQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSx3QkFBWTtBQUNSLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsaUJBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLDRCQUFnQjtBQUNaLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsbUJBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLGtDQUFzQjtBQUNsQix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLEtBQWpDLENBQTFCLENBQVA7YUFESjtTQWJKLEVBRmtCOztBQW9CbEIsYUFBSyxVQUFMLEdBQWtCLElBQWxCLENBcEJrQjtBQXFCbEIsYUFBSyxZQUFMLEdBQW9CLElBQXBCLENBckJrQjtBQXNCbEIsYUFBSyxXQUFMLEdBQW1CLElBQW5CLENBdEJrQjtLQUF0Qjs7QUEwQkEsUUFBSSxJQUFJLFdBQVcsU0FBWCxDQTVCTzs7QUFnQ2YsTUFBRSxnQkFBRixHQUFxQixVQUFVLFVBQVYsRUFBc0I7QUFDdkMsWUFBSSxLQUFLLFVBQUwsRUFBaUI7QUFDakIsaUJBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixLQUF2QixHQUErQixLQUEvQixDQURpQjtTQUFyQjtBQUdBLGFBQUssVUFBTCxHQUFrQixVQUFsQixDQUp1QztBQUt2QyxhQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsS0FBdkIsR0FBK0IsSUFBL0IsQ0FMdUM7S0FBdEIsQ0FoQ047O0FBd0NmLE1BQUUsV0FBRixHQUFnQixVQUFVLElBQVYsRUFBZ0I7QUFDNUIsWUFBSSxVQUFVLEtBQUssV0FBTCxHQUFtQixLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBbkIsR0FBNEMsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBRDlCO0FBRTVCLFlBQUksS0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQUosRUFDSSxPQUFPLEtBQUssWUFBTCxDQUFrQixPQUFsQixDQUFQLENBREo7QUFFQSxlQUFPLEtBQUssWUFBTCxDQUFrQixLQUFsQixDQUpxQjtLQUFoQixDQXhDRDs7QUFnRGYsTUFBRSxhQUFGLEdBQWtCLFVBQVUsSUFBVixFQUFnQixNQUFoQixFQUF3QjtBQUN0QyxZQUFJLFVBQVUsS0FBSyxXQUFMLEdBQW1CLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFuQixHQUE0QyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FEcEI7QUFFdEMsWUFBSSxLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBSixFQUNJLE9BQU8sS0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQVAsQ0FESjtBQUVBLGVBQU8sU0FBUyxLQUFLLGNBQUwsQ0FBb0IsS0FBcEIsR0FBNEIsS0FBSyxVQUFMLENBQWdCLEtBQWhCLENBSk47S0FBeEIsQ0FoREg7O0FBd0RmLE1BQUUsZ0JBQUYsR0FBcUIsWUFBWTtBQUM3QixlQUFPO0FBQ0gsdUJBQVcsTUFBWDtBQUNBLHlCQUFhLE9BQWI7QUFDQSx5QkFBYSxTQUFiO0FBQ0EseUJBQWEsS0FBYjtBQUNBLDBCQUFjLEtBQWQ7QUFDQSx5QkFBYSxLQUFiO0FBQ0EsMEJBQWMsS0FBZDtBQUNBLHNCQUFVLE1BQVY7U0FSSixDQUQ2QjtLQUFaLENBeEROOztBQXFFZixNQUFFLGdCQUFGLEdBQXFCLFlBQVk7QUFDN0IsZUFBTztBQUNILG1CQUFPLFNBQVA7QUFDQSx3QkFBWSxzREFBWjtTQUZKLENBRDZCO0tBQVo7OztBQXJFTixTQStFZixDQUFNLGFBQU4sQ0FBb0IsdUJBQXBCLEVBQTZDLFVBQTdDLEVBL0VlOztBQWlGZixXQUFPLE9BQVAsR0FBaUIsVUFBakIsQ0FqRmU7Q0FBbEIsRUFtRkMsTUFuRkQsQ0FBRCIsImZpbGUiOiJUcmVlQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFRyZWVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJmb2xkZXJJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZm9sZGVyXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZm9sZGVyT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1mb2xkZXItb3BlblwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZmlsZU9wZW5JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0LW9cIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVEYXRhVHlwZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhVHlwZXNNYXAgPSBudWxsO1xuICAgICAgICB0aGlzLmdldERhdGFUeXBlID0gbnVsbDtcbiAgICB9XG5cblxuICAgIHZhciBwID0gVHJlZUNvbmZpZy5wcm90b3R5cGU7XG5cblxuXG4gICAgcC5jaGFuZ2VBY3RpdmVOb2RlID0gZnVuY3Rpb24gKG5vZGVDb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG5vZGVDb25maWc7XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZS5hY3RpdmUudmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIHAuZ2V0RmlsZUljb24gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgZGF0VHlwZSA9IHRoaXMuZ2V0RGF0YVR5cGUgPyB0aGlzLmdldERhdGFUeXBlKGRhdGEpIDogZGF0YS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBpZiAodGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV0pXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVPcGVuSWNvbi52YWx1ZTtcblxuICAgIH1cblxuICAgIHAuZ2V0Rm9sZGVySWNvbiA9IGZ1bmN0aW9uIChkYXRhLCBpc09wZW4pIHtcbiAgICAgICAgdmFyIGRhdFR5cGUgPSB0aGlzLmdldERhdGFUeXBlID8gdGhpcy5nZXREYXRhVHlwZShkYXRhKSA6IGRhdGEuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdO1xuICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy5mb2xkZXJPcGVuSWNvbi52YWx1ZSA6IHRoaXMuZm9sZGVySWNvbi52YWx1ZTtcblxuICAgIH1cblxuICAgIHAuZ2V0RmlsZUljb25TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzdmZDZmOVwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIzcHhcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjExcHhcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcC5nZXROb2RlSWNvblN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3I6IFwiIzdmZDZmOVwiLFxuICAgICAgICAgICAgdGV4dFNoYWRvdzogXCItMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrXCJcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LlRyZWVDb25maWcnLCBUcmVlQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gVHJlZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(5);

	var _Style2 = _interopRequireDefault(_Style);

	var _ModalConfig = __webpack_require__(12);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _ModalPanel = __webpack_require__(15);

	var _ModalPanel2 = _interopRequireDefault(_ModalPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_React$Component) {
	    _inherits(Modal, _React$Component);

	    function Modal(props) {
	        _classCallCheck(this, Modal);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _ModalConfig2.default();
	        if (_this.props.title) _this.settings.panelConfig.title.value = _this.props.title;

	        _this.openModal = _this.openModal.bind(_this);

	        return _this;
	    }

	    _createClass(Modal, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.settings.open.addImmediateCallback(this, this.forceUpdate);
	            this.settings.buttonIcon.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.open.removeCallback(this, this.forceUpdate);
	            this.settings.buttonIcon.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "openModal",
	        value: function openModal() {
	            this.settings.open.value = true;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var isOpen = this.settings.open.value;
	            var overlay = _Style2.default.overlayContainer(isOpen);
	            var modal = _Style2.default.modal(isOpen);
	            var modalButtonUI = "";
	            var modalPanelUI = "";
	            if (isOpen) {
	                modalPanelUI = _react2.default.createElement(
	                    _ModalPanel2.default,
	                    { sessionOpen: this.settings.open, settings: this.settings.panelConfig },
	                    this.props.children
	                );
	            }

	            if (!this.props.keyPress) {
	                if (this.settings.buttonIcon.value) {
	                    modalButtonUI = _react2.default.createElement(
	                        "span",
	                        { style: { cursor: "pointer" }, onClick: this.openModal },
	                        _react2.default.createElement("i", { className: this.settings.buttonIcon.value })
	                    );
	                } else {
	                    modalButtonUI = _react2.default.createElement(
	                        "span",
	                        { type: "button", className: "btn btn-primary", onClick: this.openModal },
	                        "Open"
	                    );
	                }
	            }
	            return _react2.default.createElement(
	                "span",
	                null,
	                modalButtonUI,
	                _react2.default.createElement("div", { style: overlay }),
	                _react2.default.createElement(
	                    "div",
	                    { style: modal },
	                    modalPanelUI
	                )
	            );
	        }
	    }]);

	    return Modal;
	}(_react2.default.Component);

	exports.default = Modal;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21vZGFsL01vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT007OztBQUVGLGFBRkUsS0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLE9BRWlCOzsyRUFGakIsa0JBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLDJCQUExQyxDQUZEO0FBR2YsWUFBRyxNQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLE1BQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsS0FBMUIsQ0FBZ0MsS0FBaEMsR0FBeUMsTUFBSyxLQUFMLENBQVcsS0FBWCxDQUE5RDs7QUFHQSxjQUFLLFNBQUwsR0FBaUIsTUFBSyxTQUFMLENBQWUsSUFBZixPQUFqQixDQU5lOzs7S0FBbkI7O2lCQUZFOzs0Q0FZaUI7QUFDZixpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixvQkFBbkIsQ0FBd0MsSUFBeEMsRUFBOEMsS0FBSyxXQUFMLENBQTlDLENBRGU7QUFFZixpQkFBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixvQkFBekIsQ0FBOEMsSUFBOUMsRUFBb0QsS0FBSyxXQUFMLENBQXBELENBRmU7Ozs7K0NBT0s7QUFDcEIsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsY0FBbkIsQ0FBa0MsSUFBbEMsRUFBd0MsS0FBSyxXQUFMLENBQXhDLENBRG9CO0FBRXBCLGlCQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLGNBQXpCLENBQXdDLElBQXhDLEVBQThDLEtBQUssV0FBTCxDQUE5QyxDQUZvQjs7OztvQ0FNYjtBQUNQLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQW5CLEdBQTJCLElBQTNCLENBRE87Ozs7aUNBS0Y7QUFDVCxnQkFBSSxTQUFTLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsQ0FESjtBQUVULGdCQUFJLFVBQVUsZ0JBQU0sZ0JBQU4sQ0FBdUIsTUFBdkIsQ0FBVixDQUZLO0FBR1QsZ0JBQUksUUFBUSxnQkFBTSxLQUFOLENBQVksTUFBWixDQUFSLENBSEs7QUFJVCxnQkFBSSxnQkFBZ0IsRUFBaEIsQ0FKSztBQUtULGdCQUFJLGVBQWUsRUFBZixDQUxLO0FBTVQsZ0JBQUcsTUFBSCxFQUFVO0FBQ04sK0JBQWU7O3NCQUFhLGFBQWEsS0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixVQUFVLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBeEQ7b0JBQ00sS0FBSyxLQUFMLENBQVcsUUFBWDtpQkFEckIsQ0FETTthQUFWOztBQU1BLGdCQUFJLENBQUMsS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFvQjtBQUNyQixvQkFBRyxLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLEtBQXpCLEVBQStCO0FBQzlCLG9DQUFnQjs7MEJBQU0sT0FBTyxFQUFDLFFBQU8sU0FBUCxFQUFSLEVBQTJCLFNBQVMsS0FBSyxTQUFMLEVBQTFDO3dCQUEwRCxxQ0FBRyxXQUFXLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsS0FBekIsRUFBZCxDQUExRDtxQkFBaEIsQ0FEOEI7aUJBQWxDLE1BR0k7QUFDQSxvQ0FBZ0I7OzBCQUFNLE1BQUssUUFBTCxFQUFjLFdBQVUsaUJBQVYsRUFBNEIsU0FBUyxLQUFLLFNBQUwsRUFBekQ7O3FCQUFoQixDQURBO2lCQUhKO2FBREo7QUFTQSxtQkFBUTs7O2dCQUNTLGFBRFQ7Z0JBR1EsdUNBQUssT0FBTyxPQUFQLEVBQUwsQ0FIUjtnQkFJUTs7c0JBQUssT0FBTyxLQUFQLEVBQUw7b0JBQ0ssWUFETDtpQkFKUjthQUFSLENBckJTOzs7O1dBOUJQO0VBQWMsZ0JBQU0sU0FBTjs7a0JBK0RMIiwiZmlsZSI6Ik1vZGFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE1vZGFsQ29uZmlnIGZyb20gXCIuL01vZGFsQ29uZmlnXCI7XG5pbXBvcnQgTW9kYWxQYW5lbCBmcm9tIFwiLi9Nb2RhbFBhbmVsXCI7XG5cblxuXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgTW9kYWxDb25maWcoKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50aXRsZSkgdGhpcy5zZXR0aW5ncy5wYW5lbENvbmZpZy50aXRsZS52YWx1ZSA9ICB0aGlzLnByb3BzLnRpdGxlO1xuXG5cbiAgICAgICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKVxuICAgIH1cblxuXG4gICAgb3Blbk1vZGFsKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgdmFyIGlzT3BlbiA9IHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICB2YXIgb3ZlcmxheSA9IFN0eWxlLm92ZXJsYXlDb250YWluZXIoaXNPcGVuKTtcbiAgICB2YXIgbW9kYWwgPSBTdHlsZS5tb2RhbChpc09wZW4pO1xuICAgIHZhciBtb2RhbEJ1dHRvblVJID0gXCJcIjtcbiAgICB2YXIgbW9kYWxQYW5lbFVJID0gXCJcIjtcbiAgICBpZihpc09wZW4pe1xuICAgICAgICBtb2RhbFBhbmVsVUkgPSA8TW9kYWxQYW5lbCAgc2Vzc2lvbk9wZW49e3RoaXMuc2V0dGluZ3Mub3Blbn0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MucGFuZWxDb25maWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbFBhbmVsPlxuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5rZXlQcmVzcyl7XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi52YWx1ZSl7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvblVJID0gPHNwYW4gc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+PGkgY2xhc3NOYW1lPXt0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24udmFsdWV9PjwvaT48L3NwYW4+O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvblVJID0gPHNwYW4gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5PcGVuPC9zcGFuPjtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiAoPHNwYW4gPlxuICAgICAgICAgICAgICAgICAgICB7bW9kYWxCdXR0b25VSX1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtvdmVybGF5fS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RhbFBhbmVsVUl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXX0=

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _ModalPanelConfig = __webpack_require__(13);

	var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (module) {

	    function ModalConfig() {

	        Object.defineProperties(this, {
	            "panelConfig": {
	                value: Weave.linkableChild(this, new _ModalPanelConfig2.default())
	            },
	            "open": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "buttonIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            }

	        });
	    }

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.ModalConfig', ModalConfig);

	    module.exports = ModalConfig;
	})(module); /*import Weave from 'Weave';
	            import weavejs from 'weavejs';*/
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21vZGFsL01vZGFsQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsQ0FBQyxVQUFVLE1BQVYsRUFBa0I7O0FBRWYsYUFBUyxXQUFULEdBQXVCOztBQUVuQixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLDJCQUFlO0FBQ1gsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLGdDQUExQixDQUFQO2FBREo7QUFHQSxvQkFBUTtBQUNKLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsS0FBakMsQ0FBMUIsQ0FBUDthQURKO0FBR0EsMEJBQWM7QUFDVix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEVBQWhDLENBQTFCLENBQVA7YUFESjs7U0FQSixFQUZtQjtLQUF2Qjs7O0FBRmUsU0FvQmYsQ0FBTSxhQUFOLENBQW9CLHdCQUFwQixFQUE4QyxXQUE5QyxFQXBCZTs7QUFzQmYsV0FBTyxPQUFQLEdBQWlCLFdBQWpCLENBdEJlO0NBQWxCLEVBd0JDLE1BeEJELENBQUQiLCJmaWxlIjoiTW9kYWxDb25maWcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVSZWFjdCIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFdlYXZlIGZyb20gJ1dlYXZlJztcbmltcG9ydCB3ZWF2ZWpzIGZyb20gJ3dlYXZlanMnOyovXG5cbmltcG9ydCBNb2RhbFBhbmVsQ29uZmlnIGZyb20gXCIuL01vZGFsUGFuZWxDb25maWdcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE1vZGFsQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwicGFuZWxDb25maWdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBNb2RhbFBhbmVsQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJidXR0b25JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Nb2RhbENvbmZpZycsIE1vZGFsQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTW9kYWxDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _BorderConfig = __webpack_require__(14);

	var _BorderConfig2 = _interopRequireDefault(_BorderConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (module) {

	    function ModalPanelConfig() {

	        Object.defineProperties(this, {
	            "border": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableDynamicObject(_BorderConfig2.default))
	            },
	            "title": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            }

	        });

	        Object.defineProperties(this, {
	            "width": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("60%"))
	            },
	            "height": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("80%"))
	            },
	            "marginLeft": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("-20%"))
	            },
	            "marginTop": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("-20%"))
	            },
	            "left": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
	            },
	            "top": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
	            }

	        });
	    }

	    var p = ModalPanelConfig.prototype;

	    p.getLayoutState = function () {
	        return {
	            "top": this.top.value,
	            "left": this.left.value,
	            "marginTop": this.marginTop.value,
	            "marginLeft": this.marginLeft.value,
	            "width": this.width.value,
	            "height": this.height.value
	        };
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.ModalPanelConfig', ModalPanelConfig);

	    module.exports = ModalPanelConfig;
	})(module); /*import Weave from 'Weave';
	            import weavejs from 'weavejs';*/
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21vZGFsL01vZGFsUGFuZWxDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFFZixhQUFTLGdCQUFULEdBQTRCOztBQUV4QixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLHNCQUFVO0FBQ04sdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEscUJBQWIsdUJBQUosQ0FBMUIsQ0FBUDthQURKO0FBR0EscUJBQVM7QUFDTCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEVBQWhDLENBQTFCLENBQVA7YUFESjs7U0FKSixFQUZ3Qjs7QUFZeEIsZUFBTyxnQkFBUCxDQUF3QixJQUF4QixFQUE4QjtBQUMxQixxQkFBUztBQUNMLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsS0FBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0Esc0JBQVU7QUFDTix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEtBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLDBCQUFjO0FBQ1YsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixNQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSx5QkFBYTtBQUNULHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsTUFBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0Esb0JBQVE7QUFDSix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEtBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLG1CQUFPO0FBQ0gsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixLQUFoQyxDQUExQixDQUFQO2FBREo7O1NBaEJKLEVBWndCO0tBQTVCOztBQXFDQSxRQUFJLElBQUksaUJBQWlCLFNBQWpCLENBdkNPOztBQXlDZixNQUFFLGNBQUYsR0FBbUIsWUFBWTtBQUMzQixlQUFPO0FBQ0gsbUJBQU8sS0FBSyxHQUFMLENBQVMsS0FBVDtBQUNQLG9CQUFRLEtBQUssSUFBTCxDQUFVLEtBQVY7QUFDUix5QkFBYSxLQUFLLFNBQUwsQ0FBZSxLQUFmO0FBQ2IsMEJBQWMsS0FBSyxVQUFMLENBQWdCLEtBQWhCO0FBQ2QscUJBQVMsS0FBSyxLQUFMLENBQVcsS0FBWDtBQUNULHNCQUFVLEtBQUssTUFBTCxDQUFZLEtBQVo7U0FOZCxDQUQyQjtLQUFaOzs7QUF6Q0osU0FxRGYsQ0FBTSxhQUFOLENBQW9CLDZCQUFwQixFQUFtRCxnQkFBbkQsRUFyRGU7O0FBdURmLFdBQU8sT0FBUCxHQUFpQixnQkFBakIsQ0F2RGU7Q0FBbEIsRUF5REMsTUF6REQsQ0FBRCIsImZpbGUiOiJNb2RhbFBhbmVsQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuaW1wb3J0IEJvcmRlckNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlncy9Cb3JkZXJDb25maWdcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE1vZGFsUGFuZWxDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJib3JkZXJcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVEeW5hbWljT2JqZWN0KEJvcmRlckNvbmZpZykpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcIndpZHRoXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiNjAlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiODAlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWFyZ2luTGVmdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIi0yMCVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCItMjAlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVmdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjQwJVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRvcFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjQwJVwiKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgdmFyIHAgPSBNb2RhbFBhbmVsQ29uZmlnLnByb3RvdHlwZTtcblxuICAgIHAuZ2V0TGF5b3V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcInRvcFwiOiB0aGlzLnRvcC52YWx1ZSxcbiAgICAgICAgICAgIFwibGVmdFwiOiB0aGlzLmxlZnQudmFsdWUsXG4gICAgICAgICAgICBcIm1hcmdpblRvcFwiOiB0aGlzLm1hcmdpblRvcC52YWx1ZSxcbiAgICAgICAgICAgIFwibWFyZ2luTGVmdFwiOiB0aGlzLm1hcmdpbkxlZnQudmFsdWUsXG4gICAgICAgICAgICBcIndpZHRoXCI6IHRoaXMud2lkdGgudmFsdWUsXG4gICAgICAgICAgICBcImhlaWdodFwiOiB0aGlzLmhlaWdodC52YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Nb2RhbFBhbmVsQ29uZmlnJywgTW9kYWxQYW5lbENvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE1vZGFsUGFuZWxDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _App = __webpack_require__(3);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (module) {

	    function BorderConfig() {

	        Object.defineProperties(this, {
	            "borderColor": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString('#bebebe'))
	            },
	            "borderWidth": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString('1px'))
	            },
	            "borderRadius": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString('5px'))
	            },
	            "borderStyle": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString('solid'))
	            }
	        });
	    }

	    var p = BorderConfig.prototype;

	    p.getBorderStateFor = function (properties) {
	        if (!properties) properties = ["borderColor", "borderWidth", "borderRadius", "borderStyle"];
	        return _App2.default.getStateFor(this, properties);
	    };

	    Weave.registerClass('weavereact.BorderConfig', BorderConfig);

	    module.exports = BorderConfig;
	})(module); /*import Weave from 'Weave';
	            import weavejs from 'weavejs';*/
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25maWdzL0JvcmRlckNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUVmLGFBQVMsWUFBVCxHQUF3Qjs7QUFFcEIsZUFBTyxnQkFBUCxDQUF3QixJQUF4QixFQUE4QjtBQUMxQiwyQkFBZTtBQUNYLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsU0FBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0EsMkJBQWU7QUFDWCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEtBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLDRCQUFnQjtBQUNaLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsS0FBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0EsMkJBQWU7QUFDWCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLE9BQWhDLENBQTFCLENBQVA7YUFESjtTQVZKLEVBRm9CO0tBQXhCOztBQW1CQSxRQUFJLElBQUksYUFBYSxTQUFiLENBckJPOztBQXdCZixNQUFFLGlCQUFGLEdBQXNCLFVBQVUsVUFBVixFQUFzQjtBQUN4QyxZQUFJLENBQUMsVUFBRCxFQUFhLGFBQWEsQ0FBQyxhQUFELEVBQWdCLGFBQWhCLEVBQStCLGNBQS9CLEVBQStDLGFBQS9DLENBQWIsQ0FBakI7QUFDQSxlQUFPLGNBQUksV0FBSixDQUFnQixJQUFoQixFQUFzQixVQUF0QixDQUFQLENBRndDO0tBQXRCLENBeEJQOztBQTZCZixVQUFNLGFBQU4sQ0FBb0IseUJBQXBCLEVBQStDLFlBQS9DLEVBN0JlOztBQStCZixXQUFPLE9BQVAsR0FBaUIsWUFBakIsQ0EvQmU7Q0FBbEIsRUFrQ0MsTUFsQ0QsQ0FBRCIsImZpbGUiOiJCb3JkZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVSZWFjdCIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFdlYXZlIGZyb20gJ1dlYXZlJztcbmltcG9ydCB3ZWF2ZWpzIGZyb20gJ3dlYXZlanMnOyovXG5pbXBvcnQgQXBwIGZyb20gXCIuLi91dGlscy9BcHBcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIEJvcmRlckNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImJvcmRlckNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCcjYmViZWJlJykpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJib3JkZXJXaWR0aFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZygnMXB4JykpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJib3JkZXJSYWRpdXNcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoJzVweCcpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYm9yZGVyU3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoJ3NvbGlkJykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdmFyIHAgPSBCb3JkZXJDb25maWcucHJvdG90eXBlO1xuXG5cbiAgICBwLmdldEJvcmRlclN0YXRlRm9yID0gZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKCFwcm9wZXJ0aWVzKSBwcm9wZXJ0aWVzID0gW1wiYm9yZGVyQ29sb3JcIiwgXCJib3JkZXJXaWR0aFwiLCBcImJvcmRlclJhZGl1c1wiLCBcImJvcmRlclN0eWxlXCJdO1xuICAgICAgICByZXR1cm4gQXBwLmdldFN0YXRlRm9yKHRoaXMsIHByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuQm9yZGVyQ29uZmlnJywgQm9yZGVyQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gQm9yZGVyQ29uZmlnO1xuXG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ModalPanelConfig = __webpack_require__(13);

	var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ModalPanel = function (_React$Component) {
	    _inherits(ModalPanel, _React$Component);

	    function ModalPanel(props) {
	        _classCallCheck(this, ModalPanel);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalPanel).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _ModalPanelConfig2.default();
	        window.modalLayout = _this.settings; // for testing
	        _this.sessionOpen = _this.props.sessionOpen;

	        _this.state = _this.settings.getLayoutState();

	        _this.closeModal = _this.closeModal.bind(_this);
	        _this.updateState = _this.updateState.bind(_this);
	        return _this;
	    }

	    _createClass(ModalPanel, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var cc = Weave.getCallbacks(this.settings);
	            cc.addImmediateCallback(this, this.updateState);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var cc = Weave.getCallbacks(this.settings);
	            cc.removeCallback(this, this.updateState);
	        }
	    }, {
	        key: "updateState",
	        value: function updateState() {
	            this.setState(this.settings.getLayoutState());
	        }
	    }, {
	        key: "closeModal",
	        value: function closeModal() {
	            this.sessionOpen.value = false;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            //we could have used this.state.layout, but style of div will get the same reference, which is deprecated in react
	            var layoutStyle = this.settings.getLayoutState(); // this will make sure we get new object everytime

	            var bodyStyle = {
	                height: this.settings.height.value,
	                width: "100%",
	                overflowY: 'scroll',
	                overflowX: 'hidden'
	            };

	            layoutStyle["position"] = 'absolute';
	            this.sessionOpen.value ? layoutStyle["display"] = 'block' : layoutStyle["display"] = 'none';

	            return _react2.default.createElement(
	                "div",
	                { style: layoutStyle },
	                _react2.default.createElement(
	                    "div",
	                    { className: "modal-content" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "modal-header" },
	                        _react2.default.createElement(
	                            "button",
	                            { type: "button", className: "close", onClick: this.closeModal },
	                            "×"
	                        ),
	                        _react2.default.createElement(
	                            "h4",
	                            { className: "modal-title" },
	                            this.settings.title.value
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "modal-body", style: bodyStyle },
	                        this.props.children
	                    )
	                )
	            );
	        }
	    }]);

	    return ModalPanel;
	}(_react2.default.Component);

	exports.default = ModalPanel;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL21vZGFsL01vZGFsUGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUVGLGFBRkUsVUFFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLFlBRWlCOzsyRUFGakIsdUJBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLGdDQUExQyxDQUZEO0FBR2YsZUFBTyxXQUFQLEdBQXFCLE1BQUssUUFBTDtBQUhOLGFBSWYsQ0FBSyxXQUFMLEdBQW1CLE1BQUssS0FBTCxDQUFXLFdBQVgsQ0FKSjs7QUFNZixjQUFLLEtBQUwsR0FBYSxNQUFLLFFBQUwsQ0FBYyxjQUFkLEVBQWIsQ0FOZTs7QUFRZixjQUFLLFVBQUwsR0FBbUIsTUFBSyxVQUFMLENBQWdCLElBQWhCLE9BQW5CLENBUmU7QUFTZixjQUFLLFdBQUwsR0FBb0IsTUFBSyxXQUFMLENBQWlCLElBQWpCLE9BQXBCLENBVGU7O0tBQW5COztpQkFGRTs7NENBY2lCO0FBQ2YsZ0JBQUksS0FBSyxNQUFNLFlBQU4sQ0FBbUIsS0FBSyxRQUFMLENBQXhCLENBRFc7QUFFZixlQUFHLG9CQUFILENBQXdCLElBQXhCLEVBQThCLEtBQUssV0FBTCxDQUE5QixDQUZlOzs7OytDQUtLO0FBQ3BCLGdCQUFJLEtBQUssTUFBTSxZQUFOLENBQW1CLEtBQUssUUFBTCxDQUF4QixDQURnQjtBQUVwQixlQUFHLGNBQUgsQ0FBa0IsSUFBbEIsRUFBd0IsS0FBSyxXQUFMLENBQXhCLENBRm9COzs7O3NDQUtYO0FBQ1QsaUJBQUssUUFBTCxDQUFjLEtBQUssUUFBTCxDQUFjLGNBQWQsRUFBZCxFQURTOzs7O3FDQUlEO0FBQ1IsaUJBQUssV0FBTCxDQUFpQixLQUFqQixHQUF5QixLQUF6QixDQURROzs7O2lDQUlIOztBQUVULGdCQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsY0FBZCxFQUFkOztBQUZLLGdCQUlMLFlBQVk7QUFDWix3QkFBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCO0FBQ1AsdUJBQU0sTUFBTjtBQUNBLDJCQUFXLFFBQVg7QUFDQSwyQkFBVyxRQUFYO2FBSkEsQ0FKSzs7QUFXVCx3QkFBWSxVQUFaLElBQTBCLFVBQTFCLENBWFM7QUFZVCxnQkFBQyxDQUFLLFdBQUwsQ0FBaUIsS0FBakIsR0FBeUIsWUFBWSxTQUFaLElBQXlCLE9BQXpCLEdBQW1DLFlBQVksU0FBWixJQUF5QixNQUF6QixDQVpwRDs7QUFjVCxtQkFBUTs7a0JBQUssT0FBTyxXQUFQLEVBQUw7Z0JBQ0k7O3NCQUFLLFdBQVUsZUFBVixFQUFMO29CQUNJOzswQkFBSyxXQUFVLGNBQVYsRUFBTDt3QkFDSTs7OEJBQVEsTUFBSyxRQUFMLEVBQWMsV0FBVSxPQUFWLEVBQWtCLFNBQVMsS0FBSyxVQUFMLEVBQWpEOzt5QkFESjt3QkFFSTs7OEJBQUksV0FBVSxhQUFWLEVBQUo7NEJBQTZCLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsS0FBcEI7eUJBRmpDO3FCQURKO29CQUtJOzswQkFBSyxXQUFVLFlBQVYsRUFBdUIsT0FBTyxTQUFQLEVBQTVCO3dCQUNLLEtBQUssS0FBTCxDQUFXLFFBQVg7cUJBTlQ7aUJBREo7YUFBUixDQWRTOzs7O1dBaENQO0VBQW1CLGdCQUFNLFNBQU47O2tCQTZEViIsImZpbGUiOiJNb2RhbFBhbmVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsUGFuZWxDb25maWcgZnJvbSBcIi4vTW9kYWxQYW5lbENvbmZpZ1wiO1xuXG5cbmNsYXNzIE1vZGFsUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE1vZGFsUGFuZWxDb25maWcoKTtcbiAgICAgICAgd2luZG93Lm1vZGFsTGF5b3V0ID0gdGhpcy5zZXR0aW5nczsvLyBmb3IgdGVzdGluZ1xuICAgICAgICB0aGlzLnNlc3Npb25PcGVuID0gdGhpcy5wcm9wcy5zZXNzaW9uT3BlbjtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5zZXR0aW5ncy5nZXRMYXlvdXRTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbCA9ICB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSA9ICB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdmFyIGNjID0gV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICBjYy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0YXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHZhciBjYyA9IFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgY2MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy51cGRhdGVTdGF0ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnNldHRpbmdzLmdldExheW91dFN0YXRlKCkpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKXtcbiAgICAgICAgdGhpcy5zZXNzaW9uT3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAvL3dlIGNvdWxkIGhhdmUgdXNlZCB0aGlzLnN0YXRlLmxheW91dCwgYnV0IHN0eWxlIG9mIGRpdiB3aWxsIGdldCB0aGUgc2FtZSByZWZlcmVuY2UsIHdoaWNoIGlzIGRlcHJlY2F0ZWQgaW4gcmVhY3RcbiAgICB2YXIgbGF5b3V0U3R5bGUgPSB0aGlzLnNldHRpbmdzLmdldExheW91dFN0YXRlKCk7Ly8gdGhpcyB3aWxsIG1ha2Ugc3VyZSB3ZSBnZXQgbmV3IG9iamVjdCBldmVyeXRpbWVcblxuICAgIHZhciBib2R5U3R5bGUgPSB7XG4gICAgICAgIGhlaWdodDp0aGlzLnNldHRpbmdzLmhlaWdodC52YWx1ZSxcbiAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbidcbiAgICB9XG5cbiAgICBsYXlvdXRTdHlsZVtcInBvc2l0aW9uXCJdID0gJ2Fic29sdXRlJztcbiAgICAodGhpcy5zZXNzaW9uT3Blbi52YWx1ZSk/KGxheW91dFN0eWxlW1wiZGlzcGxheVwiXSA9ICdibG9jaycpOihsYXlvdXRTdHlsZVtcImRpc3BsYXlcIl0gPSAnbm9uZScpXG5cbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfT4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e2JvZHlTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsUGFuZWw7XG4iXX0=

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Style = __webpack_require__(5);

	var _Style2 = _interopRequireDefault(_Style);

	var _SplitPaneConfig = __webpack_require__(18);

	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

	var _Pane = __webpack_require__(20);

	var _Pane2 = _interopRequireDefault(_Pane);

	var _Resizer = __webpack_require__(21);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NwbGl0UGFuZS9TcGxpdFBhbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU007OztBQUVGLGFBRkUsU0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLFdBRWlCOzsyRUFGakIsc0JBR1EsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLCtCQUE1QyxDQUZEO0FBR2YsY0FBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixJQUFqQixPQUFuQixDQUhlO0FBSWYsY0FBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixJQUFqQixPQUFuQixDQUplO0FBS2YsY0FBSyxTQUFMLEdBQWlCLE1BQUssU0FBTCxDQUFlLElBQWYsT0FBakIsQ0FMZTs7S0FBbkI7O2lCQUZFOzs0Q0FZa0I7QUFDaEIsaUJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsa0JBQXJCLENBQXdDLElBQXhDLEVBQThDLEtBQUssV0FBTCxDQUE5QyxDQURnQjtBQUVoQixpQkFBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixrQkFBdEIsQ0FBeUMsSUFBekMsRUFBK0MsS0FBSyxXQUFMLENBQS9DLENBRmdCO0FBR2hCLGlCQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLGtCQUF2QixDQUEwQyxJQUExQyxFQUFnRCxLQUFLLFdBQUwsQ0FBaEQsQ0FIZ0I7QUFJaEIsaUJBQUssUUFBTCxDQUFjLFlBQWQsQ0FBMkIsb0JBQTNCLENBQWdELElBQWhELEVBQXNELEtBQUssT0FBTCxDQUF0RCxDQUpnQjtBQUtoQixxQkFBUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLLFNBQUwsQ0FBckMsQ0FMZ0I7QUFNaEIscUJBQVMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBSyxXQUFMLENBQXZDLENB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QSw0QkFBUSxDQUFSO0FBQ0EsMkJBQU8sTUFBUDtpQkFQSixFQVFHLElBUkgsRUFERzthQVJQO0FBbUJBLGdCQUFNLFdBQVcsS0FBSyxLQUFMLENBQVcsUUFBWCxDQWxDWjs7QUFvQ0wsZ0JBQU0sVUFBVSxDQUFDLFdBQUQsRUFBYyxLQUFkLENBQVYsQ0FwQ0Q7O0FBc0NMLG1CQUFTOztrQkFBTSxXQUNQLFFBQVEsSUFBUixDQUFhLEdBQWIsQ0FETztBQUdYLDJCQUNJLFFBREo7QUFHQSx5QkFBTSxXQUFOLEVBTks7Z0JBT0w7O3NCQUFPLEtBQU0sT0FBTjtBQUNQLDZCQUFNLE9BQU47QUFDQSwrQkFDSSxLQURKO0FBR0Esa0NBQ0ksS0FBSyxRQUFMLENBQWMsS0FBZCxFQU5KOztvQkFRSSxTQUFTLENBQVQsQ0FSSjs7aUJBUEs7O2dCQWdCTSxtREFBVSxLQUFNLFNBQU47QUFDckIseUJBQU0sU0FBTjtBQUNBLGlDQUNJLEtBQUssV0FBTDtBQUVKLDJCQUNJLEtBREo7aUJBTFcsQ0FoQk47O2dCQXdCRjs7c0JBQU8sS0FBTSxPQUFOO0FBQ1YsNkJBQU0sT0FBTjtBQUNBLCtCQUNJLEtBREo7QUFHQSxrQ0FDSSxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBTkQ7O29CQVFDLFNBQVMsQ0FBVCxDQVJEOztpQkF4QkU7O2FBQVQsQ0F0Q0s7Ozs7V0EzRlA7RUFBa0IsZ0JBQU0sU0FBTjs7QUF1S3hCLFVBQVUsWUFBVixHQUF5QjtBQUNyQixhQUFTLENBQVQ7QUFDQSxXQUFPLFVBQVA7Q0FGSjs7a0JBS2UiLCJmaWxlIjoiU3BsaXRQYW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBTcGxpdFBhbmVDb25maWcgZnJvbSBcIi4vU3BsaXRQYW5lQ29uZmlnXCI7XG5pbXBvcnQgUGFuZSBmcm9tICcuL1BhbmUnO1xuaW1wb3J0IFJlc2l6ZXIgZnJvbSAnLi9SZXNpemVyJztcblxuLy9jb2RlIGxvZ2ljIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RvbWtwL3JlYWN0LXNwbGl0LXBhbmVcblxuY2xhc3MgU3BsaXRQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzIDogbmV3IFNwbGl0UGFuZUNvbmZpZygpO1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmVzaXplZC5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb24uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVuRm9jdXNDb3VudC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVuRm9jdXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5yZWZzLnBhbmUxO1xuICAgICAgICBpZiAocmVmICYmIHRoaXMucHJvcHMuZGVmYXVsdFNpemUgJiYgIXRoaXMuc2V0dGluZ3MucmVzaXplZC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYW5lMS5zaXplLnZhbHVlID0gdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZTtcbiAgICAgICAgICAgIC8vcmVmLnNldFNlc3Npb25TdGF0ZSggdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmVzaXplZC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy51bkZvY3VzQ291bnQucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy51bkZvY3VzKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgfVxuXG5cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVwZGF0ZVVuRm9jdXMoKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wcm9wcy5zcGxpdCA9PT0gJ3ZlcnRpY2FsJyA/IGV2ZW50LmNsaWVudFggOiBldmVudC5jbGllbnRZO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudXBkYXRlVW5Gb2N1cygpO1xuICAgICAgICAgICAgY29uc3QgcmVmID0gdGhpcy5yZWZzLnBhbmUxO1xuICAgICAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShyZWYpO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5wcm9wcy5zcGxpdCA9PT0gJ3ZlcnRpY2FsJyA/IGV2ZW50LmNsaWVudFggOiBldmVudC5jbGllbnRZO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy5wcm9wcy5zcGxpdCA9PT0gJ3ZlcnRpY2FsJyA/IHdpZHRoIDogaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuc2V0dGluZ3MucG9zaXRpb24udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2l6ZSA9IHNpemUgLSAocG9zaXRpb24gLSBjdXJyZW50KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnZhbHVlID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLnZhbHVlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3U2l6ZSA+PSB0aGlzLnByb3BzLm1pblNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucGFuZTEuc2l6ZS52YWx1ZSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnRmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ0ZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5Gb2N1cygpIHsgLy8gbmVlZCB0byBiZSBjYWxsZWQgY2hhbmdlIG9mIHNlc3Npb24gdmFsdWUgc28gdGhhdCB3ZSBjYW4gc2VlIHRoZW0gaW4gc2Vzc2lvbiBMb2dcbiAgICAgICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgICAgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0ID0gdGhpcy5wcm9wcy5zcGxpdDtcblxuICAgICAgICBsZXQgc3R5bGVPYmogPSBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoe1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgTW96VXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICAgICAgV2Via2l0VXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICAgICAgbXNVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICB1c2VyU2VsZWN0OiAndGV4dCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNwbGl0ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhzdHlsZU9iaiwge1xuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMoc3R5bGVPYmosIHtcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gWydTcGxpdFBhbmUnLCBzcGxpdF07XG5cbiAgICAgICAgcmV0dXJuICggPCBkaXYgY2xhc3NOYW1lID0ge1xuICAgICAgICAgICAgICAgIGNsYXNzZXMuam9pbignICcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBzdHlsZU9ialxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmID0gXCJzcGxpdFBhbmVcIiA+XG4gICAgICAgICAgICA8IFBhbmUgcmVmID0gXCJwYW5lMVwiXG4gICAgICAgICAgICBrZXkgPSBcInBhbmUxXCJcbiAgICAgICAgICAgIHNwbGl0ID0ge1xuICAgICAgICAgICAgICAgIHNwbGl0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhbmUxXG4gICAgICAgICAgICB9ID4ge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzBdXG4gICAgICAgICAgICB9IDwgL1BhbmU+IDwgUmVzaXplciByZWYgPSBcInJlc2l6ZXJcIlxuICAgICAgICAgICAga2V5ID0gXCJyZXNpemVyXCJcbiAgICAgICAgICAgIG9uTW91c2VEb3duID0ge1xuICAgICAgICAgICAgICAgIHRoaXMub25Nb3VzZURvd25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwbGl0ID0ge1xuICAgICAgICAgICAgICAgIHNwbGl0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvPiA8IFBhbmUgcmVmID0gXCJwYW5lMlwiXG4gICAgICAgICAgICBrZXkgPSBcInBhbmUyXCJcbiAgICAgICAgICAgIHNwbGl0ID0ge1xuICAgICAgICAgICAgICAgIHNwbGl0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhbmUyXG4gICAgICAgICAgICB9ID4ge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzFdXG4gICAgICAgICAgICB9IDwgL1BhbmU+IDwgL2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwbGl0UGFuZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbWluU2l6ZTogMCxcbiAgICBzcGxpdDogXCJ2ZXJ0aWNhbFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdFBhbmU7XG4iXX0=

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _PaneConfig = __webpack_require__(19);

	var _PaneConfig2 = _interopRequireDefault(_PaneConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (module) {

	    function SplitPaneConfig() {

	        Object.defineProperties(this, {
	            "active": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "resized": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "position": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            },
	            "pane1": {
	                value: Weave.linkableChild(this, new _PaneConfig2.default())
	            },
	            "pane2": {
	                value: Weave.linkableChild(this, new _PaneConfig2.default())
	            },
	            "unFocusCount": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(0))
	            }

	        });
	    }

	    var p = SplitPaneConfig.prototype;

	    p.updateUnFocus = function () {
	        this.unFocusCount.value = this.unFocusCount.value + 1;
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.SplitPaneConfig', SplitPaneConfig);

	    module.exports = SplitPaneConfig;
	})(module); /*import Weave from 'Weave';
	            import weavejs from 'weavejs';*/
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NwbGl0UGFuZS9TcGxpdFBhbmVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFFZixhQUFTLGVBQVQsR0FBMkI7O0FBRXZCLGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDMUIsc0JBQVU7QUFDTix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLEtBQWpDLENBQTFCLENBQVA7YUFESjtBQUdBLHVCQUFXO0FBQ1AsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUExQixDQUFQO2FBREo7QUFHQSx3QkFBWTtBQUNSLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsRUFBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0EscUJBQVM7QUFDTCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMEJBQTFCLENBQVA7YUFESjtBQUdBLHFCQUFTO0FBQ0wsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDBCQUExQixDQUFQO2FBREo7QUFHQSw0QkFBZ0I7QUFDWix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLENBQWhDLENBQTFCLENBQVA7YUFESjs7U0FoQkosRUFGdUI7S0FBM0I7O0FBNEJBLFFBQUksSUFBSSxnQkFBZ0IsU0FBaEIsQ0E5Qk87O0FBZ0NmLE1BQUUsYUFBRixHQUFrQixZQUFZO0FBQzFCLGFBQUssWUFBTCxDQUFrQixLQUFsQixHQUEwQixLQUFLLFlBQUwsQ0FBa0IsS0FBbEIsR0FBMEIsQ0FBMUIsQ0FEQTtLQUFaOzs7QUFoQ0gsU0F3Q2YsQ0FBTSxhQUFOLENBQW9CLDRCQUFwQixFQUFrRCxlQUFsRCxFQXhDZTs7QUEwQ2YsV0FBTyxPQUFQLEdBQWlCLGVBQWpCLENBMUNlO0NBQWxCLEVBNENDLE1BNUNELENBQUQiLCJmaWxlIjoiU3BsaXRQYW5lQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuaW1wb3J0IFBhbmVDb25maWcgZnJvbSBcIi4vUGFuZUNvbmZpZ1wiO1xuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gU3BsaXRQYW5lQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXNpemVkXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBhbmUxXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgUGFuZUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicGFuZTJcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBQYW5lQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1bkZvY3VzQ291bnRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoMCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG4gICAgdmFyIHAgPSBTcGxpdFBhbmVDb25maWcucHJvdG90eXBlO1xuXG4gICAgcC51cGRhdGVVbkZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuRm9jdXNDb3VudC52YWx1ZSA9IHRoaXMudW5Gb2N1c0NvdW50LnZhbHVlICsgMTtcbiAgICB9XG5cblxuXG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LlNwbGl0UGFuZUNvbmZpZycsIFNwbGl0UGFuZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFNwbGl0UGFuZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	/*import Weave from 'Weave';
	import weavejs from 'weavejs';*/
	(function (module) {

	    function PaneConfig() {

	        Object.defineProperties(this, {

	            "size": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            }

	        });
	    }

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.PaneConfig', PaneConfig);

	    module.exports = PaneConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NwbGl0UGFuZS9QYW5lQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFFZixhQUFTLFVBQVQsR0FBc0I7O0FBRWxCLGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7O0FBRTFCLG9CQUFRO0FBQ0osdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixFQUFoQyxDQUExQixDQUFQO2FBREo7O1NBRkosRUFGa0I7S0FBdEI7OztBQUZlLFNBa0JmLENBQU0sYUFBTixDQUFvQix1QkFBcEIsRUFBNkMsVUFBN0MsRUFsQmU7O0FBb0JmLFdBQU8sT0FBUCxHQUFpQixVQUFqQixDQXBCZTtDQUFsQixFQXNCQyxNQXRCRCxDQUFEIiwiZmlsZSI6IlBhbmVDb25maWcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVSZWFjdCIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFdlYXZlIGZyb20gJ1dlYXZlJztcbmltcG9ydCB3ZWF2ZWpzIGZyb20gJ3dlYXZlanMnOyovXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gUGFuZUNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgIFwic2l6ZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuUGFuZUNvbmZpZycsIFBhbmVDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBQYW5lQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(5);

	var _Style2 = _interopRequireDefault(_Style);

	var _PaneConfig = __webpack_require__(19);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NwbGl0UGFuZS9QYW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1NOzs7QUFFRixhQUZFLElBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixNQUVpQjs7MkVBRmpCLGlCQUdRLFFBRFM7O0FBRWYsY0FBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQiwwQkFBMUMsQ0FGRDtBQUdmLGNBQUssZUFBTCxHQUF1QixNQUFLLGVBQUwsQ0FBcUIsSUFBckIsT0FBdkI7O0FBSGU7S0FBbkI7O2lCQUZFOzs0Q0FTaUI7QUFDZixpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixvQkFBbkIsQ0FBd0MsSUFBeEMsRUFBNkMsS0FBSyxXQUFMLENBQTdDLENBRGU7Ozs7K0NBS0s7QUFDcEIsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsY0FBbkIsQ0FBa0MsSUFBbEMsRUFBdUMsS0FBSyxXQUFMLENBQXZDLENBRG9COzs7O3dDQUlSLE1BQUs7QUFDakIsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsR0FBMkIsSUFBM0IsQ0FEaUI7Ozs7aUNBSVo7O0FBRUwsZ0JBQU0sUUFBUSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBRlQ7QUFHTCxnQkFBTSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FBVixDQUhEOztBQUtMLGdCQUFJLFdBQVcsZ0JBQU0sa0JBQU4sQ0FBeUI7QUFDcEMsc0JBQU0sQ0FBTjtBQUNBLDBCQUFVLFVBQVY7QUFDQSx5QkFBUyxNQUFUO0FBQ0EsMEJBQVUsTUFBVjthQUpXLENBQVgsQ0FMQzs7QUFjTCxnQkFBSSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQW5CLEVBQTBCO0FBQzFCLG9CQUFJLFVBQVUsVUFBVixFQUFzQjtBQUN0Qiw2QkFBUyxLQUFULEdBQWlCLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsQ0FESztpQkFBMUIsTUFFTztBQUNILDZCQUFTLE1BQVQsR0FBa0IsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixDQURmO0FBRUgsNkJBQVMsT0FBVCxHQUFtQixNQUFuQixDQUZHO2lCQUZQO0FBTUEseUJBQVMsSUFBVCxHQUFnQixNQUFoQixDQVAwQjthQUE5Qjs7QUFVQSxtQkFBUTs7a0JBQUssV0FBVyxRQUFRLElBQVIsQ0FBYSxHQUFiLENBQVgsRUFBOEIsT0FBTyxRQUFQLEVBQW5DO2dCQUNLLEtBQUssS0FBTCxDQUFXLFFBQVg7YUFEYixDQXhCSzs7OztXQXRCUDtFQUFhLGdCQUFNLFNBQU47O2tCQXFESiIsImZpbGUiOiJQYW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IFBhbmVDb25maWcgZnJvbSBcIi4vUGFuZUNvbmZpZ1wiO1xuXG4vL2NvZGUgbG9naWMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdG9ta3AvcmVhY3Qtc3BsaXQtcGFuZVxuXG5jbGFzcyBQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBQYW5lQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuc2V0U2Vzc2lvblN0YXRlID0gdGhpcy5zZXRTZXNzaW9uU3RhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgLy90aGlzLnN0YXRlID17fTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNpemUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zaXplLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgc2V0U2Vzc2lvblN0YXRlKHNpemUpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNpemUudmFsdWUgPSBzaXplO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbJ1BhbmUnLCBzcGxpdF07XG5cbiAgICAgICAgbGV0IHN0eWxlT2JqID0gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHtcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNpemUudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChzcGxpdCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqLndpZHRoID0gdGhpcy5zZXR0aW5ncy5zaXplLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZU9iai5oZWlnaHQgPSB0aGlzLnNldHRpbmdzLnNpemUudmFsdWU7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmouZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlT2JqLmZsZXggPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0gc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZTtcbiJdfQ==

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(5);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NwbGl0UGFuZS9SZXNpemVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007OztBQUVGLGFBRkUsT0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLFNBRWlCOzsyRUFGakIsb0JBR1EsUUFEUzs7QUFFZixjQUFLLFdBQUwsR0FBbUIsTUFBSyxXQUFMLENBQWlCLElBQWpCLE9BQW5CLENBRmU7O0tBQW5COztpQkFGRTs7b0NBU1UsT0FBTztBQUNmLGlCQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEtBQXZCLEVBRGU7Ozs7aUNBSVY7QUFDTCxnQkFBSSxlQUFlO0FBQ2YsMkJBQVcsWUFBWDtBQUNBLDRCQUFXLE1BQVg7QUFDQSx5QkFBUyxJQUFUO0FBQ0Esd0JBQVEsR0FBUjtBQUNBLG1DQUFtQixTQUFuQjtBQUNBLHNDQUFzQixTQUF0QjtBQUNBLGdDQUFnQixhQUFoQjthQVBBLENBREM7O0FBV0wsZ0JBQU0sUUFBUSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBWFQ7QUFZTCxnQkFBSSxVQUFKLENBWks7QUFhTCxnQkFBRyxVQUFVLFlBQVYsRUFBdUI7QUFDdEIsNkJBQWM7QUFDViw0QkFBUSxNQUFSO0FBQ0EsNEJBQVEsUUFBUjtBQUNBLCtCQUFXLGtDQUFYO0FBQ0Esa0NBQWMsa0NBQWQ7QUFDQSw0QkFBUSxZQUFSO0FBQ0EsMkJBQU8sTUFBUDtpQkFOSixDQURzQjthQUExQixNQVNLO0FBQ0QsNkJBQWE7QUFDVCwyQkFBTyxNQUFQO0FBQ0EsNEJBQVEsUUFBUjtBQUNBLGdDQUFZLGtDQUFaO0FBQ0EsaUNBQWEsa0NBQWI7QUFDQSw0QkFBUSxZQUFSO0FBQ0EsNEJBQVEsTUFBUjtpQkFOSixDQURDO2FBVEw7O0FBb0JBLDRCQUFNLGlCQUFOLENBQXdCLFlBQXhCLEVBQXFDLFVBQXJDLEVBQWdELElBQWhELEVBakNLOztBQW9DTCxtQkFBUSx3Q0FBTSxPQUFPLFlBQVAsRUFBcUIsYUFBYSxLQUFLLFdBQUwsRUFBeEMsQ0FBUixDQXBDSzs7OztXQWJQO0VBQWdCLGdCQUFNLFNBQU47O2tCQXFEUCIsImZpbGUiOiJSZXNpemVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuXG4vL2NvZGUgbG9naWMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdG9ta3AvcmVhY3Qtc3BsaXQtcGFuZVxuXG5jbGFzcyBSZXNpemVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB9XG5cblxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgcmVzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6XCIjMDAwXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiBcIi4yXCIsXG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgTW96QmFja2dyb3VuZENsaXA6IFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgV2Via2l0QmFja2dyb3VuZENsaXA6IFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG4gICAgICAgIHZhciBzcGxpdFN0eWxlO1xuICAgICAgICBpZihzcGxpdCA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgIHNwbGl0U3R5bGUgPSAge1xuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIi01cHggMFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcDogXCI1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCI1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJyb3ctcmVzaXplXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNwbGl0U3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTFweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIC01cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwiY29sLXJlc2l6ZVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhyZXNpemVyU3R5bGUsc3BsaXRTdHlsZSx0cnVlKTtcblxuXG4gICAgICAgIHJldHVybiAoPHNwYW4gc3R5bGU9e3Jlc2l6ZXJTdHlsZX0gb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259IC8+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpemVyO1xuIl19

/***/ }
/******/ ])
});
;
//# sourceMappingURL=weavereact.js.map
