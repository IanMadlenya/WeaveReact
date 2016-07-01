import Styles from "./utils/Style";
import HTMLWrapperConfig from "./configs/HTMLWrapperConfig";
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

    static registerToolConfig(toolClass, config) {
        if (!ComponentManager.toolConfigMap.has(toolClass))
            ComponentManager.toolConfigMap.set(toolClass, config);
    }

    static getToolConfig(toolClass) {
        return ComponentManager.toolConfigMap.get(toolClass);
    }


    static initialize(reactComp,type) {
        if(ComponentManager.debug)console.log(reactComp.constructor.name + " -- constructor");
        if (reactComp.props.settings) {
            reactComp.settings = reactComp.props.settings;
        }else{
            var newConfig = ComponentManager.getToolConfig(reactComp.constructor)
            reactComp.settings = newConfig;
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
        if (reactComp.props.useCSS) {
            if (reactComp.settings.useCSS) reactComp.settings.useCSS.state = reactComp.props.useCSS;
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
        if (reactComp.props.reverseLayout) {
            if (reactComp.settings.reverseLayout) reactComp.settings.reverseLayout.state = reactComp.props.reverseLayout;
        }
        if (type == "container"  && reactComp.constructor.name != "HTMLWrapper") {
            var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
            ComponentManager.hookSessionStateForComponentChildren(reactComp.props.children, reactComp.settings, WrapperConfigClass);
            reactComp.renderChildren = reactComp.renderChildren.bind(reactComp);
        }

        ComponentManager.addForceUpdateToCallbacks(reactComp);



    }

    //todo organize better
    static flipIcons(config,iconStateNames){
        if(!config.reverseLayout){
            console.warn("no reverseLayout Session Object");
            return;
        }

        for(var i = 0 ; i < iconStateNames.length ; i++){
            var iconObj = config[iconStateNames[i]].state;

            if(iconObj){
                if(typeof iconObj != "string"){ //linkableVraible Obj
                    var keys = Object.keys(iconObj);
                    if(config.reverseLayout.state){
                        keys.map(function(key,index){
                            if(iconObj[key].indexOf("/") == -1){//fontawesome icons
                                if(iconObj[key].indexOf(" fa-flip-horizontal") == -1){//not flipped
                                    iconObj[key] = iconObj[key] + " fa-flip-horizontal";
                                }
                            }

                        });
                    }else{
                        keys.map(function(key,index){
                            if(iconObj[key].indexOf(" fa-flip-horizontal") != -1){// flipped
                                var index = iconObj[key].indexOf(" fa-flip-horizontal");
                                iconObj[key] = iconObj[key].substring(0,index);
                            }
                        });

                    }
                }else{ //LinkableString
                    if(config.reverseLayout.state){
                        if(iconObj.indexOf("/") == -1){//fontawesome icons
                            if(iconObj.indexOf(" fa-flip-horizontal") == -1){//not flipped
                                iconObj = iconObj + " fa-flip-horizontal";
                            }
                        }
                    }else{
                        if(iconObj.indexOf(" fa-flip-horizontal") != -1){// flipped
                            var index = iconObj.indexOf(" fa-flip-horizontal");
                            iconObj = iconObj.substring(0,index);
                        }
                    }

                }

                config[iconStateNames[i]].state = iconObj;
            }

        }

    }


    static createDefaultSessionProperties(config,type){
        if(ComponentManager.debug)console.log(config.constructor.name + " -- constructor");
        Object.defineProperties(config, {
            "style":{
                value: Weave.linkableChild(config, new InlineStyle())
            },
            "iconModeStyle":{
                value: Weave.linkableChild(config, new InlineStyle())
            },
            "iconModeName":{
                value: Weave.linkableChild(config, new weavejs.core.LinkableString(""))
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
                value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(true))
            },
            "iconMode":{
                value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
            },
            "deviceMode":{
                value: Weave.linkableChild(config, new weavejs.core.LinkableString("large"))
            },
            "reverseLayout":{
                value: Weave.linkableChild(config, new weavejs.core.LinkableBoolean(false))
            },
            "props":{
                value:  new Props()
            }
        });

        if(type === "container"){
            Object.defineProperties(config, {
                "children":{
                    value: Weave.linkableChild(config, new weavejs.core.LinkableHashMap())
                },
                "addGapAt":{
                    value: Weave.linkableChild(config, new weavejs.core.LinkableNumber())
                }
            });

            config.childConfigMap = new Map();
            config.configChildMap = new Map();

        }
    }


    static componentWillReceiveProps(reactComp, nextProps) {
        if(ComponentManager.debug)console.log(reactComp.constructor.name + " -- componentWillReceiveProps ---");
        if (reactComp.props.settings !== nextProps.settings) {
            if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** props Settings changed");
            if (nextProps.settings) {
                if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** Settings");
                ComponentManager.removeForceUpdateFromCallbacks(reactComp);
                reactComp.settings = nextProps.settings;
                ComponentManager.addForceUpdateToCallbacks(reactComp);
            }
        }
        if (reactComp.props.style !== nextProps.style) { // user style added through UI is Sessioned
            if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** props style changed from " + reactComp.props.style + " to " + nextProps.style);
            if (nextProps.style) {
                 if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** style");
                reactComp.settings.style.domDefined.state = nextProps.style;
            }
        }
        if (reactComp.props.className !== nextProps.className) { // user className added through UI is Sessioned
            if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** props className changed from " + reactComp.props.className + " to " + nextProps.className);
            if (nextProps.className) {
                 if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** className");
                reactComp.settings.CSS.className.state = nextProps.className;
            }
        }
        if (reactComp.props.enable !== nextProps.enable) {
            if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** props enable changed  from " + reactComp.props.enable + " to " + nextProps.enable);
            if (nextProps.enable !== undefined && reactComp.settings.enable) {
                if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** enable");
                reactComp.settings.enable.state = nextProps.enable;
            }
        }
        if (reactComp.props.visible !== nextProps.visible) {
            if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** props visible changed from " + reactComp.props.visible + " to " + nextProps.visible);
            if (nextProps.visible !== undefined && reactComp.settings.visible) {
                if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** visible");
                reactComp.settings.visible.state = nextProps.visible;
            }
        }
        if (reactComp.props.deviceMode !== nextProps.deviceMode) {
            if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** props deviceMode changed from " + reactComp.props.deviceMode + " to " + nextProps.deviceMode);
            if (nextProps.deviceMode !== undefined && reactComp.settings.deviceMode) {
                if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** deviceMode");
                reactComp.settings.deviceMode.state = nextProps.deviceMode;
            }
        }
        if (reactComp.props.reverseLayout !== nextProps.reverseLayout) {
            if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** props reverseLayout changed from " + reactComp.props.reverseLayout + " to " + nextProps.reverseLayout);
            if (nextProps.reverseLayout !== undefined && reactComp.settings.reverseLayout) {
                if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** reverseLayout");
                reactComp.settings.reverseLayout.state = nextProps.reverseLayout;
            }
        }
        if (reactComp.props.iconMode !== nextProps.iconMode) {
            if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** props iconMode changed from " + reactComp.props.iconMode + " to " + nextProps.iconMode);
            if (nextProps.iconMode !== undefined  && reactComp.settings.iconMode){
                if(ComponentManager.debug)console.log(reactComp.constructor.name + " ** iconMode");
                reactComp.settings.iconMode.state = nextProps.iconMode;
            }
        }
        if (reactComp.props.children !== nextProps.children) {
            if(ComponentManager.debug)console.log(reactComp.constructor.name + "children");
            var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
            ComponentManager.hookSessionStateForComponentChildren(nextProps.children, reactComp.settings, WrapperConfigClass);
        }

    }

    static componentWillUnmount(reactComp){
        if(ComponentManager.debug)console.log(reactComp.constructor.name + " - componentWillUnmount");
         ComponentManager.removeForceUpdateFromCallbacks(reactComp);
    }

    static shouldComponentUpdate(reactComp, nextProps) {
        if(ComponentManager.debug)console.log(reactComp.constructor.name + " - shouldComponentUpdate");
        //to-do sync between props class and weavestate
        return false;

    }

    static addForceUpdateToCallbacks(reactComp) {
        var config = reactComp.settings;
        if (!Weave.isLinkable(config))
            console.error(config, " is not a LinkableObject");
        var propertyNames = Object.getOwnPropertyNames(config);
        for (var i = 0; i < propertyNames.length; i++) {
            var pn = propertyNames[i];
            var obj = config[pn];
            if (Weave.isLinkable(obj)) {
                if (obj instanceof weavejs.core.LinkableHashMap){
                    obj = obj.childListCallbacks;
                    Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
                }else if(obj instanceof weavejs.core.LinkableVariable){
                     Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
                }else if(obj instanceof InlineStyle){
                     Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
                }else if(obj instanceof CSS){
                     Weave.getCallbacks(obj).addGroupedCallback(reactComp, reactComp.forceUpdate);
                }
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
                if (obj instanceof weavejs.core.LinkableHashMap){
                    obj = obj.childListCallbacks;
                    Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
                }else if(obj instanceof weavejs.core.LinkableVariable){
                     Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
                }else if(obj instanceof InlineStyle){
                     Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
                }else if(obj instanceof CSS){
                     Weave.getCallbacks(obj).removeCallback(reactComp, reactComp.forceUpdate);
                }
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



    static renderChildren(reactComp,childList)
    {
        if(ComponentManager.debug)
	        console.log(reactComp.constructor.name + " -- renderChildren");

        var childConfigs = reactComp.settings.children.getObjects();
        var propsConfig = reactComp.settings.props;

        var clonedChildren = childConfigs.map(function (childConfig, index) {
            var child = reactComp.settings.configChildMap.get(childConfig);
            var configName = reactComp.settings.children.getName(childConfig);

            if(childList)
            {
                 if(childList.indexOf(configName) == -1)
                 {
                    return null; //
                }
            }
            var props = {}

            props["settings"] = childConfig;
            if (child)
            {
                ComponentManager.mergeInto(props, child.props);
            }

            if(propsConfig && propsConfig.hasChildProps())
            {
                var obj = propsConfig.getPropsForChild(reactComp, childConfig,configName,index);
                ComponentManager.mergeInto(props, obj);
                var key = propsConfig.keyProp;
                if(key && key.length > 0)
                {
                    if(key === "index") props["key"] = index;
                    else if(key === "objectName") props["key"] = configName;
                    else if(childConfig[key])
                    {
                        if(childConfig[key] instanceof weavejs.core.LinkableVariable)props["key"] = childConfig[key].state;
                        else props["key"] = childConfig[key];
                    }
                }
                else
                {
                    props["key"] = index;
                }

            }
            else
            {
                    props["key"] = index;
            }

            if(childConfig.props)
            {
                var thisArg = child ? child : childConfig;
                ComponentManager.mergeInto(props, childConfig.props.getProps(thisArg,childConfig,configName, index));
            }
            if (configName === "gapDiv") {
                var orderValue = String(reactComp.settings.addGapAt.state);
                if (!isNaN(orderValue)) {
                    props["style"] = {
                        flex: "1",
                        order: orderValue
                    }
                }
            }

            if (child)
            {
                if (typeof (child.type) === "string") 
                {
                    var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                    var ToolClass = ComponentManager.getToolImplementation(configClass);
	                if(!ToolClass) console.error("Tool Not found for config: ",configClass)
                    return <ToolClass {...props} > {child} </ToolClass>;
                }
                else
                {
                    if (reactComp.settings.childConfigMap.has(child))
                        reactComp.settings.childConfigMap.delete(child);
                    var clonedChild = React.cloneElement(child, props);
                    reactComp.settings.configChildMap.set(childConfig, clonedChild);
                    reactComp.settings.childConfigMap.set(clonedChild, childConfig);
                    return clonedChild;
                }
            }
            else
            {
                //to-do need to replace with flexinfo file or tiher mean, create a utility function
                //this solution will fail when config not part of session tree
                var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                var ToolClass = ComponentManager.getToolImplementation(configClass);
	            if(!ToolClass) console.error("Tool Not found for config: ",configClass)
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
