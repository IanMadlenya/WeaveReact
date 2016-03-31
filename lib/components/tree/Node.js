"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _NodeConfig = require("./NodeConfig");

var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Node = function (_AbstractComponent) {
    _inherits(Node, _AbstractComponent);

    function Node(props) {
        _classCallCheck(this, Node);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Node).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        _this.toggleSelectAll = _this.toggleSelectAll.bind(_this);

        _this.createSessionStateForTree = _this.createSessionStateForTree.bind(_this);
        _this.isSessionStateCreatedForTreeData = false;
        if (_this.props.data) {
            _this.settings.data = _this.props.data;
            _this.createSessionStateForTree();
        }
        _this.settings.open.addGroupedCallback(_this, _this.setChildrenSessionValues);

        _this.selectAll = _this.props.treeConfig.selectAll;
        _this.selectAll.addGroupedCallback(_this, _this.setChildrenSelectAllValues);
        _this.selectAll.addGroupedCallback(_this, _this.forceUpdate);
        return _this;
    }

    _createClass(Node, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            _get(Object.getPrototypeOf(Node.prototype), "componentWillReceiveProps", this).call(this, nextProps);
            if (this.props.data !== nextProps.data) {
                this.settings.data = nextProps.data;
                this.createSessionStateForTree(nextProps.data, nextProps.label, nextProps.nodes, nextProps.icon);
            }
            if (this.props.open !== nextProps.open) {
                this.settings.open.value = nextProps.open;
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _get(Object.getPrototypeOf(Node.prototype), "componentWillUnmount", this).call(this);
            this.settings.open.removeCallback(this, this.setChildrenSessionValues);
            this.selectAll.removeCallback(this, this.setChildrenSelectAllValues);
            this.selectAll.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "toggle",
        value: function toggle() {
            this.settings.open.value = !this.settings.open.value;
            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.settings);
            this.props.treeConfig.changeActiveNode(this.settings);
        }
    }, {
        key: "createSessionStateForTree",
        value: function createSessionStateForTree(data, label, nodes, icon) {
            var label = label ? label : this.props.label;
            var nodes = nodes ? nodes : this.props.nodes;
            var icon = icon ? icon : this.props.icon;
            if (data) {
                // calling with data arguments indicates data is changed so wipe the session state
                this.settings.reset();
            } else {
                data = this.props.data;
            }
            //to-do only required for rootnode
            this.settings.label.value = this.settings.getNodeValueFor(label);
            this.settings.iconName.value = this.settings.getNodeValueFor(icon);

            var treeNodes = this.settings.getNodeValueFor(nodes);
            if (treeNodes && treeNodes.length) {
                this.settings.children.delayCallbacks();
                for (var i = 0; i < treeNodes.length; i++) {
                    var nodeConfig = this.settings.children.requestObject("node" + i, _NodeConfig2.default);
                    nodeConfig.label.state = this.settings.getNodeValueFor(label, treeNodes[i]);
                    nodeConfig.iconName.state = this.settings.getNodeValueFor(icon, treeNodes[i]);
                    if (this.props.treeConfig.selectAll.state) {
                        nodeConfig.open.state = true;
                    } else {
                        nodeConfig.open.state = false;
                    }
                }
                this.settings.children.resumeCallbacks();
            }
            this.isSessionStateCreatedForTreeData = true;
        }
    }, {
        key: "setChildrenSessionValues",
        value: function setChildrenSessionValues() {
            if (!this.isSessionStateCreatedForTreeData) {
                this.createSessionStateForTree();
            }
            if (this.props.treeConfig.defaultSelectedNodes && this.props.treeConfig.defaultSelectedNodes.length > 0) {
                // if(this.props.treeConfig.defaultSelectedNodes.length>0){
                var nodeConfigs = this.settings.children.getObjects();
                nodeConfigs.map(function (nodeConfig, index) {
                    var nodeLabel = nodeConfig.label.state;
                    if (this.props.treeConfig.defaultSelectedNodes.indexOf(nodeLabel) !== -1) {
                        nodeConfig.open.value = true;
                    }
                }.bind(this));
                //}
                /*else{
                    var nodeConfigs = this.settings.children.getObjects();
                    nodeConfigs.map(function(nodeConfig,index){
                        var nodeLabel = nodeConfig.label.state;
                        nodeConfig.open.value = true;
                        this.props.treeConfig.defaultSelectedNodes.push(nodeLabel);
                    }.bind(this));
                }*/
            }
        }
    }, {
        key: "setChildrenSelectAllValues",
        value: function setChildrenSelectAllValues() {

            var nodeConfigs = this.settings.children.getObjects();
            nodeConfigs.map(function (nodeConfig, index) {

                nodeConfig.open.value = this.selectAll.state;
            }.bind(this));
        }
    }, {
        key: "toggleSelectAll",
        value: function toggleSelectAll() {
            // this trigger entire tree
            this.selectAll.state = !this.selectAll.state;
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            this.settings.props.addChildProps("treeConfig", this.props.treeConfig);
            this.settings.props.addChildProps("label", this.props.label);
            this.settings.props.addChildProps("nodes", this.props.nodes);
            this.settings.props.addChildProps("icon", this.props.icon);
            this.settings.props.addChildProps("reverseLayout", this.settings.reverseLayout.state);
            this.settings.props.addChildProps("clickCallback", this.props.clickCallback);
            this.settings.props.addChildProps("data", null, null, this.settings.getNodeValueFor(this.props.nodes));
            return _ComponentManager2.default.renderChildren(this);
        }
    }, {
        key: "render",
        value: function render() {
            if (_ComponentManager2.default.debug) console.log("Node - render");
            var nodeUI = _react2.default.createElement("div", null);
            var domDefinedStyle = this.props.style;
            if (this.props.data) {
                var nodesUI = [];
                var nodes = this.settings.getNodes();
                var isOpen = this.settings.open.value;

                var iconName = this.settings.iconName.value;
                var label = this.settings.label.value;

                var iconUI = "";

                if (nodes.length > 0) {
                    //folder
                    if (isOpen) {
                        nodesUI = this.renderChildren();
                    }

                    var branchStyle = this.props.treeConfig.branchStyle.state;
                    var nodeStyle = this.props.treeConfig.nodeStyle.state;
                    if (domDefinedStyle) _Style2.default.mergeStyleObjects(nodeStyle, domDefinedStyle, true); //this happens for rootNode
                    var controlName = this.props.treeConfig.getFolderIcon(isOpen);
                    if (iconName && iconName.length > 0) {
                        var iconStyleObj = this.props.treeConfig.nodeIconStyle.state;
                        if (iconName.indexOf("/") == -1) {
                            // fontAwesome Icon Name
                            iconUI = _react2.default.createElement("i", { style: iconStyleObj, className: iconName });
                        } else {
                            iconUI = _react2.default.createElement("img", { style: iconStyleObj, src: iconName });
                        }
                    }

                    var selectAllIconUI = "";
                    if (this.props.enableSelectAll) {
                        var treeIconState = this.props.treeConfig.treeIconState.state;
                        var selectAllIcon = this.selectAll.state ? treeIconState["selectAll"] : treeIconState["unSelectAll"];
                        selectAllIconUI = _react2.default.createElement(
                            "span",
                            { onClick: this.toggleSelectAll },
                            " ",
                            _react2.default.createElement("i", { className: selectAllIcon })
                        );
                    }

                    var folderUI = _react2.default.createElement(
                        "span",
                        { style: nodeStyle },
                        iconUI,
                        _react2.default.createElement(
                            "span",
                            { onClick: this.toggle },
                            " ",
                            Weave.lang(label)
                        ),
                        _react2.default.createElement(
                            "span",
                            { style: { flex: "1" }, onClick: this.toggle },
                            " "
                        ),
                        selectAllIconUI,
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
                    if (iconName && iconName.length > 0) {
                        var iconStyleObj = this.props.treeConfig.leafIconStyle.state;
                        if (iconName.indexOf("/") == -1) {
                            // fontAwesome Icon Name
                            iconUI = _react2.default.createElement("i", { style: iconStyleObj, className: iconName });
                        } else {
                            iconUI = _react2.default.createElement("img", { style: iconStyleObj, src: iconName });
                        }
                    }

                    nodeUI = _react2.default.createElement(
                        "li",
                        { style: leafStyle, onClick: this.toggle },
                        iconUI,
                        " ",
                        Weave.lang(label),
                        _react2.default.createElement("span", { style: { flex: "1" } }),
                        _react2.default.createElement("i", { className: fileIcon })
                    );
                }
            }

            return nodeUI;
        }
    }]);

    return Node;
}(_AbstractComponent3.default);

