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

var _CSS = require("../../configs/CSS");

var _CSS2 = _interopRequireDefault(_CSS);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavConfig = function NavConfig() {
    _classCallCheck(this, NavConfig);

    Object.defineProperties(this, {
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        },
        "CSS": {
            value: Weave.linkableChild(this, new _CSS2.default())
        },
        children: {
            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
        },
        "addGapAt": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
        },
        "useCSS": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
        },
        "dock": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("top"))
        }
    });

    this.addGapAt.state = 0;
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
    this.style.padding.state = { padding: "4px" };
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
        "CSS": {
            value: Weave.linkableChild(this, new _CSS2.default())
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
        },
        "CSS": {
            value: Weave.linkableChild(this, new _CSS2.default())
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
        },
        "CSS": {
            value: Weave.linkableChild(this, new _CSS2.default())
        }
    });

    this.style.font.state = {
        lineHeight: "20px",
        fontSize: "18px"
    };
};

var ListConfig = function () {
    function ListConfig() {
        _classCallCheck(this, ListConfig);

        Object.defineProperties(this, {
            "style": {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            "CSS": {
                value: Weave.linkableChild(this, new _CSS2.default())
            },
            "enable": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "align": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
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
        },
        "CSS": {
            value: Weave.linkableChild(this, new _CSS2.default())
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
        "addGapAt": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
        },
        "space": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
        },
        "CSS": {
            value: Weave.linkableChild(this, new _CSS2.default())
        }
    });

    this.childConfigMap = new Map();
    this.configChildMap = new Map();
    this.addGapAt.state = 0;
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
//# sourceMappingURL=data:application/json;base64,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QUFwQixFQUFvRCxhQUFhLElBQWIsRUFBa0IsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXZFIiwiZmlsZSI6IkNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcmFuZCBmcm9tIFwiLi9CcmFuZFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ1NTIGZyb20gXCIuLi8uLi9jb25maWdzL0NTU1wiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuXG5jbGFzcyBOYXZDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWRkR2FwQXRcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZU51bWJlcigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRvY2tcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcInRvcFwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRHYXBBdC5zdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vaW5pdGlhbCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICB0aGlzLkNTUy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hdmJhcjpcIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiLFxuICAgICAgICAgICAgYnJhbmQ6e1xuICAgICAgICAgICAgICAgIGhlYWRlcjpcIm5hdmJhci1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICB0aXRsZTpcIm5hdmJhci1icmFuZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlzdDpcIm5hdiBuYXZiYXItbmF2XCIsXG4gICAgICAgICAgICBmb3JtOlwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCJcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlci5zdGF0ZSA9IHtib3JkZXI6XCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICBmbGV4OlwiMVwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiNyVcIixcbiAgICAgICAgICAgIG1pbkhlaWdodDpcIjUwcHhcIixcbiAgICAgICAgICAgIHpJbmRleDogXCIxMDAwXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcuc3RhdGUgPSB7cGFkZGluZzpcIjRweFwifTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kLnN0YXRlID0gXCIjRjhGOEY4XCI7XG4gICAgfVxufVxuXG5cbmNsYXNzIEJyYW5kQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFkZGluZzpcIjE1cHggMTVweFwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUuZm9udC5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5jbGFzcyBMb2dvQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3JjOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJvcmRlcjpcIjJweCBzb2xpZCAjZWJlYmViXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6XCI1MCVcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgd2lkdGg6XCI1MFwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiNTBcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgVGl0bGVDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgIHRoaXMuc3R5bGUuZm9udC5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgZm9udFNpemU6XCIxOHB4XCJcbiAgICAgICAgfTtcblxuICAgIH1cbn1cblxuXG5cbmNsYXNzIExpc3RDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgQ1NTKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsZWZ0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlUGFnZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3BhY2VcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoOCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTpcIm5vbmVcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OlwiMFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luLnN0YXRlID0ge1xuICAgICAgICAgICAgbWFyZ2luOlwiNy41cHhcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlKTtcblxuICAgIH1cblxuXG4gICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgICAgU3R5bGUuYWxpZ25DaGlsZHJlbih0aGlzLnN0eWxlLHRoaXMuYWxpZ24uc3RhdGUpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBMaW5rQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiTGlua1wiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25OYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtaG9tZVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlTGlua1N0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5mb250LnN0YXRlID0ge1xuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICBjb2xvcjpcIiM3NzdcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTBweFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cblxuY2xhc3MgRm9ybUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJpZ2h0QWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhZGRHYXBBdFwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlTnVtYmVyKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzcGFjZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjJweFwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmFkZEdhcEF0LnN0YXRlID0gMDtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luLnN0YXRlID0ge1xuICAgICAgICAgICAgbWFyZ2luOlwiNHB4XCIsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbmNvbnN0IG5hdmJhckNvbmZpZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgbmF2YmFyQ29uZmlnXG5cbm5hdmJhckNvbmZpZy5OYXZiYXIgPSBOYXZDb25maWc7XG5uYXZiYXJDb25maWcuQnJhbmQgPSBCcmFuZENvbmZpZztcbm5hdmJhckNvbmZpZy5Mb2dvID0gTG9nb0NvbmZpZztcbm5hdmJhckNvbmZpZy5UaXRsZSA9IFRpdGxlQ29uZmlnO1xubmF2YmFyQ29uZmlnLkxpc3QgPSBMaXN0Q29uZmlnO1xubmF2YmFyQ29uZmlnLkxpbmsgPSBMaW5rQ29uZmlnO1xubmF2YmFyQ29uZmlnLkZvcm0gPSBGb3JtQ29uZmlnO1xuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLk5hdmJhcicsIG5hdmJhckNvbmZpZy5OYXZiYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5CcmFuZCcsIG5hdmJhckNvbmZpZy5CcmFuZCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxvZ28nLCBuYXZiYXJDb25maWcuTG9nbyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLlRpdGxlJywgbmF2YmFyQ29uZmlnLlRpdGxlLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGlzdCcsIG5hdmJhckNvbmZpZy5MaXN0LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGluaycsIG5hdmJhckNvbmZpZy5MaW5rLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuRm9ybScsIG5hdmJhckNvbmZpZy5Gb3JtLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG4iXX0=
