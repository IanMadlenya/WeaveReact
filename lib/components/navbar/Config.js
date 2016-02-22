"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Brand = require("./Brand");

var _Brand2 = _interopRequireDefault(_Brand);

var _List = require("./List");

var _List2 = _interopRequireDefault(_List);

var _Form = require("./Form");

var _Form2 = _interopRequireDefault(_Form);

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavConfig = function NavConfig() {
    _classCallCheck(this, NavConfig);

    Object.defineProperties(this, {
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        },
        "CSS": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
        },
        children: {
            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
        },
        children: {
            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
        },
        "useCSS": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
        },
        "dock": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("top"))
        }
    });

    this.childConfigMap = new Map();
    this.configChildMap = new Map();
    //initial default values
    this.CSS.state = {
        navbar: "navbar navbar-default",
        brand: {
            header: "navbar-header",
            title: "navbar-brand"
        },
        list: "nav navbar-nav",
        form: "navbar-form navbar-right"
    };

    this.style.display.value = "flex";
    this.style.border.state = { border: "1px solid transparent" };
    this.style.other.state = {
        flexDirection: "row",
        flex: "1",
        height: "7%",
        minHeight: "50px",
        zIndex: "1000",
        alignItems: "center",
        justifyContent: "space-between"
    };
    this.style.padding.state = { padding: "6px" };
    this.style.background.state = "#F8F8F8";
};

var BrandConfig = function BrandConfig() {
    _classCallCheck(this, BrandConfig);

    Object.defineProperties(this, {
        "title": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        },
        "enable": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
        },
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        },
        "children": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
        }
    });

    this.childConfigMap = new Map();
    this.configChildMap = new Map();

    this.style.padding.state = {
        padding: "15px 15px"
    };
    this.style.font.state = {
        fontSize: "18px",
        lineHeight: "20px"
    };

    this.style.display.value = "flex";
    this.style.other.state = {
        flexDirection: "inherit",
        alignItems: "inherit"
    };
};

var LogoConfig = function LogoConfig() {
    _classCallCheck(this, LogoConfig);

    Object.defineProperties(this, {
        "enable": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
        },
        src: {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        },
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        }
    });

    this.childConfigMap = new Map();
    this.configChildMap = new Map();

    this.style.border.state = {
        border: "2px solid #ebebeb",
        borderRadius: "50%"
    };
    this.style.other.state = {
        width: "50",
        height: "50"
    };
};

var ListConfig = function ListConfig() {
    _classCallCheck(this, ListConfig);

    Object.defineProperties(this, {
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        },
        "enable": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
        },
        "rightAlign": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
        },
        "activePage": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        },
        "children": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
        },
        "space": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(8))
        }
    });

    this.childConfigMap = new Map();
    this.configChildMap = new Map();

    this.style.display.value = "flex";
    this.style.other.state = {
        flexDirection: "inherit",
        listStyleType: "none",
        paddingLeft: "0",
        alignItems: "inherit"
    };

    this.style.margin.state = {
        margin: "7.5px"
    };
};

var LinkConfig = function LinkConfig() {
    _classCallCheck(this, LinkConfig);

    Object.defineProperties(this, {
        "title": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("Link"))
        },
        "iconName": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-home"))
        },
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        },
        "activeLinkStyle": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        }
    });

    this.style.font.state = {
        lineHeight: "20px",
        color: "#777"
    };
    this.style.padding.state = {
        paddingTop: "10px",
        paddingBottom: "10px"
    };
};

var FormConfig = function FormConfig() {
    _classCallCheck(this, FormConfig);

    Object.defineProperties(this, {
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        },
        "enable": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
        },
        "rightAlign": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
        },
        "children": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
        },
        "space": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
        }
    });
    this.childConfigMap = new Map();
    this.configChildMap = new Map();

    this.style.display.value = "flex";
    this.style.other.state = {
        flexDirection: "inherit",
        alignItems: "inherit"
    };

    this.style.margin.state = {
        margin: "4px"

    };
};

var navbarConfig = {};
exports.default = navbarConfig;


