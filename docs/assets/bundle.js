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
	
	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_index2.default.setDebug(true);
	window.demo = {};
	window.demo.App = _App2.default;
	window.demo.init = function (container) {
	    _reactDom2.default.render(React.createElement(_App2.default, null), document.getElementById(container));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxnQkFBVyxRQUFYLENBQW9CLElBQXBCO0FBQ0EsT0FBTyxJQUFQLEdBQWEsRUFBYjtBQUNBLE9BQU8sSUFBUCxDQUFZLEdBQVo7QUFDQSxPQUFPLElBQVAsQ0FBWSxJQUFaLEdBQW1CLFVBQVUsU0FBVixFQUFxQjtBQUNwQyx1QkFBUyxNQUFULENBQWlCLHdDQUFqQixFQUEwQixTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBMUIsRUFEb0M7Q0FBckIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVSZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuaW1wb3J0IHdlYXZlcmVhY3QgZnJvbSBcIi4uLy4uL2xpYi9pbmRleC5qc1wiO1xuXG53ZWF2ZXJlYWN0LnNldERlYnVnKHRydWUpO1xud2luZG93LmRlbW8gPXt9O1xud2luZG93LmRlbW8uQXBwID0gQXBwO1xud2luZG93LmRlbW8uaW5pdCA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoIDxBcHAvPiAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcikpO1xufVxuXG5cbiJdfQ==

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
	
	var _index = __webpack_require__(4);
	
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

	        _this.sessionConfigDashdoard = new _index.SessionEditorConfig();
	        _this.sessionConfigWeave = new _index.SessionEditorConfig();
	
	        _this.navConfig = window.dbweave.root.requestObject('navbar', _index.navbarConfig.Navbar);

	        var brandConfig = _this.navConfig.children.requestObject('', _index.navbarConfig.Brand);

	        var logoConfig = brandConfig.children.requestObject('', _index.navbarConfig.Logo);
	        logoConfig.src.state = "./images/logo.png";

	        var titleConfig = brandConfig.children.requestObject('', _index.navbarConfig.Title);
	        titleConfig.title.state = "Brand";

	        _this.sideBarContainerConfig = window.dbweave.root.requestObject('sideBarContainer', _index.sideBarContainerConfig.Container);
	        _this.sideBarContainerConfig.rightSideBar.visible.state = false;
	        _this.sideBarContainerConfig.topSideBar.visible.state = false;
	        _this.sideBarContainerConfig.bottomSideBar.visible.state = false;
	        var sideBar = _this.sideBarContainerConfig.leftSideBar;

	        //this.accordionConfig = window.dbweave.root.requestObject('accordion',AccordionConfig);
	        var accordionConfig = sideBar.children.requestObject('accordion', _index.AccordionConfig);

	        _this.treeConfig = accordionConfig.children.requestObject('tree', _index.TreeConfig);

	        _this.treeConfig.nodePadding.value = "16px";
	        _this.treeConfig.align.value = "right";
	        _this.treeConfig.treeIconState.state = {
	            "nodeDefault": "fa fa-caret-right",
	            "nodeOpen": "fa fa-caret-down",
	            "leafDefault": "fa fa-square-o",
	            "leafOpen": "fa fa-check-square-o"
	        };
	        _this.treeConfig.enableDataTypeIcon.value = false;
	        _this.treeConfig.allowMultipleSelection.value = true;

	        _this.treeConfig.leafStyle.state = {
	            paddingTop: "8px",
	            paddingBottom: "8px"
	        };
	        _this.treeConfig.rootStyle.state = {
	            textTransform: "uppercase",
	            color: "#5d5d5d"
	        };
	        _this.treeConfig.nodeStyle.state = {
	            paddingTop: "8px",
	            paddingBottom: "8px"
	        };

	        _this.treeConfig.rootNode.open.state = true;
	
	        _this.tree = {
	            "label": "Components",
	            "icon": "./images/Components.png",
	            "children": [{
	                "label": "Navbar",
	                "children": [{
	                    "label": "Brand",
	                    "children": []
	                }, {
	                    "label": "Title",
	                    "children": []
	                }, {
	                    "label": "List",
	                    "children": []
	                }, {
	                    "label": "Link",
	                    "children": []
	                }, {
	                    "label": "Form",
	                    "children": []
	                }]
	            }, {
	                "label": "Accordion",
	                "children": []
	            }]
	        };
	
	        _this.treeConfig.props.addNewProps("data", _this.tree);
	        _this.treeConfig.props.addNewProps("settings", _this.treeConfig);
	        _this.treeConfig.props.addNewProps("label", "label");
	        _this.treeConfig.props.addNewProps("icon", "icon");
	        _this.treeConfig.props.addNewProps("nodes", "children");

	        _this.treeConfig = accordionConfig.children.requestObject('tree2', _index.TreeConfig);
	        _this.treeConfig.nodePadding.value = "16px";
	        _this.treeConfig.align.value = "right";
	        _this.treeConfig.treeIconState.state = {
	            "nodeDefault": "fa fa-caret-right",
	            "nodeOpen": "fa fa-caret-down",
	            "leafDefault": "fa fa-square-o",
	            "leafOpen": "fa fa-check-square-o"
	        };
	        _this.treeConfig.enableDataTypeIcon.value = false;
	        _this.treeConfig.allowMultipleSelection.value = true;

	        _this.treeConfig.leafStyle.state = {
	            paddingTop: "8px",
	            paddingBottom: "8px"
	        };

	        _this.treeConfig.rootStyle.state = {
	            textTransform: "uppercase",
	            color: "#5d5d5d"
	        };

	        _this.treeConfig.nodeStyle.state = {
	            paddingTop: "8px",
	            paddingBottom: "8px"
	        };

	        _this.treeConfig.rootNode.open.state = true;

	        _this.tree = {
	            "label": "Big",
	            "icon": "./images/Components.png",
	            "children": [{
	                "label": "Navbar",
	                "children": [{
	                    "label": "Brand",
	                    "children": []
	                }]
	            }, {
	                "label": "Tab",
	                "children": []
	            }]
	        };

	        _this.treeConfig.props.addNewProps("data", _this.tree);
	        _this.treeConfig.props.addNewProps("settings", _this.treeConfig);
	        _this.treeConfig.props.addNewProps("label", "label");
	        _this.treeConfig.props.addNewProps("icon", "icon");
	        _this.treeConfig.props.addNewProps("nodes", "children");

	        _this.treeConfig = accordionConfig.children.requestObject('tree3', _index.TreeConfig);
	        _this.treeConfig.nodePadding.value = "16px";
	        _this.treeConfig.align.value = "right";
	        _this.treeConfig.treeIconState.state = {
	            "nodeDefault": "fa fa-caret-right",
	            "nodeOpen": "fa fa-caret-down",
	            "leafDefault": "fa fa-square-o",
	            "leafOpen": "fa fa-check-square-o"
	        };
	        _this.treeConfig.enableDataTypeIcon.value = false;
	        _this.treeConfig.allowMultipleSelection.value = true;

	        _this.treeConfig.leafStyle.state = {
	            paddingTop: "8px",
	            paddingBottom: "8px"
	        };
	        _this.treeConfig.rootStyle.state = {
	            textTransform: "uppercase",
	            color: "#5d5d5d"
	        };
	        _this.treeConfig.nodeStyle.state = {
	            paddingTop: "8px",
	            paddingBottom: "8px"
	        };

	        _this.treeConfig.rootNode.open.state = true;

	        _this.tree = {
	            "label": "small",
	            "icon": "./images/Components.png",
	            "children": [{
	                "label": "accord",
	                "children": []
	            }, {
	                "label": "Tab",
	                "children": []
	            }]
	        };

	        _this.treeConfig.props.addNewProps("data", _this.tree);
	        _this.treeConfig.props.addNewProps("settings", _this.treeConfig);
	        _this.treeConfig.props.addNewProps("label", "label");
	        _this.treeConfig.props.addNewProps("icon", "icon");
	        _this.treeConfig.props.addNewProps("nodes", "children");

	        sideBar.visible.state = true;
	        sideBar.open.state = false;
	        sideBar.static.state = true;

	        return _this;
	    }
	
	    _createClass(App, [{
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
	            ReactDOM.render(_react2.default.createElement(_index.SessionEditor, { isDashboard: isDb, weave: weaveInstance, keyPress: "true", title: title, settings: config }), document.getElementById("popUp"));
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
	
	            var styleObject = {
	                display: "flex",
	                flexDirection: "Column",
	                width: "100%",
	                height: "100%"
	            };

	            return _react2.default.createElement(
	                "div",
	                { style: styleObject },
	                _react2.default.createElement("div", { id: "popUp" }),
	                _react2.default.createElement(
	                    _index.Navbar,
	                    { settings: this.navConfig },
	                    _react2.default.createElement(
	                        _index.Navbar.List,
	                        null,
	                        _react2.default.createElement(
	                            _index.Navbar.Link,
	                            null,
	                            "Home"
	                        ),
	                        _react2.default.createElement(
	                            _index.Navbar.Link,
	                            null,
	                            "Components"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _index.Navbar.Form,
	                        { visible: "true" },
	                        _react2.default.createElement(
	                            "div",
	                            { style: { color: "red" } },
	                            "Hi I am Sanjay"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _index.SideBarContainer,
	                    { settings: this.sideBarContainerConfig },
	                    _react2.default.createElement("div", { style: { padding: "16px" } })
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2.default.Component);
	
	exports.default = App;
	//# sourceMappingURL=data:application/json;base64,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SUFBWixFQUFrQixJQUFsQixFQUF3QixNQUF4QixFQUR3Qjs7Ozs2Q0FJVjs7O2lDQUlYOztBQUVMLGdCQUFJLGNBQWM7QUFDZCx5QkFBUSxNQUFSO0FBQ0EsK0JBQWMsUUFBZDtBQUNBLHVCQUFNLE1BQU47QUFDQSx3QkFBTyxNQUFQO2FBSkEsQ0FGQzs7QUFVTCxtQkFBUTs7a0JBQUssT0FBTyxXQUFQLEVBQUw7Z0JBQ0ksdUNBQUssSUFBRyxPQUFILEVBQUwsQ0FESjtnQkFFSTs7c0JBQVEsVUFBVSxLQUFLLFNBQUwsRUFBbEI7b0JBQ0k7c0NBQVEsSUFBUjs7d0JBQ0k7MENBQVEsSUFBUjs7O3lCQURKO3dCQUVJOzBDQUFRLElBQVI7Ozt5QkFGSjtxQkFESjtvQkFLSTtzQ0FBUSxJQUFSOzBCQUFjLFNBQVEsTUFBUixFQUFkO3dCQUNJOzs4QkFBSyxPQUFPLEVBQUMsT0FBTSxLQUFOLEVBQVIsRUFBTDs7eUJBREo7cUJBTEo7aUJBRko7Z0JBV0k7O3NCQUFrQixVQUFVLEtBQUssc0JBQUwsRUFBNUI7b0JBQ0ksdUNBQUssT0FBTyxFQUFDLFNBQVEsTUFBUixFQUFSLEVBQUwsQ0FESjtpQkFYSjthQUFSLENBVks7Ozs7V0F2UFA7RUFBWSxnQkFBTSxTQUFOOztrQkF1UkgiLCJmaWxlIjoiQXBwLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FuamF5L2dpdC9XZWF2ZVJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtTZXNzaW9uRWRpdG9yfSBmcm9tIFwiLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQge1Nlc3Npb25FZGl0b3JDb25maWd9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7TmF2YmFyfSBmcm9tIFwiLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQge25hdmJhckNvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9pbmRleC5qc1wiO1xuaW1wb3J0IHtUcmVlfSBmcm9tIFwiLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQge1RyZWVDb25maWd9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7QWNjb3JkaW9ufSBmcm9tIFwiLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQge0FjY29yZGlvbkNvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9pbmRleC5qc1wiO1xuXG5pbXBvcnQge1NpZGVCYXJDb250YWluZXJ9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7c2lkZUJhckNvbnRhaW5lckNvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9pbmRleC5qc1wiO1xuXG5pbXBvcnQge1NpbXBsZVRyZWV9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7U2ltcGxlVHJlZUNvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9pbmRleC5qc1wiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB3aW5kb3cud2VhdmUgPSBuZXcgV2VhdmUoKTtcbiAgICAgICAgd2luZG93LmRid2VhdmUgPSBuZXcgV2VhdmUoKTtcblxuICAgICAgICB0aGlzLm9wZW5TZXR0aW5ncyA9IHRoaXMub3BlblNldHRpbmdzLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zZXNzaW9uQ29uZmlnRGFzaGRvYXJkID0gbmV3IFNlc3Npb25FZGl0b3JDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uQ29uZmlnV2VhdmUgPSBuZXcgU2Vzc2lvbkVkaXRvckNvbmZpZygpO1xuXG4gICAgICAgIHRoaXMubmF2Q29uZmlnID0gd2luZG93LmRid2VhdmUucm9vdC5yZXF1ZXN0T2JqZWN0KCduYXZiYXInLG5hdmJhckNvbmZpZy5OYXZiYXIpO1xuXG4gICAgICAgIHZhciBicmFuZENvbmZpZyA9IHRoaXMubmF2Q29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsbmF2YmFyQ29uZmlnLkJyYW5kKTtcblxuICAgICAgICB2YXIgbG9nb0NvbmZpZyA9IGJyYW5kQ29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsbmF2YmFyQ29uZmlnLkxvZ28pO1xuICAgICAgICBsb2dvQ29uZmlnLnNyYy5zdGF0ZSA9IFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcblxuICAgICAgICB2YXIgdGl0bGVDb25maWcgPSBicmFuZENvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLG5hdmJhckNvbmZpZy5UaXRsZSk7XG4gICAgICAgIHRpdGxlQ29uZmlnLnRpdGxlLnN0YXRlID0gXCJCcmFuZFwiO1xuXG4gICAgICAgIHRoaXMuc2lkZUJhckNvbnRhaW5lckNvbmZpZyAgPSB3aW5kb3cuZGJ3ZWF2ZS5yb290LnJlcXVlc3RPYmplY3QoJ3NpZGVCYXJDb250YWluZXInLHNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLnJpZ2h0U2lkZUJhci52aXNpYmxlLnN0YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2lkZUJhckNvbnRhaW5lckNvbmZpZy50b3BTaWRlQmFyLnZpc2libGUuc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLmJvdHRvbVNpZGVCYXIudmlzaWJsZS5zdGF0ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgc2lkZUJhciA9IHRoaXMuc2lkZUJhckNvbnRhaW5lckNvbmZpZy5sZWZ0U2lkZUJhcjtcblxuXG4gICAgICAgIC8vdGhpcy5hY2NvcmRpb25Db25maWcgPSB3aW5kb3cuZGJ3ZWF2ZS5yb290LnJlcXVlc3RPYmplY3QoJ2FjY29yZGlvbicsQWNjb3JkaW9uQ29uZmlnKTtcbiAgICAgICAgdmFyICBhY2NvcmRpb25Db25maWcgPSBzaWRlQmFyLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJ2FjY29yZGlvbicsQWNjb3JkaW9uQ29uZmlnKTtcblxuICAgICAgICB0aGlzLnRyZWVDb25maWcgPSBhY2NvcmRpb25Db25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgndHJlZScsVHJlZUNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnZhbHVlID1cIjE2cHhcIjtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmFsaWduLnZhbHVlID0gXCJyaWdodFwiO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcudHJlZUljb25TdGF0ZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwibm9kZURlZmF1bHRcIiA6IFwiZmEgZmEtY2FyZXQtcmlnaHRcIixcbiAgICAgICAgICAgIFwibm9kZU9wZW5cIiA6IFwiZmEgZmEtY2FyZXQtZG93blwiLFxuICAgICAgICAgICAgXCJsZWFmRGVmYXVsdFwiIDogXCJmYSBmYS1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgXCJsZWFmT3BlblwiIDogXCJmYSBmYS1jaGVjay1zcXVhcmUtb1wiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmxlYWZTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiOHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOlwiOHB4XCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyZWVDb25maWcucm9vdFN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgICAgIGNvbG9yOlwiIzVkNWQ1ZFwiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLm5vZGVTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiOHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOlwiOHB4XCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5yb290Tm9kZS5vcGVuLnN0YXRlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRyZWU9e1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvbXBvbmVudHNcIixcbiAgICAgICAgICAgIFwiaWNvblwiOlwiLi9pbWFnZXMvQ29tcG9uZW50cy5wbmdcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk5hdmJhclwiLFxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQnJhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJMaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJMaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJGb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFjY29yZGlvblwiLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRyZWVDb25maWcucHJvcHMuYWRkTmV3UHJvcHMoXCJkYXRhXCIsdGhpcy50cmVlKTtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLnByb3BzLmFkZE5ld1Byb3BzKFwic2V0dGluZ3NcIix0aGlzLnRyZWVDb25maWcpO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcucHJvcHMuYWRkTmV3UHJvcHMoXCJsYWJlbFwiLFwibGFiZWxcIik7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5wcm9wcy5hZGROZXdQcm9wcyhcImljb25cIixcImljb25cIik7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5wcm9wcy5hZGROZXdQcm9wcyhcIm5vZGVzXCIsXCJjaGlsZHJlblwiKTtcblxuXG5cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnID0gYWNjb3JkaW9uQ29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJ3RyZWUyJyxUcmVlQ29uZmlnKTtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnZhbHVlID1cIjE2cHhcIjtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmFsaWduLnZhbHVlID0gXCJyaWdodFwiO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcudHJlZUljb25TdGF0ZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwibm9kZURlZmF1bHRcIiA6IFwiZmEgZmEtY2FyZXQtcmlnaHRcIixcbiAgICAgICAgICAgIFwibm9kZU9wZW5cIiA6IFwiZmEgZmEtY2FyZXQtZG93blwiLFxuICAgICAgICAgICAgXCJsZWFmRGVmYXVsdFwiIDogXCJmYSBmYS1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgXCJsZWFmT3BlblwiIDogXCJmYSBmYS1jaGVjay1zcXVhcmUtb1wiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmxlYWZTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiOHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOlwiOHB4XCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5yb290U3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgICAgICAgICAgY29sb3I6XCIjNWQ1ZDVkXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5ub2RlU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjhweFwiLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTpcIjhweFwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyZWVDb25maWcucm9vdE5vZGUub3Blbi5zdGF0ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50cmVlPXtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJCaWdcIixcbiAgICAgICAgICAgIFwiaWNvblwiOlwiLi9pbWFnZXMvQ29tcG9uZW50cy5wbmdcIixcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk5hdmJhclwiLFxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQnJhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiVGFiXCIsXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5wcm9wcy5hZGROZXdQcm9wcyhcImRhdGFcIix0aGlzLnRyZWUpO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcucHJvcHMuYWRkTmV3UHJvcHMoXCJzZXR0aW5nc1wiLHRoaXMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5wcm9wcy5hZGROZXdQcm9wcyhcImxhYmVsXCIsXCJsYWJlbFwiKTtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLnByb3BzLmFkZE5ld1Byb3BzKFwiaWNvblwiLFwiaWNvblwiKTtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLnByb3BzLmFkZE5ld1Byb3BzKFwibm9kZXNcIixcImNoaWxkcmVuXCIpO1xuXG5cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnID0gYWNjb3JkaW9uQ29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJ3RyZWUzJyxUcmVlQ29uZmlnKTtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnZhbHVlID1cIjE2cHhcIjtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmFsaWduLnZhbHVlID0gXCJyaWdodFwiO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcudHJlZUljb25TdGF0ZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwibm9kZURlZmF1bHRcIiA6IFwiZmEgZmEtY2FyZXQtcmlnaHRcIixcbiAgICAgICAgICAgIFwibm9kZU9wZW5cIiA6IFwiZmEgZmEtY2FyZXQtZG93blwiLFxuICAgICAgICAgICAgXCJsZWFmRGVmYXVsdFwiIDogXCJmYSBmYS1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgXCJsZWFmT3BlblwiIDogXCJmYSBmYS1jaGVjay1zcXVhcmUtb1wiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmxlYWZTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiOHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOlwiOHB4XCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyZWVDb25maWcucm9vdFN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgICAgIGNvbG9yOlwiIzVkNWQ1ZFwiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLm5vZGVTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiOHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOlwiOHB4XCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5yb290Tm9kZS5vcGVuLnN0YXRlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRyZWU9e1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcInNtYWxsXCIsXG4gICAgICAgICAgICBcImljb25cIjpcIi4vaW1hZ2VzL0NvbXBvbmVudHMucG5nXCIsXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJhY2NvcmRcIixcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiVGFiXCIsXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5wcm9wcy5hZGROZXdQcm9wcyhcImRhdGFcIix0aGlzLnRyZWUpO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcucHJvcHMuYWRkTmV3UHJvcHMoXCJzZXR0aW5nc1wiLHRoaXMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5wcm9wcy5hZGROZXdQcm9wcyhcImxhYmVsXCIsXCJsYWJlbFwiKTtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLnByb3BzLmFkZE5ld1Byb3BzKFwiaWNvblwiLFwiaWNvblwiKTtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLnByb3BzLmFkZE5ld1Byb3BzKFwibm9kZXNcIixcImNoaWxkcmVuXCIpO1xuXG5cbiAgICAgICAgc2lkZUJhci52aXNpYmxlLnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgc2lkZUJhci5vcGVuLnN0YXRlID0gZmFsc2U7XG4gICAgICAgIHNpZGVCYXIuc3RhdGljLnN0YXRlID0gdHJ1ZTtcblxuICAgIH1cblxuXG5cbiAgIG9wZW5TZXR0aW5ncyhlKSB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIiAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2Vzc2lvbkNvbmZpZ1dlYXZlLm1vZGFsQ29uZmlnLm9wZW4udmFsdWUpICB0aGlzLnNlc3Npb25Db25maWdXZWF2ZS5tb2RhbENvbmZpZy5vcGVuLnZhbHVlPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbkNvbmZpZ0Rhc2hkb2FyZC5tb2RhbENvbmZpZy5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucG9wVXBTZXNzaW9uRWRpdG9yKCB0aGlzLnNlc3Npb25Db25maWdEYXNoZG9hcmQsIHdpbmRvdy5kYndlYXZlLCBcIlNlc3Npb24gU3RhdGUgRWRpdG9yIChXZWF2ZSBEYXNoYm9hcmQpXCIsdHJ1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vcGVuU2V0dGluZ3MpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbk1vdW50KCl7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vcGVuU2V0dGluZ3MpO1xuICAgIH1cblxuICAgIHBvcFVwU2Vzc2lvbkVkaXRvcihjb25maWcsd2VhdmVJbnN0YW5jZSx0aXRsZSxpc0RiKSB7XG4gICAgICAgIFJlYWN0RE9NLnJlbmRlciggPFNlc3Npb25FZGl0b3IgaXNEYXNoYm9hcmQ9e2lzRGJ9IHdlYXZlPXt3ZWF2ZUluc3RhbmNlfSBrZXlQcmVzcyA9IFwidHJ1ZVwiIHRpdGxlPXt0aXRsZX0gc2V0dGluZ3MgPSB7Y29uZmlnfS8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wVXBcIilcbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIHRyZWVDbGljayhub2RlLCBvcGVuICwgYWN0aXZlKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLCBvcGVuLCBhY3RpdmUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiQ29sdW1uXCIsXG4gICAgICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIlxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3N0eWxlT2JqZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIHNldHRpbmdzPXt0aGlzLm5hdkNvbmZpZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5MaW5rPkhvbWU8L05hdmJhci5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuTGluaz5Db21wb25lbnRzPC9OYXZiYXIuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkZvcm0gIHZpc2libGU9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOlwicmVkXCJ9fT5IaSBJIGFtIFNhbmpheTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyQ29udGFpbmVyIHNldHRpbmdzPXt0aGlzLnNpZGVCYXJDb250YWluZXJDb25maWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6XCIxNnB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvU2lkZUJhckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbiJdfQ==

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Tree = __webpack_require__(5);
	
	var _Tree2 = _interopRequireDefault(_Tree);
	
	var _TreeConfig = __webpack_require__(18);
	
	var _TreeConfig2 = _interopRequireDefault(_TreeConfig);
	
	var _SimpleTreeConfig = __webpack_require__(19);
	
	var _SimpleTreeConfig2 = _interopRequireDefault(_SimpleTreeConfig);
	
	var _SimpleTree = __webpack_require__(20);
	
	var _SimpleTree2 = _interopRequireDefault(_SimpleTree);
	
	var _Modal = __webpack_require__(22);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _ModalConfig = __webpack_require__(23);
	
	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);
	
	var _SplitPane = __webpack_require__(26);
	
	var _SplitPane2 = _interopRequireDefault(_SplitPane);
	
	var _SplitPaneConfig = __webpack_require__(27);
	
	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);
	
	var _Navbar = __webpack_require__(31);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Config = __webpack_require__(39);
	
	var _Config2 = _interopRequireDefault(_Config);
	
	var _Accordion = __webpack_require__(40);

	var _Accordion2 = _interopRequireDefault(_Accordion);

	var _Config3 = __webpack_require__(41);

	var _Config4 = _interopRequireDefault(_Config3);

	var _SideBarContainer = __webpack_require__(42);

	var _SideBarContainer2 = _interopRequireDefault(_SideBarContainer);

	var _Config5 = __webpack_require__(45);

	var _Config6 = _interopRequireDefault(_Config5);

	var _SessionEditor = __webpack_require__(47);

	var _SessionEditor2 = _interopRequireDefault(_SessionEditor);

	var _SessionEditorConfig = __webpack_require__(48);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _Button = __webpack_require__(51);

	var _Button2 = _interopRequireDefault(_Button);

	var _Config7 = __webpack_require__(46);

	var _Config8 = _interopRequireDefault(_Config7);

	var _InlineStyle = __webpack_require__(12);
	
	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);
	
	var _CSS = __webpack_require__(13);
	
	var _CSS2 = _interopRequireDefault(_CSS);
	
	var _Props = __webpack_require__(14);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	var _Style = __webpack_require__(7);

	var _Style2 = _interopRequireDefault(_Style);
	
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
	
	exports.Accordion = _Accordion2.default;
	exports.AccordionConfig = _Config4.default;

	exports.SideBarContainer = _SideBarContainer2.default;
	exports.sideBarContainerConfig = _Config6.default;

	exports.SessionEditor = _SessionEditor2.default;
	exports.SessionEditorConfig = _SessionEditorConfig2.default;

	exports.Button = _Button2.default;
	exports.ButtonConfig = _Config8.default;

	exports.InlineStyle = _InlineStyle2.default;
	exports.CSS = _CSS2.default;
	exports.Props = _Props2.default;
	
	exports.Style = _Style2.default;
	
	exports.registerToolImplementation = function (asClassName, jsClass) {
	    _ComponentManager2.default.registerToolImplementation(asClassName, jsClass);
	};
	
	exports.getToolImplementation = function (name) {
	    if (_ComponentManager2.default.getToolImplementation(name)) {
	        return _ComponentManager2.default.getToolImplementation(name);
	    }
	};
	
	exports.setDebug = function (val) {
	    _ComponentManager2.default.debug = val;
	};
	
	exports.registerToolConfig = function (toolClass, configClass) {
	    _ComponentManager2.default.registerToolConfig(toolClass, configClass);
	};
	
	exports.getToolConfig = function (toolClass) {
	    return _ComponentManager2.default.getToolConfig(toolClass);
	};

	exports.initialize = function (reactComp) {
	    _ComponentManager2.default.initialize(reactComp, nextProps);
	};
	
	exports.hookSessionStateForComponentChildren = function (ReactChildren, ownerConfig) {
	    return _ComponentManager2.default.hookSessionStateForComponentChildren(ReactChildren, ownerConfig);
	};
	
	exports.componentWillReceiveProps = function (reactComp, nextProps) {
	    _ComponentManager2.default.componentWillReceiveProps(reactComp, nextProps);
	};

	exports.componentWillUnmount = function (reactComp) {
	    _ComponentManager2.default.componentWillUnmount(reactComp);
	};
	
	exports.addForceUpdateToCallbacks = function (reactComp) {
	    return _ComponentManager2.default.addForceUpdateToCallbacks(reactComp);
	};

	exports.removeForceUpdateFromCallbacks = function (reactComp) {
	    return _ComponentManager2.default.removeForceUpdateFromCallbacks(reactComp);
	};

	exports.shouldComponentUpdate = function (reactComp, nextProps) {
	    return _ComponentManager2.default.shouldComponentUpdate(reactComp, nextProps);
	};

	exports.renderChildren = function (reactComp, propsManager) {
	    return _ComponentManager2.default.renderChildren(reactComp, propsManager);
	};
	//# sourceMappingURL=data:application/json;base64,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LEFBQW1DLEFBQ3hELEFBQU8sQUFBMEM7Q0FENUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJlZSBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvVHJlZVwiO1xuaW1wb3J0IFRyZWVDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy90cmVlL1RyZWVDb25maWdcIjtcblxuaW1wb3J0IFNpbXBsZVRyZWVDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9zaW1wbGVUcmVlL1NpbXBsZVRyZWVDb25maWdcIjtcbmltcG9ydCBTaW1wbGVUcmVlIGZyb20gXCIuL2NvbXBvbmVudHMvc2ltcGxlVHJlZS9TaW1wbGVUcmVlXCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsL01vZGFsXCI7XG5pbXBvcnQgTW9kYWxDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbENvbmZpZ1wiO1xuXG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gXCIuL2NvbXBvbmVudHMvc3BsaXRQYW5lL1NwbGl0UGFuZVwiO1xuaW1wb3J0IFNwbGl0UGFuZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3NwbGl0UGFuZS9TcGxpdFBhbmVDb25maWdcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXJcIjtcbmltcG9ydCBuYXZiYXJDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXIvQ29uZmlnXCI7XG5cbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb24vQWNjb3JkaW9uXCI7XG5pbXBvcnQgQWNjb3JkaW9uQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3JkaW9uL0NvbmZpZ1wiO1xuXG5pbXBvcnQgU2lkZUJhckNvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGVCYXJDb250YWluZXIvU2lkZUJhckNvbnRhaW5lclwiO1xuaW1wb3J0IHNpZGVCYXJDb250YWluZXJDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlQmFyQ29udGFpbmVyL0NvbmZpZ1wiO1xuXG5pbXBvcnQgU2Vzc2lvbkVkaXRvciBmcm9tIFwiLi9kZWJ1Z2dlci9zZXNzaW9uU3RhdGVFZGl0b3IvU2Vzc2lvbkVkaXRvclwiO1xuaW1wb3J0IFNlc3Npb25FZGl0b3JDb25maWcgZnJvbSBcIi4vZGVidWdnZXIvc2Vzc2lvblN0YXRlRWRpdG9yL1Nlc3Npb25FZGl0b3JDb25maWdcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL2J1dHRvbi9CdXR0b25cIjtcbmltcG9ydCBCdXR0b25Db25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9idXR0b24vQ29uZmlnXCI7XG5cbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ1NTIGZyb20gXCIuL2NvbmZpZ3MvQ1NTXCI7XG5pbXBvcnQgUHJvcHMgZnJvbSBcIi4vY29uZmlncy9Qcm9wc1wiO1xuXG5cbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi91dGlscy9TdHlsZVwiO1xuXG5cbmV4cG9ydHMuVHJlZSA9IFRyZWU7XG5leHBvcnRzLlRyZWVDb25maWcgPSBUcmVlQ29uZmlnO1xuXG5leHBvcnRzLlNpbXBsZVRyZWUgPSBTaW1wbGVUcmVlO1xuZXhwb3J0cy5TaW1wbGVUcmVlQ29uZmlnID0gU2ltcGxlVHJlZUNvbmZpZztcblxuZXhwb3J0cy5Nb2RhbCA9IE1vZGFsO1xuZXhwb3J0cy5Nb2RhbENvbmZpZyA9IE1vZGFsQ29uZmlnO1xuXG5leHBvcnRzLlNwbGl0UGFuZSA9IFNwbGl0UGFuZTtcbmV4cG9ydHMuU3BsaXRQYW5lQ29uZmlnID0gU3BsaXRQYW5lQ29uZmlnO1xuXG5leHBvcnRzLk5hdmJhciA9IE5hdmJhcjtcbmV4cG9ydHMubmF2YmFyQ29uZmlnID0gbmF2YmFyQ29uZmlnO1xuXG5leHBvcnRzLkFjY29yZGlvbiA9IEFjY29yZGlvbjtcbmV4cG9ydHMuQWNjb3JkaW9uQ29uZmlnID0gQWNjb3JkaW9uQ29uZmlnO1xuXG5leHBvcnRzLlNpZGVCYXJDb250YWluZXIgPSBTaWRlQmFyQ29udGFpbmVyO1xuZXhwb3J0cy5zaWRlQmFyQ29udGFpbmVyQ29uZmlnID0gc2lkZUJhckNvbnRhaW5lckNvbmZpZztcblxuZXhwb3J0cy5TZXNzaW9uRWRpdG9yID0gU2Vzc2lvbkVkaXRvcjtcbmV4cG9ydHMuU2Vzc2lvbkVkaXRvckNvbmZpZyA9IFNlc3Npb25FZGl0b3JDb25maWc7XG5cbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xuZXhwb3J0cy5CdXR0b25Db25maWcgPSBCdXR0b25Db25maWc7XG5cbmV4cG9ydHMuSW5saW5lU3R5bGUgPSBJbmxpbmVTdHlsZTtcbmV4cG9ydHMuQ1NTID0gQ1NTO1xuZXhwb3J0cy5Qcm9wcyA9IFByb3BzO1xuXG5leHBvcnRzLlN0eWxlID0gU3R5bGU7XG5cbmV4cG9ydHMucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAoYXNDbGFzc05hbWUsIGpzQ2xhc3MpIHtcbiAgICBDb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKTtcbn1cblxuZXhwb3J0cy5nZXRUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xJbXBsZW1lbnRhdGlvbihuYW1lKSkge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5nZXRUb29sSW1wbGVtZW50YXRpb24obmFtZSk7XG4gICAgfVxufVxuXG5leHBvcnRzLnNldERlYnVnID0gZnVuY3Rpb24odmFsKXtcbiAgICBDb21wb25lbnRNYW5hZ2VyLmRlYnVnID0gdmFsO1xufVxuXG5leHBvcnRzLnJlZ2lzdGVyVG9vbENvbmZpZyA9IGZ1bmN0aW9uICh0b29sQ2xhc3MsIGNvbmZpZ0NsYXNzKSB7XG4gICAgQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcodG9vbENsYXNzLCBjb25maWdDbGFzcyk7XG59XG5cblxuZXhwb3J0cy5nZXRUb29sQ29uZmlnID0gZnVuY3Rpb24gKHRvb2xDbGFzcykge1xuICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xDb25maWcodG9vbENsYXNzKTtcbn1cblxuXG5leHBvcnRzLmluaXRpYWxpemUgPSBmdW5jdGlvbihyZWFjdENvbXApe1xuICAgIENvbXBvbmVudE1hbmFnZXIuaW5pdGlhbGl6ZShyZWFjdENvbXAsbmV4dFByb3BzKTtcbn1cblxuZXhwb3J0cy5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoUmVhY3RDaGlsZHJlbixvd25lckNvbmZpZykgIHtcbiAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4oUmVhY3RDaGlsZHJlbixvd25lckNvbmZpZyk7XG59XG5cbmV4cG9ydHMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uKHJlYWN0Q29tcCxuZXh0UHJvcHMpe1xuICAgIENvbXBvbmVudE1hbmFnZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhyZWFjdENvbXAsbmV4dFByb3BzKTtcbn1cblxuZXhwb3J0cy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uKHJlYWN0Q29tcCl7XG4gICAgQ29tcG9uZW50TWFuYWdlci5jb21wb25lbnRXaWxsVW5tb3VudChyZWFjdENvbXApO1xufVxuXG5leHBvcnRzLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3MgPSBmdW5jdGlvbiAocmVhY3RDb21wKSAge1xuICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3MocmVhY3RDb21wKTtcbn1cblxuZXhwb3J0cy5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3MgPSBmdW5jdGlvbiAocmVhY3RDb21wKSAge1xuICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyhyZWFjdENvbXApO1xufVxuXG5leHBvcnRzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uKHJlYWN0Q29tcCxuZXh0UHJvcHMpe1xuICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnNob3VsZENvbXBvbmVudFVwZGF0ZShyZWFjdENvbXAsbmV4dFByb3BzKTtcbn1cblxuZXhwb3J0cy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChyZWFjdENvbXAscHJvcHNNYW5hZ2VyKSAge1xuICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnJlbmRlckNoaWxkcmVuKHJlYWN0Q29tcCxwcm9wc01hbmFnZXIpO1xufVxuIl19

/***/ },
/* 5 */
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
	
	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};
	
	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);
	
	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

	var _Node = __webpack_require__(16);
	
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
	
	var Tree = function (_AbstractComponent) {
	    _inherits(Tree, _AbstractComponent);
	
	    function Tree(props) {
	        _classCallCheck(this, Tree);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tree).call(this, props));

	        _this.settings.dataTypesMap = _this.props.dataTypesMap;
	        _this.settings.getDataType = _this.props.getDataType;
	        return _this;
	    }
	
	    _createClass(Tree, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            _get(Object.getPrototypeOf(Tree.prototype), "componentWillReceiveProps", this).call(this, nextProps);
	            if (this.props.settings !== nextProps.settings) {
	                this.settings.dataTypesMap = nextProps.dataTypesMap;
	                this.settings.getDataType = nextProps.getDataType;
	            }
	        }

	        // allowe render only when React Parent render is called with new iconMode value

	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            _get(Object.getPrototypeOf(Tree.prototype), "shouldComponentUpdate", this).call(this, nextProps);
	            if (this.props.data !== nextProps.data) return true;
	            return false;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("Tree - render");
	            if (this.settings.iconMode.state) {
	                var iconName = this.settings.rootNode.iconName.state;
	                var iconUI = _react2.default.createElement("span", null);
	                if (iconName && iconName.length > 0) {
	                    var iconStyleObj = this.settings.nodeIconStyle.getStyleFor();
	                    if (iconName.indexOf("/") == -1) {
	                        // fontAwesome Icon Name
	                        iconUI = _react2.default.createElement("i", { style: iconStyleObj, className: iconName });
	                    } else {
	                        iconUI = _react2.default.createElement("img", { style: iconStyleObj, src: iconName });
	                    }
	                }
	                return iconUI;
	            }
	            var rootNodeStyle = this.settings.rootStyle.getStyleFor(null, true);
	            return _react2.default.createElement(_Node2.default, { style: rootNodeStyle, data: this.props.data, label: this.props.label, nodes: this.props.nodes, icon: this.props.icon,
	                settings: this.settings.rootNode,
	                treeConfig: this.settings,
	                clickCallback: this.props.clickCallback });
	        }
	    }]);
	
	    return Tree;
	}(_AbstractComponent3.default);
	
	_ComponentManager2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
	exports.default = Tree;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007b0JBRUY7O2FBRkUsQUFFRixLQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQixpQkFFaUIsQUFDVCxBQUNOOztjQUFBLEFBQUssU0FBTCxBQUFjLGVBQWUsTUFBQSxBQUFLLE1BRm5CLEFBRWMsQUFBVyxBQUN4QztjQUFBLEFBQUssU0FBTCxBQUFjLGNBQWMsTUFBQSxBQUFLLE1BSGxCLEFBR2EsQUFBVztlQUgzQyxNQUFtQjs7O2lCQUZqQjs7a0RBU3dCLFdBQVUsQUFDaEM7dUNBVkYsK0RBU2tDLEFBQ2hDLEFBQWdDLEFBQ2hDO2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBYSxVQUFBLEFBQVUsVUFBUyxBQUMxQztxQkFBQSxBQUFLLFNBQUwsQUFBYyxlQUFlLFVBRGEsQUFDYixBQUFVLEFBQ3ZDO3FCQUFBLEFBQUssU0FBTCxBQUFjLGNBQWMsVUFGaEMsQUFBOEMsQUFFZCxBQUFVOzs7Ozs7Ozs4Q0FNeEI7dUNBbkJwQiwyREFtQjhCLEFBQzVCLEFBQTRCLEFBQzVCO2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxVQUFBLEFBQVUsTUFDN0IsT0FESixBQUNJLEFBQU8sQUFDWDttQkFKNEIsQUFJNUIsQUFBTyxNQUpxQixBQUM1Qjs7OztpQ0FPSyxBQUNMO2dCQUFHLDJCQUFBLEFBQWlCLE9BQU0sUUFBQSxBQUFRLElBQWxDLEFBQTBCLEFBQVksQUFDdEM7Z0JBQUcsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCO29CQUNsQixXQUFXLEtBQUEsQUFBSyxTQUFMLEFBQWMsU0FBZCxBQUF1QixTQURWLEFBQ2IsQUFBZ0MsQUFDL0M7b0JBQUksU0FBUyxzQ0FGZSxBQUV4QixBQUNKO29CQUFHLFlBQVksU0FBQSxBQUFTLFNBQVQsQUFBa0IsR0FBRSxBQUMvQjt3QkFBSSxlQUFlLEtBQUEsQUFBSyxTQUFMLEFBQWMsY0FERixBQUMzQixBQUFlLEFBQTRCLEFBQy9DO3dCQUFHLFNBQUEsQUFBUyxRQUFULEFBQWlCLFFBQVEsQ0FBQSxBQUFDLEdBQUUsQUFDM0I7O2lDQUFTLHFDQUFHLE9BQUEsQUFBUyxjQUFjLFdBRHZDLEFBQStCLEFBQzNCLEFBQVMsQUFBMEIsQUFBVzsyQkFDNUMsQUFDRjtpQ0FBUyx1Q0FBSyxPQUFBLEFBQVMsY0FBYyxLQUw3QyxBQUVJLEFBRU0sQUFDRixBQUFTLEFBQTRCLEFBQUssQUFHbEQ7Ozt1QkFYSixBQUFnQyxBQVc1QixBQUFPLEFBRVgsT0FiZ0MsQUFDNUI7O2dCQVlBLGdCQUFnQixLQUFBLEFBQUssU0FBTCxBQUFjLFVBQWQsQUFBd0IsWUFBeEIsQUFBb0MsTUFmbkQsQUFlRCxBQUFnQixBQUF5QyxBQUM3RDttQkFBUyxnREFBTSxPQUFBLEFBQU8sZUFBZSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBTyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBTyxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsQUFDbkg7MEJBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxBQUN4Qjs0QkFBWSxLQUFBLEFBQUssQUFDakI7K0JBQWUsS0FBQSxBQUFLLE1BbkIzQixBQWdCTCxBQUFTLEFBR2tCLEFBQVc7Ozs7V0E5Q3hDOzs7QUFvRE4sMkJBQUEsQUFBaUIsMkJBQWpCLEFBQTRDLHlCQUE1QyxBQUFvRTtrQkFDckQiLCJmaWxlIjoiVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuXG5jbGFzcyBUcmVlIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGFUeXBlc01hcCA9IHRoaXMucHJvcHMuZGF0YVR5cGVzTWFwO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmdldERhdGFUeXBlID0gdGhpcy5wcm9wcy5nZXREYXRhVHlwZTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXAgPSBuZXh0UHJvcHMuZGF0YVR5cGVzTWFwO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5nZXREYXRhVHlwZSA9IG5leHRQcm9wcy5nZXREYXRhVHlwZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYWxsb3dlIHJlbmRlciBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWQgd2l0aCBuZXcgaWNvbk1vZGUgdmFsdWVcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiVHJlZSAtIHJlbmRlclwiKTtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5pY29uTW9kZS5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLnJvb3ROb2RlLmljb25OYW1lLnN0YXRlO1xuICAgICAgICAgICAgdmFyIGljb25VSSA9IDxzcGFuLz5cbiAgICAgICAgICAgIGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHZhciBpY29uU3R5bGVPYmogPSB0aGlzLnNldHRpbmdzLm5vZGVJY29uU3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgICAgICAgICBpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSl7IC8vIGZvbnRBd2Vzb21lIEljb24gTmFtZVxuICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aSBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aW1nIHN0eWxlID0ge2ljb25TdHlsZU9ian0gc3JjPXtpY29uTmFtZX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpY29uVUk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJvb3ROb2RlU3R5bGUgPSB0aGlzLnNldHRpbmdzLnJvb3RTdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpO1xuICAgICAgICByZXR1cm4gKCA8Tm9kZSBzdHlsZT17cm9vdE5vZGVTdHlsZX0gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH0gbm9kZXM9e3RoaXMucHJvcHMubm9kZXN9IGljb249e3RoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3Mucm9vdE5vZGV9XG4gICAgICAgICAgICAgICAgICAgIHRyZWVDb25maWc9e3RoaXMuc2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30gLz5cbiAgICAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LlRyZWVDb25maWdcIixUcmVlKTtcbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4iXX0=

