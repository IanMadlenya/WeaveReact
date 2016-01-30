import TreeConfig from "./components/tree/TreeConfig";
import ModalConfig from "./components/modal/ModalConfig";
import Tree from "./components/tree/Tree";
import Modal from "./components/modal/Modal";

import App from "./utils/App.js";


exports.Tree = Tree;
exports.Modal = Modal;
exports.TreeConfig = TreeConfig;
exports.ModalConfig = ModalConfig;


exports.getToolForConfigName = function (name) {
    if (App.getToolImplementation(name)) {
        return App.getToolImplementation(name);
    } else {
        console.warn("No Tool is registered for " + name);
    }

}
