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

        var keys = Object.keys(icons);
        if (this.reverseLayout.state) {
            keys.map(function (key, index) {
                if (icons[key].indexOf(" fa-flip-horizontal") == -1) {
                    //not flipped
                    icons[key] = icons[key] + " fa-flip-horizontal";
                }
            }, this);
        } else {
            keys.map(function (key, index) {
                if (icons[key].indexOf(" fa-flip-horizontal") != -1) {
                    // flipped
                    var index = icons[key].indexOf(" fa-flip-horizontal");
                    icons[key] = icons[key].substring(0, index);
                }
            }, this);
        }
        this.treeIconState.state = icons;

        this.nodeIconStyle.state = {
            transform: this.reverseLayout.state ? "scaleX(-1)" : ""
        };

        this.leafIconStyle.state = {
            transform: this.reverseLayout.state ? "scaleX(-1)" : ""
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
//# sourceMappingURL=data:application/json;base64,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dUM7QUFZdkMsYUFBSyxVQUFMLENBQWdCLE1BQWhCLENBQXVCLEtBQXZCLEdBQStCLElBQS9CLENBWnVDO0tBQXRCLENBbE1OOztBQWlOZixNQUFFLFdBQUYsR0FBZ0IsVUFBVSxJQUFWLEVBQWUsTUFBZixFQUF1QjtBQUNuQyxZQUFHLElBQUgsRUFBUTtBQUNKLGdCQUFHLEtBQUssa0JBQUwsQ0FBd0IsS0FBeEIsRUFBOEI7QUFDN0Isb0JBQUksVUFBVSxLQUFLLFdBQUwsR0FBbUIsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQW5CLEdBQTRDLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUQ3QjtBQUU3QixvQkFBSSxLQUFLLFlBQUwsSUFBcUIsS0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQXJCLEVBQ0EsT0FBTyxLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBUCxDQURKO2FBRkosTUFJSztBQUNELHVCQUFPLFNBQVMsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLFFBQXpCLEdBQXFDLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQUF5QixXQUF6QixDQURwRDthQUpMO1NBREosTUFTSSxPQUFPLEVBQVAsQ0FUSjtLQURZLENBak5EOztBQThOZixNQUFFLGFBQUYsR0FBa0IsVUFBVyxNQUFYLEVBQW1CO0FBQ2pDLGVBQU8sU0FBUyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsQ0FBeUIsUUFBekIsR0FBb0MsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLFdBQXpCLENBRG5CO0tBQW5COzs7QUE5TkgsU0FvT2YsQ0FBTSxhQUFOLENBQW9CLHVCQUFwQixFQUE2QyxVQUE3QyxFQXBPZTs7QUFzT2YsV0FBTyxPQUFQLEdBQWlCLFVBQWpCLENBdE9lO0NBQWxCLEVBd09DLE1BeE9ELENBQUQiLCJmaWxlIjoiVHJlZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gVHJlZUNvbmZpZygpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ0cmVlSWNvblN0YXRlXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZURhdGFUeXBlSWNvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImxlZnRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlUGFkZGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjIwcHhcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdE5vZGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBOb2RlQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2ZUxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmNoU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vZGVJY29uU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYWZJY29uU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsbG93TXVsdGlwbGVTZWxlY3Rpb246e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsICBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YVR5cGVzTWFwID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZXREYXRhVHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5icmFuY2hTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGVTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJyb3ctcmV2ZXJzZVwiIDogXCJyb3dcIixcbiAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOlwiY2VudGVyXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwibm9kZURlZmF1bHRcIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWZvbGRlciBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhIGZhLWZvbGRlclwiLFxuICAgICAgICAgICAgXCJub2RlT3BlblwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZm9sZGVyLW9wZW4gZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1mb2xkZXItb3BlblwiLFxuICAgICAgICAgICAgXCJsZWFmRGVmYXVsdFwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZmlsZS10ZXh0IGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtZmlsZS10ZXh0XCIsXG4gICAgICAgICAgICBcImxlYWZPcGVuXCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1maWxlLXRleHQtbyBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhLWZpbGUtdGV4dC1vXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZUljb25TdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgICAgIGhlaWdodCA6IFwiMjBweFwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OlwiMnB4XCJcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5sZWFmU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wicm93LXJldmVyc2VcIiA6IFwicm93XCIsXG4gICAgICAgICAgICBcImFsaWduSXRlbXNcIjpcImNlbnRlclwiXG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuYWN0aXZlTGVhZlN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBcIm9yYW5nZVwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZE5vZGVzID0gW107XG5cbiAgICAgICAgLy90b2RvIG1vdmUgdGhpcyB0byBjb21wb25lbnRNYW5hZ2VyIGRlZmF1bHRDYWxsYmFja3NcbiAgICAgICAgdGhpcy5yZXZlcnNlTGF5b3V0LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMudXBkYXRlU3R5bGUpO1xuICAgIH1cblxuXG4gICAgdmFyIHAgPSBUcmVlQ29uZmlnLnByb3RvdHlwZTtcblxuICAgIHAudXBkYXRlU3R5bGUgPSBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgZmxleERpciA9IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cInJvdy1yZXZlcnNlXCI6XCJyb3dcIjtcbiAgICAgICAgdGhpcy5ub2RlU3R5bGUuc3RhdGUgPSB7ZmxleERpcmVjdGlvbjpmbGV4RGlyfTtcbiAgICAgICAgdGhpcy5sZWFmU3R5bGUuc3RhdGUgPSB7ZmxleERpcmVjdGlvbjpmbGV4RGlyfTtcblxuICAgICAgICB2YXIgaWNvbnMgPSB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGU7XG4gICAgICAgIFxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGljb25zKTtcbiAgICAgICAgaWYodGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlKXtcbiAgICAgICAgICAgIGtleXMubWFwKGZ1bmN0aW9uKGtleSxpbmRleCl7XG4gICAgICAgICAgICAgICAgaWYoaWNvbnNba2V5XS5pbmRleE9mKFwiIGZhLWZsaXAtaG9yaXpvbnRhbFwiKSA9PSAtMSl7Ly9ub3QgZmxpcHBlZFxuICAgICAgICAgICAgICAgICAgICBpY29uc1trZXldID0gaWNvbnNba2V5XSArIFwiIGZhLWZsaXAtaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sdGhpcyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAga2V5cy5tYXAoZnVuY3Rpb24oa2V5LGluZGV4KXtcbiAgICAgICAgICAgICAgICBpZihpY29uc1trZXldLmluZGV4T2YoXCIgZmEtZmxpcC1ob3Jpem9udGFsXCIpICE9IC0xKXsvLyBmbGlwcGVkXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGljb25zW2tleV0uaW5kZXhPZihcIiBmYS1mbGlwLWhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGljb25zW2tleV0gPSBpY29uc1trZXldLnN1YnN0cmluZygwLGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlID0gaWNvbnM7XG4gICAgICAgIFxuXG5cbiAgICAgICAgdGhpcy5ub2RlSWNvblN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJzY2FsZVgoLTEpXCI6XCJcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sZWFmSWNvblN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJzY2FsZVgoLTEpXCI6XCJcIlxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIG1lcmdlSW50byAoaW50bywgb2JqKSB7XG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICBpbnRvW2F0dHJdID0gb2JqW2F0dHJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cblxuICAgIHAuZ2V0TGVhZlN0eWxlID0gZnVuY3Rpb24ob3BlbiwgYWN0aXZlKXtcbiAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5sZWFmU3R5bGUuc3RhdGU7XG4gICAgICAgIGlmKG9wZW4pe1xuICAgICAgICAgICAgbWVyZ2VJbnRvKHN0eWxlLHRoaXMuc2VsZWN0ZWRMZWFmU3R5bGUuc3RhdGUpXG4gICAgICAgICAgICBpZihhY3RpdmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlSW50byhzdHlsZSx0aGlzLmFjdGl2ZUxlYWZTdHlsZS5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q2hpbGRyZW5TdGF0ZVRvT3BlbihwYXJlbnROb2RlLG9wZW5Ob2Rlcyl7XG4gICAgICAgIHZhciBub2RlcyA9IHBhcmVudE5vZGUuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICBpZihub2RlcyAmJiBub2Rlcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIG5vZGVzLm1hcChmdW5jdGlvbihub2RlKXtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZUluZGV4ID0gb3Blbk5vZGVzLmluZGV4T2Yobm9kZS5sYWJlbC5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYobm9kZUluZGV4ID4gLTEpe1xuICAgICAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvcGVuTm9kZXMuc3BsaWNlKG5vZGVJbmRleCwxKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hpbGRyZW5TdGF0ZVRvT3Blbihub2RlLG9wZW5Ob2Rlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vdG8tZG8gZG8gdGhpcyBmb3IgZW50aXJlIHRyZWUgcmF0aGVyIG9ubHkgZm9yIHRoZSBmaXJzdCBjaGlsZFxuICAgIHAuc2V0RGVmYXVsdE5vZGVTZWxlY3Rpb24gPSBmdW5jdGlvbihub2Rlc0xhYmVsKXtcbiAgICAgICAgdGhpcy5kZWZhdWx0U2VsZWN0ZWROb2RlcyA9IG5vZGVzTGFiZWxcbiAgICAgICAgLy9zZXRDaGlsZHJlblN0YXRlVG9PcGVuKHRoaXMucm9vdE5vZGUsbm9kZXNMYWJlbClcbiAgICB9XG5cbiAgICAvL3RvLWRvIGRvIHRoaXMgZm9yIGVudGlyZSB0cmVlIHJhdGhlciBvbmx5IGZvciB0aGUgZmlyc3QgY2hpbGRcbiAgICBwLnNldE9wZW5Ob2RlcyA9IGZ1bmN0aW9uKG5vZGVzTGFiZWwpe1xuICAgICAgICB2YXIgcm9vdE5vZGVzID0gdGhpcy5yb290Tm9kZS5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIHJvb3ROb2Rlcy5tYXAoZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgICBpZihub2Rlc0xhYmVsLmluZGV4T2Yobm9kZS5sYWJlbC5zdGF0ZSkgPiAtMSl7XG4gICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuXG4gICAgfVxuXG4gICAgcC5jaGFuZ2VBY3RpdmVOb2RlID0gZnVuY3Rpb24gKG5vZGVDb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYoIXRoaXMuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVOb2RlICE9PSBub2RlQ29uZmlnKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZU5vZGVDaGlsZCA9IHRoaXMuYWN0aXZlTm9kZS5jaGlsZHJlbi5nZXROYW1lKG5vZGVDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICBpZighYWN0aXZlTm9kZUNoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVOb2RlLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbm9kZUNvbmZpZztcbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcC5nZXRGaWxlSWNvbiA9IGZ1bmN0aW9uIChkYXRhLGlzT3Blbikge1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlRGF0YVR5cGVJY29uLnZhbHVlKXtcbiAgICAgICAgICAgICAgICB2YXIgZGF0VHlwZSA9IHRoaXMuZ2V0RGF0YVR5cGUgPyB0aGlzLmdldERhdGFUeXBlKGRhdGEpIDogZGF0YS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFUeXBlc01hcCAmJiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzT3BlbiA/IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZS5sZWFmT3BlbiAgOiB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUubGVhZkRlZmF1bHQgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgcC5nZXRGb2xkZXJJY29uID0gZnVuY3Rpb24gKCBpc09wZW4pIHtcbiAgICAgICAgcmV0dXJuIGlzT3BlbiA/IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZS5ub2RlT3BlbiA6IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZS5ub2RlRGVmYXVsdDtcbiAgICB9XG5cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuVHJlZUNvbmZpZycsIFRyZWVDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBUcmVlQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
