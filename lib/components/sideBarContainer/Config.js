"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _CSS = require("../../configs/CSS");

var _CSS2 = _interopRequireDefault(_CSS);

var _Props = require("../../configs/Props");

var _Props2 = _interopRequireDefault(_Props);

var _Config = require("../button/Config");

var _Config2 = _interopRequireDefault(_Config);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContainerConfig = function () {
    function ContainerConfig() {
        _classCallCheck(this, ContainerConfig);

        _ComponentManager2.default.createDefaultSessionProperties(this, "container");
        Object.defineProperties(this, {

            "mode": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "overlay": {
                value: Weave.linkableChild(this, new OverlayConfig())
            },
            "leftSideBar": {
                value: Weave.linkableChild(this, new SideBarConfig())
            },
            "rightSideBar": {
                value: Weave.linkableChild(this, new SideBarConfig())
            },
            "topSideBar": {
                value: Weave.linkableChild(this, new SideBarConfig())
            },
            "bottomSideBar": {
                value: Weave.linkableChild(this, new SideBarConfig())
            }

        });

        this.leftSideBar.direction = "left";
        this.rightSideBar.direction = "right";
        this.bottomSideBar.direction = "bottom";
        this.topSideBar.direction = "top";

        this.style.state = {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%"
        };

        //todo move this to componentManager defaultCallbacks
        this.reverseLayout.addGroupedCallback(this, this.updateSideBarLyout);
    }

    _createClass(ContainerConfig, [{
        key: "updateSideBarLyout",
        value: function updateSideBarLyout() {
            var revLayout = this.reverseLayout.state;
            if (this.leftSideBar.visible.state) this.leftSideBar.reverseLayout.state = revLayout;
            if (this.rightSideBar.visible.state) this.rightSideBar.reverseLayout.state = revLayout;
            if (this.bottomSideBar.visible.state) this.bottomSideBar.reverseLayout.state = revLayout;
            if (this.topSideBar.visible.state) this.topSideBar.reverseLayout.state = revLayout;
        }
    }]);

    return ContainerConfig;
}();

var OverlayConfig = function () {
    function OverlayConfig() {
        _classCallCheck(this, OverlayConfig);

        _ComponentManager2.default.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            "open": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });
        this.style.state = {
            position: "fixed"
        };

        this.open.addImmediateCallback(this, this.updateStyle);
    }

    _createClass(OverlayConfig, [{
        key: "updateStyle",
        value: function updateStyle() {
            if (this.open.state) {
                this.style.state = {
                    zIndex: "1",
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(0, 0, 0)",
                    background: "rgba(0, 0, 0, 0.1)",
                    opacity: 1
                };
            } else {
                this.style.state = {
                    zIndex: "1",
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(-100%, 0, 0)",
                    background: "rgba(0, 0, 0, 0.1)",
                    opacity: 0
                };
            }
        }
    }]);

    return OverlayConfig;
}();

var SideBarConfig = function () {
    function SideBarConfig() {
        _classCallCheck(this, SideBarConfig);

        _ComponentManager2.default.createDefaultSessionProperties(this, "container");

        Object.defineProperties(this, {

            "size": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("16%"))
            },
            static: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            iconsOnly: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            open: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });

        this.direction = "";

        this.open.addImmediateCallback(this, this.updateStyle, true);
        this.reverseLayout.addImmediateCallback(this, this.updateStyle, true);
        this.static.addImmediateCallback(this, this.updateSideBarController, true);
    }

    _createClass(SideBarConfig, [{
        key: "updateStyle",
        value: function updateStyle() {

            var styleObject = {
                display: "flex",
                justifyContent: "flex-start"
            };

            if (this.open.state) {
                styleObject["flexBasis"] = this.size.value;
                styleObject["alignItems"] = this.reverseLayout.state ? "flex-end" : "flex-start";
            } else {
                // for static state the switch button with will be taken
                //styleObject["flexBasis"] = this.static.state?"3%":"0%";
                styleObject["flexBasis"] = "0%";
                styleObject["alignItems"] = "center";
            }

            if (this.direction === "right" || this.direction === "left") {
                styleObject["flexDirection"] = "column";
                this.style.state = styleObject;
            } else if (this.direction === "top" || this.direction === "bottom") {
                styleObject["flexDirection"] = "row";
                this.style.state = styleObject;
            }
            this.style.state = styleObject;
        }
    }, {
        key: "toggleSideBarState",
        value: function toggleSideBarState() {
            var buttonConfig = this.children.getObject("switchButton");
            this.open.state = !buttonConfig.clicked.state;
        }
    }, {
        key: "updateSideBarController",
        value: function updateSideBarController() {

            if (this.static.state) {
                var buttonConfig = this.children.requestObject("switchButton", _Config2.default);
                buttonConfig.icon.state = { "clicked": "fa fa-align-justify", "default": "fa fa-times" };
                buttonConfig.iconModeStyle.state = {
                    fontSize: "24"
                };
                buttonConfig.iconOnly.state = true;
                buttonConfig.style.state = {
                    justifyContent: "flex-end",
                    alignSelf: "flex-end",
                    order: "-1",
                    margin: "4px"
                };
                buttonConfig.props.addEvent("onClick", this.toggleSideBarState, null, this);
                buttonConfig.clicked.state = !this.open.state;
            } else {
                this.children.removeObject("switchButton");
            }
            //this.updateStyle();
        }
    }]);

    return SideBarConfig;
}();

