"use strict";

var _BorderConfig = require("../../configs/BorderConfig");

var _BorderConfig2 = _interopRequireDefault(_BorderConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function ModalPanelConfig() {

        Object.defineProperties(this, {
            "border": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableDynamicObject(_BorderConfig2.default))
            },
            "title": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }

        });

        Object.defineProperties(this, {
            "width": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("60%"))
            },
            "height": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("80%"))
            },
            "marginLeft": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("-20%"))
            },
            "marginTop": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("-20%"))
            },
            "left": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
            },
            "top": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
            }

        });
    }

    var p = ModalPanelConfig.prototype;

    p.getLayoutState = function () {
        return {
            "top": this.top.value,
            "left": this.left.value,
            "marginTop": this.marginTop.value,
            "marginLeft": this.marginLeft.value,
            "width": this.width.value,
            "height": this.height.value
        };
    };

    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.ModalPanelConfig', ModalPanelConfig);

    module.exports = ModalPanelConfig;
})(module); /*import Weave from 'Weave';
            import weavejs from 'weavejs';*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsUGFuZWxDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFFZixhQUFTLGdCQUFULEdBQTRCOztBQUV4QixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLHNCQUFVO0FBQ04sdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEscUJBQWIsdUJBQUosQ0FBMUIsQ0FBUDthQURKO0FBR0EscUJBQVM7QUFDTCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEVBQWhDLENBQTFCLENBQVA7YUFESjs7U0FKSixFQUZ3Qjs7QUFZeEIsZUFBTyxnQkFBUCxDQUF3QixJQUF4QixFQUE4QjtBQUMxQixxQkFBUztBQUNMLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsS0FBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0Esc0JBQVU7QUFDTix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEtBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLDBCQUFjO0FBQ1YsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixNQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSx5QkFBYTtBQUNULHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsTUFBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0Esb0JBQVE7QUFDSix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEtBQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLG1CQUFPO0FBQ0gsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixLQUFoQyxDQUExQixDQUFQO2FBREo7O1NBaEJKLEVBWndCO0tBQTVCOztBQXFDQSxRQUFJLElBQUksaUJBQWlCLFNBQWpCLENBdkNPOztBQXlDZixNQUFFLGNBQUYsR0FBbUIsWUFBWTtBQUMzQixlQUFPO0FBQ0gsbUJBQU8sS0FBSyxHQUFMLENBQVMsS0FBVDtBQUNQLG9CQUFRLEtBQUssSUFBTCxDQUFVLEtBQVY7QUFDUix5QkFBYSxLQUFLLFNBQUwsQ0FBZSxLQUFmO0FBQ2IsMEJBQWMsS0FBSyxVQUFMLENBQWdCLEtBQWhCO0FBQ2QscUJBQVMsS0FBSyxLQUFMLENBQVcsS0FBWDtBQUNULHNCQUFVLEtBQUssTUFBTCxDQUFZLEtBQVo7U0FOZCxDQUQyQjtLQUFaOzs7QUF6Q0osU0FxRGYsQ0FBTSxhQUFOLENBQW9CLDZCQUFwQixFQUFtRCxnQkFBbkQsRUFyRGU7O0FBdURmLFdBQU8sT0FBUCxHQUFpQixnQkFBakIsQ0F2RGU7Q0FBbEIsRUF5REMsTUF6REQsQ0FBRCIsImZpbGUiOiJNb2RhbFBhbmVsQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyppbXBvcnQgV2VhdmUgZnJvbSAnV2VhdmUnO1xuaW1wb3J0IHdlYXZlanMgZnJvbSAnd2VhdmVqcyc7Ki9cbmltcG9ydCBCb3JkZXJDb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvQm9yZGVyQ29uZmlnXCI7XG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBNb2RhbFBhbmVsQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiYm9yZGVyXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlRHluYW1pY09iamVjdChCb3JkZXJDb25maWcpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJ3aWR0aFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjYwJVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImhlaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjgwJVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCItMjAlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiLTIwJVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxlZnRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCI0MCVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0b3BcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCI0MCVcIikpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIHZhciBwID0gTW9kYWxQYW5lbENvbmZpZy5wcm90b3R5cGU7XG5cbiAgICBwLmdldExheW91dFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJ0b3BcIjogdGhpcy50b3AudmFsdWUsXG4gICAgICAgICAgICBcImxlZnRcIjogdGhpcy5sZWZ0LnZhbHVlLFxuICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogdGhpcy5tYXJnaW5Ub3AudmFsdWUsXG4gICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjogdGhpcy5tYXJnaW5MZWZ0LnZhbHVlLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiB0aGlzLndpZHRoLnZhbHVlLFxuICAgICAgICAgICAgXCJoZWlnaHRcIjogdGhpcy5oZWlnaHQudmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuTW9kYWxQYW5lbENvbmZpZycsIE1vZGFsUGFuZWxDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBNb2RhbFBhbmVsQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
