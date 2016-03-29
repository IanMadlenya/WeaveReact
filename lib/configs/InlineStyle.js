"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Style = require("../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InlineStyle = function () {
    function InlineStyle() {
        _classCallCheck(this, InlineStyle);

        //to-do need to add verifier for each Session property to restrict to respective property

        Object.defineProperties(this, {
            "default": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "domDefined": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            }
        });

        Object.defineProperties(this, {
            "state": {
                get: function get() {
                    var stateObj = this.default.state;
                    if (this.domDefined.state) {
                        stateObj = stateObj ? _Style2.default.mergeStyleObjects(stateObj, this.domDefined.state) : this.domDefined.state;
                    }
                    return _Style2.default.mergeStyleObjects({}, stateObj); // need to send new copy to avoid react warniing
                },
                set: function set(obj) {
                    var stateObj = this.default.state;
                    this.default.state = stateObj ? _Style2.default.mergeStyleObjects(stateObj, obj, true) : obj;
                }
            }
        });
    }

    _createClass(InlineStyle, [{
        key: "getStyleFor",
        value: function getStyleFor() {
            //to-do : type: mobile mode | Tablet mode | laptop Mode  | iconMode
            return this.state;
        }
    }]);

    return InlineStyle;
}();

Weave.registerClass('weavereact.InlineStyle', InlineStyle, [weavejs.api.core.ILinkableObject]);

exports.default = InlineStyle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklubGluZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTTtBQUlGLGFBSkUsV0FJRixHQUFhOzhCQUpYLGFBSVc7Ozs7QUFFVCxlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLHVCQUFXO0FBQ1AsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0EsMEJBQWE7QUFDVCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxnQkFBYixFQUE5QixDQUFQO2FBREo7U0FKSixFQUZTOztBQVdULGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDMUIscUJBQVM7QUFDTCxxQkFBSyxlQUFVO0FBQ1gsd0JBQUksV0FBVyxLQUFLLE9BQUwsQ0FBYSxLQUFiLENBREo7QUFFWCx3QkFBRyxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsRUFBc0I7QUFDcEIsbUNBQVcsV0FBVyxnQkFBTyxpQkFBUCxDQUF5QixRQUF6QixFQUFrQyxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBN0MsR0FBcUUsS0FBSyxVQUFMLENBQWdCLEtBQWhCLENBRDVEO3FCQUF6QjtBQUdBLDJCQUFPLGdCQUFPLGlCQUFQLENBQXlCLEVBQXpCLEVBQTRCLFFBQTVCLENBQVA7aUJBTEM7QUFBVSxBQVFmLHFCQUFLLGFBQVMsR0FBVCxFQUFhO0FBQ2Qsd0JBQUksV0FBVyxLQUFLLE9BQUwsQ0FBYSxLQUFiLENBREQ7QUFFZCx5QkFBSyxPQUFMLENBQWEsS0FBYixHQUFxQixXQUFTLGdCQUFPLGlCQUFQLENBQXlCLFFBQXpCLEVBQWtDLEdBQWxDLEVBQXNDLElBQXRDLENBQVQsR0FBcUQsR0FBckQsQ0FGUDtpQkFBYjthQVRUO1NBREosRUFYUztLQUFiOztpQkFKRTs7c0NBa0NXOztBQUVULG1CQUFPLEtBQUssS0FBTCxDQUZFOzs7O1dBbENYOzs7QUEwQ04sTUFBTSxhQUFOLENBQW9CLHdCQUFwQixFQUE4QyxXQUE5QyxFQUEwRCxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBM0Q7O2tCQUVlIiwiZmlsZSI6IklubGluZVN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vdXRpbHMvU3R5bGVcIjtcblxuY2xhc3MgSW5saW5lU3R5bGV7XG5cblxuXG4gICAgY29uc3RydWN0b3IoKXsvL3RvLWRvIG5lZWQgdG8gYWRkIHZlcmlmaWVyIGZvciBlYWNoIFNlc3Npb24gcHJvcGVydHkgdG8gcmVzdHJpY3QgdG8gcmVzcGVjdGl2ZSBwcm9wZXJ0eVxuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkb21EZWZpbmVkXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInN0YXRlXCI6IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZU9iaiA9IHRoaXMuZGVmYXVsdC5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kb21EZWZpbmVkLnN0YXRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZU9iaiA9IHN0YXRlT2JqID8gU3R5bGVzLm1lcmdlU3R5bGVPYmplY3RzKHN0YXRlT2JqLHRoaXMuZG9tRGVmaW5lZC5zdGF0ZSkgOnRoaXMuZG9tRGVmaW5lZC5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHlsZXMubWVyZ2VTdHlsZU9iamVjdHMoe30sc3RhdGVPYmopOy8vIG5lZWQgdG8gc2VuZCBuZXcgY29weSB0byBhdm9pZCByZWFjdCB3YXJuaWluZ1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKG9iail7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZU9iaiA9IHRoaXMuZGVmYXVsdC5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0LnN0YXRlID0gc3RhdGVPYmo/U3R5bGVzLm1lcmdlU3R5bGVPYmplY3RzKHN0YXRlT2JqLG9iaix0cnVlKTpvYmo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGdldFN0eWxlRm9yKCl7XG4gICAgICAgIC8vdG8tZG8gOiB0eXBlOiBtb2JpbGUgbW9kZSB8IFRhYmxldCBtb2RlIHwgbGFwdG9wIE1vZGUgIHwgaWNvbk1vZGVcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVcbiAgICB9XG5cblxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LklubGluZVN0eWxlJywgSW5saW5lU3R5bGUsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IElubGluZVN0eWxlO1xuIl19
