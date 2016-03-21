"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractConfig = function AbstractConfig() {
    _classCallCheck(this, AbstractConfig);

    _ComponentManager2.default.createDefaultSessionProperties(this);
};

exports.default = AbstractConfig;

//This Function makes this class as SessionClass

Weave.registerClass('weavereact.AbstractConfig', AbstractConfig, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFic3RyYWN0Q29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBRU0saUJBQ0YsU0FERSxjQUNGLEdBQWM7MEJBRFosZ0JBQ1k7O0FBQ1YsK0JBQWlCLDhCQUFqQixDQUFnRCxJQUFoRCxFQURVO0NBQWQ7O2tCQUtXOzs7O0FBSWYsTUFBTSxhQUFOLENBQW9CLDJCQUFwQixFQUFpRCxjQUFqRCxFQUFnRSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBakUiLCJmaWxlIjoiQWJzdHJhY3RDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5jbGFzcyBBYnN0cmFjdENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RDb25maWdcblxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuQWJzdHJhY3RDb25maWcnLCBBYnN0cmFjdENvbmZpZyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuIl19