/***/ },
/* 6 */
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
	
	var _Style = __webpack_require__(7);
	
	var _Style2 = _interopRequireDefault(_Style);
	
	var _HTMLWrapperConfig = __webpack_require__(11);
	
	var _HTMLWrapperConfig2 = _interopRequireDefault(_HTMLWrapperConfig);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _InlineStyle = __webpack_require__(12);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	var _CSS = __webpack_require__(13);

	var _CSS2 = _interopRequireDefault(_CSS);

	var _Props = __webpack_require__(14);

	var _Props2 = _interopRequireDefault(_Props);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	var ComponentManager = function () {
	    function ComponentManager() {
	        _classCallCheck(this, ComponentManager);
	    }
	
	    _createClass(ComponentManager, null, [{
	        key: "registerToolImplementation",
	        value: function registerToolImplementation(asClassName, jsClass) {
	            if (!ComponentManager.toolRegistry[asClassName]) ComponentManager.toolRegistry[asClassName] = jsClass;
	        }
	    }, {
	        key: "getToolImplementation",
	        value: function getToolImplementation(asClassName) {
	            return ComponentManager.toolRegistry[asClassName];
	        }
	    }, {
	        key: "registerToolConfig",
	        value: function registerToolConfig(toolClass, config) {
	            if (!ComponentManager.toolConfigMap.has(toolClass)) ComponentManager.toolConfigMap.set(toolClass, config);
	        }
	    }, {
	        key: "getToolConfig",
	        value: function getToolConfig(toolClass) {
	            return ComponentManager.toolConfigMap.get(toolClass);
	        }
	    }, {
	        key: "initialize",
	        value: function initialize(reactComp, type) {
	            if (ComponentManager.debug) console.log(reactComp.constructor.name + " -- constructor");
	            if (reactComp.props.settings) {
	                reactComp.settings = reactComp.props.settings;
	            } else {
	                var newConfig = ComponentManager.getToolConfig(reactComp.constructor);
	                reactComp.settings = newConfig;
	            }
	            if (reactComp.props.style) {
	                // user style added through UI is Sessioned
	                reactComp.settings.style.domDefined.state = reactComp.props.style;
	            }
	            if (reactComp.props.className) {
	                // user className added through UI is Sessioned
	                reactComp.settings.CSS.className.state = reactComp.props.className;
	            }
	            if (reactComp.props.enable) {
	                if (reactComp.settings.enable) reactComp.settings.enable.state = reactComp.props.enable;
	            }
	            if (reactComp.props.useCSS) {
	                if (reactComp.settings.useCSS) reactComp.settings.useCSS.state = reactComp.props.useCSS;
	            }
	            if (reactComp.props.visible) {
	                if (reactComp.settings.visible) reactComp.settings.visible.state = reactComp.props.visible;
	            }
	            if (reactComp.props.deviceMode) {
	                if (reactComp.settings.deviceMode) reactComp.settings.deviceMode.state = reactComp.props.deviceMode;
	            }
	            if (reactComp.props.iconMode) {
	                if (reactComp.settings.iconMode) reactComp.settings.iconMode.state = reactComp.props.iconMode;
	            }
	            if (type == "container" && reactComp.constructor.name != "HTMLWrapper") {
	                var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
	                ComponentManager.hookSessionStateForComponentChildren(reactComp.props.children, reactComp.settings, WrapperConfigClass);
	                reactComp.renderChildren = reactComp.renderChildren.bind(reactComp);
	            }

	            ComponentManager.addForceUpdateToCallbacks(reactComp);
	        }
	    }, {
	        key: "createDefaultSessionProperties",
	        value: function createDefaultSessionProperties(config, type) {
	            if (ComponentManager.debug) console.log(config.constructor.name + " -- constructor");
	            Object.defineProperties(config, {
	                "style": {
	                    value: Weave.linkableChild(config, new _InlineStyle2.default())
	                },
	                "iconModeStyle": {
	                    value: Weave.linkableChild(config, new _InlineStyle2.default())
	                },
	                "iconModeName": {
	                    value: Weave.linkableChild(config, new weavejs.core.LinkableString(""))
	                },
	                "CSS": {
	                    value: Weave.linkableChild(config, new _CSS2.default())
	                },
	                "useCSS": {
	                    value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
	                },
	                "enable": {
	                    value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
	                },
	                "visible": {
	                    value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(true))
	                },
	                "iconMode": {
	                    value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
	                },
	                "deviceMode": {
	                    value: Weave.linkableChild(config, new weavejs.core.LinkableString("large"))
	                },
	                "props": {
	                    value: new _Props2.default()
	                }
	            });

	            if (type === "container") {
	                Object.defineProperties(config, {
	                    "children": {
	                        value: Weave.linkableChild(config, new weavejs.core.LinkableHashMap())
	                    },
	                    "addGapAt": {
	                        value: Weave.linkableChild(config, new weavejs.core.LinkableNumber())
	                    }
	                });

	                config.childConfigMap = new Map();
	                config.configChildMap = new Map();
	            }
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(reactComp, nextProps) {
	            if (ComponentManager.debug) console.log(reactComp.constructor.name + " -- componentWillReceiveProps ---");
	            if (reactComp.props.settings !== nextProps.settings) {
	                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props Settings changed");
	                if (nextProps.settings) {
	                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** Settings");
	                    ComponentManager.removeForceUpdateFromCallbacks(reactComp);
	                    reactComp.settings = nextProps.settings;
	                    ComponentManager.addForceUpdateToCallbacks(reactComp);
	                }
	            }
	            if (reactComp.props.style !== nextProps.style) {
	                // user style added through UI is Sessioned
	                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props style changed from " + reactComp.props.style + " to " + nextProps.style);
	                if (nextProps.style) {
	                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** style");
	                    reactComp.settings.style.domDefined.state = nextProps.style;
	                }
	            }
	            if (reactComp.props.className !== nextProps.className) {
	                // user className added through UI is Sessioned
	                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props className changed from " + reactComp.props.className + " to " + nextProps.className);
	                if (nextProps.className) {
	                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** className");
	                    reactComp.settings.CSS.className.state = nextProps.className;
	                }
	            }
	            if (reactComp.props.enable !== nextProps.enable) {
	                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props enable changed  from " + reactComp.props.enable + " to " + nextProps.enable);
	                if (nextProps.enable !== undefined && reactComp.settings.enable) {
	                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** enable");
	                    reactComp.settings.enable.state = nextProps.enable;
	                }
	            }
	            if (reactComp.props.visible !== nextProps.visible) {
	                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props visible changed from " + reactComp.props.visible + " to " + nextProps.visible);
	                if (nextProps.visible !== undefined && reactComp.settings.visible) {
	                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** visible");
	                    reactComp.settings.visible.state = nextProps.visible;
	                }
	            }
	            if (reactComp.props.deviceMode !== nextProps.deviceMode) {
	                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props deviceMode changed from " + reactComp.props.deviceMode + " to " + nextProps.deviceMode);
	                if (nextProps.deviceMode !== undefined && reactComp.settings.deviceMode) {
	                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** deviceMode");
	                    reactComp.settings.deviceMode.state = nextProps.deviceMode;
	                }
	            }
	            if (reactComp.props.iconMode !== nextProps.iconMode) {
	                if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** props iconMode changed from " + reactComp.props.iconMode + " to " + nextProps.iconMode);
	                if (nextProps.iconMode !== undefined && reactComp.settings.iconMode) {
	                    if (ComponentManager.debug) console.log(reactComp.constructor.name + " ** iconMode");
	                    reactComp.settings.iconMode.state = nextProps.iconMode;
	                }
	            }
	            if (reactComp.props.children !== nextProps.children) {
	                if (ComponentManager.debug) console.log(reactComp.constructor.name + "children");
	                var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
	                ComponentManager.hookSessionStateForComponentChildren(nextProps.children, reactComp.settings, WrapperConfigClass);
	            }
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount(reactComp) {
	            if (ComponentManager.debug) console.log(reactComp.constructor.name + " - componentWillUnmount");
	            ComponentManager.removeForceUpdateFromCallbacks(reactComp);
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(reactComp, nextProps) {
	            if (ComponentManager.debug) console.log(reactComp.constructor.name + " - shouldComponentUpdate");
	            //to-do sync between props class and weavestate
	            return false;
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
	                    if (obj instanceof weavejs.core.LinkableHashMap) {
	                        obj = obj.childListCallbacks;
	                        Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
	                    } else if (obj instanceof weavejs.core.LinkableVariable) {
	                        Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
	                    } else if (obj instanceof _InlineStyle2.default) {
	                        Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
	                    } else if (obj instanceof _CSS2.default) {
	                        Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
	                    }
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
	                    if (obj instanceof weavejs.core.LinkableHashMap) {
	                        obj = obj.childListCallbacks;
	                        Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
	                    } else if (obj instanceof weavejs.core.LinkableVariable) {
	                        Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
	                    } else if (obj instanceof _InlineStyle2.default) {
	                        Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
	                    } else if (obj instanceof _CSS2.default) {
	                        Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
	                    }
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
	
	            if (ComponentManager.debug) {
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
	                    if (!child.settings && !child.props.settings) {
	                        var configClass = ComponentManager.getToolConfig(child.type);
	                        if (!childConfig && configClass) {
	                            childConfig = config.children.requestObject('', configClass);
	                        }
	                    } else {
	                        childConfig = child.settings ? child.settings : child.props.settings;
	                        config.children.setObject('', childConfig);
	                    }
	                }
	                var _child$props = child.props;
	                var className = _child$props.className;
	                var style = _child$props.style;

	                var other = _objectWithoutProperties(_child$props, ["className", "style"]);

	                if (child.props.enable && childConfig.enable) childConfig.enable.state = child.props.enable;
	                if (style) childConfig.style.domDefined.state = style;
	                if (className) childConfig.CSS.className.state = className;
	                if (other && childConfig.props) childConfig.props.merge(other);
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
	        value: function renderChildren(reactComp, childList) {
	            if (ComponentManager.debug) console.log(reactComp.constructor.name + " -- renderChildren");
	            var childConfigs = reactComp.settings.children.getObjects();
	            var propsConfig = reactComp.settings.props;
	
	            var clonedChildren = childConfigs.map(function (childConfig, index) {
	                var child = reactComp.settings.configChildMap.get(childConfig);
	                var configName = reactComp.settings.children.getName(childConfig);

	                if (childList) {
	                    if (childList.indexOf(configName) == -1) {
	                        return null; //
	                    }
	                }
	                var props = {};
	
	                props["settings"] = childConfig;
	                if (child) {
	                    //if(child.props && !child.props.settings)
	
	                    ComponentManager.mergeInto(props, child.props);
	                }
	                if (propsConfig && propsConfig.hasChildProps()) {
	                    var obj = propsConfig.getPropsForChild(reactComp, childConfig, configName, index);
	                    ComponentManager.mergeInto(props, obj);
	                    var key = propsConfig.keyProp;
	                    if (key && key.length > 0) {
	                        if (key === "index") props["key"] = index;else if (key === "objectName") props["key"] = configName;else if (childConfig[key]) {
	                            if (childConfig[key] instanceof weavejs.core.LinkableVariable) props["key"] = childConfig[key].state;else props["key"] = childConfig[key];
	                        }
	                    } else {
	                        props["key"] = index;
	                    }
	                } else {
	                    props["key"] = index;
	                }
	
	                if (childConfig.props) {
	                    var thisArg = child ? child : childConfig;
	                    ComponentManager.mergeInto(props, childConfig.props.getProps(thisArg, childConfig, configName, index));
	                }
	                if (configName === "gapDiv") {
	                    var orderValue = String(reactComp.settings.addGapAt.state);
	                    if (!isNaN(orderValue)) {
	                        props["style"] = {
	                            flex: "1",
	                            order: orderValue
	                        };
	                    }
	                }

	                if (child) {
	                    if (typeof child.type === "string") {
	                        var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
	                        var ToolClass = ComponentManager.getToolImplementation(configClass);
	                        return _react2.default.createElement(ToolClass, props, " ", child, " ");
	                    } else {
	                        if (reactComp.settings.childConfigMap.has(child)) reactComp.settings.childConfigMap.delete(child);
	                        var clonedChild = _react2.default.cloneElement(child, props);
	                        reactComp.settings.configChildMap.set(childConfig, clonedChild);
	                        reactComp.settings.childConfigMap.set(clonedChild, childConfig);
	                        return clonedChild;
	                    }
	                } else {
	                    //to-do need to replace with flexinfo file or tiher mean, create a utility function
	                    //this solution will fail when config not part of session tree
	                    var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
	                    var ToolClass = ComponentManager.getToolImplementation(configClass);
	                    var newChild = _react2.default.createElement(ToolClass, props);
	                    return newChild;
	                }
	            }.bind(this));
	
	            if (childList && childList.length > 0) {
	                var filteredChildren = clonedChildren.filter(function (child, index) {
	                    if (child === null) return false;else return true;
	                }, this);
	                return filteredChildren;
	            } else return clonedChildren;
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
	
	    return ComponentManager;
	}();
	
	ComponentManager.toolRegistry = {};
	ComponentManager.toolConfigMap = new Map();
	ComponentManager.debug = false;
	
	exports.default = ComponentManager;
	//# sourceMappingURL=data:application/json;base64,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LFlBQVksaUJBQUEsQUFBaUIsc0JBSjlCLEFBSUMsQUFBWSxBQUF1QyxBQUN2RDt3QkFBSSxXQUFXLDhCQUFBLEFBQUUsV0FMZCxBQUtDLEFBQVcsQUFBZ0IsQUFDL0I7MkJBckU4QixBQWtEbEMsQUFhTyxBQU1ILEFBQU87O2FBckV1QixDQUFBLEFBd0VwQyxLQTdFcUMsQUFLbkMsQUFBaUIsQUFBaUIsQUF3RS9CLEFBRVAsS0ExRXFCLEVBTGtCLEFBQ3ZDOztnQkE4RUcsYUFBYSxVQUFBLEFBQVUsU0FBVixBQUFtQjtvQkFDM0Isa0NBQW1CLEFBQWUsaUJBQU8sQUFBUyxPQUFULEFBQWUsT0FBTSxBQUM5RDt3QkFBRyxVQUFBLEFBQVUsTUFDVCxPQURKLEFBQ0ksQUFBTyxXQUVQLE9BSnFDLEFBQ3pDLEFBR0ksQUFBTztpQkFKOEIsRUFEWixBQUM3QixBQUFtQixBQUtyQixBQUNGLElBTnVCLEVBRFUsQUFDakM7dUJBREosQUFBcUMsQUFPakMsQUFBTzttQkFFUCxPQVRKLEFBU0ksQUFBTzs7OztrQ0FHRSxNQUFNLEtBQUs7aUJBQ25CLElBQUEsQUFBSSxRQUFULEFBQWlCLEtBQUssQUFDbEI7cUJBQUEsQUFBSyxRQUFRLElBRGpCLEFBQXNCLEFBQ2xCLEFBQWEsQUFBSSxBQUVyQjs7bUJBSnFDLEFBSXJDLEFBQU8sS0FKOEIsQUFDckM7O1FBMWFKOztXQURFO0dBQUE7O0FBa2JOLGlCQUFBLEFBQWlCLGVBQWpCLEFBQWdDO0FBQ2hDLGlCQUFBLEFBQWlCLGdCQUFnQixJQUFqQyxBQUFpQyxBQUFJO0FBQ3JDLGlCQUFBLEFBQWlCLFFBQWpCLEFBQXlCOztrQkFFViIsImZpbGUiOiJDb21wb25lbnRNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnIGZyb20gXCIuL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ1NTIGZyb20gXCIuL2NvbmZpZ3MvQ1NTXCI7XG5pbXBvcnQgUHJvcHMgZnJvbSBcIi4vY29uZmlncy9Qcm9wc1wiO1xuXG5jbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSwganNDbGFzcykge1xuICAgICAgICBpZiAoIUNvbXBvbmVudE1hbmFnZXIudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSlcbiAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSA9IGpzQ2xhc3M7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci50b29sUmVnaXN0cnlbYXNDbGFzc05hbWVdO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlclRvb2xDb25maWcodG9vbENsYXNzLCBjb25maWcpIHtcbiAgICAgICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnRvb2xDb25maWdNYXAuaGFzKHRvb2xDbGFzcykpXG4gICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLnRvb2xDb25maWdNYXAuc2V0KHRvb2xDbGFzcywgY29uZmlnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9vbENvbmZpZyh0b29sQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIudG9vbENvbmZpZ01hcC5nZXQodG9vbENsYXNzKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBpbml0aWFsaXplKHJlYWN0Q29tcCx0eXBlKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5zZXR0aW5ncykge1xuICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gcmVhY3RDb21wLnByb3BzLnNldHRpbmdzO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciBuZXdDb25maWcgPSBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xDb25maWcocmVhY3RDb21wLmNvbnN0cnVjdG9yKVxuICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzID0gbmV3Q29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuc3R5bGUpIHsgLy8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSByZWFjdENvbXAucHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5jbGFzc05hbWUpIHsgLy8gdXNlciBjbGFzc05hbWUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmVuYWJsZSkge1xuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUpIHJlYWN0Q29tcC5zZXR0aW5ncy5lbmFibGUuc3RhdGUgPSByZWFjdENvbXAucHJvcHMuZW5hYmxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMudXNlQ1NTKSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLnVzZUNTUykgcmVhY3RDb21wLnNldHRpbmdzLnVzZUNTUy5zdGF0ZSA9IHJlYWN0Q29tcC5wcm9wcy51c2VDU1M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLnZpc2libGUpIHJlYWN0Q29tcC5zZXR0aW5ncy52aXNpYmxlLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLnZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5kZXZpY2VNb2RlKSB7XG4gICAgICAgICAgICBpZiAocmVhY3RDb21wLnNldHRpbmdzLmRldmljZU1vZGUpIHJlYWN0Q29tcC5zZXR0aW5ncy5kZXZpY2VNb2RlLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLmRldmljZU1vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5pY29uTW9kZSkge1xuICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5pY29uTW9kZSkgcmVhY3RDb21wLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlID0gcmVhY3RDb21wLnByb3BzLmljb25Nb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09IFwiY29udGFpbmVyXCIgICYmIHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICE9IFwiSFRNTFdyYXBwZXJcIikge1xuICAgICAgICAgICAgdmFyIFdyYXBwZXJDb25maWdDbGFzcyA9IHJlYWN0Q29tcFtcIldyYXBwZXJDb25maWdDbGFzc1wiXSA/IHJlYWN0Q29tcFtcIldyYXBwZXJDb25maWdDbGFzc1wiXSA6IG51bGw7XG4gICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihyZWFjdENvbXAucHJvcHMuY2hpbGRyZW4sIHJlYWN0Q29tcC5zZXR0aW5ncywgV3JhcHBlckNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgIHJlYWN0Q29tcC5yZW5kZXJDaGlsZHJlbiA9IHJlYWN0Q29tcC5yZW5kZXJDaGlsZHJlbi5iaW5kKHJlYWN0Q29tcCk7XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmFkZEZvcmNlVXBkYXRlVG9DYWxsYmFja3MocmVhY3RDb21wKTtcblxuXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyhjb25maWcsdHlwZSl7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coY29uZmlnLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uZmlnLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTW9kZVN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTW9kZU5hbWVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZpc2libGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQoY29uZmlnLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25Nb2RlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKGNvbmZpZywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGV2aWNlTW9kZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsYXJnZVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInByb3BzXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiAgbmV3IFByb3BzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYodHlwZSA9PT0gXCJjb250YWluZXJcIil7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25maWcsIHtcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6e1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImFkZEdhcEF0XCI6e1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZChjb25maWcsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uZmlnLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXRpYyBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHJlYWN0Q29tcCwgbmV4dFByb3BzKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIC0tLVwiKTtcbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgU2V0dGluZ3MgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogU2V0dGluZ3NcIik7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5yZW1vdmVGb3JjZVVwZGF0ZUZyb21DYWxsYmFja3MocmVhY3RDb21wKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5hZGRGb3JjZVVwZGF0ZVRvQ2FsbGJhY2tzKHJlYWN0Q29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKSB7IC8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBwcm9wcyBzdHlsZSBjaGFuZ2VkIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMuc3R5bGUgKyBcIiB0byBcIiArIG5leHRQcm9wcy5zdHlsZSk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmNsYXNzTmFtZSAhPT0gbmV4dFByb3BzLmNsYXNzTmFtZSkgeyAvLyB1c2VyIGNsYXNzTmFtZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIGNsYXNzTmFtZSBjaGFuZ2VkIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMuY2xhc3NOYW1lICsgXCIgdG8gXCIgKyBuZXh0UHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBjbGFzc05hbWVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBuZXh0UHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuZW5hYmxlICE9PSBuZXh0UHJvcHMuZW5hYmxlKSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgZW5hYmxlIGNoYW5nZWQgIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMuZW5hYmxlICsgXCIgdG8gXCIgKyBuZXh0UHJvcHMuZW5hYmxlKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuZW5hYmxlICE9PSB1bmRlZmluZWQgJiYgcmVhY3RDb21wLnNldHRpbmdzLmVuYWJsZSkge1xuICAgICAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAqKiBlbmFibGVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmVuYWJsZS5zdGF0ZSA9IG5leHRQcm9wcy5lbmFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWN0Q29tcC5wcm9wcy52aXNpYmxlICE9PSBuZXh0UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIHZpc2libGUgY2hhbmdlZCBmcm9tIFwiICsgcmVhY3RDb21wLnByb3BzLnZpc2libGUgKyBcIiB0byBcIiArIG5leHRQcm9wcy52aXNpYmxlKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMudmlzaWJsZSAhPT0gdW5kZWZpbmVkICYmIHJlYWN0Q29tcC5zZXR0aW5ncy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLnZpc2libGUuc3RhdGUgPSBuZXh0UHJvcHMudmlzaWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVhY3RDb21wLnByb3BzLmRldmljZU1vZGUgIT09IG5leHRQcm9wcy5kZXZpY2VNb2RlKSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogcHJvcHMgZGV2aWNlTW9kZSBjaGFuZ2VkIGZyb20gXCIgKyByZWFjdENvbXAucHJvcHMuZGV2aWNlTW9kZSArIFwiIHRvIFwiICsgbmV4dFByb3BzLmRldmljZU1vZGUpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5kZXZpY2VNb2RlICE9PSB1bmRlZmluZWQgJiYgcmVhY3RDb21wLnNldHRpbmdzLmRldmljZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogZGV2aWNlTW9kZVwiKTtcbiAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuZGV2aWNlTW9kZS5zdGF0ZSA9IG5leHRQcm9wcy5kZXZpY2VNb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuaWNvbk1vZGUgIT09IG5leHRQcm9wcy5pY29uTW9kZSkge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiICoqIHByb3BzIGljb25Nb2RlIGNoYW5nZWQgZnJvbSBcIiArIHJlYWN0Q29tcC5wcm9wcy5pY29uTW9kZSArIFwiIHRvIFwiICsgbmV4dFByb3BzLmljb25Nb2RlKTtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuaWNvbk1vZGUgIT09IHVuZGVmaW5lZCAgJiYgcmVhY3RDb21wLnNldHRpbmdzLmljb25Nb2RlKXtcbiAgICAgICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKHJlYWN0Q29tcC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgKiogaWNvbk1vZGVcIik7XG4gICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlID0gbmV4dFByb3BzLmljb25Nb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFjdENvbXAucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiY2hpbGRyZW5cIik7XG4gICAgICAgICAgICB2YXIgV3JhcHBlckNvbmZpZ0NsYXNzID0gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdID8gcmVhY3RDb21wW1wiV3JhcHBlckNvbmZpZ0NsYXNzXCJdIDogbnVsbDtcbiAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbiwgcmVhY3RDb21wLnNldHRpbmdzLCBXcmFwcGVyQ29uZmlnQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgY29tcG9uZW50V2lsbFVubW91bnQocmVhY3RDb21wKXtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiIC0gY29tcG9uZW50V2lsbFVubW91bnRcIik7XG4gICAgICAgICBDb21wb25lbnRNYW5hZ2VyLnJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyhyZWFjdENvbXApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzaG91bGRDb21wb25lbnRVcGRhdGUocmVhY3RDb21wLCBuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhyZWFjdENvbXAuY29uc3RydWN0b3IubmFtZSArIFwiIC0gc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xuICAgICAgICAvL3RvLWRvIHN5bmMgYmV0d2VlbiBwcm9wcyBjbGFzcyBhbmQgd2VhdmVzdGF0ZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRm9yY2VVcGRhdGVUb0NhbGxiYWNrcyhyZWFjdENvbXApIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncztcbiAgICAgICAgaWYgKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZiAoV2VhdmUuaXNMaW5rYWJsZShvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApe1xuICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzO1xuICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5hZGRHcm91cGVkQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLmFkZEdyb3VwZWRDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2JqIGluc3RhbmNlb2YgSW5saW5lU3R5bGUpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikuYWRkR3JvdXBlZENhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmogaW5zdGFuY2VvZiBDU1Mpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikuYWRkR3JvdXBlZENhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZUZvcmNlVXBkYXRlRnJvbUNhbGxiYWNrcyhyZWFjdENvbXApIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncztcbiAgICAgICAgaWYgKCFXZWF2ZS5pc0xpbmthYmxlKGNvbmZpZykpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbmZpZywgXCIgaXMgbm90IGEgTGlua2FibGVPYmplY3RcIik7XG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29uZmlnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG4gPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIG9iaiA9IGNvbmZpZ1twbl07XG4gICAgICAgICAgICBpZiAoV2VhdmUuaXNMaW5rYWJsZShvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXApe1xuICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmouY2hpbGRMaXN0Q2FsbGJhY2tzO1xuICAgICAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3Mob2JqKS5yZW1vdmVDYWxsYmFjayhyZWFjdENvbXAsIHJlYWN0Q29tcC5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2JqIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikucmVtb3ZlQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iaiBpbnN0YW5jZW9mIElubGluZVN0eWxlKXtcbiAgICAgICAgICAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyhvYmopLnJlbW92ZUNhbGxiYWNrKHJlYWN0Q29tcCwgcmVhY3RDb21wLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmogaW5zdGFuY2VvZiBDU1Mpe1xuICAgICAgICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG9iaikucmVtb3ZlQ2FsbGJhY2socmVhY3RDb21wLCByZWFjdENvbXAuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cblxuICAgIC8vRm9yIHRlc3RpbmcgIGFuZCBkZWJ1Z1xuICAgIHN0YXRpYyBpc1Nlc3Npb25DaGFuZ2VkRm9yKGNvbmZpZykge1xuICAgICAgICBpZiAoIVdlYXZlLmlzTGlua2FibGUoY29uZmlnKSlcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29uZmlnLCBcIiBpcyBub3QgYSBMaW5rYWJsZU9iamVjdFwiKTtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjb25maWcpO1xuICAgICAgICB2YXIgbGlua2JsZU9iamVjdCA9IG51bGw7XG4gICAgICAgIHZhciBtb3JlTGlua2FibGVPYmplY3RzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBuID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBvYmogPSBjb25maWdbcG5dO1xuICAgICAgICAgICAgaWYgKFdlYXZlLmlzTGlua2FibGUob2JqKSkge1xuICAgICAgICAgICAgICAgIHZhciBsbyA9IChvYmogaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKSA/IG9iai5jaGlsZExpc3RDYWxsYmFja3MgOiBvYmpcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmtibGVPYmplY3QpIGxpbmtibGVPYmplY3QgPSBsbztcbiAgICAgICAgICAgICAgICBlbHNlIG1vcmVMaW5rYWJsZU9iamVjdHMucHVzaChsbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zykge1xuICAgICAgICAgICAgdmFyIGlzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKG1vcmVMaW5rYWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb3JlTGlua2FibGVPYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQ2hhbmdlZCA9IFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIG1vcmVMaW5rYWJsZU9iamVjdHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vcmVMaW5rYWJsZU9iamVjdHNbaV0sIFwiIGNoYW5nZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpbmtibGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpc0NoYW5nZWQgPSBXZWF2ZS5kZXRlY3RDaGFuZ2UoY29uZmlnLCBsaW5rYmxlT2JqZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmtibGVPYmplY3QsIFwiIGNoYW5nZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb25maWcsIFwiIG5vIHNlc3Npb24gQ2hpbGRyZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9yZUxpbmthYmxlT2JqZWN0cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIFdlYXZlLmRldGVjdENoYW5nZShjb25maWcsIGxpbmtibGVPYmplY3QsIG1vcmVMaW5rYWJsZU9iamVjdHMpXG4gICAgICAgIGVsc2UgaWYgKGxpbmtibGVPYmplY3QpXG4gICAgICAgICAgICByZXR1cm4gV2VhdmUuZGV0ZWN0Q2hhbmdlKGNvbmZpZywgbGlua2JsZU9iamVjdCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIGhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihjaGlsZHJlbiwgY29uZmlnLCBXcmFwcGVyQ29uZmlnQ2xhc3MpIHtcbiAgICAgICAgY29uZmlnLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG5cbiAgICAgICAgY29uZmlnLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSBjb25maWcuY2hpbGRyZW4uZ2V0TmFtZShrZXkpO1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlbW92ZU9iamVjdChjb25maWdOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2hpbGROYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZENvbmZpZ01hcC5nZXQoY2hpbGQpO1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29uZmlnTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICBpZiAodHlwZW9mIChjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIikgeyAvLyBmb3IgSFRNTCBFbGVtZW50c1xuICAgICAgICAgICAgICAgIGlmICghY2hpbGRDb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gV3JhcHBlckNvbmZpZ0NsYXNzID8gV3JhcHBlckNvbmZpZ0NsYXNzIDogSFRNTFdyYXBwZXJDb25maWdcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJywgY29uZmlnQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGZvciBSZWFjdCBDb21wb3NpdGUgRWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZighY2hpbGQuc2V0dGluZ3MgJiYgIWNoaWxkLnByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gQ29tcG9uZW50TWFuYWdlci5nZXRUb29sQ29uZmlnKGNoaWxkLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkQ29uZmlnICYmIGNvbmZpZ0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLCBjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjaGlsZC5zZXR0aW5ncz9jaGlsZC5zZXR0aW5nczpjaGlsZC5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnNldE9iamVjdCgnJywgY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHtjbGFzc05hbWUsIHN0eWxlLCAuLi5vdGhlcn0gPSBjaGlsZC5wcm9wcztcbiAgICAgICAgICAgIGlmKGNoaWxkLnByb3BzLmVuYWJsZSAmJiBjaGlsZENvbmZpZy5lbmFibGUpY2hpbGRDb25maWcuZW5hYmxlLnN0YXRlID0gY2hpbGQucHJvcHMuZW5hYmxlO1xuICAgICAgICAgICAgaWYgKHN0eWxlKSBjaGlsZENvbmZpZy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gc3R5bGU7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSBjaGlsZENvbmZpZy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gY2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKG90aGVyICYmIGNoaWxkQ29uZmlnLnByb3BzKSBjaGlsZENvbmZpZy5wcm9wcy5tZXJnZShvdGhlcik7XG4gICAgICAgICAgICBjb25maWcuY2hpbGRDb25maWdNYXAuc2V0KGNoaWxkLCBjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICBjb25maWcuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLCBjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb25maWdbXCJhZGRHYXBBdFwiXSkge1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJ2dhcERpdicsIEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyByZW5kZXJDaGlsZHJlbihyZWFjdENvbXAsY2hpbGRMaXN0KSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2cocmVhY3RDb21wLmNvbnN0cnVjdG9yLm5hbWUgKyBcIiAtLSByZW5kZXJDaGlsZHJlblwiKTtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIHZhciBwcm9wc0NvbmZpZyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5wcm9wcztcblxuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBjaGlsZENvbmZpZ3MubWFwKGZ1bmN0aW9uIChjaGlsZENvbmZpZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jb25maWdDaGlsZE1hcC5nZXQoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSByZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG5cbiAgICAgICAgICAgIGlmKGNoaWxkTGlzdCl7XG4gICAgICAgICAgICAgICAgIGlmKGNoaWxkTGlzdC5pbmRleE9mKGNvbmZpZ05hbWUpID09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BzID0ge31cblxuICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgLy9pZihjaGlsZC5wcm9wcyAmJiAhY2hpbGQucHJvcHMuc2V0dGluZ3MpXG5cbiAgICAgICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLm1lcmdlSW50byhwcm9wcywgY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJvcHNDb25maWcgJiYgcHJvcHNDb25maWcuaGFzQ2hpbGRQcm9wcygpKXtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gcHJvcHNDb25maWcuZ2V0UHJvcHNGb3JDaGlsZChyZWFjdENvbXAsIGNoaWxkQ29uZmlnLGNvbmZpZ05hbWUsaW5kZXgpO1xuICAgICAgICAgICAgICAgIENvbXBvbmVudE1hbmFnZXIubWVyZ2VJbnRvKHByb3BzLCBvYmopO1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBwcm9wc0NvbmZpZy5rZXlQcm9wO1xuICAgICAgICAgICAgICAgIGlmKGtleSAmJiBrZXkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleSA9PT0gXCJpbmRleFwiKSBwcm9wc1tcImtleVwiXSA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGtleSA9PT0gXCJvYmplY3ROYW1lXCIpIHByb3BzW1wia2V5XCJdID0gY29uZmlnTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihjaGlsZENvbmZpZ1trZXldKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNoaWxkQ29uZmlnW2tleV0gaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSlwcm9wc1tcImtleVwiXSA9IGNoaWxkQ29uZmlnW2tleV0uc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHByb3BzW1wia2V5XCJdID0gY2hpbGRDb25maWdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImtleVwiXSA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzW1wia2V5XCJdID0gaW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNoaWxkQ29uZmlnLnByb3BzKXtcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0FyZyA9IGNoaWxkID8gY2hpbGQgOiBjaGlsZENvbmZpZztcbiAgICAgICAgICAgICAgICBDb21wb25lbnRNYW5hZ2VyLm1lcmdlSW50byhwcm9wcywgY2hpbGRDb25maWcucHJvcHMuZ2V0UHJvcHModGhpc0FyZyxjaGlsZENvbmZpZyxjb25maWdOYW1lLCBpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZ05hbWUgPT09IFwiZ2FwRGl2XCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JkZXJWYWx1ZSA9IFN0cmluZyhyZWFjdENvbXAuc2V0dGluZ3MuYWRkR2FwQXQuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4ob3JkZXJWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzdHlsZVwiXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG9yZGVyVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gY2hpbGRDb25maWcuRkxFWEpTX0NMQVNTX0lORk8ubmFtZXNbMF0ucU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VG9vbENsYXNzIHsuLi5wcm9wc30gPiB7Y2hpbGR9IDwgL1Rvb2xDbGFzcz47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5oYXMoY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLmRlbGV0ZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZWRDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLCBjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5zZXQoY2xvbmVkQ2hpbGQsIGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy90by1kbyBuZWVkIHRvIHJlcGxhY2Ugd2l0aCBmbGV4aW5mbyBmaWxlIG9yIHRpaGVyIG1lYW4sIGNyZWF0ZSBhIHV0aWxpdHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAvL3RoaXMgc29sdXRpb24gd2lsbCBmYWlsIHdoZW4gY29uZmlnIG5vdCBwYXJ0IG9mIHNlc3Npb24gdHJlZVxuICAgICAgICAgICAgICAgIHZhciBjb25maWdDbGFzcyA9IGNoaWxkQ29uZmlnLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSBDb21wb25lbnRNYW5hZ2VyLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0gPCBUb29sQ2xhc3Mgey4uLnByb3BzfS8+O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmKGNoaWxkTGlzdCAmJiBjaGlsZExpc3QubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IGNsb25lZENoaWxkcmVuLmZpbHRlcihmdW5jdGlvbihjaGlsZCxpbmRleCl7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZENoaWxkcmVuO1xuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuICAgIH1cblxuICAgIHN0YXRpYyBtZXJnZUludG8oaW50bywgb2JqLCBpZ25vcmVQcm9wcykge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG59XG5cbkNvbXBvbmVudE1hbmFnZXIudG9vbFJlZ2lzdHJ5ID0ge307XG5Db21wb25lbnRNYW5hZ2VyLnRvb2xDb25maWdNYXAgPSBuZXcgTWFwKCk7XG5Db21wb25lbnRNYW5hZ2VyLmRlYnVnID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudE1hbmFnZXI7XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _appendVendorPrefix = __webpack_require__(9);
	
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
	        var stateObj = style.state;
	        if (stateObj.display === "flex") {
	            if (align === "left") stateObj["justifyContent"] = "flex-start";else if (align === "center") stateObj["justifyContent"] = "center";else if (align === "right") stateObj["justifyContent"] = "flex-end";else if (align === "justify") stateObj["justifyContent"] = "space-around";
	        }
	        style.state = stateObj;
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
	//# sourceMappingURL=data:application/json;base64,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d0JBQUEsQUFBWSxBQUNaO3FCQUFTLFNBQUEsQUFBUyxJQUFULEFBQWEsQUFDdEI7dUJBQVcsU0FBQSxBQUFTLHlCQUFULEFBQWtDLEFBQzdDO3dCQUFZLFNBQUEsQUFBUyxpQkFBVCxBQUEwQixBQUN0QztvQkFyRk8sQUEwRVUsQUFBa0IsQUFDdkMsQUFBTyxBQVVILEFBQVEsQUFJaEI7U0FkVyxFQURnQyxBQUN2QztLQURxQjs7VUFlekIsQUFBTSxrQkFBUSxBQUFVO2lEQUNNLEFBQ3RCO3NCQUFBLEFBQVUsQUFDVjtvQkFBQSxBQUFRLEFBQ1I7bUJBQUEsQUFBTyxBQUNQO29CQUFBLEFBQVEsQUFDUjtrQkFBQSxBQUFNLEFBQ047aUJBQUEsQUFBSyxBQUNMO3VCQUFXLFNBQUEsQUFBUyx5QkFBVCxBQUFrQyxBQUM3Qzt3QkFsR08sQUF5RkQsQUFBa0IsQUFDNUIsQUFBTyxBQVFILEFBQVksQUFTcEI7O1NBakJXLEVBRHFCLEFBQzVCO0tBRFU7O1dBa0JkLEFBQU8sVUEzR1YsQUFBa0IsQUEyR2YsQUFBaUI7R0EzR3JCLEFBQUMsQUE2R0MiLCJmaWxlIjoiU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwZW5kVmVuZG9yUHJlZml4IGZyb20gJy4vYXBwZW5kVmVuZG9yUHJlZml4JztcblxuXG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuICAgIGZ1bmN0aW9uIFN0eWxlKCkge1xuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIG1lcmdlKGludG8sIG9iaikge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cblxuICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzID0gZnVuY3Rpb24gKGludG8sIG9iaiwgYXBwZW5kVmVuZG9yUHJlZml4KSB7XG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IG1lcmdlKGludG8sIG9iaik7XG4gICAgICAgIGlmIChhcHBlbmRWZW5kb3JQcmVmaXgpXG4gICAgICAgICAgICByZXR1cm4gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlT2JqZWN0KVxuICAgICAgICBlbHNlIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9XG5cblxuICAgIC8qY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gZ2V0IGEgcGFydGljdWxhciBzZXNzaW9uZWQgcHJvcGVydHkgb2YgYSBzZXNzaW9uZWQgb2JqZWN0Ki9cbiAgICBTdHlsZS5nZXRTdHlsZVN0YXRlRm9yID0gZnVuY3Rpb24gKHNlc3Npb25PYmosIHByb3BlcnRpZXMsIGFwcGVuZFZlbmRvclByZWZpeCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYoc2Vzc2lvbk9ialtwcm9wZXJ0eU5hbWVdLnN0YXRlKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2Vzc2lvbk9ialtwcm9wZXJ0eU5hbWVdLmNvbnN0cnVjdG9yID09PSB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKHN0YXRlLHNlc3Npb25PYmpbcHJvcGVydHlOYW1lXS5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZVtwcm9wZXJ0eU5hbWVdID0gc2Vzc2lvbk9ialtwcm9wZXJ0eU5hbWVdLnN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgIHN0YXRlW3Byb3BlcnRpZXNdID0gc2Vzc2lvbk9ialtwcm9wZXJ0aWVzXS5zdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZihhcHBlbmRWZW5kb3JQcmVmaXgpXG4gICAgICAgICAgICByZXR1cm4gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH07XG5cblxuICAgIFN0eWxlLmdldFN0eWxlID0gZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBhcHBlbmRWZW5kb3JQcmVmaXgoc3R5bGUpO1xuICAgIH1cblxuICAgIFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeCA9IGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICByZXR1cm4gYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlKTtcbiAgICB9XG5cbiAgICBTdHlsZS5hbGlnbkNoaWxkcmVuID0gZnVuY3Rpb24oc3R5bGUsYWxpZ24pe1xuICAgICAgICB2YXIgc3RhdGVPYmogPSBzdHlsZS5zdGF0ZTtcbiAgICAgICAgaWYoc3RhdGVPYmouZGlzcGxheSA9PT0gXCJmbGV4XCIpe1xuICAgICAgICAgICAgaWYoYWxpZ24gPT09IFwibGVmdFwiKSBzdGF0ZU9ialtcImp1c3RpZnlDb250ZW50XCJdID0gXCJmbGV4LXN0YXJ0XCI7XG4gICAgICAgICAgICBlbHNlIGlmKGFsaWduID09PSBcImNlbnRlclwiKXN0YXRlT2JqW1wianVzdGlmeUNvbnRlbnRcIl0gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgZWxzZSBpZihhbGlnbiA9PT0gXCJyaWdodFwiKXN0YXRlT2JqW1wianVzdGlmeUNvbnRlbnRcIl0gPSBcImZsZXgtZW5kXCI7XG4gICAgICAgICAgICBlbHNlIGlmKGFsaWduID09PSBcImp1c3RpZnlcIilzdGF0ZU9ialtcImp1c3RpZnlDb250ZW50XCJdID0gXCJzcGFjZS1hcm91bmRcIjtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZS5zdGF0ZSA9IHN0YXRlT2JqO1xuICAgICAgICAvLyB0by1kbyBmb3IgQ1NTIHdpdGggZmxvYXQgdmFsdWVzXG5cbiAgICB9XG5cblxuXG5cblxuXG5cbiAgICAvLyBkdWUgdG8gYm9vdHN0cmFwIE5hdmJhciB6aW5kZXggKDEwMjkpIHZhbHVlIHdlIGhhdmUgdG8gZ2l2ZSAxMDMwIGZvciBvdmVybGF5XG4gICAgU3R5bGUub3ZlcmxheUNvbnRhaW5lciA9IGZ1bmN0aW9uIChpc09wZW4pIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjEpJyxcbiAgICAgICAgICAgIG9wYWNpdHk6IGlzT3BlbiA/IDEgOiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBpc09wZW4gPyAndHJhbnNsYXRlM2QoMCwgMCwgMCknIDogJ3RyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKScsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBpc09wZW4gPyAnb3BhY2l0eSAwLjVzJyA6ICdvcGFjaXR5IDAuNXMsIHRyYW5zZm9ybSAwLjFzIDAuNXMnLFxuICAgICAgICAgICAgekluZGV4OiAxMDMwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFN0eWxlLm1vZGFsID0gZnVuY3Rpb24gKGlzT3Blbikge1xuICAgICAgICByZXR1cm4gYXBwZW5kVmVuZG9yUHJlZml4KHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgekluZGV4OiAxMDUwLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNPcGVuID8gJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyA6ICd0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCknLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzJyxcblxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG5cblxuICAgIG1vZHVsZS5leHBvcnRzID0gU3R5bGU7XG5cbn0obW9kdWxlKSk7XG4iXX0=
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGVuZFZlbmRvclByZWZpeC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJLHdCQUF3QixRQUF4QixBQUF3QixBQUFROztBQUVwQyxPQUFBLEFBQU8sb0JBQVUsQUFBVSxRQUFWLEFBQWtCO1FBQzNCLEtBQUssT0FEK0IsQUFDcEMsQUFBSyxBQUFPLEFBQ2hCO1FBQUksaUJBQWlCLE9BQUEsQUFBTyxVQUZZLEFBRW5CLEFBQWlCLEFBRXRDOztTQUFLLElBQUksWUFBQSxBQUFZLEdBQUcsWUFBWSxVQUFBLEFBQVUsUUFBOUMsQUFBc0Q7WUFDOUMsYUFBYSxVQUQ4QyxBQUMzRCxBQUFhLEFBQVUsQUFDM0I7WUFBSSxjQUFBLEFBQWM7QUFBbEIsQUFBd0IsQUFJeEIscUJBSndCLEFBQ3BCOzs7WUFHQSxPQUFPLE9BTm9ELEFBTTNELEFBQU8sQUFBTyxBQUVsQixZQVIrRCxBQUMvRDs7YUFPSyxJQUFBLEFBQUksT0FBVCxBQUFnQixNQUFNLEFBQ2xCO2dCQUFJLGVBQUEsQUFBZSxLQUFmLEFBQW9CLE1BQXhCLEFBQUksQUFBMEI7bUJBQzFCLEFBQUcsT0FBTyxLQVZ0QixBQVFJLEFBQ0ksQUFBb0MsQUFDaEMsQUFBVSxBQUFLLEFBSzNCLEtBTjRDLEFBQ2hDOzs7OztRQUtSLFdBbkJvQyxBQW1CcEMsQUFBVyxBQUNmO1NBQUssSUFBQSxBQUFJLE9BQVQsQUFBZ0IsSUFBSSxBQUNoQjtpQkFBUyxzQkFBVCxBQUFTLEFBQXNCLFFBQVEsR0FEM0MsQUFBb0IsQUFDaEIsQUFBdUMsQUFBRyxBQUc5Qzs7O1dBeEJhLEFBQTJCLEFBd0J4QyxBQUFPLFNBeEJpQyxBQUN4QztDQURhIiwiZmlsZSI6ImFwcGVuZFZlbmRvclByZWZpeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFZlbmRvclByb3BlcnR5TmFtZSA9IHJlcXVpcmUoJy4vZ2V0VmVuZG9yUHJvcGVydHlOYW1lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlcykge1xuICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAgIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgICBmb3IgKHZhciBuZXh0SW5kZXggPSAxOyBuZXh0SW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBuZXh0SW5kZXgrKykge1xuICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgICAgICBpZiAobmV4dFNvdXJjZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmVmaXhlZCA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiB0bykge1xuICAgICAgICBwcmVmaXhlZFtnZXRWZW5kb3JQcm9wZXJ0eU5hbWUoa2V5KV0gPSB0b1trZXldXG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeGVkXG59XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldFZlbmRvclByb3BlcnR5TmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJLE1BQU0sU0FBQSxBQUFTLGNBQWYsQUFBTSxBQUF1QjtBQUNqQyxJQUFJLFdBQVcsQ0FBQSxBQUFDLE9BQUQsQUFBUSxVQUFSLEFBQWtCLEtBQTdCLEFBQVcsQUFBdUI7QUFDdEMsSUFBQSxBQUFJOzs7QUFHSixPQUFBLEFBQU8sb0JBQVUsQUFBVSxNQUFNLEFBRTdCOztRQUFJLFFBQVEsSUFBQSxBQUFJLE9BQU8sT0FBdkIsQUFBdUIsQUFBTyxBQUU5Qjs7UUFBSSxPQUFPLEtBQUEsQUFBSyxPQUFMLEFBQVksR0FBWixBQUFlLGdCQUFnQixLQUFBLEFBQUssT0FKbEIsQUFJbEIsQUFBK0IsQUFBWSxBQUN0RDtRQUFBLEFBQUksaUJBQWlCLEFBQ2pCO2VBQU8sa0JBRFgsQUFBcUIsQUFDVixBQUFrQjtXQUN0QixBQUNIO2FBQUssSUFBSSxJQUFBLEFBQUksR0FBRyxJQUFJLFNBQUEsQUFBUyxRQUFRLEVBQUEsQUFBRTtnQkFDL0IsYUFBYSxTQUFBLEFBQVMsS0FEWSxBQUNyQixBQUFjLEFBQy9CLEtBRnNDLEFBQ3RDO2dCQUNJLGNBQWMsSUFBQSxBQUFJO2tDQUNBLFNBRE8sQUFDekIsQUFBa0IsQUFBUyxBQUMzQjt1QkFaQyxBQUtiLEFBR0ksQUFFSSxBQUE2QixBQUV6QixBQUFPLFdBRmtCLEFBQ3pCOzs7O0NBWEMiLCJmaWxlIjoiZ2V0VmVuZG9yUHJvcGVydHlOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG52YXIgcHJlZml4ZXMgPSBbJ01veicsICdXZWJraXQnLCAnTycsICdtcyddO1xudmFyIGRvbVZlbmRvclByZWZpeDtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJvcGVyIHZlbmRvciBwcm9wZXJ0eSBuYW1lLiAodHJhbnNpdGlvbiA9PiBXZWJraXRUcmFuc2l0aW9uKVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocHJvcCkge1xuXG4gICAgaWYgKHByb3AgaW4gZGl2LnN0eWxlKSByZXR1cm4gcHJvcDtcblxuICAgIHZhciBwcm9wID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc3Vic3RyKDEpO1xuICAgIGlmIChkb21WZW5kb3JQcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIGRvbVZlbmRvclByZWZpeCArIHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHZlbmRvclByb3AgPSBwcmVmaXhlc1tpXSArIHByb3A7XG4gICAgICAgICAgICBpZiAodmVuZG9yUHJvcCBpbiBkaXYuc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBkb21WZW5kb3JQcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVuZG9yUHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);
	
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
	    _ComponentManager2.default.createDefaultSessionProperties(this);
	};
	
	Weave.registerClass('weavereact.HTMLWrapperConfig', HTMLWrapperConfig, [weavejs.api.core.ILinkableObject]);
	
	exports.default = HTMLWrapperConfig;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU0sNkJBQUEsQUFHRjswQkFIRSxBQUdXLEFBQ1I7OztBQURRLCtCQUNSLEFBQWlCLCtCQUR0QixBQUFhLEFBQ1IsQUFBZ0Q7Q0FEckQ7O0FBS0osTUFBQSxBQUFNLGNBQU4sQUFBb0IsZ0NBQXBCLEFBQW9ELG1CQUFrQixDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBbkYsQUFBdUUsQUFBaUI7O2tCQUV6RSIsImZpbGUiOiJIVE1MV3JhcHBlckNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuXG5jbGFzcyBIVE1MV3JhcHBlckNvbmZpZ3tcblxuXG4gICAgY29uc3RydWN0b3IoKXsvL3RvLWRvIG5lZWQgdG8gYWRkIHZlcmlmaWVyIGZvciBlYWNoIFNlc3Npb24gcHJvcGVydHkgdG8gcmVzdHJpY3QgdG8gcmVzcGVjdGl2ZSBwcm9wZXJ0eVxuICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyk7XG4gICAgfVxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LkhUTUxXcmFwcGVyQ29uZmlnJywgSFRNTFdyYXBwZXJDb25maWcsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxXcmFwcGVyQ29uZmlnO1xuIl19

/***/ },
/* 12 */
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
	
	var _Style = __webpack_require__(7);
	
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
	            "default": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "domDefined": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            }
	        });
	
	        Object.defineProperties(this, {
	            "state": {
	                get: function get() {
	                    var stateObj = this.default.state;
	                    if (this.domDefined.state) {
	                        stateObj = stateObj ? _Style2.default.mergeStyleObjects(stateObj, this.domDefined.state) : this.domDefined.state;
	                    }
	                    return _Style2.default.mergeStyleObjects({}, stateObj); // need to send new copy to avoid react warniing
	                },
	                set: function set(obj) {
	                    var stateObj = this.default.state;
	                    this.default.state = stateObj ? _Style2.default.mergeStyleObjects(stateObj, obj, true) : obj;
	                }
	            }
	        });
	    }
	
	    _createClass(InlineStyle, [{
	        key: "getStyleFor",
	        value: function getStyleFor() {
	            //to-do : type: mobile mode | Tablet mode | laptop Mode  | iconMode
	            return this.state;
	        }
	    }]);
	
	    return InlineStyle;
	}();
	
	Weave.registerClass('weavereact.InlineStyle', InlineStyle, [weavejs.api.core.ILinkableObject]);
	
	exports.default = InlineStyle;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklubGluZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFFTSxBQUlGOzhCQUpFLEFBSVcsQUFFVDs7OztBQUZTLGVBRVQsQUFBTyxpQkFBUCxBQUF3QixNQUFNLEFBQzFCO3VCQUFXLEFBQ1A7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7MEJBQWEsQUFDVDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBUDVDLEFBRVQsQUFJSSxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUkxRDs7OztlQUFBLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMxQjtxQkFBUyxBQUNMOzt3QkFDUSxXQUFXLEtBQUEsQUFBSyxRQURULEFBQ0ksQUFBYSxBQUM1Qjt3QkFBRyxLQUFBLEFBQUssV0FBTCxBQUFnQixPQUFNLEFBQ3BCO21DQUFXLFdBQVcsZ0JBQUEsQUFBTyxrQkFBUCxBQUF5QixVQUFTLEtBQUEsQUFBSyxXQUFsRCxBQUE2QyxBQUFnQixTQUFRLEtBQUEsQUFBSyxXQUQxRixBQUF5QixBQUM0RCxBQUFnQixBQUVyRzs7MkJBQU8sZ0JBQUEsQUFBTyxrQkFBUCxBQUF5QixJQUwvQixBQUFVLEFBS1gsQUFBTyxBQUE0QixBQUd2QztBQVJlLEFBQ1gsaUJBREM7a0NBUUEsQUFBUyxLQUFJLEFBQ2Q7d0JBQUksV0FBVyxLQUFBLEFBQUssUUFETixBQUNDLEFBQWEsQUFDNUI7eUJBQUEsQUFBSyxRQUFMLEFBQWEsUUFBUSxXQUFTLGdCQUFBLEFBQU8sa0JBQVAsQUFBeUIsVUFBekIsQUFBa0MsS0FBM0MsQUFBUyxBQUFzQyxRQXZCcEYsQUFBYSxBQVdULEFBQ0ksQUFTUyxBQUFhLEFBRU8sQUFBcUQ7aUJBRnpFOzs7OztpQkF6QmY7Ozs7bUJBb0NTLEtBRkUsQUFFRixBQUFLLE1BRkgsQUFFVDs7UUFoQ0o7O1dBSkU7R0FBQTs7QUEwQ04sTUFBQSxBQUFNLGNBQU4sQUFBb0IsMEJBQXBCLEFBQThDLGFBQVksQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQXZFLEFBQTJELEFBQWlCOztrQkFFN0QiLCJmaWxlIjoiSW5saW5lU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVzIGZyb20gXCIuLi91dGlscy9TdHlsZVwiO1xuXG5jbGFzcyBJbmxpbmVTdHlsZXtcblxuXG5cbiAgICBjb25zdHJ1Y3Rvcigpey8vdG8tZG8gbmVlZCB0byBhZGQgdmVyaWZpZXIgZm9yIGVhY2ggU2Vzc2lvbiBwcm9wZXJ0eSB0byByZXN0cmljdCB0byByZXNwZWN0aXZlIHByb3BlcnR5XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRvbURlZmluZWRcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3RhdGVcIjoge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlT2JqID0gdGhpcy5kZWZhdWx0LnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRvbURlZmluZWQuc3RhdGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlT2JqID0gc3RhdGVPYmogPyBTdHlsZXMubWVyZ2VTdHlsZU9iamVjdHMoc3RhdGVPYmosdGhpcy5kb21EZWZpbmVkLnN0YXRlKSA6dGhpcy5kb21EZWZpbmVkLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0eWxlcy5tZXJnZVN0eWxlT2JqZWN0cyh7fSxzdGF0ZU9iaik7Ly8gbmVlZCB0byBzZW5kIG5ldyBjb3B5IHRvIGF2b2lkIHJlYWN0IHdhcm5paW5nXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24ob2JqKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlT2JqID0gdGhpcy5kZWZhdWx0LnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHQuc3RhdGUgPSBzdGF0ZU9iaj9TdHlsZXMubWVyZ2VTdHlsZU9iamVjdHMoc3RhdGVPYmosb2JqLHRydWUpOm9iajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZ2V0U3R5bGVGb3IoKXtcbiAgICAgICAgLy90by1kbyA6IHR5cGU6IG1vYmlsZSBtb2RlIHwgVGFibGV0IG1vZGUgfCBsYXB0b3AgTW9kZSAgfCBpY29uTW9kZVxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVxuICAgIH1cblxuXG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuSW5saW5lU3R5bGUnLCBJbmxpbmVTdHlsZSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5saW5lU3R5bGU7XG4iXX0=

