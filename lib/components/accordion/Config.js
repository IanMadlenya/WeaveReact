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

Weave.registerClass(AccordionConfig, ['weavereact.AccordionConfig'], [weavejs.api.core.ILinkableObject], "Accordion Config");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNO0FBQ0YsYUFERSxlQUNGLEdBQWM7OEJBRFosaUJBQ1k7O0FBRVYsbUNBQWlCLDhCQUFqQixDQUFnRCxJQUFoRCxFQUFxRCxXQUFyRCxFQUZVOztBQUlULGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7O0FBRTNCLDJCQUFlO0FBQ1gsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0EsMEJBQWE7QUFDVCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7YUFESjtBQUdBLGdDQUFtQjtBQUNmLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDthQURKO0FBR0Esb0JBQU87QUFDSCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLGNBQWhDLENBQTFCLENBQVA7YUFESjtTQVhILEVBSlM7O0FBb0JWLGFBQUssSUFBTCxDQUFVLG9CQUFWLENBQStCLElBQS9CLEVBQW9DLEtBQUssc0JBQUwsQ0FBcEMsQ0FwQlU7O0FBc0JWLGFBQUssV0FBTCxDQUFpQixLQUFqQixHQUF5QixDQUF6QixDQXRCVTs7QUF5QlYsYUFBSyxLQUFMLENBQVcsS0FBWCxHQUFtQjtBQUNmLHFCQUFRLE1BQVI7QUFDQSwyQkFBYyxRQUFkO0FBQ0EsNEJBQWUsWUFBZjtBQUNBLHdCQUFXLFNBQVg7QUFDQSxvQkFBTyxNQUFQO0FBQ0EsbUJBQU0sTUFBTjtTQU5KLENBekJVOztBQW1DVixhQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsR0FBd0I7QUFDcEIsdUJBQVUsSUFBVjtTQURKLENBbkNVOztBQXVDVixhQUFLLGdCQUFMLENBQXNCLEtBQXRCLEdBQThCO0FBQzFCLHVCQUFVLFNBQVY7U0FESixDQXZDVTtLQUFkOztpQkFERTs7MENBNkNnQixRQUFPO0FBQ3JCLGdCQUFJLGNBQWMsRUFBZCxDQURpQjtBQUVyQixnQkFBRyxNQUFILEVBQVUsWUFBWSxZQUFaLElBQTRCLFFBQTVCLENBQVYsS0FDSyxZQUFZLFlBQVosSUFBNEIsU0FBNUIsQ0FETDtBQUVBLGlCQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQW1CLFdBQW5CLENBSnFCOzs7O2lEQVFEO0FBQ3BCLGdCQUFHLEtBQUssSUFBTCxDQUFVLEtBQVYsSUFBbUIsY0FBbkIsRUFBa0M7QUFDakMscUJBQUssZ0JBQUwsQ0FBc0IsS0FBdEIsR0FBOEI7QUFDMUIsK0JBQVUsTUFBVjtpQkFESixDQURpQzthQUFyQyxNQUlNLElBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixJQUFtQixhQUFuQixFQUFpQztBQUN0QyxxQkFBSyxnQkFBTCxDQUFzQixLQUF0QixHQUE4QjtBQUMxQiwrQkFBVSxTQUFWO2lCQURKLENBRHNDO2FBQXBDOzs7O1dBMURSOzs7a0JBbUVTOzs7O0FBSWYsTUFBTSxhQUFOLENBQXFCLGVBQXJCLEVBQXFDLENBQUMsNEJBQUQsQ0FBckMsRUFBb0UsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXJFLEVBQXVHLGtCQUF2RyIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5cbmNsYXNzIEFjY29yZGlvbkNvbmZpZyAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMsXCJjb250YWluZXJcIik7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcblxuICAgICAgICAgICAgXCJhY3RpdmVDaGlsZFwiOiB7Ly8gY2FuIGJlIGluZGV4IHx8IHN0cmluZ1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRTdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZUNoaWxkU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtb2RlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJwYXJlbnRIZWlnaHRcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuY2hhbmdlQWN0aXZlQ2hpbGRTdHlsZSlcblxuICAgICAgICB0aGlzLmFjdGl2ZUNoaWxkLnN0YXRlID0gMDtcblxuXG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxuICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCJcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMuY2hpbGRTdHlsZS5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczpcIjAlXCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFjdGl2ZUNoaWxkU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4QmFzaXM6XCJpbmhlcml0XCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRJY29uTW9kZUxheW91dChpc0ljb24pe1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB7fTtcbiAgICAgICAgaWYoaXNJY29uKXN0eWxlT2JqZWN0W1wiYWxpZ25JdGVtc1wiXSA9IFwiY2VudGVyXCI7XG4gICAgICAgIGVsc2Ugc3R5bGVPYmplY3RbXCJhbGlnbkl0ZW1zXCJdID0gXCJzdHJldGNoXCI7XG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSBzdHlsZU9iamVjdDtcblxuICAgIH1cblxuICAgIGNoYW5nZUFjdGl2ZUNoaWxkU3R5bGUoKXtcbiAgICAgICAgaWYodGhpcy5tb2RlLnN0YXRlID09IFwicGFyZW50SGVpZ2h0XCIpe1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDaGlsZFN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGZsZXhCYXNpczpcIjEwMCVcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5tb2RlLnN0YXRlID09IFwiY2hpbGRIZWlnaHRcIil7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNoaWxkU3R5bGUuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgZmxleEJhc2lzOlwiaW5oZXJpdFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbkNvbmZpZ1xuXG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcyggQWNjb3JkaW9uQ29uZmlnLFsnd2VhdmVyZWFjdC5BY2NvcmRpb25Db25maWcnXSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdLFwiQWNjb3JkaW9uIENvbmZpZ1wiKTtcblxuIl19