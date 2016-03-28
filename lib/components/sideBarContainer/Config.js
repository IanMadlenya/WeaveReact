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

    this.style.state = {
        display: "flex",
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
//# sourceMappingURL=data:application/json;base64,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QUNBLDRCQUFRLEtBQVI7aUJBSkosQ0FQaUI7QUFhakIsNkJBQWEsS0FBYixDQUFtQixRQUFuQixDQUE0QixTQUE1QixFQUFzQyxLQUFLLGtCQUFMLEVBQXdCLElBQTlELEVBQW1FLElBQW5FLEVBYmlCO0FBY2pCLDZCQUFhLE9BQWIsQ0FBcUIsS0FBckIsR0FBNkIsQ0FBQyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBZGI7YUFBckIsTUFlSztBQUNELHFCQUFLLFFBQUwsQ0FBYyxZQUFkLENBQTJCLGNBQTNCLEVBREM7YUFmTDs7QUFGcUI7OztXQTVEdkI7OztBQXdGTixJQUFNLHlCQUF5QixFQUF6QjtrQkFDUzs7O0FBRWYsdUJBQXVCLFNBQXZCLEdBQW1DLGVBQW5DO0FBQ0EsdUJBQXVCLE9BQXZCLEdBQWlDLGFBQWpDO0FBQ0EsdUJBQXVCLE9BQXZCLEdBQWlDLGFBQWpDOzs7QUFHQSxNQUFNLGFBQU4sQ0FBb0IsNkNBQXBCLEVBQW1FLHVCQUF1QixTQUF2QixFQUFpQyxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBckc7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsMkNBQXBCLEVBQWlFLHVCQUF1QixPQUF2QixFQUErQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakc7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsMkNBQXBCLEVBQWlFLHVCQUF1QixPQUF2QixFQUErQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakciLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ1NTIGZyb20gXCIuLi8uLi9jb25maWdzL0NTU1wiO1xuaW1wb3J0IFByb3BzIGZyb20gXCIuLi8uLi9jb25maWdzL1Byb3BzXCI7XG5pbXBvcnQgQnV0dG9uQ29uZmlnIGZyb20gXCIuLi9idXR0b24vQ29uZmlnXCI7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5jbGFzcyBDb250YWluZXJDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAgICAgICBcIm1vZGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm92ZXJsYXlcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IE92ZXJsYXlDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxlZnRTaWRlQmFyXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgU2lkZUJhckNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRTaWRlQmFyXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgU2lkZUJhckNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidG9wU2lkZUJhclwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IFNpZGVCYXJDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJvdHRvbVNpZGVCYXJcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBTaWRlQmFyQ29uZmlnKCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLmxlZnRTaWRlQmFyLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLnJpZ2h0U2lkZUJhci5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICAgIHRoaXMuYm90dG9tU2lkZUJhci5kaXJlY3Rpb24gPSBcImJvdHRvbVwiO1xuICAgICAgICB0aGlzLnRvcFNpZGVCYXIuZGlyZWN0aW9uID0gXCJ0b3BcIjtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcbiAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiXG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG5cblxuY2xhc3MgT3ZlcmxheUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyk7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgICBcIm9wZW5cIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0eWxlKTtcblxuICAgIH1cblxuICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgaWYodGhpcy5vcGVuLnN0YXRlKXtcbiAgICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAxXG4gICAgICAgIH1cblxuICAgICB9ZWxzZXtcbiAgICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPXtcbiAgICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICAgIG9wYWNpdHk6ICAwXG4gICAgICAgIH1cblxuICAgICB9XG4gICB9XG5cblxuXG59XG5cblxuXG5jbGFzcyBTaWRlQmFyQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAgICAgICAgXCJzaXplXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiAgV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiMTYlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBzdGF0aWM6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBpY29uc09ubHk6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgb3Blbjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJcIjtcblxuICAgICAgICB0aGlzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlLHRydWUpO1xuICAgICAgICB0aGlzLnN0YXRpYy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMudXBkYXRlU2lkZUJhckNvbnRyb2xsZXIsdHJ1ZSk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZSgpe1xuXG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9ICB7XG4gICAgICAgICAgICBkaXNwbGF5IDogXCJmbGV4XCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImZsZXgtc3RhcnRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKHRoaXMub3Blbi5zdGF0ZSl7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhCYXNpc1wiXSA9IHRoaXMuc2l6ZS52YWx1ZTtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYWxpZ25JdGVtc1wiXSA9ICBcImZsZXgtc3RhcnRcIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBmb3Igc3RhdGljIHN0YXRlIHRoZSBzd2l0Y2ggYnV0dG9uIHdpdGggd2lsbCBiZSB0YWtlblxuICAgICAgICAgICAgLy9zdHlsZU9iamVjdFtcImZsZXhCYXNpc1wiXSA9IHRoaXMuc3RhdGljLnN0YXRlP1wiMyVcIjpcIjAlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhCYXNpc1wiXSA9IFwiMCVcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYWxpZ25JdGVtc1wiXSA9ICBcImNlbnRlclwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIiB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSBzdHlsZU9iamVjdFxuICAgICAgICB9ZWxzZSBpZih0aGlzLmRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gXCJib3R0b21cIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcInJvd1wiO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHN0eWxlT2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHN0eWxlT2JqZWN0O1xuICAgIH1cblxuICAgIHRvZ2dsZVNpZGVCYXJTdGF0ZSgpe1xuICAgICAgICB2YXIgYnV0dG9uQ29uZmlnID0gdGhpcy5jaGlsZHJlbi5nZXRPYmplY3QoXCJzd2l0Y2hCdXR0b25cIik7XG4gICAgICAgIHRoaXMub3Blbi5zdGF0ZSA9ICFidXR0b25Db25maWcuY2xpY2tlZC5zdGF0ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVTaWRlQmFyQ29udHJvbGxlcigpe1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGljLnN0YXRlKXtcbiAgICAgICAgICAgIHZhciBidXR0b25Db25maWcgPSB0aGlzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoXCJzd2l0Y2hCdXR0b25cIiwgQnV0dG9uQ29uZmlnKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5pY29uLnN0YXRlID0ge1wiY2xpY2tlZFwiOiBcImZhIGZhLWFsaWduLWp1c3RpZnlcIiAsXCJkZWZhdWx0XCI6XCJmYSBmYS10aW1lc1wifTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbmZpZy5pY29uTW9kZVN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0XCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBidXR0b25Db25maWcuaWNvbk9ubHkuc3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25TZWxmOlwiZmxleC1lbmRcIixcbiAgICAgICAgICAgICAgICBvcmRlcjpcIi0xXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjRweFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnV0dG9uQ29uZmlnLnByb3BzLmFkZEV2ZW50KFwib25DbGlja1wiLHRoaXMudG9nZ2xlU2lkZUJhclN0YXRlLG51bGwsdGhpcyk7XG4gICAgICAgICAgICBidXR0b25Db25maWcuY2xpY2tlZC5zdGF0ZSA9ICF0aGlzLm9wZW4uc3RhdGU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5yZW1vdmVPYmplY3QoXCJzd2l0Y2hCdXR0b25cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLnVwZGF0ZVN0eWxlKCk7XG4gICAgfVxuXG5cblxufVxuXG5cbmNvbnN0IHNpZGVCYXJDb250YWluZXJDb25maWcgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IHNpZGVCYXJDb250YWluZXJDb25maWdcblxuc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXIgPSBDb250YWluZXJDb25maWc7XG5zaWRlQmFyQ29udGFpbmVyQ29uZmlnLk92ZXJsYXkgPSBPdmVybGF5Q29uZmlnO1xuc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyID0gU2lkZUJhckNvbmZpZztcblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuQ29udGFpbmVyJywgc2lkZUJhckNvbnRhaW5lckNvbmZpZy5Db250YWluZXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LnNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheScsIHNpZGVCYXJDb250YWluZXJDb25maWcuT3ZlcmxheSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3Quc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyJywgc2lkZUJhckNvbnRhaW5lckNvbmZpZy5TaWRlQmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cblxuXG4iXX0=
