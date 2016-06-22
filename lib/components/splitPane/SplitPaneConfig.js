"use strict";

var _PaneConfig = require("./PaneConfig");

var _PaneConfig2 = _interopRequireDefault(_PaneConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function SplitPaneConfig() {

        Object.defineProperties(this, {
            "active": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "resized": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "position": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "pane1": {
                value: Weave.linkableChild(this, new _PaneConfig2.default())
            },
            "pane2": {
                value: Weave.linkableChild(this, new _PaneConfig2.default())
            },
            "unFocusCount": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(0))
            }

        });
    }

    var p = SplitPaneConfig.prototype;

    p.updateUnFocus = function () {
        this.unFocusCount.value = this.unFocusCount.value + 1;
    };

    //This Function makes this class as SessionClass
    Weave.registerClass(SplitPaneConfig, ['weavereact.SplitPaneConfig'], [weavejs.api.core.ILinkableObject], "Split Pane Config");

    module.exports = SplitPaneConfig;
})(module); /*import Weave from 'Weave';
            import weavejs from 'weavejs';*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwbGl0UGFuZUNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUVmLGFBQVMsZUFBVCxHQUEyQjs7QUFFdkIsZUFBTyxnQkFBUCxDQUF3QixJQUF4QixFQUE4QjtBQUMxQixzQkFBVTtBQUNOLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBNkIsS0FBakMsQ0FBMUIsQ0FBUDthQURKO0FBR0EsdUJBQVc7QUFDUCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLEtBQWpDLENBQTFCLENBQVA7YUFESjtBQUdBLHdCQUFZO0FBQ1IsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixFQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSxxQkFBUztBQUNMLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQiwwQkFBMUIsQ0FBUDthQURKO0FBR0EscUJBQVM7QUFDTCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsMEJBQTFCLENBQVA7YUFESjtBQUdBLDRCQUFnQjtBQUNaLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsQ0FBaEMsQ0FBMUIsQ0FBUDthQURKOztTQWhCSixFQUZ1QjtLQUEzQjs7QUE0QkEsUUFBSSxJQUFJLGdCQUFnQixTQUFoQixDQTlCTzs7QUFnQ2YsTUFBRSxhQUFGLEdBQWtCLFlBQVk7QUFDMUIsYUFBSyxZQUFMLENBQWtCLEtBQWxCLEdBQTBCLEtBQUssWUFBTCxDQUFrQixLQUFsQixHQUEwQixDQUExQixDQURBO0tBQVo7OztBQWhDSCxTQXdDZixDQUFNLGFBQU4sQ0FBcUIsZUFBckIsRUFBcUMsQ0FBQyw0QkFBRCxDQUFyQyxFQUFvRSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBckUsRUFBdUcsbUJBQXZHLEVBeENlOztBQTBDZixXQUFPLE9BQVAsR0FBaUIsZUFBakIsQ0ExQ2U7Q0FBbEIsRUE0Q0MsTUE1Q0QsQ0FBRCIsImZpbGUiOiJTcGxpdFBhbmVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuaW1wb3J0IFBhbmVDb25maWcgZnJvbSBcIi4vUGFuZUNvbmZpZ1wiO1xuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gU3BsaXRQYW5lQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXNpemVkXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBhbmUxXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgUGFuZUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicGFuZTJcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBQYW5lQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1bkZvY3VzQ291bnRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoMCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG4gICAgdmFyIHAgPSBTcGxpdFBhbmVDb25maWcucHJvdG90eXBlO1xuXG4gICAgcC51cGRhdGVVbkZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuRm9jdXNDb3VudC52YWx1ZSA9IHRoaXMudW5Gb2N1c0NvdW50LnZhbHVlICsgMTtcbiAgICB9XG5cblxuXG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCBTcGxpdFBhbmVDb25maWcsWyd3ZWF2ZXJlYWN0LlNwbGl0UGFuZUNvbmZpZyddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJTcGxpdCBQYW5lIENvbmZpZ1wiKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gU3BsaXRQYW5lQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19