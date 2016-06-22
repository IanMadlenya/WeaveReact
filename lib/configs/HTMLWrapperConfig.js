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

Weave.registerClass(HTMLWrapperConfig, ['weavereact.HTMLWrapperConfig'], [weavejs.api.core.ILinkableObject], "HTML Wrapper Config");

exports.default = HTMLWrapperConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSU0sb0JBR0YsU0FIRSxpQkFHRixHQUFhOzBCQUhYLG1CQUdXOzs7QUFDUiwrQkFBaUIsOEJBQWpCLENBQWdELElBQWhELEVBRFE7Q0FBYjs7QUFLSixNQUFNLGFBQU4sQ0FBcUIsaUJBQXJCLEVBQXVDLENBQUMsOEJBQUQsQ0FBdkMsRUFBd0UsQ0FBQyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLGVBQWpCLENBQXpFLEVBQTJHLHFCQUEzRzs7a0JBRWUiLCJmaWxlIjoiSFRNTFdyYXBwZXJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi9Db21wb25lbnRNYW5hZ2VyXCI7XG5cblxuY2xhc3MgSFRNTFdyYXBwZXJDb25maWd7XG5cblxuICAgIGNvbnN0cnVjdG9yKCl7Ly90by1kbyBuZWVkIHRvIGFkZCB2ZXJpZmllciBmb3IgZWFjaCBTZXNzaW9uIHByb3BlcnR5IHRvIHJlc3RyaWN0IHRvIHJlc3BlY3RpdmUgcHJvcGVydHlcbiAgICAgICAgIENvbXBvbmVudE1hbmFnZXIuY3JlYXRlRGVmYXVsdFNlc3Npb25Qcm9wZXJ0aWVzKHRoaXMpO1xuICAgIH1cbn1cblxuV2VhdmUucmVnaXN0ZXJDbGFzcyggSFRNTFdyYXBwZXJDb25maWcsWyd3ZWF2ZXJlYWN0LkhUTUxXcmFwcGVyQ29uZmlnJ10sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSxcIkhUTUwgV3JhcHBlciBDb25maWdcIik7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxXcmFwcGVyQ29uZmlnO1xuIl19