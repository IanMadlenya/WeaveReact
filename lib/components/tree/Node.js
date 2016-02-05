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
            this.setSessionStateFromTree();
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
//# sourceMappingURL=data:application/json;base64,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LEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsV0FBdEIsQ0FBa0MsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUE3QyxDQUZKO0FBR0Esb0JBQUksZ0JBQWdCLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsZ0JBQXRCLEVBQWhCLENBSEo7QUFJQSxvQkFBSSxrQkFBa0IsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixHQUEyQixTQUEzQixHQUFxQyxPQUFyQyxDQUp0QjtBQUtBLG9CQUFHLFNBQVMsT0FBVCxDQUFpQixRQUFqQixJQUE2QixDQUFDLENBQUQsRUFDNUIsU0FBUzs7c0JBQUksT0FBTyxFQUFDLE9BQU0sZUFBTixFQUFSLEVBQWdDLFNBQVMsS0FBSyxNQUFMLEVBQTdDO29CQUNHLHFDQUFHLFdBQVcsUUFBWCxFQUFILENBREg7O29CQUVVLElBRlY7aUJBQVQsQ0FESixLQU1JLFNBQVM7O3NCQUFJLE9BQU8sRUFBQyxPQUFNLGVBQU4sRUFBUixFQUFnQyxTQUFTLEtBQUssTUFBTCxFQUE3QztvQkFDRzs7MEJBQU0sT0FBTyxhQUFQLEVBQU47d0JBQTZCLFFBQTdCO3FCQURIOztvQkFFVSxJQUZWO2lCQUFULENBTko7YUFsQko7O0FBOEJKLG1CQUFTLE1BQVQsQ0EvQ1M7Ozs7V0FsRVA7RUFBYSxnQkFBTSxTQUFOOztBQXNIbkIsY0FBSSwwQkFBSixDQUErQix1QkFBL0IsRUFBdUQsSUFBdkQ7a0JBQ2UiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE5vZGVDb25maWcoKTtcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0VHJlZUxhYmVsID0gdGhpcy5nZXRUcmVlTGFiZWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uU3RhdGVGcm9tVHJlZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9ICF0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmNoYW5nZUFjdGl2ZU5vZGUodGhpcy5zZXR0aW5ncylcbiAgICB9XG5cblxuICAgIHNldFNlc3Npb25TdGF0ZUZyb21UcmVlKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlID0gdGhpcy5nZXRUcmVlTGFiZWwoKTtcbiAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzKCk7XG4gICAgICAgIGlmICh0cmVlTm9kZXMgJiYgdHJlZU5vZGVzLmxlbmd0aCAhPT0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lcygpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0TmFtZSA9IFwibm9kZVwiICsgaTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3Qob2JqZWN0TmFtZSwgTm9kZUNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlc3VtZUNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VHJlZU5vZGVzKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLm5vZGVzXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5ub2Rlc10oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5ub2Rlc107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUcmVlTGFiZWwoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubGFiZWxdIGluc3RhbmNlb2YgRnVuY3Rpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmxhYmVsXSgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5sYWJlbF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIHRoaXMuc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBub2Rlc1VJID0gW107XG5cbiAgICAgICAgdmFyIG5vZGVVSSA9IFwiXCI7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZXMoKTtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKXtcblxuICAgICAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgbm9kZXMubGVuZ3RoIDtpKyspe1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlZUl0ZW0gPSB0cmVlTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3QoIG5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNVSS5wdXNoKDxOb2RlIGtleT17aX0gZGF0YT17dHJlZUl0ZW19IGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBub2Rlcz17dGhpcy5wcm9wcy5ub2Rlc30gdHJlZUNvbmZpZz17dGhpcy5wcm9wcy50cmVlQ29uZmlnfSBzZXR0aW5ncz17bm9kZUNvbmZpZ30gY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrfS8+KSA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7IC8vZm9sZGVyXG4gICAgICAgICAgICB2YXIgbm9kZUljb25TdHlsZU9iamVjdCA9IFN0eWxlcy5hcHBlbmRWZW5kb3JQcmVmaXgodGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldE5vZGVJY29uU3R5bGUoKSk7XG4gICAgICAgICAgICB2YXIgZm9sZGVySWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGb2xkZXJJY29uKHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuICAgICAgICAgICAgbm9kZVVJID0gPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Zm9sZGVySWNvbn0gc3R5bGU9e25vZGVJY29uU3R5bGVPYmplY3R9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAmIzE2MDt7dGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOlwibm9uZVwiLHBhZGRpbmdMZWZ0OlwiMjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bm9kZXNVSX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgdmFyIGxlYWYgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGZpbGVJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZpbGVJY29uKHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICAgICAgICB2YXIgZmlsZUljb25TdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvblN0eWxlKCk7XG4gICAgICAgICAgICB2YXIgYWN0aXZlTGVhZkNvbG9yID0gdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWU/XCIjOGU4ZDhkXCI6XCJibGFja1wiO1xuICAgICAgICAgICAgaWYoZmlsZUljb24uaW5kZXhPZihcImZhIGZhLVwiKSA+IC0xKVxuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17e2NvbG9yOmFjdGl2ZUxlYWZDb2xvcn19IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiMxNjA7e2xlYWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e3tjb2xvcjphY3RpdmVMZWFmQ29sb3J9fSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2ZpbGVJY29uU3R5bGV9PntmaWxlSWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiMxNjA7e2xlYWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgfVxuXG4gICAgcmV0dXJuICggbm9kZVVJKTtcbiAgICB9XG5cbn1cblxuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19
