import Tree from "./components/tree/Tree";
import TreeConfig from "./components/tree/TreeConfig";
import Node from "./components/tree/Node";
import NodeConfig from "./components/tree/NodeConfig";

import Modal from "./components/modal/Modal";
import ModalConfig from "./components/modal/ModalConfig";

import SplitPane from "./components/splitPane/SplitPane";
import SplitPaneConfig from "./components/splitPane/SplitPaneConfig";

import Navbar from "./components/navbar/Navbar";
import {NavbarConfig,NavLinkConfig} from "./components/navbar/Config";
//import LinkConfig from "./components/navbar/LinkConfig";

import App from "./utils/App";

//Weave.registerAsyncClass(React.Component);

exports.Tree = Tree;
exports.Modal = Modal;
exports.TreeConfig = TreeConfig;
exports.ModalConfig = ModalConfig;
exports.SplitPane = SplitPane;
exports.SplitPaneConfig = SplitPaneConfig;

exports.Navbar = Navbar;
exports.NavbarConfig = NavbarConfig;
exports.NavLinkConfig = NavLinkConfig;


exports.registerToolImplementation = function (asClassName, jsClass) {
    App.registerToolImplementation(asClassName, jsClass);
}

exports.getToolImplementation = function (name) {
    if (App.getToolImplementation(name)) {
        return App.getToolImplementation(name);
    }
}
