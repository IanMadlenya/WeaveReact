import React from 'react';
import ComponentManager from "../../ComponentManager";
import AccordionConfig from "./Config";


class Accordion extends React.Component {

    constructor(props){
        super(props);
        ComponentManager.initialize(this,"container");
        this.settings.setIconModeLayout(this.props.iconMode);
    }

    componentWillReceiveProps(nextProps){
        ComponentManager.componentWillReceiveProps(this,nextProps);
        this.settings.setIconModeLayout(nextProps.iconMode);
    }


    componentWillUnmount(){
        ComponentManager.componentWillUnmount(this);
    }

    shouldComponentUpdate(nextProps){
        return ComponentManager.shouldComponentUpdate(this,nextProps);
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
        this.settings.props.addChildProps("iconMode",this.settings.iconMode.state);
        this.settings.props.keyProp = "index";
        this.settings.props.addOddChildren([this.settings.activeChild.state]);

        return  ComponentManager.renderChildren(this);
    }


    render() {
        if(ComponentManager.debug)console.log("Accordion - render");

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

ComponentManager.registerToolConfig(Accordion,AccordionConfig);
ComponentManager.registerToolImplementation("weavereact.AccordionConfig",Accordion);

export default Accordion;
