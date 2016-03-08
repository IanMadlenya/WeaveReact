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
//# sourceMappingURL=data:application/json;base64,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QkFyQko7YUFUSjs7QUE2Q0osbUJBQVMsTUFBVCxDQWhEUzs7OztXQTNLUDtFQUFhLGdCQUFNLFNBQU47O0FBZ09uQixjQUFJLDBCQUFKLENBQStCLHVCQUEvQixFQUF1RCxJQUF2RDtrQkFDZSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuaW1wb3J0IFByb3BzTWFuYWdlciBmcm9tIFwiLi4vUHJvcHNNYW5hZ2VyXCJcblxuY2xhc3MgTm9kZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgTm9kZUNvbmZpZygpO1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0VHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRUcmVlTGFiZWwgPSB0aGlzLmdldFRyZWVMYWJlbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldEljb25OYW1lID0gdGhpcy5nZXRJY29uTmFtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUgPSB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93Q2hpbGRyZW4gPSB0aGlzLnNob3dDaGlsZHJlbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuQ2FsbGJhY2sgPSB0aGlzLmNoaWxkcmVuQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIgPSBuZXcgUHJvcHNNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuc2hvd0NoaWxkcmVuKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuY2hpbGRyZW5DYWxsYmFjayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5zaG93Q2hpbGRyZW4pO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmNoaWxkcmVuQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9ICF0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKVxuICAgIH1cblxuICAgIGNoaWxkcmVuQ2FsbGJhY2soKXtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuXG5cbiAgICBjcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKGRhdGEsbGFiZWwsbm9kZXMsaWNvbikge1xuICAgICAgICBpZihkYXRhKXsgLy8gY2FsbGluZyB3aXRoIGRhdGEgYXJndW1lbnRzIGluZGljYXRlcyBkYXRhIGlzIGNoYW5nZWQgc28gd2lwZSB0aGUgc2Vzc2lvbiBzdGF0ZVxuICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlID0gdGhpcy5nZXRUcmVlTGFiZWwoZGF0YSxsYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWUgPSB0aGlzLmdldEljb25OYW1lKGRhdGEsaWNvbik7XG4gICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2RlcyhkYXRhLG5vZGVzKTtcblxuICAgICAgICBpZih0cmVlTm9kZXMgJiYgdHJlZU5vZGVzLmxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHJlZU5vZGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0TmFtZSA9IFwibm9kZVwiICsgaTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChvYmplY3ROYW1lLCBOb2RlQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUxhYmVsID0gdGhpcy5nZXRUcmVlTGFiZWwodHJlZU5vZGVzW2ldKVxuICAgICAgICAgICAgICAgIG5vZGVDb25maWcubGFiZWwuc3RhdGUgPSBub2RlTGFiZWw7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVJY29uID0gdGhpcy5nZXRJY29uTmFtZSh0cmVlTm9kZXNbaV0pXG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5pY29uTmFtZS5zdGF0ZSA9IG5vZGVJY29uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzaG93Q2hpbGRyZW4oKXtcbiAgICAgICAgaWYoIXRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEpe1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKClcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMpe1xuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLmxlbmd0aD4wKXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlncy5tYXAoZnVuY3Rpb24obm9kZUNvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlTGFiZWwgPSBub2RlQ29uZmlnLmxhYmVsLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMuaW5kZXhPZihub2RlTGFiZWwpICE9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlQ29uZmlnLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWdzLm1hcChmdW5jdGlvbihub2RlQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVMYWJlbCA9IG5vZGVDb25maWcubGFiZWwuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVDb25maWcub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5wdXNoKG5vZGVMYWJlbCk7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBnZXRUcmVlTm9kZXMoZGF0YSxub2Rlcyl7XG4gICAgICAgIGlmKCFkYXRhICYmIHRoaXMucHJvcHMuZGF0YSlkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICBpZighbm9kZXMgJiYgdGhpcy5wcm9wcy5ub2Rlcylub2RlcyA9IHRoaXMucHJvcHMubm9kZXM7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtub2Rlc10gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbm9kZXNdKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgIHJldHVybiBkYXRhW25vZGVzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBnZXRJY29uTmFtZShkYXRhLGljb24pe1xuXG4gICAgICAgIGlmKCFkYXRhICYmIHRoaXMucHJvcHMuZGF0YSlkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICBpZighaWNvbiAmJiB0aGlzLnByb3BzLmljb24paWNvbiA9IHRoaXMucHJvcHMuaWNvbjtcblxuICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtpY29uXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtpY29uXSgpO1xuICAgICAgICAgICAgfWVsc2UgaWYoaWNvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWNvbihkYXRhKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2ljb25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VHJlZUxhYmVsKGRhdGEsbGFiZWwpe1xuICAgICAgICBpZighZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEpZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgaWYoIWxhYmVsICYmIHRoaXMucHJvcHMubGFiZWwpbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsO1xuXG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtsYWJlbF0gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbGFiZWxdKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtsYWJlbF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKG5leHRQcm9wcy5kYXRhLG5leHRQcm9wcy5sYWJlbCxuZXh0UHJvcHMubm9kZXMsbmV4dFByb3BzLmljb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMub3BlbiAhPT0gbmV4dFByb3BzLm9wZW4pe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gbmV4dFByb3BzLm9wZW47XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwidHJlZUNvbmZpZ1wiLHRoaXMucHJvcHMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwibGFiZWxcIix0aGlzLnByb3BzLmxhYmVsKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJub2Rlc1wiLHRoaXMucHJvcHMubm9kZXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGROZXdQcm9wcyhcImljb25cIix0aGlzLnByb3BzLmljb24pO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGROZXdQcm9wcyhcImNsaWNrQ2FsbGJhY2tcIix0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spO1xuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMoKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkS2V5UHJvcHMoXCJkYXRhXCIsdHJlZU5vZGVzKTtcbiAgICAgICAgcmV0dXJuIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLCB0aGlzLnByb3BzTWFuYWdlcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbm9kZVVJID0gPGRpdi8+O1xuICAgICAgICB2YXIgZG9tZURlZmluZWRTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB2YXIgbm9kZXNVSSA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlcygpO1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBub2Rlc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcbiAgICAgICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApeyAvL2ZvbGRlclxuICAgICAgICAgICAgICAgIHZhciBicmFuY2hTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5icmFuY2hTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgICAgIHZhciBub2RlU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgICAgICAgICAgaWYoZG9tZURlZmluZWRTdHlsZSlTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhub2RlU3R5bGUsZG9tZURlZmluZWRTdHlsZSx0cnVlKTsvL3RoaXMgaGFwcGVucyBmb3Igcm9vdE5vZGVcbiAgICAgICAgICAgICAgICB2YXIgY29udHJvbE5hbWUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0Rm9sZGVySWNvbih0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGZvbGRlclVJID0gPHNwYW4gc3R5bGU9e25vZGVTdHlsZX0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3tsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y29udHJvbE5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZVBhZGRpbmcgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcuc3RhdGU7XG4gICAgICAgICAgICAgICAgbm9kZVVJID0gPHNwYW4gc3R5bGU9e2JyYW5jaFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9sZGVyVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTpcIm5vbmVcIixwYWRkaW5nTGVmdDpub2RlUGFkZGluZ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZXNVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNleyAvL2xlYWZcbiAgICAgICAgICAgICAgICB2YXIgZmlsZUljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0RmlsZUljb24odGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJldHVybiBlaXRoZXIgbm9ybWFsL0FjdGl2ZS9TbGVjdGVkIFN0eWxlIGJhc2VkIG9uIHN0YXRlIG9mIHRoZSBsZWFmXG4gICAgICAgICAgICAgICAgdmFyIGxlYWZTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRMZWFmU3R5bGUodGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlLHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDt7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZmlsZUljb259PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIHJldHVybiAoIG5vZGVVSSk7XG4gICAgfVxuXG59XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==
