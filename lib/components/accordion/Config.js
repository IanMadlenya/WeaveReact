"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccordionConfig = function () {
    function AccordionConfig() {
        _classCallCheck(this, AccordionConfig);

        _ComponentManager2.default.createDefaultSessionProperties(this, "container");

        Object.defineProperties(this, {

            "activeChild": { // can be index || string
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "childStyle": {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            "activeChildStyle": {
                value: Weave.linkableChild(this, new _InlineStyle2.default())
            },
            "mode": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("parentHeight"))
            }
        });

        this.mode.addImmediateCallback(this, this.changeActiveChildStyle);

        this.activeChild.state = 0;

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
        key: "setIconModeLayout",
        value: function setIconModeLayout(isIcon) {
            var styleObject = this.style.other.state ? this.style.other.state : {};
            if (isIcon) styleObject["alignItems"] = "center";else styleObject["alignItems"] = "stretch";
        }
    }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNO0FBQ0YsYUFERSxlQUNGLEdBQWM7OEJBRFosaUJBQ1k7O0FBRVYsbUNBQWlCLDhCQUFqQixDQUFnRCxJQUFoRCxFQUFxRCxXQUFyRCxFQUZVOztBQUlULGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7O0FBRTNCLDJCQUFlO0FBQ1gsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0EsMEJBQWE7QUFDVCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7YUFESjtBQUdBLGdDQUFtQjtBQUNmLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDthQURKO0FBR0Esb0JBQU87QUFDSCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLGNBQWhDLENBQTFCLENBQVA7YUFESjtTQVhILEVBSlM7O0FBb0JWLGFBQUssSUFBTCxDQUFVLG9CQUFWLENBQStCLElBQS9CLEVBQW9DLEtBQUssc0JBQUwsQ0FBcEMsQ0FwQlU7O0FBc0JWLGFBQUssV0FBTCxDQUFpQixLQUFqQixHQUF5QixDQUF6QixDQXRCVTs7QUEwQlYsYUFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixLQUFuQixHQUEyQixNQUEzQixDQTFCVTtBQTJCVixhQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEtBQWpCLEdBQXlCO0FBQ3JCLDJCQUFjLFFBQWQ7QUFDQSw0QkFBZSxZQUFmO0FBQ0Esd0JBQVcsU0FBWDtBQUNBLG9CQUFPLE1BQVA7QUFDQSxtQkFBTSxNQUFOO1NBTEosQ0EzQlU7O0FBb0NWLGFBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixLQUF0QixHQUE4QjtBQUMxQix1QkFBVSxJQUFWO1NBREosQ0FwQ1U7O0FBd0NWLGFBQUssZ0JBQUwsQ0FBc0IsS0FBdEIsQ0FBNEIsS0FBNUIsR0FBb0M7QUFDaEMsdUJBQVUsU0FBVjtTQURKLENBeENVO0tBQWQ7O2lCQURFOzswQ0E4Q2dCLFFBQU87QUFDckIsZ0JBQUksY0FBYyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEtBQWpCLEdBQXlCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsS0FBakIsR0FBd0IsRUFBakQsQ0FERztBQUVyQixnQkFBRyxNQUFILEVBQVUsWUFBWSxZQUFaLElBQTRCLFFBQTVCLENBQVYsS0FDSyxZQUFZLFlBQVosSUFBNEIsU0FBNUIsQ0FETDs7OztpREFJb0I7QUFDcEIsZ0JBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixJQUFtQixjQUFuQixFQUFrQztBQUNqQyxxQkFBSyxnQkFBTCxDQUFzQixLQUF0QixDQUE0QixLQUE1QixHQUFvQztBQUNoQywrQkFBVSxNQUFWO2lCQURKLENBRGlDO2FBQXJDLE1BSU0sSUFBRyxLQUFLLElBQUwsQ0FBVSxLQUFWLElBQW1CLGFBQW5CLEVBQWlDO0FBQ3RDLHFCQUFLLGdCQUFMLENBQXNCLEtBQXRCLENBQTRCLEtBQTVCLEdBQW9DO0FBQ2hDLCtCQUFVLFNBQVY7aUJBREosQ0FEc0M7YUFBcEM7Ozs7V0F6RFI7OztrQkFrRVM7Ozs7QUFJZixNQUFNLGFBQU4sQ0FBb0IsNEJBQXBCLEVBQWtELGVBQWxELEVBQWtFLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFuRSIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5cbmNsYXNzIEFjY29yZGlvbkNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFwiYWN0aXZlQ2hpbGRcIjogey8vIGNhbiBiZSBpbmRleCB8fCBzdHJpbmdcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVDaGlsZFN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwicGFyZW50SGVpZ2h0XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmNoYW5nZUFjdGl2ZUNoaWxkU3R5bGUpXG5cbiAgICAgICAgdGhpcy5hY3RpdmVDaGlsZC5zdGF0ZSA9IDA7XG5cblxuXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxuICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCJcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMuY2hpbGRTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczpcIjAlXCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFjdGl2ZUNoaWxkU3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4QmFzaXM6XCJpbmhlcml0XCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRJY29uTW9kZUxheW91dChpc0ljb24pe1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID8gdGhpcy5zdHlsZS5vdGhlci5zdGF0ZToge307XG4gICAgICAgIGlmKGlzSWNvbilzdHlsZU9iamVjdFtcImFsaWduSXRlbXNcIl0gPSBcImNlbnRlclwiO1xuICAgICAgICBlbHNlIHN0eWxlT2JqZWN0W1wiYWxpZ25JdGVtc1wiXSA9IFwic3RyZXRjaFwiO1xuICAgIH1cblxuICAgIGNoYW5nZUFjdGl2ZUNoaWxkU3R5bGUoKXtcbiAgICAgICAgaWYodGhpcy5tb2RlLnN0YXRlID09IFwicGFyZW50SGVpZ2h0XCIpe1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDaGlsZFN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGZsZXhCYXNpczpcIjEwMCVcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5tb2RlLnN0YXRlID09IFwiY2hpbGRIZWlnaHRcIil7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNoaWxkU3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgZmxleEJhc2lzOlwiaW5oZXJpdFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbkNvbmZpZ1xuXG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5BY2NvcmRpb25Db25maWcnLCBBY2NvcmRpb25Db25maWcsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbiJdfQ==
