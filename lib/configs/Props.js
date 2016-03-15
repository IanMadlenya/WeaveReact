"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Props = function () {
    function Props() {
        _classCallCheck(this, Props);

        Object.defineProperties(this, {
            "events": {
                value: {}
            }
        });

        Object.defineProperties(this, {
            "childProps": {
                value: {}
            },
            "newProps": {
                value: {}
            }
        });

        this.keyProp = "";
        this.oddChildren = []; // array of odd child :  index | ChildName
    }

    _createClass(Props, [{
        key: "hasChildProps",
        value: function hasChildProps() {
            if (Object.keys(this.childProps).length > 0) return true;else return false;
        }

        // child can hold three type of values
        // 1. defaultValue : common value for all the child
        // 2. oddValue: value for say active children or selected children among children
        // 3. uniqueValue(Array):
        //    3.1 defaultValue: null , oddValue: null needs to null,
        //    3.2 each child value is got from uniqueValues using child index

    }, {
        key: "addChildProps",
        value: function addChildProps(propName, defaultValue, oddValue, uniqueValues) {
            this.childProps[propName] = [defaultValue, oddValue, uniqueValues];
        }
    }, {
        key: "getPropsForChild",
        value: function getPropsForChild(configName, index) {
            var oddChildIndex = this.oddChildren.indexOf(configName);
            if (oddChildIndex == -1) oddChildIndex = this.oddChildren.indexOf(index);

            var isOdd = oddChildIndex > -1 ? true : false;

            var obj = {};
            var keys = Object.keys(this.childProps);
            for (var i = 0; i < keys.length; i++) {

                var key = keys[i];
                if (this.childProps[key][0] !== null) {
                    // defaultValue || oddValue
                    if (isOdd) obj[key] = this.childProps[key][1];else obj[key] = this.childProps[key][0];
                } else {
                    // unique Values
                    var values = this.childProps[key][2];
                    obj[key] = values[index];
                }
            }
            return obj;
        }
    }, {
        key: "addNewProps",
        value: function addNewProps(propName, value) {
            this.newProps[propName] = value;
        }
    }, {
        key: "getNewProps",
        value: function getNewProps() {
            return this.newProps;
        }
    }, {
        key: "hasOddChildren",
        value: function hasOddChildren() {
            if (this.oddChildren.length > 0) {
                return true;
            }
            return false;
        }
    }, {
        key: "addOddChildren",
        value: function addOddChildren(indices) {
            this.oddChildren = [].concat(_toConsumableArray(indices));
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
        key: "getEventProps",
        value: function getEventProps(thisArg, config, index) {
            var eventObj = {};

            var eventNames = Object.keys(this.events);
            if (eventNames.length > 0) {
                eventNames.map(function (eventName, i) {
                    var _evtObj$callback;

                    var evtObj = this.events[eventName];
                    if (!evtObj.bind) eventObj[eventName] = evtObj.callback.bind(thisArg, config, index);else (_evtObj$callback = evtObj.callback).bind.apply(_evtObj$callback, [thisArg, config, index].concat(_toConsumableArray(evtObj.bind)));
                }, this);
            }
            return eventObj;
        }
    }, {
        key: "merge",
        value: function merge(obj) {
            for (var attr in obj) {
                this.newProps[attr] = obj[attr];
            }
        }
    }]);

    return Props;
}();

