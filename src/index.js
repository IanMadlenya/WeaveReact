import Tree from "./components/tree/Tree";
import TreeConfig from "./components/tree/TreeConfig";

import SimpleTreeConfig from "./components/simpleTree/SimpleTreeConfig";
import SimpleTree from "./components/simpleTree/SimpleTree";

import Modal from "./components/modal/Modal";
import ModalConfig from "./components/modal/ModalConfig";

import SplitPane from "./components/splitPane/SplitPane";
import SplitPaneConfig from "./components/splitPane/SplitPaneConfig";

import Navbar from "./components/navbar/Navbar";
import navbarConfig from "./components/navbar/Config";

import Accordion from "./components/accordion/Accordion";
import AccordionConfig from "./components/accordion/Config";

import SideBarContainer from "./components/sideBarContainer/SideBarContainer";
import sideBarContainerConfig from "./components/sideBarContainer/Config";

import SessionEditor from "./debugger/sessionStateEditor/SessionEditor";
import SessionEditorConfig from "./debugger/sessionStateEditor/SessionEditorConfig";

import Button from "./components/button/Button";
import ButtonConfig from "./components/button/Config";

import InlineStyle from "./configs/InlineStyle";
import CSS from "./configs/CSS";
import Props from "./configs/Props";


import ComponentManager from "./ComponentManager";
import AbstractComponent from "./AbstractComponent";
import AbstractConfig from "./AbstractConfig";
import Style from "./utils/Style";


exports.Tree = Tree;
exports.TreeConfig = TreeConfig;

exports.SimpleTree = SimpleTree;
exports.SimpleTreeConfig = SimpleTreeConfig;

exports.Modal = Modal;
exports.ModalConfig = ModalConfig;

exports.SplitPane = SplitPane;
exports.SplitPaneConfig = SplitPaneConfig;

exports.Navbar = Navbar;
exports.navbarConfig = navbarConfig;

exports.Accordion = Accordion;
exports.AccordionConfig = AccordionConfig;

exports.SideBarContainer = SideBarContainer;
exports.sideBarContainerConfig = sideBarContainerConfig;

exports.SessionEditor = SessionEditor;
exports.SessionEditorConfig = SessionEditorConfig;

exports.Button = Button;
exports.ButtonConfig = ButtonConfig;

exports.Component = AbstractComponent;
exports.Config = AbstractConfig;
exports.InlineStyle = InlineStyle;
exports.CSS = CSS;
exports.Props = Props;

exports.Style = Style;

exports.registerToolImplementation = function (asClassName, jsClass) {
    ComponentManager.registerToolImplementation(asClassName, jsClass);
}

exports.getToolImplementation = function (name) {
    if (ComponentManager.getToolImplementation(name)) {
        return ComponentManager.getToolImplementation(name);
    }
}

exports.setDebug = function(val){
    ComponentManager.debug = val;
}

exports.registerToolConfig = function (toolClass, configClass) {
    ComponentManager.registerToolConfig(toolClass, configClass);
}


exports.getToolConfig = function (toolClass) {
    return ComponentManager.getToolConfig(toolClass);
}


exports.initialize = function(reactComp){
    ComponentManager.initialize(reactComp);
}

exports.createDefaultSessionProperties = function(reactComp){
    ComponentManager.createDefaultSessionProperties(reactComp);
}

exports.hookSessionStateForComponentChildren = function (ReactChildren,ownerConfig)  {
    return ComponentManager.hookSessionStateForComponentChildren(ReactChildren,ownerConfig);
}

exports.componentWillReceiveProps = function(reactComp,nextProps){
    ComponentManager.componentWillReceiveProps(reactComp,nextProps);
}

exports.componentWillUnmount = function(reactComp){
    ComponentManager.componentWillUnmount(reactComp);
}

exports.addForceUpdateToCallbacks = function (reactComp)  {
    return ComponentManager.addForceUpdateToCallbacks(reactComp);
}

exports.removeForceUpdateFromCallbacks = function (reactComp)  {
    return ComponentManager.removeForceUpdateFromCallbacks(reactComp);
}

exports.shouldComponentUpdate = function(reactComp,nextProps){
    return ComponentManager.shouldComponentUpdate(reactComp,nextProps);
}

exports.renderChildren = function (reactComp,propsManager)  {
    return ComponentManager.renderChildren(reactComp,propsManager);
}

exports.flipIcons = function (config,iconStateNames)  {
    return ComponentManager.flipIcons(config,iconStateNames);
}
