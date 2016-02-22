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
            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.settings);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTTs7O0FBRUYsYUFGRSxJQUVGLENBQVksS0FBWixFQUFtQjs4QkFGakIsTUFFaUI7OzJFQUZqQixpQkFHUSxRQURTOztBQUVmLGNBQUssUUFBTCxHQUFnQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBb0IsMEJBQTFDLENBRkQ7QUFHZixjQUFLLE1BQUwsR0FBYyxNQUFLLE1BQUwsQ0FBWSxJQUFaLE9BQWQsQ0FIZTtBQUlmLGNBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEIsQ0FKZTtBQUtmLGNBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEIsQ0FMZTtBQU1mLGNBQUssdUJBQUwsR0FBK0IsTUFBSyx1QkFBTCxDQUE2QixJQUE3QixPQUEvQixDQU5lO0FBT2YsY0FBSyx1QkFBTCxDQUE2QixNQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWdCLE1BQUssS0FBTCxDQUFXLEtBQVgsRUFBaUIsTUFBSyxLQUFMLENBQVcsS0FBWCxDQUE5RCxDQVBlOztLQUFuQjs7aUJBRkU7OzRDQVlpQjtBQUNmLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLG9CQUFuQixDQUF3QyxJQUF4QyxFQUE4QyxLQUFLLFdBQUwsQ0FBOUMsQ0FEZTtBQUVmLGlCQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLGtCQUF2QixDQUEwQyxvQkFBMUMsQ0FBK0QsSUFBL0QsRUFBcUUsS0FBSyxXQUFMLENBQXJFLENBRmU7QUFHZixpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixvQkFBcEIsQ0FBeUMsSUFBekMsRUFBK0MsS0FBSyxXQUFMLENBQS9DLENBSGU7QUFJZixpQkFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixvQkFBckIsQ0FBMEMsSUFBMUMsRUFBZ0QsS0FBSyxXQUFMLENBQWhELENBSmU7Ozs7K0NBT0s7QUFDcEIsaUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsY0FBbkIsQ0FBa0MsSUFBbEMsRUFBd0MsS0FBSyxXQUFMLENBQXhDLENBRG9CO0FBRXBCLGlCQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLGtCQUF2QixDQUEwQyxjQUExQyxDQUF5RCxJQUF6RCxFQUErRCxLQUFLLFdBQUwsQ0FBL0QsQ0FGb0I7QUFHcEIsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsY0FBcEIsQ0FBbUMsSUFBbkMsRUFBeUMsS0FBSyxXQUFMLENBQXpDLENBSG9CO0FBSXBCLGlCQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLGNBQXJCLENBQW9DLElBQXBDLEVBQTBDLEtBQUssV0FBTCxDQUExQyxDQUpvQjs7OztpQ0FPaEI7QUFDSixpQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixHQUEyQixDQUFDLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsQ0FEeEI7QUFFSixnQkFBRyxLQUFLLEtBQUwsQ0FBVyxhQUFYLEVBQ0MsS0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixJQUF6QixDQUE4QixJQUE5QixFQUFtQyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWdCLEtBQUssUUFBTCxDQUFuRCxDQURKO0FBRUEsaUJBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsZ0JBQXRCLENBQXVDLEtBQUssUUFBTCxDQUF2QyxDQUpJOzs7O2dEQVFnQixNQUFLLE9BQU0sT0FBTztBQUN0QyxpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixHQUE0QixLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFBdUIsS0FBdkIsQ0FBNUIsQ0FEc0M7QUFFdEMsZ0JBQUksWUFBWSxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFBdUIsS0FBdkIsQ0FBWixDQUZrQztBQUd0QyxnQkFBSSxhQUFhLFVBQVUsTUFBVixFQUFrQjtBQUMvQixxQkFBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixjQUF2QixHQUQrQjtBQUUvQixxQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksVUFBVSxNQUFWLEVBQWtCLEdBQXRDLEVBQTJDO0FBQ3ZDLHdCQUFJLGFBQWEsU0FBUyxDQUFULENBRHNCO0FBRXZDLHlCQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLGFBQXZCLENBQXFDLFVBQXJDLHdCQUZ1QztpQkFBM0M7QUFJQSxxQkFBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixlQUF2QixHQU4rQjthQUFuQzs7OztxQ0FVUyxNQUFLLE9BQU07QUFDcEIsZ0JBQUcsSUFBSCxFQUFRO0FBQ0osb0JBQUcsS0FBSyxLQUFMLGFBQXVCLFFBQXZCLEVBQWdDO0FBQy9CLDJCQUFPLEtBQUssS0FBTCxHQUFQLENBRCtCO2lCQUFuQyxNQUVLO0FBQ0YsMkJBQU8sS0FBSyxLQUFMLENBQVAsQ0FERTtpQkFGTDthQURKLE1BT0ssT0FBTyxFQUFQLENBUEw7Ozs7cUNBV1MsTUFBSyxPQUFNO0FBQ3BCLGdCQUFHLElBQUgsRUFBUTtBQUNKLG9CQUFHLEtBQUssS0FBTCxhQUF1QixRQUF2QixFQUFnQztBQUMvQiwyQkFBTyxLQUFLLEtBQUwsR0FBUCxDQUQrQjtpQkFBbkMsTUFFSztBQUNELDJCQUFPLEtBQUssS0FBTCxDQUFQLENBREM7aUJBRkw7YUFESixNQU1LO0FBQ0QsdUJBQU8sRUFBUCxDQURDO2FBTkw7Ozs7a0RBV3NCLFdBQVU7QUFDaEMsZ0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixVQUFVLElBQVYsRUFBZTtBQUNsQyxxQkFBSyx1QkFBTCxDQUE2QixVQUFVLElBQVYsRUFBZSxVQUFVLEtBQVYsRUFBZ0IsVUFBVSxLQUFWLENBQTVELENBRGtDO2FBQXRDOzs7O2lDQVNLO0FBQ0wsZ0JBQUksU0FBUywwQ0FBVCxDQURDO0FBRUwsZ0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFnQjtBQUNmLG9CQUFJLFVBQVUsRUFBVixDQURXO0FBRWYsb0JBQUksUUFBUSxLQUFLLFFBQUwsQ0FBYyxRQUFkLEVBQVIsQ0FGVztBQUdmLG9CQUFHLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBbkIsRUFBeUI7QUFDeEIsd0JBQUcsTUFBTSxNQUFOLEdBQWUsQ0FBZixFQUFpQjtBQUNoQiw0QkFBSSxZQUFZLEtBQUssWUFBTCxDQUFrQixLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWdCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBOUMsQ0FEWTtBQUVoQiw2QkFBSyxJQUFJLElBQUksQ0FBSixFQUFRLElBQUksTUFBTSxNQUFOLEVBQWMsR0FBbkMsRUFBdUM7QUFDbkMsZ0NBQUksV0FBVyxVQUFVLENBQVYsQ0FBWCxDQUQrQjtBQUVuQyxnQ0FBSSxhQUFhLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsU0FBdkIsQ0FBa0MsTUFBTSxDQUFOLENBQWxDLENBQWIsQ0FGK0I7QUFHbkMsb0NBQVEsSUFBUixDQUFhLDhCQUFDLElBQUQsSUFBTSxLQUFLLENBQUwsRUFBUSxNQUFNLFFBQU4sRUFBZ0IsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixZQUFZLEtBQUssS0FBTCxDQUFXLFVBQVgsRUFBdUIsVUFBVSxVQUFWLEVBQXNCLGVBQWUsS0FBSyxLQUFMLENBQVcsYUFBWCxFQUF4SixDQUFiLEVBSG1DO3lCQUF2QztxQkFGSjtpQkFESjs7QUFXQSxvQkFBRyxNQUFNLE1BQU4sR0FBZSxDQUFmLEVBQWlCOztBQUNoQix3QkFBSSxzQkFBc0IsZ0JBQU8sa0JBQVAsQ0FBMEIsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixnQkFBdEIsRUFBMUIsQ0FBdEIsQ0FEWTtBQUVoQix3QkFBSSxhQUFhLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsYUFBdEIsQ0FBb0MsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFnQixLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQW5CLENBQWpFLENBRlk7QUFHaEIsd0JBQUksV0FBVzs7MEJBQU0sU0FBUyxLQUFLLE1BQUwsRUFBZjt3QkFDSyxxQ0FBRyxXQUFXLFVBQVgsRUFBdUIsT0FBTyxtQkFBUCxFQUExQixDQURMOzt3QkFFWSxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCO3FCQUZ2QixDQUhZO0FBT2hCLHdCQUFHLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsVUFBdEIsQ0FBaUMsS0FBakMsRUFBdUM7QUFDdEMsbUNBQVc7OzhCQUFNLFNBQVMsS0FBSyxNQUFMLEVBQWY7NEJBQ00sS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQjsrQkFETjs0QkFFSyxxQ0FBRyxXQUFXLFVBQVgsRUFBdUIsT0FBTyxtQkFBUCxFQUExQixDQUZMO3lCQUFYLENBRHNDO3FCQUExQztBQU1BLHdCQUFJLGNBQWMsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixXQUF0QixDQUFrQyxLQUFsQyxDQWJGO0FBY2hCLDZCQUFTOzswQkFBTSxPQUFPLEVBQUMsaUJBQWdCLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsU0FBdEIsQ0FBZ0MsS0FBaEMsRUFBeEIsRUFBTjt3QkFDSSxRQURKO3dCQUVHOzs4QkFBSSxPQUFPLEVBQUMsZUFBYyxNQUFkLEVBQXFCLGFBQVksV0FBWixFQUE3QixFQUFKOzRCQUNLLE9BREw7eUJBRkg7cUJBQVQsQ0FkZ0I7aUJBQXBCLE1BcUJJOztBQUNBLHdCQUFJLE9BQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixDQURYO0FBRUEsd0JBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLFdBQXRCLENBQWtDLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBZ0IsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixLQUFuQixDQUE3RCxDQUZKO0FBR0Esd0JBQUksZ0JBQWdCLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsZ0JBQXRCLEVBQWhCLENBSEo7QUFJQSx3QkFBSSxrQkFBa0IsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixHQUEyQixTQUEzQixHQUFxQyxTQUFyQyxDQUp0QjtBQUtBLHdCQUFJLGVBQWUsRUFBQyxPQUFNLGVBQU4sRUFBc0IsaUJBQWdCLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsU0FBdEIsQ0FBZ0MsS0FBaEMsRUFBdEQsQ0FMSjtBQU1BLG1DQUFlLGdCQUFPLGlCQUFQLENBQXlCLFlBQXpCLEVBQXNDLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsVUFBdEIsQ0FBaUMsS0FBakMsQ0FBckQsQ0FOQTtBQU9BLHdCQUFHLFlBQVksU0FBUyxPQUFULENBQWlCLFFBQWpCLElBQTZCLENBQUMsQ0FBRCxFQUN4QyxTQUFTOzswQkFBSSxPQUFPLFlBQVAsRUFBcUIsU0FBUyxLQUFLLE1BQUwsRUFBbEM7d0JBQ0cscUNBQUcsV0FBVyxRQUFYLEVBQUgsQ0FESDs7d0JBRVUsSUFGVjtxQkFBVCxDQURKLEtBS0ssSUFBRyxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLGtCQUF0QixDQUF5QyxLQUF6QyxFQUNKLFNBQVM7OzBCQUFJLE9BQU8sWUFBUCxFQUFxQixTQUFTLEtBQUssTUFBTCxFQUFsQzt3QkFDRzs7OEJBQU0sT0FBTyxhQUFQLEVBQU47NEJBQTZCLFFBQTdCO3lCQURIOzt3QkFFVSxJQUZWO3FCQUFULENBREMsS0FNRCxTQUFTOzswQkFBSSxPQUFPLFlBQVAsRUFBcUIsU0FBUyxLQUFLLE1BQUwsRUFBbEM7O3dCQUNVLElBRFY7cUJBQVQsQ0FOQztpQkFqQ1Q7YUFkSjs7QUE0REosbUJBQVMsTUFBVCxDQTlEUzs7OztXQWpGUDtFQUFhLGdCQUFNLFNBQU47O0FBb0puQixjQUFJLDBCQUFKLENBQStCLHVCQUEvQixFQUF1RCxJQUF2RDtrQkFDZSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcblxuY2xhc3MgTm9kZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgTm9kZUNvbmZpZygpO1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0VHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRUcmVlTGFiZWwgPSB0aGlzLmdldFRyZWVMYWJlbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFNlc3Npb25TdGF0ZUZyb21UcmVlID0gdGhpcy5zZXRTZXNzaW9uU3RhdGVGcm9tVHJlZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFNlc3Npb25TdGF0ZUZyb21UcmVlKHRoaXMucHJvcHMuZGF0YSx0aGlzLnByb3BzLmxhYmVsLHRoaXMucHJvcHMubm9kZXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9ICF0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjaylcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjay5jYWxsKHRoaXMsdGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzLnNldHRpbmdzKVxuICAgIH1cblxuXG4gICAgc2V0U2Vzc2lvblN0YXRlRnJvbVRyZWUoZGF0YSxsYWJlbCxub2Rlcykge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlID0gdGhpcy5nZXRUcmVlTGFiZWwoZGF0YSxsYWJlbCk7XG4gICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2RlcyhkYXRhLG5vZGVzKTtcbiAgICAgICAgaWYgKHRyZWVOb2RlcyAmJiB0cmVlTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmRlbGF5Q2FsbGJhY2tzKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWVOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvYmplY3ROYW1lID0gXCJub2RlXCIgKyBpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChvYmplY3ROYW1lLCBOb2RlQ29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUcmVlTm9kZXMoZGF0YSxub2Rlcyl7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtub2Rlc10gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbm9kZXNdKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgIHJldHVybiBkYXRhW25vZGVzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiBbXTtcblxuICAgIH1cblxuICAgIGdldFRyZWVMYWJlbChkYXRhLGxhYmVsKXtcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhW2xhYmVsXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtsYWJlbF0oKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2xhYmVsXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB0aGlzLnNldFNlc3Npb25TdGF0ZUZyb21UcmVlKG5leHRQcm9wcy5kYXRhLG5leHRQcm9wcy5sYWJlbCxuZXh0UHJvcHMubm9kZXMpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBub2RlVUkgPSA8ZGl2Lz47XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB2YXIgbm9kZXNVSSA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlcygpO1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBpZihub2Rlcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWVOb2RlcyA9IHRoaXMuZ2V0VHJlZU5vZGVzKHRoaXMucHJvcHMuZGF0YSx0aGlzLnByb3BzLm5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgbm9kZXMubGVuZ3RoIDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWVJdGVtID0gdHJlZU5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWcgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdCggbm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNVSS5wdXNoKDxOb2RlIGtleT17aX0gZGF0YT17dHJlZUl0ZW19IGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBub2Rlcz17dGhpcy5wcm9wcy5ub2Rlc30gdHJlZUNvbmZpZz17dGhpcy5wcm9wcy50cmVlQ29uZmlnfSBzZXR0aW5ncz17bm9kZUNvbmZpZ30gY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrfS8+KSA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApeyAvL2ZvbGRlclxuICAgICAgICAgICAgICAgIHZhciBub2RlSWNvblN0eWxlT2JqZWN0ID0gU3R5bGVzLmFwcGVuZFZlbmRvclByZWZpeCh0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0Tm9kZUljb25TdHlsZSgpKTtcbiAgICAgICAgICAgICAgICB2YXIgZm9sZGVySWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGb2xkZXJJY29uKHRoaXMucHJvcHMuZGF0YSx0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBmb2xkZXJVSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Zm9sZGVySWNvbn0gc3R5bGU9e25vZGVJY29uU3R5bGVPYmplY3R9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzE2MDt7dGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcucmlnaHRBbGlnbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGZvbGRlclVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc2V0dGluZ3MubGFiZWwudmFsdWV9JiMxNjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZvbGRlckljb259IHN0eWxlPXtub2RlSWNvblN0eWxlT2JqZWN0fSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbm9kZVBhZGRpbmcgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcudmFsdWU7XG4gICAgICAgICAgICAgICAgbm9kZVVJID0gPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6dGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVDb2xvci52YWx1ZX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xkZXJVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOlwibm9uZVwiLHBhZGRpbmdMZWZ0Om5vZGVQYWRkaW5nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXsgLy9sZWFmXG4gICAgICAgICAgICAgICAgdmFyIGxlYWYgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZUljb25TdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvblN0eWxlKCk7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUxlYWZDb2xvciA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlP1wiIzAwMDAwMFwiOlwiIzlkOWQ5ZFwiO1xuICAgICAgICAgICAgICAgIHZhciBsZWFmU3R5bGVPYmogPSB7Y29sb3I6YWN0aXZlTGVhZkNvbG9yLGJhY2tncm91bmRDb2xvcjp0aGlzLnByb3BzLnRyZWVDb25maWcubGVhZkNvbG9yLnZhbHVlfVxuICAgICAgICAgICAgICAgIGxlYWZTdHlsZU9iaiA9IFN0eWxlcy5tZXJnZVN0eWxlT2JqZWN0cyhsZWFmU3R5bGVPYmosdGhpcy5wcm9wcy50cmVlQ29uZmlnLmxlYWZCb3JkZXIuc3RhdGUpXG4gICAgICAgICAgICAgICAgaWYoZmlsZUljb24gJiYgZmlsZUljb24uaW5kZXhPZihcImZhIGZhLVwiKSA+IC0xKVxuICAgICAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e2xlYWZTdHlsZU9ian0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3tsZWFmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgbm9kZVVJID0gPGxpIHN0eWxlPXtsZWFmU3R5bGVPYmp9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2ZpbGVJY29uU3R5bGV9PntmaWxlSWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwO3tsZWFmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbm9kZVVJID0gPGxpIHN0eWxlPXtsZWFmU3R5bGVPYmp9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiMxNjA7e2xlYWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgcmV0dXJuICggbm9kZVVJKTtcbiAgICB9XG5cbn1cblxuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19
