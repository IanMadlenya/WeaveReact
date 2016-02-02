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

var _Node = require("./Node");

var _Node2 = _interopRequireDefault(_Node);

var Tree = (function (_React$Component) {
    _inherits(Tree, _React$Component);

    function Tree(props) {
        _classCallCheck(this, Tree);

        _React$Component.call(this, props);
        this.settings = this.props.settings ? this.props.settings : new TreeConfig();
        this.settings.dataTypesMap = this.props.dataTypesMap;
        this.settings.getDataType = this.props.getDataType;
    }

    Tree.prototype.componentDidMount = function componentDidMount() {};

    Tree.prototype.componentWillUnmount = function componentWillUnmount() {};

    Tree.prototype.render = function render() {

        return _react2["default"].createElement(_Node2["default"], { data: this.props.data, label: this.props.label, nodes: this.props.nodes, treeConfig: this.settings, clickCallback: this.props.clickCallback });
    };

    return Tree;
})(_react2["default"].Component);

_utilsApp2["default"].registerToolImplementation("reactweave.TreeConfig", Tree);
exports["default"] = Tree;
module.exports = exports["default"];