exports.default = Props;
//# sourceMappingURL=data:application/json;base64,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L0IsZ0JBQUksYUFBYSxPQUFPLElBQVAsQ0FBWSxLQUFLLE1BQUwsQ0FBekIsQ0FIMkI7QUFJL0IsZ0JBQUksV0FBVyxNQUFYLEdBQW9CLENBQXBCLEVBQXVCO0FBQ3ZCLDJCQUFXLEdBQVgsQ0FBZSxVQUFVLFNBQVYsRUFBcUIsQ0FBckIsRUFBd0I7OztBQUNuQyx3QkFBSSxTQUFTLEtBQUssTUFBTCxDQUFZLFNBQVosQ0FBVCxDQUQrQjtBQUVuQyx3QkFBRyxDQUFDLE9BQU8sSUFBUCxFQUFZLFNBQVMsU0FBVCxJQUFzQixPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsQ0FBcUIsT0FBckIsRUFBOEIsTUFBOUIsRUFBc0MsS0FBdEMsQ0FBdEIsQ0FBaEIsS0FDSywyQkFBTyxRQUFQLEVBQWdCLElBQWhCLDBCQUFxQixTQUFTLFFBQVEsaUNBQVcsT0FBTyxJQUFQLEVBQWpELEVBREw7aUJBRlcsRUFJYixJQUpGLEVBRHVCO2FBQTNCO0FBT0EsbUJBQU8sUUFBUCxDQVgrQjs7Ozs4QkFpQjdCLEtBQUk7QUFDTixpQkFBSyxJQUFJLElBQUosSUFBWSxHQUFqQixFQUFzQjtBQUNsQixxQkFBSyxRQUFMLENBQWMsSUFBZCxJQUFzQixJQUFJLElBQUosQ0FBdEIsQ0FEa0I7YUFBdEI7Ozs7V0E3R0Y7OztrQkF1SFMiLCJmaWxlIjoiUHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9wcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImV2ZW50c1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTp7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJjaGlsZFByb3BzXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTp7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibmV3UHJvcHNcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOnt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMua2V5UHJvcCA9IFwiXCI7XG4gICAgICAgIHRoaXMub2RkQ2hpbGRyZW4gPSBbXSAvLyBhcnJheSBvZiBvZGQgY2hpbGQgOiAgaW5kZXggfCBDaGlsZE5hbWVcblxuICAgIH1cblxuICAgIGhhc0NoaWxkUHJvcHMoKXtcbiAgICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5jaGlsZFByb3BzKS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGlsZCBjYW4gaG9sZCB0aHJlZSB0eXBlIG9mIHZhbHVlc1xuICAgIC8vIDEuIGRlZmF1bHRWYWx1ZSA6IGNvbW1vbiB2YWx1ZSBmb3IgYWxsIHRoZSBjaGlsZFxuICAgIC8vIDIuIG9kZFZhbHVlOiB2YWx1ZSBmb3Igc2F5IGFjdGl2ZSBjaGlsZHJlbiBvciBzZWxlY3RlZCBjaGlsZHJlbiBhbW9uZyBjaGlsZHJlblxuICAgIC8vIDMuIHVuaXF1ZVZhbHVlKEFycmF5KTpcbiAgICAvLyAgICAzLjEgZGVmYXVsdFZhbHVlOiBudWxsICwgb2RkVmFsdWU6IG51bGwgbmVlZHMgdG8gbnVsbCxcbiAgICAvLyAgICAzLjIgZWFjaCBjaGlsZCB2YWx1ZSBpcyBnb3QgZnJvbSB1bmlxdWVWYWx1ZXMgdXNpbmcgY2hpbGQgaW5kZXhcbiAgICBhZGRDaGlsZFByb3BzKHByb3BOYW1lICwgZGVmYXVsdFZhbHVlLG9kZFZhbHVlLHVuaXF1ZVZhbHVlcyl7XG4gICAgICAgIHRoaXMuY2hpbGRQcm9wc1twcm9wTmFtZV0gPSBbZGVmYXVsdFZhbHVlLG9kZFZhbHVlLHVuaXF1ZVZhbHVlc107XG4gICAgfVxuXG5cbiAgICBnZXRQcm9wc0ZvckNoaWxkKGNvbmZpZ05hbWUgLGluZGV4KXtcbiAgICAgICAgdmFyIG9kZENoaWxkSW5kZXggPSB0aGlzLm9kZENoaWxkcmVuLmluZGV4T2YoY29uZmlnTmFtZSk7XG4gICAgICAgIGlmIChvZGRDaGlsZEluZGV4ID09IC0xKSBvZGRDaGlsZEluZGV4ID0gdGhpcy5vZGRDaGlsZHJlbi5pbmRleE9mKGluZGV4KTtcblxuICAgICAgICB2YXIgaXNPZGQgPSAgb2RkQ2hpbGRJbmRleCA+IC0xP3RydWU6ZmFsc2U7XG5cbiAgICAgICAgdmFyIG9iaiA9IHt9XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5jaGlsZFByb3BzKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmKHRoaXMuY2hpbGRQcm9wc1trZXldWzBdICE9PSBudWxsKXsvLyBkZWZhdWx0VmFsdWUgfHwgb2RkVmFsdWVcbiAgICAgICAgICAgICAgICBpZihpc09kZClvYmpba2V5XSA9IHRoaXMuY2hpbGRQcm9wc1trZXldWzFdO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqW2tleV0gPSB0aGlzLmNoaWxkUHJvcHNba2V5XVswXTtcbiAgICAgICAgICAgICB9ZWxzZXsgLy8gdW5pcXVlIFZhbHVlc1xuICAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy5jaGlsZFByb3BzW2tleV1bMl07XG4gICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWVzW2luZGV4XTtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGFkZE5ld1Byb3BzKHByb3BOYW1lICwgdmFsdWUgKXtcbiAgICAgICAgdGhpcy5uZXdQcm9wc1twcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cblxuICAgIGdldE5ld1Byb3BzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm5ld1Byb3BzO1xuICAgIH1cblxuXG4gICAgaGFzT2RkQ2hpbGRyZW4oKXtcbiAgICAgICAgaWYodGhpcy5vZGRDaGlsZHJlbi5sZW5ndGggPiAwICl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFkZE9kZENoaWxkcmVuKGluZGljZXMpe1xuICAgICAgICB0aGlzLm9kZENoaWxkcmVuID0gWy4uLmluZGljZXNdO1xuICAgIH1cblxuXG4gICAgYWRkRXZlbnQoZXZlbnROYW1lLGNhbGxiYWNrRm4sYmluZFZhbHVlcyl7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjazpjYWxsYmFja0ZuLFxuICAgICAgICAgICAgYmluZDpiaW5kVmFsdWVzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRFdmVudFByb3BzKHRoaXNBcmcsY29uZmlnLGluZGV4KXtcbiAgICAgICAgdmFyIGV2ZW50T2JqID0ge307XG5cbiAgICAgICAgdmFyIGV2ZW50TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmV2ZW50cyk7XG4gICAgICAgIGlmIChldmVudE5hbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZXMubWFwKGZ1bmN0aW9uIChldmVudE5hbWUsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZ0T2JqID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZighZXZ0T2JqLmJpbmQpZXZlbnRPYmpbZXZlbnROYW1lXSA9IGV2dE9iai5jYWxsYmFjay5iaW5kKHRoaXNBcmcsIGNvbmZpZywgaW5kZXgpXG4gICAgICAgICAgICAgICAgZWxzZSBldnRPYmouY2FsbGJhY2suYmluZCh0aGlzQXJnLCBjb25maWcsIGluZGV4ICwgLi4uZXZ0T2JqLmJpbmQpO1xuICAgICAgICAgICAgfSx0aGlzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudE9iajtcblxuICAgIH1cblxuXG5cbiAgICBtZXJnZShvYmope1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgdGhpcy5uZXdQcm9wc1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9wcztcbiJdfQ==
