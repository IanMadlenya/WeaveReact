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
            "addGapAt": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
            },
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
                styleObject["flexDirection"] = "row";
                styleObject["width"] = "100%";
                styleObject["height"] = "5%";
            } else if (this.dock.value === "bottom") {
                styleObject["position"] = "fixed";
                styleObject["bottom"] = "0";
                styleObject["flexDirection"] = "row";
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
        "addGapAt": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
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
//# sourceMappingURL=data:application/json;base64,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LFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsK0JBQXBCLEVBQXFELGFBQWEsS0FBYixFQUFtQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBekU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGFBQWEsSUFBYixFQUFrQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGFBQWEsSUFBYixFQUFrQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGFBQWEsSUFBYixFQUFrQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkUiLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cbmNsYXNzIE5hdkNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMsXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJhZGRHYXBBdFwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlTnVtYmVyKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkb2NrXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJ0b3BcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vaW5pdGlhbCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICB0aGlzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBcIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiNyVcIixcbiAgICAgICAgICAgIG1pbkhlaWdodDpcIjUwcHhcIixcbiAgICAgICAgICAgIHpJbmRleDogXCIxMDAwXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgIGJvcmRlcjpcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgcGFkZGluZzpcIjRweFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjRjhGOEY4XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRvY2suYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlKVxuICAgIH1cblxuICAgIHVwZGF0ZVN0eWxlKCl7XG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHt9O1xuICAgICAgICBzdHlsZU9iamVjdFtcInRvcFwiXSA9IFwiXCI7XG4gICAgICAgIHN0eWxlT2JqZWN0W1wiYm90dG9tXCJdID0gXCJcIjtcbiAgICAgICAgc3R5bGVPYmplY3RbXCJyaWdodFwiXSA9IFwiXCI7XG4gICAgICAgIHN0eWxlT2JqZWN0W1wibGVmdFwiXSA9IFwiXCI7XG5cbiAgICAgICAgaWYodGhpcy5kb2NrLnZhbHVlID09PSBcInRvcFwiKXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wicG9zaXRpb25cIl0gPSBcInN0YXRpY1wiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ0b3BcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwicm93XCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiNSVcIjtcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMuZG9jay52YWx1ZSA9PT0gXCJib3R0b21cIil7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcInBvc2l0aW9uXCJdID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJib3R0b21cIl0gPSBcIjBcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwicm93XCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiNSVcIjtcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMuZG9jay52YWx1ZSA9PT0gXCJyaWdodFwiKXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wicG9zaXRpb25cIl0gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcInJpZ2h0XCJdID0gXCIwXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImZsZXhEaXJlY3Rpb25cIl0gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiNSVcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiaGVpZ2h0XCJdID0gXCIxMDAlXCI7XG4gICAgICAgICB9ZWxzZSBpZih0aGlzLmRvY2sudmFsdWUgPT09IFwibGVmdFwiKXtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wicG9zaXRpb25cIl0gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImxlZnRcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCI1JVwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIjtcbiAgICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0gc3R5bGVPYmplY3Q7XG5cbiAgICB9XG5cblxufVxuXG5cbmNsYXNzIEJyYW5kQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IFwibmF2YmFyLWhlYWRlclwiO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImluaGVyaXRcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBwYWRkaW5nOlwiMTVweCAxNXB4XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5jbGFzcyBMb2dvQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgc3JjOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgd2lkdGg6XCI1MFwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiNTBcIixcbiAgICAgICAgICAgIGJvcmRlcjpcIjJweCBzb2xpZCAjZWJlYmViXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6XCI1MCVcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgVGl0bGVDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIHRpdGxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBcIm5hdmJhci1icmFuZFwiO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgIGZvbnRTaXplOlwiMThweFwiXG4gICAgICAgIH07XG5cbiAgICB9XG59XG5cblxuXG5jbGFzcyBMaXN0Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImFsaWduXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwibGVmdFwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZVBhZ2VcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzcGFjZVwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZU51bWJlcig4KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gXCJuYXYgbmF2YmFyLW5hdlwiO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImluaGVyaXRcIixcbiAgICAgICAgICAgIGxpc3RTdHlsZVR5cGU6XCJub25lXCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDpcIjBcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBtYXJnaW46XCI3LjVweFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hbGlnbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMudXBkYXRlU3R5bGUpO1xuXG4gICAgfVxuXG5cbiAgICB1cGRhdGVTdHlsZSgpe1xuICAgICAgICBTdHlsZS5hbGlnbkNoaWxkcmVuKHRoaXMuc3R5bGUsdGhpcy5hbGlnbi5zdGF0ZSk7XG4gICAgfVxufVxuXG5cbmNsYXNzIExpbmtDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWhvbWVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVMaW5rU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTBweFwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICBjb2xvcjpcIiM3NzdcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5cbmNsYXNzIEZvcm1Db25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMsXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhZGRHYXBBdFwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlTnVtYmVyKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzcGFjZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjJweFwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gXCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIjtcblxuXG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImluaGVyaXRcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBtYXJnaW46XCI0cHhcIlxuICAgICAgICB9O1xuXG5cbiAgICB9XG59XG5cblxuY29uc3QgbmF2YmFyQ29uZmlnID0ge307XG5leHBvcnQgZGVmYXVsdCBuYXZiYXJDb25maWdcblxubmF2YmFyQ29uZmlnLk5hdmJhciA9IE5hdkNvbmZpZztcbm5hdmJhckNvbmZpZy5CcmFuZCA9IEJyYW5kQ29uZmlnO1xubmF2YmFyQ29uZmlnLkxvZ28gPSBMb2dvQ29uZmlnO1xubmF2YmFyQ29uZmlnLlRpdGxlID0gVGl0bGVDb25maWc7XG5uYXZiYXJDb25maWcuTGlzdCA9IExpc3RDb25maWc7XG5uYXZiYXJDb25maWcuTGluayA9IExpbmtDb25maWc7XG5uYXZiYXJDb25maWcuRm9ybSA9IEZvcm1Db25maWc7XG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTmF2YmFyJywgbmF2YmFyQ29uZmlnLk5hdmJhcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkJyYW5kJywgbmF2YmFyQ29uZmlnLkJyYW5kLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTG9nbycsIG5hdmJhckNvbmZpZy5Mb2dvLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuVGl0bGUnLCBuYXZiYXJDb25maWcuVGl0bGUsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaXN0JywgbmF2YmFyQ29uZmlnLkxpc3QsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaW5rJywgbmF2YmFyQ29uZmlnLkxpbmssW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5Gb3JtJywgbmF2YmFyQ29uZmlnLkZvcm0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbiJdfQ==
