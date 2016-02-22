
import Styles from "./Style";
import HTMLWrapperConfig  from "../configs/HTMLWrapperConfig";
import React from "react";
(function (module) {


    function App() {

    }

    var toolRegistry = {};


    App.registerToolImplementation = function (asClassName, jsClass) {
        if (!toolRegistry[asClassName])
            toolRegistry[asClassName] = jsClass;
    }

    App.getToolImplementation = function (asClassName) {
        return toolRegistry[asClassName];
    }

    var toolConfigMap = new Map();

    App.registerToolConfig = function (tool, config) {
        if (!toolConfigMap.has(tool))
            toolConfigMap.set(tool,config);
    }

    App.getToolConfig = function (tool) {
        return toolConfigMap.get(tool);
    }

    App.hookSessionStateForComponentChildren = function(children,config){
        config.children.delayCallbacks();

        config.childConfigMap = new Map();
        config.configChildMap.forEach(function(value, key){
            var configName = config.children.getName(key);
            config.children.removeObject(configName);
        });
        config.configChildMap = new Map();

        React.Children.forEach(children,function(child,index){
            var childName = "";
            var childConfig = config.childConfigMap.get(child);
            var childConfigName = "";
            if(typeof(child.type) === "string"){ // for HTML Elements
                if(!childConfig){
                    childConfig = config.children.requestObject('',HTMLWrapperConfig);
                }
            }else{ // for React Composite Elements
                var configClass = App.getToolConfig(child.type);
                if(!childConfig && configClass){
                    childConfig = config.children.requestObject('',configClass);
                }
            }
            if(child.props.style)childConfig.style.domDefined.state = child.props.style;
            config.childConfigMap.set(child,childConfig);
            config.configChildMap.set(childConfig,child);
            //config.configChildObjectMap[childConfigName] = childConfig;
        });
        config.children.resumeCallbacks();
    }



  /*  App.renderChildren = function(reactComp,CSS,additionalProps,newProps){
        var childConfigs = reactComp.settings.children.getObjects();
        var clonedChildren = childConfigs.map(function(childConfig,index){
            var child = reactComp.settings.configChildMap.get(childConfig);


            if(child){
                var props = App.mergeInto({},child.props);
                if(typeof(child.type) === "string"){
                    return <HTMLWrapper settings={childConfig}>{child}</HTMLWrapper>
                }else{
                    props = App.mergeInto(props,additionalProps);
                    props["settings"] = childConfig;
                    if(CSS){
                        props["className"] = CSS[childName];
                        props["CSS"] = CSS;
                    }
                    if(this.settings.childConfigMap.has(child))
                        this.settings.childConfigMap.delete(child);
                    var clonedChild = React.cloneElement(child,props);
                    this.settings.configChildMap.set(childConfig,clonedChild);
                    this.settings.childConfigMap.set(clonedChild,childConfig);
                    return clonedChild;
                }
             }else{
                var configClass = Weave.getPath(childConfig).getType();
                var ToolClass =  App.getToolImplementation(configClass);
                var newChild = <ToolClass settings={childConfig}/>;
                this.settings.configChildMap.set(childConfig,newChild);
                this.settings.childConfigMap.set(newChild,childConfig);
                return newChild;
             }

        }.bind(this));

        return clonedChildren;
    }*/

    App.mergeInto = function(into, obj) {
        for (let attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    }



    module.exports = App;

}(module));
