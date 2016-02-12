"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _App = require("../../utils/App");

var _App2 = _interopRequireDefault(_App);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _NodeConfig = require("./NodeConfig");

var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

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
        _this.setSessionStateFromTree();
        return _this;
    }

    _createClass(Node, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.settings.open.addImmediateCallback(this, this.forceUpdate);
            this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
            this.settings.label.addImmediateCallback(this, this.forceUpdate);
            this.settings.active.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.settings.open.removeCallback(this, this.forceUpdate);
            this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
            this.settings.label.removeCallback(this, this.forceUpdate);
            this.settings.active.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "toggle",
        value: function toggle() {
            this.settings.open.value = !this.settings.open.value;
            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data);
            this.props.treeConfig.changeActiveNode(this.settings);
        }
    }, {
        key: "setSessionStateFromTree",
        value: function setSessionStateFromTree() {
            this.settings.label.value = this.getTreeLabel();
            var treeNodes = this.getTreeNodes();
            if (treeNodes && treeNodes.length !== this.settings.children.getNames().length) {
                this.settings.children.delayCallbacks();
                for (var i = 0; i < treeNodes.length; i++) {
                    var objectName = "node" + i;
                    this.settings.children.requestObject(objectName, _NodeConfig2.default);
                }
                this.settings.children.resumeCallbacks();
            }
        }
    }, {
        key: "getTreeNodes",
        value: function getTreeNodes() {
            if (this.props.data[this.props.nodes] instanceof Function) {
                return this.props.data[this.props.nodes]();
            } else {
                return this.props.data[this.props.nodes];
            }
        }
    }, {
        key: "getTreeLabel",
        value: function getTreeLabel() {
            if (this.props.data[this.props.label] instanceof Function) {
                return this.props.data[this.props.label]();
            } else {
                return this.props.data[this.props.label];
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var flag = false;
            if (this.settings !== nextProps.settings) {
                this.settings = nextProps.settings;
                flag = true;
            } else if (this.props.label !== nextProps.label) flag = true;else if (this.props.nodes !== nextProps.nodes) flag = true;

            if (flag) this.setSessionStateFromTree();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (Weave.detectLinkableObjectChange(this.settings)) return true;
            if (this.props.settings !== nextProps.settings) return true;else if (this.props.label !== nextProps.label) return true;else if (this.props.nodes !== nextProps.nodes) return true;else if (this.props.clickCallback !== nextProps.clickCallback) return true;else return false;
        }
    }, {
        key: "render",
        value: function render() {
            var nodesUI = [];

            var nodeUI = "";
            var nodes = this.settings.getNodes();
            if (this.settings.open.value) {

                if (nodes.length > 0) {
                    var treeNodes = this.getTreeNodes();
                    for (var i = 0; i < nodes.length; i++) {
                        var treeItem = treeNodes[i];
                        var nodeConfig = this.settings.children.getObject(nodes[i]);
                        nodesUI.push(_react2.default.createElement(Node, { key: i, data: treeItem, label: this.props.label, nodes: this.props.nodes, treeConfig: this.props.treeConfig, settings: nodeConfig, clickCallback: this.props.clickCallback }));
                    }
                }
            }

            if (nodes.length > 0) {
                //folder
                var nodeIconStyleObject = _Style2.default.appendVendorPrefix(this.props.treeConfig.getNodeIconStyle());
                var folderIcon = this.props.treeConfig.getFolderIcon(this.props.data, this.settings.open.value);
                nodeUI = _react2.default.createElement(
                    "span",
                    null,
                    _react2.default.createElement(
                        "span",
                        { onClick: this.toggle },
                        _react2.default.createElement("i", { className: folderIcon, style: nodeIconStyleObject }),
                        " ",
                        this.settings.label.value
                    ),
                    _react2.default.createElement(
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
                if (fileIcon.indexOf("fa fa-") > -1) nodeUI = _react2.default.createElement(
                    "li",
                    { style: { color: activeLeafColor }, onClick: this.toggle },
                    _react2.default.createElement("i", { className: fileIcon }),
                    " ",
                    leaf
                );else nodeUI = _react2.default.createElement(
                    "li",
                    { style: { color: activeLeafColor }, onClick: this.toggle },
                    _react2.default.createElement(
                        "span",
                        { style: fileIconStyle },
                        fileIcon
                    ),
                    " ",
                    leaf
                );
            }

            return nodeUI;
        }
    }]);

    return Node;
}(_react2.default.Component);

