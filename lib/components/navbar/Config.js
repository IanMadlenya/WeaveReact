"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Brand = require("./Brand");

var _Brand2 = _interopRequireDefault(_Brand);

var _List = require("./List");

var _List2 = _interopRequireDefault(_List);

var _Form = require("./Form");

var _Form2 = _interopRequireDefault(_Form);

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavConfig = function () {
    function NavConfig() {
        _classCallCheck(this, NavConfig);

        _ComponentManager2.default.createDefaultSessionProperties(this, "container");

        Object.defineProperties(this, {
            "dock": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("top"))
            }
        });

        //initial default values
        this.CSS.className.state = "navbar navbar-default";

        this.style.state = {
            display: "flex",
            flexDirection: "row",
            height: "7%",
            minHeight: "50px",
            zIndex: "1000",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid transparent",
            padding: "4px",
            background: "#F8F8F8"
        };

        this.dock.addImmediateCallback(this, this.updateStyle);
        this.reverseLayout.addImmediateCallback(this, this.updateStyle);
    }

    _createClass(NavConfig, [{
        key: "updateStyle",
        value: function updateStyle() {
            var styleObject = {};
            styleObject["top"] = "";
            styleObject["bottom"] = "";
            styleObject["right"] = "";
            styleObject["left"] = "";

            if (this.dock.value === "top") {
                styleObject["position"] = "static";
                styleObject["top"] = "0";
                styleObject["flexDirection"] = this.reverseLayout.state ? "row-reverse" : "row";
                styleObject["width"] = "100%";
                styleObject["height"] = "5%";
            } else if (this.dock.value === "bottom") {
                styleObject["position"] = "fixed";
                styleObject["bottom"] = "0";
                styleObject["flexDirection"] = this.reverseLayout.state ? "row-reverse" : "row";
                styleObject["width"] = "100%";
                styleObject["height"] = "5%";
            } else if (this.dock.value === "right") {
                styleObject["position"] = "fixed";
                styleObject["right"] = "0";
                styleObject["flexDirection"] = "column";
                styleObject["width"] = "5%";
                styleObject["height"] = "100%";
            } else if (this.dock.value === "left") {
                styleObject["position"] = "fixed";
                styleObject["left"] = "0";
                styleObject["flexDirection"] = "column";
                styleObject["width"] = "5%";
                styleObject["height"] = "100%";
            }

            this.style.state = styleObject;
        }
    }]);

    return NavConfig;
}();

var BrandConfig = function BrandConfig() {
    _classCallCheck(this, BrandConfig);

    _ComponentManager2.default.createDefaultSessionProperties(this, "container");

    Object.defineProperties(this, {
        "title": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        }
    });

    this.CSS.className.state = "navbar-header";

    this.style.state = {
        display: "flex",
        flexDirection: "inherit",
        alignItems: "inherit",
        padding: "15px 15px",
        fontSize: "18px",
        lineHeight: "20px"
    };
};

var LogoConfig = function LogoConfig() {
    _classCallCheck(this, LogoConfig);

    _ComponentManager2.default.createDefaultSessionProperties(this);

    Object.defineProperties(this, {
        src: {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        }
    });

    this.style.state = {
        width: "50",
        height: "50",
        border: "2px solid #ebebeb",
        borderRadius: "50%"
    };
};

var TitleConfig = function TitleConfig() {
    _classCallCheck(this, TitleConfig);

    _ComponentManager2.default.createDefaultSessionProperties(this);

    Object.defineProperties(this, {
        title: {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        }
    });

    this.CSS.className.state = "navbar-brand";

    this.style.state = {
        lineHeight: "20px",
        fontSize: "18px"
    };
};

var ListConfig = function () {
    function ListConfig() {
        _classCallCheck(this, ListConfig);

        _ComponentManager2.default.createDefaultSessionProperties(this, "container");

        Object.defineProperties(this, {
            "align": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
            },
            "activePage": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "space": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(8))
            }
        });

        this.CSS.className.state = "nav navbar-nav";

        this.style.state = {
            display: "flex",
            flexDirection: "inherit",
            listStyleType: "none",
            paddingLeft: "0",
            alignItems: "inherit",
            margin: "7.5px"
        };

        this.align.addImmediateCallback(this, this.updateStyle);
    }

    _createClass(ListConfig, [{
        key: "updateStyle",
        value: function updateStyle() {
            _Style2.default.alignChildren(this.style, this.align.state);
        }
    }]);

    return ListConfig;
}();

