"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CSS = function () {
    function CSS() {
        _classCallCheck(this, CSS);

        Object.defineProperties(this, {
            "className": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            "classObject": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            }
        });
    }

    _createClass(CSS, [{
        key: "getCSSFor",
        value: function getCSSFor(property) {
            if (property) return this.cssObject.state[property];else {
                return this.className.state;
            }
        }
    }]);

    return CSS;
}();

Weave.registerClass(CSS, ['weavereact.CSS'], [weavejs.api.core.ILinkableObject], "CSS");

exports.default = CSS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNTUy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBRU07QUFDRixhQURFLEdBQ0YsR0FBYTs4QkFEWCxLQUNXOztBQUVSLGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDM0IseUJBQWE7QUFDVCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLEVBQTlCLENBQVA7YUFESjtBQUdBLDJCQUFlO0FBQ1gsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO1NBSkgsRUFGUTtLQUFiOztpQkFERTs7a0NBY1EsVUFBUztBQUNmLGdCQUFHLFFBQUgsRUFDSSxPQUFPLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsUUFBckIsQ0FBUCxDQURKLEtBRUk7QUFDQSx1QkFBTyxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBRFA7YUFGSjs7OztXQWZGOzs7QUF1Qk4sTUFBTSxhQUFOLENBQXFCLEdBQXJCLEVBQXlCLENBQUMsZ0JBQUQsQ0FBekIsRUFBNEMsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQTdDLEVBQStFLEtBQS9FOztrQkFFZSIsImZpbGUiOiJDU1MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY2xhc3MgQ1NTe1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjbGFzc09iamVjdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZ2V0Q1NTRm9yKHByb3BlcnR5KXtcbiAgICAgICAgaWYocHJvcGVydHkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jc3NPYmplY3Quc3RhdGVbcHJvcGVydHldO1xuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lLnN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCBDU1MsWyd3ZWF2ZXJlYWN0LkNTUyddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJDU1NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IENTUztcbiJdfQ==