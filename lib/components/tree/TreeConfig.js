"use strict";

var _NodeConfig = require("./NodeConfig");

var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function TreeConfig() {

        Object.defineProperties(this, {
            "folderIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder"))
            },
            "folderOpenIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder-open"))
            },
            "fileIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text"))
            },
            "fileOpenIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text-o"))
            },
            "enableDataTypeIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "rightAlign": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "nodePadding": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20px"))
            },
            "nodeColor": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "leafColor": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "leafBorder": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            rootNode: {
                value: Weave.linkableChild(this, new _NodeConfig2.default())
            },
            allowMultipleSelection: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });

        this.activeNode = null;
        this.dataTypesMap = null;
        this.getDataType = null;

        this.leafBorder.state = {
            borderBottom: "1px solid #0369B1"
        };
    }

    var p = TreeConfig.prototype;

    p.changeActiveNode = function (nodeConfig) {
        if (this.activeNode) {
            if (!this.allowMultipleSelection.value) this.activeNode.active.value = false;
        }
        this.activeNode = nodeConfig;
        this.activeNode.active.value = this.activeNode.open.value;
    };

    p.getFileIcon = function (data, isOpen) {
        if (data) {
            if (this.enableDataTypeIcon.value) {
                var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
                if (this.dataTypesMap && this.dataTypesMap[datType]) return this.dataTypesMap[datType];
            } else {
                return isOpen ? this.fileOpenIcon.value : this.fileIcon.value;
            }
        } else return "";
    };

    p.getFolderIcon = function (data, isOpen) {
        if (data) {
            var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
            if (this.dataTypesMap && this.dataTypesMap[datType]) return this.dataTypesMap[datType];else return isOpen ? this.folderOpenIcon.value : this.folderIcon.value;
        } else return "";
    };

    p.getFileIconStyle = function () {
        return {
            fontStyle: "bold",
            borderStyle: "solid",
            borderColor: "#7fd6f9",
            borderWidth: "1px",
            borderRadius: "4px",
            paddingLeft: "3px",
            paddingRight: "3px",
            fontSize: "11px"
        };
    };

    p.getNodeIconStyle = function () {
        return {
            color: "#7fd6f9",
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
        };
    };

    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

    module.exports = TreeConfig;
})(module); /*import Weave from 'Weave';
            import weavejs from 'weavejs';*/
//# sourceMappingURL=data:application/json;base64,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QUFZO0FBQzdCLGVBQU87QUFDSCx1QkFBVyxNQUFYO0FBQ0EseUJBQWEsT0FBYjtBQUNBLHlCQUFhLFNBQWI7QUFDQSx5QkFBYSxLQUFiO0FBQ0EsMEJBQWMsS0FBZDtBQUNBLHlCQUFhLEtBQWI7QUFDQSwwQkFBYyxLQUFkO0FBQ0Esc0JBQVUsTUFBVjtTQVJKLENBRDZCO0tBQVosQ0EzRk47O0FBd0dmLE1BQUUsZ0JBQUYsR0FBcUIsWUFBWTtBQUM3QixlQUFPO0FBQ0gsbUJBQU8sU0FBUDtBQUNBLHdCQUFZLHNEQUFaO1NBRkosQ0FENkI7S0FBWjs7O0FBeEdOLFNBb0hmLENBQU0sYUFBTixDQUFvQix1QkFBcEIsRUFBNkMsVUFBN0MsRUFwSGU7O0FBc0hmLFdBQU8sT0FBUCxHQUFpQixVQUFqQixDQXRIZTtDQUFsQixFQXdIQyxNQXhIRCxDQUFEIiwiZmlsZSI6IlRyZWVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFRyZWVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJmb2xkZXJJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZm9sZGVyXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZm9sZGVyT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1mb2xkZXItb3BlblwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZmlsZU9wZW5JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0LW9cIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVEYXRhVHlwZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibm9kZVBhZGRpbmdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMHB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibm9kZUNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZkNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZkJvcmRlclwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdE5vZGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBOb2RlQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxsb3dNdWx0aXBsZVNlbGVjdGlvbjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhVHlwZXNNYXAgPSBudWxsO1xuICAgICAgICB0aGlzLmdldERhdGFUeXBlID0gbnVsbDtcblxuICAgICAgICB0aGlzLmxlYWZCb3JkZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBib3JkZXJCb3R0b206XCIxcHggc29saWQgIzAzNjlCMVwiXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICB2YXIgcCA9IFRyZWVDb25maWcucHJvdG90eXBlO1xuXG5cblxuICAgIHAuY2hhbmdlQWN0aXZlTm9kZSA9IGZ1bmN0aW9uIChub2RlQ29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZU5vZGUpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmFsbG93TXVsdGlwbGVTZWxlY3Rpb24udmFsdWUpdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG5vZGVDb25maWc7XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZS5hY3RpdmUudmFsdWUgPSB0aGlzLmFjdGl2ZU5vZGUub3Blbi52YWx1ZTtcbiAgICB9XG5cbiAgICBwLmdldEZpbGVJY29uID0gZnVuY3Rpb24gKGRhdGEsaXNPcGVuKSB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYodGhpcy5lbmFibGVEYXRhVHlwZUljb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVR5cGVzTWFwICYmIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy5maWxlT3Blbkljb24udmFsdWUgOiB0aGlzLmZpbGVJY29uLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICB9XG5cbiAgICBwLmdldEZvbGRlckljb24gPSBmdW5jdGlvbiAoZGF0YSwgaXNPcGVuKSB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgdmFyIGRhdFR5cGUgPSB0aGlzLmdldERhdGFUeXBlID8gdGhpcy5nZXREYXRhVHlwZShkYXRhKSA6IGRhdGEuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFUeXBlc01hcCAmJiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzT3BlbiA/IHRoaXMuZm9sZGVyT3Blbkljb24udmFsdWUgOiB0aGlzLmZvbGRlckljb24udmFsdWU7XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcblxuICAgIH1cblxuICAgIHAuZ2V0RmlsZUljb25TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzdmZDZmOVwiLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIzcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIzcHhcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjExcHhcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcC5nZXROb2RlSWNvblN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3I6IFwiIzdmZDZmOVwiLFxuICAgICAgICAgICAgdGV4dFNoYWRvdzogXCItMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrXCJcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5UcmVlQ29uZmlnJywgVHJlZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFRyZWVDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
