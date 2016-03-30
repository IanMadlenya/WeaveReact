"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ButtonConfig = function () {
    function ButtonConfig() {
        _classCallCheck(this, ButtonConfig);

        _ComponentManager2.default.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            "icon": { //{default: "" , clicked: "" , mouseOver: ""}
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "iconOnly": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "clicked": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "label": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            }
        });

        this.style.state = {
            display: "flex",
            flexDirection: "row",
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            margin: "0",
            color: "inherit",
            textTransform: "none",
            cursor: "pointer",
            alignItems: "center"
        };

        this.reverseLayout.addImmediateCallback(this, this.updateStyle);
    }

    _createClass(ButtonConfig, [{
        key: "updateStyle",
        value: function updateStyle() {
            var flexDir = this.reverseLayout.state ? "row-reverse" : "row";
            this.style.state = { flexDirection: flexDir };
            //to-do move to manager calss as fliPicons
            var icons = this.icon.state;
            var keys = Object.keys(icons);
            if (this.reverseLayout.state) {
                keys.map(function (key, index) {
                    if (icons[key].indexOf(" fa-flip-horizontal") == -1) {
                        //not flipped
                        icons[key] = icons[key] + " fa-flip-horizontal";
                    }
                }, this);
            } else {
                keys.map(function (key, index) {
                    if (icons[key].indexOf(" fa-flip-horizontal") != -1) {
                        // flipped
                        var index = icons[key].indexOf(" fa-flip-horizontal");
                        icons[key] = icons[key].substring(0, index);
                    }
                }, this);
            }
            this.icon.state = icons;
        }
    }, {
        key: "getIcon",
        value: function getIcon() {
            if (this.clicked.state) {
                return this.icon.state["clicked"];
            } else {
                return this.icon.state["default"];
            }
        }
    }]);

    return ButtonConfig;
}();

exports.default = ButtonConfig;

//This Function makes this class as SessionClass

Weave.registerClass('weavereact.ButtonConfig', ButtonConfig, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,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VixDQUFnQixTQUFoQixDQUFQLENBREE7YUFISjs7OztXQTlERjs7O2tCQTJFUzs7OztBQUlmLE1BQU0sYUFBTixDQUFvQix5QkFBcEIsRUFBK0MsWUFBL0MsRUFBNEQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTdEIiwiZmlsZSI6IkNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cbmNsYXNzIEJ1dHRvbkNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImljb25cIjp7Ly97ZGVmYXVsdDogXCJcIiAsIGNsaWNrZWQ6IFwiXCIgLCBtb3VzZU92ZXI6IFwiXCJ9XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpY29uT25seVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjbGlja2VkXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxhYmVsXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcImluaGVyaXRcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjBcIixcbiAgICAgICAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmV2ZXJzZUxheW91dC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMudXBkYXRlU3R5bGUpXG5cblxuICAgIH1cblxuICAgIHVwZGF0ZVN0eWxlKCl7XG4gICAgICAgIHZhciBmbGV4RGlyID0gdGhpcy5yZXZlcnNlTGF5b3V0LnN0YXRlP1wicm93LXJldmVyc2VcIjpcInJvd1wiO1xuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge2ZsZXhEaXJlY3Rpb246ZmxleERpcn07XG4gICAgICAgIC8vdG8tZG8gbW92ZSB0byBtYW5hZ2VyIGNhbHNzIGFzIGZsaVBpY29uc1xuICAgICAgICB2YXIgaWNvbnMgPSB0aGlzLmljb24uc3RhdGU7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoaWNvbnMpO1xuICAgICAgICBpZih0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGUpe1xuICAgICAgICAgICAga2V5cy5tYXAoZnVuY3Rpb24oa2V5LGluZGV4KXtcbiAgICAgICAgICAgICAgICBpZihpY29uc1trZXldLmluZGV4T2YoXCIgZmEtZmxpcC1ob3Jpem9udGFsXCIpID09IC0xKXsvL25vdCBmbGlwcGVkXG4gICAgICAgICAgICAgICAgICAgIGljb25zW2tleV0gPSBpY29uc1trZXldICsgXCIgZmEtZmxpcC1ob3Jpem9udGFsXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBrZXlzLm1hcChmdW5jdGlvbihrZXksaW5kZXgpe1xuICAgICAgICAgICAgICAgIGlmKGljb25zW2tleV0uaW5kZXhPZihcIiBmYS1mbGlwLWhvcml6b250YWxcIikgIT0gLTEpey8vIGZsaXBwZWRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gaWNvbnNba2V5XS5pbmRleE9mKFwiIGZhLWZsaXAtaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNba2V5XSA9IGljb25zW2tleV0uc3Vic3RyaW5nKDAsaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sdGhpcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmljb24uc3RhdGUgPSBpY29ucztcbiAgICB9XG5cbiAgICBnZXRJY29uKCl7XG4gICAgICAgIGlmKHRoaXMuY2xpY2tlZC5zdGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uLnN0YXRlW1wiY2xpY2tlZFwiXVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uLnN0YXRlW1wiZGVmYXVsdFwiXVxuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkNvbmZpZ1xuXG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5CdXR0b25Db25maWcnLCBCdXR0b25Db25maWcsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbiJdfQ==
