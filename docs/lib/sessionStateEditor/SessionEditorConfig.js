"use strict";

var _index = require("../../../lib/index.js");

(function (module) {

    function SessionEditorConfig() {

        Object.defineProperties(this, {

            "treeConfig": {
                value: new _index.TreeConfig()
            },
            showTree: {
                value: new weavejs.core.LinkableBoolean(false)
            },
            activeNodeValue: {
                value: new weavejs.core.LinkableVariable()
            },
            modalConfig: {
                value: new _index.ModalConfig()
            }

        });

        this.dataTypesMap = {
            "weavejs.core.LinkableString": "S",
            "weavejs.core.LinkableNumber": "N",
            "weavejs.core.LinkableBoolean": "B",
            "weavejs.data.source.WeaveDataSource": "fa fa-database"

        };
    }

    var p = SessionEditorConfig.prototype;
    p.getDataType = function (treeItem) {
        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
    };

    module.exports = SessionEditorConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlc3Npb25FZGl0b3JDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUlmLGFBQVMsbUJBQVQsR0FBK0I7O0FBRTNCLGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7O0FBRTFCLDBCQUFjO0FBQ1YsdUJBQU8sdUJBQVA7YUFESjtBQUdBLHNCQUFVO0FBQ04sdUJBQU8sSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLEtBQWpDLENBQVA7YUFESjtBQUdBLDZCQUFpQjtBQUNiLHVCQUFPLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBWDthQURKO0FBR0EseUJBQWE7QUFDVCx1QkFBTyx3QkFBUDthQURKOztTQVhKLEVBRjJCOztBQW1CM0IsYUFBSyxZQUFMLEdBQW9CO0FBQ2hCLDJDQUErQixHQUEvQjtBQUNBLDJDQUErQixHQUEvQjtBQUNBLDRDQUFnQyxHQUFoQztBQUNBLG1EQUF1QyxnQkFBdkM7O1NBSkosQ0FuQjJCO0tBQS9COztBQWdDQSxRQUFJLElBQUksb0JBQW9CLFNBQXBCLENBcENPO0FBcUNmLE1BQUUsV0FBRixHQUFnQixVQUFVLFFBQVYsRUFBb0I7QUFDaEMsZUFBTyxTQUFTLElBQVQsQ0FBYyxpQkFBZCxDQUFnQyxLQUFoQyxDQUFzQyxDQUF0QyxFQUF5QyxLQUF6QyxDQUR5QjtLQUFwQixDQXJDRDs7QUEyQ2YsV0FBTyxPQUFQLEdBQWlCLG1CQUFqQixDQTNDZTtDQUFsQixFQTZDQyxNQTdDRCxDQUFEIiwiZmlsZSI6IlNlc3Npb25FZGl0b3JDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyZWVDb25maWd9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7TW9kYWxDb25maWd9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuXG4gICAgZnVuY3Rpb24gU2Vzc2lvbkVkaXRvckNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgIFwidHJlZUNvbmZpZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBUcmVlQ29uZmlnKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93VHJlZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVOb2RlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbENvbmZpZzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgTW9kYWxDb25maWcoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IHtcbiAgICAgICAgICAgIFwid2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nXCI6IFwiU1wiLFxuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXJcIjogXCJOXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW5cIjogXCJCXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuZGF0YS5zb3VyY2UuV2VhdmVEYXRhU291cmNlXCI6IFwiZmEgZmEtZGF0YWJhc2VcIlxuXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuICAgIHZhciBwID0gU2Vzc2lvbkVkaXRvckNvbmZpZy5wcm90b3R5cGU7XG4gICAgcC5nZXREYXRhVHlwZSA9IGZ1bmN0aW9uICh0cmVlSXRlbSkge1xuICAgICAgICByZXR1cm4gdHJlZUl0ZW0uZGF0YS5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICB9XG5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTZXNzaW9uRWRpdG9yQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
