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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb3BzTWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU07QUFDRixhQURFLFlBQ0YsR0FBYzs4QkFEWixjQUNZOztBQUNWLGFBQUssR0FBTCxHQUFXLEVBQVgsQ0FEVTtBQUVWLGFBQUssT0FBTCxHQUFlLEVBQWYsQ0FGVTtBQUdWLGFBQUssR0FBTCxHQUFXLEVBQVgsQ0FIVTtBQUlWLGFBQUssT0FBTCxHQUFlLEVBQWYsQ0FKVTtBQUtWLGFBQUssS0FBTCxHQUFhLEVBQWIsQ0FMVTs7QUFRVCxlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCO0FBQzNCLG1CQUFPO0FBQ0gsdUJBQU87QUFDSCw4QkFBVSxFQUFWO0FBQ0EsNEJBQVEsRUFBUjtpQkFGSjthQURKO0FBTUEsbUJBQU87QUFDSCx1QkFBTTtBQUNGLGdDQUFZLEVBQVo7QUFDQSw0QkFBTyxFQUFQO2lCQUZKO2FBREo7U0FQSCxFQVJTO0tBQWQ7O2lCQURFOztvQ0EwQlUsVUFBUyxPQUFNO0FBQ3ZCLGdCQUFJLFFBQVEsS0FBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixPQUFwQixDQUE0QixRQUE1QixDQUFSLENBRG1CO0FBRXZCLGdCQUFHLFVBQVUsQ0FBQyxDQUFELEVBQUc7QUFDWixxQkFBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixJQUFwQixDQUF5QixRQUF6QixFQURZO0FBRVosb0JBQUksV0FBVyxLQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLE9BQXBCLENBQTRCLFFBQTVCLENBQVgsQ0FGUTtBQUdaLHFCQUFLLEdBQUwsQ0FBUyxNQUFULENBQWdCLFFBQWhCLElBQTRCLEtBQTVCLENBSFk7YUFBaEI7Ozs7b0NBT1EsVUFBUyxZQUFXOztBQUU1QixnQkFBSSxhQUFhLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBMEIsUUFBMUIsQ0FBYixDQUZ3QjtBQUc1QixnQkFBRyxlQUFlLENBQUMsQ0FBRCxFQUFHO0FBQ2pCLHFCQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLElBQWxCLENBQXVCLFFBQXZCLEVBRGlCO0FBRWpCLG9CQUFJLFdBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixPQUFsQixDQUEwQixRQUExQixDQUFYLENBRmE7QUFHakIscUJBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsUUFBaEIsSUFBNEIsVUFBNUIsQ0FIaUI7YUFBckI7Ozs7b0NBT1EsVUFBUyxPQUFNO0FBQ3ZCLGlCQUFLLEdBQUwsQ0FBUyxRQUFULElBQXFCLEtBQXJCLENBRHVCOzs7O29DQUtmLE9BQU07QUFDZCxpQkFBSyxLQUFMLEdBQWEsS0FBYixDQURjOzs7O1dBbERoQjs7O2tCQTZEUyIsImZpbGUiOiJQcm9wc01hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9wc01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5ldyA9IHt9O1xuICAgICAgICB0aGlzLm11dGF0ZWQgPSB7fTtcbiAgICAgICAgdGhpcy5rZXkgPSBbXTtcbiAgICAgICAgdGhpcy5kZWZhdWx0ID0ge307XG4gICAgICAgIHRoaXMuc3R5bGUgPSB7fVxuXG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwib2RkXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbGxcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOntcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogW10sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczpbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBhZGRLZXlQcm9wcyhwcm9wTmFtZSx2YWx1ZSl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWxsLnByb3BlcnRpZXMuaW5kZXhPZihwcm9wTmFtZSk7XG4gICAgICAgIGlmKGluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICB0aGlzLmFsbC5wcm9wZXJ0aWVzLnB1c2gocHJvcE5hbWUpO1xuICAgICAgICAgICAgdmFyIHZhbEluZGV4ID0gdGhpcy5hbGwucHJvcGVydGllcy5pbmRleE9mKHByb3BOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuYWxsLnZhbHVlc1t2YWxJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE9kZENoaWxkKGNoaWxkS2V5LGNoaWxkVmFsdWUpe1xuICAgICAgICAvL3RvLWRvIGFkZCB3YXJuaW5nIGlmIGNoaWxkVmFsdWUgaXMgbWlzc2VkXG4gICAgICAgIHZhciBjaGlsZEluZGV4ID0gdGhpcy5vZGQuY2hpbGRyZW4uaW5kZXhPZihjaGlsZEtleSlcbiAgICAgICAgaWYoY2hpbGRJbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgdGhpcy5vZGQuY2hpbGRyZW4ucHVzaChjaGlsZEtleSk7XG4gICAgICAgICAgICB2YXIgdmFsSW5kZXggPSB0aGlzLm9kZC5jaGlsZHJlbi5pbmRleE9mKGNoaWxkS2V5KVxuICAgICAgICAgICAgdGhpcy5vZGQudmFsdWVzW3ZhbEluZGV4XSA9IGNoaWxkVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGROZXdQcm9wcyhwcm9wTmFtZSx2YWx1ZSl7XG4gICAgICAgIHRoaXMubmV3W3Byb3BOYW1lXSA9IHZhbHVlO1xuICAgIH1cblxuXG4gICAgdXBkYXRlU3R5bGUoc3R5bGUpe1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGVcbiAgICB9XG5cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb3BzTWFuYWdlcjtcbiJdfQ==
