(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReactDOM"), require("Weave"), require("weavejs"), require("weavereact"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactDOM", "Weave", "weavejs", "weavereact", "React"], factory);
	else if(typeof exports === 'object')
		exports["weavereactdemo"] = factory(require("ReactDOM"), require("Weave"), require("weavejs"), require("weavereact"), require("React"));
	else
		root["weavereactdemo"] = factory(root["ReactDOM"], root["Weave"], root["weavejs"], root["weavereact"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__) {
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

	var _Weave = __webpack_require__(2);

	var _Weave2 = _interopRequireDefault(_Weave);

	var _weavejs = __webpack_require__(3);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _weavereact = __webpack_require__(4);

	var _weavereact2 = _interopRequireDefault(_weavereact);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.getSession = function () {
	    return session;
	};

	exports.addComponet = function (name, classObj) {
	    session.root.requestObject(name, classObj);
	};

	exports.init = function (container, session) {
	    _reactDom2.default.render(React.createElement(_App2.default, { root: session
	    }), document.getElementById(container));
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _SessionEditor = __webpack_require__(7);

	var _SessionEditor2 = _interopRequireDefault(_SessionEditor);

	var _SessionEditorConfig = __webpack_require__(8);

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
	            this.props.root.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	            window.addEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "componentWillUnMount",
	        value: function componentWillUnMount() {
	            this.props.root.childListCallbacks.removeCallback(this, this.forceUpdate);
	            window.removeEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var sessionChildren = this.props.root.getNames();
	            var toolUI = [];
	            for (var i = 0; i < sessionChildren.length; i++) {
	                var sessionName = sessionChildren[i];
	                var sessionObj = this.props.root.getObject(sessionName);
	                var configClassName = Weave.getPath(sessionObj).getType();
	                var ToolClass = weavereact.getToolForConfigName(configClassName);
	                var ui;
	                if (ToolClass) {
	                    ui = _react2.default.createElement(ToolClass, { settings: sessionObj, index: i, key: i });
	                }
	                toolUI.push(ui);
	            }

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_SessionEditor2.default, { sessionState: this.props.root, settings: this.sessionConfig }),
	                this.props.children,
	                toolUI
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _weavereact = __webpack_require__(4);

	var _weavereact2 = _interopRequireDefault(_weavereact);

	var _weavejs = __webpack_require__(3);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _SessionEditorConfig = __webpack_require__(8);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

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
	        _this.nodeClick = _this.nodeClick.bind(_this);
	        _this.changeSessionValue = _this.changeSessionValue.bind(_this);
	        _this.nodeValue = "";
	        _this.selectedData;

	        return _this;
	    }

	    _createClass(SessionEditor, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.settings.showTree.addImmediateCallback(this, this.forceUpdate);
	            this.settings.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
	            this.tree = _weavejs2.default.WeaveAPI.SessionManager.getSessionStateTree(this.props.sessionState);
	            this.tree.label = "Weave";
	            Weave.getCallbacks(this.tree).addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.showTree.removeCallback(this, this.forceUpdate);
	            this.settings.activeNodeValue.removeCallback(this, this.forceUpdate);

	            Weave.getCallbacks(this.tree).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "nodeClick",
	        value: function nodeClick(node) {
	            if (node.children) {
	                this.selectedData = node.data;
	                //this.settings.activeNodeValue.state = Weave.getState(node.data);
	            } else {
	                    this.selectedData = node.data;
	                    this.settings.activeNodeValue.state = node.data.value;
	                }
	        }
	    }, {
	        key: "changeSessionValue",
	        value: function changeSessionValue(e) {
	            this.selectedData.state = e.target.value;
	            this.settings.activeNodeValue.state = e.target.value;
	            this.forceUpdate();
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var treeUI = "";
	            if (this.tree) {
	                treeUI = _react2.default.createElement(_weavereact2.default.Tree, { data: this.tree, label: "label", nodes: "children", clickCallback: this.nodeClick, settings: this.settings.treeConfig, dataTypesMap: this.settings.dataTypesMap, getDataType: this.settings.getDataType });
	            }

	            var treeContainerStyle = {
	                width: "100%",
	                height: "100%",
	                borderStyle: "solid",
	                borderRadius: "2px",
	                borderWidth: "1px",
	                borderColor: "grey",
	                overflowY: 'scroll',
	                overflowX: 'scroll',
	                padding: "4px"
	            };
	            var resultContainerStyle = {
	                width: "100%",
	                height: "100%",
	                borderStyle: "solid",
	                borderRadius: "2px",
	                borderWidth: "1px",
	                borderColor: "grey",
	                overflowY: 'scroll',
	                overflowX: 'scroll',
	                padding: "4px"
	            };

	            return _react2.default.createElement(
	                _weavereact2.default.Modal,
	                { settings: this.settings.modalConfig, keyPress: "true", open: "false", title: "Session State Editor" },
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(
	                        _weavereact2.default.SplitPane,
	                        { split: "vertical", minSize: "50", defaultSize: "100" },
	                        _react2.default.createElement(
	                            "div",
	                            { style: treeContainerStyle },
	                            treeUI
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { style: resultContainerStyle },
	                            _react2.default.createElement("textarea", { style: { width: "100%", height: "100%", border: "none" }, value: this.settings.activeNodeValue.state, onChange: this.changeSessionValue })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return SessionEditor;
	}(_react2.default.Component);

	exports.default = SessionEditor;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _weavejs = __webpack_require__(3);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _weavereact = __webpack_require__(4);

	var _weavereact2 = _interopRequireDefault(_weavereact);

	var _Weave = __webpack_require__(2);

	var _Weave2 = _interopRequireDefault(_Weave);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (module) {

	    function SessionEditorConfig() {

	        Object.defineProperties(this, {

	            "treeConfig": {
	                value: _Weave2.default.linkableChild(this, new _weavereact2.default.TreeConfig())
	            },
	            showTree: {
	                value: new _weavejs2.default.core.LinkableBoolean(false)
	            },
	            activeNodeValue: {
	                value: new _weavejs2.default.core.LinkableVariable()
	            },
	            modalConfig: {
	                value: new _weavereact2.default.ModalConfig()
	            }

	        });

	        this.dataTypesMap = {
	            "weavejs.core.LinkableString": "S",
	            "weavejs.core.LinkableNumber": "N",
	            "weavejs.core.LinkableBoolean": "B",
	            "weavejs.data.source.WeaveDataSource": "fa fa-database",
	            "weavejs.data.key.KeySet": "fa fa-key",
	            "weavejs.data.key.KeyFilter": "fa fa-filter"
	        };
	    }

	    SessionEditorConfig.prototype.getDataType = function (treeItem) {
	        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
	    };

	    _Weave2.default.registerClass('weavereactdemo.SessionEditorConfig', SessionEditorConfig);

	    module.exports = SessionEditorConfig;
	})(module);
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


/***/ }
/******/ ])
});
;
//# sourceMappingURL=demo.js.map
