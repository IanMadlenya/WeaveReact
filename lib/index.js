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

var _App = require("./utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tree = _Tree2.default;
exports.Modal = _Modal2.default;
exports.TreeConfig = _TreeConfig2.default;
exports.ModalConfig = _ModalConfig2.default;
exports.SplitPane = _SplitPane2.default;
exports.SplitPaneConfig = _SplitPaneConfig2.default;

exports.getToolForConfigName = function (name) {
    if (_App2.default.getToolImplementation(name)) {
        return _App2.default.getToolImplementation(name);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxRQUFRLElBQVI7QUFDQSxRQUFRLEtBQVI7QUFDQSxRQUFRLFVBQVI7QUFDQSxRQUFRLFdBQVI7QUFDQSxRQUFRLFNBQVI7QUFDQSxRQUFRLGVBQVI7O0FBRUEsUUFBUSxvQkFBUixHQUErQixVQUFVLElBQVYsRUFBZ0I7QUFDM0MsUUFBSSxjQUFJLHFCQUFKLENBQTBCLElBQTFCLENBQUosRUFBcUM7QUFDakMsZUFBTyxjQUFJLHFCQUFKLENBQTBCLElBQTFCLENBQVAsQ0FEaUM7S0FBckM7Q0FEMkIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJlZSBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvVHJlZVwiO1xuaW1wb3J0IFRyZWVDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy90cmVlL1RyZWVDb25maWdcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9Ob2RlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvTm9kZUNvbmZpZ1wiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbFwiO1xuaW1wb3J0IE1vZGFsQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxDb25maWdcIjtcblxuaW1wb3J0IFNwbGl0UGFuZSBmcm9tIFwiLi9jb21wb25lbnRzL3NwbGl0UGFuZS9TcGxpdFBhbmVcIjtcbmltcG9ydCBTcGxpdFBhbmVDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9zcGxpdFBhbmUvU3BsaXRQYW5lQ29uZmlnXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vdXRpbHMvQXBwXCI7XG5cblxuZXhwb3J0cy5UcmVlID0gVHJlZTtcbmV4cG9ydHMuTW9kYWwgPSBNb2RhbDtcbmV4cG9ydHMuVHJlZUNvbmZpZyA9IFRyZWVDb25maWc7XG5leHBvcnRzLk1vZGFsQ29uZmlnID0gTW9kYWxDb25maWc7XG5leHBvcnRzLlNwbGl0UGFuZSA9IFNwbGl0UGFuZTtcbmV4cG9ydHMuU3BsaXRQYW5lQ29uZmlnID0gU3BsaXRQYW5lQ29uZmlnO1xuXG5leHBvcnRzLmdldFRvb2xGb3JDb25maWdOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihuYW1lKSkge1xuICAgICAgICByZXR1cm4gQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihuYW1lKTtcbiAgICB9XG5cbn1cbiJdfQ==
