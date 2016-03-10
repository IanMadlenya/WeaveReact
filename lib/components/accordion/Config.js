"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _CSS = require("../../configs/CSS");

var _CSS2 = _interopRequireDefault(_CSS);

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
//# sourceMappingURL=data:application/json;base64,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bmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENTUyBmcm9tIFwiLi4vLi4vY29uZmlncy9DU1NcIjtcblxuY2xhc3MgQWNjb3JkaW9uQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVDaGlsZFwiOiB7Ly8gY2FuIGJlIGluZGV4IHx8IHN0cmluZ1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRTdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZUNoaWxkU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwicGFyZW50SGVpZ2h0XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW9kZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuY2hhbmdlQWN0aXZlQ2hpbGRTdHlsZSlcblxuICAgICAgICB0aGlzLmFjdGl2ZUNoaWxkLnN0YXRlID0gMDtcblxuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXG4gICAgICAgICAgICB3aWR0aDpcIjEwMCVcIlxuICAgICAgICB9O1xuXG5cbiAgICAgICAgdGhpcy5jaGlsZFN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleEJhc2lzOlwiMCVcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWN0aXZlQ2hpbGRTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjaGFuZ2VBY3RpdmVDaGlsZFN0eWxlKCl7XG4gICAgICAgIGlmKHRoaXMubW9kZS5zdGF0ZSA9PSBcInBhcmVudEhlaWdodFwiKXtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2hpbGRTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6XCIxMDAlXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1lbHNlIGlmKHRoaXMubW9kZS5zdGF0ZSA9PSBcImNoaWxkSGVpZ2h0XCIpe1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDaGlsZFN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGZsZXhCYXNpczpcImluaGVyaXRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25Db25maWdcblxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuQWNjb3JkaW9uQ29uZmlnJywgQWNjb3JkaW9uQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG4iXX0=
