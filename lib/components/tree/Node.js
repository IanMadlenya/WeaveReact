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
            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.settings);
            this.props.treeConfig.changeActiveNode(this.settings);
        }
    }, {
        key: "toggleOpen",
        value: function toggleOpen() {
            this.settings.open.value = !this.settings.open.value;
            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.settings);
            this.props.treeConfig.changeActiveNode(this.settings);
        }
    }, {
        key: "toggleSelectAll",
        value: function toggleSelectAll() {
            this.selectIdentifier = "selectAll";
            // this trigger entire tree

            this.selectAll.state = !this.selectAll.state;
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
            this.settings.props.addChildProps("clickCallback", this.props.clickCallback);
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
//# sourceMappingURL=data:application/json;base64,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Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcblxuXG5jbGFzcyBOb2RlIGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlT3BlbiA9IHRoaXMudG9nZ2xlT3Blbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdCA9IHRoaXMudG9nZ2xlU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0QWxsID0gdGhpcy50b2dnbGVTZWxlY3RBbGwuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUgPSB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IGZhbHNlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKTtcblxuICAgICAgICB0aGlzLnNlbGVjdEFsbCA9ICB0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0QWxsO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbC5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2VsZWN0QWxsVmFsdWVzKTtcblxuICAgICAgICB0aGlzLnNlbGVjdElkZW50aWZpZXIgPSB0aGlzLnNldHRpbmdzLnNlbGVjdC5zdGF0ZT8gXCJzZWxlY3RcIjp0aGlzLnNlbGVjdEFsbC5zdGF0ZT9cInNlbGVjdEFsbFwiOlwiXCI7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRhdGEgPSBuZXh0UHJvcHMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShuZXh0UHJvcHMuZGF0YSxuZXh0UHJvcHMubGFiZWwsbmV4dFByb3BzLm5vZGVzLG5leHRQcm9wcy5pY29uKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4ucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlbGVjdEFsbFZhbHVlcyk7XG4gICAgfVxuXG5cbiAgICB0b2dnbGVTZWxlY3QoKXtcbiAgICAgICAgdGhpcy5zZWxlY3RJZGVudGlmaWVyID0gXCJzZWxlY3RcIjtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZWxlY3QudmFsdWUgPSAhdGhpcy5zZXR0aW5ncy5zZWxlY3QudmFsdWU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPcGVuKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9ICF0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG5cblxuICAgIHRvZ2dsZVNlbGVjdEFsbCgpe1xuICAgICAgICB0aGlzLnNlbGVjdElkZW50aWZpZXIgPSBcInNlbGVjdEFsbFwiO1xuICAgICAgICAgLy8gdGhpcyB0cmlnZ2VyIGVudGlyZSB0cmVlXG5cbiAgICAgICAgIHRoaXMuc2VsZWN0QWxsLnN0YXRlID0gIXRoaXMuc2VsZWN0QWxsLnN0YXRlO1xuICAgICB9XG5cbiAgICBjcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKGRhdGEsbGFiZWwsbm9kZXMsaWNvbikge1xuICAgICAgICB2YXIgbGFiZWwgPSBsYWJlbD9sYWJlbDp0aGlzLnByb3BzLmxhYmVsO1xuICAgICAgICB2YXIgbm9kZXMgPSBub2Rlcz9ub2Rlczp0aGlzLnByb3BzLm5vZGVzO1xuICAgICAgICB2YXIgaWNvbiA9IGljb24/aWNvbjp0aGlzLnByb3BzLmljb247XG4gICAgICAgIGlmKGRhdGEpeyAvLyBjYWxsaW5nIHdpdGggZGF0YSBhcmd1bWVudHMgaW5kaWNhdGVzIGRhdGEgaXMgY2hhbmdlZCBzbyB3aXBlIHRoZSBzZXNzaW9uIHN0YXRlXG4gICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNldCgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgLy90by1kbyBvbmx5IHJlcXVpcmVkIGZvciByb290bm9kZVxuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IobGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IoaWNvbik7XG5cbiAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKG5vZGVzKTtcbiAgICAgICAgaWYodHJlZU5vZGVzICYmIHRyZWVOb2Rlcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRyZWVOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChcIm5vZGVcIiArIGksIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcubGFiZWwuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCx0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcuaWNvbk5hbWUuc3RhdGUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uLHRyZWVOb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdEFsbC5zdGF0ZSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldENoaWxkcmVuU2Vzc2lvblZhbHVlcygpe1xuICAgICAgICBpZighdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSl7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2RlcyAmJiB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMubGVuZ3RoPjAgKXtcbiAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgbm9kZUNvbmZpZ3MubWFwKGZ1bmN0aW9uKG5vZGVDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgICAgIHZhciBub2RlTGFiZWwgPSBub2RlQ29uZmlnLmxhYmVsLnN0YXRlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5pbmRleE9mKG5vZGVMYWJlbCkgIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5zZWxlY3QudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDaGlsZHJlblNlbGVjdEFsbFZhbHVlcygpe1xuXG4gICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICBub2RlQ29uZmlncy5tYXAoZnVuY3Rpb24obm9kZUNvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9IHRoaXMuc2VsZWN0QWxsLnN0YXRlO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwidHJlZUNvbmZpZ1wiLHRoaXMucHJvcHMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImxhYmVsXCIsdGhpcy5wcm9wcy5sYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm5vZGVzXCIsdGhpcy5wcm9wcy5ub2Rlcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImljb25cIix0aGlzLnByb3BzLmljb24pO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJyZXZlcnNlTGF5b3V0XCIsdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiY2xpY2tDYWxsYmFja1wiLHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImRhdGFcIixudWxsLCBudWxsLHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKHRoaXMucHJvcHMubm9kZXMpICk7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnJlbmRlckNoaWxkcmVuKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIk5vZGUgLSByZW5kZXJcIik7XG4gICAgICAgIHZhciBub2RlVUkgPSA8ZGl2Lz47XG4gICAgICAgIHZhciBkb21EZWZpbmVkU3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdmFyIG5vZGVzVUkgPSBbXTtcbiAgICAgICAgICAgIHZhciBub2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZXMoKTtcbiAgICAgICAgICAgIHZhciBpc09wZW4gPSB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWU7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgaWNvblVJID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBzZWxlY3RBbGxJY29uVUkgPSBcIlwiO1xuXG5cbiAgICAgICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApeyAvL2ZvbGRlclxuICAgICAgICAgICAgICAgIGlmKGlzT3Blbil7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGJyYW5jaFN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmJyYW5jaFN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgIHZhciBub2RlU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgIGlmKGRvbURlZmluZWRTdHlsZSlTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhub2RlU3R5bGUsZG9tRGVmaW5lZFN0eWxlLHRydWUpOy8vdGhpcyBoYXBwZW5zIGZvciByb290Tm9kZVxuICAgICAgICAgICAgICAgIHZhciBjb250cm9sTmFtZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGb2xkZXJJY29uKGlzT3Blbik7XG5cbiAgICAgICAgICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iaiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlSWNvblN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSl7IC8vIGZvbnRBd2Vzb21lIEljb24gTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aW1nIHN0eWxlID0ge2ljb25TdHlsZU9ian0gc3JjPXtpY29uTmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5lbmFibGVTZWxlY3RBbGwpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlZUljb25TdGF0ZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy50cmVlSWNvblN0YXRlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0QWxsSWNvbiA9ICh0aGlzLnNlbGVjdEFsbC5zdGF0ZSk/IHRyZWVJY29uU3RhdGVbXCJzZWxlY3RcIl06dHJlZUljb25TdGF0ZVtcInVuU2VsZWN0XCJdO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJY29uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNlbGVjdEFsbH0+Jm5ic3A7PGkgY2xhc3NOYW1lPXtzZWxlY3RBbGxJY29ufS8+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBmb2xkZXJVSSA9IDxzcGFuIHN0eWxlPXtub2RlU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW59PiZuYnNwO3tXZWF2ZS5sYW5nKGxhYmVsKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZsZXg6XCIxXCJ9fSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW59PiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RBbGxJY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NvbnRyb2xOYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVQYWRkaW5nID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnN0YXRlO1xuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxzcGFuIHN0eWxlPXticmFuY2hTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvbGRlclVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGU6XCJub25lXCIscGFkZGluZ0xlZnQ6bm9kZVBhZGRpbmd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXsgLy9sZWFmXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZpbGVJY29uKHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXR1cm4gZWl0aGVyIG5vcm1hbC9BY3RpdmUvU2xlY3RlZCBTdHlsZSBiYXNlZCBvbiBzdGF0ZSBvZiB0aGUgbGVhZlxuICAgICAgICAgICAgICAgIHZhciBsZWFmU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0TGVhZlN0eWxlKGlzT3Blbix0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iaiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5sZWFmSWNvblN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSl7IC8vIGZvbnRBd2Vzb21lIEljb24gTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aW1nIHN0eWxlID0ge2ljb25TdHlsZU9ian0gc3JjPXtpY29uTmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9pZih0aGlzLnByb3BzLmVuYWJsZVNlbGVjdEFsbCl7XG4gICAgICAgICAgICAgICAgdmFyIHRyZWVJY29uU3RhdGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcudHJlZUljb25TdGF0ZS5zdGF0ZTtcblxuICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0QWxsSWNvbiA9IFwiXCJcbiAgICAgICAgICAgICAgICAgdmFyIG9uQ2xpY2sgPSAgdGhpcy50b2dnbGVPcGVuO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0SWRlbnRpZmllciA9PSBcInNlbGVjdFwiKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSWNvbiA9ICh0aGlzLnNldHRpbmdzLnNlbGVjdC5zdGF0ZSApPyB0cmVlSWNvblN0YXRlW1wic2VsZWN0XCJdIDp0cmVlSWNvblN0YXRlW1widW5TZWxlY3RcIl07XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbEljb24gPSAodGhpcy5zZWxlY3RBbGwuc3RhdGUgKT8gdHJlZUljb25TdGF0ZVtcInNlbGVjdFwiXSA6dHJlZUljb25TdGF0ZVtcInVuU2VsZWN0XCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihzZWxlY3RBbGxJY29uICYmIHNlbGVjdEFsbEljb24ubGVuZ3RoPjAgKXtcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHRoaXMudG9nZ2xlU2VsZWN0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdEFsbEljb24gJiYgc2VsZWN0QWxsSWNvbi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJY29uVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNlbGVjdH0+Jm5ic3A7PGkgY2xhc3NOYW1lPXtzZWxlY3RBbGxJY29ufS8+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgIC8vfVxuXG4gICAgICAgICAgICAgICAgbm9kZVVJID0gPGxpIHN0eWxlPXtsZWFmU3R5bGV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e29uQ2xpY2t9PiZuYnNwO3tXZWF2ZS5sYW5nKGxhYmVsKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0gb25DbGljaz17b25DbGlja30+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RBbGxJY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgcmV0dXJuICggbm9kZVVJKTtcbiAgICB9XG5cbn1cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==
