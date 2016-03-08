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

Weave.registerClass('weavereact.CSS', CSS, [weavejs.api.core.ILinkableObject]);

exports.default = CSS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNTUy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBRU07QUFDRixhQURFLEdBQ0YsR0FBYTs4QkFEWCxLQUNXOztBQUVSLGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDM0IseUJBQWE7QUFDVCx1QkFBTyxNQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBSSxRQUFRLElBQVIsQ0FBYSxjQUFiLEVBQTlCLENBQVA7YUFESjtBQUdBLDJCQUFlO0FBQ1gsdUJBQU8sTUFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBOUIsQ0FBUDthQURKO1NBSkgsRUFGUTtLQUFiOztpQkFERTs7a0NBY1EsVUFBUztBQUNmLGdCQUFHLFFBQUgsRUFDSSxPQUFPLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsUUFBckIsQ0FBUCxDQURKLEtBRUk7QUFDQSx1QkFBTyxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBRFA7YUFGSjs7OztXQWZGOzs7QUF1Qk4sTUFBTSxhQUFOLENBQW9CLGdCQUFwQixFQUFzQyxHQUF0QyxFQUEwQyxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBM0M7O2tCQUVlIiwiZmlsZSI6IkNTUy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBDU1N7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNsYXNzT2JqZWN0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBnZXRDU1NGb3IocHJvcGVydHkpe1xuICAgICAgICBpZihwcm9wZXJ0eSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNzc09iamVjdC5zdGF0ZVtwcm9wZXJ0eV07XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGFzc05hbWUuc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuQ1NTJywgQ1NTLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBDU1M7XG4iXX0=