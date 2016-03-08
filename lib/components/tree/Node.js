"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _NodeConfig = require("./NodeConfig");

var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

var _PropsManager = require("../PropsManager");

var _PropsManager2 = _interopRequireDefault(_PropsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Node = function (_React$Component) {
    _inherits(Node, _React$Component);

    function Node(props) {
        _classCallCheck(this, Node);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Node).call(this, props));

        _this.settings = _this.props.settings ? _this.props.settings : new _NodeConfig2.default();
        _this.toggle = _this.toggle.bind(_this);
        _this.getTreeNodes = _this.getTreeNodes.bind(_this);
        _this.getTreeLabel = _this.getTreeLabel.bind(_this);
        _this.getIconName = _this.getIconName.bind(_this);
        _this.createSessionStateForTree = _this.createSessionStateForTree.bind(_this);
        _this.showChildren = _this.showChildren.bind(_this);
        _this.childrenCallback = _this.childrenCallback.bind(_this);
        _this.renderChildren = _this.renderChildren.bind(_this);
        _this.propsManager = new _PropsManager2.default();
        _this.isSessionStateCreatedForTreeData = false;
        return _this;
    }

    _createClass(Node, [{
        key: "addCallbacks",
        value: function addCallbacks() {
            this.settings.open.addImmediateCallback(this, this.showChildren);
            this.settings.children.childListCallbacks.addGroupedCallback(this, this.childrenCallback);
            this.settings.label.addImmediateCallback(this, this.forceUpdate);
            this.settings.active.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "removeCallbacks",
        value: function removeCallbacks() {
            this.settings.open.removeCallback(this, this.showChildren);
            this.settings.children.childListCallbacks.removeCallback(this, this.childrenCallback);
            this.settings.label.removeCallback(this, this.forceUpdate);
            this.settings.active.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.addCallbacks();
            this.createSessionStateForTree();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.removeCallbacks();
        }
    }, {
        key: "toggle",
        value: function toggle() {
            this.settings.open.value = !this.settings.open.value;
            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.settings);
            this.props.treeConfig.changeActiveNode(this.settings);
        }
    }, {
        key: "childrenCallback",
        value: function childrenCallback() {
            this.forceUpdate();
        }
    }, {
        key: "createSessionStateForTree",
        value: function createSessionStateForTree(data, label, nodes, icon) {
            if (data) {
                // calling with data arguments indicates data is changed so wipe the session state
                this.settings.reset();
            }
            this.settings.label.value = this.getTreeLabel(data, label);
            this.settings.iconName.value = this.getIconName(data, icon);
            var treeNodes = this.getTreeNodes(data, nodes);

            if (treeNodes && treeNodes.length) {
                this.settings.children.delayCallbacks();
                for (var i = 0; i < treeNodes.length; i++) {
                    var objectName = "node" + i;
                    var nodeConfig = this.settings.children.requestObject(objectName, _NodeConfig2.default);
                    var nodeLabel = this.getTreeLabel(treeNodes[i]);
                    nodeConfig.label.state = nodeLabel;
                    var nodeIcon = this.getIconName(treeNodes[i]);
                    nodeConfig.iconName.state = nodeIcon;
                }
                this.settings.children.resumeCallbacks();
            }
            this.isSessionStateCreatedForTreeData = true;
        }
    }, {
        key: "showChildren",
        value: function showChildren() {
            if (!this.isSessionStateCreatedForTreeData) {
                this.createSessionStateForTree();
            }
            if (this.props.treeConfig.defaultSelectedNodes && this.props.treeConfig.defaultSelectedNodes.length > 0) {
                if (this.props.treeConfig.defaultSelectedNodes.length > 0) {
                    var nodeConfigs = this.settings.children.getObjects();
                    nodeConfigs.map(function (nodeConfig, index) {
                        var nodeLabel = nodeConfig.label.state;
                        if (this.props.treeConfig.defaultSelectedNodes.indexOf(nodeLabel) !== -1) {
                            nodeConfig.open.value = true;
                        }
                    }.bind(this));
                } else {
                    var nodeConfigs = this.settings.children.getObjects();
                    nodeConfigs.map(function (nodeConfig, index) {
                        nodeConfig.open.value = true;
                    }.bind(this));
                }
            }
            this.forceUpdate();
        }
    }, {
        key: "getTreeNodes",
        value: function getTreeNodes(data, nodes) {
            if (!data && this.props.data) data = this.props.data;
            if (!nodes && this.props.nodes) nodes = this.props.nodes;
            if (data) {
                if (data[nodes] instanceof Function) {
                    return data[nodes]();
                } else {
                    return data[nodes];
                }
            } else return [];
        }
    }, {
        key: "getIconName",
        value: function getIconName(data, icon) {

            if (!data && this.props.data) data = this.props.data;
            if (!icon && this.props.icon) icon = this.props.icon;

            if (data) {
                if (data[icon] instanceof Function) {
                    return data[icon]();
                } else if (icon instanceof Function) {
                    return icon(data);
                } else {
                    return data[icon];
                }
            } else {
                return "";
            }
        }
    }, {
        key: "getTreeLabel",
        value: function getTreeLabel(data, label) {
            if (!data && this.props.data) data = this.props.data;
            if (!label && this.props.label) label = this.props.label;

            if (data) {
                if (data[label] instanceof Function) {
                    return data[label]();
                } else {
                    return data[label];
                }
            } else {
                return "";
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.data !== nextProps.data) {
                this.createSessionStateForTree(nextProps.data, nextProps.label, nextProps.nodes, nextProps.icon);
            }
            if (this.props.open !== nextProps.open) {
                this.settings.open.value = nextProps.open;
            }
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            this.propsManager.addNewProps("treeConfig", this.props.treeConfig);
            this.propsManager.addNewProps("label", this.props.label);
            this.propsManager.addNewProps("nodes", this.props.nodes);
            this.propsManager.addNewProps("icon", this.props.icon);
            this.propsManager.addNewProps("clickCallback", this.props.clickCallback);
            var treeNodes = this.getTreeNodes();
            this.propsManager.addKeyProps("data", treeNodes);
            return _App2.default.renderChildren(this, this.propsManager);
        }
    }, {
        key: "render",
        value: function render() {
            var nodeUI = _react2.default.createElement("div", null);
            var domeDefinedStyle = this.props.style;
            if (this.props.data) {
                var nodesUI = [];
                var nodes = this.settings.getNodes();
                if (this.settings.open.value) {
                    nodesUI = this.renderChildren();
                }

                var iconName = this.settings.iconName.value;
                var label = this.settings.label.value;
                if (nodes.length > 0) {
                    //folder
                    var branchStyle = this.props.treeConfig.branchStyle.getStyleFor();
                    var nodeStyle = this.props.treeConfig.nodeStyle.getStyleFor();
                    if (domeDefinedStyle) _Style2.default.mergeStyleObjects(nodeStyle, domeDefinedStyle, true); //this happens for rootNode
                    var controlName = this.props.treeConfig.getFolderIcon(this.settings.open.value);

                    var folderUI = _react2.default.createElement(
                        "span",
                        { style: nodeStyle, onClick: this.toggle },
                        _react2.default.createElement("i", { className: iconName }),
                        " ",
                        label,
                        _react2.default.createElement("span", { style: { flex: "1" } }),
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
                    var leafStyle = this.props.treeConfig.getLeafStyle(this.settings.open.value, this.settings.active.value);

                    nodeUI = _react2.default.createElement(
                        "li",
                        { style: leafStyle, onClick: this.toggle },
                        _react2.default.createElement("i", { className: iconName }),
                        " ",
                        label,
                        _react2.default.createElement("span", { style: { flex: "1" } }),
                        _react2.default.createElement("i", { className: fileIcon })
                    );
                }
            }

            return nodeUI;
        }
    }]);

    return Node;
}(_react2.default.Component);

