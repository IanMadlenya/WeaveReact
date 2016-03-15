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

var _Props = require("../../configs/Props");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavConfig = function () {
    function NavConfig() {
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
            },
            "props": {
                value: new _Props2.default()
            }
        });

        this.childConfigMap = new Map();
        this.configChildMap = new Map();

        //initial default values
        this.CSS.className.state = "navbar navbar-default";

        this.style.display.value = "flex";
        this.style.border.state = { border: "1px solid transparent" };
        this.style.other.state = {
            flexDirection: "row",
            height: "7%",
            minHeight: "50px",
            zIndex: "1000",
            alignItems: "center",
            justifyContent: "space-between"
        };
        this.style.padding.state = { padding: "4px" };
        this.style.background.state = "#F8F8F8";

        this.dock.addImmediateCallback(this, this.updateStyle);
    }

    _createClass(NavConfig, [{
        key: "updateStyle",
        value: function updateStyle() {
            var styleObject = this.style.other.state;
            styleObject["top"] = "";
            styleObject["bottom"] = "";
            styleObject["right"] = "";
            styleObject["left"] = "";

            if (this.dock.value === "top") {
                this.style.position.state = "static";
                styleObject["top"] = "0";
                styleObject["flexDirection"] = "row";
                styleObject["width"] = "100%";
                styleObject["height"] = "5%";
            } else if (this.dock.value === "bottom") {
                this.style.position.state = "fixed";
                styleObject["bottom"] = "0";
                styleObject["flexDirection"] = "row";
                styleObject["width"] = "100%";
                styleObject["height"] = "5%";
            } else if (this.dock.value === "right") {
                this.style.position.state = "fixed";
                styleObject["right"] = "0";
                styleObject["flexDirection"] = "column";
                styleObject["width"] = "5%";
                styleObject["height"] = "100%";
            } else if (this.dock.value === "left") {
                this.style.position.state = "fixed";
                styleObject["left"] = "0";
                styleObject["flexDirection"] = "column";
                styleObject["width"] = "5%";
                styleObject["height"] = "100%";
            }

            this.style.other.state = styleObject;
        }
    }]);

    return NavConfig;
}();

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
        },
        "props": {
            value: new _Props2.default()
        }
    });

    this.CSS.className.state = "navbar-header";

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

    this.CSS.className.state = "navbar-brand";

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
            },
            "props": {
                value: new _Props2.default()
            }
        });

        this.CSS.className.state = "nav navbar-nav";

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
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
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
        },
        "props": {
            value: new _Props2.default()
        }
    });

    this.CSS.className.state = "navbar-form navbar-right";

    this.childConfigMap = new Map();
    this.configChildMap = new Map();
    //this.addGapAt.state = 0;
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
//# sourceMappingURL=data:application/json;base64,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QUFiLEdBQW9CLFVBQXBCO0FBQ0EsYUFBYSxJQUFiLEdBQW9CLFVBQXBCOzs7QUFHQSxNQUFNLGFBQU4sQ0FBb0IsZ0NBQXBCLEVBQXNELGFBQWEsTUFBYixFQUFvQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBM0U7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsK0JBQXBCLEVBQXFELGFBQWEsS0FBYixFQUFtQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBekU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGFBQWEsSUFBYixFQUFrQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsK0JBQXBCLEVBQXFELGFBQWEsS0FBYixFQUFtQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBekU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGFBQWEsSUFBYixFQUFrQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGFBQWEsSUFBYixFQUFrQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGFBQWEsSUFBYixFQUFrQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkUiLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5cbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENTUyBmcm9tIFwiLi4vLi4vY29uZmlncy9DU1NcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBQcm9wcyBmcm9tIFwiLi4vLi4vY29uZmlncy9Qcm9wc1wiO1xuXG5jbGFzcyBOYXZDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWRkR2FwQXRcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZU51bWJlcigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRvY2tcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcInRvcFwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJwcm9wc1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IFByb3BzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuXG4gICAgICAgIC8vaW5pdGlhbCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICB0aGlzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBcIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiO1xuXG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3JkZXIuc3RhdGUgPSB7Ym9yZGVyOlwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCJ9O1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiNyVcIixcbiAgICAgICAgICAgIG1pbkhlaWdodDpcIjUwcHhcIixcbiAgICAgICAgICAgIHpJbmRleDogXCIxMDAwXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcuc3RhdGUgPSB7cGFkZGluZzpcIjRweFwifTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kLnN0YXRlID0gXCIjRjhGOEY4XCI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRvY2suYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlKVxuICAgIH1cbiAgICBcbiAgICB1cGRhdGVTdHlsZSgpe1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnN0eWxlLm90aGVyLnN0YXRlO1xuICAgICAgICBzdHlsZU9iamVjdFtcInRvcFwiXSA9IFwiXCI7XG4gICAgICAgIHN0eWxlT2JqZWN0W1wiYm90dG9tXCJdID0gXCJcIjtcbiAgICAgICAgc3R5bGVPYmplY3RbXCJyaWdodFwiXSA9IFwiXCI7XG4gICAgICAgIHN0eWxlT2JqZWN0W1wibGVmdFwiXSA9IFwiXCI7XG5cbiAgICAgICAgaWYodGhpcy5kb2NrLnZhbHVlID09PSBcInRvcFwiKXtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUucG9zaXRpb24uc3RhdGUgPSBcInN0YXRpY1wiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ0b3BcIl0gPSBcIjBcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwicm93XCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiNSVcIjtcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMuZG9jay52YWx1ZSA9PT0gXCJib3R0b21cIil7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLnBvc2l0aW9uLnN0YXRlID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJib3R0b21cIl0gPSBcIjBcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwicm93XCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcIndpZHRoXCJdID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiNSVcIjtcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMuZG9jay52YWx1ZSA9PT0gXCJyaWdodFwiKXtcbiAgICAgICAgICAgICB0aGlzLnN0eWxlLnBvc2l0aW9uLnN0YXRlID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJyaWdodFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgfWVsc2UgaWYodGhpcy5kb2NrLnZhbHVlID09PSBcImxlZnRcIil7XG4gICAgICAgICAgICAgdGhpcy5zdHlsZS5wb3NpdGlvbi5zdGF0ZSA9IFwiZml4ZWRcIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wibGVmdFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJmbGV4RGlyZWN0aW9uXCJdID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wid2lkdGhcIl0gPSBcIjUlXCI7XG4gICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHN0eWxlT2JqZWN0O1xuICAgIFxuICAgIH1cblxuXG59XG5cblxuY2xhc3MgQnJhbmRDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJwcm9wc1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IFByb3BzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gXCJuYXZiYXItaGVhZGVyXCI7XG5cbiAgICAgICAgdGhpcy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWRkaW5nOlwiMTVweCAxNXB4XCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZS5mb250LnN0YXRlID0ge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbmNsYXNzIExvZ29Db25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcmM6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgQ1NTKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuYm9yZGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgYm9yZGVyOlwiMnB4IHNvbGlkICNlYmViZWJcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czpcIjUwJVwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDpcIjUwXCIsXG4gICAgICAgICAgICBoZWlnaHQ6XCI1MFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5jbGFzcyBUaXRsZUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLkNTUy5jbGFzc05hbWUuc3RhdGUgPSBcIm5hdmJhci1icmFuZFwiO1xuXG4gICAgICAgdGhpcy5zdHlsZS5mb250LnN0YXRlID0ge1xuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICBmb250U2l6ZTpcIjE4cHhcIlxuICAgICAgICB9O1xuXG4gICAgfVxufVxuXG5cblxuY2xhc3MgTGlzdENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcImxlZnRcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVQYWdlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzcGFjZVwiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZU51bWJlcig4KSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJwcm9wc1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IFByb3BzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5DU1MuY2xhc3NOYW1lLnN0YXRlID0gXCJuYXYgbmF2YmFyLW5hdlwiO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTpcIm5vbmVcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OlwiMFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luLnN0YXRlID0ge1xuICAgICAgICAgICAgbWFyZ2luOlwiNy41cHhcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlKTtcblxuICAgIH1cblxuXG4gICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgICAgU3R5bGUuYWxpZ25DaGlsZHJlbih0aGlzLnN0eWxlLHRoaXMuYWxpZ24uc3RhdGUpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBMaW5rQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWNvbk5hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1ob21lXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVMaW5rU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLmZvbnQuc3RhdGUgPSB7XG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgIGNvbG9yOlwiIzc3N1wiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUucGFkZGluZy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCJcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBGb3JtQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFkZEdhcEF0XCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNwYWNlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiMnB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgQ1NTKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIFwicHJvcHNcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBQcm9wcygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IFwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCI7XG5cbiAgICAgICAgdGhpcy5jaGlsZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy90aGlzLmFkZEdhcEF0LnN0YXRlID0gMDtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luLnN0YXRlID0ge1xuICAgICAgICAgICAgbWFyZ2luOlwiNHB4XCIsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbmNvbnN0IG5hdmJhckNvbmZpZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgbmF2YmFyQ29uZmlnXG5cbm5hdmJhckNvbmZpZy5OYXZiYXIgPSBOYXZDb25maWc7XG5uYXZiYXJDb25maWcuQnJhbmQgPSBCcmFuZENvbmZpZztcbm5hdmJhckNvbmZpZy5Mb2dvID0gTG9nb0NvbmZpZztcbm5hdmJhckNvbmZpZy5UaXRsZSA9IFRpdGxlQ29uZmlnO1xubmF2YmFyQ29uZmlnLkxpc3QgPSBMaXN0Q29uZmlnO1xubmF2YmFyQ29uZmlnLkxpbmsgPSBMaW5rQ29uZmlnO1xubmF2YmFyQ29uZmlnLkZvcm0gPSBGb3JtQ29uZmlnO1xuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLk5hdmJhcicsIG5hdmJhckNvbmZpZy5OYXZiYXIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5CcmFuZCcsIG5hdmJhckNvbmZpZy5CcmFuZCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxvZ28nLCBuYXZiYXJDb25maWcuTG9nbyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLlRpdGxlJywgbmF2YmFyQ29uZmlnLlRpdGxlLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGlzdCcsIG5hdmJhckNvbmZpZy5MaXN0LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGluaycsIG5hdmJhckNvbmZpZy5MaW5rLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuRm9ybScsIG5hdmJhckNvbmZpZy5Gb3JtLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG4iXX0=
