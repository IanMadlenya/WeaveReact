"use strict";

var _Tree = require("./components/tree/Tree");

var _Tree2 = _interopRequireDefault(_Tree);

var _TreeConfig = require("./components/tree/TreeConfig");

var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

var _Node = require("./components/tree/Node");

var _Node2 = _interopRequireDefault(_Node);

var _NodeConfig = require("./components/tree/NodeConfig");

var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

var _Modal = require("./components/modal/Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalConfig = require("./components/modal/ModalConfig");

var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

var _SplitPane = require("./components/splitPane/SplitPane");

var _SplitPane2 = _interopRequireDefault(_SplitPane);

var _SplitPaneConfig = require("./components/splitPane/SplitPaneConfig");

var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

var _Navbar = require("./components/navbar/Navbar");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Config = require("./components/navbar/Config");

var _App = require("./utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Weave.registerAsyncClass(React.Component);

exports.Tree = _Tree2.default;
//import LinkConfig from "./components/navbar/LinkConfig";

exports.Modal = _Modal2.default;
exports.TreeConfig = _TreeConfig2.default;
exports.ModalConfig = _ModalConfig2.default;
exports.SplitPane = _SplitPane2.default;
exports.SplitPaneConfig = _SplitPaneConfig2.default;

exports.Navbar = _Navbar2.default;
exports.NavbarConfig = _Config.NavbarConfig;
exports.NavLinkConfig = _Config.NavLinkConfig;

exports.registerToolImplementation = function (asClassName, jsClass) {
    _App2.default.registerToolImplementation(asClassName, jsClass);
};

exports.getToolImplementation = function (name) {
    if (_App2.default.getToolImplementation(name)) {
        return _App2.default.getToolImplementation(name);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxRQUFRLElBQVI7OztBQUNBLFFBQVEsS0FBUjtBQUNBLFFBQVEsVUFBUjtBQUNBLFFBQVEsV0FBUjtBQUNBLFFBQVEsU0FBUjtBQUNBLFFBQVEsZUFBUjs7QUFFQSxRQUFRLE1BQVI7QUFDQSxRQUFRLFlBQVI7QUFDQSxRQUFRLGFBQVI7O0FBR0EsUUFBUSwwQkFBUixHQUFxQyxVQUFVLFdBQVYsRUFBdUIsT0FBdkIsRUFBZ0M7QUFDakUsa0JBQUksMEJBQUosQ0FBK0IsV0FBL0IsRUFBNEMsT0FBNUMsRUFEaUU7Q0FBaEM7O0FBSXJDLFFBQVEscUJBQVIsR0FBZ0MsVUFBVSxJQUFWLEVBQWdCO0FBQzVDLFFBQUksY0FBSSxxQkFBSixDQUEwQixJQUExQixDQUFKLEVBQXFDO0FBQ2pDLGVBQU8sY0FBSSxxQkFBSixDQUEwQixJQUExQixDQUFQLENBRGlDO0tBQXJDO0NBRDRCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyZWUgZnJvbSBcIi4vY29tcG9uZW50cy90cmVlL1RyZWVcIjtcbmltcG9ydCBUcmVlQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9UcmVlQ29uZmlnXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvTm9kZVwiO1xuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy90cmVlL05vZGVDb25maWdcIjtcblxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxcIjtcbmltcG9ydCBNb2RhbENvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsL01vZGFsQ29uZmlnXCI7XG5cbmltcG9ydCBTcGxpdFBhbmUgZnJvbSBcIi4vY29tcG9uZW50cy9zcGxpdFBhbmUvU3BsaXRQYW5lXCI7XG5pbXBvcnQgU3BsaXRQYW5lQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvc3BsaXRQYW5lL1NwbGl0UGFuZUNvbmZpZ1wiO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyL05hdmJhclwiO1xuaW1wb3J0IHtOYXZiYXJDb25maWcsTmF2TGlua0NvbmZpZ30gZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXIvQ29uZmlnXCI7XG4vL2ltcG9ydCBMaW5rQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyL0xpbmtDb25maWdcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi91dGlscy9BcHBcIjtcblxuLy9XZWF2ZS5yZWdpc3RlckFzeW5jQ2xhc3MoUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5UcmVlID0gVHJlZTtcbmV4cG9ydHMuTW9kYWwgPSBNb2RhbDtcbmV4cG9ydHMuVHJlZUNvbmZpZyA9IFRyZWVDb25maWc7XG5leHBvcnRzLk1vZGFsQ29uZmlnID0gTW9kYWxDb25maWc7XG5leHBvcnRzLlNwbGl0UGFuZSA9IFNwbGl0UGFuZTtcbmV4cG9ydHMuU3BsaXRQYW5lQ29uZmlnID0gU3BsaXRQYW5lQ29uZmlnO1xuXG5leHBvcnRzLk5hdmJhciA9IE5hdmJhcjtcbmV4cG9ydHMuTmF2YmFyQ29uZmlnID0gTmF2YmFyQ29uZmlnO1xuZXhwb3J0cy5OYXZMaW5rQ29uZmlnID0gTmF2TGlua0NvbmZpZztcblxuXG5leHBvcnRzLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uID0gZnVuY3Rpb24gKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKSB7XG4gICAgQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKTtcbn1cblxuZXhwb3J0cy5nZXRUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKG5hbWUpO1xuICAgIH1cbn1cbiJdfQ==
