import Styles from "./Style";
import HTMLWrapperConfig from "../configs/HTMLWrapperConfig";
import React from "react";
import InlineStyle from "./configs/InlineStyle";
import CSS from "./configs/CSS";
import Props from "./configs/Props";

class ComponentManager {
    constructor() {

    }

    static registerToolImplementation(asClassName, jsClass) {
        if (!ComponentManager.toolRegistry[asClassName])
            ComponentManager.toolRegistry[asClassName] = jsClass;
    }

    static getToolImplementation(asClassName) {
        return ComponentManager.toolRegistry[asClassName];
    }

    static registerToolConfig(tool, config) {
        if (!ComponentManager.toolConfigMap.has(tool))
            ComponentManager.toolConfigMap.set(tool, config);
    }

    static getToolConfig(tool) {
        return ComponentManager.toolConfigMap.get(tool);
    }


    static initialize(reactComp) {
        if(ComponentManager.debug)console.log(reactComp.constructor.name + " -- constructor");
        if (reactComp.props.settings) {
            reactComp.settings = reactComp.props.settings;
        }
        if (reactComp.props.style) { // user style added through UI is Sessioned
            reactComp.settings.style.domDefined.state = reactComp.props.style;
        }
        if (reactComp.props.className) { // user className added through UI is Sessioned
            reactComp.settings.CSS.className.state = reactComp.props.className;
        }
        if (reactComp.props.enable) {
            if (reactComp.settings.enable) reactComp.settings.enable.state = reactComp.props.enable;
        }
        if (reactComp.props.visible) {
            if (reactComp.settings.visible) reactComp.settings.visible.state = reactComp.props.visible;
        }
        if (reactComp.props.deviceMode) {
            if (reactComp.settings.deviceMode) reactComp.settings.deviceMode.state = reactComp.props.deviceMode;
        }
        if (reactComp.props.iconMode) {
            if (reactComp.settings.iconMode) reactComp.settings.iconMode.state = reactComp.props.iconMode;
        }
        if (reactComp.props.children) {
            //to-do - (WrapperConfigClass)is  required?
            var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
            ComponentManager.hookSessionStateForComponentChildren(reactComp.props.children, reactComp.settings, WrapperConfigClass);
        }

        ComponentManager.addForceUpdateToCallbacks(reactComp);


    }

    static createDefaultSessionProperties(config){
        if(ComponentManager.debug)console.log(config.constructor.name + " -- constructor");
        Object.defineProperties(config, {
            "style":{
                value: Weave.linkableChild(config, new InlineStyle())
            },
             "CSS":{
                value: Weave.linkableChild(config, new CSS())
            },
            "useCSS":{
                value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
            },
            "enable":{
                value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
            },
            "visible":{
                value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
            },
            "iconMode":{
                value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
            },
            "deviceMode":{
                value: Weave.linkableChild(config, new weavejs.core.LinkableString("large"))
            },
            "props":{
                value:  new Props()
            }
        });
    }


    static componentWillReceiveProps(reactComp, nextProps) {
        if(ComponentManager.debug)console.log(reactComp.constructor.name + " -- componentWillReceiveProps");
        if (reactComp.props.settings !== nextProps.settings) {
            if (nextProps.settings) {
                ComponentManager.removeForceUpdateFromCallbacks(reactComp);
                reactComp.settings = nextProps.settings;
                ComponentManager.addForceUpdateToCallbacks(reactComp);
            }
        }
        if (reactComp.props.style !== nextProps.style) { // user style added through UI is Sessioned
            if (nextProps.style) reactComp.settings.style.domDefined.state = nextProps.style;
        }
        if (reactComp.props.className !== nextProps.className) { // user className added through UI is Sessioned
            if (nextProps.className) reactComp.settings.CSS.className.state = nextProps.className;
        }
        if (reactComp.props.enable !== nextProps.enable) {
            if (nextProps.enable && reactComp.settings.enable) reactComp.settings.enable.state = nextProps.enable;
        }
        if (reactComp.props.visible !== nextProps.visible) {
            if (nextProps.visible && reactComp.settings.visible) reactComp.settings.visible.state = nextProps.visible;
        }
        if (reactComp.props.deviceMode !== nextProps.deviceMode) {
            if (nextProps.deviceMode && reactComp.settings.deviceMode) reactComp.settings.deviceMode.state = nextProps.deviceMode;
        }
        if (reactComp.props.iconMode !== nextProps.iconMode) {
            if (nextProps.deviceMode && reactComp.settings.deviceMode) reactComp.settings.deviceMode.state = nextProps.deviceMode;
        }
        if (reactComp.props.children !== nextProps.children) {
            var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
            ComponentManager.hookSessionStateForComponentChildren(nextProps.children, reactComp.settings, WrapperConfigClass);
        }

    }

