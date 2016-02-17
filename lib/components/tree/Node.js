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
        _this.setSessionStateFromTree = _this.setSessionStateFromTree.bind(_this);
        _this.setSessionStateFromTree(_this.props.data, _this.props.label, _this.props.nodes);
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
        value: function setSessionStateFromTree(data, label, nodes) {
            this.settings.label.value = this.getTreeLabel(data, label);
            var treeNodes = this.getTreeNodes(data, nodes);
            if (treeNodes && treeNodes.length) {
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
        value: function getTreeNodes(data, nodes) {
            if (data) {
                if (data[nodes] instanceof Function) {
                    return data[nodes]();
                } else {
                    return data[nodes];
                }
            } else return [];
        }
    }, {
        key: "getTreeLabel",
        value: function getTreeLabel(data, label) {
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
                this.setSessionStateFromTree(nextProps.data, nextProps.label, nextProps.nodes);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var nodeUI = _react2.default.createElement("div", null);
            if (this.props.data) {
                var nodesUI = [];
                var nodes = this.settings.getNodes();
                if (this.settings.open.value) {
                    if (nodes.length > 0) {
                        var treeNodes = this.getTreeNodes(this.props.data, this.props.nodes);
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
                    var folderUI = _react2.default.createElement(
                        "span",
                        { onClick: this.toggle },
                        _react2.default.createElement("i", { className: folderIcon, style: nodeIconStyleObject }),
                        " ",
                        this.settings.label.value
                    );
                    if (this.props.treeConfig.rightAlign.value) {
                        folderUI = _react2.default.createElement(
                            "span",
                            { onClick: this.toggle },
                            this.settings.label.value,
                            " ",
                            _react2.default.createElement("i", { className: folderIcon, style: nodeIconStyleObject })
                        );
                    }
                    var nodePadding = this.props.treeConfig.nodePadding.value;
                    nodeUI = _react2.default.createElement(
                        "span",
                        { style: { backgroundColor: this.props.treeConfig.nodeColor.value } },
                        folderUI,
                        _react2.default.createElement(
                            "ul",
                            { style: { listStyleType: "none", paddingLeft: nodePadding } },
                            nodesUI
                        )
                    );
                } else {
                    //leaf
                    var leaf = this.settings.label.value;
                    var fileIcon = this.props.treeConfig.getFileIcon(this.props.data);
                    var fileIconStyle = this.props.treeConfig.getFileIconStyle();
                    var activeLeafColor = this.settings.active.value ? "#000000" : "#9d9d9d";
                    if (fileIcon && fileIcon.indexOf("fa fa-") > -1) nodeUI = _react2.default.createElement(
                        "li",
                        { style: { color: activeLeafColor, backgroundColor: this.props.treeConfig.leafColor.value }, onClick: this.toggle },
                        _react2.default.createElement("i", { className: fileIcon }),
                        " ",
                        leaf
                    );else if (this.props.treeConfig.enableDataTypeIcon.value) nodeUI = _react2.default.createElement(
                        "li",
                        { style: { color: activeLeafColor, backgroundColor: this.props.treeConfig.leafColor.value }, onClick: this.toggle },
                        _react2.default.createElement(
                            "span",
                            { style: fileIconStyle },
                            fileIcon
                        ),
                        " ",
                        leaf
                    );else nodeUI = _react2.default.createElement(
                        "li",
                        { style: { color: activeLeafColor, backgroundColor: this.props.treeConfig.leafColor.value }, onClick: this.toggle },
                        " ",
                        leaf
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
//# sourceMappingURL=data:application/json;base64,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QUFTOzswQkFBSSxPQUFPLEVBQUMsT0FBTSxlQUFOLEVBQXNCLGlCQUFnQixLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFNBQXRCLENBQWdDLEtBQWhDLEVBQTlDLEVBQXNGLFNBQVMsS0FBSyxNQUFMLEVBQW5HO3dCQUNHLHFDQUFHLFdBQVcsUUFBWCxFQUFILENBREg7O3dCQUVVLElBRlY7cUJBQVQsQ0FESixLQUtLLElBQUcsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixrQkFBdEIsQ0FBeUMsS0FBekMsRUFDSixTQUFTOzswQkFBSSxPQUFPLEVBQUMsT0FBTSxlQUFOLEVBQXNCLGlCQUFnQixLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFNBQXRCLENBQWdDLEtBQWhDLEVBQTlDLEVBQXNGLFNBQVMsS0FBSyxNQUFMLEVBQW5HO3dCQUNHOzs4QkFBTSxPQUFPLGFBQVAsRUFBTjs0QkFBNkIsUUFBN0I7eUJBREg7O3dCQUVVLElBRlY7cUJBQVQsQ0FEQyxLQU1ELFNBQVM7OzBCQUFJLE9BQU8sRUFBQyxPQUFNLGVBQU4sRUFBc0IsaUJBQWdCLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsU0FBdEIsQ0FBZ0MsS0FBaEMsRUFBOUMsRUFBc0YsU0FBUyxLQUFLLE1BQUwsRUFBbkc7O3dCQUNVLElBRFY7cUJBQVQsQ0FOQztpQkEvQlQ7YUFkSjs7QUEwREosbUJBQVMsTUFBVCxDQTVEUzs7OztXQWpGUDtFQUFhLGdCQUFNLFNBQU47O0FBa0puQixjQUFJLDBCQUFKLENBQStCLHVCQUEvQixFQUF1RCxJQUF2RDtrQkFDZSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcblxuY2xhc3MgTm9kZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgTm9kZUNvbmZpZygpO1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0VHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRUcmVlTGFiZWwgPSB0aGlzLmdldFRyZWVMYWJlbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFNlc3Npb25TdGF0ZUZyb21UcmVlID0gdGhpcy5zZXRTZXNzaW9uU3RhdGVGcm9tVHJlZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFNlc3Npb25TdGF0ZUZyb21UcmVlKHRoaXMucHJvcHMuZGF0YSx0aGlzLnByb3BzLmxhYmVsLHRoaXMucHJvcHMubm9kZXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9ICF0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncylcbiAgICB9XG5cblxuICAgIHNldFNlc3Npb25TdGF0ZUZyb21UcmVlKGRhdGEsbGFiZWwsbm9kZXMpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZSA9IHRoaXMuZ2V0VHJlZUxhYmVsKGRhdGEsbGFiZWwpO1xuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMoZGF0YSxub2Rlcyk7XG4gICAgICAgIGlmICh0cmVlTm9kZXMgJiYgdHJlZU5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0TmFtZSA9IFwibm9kZVwiICsgaTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3Qob2JqZWN0TmFtZSwgTm9kZUNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VHJlZU5vZGVzKGRhdGEsbm9kZXMpe1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGFbbm9kZXNdIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW25vZGVzXSgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICByZXR1cm4gZGF0YVtub2Rlc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gW107XG5cbiAgICB9XG5cbiAgICBnZXRUcmVlTGFiZWwoZGF0YSxsYWJlbCl7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtsYWJlbF0gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbGFiZWxdKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtsYWJlbF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdGhpcy5zZXRTZXNzaW9uU3RhdGVGcm9tVHJlZShuZXh0UHJvcHMuZGF0YSxuZXh0UHJvcHMubGFiZWwsbmV4dFByb3BzLm5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbm9kZVVJID0gPGRpdi8+O1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdmFyIG5vZGVzVUkgPSBbXTtcbiAgICAgICAgICAgIHZhciBub2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZXMoKTtcbiAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2Rlcyh0aGlzLnByb3BzLmRhdGEsdGhpcy5wcm9wcy5ub2Rlcyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IG5vZGVzLmxlbmd0aCA7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmVlSXRlbSA9IHRyZWVOb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3QoIG5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVUkucHVzaCg8Tm9kZSBrZXk9e2l9IGRhdGE9e3RyZWVJdGVtfSBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH0gbm9kZXM9e3RoaXMucHJvcHMubm9kZXN9IHRyZWVDb25maWc9e3RoaXMucHJvcHMudHJlZUNvbmZpZ30gc2V0dGluZ3M9e25vZGVDb25maWd9IGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30vPikgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihub2Rlcy5sZW5ndGggPiAwKXsgLy9mb2xkZXJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUljb25TdHlsZU9iamVjdCA9IFN0eWxlcy5hcHBlbmRWZW5kb3JQcmVmaXgodGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldE5vZGVJY29uU3R5bGUoKSk7XG4gICAgICAgICAgICAgICAgdmFyIGZvbGRlckljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0Rm9sZGVySWNvbih0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgZm9sZGVyVUkgPSA8c3BhbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZvbGRlckljb259IHN0eWxlPXtub2RlSWNvblN0eWxlT2JqZWN0fSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiMxNjA7e3RoaXMuc2V0dGluZ3MubGFiZWwudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLnJpZ2h0QWxpZ24udmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICBmb2xkZXJVSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlfSYjMTYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmb2xkZXJJY29ufSBzdHlsZT17bm9kZUljb25TdHlsZU9iamVjdH0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVQYWRkaW5nID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnZhbHVlO1xuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOnRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlQ29sb3IudmFsdWV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9sZGVyVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTpcIm5vbmVcIixwYWRkaW5nTGVmdDpub2RlUGFkZGluZ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZXNVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgICAgIHZhciBsZWFmID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZUljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0RmlsZUljb24odGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZUljb25TdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvblN0eWxlKCk7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUxlYWZDb2xvciA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlP1wiIzAwMDAwMFwiOlwiIzlkOWQ5ZFwiO1xuICAgICAgICAgICAgICAgIGlmKGZpbGVJY29uICYmIGZpbGVJY29uLmluZGV4T2YoXCJmYSBmYS1cIikgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgbm9kZVVJID0gPGxpIHN0eWxlPXt7Y29sb3I6YWN0aXZlTGVhZkNvbG9yLGJhY2tncm91bmRDb2xvcjp0aGlzLnByb3BzLnRyZWVDb25maWcubGVhZkNvbG9yLnZhbHVlfX0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3tsZWFmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgbm9kZVVJID0gPGxpIHN0eWxlPXt7Y29sb3I6YWN0aXZlTGVhZkNvbG9yLGJhY2tncm91bmRDb2xvcjp0aGlzLnByb3BzLnRyZWVDb25maWcubGVhZkNvbG9yLnZhbHVlfX0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17ZmlsZUljb25TdHlsZX0+e2ZpbGVJY29ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiMxNjA7e2xlYWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e3tjb2xvcjphY3RpdmVMZWFmQ29sb3IsYmFja2dyb3VuZENvbG9yOnRoaXMucHJvcHMudHJlZUNvbmZpZy5sZWFmQ29sb3IudmFsdWV9fSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3tsZWFmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIHJldHVybiAoIG5vZGVVSSk7XG4gICAgfVxuXG59XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==
