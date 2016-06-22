"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComponentManager = require("./ComponentManager");

var _ComponentManager2 = _interopRequireDefault(_ComponentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractConfig = function AbstractConfig(type) {
    _classCallCheck(this, AbstractConfig);

    _ComponentManager2.default.createDefaultSessionProperties(this, type);
};

exports.default = AbstractConfig;

//This Function makes this class as SessionClass

Weave.registerClass(AbstractConfig, ['weavereact.AbstractConfig'], [weavejs.api.core.ILinkableObject], "Abstract Config");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFic3RyYWN0Q29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBRU0saUJBQ0YsU0FERSxjQUNGLENBQVksSUFBWixFQUFrQjswQkFEaEIsZ0JBQ2dCOztBQUNkLCtCQUFpQiw4QkFBakIsQ0FBZ0QsSUFBaEQsRUFBcUQsSUFBckQsRUFEYztDQUFsQjs7a0JBS1c7Ozs7QUFJZixNQUFNLGFBQU4sQ0FBcUIsY0FBckIsRUFBb0MsQ0FBQywyQkFBRCxDQUFwQyxFQUFrRSxDQUFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsZUFBakIsQ0FBbkUsRUFBcUcsaUJBQXJHIiwiZmlsZSI6IkFic3RyYWN0Q29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4vQ29tcG9uZW50TWFuYWdlclwiO1xuXG5jbGFzcyBBYnN0cmFjdENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmNyZWF0ZURlZmF1bHRTZXNzaW9uUHJvcGVydGllcyh0aGlzLHR5cGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RDb25maWdcblxuXG4vL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoIEFic3RyYWN0Q29uZmlnLFsnd2VhdmVyZWFjdC5BYnN0cmFjdENvbmZpZyddLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0sXCJBYnN0cmFjdCBDb25maWdcIik7XG5cbiJdfQ==