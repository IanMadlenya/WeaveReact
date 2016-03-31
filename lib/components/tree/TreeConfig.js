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
//# sourceMappingURL=data:application/json;base64,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QUFGLEdBQWtCLFVBQVcsTUFBWCxFQUFtQjtBQUNqQyxlQUFPLFNBQVMsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLFFBQXpCLEdBQW9DLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQUF5QixXQUF6QixDQURuQjtLQUFuQjs7O0FBMUxILFNBZ01mLENBQU0sYUFBTixDQUFvQix1QkFBcEIsRUFBNkMsVUFBN0MsRUFoTWU7O0FBa01mLFdBQU8sT0FBUCxHQUFpQixVQUFqQixDQWxNZTtDQUFsQixFQW9NQyxNQXBNRCxDQUFEIiwiZmlsZSI6IlRyZWVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFRyZWVDb25maWcoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidHJlZUljb25TdGF0ZVwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVEYXRhVHlwZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsZWZ0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibm9kZVBhZGRpbmdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMHB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3ROb2RlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTm9kZUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3RTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9kZVN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkTGVhZlN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyYW5jaFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlSWNvblN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFmSWNvblN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGxvd011bHRpcGxlU2VsZWN0aW9uOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCAgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdEFsbDp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmFibGVTZWxlY3RBbGw6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsICBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YVR5cGVzTWFwID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZXREYXRhVHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5icmFuY2hTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGVTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJyb3ctcmV2ZXJzZVwiIDogXCJyb3dcIixcbiAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOlwiY2VudGVyXCJcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdG9kbyAtIGFkZCBnZXR0ZXIgc2V0dGVyIHRvIGZhY2lsaXRhdGUgc2V0dGluZ3Mgb25seSBvbmUgc3RhdGVcbiAgICAgICAgLy8gb3IgY3JlYXRlIGxpa2UgSW5saW5lU3R5bGVcbiAgICAgICAgdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJub2RlRGVmYXVsdFwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZm9sZGVyIGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtZm9sZGVyXCIsXG4gICAgICAgICAgICBcIm5vZGVPcGVuXCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1mb2xkZXItb3BlbiBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhIGZhLWZvbGRlci1vcGVuXCIsXG4gICAgICAgICAgICBcImxlYWZEZWZhdWx0XCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1maWxlLXRleHQgZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1maWxlLXRleHRcIixcbiAgICAgICAgICAgIFwibGVhZk9wZW5cIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWZpbGUtdGV4dC1vIGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEtZmlsZS10ZXh0LW9cIixcbiAgICAgICAgICAgIFwic2VsZWN0QWxsXCI6dGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtY2hlY2stc3F1YXJlLW8gZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1jaGVjay1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgXCJ1blNlbGVjdEFsbFwiOnRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLXNxdWFyZS1vIGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtc3F1YXJlLW9cIixcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZUljb25TdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgICAgIGhlaWdodCA6IFwiMjBweFwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OlwiMnB4XCJcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5sZWFmU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wicm93LXJldmVyc2VcIiA6IFwicm93XCIsXG4gICAgICAgICAgICBcImFsaWduSXRlbXNcIjpcImNlbnRlclwiXG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuYWN0aXZlTGVhZlN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBcIm9yYW5nZVwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZE5vZGVzID0gW107XG5cbiAgICAgICAgLy90b2RvIG1vdmUgdGhpcyB0byBjb21wb25lbnRNYW5hZ2VyIGRlZmF1bHRDYWxsYmFja3NcbiAgICAgICAgdGhpcy5yZXZlcnNlTGF5b3V0LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMudXBkYXRlU3R5bGUpO1xuICAgIH1cblxuXG4gICAgdmFyIHAgPSBUcmVlQ29uZmlnLnByb3RvdHlwZTtcblxuICAgIHAudXBkYXRlU3R5bGUgPSBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgZmxleERpciA9IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cInJvdy1yZXZlcnNlXCI6XCJyb3dcIjtcbiAgICAgICAgdGhpcy5ub2RlU3R5bGUuc3RhdGUgPSB7ZmxleERpcmVjdGlvbjpmbGV4RGlyfTtcbiAgICAgICAgdGhpcy5sZWFmU3R5bGUuc3RhdGUgPSB7ZmxleERpcmVjdGlvbjpmbGV4RGlyfTtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5mbGlwSWNvbnModGhpcyxbXCJ0cmVlSWNvblN0YXRlXCJdKTtcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gbWVyZ2VJbnRvIChpbnRvLCBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludG87XG4gICAgfVxuXG4gICAgcC5nZXRMZWFmU3R5bGUgPSBmdW5jdGlvbihvcGVuLCBhY3RpdmUpe1xuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLmxlYWZTdHlsZS5zdGF0ZTtcbiAgICAgICAgaWYob3Blbil7XG4gICAgICAgICAgICBtZXJnZUludG8oc3R5bGUsdGhpcy5zZWxlY3RlZExlYWZTdHlsZS5zdGF0ZSlcbiAgICAgICAgICAgIGlmKGFjdGl2ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVyZ2VJbnRvKHN0eWxlLHRoaXMuYWN0aXZlTGVhZlN0eWxlLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG5cbiAgICB9XG5cbiAgIFxuXG4gICAgLy90by1kbyBkbyB0aGlzIGZvciBlbnRpcmUgdHJlZSByYXRoZXIgb25seSBmb3IgdGhlIGZpcnN0IGNoaWxkXG4gICAgcC5zZXREZWZhdWx0Tm9kZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKG5vZGVzTGFiZWwpe1xuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZE5vZGVzID0gbm9kZXNMYWJlbFxuICAgIH1cblxuICAgIC8vdG8tZG8gZG8gdGhpcyBmb3IgZW50aXJlIHRyZWUgcmF0aGVyIG9ubHkgZm9yIHRoZSBmaXJzdCBjaGlsZFxuICAgIC8qcC5zZXRPcGVuTm9kZXMgPSBmdW5jdGlvbihub2Rlc0xhYmVsKXtcbiAgICAgICAgdmFyIHJvb3ROb2RlcyA9IHRoaXMucm9vdE5vZGUuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICByb290Tm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgaWYobm9kZXNMYWJlbC5pbmRleE9mKG5vZGUubGFiZWwuc3RhdGUpID4gLTEpe1xuICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgIH0qL1xuXG4gICAgcC5jaGFuZ2VBY3RpdmVOb2RlID0gZnVuY3Rpb24gKG5vZGVDb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYoIXRoaXMuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVOb2RlICE9PSBub2RlQ29uZmlnKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZU5vZGVDaGlsZCA9IHRoaXMuYWN0aXZlTm9kZS5jaGlsZHJlbi5nZXROYW1lKG5vZGVDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICBpZighYWN0aXZlTm9kZUNoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVOb2RlLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbm9kZUNvbmZpZztcbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcC5nZXRGaWxlSWNvbiA9IGZ1bmN0aW9uIChkYXRhLGlzT3Blbikge1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlRGF0YVR5cGVJY29uLnZhbHVlKXtcbiAgICAgICAgICAgICAgICB2YXIgZGF0VHlwZSA9IHRoaXMuZ2V0RGF0YVR5cGUgPyB0aGlzLmdldERhdGFUeXBlKGRhdGEpIDogZGF0YS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFUeXBlc01hcCAmJiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzT3BlbiA/IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZS5sZWFmT3BlbiAgOiB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUubGVhZkRlZmF1bHQgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgcC5nZXRGb2xkZXJJY29uID0gZnVuY3Rpb24gKCBpc09wZW4pIHtcbiAgICAgICAgcmV0dXJuIGlzT3BlbiA/IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZS5ub2RlT3BlbiA6IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZS5ub2RlRGVmYXVsdDtcbiAgICB9XG5cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuVHJlZUNvbmZpZycsIFRyZWVDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBUcmVlQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
