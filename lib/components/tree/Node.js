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
//# sourceMappingURL=data:application/json;base64,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LENBQWtDLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBZ0IsTUFBbEQsQ0FBWCxDQURSOztBQUdJLFNBQUksWUFBWSxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFlBQXRCLENBQW1DLE1BQW5DLEVBQTBDLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsQ0FBdEQsQ0FIUjtBQUlDLFNBQUcsQ0FBQyxVQUFVLE9BQVYsRUFDSCxVQUFVLE9BQVYsR0FBb0IsTUFBcEIsQ0FERDs7QUFHQSxjQUFTLEtBQUssU0FBTCxDQUFlLE1BQWYsRUFBc0IsUUFBdEIsQ0FBVCxDQVBEOztBQVNJLFlBQU87O1FBQUksT0FBTyxTQUFQLEVBQWtCLFNBQVMsS0FBSyxnQkFBTCxFQUEvQjtNQUNHLFlBREg7TUFFTSxNQUZOO01BR0U7O1NBQU0sT0FBTyxFQUFDLFNBQVEsTUFBUixFQUFlLE1BQUssR0FBTCxFQUFTLGVBQWMsU0FBZCxFQUFoQyxFQUFOO09BQ0M7Ozs7UUFBYSxTQUFiOztRQUREO09BRUM7O1VBQU0sT0FBUSxFQUFDLE1BQUssR0FBTCxFQUFULEVBQU47O1FBRkQ7T0FHQyxxQ0FBRyxXQUFXLFFBQVgsRUFBSCxDQUhEO09BSEY7TUFBUCxDQVRKO0tBM0VBOzs7O1FBM1BGOzs7QUErVk4sMkJBQWlCLDBCQUFqQixDQUE0Qyx1QkFBNUMsRUFBb0UsSUFBcEU7a0JBQ2UiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5cblxuY2xhc3MgTm9kZSBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKVxuICAgIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG5cdCAgICB0aGlzLnNlbGVjdENsaWNrSGFuZGxlciA9IHRoaXMuc2VsZWN0Q2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLm9wZW5DbGlja0hhbmRsZXIgPSB0aGlzLm9wZW5DbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMubGVhZkNsaWNrSGFuZGxlciA9IHRoaXMubGVhZkNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXHQgICAgdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrID0gdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUgPSB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzID0gdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLmdldEljb25VSSA9IHRoaXMuZ2V0SWNvblVJLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IGZhbHNlO1xuXHQgICAgdGhpcy5ub2RlTGlzdEVsZW1lbnQgPSBudWxsO1xuXG5cdCAgICBpZih0aGlzLnByb3BzLmRhdGEpXG5cdCAgICB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKTtcbiAgICAgICAgfVxuXG5cdCAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuXG5cblx0ICAgIHRoaXMuc3RhdGUgPSB7XG5cdFx0ICAgIHNpemU6bnVsbFxuXHQgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpXG4gICAge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IG5leHRQcm9wcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKG5leHRQcm9wcy5kYXRhLG5leHRQcm9wcy5sYWJlbCxuZXh0UHJvcHMubm9kZXMsbmV4dFByb3BzLmljb24pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSBcbiAgICB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcblx0ICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcbiAgICB9XG5cblxuXG4gICAgc2VsZWN0Q2xpY2tIYW5kbGVyKClcbiAgICB7XG5cdCAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0aW9uVHlwZS5zdGF0ZSlcblx0ICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzLFwic2VsZWN0XCIpO1xuXHQgICAgZWxzZVxuXHRcdCAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzLFwib3BlblwiKTtcblx0ICAgIGlmKHRoaXMucHJvcHMub25DaGFuZ2UpXG5cdFx0ICAgIHRoaXMucHJvcHMub25DaGFuZ2UuY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcbiAgICB9O1xuXG5cdG9wZW5DbGlja0hhbmRsZXIoKXtcblx0XHR0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzLFwib3BlblwiKTtcblx0XHRpZih0aGlzLnByb3BzLm9uT3Blbilcblx0XHRcdHRoaXMucHJvcHMub25PcGVuLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyk7XG5cdH07XG5cblx0bm9kZUNsaWNrSGFuZGxlcigpe1xuXHRcdHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MsXCJjbGlja1wiKTtcblx0XHRpZih0aGlzLnByb3BzLm9uQ2xpY2spXG5cdFx0XHR0aGlzLnByb3BzLm9uQ2xpY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcblx0fTtcblxuXHRsZWFmQ2xpY2tIYW5kbGVyKCl7XG5cdFx0dGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyxudWxsKTtcblx0XHRpZih0aGlzLnByb3BzLm9uQ2xpY2spXG5cdFx0XHR0aGlzLnByb3BzLm9uQ2xpY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcblx0fTtcblxuXG4gICAgY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShkYXRhLGxhYmVsLG5vZGVzLGljb24pXG4gICAge1xuICAgICAgICB2YXIgbGFiZWwgPSBsYWJlbD9sYWJlbDp0aGlzLnByb3BzLmxhYmVsO1xuICAgICAgICB2YXIgbm9kZXMgPSBub2Rlcz9ub2Rlczp0aGlzLnByb3BzLm5vZGVzO1xuICAgICAgICB2YXIgaWNvbiA9IGljb24/aWNvbjp0aGlzLnByb3BzLmljb247XG4gICAgICAgIGlmKGRhdGEpeyAvLyBjYWxsaW5nIHdpdGggZGF0YSBhcmd1bWVudHMgaW5kaWNhdGVzIGRhdGEgaXMgY2hhbmdlZCBzbyB3aXBlIHRoZSBzZXNzaW9uIHN0YXRlXG4gICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNldCgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgLy90by1kbyBvbmx5IHJlcXVpcmVkIGZvciByb290bm9kZVxuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IobGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IoaWNvbik7XG5cbiAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKG5vZGVzKTtcbiAgICAgICAgaWYodHJlZU5vZGVzICYmIHRyZWVOb2Rlcy5sZW5ndGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0cmVlTm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWcgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoXCJub2RlXCIgKyBpLCBOb2RlQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmxhYmVsLnN0YXRlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IobGFiZWwsdHJlZU5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmljb25OYW1lLnN0YXRlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IoaWNvbix0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMoKVxuICAgIHtcblx0ICAgIGlmKHRoaXMuc2V0dGluZ3Mub3Blbi5zdGF0ZSlcblx0ICAgIHtcblx0XHQgICAgcmV0dXJuXG5cdCAgICB9XG5cdCAgICBlbHNlXG5cdCAgICB7XG5cdFx0ICAgIGlmKHRoaXMuc2V0dGluZ3Mub3BlbmVkQ2hpbGQpXG5cdFx0ICAgIHtcblx0XHRcdCAgICB0aGlzLnNldHRpbmdzLm9wZW5lZENoaWxkLm9wZW4udmFsdWUgPSBmYWxzZTtcblx0XHQgICAgfVxuXHQgICAgfVxuICAgICAgICBpZighdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKClcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVmYXVsdE5vZGVzID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLnN0YXRlO1xuICAgICAgICBpZihkZWZhdWx0Tm9kZXMgJiYgZGVmYXVsdE5vZGVzLmxlbmd0aCA+IDAgKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgbm9kZUNvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgICAgIG5vZGVDb25maWdzLm1hcCggKG5vZGVDb25maWcsaW5kZXgpPT57XG5cdCAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnZhbHVlID0gZGVmYXVsdE5vZGVzLmluZGV4T2Yobm9kZUNvbmZpZy5sYWJlbC5zdGF0ZSkgIT0gLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInRyZWVDb25maWdcIix0aGlzLnByb3BzLnRyZWVDb25maWcpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJwYXJlbnRDb25maWdcIix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibGFiZWxcIix0aGlzLnByb3BzLmxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibm9kZXNcIix0aGlzLnByb3BzLm5vZGVzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiaWNvblwiLHRoaXMucHJvcHMuaWNvbik7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInJldmVyc2VMYXlvdXRcIix0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJvbk9wZW5cIix0aGlzLnByb3BzLm9uT3Blbik7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9uQ2xpY2tcIix0aGlzLnByb3BzLm9uQ2xpY2spO1xuXHQgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdGlvblR5cGUuc3RhdGUpXG5cdCAgICB7XG5cdFx0ICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9uQ2hhbmdlXCIsdGhpcy5wcm9wcy5vbkNoYW5nZSk7XG5cdCAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImxldmVsXCIsdGhpcy5wcm9wcy5sZXZlbCArIDEpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJkYXRhXCIsbnVsbCwgbnVsbCx0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcih0aGlzLnByb3BzLm5vZGVzKSApO1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cblxuXG5cdG5vZGVMaXN0UmVmQ2FsbGJhY2soZWxlKVxuXHR7XG5cdFx0aWYoZWxlKVxuXHRcdHtcblx0XHRcdHRoaXMubm9kZUxpc3RFbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUoZWxlKTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc2V0dGluZ3MuZGF0YS5sYWJlbCwgXCJtb3VudGVkXCIpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5ub2RlTGlzdEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zZXR0aW5ncy5kYXRhLmxhYmVsLCBcInVuTW91bnRlZFwiKTtcblx0XHRcdFxuXHRcdH1cblx0fTtcblx0XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpXG5cdHtcblx0XHRpZih0aGlzLm5vZGVMaXN0RWxlbWVudClcblx0XHR7XG5cdFx0XHR2YXIgbm9kZUxpc3RSZWN0ID0gdGhpcy5ub2RlTGlzdEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHR2YXIgbmV3U2l6ZSA9IG5vZGVMaXN0UmVjdC53aWR0aDtcblxuXHRcdFx0aWYodGhpcy5zdGF0ZS5zaXplICE9IG5ld1NpemUpXG5cdFx0XHR7XG5cblxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzaXplOm5ld1NpemVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpe1xuXHRcdGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIk5vZGUgLSBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG5cdFx0aWYobmV4dFN0YXRlLnNpemUgIT09IHRoaXMuc3RhdGUuc2l6ZSl7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRnZXRJY29uVUkodHlwZSxpY29uTmFtZSlcblx0e1xuXHRcdGxldCBpY29uU3R5bGVPYmogPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0U3R5bGVGb3JJY29uVHlwZSh0eXBlLGljb25OYW1lKTtcblx0XHRsZXQgaWNvblVJID0gbnVsbDtcblx0XHRpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGggPiAwKVxuXHRcdHtcblx0XHRcdGlmKGljb25OYW1lLmluZGV4T2YoXCIvXCIpID09IC0xKVxuXHRcdFx0eyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcblx0XHRcdFx0aWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRpY29uVUkgPSA8aW1nIHN0eWxlID0ge2ljb25TdHlsZU9ian0gc3JjPXtpY29uTmFtZX0vPlxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaWNvblVJO1xuXHR9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpXG5cdCAgICAgICAgY29uc29sZS5sb2coXCJOb2RlIC0gcmVuZGVyXCIpO1xuXG5cdCAgICBpZighdGhpcy5wcm9wcy5kYXRhKSAvLyBubyBkYXRhIHJldHVuIGVtcHR5IGRpdlxuXHQgICAgICAgcmV0dXJuIDxkaXYvPjtcblxuXHQgICAgdmFyIGRvbURlZmluZWRTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG5cbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlcygpO1xuICAgICAgICB2YXIgaXNPcGVuID0gdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuXG4gICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWU7XG4gICAgICAgIHZhciBsYWJlbCA9IHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWU7XG5cbiAgICAgICAgdmFyIGljb25VSSA9IG51bGw7XG4gICAgICAgIHZhciBzZWxlY3RJY29uVUkgPSBudWxsO1xuXG5cdCAgICAvKioqIFNlbGVjdCBJY29uICoqKiovXG5cblx0ICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5zZWxlY3Rpb25UeXBlLnN0YXRlKVxuXHQgICAge1xuXHRcdCAgICB2YXIgc2VsZWN0SWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRTZWxlY3RJY29uKHRoaXMuc2V0dGluZ3Muc2VsZWN0LnZhbHVlKTtcblx0XHQgICAgc2VsZWN0SWNvblVJID0gPHNwYW4gb25DbGljaz17dGhpcy5zZWxlY3RDbGlja0hhbmRsZXJ9PiZuYnNwOzxpIGNsYXNzTmFtZT17c2VsZWN0SWNvbn0vPiZuYnNwOzwvc3Bhbj5cblx0ICAgIH1cblxuXHQgICAgLyoqKiBMYWJlbCAqKioqL1xuXHQgICAgXG5cdCAgICB2YXIgbGFiZWxMYW5nID0gdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlID8gV2VhdmUubGFuZyhsYWJlbCkgOiBsYWJlbDtcblx0ICAgIFxuXG4gICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApIC8vZm9sZGVyIG1vZGVcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqKiBOb2RlIEljb24gKioqKi9cblxuXHRcdFx0aWNvblVJID0gdGhpcy5nZXRJY29uVUkoXCJicmFuY2hcIixpY29uTmFtZSk7XG5cbiAgICAgICAgICAgIC8qKiogTm9kZSBVSSAqKioqL1xuXG4gICAgICAgICAgICB2YXIgbm9kZVN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmKGRvbURlZmluZWRTdHlsZSlcblx0ICAgICAgICAgICAgU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMobm9kZVN0eWxlLGRvbURlZmluZWRTdHlsZSx0cnVlKTsvL3RoaXMgaGFwcGVucyBmb3Igcm9vdE5vZGVcbiAgICAgICAgICAgIGlmKCFub2RlU3R5bGUuZGlzcGxheSlcbiAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgbm9kZVN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbnRyb2xOYW1lID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZvbGRlckljb24oaXNPcGVuKTtcblxuICAgICAgICAgICAgdmFyIG5vZGVVSSA9IDxkaXYgc3R5bGU9e25vZGVTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9eyB7ZGlzcGxheTpcImZsZXhcIixmbGV4OlwiMVwiICxmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwifSB9ID5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0SWNvblVJfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5ub2RlQ2xpY2tIYW5kbGVyfT4mbmJzcDt7bGFiZWxMYW5nfSZuYnNwOzwvc3Bhbj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLm5vZGVDbGlja0hhbmRsZXJ9IHN0eWxlPXsge2ZsZXg6XCIxXCJ9IH0+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub3BlbkNsaWNrSGFuZGxlcn0+PGkgY2xhc3NOYW1lPXtjb250cm9sTmFtZX0+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj47XG5cblxuICAgICAgICAgICAgLyoqKiBOb2RlIExpc3QgKioqKi9cblxuICAgICAgICAgICAgbGV0IGJyYW5jaFN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmJyYW5jaFN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgdmFyIGxpc3RTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRMaXN0U3R5bGUoKTtcbiAgICAgICAgICAgIGxpc3RTdHlsZS5saXN0U3R5bGVUeXBlID0gXCJub25lXCI7XG5cdCAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlKXtcblx0XHQgICAgICAgIGxpc3RTdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcuc3RhdGU7XG5cdFx0ICAgICAgICBsaXN0U3R5bGUucGFkZGluZ0xlZnQgPSAwO1xuXHQgICAgICAgIH1lbHNle1xuXHRcdCAgICAgICAgbGlzdFN0eWxlLnBhZGRpbmdMZWZ0ID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnN0YXRlO1xuXHQgICAgICAgIH1cblxuXG4gICAgICAgICAgICB2YXIgbGV2ZWwgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZW5hYmxlTWVudU1vZGVGcm9tTGV2ZWwuc3RhdGU7XG4gICAgICAgICAgICB2YXIgcmVmQ2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgcmVuZGVyTm9kZUxpc3QgPSBpc09wZW47XG5cbiAgICAgICAgICAgIGlmKGxldmVsICYmICFpc05hTihsZXZlbCkgJiYgdGhpcy5wcm9wcy5sZXZlbCA+PSBsZXZlbCApIC8vIG1lbnUgbW9kZSBzdHlsZSBSZW5kZXJpbmdcbiAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgaWYocmVuZGVyTm9kZUxpc3QpIC8vIG92ZXJyaWRlIGlmIGlzT3BlbiBpcyB0cnVlXG5cdCAgICAgICAgICAgICAgICByZW5kZXJOb2RlTGlzdCA9IHRoaXMuc3RhdGUuc2l6ZSA/IHRydWUgOmZhbHNlO1xuXHQgICAgICAgICAgICByZWZDYWxsYmFjayA9IHRoaXMubm9kZUxpc3RSZWZDYWxsYmFjaztcblx0ICAgICAgICAgICAgYnJhbmNoU3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdCAgICAgICAgICAgIGxpc3RTdHlsZS5wb3NpdGlvbiA9XCJhYnNvbHV0ZVwiO1xuXHQgICAgICAgICAgICBsaXN0U3R5bGUuekluZGV4ID0gMTtcblx0ICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlKXtcblx0XHQgICAgICAgICAgICBsaXN0U3R5bGUucmlnaHQgPSB0aGlzLnN0YXRlLnNpemUgPyB0aGlzLnN0YXRlLnNpemUgOiAwO1xuXHQgICAgICAgICAgICB9ZWxzZXtcblx0XHQgICAgICAgICAgICBsaXN0U3R5bGUubGVmdCA9IHRoaXMuc3RhdGUuc2l6ZSA/IHRoaXMuc3RhdGUuc2l6ZSA6IDA7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBsaXN0U3R5bGUudG9wID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG5vZGVMaXN0VUkgPSByZW5kZXJOb2RlTGlzdCA/IHRoaXMucmVuZGVyQ2hpbGRyZW4oKSA6ICBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17YnJhbmNoU3R5bGV9IHJlZj17cmVmQ2FsbGJhY2t9ID5cblx0XHRcdCAgICAgICAgICAgIHtub2RlVUl9XG5cdFx0XHQgICAgICAgICAgICA8dWwgIHN0eWxlPXtsaXN0U3R5bGV9ID5cblx0XHRcdFx0ICAgICAgICAgICAge25vZGVMaXN0VUl9XG5cdFx0XHQgICAgICAgICAgICA8L3VsPlxuXHRcdCAgICAgICAgICAgIDwvZGl2PjtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgLy9sZWFmXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEsaXNPcGVuKTtcblxuICAgICAgICAgICAgdmFyIGxlYWZTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRMZWFmU3R5bGUoaXNPcGVuLHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlKTtcblx0ICAgICAgICBpZighbGVhZlN0eWxlLmRpc3BsYXkpXG5cdFx0ICAgICAgICBsZWFmU3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG5cdCAgICAgICAgaWNvblVJID0gdGhpcy5nZXRJY29uVUkoXCJsZWFmXCIsaWNvbk5hbWUpXG5cbiAgICAgICAgICAgIHJldHVybiA8bGkgc3R5bGU9e2xlYWZTdHlsZX0gb25DbGljaz17dGhpcy5sZWFmQ2xpY2tIYW5kbGVyfT5cblx0ICAgICAgICAgICAgICAgICAgICB7c2VsZWN0SWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2ICBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleDpcIjFcIixmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwifX0+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDt7bGFiZWxMYW5nfSZuYnNwOzwvc3Bhbj5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXsge2ZsZXg6XCIxXCJ9IH0+Jm5ic3A7PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbn1cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==