/***/ },
/* 13 */
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
/* 14 */
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

	function _toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	            arr2[i] = arr[i];
	        }return arr2;
	    } else {
	        return Array.from(arr);
	    }
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var Props = function () {
	    function Props() {
	        _classCallCheck(this, Props);

	        Object.defineProperties(this, {
	            "childEvents": {
	                value: {}
	            },
	            "events": {
	                value: {}
	            }
	        });

	        Object.defineProperties(this, {
	            "childProps": {
	                value: {}
	            },
	            "newProps": {
	                value: {}
	            }
	        });

	        this.keyProp = "";
	        this.oddChildren = []; // array of odd child :  index | ChildName
	    }

	    _createClass(Props, [{
	        key: "hasChildProps",
	        value: function hasChildProps() {
	            if (Object.keys(this.childProps).length > 0) return true;else return false;
	        }

	        // child can hold three type of values
	        // 1. defaultValue : common value for all the child
	        // 2. oddValue: value for say active children or selected children among children
	        // 3. uniqueValue(Array):
	        //    3.1 defaultValue: null , oddValue: null needs to null,
	        //    3.2 each child value is got from uniqueValues using child index

	    }, {
	        key: "addChildProps",
	        value: function addChildProps(propName, defaultValue, oddValue, uniqueValues) {
	            this.childProps[propName] = [defaultValue, oddValue, uniqueValues];
	        }
	    }, {
	        key: "getPropsForChild",
	        value: function getPropsForChild(thisArg, config, configName, index) {
	            var oddChildIndex = this.oddChildren.indexOf(configName);
	            if (oddChildIndex == -1) oddChildIndex = this.oddChildren.indexOf(index);

	            var isOdd = oddChildIndex > -1 ? true : false;

	            var obj = {};
	            var keys = Object.keys(this.childProps);
	            for (var i = 0; i < keys.length; i++) {

	                var key = keys[i];
	                if (this.childProps[key][0] !== null) {
	                    // defaultValue || oddValue
	                    if (isOdd) {
	                        if (this.childProps[key][1] !== undefined) {
	                            // checking whether prop needs to behave differently for odd child
	                            obj[key] = this.childProps[key][1];
	                        } else {
	                            obj[key] = this.childProps[key][0];
	                        }
	                    } else obj[key] = this.childProps[key][0];
	                } else {
	                    // unique Values
	                    var values = this.childProps[key][2];
	                    obj[key] = values[index];
	                }
	            }

	            var eventNames = Object.keys(this.childEvents);
	            if (eventNames.length > 0) {
	                eventNames.map(function (eventName, i) {
	                    var _evtObj$callback;

	                    var evtObj = this.childEvents[eventName];
	                    var context = evtObj.context ? evtObj.context : thisArg;
	                    if (!evtObj.bind) obj[eventName] = evtObj.callback.bind(context, config, index);else obj[eventName] = (_evtObj$callback = evtObj.callback).bind.apply(_evtObj$callback, [context, config, index].concat(_toConsumableArray(evtObj.bind)));
	                }, this);
	            }

	            return obj;
	        }

	        //to-do not sure, does we need to wrap parent Events here?

	    }, {
	        key: "getProps",
	        value: function getProps(thisArg, config, configName, index) {
	            var obj = {};

	            var keys = Object.keys(this.newProps);
	            for (var i = 0; i < keys.length; i++) {
	                var key = keys[i];
	                obj[key] = this.newProps[key];
	            }

	            var eventNames = Object.keys(this.events);
	            if (eventNames.length > 0) {
	                eventNames.map(function (eventName, i) {
	                    var evtObj = this.events[eventName];
	                    var context = evtObj.context ? evtObj.context : thisArg;
	                    if (!evtObj.bind) {
	                        obj[eventName] = evtObj.callback.bind(context, config, index);
	                    } else {
	                        var _evtObj$callback2;

	                        obj[eventName] = (_evtObj$callback2 = evtObj.callback).bind.apply(_evtObj$callback2, [thisArg, config, index].concat(_toConsumableArray(evtObj.bind)));
	                    }
	                }, this);
	            }
	            return obj;
	        }
	    }, {
	        key: "addNewProps",
	        value: function addNewProps(propName, value) {
	            this.newProps[propName] = value;
	        }
	    }, {
	        key: "hasOddChildren",
	        value: function hasOddChildren() {
	            if (this.oddChildren.length > 0) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: "addOddChildren",
	        value: function addOddChildren(indices) {
	            this.oddChildren = [].concat(_toConsumableArray(indices));
	        }
	    }, {
	        key: "addEvent",
	        value: function addEvent(eventName, callbackFn, bindValues, context) {
	            this.events[eventName] = {
	                callback: callbackFn,
	                bind: bindValues,
	                context: context
	            };
	        }
	    }, {
	        key: "addChildEvent",
	        value: function addChildEvent(eventName, callbackFn, bindValues, context) {
	            this.childEvents[eventName] = {
	                callback: callbackFn,
	                bind: bindValues,
	                context: context
	            };
	        }
	    }, {
	        key: "merge",
	        value: function merge(obj) {
	            for (var attr in obj) {
	                this.newProps[attr] = obj[attr];
	            }
	        }
	    }]);

	    return Props;
	}();

	exports.default = Props;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUFNLEFBQ0Y7OEJBREUsQUFDWSxBQUNUOztlQUFBLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMzQjsyQkFBYyxBQUNWO3VCQURKLEFBQ0ksQUFBTSxBQUVWOztzQkFBUyxBQUNMO3VCQU5FLEFBQ1QsQUFJRyxBQUNJLEFBQU0sQUFJYjs7OztlQUFBLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMzQjswQkFBYyxBQUNWO3VCQURKLEFBQ0ksQUFBTSxBQUVWOzt3QkFBWSxBQUNSO3VCQWZFLEFBVVQsQUFJRyxBQUNJLEFBQU0sQUFJZDs7OzthQUFBLEFBQUssVUFuQkssQUFtQlYsQUFBZSxBQUNmO2FBQUEsQUFBSyxjQXBCVCxBQUFjLEFBb0JWLEFBQW1CO0FBcEJUOztpQkFEWjs7d0NBeUJhLEFBQ1g7Z0JBQUcsT0FBQSxBQUFPLEtBQUssS0FBWixBQUFZLEFBQUssWUFBakIsQUFBNkIsU0FBN0IsQUFBc0MsR0FDckMsT0FESixBQUNJLEFBQU8sVUFFUCxPQUhKLEFBR0ksQUFBTzs7Ozs7Ozs7Ozs7O3NDQVNELFVBQVcsY0FBYSxVQUFTO2lCQUMzQyxBQUFLLFdBQUwsQUFBZ0IsWUFBWSxDQUFBLEFBQUMsY0FBRCxBQUFjLFVBRGMsQUFDeEQsQUFBNEIsQUFBdUIsY0FESyxBQUN4RDs7Ozt5Q0FJYSxTQUFRLFFBQU8sWUFBWTtnQkFDcEMsZ0JBQWdCLEtBQUEsQUFBSyxZQUFMLEFBQWlCLFFBRFMsQUFDMUMsQUFBZ0IsQUFBeUIsQUFDN0M7Z0JBQUksaUJBQWlCLENBQUEsQUFBQyxHQUFHLGdCQUFnQixLQUFBLEFBQUssWUFBTCxBQUFpQixRQUExRCxBQUF5QixBQUFnQixBQUF5QixBQUVsRTs7Z0JBQUksUUFBUyxnQkFBZ0IsQ0FBQSxBQUFDLElBQWpCLEFBQW1CLE9BSmMsQUFJakMsQUFBd0IsQUFFckM7O2dCQUFJLE1BTjBDLEFBTTFDLEFBQU0sQUFDVjtnQkFBSSxPQUFPLE9BQUEsQUFBTyxLQUFLLEtBUHVCLEFBTzFDLEFBQW1CLEFBQUssQUFDNUI7aUJBQUksSUFBSSxJQUFBLEFBQUksR0FBRyxJQUFJLEtBQUEsQUFBSyxRQUF4QixBQUFnQzs7b0JBRXhCLE1BQU0sS0FGc0IsQUFFNUIsQUFBTSxBQUFLLEFBQ2YsR0FIZ0MsQUFFaEM7b0JBQ0csS0FBQSxBQUFLLFdBQUwsQUFBZ0IsS0FBaEIsQUFBcUIsT0FBckIsQUFBNEIsTUFBSyxBQUNoQzs7d0JBQUEsQUFBRyxPQUFNLEFBQ0w7NEJBQUcsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsS0FBaEIsQUFBcUIsT0FBckIsQUFBNEI7O2dDQUMzQixBQUFJLE9BQU8sS0FBQSxBQUFLLFdBQUwsQUFBZ0IsS0FEL0IsQUFBeUMsQUFDckMsQUFBVyxBQUFxQixHQURLLEFBQ3JDOytCQUVBLEFBQ0E7Z0NBQUEsQUFBSSxPQUFPLEtBQUEsQUFBSyxXQUFMLEFBQWdCLEtBTG5DLEFBQ0ksQUFHSSxBQUNBLEFBQVcsQUFBcUI7OzJCQUluQyxJQUFBLEFBQUksT0FBTyxLQUFBLEFBQUssV0FBTCxBQUFnQixLQVZwQyxBQUNJLEFBU0ssQUFBVyxBQUFxQjt1QkFDbkMsQUFDRDs7d0JBQUksU0FBUyxLQUFBLEFBQUssV0FBTCxBQUFnQixLQUQ1QixBQUNHLEFBQVMsQUFBcUIsQUFDbEM7d0JBQUEsQUFBSSxPQUFPLE9BaEJwQixBQUdJLEFBV00sQUFFRCxBQUFXLEFBQU8sQUFLM0I7Ozs7Z0JBQUksYUFBYSxPQUFBLEFBQU8sS0FBSyxLQTdCaUIsQUE2QjFDLEFBQXlCLEFBQUssQUFDbEM7Z0JBQUksV0FBQSxBQUFXLFNBQVgsQUFBb0I7MkJBQ3BCLEFBQVcsY0FBSSxBQUFVLFdBQVYsQUFBcUI7d0JBQ2hDLGlCQURtQzs7d0JBQy9CLFNBQVMsS0FBQSxBQUFLLFlBRGlCLEFBQy9CLEFBQVMsQUFBaUIsQUFDOUI7d0JBQUksVUFBVSxPQUFBLEFBQU8sVUFBVSxPQUFBLEFBQU8sVUFGSCxBQUVyQixBQUFrQyxBQUNoRDt3QkFBRyxDQUFDLE9BQUEsQUFBTyxNQUFLLElBQUEsQUFBSSxhQUFhLE9BQUEsQUFBTyxTQUFQLEFBQWdCLEtBQWhCLEFBQXFCLFNBQXJCLEFBQThCLFFBQS9ELEFBQWdCLEFBQWlCLEFBQXNDLFlBQ2xFLElBQUEsQUFBSSxhQUFhLDJCQUFBLEFBQU8sVUFBUCxBQUFnQiw4QkFBSyxTQUFTLFFBQVEsaUNBQVcsT0FKNUQsQUFHWCxBQUNLLEFBQWlCLEFBQWlELEFBQU87aUJBSm5FLEVBRG5CLEFBQTJCLEFBQ3ZCLEFBS0UsQUFHTixNQVQyQixBQUN2Qjs7O21CQS9CMEMsQUF1QzlDLEFBQU8sSUF2Q3VDLEFBQzlDOzs7Ozs7O2lDQTZDSyxTQUFRLFFBQU8sWUFBWTtnQkFDNUIsTUFEa0MsQUFDbEMsQUFBTSxBQUVWOztnQkFBSSxPQUFPLE9BQUEsQUFBTyxLQUFLLEtBSGUsQUFHbEMsQUFBbUIsQUFBSyxBQUM1QjtpQkFBSSxJQUFJLElBQUEsQUFBSSxHQUFHLElBQUksS0FBQSxBQUFLLFFBQXhCLEFBQWdDO29CQUN4QixNQUFNLEtBRHNCLEFBQzVCLEFBQU0sQUFBSyxBQUNmLEdBRmdDLEFBQ2hDO29CQUNBLEFBQUksT0FBTyxLQUFBLEFBQUssU0FGcEIsQUFBb0MsQUFFaEMsQUFBVyxBQUFjLEFBRzdCOzs7Z0JBQUksYUFBYSxPQUFBLEFBQU8sS0FBSyxLQVRTLEFBU2xDLEFBQXlCLEFBQUssQUFDbEM7Z0JBQUksV0FBQSxBQUFXLFNBQVgsQUFBb0I7MkJBQ3BCLEFBQVcsY0FBSSxBQUFVLFdBQVYsQUFBcUIsR0FBRyxBQUNuQzt3QkFBSSxTQUFTLEtBQUEsQUFBSyxPQURpQixBQUMvQixBQUFTLEFBQVksQUFDekI7d0JBQUksVUFBVSxPQUFBLEFBQU8sVUFBVSxPQUFBLEFBQU8sVUFGSCxBQUVyQixBQUFrQyxBQUNoRDt3QkFBRyxDQUFDLE9BQUEsQUFBTyxNQUFLLEFBQ1o7NEJBQUEsQUFBSSxhQUFhLE9BQUEsQUFBTyxTQUFQLEFBQWdCLEtBQWhCLEFBQXFCLFNBQXJCLEFBQThCLFFBRG5ELEFBQWdCLEFBQ1osQUFBaUIsQUFBc0M7MkJBRXREOzRCQUNEOzs0QkFBQSxBQUFJLGFBQWMsNEJBQUEsQUFBTyxVQUFQLEFBQWdCLCtCQUFLLFNBQVMsUUFBUSxpQ0FBVyxPQVA1RCxBQUdYLEFBR0ssQUFDRCxBQUFrQixBQUFpRCxBQUFPOztpQkFQbkUsRUFEbkIsQUFBMkIsQUFDdkIsQUFTRSxBQUVOLE1BWjJCLEFBQ3ZCOzttQkFYa0MsQUFzQnRDLEFBQU8sSUF0QitCLEFBQ3RDOzs7O29DQTJCUSxVQUFXO2lCQUNuQixBQUFLLFNBQUwsQUFBYyxZQURZLEFBQzFCLEFBQTBCLE1BREEsQUFDMUI7Ozs7O2dCQVFHLEtBQUEsQUFBSyxZQUFMLEFBQWlCLFNBQWpCLEFBQTBCO3VCQUE3QixBQUFnQyxBQUM1QixBQUFPLEFBRVgsS0FIZ0MsQUFDNUI7O21CQUZRLEFBSVosQUFBTyxNQUpLLEFBQ1o7Ozs7dUNBS1csU0FBUSxBQUNuQjtpQkFBQSxBQUFLLDJDQURjLEFBQ25CLEFBQXVCOzs7O2lDQUlsQixXQUFVLFlBQVcsWUFBVztpQkFDckMsQUFBSyxPQUFMLEFBQVksYUFBYSxBQUNyQjswQkFBQSxBQUFTLEFBQ1Q7c0JBQUEsQUFBSyxBQUNMO3lCQUp5QyxBQUM3QyxBQUdJLEFBQVM7Y0FKZ0MsQUFDN0M7Ozs7c0NBT1UsV0FBVSxZQUFXLFlBQVc7aUJBQzFDLEFBQUssWUFBTCxBQUFpQixhQUFhLEFBQzFCOzBCQUFBLEFBQVMsQUFDVDtzQkFBQSxBQUFLLEFBQ0w7eUJBSjhDLEFBQ2xELEFBR0ksQUFBUztjQUpxQyxBQUNsRDs7Ozs4QkFXRSxLQUFJLEFBQ047aUJBQUssSUFBQSxBQUFJLFFBQVQsQUFBaUIsS0FBSyxBQUNsQjtxQkFBQSxBQUFLLFNBQUwsQUFBYyxRQUFRLElBRDFCLEFBQXNCLEFBQ2xCLEFBQXNCLEFBQUk7OztRQTdKbEM7O1dBREU7R0FBQTs7a0JBdUtTIiwiZmlsZSI6IlByb3BzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvcHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJjaGlsZEV2ZW50c1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTp7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZXZlbnRzXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOnt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImNoaWxkUHJvcHNcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOnt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJuZXdQcm9wc1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6e31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5rZXlQcm9wID0gXCJcIjtcbiAgICAgICAgdGhpcy5vZGRDaGlsZHJlbiA9IFtdIC8vIGFycmF5IG9mIG9kZCBjaGlsZCA6ICBpbmRleCB8IENoaWxkTmFtZVxuXG4gICAgfVxuXG4gICAgaGFzQ2hpbGRQcm9wcygpe1xuICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLmNoaWxkUHJvcHMpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGNoaWxkIGNhbiBob2xkIHRocmVlIHR5cGUgb2YgdmFsdWVzXG4gICAgLy8gMS4gZGVmYXVsdFZhbHVlIDogY29tbW9uIHZhbHVlIGZvciBhbGwgdGhlIGNoaWxkXG4gICAgLy8gMi4gb2RkVmFsdWU6IHZhbHVlIGZvciBzYXkgYWN0aXZlIGNoaWxkcmVuIG9yIHNlbGVjdGVkIGNoaWxkcmVuIGFtb25nIGNoaWxkcmVuXG4gICAgLy8gMy4gdW5pcXVlVmFsdWUoQXJyYXkpOlxuICAgIC8vICAgIDMuMSBkZWZhdWx0VmFsdWU6IG51bGwgLCBvZGRWYWx1ZTogbnVsbCBuZWVkcyB0byBudWxsLFxuICAgIC8vICAgIDMuMiBlYWNoIGNoaWxkIHZhbHVlIGlzIGdvdCBmcm9tIHVuaXF1ZVZhbHVlcyB1c2luZyBjaGlsZCBpbmRleFxuICAgIGFkZENoaWxkUHJvcHMocHJvcE5hbWUgLCBkZWZhdWx0VmFsdWUsb2RkVmFsdWUsdW5pcXVlVmFsdWVzKXtcbiAgICAgICAgdGhpcy5jaGlsZFByb3BzW3Byb3BOYW1lXSA9IFtkZWZhdWx0VmFsdWUsb2RkVmFsdWUsdW5pcXVlVmFsdWVzXTtcbiAgICB9XG5cblxuICAgIGdldFByb3BzRm9yQ2hpbGQodGhpc0FyZyxjb25maWcsY29uZmlnTmFtZSAsaW5kZXgpe1xuICAgICAgICB2YXIgb2RkQ2hpbGRJbmRleCA9IHRoaXMub2RkQ2hpbGRyZW4uaW5kZXhPZihjb25maWdOYW1lKTtcbiAgICAgICAgaWYgKG9kZENoaWxkSW5kZXggPT0gLTEpIG9kZENoaWxkSW5kZXggPSB0aGlzLm9kZENoaWxkcmVuLmluZGV4T2YoaW5kZXgpO1xuXG4gICAgICAgIHZhciBpc09kZCA9ICBvZGRDaGlsZEluZGV4ID4gLTE/dHJ1ZTpmYWxzZTtcblxuICAgICAgICB2YXIgb2JqID0ge31cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNoaWxkUHJvcHMpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYodGhpcy5jaGlsZFByb3BzW2tleV1bMF0gIT09IG51bGwpey8vIGRlZmF1bHRWYWx1ZSB8fCBvZGRWYWx1ZVxuICAgICAgICAgICAgICAgIGlmKGlzT2RkKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jaGlsZFByb3BzW2tleV1bMV0gIT09IHVuZGVmaW5lZCl7IC8vIGNoZWNraW5nIHdoZXRoZXIgcHJvcCBuZWVkcyB0byBiZWhhdmUgZGlmZmVyZW50bHkgZm9yIG9kZCBjaGlsZFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLmNoaWxkUHJvcHNba2V5XVsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLmNoaWxkUHJvcHNba2V5XVswXVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBvYmpba2V5XSA9IHRoaXMuY2hpbGRQcm9wc1trZXldWzBdO1xuICAgICAgICAgICAgIH1lbHNleyAvLyB1bmlxdWUgVmFsdWVzXG4gICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmNoaWxkUHJvcHNba2V5XVsyXTtcbiAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSB2YWx1ZXNbaW5kZXhdO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV2ZW50TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNoaWxkRXZlbnRzKTtcbiAgICAgICAgaWYgKGV2ZW50TmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXZlbnROYW1lcy5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBldnRPYmogPSB0aGlzLmNoaWxkRXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBldnRPYmouY29udGV4dCA/IGV2dE9iai5jb250ZXh0IDogdGhpc0FyZztcbiAgICAgICAgICAgICAgICBpZighZXZ0T2JqLmJpbmQpb2JqW2V2ZW50TmFtZV0gPSBldnRPYmouY2FsbGJhY2suYmluZChjb250ZXh0LCBjb25maWcsIGluZGV4KVxuICAgICAgICAgICAgICAgIGVsc2Ugb2JqW2V2ZW50TmFtZV0gPSBldnRPYmouY2FsbGJhY2suYmluZChjb250ZXh0LCBjb25maWcsIGluZGV4ICwgLi4uZXZ0T2JqLmJpbmQpO1xuICAgICAgICAgICAgfSx0aGlzKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cblxuXG5cbiAgICAvL3RvLWRvIG5vdCBzdXJlLCBkb2VzIHdlIG5lZWQgdG8gd3JhcCBwYXJlbnQgRXZlbnRzIGhlcmU/XG4gICAgZ2V0UHJvcHModGhpc0FyZyxjb25maWcsY29uZmlnTmFtZSAsaW5kZXgpe1xuICAgICAgICB2YXIgb2JqID0ge307XG5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm5ld1Byb3BzKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBvYmpba2V5XSA9IHRoaXMubmV3UHJvcHNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBldmVudE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5ldmVudHMpO1xuICAgICAgICBpZiAoZXZlbnROYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBldmVudE5hbWVzLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2dE9iaiA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBldnRPYmouY29udGV4dCA/IGV2dE9iai5jb250ZXh0IDogdGhpc0FyZztcbiAgICAgICAgICAgICAgICBpZighZXZ0T2JqLmJpbmQpe1xuICAgICAgICAgICAgICAgICAgICBvYmpbZXZlbnROYW1lXSA9IGV2dE9iai5jYWxsYmFjay5iaW5kKGNvbnRleHQsIGNvbmZpZywgaW5kZXgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmpbZXZlbnROYW1lXSA9ICBldnRPYmouY2FsbGJhY2suYmluZCh0aGlzQXJnLCBjb25maWcsIGluZGV4ICwgLi4uZXZ0T2JqLmJpbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sdGhpcylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuXG4gICAgfVxuXG5cblxuICAgIGFkZE5ld1Byb3BzKHByb3BOYW1lICwgdmFsdWUgKXtcbiAgICAgICAgdGhpcy5uZXdQcm9wc1twcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cblxuXG5cblxuICAgIGhhc09kZENoaWxkcmVuKCl7XG4gICAgICAgIGlmKHRoaXMub2RkQ2hpbGRyZW4ubGVuZ3RoID4gMCApe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhZGRPZGRDaGlsZHJlbihpbmRpY2VzKXtcbiAgICAgICAgdGhpcy5vZGRDaGlsZHJlbiA9IFsuLi5pbmRpY2VzXTtcbiAgICB9XG5cblxuICAgIGFkZEV2ZW50KGV2ZW50TmFtZSxjYWxsYmFja0ZuLGJpbmRWYWx1ZXMsY29udGV4dCl7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjazpjYWxsYmFja0ZuLFxuICAgICAgICAgICAgYmluZDpiaW5kVmFsdWVzLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ2hpbGRFdmVudChldmVudE5hbWUsY2FsbGJhY2tGbixiaW5kVmFsdWVzLGNvbnRleHQpe1xuICAgICAgICB0aGlzLmNoaWxkRXZlbnRzW2V2ZW50TmFtZV0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjazpjYWxsYmFja0ZuLFxuICAgICAgICAgICAgYmluZDpiaW5kVmFsdWVzLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cbiAgICBtZXJnZShvYmope1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgdGhpcy5uZXdQcm9wc1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9wcztcbiJdfQ==

/***/ },
/* 15 */
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

	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

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

	var AbstractComponent = function (_React$Component) {
	    _inherits(AbstractComponent, _React$Component);

	    function AbstractComponent(props, type) {
	        _classCallCheck(this, AbstractComponent);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractComponent).call(this, props));

	        _ComponentManager2.default.initialize(_this, type);
	        return _this;
	    }

	    _createClass(AbstractComponent, [{
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            _ComponentManager2.default.componentWillUnmount(this);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            _ComponentManager2.default.componentWillReceiveProps(this, nextProps);
	        }

	        // allowe render only when React Parent render is called with new iconMode value

	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            return _ComponentManager2.default.shouldComponentUpdate(nextProps);
	        }
	    }]);

	    return AbstractComponent;
	}(_react2.default.Component);

	exports.default = AbstractComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFic3RyYWN0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNO2lDQUVGOzthQUZFLEFBRUYsa0JBQUEsQUFBWSxPQUFaLEFBQWtCOzhCQUZoQixBQUVxQjs7MkVBRnJCLDhCQUVxQixBQUNiLEFBQ047O21DQUFBLEFBQWlCLGtCQUZFLEFBRW5CLEFBQWlDO2VBRnJDLE1BQXVCOzs7aUJBRnJCOzsrQ0FPb0IsQUFDbEI7dUNBQUEsQUFBaUIscUJBREMsQUFDbEIsQUFBc0M7Ozs7a0RBR2hCLFdBQVUsQUFDaEM7dUNBQUEsQUFBaUIsMEJBQWpCLEFBQTJDLE1BRFgsQUFDaEMsQUFBZ0Q7Ozs7Ozs7OENBSTlCLFdBQVUsQUFDNUI7bUJBQU8sMkJBQUEsQUFBaUIsc0JBREksQUFDNUIsQUFBTyxBQUF1Qzs7OztXQWpCaEQ7RUFBMEIsZ0JBQUEsQUFBTTs7a0JBdUJ2QiIsImZpbGUiOiJBYnN0cmFjdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cblxuY2xhc3MgQWJzdHJhY3RDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsdHlwZSl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5pbml0aWFsaXplKHRoaXMsdHlwZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jb21wb25lbnRXaWxsVW5tb3VudCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgLy8gYWxsb3dlIHJlbmRlciBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWQgd2l0aCBuZXcgaWNvbk1vZGUgdmFsdWVcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RDb21wb25lbnQ7XG5cblxuXG5cblxuXG4iXX0=

