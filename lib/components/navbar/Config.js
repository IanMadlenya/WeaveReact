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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarConfig = exports.NavbarConfig = function NavbarConfig() {
    _classCallCheck(this, NavbarConfig);

    Object.defineProperties(this, {
        "type": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(NavbarConfig.types.DEFAULT))
        },
        "positionType": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(NavbarConfig.positionType.STATIC))
        },
        "position": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(NavbarConfig.position.TOP))
        },
        "brand": {
            value: Weave.linkableChild(this, new NavBrandConfig())
        },
        "form": {
            value: Weave.linkableChild(this, new NavFormConfig())
        },
        "navList": {
            value: Weave.linkableChild(this, new NavListConfig())
        }
    });
};

//to-do replace with flexbox

NavbarConfig.MAIN = 'navbar';

NavbarConfig.types = {
    "DEFAULT": "default",
    "INVERSE": "inverse"
};

//body { padding-top: 70px; } for fixed status we have to set this
NavbarConfig.positionType = {
    "FIXED": "fixed",
    "STATIC": "static"
};

NavbarConfig.position = {
    "TOP": "top",
    "BOTTOM": "bottom"
};

NavbarConfig.alignment = {
    "RIGHT": "pull-right",
    "LEFT": ""
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
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        }
    });
};

//This Function makes this class as SessionClass

Weave.registerClass('weavereact.navbar.config.NavLinkConfig', NavLinkConfig, [weavejs.api.core.ILinkableObject]);

var NavBrandConfig = exports.NavBrandConfig = function NavBrandConfig() {
    _classCallCheck(this, NavBrandConfig);

    Object.defineProperties(this, {
        "title": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("Brand"))
        },
        "enable": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
        }
    });
};

//This Function makes this class as SessionClass

Weave.registerClass('weavereact.navbar.config.NavBrandConfig', NavBrandConfig, [weavejs.api.core.ILinkableObject]);

var NavListConfig = exports.NavListConfig = function NavListConfig() {
    _classCallCheck(this, NavListConfig);

    Object.defineProperties(this, {
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
        }
    });
};

//This Function makes this class as SessionClass

Weave.registerClass('weavereact.navbar.config.NavListConfig', NavListConfig, [weavejs.api.core.ILinkableObject]);

var NavFormConfig = exports.NavFormConfig = function NavFormConfig() {
    _classCallCheck(this, NavFormConfig);

    Object.defineProperties(this, {
        "enable": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
        },
        "rightAlign": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
        },
        "controllers": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap(weavejs.core.LinkablePlaceholder))
        },
        "space": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
        }
    });
};

//This Function makes this class as SessionClass

Weave.registerClass('weavereact.navbar.config.NavFormConfig', NavFormConfig, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,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LFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsSUFBakMsQ0FBMUIsQ0FBUDtTQURKO0FBR0EsdUJBQWU7QUFDWCxtQkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLFFBQVEsSUFBUixDQUFhLG1CQUFiLENBQTNELENBQVA7U0FESjtBQUdBLGlCQUFTO0FBQ0wsbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixLQUFoQyxDQUExQixDQUFQO1NBREo7S0FWSCxFQUZTO0NBQWQ7Ozs7QUFvQkosTUFBTSxhQUFOLENBQW9CLHdDQUFwQixFQUE4RCxhQUE5RCxFQUE0RSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBN0UiLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJyYW5kIGZyb20gXCIuL0JyYW5kXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5cblxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKE5hdmJhckNvbmZpZy50eXBlcy5ERUZBVUxUKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBvc2l0aW9uVHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhOYXZiYXJDb25maWcucG9zaXRpb25UeXBlLlNUQVRJQykpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhOYXZiYXJDb25maWcucG9zaXRpb24uVE9QKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJyYW5kXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTmF2QnJhbmRDb25maWcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZvcm1cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBOYXZGb3JtQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJuYXZMaXN0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTmF2TGlzdENvbmZpZygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8vdG8tZG8gcmVwbGFjZSB3aXRoIGZsZXhib3hcbk5hdmJhckNvbmZpZy5NQUlOID0gJ25hdmJhcic7XG5cbk5hdmJhckNvbmZpZy50eXBlcyA9IHtcbiAgICBcIkRFRkFVTFRcIjogXCJkZWZhdWx0XCIsXG4gICAgXCJJTlZFUlNFXCI6IFwiaW52ZXJzZVwiXG59O1xuXG4vL2JvZHkgeyBwYWRkaW5nLXRvcDogNzBweDsgfSBmb3IgZml4ZWQgc3RhdHVzIHdlIGhhdmUgdG8gc2V0IHRoaXNcbk5hdmJhckNvbmZpZy5wb3NpdGlvblR5cGUgPSB7XG4gICAgXCJGSVhFRFwiOiBcImZpeGVkXCIsXG4gICAgXCJTVEFUSUNcIjogXCJzdGF0aWNcIlxufTtcblxuTmF2YmFyQ29uZmlnLnBvc2l0aW9uID0ge1xuICAgIFwiVE9QXCI6IFwidG9wXCIsXG4gICAgXCJCT1RUT01cIjogXCJib3R0b21cIlxufTtcblxuTmF2YmFyQ29uZmlnLmFsaWdubWVudCA9IHtcbiAgICBcIlJJR0hUXCI6IFwicHVsbC1yaWdodFwiLFxuICAgIFwiTEVGVFwiOiBcIlwiXG59O1xuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhci5jb25maWcuTmF2YmFyQ29uZmlnJywgTmF2YmFyQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBOYXZMaW5rQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiTGlua1wiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25OYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXIuY29uZmlnLk5hdkxpbmtDb25maWcnLCBOYXZMaW5rQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cbmV4cG9ydCBjbGFzcyBOYXZCcmFuZENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIkJyYW5kXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyLmNvbmZpZy5OYXZCcmFuZENvbmZpZycsIE5hdkJyYW5kQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5cbmV4cG9ydCBjbGFzcyBOYXZMaXN0Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmlnaHRBbGlnblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlUGFnZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJsaW5rc1wiOntcbiAgICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhci5jb25maWcuTmF2TGlzdENvbmZpZycsIE5hdkxpc3RDb25maWcsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cblxuZXhwb3J0IGNsYXNzIE5hdkZvcm1Db25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyaWdodEFsaWduXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbnRyb2xsZXJzXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCh3ZWF2ZWpzLmNvcmUuTGlua2FibGVQbGFjZWhvbGRlcikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzcGFjZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjJweFwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyLmNvbmZpZy5OYXZGb3JtQ29uZmlnJywgTmF2Rm9ybUNvbmZpZyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuXG5cblxuIl19
