import React from 'react';
import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";
import ButtonConfig from "./Config";


class Button extends AbstractComponent {

    constructor(props){
        super(props);
        this.onClickListener = this.onClickListener.bind(this);
    }

    // allowe render only when React Parent render is called with new iconMode value
    shouldComponentUpdate(nextProps){
        super.shouldComponentUpdate(nextProps);
        if(this.props.iconMode !== nextProps.iconMode)
            return true
        else
            return false;
    }

    onClickListener(){
        this.settings.clicked.state = !this.settings.clicked.state;
        if(this.props.onClick)this.props.onClick()
    }


    render() {
        if(ComponentManager.debug)console.log("Button - render");
        var iconUI = "";
        var label = this.settings.iconOnly.state?"":this.settings.label.state;

        var iconName = this.settings.getIcon();
        if(iconName && iconName.length>0){
            var iconStyleObject = this.settings.iconModeStyle.getStyleFor();
            iconUI =  <i style={iconStyleObject} className = {iconName}> </i>
        }

        var styleObject = this.settings.style.getStyleFor();

        var buttonUI = <span onClick={this.onClickListener} style={styleObject}>{iconUI}{label}</span>;
        if(this.settings.useCSS.state){
            var cssName = this.settings.CSS.getCSSFor();
            buttonUI = <span onClick={this.onClickListener} className={cssName} style={styleObject}>{iconUI}&nbsp;{label}</span>;
        }
        return (buttonUI);
    }

}
Weave.registerClass("weavereact.Button", Button,[weavejs.api.core.ILinkableObject]);

ComponentManager.registerToolConfig(Button,ButtonConfig);
ComponentManager.registerToolImplementation("weavereact.ButtonConfig",Button);

export default Button;
