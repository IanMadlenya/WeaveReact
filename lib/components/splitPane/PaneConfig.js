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
    Weave.registerClass('weavereact.PaneConfig', PaneConfig);

    module.exports = PaneConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUVmLGFBQVMsVUFBVCxHQUFzQjs7QUFFbEIsZUFBTyxnQkFBUCxDQUF3QixJQUF4QixFQUE4Qjs7QUFFMUIsb0JBQVE7QUFDSix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEVBQWhDLENBQTFCLENBQVA7YUFESjs7U0FGSixFQUZrQjtLQUF0Qjs7O0FBRmUsU0FrQmYsQ0FBTSxhQUFOLENBQW9CLHVCQUFwQixFQUE2QyxVQUE3QyxFQWxCZTs7QUFvQmYsV0FBTyxPQUFQLEdBQWlCLFVBQWpCLENBcEJlO0NBQWxCLEVBc0JDLE1BdEJELENBQUQiLCJmaWxlIjoiUGFuZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFdlYXZlIGZyb20gJ1dlYXZlJztcbmltcG9ydCB3ZWF2ZWpzIGZyb20gJ3dlYXZlanMnOyovXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gUGFuZUNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgIFwic2l6ZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuUGFuZUNvbmZpZycsIFBhbmVDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBQYW5lQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
