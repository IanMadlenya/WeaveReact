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

var ContainerConfig = function ContainerConfig() {
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

    this.style.display.state = "flex";
    this.style.other.state = {
        flexDirection: "row",
        width: "100%",
        height: "100%"
    };
};

var OverlayConfig = function () {
    function OverlayConfig() {
        _classCallCheck(this, OverlayConfig);

        _ComponentManager2.default.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            "open": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });
        this.style.position.state = "fixed";

        this.open.addImmediateCallback(this, this.updateStyle);
    }

    _createClass(OverlayConfig, [{
        key: "updateStyle",
        value: function updateStyle() {
            if (this.open.state) {
                this.style.other.state = {
                    zIndex: "1",
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(0, 0, 0)",
                    background: "rgba(0, 0, 0, 0.1)",
                    opacity: 1
                };
            } else {
                this.style.other.state = {
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
            this.style.display.state = "flex";

            var styleObject = this.style.other.state ? this.style.other.state : {};
            styleObject["justifyContent"] = "flex-start";

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
                this.style.other.state = styleObject;
            } else if (this.direction === "top" || this.direction === "bottom") {
                styleObject["flexDirection"] = "row";
                this.style.other.state = styleObject;
            }
            this.style.other.state = styleObject;
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
                var iconStyle = buttonConfig.iconModeStyle.other.state;
                iconStyle = iconStyle ? iconStyle : {};
                iconStyle["fontSize"] = 24;
                buttonConfig.iconModeStyle.other.state = iconStyle;
                buttonConfig.iconOnly.state = true;
                var btnStyle = buttonConfig.style.other.state;
                btnStyle["justifyContent"] = "flex-end";
                btnStyle["alignSelf"] = "flex-end";
                buttonConfig.style.other.state = btnStyle;
                buttonConfig.props.addEvent("onClick", this.toggleSideBarState, null, this);
                var buttonStyle = buttonConfig.style.other.state;
                buttonStyle["order"] = "-1";
                buttonStyle["margin"] = "4px";
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
//# sourceMappingURL=data:application/json;base64,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dUIsT0FBdkIsR0FBaUMsYUFBakM7QUFDQSx1QkFBdUIsT0FBdkIsR0FBaUMsYUFBakM7OztBQUdBLE1BQU0sYUFBTixDQUFvQiw2Q0FBcEIsRUFBbUUsdUJBQXVCLFNBQXZCLEVBQWlDLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFyRztBQUNBLE1BQU0sYUFBTixDQUFvQiwyQ0FBcEIsRUFBaUUsdUJBQXVCLE9BQXZCLEVBQStCLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRztBQUNBLE1BQU0sYUFBTixDQUFvQiwyQ0FBcEIsRUFBaUUsdUJBQXVCLE9BQXZCLEVBQStCLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRyIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcbmltcG9ydCBDU1MgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvQ1NTXCI7XG5pbXBvcnQgUHJvcHMgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvUHJvcHNcIjtcbmltcG9ydCBCdXR0b25Db25maWcgZnJvbSBcIi4uL2J1dHRvbi9Db25maWdcIjtcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cbmNsYXNzIENvbnRhaW5lckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMsXCJjb250YWluZXJcIik7XG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFwibW9kZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib3ZlcmxheVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgT3ZlcmxheUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVmdFNpZGVCYXJcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBTaWRlQmFyQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyaWdodFNpZGVCYXJcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBTaWRlQmFyQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0b3BTaWRlQmFyXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgU2lkZUJhckNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYm90dG9tU2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMubGVmdFNpZGVCYXIuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgIHRoaXMucmlnaHRTaWRlQmFyLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgdGhpcy5ib3R0b21TaWRlQmFyLmRpcmVjdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgICAgIHRoaXMudG9wU2lkZUJhci5kaXJlY3Rpb24gPSBcInRvcFwiO1xuXG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnN0YXRlID0gXCJmbGV4XCJcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcbiAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiXG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG5cblxuY2xhc3MgT3ZlcmxheUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgIFwib3BlblwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGUucG9zaXRpb24uc3RhdGUgPSBcImZpeGVkXCI7XG5cbiAgICAgICAgdGhpcy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMudXBkYXRlU3R5bGUpO1xuXG4gICAgfVxuXG4gICB1cGRhdGVTdHlsZSgpe1xuICAgICBpZih0aGlzLm9wZW4uc3RhdGUpe1xuICAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9e1xuICAgICAgICAgICAgekluZGV4OiBcIjFcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMCwgMCwgMClcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiAgMVxuICAgICAgICB9XG5cbiAgICAgfWVsc2V7XG4gICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID17XG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMClcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiAgMFxuICAgICAgICB9XG5cbiAgICAgfVxuICAgfVxuXG5cblxufVxuXG5cblxuY2xhc3MgU2lkZUJhckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMsXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIFwic2l6ZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogIFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjE2JVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgc3RhdGljOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgaWNvbnNPbmx5OntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIG9wZW46e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy51cGRhdGVTdHlsZSx0cnVlKTtcbiAgICAgICAgdGhpcy5zdGF0aWMuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVNpZGVCYXJDb250cm9sbGVyLHRydWUpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnN0YXRlID0gXCJmbGV4XCI7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA/IHRoaXMuc3R5bGUub3RoZXIuc3RhdGU6IHt9O1xuICAgICAgICBzdHlsZU9iamVjdFtcImp1c3RpZnlDb250ZW50XCJdPVwiZmxleC1zdGFydFwiO1xuXG5cbiAgICAgICAgaWYodGhpcy5vcGVuLnN0YXRlKXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleEJhc2lzXCJdID0gdGhpcy5zaXplLnZhbHVlO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJhbGlnbkl0ZW1zXCJdID0gIFwiZmxleC1zdGFydFwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIGZvciBzdGF0aWMgc3RhdGUgdGhlIHN3aXRjaCBidXR0b24gd2l0aCB3aWxsIGJlIHRha2VuXG4gICAgICAgICAgICAvL3N0eWxlT2JqZWN0W1wiZmxleEJhc2lzXCJdID0gdGhpcy5zdGF0aWMuc3RhdGU/XCIzJVwiOlwiMCVcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleEJhc2lzXCJdID0gXCIwJVwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJhbGlnbkl0ZW1zXCJdID0gIFwiY2VudGVyXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiIHx8IHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHN0eWxlT2JqZWN0XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZGlyZWN0aW9uID09PSBcInRvcFwiIHx8IHRoaXMuZGlyZWN0aW9uID09PSBcImJvdHRvbVwiKXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwicm93XCI7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0gc3R5bGVPYmplY3RcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0gc3R5bGVPYmplY3Q7XG4gICAgfVxuXG4gICAgdG9nZ2xlU2lkZUJhclN0YXRlKCl7XG4gICAgICAgIHZhciBidXR0b25Db25maWcgPSB0aGlzLmNoaWxkcmVuLmdldE9iamVjdChcInN3aXRjaEJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5vcGVuLnN0YXRlID0gIWJ1dHRvbkNvbmZpZy5jbGlja2VkLnN0YXRlO1xuICAgIH1cblxuICAgIHVwZGF0ZVNpZGVCYXJDb250cm9sbGVyKCl7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0aWMuc3RhdGUpe1xuICAgICAgICAgICAgdmFyIGJ1dHRvbkNvbmZpZyA9IHRoaXMuY2hpbGRyZW4ucmVxdWVzdE9iamVjdChcInN3aXRjaEJ1dHRvblwiLCBCdXR0b25Db25maWcpO1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLmljb24uc3RhdGUgPSB7XCJjbGlja2VkXCI6IFwiZmEgZmEtYWxpZ24tanVzdGlmeVwiICxcImRlZmF1bHRcIjpcImZhIGZhLXRpbWVzXCJ9O1xuICAgICAgICAgICAgdmFyIGljb25TdHlsZSA9IGJ1dHRvbkNvbmZpZy5pY29uTW9kZVN0eWxlLm90aGVyLnN0YXRlO1xuICAgICAgICAgICAgaWNvblN0eWxlID0gaWNvblN0eWxlP2ljb25TdHlsZTp7fTtcbiAgICAgICAgICAgIGljb25TdHlsZVtcImZvbnRTaXplXCJdID0gMjQ7XG4gICAgICAgICAgICBidXR0b25Db25maWcuaWNvbk1vZGVTdHlsZS5vdGhlci5zdGF0ZSA9IGljb25TdHlsZTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5pY29uT25seS5zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgYnRuU3R5bGUgPSBidXR0b25Db25maWcuc3R5bGUub3RoZXIuc3RhdGU7XG4gICAgICAgICAgICBidG5TdHlsZVtcImp1c3RpZnlDb250ZW50XCJdID0gIFwiZmxleC1lbmRcIjtcbiAgICAgICAgICAgIGJ0blN0eWxlW1wiYWxpZ25TZWxmXCJdID0gIFwiZmxleC1lbmRcIjtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5zdHlsZS5vdGhlci5zdGF0ZSA9IGJ0blN0eWxlO1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLnByb3BzLmFkZEV2ZW50KFwib25DbGlja1wiLHRoaXMudG9nZ2xlU2lkZUJhclN0YXRlLG51bGwsdGhpcyk7XG4gICAgICAgICAgICB2YXIgYnV0dG9uU3R5bGUgPSBidXR0b25Db25maWcuc3R5bGUub3RoZXIuc3RhdGUgO1xuICAgICAgICAgICAgYnV0dG9uU3R5bGVbXCJvcmRlclwiXSA9IFwiLTFcIjtcbiAgICAgICAgICAgIGJ1dHRvblN0eWxlW1wibWFyZ2luXCJdID0gXCI0cHhcIjtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5jbGlja2VkLnN0YXRlID0gIXRoaXMub3Blbi5zdGF0ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZU9iamVjdChcInN3aXRjaEJ1dHRvblwiKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMudXBkYXRlU3R5bGUoKTtcbiAgICB9XG5cblxuXG59XG5cblxuY29uc3Qgc2lkZUJhckNvbnRhaW5lckNvbmZpZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgc2lkZUJhckNvbnRhaW5lckNvbmZpZ1xuXG5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLkNvbnRhaW5lciA9IENvbnRhaW5lckNvbmZpZztcbnNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheSA9IE92ZXJsYXlDb25maWc7XG5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXIgPSBTaWRlQmFyQ29uZmlnO1xuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXInLCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnLkNvbnRhaW5lcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5Jywgc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXInLCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cblxuXG5cbiJdfQ==
