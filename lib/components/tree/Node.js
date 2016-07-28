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
		_this.nodeClickHandler = _this.nodeClickHandler.bind(_this);
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
								{ onClick: this.nodeClickHandler },
								' ',
								labelLang,
								' '
							),
							_react2.default.createElement(
								'span',
								{ onClick: this.nodeClickHandler, style: { flex: "1" } },
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
//# sourceMappingURL=data:application/json;base64,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S0FEQTtBQTJFQTtBQUNJLFNBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFdBQXRCLENBQWtDLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBZ0IsTUFBbEQsQ0FBWCxDQURSOztBQUdJLFNBQUksWUFBWSxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFlBQXRCLENBQW1DLE1BQW5DLEVBQTBDLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsQ0FBdEQsQ0FIUjtBQUlDLFNBQUcsQ0FBQyxVQUFVLE9BQVYsRUFDSCxVQUFVLE9BQVYsR0FBb0IsTUFBcEIsQ0FERDs7QUFHQSxjQUFTLEtBQUssU0FBTCxDQUFlLE1BQWYsRUFBc0IsUUFBdEIsQ0FBVCxDQVBEOztBQVNJLFlBQU87O1FBQUksT0FBTyxTQUFQLEVBQWtCLFNBQVMsS0FBSyxnQkFBTCxFQUEvQjtNQUNHLFlBREg7TUFFTSxNQUZOO01BR0U7O1NBQU0sT0FBTyxFQUFDLFNBQVEsTUFBUixFQUFlLE1BQUssR0FBTCxFQUFTLGVBQWMsU0FBZCxFQUFoQyxFQUFOO09BQ0M7Ozs7UUFBYSxTQUFiOztRQUREO09BRUM7O1VBQU0sT0FBUSxFQUFDLE1BQUssR0FBTCxFQUFULEVBQU47O1FBRkQ7T0FHQyxxQ0FBRyxXQUFXLFFBQVgsRUFBSCxDQUhEO09BSEY7TUFBUCxDQVRKO0tBM0VBOzs7O1FBNVBGOzs7QUFnV04sMkJBQWlCLDBCQUFqQixDQUE0Qyx1QkFBNUMsRUFBb0UsSUFBcEU7a0JBQ2UiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5cblxuY2xhc3MgTm9kZSBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKVxuICAgIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG5cdCAgICB0aGlzLnNlbGVjdENsaWNrSGFuZGxlciA9IHRoaXMuc2VsZWN0Q2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLm9wZW5DbGlja0hhbmRsZXIgPSB0aGlzLm9wZW5DbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMubm9kZUNsaWNrSGFuZGxlciA9IHRoaXMubm9kZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXHQgICAgdGhpcy5sZWFmQ2xpY2tIYW5kbGVyID0gdGhpcy5sZWFmQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLm5vZGVMaXN0UmVmQ2FsbGJhY2sgPSB0aGlzLm5vZGVMaXN0UmVmQ2FsbGJhY2suYmluZCh0aGlzKTtcblx0ICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSA9IHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZS5iaW5kKHRoaXMpO1xuXHQgICAgdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMgPSB0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcy5iaW5kKHRoaXMpO1xuXHQgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcblx0ICAgIHRoaXMuZ2V0SWNvblVJID0gdGhpcy5nZXRJY29uVUkuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhID0gZmFsc2U7XG5cdCAgICB0aGlzLm5vZGVMaXN0RWxlbWVudCA9IG51bGw7XG5cblx0ICAgIGlmKHRoaXMucHJvcHMuZGF0YSlcblx0ICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpO1xuICAgICAgICB9XG5cblx0ICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG5cblxuXHQgICAgdGhpcy5zdGF0ZSA9IHtcblx0XHQgICAgc2l6ZTpudWxsXG5cdCAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcylcbiAgICB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhID0gbmV4dFByb3BzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUobmV4dFByb3BzLmRhdGEsbmV4dFByb3BzLmxhYmVsLG5leHRQcm9wcy5ub2RlcyxuZXh0UHJvcHMuaWNvbik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIFxuICAgIHtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuXHQgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuICAgIH1cblxuXG5cbiAgICBzZWxlY3RDbGlja0hhbmRsZXIoKVxuICAgIHtcblx0ICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5zZWxlY3Rpb25UeXBlLnN0YXRlKVxuXHQgICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MsXCJzZWxlY3RcIik7XG5cdCAgICBlbHNlXG5cdFx0ICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MsXCJvcGVuXCIpO1xuXHQgICAgaWYodGhpcy5wcm9wcy5vbkNoYW5nZSlcblx0XHQgICAgdGhpcy5wcm9wcy5vbkNoYW5nZS5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuICAgIH07XG5cblx0b3BlbkNsaWNrSGFuZGxlcigpe1xuXHRcdHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MsXCJvcGVuXCIpO1xuXHRcdGlmKHRoaXMucHJvcHMub25PcGVuKVxuXHRcdFx0dGhpcy5wcm9wcy5vbk9wZW4uY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcblx0fTtcblxuXHRub2RlQ2xpY2tIYW5kbGVyKCl7XG5cdFx0dGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyxcImNsaWNrXCIpO1xuXHRcdGlmKHRoaXMucHJvcHMub25DbGljaylcblx0XHRcdHRoaXMucHJvcHMub25DbGljay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuXHR9O1xuXG5cdGxlYWZDbGlja0hhbmRsZXIoKXtcblx0XHR0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzLG51bGwpO1xuXHRcdGlmKHRoaXMucHJvcHMub25DbGljaylcblx0XHRcdHRoaXMucHJvcHMub25DbGljay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuXHR9O1xuXG5cbiAgICBjcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKGRhdGEsbGFiZWwsbm9kZXMsaWNvbilcbiAgICB7XG4gICAgICAgIHZhciBsYWJlbCA9IGxhYmVsP2xhYmVsOnRoaXMucHJvcHMubGFiZWw7XG4gICAgICAgIHZhciBub2RlcyA9IG5vZGVzP25vZGVzOnRoaXMucHJvcHMubm9kZXM7XG4gICAgICAgIHZhciBpY29uID0gaWNvbj9pY29uOnRoaXMucHJvcHMuaWNvbjtcbiAgICAgICAgaWYoZGF0YSl7IC8vIGNhbGxpbmcgd2l0aCBkYXRhIGFyZ3VtZW50cyBpbmRpY2F0ZXMgZGF0YSBpcyBjaGFuZ2VkIHNvIHdpcGUgdGhlIHNlc3Npb24gc3RhdGVcbiAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2V0KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvL3RvLWRvIG9ubHkgcmVxdWlyZWQgZm9yIHJvb3Rub2RlXG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uKTtcblxuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3Iobm9kZXMpO1xuICAgICAgICBpZih0cmVlTm9kZXMgJiYgdHJlZU5vZGVzLmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRyZWVOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChcIm5vZGVcIiArIGksIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcubGFiZWwuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCx0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcuaWNvbk5hbWUuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uLHRyZWVOb2Rlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldENoaWxkcmVuU2Vzc2lvblZhbHVlcygpXG4gICAge1xuXHQgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuLnN0YXRlKVxuXHQgICAge1xuXHRcdCAgICByZXR1cm5cblx0ICAgIH1cblx0ICAgIGVsc2Vcblx0ICAgIHtcblx0XHQgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuZWRDaGlsZClcblx0XHQgICAge1xuXHRcdFx0ICAgIHRoaXMuc2V0dGluZ3Mub3BlbmVkQ2hpbGQub3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdCAgICB9XG4gICAgICAgIGlmKCF0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKVxuICAgICAgICB9XG4gICAgICAgIHZhciBkZWZhdWx0Tm9kZXMgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuc3RhdGU7XG4gICAgICAgIGlmKGRlZmF1bHROb2RlcyAmJiBkZWZhdWx0Tm9kZXMubGVuZ3RoID4gMCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgbm9kZUNvbmZpZ3MubWFwKCAobm9kZUNvbmZpZyxpbmRleCk9Pntcblx0ICAgICAgICAgICAgbm9kZUNvbmZpZy5zZWxlY3QudmFsdWUgPSBkZWZhdWx0Tm9kZXMuaW5kZXhPZihub2RlQ29uZmlnLmxhYmVsLnN0YXRlKSAhPSAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwidHJlZUNvbmZpZ1wiLHRoaXMucHJvcHMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInBhcmVudENvbmZpZ1wiLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJsYWJlbFwiLHRoaXMucHJvcHMubGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJub2Rlc1wiLHRoaXMucHJvcHMubm9kZXMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJpY29uXCIsdGhpcy5wcm9wcy5pY29uKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwicmV2ZXJzZUxheW91dFwiLHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9uT3BlblwiLHRoaXMucHJvcHMub25PcGVuKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwib25DbGlja1wiLHRoaXMucHJvcHMub25DbGljayk7XG5cdCAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0aW9uVHlwZS5zdGF0ZSlcblx0ICAgIHtcblx0XHQgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwib25DaGFuZ2VcIix0aGlzLnByb3BzLm9uQ2hhbmdlKTtcblx0ICAgIH1cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibGV2ZWxcIix0aGlzLnByb3BzLmxldmVsICsgMSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImRhdGFcIixudWxsLCBudWxsLHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKHRoaXMucHJvcHMubm9kZXMpICk7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnJlbmRlckNoaWxkcmVuKHRoaXMpO1xuICAgIH1cblxuXG5cblx0bm9kZUxpc3RSZWZDYWxsYmFjayhlbGUpXG5cdHtcblx0XHRpZihlbGUpXG5cdFx0e1xuXHRcdFx0dGhpcy5ub2RlTGlzdEVsZW1lbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZShlbGUpO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zZXR0aW5ncy5kYXRhLmxhYmVsLCBcIm1vdW50ZWRcIik7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR0aGlzLm5vZGVMaXN0RWxlbWVudCA9IG51bGw7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNldHRpbmdzLmRhdGEubGFiZWwsIFwidW5Nb3VudGVkXCIpO1xuXHRcdFx0XG5cdFx0fVxuXHR9O1xuXHRcblx0Y29tcG9uZW50RGlkVXBkYXRlKClcblx0e1xuXHRcdGlmKHRoaXMubm9kZUxpc3RFbGVtZW50KVxuXHRcdHtcblx0XHRcdHZhciBub2RlTGlzdFJlY3QgPSB0aGlzLm5vZGVMaXN0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHZhciBuZXdTaXplID0gbm9kZUxpc3RSZWN0LndpZHRoO1xuXG5cdFx0XHRpZih0aGlzLnN0YXRlLnNpemUgIT0gbmV3U2l6ZSlcblx0XHRcdHtcblxuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHNpemU6bmV3U2l6ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSl7XG5cdFx0aWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zylcblx0XHRcdGNvbnNvbGUubG9nKFwiTm9kZSAtIHNob3VsZENvbXBvbmVudFVwZGF0ZVwiKTtcblx0XHRpZihuZXh0U3RhdGUuc2l6ZSAhPT0gdGhpcy5zdGF0ZS5zaXplKXtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldEljb25VSSh0eXBlLGljb25OYW1lKVxuXHR7XG5cdFx0bGV0IGljb25TdHlsZU9iaiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRTdHlsZUZvckljb25UeXBlKHR5cGUsaWNvbk5hbWUpO1xuXHRcdGxldCBpY29uVUkgPSBudWxsO1xuXHRcdGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aCA+IDApXG5cdFx0e1xuXHRcdFx0aWYoaWNvbk5hbWUuaW5kZXhPZihcIi9cIikgPT0gLTEpXG5cdFx0XHR7IC8vIGZvbnRBd2Vzb21lIEljb24gTmFtZVxuXHRcdFx0XHRpY29uVUkgPSA8aSBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdGljb25VSSA9IDxpbWcgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBzcmM9e2ljb25OYW1lfS8+XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBpY29uVUk7XG5cdH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zylcblx0ICAgICAgICBjb25zb2xlLmxvZyhcIk5vZGUgLSByZW5kZXJcIik7XG5cblx0ICAgIGlmKCF0aGlzLnByb3BzLmRhdGEpIC8vIG5vIGRhdGEgcmV0dW4gZW1wdHkgZGl2XG5cdCAgICAgICByZXR1cm4gPGRpdi8+O1xuXG5cdCAgICB2YXIgZG9tRGVmaW5lZFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcblxuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgIHZhciBpc09wZW4gPSB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG5cbiAgICAgICAgdmFyIGljb25OYW1lID0gdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZTtcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcblxuICAgICAgICB2YXIgaWNvblVJID0gbnVsbDtcbiAgICAgICAgdmFyIHNlbGVjdEljb25VSSA9IG51bGw7XG5cblx0ICAgIC8qKiogU2VsZWN0IEljb24gKioqKi9cblxuXHQgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdGlvblR5cGUuc3RhdGUpXG5cdCAgICB7XG5cdFx0ICAgIHZhciBzZWxlY3RJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldFNlbGVjdEljb24odGhpcy5zZXR0aW5ncy5zZWxlY3QudmFsdWUpO1xuXHRcdCAgICBzZWxlY3RJY29uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnNlbGVjdENsaWNrSGFuZGxlcn0+Jm5ic3A7PGkgY2xhc3NOYW1lPXtzZWxlY3RJY29ufS8+Jm5ic3A7PC9zcGFuPlxuXHQgICAgfVxuXG5cdCAgICAvKioqIExhYmVsICoqKiovXG5cdCAgICBcblx0ICAgIHZhciBsYWJlbExhbmcgPSB0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUgPyBXZWF2ZS5sYW5nKGxhYmVsKSA6IGxhYmVsO1xuXHQgICAgXG5cbiAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCkgLy9mb2xkZXIgbW9kZVxuICAgICAgICB7XG4gICAgICAgICAgICAvKioqIE5vZGUgSWNvbiAqKioqL1xuXG5cdFx0XHRpY29uVUkgPSB0aGlzLmdldEljb25VSShcImJyYW5jaFwiLGljb25OYW1lKTtcblxuICAgICAgICAgICAgLyoqKiBOb2RlIFVJICoqKiovXG5cbiAgICAgICAgICAgIHZhciBub2RlU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgaWYoZG9tRGVmaW5lZFN0eWxlKVxuXHQgICAgICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhub2RlU3R5bGUsZG9tRGVmaW5lZFN0eWxlLHRydWUpOy8vdGhpcyBoYXBwZW5zIGZvciByb290Tm9kZVxuICAgICAgICAgICAgaWYoIW5vZGVTdHlsZS5kaXNwbGF5KVxuICAgICAgICAgICAge1xuXHQgICAgICAgICAgICBub2RlU3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29udHJvbE5hbWUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0Rm9sZGVySWNvbihpc09wZW4pO1xuXG4gICAgICAgICAgICB2YXIgbm9kZVVJID0gPGRpdiBzdHlsZT17bm9kZVN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17IHtkaXNwbGF5OlwiZmxleFwiLGZsZXg6XCIxXCIgLGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCJ9IH0gPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RJY29uVUl9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLm5vZGVDbGlja0hhbmRsZXJ9PiZuYnNwO3tsYWJlbExhbmd9Jm5ic3A7PC9zcGFuPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMubm9kZUNsaWNrSGFuZGxlcn0gc3R5bGU9eyB7ZmxleDpcIjFcIn0gfT4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5vcGVuQ2xpY2tIYW5kbGVyfT48aSBjbGFzc05hbWU9e2NvbnRyb2xOYW1lfT48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjtcblxuXG4gICAgICAgICAgICAvKioqIE5vZGUgTGlzdCAqKioqL1xuXG4gICAgICAgICAgICBsZXQgYnJhbmNoU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuYnJhbmNoU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICB2YXIgbGlzdFN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExpc3RTdHlsZSgpO1xuICAgICAgICAgICAgbGlzdFN0eWxlLmxpc3RTdHlsZVR5cGUgPSBcIm5vbmVcIjtcblx0ICAgICAgICBpZih0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUpe1xuXHRcdCAgICAgICAgbGlzdFN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy5zdGF0ZTtcblx0XHQgICAgICAgIGxpc3RTdHlsZS5wYWRkaW5nTGVmdCA9IDA7XG5cdCAgICAgICAgfWVsc2V7XG5cdFx0ICAgICAgICBsaXN0U3R5bGUucGFkZGluZ0xlZnQgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcuc3RhdGU7XG5cdCAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHZhciBsZXZlbCA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5lbmFibGVNZW51TW9kZUZyb21MZXZlbC5zdGF0ZTtcbiAgICAgICAgICAgIHZhciByZWZDYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgICAgIGxldCByZW5kZXJOb2RlTGlzdCA9IGlzT3BlbjtcblxuICAgICAgICAgICAgaWYobGV2ZWwgJiYgIWlzTmFOKGxldmVsKSAmJiB0aGlzLnByb3BzLmxldmVsID49IGxldmVsICkgLy8gbWVudSBtb2RlIHN0eWxlIFJlbmRlcmluZ1xuICAgICAgICAgICAge1xuXHQgICAgICAgICAgICBpZihyZW5kZXJOb2RlTGlzdCkgLy8gb3ZlcnJpZGUgaWYgaXNPcGVuIGlzIHRydWVcblx0ICAgICAgICAgICAgICAgIHJlbmRlck5vZGVMaXN0ID0gdGhpcy5zdGF0ZS5zaXplID8gdHJ1ZSA6ZmFsc2U7XG5cdCAgICAgICAgICAgIHJlZkNhbGxiYWNrID0gdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrO1xuXHQgICAgICAgICAgICBicmFuY2hTdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0ICAgICAgICAgICAgbGlzdFN0eWxlLnBvc2l0aW9uID1cImFic29sdXRlXCI7XG5cdCAgICAgICAgICAgIGxpc3RTdHlsZS56SW5kZXggPSAxO1xuXHQgICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUpe1xuXHRcdCAgICAgICAgICAgIGxpc3RTdHlsZS5yaWdodCA9IHRoaXMuc3RhdGUuc2l6ZSA/IHRoaXMuc3RhdGUuc2l6ZSA6IDA7XG5cdCAgICAgICAgICAgIH1lbHNle1xuXHRcdCAgICAgICAgICAgIGxpc3RTdHlsZS5sZWZ0ID0gdGhpcy5zdGF0ZS5zaXplID8gdGhpcy5zdGF0ZS5zaXplIDogMDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIGxpc3RTdHlsZS50b3AgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbm9kZUxpc3RVSSA9IHJlbmRlck5vZGVMaXN0ID8gdGhpcy5yZW5kZXJDaGlsZHJlbigpIDogIG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXticmFuY2hTdHlsZX0gcmVmPXtyZWZDYWxsYmFja30gPlxuXHRcdFx0ICAgICAgICAgICAge25vZGVVSX1cblx0XHRcdCAgICAgICAgICAgIDx1bCAgc3R5bGU9e2xpc3RTdHlsZX0gPlxuXHRcdFx0XHQgICAgICAgICAgICB7bm9kZUxpc3RVSX1cblx0XHRcdCAgICAgICAgICAgIDwvdWw+XG5cdFx0ICAgICAgICAgICAgPC9kaXY+O1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSAvL2xlYWZcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGZpbGVJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZpbGVJY29uKHRoaXMucHJvcHMuZGF0YSxpc09wZW4pO1xuXG4gICAgICAgICAgICB2YXIgbGVhZlN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExlYWZTdHlsZShpc09wZW4sdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpO1xuXHQgICAgICAgIGlmKCFsZWFmU3R5bGUuZGlzcGxheSlcblx0XHQgICAgICAgIGxlYWZTdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cblx0ICAgICAgICBpY29uVUkgPSB0aGlzLmdldEljb25VSShcImxlYWZcIixpY29uTmFtZSlcblxuICAgICAgICAgICAgcmV0dXJuIDxsaSBzdHlsZT17bGVhZlN0eWxlfSBvbkNsaWNrPXt0aGlzLmxlYWZDbGlja0hhbmRsZXJ9PlxuXHQgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RJY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aWNvblVJfVxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixmbGV4OlwiMVwiLGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCJ9fT5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwO3tsYWJlbExhbmd9Jm5ic3A7PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9eyB7ZmxleDpcIjFcIn0gfT4mbmJzcDs8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICB9XG5cblxuICAgIH1cblxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19