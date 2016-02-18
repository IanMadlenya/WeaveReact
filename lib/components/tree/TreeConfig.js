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
            this.activeNode.active.value = false;
        }
        this.activeNode = nodeConfig;
        this.activeNode.active.value = true;
    };

    p.getFileIcon = function (data) {
        if (data) {
            if (this.enableDataTypeIcon.value) {
                var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
                if (this.dataTypesMap && this.dataTypesMap[datType]) return this.dataTypesMap[datType];else return this.fileOpenIcon.value;
            }
            return "";
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
//# sourceMappingURL=data:application/json;base64,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QU87QUFDSCxtQkFBTyxTQUFQO0FBQ0Esd0JBQVksc0RBQVo7U0FGSixDQUQ2QjtLQUFaOzs7QUF0R04sU0FrSGYsQ0FBTSxhQUFOLENBQW9CLHVCQUFwQixFQUE2QyxVQUE3QyxFQWxIZTs7QUFvSGYsV0FBTyxPQUFQLEdBQWlCLFVBQWpCLENBcEhlO0NBQWxCLEVBc0hDLE1BdEhELENBQUQiLCJmaWxlIjoiVHJlZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFdlYXZlIGZyb20gJ1dlYXZlJztcbmltcG9ydCB3ZWF2ZWpzIGZyb20gJ3dlYXZlanMnOyovXG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gVHJlZUNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImZvbGRlckljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1mb2xkZXJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmb2xkZXJPcGVuSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWZvbGRlci1vcGVuXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZmlsZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1maWxlLXRleHRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmaWxlT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1maWxlLXRleHQtb1wiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZURhdGFUeXBlSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyaWdodEFsaWduXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlUGFkZGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjIwcHhcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlQ29sb3JcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsZWFmQ29sb3JcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsZWFmQm9yZGVyXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByb290Tm9kZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IE5vZGVDb25maWcoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhVHlwZXNNYXAgPSBudWxsO1xuICAgICAgICB0aGlzLmdldERhdGFUeXBlID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubGVhZkJvcmRlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZCAjMDM2OUIxXCJcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIHZhciBwID0gVHJlZUNvbmZpZy5wcm90b3R5cGU7XG5cblxuXG4gICAgcC5jaGFuZ2VBY3RpdmVOb2RlID0gZnVuY3Rpb24gKG5vZGVDb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG5vZGVDb25maWc7XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZS5hY3RpdmUudmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIHAuZ2V0RmlsZUljb24gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlRGF0YVR5cGVJY29uLnZhbHVlKXtcbiAgICAgICAgICAgICAgICB2YXIgZGF0VHlwZSA9IHRoaXMuZ2V0RGF0YVR5cGUgPyB0aGlzLmdldERhdGFUeXBlKGRhdGEpIDogZGF0YS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFUeXBlc01hcCAmJiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZU9wZW5JY29uLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1lbHNlIFxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICB9XG5cbiAgICBwLmdldEZvbGRlckljb24gPSBmdW5jdGlvbiAoZGF0YSwgaXNPcGVuKSB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgdmFyIGRhdFR5cGUgPSB0aGlzLmdldERhdGFUeXBlID8gdGhpcy5nZXREYXRhVHlwZShkYXRhKSA6IGRhdGEuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFUeXBlc01hcCAmJiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHJldHVybiBpc09wZW4gPyB0aGlzLmZvbGRlck9wZW5JY29uLnZhbHVlIDogdGhpcy5mb2xkZXJJY29uLnZhbHVlO1xuICAgICAgICB9ZWxzZSBcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgfVxuXG4gICAgcC5nZXRGaWxlSWNvblN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjN2ZkNmY5XCIsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxcHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjNweFwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjNweFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTFweFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwLmdldE5vZGVJY29uU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjN2ZkNmY5XCIsXG4gICAgICAgICAgICB0ZXh0U2hhZG93OiBcIi0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2tcIlxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LlRyZWVDb25maWcnLCBUcmVlQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gVHJlZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
