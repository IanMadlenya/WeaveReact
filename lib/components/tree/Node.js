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

    _this.isSessionStateCreatedForTreeData = false;
    _this.nodeListElement = null;

    if (_this.props.data) {
      _this.settings.data = _this.props.data;
      _this.createSessionStateForTree();
    }

    _this.settings.open.addGroupedCallback(_this, _this.setChildrenSessionValues);
    _this.props.treeConfig.defaultSelectedNodes.addGroupedCallback(_this, _this.setChildrenSessionValues);

    _this.state = {
      left: null
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
          nodeConfig.select.value = defaultNodes.indexOf(odeConfig.label.state) != -1;
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
        var newLeft = this.settings.reverseLayout.state ? -nodeListRect.width : nodeListRect.width;
        if (this.state.left != newLeft) {
          console.log(this.settings.data.label, "updated", this.state.left, newLeft);
          this.setState({
            left: newLeft
          });
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (_ComponentManager2.default.debug) console.log("Node - shouldComponentUpdate");
      if (nextState.left !== this.state.left) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      if (_ComponentManager2.default.debug) console.log("Node - render");

      console.log(this.settings.data.label, "render", this.state.left);

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
          iconUI = this.props.treeConfig.getStyleForIconType("branch", iconName);

          /*** Node UI ****/

          var nodeStyle = this.props.treeConfig.nodeStyle.state;
          if (domDefinedStyle) _Style2.default.mergeStyleObjects(nodeStyle, domDefinedStyle, true); //this happens for rootNode
          nodeStyle.display = "flex";
          nodeStyle.flexDirection = "row";
          nodeStyle.alignItems = "center";

          var controlName = this.props.treeConfig.getFolderIcon(isOpen);

          var nodeUI = _react2.default.createElement(
            'div',
            { style: nodeStyle },
            selectIconUI,
            iconUI,
            _react2.default.createElement(
              'div',
              { style: { display: "flex", flex: "1" }, onClick: this.openClickHandler },
              _react2.default.createElement(
                'span',
                { style: { flex: "1" } },
                ' ',
                labelLang
              ),
              _react2.default.createElement('i', { className: controlName })
            )
          );

          /*** Node List ****/

          var branchStyle = this.props.treeConfig.branchStyle.state;
          var listStyle = this.props.treeConfig.getListStyle();
          listStyle.listStyleType = "none";
          listStyle.paddingLeft = this.props.treeConfig.nodePadding.state;

          var level = this.props.treeConfig.enableMenuModeFromLevel.state;
          var refCallback = null;

          var renderNodeList = isOpen;

          if (level && !isNaN(level) && this.props.level >= level) // menu mode style Rendering
            {
              if (renderNodeList) // override if isOpen is true
                renderNodeList = this.state.left ? true : false;
              refCallback = this.nodeListRefCallback;
              branchStyle.position = "relative";
              listStyle.position = "absolute";
              listStyle.zIndex = 1;
              listStyle.left = this.state.left;
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
          leafStyle.display = "flex";
          leafStyle.flexDirection = "row";
          leafStyle.alignItems = "center";

          iconUI = this.props.treeConfig.getStyleForIconType("leaf", iconName);

          return _react2.default.createElement(
            'li',
            { style: leafStyle },
            selectIconUI,
            iconUI,
            _react2.default.createElement(
              'div',
              { onClick: this.openClickHandler, style: { display: "flex", flex: "1" } },
              _react2.default.createElement(
                'span',
                { style: { flex: "1" } },
                ' ',
                labelLang
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
//# sourceMappingURL=data:application/json;base64,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LFVBQVgsQ0FBc0IsbUJBQXRCLENBQTBDLE1BQTFDLEVBQWlELFFBQWpELENBQVQsQ0FSRDs7QUFVSSxpQkFBTzs7Y0FBSSxPQUFPLFNBQVAsRUFBSjtZQUNHLFlBREg7WUFFTSxNQUZOO1lBR0U7O2dCQUFLLFNBQVMsS0FBSyxnQkFBTCxFQUF1QixPQUFPLEVBQUMsU0FBUSxNQUFSLEVBQWUsTUFBSyxHQUFMLEVBQXZCLEVBQXJDO2NBQ0M7O2tCQUFNLE9BQU8sRUFBQyxNQUFLLEdBQUwsRUFBUixFQUFOOztnQkFBZ0MsU0FBaEM7ZUFERDtjQUVDLHFDQUFHLFdBQVcsUUFBWCxFQUFILENBRkQ7YUFIRjtXQUFQLENBVko7U0FoRUE7Ozs7U0F4TkY7OztBQWlUTiwyQkFBaUIsMEJBQWpCLENBQTRDLHVCQUE1QyxFQUFvRSxJQUFwRTtrQkFDZSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcblxuXG5jbGFzcyBOb2RlIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpXG4gICAge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cblx0ICAgIHRoaXMuc2VsZWN0Q2xpY2tIYW5kbGVyID0gdGhpcy5zZWxlY3RDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMub3BlbkNsaWNrSGFuZGxlciA9IHRoaXMub3BlbkNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXHQgICAgdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrID0gdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrLmJpbmQodGhpcyk7XG5cdCAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUgPSB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzID0gdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMuYmluZCh0aGlzKTtcblx0ICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IGZhbHNlO1xuXHQgICAgdGhpcy5ub2RlTGlzdEVsZW1lbnQgPSBudWxsO1xuXG5cdCAgICBpZih0aGlzLnByb3BzLmRhdGEpXG5cdCAgICB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKTtcbiAgICAgICAgfVxuXG5cdCAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuXG5cblx0ICAgIHRoaXMuc3RhdGUgPSB7XG5cdFx0ICAgIGxlZnQ6bnVsbFxuXHQgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpXG4gICAge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IG5leHRQcm9wcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKG5leHRQcm9wcy5kYXRhLG5leHRQcm9wcy5sYWJlbCxuZXh0UHJvcHMubm9kZXMsbmV4dFByb3BzLmljb24pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSBcbiAgICB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcblx0ICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcbiAgICB9XG5cblxuXG4gICAgc2VsZWN0Q2xpY2tIYW5kbGVyKClcbiAgICB7XG5cdCAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzLFwic2VsZWN0XCIpO1xuXHQgICAgaWYodGhpcy5wcm9wcy5vbkNoYW5nZSlcblx0XHQgICAgdGhpcy5wcm9wcy5vbkNoYW5nZS5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuICAgIH07XG5cblx0b3BlbkNsaWNrSGFuZGxlcigpe1xuXHRcdHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MsXCJvcGVuXCIpO1xuXHRcdGlmKHRoaXMucHJvcHMub25DbGljaylcblx0XHRcdHRoaXMucHJvcHMub25DbGljay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuXHR9O1xuXG5cbiAgICBjcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKGRhdGEsbGFiZWwsbm9kZXMsaWNvbilcbiAgICB7XG4gICAgICAgIHZhciBsYWJlbCA9IGxhYmVsP2xhYmVsOnRoaXMucHJvcHMubGFiZWw7XG4gICAgICAgIHZhciBub2RlcyA9IG5vZGVzP25vZGVzOnRoaXMucHJvcHMubm9kZXM7XG4gICAgICAgIHZhciBpY29uID0gaWNvbj9pY29uOnRoaXMucHJvcHMuaWNvbjtcbiAgICAgICAgaWYoZGF0YSl7IC8vIGNhbGxpbmcgd2l0aCBkYXRhIGFyZ3VtZW50cyBpbmRpY2F0ZXMgZGF0YSBpcyBjaGFuZ2VkIHNvIHdpcGUgdGhlIHNlc3Npb24gc3RhdGVcbiAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2V0KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvL3RvLWRvIG9ubHkgcmVxdWlyZWQgZm9yIHJvb3Rub2RlXG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uKTtcblxuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3Iobm9kZXMpO1xuICAgICAgICBpZih0cmVlTm9kZXMgJiYgdHJlZU5vZGVzLmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRyZWVOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChcIm5vZGVcIiArIGksIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcubGFiZWwuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCx0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcuaWNvbk5hbWUuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uLHRyZWVOb2Rlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldENoaWxkcmVuU2Vzc2lvblZhbHVlcygpXG4gICAge1xuXHQgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuLnN0YXRlKVxuXHQgICAge1xuXHRcdCAgICByZXR1cm5cblx0ICAgIH1cblx0ICAgIGVsc2Vcblx0ICAgIHtcblx0XHQgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuZWRDaGlsZClcblx0XHQgICAge1xuXHRcdFx0ICAgIHRoaXMuc2V0dGluZ3Mub3BlbmVkQ2hpbGQub3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdCAgICB9XG4gICAgICAgIGlmKCF0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKVxuICAgICAgICB9XG4gICAgICAgIHZhciBkZWZhdWx0Tm9kZXMgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuc3RhdGU7XG4gICAgICAgIGlmKGRlZmF1bHROb2RlcyAmJiBkZWZhdWx0Tm9kZXMubGVuZ3RoID4gMCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgbm9kZUNvbmZpZ3MubWFwKCAobm9kZUNvbmZpZyxpbmRleCk9Pntcblx0ICAgICAgICAgICAgbm9kZUNvbmZpZy5zZWxlY3QudmFsdWUgPSBkZWZhdWx0Tm9kZXMuaW5kZXhPZihvZGVDb25maWcubGFiZWwuc3RhdGUpICE9IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJ0cmVlQ29uZmlnXCIsdGhpcy5wcm9wcy50cmVlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwicGFyZW50Q29uZmlnXCIsdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImxhYmVsXCIsdGhpcy5wcm9wcy5sYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm5vZGVzXCIsdGhpcy5wcm9wcy5ub2Rlcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImljb25cIix0aGlzLnByb3BzLmljb24pO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJyZXZlcnNlTGF5b3V0XCIsdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwib25DbGlja1wiLHRoaXMucHJvcHMub25DbGljayk7XG5cdCAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0aW9uVHlwZS5zdGF0ZSlcblx0ICAgIHtcblx0XHQgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwib25DaGFuZ2VcIix0aGlzLnByb3BzLm9uQ2hhbmdlKTtcblx0ICAgIH1cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibGV2ZWxcIix0aGlzLnByb3BzLmxldmVsICsgMSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImRhdGFcIixudWxsLCBudWxsLHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKHRoaXMucHJvcHMubm9kZXMpICk7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnJlbmRlckNoaWxkcmVuKHRoaXMpO1xuICAgIH1cblxuXG5cblx0bm9kZUxpc3RSZWZDYWxsYmFjayhlbGUpXG5cdHtcblx0XHRpZihlbGUpXG5cdFx0e1xuXHRcdFx0dGhpcy5ub2RlTGlzdEVsZW1lbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZShlbGUpO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zZXR0aW5ncy5kYXRhLmxhYmVsLCBcIm1vdW50ZWRcIik7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR0aGlzLm5vZGVMaXN0RWxlbWVudCA9IG51bGw7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNldHRpbmdzLmRhdGEubGFiZWwsIFwidW5Nb3VudGVkXCIpO1xuXHRcdFx0XG5cdFx0fVxuXHR9O1xuXHRcblx0Y29tcG9uZW50RGlkVXBkYXRlKClcblx0e1xuXHRcdGlmKHRoaXMubm9kZUxpc3RFbGVtZW50KVxuXHRcdHtcblx0XHRcdHZhciBub2RlTGlzdFJlY3QgPSB0aGlzLm5vZGVMaXN0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHZhciBuZXdMZWZ0ID0gdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlPyAtIG5vZGVMaXN0UmVjdC53aWR0aCA6IG5vZGVMaXN0UmVjdC53aWR0aDtcblx0XHRcdGlmKHRoaXMuc3RhdGUubGVmdCAhPSBcdG5ld0xlZnQpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc2V0dGluZ3MuZGF0YS5sYWJlbCwgXCJ1cGRhdGVkXCIsdGhpcy5zdGF0ZS5sZWZ0LG5ld0xlZnQpO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRsZWZ0Om5ld0xlZnRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpe1xuXHRcdGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpXG5cdFx0XHRjb25zb2xlLmxvZyhcIk5vZGUgLSBzaG91bGRDb21wb25lbnRVcGRhdGVcIik7XG5cdFx0aWYobmV4dFN0YXRlLmxlZnQgIT09IHRoaXMuc3RhdGUubGVmdCl7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKVxuXHQgICAgICAgIGNvbnNvbGUubG9nKFwiTm9kZSAtIHJlbmRlclwiKTtcblxuXHQgICAgY29uc29sZS5sb2codGhpcy5zZXR0aW5ncy5kYXRhLmxhYmVsLCBcInJlbmRlclwiLHRoaXMuc3RhdGUubGVmdCk7XG5cblx0ICAgIGlmKCF0aGlzLnByb3BzLmRhdGEpIC8vIG5vIGRhdGEgcmV0dW4gZW1wdHkgZGl2XG5cdCAgICAgICByZXR1cm4gPGRpdi8+O1xuXG5cdCAgICB2YXIgZG9tRGVmaW5lZFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcblxuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgIHZhciBpc09wZW4gPSB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG5cbiAgICAgICAgdmFyIGljb25OYW1lID0gdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZTtcbiAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcblxuICAgICAgICB2YXIgaWNvblVJID0gbnVsbDtcbiAgICAgICAgdmFyIHNlbGVjdEljb25VSSA9IG51bGw7XG5cblx0ICAgIC8qKiogU2VsZWN0IEljb24gKioqKi9cblxuXHQgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdGlvblR5cGUuc3RhdGUpXG5cdCAgICB7XG5cdFx0ICAgIHZhciBzZWxlY3RJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldFNlbGVjdEljb24odGhpcy5zZXR0aW5ncy5zZWxlY3QudmFsdWUpO1xuXHRcdCAgICBzZWxlY3RJY29uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnNlbGVjdENsaWNrSGFuZGxlcn0+Jm5ic3A7PGkgY2xhc3NOYW1lPXtzZWxlY3RJY29ufS8+Jm5ic3A7PC9zcGFuPlxuXHQgICAgfVxuXG5cdCAgICAvKioqIExhYmVsICoqKiovXG5cdCAgICBcblx0ICAgIHZhciBsYWJlbExhbmcgPSB0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUgPyBXZWF2ZS5sYW5nKGxhYmVsKSA6IGxhYmVsO1xuXHQgICAgXG5cbiAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCkgLy9mb2xkZXIgbW9kZVxuICAgICAgICB7XG4gICAgICAgICAgICAvKioqIE5vZGUgSWNvbiAqKioqL1xuXHRcdFx0IGljb25VSSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRTdHlsZUZvckljb25UeXBlKFwiYnJhbmNoXCIsaWNvbk5hbWUpO1xuXG5cbiAgICAgICAgICAgIC8qKiogTm9kZSBVSSAqKioqL1xuXG4gICAgICAgICAgICB2YXIgbm9kZVN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmKGRvbURlZmluZWRTdHlsZSlcblx0ICAgICAgICAgICAgU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMobm9kZVN0eWxlLGRvbURlZmluZWRTdHlsZSx0cnVlKTsvL3RoaXMgaGFwcGVucyBmb3Igcm9vdE5vZGVcbiAgICAgICAgICAgIG5vZGVTdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBub2RlU3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgICAgICBub2RlU3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG5cbiAgICAgICAgICAgIHZhciBjb250cm9sTmFtZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGb2xkZXJJY29uKGlzT3Blbik7XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgICB2YXIgbm9kZVVJID0gPGRpdiBzdHlsZT17bm9kZVN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdEljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17IHtkaXNwbGF5OlwiZmxleFwiLGZsZXg6XCIxXCJ9IH0gb25DbGljaz17dGhpcy5vcGVuQ2xpY2tIYW5kbGVyfT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17IHtmbGV4OlwiMVwifSB9PiZuYnNwO3tsYWJlbExhbmd9PC9zcGFuPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y29udHJvbE5hbWV9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+O1xuXG5cbiAgICAgICAgICAgIC8qKiogTm9kZSBMaXN0ICoqKiovXG5cbiAgICAgICAgICAgIGxldCBicmFuY2hTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5icmFuY2hTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgIHZhciBsaXN0U3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0TGlzdFN0eWxlKCk7XG4gICAgICAgICAgICBsaXN0U3R5bGUubGlzdFN0eWxlVHlwZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbGlzdFN0eWxlLnBhZGRpbmdMZWZ0ID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnN0YXRlO1xuXG4gICAgICAgICAgICB2YXIgbGV2ZWwgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZW5hYmxlTWVudU1vZGVGcm9tTGV2ZWwuc3RhdGU7XG4gICAgICAgICAgICB2YXIgcmVmQ2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgcmVuZGVyTm9kZUxpc3QgPSBpc09wZW47XG5cbiAgICAgICAgICAgIGlmKGxldmVsICYmICFpc05hTihsZXZlbCkgJiYgdGhpcy5wcm9wcy5sZXZlbCA+PSBsZXZlbCApIC8vIG1lbnUgbW9kZSBzdHlsZSBSZW5kZXJpbmdcbiAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgaWYocmVuZGVyTm9kZUxpc3QpIC8vIG92ZXJyaWRlIGlmIGlzT3BlbiBpcyB0cnVlXG5cdCAgICAgICAgICAgICAgICByZW5kZXJOb2RlTGlzdCA9IHRoaXMuc3RhdGUubGVmdCA/IHRydWUgOmZhbHNlO1xuXHQgICAgICAgICAgICByZWZDYWxsYmFjayA9IHRoaXMubm9kZUxpc3RSZWZDYWxsYmFjaztcblx0ICAgICAgICAgICAgYnJhbmNoU3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdCAgICAgICAgICAgIGxpc3RTdHlsZS5wb3NpdGlvbiA9XCJhYnNvbHV0ZVwiO1xuXHQgICAgICAgICAgICBsaXN0U3R5bGUuekluZGV4ID0gMTtcblx0ICAgICAgICAgICAgbGlzdFN0eWxlLmxlZnQgPSB0aGlzLnN0YXRlLmxlZnQ7XG5cdCAgICAgICAgICAgIGxpc3RTdHlsZS50b3AgPSAwO1xuICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgY29uc29sZS5sb2cobGFiZWwgLHJlbmRlck5vZGVMaXN0LGlzT3Blbik7XG4gICAgICAgICAgICB2YXIgbm9kZUxpc3RVSSA9IHJlbmRlck5vZGVMaXN0ID8gdGhpcy5yZW5kZXJDaGlsZHJlbigpIDogIG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXticmFuY2hTdHlsZX0gcmVmPXtyZWZDYWxsYmFja30gPlxuXHRcdFx0ICAgICAgICAgICAge25vZGVVSX1cblx0XHRcdCAgICAgICAgICAgIDx1bCAgc3R5bGU9e2xpc3RTdHlsZX0+XG5cdFx0XHRcdCAgICAgICAgICAgIHtub2RlTGlzdFVJfVxuXHRcdFx0ICAgICAgICAgICAgPC91bD5cblx0XHQgICAgICAgICAgICA8L2Rpdj47XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIC8vbGVhZlxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZmlsZUljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0RmlsZUljb24odGhpcy5wcm9wcy5kYXRhLGlzT3Blbik7XG5cbiAgICAgICAgICAgIHZhciBsZWFmU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0TGVhZlN0eWxlKGlzT3Blbix0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSk7XG5cdCAgICAgICAgbGVhZlN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0ICAgICAgICBsZWFmU3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG5cdCAgICAgICAgbGVhZlN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuXG5cdCAgICAgICAgaWNvblVJID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldFN0eWxlRm9ySWNvblR5cGUoXCJsZWFmXCIsaWNvbk5hbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gPGxpIHN0eWxlPXtsZWFmU3R5bGV9ID5cblx0ICAgICAgICAgICAgICAgICAgICB7c2VsZWN0SWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMub3BlbkNsaWNrSGFuZGxlcn0gc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGZsZXg6XCIxXCJ9fT5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19PiZuYnNwO3tsYWJlbExhbmd9PC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbn1cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==