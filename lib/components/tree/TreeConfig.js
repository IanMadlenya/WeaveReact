"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeConfig = require("./NodeConfig");

var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeConfig = function () {
    function TreeConfig() {
        _classCallCheck(this, TreeConfig);

        _ComponentManager2.default.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            treeIconState: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            enableDataTypeIcon: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            align: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
            },
            nodePadding: {
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
            nodeListStyle: {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            nodeIconStyle: {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            leafStyle: {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            leafIconStyle: {
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
            enableAccordionMode: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            selectionType: { // radio | check
                value: Weave.linkableChild(this, weavejs.core.LinkableString)
            },
            defaultSelectedNodes: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            enableMenuModeFromLevel: {
                value: Weave.linkableChild(this, weavejs.core.LinkableNumber)
            }
        });

        this.dataTypesMap = null;
        this.getDataType = null;

        this.defaultSelectedNodes.state = [];

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
            "select": this.reverseLayout.state ? "fa fa-check-square-o fa-flip-horizontal" : "fa fa-check-square-o",
            "unSelect": this.reverseLayout.state ? "fa fa-square-o fa-flip-horizontal" : "fa fa-square-o"
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

        //todo move this to componentManager defaultCallbacks
        this.reverseLayout.addImmediateCallback(this, this.updateStyle);
    }

    _createClass(TreeConfig, [{
        key: "updateStyle",
        value: function updateStyle() {
            var flexDir = this.reverseLayout.state ? "row-reverse" : "row";
            this.nodeStyle.state = { flexDirection: flexDir };
            this.leafStyle.state = { flexDirection: flexDir };
            _ComponentManager2.default.flipIcons(this, ["treeIconState"]);
        }
    }, {
        key: "mergeInto",
        value: function mergeInto(into, obj) {
            for (var attr in obj) {
                into[attr] = obj[attr];
            }
            return into;
        }
    }, {
        key: "getLeafStyle",
        value: function getLeafStyle(selected, active) {
            var style = this.leafStyle.state;
            if (selected) {
                this.mergeInto(style, this.selectedLeafStyle.state);
                if (active) return this.mergeInto(style, this.activeLeafStyle.state);
            }
            return style;
        }
    }, {
        key: "getListStyle",
        value: function getListStyle() {
            var style = this.nodeListStyle.state;
            return style;
        }
    }, {
        key: "getStyleForIconType",
        value: function getStyleForIconType(type, iconName) {
            var iconStyleObj = type == "branch" ? this.nodeIconStyle.state : this.leafIconStyle.state;

            return iconStyleObj;
        }
    }, {
        key: "setDefaultNodeSelection",


        //to-do do this for entire tree rather only for the first child
        value: function setDefaultNodeSelection(nodesLabel) {
            this.defaultSelectedNodes.state = nodesLabel;
        }
    }, {
        key: "getActiveAncestorNode",
        value: function getActiveAncestorNode(nodeConfig) {
            if (nodeConfig.active.state) {
                return null;
            }

            var lhmOwner = Weave.getOwner(nodeConfig);
            var owner = Weave.getOwner(lhmOwner); // lHM -> NodeConfig
            if (!owner || owner.constructor !== nodeConfig.constructor) {
                return null;
            } else if (owner.active.state) {
                return owner;
            } else {
                return this.getActiveAncestorNode(owner);
            }
        }
    }, {
        key: "getActiveSiblingNode",
        value: function getActiveSiblingNode(nodeConfig) {

            var owner = Weave.getOwner(nodeConfig);
            if (!owner || owner.constructor !== nodeConfig.constructor) {
                return null;
            }
            var children = owner.getObjects();
            for (var i = 0; i < children.length; i++) {
                if (nodeConfig !== children[i]) {
                    if (children[i].active.state) return children[i];
                }
            }

            return null;
        }
    }, {
        key: "changeActiveNode",
        value: function changeActiveNode(nodeConfig, eventType) {
            var lhmOwner = Weave.getOwner(nodeConfig);
            var parentNode = Weave.getOwner(lhmOwner); // lHM -> NodeConfig
            var activeSiblingNode = this.getActiveSiblingNode(nodeConfig);
            var activeAncestorNode = this.getActiveAncestorNode(nodeConfig);

            /*** active Mode (Active State Update) ****/
            if (activeAncestorNode) activeAncestorNode.active.value = false;
            if (activeSiblingNode) activeSiblingNode.active.value = false;

            nodeConfig.active.value = true;

            /*** selection Mode (Select state Update) ****/
            if (this.selectionType.value) {
                if (this.selectionType.value == "radio") {
                    if (activeSiblingNode) activeSiblingNode.select.value = false;

                    if (parentNode && parentNode.openedChild && parentNode.openedChild !== nodeConfig) {
                        parentNode.openedChild.select.value = false;
                    }

                    nodeConfig.select.value = true;
                } else if (this.selectionType.value == "check") // toggle selection
                    {
                        nodeConfig.select.value = !nodeConfig.select.value;
                    }
            }

            /*** Open Mode (Open State Udpate) ****/
            if (this.enableAccordionMode.state) // accordion Mode
                {
                    if (activeSiblingNode) activeSiblingNode.open.value = false;

                    if (parentNode && parentNode.openedChild && parentNode.openedChild !== nodeConfig) {
                        parentNode.openedChild.open.value = false;
                    }
                }
            nodeConfig.open.state = !nodeConfig.open.state; // toggle open state

            parentNode.openedChild = nodeConfig;
        }
    }, {
        key: "getFileIcon",
        value: function getFileIcon(data, isOpen) {
            if (data) {
                if (this.enableDataTypeIcon.value) {
                    var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
                    if (this.dataTypesMap && this.dataTypesMap[datType]) return this.dataTypesMap[datType];
                } else {
                    return isOpen ? this.treeIconState.state.leafOpen : this.treeIconState.state.leafDefault;
                }
            } else return "";
        }
    }, {
        key: "getFolderIcon",
        value: function getFolderIcon(isOpen) {
            return isOpen ? this.treeIconState.state.nodeOpen : this.treeIconState.state.nodeDefault;
        }
    }, {
        key: "getSelectIcon",
        value: function getSelectIcon(isSelected) {
            return isSelected ? this.treeIconState.state["select"] : this.treeIconState.state["unSelect"];
        }
    }]);

    return TreeConfig;
}();

//This Function makes this class as SessionClass


exports.default = TreeConfig;
Weave.registerClass(TreeConfig, ['weavereact.TreeConfig'], [weavejs.api.core.ILinkableObject], "Tree Config");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3FCO0FBQ2pCLGFBRGlCLFVBQ2pCLEdBQ0E7OEJBRmlCLFlBRWpCOztBQUNJLG1DQUFpQiw4QkFBakIsQ0FBZ0QsSUFBaEQsRUFESjs7QUFHSSxlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLDJCQUFjO0FBQ1YsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0EsZ0NBQW9CO0FBQ2hCLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsS0FBakMsQ0FBMUIsQ0FBUDthQURKO0FBR0EsbUJBQU87QUFDSCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLE1BQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLHlCQUFhO0FBQ1QsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixNQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSxzQkFBUztBQUNMLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwwQkFBMUIsQ0FBUDthQURKO0FBR0EsdUJBQVU7QUFDTix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7YUFESjtBQUdBLHVCQUFVO0FBQ04sdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO2FBREo7QUFHQSwyQkFBYztBQUNWLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDthQURKO0FBR0EsMkJBQWM7QUFDVix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7YUFESjtBQUdBLHVCQUFVO0FBQ04sdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO2FBREo7QUFHQSwyQkFBYztBQUNWLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDthQURKO0FBR0EsK0JBQWtCO0FBQ2QsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO2FBREo7QUFHQSw2QkFBZ0I7QUFDWix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7YUFESjtBQUdBLHlCQUFZO0FBQ1IsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO2FBREo7QUFHQSxpQ0FBb0I7QUFDaEIsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTJCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUEzQixDQUFQO2FBREo7QUFHQSwyQkFBYztBQUNWLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUE0QixRQUFRLElBQVIsQ0FBYSxjQUFiLENBQW5DO2FBREo7QUFHQSxrQ0FBcUI7QUFDakIsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTJCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBL0IsQ0FBUDthQURKO0FBR0EscUNBQXdCO0FBQ3BCLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEyQixRQUFRLElBQVIsQ0FBYSxjQUFiLENBQWxDO2FBREo7U0FwREosRUFISjs7QUE2REksYUFBSyxZQUFMLEdBQW9CLElBQXBCLENBN0RKO0FBOERJLGFBQUssV0FBTCxHQUFtQixJQUFuQixDQTlESjs7QUFnRUksYUFBSyxvQkFBTCxDQUEwQixLQUExQixHQUFrQyxFQUFsQyxDQWhFSjs7QUFrRUksYUFBSyxXQUFMLENBQWlCLEtBQWpCLEdBQXlCO0FBQ3JCLHVCQUFXLE1BQVg7QUFDQSw2QkFBaUIsUUFBakI7U0FGSixDQWxFSjs7QUF1RUksYUFBSyxTQUFMLENBQWUsS0FBZixHQUF1QjtBQUNuQix1QkFBVyxNQUFYO0FBQ0EsNkJBQWlCLEtBQUssYUFBTCxDQUFtQixLQUFuQixHQUF5QixhQUF6QixHQUF5QyxLQUF6QztBQUNqQiwwQkFBYSxRQUFiO1NBSEo7Ozs7QUF2RUosWUErRUksQ0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQTJCO0FBQ3ZCLDJCQUFnQixLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBeUIsaUNBQXpCLEdBQTJELGNBQTNEO0FBQ2hCLHdCQUFhLEtBQUssYUFBTCxDQUFtQixLQUFuQixHQUF5QixzQ0FBekIsR0FBZ0UsbUJBQWhFO0FBQ2IsMkJBQWdCLEtBQUssYUFBTCxDQUFtQixLQUFuQixHQUF5QixvQ0FBekIsR0FBOEQsaUJBQTlEO0FBQ2hCLHdCQUFhLEtBQUssYUFBTCxDQUFtQixLQUFuQixHQUF5QixzQ0FBekIsR0FBZ0UsZ0JBQWhFO0FBQ2Isc0JBQVMsS0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQXlCLHlDQUF6QixHQUFtRSxzQkFBbkU7QUFDVCx3QkFBVyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBeUIsbUNBQXpCLEdBQTZELGdCQUE3RDtTQU5mLENBL0VKOztBQXdGSSxhQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBMkI7QUFDdkIsbUJBQU8sTUFBUDtBQUNBLG9CQUFTLE1BQVQ7QUFDQSwwQkFBYSxLQUFiO1NBSEosQ0F4Rko7O0FBK0ZJLGFBQUssU0FBTCxDQUFlLEtBQWYsR0FBdUI7QUFDbkIsdUJBQVcsTUFBWDtBQUNBLDZCQUFpQixLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBeUIsYUFBekIsR0FBeUMsS0FBekM7QUFDakIsMEJBQWEsUUFBYjtTQUhKLENBL0ZKOztBQXNHSSxhQUFLLGVBQUwsQ0FBcUIsS0FBckIsR0FBNkI7QUFDekIsMEJBQWUsUUFBZjtTQURKOzs7QUF0R0osWUEyR0ksQ0FBSyxhQUFMLENBQW1CLG9CQUFuQixDQUF3QyxJQUF4QyxFQUE4QyxLQUFLLFdBQUwsQ0FBOUMsQ0EzR0o7S0FEQTs7aUJBRGlCOztzQ0FrSGpCO0FBQ0ksZ0JBQUksVUFBVSxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBeUIsYUFBekIsR0FBdUMsS0FBdkMsQ0FEbEI7QUFFSSxpQkFBSyxTQUFMLENBQWUsS0FBZixHQUF1QixFQUFDLGVBQWMsT0FBZCxFQUF4QixDQUZKO0FBR0ksaUJBQUssU0FBTCxDQUFlLEtBQWYsR0FBdUIsRUFBQyxlQUFjLE9BQWQsRUFBeEIsQ0FISjtBQUlJLHVDQUFpQixTQUFqQixDQUEyQixJQUEzQixFQUFnQyxDQUFDLGVBQUQsQ0FBaEMsRUFKSjs7OztrQ0FRVyxNQUFNLEtBQ2hCO0FBQ0csaUJBQUssSUFBSSxJQUFKLElBQVksR0FBakIsRUFBc0I7QUFDbEIscUJBQUssSUFBTCxJQUFhLElBQUksSUFBSixDQUFiLENBRGtCO2FBQXRCO0FBR0EsbUJBQU8sSUFBUCxDQUpIOzs7O3FDQU9ZLFVBQVMsUUFDdEI7QUFDSSxnQkFBSSxRQUFRLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FEaEI7QUFFSSxnQkFBRyxRQUFILEVBQVk7QUFDUixxQkFBSyxTQUFMLENBQWUsS0FBZixFQUFxQixLQUFLLGlCQUFMLENBQXVCLEtBQXZCLENBQXJCLENBRFE7QUFFUixvQkFBRyxNQUFILEVBQ0ksT0FBTyxLQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXFCLEtBQUssZUFBTCxDQUFxQixLQUFyQixDQUE1QixDQURKO2FBRko7QUFLQSxtQkFBTyxLQUFQLENBUEo7Ozs7dUNBYUQ7QUFDSyxnQkFBSSxRQUFRLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQURqQjtBQUVLLG1CQUFPLEtBQVAsQ0FGTDs7Ozs0Q0FLcUIsTUFBSyxVQUN6QjtBQUNJLGdCQUFJLGVBQWUsSUFBQyxJQUFRLFFBQVIsR0FBcUIsS0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQTJCLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQUR4RTs7QUFHSSxtQkFBTyxZQUFQLENBSEo7Ozs7Ozs7Z0RBU3dCLFlBQ3hCO0FBQ0ksaUJBQUssb0JBQUwsQ0FBMEIsS0FBMUIsR0FBa0MsVUFBbEMsQ0FESjs7Ozs4Q0FNdUIsWUFDdkI7QUFDSSxnQkFBRyxXQUFXLE1BQVgsQ0FBa0IsS0FBbEIsRUFDSDtBQUNJLHVCQUFPLElBQVAsQ0FESjthQURBOztBQUtBLGdCQUFJLFdBQVcsTUFBTSxRQUFOLENBQWUsVUFBZixDQUFYLENBTlI7QUFPSSxnQkFBSyxRQUFRLE1BQU0sUUFBTixDQUFlLFFBQWYsQ0FBUjtBQVBULGdCQVFPLENBQUMsS0FBRCxJQUFXLE1BQU0sV0FBTixLQUFzQixXQUFXLFdBQVgsRUFDcEM7QUFDSSx1QkFBTyxJQUFQLENBREo7YUFEQSxNQUlLLElBQUcsTUFBTSxNQUFOLENBQWEsS0FBYixFQUNSO0FBQ0ksdUJBQU8sS0FBUCxDQURKO2FBREssTUFJRDtBQUNBLHVCQUFPLEtBQUsscUJBQUwsQ0FBMkIsS0FBM0IsQ0FBUCxDQURBO2FBSkM7Ozs7NkNBV1ksWUFDckI7O0FBRUksZ0JBQUksUUFBUSxNQUFNLFFBQU4sQ0FBZSxVQUFmLENBQVIsQ0FGUjtBQUdJLGdCQUFHLENBQUMsS0FBRCxJQUFXLE1BQU0sV0FBTixLQUFzQixXQUFXLFdBQVgsRUFDcEM7QUFDSSx1QkFBTyxJQUFQLENBREo7YUFEQTtBQUlBLGdCQUFJLFdBQVcsTUFBTSxVQUFOLEVBQVgsQ0FQUjtBQVFJLGlCQUFJLElBQUksSUFBSSxDQUFKLEVBQVEsSUFBSSxTQUFTLE1BQVQsRUFBa0IsR0FBdEMsRUFDQTtBQUNJLG9CQUFHLGVBQWUsU0FBUyxDQUFULENBQWYsRUFDSDtBQUNJLHdCQUFHLFNBQVMsQ0FBVCxFQUFZLE1BQVosQ0FBbUIsS0FBbkIsRUFDQyxPQUFPLFNBQVMsQ0FBVCxDQUFQLENBREo7aUJBRko7YUFGSjs7QUFVQSxtQkFBTyxJQUFQLENBbEJKOzs7O3lDQXdCaUIsWUFBVyxXQUM1QjtBQUNJLGdCQUFJLFdBQVcsTUFBTSxRQUFOLENBQWUsVUFBZixDQUFYLENBRFI7QUFFSSxnQkFBSSxhQUFhLE1BQU0sUUFBTixDQUFlLFFBQWYsQ0FBYjtBQUZSLGdCQUdRLG9CQUFvQixLQUFLLG9CQUFMLENBQTBCLFVBQTFCLENBQXBCLENBSFI7QUFJSSxnQkFBSSxxQkFBcUIsS0FBSyxxQkFBTCxDQUEyQixVQUEzQixDQUFyQjs7O0FBSlIsZ0JBUU8sa0JBQUgsRUFDSSxtQkFBbUIsTUFBbkIsQ0FBMEIsS0FBMUIsR0FBa0MsS0FBbEMsQ0FESjtBQUVBLGdCQUFHLGlCQUFILEVBQ0ksa0JBQWtCLE1BQWxCLENBQXlCLEtBQXpCLEdBQWlDLEtBQWpDLENBREo7O0FBR0EsdUJBQVcsTUFBWCxDQUFrQixLQUFsQixHQUEwQixJQUExQjs7O0FBYkosZ0JBZ0JPLEtBQUssYUFBTCxDQUFtQixLQUFuQixFQUNIO0FBQ0ksb0JBQUcsS0FBSyxhQUFMLENBQW1CLEtBQW5CLElBQTRCLE9BQTVCLEVBQ0g7QUFDSSx3QkFBRyxpQkFBSCxFQUNJLGtCQUFrQixNQUFsQixDQUF5QixLQUF6QixHQUFpQyxLQUFqQyxDQURKOztBQUdBLHdCQUFHLGNBQWMsV0FBVyxXQUFYLElBQTJCLFdBQVcsV0FBWCxLQUEyQixVQUEzQixFQUM1QztBQUNJLG1DQUFXLFdBQVgsQ0FBdUIsTUFBdkIsQ0FBOEIsS0FBOUIsR0FBc0MsS0FBdEMsQ0FESjtxQkFEQTs7QUFLQSwrQkFBVyxNQUFYLENBQWtCLEtBQWxCLEdBQTBCLElBQTFCLENBVEo7aUJBREEsTUFZSyxJQUFHLEtBQUssYUFBTCxDQUFtQixLQUFuQixJQUE0QixPQUE1QjtBQUNSO0FBQ0ksbUNBQVcsTUFBWCxDQUFrQixLQUFsQixHQUEwQixDQUFDLFdBQVcsTUFBWCxDQUFrQixLQUFsQixDQUQvQjtxQkFESzthQWRUOzs7QUFoQkosZ0JBdUNXLEtBQUssbUJBQUwsQ0FBeUIsS0FBekI7QUFDSDtBQUNJLHdCQUFHLGlCQUFILEVBQ0ksa0JBQWtCLElBQWxCLENBQXVCLEtBQXZCLEdBQStCLEtBQS9CLENBREo7O0FBR0Esd0JBQUcsY0FBYyxXQUFXLFdBQVgsSUFBMkIsV0FBVyxXQUFYLEtBQTJCLFVBQTNCLEVBQzVDO0FBQ0ksbUNBQVcsV0FBWCxDQUF1QixJQUF2QixDQUE0QixLQUE1QixHQUFvQyxLQUFwQyxDQURKO3FCQURBO2lCQUxKO0FBV0EsdUJBQVcsSUFBWCxDQUFnQixLQUFoQixHQUF3QixDQUFDLFdBQVcsSUFBWCxDQUFnQixLQUFoQjs7QUFsRGpDLHNCQXNESSxDQUFXLFdBQVgsR0FBeUIsVUFBekIsQ0F0REo7Ozs7b0NBMkRZLE1BQUssUUFDakI7QUFDSSxnQkFBRyxJQUFILEVBQVE7QUFDSixvQkFBRyxLQUFLLGtCQUFMLENBQXdCLEtBQXhCLEVBQThCO0FBQzdCLHdCQUFJLFVBQVUsS0FBSyxXQUFMLEdBQW1CLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFuQixHQUE0QyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FEN0I7QUFFN0Isd0JBQUksS0FBSyxZQUFMLElBQXFCLEtBQUssWUFBTCxDQUFrQixPQUFsQixDQUFyQixFQUNBLE9BQU8sS0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQVAsQ0FESjtpQkFGSixNQUlLO0FBQ0QsMkJBQU8sU0FBUyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsQ0FBeUIsUUFBekIsR0FBcUMsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLFdBQXpCLENBRHBEO2lCQUpMO2FBREosTUFTSSxPQUFPLEVBQVAsQ0FUSjs7OztzQ0FjVyxRQUNmO0FBQ0ksbUJBQU8sU0FBUyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsQ0FBeUIsUUFBekIsR0FBb0MsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLFdBQXpCLENBRHhEOzs7O3NDQUllLFlBQ2Y7QUFDSSxtQkFBTyxhQUFhLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQUF5QixRQUF6QixDQUFiLEdBQWtELEtBQUssYUFBTCxDQUFtQixLQUFuQixDQUF5QixVQUF6QixDQUFsRCxDQURYOzs7O1dBelNpQjs7Ozs7OztBQWlUakIsTUFBTSxhQUFOLENBQXFCLFVBQXJCLEVBQWdDLENBQUMsdUJBQUQsQ0FBaEMsRUFBMEQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTNELEVBQTZGLGFBQTdGIiwiZmlsZSI6IlRyZWVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL05vZGVDb25maWdcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZUNvbmZpZ3tcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICB0cmVlSWNvblN0YXRlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmFibGVEYXRhVHlwZUljb246IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxpZ246IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwibGVmdFwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlUGFkZGluZzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMHB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3ROb2RlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTm9kZUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3RTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9kZVN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlTGlzdFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlSWNvblN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYWZJY29uU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkTGVhZlN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyYW5jaFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmFibGVBY2NvcmRpb25Nb2RlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCAgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGlvblR5cGU6eyAvLyByYWRpbyB8IGNoZWNrXG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgICB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmYXVsdFNlbGVjdGVkTm9kZXM6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsICBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmFibGVNZW51TW9kZUZyb21MZXZlbDp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgIHdlYXZlanMuY29yZS5MaW5rYWJsZU51bWJlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2V0RGF0YVR5cGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuZGVmYXVsdFNlbGVjdGVkTm9kZXMuc3RhdGUgPSBbXTtcblxuICAgICAgICB0aGlzLmJyYW5jaFN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5vZGVTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJyb3ctcmV2ZXJzZVwiIDogXCJyb3dcIixcbiAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOlwiY2VudGVyXCJcbiAgICAgICAgfTtcblxuICAgICAgICAvL3RvZG8gLSBhZGQgZ2V0dGVyIHNldHRlciB0byBmYWNpbGl0YXRlIHNldHRpbmdzIG9ubHkgb25lIHN0YXRlXG4gICAgICAgIC8vIG9yIGNyZWF0ZSBsaWtlIElubGluZVN0eWxlXG4gICAgICAgIHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwibm9kZURlZmF1bHRcIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWZvbGRlciBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhIGZhLWZvbGRlclwiLFxuICAgICAgICAgICAgXCJub2RlT3BlblwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZm9sZGVyLW9wZW4gZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1mb2xkZXItb3BlblwiLFxuICAgICAgICAgICAgXCJsZWFmRGVmYXVsdFwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZmlsZS10ZXh0IGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtZmlsZS10ZXh0XCIsXG4gICAgICAgICAgICBcImxlYWZPcGVuXCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1maWxlLXRleHQtbyBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhLWZpbGUtdGV4dC1vXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiOnRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWNoZWNrLXNxdWFyZS1vIGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtY2hlY2stc3F1YXJlLW9cIixcbiAgICAgICAgICAgIFwidW5TZWxlY3RcIjp0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1zcXVhcmUtbyBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhIGZhLXNxdWFyZS1vXCIsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ub2RlSWNvblN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgaGVpZ2h0IDogXCIyMHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6XCIycHhcIlxuICAgICAgICB9O1xuXG5cbiAgICAgICAgdGhpcy5sZWFmU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wicm93LXJldmVyc2VcIiA6IFwicm93XCIsXG4gICAgICAgICAgICBcImFsaWduSXRlbXNcIjpcImNlbnRlclwiXG4gICAgICAgIH07XG5cblxuICAgICAgICB0aGlzLmFjdGl2ZUxlYWZTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZFwiIDogXCJvcmFuZ2VcIlxuICAgICAgICB9O1xuXG4gICAgICAgIC8vdG9kbyBtb3ZlIHRoaXMgdG8gY29tcG9uZW50TWFuYWdlciBkZWZhdWx0Q2FsbGJhY2tzXG4gICAgICAgIHRoaXMucmV2ZXJzZUxheW91dC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0eWxlKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZVN0eWxlKClcbiAgICB7XG4gICAgICAgIHZhciBmbGV4RGlyID0gdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wicm93LXJldmVyc2VcIjpcInJvd1wiO1xuICAgICAgICB0aGlzLm5vZGVTdHlsZS5zdGF0ZSA9IHtmbGV4RGlyZWN0aW9uOmZsZXhEaXJ9O1xuICAgICAgICB0aGlzLmxlYWZTdHlsZS5zdGF0ZSA9IHtmbGV4RGlyZWN0aW9uOmZsZXhEaXJ9O1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmZsaXBJY29ucyh0aGlzLFtcInRyZWVJY29uU3RhdGVcIl0pO1xuICAgIH1cblxuXG4gICAgIG1lcmdlSW50byhpbnRvLCBvYmopXG4gICAgIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludG87XG4gICAgfTtcblxuICAgIGdldExlYWZTdHlsZShzZWxlY3RlZCxhY3RpdmUpXG4gICAge1xuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLmxlYWZTdHlsZS5zdGF0ZTtcbiAgICAgICAgaWYoc2VsZWN0ZWQpe1xuICAgICAgICAgICAgdGhpcy5tZXJnZUludG8oc3R5bGUsdGhpcy5zZWxlY3RlZExlYWZTdHlsZS5zdGF0ZSk7XG4gICAgICAgICAgICBpZihhY3RpdmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVyZ2VJbnRvKHN0eWxlLHRoaXMuYWN0aXZlTGVhZlN0eWxlLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfTtcblxuXG5cbiAgIGdldExpc3RTdHlsZSgpXG4gICB7XG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMubm9kZUxpc3RTdHlsZS5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH07XG5cbiAgICBnZXRTdHlsZUZvckljb25UeXBlKHR5cGUsaWNvbk5hbWUpXG4gICAge1xuICAgICAgICB2YXIgaWNvblN0eWxlT2JqID0gKHR5cGUgPT0gXCJicmFuY2hcIikgPyAgdGhpcy5ub2RlSWNvblN0eWxlLnN0YXRlIDogdGhpcy5sZWFmSWNvblN0eWxlLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiBpY29uU3R5bGVPYmo7XG4gICAgfTtcblxuXG5cbiAgICAvL3RvLWRvIGRvIHRoaXMgZm9yIGVudGlyZSB0cmVlIHJhdGhlciBvbmx5IGZvciB0aGUgZmlyc3QgY2hpbGRcbiAgICBzZXREZWZhdWx0Tm9kZVNlbGVjdGlvbihub2Rlc0xhYmVsKVxuICAgIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5zdGF0ZSA9IG5vZGVzTGFiZWxcbiAgICB9O1xuXG5cblxuICAgIGdldEFjdGl2ZUFuY2VzdG9yTm9kZSAobm9kZUNvbmZpZylcbiAgICB7XG4gICAgICAgIGlmKG5vZGVDb25maWcuYWN0aXZlLnN0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaG1Pd25lciA9IFdlYXZlLmdldE93bmVyKG5vZGVDb25maWcpO1xuICAgICAgICBsZXQgIG93bmVyID0gV2VhdmUuZ2V0T3duZXIobGhtT3duZXIpOyAvLyBsSE0gLT4gTm9kZUNvbmZpZ1xuICAgICAgICBpZighb3duZXIgfHwgKG93bmVyLmNvbnN0cnVjdG9yICE9PSBub2RlQ29uZmlnLmNvbnN0cnVjdG9yKSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYob3duZXIuYWN0aXZlLnN0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gb3duZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFjdGl2ZUFuY2VzdG9yTm9kZShvd25lcik7XG4gICAgICAgIH1cblxuXG4gICAgfTtcblxuICAgIGdldEFjdGl2ZVNpYmxpbmdOb2RlKG5vZGVDb25maWcpXG4gICAge1xuXG4gICAgICAgIGxldCBvd25lciA9IFdlYXZlLmdldE93bmVyKG5vZGVDb25maWcpO1xuICAgICAgICBpZighb3duZXIgfHwgKG93bmVyLmNvbnN0cnVjdG9yICE9PSBub2RlQ29uZmlnLmNvbnN0cnVjdG9yKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoaWxkcmVuID0gb3duZXIuZ2V0T2JqZWN0cygpO1xuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IGNoaWxkcmVuLmxlbmd0aCA7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYobm9kZUNvbmZpZyAhPT0gY2hpbGRyZW5baV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0uYWN0aXZlLnN0YXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW5baV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cblxuXG5cbiAgICBjaGFuZ2VBY3RpdmVOb2RlKG5vZGVDb25maWcsZXZlbnRUeXBlIClcbiAgICB7XG4gICAgICAgIGxldCBsaG1Pd25lciA9IFdlYXZlLmdldE93bmVyKG5vZGVDb25maWcpO1xuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IFdlYXZlLmdldE93bmVyKGxobU93bmVyKTsgLy8gbEhNIC0+IE5vZGVDb25maWdcbiAgICAgICAgbGV0IGFjdGl2ZVNpYmxpbmdOb2RlID0gdGhpcy5nZXRBY3RpdmVTaWJsaW5nTm9kZShub2RlQ29uZmlnKTtcbiAgICAgICAgbGV0IGFjdGl2ZUFuY2VzdG9yTm9kZSA9IHRoaXMuZ2V0QWN0aXZlQW5jZXN0b3JOb2RlKG5vZGVDb25maWcpO1xuXG4gICAgICAgIFxuICAgICAgICAvKioqIGFjdGl2ZSBNb2RlIChBY3RpdmUgU3RhdGUgVXBkYXRlKSAqKioqL1xuICAgICAgICBpZihhY3RpdmVBbmNlc3Rvck5vZGUpXG4gICAgICAgICAgICBhY3RpdmVBbmNlc3Rvck5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmKGFjdGl2ZVNpYmxpbmdOb2RlKVxuICAgICAgICAgICAgYWN0aXZlU2libGluZ05vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgbm9kZUNvbmZpZy5hY3RpdmUudmFsdWUgPSB0cnVlO1xuXG4gICAgICAgIC8qKiogc2VsZWN0aW9uIE1vZGUgKFNlbGVjdCBzdGF0ZSBVcGRhdGUpICoqKiovXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0aW9uVHlwZS52YWx1ZSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0aW9uVHlwZS52YWx1ZSA9PSBcInJhZGlvXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlU2libGluZ05vZGUpXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNpYmxpbmdOb2RlLnNlbGVjdC52YWx1ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLm9wZW5lZENoaWxkICYmIChwYXJlbnROb2RlLm9wZW5lZENoaWxkICE9PSBub2RlQ29uZmlnKSApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLm9wZW5lZENoaWxkLnNlbGVjdC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5zZWxlY3Rpb25UeXBlLnZhbHVlID09IFwiY2hlY2tcIikgLy8gdG9nZ2xlIHNlbGVjdGlvblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5vZGVDb25maWcuc2VsZWN0LnZhbHVlID0gIW5vZGVDb25maWcuc2VsZWN0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgIFxuICAgICAgICAgICAgLyoqKiBPcGVuIE1vZGUgKE9wZW4gU3RhdGUgVWRwYXRlKSAqKioqL1xuICAgICAgICAgICAgaWYodGhpcy5lbmFibGVBY2NvcmRpb25Nb2RlLnN0YXRlICkgLy8gYWNjb3JkaW9uIE1vZGVcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihhY3RpdmVTaWJsaW5nTm9kZSlcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2libGluZ05vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLm9wZW5lZENoaWxkICYmIChwYXJlbnROb2RlLm9wZW5lZENoaWxkICE9PSBub2RlQ29uZmlnKSApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLm9wZW5lZENoaWxkLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVDb25maWcub3Blbi5zdGF0ZSA9ICFub2RlQ29uZmlnLm9wZW4uc3RhdGU7IC8vIHRvZ2dsZSBvcGVuIHN0YXRlXG4gICAgICAgIFxuXG5cbiAgICAgICAgcGFyZW50Tm9kZS5vcGVuZWRDaGlsZCA9IG5vZGVDb25maWc7XG5cblxuICAgIH07XG5cbiAgICBnZXRGaWxlSWNvbihkYXRhLGlzT3BlbilcbiAgICB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYodGhpcy5lbmFibGVEYXRhVHlwZUljb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVR5cGVzTWFwICYmIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLmxlYWZPcGVuICA6IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZS5sZWFmRGVmYXVsdCA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9O1xuXG5cblxuICAgIGdldEZvbGRlckljb24oIGlzT3BlbilcbiAgICB7XG4gICAgICAgIHJldHVybiBpc09wZW4gPyB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUubm9kZU9wZW4gOiB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUubm9kZURlZmF1bHQ7XG4gICAgfTtcblxuICAgIGdldFNlbGVjdEljb24oIGlzU2VsZWN0ZWQpXG4gICAge1xuICAgICAgICByZXR1cm4gaXNTZWxlY3RlZCA/IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZVtcInNlbGVjdFwiXSA6IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZVtcInVuU2VsZWN0XCJdO1xuICAgIH07XG59XG5cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcyggVHJlZUNvbmZpZyxbJ3dlYXZlcmVhY3QuVHJlZUNvbmZpZyddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJUcmVlIENvbmZpZ1wiKTtcblxuIl19