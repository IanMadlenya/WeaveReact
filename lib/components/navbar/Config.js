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

    this.style.border.state = {
        border: "2px solid #ebebeb",
        borderRadius: "50%"
    };
    this.style.other.state = {
        width: "50",
        height: "50"
    };
};

var TitleConfig = function TitleConfig() {
    _classCallCheck(this, TitleConfig);

    Object.defineProperties(this, {
        "enable": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
        },
        title: {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        },
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        }
    });

    this.style.font.state = {
        lineHeight: "20px",
        fontSize: "18px"
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
//# sourceMappingURL=data:application/json;base64,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QUFhLElBQWIsRUFBa0IsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXZFO0FBQ0EsTUFBTSxhQUFOLENBQW9CLDhCQUFwQixFQUFvRCxhQUFhLElBQWIsRUFBa0IsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXZFO0FBQ0EsTUFBTSxhQUFOLENBQW9CLDhCQUFwQixFQUFvRCxhQUFhLElBQWIsRUFBa0IsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXZFIiwiZmlsZSI6IkNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcmFuZCBmcm9tIFwiLi9CcmFuZFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5cbmNsYXNzIE5hdkNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkb2NrXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJ0b3BcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vaW5pdGlhbCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICB0aGlzLkNTUy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hdmJhcjpcIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiLFxuICAgICAgICAgICAgYnJhbmQ6e1xuICAgICAgICAgICAgICAgIGhlYWRlcjpcIm5hdmJhci1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICB0aXRsZTpcIm5hdmJhci1icmFuZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlzdDpcIm5hdiBuYXZiYXItbmF2XCIsXG4gICAgICAgICAgICBmb3JtOlwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCJcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlci5zdGF0ZSA9IHtib3JkZXI6XCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICBmbGV4OlwiMVwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiNyVcIixcbiAgICAgICAgICAgIG1pbkhlaWdodDpcIjUwcHhcIixcbiAgICAgICAgICAgIHpJbmRleDogXCIxMDAwXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcuc3RhdGUgPSB7cGFkZGluZzpcIjZweFwifTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kLnN0YXRlID0gXCIjRjhGOEY4XCI7XG4gICAgfVxufVxuXG5cbmNsYXNzIEJyYW5kQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWRkaW5nOlwiMTVweCAxNXB4XCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZS5mb250LnN0YXRlID0ge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbmNsYXNzIExvZ29Db25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcmM6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5ib3JkZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBib3JkZXI6XCIycHggc29saWQgI2ViZWJlYlwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOlwiNTAlXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOlwiNTBcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjUwXCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmNsYXNzIFRpdGxlQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgIHRoaXMuc3R5bGUuZm9udC5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgZm9udFNpemU6XCIxOHB4XCJcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cblxuY2xhc3MgTGlzdENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlUGFnZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3BhY2VcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoOCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTpcIm5vbmVcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OlwiMFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luLnN0YXRlID0ge1xuICAgICAgICAgICAgbWFyZ2luOlwiNy41cHhcIlxuICAgICAgICB9O1xuXG4gICAgfVxufVxuXG5cbmNsYXNzIExpbmtDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJMaW5rXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk5hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1ob21lXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVMaW5rU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuZm9udC5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgY29sb3I6XCIjNzc3XCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5cbmNsYXNzIEZvcm1Db25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyaWdodEFsaWduXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3BhY2VcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIycHhcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImluaGVyaXRcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJpbmhlcml0XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0eWxlLm1hcmdpbi5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1hcmdpbjpcIjRweFwiLFxuXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbmNvbnN0IG5hdmJhckNvbmZpZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgbmF2YmFyQ29uZmlnXG5cbm5hdmJhckNvbmZpZy5OYXZiYXIgPSBOYXZDb25maWc7XG5uYXZiYXJDb25maWcuQnJhbmQgPSBCcmFuZENvbmZpZztcbm5hdmJhckNvbmZpZy5Mb2dvID0gTG9nb0NvbmZpZztcbm5hdmJhckNvbmZpZy5UaXRsZSA9IFRpdGxlQ29uZmlnO1xubmF2YmFyQ29uZmlnLkxpc3QgPSBMaXN0Q29uZmlnO1xubmF2YmFyQ29uZmlnLkxpbmsgPSBMaW5rQ29uZmlnO1xubmF2YmFyQ29uZmlnLkZvcm0gPSBGb3JtQ29uZmlnO1xuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLk5hdmJhcicsIG5hdmJhckNvbmZpZy5OYXZiYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5CcmFuZCcsIG5hdmJhckNvbmZpZy5CcmFuZCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxvZ28nLCBuYXZiYXJDb25maWcuTG9nbyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLlRpdGxlJywgbmF2YmFyQ29uZmlnLlRpdGxlLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGlzdCcsIG5hdmJhckNvbmZpZy5MaXN0LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGluaycsIG5hdmJhckNvbmZpZy5MaW5rLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuRm9ybScsIG5hdmJhckNvbmZpZy5Gb3JtLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG4iXX0=
