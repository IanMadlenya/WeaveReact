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
        this.events = {};

        // odd: Propeorties which has to be uniques for certain child
        // all: Propeorties which has to be uniques for all child
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
        key: "resetOddProps",
        value: function resetOddProps() {
            this.odd.children = [];
            this.odd.values = [];
        }

        //value: undefined will make configName as keyValue
        //propName = 'index' and value:undefined makes index as keyVaue

    }, {
        key: "addKeyProps",
        value: function addKeyProps(propName, value) {
            var index = this.all.properties.indexOf(propName);
            if (index === -1) {
                this.all.properties.push(propName);
                var valIndex = this.all.properties.indexOf(propName);
                this.all.values[valIndex] = value;
            } else {
                this.all.values[index] = value;
            }
        }

        //to-do: replace reset temp solution

    }, {
        key: "addOddChild",
        value: function addOddChild(childKey, childValue, reset) {
            //to-do add warning if childValue is missed
            if (reset) {
                this.resetOddProps();
            }
            if (typeof childKey === 'number') childKey = String(childKey);
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
        key: "addEvent",
        value: function addEvent(eventName, callbackFn, bindValues) {
            this.events[eventName] = {
                callback: callbackFn,
                bind: bindValues
            };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb3BzTWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU07QUFDRixhQURFLFlBQ0YsR0FBYzs4QkFEWixjQUNZOztBQUNWLGFBQUssR0FBTCxHQUFXLEVBQVgsQ0FEVTtBQUVWLGFBQUssT0FBTCxHQUFlLEVBQWYsQ0FGVTtBQUdWLGFBQUssR0FBTCxHQUFXLEVBQVgsQ0FIVTtBQUlWLGFBQUssT0FBTCxHQUFlLEVBQWYsQ0FKVTtBQUtWLGFBQUssS0FBTCxHQUFhLEVBQWIsQ0FMVTtBQU1WLGFBQUssTUFBTCxHQUFjLEVBQWQ7Ozs7QUFOVSxjQVVULENBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDM0IsbUJBQU87QUFDSCx1QkFBTztBQUNILDhCQUFVLEVBQVY7QUFDQSw0QkFBUSxFQUFSO2lCQUZKO2FBREo7QUFNQSxtQkFBTztBQUNILHVCQUFNO0FBQ0YsZ0NBQVksRUFBWjtBQUNBLDRCQUFPLEVBQVA7aUJBRko7YUFESjtTQVBILEVBVlM7S0FBZDs7aUJBREU7O3dDQTRCYTtBQUNYLGlCQUFLLEdBQUwsQ0FBUyxRQUFULEdBQW9CLEVBQXBCLENBRFc7QUFFWCxpQkFBSyxHQUFMLENBQVMsTUFBVCxHQUFrQixFQUFsQixDQUZXOzs7Ozs7OztvQ0FPSCxVQUFTLE9BQU07QUFDdkIsZ0JBQUksUUFBUSxLQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLE9BQXBCLENBQTRCLFFBQTVCLENBQVIsQ0FEbUI7QUFFdkIsZ0JBQUcsVUFBVSxDQUFDLENBQUQsRUFBRztBQUNaLHFCQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLElBQXBCLENBQXlCLFFBQXpCLEVBRFk7QUFFWixvQkFBSSxXQUFXLEtBQUssR0FBTCxDQUFTLFVBQVQsQ0FBb0IsT0FBcEIsQ0FBNEIsUUFBNUIsQ0FBWCxDQUZRO0FBR1oscUJBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsUUFBaEIsSUFBNEIsS0FBNUIsQ0FIWTthQUFoQixNQUlLO0FBQ0QscUJBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsSUFBeUIsS0FBekIsQ0FEQzthQUpMOzs7Ozs7O29DQVVRLFVBQVMsWUFBVyxPQUFNOztBQUVsQyxnQkFBRyxLQUFILEVBQVM7QUFDTCxxQkFBSyxhQUFMLEdBREs7YUFBVDtBQUdBLGdCQUFHLE9BQU8sUUFBUCxLQUFvQixRQUFwQixFQUNDLFdBQVcsT0FBTyxRQUFQLENBQVgsQ0FESjtBQUVBLGdCQUFJLGFBQWEsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixPQUFsQixDQUEwQixRQUExQixDQUFiLENBUDhCO0FBUWxDLGdCQUFHLGVBQWUsQ0FBQyxDQUFELEVBQUc7QUFDakIscUJBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsSUFBbEIsQ0FBdUIsUUFBdkIsRUFEaUI7QUFFakIsb0JBQUksV0FBVyxLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLFFBQTFCLENBQVgsQ0FGYTtBQUdqQixxQkFBSyxHQUFMLENBQVMsTUFBVCxDQUFnQixRQUFoQixJQUE0QixVQUE1QixDQUhpQjthQUFyQjs7OztvQ0FPUSxVQUFTLE9BQU07QUFDdkIsaUJBQUssR0FBTCxDQUFTLFFBQVQsSUFBcUIsS0FBckIsQ0FEdUI7Ozs7aUNBSWxCLFdBQVUsWUFBVyxZQUFXO0FBQ3JDLGlCQUFLLE1BQUwsQ0FBWSxTQUFaLElBQXlCO0FBQ3JCLDBCQUFTLFVBQVQ7QUFDQSxzQkFBSyxVQUFMO2FBRkosQ0FEcUM7Ozs7b0NBUTdCLE9BQU07QUFDZCxpQkFBSyxLQUFMLEdBQWEsS0FBYixDQURjOzs7O1dBMUVoQjs7O2tCQXFGUyIsImZpbGUiOiJQcm9wc01hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9wc01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5ldyA9IHt9O1xuICAgICAgICB0aGlzLm11dGF0ZWQgPSB7fTtcbiAgICAgICAgdGhpcy5rZXkgPSBbXTtcbiAgICAgICAgdGhpcy5kZWZhdWx0ID0ge307XG4gICAgICAgIHRoaXMuc3R5bGUgPSB7fVxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuXG4gICAgICAgIC8vIG9kZDogUHJvcGVvcnRpZXMgd2hpY2ggaGFzIHRvIGJlIHVuaXF1ZXMgZm9yIGNlcnRhaW4gY2hpbGRcbiAgICAgICAgLy8gYWxsOiBQcm9wZW9ydGllcyB3aGljaCBoYXMgdG8gYmUgdW5pcXVlcyBmb3IgYWxsIGNoaWxkXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcIm9kZFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWxsXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTp7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6W11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVzZXRPZGRQcm9wcygpe1xuICAgICAgICB0aGlzLm9kZC5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLm9kZC52YWx1ZXMgPSBbXTtcbiAgICB9XG5cbiAgICAvL3ZhbHVlOiB1bmRlZmluZWQgd2lsbCBtYWtlIGNvbmZpZ05hbWUgYXMga2V5VmFsdWVcbiAgICAvL3Byb3BOYW1lID0gJ2luZGV4JyBhbmQgdmFsdWU6dW5kZWZpbmVkIG1ha2VzIGluZGV4IGFzIGtleVZhdWVcbiAgICBhZGRLZXlQcm9wcyhwcm9wTmFtZSx2YWx1ZSl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWxsLnByb3BlcnRpZXMuaW5kZXhPZihwcm9wTmFtZSk7XG4gICAgICAgIGlmKGluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICB0aGlzLmFsbC5wcm9wZXJ0aWVzLnB1c2gocHJvcE5hbWUpO1xuICAgICAgICAgICAgdmFyIHZhbEluZGV4ID0gdGhpcy5hbGwucHJvcGVydGllcy5pbmRleE9mKHByb3BOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuYWxsLnZhbHVlc1t2YWxJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmFsbC52YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3RvLWRvOiByZXBsYWNlIHJlc2V0IHRlbXAgc29sdXRpb25cbiAgICBhZGRPZGRDaGlsZChjaGlsZEtleSxjaGlsZFZhbHVlLHJlc2V0KXtcbiAgICAgICAgLy90by1kbyBhZGQgd2FybmluZyBpZiBjaGlsZFZhbHVlIGlzIG1pc3NlZFxuICAgICAgICBpZihyZXNldCl7XG4gICAgICAgICAgICB0aGlzLnJlc2V0T2RkUHJvcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YgY2hpbGRLZXkgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgY2hpbGRLZXkgPSBTdHJpbmcoY2hpbGRLZXkpO1xuICAgICAgICB2YXIgY2hpbGRJbmRleCA9IHRoaXMub2RkLmNoaWxkcmVuLmluZGV4T2YoY2hpbGRLZXkpXG4gICAgICAgIGlmKGNoaWxkSW5kZXggPT09IC0xKXtcbiAgICAgICAgICAgIHRoaXMub2RkLmNoaWxkcmVuLnB1c2goY2hpbGRLZXkpO1xuICAgICAgICAgICAgdmFyIHZhbEluZGV4ID0gdGhpcy5vZGQuY2hpbGRyZW4uaW5kZXhPZihjaGlsZEtleSlcbiAgICAgICAgICAgIHRoaXMub2RkLnZhbHVlc1t2YWxJbmRleF0gPSBjaGlsZFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkTmV3UHJvcHMocHJvcE5hbWUsdmFsdWUpe1xuICAgICAgICB0aGlzLm5ld1twcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBhZGRFdmVudChldmVudE5hbWUsY2FsbGJhY2tGbixiaW5kVmFsdWVzKXtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrOmNhbGxiYWNrRm4sXG4gICAgICAgICAgICBiaW5kOmJpbmRWYWx1ZXNcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdXBkYXRlU3R5bGUoc3R5bGUpe1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGVcbiAgICB9XG5cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb3BzTWFuYWdlcjtcbiJdfQ==