/***/ },
/* 16 */
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

	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

	var _Style = __webpack_require__(7);

	var _Style2 = _interopRequireDefault(_Style);

	var _NodeConfig = __webpack_require__(17);

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
	
	var Node = function (_AbstractComponent) {
	    _inherits(Node, _AbstractComponent);
	
	    function Node(props) {
	        _classCallCheck(this, Node);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Node).call(this, props));

	        _this.toggle = _this.toggle.bind(_this);

	        _this.createSessionStateForTree = _this.createSessionStateForTree.bind(_this);
	        _this.isSessionStateCreatedForTreeData = false;
	        if (_this.props.data) {
	            _this.settings.data = _this.props.data;
	            _this.createSessionStateForTree();
	        }
	        _this.settings.open.addImmediateCallback(_this, _this.setChildrenSessionValues);
	        return _this;
	    }
	
	    _createClass(Node, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            _get(Object.getPrototypeOf(Node.prototype), "componentWillReceiveProps", this).call(this, nextProps);
	            if (this.props.data !== nextProps.data) {
	                this.settings.data = this.props.data;
	                this.createSessionStateForTree(nextProps.data, nextProps.label, nextProps.nodes, nextProps.icon);
	            }
	            if (this.props.open !== nextProps.open) {
	                this.settings.open.value = nextProps.open;
	            }
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            _get(Object.getPrototypeOf(Node.prototype), "componentWillUnmount", this).call(this);
	            this.settings.open.removeCallback(this, this.setChildrenSessionValues);
	        }
	    }, {
	        key: "toggle",
	        value: function toggle() {
	            this.settings.open.value = !this.settings.open.value;
	            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.settings);
	            this.props.treeConfig.changeActiveNode(this.settings);
	        }
	    }, {
	        key: "createSessionStateForTree",
	        value: function createSessionStateForTree(data, label, nodes, icon) {
	            var label = label ? label : this.props.label;
	            var nodes = nodes ? nodes : this.props.nodes;
	            var icon = icon ? icon : this.props.icon;
	            if (data) {
	                // calling with data arguments indicates data is changed so wipe the session state
	                this.settings.reset();
	            } else {
	                data = this.props.data;
	            }
	            //to-do only required for rootnode
	            this.settings.label.value = this.settings.getNodeValueFor(label);
	            this.settings.iconName.value = this.settings.getNodeValueFor(icon);
	
	            var treeNodes = this.settings.getNodeValueFor(nodes);
	            if (treeNodes && treeNodes.length) {
	                this.settings.children.delayCallbacks();
	                for (var i = 0; i < treeNodes.length; i++) {
	                    var nodeConfig = this.settings.children.requestObject("node" + i, _NodeConfig2.default);
	                    nodeConfig.label.state = this.settings.getNodeValueFor(label, treeNodes[i]);
	                    nodeConfig.iconName.state = this.settings.getNodeValueFor(icon, treeNodes[i]);
	                }
	                this.settings.children.resumeCallbacks();
	            }
	            this.isSessionStateCreatedForTreeData = true;
	        }
	    }, {
	        key: "setChildrenSessionValues",
	        value: function setChildrenSessionValues() {
	            if (!this.isSessionStateCreatedForTreeData) {
	                this.createSessionStateForTree();
	            }
	            if (this.props.treeConfig.defaultSelectedNodes) {
	                if (this.props.treeConfig.defaultSelectedNodes.length > 0) {
	                    var nodeConfigs = this.settings.children.getObjects();
	                    nodeConfigs.map(function (nodeConfig, index) {
	                        var nodeLabel = nodeConfig.label.state;
	                        if (this.props.treeConfig.defaultSelectedNodes.indexOf(nodeLabel) !== -1) {
	                            nodeConfig.open.value = true;
	                        }
	                    }.bind(this));
	                } else {
	                    var nodeConfigs = this.settings.children.getObjects();
	                    nodeConfigs.map(function (nodeConfig, index) {
	                        var nodeLabel = nodeConfig.label.state;
	                        nodeConfig.open.value = true;
	                        this.props.treeConfig.defaultSelectedNodes.push(nodeLabel);
	                    }.bind(this));
	                }
	            }
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren() {
	            this.settings.props.addChildProps("treeConfig", this.props.treeConfig);
	            this.settings.props.addChildProps("label", this.props.label);
	            this.settings.props.addChildProps("nodes", this.props.nodes);
	            this.settings.props.addChildProps("icon", this.props.icon);
	            this.settings.props.addChildProps("clickCallback", this.props.clickCallback);
	            this.settings.props.addChildProps("data", null, null, this.settings.getNodeValueFor(this.props.nodes));
	            return _ComponentManager2.default.renderChildren(this);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("Node - render");
	            var nodeUI = _react2.default.createElement("div", null);
	            var domDefinedStyle = this.props.style;
	            if (this.props.data) {
	                var nodesUI = [];
	                var nodes = this.settings.getNodes();
	                var isOpen = this.settings.open.value;
	
	                var iconName = this.settings.iconName.value;
	                var label = this.settings.label.value;

	                var iconUI = "";

	                if (nodes.length > 0) {
	                    //folder
	                    if (isOpen) {
	                        nodesUI = this.renderChildren();
	                    }

	                    var branchStyle = this.props.treeConfig.branchStyle.state;
	                    var nodeStyle = this.props.treeConfig.nodeStyle.state;
	                    if (domDefinedStyle) _Style2.default.mergeStyleObjects(nodeStyle, domDefinedStyle, true); //this happens for rootNode
	                    var controlName = this.props.treeConfig.getFolderIcon(isOpen);
	                    if (iconName && iconName.length > 0) {
	                        var iconStyleObj = this.props.treeConfig.nodeIconStyle.state;
	                        if (iconName.indexOf("/") == -1) {
	                            // fontAwesome Icon Name
	                            iconUI = _react2.default.createElement("i", { style: iconStyleObj, className: iconName });
	                        } else {
	                            iconUI = _react2.default.createElement("img", { style: iconStyleObj, src: iconName });
	                        }
	                    }
	
	                    var folderUI = _react2.default.createElement("span", { style: nodeStyle, onClick: this.toggle }, iconUI, " ", label, _react2.default.createElement("span", { style: { flex: "1" } }), _react2.default.createElement("i", { className: controlName }));
	
	                    var nodePadding = this.props.treeConfig.nodePadding.state;
	                    nodeUI = _react2.default.createElement("span", { style: branchStyle }, folderUI, _react2.default.createElement("ul", { style: { listStyleType: "none", paddingLeft: nodePadding } }, nodesUI));
	                } else {
	                    //leaf
	                    var fileIcon = this.props.treeConfig.getFileIcon(this.props.data, this.settings.open.value);
	                    // this will return either normal/Active/Slected Style based on state of the leaf
	                    var leafStyle = this.props.treeConfig.getLeafStyle(isOpen, this.settings.active.value);
	                    if (iconName && iconName.length > 0) {
	                        var iconStyleObj = this.props.treeConfig.leafIconStyle.state;
	                        if (iconName.indexOf("/") == -1) {
	                            // fontAwesome Icon Name
	                            iconUI = _react2.default.createElement("i", { style: iconStyleObj, className: iconName });
	                        } else {
	                            iconUI = _react2.default.createElement("img", { style: iconStyleObj, src: iconName });
	                        }
	                    }
	
	                    nodeUI = _react2.default.createElement("li", { style: leafStyle, onClick: this.toggle }, iconUI, " ", label, _react2.default.createElement("span", { style: { flex: "1" } }), _react2.default.createElement("i", { className: fileIcon }));
	                }
	            }
	
	            return nodeUI;
	        }
	    }]);
	
	    return Node;
	}(_AbstractComponent3.default);
	
	_ComponentManager2.default.registerToolImplementation("weavereact.NodeConfig", Node);
	exports.default = Node;
	//# sourceMappingURL=data:application/json;base64,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QUwsQUFBVyxXQUFYLEFBQXNCLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFLLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FEL0UsQUFDSSxBQUE2RCxBQUFtQjs7QUFEcEYsQUFDQSx3QkFFSSxZQUFZLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixhQUF0QixBQUFtQyxRQUFPLEtBQUEsQUFBSyxTQUFMLEFBQWMsT0FIeEUsQUFHSSxBQUFzRCxBQUFxQixBQUMvRTt3QkFBRyxZQUFZLFNBQUEsQUFBUyxTQUFULEFBQWtCLEdBQUUsQUFDL0I7NEJBQUksZUFBZSxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsY0FEVixBQUNaLEFBQW9DLEFBQ3ZEOzRCQUFHLFNBQUEsQUFBUyxRQUFULEFBQWlCLFFBQVEsQ0FBQSxBQUFDLEdBQUUsQUFDM0I7O3FDQUFTLHFDQUFHLE9BQUEsQUFBUyxjQUFjLFdBRHZDLEFBQStCLEFBQzNCLEFBQVMsQUFBMEIsQUFBVzsrQkFDNUMsQUFDRjtxQ0FBUyx1Q0FBSyxPQUFBLEFBQVMsY0FBYyxLQUw3QyxBQUVJLEFBRU0sQUFDRixBQUFTLEFBQTRCLEFBQUssQUFJbEQ7Ozs7NkJBQVMsc0NBQUksT0FBQSxBQUFPLFdBQVcsU0FBUyxLQUEvQixBQUErQixBQUFLLFVBQXBDLEFBQ0ksYUFESixBQUVVLE9BQ1Asd0NBQU0sT0FBTyxFQUFDLE1BSGpCLEFBR0csQUFBTSxBQUFRLEFBQUssVUFDbkIscUNBQUcsV0E1RHZCLEFBVUksQUFpQ0ksQUFhQSxBQUFTLEFBSUcsQUFBRyxBQUFXLEFBTXRDOzs7O21CQXRFUyxBQXNFVCxBQUFTLE9BdEVBLEFBQ0w7Ozs7V0E1R0Y7OztBQXNMTiwyQkFBQSxBQUFpQiwyQkFBakIsQUFBNEMseUJBQTVDLEFBQW9FO2tCQUNyRCIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5cblxuY2xhc3MgTm9kZSBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlID0gdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShuZXh0UHJvcHMuZGF0YSxuZXh0UHJvcHMubGFiZWwsbmV4dFByb3BzLm5vZGVzLG5leHRQcm9wcy5pY29uKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLm9wZW4gIT09IG5leHRQcm9wcy5vcGVuKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9IG5leHRQcm9wcy5vcGVuO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcbiAgICB9XG5cblxuXG4gICAgdG9nZ2xlKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9ICF0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG5cblxuICAgIGNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoZGF0YSxsYWJlbCxub2RlcyxpY29uKSB7XG4gICAgICAgIHZhciBsYWJlbCA9IGxhYmVsP2xhYmVsOnRoaXMucHJvcHMubGFiZWw7XG4gICAgICAgIHZhciBub2RlcyA9IG5vZGVzP25vZGVzOnRoaXMucHJvcHMubm9kZXM7XG4gICAgICAgIHZhciBpY29uID0gaWNvbj9pY29uOnRoaXMucHJvcHMuaWNvbjtcbiAgICAgICAgaWYoZGF0YSl7IC8vIGNhbGxpbmcgd2l0aCBkYXRhIGFyZ3VtZW50cyBpbmRpY2F0ZXMgZGF0YSBpcyBjaGFuZ2VkIHNvIHdpcGUgdGhlIHNlc3Npb24gc3RhdGVcbiAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2V0KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvL3RvLWRvIG9ubHkgcmVxdWlyZWQgZm9yIHJvb3Rub2RlXG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uKTtcblxuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3Iobm9kZXMpO1xuICAgICAgICBpZih0cmVlTm9kZXMgJiYgdHJlZU5vZGVzLmxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHJlZU5vZGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChcIm5vZGVcIiArIGksIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcubGFiZWwuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCx0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcuaWNvbk5hbWUuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uLHRyZWVOb2Rlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldENoaWxkcmVuU2Vzc2lvblZhbHVlcygpe1xuICAgICAgICBpZighdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSl7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcyl7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMubGVuZ3RoPjApe1xuICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWdzLm1hcChmdW5jdGlvbihub2RlQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVMYWJlbCA9IG5vZGVDb25maWcubGFiZWwuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5pbmRleE9mKG5vZGVMYWJlbCkgIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVDb25maWcub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZ3MubWFwKGZ1bmN0aW9uKG5vZGVDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZUxhYmVsID0gbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLnB1c2gobm9kZUxhYmVsKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwidHJlZUNvbmZpZ1wiLHRoaXMucHJvcHMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImxhYmVsXCIsdGhpcy5wcm9wcy5sYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm5vZGVzXCIsdGhpcy5wcm9wcy5ub2Rlcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImljb25cIix0aGlzLnByb3BzLmljb24pO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJjbGlja0NhbGxiYWNrXCIsdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiZGF0YVwiLG51bGwsIG51bGwsdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IodGhpcy5wcm9wcy5ub2RlcykgKTtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiTm9kZSAtIHJlbmRlclwiKTtcbiAgICAgICAgdmFyIG5vZGVVSSA9IDxkaXYvPjtcbiAgICAgICAgdmFyIGRvbURlZmluZWRTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB2YXIgbm9kZXNVSSA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlcygpO1xuICAgICAgICAgICAgdmFyIGlzT3BlbiA9IHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcblxuICAgICAgICAgICAgdmFyIGljb25OYW1lID0gdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBpY29uVUkgPSBcIlwiO1xuXG4gICAgICAgICAgICBpZihub2Rlcy5sZW5ndGggPiAwKXsgLy9mb2xkZXJcbiAgICAgICAgICAgICAgICBpZihpc09wZW4pe1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBicmFuY2hTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5icmFuY2hTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZVN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBpZihkb21EZWZpbmVkU3R5bGUpU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMobm9kZVN0eWxlLGRvbURlZmluZWRTdHlsZSx0cnVlKTsvL3RoaXMgaGFwcGVucyBmb3Igcm9vdE5vZGVcbiAgICAgICAgICAgICAgICB2YXIgY29udHJvbE5hbWUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0Rm9sZGVySWNvbihpc09wZW4pO1xuICAgICAgICAgICAgICAgIGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWNvblN0eWxlT2JqID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVJY29uU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGljb25OYW1lLmluZGV4T2YoXCIvXCIpID09IC0xKXsgLy8gZm9udEF3ZXNvbWUgSWNvbiBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aSBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpbWcgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBzcmM9e2ljb25OYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZm9sZGVyVUkgPSA8c3BhbiBzdHlsZT17bm9kZVN0eWxlfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjb250cm9sTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcblxuICAgICAgICAgICAgICAgIHZhciBub2RlUGFkZGluZyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy5zdGF0ZTtcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8c3BhbiBzdHlsZT17YnJhbmNoU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xkZXJVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOlwibm9uZVwiLHBhZGRpbmdMZWZ0Om5vZGVQYWRkaW5nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIGVpdGhlciBub3JtYWwvQWN0aXZlL1NsZWN0ZWQgU3R5bGUgYmFzZWQgb24gc3RhdGUgb2YgdGhlIGxlYWZcbiAgICAgICAgICAgICAgICB2YXIgbGVhZlN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExlYWZTdHlsZShpc09wZW4sdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWNvblN0eWxlT2JqID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmxlYWZJY29uU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGljb25OYW1lLmluZGV4T2YoXCIvXCIpID09IC0xKXsgLy8gZm9udEF3ZXNvbWUgSWNvbiBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aSBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpbWcgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBzcmM9e2ljb25OYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e2xlYWZTdHlsZX0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICByZXR1cm4gKCBub2RlVUkpO1xuICAgIH1cblxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	(function (module) {
	
	    function NodeConfig() {
	        _ComponentManager2.default.createDefaultSessionProperties(this, "container");
	
	        Object.defineProperties(this, {
	            "label": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
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
	
	        this.data = null;
	    }
	
	    var p = NodeConfig.prototype;
	
	    p.getNodes = function () {
	        return this.children.getNames();
	    };
	
	    p.getNodeValueFor = function (property, data) {
	        data = data ? data : this.data;

	        if (data) {
	            if (data[property] instanceof Function) {
	                return data[property]();
	            } else if (property instanceof Function) {
	                return property(data);
	            } else {
	                return data[property];
	            }
	        } else {
	            return "";
	        }
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLENBQUMsVUFBQSxBQUFVOzthQUVQLEFBQVM7bUNBQ0wsQUFBaUIsK0JBQWpCLEFBQWdELE1BRDlCLEFBQ2xCLEFBQXFELEFBRXJEOztlQUFBLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMxQjtxQkFBUyxBQUNMO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGVBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUVyRTs7d0JBQVksQUFDUjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOztvQkFBUSxBQUNKO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFFdEQ7O3NCQUFVLEFBQ047dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQWRuQyxBQUdsQixBQVVJLEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBSTFEOztXQWxCa0IsQUFDbEI7O2FBaUJBLEFBQUssS0FBTCxBQUFVLFFBbEJRLEFBa0JsQixBQUFrQixBQUNsQjthQUFBLEFBQUssT0FBTCxBQUFZLFFBbkJNLEFBbUJsQixBQUFvQixBQUVwQjs7YUFBQSxBQUFLLE9BckJULEFBQXNCLEFBcUJsQixBQUFZLEFBS2hCOzs7UUFBSSxJQUFJLFdBNUJPLEFBNEJQLEFBQVcsQUFFbkI7O01BQUEsQUFBRSx1QkFBdUIsQUFDckI7ZUFBTyxLQUFBLEFBQUssU0EvQkQsQUE4QkYsQUFBWSxBQUNyQixBQUFPLEFBQWMsQUFHekI7S0FKYTs7TUFJYixBQUFFLDRCQUFrQixBQUFTLFVBQVQsQUFBa0I7ZUFDM0IsT0FBQSxBQUFNLE9BQUssS0FEcUIsQUFDckIsQUFBSyxBQUV2QixLQUh1QyxBQUN2Qzs7WUFFQSxBQUFHLE1BQUssQUFDSjtnQkFBRyxLQUFBLEFBQUsscUJBQUwsQUFBMEI7dUJBQ2xCLEtBRFgsQUFBc0MsQUFDbEMsQUFBTyxBQUFLLFlBRHNCLEFBQ2xDO3VCQUNLLG9CQUFBLEFBQW9CO3VCQUNsQixTQURMLEFBQWdDLEFBQ2xDLEFBQU8sQUFBUyxNQURrQixBQUNsQzthQURFLE1BRUQsQUFDRDt1QkFBTyxLQU5mLEFBR1UsQUFFRCxBQUNELEFBQU8sQUFBSzs7ZUFFZixBQUNEO21CQTlDTyxBQWtDSyxBQUdoQixBQVFLLEFBQ0QsQUFBTyxBQUlmOztLQWhCb0I7O01BZ0JwQixBQUFFLG9CQUFvQixBQUNsQjthQUFBLEFBQUssTUFBTCxBQUFXLFFBRE8sQUFDbEIsQUFBbUIsQUFDbkI7YUFBQSxBQUFLLFNBQUwsQUFBYyxRQUZJLEFBRWxCLEFBQXNCLEFBQ3RCO2FBQUEsQUFBSyxLQUFMLEFBQVUsUUFIUSxBQUdsQixBQUFrQixBQUNsQjthQUFBLEFBQUssT0FBTCxBQUFZLFFBSk0sQUFJbEIsQUFBb0IsQUFDcEI7YUFBQSxBQUFLLFNBdkRNLEFBa0RMLEFBQVksQUFLbEIsQUFBYztLQUxSOzs7QUFsREssQUFFZixTQXlEQSxDQUFBLEFBQU0sY0FBTixBQUFvQix5QkEzREwsQUEyRGYsQUFBNkMsQUFFN0M7O1dBQUEsQUFBTyxVQTdEVixBQUFrQixBQTZEZixBQUFpQjtHQTdEckIsQUFBQyxBQStEQyIsImZpbGUiOiJOb2RlQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE5vZGVDb25maWcoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMsXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25OYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wZW4uc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUuc3RhdGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xuXG4gICAgfVxuXG5cbiAgICB2YXIgcCA9IE5vZGVDb25maWcucHJvdG90eXBlO1xuXG4gICAgcC5nZXROb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZ2V0TmFtZXMoKTtcbiAgICB9XG5cbiAgICBwLmdldE5vZGVWYWx1ZUZvciA9IGZ1bmN0aW9uKHByb3BlcnR5LGRhdGEpe1xuICAgICAgICBkYXRhID0gZGF0YT8gZGF0YTp0aGlzLmRhdGE7XG5cbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtwcm9wZXJ0eV0oKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKHByb3BlcnR5IGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eShkYXRhKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGFiZWwudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLmljb25OYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucmVtb3ZlQWxsT2JqZWN0cygpO1xuICAgIH1cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuTm9kZUNvbmZpZycsIE5vZGVDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBOb2RlQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _NodeConfig = __webpack_require__(17);
	
	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);
	
	var _InlineStyle = __webpack_require__(12);
	
	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);
	
	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	(function (module) {
	
	    function TreeConfig() {
	        _ComponentManager2.default.createDefaultSessionProperties(this);
	
	        Object.defineProperties(this, {
	            "treeIconState": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
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
	            nodeIconStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            leafIconStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            allowMultipleSelection: {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            }
	        });
	
	        this.activeNode = null;
	        this.dataTypesMap = null;
	        this.getDataType = null;
	
	        this.nodeStyle.state = {
	            "display": "flex",
	            "flexDirection": "row"
	        };
	
	        this.treeIconState.state = {
	            "nodeDefault": "fa fa-folder",
	            "nodeOpen": "fa fa-folder-open",
	            "leafDefault": "fa fa-file-text",
	            "leafOpen": "fa fa-file-text-o"
	        };

	        this.nodeIconStyle.state = {
	            width: "20px",
	            height: "20px",
	            paddingRight: "2px"
	        };

	        this.leafStyle.state = {
	            "display": "flex",
	            "flexDirection": "row"
	        };

	        this.activeLeafStyle.state = {
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
	        var style = this.leafStyle.state;
	        if (open) {
	            mergeInto(style, this.selectedLeafStyle.state);
	            if (active) return mergeInto(style, this.activeLeafStyle.state);
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
	                return isOpen ? this.treeIconState.state.leafOpen : this.treeIconState.state.leafDefault;
	            }
	        } else return "";
	    };
	
	    p.getFolderIcon = function (isOpen) {
	        return isOpen ? this.treeIconState.state.nodeOpen : this.treeIconState.state.nodeDefault;
	    };
	
	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.TreeConfig', TreeConfig);
	
	    module.exports = TreeConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,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RyxBQUFtQixBQUNtQixBQUF5QjtLQUQvRDs7O1NBTWxCLENBQUEsQUFBTSxjQUFOLEFBQW9CLHlCQXBMTCxBQW9MZixBQUE2QyxBQUU3Qzs7V0FBQSxBQUFPLFVBdExWLEFBQWtCLEFBc0xmLEFBQWlCO0dBdExyQixBQUFDLEFBd0xDIiwiZmlsZSI6IlRyZWVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFRyZWVDb25maWcoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidHJlZUljb25TdGF0ZVwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVEYXRhVHlwZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsZWZ0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibm9kZVBhZGRpbmdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMHB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3ROb2RlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTm9kZUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3RTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9kZVN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkTGVhZlN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyYW5jaFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlSWNvblN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFmSWNvblN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGxvd011bHRpcGxlU2VsZWN0aW9uOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCAgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2V0RGF0YVR5cGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubm9kZVN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwibm9kZURlZmF1bHRcIiA6IFwiZmEgZmEtZm9sZGVyXCIsXG4gICAgICAgICAgICBcIm5vZGVPcGVuXCIgOiBcImZhIGZhLWZvbGRlci1vcGVuXCIsXG4gICAgICAgICAgICBcImxlYWZEZWZhdWx0XCIgOiBcImZhIGZhLWZpbGUtdGV4dFwiLFxuICAgICAgICAgICAgXCJsZWFmT3BlblwiIDogXCJmYSBmYS1maWxlLXRleHQtb1wiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGVJY29uU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQgOiBcIjIwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDpcIjJweFwiXG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMubGVhZlN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5hY3RpdmVMZWFmU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImJhY2tncm91bmRcIiA6IFwib3JhbmdlXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVmYXVsdFNlbGVjdGVkTm9kZXMgPSBbXTtcbiAgICB9XG5cblxuICAgIHZhciBwID0gVHJlZUNvbmZpZy5wcm90b3R5cGU7XG5cbiAgICBmdW5jdGlvbiBtZXJnZUludG8gKGludG8sIG9iaikge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG5cbiAgICBwLmdldExlYWZTdHlsZSA9IGZ1bmN0aW9uKG9wZW4sIGFjdGl2ZSl7XG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMubGVhZlN0eWxlLnN0YXRlO1xuICAgICAgICBpZihvcGVuKXtcbiAgICAgICAgICAgIG1lcmdlSW50byhzdHlsZSx0aGlzLnNlbGVjdGVkTGVhZlN0eWxlLnN0YXRlKVxuICAgICAgICAgICAgaWYoYWN0aXZlKVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXJnZUludG8oc3R5bGUsdGhpcy5hY3RpdmVMZWFmU3R5bGUuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENoaWxkcmVuU3RhdGVUb09wZW4ocGFyZW50Tm9kZSxvcGVuTm9kZXMpe1xuICAgICAgICB2YXIgbm9kZXMgPSBwYXJlbnROb2RlLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgaWYobm9kZXMgJiYgbm9kZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVJbmRleCA9IG9wZW5Ob2Rlcy5pbmRleE9mKG5vZGUubGFiZWwuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGlmKG5vZGVJbmRleCA+IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgb3Blbk5vZGVzLnNwbGljZShub2RlSW5kZXgsMSk7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkcmVuU3RhdGVUb09wZW4obm9kZSxvcGVuTm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3RvLWRvIGRvIHRoaXMgZm9yIGVudGlyZSB0cmVlIHJhdGhlciBvbmx5IGZvciB0aGUgZmlyc3QgY2hpbGRcbiAgICBwLnNldERlZmF1bHROb2RlU2VsZWN0aW9uID0gZnVuY3Rpb24obm9kZXNMYWJlbCl7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNlbGVjdGVkTm9kZXMgPSBub2Rlc0xhYmVsXG4gICAgICAgIC8vc2V0Q2hpbGRyZW5TdGF0ZVRvT3Blbih0aGlzLnJvb3ROb2RlLG5vZGVzTGFiZWwpXG4gICAgfVxuXG4gICAgLy90by1kbyBkbyB0aGlzIGZvciBlbnRpcmUgdHJlZSByYXRoZXIgb25seSBmb3IgdGhlIGZpcnN0IGNoaWxkXG4gICAgcC5zZXRPcGVuTm9kZXMgPSBmdW5jdGlvbihub2Rlc0xhYmVsKXtcbiAgICAgICAgdmFyIHJvb3ROb2RlcyA9IHRoaXMucm9vdE5vZGUuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICByb290Tm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgaWYobm9kZXNMYWJlbC5pbmRleE9mKG5vZGUubGFiZWwuc3RhdGUpID4gLTEpe1xuICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgIH1cblxuICAgIHAuY2hhbmdlQWN0aXZlTm9kZSA9IGZ1bmN0aW9uIChub2RlQ29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZU5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTm9kZS5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKCF0aGlzLmFsbG93TXVsdGlwbGVTZWxlY3Rpb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlTm9kZSAhPT0gbm9kZUNvbmZpZyl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVOb2RlQ2hpbGQgPSB0aGlzLmFjdGl2ZU5vZGUuY2hpbGRyZW4uZ2V0TmFtZShub2RlQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWFjdGl2ZU5vZGVDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTm9kZS5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG5vZGVDb25maWc7XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZS5hY3RpdmUudmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIHAuZ2V0RmlsZUljb24gPSBmdW5jdGlvbiAoZGF0YSxpc09wZW4pIHtcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZih0aGlzLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgdmFyIGRhdFR5cGUgPSB0aGlzLmdldERhdGFUeXBlID8gdGhpcy5nZXREYXRhVHlwZShkYXRhKSA6IGRhdGEuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhVHlwZXNNYXAgJiYgdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBpc09wZW4gPyB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUubGVhZk9wZW4gIDogdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLmxlYWZEZWZhdWx0IDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2VcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIHAuZ2V0Rm9sZGVySWNvbiA9IGZ1bmN0aW9uICggaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBpc09wZW4gPyB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUubm9kZU9wZW4gOiB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUubm9kZURlZmF1bHQ7XG4gICAgfVxuXG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LlRyZWVDb25maWcnLCBUcmVlQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gVHJlZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 19 */
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
	
	var _SimpleNode = __webpack_require__(21);
	
	var _SimpleNode2 = _interopRequireDefault(_SimpleNode);
	
	var _SimpleTreeConfig = __webpack_require__(19);
	
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
	//# sourceMappingURL=data:application/json;base64,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QUFBUSxTQXJDSCxBQUNMOzs7O1dBckVGO0VBQW1CLGdCQUFBLEFBQU07O2tCQThHaEIiLCJmaWxlIjoiU2ltcGxlTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNpbXBsZU5vZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLmFjdGl2ZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cbiAgICB0b2dnbGUoKXtcbiAgICAgICAgdGhpcy5vcGVuLnZhbHVlID0gIXRoaXMub3Blbi52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5vcGVuLHRoaXMuYWN0aXZlKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcyk7XG4gICAgfVxuXG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7IC8vbWFrZXMgc3VyZSBjaGFuZ2UgaW4gY2hpbGQgbm9kZSB3b24ndCByZW5kZXIgdGhpcyBub2RlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNOb2RlKCl7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRUcmVlTm9kZXModGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgICAgaWYobm9kZXMgJiYgbm9kZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBub2RlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbGVhZlxuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRUcmVlTm9kZXModGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgICAgdmFyIG5vZGVzVUkgPSBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZURhdGEsaW5kZXgpe1xuICAgICAgICAgICAgcmV0dXJuIDxTaW1wbGVOb2RlIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtub2RlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVDb25maWc9e3RoaXMucHJvcHMudHJlZUNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30vPjtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gbm9kZXNVSTtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgYnJhbmNoVUkgPSA8ZGl2Lz47XG5cbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHZhciBub2Rlc1VJID0gW107XG4gICAgICAgICAgICBpZih0aGlzLm9wZW4uc3RhdGUpe1xuICAgICAgICAgICAgICAgIHZhciBub2Rlc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0VHJlZUxhYmVsKHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICAgICAgICBpZih0aGlzLmlzTm9kZSgpKXsgLy9Ob2RlXG5cbiAgICAgICAgICAgICAgICB2YXIgZm9udEF3ZXNvbWVOb2RlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRJY29uKFwibm9kZVwiLHRoaXMub3Blbi5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGZvbGRlclVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmb250QXdlc29tZU5vZGVJY29ufSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVQYWRkaW5nID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnN0YXRlO1xuICAgICAgICAgICAgICAgIGJyYW5jaFVJID0gPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xkZXJVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTpcIm5vbmVcIixwYWRkaW5nTGVmdDpub2RlUGFkZGluZ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgICAgIHZhciBmb250QXdlc29tZUxlYWZJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEljb24oXCJsZWFmXCIsdGhpcy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIGVpdGhlciBub3JtYWwvQWN0aXZlL1NsZWN0ZWQgU3R5bGUgYmFzZWQgb24gc3RhdGUgb2YgdGhlIGxlYWZcbiAgICAgICAgICAgICAgICB2YXIgbGVhZlN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExlYWZTdHlsZSh0aGlzLm9wZW4udmFsdWUsdGhpcy5hY3RpdmUudmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyYW5jaFVJID0gPGxpIHN0eWxlPXtsZWFmU3R5bGV9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZvbnRBd2Vzb21lTGVhZkljb259ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKGJyYW5jaFVJKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlTm9kZTtcbiJdfQ==

/***/ },
/* 22 */
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
	
	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);
	
	var _ModalConfig = __webpack_require__(23);
	
	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);
	
	var _ModalPanel = __webpack_require__(25);
	
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
	
	        _ComponentManager2.default.initialize(_this);
	        _this.openModal = _this.openModal.bind(_this);
	
	        return _this;
	    }
	
	    _createClass(Modal, [{
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            _ComponentManager2.default.componentWillUnmount(this);
	        }
	    }, {
	        key: "openModal",
	        value: function openModal() {
	            this.settings.open.value = true;
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            _ComponentManager2.default.componentWillReceiveProps(this, nextProps);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var isOpen = this.settings.open.value;
	            var overlay = Style.overlayContainer(isOpen);
	            var modal = Style.modal(isOpen);
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
	
	Weave.registerClass("weavereact.Modal", Modal, [weavejs.api.core.ILinkableObject]);
	_ComponentManager2.default.registerToolConfig(Modal, _ModalConfig2.default);
	_ComponentManager2.default.registerToolImplementation("weavereact.ModalConfig", Modal);

	exports.default = Modal;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT007cUJBRUY7O2FBRkUsQUFFRixNQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQixrQkFFaUIsQUFDVCxBQUNOOzttQ0FBQSxBQUFpQixXQUZGLEFBR2Y7Y0FBQSxBQUFLLFlBQVksTUFBQSxBQUFLLFVBQUwsQUFBZSxLQUhqQixBQUdmOztlQUhKLE1BQW1COzs7aUJBRmpCOzsrQ0FTb0IsQUFDbEI7dUNBQUEsQUFBaUIscUJBREMsQUFDbEIsQUFBc0M7Ozs7b0NBSS9CLEFBQ1A7aUJBQUEsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQixRQURaLEFBQ1AsQUFBMkI7Ozs7a0RBR0wsV0FBVSxBQUMvQjt1Q0FBQSxBQUFpQiwwQkFBakIsQUFBMkMsTUFEWixBQUMvQixBQUFnRDs7OztpQ0FJNUMsQUFDTDtnQkFBSSxTQUFTLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FEdEIsQUFDUSxBQUFtQixBQUNoQztnQkFBSSxVQUFVLE1BQUEsQUFBTSxpQkFGZixBQUVELEFBQVUsQUFBdUIsQUFDckM7Z0JBQUksUUFBUSxNQUFBLEFBQU0sTUFIYixBQUdELEFBQVEsQUFBWSxBQUN4QjtnQkFBSSxnQkFKQyxBQUlELEFBQWdCLEFBQ3BCO2dCQUFJLGVBTEMsQUFLRCxBQUFlLEFBQ25CO2dCQUFBLEFBQUcsUUFBTyxBQUNOOytCQUFlLHNEQUFZLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFRLGFBQWEsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUFNLFVBQVUsS0FBQSxBQUFLLFNBQXRGLEFBQWlGLEFBQWMsZUFDekYsS0FBQSxBQUFLLE1BRjlCLEFBQVUsQUFDTixBQUNxQixBQUFXLEFBSXBDOzs7Z0JBQUksQ0FBQyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVMsQUFDckI7b0JBQUcsS0FBQSxBQUFLLFNBQUwsQUFBYyxXQUFkLEFBQXlCLE9BQU0sQUFDOUI7b0NBQWdCLHdDQUFNLE9BQU8sRUFBQyxRQUFSLEFBQVEsQUFBTyxhQUFZLFNBQVMsS0FBMUMsQUFBMEMsQUFBSyxhQUFXLHFDQUFHLFdBQVcsS0FBQSxBQUFLLFNBQUwsQUFBYyxXQUQxRyxBQUFrQyxBQUM5QixBQUFnQixBQUEwRCxBQUFjLEFBQXlCO3VCQUVqSCxBQUNBO29DQUFnQix3Q0FBTSxNQUFBLEFBQUssVUFBUyxXQUFBLEFBQVUsbUJBQWtCLFNBQVMsS0FBekQsQUFBeUQsQUFBSyxhQUx0RixBQUNJLEFBR0ksQUFDQSxBQUlSOzs7bUJBQVEsNENBQUEsQUFDUyxlQUVELHVDQUFLLE9BSGIsQUFHUSxBQUFLLEFBQU8sWUFDWix1Q0FBSyxPQUFMLEFBQUssQUFBTyxTQXpCdkIsQUFxQkwsQUFBUSxBQUlRLEFBQ0s7Ozs7V0FqRHZCO0VBQWMsZ0JBQUEsQUFBTTs7QUF3RDFCLE1BQUEsQUFBTSxjQUFOLEFBQW9CLG9CQUFwQixBQUF3QyxPQUFNLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUEzRCxBQUErQyxBQUFpQjtBQUNoRSwyQkFBQSxBQUFpQixtQkFBakIsQUFBb0M7QUFDcEMsMkJBQUEsQUFBaUIsMkJBQWpCLEFBQTRDLDBCQUE1QyxBQUFxRTs7a0JBRXREIiwiZmlsZSI6Ik1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgTW9kYWxDb25maWcgZnJvbSBcIi4vTW9kYWxDb25maWdcIjtcbmltcG9ydCBNb2RhbFBhbmVsIGZyb20gXCIuL01vZGFsUGFuZWxcIjtcblxuXG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5pbml0aWFsaXplKHRoaXMpO1xuICAgICAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMub3Blbk1vZGFsLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNvbXBvbmVudFdpbGxVbm1vdW50KHRoaXMpO1xuICAgIH1cblxuXG4gICAgb3Blbk1vZGFsKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHRoaXMsbmV4dFByb3BzKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGlzT3BlbiA9IHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBTdHlsZS5vdmVybGF5Q29udGFpbmVyKGlzT3Blbik7XG4gICAgICAgIHZhciBtb2RhbCA9IFN0eWxlLm1vZGFsKGlzT3Blbik7XG4gICAgICAgIHZhciBtb2RhbEJ1dHRvblVJID0gXCJcIjtcbiAgICAgICAgdmFyIG1vZGFsUGFuZWxVSSA9IFwiXCI7XG4gICAgICAgIGlmKGlzT3Blbil7XG4gICAgICAgICAgICBtb2RhbFBhbmVsVUkgPSA8TW9kYWxQYW5lbCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gIHNlc3Npb25PcGVuPXt0aGlzLnNldHRpbmdzLm9wZW59IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnBhbmVsQ29uZmlnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbFBhbmVsPlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmtleVByZXNzKXtcbiAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgbW9kYWxCdXR0b25VSSA9IDxzcGFuIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17dGhpcy5vcGVuTW9kYWx9PjxpIGNsYXNzTmFtZT17dGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnZhbHVlfT48L2k+PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbW9kYWxCdXR0b25VSSA9IDxzcGFuIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+T3Blbjwvc3Bhbj47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDxzcGFuID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RhbEJ1dHRvblVJfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtvdmVybGF5fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGFsUGFuZWxVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgfVxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5Nb2RhbFwiLCBNb2RhbCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKE1vZGFsLE1vZGFsQ29uZmlnKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lk1vZGFsQ29uZmlnXCIsTW9kYWwpO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdfQ==

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	var _ModalPanelConfig = __webpack_require__(24);
	
	var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	(function (module) {
	
	    function ModalConfig() {
	
	        _ComponentManager2.default.createDefaultSessionProperties(this);

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
	    Weave.registerClass('weavereact.ModalConfig', ModalConfig, [weavejs.api.core.ILinkableObject]);
	
	    module.exports = ModalConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBSUEsQ0FBQyxVQUFBLEFBQVU7O2FBRVAsQUFBUzs7bUNBRUwsQUFBaUIsK0JBRkUsQUFFbkIsQUFBZ0QsQUFFaEQ7O2VBQUEsQUFBTyxpQkFBUCxBQUF3QixNQUFNLEFBQzFCOzJCQUFlLEFBQ1g7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSx1QkFEckMsQUFDSSxBQUFPLEFBRVg7O29CQUFRLEFBQ0o7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZ0JBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFpQyxBQUV0RTs7MEJBQWMsQUFDVjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQWQvQyxBQUVmLEFBQXVCLEFBSW5CLEFBT0ksQUFDSSxBQUFPLEFBQTBCLEFBQWdDOzs7V0FadEQsQUFFbkI7Ozs7QUFKVyxBQUVmLFNBb0JBLENBQUEsQUFBTSxjQUFOLEFBQW9CLDBCQUFwQixBQUE4QyxhQUFZLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQXRCeEQsQUFzQmYsQUFBMkQsQUFBaUIsQUFFNUU7O1dBQUEsQUFBTyxVQXhCVixBQUFrQixBQXdCZixBQUFpQjtHQXhCckIsQUFBQyxBQTBCQyIsImZpbGUiOiJNb2RhbENvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cbmltcG9ydCBNb2RhbFBhbmVsQ29uZmlnIGZyb20gXCIuL01vZGFsUGFuZWxDb25maWdcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE1vZGFsQ29uZmlnKCkge1xuXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwicGFuZWxDb25maWdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBNb2RhbFBhbmVsQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJidXR0b25JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Nb2RhbENvbmZpZycsIE1vZGFsQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBNb2RhbENvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 24 */
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
	
	var _ModalPanelConfig = __webpack_require__(24);
	
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
	        _this.closeModal = _this.closeModal.bind(_this);
	        return _this;
	    }
	
	    _createClass(ModalPanel, [{
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
	        key: "closeModal",
	        value: function closeModal() {
	            this.props.sessionOpen.value = false;
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
	                this.settings = nextProps.settings;
	                Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
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
	
	            return _react2.default.createElement("div", { style: layoutStyle }, _react2.default.createElement("div", { className: "modal-content" }, _react2.default.createElement("div", { className: "modal-header" }, _react2.default.createElement("button", { type: "button", className: "close", onClick: this.closeModal }, "×"), _react2.default.createElement("h4", { className: "modal-title" }, this.settings.title.value)), _react2.default.createElement("div", { className: "modal-body", style: bodyStyle }, this.props.children)));
	        }
	    }]);
	
	    return ModalPanel;
	}(_react2.default.Component);
	
	exports.default = ModalPanel;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsUGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07MEJBRUY7O2FBRkUsQUFFRixXQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQix1QkFFaUIsQUFDVCxBQUNOOztjQUFBLEFBQUssV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFTLHVCQUYzQyxBQUVDLEFBQ2hCO2NBQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixRQUFRLE1BQUEsQUFBSyxNQUhsQixBQUdhLEFBQVcsQUFDdkM7ZUFBQSxBQUFPLGNBQWMsTUFKTixBQUlNLEFBQUs7QUFKWCxhQUtmLENBQUEsQUFBSyxhQUFjLE1BQUEsQUFBSyxXQUFMLEFBQWdCLEtBTHBCLEFBS2Y7ZUFMSjs7O2lCQUZFOzs0Q0FVaUIsQUFDZjtrQkFBQSxBQUFNLGFBQWEsS0FBbkIsQUFBbUIsQUFBSyxVQUF4QixBQUFrQyxtQkFBbEMsQUFBcUQsTUFBTSxLQUQ1QyxBQUNmLEFBQTJELEFBQUs7Ozs7K0NBRzVDLEFBQ3BCO2tCQUFBLEFBQU0sYUFBYSxLQUFuQixBQUFtQixBQUFLLFVBQXhCLEFBQWtDLGVBQWxDLEFBQWlELE1BQU0sS0FEbkMsQUFDcEIsQUFBdUQsQUFBSzs7OztxQ0FNcEQsQUFDUjtpQkFBQSxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLFFBRGYsQUFDUixBQUErQjs7OztrREFHVCxXQUFVLEFBQ2hDO2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBYSxVQUFBLEFBQVU7c0JBQ2pDLEFBQU0sYUFBYSxLQUFuQixBQUFtQixBQUFLLFVBQXhCLEFBQWtDLGVBQWxDLEFBQWlELE1BQU0sS0FEYixBQUMxQyxBQUF1RCxBQUFLLEFBQzVEO3FCQUFBLEFBQUssV0FBVyxVQUYwQixBQUUxQixBQUFVLEFBQzFCLFNBSDBDLEFBQzFDO3NCQUVBLEFBQU0sYUFBYSxLQUFuQixBQUFtQixBQUFLLFVBQXhCLEFBQWtDLG1CQUFsQyxBQUFxRCxNQUFNLEtBSC9ELEFBQThDLEFBRzFDLEFBQTJELEFBQUssQUFFcEU7O2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBVSxVQUFBLEFBQVUsT0FBTSxBQUNwQztxQkFBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLFFBQVEsS0FBQSxBQUFLLE1BRHJDLEFBQXdDLEFBQ1IsQUFBVzs7Ozs7OztnQkFPdkMsY0FBYyxLQUFBLEFBQUssU0FGbEIsQUFFRCxBQUFjLEFBQWM7O0FBRjNCLEFBRUwsNEJBRWdCLEFBQ1o7d0JBQU8sS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLEFBQzVCO3VCQUFBLEFBQU0sQUFDTjsyQkFBQSxBQUFXLEFBQ1g7MkJBUkMsQUFJRCxBQUlBLEFBQVcsQUFLZjthQVRJOzt3QkFTSixBQUFZLGNBYlAsQUFhTCxBQUEwQixBQUUxQjs7bUJBQVEsdUNBQUssT0FBTCxBQUFLLEFBQU8sZUFDUix1Q0FBSyxXQUFMLEFBQUssQUFBVSxtQkFDWCx1Q0FBSyxXQUFMLEFBQUssQUFBVSxrQkFDWCwwQ0FBUSxNQUFBLEFBQUssVUFBUyxXQUFBLEFBQVUsU0FBUSxTQUFTLEtBQWpELEFBQWlELEFBQUssY0FEMUQsTUFFSSxzQ0FBSSxXQUFKLEFBQUksQUFBVSxpQkFBZSxLQUFBLEFBQUssU0FBTCxBQUFjLE1BSG5ELEFBQ0ksQUFFaUMsQUFBb0IsU0FFckQsdUNBQUssV0FBQSxBQUFVLGNBQWEsT0FBNUIsQUFBNEIsQUFBTyxhQUM5QixLQUFBLEFBQUssTUF0QnJCLEFBZUwsQUFBUSxBQUNJLEFBTVMsQUFBVzs7OztXQTNEbEM7RUFBbUIsZ0JBQUEsQUFBTTs7a0JBb0VoQiIsImZpbGUiOiJNb2RhbFBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbFBhbmVsQ29uZmlnIGZyb20gXCIuL01vZGFsUGFuZWxDb25maWdcIjtcblxuXG5jbGFzcyBNb2RhbFBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBNb2RhbFBhbmVsQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWUgPSB0aGlzLnByb3BzLnRpdGxlO1xuICAgICAgICB3aW5kb3cubW9kYWxMYXlvdXQgPSB0aGlzLnNldHRpbmdzOy8vIGZvciB0ZXN0aW5nXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbCA9ICB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cblxuICAgIGNsb3NlTW9kYWwoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5zZXNzaW9uT3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMudGl0bGUgIT09IG5leHRQcm9wcy50aXRsZSl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlID0gdGhpcy5wcm9wcy50aXRsZVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vd2UgY291bGQgaGF2ZSB1c2VkIHRoaXMuc3RhdGUubGF5b3V0LCBidXQgc3R5bGUgb2YgZGl2IHdpbGwgZ2V0IHRoZSBzYW1lIHJlZmVyZW5jZSwgd2hpY2ggaXMgZGVwcmVjYXRlZCBpbiByZWFjdFxuICAgICAgICB2YXIgbGF5b3V0U3R5bGUgPSB0aGlzLnNldHRpbmdzLmdldExheW91dFN0YXRlKCk7Ly8gdGhpcyB3aWxsIG1ha2Ugc3VyZSB3ZSBnZXQgbmV3IG9iamVjdCBldmVyeXRpbWVcblxuICAgICAgICB2YXIgYm9keVN0eWxlID0ge1xuICAgICAgICAgICAgaGVpZ2h0OnRoaXMuc2V0dGluZ3MuaGVpZ2h0LnZhbHVlLFxuICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJ1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIGxheW91dFN0eWxlW1wicG9zaXRpb25cIl0gPSAnZml4ZWQnO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9PiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17Ym9keVN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsUGFuZWw7XG4iXX0=

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
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Style = __webpack_require__(7);
	
	var _Style2 = _interopRequireDefault(_Style);
	
	var _SplitPaneConfig = __webpack_require__(27);
	
	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);
	
	var _Pane = __webpack_require__(29);
	
	var _Pane2 = _interopRequireDefault(_Pane);
	
	var _Resizer = __webpack_require__(30);
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _PaneConfig = __webpack_require__(28);
	
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
/* 28 */
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
	
	var _Style = __webpack_require__(7);
	
	var _Style2 = _interopRequireDefault(_Style);
	
	var _PaneConfig = __webpack_require__(28);
	
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
	
	var _Style = __webpack_require__(7);
	
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

	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);
	
	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

	var _Brand = __webpack_require__(32);
	
	var _Brand2 = _interopRequireDefault(_Brand);
	
	var _Logo = __webpack_require__(34);
	
	var _Logo2 = _interopRequireDefault(_Logo);
	
	var _Title = __webpack_require__(35);
	
	var _Title2 = _interopRequireDefault(_Title);
	
	var _List = __webpack_require__(36);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _Form = __webpack_require__(38);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _Link = __webpack_require__(37);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _HTMLWrapper = __webpack_require__(33);
	
	var _HTMLWrapper2 = _interopRequireDefault(_HTMLWrapper);
	
	var _Config = __webpack_require__(39);
	
	var _Config2 = _interopRequireDefault(_Config);

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
	
	var Navbar = function (_AbstractComponent) {
	    _inherits(Navbar, _AbstractComponent);
	
	    function Navbar(props) {
	        _classCallCheck(this, Navbar);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props, "container"));
	    }
	
	    _createClass(Navbar, [{
	        key: "renderChildren",
	        value: function renderChildren() {
	            this.settings.props.addChildProps("dock", this.settings.dock.value);
	            this.settings.props.addChildProps("useCSS", this.settings.useCSS.value);
	            return _ComponentManager2.default.renderChildren(this, this.propsManager);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("Navbar ---Render---");
	            var styleObj = this.settings.style.state;
	            var cssName = this.settings.CSS.getCSSFor();
	            var childrenUI = this.renderChildren();
	
	            if (this.settings.useCSS.value) {
	                return _react2.default.createElement("nav", { className: cssName, style: styleObj }, childrenUI);
	            } else {
	                return _react2.default.createElement("nav", { style: styleObj }, childrenUI);
	            }
	        }
	    }]);
	
	    return Navbar;
	}(_AbstractComponent3.default);
	
	Navbar.Brand = _Brand2.default;
	Navbar.Logo = _Logo2.default;
	Navbar.Title = _Title2.default;
	Navbar.List = _List2.default;
	Navbar.Link = _Link2.default;
	Navbar.Form = _Form2.default;
	
	_ComponentManager2.default.registerToolConfig(Navbar, _Config2.default.Navbar);
	_ComponentManager2.default.registerToolConfig(Navbar.Brand, _Config2.default.Brand);
	_ComponentManager2.default.registerToolConfig(Navbar.Logo, _Config2.default.Logo);
	_ComponentManager2.default.registerToolConfig(Navbar.Title, _Config2.default.Title);
	_ComponentManager2.default.registerToolConfig(Navbar.List, _Config2.default.List);
	_ComponentManager2.default.registerToolConfig(Navbar.Link, _Config2.default.Link);
	_ComponentManager2.default.registerToolConfig(Navbar.Form, _Config2.default.Form);

	_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Navbar", Navbar);
	_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Brand", Navbar.Brand);
	_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Logo", Navbar.Logo);
	_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Title", Navbar.Title);
	_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.List", Navbar.List);
	_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Link", Navbar.Link);
	_ComponentManager2.default.registerToolImplementation("weavereact.navbarConfig.Form", Navbar.Form);
	
	Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);
	
	exports.default = Navbar;
	//# sourceMappingURL=data:application/json;base64,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cUJBQXlDLEFBQXpDLFFBQWdELENBQUMsUUFBUSxBQUFSLElBQVksQUFBWixLQUFpQixBQUFqQixBQUFqRDs7a0JBRWUiLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgQnJhbmQgZnJvbSBcIi4vQnJhbmRcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IEhUTUxXcmFwcGVyIGZyb20gXCIuLi9IVE1MV3JhcHBlclwiO1xuaW1wb3J0IG5hdmJhckNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcblxuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzLFwiY29udGFpbmVyXCIpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiZG9ja1wiLHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInVzZUNTU1wiLHRoaXMuc2V0dGluZ3MudXNlQ1NTLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyx0aGlzLnByb3BzTWFuYWdlcik7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJOYXZiYXIgLS0tUmVuZGVyLS0tXCIpO1xuICAgICAgICB2YXIgc3R5bGVPYmogPSB0aGlzLnNldHRpbmdzLnN0eWxlLnN0YXRlO1xuICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZSl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjc3NOYW1lfSBzdHlsZT17c3R5bGVPYmp9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bmF2IHN0eWxlPXtzdHlsZU9ian0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5OYXZiYXIuQnJhbmQgPSBCcmFuZDtcbk5hdmJhci5Mb2dvID0gTG9nbztcbk5hdmJhci5UaXRsZSA9IFRpdGxlO1xuTmF2YmFyLkxpc3QgPSBMaXN0O1xuTmF2YmFyLkxpbmsgPSBMaW5rO1xuTmF2YmFyLkZvcm0gPSBGb3JtO1xuXG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhcixuYXZiYXJDb25maWcuTmF2YmFyKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5CcmFuZCxuYXZiYXJDb25maWcuQnJhbmQpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxvZ28sbmF2YmFyQ29uZmlnLkxvZ28pO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLlRpdGxlLG5hdmJhckNvbmZpZy5UaXRsZSk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTGlzdCxuYXZiYXJDb25maWcuTGlzdCk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuTGluayxuYXZiYXJDb25maWcuTGluayk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuRm9ybSxuYXZiYXJDb25maWcuRm9ybSk7XG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5OYXZiYXJcIixOYXZiYXIpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkJyYW5kXCIsTmF2YmFyLkJyYW5kKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5Mb2dvXCIsTmF2YmFyLkxvZ28pO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLlRpdGxlXCIsTmF2YmFyLlRpdGxlKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaXN0XCIsTmF2YmFyLkxpc3QpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpbmtcIixOYXZiYXIuTGluayk7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuRm9ybVwiLE5hdmJhci5Gb3JtKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuTmF2YmFyXCIsIE5hdmJhcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cblxuXG5cblxuIl19

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
	
	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};
	
	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);
	
	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

	var _HTMLWrapper = __webpack_require__(33);
	
	var _HTMLWrapper2 = _interopRequireDefault(_HTMLWrapper);
	
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
	
	var Brand = function (_AbstractComponent) {
	    _inherits(Brand, _AbstractComponent);
	
	    function Brand(props) {
	        _classCallCheck(this, Brand);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Brand).call(this, props, "container"));
	    }
	
	    _createClass(Brand, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            _get(Object.getPrototypeOf(Brand.prototype), "shouldComponentUpdate", this).call(this, nextProps);
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
	        value: function renderChildren() {
	            return _ComponentManager2.default.renderChildren(this);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("Brand - render");
	            var BrandUI = _react2.default.createElement("div", null);
	
	            if (!this.settings.visible.value) return BrandUI;
	
	            var cssName = this.settings.CSS.getCSSFor();
	            var styleObject = this.settings.style.state;
	            var childrenUI = this.renderChildren();
	
	            if (this.settings.useCSS.value) {
	                BrandUI = _react2.default.createElement("div", { className: cssName }, childrenUI);
	            } else {
	                BrandUI = _react2.default.createElement("div", { style: styleObject }, childrenUI);
	            }

	            return BrandUI;
	        }
	    }]);
	
	    return Brand;
	}(_AbstractComponent3.default);
	
	Weave.registerClass("weavereact.navbar.Brand", Brand, [weavejs.api.core.ILinkableObject]);
	exports.default = Brand;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJyYW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNO3FCQUVGOzthQUZFLEFBRUYsTUFBQSxBQUFZLE9BQU87OEJBRmpCLEFBRWlCOztzRUFGakIsa0JBR1EsT0FEVixBQUFtQixBQUNIOzs7aUJBSGQ7OzhDQU9vQixXQUFVLEFBQzVCO3VDQVJGLDREQU84QixBQUM1QixBQUE0QixBQUM1QjtnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsVUFBQSxBQUFVO3VCQUFqQyxBQUFzQyxBQUNsQyxBQUFPLEtBRDJCLEFBQ2xDO3VCQUNLLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBYSxVQUFBLEFBQVU7dUJBQXJDLEFBQThDLEFBQ2hELEFBQU8sS0FEeUMsQUFDaEQ7YUFERSxVQUVHLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBVyxVQUFBLEFBQVU7dUJBQW5DLEFBQTBDLEFBQzVDLEFBQU8sS0FEcUMsQUFDNUM7YUFERSxNQUVELEFBQ0Q7dUJBSEUsQUFFRCxBQUNELEFBQU87Ozs7O3lDQUtDLEFBQ1o7bUJBQU8sMkJBQUEsQUFBaUIsZUFEWixBQUNaLEFBQU8sQUFBZ0M7Ozs7O2dCQU1uQywyQkFBQSxBQUFpQixPQUFNLFFBQUEsQUFBUSxJQUFsQyxBQUEwQixBQUFZLEFBQ3ZDO2dCQUFJLFVBQVUscUNBRlQsQUFFRCxBQUVKOztnQkFBRyxDQUFDLEtBQUEsQUFBSyxTQUFMLEFBQWMsUUFBZCxBQUFzQixPQUN0QixPQURKLEFBQ0ksQUFBTyxBQUVYOztnQkFBSSxVQUFVLEtBQUEsQUFBSyxTQUFMLEFBQWMsSUFQdkIsQUFPRCxBQUFVLEFBQWtCLEFBQ2hDO2dCQUFJLGNBQWMsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQVIzQixBQVFhLEFBQW9CLEFBQ3RDO2dCQUFJLGFBQWEsS0FUWixBQVNELEFBQWEsQUFBSyxBQUV0Qjs7Z0JBQUcsS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLE9BQU0sQUFDMUI7MEJBQVUsdUNBQUssV0FBTCxBQUFLLEFBQVcsV0FEOUIsQUFBOEIsQUFDMUIsQUFBVSxBQUNHO21CQUVaLEFBQ0Q7MEJBQVUsdUNBQUssT0FBTCxBQUFLLEFBQU8sZUFMMUIsQUFJSyxBQUNELEFBQVUsQUFDRyxBQUtqQjs7O21CQXRCSyxBQXNCTCxBQUFRLFFBdEJILEFBQ0o7Ozs7V0E1Qkg7OztBQW9ETixNQUFBLEFBQU0sY0FBTixBQUFvQiwyQkFBcEIsQUFBK0MsT0FBTSxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBbEUsQUFBc0QsQUFBaUI7a0JBQ3hEIiwiZmlsZSI6IkJyYW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgSFRNTFdyYXBwZXIgZnJvbSBcIi4uL0hUTUxXcmFwcGVyXCI7XG5cbmNsYXNzIEJyYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsXCJjb250YWluZXJcIik7XG4gICAgfVxuXG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jayAhPT0gbmV4dFByb3BzLmRvY2spe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMudXNlQ1NTICE9PSBuZXh0UHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIkJyYW5kIC0gcmVuZGVyXCIpO1xuICAgICAgICB2YXIgQnJhbmRVSSA9IDxkaXYvPjtcblxuICAgICAgICBpZighdGhpcy5zZXR0aW5ncy52aXNpYmxlLnZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIEJyYW5kVUk7XG5cbiAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWUpe1xuICAgICAgICAgICAgQnJhbmRVSSA9IDxkaXYgY2xhc3NOYW1lPXtjc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIEJyYW5kVUkgPSA8ZGl2IHN0eWxlPXtzdHlsZU9iamVjdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIChCcmFuZFVJKTtcbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuQnJhbmRcIiwgQnJhbmQsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBCcmFuZDtcbiJdfQ==

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

	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);
	
	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _HTMLWrapperConfig = __webpack_require__(11);
	
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
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(HTMLWrapper).call(this, props));
	    }
	
	    _createClass(HTMLWrapper, [{
	        key: "render",
	        value: function render() {
	
	            return _react2.default.createElement("div", { style: this.props.style, onClick: this.props.onClick }, this.props.children);
	        }
	    }]);
	
	    return HTMLWrapper;
	}(_react2.default.Component);
	
	_ComponentManager2.default.registerToolConfig(HTMLWrapper, _HTMLWrapperConfig2.default);
	_ComponentManager2.default.registerToolImplementation("weavereact.HTMLWrapperConfig", HTMLWrapper);
	
	Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper, [weavejs.api.core.ILinkableObject]);
	
	exports.default = HTMLWrapper;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTTsyQkFFRjs7YUFGRSxBQUVGLFlBQVksQUFBWixPQUFtQjs4QkFGakIsQUFFaUI7O3NFQUZqQix3QkFHUSxBQURTLEFBQW5COzs7aUJBRkU7O2lDQVFPLEFBRUw7O21CQUFRLHVDQUFLLE9BQU8sS0FBSyxBQUFMLE1BQVcsQUFBWCxPQUFrQixTQUFTLEtBQUssQUFBTCxNQUFXLEFBQVgsQUFBdkMsV0FDSyxLQUFLLEFBQUwsTUFBVyxBQUFYLEFBRGIsQUFGSzs7OztXQVJQO0VBQW9CLGdCQUFNLEFBQU47O0FBaUIxQiwyQkFBaUIsQUFBakIsbUJBQW9DLEFBQXBDO0FBQ0EsMkJBQWlCLEFBQWpCLDJCQUE0QyxBQUE1QyxnQ0FBMkUsQUFBM0U7O0FBRUEsTUFBTSxBQUFOLGNBQW9CLEFBQXBCLDBCQUE4QyxBQUE5QyxhQUEwRCxDQUFDLFFBQVEsQUFBUixJQUFZLEFBQVosS0FBaUIsQUFBakIsQUFBM0Q7O2tCQUVlIiwiZmlsZSI6IkhUTUxXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIVE1MV3JhcHBlckNvbmZpZyBmcm9tIFwiLi4vY29uZmlncy9IVE1MV3JhcHBlckNvbmZpZ1wiO1xuXG5jbGFzcyBIVE1MV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICB9XG59XG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKEhUTUxXcmFwcGVyLEhUTUxXcmFwcGVyQ29uZmlnKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LkhUTUxXcmFwcGVyQ29uZmlnXCIsSFRNTFdyYXBwZXIpO1xuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5IVE1MV3JhcHBlclwiLCBIVE1MV3JhcHBlcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTFdyYXBwZXI7XG4iXX0=

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
	
	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};
	
	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);
	
	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

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
	
	var Logo = function (_AbstractComponent) {
	    _inherits(Logo, _AbstractComponent);
	
	    function Logo(props) {
	        _classCallCheck(this, Logo);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Logo).call(this, props));

	        if (_this.props.src) //to-do in component manager check the settings prop is there if there set the state
	            _this.settings.src.state = _this.props.src;
	        return _this;
	    }
	
	    _createClass(Logo, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            _get(Object.getPrototypeOf(Logo.prototype), "componentWillReceiveProps", this).call(this, nextProps);
	            if (this.props.src !== nextProps.src) {
	                // user style added through UI is Sessioned
	                this.settings.src.state = nextProps.src;
	            }
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            _get(Object.getPrototypeOf(Logo.prototype), "shouldComponentUpdate", this).call(this, nextProps);
	            if (this.props.dock !== nextProps.dock) {
	                return true;
	            } else if (this.props.position !== nextProps.position) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("Logo - render");
	            if (!this.settings.visible.value) return _react2.default.createElement("div", null);
	
	            if (this.settings.src.state) {
	                var styleObj = this.settings.style.state;
	                return _react2.default.createElement("img", { style: styleObj, src: this.settings.src.value });
	            } else return _react2.default.createElement("div", null);
	        }
	    }]);
	
	    return Logo;
	}(_AbstractComponent3.default);
	
	Weave.registerClass("weavereact.navbar.Logo", Logo, [weavejs.api.core.ILinkableObject]);
	exports.default = Logo;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvZ28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTTtvQkFFRjs7YUFGRSxBQUVGLEtBQUEsQUFBWTs4QkFGVixBQUVpQjs7MkVBRmpCLGlCQUVpQixBQUNULEFBQ047O1lBQUcsTUFBQSxBQUFLLE1BQUwsQUFBVyxBQUNWO2tCQUFBLEFBQUssU0FBTCxBQUFjLElBQWQsQUFBa0IsUUFBUyxNQUFBLEFBQUssTUFEcEMsQUFDK0IsQUFBVztlQUg5QyxBQUFtQixNQUFBOzs7aUJBRmpCOztrREFTd0IsV0FBVSxBQUNoQzt1Q0FWRiwrREFTa0MsQUFDaEMsQUFBZ0MsQUFDaEM7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLFVBQUEsQUFBVSxLQUFJLEFBQ2hDOztxQkFBQSxBQUFLLFNBQUwsQUFBYyxJQUFkLEFBQWtCLFFBQVEsVUFEOUIsQUFBb0MsQUFDTixBQUFVOzs7Ozs4Q0FLdEIsV0FBVSxBQUM1Qjt1Q0FsQkYsMkRBaUI4QixBQUM1QixBQUE0QixBQUM1QjtnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsVUFBQSxBQUFVO3VCQUFqQyxBQUFzQyxBQUNsQyxBQUFPLEtBRDJCLEFBQ2xDO3VCQUNLLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBYSxVQUFBLEFBQVU7dUJBQXJDLEFBQThDLEFBQ2hELEFBQU8sS0FEeUMsQUFDaEQ7YUFERSxNQUVELEFBQ0Q7dUJBSEUsQUFFRCxBQUNELEFBQU87Ozs7O2lDQUtOLEFBQ0w7Z0JBQUcsMkJBQUEsQUFBaUIsT0FBTSxRQUFBLEFBQVEsSUFBbEMsQUFBMEIsQUFBWSxBQUN0QztnQkFBRyxDQUFDLEtBQUEsQUFBSyxTQUFMLEFBQWMsUUFBZCxBQUFzQixPQUN0QixPQUFPLHFDQURYLEFBQ0ksQUFFSjs7Z0JBQUcsS0FBQSxBQUFLLFNBQUwsQUFBYyxJQUFkLEFBQWtCLE9BQU0sQUFDdkI7b0JBQUksV0FBVyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BRE4sQUFDUixBQUFvQixBQUNuQzt1QkFBTyx1Q0FBSyxPQUFBLEFBQU8sVUFBVSxLQUFLLEtBQUEsQUFBSyxTQUFMLEFBQWMsSUFGcEQsQUFBMkIsQUFFdkIsQUFBTyxBQUEyQixBQUFrQjttQkFHcEQsT0FBTyxxQ0FMWCxBQUtJOzs7O1dBdkNOOzs7QUEwQ04sTUFBQSxBQUFNLGNBQU4sQUFBb0IsMEJBQXBCLEFBQThDLE1BQUssQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQWhFLEFBQW9ELEFBQWlCO2tCQUN0RCIsImZpbGUiOiJMb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5cbmNsYXNzIExvZ28gZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3JjKS8vdG8tZG8gaW4gY29tcG9uZW50IG1hbmFnZXIgY2hlY2sgdGhlIHNldHRpbmdzIHByb3AgaXMgdGhlcmUgaWYgdGhlcmUgc2V0IHRoZSBzdGF0ZVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zcmMuc3RhdGUgPSAgdGhpcy5wcm9wcy5zcmM7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zcmMgIT09IG5leHRQcm9wcy5zcmMpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc3JjLnN0YXRlID0gbmV4dFByb3BzLnNyYztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiTG9nbyAtIHJlbmRlclwiKTtcbiAgICAgICAgaWYoIXRoaXMuc2V0dGluZ3MudmlzaWJsZS52YWx1ZSlcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5zcmMuc3RhdGUpe1xuICAgICAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHN0eWxlPXtzdHlsZU9ian0gc3JjPXt0aGlzLnNldHRpbmdzLnNyYy52YWx1ZX0vPlxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz5cbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTG9nb1wiLCBMb2dvLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiJdfQ==

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
	
	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};
	
	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);
	
	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

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
	
	var Title = function (_AbstractComponent) {
	    _inherits(Title, _AbstractComponent);
	
	    function Title(props) {
	        _classCallCheck(this, Title);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Title).call(this, props));

	        if (_this.props.title) _this.settings.title.state = _this.props.title;
	        return _this;
	    }
	
	    _createClass(Title, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            _get(Object.getPrototypeOf(Title.prototype), "componentWillReceiveProps", this).call(this, nextProps);
	            if (this.props.title !== nextProps.title) {
	                // user style added through UI is Sessioned
	                if (nextProps.title) this.settings.title.state = nextProps.title;
	            }
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            _get(Object.getPrototypeOf(Title.prototype), "shouldComponentUpdate", this).call(this, nextProps);
	            if (this.props.dock !== nextProps.dock) {
	                return true;
	            } else if (this.props.position !== nextProps.position) {
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
	            if (_ComponentManager2.default.debug) console.log("Title ---Render---");
	            if (!this.settings.visible.value) return _react2.default.createElement("div", null);
	
	            var styleObj = this.settings.style.state;
	
	            return _react2.default.createElement("span", { style: styleObj }, this.settings.title.value);
	        }
	    }]);
	
	    return Title;
	}(_AbstractComponent3.default);
	
	Weave.registerClass("weavereact.navbar.Title", Title, [weavejs.api.core.ILinkableObject]);
	exports.default = Title;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07cUJBRUY7O2FBRkUsQUFFRixNQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQixrQkFFaUIsQUFDVCxBQUNOOztZQUFHLE1BQUEsQUFBSyxNQUFMLEFBQVcsT0FDVixNQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsUUFBUyxNQUFBLEFBQUssTUFEdEMsQUFDaUMsQUFBVztlQUhoRCxBQUFtQixNQUFBOzs7aUJBRmpCOztrREFTd0IsV0FBVSxBQUNoQzt1Q0FWRixnRUFTa0MsQUFDaEMsQUFBZ0MsQUFDaEM7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLFVBQUEsQUFBVSxPQUFNLEFBQ3BDOztvQkFBRyxVQUFBLEFBQVUsT0FBTSxLQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsUUFBUSxVQURuRCxBQUNJLEFBQStDLEFBQVU7Ozs7OzhDQU0zQyxXQUFVLEFBQzVCO3VDQW5CRiw0REFrQjhCLEFBQzVCLEFBQTRCLEFBQzVCO2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxVQUFBLEFBQVU7dUJBQWpDLEFBQXNDLEFBQ2xDLEFBQU8sS0FEMkIsQUFDbEM7dUJBQ0ssS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLFVBQUEsQUFBVTt1QkFBckMsQUFBOEMsQUFDaEQsQUFBTyxLQUR5QyxBQUNoRDthQURFLFVBRUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLFVBQUEsQUFBVTt1QkFBbEMsQUFBd0MsQUFDMUMsQUFBTyxLQURtQyxBQUMxQzthQURFLE1BRUQsQUFDRDt1QkFIRSxBQUVELEFBQ0QsQUFBTzs7Ozs7aUNBS04sQUFDTDtnQkFBRywyQkFBQSxBQUFpQixPQUFNLFFBQUEsQUFBUSxJQUFsQyxBQUEwQixBQUFZLEFBQ3RDO2dCQUFHLENBQUMsS0FBQSxBQUFLLFNBQUwsQUFBYyxRQUFkLEFBQXNCLE9BQ3JCLE9BQU8scUNBRFosQUFDSyxBQUVMOztnQkFBSSxXQUFXLEtBQUEsQUFBSyxTQUFMLEFBQWMsTUFMeEIsQUFLVSxBQUFvQixBQUVuQzs7bUJBQU8sd0NBQU0sT0FBTixBQUFNLEFBQU8sWUFBVyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BUHhDLEFBT0wsQUFBK0IsQUFBb0I7Ozs7V0F2Q3JEOzs7QUEwQ04sTUFBQSxBQUFNLGNBQU4sQUFBb0IsMkJBQXBCLEFBQStDLE9BQU0sQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQWxFLEFBQXNELEFBQWlCO2tCQUN4RCIsImZpbGUiOiJUaXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuXG5jbGFzcyBUaXRsZSBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50aXRsZSlcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUuc3RhdGUgPSAgdGhpcy5wcm9wcy50aXRsZTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLnRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy50aXRsZSl0aGlzLnNldHRpbmdzLnRpdGxlLnN0YXRlID0gbmV4dFByb3BzLnRpdGxlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKVxuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIlRpdGxlIC0tLVJlbmRlci0tLVwiKTtcbiAgICAgICAgaWYoIXRoaXMuc2V0dGluZ3MudmlzaWJsZS52YWx1ZSlcbiAgICAgICAgICAgICByZXR1cm4gPGRpdi8+O1xuXG4gICAgICAgIHZhciBzdHlsZU9iaiA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIDxzcGFuIHN0eWxlPXtzdHlsZU9ian0+e3RoaXMuc2V0dGluZ3MudGl0bGUudmFsdWV9PC9zcGFuPlxuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5UaXRsZVwiLCBUaXRsZSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIl19

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
	
	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};
	
	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);
	
	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

	var _Link = __webpack_require__(37);
	
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
	
	var List = function (_AbstractComponent) {
	    _inherits(List, _AbstractComponent);
	
	    function List(props) {
	        _classCallCheck(this, List);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props, "container"));
	    }
	
	    // called only when React Parent render is called
	
	    _createClass(List, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            _get(Object.getPrototypeOf(List.prototype), "shouldComponentUpdate", this).call(this, nextProps);
	            if (this.props.dock !== nextProps.dock) {
	                if (_ComponentManager2.default.debug) console.log("props.dock changed");
	                return true;
	            } else if (this.props.position !== nextProps.position) {
	                if (_ComponentManager2.default.debug) console.log("props.position changed");
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
	
	            this.settings.props.addChildProps("iconOnly", iconOnly);
	            this.settings.props.addChildProps("style", linkStyleObject);
	            this.settings.props.addChildProps("isActive", false, true);
	            this.settings.props.keyProp = "objectName";
	            this.settings.props.addOddChildren([this.settings.activePage.value]);
	            return _ComponentManager2.default.renderChildren(this);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("List - render");
	            if (!this.settings.visible.value) return _react2.default.createElement("div", null);

	            var styleObject = this.settings.style.state;
	            var cssName = this.settings.CSS.getCSSFor();
	            var childrenUI = this.renderChildren();

	            if (this.settings.useCSS.state) {
	                return _react2.default.createElement("ul", { className: cssName }, childrenUI);
	            } else {
	                return _react2.default.createElement("ul", { style: styleObject }, childrenUI);
	            }
	        }
	    }]);
	
	    return List;
	}(_AbstractComponent3.default);
	
	Weave.registerClass("weavereact.navbar.List", List, [weavejs.api.core.ILinkableObject]);
	exports.default = List;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07b0JBRUY7O2FBRkUsQUFFRixLQUFBLEFBQVksT0FBTTs4QkFGaEIsQUFFZ0I7O3NFQUZoQixpQkFHUSxPQURWLEFBQWtCLEFBQ0Y7Ozs7O2lCQUhkOzs4Q0FRb0IsV0FBVSxBQUM1Qjt1Q0FURiwyREFROEIsQUFDNUIsQUFBNEIsQUFDNUI7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLFVBQUEsQUFBVTtvQkFDMUIsMkJBQUEsQUFBaUIsT0FBTSxRQUFBLEFBQVEsSUFBbEMsQUFBMEIsQUFBWSxBQUN0Qzt1QkFGSixBQUFzQyxBQUVsQyxBQUFPLEtBRjJCLEFBQ2xDO3VCQUVLLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBYSxVQUFBLEFBQVU7b0JBQ3BDLDJCQUFBLEFBQWlCLE9BQU0sUUFBQSxBQUFRLElBQWxDLEFBQTBCLEFBQVksQUFDdEM7dUJBRkUsQUFBOEMsQUFFaEQsQUFBTyxLQUZ5QyxBQUNoRDthQURFLE1BR0QsQUFDRDt1QkFKRSxBQUdELEFBQ0QsQUFBTzs7Ozs7OztnQkFPUCxrQkFGUSxBQUVSLEFBQWdCLEFBQ3BCO2dCQUFJLFdBSFEsQUFHUixBQUFXLEFBQ2YsTUFKWSxBQUVaO2dCQUVJLFFBQVEsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUpkLEFBSUEsQUFBb0IsQUFDaEM7Z0JBQUcsQUFBQyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsV0FBYSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0I7MkJBQVEsQUFDN0QsQUFBVyxBQUNYLEtBRjZELEFBQzdEO2dDQUNBLEFBQWdCLGtCQUZwQixBQUFpRSxBQUU3RCxBQUFrQzt1QkFFOUIsQUFBQyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsU0FBVyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0I7MkJBQVUsQUFDbEUsQUFBVyxBQUNYLE1BRmtFLEFBQ2xFO2dDQUNBLEFBQWdCLGlCQUZmLEFBQWlFLEFBRWxFLEFBQWlDLEFBR3JDO2FBTEs7O2lCQUtMLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsY0FBcEIsQUFBa0MsWUFkdEIsQUFjWixBQUE2QyxBQUM3QztpQkFBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLGNBQXBCLEFBQWtDLFNBZnRCLEFBZVosQUFBMEMsQUFDMUM7aUJBQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixjQUFwQixBQUFrQyxZQUFsQyxBQUE2QyxPQWhCakMsQUFnQlosQUFBbUQsQUFDbkQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixVQWpCUixBQWlCWixBQUE4QixBQUM5QjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLGVBQWUsQ0FBQyxLQUFBLEFBQUssU0FBTCxBQUFjLFdBbEJ0QyxBQWtCWixBQUFvQyxBQUF5QixBQUM3RDttQkFBUSwyQkFBQSxBQUFpQixlQW5CYixBQW1CWixBQUFRLEFBQWdDOzs7O2lDQUluQyxBQUNMO2dCQUFHLDJCQUFBLEFBQWlCLE9BQU0sUUFBQSxBQUFRLElBQWxDLEFBQTBCLEFBQVksQUFDdEM7Z0JBQUcsQ0FBQyxLQUFBLEFBQUssU0FBTCxBQUFjLFFBQWQsQUFBc0IsT0FDdEIsT0FBTyxxQ0FEWCxBQUNJLEFBRUo7O2dCQUFJLGNBQWMsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUwzQixBQUthLEFBQW9CLEFBQ3RDO2dCQUFJLFVBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxJQU52QixBQU1ELEFBQVUsQUFBa0IsQUFDaEM7Z0JBQUksYUFBYSxLQVBaLEFBT0QsQUFBYSxBQUFLLEFBRXRCOztnQkFBRyxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsT0FBTSxBQUMxQjt1QkFBTyxzQ0FBSSxXQUFKLEFBQUksQUFBVyxXQUQxQixBQUE4QixBQUMxQixBQUFPLEFBQXlCO21CQUVoQyxBQUNBO3VCQUFPLHNDQUFLLE9BQUwsQUFBSyxBQUFPLGVBSnZCLEFBR0ksQUFDQSxBQUFPLEFBQTBCOzs7OztXQTFEdkM7OztBQStETixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsTUFBSyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBaEUsQUFBb0QsQUFBaUI7a0JBQ3REIiwiZmlsZSI6Ikxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcblxuXG5jbGFzcyBMaXN0IGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyxcImNvbnRhaW5lclwiKTtcbiAgICB9XG5cblxuICAgIC8vIGNhbGxlZCBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWRcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jayAhPT0gbmV4dFByb3BzLmRvY2spe1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcInByb3BzLmRvY2sgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwicHJvcHMucG9zaXRpb24gY2hhbmdlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG5cbiAgICAgICAgdmFyIGxpbmtTdHlsZU9iamVjdD17fTtcbiAgICAgICAgdmFyIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgIHZhciBzcGFjZSA9IHRoaXMuc2V0dGluZ3Muc3BhY2UudmFsdWU7XG4gICAgICAgIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwicmlnaHRcIikgfHwgKHRoaXMucHJvcHMuZG9jayA9PT0gXCJsZWZ0XCIpKXtcbiAgICAgICAgICAgIGljb25Pbmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGxpbmtTdHlsZU9iamVjdFtcIm1hcmdpbkJvdHRvbVwiXSA9IHNwYWNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoKHRoaXMucHJvcHMuZG9jayA9PT0gXCJ0b3BcIikgfHwgKHRoaXMucHJvcHMuZG9jayA9PT0gXCJib3R0b21cIikpe1xuICAgICAgICAgICAgaWNvbk9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgIGxpbmtTdHlsZU9iamVjdFtcIm1hcmdpblJpZ2h0XCJdID0gc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJpY29uT25seVwiLGljb25Pbmx5KTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwic3R5bGVcIixsaW5rU3R5bGVPYmplY3QpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJpc0FjdGl2ZVwiLGZhbHNlLHRydWUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmtleVByb3AgPSBcIm9iamVjdE5hbWVcIjtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRPZGRDaGlsZHJlbihbdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnZhbHVlXSk7XG4gICAgICAgIHJldHVybiAgQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIkxpc3QgLSByZW5kZXJcIik7XG4gICAgICAgIGlmKCF0aGlzLnNldHRpbmdzLnZpc2libGUudmFsdWUpXG4gICAgICAgICAgICByZXR1cm4gPGRpdi8+O1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuc3RhdGU7XG4gICAgICAgIHZhciBjc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5DU1MuZ2V0Q1NTRm9yKCk7XG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnN0YXRlKXtcbiAgICAgICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPXtjc3NOYW1lfT57Y2hpbGRyZW5VSX08L3VsPjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIDx1bCAgc3R5bGU9e3N0eWxlT2JqZWN0fT57Y2hpbGRyZW5VSX08L3VsPjtcbiAgICAgICAgfVxuICAgIH1cblxufVxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QubmF2YmFyLkxpc3RcIiwgTGlzdCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXX0=

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
	
	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};
	
	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

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
	
	var Link = function (_AbstractComponent) {
	    _inherits(Link, _AbstractComponent);
	
	    function Link(props) {
	        _classCallCheck(this, Link);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this, props));

	        if (_this.props.children) _this.settings.title.value = _this.props.children;
	        return _this;
	    }
	
	    _createClass(Link, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            _get(Object.getPrototypeOf(Link.prototype), "componentWillReceiveProps", this).call(this, nextProps);
	            if (this.props.children !== nextProps.children) this.settings.title.value = nextProps.children;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("Link - render");
	            var title = this.settings.title.value;
	            var hrefLink = title.toLowerCase();
	            if (this.settings.iconMode.state) {
	                title = "";
	            }
	            var styleObject = this.settings.style.state;
	            if (this.props.isActive) {
	
	                return _react2.default.createElement("li", { style: this.props.style }, _react2.default.createElement("a", { style: styleObject, href: '#' + hrefLink }, _react2.default.createElement("i", { className: this.settings.iconName.value }, " "), title));
	            } else {
	                return _react2.default.createElement("li", { style: this.props.style }, _react2.default.createElement("a", { style: styleObject, href: '#' + hrefLink }, _react2.default.createElement("i", { className: this.settings.iconName.value }, " "), title));
	            }
	        }
	    }]);
	
	    return Link;
	}(_AbstractComponent3.default);
	
	Weave.registerClass("weavereact.navbar.Link", Link, [weavejs.api.core.ILinkableObject]);
	exports.default = Link;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTTtvQkFFRjs7YUFGRSxBQUVGLEtBQUEsQUFBWTs4QkFGVixBQUVpQjs7MkVBRmpCLGlCQUVpQixBQUNULEFBQ047O1lBQUcsTUFBQSxBQUFLLE1BQUwsQUFBVyxVQUNWLE1BQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixRQUFRLE1BQUEsQUFBSyxNQURyQyxBQUNnQyxBQUFXO2VBSC9DLEFBQW1CLE1BQUE7OztpQkFGakI7O2tEQVN3QixXQUFVLEFBQ2hDO3VDQVZGLCtEQVNrQyxBQUNoQyxBQUFnQyxBQUNoQztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWEsVUFBQSxBQUFVLFVBQ2pDLEtBQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixRQUFRLFVBRGhDLEFBQ2dDLEFBQVU7Ozs7aUNBR3JDLEFBQ0w7Z0JBQUcsMkJBQUEsQUFBaUIsT0FBTSxRQUFBLEFBQVEsSUFBbEMsQUFBMEIsQUFBWSxBQUN0QztnQkFBSSxRQUFRLEtBQUEsQUFBSyxTQUFMLEFBQWMsTUFGckIsQUFFTyxBQUFvQixBQUNoQztnQkFBSSxXQUFXLE1BSFYsQUFHRCxBQUFXLEFBQU0sQUFDckI7Z0JBQUcsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCO3dCQUExQixBQUFnQyxBQUM1QixBQUFRLEFBRVosR0FIZ0MsQUFDNUI7O2dCQUVBLGNBQWMsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQVAzQixBQU9hLEFBQW9CLEFBQ3RDO2dCQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBVSxBQUVyQjs7dUJBQVMsc0NBQUksT0FBTyxLQUFBLEFBQUssTUFBaEIsQUFBVyxBQUFXLFNBQ25CLHFDQUFHLE9BQUEsQUFBTyxhQUFhLE1BQVEsTUFBL0IsQUFBK0IsQUFBTSxZQUNqQyxxQ0FBRyxXQUFhLEtBQUEsQUFBSyxTQUFMLEFBQWMsU0FBOUIsQUFBZ0IsQUFBdUIsU0FEM0MsTUFIaEIsQUFBeUIsQUFFckIsQUFBUyxBQUNHLEFBRUs7bUJBSWQsQUFDSDt1QkFBUSxzQ0FBSSxPQUFPLEtBQUEsQUFBSyxNQUFoQixBQUFXLEFBQVcsU0FDbEIscUNBQUcsT0FBQSxBQUFPLGFBQWEsTUFBUSxNQUEvQixBQUErQixBQUFNLFlBQ2pDLHFDQUFHLFdBQWEsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUE5QixBQUFnQixBQUF1QixTQUQzQyxNQVhoQixBQVNPLEFBQ0gsQUFBUSxBQUNJLEFBRUs7Ozs7O1dBcEN2Qjs7O0FBMkNOLE1BQUEsQUFBTSxjQUFOLEFBQW9CLDBCQUFwQixBQUE4QyxNQUFLLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFoRSxBQUFvRCxBQUFpQjtrQkFDdEQiLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IG5leHRQcm9wcy5jaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJMaW5rIC0gcmVuZGVyXCIpO1xuICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlO1xuICAgICAgICB2YXIgaHJlZkxpbmsgPSB0aXRsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmljb25Nb2RlLnN0YXRlKXtcbiAgICAgICAgICAgIHRpdGxlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLnN0YXRlXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzQWN0aXZlKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoIDxsaSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17c3R5bGVPYmplY3R9IGhyZWYgPSB7JyMnICsgaHJlZkxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDxsaSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17c3R5bGVPYmplY3R9IGhyZWYgPSB7JyMnICsgaHJlZkxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTGlua1wiLCBMaW5rLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdfQ==

