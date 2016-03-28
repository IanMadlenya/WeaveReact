"use strict";

var _appendVendorPrefix = require("./appendVendorPrefix");

var _appendVendorPrefix2 = _interopRequireDefault(_appendVendorPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function Style() {}

    function merge(into, obj) {
        for (var attr in obj) {
            into[attr] = obj[attr];
        }

        return into;
    }

    Style.mergeStyleObjects = function (into, obj, appendVendorPrefix) {
        var styleObject = merge(into, obj);
        if (appendVendorPrefix) return Style.appendVendorPrefix(styleObject);else return styleObject;
    };

    /*convenience function to get a particular sessioned property of a sessioned object*/
    Style.getStyleStateFor = function (sessionObj, properties, appendVendorPrefix) {
        var state = {};
        if (properties.constructor === Array) {
            properties.map(function (propertyName) {
                if (sessionObj[propertyName].state) {
                    if (sessionObj[propertyName].constructor === weavejs.core.LinkableVariable) {
                        state = Style.mergeStyleObjects(state, sessionObj[propertyName].state);
                    } else state[propertyName] = sessionObj[propertyName].state;
                }
            });
        } else if (properties instanceof String) {
            state[properties] = sessionObj[properties].state;
        }
        if (appendVendorPrefix) return Style.appendVendorPrefix(state);
        return state;
    };

    Style.getStyle = function (style) {
        return (0, _appendVendorPrefix2.default)(style);
    };

    Style.appendVendorPrefix = function (style) {
        return (0, _appendVendorPrefix2.default)(style);
    };

    Style.alignChildren = function (style, align) {
        var stateObj = style.state;
        if (stateObj.display === "flex") {
            if (align === "left") stateObj["justifyContent"] = "flex-start";else if (align === "center") stateObj["justifyContent"] = "center";else if (align === "right") stateObj["justifyContent"] = "flex-end";else if (align === "justify") stateObj["justifyContent"] = "space-around";
        }
        style.state = stateObj;
        // to-do for CSS with float values
    };

    // due to bootstrap Navbar zindex (1029) value we have to give 1030 for overlay
    Style.overlayContainer = function (isOpen) {
        return (0, _appendVendorPrefix2.default)({
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            background: 'rgba(0, 0, 0, 0.1)',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transition: isOpen ? 'opacity 0.5s' : 'opacity 0.5s, transform 0.1s 0.5s',
            zIndex: 1030
        });
    };

    Style.modal = function (isOpen) {
        return (0, _appendVendorPrefix2.default)({
            position: 'fixed',
            zIndex: 1050,
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
            transition: 'all 0.5s'

        });
    };

    module.exports = Style;
})(module);
//# sourceMappingURL=data:application/json;base64,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TDtBQUNBLHdCQUFZLG9CQUFaO0FBQ0EscUJBQVMsU0FBUyxDQUFULEdBQWEsQ0FBYjtBQUNULHVCQUFXLFNBQVMsc0JBQVQsR0FBa0MsMEJBQWxDO0FBQ1gsd0JBQVksU0FBUyxjQUFULEdBQTBCLG1DQUExQjtBQUNaLG9CQUFRLElBQVI7U0FWRyxDQUFQLENBRHVDO0tBQWxCLENBMUVWOztBQXlGZixVQUFNLEtBQU4sR0FBYyxVQUFVLE1BQVYsRUFBa0I7QUFDNUIsZUFBTyxrQ0FBbUI7QUFDdEIsc0JBQVUsT0FBVjtBQUNBLG9CQUFRLElBQVI7QUFDQSxtQkFBTyxNQUFQO0FBQ0Esb0JBQVEsTUFBUjtBQUNBLGtCQUFNLENBQU47QUFDQSxpQkFBSyxDQUFMO0FBQ0EsdUJBQVcsU0FBUyxzQkFBVCxHQUFrQywwQkFBbEM7QUFDWCx3QkFBWSxVQUFaOztTQVJHLENBQVAsQ0FENEI7S0FBbEIsQ0F6RkM7O0FBMkdmLFdBQU8sT0FBUCxHQUFpQixLQUFqQixDQTNHZTtDQUFsQixFQTZHQyxNQTdHRCxDQUFEIiwiZmlsZSI6IlN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcGVuZFZlbmRvclByZWZpeCBmcm9tICcuL2FwcGVuZFZlbmRvclByZWZpeCc7XG5cblxuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG5cbiAgICBmdW5jdGlvbiBTdHlsZSgpIHtcblxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBtZXJnZShpbnRvLCBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG5cbiAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyA9IGZ1bmN0aW9uIChpbnRvLCBvYmosIGFwcGVuZFZlbmRvclByZWZpeCkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSBtZXJnZShpbnRvLCBvYmopO1xuICAgICAgICBpZiAoYXBwZW5kVmVuZG9yUHJlZml4KVxuICAgICAgICAgICAgcmV0dXJuIFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdClcbiAgICAgICAgZWxzZSByZXR1cm4gc3R5bGVPYmplY3Q7XG4gICAgfVxuXG5cbiAgICAvKmNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIGdldCBhIHBhcnRpY3VsYXIgc2Vzc2lvbmVkIHByb3BlcnR5IG9mIGEgc2Vzc2lvbmVkIG9iamVjdCovXG4gICAgU3R5bGUuZ2V0U3R5bGVTdGF0ZUZvciA9IGZ1bmN0aW9uIChzZXNzaW9uT2JqLCBwcm9wZXJ0aWVzLCBhcHBlbmRWZW5kb3JQcmVmaXgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0ge307XG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgcHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIGlmKHNlc3Npb25PYmpbcHJvcGVydHlOYW1lXS5zdGF0ZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNlc3Npb25PYmpbcHJvcGVydHlOYW1lXS5jb25zdHJ1Y3RvciA9PT0gd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhzdGF0ZSxzZXNzaW9uT2JqW3Byb3BlcnR5TmFtZV0uc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVbcHJvcGVydHlOYW1lXSA9IHNlc3Npb25PYmpbcHJvcGVydHlOYW1lXS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgICBzdGF0ZVtwcm9wZXJ0aWVzXSA9IHNlc3Npb25PYmpbcHJvcGVydGllc10uc3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoYXBwZW5kVmVuZG9yUHJlZml4KVxuICAgICAgICAgICAgcmV0dXJuIFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdGF0ZSk7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuXG5cbiAgICBTdHlsZS5nZXRTdHlsZSA9IGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICByZXR1cm4gYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlKTtcbiAgICB9XG5cbiAgICBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXggPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeChzdHlsZSk7XG4gICAgfVxuXG4gICAgU3R5bGUuYWxpZ25DaGlsZHJlbiA9IGZ1bmN0aW9uKHN0eWxlLGFsaWduKXtcbiAgICAgICAgdmFyIHN0YXRlT2JqID0gc3R5bGUuc3RhdGU7XG4gICAgICAgIGlmKHN0YXRlT2JqLmRpc3BsYXkgPT09IFwiZmxleFwiKXtcbiAgICAgICAgICAgIGlmKGFsaWduID09PSBcImxlZnRcIikgc3RhdGVPYmpbXCJqdXN0aWZ5Q29udGVudFwiXSA9IFwiZmxleC1zdGFydFwiO1xuICAgICAgICAgICAgZWxzZSBpZihhbGlnbiA9PT0gXCJjZW50ZXJcIilzdGF0ZU9ialtcImp1c3RpZnlDb250ZW50XCJdID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGVsc2UgaWYoYWxpZ24gPT09IFwicmlnaHRcIilzdGF0ZU9ialtcImp1c3RpZnlDb250ZW50XCJdID0gXCJmbGV4LWVuZFwiO1xuICAgICAgICAgICAgZWxzZSBpZihhbGlnbiA9PT0gXCJqdXN0aWZ5XCIpc3RhdGVPYmpbXCJqdXN0aWZ5Q29udGVudFwiXSA9IFwic3BhY2UtYXJvdW5kXCI7XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGUuc3RhdGUgPSBzdGF0ZU9iajtcbiAgICAgICAgLy8gdG8tZG8gZm9yIENTUyB3aXRoIGZsb2F0IHZhbHVlc1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgLy8gZHVlIHRvIGJvb3RzdHJhcCBOYXZiYXIgemluZGV4ICgxMDI5KSB2YWx1ZSB3ZSBoYXZlIHRvIGdpdmUgMTAzMCBmb3Igb3ZlcmxheVxuICAgIFN0eWxlLm92ZXJsYXlDb250YWluZXIgPSBmdW5jdGlvbiAoaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBhcHBlbmRWZW5kb3JQcmVmaXgoe1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgICAgICAgICBvcGFjaXR5OiBpc09wZW4gPyAxIDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNPcGVuID8gJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyA6ICd0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCknLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaXNPcGVuID8gJ29wYWNpdHkgMC41cycgOiAnb3BhY2l0eSAwLjVzLCB0cmFuc2Zvcm0gMC4xcyAwLjVzJyxcbiAgICAgICAgICAgIHpJbmRleDogMTAzMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBTdHlsZS5tb2RhbCA9IGZ1bmN0aW9uIChpc09wZW4pIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHpJbmRleDogMTA1MCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGlzT3BlbiA/ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScgOiAndHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cycsXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFN0eWxlO1xuXG59KG1vZHVsZSkpO1xuIl19
