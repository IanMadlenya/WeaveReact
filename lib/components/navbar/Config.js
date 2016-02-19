"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavFormConfig = exports.NavLinkConfig = exports.NavListConfig = exports.NavBrandConfig = exports.NavbarConfig = undefined;

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

var NavbarConfig = exports.NavbarConfig = function NavbarConfig() {
    _classCallCheck(this, NavbarConfig);

    Object.defineProperties(this, {
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        },
        "CSS": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
        },
        "brand": {
            value: Weave.linkableChild(this, new NavBrandConfig())
        },
        "form": {
            value: Weave.linkableChild(this, new NavFormConfig())
        },
        "navList": {
            value: Weave.linkableChild(this, new NavListConfig())
        },
        "useCSS": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
        },
        "dock": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("top"))
        }
    });

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
        zIndex: "1000"
    };
    this.style.padding.state = { padding: "6px" };
    this.style.background.state = "#F8F8F8";
};

//This Function makes this class as SessionClass


Weave.registerClass('weavereact.navbar.config.NavbarConfig', NavbarConfig, [weavejs.api.core.ILinkableObject]);

var NavBrandConfig = exports.NavBrandConfig = function NavBrandConfig() {
    _classCallCheck(this, NavBrandConfig);

    Object.defineProperties(this, {
        "title": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        },
        "enable": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
        },
        logoPath: {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        },
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        },
        "logoStyle": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        }
    });
    this.style.padding.state = {
        padding: "15px 15px"
    };
    this.style.font.state = {
        fontSize: "18px",
        lineHeight: "20px"
    };

    this.logoStyle.border.state = {
        border: "2px solid #ebebeb",
        borderRadius: "50%"
    };
    this.logoStyle.other.state = {
        width: "50",
        height: "50"
    };
};

//This Function makes this class as SessionClass


Weave.registerClass('weavereact.navbar.config.NavBrandConfig', NavBrandConfig, [weavejs.api.core.ILinkableObject]);

var NavListConfig = exports.NavListConfig = function NavListConfig() {
    _classCallCheck(this, NavListConfig);

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
        "links": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
        },
        "space": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(8))
        }
    });

    this.style.display.value = "flex";
    this.style.other.state = {
        flexDirection: "inherit",
        flex: "1",
        listStyleType: "none",
        paddingLeft: "0"
    };

    this.style.margin.state = {
        margin: "7.5px"
    };
};

//This Function makes this class as SessionClass


Weave.registerClass('weavereact.navbar.config.NavListConfig', NavListConfig, [weavejs.api.core.ILinkableObject]);

var NavLinkConfig = exports.NavLinkConfig = function NavLinkConfig() {
    _classCallCheck(this, NavLinkConfig);

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

//This Function makes this class as SessionClass


Weave.registerClass('weavereact.navbar.config.NavLinkConfig', NavLinkConfig, [weavejs.api.core.ILinkableObject]);

var NavFormConfig = exports.NavFormConfig = function NavFormConfig() {
    _classCallCheck(this, NavFormConfig);

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
        "controllers": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
        },
        "space": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
        }
    });

    this.style.display.value = "flex";
    this.style.other.state = {
        flexDirection: "inherit",
        flex: "1",
        listStyleType: "none",
        paddingLeft: "0"
    };

    this.style.margin.state = {
        margin: "4px",
        alignItems: "stretch"
    };
};

//This Function makes this class as SessionClass


