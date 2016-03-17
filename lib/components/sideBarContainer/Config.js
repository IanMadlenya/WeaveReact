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
            "size": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("16%"))
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
//# sourceMappingURL=data:application/json;base64,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QVosSUFBdUIsSUFBdkIsQ0FkaUI7QUFlakIsNEJBQVksUUFBWixJQUF3QixLQUF4QixDQWZpQjtBQWdCakIsNkJBQWEsT0FBYixDQUFxQixLQUFyQixHQUE2QixDQUFDLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FoQmI7YUFBckIsTUFpQks7QUFDRCxxQkFBSyxRQUFMLENBQWMsWUFBZCxDQUEyQixjQUEzQixFQURDO2FBakJMOztBQUZxQjs7O1dBOUV2Qjs7O0FBNEdOLElBQU0seUJBQXlCLEVBQXpCO2tCQUNTOzs7QUFFZix1QkFBdUIsU0FBdkIsR0FBbUMsZUFBbkM7QUFDQSx1QkFBdUIsT0FBdkIsR0FBaUMsYUFBakM7QUFDQSx1QkFBdUIsT0FBdkIsR0FBaUMsYUFBakM7OztBQUdBLE1BQU0sYUFBTixDQUFvQiw2Q0FBcEIsRUFBbUUsdUJBQXVCLFNBQXZCLEVBQWlDLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFyRztBQUNBLE1BQU0sYUFBTixDQUFvQiwyQ0FBcEIsRUFBaUUsdUJBQXVCLE9BQXZCLEVBQStCLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRztBQUNBLE1BQU0sYUFBTixDQUFvQiwyQ0FBcEIsRUFBaUUsdUJBQXVCLE9BQXZCLEVBQStCLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRyIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcbmltcG9ydCBDU1MgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvQ1NTXCI7XG5pbXBvcnQgUHJvcHMgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvUHJvcHNcIjtcbmltcG9ydCBCdXR0b25Db25maWcgZnJvbSBcIi4uL2J1dHRvbi9Db25maWdcIjtcblxuY2xhc3MgQ29udGFpbmVyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtb2RlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvdmVybGF5XCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBPdmVybGF5Q29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsZWZ0U2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJpZ2h0U2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRvcFNpZGVCYXJcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBTaWRlQmFyQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJib3R0b21TaWRlQmFyXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgU2lkZUJhckNvbmZpZygpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5sZWZ0U2lkZUJhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgdGhpcy5yaWdodFNpZGVCYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICB0aGlzLmJvdHRvbVNpZGVCYXIuZGlyZWN0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgdGhpcy50b3BTaWRlQmFyLmRpcmVjdGlvbiA9IFwidG9wXCI7XG5cblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkuc3RhdGUgPSBcImZsZXhcIlxuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCJcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuXG5jbGFzcyBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJvcGVuXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHlsZS5wb3NpdGlvbi5zdGF0ZSA9IFwiZml4ZWRcIjtcblxuICAgICAgICB0aGlzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy51cGRhdGVTdHlsZSk7XG5cbiAgICB9XG5cbiAgIHVwZGF0ZVN0eWxlKCl7XG4gICAgIGlmKHRoaXMub3Blbi5zdGF0ZSl7XG4gICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID17XG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAxXG4gICAgICAgIH1cblxuICAgICB9ZWxzZXtcbiAgICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPXtcbiAgICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAwXG4gICAgICAgIH1cblxuICAgICB9XG4gICB9XG5cblxuXG59XG5cblxuXG5jbGFzcyBTaWRlQmFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcInByb3BzXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgUHJvcHMoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcInNpemVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIxNiVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIHN0YXRpYzp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIGljb25zT25seTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBvcGVuOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIGVuYWJsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJcIjtcblxuICAgICAgICB0aGlzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlLHRydWUpO1xuICAgICAgICB0aGlzLnN0YXRpYy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMudXBkYXRlU2lkZUJhckNvbnRyb2xsZXIsdHJ1ZSk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZSgpe1xuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkuc3RhdGUgPSBcImZsZXhcIjtcblxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID8gdGhpcy5zdHlsZS5vdGhlci5zdGF0ZToge307XG4gICAgICAgIHN0eWxlT2JqZWN0W1wianVzdGlmeUNvbnRlbnRcIl09XCJmbGV4LXN0YXJ0XCI7XG5cblxuICAgICAgICBpZih0aGlzLm9wZW4uc3RhdGUpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4QmFzaXNcIl0gPSB0aGlzLnNpemUudmFsdWU7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImFsaWduSXRlbXNcIl0gPSAgXCJmbGV4LXN0YXJ0XCI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy8gZm9yIHN0YXRpYyBzdGF0ZSB0aGUgc3dpdGNoIGJ1dHRvbiB3aXRoIHdpbGwgYmUgdGFrZW5cbiAgICAgICAgICAgIC8vc3R5bGVPYmplY3RbXCJmbGV4QmFzaXNcIl0gPSB0aGlzLnN0YXRpYy5zdGF0ZT9cIjMlXCI6XCIwJVwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4QmFzaXNcIl0gPSBcIjAlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImFsaWduSXRlbXNcIl0gPSAgXCJjZW50ZXJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgfHwgdGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0gc3R5bGVPYmplY3RcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb24gPT09IFwidG9wXCIgfHwgdGhpcy5kaXJlY3Rpb24gPT09IFwiYm90dG9tXCIpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJyb3dcIjtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSBzdHlsZU9iamVjdFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSBzdHlsZU9iamVjdDtcbiAgICB9XG5cbiAgICB0b2dnbGVTaWRlQmFyU3RhdGUoKXtcbiAgICAgICAgdmFyIGJ1dHRvbkNvbmZpZyA9IHRoaXMuY2hpbGRyZW4uZ2V0T2JqZWN0KFwic3dpdGNoQnV0dG9uXCIpO1xuICAgICAgICB0aGlzLm9wZW4uc3RhdGUgPSAhYnV0dG9uQ29uZmlnLmNsaWNrZWQuc3RhdGU7XG4gICAgfVxuXG4gICAgdXBkYXRlU2lkZUJhckNvbnRyb2xsZXIoKXtcblxuICAgICAgICBpZih0aGlzLnN0YXRpYy5zdGF0ZSl7XG4gICAgICAgICAgICB2YXIgYnV0dG9uQ29uZmlnID0gdGhpcy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KFwic3dpdGNoQnV0dG9uXCIsIEJ1dHRvbkNvbmZpZyk7XG4gICAgICAgICAgICBidXR0b25Db25maWcuaWNvbi5zdGF0ZSA9IHtcImNsaWNrZWRcIjogXCJmYSBmYS1hbGlnbi1qdXN0aWZ5XCIgLFwiZGVmYXVsdFwiOlwiZmEgZmEtdGltZXNcIn07XG4gICAgICAgICAgICB2YXIgaWNvblN0eWxlID0gYnV0dG9uQ29uZmlnLmljb25TdHlsZS5vdGhlci5zdGF0ZTtcbiAgICAgICAgICAgIGljb25TdHlsZSA9IGljb25TdHlsZT9pY29uU3R5bGU6e307XG4gICAgICAgICAgICBpY29uU3R5bGVbXCJmb250U2l6ZVwiXSA9IDI0O1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLmljb25TdHlsZS5vdGhlci5zdGF0ZSA9IGljb25TdHlsZTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5pY29uT25seS5zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgYnRuU3R5bGUgPSBidXR0b25Db25maWcuc3R5bGUub3RoZXIuc3RhdGU7XG4gICAgICAgICAgICBidG5TdHlsZVtcImp1c3RpZnlDb250ZW50XCJdID0gIFwiZmxleC1lbmRcIjtcbiAgICAgICAgICAgIGJ0blN0eWxlW1wiYWxpZ25TZWxmXCJdID0gIFwiZmxleC1lbmRcIjtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5zdHlsZS5vdGhlci5zdGF0ZSA9IGJ0blN0eWxlO1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLnByb3BzLmFkZEV2ZW50KFwib25DbGlja1wiLHRoaXMudG9nZ2xlU2lkZUJhclN0YXRlLG51bGwsdGhpcyk7XG4gICAgICAgICAgICB2YXIgYnV0dG9uU3R5bGUgPSBidXR0b25Db25maWcuc3R5bGUub3RoZXIuc3RhdGUgO1xuICAgICAgICAgICAgYnV0dG9uU3R5bGVbXCJvcmRlclwiXSA9IFwiLTFcIjtcbiAgICAgICAgICAgIGJ1dHRvblN0eWxlW1wibWFyZ2luXCJdID0gXCI0cHhcIjtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5jbGlja2VkLnN0YXRlID0gIXRoaXMub3Blbi5zdGF0ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZU9iamVjdChcInN3aXRjaEJ1dHRvblwiKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMudXBkYXRlU3R5bGUoKTtcbiAgICB9XG5cblxuXG59XG5cblxuY29uc3Qgc2lkZUJhckNvbnRhaW5lckNvbmZpZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgc2lkZUJhckNvbnRhaW5lckNvbmZpZ1xuXG5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLkNvbnRhaW5lciA9IENvbnRhaW5lckNvbmZpZztcbnNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheSA9IE92ZXJsYXlDb25maWc7XG5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXIgPSBTaWRlQmFyQ29uZmlnO1xuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXInLCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnLkNvbnRhaW5lcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5Jywgc2lkZUJhckNvbnRhaW5lckNvbmZpZy5PdmVybGF5LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXInLCBzaWRlQmFyQ29udGFpbmVyQ29uZmlnLlNpZGVCYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cblxuXG5cbiJdfQ==
