"use strict";

(function (module) {

    function ModalPanelConfig() {

        Object.defineProperties(this, {

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
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("0"))
            },
            "left": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
            },
            "top": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20%"))
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
    Weave.registerClass(ModalPanelConfig, ['weavereact.ModalPanelConfig'], [weavejs.api.core.ILinkableObject], "Modal Panel Config");

    module.exports = ModalPanelConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsUGFuZWxDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFFZixhQUFTLGdCQUFULEdBQTRCOztBQUV4QixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCOztBQUUxQixxQkFBUztBQUNMLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsRUFBaEMsQ0FBMUIsQ0FBUDthQURKOztTQUZKLEVBRndCOztBQVV4QixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLHFCQUFTO0FBQ0wsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixLQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSxzQkFBVTtBQUNOLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsS0FBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0EsMEJBQWM7QUFDVix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLE1BQWhDLENBQTFCLENBQVA7YUFESjtBQUdBLHlCQUFhO0FBQ1QsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixDQUE0QixHQUFoQyxDQUExQixDQUFQO2FBREo7QUFHQSxvQkFBUTtBQUNKLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsS0FBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0EsbUJBQU87QUFDSCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLENBQTRCLEtBQWhDLENBQTFCLENBQVA7YUFESjs7U0FoQkosRUFWd0I7S0FBNUI7O0FBbUNBLFFBQUksSUFBSSxpQkFBaUIsU0FBakIsQ0FyQ087O0FBdUNmLE1BQUUsY0FBRixHQUFtQixZQUFZO0FBQzNCLGVBQU87QUFDSCxtQkFBTyxLQUFLLEdBQUwsQ0FBUyxLQUFUO0FBQ1Asb0JBQVEsS0FBSyxJQUFMLENBQVUsS0FBVjtBQUNSLHlCQUFhLEtBQUssU0FBTCxDQUFlLEtBQWY7QUFDYiwwQkFBYyxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEI7QUFDZCxxQkFBUyxLQUFLLEtBQUwsQ0FBVyxLQUFYO0FBQ1Qsc0JBQVUsS0FBSyxNQUFMLENBQVksS0FBWjtTQU5kLENBRDJCO0tBQVo7OztBQXZDSixTQW1EZixDQUFNLGFBQU4sQ0FBcUIsZ0JBQXJCLEVBQXNDLENBQUMsNkJBQUQsQ0FBdEMsRUFBc0UsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXZFLEVBQXlHLG9CQUF6RyxFQW5EZTs7QUFxRGYsV0FBTyxPQUFQLEdBQWlCLGdCQUFqQixDQXJEZTtDQUFsQixFQXVEQyxNQXZERCxDQUFEIiwiZmlsZSI6Ik1vZGFsUGFuZWxDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE1vZGFsUGFuZWxDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwid2lkdGhcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCI2MCVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJoZWlnaHRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCI4MCVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiLTIwJVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1hcmdpblRvcFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjBcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsZWZ0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiNDAlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidG9wXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiMjAlXCIpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICB2YXIgcCA9IE1vZGFsUGFuZWxDb25maWcucHJvdG90eXBlO1xuXG4gICAgcC5nZXRMYXlvdXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwidG9wXCI6IHRoaXMudG9wLnZhbHVlLFxuICAgICAgICAgICAgXCJsZWZ0XCI6IHRoaXMubGVmdC52YWx1ZSxcbiAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IHRoaXMubWFyZ2luVG9wLnZhbHVlLFxuICAgICAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IHRoaXMubWFyZ2luTGVmdC52YWx1ZSxcbiAgICAgICAgICAgIFwid2lkdGhcIjogdGhpcy53aWR0aC52YWx1ZSxcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IHRoaXMuaGVpZ2h0LnZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCBNb2RhbFBhbmVsQ29uZmlnLFsnd2VhdmVyZWFjdC5Nb2RhbFBhbmVsQ29uZmlnJ10sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSxcIk1vZGFsIFBhbmVsIENvbmZpZ1wiKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTW9kYWxQYW5lbENvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==