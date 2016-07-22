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
					null,
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
							{ style: { display: "flex", flex: "1", flexDirection: "inherit" }, onClick: this.selectClickHandler },
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

					console.log(label, renderNodeList, isOpen);
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
//# sourceMappingURL=data:application/json;base64,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QWtCLFNBQVMsS0FBSyxnQkFBTCxFQUEvQjtNQUNHLFlBREg7TUFFTSxNQUZOO01BR0U7O1NBQU0sT0FBTyxFQUFDLFNBQVEsTUFBUixFQUFlLE1BQUssR0FBTCxFQUFTLGVBQWMsU0FBZCxFQUFoQyxFQUFOO09BQ0M7Ozs7UUFBYSxTQUFiOztRQUREO09BRUM7O1VBQU0sT0FBUSxFQUFDLE1BQUssR0FBTCxFQUFULEVBQU47O1FBRkQ7T0FHQyxxQ0FBRyxXQUFXLFFBQVgsRUFBSCxDQUhEO09BSEY7TUFBUCxDQVJKO0tBNUVBOzs7O1FBcFBGOzs7QUF3Vk4sMkJBQWlCLDBCQUFqQixDQUE0Qyx1QkFBNUMsRUFBb0UsSUFBcEU7a0JBQ2UiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5cblxuY2xhc3MgTm9kZSBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKVxuICAgIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG5cdCAgICB0aGlzLnNlbGVjdENsaWNrSGFuZGxlciA9IHRoaXMuc2VsZWN0Q2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLm9wZW5DbGlja0hhbmRsZXIgPSB0aGlzLm9wZW5DbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMubGVhZkNsaWNrSGFuZGxlciA9IHRoaXMubGVhZkNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXHQgICAgdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrID0gdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUgPSB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzID0gdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLmdldEljb25VSSA9IHRoaXMuZ2V0SWNvblVJLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IGZhbHNlO1xuXHQgICAgdGhpcy5ub2RlTGlzdEVsZW1lbnQgPSBudWxsO1xuXG5cdCAgICBpZih0aGlzLnByb3BzLmRhdGEpXG5cdCAgICB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKTtcbiAgICAgICAgfVxuXG5cdCAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuXG5cblx0ICAgIHRoaXMuc3RhdGUgPSB7XG5cdFx0ICAgIHNpemU6bnVsbFxuXHQgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpXG4gICAge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IG5leHRQcm9wcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKG5leHRQcm9wcy5kYXRhLG5leHRQcm9wcy5sYWJlbCxuZXh0UHJvcHMubm9kZXMsbmV4dFByb3BzLmljb24pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSBcbiAgICB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcblx0ICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcbiAgICB9XG5cblxuXG4gICAgc2VsZWN0Q2xpY2tIYW5kbGVyKClcbiAgICB7XG5cdCAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0aW9uVHlwZS5zdGF0ZSlcblx0ICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzLFwic2VsZWN0XCIpO1xuXHQgICAgZWxzZVxuXHRcdCAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzLFwib3BlblwiKTtcblx0ICAgIGlmKHRoaXMucHJvcHMub25DaGFuZ2UpXG5cdFx0ICAgIHRoaXMucHJvcHMub25DaGFuZ2UuY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcbiAgICB9O1xuXG5cdG9wZW5DbGlja0hhbmRsZXIoKXtcblx0XHR0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzLFwib3BlblwiKTtcblx0XHRpZih0aGlzLnByb3BzLm9uQ2xpY2spXG5cdFx0XHR0aGlzLnByb3BzLm9uQ2xpY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcblx0fTtcblxuXHRsZWFmQ2xpY2tIYW5kbGVyKCl7XG5cdFx0dGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyxudWxsKTtcblx0XHRpZih0aGlzLnByb3BzLm9uQ2xpY2spXG5cdFx0XHR0aGlzLnByb3BzLm9uQ2xpY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcblx0fTtcblxuXG4gICAgY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShkYXRhLGxhYmVsLG5vZGVzLGljb24pXG4gICAge1xuICAgICAgICB2YXIgbGFiZWwgPSBsYWJlbD9sYWJlbDp0aGlzLnByb3BzLmxhYmVsO1xuICAgICAgICB2YXIgbm9kZXMgPSBub2Rlcz9ub2Rlczp0aGlzLnByb3BzLm5vZGVzO1xuICAgICAgICB2YXIgaWNvbiA9IGljb24/aWNvbjp0aGlzLnByb3BzLmljb247XG4gICAgICAgIGlmKGRhdGEpeyAvLyBjYWxsaW5nIHdpdGggZGF0YSBhcmd1bWVudHMgaW5kaWNhdGVzIGRhdGEgaXMgY2hhbmdlZCBzbyB3aXBlIHRoZSBzZXNzaW9uIHN0YXRlXG4gICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNldCgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgLy90by1kbyBvbmx5IHJlcXVpcmVkIGZvciByb290bm9kZVxuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IobGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IoaWNvbik7XG5cbiAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKG5vZGVzKTtcbiAgICAgICAgaWYodHJlZU5vZGVzICYmIHRyZWVOb2Rlcy5sZW5ndGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0cmVlTm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWcgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoXCJub2RlXCIgKyBpLCBOb2RlQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmxhYmVsLnN0YXRlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IobGFiZWwsdHJlZU5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmljb25OYW1lLnN0YXRlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IoaWNvbix0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMoKVxuICAgIHtcblx0ICAgIGlmKHRoaXMuc2V0dGluZ3Mub3Blbi5zdGF0ZSlcblx0ICAgIHtcblx0XHQgICAgcmV0dXJuXG5cdCAgICB9XG5cdCAgICBlbHNlXG5cdCAgICB7XG5cdFx0ICAgIGlmKHRoaXMuc2V0dGluZ3Mub3BlbmVkQ2hpbGQpXG5cdFx0ICAgIHtcblx0XHRcdCAgICB0aGlzLnNldHRpbmdzLm9wZW5lZENoaWxkLm9wZW4udmFsdWUgPSBmYWxzZTtcblx0XHQgICAgfVxuXHQgICAgfVxuICAgICAgICBpZighdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKClcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVmYXVsdE5vZGVzID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLnN0YXRlO1xuICAgICAgICBpZihkZWZhdWx0Tm9kZXMgJiYgZGVmYXVsdE5vZGVzLmxlbmd0aCA+IDAgKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgbm9kZUNvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgICAgIG5vZGVDb25maWdzLm1hcCggKG5vZGVDb25maWcsaW5kZXgpPT57XG5cdCAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnZhbHVlID0gZGVmYXVsdE5vZGVzLmluZGV4T2Yobm9kZUNvbmZpZy5sYWJlbC5zdGF0ZSkgIT0gLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInRyZWVDb25maWdcIix0aGlzLnByb3BzLnRyZWVDb25maWcpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJwYXJlbnRDb25maWdcIix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibGFiZWxcIix0aGlzLnByb3BzLmxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibm9kZXNcIix0aGlzLnByb3BzLm5vZGVzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiaWNvblwiLHRoaXMucHJvcHMuaWNvbik7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInJldmVyc2VMYXlvdXRcIix0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJvbkNsaWNrXCIsdGhpcy5wcm9wcy5vbkNsaWNrKTtcblx0ICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5zZWxlY3Rpb25UeXBlLnN0YXRlKVxuXHQgICAge1xuXHRcdCAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJvbkNoYW5nZVwiLHRoaXMucHJvcHMub25DaGFuZ2UpO1xuXHQgICAgfVxuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJsZXZlbFwiLHRoaXMucHJvcHMubGV2ZWwgKyAxKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiZGF0YVwiLG51bGwsIG51bGwsdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IodGhpcy5wcm9wcy5ub2RlcykgKTtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cblxuXHRub2RlTGlzdFJlZkNhbGxiYWNrKGVsZSlcblx0e1xuXHRcdGlmKGVsZSlcblx0XHR7XG5cdFx0XHR0aGlzLm5vZGVMaXN0RWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGVsZSk7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNldHRpbmdzLmRhdGEubGFiZWwsIFwibW91bnRlZFwiKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHRoaXMubm9kZUxpc3RFbGVtZW50ID0gbnVsbDtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc2V0dGluZ3MuZGF0YS5sYWJlbCwgXCJ1bk1vdW50ZWRcIik7XG5cdFx0XHRcblx0XHR9XG5cdH07XG5cdFxuXHRjb21wb25lbnREaWRVcGRhdGUoKVxuXHR7XG5cdFx0aWYodGhpcy5ub2RlTGlzdEVsZW1lbnQpXG5cdFx0e1xuXHRcdFx0dmFyIG5vZGVMaXN0UmVjdCA9IHRoaXMubm9kZUxpc3RFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0dmFyIG5ld1NpemUgPSBub2RlTGlzdFJlY3Qud2lkdGg7XG5cblx0XHRcdGlmKHRoaXMuc3RhdGUuc2l6ZSAhPSBuZXdTaXplKVxuXHRcdFx0e1xuXG5cblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c2l6ZTpuZXdTaXplXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0c2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKXtcblx0XHRpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKVxuXHRcdFx0Y29uc29sZS5sb2coXCJOb2RlIC0gc2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xuXHRcdGlmKG5leHRTdGF0ZS5zaXplICE9PSB0aGlzLnN0YXRlLnNpemUpe1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0SWNvblVJKHR5cGUsaWNvbk5hbWUpXG5cdHtcblx0XHRsZXQgaWNvblN0eWxlT2JqID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldFN0eWxlRm9ySWNvblR5cGUodHlwZSxpY29uTmFtZSk7XG5cdFx0bGV0IGljb25VSSA9IG51bGw7XG5cdFx0aWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoID4gMClcblx0XHR7XG5cdFx0XHRpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSlcblx0XHRcdHsgLy8gZm9udEF3ZXNvbWUgSWNvbiBOYW1lXG5cdFx0XHRcdGljb25VSSA9IDxpIHN0eWxlID0ge2ljb25TdHlsZU9ian0gY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0aWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGljb25VSTtcblx0fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKVxuXHQgICAgICAgIGNvbnNvbGUubG9nKFwiTm9kZSAtIHJlbmRlclwiKTtcblxuXHQgICAgaWYoIXRoaXMucHJvcHMuZGF0YSkgLy8gbm8gZGF0YSByZXR1biBlbXB0eSBkaXZcblx0ICAgICAgIHJldHVybiA8ZGl2Lz47XG5cblx0ICAgIHZhciBkb21EZWZpbmVkU3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlO1xuXG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZXMoKTtcbiAgICAgICAgdmFyIGlzT3BlbiA9IHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcblxuICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlO1xuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuXG4gICAgICAgIHZhciBpY29uVUkgPSBudWxsO1xuICAgICAgICB2YXIgc2VsZWN0SWNvblVJID0gbnVsbDtcblxuXHQgICAgLyoqKiBTZWxlY3QgSWNvbiAqKioqL1xuXG5cdCAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0aW9uVHlwZS5zdGF0ZSlcblx0ICAgIHtcblx0XHQgICAgdmFyIHNlbGVjdEljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0U2VsZWN0SWNvbih0aGlzLnNldHRpbmdzLnNlbGVjdC52YWx1ZSk7XG5cdFx0ICAgIHNlbGVjdEljb25VSSA9IDxzcGFuPiZuYnNwOzxpIGNsYXNzTmFtZT17c2VsZWN0SWNvbn0vPiZuYnNwOzwvc3Bhbj5cblx0ICAgIH1cblxuXHQgICAgLyoqKiBMYWJlbCAqKioqL1xuXHQgICAgXG5cdCAgICB2YXIgbGFiZWxMYW5nID0gdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlID8gV2VhdmUubGFuZyhsYWJlbCkgOiBsYWJlbDtcblx0ICAgIFxuXG4gICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApIC8vZm9sZGVyIG1vZGVcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqKiBOb2RlIEljb24gKioqKi9cblxuXHRcdFx0aWNvblVJID0gdGhpcy5nZXRJY29uVUkoXCJicmFuY2hcIixpY29uTmFtZSk7XG5cbiAgICAgICAgICAgIC8qKiogTm9kZSBVSSAqKioqL1xuXG4gICAgICAgICAgICB2YXIgbm9kZVN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmKGRvbURlZmluZWRTdHlsZSlcblx0ICAgICAgICAgICAgU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMobm9kZVN0eWxlLGRvbURlZmluZWRTdHlsZSx0cnVlKTsvL3RoaXMgaGFwcGVucyBmb3Igcm9vdE5vZGVcbiAgICAgICAgICAgIGlmKCFub2RlU3R5bGUuZGlzcGxheSlcbiAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgbm9kZVN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbnRyb2xOYW1lID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZvbGRlckljb24oaXNPcGVuKTtcblxuICAgICAgICAgICAgdmFyIG5vZGVVSSA9IDxkaXYgc3R5bGU9e25vZGVTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9eyB7ZGlzcGxheTpcImZsZXhcIixmbGV4OlwiMVwiICxmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwifSB9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0Q2xpY2tIYW5kbGVyfT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0SWNvblVJfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7e2xhYmVsTGFuZ30mbmJzcDs8L3NwYW4+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9eyB7ZmxleDpcIjFcIn0gfT4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5vcGVuQ2xpY2tIYW5kbGVyfT48aSBjbGFzc05hbWU9e2NvbnRyb2xOYW1lfT48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjtcblxuXG4gICAgICAgICAgICAvKioqIE5vZGUgTGlzdCAqKioqL1xuXG4gICAgICAgICAgICBsZXQgYnJhbmNoU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuYnJhbmNoU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICB2YXIgbGlzdFN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExpc3RTdHlsZSgpO1xuICAgICAgICAgICAgbGlzdFN0eWxlLmxpc3RTdHlsZVR5cGUgPSBcIm5vbmVcIjtcblx0ICAgICAgICBpZih0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUpe1xuXHRcdCAgICAgICAgbGlzdFN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy5zdGF0ZTtcblx0XHQgICAgICAgIGxpc3RTdHlsZS5wYWRkaW5nTGVmdCA9IDA7XG5cdCAgICAgICAgfWVsc2V7XG5cdFx0ICAgICAgICBsaXN0U3R5bGUucGFkZGluZ0xlZnQgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcuc3RhdGU7XG5cdCAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHZhciBsZXZlbCA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5lbmFibGVNZW51TW9kZUZyb21MZXZlbC5zdGF0ZTtcbiAgICAgICAgICAgIHZhciByZWZDYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgICAgIGxldCByZW5kZXJOb2RlTGlzdCA9IGlzT3BlbjtcblxuICAgICAgICAgICAgaWYobGV2ZWwgJiYgIWlzTmFOKGxldmVsKSAmJiB0aGlzLnByb3BzLmxldmVsID49IGxldmVsICkgLy8gbWVudSBtb2RlIHN0eWxlIFJlbmRlcmluZ1xuICAgICAgICAgICAge1xuXHQgICAgICAgICAgICBpZihyZW5kZXJOb2RlTGlzdCkgLy8gb3ZlcnJpZGUgaWYgaXNPcGVuIGlzIHRydWVcblx0ICAgICAgICAgICAgICAgIHJlbmRlck5vZGVMaXN0ID0gdGhpcy5zdGF0ZS5zaXplID8gdHJ1ZSA6ZmFsc2U7XG5cdCAgICAgICAgICAgIHJlZkNhbGxiYWNrID0gdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrO1xuXHQgICAgICAgICAgICBicmFuY2hTdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0ICAgICAgICAgICAgbGlzdFN0eWxlLnBvc2l0aW9uID1cImFic29sdXRlXCI7XG5cdCAgICAgICAgICAgIGxpc3RTdHlsZS56SW5kZXggPSAxO1xuXHQgICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUpe1xuXHRcdCAgICAgICAgICAgIGxpc3RTdHlsZS5yaWdodCA9IHRoaXMuc3RhdGUuc2l6ZSA/IHRoaXMuc3RhdGUuc2l6ZSA6IDA7XG5cdCAgICAgICAgICAgIH1lbHNle1xuXHRcdCAgICAgICAgICAgIGxpc3RTdHlsZS5sZWZ0ID0gdGhpcy5zdGF0ZS5zaXplID8gdGhpcy5zdGF0ZS5zaXplIDogMDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIGxpc3RTdHlsZS50b3AgPSAwO1xuICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgY29uc29sZS5sb2cobGFiZWwgLHJlbmRlck5vZGVMaXN0LGlzT3Blbik7XG4gICAgICAgICAgICB2YXIgbm9kZUxpc3RVSSA9IHJlbmRlck5vZGVMaXN0ID8gdGhpcy5yZW5kZXJDaGlsZHJlbigpIDogIG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXticmFuY2hTdHlsZX0gcmVmPXtyZWZDYWxsYmFja30gPlxuXHRcdFx0ICAgICAgICAgICAge25vZGVVSX1cblx0XHRcdCAgICAgICAgICAgIDx1bCAgc3R5bGU9e2xpc3RTdHlsZX0gPlxuXHRcdFx0XHQgICAgICAgICAgICB7bm9kZUxpc3RVSX1cblx0XHRcdCAgICAgICAgICAgIDwvdWw+XG5cdFx0ICAgICAgICAgICAgPC9kaXY+O1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSAvL2xlYWZcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGZpbGVJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZpbGVJY29uKHRoaXMucHJvcHMuZGF0YSxpc09wZW4pO1xuXG4gICAgICAgICAgICB2YXIgbGVhZlN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExlYWZTdHlsZShpc09wZW4sdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpO1xuXHQgICAgICAgIGlmKCFsZWFmU3R5bGUuZGlzcGxheSlsZWFmU3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG5cdCAgICAgICAgaWNvblVJID0gdGhpcy5nZXRJY29uVUkoXCJsZWFmXCIsaWNvbk5hbWUpXG5cbiAgICAgICAgICAgIHJldHVybiA8bGkgc3R5bGU9e2xlYWZTdHlsZX0gb25DbGljaz17dGhpcy5sZWFmQ2xpY2tIYW5kbGVyfT5cblx0ICAgICAgICAgICAgICAgICAgICB7c2VsZWN0SWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2ICBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleDpcIjFcIixmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwifX0+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDt7bGFiZWxMYW5nfSZuYnNwOzwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXsge2ZsZXg6XCIxXCJ9IH0+Jm5ic3A7PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbn1cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==