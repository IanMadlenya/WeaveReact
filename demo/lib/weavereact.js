(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weavereact"] = factory();
	else
		root["weavereact"] = factory();
})(this, function() {
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

	var _TreeConfig = __webpack_require__(1);

	var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

	var _ModalConfig = __webpack_require__(3);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _Tree = __webpack_require__(7);

	var _Tree2 = _interopRequireDefault(_Tree);

	var _Node = __webpack_require__(11);

	var _Node2 = _interopRequireDefault(_Node);

	var _NodeConfig = __webpack_require__(12);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	var _Modal = __webpack_require__(13);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _SplitPane = __webpack_require__(15);

	var _SplitPane2 = _interopRequireDefault(_SplitPane);

	var _SplitPaneConfig = __webpack_require__(16);

	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

	var _App = __webpack_require__(6);

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
	    } else {
	        console.warn("No Tool is registered for " + name);
	    }
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _ModalPanelConfig = __webpack_require__(4);

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
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _BorderConfig = __webpack_require__(5);

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
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _App = __webpack_require__(6);

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
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 6 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _App = __webpack_require__(6);

	var _App2 = _interopRequireDefault(_App);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _Node = __webpack_require__(11);

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
	        key: "render",
	        value: function render() {

	            return React.createElement(_Node2.default, { data: this.props.data, label: this.props.label, nodes: this.props.nodes, treeConfig: this.settings, clickCallback: this.props.clickCallback });
	        }
	    }]);

	    return Tree;
	}(React.Component);

	_App2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
	exports.default = Tree;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _appendVendorPrefix = __webpack_require__(9);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getVendorPropertyName = __webpack_require__(10);

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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _App = __webpack_require__(6);

	var _App2 = _interopRequireDefault(_App);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _NodeConfig = __webpack_require__(12);

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
	            this.setSessionStateFromTree();
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
	                        nodesUI.push(React.createElement(Node, { key: i, data: treeItem, label: this.props.label, nodes: this.props.nodes, treeConfig: this.props.treeConfig, settings: nodeConfig, clickCallback: this.props.clickCallback }));
	                    }
	                }
	            }

	            if (nodes.length > 0) {
	                //folder
	                var nodeIconStyleObject = _Style2.default.appendVendorPrefix(this.props.treeConfig.getNodeIconStyle());
	                var folderIcon = this.props.treeConfig.getFolderIcon(this.props.data, this.settings.open.value);
	                nodeUI = React.createElement(
	                    "span",
	                    null,
	                    React.createElement(
	                        "span",
	                        { onClick: this.toggle },
	                        React.createElement("i", { className: folderIcon, style: nodeIconStyleObject }),
	                        " ",
	                        this.settings.label.value
	                    ),
	                    React.createElement(
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
	                if (fileIcon.indexOf("fa fa-") > -1) nodeUI = React.createElement(
	                    "li",
	                    { style: { color: activeLeafColor }, onClick: this.toggle },
	                    React.createElement("i", { className: fileIcon }),
	                    " ",
	                    leaf
	                );else nodeUI = React.createElement(
	                    "li",
	                    { style: { color: activeLeafColor }, onClick: this.toggle },
	                    React.createElement(
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
	}(React.Component);

	_App2.default.registerToolImplementation("weavereact.NodeConfig", Node);
	exports.default = Node;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _ModalConfig = __webpack_require__(3);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _ModalPanel = __webpack_require__(14);

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
	                modalPanelUI = React.createElement(
	                    _ModalPanel2.default,
	                    { sessionOpen: this.settings.open, settings: this.settings.panelConfig },
	                    this.props.children
	                );
	            }

	            if (!this.props.keyPress) {
	                if (this.settings.buttonIcon.value) {
	                    modalButtonUI = React.createElement(
	                        "span",
	                        { style: { cursor: "pointer" }, onClick: this.openModal },
	                        React.createElement("i", { className: this.settings.buttonIcon.value })
	                    );
	                } else {
	                    modalButtonUI = React.createElement(
	                        "span",
	                        { type: "button", className: "btn btn-primary", onClick: this.openModal },
	                        "Open"
	                    );
	                }
	            }
	            return React.createElement(
	                "span",
	                null,
	                modalButtonUI,
	                React.createElement("div", { style: overlay }),
	                React.createElement(
	                    "div",
	                    { style: modal },
	                    modalPanelUI
	                )
	            );
	        }
	    }]);

	    return Modal;
	}(React.Component);

	exports.default = Modal;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ModalPanelConfig = __webpack_require__(4);

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

	            return React.createElement(
	                "div",
	                { style: layoutStyle },
	                React.createElement(
	                    "div",
	                    { className: "modal-content" },
	                    React.createElement(
	                        "div",
	                        { className: "modal-header" },
	                        React.createElement(
	                            "button",
	                            { type: "button", className: "close", onClick: this.closeModal },
	                            "×"
	                        ),
	                        React.createElement(
	                            "h4",
	                            { className: "modal-title" },
	                            this.settings.title.value
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "modal-body", style: bodyStyle },
	                        this.props.children
	                    )
	                )
	            );
	        }
	    }]);

	    return ModalPanel;
	}(React.Component);

	exports.default = ModalPanel;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _SplitPaneConfig = __webpack_require__(16);

	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

	var _Pane = __webpack_require__(18);

	var _Pane2 = _interopRequireDefault(_Pane);

	var _Resizer = __webpack_require__(19);

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
	                    var node = ReactDOM.findDOMNode(ref);
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

	            return React.createElement(
	                "div",
	                { className: classes.join(' '), style: styleObj, ref: "splitPane" },
	                React.createElement(
	                    _Pane2.default,
	                    { ref: "pane1", key: "pane1", split: split, settings: this.settings.pane1 },
	                    children[0]
	                ),
	                React.createElement(_Resizer2.default, { ref: "resizer", key: "resizer", onMouseDown: this.onMouseDown, split: split }),
	                React.createElement(
	                    _Pane2.default,
	                    { ref: "pane2", key: "pane2", split: split, settings: this.settings.pane2 },
	                    children[1]
	                )
	            );
	        }
	    }]);

	    return SplitPane;
	}(React.Component);

	SplitPane.defaultProps = {
	    minSize: 0,
	    split: "vertical"
	};

	exports.default = SplitPane;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _PaneConfig = __webpack_require__(17);

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
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _PaneConfig = __webpack_require__(17);

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

	            return React.createElement(
	                "div",
	                { className: classes.join(' '), style: styleObj },
	                this.props.children
	            );
	        }
	    }]);

	    return Pane;
	}(React.Component);

	exports.default = Pane;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Style = __webpack_require__(8);

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

	            return React.createElement("span", { style: resizerStyle, onMouseDown: this.onMouseDown });
	        }
	    }]);

	    return Resizer;
	}(React.Component);

	exports.default = Resizer;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=weavereact.js.map
