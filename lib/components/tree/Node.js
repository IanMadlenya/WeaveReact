'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ComponentManager = require('../../ComponentManager');

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent2 = require('../../AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _Style = require('../../utils/Style');

var _Style2 = _interopRequireDefault(_Style);

var _NodeConfig = require('./NodeConfig');

var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Node = function (_AbstractComponent) {
	_inherits(Node, _AbstractComponent);

	function Node(props) {
		_classCallCheck(this, Node);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Node).call(this, props));

		_this.selectClickHandler = _this.selectClickHandler.bind(_this);
		_this.openClickHandler = _this.openClickHandler.bind(_this);
		_this.leafClickHandler = _this.leafClickHandler.bind(_this);
		_this.nodeListRefCallback = _this.nodeListRefCallback.bind(_this);
		_this.createSessionStateForTree = _this.createSessionStateForTree.bind(_this);
		_this.setChildrenSessionValues = _this.setChildrenSessionValues.bind(_this);
		_this.renderChildren = _this.renderChildren.bind(_this);
		_this.getIconUI = _this.getIconUI.bind(_this);

		_this.isSessionStateCreatedForTreeData = false;
		_this.nodeListElement = null;

		if (_this.props.data) {
			_this.settings.data = _this.props.data;
			_this.createSessionStateForTree();
		}

		_this.settings.open.addGroupedCallback(_this, _this.setChildrenSessionValues);
		_this.props.treeConfig.defaultSelectedNodes.addGroupedCallback(_this, _this.setChildrenSessionValues);

		_this.state = {
			size: null
		};
		return _this;
	}

	_createClass(Node, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			_get(Object.getPrototypeOf(Node.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
			if (this.props.data !== nextProps.data) {
				this.settings.data = nextProps.data;
				this.createSessionStateForTree(nextProps.data, nextProps.label, nextProps.nodes, nextProps.icon);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_get(Object.getPrototypeOf(Node.prototype), 'componentWillUnmount', this).call(this);
			this.settings.open.removeCallback(this, this.setChildrenSessionValues);
			this.props.treeConfig.defaultSelectedNodes.removeCallback(this, this.setChildrenSessionValues);
		}
	}, {
		key: 'selectClickHandler',
		value: function selectClickHandler() {
			if (this.props.treeConfig.selectionType.state) this.props.treeConfig.changeActiveNode(this.settings, "select");else this.props.treeConfig.changeActiveNode(this.settings, "open");
			if (this.props.onChange) this.props.onChange.call(this, this.props.data, this.settings);
		}
	}, {
		key: 'openClickHandler',
		value: function openClickHandler() {
			this.props.treeConfig.changeActiveNode(this.settings, "open");
			if (this.props.onOpen) this.props.onOpen.call(this, this.props.data, this.settings);
		}
	}, {
		key: 'nodeClickHandler',
		value: function nodeClickHandler() {
			this.props.treeConfig.changeActiveNode(this.settings, "click");
			if (this.props.onClick) this.props.onClick.call(this, this.props.data, this.settings);
		}
	}, {
		key: 'leafClickHandler',
		value: function leafClickHandler() {
			this.props.treeConfig.changeActiveNode(this.settings, null);
			if (this.props.onClick) this.props.onClick.call(this, this.props.data, this.settings);
		}
	}, {
		key: 'createSessionStateForTree',
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
		key: 'setChildrenSessionValues',
		value: function setChildrenSessionValues() {
			if (this.settings.open.state) {
				return;
			} else {
				if (this.settings.openedChild) {
					this.settings.openedChild.open.value = false;
				}
			}
			if (!this.isSessionStateCreatedForTreeData) {
				this.createSessionStateForTree();
			}
			var defaultNodes = this.props.treeConfig.defaultSelectedNodes.state;
			if (defaultNodes && defaultNodes.length > 0) {
				var nodeConfigs = this.settings.children.getObjects();
				nodeConfigs.map(function (nodeConfig, index) {
					nodeConfig.select.value = defaultNodes.indexOf(nodeConfig.label.state) != -1;
				});
			}
		}
	}, {
		key: 'renderChildren',
		value: function renderChildren() {
			this.settings.props.addChildProps("treeConfig", this.props.treeConfig);
			this.settings.props.addChildProps("parentConfig", this.settings);
			this.settings.props.addChildProps("label", this.props.label);
			this.settings.props.addChildProps("nodes", this.props.nodes);
			this.settings.props.addChildProps("icon", this.props.icon);
			this.settings.props.addChildProps("reverseLayout", this.settings.reverseLayout.state);
			this.settings.props.addChildProps("onOpen", this.props.onOpen);
			this.settings.props.addChildProps("onClick", this.props.onClick);
			if (this.props.treeConfig.selectionType.state) {
				this.settings.props.addChildProps("onChange", this.props.onChange);
			}
			this.settings.props.addChildProps("level", this.props.level + 1);
			this.settings.props.addChildProps("data", null, null, this.settings.getNodeValueFor(this.props.nodes));
			return _ComponentManager2.default.renderChildren(this);
		}
	}, {
		key: 'nodeListRefCallback',
		value: function nodeListRefCallback(ele) {
			if (ele) {
				this.nodeListElement = _reactDom2.default.findDOMNode(ele);
				console.log(this.settings.data.label, "mounted");
			} else {
				this.nodeListElement = null;
				console.log(this.settings.data.label, "unMounted");
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (this.nodeListElement) {
				var nodeListRect = this.nodeListElement.getBoundingClientRect();
				var newSize = nodeListRect.width;

				if (this.state.size != newSize) {

					this.setState({
						size: newSize
					});
				}
			}
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			if (_ComponentManager2.default.debug) console.log("Node - shouldComponentUpdate");
			if (nextState.size !== this.state.size) {
				return true;
			}
			return false;
		}
	}, {
		key: 'getIconUI',
		value: function getIconUI(type, iconName) {
			var iconStyleObj = this.props.treeConfig.getStyleForIconType(type, iconName);
			var iconUI = null;
			if (iconName && iconName.length > 0) {
				if (iconName.indexOf("/") == -1) {
					// fontAwesome Icon Name
					iconUI = _react2.default.createElement('i', { style: iconStyleObj, className: iconName });
				} else {
					iconUI = _react2.default.createElement('img', { style: iconStyleObj, src: iconName });
				}
			}
			return iconUI;
		}
	}, {
		key: 'render',
		value: function render() {
			if (_ComponentManager2.default.debug) console.log("Node - render");

			if (!this.props.data) // no data retun empty div
				return _react2.default.createElement('div', null);

			var domDefinedStyle = this.props.style;

			var nodes = this.settings.getNodes();
			var isOpen = this.settings.open.value;

			var iconName = this.settings.iconName.value;
			var label = this.settings.label.value;

			var iconUI = null;
			var selectIconUI = null;

			/*** Select Icon ****/

			if (this.props.treeConfig.selectionType.state) {
				var selectIcon = this.props.treeConfig.getSelectIcon(this.settings.select.value);
				selectIconUI = _react2.default.createElement(
					'span',
					{ onClick: this.selectClickHandler },
					' ',
					_react2.default.createElement('i', { className: selectIcon }),
					' '
				);
			}

			/*** Label ****/

			var labelLang = this.settings.reverseLayout.state ? Weave.lang(label) : label;

			if (nodes.length > 0) //folder mode
				{
					/*** Node Icon ****/

					iconUI = this.getIconUI("branch", iconName);

					/*** Node UI ****/

					var nodeStyle = this.props.treeConfig.nodeStyle.state;
					if (domDefinedStyle) _Style2.default.mergeStyleObjects(nodeStyle, domDefinedStyle, true); //this happens for rootNode
					if (!nodeStyle.display) {
						nodeStyle.display = "flex";
					}

					var controlName = this.props.treeConfig.getFolderIcon(isOpen);

					var nodeUI = _react2.default.createElement(
						'div',
						{ style: nodeStyle },
						_react2.default.createElement(
							'div',
							{ style: { display: "flex", flex: "1", flexDirection: "inherit" } },
							selectIconUI,
							iconUI,
							_react2.default.createElement(
								'span',
								null,
								' ',
								labelLang,
								' '
							),
							_react2.default.createElement(
								'span',
								{ style: { flex: "1" } },
								' '
							)
						),
						_react2.default.createElement(
							'span',
							{ onClick: this.openClickHandler },
							_react2.default.createElement('i', { className: controlName })
						)
					);

					/*** Node List ****/

					var branchStyle = this.props.treeConfig.branchStyle.state;
					var listStyle = this.props.treeConfig.getListStyle();
					listStyle.listStyleType = "none";
					if (this.settings.reverseLayout.state) {
						listStyle.paddingRight = this.props.treeConfig.nodePadding.state;
						listStyle.paddingLeft = 0;
					} else {
						listStyle.paddingLeft = this.props.treeConfig.nodePadding.state;
					}

					var level = this.props.treeConfig.enableMenuModeFromLevel.state;
					var refCallback = null;

					var renderNodeList = isOpen;

					if (level && !isNaN(level) && this.props.level >= level) // menu mode style Rendering
						{
							if (renderNodeList) // override if isOpen is true
								renderNodeList = this.state.size ? true : false;
							refCallback = this.nodeListRefCallback;
							branchStyle.position = "relative";
							listStyle.position = "absolute";
							listStyle.zIndex = 1;
							if (this.settings.reverseLayout.state) {
								listStyle.right = this.state.size ? this.state.size : 0;
							} else {
								listStyle.left = this.state.size ? this.state.size : 0;
							}

							listStyle.top = 0;
						}

					var nodeListUI = renderNodeList ? this.renderChildren() : null;

					return _react2.default.createElement(
						'div',
						{ style: branchStyle, ref: refCallback },
						nodeUI,
						_react2.default.createElement(
							'ul',
							{ style: listStyle },
							nodeListUI
						)
					);
				} else //leaf
				{
					var fileIcon = this.props.treeConfig.getFileIcon(this.props.data, isOpen);

					var leafStyle = this.props.treeConfig.getLeafStyle(isOpen, this.settings.active.value);
					if (!leafStyle.display) leafStyle.display = "flex";

					iconUI = this.getIconUI("leaf", iconName);

					return _react2.default.createElement(
						'li',
						{ style: leafStyle, onClick: this.leafClickHandler },
						selectIconUI,
						iconUI,
						_react2.default.createElement(
							'div',
							{ style: { display: "flex", flex: "1", flexDirection: "inherit" } },
							_react2.default.createElement(
								'span',
								null,
								' ',
								labelLang,
								' '
							),
							_react2.default.createElement(
								'span',
								{ style: { flex: "1" } },
								' '
							),
							_react2.default.createElement('i', { className: fileIcon })
						)
					);
				}
		}
	}]);

	return Node;
}(_AbstractComponent3.default);

