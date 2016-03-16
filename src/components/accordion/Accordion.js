import React from 'react';
import App from "../../utils/App";
import AccordionConfig from "./Config";


class Accordion extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings;
        App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        App.addForceUpdateToCallbacks(this);
        if(App.debug)console.log("Accordion - constructor");
        this.settings.setIconModeLayout(this.props.iconMode);
    }

    componentWillReceiveProps(nextProps){
        if(App.debug)console.log("Accordion - componentWillReceiveProps");
        App.componentWillReceiveProps(this,nextProps);
        this.settings.setIconModeLayout(nextProps.iconMode);
    }


    componentWillUnmount(){
        if(App.debug)console.log("Accordion - componentWillUnmount");
         App.removeForceUpdateFromCallbacks(this);
    }

    // allowe render only when React Parent render is called with new iconMode value
    shouldComponentUpdate(nextProps){
        if(App.debug)console.log("Accordion - shouldComponentUpdate");
        if(this.props.iconMode !== nextProps.iconMode)
            return true
        else
            return false;
    }


    onClickCallback(childConfig,index){
        this.settings.activeChild.state = index;
    }

    renderChildren(){
        var activeChildStyle = this.settings.activeChildStyle.getStyleFor();
        var childStyle = this.settings.childStyle.getStyleFor();

        this.settings.props.addChildEvent("onClick",this.onClickCallback);
        this.settings.props.addChildProps("open",false,true);
        this.settings.props.addChildProps("style",childStyle,activeChildStyle);
        this.settings.props.addChildProps("iconMode",this.props.iconMode);
        this.settings.props.keyProp = "index";
       this.settings.props.addOddChildren([this.settings.activeChild.state]);

        return  App.renderChildren(this);
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
