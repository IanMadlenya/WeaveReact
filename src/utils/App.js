import Styles from "./Style";
import HTMLWrapperConfig from "../configs/HTMLWrapperConfig";
import React from "react";

class App {
    constructor() {

    }

    static registerToolImplementation(asClassName, jsClass) {
        if (!App.toolRegistry[asClassName])
            App.toolRegistry[asClassName] = jsClass;
    }

    static getToolImplementation(asClassName) {
        return App.toolRegistry[asClassName];
    }

    static registerToolConfig(tool, config) {
        if (!App.toolConfigMap.has(tool))
            App.toolConfigMap.set(tool, config);
    }

    static getToolConfig(tool) {
        return App.toolConfigMap.get(tool);
    }



    static componentWillReceiveProps(reactComp, nextProps) {
        if (reactComp.props.settings !== nextProps.settings) {
            if (nextProps.settings) {
                App.removeForceUpdateFromCallbacks(reactComp);
                reactComp.settings = nextProps.settings;
                App.addForceUpdateToCallbacks(reactComp);
            }
        }
        if (reactComp.props.style !== nextProps.style) { // user style added through UI is Sessioned
            if (nextProps.style) reactComp.settings.style.domDefined.state = nextProps.style;
        }
        if (reactComp.props.children !== nextProps.children) {
            var WrapperConfigClass = reactComp["WrapperConfigClass"] ? reactComp["WrapperConfigClass"] : null;
            App.hookSessionStateForComponentChildren(nextProps.children, reactComp.settings, WrapperConfigClass);
        }

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

        if (App.debug) {
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
                    var configClass = App.getToolConfig(child.type);
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

                App.mergeInto(props, child.props);
            }
            if(propsConfig && propsConfig.hasChildProps()){
                var obj = propsConfig.getPropsForChild(reactComp, childConfig,configName,index);
                App.mergeInto(props, obj);
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
                App.mergeInto(props, childConfig.props.getProps(thisArg,childConfig,configName, index));
            }

            if (child) {
                if (typeof (child.type) === "string") {
                    var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                    var ToolClass = App.getToolImplementation(configClass);
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
                var ToolClass = App.getToolImplementation(configClass);
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

App.toolRegistry = {};
App.toolConfigMap = new Map();
App.debug = false;

export default App;
