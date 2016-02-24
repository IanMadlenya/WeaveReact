"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PropsManager = function () {
    function PropsManager() {
        _classCallCheck(this, PropsManager);

        this.new = {};
        this.mutated = {};
        this.key = [];
        this.default = {};
        this.style = {};

        Object.defineProperties(this, {
            "odd": {
                value: {
                    children: [],
                    values: []
                }
            },
            "all": {
                value: {
                    properties: [],
                    values: []
                }
            }
        });
    }

    _createClass(PropsManager, [{
        key: "addKeyProps",
        value: function addKeyProps(propName, value) {
            var index = this.all.properties.indexOf(propName);
            if (index === -1) {
                this.all.properties.push(propName);
                var valIndex = this.all.properties.indexOf(propName);
                this.all.values[valIndex] = value;
            }
        }
    }, {
        key: "addOddChild",
        value: function addOddChild(childKey, childValue) {
            //to-do add warning if childValue is missed
            var childIndex = this.odd.children.indexOf(childKey);
            if (childIndex === -1) {
                this.odd.children.push(childKey);
                var valIndex = this.odd.children.indexOf(childKey);
                this.odd.values[valIndex] = childValue;
            }
        }
    }, {
        key: "addNewProps",
        value: function addNewProps(propName, value) {
            this.new[propName] = value;
        }
    }, {
        key: "updateStyle",
        value: function updateStyle(style) {
            this.style = style;
        }
    }]);

    return PropsManager;
}();

exports.default = PropsManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb3BzTWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU07QUFDRixhQURFLFlBQ0YsR0FBYzs4QkFEWixjQUNZOztBQUNWLGFBQUssR0FBTCxHQUFXLEVBQVgsQ0FEVTtBQUVWLGFBQUssT0FBTCxHQUFlLEVBQWYsQ0FGVTtBQUdWLGFBQUssR0FBTCxHQUFXLEVBQVgsQ0FIVTtBQUlWLGFBQUssT0FBTCxHQUFlLEVBQWYsQ0FKVTtBQUtWLGFBQUssS0FBTCxHQUFhLEVBQWIsQ0FMVTs7QUFRVCxlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzNCLG1CQUFPO0FBQ0gsdUJBQU87QUFDSCw4QkFBVSxFQUFWO0FBQ0EsNEJBQVEsRUFBUjtpQkFGSjthQURKO0FBTUEsbUJBQU87QUFDSCx1QkFBTTtBQUNGLGdDQUFZLEVBQVo7QUFDQSw0QkFBTyxFQUFQO2lCQUZKO2FBREo7U0FQSCxFQVJTO0tBQWQ7O2lCQURFOztvQ0EwQlUsVUFBUyxPQUFNO0FBQ3ZCLGdCQUFJLFFBQVEsS0FBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixPQUFwQixDQUE0QixRQUE1QixDQUFSLENBRG1CO0FBRXZCLGdCQUFHLFVBQVUsQ0FBQyxDQUFELEVBQUc7QUFDWixxQkFBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixJQUFwQixDQUF5QixRQUF6QixFQURZO0FBRVosb0JBQUksV0FBVyxLQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLE9BQXBCLENBQTRCLFFBQTVCLENBQVgsQ0FGUTtBQUdaLHFCQUFLLEdBQUwsQ0FBUyxNQUFULENBQWdCLFFBQWhCLElBQTRCLEtBQTVCLENBSFk7YUFBaEI7Ozs7b0NBT1EsVUFBUyxZQUFXOztBQUU1QixnQkFBSSxhQUFhLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBMEIsUUFBMUIsQ0FBYixDQUZ3QjtBQUc1QixnQkFBRyxlQUFlLENBQUMsQ0FBRCxFQUFHO0FBQ2pCLHFCQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLElBQWxCLENBQXVCLFFBQXZCLEVBRGlCO0FBRWpCLG9CQUFJLFdBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixPQUFsQixDQUEwQixRQUExQixDQUFYLENBRmE7QUFHakIscUJBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsUUFBaEIsSUFBNEIsVUFBNUIsQ0FIaUI7YUFBckI7Ozs7b0NBT1EsVUFBUyxPQUFNO0FBQ3ZCLGlCQUFLLEdBQUwsQ0FBUyxRQUFULElBQXFCLEtBQXJCLENBRHVCOzs7O29DQUtmLE9BQU07QUFDZCxpQkFBSyxLQUFMLEdBQWEsS0FBYixDQURjOzs7O1dBbERoQjs7O2tCQTZEUyIsImZpbGUiOiJQcm9wc01hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9wc01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5ldyA9IHt9O1xuICAgICAgICB0aGlzLm11dGF0ZWQgPSB7fTtcbiAgICAgICAgdGhpcy5rZXkgPSBbXTtcbiAgICAgICAgdGhpcy5kZWZhdWx0ID0ge307XG4gICAgICAgIHRoaXMuc3R5bGUgPSB7fVxuICAgICAgICBcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJvZGRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFsbFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6e1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOltdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGFkZEtleVByb3BzKHByb3BOYW1lLHZhbHVlKXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hbGwucHJvcGVydGllcy5pbmRleE9mKHByb3BOYW1lKTtcbiAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcbiAgICAgICAgICAgIHRoaXMuYWxsLnByb3BlcnRpZXMucHVzaChwcm9wTmFtZSk7XG4gICAgICAgICAgICB2YXIgdmFsSW5kZXggPSB0aGlzLmFsbC5wcm9wZXJ0aWVzLmluZGV4T2YocHJvcE5hbWUpO1xuICAgICAgICAgICAgdGhpcy5hbGwudmFsdWVzW3ZhbEluZGV4XSA9IHZhbHVlO1xuICAgICAgICB9ICAgICBcbiAgICB9XG4gICAgXG4gICAgYWRkT2RkQ2hpbGQoY2hpbGRLZXksY2hpbGRWYWx1ZSl7XG4gICAgICAgIC8vdG8tZG8gYWRkIHdhcm5pbmcgaWYgY2hpbGRWYWx1ZSBpcyBtaXNzZWRcbiAgICAgICAgdmFyIGNoaWxkSW5kZXggPSB0aGlzLm9kZC5jaGlsZHJlbi5pbmRleE9mKGNoaWxkS2V5KVxuICAgICAgICBpZihjaGlsZEluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICB0aGlzLm9kZC5jaGlsZHJlbi5wdXNoKGNoaWxkS2V5KTtcbiAgICAgICAgICAgIHZhciB2YWxJbmRleCA9IHRoaXMub2RkLmNoaWxkcmVuLmluZGV4T2YoY2hpbGRLZXkpXG4gICAgICAgICAgICB0aGlzLm9kZC52YWx1ZXNbdmFsSW5kZXhdID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhZGROZXdQcm9wcyhwcm9wTmFtZSx2YWx1ZSl7XG4gICAgICAgIHRoaXMubmV3W3Byb3BOYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBcblxuICAgIHVwZGF0ZVN0eWxlKHN0eWxlKXtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlXG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb3BzTWFuYWdlcjsiXX0=
