(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReactDOM"), require("React"), require("weavereact"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactDOM", "React", "weavereact"], factory);
	else if(typeof exports === 'object')
		exports["weavereactdemo"] = factory(require("ReactDOM"), require("React"), require("weavereact"));
	else
		root["weavereactdemo"] = factory(root["ReactDOM"], root["React"], root["weavereact"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.init = function (container) {
	    _reactDom2.default.render(React.createElement(_App2.default, null), document.getElementById(container));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLFFBQVEsSUFBUixHQUFlLFVBQVUsU0FBVixFQUFxQjtBQUNoQyx1QkFBUyxNQUFULENBQWlCLHdDQUFqQixFQUEwQixTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBMUIsRUFEZ0M7Q0FBckIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVSZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKCA8QXBwLz4gLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpKTtcbn1cbiJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _SessionEditor = __webpack_require__(4);

	var _SessionEditor2 = _interopRequireDefault(_SessionEditor);

	var _SessionEditorConfig = __webpack_require__(33);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _index = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

	        window.weave = new Weave();
	        window.dbweave = new Weave();
	        _this.openSettings = _this.openSettings.bind(_this);
	        _this.sessionConfigDashdoard = new _SessionEditorConfig2.default();
	        _this.sessionConfigWeave = new _SessionEditorConfig2.default();
	        _this.navConfig = window.dbweave.root.requestObject('navbar', _index.NavbarConfig);
	        _this.navConfig.brand.logoPath.value = "./brand.png";

	        var linkConfig = _this.navConfig.navList.links.requestObject('link1', _index.NavLinkConfig);
	        linkConfig.title.value = " Set Up";
	        linkConfig.iconName.value = "fa fa-home";
	        linkConfig = _this.navConfig.navList.links.requestObject('link2', _index.NavLinkConfig);
	        linkConfig.title.value = " Documentation";
	        linkConfig.iconName.value = "fa fa-folder";

	        _this.treeConfig = window.dbweave.root.requestObject('tree', _index.TreeConfig);
	        _this.treeConfig.nodePadding.value = "10px";
	        _this.treeConfig.rightAlign.value = true;
	        _this.treeConfig.folderIcon.value = "fa fa-caret-right";
	        _this.treeConfig.folderOpenIcon.value = "fa fa-caret-down";
	        _this.treeConfig.fileIcon.value = "";
	        _this.treeConfig.fileOpenIcon.value = "";
	        _this.treeConfig.enableDataTypeIcon.value = false;
	        _this.treeConfig.leafColor.value = "#0470AF";

	        _this.tree = null;
	        _this.loadJSON = _this.loadJSON.bind(_this);
	        _this.loadJSON(function (response) {
	            this.tree = JSON.parse(response);
	            console.log(this.tree);
	            this.forceUpdate();
	        }.bind(_this));

	        return _this;
	    }

	    _createClass(App, [{
	        key: "loadJSON",
	        value: function loadJSON(callback) {

	            var xobj = new XMLHttpRequest();
	            xobj.overrideMimeType("application/json");
	            xobj.open('GET', './test.json', true);
	            xobj.onreadystatechange = function () {
	                if (xobj.readyState == 4 && xobj.status == "200") {
	                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
	                    callback(xobj.responseText);
	                }
	            };
	            xobj.send(null);
	        }
	    }, {
	        key: "openSettings",
	        value: function openSettings(e) {
	            if (e.code === "Enter" && e.ctrlKey) {
	                if (this.sessionConfigWeave.modalConfig.open.value) this.sessionConfigWeave.modalConfig.open.value = false;
	                this.sessionConfigDashdoard.modalConfig.open.value = true;
	                this.popUpSessionEditor(this.sessionConfigDashdoard, window.dbweave, "Session State Editor (Weave Dashboard)", true);
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            window.addEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "componentWillUnMount",
	        value: function componentWillUnMount() {
	            window.removeEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "popUpSessionEditor",
	        value: function popUpSessionEditor(config, weaveInstance, title, isDb) {
	            ReactDOM.render(_react2.default.createElement(_SessionEditor2.default, { isDashboard: isDb, weave: weaveInstance, keyPress: "true", title: title, settings: config }), document.getElementById("popUp"));
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement("div", { id: "popUp" }),
	                _react2.default.createElement(_index.Navbar, { settings: this.navConfig }),
	                _react2.default.createElement(
	                    "div",
	                    { style: { marginTop: "60px" } },
	                    _react2.default.createElement(
	                        "div",
	                        { style: { width: "240px", color: "white", border: "1px solid grey", background: "linear-gradient(to right, #036FBB , #013458)" } },
	                        _react2.default.createElement(_index.Tree, { data: this.tree, settings: this.treeConfig, label: "label", nodes: "children" })
	                    )
	                )
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;
	//# sourceMappingURL=data:application/json;base64,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bUJBQVE7OztnQkFDSSx1Q0FBSyxJQUFHLE9BQUgsRUFBTCxDQURKO2dCQUVJLCtDQUFRLFVBQVUsS0FBSyxTQUFMLEVBQWxCLENBRko7Z0JBR0k7O3NCQUFLLE9BQU8sRUFBQyxXQUFVLE1BQVYsRUFBUixFQUFMO29CQUNJOzswQkFBSyxPQUFPLEVBQUMsT0FBTSxPQUFOLEVBQWMsT0FBTSxPQUFOLEVBQWUsUUFBTyxnQkFBUCxFQUF3QixZQUFXLDhDQUFYLEVBQTdELEVBQUw7d0JBQ0ksNkNBQU0sTUFBTSxLQUFLLElBQUwsRUFBVyxVQUFVLEtBQUssVUFBTCxFQUFpQixPQUFNLE9BQU4sRUFBYyxPQUFNLFVBQU4sRUFBaEUsQ0FESjtxQkFESjtpQkFISjthQUFSLENBSEs7Ozs7V0EvRVA7RUFBWSxnQkFBTSxTQUFOOztrQkFnR0giLCJmaWxlIjoiQXBwLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FuamF5L2dpdC9XZWF2ZVJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlc3Npb25FZGl0b3IgZnJvbSBcIi4vc2Vzc2lvblN0YXRlRWRpdG9yL1Nlc3Npb25FZGl0b3JcIjtcbmltcG9ydCBTZXNzaW9uRWRpdG9yQ29uZmlnIGZyb20gXCIuL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yQ29uZmlnXCI7XG5pbXBvcnQge05hdmJhcn0gZnJvbSBcIi4uLy4uL2xpYi9pbmRleC5qc1wiO1xuaW1wb3J0IHtOYXZiYXJDb25maWd9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7TmF2TGlua0NvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9pbmRleC5qc1wiO1xuaW1wb3J0IHtUcmVlfSBmcm9tIFwiLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQge1RyZWVDb25maWd9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgd2luZG93LndlYXZlID0gbmV3IFdlYXZlKCk7XG4gICAgICAgIHdpbmRvdy5kYndlYXZlID0gbmV3IFdlYXZlKCk7XG4gICAgICAgIHRoaXMub3BlblNldHRpbmdzID0gdGhpcy5vcGVuU2V0dGluZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uQ29uZmlnRGFzaGRvYXJkID0gbmV3IFNlc3Npb25FZGl0b3JDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uQ29uZmlnV2VhdmUgPSBuZXcgU2Vzc2lvbkVkaXRvckNvbmZpZygpO1xuICAgICAgICB0aGlzLm5hdkNvbmZpZyA9IHdpbmRvdy5kYndlYXZlLnJvb3QucmVxdWVzdE9iamVjdCgnbmF2YmFyJyxOYXZiYXJDb25maWcpO1xuICAgICAgICB0aGlzLm5hdkNvbmZpZy5icmFuZC5sb2dvUGF0aC52YWx1ZSA9IFwiLi9icmFuZC5wbmdcIjtcblxuICAgICAgICB2YXIgbGlua0NvbmZpZyA9IHRoaXMubmF2Q29uZmlnLm5hdkxpc3QubGlua3MucmVxdWVzdE9iamVjdCgnbGluazEnLE5hdkxpbmtDb25maWcpO1xuICAgICAgICBsaW5rQ29uZmlnLnRpdGxlLnZhbHVlID0gXCIgU2V0IFVwXCI7XG4gICAgICAgIGxpbmtDb25maWcuaWNvbk5hbWUudmFsdWUgPSBcImZhIGZhLWhvbWVcIjtcbiAgICAgICAgbGlua0NvbmZpZz0gdGhpcy5uYXZDb25maWcubmF2TGlzdC5saW5rcy5yZXF1ZXN0T2JqZWN0KCdsaW5rMicsTmF2TGlua0NvbmZpZyk7XG4gICAgICAgIGxpbmtDb25maWcudGl0bGUudmFsdWUgPSBcIiBEb2N1bWVudGF0aW9uXCI7XG4gICAgICAgIGxpbmtDb25maWcuaWNvbk5hbWUudmFsdWUgPSBcImZhIGZhLWZvbGRlclwiO1xuXG4gICAgICAgIHRoaXMudHJlZUNvbmZpZyA9IHdpbmRvdy5kYndlYXZlLnJvb3QucmVxdWVzdE9iamVjdCgndHJlZScsVHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy52YWx1ZSA9XCIxMHB4XCI7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5yaWdodEFsaWduLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmZvbGRlckljb24udmFsdWUgPSBcImZhIGZhLWNhcmV0LXJpZ2h0XCI7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5mb2xkZXJPcGVuSWNvbi52YWx1ZSA9IFwiZmEgZmEtY2FyZXQtZG93blwiO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcuZmlsZUljb24udmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcuZmlsZU9wZW5JY29uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcubGVhZkNvbG9yLnZhbHVlID0gXCIjMDQ3MEFGXCI7XG5cbiAgICAgICAgdGhpcy50cmVlPW51bGw7XG4gICAgICAgIHRoaXMubG9hZEpTT04gPSB0aGlzLmxvYWRKU09OLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubG9hZEpTT04oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgdGhpcy50cmVlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRyZWUpO1xuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9LmJpbmQodGhpcykpXG5cblxuXG4gICAgfVxuXG4gICAgIGxvYWRKU09OKGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIHhvYmogPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeG9iai5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgeG9iai5vcGVuKCdHRVQnLCAnLi90ZXN0Lmpzb24nLCB0cnVlKTtcbiAgICAgICAgeG9iai5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeG9iai5yZWFkeVN0YXRlID09IDQgJiYgeG9iai5zdGF0dXMgPT0gXCIyMDBcIikge1xuICAgICAgICAgICAgICAgIC8vIFJlcXVpcmVkIHVzZSBvZiBhbiBhbm9ueW1vdXMgY2FsbGJhY2sgYXMgLm9wZW4gd2lsbCBOT1QgcmV0dXJuIGEgdmFsdWUgYnV0IHNpbXBseSByZXR1cm5zIHVuZGVmaW5lZCBpbiBhc3luY2hyb25vdXMgbW9kZVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHhvYmoucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeG9iai5zZW5kKG51bGwpO1xuICAgIH1cblxuICAgb3BlblNldHRpbmdzKGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiICYmIGUuY3RybEtleSkge1xuICAgICAgICAgICAgaWYodGhpcy5zZXNzaW9uQ29uZmlnV2VhdmUubW9kYWxDb25maWcub3Blbi52YWx1ZSkgIHRoaXMuc2Vzc2lvbkNvbmZpZ1dlYXZlLm1vZGFsQ29uZmlnLm9wZW4udmFsdWU9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uQ29uZmlnRGFzaGRvYXJkLm1vZGFsQ29uZmlnLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wb3BVcFNlc3Npb25FZGl0b3IoIHRoaXMuc2Vzc2lvbkNvbmZpZ0Rhc2hkb2FyZCwgd2luZG93LmRid2VhdmUsIFwiU2Vzc2lvbiBTdGF0ZSBFZGl0b3IgKFdlYXZlIERhc2hib2FyZClcIix0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wZW5TZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVuTW91bnQoKXtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wZW5TZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgcG9wVXBTZXNzaW9uRWRpdG9yKGNvbmZpZyx3ZWF2ZUluc3RhbmNlLHRpdGxlLGlzRGIpIHtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKCA8U2Vzc2lvbkVkaXRvciBpc0Rhc2hib2FyZD17aXNEYn0gd2VhdmU9e3dlYXZlSW5zdGFuY2V9IGtleVByZXNzID0gXCJ0cnVlXCIgdGl0bGU9e3RpdGxlfSBzZXR0aW5ncyA9IHtjb25maWd9Lz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcFwiKVxuICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpIHtcblxuXG4gICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIHNldHRpbmdzPXt0aGlzLm5hdkNvbmZpZ30vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiNjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIyNDBweFwiLGNvbG9yOlwid2hpdGVcIiwgYm9yZGVyOlwiMXB4IHNvbGlkIGdyZXlcIixiYWNrZ3JvdW5kOlwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDM2RkJCICwgIzAxMzQ1OClcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlIGRhdGE9e3RoaXMudHJlZX0gc2V0dGluZ3M9e3RoaXMudHJlZUNvbmZpZ30gbGFiZWw9XCJsYWJlbFwiIG5vZGVzPVwiY2hpbGRyZW5cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _weavereact = __webpack_require__(5);

	var _weavereact2 = _interopRequireDefault(_weavereact);

	var _index = __webpack_require__(6);

	var _SessionEditorConfig = __webpack_require__(33);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _TreeSection = __webpack_require__(34);

	var _TreeSection2 = _interopRequireDefault(_TreeSection);

	var _NodeView = __webpack_require__(35);

	var _NodeView2 = _interopRequireDefault(_NodeView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SessionEditor = function (_React$Component) {
	    _inherits(SessionEditor, _React$Component);

	    function SessionEditor(props) {
	        _classCallCheck(this, SessionEditor);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SessionEditor).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _SessionEditorConfig2.default();
	        _this.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(_this.props.weave.root);
	        _this.tree.label = _this.props.isDashboard ? "WeaveDashboard" : "Weave";

	        _this.changeSessionValue = _this.changeSessionValue.bind(_this);
	        _this.nodeClick = _this.nodeClick.bind(_this);
	        _this.saveFile = _this.saveFile.bind(_this);
	        _this.openFile = _this.openFile.bind(_this);
	        _this.selectedData; // to-do:try with linkableWatcher and add forceUpdate to that watcher
	        return _this;
	    }

	    _createClass(SessionEditor, [{
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
	            }
	            if (this.props.weave !== nextProps.weave) {
	                this.settings = nextProps.settings;
	                this.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(nextProps.weave.root);
	                this.tree.label = nextProps.isDashboard ? "WeaveDashboard" : "Weave";
	                this.selectedData = null;
	            }
	        }
	    }, {
	        key: "nodeClick",
	        value: function nodeClick(node) {
	            this.selectedData = node.data;
	            var state = Weave.getState(node.data);
	            var str;
	            if (node.data instanceof weavejs.core.LinkableString) str = state;else str = Weave.stringify(state, null, '\t', true);
	            this.settings.activeNodeValue.state = str;
	        }
	    }, {
	        key: "changeSessionValue",
	        value: function changeSessionValue(e) {
	            var value = this.settings.activeNodeValue.state;
	            if (this.selectedData instanceof weavejs.core.LinkableString) this.selectedData.value = value;else Weave.setState(this.selectedData, JSON.parse(value));

	            this.forceUpdate();
	        }
	    }, {
	        key: "saveFile",
	        value: function saveFile() {
	            var archive = weavejs.core.WeaveArchive.createArchive(this.props.weave);
	            var uint8Array = archive.serialize();
	            var arrayBuffer = uint8Array.buffer;
	            window.saveAs(new Blob([arrayBuffer]), "test.weave");
	        }
	    }, {
	        key: "openFile",
	        value: function openFile(e) {
	            var selectedfile = e.target.files[0];
	            // Build Promise List, each promise resolved by FileReader.onload.
	            this.tree = null;
	            this.settings.activeNodeValue.state = "";
	            this.forceUpdate();
	            var that = this;
	            new Promise(function (resolve, reject) {
	                var reader = new FileReader();

	                reader.onload = function (event) {
	                    // Resolve both the FileReader result and its original file.
	                    resolve([event, selectedfile]);
	                };

	                // Read the file.
	                reader.readAsArrayBuffer(selectedfile);
	            }).then(function (zippedResults) {
	                // Run the callback after all files have been read.
	                var e = zippedResults[0];
	                var result = e.target.result;
	                // read the content of the file with JSZip

	                weavejs.core.WeaveArchive.loadFileContent(that.props.weave, result);
	                that.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(that.props.weave.root);
	                that.tree.label = "Weave";
	                that.selectedData = null; // to-do:try with linkableWatcher and add forceUpdate to that watcher
	                that.forceUpdate();
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var applyButtonStyle = {
	                marginTop: "4px",
	                marginLeft: "2px",
	                borderStyle: "solid",
	                borderRadius: "4px",
	                borderWidth: "1px",
	                borderColor: "grey",
	                float: "right",
	                padding: "4px",
	                cursor: "pointer",
	                fontSize: "12px",
	                position: "relative"
	            };
	            var inputButtonStyle = {
	                width: "100%",
	                opacity: "0",
	                overflow: "hidden",
	                position: "absolute",
	                left: "0",
	                top: "2px",
	                bottom: "2px"
	            };

	            return _react2.default.createElement(
	                _index.Modal,
	                { settings: this.settings.modalConfig, keyPress: "true", title: this.props.title },
	                _react2.default.createElement(
	                    "div",
	                    { style: { height: "90%", width: "100%", display: "flex", position: "relative", overflow: "hidden" } },
	                    _react2.default.createElement(
	                        _index.SplitPane,
	                        { split: "vertical", minSize: "50", defaultSize: "256" },
	                        _react2.default.createElement(_TreeSection2.default, { tree: this.tree, settings: this.settings, nodeClick: this.nodeClick }),
	                        _react2.default.createElement(_NodeView2.default, { activeNodeValue: this.settings.activeNodeValue })
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: applyButtonStyle, onClick: this.changeSessionValue },
	                    " Apply "
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: applyButtonStyle, onClick: this.saveFile },
	                    _react2.default.createElement(
	                        "i",
	                        { className: "fa fa-fw fa-download" },
	                        " "
	                    ),
	                    " Save "
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: applyButtonStyle },
	                    _react2.default.createElement("input", { onChange: this.openFile, type: "file", style: inputButtonStyle }),
	                    _react2.default.createElement(
	                        "i",
	                        { className: "fa fa-fw fa-upload" },
	                        " "
	                    ),
	                    " Load"
	                )
	            );
	        }
	    }]);

	    return SessionEditor;
	}(_react2.default.Component);

	exports.default = SessionEditor;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU3FCOzs7QUFFakIsYUFGaUIsYUFFakIsQ0FBWSxLQUFaLEVBQW1COzhCQUZGLGVBRUU7OzJFQUZGLDBCQUdQLFFBRFM7O0FBRWYsY0FBSyxRQUFMLEdBQWlCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBb0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQixtQ0FBeEMsQ0FGRjtBQUdmLGNBQUssSUFBTCxHQUFhLFFBQVEsUUFBUixDQUFpQixjQUFqQixDQUFnQyxtQkFBaEMsQ0FBb0QsTUFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixJQUFqQixDQUFqRSxDQUhlO0FBSWYsY0FBSyxJQUFMLENBQVUsS0FBVixHQUFrQixNQUFLLEtBQUwsQ0FBVyxXQUFYLEdBQXVCLGdCQUF2QixHQUF3QyxPQUF4QyxDQUpIOztBQU1mLGNBQUssa0JBQUwsR0FBMEIsTUFBSyxrQkFBTCxDQUF3QixJQUF4QixPQUExQixDQU5lO0FBT2YsY0FBSyxTQUFMLEdBQWlCLE1BQUssU0FBTCxDQUFlLElBQWYsT0FBakIsQ0FQZTtBQVFmLGNBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCLENBUmU7QUFTZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxRQUFMLENBQWMsSUFBZCxPQUFoQixDQVRlO0FBVWYsY0FBSyxZQUFMO0FBVmU7S0FBbkI7O2lCQUZpQjs7NENBZUU7OzsrQ0FJSzs7O2tEQUlFLFdBQVU7QUFDaEMsZ0JBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixVQUFVLFFBQVYsRUFBbUI7QUFDMUMscUJBQUssUUFBTCxHQUFnQixVQUFVLFFBQVYsQ0FEMEI7YUFBOUM7QUFHQSxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEtBQXFCLFVBQVUsS0FBVixFQUFn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LGdCQUFQLEVBQXlCLFNBQVMsS0FBSyxrQkFBTCxFQUF2Qzs7aUJBUkg7Z0JBU0c7O3NCQUFLLE9BQU8sZ0JBQVAsRUFBeUIsU0FBUyxLQUFLLFFBQUwsRUFBdkM7b0JBQXNEOzswQkFBSSxXQUFZLHNCQUFaLEVBQUo7O3FCQUF0RDs7aUJBVEg7Z0JBVUc7O3NCQUFLLE9BQU8sZ0JBQVAsRUFBTDtvQkFDSSx5Q0FBTyxVQUFVLEtBQUssUUFBTCxFQUFlLE1BQUssTUFBTCxFQUFZLE9BQU8sZ0JBQVAsRUFBNUMsQ0FESjtvQkFFSTs7MEJBQUksV0FBWSxvQkFBWixFQUFKOztxQkFGSjs7aUJBVkg7YUFBVCxDQTVCTzs7OztXQXRHVTtFQUFzQixnQkFBTSxTQUFOOztrQkFBdEIiLCJmaWxlIjoiU2Vzc2lvbkVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FuamF5L2dpdC9XZWF2ZVJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHdlYXZlcmVhY3QgZnJvbSBcIndlYXZlcmVhY3RcIjtcbmltcG9ydCB7TW9kYWx9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7U3BsaXRQYW5lfSBmcm9tIFwiLi4vLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQgU2Vzc2lvbkVkaXRvckNvbmZpZyBmcm9tIFwiLi9TZXNzaW9uRWRpdG9yQ29uZmlnXCI7XG5pbXBvcnQgVHJlZVNlY3Rpb24gZnJvbSBcIi4vVHJlZVNlY3Rpb25cIjtcbmltcG9ydCBOb2RlVmlldyBmcm9tIFwiLi9Ob2RlVmlld1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb25FZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gIHRoaXMucHJvcHMuc2V0dGluZ3M/dGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgU2Vzc2lvbkVkaXRvckNvbmZpZygpO1xuICAgICAgICB0aGlzLnRyZWUgPSAgd2VhdmVqcy5XZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uU3RhdGVUcmVlKHRoaXMucHJvcHMud2VhdmUucm9vdCk7XG4gICAgICAgIHRoaXMudHJlZS5sYWJlbCA9IHRoaXMucHJvcHMuaXNEYXNoYm9hcmQ/XCJXZWF2ZURhc2hib2FyZFwiOlwiV2VhdmVcIjtcblxuICAgICAgICB0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZSA9IHRoaXMuY2hhbmdlU2Vzc2lvblZhbHVlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubm9kZUNsaWNrID0gdGhpcy5ub2RlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYXZlRmlsZSA9IHRoaXMuc2F2ZUZpbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcGVuRmlsZSA9IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGE7Ly8gdG8tZG86dHJ5IHdpdGggbGlua2FibGVXYXRjaGVyIGFuZCBhZGQgZm9yY2VVcGRhdGUgdG8gdGhhdCB3YXRjaGVyXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3NcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLndlYXZlICE9PSBuZXh0UHJvcHMud2VhdmUpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIHRoaXMudHJlZSA9ICB3ZWF2ZWpzLldlYXZlQVBJLlNlc3Npb25NYW5hZ2VyLmdldFNlc3Npb25TdGF0ZVRyZWUobmV4dFByb3BzLndlYXZlLnJvb3QpO1xuICAgICAgICAgICAgdGhpcy50cmVlLmxhYmVsID0gbmV4dFByb3BzLmlzRGFzaGJvYXJkP1wiV2VhdmVEYXNoYm9hcmRcIjpcIldlYXZlXCI7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0YSA9IG51bGwgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm9kZUNsaWNrKG5vZGUpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgdmFyIHN0YXRlID0gV2VhdmUuZ2V0U3RhdGUobm9kZS5kYXRhKTtcbiAgICAgICAgdmFyIHN0cjtcbiAgICAgICAgaWYgKG5vZGUuZGF0YSBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgXHRzdHIgPSBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICBcdHN0ciA9IFdlYXZlLnN0cmluZ2lmeShzdGF0ZSwgbnVsbCwgJ1xcdCcsIHRydWUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IHN0cjtcbiAgfVxuXG5cbiAgY2hhbmdlU2Vzc2lvblZhbHVlKGUpe1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRhIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKVxuICAgICAgICBcdHRoaXMuc2VsZWN0ZWREYXRhLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgXHRXZWF2ZS5zZXRTdGF0ZSh0aGlzLnNlbGVjdGVkRGF0YSwgSlNPTi5wYXJzZSh2YWx1ZSkpO1xuXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHNhdmVGaWxlKCl7XG4gICAgdmFyIGFyY2hpdmUgID0gd2VhdmVqcy5jb3JlLldlYXZlQXJjaGl2ZS5jcmVhdGVBcmNoaXZlKHRoaXMucHJvcHMud2VhdmUpXG4gICAgdmFyIHVpbnQ4QXJyYXkgPSBhcmNoaXZlLnNlcmlhbGl6ZSgpO1xuICAgIHZhciBhcnJheUJ1ZmZlciAgPSB1aW50OEFycmF5LmJ1ZmZlcjtcbiAgICB3aW5kb3cuc2F2ZUFzKG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0pLCBcInRlc3Qud2VhdmVcIik7XG4gIH1cblxuXG5cbiAgb3BlbkZpbGUoZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgLy8gQnVpbGQgUHJvbWlzZSBMaXN0LCBlYWNoIHByb21pc2UgcmVzb2x2ZWQgYnkgRmlsZVJlYWRlci5vbmxvYWQuXG4gICAgICAgIHRoaXMudHJlZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlLnN0YXRlID0gXCJcIjtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBib3RoIHRoZSBGaWxlUmVhZGVyIHJlc3VsdCBhbmQgaXRzIG9yaWdpbmFsIGZpbGUuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoW2V2ZW50LCBzZWxlY3RlZGZpbGVdKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gUmVhZCB0aGUgZmlsZS5cbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoc2VsZWN0ZWRmaWxlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoemlwcGVkUmVzdWx0cykge1xuICAgICAgICAgICAgICAgIC8vIFJ1biB0aGUgY2FsbGJhY2sgYWZ0ZXIgYWxsIGZpbGVzIGhhdmUgYmVlbiByZWFkLlxuICAgICAgICAgICAgICAgIHZhciBlID0gemlwcGVkUmVzdWx0c1swXTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIC8vIHJlYWQgdGhlIGNvbnRlbnQgb2YgdGhlIGZpbGUgd2l0aCBKU1ppcFxuXG4gICAgICAgICAgICAgICAgd2VhdmVqcy5jb3JlLldlYXZlQXJjaGl2ZS5sb2FkRmlsZUNvbnRlbnQodGhhdC5wcm9wcy53ZWF2ZSxyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoYXQudHJlZSA9ICB3ZWF2ZWpzLldlYXZlQVBJLlNlc3Npb25NYW5hZ2VyLmdldFNlc3Npb25TdGF0ZVRyZWUodGhhdC5wcm9wcy53ZWF2ZS5yb290KTtcbiAgICAgICAgICAgICAgICAgdGhhdC50cmVlLmxhYmVsID0gXCJXZWF2ZVwiO1xuICAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdGVkRGF0YSA9IG51bGwgOy8vIHRvLWRvOnRyeSB3aXRoIGxpbmthYmxlV2F0Y2hlciBhbmQgYWRkIGZvcmNlVXBkYXRlIHRvIHRoYXQgd2F0Y2hlclxuICAgICAgICAgICAgICAgICB0aGF0LmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cblxuICByZW5kZXIoKSB7XG5cblxuXG4gICAgdmFyIGFwcGx5QnV0dG9uU3R5bGUgPSB7XG4gICAgICAgIG1hcmdpblRvcDpcIjRweFwiLFxuICAgICAgICBtYXJnaW5MZWZ0OlwiMnB4XCIsXG4gICAgICAgIGJvcmRlclN0eWxlOlwic29saWRcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOlwiNHB4XCIsXG4gICAgICAgIGJvcmRlcldpZHRoOlwiMXB4XCIsXG4gICAgICAgIGJvcmRlckNvbG9yOlwiZ3JleVwiLFxuICAgICAgICBmbG9hdDpcInJpZ2h0XCIsXG4gICAgICAgIHBhZGRpbmc6XCI0cHhcIixcbiAgICAgICAgY3Vyc29yOlwicG9pbnRlclwiLFxuICAgICAgICBmb250U2l6ZTpcIjEycHhcIixcbiAgICAgICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiXG4gICAgfVxuICAgIHZhciBpbnB1dEJ1dHRvblN0eWxlID0ge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG9wYWNpdHk6IFwiMFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgbGVmdDpcIjBcIixcbiAgICAgICAgdG9wOlwiMnB4XCIsXG4gICAgICAgIGJvdHRvbTpcIjJweFwiXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCA8TW9kYWwgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MubW9kYWxDb25maWd9IGtleVByZXNzPVwidHJ1ZVwiIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6XCI5MCVcIix3aWR0aDpcIjEwMCVcIixkaXNwbGF5OiBcImZsZXhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cInZlcnRpY2FsXCIgbWluU2l6ZT1cIjUwXCIgZGVmYXVsdFNpemU9XCIyNTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlU2VjdGlvbiB0cmVlPXt0aGlzLnRyZWV9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzfSAgbm9kZUNsaWNrPXt0aGlzLm5vZGVDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3IGFjdGl2ZU5vZGVWYWx1ZT17dGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5jaGFuZ2VTZXNzaW9uVmFsdWV9PiBBcHBseSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcHBseUJ1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLnNhdmVGaWxlfT48IGkgY2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS1kb3dubG9hZFwiICA+IDwgL2kgPiBTYXZlIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub3BlbkZpbGV9IHR5cGU9J2ZpbGUnIHN0eWxlPXtpbnB1dEJ1dHRvblN0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwgaSBjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLXVwbG9hZFwiICA+IDwgL2kgPiBMb2FkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuIl19

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Tree = __webpack_require__(7);

	var _Tree2 = _interopRequireDefault(_Tree);

	var _TreeConfig = __webpack_require__(15);

	var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

	var _Node = __webpack_require__(13);

	var _Node2 = _interopRequireDefault(_Node);

	var _NodeConfig = __webpack_require__(14);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	var _Modal = __webpack_require__(16);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _ModalConfig = __webpack_require__(17);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _SplitPane = __webpack_require__(21);

	var _SplitPane2 = _interopRequireDefault(_SplitPane);

	var _SplitPaneConfig = __webpack_require__(22);

	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

	var _Navbar = __webpack_require__(26);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Config = __webpack_require__(31);

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	//Weave.registerAsyncClass(React.Component);

	exports.Tree = _Tree2.default;
	//import LinkConfig from "./components/navbar/LinkConfig";

	exports.Modal = _Modal2.default;
	exports.TreeConfig = _TreeConfig2.default;
	exports.ModalConfig = _ModalConfig2.default;
	exports.SplitPane = _SplitPane2.default;
	exports.SplitPaneConfig = _SplitPaneConfig2.default;

	exports.Navbar = _Navbar2.default;
	exports.NavbarConfig = _Config.NavbarConfig;
	exports.NavLinkConfig = _Config.NavLinkConfig;

	exports.registerToolImplementation = function (asClassName, jsClass) {
	    _App2.default.registerToolImplementation(asClassName, jsClass);
	};

	exports.getToolImplementation = function (name) {
	    if (_App2.default.getToolImplementation(name)) {
	        return _App2.default.getToolImplementation(name);
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLFFBQUEsQUFBUTs7O0FBQ1IsUUFBQSxBQUFRO0FBQ1IsUUFBQSxBQUFRO0FBQ1IsUUFBQSxBQUFRO0FBQ1IsUUFBQSxBQUFRO0FBQ1IsUUFBQSxBQUFROztBQUVSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTs7QUFHUixRQUFBLEFBQVEsdUNBQTZCLEFBQVUsYUFBVixBQUF1QjtrQkFDeEQsQUFBSSwyQkFBSixBQUErQixhQURFLEFBQWdDLEFBQ2pFLEFBQTRDLFNBRHFCLEFBQ2pFO0NBRGlDOztBQUlyQyxRQUFBLEFBQVEsa0NBQXdCLEFBQVUsTUFBTSxBQUM1QztRQUFJLGNBQUEsQUFBSSxzQkFBUixBQUFJLEFBQTBCLE9BQU8sQUFDakM7ZUFBTyxjQUFBLEFBQUksc0JBRmEsQUFDNUIsQUFBcUMsQUFDakMsQUFBTyxBQUEwQjs7Q0FGVCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmVlIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9UcmVlXCI7XG5pbXBvcnQgVHJlZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvVHJlZUNvbmZpZ1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vY29tcG9uZW50cy90cmVlL05vZGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9Ob2RlQ29uZmlnXCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsL01vZGFsXCI7XG5pbXBvcnQgTW9kYWxDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbENvbmZpZ1wiO1xuXG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gXCIuL2NvbXBvbmVudHMvc3BsaXRQYW5lL1NwbGl0UGFuZVwiO1xuaW1wb3J0IFNwbGl0UGFuZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3NwbGl0UGFuZS9TcGxpdFBhbmVDb25maWdcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXJcIjtcbmltcG9ydCB7TmF2YmFyQ29uZmlnLE5hdkxpbmtDb25maWd9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyL0NvbmZpZ1wiO1xuLy9pbXBvcnQgTGlua0NvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9MaW5rQ29uZmlnXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vdXRpbHMvQXBwXCI7XG5cbi8vV2VhdmUucmVnaXN0ZXJBc3luY0NsYXNzKFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuVHJlZSA9IFRyZWU7XG5leHBvcnRzLk1vZGFsID0gTW9kYWw7XG5leHBvcnRzLlRyZWVDb25maWcgPSBUcmVlQ29uZmlnO1xuZXhwb3J0cy5Nb2RhbENvbmZpZyA9IE1vZGFsQ29uZmlnO1xuZXhwb3J0cy5TcGxpdFBhbmUgPSBTcGxpdFBhbmU7XG5leHBvcnRzLlNwbGl0UGFuZUNvbmZpZyA9IFNwbGl0UGFuZUNvbmZpZztcblxuZXhwb3J0cy5OYXZiYXIgPSBOYXZiYXI7XG5leHBvcnRzLk5hdmJhckNvbmZpZyA9IE5hdmJhckNvbmZpZztcbmV4cG9ydHMuTmF2TGlua0NvbmZpZyA9IE5hdkxpbmtDb25maWc7XG5cblxuZXhwb3J0cy5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uIChhc0NsYXNzTmFtZSwganNDbGFzcykge1xuICAgIEFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSwganNDbGFzcyk7XG59XG5cbmV4cG9ydHMuZ2V0VG9vbEltcGxlbWVudGF0aW9uID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihuYW1lKSkge1xuICAgICAgICByZXR1cm4gQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihuYW1lKTtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	var _Style = __webpack_require__(10);

	var _Style2 = _interopRequireDefault(_Style);

	var _Node = __webpack_require__(13);

	var _Node2 = _interopRequireDefault(_Node);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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
	        value: function componentDidMount() {
	            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
	            this.settings.nodePadding.addImmediateCallback(this, this.forceUpdate);
	            this.settings.nodeColor.addImmediateCallback(this, this.forceUpdate);
	            this.settings.leafColor.addImmediateCallback(this, this.forceUpdate);
	            this.settings.leafBorder.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
	            this.settings.nodePadding.removeCallback(this, this.forceUpdate);
	            this.settings.nodeColor.removeCallback(this, this.forceUpdate);
	            this.settings.leafColor.removeCallback(this, this.forceUpdate);
	            this.settings.leafBorder.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                this.settings.rightAlign.removeCallback(this, this.forceUpdate);
	                this.settings.nodePadding.removeCallback(this, this.forceUpdate);
	                this.settings.nodeColor.removeCallback(this, this.forceUpdate);
	                this.settings.leafColor.removeCallback(this, this.forceUpdate);
	                this.settings.leafBorder.removeCallback(this, this.forceUpdate);
	                this.settings = nextProps.settings;
	                this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
	                this.settings.nodePadding.addImmediateCallback(this, this.forceUpdate);
	                this.settings.nodeColor.addImmediateCallback(this, this.forceUpdate);
	                this.settings.leafColor.addImmediateCallback(this, this.forceUpdate);
	                this.settings.leafBorder.addImmediateCallback(this, this.forceUpdate);

	                this.settings.dataTypesMap = this.props.dataTypesMap;
	                this.settings.getDataType = this.props.getDataType;
	            }
	            if (this.props.data !== nextProps.data) {
	                console.log("Data Changed");
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(_Node2.default, { data: this.props.data, label: this.props.label, nodes: this.props.nodes, settings: this.settings.rootNode, treeConfig: this.settings, clickCallback: this.props.clickCallback });
	        }
	    }]);

	    return Tree;
	}(_react2.default.Component);

	_App2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
	exports.default = Tree;
	//# sourceMappingURL=data:application/json;base64,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LFlBQWQsQUFBMEIscUJBQTFCLEFBQStDLE1BQU0sS0FSWCxBQVExQyxBQUFxRCxBQUFLLEFBQzFEO3FCQUFBLEFBQUssU0FBTCxBQUFjLFVBQWQsQUFBd0IscUJBQXhCLEFBQTZDLE1BQU0sS0FUVCxBQVMxQyxBQUFtRCxBQUFLLEFBQ3hEO3FCQUFBLEFBQUssU0FBTCxBQUFjLFVBQWQsQUFBd0IscUJBQXhCLEFBQTZDLE1BQU0sS0FWVCxBQVUxQyxBQUFtRCxBQUFLLEFBQ3hEO3FCQUFBLEFBQUssU0FBTCxBQUFjLFdBQWQsQUFBeUIscUJBQXpCLEFBQThDLE1BQU0sS0FYVixBQVcxQyxBQUFvRCxBQUFLLEFBRXpEOztxQkFBQSxBQUFLLFNBQUwsQUFBYyxlQUFlLEtBQUEsQUFBSyxNQWJRLEFBYWIsQUFBVyxBQUN4QztxQkFBQSxBQUFLLFNBQUwsQUFBYyxjQUFjLEtBQUEsQUFBSyxNQWRyQyxBQUE4QyxBQWNkLEFBQVcsQUFFM0M7O2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxVQUFBLEFBQVU7d0JBQzdCLEFBQVEsSUFEWixBQUFzQyxBQUNsQyxBQUFZLGdCQURzQixBQUNsQzs7Ozs7aUNBU0MsQUFDYjttQkFBUyxnREFBTSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBTyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBTyxVQUFVLEtBQUEsQUFBSyxTQUFMLEFBQWMsVUFBVSxZQUFZLEtBQUEsQUFBSyxVQUFVLGVBQWUsS0FBQSxBQUFLLE1BRDVKLEFBQ2IsQUFBUyxBQUEySixBQUFXOzs7O1dBckR6SztFQUFhLGdCQUFBLEFBQU07O0FBMER6QixjQUFBLEFBQUksMkJBQUosQUFBK0IseUJBQS9CLEFBQXVEO2tCQUN4QyIsImZpbGUiOiJUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuXG5jbGFzcyBUcmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBUcmVlQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwID0gdGhpcy5wcm9wcy5kYXRhVHlwZXNNYXA7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0RGF0YVR5cGUgPSB0aGlzLnByb3BzLmdldERhdGFUeXBlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5ub2RlUGFkZGluZy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5ub2RlQ29sb3IuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGVhZkNvbG9yLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxlYWZCb3JkZXIuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mubm9kZVBhZGRpbmcucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mubm9kZUNvbG9yLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxlYWZDb2xvci5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sZWFmQm9yZGVyLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mubm9kZVBhZGRpbmcucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLm5vZGVDb2xvci5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MubGVhZkNvbG9yLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5sZWFmQm9yZGVyLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mubm9kZVBhZGRpbmcuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLm5vZGVDb2xvci5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MubGVhZkNvbG9yLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5sZWFmQm9yZGVyLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGFUeXBlc01hcCA9IHRoaXMucHJvcHMuZGF0YVR5cGVzTWFwO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5nZXREYXRhVHlwZSA9IHRoaXMucHJvcHMuZ2V0RGF0YVR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGEgQ2hhbmdlZFwiKVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG5cblxuICAgIHJlbmRlcigpIHtcbnJldHVybiAoIDxOb2RlIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gbGFiZWw9e3RoaXMucHJvcHMubGFiZWx9IG5vZGVzPXt0aGlzLnByb3BzLm5vZGVzfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5yb290Tm9kZX0gdHJlZUNvbmZpZz17dGhpcy5zZXR0aW5nc30gY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrfS8+ICk7XG4gICAgfVxuXG59XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuVHJlZUNvbmZpZ1wiLFRyZWUpO1xuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiJdfQ==

/***/ },
/* 8 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsVUFBQSxBQUFVOzthQUdQLEFBQVMsTUFBVCxBQUFlLEFBSWY7O1FBQUksZUFQVyxBQU9YLEFBQWUsQUFHbkI7O1FBQUEsQUFBSSx1Q0FBNkIsQUFBVSxhQUFWLEFBQXVCLFNBQVMsQUFDN0Q7WUFBSSxDQUFDLGFBQUQsQUFBQyxBQUFhLGNBQ2QsYUFBQSxBQUFhLGVBWk4sQUFVa0IsQUFDN0IsQUFDSSxBQUE0QixBQUdwQztLQUxpQyxDQVZsQixBQUdmOztRQVlBLEFBQUksa0NBQXdCLEFBQVU7ZUFDM0IsYUFoQkksQUFlYSxBQUF1QixBQUMvQyxBQUFPLEFBQWEsQUFLeEIsYUFObUQsQUFDL0M7S0FEd0I7O1dBTTVCLEFBQU8sVUFyQlYsQUFBa0IsQUFxQmYsQUFBaUI7R0FyQnJCLEFBQUMsQUF1QkMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuXG4gICAgZnVuY3Rpb24gQXBwKCkge1xuXG4gICAgfVxuXG4gICAgdmFyIHRvb2xSZWdpc3RyeSA9IHt9O1xuXG5cbiAgICBBcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAoYXNDbGFzc05hbWUsIGpzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCF0b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdKVxuICAgICAgICAgICAgdG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSA9IGpzQ2xhc3M7XG4gICAgfVxuXG4gICAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uIChhc0NsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gdG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXTtcbiAgICB9XG4gICAgXG4gICAgXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _appendVendorPrefix = __webpack_require__(11);

	var _appendVendorPrefix2 = _interopRequireDefault(_appendVendorPrefix);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

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

	    /*convenience function to get a particular sessioned property of a sessioned object*/
	    Style.getStyleStateFor = function (sessionObj, properties, appendVendorPrefix) {
	        var state = {};
	        if (properties.constructor === Array) {
	            properties.map(function (propertyName) {
	                if (sessionObj[propertyName].state) {
	                    if (sessionObj[propertyName].constructor === weavejs.core.LinkableVariable) {
	                        state = Style.mergeStyleObjects(state, sessionObj[propertyName].state);
	                    } else state[propertyName] = sessionObj[propertyName].state;
	                }
	            });
	        } else if (properties instanceof String) {
	            state[properties] = sessionObj[properties].state;
	        }
	        if (appendVendorPrefix) return Style.appendVendorPrefix(state);
	        return state;
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
	//# sourceMappingURL=data:application/json;base64,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QlcsRUFEcUIsQUFDNUI7S0FEVTs7V0FrQmQsQUFBTyxVQTlGVixBQUFrQixBQThGZixBQUFpQjtHQTlGckIsQUFBQyxBQWdHQyIsImZpbGUiOiJTdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHBlbmRWZW5kb3JQcmVmaXggZnJvbSAnLi9hcHBlbmRWZW5kb3JQcmVmaXgnO1xuXG5cblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuXG4gICAgZnVuY3Rpb24gU3R5bGUoKSB7XG5cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gbWVyZ2UoaW50bywgb2JqKSB7XG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICBpbnRvW2F0dHJdID0gb2JqW2F0dHJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGludG87XG4gICAgfVxuXG4gICAgU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMgPSBmdW5jdGlvbiAoaW50bywgb2JqLCBhcHBlbmRWZW5kb3JQcmVmaXgpIHtcbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gbWVyZ2UoaW50bywgb2JqKTtcbiAgICAgICAgaWYgKGFwcGVuZFZlbmRvclByZWZpeClcbiAgICAgICAgICAgIHJldHVybiBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpXG4gICAgICAgIGVsc2UgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICAgIH1cblxuXG4gICAgLypjb252ZW5pZW5jZSBmdW5jdGlvbiB0byBnZXQgYSBwYXJ0aWN1bGFyIHNlc3Npb25lZCBwcm9wZXJ0eSBvZiBhIHNlc3Npb25lZCBvYmplY3QqL1xuICAgIFN0eWxlLmdldFN0eWxlU3RhdGVGb3IgPSBmdW5jdGlvbiAoc2Vzc2lvbk9iaiwgcHJvcGVydGllcywgYXBwZW5kVmVuZG9yUHJlZml4KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHt9O1xuICAgICAgICBpZiAocHJvcGVydGllcy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZihzZXNzaW9uT2JqW3Byb3BlcnR5TmFtZV0uc3RhdGUpe1xuICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uT2JqW3Byb3BlcnR5TmFtZV0uY29uc3RydWN0b3IgPT09IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMoc3RhdGUsc2Vzc2lvbk9ialtwcm9wZXJ0eU5hbWVdLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlW3Byb3BlcnR5TmFtZV0gPSBzZXNzaW9uT2JqW3Byb3BlcnR5TmFtZV0uc3RhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllcyBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICAgICAgc3RhdGVbcHJvcGVydGllc10gPSBzZXNzaW9uT2JqW3Byb3BlcnRpZXNdLnN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmKGFwcGVuZFZlbmRvclByZWZpeClcbiAgICAgICAgICAgIHJldHVybiBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3RhdGUpO1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcblxuXG4gICAgU3R5bGUuZ2V0U3R5bGUgPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeChzdHlsZSk7XG4gICAgfVxuXG4gICAgU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4ID0gZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBhcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGUpO1xuICAgIH1cblxuXG5cblxuXG5cblxuICAgIC8vIGR1ZSB0byBib290c3RyYXAgTmF2YmFyIHppbmRleCAoMTAyOSkgdmFsdWUgd2UgaGF2ZSB0byBnaXZlIDEwMzAgZm9yIG92ZXJsYXlcbiAgICBTdHlsZS5vdmVybGF5Q29udGFpbmVyID0gZnVuY3Rpb24gKGlzT3Blbikge1xuICAgICAgICByZXR1cm4gYXBwZW5kVmVuZG9yUHJlZml4KHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMSknLFxuICAgICAgICAgICAgb3BhY2l0eTogaXNPcGVuID8gMSA6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGlzT3BlbiA/ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScgOiAndHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGlzT3BlbiA/ICdvcGFjaXR5IDAuNXMnIDogJ29wYWNpdHkgMC41cywgdHJhbnNmb3JtIDAuMXMgMC41cycsXG4gICAgICAgICAgICB6SW5kZXg6IDEwMzBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgU3R5bGUubW9kYWwgPSBmdW5jdGlvbiAoaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBhcHBlbmRWZW5kb3JQcmVmaXgoe1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICB6SW5kZXg6IDEwNTAsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBpc09wZW4gPyAndHJhbnNsYXRlM2QoMCwgMCwgMCknIDogJ3RyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKScsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMnLFxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTdHlsZTtcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getVendorPropertyName = __webpack_require__(12);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGVuZFZlbmRvclByZWZpeC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJLHdCQUF3QixRQUF4QixBQUF3QixBQUFROztBQUVwQyxPQUFBLEFBQU8sb0JBQVUsQUFBVSxRQUFWLEFBQWtCO1FBQzNCLEtBQUssT0FEK0IsQUFDcEMsQUFBSyxBQUFPLEFBQ2hCO1FBQUksaUJBQWlCLE9BQUEsQUFBTyxVQUZZLEFBRW5CLEFBQWlCLEFBRXRDOztTQUFLLElBQUksWUFBQSxBQUFZLEdBQUcsWUFBWSxVQUFBLEFBQVUsUUFBOUMsQUFBc0Q7WUFDOUMsYUFBYSxVQUQ4QyxBQUMzRCxBQUFhLEFBQVUsQUFDM0I7WUFBSSxjQUFBLEFBQWM7QUFBbEIsQUFBd0IsQUFJeEIscUJBSndCLEFBQ3BCOzs7WUFHQSxPQUFPLE9BTm9ELEFBTTNELEFBQU8sQUFBTyxBQUVsQixZQVIrRCxBQUMvRDs7YUFPSyxJQUFBLEFBQUksT0FBVCxBQUFnQixNQUFNLEFBQ2xCO2dCQUFJLGVBQUEsQUFBZSxLQUFmLEFBQW9CLE1BQXhCLEFBQUksQUFBMEI7bUJBQzFCLEFBQUcsT0FBTyxLQVZ0QixBQVFJLEFBQ0ksQUFBb0MsQUFDaEMsQUFBVSxBQUFLLEFBSzNCLEtBTjRDLEFBQ2hDOzs7OztRQUtSLFdBbkJvQyxBQW1CcEMsQUFBVyxBQUNmO1NBQUssSUFBQSxBQUFJLE9BQVQsQUFBZ0IsSUFBSSxBQUNoQjtpQkFBUyxzQkFBVCxBQUFTLEFBQXNCLFFBQVEsR0FEM0MsQUFBb0IsQUFDaEIsQUFBdUMsQUFBRyxBQUc5Qzs7O1dBeEJhLEFBQTJCLEFBd0J4QyxBQUFPLFNBeEJpQyxBQUN4QztDQURhIiwiZmlsZSI6ImFwcGVuZFZlbmRvclByZWZpeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFZlbmRvclByb3BlcnR5TmFtZSA9IHJlcXVpcmUoJy4vZ2V0VmVuZG9yUHJvcGVydHlOYW1lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlcykge1xuICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAgIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgICBmb3IgKHZhciBuZXh0SW5kZXggPSAxOyBuZXh0SW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBuZXh0SW5kZXgrKykge1xuICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgICAgICBpZiAobmV4dFNvdXJjZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmVmaXhlZCA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiB0bykge1xuICAgICAgICBwcmVmaXhlZFtnZXRWZW5kb3JQcm9wZXJ0eU5hbWUoa2V5KV0gPSB0b1trZXldXG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeGVkXG59XG4iXX0=

/***/ },
/* 12 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldFZlbmRvclByb3BlcnR5TmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJLE1BQU0sU0FBQSxBQUFTLGNBQWYsQUFBTSxBQUF1QjtBQUNqQyxJQUFJLFdBQVcsQ0FBQSxBQUFDLE9BQUQsQUFBUSxVQUFSLEFBQWtCLEtBQTdCLEFBQVcsQUFBdUI7QUFDdEMsSUFBQSxBQUFJOzs7QUFHSixPQUFBLEFBQU8sb0JBQVUsQUFBVSxNQUFNLEFBRTdCOztRQUFJLFFBQVEsSUFBQSxBQUFJLE9BQU8sT0FBdkIsQUFBdUIsQUFBTyxBQUU5Qjs7UUFBSSxPQUFPLEtBQUEsQUFBSyxPQUFMLEFBQVksR0FBWixBQUFlLGdCQUFnQixLQUFBLEFBQUssT0FKbEIsQUFJbEIsQUFBK0IsQUFBWSxBQUN0RDtRQUFBLEFBQUksaUJBQWlCLEFBQ2pCO2VBQU8sa0JBRFgsQUFBcUIsQUFDVixBQUFrQjtXQUN0QixBQUNIO2FBQUssSUFBSSxJQUFBLEFBQUksR0FBRyxJQUFJLFNBQUEsQUFBUyxRQUFRLEVBQUEsQUFBRTtnQkFDL0IsYUFBYSxTQUFBLEFBQVMsS0FEWSxBQUNyQixBQUFjLEFBQy9CLEtBRnNDLEFBQ3RDO2dCQUNJLGNBQWMsSUFBQSxBQUFJO2tDQUNBLFNBRE8sQUFDekIsQUFBa0IsQUFBUyxBQUMzQjt1QkFaQyxBQUtiLEFBR0ksQUFFSSxBQUE2QixBQUV6QixBQUFPLFdBRmtCLEFBQ3pCOzs7O0NBWEMiLCJmaWxlIjoiZ2V0VmVuZG9yUHJvcGVydHlOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG52YXIgcHJlZml4ZXMgPSBbJ01veicsICdXZWJraXQnLCAnTycsICdtcyddO1xudmFyIGRvbVZlbmRvclByZWZpeDtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJvcGVyIHZlbmRvciBwcm9wZXJ0eSBuYW1lLiAodHJhbnNpdGlvbiA9PiBXZWJraXRUcmFuc2l0aW9uKVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocHJvcCkge1xuXG4gICAgaWYgKHByb3AgaW4gZGl2LnN0eWxlKSByZXR1cm4gcHJvcDtcblxuICAgIHZhciBwcm9wID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc3Vic3RyKDEpO1xuICAgIGlmIChkb21WZW5kb3JQcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIGRvbVZlbmRvclByZWZpeCArIHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHZlbmRvclByb3AgPSBwcmVmaXhlc1tpXSArIHByb3A7XG4gICAgICAgICAgICBpZiAodmVuZG9yUHJvcCBpbiBkaXYuc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBkb21WZW5kb3JQcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVuZG9yUHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	var _Style = __webpack_require__(10);

	var _Style2 = _interopRequireDefault(_Style);

	var _NodeConfig = __webpack_require__(14);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Node = function (_React$Component) {
	    _inherits(Node, _React$Component);

	    function Node(props) {
	        _classCallCheck(this, Node);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Node).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _NodeConfig2.default();
	        _this.toggle = _this.toggle.bind(_this);
	        _this.getTreeNodes = _this.getTreeNodes.bind(_this);
	        _this.getTreeLabel = _this.getTreeLabel.bind(_this);
	        _this.setSessionStateFromTree = _this.setSessionStateFromTree.bind(_this);
	        _this.setSessionStateFromTree(_this.props.data, _this.props.label, _this.props.nodes);
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
	        value: function setSessionStateFromTree(data, label, nodes) {
	            this.settings.label.value = this.getTreeLabel(data, label);
	            var treeNodes = this.getTreeNodes(data, nodes);
	            if (treeNodes && treeNodes.length) {
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
	        value: function getTreeNodes(data, nodes) {
	            if (data) {
	                if (data[nodes] instanceof Function) {
	                    return data[nodes]();
	                } else {
	                    return data[nodes];
	                }
	            } else return [];
	        }
	    }, {
	        key: "getTreeLabel",
	        value: function getTreeLabel(data, label) {
	            if (data) {
	                if (data[label] instanceof Function) {
	                    return data[label]();
	                } else {
	                    return data[label];
	                }
	            } else {
	                return "";
	            }
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.data !== nextProps.data) {
	                this.setSessionStateFromTree(nextProps.data, nextProps.label, nextProps.nodes);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var nodeUI = _react2.default.createElement("div", null);
	            if (this.props.data) {
	                var nodesUI = [];
	                var nodes = this.settings.getNodes();
	                if (this.settings.open.value) {
	                    if (nodes.length > 0) {
	                        var treeNodes = this.getTreeNodes(this.props.data, this.props.nodes);
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
	                    var folderUI = _react2.default.createElement("span", { onClick: this.toggle }, _react2.default.createElement("i", { className: folderIcon, style: nodeIconStyleObject }), " ", this.settings.label.value);
	                    if (this.props.treeConfig.rightAlign.value) {
	                        folderUI = _react2.default.createElement("span", { onClick: this.toggle }, this.settings.label.value, " ", _react2.default.createElement("i", { className: folderIcon, style: nodeIconStyleObject }));
	                    }
	                    var nodePadding = this.props.treeConfig.nodePadding.value;
	                    nodeUI = _react2.default.createElement("span", { style: { backgroundColor: this.props.treeConfig.nodeColor.value } }, folderUI, _react2.default.createElement("ul", { style: { listStyleType: "none", paddingLeft: nodePadding } }, nodesUI));
	                } else {
	                    //leaf
	                    var leaf = this.settings.label.value;
	                    var fileIcon = this.props.treeConfig.getFileIcon(this.props.data);
	                    var fileIconStyle = this.props.treeConfig.getFileIconStyle();
	                    var activeLeafColor = this.settings.active.value ? "#000000" : "#9d9d9d";
	                    var leafStyleObj = { color: activeLeafColor, backgroundColor: this.props.treeConfig.leafColor.value };
	                    leafStyleObj = _Style2.default.mergeStyleObjects(leafStyleObj, this.props.treeConfig.leafBorder.state);
	                    if (fileIcon && fileIcon.indexOf("fa fa-") > -1) nodeUI = _react2.default.createElement("li", { style: leafStyleObj, onClick: this.toggle }, _react2.default.createElement("i", { className: fileIcon }), " ", leaf);else if (this.props.treeConfig.enableDataTypeIcon.value) nodeUI = _react2.default.createElement("li", { style: leafStyleObj, onClick: this.toggle }, _react2.default.createElement("span", { style: fileIconStyle }, fileIcon), " ", leaf);else nodeUI = _react2.default.createElement("li", { style: leafStyleObj, onClick: this.toggle }, " ", leaf);
	                }
	            }

	            return nodeUI;
	        }
	    }]);

	    return Node;
	}(_react2.default.Component);

	_App2.default.registerToolImplementation("weavereact.NodeConfig", Node);
	exports.default = Node;
	//# sourceMappingURL=data:application/json;base64,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QUFLSSxBQUFzRCxBQUFnQyxBQUMxRjttQ0FBZSxnQkFBQSxBQUFPLGtCQUFQLEFBQXlCLGNBQWEsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLFdBTjNFLEFBTUEsQUFBcUQsQUFBaUMsQUFDdEY7d0JBQUcsWUFBWSxTQUFBLEFBQVMsUUFBVCxBQUFpQixZQUFZLENBQUEsQUFBQyxHQUN6QyxTQUFTLHNDQUFJLE9BQUEsQUFBTyxjQUFjLFNBQVMsS0FBbEMsQUFBa0MsQUFBSyxVQUNwQyxxQ0FBRyxXQUROLEFBQ0csQUFBRyxBQUFXLGtCQUY5QixBQUNJLEFBQVMsQUFFVSxXQUVsQixJQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixtQkFBdEIsQUFBeUMsT0FDN0MsU0FBUyxzQ0FBSSxPQUFBLEFBQU8sY0FBYyxTQUFTLEtBQWxDLEFBQWtDLEFBQUssVUFDcEMsd0NBQU0sT0FBTixBQUFNLEFBQU8saUJBRGhCLEFBQ0csQUFBNkIsZ0JBRnhDLEFBQ0QsQUFBUyxBQUVVLFdBR25CLFNBQVMsc0NBQUksT0FBQSxBQUFPLGNBQWMsU0FBUyxLQUFsQyxBQUFrQyxBQUFLLGVBckQ1RCxBQWNJLEFBaUNTLEFBTUQsQUFBUyxBQUNVLEFBTW5DOzs7O21CQTlEUyxBQThEVCxBQUFTLE9BOURBLEFBQ0w7Ozs7V0FsRkY7RUFBYSxnQkFBQSxBQUFNOztBQW9KekIsY0FBQSxBQUFJLDJCQUFKLEFBQStCLHlCQUEvQixBQUF1RDtrQkFDeEMiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE5vZGVDb25maWcoKTtcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0VHJlZUxhYmVsID0gdGhpcy5nZXRUcmVlTGFiZWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uU3RhdGVGcm9tVHJlZSA9IHRoaXMuc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uU3RhdGVGcm9tVHJlZSh0aGlzLnByb3BzLmRhdGEsdGhpcy5wcm9wcy5sYWJlbCx0aGlzLnByb3BzLm5vZGVzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSAhdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpXG4gICAgfVxuXG5cbiAgICBzZXRTZXNzaW9uU3RhdGVGcm9tVHJlZShkYXRhLGxhYmVsLG5vZGVzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWUgPSB0aGlzLmdldFRyZWVMYWJlbChkYXRhLGxhYmVsKTtcbiAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzKGRhdGEsbm9kZXMpO1xuICAgICAgICBpZiAodHJlZU5vZGVzICYmIHRyZWVOb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdE5hbWUgPSBcIm5vZGVcIiArIGk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KG9iamVjdE5hbWUsIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRyZWVOb2RlcyhkYXRhLG5vZGVzKXtcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW25vZGVzXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtub2Rlc10oKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbm9kZXNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIFtdO1xuXG4gICAgfVxuXG4gICAgZ2V0VHJlZUxhYmVsKGRhdGEsbGFiZWwpe1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGFbbGFiZWxdIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2xhYmVsXSgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbGFiZWxdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUobmV4dFByb3BzLmRhdGEsbmV4dFByb3BzLmxhYmVsLG5leHRQcm9wcy5ub2Rlcyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG5vZGVVSSA9IDxkaXYvPjtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHZhciBub2Rlc1VJID0gW107XG4gICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpe1xuICAgICAgICAgICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXModGhpcy5wcm9wcy5kYXRhLHRoaXMucHJvcHMubm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBub2Rlcy5sZW5ndGggO2krKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJlZUl0ZW0gPSB0cmVlTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0KCBub2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1VJLnB1c2goPE5vZGUga2V5PXtpfSBkYXRhPXt0cmVlSXRlbX0gbGFiZWw9e3RoaXMucHJvcHMubGFiZWx9IG5vZGVzPXt0aGlzLnByb3BzLm5vZGVzfSB0cmVlQ29uZmlnPXt0aGlzLnByb3BzLnRyZWVDb25maWd9IHNldHRpbmdzPXtub2RlQ29uZmlnfSBjbGlja0NhbGxiYWNrPXt0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2t9Lz4pIDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7IC8vZm9sZGVyXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVJY29uU3R5bGVPYmplY3QgPSBTdHlsZXMuYXBwZW5kVmVuZG9yUHJlZml4KHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXROb2RlSWNvblN0eWxlKCkpO1xuICAgICAgICAgICAgICAgIHZhciBmb2xkZXJJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZvbGRlckljb24odGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGZvbGRlclVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmb2xkZXJJY29ufSBzdHlsZT17bm9kZUljb25TdHlsZU9iamVjdH0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3t0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5yaWdodEFsaWduLnZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgZm9sZGVyVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZX0mIzE2MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Zm9sZGVySWNvbn0gc3R5bGU9e25vZGVJY29uU3R5bGVPYmplY3R9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBub2RlUGFkZGluZyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy52YWx1ZTtcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8c3BhbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjp0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZUNvbG9yLnZhbHVlfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvbGRlclVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGU6XCJub25lXCIscGFkZGluZ0xlZnQ6bm9kZVBhZGRpbmd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNleyAvL2xlYWZcbiAgICAgICAgICAgICAgICB2YXIgbGVhZiA9IHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGVJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZpbGVJY29uKHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGVJY29uU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0RmlsZUljb25TdHlsZSgpO1xuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVMZWFmQ29sb3IgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZT9cIiMwMDAwMDBcIjpcIiM5ZDlkOWRcIjtcbiAgICAgICAgICAgICAgICB2YXIgbGVhZlN0eWxlT2JqID0ge2NvbG9yOmFjdGl2ZUxlYWZDb2xvcixiYWNrZ3JvdW5kQ29sb3I6dGhpcy5wcm9wcy50cmVlQ29uZmlnLmxlYWZDb2xvci52YWx1ZX1cbiAgICAgICAgICAgICAgICBsZWFmU3R5bGVPYmogPSBTdHlsZXMubWVyZ2VTdHlsZU9iamVjdHMobGVhZlN0eWxlT2JqLHRoaXMucHJvcHMudHJlZUNvbmZpZy5sZWFmQm9yZGVyLnN0YXRlKVxuICAgICAgICAgICAgICAgIGlmKGZpbGVJY29uICYmIGZpbGVJY29uLmluZGV4T2YoXCJmYSBmYS1cIikgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgbm9kZVVJID0gPGxpIHN0eWxlPXtsZWFmU3R5bGVPYmp9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzE2MDt7bGVhZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5lbmFibGVEYXRhVHlwZUljb24udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlT2JqfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtmaWxlSWNvblN0eWxlfT57ZmlsZUljb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzE2MDt7bGVhZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlT2JqfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3tsZWFmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIHJldHVybiAoIG5vZGVVSSk7XG4gICAgfVxuXG59XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==

/***/ },
/* 14 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxDQUFDLFVBQUEsQUFBVTs7YUFFUCxBQUFTOztlQUVMLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMxQjtxQkFBUyxBQUNMO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGVBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUVyRTs7O3VCQUNXLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFBWSxBQUNSLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDtBQUhZLEFBQ1I7b0JBRUksQUFDSjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxnQkFEdEQsQUFDSSxBQUFPLEFBQTBCLEFBQWlDLEFBRXRFOztzQkFBVSxBQUNOO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGdCQWI5RCxBQUFzQixBQUVsQixBQVVJLEFBQ0ksQUFBTyxBQUEwQixBQUFpQyxBQU05RTs7V0FuQnNCLEFBRWxCOzs7UUFpQkEsSUFBSSxXQXJCTyxBQXFCUCxBQUFXLEFBRW5COztNQUFBLEFBQUUsdUJBQXVCLEFBQ3JCO2VBQU8sS0FBQSxBQUFLLFNBeEJELEFBdUJGLEFBQVksQUFDckIsQUFBTyxBQUFjLEFBT3pCO0tBUmE7O01BUWIsQUFBRSxvQkFBb0IsQUFDbEI7YUFBQSxBQUFLLE1BQUwsQUFBVyxRQURPLEFBQ2xCLEFBQW1CLEFBQ25CO2FBQUEsQUFBSyxLQUFMLEFBQVUsUUFGUSxBQUVsQixBQUFrQixBQUNsQjthQUFBLEFBQUssU0FsQ00sQUErQkwsQUFBWSxBQUdsQixBQUFjO0tBSFI7OztBQS9CSyxBQUVmLFNBb0NBLENBQUEsQUFBTSxjQUFOLEFBQW9CLHlCQXRDTCxBQXNDZixBQUE2QyxBQUU3Qzs7V0FBQSxBQUFPLFVBeENWLEFBQWtCLEFBd0NmLEFBQWlCO0dBeENyQixBQUFDLEFBMENDIiwiZmlsZSI6Ik5vZGVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE5vZGVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKSAvLyBpbXBvcnRhbnQgdG8gYmUgcHJvdG90eXBlIGFzIHR5cGUgcmVzdHJpY3Rpb24gaXMgY29tcGFyZWQgd2l0aCBwcm90b3R5cGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHZhciBwID0gTm9kZUNvbmZpZy5wcm90b3R5cGU7XG5cbiAgICBwLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5nZXROYW1lcygpO1xuICAgIH1cblxuXG5cblxuXG4gICAgcC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICB9XG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lk5vZGVDb25maWcnLCBOb2RlQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTm9kZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _NodeConfig = __webpack_require__(14);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

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
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	            },
	            "rightAlign": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "nodePadding": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20px"))
	            },
	            "nodeColor": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            },
	            "leafColor": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            },
	            "leafBorder": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            rootNode: {
	                value: Weave.linkableChild(this, new _NodeConfig2.default())
	            }
	        });

	        this.activeNode = null;
	        this.dataTypesMap = null;
	        this.getDataType = null;

	        this.leafBorder.state = {
	            borderBottom: "1px solid #0369B1"
	        };
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
	        if (data) {
	            if (this.enableDataTypeIcon.value) {
	                var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
	                if (this.dataTypesMap && this.dataTypesMap[datType]) return this.dataTypesMap[datType];else return this.fileOpenIcon.value;
	            }
	            return "";
	        } else return "";
	    };

	    p.getFolderIcon = function (data, isOpen) {
	        if (data) {
	            var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
	            if (this.dataTypesMap && this.dataTypesMap[datType]) return this.dataTypesMap[datType];else return isOpen ? this.folderOpenIcon.value : this.folderIcon.value;
	        } else return "";
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
	})(module); /*import Weave from 'Weave';
	            import weavejs from 'weavejs';*/
	//# sourceMappingURL=data:application/json;base64,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d0JBekdPLEFBc0dNLEFBQVksQUFDN0IsQUFFSSxBQUFZO1VBSGEsQUFDN0I7S0FEaUI7OztBQXRHTixBQUVmLFNBZ0hBLENBQUEsQUFBTSxjQUFOLEFBQW9CLHlCQWxITCxBQWtIZixBQUE2QyxBQUU3Qzs7V0FBQSxBQUFPLFVBcEhWLEFBQWtCLEFBb0hmLEFBQWlCO0dBcEhyQixBQUFDLEFBc0hDIiwiZmlsZSI6IlRyZWVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFRyZWVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJmb2xkZXJJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZm9sZGVyXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZm9sZGVyT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1mb2xkZXItb3BlblwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZmlsZU9wZW5JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0LW9cIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVEYXRhVHlwZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibm9kZVBhZGRpbmdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMHB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibm9kZUNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZkNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZkJvcmRlclwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdE5vZGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBOb2RlQ29uZmlnKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YVR5cGVzTWFwID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZXREYXRhVHlwZSA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxlYWZCb3JkZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBib3JkZXJCb3R0b206XCIxcHggc29saWQgIzAzNjlCMVwiXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICB2YXIgcCA9IFRyZWVDb25maWcucHJvdG90eXBlO1xuXG5cblxuICAgIHAuY2hhbmdlQWN0aXZlTm9kZSA9IGZ1bmN0aW9uIChub2RlQ29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZU5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTm9kZS5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBub2RlQ29uZmlnO1xuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwLmdldEZpbGVJY29uID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZih0aGlzLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgdmFyIGRhdFR5cGUgPSB0aGlzLmdldERhdGFUeXBlID8gdGhpcy5nZXREYXRhVHlwZShkYXRhKSA6IGRhdGEuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhVHlwZXNNYXAgJiYgdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGVPcGVuSWNvbi52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9ZWxzZSBcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgfVxuXG4gICAgcC5nZXRGb2xkZXJJY29uID0gZnVuY3Rpb24gKGRhdGEsIGlzT3Blbikge1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhVHlwZXNNYXAgJiYgdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdO1xuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy5mb2xkZXJPcGVuSWNvbi52YWx1ZSA6IHRoaXMuZm9sZGVySWNvbi52YWx1ZTtcbiAgICAgICAgfWVsc2UgXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcblxuICAgIH1cblxuICAgIHAuZ2V0RmlsZUljb25TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzdmZDZmOVwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIzcHhcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjExcHhcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcC5nZXROb2RlSWNvblN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3I6IFwiIzdmZDZmOVwiLFxuICAgICAgICAgICAgdGV4dFNoYWRvdzogXCItMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrXCJcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5UcmVlQ29uZmlnJywgVHJlZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFRyZWVDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(10);

	var _Style2 = _interopRequireDefault(_Style);

	var _ModalConfig = __webpack_require__(17);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _ModalPanel = __webpack_require__(20);

	var _ModalPanel2 = _interopRequireDefault(_ModalPanel);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Modal = function (_React$Component) {
	    _inherits(Modal, _React$Component);

	    function Modal(props) {
	        _classCallCheck(this, Modal);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _ModalConfig2.default();
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
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                this.settings.open.removeCallback(this, this.forceUpdate);
	                this.settings.buttonIcon.removeCallback(this, this.forceUpdate);
	                this.settings = nextProps.settings;
	                this.settings.open.addImmediateCallback(this, this.forceUpdate);
	                this.settings.buttonIcon.addImmediateCallback(this, this.forceUpdate);
	            }
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
	                modalPanelUI = _react2.default.createElement(_ModalPanel2.default, { title: this.props.title, sessionOpen: this.settings.open, settings: this.settings.panelConfig }, this.props.children);
	            }

	            if (!this.props.keyPress) {
	                if (this.settings.buttonIcon.value) {
	                    modalButtonUI = _react2.default.createElement("span", { style: { cursor: "pointer" }, onClick: this.openModal }, _react2.default.createElement("i", { className: this.settings.buttonIcon.value }));
	                } else {
	                    modalButtonUI = _react2.default.createElement("span", { type: "button", className: "btn btn-primary", onClick: this.openModal }, "Open");
	                }
	            }
	            return _react2.default.createElement("span", null, modalButtonUI, _react2.default.createElement("div", { style: overlay }), _react2.default.createElement("div", { style: modal }, modalPanelUI));
	        }
	    }]);

	    return Modal;
	}(_react2.default.Component);

	exports.default = Modal;
	//# sourceMappingURL=data:application/json;base64,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Qix3Q0FBTSxNQUFBLEFBQUssVUFBUyxXQUFBLEFBQVUsbUJBQWtCLFNBQVMsS0FBekQsQUFBeUQsQUFBSyxhQUx0RixBQUNJLEFBR0ksQUFDQSxBQUlSOzs7bUJBQVEsNENBQUEsQUFDUyxlQUVELHVDQUFLLE9BSGIsQUFHUSxBQUFLLEFBQU8sWUFDWix1Q0FBSyxPQUFMLEFBQUssQUFBTyxTQXpCbkIsQUFxQlQsQUFBUSxBQUlRLEFBQ0s7Ozs7V0EvRG5CO0VBQWMsZ0JBQUEsQUFBTTs7a0JBc0VYIiwiZmlsZSI6Ik1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBNb2RhbENvbmZpZyBmcm9tIFwiLi9Nb2RhbENvbmZpZ1wiO1xuaW1wb3J0IE1vZGFsUGFuZWwgZnJvbSBcIi4vTW9kYWxQYW5lbFwiO1xuXG5cblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE1vZGFsQ29uZmlnKCk7XG4gICAgICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5idXR0b25JY29uLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgb3Blbk1vZGFsKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgIHZhciBpc09wZW4gPSB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgdmFyIG92ZXJsYXkgPSBTdHlsZS5vdmVybGF5Q29udGFpbmVyKGlzT3Blbik7XG4gICAgdmFyIG1vZGFsID0gU3R5bGUubW9kYWwoaXNPcGVuKTtcbiAgICB2YXIgbW9kYWxCdXR0b25VSSA9IFwiXCI7XG4gICAgdmFyIG1vZGFsUGFuZWxVSSA9IFwiXCI7XG4gICAgaWYoaXNPcGVuKXtcbiAgICAgICAgbW9kYWxQYW5lbFVJID0gPE1vZGFsUGFuZWwgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9ICBzZXNzaW9uT3Blbj17dGhpcy5zZXR0aW5ncy5vcGVufSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5wYW5lbENvbmZpZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsUGFuZWw+XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3BzLmtleVByZXNzKXtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnZhbHVlKXtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uVUkgPSA8c3BhbiBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT48aSBjbGFzc05hbWU9e3RoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi52YWx1ZX0+PC9pPjwvc3Bhbj47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uVUkgPSA8c3BhbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9Pk9wZW48L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuICg8c3BhbiA+XG4gICAgICAgICAgICAgICAgICAgIHttb2RhbEJ1dHRvblVJfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e292ZXJsYXl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGFsUGFuZWxVSX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdfQ==

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _ModalPanelConfig = __webpack_require__(18);

	var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxDQUFDLFVBQUEsQUFBVTs7YUFFUCxBQUFTOztlQUVMLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMxQjsyQkFBZSxBQUNYO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sdUJBRHJDLEFBQ0ksQUFBTyxBQUVYOztvQkFBUSxBQUNKO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGdCQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBaUMsQUFFdEU7OzBCQUFjLEFBQ1Y7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUFaL0MsQUFFZixBQUF1QixBQUVuQixBQU9JLEFBQ0ksQUFBTyxBQUEwQixBQUFnQzs7O1dBVnRELEFBRW5COzs7O0FBSlcsQUFFZixTQWtCQSxDQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFwQkwsQUFvQmYsQUFBOEMsQUFFOUM7O1dBQUEsQUFBTyxVQXRCVixBQUFrQixBQXNCZixBQUFpQjtHQXRCckIsQUFBQyxBQXdCQyIsImZpbGUiOiJNb2RhbENvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFdlYXZlIGZyb20gJ1dlYXZlJztcbmltcG9ydCB3ZWF2ZWpzIGZyb20gJ3dlYXZlanMnOyovXG5cbmltcG9ydCBNb2RhbFBhbmVsQ29uZmlnIGZyb20gXCIuL01vZGFsUGFuZWxDb25maWdcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE1vZGFsQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwicGFuZWxDb25maWdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBNb2RhbFBhbmVsQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJidXR0b25JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Nb2RhbENvbmZpZycsIE1vZGFsQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTW9kYWxDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _BorderConfig = __webpack_require__(19);

	var _BorderConfig2 = _interopRequireDefault(_BorderConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

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
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("0"))
	            },
	            "left": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
	            },
	            "top": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20%"))
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsUGFuZWxDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLENBQUMsVUFBQSxBQUFVOzthQUVQLEFBQVM7O2VBRUwsQUFBTyxpQkFBUCxBQUF3QixNQUFNLEFBQzFCO3NCQUFVLEFBQ047dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEscUNBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUVyQzs7cUJBQVMsQUFDTDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQVBsQyxBQUV4QixBQUlJLEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUt6RTs7O1dBWndCLEFBRXhCOztlQVVBLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMxQjtxQkFBUyxBQUNMO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGVBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUVyRTs7c0JBQVUsQUFDTjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBZ0MsQUFFckU7OzBCQUFjLEFBQ1Y7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUFEdEQsQUFDSSxBQUFPLEFBQTBCLEFBQWdDLEFBRXJFOzt5QkFBYSxBQUNUO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGVBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUVyRTs7b0JBQVEsQUFDSjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBZ0MsQUFFckU7O21CQUFPLEFBQ0g7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUE3QjlELEFBQTRCLEFBWXhCLEFBZ0JJLEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQVE3RTs7Ozs7O1FBQUksSUFBSSxpQkF2Q08sQUF1Q1AsQUFBaUIsQUFFekI7O01BQUEsQUFBRTtlQUNTLEFBQ0g7bUJBQU8sS0FBQSxBQUFLLElBQUwsQUFBUyxBQUNoQjtvQkFBUSxLQUFBLEFBQUssS0FBTCxBQUFVLEFBQ2xCO3lCQUFhLEtBQUEsQUFBSyxVQUFMLEFBQWUsQUFDNUI7MEJBQWMsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDOUI7cUJBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNwQjtzQkFBVSxLQUFBLEFBQUssT0FoRFIsQUF5Q0ksQUFBWSxBQUMzQixBQU1jLEFBQVk7VUFQQyxBQUMzQjtLQURlOzs7QUF6Q0osQUFFZixTQW1EQSxDQUFBLEFBQU0sY0FBTixBQUFvQiwrQkFyREwsQUFxRGYsQUFBbUQsQUFFbkQ7O1dBQUEsQUFBTyxVQXZEVixBQUFrQixBQXVEZixBQUFpQjtHQXZEckIsQUFBQyxBQXlEQyIsImZpbGUiOiJNb2RhbFBhbmVsQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyppbXBvcnQgV2VhdmUgZnJvbSAnV2VhdmUnO1xuaW1wb3J0IHdlYXZlanMgZnJvbSAnd2VhdmVqcyc7Ki9cbmltcG9ydCBCb3JkZXJDb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvQm9yZGVyQ29uZmlnXCI7XG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBNb2RhbFBhbmVsQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiYm9yZGVyXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlRHluYW1pY09iamVjdChCb3JkZXJDb25maWcpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ3aWR0aFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjYwJVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImhlaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjgwJVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCItMjAlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiMFwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxlZnRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCI0MCVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0b3BcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMCVcIikpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIHZhciBwID0gTW9kYWxQYW5lbENvbmZpZy5wcm90b3R5cGU7XG5cbiAgICBwLmdldExheW91dFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJ0b3BcIjogdGhpcy50b3AudmFsdWUsXG4gICAgICAgICAgICBcImxlZnRcIjogdGhpcy5sZWZ0LnZhbHVlLFxuICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogdGhpcy5tYXJnaW5Ub3AudmFsdWUsXG4gICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjogdGhpcy5tYXJnaW5MZWZ0LnZhbHVlLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiB0aGlzLndpZHRoLnZhbHVlLFxuICAgICAgICAgICAgXCJoZWlnaHRcIjogdGhpcy5oZWlnaHQudmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuTW9kYWxQYW5lbENvbmZpZycsIE1vZGFsUGFuZWxDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBNb2RhbFBhbmVsQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJvcmRlckNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsQ0FBQyxVQUFBLEFBQVU7O2FBRVAsQUFBUzs7ZUFFTCxBQUFPLGlCQUFQLEFBQXdCLE1BQU0sQUFDMUI7MkJBQWUsQUFDWDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBZ0MsQUFFckU7OzJCQUFlLEFBQ1g7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUFEdEQsQUFDSSxBQUFPLEFBQTBCLEFBQWdDLEFBRXJFOzs0QkFBZ0IsQUFDWjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBZ0MsQUFFckU7OzJCQUFlLEFBQ1g7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUFiOUQsQUFBd0IsQUFFcEIsQUFVSSxBQUNJLEFBQU8sQUFBMEIsQUFBZ0MsQUFNN0U7O1dBbkJ3QixBQUVwQjs7O1FBaUJBLElBQUksYUFyQk8sQUFxQlAsQUFBYSxBQUdyQjs7TUFBQSxBQUFFLDhCQUFvQixBQUFVLFlBQVksQUFDeEM7WUFBSSxDQUFBLEFBQUMsWUFBWSxhQUFhLENBQUEsQUFBQyxlQUFELEFBQWdCLGVBQWhCLEFBQStCLGdCQUE3RCxBQUFpQixBQUFhLEFBQStDLEFBQzdFO2VBQU8sY0FBQSxBQUFJLFlBQUosQUFBZ0IsTUExQlosQUF3Qk8sQUFBc0IsQUFFeEMsQUFBTyxBQUFzQixBQUdqQztLQUxzQixDQXhCUCxBQUVmOztVQTJCQSxBQUFNLGNBQU4sQUFBb0IsMkJBN0JMLEFBNkJmLEFBQStDLEFBRS9DOztXQUFBLEFBQU8sVUEvQlYsQUFBa0IsQUErQmYsQUFBaUI7R0EvQnJCLEFBQUMsQUFrQ0MiLCJmaWxlIjoiQm9yZGVyQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyppbXBvcnQgV2VhdmUgZnJvbSAnV2VhdmUnO1xuaW1wb3J0IHdlYXZlanMgZnJvbSAnd2VhdmVqcyc7Ki9cbmltcG9ydCBBcHAgZnJvbSBcIi4uL3V0aWxzL0FwcFwiO1xuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gQm9yZGVyQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiYm9yZGVyQ29sb3JcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoJyNiZWJlYmUnKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJvcmRlcldpZHRoXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCcxcHgnKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJvcmRlclJhZGl1c1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZygnNXB4JykpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJib3JkZXJTdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZygnc29saWQnKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICB2YXIgcCA9IEJvcmRlckNvbmZpZy5wcm90b3R5cGU7XG5cblxuICAgIHAuZ2V0Qm9yZGVyU3RhdGVGb3IgPSBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgICBpZiAoIXByb3BlcnRpZXMpIHByb3BlcnRpZXMgPSBbXCJib3JkZXJDb2xvclwiLCBcImJvcmRlcldpZHRoXCIsIFwiYm9yZGVyUmFkaXVzXCIsIFwiYm9yZGVyU3R5bGVcIl07XG4gICAgICAgIHJldHVybiBBcHAuZ2V0U3RhdGVGb3IodGhpcywgcHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Cb3JkZXJDb25maWcnLCBCb3JkZXJDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBCb3JkZXJDb25maWc7XG5cblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ModalPanelConfig = __webpack_require__(18);

	var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var ModalPanel = function (_React$Component) {
	    _inherits(ModalPanel, _React$Component);

	    function ModalPanel(props) {
	        _classCallCheck(this, ModalPanel);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalPanel).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _ModalPanelConfig2.default();
	        _this.settings.title.value = _this.props.title;
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
	            Weave.getCallbacks(this.settings).addImmediateCallback(this, this.updateState);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            Weave.getCallbacks(this.settings).removeCallback(this, this.updateState);
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
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                Weave.getCallbacks(this.settings).removeCallback(this, this.updateState);
	                this.settings = nextProps.settings;
	                Weave.getCallbacks(this.settings).addImmediateCallback(this, this.updateState);
	            }
	            if (this.props.title !== nextProps.title) {
	                this.settings.title.value = this.props.title;
	            }
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

	            layoutStyle["position"] = 'fixed';
	            this.sessionOpen.value ? layoutStyle["display"] = 'block' : layoutStyle["display"] = 'none';

	            return _react2.default.createElement("div", { style: layoutStyle }, _react2.default.createElement("div", { className: "modal-content" }, _react2.default.createElement("div", { className: "modal-header" }, _react2.default.createElement("button", { type: "button", className: "close", onClick: this.closeModal }, "×"), _react2.default.createElement("h4", { className: "modal-title" }, this.settings.title.value)), _react2.default.createElement("div", { className: "modal-body", style: bodyStyle }, this.props.children)));
	        }
	    }]);

	    return ModalPanel;
	}(_react2.default.Component);

	exports.default = ModalPanel;
	//# sourceMappingURL=data:application/json;base64,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LGlCQUFlLEtBQUEsQUFBSyxTQUFMLEFBQWMsTUFIbkQsQUFDSSxBQUVpQyxBQUFvQixTQUVyRCx1Q0FBSyxXQUFBLEFBQVUsY0FBYSxPQUE1QixBQUE0QixBQUFPLGFBQzlCLEtBQUEsQUFBSyxNQXJCakIsQUFjVCxBQUFRLEFBQ0ksQUFNUyxBQUFXOzs7O1dBL0Q5QjtFQUFtQixnQkFBQSxBQUFNOztrQkF1RWhCIiwiZmlsZSI6Ik1vZGFsUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsUGFuZWxDb25maWcgZnJvbSBcIi4vTW9kYWxQYW5lbENvbmZpZ1wiO1xuXG5cbmNsYXNzIE1vZGFsUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE1vZGFsUGFuZWxDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAgIHdpbmRvdy5tb2RhbExheW91dCA9IHRoaXMuc2V0dGluZ3M7Ly8gZm9yIHRlc3RpbmdcbiAgICAgICAgdGhpcy5zZXNzaW9uT3BlbiA9IHRoaXMucHJvcHMuc2Vzc2lvbk9wZW47XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0TGF5b3V0U3RhdGUoKTtcblxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwgPSAgdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUgPSAgdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0YXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0YXRlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc2V0dGluZ3MuZ2V0TGF5b3V0U3RhdGUoKSk7XG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbCgpe1xuICAgICAgICB0aGlzLnNlc3Npb25PcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMudXBkYXRlU3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMudGl0bGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAvL3dlIGNvdWxkIGhhdmUgdXNlZCB0aGlzLnN0YXRlLmxheW91dCwgYnV0IHN0eWxlIG9mIGRpdiB3aWxsIGdldCB0aGUgc2FtZSByZWZlcmVuY2UsIHdoaWNoIGlzIGRlcHJlY2F0ZWQgaW4gcmVhY3RcbiAgICB2YXIgbGF5b3V0U3R5bGUgPSB0aGlzLnNldHRpbmdzLmdldExheW91dFN0YXRlKCk7Ly8gdGhpcyB3aWxsIG1ha2Ugc3VyZSB3ZSBnZXQgbmV3IG9iamVjdCBldmVyeXRpbWVcblxuICAgIHZhciBib2R5U3R5bGUgPSB7XG4gICAgICAgIGhlaWdodDp0aGlzLnNldHRpbmdzLmhlaWdodC52YWx1ZSxcbiAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbidcbiAgICB9XG5cbiAgICBsYXlvdXRTdHlsZVtcInBvc2l0aW9uXCJdID0gJ2ZpeGVkJztcbiAgICAodGhpcy5zZXNzaW9uT3Blbi52YWx1ZSk/KGxheW91dFN0eWxlW1wiZGlzcGxheVwiXSA9ICdibG9jaycpOihsYXlvdXRTdHlsZVtcImRpc3BsYXlcIl0gPSAnbm9uZScpXG5cbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfT4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e2JvZHlTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsUGFuZWw7XG4iXX0=

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Style = __webpack_require__(10);

	var _Style2 = _interopRequireDefault(_Style);

	var _SplitPaneConfig = __webpack_require__(22);

	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

	var _Pane = __webpack_require__(24);

	var _Pane2 = _interopRequireDefault(_Pane);

	var _Resizer = __webpack_require__(25);

	var _Resizer2 = _interopRequireDefault(_Resizer);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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

	            return _react2.default.createElement("div", { className: classes.join(' '),
	                style: styleObj,
	                ref: "splitPane" }, _react2.default.createElement(_Pane2.default, { ref: "pane1",
	                key: "pane1",
	                split: split,
	                settings: this.settings.pane1 }, " ", children[0], " "), " ", _react2.default.createElement(_Resizer2.default, { ref: "resizer",
	                key: "resizer",
	                onMouseDown: this.onMouseDown,
	                split: split
	            }), " ", _react2.default.createElement(_Pane2.default, { ref: "pane2",
	                key: "pane2",
	                split: split,
	                settings: this.settings.pane2 }, " ", children[1], " "), " ");
	        }
	    }]);

	    return SplitPane;
	}(_react2.default.Component);

	SplitPane.defaultProps = {
	    minSize: 0,
	    split: "vertical"
	};

	exports.default = SplitPane;
	//# sourceMappingURL=data:application/json;base64,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dUJBQUEsQUFDSSxBQUVKO3FCQU5LLEFBTUwsQUFBTSxlQUNOLGdEQUFPLEtBQUEsQUFBTSxBQUNiO3FCQUFBLEFBQU0sQUFDTjt1QkFBQSxBQUNJLEFBRUo7MEJBQ0ksS0FBQSxBQUFLLFNBTlQsQUFNSSxBQUFjLGNBRWQsU0FSSixBQVFJLEFBQVMsSUFmUiw4REFnQmdCLEtBQUEsQUFBTSxBQUMzQjtxQkFBQSxBQUFNLEFBQ047NkJBQ0ksS0FBQSxBQUFLLEFBRVQ7dUJBckJLLEFBZ0JNLEFBS1gsQUFDSTthQU5PLENBaEJOLE9Bd0JGLGdEQUFPLEtBQUEsQUFBTSxBQUNoQjtxQkFBQSxBQUFNLEFBQ047dUJBQUEsQUFDSSxBQUVKOzBCQUNJLEtBQUEsQUFBSyxTQU5OLEFBTUMsQUFBYyxjQUVkLFNBUkQsQUFRQyxBQUFTLElBaENSLE1BdENKLEFBc0NMOzs7O1dBOUlGO0VBQWtCLGdCQUFBLEFBQU07O0FBb0w5QixVQUFBLEFBQVUsZUFBZSxBQUNyQjthQUFBLEFBQVMsQUFDVDtXQUZKLEFBRUksQUFBTzs7O2tCQUdJIiwiZmlsZSI6IlNwbGl0UGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IFNwbGl0UGFuZUNvbmZpZyBmcm9tIFwiLi9TcGxpdFBhbmVDb25maWdcIjtcbmltcG9ydCBQYW5lIGZyb20gJy4vUGFuZSc7XG5pbXBvcnQgUmVzaXplciBmcm9tICcuL1Jlc2l6ZXInO1xuXG4vL2NvZGUgbG9naWMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdG9ta3AvcmVhY3Qtc3BsaXQtcGFuZVxuXG5jbGFzcyBTcGxpdFBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3MgOiBuZXcgU3BsaXRQYW5lQ29uZmlnKCk7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudW5Gb2N1c0NvdW50LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMudW5Gb2N1cyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICBjb25zdCByZWYgPSB0aGlzLnJlZnMucGFuZTE7XG4gICAgICAgIGlmIChyZWYgJiYgdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZSAmJiAhdGhpcy5zZXR0aW5ncy5yZXNpemVkLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhbmUxLnNpemUudmFsdWUgPSB0aGlzLnByb3BzLmRlZmF1bHRTaXplO1xuICAgICAgICAgICAgLy9yZWYuc2V0U2Vzc2lvblN0YXRlKCB0aGlzLnByb3BzLmRlZmF1bHRTaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVuRm9jdXNDb3VudC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLnVuRm9jdXMpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICB9XG5cblxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy51cGRhdGVVbkZvY3VzKCk7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyBldmVudC5jbGllbnRYIDogZXZlbnQuY2xpZW50WTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnVwZGF0ZVVuRm9jdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMucmVmcy5wYW5lMTtcbiAgICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUocmVmKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyBldmVudC5jbGllbnRYIDogZXZlbnQuY2xpZW50WTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyB3aWR0aCA6IGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NpemUgPSBzaXplIC0gKHBvc2l0aW9uIC0gY3VycmVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmVzaXplZC52YWx1ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1NpemUgPj0gdGhpcy5wcm9wcy5taW5TaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhbmUxLnNpemUudmFsdWUgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwKCkge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ0ZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuRm9jdXMoKSB7IC8vIG5lZWQgdG8gYmUgY2FsbGVkIGNoYW5nZSBvZiBzZXNzaW9uIHZhbHVlIHNvIHRoYXQgd2UgY2FuIHNlZSB0aGVtIGluIHNlc3Npb24gTG9nXG4gICAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2l6ZWQucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy51bkZvY3VzQ291bnQucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy51bkZvY3VzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2l6ZWQuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnVuRm9jdXNDb3VudC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVuRm9jdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG5cbiAgICAgICAgbGV0IHN0eWxlT2JqID0gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIE1velVzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgIFdlYmtpdFVzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgIG1zVXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICAgICAgdXNlclNlbGVjdDogJ3RleHQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzcGxpdCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMoc3R5bGVPYmosIHtcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKHN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsnU3BsaXRQYW5lJywgc3BsaXRdO1xuXG4gICAgICAgIHJldHVybiAoIDwgZGl2IGNsYXNzTmFtZSA9IHtcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmpvaW4oJyAnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmpcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZiA9IFwic3BsaXRQYW5lXCIgPlxuICAgICAgICAgICAgPCBQYW5lIHJlZiA9IFwicGFuZTFcIlxuICAgICAgICAgICAga2V5ID0gXCJwYW5lMVwiXG4gICAgICAgICAgICBzcGxpdCA9IHtcbiAgICAgICAgICAgICAgICBzcGxpdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYW5lMVxuICAgICAgICAgICAgfSA+IHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXVxuICAgICAgICAgICAgfSA8IC9QYW5lPiA8IFJlc2l6ZXIgcmVmID0gXCJyZXNpemVyXCJcbiAgICAgICAgICAgIGtleSA9IFwicmVzaXplclwiXG4gICAgICAgICAgICBvbk1vdXNlRG93biA9IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGxpdCA9IHtcbiAgICAgICAgICAgICAgICBzcGxpdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz4gPCBQYW5lIHJlZiA9IFwicGFuZTJcIlxuICAgICAgICAgICAga2V5ID0gXCJwYW5lMlwiXG4gICAgICAgICAgICBzcGxpdCA9IHtcbiAgICAgICAgICAgICAgICBzcGxpdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYW5lMlxuICAgICAgICAgICAgfSA+IHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblsxXVxuICAgICAgICAgICAgfSA8IC9QYW5lPiA8IC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TcGxpdFBhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgIG1pblNpemU6IDAsXG4gICAgc3BsaXQ6IFwidmVydGljYWxcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BsaXRQYW5lO1xuIl19

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _PaneConfig = __webpack_require__(23);

	var _PaneConfig2 = _interopRequireDefault(_PaneConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwbGl0UGFuZUNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsQ0FBQyxVQUFBLEFBQVU7O2FBRVAsQUFBUzs7ZUFFTCxBQUFPLGlCQUFQLEFBQXdCLE1BQU0sQUFDMUI7c0JBQVUsQUFDTjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxnQkFEdEQsQUFDSSxBQUFPLEFBQTBCLEFBQWlDLEFBRXRFOzt1QkFBVyxBQUNQO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGdCQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBaUMsQUFFdEU7O3dCQUFZLEFBQ1I7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUFEdEQsQUFDSSxBQUFPLEFBQTBCLEFBQWdDLEFBRXJFOztxQkFBUyxBQUNMO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0saUJBRHJDLEFBQ0ksQUFBTyxBQUVYOztxQkFBUyxBQUNMO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0saUJBRHJDLEFBQ0ksQUFBTyxBQUVYOzs0QkFBZ0IsQUFDWjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQW5COUQsQUFBMkIsQUFFdkIsQUFnQkksQUFDSSxBQUFPLEFBQTBCLEFBQWdDLEFBUzdFOzs7V0E1QjJCLEFBRXZCOzs7UUEwQkEsSUFBSSxnQkE5Qk8sQUE4QlAsQUFBZ0IsQUFFeEI7O01BQUEsQUFBRSw0QkFBNEIsQUFDMUI7YUFBQSxBQUFLLGFBQUwsQUFBa0IsUUFBUSxLQUFBLEFBQUssYUFBTCxBQUFrQixRQWpDakMsQUFnQ0csQUFBWSxBQUNBLEFBQTBCO0tBRHRDOzs7QUFoQ0gsQUFFZixTQXNDQSxDQUFBLEFBQU0sY0FBTixBQUFvQiw4QkF4Q0wsQUF3Q2YsQUFBa0QsQUFFbEQ7O1dBQUEsQUFBTyxVQTFDVixBQUFrQixBQTBDZixBQUFpQjtHQTFDckIsQUFBQyxBQTRDQyIsImZpbGUiOiJTcGxpdFBhbmVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuaW1wb3J0IFBhbmVDb25maWcgZnJvbSBcIi4vUGFuZUNvbmZpZ1wiO1xuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gU3BsaXRQYW5lQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXNpemVkXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBhbmUxXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgUGFuZUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicGFuZTJcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBQYW5lQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1bkZvY3VzQ291bnRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoMCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG4gICAgdmFyIHAgPSBTcGxpdFBhbmVDb25maWcucHJvdG90eXBlO1xuXG4gICAgcC51cGRhdGVVbkZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuRm9jdXNDb3VudC52YWx1ZSA9IHRoaXMudW5Gb2N1c0NvdW50LnZhbHVlICsgMTtcbiAgICB9XG5cblxuXG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LlNwbGl0UGFuZUNvbmZpZycsIFNwbGl0UGFuZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFNwbGl0UGFuZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 23 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxDQUFDLFVBQUEsQUFBVTs7YUFFUCxBQUFTOztlQUVMLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUUxQjs7b0JBQVEsQUFDSjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQVAvQyxBQUVmLEFBQXNCLEFBRWxCLEFBRUksQUFDSSxBQUFPLEFBQTBCLEFBQWdDOzs7V0FMdkQsQUFFbEI7Ozs7QUFKVyxBQUVmLFNBZ0JBLENBQUEsQUFBTSxjQUFOLEFBQW9CLHlCQWxCTCxBQWtCZixBQUE2QyxBQUU3Qzs7V0FBQSxBQUFPLFVBcEJWLEFBQWtCLEFBb0JmLEFBQWlCO0dBcEJyQixBQUFDLEFBc0JDIiwiZmlsZSI6IlBhbmVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFBhbmVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAgICAgICBcInNpemVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LlBhbmVDb25maWcnLCBQYW5lQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gUGFuZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(10);

	var _Style2 = _interopRequireDefault(_Style);

	var _PaneConfig = __webpack_require__(23);

	var _PaneConfig2 = _interopRequireDefault(_PaneConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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

	            return _react2.default.createElement("div", { className: classes.join(' '), style: styleObj }, this.props.children);
	        }
	    }]);

	    return Pane;
	}(_react2.default.Component);

	exports.default = Pane;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07b0JBRUY7O2FBRkUsQUFFRixLQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQixpQkFFaUIsQUFDVCxBQUNOOztjQUFBLEFBQUssV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFTLGlCQUYzQyxBQUVDLEFBQ2hCO2NBQUEsQUFBSyxrQkFBa0IsTUFBQSxBQUFLLGdCQUFMLEFBQXFCLEtBSDdCLEFBR2Y7O0FBSGUsZUFBbkI7OztpQkFGRTs7NENBU2lCLEFBQ2Y7aUJBQUEsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQixxQkFBbkIsQUFBd0MsTUFBSyxLQUQ5QixBQUNmLEFBQTZDLEFBQUs7Ozs7K0NBSTlCLEFBQ3BCO2lCQUFBLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUIsZUFBbkIsQUFBa0MsTUFBSyxLQURuQixBQUNwQixBQUF1QyxBQUFLOzs7O3dDQUdoQztpQkFDWixBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLFFBREYsQUFDakIsQUFBMkIsS0FEVixBQUNqQjs7OztrREFHc0IsV0FBVSxBQUNoQztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWEsVUFBQSxBQUFVO3FCQUNqQyxBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLGVBQW5CLEFBQWtDLE1BQUssS0FERyxBQUMxQyxBQUF1QyxBQUFLLEFBQzVDO3FCQUFBLEFBQUssV0FBVyxVQUYwQixBQUUxQixBQUFVLEFBQzFCLFNBSDBDLEFBQzFDO3FCQUVBLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUIscUJBQW5CLEFBQXdDLE1BQUssS0FIakQsQUFBOEMsQUFHMUMsQUFBNkMsQUFBSzs7Ozs7OztnQkFNaEQsUUFBUSxLQUFBLEFBQUssTUFGZCxBQUVTLEFBQVcsQUFDekI7Z0JBQU0sVUFBVSxDQUFBLEFBQUMsUUFIWixBQUdDLEFBQVUsQUFBUyxBQUV6Qjs7MkNBQWUsQUFBTSxtQkFBbUIsQUFDcEM7c0JBQUEsQUFBTSxBQUNOOzBCQUFBLEFBQVUsQUFDVjt5QkFBQSxBQUFTLEFBQ1Q7MEJBVEMsQUFLRCxBQUFXLEFBSVgsQUFBVSxBQUtkO2FBVGUsQ0FBWCxDQUxDLEFBRUw7O2dCQVlJLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQjtvQkFDZixVQUFBLEFBQVUsWUFBWSxBQUN0Qjs2QkFBQSxBQUFTLFFBQVEsS0FBQSxBQUFLLFNBQUwsQUFBYyxLQURuQyxBQUEwQixBQUNMLEFBQW1CO3VCQUNqQyxBQUNIOzZCQUFBLEFBQVMsU0FBUyxLQUFBLEFBQUssU0FBTCxBQUFjLEtBRDdCLEFBQ2UsQUFBbUIsQUFDckM7NkJBQUEsQUFBUyxVQUpiLEFBRU8sQUFFSCxBQUFtQixBQUV2Qjs7eUJBQUEsQUFBUyxPQVBiLEFBQThCLEFBTzFCLEFBQWdCLEFBR3BCLE9BVjhCLEFBQzFCOzs7bUJBU0ksdUNBQUssV0FBVyxRQUFBLEFBQVEsS0FBbkIsQUFBVyxBQUFhLE1BQU0sT0FBbkMsQUFBbUMsQUFBTyxZQUNyQyxLQUFBLEFBQUssTUF6QmIsQUF3QkwsQUFDYSxBQUFXOzs7O1dBdkQxQjtFQUFhLGdCQUFBLEFBQU07O2tCQTZEViIsImZpbGUiOiJQYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBQYW5lQ29uZmlnIGZyb20gXCIuL1BhbmVDb25maWdcIjtcblxuLy9jb2RlIGxvZ2ljIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RvbWtwL3JlYWN0LXNwbGl0LXBhbmVcblxuY2xhc3MgUGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgUGFuZUNvbmZpZygpO1xuICAgICAgICB0aGlzLnNldFNlc3Npb25TdGF0ZSA9IHRoaXMuc2V0U2Vzc2lvblN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vdGhpcy5zdGF0ZSA9e307XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zaXplLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2l6ZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHNldFNlc3Npb25TdGF0ZShzaXplKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zaXplLnZhbHVlID0gc2l6ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNpemUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNpemUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbJ1BhbmUnLCBzcGxpdF07XG5cbiAgICAgICAgbGV0IHN0eWxlT2JqID0gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHtcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNpemUudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChzcGxpdCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqLndpZHRoID0gdGhpcy5zZXR0aW5ncy5zaXplLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZU9iai5oZWlnaHQgPSB0aGlzLnNldHRpbmdzLnNpemUudmFsdWU7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmouZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlT2JqLmZsZXggPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0gc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZTtcbiJdfQ==

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(10);

	var _Style2 = _interopRequireDefault(_Style);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlc2l6ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTTt1QkFFRjs7YUFGRSxBQUVGLFFBQUEsQUFBWTs4QkFGVixBQUVpQjs7MkVBRmpCLG9CQUVpQixBQUNULEFBQ047O2NBQUEsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBRnJCLEFBRWY7ZUFGSixNQUFtQjs7O2lCQUZqQjs7b0NBU1U7aUJBQ1IsQUFBSyxNQUFMLEFBQVcsWUFESSxBQUNmLEFBQXVCLE9BRFIsQUFDZjs7Ozs7K0JBSW1CLEFBQ2Y7MkJBQUEsQUFBVyxBQUNYOzRCQUFBLEFBQVcsQUFDWDt5QkFBQSxBQUFTLEFBQ1Q7d0JBQUEsQUFBUSxBQUNSO21DQUFBLEFBQW1CLEFBQ25CO3NDQUFBLEFBQXNCLEFBQ3RCO2dDQVJDLEFBQ0QsQUFPQSxBQUFnQixBQUdwQjthQVZJLENBREMsQUFDTDs7Z0JBVU0sUUFBUSxLQUFBLEFBQUssTUFYZCxBQVdTLEFBQVcsQUFDekI7Z0JBWkssQUFZTCxBQUFJLEFBQ0o7Z0JBQUcsVUFBQSxBQUFVOzZCQUNLLEFBQ1Y7NEJBQUEsQUFBUSxBQUNSOzRCQUFBLEFBQVEsQUFDUjsrQkFBQSxBQUFXLEFBQ1g7a0NBQUEsQUFBYyxBQUNkOzRCQUFBLEFBQVEsQUFDUjsyQkFQUixBQUEwQixBQUN0QixBQU1JLEFBQU87a0JBUFcsQUFDdEI7OzZCQVNhLEFBQ1Q7MkJBQUEsQUFBTyxBQUNQOzRCQUFBLEFBQVEsQUFDUjtnQ0FBQSxBQUFZLEFBQ1o7aUNBQUEsQUFBYSxBQUNiOzRCQUFBLEFBQVEsQUFDUjs0QkFoQlIsQUFTSyxBQUNELEFBTUksQUFBUSxBQUloQjtrQkFYSyxBQUNEOzs7NEJBVUosQUFBTSxrQkFBTixBQUF3QixjQUF4QixBQUFxQyxZQWpDaEMsQUFpQ0wsQUFBZ0QsQUFHaEQ7O21CQUFRLHdDQUFNLE9BQUEsQUFBTyxjQUFjLGFBQWEsS0FwQzNDLEFBb0NMLEFBQVEsQUFBd0MsQUFBSzs7OztXQWpEdkQ7RUFBZ0IsZ0JBQUEsQUFBTTs7a0JBcURiIiwiZmlsZSI6IlJlc2l6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuXG4vL2NvZGUgbG9naWMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdG9ta3AvcmVhY3Qtc3BsaXQtcGFuZVxuXG5jbGFzcyBSZXNpemVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB9XG5cblxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgcmVzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6XCIjMDAwXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiBcIi4yXCIsXG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgTW96QmFja2dyb3VuZENsaXA6IFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgV2Via2l0QmFja2dyb3VuZENsaXA6IFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG4gICAgICAgIHZhciBzcGxpdFN0eWxlO1xuICAgICAgICBpZihzcGxpdCA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgIHNwbGl0U3R5bGUgPSAge1xuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIi01cHggMFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcDogXCI1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCI1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJyb3ctcmVzaXplXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNwbGl0U3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTFweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIC01cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwiY29sLXJlc2l6ZVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhyZXNpemVyU3R5bGUsc3BsaXRTdHlsZSx0cnVlKTtcblxuXG4gICAgICAgIHJldHVybiAoPHNwYW4gc3R5bGU9e3Jlc2l6ZXJTdHlsZX0gb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259IC8+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpemVyO1xuIl19

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(10);

	var _Style2 = _interopRequireDefault(_Style);

	var _Brand = __webpack_require__(27);

	var _Brand2 = _interopRequireDefault(_Brand);

	var _List = __webpack_require__(28);

	var _List2 = _interopRequireDefault(_List);

	var _Form = __webpack_require__(30);

	var _Form2 = _interopRequireDefault(_Form);

	var _Link = __webpack_require__(29);

	var _Link2 = _interopRequireDefault(_Link);

	var _Config = __webpack_require__(31);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Navbar = function (_React$Component) {
	    _inherits(Navbar, _React$Component);

	    function Navbar(props) {
	        _classCallCheck(this, Navbar);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _Config.NavbarConfig();
	        _this.getStyle = _this.getStyle.bind(_this);
	        return _this;
	    }

	    _createClass(Navbar, [{
	        key: "getStyle",
	        value: function getStyle() {

	            var styleObject = this.settings.style.getStyleFor(null);
	            if (styleObject["position"] === "fixed") {
	                if (this.settings.dock.value === "top") {
	                    styleObject["top"] = "0";
	                } else if (this.settings.dock.value === "bottom") {
	                    styleObject["bottom"] = "0";
	                } else if (this.settings.dock.value === "right") {
	                    styleObject["right"] = "0";
	                    styleObject["flexDirection"] = "column";
	                    styleObject["width"] = "5%";
	                    styleObject["height"] = "100%";
	                } else if (this.settings.dock.value === "left") {
	                    styleObject["left"] = "0";
	                    styleObject["flexDirection"] = "column";
	                    styleObject["width"] = "5%";
	                    styleObject["height"] = "100%";
	                }
	            }
	            return _Style2.default.appendVendorPrefix(styleObject);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	            this.settings.CSS.addImmediateCallback(this, this.forceUpdate);
	            this.settings.useCSS.addImmediateCallback(this, this.forceUpdate);
	            this.settings.dock.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	            this.settings.CSS.removeCallback(this, this.forceUpdate);
	            this.settings.useCSS.removeCallback(this, this.forceUpdate);
	            this.settings.dock.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {}
	    }, {
	        key: "render",
	        value: function render() {

	            var styleObj = this.getStyle();
	            var pos = this.settings.style.position.value;
	            var dock = pos === "fixed" ? this.settings.dock.value : null;
	            var cssObj = null;
	            if (this.settings.useCSS.value) {
	                cssObj = this.settings.CSS.state;
	                var brandCSS = cssObj.brand;
	                var listCSS = cssObj.list;
	                var formCSS = cssObj.form;
	                return _react2.default.createElement("nav", { className: cssObj.navbar }, _react2.default.createElement(_Brand2.default, { css: brandCSS, useCSS: this.settings.useCSS.value, settings: this.settings.brand, dock: dock, position: pos }), _react2.default.createElement(_List2.default, { css: listCSS, useCSS: this.settings.useCSS.value, settings: this.settings.navList, dock: dock, position: pos }), _react2.default.createElement(_Form2.default, { css: formCSS, useCSS: this.settings.useCSS.value, settings: this.settings.form, dock: dock, position: pos }));
	            } else {
	                return _react2.default.createElement("nav", { style: styleObj }, _react2.default.createElement(_Brand2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.brand, dock: dock, position: pos }), _react2.default.createElement(_List2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.navList, dock: dock, position: pos }), _react2.default.createElement(_Form2.default, { useCSS: this.settings.useCSS.value, settings: this.settings.form, dock: dock, position: pos }));
	            }
	        }
	    }]);

	    return Navbar;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

	exports.default = Navbar;
	//# sourceMappingURL=data:application/json;base64,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QVU7bUJBR25ILEFBQ0Q7dUJBQ0ksdUNBQU8sT0FBUCxBQUFPLEFBQU8sWUFDVixpREFBTyxRQUFRLEtBQUEsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQixPQUFPLFVBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFPLE1BQUEsQUFBTSxNQUFNLFVBRDFGLEFBQ0ksQUFBc0YsQUFBVSxRQUNoRyxnREFBTyxRQUFRLEtBQUEsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQixPQUFPLFVBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUFTLE1BQUEsQUFBTSxNQUFNLFVBRjVGLEFBRUksQUFBd0YsQUFBVSxRQUNsRyxnREFBTyxRQUFRLEtBQUEsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQixPQUFPLFVBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUFNLE1BQUEsQUFBTSxNQUFNLFVBakJqRyxBQVlLLEFBQ0QsQUFDSSxBQUdJLEFBQXFGLEFBQVU7Ozs7O1dBNUU3RztFQUFlLGdCQUFBLEFBQU07O0FBMEYzQixNQUFBLEFBQU0sY0FBTixBQUFvQixxQkFBcEIsQUFBeUMsUUFBTyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBN0QsQUFBaUQsQUFBaUI7O2tCQUVuRCIsImZpbGUiOiJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQge05hdmJhckNvbmZpZ30gZnJvbSBcIi4vQ29uZmlnXCI7XG5cblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3MgOiBuZXcgTmF2YmFyQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuZ2V0U3R5bGUgPSB0aGlzLmdldFN0eWxlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgXG4gICAgIGdldFN0eWxlICAoKSB7XG4gICAgICAgICBcbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsKVxuICAgICAgICAgaWYoc3R5bGVPYmplY3RbXCJwb3NpdGlvblwiXSA9PT0gXCJmaXhlZFwiKXtcbiAgICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwidG9wXCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1widG9wXCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcImJvdHRvbVwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImJvdHRvbVwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJyaWdodFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcInJpZ2h0XCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCI1JVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG5cbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImxlZnRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuQ1NTLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudXNlQ1NTLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZG9jay5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLkNTUy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVzZUNTUy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRvY2sucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcblxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciBzdHlsZU9iaiA9IHRoaXMuZ2V0U3R5bGUoKTtcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMuc2V0dGluZ3Muc3R5bGUucG9zaXRpb24udmFsdWU7XG4gICAgICAgIHZhciBkb2NrID0gcG9zID09PSBcImZpeGVkXCI/dGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlOm51bGw7XG4gICAgICAgIHZhciBjc3NPYmogPSBudWxsO1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZSl7XG4gICAgICAgICAgICBjc3NPYmogPSB0aGlzLnNldHRpbmdzLkNTUy5zdGF0ZTtcbiAgICAgICAgICAgIHZhciBicmFuZENTUyA9IGNzc09iai5icmFuZDtcbiAgICAgICAgICAgIHZhciBsaXN0Q1NTID0gY3NzT2JqLmxpc3Q7XG4gICAgICAgICAgICB2YXIgZm9ybUNTUyA9IGNzc09iai5mb3JtO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y3NzT2JqLm5hdmJhcn0+XG4gICAgICAgICAgICAgICAgICAgIDxCcmFuZCBjc3M9e2JyYW5kQ1NTfSB1c2VDU1M9e3RoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5icmFuZH0gZG9jaz17ZG9ja30gcG9zaXRpb249e3Bvc30vPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBjc3M9e2xpc3RDU1N9IHVzZUNTUz17dGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWV9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLm5hdkxpc3R9IGRvY2s9e2RvY2t9IHBvc2l0aW9uPXtwb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY3NzPXtmb3JtQ1NTfSB1c2VDU1M9e3RoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5mb3JtfSBkb2NrPXtkb2NrfSBwb3NpdGlvbj17cG9zfS8+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiAgIHN0eWxlPXtzdHlsZU9ian0+XG4gICAgICAgICAgICAgICAgICAgIDxCcmFuZCB1c2VDU1M9e3RoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5icmFuZH0gZG9jaz17ZG9ja30gcG9zaXRpb249e3Bvc30vPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCAgdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MubmF2TGlzdH0gZG9jaz17ZG9ja30gcG9zaXRpb249e3Bvc30vPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSAgdXNlQ1NTPXt0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MuZm9ybX0gZG9jaz17ZG9ja30gcG9zaXRpb249e3Bvc30vPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApO1xuXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG59XG5cblxuXG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lk5hdmJhclwiLCBOYXZiYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cblxuXG5cbiJdfQ==

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Brand = function (_React$Component) {
	    _inherits(Brand, _React$Component);

	    function Brand(props) {
	        _classCallCheck(this, Brand);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Brand).call(this, props));

	        _this.settings = _this.props.settings;
	        _this.langSettings = _this.props && _this.props.langSettings ? _this.props.langSettings : null;
	        return _this;
	    }

	    _createClass(Brand, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
	            this.settings.title.addImmediateCallback(this, this.forceUpdate);
	            this.settings.logoPath.addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.logoStyle).addImmediateCallback(this, this.forceUpdate);
	            if (this.langSettings) this.langSettings.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            this.settings.title.removeCallback(this, this.forceUpdate);
	            this.settings.logoPath.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.logoStyle).removeCallback(this, this.forceUpdate);
	            if (this.langSettings) this.langSettings.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            if (this.props.positionType !== nextProps.positionType) {
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
	        key: "render",
	        value: function render() {
	            var BrandUI = _react2.default.createElement("div", null);

	            if (this.settings.enable.value) {
	                var title = this.settings.title.value;

	                if (this.langSettings) {
	                    title = App.getTranslatedWord(this.settings.title.value);
	                }
	                var logoUI = "";
	                if (this.settings.logoPath.value) {
	                    var logoStyle = this.settings.logoStyle.getStyleFor();
	                    logoUI = _react2.default.createElement("img", { style: logoStyle, alt: title, src: this.settings.logoPath.value });
	                }
	                if (this.props.useCSS) {
	                    var headerCSS = this.props.css.header;
	                    var titleCSS = this.props.css.title;

	                    BrandUI = _react2.default.createElement("div", { className: headerCSS }, _react2.default.createElement("div", { className: titleCSS }, logoUI, title));
	                } else {
	                    BrandUI = _react2.default.createElement("div", null, logoUI, title);
	                }
	            }
	            return BrandUI;
	        }
	    }]);

	    return Brand;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.Brand", Brand, [weavejs.api.core.ILinkableObject]);
	exports.default = Brand;
	//# sourceMappingURL=data:application/json;base64,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QXVCLE9BQU0sQUFDNUI7d0JBQUksWUFBWSxLQUFBLEFBQUssU0FBTCxBQUFjLFVBREYsQUFDeEIsQUFBWSxBQUF3QixBQUN4Qzs2QkFBUyx1Q0FBSyxPQUFBLEFBQU8sV0FBVyxLQUFBLEFBQUssT0FBTyxLQUFLLEtBQUEsQUFBSyxTQUFMLEFBQWMsU0FGbkUsQUFBZ0MsQUFFNUIsQUFBUyxBQUF3QyxBQUF1QixBQUU1RTs7b0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFPLEFBQ2pCO3dCQUFJLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxJQURWLEFBQ0QsQUFBZSxBQUMvQjt3QkFBSSxXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFGVCxBQUVGLEFBQWUsQUFFOUI7OzhCQUFVLHVDQUFLLFdBQUwsQUFBSyxBQUFXLGFBQ2QsdUNBQUssV0FBTCxBQUFLLEFBQVcsWUFBaEIsQUFDSyxRQU5yQixBQUFxQixBQUlqQixBQUFVLEFBQ0UsQUFFSzt1QkFLaEIsQUFDRDs4QkFBVSwyQ0FBQSxBQUNHLFFBMUJyQixBQVlJLEFBWUssQUFDRCxBQUFVLEFBRUcsQUFLckI7OzttQkFuQ0ssQUFtQ0wsQUFBUSxRQW5DSCxBQUNMOzs7O1dBdENGO0VBQWMsZ0JBQUEsQUFBTTs7QUEyRTFCLE1BQUEsQUFBTSxjQUFOLEFBQW9CLDJCQUFwQixBQUErQyxPQUFNLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFsRSxBQUFzRCxBQUFpQjtrQkFDeEQiLCJmaWxlIjoiQnJhbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEJyYW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG4gICAgICAgIHRoaXMubGFuZ1NldHRpbmdzID0gKHRoaXMucHJvcHMgJiYgdGhpcy5wcm9wcy5sYW5nU2V0dGluZ3MpP3RoaXMucHJvcHMubGFuZ1NldHRpbmdzOm51bGw7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxvZ29QYXRoLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmxvZ29TdHlsZSkuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3MpdGhpcy5sYW5nU2V0dGluZ3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxvZ29QYXRoLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmxvZ29TdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3MpdGhpcy5sYW5nU2V0dGluZ3MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wb3NpdGlvblR5cGUgIT09IG5leHRQcm9wcy5wb3NpdGlvblR5cGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgQnJhbmRVSSA9IDxkaXYvPjtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlO1xuXG5cbiAgICAgICAgICAgIGlmKHRoaXMubGFuZ1NldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IEFwcC5nZXRUcmFuc2xhdGVkV29yZCh0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsb2dvVUkgPSBcIlwiO1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5sb2dvUGF0aC52YWx1ZSl7XG4gICAgICAgICAgICAgICAgdmFyIGxvZ29TdHlsZSA9IHRoaXMuc2V0dGluZ3MubG9nb1N0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgICAgICAgICAgbG9nb1VJID0gPGltZyBzdHlsZT17bG9nb1N0eWxlfSBhbHQ9e3RpdGxlfSBzcmM9e3RoaXMuc2V0dGluZ3MubG9nb1BhdGgudmFsdWV9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZGVyQ1NTID0gdGhpcy5wcm9wcy5jc3MuaGVhZGVyO1xuICAgICAgICAgICAgICAgIHZhciB0aXRsZUNTUyA9IHRoaXMucHJvcHMuY3NzLnRpdGxlXG5cbiAgICAgICAgICAgICAgICBCcmFuZFVJID0gPGRpdiBjbGFzc05hbWU9e2hlYWRlckNTU30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpdGxlQ1NTfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ29VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIEJyYW5kVUkgPSA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dvVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChCcmFuZFVJKTtcbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuQnJhbmRcIiwgQnJhbmQsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBCcmFuZDtcbiJdfQ==

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(10);

	var _Style2 = _interopRequireDefault(_Style);

	var _Link = __webpack_require__(29);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var List = function (_React$Component) {
	    _inherits(List, _React$Component);

	    function List(props) {
	        _classCallCheck(this, List);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));

	        _this.settings = _this.props.settings;

	        return _this;
	    }

	    _createClass(List, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	            this.settings.space.addImmediateCallback(this, this.forceUpdate);
	            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
	            this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
	            this.settings.links.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	            this.settings.space.removeCallback(this, this.forceUpdate);
	            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
	            this.settings.activePage.removeCallback(this, this.forceUpdate);
	            this.settings.links.childListCallbacks.removeCallback(this, this.forceUpdate);
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
	        key: "render",
	        value: function render() {
	            var navLinks = _react2.default.createElement("div", null);

	            if (this.settings.enable.value) {
	                if (!this.props.useCSS) {
	                    var styleObject = this.settings.style.getStyleFor(null);
	                    if (this.props.dock !== "right" && this.props.dock !== "left" && this.settings.rightAlign) {
	                        styleObject["justifyContent"] = "flex-end";
	                        styleObject["marginRight"] = "auto";
	                    }
	                    styleObject = _Style2.default.appendVendorPrefix(styleObject);
	                }
	                var linkStyleObject = {};
	                var iconOnly = false;
	                var space = this.settings.space.value;
	                if (this.props.dock === "right" || this.props.dock === "left") {
	                    iconOnly = true;
	                    linkStyleObject["marginBottom"] = space;
	                } else if (this.props.dock === "top" || this.props.dock === "bottom") {
	                    iconOnly = false;
	                    linkStyleObject["marginRight"] = space;
	                }

	                var links = this.settings.links.getNames().map(function (linkName, index) {

	                    //var linkablePlaceHolder = this.links.getObject(linkName);
	                    //var ToolClass = linkablePlaceHolder.getClass();
	                    var linkConfig = this.settings.links.getObject(linkName);

	                    if (linkName === this.settings.activePage.value) {
	                        return _react2.default.createElement(_Link2.default, { style: linkStyleObject, key: index, iconOnly: iconOnly, isActive: true, pageName: linkName, settings: linkConfig });
	                    } else {
	                        return _react2.default.createElement(_Link2.default, { style: linkStyleObject, key: index, iconOnly: iconOnly, isActive: false, pageName: linkName, settings: linkConfig });
	                    }
	                }.bind(this));

	                styleObject = _Style2.default.appendVendorPrefix(styleObject);
	                if (this.props.useCSS) navLinks = _react2.default.createElement("ul", { className: this.props.css }, links);else navLinks = _react2.default.createElement("ul", { style: styleObject }, links);
	            }

	            return navLinks;
	        }
	    }]);

	    return List;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.List", List, [weavejs.api.core.ILinkableObject]);
	exports.default = List;
	//# sourceMappingURL=data:application/json;base64,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QUFNLFVBQUEsQUFBVSxVQUFVLFVBRDlHLEFBQWdELEFBQzVDLEFBQVEsQUFBa0csQUFBVTsyQkFFcEgsQUFDQTsrQkFBUSxnREFBTSxPQUFBLEFBQU8saUJBQWlCLEtBQUEsQUFBSyxPQUFPLFVBQUEsQUFBVSxVQUFVLFVBQUEsQUFBVSxPQUFPLFVBQUEsQUFBVSxVQUFVLFVBVnBFLEFBTTNDLEFBR0ksQUFDQSxBQUFRLEFBQW1HLEFBQVU7O2lCQVY5RSxDQUFBLEFBWTdDLEtBakN3QixBQXFCdEIsQUFBUSxBQUFtQyxBQVl4QyxBQUVQLE9BbkMwQixBQUMxQjs7OEJBa0NjLGdCQUFBLEFBQU0sbUJBbkNNLEFBbUMxQixBQUFjLEFBQXlCLEFBQ3ZDO29CQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFDVixXQUFXLHNDQUFJLFdBQVcsS0FBQSxBQUFLLE1BQXBCLEFBQWUsQUFBVyxPQUR6QyxBQUNJLEFBQVcsQUFBZ0MsWUFFM0MsV0FBVyxzQ0FBSSxPQUFKLEFBQUksQUFBTyxlQXZDOUIsQUFvQ0ksQUFHSSxBQUFXLEFBQXlCLEFBRzVDOzs7bUJBN0NLLEFBNkNMLEFBQVEsU0E3Q0gsQUFDTDs7OztXQTFDRjtFQUFhLGdCQUFBLEFBQU07O0FBMEZ6QixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsTUFBSyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBaEUsQUFBb0QsQUFBaUI7a0JBQ3REIiwiZmlsZSI6Ikxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuXG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGlua3MuY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNwYWNlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5saW5rcy5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jayAhPT0gbmV4dFByb3BzLmRvY2spe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbmF2TGlua3MgPSA8ZGl2Lz47XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgaWYoIXRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwpXG4gICAgICAgICAgICAgICAgaWYoKHRoaXMucHJvcHMuZG9jayAhPT0gXCJyaWdodFwiKSAmJiAodGhpcy5wcm9wcy5kb2NrICE9PSBcImxlZnRcIikgJiYgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduKXtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJqdXN0aWZ5Q29udGVudFwiXSA9IFwiZmxleC1lbmRcIjtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdCA9IFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGlua1N0eWxlT2JqZWN0PXt9O1xuICAgICAgICAgICAgdmFyIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgc3BhY2UgPSB0aGlzLnNldHRpbmdzLnNwYWNlLnZhbHVlO1xuICAgICAgICAgICAgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJyaWdodFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImxlZnRcIikpe1xuICAgICAgICAgICAgICAgIGljb25Pbmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJ0b3BcIikgfHwgKHRoaXMucHJvcHMuZG9jayA9PT0gXCJib3R0b21cIikpe1xuICAgICAgICAgICAgICAgIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGlua1N0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBzcGFjZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxpbmtzID0gdGhpcy5zZXR0aW5ncy5saW5rcy5nZXROYW1lcygpLm1hcChmdW5jdGlvbihsaW5rTmFtZSxpbmRleCl7XG5cbiAgICAgICAgICAgICAgICAvL3ZhciBsaW5rYWJsZVBsYWNlSG9sZGVyID0gdGhpcy5saW5rcy5nZXRPYmplY3QobGlua05hbWUpO1xuICAgICAgICAgICAgICAgIC8vdmFyIFRvb2xDbGFzcyA9IGxpbmthYmxlUGxhY2VIb2xkZXIuZ2V0Q2xhc3MoKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlua0NvbmZpZyA9IHRoaXMuc2V0dGluZ3MubGlua3MuZ2V0T2JqZWN0KGxpbmtOYW1lKTtcblxuICAgICAgICAgICAgICAgIGlmKGxpbmtOYW1lID09PSB0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8TGluayBzdHlsZT17bGlua1N0eWxlT2JqZWN0fSBrZXk9e2luZGV4fSBpY29uT25seT17aWNvbk9ubHl9IGlzQWN0aXZlPXt0cnVlfSBwYWdlTmFtZT17bGlua05hbWV9IHNldHRpbmdzPXtsaW5rQ29uZmlnfSAvPik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPExpbmsgc3R5bGU9e2xpbmtTdHlsZU9iamVjdH0ga2V5PXtpbmRleH0gaWNvbk9ubHk9e2ljb25Pbmx5fSBpc0FjdGl2ZT17ZmFsc2V9IHBhZ2VOYW1lPXtsaW5rTmFtZX0gc2V0dGluZ3M9e2xpbmtDb25maWd9Lz4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIHN0eWxlT2JqZWN0ID0gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlT2JqZWN0KTtcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKVxuICAgICAgICAgICAgICAgIG5hdkxpbmtzID0gPHVsIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jc3N9PntsaW5rc308L3VsPjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBzdHlsZT17c3R5bGVPYmplY3R9PntsaW5rc308L3VsPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAobmF2TGlua3MpO1xuICAgIH1cblxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QubmF2YmFyLkxpc3RcIiwgTGlzdCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXX0=

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Link = function (_React$Component) {
	    _inherits(Link, _React$Component);

	    function Link(props) {
	        _classCallCheck(this, Link);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this, props));

	        _this.settings = _this.props.settings;

	        return _this;
	    }

	    _createClass(Link, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.settings.title.addImmediateCallback(this, this.forceUpdate);
	            this.settings.iconName.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.title.removeCallback(this, this.forceUpdate);
	            this.settings.iconName.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            return true;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var title = this.settings.title.value;
	            if (this.props.iconOnly) {
	                title = "";
	            }
	            if (this.props.isActive) {

	                return _react2.default.createElement("li", { style: this.props.style }, _react2.default.createElement("a", { href: '#' + this.props.pageName }, _react2.default.createElement("i", { className: this.settings.iconName.value }, " "), title));
	            } else {
	                return _react2.default.createElement("li", { style: this.props.style }, _react2.default.createElement("a", { href: '#' + this.props.pageName }, _react2.default.createElement("i", { className: this.settings.iconName.value }, " "), title));
	            }
	        }
	    }]);

	    return Link;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.Link", Link, [weavejs.api.core.ILinkableObject]);
	exports.default = Link;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTTtvQkFFRjs7YUFGRSxBQUVGLEtBQUEsQUFBWTs4QkFGVixBQUVpQjs7MkVBRmpCLGlCQUVpQixBQUNULEFBQ047O2NBQUEsQUFBSyxXQUFXLE1BQUEsQUFBSyxNQUZOLEFBRUMsQUFBVzs7ZUFGL0IsTUFBbUI7OztpQkFGakI7OzRDQVNrQixBQUNoQjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLHFCQUFwQixBQUF5QyxNQUFNLEtBRC9CLEFBQ2hCLEFBQStDLEFBQUssQUFDcEQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsU0FBZCxBQUF1QixxQkFBdkIsQUFBNEMsTUFBTSxLQUZsQyxBQUVoQixBQUFrRCxBQUFLOzs7OytDQUlwQyxBQUNuQjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLGVBQXBCLEFBQW1DLE1BQU0sS0FEdEIsQUFDbkIsQUFBeUMsQUFBSyxBQUM5QztpQkFBQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCLGVBQXZCLEFBQXNDLE1BQU0sS0FGekIsQUFFbkIsQUFBNEMsQUFBSzs7OztrREFHM0IsV0FBVTs7OzhDQUlkO21CQUFVLEFBQzVCLEFBQU8sS0FEcUIsQUFDNUI7Ozs7aUNBSUssQUFDTDtnQkFBSSxRQUFRLEtBQUEsQUFBSyxTQUFMLEFBQWMsTUFEckIsQUFDTyxBQUFvQixBQUNoQztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXO3dCQUFkLEFBQXVCLEFBQ25CLEFBQVEsQUFFWixHQUh1QixBQUNuQjs7Z0JBRUEsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLEFBRXJCOzt1QkFBUyxzQ0FBSSxPQUFPLEtBQUEsQUFBSyxNQUFoQixBQUFXLEFBQVcsU0FDbkIscUNBQUcsTUFBUSxNQUFNLEtBQUEsQUFBSyxNQUF0QixBQUFpQixBQUFXLFlBQ3hCLHFDQUFHLFdBQWEsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUE5QixBQUFnQixBQUF1QixTQUQzQyxNQUhoQixBQUF5QixBQUVyQixBQUFTLEFBQ0csQUFFSzttQkFJZCxBQUNIO3VCQUFRLHNDQUFJLE9BQU8sS0FBQSxBQUFLLE1BQWhCLEFBQVcsQUFBVyxTQUNsQixxQ0FBRyxNQUFRLE1BQU0sS0FBQSxBQUFLLE1BQXRCLEFBQWlCLEFBQVcsWUFDeEIscUNBQUcsV0FBYSxLQUFBLEFBQUssU0FBTCxBQUFjLFNBQTlCLEFBQWdCLEFBQXVCLFNBRDNDLE1BWGhCLEFBU08sQUFDSCxBQUFRLEFBQ0ksQUFFSzs7Ozs7V0EvQ3ZCO0VBQWEsZ0JBQUEsQUFBTTs7QUFzRHpCLE1BQUEsQUFBTSxjQUFOLEFBQW9CLDBCQUFwQixBQUE4QyxNQUFLLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFoRSxBQUFvRCxBQUFpQjtrQkFDdEQiLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuXG4gICAgfVxuXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcblxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pY29uT25seSl7XG4gICAgICAgICAgICB0aXRsZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcblxuICAgICAgICAgICAgcmV0dXJuICggPGxpIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWYgPSB7JyMnICsgdGhpcy5wcm9wcy5wYWdlTmFtZSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDxsaSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmID0geycjJyArIHRoaXMucHJvcHMucGFnZU5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTGlua1wiLCBMaW5rLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdfQ==

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(10);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Form = function (_React$Component) {
	    _inherits(Form, _React$Component);

	    function Form(props) {
	        _classCallCheck(this, Form);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

	        _this.settings = _this.props.settings;
	        return _this;
	    }

	    _createClass(Form, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
	            this.settings.space.addImmediateCallback(this, this.forceUpdate);
	            this.settings.controllers.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
	            this.settings.space.removeCallback(this, this.forceUpdate);
	            this.settings.controllers.childListCallbacks.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            if (this.props.positionType !== nextProps.positionType) {
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
	        key: "render",
	        value: function render() {
	            var navFormUI = _react2.default.createElement("div", null);
	            if (this.settings.enable.value) {
	                if (!this.props.useCSS) {
	                    var iconOnly = false;
	                    var styleObject = this.settings.style.getStyleFor(null);
	                    if (this.props.dock !== "right" && this.props.dock !== "left" && this.settings.rightAlign) {
	                        styleObject["justifyContent"] = "flex-end";
	                        styleObject["marginRight"] = "auto";
	                    }
	                    styleObject = _Style2.default.appendVendorPrefix(styleObject);
	                }
	                var childStyleObject = {};
	                var mode = "large";
	                var space = this.settings.space.value;

	                if (this.props.dock === "right" || this.props.dock === "left") {
	                    mode = "small";
	                    childStyleObject["marginBottom"] = space;
	                } else if (this.props.dock === "top" || this.props.dock === "bottom") {
	                    mode = "large";
	                    childStyleObject["marginRight"] = space;
	                }

	                var controllersUI = this.settings.controllers.getNames().map(function (controllerName, index) {
	                    var formConfig = this.settings.controllers.getObject(controllerName);
	                    var ToolClass = _App2.default.getToolImplementation(Weave.getPath(formConfig).getType());
	                    return _react2.default.createElement("span", { key: index, style: childStyleObject }, _react2.default.createElement(ToolClass, { device: mode, settings: formConfig }));
	                }.bind(this));

	                if (this.props.useCSS) {
	                    navFormUI = _react2.default.createElement("div", { className: this.props.css }, controllersUI);
	                } else {
	                    navFormUI = _react2.default.createElement("div", { style: styleObject }, controllersUI);
	                }
	            }

	            return navFormUI;
	        }
	    }]);

	    return Form;
	}(_react2.default.Component);

	Weave.registerClass('weavereact.navbar.Form', Form, [weavejs.api.core.ILinkableObject]);

	exports.default = Form;
	//# sourceMappingURL=data:application/json;base64,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QUl0RCxBQUVQLEtBTm9CLEVBeEJNLEFBQzFCOztvQkE2QkcsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFPLEFBQ2pCO2dDQUFZLHVDQUFNLFdBQVcsS0FBQSxBQUFLLE1BQXRCLEFBQWlCLEFBQVcsT0FENUMsQUFBcUIsQUFDakIsQUFBWSxBQUNLO3VCQUVoQixBQUNGO2dDQUFZLHVDQUFNLE9BQU4sQUFBTSxBQUFPLGVBbkNoQyxBQThCSSxBQUlLLEFBQ0YsQUFBWSxBQUNNLEFBT3pCOzs7O21CQTdDSyxBQTZDTCxBQUFRLFVBN0NILEFBQ0w7Ozs7V0FwQ0Y7RUFBYSxnQkFBQSxBQUFNOztBQXFGekIsTUFBQSxBQUFNLGNBQU4sQUFBb0IsMEJBQXBCLEFBQThDLE1BQUssQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQWhFLEFBQW9ELEFBQWlCOztrQkFFdEQiLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY29udHJvbGxlcnMuY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY29udHJvbGxlcnMuY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnBvc2l0aW9uVHlwZSAhPT0gbmV4dFByb3BzLnBvc2l0aW9uVHlwZSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51c2VDU1MgIT09IG5leHRQcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBuYXZGb3JtVUkgPSA8ZGl2Lz47XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIGlmKCF0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICAgICAgdmFyIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsKTtcbiAgICAgICAgICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrICE9PSBcInJpZ2h0XCIpICYmICh0aGlzLnByb3BzLmRvY2sgIT09IFwibGVmdFwiKSAmJiB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24pe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImp1c3RpZnlDb250ZW50XCJdID0gXCJmbGV4LWVuZFwiO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcIm1hcmdpblJpZ2h0XCJdID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0ID0gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlT2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGlsZFN0eWxlT2JqZWN0PXt9O1xuICAgICAgICAgICAgdmFyIG1vZGUgPSBcImxhcmdlXCI7XG4gICAgICAgICAgICB2YXIgc3BhY2UgPSB0aGlzLnNldHRpbmdzLnNwYWNlLnZhbHVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInJpZ2h0XCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwibGVmdFwiKSl7XG4gICAgICAgICAgICAgICAgbW9kZSA9IFwic21hbGxcIjtcbiAgICAgICAgICAgICAgICBjaGlsZFN0eWxlT2JqZWN0W1wibWFyZ2luQm90dG9tXCJdID0gc3BhY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwidG9wXCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwiYm90dG9tXCIpKXtcbiAgICAgICAgICAgICAgICBtb2RlID0gXCJsYXJnZVwiO1xuICAgICAgICAgICAgICAgIGNoaWxkU3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IHNwYWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyc1VJID0gdGhpcy5zZXR0aW5ncy5jb250cm9sbGVycy5nZXROYW1lcygpLm1hcChmdW5jdGlvbihjb250cm9sbGVyTmFtZSxpbmRleCl7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1Db25maWcgPSB0aGlzLnNldHRpbmdzLmNvbnRyb2xsZXJzLmdldE9iamVjdChjb250cm9sbGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9IEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24oV2VhdmUuZ2V0UGF0aChmb3JtQ29uZmlnKS5nZXRUeXBlKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlPXtjaGlsZFN0eWxlT2JqZWN0fT48VG9vbENsYXNzIGRldmljZT17bW9kZX0gc2V0dGluZ3M9e2Zvcm1Db25maWd9IC8+PC9zcGFuPlxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgICAgIG5hdkZvcm1VSSA9IDxkaXYgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jc3N9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xsZXJzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgIG5hdkZvcm1VSSA9IDxkaXYgIHN0eWxlPXtzdHlsZU9iamVjdH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbGxlcnNVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5hdkZvcm1VSSk7XG4gICAgfVxuXG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyLkZvcm0nLCBGb3JtLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl19

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NavFormConfig = exports.NavListConfig = exports.NavBrandConfig = exports.NavLinkConfig = exports.NavbarConfig = undefined;

	var _Brand = __webpack_require__(27);

	var _Brand2 = _interopRequireDefault(_Brand);

	var _List = __webpack_require__(28);

	var _List2 = _interopRequireDefault(_List);

	var _Form = __webpack_require__(30);

	var _Form2 = _interopRequireDefault(_Form);

	var _InlineStyle = __webpack_require__(32);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var NavbarConfig = exports.NavbarConfig = function NavbarConfig() {
	    _classCallCheck(this, NavbarConfig);

	    Object.defineProperties(this, {
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	        },
	        "brand": {
	            value: Weave.linkableChild(this, new NavBrandConfig())
	        },
	        "form": {
	            value: Weave.linkableChild(this, new NavFormConfig())
	        },
	        "navList": {
	            value: Weave.linkableChild(this, new NavListConfig())
	        },
	        "useCSS": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	        },
	        "dock": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("top"))
	        }
	    });

	    //initial default values
	    this.CSS.state = {
	        navbar: "navbar navbar-default",
	        brand: {
	            header: "navbar-header",
	            title: "navbar-brand"
	        },
	        list: "nav navbar-nav",
	        form: "navbar-form navbar-right"
	    };

	    this.style.display.value = "flex";
	    this.style.border.state = { border: "1px solid transparent" };
	    this.style.other.state = { flexDirection: "row", flex: "1", height: "6%" };
	    this.style.padding.state = { padding: "6px" };
	    this.style.background.state = "#F8F8F8";
	};

	//body { padding-top: 70px; } for fixed status we have to set this

	NavbarConfig.positionType = {
	    "FIXED": "fixed",
	    "STATIC": "static"
	};

	NavbarConfig.position = {
	    "TOP": "top",
	    "BOTTOM": "bottom",
	    "RIGHT": "right",
	    "LEFT": "left"
	};

	//This Function makes this class as SessionClass
	Weave.registerClass('weavereact.navbar.config.NavbarConfig', NavbarConfig, [weavejs.api.core.ILinkableObject]);

	var NavLinkConfig = exports.NavLinkConfig = function NavLinkConfig() {
	    _classCallCheck(this, NavLinkConfig);

	    Object.defineProperties(this, {
	        "title": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("Link"))
	        },
	        "iconName": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-home"))
	        }
	    });
	};

	//This Function makes this class as SessionClass

	Weave.registerClass('weavereact.navbar.config.NavLinkConfig', NavLinkConfig, [weavejs.api.core.ILinkableObject]);

	var NavBrandConfig = exports.NavBrandConfig = function NavBrandConfig() {
	    _classCallCheck(this, NavBrandConfig);

	    Object.defineProperties(this, {
	        "title": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        },
	        "enable": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	        },
	        logoPath: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        },
	        "logoStyle": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        }
	    });
	    this.logoStyle.border.state = {
	        border: "2px solid #F3B46E",
	        borderRadius: "50%",
	        width: "100",
	        height: "90"
	    };
	};

	//This Function makes this class as SessionClass

	Weave.registerClass('weavereact.navbar.config.NavBrandConfig', NavBrandConfig, [weavejs.api.core.ILinkableObject]);

	var NavListConfig = exports.NavListConfig = function NavListConfig() {
	    _classCallCheck(this, NavListConfig);

	    Object.defineProperties(this, {
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "enable": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	        },
	        "rightAlign": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	        },
	        "activePage": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        },
	        "links": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	        },
	        "space": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(2))
	        }
	    });

	    this.style.display.value = "flex";
	    this.style.other.state = {
	        flexDirection: "inherit",
	        flex: "1",
	        listStyleType: "none",
	        paddingLeft: "0"
	    };
	};

	//This Function makes this class as SessionClass

	Weave.registerClass('weavereact.navbar.config.NavListConfig', NavListConfig, [weavejs.api.core.ILinkableObject]);

	var NavFormConfig = exports.NavFormConfig = function NavFormConfig() {
	    _classCallCheck(this, NavFormConfig);

	    Object.defineProperties(this, {
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "enable": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	        },
	        "rightAlign": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	        },
	        "controllers": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	        },
	        "space": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
	        }
	    });

	    this.style.display.value = "flex";
	    this.style.other.state = {
	        flexDirection: "inherit",
	        flex: "1",
	        listStyleType: "none",
	        paddingLeft: "0"
	    };
	};

	//This Function makes this class as SessionClass

	Weave.registerClass('weavereact.navbar.config.NavFormConfig', NavFormConfig, [weavejs.api.core.ILinkableObject]);
	//# sourceMappingURL=data:application/json;base64,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QW9CLE1BQU0sa0JBRHJDLEFBQ0ksQUFBTyxBQUVYOztrQkFBVSxBQUNOO21CQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGdCQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBaUMsQUFFdEU7O3NCQUFjLEFBQ1Y7bUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZ0JBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFpQyxBQUV0RTs7dUJBQWUsQUFDWDttQkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOztpQkFBUyxBQUNMO21CQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGVBaEJoRCxBQUVULEFBYUcsQUFDSSxBQUFPLEFBQTBCLEFBQWdDLEFBSXpFOzs7O1NBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixRQXBCVCxBQW9CVixBQUEyQixBQUMxQjtTQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsUUFBUSxBQUN0Qjt1QkFBQSxBQUFjLEFBQ2Q7Y0FBQSxBQUFLLEFBQ0w7dUJBQUEsQUFBYyxBQUNkO3FCQXpCUixBQUFjLEFBcUJULEFBSUcsQUFBWTtNQXpCTjtDQUFkOzs7O0FBK0JKLE1BQUEsQUFBTSxjQUFOLEFBQW9CLDBDQUFwQixBQUE4RCxlQUFjLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUF6RixBQUE2RSxBQUFpQiIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnJhbmQgZnJvbSBcIi4vQnJhbmRcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBOYXZiYXJDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJicmFuZFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IE5hdkJyYW5kQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTmF2Rm9ybUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibmF2TGlzdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IE5hdkxpc3RDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkb2NrXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJ0b3BcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vaW5pdGlhbCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICB0aGlzLkNTUy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hdmJhcjpcIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiLFxuICAgICAgICAgICAgYnJhbmQ6e1xuICAgICAgICAgICAgICAgIGhlYWRlcjpcIm5hdmJhci1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICB0aXRsZTpcIm5hdmJhci1icmFuZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlzdDpcIm5hdiBuYXZiYXItbmF2XCIsXG4gICAgICAgICAgICBmb3JtOlwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCJcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3JkZXIuc3RhdGUgPSB7Ym9yZGVyOlwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCJ9O1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge2ZsZXhEaXJlY3Rpb246XCJyb3dcIixmbGV4OlwiMVwiLGhlaWdodDpcIjYlXCJ9O1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcuc3RhdGUgPSB7cGFkZGluZzpcIjZweFwifTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kLnN0YXRlID0gXCIjRjhGOEY4XCI7XG4gICAgfVxufVxuXG5cblxuXG4vL2JvZHkgeyBwYWRkaW5nLXRvcDogNzBweDsgfSBmb3IgZml4ZWQgc3RhdHVzIHdlIGhhdmUgdG8gc2V0IHRoaXNcbk5hdmJhckNvbmZpZy5wb3NpdGlvblR5cGUgPSB7XG4gICAgXCJGSVhFRFwiOiBcImZpeGVkXCIsXG4gICAgXCJTVEFUSUNcIjogXCJzdGF0aWNcIlxufTtcblxuTmF2YmFyQ29uZmlnLnBvc2l0aW9uID0ge1xuICAgIFwiVE9QXCI6IFwidG9wXCIsXG4gICAgXCJCT1RUT01cIjogXCJib3R0b21cIixcbiAgICBcIlJJR0hUXCI6IFwicmlnaHRcIixcbiAgICBcIkxFRlRcIjogXCJsZWZ0XCJcbn07XG5cblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhci5jb25maWcuTmF2YmFyQ29uZmlnJywgTmF2YmFyQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBOYXZMaW5rQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiTGlua1wiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25OYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtaG9tZVwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyLmNvbmZpZy5OYXZMaW5rQ29uZmlnJywgTmF2TGlua0NvbmZpZyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuXG5leHBvcnQgY2xhc3MgTmF2QnJhbmRDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvZ29QYXRoOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcImxvZ29TdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9nb1N0eWxlLmJvcmRlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJvcmRlcjpcIjJweCBzb2xpZCAjRjNCNDZFXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6XCI1MCVcIixcbiAgICAgICAgICAgIHdpZHRoOlwiMTAwXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiOTBcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhci5jb25maWcuTmF2QnJhbmRDb25maWcnLCBOYXZCcmFuZENvbmZpZyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuXG5leHBvcnQgY2xhc3MgTmF2TGlzdENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlUGFnZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJsaW5rc1wiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgIFwic3BhY2VcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoMikpXG4gICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImluaGVyaXRcIixcbiAgICAgICAgICAgIGZsZXg6XCIxXCIsXG4gICAgICAgICAgICBsaXN0U3R5bGVUeXBlOlwibm9uZVwiLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6XCIwXCJcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfVxufVxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyLmNvbmZpZy5OYXZMaXN0Q29uZmlnJywgTmF2TGlzdENvbmZpZyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuXG5leHBvcnQgY2xhc3MgTmF2Rm9ybUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJpZ2h0QWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29udHJvbGxlcnNcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzcGFjZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjJweFwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgZmxleDpcIjFcIixcbiAgICAgICAgICAgIGxpc3RTdHlsZVR5cGU6XCJub25lXCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDpcIjBcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhci5jb25maWcuTmF2Rm9ybUNvbmZpZycsIE5hdkZvcm1Db25maWcsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cblxuXG5cbiJdfQ==

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Style = __webpack_require__(10);

	var _Style2 = _interopRequireDefault(_Style);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var InlineStyle = function () {
	    function InlineStyle() {
	        _classCallCheck(this, InlineStyle);

	        //to-do need to add verifier for each Session property to restrict to respective property

	        Object.defineProperties(this, {
	            "border": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "margin": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "padding": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "font": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "other": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            }
	        });

	        Object.defineProperties(this, {
	            "color": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            },
	            "background": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            },
	            "display": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            },
	            "position": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            }
	        });
	    }

	    _createClass(InlineStyle, [{
	        key: "getStyleFor",
	        value: function getStyleFor(properties, appendVendorPrefix) {
	            properties = properties ? properties : ['border', 'margin', 'padding', 'font', 'other', 'color', 'background', 'display', 'position'];
	            return _Style2.default.getStyleStateFor(this, properties, appendVendorPrefix);
	        }
	    }]);

	    return InlineStyle;
	}();

	Weave.registerClass('weavereact.InlineStyle', InlineStyle, [weavejs.api.core.ILinkableObject]);

	exports.default = InlineStyle;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklubGluZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFFTSxBQUlGOzhCQUpFLEFBSVcsQUFFUjs7OztBQUZRLGVBRVIsQUFBTyxpQkFBUCxBQUF3QixNQUFNLEFBQzNCO3NCQUFVLEFBQ047dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7c0JBQVUsQUFDTjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOzt1QkFBVyxBQUNQO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFFdEQ7O29CQUFRLEFBQ0o7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7cUJBQVMsQUFDTDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBaEI1QyxBQUVSLEFBYUcsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFLekQ7Ozs7ZUFBQSxBQUFPLGlCQUFQLEFBQXdCLE1BQU0sQUFDM0I7cUJBQVMsQUFDTDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOzswQkFBYyxBQUNWO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFFdEQ7O3VCQUFXLEFBQ1A7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7d0JBQVksQUFDUjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBaEN6RCxBQUFhLEFBcUJSLEFBVUcsQUFDSSxBQUFPLEFBQThCLEFBQWE7Ozs7O2lCQXBDNUQ7O29DQTJDVSxZQUFXLG9CQUFtQixBQUN0Qzt5QkFBYSxhQUFBLEFBQVcsYUFBVyxDQUFBLEFBQUMsVUFBRCxBQUFVLFVBQVYsQUFBbUIsV0FBbkIsQUFBNkIsUUFBN0IsQUFBb0MsU0FBcEMsQUFBNEMsU0FBNUMsQUFBb0QsY0FBcEQsQUFBaUUsV0FEOUQsQUFDekIsQUFBc0IsQUFBMkUsQUFDOUc7bUJBQU8sZ0JBQUEsQUFBTyxpQkFBUCxBQUF3QixNQUF4QixBQUE2QixZQUZFLEFBRXRDLEFBQU8sQUFBd0M7O1FBekNuRDs7V0FKRTtHQUFBOztBQWlETixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsYUFBWSxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBdkUsQUFBMkQsQUFBaUI7O2tCQUU3RCIsImZpbGUiOiJJbmxpbmVTdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZXMgZnJvbSBcIi4uL3V0aWxzL1N0eWxlXCI7XG5cbmNsYXNzIElubGluZVN0eWxle1xuICAgIFxuICAgIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7Ly90by1kbyBuZWVkIHRvIGFkZCB2ZXJpZmllciBmb3IgZWFjaCBTZXNzaW9uIHByb3BlcnR5IHRvIHJlc3RyaWN0IHRvIHJlc3BlY3RpdmUgcHJvcGVydHlcbiAgICAgICAgXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImJvcmRlclwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtYXJnaW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicGFkZGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmb250XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm90aGVyXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJhY2tncm91bmRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRpc3BsYXlcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGdldFN0eWxlRm9yKHByb3BlcnRpZXMsYXBwZW5kVmVuZG9yUHJlZml4KXtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXM/cHJvcGVydGllczpbJ2JvcmRlcicsJ21hcmdpbicsJ3BhZGRpbmcnLCdmb250Jywnb3RoZXInLCdjb2xvcicsJ2JhY2tncm91bmQnLCdkaXNwbGF5JywncG9zaXRpb24nXVxuICAgICAgICByZXR1cm4gU3R5bGVzLmdldFN0eWxlU3RhdGVGb3IodGhpcyxwcm9wZXJ0aWVzLGFwcGVuZFZlbmRvclByZWZpeCk7XG4gICAgfVxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LklubGluZVN0eWxlJywgSW5saW5lU3R5bGUsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IElubGluZVN0eWxlOyJdfQ==

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _index = __webpack_require__(6);

	(function (module) {

	    function SessionEditorConfig() {

	        Object.defineProperties(this, {

	            "treeConfig": {
	                value: new _index.TreeConfig()
	            },
	            showTree: {
	                value: new weavejs.core.LinkableBoolean(false)
	            },
	            activeNodeValue: {
	                value: new weavejs.core.LinkableVariable()
	            },
	            modalConfig: {
	                value: new _index.ModalConfig()
	            }

	        });

	        this.dataTypesMap = {
	            "weavejs.core.LinkableString": "S",
	            "weavejs.core.LinkableNumber": "N",
	            "weavejs.core.LinkableBoolean": "B",
	            "weavejs.data.source.WeaveDataSource": "fa fa-database"

	        };
	    }

	    var p = SessionEditorConfig.prototype;
	    p.getDataType = function (treeItem) {
	        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
	    };

	    module.exports = SessionEditorConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFJZixhQUFTLG1CQUFULEdBQStCOztBQUUzQixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCOztBQUUxQiwwQkFBYztBQUNWLHVCQUFPLHVCQUFQO2FBREo7QUFHQSxzQkFBVTtBQUNOLHVCQUFPLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUFQO2FBREo7QUFHQSw2QkFBaUI7QUFDYix1QkFBTyxJQUFJLFFBQVEsSUFBUixDQUFhLGdCQUFiLEVBQVg7YUFESjtBQUdBLHlCQUFhO0FBQ1QsdUJBQU8sd0JBQVA7YUFESjs7U0FYSixFQUYyQjs7QUFtQjNCLGFBQUssWUFBTCxHQUFvQjtBQUNoQiwyQ0FBK0IsR0FBL0I7QUFDQSwyQ0FBK0IsR0FBL0I7QUFDQSw0Q0FBZ0MsR0FBaEM7QUFDQSxtREFBdUMsZ0JBQXZDOztTQUpKLENBbkIyQjtLQUEvQjs7QUFnQ0EsUUFBSSxJQUFJLG9CQUFvQixTQUFwQixDQXBDTztBQXFDZixNQUFFLFdBQUYsR0FBZ0IsVUFBVSxRQUFWLEVBQW9CO0FBQ2hDLGVBQU8sU0FBUyxJQUFULENBQWMsaUJBQWQsQ0FBZ0MsS0FBaEMsQ0FBc0MsQ0FBdEMsRUFBeUMsS0FBekMsQ0FEeUI7S0FBcEIsQ0FyQ0Q7O0FBMkNmLFdBQU8sT0FBUCxHQUFpQixtQkFBakIsQ0EzQ2U7Q0FBbEIsRUE2Q0MsTUE3Q0QsQ0FBRCIsImZpbGUiOiJTZXNzaW9uRWRpdG9yQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyZWVDb25maWd9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7TW9kYWxDb25maWd9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuXG4gICAgZnVuY3Rpb24gU2Vzc2lvbkVkaXRvckNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgIFwidHJlZUNvbmZpZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBUcmVlQ29uZmlnKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93VHJlZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVOb2RlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbENvbmZpZzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgTW9kYWxDb25maWcoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IHtcbiAgICAgICAgICAgIFwid2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nXCI6IFwiU1wiLFxuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXJcIjogXCJOXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW5cIjogXCJCXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuZGF0YS5zb3VyY2UuV2VhdmVEYXRhU291cmNlXCI6IFwiZmEgZmEtZGF0YWJhc2VcIlxuXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuICAgIHZhciBwID0gU2Vzc2lvbkVkaXRvckNvbmZpZy5wcm90b3R5cGU7XG4gICAgcC5nZXREYXRhVHlwZSA9IGZ1bmN0aW9uICh0cmVlSXRlbSkge1xuICAgICAgICByZXR1cm4gdHJlZUl0ZW0uZGF0YS5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICB9XG5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTZXNzaW9uRWRpdG9yQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TreeSection = function (_React$Component) {
	    _inherits(TreeSection, _React$Component);

	    function TreeSection(props) {
	        _classCallCheck(this, TreeSection);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TreeSection).call(this, props));
	    }

	    _createClass(TreeSection, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            Weave.getCallbacks(this.props.tree).addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            Weave.getCallbacks(this.props.tree).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.tree !== nextProps.tree) {
	                // tree value will swithc between null and sessionstate tree, when new file is loaded
	                if (this.props.tree) Weave.getCallbacks(this.props.tree).removeCallback(this, this.forceUpdate);
	                if (nextProps.tree) {
	                    Weave.getCallbacks(nextProps.tree).addGroupedCallback(this, this.forceUpdate);
	                } else {
	                    this.props.settings.treeConfig.rootNode.reset();
	                }
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var treeUI = "";
	            if (this.props.tree) {
	                treeUI = _react2.default.createElement(_index.Tree, { data: this.props.tree, label: "label", nodes: "children", clickCallback: this.props.nodeClick, settings: this.props.settings.treeConfig, dataTypesMap: this.props.settings.dataTypesMap, getDataType: this.props.settings.getDataType });
	            }

	            var treeContainerStyle = {
	                width: "100%",
	                height: "100%",
	                borderStyle: "solid",
	                borderRadius: "4px",
	                borderWidth: "1px",
	                borderColor: "grey",
	                overflowY: 'scroll',
	                overflowX: 'scroll',
	                padding: "4px"
	            };

	            console.log("Tree Section Render");
	            return _react2.default.createElement(
	                "div",
	                { style: treeContainerStyle },
	                treeUI
	            );
	        }
	    }]);

	    return TreeSection;
	}(_react2.default.Component);

	exports.default = TreeSection;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9UcmVlU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007OztBQUVKLGFBRkksV0FFSixDQUFZLEtBQVosRUFBbUI7OEJBRmYsYUFFZTs7c0VBRmYsd0JBR0ksUUFEVztLQUFuQjs7aUJBRkk7OzRDQU9lO0FBQ2pCLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFuQixDQUFvQyxrQkFBcEMsQ0FBdUQsSUFBdkQsRUFBNkQsS0FBSyxXQUFMLENBQTdELENBRGlCOzs7OytDQUlLO0FBQ3RCLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFuQixDQUFvQyxjQUFwQyxDQUFtRCxJQUFuRCxFQUF5RCxLQUFLLFdBQUwsQ0FBekQsQ0FEc0I7Ozs7a0RBSUksV0FBVTtBQUNoQyxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLFVBQVUsSUFBVixFQUFlOztBQUNqQyxvQkFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWdCLE1BQU0sWUFBTixDQUFtQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQW5CLENBQW9DLGNBQXBDLENBQW1ELElBQW5ELEVBQXlELEtBQUssV0FBTCxDQUF6RCxDQUFuQjtBQUNELG9CQUFHLFVBQVUsSUFBVixFQUFlO0FBQ2QsMEJBQU0sWUFBTixDQUFtQixVQUFVLElBQVYsQ0FBbkIsQ0FBbUMsa0JBQW5DLENBQXNELElBQXRELEVBQTRELEtBQUssV0FBTCxDQUE1RCxDQURjO2lCQUFsQixNQUdJO0FBQ0EseUJBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsVUFBcEIsQ0FBK0IsUUFBL0IsQ0FBd0MsS0FBeEMsR0FEQTtpQkFISjthQUZKOzs7O2lDQWFHOztBQUVQLGdCQUFJLFNBQVMsRUFBVCxDQUZHO0FBR1AsZ0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFnQjtBQUNmLHlCQUFTLDZDQUFNLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixPQUFNLE9BQU4sRUFBYyxPQUFNLFVBQU4sRUFBa0IsZUFBZSxLQUFLLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLFVBQVUsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixVQUFwQixFQUFnQyxjQUFjLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsWUFBcEIsRUFBa0MsYUFBYSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFdBQXBCLEVBQXpNLENBQVQsQ0FEZTthQUFuQjs7QUFJQSxnQkFBSSxxQkFBcUI7QUFDckIsdUJBQU0sTUFBTjtBQUNBLHdCQUFPLE1BQVA7QUFDQSw2QkFBWSxPQUFaO0FBQ0EsOEJBQWEsS0FBYjtBQUNBLDZCQUFZLEtBQVo7QUFDQSw2QkFBWSxNQUFaO0FBQ0EsMkJBQVcsUUFBWDtBQUNBLDJCQUFXLFFBQVg7QUFDQSx5QkFBUSxLQUFSO2FBVEEsQ0FQRzs7QUFtQlAsb0JBQVEsR0FBUixDQUFZLHFCQUFaLEVBbkJPO0FBb0JQLG1CQUFTOztrQkFBSyxPQUFPLGtCQUFQLEVBQUw7Z0JBQ2dCLE1BRGhCO2FBQVQsQ0FwQk87Ozs7V0E3Qkw7RUFBb0IsZ0JBQU0sU0FBTjs7a0JBd0RYIiwiZmlsZSI6IlRyZWVTZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7VHJlZX0gZnJvbSBcIi4uLy4uLy4uL2xpYi9pbmRleC5qc1wiO1xuXG5cbmNsYXNzIFRyZWVTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5wcm9wcy50cmVlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMucHJvcHMudHJlZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlICE9PSBuZXh0UHJvcHMudHJlZSl7Ly8gdHJlZSB2YWx1ZSB3aWxsIHN3aXRoYyBiZXR3ZWVuIG51bGwgYW5kIHNlc3Npb25zdGF0ZSB0cmVlLCB3aGVuIG5ldyBmaWxlIGlzIGxvYWRlZFxuICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZSlXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5wcm9wcy50cmVlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy50cmVlKXtcbiAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3MobmV4dFByb3BzLnRyZWUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5ncy50cmVlQ29uZmlnLnJvb3ROb2RlLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0cmVlVUkgPSBcIlwiO1xuICAgIGlmKHRoaXMucHJvcHMudHJlZSl7XG4gICAgICAgIHRyZWVVSSA9IDxUcmVlIGRhdGE9e3RoaXMucHJvcHMudHJlZX0gbGFiZWw9XCJsYWJlbFwiIG5vZGVzPVwiY2hpbGRyZW5cIiAgY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5ub2RlQ2xpY2t9IHNldHRpbmdzPXt0aGlzLnByb3BzLnNldHRpbmdzLnRyZWVDb25maWd9IGRhdGFUeXBlc01hcD17dGhpcy5wcm9wcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXB9IGdldERhdGFUeXBlPXt0aGlzLnByb3BzLnNldHRpbmdzLmdldERhdGFUeXBlfS8+XG4gICAgfVxuXG4gICAgdmFyIHRyZWVDb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDpcIjEwMCVcIixcbiAgICAgICAgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6XCIxcHhcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6XCJncmV5XCIsXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXG4gICAgICAgIHBhZGRpbmc6XCI0cHhcIlxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiVHJlZSBTZWN0aW9uIFJlbmRlclwiKTtcbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXt0cmVlQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVlVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVHJlZVNlY3Rpb247XG4iXX0=

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NodeView = function (_React$Component) {
	  _inherits(NodeView, _React$Component);

	  function NodeView(props) {
	    _classCallCheck(this, NodeView);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NodeView).call(this, props));

	    _this.textAreaChange = _this.textAreaChange.bind(_this);

	    return _this;
	  }

	  _createClass(NodeView, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.props.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.props.activeNodeValue.removeCallback(this, this.forceUpdate);
	    }
	  }, {
	    key: "textAreaChange",
	    value: function textAreaChange(e) {
	      this.props.activeNodeValue.state = e.target.value;
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var resultContainerStyle = {
	        width: "100%",
	        height: "100%",
	        borderStyle: "solid",
	        borderRadius: "4px",
	        borderWidth: "1px",
	        borderColor: "grey",
	        overflowY: 'scroll',
	        overflowX: 'scroll',
	        padding: "4px"
	      };

	      return _react2.default.createElement(
	        "div",
	        { style: resultContainerStyle },
	        _react2.default.createElement("textarea", { style: { width: "100%", height: "100%", border: "none" }, value: this.props.activeNodeValue.state, onChange: this.textAreaChange })
	      );
	    }
	  }]);

	  return NodeView;
	}(_react2.default.Component);

	exports.default = NodeView;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9Ob2RlVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNOzs7QUFFSixXQUZJLFFBRUosQ0FBWSxLQUFaLEVBQW1COzBCQUZmLFVBRWU7O3VFQUZmLHFCQUdJLFFBRFc7O0FBSWpCLFVBQUssY0FBTCxHQUFzQixNQUFLLGNBQUwsQ0FBb0IsSUFBcEIsT0FBdEIsQ0FKaUI7OztHQUFuQjs7ZUFGSTs7d0NBVWU7QUFDakIsV0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixvQkFBM0IsQ0FBZ0QsSUFBaEQsRUFBcUQsS0FBSyxXQUFMLENBQXJELENBRGlCOzs7OzJDQUlLO0FBQ3RCLFdBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsY0FBM0IsQ0FBMEMsSUFBMUMsRUFBK0MsS0FBSyxXQUFMLENBQS9DLENBRHNCOzs7O21DQU1ULEdBQUU7QUFDZixXQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLEtBQTNCLEdBQW1DLEVBQUUsTUFBRixDQUFTLEtBQVQsQ0FEcEI7Ozs7NkJBSVI7O0FBRVAsVUFBSSx1QkFBdUI7QUFDdkIsZUFBTSxNQUFOO0FBQ0EsZ0JBQU8sTUFBUDtBQUNBLHFCQUFZLE9BQVo7QUFDQSxzQkFBYSxLQUFiO0FBQ0EscUJBQVksS0FBWjtBQUNBLHFCQUFZLE1BQVo7QUFDQSxtQkFBVyxRQUFYO0FBQ0EsbUJBQVcsUUFBWDtBQUNBLGlCQUFRLEtBQVI7T0FUQSxDQUZHOztBQWVQLGFBQVM7O1VBQUssT0FBTyxvQkFBUCxFQUFMO1FBQ0csNENBQVUsT0FBTyxFQUFDLE9BQU0sTUFBTixFQUFhLFFBQU8sTUFBUCxFQUFjLFFBQU8sTUFBUCxFQUFuQyxFQUFtRCxPQUFPLEtBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsS0FBM0IsRUFBa0MsVUFBVSxLQUFLLGNBQUwsRUFBaEgsQ0FESDtPQUFULENBZk87Ozs7U0F4Qkw7RUFBaUIsZ0JBQU0sU0FBTjs7a0JBOENSIiwiZmlsZSI6Ik5vZGVWaWV3LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuY2xhc3MgTm9kZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cbiAgICB0aGlzLnRleHRBcmVhQ2hhbmdlID0gdGhpcy50ZXh0QXJlYUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMucHJvcHMuYWN0aXZlTm9kZVZhbHVlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3RpdmVOb2RlVmFsdWUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgfVxuXG5cblxuICB0ZXh0QXJlYUNoYW5nZShlKXtcbiAgICB0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHJlc3VsdENvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxuICAgICAgICBib3JkZXJTdHlsZTpcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxuICAgICAgICBib3JkZXJXaWR0aDpcIjFweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjpcImdyZXlcIixcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICAgICAgcGFkZGluZzpcIjRweFwiXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXtyZXN1bHRDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLGJvcmRlcjpcIm5vbmVcIn19IHZhbHVlPXt0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZX0gb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBOb2RlVmlldztcbiJdfQ==

/***/ }
/******/ ])
});
;
//# sourceMappingURL=demo.js.map
