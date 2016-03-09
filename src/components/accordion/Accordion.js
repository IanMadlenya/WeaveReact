import React from 'react';
import App from "../../utils/App";
import PropsManager from "../PropsManager";
import AccordionConfig from "./Config";


class Accordion extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings;
        App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        App.addForceUpdateToCallbacks(this);
        this.propsManager = new PropsManager();
        if(App.debug)console.log("Accordion - constructor");
    }

    componentWillReceiveProps(nextProps){
        if(App.debug)console.log("Accordion - componentWillReceiveProps");
        App.componentWillReceiveProps(this,nextProps);
    }


    componentWillUnmount(){
        if(App.debug)console.log("Accordion - componentWillUnmount");
         App.removeForceUpdateFromCallbacks(this);
    }

    // called only when React Parent render is called
    shouldComponentUpdate(nextProps){
        if(App.debug)console.log("Accordion - shouldComponentUpdate");
        return false;
    }

    onClickCallback(childConfig,index){
        console.log(childConfig,index);
        this.settings.activeChild.state = index;
    }

    renderChildren(){
        var activeChildStyle = this.settings.activeChildStyle.getStyleFor();
        var childStyle = this.settings.childStyle.getStyleFor();

        this.propsManager.addKeyProps("index");
        this.propsManager.addNewProps("open",false);
        this.propsManager.updateStyle(childStyle);
        this.propsManager.addOddChild(this.settings.activeChild.state,{style:activeChildStyle,open:true},true);
        this.propsManager.addEvent("onClick",this.onClickCallback);
        return  App.renderChildren(this,this.propsManager);
    }


    render() {
        if(App.debug)console.log("Accordion - render");

        var styleObject = this.settings.style.getStyleFor(null,true);
        var childrenUI = this.renderChildren();

        var ui = <div style={styleObject}>{childrenUI}</div>;
        if(this.settings.useCSS.state){
            var cssName = this.settings.CSS.getCSSFor();
            ui = <div className={cssName} style={styleObject}>{childrenUI}</div>;
        }



        return (ui);
    }

}
Weave.registerClass("weavereact.Accordion", Accordion,[weavejs.api.core.ILinkableObject]);

App.registerToolConfig(Accordion,AccordionConfig);
App.registerToolImplementation("weavereact.AccordionConfig",Accordion);

export default Accordion;
