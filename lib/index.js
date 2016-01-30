"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _componentsTreeTreeConfig = require("./components/tree/TreeConfig");

var _componentsTreeTreeConfig2 = _interopRequireDefault(_componentsTreeTreeConfig);

var _componentsModalModalConfig = require("./components/modal/ModalConfig");

var _componentsModalModalConfig2 = _interopRequireDefault(_componentsModalModalConfig);

var _componentsTreeTree = require("./components/tree/Tree");

var _componentsTreeTree2 = _interopRequireDefault(_componentsTreeTree);

var _componentsModalModal = require("./components/modal/Modal");

var _componentsModalModal2 = _interopRequireDefault(_componentsModalModal);

var _utilsAppJs = require("./utils/App.js");

var _utilsAppJs2 = _interopRequireDefault(_utilsAppJs);

exports.Tree = _componentsTreeTree2["default"];
exports.Modal = _componentsModalModal2["default"];
exports.TreeConfig = _componentsTreeTreeConfig2["default"];
exports.ModalConfig = _componentsModalModalConfig2["default"];

exports.getToolForConfigName = function (name) {
    if (_utilsAppJs2["default"].getToolImplementation(name)) {
        return _utilsAppJs2["default"].getToolImplementation(name);
    } else {
        console.warn("No Tool is registered for " + name);
    }
};