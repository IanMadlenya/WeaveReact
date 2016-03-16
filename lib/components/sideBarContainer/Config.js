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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContainerConfig = function ContainerConfig() {
    _classCallCheck(this, ContainerConfig);

    Object.defineProperties(this, {
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        },
        "CSS": {
            value: Weave.linkableChild(this, new _CSS2.default())
        },
        "children": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
        },
        "useCSS": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
        },
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

    this.childConfigMap = new Map();
    this.configChildMap = new Map();

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

        Object.defineProperties(this, {
            "style": {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            "CSS": {
                value: Weave.linkableChild(this, new _CSS2.default())
            },
            "useCSS": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "enable": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
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

        Object.defineProperties(this, {
            "style": {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            "CSS": {
                value: Weave.linkableChild(this, new _CSS2.default())
            },
            "props": {
                value: new _Props2.default()
            },
            "children": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            },
            "useCSS": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            static: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            iconsOnly: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            open: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            enable: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });

        this.childConfigMap = new Map();
        this.configChildMap = new Map();
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
                styleObject["flexBasis"] = "12%";
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
                var iconStyle = buttonConfig.iconStyle.other.state;
                iconStyle = iconStyle ? iconStyle : {};
                iconStyle["fontSize"] = 24;
                buttonConfig.iconStyle.other.state = iconStyle;
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
//# sourceMappingURL=data:application/json;base64,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Q0FoQmI7YUFBckIsTUFpQks7QUFDRCxxQkFBSyxRQUFMLENBQWMsWUFBZCxDQUEyQixjQUEzQixFQURDO2FBakJMOztBQUZxQjs7O1dBM0V2Qjs7O0FBeUdOLElBQU0seUJBQXlCLEVBQXpCO2tCQUNTOzs7QUFFZix1QkFBdUIsU0FBdkIsR0FBbUMsZUFBbkM7QUFDQSx1QkFBdUIsT0FBdkIsR0FBaUMsYUFBakM7QUFDQSx1QkFBdUIsT0FBdkIsR0FBaUMsYUFBakM7OztBQUdBLE1BQU0sYUFBTixDQUFvQiw2Q0FBcEIsRUFBbUUsdUJBQXVCLFNBQXZCLEVBQWlDLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFyRztBQUNBLE1BQU0sYUFBTixDQUFvQiwyQ0FBcEIsRUFBaUUsdUJBQXVCLE9BQXZCLEVBQStCLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRztBQUNBLE1BQU0sYUFBTixDQUFvQiwyQ0FBcEIsRUFBaUUsdUJBQXVCLE9BQXZCLEVBQStCLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRyIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcbmltcG9ydCBDU1MgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvQ1NTXCI7XG5pbXBvcnQgUHJvcHMgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvUHJvcHNcIjtcbmltcG9ydCBCdXR0b25Db25maWcgZnJvbSBcIi4uL2J1dHRvbi9Db25maWdcIjtcblxuY2xhc3MgQ29udGFpbmVyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtb2RlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvdmVybGF5XCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBPdmVybGF5Q29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsZWZ0U2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJpZ2h0U2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRvcFNpZGVCYXJcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBTaWRlQmFyQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJib3R0b21TaWRlQmFyXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgU2lkZUJhckNvbmZpZygpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5sZWZ0U2lkZUJhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgdGhpcy5yaWdodFNpZGVCYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICB0aGlzLmJvdHRvbVNpZGVCYXIuZGlyZWN0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgdGhpcy50b3BTaWRlQmFyLmRpcmVjdGlvbiA9IFwidG9wXCI7XG5cblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkuc3RhdGUgPSBcImZsZXhcIlxuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCJcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuXG5jbGFzcyBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJvcGVuXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHlsZS5wb3NpdGlvbi5zdGF0ZSA9IFwiZml4ZWRcIjtcblxuICAgICAgICB0aGlzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy51cGRhdGVTdHlsZSk7XG5cbiAgICB9XG5cbiAgIHVwZGF0ZVN0eWxlKCl7XG4gICAgIGlmKHRoaXMub3Blbi5zdGF0ZSl7XG4gICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID17XG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAxXG4gICAgICAgIH1cblxuICAgICB9ZWxzZXtcbiAgICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPXtcbiAgICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAwXG4gICAgICAgIH1cblxuICAgICB9XG4gICB9XG5cblxuXG59XG5cblxuXG5jbGFzcyBTaWRlQmFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcInByb3BzXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgUHJvcHMoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBzdGF0aWM6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBpY29uc09ubHk6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgb3Blbjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBlbmFibGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy51cGRhdGVTdHlsZSx0cnVlKTtcbiAgICAgICAgdGhpcy5zdGF0aWMuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVNpZGVCYXJDb250cm9sbGVyLHRydWUpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnN0YXRlID0gXCJmbGV4XCI7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA/IHRoaXMuc3R5bGUub3RoZXIuc3RhdGU6IHt9O1xuICAgICAgICBzdHlsZU9iamVjdFtcImp1c3RpZnlDb250ZW50XCJdPVwiZmxleC1zdGFydFwiO1xuXG5cbiAgICAgICAgaWYodGhpcy5vcGVuLnN0YXRlKXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleEJhc2lzXCJdID0gXCIxMiVcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYWxpZ25JdGVtc1wiXSA9ICBcImZsZXgtc3RhcnRcIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBmb3Igc3RhdGljIHN0YXRlIHRoZSBzd2l0Y2ggYnV0dG9uIHdpdGggd2lsbCBiZSB0YWtlblxuICAgICAgICAgICAgLy9zdHlsZU9iamVjdFtcImZsZXhCYXNpc1wiXSA9IHRoaXMuc3RhdGljLnN0YXRlP1wiMyVcIjpcIjAlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhCYXNpc1wiXSA9IFwiMCVcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYWxpZ25JdGVtc1wiXSA9ICBcImNlbnRlclwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIiB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSBzdHlsZU9iamVjdFxuICAgICAgICB9ZWxzZSBpZih0aGlzLmRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gXCJib3R0b21cIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcInJvd1wiO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHN0eWxlT2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHN0eWxlT2JqZWN0O1xuICAgIH1cblxuICAgIHRvZ2dsZVNpZGVCYXJTdGF0ZSgpe1xuICAgICAgICB2YXIgYnV0dG9uQ29uZmlnID0gdGhpcy5jaGlsZHJlbi5nZXRPYmplY3QoXCJzd2l0Y2hCdXR0b25cIik7XG4gICAgICAgIHRoaXMub3Blbi5zdGF0ZSA9ICFidXR0b25Db25maWcuY2xpY2tlZC5zdGF0ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVTaWRlQmFyQ29udHJvbGxlcigpe1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGljLnN0YXRlKXtcbiAgICAgICAgICAgIHZhciBidXR0b25Db25maWcgPSB0aGlzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoXCJzd2l0Y2hCdXR0b25cIiwgQnV0dG9uQ29uZmlnKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5pY29uLnN0YXRlID0ge1wiY2xpY2tlZFwiOiBcImZhIGZhLWFsaWduLWp1c3RpZnlcIiAsXCJkZWZhdWx0XCI6XCJmYSBmYS10aW1lc1wifTtcbiAgICAgICAgICAgIHZhciBpY29uU3R5bGUgPSBidXR0b25Db25maWcuaWNvblN0eWxlLm90aGVyLnN0YXRlO1xuICAgICAgICAgICAgaWNvblN0eWxlID0gaWNvblN0eWxlP2ljb25TdHlsZTp7fTtcbiAgICAgICAgICAgIGljb25TdHlsZVtcImZvbnRTaXplXCJdID0gMjQ7XG4gICAgICAgICAgICBidXR0b25Db25maWcuaWNvblN0eWxlLm90aGVyLnN0YXRlID0gaWNvblN0eWxlO1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLmljb25Pbmx5LnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBidG5TdHlsZSA9IGJ1dHRvbkNvbmZpZy5zdHlsZS5vdGhlci5zdGF0ZTtcbiAgICAgICAgICAgIGJ0blN0eWxlW1wianVzdGlmeUNvbnRlbnRcIl0gPSAgXCJmbGV4LWVuZFwiO1xuICAgICAgICAgICAgYnRuU3R5bGVbXCJhbGlnblNlbGZcIl0gPSAgXCJmbGV4LWVuZFwiO1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLnN0eWxlLm90aGVyLnN0YXRlID0gYnRuU3R5bGU7XG4gICAgICAgICAgICBidXR0b25Db25maWcucHJvcHMuYWRkRXZlbnQoXCJvbkNsaWNrXCIsdGhpcy50b2dnbGVTaWRlQmFyU3RhdGUsbnVsbCx0aGlzKTtcbiAgICAgICAgICAgIHZhciBidXR0b25TdHlsZSA9IGJ1dHRvbkNvbmZpZy5zdHlsZS5vdGhlci5zdGF0ZSA7XG4gICAgICAgICAgICBidXR0b25TdHlsZVtcIm9yZGVyXCJdID0gXCItMVwiO1xuICAgICAgICAgICAgYnV0dG9uU3R5bGVbXCJtYXJnaW5cIl0gPSBcIjRweFwiO1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLmNsaWNrZWQuc3RhdGUgPSAhdGhpcy5vcGVuLnN0YXRlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucmVtb3ZlT2JqZWN0KFwic3dpdGNoQnV0dG9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy51cGRhdGVTdHlsZSgpO1xuICAgIH1cblxuXG5cbn1cblxuXG5jb25zdCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnID0ge307XG5leHBvcnQgZGVmYXVsdCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnXG5cbnNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyID0gQ29udGFpbmVyQ29uZmlnO1xuc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5ID0gT3ZlcmxheUNvbmZpZztcbnNpZGVCYXJDb250YWluZXJDb25maWcuU2lkZUJhciA9IFNpZGVCYXJDb25maWc7XG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLkNvbnRhaW5lcicsIHNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLk92ZXJsYXknLCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnLk92ZXJsYXksW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuU2lkZUJhcicsIHNpZGVCYXJDb250YWluZXJDb25maWcuU2lkZUJhcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuXG5cblxuIl19
