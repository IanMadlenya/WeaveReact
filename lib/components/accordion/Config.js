"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _CSS = require("../../configs/CSS");

var _CSS2 = _interopRequireDefault(_CSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccordionConfig = function AccordionConfig() {
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
        }
    });

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
        flexBasis: "100%"
    };
};

exports.default = AccordionConfig;

//This Function makes this class as SessionClass

Weave.registerClass('weavereact.AccordionConfig', AccordionConfig, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTSxrQkFDRixTQURFLGVBQ0YsR0FBYzswQkFEWixpQkFDWTs7QUFFVCxXQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzNCLGlCQUFRO0FBQ0osbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO1NBREo7QUFHQyxlQUFNO0FBQ0gsbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLG1CQUExQixDQUFQO1NBREg7QUFHRCxvQkFBWTtBQUNSLG1CQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsRUFBOUIsQ0FBUDtTQURKO0FBR0EsdUJBQWU7QUFDWCxtQkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxnQkFBYixFQUE5QixDQUFQO1NBREo7QUFHQSxzQkFBYTtBQUNULG1CQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwyQkFBMUIsQ0FBUDtTQURKO0FBR0EsNEJBQW1CO0FBQ2YsbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO1NBREo7QUFHQSxrQkFBUztBQUNMLG1CQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsS0FBakMsQ0FBMUIsQ0FBUDtTQURKO0tBbkJILEVBRlM7O0FBMEJWLFNBQUssV0FBTCxDQUFpQixLQUFqQixHQUF5QixDQUF6QixDQTFCVTs7QUE0QlYsU0FBSyxjQUFMLEdBQXNCLElBQUksR0FBSixFQUF0QixDQTVCVTtBQTZCVixTQUFLLGNBQUwsR0FBc0IsSUFBSSxHQUFKLEVBQXRCLENBN0JVOztBQStCVixTQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLEtBQW5CLEdBQTJCLE1BQTNCLENBL0JVO0FBZ0NWLFNBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsS0FBakIsR0FBeUI7QUFDckIsdUJBQWMsUUFBZDtBQUNBLHdCQUFlLFlBQWY7QUFDQSxnQkFBTyxNQUFQO0FBQ0EsZUFBTSxNQUFOO0tBSkosQ0FoQ1U7O0FBd0NWLFNBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixLQUF0QixHQUE4QjtBQUMxQixtQkFBVSxJQUFWO0tBREosQ0F4Q1U7O0FBNENWLFNBQUssZ0JBQUwsQ0FBc0IsS0FBdEIsQ0FBNEIsS0FBNUIsR0FBb0M7QUFDaEMsbUJBQVUsTUFBVjtLQURKLENBNUNVO0NBQWQ7O2tCQW1EVzs7OztBQUlmLE1BQU0sYUFBTixDQUFvQiw0QkFBcEIsRUFBa0QsZUFBbEQsRUFBa0UsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQW5FIiwiZmlsZSI6IkNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENTUyBmcm9tIFwiLi4vLi4vY29uZmlncy9DU1NcIjtcblxuY2xhc3MgQWNjb3JkaW9uQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVDaGlsZFwiOiB7Ly8gY2FuIGJlIGluZGV4IHx8IHN0cmluZyBcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkU3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVDaGlsZFN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmFjdGl2ZUNoaWxkLnN0YXRlID0gMDtcblxuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcbiAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5jaGlsZFN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleEJhc2lzOlwiMCVcIlxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hY3RpdmVDaGlsZFN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgZmxleEJhc2lzOlwiMTAwJVwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbkNvbmZpZ1xuXG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5BY2NvcmRpb25Db25maWcnLCBBY2NvcmRpb25Db25maWcsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbiJdfQ==