_App2.default.registerToolImplementation("weavereact.NodeConfig", Node);
exports.default = Node;
//# sourceMappingURL=data:application/json;base64,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QU0sU0FBTjs7QUE4Tm5CLGNBQUksMEJBQUosQ0FBK0IsdUJBQS9CLEVBQXVELElBQXZEO2tCQUNlIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5pbXBvcnQgUHJvcHNNYW5hZ2VyIGZyb20gXCIuLi9Qcm9wc01hbmFnZXJcIlxuXG5jbGFzcyBOb2RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBOb2RlQ29uZmlnKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRUcmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2Rlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFRyZWVMYWJlbCA9IHRoaXMuZ2V0VHJlZUxhYmVsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0SWNvbk5hbWUgPSB0aGlzLmdldEljb25OYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSA9IHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dDaGlsZHJlbiA9IHRoaXMuc2hvd0NoaWxkcmVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5DYWxsYmFjayA9IHRoaXMuY2hpbGRyZW5DYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlckNoaWxkcmVuID0gdGhpcy5yZW5kZXJDaGlsZHJlbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlciA9IG5ldyBQcm9wc01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFkZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5zaG93Q2hpbGRyZW4pO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5jaGlsZHJlbkNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLnNob3dDaGlsZHJlbik7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuY2hpbGRyZW5DYWxsYmFjayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gIXRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpXG4gICAgfVxuXG4gICAgY2hpbGRyZW5DYWxsYmFjaygpe1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG5cblxuICAgIGNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoZGF0YSxsYWJlbCxub2RlcyxpY29uKSB7XG4gICAgICAgIGlmKGRhdGEpeyAvLyBjYWxsaW5nIHdpdGggZGF0YSBhcmd1bWVudHMgaW5kaWNhdGVzIGRhdGEgaXMgY2hhbmdlZCBzbyB3aXBlIHRoZSBzZXNzaW9uIHN0YXRlXG4gICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWUgPSB0aGlzLmdldFRyZWVMYWJlbChkYXRhLGxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZSA9IHRoaXMuZ2V0SWNvbk5hbWUoZGF0YSxpY29uKTtcbiAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzKGRhdGEsbm9kZXMpO1xuXG4gICAgICAgIGlmKHRyZWVOb2RlcyAmJiB0cmVlTm9kZXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0cmVlTm9kZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHZhciBvYmplY3ROYW1lID0gXCJub2RlXCIgKyBpO1xuICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KG9iamVjdE5hbWUsIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgICAgIHZhciBub2RlTGFiZWwgPSB0aGlzLmdldFRyZWVMYWJlbCh0cmVlTm9kZXNbaV0pXG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZSA9IG5vZGVMYWJlbDtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUljb24gPSB0aGlzLmdldEljb25OYW1lKHRyZWVOb2Rlc1tpXSlcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmljb25OYW1lLnN0YXRlID0gbm9kZUljb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIHNob3dDaGlsZHJlbigpe1xuICAgICAgICBpZighdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSl7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2RlcyAmJiB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMubGVuZ3RoPjApe1xuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLmxlbmd0aD4wKXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlncy5tYXAoZnVuY3Rpb24obm9kZUNvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlTGFiZWwgPSBub2RlQ29uZmlnLmxhYmVsLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuaW5kZXhPZihub2RlTGFiZWwpICE9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlQ29uZmlnLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWdzLm1hcChmdW5jdGlvbihub2RlQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGdldFRyZWVOb2RlcyhkYXRhLG5vZGVzKXtcbiAgICAgICAgaWYoIWRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhKWRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgIGlmKCFub2RlcyAmJiB0aGlzLnByb3BzLm5vZGVzKW5vZGVzID0gdGhpcy5wcm9wcy5ub2RlcztcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW25vZGVzXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtub2Rlc10oKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbm9kZXNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGdldEljb25OYW1lKGRhdGEsaWNvbil7XG5cbiAgICAgICAgaWYoIWRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhKWRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgIGlmKCFpY29uICYmIHRoaXMucHJvcHMuaWNvbilpY29uID0gdGhpcy5wcm9wcy5pY29uO1xuXG4gICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW2ljb25dIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2ljb25dKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihpY29uIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBpY29uKGRhdGEpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbaWNvbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUcmVlTGFiZWwoZGF0YSxsYWJlbCl7XG4gICAgICAgIGlmKCFkYXRhICYmIHRoaXMucHJvcHMuZGF0YSlkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICBpZighbGFiZWwgJiYgdGhpcy5wcm9wcy5sYWJlbClsYWJlbCA9IHRoaXMucHJvcHMubGFiZWw7XG5cbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW2xhYmVsXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtsYWJlbF0oKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2xhYmVsXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUobmV4dFByb3BzLmRhdGEsbmV4dFByb3BzLmxhYmVsLG5leHRQcm9wcy5ub2RlcyxuZXh0UHJvcHMuaWNvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5vcGVuICE9PSBuZXh0UHJvcHMub3Blbil7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSBuZXh0UHJvcHMub3BlbjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJ0cmVlQ29uZmlnXCIsdGhpcy5wcm9wcy50cmVlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJsYWJlbFwiLHRoaXMucHJvcHMubGFiZWwpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGROZXdQcm9wcyhcIm5vZGVzXCIsdGhpcy5wcm9wcy5ub2Rlcyk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwiaWNvblwiLHRoaXMucHJvcHMuaWNvbik7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwiY2xpY2tDYWxsYmFja1wiLHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjayk7XG4gICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2RlcygpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGRLZXlQcm9wcyhcImRhdGFcIix0cmVlTm9kZXMpO1xuICAgICAgICByZXR1cm4gQXBwLnJlbmRlckNoaWxkcmVuKHRoaXMsIHRoaXMucHJvcHNNYW5hZ2VyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBub2RlVUkgPSA8ZGl2Lz47XG4gICAgICAgIHZhciBkb21lRGVmaW5lZFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHZhciBub2Rlc1VJID0gW107XG4gICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpe1xuICAgICAgICAgICAgICAgIG5vZGVzVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWU7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuICAgICAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7IC8vZm9sZGVyXG4gICAgICAgICAgICAgICAgdmFyIGJyYW5jaFN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmJyYW5jaFN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlU3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgICAgICAgICBpZihkb21lRGVmaW5lZFN0eWxlKVN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKG5vZGVTdHlsZSxkb21lRGVmaW5lZFN0eWxlLHRydWUpOy8vdGhpcyBoYXBwZW5zIGZvciByb290Tm9kZVxuICAgICAgICAgICAgICAgIHZhciBjb250cm9sTmFtZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGb2xkZXJJY29uKHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZm9sZGVyVUkgPSA8c3BhbiBzdHlsZT17bm9kZVN0eWxlfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjb250cm9sTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcblxuICAgICAgICAgICAgICAgIHZhciBub2RlUGFkZGluZyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy5zdGF0ZTtcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8c3BhbiBzdHlsZT17YnJhbmNoU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xkZXJVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOlwibm9uZVwiLHBhZGRpbmdMZWZ0Om5vZGVQYWRkaW5nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIGVpdGhlciBub3JtYWwvQWN0aXZlL1NsZWN0ZWQgU3R5bGUgYmFzZWQgb24gc3RhdGUgb2YgdGhlIGxlYWZcbiAgICAgICAgICAgICAgICB2YXIgbGVhZlN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExlYWZTdHlsZSh0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUsdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgbm9kZVVJID0gPGxpIHN0eWxlPXtsZWFmU3R5bGV9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3tsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZsZXg6XCIxXCJ9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmaWxlSWNvbn0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgcmV0dXJuICggbm9kZVVJKTtcbiAgICB9XG5cbn1cblxuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19
