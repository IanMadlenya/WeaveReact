import React from 'react';
import App from "../../utils/App";
import ButtonConfig from "./Config";


class Button extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings?this.props.settings : new ButtonConfig();
        App.addForceUpdateToCallbacks(this);
        this.onClickListener = this.onClickListener.bind(this)
        if(App.debug)console.log("Button - constructor");
    }

    componentWillReceiveProps(nextProps){
        if(App.debug)console.log("Button - componentWillReceiveProps");
        App.componentWillReceiveProps(this,nextProps);
    }


    componentWillUnmount(){
        if(App.debug)console.log("Button - componentWillUnmount");
         App.removeForceUpdateFromCallbacks(this);
    }

    // allowe render only when React Parent render is called with new iconMode value
    shouldComponentUpdate(nextProps){
        if(App.debug)console.log("Button - shouldComponentUpdate");
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
        if(App.debug)console.log("Button - render");
        var iconUI = "";
        var label = this.settings.iconOnly.state?"":this.settings.label.state;

        var iconName = this.settings.getIcon();
        if(iconName && iconName.length>0){
            var iconStyleObject = this.settings.iconStyle.getStyleFor(null,true);
            iconUI =  <i style={iconStyleObject} className = {iconName}> </i>
        }

        var styleObject = this.settings.style.getStyleFor(null,true);

        var buttonUI = <span onClick={this.onClickListener} style={styleObject}>{iconUI}{label}</span>;
        if(this.settings.useCSS.state){
            var cssName = this.settings.CSS.getCSSFor();
            buttonUI = <span onClick={this.onClickListener} className={cssName} style={styleObject}>{iconUI}{label}</span>;
        }
        return (buttonUI);
    }

}
Weave.registerClass("weavereact.Button", Button,[weavejs.api.core.ILinkableObject]);

App.registerToolConfig(Button,ButtonConfig);
App.registerToolImplementation("weavereact.ButtonConfig",Button);

export default Button;
