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

	var _SessionEditorConfig = __webpack_require__(40);

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
	        var titleConfig = brandConfig.children.requestObject('', _index.navbarConfig.Title);
	        titleConfig.title.state = "Brand";
	        /*var listConfig = this.navConfig.children.requestObject('',navbarConfig.List);
	        var linkConfig = listConfig.children.requestObject('',navbarConfig.Link);
	        linkConfig.title.value = " Documentation";
	        linkConfig.iconName.value = "fa fa-folder";*/

	        _this.treeConfig = window.dbweave.root.requestObject('tree', _index.TreeConfig);
	        _this.simpleTreeConfig = window.dbweave.root.requestObject('simpleTree', _index.SimpleTreeConfig);
	        _this.treeConfig.nodePadding.value = "16px";
	        _this.treeConfig.align.value = "right";
	        _this.treeConfig.nodeIcon.value = "fa fa-caret-right";
	        _this.treeConfig.nodeOpenIcon.value = "fa fa-caret-down";
	        _this.treeConfig.leafIcon.value = "fa fa-square-o";
	        _this.treeConfig.leafOpenIcon.value = "fa fa-check-square-o";
	        _this.treeConfig.enableDataTypeIcon.value = false;
	        _this.treeConfig.allowMultipleSelection.value = true;
	        _this.treeConfig.leafStyle.other.state = {
	            borderTop: "1px solid #1e5e9f",
	            paddingTop: "8px",
	            paddingBottom: "8px"
	        };

	        _this.treeConfig.rootStyle.other.state = {
	            textTransform: "uppercase",
	            color: "#e57a38"
	        };

	        _this.treeConfig.nodeStyle.other.state = {
	            paddingTop: "8px",
	            paddingBottom: "8px"
	        };
	        _this.treeConfig.setDefaultNodeSelection(['Al Joaf', 'Tabuk 1']);
	        _this.treeConfig.rootNode.open.state = true;

	        _this.tree = {
	            "label": "Locations",
	            "children": [{
	                "label": "Saudi Kingdom",
	                "children": []
	            }, {
	                "label": "Al Joaf",
	                "children": [],
	                "icon": "fa fa-heartbeat"
	            }, {
	                "label": "Tabuk",
	                "children": [{
	                    "label": "Tabuk 1"
	                }, {
	                    "label": "Tabuk 2"
	                }, {
	                    "label": "Tabuk 3"
	                }]
	            }]
	        };
	        //this.loadJSON = this.loadJSON.bind(this);
	        /*this.loadJSON(function(response){
	            this.tree = JSON.parse(response);
	            console.log(this.tree);
	            this.forceUpdate();
	        }.bind(this))*/

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
	        key: "treeClick",
	        value: function treeClick(node, open, active) {
	            console.log(node, open, active);
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {}
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
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { style: { color: "red" } },
	                        "Hi I am Sanjay"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: { marginTop: "60px" } },
	                    _react2.default.createElement(
	                        "div",
	                        { style: { width: "240px", color: "white", border: "1px solid grey", background: "linear-gradient(to right, #036FBB , #013458)" } },
	                        _react2.default.createElement(_index.Tree, { data: this.tree, settings: this.treeConfig, label: "label", nodes: "children", icon: "icon" }),
	                        _react2.default.createElement(_index.SimpleTree, { data: this.tree, settings: this.simpleTreeConfig, label: "label", children: "children", click: this.treeClick })
	                    )
	                )
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;

	/**/
	//# sourceMappingURL=data:application/json;base64,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O3lCQUZKO3FCQUxKO29CQVNJOzswQkFBSyxPQUFPLEVBQUMsT0FBTSxLQUFOLEVBQVIsRUFBTDs7cUJBVEo7aUJBRko7Z0JBZUE7O3NCQUFLLE9BQU8sRUFBQyxXQUFVLE1BQVYsRUFBUixFQUFMO29CQUNROzswQkFBSyxPQUFPLEVBQUMsT0FBTSxPQUFOLEVBQWMsT0FBTSxPQUFOLEVBQWUsUUFBTyxnQkFBUCxFQUF3QixZQUFXLDhDQUFYLEVBQTdELEVBQUw7d0JBQ0ksNkNBQU0sTUFBTSxLQUFLLElBQUwsRUFBVyxVQUFVLEtBQUssVUFBTCxFQUFpQixPQUFNLE9BQU4sRUFBYyxPQUFNLFVBQU4sRUFBaUIsTUFBSyxNQUFMLEVBQWpGLENBREo7d0JBRUksbURBQVksTUFBTSxLQUFLLElBQUwsRUFBVyxVQUFVLEtBQUssZ0JBQUwsRUFBdUIsT0FBTSxPQUFOLEVBQWMsVUFBUyxVQUFULEVBQW9CLE9BQU8sS0FBSyxTQUFMLEVBQXZHLENBRko7cUJBRFI7aUJBZkE7YUFBUixDQUZLOzs7O1dBNUlQO0VBQVksZ0JBQU0sU0FBTjs7a0JBMktIIiwiZmlsZSI6IkFwcC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVSZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZXNzaW9uRWRpdG9yIGZyb20gXCIuL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yXCI7XG5pbXBvcnQgU2Vzc2lvbkVkaXRvckNvbmZpZyBmcm9tIFwiLi9zZXNzaW9uU3RhdGVFZGl0b3IvU2Vzc2lvbkVkaXRvckNvbmZpZ1wiO1xuaW1wb3J0IHtOYXZiYXJ9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7bmF2YmFyQ29uZmlnfSBmcm9tIFwiLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQge1RyZWV9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7VHJlZUNvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9pbmRleC5qc1wiO1xuXG5pbXBvcnQge1NpbXBsZVRyZWV9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7U2ltcGxlVHJlZUNvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9pbmRleC5qc1wiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB3aW5kb3cud2VhdmUgPSBuZXcgV2VhdmUoKTtcbiAgICAgICAgd2luZG93LmRid2VhdmUgPSBuZXcgV2VhdmUoKTtcbiAgICAgICAgdGhpcy5vcGVuU2V0dGluZ3MgPSB0aGlzLm9wZW5TZXR0aW5ncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlc3Npb25Db25maWdEYXNoZG9hcmQgPSBuZXcgU2Vzc2lvbkVkaXRvckNvbmZpZygpO1xuICAgICAgICB0aGlzLnNlc3Npb25Db25maWdXZWF2ZSA9IG5ldyBTZXNzaW9uRWRpdG9yQ29uZmlnKCk7XG4gICAgICAgIHRoaXMubmF2Q29uZmlnID0gd2luZG93LmRid2VhdmUucm9vdC5yZXF1ZXN0T2JqZWN0KCduYXZiYXInLG5hdmJhckNvbmZpZy5OYXZiYXIpO1xuICAgICAgICAvL3RoaXMubmF2Q29uZmlnLmJyYW5kLmxvZ29QYXRoLnZhbHVlID0gXCIuL2xvZ28ucG5nXCI7XG4gICAgICAgIC8vdGhpcy5uYXZDb25maWcuYnJhbmQudGl0bGUudmFsdWUgPSBcIkJyYW5kXCI7XG5cbiAgICAgICAgdmFyIGJyYW5kQ29uZmlnID0gdGhpcy5uYXZDb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJyxuYXZiYXJDb25maWcuQnJhbmQpO1xuICAgICAgICB2YXIgbG9nb0NvbmZpZyA9IGJyYW5kQ29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsbmF2YmFyQ29uZmlnLkxvZ28pO1xuICAgICAgICBsb2dvQ29uZmlnLnNyYy5zdGF0ZSA9IFwibG9nby5wbmdcIjtcbiAgICAgICAgdmFyIHRpdGxlQ29uZmlnID0gYnJhbmRDb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJyxuYXZiYXJDb25maWcuVGl0bGUpO1xuICAgICAgICB0aXRsZUNvbmZpZy50aXRsZS5zdGF0ZSA9IFwiQnJhbmRcIjtcbiAgICAgICAgLyp2YXIgbGlzdENvbmZpZyA9IHRoaXMubmF2Q29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsbmF2YmFyQ29uZmlnLkxpc3QpO1xuICAgICAgICB2YXIgbGlua0NvbmZpZyA9IGxpc3RDb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJyxuYXZiYXJDb25maWcuTGluayk7XG4gICAgICAgIGxpbmtDb25maWcudGl0bGUudmFsdWUgPSBcIiBEb2N1bWVudGF0aW9uXCI7XG4gICAgICAgIGxpbmtDb25maWcuaWNvbk5hbWUudmFsdWUgPSBcImZhIGZhLWZvbGRlclwiOyovXG5cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnID0gd2luZG93LmRid2VhdmUucm9vdC5yZXF1ZXN0T2JqZWN0KCd0cmVlJyxUcmVlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zaW1wbGVUcmVlQ29uZmlnID0gd2luZG93LmRid2VhdmUucm9vdC5yZXF1ZXN0T2JqZWN0KCdzaW1wbGVUcmVlJyxTaW1wbGVUcmVlQ29uZmlnKTtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnZhbHVlID1cIjE2cHhcIjtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmFsaWduLnZhbHVlID0gXCJyaWdodFwiO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcubm9kZUljb24udmFsdWUgPSBcImZhIGZhLWNhcmV0LXJpZ2h0XCI7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5ub2RlT3Blbkljb24udmFsdWUgPSBcImZhIGZhLWNhcmV0LWRvd25cIjtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmxlYWZJY29uLnZhbHVlID0gXCJmYSBmYS1zcXVhcmUtb1wiO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcubGVhZk9wZW5JY29uLnZhbHVlID0gXCJmYSBmYS1jaGVjay1zcXVhcmUtb1wiO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcuZW5hYmxlRGF0YVR5cGVJY29uLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5hbGxvd011bHRpcGxlU2VsZWN0aW9uLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmxlYWZTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJvcmRlclRvcDpcIjFweCBzb2xpZCAjMWU1ZTlmXCIsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjhweFwiLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTpcIjhweFwiXG4gICAgICAgIH1cblxuXG5cblxuICAgICAgICB0aGlzLnRyZWVDb25maWcucm9vdFN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgICAgIGNvbG9yOlwiI2U1N2EzOFwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyZWVDb25maWcubm9kZVN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI4cHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206XCI4cHhcIlxuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5zZXREZWZhdWx0Tm9kZVNlbGVjdGlvbihbJ0FsIEpvYWYnLCdUYWJ1ayAxJ10pXG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5yb290Tm9kZS5vcGVuLnN0YXRlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRyZWU9e1xuICAgICAgICAgIFwibGFiZWxcIjogXCJMb2NhdGlvbnNcIixcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlNhdWRpIEtpbmdkb21cIixcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFsIEpvYWZcIixcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgICAgICAgICBcImljb25cIjpcImZhIGZhLWhlYXJ0YmVhdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiVGFidWtcIixcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRhYnVrIDFcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRhYnVrIDJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRhYnVrIDNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgXVxuICAgICAgICB9O1xuICAgICAgICAvL3RoaXMubG9hZEpTT04gPSB0aGlzLmxvYWRKU09OLmJpbmQodGhpcyk7XG4gICAgICAgIC8qdGhpcy5sb2FkSlNPTihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICB0aGlzLnRyZWUgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJlZSk7XG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSkqL1xuXG5cblxuICAgIH1cblxuXG5cbiAgICAgbG9hZEpTT04oY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgeG9iaiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4b2JqLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICB4b2JqLm9wZW4oJ0dFVCcsICcuL3Rlc3QuanNvbicsIHRydWUpO1xuICAgICAgICB4b2JqLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4b2JqLnJlYWR5U3RhdGUgPT0gNCAmJiB4b2JqLnN0YXR1cyA9PSBcIjIwMFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVxdWlyZWQgdXNlIG9mIGFuIGFub255bW91cyBjYWxsYmFjayBhcyAub3BlbiB3aWxsIE5PVCByZXR1cm4gYSB2YWx1ZSBidXQgc2ltcGx5IHJldHVybnMgdW5kZWZpbmVkIGluIGFzeW5jaHJvbm91cyBtb2RlXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soeG9iai5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4b2JqLnNlbmQobnVsbCk7XG4gICAgfVxuXG4gICBvcGVuU2V0dGluZ3MoZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIgJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICBpZih0aGlzLnNlc3Npb25Db25maWdXZWF2ZS5tb2RhbENvbmZpZy5vcGVuLnZhbHVlKSAgdGhpcy5zZXNzaW9uQ29uZmlnV2VhdmUubW9kYWxDb25maWcub3Blbi52YWx1ZT0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlc3Npb25Db25maWdEYXNoZG9hcmQubW9kYWxDb25maWcub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBvcFVwU2Vzc2lvbkVkaXRvciggdGhpcy5zZXNzaW9uQ29uZmlnRGFzaGRvYXJkLCB3aW5kb3cuZGJ3ZWF2ZSwgXCJTZXNzaW9uIFN0YXRlIEVkaXRvciAoV2VhdmUgRGFzaGJvYXJkKVwiLHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub3BlblNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5Nb3VudCgpe1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub3BlblNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBwb3BVcFNlc3Npb25FZGl0b3IoY29uZmlnLHdlYXZlSW5zdGFuY2UsdGl0bGUsaXNEYikge1xuICAgICAgICBSZWFjdERPTS5yZW5kZXIoIDxTZXNzaW9uRWRpdG9yIGlzRGFzaGJvYXJkPXtpc0RifSB3ZWF2ZT17d2VhdmVJbnN0YW5jZX0ga2V5UHJlc3MgPSBcInRydWVcIiB0aXRsZT17dGl0bGV9IHNldHRpbmdzID0ge2NvbmZpZ30vPixkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcFVwXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICB0cmVlQ2xpY2sobm9kZSwgb3BlbiAsIGFjdGl2ZSl7XG4gICAgICAgICAgY29uc29sZS5sb2cobm9kZSwgb3BlbiwgYWN0aXZlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBzZXR0aW5ncz17dGhpcy5uYXZDb25maWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5MaXN0IGtleT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkxpbmsga2V5PVwibGluazFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5MaW5rIGtleT1cImxpbmsyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuRm9ybSBrZXk9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb3JtMVwiPkZvcm0xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJkaVwiPkZvcm0yPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Gb3JtID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjpcInJlZFwifX0+SGkgSSBhbSBTYW5qYXk8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCI2MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjI0MHB4XCIsY29sb3I6XCJ3aGl0ZVwiLCBib3JkZXI6XCIxcHggc29saWQgZ3JleVwiLGJhY2tncm91bmQ6XCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMzZGQkIgLCAjMDEzNDU4KVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWUgZGF0YT17dGhpcy50cmVlfSBzZXR0aW5ncz17dGhpcy50cmVlQ29uZmlnfSBsYWJlbD1cImxhYmVsXCIgbm9kZXM9XCJjaGlsZHJlblwiIGljb249XCJpY29uXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaW1wbGVUcmVlIGRhdGE9e3RoaXMudHJlZX0gc2V0dGluZ3M9e3RoaXMuc2ltcGxlVHJlZUNvbmZpZ30gbGFiZWw9XCJsYWJlbFwiIGNoaWxkcmVuPVwiY2hpbGRyZW5cIiBjbGljaz17dGhpcy50cmVlQ2xpY2t9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vKiovXG4iXX0=

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

	var _SessionEditorConfig = __webpack_require__(40);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _TreeSection = __webpack_require__(41);

	var _TreeSection2 = _interopRequireDefault(_TreeSection);

	var _NodeView = __webpack_require__(42);

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

	var _TreeConfig = __webpack_require__(17);

	var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

	var _SimpleTreeConfig = __webpack_require__(18);

	var _SimpleTreeConfig2 = _interopRequireDefault(_SimpleTreeConfig);

	var _SimpleTree = __webpack_require__(19);

	var _SimpleTree2 = _interopRequireDefault(_SimpleTree);

	var _Modal = __webpack_require__(21);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _ModalConfig = __webpack_require__(22);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _SplitPane = __webpack_require__(25);

	var _SplitPane2 = _interopRequireDefault(_SplitPane);

	var _SplitPaneConfig = __webpack_require__(26);

	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

	var _Navbar = __webpack_require__(30);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Config = __webpack_require__(38);

	var _Config2 = _interopRequireDefault(_Config);

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	var _CSS = __webpack_require__(39);

	var _CSS2 = _interopRequireDefault(_CSS);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _PropsManager = __webpack_require__(16);

	var _PropsManager2 = _interopRequireDefault(_PropsManager);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.Tree = _Tree2.default;
	exports.TreeConfig = _TreeConfig2.default;

	exports.SimpleTree = _SimpleTree2.default;
	exports.SimpleTreeConfig = _SimpleTreeConfig2.default;

	exports.Modal = _Modal2.default;
	exports.ModalConfig = _ModalConfig2.default;

	exports.SplitPane = _SplitPane2.default;
	exports.SplitPaneConfig = _SplitPaneConfig2.default;

	exports.Navbar = _Navbar2.default;
	exports.navbarConfig = _Config2.default;

	exports.InlineStyle = _InlineStyle2.default;
	exports.CSS = _CSS2.default;

	exports.PropsManager = _PropsManager2.default;

	exports.Style = _App2.default;

	exports.registerToolImplementation = function (asClassName, jsClass) {
	    _App2.default.registerToolImplementation(asClassName, jsClass);
	};

	exports.getToolImplementation = function (name) {
	    if (_App2.default.getToolImplementation(name)) {
	        return _App2.default.getToolImplementation(name);
	    }
	};

	exports.setDebug = function (val) {
	    _App2.default.debug = val;
	};

	exports.registerToolConfig = function (toolClass, configClass) {
	    _App2.default.registerToolConfig(toolClass, configClass);
	};

	exports.getToolConfig = function (toolClass) {
	    return _App2.default.getToolConfig(toolClass);
	};

	exports.hookSessionStateForComponentChildren = function (ReactChildren, ownerConfig) {
	    return _App2.default.hookSessionStateForComponentChildren(ReactChildren, ownerConfig);
	};

	exports.componentWillReceiveProps = function (reactComp, nextProps) {
	    _App2.default.componentWillReceiveProps(reactComp, nextProps);
	};

	exports.renderChildren = function (reactComp, propsManager) {
	    return _App2.default.renderChildren(reactComp, propsManager);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTs7QUFFUixRQUFBLEFBQVE7QUFDUixRQUFBLEFBQVE7O0FBRVIsUUFBQSxBQUFRO0FBQ1IsUUFBQSxBQUFROztBQUVSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTs7QUFFUixRQUFBLEFBQVE7QUFDUixRQUFBLEFBQVE7O0FBRVIsUUFBQSxBQUFRO0FBQ1IsUUFBQSxBQUFROztBQUVSLFFBQUEsQUFBUTs7QUFFUixRQUFBLEFBQVE7O0FBSVIsUUFBQSxBQUFRLHVDQUE2QixBQUFVLGFBQVYsQUFBdUI7a0JBQ3hELEFBQUksMkJBQUosQUFBK0IsYUFERSxBQUFnQyxBQUNqRSxBQUE0QyxTQURxQixBQUNqRTtDQURpQzs7QUFJckMsUUFBQSxBQUFRLGtDQUF3QixBQUFVLE1BQU0sQUFDNUM7UUFBSSxjQUFBLEFBQUksc0JBQVIsQUFBSSxBQUEwQixPQUFPLEFBQ2pDO2VBQU8sY0FBQSxBQUFJLHNCQUZhLEFBQzVCLEFBQXFDLEFBQ2pDLEFBQU8sQUFBMEI7O0NBRlQ7O0FBTWhDLFFBQUEsQUFBUSxxQkFBVyxBQUFTO2tCQUN4QixBQUFJLFFBRFcsQUFBYSxBQUM1QixBQUFZLElBRGdCLEFBQzVCO0NBRGU7O0FBSW5CLFFBQUEsQUFBUSwrQkFBcUIsQUFBVSxXQUFWLEFBQXFCO2tCQUM5QyxBQUFJLG1CQUFKLEFBQXVCLFdBREUsQUFBa0MsQUFDM0QsQUFBa0MsYUFEeUIsQUFDM0Q7Q0FEeUI7O0FBSTdCLFFBQUEsQUFBUSwwQkFBZ0IsQUFBVSxXQUFXLEFBQ3pDO1dBQU8sY0FBQSxBQUFJLGNBRFMsQUFBcUIsQUFDekMsQUFBTyxBQUFrQjtDQURMOztBQUl4QixRQUFBLEFBQVEsaURBQXVDLEFBQVUsZUFBVixBQUF3QixhQUFjLEFBQ2pGO1dBQU8sY0FBQSxBQUFJLHFDQUFKLEFBQXlDLGVBREwsQUFBc0MsQUFDakYsQUFBTyxBQUF1RDtDQURuQjs7QUFJL0MsUUFBQSxBQUFRLHNDQUE0QixBQUFTLFdBQVQsQUFBbUI7a0JBQ25ELEFBQUksMEJBQUosQUFBOEIsV0FERSxBQUE2QixBQUM3RCxBQUF3QyxXQURxQixBQUM3RDtDQURnQzs7QUFJcEMsUUFBQSxBQUFRLDJCQUFpQixBQUFVLFdBQVYsQUFBb0IsY0FBZSxBQUN4RDtXQUFPLGNBQUEsQUFBSSxlQUFKLEFBQW1CLFdBREwsQUFBbUMsQUFDeEQsQUFBTyxBQUE2QjtDQURmIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyZWUgZnJvbSBcIi4vY29tcG9uZW50cy90cmVlL1RyZWVcIjtcbmltcG9ydCBUcmVlQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9UcmVlQ29uZmlnXCI7XG5cbmltcG9ydCBTaW1wbGVUcmVlQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvc2ltcGxlVHJlZS9TaW1wbGVUcmVlQ29uZmlnXCI7XG5pbXBvcnQgU2ltcGxlVHJlZSBmcm9tIFwiLi9jb21wb25lbnRzL3NpbXBsZVRyZWUvU2ltcGxlVHJlZVwiO1xuXG5cbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsL01vZGFsXCI7XG5pbXBvcnQgTW9kYWxDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbENvbmZpZ1wiO1xuXG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gXCIuL2NvbXBvbmVudHMvc3BsaXRQYW5lL1NwbGl0UGFuZVwiO1xuaW1wb3J0IFNwbGl0UGFuZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3NwbGl0UGFuZS9TcGxpdFBhbmVDb25maWdcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXJcIjtcbmltcG9ydCBuYXZiYXJDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXIvQ29uZmlnXCI7XG5cbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ1NTIGZyb20gXCIuL2NvbmZpZ3MvQ1NTXCI7XG5cblxuaW1wb3J0IEFwcCBmcm9tIFwiLi91dGlscy9BcHBcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi91dGlscy9BcHBcIjtcbmltcG9ydCBQcm9wc01hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9wc01hbmFnZXJcIjtcblxuXG5leHBvcnRzLlRyZWUgPSBUcmVlO1xuZXhwb3J0cy5UcmVlQ29uZmlnID0gVHJlZUNvbmZpZztcblxuZXhwb3J0cy5TaW1wbGVUcmVlID0gU2ltcGxlVHJlZTtcbmV4cG9ydHMuU2ltcGxlVHJlZUNvbmZpZyA9IFNpbXBsZVRyZWVDb25maWc7XG5cbmV4cG9ydHMuTW9kYWwgPSBNb2RhbDtcbmV4cG9ydHMuTW9kYWxDb25maWcgPSBNb2RhbENvbmZpZztcblxuZXhwb3J0cy5TcGxpdFBhbmUgPSBTcGxpdFBhbmU7XG5leHBvcnRzLlNwbGl0UGFuZUNvbmZpZyA9IFNwbGl0UGFuZUNvbmZpZztcblxuZXhwb3J0cy5OYXZiYXIgPSBOYXZiYXI7XG5leHBvcnRzLm5hdmJhckNvbmZpZyA9IG5hdmJhckNvbmZpZztcblxuZXhwb3J0cy5JbmxpbmVTdHlsZSA9IElubGluZVN0eWxlO1xuZXhwb3J0cy5DU1MgPSBDU1M7XG5cbmV4cG9ydHMuUHJvcHNNYW5hZ2VyID0gUHJvcHNNYW5hZ2VyO1xuXG5leHBvcnRzLlN0eWxlID0gU3R5bGU7XG5cblxuXG5leHBvcnRzLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uID0gZnVuY3Rpb24gKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKSB7XG4gICAgQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKTtcbn1cblxuZXhwb3J0cy5nZXRUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKG5hbWUpO1xuICAgIH1cbn1cblxuZXhwb3J0cy5zZXREZWJ1ZyA9IGZ1bmN0aW9uKHZhbCl7XG4gICAgQXBwLmRlYnVnID0gdmFsO1xufVxuXG5leHBvcnRzLnJlZ2lzdGVyVG9vbENvbmZpZyA9IGZ1bmN0aW9uICh0b29sQ2xhc3MsIGNvbmZpZ0NsYXNzKSB7XG4gICAgQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyh0b29sQ2xhc3MsIGNvbmZpZ0NsYXNzKTtcbn1cblxuZXhwb3J0cy5nZXRUb29sQ29uZmlnID0gZnVuY3Rpb24gKHRvb2xDbGFzcykge1xuICAgIHJldHVybiBBcHAuZ2V0VG9vbENvbmZpZyh0b29sQ2xhc3MpO1xufVxuXG5leHBvcnRzLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uIChSZWFjdENoaWxkcmVuLG93bmVyQ29uZmlnKSAge1xuICAgIHJldHVybiBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKFJlYWN0Q2hpbGRyZW4sb3duZXJDb25maWcpO1xufVxuXG5leHBvcnRzLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbihyZWFjdENvbXAsbmV4dFByb3BzKXtcbiAgICBBcHAuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhyZWFjdENvbXAsbmV4dFByb3BzKTtcbn1cblxuZXhwb3J0cy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChyZWFjdENvbXAscHJvcHNNYW5hZ2VyKSAge1xuICAgIHJldHVybiBBcHAucmVuZGVyQ2hpbGRyZW4ocmVhY3RDb21wLHByb3BzTWFuYWdlcik7XG59XG4iXX0=

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

	var _Style = __webpack_require__(8);

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
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        return _this;
	    }

	    _createClass(Tree, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.settings.align.addGroupedCallback(this, this.forceUpdate);
	            this.settings.nodePadding.addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.rootStyle).addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.branchStyle).addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.nodeStyle).addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.leafStyle).addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.selectedLeafStyle).addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.activeLeafStyle).addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.align.removeCallback(this, this.forceUpdate);
	            this.settings.nodePadding.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.rootStyle).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.branchStyle).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.nodeStyle).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.leafStyle).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.selectedLeafStyle).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.activeLeafStyle).removeCallback(this, this.forceUpdate);
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
	                this.addCallbacks();
	                this.settings = nextProps.settings;
	                this.removeCallbacks();

	                this.settings.dataTypesMap = nextProps.dataTypesMap;
	                this.settings.getDataType = nextProps.getDataType;
	            }
	            if (this.props.data !== nextProps.data) {
	                if (_App2.default.debug) console.log("Data Changed");
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var rootNodeStyle = this.settings.rootStyle.getStyleFor(null, true);
	            return _react2.default.createElement(_Node2.default, { style: rootNodeStyle, data: this.props.data, label: this.props.label, nodes: this.props.nodes, icon: this.props.icon,
	                settings: this.settings.rootNode,
	                treeConfig: this.settings,
	                clickCallback: this.props.clickCallback });
	        }
	    }]);

	    return Tree;
	}(_react2.default.Component);

	_App2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
	exports.default = Tree;
	//# sourceMappingURL=data:application/json;base64,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QU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNuSDswQkFBVSxLQUFBLEFBQUssU0FBTCxBQUFjLEFBQ3hCOzRCQUFZLEtBQUEsQUFBSyxBQUNqQjsrQkFBZSxLQUFBLEFBQUssTUFMbkIsQUFFYixBQUFTLEFBR2tCLEFBQVc7Ozs7V0FqRWhDO0VBQWEsZ0JBQUEsQUFBTTs7QUF1RXpCLGNBQUEsQUFBSSwyQkFBSixBQUErQix5QkFBL0IsQUFBdUQ7a0JBQ3hDIiwiZmlsZSI6IlRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5cbmNsYXNzIFRyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFRyZWVDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXAgPSB0aGlzLnByb3BzLmRhdGFUeXBlc01hcDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5nZXREYXRhVHlwZSA9IHRoaXMucHJvcHMuZ2V0RGF0YVR5cGU7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hbGlnbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mubm9kZVBhZGRpbmcuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5yb290U3R5bGUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MuYnJhbmNoU3R5bGUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Mubm9kZVN0eWxlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmxlYWZTdHlsZSkuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zZWxlY3RlZExlYWZTdHlsZSkuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5hY3RpdmVMZWFmU3R5bGUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hbGlnbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5ub2RlUGFkZGluZy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnJvb3RTdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5icmFuY2hTdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5ub2RlU3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MubGVhZlN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnNlbGVjdGVkTGVhZlN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmFjdGl2ZUxlYWZTdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXAgPSBuZXh0UHJvcHMuZGF0YVR5cGVzTWFwO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5nZXREYXRhVHlwZSA9IG5leHRQcm9wcy5nZXREYXRhVHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkRhdGEgQ2hhbmdlZFwiKVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgcm9vdE5vZGVTdHlsZSA9IHRoaXMuc2V0dGluZ3Mucm9vdFN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG5yZXR1cm4gKCA8Tm9kZSBzdHlsZT17cm9vdE5vZGVTdHlsZX0gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH0gbm9kZXM9e3RoaXMucHJvcHMubm9kZXN9IGljb249e3RoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICAgIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnJvb3ROb2RlfVxuICAgICAgICAgICAgdHJlZUNvbmZpZz17dGhpcy5zZXR0aW5nc31cbiAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30vPlxuICAgICAgICk7XG4gICAgfVxuXG59XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuVHJlZUNvbmZpZ1wiLFRyZWUpO1xuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiJdfQ==