_ComponentManager2.default.registerToolImplementation("weavereact.NodeConfig", Node);
exports.default = Node;
//# sourceMappingURL=data:application/json;base64,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Tm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IEFic3RyYWN0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9BYnN0cmFjdENvbXBvbmVudFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuXG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdEFsbCA9IHRoaXMudG9nZ2xlU2VsZWN0QWxsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlID0gdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSAgdGhpcy5wcm9wcy50cmVlQ29uZmlnLnNlbGVjdEFsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlbGVjdEFsbFZhbHVlcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXRhID0gbmV4dFByb3BzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUobmV4dFByb3BzLmRhdGEsbmV4dFByb3BzLmxhYmVsLG5leHRQcm9wcy5ub2RlcyxuZXh0UHJvcHMuaWNvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5vcGVuICE9PSBuZXh0UHJvcHMub3Blbil7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUgPSBuZXh0UHJvcHMub3BlbjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4ucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLnNldENoaWxkcmVuU2Vzc2lvblZhbHVlcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5zZXRDaGlsZHJlblNlbGVjdEFsbFZhbHVlcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cblxuXG5cbiAgICB0b2dnbGUoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gIXRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cblxuXG4gICAgY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShkYXRhLGxhYmVsLG5vZGVzLGljb24pIHtcbiAgICAgICAgdmFyIGxhYmVsID0gbGFiZWw/bGFiZWw6dGhpcy5wcm9wcy5sYWJlbDtcbiAgICAgICAgdmFyIG5vZGVzID0gbm9kZXM/bm9kZXM6dGhpcy5wcm9wcy5ub2RlcztcbiAgICAgICAgdmFyIGljb24gPSBpY29uP2ljb246dGhpcy5wcm9wcy5pY29uO1xuICAgICAgICBpZihkYXRhKXsgLy8gY2FsbGluZyB3aXRoIGRhdGEgYXJndW1lbnRzIGluZGljYXRlcyBkYXRhIGlzIGNoYW5nZWQgc28gd2lwZSB0aGUgc2Vzc2lvbiBzdGF0ZVxuICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmVzZXQoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIC8vdG8tZG8gb25seSByZXF1aXJlZCBmb3Igcm9vdG5vZGVcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGxhYmVsKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGljb24pO1xuXG4gICAgICAgIHZhciB0cmVlTm9kZXMgPSB0aGlzLnNldHRpbmdzLmdldE5vZGVWYWx1ZUZvcihub2Rlcyk7XG4gICAgICAgIGlmKHRyZWVOb2RlcyAmJiB0cmVlTm9kZXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0cmVlTm9kZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHZhciBub2RlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KFwibm9kZVwiICsgaSwgTm9kZUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGxhYmVsLHRyZWVOb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5pY29uTmFtZS5zdGF0ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKGljb24sdHJlZU5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuc2VsZWN0QWxsLnN0YXRlKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5vcGVuLnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5vcGVuLnN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5yZXN1bWVDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRDaGlsZHJlblNlc3Npb25WYWx1ZXMoKXtcbiAgICAgICAgaWYoIXRoaXMuaXNTZXNzaW9uU3RhdGVDcmVhdGVkRm9yVHJlZURhdGEpe1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKClcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMgJiYgdGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLmxlbmd0aD4wICl7XG4gICAgICAgICAgIC8vIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5sZW5ndGg+MCl7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWdzID0gdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgICAgICAgICAgbm9kZUNvbmZpZ3MubWFwKGZ1bmN0aW9uKG5vZGVDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZUxhYmVsID0gbm9kZUNvbmZpZy5sYWJlbC5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLmluZGV4T2Yobm9kZUxhYmVsKSAhPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIC8qZWxzZXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUNvbmZpZ3MgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlncy5tYXAoZnVuY3Rpb24obm9kZUNvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlTGFiZWwgPSBub2RlQ29uZmlnLmxhYmVsLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBub2RlQ29uZmlnLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuZGVmYXVsdFNlbGVjdGVkTm9kZXMucHVzaChub2RlTGFiZWwpO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9Ki9cblxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNldENoaWxkcmVuU2VsZWN0QWxsVmFsdWVzKCl7XG4gICAgXG4gICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICBub2RlQ29uZmlncy5tYXAoZnVuY3Rpb24obm9kZUNvbmZpZyxpbmRleCl7XG5cbiAgICAgICAgICAgIG5vZGVDb25maWcub3Blbi52YWx1ZSA9IHRoaXMuc2VsZWN0QWxsLnN0YXRlO1xuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgIHRvZ2dsZVNlbGVjdEFsbCgpe1xuICAgICAgICAgLy8gdGhpcyB0cmlnZ2VyIGVudGlyZSB0cmVlXG4gICAgICAgICB0aGlzLnNlbGVjdEFsbC5zdGF0ZSA9ICF0aGlzLnNlbGVjdEFsbC5zdGF0ZTtcbiAgICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwidHJlZUNvbmZpZ1wiLHRoaXMucHJvcHMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImxhYmVsXCIsdGhpcy5wcm9wcy5sYWJlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcIm5vZGVzXCIsdGhpcy5wcm9wcy5ub2Rlcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImljb25cIix0aGlzLnByb3BzLmljb24pO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnByb3BzLmFkZENoaWxkUHJvcHMoXCJyZXZlcnNlTGF5b3V0XCIsdGhpcy5zZXR0aW5ncy5yZXZlcnNlTGF5b3V0LnN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wcm9wcy5hZGRDaGlsZFByb3BzKFwiY2xpY2tDYWxsYmFja1wiLHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHJvcHMuYWRkQ2hpbGRQcm9wcyhcImRhdGFcIixudWxsLCBudWxsLHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZVZhbHVlRm9yKHRoaXMucHJvcHMubm9kZXMpICk7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLnJlbmRlckNoaWxkcmVuKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoQ29tcG9uZW50TWFuYWdlci5kZWJ1Zyljb25zb2xlLmxvZyhcIk5vZGUgLSByZW5kZXJcIik7XG4gICAgICAgIHZhciBub2RlVUkgPSA8ZGl2Lz47XG4gICAgICAgIHZhciBkb21EZWZpbmVkU3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdmFyIG5vZGVzVUkgPSBbXTtcbiAgICAgICAgICAgIHZhciBub2RlcyA9IHRoaXMuc2V0dGluZ3MuZ2V0Tm9kZXMoKTtcbiAgICAgICAgICAgIHZhciBpc09wZW4gPSB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG5cbiAgICAgICAgICAgIHZhciBpY29uTmFtZSA9IHRoaXMuc2V0dGluZ3MuaWNvbk5hbWUudmFsdWU7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnNldHRpbmdzLmxhYmVsLnZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgaWNvblVJID0gXCJcIjtcblxuICAgICAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCl7IC8vZm9sZGVyXG4gICAgICAgICAgICAgICAgaWYoaXNPcGVuKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNVSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgYnJhbmNoU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuYnJhbmNoU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYoZG9tRGVmaW5lZFN0eWxlKVN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKG5vZGVTdHlsZSxkb21EZWZpbmVkU3R5bGUsdHJ1ZSk7Ly90aGlzIGhhcHBlbnMgZm9yIHJvb3ROb2RlXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xOYW1lID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEZvbGRlckljb24oaXNPcGVuKTtcbiAgICAgICAgICAgICAgICBpZihpY29uTmFtZSAmJiBpY29uTmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb25TdHlsZU9iaiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlSWNvblN0eWxlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZihpY29uTmFtZS5pbmRleE9mKFwiL1wiKSA9PSAtMSl7IC8vIGZvbnRBd2Vzb21lIEljb24gTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVJID0gPGkgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBjbGFzc05hbWU9e2ljb25OYW1lfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aW1nIHN0eWxlID0ge2ljb25TdHlsZU9ian0gc3JjPXtpY29uTmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdEFsbEljb25VSSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5lbmFibGVTZWxlY3RBbGwpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJlZUljb25TdGF0ZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy50cmVlSWNvblN0YXRlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0QWxsSWNvbiA9ICh0aGlzLnNlbGVjdEFsbC5zdGF0ZSk/IHRyZWVJY29uU3RhdGVbXCJzZWxlY3RBbGxcIl0gOnRyZWVJY29uU3RhdGVbXCJ1blNlbGVjdEFsbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSWNvblVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVTZWxlY3RBbGx9PiZuYnNwOzxpIGNsYXNzTmFtZT17c2VsZWN0QWxsSWNvbn0gID48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBmb2xkZXJVSSA9IDxzcGFuIHN0eWxlPXtub2RlU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb25VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+Jm5ic3A7e1dlYXZlLmxhbmcobGFiZWwpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0QWxsSWNvblVJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjb250cm9sTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcblxuICAgICAgICAgICAgICAgIHZhciBub2RlUGFkZGluZyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy5zdGF0ZTtcbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8c3BhbiBzdHlsZT17YnJhbmNoU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xkZXJVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlOlwibm9uZVwiLHBhZGRpbmdMZWZ0Om5vZGVQYWRkaW5nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgICAgIHZhciBmaWxlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRGaWxlSWNvbih0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIGVpdGhlciBub3JtYWwvQWN0aXZlL1NsZWN0ZWQgU3R5bGUgYmFzZWQgb24gc3RhdGUgb2YgdGhlIGxlYWZcbiAgICAgICAgICAgICAgICB2YXIgbGVhZlN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExlYWZTdHlsZShpc09wZW4sdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWNvblN0eWxlT2JqID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmxlYWZJY29uU3R5bGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGljb25OYW1lLmluZGV4T2YoXCIvXCIpID09IC0xKXsgLy8gZm9udEF3ZXNvbWUgSWNvbiBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVUkgPSA8aSBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VSSA9IDxpbWcgc3R5bGUgPSB7aWNvblN0eWxlT2JqfSBzcmM9e2ljb25OYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBub2RlVUkgPSA8bGkgc3R5bGU9e2xlYWZTdHlsZX0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e1dlYXZlLmxhbmcobGFiZWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpbGVJY29ufT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICByZXR1cm4gKCBub2RlVUkpO1xuICAgIH1cblxufVxuXG5Db21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5Ob2RlQ29uZmlnXCIsTm9kZSk7XG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIl19
