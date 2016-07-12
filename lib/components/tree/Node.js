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

        _this.toggleOpen = _this.toggleOpen.bind(_this);
        _this.toggleSelect = _this.toggleSelect.bind(_this);
        _this.toggleSelectAll = _this.toggleSelectAll.bind(_this);
        _this.nodeListRefCallback = _this.nodeListRefCallback.bind(_this);

        _this.createSessionStateForTree = _this.createSessionStateForTree.bind(_this);
        _this.isSessionStateCreatedForTreeData = false;
        if (_this.props.data) {
            _this.settings.data = _this.props.data;
            _this.createSessionStateForTree();
        }
        _this.settings.open.addGroupedCallback(_this, _this.setChildrenSessionValues);
        _this.props.treeConfig.defaultSelectedNodes.addGroupedCallback(_this, _this.setChildrenSessionValues);

        _this.selectAll = _this.props.treeConfig.selectAll;
        _this.selectAll.addGroupedCallback(_this, _this.setChildrenSelectAllValues);

        _this.selectIdentifier = _this.settings.select.state ? "select" : _this.selectAll.state ? "selectAll" : "";

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
            this.selectAll.removeCallback(this, this.setChildrenSelectAllValues);
        }
    }, {
        key: 'toggleSelect',
        value: function toggleSelect() {
            this.selectIdentifier = "select";
            // selection allowed if its not selected or if its multiple selction mode
            // in single selection deselection is not allowed
            if (this.props.treeConfig.allowMultipleSelection.value || !this.settings.select.value) {
                this.settings.select.value = !this.settings.select.value;
                if (this.props.onSelectClick) this.props.onSelectClick.call(this, this.props.data, this.settings, this.selectAll);
                this.props.treeConfig.changeActiveNode(this.settings);
            }
            if (!this.props.treeConfig.allowMultipleSelection.value) {
                this.props.parentConfig.changeActiveChildNode(this.settings);
            }
        }
    }, {
        key: 'toggleOpen',
        value: function toggleOpen() {
            this.settings.open.value = !this.settings.open.value;
            if (this.props.onOpenClick) this.props.onOpenClick.call(this, this.props.data, this.settings);
            this.props.treeConfig.changeActiveNode(this.settings);
        }
    }, {
        key: 'toggleSelectAll',
        value: function toggleSelectAll() {
            this.selectIdentifier = "selectAll";
            // this trigger entire tree

            this.selectAll.state = !this.selectAll.state;
            if (this.props.onSelectAllClick) this.props.onSelectAllClick.call(this, this.props.data, this.settings, this.selectAll);
            //this.props.treeConfig.changeActiveNode(this.settings);
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
                    if (this.props.treeConfig.selectAll.state) {
                        nodeConfig.select.state = true;
                    }
                }
                this.settings.children.resumeCallbacks();
            }
            this.isSessionStateCreatedForTreeData = true;
        }
    }, {
        key: 'setChildrenSessionValues',
        value: function setChildrenSessionValues() {
            if (!this.settings.open.state) {
                return;
            }
            if (!this.isSessionStateCreatedForTreeData) {
                this.createSessionStateForTree();
            }
            var defaultNodes = this.props.treeConfig.defaultSelectedNodes.state;
            if (defaultNodes && defaultNodes.length > 0) {
                var nodeConfigs = this.settings.children.getObjects();
                nodeConfigs.map(function (nodeConfig, index) {
                    var nodeLabel = nodeConfig.label.state;
                    if (defaultNodes.indexOf(nodeLabel) != -1) {
                        nodeConfig.select.value = true;
                        nodeConfig.active.value = true;
                    } else {
                        nodeConfig.select.value = false;
                        nodeConfig.active.value = false;
                    }
                }.bind(this));
            }
        }
    }, {
        key: 'setChildrenSelectAllValues',
        value: function setChildrenSelectAllValues() {
            var nodeConfigs = this.settings.children.getObjects();
            nodeConfigs.map(function (nodeConfig, index) {
                nodeConfig.select.value = this.selectAll.state;
            }.bind(this));
            this.forceUpdate();
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
            this.settings.props.addChildProps("onOpenClick", this.props.onOpenClick);
            this.settings.props.addChildProps("onSelectClick", this.props.onSelectClick);
            this.settings.props.addChildProps("data", null, null, this.settings.getNodeValueFor(this.props.nodes));
            return _ComponentManager2.default.renderChildren(this);
        }
    }, {
        key: 'nodeListRefCallback',
        value: function nodeListRefCallback(ele) {
            if (ele) {
                var domEle = _reactDom2.default.findDOMNode(ele);
                this.nodeListRect = domEle.getBoundingClientRect();
                this.setState({
                    left: this.settings.reverseLayout.state ? -this.nodeListRect.width : this.nodeListRect.width
                });
            } else {
                this.nodeListRect = null;
                this.setState({
                    left: null
                });
            }
        }

        /*componentDidUpdate()
        {
        	if(this.nodeListRect && this.state.left != this.nodeListRect.left)
        	{
        		console.log("componentDidUpdate",this.settings.label.state,this.state.left);
        		this.setState({
        			left:this.nodeListRect.left + this.nodeListRect.width
        		})
        	}
        }*/

    }, {
        key: 'render',
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Node - render");
            var nodeUI = _react2.default.createElement('div', null);
            var domDefinedStyle = this.props.style;
            if (this.props.data) {
                var nodesUI = [];
                var nodes = this.settings.getNodes();
                var isOpen = this.settings.open.value;

                var iconName = this.settings.iconName.value;
                var label = this.settings.label.value;

                var iconUI = "";
                var selectAllIconUI = "";

                if (nodes.length > 0) {
                    //folder

                    var branchStyle = this.props.treeConfig.branchStyle.state;
                    var nodeStyle = this.props.treeConfig.nodeStyle.state;
                    if (domDefinedStyle) _Style2.default.mergeStyleObjects(nodeStyle, domDefinedStyle, true); //this happens for rootNode
                    var controlName = this.props.treeConfig.getFolderIcon(isOpen);

                    if (iconName && iconName.length > 0) {
                        var iconStyleObj = this.props.treeConfig.nodeIconStyle.state;
                        if (iconName.indexOf("/") == -1) {
                            // fontAwesome Icon Name
                            iconUI = _react2.default.createElement('i', { style: iconStyleObj, className: iconName });
                        } else {
                            iconUI = _react2.default.createElement('img', { style: iconStyleObj, src: iconName });
                        }
                    }

                    if (this.props.enableSelectAll) {
                        var treeIconState = this.props.treeConfig.treeIconState.state;
                        var selectAllIcon = this.selectAll.state ? treeIconState["select"] : treeIconState["unSelect"];
                        selectAllIconUI = _react2.default.createElement(
                            'span',
                            { onClick: this.toggleSelectAll },
                            ' ',
                            _react2.default.createElement('i', { className: selectAllIcon }),
                            ' '
                        );
                    }

                    var labelLang = this.settings.reverseLayout.state ? Weave.lang(label) : label;
                    var folderUI = _react2.default.createElement(
                        'span',
                        { style: nodeStyle },
                        iconUI,
                        _react2.default.createElement(
                            'span',
                            { onClick: this.toggleOpen },
                            ' ',
                            labelLang
                        ),
                        _react2.default.createElement(
                            'span',
                            { style: { flex: "1" }, onClick: this.toggleOpen },
                            ' '
                        ),
                        selectAllIconUI,
                        _react2.default.createElement('i', { className: controlName })
                    );

                    var nodePadding = this.props.treeConfig.nodePadding.state;
                    var nodeUI = null;

                    if (this.props.treeConfig.enableMenuMode.state) {
                        if (isOpen && this.state.left) {
                            nodesUI = this.renderChildren();
                        }
                        branchStyle.position = "relative";
                        var listStyle = {
                            listStyleType: "none",
                            paddingLeft: nodePadding,
                            position: "absolute",
                            left: this.state.left,
                            top: 0
                        };
                        nodeUI = _react2.default.createElement(
                            'div',
                            { style: branchStyle, ref: this.nodeListRefCallback },
                            folderUI,
                            _react2.default.createElement(
                                'ul',
                                { style: listStyle },
                                nodesUI
                            )
                        );
                    } else {
                        if (isOpen) {
                            nodesUI = this.renderChildren();
                        }
                        nodeUI = _react2.default.createElement(
                            'span',
                            { style: branchStyle },
                            folderUI,
                            _react2.default.createElement(
                                'ul',
                                { style: { listStyleType: "none", paddingLeft: nodePadding } },
                                nodesUI
                            )
                        );
                    }
                } else {
                    //leaf
                    var fileIcon = this.props.treeConfig.getFileIcon(this.props.data, this.settings.open.value);
                    // this will return either normal/Active/Slected Style based on state of the leaf
                    var leafStyle = this.props.treeConfig.getLeafStyle(isOpen, this.settings.active.value);

                    if (iconName && iconName.length > 0) {
                        var iconStyleObj = this.props.treeConfig.leafIconStyle.state;
                        if (iconName.indexOf("/") == -1) {
                            // fontAwesome Icon Name
                            iconUI = _react2.default.createElement('i', { style: iconStyleObj, className: iconName });
                        } else {
                            iconUI = _react2.default.createElement('img', { style: iconStyleObj, src: iconName });
                        }
                    }

                    //if(this.props.enableSelectAll){
                    var treeIconState = this.props.treeConfig.treeIconState.state;

                    var selectAllIcon = "";
                    var onClick = this.toggleOpen;
                    if (this.selectIdentifier == "select") {
                        selectAllIcon = this.settings.select.state ? treeIconState["select"] : treeIconState["unSelect"];
                    } else {
                        selectAllIcon = this.selectAll.state ? treeIconState["select"] : treeIconState["unSelect"];
                    }
                    if (selectAllIcon && selectAllIcon.length > 0) {
                        onClick = this.toggleSelect;
                    }

                    if (selectAllIcon && selectAllIcon.length > 0) selectAllIconUI = _react2.default.createElement(
                        'span',
                        { onClick: this.toggleSelect },
                        ' ',
                        _react2.default.createElement('i', { className: selectAllIcon }),
                        ' '
                    );

                    var labelLang = this.settings.reverseLayout.state ? Weave.lang(label) : label;
                    nodeUI = _react2.default.createElement(
                        'li',
                        { style: leafStyle },
                        iconUI,
                        _react2.default.createElement(
                            'span',
                            { onClick: onClick },
                            ' ',
                            labelLang
                        ),
                        _react2.default.createElement(
                            'span',
                            { style: { flex: "1" }, onClick: onClick },
                            ' '
                        ),
                        selectAllIconUI,
                        _react2.default.createElement('i', { className: fileIcon })
                    );
                }
            }

            return nodeUI;
        }
    }]);

    return Node;
}(_AbstractComponent3.default);