/***/ },
/* 7 */
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

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _HTMLWrapperConfig = __webpack_require__(12);

	var _HTMLWrapperConfig2 = _interopRequireDefault(_HTMLWrapperConfig);

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

	var App = function () {
	    function App() {
	        _classCallCheck(this, App);
	    }

	    _createClass(App, null, [{
	        key: "registerToolImplementation",
	        value: function registerToolImplementation(asClassName, jsClass) {
	            if (!App.toolRegistry[asClassName]) App.toolRegistry[asClassName] = jsClass;
	        }
	    }, {
	        key: "getToolImplementation",
	        value: function getToolImplementation(asClassName) {
	            return App.toolRegistry[asClassName];
	        }
	    }, {
	        key: "registerToolConfig",
	        value: function registerToolConfig(tool, config) {
	            if (!App.toolConfigMap.has(tool)) App.toolConfigMap.set(tool, config);
	        }
	    }, {
	        key: "getToolConfig",
	        value: function getToolConfig(tool) {
	            return App.toolConfigMap.get(tool);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(reactComp, nextProps) {
	            if (reactComp.props.settings !== nextProps.settings) {
	                if (nextProps.settings) {
	                    App.removeForceUpdateFromCallbacks(reactComp);
	                    reactComp.settings = nextProps.settings;
	                    App.addForceUpdateToCallbacks(reactComp);
	                }
	            }
	            if (reactComp.props.style !== nextProps.style) {
	                // user style added through UI is Sessioned
	                if (nextProps.style) reactComp.settings.style.domDefined.state = nextProps.style;
	            }
	            if (reactComp.props.children !== nextProps.children) {
	                var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
	                App.hookSessionStateForComponentChildren(nextProps.children, reactComp.settings, WrapperConfigClass);
	            }
	        }
	    }, {
	        key: "addForceUpdateToCallbacks",
	        value: function addForceUpdateToCallbacks(reactComp) {
	            var config = reactComp.settings;
	            if (!Weave.isLinkable(config)) console.error(config, " is not a LinkableObject");
	            var propertyNames = Object.getOwnPropertyNames(config);
	            for (var i = 0; i < propertyNames.length; i++) {
	                var pn = propertyNames[i];
	                var obj = config[pn];
	                if (Weave.isLinkable(obj)) {
	                    if (obj instanceof weavejs.core.LinkableHashMap) obj = obj.childListCallbacks;
	                    Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
	                }
	            }
	        }
	    }, {
	        key: "removeForceUpdateFromCallbacks",
	        value: function removeForceUpdateFromCallbacks(reactComp) {
	            var config = reactComp.settings;
	            if (!Weave.isLinkable(config)) console.error(config, " is not a LinkableObject");
	            var propertyNames = Object.getOwnPropertyNames(config);
	            for (var i = 0; i < propertyNames.length; i++) {
	                var pn = propertyNames[i];
	                var obj = config[pn];
	                if (Weave.isLinkable(obj)) {
	                    if (obj instanceof weavejs.core.LinkableHashMap) obj = obj.childListCallbacks;
	                    Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
	                }
	            }
	        }

	        //For testing  and debug

	    }, {
	        key: "isSessionChangedFor",
	        value: function isSessionChangedFor(config) {
	            if (!Weave.isLinkable(config)) console.error(config, " is not a LinkableObject");
	            var propertyNames = Object.getOwnPropertyNames(config);
	            var linkbleObject = null;
	            var moreLinkableObjects = [];
	            for (var i = 0; i < propertyNames.length; i++) {
	                var pn = propertyNames[i];
	                var obj = config[pn];
	                if (Weave.isLinkable(obj)) {
	                    var lo = obj instanceof weavejs.core.LinkableHashMap ? obj.childListCallbacks : obj;
	                    if (!linkbleObject) linkbleObject = lo;else moreLinkableObjects.push(lo);
	                }
	            }

	            if (App.debug) {
	                var isChanged = false;
	                if (moreLinkableObjects.length > 0) {

	                    for (var i = 0; i < moreLinkableObjects.length; i++) {
	                        isChanged = Weave.detectChange(config, moreLinkableObjects[i]);
	                        if (isChanged) {
	                            console.log(moreLinkableObjects[i], " changed");
	                        }
	                    }
	                } else if (linkbleObject) {
	                    isChanged = Weave.detectChange(config, linkbleObject);
	                    if (isChanged) {
	                        console.log(linkbleObject, " changed");
	                    }
	                } else {
	                    console.log(config, " no session Children");
	                }
	            }

	            if (moreLinkableObjects.length > 0) return Weave.detectChange(config, linkbleObject, moreLinkableObjects);else if (linkbleObject) return Weave.detectChange(config, linkbleObject);else return false;
	        }
	    }, {
	        key: "hookSessionStateForComponentChildren",
	        value: function hookSessionStateForComponentChildren(children, config, WrapperConfigClass) {
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
	                        var configClass = WrapperConfigClass ? WrapperConfigClass : _HTMLWrapperConfig2.default;
	                        childConfig = config.children.requestObject('', configClass);
	                    }
	                } else {
	                    // for React Composite Elements
	                    var configClass = App.getToolConfig(child.type);
	                    if (!childConfig && configClass) {
	                        childConfig = config.children.requestObject('', configClass);
	                    }
	                }
	                if (child.props.style) childConfig.style.domDefined.state = child.props.style;
	                if (child.props.className) childConfig.CSS.className.state = child.props.className;
	                config.childConfigMap.set(child, childConfig);
	                config.configChildMap.set(childConfig, child);
	            });

	            if (config["addGapAt"]) {
	                config.children.requestObject('gapDiv', _HTMLWrapperConfig2.default);
	            }
	            config.children.resumeCallbacks();
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren(reactComp, propsManager) {
	            var childConfigs = reactComp.settings.children.getObjects();

	            var clonedChildren = childConfigs.map(function (childConfig, index) {
	                var child = reactComp.settings.configChildMap.get(childConfig);
	                var configName = reactComp.settings.children.getName(childConfig);
	                var props = {};

	                props["settings"] = childConfig;
	                if (child) {
	                    //if(child.props && !child.props.settings)

	                    App.mergeInto(props, child.props);
	                }

	                if (propsManager) {
	                    var odd = propsManager.odd;
	                    if (odd.children.length > 0) {
	                        var oddChildrenIndex = odd.children.indexOf(configName);
	                        if (oddChildrenIndex > -1) {
	                            App.mergeInto(props, odd.values[oddChildrenIndex]);
	                        } else if (propsManager["defaultValues"]) {
	                            App.mergeInto(props, propsManager["defaultValues"]);
	                        }
	                    }

	                    if (propsManager.all.properties.length > 0) {
	                        propsManager.all.properties.map(function (propName, i) {
	                            var value = propsManager.all.values[i];
	                            props[propName] = value ? value[index] : configName;
	                        });
	                    }

	                    if (propsManager.new) {
	                        App.mergeInto(props, propsManager.new);
	                    }

	                    if (propsManager.style) {
	                        props.style = props.style || {};
	                        App.mergeInto(props.style, propsManager.style);
	                    }
	                }

	                if (child) {
	                    if (typeof child.type === "string") {
	                        props["key"] = configName;
	                        var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
	                        var ToolClass = App.getToolImplementation(configClass);
	                        return _react2.default.createElement(ToolClass, props, child);
	                    } else {
	                        props = App.mergeInto(props, propsManager.new);
	                        if (reactComp.settings.childConfigMap.has(child)) reactComp.settings.childConfigMap.delete(child);
	                        var clonedChild = _react2.default.cloneElement(child, props);
	                        reactComp.settings.configChildMap.set(childConfig, clonedChild);
	                        reactComp.settings.childConfigMap.set(clonedChild, childConfig);
	                        return clonedChild;
	                    }
	                } else {
	                    props["key"] = configName;
	                    if (configName === "gapDiv") {
	                        var orderValue = String(reactComp.settings.addGapAt.state);
	                        if (!isNaN(orderValue)) {
	                            props["style"] = {
	                                flex: "1",
	                                order: orderValue
	                            };
	                        }
	                    }
	                    //to-do need to replace with flexinfo file or tiher mean, create a utility function
	                    //this solution will fail when config not part of session tree
	                    var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
	                    var ToolClass = App.getToolImplementation(configClass);
	                    var newChild = _react2.default.createElement(ToolClass, props);
	                    return newChild;
	                }
	            }.bind(this));

	            return clonedChildren;
	        }
	    }, {
	        key: "mergeInto",
	        value: function mergeInto(into, obj, ignoreProps) {
	            for (var attr in obj) {
	                into[attr] = obj[attr];
	            }
	            return into;
	        }
	    }]);

	    return App;
	}();

	App.toolRegistry = {};
	App.toolConfigMap = new Map();
	App.debug = false;

	exports.default = App;
	//# sourceMappingURL=data:application/json;base64,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MEIsQUFDM0M7d0JBQUksV0FBVyw4QkFBQSxBQUFDLFdBZmQsQUFlRSxBQUFXLEFBQWUsQUFDOUI7MkJBeEU4QixBQXlDbEMsQUFlTSxBQWdCRixBQUFPOzthQXhFdUIsQ0FBQSxBQTJFcEMsS0E5RXVDLEFBR3JDLEFBQWlCLEFBQWlCLEFBMkUvQixBQUVQLEtBN0VxQixFQUhvQixBQUN6Qzs7bUJBRHlDLEFBZ0Z6QyxBQUFPOzs7O2tDQUdNLE1BQU0sS0FBSTtpQkFDbEIsSUFBQSxBQUFJLFFBQVQsQUFBaUIsS0FBSyxBQUNsQjtxQkFBQSxBQUFLLFFBQVEsSUFEakIsQUFBc0IsQUFDbEIsQUFBYSxBQUFJLEFBRXJCOzttQkFKb0MsQUFJcEMsQUFBTyxLQUo2QixBQUNwQzs7UUE1UEo7O1dBREU7R0FBQTs7QUFvUU4sSUFBQSxBQUFJLGVBQUosQUFBbUI7QUFDbkIsSUFBQSxBQUFJLGdCQUFpQixJQUFyQixBQUFxQixBQUFJO0FBQ3pCLElBQUEsQUFBSSxRQUFKLEFBQVk7O2tCQUVHIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnICBmcm9tIFwiLi4vY29uZmlncy9IVE1MV3JhcHBlckNvbmZpZ1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSwganNDbGFzcykge1xuICAgICAgICBpZiAoIUFwcC50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdKVxuICAgICAgICAgICAgQXBwLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0gPSBqc0NsYXNzO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb29sSW1wbGVtZW50YXRpb24oYXNDbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIEFwcC50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xDb25maWcgKHRvb2wsIGNvbmZpZykge1xuICAgICAgICBpZiAoIUFwcC50b29sQ29uZmlnTWFwLmhhcyh0b29sKSlcbiAgICAgICAgICAgIEFwcC50b29sQ29uZmlnTWFwLnNldCh0b29sLGNvbmZpZyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xDb25maWcodG9vbCkge1xuICAgICAgICByZXR1cm4gQXBwLnRvb2xDb25maWdNYXAuZ2V0KHRvb2wpO1xuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhyZWFjdENvbXAsbmV4dFByb3BzKXtcbiAgICAgICAgaWYocmVhY3RDb21wLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICBBcHAucmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIEFwcC5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYocmVhY3RDb21wLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSlyZWFjdENvbXAuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZihyZWFjdENvbXAucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbil7XG4gICAgICAgICAgICB2YXIgV3JhcHBlckNvbmZpZ0NsYXNzID0gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdPyByZWFjdENvbXBbXCJXcmFwcGVyQ29uZmlnQ2xhc3NcIl06bnVsbDtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHJlYWN0Q29tcC5zZXR0aW5ncyxXcmFwcGVyQ29uZmlnQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApe1xuICAgICAgICB2YXIgY29uZmlnID0gcmVhY3RDb21wLnNldHRpbmdzO1xuICAgICAgICBpZighV2VhdmUuaXNMaW5rYWJsZShjb25maWcpKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb25maWcsIFwiIGlzIG5vdCBhIExpbmthYmxlT2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbmZpZyk7XG4gICAgICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgdmFyIHBuID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBvYmogPSBjb25maWdbcG5dO1xuICAgICAgICAgICAgaWYoV2VhdmUuaXNMaW5rYWJsZShvYmopKXtcbiAgICAgICAgICAgICAgICBpZihvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKVxuICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzO1xuICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLmFkZEdyb3VwZWRDYWxsYmFjayhyZWFjdENvbXAscmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlRm9yY2VVcGRhdGVGcm9tQ2FsbGJhY2tzKHJlYWN0Q29tcCl7XG4gICAgICAgIHZhciBjb25maWcgPSByZWFjdENvbXAuc2V0dGluZ3M7XG4gICAgICAgIGlmKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZihXZWF2ZS5pc0xpbmthYmxlKG9iaikpe1xuICAgICAgICAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG9iai5jaGlsZExpc3RDYWxsYmFja3M7XG4gICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikucmVtb3ZlQ2FsbGJhY2socmVhY3RDb21wLHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgICAvL0ZvciB0ZXN0aW5nICBhbmQgZGVidWdcbiAgICBzdGF0aWMgaXNTZXNzaW9uQ2hhbmdlZEZvcihjb25maWcpe1xuICAgICAgICBpZighV2VhdmUuaXNMaW5rYWJsZShjb25maWcpKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb25maWcsIFwiIGlzIG5vdCBhIExpbmthYmxlT2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbmZpZyk7XG4gICAgICAgIHZhciBsaW5rYmxlT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgdmFyIG1vcmVMaW5rYWJsZU9iamVjdHMgPSBbXTtcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZihXZWF2ZS5pc0xpbmthYmxlKG9iaikpe1xuICAgICAgICAgICAgICAgIHZhciBsbyA9IChvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKT8gb2JqLmNoaWxkTGlzdENhbGxiYWNrcyA6IG9ialxuICAgICAgICAgICAgICAgIGlmKCFsaW5rYmxlT2JqZWN0KSBsaW5rYmxlT2JqZWN0ID0gbG87XG4gICAgICAgICAgICAgICAgZWxzZSBtb3JlTGlua2FibGVPYmplY3RzLnB1c2gobG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoQXBwLmRlYnVnKXtcbiAgICAgICAgICAgIHZhciBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoID4gMCl7XG5cbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaXNDaGFuZ2VkID0gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbW9yZUxpbmthYmxlT2JqZWN0c1tpXSlcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNDaGFuZ2VkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBtb3JlTGlua2FibGVPYmplY3RzW2ldICwgXCIgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYobGlua2JsZU9iamVjdCl7XG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkID0gIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QpO1xuICAgICAgICAgICAgICAgIGlmKGlzQ2hhbmdlZCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBsaW5rYmxlT2JqZWN0ICwgXCIgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggY29uZmlnICwgXCIgbm8gc2Vzc2lvbiBDaGlsZHJlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBsaW5rYmxlT2JqZWN0ICwgbW9yZUxpbmthYmxlT2JqZWN0cylcbiAgICAgICAgZWxzZSBpZihsaW5rYmxlT2JqZWN0KVxuICAgICAgICAgICAgcmV0dXJuIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyBob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4oY2hpbGRyZW4sY29uZmlnLFdyYXBwZXJDb25maWdDbGFzcyl7XG4gICAgICAgIGNvbmZpZy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuXG4gICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSl7XG4gICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9IGNvbmZpZy5jaGlsZHJlbi5nZXROYW1lKGtleSk7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVtb3ZlT2JqZWN0KGNvbmZpZ05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sZnVuY3Rpb24oY2hpbGQsaW5kZXgpe1xuICAgICAgICAgICAgdmFyIGNoaWxkTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRDb25maWdNYXAuZ2V0KGNoaWxkKTtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZ05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXsgLy8gZm9yIEhUTUwgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZighY2hpbGRDb25maWcpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBXcmFwcGVyQ29uZmlnQ2xhc3MgPyBXcmFwcGVyQ29uZmlnQ2xhc3M6SFRNTFdyYXBwZXJDb25maWdcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJyxjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7IC8vIGZvciBSZWFjdCBDb21wb3NpdGUgRWxlbWVudHNcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBBcHAuZ2V0VG9vbENvbmZpZyhjaGlsZC50eXBlKTtcbiAgICAgICAgICAgICAgICBpZighY2hpbGRDb25maWcgJiYgY29uZmlnQ2xhc3Mpe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5zdHlsZSljaGlsZENvbmZpZy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gY2hpbGQucHJvcHMuc3R5bGU7XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5jbGFzc05hbWUpY2hpbGRDb25maWcuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IGNoaWxkLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcC5zZXQoY2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGNvbmZpZ1tcImFkZEdhcEF0XCJdKXtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCdnYXBEaXYnLEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyByZW5kZXJDaGlsZHJlbihyZWFjdENvbXAscHJvcHNNYW5hZ2VyKXtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG5cbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbihjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9e31cblxuICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIC8vaWYoY2hpbGQucHJvcHMgJiYgIWNoaWxkLnByb3BzLnNldHRpbmdzKVxuXG4gICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcyxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHByb3BzTWFuYWdlcil7XG4gICAgICAgICAgICAgICAgdmFyIG9kZCA9IHByb3BzTWFuYWdlci5vZGQ7XG4gICAgICAgICAgICAgICAgaWYob2RkLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2RkQ2hpbGRyZW5JbmRleCA9IG9kZC5jaGlsZHJlbi5pbmRleE9mKGNvbmZpZ05hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZihvZGRDaGlsZHJlbkluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMsb2RkLnZhbHVlc1tvZGRDaGlsZHJlbkluZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocHJvcHNNYW5hZ2VyW1wiZGVmYXVsdFZhbHVlc1wiXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAubWVyZ2VJbnRvKHByb3BzLHByb3BzTWFuYWdlcltcImRlZmF1bHRWYWx1ZXNcIl0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihwcm9wc01hbmFnZXIuYWxsLnByb3BlcnRpZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzTWFuYWdlci5hbGwucHJvcGVydGllcy5tYXAoZnVuY3Rpb24ocHJvcE5hbWUsaSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wc01hbmFnZXIuYWxsLnZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IHZhbHVlID8gdmFsdWVbaW5kZXhdOmNvbmZpZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYocHJvcHNNYW5hZ2VyLm5ldyl7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMscHJvcHNNYW5hZ2VyLm5ldyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoIHByb3BzTWFuYWdlci5zdHlsZSl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnN0eWxlID0gcHJvcHMuc3R5bGUgfHwge307XG4gICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMuc3R5bGUscHJvcHNNYW5hZ2VyLnN0eWxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGNvbmZpZ05hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgVG9vbENsYXNzID0gIEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24oY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRvb2xDbGFzcyB7Li4ucHJvcHN9PntjaGlsZH08L1Rvb2xDbGFzcz47XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzID0gQXBwLm1lcmdlSW50byhwcm9wcyxwcm9wc01hbmFnZXIubmV3KTtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmhhcyhjaGlsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQoY2xvbmVkQ2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHByb3BzW1wia2V5XCJdID0gY29uZmlnTmFtZTtcbiAgICAgICAgICAgICAgICBpZihjb25maWdOYW1lID09PSBcImdhcERpdlwiKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yZGVyVmFsdWUgPSBTdHJpbmcocmVhY3RDb21wLnNldHRpbmdzLmFkZEdhcEF0LnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWlzTmFOKG9yZGVyVmFsdWUpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wic3R5bGVcIl0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDpcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjpvcmRlclZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90by1kbyBuZWVkIHRvIHJlcGxhY2Ugd2l0aCBmbGV4aW5mbyBmaWxlIG9yIHRpaGVyIG1lYW4sIGNyZWF0ZSBhIHV0aWxpdHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAvL3RoaXMgc29sdXRpb24gd2lsbCBmYWlsIHdoZW4gY29uZmlnIG5vdCBwYXJ0IG9mIHNlc3Npb24gdHJlZVxuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPFRvb2xDbGFzcyB7Li4ucHJvcHN9Lz47XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWVyZ2VJbnRvKGludG8sIG9iaixpZ25vcmVQcm9wcykge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG59XG5cbkFwcC50b29sUmVnaXN0cnkgPSB7fTtcbkFwcC50b29sQ29uZmlnTWFwID0gIG5ldyBNYXAoKTtcbkFwcC5kZWJ1ZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuIl19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

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

	    Style.alignChildren = function (style, align) {
	        var otherState = style.other.state;
	        if (style.display.state === "flex") {
	            if (align === "left") otherState["justifyContent"] = "flex-start";else if (align === "center") otherState["justifyContent"] = "center";else if (align === "right") otherState["justifyContent"] = "flex-end";else if (align === "justify") otherState["justifyContent"] = "space-around";
	        }
	        style.other.state = otherState;
	        // to-do for CSS with float values
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
	//# sourceMappingURL=data:application/json;base64,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QkFBQSxBQUFNLEFBQ047aUJBQUEsQUFBSyxBQUNMO3dCQUFBLEFBQVksQUFDWjtxQkFBUyxTQUFBLEFBQVMsSUFBVCxBQUFhLEFBQ3RCO3VCQUFXLFNBQUEsQUFBUyx5QkFBVCxBQUFrQyxBQUM3Qzt3QkFBWSxTQUFBLEFBQVMsaUJBQVQsQUFBMEIsQUFDdEM7b0JBckZPLEFBMEVVLEFBQWtCLEFBQ3ZDLEFBQU8sQUFVSCxBQUFRLEFBSWhCO1NBZFcsRUFEZ0MsQUFDdkM7S0FEcUI7O1VBZXpCLEFBQU0sa0JBQVEsQUFBVTtpREFDTSxBQUN0QjtzQkFBQSxBQUFVLEFBQ1Y7b0JBQUEsQUFBUSxBQUNSO21CQUFBLEFBQU8sQUFDUDtvQkFBQSxBQUFRLEFBQ1I7a0JBQUEsQUFBTSxBQUNOO2lCQUFBLEFBQUssQUFDTDt1QkFBVyxTQUFBLEFBQVMseUJBQVQsQUFBa0MsQUFDN0M7d0JBbEdPLEFBeUZELEFBQWtCLEFBQzVCLEFBQU8sQUFRSCxBQUFZLEFBU3BCOztTQWpCVyxFQURxQixBQUM1QjtLQURVOztXQWtCZCxBQUFPLFVBM0dWLEFBQWtCLEFBMkdmLEFBQWlCO0dBM0dyQixBQUFDLEFBNkdDIiwiZmlsZSI6IlN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcGVuZFZlbmRvclByZWZpeCBmcm9tICcuL2FwcGVuZFZlbmRvclByZWZpeCc7XG5cblxuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG5cbiAgICBmdW5jdGlvbiBTdHlsZSgpIHtcblxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBtZXJnZShpbnRvLCBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG5cbiAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyA9IGZ1bmN0aW9uIChpbnRvLCBvYmosIGFwcGVuZFZlbmRvclByZWZpeCkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSBtZXJnZShpbnRvLCBvYmopO1xuICAgICAgICBpZiAoYXBwZW5kVmVuZG9yUHJlZml4KVxuICAgICAgICAgICAgcmV0dXJuIFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdClcbiAgICAgICAgZWxzZSByZXR1cm4gc3R5bGVPYmplY3Q7XG4gICAgfVxuXG5cbiAgICAvKmNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIGdldCBhIHBhcnRpY3VsYXIgc2Vzc2lvbmVkIHByb3BlcnR5IG9mIGEgc2Vzc2lvbmVkIG9iamVjdCovXG4gICAgU3R5bGUuZ2V0U3R5bGVTdGF0ZUZvciA9IGZ1bmN0aW9uIChzZXNzaW9uT2JqLCBwcm9wZXJ0aWVzLCBhcHBlbmRWZW5kb3JQcmVmaXgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0ge307XG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgcHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIGlmKHNlc3Npb25PYmpbcHJvcGVydHlOYW1lXS5zdGF0ZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNlc3Npb25PYmpbcHJvcGVydHlOYW1lXS5jb25zdHJ1Y3RvciA9PT0gd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhzdGF0ZSxzZXNzaW9uT2JqW3Byb3BlcnR5TmFtZV0uc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVbcHJvcGVydHlOYW1lXSA9IHNlc3Npb25PYmpbcHJvcGVydHlOYW1lXS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgICBzdGF0ZVtwcm9wZXJ0aWVzXSA9IHNlc3Npb25PYmpbcHJvcGVydGllc10uc3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoYXBwZW5kVmVuZG9yUHJlZml4KVxuICAgICAgICAgICAgcmV0dXJuIFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdGF0ZSk7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuXG5cbiAgICBTdHlsZS5nZXRTdHlsZSA9IGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICByZXR1cm4gYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlKTtcbiAgICB9XG5cbiAgICBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXggPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeChzdHlsZSk7XG4gICAgfVxuXG4gICAgU3R5bGUuYWxpZ25DaGlsZHJlbiA9IGZ1bmN0aW9uKHN0eWxlLGFsaWduKXtcbiAgICAgICAgdmFyIG90aGVyU3RhdGUgPSBzdHlsZS5vdGhlci5zdGF0ZTtcbiAgICAgICAgaWYoc3R5bGUuZGlzcGxheS5zdGF0ZSA9PT0gXCJmbGV4XCIpe1xuICAgICAgICAgICAgaWYoYWxpZ24gPT09IFwibGVmdFwiKSBvdGhlclN0YXRlW1wianVzdGlmeUNvbnRlbnRcIl0gPSBcImZsZXgtc3RhcnRcIjtcbiAgICAgICAgICAgIGVsc2UgaWYoYWxpZ24gPT09IFwiY2VudGVyXCIpb3RoZXJTdGF0ZVtcImp1c3RpZnlDb250ZW50XCJdID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGVsc2UgaWYoYWxpZ24gPT09IFwicmlnaHRcIilvdGhlclN0YXRlW1wianVzdGlmeUNvbnRlbnRcIl0gPSBcImZsZXgtZW5kXCI7XG4gICAgICAgICAgICBlbHNlIGlmKGFsaWduID09PSBcImp1c3RpZnlcIilvdGhlclN0YXRlW1wianVzdGlmeUNvbnRlbnRcIl0gPSBcInNwYWNlLWFyb3VuZFwiO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLm90aGVyLnN0YXRlID0gb3RoZXJTdGF0ZTtcbiAgICAgICAgLy8gdG8tZG8gZm9yIENTUyB3aXRoIGZsb2F0IHZhbHVlc1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgLy8gZHVlIHRvIGJvb3RzdHJhcCBOYXZiYXIgemluZGV4ICgxMDI5KSB2YWx1ZSB3ZSBoYXZlIHRvIGdpdmUgMTAzMCBmb3Igb3ZlcmxheVxuICAgIFN0eWxlLm92ZXJsYXlDb250YWluZXIgPSBmdW5jdGlvbiAoaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBhcHBlbmRWZW5kb3JQcmVmaXgoe1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgICAgICAgICBvcGFjaXR5OiBpc09wZW4gPyAxIDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNPcGVuID8gJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyA6ICd0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCknLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaXNPcGVuID8gJ29wYWNpdHkgMC41cycgOiAnb3BhY2l0eSAwLjVzLCB0cmFuc2Zvcm0gMC4xcyAwLjVzJyxcbiAgICAgICAgICAgIHpJbmRleDogMTAzMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBTdHlsZS5tb2RhbCA9IGZ1bmN0aW9uIChpc09wZW4pIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHpJbmRleDogMTA1MCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGlzT3BlbiA/ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScgOiAndHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cycsXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFN0eWxlO1xuXG59KG1vZHVsZSkpO1xuIl19
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

	var _Style = __webpack_require__(8);

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

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _NodeConfig = __webpack_require__(15);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	var _PropsManager = __webpack_require__(16);

	var _PropsManager2 = _interopRequireDefault(_PropsManager);

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
	        _this.getIconName = _this.getIconName.bind(_this);
	        _this.createSessionStateForTree = _this.createSessionStateForTree.bind(_this);
	        _this.showChildren = _this.showChildren.bind(_this);
	        _this.childrenCallback = _this.childrenCallback.bind(_this);
	        _this.renderChildren = _this.renderChildren.bind(_this);
	        _this.propsManager = new _PropsManager2.default();
	        _this.isSessionStateCreatedForTreeData = false;
	        return _this;
	    }

	    _createClass(Node, [{
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.settings.open.addImmediateCallback(this, this.showChildren);
	            this.settings.children.childListCallbacks.addGroupedCallback(this, this.childrenCallback);
	            this.settings.label.addImmediateCallback(this, this.forceUpdate);
	            this.settings.active.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.open.removeCallback(this, this.showChildren);
	            this.settings.children.childListCallbacks.removeCallback(this, this.childrenCallback);
	            this.settings.label.removeCallback(this, this.forceUpdate);
	            this.settings.active.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	            this.createSessionStateForTree();
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "toggle",
	        value: function toggle() {
	            this.settings.open.value = !this.settings.open.value;
	            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.settings);
	            this.props.treeConfig.changeActiveNode(this.settings);
	        }
	    }, {
	        key: "childrenCallback",
	        value: function childrenCallback() {
	            this.forceUpdate();
	        }
	    }, {
	        key: "createSessionStateForTree",
	        value: function createSessionStateForTree(data, label, nodes, icon) {
	            if (data) {
	                // calling with data arguments indicates data is changed so wipe the session state
	                this.settings.reset();
	            }
	            this.settings.label.value = this.getTreeLabel(data, label);
	            this.settings.iconName.value = this.getIconName(data, icon);
	            var treeNodes = this.getTreeNodes(data, nodes);

	            if (treeNodes && treeNodes.length) {
	                this.settings.children.delayCallbacks();
	                for (var i = 0; i < treeNodes.length; i++) {
	                    var objectName = "node" + i;
	                    var nodeConfig = this.settings.children.requestObject(objectName, _NodeConfig2.default);
	                    var nodeLabel = this.getTreeLabel(treeNodes[i]);
	                    nodeConfig.label.state = nodeLabel;
	                    var nodeIcon = this.getIconName(treeNodes[i]);
	                    nodeConfig.iconName.state = nodeIcon;
	                }
	                this.settings.children.resumeCallbacks();
	            }
	            this.isSessionStateCreatedForTreeData = true;
	        }
	    }, {
	        key: "showChildren",
	        value: function showChildren() {
	            if (!this.isSessionStateCreatedForTreeData) {
	                this.createSessionStateForTree();
	            }
	            if (this.props.treeConfig.defaultSelectedNodes.length > 0) {
	                var nodeConfigs = this.settings.children.getObjects();
	                nodeConfigs.map(function (nodeConfig, index) {
	                    var nodeLabel = nodeConfig.label.state;
	                    if (this.props.treeConfig.defaultSelectedNodes.indexOf(nodeLabel) !== -1) {
	                        nodeConfig.open.value = true;
	                    }
	                }.bind(this));
	            }
	            this.forceUpdate();
	        }
	    }, {
	        key: "getTreeNodes",
	        value: function getTreeNodes(data, nodes) {
	            if (!data && this.props.data) data = this.props.data;
	            if (!nodes && this.props.nodes) nodes = this.props.nodes;
	            if (data) {
	                if (data[nodes] instanceof Function) {
	                    return data[nodes]();
	                } else {
	                    return data[nodes];
	                }
	            } else return [];
	        }
	    }, {
	        key: "getIconName",
	        value: function getIconName(data, icon) {

	            if (!data && this.props.data) data = this.props.data;
	            if (!icon && this.props.icon) icon = this.props.icon;

	            if (data) {
	                if (data[icon] instanceof Function) {
	                    return data[icon]();
	                } else if (icon instanceof Function) {
	                    return icon(data);
	                } else {
	                    return data[icon];
	                }
	            } else {
	                return "";
	            }
	        }
	    }, {
	        key: "getTreeLabel",
	        value: function getTreeLabel(data, label) {
	            if (!data && this.props.data) data = this.props.data;
	            if (!label && this.props.label) label = this.props.label;

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
	                this.createSessionStateForTree(nextProps.data, nextProps.label, nextProps.nodes, nextProps.icon);
	            }
	            if (this.props.open !== nextProps.open) {
	                this.settings.open.value = nextProps.open;
	            }
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren() {
	            this.propsManager.addNewProps("treeConfig", this.props.treeConfig);
	            this.propsManager.addNewProps("label", this.props.label);
	            this.propsManager.addNewProps("nodes", this.props.nodes);
	            this.propsManager.addNewProps("icon", this.props.icon);
	            this.propsManager.addNewProps("clickCallback", this.props.clickCallback);
	            var treeNodes = this.getTreeNodes();
	            this.propsManager.addKeyProps("data", treeNodes);
	            return _App2.default.renderChildren(this, this.propsManager);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var nodeUI = _react2.default.createElement("div", null);
	            var domeDefinedStyle = this.props.style;
	            if (this.props.data) {
	                var nodesUI = [];
	                var nodes = this.settings.getNodes();
	                if (this.settings.open.value) {
	                    nodesUI = this.renderChildren();
	                }

	                var iconName = this.settings.iconName.value;
	                var label = this.settings.label.value;
	                if (nodes.length > 0) {
	                    //folder
	                    var branchStyle = this.props.treeConfig.branchStyle.getStyleFor();
	                    var nodeStyle = this.props.treeConfig.nodeStyle.getStyleFor();
	                    if (domeDefinedStyle) _Style2.default.mergeStyleObjects(nodeStyle, domeDefinedStyle, true); //this happens for rootNode
	                    var controlName = this.props.treeConfig.getFolderIcon(this.settings.open.value);

	                    var folderUI = _react2.default.createElement("span", { style: nodeStyle, onClick: this.toggle }, _react2.default.createElement("i", { className: iconName }), " ", label, _react2.default.createElement("span", { style: { flex: "1" } }), _react2.default.createElement("i", { className: controlName }));

	                    var nodePadding = this.props.treeConfig.nodePadding.state;
	                    nodeUI = _react2.default.createElement("span", { style: branchStyle }, folderUI, _react2.default.createElement("ul", { style: { listStyleType: "none", paddingLeft: nodePadding } }, nodesUI));
	                } else {
	                    //leaf
	                    var fileIcon = this.props.treeConfig.getFileIcon(this.props.data, this.settings.open.value);
	                    // this will return either normal/Active/Slected Style based on state of the leaf
	                    var leafStyle = this.props.treeConfig.getLeafStyle(this.settings.open.value, this.settings.active.value);

	                    nodeUI = _react2.default.createElement("li", { style: leafStyle, onClick: this.toggle }, _react2.default.createElement("i", { className: iconName }), " ", label, _react2.default.createElement("span", { style: { flex: "1" } }), _react2.default.createElement("i", { className: fileIcon }));
	                }
	            }

	            return nodeUI;
	        }
	    }]);

	    return Node;
	}(_react2.default.Component);

	_App2.default.registerToolImplementation("weavereact.NodeConfig", Node);
	exports.default = Node;
	//# sourceMappingURL=data:application/json;base64,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YUFBakMsQUFBSSxBQUE2QixBQUFZLGlCQWhCN0QsQUFBb0IsQUFjaEIsQUFBUyxBQUVHLEFBQ0s7Ozt3QkFLYixXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixZQUFZLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBSyxLQUFBLEFBQUssU0FBTCxBQUFjLEtBRC9FLEFBQ0ksQUFBNkQsQUFBbUI7O0FBRHBGLEFBQ0Esd0JBRUksWUFBWSxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsYUFBYSxLQUFBLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUIsT0FBTSxLQUFBLEFBQUssU0FBTCxBQUFjLE9BSDFGLEFBR0ksQUFBd0UsQUFBcUIsQUFFakc7OzZCQUFTLHNDQUFJLE9BQUEsQUFBTyxXQUFXLFNBQVMsS0FBL0IsQUFBK0IsQUFBSyxVQUNqQyxxQ0FBRyxXQUROLEFBQ0csQUFBRyxBQUFXLGtCQURqQixBQUVVLE9BQ1Asd0NBQU0sT0FBTyxFQUFDLE1BSGpCLEFBR0csQUFBTSxBQUFRLEFBQUssVUFDbkIscUNBQUcsV0F2Q3ZCLEFBU0ksQUFxQkksQUFLQSxBQUFTLEFBSUcsQUFBRyxBQUFXLEFBTXRDOzs7O21CQWhEUyxBQWdEVCxBQUFTLE9BaERBLEFBQ0w7Ozs7V0FsS0Y7RUFBYSxnQkFBQSxBQUFNOztBQXNOekIsY0FBQSxBQUFJLDJCQUFKLEFBQStCLHlCQUEvQixBQUF1RDtrQkFDeEMiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcbmltcG9ydCBQcm9wc01hbmFnZXIgZnJvbSBcIi4uL1Byb3BzTWFuYWdlclwiXG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE5vZGVDb25maWcoKTtcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0VHJlZUxhYmVsID0gdGhpcy5nZXRUcmVlTGFiZWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRJY29uTmFtZSA9IHRoaXMuZ2V0SWNvbk5hbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlID0gdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvd0NoaWxkcmVuID0gdGhpcy5zaG93Q2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbkNhbGxiYWNrID0gdGhpcy5jaGlsZHJlbkNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyID0gbmV3IFByb3BzTWFuYWdlcigpO1xuICAgICAgICB0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnNob3dDaGlsZHJlbik7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmNoaWxkcmVuQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuc2hvd0NoaWxkcmVuKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5jaGlsZHJlbkNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSAhdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncylcbiAgICB9XG5cbiAgICBjaGlsZHJlbkNhbGxiYWNrKCl7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cblxuXG4gICAgY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShkYXRhLGxhYmVsLG5vZGVzLGljb24pIHtcbiAgICAgICAgaWYoZGF0YSl7IC8vIGNhbGxpbmcgd2l0aCBkYXRhIGFyZ3VtZW50cyBpbmRpY2F0ZXMgZGF0YSBpcyBjaGFuZ2VkIHNvIHdpcGUgdGhlIHNlc3Npb24gc3RhdGVcbiAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZSA9IHRoaXMuZ2V0VHJlZUxhYmVsKGRhdGEsbGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlID0gdGhpcy5nZXRJY29uTmFtZShkYXRhLGljb24pO1xuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMoZGF0YSxub2Rlcyk7XG5cbiAgICAgICAgaWYodHJlZU5vZGVzICYmIHRyZWVOb2Rlcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRyZWVOb2Rlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdE5hbWUgPSBcIm5vZGVcIiArIGk7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWcgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3Qob2JqZWN0TmFtZSwgTm9kZUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVMYWJlbCA9IHRoaXMuZ2V0VHJlZUxhYmVsKHRyZWVOb2Rlc1tpXSlcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmxhYmVsLnN0YXRlID0gbm9kZUxhYmVsO1xuICAgICAgICAgICAgICAgIHZhciBub2RlSWNvbiA9IHRoaXMuZ2V0SWNvbk5hbWUodHJlZU5vZGVzW2ldKVxuICAgICAgICAgICAgICAgIG5vZGVDb25maWcuaWNvbk5hbWUuc3RhdGUgPSBub2RlSWNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2hvd0NoaWxkcmVuKCl7XG4gICAgICAgIGlmKCF0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhKXtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLmxlbmd0aD4wKXtcbiAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgbm9kZUNvbmZpZ3MubWFwKGZ1bmN0aW9uKG5vZGVDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgICAgIHZhciBub2RlTGFiZWwgPSBub2RlQ29uZmlnLmxhYmVsLnN0YXRlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5pbmRleE9mKG5vZGVMYWJlbCkgIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBnZXRUcmVlTm9kZXMoZGF0YSxub2Rlcyl7XG4gICAgICAgIGlmKCFkYXRhICYmIHRoaXMucHJvcHMuZGF0YSlkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICBpZighbm9kZXMgJiYgdGhpcy5wcm9wcy5ub2Rlcylub2RlcyA9IHRoaXMucHJvcHMubm9kZXM7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtub2Rlc10gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbm9kZXNdKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgIHJldHVybiBkYXRhW25vZGVzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBnZXRJY29uTmFtZShkYXRhLGljb24pe1xuXG4gICAgICAgIGlmKCFkYXRhICYmIHRoaXMucHJvcHMuZGF0YSlkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICBpZighaWNvbiAmJiB0aGlzLnByb3BzLmljb24paWNvbiA9IHRoaXMucHJvcHMuaWNvbjtcblxuICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtpY29uXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtpY29uXSgpO1xuICAgICAgICAgICAgfWVsc2UgaWYoaWNvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWNvbihkYXRhKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2ljb25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VHJlZUxhYmVsKGRhdGEsbGFiZWwpe1xuICAgICAgICBpZighZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEpZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgaWYoIWxhYmVsICYmIHRoaXMucHJvcHMubGFiZWwpbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsO1xuXG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtsYWJlbF0gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbGFiZWxdKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtsYWJlbF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKG5leHRQcm9wcy5kYXRhLG5leHRQcm9wcy5sYWJlbCxuZXh0UHJvcHMubm9kZXMsbmV4dFByb3BzLmljb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMub3BlbiAhPT0gbmV4dFByb3BzLm9wZW4pe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gbmV4dFByb3BzLm9wZW47XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwidHJlZUNvbmZpZ1wiLHRoaXMucHJvcHMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwibGFiZWxcIix0aGlzLnByb3BzLmxhYmVsKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJub2Rlc1wiLHRoaXMucHJvcHMubm9kZXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGROZXdQcm9wcyhcImljb25cIix0aGlzLnByb3BzLmljb24pO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGROZXdQcm9wcyhcImNsaWNrQ2FsbGJhY2tcIix0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spO1xuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMoKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkS2V5UHJvcHMoXCJkYXRhXCIsdHJlZU5vZGVzKTtcbiAgICAgICAgcmV0dXJuIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLCB0aGlzLnByb3BzTWFuYWdlcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbm9kZVVJID0gPGRpdi8+O1xuICAgICAgICB2YXIgZG9tZURlZmluZWRTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB2YXIgbm9kZXNVSSA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlcygpO1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBub2Rlc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcbiAgICAgICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApeyAvL2ZvbGRlclxuICAgICAgICAgICAgICAgIHZhciBicmFuY2hTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5icmFuY2hTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgICAgIHZhciBub2RlU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgICAgICAgICAgaWYoZG9tZURlZmluZWRTdHlsZSlTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhub2RlU3R5bGUsZG9tZURlZmluZWRTdHlsZSx0cnVlKTsvL3RoaXMgaGFwcGVucyBmb3Igcm9vdE5vZGVcbiAgICAgICAgICAgICAgICB2YXIgY29udHJvbE5hbWUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0Rm9sZGVySWNvbih0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGZvbGRlclVJID0gPHNwYW4gc3R5bGU9e25vZGVTdHlsZX0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3tsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y29udHJvbE5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZVBhZGRpbmcgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcuc3RhdGU7XG4gICAgICAgICAgICAgICAgbm9kZVVJID0gPHNwYW4gc3R5bGU9e2JyYW5jaFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9sZGVyVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTpcIm5vbmVcIixwYWRkaW5nTGVmdDpub2RlUGFkZGluZ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZXNVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNleyAvL2xlYWZcbiAgICAgICAgICAgICAgICB2YXIgZmlsZUljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0RmlsZUljb24odGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJldHVybiBlaXRoZXIgbm9ybWFsL0FjdGl2ZS9TbGVjdGVkIFN0eWxlIGJhc2VkIG9uIHN0YXRlIG9mIHRoZSBsZWFmXG4gICAgICAgICAgICAgICAgdmFyIGxlYWZTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRMZWFmU3R5bGUodGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlLHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDt7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZmlsZUljb259PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIHJldHVybiAoIG5vZGVVSSk7XG4gICAgfVxuXG59XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==

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
	            "iconName": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            },
	            "open": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
	            },
	            "active": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
	            }
	        });

	        this.open.state = false;
	        this.active.state = false;

	        this.childConfigMap = new Map();
	        this.configChildMap = new Map();
	    }

	    var p = NodeConfig.prototype;

	    p.getNodes = function () {
	        return this.children.getNames();
	    };

	    p.reset = function () {
	        this.label.value = "";
	        this.iconName.value = "";
	        this.open.value = false;
	        this.active.value = false;
	        this.children.removeAllObjects();
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.NodeConfig', NodeConfig);

	    module.exports = NodeConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxDQUFDLFVBQUEsQUFBVTs7YUFFUCxBQUFTOztlQUVMLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMxQjtxQkFBUyxBQUNMO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGVBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUVyRTs7O3VCQUNXLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFBWSxBQUNSLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDtBQUhZLEFBQ1I7d0JBRVEsQUFDUjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOztvQkFBUSxBQUNKO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFFdEQ7O3NCQUFVLEFBQ047dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQWhCbkMsQUFFbEIsQUFhSSxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUkxRDs7V0FwQmtCLEFBRWxCOzthQWtCQSxBQUFLLEtBQUwsQUFBVSxRQXBCUSxBQW9CbEIsQUFBa0IsQUFDbEI7YUFBQSxBQUFLLE9BQUwsQUFBWSxRQXJCTSxBQXFCbEIsQUFBb0IsQUFFcEI7O2FBQUEsQUFBSyxpQkFBaUIsSUF2QkosQUF1QmxCLEFBQXNCLEFBQUksQUFDMUI7YUFBQSxBQUFLLGlCQUFpQixJQXhCMUIsQUFBc0IsQUF3QmxCLEFBQXNCLEFBQUksQUFJOUI7OztRQUFJLElBQUksV0E5Qk8sQUE4QlAsQUFBVyxBQUVuQjs7TUFBQSxBQUFFLHVCQUF1QixBQUNyQjtlQUFPLEtBQUEsQUFBSyxTQWpDRCxBQWdDRixBQUFZLEFBQ3JCLEFBQU8sQUFBYyxBQUd6QjtLQUphOztNQUliLEFBQUUsb0JBQW9CLEFBQ2xCO2FBQUEsQUFBSyxNQUFMLEFBQVcsUUFETyxBQUNsQixBQUFtQixBQUNuQjthQUFBLEFBQUssU0FBTCxBQUFjLFFBRkksQUFFbEIsQUFBc0IsQUFDdEI7YUFBQSxBQUFLLEtBQUwsQUFBVSxRQUhRLEFBR2xCLEFBQWtCLEFBQ2xCO2FBQUEsQUFBSyxPQUFMLEFBQVksUUFKTSxBQUlsQixBQUFvQixBQUNwQjthQUFBLEFBQUssU0F6Q00sQUFvQ0wsQUFBWSxBQUtsQixBQUFjO0tBTFI7OztBQXBDSyxBQUVmLFNBMkNBLENBQUEsQUFBTSxjQUFOLEFBQW9CLHlCQTdDTCxBQTZDZixBQUE2QyxBQUU3Qzs7V0FBQSxBQUFPLFVBL0NWLEFBQWtCLEFBK0NmLEFBQWlCO0dBL0NyQixBQUFDLEFBaURDIiwiZmlsZSI6Ik5vZGVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE5vZGVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKSAvLyBpbXBvcnRhbnQgdG8gYmUgcHJvdG90eXBlIGFzIHR5cGUgcmVzdHJpY3Rpb24gaXMgY29tcGFyZWQgd2l0aCBwcm90b3R5cGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25OYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wZW4uc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUuc3RhdGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cblxuXG4gICAgdmFyIHAgPSBOb2RlQ29uZmlnLnByb3RvdHlwZTtcblxuICAgIHAuZ2V0Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmdldE5hbWVzKCk7XG4gICAgfVxuXG4gICAgcC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuaWNvbk5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5yZW1vdmVBbGxPYmplY3RzKCk7XG4gICAgfVxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Ob2RlQ29uZmlnJywgTm9kZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE5vZGVDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 16 */
/***/ function(module, exports) {

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

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var PropsManager = function () {
	    function PropsManager() {
	        _classCallCheck(this, PropsManager);

	        this.new = {};
	        this.mutated = {};
	        this.key = [];
	        this.default = {};
	        this.style = {};

	        Object.defineProperties(this, {
	            "odd": {
	                value: {
	                    children: [],
	                    values: []
	                }
	            },
	            "all": {
	                value: {
	                    properties: [],
	                    values: []
	                }
	            }
	        });
	    }

	    _createClass(PropsManager, [{
	        key: "addKeyProps",
	        value: function addKeyProps(propName, value) {
	            var index = this.all.properties.indexOf(propName);
	            if (index === -1) {
	                this.all.properties.push(propName);
	                var valIndex = this.all.properties.indexOf(propName);
	                this.all.values[valIndex] = value;
	            }
	        }
	    }, {
	        key: "addOddChild",
	        value: function addOddChild(childKey, childValue) {
	            //to-do add warning if childValue is missed
	            var childIndex = this.odd.children.indexOf(childKey);
	            if (childIndex === -1) {
	                this.odd.children.push(childKey);
	                var valIndex = this.odd.children.indexOf(childKey);
	                this.odd.values[valIndex] = childValue;
	            }
	        }
	    }, {
	        key: "addNewProps",
	        value: function addNewProps(propName, value) {
	            this.new[propName] = value;
	        }
	    }, {
	        key: "updateStyle",
	        value: function updateStyle(style) {
	            this.style = style;
	        }
	    }]);

	    return PropsManager;
	}();

	exports.default = PropsManager;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb3BzTWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUFNLEFBQ0Y7OEJBREUsQUFDWSxBQUNWOzthQUFBLEFBQUssTUFESyxBQUNWLEFBQVcsQUFDWDthQUFBLEFBQUssVUFGSyxBQUVWLEFBQWUsQUFDZjthQUFBLEFBQUssTUFISyxBQUdWLEFBQVcsQUFDWDthQUFBLEFBQUssVUFKSyxBQUlWLEFBQWUsQUFDZjthQUFBLEFBQUssUUFMSyxBQUtWLEFBQWEsQUFHWjs7ZUFBQSxBQUFPLGlCQUFQLEFBQXdCLE1BQU0sQUFDM0I7bUJBQU8sQUFDSDt1QkFBTyxBQUNIOzhCQUFBLEFBQVUsQUFDVjs0QkFIUixBQUNJLEFBRUksQUFBUSxBQUdoQjs7O21CQUFPLEFBQ0g7dUJBQU0sQUFDRjtnQ0FBQSxBQUFZLEFBQ1o7NEJBbEJoQixBQUFjLEFBUVQsQUFPRyxBQUNJLEFBRUksQUFBTzs7O1dBbEJUOzs7aUJBRFo7O29DQTBCVSxVQUFTLE9BQU0sQUFDdkI7Z0JBQUksUUFBUSxLQUFBLEFBQUssSUFBTCxBQUFTLFdBQVQsQUFBb0IsUUFEVCxBQUNuQixBQUFRLEFBQTRCLEFBQ3hDO2dCQUFHLFVBQVUsQ0FBQSxBQUFDLEdBQUUsQUFDWjtxQkFBQSxBQUFLLElBQUwsQUFBUyxXQUFULEFBQW9CLEtBRFIsQUFDWixBQUF5QixBQUN6QjtvQkFBSSxXQUFXLEtBQUEsQUFBSyxJQUFMLEFBQVMsV0FBVCxBQUFvQixRQUZ2QixBQUVSLEFBQVcsQUFBNEIsQUFDM0M7cUJBQUEsQUFBSyxJQUFMLEFBQVMsT0FBVCxBQUFnQixZQUhwQixBQUFnQixBQUdaLEFBQTRCOzs7OztvQ0FJeEIsVUFBUyxZQUFXLEFBRTVCOztnQkFBSSxhQUFhLEtBQUEsQUFBSyxJQUFMLEFBQVMsU0FBVCxBQUFrQixRQUZQLEFBRXhCLEFBQWEsQUFBMEIsQUFDM0M7Z0JBQUcsZUFBZSxDQUFBLEFBQUMsR0FBRSxBQUNqQjtxQkFBQSxBQUFLLElBQUwsQUFBUyxTQUFULEFBQWtCLEtBREQsQUFDakIsQUFBdUIsQUFDdkI7b0JBQUksV0FBVyxLQUFBLEFBQUssSUFBTCxBQUFTLFNBQVQsQUFBa0IsUUFGaEIsQUFFYixBQUFXLEFBQTBCLEFBQ3pDO3FCQUFBLEFBQUssSUFBTCxBQUFTLE9BQVQsQUFBZ0IsWUFIcEIsQUFBcUIsQUFHakIsQUFBNEI7Ozs7O29DQUl4QixVQUFTO2lCQUNqQixBQUFLLElBQUwsQUFBUyxZQURjLEFBQ3ZCLEFBQXFCLE1BREUsQUFDdkI7Ozs7b0NBSVE7aUJBQ1IsQUFBSyxRQURTLEFBQ2QsQUFBYSxNQURDLEFBQ2Q7O1FBbERKOztXQURFO0dBQUE7O2tCQTZEUyIsImZpbGUiOiJQcm9wc01hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9wc01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5ldyA9IHt9O1xuICAgICAgICB0aGlzLm11dGF0ZWQgPSB7fTtcbiAgICAgICAgdGhpcy5rZXkgPSBbXTtcbiAgICAgICAgdGhpcy5kZWZhdWx0ID0ge307XG4gICAgICAgIHRoaXMuc3R5bGUgPSB7fVxuXG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwib2RkXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbGxcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOntcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogW10sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczpbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBhZGRLZXlQcm9wcyhwcm9wTmFtZSx2YWx1ZSl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWxsLnByb3BlcnRpZXMuaW5kZXhPZihwcm9wTmFtZSk7XG4gICAgICAgIGlmKGluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICB0aGlzLmFsbC5wcm9wZXJ0aWVzLnB1c2gocHJvcE5hbWUpO1xuICAgICAgICAgICAgdmFyIHZhbEluZGV4ID0gdGhpcy5hbGwucHJvcGVydGllcy5pbmRleE9mKHByb3BOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuYWxsLnZhbHVlc1t2YWxJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE9kZENoaWxkKGNoaWxkS2V5LGNoaWxkVmFsdWUpe1xuICAgICAgICAvL3RvLWRvIGFkZCB3YXJuaW5nIGlmIGNoaWxkVmFsdWUgaXMgbWlzc2VkXG4gICAgICAgIHZhciBjaGlsZEluZGV4ID0gdGhpcy5vZGQuY2hpbGRyZW4uaW5kZXhPZihjaGlsZEtleSlcbiAgICAgICAgaWYoY2hpbGRJbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgdGhpcy5vZGQuY2hpbGRyZW4ucHVzaChjaGlsZEtleSk7XG4gICAgICAgICAgICB2YXIgdmFsSW5kZXggPSB0aGlzLm9kZC5jaGlsZHJlbi5pbmRleE9mKGNoaWxkS2V5KVxuICAgICAgICAgICAgdGhpcy5vZGQudmFsdWVzW3ZhbEluZGV4XSA9IGNoaWxkVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGROZXdQcm9wcyhwcm9wTmFtZSx2YWx1ZSl7XG4gICAgICAgIHRoaXMubmV3W3Byb3BOYW1lXSA9IHZhbHVlO1xuICAgIH1cblxuXG4gICAgdXBkYXRlU3R5bGUoc3R5bGUpe1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGVcbiAgICB9XG5cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb3BzTWFuYWdlcjtcbiJdfQ==

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _NodeConfig = __webpack_require__(15);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	(function (module) {

	    function TreeConfig() {

	        Object.defineProperties(this, {
	            "nodeIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder"))
	            },
	            "nodeOpenIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder-open"))
	            },
	            "leafIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text"))
	            },
	            "leafOpenIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text-o"))
	            },
	            "enableDataTypeIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	            },
	            "align": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
	            },
	            "nodePadding": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20px"))
	            },
	            rootNode: {
	                value: Weave.linkableChild(this, new _NodeConfig2.default())
	            },
	            rootStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            nodeStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            leafStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            selectedLeafStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            activeLeafStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            branchStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            allowMultipleSelection: {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            }
	        });

	        this.activeNode = null;
	        this.dataTypesMap = null;
	        this.getDataType = null;

	        this.nodeStyle.display.state = "flex";
	        this.nodeStyle.other.state = {
	            "flexDirection": "row"
	        };

	        this.leafStyle.display.state = "flex";
	        this.leafStyle.other.state = {
	            "flexDirection": "row"
	        };

	        this.selectedLeafStyle.other.state = {
	            "background": "green"
	        };

	        this.activeLeafStyle.other.state = {
	            "background": "orange"
	        };

	        this.defaultSelectedNodes = [];
	    }

	    var p = TreeConfig.prototype;

	    function mergeInto(into, obj) {
	        for (var attr in obj) {
	            into[attr] = obj[attr];
	        }
	        return into;
	    }

	    p.getLeafStyle = function (open, active) {
	        var style = this.leafStyle.getStyleFor();
	        if (open) {
	            mergeInto(style, this.selectedLeafStyle.getStyleFor());
	            if (active) return mergeInto(style, this.activeLeafStyle.getStyleFor());
	        }
	        return style;
	    };

	    function setChildrenStateToOpen(parentNode, openNodes) {
	        var nodes = parentNode.children.getObjects();
	        if (nodes && nodes.length > 0) {
	            nodes.map(function (node) {
	                var nodeIndex = openNodes.indexOf(node.label.state);
	                if (nodeIndex > -1) {
	                    node.open.value = true;
	                    openNodes.splice(nodeIndex, 1);
	                    setChildrenStateToOpen(node, openNodes);
	                } else {
	                    node.open.value = false;
	                    node.active.value = false;
	                }
	            }.bind(this));
	        }
	    }

	    //to-do do this for entire tree rather only for the first child
	    p.setDefaultNodeSelection = function (nodesLabel) {
	        this.defaultSelectedNodes = nodesLabel;
	        //setChildrenStateToOpen(this.rootNode,nodesLabel)
	    };

	    //to-do do this for entire tree rather only for the first child
	    p.setOpenNodes = function (nodesLabel) {
	        var rootNodes = this.rootNode.children.getObjects();
	        rootNodes.map(function (node) {
	            if (nodesLabel.indexOf(node.label.state) > -1) {
	                node.open.value = true;
	            } else {
	                node.open.value = false;
	                node.active.value = false;
	            }
	        }.bind(this));
	    };

	    p.changeActiveNode = function (nodeConfig) {
	        if (this.activeNode) {
	            this.activeNode.active.value = false;
	            if (!this.allowMultipleSelection.value) {
	                if (this.activeNode !== nodeConfig) {
	                    var activeNodeChild = this.activeNode.children.getName(nodeConfig);
	                    if (!activeNodeChild) this.activeNode.open.value = false;
	                }
	            }
	        }
	        this.activeNode = nodeConfig;
	        this.activeNode.active.value = true;
	    };

	    p.getFileIcon = function (data, isOpen) {
	        if (data) {
	            if (this.enableDataTypeIcon.value) {
	                var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
	                if (this.dataTypesMap && this.dataTypesMap[datType]) return this.dataTypesMap[datType];
	            } else {
	                return isOpen ? this.leafOpenIcon.value : this.leafIcon.value;
	            }
	        } else return "";
	    };

	    p.getFolderIcon = function (isOpen) {
	        return isOpen ? this.nodeOpenIcon.value : this.nodeIcon.value;
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

	    module.exports = TreeConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,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TUFhaEIsQUFBRSwwQkFBZ0IsQUFBVyxRQUFRLEFBQ2pDO2VBQU8sU0FBUyxLQUFBLEFBQUssYUFBTCxBQUFrQixRQUFRLEtBQUEsQUFBSyxTQXRLcEMsQUFxS0csQUFBbUIsQUFDUyxBQUFjO0tBRDFDOzs7U0FNbEIsQ0FBQSxBQUFNLGNBQU4sQUFBb0IseUJBM0tMLEFBMktmLEFBQTZDLEFBRTdDOztXQUFBLEFBQU8sVUE3S1YsQUFBa0IsQUE2S2YsQUFBaUI7R0E3S3JCLEFBQUMsQUErS0MiLCJmaWxlIjoiVHJlZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBUcmVlQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwibm9kZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1mb2xkZXJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1mb2xkZXItb3BlblwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxlYWZJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZk9wZW5JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0LW9cIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVEYXRhVHlwZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsZWZ0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibm9kZVBhZGRpbmdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMHB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3ROb2RlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTm9kZUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3RTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9kZVN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkTGVhZlN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyYW5jaFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGxvd011bHRpcGxlU2VsZWN0aW9uOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCAgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2V0RGF0YVR5cGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubm9kZVN0eWxlLmRpc3BsYXkuc3RhdGUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5ub2RlU3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sZWFmU3R5bGUuZGlzcGxheS5zdGF0ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLmxlYWZTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGVkTGVhZlN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBcImdyZWVuXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZlTGVhZlN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBcIm9yYW5nZVwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZE5vZGVzID0gW107XG4gICAgfVxuXG5cbiAgICB2YXIgcCA9IFRyZWVDb25maWcucHJvdG90eXBlO1xuXG4gICAgZnVuY3Rpb24gbWVyZ2VJbnRvIChpbnRvLCBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludG87XG4gICAgfVxuXG4gICAgcC5nZXRMZWFmU3R5bGUgPSBmdW5jdGlvbihvcGVuLCBhY3RpdmUpe1xuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLmxlYWZTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICBpZihvcGVuKXtcbiAgICAgICAgICAgIG1lcmdlSW50byhzdHlsZSx0aGlzLnNlbGVjdGVkTGVhZlN0eWxlLmdldFN0eWxlRm9yKCkpXG4gICAgICAgICAgICBpZihhY3RpdmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlSW50byhzdHlsZSx0aGlzLmFjdGl2ZUxlYWZTdHlsZS5nZXRTdHlsZUZvcigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDaGlsZHJlblN0YXRlVG9PcGVuKHBhcmVudE5vZGUsb3Blbk5vZGVzKXtcbiAgICAgICAgdmFyIG5vZGVzID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIGlmKG5vZGVzICYmIG5vZGVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgICAgIHZhciBub2RlSW5kZXggPSBvcGVuTm9kZXMuaW5kZXhPZihub2RlLmxhYmVsLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBpZihub2RlSW5kZXggPiAtMSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Ob2Rlcy5zcGxpY2Uobm9kZUluZGV4LDEpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZHJlblN0YXRlVG9PcGVuKG5vZGUsb3Blbk5vZGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy90by1kbyBkbyB0aGlzIGZvciBlbnRpcmUgdHJlZSByYXRoZXIgb25seSBmb3IgdGhlIGZpcnN0IGNoaWxkXG4gICAgcC5zZXREZWZhdWx0Tm9kZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKG5vZGVzTGFiZWwpe1xuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZE5vZGVzID0gbm9kZXNMYWJlbFxuICAgICAgICAvL3NldENoaWxkcmVuU3RhdGVUb09wZW4odGhpcy5yb290Tm9kZSxub2Rlc0xhYmVsKVxuICAgIH1cblxuICAgIC8vdG8tZG8gZG8gdGhpcyBmb3IgZW50aXJlIHRyZWUgcmF0aGVyIG9ubHkgZm9yIHRoZSBmaXJzdCBjaGlsZFxuICAgIHAuc2V0T3Blbk5vZGVzID0gZnVuY3Rpb24obm9kZXNMYWJlbCl7XG4gICAgICAgIHZhciByb290Tm9kZXMgPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgcm9vdE5vZGVzLm1hcChmdW5jdGlvbihub2RlKXtcbiAgICAgICAgICAgIGlmKG5vZGVzTGFiZWwuaW5kZXhPZihub2RlLmxhYmVsLnN0YXRlKSA+IC0xKXtcbiAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICB9XG5cbiAgICBwLmNoYW5nZUFjdGl2ZU5vZGUgPSBmdW5jdGlvbiAobm9kZUNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICBpZighdGhpcy5hbGxvd011bHRpcGxlU2VsZWN0aW9uLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2ZU5vZGUgIT09IG5vZGVDb25maWcpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlTm9kZUNoaWxkID0gdGhpcy5hY3RpdmVOb2RlLmNoaWxkcmVuLmdldE5hbWUobm9kZUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFhY3RpdmVOb2RlQ2hpbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBub2RlQ29uZmlnO1xuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwLmdldEZpbGVJY29uID0gZnVuY3Rpb24gKGRhdGEsaXNPcGVuKSB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYodGhpcy5lbmFibGVEYXRhVHlwZUljb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVR5cGVzTWFwICYmIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy5sZWFmT3Blbkljb24udmFsdWUgOiB0aGlzLmxlYWZJY29uLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgcC5nZXRGb2xkZXJJY29uID0gZnVuY3Rpb24gKCBpc09wZW4pIHtcbiAgICAgICAgcmV0dXJuIGlzT3BlbiA/IHRoaXMubm9kZU9wZW5JY29uLnZhbHVlIDogdGhpcy5ub2RlSWNvbi52YWx1ZTtcbiAgICB9XG5cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuVHJlZUNvbmZpZycsIFRyZWVDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBUcmVlQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 18 */
/***/ function(module, exports) {

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

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var SimpleTreeConfig = function () {
	    function SimpleTreeConfig() {
	        _classCallCheck(this, SimpleTreeConfig);

	        Object.defineProperties(this, {
	            "nodeIcon": {
	                value: new weavejs.core.LinkableString("fa fa-folder")
	            },
	            "nodeOpenIcon": {
	                value: new weavejs.core.LinkableString("fa fa-folder-open")
	            },
	            "leafIcon": {
	                value: new weavejs.core.LinkableString("fa fa-file-text")
	            },
	            "leafOpenIcon": {
	                value: new weavejs.core.LinkableString("fa fa-file-text-o")
	            },
	            "nodePadding": {
	                value: new weavejs.core.LinkableString("20px")
	            },
	            nodeStyle: {
	                value: new weavejs.core.LinkableVariable()
	            },
	            leafStyle: {
	                value: new weavejs.core.LinkableVariable()
	            },
	            selectedLeafStyle: {
	                value: new weavejs.core.LinkableVariable()
	            },
	            activeLeafStyle: {
	                value: new weavejs.core.LinkableVariable()
	            }
	        });
	        this.labelAccessor = null;
	        this.childrenAccessor = null;
	        this.activeNode = null;

	        this.selectedLeafStyle.state = {
	            "background": "grey"
	        };

	        this.activeLeafStyle.state = {
	            "background": "blue"
	        };
	    }

	    _createClass(SimpleTreeConfig, [{
	        key: "getIcon",
	        value: function getIcon(type, isOpen) {
	            var iconName = type === "node" ? isOpen ? this.nodeOpenIcon.state : this.nodeIcon.state : isOpen ? this.leafOpenIcon.state : this.leafIcon.state;

	            return iconName;
	        }

	        // temp: move to Utils

	    }, {
	        key: "mergeInto",
	        value: function mergeInto(into, obj) {
	            for (var attr in obj) {
	                into[attr] = obj[attr];
	            }
	            return into;
	        }
	    }, {
	        key: "getTreeNodes",
	        value: function getTreeNodes(data) {
	            var nodes = this.childrenAccessor;
	            if (data[nodes] instanceof Function) return data[nodes]();else if (nodes instanceof Function) return nodes(data);else return data[nodes];
	        }
	    }, {
	        key: "getTreeLabel",
	        value: function getTreeLabel(data, label) {
	            var label = this.labelAccessor;
	            if (data[label] instanceof Function) return data[label]();else if (label instanceof Function) return label(data);else return data[label];
	        }
	    }, {
	        key: "getLeafStyle",
	        value: function getLeafStyle(open, active) {
	            var style = this.leafStyle.state ? this.leafStyle.state : {};

	            if (open) {
	                var selectedStyle = this.selectedLeafStyle.state;
	                if (selectedStyle) this.mergeInto(style, this.selectedLeafStyle.state);
	                if (active) {
	                    var activeStyle = this.activeLeafStyle.state;
	                    return activeStyle ? this.mergeInto(style, this.activeLeafStyle.state) : style;
	                }
	            }
	            return style;
	        }
	    }, {
	        key: "changeActiveNode",
	        value: function changeActiveNode(nodeComponent) {
	            if (this.activeNode) {
	                this.activeNode.active.value = false;
	            }
	            this.activeNode = nodeComponent;
	            this.activeNode.active.value = true;
	        }
	    }]);

	    return SimpleTreeConfig;
	}();

	exports.default = SimpleTreeConfig;
	//# sourceMappingURL=data:application/json;base64,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QUFlLFFBRDdCLEFBQ1YsQUFBK0MsQUFFM0Q7O2dCQUFBLEFBQUcsTUFBSyxBQUNKO29CQUFJLGdCQUFnQixLQUFBLEFBQUssa0JBRHJCLEFBQ2dCLEFBQXVCLEFBQzNDO29CQUFBLEFBQUcsZUFBYyxLQUFBLEFBQUssVUFBTCxBQUFlLE9BQU0sS0FBQSxBQUFLLGtCQUEzQyxBQUFpQixBQUFxQixBQUF1QixBQUM3RDtvQkFBQSxBQUFHLFFBQU8sQUFDTjt3QkFBSSxjQUFjLEtBQUEsQUFBSyxnQkFEakIsQUFDWSxBQUFxQixBQUN2QzsyQkFBTyxjQUFjLEtBQUEsQUFBSyxVQUFMLEFBQWUsT0FBTSxLQUFBLEFBQUssZ0JBQXhDLEFBQW1DLEFBQXFCLFNBTHZFLEFBR0ksQUFBVSxBQUVDLEFBQWlFLEFBR2hGOzs7bUJBWHNCLEFBV3RCLEFBQU8sTUFYZSxBQUN0Qjs7Ozt5Q0FlYTtnQkFDVCxLQUFBLEFBQUssWUFBWSxBQUNqQjtxQkFBQSxBQUFLLFdBQUwsQUFBZ0IsT0FBaEIsQUFBdUIsUUFEM0IsQUFBcUIsQUFDakIsQUFBK0IsQUFFbkM7O2lCQUFBLEFBQUssYUFKdUIsQUFJNUIsQUFBa0IsQUFDbEIsY0FMNEIsQUFDNUI7aUJBSUEsQUFBSyxXQUFMLEFBQWdCLE9BQWhCLEFBQXVCLFFBTEssQUFLNUIsQUFBK0I7O1FBckduQzs7V0FERTtHQUFBOztrQkEyR1MiLCJmaWxlIjoiU2ltcGxlVHJlZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgU2ltcGxlVHJlZUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwibm9kZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZm9sZGVyXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZm9sZGVyLW9wZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxlYWZJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWZpbGUtdGV4dFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZk9wZW5JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWZpbGUtdGV4dC1vXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlUGFkZGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMHB4XCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9kZVN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkTGVhZlN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sYWJlbEFjY2Vzc29yID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbkFjY2Vzc29yID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkTGVhZlN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBcImdyZXlcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVMZWFmU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImJhY2tncm91bmRcIiA6IFwiYmx1ZVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJY29uKHR5cGUsIGlzT3Blbil7XG4gICAgICAgIHZhciBpY29uTmFtZSA9ICAodHlwZSA9PT0gXCJub2RlXCIpPyAoaXNPcGVuID8gdGhpcy5ub2RlT3Blbkljb24uc3RhdGUgOiB0aGlzLm5vZGVJY29uLnN0YXRlKSA6IChpc09wZW4gPyB0aGlzLmxlYWZPcGVuSWNvbi5zdGF0ZSA6IHRoaXMubGVhZkljb24uc3RhdGUpO1xuXG4gICAgICAgIHJldHVybiBpY29uTmFtZTtcblxuICAgIH1cblxuICAgIC8vIHRlbXA6IG1vdmUgdG8gVXRpbHNcbiAgICBtZXJnZUludG8oaW50bywgb2JqKSB7XG4gICAgICAgIGZvcihsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludG87XG4gICAgfVxuXG4gICAgZ2V0VHJlZU5vZGVzKGRhdGEpe1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkcmVuQWNjZXNzb3I7XG4gICAgICAgIGlmKGRhdGFbbm9kZXNdIGluc3RhbmNlb2YgRnVuY3Rpb24pXG4gICAgICAgICAgICByZXR1cm4gZGF0YVtub2Rlc10oKTtcbiAgICAgICAgZWxzZSBpZihub2RlcyBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVzKGRhdGEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgIHJldHVybiBkYXRhW25vZGVzXTtcbiAgICB9XG5cblxuICAgIGdldFRyZWVMYWJlbChkYXRhLGxhYmVsKXtcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5sYWJlbEFjY2Vzc29yO1xuICAgICAgICBpZihkYXRhW2xhYmVsXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFbbGFiZWxdKCk7XG4gICAgICAgIGVsc2UgaWYobGFiZWwgaW5zdGFuY2VvZiBGdW5jdGlvbilcbiAgICAgICAgICAgIHJldHVybiBsYWJlbChkYXRhKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFbbGFiZWxdO1xuICAgIH1cblxuXG4gICAgZ2V0TGVhZlN0eWxlKG9wZW4sIGFjdGl2ZSl7XG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMubGVhZlN0eWxlLnN0YXRlID8gIHRoaXMubGVhZlN0eWxlLnN0YXRlIDoge307XG5cbiAgICAgICAgaWYob3Blbil7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRTdHlsZSA9IHRoaXMuc2VsZWN0ZWRMZWFmU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICBpZihzZWxlY3RlZFN0eWxlKXRoaXMubWVyZ2VJbnRvKHN0eWxlLHRoaXMuc2VsZWN0ZWRMZWFmU3R5bGUuc3RhdGUpO1xuICAgICAgICAgICAgaWYoYWN0aXZlKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlU3R5bGUgPSB0aGlzLmFjdGl2ZUxlYWZTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aXZlU3R5bGUgPyB0aGlzLm1lcmdlSW50byhzdHlsZSx0aGlzLmFjdGl2ZUxlYWZTdHlsZS5zdGF0ZSkgOiBzdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG5cblxuICAgIGNoYW5nZUFjdGl2ZU5vZGUobm9kZUNvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbm9kZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVRyZWVDb25maWc7XG5cblxuXG4iXX0=

/***/ },
/* 19 */
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

	var _SimpleNode = __webpack_require__(20);

	var _SimpleNode2 = _interopRequireDefault(_SimpleNode);

	var _SimpleTreeConfig = __webpack_require__(18);

	var _SimpleTreeConfig2 = _interopRequireDefault(_SimpleTreeConfig);

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

	var SimpleTree = function (_React$Component) {
	    _inherits(SimpleTree, _React$Component);

	    function SimpleTree(props) {
	        _classCallCheck(this, SimpleTree);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleTree).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _SimpleTreeConfig2.default();
	        _this.settings.labelAccessor = _this.props.label;
	        _this.settings.childrenAccessor = _this.props.children;
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        return _this;
	    }

	    _createClass(SimpleTree, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.settings.nodePadding.addGroupedCallback(this, this.forceUpdate);
	            this.settings.nodeStyle.addGroupedCallback(this, this.forceUpdate);
	            this.settings.leafStyle.addGroupedCallback(this, this.forceUpdate);
	            this.settings.selectedLeafStyle.addGroupedCallback(this, this.forceUpdate);
	            this.settings.activeLeafStyle.addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.nodePadding.removeCallback(this, this.forceUpdate);
	            this.settings.nodeStyle.removeCallback(this, this.forceUpdate);
	            this.settings.leafStyle.removeCallback(this, this.forceUpdate);
	            this.settings.selectedLeafStyle.removeCallback(this, this.forceUpdate);
	            this.settings.activeLeafStyle.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(_SimpleNode2.default, { data: this.props.data,
	                label: this.props.label,
	                children: this.props.children,
	                treeConfig: this.settings,
	                clickCallback: this.props.click });
	        }
	    }]);

	    return SimpleTree;
	}(_react2.default.Component);

	exports.default = SimpleTree;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpbXBsZVRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzBCQUVGOzthQUZFLEFBRUYsV0FBQSxBQUFZOzhCQUZWLEFBRWlCOzsyRUFGakIsdUJBRWlCLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLLFdBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFXLE1BQUEsQUFBSyxNQUFMLEFBQVcsV0FBUyx1QkFGM0MsQUFFQyxBQUNoQjtjQUFBLEFBQUssU0FBTCxBQUFjLGdCQUFnQixNQUFBLEFBQUssTUFIcEIsQUFHZSxBQUFXLEFBQ3pDO2NBQUEsQUFBSyxTQUFMLEFBQWMsbUJBQW1CLE1BQUEsQUFBSyxNQUp2QixBQUlrQixBQUFXLEFBQzVDO2NBQUEsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBTHZCLEFBS2YsQUFDQTtjQUFBLEFBQUssa0JBQWtCLE1BQUEsQUFBSyxnQkFBTCxBQUFxQixLQU43QixBQU1mO2VBTkosTUFBbUI7OztpQkFGakI7OztpQkFXaUIsQUFDaEIsQUFBSyxlQURXLEFBQ2hCOzs7O3VDQUdXLEFBQ1Y7aUJBQUEsQUFBSyxTQUFMLEFBQWMsWUFBZCxBQUEwQixtQkFBMUIsQUFBNkMsTUFBTSxLQUR6QyxBQUNWLEFBQW1ELEFBQUssQUFDeEQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsVUFBZCxBQUF3QixtQkFBeEIsQUFBMkMsTUFBTSxLQUZ2QyxBQUVWLEFBQWlELEFBQUssQUFDdEQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsVUFBZCxBQUF3QixtQkFBeEIsQUFBMkMsTUFBTSxLQUh2QyxBQUdWLEFBQWlELEFBQUssQUFDdEQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsa0JBQWQsQUFBZ0MsbUJBQWhDLEFBQW1ELE1BQU0sS0FKL0MsQUFJVixBQUF5RCxBQUFLLEFBQzlEO2lCQUFBLEFBQUssU0FBTCxBQUFjLGdCQUFkLEFBQThCLG1CQUE5QixBQUFpRCxNQUFNLEtBTDdDLEFBS1YsQUFBdUQsQUFBSzs7OzswQ0FHL0MsQUFDYjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxZQUFkLEFBQTBCLGVBQTFCLEFBQXlDLE1BQU0sS0FEbEMsQUFDYixBQUErQyxBQUFLLEFBQ3BEO2lCQUFBLEFBQUssU0FBTCxBQUFjLFVBQWQsQUFBd0IsZUFBeEIsQUFBdUMsTUFBTSxLQUZoQyxBQUViLEFBQTZDLEFBQUssQUFDbEQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsVUFBZCxBQUF3QixlQUF4QixBQUF1QyxNQUFNLEtBSGhDLEFBR2IsQUFBNkMsQUFBSyxBQUNsRDtpQkFBQSxBQUFLLFNBQUwsQUFBYyxrQkFBZCxBQUFnQyxlQUFoQyxBQUErQyxNQUFNLEtBSnhDLEFBSWIsQUFBcUQsQUFBSyxBQUMxRDtpQkFBQSxBQUFLLFNBQUwsQUFBYyxnQkFBZCxBQUE4QixlQUE5QixBQUE2QyxNQUFNLEtBTHRDLEFBS2IsQUFBbUQsQUFBSzs7Ozs7aUJBSXBDLEFBQ3BCLEFBQUssa0JBRGUsQUFDcEI7Ozs7aUNBSUssQUFDTDttQkFBUyxzREFBYSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsQUFDM0I7dUJBQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNsQjswQkFBVSxLQUFBLEFBQUssTUFBTCxBQUFXLEFBQ3JCOzRCQUFZLEtBQUEsQUFBSyxBQUNqQjsrQkFBZSxLQUFBLEFBQUssTUFMM0IsQUFDTCxBQUFTLEFBSWtCLEFBQVc7Ozs7V0ExQ3hDO0VBQW1CLGdCQUFBLEFBQU07O2tCQWdEaEIiLCJmaWxlIjoiU2ltcGxlVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW1wbGVOb2RlIGZyb20gXCIuL1NpbXBsZU5vZGVcIjtcbmltcG9ydCBTaW1wbGVUcmVlQ29uZmlnIGZyb20gXCIuL1NpbXBsZVRyZWVDb25maWdcIjtcblxuY2xhc3MgU2ltcGxlVHJlZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgU2ltcGxlVHJlZUNvbmZpZygpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsQWNjZXNzb3IgPSB0aGlzLnByb3BzLmxhYmVsO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuQWNjZXNzb3IgPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcyA9IHRoaXMuYWRkQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzID0gdGhpcy5yZW1vdmVDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mubm9kZVBhZGRpbmcuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm5vZGVTdHlsZS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGVhZlN0eWxlLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZWxlY3RlZExlYWZTdHlsZS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlTGVhZlN0eWxlLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5ub2RlUGFkZGluZy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5ub2RlU3R5bGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGVhZlN0eWxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNlbGVjdGVkTGVhZlN0eWxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZUxlYWZTdHlsZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKCA8U2ltcGxlTm9kZSAgZGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49e3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIHRyZWVDb25maWc9e3RoaXMuc2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2t9Lz5cbiAgICAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVRyZWU7XG4iXX0=

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

	var SimpleNode = function (_React$Component) {
	    _inherits(SimpleNode, _React$Component);

	    function SimpleNode(props) {
	        _classCallCheck(this, SimpleNode);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleNode).call(this, props));

	        Object.defineProperties(_this, {
	            "open": {
	                value: new weavejs.core.LinkableBoolean()
	            },
	            "active": {
	                value: new weavejs.core.LinkableBoolean()
	            }
	        });

	        _this.toggle = _this.toggle.bind(_this);
	        _this.renderChildren = _this.renderChildren.bind(_this);
	        _this.addCallbacks();
	        return _this;
	    }

	    _createClass(SimpleNode, [{
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.open.addImmediateCallback(this, this.forceUpdate);
	            this.active.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.open.removeCallback(this, this.forceUpdate);
	            this.active.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "toggle",
	        value: function toggle() {
	            this.open.value = !this.open.value;
	            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.open, this.active);
	            this.props.treeConfig.changeActiveNode(this);
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            if (this.props.data !== nextProps.data) {
	                //makes sure change in child node won't render this node
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "isNode",
	        value: function isNode() {
	            var nodes = this.props.treeConfig.getTreeNodes(this.props.data);
	            if (nodes && nodes.length > 0) return true; // node
	            else return false; // leaf
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren() {
	            var nodes = this.props.treeConfig.getTreeNodes(this.props.data);
	            var nodesUI = nodes.map(function (nodeData, index) {
	                return _react2.default.createElement(SimpleNode, { key: index,
	                    data: nodeData,
	                    treeConfig: this.props.treeConfig,
	                    clickCallback: this.props.clickCallback });
	            }.bind(this));

	            return nodesUI;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var branchUI = _react2.default.createElement("div", null);

	            if (this.props.data) {
	                var nodesUI = [];
	                if (this.open.state) {
	                    var nodesUI = this.renderChildren();
	                }

	                var label = this.props.treeConfig.getTreeLabel(this.props.data);
	                if (this.isNode()) {
	                    //Node

	                    var fontAwesomeNodeIcon = this.props.treeConfig.getIcon("node", this.open.state);
	                    var folderUI = _react2.default.createElement("span", { onClick: this.toggle }, _react2.default.createElement("i", { className: fontAwesomeNodeIcon }), " ", label);

	                    var nodePadding = this.props.treeConfig.nodePadding.state;
	                    branchUI = _react2.default.createElement("span", null, folderUI, _react2.default.createElement("ul", { style: { listStyleType: "none", paddingLeft: nodePadding } }, nodesUI));
	                } else {
	                    //leaf
	                    var fontAwesomeLeafIcon = this.props.treeConfig.getIcon("leaf", this.open.value);
	                    // this will return either normal/Active/Slected Style based on state of the leaf
	                    var leafStyle = this.props.treeConfig.getLeafStyle(this.open.value, this.active.value);
	                    branchUI = _react2.default.createElement("li", { style: leafStyle, onClick: this.toggle }, _react2.default.createElement("i", { className: fontAwesomeLeafIcon }), " ", label);
	                }
	            }

	            return branchUI;
	        }
	    }]);

	    return SimpleNode;
	}(_react2.default.Component);

	exports.default = SimpleNode;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpbXBsZU5vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTTswQkFFRjs7YUFGRSxBQUVGLFdBQUEsQUFBWTs4QkFGVixBQUVpQjs7MkVBRmpCLHVCQUVpQixBQUNULEFBRU47O2VBQUEsQUFBTyx3QkFBdUIsQUFDMUI7b0JBQVEsQUFDSjt1QkFBUSxJQUFJLFFBQUEsQUFBUSxLQUR4QixBQUNJLEFBQVksQUFBYSxBQUU3Qjs7c0JBQVUsQUFDTjt1QkFBTyxJQUFJLFFBQUEsQUFBUSxLQVJaLEFBR2YsQUFJSSxBQUNJLEFBQVcsQUFBYSxBQUloQzs7V0FaZTs7Y0FZZixBQUFLLFNBQVMsTUFBQSxBQUFLLE9BQUwsQUFBWSxLQVpYLEFBWWYsQUFDQTtjQUFBLEFBQUssaUJBQWlCLE1BQUEsQUFBSyxlQUFMLEFBQW9CLEtBYjNCLEFBYWYsQUFDQTtjQWRlLEFBY2YsQUFBSztlQWRUOzs7aUJBRkU7O3VDQW1CWSxBQUNWO2lCQUFBLEFBQUssS0FBTCxBQUFVLHFCQUFWLEFBQStCLE1BQU0sS0FEM0IsQUFDVixBQUFxQyxBQUFLLEFBQzFDO2lCQUFBLEFBQUssT0FBTCxBQUFZLHFCQUFaLEFBQWlDLE1BQU0sS0FGN0IsQUFFVixBQUF1QyxBQUFLOzs7OytDQUd4QixBQUNwQjtpQkFBQSxBQUFLLEtBQUwsQUFBVSxlQUFWLEFBQXlCLE1BQU0sS0FEWCxBQUNwQixBQUErQixBQUFLLEFBQ3BDO2lCQUFBLEFBQUssT0FBTCxBQUFZLGVBQVosQUFBMkIsTUFBTSxLQUZiLEFBRXBCLEFBQWlDLEFBQUs7Ozs7aUNBSWxDLEFBQ0o7aUJBQUEsQUFBSyxLQUFMLEFBQVUsUUFBUSxDQUFDLEtBQUEsQUFBSyxLQURwQixBQUNlLEFBQVUsQUFDN0I7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxlQUNWLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FBWCxBQUF5QixLQUF6QixBQUE4QixNQUFLLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBSyxLQUFBLEFBQUssTUFBSyxLQURqRSxBQUNJLEFBQTZELEFBQUssQUFDdEU7aUJBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixpQkFKbEIsQUFJSixBQUF1Qzs7Ozs4Q0FJckIsV0FBVSxBQUM1QjtnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsVUFBQSxBQUFVOzt1QkFBakMsQUFBc0MsQUFDbEMsQUFBTyxLQUQyQixBQUNsQzttQkFDQyxBQUNEO3VCQUhKLEFBRUssQUFDRCxBQUFPOzs7Ozs7Z0JBS1AsUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsYUFBYSxLQUFBLEFBQUssTUFEaEQsQUFDQSxBQUEyQyxBQUFXLEFBQzFEO2dCQUFHLFNBQVMsTUFBQSxBQUFNLFNBQU4sQUFBZSxHQUN2QixPQURKLEFBQ0ksQUFBTztpQkFFUCxPQUxBLEFBRUosQUFHSSxBQUFPO0FBTFAsQUFDSjs7OztnQkFRSSxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixhQUFhLEtBQUEsQUFBSyxNQUR4QyxBQUNSLEFBQTJDLEFBQVcsQUFDMUQ7Z0JBQUksZ0JBQVUsQUFBTSxjQUFJLEFBQVMsVUFBVCxBQUFrQixPQUFNLEFBQzVDO3VCQUFPLDhCQUFBLEFBQUMsY0FBVyxLQUFBLEFBQUssQUFDWjswQkFBQSxBQUFNLEFBQ047Z0NBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxBQUN2QjttQ0FBZSxLQUFBLEFBQUssTUFKWixBQUF3QixBQUM1QyxBQUFPLEFBR29CLEFBQVc7YUFKbEIsQ0FBQSxBQUt0QixLQVBVLEFBRVIsQUFBVSxBQUFVLEFBS2pCLEFBRVAsS0FQYyxFQUZGLEFBQ1o7O21CQURZLEFBU1osQUFBTzs7Ozs7Z0JBTUgsV0FBVyxxQ0FEVixBQUNELEFBRUo7O2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBSyxBQUNmO29CQUFJLFVBRFcsQUFDWCxBQUFVLEFBQ2Q7b0JBQUcsS0FBQSxBQUFLLEtBQUwsQUFBVSxPQUFNLEFBQ2Y7d0JBQUksVUFBVSxLQURsQixBQUFtQixBQUNYLEFBQVUsQUFBSyxBQUd2Qjs7O29CQUFJLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLGFBQWEsS0FBQSxBQUFLLE1BTnJDLEFBTVgsQUFBMkMsQUFBVyxBQUMxRDtvQkFBRyxLQUFILEFBQUcsQUFBSyxVQUFTLEFBRWI7Ozt3QkFBSSxzQkFBc0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLFFBQXRCLEFBQThCLFFBQU8sS0FBQSxBQUFLLEtBRnZELEFBRVQsQUFBMkQsQUFBVSxBQUN6RTt3QkFBSSxXQUFXLHdDQUFNLFNBQVMsS0FBZixBQUFlLEFBQUssVUFDZixxQ0FBRyxXQURSLEFBQ0ssQUFBRyxBQUFXLDZCQUpyQixBQUdULEFBQVcsQUFFWSxBQUczQjs7d0JBQUksY0FBYyxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsWUFSM0IsQUFRSyxBQUFrQyxBQUNwRDsrQkFBVyw0Q0FBQSxBQUNNLFVBQ0Qsc0NBQUksT0FBTyxFQUFDLGVBQUEsQUFBYyxRQUFPLGFBQWpDLEFBQUksQUFBNkIsQUFBWSxpQkFYakUsQUFBaUIsQUFTYixBQUFXLEFBRUssQUFDSzs7O3dCQUtqQixzQkFBc0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLFFBQXRCLEFBQThCLFFBQU8sS0FBQSxBQUFLLEtBRHBFLEFBQ0ksQUFBMkQsQUFBVTs7QUFEekUsQUFDQSx3QkFFSSxZQUFZLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixhQUFhLEtBQUEsQUFBSyxLQUFMLEFBQVUsT0FBTSxLQUFBLEFBQUssT0FIeEUsQUFHSSxBQUErRCxBQUFZLEFBQy9FOytCQUFXLHNDQUFJLE9BQUEsQUFBTyxXQUFXLFNBQVMsS0FBL0IsQUFBK0IsQUFBSyxVQUNuQyxxQ0FBRyxXQURKLEFBQ0MsQUFBRyxBQUFXLDZCQTVCbEMsQUFPSSxBQWdCSSxBQUlBLEFBQVcsQUFFUSxBQUszQjs7OzttQkFyQ0ssQUFxQ0wsQUFBUSxTQXJDSCxBQUNMOzs7O1dBckVGO0VBQW1CLGdCQUFBLEFBQU07O2tCQThHaEIiLCJmaWxlIjoiU2ltcGxlTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNpbXBsZU5vZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLmFjdGl2ZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHRvZ2dsZSgpe1xuICAgICAgICB0aGlzLm9wZW4udmFsdWUgPSAhdGhpcy5vcGVuLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLm9wZW4sdGhpcy5hY3RpdmUpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzKTtcbiAgICB9XG5cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKXsgLy9tYWtlcyBzdXJlIGNoYW5nZSBpbiBjaGlsZCBub2RlIHdvbid0IHJlbmRlciB0aGlzIG5vZGVcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaXNOb2RlKCl7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRUcmVlTm9kZXModGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgICAgaWYobm9kZXMgJiYgbm9kZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBub2RlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbGVhZlxuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRUcmVlTm9kZXModGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgICAgdmFyIG5vZGVzVUkgPSBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZURhdGEsaW5kZXgpe1xuICAgICAgICAgICAgcmV0dXJuIDxTaW1wbGVOb2RlIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtub2RlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVDb25maWc9e3RoaXMucHJvcHMudHJlZUNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30vPjtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gbm9kZXNVSTtcbiAgICB9XG5cbiAgICBcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGJyYW5jaFVJID0gPGRpdi8+O1xuXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB2YXIgbm9kZXNVSSA9IFtdO1xuICAgICAgICAgICAgaWYodGhpcy5vcGVuLnN0YXRlKXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXNVSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldFRyZWVMYWJlbCh0aGlzLnByb3BzLmRhdGEpO1xuICAgICAgICAgICAgaWYodGhpcy5pc05vZGUoKSl7IC8vTm9kZVxuXG4gICAgICAgICAgICAgICAgdmFyIGZvbnRBd2Vzb21lTm9kZUljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0SWNvbihcIm5vZGVcIix0aGlzLm9wZW4uc3RhdGUpO1xuICAgICAgICAgICAgICAgIHZhciBmb2xkZXJVSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Zm9udEF3ZXNvbWVOb2RlSWNvbn0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3tsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcblxuICAgICAgICAgICAgICAgIHZhciBub2RlUGFkZGluZyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy5zdGF0ZTtcbiAgICAgICAgICAgICAgICBicmFuY2hVSSA9IDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9sZGVyVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGU6XCJub25lXCIscGFkZGluZ0xlZnQ6bm9kZVBhZGRpbmd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNleyAvL2xlYWZcbiAgICAgICAgICAgICAgICB2YXIgZm9udEF3ZXNvbWVMZWFmSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRJY29uKFwibGVhZlwiLHRoaXMub3Blbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJldHVybiBlaXRoZXIgbm9ybWFsL0FjdGl2ZS9TbGVjdGVkIFN0eWxlIGJhc2VkIG9uIHN0YXRlIG9mIHRoZSBsZWFmXG4gICAgICAgICAgICAgICAgdmFyIGxlYWZTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRMZWFmU3R5bGUodGhpcy5vcGVuLnZhbHVlLHRoaXMuYWN0aXZlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmFuY2hVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmb250QXdlc29tZUxlYWZJY29ufSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3tsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChicmFuY2hVSSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZU5vZGU7XG4iXX0=

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

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _ModalConfig = __webpack_require__(22);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _ModalPanel = __webpack_require__(24);

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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _ModalPanelConfig = __webpack_require__(23);

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
/* 23 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

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

	var _ModalPanelConfig = __webpack_require__(23);

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

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _SplitPaneConfig = __webpack_require__(26);

	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

	var _Pane = __webpack_require__(28);

	var _Pane2 = _interopRequireDefault(_Pane);

	var _Resizer = __webpack_require__(29);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwbGl0UGFuZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTTTt5QkFFRjs7YUFGRSxBQUVGLFVBQUEsQUFBWTs4QkFGVixBQUVpQjs7MkVBRmpCLHNCQUVpQixBQUNULEFBQ047O2NBQUEsQUFBSyxXQUFXLE1BQUEsQUFBSyxNQUFMLEFBQVcsV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsc0JBRjdDLEFBRUMsQUFDaEI7Y0FBQSxBQUFLLGNBQWMsTUFBQSxBQUFLLFlBQUwsQUFBaUIsS0FIckIsQUFHZixBQUNBO2NBQUEsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBSnJCLEFBSWYsQUFDQTtjQUFBLEFBQUssWUFBWSxNQUFBLEFBQUssVUFBTCxBQUFlLEtBTGpCLEFBS2Y7ZUFMSixNQUFtQjs7O2lCQUZqQjs7O2lCQWFFLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsbUJBQXJCLEFBQXdDLE1BQU0sS0FEOUIsQUFDaEIsQUFBOEMsQUFBSyxBQUNuRDtpQkFBQSxBQUFLLFNBQUwsQUFBYyxRQUFkLEFBQXNCLG1CQUF0QixBQUF5QyxNQUFNLEtBRi9CLEFBRWhCLEFBQStDLEFBQUssQUFDcEQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsU0FBZCxBQUF1QixtQkFBdkIsQUFBMEMsTUFBTSxLQUhoQyxBQUdoQixBQUFnRCxBQUFLLEFBQ3JEO2lCQUFBLEFBQUssU0FBTCxBQUFjLGFBQWQsQUFBMkIscUJBQTNCLEFBQWdELE1BQU0sS0FKdEMsQUFJaEIsQUFBc0QsQUFBSyxBQUMzRDtxQkFBQSxBQUFTLGlCQUFULEFBQTBCLFdBQVcsS0FMckIsQUFLaEIsQUFBcUMsQUFBSyxBQUMxQztxQkFBQSxBQUFTLGlCQUFULEFBQTBCLGFBQWEsS0FOdkIsQUFNaEIsQUFBdUMsQUFBSyxBQUM1QztnQkFBTSxNQUFNLEtBQUEsQUFBSyxLQVBELEFBT0osQUFBVSxBQUN0QixNQVJnQixBQUNoQjtnQkFPSSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBZSxDQUFDLEtBQUEsQUFBSyxTQUFMLEFBQWMsUUFBZCxBQUFzQjtxQkFDeEQsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixLQUFwQixBQUF5QixRQUFRLEtBQUEsQUFBSyxNQUQxQyxBQUFtRSxBQUM5QixBQUFXOztBQURtQixBQUMvRDs7OzsrQ0FLZSxBQUNuQjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLGVBQXJCLEFBQW9DLE1BQU0sS0FEdkIsQUFDbkIsQUFBMEMsQUFBSyxBQUMvQztpQkFBQSxBQUFLLFNBQUwsQUFBYyxRQUFkLEFBQXNCLGVBQXRCLEFBQXFDLE1BQU0sS0FGeEIsQUFFbkIsQUFBMkMsQUFBSyxBQUNoRDtpQkFBQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCLGVBQXZCLEFBQXNDLE1BQU0sS0FIekIsQUFHbkIsQUFBNEMsQUFBSyxBQUNqRDtpQkFBQSxBQUFLLFNBQUwsQUFBYyxhQUFkLEFBQTJCLGVBQTNCLEFBQTBDLE1BQU0sS0FKN0IsQUFJbkIsQUFBZ0QsQUFBSyxBQUNyRDtxQkFBQSxBQUFTLG9CQUFULEFBQTZCLFdBQVcsS0FMckIsQUFLbkIsQUFBd0MsQUFBSyxBQUM3QztxQkFBQSxBQUFTLG9CQUFULEFBQTZCLGFBQWEsS0FOdkIsQUFNbkIsQUFBMEMsQUFBSzs7OztvQ0FLdkM7aUJBQ1IsQUFBSyxTQURVLEFBQ2YsQUFBYyxBQUNkLGdCQUZlLEFBQ2Y7Z0JBQ0ksV0FBVyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsYUFBYSxNQUFBLEFBQU0sVUFBVSxNQUZsRCxBQUVrRCxBQUFNLEFBQ3ZFO2lCQUFBLEFBQUssU0FBTCxBQUFjLFNBQWQsQUFBdUIsUUFIUixBQUdmLEFBQStCLEFBQy9CO2lCQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsUUFKTixBQUlmLEFBQTZCOzs7O29DQUdyQixPQUFPLEFBQ2Y7Z0JBQUksS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCO3FCQUNyQixBQUFLLFNBRHVCLEFBQzVCLEFBQWMsQUFDZDtvQkFBTSxNQUFNLEtBQUEsQUFBSyxLQUZXLEFBRWhCLEFBQVUsQUFDdEIsTUFINEIsQUFDNUI7b0JBRUEsQUFBSSxLQUFLLEFBQ0w7d0JBQU0sT0FBTyxtQkFBQSxBQUFTLFlBRGpCLEFBQ0MsQUFBTyxBQUFxQixBQUNsQzt3QkFBSSxLQUFBLEFBQUssdUJBQXVCLEFBQzVCOzRCQUFNLFFBQVEsS0FBQSxBQUFLLHdCQURTLEFBQ2QsQUFBNkIsQUFDM0M7NEJBQU0sU0FBUyxLQUFBLEFBQUssd0JBRlEsQUFFYixBQUE2QixBQUM1Qzs0QkFBTSxVQUFVLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixhQUFhLE1BQUEsQUFBTSxVQUFVLE1BSHRDLEFBR3NDLEFBQU0sQUFDeEU7NEJBQU0sT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsYUFBckIsQUFBa0MsUUFKbkIsQUFJZixBQUEwQyxBQUN2RDs0QkFBTSxXQUFXLEtBQUEsQUFBSyxTQUFMLEFBQWMsU0FMSCxBQUtYLEFBQXVCLEFBRXhDOzs0QkFBTSxVQUFVLFFBQVEsV0FQSSxBQU9aLEFBQVEsQUFBVyxBQUVuQzs7NkJBQUEsQUFBSyxTQUFMLEFBQWMsU0FBZCxBQUF1QixRQVRLLEFBUzVCLEFBQStCLEFBQy9COzZCQUFBLEFBQUssU0FBTCxBQUFjLFFBQWQsQUFBc0IsUUFWTSxBQVU1QixBQUE4QixBQUU5Qjs7NEJBQUksV0FBVyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsQUFDL0I7Z0NBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLEFBQ3JCO3FDQUFBLEFBQUssTUFBTCxBQUFXLFNBRGYsQUFBeUIsQUFDckIsQUFBb0IsQUFFeEI7O2lDQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsS0FBcEIsQUFBeUIsUUFyQnpDLEFBR0ksQUFFSSxBQVlJLEFBQW1DLEFBSS9CLEFBQWlDOzs7Ozs7OztvQ0FPekMsQUFDUjtnQkFBSSxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsT0FBTyxBQUM1QjtvQkFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLGdCQUFnQixBQUMzQjt5QkFBQSxBQUFLLE1BRFQsQUFBK0IsQUFDM0IsQUFBVyxBQUVmOztxQkFBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLFFBSnpCLEFBQWdDLEFBSTVCLEFBQTZCOzs7OztrQ0FJM0IsQUFDTjs7Z0JBQUksU0FBQSxBQUFTLFdBQVcsQUFDcEI7eUJBQUEsQUFBUyxVQURiLEFBQXdCLEFBQ3BCLEFBQW1CO21CQUNoQixBQUNIO3VCQUFBLEFBQU8sZUFIWCxBQUVPLEFBQ0gsQUFBc0I7Ozs7O2tEQUlKLFdBQVUsQUFDaEM7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLFVBQUEsQUFBVTtxQkFDaEMsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQixlQUFyQixBQUFvQyxNQUFNLEtBREQsQUFDekMsQUFBMEMsQUFBSyxBQUNoRDtxQkFBQSxBQUFLLFNBQUwsQUFBYyxRQUFkLEFBQXNCLGVBQXRCLEFBQXFDLE1BQU0sS0FGRCxBQUUxQyxBQUEyQyxBQUFLLEFBQ2hEO3FCQUFBLEFBQUssU0FBTCxBQUFjLFNBQWQsQUFBdUIsZUFBdkIsQUFBc0MsTUFBTSxLQUhGLEFBRzFDLEFBQTRDLEFBQUssQUFDakQ7cUJBQUEsQUFBSyxTQUFMLEFBQWMsYUFBZCxBQUEyQixlQUEzQixBQUEwQyxNQUFNLEtBSk4sQUFJMUMsQUFBZ0QsQUFBSyxBQUNyRDtxQkFBQSxBQUFLLFdBQVcsVUFMMEIsQUFLMUIsQUFBVSxBQUMxQixTQU4wQyxBQUN6QztxQkFLRCxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLG1CQUFyQixBQUF3QyxNQUFNLEtBTkosQUFNMUMsQUFBOEMsQUFBSyxBQUNuRDtxQkFBQSxBQUFLLFNBQUwsQUFBYyxRQUFkLEFBQXNCLG1CQUF0QixBQUF5QyxNQUFNLEtBUEwsQUFPMUMsQUFBK0MsQUFBSyxBQUNwRDtxQkFBQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCLG1CQUF2QixBQUEwQyxNQUFNLEtBUk4sQUFRMUMsQUFBZ0QsQUFBSyxBQUNyRDtxQkFBQSxBQUFLLFNBQUwsQUFBYyxhQUFkLEFBQTJCLHFCQUEzQixBQUFnRCxNQUFNLEtBVDFELEFBQThDLEFBUzFDLEFBQXNELEFBQUs7Ozs7OztnQkFLekQsUUFBUSxLQUFBLEFBQUssTUFEZCxBQUNTLEFBQVcsQUFFekI7OzJDQUFlLEFBQU0sbUJBQW1CLEFBQ3BDO3lCQUFBLEFBQVMsQUFDVDtzQkFBQSxBQUFNLEFBQ047MEJBQUEsQUFBVSxBQUNWO3lCQUFBLEFBQVMsQUFDVDswQkFBQSxBQUFVLEFBQ1Y7K0JBQUEsQUFBZSxBQUNmO2tDQUFBLEFBQWtCLEFBQ2xCOzhCQUFBLEFBQWMsQUFDZDs0QkFaQyxBQUdELEFBQVcsQUFTWCxBQUFZLEFBR2hCO2FBWmUsQ0FBWCxDQUhDLEFBQ0w7O2dCQWNJLFVBQUEsQUFBVTtnQ0FDVixBQUFNLGtCQUFOLEFBQXdCLFVBQVUsQUFDOUI7bUNBQUEsQUFBZSxBQUNmOzRCQUFBLEFBQVEsQUFDUjs4QkFBQSxBQUFVLEFBQ1Y7MEJBQUEsQUFBTSxBQUNOOzJCQUxKLEFBS0ksQUFBTzttQkFOZixBQUEwQixBQUN0QixBQU1HLE1BUG1CLEFBQ3RCO21CQU9HLEFBQ0g7Z0NBQUEsQUFBTSxrQkFBTixBQUF3QixVQUFVLEFBQzlCO21DQUFBLEFBQWUsQUFDZjs0QkFBQSxBQUFRLEFBQ1I7K0JBQUEsQUFBVyxBQUNYOzhCQUFBLEFBQVUsQUFDVjt5QkFBQSxBQUFLLEFBQ0w7NEJBQUEsQUFBUSxBQUNSOzJCQVBKLEFBT0ksQUFBTzttQkFoQmYsQUFRTyxBQUNILEFBUUcsQUFFUDs7Z0JBQU0sV0FBVyxLQUFBLEFBQUssTUFsQ2pCLEFBa0NZLEFBQVcsQUFFNUI7O2dCQUFNLFVBQVUsQ0FBQSxBQUFDLGFBcENaLEFBb0NDLEFBQVUsQUFBYyxBQUU5Qjs7MERBQWUsV0FDUCxRQUFBLEFBQVEsS0FERCxBQUNQLEFBQWEsQUFFakI7dUJBQUEsQUFDSSxBQUVKO3FCQU5LLEFBTUwsQUFBTSxlQUNOLGdEQUFPLEtBQUEsQUFBTSxBQUNiO3FCQUFBLEFBQU0sQUFDTjt1QkFBQSxBQUNJLEFBRUo7MEJBQ0ksS0FBQSxBQUFLLFNBTlQsQUFNSSxBQUFjLGNBRWQsU0FSSixBQVFJLEFBQVMsSUFmUiw4REFnQmdCLEtBQUEsQUFBTSxBQUMzQjtxQkFBQSxBQUFNLEFBQ047NkJBQ0ksS0FBQSxBQUFLLEFBRVQ7dUJBckJLLEFBZ0JNLEFBS1gsQUFDSTthQU5PLENBaEJOLE9Bd0JGLGdEQUFPLEtBQUEsQUFBTSxBQUNoQjtxQkFBQSxBQUFNLEFBQ047dUJBQUEsQUFDSSxBQUVKOzBCQUNJLEtBQUEsQUFBSyxTQU5OLEFBTUMsQUFBYyxjQUVkLFNBUkQsQUFRQyxBQUFTLElBaENSLE1BdENKLEFBc0NMOzs7O1dBOUlGO0VBQWtCLGdCQUFBLEFBQU07O0FBb0w5QixVQUFBLEFBQVUsZUFBZSxBQUNyQjthQUFBLEFBQVMsQUFDVDtXQUZKLEFBRUksQUFBTzs7O2tCQUdJIiwiZmlsZSI6IlNwbGl0UGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IFNwbGl0UGFuZUNvbmZpZyBmcm9tIFwiLi9TcGxpdFBhbmVDb25maWdcIjtcbmltcG9ydCBQYW5lIGZyb20gJy4vUGFuZSc7XG5pbXBvcnQgUmVzaXplciBmcm9tICcuL1Jlc2l6ZXInO1xuXG4vL2NvZGUgbG9naWMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdG9ta3AvcmVhY3Qtc3BsaXQtcGFuZVxuXG5jbGFzcyBTcGxpdFBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3MgOiBuZXcgU3BsaXRQYW5lQ29uZmlnKCk7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudW5Gb2N1c0NvdW50LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMudW5Gb2N1cyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICBjb25zdCByZWYgPSB0aGlzLnJlZnMucGFuZTE7XG4gICAgICAgIGlmIChyZWYgJiYgdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZSAmJiAhdGhpcy5zZXR0aW5ncy5yZXNpemVkLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhbmUxLnNpemUudmFsdWUgPSB0aGlzLnByb3BzLmRlZmF1bHRTaXplO1xuICAgICAgICAgICAgLy9yZWYuc2V0U2Vzc2lvblN0YXRlKCB0aGlzLnByb3BzLmRlZmF1bHRTaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVuRm9jdXNDb3VudC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLnVuRm9jdXMpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICB9XG5cblxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy51cGRhdGVVbkZvY3VzKCk7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyBldmVudC5jbGllbnRYIDogZXZlbnQuY2xpZW50WTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnVwZGF0ZVVuRm9jdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMucmVmcy5wYW5lMTtcbiAgICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUocmVmKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyBldmVudC5jbGllbnRYIDogZXZlbnQuY2xpZW50WTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyB3aWR0aCA6IGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NpemUgPSBzaXplIC0gKHBvc2l0aW9uIC0gY3VycmVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmVzaXplZC52YWx1ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1NpemUgPj0gdGhpcy5wcm9wcy5taW5TaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhbmUxLnNpemUudmFsdWUgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwKCkge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ0ZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuRm9jdXMoKSB7IC8vIG5lZWQgdG8gYmUgY2FsbGVkIGNoYW5nZSBvZiBzZXNzaW9uIHZhbHVlIHNvIHRoYXQgd2UgY2FuIHNlZSB0aGVtIGluIHNlc3Npb24gTG9nXG4gICAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2l6ZWQucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy51bkZvY3VzQ291bnQucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy51bkZvY3VzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2l6ZWQuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnVuRm9jdXNDb3VudC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVuRm9jdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG5cbiAgICAgICAgbGV0IHN0eWxlT2JqID0gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIE1velVzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgIFdlYmtpdFVzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgIG1zVXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICAgICAgdXNlclNlbGVjdDogJ3RleHQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzcGxpdCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMoc3R5bGVPYmosIHtcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKHN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsnU3BsaXRQYW5lJywgc3BsaXRdO1xuXG4gICAgICAgIHJldHVybiAoIDwgZGl2IGNsYXNzTmFtZSA9IHtcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmpvaW4oJyAnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmpcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZiA9IFwic3BsaXRQYW5lXCIgPlxuICAgICAgICAgICAgPCBQYW5lIHJlZiA9IFwicGFuZTFcIlxuICAgICAgICAgICAga2V5ID0gXCJwYW5lMVwiXG4gICAgICAgICAgICBzcGxpdCA9IHtcbiAgICAgICAgICAgICAgICBzcGxpdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYW5lMVxuICAgICAgICAgICAgfSA+IHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXVxuICAgICAgICAgICAgfSA8IC9QYW5lPiA8IFJlc2l6ZXIgcmVmID0gXCJyZXNpemVyXCJcbiAgICAgICAgICAgIGtleSA9IFwicmVzaXplclwiXG4gICAgICAgICAgICBvbk1vdXNlRG93biA9IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGxpdCA9IHtcbiAgICAgICAgICAgICAgICBzcGxpdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz4gPCBQYW5lIHJlZiA9IFwicGFuZTJcIlxuICAgICAgICAgICAga2V5ID0gXCJwYW5lMlwiXG4gICAgICAgICAgICBzcGxpdCA9IHtcbiAgICAgICAgICAgICAgICBzcGxpdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYW5lMlxuICAgICAgICAgICAgfSA+IHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblsxXVxuICAgICAgICAgICAgfSA8IC9QYW5lPiA8IC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TcGxpdFBhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgIG1pblNpemU6IDAsXG4gICAgc3BsaXQ6IFwidmVydGljYWxcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BsaXRQYW5lO1xuIl19

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _PaneConfig = __webpack_require__(27);

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
/* 27 */
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

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _PaneConfig = __webpack_require__(27);

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

	var _Style = __webpack_require__(8);

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

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Brand = __webpack_require__(31);

	var _Brand2 = _interopRequireDefault(_Brand);

	var _Logo = __webpack_require__(33);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _Title = __webpack_require__(34);

	var _Title2 = _interopRequireDefault(_Title);

	var _List = __webpack_require__(35);

	var _List2 = _interopRequireDefault(_List);

	var _Form = __webpack_require__(37);

	var _Form2 = _interopRequireDefault(_Form);

	var _Link = __webpack_require__(36);

	var _Link2 = _interopRequireDefault(_Link);

	var _HTMLWrapper = __webpack_require__(32);

	var _HTMLWrapper2 = _interopRequireDefault(_HTMLWrapper);

	var _Config = __webpack_require__(38);

	var _Config2 = _interopRequireDefault(_Config);

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	var _PropsManager = __webpack_require__(16);

	var _PropsManager2 = _interopRequireDefault(_PropsManager);

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

	        if (_App2.default.debug) console.log("Navbar constructor");

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _Config2.default.Navbar();
	        _this.getStyle = _this.getStyle.bind(_this);

	        _this.renderChildren = _this.renderChildren.bind(_this);
	        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
	        _App2.default.addForceUpdateToCallbacks(_this);
	        _this.propsManager = new _PropsManager2.default();
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
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            if (_App2.default.debug) console.log("Navbar componentWillUnmount");
	            _App2.default.removeForceUpdateFromCallbacks(this);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (_App2.default.debug) console.log("Navbar componentWillReceiveProps");
	            _App2.default.componentWillReceiveProps(this, nextProps);
	        }

	        // weavestate change directly calls forceUpdate, so no need to use Weave.detectChange

	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate() {
	            if (_App2.default.debug) console.log("Navbar shouldComponentUpdate");
	            // default return true
	            return false; // this ensures parent render wont render the navbar
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren() {
	            this.propsManager.addNewProps("dock", this.settings.dock.value);
	            this.propsManager.addNewProps("useCSS", this.settings.useCSS.value);
	            return _App2.default.renderChildren(this, this.propsManager);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_App2.default.debug) console.log("Navbar ---Render---");
	            var styleObj = this.getStyle();
	            var cssName = this.settings.CSS.getCSSFor();
	            var childrenUI = this.renderChildren();

	            if (this.settings.useCSS.value) {
	                return _react2.default.createElement("nav", { className: cssName }, childrenUI);
	            } else {
	                return _react2.default.createElement("nav", { className: cssName, style: styleObj }, childrenUI);
	            }
	        }
	    }]);

	    return Navbar;
	}(_react2.default.Component);

	Navbar.Brand = _Brand2.default;
	Navbar.Logo = _Logo2.default;
	Navbar.Title = _Title2.default;
	Navbar.List = _List2.default;
	Navbar.Link = _Link2.default;
	Navbar.Form = _Form2.default;

	_App2.default.registerToolConfig(Navbar, _Config2.default.Navbar);
	_App2.default.registerToolConfig(Navbar.Brand, _Config2.default.Brand);
	_App2.default.registerToolConfig(Navbar.Logo, _Config2.default.Logo);
	_App2.default.registerToolConfig(Navbar.Title, _Config2.default.Title);
	_App2.default.registerToolConfig(Navbar.List, _Config2.default.List);
	_App2.default.registerToolConfig(Navbar.Link, _Config2.default.Link);
	_App2.default.registerToolConfig(Navbar.Form, _Config2.default.Form);

	_App2.default.registerToolImplementation("weavereact.navbarConfig.Navbar", Navbar);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Brand", Navbar.Brand);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Logo", Navbar.Logo);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Title", Navbar.Title);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.List", Navbar.List);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Link", Navbar.Link);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Form", Navbar.Form);

	Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

	exports.default = Navbar;
	//# sourceMappingURL=data:application/json;base64,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QSxBQUFPLE1BQUssaUJBQW5DLEFBQW1DLEFBQWE7QUFDaEQsY0FBQSxBQUFJLG1CQUFtQixPQUFBLEFBQU8sTUFBSyxpQkFBbkMsQUFBbUMsQUFBYTtBQUNoRCxjQUFBLEFBQUksbUJBQW1CLE9BQUEsQUFBTyxNQUFLLGlCQUFuQyxBQUFtQyxBQUFhOztBQUVoRCxjQUFBLEFBQUksMkJBQUosQUFBK0Isa0NBQS9CLEFBQWdFO0FBQ2hFLGNBQUEsQUFBSSwyQkFBSixBQUErQixpQ0FBZ0MsT0FBL0QsQUFBK0QsQUFBTztBQUN0RSxjQUFBLEFBQUksMkJBQUosQUFBK0IsZ0NBQStCLE9BQTlELEFBQThELEFBQU87QUFDckUsY0FBQSxBQUFJLDJCQUFKLEFBQStCLGlDQUFnQyxPQUEvRCxBQUErRCxBQUFPO0FBQ3RFLGNBQUEsQUFBSSwyQkFBSixBQUErQixnQ0FBK0IsT0FBOUQsQUFBOEQsQUFBTztBQUNyRSxjQUFBLEFBQUksMkJBQUosQUFBK0IsZ0NBQStCLE9BQTlELEFBQThELEFBQU87QUFDckUsY0FBQSxBQUFJLDJCQUFKLEFBQStCLGdDQUErQixPQUE5RCxBQUE4RCxBQUFPOztBQUVyRSxNQUFBLEFBQU0sY0FBTixBQUFvQixxQkFBcEIsQUFBeUMsUUFBTyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBN0QsQUFBaUQsQUFBaUI7O2tCQUVuRCIsImZpbGUiOiJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgQnJhbmQgZnJvbSBcIi4vQnJhbmRcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IEhUTUxXcmFwcGVyIGZyb20gXCIuLi9IVE1MV3JhcHBlclwiO1xuaW1wb3J0IG5hdmJhckNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IFByb3BzTWFuYWdlciBmcm9tIFwiLi4vUHJvcHNNYW5hZ2VyXCI7XG5cblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIk5hdmJhciBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3MgOiBuZXcgbmF2YmFyQ29uZmlnLk5hdmJhcigpO1xuICAgICAgICB0aGlzLmdldFN0eWxlID0gdGhpcy5nZXRTdHlsZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG4gICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgQXBwLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3ModGhpcyk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyID0gIG5ldyBQcm9wc01hbmFnZXIoKTtcbiAgICB9XG5cbiAgICAgZ2V0U3R5bGUoKSB7XG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbClcbiAgICAgICAgIGlmKHN0eWxlT2JqZWN0W1wicG9zaXRpb25cIl0gPT09IFwiZml4ZWRcIil7XG4gICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcInRvcFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcInRvcFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJib3R0b21cIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJib3R0b21cIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwicmlnaHRcIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJyaWdodFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiNSVcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJsZWZ0XCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wibGVmdFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiNSVcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdCk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIk5hdmJhciBjb21wb25lbnRXaWxsVW5tb3VudFwiKTtcbiAgICAgICAgQXBwLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyh0aGlzKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTmF2YmFyIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIik7XG4gICAgICAgIEFwcC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHRoaXMsbmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICAvLyB3ZWF2ZXN0YXRlIGNoYW5nZSBkaXJlY3RseSBjYWxscyBmb3JjZVVwZGF0ZSwgc28gbm8gbmVlZCB0byB1c2UgV2VhdmUuZGV0ZWN0Q2hhbmdlXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIk5hdmJhciBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG4gICAgICAgIC8vIGRlZmF1bHQgcmV0dXJuIHRydWVcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyB0aGlzIGVuc3VyZXMgcGFyZW50IHJlbmRlciB3b250IHJlbmRlciB0aGUgbmF2YmFyXG4gICAgfVxuXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJkb2NrXCIsdGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlKTtcbiAgICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwidXNlQ1NTXCIsdGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWUpO1xuICAgICAgICAgcmV0dXJuIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLHRoaXMucHJvcHNNYW5hZ2VyKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTmF2YmFyIC0tLVJlbmRlci0tLVwiKTtcbiAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZSl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9ian0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5OYXZiYXIuQnJhbmQgPSBCcmFuZDtcbk5hdmJhci5Mb2dvID0gTG9nbztcbk5hdmJhci5UaXRsZSA9IFRpdGxlO1xuTmF2YmFyLkxpc3QgPSBMaXN0O1xuTmF2YmFyLkxpbmsgPSBMaW5rO1xuTmF2YmFyLkZvcm0gPSBGb3JtO1xuXG5cbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLG5hdmJhckNvbmZpZy5OYXZiYXIpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuQnJhbmQsbmF2YmFyQ29uZmlnLkJyYW5kKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxvZ28sbmF2YmFyQ29uZmlnLkxvZ28pO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuVGl0bGUsbmF2YmFyQ29uZmlnLlRpdGxlKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxpc3QsbmF2YmFyQ29uZmlnLkxpc3QpO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTGluayxuYXZiYXJDb25maWcuTGluayk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5Gb3JtLG5hdmJhckNvbmZpZy5Gb3JtKTtcblxuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTmF2YmFyXCIsTmF2YmFyKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkJyYW5kXCIsTmF2YmFyLkJyYW5kKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxvZ29cIixOYXZiYXIuTG9nbyk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5UaXRsZVwiLE5hdmJhci5UaXRsZSk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaXN0XCIsTmF2YmFyLkxpc3QpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGlua1wiLE5hdmJhci5MaW5rKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkZvcm1cIixOYXZiYXIuRm9ybSk7XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lk5hdmJhclwiLCBOYXZiYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cblxuXG5cbiJdfQ==

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

	var _HTMLWrapper = __webpack_require__(32);

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

	                    BrandUI = _react2.default.createElement("div", { className: this.props.className }, childrenUI);
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
	//# sourceMappingURL=data:application/json;base64,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SyxTQUFMLEFBQWMsT0FBZCxBQUFxQjs7Ozs7OztvQkFRaEIsYUFSc0IsQUFRdEIsQUFBYSxBQUNqQixHQVQwQixBQVExQjtvQkFDRyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQU8sQUFDakI7aUNBQWEsS0FBQSxBQUFLLGVBQWUsS0FBQSxBQUFLLE1BRHJCLEFBQ2pCLEFBQWlDLEFBQVcsQUFFNUM7OzhCQUFVLHVDQUFLLFdBQVcsS0FBQSxBQUFLLE1BQXJCLEFBQWdCLEFBQVcsYUFIekMsQUFBcUIsQUFHakIsQUFBVSxBQUNHO3VCQUVaLEFBQ0Q7d0JBQUksY0FBYyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsWUFBcEIsQUFBZ0MsTUFEakQsQUFDRyxBQUFjLEFBQXFDLEFBQ3ZEO2lDQUFhLEtBQUEsQUFBSyxlQUZqQixBQUVELEFBQWEsQUFBb0IsQUFDakM7OEJBQVUsdUNBQUssT0FBTCxBQUFLLEFBQU8sZUFsQjlCLEFBU0ksQUFNSyxBQUdELEFBQVUsQUFDRyxBQUtyQjs7O21CQTNCSyxBQTJCTCxBQUFRLFFBM0JILEFBQ0w7Ozs7V0FoSEY7RUFBYyxnQkFBQSxBQUFNOztBQTZJMUIsTUFBQSxBQUFNLGNBQU4sQUFBb0IsMkJBQXBCLEFBQStDLE9BQU0sQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQWxFLEFBQXNELEFBQWlCO2tCQUN4RCIsImZpbGUiOiJCcmFuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIVE1MV3JhcHBlciBmcm9tIFwiLi4vSFRNTFdyYXBwZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuXG5jbGFzcyBCcmFuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICB0aGlzLmxhbmdTZXR0aW5ncyA9ICh0aGlzLnByb3BzICYmIHRoaXMucHJvcHMubGFuZ1NldHRpbmdzKT90aGlzLnByb3BzLmxhbmdTZXR0aW5nczpudWxsO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuKUFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MgPSB0aGlzLmFkZENhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcyA9IHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnN0eWxlKXRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihuZXh0UHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIGlmKHRoaXMubGFuZ1NldHRpbmdzKXRoaXMubGFuZ1NldHRpbmdzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIC8vdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cbiAgICByZW1vdmVDYWxsYmFja3MgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBpZih0aGlzLmxhbmdTZXR0aW5ncyl0aGlzLmxhbmdTZXR0aW5ncy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAvL3RoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgIH1cblxuXG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51c2VDU1MgIT09IG5leHRQcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oQ1NTKXtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBjaGlsZENvbmZpZ3MubWFwKGZ1bmN0aW9uKGNoaWxkQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcblxuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IEFwcC5tZXJnZUludG8oe30sY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8SFRNTFdyYXBwZXIga2V5PXtjb25maWdOYW1lfSBzZXR0aW5ncz17Y2hpbGRDb25maWd9PntjaGlsZH08L0hUTUxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInNldHRpbmdzXCJdID0gY2hpbGRDb25maWc7XG4gICAgICAgICAgICAgICAgICAgIGlmKENTUyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImNsYXNzTmFtZVwiXSA9IENTU1tjaGlsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJDU1NcIl0gPSBDU1M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5oYXMoY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5kZWxldGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkQ2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KGNsb25lZENoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBXZWF2ZS5nZXRQYXRoKGNoaWxkQ29uZmlnKS5nZXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9ICBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9ICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZCA9IDxUb29sQ2xhc3Mga2V5PXtjb25maWdOYW1lfSAgc2V0dGluZ3M9e2NoaWxkQ29uZmlnfS8+O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChuZXdDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcblxuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBCcmFuZFVJID0gPGRpdi8+O1xuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIC8qdmFyIHRpdGxlID0gdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZTtcblxuICAgICAgICAgICAgdmFyIHRpdGxlU3R5bGUgID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRpdGxlID0gQXBwLmdldFRyYW5zbGF0ZWRXb3JkKHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWUpO1xuICAgICAgICAgICAgfSovXG5cbiAgICAgICAgICAgIHZhciBjaGlsZHJlblVJID0gW11cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbih0aGlzLnByb3BzLmNzcyk7XG5cbiAgICAgICAgICAgICAgICBCcmFuZFVJID0gPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4obnVsbCk7XG4gICAgICAgICAgICAgICAgQnJhbmRVSSA9IDxkaXYgc3R5bGU9e3N0eWxlT2JqZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKEJyYW5kVUkpO1xuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5CcmFuZFwiLCBCcmFuZCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IEJyYW5kO1xuIl19

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

	var _Style = __webpack_require__(8);

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

	            return _react2.default.createElement("div", { style: this.props.style }, childrenUI);
	        }
	    }]);

	    return HTMLWrapper;
	}(_react2.default.Component);

	_App2.default.registerToolConfig(HTMLWrapper, _HTMLWrapperConfig2.default);
	_App2.default.registerToolImplementation("weavereact.HTMLWrapperConfig", HTMLWrapper);

	Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper, [weavejs.api.core.ILinkableObject]);

	exports.default = HTMLWrapper;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007MkJBRUY7O2FBRkUsQUFFRixZQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQix3QkFFaUIsQUFDVCxBQUNOOztjQUFBLEFBQUssV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFTLHdCQUYzQyxBQUVDLEFBQ2hCO2NBQUEsQUFBSyxpQkFBaUIsTUFBQSxBQUFLLGVBQUwsQUFBb0IsS0FIM0IsQUFHZjtlQUhKLE1BQW1COzs7aUJBRmpCOzs0Q0FRaUIsQUFDZjtrQkFBQSxBQUFNLGFBQWEsS0FBbkIsQUFBbUIsQUFBSyxVQUF4QixBQUFrQyxtQkFBbEMsQUFBcUQsTUFBSyxLQUQzQyxBQUNmLEFBQTBELEFBQUs7Ozs7K0NBRzNDLEFBQ25CO2tCQUFBLEFBQU0sYUFBYSxLQUFuQixBQUFtQixBQUFLLFVBQXhCLEFBQWtDLGVBQWxDLEFBQWlELE1BQUssS0FEbkMsQUFDbkIsQUFBc0QsQUFBSzs7Ozt1Q0FHakQ7Z0JBQ1AsaUNBQWlCLEFBQU0sU0FBTixBQUFlLElBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxvQkFBUyxBQUFTLE9BQVQsQUFBZTtvQkFDbkUsWUFEeUUsQUFDekUsQUFBWSxBQUNoQixHQUY2RSxBQUM3RTtvQkFDSSxRQUFRLGNBQUEsQUFBSSxVQUFKLEFBQWMsSUFBRyxNQUZnRCxBQUV6RSxBQUF5QixBQUFNLEFBQ25DO29CQUFHLE9BQU8sTUFBQSxBQUFNLFNBQWIsQUFBdUI7Z0NBQ1QsTUFBQSxBQUFNLE9BRFksQUFDbEIsQUFBYSxBQUMxQixNQUYrQixBQUMvQjt3QkFDQSxBQUFHLEtBQUksQUFDSDs4QkFBQSxBQUFNLGVBQWUsS0FBQSxBQUFLLE1BRDlCLEFBQU8sQUFDa0IsQUFBVzsyQkFFaEMsQUFDQTs0QkFBSSxjQUFjLEtBQUEsQUFBSyxTQUR2QixBQUNrQixBQUFjLEFBQ2hDOzRCQUFJLGNBQWMsWUFBQSxBQUFZLFlBQVosQUFBd0IsTUFGMUMsQUFFSSxBQUFjLEFBQTZCLEFBQy9DOzhCQUFBLEFBQU0sV0FBVyxNQUFBLEFBQU0sTUFBTixBQUFZLFFBQVEsZ0JBQUEsQUFBTyxrQkFBUCxBQUF5QixhQUFZLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBckUsQUFBb0IsQUFBdUQsUUFScEcsQUFFSSxBQUdJLEFBR2lCLEFBQWtGLEFBRzNHOzs7dUJBQU8sZ0JBQUEsQUFBTSxhQUFOLEFBQW1CLE9BZDhCLEFBQXFCLEFBYzdFLEFBQU8sQUFBeUI7YUFkd0IsRUFEN0MsQUFDWCxBQUFpQixBQWVuQixBQUNGLElBaEJxQixFQUROLEFBQ2Y7bUJBRGUsQUFpQmYsQUFBTzs7Ozs7Z0JBSUgsYUFEQyxBQUNELEFBQWEsQUFDakIsR0FGSyxBQUNMO2dCQUNHLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBTyxBQUNqQjs2QkFBYSxLQUFBLEFBQUssZUFBZSxLQUFBLEFBQUssTUFEMUMsQUFBcUIsQUFDakIsQUFBaUMsQUFBVzttQkFDM0MsQUFDRDs2QkFBYSxLQUFBLEFBQUssZUFIdEIsQUFFSyxBQUNELEFBQWEsQUFBb0IsQUFHckM7OzttQkFBUSx1Q0FBSyxPQUFPLEtBQUEsQUFBSyxNQUFqQixBQUFZLEFBQVcsU0FSMUIsQUFRTCxBQUFRLEFBQ0s7Ozs7V0E3Q2Y7RUFBb0IsZ0JBQUEsQUFBTTs7QUFtRGhDLGNBQUEsQUFBSSxtQkFBSixBQUF1QjtBQUN2QixjQUFBLEFBQUksMkJBQUosQUFBK0IsZ0NBQS9CLEFBQThEOztBQUU5RCxNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsYUFBWSxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBdkUsQUFBMkQsQUFBaUI7O2tCQUU3RCIsImZpbGUiOiJIVE1MV3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXJDb25maWcgZnJvbSBcIi4uL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcblxuY2xhc3MgSFRNTFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IEhUTUxXcmFwcGVyQ29uZmlnKCk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKENTUyl7XG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLGZ1bmN0aW9uKGNoaWxkLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZE5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIHByb3BzID0gQXBwLm1lcmdlSW50byh7fSxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgIGNoaWxkTmFtZSA9ICBjaGlsZC50eXBlICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgaWYoQ1NTKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gc3R5bGVDb25maWcuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKVxuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInN0eWxlXCJdID0gY2hpbGQucHJvcHMuc3R5bGUgPyBTdHlsZXMubWVyZ2VTdHlsZU9iamVjdHMoc3R5bGVPYmplY3QsY2hpbGQucHJvcHMuc3R5bGUsdHJ1ZSk6IHN0eWxlT2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICB9LHRoaXMpO1xuICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IFtdO1xuICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbih0aGlzLnByb3BzLkNTUyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4obnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgfVxufVxuXG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKEhUTUxXcmFwcGVyLEhUTUxXcmFwcGVyQ29uZmlnKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuSFRNTFdyYXBwZXJDb25maWdcIixIVE1MV3JhcHBlcik7XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LkhUTUxXcmFwcGVyXCIsIEhUTUxXcmFwcGVyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBIVE1MV3JhcHBlcjtcbiJdfQ==

