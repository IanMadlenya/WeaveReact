"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _InlineStyle = require("../../configs/InlineStyle");

var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

var _CSS = require("../../configs/CSS");

var _CSS2 = _interopRequireDefault(_CSS);

var _Style = require("../../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TabsConfig = function TabsConfig() {
    _classCallCheck(this, TabsConfig);

    Object.defineProperties(this, {
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        },
        "CSS": {
            value: Weave.linkableChild(this, new _CSS2.default())
        },
        "activeTab": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        }
    });

    // to-do: Set Bootstrap CSS names for Tabs
    // to-do: set respective CSS - Style in Flexbox
};

var TabConfig = function TabConfig() {
    _classCallCheck(this, TabConfig);

    Object.defineProperties(this, {
        "style": {
            value: Weave.linkableChild(this, new _InlineStyle2.default())
        },
        "CSS": {
            value: Weave.linkableChild(this, new _CSS2.default())
        },
        "title": {
            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
        }
    });

    // to-do: Set Bootstrap CSS names for Tabs
    // to-do: set respective CSS - Style in Flexbox
};

var tabsConfig = {};
exports.default = tabsConfig;


tabsConfig.Tabs = TabsConfig;
tabsConfig.Tab = TabConfig;

//This Function makes this class as SessionClass
Weave.registerClass(tabsConfig.Tabs, ['weavereact.tabsConfig.Tabs'], [weavejs.api.core.ILinkableObject], "Tabs Config");
Weave.registerClass(tabsConfig.Tab, ['weavereact.tabsConfig.Tab'], [weavejs.api.core.ILinkableObject], "Tab Config");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU0sYUFDRixTQURFLFVBQ0YsR0FBYzswQkFEWixZQUNZOztBQUVWLFdBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDMUIsaUJBQVE7QUFDSixtQkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7U0FESjtBQUdBLGVBQU07QUFDRixtQkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsbUJBQTFCLENBQVA7U0FESjtBQUdBLHFCQUFZO0FBQ1IsbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixFQUFoQyxDQUExQixDQUFQO1NBREo7S0FQSjs7OztBQUZVLENBQWQ7O0lBbUJFLFlBQ0YsU0FERSxTQUNGLEdBQWM7MEJBRFosV0FDWTs7QUFDVixXQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLGlCQUFRO0FBQ0osbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO1NBREo7QUFHQSxlQUFNO0FBQ0YsbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLG1CQUExQixDQUFQO1NBREo7QUFHQSxpQkFBUTtBQUNKLG1CQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsRUFBaEMsQ0FBMUIsQ0FBUDtTQURKO0tBUEo7Ozs7QUFEVSxDQUFkOztBQW1CSixJQUFNLGFBQWEsRUFBYjtrQkFDUzs7O0FBRWYsV0FBVyxJQUFYLEdBQWtCLFVBQWxCO0FBQ0EsV0FBVyxHQUFYLEdBQWlCLFNBQWpCOzs7QUFHQSxNQUFNLGFBQU4sQ0FBcUIsV0FBVyxJQUFYLEVBQWdCLENBQUMsNEJBQUQsQ0FBckMsRUFBb0UsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXJFLEVBQXVHLGFBQXZHO0FBQ0EsTUFBTSxhQUFOLENBQXFCLFdBQVcsR0FBWCxFQUFlLENBQUMsMkJBQUQsQ0FBcEMsRUFBa0UsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQW5FLEVBQXFHLFlBQXJHIiwiZmlsZSI6IkNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENTUyBmcm9tIFwiLi4vLi4vY29uZmlncy9DU1NcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcblxuY2xhc3MgVGFic0NvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgQ1NTKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3RpdmVUYWJcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdG8tZG86IFNldCBCb290c3RyYXAgQ1NTIG5hbWVzIGZvciBUYWJzXG4gICAgICAgIC8vIHRvLWRvOiBzZXQgcmVzcGVjdGl2ZSBDU1MgLSBTdHlsZSBpbiBGbGV4Ym94XG4gICAgfVxufVxuXG5jbGFzcyBUYWJDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRpdGxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRvLWRvOiBTZXQgQm9vdHN0cmFwIENTUyBuYW1lcyBmb3IgVGFic1xuICAgICAgICAvLyB0by1kbzogc2V0IHJlc3BlY3RpdmUgQ1NTIC0gU3R5bGUgaW4gRmxleGJveFxuICAgIH1cbn1cblxuXG5jb25zdCB0YWJzQ29uZmlnID0ge307XG5leHBvcnQgZGVmYXVsdCB0YWJzQ29uZmlnXG5cbnRhYnNDb25maWcuVGFicyA9IFRhYnNDb25maWc7XG50YWJzQ29uZmlnLlRhYiA9IFRhYkNvbmZpZztcblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCB0YWJzQ29uZmlnLlRhYnMsWyd3ZWF2ZXJlYWN0LnRhYnNDb25maWcuVGFicyddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJUYWJzIENvbmZpZ1wiKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoIHRhYnNDb25maWcuVGFiLFsnd2VhdmVyZWFjdC50YWJzQ29uZmlnLlRhYiddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJUYWIgQ29uZmlnXCIpO1xuIl19