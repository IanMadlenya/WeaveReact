"use strict";

var _NodeConfig = require("./NodeConfig");

var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function TreeConfig() {

        Object.defineProperties(this, {
            "nodeIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder"))
            },
            "nodeOpenIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder-open"))
            },
            "leafIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text"))
            },
            "leafOpenIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text-o"))
            },
            "enableDataTypeIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "align": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
            },
            "nodePadding": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20px"))
            },
            rootNode: {
                value: Weave.linkableChild(this, new _NodeConfig2.default())
            },
            rootStyle: {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            nodeStyle: {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            leafStyle: {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            selectedLeafStyle: {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            activeLeafStyle: {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            branchStyle: {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            allowMultipleSelection: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });

        this.activeNode = null;
        this.dataTypesMap = null;
        this.getDataType = null;

        this.nodeStyle.display.state = "flex";
        this.nodeStyle.other.state = {
            "flexDirection": "row"
        };

        this.leafStyle.display.state = "flex";
        this.leafStyle.other.state = {
            "flexDirection": "row"
        };

        this.selectedLeafStyle.other.state = {
            "background": "green"
        };

        this.activeLeafStyle.other.state = {
            "background": "orange"
        };

        this.defaultSelectedNodes = [];
    }

    var p = TreeConfig.prototype;

    function mergeInto(into, obj) {
        for (var attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    }

    p.getLeafStyle = function (open, active) {
        var style = this.leafStyle.getStyleFor();
        if (open) {
            mergeInto(style, this.selectedLeafStyle.getStyleFor());
            if (active) return mergeInto(style, this.activeLeafStyle.getStyleFor());
        }
        return style;
    };

    function setChildrenStateToOpen(parentNode, openNodes) {
        var nodes = parentNode.children.getObjects();
        if (nodes && nodes.length > 0) {
            nodes.map(function (node) {
                var nodeIndex = openNodes.indexOf(node.label.state);
                if (nodeIndex > -1) {
                    node.open.value = true;
                    openNodes.splice(nodeIndex, 1);
                    setChildrenStateToOpen(node, openNodes);
                } else {
                    node.open.value = false;
                    node.active.value = false;
                }
            }.bind(this));
        }
    }

    //to-do do this for entire tree rather only for the first child
    p.setDefaultNodeSelection = function (nodesLabel) {
        this.defaultSelectedNodes = nodesLabel;
        //setChildrenStateToOpen(this.rootNode,nodesLabel)
    };

    //to-do do this for entire tree rather only for the first child
    p.setOpenNodes = function (nodesLabel) {
        var rootNodes = this.rootNode.children.getObjects();
        rootNodes.map(function (node) {
            if (nodesLabel.indexOf(node.label.state) > -1) {
                node.open.value = true;
            } else {
                node.open.value = false;
                node.active.value = false;
            }
        }.bind(this));
    };

    p.changeActiveNode = function (nodeConfig) {
        if (this.activeNode) {
            this.activeNode.active.value = false;
            if (!this.allowMultipleSelection.value) {
                if (this.activeNode !== nodeConfig) {
                    var activeNodeChild = this.activeNode.children.getName(nodeConfig);
                    if (!activeNodeChild) this.activeNode.open.value = false;
                }
            }
        }
        this.activeNode = nodeConfig;
        this.activeNode.active.value = true;
    };

    p.getFileIcon = function (data, isOpen) {
        if (data) {
            if (this.enableDataTypeIcon.value) {
                var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
                if (this.dataTypesMap && this.dataTypesMap[datType]) return this.dataTypesMap[datType];
            } else {
                return isOpen ? this.leafOpenIcon.value : this.leafIcon.value;
            }
        } else return "";
    };

    p.getFolderIcon = function (isOpen) {
        return isOpen ? this.nodeOpenIcon.value : this.nodeIcon.value;
    };

    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

    module.exports = TreeConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,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cUtmLE1BQUUsYUFBRixHQUFrQixVQUFXLE1BQVgsRUFBbUI7QUFDakMsZUFBTyxTQUFTLEtBQUssWUFBTCxDQUFrQixLQUFsQixHQUEwQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBRFQ7S0FBbkI7OztBQXJLSCxTQTJLZixDQUFNLGFBQU4sQ0FBb0IsdUJBQXBCLEVBQTZDLFVBQTdDLEVBM0tlOztBQTZLZixXQUFPLE9BQVAsR0FBaUIsVUFBakIsQ0E3S2U7Q0FBbEIsRUErS0MsTUEvS0QsQ0FBRCIsImZpbGUiOiJUcmVlQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5pbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFRyZWVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJub2RlSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWZvbGRlclwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm5vZGVPcGVuSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWZvbGRlci1vcGVuXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1maWxlLXRleHRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsZWFmT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1maWxlLXRleHQtb1wiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZURhdGFUeXBlSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImxlZnRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlUGFkZGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjIwcHhcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdE5vZGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBOb2RlQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2ZUxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmNoU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsbG93TXVsdGlwbGVTZWxlY3Rpb246e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsICBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YVR5cGVzTWFwID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZXREYXRhVHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5ub2RlU3R5bGUuZGlzcGxheS5zdGF0ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLm5vZGVTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxlYWZTdHlsZS5kaXNwbGF5LnN0YXRlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMubGVhZlN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMZWFmU3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImJhY2tncm91bmRcIiA6IFwiZ3JlZW5cIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVMZWFmU3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImJhY2tncm91bmRcIiA6IFwib3JhbmdlXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVmYXVsdFNlbGVjdGVkTm9kZXMgPSBbXTtcbiAgICB9XG5cblxuICAgIHZhciBwID0gVHJlZUNvbmZpZy5wcm90b3R5cGU7XG5cbiAgICBmdW5jdGlvbiBtZXJnZUludG8gKGludG8sIG9iaikge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG5cbiAgICBwLmdldExlYWZTdHlsZSA9IGZ1bmN0aW9uKG9wZW4sIGFjdGl2ZSl7XG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMubGVhZlN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgIGlmKG9wZW4pe1xuICAgICAgICAgICAgbWVyZ2VJbnRvKHN0eWxlLHRoaXMuc2VsZWN0ZWRMZWFmU3R5bGUuZ2V0U3R5bGVGb3IoKSlcbiAgICAgICAgICAgIGlmKGFjdGl2ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVyZ2VJbnRvKHN0eWxlLHRoaXMuYWN0aXZlTGVhZlN0eWxlLmdldFN0eWxlRm9yKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENoaWxkcmVuU3RhdGVUb09wZW4ocGFyZW50Tm9kZSxvcGVuTm9kZXMpe1xuICAgICAgICB2YXIgbm9kZXMgPSBwYXJlbnROb2RlLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgaWYobm9kZXMgJiYgbm9kZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVJbmRleCA9IG9wZW5Ob2Rlcy5pbmRleE9mKG5vZGUubGFiZWwuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGlmKG5vZGVJbmRleCA+IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgb3Blbk5vZGVzLnNwbGljZShub2RlSW5kZXgsMSk7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkcmVuU3RhdGVUb09wZW4obm9kZSxvcGVuTm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3RvLWRvIGRvIHRoaXMgZm9yIGVudGlyZSB0cmVlIHJhdGhlciBvbmx5IGZvciB0aGUgZmlyc3QgY2hpbGRcbiAgICBwLnNldERlZmF1bHROb2RlU2VsZWN0aW9uID0gZnVuY3Rpb24obm9kZXNMYWJlbCl7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNlbGVjdGVkTm9kZXMgPSBub2Rlc0xhYmVsXG4gICAgICAgIC8vc2V0Q2hpbGRyZW5TdGF0ZVRvT3Blbih0aGlzLnJvb3ROb2RlLG5vZGVzTGFiZWwpXG4gICAgfVxuXG4gICAgLy90by1kbyBkbyB0aGlzIGZvciBlbnRpcmUgdHJlZSByYXRoZXIgb25seSBmb3IgdGhlIGZpcnN0IGNoaWxkXG4gICAgcC5zZXRPcGVuTm9kZXMgPSBmdW5jdGlvbihub2Rlc0xhYmVsKXtcbiAgICAgICAgdmFyIHJvb3ROb2RlcyA9IHRoaXMucm9vdE5vZGUuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICByb290Tm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgaWYobm9kZXNMYWJlbC5pbmRleE9mKG5vZGUubGFiZWwuc3RhdGUpID4gLTEpe1xuICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgIH1cblxuICAgIHAuY2hhbmdlQWN0aXZlTm9kZSA9IGZ1bmN0aW9uIChub2RlQ29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZU5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTm9kZS5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKCF0aGlzLmFsbG93TXVsdGlwbGVTZWxlY3Rpb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlTm9kZSAhPT0gbm9kZUNvbmZpZyl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVOb2RlQ2hpbGQgPSB0aGlzLmFjdGl2ZU5vZGUuY2hpbGRyZW4uZ2V0TmFtZShub2RlQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWFjdGl2ZU5vZGVDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTm9kZS5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG5vZGVDb25maWc7XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZS5hY3RpdmUudmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIHAuZ2V0RmlsZUljb24gPSBmdW5jdGlvbiAoZGF0YSxpc09wZW4pIHtcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZih0aGlzLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgdmFyIGRhdFR5cGUgPSB0aGlzLmdldERhdGFUeXBlID8gdGhpcy5nZXREYXRhVHlwZShkYXRhKSA6IGRhdGEuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhVHlwZXNNYXAgJiYgdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBpc09wZW4gPyB0aGlzLmxlYWZPcGVuSWNvbi52YWx1ZSA6IHRoaXMubGVhZkljb24udmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBwLmdldEZvbGRlckljb24gPSBmdW5jdGlvbiAoIGlzT3Blbikge1xuICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy5ub2RlT3Blbkljb24udmFsdWUgOiB0aGlzLm5vZGVJY29uLnZhbHVlO1xuICAgIH1cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5UcmVlQ29uZmlnJywgVHJlZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFRyZWVDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
