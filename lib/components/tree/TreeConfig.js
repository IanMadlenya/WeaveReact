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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUVmLGFBQVMsVUFBVCxHQUFzQjtBQUNsQixtQ0FBaUIsOEJBQWpCLENBQWdELElBQWhELEVBRGtCOztBQUdsQixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLDZCQUFnQjtBQUNYLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGdCQUFiLEVBQTlCLENBQVA7YUFETDtBQUdBLGtDQUFzQjtBQUNsQix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLElBQWpDLENBQTFCLENBQVA7YUFESjtBQUdBLHFCQUFTO0FBQ0wsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixNQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSwyQkFBZTtBQUNYLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsTUFBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0Esc0JBQVM7QUFDTCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMEJBQTFCLENBQVA7YUFESjtBQUdBLHVCQUFVO0FBQ04sdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO2FBREo7QUFHQSx1QkFBVTtBQUNOLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDthQURKO0FBR0EsdUJBQVU7QUFDTix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7YUFESjtBQUdBLCtCQUFrQjtBQUNkLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDthQURKO0FBR0EsNkJBQWdCO0FBQ1osdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO2FBREo7QUFHQSx5QkFBWTtBQUNSLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDthQURKO0FBR0EsMkJBQWM7QUFDVix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7YUFESjtBQUdBLDJCQUFjO0FBQ1YsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO2FBREo7QUFHQSxvQ0FBdUI7QUFDbkIsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTJCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUEzQixDQUFQO2FBREo7U0F4Q0osRUFIa0I7O0FBZ0RsQixhQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FoRGtCO0FBaURsQixhQUFLLFlBQUwsR0FBb0IsSUFBcEIsQ0FqRGtCO0FBa0RsQixhQUFLLFdBQUwsR0FBbUIsSUFBbkIsQ0FsRGtCOztBQW9EbEIsYUFBSyxXQUFMLENBQWlCLEtBQWpCLEdBQXlCO0FBQ3JCLHVCQUFXLE1BQVg7QUFDQSw2QkFBaUIsUUFBakI7U0FGSixDQXBEa0I7O0FBeURsQixhQUFLLFNBQUwsQ0FBZSxLQUFmLEdBQXVCO0FBQ25CLHVCQUFXLE1BQVg7QUFDQSw2QkFBaUIsS0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQXlCLGFBQXpCLEdBQXlDLEtBQXpDO0FBQ2pCLDBCQUFhLFFBQWI7U0FISixDQXpEa0I7O0FBK0RsQixhQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBMkI7QUFDdkIsMkJBQWdCLEtBQUssYUFBTCxDQUFtQixLQUFuQixHQUF5QixpQ0FBekIsR0FBMkQsY0FBM0Q7QUFDaEIsd0JBQWEsS0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQXlCLHNDQUF6QixHQUFnRSxtQkFBaEU7QUFDYiwyQkFBZ0IsS0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQXlCLG9DQUF6QixHQUE4RCxpQkFBOUQ7QUFDaEIsd0JBQWEsS0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQXlCLHNDQUF6QixHQUFnRSxnQkFBaEU7U0FKakIsQ0EvRGtCOztBQXNFbEIsYUFBSyxhQUFMLENBQW1CLEtBQW5CLEdBQTJCO0FBQ3ZCLG1CQUFPLE1BQVA7QUFDQSxvQkFBUyxNQUFUO0FBQ0EsMEJBQWEsS0FBYjtTQUhKLENBdEVrQjs7QUE2RWxCLGFBQUssU0FBTCxDQUFlLEtBQWYsR0FBdUI7QUFDbkIsdUJBQVcsTUFBWDtBQUNBLDZCQUFpQixLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBeUIsYUFBekIsR0FBeUMsS0FBekM7QUFDakIsMEJBQWEsUUFBYjtTQUhKLENBN0VrQjs7QUFvRmxCLGFBQUssZUFBTCxDQUFxQixLQUFyQixHQUE2QjtBQUN6QiwwQkFBZSxRQUFmO1NBREosQ0FwRmtCOztBQXdGbEIsYUFBSyxvQkFBTCxHQUE0QixFQUE1Qjs7O0FBeEZrQixZQTJGbEIsQ0FBSyxhQUFMLENBQW1CLG9CQUFuQixDQUF3QyxJQUF4QyxFQUE4QyxLQUFLLFdBQUwsQ0FBOUMsQ0EzRmtCO0tBQXRCOztBQStGQSxRQUFJLElBQUksV0FBVyxTQUFYLENBakdPOztBQW1HZixNQUFFLFdBQUYsR0FBZ0IsWUFBVTtBQUN0QixZQUFJLFVBQVUsS0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQXlCLGFBQXpCLEdBQXVDLEtBQXZDLENBRFE7QUFFdEIsYUFBSyxTQUFMLENBQWUsS0FBZixHQUF1QixFQUFDLGVBQWMsT0FBZCxFQUF4QixDQUZzQjtBQUd0QixhQUFLLFNBQUwsQ0FBZSxLQUFmLEdBQXVCLEVBQUMsZUFBYyxPQUFkLEVBQXhCLENBSHNCO0FBSXRCLG1DQUFpQixTQUFqQixDQUEyQixJQUEzQixFQUFnQyxDQUFDLGVBQUQsQ0FBaEMsRUFKc0I7S0FBVixDQW5HRDs7QUE0R2YsYUFBUyxTQUFULENBQW9CLElBQXBCLEVBQTBCLEdBQTFCLEVBQStCO0FBQzNCLGFBQUssSUFBSSxJQUFKLElBQVksR0FBakIsRUFBc0I7QUFDbEIsaUJBQUssSUFBTCxJQUFhLElBQUksSUFBSixDQUFiLENBRGtCO1NBQXRCO0FBR0EsZUFBTyxJQUFQLENBSjJCO0tBQS9COztBQU9BLE1BQUUsWUFBRixHQUFpQixVQUFTLElBQVQsRUFBZSxNQUFmLEVBQXNCO0FBQ25DLFlBQUksUUFBUSxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBRHVCO0FBRW5DLFlBQUcsSUFBSCxFQUFRO0FBQ0osc0JBQVUsS0FBVixFQUFnQixLQUFLLGlCQUFMLENBQXVCLEtBQXZCLENBQWhCLENBREk7QUFFSixnQkFBRyxNQUFILEVBQ0ksT0FBTyxVQUFVLEtBQVYsRUFBZ0IsS0FBSyxlQUFMLENBQXFCLEtBQXJCLENBQXZCLENBREo7U0FGSjtBQUtBLGVBQU8sS0FBUCxDQVBtQztLQUF0QixDQW5IRjs7QUE4SGYsYUFBUyxzQkFBVCxDQUFnQyxVQUFoQyxFQUEyQyxTQUEzQyxFQUFxRDtBQUNqRCxZQUFJLFFBQVEsV0FBVyxRQUFYLENBQW9CLFVBQXBCLEVBQVIsQ0FENkM7QUFFakQsWUFBRyxTQUFTLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBaUI7QUFDekIsa0JBQU0sR0FBTixDQUFVLFVBQVMsSUFBVCxFQUFjO0FBQ3BCLG9CQUFJLFlBQVksVUFBVSxPQUFWLENBQWtCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBOUIsQ0FEZ0I7QUFFcEIsb0JBQUcsWUFBWSxDQUFDLENBQUQsRUFBRztBQUNkLHlCQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLElBQWxCLENBRGM7QUFFZCw4QkFBVSxNQUFWLENBQWlCLFNBQWpCLEVBQTJCLENBQTNCLEVBRmM7QUFHZCwyQ0FBdUIsSUFBdkIsRUFBNEIsU0FBNUIsRUFIYztpQkFBbEIsTUFLSTtBQUNBLHlCQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLEtBQWxCLENBREE7QUFFQSx5QkFBSyxNQUFMLENBQVksS0FBWixHQUFvQixLQUFwQixDQUZBO2lCQUxKO2FBRk0sQ0FXUixJQVhRLENBV0gsSUFYRyxDQUFWLEVBRHlCO1NBQTdCO0tBRko7OztBQTlIZSxLQWlKZixDQUFFLHVCQUFGLEdBQTRCLFVBQVMsVUFBVCxFQUFvQjtBQUM1QyxhQUFLLG9CQUFMLEdBQTRCLFVBQTVCOztBQUQ0QyxLQUFwQjs7O0FBakpiLEtBdUpmLENBQUUsWUFBRixHQUFpQixVQUFTLFVBQVQsRUFBb0I7QUFDakMsWUFBSSxZQUFZLEtBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsVUFBdkIsRUFBWixDQUQ2QjtBQUVqQyxrQkFBVSxHQUFWLENBQWMsVUFBUyxJQUFULEVBQWM7QUFDeEIsZ0JBQUcsV0FBVyxPQUFYLENBQW1CLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBbkIsR0FBdUMsQ0FBQyxDQUFELEVBQUc7QUFDekMscUJBQUssSUFBTCxDQUFVLEtBQVYsR0FBa0IsSUFBbEIsQ0FEeUM7YUFBN0MsTUFHSTtBQUNBLHFCQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLEtBQWxCLENBREE7QUFFQSxxQkFBSyxNQUFMLENBQVksS0FBWixHQUFvQixLQUFwQixDQUZBO2FBSEo7U0FEVSxDQVFaLElBUlksQ0FRUCxJQVJPLENBQWQsRUFGaUM7S0FBcEIsQ0F2SkY7O0FBcUtmLE1BQUUsZ0JBQUYsR0FBcUIsVUFBVSxVQUFWLEVBQXNCO0FBQ3ZDLFlBQUksS0FBSyxVQUFMLEVBQWlCO0FBQ2pCLGlCQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsS0FBdkIsR0FBK0IsS0FBL0IsQ0FEaUI7QUFFakIsZ0JBQUcsQ0FBQyxLQUFLLHNCQUFMLENBQTRCLEtBQTVCLEVBQWtDO0FBQ2xDLG9CQUFHLEtBQUssVUFBTCxLQUFvQixVQUFwQixFQUErQjtBQUM5Qix3QkFBSSxrQkFBa0IsS0FBSyxVQUFMLENBQWdCLFFBQWhCLENBQXlCLE9BQXpCLENBQWlDLFVBQWpDLENBQWxCLENBRDBCO0FBRTlCLHdCQUFHLENBQUMsZUFBRCxFQUNDLEtBQUssVUFBTCxDQUFnQixJQUFoQixDQUFxQixLQUFyQixHQUE2QixLQUE3QixDQURKO2lCQUZKO2FBREo7U0FGSjtBQVVBLGFBQUssVUFBTCxHQUFrQixVQUFsQixDQVh1QztBQVl2QyxhQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsS0FBdkIsR0FBK0IsSUFBL0IsQ0FadUM7S0FBdEIsQ0FyS047O0FBb0xmLE1BQUUsV0FBRixHQUFnQixVQUFVLElBQVYsRUFBZSxNQUFmLEVBQXVCO0FBQ25DLFlBQUcsSUFBSCxFQUFRO0FBQ0osZ0JBQUcsS0FBSyxrQkFBTCxDQUF3QixLQUF4QixFQUE4QjtBQUM3QixvQkFBSSxVQUFVLEtBQUssV0FBTCxHQUFtQixLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBbkIsR0FBNEMsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBRDdCO0FBRTdCLG9CQUFJLEtBQUssWUFBTCxJQUFxQixLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBckIsRUFDQSxPQUFPLEtBQUssWUFBTCxDQUFrQixPQUFsQixDQUFQLENBREo7YUFGSixNQUlLO0FBQ0QsdUJBQU8sU0FBUyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsQ0FBeUIsUUFBekIsR0FBcUMsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLFdBQXpCLENBRHBEO2FBSkw7U0FESixNQVNJLE9BQU8sRUFBUCxDQVRKO0tBRFksQ0FwTEQ7O0FBaU1mLE1BQUUsYUFBRixHQUFrQixVQUFXLE1BQVgsRUFBbUI7QUFDakMsZUFBTyxTQUFTLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQUF5QixRQUF6QixHQUFvQyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsQ0FBeUIsV0FBekIsQ0FEbkI7S0FBbkI7OztBQWpNSCxTQXVNZixDQUFNLGFBQU4sQ0FBb0IsdUJBQXBCLEVBQTZDLFVBQTdDLEVBdk1lOztBQXlNZixXQUFPLE9BQVAsR0FBaUIsVUFBakIsQ0F6TWU7Q0FBbEIsRUEyTUMsTUEzTUQsQ0FBRCIsImZpbGUiOiJUcmVlQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5pbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBUcmVlQ29uZmlnKCkge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRyZWVJY29uU3RhdGVcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW5hYmxlRGF0YVR5cGVJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFsaWduXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwibGVmdFwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm5vZGVQYWRkaW5nXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiMjBweFwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByb290Tm9kZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IE5vZGVDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByb290U3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vZGVTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVhZlN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RlZExlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZlTGVhZlN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmFuY2hTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9kZUljb25TdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVhZkljb25TdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxsb3dNdWx0aXBsZVNlbGVjdGlvbjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhVHlwZXNNYXAgPSBudWxsO1xuICAgICAgICB0aGlzLmdldERhdGFUeXBlID0gbnVsbDtcblxuICAgICAgICB0aGlzLmJyYW5jaFN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZVN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cInJvdy1yZXZlcnNlXCIgOiBcInJvd1wiLFxuICAgICAgICAgICAgXCJhbGlnbkl0ZW1zXCI6XCJjZW50ZXJcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJub2RlRGVmYXVsdFwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZm9sZGVyIGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtZm9sZGVyXCIsXG4gICAgICAgICAgICBcIm5vZGVPcGVuXCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1mb2xkZXItb3BlbiBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhIGZhLWZvbGRlci1vcGVuXCIsXG4gICAgICAgICAgICBcImxlYWZEZWZhdWx0XCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1maWxlLXRleHQgZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1maWxlLXRleHRcIixcbiAgICAgICAgICAgIFwibGVhZk9wZW5cIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWZpbGUtdGV4dC1vIGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEtZmlsZS10ZXh0LW9cIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlSWNvblN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgaGVpZ2h0IDogXCIyMHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6XCIycHhcIlxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmxlYWZTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJyb3ctcmV2ZXJzZVwiIDogXCJyb3dcIixcbiAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOlwiY2VudGVyXCJcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5hY3RpdmVMZWFmU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImJhY2tncm91bmRcIiA6IFwib3JhbmdlXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVmYXVsdFNlbGVjdGVkTm9kZXMgPSBbXTtcblxuICAgICAgICAvL3RvZG8gbW92ZSB0aGlzIHRvIGNvbXBvbmVudE1hbmFnZXIgZGVmYXVsdENhbGxiYWNrc1xuICAgICAgICB0aGlzLnJldmVyc2VMYXlvdXQuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy51cGRhdGVTdHlsZSk7XG4gICAgfVxuXG5cbiAgICB2YXIgcCA9IFRyZWVDb25maWcucHJvdG90eXBlO1xuXG4gICAgcC51cGRhdGVTdHlsZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBmbGV4RGlyID0gdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wicm93LXJldmVyc2VcIjpcInJvd1wiO1xuICAgICAgICB0aGlzLm5vZGVTdHlsZS5zdGF0ZSA9IHtmbGV4RGlyZWN0aW9uOmZsZXhEaXJ9O1xuICAgICAgICB0aGlzLmxlYWZTdHlsZS5zdGF0ZSA9IHtmbGV4RGlyZWN0aW9uOmZsZXhEaXJ9O1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmZsaXBJY29ucyh0aGlzLFtcInRyZWVJY29uU3RhdGVcIl0pO1xuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBtZXJnZUludG8gKGludG8sIG9iaikge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG5cbiAgICBwLmdldExlYWZTdHlsZSA9IGZ1bmN0aW9uKG9wZW4sIGFjdGl2ZSl7XG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMubGVhZlN0eWxlLnN0YXRlO1xuICAgICAgICBpZihvcGVuKXtcbiAgICAgICAgICAgIG1lcmdlSW50byhzdHlsZSx0aGlzLnNlbGVjdGVkTGVhZlN0eWxlLnN0YXRlKVxuICAgICAgICAgICAgaWYoYWN0aXZlKVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXJnZUludG8oc3R5bGUsdGhpcy5hY3RpdmVMZWFmU3R5bGUuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENoaWxkcmVuU3RhdGVUb09wZW4ocGFyZW50Tm9kZSxvcGVuTm9kZXMpe1xuICAgICAgICB2YXIgbm9kZXMgPSBwYXJlbnROb2RlLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgaWYobm9kZXMgJiYgbm9kZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVJbmRleCA9IG9wZW5Ob2Rlcy5pbmRleE9mKG5vZGUubGFiZWwuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGlmKG5vZGVJbmRleCA+IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgb3Blbk5vZGVzLnNwbGljZShub2RlSW5kZXgsMSk7XG4gICAgICAgICAgICAgICAgICAgIHNldENoaWxkcmVuU3RhdGVUb09wZW4obm9kZSxvcGVuTm9kZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3RvLWRvIGRvIHRoaXMgZm9yIGVudGlyZSB0cmVlIHJhdGhlciBvbmx5IGZvciB0aGUgZmlyc3QgY2hpbGRcbiAgICBwLnNldERlZmF1bHROb2RlU2VsZWN0aW9uID0gZnVuY3Rpb24obm9kZXNMYWJlbCl7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNlbGVjdGVkTm9kZXMgPSBub2Rlc0xhYmVsXG4gICAgICAgIC8vc2V0Q2hpbGRyZW5TdGF0ZVRvT3Blbih0aGlzLnJvb3ROb2RlLG5vZGVzTGFiZWwpXG4gICAgfVxuXG4gICAgLy90by1kbyBkbyB0aGlzIGZvciBlbnRpcmUgdHJlZSByYXRoZXIgb25seSBmb3IgdGhlIGZpcnN0IGNoaWxkXG4gICAgcC5zZXRPcGVuTm9kZXMgPSBmdW5jdGlvbihub2Rlc0xhYmVsKXtcbiAgICAgICAgdmFyIHJvb3ROb2RlcyA9IHRoaXMucm9vdE5vZGUuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICByb290Tm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgaWYobm9kZXNMYWJlbC5pbmRleE9mKG5vZGUubGFiZWwuc3RhdGUpID4gLTEpe1xuICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcblxuICAgIH1cblxuICAgIHAuY2hhbmdlQWN0aXZlTm9kZSA9IGZ1bmN0aW9uIChub2RlQ29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZU5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTm9kZS5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKCF0aGlzLmFsbG93TXVsdGlwbGVTZWxlY3Rpb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlTm9kZSAhPT0gbm9kZUNvbmZpZyl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVOb2RlQ2hpbGQgPSB0aGlzLmFjdGl2ZU5vZGUuY2hpbGRyZW4uZ2V0TmFtZShub2RlQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWFjdGl2ZU5vZGVDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTm9kZS5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG5vZGVDb25maWc7XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZS5hY3RpdmUudmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIHAuZ2V0RmlsZUljb24gPSBmdW5jdGlvbiAoZGF0YSxpc09wZW4pIHtcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBpZih0aGlzLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSl7XG4gICAgICAgICAgICAgICAgdmFyIGRhdFR5cGUgPSB0aGlzLmdldERhdGFUeXBlID8gdGhpcy5nZXREYXRhVHlwZShkYXRhKSA6IGRhdGEuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhVHlwZXNNYXAgJiYgdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBpc09wZW4gPyB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUubGVhZk9wZW4gIDogdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLmxlYWZEZWZhdWx0IDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2VcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIHAuZ2V0Rm9sZGVySWNvbiA9IGZ1bmN0aW9uICggaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBpc09wZW4gPyB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUubm9kZU9wZW4gOiB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUubm9kZURlZmF1bHQ7XG4gICAgfVxuXG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LlRyZWVDb25maWcnLCBUcmVlQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gVHJlZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