_ComponentManager2.default.registerToolImplementation("weavereact.NodeConfig", Node);
exports.default = Node;
//# sourceMappingURL=data:application/json;base64,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LE9BQU8sRUFBQyxNQUFLLEdBQUwsRUFBUixFQUFtQixTQUFTLE9BQVQsRUFBekI7O3lCQUhIO3dCQUlJLGVBSko7d0JBS0cscUNBQUcsV0FBVyxRQUFYLEVBQUgsQ0FMSDtxQkFBVCxDQWhDQTtpQkF2RUo7YUFaSjs7QUE4SEosbUJBQVMsTUFBVCxDQWxJUzs7OztXQXpNUDs7O0FBZ1ZOLDJCQUFpQiwwQkFBakIsQ0FBNEMsdUJBQTVDLEVBQW9FLElBQXBFO2tCQUNlIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuXG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy50b2dnbGVPcGVuID0gdGhpcy50b2dnbGVPcGVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0ID0gdGhpcy50b2dnbGVTZWxlY3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3RBbGwgPSB0aGlzLnRvZ2dsZVNlbGVjdEFsbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGVMaXN0UmVmQ2FsbGJhY2sgPSB0aGlzLm5vZGVMaXN0UmVmQ2FsbGJhY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUgPSB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IGZhbHNlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcblxuICAgICAgICB0aGlzLnNlbGVjdEFsbCA9ICB0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0QWxsO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbC5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2VsZWN0QWxsVmFsdWVzKTtcblxuICAgICAgICB0aGlzLnNlbGVjdElkZW50aWZpZXIgPSB0aGlzLnNldHRpbmdzLnNlbGVjdC5zdGF0ZT8gXCJzZWxlY3RcIjp0aGlzLnNlbGVjdEFsbC5zdGF0ZT9cInNlbGVjdEFsbFwiOlwiXCI7XG5cblx0ICAgIHRoaXMuc3RhdGUgPSB7XG5cdFx0ICAgIGxlZnQ6bnVsbFxuXHQgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpXG4gICAge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhID0gbmV4dFByb3BzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUobmV4dFByb3BzLmRhdGEsbmV4dFByb3BzLmxhYmVsLG5leHRQcm9wcy5ub2RlcyxuZXh0UHJvcHMuaWNvbik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIFxuICAgIHtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuXHQgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbC5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZWxlY3RBbGxWYWx1ZXMpO1xuICAgIH1cblxuXG5cbiAgICB0b2dnbGVTZWxlY3QoKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZWxlY3RJZGVudGlmaWVyID0gXCJzZWxlY3RcIjtcblx0ICAgIC8vIHNlbGVjdGlvbiBhbGxvd2VkIGlmIGl0cyBub3Qgc2VsZWN0ZWQgb3IgaWYgaXRzIG11bHRpcGxlIHNlbGN0aW9uIG1vZGVcblx0ICAgIC8vIGluIHNpbmdsZSBzZWxlY3Rpb24gZGVzZWxlY3Rpb24gaXMgbm90IGFsbG93ZWRcblx0ICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5hbGxvd011bHRpcGxlU2VsZWN0aW9uLnZhbHVlIHx8ICF0aGlzLnNldHRpbmdzLnNlbGVjdC52YWx1ZSl7XG5cdFx0ICAgIHRoaXMuc2V0dGluZ3Muc2VsZWN0LnZhbHVlID0gIXRoaXMuc2V0dGluZ3Muc2VsZWN0LnZhbHVlO1xuXHRcdCAgICBpZih0aGlzLnByb3BzLm9uU2VsZWN0Q2xpY2spXG5cdFx0XHQgICAgdGhpcy5wcm9wcy5vblNlbGVjdENsaWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyx0aGlzLnNlbGVjdEFsbCk7XG5cdFx0ICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpO1xuXHQgICAgfVxuXHQgICAgaWYoIXRoaXMucHJvcHMudHJlZUNvbmZpZy5hbGxvd011bHRpcGxlU2VsZWN0aW9uLnZhbHVlKXtcblx0XHQgICAgdGhpcy5wcm9wcy5wYXJlbnRDb25maWcuY2hhbmdlQWN0aXZlQ2hpbGROb2RlKHRoaXMuc2V0dGluZ3MpO1xuXHQgICAgfVxuXG4gICAgfVxuXG4gICAgdG9nZ2xlT3BlbigpXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSAhdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLm9uT3BlbkNsaWNrKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wZW5DbGljay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG5cblxuICAgIHRvZ2dsZVNlbGVjdEFsbCgpe1xuICAgICAgICB0aGlzLnNlbGVjdElkZW50aWZpZXIgPSBcInNlbGVjdEFsbFwiO1xuICAgICAgICAgLy8gdGhpcyB0cmlnZ2VyIGVudGlyZSB0cmVlXG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGwuc3RhdGUgPSAhdGhpcy5zZWxlY3RBbGwuc3RhdGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMub25TZWxlY3RBbGxDbGljaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3RBbGxDbGljay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MsdGhpcy5zZWxlY3RBbGwpO1xuICAgICAgICAvL3RoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpO1xuICAgICB9XG5cbiAgICBjcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKGRhdGEsbGFiZWwsbm9kZXMsaWNvbikge1xuICAgICAgICB2YXIgbGFiZWwgPSBsYWJlbD9sYWJlbDp0aGlzLnByb3BzLmxhYmVsO1xuICAgICAgICB2YXIgbm9kZXMgPSBub2Rlcz9ub2Rlczp0aGlzLnByb3BzLm5vZGVzO1xuICAgICAgICB2YXIgaWNvbiA9IGljb24/aWNvbjp0aGlzLnByb3BzLmljb247XG4gICAgICAgIGlmKGRhdGEpeyAvLyBjYWxsaW5nIHdpdGggZGF0YSBhcmd1bWVudHMgaW5kaWNhdGVzIGRhdGEgaXMgY2hhbmdlZCBzbyB3aXBlIHRoZSBzZXNzaW9uIHN0YXRlXG4gICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNldCgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgLy90by1kbyBvbmx5IHJlcXVpcmVkIGZvciByb290bm9kZVxuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IobGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IoaWNvbik7XG5cbiAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKG5vZGVzKTtcbiAgICAgICAgaWYodHJlZU5vZGVzICYmIHRyZWVOb2Rlcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRyZWVOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChcIm5vZGVcIiArIGksIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcubGFiZWwuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCx0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcuaWNvbk5hbWUuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uLHRyZWVOb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdEFsbC5zdGF0ZSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldENoaWxkcmVuU2Vzc2lvblZhbHVlcygpXG4gICAge1xuXHQgICAgaWYoIXRoaXMuc2V0dGluZ3Mub3Blbi5zdGF0ZSl7XG5cdFx0ICAgIHJldHVyblxuXHQgICAgfVxuICAgICAgICBpZighdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKClcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVmYXVsdE5vZGVzID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLnN0YXRlO1xuICAgICAgICBpZihkZWZhdWx0Tm9kZXMgJiYgZGVmYXVsdE5vZGVzLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgbm9kZUNvbmZpZ3MubWFwKGZ1bmN0aW9uKG5vZGVDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgICAgIHZhciBub2RlTGFiZWwgPSBub2RlQ29uZmlnLmxhYmVsLnN0YXRlO1xuICAgICAgICAgICAgICAgIGlmKGRlZmF1bHROb2Rlcy5pbmRleE9mKG5vZGVMYWJlbCkgIT0gLTEpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb25maWcuYWN0aXZlLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnZhbHVlID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDaGlsZHJlblNlbGVjdEFsbFZhbHVlcygpXG4gICAge1xuICAgICAgICB2YXIgbm9kZUNvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgbm9kZUNvbmZpZ3MubWFwKGZ1bmN0aW9uKG5vZGVDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgbm9kZUNvbmZpZy5zZWxlY3QudmFsdWUgPSB0aGlzLnNlbGVjdEFsbC5zdGF0ZTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuXG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInRyZWVDb25maWdcIix0aGlzLnByb3BzLnRyZWVDb25maWcpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJwYXJlbnRDb25maWdcIix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibGFiZWxcIix0aGlzLnByb3BzLmxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibm9kZXNcIix0aGlzLnByb3BzLm5vZGVzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiaWNvblwiLHRoaXMucHJvcHMuaWNvbik7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInJldmVyc2VMYXlvdXRcIix0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJvbk9wZW5DbGlja1wiLHRoaXMucHJvcHMub25PcGVuQ2xpY2spO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJvblNlbGVjdENsaWNrXCIsdGhpcy5wcm9wcy5vblNlbGVjdENsaWNrKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiZGF0YVwiLG51bGwsIG51bGwsdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IodGhpcy5wcm9wcy5ub2RlcykgKTtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cblxuXHRub2RlTGlzdFJlZkNhbGxiYWNrKGVsZSlcblx0e1xuXHRcdGlmKGVsZSlcblx0XHR7XG5cdFx0XHR2YXIgZG9tRWxlID0gUmVhY3RET00uZmluZERPTU5vZGUoZWxlKTtcblx0XHRcdHRoaXMubm9kZUxpc3RSZWN0ID0gZG9tRWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGxlZnQ6IHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZT8gLXRoaXMubm9kZUxpc3RSZWN0LndpZHRoIDogdGhpcy5ub2RlTGlzdFJlY3Qud2lkdGhcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR0aGlzLm5vZGVMaXN0UmVjdCA9IG51bGxcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRsZWZ0OiBudWxsXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdC8qY29tcG9uZW50RGlkVXBkYXRlKClcblx0e1xuXHRcdGlmKHRoaXMubm9kZUxpc3RSZWN0ICYmIHRoaXMuc3RhdGUubGVmdCAhPSB0aGlzLm5vZGVMaXN0UmVjdC5sZWZ0KVxuXHRcdHtcblx0XHRcdGNvbnNvbGUubG9nKFwiY29tcG9uZW50RGlkVXBkYXRlXCIsdGhpcy5zZXR0aW5ncy5sYWJlbC5zdGF0ZSx0aGlzLnN0YXRlLmxlZnQpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGxlZnQ6dGhpcy5ub2RlTGlzdFJlY3QubGVmdCArIHRoaXMubm9kZUxpc3RSZWN0LndpZHRoXG5cdFx0XHR9KVxuXHRcdH1cblx0fSovXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJOb2RlIC0gcmVuZGVyXCIpO1xuICAgICAgICB2YXIgbm9kZVVJID0gPGRpdi8+O1xuICAgICAgICB2YXIgZG9tRGVmaW5lZFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHZhciBub2Rlc1VJID0gW107XG4gICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgICAgICB2YXIgaXNPcGVuID0gdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcblxuICAgICAgICAgICAgdmFyIGljb25VSSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgc2VsZWN0QWxsSWNvblVJID0gXCJcIjtcblxuXG4gICAgICAgICAgICBpZihub2Rlcy5sZW5ndGggPiAwKXsgLy9mb2xkZXJcblxuXG4gICAgICAgICAgICAgICAgdmFyIGJyYW5jaFN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmJyYW5jaFN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgIHZhciBub2RlU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgIGlmKGRvbURlZmluZWRTdHlsZSlTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhub2RlU3R5bGUsZG9tRGVmaW5lZFN0eWxlLHRydWUpOy8vdGhpcyBoYXBwZW5zIGZvciByb290Tm9kZVxuICAgICAgICAgICAgICAgIHZhciBjb250cm9sTmFtZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGb2xkZXJJY29uKGlzT3Blbik7XG5cbiAgICAgICAgICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iaiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlSWNvblN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSl7IC8vIGZvbnRBd2Vzb21lIEljb24gTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aW1nIHN0eWxlID0ge2ljb25TdHlsZU9ian0gc3JjPXtpY29uTmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5lbmFibGVTZWxlY3RBbGwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlZUljb25TdGF0ZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy50cmVlSWNvblN0YXRlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0QWxsSWNvbiA9ICh0aGlzLnNlbGVjdEFsbC5zdGF0ZSk/IHRyZWVJY29uU3RhdGVbXCJzZWxlY3RcIl06dHJlZUljb25TdGF0ZVtcInVuU2VsZWN0XCJdO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJY29uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNlbGVjdEFsbH0+Jm5ic3A7PGkgY2xhc3NOYW1lPXtzZWxlY3RBbGxJY29ufS8+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICB2YXIgbGFiZWxMYW5nID0gdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlID8gV2VhdmUubGFuZyhsYWJlbCkgOiBsYWJlbDtcbiAgICAgICAgICAgICAgICB2YXIgZm9sZGVyVUkgPSA8c3BhbiBzdHlsZT17bm9kZVN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgb25DbGljaz17dGhpcy50b2dnbGVPcGVufT4mbmJzcDt7bGFiZWxMYW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19IG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn0+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdEFsbEljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y29udHJvbE5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZVBhZGRpbmcgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcuc3RhdGU7XG5cdCAgICAgICAgICAgIHZhciBub2RlVUkgPSBudWxsO1xuXG5cdCAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5lbmFibGVNZW51TW9kZS5zdGF0ZSApXG5cdCAgICAgICAgICAgIHtcblx0XHQgICAgICAgICAgICBpZihpc09wZW4gJiYgdGhpcy5zdGF0ZS5sZWZ0KVxuXHRcdCAgICAgICAgICAgIHtcblx0XHRcdCAgICAgICAgICAgIG5vZGVzVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgIGJyYW5jaFN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdCAgICAgICAgICAgIHZhciBsaXN0U3R5bGUgPSB7XG5cdFx0XHQgICAgICAgICAgICBsaXN0U3R5bGVUeXBlOlwibm9uZVwiLFxuXHRcdFx0ICAgICAgICAgICAgcGFkZGluZ0xlZnQ6bm9kZVBhZGRpbmcsXG5cdFx0XHQgICAgICAgICAgICBwb3NpdGlvbjpcImFic29sdXRlXCIsXG5cdFx0XHQgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXG5cdFx0XHQgICAgICAgICAgICB0b3A6MFxuXHRcdCAgICAgICAgICAgIH07XG5cdFx0ICAgICAgICAgICAgbm9kZVVJID0gPGRpdiBzdHlsZT17YnJhbmNoU3R5bGV9IHJlZj17dGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrfSA+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9sZGVyVUl9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgIHN0eWxlPXtsaXN0U3R5bGV9PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pjtcblx0ICAgICAgICAgICAgfWVsc2V7XG5cdFx0ICAgICAgICAgICAgaWYoaXNPcGVuKVxuXHRcdCAgICAgICAgICAgIHtcblx0XHRcdCAgICAgICAgICAgIG5vZGVzVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgIG5vZGVVSSA9IDxzcGFuIHN0eWxlPXticmFuY2hTdHlsZX0+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9sZGVyVUl9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOlwibm9uZVwiLHBhZGRpbmdMZWZ0Om5vZGVQYWRkaW5nfX0+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVzVUl9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcblx0ICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXsgLy9sZWFmXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZpbGVJY29uKHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXR1cm4gZWl0aGVyIG5vcm1hbC9BY3RpdmUvU2xlY3RlZCBTdHlsZSBiYXNlZCBvbiBzdGF0ZSBvZiB0aGUgbGVhZlxuICAgICAgICAgICAgICAgIHZhciBsZWFmU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0TGVhZlN0eWxlKGlzT3Blbix0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iaiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5sZWFmSWNvblN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSl7IC8vIGZvbnRBd2Vzb21lIEljb24gTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aW1nIHN0eWxlID0ge2ljb25TdHlsZU9ian0gc3JjPXtpY29uTmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9pZih0aGlzLnByb3BzLmVuYWJsZVNlbGVjdEFsbCl7XG4gICAgICAgICAgICAgICAgdmFyIHRyZWVJY29uU3RhdGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcudHJlZUljb25TdGF0ZS5zdGF0ZTtcblxuICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0QWxsSWNvbiA9IFwiXCJcbiAgICAgICAgICAgICAgICAgdmFyIG9uQ2xpY2sgPSAgdGhpcy50b2dnbGVPcGVuO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0SWRlbnRpZmllciA9PSBcInNlbGVjdFwiKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSWNvbiA9ICh0aGlzLnNldHRpbmdzLnNlbGVjdC5zdGF0ZSApPyB0cmVlSWNvblN0YXRlW1wic2VsZWN0XCJdIDp0cmVlSWNvblN0YXRlW1widW5TZWxlY3RcIl07XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbEljb24gPSAodGhpcy5zZWxlY3RBbGwuc3RhdGUgKT8gdHJlZUljb25TdGF0ZVtcInNlbGVjdFwiXSA6dHJlZUljb25TdGF0ZVtcInVuU2VsZWN0XCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihzZWxlY3RBbGxJY29uICYmIHNlbGVjdEFsbEljb24ubGVuZ3RoPjAgKXtcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHRoaXMudG9nZ2xlU2VsZWN0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdEFsbEljb24gJiYgc2VsZWN0QWxsSWNvbi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJY29uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNlbGVjdH0+Jm5ic3A7PGkgY2xhc3NOYW1lPXtzZWxlY3RBbGxJY29ufS8+Jm5ic3A7PC9zcGFuPjtcblxuICAgICAgICAgICAgICAgIHZhciBsYWJlbExhbmcgPSB0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUgPyBXZWF2ZS5sYW5nKGxhYmVsKSA6IGxhYmVsO1xuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtvbkNsaWNrfT4mbmJzcDt7bGFiZWxMYW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZsZXg6XCIxXCJ9fSBvbkNsaWNrPXtvbkNsaWNrfT4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdEFsbEljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICByZXR1cm4gKCBub2RlVUkpO1xuICAgIH1cblxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19