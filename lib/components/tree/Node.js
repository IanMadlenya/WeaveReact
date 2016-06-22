"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _NodeConfig = require("./NodeConfig");

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

        _this.createSessionStateForTree = _this.createSessionStateForTree.bind(_this);
        _this.isSessionStateCreatedForTreeData = false;
        if (_this.props.data) {
            _this.settings.data = _this.props.data;
            _this.createSessionStateForTree();
        }
        _this.settings.open.addGroupedCallback(_this, _this.setChildrenSessionValues);

        _this.selectAll = _this.props.treeConfig.selectAll;
        _this.selectAll.addGroupedCallback(_this, _this.setChildrenSelectAllValues);

        _this.selectIdentifier = _this.settings.select.state ? "select" : _this.selectAll.state ? "selectAll" : "";
        return _this;
    }

    _createClass(Node, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _get(Object.getPrototypeOf(Node.prototype), "componentWillReceiveProps", this).call(this, nextProps);
            if (this.props.data !== nextProps.data) {
                this.settings.data = nextProps.data;
                this.createSessionStateForTree(nextProps.data, nextProps.label, nextProps.nodes, nextProps.icon);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _get(Object.getPrototypeOf(Node.prototype), "componentWillUnmount", this).call(this);
            this.settings.open.removeCallback(this, this.setChildrenSessionValues);
            this.selectAll.removeCallback(this, this.setChildrenSelectAllValues);
        }
    }, {
        key: "toggleSelect",
        value: function toggleSelect() {
            this.selectIdentifier = "select";
            this.settings.select.value = !this.settings.select.value;
            if (this.props.onSelectClick) this.props.onSelectClick.call(this, this.props.data, this.settings, this.selectAll);
            this.props.treeConfig.changeActiveNode(this.settings);
        }
    }, {
        key: "toggleOpen",
        value: function toggleOpen() {
            this.settings.open.value = !this.settings.open.value;
            if (this.props.onOpenClick) this.props.onOpenClick.call(this, this.props.data, this.settings);
            this.props.treeConfig.changeActiveNode(this.settings);
        }
    }, {
        key: "toggleSelectAll",
        value: function toggleSelectAll() {
            this.selectIdentifier = "selectAll";
            // this trigger entire tree

            this.selectAll.state = !this.selectAll.state;
            if (this.props.onSelectAllClick) this.props.onSelectAllClick.call(this, this.props.data, this.settings, this.selectAll);
            //this.props.treeConfig.changeActiveNode(this.settings);
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
                    if (this.props.treeConfig.selectAll.state) {
                        nodeConfig.select.state = true;
                    }
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
            if (this.props.treeConfig.defaultSelectedNodes && this.props.treeConfig.defaultSelectedNodes.length > 0) {
                var nodeConfigs = this.settings.children.getObjects();
                nodeConfigs.map(function (nodeConfig, index) {
                    var nodeLabel = nodeConfig.label.state;
                    if (this.props.treeConfig.defaultSelectedNodes.indexOf(nodeLabel) !== -1) {
                        nodeConfig.select.value = true;
                    }
                }.bind(this));
            }
        }
    }, {
        key: "setChildrenSelectAllValues",
        value: function setChildrenSelectAllValues() {

            var nodeConfigs = this.settings.children.getObjects();
            nodeConfigs.map(function (nodeConfig, index) {
                nodeConfig.select.value = this.selectAll.state;
            }.bind(this));
            this.forceUpdate();
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            this.settings.props.addChildProps("treeConfig", this.props.treeConfig);
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
                var selectAllIconUI = "";

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

                    if (this.props.enableSelectAll) {
                        var treeIconState = this.props.treeConfig.treeIconState.state;
                        var selectAllIcon = this.selectAll.state ? treeIconState["select"] : treeIconState["unSelect"];
                        selectAllIconUI = _react2.default.createElement(
                            "span",
                            { onClick: this.toggleSelectAll },
                            " ",
                            _react2.default.createElement("i", { className: selectAllIcon }),
                            " "
                        );
                    }

                    var folderUI = _react2.default.createElement(
                        "span",
                        { style: nodeStyle },
                        iconUI,
                        _react2.default.createElement(
                            "span",
                            { onClick: this.toggleOpen },
                            " ",
                            Weave.lang(label)
                        ),
                        _react2.default.createElement(
                            "span",
                            { style: { flex: "1" }, onClick: this.toggleOpen },
                            " "
                        ),
                        selectAllIconUI,
                        _react2.default.createElement("i", { className: controlName })
                    );

                    var nodePadding = this.props.treeConfig.nodePadding.state;
                    nodeUI = _react2.default.createElement(
                        "span",
                        { style: branchStyle },
                        folderUI,
                        _react2.default.createElement(
                            "ul",
                            { style: { listStyleType: "none", paddingLeft: nodePadding } },
                            nodesUI
                        )
                    );
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
                        "span",
                        { onClick: this.toggleSelect },
                        " ",
                        _react2.default.createElement("i", { className: selectAllIcon }),
                        " "
                    );
                    //}

                    nodeUI = _react2.default.createElement(
                        "li",
                        { style: leafStyle },
                        iconUI,
                        _react2.default.createElement(
                            "span",
                            { onClick: onClick },
                            " ",
                            Weave.lang(label)
                        ),
                        _react2.default.createElement(
                            "span",
                            { style: { flex: "1" }, onClick: onClick },
                            " "
                        ),
                        selectAllIconUI,
                        _react2.default.createElement("i", { className: fileIcon })
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
//# sourceMappingURL=data:application/json;base64,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TSxJQUFOLENBQVcsS0FBWCxDQUEvQjt5QkFGSDt3QkFHRzs7OEJBQU0sT0FBTyxFQUFDLE1BQUssR0FBTCxFQUFSLEVBQW1CLFNBQVMsT0FBVCxFQUF6Qjs7eUJBSEg7d0JBSUksZUFKSjt3QkFLRyxxQ0FBRyxXQUFXLFFBQVgsRUFBSCxDQUxIO3FCQUFULENBaENBO2lCQXpDSjthQVpKOztBQWdHSixtQkFBUyxNQUFULENBcEdTOzs7O1dBdklQOzs7QUFnUE4sMkJBQWlCLDBCQUFqQixDQUE0Qyx1QkFBNUMsRUFBb0UsSUFBcEU7a0JBQ2UiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuXG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy50b2dnbGVPcGVuID0gdGhpcy50b2dnbGVPcGVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0ID0gdGhpcy50b2dnbGVTZWxlY3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3RBbGwgPSB0aGlzLnRvZ2dsZVNlbGVjdEFsbC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSA9IHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhID0gZmFsc2U7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0gIHRoaXMucHJvcHMudHJlZUNvbmZpZy5zZWxlY3RBbGw7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZWxlY3RBbGxWYWx1ZXMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0SWRlbnRpZmllciA9IHRoaXMuc2V0dGluZ3Muc2VsZWN0LnN0YXRlPyBcInNlbGVjdFwiOnRoaXMuc2VsZWN0QWxsLnN0YXRlP1wic2VsZWN0QWxsXCI6XCJcIjtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IG5leHRQcm9wcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKG5leHRQcm9wcy5kYXRhLG5leHRQcm9wcy5sYWJlbCxuZXh0UHJvcHMubm9kZXMsbmV4dFByb3BzLmljb24pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2VsZWN0QWxsVmFsdWVzKTtcbiAgICB9XG5cblxuICAgIHRvZ2dsZVNlbGVjdCgpe1xuICAgICAgICB0aGlzLnNlbGVjdElkZW50aWZpZXIgPSBcInNlbGVjdFwiO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnNlbGVjdC52YWx1ZSA9ICF0aGlzLnNldHRpbmdzLnNlbGVjdC52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vblNlbGVjdENsaWNrKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdENsaWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyx0aGlzLnNlbGVjdEFsbCk7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIHRvZ2dsZU9wZW4oKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gIXRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vbk9wZW5DbGljaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25PcGVuQ2xpY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyk7XG4gICAgfVxuXG5cbiAgICB0b2dnbGVTZWxlY3RBbGwoKXtcbiAgICAgICAgdGhpcy5zZWxlY3RJZGVudGlmaWVyID0gXCJzZWxlY3RBbGxcIjtcbiAgICAgICAgIC8vIHRoaXMgdHJpZ2dlciBlbnRpcmUgdHJlZVxuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLnN0YXRlID0gIXRoaXMuc2VsZWN0QWxsLnN0YXRlO1xuICAgICAgICBpZih0aGlzLnByb3BzLm9uU2VsZWN0QWxsQ2xpY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0QWxsQ2xpY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLHRoaXMuc2VsZWN0QWxsKTtcbiAgICAgICAgLy90aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgfVxuXG4gICAgY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShkYXRhLGxhYmVsLG5vZGVzLGljb24pIHtcbiAgICAgICAgdmFyIGxhYmVsID0gbGFiZWw/bGFiZWw6dGhpcy5wcm9wcy5sYWJlbDtcbiAgICAgICAgdmFyIG5vZGVzID0gbm9kZXM/bm9kZXM6dGhpcy5wcm9wcy5ub2RlcztcbiAgICAgICAgdmFyIGljb24gPSBpY29uP2ljb246dGhpcy5wcm9wcy5pY29uO1xuICAgICAgICBpZihkYXRhKXsgLy8gY2FsbGluZyB3aXRoIGRhdGEgYXJndW1lbnRzIGluZGljYXRlcyBkYXRhIGlzIGNoYW5nZWQgc28gd2lwZSB0aGUgc2Vzc2lvbiBzdGF0ZVxuICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmVzZXQoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIC8vdG8tZG8gb25seSByZXF1aXJlZCBmb3Igcm9vdG5vZGVcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGljb24pO1xuXG4gICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihub2Rlcyk7XG4gICAgICAgIGlmKHRyZWVOb2RlcyAmJiB0cmVlTm9kZXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0cmVlTm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWcgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoXCJub2RlXCIgKyBpLCBOb2RlQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmxhYmVsLnN0YXRlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IobGFiZWwsdHJlZU5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmljb25OYW1lLnN0YXRlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IoaWNvbix0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5zZWxlY3RBbGwuc3RhdGUpe1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC5zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMoKXtcbiAgICAgICAgaWYoIXRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEpe1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKClcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMgJiYgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLmxlbmd0aD4wICl7XG4gICAgICAgICAgICB2YXIgbm9kZUNvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgICAgIG5vZGVDb25maWdzLm1hcChmdW5jdGlvbihub2RlQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUxhYmVsID0gbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuaW5kZXhPZihub2RlTGFiZWwpICE9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q2hpbGRyZW5TZWxlY3RBbGxWYWx1ZXMoKXtcblxuICAgICAgICB2YXIgbm9kZUNvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgbm9kZUNvbmZpZ3MubWFwKGZ1bmN0aW9uKG5vZGVDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgbm9kZUNvbmZpZy5zZWxlY3QudmFsdWUgPSB0aGlzLnNlbGVjdEFsbC5zdGF0ZTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuXG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInRyZWVDb25maWdcIix0aGlzLnByb3BzLnRyZWVDb25maWcpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJsYWJlbFwiLHRoaXMucHJvcHMubGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJub2Rlc1wiLHRoaXMucHJvcHMubm9kZXMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJpY29uXCIsdGhpcy5wcm9wcy5pY29uKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwicmV2ZXJzZUxheW91dFwiLHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9uT3BlbkNsaWNrXCIsdGhpcy5wcm9wcy5vbk9wZW5DbGljayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9uU2VsZWN0Q2xpY2tcIix0aGlzLnByb3BzLm9uU2VsZWN0Q2xpY2spO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJkYXRhXCIsbnVsbCwgbnVsbCx0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcih0aGlzLnByb3BzLm5vZGVzKSApO1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJOb2RlIC0gcmVuZGVyXCIpO1xuICAgICAgICB2YXIgbm9kZVVJID0gPGRpdi8+O1xuICAgICAgICB2YXIgZG9tRGVmaW5lZFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHZhciBub2Rlc1VJID0gW107XG4gICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgICAgICB2YXIgaXNPcGVuID0gdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcblxuICAgICAgICAgICAgdmFyIGljb25VSSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgc2VsZWN0QWxsSWNvblVJID0gXCJcIjtcblxuXG4gICAgICAgICAgICBpZihub2Rlcy5sZW5ndGggPiAwKXsgLy9mb2xkZXJcbiAgICAgICAgICAgICAgICBpZihpc09wZW4pe1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBicmFuY2hTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5icmFuY2hTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZVN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBpZihkb21EZWZpbmVkU3R5bGUpU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMobm9kZVN0eWxlLGRvbURlZmluZWRTdHlsZSx0cnVlKTsvL3RoaXMgaGFwcGVucyBmb3Igcm9vdE5vZGVcbiAgICAgICAgICAgICAgICB2YXIgY29udHJvbE5hbWUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0Rm9sZGVySWNvbihpc09wZW4pO1xuXG4gICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpY29uU3R5bGVPYmogPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZUljb25TdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIi9cIikgPT0gLTEpeyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpIHN0eWxlID0ge2ljb25TdHlsZU9ian0gY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuZW5hYmxlU2VsZWN0QWxsKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWVJY29uU3RhdGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcudHJlZUljb25TdGF0ZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdEFsbEljb24gPSAodGhpcy5zZWxlY3RBbGwuc3RhdGUpPyB0cmVlSWNvblN0YXRlW1wic2VsZWN0XCJdOnRyZWVJY29uU3RhdGVbXCJ1blNlbGVjdFwiXTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSWNvblVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVTZWxlY3RBbGx9PiZuYnNwOzxpIGNsYXNzTmFtZT17c2VsZWN0QWxsSWNvbn0vPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZm9sZGVyVUkgPSA8c3BhbiBzdHlsZT17bm9kZVN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgb25DbGljaz17dGhpcy50b2dnbGVPcGVufT4mbmJzcDt7V2VhdmUubGFuZyhsYWJlbCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0gb25DbGljaz17dGhpcy50b2dnbGVPcGVufT4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0QWxsSWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjb250cm9sTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcblxuICAgICAgICAgICAgICAgIHZhciBub2RlUGFkZGluZyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy5zdGF0ZTtcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8c3BhbiBzdHlsZT17YnJhbmNoU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xkZXJVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOlwibm9uZVwiLHBhZGRpbmdMZWZ0Om5vZGVQYWRkaW5nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIGVpdGhlciBub3JtYWwvQWN0aXZlL1NsZWN0ZWQgU3R5bGUgYmFzZWQgb24gc3RhdGUgb2YgdGhlIGxlYWZcbiAgICAgICAgICAgICAgICB2YXIgbGVhZlN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExlYWZTdHlsZShpc09wZW4sdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpY29uU3R5bGVPYmogPSB0aGlzLnByb3BzLnRyZWVDb25maWcubGVhZkljb25TdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIi9cIikgPT0gLTEpeyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpIHN0eWxlID0ge2ljb25TdHlsZU9ian0gY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYodGhpcy5wcm9wcy5lbmFibGVTZWxlY3RBbGwpe1xuICAgICAgICAgICAgICAgIHZhciB0cmVlSWNvblN0YXRlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLnRyZWVJY29uU3RhdGUuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdEFsbEljb24gPSBcIlwiXG4gICAgICAgICAgICAgICAgIHZhciBvbkNsaWNrID0gIHRoaXMudG9nZ2xlT3BlbjtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNlbGVjdElkZW50aWZpZXIgPT0gXCJzZWxlY3RcIil7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbEljb24gPSAodGhpcy5zZXR0aW5ncy5zZWxlY3Quc3RhdGUgKT8gdHJlZUljb25TdGF0ZVtcInNlbGVjdFwiXSA6dHJlZUljb25TdGF0ZVtcInVuU2VsZWN0XCJdO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJY29uID0gKHRoaXMuc2VsZWN0QWxsLnN0YXRlICk/IHRyZWVJY29uU3RhdGVbXCJzZWxlY3RcIl0gOnRyZWVJY29uU3RhdGVbXCJ1blNlbGVjdFwiXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoc2VsZWN0QWxsSWNvbiAmJiBzZWxlY3RBbGxJY29uLmxlbmd0aD4wICl7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB0aGlzLnRvZ2dsZVNlbGVjdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzZWxlY3RBbGxJY29uICYmIHNlbGVjdEFsbEljb24ubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSWNvblVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVTZWxlY3R9PiZuYnNwOzxpIGNsYXNzTmFtZT17c2VsZWN0QWxsSWNvbn0vPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAvL31cblxuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtvbkNsaWNrfT4mbmJzcDt7V2VhdmUubGFuZyhsYWJlbCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19IG9uQ2xpY2s9e29uQ2xpY2t9PiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0QWxsSWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZmlsZUljb259PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIHJldHVybiAoIG5vZGVVSSk7XG4gICAgfVxuXG59XG5cbkNvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lk5vZGVDb25maWdcIixOb2RlKTtcbmV4cG9ydCBkZWZhdWx0IE5vZGU7XG4iXX0=