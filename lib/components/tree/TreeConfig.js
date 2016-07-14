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

            var iconUI = null;
            if (iconName && iconName.length > 0) {
                if (iconName.indexOf("/") == -1) {
                    // fontAwesome Icon Name
                    iconUI = React.createElement("i", { style: iconStyleObj, className: iconName });
                } else {
                    iconUI = React.createElement("img", { style: iconStyleObj, src: iconName });
                }
            }

            return iconUI;
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
            if (!owner) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3FCO0FBQ2pCLGFBRGlCLFVBQ2pCLEdBQ0E7OEJBRmlCLFlBRWpCOztBQUNJLG1DQUFpQiw4QkFBakIsQ0FBZ0QsSUFBaEQsRUFESjs7QUFHSSxlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLDJCQUFjO0FBQ1YsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0EsZ0NBQW9CO0FBQ2hCLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsS0FBakMsQ0FBMUIsQ0FBUDthQURKO0FBR0EsbUJBQU87QUFDSCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLE1BQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLHlCQUFhO0FBQ1QsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixNQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSxzQkFBUztBQUNMLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwwQkFBMUIsQ0FBUDthQURKO0FBR0EsdUJBQVU7QUFDTix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7YUFESjtBQUdBLHVCQUFVO0FBQ04sdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO2FBREo7QUFHQSwyQkFBYztBQUNWLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDthQURKO0FBR0EsMkJBQWM7QUFDVix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7YUFESjtBQUdBLHVCQUFVO0FBQ04sdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO2FBREo7QUFHQSwyQkFBYztBQUNWLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDthQURKO0FBR0EsK0JBQWtCO0FBQ2QsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO2FBREo7QUFHQSw2QkFBZ0I7QUFDWix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7YUFESjtBQUdBLHlCQUFZO0FBQ1IsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO2FBREo7QUFHQSxpQ0FBb0I7QUFDaEIsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTJCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUEzQixDQUFQO2FBREo7QUFHQSwyQkFBYztBQUNWLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUE0QixRQUFRLElBQVIsQ0FBYSxjQUFiLENBQW5DO2FBREo7QUFHQSxrQ0FBcUI7QUFDakIsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTJCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBL0IsQ0FBUDthQURKO0FBR0EscUNBQXdCO0FBQ3BCLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEyQixRQUFRLElBQVIsQ0FBYSxjQUFiLENBQWxDO2FBREo7U0FwREosRUFISjs7QUE2REksYUFBSyxZQUFMLEdBQW9CLElBQXBCLENBN0RKO0FBOERJLGFBQUssV0FBTCxHQUFtQixJQUFuQixDQTlESjs7QUFnRUksYUFBSyxvQkFBTCxDQUEwQixLQUExQixHQUFrQyxFQUFsQyxDQWhFSjs7QUFrRUksYUFBSyxXQUFMLENBQWlCLEtBQWpCLEdBQXlCO0FBQ3JCLHVCQUFXLE1BQVg7QUFDQSw2QkFBaUIsUUFBakI7U0FGSixDQWxFSjs7QUF1RUksYUFBSyxTQUFMLENBQWUsS0FBZixHQUF1QjtBQUNuQix1QkFBVyxNQUFYO0FBQ0EsNkJBQWlCLEtBQUssYUFBTCxDQUFtQixLQUFuQixHQUF5QixhQUF6QixHQUF5QyxLQUF6QztBQUNqQiwwQkFBYSxRQUFiO1NBSEo7Ozs7QUF2RUosWUErRUksQ0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQTJCO0FBQ3ZCLDJCQUFnQixLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBeUIsaUNBQXpCLEdBQTJELGNBQTNEO0FBQ2hCLHdCQUFhLEtBQUssYUFBTCxDQUFtQixLQUFuQixHQUF5QixzQ0FBekIsR0FBZ0UsbUJBQWhFO0FBQ2IsMkJBQWdCLEtBQUssYUFBTCxDQUFtQixLQUFuQixHQUF5QixvQ0FBekIsR0FBOEQsaUJBQTlEO0FBQ2hCLHdCQUFhLEtBQUssYUFBTCxDQUFtQixLQUFuQixHQUF5QixzQ0FBekIsR0FBZ0UsZ0JBQWhFO0FBQ2Isc0JBQVMsS0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQXlCLHlDQUF6QixHQUFtRSxzQkFBbkU7QUFDVCx3QkFBVyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBeUIsbUNBQXpCLEdBQTZELGdCQUE3RDtTQU5mLENBL0VKOztBQXdGSSxhQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBMkI7QUFDdkIsbUJBQU8sTUFBUDtBQUNBLG9CQUFTLE1BQVQ7QUFDQSwwQkFBYSxLQUFiO1NBSEosQ0F4Rko7O0FBK0ZJLGFBQUssU0FBTCxDQUFlLEtBQWYsR0FBdUI7QUFDbkIsdUJBQVcsTUFBWDtBQUNBLDZCQUFpQixLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBeUIsYUFBekIsR0FBeUMsS0FBekM7QUFDakIsMEJBQWEsUUFBYjtTQUhKLENBL0ZKOztBQXNHSSxhQUFLLGVBQUwsQ0FBcUIsS0FBckIsR0FBNkI7QUFDekIsMEJBQWUsUUFBZjtTQURKOzs7QUF0R0osWUEyR0ksQ0FBSyxhQUFMLENBQW1CLG9CQUFuQixDQUF3QyxJQUF4QyxFQUE4QyxLQUFLLFdBQUwsQ0FBOUMsQ0EzR0o7S0FEQTs7aUJBRGlCOztzQ0FrSGpCO0FBQ0ksZ0JBQUksVUFBVSxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsR0FBeUIsYUFBekIsR0FBdUMsS0FBdkMsQ0FEbEI7QUFFSSxpQkFBSyxTQUFMLENBQWUsS0FBZixHQUF1QixFQUFDLGVBQWMsT0FBZCxFQUF4QixDQUZKO0FBR0ksaUJBQUssU0FBTCxDQUFlLEtBQWYsR0FBdUIsRUFBQyxlQUFjLE9BQWQsRUFBeEIsQ0FISjtBQUlJLHVDQUFpQixTQUFqQixDQUEyQixJQUEzQixFQUFnQyxDQUFDLGVBQUQsQ0FBaEMsRUFKSjs7OztrQ0FRVyxNQUFNLEtBQ2hCO0FBQ0csaUJBQUssSUFBSSxJQUFKLElBQVksR0FBakIsRUFBc0I7QUFDbEIscUJBQUssSUFBTCxJQUFhLElBQUksSUFBSixDQUFiLENBRGtCO2FBQXRCO0FBR0EsbUJBQU8sSUFBUCxDQUpIOzs7O3FDQU9ZLFVBQVMsUUFDdEI7QUFDSSxnQkFBSSxRQUFRLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FEaEI7QUFFSSxnQkFBRyxRQUFILEVBQVk7QUFDUixxQkFBSyxTQUFMLENBQWUsS0FBZixFQUFxQixLQUFLLGlCQUFMLENBQXVCLEtBQXZCLENBQXJCLENBRFE7QUFFUixvQkFBRyxNQUFILEVBQ0ksT0FBTyxLQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXFCLEtBQUssZUFBTCxDQUFxQixLQUFyQixDQUE1QixDQURKO2FBRko7QUFLQSxtQkFBTyxLQUFQLENBUEo7Ozs7dUNBYUQ7QUFDSyxnQkFBSSxRQUFRLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQURqQjtBQUVLLG1CQUFPLEtBQVAsQ0FGTDs7Ozs0Q0FLcUIsTUFBSyxVQUN6QjtBQUNJLGdCQUFJLGVBQWUsSUFBQyxJQUFRLFFBQVIsR0FBcUIsS0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQTJCLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQUR4RTs7QUFHSSxnQkFBSSxTQUFTLElBQVQsQ0FIUjtBQUlJLGdCQUFHLFlBQVksU0FBUyxNQUFULEdBQWtCLENBQWxCLEVBQ2Y7QUFDSSxvQkFBRyxTQUFTLE9BQVQsQ0FBaUIsR0FBakIsS0FBeUIsQ0FBQyxDQUFELEVBQzVCOztBQUNJLDZCQUFTLDJCQUFHLE9BQVMsWUFBVCxFQUF1QixXQUFXLFFBQVgsRUFBMUIsQ0FBVCxDQURKO2lCQURBLE1BS0E7QUFDSSw2QkFBUyw2QkFBSyxPQUFTLFlBQVQsRUFBdUIsS0FBSyxRQUFMLEVBQTVCLENBQVQsQ0FESjtpQkFMQTthQUZKOztBQVlBLG1CQUFPLE1BQVAsQ0FoQko7Ozs7Ozs7Z0RBc0J3QixZQUN4QjtBQUNJLGlCQUFLLG9CQUFMLENBQTBCLEtBQTFCLEdBQWtDLFVBQWxDLENBREo7Ozs7OENBTXVCLFlBQ3ZCO0FBQ0ksZ0JBQUcsV0FBVyxNQUFYLENBQWtCLEtBQWxCLEVBQ0g7QUFDSSx1QkFBTyxJQUFQLENBREo7YUFEQTs7QUFLQSxnQkFBSSxXQUFXLE1BQU0sUUFBTixDQUFlLFVBQWYsQ0FBWCxDQU5SO0FBT0ksZ0JBQUssUUFBUSxNQUFNLFFBQU4sQ0FBZSxRQUFmLENBQVI7QUFQVCxnQkFRTyxDQUFDLEtBQUQsSUFBVyxNQUFNLFdBQU4sS0FBc0IsV0FBVyxXQUFYLEVBQ3BDO0FBQ0ksdUJBQU8sSUFBUCxDQURKO2FBREEsTUFJSyxJQUFHLE1BQU0sTUFBTixDQUFhLEtBQWIsRUFDUjtBQUNJLHVCQUFPLEtBQVAsQ0FESjthQURLLE1BSUQ7QUFDQSx1QkFBTyxLQUFLLHFCQUFMLENBQTJCLEtBQTNCLENBQVAsQ0FEQTthQUpDOzs7OzZDQVdZLFlBQ3JCOztBQUVJLGdCQUFJLFFBQVEsTUFBTSxRQUFOLENBQWUsVUFBZixDQUFSLENBRlI7QUFHSSxnQkFBRyxDQUFDLEtBQUQsRUFDSDtBQUNJLHVCQUFPLElBQVAsQ0FESjthQURBO0FBSUEsZ0JBQUksV0FBVyxNQUFNLFVBQU4sRUFBWCxDQVBSO0FBUUksaUJBQUksSUFBSSxJQUFJLENBQUosRUFBUSxJQUFJLFNBQVMsTUFBVCxFQUFrQixHQUF0QyxFQUNBO0FBQ0ksb0JBQUcsZUFBZSxTQUFTLENBQVQsQ0FBZixFQUNIO0FBQ0ksd0JBQUcsU0FBUyxDQUFULEVBQVksTUFBWixDQUFtQixLQUFuQixFQUNDLE9BQU8sU0FBUyxDQUFULENBQVAsQ0FESjtpQkFGSjthQUZKOztBQVVBLG1CQUFPLElBQVAsQ0FsQko7Ozs7eUNBd0JpQixZQUFXLFdBQzVCO0FBQ0ksZ0JBQUksV0FBVyxNQUFNLFFBQU4sQ0FBZSxVQUFmLENBQVgsQ0FEUjtBQUVJLGdCQUFJLGFBQWEsTUFBTSxRQUFOLENBQWUsUUFBZixDQUFiO0FBRlIsZ0JBR1Esb0JBQW9CLEtBQUssb0JBQUwsQ0FBMEIsVUFBMUIsQ0FBcEIsQ0FIUjtBQUlJLGdCQUFJLHFCQUFxQixLQUFLLHFCQUFMLENBQTJCLFVBQTNCLENBQXJCOzs7QUFKUixnQkFRTyxrQkFBSCxFQUNJLG1CQUFtQixNQUFuQixDQUEwQixLQUExQixHQUFrQyxLQUFsQyxDQURKO0FBRUEsZ0JBQUcsaUJBQUgsRUFDSSxrQkFBa0IsTUFBbEIsQ0FBeUIsS0FBekIsR0FBaUMsS0FBakMsQ0FESjs7QUFHQSx1QkFBVyxNQUFYLENBQWtCLEtBQWxCLEdBQTBCLElBQTFCOzs7QUFiSixnQkFnQk8sS0FBSyxhQUFMLENBQW1CLEtBQW5CLEVBQ0g7QUFDSSxvQkFBRyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsSUFBNEIsT0FBNUIsRUFDSDtBQUNJLHdCQUFHLGlCQUFILEVBQ0ksa0JBQWtCLE1BQWxCLENBQXlCLEtBQXpCLEdBQWlDLEtBQWpDLENBREo7O0FBR0Esd0JBQUcsY0FBYyxXQUFXLFdBQVgsSUFBMkIsV0FBVyxXQUFYLEtBQTJCLFVBQTNCLEVBQzVDO0FBQ0ksbUNBQVcsV0FBWCxDQUF1QixNQUF2QixDQUE4QixLQUE5QixHQUFzQyxLQUF0QyxDQURKO3FCQURBOztBQUtBLCtCQUFXLE1BQVgsQ0FBa0IsS0FBbEIsR0FBMEIsSUFBMUIsQ0FUSjtpQkFEQSxNQVlLLElBQUcsS0FBSyxhQUFMLENBQW1CLEtBQW5CLElBQTRCLE9BQTVCO0FBQ1I7QUFDSSxtQ0FBVyxNQUFYLENBQWtCLEtBQWxCLEdBQTBCLENBQUMsV0FBVyxNQUFYLENBQWtCLEtBQWxCLENBRC9CO3FCQURLO2FBZFQ7OztBQWhCSixnQkF1Q1csS0FBSyxtQkFBTCxDQUF5QixLQUF6QjtBQUNIO0FBQ0ksd0JBQUcsaUJBQUgsRUFDSSxrQkFBa0IsSUFBbEIsQ0FBdUIsS0FBdkIsR0FBK0IsS0FBL0IsQ0FESjs7QUFHQSx3QkFBRyxjQUFjLFdBQVcsV0FBWCxJQUEyQixXQUFXLFdBQVgsS0FBMkIsVUFBM0IsRUFDNUM7QUFDSSxtQ0FBVyxXQUFYLENBQXVCLElBQXZCLENBQTRCLEtBQTVCLEdBQW9DLEtBQXBDLENBREo7cUJBREE7aUJBTEo7QUFXQSx1QkFBVyxJQUFYLENBQWdCLEtBQWhCLEdBQXdCLENBQUMsV0FBVyxJQUFYLENBQWdCLEtBQWhCOztBQWxEakMsc0JBc0RJLENBQVcsV0FBWCxHQUF5QixVQUF6QixDQXRESjs7OztvQ0EyRFksTUFBSyxRQUNqQjtBQUNJLGdCQUFHLElBQUgsRUFBUTtBQUNKLG9CQUFHLEtBQUssa0JBQUwsQ0FBd0IsS0FBeEIsRUFBOEI7QUFDN0Isd0JBQUksVUFBVSxLQUFLLFdBQUwsR0FBbUIsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQW5CLEdBQTRDLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUQ3QjtBQUU3Qix3QkFBSSxLQUFLLFlBQUwsSUFBcUIsS0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQXJCLEVBQ0EsT0FBTyxLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBUCxDQURKO2lCQUZKLE1BSUs7QUFDRCwyQkFBTyxTQUFTLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQUF5QixRQUF6QixHQUFxQyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsQ0FBeUIsV0FBekIsQ0FEcEQ7aUJBSkw7YUFESixNQVNJLE9BQU8sRUFBUCxDQVRKOzs7O3NDQWNXLFFBQ2Y7QUFDSSxtQkFBTyxTQUFTLEtBQUssYUFBTCxDQUFtQixLQUFuQixDQUF5QixRQUF6QixHQUFvQyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsQ0FBeUIsV0FBekIsQ0FEeEQ7Ozs7c0NBSWUsWUFDZjtBQUNJLG1CQUFPLGFBQWEsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLFFBQXpCLENBQWIsR0FBa0QsS0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLFVBQXpCLENBQWxELENBRFg7Ozs7V0F0VGlCOzs7Ozs7O0FBOFRqQixNQUFNLGFBQU4sQ0FBcUIsVUFBckIsRUFBZ0MsQ0FBQyx1QkFBRCxDQUFoQyxFQUEwRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBM0QsRUFBNkYsYUFBN0YiLCJmaWxlIjoiVHJlZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlQ29uZmlne1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIHRyZWVJY29uU3RhdGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuYWJsZURhdGFUeXBlSWNvbjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGlnbjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsZWZ0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vZGVQYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjIwcHhcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdE5vZGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBOb2RlQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub2RlU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vZGVMaXN0U3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vZGVJY29uU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVhZkljb25TdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2ZUxlYWZTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmNoU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuYWJsZUFjY29yZGlvbk1vZGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsICBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0aW9uVHlwZTp7IC8vIHJhZGlvIHwgY2hlY2tcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCAgIHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWROb2Rlczp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuYWJsZU1lbnVNb2RlRnJvbUxldmVsOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCAgd2VhdmVqcy5jb3JlLkxpbmthYmxlTnVtYmVyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMuZGF0YVR5cGVzTWFwID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZXREYXRhVHlwZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5zdGF0ZSA9IFtdO1xuXG4gICAgICAgIHRoaXMuYnJhbmNoU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubm9kZVN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cInJvdy1yZXZlcnNlXCIgOiBcInJvd1wiLFxuICAgICAgICAgICAgXCJhbGlnbkl0ZW1zXCI6XCJjZW50ZXJcIlxuICAgICAgICB9O1xuXG4gICAgICAgIC8vdG9kbyAtIGFkZCBnZXR0ZXIgc2V0dGVyIHRvIGZhY2lsaXRhdGUgc2V0dGluZ3Mgb25seSBvbmUgc3RhdGVcbiAgICAgICAgLy8gb3IgY3JlYXRlIGxpa2UgSW5saW5lU3R5bGVcbiAgICAgICAgdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJub2RlRGVmYXVsdFwiIDogdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtZm9sZGVyIGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtZm9sZGVyXCIsXG4gICAgICAgICAgICBcIm5vZGVPcGVuXCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1mb2xkZXItb3BlbiBmYS1mbGlwLWhvcml6b250YWxcIjpcImZhIGZhLWZvbGRlci1vcGVuXCIsXG4gICAgICAgICAgICBcImxlYWZEZWZhdWx0XCIgOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmYSBmYS1maWxlLXRleHQgZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1maWxlLXRleHRcIixcbiAgICAgICAgICAgIFwibGVhZk9wZW5cIiA6IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLWZpbGUtdGV4dC1vIGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEtZmlsZS10ZXh0LW9cIixcbiAgICAgICAgICAgIFwic2VsZWN0XCI6dGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wiZmEgZmEtY2hlY2stc3F1YXJlLW8gZmEtZmxpcC1ob3Jpem9udGFsXCI6XCJmYSBmYS1jaGVjay1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgXCJ1blNlbGVjdFwiOnRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT9cImZhIGZhLXNxdWFyZS1vIGZhLWZsaXAtaG9yaXpvbnRhbFwiOlwiZmEgZmEtc3F1YXJlLW9cIixcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5vZGVJY29uU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQgOiBcIjIwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDpcIjJweFwiXG4gICAgICAgIH07XG5cblxuICAgICAgICB0aGlzLmxlYWZTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJyb3ctcmV2ZXJzZVwiIDogXCJyb3dcIixcbiAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOlwiY2VudGVyXCJcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMuYWN0aXZlTGVhZlN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBcIm9yYW5nZVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgLy90b2RvIG1vdmUgdGhpcyB0byBjb21wb25lbnRNYW5hZ2VyIGRlZmF1bHRDYWxsYmFja3NcbiAgICAgICAgdGhpcy5yZXZlcnNlTGF5b3V0LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMudXBkYXRlU3R5bGUpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlU3R5bGUoKVxuICAgIHtcbiAgICAgICAgdmFyIGZsZXhEaXIgPSB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJyb3ctcmV2ZXJzZVwiOlwicm93XCI7XG4gICAgICAgIHRoaXMubm9kZVN0eWxlLnN0YXRlID0ge2ZsZXhEaXJlY3Rpb246ZmxleERpcn07XG4gICAgICAgIHRoaXMubGVhZlN0eWxlLnN0YXRlID0ge2ZsZXhEaXJlY3Rpb246ZmxleERpcn07XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuZmxpcEljb25zKHRoaXMsW1widHJlZUljb25TdGF0ZVwiXSk7XG4gICAgfVxuXG5cbiAgICAgbWVyZ2VJbnRvKGludG8sIG9iailcbiAgICAge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9O1xuXG4gICAgZ2V0TGVhZlN0eWxlKHNlbGVjdGVkLGFjdGl2ZSlcbiAgICB7XG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMubGVhZlN0eWxlLnN0YXRlO1xuICAgICAgICBpZihzZWxlY3RlZCl7XG4gICAgICAgICAgICB0aGlzLm1lcmdlSW50byhzdHlsZSx0aGlzLnNlbGVjdGVkTGVhZlN0eWxlLnN0YXRlKTtcbiAgICAgICAgICAgIGlmKGFjdGl2ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZXJnZUludG8oc3R5bGUsdGhpcy5hY3RpdmVMZWFmU3R5bGUuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9O1xuXG5cblxuICAgZ2V0TGlzdFN0eWxlKClcbiAgIHtcbiAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5ub2RlTGlzdFN0eWxlLnN0YXRlO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfTtcblxuICAgIGdldFN0eWxlRm9ySWNvblR5cGUodHlwZSxpY29uTmFtZSlcbiAgICB7XG4gICAgICAgIHZhciBpY29uU3R5bGVPYmogPSAodHlwZSA9PSBcImJyYW5jaFwiKSA/ICB0aGlzLm5vZGVJY29uU3R5bGUuc3RhdGUgOiB0aGlzLmxlYWZJY29uU3R5bGUuc3RhdGU7XG5cbiAgICAgICAgbGV0IGljb25VSSA9IG51bGw7XG4gICAgICAgIGlmKGljb25OYW1lICYmIGljb25OYW1lLmxlbmd0aCA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGljb25OYW1lLmluZGV4T2YoXCIvXCIpID09IC0xKVxuICAgICAgICAgICAgeyAvLyBmb250QXdlc29tZSBJY29uIE5hbWVcbiAgICAgICAgICAgICAgICBpY29uVUkgPSA8aSBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IGNsYXNzTmFtZT17aWNvbk5hbWV9ID48L2k+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvblVJID0gPGltZyBzdHlsZSA9IHtpY29uU3R5bGVPYmp9IHNyYz17aWNvbk5hbWV9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpY29uVUk7XG4gICAgfTtcblxuXG5cbiAgICAvL3RvLWRvIGRvIHRoaXMgZm9yIGVudGlyZSB0cmVlIHJhdGhlciBvbmx5IGZvciB0aGUgZmlyc3QgY2hpbGRcbiAgICBzZXREZWZhdWx0Tm9kZVNlbGVjdGlvbihub2Rlc0xhYmVsKVxuICAgIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5zdGF0ZSA9IG5vZGVzTGFiZWxcbiAgICB9O1xuXG5cblxuICAgIGdldEFjdGl2ZUFuY2VzdG9yTm9kZSAobm9kZUNvbmZpZylcbiAgICB7XG4gICAgICAgIGlmKG5vZGVDb25maWcuYWN0aXZlLnN0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaG1Pd25lciA9IFdlYXZlLmdldE93bmVyKG5vZGVDb25maWcpO1xuICAgICAgICBsZXQgIG93bmVyID0gV2VhdmUuZ2V0T3duZXIobGhtT3duZXIpOyAvLyBsSE0gLT4gTm9kZUNvbmZpZ1xuICAgICAgICBpZighb3duZXIgfHwgKG93bmVyLmNvbnN0cnVjdG9yICE9PSBub2RlQ29uZmlnLmNvbnN0cnVjdG9yKSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYob3duZXIuYWN0aXZlLnN0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gb3duZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFjdGl2ZUFuY2VzdG9yTm9kZShvd25lcik7XG4gICAgICAgIH1cblxuXG4gICAgfTtcblxuICAgIGdldEFjdGl2ZVNpYmxpbmdOb2RlKG5vZGVDb25maWcpXG4gICAge1xuXG4gICAgICAgIGxldCBvd25lciA9IFdlYXZlLmdldE93bmVyKG5vZGVDb25maWcpO1xuICAgICAgICBpZighb3duZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IG93bmVyLmdldE9iamVjdHMoKTtcbiAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCBjaGlsZHJlbi5sZW5ndGggOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKG5vZGVDb25maWcgIT09IGNoaWxkcmVuW2ldKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLmFjdGl2ZS5zdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG5cblxuXG4gICAgY2hhbmdlQWN0aXZlTm9kZShub2RlQ29uZmlnLGV2ZW50VHlwZSApXG4gICAge1xuICAgICAgICBsZXQgbGhtT3duZXIgPSBXZWF2ZS5nZXRPd25lcihub2RlQ29uZmlnKTtcbiAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBXZWF2ZS5nZXRPd25lcihsaG1Pd25lcik7IC8vIGxITSAtPiBOb2RlQ29uZmlnXG4gICAgICAgIGxldCBhY3RpdmVTaWJsaW5nTm9kZSA9IHRoaXMuZ2V0QWN0aXZlU2libGluZ05vZGUobm9kZUNvbmZpZyk7XG4gICAgICAgIGxldCBhY3RpdmVBbmNlc3Rvck5vZGUgPSB0aGlzLmdldEFjdGl2ZUFuY2VzdG9yTm9kZShub2RlQ29uZmlnKTtcblxuICAgICAgICBcbiAgICAgICAgLyoqKiBhY3RpdmUgTW9kZSAoQWN0aXZlIFN0YXRlIFVwZGF0ZSkgKioqKi9cbiAgICAgICAgaWYoYWN0aXZlQW5jZXN0b3JOb2RlKVxuICAgICAgICAgICAgYWN0aXZlQW5jZXN0b3JOb2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICBpZihhY3RpdmVTaWJsaW5nTm9kZSlcbiAgICAgICAgICAgIGFjdGl2ZVNpYmxpbmdOb2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuXG4gICAgICAgIG5vZGVDb25maWcuYWN0aXZlLnZhbHVlID0gdHJ1ZTtcblxuICAgICAgICAvKioqIHNlbGVjdGlvbiBNb2RlIChTZWxlY3Qgc3RhdGUgVXBkYXRlKSAqKioqL1xuICAgICAgICBpZih0aGlzLnNlbGVjdGlvblR5cGUudmFsdWUgKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLnNlbGVjdGlvblR5cGUudmFsdWUgPT0gXCJyYWRpb1wiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKGFjdGl2ZVNpYmxpbmdOb2RlKVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTaWJsaW5nTm9kZS5zZWxlY3QudmFsdWUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcmVudE5vZGUgJiYgcGFyZW50Tm9kZS5vcGVuZWRDaGlsZCAmJiAocGFyZW50Tm9kZS5vcGVuZWRDaGlsZCAhPT0gbm9kZUNvbmZpZykgKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5vcGVuZWRDaGlsZC5zZWxlY3QudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuc2VsZWN0aW9uVHlwZS52YWx1ZSA9PSBcImNoZWNrXCIpIC8vIHRvZ2dsZSBzZWxlY3Rpb25cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLnNlbGVjdC52YWx1ZSA9ICFub2RlQ29uZmlnLnNlbGVjdC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICBcbiAgICAgICAgICAgIC8qKiogT3BlbiBNb2RlIChPcGVuIFN0YXRlIFVkcGF0ZSkgKioqKi9cbiAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlQWNjb3JkaW9uTW9kZS5zdGF0ZSApIC8vIGFjY29yZGlvbiBNb2RlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlU2libGluZ05vZGUpXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNpYmxpbmdOb2RlLm9wZW4udmFsdWUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcmVudE5vZGUgJiYgcGFyZW50Tm9kZS5vcGVuZWRDaGlsZCAmJiAocGFyZW50Tm9kZS5vcGVuZWRDaGlsZCAhPT0gbm9kZUNvbmZpZykgKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5vcGVuZWRDaGlsZC5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlQ29uZmlnLm9wZW4uc3RhdGUgPSAhbm9kZUNvbmZpZy5vcGVuLnN0YXRlOyAvLyB0b2dnbGUgb3BlbiBzdGF0ZVxuICAgICAgICBcblxuXG4gICAgICAgIHBhcmVudE5vZGUub3BlbmVkQ2hpbGQgPSBub2RlQ29uZmlnO1xuXG5cbiAgICB9O1xuXG4gICAgZ2V0RmlsZUljb24oZGF0YSxpc09wZW4pXG4gICAge1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlRGF0YVR5cGVJY29uLnZhbHVlKXtcbiAgICAgICAgICAgICAgICB2YXIgZGF0VHlwZSA9IHRoaXMuZ2V0RGF0YVR5cGUgPyB0aGlzLmdldERhdGFUeXBlKGRhdGEpIDogZGF0YS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFUeXBlc01hcCAmJiB0aGlzLmRhdGFUeXBlc01hcFtkYXRUeXBlXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzT3BlbiA/IHRoaXMudHJlZUljb25TdGF0ZS5zdGF0ZS5sZWFmT3BlbiAgOiB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGUubGVhZkRlZmF1bHQgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfTtcblxuXG5cbiAgICBnZXRGb2xkZXJJY29uKCBpc09wZW4pXG4gICAge1xuICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLm5vZGVPcGVuIDogdGhpcy50cmVlSWNvblN0YXRlLnN0YXRlLm5vZGVEZWZhdWx0O1xuICAgIH07XG5cbiAgICBnZXRTZWxlY3RJY29uKCBpc1NlbGVjdGVkKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGlzU2VsZWN0ZWQgPyB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGVbXCJzZWxlY3RcIl0gOiB0aGlzLnRyZWVJY29uU3RhdGUuc3RhdGVbXCJ1blNlbGVjdFwiXTtcbiAgICB9O1xufVxuXG5cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoIFRyZWVDb25maWcsWyd3ZWF2ZXJlYWN0LlRyZWVDb25maWcnXSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdLFwiVHJlZSBDb25maWdcIik7XG5cbiJdfQ==