/***/ },
/* 33 */
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
/* 34 */
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

	var Title = function (_React$Component) {
	    _inherits(Title, _React$Component);

	    function Title(props) {
	        _classCallCheck(this, Title);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Title).call(this, props));

	        _this.settings = _this.props.settings;
	        if (_this.props.style) _this.settings.style.domDefined.state = _this.props.style;
	        if (_this.props.title) _this.settings.title.state = _this.props.title;
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        return _this;
	    }

	    _createClass(Title, [{
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
	            if (this.props.title !== nextProps.title) {
	                // user style added through UI is Sessioned
	                if (nextProps.title) this.settings.title.state = nextProps.title;
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
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            this.settings.title.removeCallback(this, this.forceUpdate);
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
	            } else if (this.props.title !== nextProps.title) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var titleUI = _react2.default.createElement("div", null);

	            if (this.settings.enable.value) {

	                var styleObj = this.settings.style.getStyleFor();
	                titleUI = _react2.default.createElement("span", { style: styleObj }, " ", this.settings.title.value);
	            }
	            return titleUI;
	        }
	    }]);

	    return Title;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.Title", Title, [weavejs.api.core.ILinkableObject]);
	exports.default = Title;
	//# sourceMappingURL=data:application/json;base64,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RDthQURFLFVBRUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFXLFVBQUEsQUFBVTt1QkFBbkMsQUFBMEMsQUFDNUMsQUFBTyxLQURxQyxBQUM1QzthQURFLFVBRUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLFVBQUEsQUFBVTt1QkFBbEMsQUFBd0MsQUFDMUMsQUFBTyxLQURtQyxBQUMxQzthQURFLE1BRUQsQUFDRDt1QkFIRSxBQUVELEFBQ0QsQUFBTzs7Ozs7O2dCQU1QLFVBQVUscUNBRFQsQUFDRCxBQUVKOztnQkFBRyxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsT0FBTSxBQUV0Qjs7b0JBQUksV0FBVyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BRlAsQUFFbEIsQUFBVyxBQUFvQixBQUNuQzswQkFBVSx3Q0FBTSxPQUFOLEFBQU0sQUFBTyxpQkFBWSxLQUFBLEFBQUssU0FBTCxBQUFjLE1BSHpELEFBQThCLEFBR3RCLEFBQW1DLEFBQW9CLEFBRy9EOzttQkFUSyxBQVNMLEFBQVEsUUFUSCxBQUNMOzs7O1dBdkVGO0VBQWMsZ0JBQUEsQUFBTTs7QUFrRjFCLE1BQUEsQUFBTSxjQUFOLEFBQW9CLDJCQUFwQixBQUErQyxPQUFNLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFsRSxBQUFzRCxBQUFpQjtrQkFDeEQiLCJmaWxlIjoiVGl0bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcblxuY2xhc3MgVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSlcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IHRoaXMucHJvcHMuc3R5bGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudGl0bGUpXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnN0YXRlID0gIHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnN0eWxlKXRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy50aXRsZSl0aGlzLnNldHRpbmdzLnRpdGxlLnN0YXRlID0gbmV4dFByb3BzLnRpdGxlO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIGFkZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrcyAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVzZUNTUyAhPT0gbmV4dFByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRpdGxlVUkgPSA8ZGl2Lz47XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgICAgIHRpdGxlVUkgPSA8c3BhbiBzdHlsZT17c3R5bGVPYmp9PiB7dGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZX08L3NwYW4+XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRpdGxlVUkpO1xuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5UaXRsZVwiLCBUaXRsZSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIl19

