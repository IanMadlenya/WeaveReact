"use strict";

var _NodeConfig = require("./NodeConfig");

var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function TreeConfig() {
        _ComponentManager2.default.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            "treeIconState": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
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
            nodeIconStyle: {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            leafIconStyle: {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            allowMultipleSelection: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });

        this.activeNode = null;
        this.dataTypesMap = null;
        this.getDataType = null;

        this.branchStyle.state = {
            "display": "flex",
            "flexDirection": "column"
        };

        this.nodeStyle.state = {
            "display": "flex",
            "flexDirection": this.reverseLayout.state ? "row-reverse" : "row",
            "alignItems": "center"
        };

        this.treeIconState.state = {
            "nodeDefault": this.reverseLayout.state ? "fa fa-folder fa-flip-horizontal" : "fa fa-folder",
            "nodeOpen": this.reverseLayout.state ? "fa fa-folder-open fa-flip-horizontal" : "fa fa-folder-open",
            "leafDefault": this.reverseLayout.state ? "fa fa-file-text fa-flip-horizontal" : "fa fa-file-text",
            "leafOpen": this.reverseLayout.state ? "fa fa-file-text-o fa-flip-horizontal" : "fa-file-text-o"
        };

        this.nodeIconStyle.state = {
            width: "20px",
            height: "20px",
            paddingRight: "2px"
        };

        this.leafStyle.state = {
            "display": "flex",
            "flexDirection": this.reverseLayout.state ? "row-reverse" : "row",
            "alignItems": "center"
        };

        this.activeLeafStyle.state = {
            "background": "orange"
        };

        this.defaultSelectedNodes = [];

        //todo move this to componentManager defaultCallbacks
        this.reverseLayout.addImmediateCallback(this, this.updateStyle);
    }

    var p = TreeConfig.prototype;

    p.updateStyle = function () {
        var flexDir = this.reverseLayout.state ? "row-reverse" : "row";
        this.nodeStyle.state = { flexDirection: flexDir };
        this.leafStyle.state = { flexDirection: flexDir };
        this.treeIconState.state = {
            "nodeDefault": this.reverseLayout.state ? "fa fa-folder fa-flip-horizontal" : "fa fa-folder",
            "nodeOpen": this.reverseLayout.state ? "fa fa-folder-open fa-flip-horizontal" : "fa fa-folder-open",
            "leafDefault": this.reverseLayout.state ? "fa fa-file-text fa-flip-horizontal" : "fa fa-file-text",
            "leafOpen": this.reverseLayout.state ? "fa fa-file-text-o fa-flip-horizontal" : "fa-file-text-o"
        };
    };

    function mergeInto(into, obj) {
        for (var attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    }

    p.getLeafStyle = function (open, active) {
        var style = this.leafStyle.state;
        if (open) {
            mergeInto(style, this.selectedLeafStyle.state);
            if (active) return mergeInto(style, this.activeLeafStyle.state);
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
                return isOpen ? this.treeIconState.state.leafOpen : this.treeIconState.state.leafDefault;
            }
        } else return "";
    };

    p.getFolderIcon = function (isOpen) {
        return isOpen ? this.treeIconState.state.nodeOpen : this.treeIconState.state.nodeDefault;
    };

    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

    module.exports = TreeConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,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QW1CLEtBQW5CLENBQXlCLFFBQXpCLEdBQW9DLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQUF5QixXQUF6QixDQURuQjtLQUFuQjs7O0FBck1ILFNBMk1mLENBQU0sYUFBTixDQUFvQix1QkFBcEIsRUFBNkMsVUFBN0MsRUEzTWU7O0FBNk1mLFdBQU8sT0FBUCxHQUFpQixVQUFqQixDQTdNZTtDQUFsQixFQStNQyxNQS9NRCxDQUFEIiwiZmlsZSI6IlRyZWVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFRyZWVDb25maWcoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidHJlZUljb25TdGF0ZVwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVEYXRhVHlwZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsZWZ0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibm9kZVBhZGRpbmdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMHB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3ROb2RlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTm9kZUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3RTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9kZVN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkTGVhZlN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyYW5jaFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlSWNvblN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFmSWNvblN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGxvd011bHRpcGxlU2VsZWN0aW9uOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCAgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2V0RGF0YVR5cGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuYnJhbmNoU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wicm93LXJldmVyc2VcIiA6IFwicm93XCIsXG4gICAgICAgICAgICBcImFsaWduSXRlbXNcIjpcImNlbnRlclwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcIm5vZGVEZWZhdWx0XCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1mb2xkZXIgZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1mb2xkZXJcIixcbiAgICAgICAgICAgIFwibm9kZU9wZW5cIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWZvbGRlci1vcGVuIGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtZm9sZGVyLW9wZW5cIixcbiAgICAgICAgICAgIFwibGVhZkRlZmF1bHRcIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWZpbGUtdGV4dCBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhIGZhLWZpbGUtdGV4dFwiLFxuICAgICAgICAgICAgXCJsZWFmT3BlblwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZmlsZS10ZXh0LW8gZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYS1maWxlLXRleHQtb1wiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGVJY29uU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQgOiBcIjIwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDpcIjJweFwiXG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMubGVhZlN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cInJvdy1yZXZlcnNlXCIgOiBcInJvd1wiLFxuICAgICAgICAgICAgXCJhbGlnbkl0ZW1zXCI6XCJjZW50ZXJcIlxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmFjdGl2ZUxlYWZTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZFwiIDogXCJvcmFuZ2VcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0U2VsZWN0ZWROb2RlcyA9IFtdO1xuXG4gICAgICAgIC8vdG9kbyBtb3ZlIHRoaXMgdG8gY29tcG9uZW50TWFuYWdlciBkZWZhdWx0Q2FsbGJhY2tzXG4gICAgICAgIHRoaXMucmV2ZXJzZUxheW91dC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0eWxlKTtcbiAgICB9XG5cblxuICAgIHZhciBwID0gVHJlZUNvbmZpZy5wcm90b3R5cGU7XG5cbiAgICBwLnVwZGF0ZVN0eWxlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGZsZXhEaXIgPSB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJyb3ctcmV2ZXJzZVwiOlwicm93XCI7XG4gICAgICAgIHRoaXMubm9kZVN0eWxlLnN0YXRlID0ge2ZsZXhEaXJlY3Rpb246ZmxleERpcn07XG4gICAgICAgIHRoaXMubGVhZlN0eWxlLnN0YXRlID0ge2ZsZXhEaXJlY3Rpb246ZmxleERpcn07XG4gICAgICAgIHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwibm9kZURlZmF1bHRcIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWZvbGRlciBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhIGZhLWZvbGRlclwiLFxuICAgICAgICAgICAgXCJub2RlT3BlblwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZm9sZGVyLW9wZW4gZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1mb2xkZXItb3BlblwiLFxuICAgICAgICAgICAgXCJsZWFmRGVmYXVsdFwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZmlsZS10ZXh0IGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtZmlsZS10ZXh0XCIsXG4gICAgICAgICAgICBcImxlYWZPcGVuXCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1maWxlLXRleHQtbyBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhLWZpbGUtdGV4dC1vXCJcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gbWVyZ2VJbnRvIChpbnRvLCBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludG87XG4gICAgfVxuXG4gICAgcC5nZXRMZWFmU3R5bGUgPSBmdW5jdGlvbihvcGVuLCBhY3RpdmUpe1xuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLmxlYWZTdHlsZS5zdGF0ZTtcbiAgICAgICAgaWYob3Blbil7XG4gICAgICAgICAgICBtZXJnZUludG8oc3R5bGUsdGhpcy5zZWxlY3RlZExlYWZTdHlsZS5zdGF0ZSlcbiAgICAgICAgICAgIGlmKGFjdGl2ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVyZ2VJbnRvKHN0eWxlLHRoaXMuYWN0aXZlTGVhZlN0eWxlLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDaGlsZHJlblN0YXRlVG9PcGVuKHBhcmVudE5vZGUsb3Blbk5vZGVzKXtcbiAgICAgICAgdmFyIG5vZGVzID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIGlmKG5vZGVzICYmIG5vZGVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgICAgIHZhciBub2RlSW5kZXggPSBvcGVuTm9kZXMuaW5kZXhPZihub2RlLmxhYmVsLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBpZihub2RlSW5kZXggPiAtMSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Ob2Rlcy5zcGxpY2Uobm9kZUluZGV4LDEpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZHJlblN0YXRlVG9PcGVuKG5vZGUsb3Blbk5vZGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy90by1kbyBkbyB0aGlzIGZvciBlbnRpcmUgdHJlZSByYXRoZXIgb25seSBmb3IgdGhlIGZpcnN0IGNoaWxkXG4gICAgcC5zZXREZWZhdWx0Tm9kZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKG5vZGVzTGFiZWwpe1xuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZE5vZGVzID0gbm9kZXNMYWJlbFxuICAgICAgICAvL3NldENoaWxkcmVuU3RhdGVUb09wZW4odGhpcy5yb290Tm9kZSxub2Rlc0xhYmVsKVxuICAgIH1cblxuICAgIC8vdG8tZG8gZG8gdGhpcyBmb3IgZW50aXJlIHRyZWUgcmF0aGVyIG9ubHkgZm9yIHRoZSBmaXJzdCBjaGlsZFxuICAgIHAuc2V0T3Blbk5vZGVzID0gZnVuY3Rpb24obm9kZXNMYWJlbCl7XG4gICAgICAgIHZhciByb290Tm9kZXMgPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgcm9vdE5vZGVzLm1hcChmdW5jdGlvbihub2RlKXtcbiAgICAgICAgICAgIGlmKG5vZGVzTGFiZWwuaW5kZXhPZihub2RlLmxhYmVsLnN0YXRlKSA+IC0xKXtcbiAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICB9XG5cbiAgICBwLmNoYW5nZUFjdGl2ZU5vZGUgPSBmdW5jdGlvbiAobm9kZUNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICBpZighdGhpcy5hbGxvd011bHRpcGxlU2VsZWN0aW9uLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2ZU5vZGUgIT09IG5vZGVDb25maWcpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlTm9kZUNoaWxkID0gdGhpcy5hY3RpdmVOb2RlLmNoaWxkcmVuLmdldE5hbWUobm9kZUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFhY3RpdmVOb2RlQ2hpbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBub2RlQ29uZmlnO1xuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwLmdldEZpbGVJY29uID0gZnVuY3Rpb24gKGRhdGEsaXNPcGVuKSB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYodGhpcy5lbmFibGVEYXRhVHlwZUljb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVR5cGVzTWFwICYmIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLmxlYWZPcGVuICA6IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZS5sZWFmRGVmYXVsdCA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBwLmdldEZvbGRlckljb24gPSBmdW5jdGlvbiAoIGlzT3Blbikge1xuICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLm5vZGVPcGVuIDogdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLm5vZGVEZWZhdWx0O1xuICAgIH1cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5UcmVlQ29uZmlnJywgVHJlZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFRyZWVDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