/***/ },
/* 38 */
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
	
	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};
	
	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

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
	
	var Form = function (_AbstractComponent) {
	    _inherits(Form, _AbstractComponent);
	
	    function Form(props) {
	        _classCallCheck(this, Form);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props, "container"));
	    }
	
	    // called only when React Parent render is called
	
	    _createClass(Form, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            _get(Object.getPrototypeOf(Form.prototype), "shouldComponentUpdate", this).call(this, nextProps);
	            if (this.props.dock !== nextProps.dock) {
	                if (_ComponentManager2.default.debug) console.log("props.dock changed");
	                return true;
	            } else if (this.props.position !== nextProps.position) {
	                if (_ComponentManager2.default.debug) console.log("props.position changed");
	                return true;
	            } else {
	                return false;
	            }
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

	            this.settings.props.addChildProps("style", childStyleObject);
	            return _ComponentManager2.default.renderChildren(this);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("Form - render");
	            if (!this.settings.visible.value) return _react2.default.createElement("div", null);

	            var styleObject = this.settings.style.state;
	            var cssName = this.settings.CSS.getCSSFor();
	            var childrenUI = this.renderChildren();
	
	            if (this.settings.useCSS.state) {
	                return _react2.default.createElement("div", { className: cssName }, childrenUI);
	            } else {
	                return _react2.default.createElement("div", { style: styleObject }, childrenUI);
	            }
	        }
	    }]);
	
	    return Form;
	}(_AbstractComponent3.default);
	
	Weave.registerClass('weavereact.navbar.Form', Form, [weavejs.api.core.ILinkableObject]);
	
	exports.default = Form;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTTtvQkFFRjs7YUFGRSxBQUVGLEtBQUEsQUFBWSxPQUFPOzhCQUZqQixBQUVpQjs7c0VBRmpCLGlCQUdRLE9BRFYsQUFBbUIsQUFDSDs7Ozs7aUJBSGQ7OzhDQVNvQixXQUFVLEFBQzVCO3VDQVZGLDJEQVM4QixBQUM1QixBQUE0QixBQUM1QjtnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsVUFBQSxBQUFVO29CQUMxQiwyQkFBQSxBQUFpQixPQUFNLFFBQUEsQUFBUSxJQUFsQyxBQUEwQixBQUFZLEFBQ3RDO3VCQUZKLEFBQXNDLEFBRWxDLEFBQU8sS0FGMkIsQUFDbEM7dUJBRUssS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLFVBQUEsQUFBVTtvQkFDcEMsMkJBQUEsQUFBaUIsT0FBTSxRQUFBLEFBQVEsSUFBbEMsQUFBMEIsQUFBWSxBQUN0Qzt1QkFGRSxBQUE4QyxBQUVoRCxBQUFPLEtBRnlDLEFBQ2hEO2FBREUsTUFHRCxBQUNEO3VCQUpFLEFBR0QsQUFDRCxBQUFPOzs7Ozs7Z0JBS1AsbUJBRFEsQUFDUixBQUFpQixBQUNyQixHQUZZLEFBQ1o7Z0JBQ0ksUUFBUSxLQUFBLEFBQUssU0FBTCxBQUFjLE1BRmQsQUFFQSxBQUFvQixBQUNoQztnQkFBRyxBQUFDLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixXQUFhLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQjtpQ0FDckQsQUFBaUIsa0JBRHJCLEFBQWlFLEFBQzdELEFBQW1DLE1BRDBCLEFBQzdEO3VCQUVJLEFBQUMsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLFNBQVcsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CO2lDQUN4RCxBQUFpQixpQkFEaEIsQUFBaUUsQUFDbEUsQUFBa0MsQUFHdEMsTUFKc0UsQUFDbEU7YUFEQzs7aUJBSUwsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixjQUFwQixBQUFrQyxTQVZ0QixBQVVaLEFBQTBDLEFBQzFDO21CQUFPLDJCQUFBLEFBQWlCLGVBWFosQUFXWixBQUFPLEFBQWdDOzs7O2lDQU1sQyxBQUNMO2dCQUFHLDJCQUFBLEFBQWlCLE9BQU0sUUFBQSxBQUFRLElBQWxDLEFBQTBCLEFBQVksQUFDdEM7Z0JBQUcsQ0FBQyxLQUFBLEFBQUssU0FBTCxBQUFjLFFBQWQsQUFBc0IsT0FDdEIsT0FBTyxxQ0FEWCxBQUNJLEFBRUo7O2dCQUFJLGNBQWMsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUwzQixBQUthLEFBQW9CLEFBQ3RDO2dCQUFJLFVBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxJQU52QixBQU1ELEFBQVUsQUFBa0IsQUFDaEM7Z0JBQUksYUFBYSxLQVBaLEFBT0QsQUFBYSxBQUFLLEFBRXRCOztnQkFBRyxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsT0FBTSxBQUMxQjt1QkFBTyx1Q0FBTSxXQUFOLEFBQU0sQUFBVyxXQUQ1QixBQUE4QixBQUMxQixBQUFPLEFBQ1U7bUJBRWhCLEFBQ0Q7dUJBQU8sdUNBQU0sT0FBTixBQUFNLEFBQU8sZUFMeEIsQUFJSyxBQUNELEFBQU8sQUFDVTs7Ozs7V0F0RHZCOzs7QUE4RE4sTUFBQSxBQUFNLGNBQU4sQUFBb0IsMEJBQXBCLEFBQThDLE1BQUssQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQWhFLEFBQW9ELEFBQWlCOztrQkFFdEQiLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsXCJjb250YWluZXJcIik7XG4gICAgfVxuXG5cblxuICAgIC8vIGNhbGxlZCBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWRcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcylcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwicHJvcHMuZG9jayBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gbmV4dFByb3BzLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJwcm9wcy5wb3NpdGlvbiBjaGFuZ2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHZhciBjaGlsZFN0eWxlT2JqZWN0PXt9O1xuICAgICAgICB2YXIgc3BhY2UgPSB0aGlzLnNldHRpbmdzLnNwYWNlLnZhbHVlO1xuICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInJpZ2h0XCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwibGVmdFwiKSl7XG4gICAgICAgICAgICBjaGlsZFN0eWxlT2JqZWN0W1wibWFyZ2luQm90dG9tXCJdID0gc3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInRvcFwiKSB8fCAodGhpcy5wcm9wcy5kb2NrID09PSBcImJvdHRvbVwiKSl7XG4gICAgICAgICAgICBjaGlsZFN0eWxlT2JqZWN0W1wibWFyZ2luUmlnaHRcIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInN0eWxlXCIsY2hpbGRTdHlsZU9iamVjdCk7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnJlbmRlckNoaWxkcmVuKHRoaXMpO1xuICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIkZvcm0gLSByZW5kZXJcIik7XG4gICAgICAgIGlmKCF0aGlzLnNldHRpbmdzLnZpc2libGUudmFsdWUpXG4gICAgICAgICAgICByZXR1cm4gPGRpdi8+O1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuc3RhdGU7XG4gICAgICAgIHZhciBjc3NOYW1lID0gdGhpcy5zZXR0aW5ncy5DU1MuZ2V0Q1NTRm9yKCk7XG4gICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MudXNlQ1NTLnN0YXRlKXtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2ICBjbGFzc05hbWU9e2Nzc05hbWV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2ICBzdHlsZT17c3R5bGVPYmplY3R9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXIuRm9ybScsIEZvcm0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXX0=

