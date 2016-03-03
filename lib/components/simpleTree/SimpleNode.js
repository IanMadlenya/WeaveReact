"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleNode = function (_React$Component) {
    _inherits(SimpleNode, _React$Component);

    function SimpleNode(props) {
        _classCallCheck(this, SimpleNode);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleNode).call(this, props));

        Object.defineProperties(_this, {
            "open": {
                value: new weavejs.core.LinkableBoolean()
            },
            "active": {
                value: new weavejs.core.LinkableBoolean()
            }
        });

        _this.toggle = _this.toggle.bind(_this);
        _this.renderChildren = _this.renderChildren.bind(_this);
        _this.addCallbacks();
        return _this;
    }

    _createClass(SimpleNode, [{
        key: "addCallbacks",
        value: function addCallbacks() {
            this.open.addImmediateCallback(this, this.forceUpdate);
            this.active.addImmediateCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.open.removeCallback(this, this.forceUpdate);
            this.active.removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "toggle",
        value: function toggle() {
            this.open.value = !this.open.value;
            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.open, this.active);
            this.props.treeConfig.changeActiveNode(this);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.data !== nextProps.data) {
                //makes sure change in child node won't render this node
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "isNode",
        value: function isNode() {
            var nodes = this.props.treeConfig.getTreeNodes(this.props.data);
            if (nodes && nodes.length > 0) return true; // node
            else return false; // leaf
        }
    }, {
        key: "renderChildren",
        value: function renderChildren() {
            var nodes = this.props.treeConfig.getTreeNodes(this.props.data);
            var nodesUI = nodes.map(function (nodeData, index) {
                return _react2.default.createElement(SimpleNode, { key: index,
                    data: nodeData,
                    treeConfig: this.props.treeConfig,
                    clickCallback: this.props.clickCallback });
            }.bind(this));

            return nodesUI;
        }
    }, {
        key: "render",
        value: function render() {
            var branchUI = _react2.default.createElement("div", null);

            if (this.props.data) {
                var nodesUI = [];
                if (this.open.state) {
                    var nodesUI = this.renderChildren();
                }

                var label = this.props.treeConfig.getTreeLabel(this.props.data);
                if (this.isNode()) {
                    //Node

                    var fontAwesomeNodeIcon = this.props.treeConfig.getIcon("node", this.open.state);
                    var folderUI = _react2.default.createElement(
                        "span",
                        { onClick: this.toggle },
                        _react2.default.createElement("i", { className: fontAwesomeNodeIcon }),
                        " ",
                        label
                    );

                    var nodePadding = this.props.treeConfig.nodePadding.state;
                    branchUI = _react2.default.createElement(
                        "span",
                        null,
                        folderUI,
                        _react2.default.createElement(
                            "ul",
                            { style: { listStyleType: "none", paddingLeft: nodePadding } },
                            nodesUI
                        )
                    );
                } else {
                    //leaf
                    var fontAwesomeLeafIcon = this.props.treeConfig.getIcon("leaf", this.open.value);
                    // this will return either normal/Active/Slected Style based on state of the leaf
                    var leafStyle = this.props.treeConfig.getLeafStyle(this.open.value, this.active.value);
                    branchUI = _react2.default.createElement(
                        "li",
                        { style: leafStyle, onClick: this.toggle },
                        _react2.default.createElement("i", { className: fontAwesomeLeafIcon }),
                        " ",
                        label
                    );
                }
            }

            return branchUI;
        }
    }]);

    return SimpleNode;
}(_react2.default.Component);

exports.default = SimpleNode;
//# sourceMappingURL=data:application/json;base64,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OztXQXBFUDtFQUFtQixnQkFBTSxTQUFOOztrQkE4R1YiLCJmaWxlIjoiU2ltcGxlTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNpbXBsZU5vZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLmFjdGl2ZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHRvZ2dsZSgpe1xuICAgICAgICB0aGlzLm9wZW4udmFsdWUgPSAhdGhpcy5vcGVuLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLm9wZW4sdGhpcy5hY3RpdmUpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzKTtcbiAgICB9XG5cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhKXsgLy9tYWtlcyBzdXJlIGNoYW5nZSBpbiBjaGlsZCBub2RlIHdvbid0IHJlbmRlciB0aGlzIG5vZGVcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaXNOb2RlKCl7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRUcmVlTm9kZXModGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgICAgaWYobm9kZXMgJiYgbm9kZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBub2RlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbGVhZlxuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRUcmVlTm9kZXModGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgICAgdmFyIG5vZGVzVUkgPSBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZURhdGEsaW5kZXgpe1xuICAgICAgICAgICAgcmV0dXJuIDxTaW1wbGVOb2RlIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtub2RlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVDb25maWc9e3RoaXMucHJvcHMudHJlZUNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30vPjtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gbm9kZXNVSTtcbiAgICB9XG5cbiAgICBcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGJyYW5jaFVJID0gPGRpdi8+O1xuXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB2YXIgbm9kZXNVSSA9IFtdO1xuICAgICAgICAgICAgaWYodGhpcy5vcGVuLnN0YXRlKXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXNVSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldFRyZWVMYWJlbCh0aGlzLnByb3BzLmRhdGEpO1xuICAgICAgICAgICAgaWYodGhpcy5pc05vZGUoKSl7IC8vTm9kZVxuXG4gICAgICAgICAgICAgICAgdmFyIGZvbnRBd2Vzb21lTm9kZUljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0SWNvbihcIm5vZGVcIix0aGlzLm9wZW4uc3RhdGUpO1xuICAgICAgICAgICAgICAgIHZhciBmb2xkZXJVSSA9IDxzcGFuIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Zm9udEF3ZXNvbWVOb2RlSWNvbn0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3tsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcblxuICAgICAgICAgICAgICAgIHZhciBub2RlUGFkZGluZyA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy5zdGF0ZTtcbiAgICAgICAgICAgICAgICBicmFuY2hVSSA9IDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9sZGVyVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGU6XCJub25lXCIscGFkZGluZ0xlZnQ6bm9kZVBhZGRpbmd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2Rlc1VJfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNleyAvL2xlYWZcbiAgICAgICAgICAgICAgICB2YXIgZm9udEF3ZXNvbWVMZWFmSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRJY29uKFwibGVhZlwiLHRoaXMub3Blbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJldHVybiBlaXRoZXIgbm9ybWFsL0FjdGl2ZS9TbGVjdGVkIFN0eWxlIGJhc2VkIG9uIHN0YXRlIG9mIHRoZSBsZWFmXG4gICAgICAgICAgICAgICAgdmFyIGxlYWZTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRMZWFmU3R5bGUodGhpcy5vcGVuLnZhbHVlLHRoaXMuYWN0aXZlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmFuY2hVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmb250QXdlc29tZUxlYWZJY29ufSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3tsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChicmFuY2hVSSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZU5vZGU7XG4iXX0=
