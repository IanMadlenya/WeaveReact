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
                styleObject["alignItems"] = "flex-start";
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
//# sourceMappingURL=data:application/json;base64,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QWpDO0FBQ0EsdUJBQXVCLE9BQXZCLEdBQWlDLGFBQWpDOzs7QUFHQSxNQUFNLGFBQU4sQ0FBb0IsNkNBQXBCLEVBQW1FLHVCQUF1QixTQUF2QixFQUFpQyxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBckc7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsMkNBQXBCLEVBQWlFLHVCQUF1QixPQUF2QixFQUErQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakc7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsMkNBQXBCLEVBQWlFLHVCQUF1QixPQUF2QixFQUErQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakciLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ1NTIGZyb20gXCIuLi8uLi9jb25maWdzL0NTU1wiO1xuaW1wb3J0IFByb3BzIGZyb20gXCIuLi8uLi9jb25maWdzL1Byb3BzXCI7XG5pbXBvcnQgQnV0dG9uQ29uZmlnIGZyb20gXCIuLi9idXR0b24vQ29uZmlnXCI7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5jbGFzcyBDb250YWluZXJDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAgICAgICBcIm1vZGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm92ZXJsYXlcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IE92ZXJsYXlDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxlZnRTaWRlQmFyXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgU2lkZUJhckNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRTaWRlQmFyXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgU2lkZUJhckNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidG9wU2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJvdHRvbVNpZGVCYXJcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBTaWRlQmFyQ29uZmlnKCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLmxlZnRTaWRlQmFyLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLnJpZ2h0U2lkZUJhci5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICAgIHRoaXMuYm90dG9tU2lkZUJhci5kaXJlY3Rpb24gPSBcImJvdHRvbVwiO1xuICAgICAgICB0aGlzLnRvcFNpZGVCYXIuZGlyZWN0aW9uID0gXCJ0b3BcIjtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcbiAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vdG9kbyBtb3ZlIHRoaXMgdG8gY29tcG9uZW50TWFuYWdlciBkZWZhdWx0Q2FsbGJhY2tzXG4gICAgICAgIHRoaXMucmV2ZXJzZUxheW91dC5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy51cGRhdGVTaWRlQmFyTHlvdXQpO1xuXG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZVNpZGVCYXJMeW91dCgpe1xuICAgICAgICB2YXIgcmV2TGF5b3V0ID0gdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlO1xuICAgICAgICBpZih0aGlzLmxlZnRTaWRlQmFyLnZpc2libGUuc3RhdGUpdGhpcy5sZWZ0U2lkZUJhci5yZXZlcnNlTGF5b3V0LnN0YXRlID0gIHJldkxheW91dDtcbiAgICAgICAgaWYodGhpcy5yaWdodFNpZGVCYXIudmlzaWJsZS5zdGF0ZSl0aGlzLnJpZ2h0U2lkZUJhci5yZXZlcnNlTGF5b3V0LnN0YXRlID0gIHJldkxheW91dDtcbiAgICAgICAgaWYodGhpcy5ib3R0b21TaWRlQmFyLnZpc2libGUuc3RhdGUpdGhpcy5ib3R0b21TaWRlQmFyLnJldmVyc2VMYXlvdXQuc3RhdGUgPSAgcmV2TGF5b3V0O1xuICAgICAgICBpZih0aGlzLnRvcFNpZGVCYXIudmlzaWJsZS5zdGF0ZSl0aGlzLnRvcFNpZGVCYXIucmV2ZXJzZUxheW91dC5zdGF0ZSA9ICByZXZMYXlvdXQ7XG4gICAgfVxuXG5cbn1cblxuXG5jbGFzcyBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgIFwib3BlblwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMudXBkYXRlU3R5bGUpO1xuXG4gICAgfVxuXG4gICB1cGRhdGVTdHlsZSgpe1xuICAgICBpZih0aGlzLm9wZW4uc3RhdGUpe1xuICAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDAsIDAsIDApXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC4xKVwiLFxuICAgICAgICAgICAgb3BhY2l0eTogIDFcbiAgICAgICAgfVxuXG4gICAgIH1lbHNle1xuICAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9e1xuICAgICAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC4xKVwiLFxuICAgICAgICAgICAgb3BhY2l0eTogIDBcbiAgICAgICAgfVxuXG4gICAgIH1cbiAgIH1cblxuXG5cbn1cblxuXG5cbmNsYXNzIFNpZGVCYXJDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgICBcInNpemVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIxNiVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIHN0YXRpYzp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIGljb25zT25seTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBvcGVuOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlwiO1xuXG4gICAgICAgIHRoaXMub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMudXBkYXRlU3R5bGUsdHJ1ZSk7XG4gICAgICAgIHRoaXMuc3RhdGljLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy51cGRhdGVTaWRlQmFyQ29udHJvbGxlcix0cnVlKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZVN0eWxlKCl7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gIHtcbiAgICAgICAgICAgIGRpc3BsYXkgOiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiZmxleC1zdGFydFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYodGhpcy5vcGVuLnN0YXRlKXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleEJhc2lzXCJdID0gdGhpcy5zaXplLnZhbHVlO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJhbGlnbkl0ZW1zXCJdID0gIFwiZmxleC1zdGFydFwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIGZvciBzdGF0aWMgc3RhdGUgdGhlIHN3aXRjaCBidXR0b24gd2l0aCB3aWxsIGJlIHRha2VuXG4gICAgICAgICAgICAvL3N0eWxlT2JqZWN0W1wiZmxleEJhc2lzXCJdID0gdGhpcy5zdGF0aWMuc3RhdGU/XCIzJVwiOlwiMCVcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleEJhc2lzXCJdID0gXCIwJVwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJhbGlnbkl0ZW1zXCJdID0gIFwiY2VudGVyXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiIHx8IHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHN0eWxlT2JqZWN0XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZGlyZWN0aW9uID09PSBcInRvcFwiIHx8IHRoaXMuZGlyZWN0aW9uID09PSBcImJvdHRvbVwiKXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwicm93XCI7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0gc3R5bGVPYmplY3RcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0gc3R5bGVPYmplY3Q7XG4gICAgfVxuXG4gICAgdG9nZ2xlU2lkZUJhclN0YXRlKCl7XG4gICAgICAgIHZhciBidXR0b25Db25maWcgPSB0aGlzLmNoaWxkcmVuLmdldE9iamVjdChcInN3aXRjaEJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5vcGVuLnN0YXRlID0gIWJ1dHRvbkNvbmZpZy5jbGlja2VkLnN0YXRlO1xuICAgIH1cblxuICAgIHVwZGF0ZVNpZGVCYXJDb250cm9sbGVyKCl7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0aWMuc3RhdGUpe1xuICAgICAgICAgICAgdmFyIGJ1dHRvbkNvbmZpZyA9IHRoaXMuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChcInN3aXRjaEJ1dHRvblwiLCBCdXR0b25Db25maWcpO1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLmljb24uc3RhdGUgPSB7XCJjbGlja2VkXCI6IFwiZmEgZmEtYWxpZ24tanVzdGlmeVwiICxcImRlZmF1bHRcIjpcImZhIGZhLXRpbWVzXCJ9O1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLmljb25Nb2RlU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5pY29uT25seS5zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBidXR0b25Db25maWcuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgICAgICAgICAgICAgICBhbGlnblNlbGY6XCJmbGV4LWVuZFwiLFxuICAgICAgICAgICAgICAgIG9yZGVyOlwiLTFcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiNHB4XCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBidXR0b25Db25maWcucHJvcHMuYWRkRXZlbnQoXCJvbkNsaWNrXCIsdGhpcy50b2dnbGVTaWRlQmFyU3RhdGUsbnVsbCx0aGlzKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5jbGlja2VkLnN0YXRlID0gIXRoaXMub3Blbi5zdGF0ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZU9iamVjdChcInN3aXRjaEJ1dHRvblwiKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMudXBkYXRlU3R5bGUoKTtcbiAgICB9XG5cblxuXG59XG5cblxuY29uc3Qgc2lkZUJhckNvbnRhaW5lckNvbmZpZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgc2lkZUJhckNvbnRhaW5lckNvbmZpZ1xuXG5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLkNvbnRhaW5lciA9IENvbnRhaW5lckNvbmZpZztcbnNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheSA9IE92ZXJsYXlDb25maWc7XG5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXIgPSBTaWRlQmFyQ29uZmlnO1xuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXInLCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnLkNvbnRhaW5lcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5Jywgc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXInLCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cblxuXG5cbiJdfQ==
