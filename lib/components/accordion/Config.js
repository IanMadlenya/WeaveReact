"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _CSS = require("../../configs/CSS");

var _CSS2 = _interopRequireDefault(_CSS);

var _Props = require("../../configs/Props");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccordionConfig = function () {
    function AccordionConfig() {
        _classCallCheck(this, AccordionConfig);

        Object.defineProperties(this, {
            "style": {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            "CSS": {
                value: Weave.linkableChild(this, new _CSS2.default())
            },
            "children": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            },
            "activeChild": { // can be index || string
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "childStyle": {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            "activeChildStyle": {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            "useCSS": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "mode": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("parentHeight"))
            },
            "props": {
                value: new _Props2.default()
            }
        });

        this.mode.addImmediateCallback(this, this.changeActiveChildStyle);

        this.activeChild.state = 0;

        this.childConfigMap = new Map();
        this.configChildMap = new Map();

        this.style.display.value = "flex";
        this.style.other.state = {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "inherit",
            height: "100%",
            width: "100%"
        };

        this.childStyle.other.state = {
            flexBasis: "0%"
        };

        this.activeChildStyle.other.state = {
            flexBasis: "inherit"
        };
    }

    _createClass(AccordionConfig, [{
        key: "changeActiveChildStyle",
        value: function changeActiveChildStyle() {
            if (this.mode.state == "parentHeight") {
                this.activeChildStyle.other.state = {
                    flexBasis: "100%"
                };
            } else if (this.mode.state == "childHeight") {
                this.activeChildStyle.other.state = {
                    flexBasis: "inherit"
                };
            }
        }
    }]);

    return AccordionConfig;
}();

exports.default = AccordionConfig;

//This Function makes this class as SessionClass

Weave.registerClass('weavereact.AccordionConfig', AccordionConfig, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,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bkUiLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ1NTIGZyb20gXCIuLi8uLi9jb25maWdzL0NTU1wiO1xuaW1wb3J0IFByb3BzIGZyb20gXCIuLi8uLi9jb25maWdzL1Byb3BzXCI7XG5cbmNsYXNzIEFjY29yZGlvbkNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlQ2hpbGRcIjogey8vIGNhbiBiZSBpbmRleCB8fCBzdHJpbmdcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVDaGlsZFN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1vZGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcInBhcmVudEhlaWdodFwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInByb3BzXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiAgbmV3IFByb3BzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tb2RlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5jaGFuZ2VBY3RpdmVDaGlsZFN0eWxlKVxuXG4gICAgICAgIHRoaXMuYWN0aXZlQ2hpbGQuc3RhdGUgPSAwO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXG4gICAgICAgICAgICB3aWR0aDpcIjEwMCVcIlxuICAgICAgICB9O1xuXG5cbiAgICAgICAgdGhpcy5jaGlsZFN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleEJhc2lzOlwiMCVcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWN0aXZlQ2hpbGRTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNoYW5nZUFjdGl2ZUNoaWxkU3R5bGUoKXtcbiAgICAgICAgaWYodGhpcy5tb2RlLnN0YXRlID09IFwicGFyZW50SGVpZ2h0XCIpe1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDaGlsZFN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGZsZXhCYXNpczpcIjEwMCVcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5tb2RlLnN0YXRlID09IFwiY2hpbGRIZWlnaHRcIil7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNoaWxkU3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgZmxleEJhc2lzOlwiaW5oZXJpdFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbkNvbmZpZ1xuXG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5BY2NvcmRpb25Db25maWcnLCBBY2NvcmRpb25Db25maWcsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbiJdfQ==
