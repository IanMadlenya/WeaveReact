(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReactDOM"), require("Weave"), require("weavejs"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactDOM", "Weave", "weavejs", "React"], factory);
	else if(typeof exports === 'object')
		exports["reactweave"] = factory(require("ReactDOM"), require("Weave"), require("weavejs"), require("React"));
	else
		root["reactweave"] = factory(root["ReactDOM"], root["Weave"], root["weavejs"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_11__) {
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

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	var _TreeConfig = __webpack_require__(6);

	var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

	var _ModalConfig = __webpack_require__(7);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _Tree = __webpack_require__(10);

	var _Tree2 = _interopRequireDefault(_Tree);

	var _Modal = __webpack_require__(15);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Tree = _Tree2.default;
	exports.Modal = _Modal2.default;
	exports.TreeConfig = _TreeConfig2.default;
	exports.ModalConfig = _ModalConfig2.default;

	exports.getToolForConfigName = function (name) {
	    if (_App2.default.getToolImplementation(name)) {
	        return _App2.default.getToolImplementation(name);
	    } else {
	        console.warn("No Tool is registered for " + name);
	    }
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _weavejs = __webpack_require__(3);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _Weave = __webpack_require__(2);

	var _Weave2 = _interopRequireDefault(_Weave);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (module) {

	    function TreeConfig() {

	        Object.defineProperties(this, {
	            "label": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString(""))
	            },
	            "children": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableHashMap()) // important to be prototype as type restriction is compared with prototype
	            },
	            "open": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableBoolean(false))
	            },
	            "folderIcon": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString("fa fa-folder"))
	            },
	            "folderOpenIcon": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString("fa fa-folder-open"))
	            },
	            "fileIcon": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString("fa fa-file-text"))
	            },
	            "fileOpenIcon": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString("fa fa-file-text-o"))
	            },
	            "enableTypeIcon": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableBoolean(false))
	            }
	        });

	        this.activeLeaf = null;
	    }

	    var p = TreeConfig.prototype;

	    p.getNodes = function () {
	        return this.children.getNames();
	    };

	    p.getFileIcon = function (data) {
	        if (this.enableTypeIcon.value) {
	            if (typeof data === "string") {
	                return "fa fa-info";
	            } else if (typeof data === "number") {
	                return "fa fa-hashtag";
	            } else if (typeof data === "boolean") {
	                return "fa fa-flag";
	            }
	        }
	        return this.fileIcon.value;
	    };

	    p.reset = function () {
	        this.label.value = "";
	        this.open.value = false;
	        this.children.removeAllObjects();
	    };

	    //This Function makes this class as SessionClass
	    _Weave2.default.registerClass('reactweave.TreeConfig', TreeConfig);

	    module.exports = TreeConfig;
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _weavejs = __webpack_require__(3);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _Weave = __webpack_require__(2);

	var _Weave2 = _interopRequireDefault(_Weave);

	var _ModalPanelConfig = __webpack_require__(8);

	var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (module) {

	    function ModalConfig() {

	        Object.defineProperties(this, {
	            "panelConfig": {
	                value: _Weave2.default.linkableChild(this, new _ModalPanelConfig2.default())
	            },
	            "open": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableBoolean(false))
	            },
	            "buttonIcon": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString(""))
	            }

	        });
	    }

	    //This Function makes this class as SessionClass
	    _Weave2.default.registerClass('admindesk.ModalConfig', ModalConfig);

	    module.exports = ModalConfig;
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _weavejs = __webpack_require__(3);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _Weave = __webpack_require__(2);

	var _Weave2 = _interopRequireDefault(_Weave);

	var _BorderConfig = __webpack_require__(9);

	var _BorderConfig2 = _interopRequireDefault(_BorderConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (module) {

	    function ModalPanelConfig() {

	        Object.defineProperties(this, {
	            "border": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableDynamicObject(_BorderConfig2.default))
	            },
	            "title": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString(""))
	            }

	        });

	        Object.defineProperties(this, {
	            "width": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString("60%"))
	            },
	            "height": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString("80%"))
	            },
	            "marginLeft": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString("-20%"))
	            },
	            "marginTop": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString("-20%"))
	            },
	            "left": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString("40%"))
	            },
	            "top": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString("40%"))
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
	    _Weave2.default.registerClass('admindesk.ModalPanelConfig', ModalPanelConfig);

	    module.exports = ModalPanelConfig;
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _weavejs = __webpack_require__(3);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _Weave = __webpack_require__(2);

	var _Weave2 = _interopRequireDefault(_Weave);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (module) {

	    function BorderConfig() {

	        Object.defineProperties(this, {
	            "borderColor": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString('#bebebe'))
	            },
	            "borderWidth": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString('1px'))
	            },
	            "borderRadius": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString('5px'))
	            },
	            "borderStyle": {
	                value: _Weave2.default.linkableChild(this, new _weavejs2.default.core.LinkableString('solid'))
	            }
	        });
	    }

	    var p = BorderConfig.prototype;

	    p.getBorderStateFor = function (properties) {
	        if (!properties) properties = ["borderColor", "borderWidth", "borderRadius", "borderStyle"];
	        return _App2.default.getStateFor(this, properties);
	    };

	    _Weave2.default.registerClass('admindesk.BorderConfig', BorderConfig);

	    module.exports = BorderConfig;
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _weavejs = __webpack_require__(3);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	var _Style = __webpack_require__(12);

	var _Style2 = _interopRequireDefault(_Style);

	var _TreeConfig = __webpack_require__(6);

	var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tree = function (_React$Component) {
	    _inherits(Tree, _React$Component);

	    function Tree(props) {
	        _classCallCheck(this, Tree);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tree).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _TreeConfig2.default();
	        _this.toggle = _this.toggle.bind(_this);
	        _this.getTreeNodes = _this.getTreeNodes.bind(_this);
	        _this.getTreeLabel = _this.getTreeLabel.bind(_this);
	        _this.settings.enableTypeIcon.value = true; //temp to check
	        return _this;
	    }

	    _createClass(Tree, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            Weave.getCallbacks(this.settings.open).addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            Weave.getCallbacks(this.settings.open).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "toggle",
	        value: function toggle() {
	            this.settings.open.value = !this.settings.open.value;
	            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data);
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
	                    this.settings.children.requestObject(objectName, _TreeConfig2.default);
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
	            // to-do:
	            // has to be done here for asynchrnous data
	            // else need to call in constructor
	            this.setSessionStateFromTree();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var nodesUI = [];
	            var folderIcon = this.settings.folderIcon.value;

	            var nodeUI = "";
	            var nodes = this.settings.getNodes();
	            if (this.settings.open.value) {
	                folderIcon = this.settings.folderOpenIcon.value;
	                //fileIcon = this.settings.fileOpenIcon.value;

	                if (nodes.length > 0) {
	                    var treeNodes = this.getTreeNodes();
	                    for (var i = 0; i < nodes.length; i++) {
	                        var treeItem = treeNodes[i];
	                        var treeConfig = this.settings.children.getObject(nodes[i]);
	                        nodesUI.push(_react2.default.createElement(Tree, { key: i, data: treeItem, label: this.props.label, nodes: this.props.nodes, settings: treeConfig, clickCallback: this.props.clickCallback }));
	                    }
	                }
	            }

	            var nodeIconStyleObject = _Style2.default.appendVendorPrefix({ color: "#7fd6f9", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" });

	            if (nodes.length > 0) {
	                //folder

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
	                        { style: { listStyleType: "none" } },
	                        nodesUI
	                    )
	                );
	            } else {
	                //leaf
	                var leaf = this.settings.label.value;
	                var fileIcon = this.settings.getFileIcon(this.props.data.data.value);
	                nodeUI = _react2.default.createElement(
	                    "li",
	                    { onClick: this.toggle },
	                    _react2.default.createElement("i", { className: fileIcon }),
	                    " ",
	                    leaf
	                );
	            }

	            return nodeUI;
	        }
	    }]);

	    return Tree;
	}(_react2.default.Component);

	_App2.default.registerToolImplementation("reactweave.TreeConfig", Tree);
	exports.default = Tree;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _appendVendorPrefix = __webpack_require__(13);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getVendorPropertyName = __webpack_require__(14);

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

