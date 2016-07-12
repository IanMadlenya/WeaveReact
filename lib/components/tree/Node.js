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
                    if (defaultNodes.indexOf(nodeLabel) !== -1) {
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
//# sourceMappingURL=data:application/json;base64,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IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5cblxuY2xhc3MgTm9kZSBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZU9wZW4gPSB0aGlzLnRvZ2dsZU9wZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3QgPSB0aGlzLnRvZ2dsZVNlbGVjdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdEFsbCA9IHRoaXMudG9nZ2xlU2VsZWN0QWxsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlID0gdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdEFsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlbGVjdEFsbFZhbHVlcyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RJZGVudGlmaWVyID0gdGhpcy5zZXR0aW5ncy5zZWxlY3Quc3RhdGU/IFwic2VsZWN0XCI6dGhpcy5zZWxlY3RBbGwuc3RhdGU/XCJzZWxlY3RBbGxcIjpcIlwiO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpXG4gICAge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhID0gbmV4dFByb3BzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUobmV4dFByb3BzLmRhdGEsbmV4dFByb3BzLmxhYmVsLG5leHRQcm9wcy5ub2RlcyxuZXh0UHJvcHMuaWNvbik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIFxuICAgIHtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbC5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZWxlY3RBbGxWYWx1ZXMpO1xuICAgIH1cblxuXHRzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpe1xuXHRcdGlmKHN1cGVyLnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsbmV4dFN0YXRlKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRlbHNlIC8vIHJlbmRlciBpZiBhbnkgZ2xvYmFsIHByb3BlcnR5IGNoYW5nZXNcblx0XHR7XG5cdFx0XHRyZXR1cm4gV2VhdmUuZGV0ZWN0Q2hhbmdlKHRoaXMsdGhpcy5wcm9wcy50cmVlQ29uZmlnKTtcblx0XHR9XG5cdH1cblxuXG4gICAgdG9nZ2xlU2VsZWN0KClcbiAgICB7XG4gICAgICAgIHRoaXMuc2VsZWN0SWRlbnRpZmllciA9IFwic2VsZWN0XCI7XG5cdCAgICAvLyBzZWxlY3Rpb24gYWxsb3dlZCBpZiBpdHMgbm90IHNlbGVjdGVkIG9yIGlmIGl0cyBtdWx0aXBsZSBzZWxjdGlvbiBtb2RlXG5cdCAgICAvLyBpbiBzaW5nbGUgc2VsZWN0aW9uIGRlc2VsZWN0aW9uIGlzIG5vdCBhbGxvd2VkXG5cdCAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSB8fCAhdGhpcy5zZXR0aW5ncy5zZWxlY3QudmFsdWUpe1xuXHRcdCAgICB0aGlzLnNldHRpbmdzLnNlbGVjdC52YWx1ZSA9ICF0aGlzLnNldHRpbmdzLnNlbGVjdC52YWx1ZTtcblx0XHQgICAgaWYodGhpcy5wcm9wcy5vblNlbGVjdENsaWNrKVxuXHRcdFx0ICAgIHRoaXMucHJvcHMub25TZWxlY3RDbGljay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MsdGhpcy5zZWxlY3RBbGwpO1xuXHRcdCAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKTtcblx0ICAgIH1cblx0ICAgIGlmKCF0aGlzLnByb3BzLnRyZWVDb25maWcuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSl7XG5cdFx0ICAgIHRoaXMucHJvcHMucGFyZW50Q29uZmlnLmNoYW5nZUFjdGl2ZUNoaWxkTm9kZSh0aGlzLnNldHRpbmdzKTtcblx0ICAgIH1cblxuICAgIH1cblxuICAgIHRvZ2dsZU9wZW4oKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gIXRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vbk9wZW5DbGljaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25PcGVuQ2xpY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyk7XG4gICAgfVxuXG5cbiAgICB0b2dnbGVTZWxlY3RBbGwoKXtcbiAgICAgICAgdGhpcy5zZWxlY3RJZGVudGlmaWVyID0gXCJzZWxlY3RBbGxcIjtcbiAgICAgICAgIC8vIHRoaXMgdHJpZ2dlciBlbnRpcmUgdHJlZVxuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLnN0YXRlID0gIXRoaXMuc2VsZWN0QWxsLnN0YXRlO1xuICAgICAgICBpZih0aGlzLnByb3BzLm9uU2VsZWN0QWxsQ2xpY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0QWxsQ2xpY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLHRoaXMuc2VsZWN0QWxsKTtcbiAgICAgICAgLy90aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgfVxuXG4gICAgY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShkYXRhLGxhYmVsLG5vZGVzLGljb24pIHtcbiAgICAgICAgdmFyIGxhYmVsID0gbGFiZWw/bGFiZWw6dGhpcy5wcm9wcy5sYWJlbDtcbiAgICAgICAgdmFyIG5vZGVzID0gbm9kZXM/bm9kZXM6dGhpcy5wcm9wcy5ub2RlcztcbiAgICAgICAgdmFyIGljb24gPSBpY29uP2ljb246dGhpcy5wcm9wcy5pY29uO1xuICAgICAgICBpZihkYXRhKXsgLy8gY2FsbGluZyB3aXRoIGRhdGEgYXJndW1lbnRzIGluZGljYXRlcyBkYXRhIGlzIGNoYW5nZWQgc28gd2lwZSB0aGUgc2Vzc2lvbiBzdGF0ZVxuICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmVzZXQoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIC8vdG8tZG8gb25seSByZXF1aXJlZCBmb3Igcm9vdG5vZGVcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGljb24pO1xuXG4gICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihub2Rlcyk7XG4gICAgICAgIGlmKHRyZWVOb2RlcyAmJiB0cmVlTm9kZXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0cmVlTm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWcgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoXCJub2RlXCIgKyBpLCBOb2RlQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmxhYmVsLnN0YXRlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IobGFiZWwsdHJlZU5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmljb25OYW1lLnN0YXRlID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IoaWNvbix0cmVlTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5zZWxlY3RBbGwuc3RhdGUpe1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC5zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMoKXtcbiAgICAgICAgaWYoIXRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEpe1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKClcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVmYXVsdE5vZGVzID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLnN0YXRlO1xuICAgICAgICBpZihkZWZhdWx0Tm9kZXMgJiYgZGVmYXVsdE5vZGVzLmxlbmd0aD4wICl7XG4gICAgICAgICAgICB2YXIgbm9kZUNvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgICAgIG5vZGVDb25maWdzLm1hcChmdW5jdGlvbihub2RlQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUxhYmVsID0gbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZTtcbiAgICAgICAgICAgICAgICBpZihkZWZhdWx0Tm9kZXMuaW5kZXhPZihub2RlTGFiZWwpICE9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q2hpbGRyZW5TZWxlY3RBbGxWYWx1ZXMoKXtcblxuICAgICAgICB2YXIgbm9kZUNvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgbm9kZUNvbmZpZ3MubWFwKGZ1bmN0aW9uKG5vZGVDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgbm9kZUNvbmZpZy5zZWxlY3QudmFsdWUgPSB0aGlzLnNlbGVjdEFsbC5zdGF0ZTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuXG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInRyZWVDb25maWdcIix0aGlzLnByb3BzLnRyZWVDb25maWcpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJwYXJlbnRDb25maWdcIix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibGFiZWxcIix0aGlzLnByb3BzLmxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibm9kZXNcIix0aGlzLnByb3BzLm5vZGVzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiaWNvblwiLHRoaXMucHJvcHMuaWNvbik7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInJldmVyc2VMYXlvdXRcIix0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJvbk9wZW5DbGlja1wiLHRoaXMucHJvcHMub25PcGVuQ2xpY2spO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJvblNlbGVjdENsaWNrXCIsdGhpcy5wcm9wcy5vblNlbGVjdENsaWNrKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiZGF0YVwiLG51bGwsIG51bGwsdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IodGhpcy5wcm9wcy5ub2RlcykgKTtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiTm9kZSAtIHJlbmRlclwiKTtcbiAgICAgICAgdmFyIG5vZGVVSSA9IDxkaXYvPjtcbiAgICAgICAgdmFyIGRvbURlZmluZWRTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB2YXIgbm9kZXNVSSA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlcygpO1xuICAgICAgICAgICAgdmFyIGlzT3BlbiA9IHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcblxuICAgICAgICAgICAgdmFyIGljb25OYW1lID0gdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBpY29uVUkgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIHNlbGVjdEFsbEljb25VSSA9IFwiXCI7XG5cblxuICAgICAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7IC8vZm9sZGVyXG4gICAgICAgICAgICAgICAgaWYoaXNPcGVuKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNVSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgYnJhbmNoU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuYnJhbmNoU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYoZG9tRGVmaW5lZFN0eWxlKVN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKG5vZGVTdHlsZSxkb21EZWZpbmVkU3R5bGUsdHJ1ZSk7Ly90aGlzIGhhcHBlbnMgZm9yIHJvb3ROb2RlXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xOYW1lID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZvbGRlckljb24oaXNPcGVuKTtcblxuICAgICAgICAgICAgICAgIGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWNvblN0eWxlT2JqID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVJY29uU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGljb25OYW1lLmluZGV4T2YoXCIvXCIpID09IC0xKXsgLy8gZm9udEF3ZXNvbWUgSWNvbiBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aSBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpbWcgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBzcmM9e2ljb25OYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmVuYWJsZVNlbGVjdEFsbCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVlSWNvblN0YXRlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLnRyZWVJY29uU3RhdGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RBbGxJY29uID0gKHRoaXMuc2VsZWN0QWxsLnN0YXRlKT8gdHJlZUljb25TdGF0ZVtcInNlbGVjdFwiXTp0cmVlSWNvblN0YXRlW1widW5TZWxlY3RcIl07XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbEljb25VSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2VsZWN0QWxsfT4mbmJzcDs8aSBjbGFzc05hbWU9e3NlbGVjdEFsbEljb259Lz4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHZhciBsYWJlbExhbmcgPSB0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUgPyBXZWF2ZS5sYW5nKGxhYmVsKSA6IGxhYmVsO1xuICAgICAgICAgICAgICAgIHZhciBmb2xkZXJVSSA9IDxzcGFuIHN0eWxlPXtub2RlU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU9wZW59PiZuYnNwO3tsYWJlbExhbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0gb25DbGljaz17dGhpcy50b2dnbGVPcGVufT4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0QWxsSWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjb250cm9sTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcblxuICAgICAgICAgICAgICAgIHZhciBub2RlUGFkZGluZyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy5zdGF0ZTtcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8c3BhbiBzdHlsZT17YnJhbmNoU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xkZXJVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOlwibm9uZVwiLHBhZGRpbmdMZWZ0Om5vZGVQYWRkaW5nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIGVpdGhlciBub3JtYWwvQWN0aXZlL1NsZWN0ZWQgU3R5bGUgYmFzZWQgb24gc3RhdGUgb2YgdGhlIGxlYWZcbiAgICAgICAgICAgICAgICB2YXIgbGVhZlN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExlYWZTdHlsZShpc09wZW4sdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUgJiYgaWNvbk5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpY29uU3R5bGVPYmogPSB0aGlzLnByb3BzLnRyZWVDb25maWcubGVhZkljb25TdHlsZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoaWNvbk5hbWUuaW5kZXhPZihcIi9cIikgPT0gLTEpeyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpIHN0eWxlID0ge2ljb25TdHlsZU9ian0gY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYodGhpcy5wcm9wcy5lbmFibGVTZWxlY3RBbGwpe1xuICAgICAgICAgICAgICAgIHZhciB0cmVlSWNvblN0YXRlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLnRyZWVJY29uU3RhdGUuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdEFsbEljb24gPSBcIlwiXG4gICAgICAgICAgICAgICAgIHZhciBvbkNsaWNrID0gIHRoaXMudG9nZ2xlT3BlbjtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNlbGVjdElkZW50aWZpZXIgPT0gXCJzZWxlY3RcIil7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbEljb24gPSAodGhpcy5zZXR0aW5ncy5zZWxlY3Quc3RhdGUgKT8gdHJlZUljb25TdGF0ZVtcInNlbGVjdFwiXSA6dHJlZUljb25TdGF0ZVtcInVuU2VsZWN0XCJdO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJY29uID0gKHRoaXMuc2VsZWN0QWxsLnN0YXRlICk/IHRyZWVJY29uU3RhdGVbXCJzZWxlY3RcIl0gOnRyZWVJY29uU3RhdGVbXCJ1blNlbGVjdFwiXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoc2VsZWN0QWxsSWNvbiAmJiBzZWxlY3RBbGxJY29uLmxlbmd0aD4wICl7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB0aGlzLnRvZ2dsZVNlbGVjdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzZWxlY3RBbGxJY29uICYmIHNlbGVjdEFsbEljb24ubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSWNvblVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVTZWxlY3R9PiZuYnNwOzxpIGNsYXNzTmFtZT17c2VsZWN0QWxsSWNvbn0vPiZuYnNwOzwvc3Bhbj47XG5cbiAgICAgICAgICAgICAgICB2YXIgbGFiZWxMYW5nID0gdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlID8gV2VhdmUubGFuZyhsYWJlbCkgOiBsYWJlbDtcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e2xlYWZTdHlsZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17b25DbGlja30+Jm5ic3A7e2xhYmVsTGFuZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0gb25DbGljaz17b25DbGlja30+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RBbGxJY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgcmV0dXJuICggbm9kZVVJKTtcbiAgICB9XG5cbn1cblxuQ29tcG9uZW50TWFuYWdlci5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==