var LinkConfig = function LinkConfig() {
    _classCallCheck(this, LinkConfig);

    _ComponentManager2.default.createDefaultSessionProperties(this);

    Object.defineProperties(this, {
        "title": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        },
        "iconName": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-home"))
        },
        "activeLinkStyle": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        }
    });

    this.style.state = {
        paddingTop: "10px",
        paddingBottom: "10px",
        lineHeight: "20px",
        color: "#777"
    };
};

var FormConfig = function FormConfig() {
    _classCallCheck(this, FormConfig);

    _ComponentManager2.default.createDefaultSessionProperties(this, "container");

    Object.defineProperties(this, {
        "rightAlign": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
        },
        "space": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
        }
    });

    this.CSS.className.state = "navbar-form navbar-right";

    this.style.state = {
        display: "flex",
        flexDirection: "inherit",
        alignItems: "inherit",
        margin: "4px"
    };
};

var navbarConfig = {};
exports.default = navbarConfig;


navbarConfig.Navbar = NavConfig;
navbarConfig.Brand = BrandConfig;
navbarConfig.Logo = LogoConfig;
navbarConfig.Title = TitleConfig;
navbarConfig.List = ListConfig;
navbarConfig.Link = LinkConfig;
navbarConfig.Form = FormConfig;

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbarConfig.Navbar', navbarConfig.Navbar, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Brand', navbarConfig.Brand, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Logo', navbarConfig.Logo, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Title', navbarConfig.Title, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.List', navbarConfig.List, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Link', navbarConfig.Link, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Form', navbarConfig.Form, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,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RTtBQUNBLE1BQU0sYUFBTixDQUFvQiwrQkFBcEIsRUFBcUQsYUFBYSxLQUFiLEVBQW1CLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUF6RTtBQUNBLE1BQU0sYUFBTixDQUFvQiw4QkFBcEIsRUFBb0QsYUFBYSxJQUFiLEVBQWtCLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUF2RTtBQUNBLE1BQU0sYUFBTixDQUFvQiw4QkFBcEIsRUFBb0QsYUFBYSxJQUFiLEVBQWtCLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUF2RTtBQUNBLE1BQU0sYUFBTixDQUFvQiw4QkFBcEIsRUFBb0QsYUFBYSxJQUFiLEVBQWtCLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUF2RSIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnJhbmQgZnJvbSBcIi4vQnJhbmRcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuY2xhc3MgTmF2Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImRvY2tcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcInRvcFwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9pbml0aWFsIGRlZmF1bHQgdmFsdWVzXG4gICAgICAgIHRoaXMuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IFwibmF2YmFyIG5hdmJhci1kZWZhdWx0XCI7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICBoZWlnaHQ6XCI3JVwiLFxuICAgICAgICAgICAgbWluSGVpZ2h0OlwiNTBweFwiLFxuICAgICAgICAgICAgekluZGV4OiBcIjEwMDBcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgYm9yZGVyOlwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICBwYWRkaW5nOlwiNHB4XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNGOEY4RjhcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZG9jay5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMudXBkYXRlU3R5bGUpO1xuICAgICAgICB0aGlzLnJldmVyc2VMYXlvdXQuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZSgpe1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB7fTtcbiAgICAgICAgc3R5bGVPYmplY3RbXCJ0b3BcIl0gPSBcIlwiO1xuICAgICAgICBzdHlsZU9iamVjdFtcImJvdHRvbVwiXSA9IFwiXCI7XG4gICAgICAgIHN0eWxlT2JqZWN0W1wicmlnaHRcIl0gPSBcIlwiO1xuICAgICAgICBzdHlsZU9iamVjdFtcImxlZnRcIl0gPSBcIlwiO1xuXG4gICAgICAgIGlmKHRoaXMuZG9jay52YWx1ZSA9PT0gXCJ0b3BcIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID0gXCJzdGF0aWNcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1widG9wXCJdID0gXCIwXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSAgdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlPyBcInJvdy1yZXZlcnNlXCIgOlwicm93XCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiNSVcIjtcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMuZG9jay52YWx1ZSA9PT0gXCJib3R0b21cIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJib3R0b21cIl0gPSBcIjBcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT8gXCJyb3ctcmV2ZXJzZVwiIDpcInJvd1wiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjUlXCI7XG4gICAgICAgICB9ZWxzZSBpZih0aGlzLmRvY2sudmFsdWUgPT09IFwicmlnaHRcIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJyaWdodFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgfWVsc2UgaWYodGhpcy5kb2NrLnZhbHVlID09PSBcImxlZnRcIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJsZWZ0XCJdID0gXCIwXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiNSVcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG4gICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHN0eWxlT2JqZWN0O1xuXG4gICAgfVxuXG5cbn1cblxuXG5jbGFzcyBCcmFuZENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBcIm5hdmJhci1oZWFkZXJcIjtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgcGFkZGluZzpcIjE1cHggMTVweFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuY2xhc3MgTG9nb0NvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIHNyYzp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOlwiNTBcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjUwXCIsXG4gICAgICAgICAgICBib3JkZXI6XCIycHggc29saWQgI2ViZWJlYlwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOlwiNTAlXCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmNsYXNzIFRpdGxlQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICB0aXRsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gXCJuYXZiYXItYnJhbmRcIjtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICBmb250U2l6ZTpcIjE4cHhcIlxuICAgICAgICB9O1xuXG4gICAgfVxufVxuXG5cblxuY2xhc3MgTGlzdENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJhbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImxlZnRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVQYWdlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3BhY2VcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoOCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IFwibmF2IG5hdmJhci1uYXZcIjtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBsaXN0U3R5bGVUeXBlOlwibm9uZVwiLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6XCIwXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbWFyZ2luOlwiNy41cHhcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlKTtcblxuICAgIH1cblxuXG4gICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgICAgU3R5bGUuYWxpZ25DaGlsZHJlbih0aGlzLnN0eWxlLHRoaXMuYWxpZ24uc3RhdGUpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBMaW5rQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk5hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1ob21lXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlTGlua1N0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgY29sb3I6XCIjNzc3XCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBGb3JtQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInJpZ2h0QWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3BhY2VcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIycHhcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IFwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCI7XG5cblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbWFyZ2luOlwiNHB4XCJcbiAgICAgICAgfTtcblxuXG4gICAgfVxufVxuXG5cbmNvbnN0IG5hdmJhckNvbmZpZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgbmF2YmFyQ29uZmlnXG5cbm5hdmJhckNvbmZpZy5OYXZiYXIgPSBOYXZDb25maWc7XG5uYXZiYXJDb25maWcuQnJhbmQgPSBCcmFuZENvbmZpZztcbm5hdmJhckNvbmZpZy5Mb2dvID0gTG9nb0NvbmZpZztcbm5hdmJhckNvbmZpZy5UaXRsZSA9IFRpdGxlQ29uZmlnO1xubmF2YmFyQ29uZmlnLkxpc3QgPSBMaXN0Q29uZmlnO1xubmF2YmFyQ29uZmlnLkxpbmsgPSBMaW5rQ29uZmlnO1xubmF2YmFyQ29uZmlnLkZvcm0gPSBGb3JtQ29uZmlnO1xuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLk5hdmJhcicsIG5hdmJhckNvbmZpZy5OYXZiYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5CcmFuZCcsIG5hdmJhckNvbmZpZy5CcmFuZCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxvZ28nLCBuYXZiYXJDb25maWcuTG9nbyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLlRpdGxlJywgbmF2YmFyQ29uZmlnLlRpdGxlLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGlzdCcsIG5hdmJhckNvbmZpZy5MaXN0LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGluaycsIG5hdmJhckNvbmZpZy5MaW5rLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuRm9ybScsIG5hdmJhckNvbmZpZy5Gb3JtLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG4iXX0=