/***/ },
/* 35 */
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

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Link = __webpack_require__(36);

	var _Link2 = _interopRequireDefault(_Link);

	var _PropsManager = __webpack_require__(16);

	var _PropsManager2 = _interopRequireDefault(_PropsManager);

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
	        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
	        _App2.default.addForceUpdateToCallbacks(_this);
	        _this.propsManager = new _PropsManager2.default();
	        if (_App2.default.debug) console.log("List - constructor");
	        return _this;
	    }

	    _createClass(List, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (_App2.default.debug) console.log("List - componentWillReceiveProps");
	            _App2.default.componentWillReceiveProps(this, nextProps);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            if (_App2.default.debug) console.log("List - componentWillUnmount");
	            _App2.default.removeForceUpdateFromCallbacks(this);
	        }

	        // called only when React Parent render is called

	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            if (_App2.default.debug) console.log("List - shouldComponentUpdate");
	            if (this.props.dock !== nextProps.dock) {
	                if (_App2.default.debug) console.log("props.dock changed");
	                return true;
	            } else if (this.props.position !== nextProps.position) {
	                if (_App2.default.debug) console.log("props.position changed");
	                return true;
	            } else if (this.props.useCSS !== nextProps.useCSS) {
	                if (_App2.default.debug) console.log("props.useCSS changed");
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren() {

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

	            this.propsManager.addNewProps("iconOnly", iconOnly);
	            this.propsManager.updateStyle(linkStyleObject);
	            this.propsManager.addKeyProps("pageName");
	            this.propsManager.addOddChild(this.settings.activePage.value, { isActive: "true" });
	            return _App2.default.renderChildren(this, this.propsManager);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_App2.default.debug) console.log("List - render");
	            var navLinks = _react2.default.createElement("div", null);
	            if (this.settings.enable.value) {
	                var styleObject = this.settings.style.getStyleFor(null, true);
	                var cssName = this.settings.CSS.getCSSFor();
	                var childrenUI = this.renderChildren();
	                if (this.props.useCSS) {
	                    navLinks = _react2.default.createElement("ul", { className: cssName }, childrenUI);
	                } else {
	                    navLinks = _react2.default.createElement("ul", { className: cssName, style: styleObject }, childrenUI);
	                }
	            }
	            return navLinks;
	        }
	    }]);

	    return List;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.List", List, [weavejs.api.core.ILinkableObject]);
	exports.default = List;
	//# sourceMappingURL=data:application/json;base64,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bEQsQUFpQlosQUFBOEQsQUFBUyxBQUN2RTttQkFBUSxjQUFBLEFBQUksZUFBSixBQUFtQixNQUFLLEtBbEJwQixBQWtCWixBQUFnQyxBQUFLOzs7OztnQkFLbEMsY0FBQSxBQUFJLE9BQU0sUUFBQSxBQUFRLElBQXJCLEFBQWEsQUFBWSxBQUN6QjtnQkFBSSxXQUFXLHFDQUZWLEFBRUQsQUFDSjtnQkFBRyxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsT0FBTSxBQUMxQjtvQkFBSSxjQUFjLEtBQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixZQUFwQixBQUFnQyxNQUR4QixBQUN0QixBQUFjLEFBQXFDLEFBQ3ZEO29CQUFJLFVBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxJQUZGLEFBRXRCLEFBQVUsQUFBa0IsQUFDaEM7b0JBQUksYUFBYSxLQUhTLEFBR3RCLEFBQWEsQUFBSyxBQUN0QjtvQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQU8sQUFDakI7K0JBQVcsc0NBQUksV0FBSixBQUFJLEFBQVcsV0FEOUIsQUFBcUIsQUFDakIsQUFBVyxBQUF5Qjt1QkFFcEMsQUFDQTsrQkFBVyxzQ0FBSSxXQUFBLEFBQVcsU0FBUyxPQUF4QixBQUF3QixBQUFPLGVBUmxELEFBSUksQUFHSSxBQUNBLEFBQVcsQUFBNkMsQUFHaEU7OzttQkFkSyxBQWNMLEFBQVEsU0FkSCxBQUNMOzs7O1dBbEVGO0VBQWEsZ0JBQUEsQUFBTTs7QUFtRnpCLE1BQUEsQUFBTSxjQUFOLEFBQW9CLDBCQUFwQixBQUE4QyxNQUFLLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFoRSxBQUFvRCxBQUFpQjtrQkFDdEQiLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcbmltcG9ydCBQcm9wc01hbmFnZXIgZnJvbSBcIi4uL1Byb3BzTWFuYWdlclwiO1xuXG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIEFwcC5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlciA9IG5ldyBQcm9wc01hbmFnZXIoKTtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTGlzdCAtIGNvbnN0cnVjdG9yXCIpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwiTGlzdCAtIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIik7XG4gICAgICAgIEFwcC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHRoaXMsbmV4dFByb3BzKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcIkxpc3QgLSBjb21wb25lbnRXaWxsVW5tb3VudFwiKTtcbiAgICAgICAgIEFwcC5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3ModGhpcyk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIG9ubHkgd2hlbiBSZWFjdCBQYXJlbnQgcmVuZGVyIGlzIGNhbGxlZFxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJMaXN0IC0gc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIGlmKEFwcC5kZWJ1Zyljb25zb2xlLmxvZyhcInByb3BzLmRvY2sgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJwcm9wcy5wb3NpdGlvbiBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51c2VDU1MgIT09IG5leHRQcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgaWYoQXBwLmRlYnVnKWNvbnNvbGUubG9nKFwicHJvcHMudXNlQ1NTIGNoYW5nZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuXG4gICAgICAgIHZhciBsaW5rU3R5bGVPYmplY3Q9e307XG4gICAgICAgIHZhciBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICB2YXIgc3BhY2UgPSB0aGlzLnNldHRpbmdzLnNwYWNlLnZhbHVlO1xuICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInJpZ2h0XCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwibGVmdFwiKSl7XG4gICAgICAgICAgICBpY29uT25seSA9IHRydWU7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwidG9wXCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwiYm90dG9tXCIpKXtcbiAgICAgICAgICAgIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IHNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJpY29uT25seVwiLGljb25Pbmx5KTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIudXBkYXRlU3R5bGUobGlua1N0eWxlT2JqZWN0KTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkS2V5UHJvcHMoXCJwYWdlTmFtZVwiKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkT2RkQ2hpbGQodGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnZhbHVlLHtpc0FjdGl2ZTpcInRydWVcIn0pO1xuICAgICAgICByZXR1cm4gIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLHRoaXMucHJvcHNNYW5hZ2VyKVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihBcHAuZGVidWcpY29uc29sZS5sb2coXCJMaXN0IC0gcmVuZGVyXCIpO1xuICAgICAgICB2YXIgbmF2TGlua3MgPSA8ZGl2Lz47XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKTtcbiAgICAgICAgICAgIHZhciBjc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5DU1MuZ2V0Q1NTRm9yKCk7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBjbGFzc05hbWU9e2Nzc05hbWV9PntjaGlsZHJlblVJfTwvdWw+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2NoaWxkcmVuVUl9PC91bD47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuYXZMaW5rcyk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTGlzdFwiLCBMaXN0LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiJdfQ==

