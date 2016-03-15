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
            "childEvents": {
                value: {}
            },
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
        value: function getPropsForChild(thisArg, config, configName, index) {
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

            var eventNames = Object.keys(this.childEvents);
            if (eventNames.length > 0) {
                eventNames.map(function (eventName, i) {
                    var _evtObj$callback;

                    var evtObj = this.childEvents[eventName];
                    var context = evtObj.context ? evtObj.context : thisArg;
                    if (!evtObj.bind) obj[eventName] = evtObj.callback.bind(context, config, index);else obj[eventName] = (_evtObj$callback = evtObj.callback).bind.apply(_evtObj$callback, [context, config, index].concat(_toConsumableArray(evtObj.bind)));
                }, this);
            }

            return obj;
        }

        //to-do not sure, does we need to wrap parent Events here?

    }, {
        key: "getProps",
        value: function getProps(thisArg, config, configName, index) {
            var obj = {};

            var keys = Object.keys(this.newProps);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                obj[key] = this.newProps[key];
            }

            var eventNames = Object.keys(this.events);
            if (eventNames.length > 0) {
                eventNames.map(function (eventName, i) {
                    var evtObj = this.events[eventName];
                    var context = evtObj.context ? evtObj.context : thisArg;
                    if (!evtObj.bind) {
                        obj[eventName] = evtObj.callback.bind(context, config, index);
                    } else {
                        var _evtObj$callback2;

                        obj[eventName] = (_evtObj$callback2 = evtObj.callback).bind.apply(_evtObj$callback2, [thisArg, config, index].concat(_toConsumableArray(evtObj.bind)));
                    }
                }, this);
            }
            return obj;
        }
    }, {
        key: "addNewProps",
        value: function addNewProps(propName, value) {
            this.newProps[propName] = value;
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
        value: function addEvent(eventName, callbackFn, bindValues, context) {
            this.events[eventName] = {
                callback: callbackFn,
                bind: bindValues,
                context: context
            };
        }
    }, {
        key: "addChildEvent",
        value: function addChildEvent(eventName, callbackFn, bindValues, context) {
            this.childEvents[eventName] = {
                callback: callbackFn,
                bind: bindValues,
                context: context
            };
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
//# sourceMappingURL=data:application/json;base64,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YixJQVRGLEVBRHVCO2FBQTNCO0FBWUEsbUJBQU8sR0FBUCxDQXRCc0M7Ozs7b0NBNEI5QixVQUFXLE9BQU87QUFDMUIsaUJBQUssUUFBTCxDQUFjLFFBQWQsSUFBMEIsS0FBMUIsQ0FEMEI7Ozs7eUNBUWQ7QUFDWixnQkFBRyxLQUFLLFdBQUwsQ0FBaUIsTUFBakIsR0FBMEIsQ0FBMUIsRUFBNkI7QUFDNUIsdUJBQU8sSUFBUCxDQUQ0QjthQUFoQztBQUdBLG1CQUFPLEtBQVAsQ0FKWTs7Ozt1Q0FNRCxTQUFRO0FBQ25CLGlCQUFLLFdBQUwsZ0NBQXVCLFNBQXZCLENBRG1COzs7O2lDQUtkLFdBQVUsWUFBVyxZQUFXLFNBQVE7QUFDN0MsaUJBQUssTUFBTCxDQUFZLFNBQVosSUFBeUI7QUFDckIsMEJBQVMsVUFBVDtBQUNBLHNCQUFLLFVBQUw7QUFDQSx5QkFBUyxPQUFUO2FBSEosQ0FENkM7Ozs7c0NBUW5DLFdBQVUsWUFBVyxZQUFXLFNBQVE7QUFDbEQsaUJBQUssV0FBTCxDQUFpQixTQUFqQixJQUE4QjtBQUMxQiwwQkFBUyxVQUFUO0FBQ0Esc0JBQUssVUFBTDtBQUNBLHlCQUFTLE9BQVQ7YUFISixDQURrRDs7Ozs4QkFZaEQsS0FBSTtBQUNOLGlCQUFLLElBQUksSUFBSixJQUFZLEdBQWpCLEVBQXNCO0FBQ2xCLHFCQUFLLFFBQUwsQ0FBYyxJQUFkLElBQXNCLElBQUksSUFBSixDQUF0QixDQURrQjthQUF0Qjs7OztXQXJKRjs7O2tCQStKUyIsImZpbGUiOiJQcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb3BzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiY2hpbGRFdmVudHNcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6e31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImV2ZW50c1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTp7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJjaGlsZFByb3BzXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTp7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibmV3UHJvcHNcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOnt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMua2V5UHJvcCA9IFwiXCI7XG4gICAgICAgIHRoaXMub2RkQ2hpbGRyZW4gPSBbXSAvLyBhcnJheSBvZiBvZGQgY2hpbGQgOiAgaW5kZXggfCBDaGlsZE5hbWVcblxuICAgIH1cblxuICAgIGhhc0NoaWxkUHJvcHMoKXtcbiAgICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5jaGlsZFByb3BzKS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGlsZCBjYW4gaG9sZCB0aHJlZSB0eXBlIG9mIHZhbHVlc1xuICAgIC8vIDEuIGRlZmF1bHRWYWx1ZSA6IGNvbW1vbiB2YWx1ZSBmb3IgYWxsIHRoZSBjaGlsZFxuICAgIC8vIDIuIG9kZFZhbHVlOiB2YWx1ZSBmb3Igc2F5IGFjdGl2ZSBjaGlsZHJlbiBvciBzZWxlY3RlZCBjaGlsZHJlbiBhbW9uZyBjaGlsZHJlblxuICAgIC8vIDMuIHVuaXF1ZVZhbHVlKEFycmF5KTpcbiAgICAvLyAgICAzLjEgZGVmYXVsdFZhbHVlOiBudWxsICwgb2RkVmFsdWU6IG51bGwgbmVlZHMgdG8gbnVsbCxcbiAgICAvLyAgICAzLjIgZWFjaCBjaGlsZCB2YWx1ZSBpcyBnb3QgZnJvbSB1bmlxdWVWYWx1ZXMgdXNpbmcgY2hpbGQgaW5kZXhcbiAgICBhZGRDaGlsZFByb3BzKHByb3BOYW1lICwgZGVmYXVsdFZhbHVlLG9kZFZhbHVlLHVuaXF1ZVZhbHVlcyl7XG4gICAgICAgIHRoaXMuY2hpbGRQcm9wc1twcm9wTmFtZV0gPSBbZGVmYXVsdFZhbHVlLG9kZFZhbHVlLHVuaXF1ZVZhbHVlc107XG4gICAgfVxuXG5cbiAgICBnZXRQcm9wc0ZvckNoaWxkKHRoaXNBcmcsY29uZmlnLGNvbmZpZ05hbWUgLGluZGV4KXtcbiAgICAgICAgdmFyIG9kZENoaWxkSW5kZXggPSB0aGlzLm9kZENoaWxkcmVuLmluZGV4T2YoY29uZmlnTmFtZSk7XG4gICAgICAgIGlmIChvZGRDaGlsZEluZGV4ID09IC0xKSBvZGRDaGlsZEluZGV4ID0gdGhpcy5vZGRDaGlsZHJlbi5pbmRleE9mKGluZGV4KTtcblxuICAgICAgICB2YXIgaXNPZGQgPSAgb2RkQ2hpbGRJbmRleCA+IC0xP3RydWU6ZmFsc2U7XG5cbiAgICAgICAgdmFyIG9iaiA9IHt9XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5jaGlsZFByb3BzKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmKHRoaXMuY2hpbGRQcm9wc1trZXldWzBdICE9PSBudWxsKXsvLyBkZWZhdWx0VmFsdWUgfHwgb2RkVmFsdWVcbiAgICAgICAgICAgICAgICBpZihpc09kZClvYmpba2V5XSA9IHRoaXMuY2hpbGRQcm9wc1trZXldWzFdO1xuICAgICAgICAgICAgICAgIGVsc2Ugb2JqW2tleV0gPSB0aGlzLmNoaWxkUHJvcHNba2V5XVswXTtcbiAgICAgICAgICAgICB9ZWxzZXsgLy8gdW5pcXVlIFZhbHVlc1xuICAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy5jaGlsZFByb3BzW2tleV1bMl07XG4gICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWVzW2luZGV4XTtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBldmVudE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jaGlsZEV2ZW50cyk7XG4gICAgICAgIGlmIChldmVudE5hbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZXMubWFwKGZ1bmN0aW9uIChldmVudE5hbWUsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZ0T2JqID0gdGhpcy5jaGlsZEV2ZW50c1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0ID0gZXZ0T2JqLmNvbnRleHQgPyBldnRPYmouY29udGV4dCA6IHRoaXNBcmc7XG4gICAgICAgICAgICAgICAgaWYoIWV2dE9iai5iaW5kKW9ialtldmVudE5hbWVdID0gZXZ0T2JqLmNhbGxiYWNrLmJpbmQoY29udGV4dCwgY29uZmlnLCBpbmRleClcbiAgICAgICAgICAgICAgICBlbHNlIG9ialtldmVudE5hbWVdID0gZXZ0T2JqLmNhbGxiYWNrLmJpbmQoY29udGV4dCwgY29uZmlnLCBpbmRleCAsIC4uLmV2dE9iai5iaW5kKTtcbiAgICAgICAgICAgIH0sdGhpcylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG5cblxuXG4gICAgLy90by1kbyBub3Qgc3VyZSwgZG9lcyB3ZSBuZWVkIHRvIHdyYXAgcGFyZW50IEV2ZW50cyBoZXJlP1xuICAgIGdldFByb3BzKHRoaXNBcmcsY29uZmlnLGNvbmZpZ05hbWUgLGluZGV4KXtcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5uZXdQcm9wcyk7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgb2JqW2tleV0gPSB0aGlzLm5ld1Byb3BzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXZlbnROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKTtcbiAgICAgICAgaWYgKGV2ZW50TmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXZlbnROYW1lcy5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBldnRPYmogPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0ID0gZXZ0T2JqLmNvbnRleHQgPyBldnRPYmouY29udGV4dCA6IHRoaXNBcmc7XG4gICAgICAgICAgICAgICAgaWYoIWV2dE9iai5iaW5kKXtcbiAgICAgICAgICAgICAgICAgICAgb2JqW2V2ZW50TmFtZV0gPSBldnRPYmouY2FsbGJhY2suYmluZChjb250ZXh0LCBjb25maWcsIGluZGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqW2V2ZW50TmFtZV0gPSAgZXZ0T2JqLmNhbGxiYWNrLmJpbmQodGhpc0FyZywgY29uZmlnLCBpbmRleCAsIC4uLmV2dE9iai5iaW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LHRoaXMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcblxuICAgIH1cblxuXG5cbiAgICBhZGROZXdQcm9wcyhwcm9wTmFtZSAsIHZhbHVlICl7XG4gICAgICAgIHRoaXMubmV3UHJvcHNbcHJvcE5hbWVdID0gdmFsdWU7XG4gICAgfVxuXG5cblxuXG5cbiAgICBoYXNPZGRDaGlsZHJlbigpe1xuICAgICAgICBpZih0aGlzLm9kZENoaWxkcmVuLmxlbmd0aCA+IDAgKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYWRkT2RkQ2hpbGRyZW4oaW5kaWNlcyl7XG4gICAgICAgIHRoaXMub2RkQ2hpbGRyZW4gPSBbLi4uaW5kaWNlc107XG4gICAgfVxuXG5cbiAgICBhZGRFdmVudChldmVudE5hbWUsY2FsbGJhY2tGbixiaW5kVmFsdWVzLGNvbnRleHQpe1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6Y2FsbGJhY2tGbixcbiAgICAgICAgICAgIGJpbmQ6YmluZFZhbHVlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENoaWxkRXZlbnQoZXZlbnROYW1lLGNhbGxiYWNrRm4sYmluZFZhbHVlcyxjb250ZXh0KXtcbiAgICAgICAgdGhpcy5jaGlsZEV2ZW50c1tldmVudE5hbWVdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6Y2FsbGJhY2tGbixcbiAgICAgICAgICAgIGJpbmQ6YmluZFZhbHVlcyxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG4gICAgbWVyZ2Uob2JqKXtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIHRoaXMubmV3UHJvcHNbYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvcHM7XG4iXX0=
