/******/ (function(modules) { // webpackBootstrap
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

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.demo = {};
	window.demo.App = _App2.default;
	window.demo.init = function (container) {
	    _reactDom2.default.render(React.createElement(_App2.default, null), document.getElementById(container));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLE9BQU8sSUFBUCxHQUFhLEVBQWI7QUFDQSxPQUFPLElBQVAsQ0FBWSxHQUFaO0FBQ0EsT0FBTyxJQUFQLENBQVksSUFBWixHQUFtQixVQUFVLFNBQVYsRUFBcUI7QUFDcEMsdUJBQVMsTUFBVCxDQUFpQix3Q0FBakIsRUFBMEIsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQTFCLEVBRG9DO0NBQXJCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblxud2luZG93LmRlbW8gPXt9O1xud2luZG93LmRlbW8uQXBwID0gQXBwO1xud2luZG93LmRlbW8uaW5pdCA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoIDxBcHAvPiAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcikpO1xufVxuXG5cbiJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _SessionEditor = __webpack_require__(4);

	var _SessionEditor2 = _interopRequireDefault(_SessionEditor);

	var _SessionEditorConfig = __webpack_require__(34);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _index = __webpack_require__(5);

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
	        _this.navConfig = window.dbweave.root.requestObject('navbar', _index.navbarConfig.Navbar);
	        //this.navConfig.brand.logoPath.value = "./logo.png";
	        //this.navConfig.brand.title.value = "Brand";

	        var brandConfig = _this.navConfig.children.requestObject('', _index.navbarConfig.Brand);
	        var logoConfig = brandConfig.children.requestObject('', _index.navbarConfig.Logo);
	        logoConfig.src.state = "logo.png";
	        /*var listConfig = this.navConfig.children.requestObject('',navbarConfig.List);
	        var linkConfig = listConfig.children.requestObject('',navbarConfig.Link);
	        linkConfig.title.value = " Documentation";
	        linkConfig.iconName.value = "fa fa-folder";*/

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
	                _react2.default.createElement(
	                    _index.Navbar,
	                    { settings: this.navConfig },
	                    _react2.default.createElement(
	                        _index.Navbar.List,
	                        { key: "list" },
	                        _react2.default.createElement(_index.Navbar.Link, { key: "link1" }),
	                        _react2.default.createElement(_index.Navbar.Link, { key: "link2" })
	                    ),
	                    _react2.default.createElement(
	                        _index.Navbar.Form,
	                        { key: "form" },
	                        _react2.default.createElement(
	                            "div",
	                            { key: "form1" },
	                            "Form1"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { key: "di" },
	                            "Form2"
	                        )
	                    )
	                ),
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

	/**/
	//# sourceMappingURL=data:application/json;base64,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QUosRUFBYixDQUZKO3FCQURKO29CQUtJO3NDQUFRLElBQVI7MEJBQWEsS0FBSSxNQUFKLEVBQWI7d0JBQ0k7OzhCQUFLLEtBQUksT0FBSixFQUFMOzt5QkFESjt3QkFFSTs7OEJBQUssS0FBSSxJQUFKLEVBQUw7O3lCQUZKO3FCQUxKO2lCQUZKO2dCQWNBOztzQkFBSyxPQUFPLEVBQUMsV0FBVSxNQUFWLEVBQVIsRUFBTDtvQkFDUTs7MEJBQUssT0FBTyxFQUFDLE9BQU0sT0FBTixFQUFjLE9BQU0sT0FBTixFQUFlLFFBQU8sZ0JBQVAsRUFBd0IsWUFBVyw4Q0FBWCxFQUE3RCxFQUFMO3dCQUNJLDZDQUFNLE1BQU0sS0FBSyxJQUFMLEVBQVcsVUFBVSxLQUFLLFVBQUwsRUFBaUIsT0FBTSxPQUFOLEVBQWMsT0FBTSxVQUFOLEVBQWhFLENBREo7cUJBRFI7aUJBZEE7YUFBUixDQUhLOzs7O1dBakZQO0VBQVksZ0JBQU0sU0FBTjs7a0JBOEdIIiwiZmlsZSI6IkFwcC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVSZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZXNzaW9uRWRpdG9yIGZyb20gXCIuL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yXCI7XG5pbXBvcnQgU2Vzc2lvbkVkaXRvckNvbmZpZyBmcm9tIFwiLi9zZXNzaW9uU3RhdGVFZGl0b3IvU2Vzc2lvbkVkaXRvckNvbmZpZ1wiO1xuaW1wb3J0IHtOYXZiYXJ9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7bmF2YmFyQ29uZmlnfSBmcm9tIFwiLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQge1RyZWV9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7VHJlZUNvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9pbmRleC5qc1wiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB3aW5kb3cud2VhdmUgPSBuZXcgV2VhdmUoKTtcbiAgICAgICAgd2luZG93LmRid2VhdmUgPSBuZXcgV2VhdmUoKTtcbiAgICAgICAgdGhpcy5vcGVuU2V0dGluZ3MgPSB0aGlzLm9wZW5TZXR0aW5ncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlc3Npb25Db25maWdEYXNoZG9hcmQgPSBuZXcgU2Vzc2lvbkVkaXRvckNvbmZpZygpO1xuICAgICAgICB0aGlzLnNlc3Npb25Db25maWdXZWF2ZSA9IG5ldyBTZXNzaW9uRWRpdG9yQ29uZmlnKCk7XG4gICAgICAgIHRoaXMubmF2Q29uZmlnID0gd2luZG93LmRid2VhdmUucm9vdC5yZXF1ZXN0T2JqZWN0KCduYXZiYXInLG5hdmJhckNvbmZpZy5OYXZiYXIpO1xuICAgICAgICAvL3RoaXMubmF2Q29uZmlnLmJyYW5kLmxvZ29QYXRoLnZhbHVlID0gXCIuL2xvZ28ucG5nXCI7XG4gICAgICAgIC8vdGhpcy5uYXZDb25maWcuYnJhbmQudGl0bGUudmFsdWUgPSBcIkJyYW5kXCI7XG5cbiAgICAgICAgdmFyIGJyYW5kQ29uZmlnID0gdGhpcy5uYXZDb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJyxuYXZiYXJDb25maWcuQnJhbmQpO1xuICAgICAgICB2YXIgbG9nb0NvbmZpZyA9IGJyYW5kQ29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsbmF2YmFyQ29uZmlnLkxvZ28pO1xuICAgICAgICBsb2dvQ29uZmlnLnNyYy5zdGF0ZSA9IFwibG9nby5wbmdcIjtcbiAgICAgICAgLyp2YXIgbGlzdENvbmZpZyA9IHRoaXMubmF2Q29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsbmF2YmFyQ29uZmlnLkxpc3QpO1xuICAgICAgICB2YXIgbGlua0NvbmZpZyA9IGxpc3RDb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJyxuYXZiYXJDb25maWcuTGluayk7XG4gICAgICAgIGxpbmtDb25maWcudGl0bGUudmFsdWUgPSBcIiBEb2N1bWVudGF0aW9uXCI7XG4gICAgICAgIGxpbmtDb25maWcuaWNvbk5hbWUudmFsdWUgPSBcImZhIGZhLWZvbGRlclwiOyovXG5cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnID0gd2luZG93LmRid2VhdmUucm9vdC5yZXF1ZXN0T2JqZWN0KCd0cmVlJyxUcmVlQ29uZmlnKTtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnZhbHVlID1cIjEwcHhcIjtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLnJpZ2h0QWxpZ24udmFsdWUgPSB0cnVlO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcuZm9sZGVySWNvbi52YWx1ZSA9IFwiZmEgZmEtY2FyZXQtcmlnaHRcIjtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmZvbGRlck9wZW5JY29uLnZhbHVlID0gXCJmYSBmYS1jYXJldC1kb3duXCI7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5maWxlSWNvbi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5maWxlT3Blbkljb24udmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcuZW5hYmxlRGF0YVR5cGVJY29uLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5sZWFmQ29sb3IudmFsdWUgPSBcIiMwNDcwQUZcIjtcblxuICAgICAgICB0aGlzLnRyZWU9bnVsbDtcbiAgICAgICAgdGhpcy5sb2FkSlNPTiA9IHRoaXMubG9hZEpTT04uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb2FkSlNPTihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICB0aGlzLnRyZWUgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJlZSk7XG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuXG5cbiAgICB9XG5cbiAgICAgbG9hZEpTT04oY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgeG9iaiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4b2JqLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICB4b2JqLm9wZW4oJ0dFVCcsICcuL3Rlc3QuanNvbicsIHRydWUpO1xuICAgICAgICB4b2JqLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4b2JqLnJlYWR5U3RhdGUgPT0gNCAmJiB4b2JqLnN0YXR1cyA9PSBcIjIwMFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVxdWlyZWQgdXNlIG9mIGFuIGFub255bW91cyBjYWxsYmFjayBhcyAub3BlbiB3aWxsIE5PVCByZXR1cm4gYSB2YWx1ZSBidXQgc2ltcGx5IHJldHVybnMgdW5kZWZpbmVkIGluIGFzeW5jaHJvbm91cyBtb2RlXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soeG9iai5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4b2JqLnNlbmQobnVsbCk7XG4gICAgfVxuXG4gICBvcGVuU2V0dGluZ3MoZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIgJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICBpZih0aGlzLnNlc3Npb25Db25maWdXZWF2ZS5tb2RhbENvbmZpZy5vcGVuLnZhbHVlKSAgdGhpcy5zZXNzaW9uQ29uZmlnV2VhdmUubW9kYWxDb25maWcub3Blbi52YWx1ZT0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlc3Npb25Db25maWdEYXNoZG9hcmQubW9kYWxDb25maWcub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBvcFVwU2Vzc2lvbkVkaXRvciggdGhpcy5zZXNzaW9uQ29uZmlnRGFzaGRvYXJkLCB3aW5kb3cuZGJ3ZWF2ZSwgXCJTZXNzaW9uIFN0YXRlIEVkaXRvciAoV2VhdmUgRGFzaGJvYXJkKVwiLHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub3BlblNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5Nb3VudCgpe1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub3BlblNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBwb3BVcFNlc3Npb25FZGl0b3IoY29uZmlnLHdlYXZlSW5zdGFuY2UsdGl0bGUsaXNEYikge1xuICAgICAgICBSZWFjdERPTS5yZW5kZXIoIDxTZXNzaW9uRWRpdG9yIGlzRGFzaGJvYXJkPXtpc0RifSB3ZWF2ZT17d2VhdmVJbnN0YW5jZX0ga2V5UHJlc3MgPSBcInRydWVcIiB0aXRsZT17dGl0bGV9IHNldHRpbmdzID0ge2NvbmZpZ30vPixkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcFVwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgfVxuXG5cblxuXG4gICAgcmVuZGVyKCkge1xuXG5cbiAgICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgc2V0dGluZ3M9e3RoaXMubmF2Q29uZmlnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuTGlzdCBrZXk9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5MaW5rIGtleT1cImxpbmsxXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuTGluayBrZXk9XCJsaW5rMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkZvcm0ga2V5PVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiZm9ybTFcIj5Gb3JtMTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiZGlcIj5Gb3JtMjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuRm9ybSA+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiNjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIyNDBweFwiLGNvbG9yOlwid2hpdGVcIiwgYm9yZGVyOlwiMXB4IHNvbGlkIGdyZXlcIixiYWNrZ3JvdW5kOlwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDM2RkJCICwgIzAxMzQ1OClcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlIGRhdGE9e3RoaXMudHJlZX0gc2V0dGluZ3M9e3RoaXMudHJlZUNvbmZpZ30gbGFiZWw9XCJsYWJlbFwiIG5vZGVzPVwiY2hpbGRyZW5cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbi8qKi9cbiJdfQ==

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(5);

	var _SessionEditorConfig = __webpack_require__(34);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _TreeSection = __webpack_require__(35);

	var _TreeSection2 = _interopRequireDefault(_TreeSection);

	var _NodeView = __webpack_require__(36);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRcUI7OztBQUVqQixhQUZpQixhQUVqQixDQUFZLEtBQVosRUFBbUI7OEJBRkYsZUFFRTs7MkVBRkYsMEJBR1AsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBaUIsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLG1DQUF4QyxDQUZGO0FBR2YsY0FBSyxJQUFMLEdBQWEsUUFBUSxRQUFSLENBQWlCLGNBQWpCLENBQWdDLG1CQUFoQyxDQUFvRCxNQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLElBQWpCLENBQWpFLENBSGU7QUFJZixjQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLE1BQUssS0FBTCxDQUFXLFdBQVgsR0FBdUIsZ0JBQXZCLEdBQXdDLE9BQXhDLENBSkg7O0FBTWYsY0FBSyxrQkFBTCxHQUEwQixNQUFLLGtCQUFMLENBQXdCLElBQXhCLE9BQTFCLENBTmU7QUFPZixjQUFLLFNBQUwsR0FBaUIsTUFBSyxTQUFMLENBQWUsSUFBZixPQUFqQixDQVBlO0FBUWYsY0FBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsT0FBaEIsQ0FSZTtBQVNmLGNBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCLENBVGU7QUFVZixjQUFLLFlBQUw7QUFWZTtLQUFuQjs7aUJBRmlCOzs0Q0FlRTs7OytDQUlLOzs7a0RBSUUsV0FBVTtBQUNoQyxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUFtQjtBQUMxQyxxQkFBSyxRQUFMLEdBQWdCLFVBQVUsUUFBVixDQUQwQjthQUE5QztBQUdBLGdCQUFHLEtBQUssS0FBTCxDQUFXLEtBQVgsS0FBcUIsVUFBVSxLQUFWLEVBQWdCO0FB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QVAsRUFBeUIsU0FBUyxLQUFLLGtCQUFMLEVBQXZDOztpQkFSSDtnQkFTRzs7c0JBQUssT0FBTyxnQkFBUCxFQUF5QixTQUFTLEtBQUssUUFBTCxFQUF2QztvQkFBc0Q7OzBCQUFJLFdBQVksc0JBQVosRUFBSjs7cUJBQXREOztpQkFUSDtnQkFVRzs7c0JBQUssT0FBTyxnQkFBUCxFQUFMO29CQUNJLHlDQUFPLFVBQVUsS0FBSyxRQUFMLEVBQWUsTUFBSyxNQUFMLEVBQVksT0FBTyxnQkFBUCxFQUE1QyxDQURKO29CQUVJOzswQkFBSSxXQUFZLG9CQUFaLEVBQUo7O3FCQUZKOztpQkFWSDthQUFULENBNUJPOzs7O1dBdEdVO0VBQXNCLGdCQUFNLFNBQU47O2tCQUF0QiIsImZpbGUiOiJTZXNzaW9uRWRpdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge01vZGFsfSBmcm9tIFwiLi4vLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQge1NwbGl0UGFuZX0gZnJvbSBcIi4uLy4uLy4uL2xpYi9pbmRleC5qc1wiO1xuaW1wb3J0IFNlc3Npb25FZGl0b3JDb25maWcgZnJvbSBcIi4vU2Vzc2lvbkVkaXRvckNvbmZpZ1wiO1xuaW1wb3J0IFRyZWVTZWN0aW9uIGZyb20gXCIuL1RyZWVTZWN0aW9uXCI7XG5pbXBvcnQgTm9kZVZpZXcgZnJvbSBcIi4vTm9kZVZpZXdcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICB0aGlzLnByb3BzLnNldHRpbmdzP3RoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFNlc3Npb25FZGl0b3JDb25maWcoKTtcbiAgICAgICAgdGhpcy50cmVlID0gIHdlYXZlanMuV2VhdmVBUEkuU2Vzc2lvbk1hbmFnZXIuZ2V0U2Vzc2lvblN0YXRlVHJlZSh0aGlzLnByb3BzLndlYXZlLnJvb3QpO1xuICAgICAgICB0aGlzLnRyZWUubGFiZWwgPSB0aGlzLnByb3BzLmlzRGFzaGJvYXJkP1wiV2VhdmVEYXNoYm9hcmRcIjpcIldlYXZlXCI7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTZXNzaW9uVmFsdWUgPSB0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGVDbGljayA9IHRoaXMubm9kZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2F2ZUZpbGUgPSB0aGlzLnNhdmVGaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3BlbkZpbGUgPSB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhOy8vIHRvLWRvOnRyeSB3aXRoIGxpbmthYmxlV2F0Y2hlciBhbmQgYWRkIGZvcmNlVXBkYXRlIHRvIHRoYXQgd2F0Y2hlclxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy53ZWF2ZSAhPT0gbmV4dFByb3BzLndlYXZlKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICB0aGlzLnRyZWUgPSAgd2VhdmVqcy5XZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uU3RhdGVUcmVlKG5leHRQcm9wcy53ZWF2ZS5yb290KTtcbiAgICAgICAgICAgIHRoaXMudHJlZS5sYWJlbCA9IG5leHRQcm9wcy5pc0Rhc2hib2FyZD9cIldlYXZlRGFzaGJvYXJkXCI6XCJXZWF2ZVwiO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGEgPSBudWxsIDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vZGVDbGljayhub2RlKXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGEgPSBub2RlLmRhdGE7XG4gICAgICAgIHZhciBzdGF0ZSA9IFdlYXZlLmdldFN0YXRlKG5vZGUuZGF0YSk7XG4gICAgICAgIHZhciBzdHI7XG4gICAgICAgIGlmIChub2RlLmRhdGEgaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcpXG4gICAgICAgIFx0c3RyID0gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgXHRzdHIgPSBXZWF2ZS5zdHJpbmdpZnkoc3RhdGUsIG51bGwsICdcXHQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWUuc3RhdGUgPSBzdHI7XG4gIH1cblxuXG4gIGNoYW5nZVNlc3Npb25WYWx1ZShlKXtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWUuc3RhdGU7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0YSBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgXHR0aGlzLnNlbGVjdGVkRGF0YS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBlbHNlXG4gICAgICAgIFx0V2VhdmUuc2V0U3RhdGUodGhpcy5zZWxlY3RlZERhdGEsIEpTT04ucGFyc2UodmFsdWUpKTtcblxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBzYXZlRmlsZSgpe1xuICAgIHZhciBhcmNoaXZlICA9IHdlYXZlanMuY29yZS5XZWF2ZUFyY2hpdmUuY3JlYXRlQXJjaGl2ZSh0aGlzLnByb3BzLndlYXZlKVxuICAgIHZhciB1aW50OEFycmF5ID0gYXJjaGl2ZS5zZXJpYWxpemUoKTtcbiAgICB2YXIgYXJyYXlCdWZmZXIgID0gdWludDhBcnJheS5idWZmZXI7XG4gICAgd2luZG93LnNhdmVBcyhuZXcgQmxvYihbYXJyYXlCdWZmZXJdKSwgXCJ0ZXN0LndlYXZlXCIpO1xuICB9XG5cblxuXG4gIG9wZW5GaWxlKGUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIC8vIEJ1aWxkIFByb21pc2UgTGlzdCwgZWFjaCBwcm9taXNlIHJlc29sdmVkIGJ5IEZpbGVSZWFkZXIub25sb2FkLlxuICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgYm90aCB0aGUgRmlsZVJlYWRlciByZXN1bHQgYW5kIGl0cyBvcmlnaW5hbCBmaWxlLlxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtldmVudCwgc2VsZWN0ZWRmaWxlXSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlIGZpbGUuXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHNlbGVjdGVkZmlsZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHppcHBlZFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAvLyBSdW4gdGhlIGNhbGxiYWNrIGFmdGVyIGFsbCBmaWxlcyBoYXZlIGJlZW4gcmVhZC5cbiAgICAgICAgICAgICAgICB2YXIgZSA9IHppcHBlZFJlc3VsdHNbMF07XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAvLyByZWFkIHRoZSBjb250ZW50IG9mIHRoZSBmaWxlIHdpdGggSlNaaXBcblxuICAgICAgICAgICAgICAgIHdlYXZlanMuY29yZS5XZWF2ZUFyY2hpdmUubG9hZEZpbGVDb250ZW50KHRoYXQucHJvcHMud2VhdmUscmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGF0LnRyZWUgPSAgd2VhdmVqcy5XZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uU3RhdGVUcmVlKHRoYXQucHJvcHMud2VhdmUucm9vdCk7XG4gICAgICAgICAgICAgICAgIHRoYXQudHJlZS5sYWJlbCA9IFwiV2VhdmVcIjtcbiAgICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RlZERhdGEgPSBudWxsIDsvLyB0by1kbzp0cnkgd2l0aCBsaW5rYWJsZVdhdGNoZXIgYW5kIGFkZCBmb3JjZVVwZGF0ZSB0byB0aGF0IHdhdGNoZXJcbiAgICAgICAgICAgICAgICAgdGhhdC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuXG5cblxuICAgIHZhciBhcHBseUJ1dHRvblN0eWxlID0ge1xuICAgICAgICBtYXJnaW5Ub3A6XCI0cHhcIixcbiAgICAgICAgbWFyZ2luTGVmdDpcIjJweFwiLFxuICAgICAgICBib3JkZXJTdHlsZTpcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxuICAgICAgICBib3JkZXJXaWR0aDpcIjFweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjpcImdyZXlcIixcbiAgICAgICAgZmxvYXQ6XCJyaWdodFwiLFxuICAgICAgICBwYWRkaW5nOlwiNHB4XCIsXG4gICAgICAgIGN1cnNvcjpcInBvaW50ZXJcIixcbiAgICAgICAgZm9udFNpemU6XCIxMnB4XCIsXG4gICAgICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuICAgIH1cbiAgICB2YXIgaW5wdXRCdXR0b25TdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBvcGFjaXR5OiBcIjBcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGxlZnQ6XCIwXCIsXG4gICAgICAgIHRvcDpcIjJweFwiLFxuICAgICAgICBib3R0b206XCIycHhcIlxuICAgIH1cblxuXG4gICAgcmV0dXJuICggPE1vZGFsIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLm1vZGFsQ29uZmlnfSBrZXlQcmVzcz1cInRydWVcIiB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OlwiOTAlXCIsd2lkdGg6XCIxMDAlXCIsZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImhpZGRlblwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIG1pblNpemU9XCI1MFwiIGRlZmF1bHRTaXplPVwiMjU2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJlZVNlY3Rpb24gdHJlZT17dGhpcy50cmVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5nc30gIG5vZGVDbGljaz17dGhpcy5ub2RlQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlldyBhY3RpdmVOb2RlVmFsdWU9e3RoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMuY2hhbmdlU2Vzc2lvblZhbHVlfT4gQXBwbHkgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5zYXZlRmlsZX0+PCBpIGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtZG93bmxvYWRcIiAgPiA8IC9pID4gU2F2ZSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcHBseUJ1dHRvblN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLm9wZW5GaWxlfSB0eXBlPSdmaWxlJyBzdHlsZT17aW5wdXRCdXR0b25TdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8IGkgY2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS11cGxvYWRcIiAgPiA8IC9pID4gTG9hZFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Tree = __webpack_require__(6);

	var _Tree2 = _interopRequireDefault(_Tree);

	var _TreeConfig = __webpack_require__(16);

	var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

	var _Node = __webpack_require__(14);

	var _Node2 = _interopRequireDefault(_Node);

	var _NodeConfig = __webpack_require__(15);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	var _Modal = __webpack_require__(17);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _ModalConfig = __webpack_require__(18);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _SplitPane = __webpack_require__(21);

	var _SplitPane2 = _interopRequireDefault(_SplitPane);

	var _SplitPaneConfig = __webpack_require__(22);

	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

	var _Navbar = __webpack_require__(26);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Config = __webpack_require__(33);

	var _Config2 = _interopRequireDefault(_Config);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.Tree = _Tree2.default;
	exports.Modal = _Modal2.default;
	exports.TreeConfig = _TreeConfig2.default;
	exports.ModalConfig = _ModalConfig2.default;
	exports.SplitPane = _SplitPane2.default;
	exports.SplitPaneConfig = _SplitPaneConfig2.default;

	exports.Navbar = _Navbar2.default;
	exports.navbarConfig = _Config2.default;

	exports.registerToolImplementation = function (asClassName, jsClass) {
	    _App2.default.registerToolImplementation(asClassName, jsClass);
	};

	exports.getToolImplementation = function (name) {
	    if (_App2.default.getToolImplementation(name)) {
	        return _App2.default.getToolImplementation(name);
	    }
	};

	exports.registerToolConfig = function (toolClass, configClass) {
	    _App2.default.registerToolConfig(toolClass, configClass);
	};

	exports.getToolConfig = function (toolClass) {
	    _App2.default.getToolConfig(toolClass);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTs7QUFFUixRQUFBLEFBQVE7QUFDUixRQUFBLEFBQVE7O0FBR1IsUUFBQSxBQUFRLHVDQUE2QixBQUFVLGFBQVYsQUFBdUI7a0JBQ3hELEFBQUksMkJBQUosQUFBK0IsYUFERSxBQUFnQyxBQUNqRSxBQUE0QyxTQURxQixBQUNqRTtDQURpQzs7QUFJckMsUUFBQSxBQUFRLGtDQUF3QixBQUFVLE1BQU0sQUFDNUM7UUFBSSxjQUFBLEFBQUksc0JBQVIsQUFBSSxBQUEwQixPQUFPLEFBQ2pDO2VBQU8sY0FBQSxBQUFJLHNCQUZhLEFBQzVCLEFBQXFDLEFBQ2pDLEFBQU8sQUFBMEI7O0NBRlQ7O0FBT2hDLFFBQUEsQUFBUSwrQkFBcUIsQUFBVSxXQUFWLEFBQXFCO2tCQUM5QyxBQUFJLG1CQUFKLEFBQXVCLFdBREUsQUFBa0MsQUFDM0QsQUFBa0MsYUFEeUIsQUFDM0Q7Q0FEeUI7O0FBSTdCLFFBQUEsQUFBUSwwQkFBZ0IsQUFBVTtrQkFDOUIsQUFBSSxjQURnQixBQUFxQixBQUN6QyxBQUFrQixXQUR1QixBQUN6QztDQURvQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmVlIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9UcmVlXCI7XG5pbXBvcnQgVHJlZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvVHJlZUNvbmZpZ1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vY29tcG9uZW50cy90cmVlL05vZGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9Ob2RlQ29uZmlnXCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsL01vZGFsXCI7XG5pbXBvcnQgTW9kYWxDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbENvbmZpZ1wiO1xuXG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gXCIuL2NvbXBvbmVudHMvc3BsaXRQYW5lL1NwbGl0UGFuZVwiO1xuaW1wb3J0IFNwbGl0UGFuZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3NwbGl0UGFuZS9TcGxpdFBhbmVDb25maWdcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXJcIjtcbmltcG9ydCBuYXZiYXJDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXIvQ29uZmlnXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vdXRpbHMvQXBwXCI7XG5cblxuZXhwb3J0cy5UcmVlID0gVHJlZTtcbmV4cG9ydHMuTW9kYWwgPSBNb2RhbDtcbmV4cG9ydHMuVHJlZUNvbmZpZyA9IFRyZWVDb25maWc7XG5leHBvcnRzLk1vZGFsQ29uZmlnID0gTW9kYWxDb25maWc7XG5leHBvcnRzLlNwbGl0UGFuZSA9IFNwbGl0UGFuZTtcbmV4cG9ydHMuU3BsaXRQYW5lQ29uZmlnID0gU3BsaXRQYW5lQ29uZmlnO1xuXG5leHBvcnRzLk5hdmJhciA9IE5hdmJhcjtcbmV4cG9ydHMubmF2YmFyQ29uZmlnID0gbmF2YmFyQ29uZmlnO1xuXG5cbmV4cG9ydHMucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAoYXNDbGFzc05hbWUsIGpzQ2xhc3MpIHtcbiAgICBBcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oYXNDbGFzc05hbWUsIGpzQ2xhc3MpO1xufVxuXG5leHBvcnRzLmdldFRvb2xJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24obmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24obmFtZSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydHMucmVnaXN0ZXJUb29sQ29uZmlnID0gZnVuY3Rpb24gKHRvb2xDbGFzcywgY29uZmlnQ2xhc3MpIHtcbiAgICBBcHAucmVnaXN0ZXJUb29sQ29uZmlnKHRvb2xDbGFzcywgY29uZmlnQ2xhc3MpO1xufVxuXG5leHBvcnRzLmdldFRvb2xDb25maWcgPSBmdW5jdGlvbiAodG9vbENsYXNzKSB7XG4gICAgQXBwLmdldFRvb2xDb25maWcodG9vbENsYXNzKTtcbn1cbiJdfQ==

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Style = __webpack_require__(9);

	var _Style2 = _interopRequireDefault(_Style);

	var _Node = __webpack_require__(14);

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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _Style = __webpack_require__(9);

	var _Style2 = _interopRequireDefault(_Style);

	var _HTMLWrapperConfig = __webpack_require__(12);

	var _HTMLWrapperConfig2 = _interopRequireDefault(_HTMLWrapperConfig);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	(function (module) {

	    function App() {}

	    var toolRegistry = {};

	    App.registerToolImplementation = function (asClassName, jsClass) {
	        if (!toolRegistry[asClassName]) toolRegistry[asClassName] = jsClass;
	    };

	    App.getToolImplementation = function (asClassName) {
	        return toolRegistry[asClassName];
	    };

	    var toolConfigMap = new Map();

	    App.registerToolConfig = function (tool, config) {
	        if (!toolConfigMap.has(tool)) toolConfigMap.set(tool, config);
	    };

	    App.getToolConfig = function (tool) {
	        return toolConfigMap.get(tool);
	    };

	    App.hookSessionStateForComponentChildren = function (children, config) {
	        config.children.delayCallbacks();

	        config.childConfigMap = new Map();
	        config.configChildMap.forEach(function (value, key) {
	            var configName = config.children.getName(key);
	            config.children.removeObject(configName);
	        });
	        config.configChildMap = new Map();

	        _react2.default.Children.forEach(children, function (child, index) {
	            var childName = "";
	            var childConfig = config.childConfigMap.get(child);
	            var childConfigName = "";
	            if (typeof child.type === "string") {
	                // for HTML Elements
	                if (!childConfig) {
	                    childConfig = config.children.requestObject('', _HTMLWrapperConfig2.default);
	                }
	            } else {
	                // for React Composite Elements
	                var configClass = App.getToolConfig(child.type);
	                if (!childConfig && configClass) {
	                    childConfig = config.children.requestObject('', configClass);
	                }
	            }
	            if (child.props.style) childConfig.style.domDefined.state = child.props.style;
	            config.childConfigMap.set(child, childConfig);
	            config.configChildMap.set(childConfig, child);
	            //config.configChildObjectMap[childConfigName] = childConfig;
	        });
	        config.children.resumeCallbacks();
	    };

	    /*  App.renderChildren = function(reactComp,CSS,additionalProps,newProps){
	          var childConfigs = reactComp.settings.children.getObjects();
	          var clonedChildren = childConfigs.map(function(childConfig,index){
	              var child = reactComp.settings.configChildMap.get(childConfig);
	                if(child){
	                  var props = App.mergeInto({},child.props);
	                  if(typeof(child.type) === "string"){
	                      return <HTMLWrapper settings={childConfig}>{child}</HTMLWrapper>
	                  }else{
	                      props = App.mergeInto(props,additionalProps);
	                      props["settings"] = childConfig;
	                      if(CSS){
	                          props["className"] = CSS[childName];
	                          props["CSS"] = CSS;
	                      }
	                      if(this.settings.childConfigMap.has(child))
	                          this.settings.childConfigMap.delete(child);
	                      var clonedChild = React.cloneElement(child,props);
	                      this.settings.configChildMap.set(childConfig,clonedChild);
	                      this.settings.childConfigMap.set(clonedChild,childConfig);
	                      return clonedChild;
	                  }
	               }else{
	                  var configClass = Weave.getPath(childConfig).getType();
	                  var ToolClass =  App.getToolImplementation(configClass);
	                  var newChild = <ToolClass settings={childConfig}/>;
	                  this.settings.configChildMap.set(childConfig,newChild);
	                  this.settings.childConfigMap.set(newChild,childConfig);
	                  return newChild;
	               }
	           }.bind(this));
	           return clonedChildren;
	      }*/

	    App.mergeInto = function (into, obj) {
	        for (var attr in obj) {
	            into[attr] = obj[attr];
	        }
	        return into;
	    };

	    module.exports = App;
	})(module);
	//# sourceMappingURL=data:application/json;base64,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LEFBQWdCO0tBN0J1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOUI1QixBQUdmLE9BbUdBLENBQUEsQUFBSSxzQkFBWSxBQUFTLE1BQVQsQUFBZTthQUN0QixJQUFBLEFBQUksUUFBVCxBQUFpQixLQUFLLEFBQ2xCO2lCQUFBLEFBQUssUUFBUSxJQURqQixBQUFzQixBQUNsQixBQUFhLEFBQUksQUFFckI7O2VBMUdXLEFBc0dDLEFBQW9CLEFBSWhDLEFBQU8sQUFLWCxLQVRvQyxBQUNoQztLQURZOztXQVNoQixBQUFPLFVBL0dWLEFBQWtCLEFBK0dmLEFBQWlCO0dBL0dyQixBQUFDLEFBaUhDIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnICBmcm9tIFwiLi4vY29uZmlncy9IVE1MV3JhcHBlckNvbmZpZ1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuXG4gICAgZnVuY3Rpb24gQXBwKCkge1xuXG4gICAgfVxuXG4gICAgdmFyIHRvb2xSZWdpc3RyeSA9IHt9O1xuXG5cbiAgICBBcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAoYXNDbGFzc05hbWUsIGpzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCF0b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdKVxuICAgICAgICAgICAgdG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSA9IGpzQ2xhc3M7XG4gICAgfVxuXG4gICAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uIChhc0NsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gdG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXTtcbiAgICB9XG5cbiAgICB2YXIgdG9vbENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcblxuICAgIEFwcC5yZWdpc3RlclRvb2xDb25maWcgPSBmdW5jdGlvbiAodG9vbCwgY29uZmlnKSB7XG4gICAgICAgIGlmICghdG9vbENvbmZpZ01hcC5oYXModG9vbCkpXG4gICAgICAgICAgICB0b29sQ29uZmlnTWFwLnNldCh0b29sLGNvbmZpZyk7XG4gICAgfVxuXG4gICAgQXBwLmdldFRvb2xDb25maWcgPSBmdW5jdGlvbiAodG9vbCkge1xuICAgICAgICByZXR1cm4gdG9vbENvbmZpZ01hcC5nZXQodG9vbCk7XG4gICAgfVxuXG4gICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkcmVuLGNvbmZpZyl7XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuXG4gICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSl7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9IGNvbmZpZy5jaGlsZHJlbi5nZXROYW1lKGtleSk7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVtb3ZlT2JqZWN0KGNvbmZpZ05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sZnVuY3Rpb24oY2hpbGQsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRDb25maWdNYXAuZ2V0KGNoaWxkKTtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZ05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXsgLy8gZm9yIEhUTUwgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZighY2hpbGRDb25maWcpe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXsgLy8gZm9yIFJlYWN0IENvbXBvc2l0ZSBFbGVtZW50c1xuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IEFwcC5nZXRUb29sQ29uZmlnKGNoaWxkLnR5cGUpO1xuICAgICAgICAgICAgICAgIGlmKCFjaGlsZENvbmZpZyAmJiBjb25maWdDbGFzcyl7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNoaWxkLnByb3BzLnN0eWxlKWNoaWxkQ29uZmlnLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBjaGlsZC5wcm9wcy5zdHlsZTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcC5zZXQoY2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjaGlsZCk7XG4gICAgICAgICAgICAvL2NvbmZpZy5jb25maWdDaGlsZE9iamVjdE1hcFtjaGlsZENvbmZpZ05hbWVdID0gY2hpbGRDb25maWc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAvKiAgQXBwLnJlbmRlckNoaWxkcmVuID0gZnVuY3Rpb24ocmVhY3RDb21wLENTUyxhZGRpdGlvbmFsUHJvcHMsbmV3UHJvcHMpe1xuICAgICAgICB2YXIgY2hpbGRDb25maWdzID0gcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbihjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcblxuXG4gICAgICAgICAgICBpZihjaGlsZCl7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BzID0gQXBwLm1lcmdlSW50byh7fSxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxIVE1MV3JhcHBlciBzZXR0aW5ncz17Y2hpbGRDb25maWd9PntjaGlsZH08L0hUTUxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IEFwcC5tZXJnZUludG8ocHJvcHMsYWRkaXRpb25hbFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICBpZihDU1Mpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSBDU1NbY2hpbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wiQ1NTXCJdID0gQ1NTO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV2VhdmUuZ2V0UGF0aChjaGlsZENvbmZpZykuZ2V0VHlwZSgpO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPFRvb2xDbGFzcyBzZXR0aW5ncz17Y2hpbGRDb25maWd9Lz47XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsbmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KG5ld0NoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuICAgIH0qL1xuXG4gICAgQXBwLm1lcmdlSW50byA9IGZ1bmN0aW9uKGludG8sIG9iaikge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _appendVendorPrefix = __webpack_require__(10);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getVendorPropertyName = __webpack_require__(11);

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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var HTMLWrapperConfig = function HTMLWrapperConfig() {
	    _classCallCheck(this, HTMLWrapperConfig);

	    //to-do need to add verifier for each Session property to restrict to respective property

	    Object.defineProperties(this, {
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	        },
	        "useCSS": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	        }
	    });
	};

	Weave.registerClass('weavereact.HTMLWrapperConfig', HTMLWrapperConfig, [weavejs.api.core.ILinkableObject]);

	exports.default = HTMLWrapperConfig;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR00sNkJBQUEsQUFFRjswQkFGRSxBQUVXLEFBRVI7Ozs7QUFGUSxXQUVSLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMzQjtpQkFBUSxBQUNKO21CQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sa0JBRHJDLEFBQ0ksQUFBTyxBQUVYOztlQUFNLEFBQ0Y7bUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7a0JBQVMsQUFDTDttQkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxnQkFWOUQsQUFBYSxBQUVSLEFBT0csQUFDSSxBQUFPLEFBQTBCLEFBQWlDOzs7Q0FWOUU7O0FBaUJKLE1BQUEsQUFBTSxjQUFOLEFBQW9CLGdDQUFwQixBQUFvRCxtQkFBa0IsQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQW5GLEFBQXVFLEFBQWlCOztrQkFFekUiLCJmaWxlIjoiSFRNTFdyYXBwZXJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi9JbmxpbmVTdHlsZVwiO1xuXG5jbGFzcyBIVE1MV3JhcHBlckNvbmZpZ3tcblxuICAgIGNvbnN0cnVjdG9yKCl7Ly90by1kbyBuZWVkIHRvIGFkZCB2ZXJpZmllciBmb3IgZWFjaCBTZXNzaW9uIHByb3BlcnR5IHRvIHJlc3RyaWN0IHRvIHJlc3BlY3RpdmUgcHJvcGVydHlcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LkhUTUxXcmFwcGVyQ29uZmlnJywgSFRNTFdyYXBwZXJDb25maWcsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxXcmFwcGVyQ29uZmlnO1xuIl19

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _Style = __webpack_require__(9);

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
	            },
	            "domDefined": { // for props.style
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
	            properties = properties ? properties : ['border', 'margin', 'padding', 'font', 'other', 'color', 'background', 'display', 'position', 'domDefined'];
	            return _Style2.default.getStyleStateFor(this, properties, appendVendorPrefix);
	        }
	    }]);

	    return InlineStyle;
	}();

	Weave.registerClass('weavereact.InlineStyle', InlineStyle, [weavejs.api.core.ILinkableObject]);

	exports.default = InlineStyle;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklubGluZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFFTSxBQUlGOzhCQUpFLEFBSVcsQUFFUjs7OztBQUZRLGVBRVIsQUFBTyxpQkFBUCxBQUF3QixNQUFNLEFBQzNCO3NCQUFVLEFBQ047dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7c0JBQVUsQUFDTjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOzt1QkFBVyxBQUNQO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFFdEQ7O29CQUFRLEFBQ0o7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7cUJBQVMsQUFDTDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOzswQkFBYyxBQUNWO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FuQjVDLEFBRVIsQUFnQkcsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFLekQ7Ozs7ZUFBQSxBQUFPLGlCQUFQLEFBQXdCLE1BQU0sQUFDM0I7cUJBQVMsQUFDTDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOzswQkFBYyxBQUNWO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFFdEQ7O3VCQUFXLEFBQ1A7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7d0JBQVksQUFDUjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBbkN6RCxBQUFhLEFBd0JSLEFBVUcsQUFDSSxBQUFPLEFBQThCLEFBQWE7Ozs7O2lCQXZDNUQ7O29DQThDVSxZQUFXLG9CQUFtQixBQUN0Qzt5QkFBYSxhQUFBLEFBQVcsYUFBVyxDQUFBLEFBQUMsVUFBRCxBQUFVLFVBQVYsQUFBbUIsV0FBbkIsQUFBNkIsUUFBN0IsQUFBb0MsU0FBcEMsQUFBNEMsU0FBNUMsQUFBb0QsY0FBcEQsQUFBaUUsV0FBakUsQUFBMkUsWUFEeEUsQUFDekIsQUFBc0IsQUFBc0YsQUFDekg7bUJBQU8sZ0JBQUEsQUFBTyxpQkFBUCxBQUF3QixNQUF4QixBQUE2QixZQUZFLEFBRXRDLEFBQU8sQUFBd0M7O1FBNUNuRDs7V0FKRTtHQUFBOztBQW9ETixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsYUFBWSxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBdkUsQUFBMkQsQUFBaUI7O2tCQUU3RCIsImZpbGUiOiJJbmxpbmVTdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZXMgZnJvbSBcIi4uL3V0aWxzL1N0eWxlXCI7XG5cbmNsYXNzIElubGluZVN0eWxle1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKCl7Ly90by1kbyBuZWVkIHRvIGFkZCB2ZXJpZmllciBmb3IgZWFjaCBTZXNzaW9uIHByb3BlcnR5IHRvIHJlc3RyaWN0IHRvIHJlc3BlY3RpdmUgcHJvcGVydHlcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJib3JkZXJcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWFyZ2luXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBhZGRpbmdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZm9udFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvdGhlclwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkb21EZWZpbmVkXCI6IHsgLy8gZm9yIHByb3BzLnN0eWxlXG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJhY2tncm91bmRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRpc3BsYXlcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICBnZXRTdHlsZUZvcihwcm9wZXJ0aWVzLGFwcGVuZFZlbmRvclByZWZpeCl7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzP3Byb3BlcnRpZXM6Wydib3JkZXInLCdtYXJnaW4nLCdwYWRkaW5nJywnZm9udCcsJ290aGVyJywnY29sb3InLCdiYWNrZ3JvdW5kJywnZGlzcGxheScsJ3Bvc2l0aW9uJywnZG9tRGVmaW5lZCddXG4gICAgICAgIHJldHVybiBTdHlsZXMuZ2V0U3R5bGVTdGF0ZUZvcih0aGlzLHByb3BlcnRpZXMsYXBwZW5kVmVuZG9yUHJlZml4KTtcbiAgICB9XG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuSW5saW5lU3R5bGUnLCBJbmxpbmVTdHlsZSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5saW5lU3R5bGU7XG4iXX0=

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Style = __webpack_require__(9);

	var _Style2 = _interopRequireDefault(_Style);

	var _NodeConfig = __webpack_require__(15);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTTtvQkFFRjs7YUFGRSxBQUVGLEtBQUEsQUFBWTs4QkFGVixBQUVpQjs7MkVBRmpCLGlCQUVpQixBQUNULEFBQ047O2NBQUEsQUFBSyxXQUFXLE1BQUEsQUFBSyxNQUFMLEFBQVcsV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVMsaUJBRjNDLEFBRUMsQUFDaEI7Y0FBQSxBQUFLLFNBQVMsTUFBQSxBQUFLLE9BQUwsQUFBWSxLQUhYLEFBR2YsQUFDQTtjQUFBLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQUp2QixBQUlmLEFBQ0E7Y0FBQSxBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FMdkIsQUFLZixBQUNBO2NBQUEsQUFBSywwQkFBMEIsTUFBQSxBQUFLLHdCQUFMLEFBQTZCLEtBTjdDLEFBTWYsQUFDQTtjQUFBLEFBQUssd0JBQXdCLE1BQUEsQUFBSyxNQUFMLEFBQVcsTUFBSyxNQUFBLEFBQUssTUFBTCxBQUFXLE9BQU0sTUFBQSxBQUFLLE1BUHBELEFBT2YsQUFBOEQsQUFBVztlQVA3RSxNQUFtQjs7O2lCQUZqQjs7NENBWWlCLEFBQ2Y7aUJBQUEsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQixxQkFBbkIsQUFBd0MsTUFBTSxLQUQvQixBQUNmLEFBQThDLEFBQUssQUFDbkQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsU0FBZCxBQUF1QixtQkFBdkIsQUFBMEMscUJBQTFDLEFBQStELE1BQU0sS0FGdEQsQUFFZixBQUFxRSxBQUFLLEFBQzFFO2lCQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IscUJBQXBCLEFBQXlDLE1BQU0sS0FIaEMsQUFHZixBQUErQyxBQUFLLEFBQ3BEO2lCQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIscUJBQXJCLEFBQTBDLE1BQU0sS0FKakMsQUFJZixBQUFnRCxBQUFLOzs7OytDQUdqQyxBQUNwQjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLGVBQW5CLEFBQWtDLE1BQU0sS0FEcEIsQUFDcEIsQUFBd0MsQUFBSyxBQUM3QztpQkFBQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCLG1CQUF2QixBQUEwQyxlQUExQyxBQUF5RCxNQUFNLEtBRjNDLEFBRXBCLEFBQStELEFBQUssQUFDcEU7aUJBQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixlQUFwQixBQUFtQyxNQUFNLEtBSHJCLEFBR3BCLEFBQXlDLEFBQUssQUFDOUM7aUJBQUEsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQixlQUFyQixBQUFvQyxNQUFNLEtBSnRCLEFBSXBCLEFBQTBDLEFBQUs7Ozs7aUNBRzNDLEFBQ0o7aUJBQUEsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQixRQUFRLENBQUMsS0FBQSxBQUFLLFNBQUwsQUFBYyxLQUR0QyxBQUN3QixBQUFtQixBQUMvQztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQ1YsS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLEtBQXpCLEFBQThCLE1BQUssS0FBQSxBQUFLLE1BRDVDLEFBQ0ksQUFBbUMsQUFBVyxBQUNsRDtpQkFBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLGlCQUFpQixLQUpuQyxBQUlKLEFBQXVDLEFBQUs7Ozs7Z0RBSXhCLE1BQUssT0FBTTtpQkFDL0IsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixRQUFRLEtBQUEsQUFBSyxhQUFMLEFBQWtCLE1BRFIsQUFDdEMsQUFBNEIsQUFBdUIsQUFDbkQ7Z0JBQUksWUFBWSxLQUFBLEFBQUssYUFBTCxBQUFrQixNQUZJLEFBRWxDLEFBQVksQUFBdUIsQUFDdkMsT0FIc0MsQUFDdEM7Z0JBRUksYUFBYSxVQUFBLEFBQVUsUUFBUSxBQUMvQjtxQkFBQSxBQUFLLFNBQUwsQUFBYyxTQURpQixBQUMvQixBQUF1QixBQUN2QjtxQkFBSyxJQUFJLElBQUEsQUFBSSxHQUFHLElBQUksVUFBQSxBQUFVLFFBQTlCLEFBQXNDO3dCQUM5QixhQUFhLFNBRHNCLEFBQ3RCLEFBQVMsQUFDMUIsRUFGdUMsQUFDdkM7eUJBQ0EsQUFBSyxTQUFMLEFBQWMsU0FBZCxBQUF1QixjQUF2QixBQUFxQyx5QkFGekMsQUFBMkMsQUFJM0M7O3FCQUFBLEFBQUssU0FBTCxBQUFjLFNBTmxCLEFBQW1DLEFBTS9CLEFBQXVCOzs7OztxQ0FJbEIsTUFBSyxPQUFNLEFBQ3BCO2dCQUFBLEFBQUcsTUFBSyxBQUNKO29CQUFHLEtBQUEsQUFBSyxrQkFBTCxBQUF1QjsyQkFDZixLQURYLEFBQW1DLEFBQy9CLEFBQU8sQUFBSyxTQURtQixBQUMvQjt1QkFDQyxBQUNGOzJCQUFPLEtBSmQsQUFDSSxBQUVLLEFBQ0YsQUFBTyxBQUFLOzttQkFHZCxPQVBMLEFBT0ssQUFBTzs7OztxQ0FJSCxNQUFLLE9BQU0sQUFDcEI7Z0JBQUEsQUFBRyxNQUFLLEFBQ0o7b0JBQUcsS0FBQSxBQUFLLGtCQUFMLEFBQXVCOzJCQUNmLEtBRFgsQUFBbUMsQUFDL0IsQUFBTyxBQUFLLFNBRG1CLEFBQy9CO3VCQUNDLEFBQ0Q7MkJBQU8sS0FKZixBQUNJLEFBRUssQUFDRCxBQUFPLEFBQUs7O21CQUVmLEFBQ0Q7dUJBUEosQUFNSyxBQUNELEFBQU87Ozs7O2tEQUlXLFdBQVUsQUFDaEM7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLFVBQUEsQUFBVSxNQUFLLEFBQ2xDO3FCQUFBLEFBQUssd0JBQXdCLFVBQUEsQUFBVSxNQUFLLFVBQUEsQUFBVSxPQUFNLFVBRGhFLEFBQXNDLEFBQ2xDLEFBQTRELEFBQVU7Ozs7OztnQkFTdEUsU0FBUyxxQ0FEUixBQUNELEFBQ0o7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFLLEFBQ2Y7b0JBQUksVUFEVyxBQUNYLEFBQVUsQUFDZDtvQkFBSSxRQUFRLEtBQUEsQUFBSyxTQUZGLEFBRVgsQUFBUSxBQUFjLEFBQzFCO29CQUFHLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQixPQUFNLEFBQ3hCO3dCQUFHLE1BQUEsQUFBTSxTQUFOLEFBQWUsR0FBRSxBQUNoQjs0QkFBSSxZQUFZLEtBQUEsQUFBSyxhQUFhLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBSyxLQUFBLEFBQUssTUFEdkMsQUFDWixBQUE4QyxBQUFXLEFBQzdEOzZCQUFLLElBQUksSUFBQSxBQUFJLEdBQUksSUFBSSxNQUFBLEFBQU0sUUFBM0IsQUFBbUM7Z0NBQzNCLFdBQVcsVUFEb0IsQUFDL0IsQUFBVyxBQUFVLEFBQ3pCLEdBRm1DLEFBQ25DO2dDQUNJLGFBQWEsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCLFVBQVcsTUFGaEIsQUFFL0IsQUFBYSxBQUFrQyxBQUFNLEFBQ3pEO29DQUFBLEFBQVEsS0FBSyw4QkFBQSxBQUFDLFFBQUssS0FBQSxBQUFLLEdBQUcsTUFBQSxBQUFNLFVBQVUsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8sT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8sWUFBWSxLQUFBLEFBQUssTUFBTCxBQUFXLFlBQVksVUFBQSxBQUFVLFlBQVksZUFBZSxLQUFBLEFBQUssTUFOdEwsQUFDSSxBQUVJLEFBQXVDLEFBR25DLEFBQWEsQUFBd0osQUFBVyxBQUs1TDs7Ozs7b0JBQUcsTUFBQSxBQUFNLFNBQU4sQUFBZSxHQUFFLEFBQ2hCOzt3QkFBSSxzQkFBc0IsZ0JBQUEsQUFBTyxtQkFBbUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUQvQyxBQUNaLEFBQXNCLEFBQTBCLEFBQXNCLEFBQzFFO3dCQUFJLGFBQWEsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLGNBQWMsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFLLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FGbkUsQUFFWixBQUFpRSxBQUFtQixBQUN4Rjt3QkFBSSxXQUFXLHdDQUFNLFNBQVMsS0FBZixBQUFlLEFBQUssVUFDZixxQ0FBRyxXQUFBLEFBQVcsWUFBWSxPQUQvQixBQUNLLEFBQTBCLEFBQU8sNkJBQzFCLEtBQUEsQUFBSyxTQUFMLEFBQWMsTUFMekIsQUFHWixBQUV1QixBQUFvQixBQUUvQzt3QkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsV0FBdEIsQUFBaUMsT0FBTSxBQUN0QzttQ0FBVyx3Q0FBTSxTQUFTLEtBQWYsQUFBZSxBQUFLLFVBQ2QsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLE9BRDFCLEtBRUsscUNBQUcsV0FBQSxBQUFXLFlBQVksT0FIOUMsQUFBMEMsQUFDdEMsQUFBVyxBQUVLLEFBQTBCLEFBQU8sQUFHckQ7O3dCQUFJLGNBQWMsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLFlBYnhCLEFBYUUsQUFBa0MsQUFDcEQ7NkJBQVMsd0NBQU0sT0FBTyxFQUFDLGlCQUFnQixLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsVUFBcEQsQUFBTSxBQUF3QixBQUFnQyxXQUE5RCxBQUNJLFVBQ0Qsc0NBQUksT0FBTyxFQUFDLGVBQUEsQUFBYyxRQUFPLGFBQWpDLEFBQUksQUFBNkIsQUFBWSxpQkFoQjdELEFBQW9CLEFBY2hCLEFBQVMsQUFFRyxBQUNLO3VCQUlqQixBQUNBOzt3QkFBSSxPQUFPLEtBQUEsQUFBSyxTQUFMLEFBQWMsTUFEekIsQUFDVyxBQUFvQixBQUMvQjt3QkFBSSxXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixZQUFZLEtBQUEsQUFBSyxNQUZ0RCxBQUVJLEFBQTZDLEFBQVcsQUFDNUQ7d0JBQUksZ0JBQWdCLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FIL0IsQUFHSSxBQUFnQixBQUFzQixBQUMxQzt3QkFBSSxrQkFBa0IsS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLFFBQXJCLEFBQTJCLFlBSmpELEFBSXNCLEFBQXFDLEFBQzNEO3dCQUFJLGVBQWUsRUFBQyxPQUFBLEFBQU0saUJBQWdCLGlCQUFnQixLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsVUFMaEYsQUFLSSxBQUFzRCxBQUFnQyxBQUMxRjttQ0FBZSxnQkFBQSxBQUFPLGtCQUFQLEFBQXlCLGNBQWEsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLFdBTjNFLEFBTUEsQUFBcUQsQUFBaUMsQUFDdEY7d0JBQUcsWUFBWSxTQUFBLEFBQVMsUUFBVCxBQUFpQixZQUFZLENBQUEsQUFBQyxHQUN6QyxTQUFTLHNDQUFJLE9BQUEsQUFBTyxjQUFjLFNBQVMsS0FBbEMsQUFBa0MsQUFBSyxVQUNwQyxxQ0FBRyxXQUROLEFBQ0csQUFBRyxBQUFXLGtCQUY5QixBQUNJLEFBQVMsQUFFVSxXQUVsQixJQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixtQkFBdEIsQUFBeUMsT0FDN0MsU0FBUyxzQ0FBSSxPQUFBLEFBQU8sY0FBYyxTQUFTLEtBQWxDLEFBQWtDLEFBQUssVUFDcEMsd0NBQU0sT0FBTixBQUFNLEFBQU8saUJBRGhCLEFBQ0csQUFBNkIsZ0JBRnhDLEFBQ0QsQUFBUyxBQUVVLFdBR25CLFNBQVMsc0NBQUksT0FBQSxBQUFPLGNBQWMsU0FBUyxLQUFsQyxBQUFrQyxBQUFLLGVBckQ1RCxBQWNJLEFBaUNTLEFBTUQsQUFBUyxBQUNVLEFBTW5DOzs7O21CQTlEUyxBQThEVCxBQUFTLE9BOURBLEFBQ0w7Ozs7V0FsRkY7RUFBYSxnQkFBQSxBQUFNOztBQW9KekIsY0FBQSxBQUFJLDJCQUFKLEFBQStCLHlCQUEvQixBQUF1RDtrQkFDeEMiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE5vZGVDb25maWcoKTtcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0VHJlZUxhYmVsID0gdGhpcy5nZXRUcmVlTGFiZWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uU3RhdGVGcm9tVHJlZSA9IHRoaXMuc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uU3RhdGVGcm9tVHJlZSh0aGlzLnByb3BzLmRhdGEsdGhpcy5wcm9wcy5sYWJlbCx0aGlzLnByb3BzLm5vZGVzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSAhdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpXG4gICAgfVxuXG5cbiAgICBzZXRTZXNzaW9uU3RhdGVGcm9tVHJlZShkYXRhLGxhYmVsLG5vZGVzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWUgPSB0aGlzLmdldFRyZWVMYWJlbChkYXRhLGxhYmVsKTtcbiAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzKGRhdGEsbm9kZXMpO1xuICAgICAgICBpZiAodHJlZU5vZGVzICYmIHRyZWVOb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdE5hbWUgPSBcIm5vZGVcIiArIGk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KG9iamVjdE5hbWUsIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRyZWVOb2RlcyhkYXRhLG5vZGVzKXtcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW25vZGVzXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtub2Rlc10oKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbm9kZXNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIFtdO1xuXG4gICAgfVxuXG4gICAgZ2V0VHJlZUxhYmVsKGRhdGEsbGFiZWwpe1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGFbbGFiZWxdIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2xhYmVsXSgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbGFiZWxdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUobmV4dFByb3BzLmRhdGEsbmV4dFByb3BzLmxhYmVsLG5leHRQcm9wcy5ub2Rlcyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG5vZGVVSSA9IDxkaXYvPjtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHZhciBub2Rlc1VJID0gW107XG4gICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpe1xuICAgICAgICAgICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXModGhpcy5wcm9wcy5kYXRhLHRoaXMucHJvcHMubm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBub2Rlcy5sZW5ndGggO2krKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJlZUl0ZW0gPSB0cmVlTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0KCBub2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1VJLnB1c2goPE5vZGUga2V5PXtpfSBkYXRhPXt0cmVlSXRlbX0gbGFiZWw9e3RoaXMucHJvcHMubGFiZWx9IG5vZGVzPXt0aGlzLnByb3BzLm5vZGVzfSB0cmVlQ29uZmlnPXt0aGlzLnByb3BzLnRyZWVDb25maWd9IHNldHRpbmdzPXtub2RlQ29uZmlnfSBjbGlja0NhbGxiYWNrPXt0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2t9Lz4pIDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7IC8vZm9sZGVyXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVJY29uU3R5bGVPYmplY3QgPSBTdHlsZXMuYXBwZW5kVmVuZG9yUHJlZml4KHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXROb2RlSWNvblN0eWxlKCkpO1xuICAgICAgICAgICAgICAgIHZhciBmb2xkZXJJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZvbGRlckljb24odGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGZvbGRlclVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmb2xkZXJJY29ufSBzdHlsZT17bm9kZUljb25TdHlsZU9iamVjdH0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3t0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5yaWdodEFsaWduLnZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgZm9sZGVyVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZX0mIzE2MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Zm9sZGVySWNvbn0gc3R5bGU9e25vZGVJY29uU3R5bGVPYmplY3R9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBub2RlUGFkZGluZyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy52YWx1ZTtcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8c3BhbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjp0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZUNvbG9yLnZhbHVlfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvbGRlclVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGU6XCJub25lXCIscGFkZGluZ0xlZnQ6bm9kZVBhZGRpbmd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNleyAvL2xlYWZcbiAgICAgICAgICAgICAgICB2YXIgbGVhZiA9IHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGVJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZpbGVJY29uKHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGVJY29uU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0RmlsZUljb25TdHlsZSgpO1xuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVMZWFmQ29sb3IgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZT9cIiMwMDAwMDBcIjpcIiM5ZDlkOWRcIjtcbiAgICAgICAgICAgICAgICB2YXIgbGVhZlN0eWxlT2JqID0ge2NvbG9yOmFjdGl2ZUxlYWZDb2xvcixiYWNrZ3JvdW5kQ29sb3I6dGhpcy5wcm9wcy50cmVlQ29uZmlnLmxlYWZDb2xvci52YWx1ZX1cbiAgICAgICAgICAgICAgICBsZWFmU3R5bGVPYmogPSBTdHlsZXMubWVyZ2VTdHlsZU9iamVjdHMobGVhZlN0eWxlT2JqLHRoaXMucHJvcHMudHJlZUNvbmZpZy5sZWFmQm9yZGVyLnN0YXRlKVxuICAgICAgICAgICAgICAgIGlmKGZpbGVJY29uICYmIGZpbGVJY29uLmluZGV4T2YoXCJmYSBmYS1cIikgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgbm9kZVVJID0gPGxpIHN0eWxlPXtsZWFmU3R5bGVPYmp9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzE2MDt7bGVhZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5lbmFibGVEYXRhVHlwZUljb24udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlT2JqfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtmaWxlSWNvblN0eWxlfT57ZmlsZUljb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzE2MDt7bGVhZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlT2JqfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3tsZWFmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIHJldHVybiAoIG5vZGVVSSk7XG4gICAgfVxuXG59XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==