/***/ },
/* 36 */
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

	                return _react2.default.createElement("li", { style: this.props.style }, _react2.default.createElement("a", { style: styleObject, href: '#' + title.toLowerCase() }, _react2.default.createElement("i", { className: this.settings.iconName.value }, " "), title));
	            } else {
	                return _react2.default.createElement("li", { style: this.props.style }, _react2.default.createElement("a", { style: styleObject, href: '#' + title.toLowerCase() }, _react2.default.createElement("i", { className: this.settings.iconName.value }, " "), title));
	            }
	        }
	    }]);

	    return Link;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.Link", Link, [weavejs.api.core.ILinkableObject]);
	exports.default = Link;
	//# sourceMappingURL=data:application/json;base64,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TyxhQUFhLE1BQVEsTUFBTSxNQUFyQyxBQUErQixBQUFNLEFBQU0saUJBQ3ZDLHFDQUFHLFdBQWEsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUE5QixBQUFnQixBQUF1QixTQUQzQyxNQVhoQixBQVNPLEFBQ0gsQUFBUSxBQUNJLEFBRUs7Ozs7O1dBbEV2QjtFQUFhLGdCQUFBLEFBQU07O0FBeUV6QixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsTUFBSyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBaEUsQUFBb0QsQUFBaUI7a0JBQ3REIiwiZmlsZSI6IkxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MgPSB0aGlzLmFkZENhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcyA9IHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cbiAgICByZW1vdmVDYWxsYmFja3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc3R5bGUpdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmljb25Pbmx5KXtcbiAgICAgICAgICAgIHRpdGxlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSlcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcblxuICAgICAgICAgICAgcmV0dXJuICggPGxpIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtzdHlsZU9iamVjdH0gaHJlZiA9IHsnIycgKyB0aXRsZS50b0xvd2VyQ2FzZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSB7dGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZX0+IDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8bGkgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3N0eWxlT2JqZWN0fSBocmVmID0geycjJyArIHRpdGxlLnRvTG93ZXJDYXNlKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTGlua1wiLCBMaW5rLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdfQ==