    static componentWillUnmount(reactComp){
        if(ComponentManager.debug)console.log(reactComp.constructor.name + " - componentWillUnmount");
         ComponentManager.removeForceUpdateFromCallbacks(reactComp);
    }

    /*static shouldComponentUpdate(reactComp, nextProps) {


    }*/

    static addForceUpdateToCallbacks(reactComp) {
        var config = reactComp.settings;
        if (!Weave.isLinkable(config))
            console.error(config, " is not a LinkableObject");
        var propertyNames = Object.getOwnPropertyNames(config);
        for (var i = 0; i < propertyNames.length; i++) {
            var pn = propertyNames[i];
            var obj = config[pn];
            if (Weave.isLinkable(obj)) {
                if (obj instanceof weavejs.core.LinkableHashMap)
                    obj = obj.childListCallbacks;
                Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
            }
        }


    }

    static removeForceUpdateFromCallbacks(reactComp) {
        var config = reactComp.settings;
        if (!Weave.isLinkable(config))
            console.error(config, " is not a LinkableObject");
        var propertyNames = Object.getOwnPropertyNames(config);
        for (var i = 0; i < propertyNames.length; i++) {
            var pn = propertyNames[i];
            var obj = config[pn];
            if (Weave.isLinkable(obj)) {
                if (obj instanceof weavejs.core.LinkableHashMap)
                    obj = obj.childListCallbacks;
                Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
            }
        }


    }


    //For testing  and debug
    static isSessionChangedFor(config) {
        if (!Weave.isLinkable(config))
            console.error(config, " is not a LinkableObject");
        var propertyNames = Object.getOwnPropertyNames(config);
        var linkbleObject = null;
        var moreLinkableObjects = [];
        for (var i = 0; i < propertyNames.length; i++) {
            var pn = propertyNames[i];
            var obj = config[pn];
            if (Weave.isLinkable(obj)) {
                var lo = (obj instanceof weavejs.core.LinkableHashMap) ? obj.childListCallbacks : obj
                if (!linkbleObject) linkbleObject = lo;
                else moreLinkableObjects.push(lo);
            }
        }

        if (ComponentManager.debug) {
            var isChanged = false;
            if (moreLinkableObjects.length > 0) {

                for (var i = 0; i < moreLinkableObjects.length; i++) {
                    isChanged = Weave.detectChange(config, moreLinkableObjects[i])
                    if (isChanged) {
                        console.log(moreLinkableObjects[i], " changed");
                    }
                }
            } else if (linkbleObject) {
                isChanged = Weave.detectChange(config, linkbleObject);
                if (isChanged) {
                    console.log(linkbleObject, " changed");
                }
            } else {
                console.log(config, " no session Children");
            }
        }

        if (moreLinkableObjects.length > 0)
            return Weave.detectChange(config, linkbleObject, moreLinkableObjects)
        else if (linkbleObject)
            return Weave.detectChange(config, linkbleObject);
        else
            return false;
    }



