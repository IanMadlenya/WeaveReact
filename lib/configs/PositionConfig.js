"use strict";

var _App = require("../utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function PositionConfig() {

        Object.defineProperties(this, {
            "paddingLeft": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("4px"))
            },
            "paddingRight": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("4px"))
            },
            "paddingTop": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("4px"))
            },
            "paddingBottom": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("4px"))
            },
            "marginLeft": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "marginRight": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "marginTop": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "marginBottom": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }
        });
    }

    var p = PositionConfig.prototype;

    p.getPositionStateFor = function (properties) {
        if (!properties) properties = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"];
        return _App2.default.getStateFor(this, properties);
    };

    Weave.registerClass('weavereact.PositionConfig', PositionConfig);

    module.exports = PositionConfig;
})(module); /*import Weave from 'Weave';
            import weavejs from 'weavejs';*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvc2l0aW9uQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsQ0FBQyxVQUFVLE1BQVYsRUFBa0I7O0FBRWYsYUFBUyxjQUFULEdBQTBCOztBQUV0QixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLDJCQUFlO0FBQ1gsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixLQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSw0QkFBZ0I7QUFDWix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEtBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLDBCQUFjO0FBQ1YsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixLQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSw2QkFBaUI7QUFDYix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEtBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLDBCQUFjO0FBQ1YsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixFQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSwyQkFBZTtBQUNYLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsRUFBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0EseUJBQWE7QUFDVCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEVBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLDRCQUFnQjtBQUNaLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsRUFBaEMsQ0FBMUIsQ0FBUDthQURKO1NBdEJKLEVBRnNCO0tBQTFCOztBQStCQSxRQUFJLElBQUksZUFBZSxTQUFmLENBakNPOztBQW9DZixNQUFFLG1CQUFGLEdBQXdCLFVBQVUsVUFBVixFQUFzQjtBQUMxQyxZQUFJLENBQUMsVUFBRCxFQUFhLGFBQWEsQ0FBQyxhQUFELEVBQWdCLGNBQWhCLEVBQWdDLFlBQWhDLEVBQThDLGVBQTlDLEVBQStELFlBQS9ELEVBQTZFLGFBQTdFLEVBQTRGLFdBQTVGLEVBQXlHLGNBQXpHLENBQWIsQ0FBakI7QUFDQSxlQUFPLGNBQUksV0FBSixDQUFnQixJQUFoQixFQUFzQixVQUF0QixDQUFQLENBRjBDO0tBQXRCLENBcENUOztBQXlDZixVQUFNLGFBQU4sQ0FBb0IsMkJBQXBCLEVBQWlELGNBQWpELEVBekNlOztBQTJDZixXQUFPLE9BQVAsR0FBaUIsY0FBakIsQ0EzQ2U7Q0FBbEIsRUE4Q0MsTUE5Q0QsQ0FBRCIsImZpbGUiOiJQb3NpdGlvbkNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFdlYXZlIGZyb20gJ1dlYXZlJztcbmltcG9ydCB3ZWF2ZWpzIGZyb20gJ3dlYXZlanMnOyovXG5pbXBvcnQgQXBwIGZyb20gXCIuLi91dGlscy9BcHBcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFBvc2l0aW9uQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwicGFkZGluZ0xlZnRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCI0cHhcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwYWRkaW5nUmlnaHRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCI0cHhcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwYWRkaW5nVG9wXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiNHB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicGFkZGluZ0JvdHRvbVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjRweFwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtYXJnaW5SaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1hcmdpblRvcFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1hcmdpbkJvdHRvbVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICB2YXIgcCA9IFBvc2l0aW9uQ29uZmlnLnByb3RvdHlwZTtcblxuXG4gICAgcC5nZXRQb3NpdGlvblN0YXRlRm9yID0gZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKCFwcm9wZXJ0aWVzKSBwcm9wZXJ0aWVzID0gW1wicGFkZGluZ0xlZnRcIiwgXCJwYWRkaW5nUmlnaHRcIiwgXCJwYWRkaW5nVG9wXCIsIFwicGFkZGluZ0JvdHRvbVwiLCBcIm1hcmdpbkxlZnRcIiwgXCJtYXJnaW5SaWdodFwiLCBcIm1hcmdpblRvcFwiLCBcIm1hcmdpbkJvdHRvbVwiXTtcbiAgICAgICAgcmV0dXJuIEFwcC5nZXRTdGF0ZUZvcih0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LlBvc2l0aW9uQ29uZmlnJywgUG9zaXRpb25Db25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvbkNvbmZpZztcblxuXG59KG1vZHVsZSkpO1xuIl19
