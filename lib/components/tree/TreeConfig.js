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

        var icons = this.treeIconState.state;
        this.treeIconState.state = {
            "nodeDefault": this.reverseLayout.state ? icons.nodeDefault + " fa-flip-horizontal" : icons.nodeDefault,
            "nodeOpen": this.reverseLayout.state ? icons.nodeOpen + " fa-flip-horizontal" : icons.nodeOpen,
            "leafDefault": this.reverseLayout.state ? icons.leafDefault + " fa-flip-horizontal" : icons.leafDefault,
            "leafOpen": this.reverseLayout.state ? icons.leafOpen + " fa-flip-horizontal" : icons.leafOpen
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
//# sourceMappingURL=data:application/json;base64,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QixXQUF6QixDQURwRDthQUpMO1NBREosTUFTSSxPQUFPLEVBQVAsQ0FUSjtLQURZLENBMUxEOztBQXVNZixNQUFFLGFBQUYsR0FBa0IsVUFBVyxNQUFYLEVBQW1CO0FBQ2pDLGVBQU8sU0FBUyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsQ0FBeUIsUUFBekIsR0FBb0MsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLFdBQXpCLENBRG5CO0tBQW5COzs7QUF2TUgsU0E2TWYsQ0FBTSxhQUFOLENBQW9CLHVCQUFwQixFQUE2QyxVQUE3QyxFQTdNZTs7QUErTWYsV0FBTyxPQUFQLEdBQWlCLFVBQWpCLENBL01lO0NBQWxCLEVBaU5DLE1Bak5ELENBQUQiLCJmaWxlIjoiVHJlZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gVHJlZUNvbmZpZygpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ0cmVlSWNvblN0YXRlXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZURhdGFUeXBlSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImxlZnRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlUGFkZGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjIwcHhcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdE5vZGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBOb2RlQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2ZUxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmNoU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vZGVJY29uU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYWZJY29uU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsbG93TXVsdGlwbGVTZWxlY3Rpb246e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsICBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YVR5cGVzTWFwID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZXREYXRhVHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5icmFuY2hTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGVTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJyb3ctcmV2ZXJzZVwiIDogXCJyb3dcIixcbiAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOlwiY2VudGVyXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwibm9kZURlZmF1bHRcIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWZvbGRlciBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhIGZhLWZvbGRlclwiLFxuICAgICAgICAgICAgXCJub2RlT3BlblwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZm9sZGVyLW9wZW4gZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1mb2xkZXItb3BlblwiLFxuICAgICAgICAgICAgXCJsZWFmRGVmYXVsdFwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZmlsZS10ZXh0IGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtZmlsZS10ZXh0XCIsXG4gICAgICAgICAgICBcImxlYWZPcGVuXCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1maWxlLXRleHQtbyBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhLWZpbGUtdGV4dC1vXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZUljb25TdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgICAgIGhlaWdodCA6IFwiMjBweFwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OlwiMnB4XCJcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5sZWFmU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wicm93LXJldmVyc2VcIiA6IFwicm93XCIsXG4gICAgICAgICAgICBcImFsaWduSXRlbXNcIjpcImNlbnRlclwiXG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuYWN0aXZlTGVhZlN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBcIm9yYW5nZVwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZE5vZGVzID0gW107XG5cbiAgICAgICAgLy90b2RvIG1vdmUgdGhpcyB0byBjb21wb25lbnRNYW5hZ2VyIGRlZmF1bHRDYWxsYmFja3NcbiAgICAgICAgdGhpcy5yZXZlcnNlTGF5b3V0LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMudXBkYXRlU3R5bGUpO1xuICAgIH1cblxuXG4gICAgdmFyIHAgPSBUcmVlQ29uZmlnLnByb3RvdHlwZTtcblxuICAgIHAudXBkYXRlU3R5bGUgPSBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgZmxleERpciA9IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cInJvdy1yZXZlcnNlXCI6XCJyb3dcIjtcbiAgICAgICAgdGhpcy5ub2RlU3R5bGUuc3RhdGUgPSB7ZmxleERpcmVjdGlvbjpmbGV4RGlyfTtcbiAgICAgICAgdGhpcy5sZWFmU3R5bGUuc3RhdGUgPSB7ZmxleERpcmVjdGlvbjpmbGV4RGlyfTtcbiAgICAgICAgXG4gICAgICAgIHZhciBpY29ucyA9IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZTtcbiAgICAgICAgdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJub2RlRGVmYXVsdFwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP2ljb25zLm5vZGVEZWZhdWx0ICsgXCIgZmEtZmxpcC1ob3Jpem9udGFsXCI6aWNvbnMubm9kZURlZmF1bHQsXG4gICAgICAgICAgICBcIm5vZGVPcGVuXCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/aWNvbnMubm9kZU9wZW4gK1wiIGZhLWZsaXAtaG9yaXpvbnRhbFwiOmljb25zLm5vZGVPcGVuLFxuICAgICAgICAgICAgXCJsZWFmRGVmYXVsdFwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP2ljb25zLmxlYWZEZWZhdWx0ICtcIiBmYS1mbGlwLWhvcml6b250YWxcIjppY29ucy5sZWFmRGVmYXVsdCxcbiAgICAgICAgICAgIFwibGVhZk9wZW5cIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9pY29ucy5sZWFmT3BlbiArXCIgZmEtZmxpcC1ob3Jpem9udGFsXCI6aWNvbnMubGVhZk9wZW5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gbWVyZ2VJbnRvIChpbnRvLCBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludG87XG4gICAgfVxuXG4gICAgcC5nZXRMZWFmU3R5bGUgPSBmdW5jdGlvbihvcGVuLCBhY3RpdmUpe1xuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLmxlYWZTdHlsZS5zdGF0ZTtcbiAgICAgICAgaWYob3Blbil7XG4gICAgICAgICAgICBtZXJnZUludG8oc3R5bGUsdGhpcy5zZWxlY3RlZExlYWZTdHlsZS5zdGF0ZSlcbiAgICAgICAgICAgIGlmKGFjdGl2ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVyZ2VJbnRvKHN0eWxlLHRoaXMuYWN0aXZlTGVhZlN0eWxlLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDaGlsZHJlblN0YXRlVG9PcGVuKHBhcmVudE5vZGUsb3Blbk5vZGVzKXtcbiAgICAgICAgdmFyIG5vZGVzID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIGlmKG5vZGVzICYmIG5vZGVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgICAgIHZhciBub2RlSW5kZXggPSBvcGVuTm9kZXMuaW5kZXhPZihub2RlLmxhYmVsLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBpZihub2RlSW5kZXggPiAtMSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Ob2Rlcy5zcGxpY2Uobm9kZUluZGV4LDEpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZHJlblN0YXRlVG9PcGVuKG5vZGUsb3Blbk5vZGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy90by1kbyBkbyB0aGlzIGZvciBlbnRpcmUgdHJlZSByYXRoZXIgb25seSBmb3IgdGhlIGZpcnN0IGNoaWxkXG4gICAgcC5zZXREZWZhdWx0Tm9kZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKG5vZGVzTGFiZWwpe1xuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZE5vZGVzID0gbm9kZXNMYWJlbFxuICAgICAgICAvL3NldENoaWxkcmVuU3RhdGVUb09wZW4odGhpcy5yb290Tm9kZSxub2Rlc0xhYmVsKVxuICAgIH1cblxuICAgIC8vdG8tZG8gZG8gdGhpcyBmb3IgZW50aXJlIHRyZWUgcmF0aGVyIG9ubHkgZm9yIHRoZSBmaXJzdCBjaGlsZFxuICAgIHAuc2V0T3Blbk5vZGVzID0gZnVuY3Rpb24obm9kZXNMYWJlbCl7XG4gICAgICAgIHZhciByb290Tm9kZXMgPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgcm9vdE5vZGVzLm1hcChmdW5jdGlvbihub2RlKXtcbiAgICAgICAgICAgIGlmKG5vZGVzTGFiZWwuaW5kZXhPZihub2RlLmxhYmVsLnN0YXRlKSA+IC0xKXtcbiAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICB9XG5cbiAgICBwLmNoYW5nZUFjdGl2ZU5vZGUgPSBmdW5jdGlvbiAobm9kZUNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICBpZighdGhpcy5hbGxvd011bHRpcGxlU2VsZWN0aW9uLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2ZU5vZGUgIT09IG5vZGVDb25maWcpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlTm9kZUNoaWxkID0gdGhpcy5hY3RpdmVOb2RlLmNoaWxkcmVuLmdldE5hbWUobm9kZUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFhY3RpdmVOb2RlQ2hpbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBub2RlQ29uZmlnO1xuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwLmdldEZpbGVJY29uID0gZnVuY3Rpb24gKGRhdGEsaXNPcGVuKSB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYodGhpcy5lbmFibGVEYXRhVHlwZUljb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVR5cGVzTWFwICYmIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLmxlYWZPcGVuICA6IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZS5sZWFmRGVmYXVsdCA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBwLmdldEZvbGRlckljb24gPSBmdW5jdGlvbiAoIGlzT3Blbikge1xuICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLm5vZGVPcGVuIDogdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLm5vZGVEZWZhdWx0O1xuICAgIH1cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5UcmVlQ29uZmlnJywgVHJlZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFRyZWVDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
