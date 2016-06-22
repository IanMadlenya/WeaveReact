"use strict";

/*import Weave from 'Weave';
import weavejs from 'weavejs';*/
(function (module) {

    function PaneConfig() {

        Object.defineProperties(this, {

            "size": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }

        });
    }

    //This Function makes this class as SessionClass
    Weave.registerClass(PaneConfig, ['weavereact.PaneConfig'], [weavejs.api.core.ILinkableObject], "Pane Config");

    module.exports = PaneConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUVmLGFBQVMsVUFBVCxHQUFzQjs7QUFFbEIsZUFBTyxnQkFBUCxDQUF3QixJQUF4QixFQUE4Qjs7QUFFMUIsb0JBQVE7QUFDSix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEVBQWhDLENBQTFCLENBQVA7YUFESjs7U0FGSixFQUZrQjtLQUF0Qjs7O0FBRmUsU0FrQmYsQ0FBTSxhQUFOLENBQXFCLFVBQXJCLEVBQWdDLENBQUMsdUJBQUQsQ0FBaEMsRUFBMEQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTNELEVBQTZGLGFBQTdGLEVBbEJlOztBQW9CZixXQUFPLE9BQVAsR0FBaUIsVUFBakIsQ0FwQmU7Q0FBbEIsRUFzQkMsTUF0QkQsQ0FBRCIsImZpbGUiOiJQYW5lQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyppbXBvcnQgV2VhdmUgZnJvbSAnV2VhdmUnO1xuaW1wb3J0IHdlYXZlanMgZnJvbSAnd2VhdmVqcyc7Ki9cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBQYW5lQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcblxuICAgICAgICAgICAgXCJzaXplXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcyggUGFuZUNvbmZpZyxbJ3dlYXZlcmVhY3QuUGFuZUNvbmZpZyddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJQYW5lIENvbmZpZ1wiKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gUGFuZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==