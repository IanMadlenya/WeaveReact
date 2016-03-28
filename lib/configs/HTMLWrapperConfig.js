"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentManager = require("../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTMLWrapperConfig = function HTMLWrapperConfig() {
    _classCallCheck(this, HTMLWrapperConfig);

    //to-do need to add verifier for each Session property to restrict to respective property
    _ComponentManager2.default.createDefaultSessionProperties(this);
};

Weave.registerClass('weavereact.HTMLWrapperConfig', HTMLWrapperConfig, [weavejs.api.core.ILinkableObject]);

exports.default = HTMLWrapperConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSU0sb0JBR0YsU0FIRSxpQkFHRixHQUFhOzBCQUhYLG1CQUdXOzs7QUFDUiwrQkFBaUIsOEJBQWpCLENBQWdELElBQWhELEVBRFE7Q0FBYjs7QUFLSixNQUFNLGFBQU4sQ0FBb0IsOEJBQXBCLEVBQW9ELGlCQUFwRCxFQUFzRSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBdkU7O2tCQUVlIiwiZmlsZSI6IkhUTUxXcmFwcGVyQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5cbmNsYXNzIEhUTUxXcmFwcGVyQ29uZmlne1xuXG5cbiAgICBjb25zdHJ1Y3Rvcigpey8vdG8tZG8gbmVlZCB0byBhZGQgdmVyaWZpZXIgZm9yIGVhY2ggU2Vzc2lvbiBwcm9wZXJ0eSB0byByZXN0cmljdCB0byByZXNwZWN0aXZlIHByb3BlcnR5XG4gICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzKTtcbiAgICB9XG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuSFRNTFdyYXBwZXJDb25maWcnLCBIVE1MV3JhcHBlckNvbmZpZyxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTFdyYXBwZXJDb25maWc7XG4iXX0=
