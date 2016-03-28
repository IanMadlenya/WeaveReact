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
                        stateObj = stateObj ? _Style2.default.mergeStyleObjects(this.default.state, this.domDefined.state) : this.domDefined.state;
                    }
                    return stateObj;
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
        value: function getStyleFor(type) {
            //to-do : type: mobile mode | Tablet mode | laptop Mode  | iconMode
            return this.state;
        }
    }]);

    return InlineStyle;
}();

Weave.registerClass('weavereact.InlineStyle', InlineStyle, [weavejs.api.core.ILinkableObject]);

exports.default = InlineStyle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklubGluZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTTtBQUlGLGFBSkUsV0FJRixHQUFhOzhCQUpYLGFBSVc7Ozs7QUFFVCxlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzFCLHVCQUFXO0FBQ1AsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0EsMEJBQWE7QUFDVCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxnQkFBYixFQUE5QixDQUFQO2FBREo7U0FKSixFQUZTOztBQVdULGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDMUIscUJBQVM7QUFDTCxxQkFBSyxlQUFVO0FBQ1gsd0JBQUksV0FBVyxLQUFLLE9BQUwsQ0FBYSxLQUFiLENBREo7QUFFWCx3QkFBRyxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsRUFBc0I7QUFDcEIsbUNBQVcsV0FBVyxnQkFBTyxpQkFBUCxDQUF5QixLQUFLLE9BQUwsQ0FBYSxLQUFiLEVBQW1CLEtBQUssVUFBTCxDQUFnQixLQUFoQixDQUF2RCxHQUErRSxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FEdEU7cUJBQXpCO0FBR0EsMkJBQU8sUUFBUCxDQUxXO2lCQUFWO0FBUUwscUJBQUssYUFBUyxHQUFULEVBQWE7QUFDZCx3QkFBSSxXQUFXLEtBQUssT0FBTCxDQUFhLEtBQWIsQ0FERDtBQUVkLHlCQUFLLE9BQUwsQ0FBYSxLQUFiLEdBQXFCLFdBQVMsZ0JBQU8saUJBQVAsQ0FBeUIsUUFBekIsRUFBa0MsR0FBbEMsRUFBc0MsSUFBdEMsQ0FBVCxHQUFxRCxHQUFyRCxDQUZQO2lCQUFiO2FBVFQ7U0FESixFQVhTO0tBQWI7O2lCQUpFOztvQ0FrQ1UsTUFBSzs7QUFFYixtQkFBTyxLQUFLLEtBQUwsQ0FGTTs7OztXQWxDZjs7O0FBMENOLE1BQU0sYUFBTixDQUFvQix3QkFBcEIsRUFBOEMsV0FBOUMsRUFBMEQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTNEOztrQkFFZSIsImZpbGUiOiJJbmxpbmVTdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZXMgZnJvbSBcIi4uL3V0aWxzL1N0eWxlXCI7XG5cbmNsYXNzIElubGluZVN0eWxle1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKCl7Ly90by1kbyBuZWVkIHRvIGFkZCB2ZXJpZmllciBmb3IgZWFjaCBTZXNzaW9uIHByb3BlcnR5IHRvIHJlc3RyaWN0IHRvIHJlc3BlY3RpdmUgcHJvcGVydHlcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZG9tRGVmaW5lZFwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGVPYmogPSB0aGlzLmRlZmF1bHQuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZG9tRGVmaW5lZC5zdGF0ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVPYmogPSBzdGF0ZU9iaiA/IFN0eWxlcy5tZXJnZVN0eWxlT2JqZWN0cyh0aGlzLmRlZmF1bHQuc3RhdGUsdGhpcy5kb21EZWZpbmVkLnN0YXRlKSA6dGhpcy5kb21EZWZpbmVkLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24ob2JqKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlT2JqID0gdGhpcy5kZWZhdWx0LnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHQuc3RhdGUgPSBzdGF0ZU9iaj9TdHlsZXMubWVyZ2VTdHlsZU9iamVjdHMoc3RhdGVPYmosb2JqLHRydWUpOm9iajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZ2V0U3R5bGVGb3IodHlwZSl7XG4gICAgICAgIC8vdG8tZG8gOiB0eXBlOiBtb2JpbGUgbW9kZSB8IFRhYmxldCBtb2RlIHwgbGFwdG9wIE1vZGUgIHwgaWNvbk1vZGVcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVcbiAgICB9XG5cblxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LklubGluZVN0eWxlJywgSW5saW5lU3R5bGUsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IElubGluZVN0eWxlO1xuIl19
