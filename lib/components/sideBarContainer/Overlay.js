"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentManager = require("../../ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

var _AbstractComponent2 = require("../../AbstractComponent");

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_AbstractComponent) {
    _inherits(Overlay, _AbstractComponent);

    function Overlay(props) {
        _classCallCheck(this, Overlay);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).call(this, props));
    }

    _createClass(Overlay, [{
        key: "render",
        value: function render() {
            var styleObject = this.settings.style.state;
            return _react2.default.createElement("div", { style: styleObject });
        }
    }]);

    return Overlay;
}(_AbstractComponent3.default);

module.exports = Overlay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk92ZXJsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUNGLGFBREUsT0FDRixDQUFZLEtBQVosRUFBbUI7OEJBRGpCLFNBQ2lCOztzRUFEakIsb0JBRVEsUUFEUztLQUFuQjs7aUJBREU7O2lDQUtPO0FBQ0wsZ0JBQUksY0FBZSxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLENBRGQ7QUFFTCxtQkFBUSx1Q0FBTSxPQUFPLFdBQVAsRUFBTixDQUFSLENBRks7Ozs7V0FMUDs7O0FBV04sT0FBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Ik92ZXJsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudE1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdENvbXBvbmVudCBmcm9tIFwiLi4vLi4vQWJzdHJhY3RDb21wb25lbnRcIjtcblxuY2xhc3MgT3ZlcmxheSBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9ICB0aGlzLnNldHRpbmdzLnN0eWxlLnN0YXRlO1xuICAgICAgICByZXR1cm4gIDxkaXYgIHN0eWxlPXtzdHlsZU9iamVjdH0gLz47XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE92ZXJsYXk7XG4iXX0=
