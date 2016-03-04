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
Weave.registerClass('weavereact.tabsConfig.Tabs', tabsConfig.Tabs, [weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.tabsConfig.Tab', tabsConfig.Tab, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU0sYUFDRixTQURFLFVBQ0YsR0FBYzswQkFEWixZQUNZOztBQUVWLFdBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDMUIsaUJBQVE7QUFDSixtQkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMkJBQTFCLENBQVA7U0FESjtBQUdBLGVBQU07QUFDRixtQkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsbUJBQTFCLENBQVA7U0FESjtBQUdBLHFCQUFZO0FBQ1IsbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixFQUFoQyxDQUExQixDQUFQO1NBREo7S0FQSjs7OztBQUZVLENBQWQ7O0lBbUJFLFlBQ0YsU0FERSxTQUNGLEdBQWM7MEJBRFosV0FDWTs7QUFDVixXQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLGlCQUFRO0FBQ0osbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLDJCQUExQixDQUFQO1NBREo7QUFHQSxlQUFNO0FBQ0YsbUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLG1CQUExQixDQUFQO1NBREo7QUFHQSxpQkFBUTtBQUNKLG1CQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsRUFBaEMsQ0FBMUIsQ0FBUDtTQURKO0tBUEo7Ozs7QUFEVSxDQUFkOztBQW1CSixJQUFNLGFBQWEsRUFBYjtrQkFDUzs7O0FBRWYsV0FBVyxJQUFYLEdBQWtCLFVBQWxCO0FBQ0EsV0FBVyxHQUFYLEdBQWlCLFNBQWpCOzs7QUFHQSxNQUFNLGFBQU4sQ0FBb0IsNEJBQXBCLEVBQWtELFdBQVcsSUFBWCxFQUFnQixDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBbkU7QUFDQSxNQUFNLGFBQU4sQ0FBb0IsMkJBQXBCLEVBQWlELFdBQVcsR0FBWCxFQUFlLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRSIsImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcbmltcG9ydCBDU1MgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvQ1NTXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5cbmNsYXNzIFRhYnNDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlVGFiXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRvLWRvOiBTZXQgQm9vdHN0cmFwIENTUyBuYW1lcyBmb3IgVGFic1xuICAgICAgICAvLyB0by1kbzogc2V0IHJlc3BlY3RpdmUgQ1NTIC0gU3R5bGUgaW4gRmxleGJveFxuICAgIH1cbn1cblxuY2xhc3MgVGFiQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgQ1NTKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0aXRsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0by1kbzogU2V0IEJvb3RzdHJhcCBDU1MgbmFtZXMgZm9yIFRhYnNcbiAgICAgICAgLy8gdG8tZG86IHNldCByZXNwZWN0aXZlIENTUyAtIFN0eWxlIGluIEZsZXhib3hcbiAgICB9XG59XG5cblxuY29uc3QgdGFic0NvbmZpZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgdGFic0NvbmZpZ1xuXG50YWJzQ29uZmlnLlRhYnMgPSBUYWJzQ29uZmlnO1xudGFic0NvbmZpZy5UYWIgPSBUYWJDb25maWc7XG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC50YWJzQ29uZmlnLlRhYnMnLCB0YWJzQ29uZmlnLlRhYnMsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LnRhYnNDb25maWcuVGFiJywgdGFic0NvbmZpZy5UYWIsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG4iXX0=
