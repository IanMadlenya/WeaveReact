import TreeConfig from "./components/tree/TreeConfig";
import ModalConfig from "./components/modal/ModalConfig";
import Tree from "./components/tree/Tree";
import Node from "./components/tree/Node";
import NodeConfig from "./components/tree/NodeConfig";
import Modal from "./components/modal/Modal";

import SplitPane from "./components/splitPane/SplitPane";
import SplitPaneConfig from "./components/splitPane/SplitPaneConfig";

import App from "./utils/App.js";


exports.Tree = Tree;
exports.Modal = Modal;
exports.TreeConfig = TreeConfig;
exports.ModalConfig = ModalConfig;
exports.SplitPane = SplitPane;
exports.SplitPaneConfig = SplitPaneConfig;

exports.getToolForConfigName = function (name) {
    if (App.getToolImplementation(name)) {
        return App.getToolImplementation(name);
    } else {
        console.warn("No Tool is registered for " + name);
    }

}
