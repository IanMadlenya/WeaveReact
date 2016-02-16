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

Weave.registerAsyncClass(React.Component);
//import LinkConfig from "./components/navbar/LinkConfig";

exports.Tree = _Tree2.default;
exports.Modal = _Modal2.default;
exports.TreeConfig = _TreeConfig2.default;
exports.ModalConfig = _ModalConfig2.default;
exports.SplitPane = _SplitPane2.default;
exports.SplitPaneConfig = _SplitPaneConfig2.default;

exports.Navbar = _Navbar2.default;
exports.NavbarConfig = _Config.NavbarConfig;
exports.NavLinkConfig = _Config.NavLinkConfig;

exports.getToolForConfigName = function (name) {
    if (_App2.default.getToolImplementation(name)) {
        return _App2.default.getToolImplementation(name);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsTUFBTSxrQkFBTixDQUF5QixNQUFNLFNBQU4sQ0FBekI7OztBQUVBLFFBQVEsSUFBUjtBQUNBLFFBQVEsS0FBUjtBQUNBLFFBQVEsVUFBUjtBQUNBLFFBQVEsV0FBUjtBQUNBLFFBQVEsU0FBUjtBQUNBLFFBQVEsZUFBUjs7QUFFQSxRQUFRLE1BQVI7QUFDQSxRQUFRLFlBQVI7QUFDQSxRQUFRLGFBQVI7O0FBR0EsUUFBUSxvQkFBUixHQUErQixVQUFVLElBQVYsRUFBZ0I7QUFDM0MsUUFBSSxjQUFJLHFCQUFKLENBQTBCLElBQTFCLENBQUosRUFBcUM7QUFDakMsZUFBTyxjQUFJLHFCQUFKLENBQTBCLElBQTFCLENBQVAsQ0FEaUM7S0FBckM7Q0FEMkIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJlZSBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvVHJlZVwiO1xuaW1wb3J0IFRyZWVDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy90cmVlL1RyZWVDb25maWdcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9Ob2RlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvTm9kZUNvbmZpZ1wiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbFwiO1xuaW1wb3J0IE1vZGFsQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxDb25maWdcIjtcblxuaW1wb3J0IFNwbGl0UGFuZSBmcm9tIFwiLi9jb21wb25lbnRzL3NwbGl0UGFuZS9TcGxpdFBhbmVcIjtcbmltcG9ydCBTcGxpdFBhbmVDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9zcGxpdFBhbmUvU3BsaXRQYW5lQ29uZmlnXCI7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyXCI7XG5pbXBvcnQge05hdmJhckNvbmZpZyxOYXZMaW5rQ29uZmlnfSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9Db25maWdcIjtcbi8vaW1wb3J0IExpbmtDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXIvTGlua0NvbmZpZ1wiO1xuXG5pbXBvcnQgQXBwIGZyb20gXCIuL3V0aWxzL0FwcFwiO1xuXG5XZWF2ZS5yZWdpc3RlckFzeW5jQ2xhc3MoUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5UcmVlID0gVHJlZTtcbmV4cG9ydHMuTW9kYWwgPSBNb2RhbDtcbmV4cG9ydHMuVHJlZUNvbmZpZyA9IFRyZWVDb25maWc7XG5leHBvcnRzLk1vZGFsQ29uZmlnID0gTW9kYWxDb25maWc7XG5leHBvcnRzLlNwbGl0UGFuZSA9IFNwbGl0UGFuZTtcbmV4cG9ydHMuU3BsaXRQYW5lQ29uZmlnID0gU3BsaXRQYW5lQ29uZmlnO1xuXG5leHBvcnRzLk5hdmJhciA9IE5hdmJhcjtcbmV4cG9ydHMuTmF2YmFyQ29uZmlnID0gTmF2YmFyQ29uZmlnO1xuZXhwb3J0cy5OYXZMaW5rQ29uZmlnID0gTmF2TGlua0NvbmZpZztcblxuXG5leHBvcnRzLmdldFRvb2xGb3JDb25maWdOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihuYW1lKSkge1xuICAgICAgICByZXR1cm4gQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihuYW1lKTtcbiAgICB9XG59XG4iXX0=
