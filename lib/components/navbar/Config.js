"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavFormConfig = exports.NavListConfig = exports.NavBrandConfig = exports.NavLinkConfig = exports.NavbarConfig = undefined;

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
    this.style.other.state = { flexDirection: "row", flex: "1", height: "6%" };
    this.style.padding.state = { padding: "6px" };
    this.style.background.state = "#F8F8F8";
};

//body { padding-top: 70px; } for fixed status we have to set this

NavbarConfig.positionType = {
    "FIXED": "fixed",
    "STATIC": "static"
};

NavbarConfig.position = {
    "TOP": "top",
    "BOTTOM": "bottom",
    "RIGHT": "right",
    "LEFT": "left"
};

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavbarConfig', NavbarConfig, [weavejs.api.core.ILinkableObject]);

var NavLinkConfig = exports.NavLinkConfig = function NavLinkConfig() {
    _classCallCheck(this, NavLinkConfig);

    Object.defineProperties(this, {
        "title": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("Link"))
        },
        "iconName": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-home"))
        }
    });
};

//This Function makes this class as SessionClass

Weave.registerClass('weavereact.navbar.config.NavLinkConfig', NavLinkConfig, [weavejs.api.core.ILinkableObject]);

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
        "logoStyle": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        }
    });
    this.logoStyle.border.state = {
        border: "2px solid #F3B46E",
        borderRadius: "50%",
        width: "100",
        height: "90"
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
            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(2))
        }
    });

    this.style.display.value = "flex";
    this.style.other.state = {
        flexDirection: "inherit",
        flex: "1",
        listStyleType: "none",
        paddingLeft: "0"
    };
};

//This Function makes this class as SessionClass

Weave.registerClass('weavereact.navbar.config.NavListConfig', NavListConfig, [weavejs.api.core.ILinkableObject]);

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
};

//This Function makes this class as SessionClass

Weave.registerClass('weavereact.navbar.config.NavFormConfig', NavFormConfig, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,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QU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDtTQURKO0FBR0Esa0JBQVU7QUFDTixtQkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLEtBQWpDLENBQTFCLENBQVA7U0FESjtBQUdBLHNCQUFjO0FBQ1YsbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixJQUFqQyxDQUExQixDQUFQO1NBREo7QUFHQSx1QkFBZTtBQUNYLG1CQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsRUFBOUIsQ0FBUDtTQURKO0FBR0EsaUJBQVM7QUFDTCxtQkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEtBQWhDLENBQTFCLENBQVA7U0FESjtLQWJILEVBRlM7O0FBb0JWLFNBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsS0FBbkIsR0FBMkIsTUFBM0IsQ0FwQlU7QUFxQlQsU0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixLQUFqQixHQUF5QjtBQUN0Qix1QkFBYyxTQUFkO0FBQ0EsY0FBSyxHQUFMO0FBQ0EsdUJBQWMsTUFBZDtBQUNBLHFCQUFZLEdBQVo7S0FKSCxDQXJCUztDQUFkOzs7O0FBK0JKLE1BQU0sYUFBTixDQUFvQix3Q0FBcEIsRUFBOEQsYUFBOUQsRUFBNEUsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTdFIiwiZmlsZSI6IkNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcmFuZCBmcm9tIFwiLi9CcmFuZFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5cblxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJyYW5kXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTmF2QnJhbmRDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBOYXZGb3JtQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJuYXZMaXN0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTmF2TGlzdENvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRvY2tcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcInRvcFwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9pbml0aWFsIGRlZmF1bHQgdmFsdWVzXG4gICAgICAgIHRoaXMuQ1NTLnN0YXRlID0ge1xuICAgICAgICAgICAgbmF2YmFyOlwibmF2YmFyIG5hdmJhci1kZWZhdWx0XCIsXG4gICAgICAgICAgICBicmFuZDp7XG4gICAgICAgICAgICAgICAgaGVhZGVyOlwibmF2YmFyLWhlYWRlclwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOlwibmF2YmFyLWJyYW5kXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0OlwibmF2IG5hdmJhci1uYXZcIixcbiAgICAgICAgICAgIGZvcm06XCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIlxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlci5zdGF0ZSA9IHtib3JkZXI6XCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7ZmxleERpcmVjdGlvbjpcInJvd1wiLGZsZXg6XCIxXCIsaGVpZ2h0OlwiNiVcIn07XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZy5zdGF0ZSA9IHtwYWRkaW5nOlwiNnB4XCJ9O1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmQuc3RhdGUgPSBcIiNGOEY4RjhcIjtcbiAgICB9XG59XG5cblxuXG5cbi8vYm9keSB7IHBhZGRpbmctdG9wOiA3MHB4OyB9IGZvciBmaXhlZCBzdGF0dXMgd2UgaGF2ZSB0byBzZXQgdGhpc1xuTmF2YmFyQ29uZmlnLnBvc2l0aW9uVHlwZSA9IHtcbiAgICBcIkZJWEVEXCI6IFwiZml4ZWRcIixcbiAgICBcIlNUQVRJQ1wiOiBcInN0YXRpY1wiXG59O1xuXG5OYXZiYXJDb25maWcucG9zaXRpb24gPSB7XG4gICAgXCJUT1BcIjogXCJ0b3BcIixcbiAgICBcIkJPVFRPTVwiOiBcImJvdHRvbVwiLFxuICAgIFwiUklHSFRcIjogXCJyaWdodFwiLFxuICAgIFwiTEVGVFwiOiBcImxlZnRcIlxufTtcblxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyLmNvbmZpZy5OYXZiYXJDb25maWcnLCBOYXZiYXJDb25maWcsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cblxuXG5cblxuZXhwb3J0IGNsYXNzIE5hdkxpbmtDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJMaW5rXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk5hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1ob21lXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXIuY29uZmlnLk5hdkxpbmtDb25maWcnLCBOYXZMaW5rQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cbmV4cG9ydCBjbGFzcyBOYXZCcmFuZENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9nb1BhdGg6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIFwibG9nb1N0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2dvU3R5bGUuYm9yZGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgYm9yZGVyOlwiMnB4IHNvbGlkICNGM0I0NkVcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czpcIjUwJVwiLFxuICAgICAgICAgICAgd2lkdGg6XCIxMDBcIixcbiAgICAgICAgICAgIGhlaWdodDogXCI5MFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyLmNvbmZpZy5OYXZCcmFuZENvbmZpZycsIE5hdkJyYW5kQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cbmV4cG9ydCBjbGFzcyBOYXZMaXN0Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyaWdodEFsaWduXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVQYWdlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcImxpbmtzXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJzcGFjZVwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZU51bWJlcigyKSlcbiAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgZmxleDpcIjFcIixcbiAgICAgICAgICAgIGxpc3RTdHlsZVR5cGU6XCJub25lXCIsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDpcIjBcIlxuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9XG59XG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXIuY29uZmlnLk5hdkxpc3RDb25maWcnLCBOYXZMaXN0Q29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cbmV4cG9ydCBjbGFzcyBOYXZGb3JtQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb250cm9sbGVyc1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNwYWNlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiMnB4XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBmbGV4OlwiMVwiLFxuICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTpcIm5vbmVcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OlwiMFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyLmNvbmZpZy5OYXZGb3JtQ29uZmlnJywgTmF2Rm9ybUNvbmZpZyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuXG5cblxuIl19
