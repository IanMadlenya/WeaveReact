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
Weave.registerClass(navbarConfig.Navbar, ['weavereact.navbarConfig.Navbar'], [weavejs.api.core.ILinkableObject], "Navbar");
Weave.registerClass(navbarConfig.Brand, ['weavereact.navbarConfig.Brand'], [weavejs.api.core.ILinkableObject], "Navbar Brand");
Weave.registerClass(navbarConfig.Logo, ['weavereact.navbarConfig.Logo'], [weavejs.api.core.ILinkableObject], "Navbar Logo");
Weave.registerClass(navbarConfig.Title, ['weavereact.navbarConfig.Title'], [weavejs.api.core.ILinkableObject], "Navbar Title");
Weave.registerClass(navbarConfig.List, ['weavereact.navbarConfig.List'], [weavejs.api.core.ILinkableObject], "Navbar List");
Weave.registerClass(navbarConfig.Link, ['weavereact.navbarConfig.Link'], [weavejs.api.core.ILinkableObject], "Navbar Link");
Weave.registerClass(navbarConfig.Form, ['weavereact.navbarConfig.Form'], [weavejs.api.core.ILinkableObject], "Navbar Form");
//# sourceMappingURL=data:application/json;base64,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LENBQXZDLEVBQXdFLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUF6RSxFQUEyRyxhQUEzRztBQUNBLE1BQU0sYUFBTixDQUFxQixhQUFhLEtBQWIsRUFBbUIsQ0FBQywrQkFBRCxDQUF4QyxFQUEwRSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBM0UsRUFBNkcsY0FBN0c7QUFDQSxNQUFNLGFBQU4sQ0FBcUIsYUFBYSxJQUFiLEVBQWtCLENBQUMsOEJBQUQsQ0FBdkMsRUFBd0UsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXpFLEVBQTJHLGFBQTNHO0FBQ0EsTUFBTSxhQUFOLENBQXFCLGFBQWEsSUFBYixFQUFrQixDQUFDLDhCQUFELENBQXZDLEVBQXdFLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUF6RSxFQUEyRyxhQUEzRztBQUNBLE1BQU0sYUFBTixDQUFxQixhQUFhLElBQWIsRUFBa0IsQ0FBQyw4QkFBRCxDQUF2QyxFQUF3RSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBekUsRUFBMkcsYUFBM0ciLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cbmNsYXNzIE5hdkNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMsXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJkb2NrXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJ0b3BcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vaW5pdGlhbCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICB0aGlzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBcIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiNyVcIixcbiAgICAgICAgICAgIG1pbkhlaWdodDpcIjUwcHhcIixcbiAgICAgICAgICAgIHpJbmRleDogXCIxMDAwXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgIGJvcmRlcjpcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgcGFkZGluZzpcIjRweFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjRjhGOEY4XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRvY2suYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlKTtcbiAgICAgICAgdGhpcy5yZXZlcnNlTGF5b3V0LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy51cGRhdGVTdHlsZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0ge307XG4gICAgICAgIHN0eWxlT2JqZWN0W1widG9wXCJdID0gXCJcIjtcbiAgICAgICAgc3R5bGVPYmplY3RbXCJib3R0b21cIl0gPSBcIlwiO1xuICAgICAgICBzdHlsZU9iamVjdFtcInJpZ2h0XCJdID0gXCJcIjtcbiAgICAgICAgc3R5bGVPYmplY3RbXCJsZWZ0XCJdID0gXCJcIjtcblxuICAgICAgICBpZih0aGlzLmRvY2sudmFsdWUgPT09IFwidG9wXCIpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJwb3NpdGlvblwiXSA9IFwic3RhdGljXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcInRvcFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gIHRoaXMucmV2ZXJzZUxheW91dC5zdGF0ZT8gXCJyb3ctcmV2ZXJzZVwiIDpcInJvd1wiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjUlXCI7XG4gICAgICAgICB9ZWxzZSBpZih0aGlzLmRvY2sudmFsdWUgPT09IFwiYm90dG9tXCIpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJwb3NpdGlvblwiXSA9IFwiZml4ZWRcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiYm90dG9tXCJdID0gXCIwXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/IFwicm93LXJldmVyc2VcIiA6XCJyb3dcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiaGVpZ2h0XCJdID0gXCI1JVwiO1xuICAgICAgICAgfWVsc2UgaWYodGhpcy5kb2NrLnZhbHVlID09PSBcInJpZ2h0XCIpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJwb3NpdGlvblwiXSA9IFwiZml4ZWRcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wicmlnaHRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCI1JVwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMuZG9jay52YWx1ZSA9PT0gXCJsZWZ0XCIpe1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJwb3NpdGlvblwiXSA9IFwiZml4ZWRcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wibGVmdFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSBzdHlsZU9iamVjdDtcblxuICAgIH1cblxuXG59XG5cblxuY2xhc3MgQnJhbmRDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMsXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gXCJuYXZiYXItaGVhZGVyXCI7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIixcbiAgICAgICAgICAgIHBhZGRpbmc6XCIxNXB4IDE1cHhcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbmNsYXNzIExvZ29Db25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBzcmM6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDpcIjUwXCIsXG4gICAgICAgICAgICBoZWlnaHQ6XCI1MFwiLFxuICAgICAgICAgICAgYm9yZGVyOlwiMnB4IHNvbGlkICNlYmViZWJcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czpcIjUwJVwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5jbGFzcyBUaXRsZUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgdGl0bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IFwibmF2YmFyLWJyYW5kXCI7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgZm9udFNpemU6XCIxOHB4XCJcbiAgICAgICAgfTtcblxuICAgIH1cbn1cblxuXG5cbmNsYXNzIExpc3RDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMsXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiYWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsZWZ0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlUGFnZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNwYWNlXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlTnVtYmVyKDgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBcIm5hdiBuYXZiYXItbmF2XCI7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTpcIm5vbmVcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OlwiMFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIixcbiAgICAgICAgICAgIG1hcmdpbjpcIjcuNXB4XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFsaWduLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy51cGRhdGVTdHlsZSk7XG5cbiAgICB9XG5cblxuICAgIHVwZGF0ZVN0eWxlKCl7XG4gICAgICAgIFN0eWxlLmFsaWduQ2hpbGRyZW4odGhpcy5zdHlsZSx0aGlzLmFsaWduLnN0YXRlKTtcbiAgICB9XG59XG5cblxuY2xhc3MgTGlua0NvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25OYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtaG9tZVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZUxpbmtTdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgIGNvbG9yOlwiIzc3N1wiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cblxuY2xhc3MgRm9ybUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyxcImNvbnRhaW5lclwiKTtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJyaWdodEFsaWduXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNwYWNlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiMnB4XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBcIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFwiO1xuXG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIixcbiAgICAgICAgICAgIG1hcmdpbjpcIjRweFwiXG4gICAgICAgIH07XG5cbiAgICB9XG59XG5cblxuY29uc3QgbmF2YmFyQ29uZmlnID0ge307XG5leHBvcnQgZGVmYXVsdCBuYXZiYXJDb25maWdcblxubmF2YmFyQ29uZmlnLk5hdmJhciA9IE5hdkNvbmZpZztcbm5hdmJhckNvbmZpZy5CcmFuZCA9IEJyYW5kQ29uZmlnO1xubmF2YmFyQ29uZmlnLkxvZ28gPSBMb2dvQ29uZmlnO1xubmF2YmFyQ29uZmlnLlRpdGxlID0gVGl0bGVDb25maWc7XG5uYXZiYXJDb25maWcuTGlzdCA9IExpc3RDb25maWc7XG5uYXZiYXJDb25maWcuTGluayA9IExpbmtDb25maWc7XG5uYXZiYXJDb25maWcuRm9ybSA9IEZvcm1Db25maWc7XG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcyggbmF2YmFyQ29uZmlnLk5hdmJhcixbJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLk5hdmJhciddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJOYXZiYXJcIik7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBuYXZiYXJDb25maWcuQnJhbmQsWyd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5CcmFuZCddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJOYXZiYXIgQnJhbmRcIik7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBuYXZiYXJDb25maWcuTG9nbyxbJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxvZ28nXSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdLFwiTmF2YmFyIExvZ29cIik7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBuYXZiYXJDb25maWcuVGl0bGUsWyd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5UaXRsZSddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJOYXZiYXIgVGl0bGVcIik7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBuYXZiYXJDb25maWcuTGlzdCxbJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpc3QnXSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdLFwiTmF2YmFyIExpc3RcIik7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBuYXZiYXJDb25maWcuTGluayxbJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpbmsnXSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdLFwiTmF2YmFyIExpbmtcIik7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBuYXZiYXJDb25maWcuRm9ybSxbJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkZvcm0nXSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdLFwiTmF2YmFyIEZvcm1cIik7XG5cbiJdfQ==