/***/ },
/* 14 */
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

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _weavejs = __webpack_require__(3);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _Style = __webpack_require__(12);

	var _Style2 = _interopRequireDefault(_Style);

	var _ModalConfig = __webpack_require__(7);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _ModalPanel = __webpack_require__(16);

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

	        _this.state = {
	            open: _this.settings.open.value
	        };
	        _this.updateState = _this.updateState.bind(_this);
	        _this.openModal = _this.openModal.bind(_this);

	        return _this;
	    }

	    _createClass(Modal, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.settings.open.addImmediateCallback(this, this.updateState);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.open.removeCallback(this, this.updateState);
	        }
	    }, {
	        key: "updateState",
	        value: function updateState() {
	            this.setState({
	                open: this.settings.open.value
	            });
	        }
	    }, {
	        key: "openModal",
	        value: function openModal() {
	            this.settings.open.value = true;
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var overlay = _Style2.default.overlayContainer(this.state.open);
	            var modal = _Style2.default.modal(this.state.open);
	            //if(this.state.open)modal['width'] = this.state.width;

	            // important to put modalpanel in wrapper in style, as style is not applied to custom react component, react takes the style of outer contianer in
	            // react Component render function
	            return _react2.default.createElement(
	                "span",
	                null,
	                _react2.default.createElement(
	                    "span",
	                    { type: "button", className: "btn btn-primary", onClick: this.openModal },
	                    "Open"
	                ),
	                _react2.default.createElement("div", { style: overlay }),
	                _react2.default.createElement(
	                    "div",
	                    { style: modal },
	                    _react2.default.createElement(
	                        _ModalPanel2.default,
	                        { sessionOpen: this.settings.open, settings: this.settings.panelConfig },
	                        this.props.children
	                    )
	                )
	            );
	        }
	    }]);

	    return Modal;
	}(_react2.default.Component);

	exports.default = Modal;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _weavejs = __webpack_require__(3);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _ModalPanelConfig = __webpack_require__(8);

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
	                            "Title"
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=reactweave.js.map
