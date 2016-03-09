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
            if (this.props.treeConfig.defaultSelectedNodes) {
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
                        var nodeLabel = nodeConfig.label.state;
                        nodeConfig.open.value = true;
                        this.props.treeConfig.defaultSelectedNodes.push(nodeLabel);
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
                if (this.settings.open.value && this.settings.enable.value) {
                    nodesUI = this.renderChildren();
                }

                var iconName = this.settings.iconName.value;
                var label = this.settings.label.value;
                var isOpen = this.settings.open.value && this.settings.enable.value;
                if (nodes.length > 0) {
                    //folder
                    var branchStyle = this.props.treeConfig.branchStyle.getStyleFor();
                    var nodeStyle = this.props.treeConfig.nodeStyle.getStyleFor();
                    if (domeDefinedStyle) _Style2.default.mergeStyleObjects(nodeStyle, domeDefinedStyle, true); //this happens for rootNode
                    var controlName = this.props.treeConfig.getFolderIcon(isOpen);

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
                    var leafStyle = this.props.treeConfig.getLeafStyle(isOpen, this.settings.active.value);

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
//# sourceMappingURL=data:application/json;base64,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QUFPLEVBQUMsTUFBSyxHQUFMLEVBQVIsRUFBTixDQUhIO3dCQUlHLHFDQUFHLFdBQVcsUUFBWCxFQUFILENBSkg7cUJBQVQsQ0FMQTtpQkFyQko7YUFWSjs7QUE4Q0osbUJBQVMsTUFBVCxDQWpEUzs7OztXQTdLUDtFQUFhLGdCQUFNLFNBQU47O0FBbU9uQixjQUFJLDBCQUFKLENBQStCLHVCQUEvQixFQUF1RCxJQUF2RDtrQkFDZSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuaW1wb3J0IFByb3BzTWFuYWdlciBmcm9tIFwiLi4vUHJvcHNNYW5hZ2VyXCJcblxuY2xhc3MgTm9kZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgTm9kZUNvbmZpZygpO1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0VHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRUcmVlTGFiZWwgPSB0aGlzLmdldFRyZWVMYWJlbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldEljb25OYW1lID0gdGhpcy5nZXRJY29uTmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUgPSB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93Q2hpbGRyZW4gPSB0aGlzLnNob3dDaGlsZHJlbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuQ2FsbGJhY2sgPSB0aGlzLmNoaWxkcmVuQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIgPSBuZXcgUHJvcHNNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuc2hvd0NoaWxkcmVuKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuY2hpbGRyZW5DYWxsYmFjayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5zaG93Q2hpbGRyZW4pO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmNoaWxkcmVuQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCl7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gIXRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpO1xuICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBjaGlsZHJlbkNhbGxiYWNrKCl7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cblxuICAgIGNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoZGF0YSxsYWJlbCxub2RlcyxpY29uKSB7XG4gICAgICAgIGlmKGRhdGEpeyAvLyBjYWxsaW5nIHdpdGggZGF0YSBhcmd1bWVudHMgaW5kaWNhdGVzIGRhdGEgaXMgY2hhbmdlZCBzbyB3aXBlIHRoZSBzZXNzaW9uIHN0YXRlXG4gICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWUgPSB0aGlzLmdldFRyZWVMYWJlbChkYXRhLGxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZSA9IHRoaXMuZ2V0SWNvbk5hbWUoZGF0YSxpY29uKTtcbiAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzKGRhdGEsbm9kZXMpO1xuXG4gICAgICAgIGlmKHRyZWVOb2RlcyAmJiB0cmVlTm9kZXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0cmVlTm9kZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHZhciBvYmplY3ROYW1lID0gXCJub2RlXCIgKyBpO1xuICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KG9iamVjdE5hbWUsIE5vZGVDb25maWcpO1xuICAgICAgICAgICAgICAgIHZhciBub2RlTGFiZWwgPSB0aGlzLmdldFRyZWVMYWJlbCh0cmVlTm9kZXNbaV0pXG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZSA9IG5vZGVMYWJlbDtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUljb24gPSB0aGlzLmdldEljb25OYW1lKHRyZWVOb2Rlc1tpXSlcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmljb25OYW1lLnN0YXRlID0gbm9kZUljb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIHNob3dDaGlsZHJlbigpe1xuICAgICAgICBpZighdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSl7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcyl7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMubGVuZ3RoPjApe1xuICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWdzLm1hcChmdW5jdGlvbihub2RlQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVMYWJlbCA9IG5vZGVDb25maWcubGFiZWwuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5pbmRleE9mKG5vZGVMYWJlbCkgIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVDb25maWcub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZ3MubWFwKGZ1bmN0aW9uKG5vZGVDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZUxhYmVsID0gbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLnB1c2gobm9kZUxhYmVsKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGdldFRyZWVOb2RlcyhkYXRhLG5vZGVzKXtcbiAgICAgICAgaWYoIWRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhKWRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgIGlmKCFub2RlcyAmJiB0aGlzLnByb3BzLm5vZGVzKW5vZGVzID0gdGhpcy5wcm9wcy5ub2RlcztcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW25vZGVzXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtub2Rlc10oKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbm9kZXNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGdldEljb25OYW1lKGRhdGEsaWNvbil7XG5cbiAgICAgICAgaWYoIWRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhKWRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgIGlmKCFpY29uICYmIHRoaXMucHJvcHMuaWNvbilpY29uID0gdGhpcy5wcm9wcy5pY29uO1xuXG4gICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW2ljb25dIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2ljb25dKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihpY29uIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBpY29uKGRhdGEpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbaWNvbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUcmVlTGFiZWwoZGF0YSxsYWJlbCl7XG4gICAgICAgIGlmKCFkYXRhICYmIHRoaXMucHJvcHMuZGF0YSlkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICBpZighbGFiZWwgJiYgdGhpcy5wcm9wcy5sYWJlbClsYWJlbCA9IHRoaXMucHJvcHMubGFiZWw7XG5cbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW2xhYmVsXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtsYWJlbF0oKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2xhYmVsXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUobmV4dFByb3BzLmRhdGEsbmV4dFByb3BzLmxhYmVsLG5leHRQcm9wcy5ub2RlcyxuZXh0UHJvcHMuaWNvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5vcGVuICE9PSBuZXh0UHJvcHMub3Blbil7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSBuZXh0UHJvcHMub3BlbjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJ0cmVlQ29uZmlnXCIsdGhpcy5wcm9wcy50cmVlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJsYWJlbFwiLHRoaXMucHJvcHMubGFiZWwpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGROZXdQcm9wcyhcIm5vZGVzXCIsdGhpcy5wcm9wcy5ub2Rlcyk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwiaWNvblwiLHRoaXMucHJvcHMuaWNvbik7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwiY2xpY2tDYWxsYmFja1wiLHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjayk7XG4gICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2RlcygpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGRLZXlQcm9wcyhcImRhdGFcIix0cmVlTm9kZXMpO1xuICAgICAgICByZXR1cm4gQXBwLnJlbmRlckNoaWxkcmVuKHRoaXMsIHRoaXMucHJvcHNNYW5hZ2VyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBub2RlVUkgPSA8ZGl2Lz47XG4gICAgICAgIHZhciBkb21lRGVmaW5lZFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHZhciBub2Rlc1VJID0gW107XG4gICAgICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVzKCk7XG4gICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgJiYgdGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgICAgIG5vZGVzVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWU7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGlzT3BlbiA9ICh0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgJiYgdGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpXG4gICAgICAgICAgICBpZihub2Rlcy5sZW5ndGggPiAwKXsgLy9mb2xkZXJcbiAgICAgICAgICAgICAgICB2YXIgYnJhbmNoU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuYnJhbmNoU3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZVN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgICAgIGlmKGRvbWVEZWZpbmVkU3R5bGUpU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMobm9kZVN0eWxlLGRvbWVEZWZpbmVkU3R5bGUsdHJ1ZSk7Ly90aGlzIGhhcHBlbnMgZm9yIHJvb3ROb2RlXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xOYW1lID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZvbGRlckljb24oaXNPcGVuKTtcblxuICAgICAgICAgICAgICAgIHZhciBmb2xkZXJVSSA9IDxzcGFuIHN0eWxlPXtub2RlU3R5bGV9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDt7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZsZXg6XCIxXCJ9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NvbnRyb2xOYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVQYWRkaW5nID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnN0YXRlO1xuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxzcGFuIHN0eWxlPXticmFuY2hTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvbGRlclVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGU6XCJub25lXCIscGFkZGluZ0xlZnQ6bm9kZVBhZGRpbmd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXsgLy9sZWFmXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZpbGVJY29uKHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXR1cm4gZWl0aGVyIG5vcm1hbC9BY3RpdmUvU2xlY3RlZCBTdHlsZSBiYXNlZCBvbiBzdGF0ZSBvZiB0aGUgbGVhZlxuICAgICAgICAgICAgICAgIHZhciBsZWFmU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0TGVhZlN0eWxlKGlzT3Blbix0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e2xlYWZTdHlsZX0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICByZXR1cm4gKCBub2RlVUkpO1xuICAgIH1cblxufVxuXG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lk5vZGVDb25maWdcIixOb2RlKTtcbmV4cG9ydCBkZWZhdWx0IE5vZGU7XG4iXX0=
