"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ButtonConfig = function () {
    function ButtonConfig() {
        _classCallCheck(this, ButtonConfig);

        _ComponentManager2.default.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            "icon": { //{default: "" , clicked: "" , mouseOver: ""}
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "iconOnly": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "clicked": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "label": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            }
        });

        this.style.state = {
            display: "flex",
            flexDirection: "row",
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            margin: "0",
            color: "inherit",
            textTransform: "none",
            cursor: "pointer",
            alignItems: "center"
        };

        this.reverseLayout.addImmediateCallback(this, this.updateStyle);
    }

    _createClass(ButtonConfig, [{
        key: "updateStyle",
        value: function updateStyle() {
            var flexDir = this.reverseLayout.state ? "row-reverse" : "row";
            this.style.state = { flexDirection: flexDir };
            _ComponentManager2.default.flipIcons(this, ["icon"]);
        }
    }, {
        key: "getIcon",
        value: function getIcon() {
            if (this.clicked.state) {
                return this.icon.state["clicked"];
            } else {
                return this.icon.state["default"];
            }
        }
    }]);

    return ButtonConfig;
}();

exports.default = ButtonConfig;

//This Function makes this class as SessionClass

Weave.registerClass(ButtonConfig, ['weavereact.ButtonConfig'], [weavejs.api.core.ILinkableObject], "Button Config");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU07QUFDRixhQURFLFlBQ0YsR0FBYzs4QkFEWixjQUNZOztBQUNWLG1DQUFpQiw4QkFBakIsQ0FBZ0QsSUFBaEQsRUFEVTs7QUFHVCxlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzNCLG9CQUFPO0FBQ0gsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0Esd0JBQVc7QUFDUCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLEtBQWpDLENBQTFCLENBQVA7YUFESjtBQUdBLHVCQUFVO0FBQ04sdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUExQixDQUFQO2FBREo7QUFHQSxxQkFBUTtBQUNKLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsRUFBOUIsQ0FBUDthQURKO1NBVkgsRUFIUzs7QUFrQlYsYUFBSyxLQUFMLENBQVcsS0FBWCxHQUFtQjtBQUNmLHFCQUFRLE1BQVI7QUFDQSwyQkFBYyxLQUFkO0FBQ0Esd0JBQVksU0FBWjtBQUNBLHNCQUFVLFNBQVY7QUFDQSx3QkFBWSxTQUFaO0FBQ0Esb0JBQVEsR0FBUjtBQUNBLG1CQUFPLFNBQVA7QUFDQSwyQkFBZSxNQUFmO0FBQ0Esb0JBQVEsU0FBUjtBQUNBLHdCQUFXLFFBQVg7U0FWSixDQWxCVTs7QUErQlYsYUFBSyxhQUFMLENBQW1CLG9CQUFuQixDQUF3QyxJQUF4QyxFQUE2QyxLQUFLLFdBQUwsQ0FBN0MsQ0EvQlU7S0FBZDs7aUJBREU7O3NDQXFDVztBQUNULGdCQUFJLFVBQVUsS0FBSyxhQUFMLENBQW1CLEtBQW5CLEdBQXlCLGFBQXpCLEdBQXVDLEtBQXZDLENBREw7QUFFVCxpQkFBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixFQUFDLGVBQWMsT0FBZCxFQUFwQixDQUZTO0FBR1QsdUNBQWlCLFNBQWpCLENBQTJCLElBQTNCLEVBQWdDLENBQUMsTUFBRCxDQUFoQyxFQUhTOzs7O2tDQU1KO0FBQ0wsZ0JBQUcsS0FBSyxPQUFMLENBQWEsS0FBYixFQUFtQjtBQUNsQix1QkFBTyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFNBQWhCLENBQVAsQ0FEa0I7YUFBdEIsTUFHSTtBQUNBLHVCQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsQ0FBUCxDQURBO2FBSEo7Ozs7V0E1Q0Y7OztrQkF5RFM7Ozs7QUFJZixNQUFNLGFBQU4sQ0FBcUIsWUFBckIsRUFBa0MsQ0FBQyx5QkFBRCxDQUFsQyxFQUE4RCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBL0QsRUFBaUcsZUFBakciLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuY2xhc3MgQnV0dG9uQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyk7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiaWNvblwiOnsvL3tkZWZhdWx0OiBcIlwiICwgY2xpY2tlZDogXCJcIiAsIG1vdXNlT3ZlcjogXCJcIn1cbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25Pbmx5XCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNsaWNrZWRcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGFiZWxcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZXZlcnNlTGF5b3V0LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy51cGRhdGVTdHlsZSlcblxuXG4gICAgfVxuXG4gICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgICAgdmFyIGZsZXhEaXIgPSB0aGlzLnJldmVyc2VMYXlvdXQuc3RhdGU/XCJyb3ctcmV2ZXJzZVwiOlwicm93XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuc3RhdGUgPSB7ZmxleERpcmVjdGlvbjpmbGV4RGlyfTtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5mbGlwSWNvbnModGhpcyxbXCJpY29uXCJdKTtcbiAgICB9XG5cbiAgICBnZXRJY29uKCl7XG4gICAgICAgIGlmKHRoaXMuY2xpY2tlZC5zdGF0ZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uLnN0YXRlW1wiY2xpY2tlZFwiXVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uLnN0YXRlW1wiZGVmYXVsdFwiXVxuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkNvbmZpZ1xuXG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcyggQnV0dG9uQ29uZmlnLFsnd2VhdmVyZWFjdC5CdXR0b25Db25maWcnXSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdLFwiQnV0dG9uIENvbmZpZ1wiKTtcblxuIl19