/***/ },
/* 37 */
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

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _PropsManager = __webpack_require__(16);

	var _PropsManager2 = _interopRequireDefault(_PropsManager);

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

	        _this.settings = _this.props.settings;_App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        _this.propsManager = new _PropsManager2.default();

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
	            this.settings.addGapAt.addImmediateCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
	            this.settings.space.removeCallback(this, this.forceUpdate);
	            this.settings.addGapAt.removeCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren() {
	            var childStyleObject = {};
	            var space = this.settings.space.value;
	            if (this.props.dock === "right" || this.props.dock === "left") {
	                childStyleObject["marginBottom"] = space;
	            } else if (this.props.dock === "top" || this.props.dock === "bottom") {
	                childStyleObject["marginRight"] = space;
	            }

	            this.propsManager.updateStyle(childStyleObject);
	            this.propsManager.addKeyProps("pageName");
	            return _App2.default.renderChildren(this, this.propsManager);
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
	            var navFormUI = _react2.default.createElement("div", null);
	            if (this.settings.enable.value) {
	                var styleObject = this.settings.style.getStyleFor(null);
	                var cssName = this.settings.CSS.getCSSFor();
	                var childrenUI = this.renderChildren();

	                if (this.props.useCSS) {
	                    navFormUI = _react2.default.createElement("div", { className: cssName }, childrenUI);
	                } else {
	                    navFormUI = _react2.default.createElement("div", { style: styleObject }, childrenUI);
	                }
	            }

	            return navFormUI;
	        }
	    }]);

	    return Form;
	}(_react2.default.Component);

	Weave.registerClass('weavereact.navbar.Form', Form, [weavejs.api.core.ILinkableObject]);

	exports.default = Form;
	//# sourceMappingURL=data:application/json;base64,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TUFBTCxBQUFXLFdBQVcsVUFBQSxBQUFVO3VCQUFuQyxBQUEwQyxBQUM1QyxBQUFPLEtBRHFDLEFBQzVDO2FBREUsTUFFRCxBQUNEO3VCQUhFLEFBRUQsQUFDRCxBQUFPOzs7Ozs7Z0JBVVAsWUFBWSxxQ0FEWCxBQUNELEFBQ0o7Z0JBQUcsS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLE9BQU0sQUFDMUI7b0JBQUksY0FBYyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsWUFEWixBQUN0QixBQUFjLEFBQWdDLEFBQ2xEO29CQUFJLFVBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxJQUZGLEFBRXRCLEFBQVUsQUFBa0IsQUFDaEM7b0JBQUksYUFBYSxLQUhTLEFBR3RCLEFBQWEsQUFBSyxBQUV0Qjs7b0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFPLEFBQ2pCO2dDQUFZLHVDQUFNLFdBQU4sQUFBTSxBQUFXLFdBRGpDLEFBQXFCLEFBQ2pCLEFBQVksQUFDSzt1QkFFaEIsQUFDRDtnQ0FBWSx1Q0FBTSxPQUFOLEFBQU0sQUFBTyxlQVZqQyxBQUtJLEFBSUssQUFDRCxBQUFZLEFBQ0ssQUFPekI7Ozs7bUJBcEJLLEFBb0JMLEFBQVEsVUFwQkgsQUFDTDs7OztXQXhGRjtFQUFhLGdCQUFBLEFBQU07O0FBZ0h6QixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsTUFBSyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBaEUsQUFBb0QsQUFBaUI7O2tCQUV0RCIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgUHJvcHNNYW5hZ2VyIGZyb20gXCIuLi9Qcm9wc01hbmFnZXJcIjtcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzOyBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlciA9ICBuZXcgUHJvcHNNYW5hZ2VyKClcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc3R5bGUpdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbil7XG4gICAgICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hZGRHYXBBdC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWRkR2FwQXQucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdmFyIGNoaWxkU3R5bGVPYmplY3Q9e307XG4gICAgICAgIHZhciBzcGFjZSA9IHRoaXMuc2V0dGluZ3Muc3BhY2UudmFsdWU7XG4gICAgICAgIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwicmlnaHRcIikgfHwgKHRoaXMucHJvcHMuZG9jayA9PT0gXCJsZWZ0XCIpKXtcbiAgICAgICAgICAgIGNoaWxkU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwidG9wXCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwiYm90dG9tXCIpKXtcbiAgICAgICAgICAgIGNoaWxkU3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IHNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIudXBkYXRlU3R5bGUoY2hpbGRTdHlsZU9iamVjdCk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZEtleVByb3BzKFwicGFnZU5hbWVcIik7XG4gICAgICAgICByZXR1cm4gQXBwLnJlbmRlckNoaWxkcmVuKHRoaXMsdGhpcy5wcm9wc01hbmFnZXIpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVzZUNTUyAhPT0gbmV4dFByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBuYXZGb3JtVUkgPSA8ZGl2Lz47XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbCk7XG4gICAgICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICBuYXZGb3JtVUkgPSA8ZGl2ICBjbGFzc05hbWU9e2Nzc05hbWV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBuYXZGb3JtVUkgPSA8ZGl2ICBzdHlsZT17c3R5bGVPYmplY3R9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChuYXZGb3JtVUkpO1xuICAgIH1cblxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhci5Gb3JtJywgRm9ybSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdfQ==