/***/ },
/* 39 */
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
	
	var _Brand = __webpack_require__(32);
	
	var _Brand2 = _interopRequireDefault(_Brand);
	
	var _List = __webpack_require__(36);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _Form = __webpack_require__(38);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _InlineStyle = __webpack_require__(12);
	
	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	var _Style = __webpack_require__(7);
	
	var _Style2 = _interopRequireDefault(_Style);
	
	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	var NavConfig = function () {
	    function NavConfig() {
	        _classCallCheck(this, NavConfig);
	
	        _ComponentManager2.default.createDefaultSessionProperties(this, "container");

	        Object.defineProperties(this, {
	            "dock": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("top"))
	            }
	        });

	        //initial default values
	        this.CSS.className.state = "navbar navbar-default";
	
	        this.style.state = {
	            display: "flex",
	            flexDirection: "row",
	            height: "7%",
	            minHeight: "50px",
	            zIndex: "1000",
	            alignItems: "center",
	            justifyContent: "space-between",
	            border: "1px solid transparent",
	            padding: "4px",
	            background: "#F8F8F8"
	        };

	        this.dock.addImmediateCallback(this, this.updateStyle);
	    }

	    _createClass(NavConfig, [{
	        key: "updateStyle",
	        value: function updateStyle() {
	            var styleObject = {};
	            styleObject["top"] = "";
	            styleObject["bottom"] = "";
	            styleObject["right"] = "";
	            styleObject["left"] = "";

	            if (this.dock.value === "top") {
	                styleObject["position"] = "static";
	                styleObject["top"] = "0";
	                styleObject["flexDirection"] = "row";
	                styleObject["width"] = "100%";
	                styleObject["height"] = "5%";
	            } else if (this.dock.value === "bottom") {
	                styleObject["position"] = "fixed";
	                styleObject["bottom"] = "0";
	                styleObject["flexDirection"] = "row";
	                styleObject["width"] = "100%";
	                styleObject["height"] = "5%";
	            } else if (this.dock.value === "right") {
	                styleObject["position"] = "fixed";
	                styleObject["right"] = "0";
	                styleObject["flexDirection"] = "column";
	                styleObject["width"] = "5%";
	                styleObject["height"] = "100%";
	            } else if (this.dock.value === "left") {
	                styleObject["position"] = "fixed";
	                styleObject["left"] = "0";
	                styleObject["flexDirection"] = "column";
	                styleObject["width"] = "5%";
	                styleObject["height"] = "100%";
	            }

	            this.style.state = styleObject;
	        }
	    }]);

	    return NavConfig;
	}();
	
	var BrandConfig = function BrandConfig() {
	    _classCallCheck(this, BrandConfig);
	
	    _ComponentManager2.default.createDefaultSessionProperties(this, "container");

	    Object.defineProperties(this, {
	        "title": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        }
	    });
	
	    this.CSS.className.state = "navbar-header";
	
	    this.style.state = {
	        display: "flex",
	        flexDirection: "inherit",
	        alignItems: "inherit",
	        padding: "15px 15px",
	        fontSize: "18px",
	        lineHeight: "20px"
	    };
	};
	
	var LogoConfig = function LogoConfig() {
	    _classCallCheck(this, LogoConfig);
	
	    _ComponentManager2.default.createDefaultSessionProperties(this);

	    Object.defineProperties(this, {
	        src: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        }
	    });
	
	    this.style.state = {
	        width: "50",
	        height: "50",
	        border: "2px solid #ebebeb",
	        borderRadius: "50%"
	    };
	};
	
	var TitleConfig = function TitleConfig() {
	    _classCallCheck(this, TitleConfig);
	
	    _ComponentManager2.default.createDefaultSessionProperties(this);

	    Object.defineProperties(this, {
	        title: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        }
	    });
	
	    this.CSS.className.state = "navbar-brand";
	
	    this.style.state = {
	        lineHeight: "20px",
	        fontSize: "18px"
	    };
	};
	
	var ListConfig = function () {
	    function ListConfig() {
	        _classCallCheck(this, ListConfig);
	
	        _ComponentManager2.default.createDefaultSessionProperties(this, "container");

	        Object.defineProperties(this, {
	            "align": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
	            },
	            "activePage": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            },
	            "space": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(8))
	            }
	        });
	
	        this.CSS.className.state = "nav navbar-nav";

	        this.style.state = {
	            display: "flex",
	            flexDirection: "inherit",
	            listStyleType: "none",
	            paddingLeft: "0",
	            alignItems: "inherit",
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
	
	    _ComponentManager2.default.createDefaultSessionProperties(this);

	    Object.defineProperties(this, {
	        "title": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        },
	        "iconName": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-home"))
	        },
	        "activeLinkStyle": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        }
	    });
	
	    this.style.state = {
	        paddingTop: "10px",
	        paddingBottom: "10px",
	        lineHeight: "20px",
	        color: "#777"
	    };
	};
	
	var FormConfig = function FormConfig() {
	    _classCallCheck(this, FormConfig);
	
	    _ComponentManager2.default.createDefaultSessionProperties(this, "container");

	    Object.defineProperties(this, {
	        "rightAlign": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	        },
	        "space": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
	        }
	    });
	
	    this.CSS.className.state = "navbar-form navbar-right";
	
	    this.style.state = {
	        display: "flex",
	        flexDirection: "inherit",
	        alignItems: "inherit",
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
	//# sourceMappingURL=data:application/json;base64,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QUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBbkYsQUFBdUUsQUFBaUI7QUFDeEYsTUFBQSxBQUFNLGNBQU4sQUFBb0IsZ0NBQWdDLGFBQUEsQUFBYSxNQUFLLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFuRixBQUF1RSxBQUFpQjtBQUN4RixNQUFBLEFBQU0sY0FBTixBQUFvQixnQ0FBZ0MsYUFBQSxBQUFhLE1BQUssQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQW5GLEFBQXVFLEFBQWlCIiwiZmlsZSI6IkNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcmFuZCBmcm9tIFwiLi9CcmFuZFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5jbGFzcyBOYXZDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiZG9ja1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwidG9wXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL2luaXRpYWwgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgdGhpcy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcIjtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjclXCIsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6XCI1MHB4XCIsXG4gICAgICAgICAgICB6SW5kZXg6IFwiMTAwMFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICBib3JkZXI6XCIxcHggc29saWQgdHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIHBhZGRpbmc6XCI0cHhcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI0Y4RjhGOFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kb2NrLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy51cGRhdGVTdHlsZSlcbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZSgpe1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB7fTtcbiAgICAgICAgc3R5bGVPYmplY3RbXCJ0b3BcIl0gPSBcIlwiO1xuICAgICAgICBzdHlsZU9iamVjdFtcImJvdHRvbVwiXSA9IFwiXCI7XG4gICAgICAgIHN0eWxlT2JqZWN0W1wicmlnaHRcIl0gPSBcIlwiO1xuICAgICAgICBzdHlsZU9iamVjdFtcImxlZnRcIl0gPSBcIlwiO1xuXG4gICAgICAgIGlmKHRoaXMuZG9jay52YWx1ZSA9PT0gXCJ0b3BcIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID0gXCJzdGF0aWNcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1widG9wXCJdID0gXCIwXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcInJvd1wiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjUlXCI7XG4gICAgICAgICB9ZWxzZSBpZih0aGlzLmRvY2sudmFsdWUgPT09IFwiYm90dG9tXCIpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJwb3NpdGlvblwiXSA9IFwiZml4ZWRcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYm90dG9tXCJdID0gXCIwXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcInJvd1wiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjUlXCI7XG4gICAgICAgICB9ZWxzZSBpZih0aGlzLmRvY2sudmFsdWUgPT09IFwicmlnaHRcIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJyaWdodFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgfWVsc2UgaWYodGhpcy5kb2NrLnZhbHVlID09PSBcImxlZnRcIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJsZWZ0XCJdID0gXCIwXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiNSVcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG4gICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHN0eWxlT2JqZWN0O1xuXG4gICAgfVxuXG5cbn1cblxuXG5jbGFzcyBCcmFuZENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBcIm5hdmJhci1oZWFkZXJcIjtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgcGFkZGluZzpcIjE1cHggMTVweFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuY2xhc3MgTG9nb0NvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIHNyYzp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOlwiNTBcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjUwXCIsXG4gICAgICAgICAgICBib3JkZXI6XCIycHggc29saWQgI2ViZWJlYlwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOlwiNTAlXCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmNsYXNzIFRpdGxlQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICB0aXRsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gXCJuYXZiYXItYnJhbmRcIjtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICBmb250U2l6ZTpcIjE4cHhcIlxuICAgICAgICB9O1xuXG4gICAgfVxufVxuXG5cblxuY2xhc3MgTGlzdENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJhbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImxlZnRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVQYWdlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3BhY2VcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoOCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IFwibmF2IG5hdmJhci1uYXZcIjtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBsaXN0U3R5bGVUeXBlOlwibm9uZVwiLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6XCIwXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbWFyZ2luOlwiNy41cHhcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlKTtcblxuICAgIH1cblxuXG4gICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgICAgU3R5bGUuYWxpZ25DaGlsZHJlbih0aGlzLnN0eWxlLHRoaXMuYWxpZ24uc3RhdGUpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBMaW5rQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk5hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1ob21lXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlTGlua1N0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgY29sb3I6XCIjNzc3XCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBGb3JtQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInJpZ2h0QWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3BhY2VcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIycHhcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IFwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCI7XG5cblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbWFyZ2luOlwiNHB4XCJcbiAgICAgICAgfTtcblxuXG4gICAgfVxufVxuXG5cbmNvbnN0IG5hdmJhckNvbmZpZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgbmF2YmFyQ29uZmlnXG5cbm5hdmJhckNvbmZpZy5OYXZiYXIgPSBOYXZDb25maWc7XG5uYXZiYXJDb25maWcuQnJhbmQgPSBCcmFuZENvbmZpZztcbm5hdmJhckNvbmZpZy5Mb2dvID0gTG9nb0NvbmZpZztcbm5hdmJhckNvbmZpZy5UaXRsZSA9IFRpdGxlQ29uZmlnO1xubmF2YmFyQ29uZmlnLkxpc3QgPSBMaXN0Q29uZmlnO1xubmF2YmFyQ29uZmlnLkxpbmsgPSBMaW5rQ29uZmlnO1xubmF2YmFyQ29uZmlnLkZvcm0gPSBGb3JtQ29uZmlnO1xuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLk5hdmJhcicsIG5hdmJhckNvbmZpZy5OYXZiYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5CcmFuZCcsIG5hdmJhckNvbmZpZy5CcmFuZCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxvZ28nLCBuYXZiYXJDb25maWcuTG9nbyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLlRpdGxlJywgbmF2YmFyQ29uZmlnLlRpdGxlLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGlzdCcsIG5hdmJhckNvbmZpZy5MaXN0LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGluaycsIG5hdmJhckNvbmZpZy5MaW5rLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuRm9ybScsIG5hdmJhckNvbmZpZy5Gb3JtLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG4iXX0=

/***/ },
/* 40 */
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
	
	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};

	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ComponentManager = __webpack_require__(6);
	
	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);
	
	var _Config = __webpack_require__(41);

	var _Config2 = _interopRequireDefault(_Config);

	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

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

	var Accordion = function (_AbstractComponent) {
	    _inherits(Accordion, _AbstractComponent);

	    function Accordion(props) {
	        _classCallCheck(this, Accordion);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).call(this, props));

	        _this.settings.setIconModeLayout(_this.props.iconMode);
	        return _this;
	    }

	    _createClass(Accordion, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            _get(Object.getPrototypeOf(Accordion.prototype), "componentWillReceiveProps", this).call(this, nextProps);
	            this.settings.setIconModeLayout(nextProps.iconMode);
	        }
	    }, {
	        key: "onClickCallback",
	        value: function onClickCallback(childConfig, index) {
	            this.settings.activeChild.state = index;
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren() {
	            var activeChildStyle = this.settings.activeChildStyle.state;
	            var childStyle = this.settings.childStyle.state;

	            this.settings.props.addChildEvent("onClick", this.onClickCallback);
	            this.settings.props.addChildProps("open", false, true);
	            this.settings.props.addChildProps("style", childStyle, activeChildStyle);
	            this.settings.props.addChildProps("iconMode", this.settings.iconMode.state);
	            this.settings.props.keyProp = "index";
	            this.settings.props.addOddChildren([this.settings.activeChild.state]);

	            return _ComponentManager2.default.renderChildren(this);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("Accordion - render");

	            var styleObject = this.settings.style.state;
	            var childrenUI = this.renderChildren();

	            var ui = _react2.default.createElement("div", { style: styleObject }, childrenUI);
	            if (this.settings.useCSS.state) {
	                var cssName = this.settings.CSS.getCSSFor();
	                ui = _react2.default.createElement("div", { className: cssName, style: styleObject }, childrenUI);
	            }

	            return ui;
	        }
	    }]);

	    return Accordion;
	}(_AbstractComponent3.default);

	Weave.registerClass("weavereact.Accordion", Accordion, [weavejs.api.core.ILinkableObject]);

	_ComponentManager2.default.registerToolConfig(Accordion, _Config2.default);
	_ComponentManager2.default.registerToolImplementation("weavereact.AccordionConfig", Accordion);

	exports.default = Accordion;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTTt5QkFFRjs7YUFGRSxBQUVGLFVBQUEsQUFBWTs4QkFGVixBQUVnQjs7MkVBRmhCLHNCQUVnQixBQUNSLEFBQ047O2NBQUEsQUFBSyxTQUFMLEFBQWMsa0JBQWtCLE1BQUEsQUFBSyxNQUZ2QixBQUVkLEFBQWdDLEFBQVc7ZUFGL0MsTUFBa0I7OztpQkFGaEI7O2tEQU93QixXQUFVLEFBQy9CO3VDQVJILG9FQU9rQyxBQUMvQixBQUFnQyxBQUNqQztpQkFBQSxBQUFLLFNBQUwsQUFBYyxrQkFBa0IsVUFGQSxBQUVoQyxBQUFnQyxBQUFVOzs7O3dDQUs5QixhQUFZO2lCQUN4QixBQUFLLFNBQUwsQUFBYyxZQUFkLEFBQTBCLFFBREksQUFDOUIsQUFBa0MsTUFESixBQUM5Qjs7Ozt5Q0FHWSxBQUNaO2dCQUFJLG1CQUFtQixLQUFBLEFBQUssU0FBTCxBQUFjLGlCQUR6QixBQUNXLEFBQStCLEFBQ3REO2dCQUFJLGFBQWEsS0FBQSxBQUFLLFNBQUwsQUFBYyxXQUZuQixBQUVLLEFBQXlCLEFBRTFDOztpQkFBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLGNBQXBCLEFBQWtDLFdBQVUsS0FKaEMsQUFJWixBQUE0QyxBQUFLLEFBQ2pEO2lCQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsY0FBcEIsQUFBa0MsUUFBbEMsQUFBeUMsT0FMN0IsQUFLWixBQUErQyxBQUMvQztpQkFBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLGNBQXBCLEFBQWtDLFNBQWxDLEFBQTBDLFlBTjlCLEFBTVosQUFBcUQsQUFDckQ7aUJBQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQixjQUFwQixBQUFrQyxZQUFXLEtBQUEsQUFBSyxTQUFMLEFBQWMsU0FQL0MsQUFPWixBQUE2QyxBQUF1QixBQUNwRTtpQkFBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLFVBUlIsQUFRWixBQUE4QixBQUM5QjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLGVBQWUsQ0FBQyxLQUFBLEFBQUssU0FBTCxBQUFjLFlBVHRDLEFBU1osQUFBb0MsQUFBMEIsQUFFOUQ7O21CQUFRLDJCQUFBLEFBQWlCLGVBWGIsQUFXWixBQUFRLEFBQWdDOzs7OztnQkFLckMsMkJBQUEsQUFBaUIsT0FBTSxRQUFBLEFBQVEsSUFBbEMsQUFBMEIsQUFBWSxBQUV0Qzs7Z0JBQUksY0FBYyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BSDNCLEFBR2EsQUFBb0IsQUFDdEM7Z0JBQUksYUFBYSxLQUpaLEFBSUQsQUFBYSxBQUFLLEFBRXRCOztnQkFBSSxLQUFLLHVDQUFLLE9BQUwsQUFBSyxBQUFPLGVBTmhCLEFBTUQsQUFBSyxBQUEwQixBQUNuQztnQkFBRyxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsT0FBTSxBQUMxQjtvQkFBSSxVQUFVLEtBQUEsQUFBSyxTQUFMLEFBQWMsSUFERixBQUN0QixBQUFVLEFBQWtCLEFBQ2hDO3FCQUFLLHVDQUFLLFdBQUEsQUFBVyxTQUFTLE9BQXpCLEFBQXlCLEFBQU8sZUFGekMsQUFBOEIsQUFFMUIsQUFBSyxBQUE4QyxBQUd2RDs7O21CQVpLLEFBWUwsQUFBUSxHQVpILEFBQ0w7Ozs7V0FsQ0Y7OztBQWlETixNQUFBLEFBQU0sY0FBTixBQUFvQix3QkFBcEIsQUFBNEMsV0FBVSxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBbkUsQUFBdUQsQUFBaUI7O0FBRXhFLDJCQUFBLEFBQWlCLG1CQUFqQixBQUFvQztBQUNwQywyQkFBQSxBQUFpQiwyQkFBakIsQUFBNEMsOEJBQTVDLEFBQXlFOztrQkFFMUQiLCJmaWxlIjoiQWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWNjb3JkaW9uQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuXG5cbmNsYXNzIEFjY29yZGlvbiBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNldEljb25Nb2RlTGF5b3V0KHRoaXMucHJvcHMuaWNvbk1vZGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZXRJY29uTW9kZUxheW91dChuZXh0UHJvcHMuaWNvbk1vZGUpO1xuICAgIH1cblxuXG5cbiAgICBvbkNsaWNrQ2FsbGJhY2soY2hpbGRDb25maWcsaW5kZXgpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZUNoaWxkLnN0YXRlID0gaW5kZXg7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdmFyIGFjdGl2ZUNoaWxkU3R5bGUgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZUNoaWxkU3R5bGUuc3RhdGU7XG4gICAgICAgIHZhciBjaGlsZFN0eWxlID0gdGhpcy5zZXR0aW5ncy5jaGlsZFN0eWxlLnN0YXRlO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRFdmVudChcIm9uQ2xpY2tcIix0aGlzLm9uQ2xpY2tDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9wZW5cIixmYWxzZSx0cnVlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwic3R5bGVcIixjaGlsZFN0eWxlLGFjdGl2ZUNoaWxkU3R5bGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJpY29uTW9kZVwiLHRoaXMuc2V0dGluZ3MuaWNvbk1vZGUuc3RhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmtleVByb3AgPSBcImluZGV4XCI7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkT2RkQ2hpbGRyZW4oW3RoaXMuc2V0dGluZ3MuYWN0aXZlQ2hpbGQuc3RhdGVdKTtcblxuICAgICAgICByZXR1cm4gIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJBY2NvcmRpb24gLSByZW5kZXJcIik7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgdmFyIHVpID0gPGRpdiBzdHlsZT17c3R5bGVPYmplY3R9PntjaGlsZHJlblVJfTwvZGl2PjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1Muc3RhdGUpe1xuICAgICAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgICAgIHVpID0gPGRpdiBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2NoaWxkcmVuVUl9PC9kaXY+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh1aSk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5BY2NvcmRpb25cIiwgQWNjb3JkaW9uLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhBY2NvcmRpb24sQWNjb3JkaW9uQ29uZmlnKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LkFjY29yZGlvbkNvbmZpZ1wiLEFjY29yZGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiJdfQ==

