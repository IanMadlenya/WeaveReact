(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReactDOM"), require("Weave"), require("weavejs"), require("weavereact"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactDOM", "Weave", "weavejs", "weavereact", "React"], factory);
	else if(typeof exports === 'object')
		exports["weavereactdemo"] = factory(require("ReactDOM"), require("Weave"), require("weavejs"), require("weavereact"), require("React"));
	else
		root["weavereactdemo"] = factory(root["ReactDOM"], root["Weave"], root["weavejs"], root["weavereact"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_23__) {
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

	var _interopRequireDefault = __webpack_require__(1)["default"];

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Weave = __webpack_require__(3);

	var _Weave2 = _interopRequireDefault(_Weave);

	var _weavejs = __webpack_require__(4);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _weavereact = __webpack_require__(5);

	var _weavereact2 = _interopRequireDefault(_weavereact);

	var _App = __webpack_require__(6);

	var _App2 = _interopRequireDefault(_App);

	exports.getSession = function () {
	    return session;
	};

	exports.addComponet = function (name, classObj) {
	    session.root.requestObject(name, classObj);
	};

	exports.init = function (container, session) {
	    _reactDom2["default"].render(React.createElement(_App2["default"], { root: session
	    }), document.getElementById(container));
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

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
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = __webpack_require__(7)["default"];

	var _classCallCheck = __webpack_require__(22)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	exports.__esModule = true;

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _sessionStateEditorSessionEditor = __webpack_require__(24);

	var _sessionStateEditorSessionEditor2 = _interopRequireDefault(_sessionStateEditorSessionEditor);

	var _TestSpan = __webpack_require__(29);

	var _TestSpan2 = _interopRequireDefault(_TestSpan);

	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        _React$Component.call(this, props);
	    }

	    App.prototype.componentDidMount = function componentDidMount() {
	        this.props.root.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	    };

	    App.prototype.componentWillUnMount = function componentWillUnMount() {
	        this.props.root.childListCallbacks.removeCallback(this, this.forceUpdate);
	    };

	    App.prototype.render = function render() {
	        var sessionChildren = this.props.root.getNames();
	        var toolUI = [];
	        for (var i = 0; i < sessionChildren.length; i++) {
	            var sessionName = sessionChildren[i];
	            var sessionObj = this.props.root.getObject(sessionName);
	            var configClassName = Weave.getPath(sessionObj).getType();
	            var ToolClass = weavereact.getToolForConfigName(configClassName);
	            var ui;
	            if (ToolClass) {
	                ui = _react2["default"].createElement(ToolClass, { settings: sessionObj, index: i, key: i });
	            } else {
	                ui = _react2["default"].createElement(_TestSpan2["default"], { settings: sessionObj, index: i, key: i });
	            }
	            toolUI.push(ui);
	        }

	        return _react2["default"].createElement(
	            "div",
	            null,
	            _react2["default"].createElement(_sessionStateEditorSessionEditor2["default"], { sessionState: this.props.root }),
	            this.props.children,
	            toolUI
	        );
	    };

	    return App;
	})(_react2["default"].Component);

	exports["default"] = App;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(8)["default"];

	var _Object$setPrototypeOf = __webpack_require__(11)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	module.exports = __webpack_require__(16).Object.setPrototypeOf;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(14);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(19).set});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(16)
	  , ctx       = __webpack_require__(17)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(10).getDesc
	  , isObject = __webpack_require__(20)
	  , anObject = __webpack_require__(21);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(17)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = __webpack_require__(7)["default"];

	var _classCallCheck = __webpack_require__(22)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	exports.__esModule = true;

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _weavereact = __webpack_require__(5);

	var _weavereact2 = _interopRequireDefault(_weavereact);

	var _weavejs = __webpack_require__(4);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _SessionEditorConfig = __webpack_require__(25);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var SessionEditor = (function (_React$Component) {
	    _inherits(SessionEditor, _React$Component);

	    function SessionEditor(props) {
	        _classCallCheck(this, SessionEditor);

	        _React$Component.call(this, props);
	        this.settings = new _SessionEditorConfig2["default"]();
	        this.nodeClick = this.nodeClick.bind(this);
	        this.changeSessionValue = this.changeSessionValue.bind(this);
	        this.nodeValue = "";
	        this.selectedData;
	    }

	    SessionEditor.prototype.componentDidMount = function componentDidMount() {
	        this.settings.showTree.addImmediateCallback(this, this.forceUpdate);
	        this.settings.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
	        this.tree = _weavejs2["default"].WeaveAPI.SessionManager.getSessionStateTree(this.props.sessionState);
	        this.tree.label = "Weave";
	        Weave.getCallbacks(this.tree).addGroupedCallback(this, this.forceUpdate);
	    };

	    SessionEditor.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.settings.showTree.removeCallback(this, this.forceUpdate);
	        this.settings.activeNodeValue.removeCallback(this, this.forceUpdate);

	        Weave.getCallbacks(this.tree).removeCallback(this, this.forceUpdate);
	    };

	    SessionEditor.prototype.nodeClick = function nodeClick(node) {
	        if (node.children) {
	            this.selectedData = node.data;
	            //this.settings.activeNodeValue.state = Weave.getState(node.data);
	        } else {
	                this.selectedData = node.data;
	                this.settings.activeNodeValue.state = node.data.value;
	            }
	    };

	    SessionEditor.prototype.changeSessionValue = function changeSessionValue(e) {
	        this.selectedData.state = e.target.value;
	        this.settings.activeNodeValue.state = e.target.value;
	        this.forceUpdate();
	    };

	    SessionEditor.prototype.render = function render() {

	        var treeUI = "";
	        if (this.tree) {
	            treeUI = _react2["default"].createElement(_weavereact2["default"].Tree, { data: this.tree, label: "label", nodes: "children", clickCallback: this.nodeClick, settings: this.settings.treeConfig, dataTypesMap: this.settings.dataTypesMap, getDataType: this.settings.getDataType });
	        }

	        var treeContainerStyle = {
	            width: "72%",
	            height: "100%",
	            borderStyle: "solid",
	            borderRadius: "2px",
	            borderWidth: "1px",
	            borderColor: "grey",
	            float: "left",
	            overflowY: 'scroll',
	            overflowX: 'scroll',
	            padding: "4px"
	        };
	        var resultContainerStyle = {
	            width: "24%",
	            height: "100%",
	            borderStyle: "solid",
	            borderRadius: "2px",
	            borderWidth: "1px",
	            borderColor: "grey",
	            float: "right",
	            overflowY: 'scroll',
	            overflowX: 'scroll',
	            padding: "4px"
	        };

	        return _react2["default"].createElement(
	            _weavereact2["default"].Modal,
	            { settings: this.settings.modalConfig },
	            _react2["default"].createElement(
	                "div",
	                { style: { display: "inline-block", width: "100%" } },
	                _react2["default"].createElement(
	                    "div",
	                    { style: treeContainerStyle },
	                    treeUI
	                ),
	                _react2["default"].createElement(
	                    "span",
	                    { style: resultContainerStyle },
	                    _react2["default"].createElement("textarea", { style: { width: "100%", height: "100%", border: "none" }, value: this.settings.activeNodeValue.state, onChange: this.changeSessionValue })
	                )
	            )
	        );
	    };

	    return SessionEditor;
	})(_react2["default"].Component);

	exports["default"] = SessionEditor;
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _Object$defineProperties = __webpack_require__(27)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	var _weavejs = __webpack_require__(4);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _weavereact = __webpack_require__(5);

	var _weavereact2 = _interopRequireDefault(_weavereact);

	var _Weave = __webpack_require__(3);

	var _Weave2 = _interopRequireDefault(_Weave);

	(function (module) {

	    function SessionEditorConfig() {

	        _Object$defineProperties(this, {

	            "treeConfig": {
	                value: _Weave2["default"].linkableChild(this, new _weavereact2["default"].TreeConfig())
	            },
	            showTree: {
	                value: new _weavejs2["default"].core.LinkableBoolean(false)
	            },
	            activeNodeValue: {
	                value: new _weavejs2["default"].core.LinkableVariable()
	            }

	        });

	        this.dataTypesMap = {
	            "weavejs.core.LinkableString": "S",
	            "weavejs.core.LinkableNumber": "N",
	            "weavejs.core.LinkableBoolean": "B"
	        };
	    }

	    SessionEditorConfig.prototype.getDataType = function (treeItem) {
	        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
	    };

	    _Weave2["default"].registerClass('weavereactdemo.SessionEditorConfig', SessionEditorConfig);

	    module.exports = SessionEditorConfig;
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ },
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(28), __esModule: true };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	module.exports = function defineProperties(T, D){
	  return $.setDescs(T, D);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = __webpack_require__(7)["default"];

	var _classCallCheck = __webpack_require__(22)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	exports.__esModule = true;

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var TestSpan = (function (_React$Component) {
	    _inherits(TestSpan, _React$Component);

	    function TestSpan(props) {
	        _classCallCheck(this, TestSpan);

	        _React$Component.call(this, props);
	        this.settings = this.props.settings;
	    }

	    TestSpan.prototype.componentDidMount = function componentDidMount() {
	        this.settings.addImmediateCallback(this, this.forceUpdate);
	    };

	    TestSpan.prototype.componentWillUnMount = function componentWillUnMount() {
	        this.settings.removeCallback(this, this.forceUpdate);
	    };

	    TestSpan.prototype.render = function render() {

	        return _react2["default"].createElement(
	            "div",
	            null,
	            _react2["default"].createElement(
	                "span",
	                null,
	                this.settings.state
	            )
	        );
	    };

	    return TestSpan;
	})(_react2["default"].Component);

	exports["default"] = TestSpan;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=demo.js.map
