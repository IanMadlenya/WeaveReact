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
			this.props.treeConfig.changeActiveNode(this.settings, "select");
			if (this.props.onChange) this.props.onChange.call(this, this.props.data, this.settings);
		}
	}, {
		key: 'openClickHandler',
		value: function openClickHandler() {
			this.props.treeConfig.changeActiveNode(this.settings, "open");
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
						selectIconUI,
						iconUI,
						_react2.default.createElement(
							'div',
							{ style: { display: "flex", flex: "1", flexDirection: "inherit" }, onClick: this.openClickHandler },
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
						{ style: leafStyle },
						selectIconUI,
						iconUI,
						_react2.default.createElement(
							'div',
							{ onClick: this.openClickHandler, style: { display: "flex", flex: "1", flexDirection: "inherit" } },
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
//# sourceMappingURL=data:application/json;base64,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SyxjQUFMLEVBQWpCLEdBQTBDLElBQTFDLENBbEVyQjs7QUFvRUksWUFBTzs7UUFBSyxPQUFPLFdBQVAsRUFBb0IsS0FBSyxXQUFMLEVBQXpCO01BQ0gsTUFERztNQUVKOztTQUFLLE9BQU8sU0FBUCxFQUFMO09BQ0UsVUFERjtPQUZJO01BQVAsQ0FwRUo7S0FEQTtBQThFQTtBQUNJLFNBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFdBQXRCLENBQWtDLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBZ0IsTUFBbEQsQ0FBWCxDQURSOztBQUdJLFNBQUksWUFBWSxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFlBQXRCLENBQW1DLE1BQW5DLEVBQTBDLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsQ0FBdEQsQ0FIUjtBQUlDLFNBQUcsQ0FBQyxVQUFVLE9BQVYsRUFBa0IsVUFBVSxPQUFWLEdBQW9CLE1BQXBCLENBQXRCOztBQUVBLGNBQVMsS0FBSyxTQUFMLENBQWUsTUFBZixFQUFzQixRQUF0QixDQUFULENBTkQ7O0FBUUksWUFBTzs7UUFBSSxPQUFPLFNBQVAsRUFBSjtNQUNHLFlBREg7TUFFTSxNQUZOO01BR0U7O1NBQUssU0FBUyxLQUFLLGdCQUFMLEVBQXVCLE9BQU8sRUFBQyxTQUFRLE1BQVIsRUFBZSxNQUFLLEdBQUwsRUFBUyxlQUFjLFNBQWQsRUFBaEMsRUFBckM7T0FDQzs7OztRQUFhLFNBQWI7O1FBREQ7T0FFQzs7VUFBTSxPQUFRLEVBQUMsTUFBSyxHQUFMLEVBQVQsRUFBTjs7UUFGRDtPQUdDLHFDQUFHLFdBQVcsUUFBWCxFQUFILENBSEQ7T0FIRjtNQUFQLENBUko7S0E5RUE7Ozs7UUEzT0Y7OztBQWlWTiwyQkFBaUIsMEJBQWpCLENBQTRDLHVCQUE1QyxFQUFvRSxJQUFwRTtrQkFDZSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcblxuXG5jbGFzcyBOb2RlIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpXG4gICAge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cblx0ICAgIHRoaXMuc2VsZWN0Q2xpY2tIYW5kbGVyID0gdGhpcy5zZWxlY3RDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMub3BlbkNsaWNrSGFuZGxlciA9IHRoaXMub3BlbkNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXHQgICAgdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrID0gdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUgPSB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzID0gdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLmdldEljb25VSSA9IHRoaXMuZ2V0SWNvblVJLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IGZhbHNlO1xuXHQgICAgdGhpcy5ub2RlTGlzdEVsZW1lbnQgPSBudWxsO1xuXG5cdCAgICBpZih0aGlzLnByb3BzLmRhdGEpXG5cdCAgICB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKTtcbiAgICAgICAgfVxuXG5cdCAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuXG5cblx0ICAgIHRoaXMuc3RhdGUgPSB7XG5cdFx0ICAgIHNpemU6bnVsbFxuXHQgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpXG4gICAge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IG5leHRQcm9wcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKG5leHRQcm9wcy5kYXRhLG5leHRQcm9wcy5sYWJlbCxuZXh0UHJvcHMubm9kZXMsbmV4dFByb3BzLmljb24pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSBcbiAgICB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcblx0ICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcbiAgICB9XG5cblxuXG4gICAgc2VsZWN0Q2xpY2tIYW5kbGVyKClcbiAgICB7XG5cdCAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzLFwic2VsZWN0XCIpO1xuXHQgICAgaWYodGhpcy5wcm9wcy5vbkNoYW5nZSlcblx0XHQgICAgdGhpcy5wcm9wcy5vbkNoYW5nZS5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuICAgIH07XG5cblx0b3BlbkNsaWNrSGFuZGxlcigpe1xuXHRcdHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MsXCJvcGVuXCIpO1xuXHRcdGlmKHRoaXMucHJvcHMub25DbGljaylcblx0XHRcdHRoaXMucHJvcHMub25DbGljay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuXHR9O1xuXG5cbiAgICBjcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKGRhdGEsbGFiZWwsbm9kZXMsaWNvbilcbiAgICB7XG4gICAgICAgIHZhciBsYWJlbCA9IGxhYmVsP2xhYmVsOnRoaXMucHJvcHMubGFiZWw7XG4gICAgICAgIHZhciBub2RlcyA9IG5vZGVzP25vZGVzOnRoaXMucHJvcHMubm9kZXM7XG4gICAgICAgIHZhciBpY29uID0gaWNvbj9pY29uOnRoaXMucHJvcHMuaWNvbjtcbiAgICAgICAgaWYoZGF0YSl7IC8vIGNhbGxpbmcgd2l0aCBkYXRhIGFyZ3VtZW50cyBpbmRpY2F0ZXMgZGF0YSBpcyBjaGFuZ2VkIHNvIHdpcGUgdGhlIHNlc3Npb24gc3RhdGVcbiAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2V0KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvL3RvLWRvIG9ubHkgcmVxdWlyZWQgZm9yIHJvb3Rub2RlXG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uKTtcblxuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3Iobm9kZXMpO1xuICAgICAgICBpZih0cmVlTm9kZXMgJiYgdHJlZU5vZGVzLmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRyZWVOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChcIm5vZGVcIiArIGksIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcubGFiZWwuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCx0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcuaWNvbk5hbWUuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uLHRyZWVOb2Rlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldENoaWxkcmVuU2Vzc2lvblZhbHVlcygpXG4gICAge1xuXHQgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuLnN0YXRlKVxuXHQgICAge1xuXHRcdCAgICByZXR1cm5cblx0ICAgIH1cblx0ICAgIGVsc2Vcblx0ICAgIHtcblx0XHQgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuZWRDaGlsZClcblx0XHQgICAge1xuXHRcdFx0ICAgIHRoaXMuc2V0dGluZ3Mub3BlbmVkQ2hpbGQub3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdCAgICB9XG4gICAgICAgIGlmKCF0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKVxuICAgICAgICB9XG4gICAgICAgIHZhciBkZWZhdWx0Tm9kZXMgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuc3RhdGU7XG4gICAgICAgIGlmKGRlZmF1bHROb2RlcyAmJiBkZWZhdWx0Tm9kZXMubGVuZ3RoID4gMCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgbm9kZUNvbmZpZ3MubWFwKCAobm9kZUNvbmZpZyxpbmRleCk9Pntcblx0ICAgICAgICAgICAgbm9kZUNvbmZpZy5zZWxlY3QudmFsdWUgPSBkZWZhdWx0Tm9kZXMuaW5kZXhPZihub2RlQ29uZmlnLmxhYmVsLnN0YXRlKSAhPSAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwidHJlZUNvbmZpZ1wiLHRoaXMucHJvcHMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInBhcmVudENvbmZpZ1wiLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJsYWJlbFwiLHRoaXMucHJvcHMubGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJub2Rlc1wiLHRoaXMucHJvcHMubm9kZXMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJpY29uXCIsdGhpcy5wcm9wcy5pY29uKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwicmV2ZXJzZUxheW91dFwiLHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9uQ2xpY2tcIix0aGlzLnByb3BzLm9uQ2xpY2spO1xuXHQgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdGlvblR5cGUuc3RhdGUpXG5cdCAgICB7XG5cdFx0ICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9uQ2hhbmdlXCIsdGhpcy5wcm9wcy5vbkNoYW5nZSk7XG5cdCAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImxldmVsXCIsdGhpcy5wcm9wcy5sZXZlbCArIDEpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJkYXRhXCIsbnVsbCwgbnVsbCx0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcih0aGlzLnByb3BzLm5vZGVzKSApO1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cblxuXG5cdG5vZGVMaXN0UmVmQ2FsbGJhY2soZWxlKVxuXHR7XG5cdFx0aWYoZWxlKVxuXHRcdHtcblx0XHRcdHRoaXMubm9kZUxpc3RFbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUoZWxlKTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc2V0dGluZ3MuZGF0YS5sYWJlbCwgXCJtb3VudGVkXCIpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5ub2RlTGlzdEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zZXR0aW5ncy5kYXRhLmxhYmVsLCBcInVuTW91bnRlZFwiKTtcblx0XHRcdFxuXHRcdH1cblx0fTtcblx0XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpXG5cdHtcblx0XHRpZih0aGlzLm5vZGVMaXN0RWxlbWVudClcblx0XHR7XG5cdFx0XHR2YXIgbm9kZUxpc3RSZWN0ID0gdGhpcy5ub2RlTGlzdEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHR2YXIgbmV3U2l6ZSA9IG5vZGVMaXN0UmVjdC53aWR0aDtcblxuXHRcdFx0aWYodGhpcy5zdGF0ZS5zaXplICE9IG5ld1NpemUpXG5cdFx0XHR7XG5cblxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzaXplOm5ld1NpemVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpe1xuXHRcdGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIk5vZGUgLSBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG5cdFx0aWYobmV4dFN0YXRlLnNpemUgIT09IHRoaXMuc3RhdGUuc2l6ZSl7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRnZXRJY29uVUkodHlwZSxpY29uTmFtZSlcblx0e1xuXHRcdGxldCBpY29uU3R5bGVPYmogPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0U3R5bGVGb3JJY29uVHlwZSh0eXBlLGljb25OYW1lKTtcblx0XHRsZXQgaWNvblVJID0gbnVsbDtcblx0XHRpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGggPiAwKVxuXHRcdHtcblx0XHRcdGlmKGljb25OYW1lLmluZGV4T2YoXCIvXCIpID09IC0xKVxuXHRcdFx0eyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcblx0XHRcdFx0aWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRpY29uVUkgPSA8aW1nIHN0eWxlID0ge2ljb25TdHlsZU9ian0gc3JjPXtpY29uTmFtZX0vPlxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaWNvblVJO1xuXHR9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpXG5cdCAgICAgICAgY29uc29sZS5sb2coXCJOb2RlIC0gcmVuZGVyXCIpO1xuXG5cblx0ICAgIGlmKCF0aGlzLnByb3BzLmRhdGEpIC8vIG5vIGRhdGEgcmV0dW4gZW1wdHkgZGl2XG5cdCAgICAgICByZXR1cm4gPGRpdi8+O1xuXG5cdCAgICB2YXIgZG9tRGVmaW5lZFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcblxuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgIHZhciBpc09wZW4gPSB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG5cbiAgICAgICAgdmFyIGljb25OYW1lID0gdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZTtcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcblxuICAgICAgICB2YXIgaWNvblVJID0gbnVsbDtcbiAgICAgICAgdmFyIHNlbGVjdEljb25VSSA9IG51bGw7XG5cblx0ICAgIC8qKiogU2VsZWN0IEljb24gKioqKi9cblxuXHQgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdGlvblR5cGUuc3RhdGUpXG5cdCAgICB7XG5cdFx0ICAgIHZhciBzZWxlY3RJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldFNlbGVjdEljb24odGhpcy5zZXR0aW5ncy5zZWxlY3QudmFsdWUpO1xuXHRcdCAgICBzZWxlY3RJY29uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnNlbGVjdENsaWNrSGFuZGxlcn0+Jm5ic3A7PGkgY2xhc3NOYW1lPXtzZWxlY3RJY29ufS8+Jm5ic3A7PC9zcGFuPlxuXHQgICAgfVxuXG5cdCAgICAvKioqIExhYmVsICoqKiovXG5cdCAgICBcblx0ICAgIHZhciBsYWJlbExhbmcgPSB0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUgPyBXZWF2ZS5sYW5nKGxhYmVsKSA6IGxhYmVsO1xuXHQgICAgXG5cbiAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCkgLy9mb2xkZXIgbW9kZVxuICAgICAgICB7XG4gICAgICAgICAgICAvKioqIE5vZGUgSWNvbiAqKioqL1xuXG5cdFx0XHRpY29uVUkgPSB0aGlzLmdldEljb25VSShcImJyYW5jaFwiLGljb25OYW1lKVxuXG5cblxuICAgICAgICAgICAgLyoqKiBOb2RlIFVJICoqKiovXG5cbiAgICAgICAgICAgIHZhciBub2RlU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgaWYoZG9tRGVmaW5lZFN0eWxlKVxuXHQgICAgICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhub2RlU3R5bGUsZG9tRGVmaW5lZFN0eWxlLHRydWUpOy8vdGhpcyBoYXBwZW5zIGZvciByb290Tm9kZVxuICAgICAgICAgICAgaWYoIW5vZGVTdHlsZS5kaXNwbGF5KXtcblx0ICAgICAgICAgICAgbm9kZVN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbnRyb2xOYW1lID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZvbGRlckljb24oaXNPcGVuKTtcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHZhciBub2RlVUkgPSA8ZGl2IHN0eWxlPXtub2RlU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0SWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXsge2Rpc3BsYXk6XCJmbGV4XCIsZmxleDpcIjFcIiAsZmxleERpcmVjdGlvbjpcImluaGVyaXRcIn0gfSBvbkNsaWNrPXt0aGlzLm9wZW5DbGlja0hhbmRsZXJ9PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwO3tsYWJlbExhbmd9Jm5ic3A7PC9zcGFuPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXsge2ZsZXg6XCIxXCJ9IH0+Jm5ic3A7PC9zcGFuPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y29udHJvbE5hbWV9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+O1xuXG5cbiAgICAgICAgICAgIC8qKiogTm9kZSBMaXN0ICoqKiovXG5cbiAgICAgICAgICAgIGxldCBicmFuY2hTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5icmFuY2hTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgIHZhciBsaXN0U3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0TGlzdFN0eWxlKCk7XG4gICAgICAgICAgICBsaXN0U3R5bGUubGlzdFN0eWxlVHlwZSA9IFwibm9uZVwiO1xuXHQgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSl7XG5cdFx0ICAgICAgICBsaXN0U3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnN0YXRlO1xuXHRcdCAgICAgICAgbGlzdFN0eWxlLnBhZGRpbmdMZWZ0ID0gMDtcblx0ICAgICAgICB9ZWxzZXtcblx0XHQgICAgICAgIGxpc3RTdHlsZS5wYWRkaW5nTGVmdCA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy5zdGF0ZTtcblx0ICAgICAgICB9XG5cblxuICAgICAgICAgICAgdmFyIGxldmVsID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmVuYWJsZU1lbnVNb2RlRnJvbUxldmVsLnN0YXRlO1xuICAgICAgICAgICAgdmFyIHJlZkNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICAgICAgbGV0IHJlbmRlck5vZGVMaXN0ID0gaXNPcGVuO1xuXG4gICAgICAgICAgICBpZihsZXZlbCAmJiAhaXNOYU4obGV2ZWwpICYmIHRoaXMucHJvcHMubGV2ZWwgPj0gbGV2ZWwgKSAvLyBtZW51IG1vZGUgc3R5bGUgUmVuZGVyaW5nXG4gICAgICAgICAgICB7XG5cdCAgICAgICAgICAgIGlmKHJlbmRlck5vZGVMaXN0KSAvLyBvdmVycmlkZSBpZiBpc09wZW4gaXMgdHJ1ZVxuXHQgICAgICAgICAgICAgICAgcmVuZGVyTm9kZUxpc3QgPSB0aGlzLnN0YXRlLnNpemUgPyB0cnVlIDpmYWxzZTtcblx0ICAgICAgICAgICAgcmVmQ2FsbGJhY2sgPSB0aGlzLm5vZGVMaXN0UmVmQ2FsbGJhY2s7XG5cdCAgICAgICAgICAgIGJyYW5jaFN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHQgICAgICAgICAgICBsaXN0U3R5bGUucG9zaXRpb24gPVwiYWJzb2x1dGVcIjtcblx0ICAgICAgICAgICAgbGlzdFN0eWxlLnpJbmRleCA9IDE7XG5cdCAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSl7XG5cdFx0ICAgICAgICAgICAgbGlzdFN0eWxlLnJpZ2h0ID0gdGhpcy5zdGF0ZS5zaXplID8gdGhpcy5zdGF0ZS5zaXplIDogMDtcblx0ICAgICAgICAgICAgfWVsc2V7XG5cdFx0ICAgICAgICAgICAgbGlzdFN0eWxlLmxlZnQgPSB0aGlzLnN0YXRlLnNpemUgPyB0aGlzLnN0YXRlLnNpemUgOiAwO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgbGlzdFN0eWxlLnRvcCA9IDA7XG4gICAgICAgICAgICB9XG5cblx0ICAgICAgICBjb25zb2xlLmxvZyhsYWJlbCAscmVuZGVyTm9kZUxpc3QsaXNPcGVuKTtcbiAgICAgICAgICAgIHZhciBub2RlTGlzdFVJID0gcmVuZGVyTm9kZUxpc3QgPyB0aGlzLnJlbmRlckNoaWxkcmVuKCkgOiAgbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e2JyYW5jaFN0eWxlfSByZWY9e3JlZkNhbGxiYWNrfSA+XG5cdFx0XHQgICAgICAgICAgICB7bm9kZVVJfVxuXHRcdFx0ICAgICAgICAgICAgPHVsICBzdHlsZT17bGlzdFN0eWxlfSA+XG5cdFx0XHRcdCAgICAgICAgICAgIHtub2RlTGlzdFVJfVxuXHRcdFx0ICAgICAgICAgICAgPC91bD5cblx0XHQgICAgICAgICAgICA8L2Rpdj47XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIC8vbGVhZlxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZmlsZUljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0RmlsZUljb24odGhpcy5wcm9wcy5kYXRhLGlzT3Blbik7XG5cbiAgICAgICAgICAgIHZhciBsZWFmU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0TGVhZlN0eWxlKGlzT3Blbix0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSk7XG5cdCAgICAgICAgaWYoIWxlYWZTdHlsZS5kaXNwbGF5KWxlYWZTdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cblx0ICAgICAgICBpY29uVUkgPSB0aGlzLmdldEljb25VSShcImxlYWZcIixpY29uTmFtZSlcblxuICAgICAgICAgICAgcmV0dXJuIDxsaSBzdHlsZT17bGVhZlN0eWxlfSA+XG5cdCAgICAgICAgICAgICAgICAgICAge3NlbGVjdEljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLm9wZW5DbGlja0hhbmRsZXJ9IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixmbGV4OlwiMVwiLGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCJ9fT5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwO3tsYWJlbExhbmd9Jm5ic3A7PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9eyB7ZmxleDpcIjFcIn0gfT4mbmJzcDs8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICB9XG5cblxuICAgIH1cblxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19