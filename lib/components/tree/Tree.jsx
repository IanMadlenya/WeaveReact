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

var _TreeConfig = require("./TreeConfig");

var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

var Tree = (function (_React$Component) {
    _inherits(Tree, _React$Component);

    function Tree(props) {
        _classCallCheck(this, Tree);

        _React$Component.call(this, props);
        this.settings = this.props.settings ? this.props.settings : new _TreeConfig2["default"]();
        this.toggle = this.toggle.bind(this);
        this.getTreeNodes = this.getTreeNodes.bind(this);
        this.getTreeLabel = this.getTreeLabel.bind(this);
        this.settings.enableTypeIcon.value = true; //temp to check
    }

    Tree.prototype.componentDidMount = function componentDidMount() {
        Weave.getCallbacks(this.settings.open).addGroupedCallback(this, this.forceUpdate);
    };

    Tree.prototype.componentWillUnmount = function componentWillUnmount() {
        Weave.getCallbacks(this.settings.open).removeCallback(this, this.forceUpdate);
    };

    Tree.prototype.toggle = function toggle() {
        this.settings.open.value = !this.settings.open.value;
        if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data);
    };

    Tree.prototype.setSessionStateFromTree = function setSessionStateFromTree() {
        this.settings.label.value = this.getTreeLabel();
        var treeNodes = this.getTreeNodes();
        if (treeNodes && treeNodes.length !== this.settings.children.getNames().length) {
            this.settings.children.delayCallbacks();
            for (var i = 0; i < treeNodes.length; i++) {
                var objectName = "node" + i;
                this.settings.children.requestObject(objectName, _TreeConfig2["default"]);
            }
            this.settings.children.resumeCallbacks();
        }
    };

    Tree.prototype.getTreeNodes = function getTreeNodes() {
        if (this.props.data[this.props.nodes] instanceof Function) {
            return this.props.data[this.props.nodes]();
        } else {
            return this.props.data[this.props.nodes];
        }
    };

    Tree.prototype.getTreeLabel = function getTreeLabel() {
        if (this.props.data[this.props.label] instanceof Function) {
            return this.props.data[this.props.label]();
        } else {
            return this.props.data[this.props.label];
        }
    };

    Tree.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        // to-do:
        // has to be done here for asynchrnous data
        // else need to call in constructor
        this.setSessionStateFromTree();
    };

    Tree.prototype.render = function render() {
        var nodesUI = [];
        var folderIcon = this.settings.folderIcon.value;

        var nodeUI = "";
        var nodes = this.settings.getNodes();
        if (this.settings.open.value) {
            folderIcon = this.settings.folderOpenIcon.value;
            //fileIcon = this.settings.fileOpenIcon.value;

            if (nodes.length > 0) {
                var treeNodes = this.getTreeNodes();
                for (var i = 0; i < nodes.length; i++) {
                    var treeItem = treeNodes[i];
                    var treeConfig = this.settings.children.getObject(nodes[i]);
                    nodesUI.push(_react2["default"].createElement(Tree, { key: i, data: treeItem, label: this.props.label, nodes: this.props.nodes, settings: treeConfig, clickCallback: this.props.clickCallback }));
                }
            }
        }

        var nodeIconStyleObject = _utilsStyle2["default"].appendVendorPrefix({ color: "#7fd6f9", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" });

        if (nodes.length > 0) {
            //folder

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
                    { style: { listStyleType: "none" } },
                    nodesUI
                )
            );
        } else {
            //leaf
            var leaf = this.settings.label.value;
            var fileIcon = this.settings.getFileIcon(this.props.data.data.value);
            nodeUI = _react2["default"].createElement(
                "li",
                { onClick: this.toggle },
                _react2["default"].createElement("i", { className: fileIcon }),
                " ",
                leaf
            );
        }

        return nodeUI;
    };

    return Tree;
})(_react2["default"].Component);

_utilsApp2["default"].registerToolImplementation("reactweave.TreeConfig", Tree);
exports["default"] = Tree;
module.exports = exports["default"];