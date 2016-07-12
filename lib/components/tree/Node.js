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
            this.settings.props.addChildProps("level", this.props.level + 1);
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

                    var level = this.props.treeConfig.enableMenuModeFromLevel.state;
                    if (!isNaN(level) && this.props.level >= level) {

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
//# sourceMappingURL=data:application/json;base64,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SyxRQUFMLENBQWMsYUFBZCxDQUE0QixLQUE1QixHQUFvQyxNQUFNLElBQU4sQ0FBVyxLQUFYLENBQXBDLEdBQXdELEtBQXhELENBL0JoQjtBQWdDQSw2QkFBUzs7MEJBQUksT0FBTyxTQUFQLEVBQUo7d0JBQ0ksTUFESjt3QkFFRzs7OEJBQU0sU0FBUyxPQUFULEVBQU47OzRCQUErQixTQUEvQjt5QkFGSDt3QkFHRzs7OEJBQU0sT0FBTyxFQUFDLE1BQUssR0FBTCxFQUFSLEVBQW1CLFNBQVMsT0FBVCxFQUF6Qjs7eUJBSEg7d0JBSUksZUFKSjt3QkFLRyxxQ0FBRyxXQUFXLFFBQVgsRUFBSCxDQUxIO3FCQUFULENBaENBO2lCQXpFSjthQVpKOztBQWdJSixtQkFBUyxNQUFULENBcElTOzs7O1dBMU1QOzs7QUFtVk4sMkJBQWlCLDBCQUFqQixDQUE0Qyx1QkFBNUMsRUFBb0UsSUFBcEU7a0JBQ2UiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5cblxuY2xhc3MgTm9kZSBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZU9wZW4gPSB0aGlzLnRvZ2dsZU9wZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3QgPSB0aGlzLnRvZ2dsZVNlbGVjdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdEFsbCA9IHRoaXMudG9nZ2xlU2VsZWN0QWxsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubm9kZUxpc3RSZWZDYWxsYmFjayA9IHRoaXMubm9kZUxpc3RSZWZDYWxsYmFjay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSA9IHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhID0gZmFsc2U7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0gIHRoaXMucHJvcHMudHJlZUNvbmZpZy5zZWxlY3RBbGw7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZWxlY3RBbGxWYWx1ZXMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0SWRlbnRpZmllciA9IHRoaXMuc2V0dGluZ3Muc2VsZWN0LnN0YXRlPyBcInNlbGVjdFwiOnRoaXMuc2VsZWN0QWxsLnN0YXRlP1wic2VsZWN0QWxsXCI6XCJcIjtcblxuXHQgICAgdGhpcy5zdGF0ZSA9IHtcblx0XHQgICAgbGVmdDpudWxsXG5cdCAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcylcbiAgICB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGEgPSBuZXh0UHJvcHMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShuZXh0UHJvcHMuZGF0YSxuZXh0UHJvcHMubGFiZWwsbmV4dFByb3BzLm5vZGVzLG5leHRQcm9wcy5pY29uKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkgXG4gICAge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4ucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG5cdCAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlbGVjdEFsbFZhbHVlcyk7XG4gICAgfVxuXG5cblxuICAgIHRvZ2dsZVNlbGVjdCgpXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdElkZW50aWZpZXIgPSBcInNlbGVjdFwiO1xuXHQgICAgLy8gc2VsZWN0aW9uIGFsbG93ZWQgaWYgaXRzIG5vdCBzZWxlY3RlZCBvciBpZiBpdHMgbXVsdGlwbGUgc2VsY3Rpb24gbW9kZVxuXHQgICAgLy8gaW4gc2luZ2xlIHNlbGVjdGlvbiBkZXNlbGVjdGlvbiBpcyBub3QgYWxsb3dlZFxuXHQgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLmFsbG93TXVsdGlwbGVTZWxlY3Rpb24udmFsdWUgfHwgIXRoaXMuc2V0dGluZ3Muc2VsZWN0LnZhbHVlKXtcblx0XHQgICAgdGhpcy5zZXR0aW5ncy5zZWxlY3QudmFsdWUgPSAhdGhpcy5zZXR0aW5ncy5zZWxlY3QudmFsdWU7XG5cdFx0ICAgIGlmKHRoaXMucHJvcHMub25TZWxlY3RDbGljaylcblx0XHRcdCAgICB0aGlzLnByb3BzLm9uU2VsZWN0Q2xpY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLHRoaXMuc2VsZWN0QWxsKTtcblx0XHQgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyk7XG5cdCAgICB9XG5cdCAgICBpZighdGhpcy5wcm9wcy50cmVlQ29uZmlnLmFsbG93TXVsdGlwbGVTZWxlY3Rpb24udmFsdWUpe1xuXHRcdCAgICB0aGlzLnByb3BzLnBhcmVudENvbmZpZy5jaGFuZ2VBY3RpdmVDaGlsZE5vZGUodGhpcy5zZXR0aW5ncyk7XG5cdCAgICB9XG5cbiAgICB9XG5cbiAgICB0b2dnbGVPcGVuKClcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9ICF0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMub25PcGVuQ2xpY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uT3BlbkNsaWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cblxuXG4gICAgdG9nZ2xlU2VsZWN0QWxsKCl7XG4gICAgICAgIHRoaXMuc2VsZWN0SWRlbnRpZmllciA9IFwic2VsZWN0QWxsXCI7XG4gICAgICAgICAvLyB0aGlzIHRyaWdnZXIgZW50aXJlIHRyZWVcblxuICAgICAgICB0aGlzLnNlbGVjdEFsbC5zdGF0ZSA9ICF0aGlzLnNlbGVjdEFsbC5zdGF0ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vblNlbGVjdEFsbENsaWNrKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdEFsbENsaWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyx0aGlzLnNlbGVjdEFsbCk7XG4gICAgICAgIC8vdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyk7XG4gICAgIH1cblxuICAgIGNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoZGF0YSxsYWJlbCxub2RlcyxpY29uKSB7XG4gICAgICAgIHZhciBsYWJlbCA9IGxhYmVsP2xhYmVsOnRoaXMucHJvcHMubGFiZWw7XG4gICAgICAgIHZhciBub2RlcyA9IG5vZGVzP25vZGVzOnRoaXMucHJvcHMubm9kZXM7XG4gICAgICAgIHZhciBpY29uID0gaWNvbj9pY29uOnRoaXMucHJvcHMuaWNvbjtcbiAgICAgICAgaWYoZGF0YSl7IC8vIGNhbGxpbmcgd2l0aCBkYXRhIGFyZ3VtZW50cyBpbmRpY2F0ZXMgZGF0YSBpcyBjaGFuZ2VkIHNvIHdpcGUgdGhlIHNlc3Npb24gc3RhdGVcbiAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2V0KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvL3RvLWRvIG9ubHkgcmVxdWlyZWQgZm9yIHJvb3Rub2RlXG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uKTtcblxuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3Iobm9kZXMpO1xuICAgICAgICBpZih0cmVlTm9kZXMgJiYgdHJlZU5vZGVzLmxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHJlZU5vZGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KFwibm9kZVwiICsgaSwgTm9kZUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGxhYmVsLHRyZWVOb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5pY29uTmFtZS5zdGF0ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGljb24sdHJlZU5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0QWxsLnN0YXRlKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5zZWxlY3Quc3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKClcbiAgICB7XG5cdCAgICBpZighdGhpcy5zZXR0aW5ncy5vcGVuLnN0YXRlKXtcblx0XHQgICAgcmV0dXJuXG5cdCAgICB9XG4gICAgICAgIGlmKCF0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKVxuICAgICAgICB9XG4gICAgICAgIHZhciBkZWZhdWx0Tm9kZXMgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuc3RhdGU7XG4gICAgICAgIGlmKGRlZmF1bHROb2RlcyAmJiBkZWZhdWx0Tm9kZXMubGVuZ3RoID4gMCApe1xuICAgICAgICAgICAgdmFyIG5vZGVDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgICAgICBub2RlQ29uZmlncy5tYXAoZnVuY3Rpb24obm9kZUNvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVMYWJlbCA9IG5vZGVDb25maWcubGFiZWwuc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYoZGVmYXVsdE5vZGVzLmluZGV4T2Yobm9kZUxhYmVsKSAhPSAtMSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5hY3RpdmUudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5zZWxlY3QudmFsdWUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIG5vZGVDb25maWcuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENoaWxkcmVuU2VsZWN0QWxsVmFsdWVzKClcbiAgICB7XG4gICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICBub2RlQ29uZmlncy5tYXAoZnVuY3Rpb24obm9kZUNvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9IHRoaXMuc2VsZWN0QWxsLnN0YXRlO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwidHJlZUNvbmZpZ1wiLHRoaXMucHJvcHMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInBhcmVudENvbmZpZ1wiLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJsYWJlbFwiLHRoaXMucHJvcHMubGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJub2Rlc1wiLHRoaXMucHJvcHMubm9kZXMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJpY29uXCIsdGhpcy5wcm9wcy5pY29uKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwicmV2ZXJzZUxheW91dFwiLHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9uT3BlbkNsaWNrXCIsdGhpcy5wcm9wcy5vbk9wZW5DbGljayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9uU2VsZWN0Q2xpY2tcIix0aGlzLnByb3BzLm9uU2VsZWN0Q2xpY2spO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJsZXZlbFwiLHRoaXMucHJvcHMubGV2ZWwgKyAxKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiZGF0YVwiLG51bGwsIG51bGwsdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IodGhpcy5wcm9wcy5ub2RlcykgKTtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG5cblxuXHRub2RlTGlzdFJlZkNhbGxiYWNrKGVsZSlcblx0e1xuXHRcdGlmKGVsZSlcblx0XHR7XG5cdFx0XHR2YXIgZG9tRWxlID0gUmVhY3RET00uZmluZERPTU5vZGUoZWxlKTtcblx0XHRcdHRoaXMubm9kZUxpc3RSZWN0ID0gZG9tRWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGxlZnQ6IHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZT8gLXRoaXMubm9kZUxpc3RSZWN0LndpZHRoIDogdGhpcy5ub2RlTGlzdFJlY3Qud2lkdGhcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR0aGlzLm5vZGVMaXN0UmVjdCA9IG51bGxcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRsZWZ0OiBudWxsXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdC8qY29tcG9uZW50RGlkVXBkYXRlKClcblx0e1xuXHRcdGlmKHRoaXMubm9kZUxpc3RSZWN0ICYmIHRoaXMuc3RhdGUubGVmdCAhPSB0aGlzLm5vZGVMaXN0UmVjdC5sZWZ0KVxuXHRcdHtcblx0XHRcdGNvbnNvbGUubG9nKFwiY29tcG9uZW50RGlkVXBkYXRlXCIsdGhpcy5zZXR0aW5ncy5sYWJlbC5zdGF0ZSx0aGlzLnN0YXRlLmxlZnQpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGxlZnQ6dGhpcy5ub2RlTGlzdFJlY3QubGVmdCArIHRoaXMubm9kZUxpc3RSZWN0LndpZHRoXG5cdFx0XHR9KVxuXHRcdH1cblx0fSovXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJOb2RlIC0gcmVuZGVyXCIpO1xuICAgICAgICB2YXIgbm9kZVVJID0gPGRpdi8+O1xuICAgICAgICB2YXIgZG9tRGVmaW5lZFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHZhciBub2Rlc1VJID0gW107XG4gICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgICAgICB2YXIgaXNPcGVuID0gdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcblxuICAgICAgICAgICAgdmFyIGljb25VSSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgc2VsZWN0QWxsSWNvblVJID0gXCJcIjtcblxuXG4gICAgICAgICAgICBpZihub2Rlcy5sZW5ndGggPiAwKXsgLy9mb2xkZXJcblxuXG4gICAgICAgICAgICAgICAgdmFyIGJyYW5jaFN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmJyYW5jaFN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgIHZhciBub2RlU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgIGlmKGRvbURlZmluZWRTdHlsZSlTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhub2RlU3R5bGUsZG9tRGVmaW5lZFN0eWxlLHRydWUpOy8vdGhpcyBoYXBwZW5zIGZvciByb290Tm9kZVxuICAgICAgICAgICAgICAgIHZhciBjb250cm9sTmFtZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGb2xkZXJJY29uKGlzT3Blbik7XG5cbiAgICAgICAgICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iaiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlSWNvblN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSl7IC8vIGZvbnRBd2Vzb21lIEljb24gTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aW1nIHN0eWxlID0ge2ljb25TdHlsZU9ian0gc3JjPXtpY29uTmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5lbmFibGVTZWxlY3RBbGwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlZUljb25TdGF0ZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy50cmVlSWNvblN0YXRlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0QWxsSWNvbiA9ICh0aGlzLnNlbGVjdEFsbC5zdGF0ZSk/IHRyZWVJY29uU3RhdGVbXCJzZWxlY3RcIl06dHJlZUljb25TdGF0ZVtcInVuU2VsZWN0XCJdO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJY29uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNlbGVjdEFsbH0+Jm5ic3A7PGkgY2xhc3NOYW1lPXtzZWxlY3RBbGxJY29ufS8+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICB2YXIgbGFiZWxMYW5nID0gdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlID8gV2VhdmUubGFuZyhsYWJlbCkgOiBsYWJlbDtcbiAgICAgICAgICAgICAgICB2YXIgZm9sZGVyVUkgPSA8c3BhbiBzdHlsZT17bm9kZVN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgb25DbGljaz17dGhpcy50b2dnbGVPcGVufT4mbmJzcDt7bGFiZWxMYW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19IG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn0+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdEFsbEljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y29udHJvbE5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZVBhZGRpbmcgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcuc3RhdGU7XG5cdCAgICAgICAgICAgIHZhciBub2RlVUkgPSBudWxsO1xuXG5cdCAgICAgICAgICAgIHZhciBsZXZlbCA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5lbmFibGVNZW51TW9kZUZyb21MZXZlbC5zdGF0ZTtcblx0ICAgICAgICAgICAgaWYoIWlzTmFOKGxldmVsKSAmJiB0aGlzLnByb3BzLmxldmVsID49IGxldmVsIClcblx0ICAgICAgICAgICAge1xuXG5cdFx0ICAgICAgICAgICAgaWYoaXNPcGVuICYmIHRoaXMuc3RhdGUubGVmdClcblx0XHQgICAgICAgICAgICB7XG5cdFx0XHQgICAgICAgICAgICBub2Rlc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXHRcdCAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICBicmFuY2hTdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHQgICAgICAgICAgICB2YXIgbGlzdFN0eWxlID0ge1xuXHRcdFx0ICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTpcIm5vbmVcIixcblx0XHRcdCAgICAgICAgICAgIHBhZGRpbmdMZWZ0Om5vZGVQYWRkaW5nLFxuXHRcdFx0ICAgICAgICAgICAgcG9zaXRpb246XCJhYnNvbHV0ZVwiLFxuXHRcdFx0ICAgICAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxuXHRcdFx0ICAgICAgICAgICAgdG9wOjBcblx0XHQgICAgICAgICAgICB9O1xuXHRcdCAgICAgICAgICAgIG5vZGVVSSA9IDxkaXYgc3R5bGU9e2JyYW5jaFN0eWxlfSByZWY9e3RoaXMubm9kZUxpc3RSZWZDYWxsYmFja30gPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvbGRlclVJfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsICBzdHlsZT17bGlzdFN0eWxlfT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZXNVSX1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj47XG5cdCAgICAgICAgICAgIH1lbHNle1xuXHRcdCAgICAgICAgICAgIGlmKGlzT3Blbilcblx0XHQgICAgICAgICAgICB7XG5cdFx0XHQgICAgICAgICAgICBub2Rlc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXHRcdCAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICBub2RlVUkgPSA8c3BhbiBzdHlsZT17YnJhbmNoU3R5bGV9PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvbGRlclVJfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTpcIm5vbmVcIixwYWRkaW5nTGVmdDpub2RlUGFkZGluZ319PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG5cdCAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIGVpdGhlciBub3JtYWwvQWN0aXZlL1NsZWN0ZWQgU3R5bGUgYmFzZWQgb24gc3RhdGUgb2YgdGhlIGxlYWZcbiAgICAgICAgICAgICAgICB2YXIgbGVhZlN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExlYWZTdHlsZShpc09wZW4sdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpY29uU3R5bGVPYmogPSB0aGlzLnByb3BzLnRyZWVDb25maWcubGVhZkljb25TdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIi9cIikgPT0gLTEpeyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpIHN0eWxlID0ge2ljb25TdHlsZU9ian0gY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYodGhpcy5wcm9wcy5lbmFibGVTZWxlY3RBbGwpe1xuICAgICAgICAgICAgICAgIHZhciB0cmVlSWNvblN0YXRlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLnRyZWVJY29uU3RhdGUuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdEFsbEljb24gPSBcIlwiXG4gICAgICAgICAgICAgICAgIHZhciBvbkNsaWNrID0gIHRoaXMudG9nZ2xlT3BlbjtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNlbGVjdElkZW50aWZpZXIgPT0gXCJzZWxlY3RcIil7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbEljb24gPSAodGhpcy5zZXR0aW5ncy5zZWxlY3Quc3RhdGUgKT8gdHJlZUljb25TdGF0ZVtcInNlbGVjdFwiXSA6dHJlZUljb25TdGF0ZVtcInVuU2VsZWN0XCJdO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJY29uID0gKHRoaXMuc2VsZWN0QWxsLnN0YXRlICk/IHRyZWVJY29uU3RhdGVbXCJzZWxlY3RcIl0gOnRyZWVJY29uU3RhdGVbXCJ1blNlbGVjdFwiXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoc2VsZWN0QWxsSWNvbiAmJiBzZWxlY3RBbGxJY29uLmxlbmd0aD4wICl7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB0aGlzLnRvZ2dsZVNlbGVjdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzZWxlY3RBbGxJY29uICYmIHNlbGVjdEFsbEljb24ubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSWNvblVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVTZWxlY3R9PiZuYnNwOzxpIGNsYXNzTmFtZT17c2VsZWN0QWxsSWNvbn0vPiZuYnNwOzwvc3Bhbj47XG5cbiAgICAgICAgICAgICAgICB2YXIgbGFiZWxMYW5nID0gdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlID8gV2VhdmUubGFuZyhsYWJlbCkgOiBsYWJlbDtcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e2xlYWZTdHlsZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17b25DbGlja30+Jm5ic3A7e2xhYmVsTGFuZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0gb25DbGljaz17b25DbGlja30+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RBbGxJY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgcmV0dXJuICggbm9kZVVJKTtcbiAgICB9XG5cbn1cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==