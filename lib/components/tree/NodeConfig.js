"use strict";

/*import Weave from 'Weave';
import weavejs from 'weavejs';*/
(function (module) {

    function NodeConfig() {

        Object.defineProperties(this, {
            "label": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "children": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap()) // important to be prototype as type restriction is compared with prototype
            },
            "iconName": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            "open": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
            },
            "alwaysOpen": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
            },
            "active": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
            }
        });

        this.open.state = false;
        this.alwaysOpen.state = false;
        this.active.state = false;

        this.childConfigMap = new Map();
        this.configChildMap = new Map();
    }

    var p = NodeConfig.prototype;

    p.getNodes = function () {
        return this.children.getNames();
    };

    p.reset = function () {
        this.label.value = "";
        this.iconName.value = "";
        this.open.value = false;
        this.active.value = false;
        this.children.removeAllObjects();
    };

    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.NodeConfig', NodeConfig);

    module.exports = NodeConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUVmLGFBQVMsVUFBVCxHQUFzQjs7QUFFbEIsZUFBTyxnQkFBUCxDQUF3QixJQUF4QixFQUE4QjtBQUMxQixxQkFBUztBQUNMLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsQ0FBNEIsRUFBaEMsQ0FBMUIsQ0FBUDthQURKO0FBR0Esd0JBQVk7QUFDUix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLEVBQTlCLENBQVA7QUFEUSxhQUFaO0FBR0Esd0JBQVk7QUFDUix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLEVBQTlCLENBQVA7YUFESjtBQUdBLG9CQUFRO0FBQ0osdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixFQUE5QixDQUFQO2FBREo7QUFHQSwwQkFBYztBQUNWLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGVBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0Esc0JBQVU7QUFDTix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLEVBQTlCLENBQVA7YUFESjtTQWhCSixFQUZrQjs7QUF1QmxCLGFBQUssSUFBTCxDQUFVLEtBQVYsR0FBa0IsS0FBbEIsQ0F2QmtCO0FBd0JsQixhQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsR0FBd0IsS0FBeEIsQ0F4QmtCO0FBeUJsQixhQUFLLE1BQUwsQ0FBWSxLQUFaLEdBQW9CLEtBQXBCLENBekJrQjs7QUEyQmxCLGFBQUssY0FBTCxHQUFzQixJQUFJLEdBQUosRUFBdEIsQ0EzQmtCO0FBNEJsQixhQUFLLGNBQUwsR0FBc0IsSUFBSSxHQUFKLEVBQXRCLENBNUJrQjtLQUF0Qjs7QUFnQ0EsUUFBSSxJQUFJLFdBQVcsU0FBWCxDQWxDTzs7QUFvQ2YsTUFBRSxRQUFGLEdBQWEsWUFBWTtBQUNyQixlQUFPLEtBQUssUUFBTCxDQUFjLFFBQWQsRUFBUCxDQURxQjtLQUFaLENBcENFOztBQXdDZixNQUFFLEtBQUYsR0FBVSxZQUFZO0FBQ2xCLGFBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsRUFBbkIsQ0FEa0I7QUFFbEIsYUFBSyxRQUFMLENBQWMsS0FBZCxHQUFzQixFQUF0QixDQUZrQjtBQUdsQixhQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLEtBQWxCLENBSGtCO0FBSWxCLGFBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsS0FBcEIsQ0FKa0I7QUFLbEIsYUFBSyxRQUFMLENBQWMsZ0JBQWQsR0FMa0I7S0FBWjs7O0FBeENLLFNBaURmLENBQU0sYUFBTixDQUFvQix1QkFBcEIsRUFBNkMsVUFBN0MsRUFqRGU7O0FBbURmLFdBQU8sT0FBUCxHQUFpQixVQUFqQixDQW5EZTtDQUFsQixFQXFEQyxNQXJERCxDQUFEIiwiZmlsZSI6Ik5vZGVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE5vZGVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKSAvLyBpbXBvcnRhbnQgdG8gYmUgcHJvdG90eXBlIGFzIHR5cGUgcmVzdHJpY3Rpb24gaXMgY29tcGFyZWQgd2l0aCBwcm90b3R5cGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25OYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWx3YXlzT3BlblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGl2ZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcGVuLnN0YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWx3YXlzT3Blbi5zdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZS5zdGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG5cbiAgICB2YXIgcCA9IE5vZGVDb25maWcucHJvdG90eXBlO1xuXG4gICAgcC5nZXROb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZ2V0TmFtZXMoKTtcbiAgICB9XG5cbiAgICBwLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxhYmVsLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy5pY29uTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICB9XG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lk5vZGVDb25maWcnLCBOb2RlQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTm9kZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
