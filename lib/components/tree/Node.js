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
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (_get(Object.getPrototypeOf(Node.prototype), "shouldComponentUpdate", this).call(this, nextProps, nextState)) {
                return true;
            } else // render if any global property changes
                {
                    return Weave.detectChange(this, this.props.treeConfig);
                }
        }
    }, {
        key: "toggleSelect",
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
            var defaultNodes = this.props.treeConfig.defaultSelectedNodes.state;
            if (defaultNodes && defaultNodes.length > 0) {
                var nodeConfigs = this.settings.children.getObjects();
                nodeConfigs.map(function (nodeConfig, index) {
                    var nodeLabel = nodeConfig.label.state;
                    if (defaultNodes.indexOf(nodeLabel) != -1) {
                        nodeConfig.select.value = true;
                    } else {
                        nodeConfig.select.value = false;
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

                    var labelLang = this.settings.reverseLayout.state ? Weave.lang(label) : label;
                    var folderUI = _react2.default.createElement(
                        "span",
                        { style: nodeStyle },
                        iconUI,
                        _react2.default.createElement(
                            "span",
                            { onClick: this.toggleOpen },
                            " ",
                            labelLang
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

                    var labelLang = this.settings.reverseLayout.state ? Weave.lang(label) : label;
                    nodeUI = _react2.default.createElement(
                        "li",
                        { style: leafStyle },
                        iconUI,
                        _react2.default.createElement(
                            "span",
                            { onClick: onClick },
                            " ",
                            labelLang
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
//# sourceMappingURL=data:application/json;base64,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IiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcblxuXG5jbGFzcyBOb2RlIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlT3BlbiA9IHRoaXMudG9nZ2xlT3Blbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdCA9IHRoaXMudG9nZ2xlU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0QWxsID0gdGhpcy50b2dnbGVTZWxlY3RBbGwuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUgPSB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IGZhbHNlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcblxuICAgICAgICB0aGlzLnNlbGVjdEFsbCA9ICB0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0QWxsO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbC5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2VsZWN0QWxsVmFsdWVzKTtcblxuICAgICAgICB0aGlzLnNlbGVjdElkZW50aWZpZXIgPSB0aGlzLnNldHRpbmdzLnNlbGVjdC5zdGF0ZT8gXCJzZWxlY3RcIjp0aGlzLnNlbGVjdEFsbC5zdGF0ZT9cInNlbGVjdEFsbFwiOlwiXCI7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcylcbiAgICB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGEgPSBuZXh0UHJvcHMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShuZXh0UHJvcHMuZGF0YSxuZXh0UHJvcHMubGFiZWwsbmV4dFByb3BzLm5vZGVzLG5leHRQcm9wcy5pY29uKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkgXG4gICAge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4ucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlbGVjdEFsbFZhbHVlcyk7XG4gICAgfVxuXG5cdHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSl7XG5cdFx0aWYoc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyxuZXh0U3RhdGUpKVxuXHRcdHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdGVsc2UgLy8gcmVuZGVyIGlmIGFueSBnbG9iYWwgcHJvcGVydHkgY2hhbmdlc1xuXHRcdHtcblx0XHRcdHJldHVybiBXZWF2ZS5kZXRlY3RDaGFuZ2UodGhpcyx0aGlzLnByb3BzLnRyZWVDb25maWcpO1xuXHRcdH1cblx0fVxuXG5cbiAgICB0b2dnbGVTZWxlY3QoKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZWxlY3RJZGVudGlmaWVyID0gXCJzZWxlY3RcIjtcblx0ICAgIC8vIHNlbGVjdGlvbiBhbGxvd2VkIGlmIGl0cyBub3Qgc2VsZWN0ZWQgb3IgaWYgaXRzIG11bHRpcGxlIHNlbGN0aW9uIG1vZGVcblx0ICAgIC8vIGluIHNpbmdsZSBzZWxlY3Rpb24gZGVzZWxlY3Rpb24gaXMgbm90IGFsbG93ZWRcblx0ICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5hbGxvd011bHRpcGxlU2VsZWN0aW9uLnZhbHVlIHx8ICF0aGlzLnNldHRpbmdzLnNlbGVjdC52YWx1ZSl7XG5cdFx0ICAgIHRoaXMuc2V0dGluZ3Muc2VsZWN0LnZhbHVlID0gIXRoaXMuc2V0dGluZ3Muc2VsZWN0LnZhbHVlO1xuXHRcdCAgICBpZih0aGlzLnByb3BzLm9uU2VsZWN0Q2xpY2spXG5cdFx0XHQgICAgdGhpcy5wcm9wcy5vblNlbGVjdENsaWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyx0aGlzLnNlbGVjdEFsbCk7XG5cdFx0ICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpO1xuXHQgICAgfVxuXHQgICAgaWYoIXRoaXMucHJvcHMudHJlZUNvbmZpZy5hbGxvd011bHRpcGxlU2VsZWN0aW9uLnZhbHVlKXtcblx0XHQgICAgdGhpcy5wcm9wcy5wYXJlbnRDb25maWcuY2hhbmdlQWN0aXZlQ2hpbGROb2RlKHRoaXMuc2V0dGluZ3MpO1xuXHQgICAgfVxuXG4gICAgfVxuXG4gICAgdG9nZ2xlT3BlbigpXG4gICAge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSAhdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLm9uT3BlbkNsaWNrKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wZW5DbGljay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG5cblxuICAgIHRvZ2dsZVNlbGVjdEFsbCgpe1xuICAgICAgICB0aGlzLnNlbGVjdElkZW50aWZpZXIgPSBcInNlbGVjdEFsbFwiO1xuICAgICAgICAgLy8gdGhpcyB0cmlnZ2VyIGVudGlyZSB0cmVlXG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGwuc3RhdGUgPSAhdGhpcy5zZWxlY3RBbGwuc3RhdGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMub25TZWxlY3RBbGxDbGljaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3RBbGxDbGljay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MsdGhpcy5zZWxlY3RBbGwpO1xuICAgICAgICAvL3RoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpO1xuICAgICB9XG5cbiAgICBjcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKGRhdGEsbGFiZWwsbm9kZXMsaWNvbikge1xuICAgICAgICB2YXIgbGFiZWwgPSBsYWJlbD9sYWJlbDp0aGlzLnByb3BzLmxhYmVsO1xuICAgICAgICB2YXIgbm9kZXMgPSBub2Rlcz9ub2Rlczp0aGlzLnByb3BzLm5vZGVzO1xuICAgICAgICB2YXIgaWNvbiA9IGljb24/aWNvbjp0aGlzLnByb3BzLmljb247XG4gICAgICAgIGlmKGRhdGEpeyAvLyBjYWxsaW5nIHdpdGggZGF0YSBhcmd1bWVudHMgaW5kaWNhdGVzIGRhdGEgaXMgY2hhbmdlZCBzbyB3aXBlIHRoZSBzZXNzaW9uIHN0YXRlXG4gICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNldCgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgLy90by1kbyBvbmx5IHJlcXVpcmVkIGZvciByb290bm9kZVxuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IobGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IoaWNvbik7XG5cbiAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKG5vZGVzKTtcbiAgICAgICAgaWYodHJlZU5vZGVzICYmIHRyZWVOb2Rlcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRyZWVOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChcIm5vZGVcIiArIGksIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcubGFiZWwuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCx0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcuaWNvbk5hbWUuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uLHRyZWVOb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdEFsbC5zdGF0ZSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldENoaWxkcmVuU2Vzc2lvblZhbHVlcygpXG4gICAge1xuICAgICAgICBpZighdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKClcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVmYXVsdE5vZGVzID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLnN0YXRlO1xuICAgICAgICBpZihkZWZhdWx0Tm9kZXMgJiYgZGVmYXVsdE5vZGVzLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgbm9kZUNvbmZpZ3MubWFwKGZ1bmN0aW9uKG5vZGVDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgICAgIHZhciBub2RlTGFiZWwgPSBub2RlQ29uZmlnLmxhYmVsLnN0YXRlO1xuICAgICAgICAgICAgICAgIGlmKGRlZmF1bHROb2Rlcy5pbmRleE9mKG5vZGVMYWJlbCkgIT0gLTEpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDaGlsZHJlblNlbGVjdEFsbFZhbHVlcygpe1xuXG4gICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICBub2RlQ29uZmlncy5tYXAoZnVuY3Rpb24obm9kZUNvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9IHRoaXMuc2VsZWN0QWxsLnN0YXRlO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwidHJlZUNvbmZpZ1wiLHRoaXMucHJvcHMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInBhcmVudENvbmZpZ1wiLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJsYWJlbFwiLHRoaXMucHJvcHMubGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJub2Rlc1wiLHRoaXMucHJvcHMubm9kZXMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJpY29uXCIsdGhpcy5wcm9wcy5pY29uKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwicmV2ZXJzZUxheW91dFwiLHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9uT3BlbkNsaWNrXCIsdGhpcy5wcm9wcy5vbk9wZW5DbGljayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm9uU2VsZWN0Q2xpY2tcIix0aGlzLnByb3BzLm9uU2VsZWN0Q2xpY2spO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJkYXRhXCIsbnVsbCwgbnVsbCx0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcih0aGlzLnByb3BzLm5vZGVzKSApO1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5yZW5kZXJDaGlsZHJlbih0aGlzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKENvbXBvbmVudE1hbmFnZXIuZGVidWcpY29uc29sZS5sb2coXCJOb2RlIC0gcmVuZGVyXCIpO1xuICAgICAgICB2YXIgbm9kZVVJID0gPGRpdi8+O1xuICAgICAgICB2YXIgZG9tRGVmaW5lZFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHZhciBub2Rlc1VJID0gW107XG4gICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgICAgICB2YXIgaXNPcGVuID0gdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcblxuICAgICAgICAgICAgdmFyIGljb25VSSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgc2VsZWN0QWxsSWNvblVJID0gXCJcIjtcblxuXG4gICAgICAgICAgICBpZihub2Rlcy5sZW5ndGggPiAwKXsgLy9mb2xkZXJcbiAgICAgICAgICAgICAgICBpZihpc09wZW4pe1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBicmFuY2hTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5icmFuY2hTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZVN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVTdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBpZihkb21EZWZpbmVkU3R5bGUpU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMobm9kZVN0eWxlLGRvbURlZmluZWRTdHlsZSx0cnVlKTsvL3RoaXMgaGFwcGVucyBmb3Igcm9vdE5vZGVcbiAgICAgICAgICAgICAgICB2YXIgY29udHJvbE5hbWUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0Rm9sZGVySWNvbihpc09wZW4pO1xuXG4gICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpY29uU3R5bGVPYmogPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZUljb25TdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIi9cIikgPT0gLTEpeyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpIHN0eWxlID0ge2ljb25TdHlsZU9ian0gY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuZW5hYmxlU2VsZWN0QWxsKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWVJY29uU3RhdGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcudHJlZUljb25TdGF0ZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdEFsbEljb24gPSAodGhpcy5zZWxlY3RBbGwuc3RhdGUpPyB0cmVlSWNvblN0YXRlW1wic2VsZWN0XCJdOnRyZWVJY29uU3RhdGVbXCJ1blNlbGVjdFwiXTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSWNvblVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVTZWxlY3RBbGx9PiZuYnNwOzxpIGNsYXNzTmFtZT17c2VsZWN0QWxsSWNvbn0vPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgdmFyIGxhYmVsTGFuZyA9IHRoaXMuc2V0dGluZ3MucmV2ZXJzZUxheW91dC5zdGF0ZSA/IFdlYXZlLmxhbmcobGFiZWwpIDogbGFiZWw7XG4gICAgICAgICAgICAgICAgdmFyIGZvbGRlclVJID0gPHNwYW4gc3R5bGU9e25vZGVTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn0+Jm5ic3A7e2xhYmVsTGFuZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZsZXg6XCIxXCJ9fSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW59PiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RBbGxJY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NvbnRyb2xOYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVQYWRkaW5nID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnN0YXRlO1xuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxzcGFuIHN0eWxlPXticmFuY2hTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvbGRlclVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGU6XCJub25lXCIscGFkZGluZ0xlZnQ6bm9kZVBhZGRpbmd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXsgLy9sZWFmXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZpbGVJY29uKHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXR1cm4gZWl0aGVyIG5vcm1hbC9BY3RpdmUvU2xlY3RlZCBTdHlsZSBiYXNlZCBvbiBzdGF0ZSBvZiB0aGUgbGVhZlxuICAgICAgICAgICAgICAgIHZhciBsZWFmU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0TGVhZlN0eWxlKGlzT3Blbix0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iaiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5sZWFmSWNvblN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSl7IC8vIGZvbnRBd2Vzb21lIEljb24gTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aW1nIHN0eWxlID0ge2ljb25TdHlsZU9ian0gc3JjPXtpY29uTmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9pZih0aGlzLnByb3BzLmVuYWJsZVNlbGVjdEFsbCl7XG4gICAgICAgICAgICAgICAgdmFyIHRyZWVJY29uU3RhdGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcudHJlZUljb25TdGF0ZS5zdGF0ZTtcblxuICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0QWxsSWNvbiA9IFwiXCJcbiAgICAgICAgICAgICAgICAgdmFyIG9uQ2xpY2sgPSAgdGhpcy50b2dnbGVPcGVuO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0SWRlbnRpZmllciA9PSBcInNlbGVjdFwiKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSWNvbiA9ICh0aGlzLnNldHRpbmdzLnNlbGVjdC5zdGF0ZSApPyB0cmVlSWNvblN0YXRlW1wic2VsZWN0XCJdIDp0cmVlSWNvblN0YXRlW1widW5TZWxlY3RcIl07XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbEljb24gPSAodGhpcy5zZWxlY3RBbGwuc3RhdGUgKT8gdHJlZUljb25TdGF0ZVtcInNlbGVjdFwiXSA6dHJlZUljb25TdGF0ZVtcInVuU2VsZWN0XCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihzZWxlY3RBbGxJY29uICYmIHNlbGVjdEFsbEljb24ubGVuZ3RoPjAgKXtcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHRoaXMudG9nZ2xlU2VsZWN0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdEFsbEljb24gJiYgc2VsZWN0QWxsSWNvbi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJY29uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNlbGVjdH0+Jm5ic3A7PGkgY2xhc3NOYW1lPXtzZWxlY3RBbGxJY29ufS8+Jm5ic3A7PC9zcGFuPjtcblxuICAgICAgICAgICAgICAgIHZhciBsYWJlbExhbmcgPSB0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUgPyBXZWF2ZS5sYW5nKGxhYmVsKSA6IGxhYmVsO1xuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtvbkNsaWNrfT4mbmJzcDt7bGFiZWxMYW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZsZXg6XCIxXCJ9fSBvbkNsaWNrPXtvbkNsaWNrfT4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdEFsbEljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICByZXR1cm4gKCBub2RlVUkpO1xuICAgIH1cblxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19