/***/ },
/* 38 */
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

	var _Brand = __webpack_require__(31);

	var _Brand2 = _interopRequireDefault(_Brand);

	var _List = __webpack_require__(35);

	var _List2 = _interopRequireDefault(_List);

	var _Form = __webpack_require__(37);

	var _Form2 = _interopRequireDefault(_Form);

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	var _CSS = __webpack_require__(39);

	var _CSS2 = _interopRequireDefault(_CSS);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

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
	            value: Weave.linkableChild(this, new _CSS2.default())
	        },
	        children: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	        },
	        "addGapAt": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
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
	    this.style.padding.state = { padding: "4px" };
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
	        "CSS": {
	            value: Weave.linkableChild(this, new _CSS2.default())
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
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new _CSS2.default())
	        }
	    });

	    this.style.border.state = {
	        border: "2px solid #ebebeb",
	        borderRadius: "50%"
	    };
	    this.style.other.state = {
	        width: "50",
	        height: "50"
	    };
	};

	var TitleConfig = function TitleConfig() {
	    _classCallCheck(this, TitleConfig);

	    Object.defineProperties(this, {
	        "enable": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	        },
	        title: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        },
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new _CSS2.default())
	        }
	    });

	    this.style.font.state = {
	        lineHeight: "20px",
	        fontSize: "18px"
	    };
	};

	var ListConfig = function () {
	    function ListConfig() {
	        _classCallCheck(this, ListConfig);

	        Object.defineProperties(this, {
	            "style": {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            "CSS": {
	                value: Weave.linkableChild(this, new _CSS2.default())
	            },
	            "enable": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	            },
	            "align": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
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

	        this.align.addImmediateCallback(this, this.updateStyle);
	    }

	    _createClass(ListConfig, [{
	        key: "updateStyle",
	        value: function updateStyle() {
	            _Style2.default.alignChildren(this.style, this.align.state);
	        }
	    }]);

	    return ListConfig;
	}();

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
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new _CSS2.default())
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
	        "addGapAt": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
	        },
	        "space": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new _CSS2.default())
	        }
	    });

	    this.childConfigMap = new Map();
	    this.configChildMap = new Map();
	    //this.addGapAt.state = 0;
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
	navbarConfig.Title = TitleConfig;
	navbarConfig.List = ListConfig;
	navbarConfig.Link = LinkConfig;
	navbarConfig.Form = FormConfig;

	//This Function makes this class as SessionClass
	Weave.registerClass('weavereact.navbarConfig.Navbar', navbarConfig.Navbar, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Brand', navbarConfig.Brand, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Logo', navbarConfig.Logo, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Title', navbarConfig.Title, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.List', navbarConfig.List, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Link', navbarConfig.Link, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Form', navbarConfig.Form, [weavejs.api.core.ILinkableObject]);
	//# sourceMappingURL=data:application/json;base64,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ImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnJhbmQgZnJvbSBcIi4vQnJhbmRcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENTUyBmcm9tIFwiLi4vLi4vY29uZmlncy9DU1NcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcblxuY2xhc3MgTmF2Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFkZEdhcEF0XCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkb2NrXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJ0b3BcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cblxuICAgICAgICAvL2luaXRpYWwgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgdGhpcy5DU1Muc3RhdGUgPSB7XG4gICAgICAgICAgICBuYXZiYXI6XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcIixcbiAgICAgICAgICAgIGJyYW5kOntcbiAgICAgICAgICAgICAgICBoZWFkZXI6XCJuYXZiYXItaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6XCJuYXZiYXItYnJhbmRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3Q6XCJuYXYgbmF2YmFyLW5hdlwiLFxuICAgICAgICAgICAgZm9ybTpcIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFwiXG4gICAgICAgIH07XG5cblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3JkZXIuc3RhdGUgPSB7Ym9yZGVyOlwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCJ9O1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgZmxleDpcIjFcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjclXCIsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6XCI1MHB4XCIsXG4gICAgICAgICAgICB6SW5kZXg6IFwiMTAwMFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nLnN0YXRlID0ge3BhZGRpbmc6XCI0cHhcIn07XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZC5zdGF0ZSA9IFwiI0Y4RjhGOFwiO1xuICAgIH1cblxuXG59XG5cblxuY2xhc3MgQnJhbmRDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWRkaW5nOlwiMTVweCAxNXB4XCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZS5mb250LnN0YXRlID0ge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbmNsYXNzIExvZ29Db25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcmM6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgQ1NTKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuYm9yZGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgYm9yZGVyOlwiMnB4IHNvbGlkICNlYmViZWJcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czpcIjUwJVwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDpcIjUwXCIsXG4gICAgICAgICAgICBoZWlnaHQ6XCI1MFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5jbGFzcyBUaXRsZUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgdGhpcy5zdHlsZS5mb250LnN0YXRlID0ge1xuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICBmb250U2l6ZTpcIjE4cHhcIlxuICAgICAgICB9O1xuXG4gICAgfVxufVxuXG5cblxuY2xhc3MgTGlzdENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImxlZnRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVQYWdlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzcGFjZVwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZU51bWJlcig4KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBsaXN0U3R5bGVUeXBlOlwibm9uZVwiLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6XCIwXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdHlsZS5tYXJnaW4uc3RhdGUgPSB7XG4gICAgICAgICAgICBtYXJnaW46XCI3LjVweFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hbGlnbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMudXBkYXRlU3R5bGUpO1xuXG4gICAgfVxuXG5cbiAgICB1cGRhdGVTdHlsZSgpe1xuICAgICAgICBTdHlsZS5hbGlnbkNoaWxkcmVuKHRoaXMuc3R5bGUsdGhpcy5hbGlnbi5zdGF0ZSk7XG4gICAgfVxufVxuXG5cbmNsYXNzIExpbmtDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJMaW5rXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk5hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1ob21lXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVMaW5rU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLmZvbnQuc3RhdGUgPSB7XG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgIGNvbG9yOlwiIzc3N1wiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBGb3JtQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFkZEdhcEF0XCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNwYWNlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiMnB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgQ1NTKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vdGhpcy5hZGRHYXBBdC5zdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImluaGVyaXRcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJpbmhlcml0XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0eWxlLm1hcmdpbi5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1hcmdpbjpcIjRweFwiLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5jb25zdCBuYXZiYXJDb25maWcgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IG5hdmJhckNvbmZpZ1xuXG5uYXZiYXJDb25maWcuTmF2YmFyID0gTmF2Q29uZmlnO1xubmF2YmFyQ29uZmlnLkJyYW5kID0gQnJhbmRDb25maWc7XG5uYXZiYXJDb25maWcuTG9nbyA9IExvZ29Db25maWc7XG5uYXZiYXJDb25maWcuVGl0bGUgPSBUaXRsZUNvbmZpZztcbm5hdmJhckNvbmZpZy5MaXN0ID0gTGlzdENvbmZpZztcbm5hdmJhckNvbmZpZy5MaW5rID0gTGlua0NvbmZpZztcbm5hdmJhckNvbmZpZy5Gb3JtID0gRm9ybUNvbmZpZztcblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5OYXZiYXInLCBuYXZiYXJDb25maWcuTmF2YmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuQnJhbmQnLCBuYXZiYXJDb25maWcuQnJhbmQsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5Mb2dvJywgbmF2YmFyQ29uZmlnLkxvZ28sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5UaXRsZScsIG5hdmJhckNvbmZpZy5UaXRsZSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpc3QnLCBuYXZiYXJDb25maWcuTGlzdCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpbmsnLCBuYXZiYXJDb25maWcuTGluayxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkZvcm0nLCBuYXZiYXJDb25maWcuRm9ybSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuIl19

