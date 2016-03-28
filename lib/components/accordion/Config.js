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

        this.style.state = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "inherit",
            height: "100%",
            width: "100%"
        };

        this.childStyle.state = {
            flexBasis: "0%"
        };

        this.activeChildStyle.state = {
            flexBasis: "inherit"
        };
    }

    _createClass(AccordionConfig, [{
        key: "setIconModeLayout",
        value: function setIconModeLayout(isIcon) {
            var styleObject = {};
            if (isIcon) styleObject["alignItems"] = "center";else styleObject["alignItems"] = "stretch";
            this.style.state = styleObject;
        }
    }, {
        key: "changeActiveChildStyle",
        value: function changeActiveChildStyle() {
            if (this.mode.state == "parentHeight") {
                this.activeChildStyle.state = {
                    flexBasis: "100%"
                };
            } else if (this.mode.state == "childHeight") {
                this.activeChildStyle.state = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNO0FBQ0YsYUFERSxlQUNGLEdBQWM7OEJBRFosaUJBQ1k7O0FBRVYsbUNBQWlCLDhCQUFqQixDQUFnRCxJQUFoRCxFQUFxRCxXQUFyRCxFQUZVOztBQUlULGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7O0FBRTNCLDJCQUFlO0FBQ1gsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0EsMEJBQWE7QUFDVCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7YUFESjtBQUdBLGdDQUFtQjtBQUNmLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDthQURKO0FBR0Esb0JBQU87QUFDSCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLGNBQWhDLENBQTFCLENBQVA7YUFESjtTQVhILEVBSlM7O0FBb0JWLGFBQUssSUFBTCxDQUFVLG9CQUFWLENBQStCLElBQS9CLEVBQW9DLEtBQUssc0JBQUwsQ0FBcEMsQ0FwQlU7O0FBc0JWLGFBQUssV0FBTCxDQUFpQixLQUFqQixHQUF5QixDQUF6QixDQXRCVTs7QUF5QlYsYUFBSyxLQUFMLENBQVcsS0FBWCxHQUFtQjtBQUNmLHFCQUFRLE1BQVI7QUFDQSwyQkFBYyxRQUFkO0FBQ0EsNEJBQWUsWUFBZjtBQUNBLHdCQUFXLFNBQVg7QUFDQSxvQkFBTyxNQUFQO0FBQ0EsbUJBQU0sTUFBTjtTQU5KLENBekJVOztBQW1DVixhQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsR0FBd0I7QUFDcEIsdUJBQVUsSUFBVjtTQURKLENBbkNVOztBQXVDVixhQUFLLGdCQUFMLENBQXNCLEtBQXRCLEdBQThCO0FBQzFCLHVCQUFVLFNBQVY7U0FESixDQXZDVTtLQUFkOztpQkFERTs7MENBNkNnQixRQUFPO0FBQ3JCLGdCQUFJLGNBQWMsRUFBZCxDQURpQjtBQUVyQixnQkFBRyxNQUFILEVBQVUsWUFBWSxZQUFaLElBQTRCLFFBQTVCLENBQVYsS0FDSyxZQUFZLFlBQVosSUFBNEIsU0FBNUIsQ0FETDtBQUVBLGlCQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQW1CLFdBQW5CLENBSnFCOzs7O2lEQVFEO0FBQ3BCLGdCQUFHLEtBQUssSUFBTCxDQUFVLEtBQVYsSUFBbUIsY0FBbkIsRUFBa0M7QUFDakMscUJBQUssZ0JBQUwsQ0FBc0IsS0FBdEIsR0FBOEI7QUFDMUIsK0JBQVUsTUFBVjtpQkFESixDQURpQzthQUFyQyxNQUlNLElBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixJQUFtQixhQUFuQixFQUFpQztBQUN0QyxxQkFBSyxnQkFBTCxDQUFzQixLQUF0QixHQUE4QjtBQUMxQiwrQkFBVSxTQUFWO2lCQURKLENBRHNDO2FBQXBDOzs7O1dBMURSOzs7a0JBbUVTOzs7O0FBSWYsTUFBTSxhQUFOLENBQW9CLDRCQUFwQixFQUFrRCxlQUFsRCxFQUFrRSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBbkUiLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuXG5jbGFzcyBBY2NvcmRpb25Db25maWcgIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLFwiY29udGFpbmVyXCIpO1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgIFwiYWN0aXZlQ2hpbGRcIjogey8vIGNhbiBiZSBpbmRleCB8fCBzdHJpbmdcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVDaGlsZFN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwicGFyZW50SGVpZ2h0XCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmNoYW5nZUFjdGl2ZUNoaWxkU3R5bGUpXG5cbiAgICAgICAgdGhpcy5hY3RpdmVDaGlsZC5zdGF0ZSA9IDA7XG5cblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiZmxleC1zdGFydFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcbiAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiXG4gICAgICAgIH07XG5cblxuICAgICAgICB0aGlzLmNoaWxkU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4QmFzaXM6XCIwJVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hY3RpdmVDaGlsZFN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleEJhc2lzOlwiaW5oZXJpdFwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0SWNvbk1vZGVMYXlvdXQoaXNJY29uKXtcbiAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0ge307XG4gICAgICAgIGlmKGlzSWNvbilzdHlsZU9iamVjdFtcImFsaWduSXRlbXNcIl0gPSBcImNlbnRlclwiO1xuICAgICAgICBlbHNlIHN0eWxlT2JqZWN0W1wiYWxpZ25JdGVtc1wiXSA9IFwic3RyZXRjaFwiO1xuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0gc3R5bGVPYmplY3Q7XG5cbiAgICB9XG5cbiAgICBjaGFuZ2VBY3RpdmVDaGlsZFN0eWxlKCl7XG4gICAgICAgIGlmKHRoaXMubW9kZS5zdGF0ZSA9PSBcInBhcmVudEhlaWdodFwiKXtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2hpbGRTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXM6XCIxMDAlXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1lbHNlIGlmKHRoaXMubW9kZS5zdGF0ZSA9PSBcImNoaWxkSGVpZ2h0XCIpe1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDaGlsZFN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGZsZXhCYXNpczpcImluaGVyaXRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25Db25maWdcblxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuQWNjb3JkaW9uQ29uZmlnJywgQWNjb3JkaW9uQ29uZmlnLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG4iXX0=