_ComponentManager2.default.registerToolImplementation("weavereact.NodeConfig", Node);
exports.default = Node;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUU07OztBQUVGLFVBRkUsSUFFRixDQUFZLEtBQVosRUFDQTt3QkFIRSxNQUdGOztxRUFIRSxpQkFJUSxRQURWOztBQUdDLFFBQUssa0JBQUwsR0FBMEIsTUFBSyxrQkFBTCxDQUF3QixJQUF4QixPQUExQixDQUhEO0FBSUMsUUFBSyxnQkFBTCxHQUF3QixNQUFLLGdCQUFMLENBQXNCLElBQXRCLE9BQXhCLENBSkQ7QUFLQyxRQUFLLGdCQUFMLEdBQXdCLE1BQUssZ0JBQUwsQ0FBc0IsSUFBdEIsT0FBeEIsQ0FMRDtBQU1DLFFBQUssbUJBQUwsR0FBMkIsTUFBSyxtQkFBTCxDQUF5QixJQUF6QixPQUEzQixDQU5EO0FBT0MsUUFBSyx5QkFBTCxHQUFpQyxNQUFLLHlCQUFMLENBQStCLElBQS9CLE9BQWpDLENBUEQ7QUFRQyxRQUFLLHdCQUFMLEdBQWdDLE1BQUssd0JBQUwsQ0FBOEIsSUFBOUIsT0FBaEMsQ0FSRDtBQVNDLFFBQUssY0FBTCxHQUFzQixNQUFLLGNBQUwsQ0FBb0IsSUFBcEIsT0FBdEIsQ0FURDtBQVVDLFFBQUssU0FBTCxHQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLENBVkQ7O0FBWUksUUFBSyxnQ0FBTCxHQUF3QyxLQUF4QyxDQVpKO0FBYUMsUUFBSyxlQUFMLEdBQXVCLElBQXZCLENBYkQ7O0FBZUMsTUFBRyxNQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQ0g7QUFDTyxTQUFLLFFBQUwsQ0FBYyxJQUFkLEdBQXFCLE1BQUssS0FBTCxDQUFXLElBQVgsQ0FENUI7QUFFTyxTQUFLLHlCQUFMLEdBRlA7R0FEQTs7QUFNQSxRQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLGtCQUFuQixRQUEyQyxNQUFLLHdCQUFMLENBQTNDLENBckJEO0FBc0JJLFFBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0Isb0JBQXRCLENBQTJDLGtCQUEzQyxRQUFtRSxNQUFLLHdCQUFMLENBQW5FLENBdEJKOztBQXlCQyxRQUFLLEtBQUwsR0FBYTtBQUNaLFNBQUssSUFBTDtHQURELENBekJEOztFQURBOztjQUZFOzs0Q0FrQ3dCLFdBQzFCO0FBQ0ksOEJBcENGLCtEQW9Da0MsVUFBaEMsQ0FESjtBQUVJLE9BQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixVQUFVLElBQVYsRUFDdkI7QUFDSSxTQUFLLFFBQUwsQ0FBYyxJQUFkLEdBQXFCLFVBQVUsSUFBVixDQUR6QjtBQUVJLFNBQUsseUJBQUwsQ0FBK0IsVUFBVSxJQUFWLEVBQWUsVUFBVSxLQUFWLEVBQWdCLFVBQVUsS0FBVixFQUFnQixVQUFVLElBQVYsQ0FBOUUsQ0FGSjtJQURBOzs7O3lDQVNKO0FBQ0ksOEJBL0NGLHlEQStDRSxDQURKO0FBRUksUUFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixjQUFuQixDQUFrQyxJQUFsQyxFQUF1QyxLQUFLLHdCQUFMLENBQXZDLENBRko7QUFHQyxRQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLG9CQUF0QixDQUEyQyxjQUEzQyxDQUEwRCxJQUExRCxFQUErRCxLQUFLLHdCQUFMLENBQS9ELENBSEQ7Ozs7dUNBU0E7QUFDQyxPQUFHLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsYUFBdEIsQ0FBb0MsS0FBcEMsRUFDQyxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLGdCQUF0QixDQUF1QyxLQUFLLFFBQUwsRUFBYyxRQUFyRCxFQURKLEtBR0MsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixnQkFBdEIsQ0FBdUMsS0FBSyxRQUFMLEVBQWMsTUFBckQsRUFIRDtBQUlBLE9BQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxFQUNGLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsSUFBcEIsQ0FBeUIsSUFBekIsRUFBOEIsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFnQixLQUFLLFFBQUwsQ0FBOUMsQ0FERDs7OztxQ0FJYztBQUNqQixRQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLGdCQUF0QixDQUF1QyxLQUFLLFFBQUwsRUFBYyxNQUFyRCxFQURpQjtBQUVqQixPQUFHLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFDRixLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLElBQWxCLENBQXVCLElBQXZCLEVBQTRCLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBZ0IsS0FBSyxRQUFMLENBQTVDLENBREQ7Ozs7cUNBSWlCO0FBQ2pCLFFBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsZ0JBQXRCLENBQXVDLEtBQUssUUFBTCxFQUFjLE9BQXJELEVBRGlCO0FBRWpCLE9BQUcsS0FBSyxLQUFMLENBQVcsT0FBWCxFQUNGLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBNkIsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFnQixLQUFLLFFBQUwsQ0FBN0MsQ0FERDs7OztxQ0FJaUI7QUFDakIsUUFBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixnQkFBdEIsQ0FBdUMsS0FBSyxRQUFMLEVBQWMsSUFBckQsRUFEaUI7QUFFakIsT0FBRyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQ0YsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixFQUE2QixLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWdCLEtBQUssUUFBTCxDQUE3QyxDQUREOzs7OzRDQUs0QixNQUFLLE9BQU0sT0FBTSxNQUMzQztBQUNJLE9BQUksUUFBUSxRQUFNLEtBQU4sR0FBWSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBRDVCO0FBRUksT0FBSSxRQUFRLFFBQU0sS0FBTixHQUFZLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FGNUI7QUFHSSxPQUFJLE9BQU8sT0FBSyxJQUFMLEdBQVUsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUh6QjtBQUlJLE9BQUcsSUFBSCxFQUFROztBQUNILFNBQUssUUFBTCxDQUFjLEtBQWQsR0FERztJQUFSLE1BRUs7QUFDRCxXQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FETjtJQUZMOztBQUpKLE9BVUksQ0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixHQUE0QixLQUFLLFFBQUwsQ0FBYyxlQUFkLENBQThCLEtBQTlCLENBQTVCLENBVko7QUFXSSxRQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLEdBQStCLEtBQUssUUFBTCxDQUFjLGVBQWQsQ0FBOEIsSUFBOUIsQ0FBL0IsQ0FYSjs7QUFhSSxPQUFJLFlBQVksS0FBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixLQUE5QixDQUFaLENBYlI7QUFjSSxPQUFHLGFBQWEsVUFBVSxNQUFWLEVBQ2hCO0FBQ0ksU0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixjQUF2QixHQURKO0FBRUksU0FBSSxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksVUFBVSxNQUFWLEVBQWtCLEdBQXJDLEVBQ0E7QUFDSSxTQUFJLGFBQWEsS0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixhQUF2QixDQUFxQyxTQUFTLENBQVQsc0JBQXJDLENBQWIsQ0FEUjtBQUVJLGdCQUFXLEtBQVgsQ0FBaUIsS0FBakIsR0FBeUIsS0FBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixLQUE5QixFQUFvQyxVQUFVLENBQVYsQ0FBcEMsQ0FBekIsQ0FGSjtBQUdJLGdCQUFXLFFBQVgsQ0FBb0IsS0FBcEIsR0FBNEIsS0FBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixJQUE5QixFQUFtQyxVQUFVLENBQVYsQ0FBbkMsQ0FBNUIsQ0FISjtLQURBO0FBTUEsU0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixlQUF2QixHQVJKO0lBREE7QUFXQSxRQUFLLGdDQUFMLEdBQXdDLElBQXhDLENBekJKOzs7OzZDQTZCQTtBQUNDLE9BQUcsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixFQUNIO0FBQ0MsV0FERDtJQURBLE1BS0E7QUFDQyxRQUFHLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFDSDtBQUNDLFVBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUIsQ0FBK0IsS0FBL0IsR0FBdUMsS0FBdkMsQ0FERDtLQURBO0lBTkQ7QUFXRyxPQUFHLENBQUMsS0FBSyxnQ0FBTCxFQUNKO0FBQ0ksU0FBSyx5QkFBTCxHQURKO0lBREE7QUFJQSxPQUFJLGVBQWUsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixvQkFBdEIsQ0FBMkMsS0FBM0MsQ0FoQnZCO0FBaUJJLE9BQUcsZ0JBQWdCLGFBQWEsTUFBYixHQUFzQixDQUF0QixFQUNuQjtBQUNJLFFBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFVBQXZCLEVBQWQsQ0FEUjtBQUVJLGdCQUFZLEdBQVosQ0FBaUIsVUFBQyxVQUFELEVBQVksS0FBWixFQUFvQjtBQUNwQyxnQkFBVyxNQUFYLENBQWtCLEtBQWxCLEdBQTBCLGFBQWEsT0FBYixDQUFxQixXQUFXLEtBQVgsQ0FBaUIsS0FBakIsQ0FBckIsSUFBZ0QsQ0FBQyxDQUFELENBRHRDO0tBQXBCLENBQWpCLENBRko7SUFEQTs7OzttQ0FTWTtBQUNaLFFBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsYUFBcEIsQ0FBa0MsWUFBbEMsRUFBK0MsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUEvQyxDQURZO0FBRVosUUFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixhQUFwQixDQUFrQyxjQUFsQyxFQUFpRCxLQUFLLFFBQUwsQ0FBakQsQ0FGWTtBQUdaLFFBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsYUFBcEIsQ0FBa0MsT0FBbEMsRUFBMEMsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUExQyxDQUhZO0FBSVosUUFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixhQUFwQixDQUFrQyxPQUFsQyxFQUEwQyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQTFDLENBSlk7QUFLWixRQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLGFBQXBCLENBQWtDLE1BQWxDLEVBQXlDLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBekMsQ0FMWTtBQU1aLFFBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsYUFBcEIsQ0FBa0MsZUFBbEMsRUFBa0QsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixLQUE1QixDQUFsRCxDQU5ZO0FBT1osUUFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixhQUFwQixDQUFrQyxRQUFsQyxFQUEyQyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQTNDLENBUFk7QUFRWixRQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLGFBQXBCLENBQWtDLFNBQWxDLEVBQTRDLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBNUMsQ0FSWTtBQVNmLE9BQUcsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixhQUF0QixDQUFvQyxLQUFwQyxFQUNIO0FBQ0MsU0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixhQUFwQixDQUFrQyxVQUFsQyxFQUE2QyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQTdDLENBREQ7SUFEQTtBQUlHLFFBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsYUFBcEIsQ0FBa0MsT0FBbEMsRUFBMEMsS0FBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixDQUFuQixDQUExQyxDQWJZO0FBY1osUUFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixhQUFwQixDQUFrQyxNQUFsQyxFQUF5QyxJQUF6QyxFQUErQyxJQUEvQyxFQUFvRCxLQUFLLFFBQUwsQ0FBYyxlQUFkLENBQThCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBbEYsRUFkWTtBQWVaLFVBQU8sMkJBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQVAsQ0FmWTs7OztzQ0FvQkMsS0FDcEI7QUFDQyxPQUFHLEdBQUgsRUFDQTtBQUNDLFNBQUssZUFBTCxHQUF1QixtQkFBUyxXQUFULENBQXFCLEdBQXJCLENBQXZCLENBREQ7QUFFQyxZQUFRLEdBQVIsQ0FBWSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQW5CLEVBQTBCLFNBQXRDLEVBRkQ7SUFEQSxNQU1BO0FBQ0MsU0FBSyxlQUFMLEdBQXVCLElBQXZCLENBREQ7QUFFQyxZQUFRLEdBQVIsQ0FBWSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQW5CLEVBQTBCLFdBQXRDLEVBRkQ7SUFOQTs7Ozt1Q0FjRDtBQUNDLE9BQUcsS0FBSyxlQUFMLEVBQ0g7QUFDQyxRQUFJLGVBQWUsS0FBSyxlQUFMLENBQXFCLHFCQUFyQixFQUFmLENBREw7QUFFQyxRQUFJLFVBQVUsYUFBYSxLQUFiLENBRmY7O0FBSUMsUUFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLElBQW1CLE9BQW5CLEVBQ0g7O0FBR0MsVUFBSyxRQUFMLENBQWM7QUFDYixZQUFLLE9BQUw7TUFERCxFQUhEO0tBREE7SUFMRDs7Ozt3Q0FpQnFCLFdBQVcsV0FBVTtBQUMxQyxPQUFHLDJCQUFpQixLQUFqQixFQUNGLFFBQVEsR0FBUixDQUFZLDhCQUFaLEVBREQ7QUFFQSxPQUFHLFVBQVUsSUFBVixLQUFtQixLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWdCO0FBQ3JDLFdBQU8sSUFBUCxDQURxQztJQUF0QztBQUdBLFVBQU8sS0FBUCxDQU4wQzs7Ozs0QkFTakMsTUFBSyxVQUNmO0FBQ0MsT0FBSSxlQUFlLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsbUJBQXRCLENBQTBDLElBQTFDLEVBQStDLFFBQS9DLENBQWYsQ0FETDtBQUVDLE9BQUksU0FBUyxJQUFULENBRkw7QUFHQyxPQUFHLFlBQVksU0FBUyxNQUFULEdBQWtCLENBQWxCLEVBQ2Y7QUFDQyxRQUFHLFNBQVMsT0FBVCxDQUFpQixHQUFqQixLQUF5QixDQUFDLENBQUQsRUFDNUI7O0FBQ0MsY0FBUyxxQ0FBRyxPQUFTLFlBQVQsRUFBdUIsV0FBVyxRQUFYLEVBQTFCLENBQVQsQ0FERDtLQURBLE1BS0E7QUFDQyxjQUFTLHVDQUFLLE9BQVMsWUFBVCxFQUF1QixLQUFLLFFBQUwsRUFBNUIsQ0FBVCxDQUREO0tBTEE7SUFGRDtBQVdBLFVBQU8sTUFBUCxDQWREOzs7OzJCQWlCWTtBQUNMLE9BQUcsMkJBQWlCLEtBQWpCLEVBQ0YsUUFBUSxHQUFSLENBQVksZUFBWixFQUREOztBQUdILE9BQUcsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxJQUFYO0FBQ0QsV0FBTywwQ0FBUCxDQURIOztBQUdBLE9BQUksa0JBQWtCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FQZDs7QUFTTCxPQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsUUFBZCxFQUFSLENBVEM7QUFVTCxPQUFJLFNBQVMsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixDQVZSOztBQVlMLE9BQUksV0FBVyxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEtBQXZCLENBWlY7QUFhTCxPQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQWJQOztBQWVMLE9BQUksU0FBUyxJQUFULENBZkM7QUFnQkwsT0FBSSxlQUFlLElBQWY7Ozs7QUFoQkMsT0FvQkwsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixhQUF0QixDQUFvQyxLQUFwQyxFQUNIO0FBQ0MsUUFBSSxhQUFhLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsYUFBdEIsQ0FBb0MsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixDQUFqRCxDQURMO0FBRUMsbUJBQWU7O09BQU0sU0FBUyxLQUFLLGtCQUFMLEVBQWY7O0tBQThDLHFDQUFHLFdBQVcsVUFBWCxFQUFILENBQTlDOztLQUFmLENBRkQ7SUFEQTs7OztBQXBCUSxPQTRCSixZQUFZLEtBQUssUUFBTCxDQUFjLGFBQWQsQ0FBNEIsS0FBNUIsR0FBb0MsTUFBTSxJQUFOLENBQVcsS0FBWCxDQUFwQyxHQUF3RCxLQUF4RCxDQTVCUjs7QUErQkwsT0FBRyxNQUFNLE1BQU4sR0FBZSxDQUFmO0FBQ0g7OztBQUdMLGNBQVMsS0FBSyxTQUFMLENBQWUsUUFBZixFQUF3QixRQUF4QixDQUFUOzs7O0FBSEssU0FPUSxZQUFZLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsU0FBdEIsQ0FBZ0MsS0FBaEMsQ0FQcEI7QUFRSSxTQUFHLGVBQUgsRUFDQyxnQkFBTSxpQkFBTixDQUF3QixTQUF4QixFQUFrQyxlQUFsQyxFQUFrRCxJQUFsRCxFQUREO0FBUkosU0FVTyxDQUFDLFVBQVUsT0FBVixFQUNKO0FBQ0MsZ0JBQVUsT0FBVixHQUFvQixNQUFwQixDQUREO01BREE7O0FBS0EsU0FBSSxjQUFjLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsYUFBdEIsQ0FBb0MsTUFBcEMsQ0FBZCxDQWZSOztBQWlCSSxTQUFJLFNBQVM7O1FBQUssT0FBTyxTQUFQLEVBQUw7TUFDTzs7U0FBSyxPQUFRLEVBQUMsU0FBUSxNQUFSLEVBQWUsTUFBSyxHQUFMLEVBQVUsZUFBYyxTQUFkLEVBQWxDLEVBQUw7T0FDRSxZQURGO09BRUUsTUFGRjtPQUdDOzs7O1FBQWEsU0FBYjs7UUFIRDtPQUlDOztVQUFNLE9BQVEsRUFBQyxNQUFLLEdBQUwsRUFBVCxFQUFOOztRQUpEO09BRFA7TUFPSTs7U0FBTSxTQUFTLEtBQUssZ0JBQUwsRUFBZjtPQUFzQyxxQ0FBRyxXQUFXLFdBQVgsRUFBSCxDQUF0QztPQVBKO01BQVQ7Ozs7QUFqQlIsU0E4QlEsY0FBYyxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFdBQXRCLENBQWtDLEtBQWxDLENBOUJ0QjtBQStCSSxTQUFJLFlBQVksS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixZQUF0QixFQUFaLENBL0JSO0FBZ0NJLGVBQVUsYUFBVixHQUEwQixNQUExQixDQWhDSjtBQWlDQyxTQUFHLEtBQUssUUFBTCxDQUFjLGFBQWQsQ0FBNEIsS0FBNUIsRUFBa0M7QUFDcEMsZ0JBQVUsWUFBVixHQUF5QixLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFdBQXRCLENBQWtDLEtBQWxDLENBRFc7QUFFcEMsZ0JBQVUsV0FBVixHQUF3QixDQUF4QixDQUZvQztNQUFyQyxNQUdLO0FBQ0osZ0JBQVUsV0FBVixHQUF3QixLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFdBQXRCLENBQWtDLEtBQWxDLENBRHBCO01BSEw7O0FBUUcsU0FBSSxRQUFRLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsdUJBQXRCLENBQThDLEtBQTlDLENBekNoQjtBQTBDSSxTQUFJLGNBQWMsSUFBZCxDQTFDUjs7QUE0Q0ksU0FBSSxpQkFBaUIsTUFBakIsQ0E1Q1I7O0FBOENJLFNBQUcsU0FBUyxDQUFDLE1BQU0sS0FBTixDQUFELElBQWlCLEtBQUssS0FBTCxDQUFXLEtBQVgsSUFBb0IsS0FBcEI7QUFDN0I7QUFDQyxXQUFHLGNBQUg7QUFDSSx5QkFBaUIsS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFrQixJQUFsQixHQUF3QixLQUF4QixDQURyQjtBQUVBLHFCQUFjLEtBQUssbUJBQUwsQ0FIZjtBQUlDLG1CQUFZLFFBQVosR0FBdUIsVUFBdkIsQ0FKRDtBQUtDLGlCQUFVLFFBQVYsR0FBb0IsVUFBcEIsQ0FMRDtBQU1DLGlCQUFVLE1BQVYsR0FBbUIsQ0FBbkIsQ0FORDtBQU9DLFdBQUcsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixLQUE1QixFQUFrQztBQUNwQyxrQkFBVSxLQUFWLEdBQWtCLEtBQUssS0FBTCxDQUFXLElBQVgsR0FBa0IsS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFrQixDQUFwQyxDQURrQjtRQUFyQyxNQUVLO0FBQ0osa0JBQVUsSUFBVixHQUFpQixLQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLEtBQUssS0FBTCxDQUFXLElBQVgsR0FBa0IsQ0FBcEMsQ0FEYjtRQUZMOztBQU1BLGlCQUFVLEdBQVYsR0FBZ0IsQ0FBaEIsQ0FiRDtPQURBOztBQWlCQSxTQUFJLGFBQWEsaUJBQWlCLEtBQUssY0FBTCxFQUFqQixHQUEwQyxJQUExQyxDQS9EckI7O0FBaUVJLFlBQU87O1FBQUssT0FBTyxXQUFQLEVBQW9CLEtBQUssV0FBTCxFQUF6QjtNQUNILE1BREc7TUFFSjs7U0FBSyxPQUFPLFNBQVAsRUFBTDtPQUNFLFVBREY7T0FGSTtNQUFQLENBakVKO0tBREE7QUEyRUE7QUFDSSxTQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixXQUF0QixDQUFrQyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWdCLE1BQWxELENBQVgsQ0FEUjs7QUFHSSxTQUFJLFlBQVksS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixZQUF0QixDQUFtQyxNQUFuQyxFQUEwQyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQXJCLENBQXRELENBSFI7QUFJQyxTQUFHLENBQUMsVUFBVSxPQUFWLEVBQ0gsVUFBVSxPQUFWLEdBQW9CLE1BQXBCLENBREQ7O0FBR0EsY0FBUyxLQUFLLFNBQUwsQ0FBZSxNQUFmLEVBQXNCLFFBQXRCLENBQVQsQ0FQRDs7QUFTSSxZQUFPOztRQUFJLE9BQU8sU0FBUCxFQUFrQixTQUFTLEtBQUssZ0JBQUwsRUFBL0I7TUFDRyxZQURIO01BRU0sTUFGTjtNQUdFOztTQUFNLE9BQU8sRUFBQyxTQUFRLE1BQVIsRUFBZSxNQUFLLEdBQUwsRUFBUyxlQUFjLFNBQWQsRUFBaEMsRUFBTjtPQUNDOzs7O1FBQWEsU0FBYjs7UUFERDtPQUVDOztVQUFNLE9BQVEsRUFBQyxNQUFLLEdBQUwsRUFBVCxFQUFOOztRQUZEO09BR0MscUNBQUcsV0FBVyxRQUFYLEVBQUgsQ0FIRDtPQUhGO01BQVAsQ0FUSjtLQTNFQTs7OztRQTNQRjs7O0FBK1ZOLDJCQUFpQiwwQkFBakIsQ0FBNEMsdUJBQTVDLEVBQW9FLElBQXBFO2tCQUNlIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuXG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAgICB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuXHQgICAgdGhpcy5zZWxlY3RDbGlja0hhbmRsZXIgPSB0aGlzLnNlbGVjdENsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXHQgICAgdGhpcy5vcGVuQ2xpY2tIYW5kbGVyID0gdGhpcy5vcGVuQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLmxlYWZDbGlja0hhbmRsZXIgPSB0aGlzLmxlYWZDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMubm9kZUxpc3RSZWZDYWxsYmFjayA9IHRoaXMubm9kZUxpc3RSZWZDYWxsYmFjay5iaW5kKHRoaXMpO1xuXHQgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlID0gdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyA9IHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLnJlbmRlckNoaWxkcmVuID0gdGhpcy5yZW5kZXJDaGlsZHJlbi5iaW5kKHRoaXMpO1xuXHQgICAgdGhpcy5nZXRJY29uVUkgPSB0aGlzLmdldEljb25VSS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSBmYWxzZTtcblx0ICAgIHRoaXMubm9kZUxpc3RFbGVtZW50ID0gbnVsbDtcblxuXHQgICAgaWYodGhpcy5wcm9wcy5kYXRhKVxuXHQgICAge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKCk7XG4gICAgICAgIH1cblxuXHQgICAgdGhpcy5zZXR0aW5ncy5vcGVuLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcblxuXG5cdCAgICB0aGlzLnN0YXRlID0ge1xuXHRcdCAgICBzaXplOm51bGxcblx0ICAgIH1cbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKVxuICAgIHtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGEgPSBuZXh0UHJvcHMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShuZXh0UHJvcHMuZGF0YSxuZXh0UHJvcHMubGFiZWwsbmV4dFByb3BzLm5vZGVzLG5leHRQcm9wcy5pY29uKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkgXG4gICAge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4ucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG5cdCAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG4gICAgfVxuXG5cblxuICAgIHNlbGVjdENsaWNrSGFuZGxlcigpXG4gICAge1xuXHQgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdGlvblR5cGUuc3RhdGUpXG5cdCAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyxcInNlbGVjdFwiKTtcblx0ICAgIGVsc2Vcblx0XHQgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyxcIm9wZW5cIik7XG5cdCAgICBpZih0aGlzLnByb3BzLm9uQ2hhbmdlKVxuXHRcdCAgICB0aGlzLnByb3BzLm9uQ2hhbmdlLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyk7XG4gICAgfTtcblxuXHRvcGVuQ2xpY2tIYW5kbGVyKCl7XG5cdFx0dGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyxcIm9wZW5cIik7XG5cdFx0aWYodGhpcy5wcm9wcy5vbk9wZW4pXG5cdFx0XHR0aGlzLnByb3BzLm9uT3Blbi5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuXHR9O1xuXG5cdG5vZGVDbGlja0hhbmRsZXIoKXtcblx0XHR0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzLFwiY2xpY2tcIik7XG5cdFx0aWYodGhpcy5wcm9wcy5vbkNsaWNrKVxuXHRcdFx0dGhpcy5wcm9wcy5vbkNsaWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyk7XG5cdH07XG5cblx0bGVhZkNsaWNrSGFuZGxlcigpe1xuXHRcdHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MsbnVsbCk7XG5cdFx0aWYodGhpcy5wcm9wcy5vbkNsaWNrKVxuXHRcdFx0dGhpcy5wcm9wcy5vbkNsaWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyk7XG5cdH07XG5cblxuICAgIGNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoZGF0YSxsYWJlbCxub2RlcyxpY29uKVxuICAgIHtcbiAgICAgICAgdmFyIGxhYmVsID0gbGFiZWw/bGFiZWw6dGhpcy5wcm9wcy5sYWJlbDtcbiAgICAgICAgdmFyIG5vZGVzID0gbm9kZXM/bm9kZXM6dGhpcy5wcm9wcy5ub2RlcztcbiAgICAgICAgdmFyIGljb24gPSBpY29uP2ljb246dGhpcy5wcm9wcy5pY29uO1xuICAgICAgICBpZihkYXRhKXsgLy8gY2FsbGluZyB3aXRoIGRhdGEgYXJndW1lbnRzIGluZGljYXRlcyBkYXRhIGlzIGNoYW5nZWQgc28gd2lwZSB0aGUgc2Vzc2lvbiBzdGF0ZVxuICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmVzZXQoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIC8vdG8tZG8gb25seSByZXF1aXJlZCBmb3Igcm9vdG5vZGVcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGljb24pO1xuXG4gICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihub2Rlcyk7XG4gICAgICAgIGlmKHRyZWVOb2RlcyAmJiB0cmVlTm9kZXMubGVuZ3RoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHJlZU5vZGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KFwibm9kZVwiICsgaSwgTm9kZUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGxhYmVsLHRyZWVOb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5pY29uTmFtZS5zdGF0ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGljb24sdHJlZU5vZGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKClcbiAgICB7XG5cdCAgICBpZih0aGlzLnNldHRpbmdzLm9wZW4uc3RhdGUpXG5cdCAgICB7XG5cdFx0ICAgIHJldHVyblxuXHQgICAgfVxuXHQgICAgZWxzZVxuXHQgICAge1xuXHRcdCAgICBpZih0aGlzLnNldHRpbmdzLm9wZW5lZENoaWxkKVxuXHRcdCAgICB7XG5cdFx0XHQgICAgdGhpcy5zZXR0aW5ncy5vcGVuZWRDaGlsZC5vcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0ICAgIH1cbiAgICAgICAgaWYoIXRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlZmF1bHROb2RlcyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5zdGF0ZTtcbiAgICAgICAgaWYoZGVmYXVsdE5vZGVzICYmIGRlZmF1bHROb2Rlcy5sZW5ndGggPiAwIClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIG5vZGVDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgICAgICBub2RlQ29uZmlncy5tYXAoIChub2RlQ29uZmlnLGluZGV4KT0+e1xuXHQgICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9IGRlZmF1bHROb2Rlcy5pbmRleE9mKG5vZGVDb25maWcubGFiZWwuc3RhdGUpICE9IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJ0cmVlQ29uZmlnXCIsdGhpcy5wcm9wcy50cmVlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwicGFyZW50Q29uZmlnXCIsdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImxhYmVsXCIsdGhpcy5wcm9wcy5sYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm5vZGVzXCIsdGhpcy5wcm9wcy5ub2Rlcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImljb25cIix0aGlzLnByb3BzLmljb24pO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJyZXZlcnNlTGF5b3V0XCIsdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwib25PcGVuXCIsdGhpcy5wcm9wcy5vbk9wZW4pO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJvbkNsaWNrXCIsdGhpcy5wcm9wcy5vbkNsaWNrKTtcblx0ICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5zZWxlY3Rpb25UeXBlLnN0YXRlKVxuXHQgICAge1xuXHRcdCAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJvbkNoYW5nZVwiLHRoaXMucHJvcHMub25DaGFuZ2UpO1xuXHQgICAgfVxuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJsZXZlbFwiLHRoaXMucHJvcHMubGV2ZWwgKyAxKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiZGF0YVwiLG51bGwsIG51bGwsdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IodGhpcy5wcm9wcy5ub2RlcykgKTtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cblxuXHRub2RlTGlzdFJlZkNhbGxiYWNrKGVsZSlcblx0e1xuXHRcdGlmKGVsZSlcblx0XHR7XG5cdFx0XHR0aGlzLm5vZGVMaXN0RWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGVsZSk7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNldHRpbmdzLmRhdGEubGFiZWwsIFwibW91bnRlZFwiKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHRoaXMubm9kZUxpc3RFbGVtZW50ID0gbnVsbDtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc2V0dGluZ3MuZGF0YS5sYWJlbCwgXCJ1bk1vdW50ZWRcIik7XG5cdFx0XHRcblx0XHR9XG5cdH07XG5cdFxuXHRjb21wb25lbnREaWRVcGRhdGUoKVxuXHR7XG5cdFx0aWYodGhpcy5ub2RlTGlzdEVsZW1lbnQpXG5cdFx0e1xuXHRcdFx0dmFyIG5vZGVMaXN0UmVjdCA9IHRoaXMubm9kZUxpc3RFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0dmFyIG5ld1NpemUgPSBub2RlTGlzdFJlY3Qud2lkdGg7XG5cblx0XHRcdGlmKHRoaXMuc3RhdGUuc2l6ZSAhPSBuZXdTaXplKVxuXHRcdFx0e1xuXG5cblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c2l6ZTpuZXdTaXplXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0c2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKXtcblx0XHRpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coXCJOb2RlIC0gc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xuXHRcdGlmKG5leHRTdGF0ZS5zaXplICE9PSB0aGlzLnN0YXRlLnNpemUpe1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0SWNvblVJKHR5cGUsaWNvbk5hbWUpXG5cdHtcblx0XHRsZXQgaWNvblN0eWxlT2JqID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldFN0eWxlRm9ySWNvblR5cGUodHlwZSxpY29uTmFtZSk7XG5cdFx0bGV0IGljb25VSSA9IG51bGw7XG5cdFx0aWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoID4gMClcblx0XHR7XG5cdFx0XHRpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSlcblx0XHRcdHsgLy8gZm9udEF3ZXNvbWUgSWNvbiBOYW1lXG5cdFx0XHRcdGljb25VSSA9IDxpIHN0eWxlID0ge2ljb25TdHlsZU9ian0gY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0aWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGljb25VSTtcblx0fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKVxuXHQgICAgICAgIGNvbnNvbGUubG9nKFwiTm9kZSAtIHJlbmRlclwiKTtcblxuXHQgICAgaWYoIXRoaXMucHJvcHMuZGF0YSkgLy8gbm8gZGF0YSByZXR1biBlbXB0eSBkaXZcblx0ICAgICAgIHJldHVybiA8ZGl2Lz47XG5cblx0ICAgIHZhciBkb21EZWZpbmVkU3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlO1xuXG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZXMoKTtcbiAgICAgICAgdmFyIGlzT3BlbiA9IHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcblxuICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlO1xuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuXG4gICAgICAgIHZhciBpY29uVUkgPSBudWxsO1xuICAgICAgICB2YXIgc2VsZWN0SWNvblVJID0gbnVsbDtcblxuXHQgICAgLyoqKiBTZWxlY3QgSWNvbiAqKioqL1xuXG5cdCAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0aW9uVHlwZS5zdGF0ZSlcblx0ICAgIHtcblx0XHQgICAgdmFyIHNlbGVjdEljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0U2VsZWN0SWNvbih0aGlzLnNldHRpbmdzLnNlbGVjdC52YWx1ZSk7XG5cdFx0ICAgIHNlbGVjdEljb25VSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMuc2VsZWN0Q2xpY2tIYW5kbGVyfT4mbmJzcDs8aSBjbGFzc05hbWU9e3NlbGVjdEljb259Lz4mbmJzcDs8L3NwYW4+XG5cdCAgICB9XG5cblx0ICAgIC8qKiogTGFiZWwgKioqKi9cblx0ICAgIFxuXHQgICAgdmFyIGxhYmVsTGFuZyA9IHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSA/IFdlYXZlLmxhbmcobGFiZWwpIDogbGFiZWw7XG5cdCAgICBcblxuICAgICAgICBpZihub2Rlcy5sZW5ndGggPiAwKSAvL2ZvbGRlciBtb2RlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKiogTm9kZSBJY29uICoqKiovXG5cblx0XHRcdGljb25VSSA9IHRoaXMuZ2V0SWNvblVJKFwiYnJhbmNoXCIsaWNvbk5hbWUpO1xuXG4gICAgICAgICAgICAvKioqIE5vZGUgVUkgKioqKi9cblxuICAgICAgICAgICAgdmFyIG5vZGVTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICBpZihkb21EZWZpbmVkU3R5bGUpXG5cdCAgICAgICAgICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKG5vZGVTdHlsZSxkb21EZWZpbmVkU3R5bGUsdHJ1ZSk7Ly90aGlzIGhhcHBlbnMgZm9yIHJvb3ROb2RlXG4gICAgICAgICAgICBpZighbm9kZVN0eWxlLmRpc3BsYXkpXG4gICAgICAgICAgICB7XG5cdCAgICAgICAgICAgIG5vZGVTdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb250cm9sTmFtZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGb2xkZXJJY29uKGlzT3Blbik7XG5cbiAgICAgICAgICAgIHZhciBub2RlVUkgPSA8ZGl2IHN0eWxlPXtub2RlU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXsge2Rpc3BsYXk6XCJmbGV4XCIsZmxleDpcIjFcIiAsZmxleERpcmVjdGlvbjpcImluaGVyaXRcIn0gfSA+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdEljb25VSX1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvblVJfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwO3tsYWJlbExhbmd9Jm5ic3A7PC9zcGFuPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXsge2ZsZXg6XCIxXCJ9IH0+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub3BlbkNsaWNrSGFuZGxlcn0+PGkgY2xhc3NOYW1lPXtjb250cm9sTmFtZX0+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj47XG5cblxuICAgICAgICAgICAgLyoqKiBOb2RlIExpc3QgKioqKi9cblxuICAgICAgICAgICAgbGV0IGJyYW5jaFN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmJyYW5jaFN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgdmFyIGxpc3RTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRMaXN0U3R5bGUoKTtcbiAgICAgICAgICAgIGxpc3RTdHlsZS5saXN0U3R5bGVUeXBlID0gXCJub25lXCI7XG5cdCAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlKXtcblx0XHQgICAgICAgIGxpc3RTdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcuc3RhdGU7XG5cdFx0ICAgICAgICBsaXN0U3R5bGUucGFkZGluZ0xlZnQgPSAwO1xuXHQgICAgICAgIH1lbHNle1xuXHRcdCAgICAgICAgbGlzdFN0eWxlLnBhZGRpbmdMZWZ0ID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnN0YXRlO1xuXHQgICAgICAgIH1cblxuXG4gICAgICAgICAgICB2YXIgbGV2ZWwgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZW5hYmxlTWVudU1vZGVGcm9tTGV2ZWwuc3RhdGU7XG4gICAgICAgICAgICB2YXIgcmVmQ2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgcmVuZGVyTm9kZUxpc3QgPSBpc09wZW47XG5cbiAgICAgICAgICAgIGlmKGxldmVsICYmICFpc05hTihsZXZlbCkgJiYgdGhpcy5wcm9wcy5sZXZlbCA+PSBsZXZlbCApIC8vIG1lbnUgbW9kZSBzdHlsZSBSZW5kZXJpbmdcbiAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgaWYocmVuZGVyTm9kZUxpc3QpIC8vIG92ZXJyaWRlIGlmIGlzT3BlbiBpcyB0cnVlXG5cdCAgICAgICAgICAgICAgICByZW5kZXJOb2RlTGlzdCA9IHRoaXMuc3RhdGUuc2l6ZSA/IHRydWUgOmZhbHNlO1xuXHQgICAgICAgICAgICByZWZDYWxsYmFjayA9IHRoaXMubm9kZUxpc3RSZWZDYWxsYmFjaztcblx0ICAgICAgICAgICAgYnJhbmNoU3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdCAgICAgICAgICAgIGxpc3RTdHlsZS5wb3NpdGlvbiA9XCJhYnNvbHV0ZVwiO1xuXHQgICAgICAgICAgICBsaXN0U3R5bGUuekluZGV4ID0gMTtcblx0ICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlKXtcblx0XHQgICAgICAgICAgICBsaXN0U3R5bGUucmlnaHQgPSB0aGlzLnN0YXRlLnNpemUgPyB0aGlzLnN0YXRlLnNpemUgOiAwO1xuXHQgICAgICAgICAgICB9ZWxzZXtcblx0XHQgICAgICAgICAgICBsaXN0U3R5bGUubGVmdCA9IHRoaXMuc3RhdGUuc2l6ZSA/IHRoaXMuc3RhdGUuc2l6ZSA6IDA7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBsaXN0U3R5bGUudG9wID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG5vZGVMaXN0VUkgPSByZW5kZXJOb2RlTGlzdCA/IHRoaXMucmVuZGVyQ2hpbGRyZW4oKSA6ICBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17YnJhbmNoU3R5bGV9IHJlZj17cmVmQ2FsbGJhY2t9ID5cblx0XHRcdCAgICAgICAgICAgIHtub2RlVUl9XG5cdFx0XHQgICAgICAgICAgICA8dWwgIHN0eWxlPXtsaXN0U3R5bGV9ID5cblx0XHRcdFx0ICAgICAgICAgICAge25vZGVMaXN0VUl9XG5cdFx0XHQgICAgICAgICAgICA8L3VsPlxuXHRcdCAgICAgICAgICAgIDwvZGl2PjtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgLy9sZWFmXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEsaXNPcGVuKTtcblxuICAgICAgICAgICAgdmFyIGxlYWZTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRMZWFmU3R5bGUoaXNPcGVuLHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlKTtcblx0ICAgICAgICBpZighbGVhZlN0eWxlLmRpc3BsYXkpXG5cdFx0ICAgICAgICBsZWFmU3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG5cdCAgICAgICAgaWNvblVJID0gdGhpcy5nZXRJY29uVUkoXCJsZWFmXCIsaWNvbk5hbWUpXG5cbiAgICAgICAgICAgIHJldHVybiA8bGkgc3R5bGU9e2xlYWZTdHlsZX0gb25DbGljaz17dGhpcy5sZWFmQ2xpY2tIYW5kbGVyfT5cblx0ICAgICAgICAgICAgICAgICAgICB7c2VsZWN0SWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2ICBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleDpcIjFcIixmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwifX0+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDt7bGFiZWxMYW5nfSZuYnNwOzwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXsge2ZsZXg6XCIxXCJ9IH0+Jm5ic3A7PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbn1cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==