/***/ },
/* 41 */
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

	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	var _InlineStyle = __webpack_require__(12);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var AccordionConfig = function () {
	    function AccordionConfig() {
	        _classCallCheck(this, AccordionConfig);

	        _ComponentManager2.default.createDefaultSessionProperties(this, "container");

	        Object.defineProperties(this, {

	            "activeChild": { // can be index || string
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "childStyle": {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            "activeChildStyle": {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            "mode": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("parentHeight"))
	            }
	        });

	        this.mode.addImmediateCallback(this, this.changeActiveChildStyle);

	        this.activeChild.state = 0;

	        this.style.state = {
	            display: "flex",
	            flexDirection: "column",
	            justifyContent: "flex-start",
	            alignItems: "inherit",
	            height: "100%",
	            width: "100%"
	        };

	        this.childStyle.state = {
	            flexBasis: "0%"
	        };

	        this.activeChildStyle.state = {
	            flexBasis: "inherit"
	        };
	    }

	    _createClass(AccordionConfig, [{
	        key: "setIconModeLayout",
	        value: function setIconModeLayout(isIcon) {
	            var styleObject = {};
	            if (isIcon) styleObject["alignItems"] = "center";else styleObject["alignItems"] = "stretch";
	            this.style.state = styleObject;
	        }
	    }, {
	        key: "changeActiveChildStyle",
	        value: function changeActiveChildStyle() {
	            if (this.mode.state == "parentHeight") {
	                this.activeChildStyle.state = {
	                    flexBasis: "100%"
	                };
	            } else if (this.mode.state == "childHeight") {
	                this.activeChildStyle.state = {
	                    flexBasis: "inherit"
	                };
	            }
	        }
	    }]);

	    return AccordionConfig;
	}();

	exports.default = AccordionConfig;

	//This Function makes this class as SessionClass

	Weave.registerClass('weavereact.AccordionConfig', AccordionConfig, [weavejs.api.core.ILinkableObject]);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUdNLEFBQ0Y7OEJBREUsQUFDWSxBQUVWOzttQ0FBQSxBQUFpQiwrQkFBakIsQUFBZ0QsTUFGdEMsQUFFVixBQUFxRCxBQUVwRDs7ZUFBQSxBQUFPLGlCQUFQLEFBQXdCLE1BQU0sQUFFM0I7OzJCQUFlLEFBQ1g7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7MEJBQWEsQUFDVDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLGtCQURyQyxBQUNJLEFBQU8sQUFFWDs7Z0NBQW1CLEFBQ2Y7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxrQkFEckMsQUFDSSxBQUFPLEFBRVg7O29CQUFPLEFBQ0g7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUFoQmhELEFBSVQsQUFXRyxBQUNJLEFBQU8sQUFBMEIsQUFBZ0MsQUFJekU7Ozs7YUFBQSxBQUFLLEtBQUwsQUFBVSxxQkFBVixBQUErQixNQUFLLEtBcEIxQixBQW9CVixBQUFvQyxBQUFLLEFBRXpDOzthQUFBLEFBQUssWUFBTCxBQUFpQixRQXRCUCxBQXNCVixBQUF5QixBQUd6Qjs7YUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEFBQ2Y7cUJBQUEsQUFBUSxBQUNSOzJCQUFBLEFBQWMsQUFDZDs0QkFBQSxBQUFlLEFBQ2Y7d0JBQUEsQUFBVyxBQUNYO29CQUFBLEFBQU8sQUFDUDttQkEvQk0sQUF5QlYsQUFNSSxBQUFNLEFBSVY7VUFuQ1U7O2FBbUNWLEFBQUssV0FBTCxBQUFnQixRQUFRLEFBQ3BCO3VCQXBDTSxBQW1DVixBQUNJLEFBQVUsQUFHZDs7O2FBQUEsQUFBSyxpQkFBTCxBQUFzQixRQUFRLEFBQzFCO3VCQXhDUixBQUFjLEFBdUNWLEFBQ0ksQUFBVTs7OztpQkF6Q2hCOzswQ0E2Q2dCO2dCQUNWLGNBRGlCLEFBQ2pCLEFBQWMsQUFDbEIsR0FGcUIsQUFDckI7Z0JBQ0EsQUFBRyxRQUFPLFlBQUEsQUFBWSxnQkFBdEIsQUFBVSxBQUE0QixjQUNqQyxZQUFBLEFBQVksZ0JBRGpCLEFBQ0ssQUFBNEIsQUFDakM7aUJBQUEsQUFBSyxNQUFMLEFBQVcsUUFKVSxBQUlyQixBQUFtQjs7OztpREFJQyxBQUNwQjtnQkFBRyxLQUFBLEFBQUssS0FBTCxBQUFVLFNBQVYsQUFBbUI7cUJBQ2xCLEFBQUssaUJBQUwsQUFBc0IsUUFBUSxBQUMxQjsrQkFGUixBQUFxQyxBQUNqQyxBQUNJLEFBQVU7a0JBRm1CLEFBQ2pDO3VCQUdLLEtBQUEsQUFBSyxLQUFMLEFBQVUsU0FBVixBQUFtQjtxQkFDeEIsQUFBSyxpQkFBTCxBQUFzQixRQUFRLEFBQzFCOytCQUZGLEFBQW9DLEFBQ3RDLEFBQ0ksQUFBVTtrQkFGd0IsQUFDdEM7YUFERTs7UUF6RFY7O1dBREU7R0FBQTs7a0JBbUVTOzs7O0FBSWYsTUFBQSxBQUFNLGNBQU4sQUFBb0IsOEJBQXBCLEFBQWtELGlCQUFnQixDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBL0UsQUFBbUUsQUFBaUIiLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuXG5jbGFzcyBBY2NvcmRpb25Db25maWcgIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgIFwiYWN0aXZlQ2hpbGRcIjogey8vIGNhbiBiZSBpbmRleCB8fCBzdHJpbmdcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVDaGlsZFN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwicGFyZW50SGVpZ2h0XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmNoYW5nZUFjdGl2ZUNoaWxkU3R5bGUpXG5cbiAgICAgICAgdGhpcy5hY3RpdmVDaGlsZC5zdGF0ZSA9IDA7XG5cblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcbiAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiXG4gICAgICAgIH07XG5cblxuICAgICAgICB0aGlzLmNoaWxkU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4QmFzaXM6XCIwJVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hY3RpdmVDaGlsZFN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleEJhc2lzOlwiaW5oZXJpdFwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0SWNvbk1vZGVMYXlvdXQoaXNJY29uKXtcbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0ge307XG4gICAgICAgIGlmKGlzSWNvbilzdHlsZU9iamVjdFtcImFsaWduSXRlbXNcIl0gPSBcImNlbnRlclwiO1xuICAgICAgICBlbHNlIHN0eWxlT2JqZWN0W1wiYWxpZ25JdGVtc1wiXSA9IFwic3RyZXRjaFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0gc3R5bGVPYmplY3Q7XG5cbiAgICB9XG5cbiAgICBjaGFuZ2VBY3RpdmVDaGlsZFN0eWxlKCl7XG4gICAgICAgIGlmKHRoaXMubW9kZS5zdGF0ZSA9PSBcInBhcmVudEhlaWdodFwiKXtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2hpbGRTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6XCIxMDAlXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1lbHNlIGlmKHRoaXMubW9kZS5zdGF0ZSA9PSBcImNoaWxkSGVpZ2h0XCIpe1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDaGlsZFN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGZsZXhCYXNpczpcImluaGVyaXRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25Db25maWdcblxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuQWNjb3JkaW9uQ29uZmlnJywgQWNjb3JkaW9uQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG4iXX0=

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

	var _Overlay = __webpack_require__(43);

	var _Overlay2 = _interopRequireDefault(_Overlay);

	var _SideBar = __webpack_require__(44);

	var _SideBar2 = _interopRequireDefault(_SideBar);

	var _Config = __webpack_require__(45);

	var _Config2 = _interopRequireDefault(_Config);

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
	    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var SideBarContainer = function (_AbstractComponent) {
	    _inherits(SideBarContainer, _AbstractComponent);

	    function SideBarContainer(props) {
	        _classCallCheck(this, SideBarContainer);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SideBarContainer).call(this, props, "container"));
	    }

	    _createClass(SideBarContainer, [{
	        key: 'renderChildren',
	        value: function renderChildren() {
	            return _ComponentManager2.default.renderChildren(this);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("SidebarContainer - render");

	            var childrenUI = this.renderChildren();
	            var leftSideBarUI = this.settings.leftSideBar.visible.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.leftSideBar }) : "";
	            var rightSideBarUI = this.settings.rightSideBar.visible.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.rightSideBar }) : "";
	            var topSideBarUI = this.settings.topSideBar.visible.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.topSideBar }) : "";
	            var bottomSideBarUI = this.settings.bottomSideBar.visible.state ? _react2.default.createElement(_SideBar2.default, { settings: this.settings.bottomSideBar }) : "";

	            var styleObject = this.settings.style.state;
	            return _react2.default.createElement('div', { style: styleObject }, leftSideBarUI, _react2.default.createElement('div', { style: { width: "100%", height: "100%" } }, topSideBarUI, childrenUI, bottomSideBarUI), rightSideBarUI);
	        }
	    }]);

	    return SideBarContainer;
	}(_AbstractComponent3.default);

	SideBarContainer.Overlay = _Overlay2.default;
	SideBarContainer.SideBar = _SideBar2.default;

	_ComponentManager2.default.registerToolConfig(SideBarContainer, _Config2.default.Container);
	_ComponentManager2.default.registerToolConfig(SideBarContainer.Overlay, _Config2.default.Overlay);
	_ComponentManager2.default.registerToolConfig(SideBarContainer.SideBar, _Config2.default.SideBar);

	_ComponentManager2.default.registerToolImplementation("weavereact.sideBarContainerConfig.Container", SideBarContainer);
	_ComponentManager2.default.registerToolImplementation("weavereact.sideBarContainerConfig.Overlay", SideBarContainer.Overlay);
	_ComponentManager2.default.registerToolImplementation("weavereact.sideBarContainerConfig.SideBar", SideBarContainer.SideBar);

	Weave.registerClass("weavereact.SideBarContainer", SideBarContainer, [weavejs.api.core.ILinkableObject]);

	module.exports = SideBarContainer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXJDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUU07Z0NBQ0Y7O2FBREUsQUFDRixpQkFBWSxBQUFaLE9BQW1COzhCQURqQixBQUNpQjs7c0VBRGpCLDZCQUVRLE9BQU0sQUFERyxBQUFuQjs7O2lCQURFOzt5Q0FRYyxBQUNaO21CQUFRLDJCQUFpQixBQUFqQixlQUFnQyxBQUFoQyxBQUFSLEFBRFk7Ozs7aUNBSVAsQUFDSjtnQkFBRywyQkFBaUIsQUFBakIsT0FBdUIsUUFBUSxBQUFSLElBQVksQUFBWixBQUExQixBQUVEOztnQkFBSSxhQUFhLEtBQUssQUFBTCxBQUFiLEFBSEMsQUFJTDtnQkFBSSxnQkFBZ0IsS0FBSyxBQUFMLFNBQWMsQUFBZCxZQUEwQixBQUExQixRQUFrQyxBQUFsQyxRQUF3QyxtREFBUyxVQUFVLEtBQUssQUFBTCxTQUFjLEFBQWQsQUFBbkIsQUFBeEMsaUJBQXdGLEFBQXhGLEFBSmYsQUFLTDtnQkFBSSxpQkFBaUIsS0FBSyxBQUFMLFNBQWMsQUFBZCxhQUEyQixBQUEzQixRQUFtQyxBQUFuQyxRQUF5QyxtREFBUyxVQUFVLEtBQUssQUFBTCxTQUFjLEFBQWQsQUFBbkIsQUFBekMsa0JBQTBGLEFBQTFGLEFBTGhCLEFBTUw7Z0JBQUksZUFBZSxLQUFLLEFBQUwsU0FBYyxBQUFkLFdBQXlCLEFBQXpCLFFBQWlDLEFBQWpDLFFBQXVDLG1EQUFTLFVBQVUsS0FBSyxBQUFMLFNBQWMsQUFBZCxBQUFuQixBQUF2QyxnQkFBc0YsQUFBdEYsQUFOZCxBQU9MO2dCQUFJLGtCQUFrQixLQUFLLEFBQUwsU0FBYyxBQUFkLGNBQTRCLEFBQTVCLFFBQW9DLEFBQXBDLFFBQTBDLG1EQUFTLFVBQVUsS0FBSyxBQUFMLFNBQWMsQUFBZCxBQUFuQixBQUExQyxtQkFBNEYsQUFBNUYsQUFQakIsQUFTTDs7Z0JBQUksY0FBYyxLQUFLLEFBQUwsU0FBYyxBQUFkLE1BQW9CLEFBQXBCLEFBVGIsQUFVTDttQkFBUyx1Q0FBSyxPQUFTLEFBQVQsQUFBTCxlQUNJLEFBREosZUFFRyx1Q0FBSyxPQUFPLEVBQUMsT0FBTSxBQUFOLFFBQWEsUUFBTyxBQUFQLEFBQXJCLEFBQUwsWUFDSyxBQURMLGNBRUssQUFGTCxZQUdLLEFBSEwsQUFGSCxrQkFPSSxBQVBKLEFBQVQsQUFWSzs7OztXQVpQOzs7QUFtQ04saUJBQWlCLEFBQWpCO0FBQ0EsaUJBQWlCLEFBQWpCOztBQUdBLDJCQUFpQixBQUFqQixtQkFBb0MsQUFBcEMsa0JBQXFELGlCQUF1QixBQUF2QixBQUFyRDtBQUNBLDJCQUFpQixBQUFqQixtQkFBb0MsaUJBQWlCLEFBQWpCLFNBQXlCLGlCQUF1QixBQUF2QixBQUE3RDtBQUNBLDJCQUFpQixBQUFqQixtQkFBb0MsaUJBQWlCLEFBQWpCLFNBQXlCLGlCQUF1QixBQUF2QixBQUE3RDs7QUFFQSwyQkFBaUIsQUFBakIsMkJBQTRDLEFBQTVDLCtDQUEwRixBQUExRjtBQUNBLDJCQUFpQixBQUFqQiwyQkFBNEMsQUFBNUMsNkNBQXdGLGlCQUFpQixBQUFqQixBQUF4RjtBQUNBLDJCQUFpQixBQUFqQiwyQkFBNEMsQUFBNUMsNkNBQXdGLGlCQUFpQixBQUFqQixBQUF4Rjs7QUFFQSxNQUFNLEFBQU4sY0FBb0IsQUFBcEIsK0JBQW1ELEFBQW5ELGtCQUFvRSxDQUFDLFFBQVEsQUFBUixJQUFZLEFBQVosS0FBaUIsQUFBakIsQUFBckU7O0FBRUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6IlNpZGVCYXJDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi4vLi4vQ29tcG9uZW50TWFuYWdlcic7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSAnLi4vLi4vQWJzdHJhY3RDb21wb25lbnQnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5JztcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL1NpZGVCYXJcIjtcbmltcG9ydCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5cbmNsYXNzIFNpZGVCYXJDb250YWluZXIgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsXCJjb250YWluZXJcIilcbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICByZXR1cm4gIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIlNpZGViYXJDb250YWluZXIgLSByZW5kZXJcIik7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgIHZhciBsZWZ0U2lkZUJhclVJID0gdGhpcy5zZXR0aW5ncy5sZWZ0U2lkZUJhci52aXNpYmxlLnN0YXRlPzxTaWRlQmFyIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLmxlZnRTaWRlQmFyfS8+OlwiXCI7XG4gICAgICAgIHZhciByaWdodFNpZGVCYXJVSSA9IHRoaXMuc2V0dGluZ3MucmlnaHRTaWRlQmFyLnZpc2libGUuc3RhdGU/PFNpZGVCYXIgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MucmlnaHRTaWRlQmFyfS8+OlwiXCI7XG4gICAgICAgIHZhciB0b3BTaWRlQmFyVUkgPSB0aGlzLnNldHRpbmdzLnRvcFNpZGVCYXIudmlzaWJsZS5zdGF0ZT88U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy50b3BTaWRlQmFyfS8+OlwiXCI7XG4gICAgICAgIHZhciBib3R0b21TaWRlQmFyVUkgPSB0aGlzLnNldHRpbmdzLmJvdHRvbVNpZGVCYXIudmlzaWJsZS5zdGF0ZT88U2lkZUJhciBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5ib3R0b21TaWRlQmFyfS8+OlwiXCI7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgcmV0dXJuICggPGRpdiBzdHlsZSA9IHtzdHlsZU9iamVjdH0+XG4gICAgICAgICAgICAgICAgICAgIHtsZWZ0U2lkZUJhclVJfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9wU2lkZUJhclVJfVxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym90dG9tU2lkZUJhclVJfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3JpZ2h0U2lkZUJhclVJfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxufVxuXG5TaWRlQmFyQ29udGFpbmVyLk92ZXJsYXkgPSBPdmVybGF5O1xuU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyID0gU2lkZUJhcjtcblxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhTaWRlQmFyQ29udGFpbmVyLHNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sQ29uZmlnKFNpZGVCYXJDb250YWluZXIuT3ZlcmxheSxzaWRlQmFyQ29udGFpbmVyQ29uZmlnLk92ZXJsYXkpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xDb25maWcoU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyLHNpZGVCYXJDb250YWluZXJDb25maWcuU2lkZUJhcik7XG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyXCIsU2lkZUJhckNvbnRhaW5lcik7XG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLk92ZXJsYXlcIixTaWRlQmFyQ29udGFpbmVyLk92ZXJsYXkpO1xuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyXCIsU2lkZUJhckNvbnRhaW5lci5TaWRlQmFyKTtcblxuV2VhdmUucmVnaXN0ZXJDbGFzcyhcIndlYXZlcmVhY3QuU2lkZUJhckNvbnRhaW5lclwiLCBTaWRlQmFyQ29udGFpbmVyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVCYXJDb250YWluZXI7XG4iXX0=

/***/ },
/* 43 */
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

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

	var Overlay = function (_AbstractComponent) {
	    _inherits(Overlay, _AbstractComponent);

	    function Overlay(props) {
	        _classCallCheck(this, Overlay);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).call(this, props));
	    }

	    _createClass(Overlay, [{
	        key: "render",
	        value: function render() {
	            var styleObject = this.settings.style.state;
	            return _react2.default.createElement("div", { style: styleObject });
	        }
	    }]);

	    return Overlay;
	}(_AbstractComponent3.default);

	module.exports = Overlay;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk92ZXJsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07dUJBQ0Y7O2FBREUsQUFDRixRQUFZLEFBQVosT0FBbUI7OEJBRGpCLEFBQ2lCOztzRUFEakIsb0JBRVEsQUFEUyxBQUFuQjs7O2lCQURFOztpQ0FLTyxBQUNMO2dCQUFJLGNBQWUsS0FBSyxBQUFMLFNBQWMsQUFBZCxNQUFvQixBQUFwQixBQURkLEFBRUw7bUJBQVEsdUNBQU0sT0FBTyxBQUFQLEFBQU4sQUFBUixBQUZLOzs7O1dBTFA7OztBQVdOLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJPdmVybGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5cbmNsYXNzIE92ZXJsYXkgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSAgdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgcmV0dXJuICA8ZGl2ICBzdHlsZT17c3R5bGVPYmplY3R9IC8+O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPdmVybGF5O1xuIl19

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

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

	var SideBar = function (_AbstractComponent) {
	    _inherits(SideBar, _AbstractComponent);

	    function SideBar(props) {
	        _classCallCheck(this, SideBar);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SideBar).call(this, props, "container"));
	    }

	    _createClass(SideBar, [{
	        key: 'renderChildren',
	        value: function renderChildren() {
	            var iconMode = false;
	            if (!this.settings.open.state && this.settings.static.state) iconMode = true;
	            this.settings.props.addChildProps("iconMode", iconMode);
	            return _ComponentManager2.default.renderChildren(this);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("Sidebar - render");
	            if (!this.settings.visible.state) return _react2.default.createElement('div', null);

	            var styleObject = this.settings.style.state;
	            var childrenUI = this.renderChildren();
	            return _react2.default.createElement('div', { style: styleObject }, childrenUI);
	        }
	    }]);

	    return SideBar;
	}(_AbstractComponent3.default);

	Weave.registerClass("weavereact.sideBarContainer.SideBar", SideBar, [weavejs.api.core.ILinkableObject]);

	exports.default = SideBar;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNO3VCQUNGOzthQURFLEFBQ0YsUUFBQSxBQUFZLE9BQU87OEJBRGpCLEFBQ2lCOztzRUFEakIsb0JBRVEsT0FEVixBQUFtQixBQUNIOzs7aUJBRmQ7OztnQkFPTSxXQURRLEFBQ1IsQUFBVyxBQUNmLE1BRlksQUFDWjtnQkFDRyxDQUFDLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQixTQUFTLEtBQUEsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQixPQUNoRCxXQURMLEFBQ0ssQUFBVyxBQUNoQjtpQkFBQSxBQUFLLFNBQUwsQUFBYyxNQUFkLEFBQW9CLGNBQXBCLEFBQWtDLFlBSnRCLEFBSVosQUFBNkMsQUFDN0M7bUJBQVEsMkJBQUEsQUFBaUIsZUFMYixBQUtaLEFBQVEsQUFBZ0M7Ozs7aUNBSW5DLEFBQ0w7Z0JBQUcsMkJBQUEsQUFBaUIsT0FBTSxRQUFBLEFBQVEsSUFBbEMsQUFBMEIsQUFBWSxBQUN0QztnQkFBRyxDQUFDLEtBQUEsQUFBSyxTQUFMLEFBQWMsUUFBZCxBQUFzQixPQUN0QixPQUFPLHFDQURYLEFBQ0ksQUFFSjs7Z0JBQUksY0FBZSxLQUFBLEFBQUssU0FBTCxBQUFjLE1BTDVCLEFBS2MsQUFBb0IsQUFDdkM7Z0JBQUksYUFBYSxLQU5aLEFBTUQsQUFBYSxBQUFLLEFBQ3RCO21CQUFPLHVDQUFLLE9BQUwsQUFBSyxBQUFPLGVBUGQsQUFPTCxBQUFPLEFBQ0s7Ozs7V0F2QmQ7OztBQTZCTixNQUFBLEFBQU0sY0FBTixBQUFvQix1Q0FBcEIsQUFBMkQsU0FBUSxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBaEYsQUFBb0UsQUFBaUI7O2tCQUV0RSIsImZpbGUiOiJTaWRlQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tICcuLi8uLi9BYnN0cmFjdENvbXBvbmVudCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5jbGFzcyBTaWRlQmFyIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzLFwiY29udGFpbmVyXCIpXG4gICAgfVxuXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICB2YXIgaWNvbk1vZGUgPSBmYWxzZTtcbiAgICAgICAgaWYoIXRoaXMuc2V0dGluZ3Mub3Blbi5zdGF0ZSAmJiB0aGlzLnNldHRpbmdzLnN0YXRpYy5zdGF0ZSlcbiAgICAgICAgICAgICBpY29uTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImljb25Nb2RlXCIsaWNvbk1vZGUpO1xuICAgICAgICByZXR1cm4gIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJTaWRlYmFyIC0gcmVuZGVyXCIpO1xuICAgICAgICBpZighdGhpcy5zZXR0aW5ncy52aXNpYmxlLnN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcblxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSAgdGhpcy5zZXR0aW5ncy5zdHlsZS5zdGF0ZTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZU9iamVjdH0+XG4gICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICA8L2Rpdj47XG5cbiAgICB9XG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXIuU2lkZUJhclwiLCBTaWRlQmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xuXG4iXX0=

/***/ },
/* 45 */
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

	var _InlineStyle = __webpack_require__(12);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	var _CSS = __webpack_require__(13);

	var _CSS2 = _interopRequireDefault(_CSS);

	var _Props = __webpack_require__(14);

	var _Props2 = _interopRequireDefault(_Props);

	var _Config = __webpack_require__(46);

	var _Config2 = _interopRequireDefault(_Config);

	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var ContainerConfig = function ContainerConfig() {
	    _classCallCheck(this, ContainerConfig);

	    _ComponentManager2.default.createDefaultSessionProperties(this, "container");
	    Object.defineProperties(this, {

	        "mode": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        },
	        "overlay": {
	            value: Weave.linkableChild(this, new OverlayConfig())
	        },
	        "leftSideBar": {
	            value: Weave.linkableChild(this, new SideBarConfig())
	        },
	        "rightSideBar": {
	            value: Weave.linkableChild(this, new SideBarConfig())
	        },
	        "topSideBar": {
	            value: Weave.linkableChild(this, new SideBarConfig())
	        },
	        "bottomSideBar": {
	            value: Weave.linkableChild(this, new SideBarConfig())
	        }

	    });

	    this.leftSideBar.direction = "left";
	    this.rightSideBar.direction = "right";
	    this.bottomSideBar.direction = "bottom";
	    this.topSideBar.direction = "top";

	    this.style.state = {
	        display: "flex",
	        flexDirection: "row",
	        width: "100%",
	        height: "100%"
	    };
	};

	var OverlayConfig = function () {
	    function OverlayConfig() {
	        _classCallCheck(this, OverlayConfig);

	        _ComponentManager2.default.createDefaultSessionProperties(this);

	        Object.defineProperties(this, {
	            "open": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            }
	        });
	        this.style.state = {
	            position: "fixed"
	        };

	        this.open.addImmediateCallback(this, this.updateStyle);
	    }

	    _createClass(OverlayConfig, [{
	        key: "updateStyle",
	        value: function updateStyle() {
	            if (this.open.state) {
	                this.style.state = {
	                    zIndex: "1",
	                    width: "100%",
	                    height: "100%",
	                    transform: "translate3d(0, 0, 0)",
	                    background: "rgba(0, 0, 0, 0.1)",
	                    opacity: 1
	                };
	            } else {
	                this.style.state = {
	                    zIndex: "1",
	                    width: "100%",
	                    height: "100%",
	                    transform: "translate3d(-100%, 0, 0)",
	                    background: "rgba(0, 0, 0, 0.1)",
	                    opacity: 0
	                };
	            }
	        }
	    }]);

	    return OverlayConfig;
	}();

	var SideBarConfig = function () {
	    function SideBarConfig() {
	        _classCallCheck(this, SideBarConfig);

	        _ComponentManager2.default.createDefaultSessionProperties(this, "container");

	        Object.defineProperties(this, {

	            "size": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("16%"))
	            },
	            static: {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	            },
	            iconsOnly: {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            open: {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            }
	        });

	        this.direction = "";

	        this.open.addImmediateCallback(this, this.updateStyle, true);
	        this.static.addImmediateCallback(this, this.updateSideBarController, true);
	    }

	    _createClass(SideBarConfig, [{
	        key: "updateStyle",
	        value: function updateStyle() {

	            var styleObject = {
	                display: "flex",
	                justifyContent: "flex-start"
	            };

	            if (this.open.state) {
	                styleObject["flexBasis"] = this.size.value;
	                styleObject["alignItems"] = "flex-start";
	            } else {
	                // for static state the switch button with will be taken
	                //styleObject["flexBasis"] = this.static.state?"3%":"0%";
	                styleObject["flexBasis"] = "0%";
	                styleObject["alignItems"] = "center";
	            }

	            if (this.direction === "right" || this.direction === "left") {
	                styleObject["flexDirection"] = "column";
	                this.style.state = styleObject;
	            } else if (this.direction === "top" || this.direction === "bottom") {
	                styleObject["flexDirection"] = "row";
	                this.style.state = styleObject;
	            }
	            this.style.state = styleObject;
	        }
	    }, {
	        key: "toggleSideBarState",
	        value: function toggleSideBarState() {
	            var buttonConfig = this.children.getObject("switchButton");
	            this.open.state = !buttonConfig.clicked.state;
	        }
	    }, {
	        key: "updateSideBarController",
	        value: function updateSideBarController() {

	            if (this.static.state) {
	                var buttonConfig = this.children.requestObject("switchButton", _Config2.default);
	                buttonConfig.icon.state = { "clicked": "fa fa-align-justify", "default": "fa fa-times" };
	                buttonConfig.iconModeStyle.state = {
	                    fontSize: "24"
	                };
	                buttonConfig.iconOnly.state = true;
	                buttonConfig.style.state = {
	                    justifyContent: "flex-end",
	                    alignSelf: "flex-end",
	                    order: "-1",
	                    margin: "4px"
	                };
	                buttonConfig.props.addEvent("onClick", this.toggleSideBarState, null, this);
	                buttonConfig.clicked.state = !this.open.state;
	            } else {
	                this.children.removeObject("switchButton");
	            }
	            //this.updateStyle();
	        }
	    }]);

	    return SideBarConfig;
	}();

	var sideBarContainerConfig = {};
	exports.default = sideBarContainerConfig;

	sideBarContainerConfig.Container = ContainerConfig;
	sideBarContainerConfig.Overlay = OverlayConfig;
	sideBarContainerConfig.SideBar = SideBarConfig;

	//This Function makes this class as SessionClass
	Weave.registerClass('weavereact.sideBarContainerConfig.Container', sideBarContainerConfig.Container, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.sideBarContainerConfig.Overlay', sideBarContainerConfig.Overlay, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.sideBarContainerConfig.SideBar', sideBarContainerConfig.SideBar, [weavejs.api.core.ILinkableObject]);
	//# sourceMappingURL=data:application/json;base64,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akIsQUFJSSxBQUFRLEFBRVo7OzZCQUFBLEFBQWEsTUFBYixBQUFtQixTQUFuQixBQUE0QixXQUFVLEtBQUEsQUFBSyxvQkFBM0MsQUFBOEQsTUFiN0MsQUFhakIsQUFBbUUsQUFDbkU7NkJBQUEsQUFBYSxRQUFiLEFBQXFCLFFBQVEsQ0FBQyxLQUFBLEFBQUssS0FkdkMsQUFBcUIsQUFjYSxBQUFVO21CQUN2QyxBQUNEO3FCQUFBLEFBQUssU0FBTCxBQUFjLGFBbEJHLEFBRXJCLEFBZUssQUFDRCxBQUEyQjs7O0FBbEJWLEFBRXJCO1FBN0RKOztXQURFO0dBQUE7O0FBd0ZOLElBQU0seUJBQUEsQUFBeUI7a0JBQ2hCOztBQUVmLHVCQUFBLEFBQXVCLFlBQXZCLEFBQW1DO0FBQ25DLHVCQUFBLEFBQXVCLFVBQXZCLEFBQWlDO0FBQ2pDLHVCQUFBLEFBQXVCLFVBQXZCLEFBQWlDOzs7QUFHakMsTUFBQSxBQUFNLGNBQU4sQUFBb0IsK0NBQStDLHVCQUFBLEFBQXVCLFdBQVUsQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQWpILEFBQXFHLEFBQWlCO0FBQ3RILE1BQUEsQUFBTSxjQUFOLEFBQW9CLDZDQUE2Qyx1QkFBQSxBQUF1QixTQUFRLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUE3RyxBQUFpRyxBQUFpQjtBQUNsSCxNQUFBLEFBQU0sY0FBTixBQUFvQiw2Q0FBNkMsdUJBQUEsQUFBdUIsU0FBUSxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBN0csQUFBaUcsQUFBaUIiLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ1NTIGZyb20gXCIuLi8uLi9jb25maWdzL0NTU1wiO1xuaW1wb3J0IFByb3BzIGZyb20gXCIuLi8uLi9jb25maWdzL1Byb3BzXCI7XG5pbXBvcnQgQnV0dG9uQ29uZmlnIGZyb20gXCIuLi9idXR0b24vQ29uZmlnXCI7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5jbGFzcyBDb250YWluZXJDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAgICAgICBcIm1vZGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm92ZXJsYXlcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IE92ZXJsYXlDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxlZnRTaWRlQmFyXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgU2lkZUJhckNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRTaWRlQmFyXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgU2lkZUJhckNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidG9wU2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJvdHRvbVNpZGVCYXJcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBTaWRlQmFyQ29uZmlnKCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLmxlZnRTaWRlQmFyLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLnJpZ2h0U2lkZUJhci5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICAgIHRoaXMuYm90dG9tU2lkZUJhci5kaXJlY3Rpb24gPSBcImJvdHRvbVwiO1xuICAgICAgICB0aGlzLnRvcFNpZGVCYXIuZGlyZWN0aW9uID0gXCJ0b3BcIjtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcbiAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiXG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG5cblxuY2xhc3MgT3ZlcmxheUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyk7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgICBcIm9wZW5cIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0eWxlKTtcblxuICAgIH1cblxuICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgaWYodGhpcy5vcGVuLnN0YXRlKXtcbiAgICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAxXG4gICAgICAgIH1cblxuICAgICB9ZWxzZXtcbiAgICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPXtcbiAgICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAwXG4gICAgICAgIH1cblxuICAgICB9XG4gICB9XG5cblxuXG59XG5cblxuXG5jbGFzcyBTaWRlQmFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAgICAgICAgXCJzaXplXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiAgV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiMTYlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBzdGF0aWM6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBpY29uc09ubHk6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgb3Blbjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJcIjtcblxuICAgICAgICB0aGlzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlLHRydWUpO1xuICAgICAgICB0aGlzLnN0YXRpYy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMudXBkYXRlU2lkZUJhckNvbnRyb2xsZXIsdHJ1ZSk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZSgpe1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9ICB7XG4gICAgICAgICAgICBkaXNwbGF5IDogXCJmbGV4XCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImZsZXgtc3RhcnRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKHRoaXMub3Blbi5zdGF0ZSl7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhCYXNpc1wiXSA9IHRoaXMuc2l6ZS52YWx1ZTtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYWxpZ25JdGVtc1wiXSA9ICBcImZsZXgtc3RhcnRcIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBmb3Igc3RhdGljIHN0YXRlIHRoZSBzd2l0Y2ggYnV0dG9uIHdpdGggd2lsbCBiZSB0YWtlblxuICAgICAgICAgICAgLy9zdHlsZU9iamVjdFtcImZsZXhCYXNpc1wiXSA9IHRoaXMuc3RhdGljLnN0YXRlP1wiMyVcIjpcIjAlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhCYXNpc1wiXSA9IFwiMCVcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYWxpZ25JdGVtc1wiXSA9ICBcImNlbnRlclwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIiB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSBzdHlsZU9iamVjdFxuICAgICAgICB9ZWxzZSBpZih0aGlzLmRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gXCJib3R0b21cIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcInJvd1wiO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHN0eWxlT2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHN0eWxlT2JqZWN0O1xuICAgIH1cblxuICAgIHRvZ2dsZVNpZGVCYXJTdGF0ZSgpe1xuICAgICAgICB2YXIgYnV0dG9uQ29uZmlnID0gdGhpcy5jaGlsZHJlbi5nZXRPYmplY3QoXCJzd2l0Y2hCdXR0b25cIik7XG4gICAgICAgIHRoaXMub3Blbi5zdGF0ZSA9ICFidXR0b25Db25maWcuY2xpY2tlZC5zdGF0ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVTaWRlQmFyQ29udHJvbGxlcigpe1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGljLnN0YXRlKXtcbiAgICAgICAgICAgIHZhciBidXR0b25Db25maWcgPSB0aGlzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoXCJzd2l0Y2hCdXR0b25cIiwgQnV0dG9uQ29uZmlnKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5pY29uLnN0YXRlID0ge1wiY2xpY2tlZFwiOiBcImZhIGZhLWFsaWduLWp1c3RpZnlcIiAsXCJkZWZhdWx0XCI6XCJmYSBmYS10aW1lc1wifTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5pY29uTW9kZVN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0XCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBidXR0b25Db25maWcuaWNvbk9ubHkuc3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25TZWxmOlwiZmxleC1lbmRcIixcbiAgICAgICAgICAgICAgICBvcmRlcjpcIi0xXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjRweFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLnByb3BzLmFkZEV2ZW50KFwib25DbGlja1wiLHRoaXMudG9nZ2xlU2lkZUJhclN0YXRlLG51bGwsdGhpcyk7XG4gICAgICAgICAgICBidXR0b25Db25maWcuY2xpY2tlZC5zdGF0ZSA9ICF0aGlzLm9wZW4uc3RhdGU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5yZW1vdmVPYmplY3QoXCJzd2l0Y2hCdXR0b25cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLnVwZGF0ZVN0eWxlKCk7XG4gICAgfVxuXG5cblxufVxuXG5cbmNvbnN0IHNpZGVCYXJDb250YWluZXJDb25maWcgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IHNpZGVCYXJDb250YWluZXJDb25maWdcblxuc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXIgPSBDb250YWluZXJDb25maWc7XG5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLk92ZXJsYXkgPSBPdmVybGF5Q29uZmlnO1xuc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyID0gU2lkZUJhckNvbmZpZztcblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyJywgc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheScsIHNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyJywgc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cblxuXG4iXX0=

