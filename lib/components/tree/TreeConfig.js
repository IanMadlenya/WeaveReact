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
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
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

    //to-do do this for entire tree rather only for the first child
    p.setOpenNodes = function (nodesLabel) {
        //to-do still not s find a right way to update asynchrnous tree , so using the data approch
        //var rootNodes = this.rootNode.getTreeNodes();
        // var sessionRootNodes = this.rootNode.children.getObjects();

        /*for(var i = 0 ; i < rootNodes.length; i++){
            var node = rootNodes[i];
            var treeLabel = node.getlabel();
            var sessionNode = sessionRootNodes[i];
            if(nodesLabel.indexOf(treeLabel) > 0){
                sessionNode.open.value = true;
            }
            else{
                sessionNode.open.value = false;
                sessionNode.active.value = false;
            }
        }*/
        var rootNodes = this.rootNode.children.getObjects();
        rootNodes.map(function (node) {
            if (nodesLabel.indexOf(node.label.state) > 0) {
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
                if (nodeConfig.children.getName(this.activeNode)) this.activeNode.open.value = false;
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
        /* if(data){
             var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
             if (this.dataTypesMap && this.dataTypesMap[datType])
                 return this.dataTypesMap[datType];
             else*/
        return isOpen ? this.nodeOpenIcon.value : this.nodeIcon.value;
        /*}else
            return "";*/
    };

    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

    module.exports = TreeConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,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TCxDQUFrQixPQUFsQixDQUFQLENBREo7YUFGSixNQUlLO0FBQ0QsdUJBQU8sU0FBUyxLQUFLLFlBQUwsQ0FBa0IsS0FBbEIsR0FBMEIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUR6QzthQUpMO1NBREosTUFTSSxPQUFPLEVBQVAsQ0FUSjtLQURZLENBN0lEOztBQTJKZixNQUFFLGFBQUYsR0FBa0IsVUFBVyxNQUFYLEVBQW1COzs7Ozs7QUFNekIsZUFBTyxTQUFTLEtBQUssWUFBTCxDQUFrQixLQUFsQixHQUEwQixLQUFLLFFBQUwsQ0FBYyxLQUFkOzs7S0FOcEM7QUFBbUI7O0FBM0p0QixTQThLZixDQUFNLGFBQU4sQ0FBb0IsdUJBQXBCLEVBQTZDLFVBQTdDLEVBOUtlOztBQWdMZixXQUFPLE9BQVAsR0FBaUIsVUFBakIsQ0FoTGU7Q0FBbEIsRUFrTEMsTUFsTEQsQ0FBRCIsImZpbGUiOiJUcmVlQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5pbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFRyZWVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJub2RlSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWZvbGRlclwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm5vZGVPcGVuSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWZvbGRlci1vcGVuXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1maWxlLXRleHRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsZWFmT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1maWxlLXRleHQtb1wiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZURhdGFUeXBlSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImxlZnRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlUGFkZGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjIwcHhcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdE5vZGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBOb2RlQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2ZUxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmNoU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsbG93TXVsdGlwbGVTZWxlY3Rpb246e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsICBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhVHlwZXNNYXAgPSBudWxsO1xuICAgICAgICB0aGlzLmdldERhdGFUeXBlID0gbnVsbDtcblxuICAgICAgICB0aGlzLm5vZGVTdHlsZS5kaXNwbGF5LnN0YXRlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMubm9kZVN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGVhZlN0eWxlLmRpc3BsYXkuc3RhdGUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5sZWFmU3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZExlYWZTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZFwiIDogXCJncmVlblwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZUxlYWZTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZFwiIDogXCJvcmFuZ2VcIlxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG4gICAgdmFyIHAgPSBUcmVlQ29uZmlnLnByb3RvdHlwZTtcblxuICAgIGZ1bmN0aW9uIG1lcmdlSW50byAoaW50bywgb2JqKSB7XG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICBpbnRvW2F0dHJdID0gb2JqW2F0dHJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cblxuICAgIHAuZ2V0TGVhZlN0eWxlID0gZnVuY3Rpb24ob3BlbiwgYWN0aXZlKXtcbiAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5sZWFmU3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgaWYob3Blbil7XG4gICAgICAgICAgICBtZXJnZUludG8oc3R5bGUsdGhpcy5zZWxlY3RlZExlYWZTdHlsZS5nZXRTdHlsZUZvcigpKVxuICAgICAgICAgICAgaWYoYWN0aXZlKVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXJnZUludG8oc3R5bGUsdGhpcy5hY3RpdmVMZWFmU3R5bGUuZ2V0U3R5bGVGb3IoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuXG4gICAgfVxuXG4gICAgLy90by1kbyBkbyB0aGlzIGZvciBlbnRpcmUgdHJlZSByYXRoZXIgb25seSBmb3IgdGhlIGZpcnN0IGNoaWxkXG4gICAgcC5zZXRPcGVuTm9kZXMgPSBmdW5jdGlvbihub2Rlc0xhYmVsKXtcbiAgICAgICAgLy90by1kbyBzdGlsbCBub3QgcyBmaW5kIGEgcmlnaHQgd2F5IHRvIHVwZGF0ZSBhc3luY2hybm91cyB0cmVlICwgc28gdXNpbmcgdGhlIGRhdGEgYXBwcm9jaFxuICAgICAgICAvL3ZhciByb290Tm9kZXMgPSB0aGlzLnJvb3ROb2RlLmdldFRyZWVOb2RlcygpO1xuICAgICAgIC8vIHZhciBzZXNzaW9uUm9vdE5vZGVzID0gdGhpcy5yb290Tm9kZS5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG5cbiAgICAgICAgLypmb3IodmFyIGkgPSAwIDsgaSA8IHJvb3ROb2Rlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHJvb3ROb2Rlc1tpXTtcbiAgICAgICAgICAgIHZhciB0cmVlTGFiZWwgPSBub2RlLmdldGxhYmVsKCk7XG4gICAgICAgICAgICB2YXIgc2Vzc2lvbk5vZGUgPSBzZXNzaW9uUm9vdE5vZGVzW2ldO1xuICAgICAgICAgICAgaWYobm9kZXNMYWJlbC5pbmRleE9mKHRyZWVMYWJlbCkgPiAwKXtcbiAgICAgICAgICAgICAgICBzZXNzaW9uTm9kZS5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgc2Vzc2lvbk5vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlc3Npb25Ob2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9Ki9cbiAgICAgICAgdmFyIHJvb3ROb2RlcyA9IHRoaXMucm9vdE5vZGUuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICByb290Tm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgaWYobm9kZXNMYWJlbC5pbmRleE9mKG5vZGUubGFiZWwuc3RhdGUpID4gMCl7XG4gICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgfVxuXG4gICAgcC5jaGFuZ2VBY3RpdmVOb2RlID0gZnVuY3Rpb24gKG5vZGVDb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYoIXRoaXMuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgaWYobm9kZUNvbmZpZy5jaGlsZHJlbi5nZXROYW1lKHRoaXMuYWN0aXZlTm9kZSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTm9kZS5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbm9kZUNvbmZpZztcbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcC5nZXRGaWxlSWNvbiA9IGZ1bmN0aW9uIChkYXRhLGlzT3Blbikge1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlRGF0YVR5cGVJY29uLnZhbHVlKXtcbiAgICAgICAgICAgICAgICB2YXIgZGF0VHlwZSA9IHRoaXMuZ2V0RGF0YVR5cGUgPyB0aGlzLmdldERhdGFUeXBlKGRhdGEpIDogZGF0YS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFUeXBlc01hcCAmJiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzT3BlbiA/IHRoaXMubGVhZk9wZW5JY29uLnZhbHVlIDogdGhpcy5sZWFmSWNvbi52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2VcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgfVxuXG4gICAgcC5nZXRGb2xkZXJJY29uID0gZnVuY3Rpb24gKCBpc09wZW4pIHtcbiAgICAgICAvKiBpZihkYXRhKXtcbiAgICAgICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhVHlwZXNNYXAgJiYgdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdO1xuICAgICAgICAgICAgZWxzZSovXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzT3BlbiA/IHRoaXMubm9kZU9wZW5JY29uLnZhbHVlIDogdGhpcy5ub2RlSWNvbi52YWx1ZTtcbiAgICAgICAgLyp9ZWxzZVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7Ki9cblxuICAgIH1cblxuXG5cblxuXG5cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuVHJlZUNvbmZpZycsIFRyZWVDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBUcmVlQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
