import React from 'react';
import ComponentManager from "../../ComponentManager";
import AccordionConfig from "./Config";
import AbstractComponent from "../../AbstractComponent";


class Accordion extends AbstractComponent {

    constructor(props){
        super(props);
        this.settings.setIconModeLayout(this.props.iconMode);
    }

    componentWillReceiveProps(nextProps){
         super.componentWillReceiveProps(nextProps);
        this.settings.setIconModeLayout(nextProps.iconMode);
    }



    onClickCallback(childConfig,index){
        this.settings.activeChild.state = index;
    }

    renderChildren(){
        var activeChildStyle = this.settings.activeChildStyle.state;
        var childStyle = this.settings.childStyle.state;

        this.settings.props.addChildEvent("onClick",this.onClickCallback);
        this.settings.props.addChildProps("open",false,true);
        this.settings.props.addChildProps("style",childStyle,activeChildStyle);
        this.settings.props.addChildProps("iconMode",this.settings.iconMode.state);
        this.settings.props.addChildProps("reverseLayout",this.settings.reverseLayout.state);
        this.settings.props.keyProp = "index";
        this.settings.props.addOddChildren([this.settings.activeChild.state]);

        return  ComponentManager.renderChildren(this);
    }


    render() {
        if(ComponentManager.debug)console.log("Accordion - render");

        var styleObject = this.settings.style.state;
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

ComponentManager.registerToolConfig(Accordion,AccordionConfig);
ComponentManager.registerToolImplementation("weavereact.AccordionConfig",Accordion);

export default Accordion;
