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
//# sourceMappingURL=data:application/json;base64,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L0IsZ0JBQUksYUFBYSxPQUFPLElBQVAsQ0FBWSxLQUFLLE1BQUwsQ0FBekIsQ0FIMkI7QUFJL0IsZ0JBQUksV0FBVyxNQUFYLEdBQW9CLENBQXBCLEVBQXVCO0FBQ3ZCLDJCQUFXLEdBQVgsQ0FBZSxVQUFVLFNBQVYsRUFBcUIsQ0FBckIsRUFBd0I7OztBQUNuQyx3QkFBSSxTQUFTLEtBQUssTUFBTCxDQUFZLFNBQVosQ0FBVCxDQUQrQjtBQUVuQyx3QkFBRyxDQUFDLE9BQU8sSUFBUCxFQUFZLFNBQVMsU0FBVCxJQUFzQixPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsQ0FBcUIsT0FBckIsRUFBOEIsTUFBOUIsRUFBc0MsS0FBdEMsQ0FBdEIsQ0FBaEIsS0FDSywyQkFBTyxRQUFQLEVBQWdCLElBQWhCLDBCQUFxQixTQUFTLFFBQVEsaUNBQVcsT0FBTyxJQUFQLEVBQWpELEVBREw7aUJBRlcsRUFJYixJQUpGLEVBRHVCO2FBQTNCO0FBT0EsbUJBQU8sUUFBUCxDQVgrQjs7Ozs4QkFpQjdCLEtBQUk7QUFDTixpQkFBSyxJQUFJLElBQUosSUFBWSxHQUFqQixFQUFzQjtBQUNsQixxQkFBSyxRQUFMLENBQWMsSUFBZCxJQUFzQixJQUFJLElBQUosQ0FBdEIsQ0FEa0I7YUFBdEI7Ozs7V0E3R0Y7OztrQkF1SFMiLCJmaWxlIjoiUHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9wcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImV2ZW50c1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTp7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImNoaWxkUHJvcHNcIjogeyBcbiAgICAgICAgICAgICAgICB2YWx1ZTp7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibmV3UHJvcHNcIjogeyBcbiAgICAgICAgICAgICAgICB2YWx1ZTp7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMua2V5UHJvcCA9IFwiXCI7XG4gICAgICAgIHRoaXMub2RkQ2hpbGRyZW4gPSBbXSAvLyBhcnJheSBvZiBvZGQgY2hpbGQgOiAgaW5kZXggfCBDaGlsZE5hbWVcblxuICAgIH0gXG4gICAgXG4gICAgaGFzQ2hpbGRQcm9wcygpe1xuICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLmNoaWxkUHJvcHMpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICAvLyBjaGlsZCBjYW4gaG9sZCB0aHJlZSB0eXBlIG9mIHZhbHVlc1xuICAgIC8vIDEuIGRlZmF1bHRWYWx1ZSA6IGNvbW1vbiB2YWx1ZSBmb3IgYWxsIHRoZSBjaGlsZFxuICAgIC8vIDIuIG9kZFZhbHVlOiB2YWx1ZSBmb3Igc2F5IGFjdGl2ZSBjaGlsZHJlbiBvciBzZWxlY3RlZCBjaGlsZHJlbiBhbW9uZyBjaGlsZHJlblxuICAgIC8vIDMuIHVuaXF1ZVZhbHVlKEFycmF5KTogXG4gICAgLy8gICAgMy4xIGRlZmF1bHRWYWx1ZTogbnVsbCAsIG9kZFZhbHVlOiBudWxsIG5lZWRzIHRvIG51bGwsXG4gICAgLy8gICAgMy4yIGVhY2ggY2hpbGQgdmFsdWUgaXMgZ290IGZyb20gdW5pcXVlVmFsdWVzIHVzaW5nIGNoaWxkIGluZGV4XG4gICAgYWRkQ2hpbGRQcm9wcyhwcm9wTmFtZSAsIGRlZmF1bHRWYWx1ZSxvZGRWYWx1ZSx1bmlxdWVWYWx1ZXMpe1xuICAgICAgICB0aGlzLmNoaWxkUHJvcHNbcHJvcE5hbWVdID0gW2RlZmF1bHRWYWx1ZSxvZGRWYWx1ZSx1bmlxdWVWYWx1ZXNdO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBnZXRQcm9wc0ZvckNoaWxkKGNvbmZpZ05hbWUgLGluZGV4KXtcbiAgICAgICAgdmFyIG9kZENoaWxkSW5kZXggPSB0aGlzLm9kZENoaWxkcmVuLmluZGV4T2YoY29uZmlnTmFtZSk7XG4gICAgICAgIGlmIChvZGRDaGlsZEluZGV4ID09IC0xKSBvZGRDaGlsZEluZGV4ID0gdGhpcy5vZGRDaGlsZHJlbi5pbmRleE9mKGluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIHZhciBpc09kZCA9ICBvZGRDaGlsZEluZGV4ID4gLTE/dHJ1ZTpmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHZhciBvYmogPSB7fVxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY2hpbGRQcm9wcyk7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmKHRoaXMuY2hpbGRQcm9wc1trZXldWzBdICE9PSBudWxsKXsvLyBkZWZhdWx0VmFsdWUgfHwgb2RkVmFsdWVcbiAgICAgICAgICAgICAgICBpZihpc09kZClvYmpba2V5XSA9IHRoaXMuY2hpbGRQcm9wc1trZXldWzFdO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqW2tleV0gPSB0aGlzLmNoaWxkUHJvcHNba2V5XVswXTtcbiAgICAgICAgICAgICB9ZWxzZXsgLy8gdW5pcXVlIFZhbHVlc1xuICAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy5jaGlsZFByb3BzW2tleV1bMl07XG4gICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWVzW2luZGV4XTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBcbiAgICBhZGROZXdQcm9wcyhwcm9wTmFtZSAsIHZhbHVlICl7XG4gICAgICAgIHRoaXMubmV3UHJvcHNbcHJvcE5hbWVdID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGdldE5ld1Byb3BzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm5ld1Byb3BzO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBoYXNPZGRDaGlsZHJlbigpe1xuICAgICAgICBpZih0aGlzLm9kZENoaWxkcmVuLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYWRkT2RkQ2hpbGRyZW4oaW5kaWNlcyl7XG4gICAgICAgIHRoaXMub2RkQ2hpbGRyZW4gPSBbLi4uaW5kaWNlc107XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGFkZEV2ZW50KGV2ZW50TmFtZSxjYWxsYmFja0ZuLGJpbmRWYWx1ZXMpe1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6Y2FsbGJhY2tGbixcbiAgICAgICAgICAgIGJpbmQ6YmluZFZhbHVlc1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldEV2ZW50UHJvcHModGhpc0FyZyxjb25maWcsaW5kZXgpe1xuICAgICAgICB2YXIgZXZlbnRPYmogPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHZhciBldmVudE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5ldmVudHMpO1xuICAgICAgICBpZiAoZXZlbnROYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBldmVudE5hbWVzLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2dE9iaiA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYoIWV2dE9iai5iaW5kKWV2ZW50T2JqW2V2ZW50TmFtZV0gPSBldnRPYmouY2FsbGJhY2suYmluZCh0aGlzQXJnLCBjb25maWcsIGluZGV4KVxuICAgICAgICAgICAgICAgIGVsc2UgZXZ0T2JqLmNhbGxiYWNrLmJpbmQodGhpc0FyZywgY29uZmlnLCBpbmRleCAsIC4uLmV2dE9iai5iaW5kKTtcbiAgICAgICAgICAgIH0sdGhpcylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnRPYmo7XG4gICAgICAgICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgbWVyZ2Uob2JqKXtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIHRoaXMubmV3UHJvcHNbYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9wcztcbiJdfQ==