/***/ },
/* 15 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _NodeConfig = __webpack_require__(15);

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
	//# sourceMappingURL=data:application/json;base64,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d0JBekdPLEFBc0dNLEFBQVksQUFDN0IsQUFFSSxBQUFZO1VBSGEsQUFDN0I7S0FEaUI7OztBQXRHTixBQUVmLFNBZ0hBLENBQUEsQUFBTSxjQUFOLEFBQW9CLHlCQWxITCxBQWtIZixBQUE2QyxBQUU3Qzs7V0FBQSxBQUFPLFVBcEhWLEFBQWtCLEFBb0hmLEFBQWlCO0dBcEhyQixBQUFDLEFBc0hDIiwiZmlsZSI6IlRyZWVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFRyZWVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJmb2xkZXJJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZm9sZGVyXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZm9sZGVyT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1mb2xkZXItb3BlblwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZmlsZU9wZW5JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0LW9cIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVEYXRhVHlwZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibm9kZVBhZGRpbmdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMHB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibm9kZUNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZkNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZkJvcmRlclwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdE5vZGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBOb2RlQ29uZmlnKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YVR5cGVzTWFwID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZXREYXRhVHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5sZWFmQm9yZGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgYm9yZGVyQm90dG9tOlwiMXB4IHNvbGlkICMwMzY5QjFcIlxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgdmFyIHAgPSBUcmVlQ29uZmlnLnByb3RvdHlwZTtcblxuXG5cbiAgICBwLmNoYW5nZUFjdGl2ZU5vZGUgPSBmdW5jdGlvbiAobm9kZUNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbm9kZUNvbmZpZztcbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcC5nZXRGaWxlSWNvbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYodGhpcy5lbmFibGVEYXRhVHlwZUljb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVR5cGVzTWFwICYmIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlT3Blbkljb24udmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfWVsc2VcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgfVxuXG4gICAgcC5nZXRGb2xkZXJJY29uID0gZnVuY3Rpb24gKGRhdGEsIGlzT3Blbikge1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhVHlwZXNNYXAgJiYgdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBpc09wZW4gPyB0aGlzLmZvbGRlck9wZW5JY29uLnZhbHVlIDogdGhpcy5mb2xkZXJJY29uLnZhbHVlO1xuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICB9XG5cbiAgICBwLmdldEZpbGVJY29uU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiM3ZmQ2ZjlcIixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiM3B4XCIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiM3B4XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxMXB4XCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAuZ2V0Tm9kZUljb25TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiM3ZmQ2ZjlcIixcbiAgICAgICAgICAgIHRleHRTaGFkb3c6IFwiLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFja1wiXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuVHJlZUNvbmZpZycsIFRyZWVDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBUcmVlQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(9);

	var _Style2 = _interopRequireDefault(_Style);

	var _ModalConfig = __webpack_require__(18);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _ModalPanelConfig = __webpack_require__(19);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	(function (module) {

	    function ModalPanelConfig() {

	        Object.defineProperties(this, {

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
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsUGFuZWxDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxDQUFDLFVBQUEsQUFBVTs7YUFFUCxBQUFTOztlQUVMLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUUxQjs7cUJBQVMsQUFDTDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQUxsQyxBQUV4QixBQUVJLEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUt6RTs7O1dBVndCLEFBRXhCOztlQVFBLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMxQjtxQkFBUyxBQUNMO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGVBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUVyRTs7c0JBQVUsQUFDTjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBZ0MsQUFFckU7OzBCQUFjLEFBQ1Y7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUFEdEQsQUFDSSxBQUFPLEFBQTBCLEFBQWdDLEFBRXJFOzt5QkFBYSxBQUNUO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGVBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUVyRTs7b0JBQVEsQUFDSjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBZ0MsQUFFckU7O21CQUFPLEFBQ0g7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUEzQjlELEFBQTRCLEFBVXhCLEFBZ0JJLEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQVE3RTs7Ozs7O1FBQUksSUFBSSxpQkFyQ08sQUFxQ1AsQUFBaUIsQUFFekI7O01BQUEsQUFBRTtlQUNTLEFBQ0g7bUJBQU8sS0FBQSxBQUFLLElBQUwsQUFBUyxBQUNoQjtvQkFBUSxLQUFBLEFBQUssS0FBTCxBQUFVLEFBQ2xCO3lCQUFhLEtBQUEsQUFBSyxVQUFMLEFBQWUsQUFDNUI7MEJBQWMsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDOUI7cUJBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNwQjtzQkFBVSxLQUFBLEFBQUssT0E5Q1IsQUF1Q0ksQUFBWSxBQUMzQixBQU1jLEFBQVk7VUFQQyxBQUMzQjtLQURlOzs7QUF2Q0osQUFFZixTQWlEQSxDQUFBLEFBQU0sY0FBTixBQUFvQiwrQkFuREwsQUFtRGYsQUFBbUQsQUFFbkQ7O1dBQUEsQUFBTyxVQXJEVixBQUFrQixBQXFEZixBQUFpQjtHQXJEckIsQUFBQyxBQXVEQyIsImZpbGUiOiJNb2RhbFBhbmVsQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBNb2RhbFBhbmVsQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcblxuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcIndpZHRoXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiNjAlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiODAlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWFyZ2luTGVmdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIi0yMCVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIwXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVmdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjQwJVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRvcFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjIwJVwiKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgdmFyIHAgPSBNb2RhbFBhbmVsQ29uZmlnLnByb3RvdHlwZTtcblxuICAgIHAuZ2V0TGF5b3V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcInRvcFwiOiB0aGlzLnRvcC52YWx1ZSxcbiAgICAgICAgICAgIFwibGVmdFwiOiB0aGlzLmxlZnQudmFsdWUsXG4gICAgICAgICAgICBcIm1hcmdpblRvcFwiOiB0aGlzLm1hcmdpblRvcC52YWx1ZSxcbiAgICAgICAgICAgIFwibWFyZ2luTGVmdFwiOiB0aGlzLm1hcmdpbkxlZnQudmFsdWUsXG4gICAgICAgICAgICBcIndpZHRoXCI6IHRoaXMud2lkdGgudmFsdWUsXG4gICAgICAgICAgICBcImhlaWdodFwiOiB0aGlzLmhlaWdodC52YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Nb2RhbFBhbmVsQ29uZmlnJywgTW9kYWxQYW5lbENvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE1vZGFsUGFuZWxDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ModalPanelConfig = __webpack_require__(19);

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Style = __webpack_require__(9);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(9);

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(9);

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(9);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Brand = __webpack_require__(27);

	var _Brand2 = _interopRequireDefault(_Brand);

	var _Logo = __webpack_require__(29);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _List = __webpack_require__(30);

	var _List2 = _interopRequireDefault(_List);

	var _Form = __webpack_require__(32);

	var _Form2 = _interopRequireDefault(_Form);

	var _Link = __webpack_require__(31);

	var _Link2 = _interopRequireDefault(_Link);

	var _HTMLWrapper = __webpack_require__(28);

	var _HTMLWrapper2 = _interopRequireDefault(_HTMLWrapper);

	var _Config = __webpack_require__(33);

	var _Config2 = _interopRequireDefault(_Config);

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

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

	        _this.settings = _this.props.settings ? _this.props.settings : new _Config2.default.Navbar();
	        _this.getStyle = _this.getStyle.bind(_this);
	        _this.renderChildren = _this.renderChildren.bind(_this);
	        if (_this.props.children) _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);

	        return _this;
	    }

	    _createClass(Navbar, [{
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
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	            this.settings.CSS.addImmediateCallback(this, this.forceUpdate);
	            this.settings.useCSS.addImmediateCallback(this, this.forceUpdate);
	            this.settings.dock.addImmediateCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	            this.settings.CSS.removeCallback(this, this.forceUpdate);
	            this.settings.useCSS.removeCallback(this, this.forceUpdate);
	            this.settings.dock.removeCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren(CSS) {
	            var childConfigs = this.settings.children.getObjects();
	            var clonedChildren = childConfigs.map(function (childConfig, index) {
	                var child = this.settings.configChildMap.get(childConfig);

	                var additionalProps = {
	                    "dock": this.settings.dock.value,
	                    "position": this.settings.style.position.value,
	                    "useCSS": this.settings.useCSS.value
	                };
	                if (child) {
	                    var props = _App2.default.mergeInto({}, child.props);
	                    if (typeof child.type === "string") {
	                        var configName = this.settings.children.getName(childConfig);
	                        return _react2.default.createElement(_HTMLWrapper2.default, { key: configName, settings: childConfig }, child);
	                    } else {
	                        props = _App2.default.mergeInto(props, additionalProps);
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
	                    //this.settings.configChildMap.set(childConfig,newChild);
	                    //this.settings.childConfigMap.set(newChild,childConfig);
	                    return newChild;
	                }
	            }.bind(this));

	            return clonedChildren;
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var styleObj = this.getStyle();
	            var newProps = {};
	            var additionalProps = {
	                "dock": this.settings.dock.value,
	                "position": this.settings.style.position.value,
	                "useCSS": this.settings.useCSS.value
	            };

	            var childrenUI = [];

	            if (this.settings.useCSS.value) {
	                var cssObj = this.settings.CSS.state;
	                childrenUI = this.renderChildren(cssObj);
	                return _react2.default.createElement("nav", { className: cssObj.navbar }, childrenUI);
	            } else {
	                childrenUI = this.renderChildren();
	                return _react2.default.createElement("nav", { style: styleObj }, childrenUI);
	            }
	        }
	    }]);

	    return Navbar;
	}(_react2.default.Component);

	Navbar.Brand = _Brand2.default;
	Navbar.Logo = _Logo2.default;
	Navbar.List = _List2.default;
	Navbar.Link = _Link2.default;
	Navbar.Form = _Form2.default;

	_App2.default.registerToolConfig(Navbar, _Config2.default.Navbar);
	_App2.default.registerToolConfig(Navbar.Brand, _Config2.default.Brand);
	_App2.default.registerToolConfig(Navbar.Logo, _Config2.default.Logo);
	_App2.default.registerToolConfig(Navbar.List, _Config2.default.List);
	_App2.default.registerToolConfig(Navbar.Link, _Config2.default.Link);
	_App2.default.registerToolConfig(Navbar.Form, _Config2.default.Form);

	_App2.default.registerToolImplementation("weavereact.navbarConfig.Navbar", Navbar);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Brand", Navbar.Brand);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Logo", Navbar.Logo);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.List", Navbar.List);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Link", Navbar.Link);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Form", Navbar.Form);

	Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

	exports.default = Navbar;
	//# sourceMappingURL=data:application/json;base64,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QUEsQUFBSSwyQkFBSixBQUErQixrQ0FBL0IsQUFBZ0U7QUFDaEUsY0FBQSxBQUFJLDJCQUFKLEFBQStCLGlDQUFnQyxPQUEvRCxBQUErRCxBQUFPO0FBQ3RFLGNBQUEsQUFBSSwyQkFBSixBQUErQixnQ0FBK0IsT0FBOUQsQUFBOEQsQUFBTztBQUNyRSxjQUFBLEFBQUksMkJBQUosQUFBK0IsZ0NBQStCLE9BQTlELEFBQThELEFBQU87QUFDckUsY0FBQSxBQUFJLDJCQUFKLEFBQStCLGdDQUErQixPQUE5RCxBQUE4RCxBQUFPO0FBQ3JFLGNBQUEsQUFBSSwyQkFBSixBQUErQixnQ0FBK0IsT0FBOUQsQUFBOEQsQUFBTzs7QUFFckUsTUFBQSxBQUFNLGNBQU4sQUFBb0IscUJBQXBCLEFBQXlDLFFBQU8sQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQTdELEFBQWlELEFBQWlCOztrQkFFbkQiLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXIgZnJvbSBcIi4uL0hUTUxXcmFwcGVyXCI7XG5pbXBvcnQgbmF2YmFyQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuXG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzIDogbmV3IG5hdmJhckNvbmZpZy5OYXZiYXIoKTtcbiAgICAgICAgdGhpcy5nZXRTdHlsZSA9IHRoaXMuZ2V0U3R5bGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSl0aGlzLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgIGdldFN0eWxlKCkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwpXG4gICAgICAgICBpZihzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID09PSBcImZpeGVkXCIpe1xuICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJ0b3BcIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ0b3BcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwiYm90dG9tXCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYm90dG9tXCJdID0gXCIwXCI7XG4gICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcInJpZ2h0XCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wicmlnaHRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImxlZnRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKClcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuQ1NTLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudXNlQ1NTLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZG9jay5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFja3MoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuQ1NTLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudXNlQ1NTLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZG9jay5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgIH1cblxuXG5cbiAgICByZW5kZXJDaGlsZHJlbihDU1Mpe1xuICAgICAgICB2YXIgY2hpbGRDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IGNoaWxkQ29uZmlncy5tYXAoZnVuY3Rpb24oY2hpbGRDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5nZXQoY2hpbGRDb25maWcpO1xuXG4gICAgICAgICAgICB2YXIgYWRkaXRpb25hbFByb3BzID0ge1xuICAgICAgICAgICAgICAgIFwiZG9ja1wiOiB0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiOnRoaXMuc2V0dGluZ3Muc3R5bGUucG9zaXRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgXCJ1c2VDU1NcIjp0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IEFwcC5tZXJnZUludG8oe30sY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8SFRNTFdyYXBwZXIga2V5PXtjb25maWdOYW1lfSBzZXR0aW5ncz17Y2hpbGRDb25maWd9PntjaGlsZH08L0hUTUxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IEFwcC5tZXJnZUludG8ocHJvcHMsYWRkaXRpb25hbFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICBpZihDU1Mpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSBDU1NbY2hpbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wiQ1NTXCJdID0gQ1NTO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV2VhdmUuZ2V0UGF0aChjaGlsZENvbmZpZykuZ2V0VHlwZSgpO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSA8VG9vbENsYXNzIGtleT17Y29uZmlnTmFtZX0gIHNldHRpbmdzPXtjaGlsZENvbmZpZ30vPjtcbiAgICAgICAgICAgICAgICAvL3RoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KG5ld0NoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgICB2YXIgbmV3UHJvcHMgPSB7fVxuICAgICAgICB2YXIgYWRkaXRpb25hbFByb3BzID0ge1xuICAgICAgICAgICAgXCJkb2NrXCI6IHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSxcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjp0aGlzLnNldHRpbmdzLnN0eWxlLnBvc2l0aW9uLnZhbHVlLFxuICAgICAgICAgICAgXCJ1c2VDU1NcIjp0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSBbXVxuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciBjc3NPYmogPSB0aGlzLnNldHRpbmdzLkNTUy5zdGF0ZTtcbiAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKGNzc09iaik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjc3NPYmoubmF2YmFyfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbk5hdmJhci5CcmFuZCA9IEJyYW5kO1xuTmF2YmFyLkxvZ28gPSBMb2dvO1xuTmF2YmFyLkxpc3QgPSBMaXN0O1xuTmF2YmFyLkxpbmsgPSBMaW5rO1xuTmF2YmFyLkZvcm0gPSBGb3JtO1xuXG5cbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLG5hdmJhckNvbmZpZy5OYXZiYXIpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuQnJhbmQsbmF2YmFyQ29uZmlnLkJyYW5kKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxvZ28sbmF2YmFyQ29uZmlnLkxvZ28pO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTGlzdCxuYXZiYXJDb25maWcuTGlzdCk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5MaW5rLG5hdmJhckNvbmZpZy5MaW5rKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkZvcm0sbmF2YmFyQ29uZmlnLkZvcm0pO1xuXG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5OYXZiYXJcIixOYXZiYXIpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuQnJhbmRcIixOYXZiYXIuQnJhbmQpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTG9nb1wiLE5hdmJhci5Mb2dvKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpc3RcIixOYXZiYXIuTGlzdCk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaW5rXCIsTmF2YmFyLkxpbmspO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuRm9ybVwiLE5hdmJhci5Gb3JtKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuTmF2YmFyXCIsIE5hdmJhcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cblxuXG5cblxuIl19

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _HTMLWrapper = __webpack_require__(28);

	var _HTMLWrapper2 = _interopRequireDefault(_HTMLWrapper);

	var _App = __webpack_require__(7);

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
	                        return _react2.default.createElement(_HTMLWrapper2.default, { key: configName, settings: childConfig }, child);
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

	                    BrandUI = _react2.default.createElement("div", { className: this.props.css.header }, childrenUI);
	                } else {
	                    var styleObject = this.settings.style.getStyleFor(null, true);
	                    childrenUI = this.renderChildren(null);
	                    BrandUI = _react2.default.createElement("div", { style: styleObject }, childrenUI);
	                }
	            }
	            return BrandUI;
	        }
	    }]);

	    return Brand;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.Brand", Brand, [weavejs.api.core.ILinkableObject]);
	exports.default = Brand;
	//# sourceMappingURL=data:application/json;base64,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QUNELEFBRUo7O2dCQUFHLEtBQUEsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQjs7Ozs7OztvQkFRaEIsYUFSc0IsQUFRdEIsQUFBYSxBQUNqQixHQVQwQixBQVExQjtvQkFDRyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQU8sQUFDakI7aUNBQWEsS0FBQSxBQUFLLGVBQWUsS0FBQSxBQUFLLE1BRHJCLEFBQ2pCLEFBQWlDLEFBQVcsQUFFNUM7OzhCQUFVLHVDQUFLLFdBQVcsS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUEzQixBQUFnQixBQUFlLFVBSDdDLEFBQXFCLEFBR2pCLEFBQVUsQUFDRzt1QkFFWixBQUNEO3dCQUFJLGNBQWMsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLFlBQXBCLEFBQWdDLE1BRGpELEFBQ0csQUFBYyxBQUFxQyxBQUN2RDtpQ0FBYSxLQUFBLEFBQUssZUFGakIsQUFFRCxBQUFhLEFBQW9CLEFBQ2pDOzhCQUFVLHVDQUFLLE9BQUwsQUFBSyxBQUFPLGVBbEI5QixBQVNJLEFBTUssQUFHRCxBQUFVLEFBQ0csQUFLckI7OzttQkEzQkssQUEyQkwsQUFBUSxRQTNCSCxBQUNMOzs7O1dBcklGO0VBQWMsZ0JBQUEsQUFBTTs7QUFrSzFCLE1BQUEsQUFBTSxjQUFOLEFBQW9CLDJCQUFwQixBQUErQyxPQUFNLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFsRSxBQUFzRCxBQUFpQjtrQkFDeEQiLCJmaWxlIjoiQnJhbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSFRNTFdyYXBwZXIgZnJvbSBcIi4uL0hUTUxXcmFwcGVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcblxuY2xhc3MgQnJhbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgdGhpcy5sYW5nU2V0dGluZ3MgPSAodGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLmxhbmdTZXR0aW5ncyk/dGhpcy5wcm9wcy5sYW5nU2V0dGluZ3M6bnVsbDtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSl0aGlzLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIGFkZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBpZih0aGlzLmxhbmdTZXR0aW5ncyl0aGlzLmxhbmdTZXR0aW5ncy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAvL3RoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3MpdGhpcy5sYW5nU2V0dGluZ3MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgLy90aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jayAhPT0gbmV4dFByb3BzLmRvY2spe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHJlbmRlckNoaWxkcmVuKENTUyl7XG4gICAgICAgIHZhciBjaGlsZENvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbihjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLmdldChjaGlsZENvbmZpZyk7XG5cbiAgICAgICAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHt9LGNoaWxkLnByb3BzKTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9ICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEhUTUxXcmFwcGVyIGtleT17Y29uZmlnTmFtZX0gc2V0dGluZ3M9e2NoaWxkQ29uZmlnfT57Y2hpbGR9PC9IVE1MV3JhcHBlcj5cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICBpZihDU1Mpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSBDU1NbY2hpbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wiQ1NTXCJdID0gQ1NTO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5zZXQoY2hpbGRDb25maWcsY2xvbmVkQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV2VhdmUuZ2V0UGF0aChjaGlsZENvbmZpZykuZ2V0VHlwZSgpO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSA8VG9vbENsYXNzIGtleT17Y29uZmlnTmFtZX0gIHNldHRpbmdzPXtjaGlsZENvbmZpZ30vPjtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQobmV3Q2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG5cbiAgICB9XG5cbiAgICAgLypyZW5kZXJDaGlsZHJlbihDU1Mpe1xuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbixmdW5jdGlvbihjaGlsZCxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGROYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IEFwcC5tZXJnZUludG8oe30sY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICBjaGlsZE5hbWUgPSAgY2hpbGQudHlwZSArIGluZGV4O1xuICAgICAgICAgICAgICAgIHZhciBodG1sV3JhcHBlckNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0KGNoaWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxIVE1MV3JhcHBlciBzZXR0aW5ncz17aHRtbFdyYXBwZXJDb25maWd9PntjaGlsZH08L0hUTUxXcmFwcGVyPlxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY2hpbGROYW1lID0gIGNoaWxkLnR5cGUubmFtZSArIGluZGV4O1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0KGNoaWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgICAgIGlmKENTUyl7XG4gICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImNsYXNzTmFtZVwiXSA9IENTU1tjaGlsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJDU1NcIl0gPSBDU1M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sdGhpcyk7XG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9Ki9cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIEJyYW5kVUkgPSA8ZGl2Lz47XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgLyp2YXIgdGl0bGUgPSB0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgdGl0bGVTdHlsZSAgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgICAgICBpZih0aGlzLmxhbmdTZXR0aW5ncyl7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBBcHAuZ2V0VHJhbnNsYXRlZFdvcmQodGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSk7XG4gICAgICAgICAgICB9Ki9cblxuICAgICAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSBbXVxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKHRoaXMucHJvcHMuY3NzKTtcblxuICAgICAgICAgICAgICAgIEJyYW5kVUkgPSA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jc3MuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4obnVsbCk7XG4gICAgICAgICAgICAgICAgQnJhbmRVSSA9IDxkaXYgc3R5bGU9e3N0eWxlT2JqZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKEJyYW5kVUkpO1xuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5CcmFuZFwiLCBCcmFuZCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IEJyYW5kO1xuIl19

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(9);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _HTMLWrapperConfig = __webpack_require__(12);

	var _HTMLWrapperConfig2 = _interopRequireDefault(_HTMLWrapperConfig);

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

	var HTMLWrapper = function (_React$Component) {
	    _inherits(HTMLWrapper, _React$Component);

	    function HTMLWrapper(props) {
	        _classCallCheck(this, HTMLWrapper);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HTMLWrapper).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _HTMLWrapperConfig2.default();
	        _this.renderChildren = _this.renderChildren.bind(_this);
	        return _this;
	    }

	    _createClass(HTMLWrapper, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren(CSS) {
	            var clonedChildren = _react2.default.Children.map(this.props.children, function (child, index) {
	                var childName = "";
	                var props = _App2.default.mergeInto({}, child.props);
	                if (typeof child.type === "string") {
	                    childName = child.type + index;
	                    if (CSS) {
	                        props["className"] = this.props.className;
	                    } else {
	                        var styleConfig = this.settings.style;
	                        var styleObject = styleConfig.getStyleFor(null, true);
	                        props["style"] = child.props.style ? _Style2.default.mergeStyleObjects(styleObject, child.props.style, true) : styleObject;
	                    }
	                }
	                return _react2.default.cloneElement(child, props);
	            }, this);
	            return clonedChildren;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var childrenUI = [];
	            if (this.props.useCSS) {
	                childrenUI = this.renderChildren(this.props.CSS);
	            } else {
	                childrenUI = this.renderChildren(null);
	            }

	            return _react2.default.createElement("div", null, childrenUI);
	        }
	    }]);

	    return HTMLWrapper;
	}(_react2.default.Component);

	_App2.default.registerToolConfig(HTMLWrapper, _HTMLWrapperConfig2.default);

	Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper, [weavejs.api.core.ILinkableObject]);

	exports.default = HTMLWrapper;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007MkJBRUY7O2FBRkUsQUFFRixZQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQix3QkFFaUIsQUFDVCxBQUNOOztjQUFBLEFBQUssV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFTLHdCQUYzQyxBQUVDLEFBQ2hCO2NBQUEsQUFBSyxpQkFBaUIsTUFBQSxBQUFLLGVBQUwsQUFBb0IsS0FIM0IsQUFHZjtlQUhKLE1BQW1COzs7aUJBRmpCOzs0Q0FRaUIsQUFDZjtrQkFBQSxBQUFNLGFBQWEsS0FBbkIsQUFBbUIsQUFBSyxVQUF4QixBQUFrQyxtQkFBbEMsQUFBcUQsTUFBSyxLQUQzQyxBQUNmLEFBQTBELEFBQUs7Ozs7K0NBRzNDLEFBQ25CO2tCQUFBLEFBQU0sYUFBYSxLQUFuQixBQUFtQixBQUFLLFVBQXhCLEFBQWtDLGVBQWxDLEFBQWlELE1BQUssS0FEbkMsQUFDbkIsQUFBc0QsQUFBSzs7Ozt1Q0FHakQ7Z0JBQ1AsaUNBQWlCLEFBQU0sU0FBTixBQUFlLElBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxvQkFBUyxBQUFTLE9BQVQsQUFBZTtvQkFDbkUsWUFEeUUsQUFDekUsQUFBWSxBQUNoQixHQUY2RSxBQUM3RTtvQkFDSSxRQUFRLGNBQUEsQUFBSSxVQUFKLEFBQWMsSUFBRyxNQUZnRCxBQUV6RSxBQUF5QixBQUFNLEFBQ25DO29CQUFHLE9BQU8sTUFBQSxBQUFNLFNBQWIsQUFBdUI7Z0NBQ1QsTUFBQSxBQUFNLE9BRFksQUFDbEIsQUFBYSxBQUMxQixNQUYrQixBQUMvQjt3QkFDQSxBQUFHLEtBQUksQUFDSDs4QkFBQSxBQUFNLGVBQWUsS0FBQSxBQUFLLE1BRDlCLEFBQU8sQUFDa0IsQUFBVzsyQkFFaEMsQUFDQTs0QkFBSSxjQUFjLEtBQUEsQUFBSyxTQUR2QixBQUNrQixBQUFjLEFBQ2hDOzRCQUFJLGNBQWMsWUFBQSxBQUFZLFlBQVosQUFBd0IsTUFGMUMsQUFFSSxBQUFjLEFBQTZCLEFBQy9DOzhCQUFBLEFBQU0sV0FBVyxNQUFBLEFBQU0sTUFBTixBQUFZLFFBQVEsZ0JBQUEsQUFBTyxrQkFBUCxBQUF5QixhQUFZLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBckUsQUFBb0IsQUFBdUQsUUFScEcsQUFFSSxBQUdJLEFBR2lCLEFBQWtGLEFBRzNHOzs7dUJBQU8sZ0JBQUEsQUFBTSxhQUFOLEFBQW1CLE9BZDhCLEFBQXFCLEFBYzdFLEFBQU8sQUFBeUI7YUFkd0IsRUFEN0MsQUFDWCxBQUFpQixBQWVuQixBQUNGLElBaEJxQixFQUROLEFBQ2Y7bUJBRGUsQUFpQmYsQUFBTzs7Ozs7Z0JBSUgsYUFEQyxBQUNELEFBQWEsQUFDakIsR0FGSyxBQUNMO2dCQUNHLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBTyxBQUNqQjs2QkFBYSxLQUFBLEFBQUssZUFBZSxLQUFBLEFBQUssTUFEMUMsQUFBcUIsQUFDakIsQUFBaUMsQUFBVzttQkFDM0MsQUFDRDs2QkFBYSxLQUFBLEFBQUssZUFIdEIsQUFFSyxBQUNELEFBQWEsQUFBb0IsQUFHckM7OzttQkFBUSwyQ0FSSCxBQVFMLEFBQVEsQUFDSzs7OztXQTdDZjtFQUFvQixnQkFBQSxBQUFNOztBQW1EaEMsY0FBQSxBQUFJLG1CQUFKLEFBQXVCOztBQUV2QixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsYUFBWSxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBdkUsQUFBMkQsQUFBaUI7O2tCQUU3RCIsImZpbGUiOiJIVE1MV3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXJDb25maWcgZnJvbSBcIi4uL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcblxuY2xhc3MgSFRNTFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IEhUTUxXcmFwcGVyQ29uZmlnKCk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKENTUyl7XG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLGZ1bmN0aW9uKGNoaWxkLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZE5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIHByb3BzID0gQXBwLm1lcmdlSW50byh7fSxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgIGNoaWxkTmFtZSA9ICBjaGlsZC50eXBlICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgaWYoQ1NTKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gc3R5bGVDb25maWcuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKVxuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInN0eWxlXCJdID0gY2hpbGQucHJvcHMuc3R5bGUgPyBTdHlsZXMubWVyZ2VTdHlsZU9iamVjdHMoc3R5bGVPYmplY3QsY2hpbGQucHJvcHMuc3R5bGUsdHJ1ZSk6IHN0eWxlT2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICB9LHRoaXMpO1xuICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IFtdO1xuICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbih0aGlzLnByb3BzLkNTUyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4obnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICB9XG59XG5cbkFwcC5yZWdpc3RlclRvb2xDb25maWcoSFRNTFdyYXBwZXIsSFRNTFdyYXBwZXJDb25maWcpO1xuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5IVE1MV3JhcHBlclwiLCBIVE1MV3JhcHBlcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTFdyYXBwZXI7XG4iXX0=

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(7);

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

	var Logo = function (_React$Component) {
	    _inherits(Logo, _React$Component);

	    function Logo(props) {
	        _classCallCheck(this, Logo);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Logo).call(this, props));

	        _this.settings = _this.props.settings;
	        if (_this.props.style) _this.settings.style.domDefined.state = _this.props.style;
	        if (_this.props.src) _this.settings.src.state = _this.props.src;
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        return _this;
	    }

	    _createClass(Logo, [{
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
	            if (this.props.src !== nextProps.src) {
	                // user style added through UI is Sessioned
	                this.settings.src.state = nextProps.src;
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
	            this.settings.src.addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            this.settings.src.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
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
	        key: "render",
	        value: function render() {
	            var logoUI = _react2.default.createElement("div", null);

	            if (this.settings.enable.value) {

	                var logoUI = "";
	                if (this.settings.src.state) {
	                    var styleObj = this.settings.style.getStyleFor();
	                    logoUI = _react2.default.createElement("img", { style: styleObj, src: this.settings.src.value });
	                }
	            }
	            return logoUI;
	        }
	    }]);

	    return Logo;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.Logo", Logo, [weavejs.api.core.ILinkableObject]);
	exports.default = Logo;
	//# sourceMappingURL=data:application/json;base64,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LE1BQUwsQUFBVyxXQUFXLFVBQUEsQUFBVTt1QkFBbkMsQUFBMEMsQUFDNUMsQUFBTyxLQURxQyxBQUM1QzthQURFLE1BRUQsQUFDRDt1QkFIRSxBQUVELEFBQ0QsQUFBTzs7Ozs7O2dCQU1QLFNBQVMscUNBRFIsQUFDRCxBQUVKOztnQkFBRyxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUI7O29CQUVoQixTQUZzQixBQUV0QixBQUFTLEFBQ2IsR0FIMEIsQUFFMUI7b0JBQ0csS0FBQSxBQUFLLFNBQUwsQUFBYyxJQUFkLEFBQWtCLE9BQU0sQUFDdkI7d0JBQUksV0FBVyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BRE4sQUFDbkIsQUFBVyxBQUFvQixBQUNuQzs2QkFBUyx1Q0FBSyxPQUFBLEFBQU8sVUFBVSxLQUFLLEtBQUEsQUFBSyxTQUFMLEFBQWMsSUFMMUQsQUFHSSxBQUEyQixBQUV2QixBQUFTLEFBQTJCLEFBQWtCLEFBSTlEOzs7bUJBWkssQUFZTCxBQUFRLE9BWkgsQUFDTDs7OztXQWxFRjtFQUFhLGdCQUFBLEFBQU07O0FBZ0Z6QixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsTUFBSyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBaEUsQUFBb0QsQUFBaUI7a0JBQ3REIiwiZmlsZSI6IkxvZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcblxuY2xhc3MgTG9nbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlKVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zcmMpXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNyYy5zdGF0ZSA9ICB0aGlzLnByb3BzLnNyYztcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MgPSB0aGlzLmFkZENhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcyA9IHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc3R5bGUpdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3JjICE9PSBuZXh0UHJvcHMuc3JjKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNyYy5zdGF0ZSA9IG5leHRQcm9wcy5zcmM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3JjLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrcyAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3JjLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51c2VDU1MgIT09IG5leHRQcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGxvZ29VSSA9IDxkaXYvPjtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG5cbiAgICAgICAgICAgIHZhciBsb2dvVUkgPSBcIlwiO1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5zcmMuc3RhdGUpe1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZU9iaiA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgICAgICAgICBsb2dvVUkgPSA8aW1nIHN0eWxlPXtzdHlsZU9ian0gc3JjPXt0aGlzLnNldHRpbmdzLnNyYy52YWx1ZX0vPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChsb2dvVUkpO1xuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5Mb2dvXCIsIExvZ28sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuIl19

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(9);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Link = __webpack_require__(31);

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
	        if (_this.props.children) _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);

	        return _this;
	    }

	    _createClass(List, [{
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
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	            this.settings.space.addImmediateCallback(this, this.forceUpdate);
	            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
	            this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	            this.settings.space.removeCallback(this, this.forceUpdate);
	            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
	            this.settings.activePage.removeCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
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
	            } else if (Weave.detectChange(this, this.settings.space, this.settings.rightAlign, this.settings.activePage)) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren(CSS) {
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

	            var childConfigs = this.settings.children.getObjects();
	            var clonedChildren = childConfigs.map(function (childConfig, index) {
	                var child = this.settings.configChildMap.get(childConfig);
	                var configName = this.settings.children.getName(childConfig);
	                if (child) {
	                    var props = _App2.default.mergeInto({}, child.props);

	                    props["settings"] = childConfig;
	                    props["pageName"] = configName;
	                    props["iconOnly"] = iconOnly;
	                    props["key"] = configName;
	                    if (configName === this.settings.activePage.value) {
	                        props["isActive"] = true;
	                    } else {
	                        props["isActive"] = false;
	                    }
	                    if (CSS) {
	                        props["className"] = CSS[childName];
	                    } else {
	                        props["style"] = linkStyleObject;
	                    }

	                    if (this.settings.childConfigMap.has(child)) this.settings.childConfigMap.delete(child);
	                    var clonedChild = _react2.default.cloneElement(child, props);
	                    this.settings.configChildMap.set(childConfig, clonedChild);
	                    this.settings.childConfigMap.set(clonedChild, childConfig);
	                    return clonedChild;
	                } else {
	                    var configClass = Weave.getPath(childConfig).getType();
	                    var ToolClass = _App2.default.getToolImplementation(configClass);
	                    var configName = this.settings.children.getName(childConfig);
	                    var newChild = _react2.default.createElement(ToolClass, { key: configName, settings: childConfig });
	                    return newChild;
	                }
	            }.bind(this));

	            return clonedChildren;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var navLinks = _react2.default.createElement("div", null);
	            if (this.settings.enable.value) {
	                var childrenUI = [];
	                var styleObject = this.settings.style.getStyleFor(null, true);

	                if (!this.props.useCSS) {
	                    if (this.props.dock !== "right" && this.props.dock !== "left" && this.settings.rightAlign.value) {
	                        styleObject["justifyContent"] = "flex-end";
	                        styleObject["marginRight"] = "auto";
	                    }
	                    styleObject = _Style2.default.appendVendorPrefix(styleObject);
	                }

	                if (this.props.useCSS) {
	                    childrenUI = this.renderChildren(this.props.CSS);
	                    navLinks = _react2.default.createElement("ul", { className: this.props.className }, childrenUI);
	                } else {
	                    childrenUI = this.renderChildren(null);
	                    navLinks = _react2.default.createElement("ul", { style: styleObject }, childrenUI);
	                }
	            }

	            return navLinks;
	        }
	    }]);

	    return List;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.List", List, [weavejs.api.core.ILinkableObject]);
	exports.default = List;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTTtvQkFFRjs7YUFGRSxBQUVGLEtBQUEsQUFBWTs4QkFGVixBQUVnQjs7MkVBRmhCLGlCQUVnQixBQUNSLEFBQ047O2NBQUEsQUFBSyxXQUFXLE1BQUEsQUFBSyxNQUZQLEFBRUUsQUFBVyxBQUMzQjtZQUFHLE1BQUEsQUFBSyxNQUFMLEFBQVcsVUFBUyxjQUFBLEFBQUkscUNBQXFDLE1BQUEsQUFBSyxNQUFMLEFBQVcsVUFBUyxNQUFwRixBQUF1QixBQUE2RCxBQUFLLEFBQ3pGO2NBQUEsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBSnhCLEFBSWQsQUFDQTtjQUFBLEFBQUssa0JBQWtCLE1BQUEsQUFBSyxnQkFBTCxBQUFxQixLQUw5QixBQUtkOztlQUxKLE1BQWtCOzs7aUJBRmhCOztrREFXd0IsV0FBVSxBQUNoQztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWEsVUFBQSxBQUFVLFVBQVMsQUFDMUM7b0JBQUcsVUFBQSxBQUFVLFVBQVMsQUFDbEI7eUJBRGtCLEFBQ2xCLEFBQUssQUFDTDt5QkFBQSxBQUFLLFdBQVcsVUFGRSxBQUVGLEFBQVUsQUFDMUI7eUJBSlIsQUFDSSxBQUFzQixBQUdsQixBQUFLLEFBR2I7OztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVUsVUFBQSxBQUFVLE9BQU0sQUFDcEM7O29CQUFHLFVBQUEsQUFBVSxPQUFNLEtBQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixXQUFwQixBQUErQixRQUFRLFVBRDlELEFBQ0ksQUFBMEQsQUFBVSxBQUV4RTs7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLFVBQUEsQUFBVSxVQUFTLEFBQzFDOzhCQUFBLEFBQUkscUNBQXFDLFVBQUEsQUFBVSxVQUFTLEtBRGhFLEFBQThDLEFBQzFDLEFBQTRELEFBQUs7Ozs7OztpQkFLdEQsQUFDZixBQUFLLGVBRFUsQUFDZjs7Ozt1Q0FHVSxBQUNWO2lCQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIscUJBQXJCLEFBQTBDLE1BQU0sS0FEdEMsQUFDVixBQUFnRCxBQUFLLEFBQ3JEO2tCQUFBLEFBQU0sYUFBYSxLQUFBLEFBQUssU0FBeEIsQUFBbUIsQUFBYyxPQUFqQyxBQUF3QyxxQkFBeEMsQUFBNkQsTUFBTSxLQUZ6RCxBQUVWLEFBQW1FLEFBQUssQUFDeEU7aUJBQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixxQkFBcEIsQUFBeUMsTUFBTSxLQUhyQyxBQUdWLEFBQStDLEFBQUssQUFDcEQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsV0FBZCxBQUF5QixxQkFBekIsQUFBOEMsTUFBTSxLQUoxQyxBQUlWLEFBQW9ELEFBQUssQUFDekQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsV0FBZCxBQUF5QixxQkFBekIsQUFBOEMsTUFBTSxLQUwxQyxBQUtWLEFBQW9ELEFBQUssQUFDekQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsU0FBZCxBQUF1QixtQkFBdkIsQUFBMEMscUJBQTFDLEFBQStELE1BQU0sS0FOM0QsQUFNVixBQUFxRSxBQUFLOzs7OzBDQUs3RCxBQUNiO2lCQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsZUFBckIsQUFBb0MsTUFBTSxLQUQ3QixBQUNiLEFBQTBDLEFBQUssQUFDL0M7a0JBQUEsQUFBTSxhQUFhLEtBQUEsQUFBSyxTQUF4QixBQUFtQixBQUFjLE9BQWpDLEFBQXdDLGVBQXhDLEFBQXVELE1BQU0sS0FGaEQsQUFFYixBQUE2RCxBQUFLLEFBQ2xFO2lCQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsZUFBcEIsQUFBbUMsTUFBTSxLQUg1QixBQUdiLEFBQXlDLEFBQUssQUFDOUM7aUJBQUEsQUFBSyxTQUFMLEFBQWMsV0FBZCxBQUF5QixlQUF6QixBQUF3QyxNQUFNLEtBSmpDLEFBSWIsQUFBOEMsQUFBSyxBQUNuRDtpQkFBQSxBQUFLLFNBQUwsQUFBYyxXQUFkLEFBQXlCLGVBQXpCLEFBQXdDLE1BQU0sS0FMakMsQUFLYixBQUE4QyxBQUFLLEFBQ25EO2lCQUFBLEFBQUssU0FBTCxBQUFjLFNBQWQsQUFBdUIsbUJBQXZCLEFBQTBDLGVBQTFDLEFBQXlELE1BQU0sS0FObEQsQUFNYixBQUErRCxBQUFLOzs7OztpQkFFbEQsQUFDbEIsQUFBSyxrQkFEYSxBQUNsQjs7Ozs4Q0FJa0IsV0FBVSxBQUM1QjtnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsVUFBQSxBQUFVO3VCQUFqQyxBQUFzQyxBQUNsQyxBQUFPLEtBRDJCLEFBQ2xDO3VCQUNLLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBYSxVQUFBLEFBQVU7dUJBQXJDLEFBQThDLEFBQ2hELEFBQU8sS0FEeUMsQUFDaEQ7YUFERSxVQUVHLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBVyxVQUFBLEFBQVU7dUJBQW5DLEFBQTBDLEFBQzVDLEFBQU8sS0FEcUMsQUFDNUM7YUFERSxVQUVHLE1BQUEsQUFBTSxhQUFOLEFBQW1CLE1BQUssS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFNLEtBQUEsQUFBSyxTQUFMLEFBQWMsWUFBVyxLQUFBLEFBQUssU0FBN0UsQUFBd0UsQUFBYzt1QkFBdEYsQUFBa0csQUFDcEcsQUFBTyxLQUQ2RixBQUNwRzthQURFLE1BRUQsQUFDRDt1QkFIRSxBQUVELEFBQ0QsQUFBTzs7Ozs7dUNBTUE7Z0JBQ1Asa0JBRFcsQUFDWCxBQUFnQixBQUNwQjtnQkFBSSxXQUZXLEFBRVgsQUFBVyxBQUNmO2dCQUFJLFFBQVEsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUhYLEFBR0gsQUFBb0IsQUFDaEM7Z0JBQUcsQUFBQyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsV0FBYSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0I7MkJBQVEsQUFDN0QsQUFBVyxBQUNYLEtBRjZELEFBQzdEO2dDQUNBLEFBQWdCLGtCQUZwQixBQUFpRSxBQUU3RCxBQUFrQzt1QkFFOUIsQUFBQyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsU0FBVyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0I7MkJBQVUsQUFDbEUsQUFBVyxBQUNYLE1BRmtFLEFBQ2xFO2dDQUNBLEFBQWdCLGlCQUZmLEFBQWlFLEFBRWxFLEFBQWlDLEFBR3JDO2FBTEs7O2dCQUtELGVBQWUsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQWJsQixBQWFYLEFBQWUsQUFBdUIsQUFDMUM7Z0JBQUksOEJBQWlCLEFBQWEsY0FBSSxBQUFTLGFBQVQsQUFBcUI7b0JBQ25ELFFBQVEsS0FBQSxBQUFLLFNBQUwsQUFBYyxlQUFkLEFBQTZCLElBRG9CLEFBQ3pELEFBQVEsQUFBaUMsQUFDN0MsYUFGNkQsQUFDN0Q7b0JBQ0ksYUFBYSxLQUFBLEFBQUssU0FBTCxBQUFjLFNBQWQsQUFBdUIsUUFGcUIsQUFFekQsQUFBYSxBQUErQixBQUNoRDtvQkFBQSxBQUFHLE9BQU0sQUFDTDt3QkFBSSxRQUFRLGNBQUEsQUFBSSxVQUFKLEFBQWMsSUFBRyxNQUR4QixBQUNELEFBQXlCLEFBQU0sQUFFbkM7OzBCQUFBLEFBQU0sY0FIRCxBQUdMLEFBQW9CLEFBQ3BCOzBCQUFBLEFBQU0sY0FKRCxBQUlMLEFBQW9CLEFBQ3BCOzBCQUFBLEFBQU0sY0FMRCxBQUtMLEFBQW9CLEFBQ3BCOzBCQUFBLEFBQU0sU0FORCxBQU1MLEFBQWUsQUFDZjt3QkFBRyxlQUFlLEtBQUEsQUFBSyxTQUFMLEFBQWMsV0FBZCxBQUF5Qjs4QkFDdkMsQUFBTSxjQURWLEFBQWtELEFBQzlDLEFBQW9CLEtBRDBCLEFBQzlDOzJCQUVBLEFBQ0E7OEJBQUEsQUFBTSxjQUpWLEFBR0ksQUFDQSxBQUFvQixBQUV4Qjs7d0JBQUEsQUFBRyxLQUFJLEFBQ0g7OEJBQUEsQUFBTSxlQUFlLElBRHpCLEFBQU8sQUFDSCxBQUFxQixBQUFJOzJCQUN4QixBQUNEOzhCQUFBLEFBQU0sV0FIVixBQUVLLEFBQ0QsQUFBaUIsQUFHckI7Ozt3QkFBRyxLQUFBLEFBQUssU0FBTCxBQUFjLGVBQWQsQUFBNkIsSUFBaEMsQUFBRyxBQUFpQyxRQUNoQyxLQUFBLEFBQUssU0FBTCxBQUFjLGVBQWQsQUFBNkIsT0FEakMsQUFDSSxBQUFvQyxBQUN4Qzt3QkFBSSxjQUFjLGdCQUFBLEFBQU0sYUFBTixBQUFtQixPQXJCaEMsQUFxQkQsQUFBYyxBQUF5QixBQUMzQzt5QkFBQSxBQUFLLFNBQUwsQUFBYyxlQUFkLEFBQTZCLElBQTdCLEFBQWlDLGFBdEI1QixBQXNCTCxBQUE2QyxBQUM3Qzt5QkFBQSxBQUFLLFNBQUwsQUFBYyxlQUFkLEFBQTZCLElBQTdCLEFBQWlDLGFBdkI1QixBQXVCTCxBQUE2QyxBQUM3QzsyQkF4QkosQUFBUyxBQXdCTCxBQUFPO3VCQUNMLEFBQ0Y7d0JBQUksY0FBYyxNQUFBLEFBQU0sUUFBTixBQUFjLGFBRDlCLEFBQ0UsQUFBYyxBQUEyQixBQUM3Qzt3QkFBSSxZQUFhLGNBQUEsQUFBSSxzQkFGbkIsQUFFRSxBQUFhLEFBQTBCLEFBQzNDO3dCQUFJLGFBQWMsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCLFFBSHZDLEFBR0UsQUFBYyxBQUErQixBQUNqRDt3QkFBSSxXQUFXLDhCQUFBLEFBQUMsYUFBVSxLQUFBLEFBQUssWUFBYSxVQUoxQyxBQUlFLEFBQVcsQUFBNkIsQUFBVSxBQUN0RDsyQkFqQzhCLEFBR2xDLEFBeUJNLEFBS0YsQUFBTzs7YUFqQ3VCLENBQUEsQUFvQ3BDLEtBbERhLEFBY1gsQUFBaUIsQUFBaUIsQUFvQy9CLEFBRVAsS0F0Q3FCLEVBZE4sQUFDZjs7bUJBRGUsQUFvRGYsQUFBTzs7Ozs7Z0JBS0gsV0FBVyxxQ0FEVixBQUNELEFBQ0o7Z0JBQUcsS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCO29CQUNoQixhQURzQixBQUN0QixBQUFhLEFBQ2pCLEdBRjBCLEFBQzFCO29CQUNJLGNBQWMsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLFlBQXBCLEFBQWdDLE1BRnhCLEFBRXRCLEFBQWMsQUFBcUMsQUFFdkQ7O29CQUFHLENBQUMsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFPLEFBQ2xCO3dCQUFHLEFBQUMsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLFdBQWEsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLFVBQVcsS0FBQSxBQUFLLFNBQUwsQUFBYyxXQUFkLEFBQXlCO29DQUN6RixBQUFZLG9CQURtRixBQUMvRixBQUFnQyxBQUNoQztvQ0FBQSxBQUFZLGlCQUZoQixBQUFtRyxBQUUvRixBQUE2QixBQUVqQyxPQUptRyxBQUMvRjs7a0NBR1UsZ0JBQUEsQUFBTSxtQkFMeEIsQUFBc0IsQUFLbEIsQUFBYyxBQUF5QixBQUczQzs7O29CQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBTyxBQUNqQjtpQ0FBYSxLQUFBLEFBQUssZUFBZSxLQUFBLEFBQUssTUFEckIsQUFDakIsQUFBaUMsQUFBVyxBQUM1QzsrQkFBVyxzQ0FBSSxXQUFXLEtBQUEsQUFBSyxNQUFwQixBQUFlLEFBQVcsYUFGekMsQUFBcUIsQUFFakIsQUFBVyxBQUFzQzt1QkFFakQsQUFDQTtpQ0FBYSxLQUFBLEFBQUssZUFEbEIsQUFDQSxBQUFhLEFBQW9CLEFBQ2pDOytCQUFXLHNDQUFJLE9BQUosQUFBSSxBQUFPLGVBbEI5QixBQVlJLEFBSUksQUFFQSxBQUFXLEFBQXlCLEFBTTVDOzs7O21CQTFCSyxBQTBCTCxBQUFRLFNBMUJILEFBQ0w7Ozs7V0FqSUY7RUFBYSxnQkFBQSxBQUFNOztBQThKekIsTUFBQSxBQUFNLGNBQU4sQUFBb0IsMEJBQXBCLEFBQThDLE1BQUssQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQWhFLEFBQW9ELEFBQWlCO2tCQUN0RCIsImZpbGUiOiJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuXG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuKUFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MgPSB0aGlzLmFkZENhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcyA9IHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnN0eWxlKXRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihuZXh0UHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKClcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cbiAgICByZW1vdmVDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgIH1cblxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jayAhPT0gbmV4dFByb3BzLmRvY2spe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKFdlYXZlLmRldGVjdENoYW5nZSh0aGlzLHRoaXMuc2V0dGluZ3Muc3BhY2UsdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduLHRoaXMuc2V0dGluZ3MuYWN0aXZlUGFnZSkpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oQ1NTKXtcbiAgICAgICAgdmFyIGxpbmtTdHlsZU9iamVjdD17fTtcbiAgICAgICAgdmFyIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgIHZhciBzcGFjZSA9IHRoaXMuc2V0dGluZ3Muc3BhY2UudmFsdWU7XG4gICAgICAgIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwicmlnaHRcIikgfHwgKHRoaXMucHJvcHMuZG9jayA9PT0gXCJsZWZ0XCIpKXtcbiAgICAgICAgICAgIGljb25Pbmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGxpbmtTdHlsZU9iamVjdFtcIm1hcmdpbkJvdHRvbVwiXSA9IHNwYWNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJ0b3BcIikgfHwgKHRoaXMucHJvcHMuZG9jayA9PT0gXCJib3R0b21cIikpe1xuICAgICAgICAgICAgaWNvbk9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgIGxpbmtTdHlsZU9iamVjdFtcIm1hcmdpblJpZ2h0XCJdID0gc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGRDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IGNoaWxkQ29uZmlncy5tYXAoZnVuY3Rpb24oY2hpbGRDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5nZXQoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IEFwcC5tZXJnZUludG8oe30sY2hpbGQucHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgICAgIHByb3BzW1wicGFnZU5hbWVcIl0gPSBjb25maWdOYW1lO1xuICAgICAgICAgICAgICAgIHByb3BzW1wiaWNvbk9ubHlcIl0gPSBpY29uT25seTtcbiAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGNvbmZpZ05hbWU7XG4gICAgICAgICAgICAgICAgaWYoY29uZmlnTmFtZSA9PT0gdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wiaXNBY3RpdmVcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImlzQWN0aXZlXCJdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKENTUyl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wiY2xhc3NOYW1lXCJdID0gQ1NTW2NoaWxkTmFtZV07XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wic3R5bGVcIl0gPSBsaW5rU3R5bGVPYmplY3Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5oYXMoY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmRlbGV0ZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQoY2xvbmVkQ2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBXZWF2ZS5nZXRQYXRoKGNoaWxkQ29uZmlnKS5nZXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9ICBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9ICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZCA9IDxUb29sQ2xhc3Mga2V5PXtjb25maWdOYW1lfSAgc2V0dGluZ3M9e2NoaWxkQ29uZmlnfS8+O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBuYXZMaW5rcyA9IDxkaXYvPjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSBbXVxuICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpO1xuXG4gICAgICAgICAgICBpZighdGhpcy5wcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgICAgIGlmKCh0aGlzLnByb3BzLmRvY2sgIT09IFwicmlnaHRcIikgJiYgKHRoaXMucHJvcHMuZG9jayAhPT0gXCJsZWZ0XCIpICYmIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wianVzdGlmeUNvbnRlbnRcIl0gPSBcImZsZXgtZW5kXCI7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3QgPSBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGVPYmplY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4odGhpcy5wcm9wcy5DU1MpO1xuICAgICAgICAgICAgICAgIG5hdkxpbmtzID0gPHVsIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PntjaGlsZHJlblVJfTwvdWw+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbihudWxsKTtcbiAgICAgICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBzdHlsZT17c3R5bGVPYmplY3R9PntjaGlsZHJlblVJfTwvdWw+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIChuYXZMaW5rcyk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTGlzdFwiLCBMaXN0LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiJdfQ==

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

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
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        return _this;
	    }

	    _createClass(Link, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.settings.title.addImmediateCallback(this, this.forceUpdate);
	            this.settings.iconName.addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.title.removeCallback(this, this.forceUpdate);
	            this.settings.iconName.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
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
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var title = this.settings.title.value;
	            if (this.props.iconOnly) {
	                title = "";
	            }
	            var styleObject = this.settings.style.getStyleFor(null, true);
	            if (this.props.isActive) {

	                return _react2.default.createElement("li", { style: this.props.style }, _react2.default.createElement("a", { style: styleObject, href: '#' + this.props.pageName }, _react2.default.createElement("i", { className: this.settings.iconName.value }, " "), title));
	            } else {
	                return _react2.default.createElement("li", { style: this.props.style }, _react2.default.createElement("a", { style: styleObject, href: '#' + this.props.pageName }, _react2.default.createElement("i", { className: this.settings.iconName.value }, " "), title));
	            }
	        }
	    }]);

	    return Link;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.Link", Link, [weavejs.api.core.ILinkableObject]);
	exports.default = Link;
	//# sourceMappingURL=data:application/json;base64,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LEFBQU8sYUFBYSxNQUFRLE1BQU0sS0FBQSxBQUFLLE1BQTFDLEFBQXFDLEFBQVcsWUFDNUMscUNBQUcsV0FBYSxLQUFBLEFBQUssU0FBTCxBQUFjLFNBQTlCLEFBQWdCLEFBQXVCLFNBRDNDLE1BWGhCLEFBU08sQUFDSCxBQUFRLEFBQ0ksQUFFSzs7Ozs7V0FyRXZCO0VBQWEsZ0JBQUEsQUFBTTs7QUE0RXpCLE1BQUEsQUFBTSxjQUFOLEFBQW9CLDBCQUFwQixBQUE4QyxNQUFLLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFoRSxBQUFvRCxBQUFpQjtrQkFDdEQiLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcyA9IHRoaXMuYWRkQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzID0gdGhpcy5yZW1vdmVDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cbiAgICByZW1vdmVDYWxsYmFja3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSl0aGlzLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciB0aXRsZSA9IHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuaWNvbk9ubHkpe1xuICAgICAgICAgICAgdGl0bGUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xuXG4gICAgICAgICAgICByZXR1cm4gKCA8bGkgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3N0eWxlT2JqZWN0fSBocmVmID0geycjJyArIHRoaXMucHJvcHMucGFnZU5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDxsaSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17c3R5bGVPYmplY3R9IGhyZWYgPSB7JyMnICsgdGhpcy5wcm9wcy5wYWdlTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lID0ge3RoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWV9PiA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5MaW5rXCIsIExpbmssW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuIl19

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(9);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(7);

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
	        if (_this.props.children) _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);

	        return _this;
	    }

	    _createClass(Form, [{
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
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
	            this.settings.space.addImmediateCallback(this, this.forceUpdate);
	            //this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
	            this.settings.space.removeCallback(this, this.forceUpdate);
	            //this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
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
	        key: "renderChildren",
	        value: function renderChildren(CSS) {
	            var childStyleObject = {};
	            var space = this.settings.space.value;
	            if (this.props.dock === "right" || this.props.dock === "left") {
	                childStyleObject["marginBottom"] = space;
	            } else if (this.props.dock === "top" || this.props.dock === "bottom") {
	                childStyleObject["marginRight"] = space;
	            }

	            var childConfigs = this.settings.children.getObjects();
	            var clonedChildren = childConfigs.map(function (childConfig, index) {
	                var child = this.settings.configChildMap.get(childConfig);
	                var configName = this.settings.children.getName(childConfig);
	                if (child) {
	                    var props = _App2.default.mergeInto({}, child.props);

	                    props["settings"] = childConfig;
	                    props["key"] = configName;

	                    if (CSS) {
	                        props["className"] = CSS[childName];
	                    } else {
	                        props["style"] = childStyleObject;
	                    }

	                    if (this.settings.childConfigMap.has(child)) this.settings.childConfigMap.delete(child);
	                    var clonedChild = _react2.default.cloneElement(child, props);
	                    this.settings.configChildMap.set(childConfig, clonedChild);
	                    this.settings.childConfigMap.set(clonedChild, childConfig);
	                    return clonedChild;
	                } else {
	                    var configClass = Weave.getPath(childConfig).getType();
	                    var ToolClass = _App2.default.getToolImplementation(configClass);
	                    var configName = this.settings.children.getName(childConfig);
	                    var newChild = _react2.default.createElement(ToolClass, { key: configName, settings: childConfig });
	                    return newChild;
	                }
	            }.bind(this));

	            return clonedChildren;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var navFormUI = _react2.default.createElement("div", null);
	            if (this.settings.enable.value) {
	                if (!this.props.useCSS) {
	                    var styleObject = this.settings.style.getStyleFor(null);
	                    if (this.props.dock !== "right" && this.props.dock !== "left" && this.settings.rightAlign) {
	                        styleObject["justifyContent"] = "flex-end";
	                        styleObject["marginRight"] = "auto";
	                    }
	                    styleObject = _Style2.default.appendVendorPrefix(styleObject);
	                }

	                var controllersUI = [];

	                if (this.props.useCSS) {
	                    controllersUI = this.renderChildren(this.props.CSS);
	                    navFormUI = _react2.default.createElement("div", { className: this.props.css }, controllersUI);
	                } else {
	                    controllersUI = this.renderChildren(null);
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
	//# sourceMappingURL=data:application/json;base64,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Q29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuKUFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MgPSB0aGlzLmFkZENhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcyA9IHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnN0eWxlKXRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihuZXh0UHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIC8vdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIC8vdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMucG9zaXRpb25UeXBlICE9PSBuZXh0UHJvcHMucG9zaXRpb25UeXBlKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVzZUNTUyAhPT0gbmV4dFByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oQ1NTKXtcbiAgICAgICAgdmFyIGNoaWxkU3R5bGVPYmplY3Q9e307XG4gICAgICAgIHZhciBzcGFjZSA9IHRoaXMuc2V0dGluZ3Muc3BhY2UudmFsdWU7XG4gICAgICAgIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwicmlnaHRcIikgfHwgKHRoaXMucHJvcHMuZG9jayA9PT0gXCJsZWZ0XCIpKXtcbiAgICAgICAgICAgIGNoaWxkU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwidG9wXCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwiYm90dG9tXCIpKXtcbiAgICAgICAgICAgIGNoaWxkU3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IHNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBjaGlsZENvbmZpZ3MubWFwKGZ1bmN0aW9uKGNoaWxkQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHt9LGNoaWxkLnByb3BzKTtcblxuICAgICAgICAgICAgICAgIHByb3BzW1wic2V0dGluZ3NcIl0gPSBjaGlsZENvbmZpZztcbiAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGNvbmZpZ05hbWU7XG5cbiAgICAgICAgICAgICAgICBpZihDU1Mpe1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImNsYXNzTmFtZVwiXSA9IENTU1tjaGlsZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInN0eWxlXCJdID0gY2hpbGRTdHlsZU9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmhhcyhjaGlsZCkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB2YXIgY2xvbmVkQ2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLGNsb25lZENoaWxkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkO1xuICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IFdlYXZlLmdldFBhdGgoY2hpbGRDb25maWcpLmdldFR5cGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgVG9vbENsYXNzID0gIEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24oY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPFRvb2xDbGFzcyBrZXk9e2NvbmZpZ05hbWV9ICBzZXR0aW5ncz17Y2hpbGRDb25maWd9Lz47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbmF2Rm9ybVVJID0gPGRpdi8+O1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG4gICAgICAgICAgICBpZighdGhpcy5wcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbCk7XG4gICAgICAgICAgICAgICAgaWYoKHRoaXMucHJvcHMuZG9jayAhPT0gXCJyaWdodFwiKSAmJiAodGhpcy5wcm9wcy5kb2NrICE9PSBcImxlZnRcIikgJiYgdGhpcy5zZXR0aW5ncy5yaWdodEFsaWduKXtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJqdXN0aWZ5Q29udGVudFwiXSA9IFwiZmxleC1lbmRcIjtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdCA9IFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdCk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXJzVUkgPSBbXVxuXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlcnNVSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4odGhpcy5wcm9wcy5DU1MpXG4gICAgICAgICAgICAgICAgbmF2Rm9ybVVJID0gPGRpdiAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNzc30gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbGxlcnNVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJzVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKG51bGwpXG4gICAgICAgICAgICAgICAgbmF2Rm9ybVVJID0gPGRpdiAgc3R5bGU9e3N0eWxlT2JqZWN0fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250cm9sbGVyc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAobmF2Rm9ybVVJKTtcbiAgICB9XG5cbn1cblxuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXIuRm9ybScsIEZvcm0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXX0=

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Brand = __webpack_require__(27);

	var _Brand2 = _interopRequireDefault(_Brand);

	var _List = __webpack_require__(30);

	var _List2 = _interopRequireDefault(_List);

	var _Form = __webpack_require__(32);

	var _Form2 = _interopRequireDefault(_Form);

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var NavConfig = function NavConfig() {
	    _classCallCheck(this, NavConfig);

	    Object.defineProperties(this, {
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	        },
	        children: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	        },
	        children: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	        },
	        "useCSS": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	        },
	        "dock": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("top"))
	        }
	    });

	    this.childConfigMap = new Map();
	    this.configChildMap = new Map();
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
	    this.style.other.state = {
	        flexDirection: "row",
	        flex: "1",
	        height: "7%",
	        minHeight: "50px",
	        zIndex: "1000",
	        alignItems: "center",
	        justifyContent: "space-between"
	    };
	    this.style.padding.state = { padding: "6px" };
	    this.style.background.state = "#F8F8F8";
	};

	var BrandConfig = function BrandConfig() {
	    _classCallCheck(this, BrandConfig);

	    Object.defineProperties(this, {
	        "title": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        },
	        "enable": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	        },
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "children": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	        }
	    });

	    this.childConfigMap = new Map();
	    this.configChildMap = new Map();

	    this.style.padding.state = {
	        padding: "15px 15px"
	    };
	    this.style.font.state = {
	        fontSize: "18px",
	        lineHeight: "20px"
	    };

	    this.style.display.value = "flex";
	    this.style.other.state = {
	        flexDirection: "inherit",
	        alignItems: "inherit"
	    };
	};

	var LogoConfig = function LogoConfig() {
	    _classCallCheck(this, LogoConfig);

	    Object.defineProperties(this, {
	        "enable": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	        },
	        src: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        },
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        }
	    });

	    this.childConfigMap = new Map();
	    this.configChildMap = new Map();

	    this.style.border.state = {
	        border: "2px solid #ebebeb",
	        borderRadius: "50%"
	    };
	    this.style.other.state = {
	        width: "50",
	        height: "50"
	    };
	};

	var ListConfig = function ListConfig() {
	    _classCallCheck(this, ListConfig);

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
	        "children": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	        },
	        "space": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(8))
	        }
	    });

	    this.childConfigMap = new Map();
	    this.configChildMap = new Map();

	    this.style.display.value = "flex";
	    this.style.other.state = {
	        flexDirection: "inherit",
	        listStyleType: "none",
	        paddingLeft: "0",
	        alignItems: "inherit"
	    };

	    this.style.margin.state = {
	        margin: "7.5px"
	    };
	};

	var LinkConfig = function LinkConfig() {
	    _classCallCheck(this, LinkConfig);

	    Object.defineProperties(this, {
	        "title": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("Link"))
	        },
	        "iconName": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-home"))
	        },
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "activeLinkStyle": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        }
	    });

	    this.style.font.state = {
	        lineHeight: "20px",
	        color: "#777"
	    };
	    this.style.padding.state = {
	        paddingTop: "10px",
	        paddingBottom: "10px"
	    };
	};

	var FormConfig = function FormConfig() {
	    _classCallCheck(this, FormConfig);

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
	        "children": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	        },
	        "space": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
	        }
	    });
	    this.childConfigMap = new Map();
	    this.configChildMap = new Map();

	    this.style.display.value = "flex";
	    this.style.other.state = {
	        flexDirection: "inherit",
	        alignItems: "inherit"
	    };

	    this.style.margin.state = {
	        margin: "4px"

	    };
	};

	var navbarConfig = {};
	exports.default = navbarConfig;

	navbarConfig.Navbar = NavConfig;
	navbarConfig.Brand = BrandConfig;
	navbarConfig.Logo = LogoConfig;
	navbarConfig.List = ListConfig;
	navbarConfig.Link = LinkConfig;
	navbarConfig.Form = FormConfig;

	//This Function makes this class as SessionClass
	Weave.registerClass('weavereact.navbarConfig.Navbar', navbarConfig.Navbar, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Brand', navbarConfig.Brand, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Logo', navbarConfig.Logo, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.List', navbarConfig.List, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Link', navbarConfig.Link, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Form', navbarConfig.Form, [weavejs.api.core.ILinkableObject]);
	//# sourceMappingURL=data:application/json;base64,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dEIsYUFBQSxBQUFhLFFBQWIsQUFBcUI7QUFDckIsYUFBQSxBQUFhLE9BQWIsQUFBb0I7QUFDcEIsYUFBQSxBQUFhLE9BQWIsQUFBb0I7QUFDcEIsYUFBQSxBQUFhLE9BQWIsQUFBb0I7QUFDcEIsYUFBQSxBQUFhLE9BQWIsQUFBb0I7OztBQUdwQixNQUFBLEFBQU0sY0FBTixBQUFvQixrQ0FBa0MsYUFBQSxBQUFhLFFBQU8sQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQXZGLEFBQTJFLEFBQWlCO0FBQzVGLE1BQUEsQUFBTSxjQUFOLEFBQW9CLGlDQUFpQyxhQUFBLEFBQWEsT0FBTSxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBckYsQUFBeUUsQUFBaUI7QUFDMUYsTUFBQSxBQUFNLGNBQU4sQUFBb0IsZ0NBQWdDLGFBQUEsQUFBYSxNQUFLLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFuRixBQUF1RSxBQUFpQjtBQUN4RixNQUFBLEFBQU0sY0FBTixBQUFvQixnQ0FBZ0MsYUFBQSxBQUFhLE1BQUssQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQW5GLEFBQXVFLEFBQWlCO0FBQ3hGLE1BQUEsQUFBTSxjQUFOLEFBQW9CLGdDQUFnQyxhQUFBLEFBQWEsTUFBSyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBbkYsQUFBdUUsQUFBaUI7QUFDeEYsTUFBQSxBQUFNLGNBQU4sQUFBb0IsZ0NBQWdDLGFBQUEsQUFBYSxNQUFLLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFuRixBQUF1RSxBQUFpQiIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnJhbmQgZnJvbSBcIi4vQnJhbmRcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuXG5jbGFzcyBOYXZDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZG9ja1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwidG9wXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvL2luaXRpYWwgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgdGhpcy5DU1Muc3RhdGUgPSB7XG4gICAgICAgICAgICBuYXZiYXI6XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcIixcbiAgICAgICAgICAgIGJyYW5kOntcbiAgICAgICAgICAgICAgICBoZWFkZXI6XCJuYXZiYXItaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6XCJuYXZiYXItYnJhbmRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3Q6XCJuYXYgbmF2YmFyLW5hdlwiLFxuICAgICAgICAgICAgZm9ybTpcIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFwiXG4gICAgICAgIH07XG5cblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3JkZXIuc3RhdGUgPSB7Ym9yZGVyOlwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCJ9O1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgZmxleDpcIjFcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjclXCIsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6XCI1MHB4XCIsXG4gICAgICAgICAgICB6SW5kZXg6IFwiMTAwMFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nLnN0YXRlID0ge3BhZGRpbmc6XCI2cHhcIn07XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZC5zdGF0ZSA9IFwiI0Y4RjhGOFwiO1xuICAgIH1cbn1cblxuXG5jbGFzcyBCcmFuZENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFkZGluZzpcIjE1cHggMTVweFwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUuZm9udC5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5jbGFzcyBMb2dvQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3JjOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5ib3JkZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBib3JkZXI6XCIycHggc29saWQgI2ViZWJlYlwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOlwiNTAlXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOlwiNTBcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjUwXCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBMaXN0Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyaWdodEFsaWduXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVQYWdlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzcGFjZVwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZU51bWJlcig4KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBsaXN0U3R5bGVUeXBlOlwibm9uZVwiLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6XCIwXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdHlsZS5tYXJnaW4uc3RhdGUgPSB7XG4gICAgICAgICAgICBtYXJnaW46XCI3LjVweFwiXG4gICAgICAgIH07XG5cbiAgICB9XG59XG5cblxuY2xhc3MgTGlua0NvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIkxpbmtcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWhvbWVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZUxpbmtTdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5mb250LnN0YXRlID0ge1xuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICBjb2xvcjpcIiM3NzdcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTBweFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cblxuY2xhc3MgRm9ybUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJpZ2h0QWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzcGFjZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjJweFwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luLnN0YXRlID0ge1xuICAgICAgICAgICAgbWFyZ2luOlwiNHB4XCIsXG5cbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuY29uc3QgbmF2YmFyQ29uZmlnID0ge307XG5leHBvcnQgZGVmYXVsdCBuYXZiYXJDb25maWdcblxubmF2YmFyQ29uZmlnLk5hdmJhciA9IE5hdkNvbmZpZztcbm5hdmJhckNvbmZpZy5CcmFuZCA9IEJyYW5kQ29uZmlnO1xubmF2YmFyQ29uZmlnLkxvZ28gPSBMb2dvQ29uZmlnO1xubmF2YmFyQ29uZmlnLkxpc3QgPSBMaXN0Q29uZmlnO1xubmF2YmFyQ29uZmlnLkxpbmsgPSBMaW5rQ29uZmlnO1xubmF2YmFyQ29uZmlnLkZvcm0gPSBGb3JtQ29uZmlnO1xuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLk5hdmJhcicsIG5hdmJhckNvbmZpZy5OYXZiYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5CcmFuZCcsIG5hdmJhckNvbmZpZy5CcmFuZCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxvZ28nLCBuYXZiYXJDb25maWcuTG9nbyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpc3QnLCBuYXZiYXJDb25maWcuTGlzdCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpbmsnLCBuYXZiYXJDb25maWcuTGluayxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkZvcm0nLCBuYXZiYXJDb25maWcuRm9ybSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuIl19

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _index = __webpack_require__(5);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFJZixhQUFTLG1CQUFULEdBQStCOztBQUUzQixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCOztBQUUxQiwwQkFBYztBQUNWLHVCQUFPLHVCQUFQO2FBREo7QUFHQSxzQkFBVTtBQUNOLHVCQUFPLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUFQO2FBREo7QUFHQSw2QkFBaUI7QUFDYix1QkFBTyxJQUFJLFFBQVEsSUFBUixDQUFhLGdCQUFiLEVBQVg7YUFESjtBQUdBLHlCQUFhO0FBQ1QsdUJBQU8sd0JBQVA7YUFESjs7U0FYSixFQUYyQjs7QUFtQjNCLGFBQUssWUFBTCxHQUFvQjtBQUNoQiwyQ0FBK0IsR0FBL0I7QUFDQSwyQ0FBK0IsR0FBL0I7QUFDQSw0Q0FBZ0MsR0FBaEM7QUFDQSxtREFBdUMsZ0JBQXZDOztTQUpKLENBbkIyQjtLQUEvQjs7QUFnQ0EsUUFBSSxJQUFJLG9CQUFvQixTQUFwQixDQXBDTztBQXFDZixNQUFFLFdBQUYsR0FBZ0IsVUFBVSxRQUFWLEVBQW9CO0FBQ2hDLGVBQU8sU0FBUyxJQUFULENBQWMsaUJBQWQsQ0FBZ0MsS0FBaEMsQ0FBc0MsQ0FBdEMsRUFBeUMsS0FBekMsQ0FEeUI7S0FBcEIsQ0FyQ0Q7O0FBMkNmLFdBQU8sT0FBUCxHQUFpQixtQkFBakIsQ0EzQ2U7Q0FBbEIsRUE2Q0MsTUE3Q0QsQ0FBRCIsImZpbGUiOiJTZXNzaW9uRWRpdG9yQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyZWVDb25maWd9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7TW9kYWxDb25maWd9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuXG4gICAgZnVuY3Rpb24gU2Vzc2lvbkVkaXRvckNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgIFwidHJlZUNvbmZpZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBUcmVlQ29uZmlnKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93VHJlZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVOb2RlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbENvbmZpZzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgTW9kYWxDb25maWcoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IHtcbiAgICAgICAgICAgIFwid2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nXCI6IFwiU1wiLFxuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXJcIjogXCJOXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW5cIjogXCJCXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuZGF0YS5zb3VyY2UuV2VhdmVEYXRhU291cmNlXCI6IFwiZmEgZmEtZGF0YWJhc2VcIlxuXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuICAgIHZhciBwID0gU2Vzc2lvbkVkaXRvckNvbmZpZy5wcm90b3R5cGU7XG4gICAgcC5nZXREYXRhVHlwZSA9IGZ1bmN0aW9uICh0cmVlSXRlbSkge1xuICAgICAgICByZXR1cm4gdHJlZUl0ZW0uZGF0YS5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICB9XG5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTZXNzaW9uRWRpdG9yQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(5);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9UcmVlU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007OztBQUVKLGFBRkksV0FFSixDQUFZLEtBQVosRUFBbUI7OEJBRmYsYUFFZTs7c0VBRmYsd0JBR0ksUUFEVztLQUFuQjs7aUJBRkk7OzRDQU9lO0FBQ2pCLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFuQixDQUFvQyxrQkFBcEMsQ0FBdUQsSUFBdkQsRUFBNkQsS0FBSyxXQUFMLENBQTdELENBRGlCOzs7OytDQUlLO0FBQ3RCLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFuQixDQUFvQyxjQUFwQyxDQUFtRCxJQUFuRCxFQUF5RCxLQUFLLFdBQUwsQ0FBekQsQ0FEc0I7Ozs7a0RBSUksV0FBVTtBQUNoQyxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLFVBQVUsSUFBVixFQUFlOztBQUNqQyxvQkFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWdCLE1BQU0sWUFBTixDQUFtQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQW5CLENBQW9DLGNBQXBDLENBQW1ELElBQW5ELEVBQXlELEtBQUssV0FBTCxDQUF6RCxDQUFuQjtBQUNELG9CQUFHLFVBQVUsSUFBVixFQUFlO0FBQ2QsMEJBQU0sWUFBTixDQUFtQixVQUFVLElBQVYsQ0FBbkIsQ0FBbUMsa0JBQW5DLENBQXNELElBQXRELEVBQTRELEtBQUssV0FBTCxDQUE1RCxDQURjO2lCQUFsQixNQUdJO0FBQ0EseUJBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsVUFBcEIsQ0FBK0IsUUFBL0IsQ0FBd0MsS0FBeEMsR0FEQTtpQkFISjthQUZKOzs7O2lDQWFHOztBQUVQLGdCQUFJLFNBQVMsRUFBVCxDQUZHO0FBR1AsZ0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFnQjtBQUNmLHlCQUFTLDZDQUFNLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixPQUFNLE9BQU4sRUFBYyxPQUFNLFVBQU4sRUFBa0IsZUFBZSxLQUFLLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLFVBQVUsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixVQUFwQixFQUFnQyxjQUFjLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsWUFBcEIsRUFBa0MsYUFBYSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFdBQXBCLEVBQXpNLENBQVQsQ0FEZTthQUFuQjs7QUFJQSxnQkFBSSxxQkFBcUI7QUFDckIsdUJBQU0sTUFBTjtBQUNBLHdCQUFPLE1BQVA7QUFDQSw2QkFBWSxPQUFaO0FBQ0EsOEJBQWEsS0FBYjtBQUNBLDZCQUFZLEtBQVo7QUFDQSw2QkFBWSxNQUFaO0FBQ0EsMkJBQVcsUUFBWDtBQUNBLDJCQUFXLFFBQVg7QUFDQSx5QkFBUSxLQUFSO2FBVEEsQ0FQRzs7QUFtQlAsb0JBQVEsR0FBUixDQUFZLHFCQUFaLEVBbkJPO0FBb0JQLG1CQUFTOztrQkFBSyxPQUFPLGtCQUFQLEVBQUw7Z0JBQ2dCLE1BRGhCO2FBQVQsQ0FwQk87Ozs7V0E3Qkw7RUFBb0IsZ0JBQU0sU0FBTjs7a0JBd0RYIiwiZmlsZSI6IlRyZWVTZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7VHJlZX0gZnJvbSBcIi4uLy4uLy4uL2xpYi9pbmRleC5qc1wiO1xuXG5cbmNsYXNzIFRyZWVTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5wcm9wcy50cmVlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMucHJvcHMudHJlZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlICE9PSBuZXh0UHJvcHMudHJlZSl7Ly8gdHJlZSB2YWx1ZSB3aWxsIHN3aXRoYyBiZXR3ZWVuIG51bGwgYW5kIHNlc3Npb25zdGF0ZSB0cmVlLCB3aGVuIG5ldyBmaWxlIGlzIGxvYWRlZFxuICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZSlXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5wcm9wcy50cmVlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy50cmVlKXtcbiAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3MobmV4dFByb3BzLnRyZWUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5ncy50cmVlQ29uZmlnLnJvb3ROb2RlLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0cmVlVUkgPSBcIlwiO1xuICAgIGlmKHRoaXMucHJvcHMudHJlZSl7XG4gICAgICAgIHRyZWVVSSA9IDxUcmVlIGRhdGE9e3RoaXMucHJvcHMudHJlZX0gbGFiZWw9XCJsYWJlbFwiIG5vZGVzPVwiY2hpbGRyZW5cIiAgY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5ub2RlQ2xpY2t9IHNldHRpbmdzPXt0aGlzLnByb3BzLnNldHRpbmdzLnRyZWVDb25maWd9IGRhdGFUeXBlc01hcD17dGhpcy5wcm9wcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXB9IGdldERhdGFUeXBlPXt0aGlzLnByb3BzLnNldHRpbmdzLmdldERhdGFUeXBlfS8+XG4gICAgfVxuXG4gICAgdmFyIHRyZWVDb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDpcIjEwMCVcIixcbiAgICAgICAgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6XCIxcHhcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6XCJncmV5XCIsXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXG4gICAgICAgIHBhZGRpbmc6XCI0cHhcIlxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiVHJlZSBTZWN0aW9uIFJlbmRlclwiKTtcbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXt0cmVlQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVlVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVHJlZVNlY3Rpb247XG4iXX0=

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9Ob2RlVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNOzs7QUFFSixXQUZJLFFBRUosQ0FBWSxLQUFaLEVBQW1COzBCQUZmLFVBRWU7O3VFQUZmLHFCQUdJLFFBRFc7O0FBSWpCLFVBQUssY0FBTCxHQUFzQixNQUFLLGNBQUwsQ0FBb0IsSUFBcEIsT0FBdEIsQ0FKaUI7OztHQUFuQjs7ZUFGSTs7d0NBVWU7QUFDakIsV0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixvQkFBM0IsQ0FBZ0QsSUFBaEQsRUFBcUQsS0FBSyxXQUFMLENBQXJELENBRGlCOzs7OzJDQUlLO0FBQ3RCLFdBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsY0FBM0IsQ0FBMEMsSUFBMUMsRUFBK0MsS0FBSyxXQUFMLENBQS9DLENBRHNCOzs7O21DQU1ULEdBQUU7QUFDZixXQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLEtBQTNCLEdBQW1DLEVBQUUsTUFBRixDQUFTLEtBQVQsQ0FEcEI7Ozs7NkJBSVI7O0FBRVAsVUFBSSx1QkFBdUI7QUFDdkIsZUFBTSxNQUFOO0FBQ0EsZ0JBQU8sTUFBUDtBQUNBLHFCQUFZLE9BQVo7QUFDQSxzQkFBYSxLQUFiO0FBQ0EscUJBQVksS0FBWjtBQUNBLHFCQUFZLE1BQVo7QUFDQSxtQkFBVyxRQUFYO0FBQ0EsbUJBQVcsUUFBWDtBQUNBLGlCQUFRLEtBQVI7T0FUQSxDQUZHOztBQWVQLGFBQVM7O1VBQUssT0FBTyxvQkFBUCxFQUFMO1FBQ0csNENBQVUsT0FBTyxFQUFDLE9BQU0sTUFBTixFQUFhLFFBQU8sTUFBUCxFQUFjLFFBQU8sTUFBUCxFQUFuQyxFQUFtRCxPQUFPLEtBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsS0FBM0IsRUFBa0MsVUFBVSxLQUFLLGNBQUwsRUFBaEgsQ0FESDtPQUFULENBZk87Ozs7U0F4Qkw7RUFBaUIsZ0JBQU0sU0FBTjs7a0JBOENSIiwiZmlsZSI6Ik5vZGVWaWV3LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuY2xhc3MgTm9kZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cbiAgICB0aGlzLnRleHRBcmVhQ2hhbmdlID0gdGhpcy50ZXh0QXJlYUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMucHJvcHMuYWN0aXZlTm9kZVZhbHVlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3RpdmVOb2RlVmFsdWUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgfVxuXG5cblxuICB0ZXh0QXJlYUNoYW5nZShlKXtcbiAgICB0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHJlc3VsdENvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxuICAgICAgICBib3JkZXJTdHlsZTpcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxuICAgICAgICBib3JkZXJXaWR0aDpcIjFweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjpcImdyZXlcIixcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICAgICAgcGFkZGluZzpcIjRweFwiXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXtyZXN1bHRDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLGJvcmRlcjpcIm5vbmVcIn19IHZhbHVlPXt0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZX0gb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBOb2RlVmlldztcbiJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
