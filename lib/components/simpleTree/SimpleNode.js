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
        key: "isNode",
        value: function isNode() {
            var nodes = this.props.treeConfig.getTreeNodes(this.props.data);
            if (nodes && nodes.length > 0) return true; // node
            else return false; // leaf
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
//# sourceMappingURL=data:application/json;base64,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OztXQWpFUDtFQUFtQixnQkFBTSxTQUFOOztrQkEyR1YiLCJmaWxlIjoiU2ltcGxlTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNpbXBsZU5vZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5hY3RpdmUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLm9wZW4ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuYWN0aXZlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpe1xuICAgICAgICB0aGlzLm9wZW4udmFsdWUgPSAhdGhpcy5vcGVuLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2suY2FsbCh0aGlzLHRoaXMucHJvcHMuZGF0YSx0aGlzLm9wZW4sdGhpcy5hY3RpdmUpO1xuICAgICAgICB0aGlzLnByb3BzLnRyZWVDb25maWcuY2hhbmdlQWN0aXZlTm9kZSh0aGlzKTtcbiAgICB9XG5cbiAgICBcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7IC8vbWFrZXMgc3VyZSBjaGFuZ2UgaW4gY2hpbGQgbm9kZSB3b24ndCByZW5kZXIgdGhpcyBub2RlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldFRyZWVOb2Rlcyh0aGlzLnByb3BzLmRhdGEpO1xuICAgICAgICB2YXIgbm9kZXNVSSA9IG5vZGVzLm1hcChmdW5jdGlvbihub2RlRGF0YSxpbmRleCl7XG4gICAgICAgICAgICByZXR1cm4gPFNpbXBsZU5vZGUga2V5PXtpbmRleH0gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e25vZGVEYXRhfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVDb25maWc9e3RoaXMucHJvcHMudHJlZUNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30vPjtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTsgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5vZGVzVUk7XG4gICAgfVxuICAgIFxuICAgIGlzTm9kZSgpe1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0VHJlZU5vZGVzKHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICAgIGlmKG5vZGVzICYmIG5vZGVzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gbm9kZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGxlYWZcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBicmFuY2hVSSA9IDxkaXYvPjtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7IFxuICAgICAgICAgICAgdmFyIG5vZGVzVUkgPSBbXTtcbiAgICAgICAgICAgIGlmKHRoaXMub3Blbi5zdGF0ZSl7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRUcmVlTGFiZWwodGhpcy5wcm9wcy5kYXRhKTtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNOb2RlKCkpeyAvL05vZGVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgZm9udEF3ZXNvbWVOb2RlSWNvbiA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRJY29uKFwibm9kZVwiLHRoaXMub3Blbi5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGZvbGRlclVJID0gPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtmb250QXdlc29tZU5vZGVJY29ufSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+O1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVQYWRkaW5nID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLm5vZGVQYWRkaW5nLnN0YXRlO1xuICAgICAgICAgICAgICAgIGJyYW5jaFVJID0gPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb2xkZXJVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTpcIm5vbmVcIixwYWRkaW5nTGVmdDpub2RlUGFkZGluZ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGVzVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7IC8vbGVhZlxuICAgICAgICAgICAgICAgIHZhciBmb250QXdlc29tZUxlYWZJY29uID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldEljb24oXCJsZWFmXCIsdGhpcy5vcGVuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIGVpdGhlciBub3JtYWwvQWN0aXZlL1NsZWN0ZWQgU3R5bGUgYmFzZWQgb24gc3RhdGUgb2YgdGhlIGxlYWZcbiAgICAgICAgICAgICAgICB2YXIgbGVhZlN0eWxlID0gdGhpcy5wcm9wcy50cmVlQ29uZmlnLmdldExlYWZTdHlsZSh0aGlzLm9wZW4udmFsdWUsdGhpcy5hY3RpdmUudmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyYW5jaFVJID0gPGxpIHN0eWxlPXtsZWFmU3R5bGV9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZvbnRBd2Vzb21lTGVhZkljb259ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKGJyYW5jaFVJKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlTm9kZTtcbiJdfQ==
