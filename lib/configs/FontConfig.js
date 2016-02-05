"use strict";

var _App = require("../utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function FontConfig() {

        Object.defineProperties(this, {
            "fontFamily": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('Helvetica'))
            },
            "fontStyle": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('normal'))
            },
            "fontWeight": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('normal'))
            },
            "fontVariant": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('normal'))
            },
            "fontSize": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('100%'))
            }
        });
    }

    var p = FontConfig.prototype;

    p.getFontStateFor = function (properties) {
        if (!properties) properties = ["fontFamily", "fontStyle", "fontWeight", "fontVariant", "fontSize"];
        return _App2.default.getStateFor(this, properties);
    };

    Weave.registerClass('weavereact.FontConfig', FontConfig);

    module.exports = FontConfig;
})(module); /*import Weave from 'Weave';
            import weavejs from 'weavejs';*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvbnRDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFFZixhQUFTLFVBQVQsR0FBc0I7O0FBRWxCLGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDMUIsMEJBQWM7QUFDVix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLFdBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLHlCQUFhO0FBQ1QsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixRQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSwwQkFBYztBQUNWLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsUUFBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0EsMkJBQWU7QUFDWCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLFFBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLHdCQUFZO0FBQ1IsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixNQUFoQyxDQUExQixDQUFQO2FBREo7U0FiSixFQUZrQjtLQUF0Qjs7QUFzQkEsUUFBSSxJQUFJLFdBQVcsU0FBWCxDQXhCTzs7QUEyQmYsTUFBRSxlQUFGLEdBQW9CLFVBQVUsVUFBVixFQUFzQjtBQUN0QyxZQUFJLENBQUMsVUFBRCxFQUFhLGFBQWEsQ0FBQyxZQUFELEVBQWUsV0FBZixFQUE0QixZQUE1QixFQUEwQyxhQUExQyxFQUF5RCxVQUF6RCxDQUFiLENBQWpCO0FBQ0EsZUFBTyxjQUFJLFdBQUosQ0FBZ0IsSUFBaEIsRUFBc0IsVUFBdEIsQ0FBUCxDQUZzQztLQUF0QixDQTNCTDs7QUFnQ2YsVUFBTSxhQUFOLENBQW9CLHVCQUFwQixFQUE2QyxVQUE3QyxFQWhDZTs7QUFrQ2YsV0FBTyxPQUFQLEdBQWlCLFVBQWpCLENBbENlO0NBQWxCLEVBb0NDLE1BcENELENBQUQiLCJmaWxlIjoiRm9udENvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFdlYXZlIGZyb20gJ1dlYXZlJztcbmltcG9ydCB3ZWF2ZWpzIGZyb20gJ3dlYXZlanMnOyovXG5pbXBvcnQgQXBwIGZyb20gXCIuLi91dGlscy9BcHBcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIEZvbnRDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJmb250RmFtaWx5XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCdIZWx2ZXRpY2EnKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZvbnRTdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZygnbm9ybWFsJykpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmb250V2VpZ2h0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCdub3JtYWwnKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZvbnRWYXJpYW50XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCdub3JtYWwnKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZvbnRTaXplXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCcxMDAlJykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdmFyIHAgPSBGb250Q29uZmlnLnByb3RvdHlwZTtcblxuXG4gICAgcC5nZXRGb250U3RhdGVGb3IgPSBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgICBpZiAoIXByb3BlcnRpZXMpIHByb3BlcnRpZXMgPSBbXCJmb250RmFtaWx5XCIsIFwiZm9udFN0eWxlXCIsIFwiZm9udFdlaWdodFwiLCBcImZvbnRWYXJpYW50XCIsIFwiZm9udFNpemVcIl07XG4gICAgICAgIHJldHVybiBBcHAuZ2V0U3RhdGVGb3IodGhpcywgcHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Gb250Q29uZmlnJywgRm9udENvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IEZvbnRDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