/***/ },
/* 39 */
/***/ function(module, exports) {

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

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var CSS = function () {
	    function CSS() {
	        _classCallCheck(this, CSS);

	        Object.defineProperties(this, {
	            "className": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            },
	            "classObject": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            }
	        });
	    }

	    _createClass(CSS, [{
	        key: "getCSSFor",
	        value: function getCSSFor(property) {
	            if (property) return this.cssObject.state[property];else {
	                return this.className.state;
	            }
	        }
	    }]);

	    return CSS;
	}();

	Weave.registerClass('weavereact.CSS', CSS, [weavejs.api.core.ILinkableObject]);

	exports.default = CSS;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNTUy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUVNLEFBQ0Y7OEJBREUsQUFDVyxBQUVSOztlQUFBLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMzQjt5QkFBYSxBQUNUO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFFdEQ7OzJCQUFlLEFBQ1g7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQVB6RCxBQUFhLEFBRVIsQUFJRyxBQUNJLEFBQU8sQUFBOEIsQUFBYTs7V0FQakQ7OztpQkFEWDs7a0NBY1EsVUFBUyxBQUNmO2dCQUFBLEFBQUcsVUFDQyxPQUFPLEtBQUEsQUFBSyxVQUFMLEFBQWUsTUFEMUIsQUFDSSxBQUFPLEFBQXFCO3VCQUVyQixLQUFBLEFBQUssVUFIaEIsQUFFSSxBQUNPLEFBQWUsTUFEdEIsQUFDQTs7O1FBakJSOztXQURFO0dBQUE7O0FBdUJOLE1BQUEsQUFBTSxjQUFOLEFBQW9CLGtCQUFwQixBQUFzQyxLQUFJLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUF2RCxBQUEyQyxBQUFpQjs7a0JBRTdDIiwiZmlsZSI6IkNTUy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBDU1N7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNsYXNzT2JqZWN0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBnZXRDU1NGb3IocHJvcGVydHkpe1xuICAgICAgICBpZihwcm9wZXJ0eSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNzc09iamVjdC5zdGF0ZVtwcm9wZXJ0eV07XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGFzc05hbWUuc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuQ1NTJywgQ1NTLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBDU1M7XG4iXX0=

/***/ },
/* 40 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 41 */
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
/* 42 */
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
