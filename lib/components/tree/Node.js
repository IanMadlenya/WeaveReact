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
            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.settings, this.selectAll);
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
            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.settings, this.selectAll);
            this.props.treeConfig.changeActiveNode(this.settings);
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
//# sourceMappingURL=data:application/json;base64,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O3dCQUdHOzs4QkFBTSxPQUFPLEVBQUMsTUFBSyxHQUFMLEVBQVIsRUFBbUIsU0FBUyxPQUFULEVBQXpCOzt5QkFISDt3QkFJSSxlQUpKO3dCQUtHLHFDQUFHLFdBQVcsUUFBWCxFQUFILENBTEg7cUJBQVQsQ0FoQ0E7aUJBekNKO2FBWko7O0FBZ0dKLG1CQUFTLE1BQVQsQ0FwR1M7Ozs7V0F0SVA7OztBQStPTiwyQkFBaUIsMEJBQWpCLENBQTRDLHVCQUE1QyxFQUFvRSxJQUFwRTtrQkFDZSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RDb21wb25lbnQgZnJvbSBcIi4uLy4uL0Fic3RyYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5cblxuY2xhc3MgTm9kZSBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZU9wZW4gPSB0aGlzLnRvZ2dsZU9wZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3QgPSB0aGlzLnRvZ2dsZVNlbGVjdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdEFsbCA9IHRoaXMudG9nZ2xlU2VsZWN0QWxsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlID0gdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdEFsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlbGVjdEFsbFZhbHVlcyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RJZGVudGlmaWVyID0gdGhpcy5zZXR0aW5ncy5zZWxlY3Quc3RhdGU/IFwic2VsZWN0XCI6dGhpcy5zZWxlY3RBbGwuc3RhdGU/XCJzZWxlY3RBbGxcIjpcIlwiO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhID0gbmV4dFByb3BzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUobmV4dFByb3BzLmRhdGEsbmV4dFByb3BzLmxhYmVsLG5leHRQcm9wcy5ub2RlcyxuZXh0UHJvcHMuaWNvbik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMpO1xuICAgICAgICB0aGlzLnNlbGVjdEFsbC5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuc2V0Q2hpbGRyZW5TZWxlY3RBbGxWYWx1ZXMpO1xuICAgIH1cblxuXG4gICAgdG9nZ2xlU2VsZWN0KCl7XG4gICAgICAgIHRoaXMuc2VsZWN0SWRlbnRpZmllciA9IFwic2VsZWN0XCI7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2VsZWN0LnZhbHVlID0gIXRoaXMuc2V0dGluZ3Muc2VsZWN0LnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLHRoaXMuc2VsZWN0QWxsKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlT3Blbigpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSAhdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyk7XG4gICAgfVxuXG5cbiAgICB0b2dnbGVTZWxlY3RBbGwoKXtcbiAgICAgICAgdGhpcy5zZWxlY3RJZGVudGlmaWVyID0gXCJzZWxlY3RBbGxcIjtcbiAgICAgICAgIC8vIHRoaXMgdHJpZ2dlciBlbnRpcmUgdHJlZVxuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLnN0YXRlID0gIXRoaXMuc2VsZWN0QWxsLnN0YXRlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLHRoaXMuc2VsZWN0QWxsKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncyk7XG4gICAgIH1cblxuICAgIGNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoZGF0YSxsYWJlbCxub2RlcyxpY29uKSB7XG4gICAgICAgIHZhciBsYWJlbCA9IGxhYmVsP2xhYmVsOnRoaXMucHJvcHMubGFiZWw7XG4gICAgICAgIHZhciBub2RlcyA9IG5vZGVzP25vZGVzOnRoaXMucHJvcHMubm9kZXM7XG4gICAgICAgIHZhciBpY29uID0gaWNvbj9pY29uOnRoaXMucHJvcHMuaWNvbjtcbiAgICAgICAgaWYoZGF0YSl7IC8vIGNhbGxpbmcgd2l0aCBkYXRhIGFyZ3VtZW50cyBpbmRpY2F0ZXMgZGF0YSBpcyBjaGFuZ2VkIHNvIHdpcGUgdGhlIHNlc3Npb24gc3RhdGVcbiAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2V0KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvL3RvLWRvIG9ubHkgcmVxdWlyZWQgZm9yIHJvb3Rub2RlXG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihsYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWUgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihpY29uKTtcblxuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3Iobm9kZXMpO1xuICAgICAgICBpZih0cmVlTm9kZXMgJiYgdHJlZU5vZGVzLmxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHJlZU5vZGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KFwibm9kZVwiICsgaSwgTm9kZUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGxhYmVsLHRyZWVOb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5pY29uTmFtZS5zdGF0ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGljb24sdHJlZU5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0QWxsLnN0YXRlKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5zZWxlY3Quc3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0Q2hpbGRyZW5TZXNzaW9uVmFsdWVzKCl7XG4gICAgICAgIGlmKCF0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhKXtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzICYmIHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5sZW5ndGg+MCApe1xuICAgICAgICAgICAgdmFyIG5vZGVDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgICAgICBub2RlQ29uZmlncy5tYXAoZnVuY3Rpb24obm9kZUNvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVMYWJlbCA9IG5vZGVDb25maWcubGFiZWwuc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLmluZGV4T2Yobm9kZUxhYmVsKSAhPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENoaWxkcmVuU2VsZWN0QWxsVmFsdWVzKCl7XG5cbiAgICAgICAgdmFyIG5vZGVDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIG5vZGVDb25maWdzLm1hcChmdW5jdGlvbihub2RlQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnZhbHVlID0gdGhpcy5zZWxlY3RBbGwuc3RhdGU7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJ0cmVlQ29uZmlnXCIsdGhpcy5wcm9wcy50cmVlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibGFiZWxcIix0aGlzLnByb3BzLmxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwibm9kZXNcIix0aGlzLnByb3BzLm5vZGVzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiaWNvblwiLHRoaXMucHJvcHMuaWNvbik7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcInJldmVyc2VMYXlvdXRcIix0aGlzLnNldHRpbmdzLnJldmVyc2VMYXlvdXQuc3RhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJjbGlja0NhbGxiYWNrXCIsdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiZGF0YVwiLG51bGwsIG51bGwsdGhpcy5zZXR0aW5ncy5nZXROb2RlVmFsdWVGb3IodGhpcy5wcm9wcy5ub2RlcykgKTtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIucmVuZGVyQ2hpbGRyZW4odGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZihDb21wb25lbnRNYW5hZ2VyLmRlYnVnKWNvbnNvbGUubG9nKFwiTm9kZSAtIHJlbmRlclwiKTtcbiAgICAgICAgdmFyIG5vZGVVSSA9IDxkaXYvPjtcbiAgICAgICAgdmFyIGRvbURlZmluZWRTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB2YXIgbm9kZXNVSSA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlcygpO1xuICAgICAgICAgICAgdmFyIGlzT3BlbiA9IHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcblxuICAgICAgICAgICAgdmFyIGljb25OYW1lID0gdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBpY29uVUkgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIHNlbGVjdEFsbEljb25VSSA9IFwiXCI7XG5cblxuICAgICAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7IC8vZm9sZGVyXG4gICAgICAgICAgICAgICAgaWYoaXNPcGVuKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNVSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgYnJhbmNoU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuYnJhbmNoU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYoZG9tRGVmaW5lZFN0eWxlKVN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKG5vZGVTdHlsZSxkb21EZWZpbmVkU3R5bGUsdHJ1ZSk7Ly90aGlzIGhhcHBlbnMgZm9yIHJvb3ROb2RlXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xOYW1lID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZvbGRlckljb24oaXNPcGVuKTtcblxuICAgICAgICAgICAgICAgIGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWNvblN0eWxlT2JqID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVJY29uU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGljb25OYW1lLmluZGV4T2YoXCIvXCIpID09IC0xKXsgLy8gZm9udEF3ZXNvbWUgSWNvbiBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aSBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpbWcgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBzcmM9e2ljb25OYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmVuYWJsZVNlbGVjdEFsbCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVlSWNvblN0YXRlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLnRyZWVJY29uU3RhdGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RBbGxJY29uID0gKHRoaXMuc2VsZWN0QWxsLnN0YXRlKT8gdHJlZUljb25TdGF0ZVtcInNlbGVjdFwiXTp0cmVlSWNvblN0YXRlW1widW5TZWxlY3RcIl07XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbEljb25VSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2VsZWN0QWxsfT4mbmJzcDs8aSBjbGFzc05hbWU9e3NlbGVjdEFsbEljb259Lz4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGZvbGRlclVJID0gPHNwYW4gc3R5bGU9e25vZGVTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn0+Jm5ic3A7e1dlYXZlLmxhbmcobGFiZWwpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19IG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbn0+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdEFsbEljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y29udHJvbE5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZVBhZGRpbmcgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcuc3RhdGU7XG4gICAgICAgICAgICAgICAgbm9kZVVJID0gPHNwYW4gc3R5bGU9e2JyYW5jaFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9sZGVyVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTpcIm5vbmVcIixwYWRkaW5nTGVmdDpub2RlUGFkZGluZ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZXNVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNleyAvL2xlYWZcbiAgICAgICAgICAgICAgICB2YXIgZmlsZUljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0RmlsZUljb24odGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJldHVybiBlaXRoZXIgbm9ybWFsL0FjdGl2ZS9TbGVjdGVkIFN0eWxlIGJhc2VkIG9uIHN0YXRlIG9mIHRoZSBsZWFmXG4gICAgICAgICAgICAgICAgdmFyIGxlYWZTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRMZWFmU3R5bGUoaXNPcGVuLHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWNvblN0eWxlT2JqID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmxlYWZJY29uU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGljb25OYW1lLmluZGV4T2YoXCIvXCIpID09IC0xKXsgLy8gZm9udEF3ZXNvbWUgSWNvbiBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aSBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpbWcgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBzcmM9e2ljb25OYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2lmKHRoaXMucHJvcHMuZW5hYmxlU2VsZWN0QWxsKXtcbiAgICAgICAgICAgICAgICB2YXIgdHJlZUljb25TdGF0ZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy50cmVlSWNvblN0YXRlLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgIHZhciBzZWxlY3RBbGxJY29uID0gXCJcIlxuICAgICAgICAgICAgICAgICB2YXIgb25DbGljayA9ICB0aGlzLnRvZ2dsZU9wZW47XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RJZGVudGlmaWVyID09IFwic2VsZWN0XCIpe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJY29uID0gKHRoaXMuc2V0dGluZ3Muc2VsZWN0LnN0YXRlICk/IHRyZWVJY29uU3RhdGVbXCJzZWxlY3RcIl0gOnRyZWVJY29uU3RhdGVbXCJ1blNlbGVjdFwiXTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSWNvbiA9ICh0aGlzLnNlbGVjdEFsbC5zdGF0ZSApPyB0cmVlSWNvblN0YXRlW1wic2VsZWN0XCJdIDp0cmVlSWNvblN0YXRlW1widW5TZWxlY3RcIl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHNlbGVjdEFsbEljb24gJiYgc2VsZWN0QWxsSWNvbi5sZW5ndGg+MCApe1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0gdGhpcy50b2dnbGVTZWxlY3Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoc2VsZWN0QWxsSWNvbiAmJiBzZWxlY3RBbGxJY29uLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbEljb25VSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2VsZWN0fT4mbmJzcDs8aSBjbGFzc05hbWU9e3NlbGVjdEFsbEljb259Lz4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgLy99XG5cbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e2xlYWZTdHlsZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17b25DbGlja30+Jm5ic3A7e1dlYXZlLmxhbmcobGFiZWwpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZsZXg6XCIxXCJ9fSBvbkNsaWNrPXtvbkNsaWNrfT4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdEFsbEljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICByZXR1cm4gKCBub2RlVUkpO1xuICAgIH1cblxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19
