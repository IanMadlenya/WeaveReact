"use strict";

/*import Weave from 'Weave';
import weavejs from 'weavejs';*/
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
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });

        this.activeNode = null;
        this.dataTypesMap = null;
        this.getDataType = null;
    }

    var p = TreeConfig.prototype;

    p.changeActiveNode = function (nodeConfig) {
        if (this.activeNode) {
            this.activeNode.active.value = false;
        }
        this.activeNode = nodeConfig;
        this.activeNode.active.value = true;
    };

    p.getFileIcon = function (data) {
        var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
        if (this.dataTypesMap[datType]) return this.dataTypesMap[datType];
        return this.fileOpenIcon.value;
    };

    p.getFolderIcon = function (data, isOpen) {
        var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
        if (this.dataTypesMap[datType]) return this.dataTypesMap[datType];
        return isOpen ? this.folderOpenIcon.value : this.folderIcon.value;
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
})(module);
//# sourceMappingURL=data:application/json;base64,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VSxNQUFWO1NBUkosQ0FENkI7S0FBWixDQXhETjs7QUFxRWYsTUFBRSxnQkFBRixHQUFxQixZQUFZO0FBQzdCLGVBQU87QUFDSCxtQkFBTyxTQUFQO0FBQ0Esd0JBQVksc0RBQVo7U0FGSixDQUQ2QjtLQUFaOzs7QUFyRU4sU0ErRWYsQ0FBTSxhQUFOLENBQW9CLHVCQUFwQixFQUE2QyxVQUE3QyxFQS9FZTs7QUFpRmYsV0FBTyxPQUFQLEdBQWlCLFVBQWpCLENBakZlO0NBQWxCLEVBbUZDLE1BbkZELENBQUQiLCJmaWxlIjoiVHJlZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFdlYXZlIGZyb20gJ1dlYXZlJztcbmltcG9ydCB3ZWF2ZWpzIGZyb20gJ3dlYXZlanMnOyovXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gVHJlZUNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImZvbGRlckljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1mb2xkZXJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmb2xkZXJPcGVuSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWZvbGRlci1vcGVuXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZmlsZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1maWxlLXRleHRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmaWxlT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1maWxlLXRleHQtb1wiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZURhdGFUeXBlSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2V0RGF0YVR5cGUgPSBudWxsO1xuICAgIH1cblxuXG4gICAgdmFyIHAgPSBUcmVlQ29uZmlnLnByb3RvdHlwZTtcblxuXG5cbiAgICBwLmNoYW5nZUFjdGl2ZU5vZGUgPSBmdW5jdGlvbiAobm9kZUNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbm9kZUNvbmZpZztcbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcC5nZXRGaWxlSWNvbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIGlmICh0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZU9wZW5JY29uLnZhbHVlO1xuXG4gICAgfVxuXG4gICAgcC5nZXRGb2xkZXJJY29uID0gZnVuY3Rpb24gKGRhdGEsIGlzT3Blbikge1xuICAgICAgICB2YXIgZGF0VHlwZSA9IHRoaXMuZ2V0RGF0YVR5cGUgPyB0aGlzLmdldERhdGFUeXBlKGRhdGEpIDogZGF0YS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBpZiAodGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV0pXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgIHJldHVybiBpc09wZW4gPyB0aGlzLmZvbGRlck9wZW5JY29uLnZhbHVlIDogdGhpcy5mb2xkZXJJY29uLnZhbHVlO1xuXG4gICAgfVxuXG4gICAgcC5nZXRGaWxlSWNvblN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjN2ZkNmY5XCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxcHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjNweFwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjNweFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTFweFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwLmdldE5vZGVJY29uU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjN2ZkNmY5XCIsXG4gICAgICAgICAgICB0ZXh0U2hhZG93OiBcIi0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2tcIlxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuVHJlZUNvbmZpZycsIFRyZWVDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBUcmVlQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
