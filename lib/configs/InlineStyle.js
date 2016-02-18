"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Style = require("../utils/Style");

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InlineStyle = function () {
    function InlineStyle() {
        _classCallCheck(this, InlineStyle);

        //to-do need to add verifier for each Session property to restrict to respective property

        Object.defineProperties(this, {
            "border": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "margin": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "padding": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "font": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "other": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            }
        });

        Object.defineProperties(this, {
            "color": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            "background": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            "display": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            "position": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            }
        });
    }

    _createClass(InlineStyle, [{
        key: "getStyleFor",
        value: function getStyleFor(properties, appendVendorPrefix) {
            properties = properties ? properties : ['border', 'margin', 'padding', 'font', 'other', 'color', 'background', 'display', 'position'];
            return _Style2.default.getStyleStateFor(this, properties, appendVendorPrefix);
        }
    }]);

    return InlineStyle;
}();

Weave.registerClass('weavereact.InlineStyle', InlineStyle, [weavejs.api.core.ILinkableObject]);

exports.default = InlineStyle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklubGluZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTTtBQUlGLGFBSkUsV0FJRixHQUFhOzhCQUpYLGFBSVc7Ozs7QUFFUixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzNCLHNCQUFVO0FBQ04sdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0Esc0JBQVU7QUFDTix1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxnQkFBYixFQUE5QixDQUFQO2FBREo7QUFHQSx1QkFBVztBQUNQLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGdCQUFiLEVBQTlCLENBQVA7YUFESjtBQUdBLG9CQUFRO0FBQ0osdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0EscUJBQVM7QUFDTCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxnQkFBYixFQUE5QixDQUFQO2FBREo7U0FiSCxFQUZROztBQXFCUixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzNCLHFCQUFTO0FBQ0wsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixFQUE5QixDQUFQO2FBREo7QUFHQSwwQkFBYztBQUNWLHVCQUFPLE1BQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUFJLFFBQVEsSUFBUixDQUFhLGNBQWIsRUFBOUIsQ0FBUDthQURKO0FBR0EsdUJBQVc7QUFDUCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLEVBQTlCLENBQVA7YUFESjtBQUdBLHdCQUFZO0FBQ1IsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsY0FBYixFQUE5QixDQUFQO2FBREo7U0FWSCxFQXJCUTtLQUFiOztpQkFKRTs7b0NBMkNVLFlBQVcsb0JBQW1CO0FBQ3RDLHlCQUFhLGFBQVcsVUFBWCxHQUFzQixDQUFDLFFBQUQsRUFBVSxRQUFWLEVBQW1CLFNBQW5CLEVBQTZCLE1BQTdCLEVBQW9DLE9BQXBDLEVBQTRDLE9BQTVDLEVBQW9ELFlBQXBELEVBQWlFLFNBQWpFLEVBQTJFLFVBQTNFLENBQXRCLENBRHlCO0FBRXRDLG1CQUFPLGdCQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQTZCLFVBQTdCLEVBQXdDLGtCQUF4QyxDQUFQLENBRnNDOzs7O1dBM0N4Qzs7O0FBaUROLE1BQU0sYUFBTixDQUFvQix3QkFBcEIsRUFBOEMsV0FBOUMsRUFBMEQsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTNEOztrQkFFZSIsImZpbGUiOiJJbmxpbmVTdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZXMgZnJvbSBcIi4uL3V0aWxzL1N0eWxlXCI7XG5cbmNsYXNzIElubGluZVN0eWxle1xuICAgIFxuICAgIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7Ly90by1kbyBuZWVkIHRvIGFkZCB2ZXJpZmllciBmb3IgZWFjaCBTZXNzaW9uIHByb3BlcnR5IHRvIHJlc3RyaWN0IHRvIHJlc3BlY3RpdmUgcHJvcGVydHlcbiAgICAgICAgXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImJvcmRlclwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtYXJnaW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicGFkZGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmb250XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm90aGVyXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJhY2tncm91bmRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRpc3BsYXlcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGdldFN0eWxlRm9yKHByb3BlcnRpZXMsYXBwZW5kVmVuZG9yUHJlZml4KXtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXM/cHJvcGVydGllczpbJ2JvcmRlcicsJ21hcmdpbicsJ3BhZGRpbmcnLCdmb250Jywnb3RoZXInLCdjb2xvcicsJ2JhY2tncm91bmQnLCdkaXNwbGF5JywncG9zaXRpb24nXVxuICAgICAgICByZXR1cm4gU3R5bGVzLmdldFN0eWxlU3RhdGVGb3IodGhpcyxwcm9wZXJ0aWVzLGFwcGVuZFZlbmRvclByZWZpeCk7XG4gICAgfVxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LklubGluZVN0eWxlJywgSW5saW5lU3R5bGUsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IElubGluZVN0eWxlOyJdfQ==