var sideBarContainerConfig = {};
exports.default = sideBarContainerConfig;


sideBarContainerConfig.Container = ContainerConfig;
sideBarContainerConfig.Overlay = OverlayConfig;
sideBarContainerConfig.SideBar = SideBarConfig;

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.sideBarContainerConfig.Container', sideBarContainerConfig.Container, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.sideBarContainerConfig.Overlay', sideBarContainerConfig.Overlay, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.sideBarContainerConfig.SideBar', sideBarContainerConfig.SideBar, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,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QURDO2FBZkw7O0FBRnFCOzs7V0E3RHZCOzs7QUF5Rk4sSUFBTSx5QkFBeUIsRUFBekI7a0JBQ1M7OztBQUVmLHVCQUF1QixTQUF2QixHQUFtQyxlQUFuQztBQUNBLHVCQUF1QixPQUF2QixHQUFpQyxhQUFqQztBQUNBLHVCQUF1QixPQUF2QixHQUFpQyxhQUFqQzs7O0FBR0EsTUFBTSxhQUFOLENBQW9CLDZDQUFwQixFQUFtRSx1QkFBdUIsU0FBdkIsRUFBaUMsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXJHO0FBQ0EsTUFBTSxhQUFOLENBQW9CLDJDQUFwQixFQUFpRSx1QkFBdUIsT0FBdkIsRUFBK0IsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQWpHO0FBQ0EsTUFBTSxhQUFOLENBQW9CLDJDQUFwQixFQUFpRSx1QkFBdUIsT0FBdkIsRUFBK0IsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQWpHIiwiZmlsZSI6IkNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENTUyBmcm9tIFwiLi4vLi4vY29uZmlncy9DU1NcIjtcbmltcG9ydCBQcm9wcyBmcm9tIFwiLi4vLi4vY29uZmlncy9Qcm9wc1wiO1xuaW1wb3J0IEJ1dHRvbkNvbmZpZyBmcm9tIFwiLi4vYnV0dG9uL0NvbmZpZ1wiO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuY2xhc3MgQ29udGFpbmVyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcblxuICAgICAgICAgICAgXCJtb2RlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvdmVybGF5XCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBPdmVybGF5Q29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsZWZ0U2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJpZ2h0U2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRvcFNpZGVCYXJcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBTaWRlQmFyQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJib3R0b21TaWRlQmFyXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgU2lkZUJhckNvbmZpZygpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdGhpcy5sZWZ0U2lkZUJhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgdGhpcy5yaWdodFNpZGVCYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICB0aGlzLmJvdHRvbVNpZGVCYXIuZGlyZWN0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgdGhpcy50b3BTaWRlQmFyLmRpcmVjdGlvbiA9IFwidG9wXCI7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIlxuICAgICAgICB9XG5cbiAgICAgICAgLy90b2RvIG1vdmUgdGhpcyB0byBjb21wb25lbnRNYW5hZ2VyIGRlZmF1bHRDYWxsYmFja3NcbiAgICAgICAgdGhpcy5yZXZlcnNlTGF5b3V0LmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVNpZGVCYXJMeW91dCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVTaWRlQmFyTHlvdXQoKXtcbiAgICAgICAgdmFyIHJldkxheW91dCA9IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZTtcbiAgICAgICAgaWYodGhpcy5sZWZ0U2lkZUJhci52aXNpYmxlLnN0YXRlKXRoaXMubGVmdFNpZGVCYXIucmV2ZXJzZUxheW91dC5zdGF0ZSA9ICByZXZMYXlvdXQ7XG4gICAgICAgIGlmKHRoaXMucmlnaHRTaWRlQmFyLnZpc2libGUuc3RhdGUpdGhpcy5yaWdodFNpZGVCYXIucmV2ZXJzZUxheW91dC5zdGF0ZSA9ICByZXZMYXlvdXQ7XG4gICAgICAgIGlmKHRoaXMuYm90dG9tU2lkZUJhci52aXNpYmxlLnN0YXRlKXRoaXMuYm90dG9tU2lkZUJhci5yZXZlcnNlTGF5b3V0LnN0YXRlID0gIHJldkxheW91dDtcbiAgICAgICAgaWYodGhpcy50b3BTaWRlQmFyLnZpc2libGUuc3RhdGUpdGhpcy50b3BTaWRlQmFyLnJldmVyc2VMYXlvdXQuc3RhdGUgPSAgcmV2TGF5b3V0O1xuICAgIH1cblxuXG59XG5cblxuY2xhc3MgT3ZlcmxheUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyk7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgICBcIm9wZW5cIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0eWxlKTtcblxuICAgIH1cblxuICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgaWYodGhpcy5vcGVuLnN0YXRlKXtcbiAgICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAxXG4gICAgICAgIH1cblxuICAgICB9ZWxzZXtcbiAgICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPXtcbiAgICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAwXG4gICAgICAgIH1cblxuICAgICB9XG4gICB9XG5cblxuXG59XG5cblxuXG5jbGFzcyBTaWRlQmFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAgICAgICAgXCJzaXplXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiAgV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiMTYlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBzdGF0aWM6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBpY29uc09ubHk6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgb3Blbjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJcIjtcblxuICAgICAgICB0aGlzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlLHRydWUpO1xuICAgICAgICB0aGlzLnJldmVyc2VMYXlvdXQuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlLHRydWUpO1xuICAgICAgICB0aGlzLnN0YXRpYy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMudXBkYXRlU2lkZUJhckNvbnRyb2xsZXIsdHJ1ZSk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZSgpe1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9ICB7XG4gICAgICAgICAgICBkaXNwbGF5IDogXCJmbGV4XCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImZsZXgtc3RhcnRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKHRoaXMub3Blbi5zdGF0ZSl7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhCYXNpc1wiXSA9IHRoaXMuc2l6ZS52YWx1ZTtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYWxpZ25JdGVtc1wiXSA9ICB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJmbGV4LWVuZFwiOlwiZmxleC1zdGFydFwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIGZvciBzdGF0aWMgc3RhdGUgdGhlIHN3aXRjaCBidXR0b24gd2l0aCB3aWxsIGJlIHRha2VuXG4gICAgICAgICAgICAvL3N0eWxlT2JqZWN0W1wiZmxleEJhc2lzXCJdID0gdGhpcy5zdGF0aWMuc3RhdGU/XCIzJVwiOlwiMCVcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleEJhc2lzXCJdID0gXCIwJVwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJhbGlnbkl0ZW1zXCJdID0gIFwiY2VudGVyXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiIHx8IHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHN0eWxlT2JqZWN0XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZGlyZWN0aW9uID09PSBcInRvcFwiIHx8IHRoaXMuZGlyZWN0aW9uID09PSBcImJvdHRvbVwiKXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwicm93XCI7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0gc3R5bGVPYmplY3RcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0gc3R5bGVPYmplY3Q7XG4gICAgfVxuXG4gICAgdG9nZ2xlU2lkZUJhclN0YXRlKCl7XG4gICAgICAgIHZhciBidXR0b25Db25maWcgPSB0aGlzLmNoaWxkcmVuLmdldE9iamVjdChcInN3aXRjaEJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5vcGVuLnN0YXRlID0gIWJ1dHRvbkNvbmZpZy5jbGlja2VkLnN0YXRlO1xuICAgIH1cblxuICAgIHVwZGF0ZVNpZGVCYXJDb250cm9sbGVyKCl7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0aWMuc3RhdGUpe1xuICAgICAgICAgICAgdmFyIGJ1dHRvbkNvbmZpZyA9IHRoaXMuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChcInN3aXRjaEJ1dHRvblwiLCBCdXR0b25Db25maWcpO1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLmljb24uc3RhdGUgPSB7XCJjbGlja2VkXCI6IFwiZmEgZmEtYWxpZ24tanVzdGlmeVwiICxcImRlZmF1bHRcIjpcImZhIGZhLXRpbWVzXCJ9O1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLmljb25Nb2RlU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5pY29uT25seS5zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBidXR0b25Db25maWcuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgICAgICAgICAgICAgICBhbGlnblNlbGY6XCJmbGV4LWVuZFwiLFxuICAgICAgICAgICAgICAgIG9yZGVyOlwiLTFcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiNHB4XCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBidXR0b25Db25maWcucHJvcHMuYWRkRXZlbnQoXCJvbkNsaWNrXCIsdGhpcy50b2dnbGVTaWRlQmFyU3RhdGUsbnVsbCx0aGlzKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5jbGlja2VkLnN0YXRlID0gIXRoaXMub3Blbi5zdGF0ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZU9iamVjdChcInN3aXRjaEJ1dHRvblwiKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMudXBkYXRlU3R5bGUoKTtcbiAgICB9XG5cblxuXG59XG5cblxuY29uc3Qgc2lkZUJhckNvbnRhaW5lckNvbmZpZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgc2lkZUJhckNvbnRhaW5lckNvbmZpZ1xuXG5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLkNvbnRhaW5lciA9IENvbnRhaW5lckNvbmZpZztcbnNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheSA9IE92ZXJsYXlDb25maWc7XG5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXIgPSBTaWRlQmFyQ29uZmlnO1xuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXInLCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnLkNvbnRhaW5lcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5Jywgc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXInLCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cblxuXG5cbiJdfQ==
