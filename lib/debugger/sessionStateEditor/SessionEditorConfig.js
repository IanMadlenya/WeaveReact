"use strict";

var _ModalConfig = require("../../components/modal/ModalConfig");

var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

var _TreeConfig = require("../../components/tree/TreeConfig");

var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function SessionEditorConfig() {

        Object.defineProperties(this, {

            "treeConfig": {
                value: new _TreeConfig2.default()
            },
            showTree: {
                value: new weavejs.core.LinkableBoolean(false)
            },
            activeNodeValue: {
                value: new weavejs.core.LinkableVariable()
            },
            modalConfig: {
                value: new _ModalConfig2.default()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlc3Npb25FZGl0b3JDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR0EsQ0FBQyxVQUFVLE1BQVYsRUFBa0I7O0FBSWYsYUFBUyxtQkFBVCxHQUErQjs7QUFFM0IsZUFBTyxnQkFBUCxDQUF3QixJQUF4QixFQUE4Qjs7QUFFMUIsMEJBQWM7QUFDVix1QkFBTywwQkFBUDthQURKO0FBR0Esc0JBQVU7QUFDTix1QkFBTyxJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsS0FBakMsQ0FBUDthQURKO0FBR0EsNkJBQWlCO0FBQ2IsdUJBQU8sSUFBSSxRQUFRLElBQVIsQ0FBYSxnQkFBYixFQUFYO2FBREo7QUFHQSx5QkFBYTtBQUNULHVCQUFPLDJCQUFQO2FBREo7O1NBWEosRUFGMkI7O0FBbUIzQixhQUFLLFlBQUwsR0FBb0I7QUFDaEIsMkNBQStCLEdBQS9CO0FBQ0EsMkNBQStCLEdBQS9CO0FBQ0EsNENBQWdDLEdBQWhDO0FBQ0EsbURBQXVDLGdCQUF2Qzs7U0FKSixDQW5CMkI7S0FBL0I7O0FBZ0NBLFFBQUksSUFBSSxvQkFBb0IsU0FBcEIsQ0FwQ087QUFxQ2YsTUFBRSxXQUFGLEdBQWdCLFVBQVUsUUFBVixFQUFvQjtBQUNoQyxlQUFPLFNBQVMsSUFBVCxDQUFjLGlCQUFkLENBQWdDLEtBQWhDLENBQXNDLENBQXRDLEVBQXlDLEtBQXpDLENBRHlCO0tBQXBCLENBckNEOztBQTJDZixXQUFPLE9BQVAsR0FBaUIsbUJBQWpCLENBM0NlO0NBQWxCLEVBNkNDLE1BN0NELENBQUQiLCJmaWxlIjoiU2Vzc2lvbkVkaXRvckNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE1vZGFsQ29uZmlnIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZGFsL01vZGFsQ29uZmlnXCI7XG5pbXBvcnQgVHJlZUNvbmZpZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90cmVlL1RyZWVDb25maWdcIjtcbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuXG4gICAgZnVuY3Rpb24gU2Vzc2lvbkVkaXRvckNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgIFwidHJlZUNvbmZpZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBUcmVlQ29uZmlnKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93VHJlZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVOb2RlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbENvbmZpZzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgTW9kYWxDb25maWcoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IHtcbiAgICAgICAgICAgIFwid2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nXCI6IFwiU1wiLFxuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXJcIjogXCJOXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW5cIjogXCJCXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuZGF0YS5zb3VyY2UuV2VhdmVEYXRhU291cmNlXCI6IFwiZmEgZmEtZGF0YWJhc2VcIlxuXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuICAgIHZhciBwID0gU2Vzc2lvbkVkaXRvckNvbmZpZy5wcm90b3R5cGU7XG4gICAgcC5nZXREYXRhVHlwZSA9IGZ1bmN0aW9uICh0cmVlSXRlbSkge1xuICAgICAgICByZXR1cm4gdHJlZUl0ZW0uZGF0YS5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICB9XG5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTZXNzaW9uRWRpdG9yQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19