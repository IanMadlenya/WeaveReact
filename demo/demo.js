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

	exports.init = function (container, session, tree) {
	    _reactDom2.default.render(React.createElement(_App2.default, { root: session }), document.getElementById(container));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVVBLFFBQVEsSUFBUixHQUFlLFVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE2QixJQUE3QixFQUFtQztBQUM5Qyx1QkFBUyxNQUFULENBQWlCLHFDQUFLLE1BQVEsT0FBUixFQUFMLENBQWpCLEVBQTRDLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUE1QyxFQUQ4QztDQUFuQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FuamF5L2dpdC9XZWF2ZVJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5cblxuXG5cblxuXG5cblxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgc2Vzc2lvbix0cmVlKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKCA8QXBwIHJvb3QgPSB7c2Vzc2lvbn0gLz4gLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpKTtcbn1cbiJdfQ==

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

	var _SessionEditorConfig = __webpack_require__(26);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

	        _this.openSettings = _this.openSettings.bind(_this);
	        _this.sessionConfig = new _SessionEditorConfig2.default();
	        //if(this.props.root){

	        //}
	        /*else if(this.props.tree){
	            this.tree = this.props.tree;
	        }*/

	        return _this;
	    }

	    _createClass(App, [{
	        key: "openSettings",
	        value: function openSettings(e) {
	            if (e.code === "Enter") {
	                this.sessionConfig.modalConfig.open.value = true;
	            } else if (e.code === "KeyQ") {
	                this.sessionConfig.modalConfig.open.value = false;
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            //this.props.root.childListCallbacks.addImmediateCallback(this,this.forceUpdate);
	            window.addEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "componentWillUnMount",
	        value: function componentWillUnMount() {
	            //this.props.root.childListCallbacks.removeCallback(this,this.forceUpdate);
	            window.removeEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_SessionEditor2.default, { root: this.props.root, settings: this.sessionConfig }),
	                this.props.children
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzs7QUFFRixhQUZFLEdBRUYsQ0FBWSxLQUFaLEVBQW1COzhCQUZqQixLQUVpQjs7MkVBRmpCLGdCQUdRLFFBRFM7O0FBRWYsY0FBSyxZQUFMLEdBQW9CLE1BQUssWUFBTCxDQUFrQixJQUFsQixPQUFwQixDQUZlO0FBR2YsY0FBSyxhQUFMLEdBQXFCLG1DQUFyQjs7Ozs7Ozs7QUFIZTtLQUFuQjs7aUJBRkU7O3FDQWVXLEdBQUU7QUFDWCxnQkFBRyxFQUFFLElBQUYsS0FBVyxPQUFYLEVBQW1CO0FBQ2xCLHFCQUFLLGFBQUwsQ0FBbUIsV0FBbkIsQ0FBK0IsSUFBL0IsQ0FBb0MsS0FBcEMsR0FBNEMsSUFBNUMsQ0FEa0I7YUFBdEIsTUFFTSxJQUFHLEVBQUUsSUFBRixLQUFXLE1BQVgsRUFBa0I7QUFDdkIscUJBQUssYUFBTCxDQUFtQixXQUFuQixDQUErQixJQUEvQixDQUFvQyxLQUFwQyxHQUE0QyxLQUE1QyxDQUR1QjthQUFyQjs7Ozs0Q0FPUzs7QUFFZCxtQkFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxLQUFLLFlBQUwsQ0FBbkMsQ0FGYzs7OzsrQ0FLRzs7QUFFbEIsbUJBQU8sbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0MsS0FBSyxZQUFMLENBQXRDLENBRmtCOzs7O2lDQU9iOztBQUVMLG1CQUFROzs7Z0JBQ0kseURBQWUsTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWtCLFVBQVUsS0FBSyxhQUFMLEVBQWpELENBREo7Z0JBRUssS0FBSyxLQUFMLENBQVcsUUFBWDthQUZiLENBRks7Ozs7V0FyQ1A7RUFBWSxnQkFBTSxTQUFOOztrQkFnREgiLCJmaWxlIjoiQXBwLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FuamF5L2dpdC9XZWF2ZVJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlc3Npb25FZGl0b3IgZnJvbSBcIi4vc2Vzc2lvblN0YXRlRWRpdG9yL1Nlc3Npb25FZGl0b3JcIjtcbmltcG9ydCBTZXNzaW9uRWRpdG9yQ29uZmlnIGZyb20gXCIuL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yQ29uZmlnXCI7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vcGVuU2V0dGluZ3MgPSB0aGlzLm9wZW5TZXR0aW5ncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlc3Npb25Db25maWcgPSBuZXcgU2Vzc2lvbkVkaXRvckNvbmZpZygpO1xuICAgICAgICAvL2lmKHRoaXMucHJvcHMucm9vdCl7XG5cbiAgICAgICAgLy99XG4gICAgICAgIC8qZWxzZSBpZih0aGlzLnByb3BzLnRyZWUpe1xuICAgICAgICAgICAgdGhpcy50cmVlID0gdGhpcy5wcm9wcy50cmVlO1xuICAgICAgICB9Ki9cblxuICAgIH1cblxuICAgIG9wZW5TZXR0aW5ncyhlKXtcbiAgICAgICAgaWYoZS5jb2RlID09PSBcIkVudGVyXCIpe1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uQ29uZmlnLm1vZGFsQ29uZmlnLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZihlLmNvZGUgPT09IFwiS2V5UVwiKXtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbkNvbmZpZy5tb2RhbENvbmZpZy5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgLy90aGlzLnByb3BzLnJvb3QuY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub3BlblNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5Nb3VudCgpe1xuICAgICAgICAvL3RoaXMucHJvcHMucm9vdC5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wZW5TZXR0aW5ncyk7XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTZXNzaW9uRWRpdG9yIHJvb3Q9e3RoaXMucHJvcHMucm9vdH0gIHNldHRpbmdzPXt0aGlzLnNlc3Npb25Db25maWd9Lz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==

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

	var _SessionEditorConfig = __webpack_require__(26);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _TreeSection = __webpack_require__(27);

	var _TreeSection2 = _interopRequireDefault(_TreeSection);

	var _NodeView = __webpack_require__(28);

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
	        _this.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(_this.props.root);
	        _this.tree.label = "Weave";

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
	            /*if(this.props.root !== nextProps.root){
	             }*/
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
	            var archive = weavejs.core.WeaveArchive.createArchive(weave);
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

	                weavejs.core.WeaveArchive.loadFileContent(weave, result);
	                that.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(that.props.root);
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

	            console.log("Session Render");

	            return _react2.default.createElement(
	                _index.Modal,
	                { settings: this.settings.modalConfig, keyPress: "true", title: "Session State Editor" },
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU3FCOzs7QUFFakIsYUFGaUIsYUFFakIsQ0FBWSxLQUFaLEVBQW1COzhCQUZGLGVBRUU7OzJFQUZGLDBCQUdQLFFBRFM7O0FBRWYsY0FBSyxRQUFMLEdBQWlCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBb0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQixtQ0FBeEMsQ0FGRjtBQUdmLGNBQUssSUFBTCxHQUFhLFFBQVEsUUFBUixDQUFpQixjQUFqQixDQUFnQyxtQkFBaEMsQ0FBb0QsTUFBSyxLQUFMLENBQVcsSUFBWCxDQUFqRSxDQUhlO0FBSWYsY0FBSyxJQUFMLENBQVUsS0FBVixHQUFrQixPQUFsQixDQUplOztBQU1mLGNBQUssa0JBQUwsR0FBMEIsTUFBSyxrQkFBTCxDQUF3QixJQUF4QixPQUExQixDQU5lO0FBT2YsY0FBSyxTQUFMLEdBQWlCLE1BQUssU0FBTCxDQUFlLElBQWYsT0FBakIsQ0FQZTtBQVFmLGNBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCLENBUmU7QUFTZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxRQUFMLENBQWMsSUFBZCxPQUFoQixDQVRlO0FBVWYsY0FBSyxZQUFMO0FBVmU7S0FBbkI7O2lCQUZpQjs7NENBZUU7OzsrQ0FJSzs7O2tEQU1FLFdBQVU7Ozs7OztrQ0FNMUIsTUFBSztBQUNYLGlCQUFLLFlBQUwsR0FBb0IsS0FBSyxJQUFMLENBRFQ7QUFFWCxnQkFBSSxRQUFRLE1BQU0sUUFBTixDQUFlLEtBQUssSUFBTCxDQUF2QixDQUZPO0FBR1gsZ0JBQUksR0FBSixDQUhXO0FBSVgsZ0JBQUksS0FBSyxJQUFMLFlBQXFCLFFBQVEsSUFBUixDQUFhLGNBQWIsRUFDeEIsTUFBTSxLQUFOLENBREQsS0FHQyxNQUFNLE1BQU0sU0FBTixDQUFnQixLQUFoQixFQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQyxJQUFuQyxDQUFOLENBSEQ7QUFJQSxpQkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixLQUE5QixHQUFzQyxHQUF0QyxDQVJXOzs7OzJDQVlFLEdBQUU7QUFDZixnQkFBSSxRQUFRLEtBQUssUUFBTCxDQUFjLGVBQWQsQ0FBOEIsS0FBOUIsQ0FERztBQUVmLGdCQUFJLEtBQUssWUFBTCxZQUE2QixRQUFRLElBQVIsQ0FBYSxjQUFiLEVBQ2hDLEtBQUssWUFBTCxDQUFrQixLQUFsQixHQUEwQixLQUExQixDQURELEtBR0MsTUFBTSxRQUFOLENBQWUsS0FBSyxZQUFMLEVBQW1CLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBbEMsRUFIRDs7QUFLQSxpQkFBSyxXQUFMLEdBUGU7Ozs7bUNBVVg7QUFDUixnQkFBSSxVQUFXLFFBQVEsSUFBUixDQUFhLFlBQWIsQ0FBMEIsYUFBMUIsQ0FBd0MsS0FBeEMsQ0FBWCxDQURJO0FBRVIsZ0JBQUksYUFBYSxRQUFRLFNBQVIsRUFBYixDQUZJO0FBR1IsZ0JBQUksY0FBZSxXQUFXLE1BQVgsQ0FIWDtBQUlSLG1CQUFPLE1BQVAsQ0FBYyxJQUFJLElBQUosQ0FBUyxDQUFDLFdBQUQsQ0FBVCxDQUFkLEVBQXVDLFlBQXZDLEVBSlE7Ozs7aUNBU0QsR0FBRztBQUNOLGdCQUFNLGVBQWUsRUFBRSxNQUFGLENBQVMsS0FBVCxDQUFlLENBQWYsQ0FBZjs7QUFEQSxnQkFHTixDQUFLLElBQUwsR0FBWSxJQUFaLENBSE07QUFJTixpQkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixLQUE5QixHQUFzQyxFQUF0QyxDQUpNO0FBS04saUJBQUssV0FBTCxHQUxNO0FBTU4sZ0JBQUksT0FBTyxJQUFQLENBTkU7QUFPTixnQkFBSSxPQUFKLENBQVksVUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCO0FBQy9CLG9CQUFJLFNBQVMsSUFBSSxVQUFKLEVBQVQsQ0FEMkI7O0FBRy9CLHVCQUFPLE1BQVAsR0FBZ0IsVUFBVSxLQUFWLEVBQWlCOztBQUU3Qiw0QkFBUSxDQUFDLEtBQUQsRUFBUSxZQUFSLENBQVIsRUFGNkI7aUJBQWpCOzs7QUFIZSxzQkFTL0IsQ0FBTyxpQkFBUCxDQUF5QixZQUF6QixFQVQrQjthQUEzQixDQUFaLENBV0ssSUFYTCxDQVdVLFVBQVUsYUFBVixFQUF5Qjs7QUFFM0Isb0JBQUksSUFBSSxjQUFjLENBQWQsQ0FBSixDQUZ1QjtBQUczQixvQkFBSSxTQUFTLEVBQUUsTUFBRixDQUFTLE1BQVQ7OztBQUhjLHVCQU0zQixDQUFRLElBQVIsQ0FBYSxZQUFiLENBQTBCLGVBQTFCLENBQTBDLEtBQTFDLEVBQWdELE1BQWhELEVBTjJCO0FBTzNCLHFCQUFLLElBQUwsR0FBYSxRQUFRLFFBQVIsQ0FBaUIsY0FBakIsQ0FBZ0MsbUJBQWhDLENBQW9ELEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBakUsQ0FQMkI7QUFRMUIscUJBQUssSUFBTCxDQUFVLEtBQVYsR0FBa0IsT0FBbEIsQ0FSMEI7QUFTMUIscUJBQUssWUFBTCxHQUFvQixJQUFwQjtBQVQwQixvQkFVMUIsQ0FBSyxXQUFMLEdBVjBCO2FBQXpCLENBWFYsQ0FQTTs7OztpQ0FvQ0g7O0FBSVAsZ0JBQUksbUJBQW1CO0FBQ25CLDJCQUFVLEtBQVY7QUFDQSw0QkFBVyxLQUFYO0FBQ0EsNkJBQVksT0FBWjtBQUNBLDhCQUFhLEtBQWI7QUFDQSw2QkFBWSxLQUFaO0FBQ0EsNkJBQVksTUFBWjtBQUNBLHVCQUFNLE9BQU47QUFDQSx5QkFBUSxLQUFSO0FBQ0Esd0JBQU8sU0FBUDtBQUNBLDBCQUFTLE1BQVQ7QUFDQSwwQkFBUyxVQUFUO2FBWEEsQ0FKRztBQWlCUCxnQkFBSSxtQkFBbUI7QUFDbkIsdUJBQU8sTUFBUDtBQUNBLHlCQUFTLEdBQVQ7QUFDQSwwQkFBVSxRQUFWO0FBQ0EsMEJBQVUsVUFBVjtBQUNBLHNCQUFLLEdBQUw7QUFDQSxxQkFBSSxLQUFKO0FBQ0Esd0JBQU8sS0FBUDthQVBBLENBakJHOztBQTJCUCxvQkFBUSxHQUFSLENBQVksZ0JBQVosRUEzQk87O0FBNkJQLG1CQUFTOztrQkFBTyxVQUFVLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBMkIsVUFBUyxNQUFULEVBQWdCLE9BQU0sc0JBQU4sRUFBNUQ7Z0JBRUc7O3NCQUFLLE9BQU8sRUFBQyxRQUFPLEtBQVAsRUFBYSxPQUFNLE1BQU4sRUFBYSxTQUFTLE1BQVQsRUFBaUIsVUFBVSxVQUFWLEVBQXNCLFVBQVUsUUFBVixFQUF6RSxFQUFMO29CQUNJOzswQkFBVyxPQUFNLFVBQU4sRUFBaUIsU0FBUSxJQUFSLEVBQWEsYUFBWSxLQUFaLEVBQXpDO3dCQUNJLHVEQUFhLE1BQU0sS0FBSyxJQUFMLEVBQVcsVUFBVSxLQUFLLFFBQUwsRUFBZ0IsV0FBVyxLQUFLLFNBQUwsRUFBbkUsQ0FESjt3QkFFSSxvREFBVSxpQkFBaUIsS0FBSyxRQUFMLENBQWMsZUFBZCxFQUEzQixDQUZKO3FCQURKO2lCQUZIO2dCQVFHOztzQkFBSyxPQUFPLGdCQUFQLEVBQXlCLFNBQVMsS0FBSyxrQkFBTCxFQUF2Qzs7aUJBUkg7Z0JBU0c7O3NCQUFLLE9BQU8sZ0JBQVAsRUFBeUIsU0FBUyxLQUFLLFFBQUwsRUFBdkM7b0JBQXNEOzswQkFBSSxXQUFZLHNCQUFaLEVBQUo7O3FCQUF0RDs7aUJBVEg7Z0JBVUc7O3NCQUFLLE9BQU8sZ0JBQVAsRUFBTDtvQkFDSSx5Q0FBTyxVQUFVLEtBQUssUUFBTCxFQUFlLE1BQUssTUFBTCxFQUFZLE9BQU8sZ0JBQVAsRUFBNUMsQ0FESjtvQkFFSTs7MEJBQUksV0FBWSxvQkFBWixFQUFKOztxQkFGSjs7aUJBVkg7YUFBVCxDQTdCTzs7OztXQWxHVTtFQUFzQixnQkFBTSxTQUFOOztrQkFBdEIiLCJmaWxlIjoiU2Vzc2lvbkVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FuamF5L2dpdC9XZWF2ZVJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHdlYXZlcmVhY3QgZnJvbSBcIndlYXZlcmVhY3RcIjtcbmltcG9ydCB7TW9kYWx9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7U3BsaXRQYW5lfSBmcm9tIFwiLi4vLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQgU2Vzc2lvbkVkaXRvckNvbmZpZyBmcm9tIFwiLi9TZXNzaW9uRWRpdG9yQ29uZmlnXCI7XG5pbXBvcnQgVHJlZVNlY3Rpb24gZnJvbSBcIi4vVHJlZVNlY3Rpb25cIjtcbmltcG9ydCBOb2RlVmlldyBmcm9tIFwiLi9Ob2RlVmlld1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb25FZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gIHRoaXMucHJvcHMuc2V0dGluZ3M/dGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgU2Vzc2lvbkVkaXRvckNvbmZpZygpO1xuICAgICAgICB0aGlzLnRyZWUgPSAgd2VhdmVqcy5XZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uU3RhdGVUcmVlKHRoaXMucHJvcHMucm9vdCk7XG4gICAgICAgIHRoaXMudHJlZS5sYWJlbCA9IFwiV2VhdmVcIjtcblxuICAgICAgICB0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZSA9IHRoaXMuY2hhbmdlU2Vzc2lvblZhbHVlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubm9kZUNsaWNrID0gdGhpcy5ub2RlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYXZlRmlsZSA9IHRoaXMuc2F2ZUZpbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcGVuRmlsZSA9IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGE7Ly8gdG8tZG86dHJ5IHdpdGggbGlua2FibGVXYXRjaGVyIGFuZCBhZGQgZm9yY2VVcGRhdGUgdG8gdGhhdCB3YXRjaGVyXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblxuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIC8qaWYodGhpcy5wcm9wcy5yb290ICE9PSBuZXh0UHJvcHMucm9vdCl7XG5cbiAgICAgICAgfSovXG4gICAgfVxuXG4gICAgbm9kZUNsaWNrKG5vZGUpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgdmFyIHN0YXRlID0gV2VhdmUuZ2V0U3RhdGUobm9kZS5kYXRhKTtcbiAgICAgICAgdmFyIHN0cjtcbiAgICAgICAgaWYgKG5vZGUuZGF0YSBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgXHRzdHIgPSBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICBcdHN0ciA9IFdlYXZlLnN0cmluZ2lmeShzdGF0ZSwgbnVsbCwgJ1xcdCcsIHRydWUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IHN0cjtcbiAgfVxuXG5cbiAgY2hhbmdlU2Vzc2lvblZhbHVlKGUpe1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRhIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKVxuICAgICAgICBcdHRoaXMuc2VsZWN0ZWREYXRhLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgXHRXZWF2ZS5zZXRTdGF0ZSh0aGlzLnNlbGVjdGVkRGF0YSwgSlNPTi5wYXJzZSh2YWx1ZSkpO1xuXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHNhdmVGaWxlKCl7XG4gICAgdmFyIGFyY2hpdmUgID0gd2VhdmVqcy5jb3JlLldlYXZlQXJjaGl2ZS5jcmVhdGVBcmNoaXZlKHdlYXZlKVxuICAgIHZhciB1aW50OEFycmF5ID0gYXJjaGl2ZS5zZXJpYWxpemUoKTtcbiAgICB2YXIgYXJyYXlCdWZmZXIgID0gdWludDhBcnJheS5idWZmZXI7XG4gICAgd2luZG93LnNhdmVBcyhuZXcgQmxvYihbYXJyYXlCdWZmZXJdKSwgXCJ0ZXN0LndlYXZlXCIpO1xuICB9XG5cblxuXG4gIG9wZW5GaWxlKGUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIC8vIEJ1aWxkIFByb21pc2UgTGlzdCwgZWFjaCBwcm9taXNlIHJlc29sdmVkIGJ5IEZpbGVSZWFkZXIub25sb2FkLlxuICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgYm90aCB0aGUgRmlsZVJlYWRlciByZXN1bHQgYW5kIGl0cyBvcmlnaW5hbCBmaWxlLlxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtldmVudCwgc2VsZWN0ZWRmaWxlXSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlIGZpbGUuXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHNlbGVjdGVkZmlsZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHppcHBlZFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAvLyBSdW4gdGhlIGNhbGxiYWNrIGFmdGVyIGFsbCBmaWxlcyBoYXZlIGJlZW4gcmVhZC5cbiAgICAgICAgICAgICAgICB2YXIgZSA9IHppcHBlZFJlc3VsdHNbMF07XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAvLyByZWFkIHRoZSBjb250ZW50IG9mIHRoZSBmaWxlIHdpdGggSlNaaXBcblxuICAgICAgICAgICAgICAgIHdlYXZlanMuY29yZS5XZWF2ZUFyY2hpdmUubG9hZEZpbGVDb250ZW50KHdlYXZlLHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhhdC50cmVlID0gIHdlYXZlanMuV2VhdmVBUEkuU2Vzc2lvbk1hbmFnZXIuZ2V0U2Vzc2lvblN0YXRlVHJlZSh0aGF0LnByb3BzLnJvb3QpO1xuICAgICAgICAgICAgICAgICB0aGF0LnRyZWUubGFiZWwgPSBcIldlYXZlXCI7XG4gICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0ZWREYXRhID0gbnVsbCA7Ly8gdG8tZG86dHJ5IHdpdGggbGlua2FibGVXYXRjaGVyIGFuZCBhZGQgZm9yY2VVcGRhdGUgdG8gdGhhdCB3YXRjaGVyXG4gICAgICAgICAgICAgICAgIHRoYXQuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICB9XG5cblxuXG4gIHJlbmRlcigpIHtcblxuXG5cbiAgICB2YXIgYXBwbHlCdXR0b25TdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luVG9wOlwiNHB4XCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6XCIycHhcIixcbiAgICAgICAgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6XCIxcHhcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6XCJncmV5XCIsXG4gICAgICAgIGZsb2F0OlwicmlnaHRcIixcbiAgICAgICAgcGFkZGluZzpcIjRweFwiLFxuICAgICAgICBjdXJzb3I6XCJwb2ludGVyXCIsXG4gICAgICAgIGZvbnRTaXplOlwiMTJweFwiLFxuICAgICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcbiAgICB9XG4gICAgdmFyIGlucHV0QnV0dG9uU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgb3BhY2l0eTogXCIwXCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBsZWZ0OlwiMFwiLFxuICAgICAgICB0b3A6XCIycHhcIixcbiAgICAgICAgYm90dG9tOlwiMnB4XCJcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIlNlc3Npb24gUmVuZGVyXCIpO1xuXG4gICAgcmV0dXJuICggPE1vZGFsIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLm1vZGFsQ29uZmlnfSBrZXlQcmVzcz1cInRydWVcIiB0aXRsZT1cIlNlc3Npb24gU3RhdGUgRWRpdG9yXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OlwiOTAlXCIsd2lkdGg6XCIxMDAlXCIsZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImhpZGRlblwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIG1pblNpemU9XCI1MFwiIGRlZmF1bHRTaXplPVwiMjU2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJlZVNlY3Rpb24gdHJlZT17dGhpcy50cmVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5nc30gIG5vZGVDbGljaz17dGhpcy5ub2RlQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlldyBhY3RpdmVOb2RlVmFsdWU9e3RoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMuY2hhbmdlU2Vzc2lvblZhbHVlfT4gQXBwbHkgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5zYXZlRmlsZX0+PCBpIGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtZG93bmxvYWRcIiAgPiA8IC9pID4gU2F2ZSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcHBseUJ1dHRvblN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLm9wZW5GaWxlfSB0eXBlPSdmaWxlJyBzdHlsZT17aW5wdXRCdXR0b25TdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8IGkgY2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS11cGxvYWRcIiAgPiA8IC9pID4gTG9hZFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==

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

	var _App = __webpack_require__(8);

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

	exports.getToolForConfigName = function (name) {
	    if (_App2.default.getToolImplementation(name)) {
	        return _App2.default.getToolImplementation(name);
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTs7QUFFUixRQUFBLEFBQVEsaUNBQXVCLEFBQVUsTUFBTSxBQUMzQztRQUFJLGNBQUEsQUFBSSxzQkFBUixBQUFJLEFBQTBCLE9BQU8sQUFDakM7ZUFBTyxjQUFBLEFBQUksc0JBRlksQUFDM0IsQUFBcUMsQUFDakMsQUFBTyxBQUEwQjs7Q0FGViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmVlIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9UcmVlXCI7XG5pbXBvcnQgVHJlZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvVHJlZUNvbmZpZ1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vY29tcG9uZW50cy90cmVlL05vZGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9Ob2RlQ29uZmlnXCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsL01vZGFsXCI7XG5pbXBvcnQgTW9kYWxDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbENvbmZpZ1wiO1xuXG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gXCIuL2NvbXBvbmVudHMvc3BsaXRQYW5lL1NwbGl0UGFuZVwiO1xuaW1wb3J0IFNwbGl0UGFuZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3NwbGl0UGFuZS9TcGxpdFBhbmVDb25maWdcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi91dGlscy9BcHBcIjtcblxuXG5leHBvcnRzLlRyZWUgPSBUcmVlO1xuZXhwb3J0cy5Nb2RhbCA9IE1vZGFsO1xuZXhwb3J0cy5UcmVlQ29uZmlnID0gVHJlZUNvbmZpZztcbmV4cG9ydHMuTW9kYWxDb25maWcgPSBNb2RhbENvbmZpZztcbmV4cG9ydHMuU3BsaXRQYW5lID0gU3BsaXRQYW5lO1xuZXhwb3J0cy5TcGxpdFBhbmVDb25maWcgPSBTcGxpdFBhbmVDb25maWc7XG5cbmV4cG9ydHMuZ2V0VG9vbEZvckNvbmZpZ05hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKG5hbWUpO1xuICAgIH1cblxufVxuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTTtvQkFFRjs7YUFGRSxBQUVGLEtBQUEsQUFBWTs4QkFGVixBQUVpQjs7MkVBRmpCLGlCQUVpQixBQUNULEFBQ047O2NBQUEsQUFBSyxXQUFXLE1BQUEsQUFBSyxNQUFMLEFBQVcsV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVMsSUFGM0MsQUFFQyxBQUEwQyxBQUFJLEFBQzlEO2NBQUEsQUFBSyxTQUFMLEFBQWMsZUFBZSxNQUFBLEFBQUssTUFIbkIsQUFHYyxBQUFXLEFBQ3hDO2NBQUEsQUFBSyxTQUFMLEFBQWMsY0FBYyxNQUFBLEFBQUssTUFKbEIsQUFJYSxBQUFXO2VBSjNDLE1BQW1COzs7aUJBRmpCOzs0Q0FTaUI7OzsrQ0FJSzs7O2tEQUlFLFdBQVUsQUFDaEM7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLFVBQUEsQUFBVTtxQkFDakMsQUFBSyxXQUFXLFVBRDBCLEFBQzFCLEFBQVUsQUFDMUIsU0FGMEMsQUFDMUM7cUJBQ0EsQUFBSyxTQUFMLEFBQWMsZUFBZSxLQUFBLEFBQUssTUFGUSxBQUViLEFBQVcsQUFDeEM7cUJBQUEsQUFBSyxTQUFMLEFBQWMsY0FBYyxLQUFBLEFBQUssTUFIckMsQUFBOEMsQUFHZCxBQUFXLEFBRTNDOztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsVUFBQSxBQUFVO3dCQUM3QixBQUFRLElBRFosQUFBc0MsQUFDbEMsQUFBWSxnQkFEc0IsQUFDbEM7Ozs7O2lDQVNDLEFBQ2I7bUJBQVMsZ0RBQU0sTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8sT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8sVUFBVSxLQUFBLEFBQUssU0FBTCxBQUFjLFVBQVUsWUFBWSxLQUFBLEFBQUssVUFBVSxlQUFlLEtBQUEsQUFBSyxNQUQ1SixBQUNiLEFBQVMsQUFBMkosQUFBVzs7OztXQWxDeks7RUFBYSxnQkFBQSxBQUFNOztBQXVDekIsY0FBQSxBQUFJLDJCQUFKLEFBQStCLHlCQUEvQixBQUF1RDtrQkFDeEMiLCJmaWxlIjoiVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcblxuY2xhc3MgVHJlZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgVHJlZUNvbmZpZygpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGFUeXBlc01hcCA9IHRoaXMucHJvcHMuZGF0YVR5cGVzTWFwO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmdldERhdGFUeXBlID0gdGhpcy5wcm9wcy5nZXREYXRhVHlwZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5nc1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXAgPSB0aGlzLnByb3BzLmRhdGFUeXBlc01hcDtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0RGF0YVR5cGUgPSB0aGlzLnByb3BzLmdldERhdGFUeXBlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIENoYW5nZWRcIilcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG5yZXR1cm4gKCA8Tm9kZSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBub2Rlcz17dGhpcy5wcm9wcy5ub2Rlc30gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3Mucm9vdE5vZGV9IHRyZWVDb25maWc9e3RoaXMuc2V0dGluZ3N9IGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30vPiApO1xuICAgIH1cblxufVxuXG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LlRyZWVDb25maWdcIixUcmVlKTtcbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsVUFBQSxBQUFVOzthQUdQLEFBQVMsTUFBVCxBQUFlLEFBSWY7O1FBQUksZUFQVyxBQU9YLEFBQWUsQUFHbkI7O1FBQUEsQUFBSSx1Q0FBNkIsQUFBVSxhQUFWLEFBQXVCLFNBQVMsQUFDN0Q7WUFBSSxDQUFDLGFBQUQsQUFBQyxBQUFhLGNBQ2QsYUFBQSxBQUFhLGVBWk4sQUFVa0IsQUFDN0IsQUFDSSxBQUE0QixBQUdwQztLQUxpQyxDQVZsQixBQUdmOztRQVlBLEFBQUksa0NBQXdCLEFBQVU7ZUFDM0IsYUFoQkksQUFlYSxBQUF1QixBQUMvQyxBQUFPLEFBQWEsQUFHeEIsYUFKbUQsQUFDL0M7S0FEd0I7O1dBSTVCLEFBQU8sVUFuQlYsQUFBa0IsQUFtQmYsQUFBaUI7R0FuQnJCLEFBQUMsQUFxQkMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuXG4gICAgZnVuY3Rpb24gQXBwKCkge1xuXG4gICAgfVxuXG4gICAgdmFyIHRvb2xSZWdpc3RyeSA9IHt9O1xuXG5cbiAgICBBcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAoYXNDbGFzc05hbWUsIGpzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCF0b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdKVxuICAgICAgICAgICAgdG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSA9IGpzQ2xhc3M7XG4gICAgfVxuXG4gICAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uIChhc0NsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gdG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxufShtb2R1bGUpKTtcbiJdfQ==
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxDQUFDLFVBQUEsQUFBVTs7YUFHUCxBQUFTLFFBQVQsQUFBaUIsQUFNakI7O2FBQUEsQUFBUyxNQUFULEFBQWUsTUFBZixBQUFxQjthQUNaLElBQUEsQUFBSSxRQUFULEFBQWlCLEtBQUssQUFDbEI7aUJBQUEsQUFBSyxRQUFRLElBRGpCLEFBQXNCLEFBQ2xCLEFBQWEsQUFBSSxBQUdyQjs7O2VBTEosQUFBMEIsQUFLdEIsQUFBTyxBQUdYLEtBUjBCLEFBQ3RCOzs7VUFPSixBQUFNLDhCQUFvQixBQUFVLE1BQVYsQUFBZ0IsS0FBaEIsQUFBcUI7WUFDdkMsY0FBYyxNQUFBLEFBQU0sTUFEdUMsQUFDM0QsQUFBYyxBQUFZLEFBQzlCLEtBRitELEFBQy9EO1lBQ0EsQUFBSSxvQkFDQSxPQUFPLE1BQUEsQUFBTSxtQkFEakIsQUFDSSxBQUFPLEFBQXlCLGtCQUMvQixPQXJCTSxBQWlCVyxBQUV0QixBQUVLLEFBQU8sQUFNaEI7S0FWMEI7O1VBVTFCLEFBQU0scUJBQVcsQUFBVSxPQUFPLEFBQzlCO2VBQU8sa0NBNUJJLEFBMkJFLEFBQWlCLEFBQzlCLEFBQU8sQUFBbUIsQUFHOUI7S0FKaUI7O1VBSWpCLEFBQU0sK0JBQXFCLEFBQVUsT0FBTyxBQUN4QztlQUFPLGtDQWhDSSxBQStCWSxBQUFpQixBQUN4QyxBQUFPLEFBQW1CO0tBREg7OztBQS9CWixBQUdmLFNBdUNBLENBQUEsQUFBTSw2QkFBbUIsQUFBVTtpREFDTCxBQUN0QjtzQkFBQSxBQUFVLEFBQ1Y7bUJBQUEsQUFBTyxBQUNQO29CQUFBLEFBQVEsQUFDUjtrQkFBQSxBQUFNLEFBQ047aUJBQUEsQUFBSyxBQUNMO3dCQUFBLEFBQVksQUFDWjtxQkFBUyxTQUFBLEFBQVMsSUFBVCxBQUFhLEFBQ3RCO3VCQUFXLFNBQUEsQUFBUyx5QkFBVCxBQUFrQyxBQUM3Qzt3QkFBWSxTQUFBLEFBQVMsaUJBQVQsQUFBMEIsQUFDdEM7b0JBckRPLEFBMENVLEFBQWtCLEFBQ3ZDLEFBQU8sQUFVSCxBQUFRLEFBSWhCO1NBZFcsRUFEZ0MsQUFDdkM7S0FEcUI7O1VBZXpCLEFBQU0sa0JBQVEsQUFBVTtpREFDTSxBQUN0QjtzQkFBQSxBQUFVLEFBQ1Y7b0JBQUEsQUFBUSxBQUNSO21CQUFBLEFBQU8sQUFDUDtvQkFBQSxBQUFRLEFBQ1I7a0JBQUEsQUFBTSxBQUNOO2lCQUFBLEFBQUssQUFDTDt1QkFBVyxTQUFBLEFBQVMseUJBQVQsQUFBa0MsQUFDN0M7d0JBbEVPLEFBeURELEFBQWtCLEFBQzVCLEFBQU8sQUFRSCxBQUFZLEFBU3BCOztTQWpCVyxFQURxQixBQUM1QjtLQURVOztXQWtCZCxBQUFPLFVBM0VWLEFBQWtCLEFBMkVmLEFBQWlCO0dBM0VyQixBQUFDLEFBNkVDIiwiZmlsZSI6IlN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcGVuZFZlbmRvclByZWZpeCBmcm9tICcuL2FwcGVuZFZlbmRvclByZWZpeCc7XG5cblxuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG5cbiAgICBmdW5jdGlvbiBTdHlsZSgpIHtcblxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBtZXJnZShpbnRvLCBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG5cbiAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyA9IGZ1bmN0aW9uIChpbnRvLCBvYmosIGFwcGVuZFZlbmRvclByZWZpeCkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSBtZXJnZShpbnRvLCBvYmopO1xuICAgICAgICBpZiAoYXBwZW5kVmVuZG9yUHJlZml4KVxuICAgICAgICAgICAgcmV0dXJuIFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdClcbiAgICAgICAgZWxzZSByZXR1cm4gc3R5bGVPYmplY3Q7XG4gICAgfVxuXG5cblxuXG4gICAgU3R5bGUuZ2V0U3R5bGUgPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeChzdHlsZSk7XG4gICAgfVxuXG4gICAgU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4ID0gZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBhcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGUpO1xuICAgIH1cblxuXG5cblxuXG5cblxuICAgIC8vIGR1ZSB0byBib290c3RyYXAgTmF2YmFyIHppbmRleCAoMTAyOSkgdmFsdWUgd2UgaGF2ZSB0byBnaXZlIDEwMzAgZm9yIG92ZXJsYXlcbiAgICBTdHlsZS5vdmVybGF5Q29udGFpbmVyID0gZnVuY3Rpb24gKGlzT3Blbikge1xuICAgICAgICByZXR1cm4gYXBwZW5kVmVuZG9yUHJlZml4KHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMSknLFxuICAgICAgICAgICAgb3BhY2l0eTogaXNPcGVuID8gMSA6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGlzT3BlbiA/ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScgOiAndHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGlzT3BlbiA/ICdvcGFjaXR5IDAuNXMnIDogJ29wYWNpdHkgMC41cywgdHJhbnNmb3JtIDAuMXMgMC41cycsXG4gICAgICAgICAgICB6SW5kZXg6IDEwMzBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgU3R5bGUubW9kYWwgPSBmdW5jdGlvbiAoaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBhcHBlbmRWZW5kb3JQcmVmaXgoe1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICB6SW5kZXg6IDEwNTAsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBpc09wZW4gPyAndHJhbnNsYXRlM2QoMCwgMCwgMCknIDogJ3RyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKScsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMnLFxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTdHlsZTtcblxufShtb2R1bGUpKTtcbiJdfQ==
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
	            if (this.props.treeItem !== nextProps.treeItem) {
	                conosle.log("Session tree called");
	                this.setSessionStateFromTree();
	            }
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
	                nodeUI = _react2.default.createElement("span", null, _react2.default.createElement("span", { onClick: this.toggle }, _react2.default.createElement("i", { className: folderIcon, style: nodeIconStyleObject }), " ", this.settings.label.value), _react2.default.createElement("ul", { style: { listStyleType: "none", paddingLeft: "20px" } }, nodesUI));
	            } else {
	                //leaf
	                var leaf = this.settings.label.value;
	                var fileIcon = this.props.treeConfig.getFileIcon(this.props.data);
	                var fileIconStyle = this.props.treeConfig.getFileIconStyle();
	                var activeLeafColor = this.settings.active.value ? "#8e8d8d" : "black";
	                if (fileIcon.indexOf("fa fa-") > -1) nodeUI = _react2.default.createElement("li", { style: { color: activeLeafColor }, onClick: this.toggle }, _react2.default.createElement("i", { className: fileIcon }), " ", leaf);else nodeUI = _react2.default.createElement("li", { style: { color: activeLeafColor }, onClick: this.toggle }, _react2.default.createElement("span", { style: fileIconStyle }, fileIcon), " ", leaf);
	            }

	            return nodeUI;
	        }
	    }]);

	    return Node;
	}(_react2.default.Component);

	_App2.default.registerToolImplementation("weavereact.NodeConfig", Node);
	exports.default = Node;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTTtvQkFFRjs7YUFGRSxBQUVGLEtBQUEsQUFBWTs4QkFGVixBQUVpQjs7MkVBRmpCLGlCQUVpQixBQUNULEFBQ047O2NBQUEsQUFBSyxXQUFXLE1BQUEsQUFBSyxNQUFMLEFBQVcsV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVMsaUJBRjNDLEFBRUMsQUFDaEI7Y0FBQSxBQUFLLFNBQVMsTUFBQSxBQUFLLE9BQUwsQUFBWSxLQUhYLEFBR2YsQUFDQTtjQUFBLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQUp2QixBQUlmLEFBQ0E7Y0FBQSxBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FMdkIsQUFLZixBQUNBO2NBQUEsQUFBSywwQkFBMEIsTUFBQSxBQUFLLHdCQUFMLEFBQTZCLEtBTjdDLEFBTWYsQUFDQTtjQVBlLEFBT2YsQUFBSztlQVBULE1BQW1COzs7aUJBRmpCOzs0Q0FZaUIsQUFDZjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLHFCQUFuQixBQUF3QyxNQUFNLEtBRC9CLEFBQ2YsQUFBOEMsQUFBSyxBQUNuRDtpQkFBQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCLG1CQUF2QixBQUEwQyxxQkFBMUMsQUFBK0QsTUFBTSxLQUZ0RCxBQUVmLEFBQXFFLEFBQUssQUFDMUU7aUJBQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixxQkFBcEIsQUFBeUMsTUFBTSxLQUhoQyxBQUdmLEFBQStDLEFBQUssQUFDcEQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQixxQkFBckIsQUFBMEMsTUFBTSxLQUpqQyxBQUlmLEFBQWdELEFBQUs7Ozs7K0NBR2pDLEFBQ3BCO2lCQUFBLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUIsZUFBbkIsQUFBa0MsTUFBTSxLQURwQixBQUNwQixBQUF3QyxBQUFLLEFBQzdDO2lCQUFBLEFBQUssU0FBTCxBQUFjLFNBQWQsQUFBdUIsbUJBQXZCLEFBQTBDLGVBQTFDLEFBQXlELE1BQU0sS0FGM0MsQUFFcEIsQUFBK0QsQUFBSyxBQUNwRTtpQkFBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLGVBQXBCLEFBQW1DLE1BQU0sS0FIckIsQUFHcEIsQUFBeUMsQUFBSyxBQUM5QztpQkFBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLGVBQXJCLEFBQW9DLE1BQU0sS0FKdEIsQUFJcEIsQUFBMEMsQUFBSzs7OztpQ0FHM0MsQUFDSjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLFFBQVEsQ0FBQyxLQUFBLEFBQUssU0FBTCxBQUFjLEtBRHRDLEFBQ3dCLEFBQW1CLEFBQy9DO2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFDVixLQUFBLEFBQUssTUFBTCxBQUFXLGNBQVgsQUFBeUIsS0FBekIsQUFBOEIsTUFBSyxLQUFBLEFBQUssTUFENUMsQUFDSSxBQUFtQyxBQUFXLEFBQ2xEO2lCQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsaUJBQWlCLEtBSm5DLEFBSUosQUFBdUMsQUFBSzs7Ozs7aUJBSzVDLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsUUFBUSxLQUROLEFBQ3RCLEFBQTRCLEFBQUssQUFDakM7Z0JBQUksWUFBWSxLQUZNLEFBRWxCLEFBQVksQUFBSyxBQUNyQixlQUhzQixBQUN0QjtnQkFFSSxhQUFhLFVBQUEsQUFBVSxRQUFRLEFBQy9CO3FCQUFBLEFBQUssU0FBTCxBQUFjLFNBRGlCLEFBQy9CLEFBQXVCLEFBQ3ZCO3FCQUFLLElBQUksSUFBQSxBQUFJLEdBQUcsSUFBSSxVQUFBLEFBQVUsUUFBOUIsQUFBc0M7d0JBQzlCLGFBQWEsU0FEc0IsQUFDdEIsQUFBUyxBQUMxQixFQUZ1QyxBQUN2Qzt5QkFDQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCLGNBQXZCLEFBQXFDLHlCQUZ6QyxBQUEyQyxBQUkzQzs7cUJBQUEsQUFBSyxTQUFMLEFBQWMsU0FObEIsQUFBbUMsQUFNL0IsQUFBdUI7Ozs7O3VDQUlqQixBQUNWO2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBSyxLQUFBLEFBQUssTUFBckIsQUFBZ0IsQUFBVyxrQkFBM0IsQUFBNkM7dUJBQ3JDLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBSyxLQUFBLEFBQUssTUFEaEMsQUFBeUQsQUFDckQsQUFBTyxBQUFnQixBQUFXLFNBRG1CLEFBQ3JEO21CQUNDLEFBQ0Y7dUJBQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFLLEtBQUEsQUFBSyxNQUgvQixBQUVLLEFBQ0YsQUFBdUIsQUFBVzs7Ozs7dUNBSTNCLEFBQ1Y7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFLLEtBQUEsQUFBSyxNQUFyQixBQUFnQixBQUFXLGtCQUEzQixBQUE2Qzt1QkFDckMsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFLLEtBQUEsQUFBSyxNQURoQyxBQUF5RCxBQUNyRCxBQUFPLEFBQWdCLEFBQVcsU0FEbUIsQUFDckQ7bUJBQ0MsQUFDRDt1QkFBTyxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQUssS0FBQSxBQUFLLE1BSGhDLEFBRUssQUFDRCxBQUF1QixBQUFXOzs7OztrREFJaEIsV0FBVSxBQUNoQztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWEsVUFBQSxBQUFVO3dCQUNqQyxBQUFRLElBRGtDLEFBQzFDLEFBQVksQUFDWjtxQkFGSixBQUE4QyxBQUUxQyxBQUFLLDBCQUZxQyxBQUMxQzs7Ozs7O2dCQVVBLFVBREMsQUFDRCxBQUFVLEFBRWQ7O2dCQUFJLFNBSEMsQUFHRCxBQUFTLEFBQ2I7Z0JBQUksUUFBUSxLQUFBLEFBQUssU0FKWixBQUlELEFBQVEsQUFBYyxBQUMxQjtnQkFBRyxLQUFBLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUIsT0FBTSxBQUV4Qjs7b0JBQUcsTUFBQSxBQUFNLFNBQU4sQUFBZSxHQUFFLEFBQ2hCO3dCQUFJLFlBQVksS0FEQSxBQUNaLEFBQVksQUFBSyxBQUNyQjt5QkFBSyxJQUFJLElBQUEsQUFBSSxHQUFJLElBQUksTUFBQSxBQUFNLFFBQTNCLEFBQW1DOzRCQUMzQixXQUFXLFVBRG9CLEFBQy9CLEFBQVcsQUFBVSxBQUN6QixHQUZtQyxBQUNuQzs0QkFDSSxhQUFhLEtBQUEsQUFBSyxTQUFMLEFBQWMsU0FBZCxBQUF1QixVQUFXLE1BRmhCLEFBRS9CLEFBQWEsQUFBa0MsQUFBTSxBQUN6RDtnQ0FBQSxBQUFRLEtBQUssOEJBQUEsQUFBQyxRQUFLLEtBQUEsQUFBSyxHQUFHLE1BQUEsQUFBTSxVQUFVLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFPLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFPLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxZQUFZLFVBQUEsQUFBVSxZQUFZLGVBQWUsS0FBQSxBQUFLLE1BUHRMLEFBRUksQUFFSSxBQUF1QyxBQUduQyxBQUFhLEFBQXdKLEFBQVcsQUFLNUw7Ozs7O2dCQUFHLE1BQUEsQUFBTSxTQUFOLEFBQWUsR0FBRSxBQUNoQjs7b0JBQUksc0JBQXNCLGdCQUFBLEFBQU8sbUJBQW1CLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FEL0MsQUFDWixBQUFzQixBQUEwQixBQUFzQixBQUMxRTtvQkFBSSxhQUFhLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixjQUFjLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBSyxLQUFBLEFBQUssU0FBTCxBQUFjLEtBRm5FLEFBRVosQUFBaUUsQUFBbUIsQUFDeEY7eUJBQVMsNENBQ0Qsd0NBQU0sU0FBUyxLQUFmLEFBQWUsQUFBSyxVQUNoQixxQ0FBRyxXQUFBLEFBQVcsWUFBWSxPQUQ5QixBQUNJLEFBQTBCLEFBQU8sNkJBQzFCLEtBQUEsQUFBSyxTQUFMLEFBQWMsTUFIeEIsQUFHVSxBQUFvQixRQUUvQixzQ0FBSSxPQUFPLEVBQUMsZUFBQSxBQUFjLFFBQU8sYUFBakMsQUFBSSxBQUE2QixBQUFZLFlBUnpELEFBQW9CLEFBR2hCLEFBQVMsQUFLRCxBQUNLO21CQUliLEFBQ0E7O29CQUFJLE9BQU8sS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUR6QixBQUNXLEFBQW9CLEFBQy9CO29CQUFJLFdBQVcsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLFlBQVksS0FBQSxBQUFLLE1BRnRELEFBRUksQUFBNkMsQUFBVyxBQUM1RDtvQkFBSSxnQkFBZ0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUgvQixBQUdJLEFBQWdCLEFBQXNCLEFBQzFDO29CQUFJLGtCQUFrQixLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsUUFBckIsQUFBMkIsWUFKakQsQUFJc0IsQUFBcUMsQUFDM0Q7b0JBQUcsU0FBQSxBQUFTLFFBQVQsQUFBaUIsWUFBWSxDQUFBLEFBQUMsR0FDN0IsU0FBUyxzQ0FBSSxPQUFPLEVBQUMsT0FBUixBQUFRLEFBQU0sbUJBQWtCLFNBQVMsS0FBN0MsQUFBNkMsQUFBSyxVQUMvQyxxQ0FBRyxXQUROLEFBQ0csQUFBRyxBQUFXLGtCQUY5QixBQUNJLEFBQVMsQUFFVSxXQUduQixTQUFTLHNDQUFJLE9BQU8sRUFBQyxPQUFSLEFBQVEsQUFBTSxtQkFBa0IsU0FBUyxLQUE3QyxBQUE2QyxBQUFLLFVBQy9DLHdDQUFNLE9BQU4sQUFBTSxBQUFPLGlCQURoQixBQUNHLEFBQTZCLGdCQXpCakQsQUFrQkksQUFNSSxBQUFTLEFBRVUsQUFJL0I7OzttQkEvQ1MsQUErQ1QsQUFBUyxPQS9DQSxBQUNMOzs7O1dBM0VGO0VBQWEsZ0JBQUEsQUFBTTs7QUE4SHpCLGNBQUEsQUFBSSwyQkFBSixBQUErQix5QkFBL0IsQUFBdUQ7a0JBQ3hDIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuXG5jbGFzcyBOb2RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBOb2RlQ29uZmlnKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRUcmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2Rlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFRyZWVMYWJlbCA9IHRoaXMuZ2V0VHJlZUxhYmVsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUgPSB0aGlzLnNldFNlc3Npb25TdGF0ZUZyb21UcmVlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSAhdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpXG4gICAgfVxuXG5cbiAgICBzZXRTZXNzaW9uU3RhdGVGcm9tVHJlZSgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZSA9IHRoaXMuZ2V0VHJlZUxhYmVsKCk7XG4gICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2RlcygpO1xuICAgICAgICBpZiAodHJlZU5vZGVzICYmIHRyZWVOb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdE5hbWUgPSBcIm5vZGVcIiArIGk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KG9iamVjdE5hbWUsIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRyZWVOb2Rlcygpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5ub2Rlc10gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubm9kZXNdKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubm9kZXNdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VHJlZUxhYmVsKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmxhYmVsXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5sYWJlbF0oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubGFiZWxdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVJdGVtICE9PSBuZXh0UHJvcHMudHJlZUl0ZW0pe1xuICAgICAgICAgICAgY29ub3NsZS5sb2coXCJTZXNzaW9uIHRyZWUgY2FsbGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5zZXRTZXNzaW9uU3RhdGVGcm9tVHJlZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBub2Rlc1VJID0gW107XG5cbiAgICAgICAgdmFyIG5vZGVVSSA9IFwiXCI7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZXMoKTtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKXtcblxuICAgICAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgbm9kZXMubGVuZ3RoIDtpKyspe1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlZUl0ZW0gPSB0cmVlTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3QoIG5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNVSS5wdXNoKDxOb2RlIGtleT17aX0gZGF0YT17dHJlZUl0ZW19IGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBub2Rlcz17dGhpcy5wcm9wcy5ub2Rlc30gdHJlZUNvbmZpZz17dGhpcy5wcm9wcy50cmVlQ29uZmlnfSBzZXR0aW5ncz17bm9kZUNvbmZpZ30gY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrfS8+KSA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7IC8vZm9sZGVyXG4gICAgICAgICAgICB2YXIgbm9kZUljb25TdHlsZU9iamVjdCA9IFN0eWxlcy5hcHBlbmRWZW5kb3JQcmVmaXgodGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldE5vZGVJY29uU3R5bGUoKSk7XG4gICAgICAgICAgICB2YXIgZm9sZGVySWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGb2xkZXJJY29uKHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuICAgICAgICAgICAgbm9kZVVJID0gPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Zm9sZGVySWNvbn0gc3R5bGU9e25vZGVJY29uU3R5bGVPYmplY3R9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAmIzE2MDt7dGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOlwibm9uZVwiLHBhZGRpbmdMZWZ0OlwiMjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bm9kZXNVSX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgdmFyIGxlYWYgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGZpbGVJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZpbGVJY29uKHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICAgICAgICB2YXIgZmlsZUljb25TdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvblN0eWxlKCk7XG4gICAgICAgICAgICB2YXIgYWN0aXZlTGVhZkNvbG9yID0gdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWU/XCIjOGU4ZDhkXCI6XCJibGFja1wiO1xuICAgICAgICAgICAgaWYoZmlsZUljb24uaW5kZXhPZihcImZhIGZhLVwiKSA+IC0xKVxuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17e2NvbG9yOmFjdGl2ZUxlYWZDb2xvcn19IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiMxNjA7e2xlYWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e3tjb2xvcjphY3RpdmVMZWFmQ29sb3J9fSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2ZpbGVJY29uU3R5bGV9PntmaWxlSWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiMxNjA7e2xlYWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgfVxuXG4gICAgcmV0dXJuICggbm9kZVVJKTtcbiAgICB9XG5cbn1cblxuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19

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
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            rootNode: {
	                value: Weave.linkableChild(this, new _NodeConfig2.default())
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
	})(module); /*import Weave from 'Weave';
	            import weavejs from 'weavejs';*/
	//# sourceMappingURL=data:application/json;base64,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LEFBQ2Q7eUJBQUEsQUFBYSxBQUNiOzBCQUFBLEFBQWMsQUFDZDtzQkFwRU8sQUEyRE0sQUFBWSxBQUM3QixBQVFJLEFBQVUsQUFJbEI7VUFiaUMsQUFDN0I7S0FEaUI7O01BYXJCLEFBQUU7ZUFDUyxBQUNIO21CQUFBLEFBQU8sQUFDUDt3QkEzRU8sQUF3RU0sQUFBWSxBQUM3QixBQUVJLEFBQVk7VUFIYSxBQUM3QjtLQURpQjs7O0FBeEVOLEFBRWYsU0FrRkEsQ0FBQSxBQUFNLGNBQU4sQUFBb0IseUJBcEZMLEFBb0ZmLEFBQTZDLEFBRTdDOztXQUFBLEFBQU8sVUF0RlYsQUFBa0IsQUFzRmYsQUFBaUI7R0F0RnJCLEFBQUMsQUF3RkMiLCJmaWxlIjoiVHJlZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFdlYXZlIGZyb20gJ1dlYXZlJztcbmltcG9ydCB3ZWF2ZWpzIGZyb20gJ3dlYXZlanMnOyovXG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gVHJlZUNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImZvbGRlckljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1mb2xkZXJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmb2xkZXJPcGVuSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWZvbGRlci1vcGVuXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZmlsZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1maWxlLXRleHRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmaWxlT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1maWxlLXRleHQtb1wiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZURhdGFUeXBlSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3ROb2RlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTm9kZUNvbmZpZygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2V0RGF0YVR5cGUgPSBudWxsO1xuICAgIH1cblxuXG4gICAgdmFyIHAgPSBUcmVlQ29uZmlnLnByb3RvdHlwZTtcblxuXG5cbiAgICBwLmNoYW5nZUFjdGl2ZU5vZGUgPSBmdW5jdGlvbiAobm9kZUNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbm9kZUNvbmZpZztcbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcC5nZXRGaWxlSWNvbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIGlmICh0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZU9wZW5JY29uLnZhbHVlO1xuXG4gICAgfVxuXG4gICAgcC5nZXRGb2xkZXJJY29uID0gZnVuY3Rpb24gKGRhdGEsIGlzT3Blbikge1xuICAgICAgICB2YXIgZGF0VHlwZSA9IHRoaXMuZ2V0RGF0YVR5cGUgPyB0aGlzLmdldERhdGFUeXBlKGRhdGEpIDogZGF0YS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBpZiAodGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV0pXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgIHJldHVybiBpc09wZW4gPyB0aGlzLmZvbGRlck9wZW5JY29uLnZhbHVlIDogdGhpcy5mb2xkZXJJY29uLnZhbHVlO1xuXG4gICAgfVxuXG4gICAgcC5nZXRGaWxlSWNvblN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjN2ZkNmY5XCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxcHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjNweFwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjNweFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTFweFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwLmdldE5vZGVJY29uU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjN2ZkNmY5XCIsXG4gICAgICAgICAgICB0ZXh0U2hhZG93OiBcIi0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2tcIlxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LlRyZWVDb25maWcnLCBUcmVlQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gVHJlZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
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
	                modalPanelUI = _react2.default.createElement(_ModalPanel2.default, { sessionOpen: this.settings.open, settings: this.settings.panelConfig }, this.props.children);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT007cUJBRUY7O2FBRkUsQUFFRixNQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQixrQkFFaUIsQUFDVCxBQUNOOztjQUFBLEFBQUssV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFTLGtCQUYzQyxBQUVDLEFBQ2hCO1lBQUcsTUFBQSxBQUFLLE1BQUwsQUFBVyxPQUFPLE1BQUEsQUFBSyxTQUFMLEFBQWMsWUFBZCxBQUEwQixNQUExQixBQUFnQyxRQUFTLE1BQUEsQUFBSyxNQUFuRSxBQUE4RCxBQUFXLEFBR3pFOztjQUFBLEFBQUssWUFBWSxNQUFBLEFBQUssVUFBTCxBQUFlLEtBTmpCLEFBTWY7O2VBTkosTUFBbUI7OztpQkFGakI7OzRDQVlpQixBQUNmO2lCQUFBLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUIscUJBQW5CLEFBQXdDLE1BQU0sS0FEL0IsQUFDZixBQUE4QyxBQUFLLEFBQ25EO2lCQUFBLEFBQUssU0FBTCxBQUFjLFdBQWQsQUFBeUIscUJBQXpCLEFBQThDLE1BQU0sS0FGckMsQUFFZixBQUFvRCxBQUFLOzs7OytDQUtyQyxBQUNwQjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLGVBQW5CLEFBQWtDLE1BQU0sS0FEcEIsQUFDcEIsQUFBd0MsQUFBSyxBQUM3QztpQkFBQSxBQUFLLFNBQUwsQUFBYyxXQUFkLEFBQXlCLGVBQXpCLEFBQXdDLE1BQU0sS0FGMUIsQUFFcEIsQUFBOEMsQUFBSzs7OztvQ0FJNUMsQUFDUDtpQkFBQSxBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLFFBRFosQUFDUCxBQUEyQjs7OztpQ0FJdEIsQUFDVDtnQkFBSSxTQUFTLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FEbEIsQUFDSSxBQUFtQixBQUNoQztnQkFBSSxVQUFVLGdCQUFBLEFBQU0saUJBRlgsQUFFTCxBQUFVLEFBQXVCLEFBQ3JDO2dCQUFJLFFBQVEsZ0JBQUEsQUFBTSxNQUhULEFBR0wsQUFBUSxBQUFZLEFBQ3hCO2dCQUFJLGdCQUpLLEFBSUwsQUFBZ0IsQUFDcEI7Z0JBQUksZUFMSyxBQUtMLEFBQWUsQUFDbkI7Z0JBQUEsQUFBRyxRQUFPLEFBQ047K0JBQWUsc0RBQWEsYUFBYSxLQUFBLEFBQUssU0FBTCxBQUFjLE1BQU0sVUFBVSxLQUFBLEFBQUssU0FBN0QsQUFBd0QsQUFBYyxlQUNoRSxLQUFBLEFBQUssTUFGOUIsQUFBVSxBQUNOLEFBQ3FCLEFBQVcsQUFJcEM7OztnQkFBSSxDQUFDLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBUyxBQUNyQjtvQkFBRyxLQUFBLEFBQUssU0FBTCxBQUFjLFdBQWQsQUFBeUIsT0FBTSxBQUM5QjtvQ0FBZ0Isd0NBQU0sT0FBTyxFQUFDLFFBQVIsQUFBUSxBQUFPLGFBQVksU0FBUyxLQUExQyxBQUEwQyxBQUFLLGFBQVcscUNBQUcsV0FBVyxLQUFBLEFBQUssU0FBTCxBQUFjLFdBRDFHLEFBQWtDLEFBQzlCLEFBQWdCLEFBQTBELEFBQWMsQUFBeUI7dUJBRWpILEFBQ0E7b0NBQWdCLHdDQUFNLE1BQUEsQUFBSyxVQUFTLFdBQUEsQUFBVSxtQkFBa0IsU0FBUyxLQUF6RCxBQUF5RCxBQUFLLGFBTHRGLEFBQ0ksQUFHSSxBQUNBLEFBSVI7OzttQkFBUSw0Q0FBQSxBQUNTLGVBRUQsdUNBQUssT0FIYixBQUdRLEFBQUssQUFBTyxZQUNaLHVDQUFLLE9BQUwsQUFBSyxBQUFPLFNBekJuQixBQXFCVCxBQUFRLEFBSVEsQUFDSzs7OztXQXhEbkI7RUFBYyxnQkFBQSxBQUFNOztrQkErRFgiLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE1vZGFsQ29uZmlnIGZyb20gXCIuL01vZGFsQ29uZmlnXCI7XG5pbXBvcnQgTW9kYWxQYW5lbCBmcm9tIFwiLi9Nb2RhbFBhbmVsXCI7XG5cblxuXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgTW9kYWxDb25maWcoKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50aXRsZSkgdGhpcy5zZXR0aW5ncy5wYW5lbENvbmZpZy50aXRsZS52YWx1ZSA9ICB0aGlzLnByb3BzLnRpdGxlO1xuXG5cbiAgICAgICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKVxuICAgIH1cblxuXG4gICAgb3Blbk1vZGFsKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgdmFyIGlzT3BlbiA9IHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICB2YXIgb3ZlcmxheSA9IFN0eWxlLm92ZXJsYXlDb250YWluZXIoaXNPcGVuKTtcbiAgICB2YXIgbW9kYWwgPSBTdHlsZS5tb2RhbChpc09wZW4pO1xuICAgIHZhciBtb2RhbEJ1dHRvblVJID0gXCJcIjtcbiAgICB2YXIgbW9kYWxQYW5lbFVJID0gXCJcIjtcbiAgICBpZihpc09wZW4pe1xuICAgICAgICBtb2RhbFBhbmVsVUkgPSA8TW9kYWxQYW5lbCAgc2Vzc2lvbk9wZW49e3RoaXMuc2V0dGluZ3Mub3Blbn0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MucGFuZWxDb25maWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbFBhbmVsPlxuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5rZXlQcmVzcyl7XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi52YWx1ZSl7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvblVJID0gPHNwYW4gc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+PGkgY2xhc3NOYW1lPXt0aGlzLnNldHRpbmdzLmJ1dHRvbkljb24udmFsdWV9PjwvaT48L3NwYW4+O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvblVJID0gPHNwYW4gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5PcGVuPC9zcGFuPjtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiAoPHNwYW4gPlxuICAgICAgICAgICAgICAgICAgICB7bW9kYWxCdXR0b25VSX1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtvdmVybGF5fS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RhbFBhbmVsVUl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXX0=

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

	            layoutStyle["position"] = 'fixed';
	            this.sessionOpen.value ? layoutStyle["display"] = 'block' : layoutStyle["display"] = 'none';

	            return _react2.default.createElement("div", { style: layoutStyle }, _react2.default.createElement("div", { className: "modal-content" }, _react2.default.createElement("div", { className: "modal-header" }, _react2.default.createElement("button", { type: "button", className: "close", onClick: this.closeModal }, "×"), _react2.default.createElement("h4", { className: "modal-title" }, this.settings.title.value)), _react2.default.createElement("div", { className: "modal-body", style: bodyStyle }, this.props.children)));
	        }
	    }]);

	    return ModalPanel;
	}(_react2.default.Component);

	exports.default = ModalPanel;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsUGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07MEJBRUY7O2FBRkUsQUFFRixXQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQix1QkFFaUIsQUFDVCxBQUNOOztjQUFBLEFBQUssV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFTLHVCQUYzQyxBQUVDLEFBQ2hCO2VBQUEsQUFBTyxjQUFjLE1BSE4sQUFHTSxBQUFLO0FBSFgsYUFJZixDQUFBLEFBQUssY0FBYyxNQUFBLEFBQUssTUFKVCxBQUlJLEFBQVcsQUFFOUI7O2NBQUEsQUFBSyxRQUFRLE1BQUEsQUFBSyxTQU5ILEFBTWYsQUFBYSxBQUFjLEFBRTNCOztjQUFBLEFBQUssYUFBYyxNQUFBLEFBQUssV0FBTCxBQUFnQixLQVJwQixBQVFmLEFBQ0E7Y0FBQSxBQUFLLGNBQWUsTUFBQSxBQUFLLFlBQUwsQUFBaUIsS0FUdEIsQUFTZjtlQVRKOzs7aUJBRkU7OzRDQWNpQixBQUNmO2dCQUFJLEtBQUssTUFBQSxBQUFNLGFBQWEsS0FEYixBQUNYLEFBQXdCLEFBQUssQUFDakM7ZUFBQSxBQUFHLHFCQUFILEFBQXdCLE1BQU0sS0FGZixBQUVmLEFBQThCLEFBQUs7Ozs7K0NBR2YsQUFDcEI7Z0JBQUksS0FBSyxNQUFBLEFBQU0sYUFBYSxLQURSLEFBQ2hCLEFBQXdCLEFBQUssQUFDakM7ZUFBQSxBQUFHLGVBQUgsQUFBa0IsTUFBTSxLQUZKLEFBRXBCLEFBQXdCLEFBQUs7Ozs7c0NBR3BCLEFBQ1Q7aUJBQUEsQUFBSyxTQUFTLEtBQUEsQUFBSyxTQURWLEFBQ1QsQUFBYyxBQUFjOzs7O3FDQUdwQixBQUNSO2lCQUFBLEFBQUssWUFBTCxBQUFpQixRQURULEFBQ1IsQUFBeUI7Ozs7OztnQkFLekIsY0FBYyxLQUFBLEFBQUssU0FGZCxBQUVMLEFBQWMsQUFBYzs7QUFGdkIsQUFFVCw0QkFFZ0IsQUFDWjt3QkFBTyxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsQUFDNUI7dUJBQUEsQUFBTSxBQUNOOzJCQUFBLEFBQVcsQUFDWDsyQkFSSyxBQUlMLEFBSUEsQUFBVyxBQUdmO2FBUEk7O3dCQU9KLEFBQVksY0FYSCxBQVdULEFBQTBCLEFBQzFCO0FBQUMsaUJBQUEsQUFBSyxZQUFMLEFBQWlCLFFBQVEsWUFBQSxBQUFZLGFBQVosQUFBeUIsVUFBVSxZQUFBLEFBQVksYUFaaEUsQUFZb0QsQUFBeUIsQUFFdEY7O21CQUFRLHVDQUFLLE9BQUwsQUFBSyxBQUFPLGVBQ1IsdUNBQUssV0FBTCxBQUFLLEFBQVUsbUJBQ1gsdUNBQUssV0FBTCxBQUFLLEFBQVUsa0JBQ1gsMENBQVEsTUFBQSxBQUFLLFVBQVMsV0FBQSxBQUFVLFNBQVEsU0FBUyxLQUFqRCxBQUFpRCxBQUFLLGNBRDFELE1BRUksc0NBQUksV0FBSixBQUFJLEFBQVUsaUJBQWUsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUhuRCxBQUNJLEFBRWlDLEFBQW9CLFNBRXJELHVDQUFLLFdBQUEsQUFBVSxjQUFhLE9BQTVCLEFBQTRCLEFBQU8sYUFDOUIsS0FBQSxBQUFLLE1BckJqQixBQWNULEFBQVEsQUFDSSxBQU1TLEFBQVc7Ozs7V0FyRDlCO0VBQW1CLGdCQUFBLEFBQU07O2tCQTZEaEIiLCJmaWxlIjoiTW9kYWxQYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWxQYW5lbENvbmZpZyBmcm9tIFwiLi9Nb2RhbFBhbmVsQ29uZmlnXCI7XG5cblxuY2xhc3MgTW9kYWxQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgTW9kYWxQYW5lbENvbmZpZygpO1xuICAgICAgICB3aW5kb3cubW9kYWxMYXlvdXQgPSB0aGlzLnNldHRpbmdzOy8vIGZvciB0ZXN0aW5nXG4gICAgICAgIHRoaXMuc2Vzc2lvbk9wZW4gPSB0aGlzLnByb3BzLnNlc3Npb25PcGVuO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldExheW91dFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsID0gIHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlID0gIHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB2YXIgY2MgPSBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIGNjLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMudXBkYXRlU3RhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdmFyIGNjID0gV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICBjYy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0YXRlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc2V0dGluZ3MuZ2V0TGF5b3V0U3RhdGUoKSk7XG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbCgpe1xuICAgICAgICB0aGlzLnNlc3Npb25PcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgIC8vd2UgY291bGQgaGF2ZSB1c2VkIHRoaXMuc3RhdGUubGF5b3V0LCBidXQgc3R5bGUgb2YgZGl2IHdpbGwgZ2V0IHRoZSBzYW1lIHJlZmVyZW5jZSwgd2hpY2ggaXMgZGVwcmVjYXRlZCBpbiByZWFjdFxuICAgIHZhciBsYXlvdXRTdHlsZSA9IHRoaXMuc2V0dGluZ3MuZ2V0TGF5b3V0U3RhdGUoKTsvLyB0aGlzIHdpbGwgbWFrZSBzdXJlIHdlIGdldCBuZXcgb2JqZWN0IGV2ZXJ5dGltZVxuXG4gICAgdmFyIGJvZHlTdHlsZSA9IHtcbiAgICAgICAgaGVpZ2h0OnRoaXMuc2V0dGluZ3MuaGVpZ2h0LnZhbHVlLFxuICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJ1xuICAgIH1cblxuICAgIGxheW91dFN0eWxlW1wicG9zaXRpb25cIl0gPSAnZml4ZWQnO1xuICAgICh0aGlzLnNlc3Npb25PcGVuLnZhbHVlKT8obGF5b3V0U3R5bGVbXCJkaXNwbGF5XCJdID0gJ2Jsb2NrJyk6KGxheW91dFN0eWxlW1wiZGlzcGxheVwiXSA9ICdub25lJylcblxuICAgIHJldHVybiAoPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9PiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17Ym9keVN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxQYW5lbDtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,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QkFoQmYsQUFRTyxBQUNILEFBUUcsQUFFUDs7Z0JBQU0sV0FBVyxLQUFBLEFBQUssTUFsQ2pCLEFBa0NZLEFBQVcsQUFFNUI7O2dCQUFNLFVBQVUsQ0FBQSxBQUFDLGFBcENaLEFBb0NDLEFBQVUsQUFBYyxBQUU5Qjs7MERBQWUsV0FDUCxRQUFBLEFBQVEsS0FERCxBQUNQLEFBQWEsQUFFakI7dUJBQUEsQUFDSSxBQUVKO3FCQU5LLEFBTUwsQUFBTSxlQUNOLGdEQUFPLEtBQUEsQUFBTSxBQUNiO3FCQUFBLEFBQU0sQUFDTjt1QkFBQSxBQUNJLEFBRUo7MEJBQ0ksS0FBQSxBQUFLLFNBTlQsQUFNSSxBQUFjLGNBRWQsU0FSSixBQVFJLEFBQVMsSUFmUiw4REFnQmdCLEtBQUEsQUFBTSxBQUMzQjtxQkFBQSxBQUFNLEFBQ047NkJBQ0ksS0FBQSxBQUFLLEFBRVQ7dUJBckJLLEFBZ0JNLEFBS1gsQUFDSTthQU5PLENBaEJOLE9Bd0JGLGdEQUFPLEtBQUEsQUFBTSxBQUNoQjtxQkFBQSxBQUFNLEFBQ047dUJBQUEsQUFDSSxBQUVKOzBCQUNJLEtBQUEsQUFBSyxTQU5OLEFBTUMsQUFBYyxjQUVkLFNBUkQsQUFRQyxBQUFTLElBaENSLE1BdENKLEFBc0NMOzs7O1dBaklGO0VBQWtCLGdCQUFBLEFBQU07O0FBdUs5QixVQUFBLEFBQVUsZUFBZSxBQUNyQjthQUFBLEFBQVMsQUFDVDtXQUZKLEFBRUksQUFBTzs7O2tCQUdJIiwiZmlsZSI6IlNwbGl0UGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IFNwbGl0UGFuZUNvbmZpZyBmcm9tIFwiLi9TcGxpdFBhbmVDb25maWdcIjtcbmltcG9ydCBQYW5lIGZyb20gJy4vUGFuZSc7XG5pbXBvcnQgUmVzaXplciBmcm9tICcuL1Jlc2l6ZXInO1xuXG4vL2NvZGUgbG9naWMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdG9ta3AvcmVhY3Qtc3BsaXQtcGFuZVxuXG5jbGFzcyBTcGxpdFBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3MgOiBuZXcgU3BsaXRQYW5lQ29uZmlnKCk7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudW5Gb2N1c0NvdW50LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMudW5Gb2N1cyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICBjb25zdCByZWYgPSB0aGlzLnJlZnMucGFuZTE7XG4gICAgICAgIGlmIChyZWYgJiYgdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZSAmJiAhdGhpcy5zZXR0aW5ncy5yZXNpemVkLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhbmUxLnNpemUudmFsdWUgPSB0aGlzLnByb3BzLmRlZmF1bHRTaXplO1xuICAgICAgICAgICAgLy9yZWYuc2V0U2Vzc2lvblN0YXRlKCB0aGlzLnByb3BzLmRlZmF1bHRTaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVuRm9jdXNDb3VudC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLnVuRm9jdXMpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICB9XG5cblxuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudXBkYXRlVW5Gb2N1cygpO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LmNsaWVudFk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy51cGRhdGVVbkZvY3VzKCk7XG4gICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLnJlZnMucGFuZTE7XG4gICAgICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHJlZik7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnByb3BzLnNwbGl0ID09PSAndmVydGljYWwnID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTaXplID0gc2l6ZSAtIChwb3NpdGlvbiAtIGN1cnJlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucG9zaXRpb24udmFsdWUgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2l6ZWQudmFsdWUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdTaXplID49IHRoaXMucHJvcHMubWluU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1NpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYW5lMS5zaXplLnZhbHVlID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VVcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdGaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25EcmFnRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bkZvY3VzKCkgeyAvLyBuZWVkIHRvIGJlIGNhbGxlZCBjaGFuZ2Ugb2Ygc2Vzc2lvbiB2YWx1ZSBzbyB0aGF0IHdlIGNhbiBzZWUgdGhlbSBpbiBzZXNzaW9uIExvZ1xuICAgICAgICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3BsaXQgPSB0aGlzLnByb3BzLnNwbGl0O1xuXG4gICAgICAgIGxldCBzdHlsZU9iaiA9IFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeCh7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBNb3pVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICBXZWJraXRVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgICAgICBtc1VzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgIHVzZXJTZWxlY3Q6ICd0ZXh0J1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3BsaXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKHN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICByaWdodDogMFxuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhzdHlsZU9iaiwge1xuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbJ1NwbGl0UGFuZScsIHNwbGl0XTtcblxuICAgICAgICByZXR1cm4gKCA8IGRpdiBjbGFzc05hbWUgPSB7XG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5qb2luKCcgJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWYgPSBcInNwbGl0UGFuZVwiID5cbiAgICAgICAgICAgIDwgUGFuZSByZWYgPSBcInBhbmUxXCJcbiAgICAgICAgICAgIGtleSA9IFwicGFuZTFcIlxuICAgICAgICAgICAgc3BsaXQgPSB7XG4gICAgICAgICAgICAgICAgc3BsaXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucGFuZTFcbiAgICAgICAgICAgIH0gPiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF1cbiAgICAgICAgICAgIH0gPCAvUGFuZT4gPCBSZXNpemVyIHJlZiA9IFwicmVzaXplclwiXG4gICAgICAgICAgICBrZXkgPSBcInJlc2l6ZXJcIlxuICAgICAgICAgICAgb25Nb3VzZURvd24gPSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk1vdXNlRG93blxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BsaXQgPSB7XG4gICAgICAgICAgICAgICAgc3BsaXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+IDwgUGFuZSByZWYgPSBcInBhbmUyXCJcbiAgICAgICAgICAgIGtleSA9IFwicGFuZTJcIlxuICAgICAgICAgICAgc3BsaXQgPSB7XG4gICAgICAgICAgICAgICAgc3BsaXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucGFuZTJcbiAgICAgICAgICAgIH0gPiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMV1cbiAgICAgICAgICAgIH0gPCAvUGFuZT4gPCAvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3BsaXRQYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBtaW5TaXplOiAwLFxuICAgIHNwbGl0OiBcInZlcnRpY2FsXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwbGl0UGFuZTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07b0JBRUY7O2FBRkUsQUFFRixLQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQixpQkFFaUIsQUFDVCxBQUNOOztjQUFBLEFBQUssV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFTLGlCQUYzQyxBQUVDLEFBQ2hCO2NBQUEsQUFBSyxrQkFBa0IsTUFBQSxBQUFLLGdCQUFMLEFBQXFCLEtBSDdCLEFBR2Y7O0FBSGUsZUFBbkI7OztpQkFGRTs7NENBU2lCLEFBQ2Y7aUJBQUEsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQixxQkFBbkIsQUFBd0MsTUFBSyxLQUQ5QixBQUNmLEFBQTZDLEFBQUs7Ozs7K0NBSTlCLEFBQ3BCO2lCQUFBLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUIsZUFBbkIsQUFBa0MsTUFBSyxLQURuQixBQUNwQixBQUF1QyxBQUFLOzs7O3dDQUdoQztpQkFDWixBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLFFBREYsQUFDakIsQUFBMkIsS0FEVixBQUNqQjs7Ozs7O2dCQUtNLFFBQVEsS0FBQSxBQUFLLE1BRmQsQUFFUyxBQUFXLEFBQ3pCO2dCQUFNLFVBQVUsQ0FBQSxBQUFDLFFBSFosQUFHQyxBQUFVLEFBQVMsQUFFekI7OzJDQUFlLEFBQU0sbUJBQW1CLEFBQ3BDO3NCQUFBLEFBQU0sQUFDTjswQkFBQSxBQUFVLEFBQ1Y7eUJBQUEsQUFBUyxBQUNUOzBCQVRDLEFBS0QsQUFBVyxBQUlYLEFBQVUsQUFLZDthQVRlLENBQVgsQ0FMQyxBQUVMOztnQkFZSSxLQUFBLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUI7b0JBQ2YsVUFBQSxBQUFVLFlBQVksQUFDdEI7NkJBQUEsQUFBUyxRQUFRLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FEbkMsQUFBMEIsQUFDTCxBQUFtQjt1QkFDakMsQUFDSDs2QkFBQSxBQUFTLFNBQVMsS0FBQSxBQUFLLFNBQUwsQUFBYyxLQUQ3QixBQUNlLEFBQW1CLEFBQ3JDOzZCQUFBLEFBQVMsVUFKYixBQUVPLEFBRUgsQUFBbUIsQUFFdkI7O3lCQUFBLEFBQVMsT0FQYixBQUE4QixBQU8xQixBQUFnQixBQUdwQixPQVY4QixBQUMxQjs7O21CQVNJLHVDQUFLLFdBQVcsUUFBQSxBQUFRLEtBQW5CLEFBQVcsQUFBYSxNQUFNLE9BQW5DLEFBQW1DLEFBQU8sWUFDckMsS0FBQSxBQUFLLE1BekJiLEFBd0JMLEFBQ2EsQUFBVzs7OztXQS9DMUI7RUFBYSxnQkFBQSxBQUFNOztrQkFxRFYiLCJmaWxlIjoiUGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgUGFuZUNvbmZpZyBmcm9tIFwiLi9QYW5lQ29uZmlnXCI7XG5cbi8vY29kZSBsb2dpYyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS90b21rcC9yZWFjdC1zcGxpdC1wYW5lXG5cbmNsYXNzIFBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFBhbmVDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uU3RhdGUgPSB0aGlzLnNldFNlc3Npb25TdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAvL3RoaXMuc3RhdGUgPXt9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2l6ZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNpemUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBzZXRTZXNzaW9uU3RhdGUoc2l6ZSl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2l6ZS52YWx1ZSA9IHNpemU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHNwbGl0ID0gdGhpcy5wcm9wcy5zcGxpdDtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsnUGFuZScsIHNwbGl0XTtcblxuICAgICAgICBsZXQgc3R5bGVPYmogPSBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXgoe1xuICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHNwbGl0ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmoud2lkdGggPSB0aGlzLnNldHRpbmdzLnNpemUudmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqLmhlaWdodCA9IHRoaXMuc2V0dGluZ3Muc2l6ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBzdHlsZU9iai5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGVPYmouZmxleCA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuam9pbignICcpfSBzdHlsZT17c3R5bGVPYmp9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYW5lO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFJZixhQUFTLG1CQUFULEdBQStCOztBQUUzQixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCOztBQUUxQiwwQkFBYztBQUNWLHVCQUFPLHVCQUFQO2FBREo7QUFHQSxzQkFBVTtBQUNOLHVCQUFPLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUFQO2FBREo7QUFHQSw2QkFBaUI7QUFDYix1QkFBTyxJQUFJLFFBQVEsSUFBUixDQUFhLGdCQUFiLEVBQVg7YUFESjtBQUdBLHlCQUFhO0FBQ1QsdUJBQU8sd0JBQVA7YUFESjs7U0FYSixFQUYyQjs7QUFtQjNCLGFBQUssWUFBTCxHQUFvQjtBQUNoQiwyQ0FBK0IsR0FBL0I7QUFDQSwyQ0FBK0IsR0FBL0I7QUFDQSw0Q0FBZ0MsR0FBaEM7QUFDQSxtREFBdUMsZ0JBQXZDOztTQUpKLENBbkIyQjtLQUEvQjs7QUE4QkEsUUFBSSxJQUFJLG9CQUFvQixTQUFwQixDQWxDTztBQW1DZixNQUFFLFdBQUYsR0FBZ0IsVUFBVSxRQUFWLEVBQW9CO0FBQ2hDLGVBQU8sU0FBUyxJQUFULENBQWMsaUJBQWQsQ0FBZ0MsS0FBaEMsQ0FBc0MsQ0FBdEMsRUFBeUMsS0FBekMsQ0FEeUI7S0FBcEIsQ0FuQ0Q7O0FBeUNmLFdBQU8sT0FBUCxHQUFpQixtQkFBakIsQ0F6Q2U7Q0FBbEIsRUEyQ0MsTUEzQ0QsQ0FBRCIsImZpbGUiOiJTZXNzaW9uRWRpdG9yQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyZWVDb25maWd9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7TW9kYWxDb25maWd9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuXG4gICAgZnVuY3Rpb24gU2Vzc2lvbkVkaXRvckNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgIFwidHJlZUNvbmZpZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBUcmVlQ29uZmlnKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93VHJlZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVOb2RlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbENvbmZpZzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgTW9kYWxDb25maWcoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IHtcbiAgICAgICAgICAgIFwid2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nXCI6IFwiU1wiLFxuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXJcIjogXCJOXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW5cIjogXCJCXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuZGF0YS5zb3VyY2UuV2VhdmVEYXRhU291cmNlXCI6IFwiZmEgZmEtZGF0YWJhc2VcIlxuXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgdmFyIHAgPSBTZXNzaW9uRWRpdG9yQ29uZmlnLnByb3RvdHlwZTtcbiAgICBwLmdldERhdGFUeXBlID0gZnVuY3Rpb24gKHRyZWVJdGVtKSB7XG4gICAgICAgIHJldHVybiB0cmVlSXRlbS5kYXRhLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgIH1cblxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFNlc3Npb25FZGl0b3JDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 27 */
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
/* 28 */
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
