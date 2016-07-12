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

                    var listStyle = this.props.treeConfig.getListStyle();
                    listStyle.listStyleType = "none";
                    listStyle.paddingLeft = nodePadding;

                    if (!isNaN(level) && this.props.level >= level) {

                        if (isOpen && this.state.left) {
                            nodesUI = this.renderChildren();
                        }
                        branchStyle.position = "relative";

                        listStyle.position = "absolute";
                        listStyle.zIndex = 1;
                        listStyle.left = this.state.left;
                        listStyle.top = 0;
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
//# sourceMappingURL=data:application/json;base64,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TCxDQUQ4QjtxQkFBNUM7O0FBSUEsd0JBQUcsaUJBQWlCLGNBQWMsTUFBZCxHQUF1QixDQUF2QixFQUNoQixrQkFBa0I7OzBCQUFNLFNBQVMsS0FBSyxZQUFMLEVBQWY7O3dCQUF3QyxxQ0FBRyxXQUFXLGFBQVgsRUFBSCxDQUF4Qzs7cUJBQWxCLENBREo7O0FBR0Esd0JBQUksWUFBWSxLQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLEtBQTVCLEdBQW9DLE1BQU0sSUFBTixDQUFXLEtBQVgsQ0FBcEMsR0FBd0QsS0FBeEQsQ0EvQmhCO0FBZ0NBLDZCQUFTOzswQkFBSSxPQUFPLFNBQVAsRUFBSjt3QkFDSSxNQURKO3dCQUVHOzs4QkFBTSxTQUFTLE9BQVQsRUFBTjs7NEJBQStCLFNBQS9CO3lCQUZIO3dCQUdHOzs4QkFBTSxPQUFPLEVBQUMsTUFBSyxHQUFMLEVBQVIsRUFBbUIsU0FBUyxPQUFULEVBQXpCOzt5QkFISDt3QkFJSSxlQUpKO3dCQUtHLHFDQUFHLFdBQVcsUUFBWCxFQUFILENBTEg7cUJBQVQsQ0FoQ0E7aUJBOUVKO2FBWko7O0FBcUlKLG1CQUFTLE1BQVQsQ0F6SVM7Ozs7V0ExTVA7OztBQXdWTiwyQkFBaUIsMEJBQWpCLENBQTRDLHVCQUE1QyxFQUFvRSxJQUFwRTtrQkFDZSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcblxuXG5jbGFzcyBOb2RlIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlT3BlbiA9IHRoaXMudG9nZ2xlT3Blbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdCA9IHRoaXMudG9nZ2xlU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0QWxsID0gdGhpcy50b2dnbGVTZWxlY3RBbGwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrID0gdGhpcy5ub2RlTGlzdFJlZkNhbGxiYWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlID0gdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdEFsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlbGVjdEFsbFZhbHVlcyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RJZGVudGlmaWVyID0gdGhpcy5zZXR0aW5ncy5zZWxlY3Quc3RhdGU/IFwic2VsZWN0XCI6dGhpcy5zZWxlY3RBbGwuc3RhdGU/XCJzZWxlY3RBbGxcIjpcIlwiO1xuXG5cdCAgICB0aGlzLnN0YXRlID0ge1xuXHRcdCAgICBsZWZ0Om51bGxcblx0ICAgIH1cbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKVxuICAgIHtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IG5leHRQcm9wcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKG5leHRQcm9wcy5kYXRhLG5leHRQcm9wcy5sYWJlbCxuZXh0UHJvcHMubm9kZXMsbmV4dFByb3BzLmljb24pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSBcbiAgICB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcblx0ICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2VsZWN0QWxsVmFsdWVzKTtcbiAgICB9XG5cblxuXG4gICAgdG9nZ2xlU2VsZWN0KClcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0SWRlbnRpZmllciA9IFwic2VsZWN0XCI7XG5cdCAgICAvLyBzZWxlY3Rpb24gYWxsb3dlZCBpZiBpdHMgbm90IHNlbGVjdGVkIG9yIGlmIGl0cyBtdWx0aXBsZSBzZWxjdGlvbiBtb2RlXG5cdCAgICAvLyBpbiBzaW5nbGUgc2VsZWN0aW9uIGRlc2VsZWN0aW9uIGlzIG5vdCBhbGxvd2VkXG5cdCAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSB8fCAhdGhpcy5zZXR0aW5ncy5zZWxlY3QudmFsdWUpe1xuXHRcdCAgICB0aGlzLnNldHRpbmdzLnNlbGVjdC52YWx1ZSA9ICF0aGlzLnNldHRpbmdzLnNlbGVjdC52YWx1ZTtcblx0XHQgICAgaWYodGhpcy5wcm9wcy5vblNlbGVjdENsaWNrKVxuXHRcdFx0ICAgIHRoaXMucHJvcHMub25TZWxlY3RDbGljay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MsdGhpcy5zZWxlY3RBbGwpO1xuXHRcdCAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKTtcblx0ICAgIH1cblx0ICAgIGlmKCF0aGlzLnByb3BzLnRyZWVDb25maWcuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSl7XG5cdFx0ICAgIHRoaXMucHJvcHMucGFyZW50Q29uZmlnLmNoYW5nZUFjdGl2ZUNoaWxkTm9kZSh0aGlzLnNldHRpbmdzKTtcblx0ICAgIH1cblxuICAgIH1cblxuICAgIHRvZ2dsZU9wZW4oKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gIXRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vbk9wZW5DbGljaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25PcGVuQ2xpY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyk7XG4gICAgfVxuXG5cbiAgICB0b2dnbGVTZWxlY3RBbGwoKXtcbiAgICAgICAgdGhpcy5zZWxlY3RJZGVudGlmaWVyID0gXCJzZWxlY3RBbGxcIjtcbiAgICAgICAgIC8vIHRoaXMgdHJpZ2dlciBlbnRpcmUgdHJlZVxuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLnN0YXRlID0gIXRoaXMuc2VsZWN0QWxsLnN0YXRlO1xuICAgICAgICBpZih0aGlzLnByb3BzLm9uU2VsZWN0QWxsQ2xpY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0QWxsQ2xpY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLHRoaXMuc2VsZWN0QWxsKTtcbiAgICAgICAgLy90aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgfVxuXG4gICAgY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShkYXRhLGxhYmVsLG5vZGVzLGljb24pIHtcbiAgICAgICAgdmFyIGxhYmVsID0gbGFiZWw/bGFiZWw6dGhpcy5wcm9wcy5sYWJlbDtcbiAgICAgICAgdmFyIG5vZGVzID0gbm9kZXM/bm9kZXM6dGhpcy5wcm9wcy5ub2RlcztcbiAgICAgICAgdmFyIGljb24gPSBpY29uP2ljb246dGhpcy5wcm9wcy5pY29uO1xuICAgICAgICBpZihkYXRhKXsgLy8gY2FsbGluZyB3aXRoIGRhdGEgYXJndW1lbnRzIGluZGljYXRlcyBkYXRhIGlzIGNoYW5nZWQgc28gd2lwZSB0aGUgc2Vzc2lvbiBzdGF0ZVxuICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmVzZXQoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIC8vdG8tZG8gb25seSByZXF1aXJlZCBmb3Igcm9vdG5vZGVcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGljb24pO1xuXG4gICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihub2Rlcyk7XG4gICAgICAgIGlmKHRyZWVOb2RlcyAmJiB0cmVlTm9kZXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0cmVlTm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWcgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoXCJub2RlXCIgKyBpLCBOb2RlQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmxhYmVsLnN0YXRlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IobGFiZWwsdHJlZU5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmljb25OYW1lLnN0YXRlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IoaWNvbix0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5zZWxlY3RBbGwuc3RhdGUpe1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC5zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMoKVxuICAgIHtcblx0ICAgIGlmKCF0aGlzLnNldHRpbmdzLm9wZW4uc3RhdGUpe1xuXHRcdCAgICByZXR1cm5cblx0ICAgIH1cbiAgICAgICAgaWYoIXRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlZmF1bHROb2RlcyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5zdGF0ZTtcbiAgICAgICAgaWYoZGVmYXVsdE5vZGVzICYmIGRlZmF1bHROb2Rlcy5sZW5ndGggPiAwICl7XG4gICAgICAgICAgICB2YXIgbm9kZUNvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgICAgIG5vZGVDb25maWdzLm1hcChmdW5jdGlvbihub2RlQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUxhYmVsID0gbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZTtcbiAgICAgICAgICAgICAgICBpZihkZWZhdWx0Tm9kZXMuaW5kZXhPZihub2RlTGFiZWwpICE9IC0xKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5zZWxlY3QudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q2hpbGRyZW5TZWxlY3RBbGxWYWx1ZXMoKVxuICAgIHtcbiAgICAgICAgdmFyIG5vZGVDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIG5vZGVDb25maWdzLm1hcChmdW5jdGlvbihub2RlQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnZhbHVlID0gdGhpcy5zZWxlY3RBbGwuc3RhdGU7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJ0cmVlQ29uZmlnXCIsdGhpcy5wcm9wcy50cmVlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwicGFyZW50Q29uZmlnXCIsdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImxhYmVsXCIsdGhpcy5wcm9wcy5sYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm5vZGVzXCIsdGhpcy5wcm9wcy5ub2Rlcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImljb25cIix0aGlzLnByb3BzLmljb24pO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJyZXZlcnNlTGF5b3V0XCIsdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwib25PcGVuQ2xpY2tcIix0aGlzLnByb3BzLm9uT3BlbkNsaWNrKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwib25TZWxlY3RDbGlja1wiLHRoaXMucHJvcHMub25TZWxlY3RDbGljayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImxldmVsXCIsdGhpcy5wcm9wcy5sZXZlbCArIDEpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJkYXRhXCIsbnVsbCwgbnVsbCx0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcih0aGlzLnByb3BzLm5vZGVzKSApO1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cblxuXG5cdG5vZGVMaXN0UmVmQ2FsbGJhY2soZWxlKVxuXHR7XG5cdFx0aWYoZWxlKVxuXHRcdHtcblx0XHRcdHZhciBkb21FbGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShlbGUpO1xuXHRcdFx0dGhpcy5ub2RlTGlzdFJlY3QgPSBkb21FbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bGVmdDogdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlPyAtdGhpcy5ub2RlTGlzdFJlY3Qud2lkdGggOiB0aGlzLm5vZGVMaXN0UmVjdC53aWR0aFxuXHRcdFx0fSlcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHRoaXMubm9kZUxpc3RSZWN0ID0gbnVsbFxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGxlZnQ6IG51bGxcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0Lypjb21wb25lbnREaWRVcGRhdGUoKVxuXHR7XG5cdFx0aWYodGhpcy5ub2RlTGlzdFJlY3QgJiYgdGhpcy5zdGF0ZS5sZWZ0ICE9IHRoaXMubm9kZUxpc3RSZWN0LmxlZnQpXG5cdFx0e1xuXHRcdFx0Y29uc29sZS5sb2coXCJjb21wb25lbnREaWRVcGRhdGVcIix0aGlzLnNldHRpbmdzLmxhYmVsLnN0YXRlLHRoaXMuc3RhdGUubGVmdCk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bGVmdDp0aGlzLm5vZGVMaXN0UmVjdC5sZWZ0ICsgdGhpcy5ub2RlTGlzdFJlY3Qud2lkdGhcblx0XHRcdH0pXG5cdFx0fVxuXHR9Ki9cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIk5vZGUgLSByZW5kZXJcIik7XG4gICAgICAgIHZhciBub2RlVUkgPSA8ZGl2Lz47XG4gICAgICAgIHZhciBkb21EZWZpbmVkU3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdmFyIG5vZGVzVUkgPSBbXTtcbiAgICAgICAgICAgIHZhciBub2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZXMoKTtcbiAgICAgICAgICAgIHZhciBpc09wZW4gPSB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWU7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgaWNvblVJID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBzZWxlY3RBbGxJY29uVUkgPSBcIlwiO1xuXG5cbiAgICAgICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApeyAvL2ZvbGRlclxuXG5cbiAgICAgICAgICAgICAgICB2YXIgYnJhbmNoU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuYnJhbmNoU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYoZG9tRGVmaW5lZFN0eWxlKVN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKG5vZGVTdHlsZSxkb21EZWZpbmVkU3R5bGUsdHJ1ZSk7Ly90aGlzIGhhcHBlbnMgZm9yIHJvb3ROb2RlXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xOYW1lID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZvbGRlckljb24oaXNPcGVuKTtcblxuICAgICAgICAgICAgICAgIGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWNvblN0eWxlT2JqID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVJY29uU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGljb25OYW1lLmluZGV4T2YoXCIvXCIpID09IC0xKXsgLy8gZm9udEF3ZXNvbWUgSWNvbiBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aSBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpbWcgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBzcmM9e2ljb25OYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmVuYWJsZVNlbGVjdEFsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVlSWNvblN0YXRlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLnRyZWVJY29uU3RhdGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RBbGxJY29uID0gKHRoaXMuc2VsZWN0QWxsLnN0YXRlKT8gdHJlZUljb25TdGF0ZVtcInNlbGVjdFwiXTp0cmVlSWNvblN0YXRlW1widW5TZWxlY3RcIl07XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbEljb25VSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2VsZWN0QWxsfT4mbmJzcDs8aSBjbGFzc05hbWU9e3NlbGVjdEFsbEljb259Lz4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHZhciBsYWJlbExhbmcgPSB0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUgPyBXZWF2ZS5sYW5nKGxhYmVsKSA6IGxhYmVsO1xuICAgICAgICAgICAgICAgIHZhciBmb2xkZXJVSSA9IDxzcGFuIHN0eWxlPXtub2RlU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW59PiZuYnNwO3tsYWJlbExhbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0gb25DbGljaz17dGhpcy50b2dnbGVPcGVufT4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0QWxsSWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjb250cm9sTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcblxuICAgICAgICAgICAgICAgIHZhciBub2RlUGFkZGluZyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy5zdGF0ZTtcblx0ICAgICAgICAgICAgdmFyIG5vZGVVSSA9IG51bGw7XG5cblx0ICAgICAgICAgICAgdmFyIGxldmVsID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmVuYWJsZU1lbnVNb2RlRnJvbUxldmVsLnN0YXRlO1xuXHQgICAgICAgICAgICBcblx0ICAgICAgICAgICAgdmFyIGxpc3RTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRMaXN0U3R5bGUoKTtcblx0ICAgICAgICAgICAgbGlzdFN0eWxlLmxpc3RTdHlsZVR5cGUgPSBcIm5vbmVcIjtcblx0ICAgICAgICAgICAgbGlzdFN0eWxlLnBhZGRpbmdMZWZ0ID0gbm9kZVBhZGRpbmc7XG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgICAgICBpZighaXNOYU4obGV2ZWwpICYmIHRoaXMucHJvcHMubGV2ZWwgPj0gbGV2ZWwgKVxuXHQgICAgICAgICAgICB7XG5cblx0XHQgICAgICAgICAgICBpZihpc09wZW4gJiYgdGhpcy5zdGF0ZS5sZWZ0KVxuXHRcdCAgICAgICAgICAgIHtcblx0XHRcdCAgICAgICAgICAgIG5vZGVzVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgICAgIGJyYW5jaFN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdCAgICAgICAgICAgIFxuXHRcdCAgICAgICAgICAgIGxpc3RTdHlsZS5wb3NpdGlvbiA9XCJhYnNvbHV0ZVwiO1xuXHRcdCAgICAgICAgICAgIGxpc3RTdHlsZS56SW5kZXggPSAxO1xuXHRcdCAgICAgICAgICAgIGxpc3RTdHlsZS5sZWZ0ID0gdGhpcy5zdGF0ZS5sZWZ0O1xuXHRcdCAgICAgICAgICAgIGxpc3RTdHlsZS50b3AgPSAwO1xuXHRcdCAgICAgICAgICAgIG5vZGVVSSA9IDxkaXYgc3R5bGU9e2JyYW5jaFN0eWxlfSByZWY9e3RoaXMubm9kZUxpc3RSZWZDYWxsYmFja30gPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvbGRlclVJfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsICBzdHlsZT17bGlzdFN0eWxlfT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZXNVSX1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj47XG5cdCAgICAgICAgICAgIH1lbHNle1xuXHRcdCAgICAgICAgICAgIGlmKGlzT3Blbilcblx0XHQgICAgICAgICAgICB7XG5cdFx0XHQgICAgICAgICAgICBub2Rlc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXHRcdCAgICAgICAgICAgIH1cblx0XHQgICAgICAgICAgICBcblx0XHQgICAgICAgICAgICBcblx0XHQgICAgICAgICAgICBub2RlVUkgPSA8c3BhbiBzdHlsZT17YnJhbmNoU3R5bGV9PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvbGRlclVJfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTpcIm5vbmVcIixwYWRkaW5nTGVmdDpub2RlUGFkZGluZ319PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG5cdCAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIGVpdGhlciBub3JtYWwvQWN0aXZlL1NsZWN0ZWQgU3R5bGUgYmFzZWQgb24gc3RhdGUgb2YgdGhlIGxlYWZcbiAgICAgICAgICAgICAgICB2YXIgbGVhZlN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExlYWZTdHlsZShpc09wZW4sdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpY29uU3R5bGVPYmogPSB0aGlzLnByb3BzLnRyZWVDb25maWcubGVhZkljb25TdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIi9cIikgPT0gLTEpeyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpIHN0eWxlID0ge2ljb25TdHlsZU9ian0gY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYodGhpcy5wcm9wcy5lbmFibGVTZWxlY3RBbGwpe1xuICAgICAgICAgICAgICAgIHZhciB0cmVlSWNvblN0YXRlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLnRyZWVJY29uU3RhdGUuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdEFsbEljb24gPSBcIlwiXG4gICAgICAgICAgICAgICAgIHZhciBvbkNsaWNrID0gIHRoaXMudG9nZ2xlT3BlbjtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNlbGVjdElkZW50aWZpZXIgPT0gXCJzZWxlY3RcIil7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbEljb24gPSAodGhpcy5zZXR0aW5ncy5zZWxlY3Quc3RhdGUgKT8gdHJlZUljb25TdGF0ZVtcInNlbGVjdFwiXSA6dHJlZUljb25TdGF0ZVtcInVuU2VsZWN0XCJdO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJY29uID0gKHRoaXMuc2VsZWN0QWxsLnN0YXRlICk/IHRyZWVJY29uU3RhdGVbXCJzZWxlY3RcIl0gOnRyZWVJY29uU3RhdGVbXCJ1blNlbGVjdFwiXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoc2VsZWN0QWxsSWNvbiAmJiBzZWxlY3RBbGxJY29uLmxlbmd0aD4wICl7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB0aGlzLnRvZ2dsZVNlbGVjdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzZWxlY3RBbGxJY29uICYmIHNlbGVjdEFsbEljb24ubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSWNvblVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVTZWxlY3R9PiZuYnNwOzxpIGNsYXNzTmFtZT17c2VsZWN0QWxsSWNvbn0vPiZuYnNwOzwvc3Bhbj47XG5cbiAgICAgICAgICAgICAgICB2YXIgbGFiZWxMYW5nID0gdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlID8gV2VhdmUubGFuZyhsYWJlbCkgOiBsYWJlbDtcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e2xlYWZTdHlsZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17b25DbGlja30+Jm5ic3A7e2xhYmVsTGFuZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0gb25DbGljaz17b25DbGlja30+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RBbGxJY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgcmV0dXJuICggbm9kZVVJKTtcbiAgICB9XG5cbn1cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==