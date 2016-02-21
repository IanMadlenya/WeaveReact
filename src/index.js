import Tree from "./components/tree/Tree";
import TreeConfig from "./components/tree/TreeConfig";
import Node from "./components/tree/Node";
import NodeConfig from "./components/tree/NodeConfig";

import Modal from "./components/modal/Modal";
import ModalConfig from "./components/modal/ModalConfig";

import SplitPane from "./components/splitPane/SplitPane";
import SplitPaneConfig from "./components/splitPane/SplitPaneConfig";

import Navbar from "./components/navbar/Navbar";
import navbarConfig from "./components/navbar/Config";

import App from "./utils/App";


exports.Tree = Tree;
exports.Modal = Modal;
exports.TreeConfig = TreeConfig;
exports.ModalConfig = ModalConfig;
exports.SplitPane = SplitPane;
exports.SplitPaneConfig = SplitPaneConfig;

exports.Navbar = Navbar;
exports.navbarConfig = navbarConfig;


exports.registerToolImplementation = function (asClassName, jsClass) {
    App.registerToolImplementation(asClassName, jsClass);
}

exports.getToolImplementation = function (name) {
    if (App.getToolImplementation(name)) {
        return App.getToolImplementation(name);
    }
}


exports.registerToolConfig = function (toolClass, configClass) {
    App.registerToolConfig(toolClass, configClass);
}

exports.getToolConfig = function (toolClass) {
    App.getToolConfig(toolClass);
}
