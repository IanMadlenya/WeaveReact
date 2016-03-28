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

Weave.registerClass('weavereact.AbstractConfig', AbstractConfig, [weavejs.api.core.ILinkableObject]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFic3RyYWN0Q29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBRU0saUJBQ0YsU0FERSxjQUNGLENBQVksSUFBWixFQUFrQjswQkFEaEIsZ0JBQ2dCOztBQUNkLCtCQUFpQiw4QkFBakIsQ0FBZ0QsSUFBaEQsRUFBcUQsSUFBckQsRUFEYztDQUFsQjs7a0JBS1c7Ozs7QUFJZixNQUFNLGFBQU4sQ0FBb0IsMkJBQXBCLEVBQWlELGNBQWpELEVBQWdFLENBQUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixlQUFqQixDQUFqRSIsImZpbGUiOiJBYnN0cmFjdENvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuL0NvbXBvbmVudE1hbmFnZXJcIjtcblxuY2xhc3MgQWJzdHJhY3RDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5jcmVhdGVEZWZhdWx0U2Vzc2lvblByb3BlcnRpZXModGhpcyx0eXBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0Q29uZmlnXG5cblxuLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LkFic3RyYWN0Q29uZmlnJywgQWJzdHJhY3RDb25maWcsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbiJdfQ==
