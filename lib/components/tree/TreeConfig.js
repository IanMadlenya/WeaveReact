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
            },
            selectAll: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            enableSelectAll: {
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

        //todo - add getter setter to facilitate settings only one state
        // or create like InlineStyle
        this.treeIconState.state = {
            "nodeDefault": this.reverseLayout.state ? "fa fa-folder fa-flip-horizontal" : "fa fa-folder",
            "nodeOpen": this.reverseLayout.state ? "fa fa-folder-open fa-flip-horizontal" : "fa fa-folder-open",
            "leafDefault": this.reverseLayout.state ? "fa fa-file-text fa-flip-horizontal" : "fa fa-file-text",
            "leafOpen": this.reverseLayout.state ? "fa fa-file-text-o fa-flip-horizontal" : "fa-file-text-o",
            "selectAll": this.reverseLayout.state ? "fa fa-check-square-o fa-flip-horizontal" : "fa fa-check-square-o",
            "unSelectAll": this.reverseLayout.state ? "fa fa-square-o fa-flip-horizontal" : "fa fa-square-o"
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
        _ComponentManager2.default.flipIcons(this, ["treeIconState"]);
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

    //to-do do this for entire tree rather only for the first child
    p.setDefaultNodeSelection = function (nodesLabel) {
        this.defaultSelectedNodes = nodesLabel;
    };

    //to-do do this for entire tree rather only for the first child
    /*p.setOpenNodes = function(nodesLabel){
        var rootNodes = this.rootNode.children.getObjects();
        rootNodes.map(function(node){
            if(nodesLabel.indexOf(node.label.state) > -1){
                node.open.value = true;
            }
            else{
                node.open.value = false;
                node.active.value = false;
            }
        }.bind(this))
     }*/

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
//# sourceMappingURL=data:application/json;base64,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QUFGLEdBQWtCLFVBQVcsTUFBWCxFQUFtQjtBQUNqQyxlQUFPLFNBQVMsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLFFBQXpCLEdBQW9DLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQUF5QixXQUF6QixDQURuQjtLQUFuQjs7O0FBMUxILFNBZ01mLENBQU0sYUFBTixDQUFvQix1QkFBcEIsRUFBNkMsVUFBN0MsRUFoTWU7O0FBa01mLFdBQU8sT0FBUCxHQUFpQixVQUFqQixDQWxNZTtDQUFsQixFQW9NQyxNQXBNRCxDQUFEIiwiZmlsZSI6IlRyZWVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFRyZWVDb25maWcoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidHJlZUljb25TdGF0ZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZURhdGFUeXBlSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImxlZnRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlUGFkZGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjIwcHhcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdE5vZGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBOb2RlQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2ZUxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmNoU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vZGVJY29uU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYWZJY29uU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsbG93TXVsdGlwbGVTZWxlY3Rpb246e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsICBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0QWxsOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCAgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuYWJsZVNlbGVjdEFsbDp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhVHlwZXNNYXAgPSBudWxsO1xuICAgICAgICB0aGlzLmdldERhdGFUeXBlID0gbnVsbDtcblxuICAgICAgICB0aGlzLmJyYW5jaFN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZVN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cInJvdy1yZXZlcnNlXCIgOiBcInJvd1wiLFxuICAgICAgICAgICAgXCJhbGlnbkl0ZW1zXCI6XCJjZW50ZXJcIlxuICAgICAgICB9XG5cbiAgICAgICAgLy90b2RvIC0gYWRkIGdldHRlciBzZXR0ZXIgdG8gZmFjaWxpdGF0ZSBzZXR0aW5ncyBvbmx5IG9uZSBzdGF0ZVxuICAgICAgICAvLyBvciBjcmVhdGUgbGlrZSBJbmxpbmVTdHlsZVxuICAgICAgICB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcIm5vZGVEZWZhdWx0XCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1mb2xkZXIgZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1mb2xkZXJcIixcbiAgICAgICAgICAgIFwibm9kZU9wZW5cIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWZvbGRlci1vcGVuIGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtZm9sZGVyLW9wZW5cIixcbiAgICAgICAgICAgIFwibGVhZkRlZmF1bHRcIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWZpbGUtdGV4dCBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhIGZhLWZpbGUtdGV4dFwiLFxuICAgICAgICAgICAgXCJsZWFmT3BlblwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZmlsZS10ZXh0LW8gZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYS1maWxlLXRleHQtb1wiLFxuICAgICAgICAgICAgXCJzZWxlY3RBbGxcIjp0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1jaGVjay1zcXVhcmUtbyBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhIGZhLWNoZWNrLXNxdWFyZS1vXCIsXG4gICAgICAgICAgICBcInVuU2VsZWN0QWxsXCI6dGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtc3F1YXJlLW8gZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1zcXVhcmUtb1wiLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlSWNvblN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgaGVpZ2h0IDogXCIyMHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6XCIycHhcIlxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmxlYWZTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJyb3ctcmV2ZXJzZVwiIDogXCJyb3dcIixcbiAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOlwiY2VudGVyXCJcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5hY3RpdmVMZWFmU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImJhY2tncm91bmRcIiA6IFwib3JhbmdlXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVmYXVsdFNlbGVjdGVkTm9kZXMgPSBbXTtcblxuICAgICAgICAvL3RvZG8gbW92ZSB0aGlzIHRvIGNvbXBvbmVudE1hbmFnZXIgZGVmYXVsdENhbGxiYWNrc1xuICAgICAgICB0aGlzLnJldmVyc2VMYXlvdXQuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy51cGRhdGVTdHlsZSk7XG4gICAgfVxuXG5cbiAgICB2YXIgcCA9IFRyZWVDb25maWcucHJvdG90eXBlO1xuXG4gICAgcC51cGRhdGVTdHlsZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBmbGV4RGlyID0gdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wicm93LXJldmVyc2VcIjpcInJvd1wiO1xuICAgICAgICB0aGlzLm5vZGVTdHlsZS5zdGF0ZSA9IHtmbGV4RGlyZWN0aW9uOmZsZXhEaXJ9O1xuICAgICAgICB0aGlzLmxlYWZTdHlsZS5zdGF0ZSA9IHtmbGV4RGlyZWN0aW9uOmZsZXhEaXJ9O1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmZsaXBJY29ucyh0aGlzLFtcInRyZWVJY29uU3RhdGVcIl0pO1xuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBtZXJnZUludG8gKGludG8sIG9iaikge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG5cbiAgICBwLmdldExlYWZTdHlsZSA9IGZ1bmN0aW9uKG9wZW4sIGFjdGl2ZSl7XG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMubGVhZlN0eWxlLnN0YXRlO1xuICAgICAgICBpZihvcGVuKXtcbiAgICAgICAgICAgIG1lcmdlSW50byhzdHlsZSx0aGlzLnNlbGVjdGVkTGVhZlN0eWxlLnN0YXRlKVxuICAgICAgICAgICAgaWYoYWN0aXZlKVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXJnZUludG8oc3R5bGUsdGhpcy5hY3RpdmVMZWFmU3R5bGUuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcblxuICAgIH1cblxuXG5cbiAgICAvL3RvLWRvIGRvIHRoaXMgZm9yIGVudGlyZSB0cmVlIHJhdGhlciBvbmx5IGZvciB0aGUgZmlyc3QgY2hpbGRcbiAgICBwLnNldERlZmF1bHROb2RlU2VsZWN0aW9uID0gZnVuY3Rpb24obm9kZXNMYWJlbCl7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNlbGVjdGVkTm9kZXMgPSBub2Rlc0xhYmVsXG4gICAgfVxuXG4gICAgLy90by1kbyBkbyB0aGlzIGZvciBlbnRpcmUgdHJlZSByYXRoZXIgb25seSBmb3IgdGhlIGZpcnN0IGNoaWxkXG4gICAgLypwLnNldE9wZW5Ob2RlcyA9IGZ1bmN0aW9uKG5vZGVzTGFiZWwpe1xuICAgICAgICB2YXIgcm9vdE5vZGVzID0gdGhpcy5yb290Tm9kZS5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIHJvb3ROb2Rlcy5tYXAoZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgICBpZihub2Rlc0xhYmVsLmluZGV4T2Yobm9kZS5sYWJlbC5zdGF0ZSkgPiAtMSl7XG4gICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgfSovXG5cbiAgICBwLmNoYW5nZUFjdGl2ZU5vZGUgPSBmdW5jdGlvbiAobm9kZUNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICBpZighdGhpcy5hbGxvd011bHRpcGxlU2VsZWN0aW9uLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2ZU5vZGUgIT09IG5vZGVDb25maWcpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlTm9kZUNoaWxkID0gdGhpcy5hY3RpdmVOb2RlLmNoaWxkcmVuLmdldE5hbWUobm9kZUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFhY3RpdmVOb2RlQ2hpbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBub2RlQ29uZmlnO1xuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwLmdldEZpbGVJY29uID0gZnVuY3Rpb24gKGRhdGEsaXNPcGVuKSB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYodGhpcy5lbmFibGVEYXRhVHlwZUljb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVR5cGVzTWFwICYmIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLmxlYWZPcGVuICA6IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZS5sZWFmRGVmYXVsdCA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBwLmdldEZvbGRlckljb24gPSBmdW5jdGlvbiAoIGlzT3Blbikge1xuICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLm5vZGVPcGVuIDogdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLm5vZGVEZWZhdWx0O1xuICAgIH1cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5UcmVlQ29uZmlnJywgVHJlZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFRyZWVDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