navbarConfig.Navbar = NavConfig;
navbarConfig.Brand = BrandConfig;
navbarConfig.Logo = LogoConfig;
navbarConfig.List = ListConfig;
navbarConfig.Link = LinkConfig;
navbarConfig.Form = FormConfig;

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbarConfig.Navbar', navbarConfig.Navbar, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Brand', navbarConfig.Brand, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Logo', navbarConfig.Logo, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.List', navbarConfig.List, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Link', navbarConfig.Link, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Form', navbarConfig.Form, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,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YUFBYSxJQUFiLEdBQW9CLFVBQXBCO0FBQ0EsYUFBYSxJQUFiLEdBQW9CLFVBQXBCO0FBQ0EsYUFBYSxJQUFiLEdBQW9CLFVBQXBCO0FBQ0EsYUFBYSxJQUFiLEdBQW9CLFVBQXBCOzs7QUFHQSxNQUFNLGFBQU4sQ0FBb0IsZ0NBQXBCLEVBQXNELGFBQWEsTUFBYixFQUFvQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBM0U7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsK0JBQXBCLEVBQXFELGFBQWEsS0FBYixFQUFtQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBekU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGFBQWEsSUFBYixFQUFrQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGFBQWEsSUFBYixFQUFrQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGFBQWEsSUFBYixFQUFrQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGFBQWEsSUFBYixFQUFrQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkUiLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcblxuY2xhc3MgTmF2Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRvY2tcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcInRvcFwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy9pbml0aWFsIGRlZmF1bHQgdmFsdWVzXG4gICAgICAgIHRoaXMuQ1NTLnN0YXRlID0ge1xuICAgICAgICAgICAgbmF2YmFyOlwibmF2YmFyIG5hdmJhci1kZWZhdWx0XCIsXG4gICAgICAgICAgICBicmFuZDp7XG4gICAgICAgICAgICAgICAgaGVhZGVyOlwibmF2YmFyLWhlYWRlclwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOlwibmF2YmFyLWJyYW5kXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0OlwibmF2IG5hdmJhci1uYXZcIixcbiAgICAgICAgICAgIGZvcm06XCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIlxuICAgICAgICB9O1xuXG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuYm9yZGVyLnN0YXRlID0ge2JvcmRlcjpcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwifTtcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcbiAgICAgICAgICAgIGZsZXg6XCIxXCIsXG4gICAgICAgICAgICBoZWlnaHQ6XCI3JVwiLFxuICAgICAgICAgICAgbWluSGVpZ2h0OlwiNTBweFwiLFxuICAgICAgICAgICAgekluZGV4OiBcIjEwMDBcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZy5zdGF0ZSA9IHtwYWRkaW5nOlwiNnB4XCJ9O1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmQuc3RhdGUgPSBcIiNGOEY4RjhcIjtcbiAgICB9XG59XG5cblxuY2xhc3MgQnJhbmRDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmc6XCIxNXB4IDE1cHhcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0eWxlLmZvbnQuc3RhdGUgPSB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImluaGVyaXRcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJpbmhlcml0XCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuY2xhc3MgTG9nb0NvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNyYzp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuYm9yZGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgYm9yZGVyOlwiMnB4IHNvbGlkICNlYmViZWJcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czpcIjUwJVwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDpcIjUwXCIsXG4gICAgICAgICAgICBoZWlnaHQ6XCI1MFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cblxuY2xhc3MgTGlzdENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlUGFnZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3BhY2VcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoOCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTpcIm5vbmVcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OlwiMFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luLnN0YXRlID0ge1xuICAgICAgICAgICAgbWFyZ2luOlwiNy41cHhcIlxuICAgICAgICB9O1xuXG4gICAgfVxufVxuXG5cbmNsYXNzIExpbmtDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJMaW5rXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk5hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1ob21lXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVMaW5rU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuZm9udC5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgY29sb3I6XCIjNzc3XCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5cbmNsYXNzIEZvcm1Db25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyaWdodEFsaWduXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3BhY2VcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIycHhcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImluaGVyaXRcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJpbmhlcml0XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0eWxlLm1hcmdpbi5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1hcmdpbjpcIjRweFwiLFxuXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbmNvbnN0IG5hdmJhckNvbmZpZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgbmF2YmFyQ29uZmlnXG5cbm5hdmJhckNvbmZpZy5OYXZiYXIgPSBOYXZDb25maWc7XG5uYXZiYXJDb25maWcuQnJhbmQgPSBCcmFuZENvbmZpZztcbm5hdmJhckNvbmZpZy5Mb2dvID0gTG9nb0NvbmZpZztcbm5hdmJhckNvbmZpZy5MaXN0ID0gTGlzdENvbmZpZztcbm5hdmJhckNvbmZpZy5MaW5rID0gTGlua0NvbmZpZztcbm5hdmJhckNvbmZpZy5Gb3JtID0gRm9ybUNvbmZpZztcblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5OYXZiYXInLCBuYXZiYXJDb25maWcuTmF2YmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuQnJhbmQnLCBuYXZiYXJDb25maWcuQnJhbmQsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5Mb2dvJywgbmF2YmFyQ29uZmlnLkxvZ28sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaXN0JywgbmF2YmFyQ29uZmlnLkxpc3QsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaW5rJywgbmF2YmFyQ29uZmlnLkxpbmssW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5Gb3JtJywgbmF2YmFyQ29uZmlnLkZvcm0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbiJdfQ==
