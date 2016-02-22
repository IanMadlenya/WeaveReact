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
                    var fileIcon = this.props.treeConfig.getFileIcon(this.props.data, this.settings.open.value);
                    var fileIconStyle = this.props.treeConfig.getFileIconStyle();
                    var activeLeafColor = this.settings.active.value ? "#000000" : "#9d9d9d";
                    var leafStyleObj = { color: activeLeafColor, backgroundColor: this.props.treeConfig.leafColor.value };
                    leafStyleObj = _Style2.default.mergeStyleObjects(leafStyleObj, this.props.treeConfig.leafBorder.state);
                    if (fileIcon && fileIcon.indexOf("fa fa-") > -1) nodeUI = _react2.default.createElement(
                        "li",
                        { style: leafStyleObj, onClick: this.toggle },
                        _react2.default.createElement("i", { className: fileIcon }),
                        " ",
                        leaf
                    );else if (this.props.treeConfig.enableDataTypeIcon.value) nodeUI = _react2.default.createElement(
                        "li",
                        { style: leafStyleObj, onClick: this.toggle },
                        _react2.default.createElement(
                            "span",
                            { style: fileIconStyle },
                            fileIcon
                        ),
                        " ",
                        leaf
                    );else nodeUI = _react2.default.createElement(
                        "li",
                        { style: leafStyleObj, onClick: this.toggle },
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
//# sourceMappingURL=data:application/json;base64,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QU0sZUFBTixFQUFzQixpQkFBZ0IsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixTQUF0QixDQUFnQyxLQUFoQyxFQUF0RCxDQUxKO0FBTUEsbUNBQWUsZ0JBQU8saUJBQVAsQ0FBeUIsWUFBekIsRUFBc0MsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixVQUF0QixDQUFpQyxLQUFqQyxDQUFyRCxDQU5BO0FBT0Esd0JBQUcsWUFBWSxTQUFTLE9BQVQsQ0FBaUIsUUFBakIsSUFBNkIsQ0FBQyxDQUFELEVBQ3hDLFNBQVM7OzBCQUFJLE9BQU8sWUFBUCxFQUFxQixTQUFTLEtBQUssTUFBTCxFQUFsQzt3QkFDRyxxQ0FBRyxXQUFXLFFBQVgsRUFBSCxDQURIOzt3QkFFVSxJQUZWO3FCQUFULENBREosS0FLSyxJQUFHLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0Isa0JBQXRCLENBQXlDLEtBQXpDLEVBQ0osU0FBUzs7MEJBQUksT0FBTyxZQUFQLEVBQXFCLFNBQVMsS0FBSyxNQUFMLEVBQWxDO3dCQUNHOzs4QkFBTSxPQUFPLGFBQVAsRUFBTjs0QkFBNkIsUUFBN0I7eUJBREg7O3dCQUVVLElBRlY7cUJBQVQsQ0FEQyxLQU1ELFNBQVM7OzBCQUFJLE9BQU8sWUFBUCxFQUFxQixTQUFTLEtBQUssTUFBTCxFQUFsQzs7d0JBQ1UsSUFEVjtxQkFBVCxDQU5DO2lCQWpDVDthQWRKOztBQTRESixtQkFBUyxNQUFULENBOURTOzs7O1dBakZQO0VBQWEsZ0JBQU0sU0FBTjs7QUFvSm5CLGNBQUksMEJBQUosQ0FBK0IsdUJBQS9CLEVBQXVELElBQXZEO2tCQUNlIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuXG5jbGFzcyBOb2RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBOb2RlQ29uZmlnKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRUcmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2Rlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFRyZWVMYWJlbCA9IHRoaXMuZ2V0VHJlZUxhYmVsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUgPSB0aGlzLnNldFNlc3Npb25TdGF0ZUZyb21UcmVlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUodGhpcy5wcm9wcy5kYXRhLHRoaXMucHJvcHMubGFiZWwsdGhpcy5wcm9wcy5ub2Rlcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gIXRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKVxuICAgIH1cblxuXG4gICAgc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUoZGF0YSxsYWJlbCxub2Rlcykge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlID0gdGhpcy5nZXRUcmVlTGFiZWwoZGF0YSxsYWJlbCk7XG4gICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2RlcyhkYXRhLG5vZGVzKTtcbiAgICAgICAgaWYgKHRyZWVOb2RlcyAmJiB0cmVlTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWVOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvYmplY3ROYW1lID0gXCJub2RlXCIgKyBpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChvYmplY3ROYW1lLCBOb2RlQ29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUcmVlTm9kZXMoZGF0YSxub2Rlcyl7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtub2Rlc10gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbm9kZXNdKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgIHJldHVybiBkYXRhW25vZGVzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiBbXTtcblxuICAgIH1cblxuICAgIGdldFRyZWVMYWJlbChkYXRhLGxhYmVsKXtcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW2xhYmVsXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtsYWJlbF0oKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2xhYmVsXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB0aGlzLnNldFNlc3Npb25TdGF0ZUZyb21UcmVlKG5leHRQcm9wcy5kYXRhLG5leHRQcm9wcy5sYWJlbCxuZXh0UHJvcHMubm9kZXMpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBub2RlVUkgPSA8ZGl2Lz47XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB2YXIgbm9kZXNVSSA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlcygpO1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBpZihub2Rlcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzKHRoaXMucHJvcHMuZGF0YSx0aGlzLnByb3BzLm5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgbm9kZXMubGVuZ3RoIDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWVJdGVtID0gdHJlZU5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWcgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdCggbm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNVSS5wdXNoKDxOb2RlIGtleT17aX0gZGF0YT17dHJlZUl0ZW19IGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBub2Rlcz17dGhpcy5wcm9wcy5ub2Rlc30gdHJlZUNvbmZpZz17dGhpcy5wcm9wcy50cmVlQ29uZmlnfSBzZXR0aW5ncz17bm9kZUNvbmZpZ30gY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrfS8+KSA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApeyAvL2ZvbGRlclxuICAgICAgICAgICAgICAgIHZhciBub2RlSWNvblN0eWxlT2JqZWN0ID0gU3R5bGVzLmFwcGVuZFZlbmRvclByZWZpeCh0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0Tm9kZUljb25TdHlsZSgpKTtcbiAgICAgICAgICAgICAgICB2YXIgZm9sZGVySWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGb2xkZXJJY29uKHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBmb2xkZXJVSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Zm9sZGVySWNvbn0gc3R5bGU9e25vZGVJY29uU3R5bGVPYmplY3R9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzE2MDt7dGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcucmlnaHRBbGlnbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGZvbGRlclVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc2V0dGluZ3MubGFiZWwudmFsdWV9JiMxNjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZvbGRlckljb259IHN0eWxlPXtub2RlSWNvblN0eWxlT2JqZWN0fSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbm9kZVBhZGRpbmcgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcudmFsdWU7XG4gICAgICAgICAgICAgICAgbm9kZVVJID0gPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6dGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVDb2xvci52YWx1ZX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xkZXJVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOlwibm9uZVwiLHBhZGRpbmdMZWZ0Om5vZGVQYWRkaW5nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXsgLy9sZWFmXG4gICAgICAgICAgICAgICAgdmFyIGxlYWYgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZUljb25TdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvblN0eWxlKCk7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUxlYWZDb2xvciA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlP1wiIzAwMDAwMFwiOlwiIzlkOWQ5ZFwiO1xuICAgICAgICAgICAgICAgIHZhciBsZWFmU3R5bGVPYmogPSB7Y29sb3I6YWN0aXZlTGVhZkNvbG9yLGJhY2tncm91bmRDb2xvcjp0aGlzLnByb3BzLnRyZWVDb25maWcubGVhZkNvbG9yLnZhbHVlfVxuICAgICAgICAgICAgICAgIGxlYWZTdHlsZU9iaiA9IFN0eWxlcy5tZXJnZVN0eWxlT2JqZWN0cyhsZWFmU3R5bGVPYmosdGhpcy5wcm9wcy50cmVlQ29uZmlnLmxlYWZCb3JkZXIuc3RhdGUpXG4gICAgICAgICAgICAgICAgaWYoZmlsZUljb24gJiYgZmlsZUljb24uaW5kZXhPZihcImZhIGZhLVwiKSA+IC0xKVxuICAgICAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e2xlYWZTdHlsZU9ian0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3tsZWFmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgbm9kZVVJID0gPGxpIHN0eWxlPXtsZWFmU3R5bGVPYmp9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2ZpbGVJY29uU3R5bGV9PntmaWxlSWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3tsZWFmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbm9kZVVJID0gPGxpIHN0eWxlPXtsZWFmU3R5bGVPYmp9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiMxNjA7e2xlYWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgcmV0dXJuICggbm9kZVVJKTtcbiAgICB9XG5cbn1cblxuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19