_App2.default.registerToolImplementation("weavereact.NodeConfig", Node);
exports.default = Node;
//# sourceMappingURL=data:application/json;base64,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LElBQTZCLENBQUMsQ0FBRCxFQUM1QixTQUFTOztzQkFBSSxPQUFPLEVBQUMsT0FBTSxlQUFOLEVBQVIsRUFBZ0MsU0FBUyxLQUFLLE1BQUwsRUFBN0M7b0JBQ0cscUNBQUcsV0FBVyxRQUFYLEVBQUgsQ0FESDs7b0JBRVUsSUFGVjtpQkFBVCxDQURKLEtBTUksU0FBUzs7c0JBQUksT0FBTyxFQUFDLE9BQU0sZUFBTixFQUFSLEVBQWdDLFNBQVMsS0FBSyxNQUFMLEVBQTdDO29CQUNHOzswQkFBTSxPQUFPLGFBQVAsRUFBTjt3QkFBNkIsUUFBN0I7cUJBREg7O29CQUVVLElBRlY7aUJBQVQsQ0FOSjthQWxCSjs7QUE4QkosbUJBQVMsTUFBVCxDQS9DUzs7OztXQTVGUDtFQUFhLGdCQUFNLFNBQU47O0FBZ0puQixjQUFJLDBCQUFKLENBQStCLHVCQUEvQixFQUF1RCxJQUF2RDtrQkFDZSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcblxuY2xhc3MgTm9kZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgTm9kZUNvbmZpZygpO1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0VHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRUcmVlTGFiZWwgPSB0aGlzLmdldFRyZWVMYWJlbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFNlc3Npb25TdGF0ZUZyb21UcmVlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gIXRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKVxuICAgIH1cblxuXG4gICAgc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwudmFsdWUgPSB0aGlzLmdldFRyZWVMYWJlbCgpO1xuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMoKTtcbiAgICAgICAgaWYgKHRyZWVOb2RlcyAmJiB0cmVlTm9kZXMubGVuZ3RoICE9PSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWVzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWVOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvYmplY3ROYW1lID0gXCJub2RlXCIgKyBpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChvYmplY3ROYW1lLCBOb2RlQ29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUcmVlTm9kZXMoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubm9kZXNdIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLm5vZGVzXSgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLm5vZGVzXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRyZWVMYWJlbCgpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5sYWJlbF0gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubGFiZWxdKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmxhYmVsXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgdmFyIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgZWxzZSBpZih0aGlzLnByb3BzLmxhYmVsICE9PSBuZXh0UHJvcHMubGFiZWwpXG4gICAgICAgICAgICBmbGFnID0gIHRydWU7XG4gICAgICAgIGVsc2UgaWYodGhpcy5wcm9wcy5ub2RlcyAhPT0gbmV4dFByb3BzLm5vZGVzKVxuICAgICAgICAgICAgZmxhZyA9ICB0cnVlO1xuICAgICAgICBcbiAgICAgICAgaWYoZmxhZyl0aGlzLnNldFNlc3Npb25TdGF0ZUZyb21UcmVlKCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZihXZWF2ZS5kZXRlY3RMaW5rYWJsZU9iamVjdENoYW5nZSh0aGlzLnNldHRpbmdzKSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3MpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZih0aGlzLnByb3BzLmxhYmVsICE9PSBuZXh0UHJvcHMubGFiZWwpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZih0aGlzLnByb3BzLm5vZGVzICE9PSBuZXh0UHJvcHMubm9kZXMpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZih0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2sgIT09IG5leHRQcm9wcy5jbGlja0NhbGxiYWNrKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBub2Rlc1VJID0gW107XG5cbiAgICAgICAgdmFyIG5vZGVVSSA9IFwiXCI7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZXMoKTtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKXtcblxuICAgICAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgbm9kZXMubGVuZ3RoIDtpKyspe1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlZUl0ZW0gPSB0cmVlTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3QoIG5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNVSS5wdXNoKDxOb2RlIGtleT17aX0gZGF0YT17dHJlZUl0ZW19IGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBub2Rlcz17dGhpcy5wcm9wcy5ub2Rlc30gdHJlZUNvbmZpZz17dGhpcy5wcm9wcy50cmVlQ29uZmlnfSBzZXR0aW5ncz17bm9kZUNvbmZpZ30gY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrfS8+KSA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7IC8vZm9sZGVyXG4gICAgICAgICAgICB2YXIgbm9kZUljb25TdHlsZU9iamVjdCA9IFN0eWxlcy5hcHBlbmRWZW5kb3JQcmVmaXgodGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldE5vZGVJY29uU3R5bGUoKSk7XG4gICAgICAgICAgICB2YXIgZm9sZGVySWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGb2xkZXJJY29uKHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuICAgICAgICAgICAgbm9kZVVJID0gPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Zm9sZGVySWNvbn0gc3R5bGU9e25vZGVJY29uU3R5bGVPYmplY3R9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAmIzE2MDt7dGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOlwibm9uZVwiLHBhZGRpbmdMZWZ0OlwiMjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bm9kZXNVSX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgdmFyIGxlYWYgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGZpbGVJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZpbGVJY29uKHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICAgICAgICB2YXIgZmlsZUljb25TdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvblN0eWxlKCk7XG4gICAgICAgICAgICB2YXIgYWN0aXZlTGVhZkNvbG9yID0gdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWU/XCIjOGU4ZDhkXCI6XCJibGFja1wiO1xuICAgICAgICAgICAgaWYoZmlsZUljb24uaW5kZXhPZihcImZhIGZhLVwiKSA+IC0xKVxuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17e2NvbG9yOmFjdGl2ZUxlYWZDb2xvcn19IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiMxNjA7e2xlYWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e3tjb2xvcjphY3RpdmVMZWFmQ29sb3J9fSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2ZpbGVJY29uU3R5bGV9PntmaWxlSWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiMxNjA7e2xlYWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgfVxuXG4gICAgcmV0dXJuICggbm9kZVVJKTtcbiAgICB9XG5cbn1cblxuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19
