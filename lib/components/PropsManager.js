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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb3BzTWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU07QUFDRixhQURFLFlBQ0YsR0FBYzs4QkFEWixjQUNZOztBQUNWLGFBQUssR0FBTCxHQUFXLEVBQVgsQ0FEVTtBQUVWLGFBQUssT0FBTCxHQUFlLEVBQWYsQ0FGVTtBQUdWLGFBQUssR0FBTCxHQUFXLEVBQVgsQ0FIVTtBQUlWLGFBQUssT0FBTCxHQUFlLEVBQWYsQ0FKVTtBQUtWLGFBQUssS0FBTCxHQUFhLEVBQWIsQ0FMVTtBQU1WLGFBQUssTUFBTCxHQUFjLEVBQWQ7Ozs7QUFOVSxjQVVULENBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDM0IsbUJBQU87QUFDSCx1QkFBTztBQUNILDhCQUFVLEVBQVY7QUFDQSw0QkFBUSxFQUFSO2lCQUZKO2FBREo7QUFNQSxtQkFBTztBQUNILHVCQUFNO0FBQ0YsZ0NBQVksRUFBWjtBQUNBLDRCQUFPLEVBQVA7aUJBRko7YUFESjtTQVBILEVBVlM7S0FBZDs7aUJBREU7O3dDQTRCYTtBQUNYLGlCQUFLLEdBQUwsQ0FBUyxRQUFULEdBQW9CLEVBQXBCLENBRFc7QUFFWCxpQkFBSyxHQUFMLENBQVMsTUFBVCxHQUFrQixFQUFsQixDQUZXOzs7Ozs7OztvQ0FPSCxVQUFTLE9BQU07QUFDdkIsZ0JBQUksUUFBUSxLQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLE9BQXBCLENBQTRCLFFBQTVCLENBQVIsQ0FEbUI7QUFFdkIsZ0JBQUcsVUFBVSxDQUFDLENBQUQsRUFBRztBQUNaLHFCQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLElBQXBCLENBQXlCLFFBQXpCLEVBRFk7QUFFWixvQkFBSSxXQUFXLEtBQUssR0FBTCxDQUFTLFVBQVQsQ0FBb0IsT0FBcEIsQ0FBNEIsUUFBNUIsQ0FBWCxDQUZRO0FBR1oscUJBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsUUFBaEIsSUFBNEIsS0FBNUIsQ0FIWTthQUFoQjs7Ozs7OztvQ0FRUSxVQUFTLFlBQVcsT0FBTTs7QUFFbEMsZ0JBQUcsS0FBSCxFQUFTO0FBQ0wscUJBQUssYUFBTCxHQURLO2FBQVQ7QUFHQSxnQkFBRyxPQUFPLFFBQVAsS0FBb0IsUUFBcEIsRUFDQyxXQUFXLE9BQU8sUUFBUCxDQUFYLENBREo7QUFFQSxnQkFBSSxhQUFhLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBMEIsUUFBMUIsQ0FBYixDQVA4QjtBQVFsQyxnQkFBRyxlQUFlLENBQUMsQ0FBRCxFQUFHO0FBQ2pCLHFCQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLElBQWxCLENBQXVCLFFBQXZCLEVBRGlCO0FBRWpCLG9CQUFJLFdBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixPQUFsQixDQUEwQixRQUExQixDQUFYLENBRmE7QUFHakIscUJBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsUUFBaEIsSUFBNEIsVUFBNUIsQ0FIaUI7YUFBckI7Ozs7b0NBT1EsVUFBUyxPQUFNO0FBQ3ZCLGlCQUFLLEdBQUwsQ0FBUyxRQUFULElBQXFCLEtBQXJCLENBRHVCOzs7O2lDQUlsQixXQUFVLFlBQVcsWUFBVztBQUNyQyxpQkFBSyxNQUFMLENBQVksU0FBWixJQUF5QjtBQUNyQiwwQkFBUyxVQUFUO0FBQ0Esc0JBQUssVUFBTDthQUZKLENBRHFDOzs7O29DQVE3QixPQUFNO0FBQ2QsaUJBQUssS0FBTCxHQUFhLEtBQWIsQ0FEYzs7OztXQXhFaEI7OztrQkFtRlMiLCJmaWxlIjoiUHJvcHNNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvcHNNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uZXcgPSB7fTtcbiAgICAgICAgdGhpcy5tdXRhdGVkID0ge307XG4gICAgICAgIHRoaXMua2V5ID0gW107XG4gICAgICAgIHRoaXMuZGVmYXVsdCA9IHt9O1xuICAgICAgICB0aGlzLnN0eWxlID0ge31cbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcblxuICAgICAgICAvLyBvZGQ6IFByb3Blb3J0aWVzIHdoaWNoIGhhcyB0byBiZSB1bmlxdWVzIGZvciBjZXJ0YWluIGNoaWxkXG4gICAgICAgIC8vIGFsbDogUHJvcGVvcnRpZXMgd2hpY2ggaGFzIHRvIGJlIHVuaXF1ZXMgZm9yIGFsbCBjaGlsZFxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJvZGRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFsbFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6e1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOltdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBcbiAgICByZXNldE9kZFByb3BzKCl7XG4gICAgICAgIHRoaXMub2RkLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMub2RkLnZhbHVlcyA9IFtdO1xuICAgIH1cblxuICAgIC8vdmFsdWU6IHVuZGVmaW5lZCB3aWxsIG1ha2UgY29uZmlnTmFtZSBhcyBrZXlWYWx1ZVxuICAgIC8vcHJvcE5hbWUgPSAnaW5kZXgnIGFuZCB2YWx1ZTp1bmRlZmluZWQgbWFrZXMgaW5kZXggYXMga2V5VmF1ZVxuICAgIGFkZEtleVByb3BzKHByb3BOYW1lLHZhbHVlKXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hbGwucHJvcGVydGllcy5pbmRleE9mKHByb3BOYW1lKTtcbiAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcbiAgICAgICAgICAgIHRoaXMuYWxsLnByb3BlcnRpZXMucHVzaChwcm9wTmFtZSk7XG4gICAgICAgICAgICB2YXIgdmFsSW5kZXggPSB0aGlzLmFsbC5wcm9wZXJ0aWVzLmluZGV4T2YocHJvcE5hbWUpO1xuICAgICAgICAgICAgdGhpcy5hbGwudmFsdWVzW3ZhbEluZGV4XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy90by1kbzogcmVwbGFjZSByZXNldCB0ZW1wIHNvbHV0aW9uIFxuICAgIGFkZE9kZENoaWxkKGNoaWxkS2V5LGNoaWxkVmFsdWUscmVzZXQpe1xuICAgICAgICAvL3RvLWRvIGFkZCB3YXJuaW5nIGlmIGNoaWxkVmFsdWUgaXMgbWlzc2VkXG4gICAgICAgIGlmKHJlc2V0KXtcbiAgICAgICAgICAgIHRoaXMucmVzZXRPZGRQcm9wcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZiBjaGlsZEtleSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICBjaGlsZEtleSA9IFN0cmluZyhjaGlsZEtleSk7XG4gICAgICAgIHZhciBjaGlsZEluZGV4ID0gdGhpcy5vZGQuY2hpbGRyZW4uaW5kZXhPZihjaGlsZEtleSlcbiAgICAgICAgaWYoY2hpbGRJbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgdGhpcy5vZGQuY2hpbGRyZW4ucHVzaChjaGlsZEtleSk7XG4gICAgICAgICAgICB2YXIgdmFsSW5kZXggPSB0aGlzLm9kZC5jaGlsZHJlbi5pbmRleE9mKGNoaWxkS2V5KVxuICAgICAgICAgICAgdGhpcy5vZGQudmFsdWVzW3ZhbEluZGV4XSA9IGNoaWxkVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGROZXdQcm9wcyhwcm9wTmFtZSx2YWx1ZSl7XG4gICAgICAgIHRoaXMubmV3W3Byb3BOYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBhZGRFdmVudChldmVudE5hbWUsY2FsbGJhY2tGbixiaW5kVmFsdWVzKXtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrOmNhbGxiYWNrRm4sXG4gICAgICAgICAgICBiaW5kOmJpbmRWYWx1ZXNcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdXBkYXRlU3R5bGUoc3R5bGUpe1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGVcbiAgICB9XG5cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb3BzTWFuYWdlcjtcbiJdfQ==