    static hookSessionStateForComponentChildren(children, config, WrapperConfigClass) {
        config.children.delayCallbacks();

        config.childConfigMap = new Map();
        config.configChildMap.forEach(function (value, key) {
            var configName = config.children.getName(key);
            config.children.removeObject(configName);
        });
        config.configChildMap = new Map();

        React.Children.forEach(children, function (child, index) {
            var childName = "";
            var childConfig = config.childConfigMap.get(child);
            var childConfigName = "";
            if (typeof (child.type) === "string") { // for HTML Elements
                if (!childConfig) {
                    var configClass = WrapperConfigClass ? WrapperConfigClass : HTMLWrapperConfig
                    childConfig = config.children.requestObject('', configClass);
                }
            } else { // for React Composite Elements
                if(!child.settings && !child.props.settings){
                    var configClass = ComponentManager.getToolConfig(child.type);
                    if (!childConfig && configClass) {
                        childConfig = config.children.requestObject('', configClass);
                    }
                }else{
                    childConfig = child.settings?child.settings:child.props.settings;
                    config.children.setObject('', childConfig);
                }

            }
            var {className, style, ...other} = child.props;
            if(child.props.enable && childConfig.enable)childConfig.enable.state = child.props.enable;
            if (style) childConfig.style.domDefined.state = style;
            if (className) childConfig.CSS.className.state = className;
            if (other && childConfig.props) childConfig.props.merge(other);
            config.childConfigMap.set(child, childConfig);
            config.configChildMap.set(childConfig, child);
        });

        if (config["addGapAt"]) {
            config.children.requestObject('gapDiv', HTMLWrapperConfig);
        }
        config.children.resumeCallbacks();
    }



    static renderChildren(reactComp,childList) {
        if(ComponentManager.debug)console.log(reactComp.constructor.name + " -- renderChildren");
        var childConfigs = reactComp.settings.children.getObjects();
        var propsConfig = reactComp.settings.props;

        var clonedChildren = childConfigs.map(function (childConfig, index) {
            var child = reactComp.settings.configChildMap.get(childConfig);
            var configName = reactComp.settings.children.getName(childConfig);

            if(childList){
                 if(childList.indexOf(configName) == -1){
                    return null; //
                }
            }
            var props = {}

            props["settings"] = childConfig;
            if (child) {
                //if(child.props && !child.props.settings)

                ComponentManager.mergeInto(props, child.props);
            }
            if(propsConfig && propsConfig.hasChildProps()){
                var obj = propsConfig.getPropsForChild(reactComp, childConfig,configName,index);
                ComponentManager.mergeInto(props, obj);
                var key = propsConfig.keyProp;
                if(key && key.length > 0){
                    if(key === "index") props["key"] = index;
                    else if(key === "objectName") props["key"] = configName;
                    else if(childConfig[key]){
                        if(childConfig[key] instanceof weavejs.core.LinkableVariable)props["key"] = childConfig[key].state;
                        else props["key"] = childConfig[key];
                    }
                }else{
                    props["key"] = index;
                }

            }else{
                    props["key"] = index;
            }

            if(childConfig.props){
                var thisArg = child ? child : childConfig;
                ComponentManager.mergeInto(props, childConfig.props.getProps(thisArg,childConfig,configName, index));
            }

            if (child) {
                if (typeof (child.type) === "string") {
                    var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                    var ToolClass = ComponentManager.getToolImplementation(configClass);
                    return <ToolClass {...props} > {child} < /ToolClass>;
                } else {
                    if (reactComp.settings.childConfigMap.has(child))
                        reactComp.settings.childConfigMap.delete(child);
                    var clonedChild = React.cloneElement(child, props);
                    reactComp.settings.configChildMap.set(childConfig, clonedChild);
                    reactComp.settings.childConfigMap.set(clonedChild, childConfig);
                    return clonedChild;
                }
            } else {
                if (configName === "gapDiv") {
                    var orderValue = String(reactComp.settings.addGapAt.state);
                    if (!isNaN(orderValue)) {
                        props["style"] = {
                            flex: "1",
                            order: orderValue
                        }
                    }
                }
                //to-do need to replace with flexinfo file or tiher mean, create a utility function
                //this solution will fail when config not part of session tree
                var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                var ToolClass = ComponentManager.getToolImplementation(configClass);
                var newChild = < ToolClass {...props}/>;
                return newChild;
            }

        }.bind(this));

        if(childList && childList.length > 0){
            var filteredChildren = clonedChildren.filter(function(child,index){
                if(child === null)
                    return false;
                else
                    return true;
            },this);
            return filteredChildren;
        }else
            return clonedChildren;
    }

    static mergeInto(into, obj, ignoreProps) {
        for (let attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    }
}

ComponentManager.toolRegistry = {};
ComponentManager.toolConfigMap = new Map();
ComponentManager.debug = false;

export default ComponentManager;
