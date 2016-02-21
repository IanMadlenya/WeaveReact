
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

    //to-do remove children has to remove the forceUdpate
    App.hookSessionStateForComponentChildren = function(children,config){
        config.children.delayCallbacks();
        React.Children.forEach(children,function(child,index){
            var childName = "";
            if(typeof(child.type) === "string"){ // for HTML Elements
                childName =  child.type + index;
                var wrapperConfig = null;
                if(!config.children.getObject(childName)){
                    wrapperConfig = config.children.requestObject(childName,HTMLWrapperConfig);
                }else{// style is sessioned for DOM elements
                    wrapperConfig = config.children.getObject(childName);
                }
                 wrapperConfig.style.domDefined.state = child.props.style;
            }else{ // for React Composite Elements
                childName = child.type.name + index;
                var configClass = App.getToolConfig(child.type);
                if(!config.children.getObject(childName) && configClass){
                    config.children.requestObject(childName,configClass);
                }
            }
        });
        config.children.resumeCallbacks();
    }








    App.mergeInto = function(into, obj) {
        for (let attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    }



    module.exports = App;

}(module));
