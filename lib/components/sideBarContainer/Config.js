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
            } else {
                styleObject["flexBasis"] = this.static.state ? "3%" : "0%";
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
                buttonConfig.style.other.state = btnStyle;
                buttonConfig.props.addEvent("onClick", this.toggleSideBarState, null, this);
                var buttonStyle = buttonConfig.style.other.state;
                buttonStyle["order"] = "-1";
            } else {
                this.children.removeObject("switchButton");
            }
            this.updateStyle();
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
//# sourceMappingURL=data:application/json;base64,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QSx1QkFBdUIsT0FBdkIsR0FBaUMsYUFBakM7QUFDQSx1QkFBdUIsT0FBdkIsR0FBaUMsYUFBakM7OztBQUdBLE1BQU0sYUFBTixDQUFvQiw2Q0FBcEIsRUFBbUUsdUJBQXVCLFNBQXZCLEVBQWlDLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFyRztBQUNBLE1BQU0sYUFBTixDQUFvQiwyQ0FBcEIsRUFBaUUsdUJBQXVCLE9BQXZCLEVBQStCLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRztBQUNBLE1BQU0sYUFBTixDQUFvQiwyQ0FBcEIsRUFBaUUsdUJBQXVCLE9BQXZCLEVBQStCLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRyIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcbmltcG9ydCBDU1MgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvQ1NTXCI7XG5pbXBvcnQgUHJvcHMgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvUHJvcHNcIjtcbmltcG9ydCBCdXR0b25Db25maWcgZnJvbSBcIi4uL2J1dHRvbi9Db25maWdcIjtcblxuY2xhc3MgQ29udGFpbmVyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtb2RlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvdmVybGF5XCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBPdmVybGF5Q29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsZWZ0U2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJpZ2h0U2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRvcFNpZGVCYXJcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBTaWRlQmFyQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJib3R0b21TaWRlQmFyXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgU2lkZUJhckNvbmZpZygpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5sZWZ0U2lkZUJhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgdGhpcy5yaWdodFNpZGVCYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICB0aGlzLmJvdHRvbVNpZGVCYXIuZGlyZWN0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgdGhpcy50b3BTaWRlQmFyLmRpcmVjdGlvbiA9IFwidG9wXCI7XG5cblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkuc3RhdGUgPSBcImZsZXhcIlxuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCJcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuXG5jbGFzcyBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJvcGVuXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHlsZS5wb3NpdGlvbi5zdGF0ZSA9IFwiZml4ZWRcIjtcblxuICAgICAgICB0aGlzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy51cGRhdGVTdHlsZSk7XG5cbiAgICB9XG5cbiAgIHVwZGF0ZVN0eWxlKCl7XG4gICAgIGlmKHRoaXMub3Blbi5zdGF0ZSl7XG4gICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID17XG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAxXG4gICAgICAgIH1cblxuICAgICB9ZWxzZXtcbiAgICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPXtcbiAgICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAwXG4gICAgICAgIH1cblxuICAgICB9XG4gICB9XG5cblxuXG59XG5cblxuXG5jbGFzcyBTaWRlQmFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcInByb3BzXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgUHJvcHMoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBzdGF0aWM6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBpY29uc09ubHk6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgb3Blbjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBlbmFibGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5vcGVuLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy51cGRhdGVTdHlsZSx0cnVlKTtcbiAgICAgICAgdGhpcy5zdGF0aWMuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVNpZGVCYXJDb250cm9sbGVyLHRydWUpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnN0YXRlID0gXCJmbGV4XCI7XG5cbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA/IHRoaXMuc3R5bGUub3RoZXIuc3RhdGU6IHt9O1xuICAgICAgICAgc3R5bGVPYmplY3RbXCJqdXN0aWZ5Q29udGVudFwiXT1cImZsZXgtc3RhcnRcIjtcblxuICAgICAgICBpZih0aGlzLm9wZW4uc3RhdGUpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4QmFzaXNcIl0gPSBcIjEyJVwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleEJhc2lzXCJdID0gdGhpcy5zdGF0aWMuc3RhdGU/XCIzJVwiOlwiMCVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgfHwgdGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0gc3R5bGVPYmplY3RcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb24gPT09IFwidG9wXCIgfHwgdGhpcy5kaXJlY3Rpb24gPT09IFwiYm90dG9tXCIpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJyb3dcIjtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSBzdHlsZU9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSBzdHlsZU9iamVjdDtcbiAgICB9XG5cbiAgICB0b2dnbGVTaWRlQmFyU3RhdGUoKXtcbiAgICAgICAgdmFyIGJ1dHRvbkNvbmZpZyA9IHRoaXMuY2hpbGRyZW4uZ2V0T2JqZWN0KFwic3dpdGNoQnV0dG9uXCIpO1xuICAgICAgICB0aGlzLm9wZW4uc3RhdGUgPSAhYnV0dG9uQ29uZmlnLmNsaWNrZWQuc3RhdGU7XG4gICAgfVxuXG4gICAgdXBkYXRlU2lkZUJhckNvbnRyb2xsZXIoKXtcblxuICAgICAgICBpZih0aGlzLnN0YXRpYy5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgYnV0dG9uQ29uZmlnID0gdGhpcy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KFwic3dpdGNoQnV0dG9uXCIsIEJ1dHRvbkNvbmZpZyk7XG4gICAgICAgICAgICBidXR0b25Db25maWcuaWNvbi5zdGF0ZSA9IHtcImNsaWNrZWRcIjogXCJmYSBmYS1hbGlnbi1qdXN0aWZ5XCIgLFwiZGVmYXVsdFwiOlwiZmEgZmEtdGltZXNcIn07XG4gICAgICAgICAgICB2YXIgaWNvblN0eWxlID0gYnV0dG9uQ29uZmlnLmljb25TdHlsZS5vdGhlci5zdGF0ZTtcbiAgICAgICAgICAgIGljb25TdHlsZSA9IGljb25TdHlsZT9pY29uU3R5bGU6e307XG4gICAgICAgICAgICBpY29uU3R5bGVbXCJmb250U2l6ZVwiXSA9IDI0O1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLmljb25TdHlsZS5vdGhlci5zdGF0ZSA9IGljb25TdHlsZTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5pY29uT25seS5zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgYnRuU3R5bGUgPSBidXR0b25Db25maWcuc3R5bGUub3RoZXIuc3RhdGU7XG4gICAgICAgICAgICBidG5TdHlsZVtcImp1c3RpZnlDb250ZW50XCJdID0gIFwiZmxleC1lbmRcIjtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5zdHlsZS5vdGhlci5zdGF0ZSA9IGJ0blN0eWxlO1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLnByb3BzLmFkZEV2ZW50KFwib25DbGlja1wiLHRoaXMudG9nZ2xlU2lkZUJhclN0YXRlLG51bGwsdGhpcyk7XG4gICAgICAgICAgICB2YXIgYnV0dG9uU3R5bGUgPSBidXR0b25Db25maWcuc3R5bGUub3RoZXIuc3RhdGUgO1xuICAgICAgICAgICAgYnV0dG9uU3R5bGVbXCJvcmRlclwiXSA9IFwiLTFcIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZU9iamVjdChcInN3aXRjaEJ1dHRvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XG4gICAgfVxuXG5cblxufVxuXG5cbmNvbnN0IHNpZGVCYXJDb250YWluZXJDb25maWcgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IHNpZGVCYXJDb250YWluZXJDb25maWdcblxuc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXIgPSBDb250YWluZXJDb25maWc7XG5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLk92ZXJsYXkgPSBPdmVybGF5Q29uZmlnO1xuc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyID0gU2lkZUJhckNvbmZpZztcblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyJywgc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheScsIHNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyJywgc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cblxuXG4iXX0=
