"use strict";

var _App = require("../utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function BorderConfig() {

        Object.defineProperties(this, {
            "borderColor": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('#bebebe'))
            },
            "borderWidth": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('1px'))
            },
            "borderRadius": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('5px'))
            },
            "borderStyle": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString('solid'))
            }
        });
    }

    var p = BorderConfig.prototype;

    p.getBorderStateFor = function (properties) {
        if (!properties) properties = ["borderColor", "borderWidth", "borderRadius", "borderStyle"];
        return _App2.default.getStateFor(this, properties);
    };

    Weave.registerClass('weavereact.BorderConfig', BorderConfig);

    module.exports = BorderConfig;
})(module); /*import Weave from 'Weave';
            import weavejs from 'weavejs';*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJvcmRlckNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUVmLGFBQVMsWUFBVCxHQUF3Qjs7QUFFcEIsZUFBTyxnQkFBUCxDQUF3QixJQUF4QixFQUE4QjtBQUMxQiwyQkFBZTtBQUNYLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsU0FBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0EsMkJBQWU7QUFDWCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEtBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLDRCQUFnQjtBQUNaLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsS0FBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0EsMkJBQWU7QUFDWCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLE9BQWhDLENBQTFCLENBQVA7YUFESjtTQVZKLEVBRm9CO0tBQXhCOztBQW1CQSxRQUFJLElBQUksYUFBYSxTQUFiLENBckJPOztBQXdCZixNQUFFLGlCQUFGLEdBQXNCLFVBQVUsVUFBVixFQUFzQjtBQUN4QyxZQUFJLENBQUMsVUFBRCxFQUFhLGFBQWEsQ0FBQyxhQUFELEVBQWdCLGFBQWhCLEVBQStCLGNBQS9CLEVBQStDLGFBQS9DLENBQWIsQ0FBakI7QUFDQSxlQUFPLGNBQUksV0FBSixDQUFnQixJQUFoQixFQUFzQixVQUF0QixDQUFQLENBRndDO0tBQXRCLENBeEJQOztBQTZCZixVQUFNLGFBQU4sQ0FBb0IseUJBQXBCLEVBQStDLFlBQS9DLEVBN0JlOztBQStCZixXQUFPLE9BQVAsR0FBaUIsWUFBakIsQ0EvQmU7Q0FBbEIsRUFrQ0MsTUFsQ0QsQ0FBRCIsImZpbGUiOiJCb3JkZXJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vdXRpbHMvQXBwXCI7XG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBCb3JkZXJDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJib3JkZXJDb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZygnI2JlYmViZScpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYm9yZGVyV2lkdGhcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoJzFweCcpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYm9yZGVyUmFkaXVzXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCc1cHgnKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJvcmRlclN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCdzb2xpZCcpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHZhciBwID0gQm9yZGVyQ29uZmlnLnByb3RvdHlwZTtcblxuXG4gICAgcC5nZXRCb3JkZXJTdGF0ZUZvciA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmICghcHJvcGVydGllcykgcHJvcGVydGllcyA9IFtcImJvcmRlckNvbG9yXCIsIFwiYm9yZGVyV2lkdGhcIiwgXCJib3JkZXJSYWRpdXNcIiwgXCJib3JkZXJTdHlsZVwiXTtcbiAgICAgICAgcmV0dXJuIEFwcC5nZXRTdGF0ZUZvcih0aGlzLCBwcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LkJvcmRlckNvbmZpZycsIEJvcmRlckNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IEJvcmRlckNvbmZpZztcblxuXG59KG1vZHVsZSkpO1xuIl19