Weave.registerClass('weavereact.navbar.config.NavFormConfig', NavFormConfig, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,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QUdBLGlCQUFTO0FBQ0wsbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixLQUFoQyxDQUExQixDQUFQO1NBREo7S0FiSCxFQUZTOztBQW9CVixTQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLEtBQW5CLEdBQTJCLE1BQTNCLENBcEJVO0FBcUJULFNBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsS0FBakIsR0FBeUI7QUFDdEIsdUJBQWMsU0FBZDtBQUNBLGNBQUssR0FBTDtBQUNBLHVCQUFjLE1BQWQ7QUFDQSxxQkFBWSxHQUFaO0tBSkgsQ0FyQlM7O0FBNEJWLFNBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBbEIsR0FBMEI7QUFDdEIsZ0JBQU8sS0FBUDtBQUNBLG9CQUFXLFNBQVg7S0FGSixDQTVCVTtDQUFkOzs7OztBQW9DSixNQUFNLGFBQU4sQ0FBb0Isd0NBQXBCLEVBQThELGFBQTlELEVBQTRFLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUE3RSIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnJhbmQgZnJvbSBcIi4vQnJhbmRcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBOYXZiYXJDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJicmFuZFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IE5hdkJyYW5kQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTmF2Rm9ybUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibmF2TGlzdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IE5hdkxpc3RDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkb2NrXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJ0b3BcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vaW5pdGlhbCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICB0aGlzLkNTUy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hdmJhcjpcIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiLFxuICAgICAgICAgICAgYnJhbmQ6e1xuICAgICAgICAgICAgICAgIGhlYWRlcjpcIm5hdmJhci1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICB0aXRsZTpcIm5hdmJhci1icmFuZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlzdDpcIm5hdiBuYXZiYXItbmF2XCIsXG4gICAgICAgICAgICBmb3JtOlwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCJcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlci5zdGF0ZSA9IHtib3JkZXI6XCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICBmbGV4OlwiMVwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiNyVcIixcbiAgICAgICAgICAgIG1pbkhlaWdodDpcIjUwcHhcIixcbiAgICAgICAgICAgIHpJbmRleDogXCIxMDAwXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nLnN0YXRlID0ge3BhZGRpbmc6XCI2cHhcIn07XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZC5zdGF0ZSA9IFwiI0Y4RjhGOFwiO1xuICAgIH1cbn1cblxuXG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXIuY29uZmlnLk5hdmJhckNvbmZpZycsIE5hdmJhckNvbmZpZyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuXG5cbmV4cG9ydCBjbGFzcyBOYXZCcmFuZENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9nb1BhdGg6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxvZ29TdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmc6XCIxNXB4IDE1cHhcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0eWxlLmZvbnQuc3RhdGUgPSB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIlxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5sb2dvU3R5bGUuYm9yZGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgYm9yZGVyOlwiMnB4IHNvbGlkICNlYmViZWJcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czpcIjUwJVwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubG9nb1N0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgd2lkdGg6XCI1MFwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiNTBcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhci5jb25maWcuTmF2QnJhbmRDb25maWcnLCBOYXZCcmFuZENvbmZpZyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuXG5leHBvcnQgY2xhc3MgTmF2TGlzdENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlUGFnZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJsaW5rc1wiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgIFwic3BhY2VcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoOCkpXG4gICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBmbGV4OlwiMVwiLFxuICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTpcIm5vbmVcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OlwiMFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdHlsZS5tYXJnaW4uc3RhdGUgPSB7XG4gICAgICAgICAgICBtYXJnaW46XCI3LjVweFwiXG4gICAgICAgIH07XG5cbiAgICB9XG59XG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXIuY29uZmlnLk5hdkxpc3RDb25maWcnLCBOYXZMaXN0Q29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgY2xhc3MgTmF2TGlua0NvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIkxpbmtcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uTmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImZhIGZhLWhvbWVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZUxpbmtTdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0eWxlLmZvbnQuc3RhdGUgPSB7XG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgIGNvbG9yOlwiIzc3N1wiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXIuY29uZmlnLk5hdkxpbmtDb25maWcnLCBOYXZMaW5rQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cbmV4cG9ydCBjbGFzcyBOYXZGb3JtQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb250cm9sbGVyc1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNwYWNlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiMnB4XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgZmxleDpcIjFcIixcbiAgICAgICAgICAgIGxpc3RTdHlsZVR5cGU6XCJub25lXCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDpcIjBcIlxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdHlsZS5tYXJnaW4uc3RhdGUgPSB7XG4gICAgICAgICAgICBtYXJnaW46XCI0cHhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJzdHJldGNoXCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXIuY29uZmlnLk5hdkZvcm1Db25maWcnLCBOYXZGb3JtQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cblxuXG4iXX0=