/***/ },
/* 46 */
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

	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var ButtonConfig = function () {
	    function ButtonConfig() {
	        _classCallCheck(this, ButtonConfig);

	        _ComponentManager2.default.createDefaultSessionProperties(this);

	        Object.defineProperties(this, {
	            "icon": { //{default: "" , clicked: "" , mouseOver: ""}
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "iconOnly": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "clicked": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "label": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            }
	        });

	        this.style.state = {
	            display: "flex",
	            flexDirection: "row",
	            fontFamily: "inherit",
	            fontSize: "inherit",
	            lineHeight: "inherit",
	            margin: "0",
	            color: "inherit",
	            textTransform: "none",
	            cursor: "pointer"
	        };
	    }

	    _createClass(ButtonConfig, [{
	        key: "getIcon",
	        value: function getIcon() {
	            if (this.clicked.state) {
	                return this.icon.state["clicked"];
	            } else {
	                return this.icon.state["default"];
	            }
	        }
	    }]);

	    return ButtonConfig;
	}();

	exports.default = ButtonConfig;

	//This Function makes this class as SessionClass

	Weave.registerClass('weavereact.ButtonConfig', ButtonConfig, [weavejs.api.core.ILinkableObject]);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBRU0sQUFDRjs4QkFERSxBQUNZLEFBQ1Y7O21DQUFBLEFBQWlCLCtCQURQLEFBQ1YsQUFBZ0QsQUFFL0M7O2VBQUEsQUFBTyxpQkFBUCxBQUF3QixNQUFNLEFBQzNCO29CQUFPLEFBQ0g7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7d0JBQVcsQUFDUDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxnQkFEdEQsQUFDSSxBQUFPLEFBQTBCLEFBQWlDLEFBRXRFOzt1QkFBVSxBQUNOO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGdCQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBaUMsQUFFdEU7O3FCQUFRLEFBQ0o7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQWQzQyxBQUdULEFBVUcsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFJMUQ7Ozs7YUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEFBQ2Y7cUJBQUEsQUFBUSxBQUNSOzJCQUFBLEFBQWMsQUFDZDt3QkFBQSxBQUFZLEFBQ1o7c0JBQUEsQUFBVSxBQUNWO3dCQUFBLEFBQVksQUFDWjtvQkFBQSxBQUFRLEFBQ1I7bUJBQUEsQUFBTyxBQUNQOzJCQUFBLEFBQWUsQUFDZjtvQkEzQlIsQUFBYyxBQWtCVixBQVNJLEFBQVE7VUEzQkY7OztpQkFEWjs7a0NBa0NPLEFBQ0w7Z0JBQUcsS0FBQSxBQUFLLFFBQUwsQUFBYSxPQUFNLEFBQ2xCO3VCQUFPLEtBQUEsQUFBSyxLQUFMLEFBQVUsTUFEckIsQUFBc0IsQUFDbEIsQUFBTyxBQUFnQjttQkFFdkIsQUFDQTt1QkFBTyxLQUFBLEFBQUssS0FBTCxBQUFVLE1BSnJCLEFBR0ksQUFDQSxBQUFPLEFBQWdCOzs7UUF0Qy9COztXQURFO0dBQUE7O2tCQWdEUzs7OztBQUlmLE1BQUEsQUFBTSxjQUFOLEFBQW9CLDJCQUFwQixBQUErQyxjQUFhLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUF6RSxBQUE2RCxBQUFpQiIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5jbGFzcyBCdXR0b25Db25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJpY29uXCI6ey8ve2RlZmF1bHQ6IFwiXCIgLCBjbGlja2VkOiBcIlwiICwgbW91c2VPdmVyOiBcIlwifVxuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk9ubHlcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2xpY2tlZFwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsYWJlbFwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcImluaGVyaXRcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCIwXCIsXG4gICAgICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgfTtcblxuXG4gICAgfVxuXG4gICAgZ2V0SWNvbigpe1xuICAgICAgICBpZih0aGlzLmNsaWNrZWQuc3RhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvbi5zdGF0ZVtcImNsaWNrZWRcIl1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvbi5zdGF0ZVtcImRlZmF1bHRcIl1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Db25maWdcblxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuQnV0dG9uQ29uZmlnJywgQnV0dG9uQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG4iXX0=

/***/ },
/* 47 */
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

	var _Modal = __webpack_require__(22);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _SplitPane = __webpack_require__(26);

	var _SplitPane2 = _interopRequireDefault(_SplitPane);

	var _SessionEditorConfig = __webpack_require__(48);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _TreeSection = __webpack_require__(49);

	var _TreeSection2 = _interopRequireDefault(_TreeSection);

	var _NodeView = __webpack_require__(50);

	var _NodeView2 = _interopRequireDefault(_NodeView);

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

	            return _react2.default.createElement(_Modal2.default, { settings: this.settings.modalConfig, keyPress: "true", title: this.props.title }, _react2.default.createElement("div", { style: { height: "90%", width: "100%", display: "flex", position: "relative", overflow: "hidden" } }, _react2.default.createElement(_SplitPane2.default, { split: "vertical", minSize: "50", defaultSize: "256" }, _react2.default.createElement(_TreeSection2.default, { tree: this.tree, settings: this.settings, nodeClick: this.nodeClick }), _react2.default.createElement(_NodeView2.default, { activeNodeValue: this.settings.activeNodeValue }))), _react2.default.createElement("div", { style: applyButtonStyle, onClick: this.changeSessionValue }, " Apply "), _react2.default.createElement("div", { style: applyButtonStyle, onClick: this.saveFile }, _react2.default.createElement("i", { className: "fa fa-fw fa-download" }, " "), " Save "), _react2.default.createElement("div", { style: applyButtonStyle }, _react2.default.createElement("input", { onChange: this.openFile, type: "file", style: inputButtonStyle }), _react2.default.createElement("i", { className: "fa fa-fw fa-upload" }, " "), " Load"));
	        }
	    }]);

	    return SessionEditor;
	}(_react2.default.Component);

	exports.default = SessionEditor;
	//# sourceMappingURL=data:application/json;base64,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QUFrQixTQUFTLEtBQXZDLEFBQXVDLEFBQUssc0JBUi9DLFlBU0csdUNBQUssT0FBQSxBQUFPLGtCQUFrQixTQUFTLEtBQXZDLEFBQXVDLEFBQUssWUFBVSxxQ0FBSSxXQUFKLEFBQUksQUFBWSwwQkFBdEUsTUFUSCxXQVVHLHVDQUFLLE9BQUwsQUFBSyxBQUFPLG9CQUNSLHlDQUFPLFVBQVUsS0FBQSxBQUFLLFVBQVUsTUFBQSxBQUFLLFFBQU8sT0FEaEQsQUFDSSxBQUE0QyxBQUFPLHFCQUNuRCxxQ0FBSSxXQUFKLEFBQUksQUFBWSx3QkFGcEIsTUF0Q0wsQUE0QlAsQUFBUzs7OztXQWxJUTtFQUFzQixnQkFBQSxBQUFNOztrQkFBNUIiLCJmaWxlIjoiU2Vzc2lvbkVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbFwiO1xuaW1wb3J0IFNwbGl0UGFuZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zcGxpdFBhbmUvU3BsaXRQYW5lXCI7XG5pbXBvcnQgU2Vzc2lvbkVkaXRvckNvbmZpZyBmcm9tIFwiLi9TZXNzaW9uRWRpdG9yQ29uZmlnXCI7XG5pbXBvcnQgVHJlZVNlY3Rpb24gZnJvbSBcIi4vVHJlZVNlY3Rpb25cIjtcbmltcG9ydCBOb2RlVmlldyBmcm9tIFwiLi9Ob2RlVmlld1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb25FZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gIHRoaXMucHJvcHMuc2V0dGluZ3M/dGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgU2Vzc2lvbkVkaXRvckNvbmZpZygpO1xuICAgICAgICB0aGlzLnRyZWUgPSAgd2VhdmVqcy5XZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uU3RhdGVUcmVlKHRoaXMucHJvcHMud2VhdmUucm9vdCk7XG4gICAgICAgIHRoaXMudHJlZS5sYWJlbCA9IHRoaXMucHJvcHMuaXNEYXNoYm9hcmQ/XCJXZWF2ZURhc2hib2FyZFwiOlwiV2VhdmVcIjtcblxuICAgICAgICB0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZSA9IHRoaXMuY2hhbmdlU2Vzc2lvblZhbHVlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubm9kZUNsaWNrID0gdGhpcy5ub2RlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYXZlRmlsZSA9IHRoaXMuc2F2ZUZpbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcGVuRmlsZSA9IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGE7Ly8gdG8tZG86dHJ5IHdpdGggbGlua2FibGVXYXRjaGVyIGFuZCBhZGQgZm9yY2VVcGRhdGUgdG8gdGhhdCB3YXRjaGVyXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3NcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLndlYXZlICE9PSBuZXh0UHJvcHMud2VhdmUpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIHRoaXMudHJlZSA9ICB3ZWF2ZWpzLldlYXZlQVBJLlNlc3Npb25NYW5hZ2VyLmdldFNlc3Npb25TdGF0ZVRyZWUobmV4dFByb3BzLndlYXZlLnJvb3QpO1xuICAgICAgICAgICAgdGhpcy50cmVlLmxhYmVsID0gbmV4dFByb3BzLmlzRGFzaGJvYXJkP1wiV2VhdmVEYXNoYm9hcmRcIjpcIldlYXZlXCI7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0YSA9IG51bGwgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm9kZUNsaWNrKG5vZGUpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgdmFyIHN0YXRlID0gV2VhdmUuZ2V0U3RhdGUobm9kZS5kYXRhKTtcbiAgICAgICAgdmFyIHN0cjtcbiAgICAgICAgaWYgKG5vZGUuZGF0YSBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgXHRzdHIgPSBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICBcdHN0ciA9IFdlYXZlLnN0cmluZ2lmeShzdGF0ZSwgbnVsbCwgJ1xcdCcsIHRydWUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IHN0cjtcbiAgfVxuXG5cbiAgY2hhbmdlU2Vzc2lvblZhbHVlKGUpe1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRhIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKVxuICAgICAgICBcdHRoaXMuc2VsZWN0ZWREYXRhLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgXHRXZWF2ZS5zZXRTdGF0ZSh0aGlzLnNlbGVjdGVkRGF0YSwgSlNPTi5wYXJzZSh2YWx1ZSkpO1xuXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHNhdmVGaWxlKCl7XG4gICAgdmFyIGFyY2hpdmUgID0gd2VhdmVqcy5jb3JlLldlYXZlQXJjaGl2ZS5jcmVhdGVBcmNoaXZlKHRoaXMucHJvcHMud2VhdmUpXG4gICAgdmFyIHVpbnQ4QXJyYXkgPSBhcmNoaXZlLnNlcmlhbGl6ZSgpO1xuICAgIHZhciBhcnJheUJ1ZmZlciAgPSB1aW50OEFycmF5LmJ1ZmZlcjtcbiAgICB3aW5kb3cuc2F2ZUFzKG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0pLCBcInRlc3Qud2VhdmVcIik7XG4gIH1cblxuXG5cbiAgb3BlbkZpbGUoZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgLy8gQnVpbGQgUHJvbWlzZSBMaXN0LCBlYWNoIHByb21pc2UgcmVzb2x2ZWQgYnkgRmlsZVJlYWRlci5vbmxvYWQuXG4gICAgICAgIHRoaXMudHJlZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlLnN0YXRlID0gXCJcIjtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBib3RoIHRoZSBGaWxlUmVhZGVyIHJlc3VsdCBhbmQgaXRzIG9yaWdpbmFsIGZpbGUuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoW2V2ZW50LCBzZWxlY3RlZGZpbGVdKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gUmVhZCB0aGUgZmlsZS5cbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoc2VsZWN0ZWRmaWxlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoemlwcGVkUmVzdWx0cykge1xuICAgICAgICAgICAgICAgIC8vIFJ1biB0aGUgY2FsbGJhY2sgYWZ0ZXIgYWxsIGZpbGVzIGhhdmUgYmVlbiByZWFkLlxuICAgICAgICAgICAgICAgIHZhciBlID0gemlwcGVkUmVzdWx0c1swXTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIC8vIHJlYWQgdGhlIGNvbnRlbnQgb2YgdGhlIGZpbGUgd2l0aCBKU1ppcFxuXG4gICAgICAgICAgICAgICAgd2VhdmVqcy5jb3JlLldlYXZlQXJjaGl2ZS5sb2FkRmlsZUNvbnRlbnQodGhhdC5wcm9wcy53ZWF2ZSxyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoYXQudHJlZSA9ICB3ZWF2ZWpzLldlYXZlQVBJLlNlc3Npb25NYW5hZ2VyLmdldFNlc3Npb25TdGF0ZVRyZWUodGhhdC5wcm9wcy53ZWF2ZS5yb290KTtcbiAgICAgICAgICAgICAgICAgdGhhdC50cmVlLmxhYmVsID0gXCJXZWF2ZVwiO1xuICAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdGVkRGF0YSA9IG51bGwgOy8vIHRvLWRvOnRyeSB3aXRoIGxpbmthYmxlV2F0Y2hlciBhbmQgYWRkIGZvcmNlVXBkYXRlIHRvIHRoYXQgd2F0Y2hlclxuICAgICAgICAgICAgICAgICB0aGF0LmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cblxuICByZW5kZXIoKSB7XG5cblxuXG4gICAgdmFyIGFwcGx5QnV0dG9uU3R5bGUgPSB7XG4gICAgICAgIG1hcmdpblRvcDpcIjRweFwiLFxuICAgICAgICBtYXJnaW5MZWZ0OlwiMnB4XCIsXG4gICAgICAgIGJvcmRlclN0eWxlOlwic29saWRcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOlwiNHB4XCIsXG4gICAgICAgIGJvcmRlcldpZHRoOlwiMXB4XCIsXG4gICAgICAgIGJvcmRlckNvbG9yOlwiZ3JleVwiLFxuICAgICAgICBmbG9hdDpcInJpZ2h0XCIsXG4gICAgICAgIHBhZGRpbmc6XCI0cHhcIixcbiAgICAgICAgY3Vyc29yOlwicG9pbnRlclwiLFxuICAgICAgICBmb250U2l6ZTpcIjEycHhcIixcbiAgICAgICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiXG4gICAgfVxuICAgIHZhciBpbnB1dEJ1dHRvblN0eWxlID0ge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG9wYWNpdHk6IFwiMFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgbGVmdDpcIjBcIixcbiAgICAgICAgdG9wOlwiMnB4XCIsXG4gICAgICAgIGJvdHRvbTpcIjJweFwiXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCA8TW9kYWwgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MubW9kYWxDb25maWd9IGtleVByZXNzPVwidHJ1ZVwiIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6XCI5MCVcIix3aWR0aDpcIjEwMCVcIixkaXNwbGF5OiBcImZsZXhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cInZlcnRpY2FsXCIgbWluU2l6ZT1cIjUwXCIgZGVmYXVsdFNpemU9XCIyNTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlU2VjdGlvbiB0cmVlPXt0aGlzLnRyZWV9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzfSAgbm9kZUNsaWNrPXt0aGlzLm5vZGVDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3IGFjdGl2ZU5vZGVWYWx1ZT17dGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5jaGFuZ2VTZXNzaW9uVmFsdWV9PiBBcHBseSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcHBseUJ1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLnNhdmVGaWxlfT48IGkgY2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS1kb3dubG9hZFwiICA+IDwgL2kgPiBTYXZlIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub3BlbkZpbGV9IHR5cGU9J2ZpbGUnIHN0eWxlPXtpbnB1dEJ1dHRvblN0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwgaSBjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLXVwbG9hZFwiICA+IDwgL2kgPiBMb2FkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuIl19

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _ModalConfig = __webpack_require__(23);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _TreeConfig = __webpack_require__(18);

	var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	(function (module) {
	
	    function SessionEditorConfig() {
	
	        Object.defineProperties(this, {
	
	            "treeConfig": {
	                value: new _TreeConfig2.default()
	            },
	            showTree: {
	                value: new weavejs.core.LinkableBoolean(false)
	            },
	            activeNodeValue: {
	                value: new weavejs.core.LinkableVariable()
	            },
	            modalConfig: {
	                value: new _ModalConfig2.default()
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlc3Npb25FZGl0b3JDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSxDQUFDLFVBQUEsQUFBVTs7YUFJUCxBQUFTOztlQUVMLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUUxQjs7MEJBQWMsQUFDVjt1QkFBTyxpQkFEWCxBQUNJLEFBRUo7O3NCQUFVLEFBQ047dUJBQU8sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGdCQUQ1QixBQUNJLEFBQU8sQUFBaUMsQUFFNUM7OzZCQUFpQixBQUNiO3VCQUFPLElBQUksUUFBQSxBQUFRLEtBRHZCLEFBQ0ksQUFBVyxBQUFhLEFBRTVCOzt5QkFBYSxBQUNUO3VCQUFPLGtCQWRZLEFBRTNCLEFBV0ksQUFDSSxBQUtSOzs7OzthQUFBLEFBQUssZUFBZSxBQUNoQjsyQ0FBQSxBQUErQixBQUMvQjsyQ0FBQSxBQUErQixBQUMvQjs0Q0FBQSxBQUFnQyxBQUNoQzttREF2QlIsQUFBK0IsQUFtQjNCLEFBSUksQUFBdUMsQUFTL0M7O1VBaEMrQixBQUUzQjs7O1FBOEJBLElBQUksb0JBcENPLEFBb0NQLEFBQW9CLEFBQzVCO01BQUEsQUFBRSx3QkFBYyxBQUFVLFVBQVUsQUFDaEM7ZUFBTyxTQUFBLEFBQVMsS0FBVCxBQUFjLGtCQUFkLEFBQWdDLE1BQWhDLEFBQXNDLEdBdENsQyxBQXFDQyxBQUFvQixBQUN6QixBQUF5QyxBQUtwRDtLQU5nQixDQXJDRCxBQUlmOztXQXVDQSxBQUFPLFVBM0NWLEFBQWtCLEFBMkNmLEFBQWlCO0dBM0NyQixBQUFDLEFBNkNDIiwiZmlsZSI6IlNlc3Npb25FZGl0b3JDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBNb2RhbENvbmZpZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbENvbmZpZ1wiO1xuaW1wb3J0IFRyZWVDb25maWcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHJlZS9UcmVlQ29uZmlnXCI7XG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG5cblxuICAgIGZ1bmN0aW9uIFNlc3Npb25FZGl0b3JDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAgICAgICBcInRyZWVDb25maWdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVHJlZUNvbmZpZygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1RyZWU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZlTm9kZVZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kYWxDb25maWc6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IE1vZGFsQ29uZmlnKClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kYXRhVHlwZXNNYXAgPSB7XG4gICAgICAgICAgICBcIndlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZ1wiOiBcIlNcIixcbiAgICAgICAgICAgIFwid2VhdmVqcy5jb3JlLkxpbmthYmxlTnVtYmVyXCI6IFwiTlwiLFxuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuXCI6IFwiQlwiLFxuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmRhdGEuc291cmNlLldlYXZlRGF0YVNvdXJjZVwiOiBcImZhIGZhLWRhdGFiYXNlXCJcblxuICAgICAgICB9XG5cblxuXG5cbiAgICB9XG5cbiAgICB2YXIgcCA9IFNlc3Npb25FZGl0b3JDb25maWcucHJvdG90eXBlO1xuICAgIHAuZ2V0RGF0YVR5cGUgPSBmdW5jdGlvbiAodHJlZUl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRyZWVJdGVtLmRhdGEuRkxFWEpTX0NMQVNTX0lORk8ubmFtZXNbMF0ucU5hbWU7XG4gICAgfVxuXG5cblxuICAgIG1vZHVsZS5leHBvcnRzID0gU2Vzc2lvbkVkaXRvckNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 49 */
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
	
	var _Tree = __webpack_require__(5);
	
	var _Tree2 = _interopRequireDefault(_Tree);
	
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
	                treeUI = _react2.default.createElement(_Tree2.default, { data: this.props.tree, label: "label", nodes: "children", clickCallback: this.props.nodeClick, settings: this.props.settings.treeConfig, dataTypesMap: this.props.settings.dataTypesMap, getDataType: this.props.settings.getDataType });
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

	            return _react2.default.createElement("div", { style: treeContainerStyle }, treeUI);
	        }
	    }]);
	
	    return TreeSection;
	}(_react2.default.Component);
	
	exports.default = TreeSection;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWVTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzJCQUVKOzthQUZJLEFBRUosWUFBQSxBQUFZLE9BQU87OEJBRmYsQUFFZTs7c0VBRmYsd0JBRUosQUFBbUIsQUFDWDs7O2lCQUhKOzs0Q0FPZSxBQUNqQjtrQkFBQSxBQUFNLGFBQWEsS0FBQSxBQUFLLE1BQXhCLEFBQW1CLEFBQVcsTUFBOUIsQUFBb0MsbUJBQXBDLEFBQXVELE1BQU0sS0FENUMsQUFDakIsQUFBNkQsQUFBSzs7OzsrQ0FHNUMsQUFDdEI7a0JBQUEsQUFBTSxhQUFhLEtBQUEsQUFBSyxNQUF4QixBQUFtQixBQUFXLE1BQTlCLEFBQW9DLGVBQXBDLEFBQW1ELE1BQU0sS0FEbkMsQUFDdEIsQUFBeUQsQUFBSzs7OztrREFHcEMsV0FBVSxBQUNoQztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsVUFBQSxBQUFVLE1BQUssQUFDakM7O29CQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBSyxNQUFBLEFBQU0sYUFBYSxLQUFBLEFBQUssTUFBeEIsQUFBbUIsQUFBVyxNQUE5QixBQUFvQyxlQUFwQyxBQUFtRCxNQUFNLEtBQTVFLEFBQW1CLEFBQXlELEFBQUssQUFDbEY7b0JBQUcsVUFBQSxBQUFVLE1BQUssQUFDZDswQkFBQSxBQUFNLGFBQWEsVUFBbkIsQUFBbUIsQUFBVSxNQUE3QixBQUFtQyxtQkFBbkMsQUFBc0QsTUFBTSxLQURoRSxBQUFrQixBQUNkLEFBQTRELEFBQUs7dUJBRWpFLEFBQ0E7eUJBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixXQUFwQixBQUErQixTQU52QyxBQUVJLEFBR0ksQUFDQSxBQUF3Qzs7Ozs7Ozs7Z0JBU2hELFNBRkcsQUFFSCxBQUFTLEFBQ2I7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFLLEFBQ2Y7eUJBQVMsZ0RBQU0sTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sT0FBQSxBQUFNLFNBQVEsT0FBQSxBQUFNLFlBQVksZUFBZSxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsVUFBVSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsWUFBWSxjQUFjLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixjQUFjLGFBQWEsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQURqTyxBQUFtQixBQUNmLEFBQVMsQUFBeU0sQUFBb0IsQUFHMU87OztxQ0FBeUIsQUFDckI7dUJBQUEsQUFBTSxBQUNOO3dCQUFBLEFBQU8sQUFDUDs2QkFBQSxBQUFZLEFBQ1o7OEJBQUEsQUFBYSxBQUNiOzZCQUFBLEFBQVksQUFDWjs2QkFBQSxBQUFZLEFBQ1o7MkJBQUEsQUFBVyxBQUNYOzJCQUFBLEFBQVcsQUFDWDt5QkFoQkcsQUFPSCxBQVNBLEFBQVEsQUFHWjthQVpJLENBUEcsQUFFUDs7bUJBaUJTLHVDQUFLLE9BQUwsQUFBSyxBQUFPLHNCQW5CZCxBQW1CUCxBQUFTLEFBQ2dCOzs7O1dBakR2QjtFQUFvQixnQkFBQSxBQUFNOztrQkF1RGpCIiwiZmlsZSI6IlRyZWVTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJlZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90cmVlL1RyZWVcIjtcblxuXG5jbGFzcyBUcmVlU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMucHJvcHMudHJlZSkuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnByb3BzLnRyZWUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudHJlZSAhPT0gbmV4dFByb3BzLnRyZWUpey8vIHRyZWUgdmFsdWUgd2lsbCBzd2l0aGMgYmV0d2VlbiBudWxsIGFuZCBzZXNzaW9uc3RhdGUgdHJlZSwgd2hlbiBuZXcgZmlsZSBpcyBsb2FkZWRcbiAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWUpV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMucHJvcHMudHJlZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICBpZihuZXh0UHJvcHMudHJlZSl7XG4gICAgICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKG5leHRQcm9wcy50cmVlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0dGluZ3MudHJlZUNvbmZpZy5yb290Tm9kZS5yZXNldCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgdHJlZVVJID0gXCJcIjtcbiAgICBpZih0aGlzLnByb3BzLnRyZWUpe1xuICAgICAgICB0cmVlVUkgPSA8VHJlZSBkYXRhPXt0aGlzLnByb3BzLnRyZWV9IGxhYmVsPVwibGFiZWxcIiBub2Rlcz1cImNoaWxkcmVuXCIgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMubm9kZUNsaWNrfSBzZXR0aW5ncz17dGhpcy5wcm9wcy5zZXR0aW5ncy50cmVlQ29uZmlnfSBkYXRhVHlwZXNNYXA9e3RoaXMucHJvcHMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwfSBnZXREYXRhVHlwZT17dGhpcy5wcm9wcy5zZXR0aW5ncy5nZXREYXRhVHlwZX0vPlxuICAgIH1cblxuICAgIHZhciB0cmVlQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXG4gICAgICAgIGJvcmRlclN0eWxlOlwic29saWRcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOlwiNHB4XCIsXG4gICAgICAgIGJvcmRlcldpZHRoOlwiMXB4XCIsXG4gICAgICAgIGJvcmRlckNvbG9yOlwiZ3JleVwiLFxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICBvdmVyZmxvd1g6ICdzY3JvbGwnLFxuICAgICAgICBwYWRkaW5nOlwiNHB4XCJcbiAgICB9XG5cbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXt0cmVlQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVlVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVHJlZVNlY3Rpb247XG4iXX0=

/***/ },
/* 50 */
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
	
	      return _react2.default.createElement("div", { style: resultContainerStyle }, _react2.default.createElement("textarea", { style: { width: "100%", height: "100%", border: "none" }, value: this.props.activeNodeValue.state, onChange: this.textAreaChange }));
	    }
	  }]);
	
	  return NodeView;
	}(_react2.default.Component);
	
	exports.default = NodeView;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGVWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007c0JBRUo7O1dBRkksQUFFSixTQUFBLEFBQVk7MEJBRlIsQUFFZTs7dUVBRmYscUJBRWUsQUFDWCxBQUVOOztVQUFBLEFBQUssaUJBQWlCLE1BQUEsQUFBSyxlQUFMLEFBQW9CLEtBSHpCLEFBR2pCOztXQUhGLE1BQW1COzs7ZUFGZjs7d0NBU2UsQUFDakI7V0FBQSxBQUFLLE1BQUwsQUFBVyxnQkFBWCxBQUEyQixxQkFBM0IsQUFBZ0QsTUFBSyxLQURwQyxBQUNqQixBQUFxRCxBQUFLOzs7OzJDQUdwQyxBQUN0QjtXQUFBLEFBQUssTUFBTCxBQUFXLGdCQUFYLEFBQTJCLGVBQTNCLEFBQTBDLE1BQUssS0FEekIsQUFDdEIsQUFBK0MsQUFBSzs7OzttQ0FLdkMsR0FBRSxBQUNmO1dBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQVgsQUFBMkIsUUFBUSxFQUFBLEFBQUUsT0FEdEIsQUFDb0IsQUFBUzs7Ozs7O2lDQUtqQixBQUN2QjtlQUFBLEFBQU0sQUFDTjtnQkFBQSxBQUFPLEFBQ1A7cUJBQUEsQUFBWSxBQUNaO3NCQUFBLEFBQWEsQUFDYjtxQkFBQSxBQUFZLEFBQ1o7cUJBQUEsQUFBWSxBQUNaO21CQUFBLEFBQVcsQUFDWDttQkFBQSxBQUFXLEFBQ1g7aUJBWEcsQUFFSCxBQVNBLEFBQVEsQUFJWjtPQWJJLENBRkcsQUFFUDs7YUFhUyx1Q0FBSyxPQUFMLEFBQUssQUFBTyx3QkFDVCw0Q0FBVSxPQUFPLEVBQUMsT0FBQSxBQUFNLFFBQU8sUUFBQSxBQUFPLFFBQU8sUUFBbkMsQUFBbUMsQUFBTyxVQUFTLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxnQkFBWCxBQUEyQixPQUFPLFVBQVUsS0FoQnJILEFBZVAsQUFBUyxBQUNHLEFBQWdILEFBQUs7Ozs7U0F2Qy9IO0VBQWlCLGdCQUFBLEFBQU07O2tCQTZDZCIsImZpbGUiOiJOb2RlVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5jbGFzcyBOb2RlVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnRleHRBcmVhQ2hhbmdlID0gdGhpcy50ZXh0QXJlYUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMucHJvcHMuYWN0aXZlTm9kZVZhbHVlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3RpdmVOb2RlVmFsdWUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgfVxuXG5cblxuICB0ZXh0QXJlYUNoYW5nZShlKXtcbiAgICB0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHJlc3VsdENvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxuICAgICAgICBib3JkZXJTdHlsZTpcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxuICAgICAgICBib3JkZXJXaWR0aDpcIjFweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjpcImdyZXlcIixcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICAgICAgcGFkZGluZzpcIjRweFwiXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXtyZXN1bHRDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLGJvcmRlcjpcIm5vbmVcIn19IHZhbHVlPXt0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZX0gb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBOb2RlVmlldztcbiJdfQ==

/***/ },
/* 51 */
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

	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ComponentManager = __webpack_require__(6);

	var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

	var _AbstractComponent2 = __webpack_require__(15);

	var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

	var _Config = __webpack_require__(46);

	var _Config2 = _interopRequireDefault(_Config);

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

	var Button = function (_AbstractComponent) {
	    _inherits(Button, _AbstractComponent);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

	        _this.onClickListener = _this.onClickListener.bind(_this);
	        return _this;
	    }

	    // allowe render only when React Parent render is called with new iconMode value

	    _createClass(Button, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            _get(Object.getPrototypeOf(Button.prototype), "shouldComponentUpdate", this).call(this, nextProps);
	            if (this.props.iconMode !== nextProps.iconMode) return true;else return false;
	        }
	    }, {
	        key: "onClickListener",
	        value: function onClickListener() {
	            this.settings.clicked.state = !this.settings.clicked.state;
	            if (this.props.onClick) this.props.onClick();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            if (_ComponentManager2.default.debug) console.log("Button - render");
	            var iconUI = "";
	            var label = this.settings.iconOnly.state ? "" : this.settings.label.state;

	            var iconName = this.settings.getIcon();
	            if (iconName && iconName.length > 0) {
	                var iconStyleObject = this.settings.iconModeStyle.getStyleFor();
	                iconUI = _react2.default.createElement("i", { style: iconStyleObject, className: iconName }, " ");
	            }

	            var styleObject = this.settings.style.getStyleFor();

	            var buttonUI = _react2.default.createElement("span", { onClick: this.onClickListener, style: styleObject }, iconUI, label);
	            if (this.settings.useCSS.state) {
	                var cssName = this.settings.CSS.getCSSFor();
	                buttonUI = _react2.default.createElement("span", { onClick: this.onClickListener, className: cssName, style: styleObject }, iconUI, " ", label);
	            }
	            return buttonUI;
	        }
	    }]);

	    return Button;
	}(_AbstractComponent3.default);

	Weave.registerClass("weavereact.Button", Button, [weavejs.api.core.ILinkableObject]);

	_ComponentManager2.default.registerToolConfig(Button, _Config2.default);
	_ComponentManager2.default.registerToolImplementation("weavereact.ButtonConfig", Button);

	exports.default = Button;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTTtzQkFFRjs7YUFGRSxBQUVGLE9BQUEsQUFBWTs4QkFGVixBQUVnQjs7MkVBRmhCLG1CQUVnQixBQUNSLEFBQ047O2NBQUEsQUFBSyxrQkFBa0IsTUFBQSxBQUFLLGdCQUFMLEFBQXFCLEtBRjlCLEFBRWQ7ZUFGSixNQUFrQjs7Ozs7aUJBRmhCOzs4Q0FRb0IsV0FBVSxBQUM1Qjt1Q0FURiw2REFROEIsQUFDNUIsQUFBNEIsQUFDNUI7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLFVBQUEsQUFBVSxVQUNqQyxPQURKLEFBQ0ksQUFBTyxVQUVQLE9BSEosQUFHSSxBQUFPOzs7OzBDQUdFLEFBQ2I7aUJBQUEsQUFBSyxTQUFMLEFBQWMsUUFBZCxBQUFzQixRQUFRLENBQUMsS0FBQSxBQUFLLFNBQUwsQUFBYyxRQURoQyxBQUNrQixBQUFzQixBQUNyRDtnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVEsS0FBQSxBQUFLLE1BQTNCLEFBQXNCLEFBQVc7Ozs7O2dCQUs5QiwyQkFBQSxBQUFpQixPQUFNLFFBQUEsQUFBUSxJQUFsQyxBQUEwQixBQUFZLEFBQ3RDO2dCQUFJLFNBRkMsQUFFRCxBQUFTLEFBQ2IsR0FISyxBQUNMO2dCQUVJLFFBQVEsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUFkLEFBQXVCLFFBQXZCLEFBQTZCLEtBQUcsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUhyRCxBQUd1QyxBQUFvQixBQUVoRTs7Z0JBQUksV0FBVyxLQUFBLEFBQUssU0FMZixBQUtELEFBQVcsQUFBYyxBQUM3QjtnQkFBRyxZQUFZLFNBQUEsQUFBUyxTQUFULEFBQWdCLEdBQUUsQUFDN0I7b0JBQUksa0JBQWtCLEtBQUEsQUFBSyxTQUFMLEFBQWMsY0FEUCxBQUN6QixBQUFrQixBQUE0QixBQUNsRDt5QkFBVSxxQ0FBRyxPQUFBLEFBQU8saUJBQWlCLFdBQTNCLEFBQTJCLEFBQWEsWUFGdEQsQUFBaUMsQUFFN0IsQUFHSjs7O2dCQUFJLGNBQWMsS0FBQSxBQUFLLFNBQUwsQUFBYyxNQVgzQixBQVdELEFBQWMsQUFBb0IsQUFFdEM7O2dCQUFJLFdBQVcsd0NBQU0sU0FBUyxLQUFBLEFBQUssaUJBQWlCLE9BQXJDLEFBQXFDLEFBQU8sZUFBNUMsQUFBMEQsUUFicEUsQUFhRCxBQUFXLEFBQWtFLEFBQ2pGO2dCQUFHLEtBQUEsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQixPQUFNLEFBQzFCO29CQUFJLFVBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxJQURGLEFBQ3RCLEFBQVUsQUFBa0IsQUFDaEM7MkJBQVcsd0NBQU0sU0FBUyxLQUFBLEFBQUssaUJBQWlCLFdBQUEsQUFBVyxTQUFTLE9BQXpELEFBQXlELEFBQU8sZUFBaEUsQUFBOEUsYUFGN0YsQUFBOEIsQUFFMUIsQUFBVyxBQUE0RixBQUUzRzs7bUJBbEJLLEFBa0JMLEFBQVE7Ozs7V0F4Q1Y7OztBQTRDTixNQUFBLEFBQU0sY0FBTixBQUFvQixxQkFBcEIsQUFBeUMsUUFBTyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBN0QsQUFBaUQsQUFBaUI7O0FBRWxFLDJCQUFBLEFBQWlCLG1CQUFqQixBQUFvQztBQUNwQywyQkFBQSxBQUFpQiwyQkFBakIsQUFBNEMsMkJBQTVDLEFBQXNFOztrQkFFdkQiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgQnV0dG9uQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tMaXN0ZW5lciA9IHRoaXMub25DbGlja0xpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gYWxsb3dlIHJlbmRlciBvbmx5IHdoZW4gUmVhY3QgUGFyZW50IHJlbmRlciBpcyBjYWxsZWQgd2l0aCBuZXcgaWNvbk1vZGUgdmFsdWVcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuaWNvbk1vZGUgIT09IG5leHRQcm9wcy5pY29uTW9kZSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkNsaWNrTGlzdGVuZXIoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jbGlja2VkLnN0YXRlID0gIXRoaXMuc2V0dGluZ3MuY2xpY2tlZC5zdGF0ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vbkNsaWNrKXRoaXMucHJvcHMub25DbGljaygpXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJCdXR0b24gLSByZW5kZXJcIik7XG4gICAgICAgIHZhciBpY29uVUkgPSBcIlwiO1xuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnNldHRpbmdzLmljb25Pbmx5LnN0YXRlP1wiXCI6dGhpcy5zZXR0aW5ncy5sYWJlbC5zdGF0ZTtcblxuICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmdldEljb24oKTtcbiAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoPjApe1xuICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3MuaWNvbk1vZGVTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgaWNvblVJID0gIDxpIHN0eWxlPXtpY29uU3R5bGVPYmplY3R9IGNsYXNzTmFtZSA9IHtpY29uTmFtZX0+IDwvaT5cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcblxuICAgICAgICB2YXIgYnV0dG9uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tMaXN0ZW5lcn0gc3R5bGU9e3N0eWxlT2JqZWN0fT57aWNvblVJfXtsYWJlbH08L3NwYW4+O1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLnVzZUNTUy5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICAgICAgYnV0dG9uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tMaXN0ZW5lcn0gY2xhc3NOYW1lPXtjc3NOYW1lfSBzdHlsZT17c3R5bGVPYmplY3R9PntpY29uVUl9Jm5ic3A7e2xhYmVsfTwvc3Bhbj47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChidXR0b25VSSk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5CdXR0b25cIiwgQnV0dG9uLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbENvbmZpZyhCdXR0b24sQnV0dG9uQ29uZmlnKTtcbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0LkJ1dHRvbkNvbmZpZ1wiLEJ1dHRvbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
