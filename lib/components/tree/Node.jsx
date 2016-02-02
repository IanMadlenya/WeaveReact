"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utilsApp = require("../../utils/App");

var _utilsApp2 = _interopRequireDefault(_utilsApp);

var _utilsStyle = require("../../utils/Style");

var _utilsStyle2 = _interopRequireDefault(_utilsStyle);

var _NodeConfig = require("./NodeConfig");

var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

var Node = (function (_React$Component) {
    _inherits(Node, _React$Component);

    function Node(props) {
        _classCallCheck(this, Node);

        _React$Component.call(this, props);
        this.settings = this.props.settings ? this.props.settings : new _NodeConfig2["default"]();
        this.toggle = this.toggle.bind(this);
        this.getTreeNodes = this.getTreeNodes.bind(this);
        this.getTreeLabel = this.getTreeLabel.bind(this);
        this.setSessionStateFromTree();
    }

    Node.prototype.componentDidMount = function componentDidMount() {
        this.settings.open.addImmediateCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        this.settings.label.addImmediateCallback(this, this.forceUpdate);
        this.settings.active.addImmediateCallback(this, this.forceUpdate);
    };

    Node.prototype.componentWillUnmount = function componentWillUnmount() {
        this.settings.open.removeCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
        this.settings.label.removeCallback(this, this.forceUpdate);
        this.settings.active.removeCallback(this, this.forceUpdate);
    };

    Node.prototype.toggle = function toggle() {
        this.settings.open.value = !this.settings.open.value;
        if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data);
        this.props.treeConfig.changeActiveNode(this.settings);
    };

    Node.prototype.setSessionStateFromTree = function setSessionStateFromTree() {
        this.settings.label.value = this.getTreeLabel();
        var treeNodes = this.getTreeNodes();
        if (treeNodes && treeNodes.length !== this.settings.children.getNames().length) {
            this.settings.children.delayCallbacks();
            for (var i = 0; i < treeNodes.length; i++) {
                var objectName = "node" + i;
                this.settings.children.requestObject(objectName, _NodeConfig2["default"]);
            }
            this.settings.children.resumeCallbacks();
        }
    };

    Node.prototype.getTreeNodes = function getTreeNodes() {
        if (this.props.data[this.props.nodes] instanceof Function) {
            return this.props.data[this.props.nodes]();
        } else {
            return this.props.data[this.props.nodes];
        }
    };

    Node.prototype.getTreeLabel = function getTreeLabel() {
        if (this.props.data[this.props.label] instanceof Function) {
            return this.props.data[this.props.label]();
        } else {
            return this.props.data[this.props.label];
        }
    };

    Node.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setSessionStateFromTree();
    };

    Node.prototype.render = function render() {
        var nodesUI = [];
        var folderIcon = this.props.treeConfig.folderIcon.value;
        //var activeLeafColor = "black";

        var nodeUI = "";
        var nodes = this.settings.getNodes();
        if (this.settings.open.value) {
            folderIcon = this.props.treeConfig.folderOpenIcon.value;

            if (nodes.length > 0) {
                var treeNodes = this.getTreeNodes();
                for (var i = 0; i < nodes.length; i++) {
                    var treeItem = treeNodes[i];
                    var nodeConfig = this.settings.children.getObject(nodes[i]);
                    var active = false;
                    nodesUI.push(_react2["default"].createElement(Node, { key: i, data: treeItem, label: this.props.label, nodes: this.props.nodes, treeConfig: this.props.treeConfig, settings: nodeConfig, clickCallback: this.props.clickCallback }));
                }
            }
        }

        if (nodes.length > 0) {
            //folder
            var nodeIconStyleObject = _utilsStyle2["default"].appendVendorPrefix(this.props.treeConfig.getNodeIconStyle());
            nodeUI = _react2["default"].createElement(
                "span",
                null,
                _react2["default"].createElement(
                    "span",
                    { onClick: this.toggle },
                    _react2["default"].createElement("i", { className: folderIcon, style: nodeIconStyleObject }),
                    " ",
                    this.settings.label.value
                ),
                _react2["default"].createElement(
                    "ul",
                    { style: { listStyleType: "none", paddingLeft: "20px" } },
                    nodesUI
                )
            );
        } else {
            //leaf
            var leaf = this.settings.label.value;
            var fileIcon = this.props.treeConfig.getFileIcon(this.props.data);
            var fileIconStyle = this.props.treeConfig.getFileIconStyle();
            var activeLeafColor = this.settings.active.value ? "#8e8d8d" : "black";
            if (fileIcon.indexOf("fa fa-") > -1) nodeUI = _react2["default"].createElement(
                "li",
                { style: { color: activeLeafColor }, onClick: this.toggle },
                _react2["default"].createElement("i", { className: fileIcon }),
                " ",
                leaf
            );else nodeUI = _react2["default"].createElement(
                "li",
                { style: { color: activeLeafColor }, onClick: this.toggle },
                _react2["default"].createElement(
                    "span",
                    { style: fileIconStyle },
                    fileIcon
                ),
                " ",
                leaf
            );
        }

        return nodeUI;
    };

    return Node;
})(_react2["default"].Component);

_utilsApp2["default"].registerToolImplementation("weavereact.NodeConfig", Node);
exports["default"] = Node;
module.exports = exports["default"];