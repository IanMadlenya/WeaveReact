import React from "react";
import Style from "../../utils/Style";
import App from "../../utils/App";
import PropsManager from "../PropsManager";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings; App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        this.addCallbacks = this.addCallbacks.bind(this);
        this.removeCallbacks = this.removeCallbacks.bind(this);
        this.propsManager =  new PropsManager()

    }

    componentWillReceiveProps(nextProps){
        if(this.props.settings !== nextProps.settings){
            if(nextProps.settings){
                this.removeCallbacks();
                this.settings = nextProps.settings;
                this.addCallbacks();
            }
        }
        if(this.props.style !== nextProps.style){// user style added through UI is Sessioned
            if(nextProps.style)this.settings.style.domDefined.state = nextProps.style;
        }
        if(this.props.children !== nextProps.children){
            App.hookSessionStateForComponentChildren(nextProps.children,this.settings);
        }

    }

    componentDidMount(){
        this.addCallbacks();
    }

    addCallbacks() {
        this.settings.enable.addImmediateCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
        this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
        this.settings.space.addImmediateCallback(this, this.forceUpdate);
        this.settings.addGapAt.addImmediateCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
    }

    removeCallbacks() {
        this.settings.enable.removeCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
        this.settings.rightAlign.removeCallback(this, this.forceUpdate);
        this.settings.space.removeCallback(this, this.forceUpdate);
        this.settings.addGapAt.removeCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
    }


    componentWillUnmount() {
        this.removeCallbacks();
    }

    renderChildren(){
        var childStyleObject={};
        var space = this.settings.space.value;
        if((this.props.dock === "right") || (this.props.dock === "left")){
            childStyleObject["marginBottom"] = space;
        }
        else if((this.props.dock === "top") || (this.props.dock === "bottom")){
            childStyleObject["marginRight"] = space;
        }

        this.propsManager.updateStyle(childStyleObject);
        this.propsManager.addKeyProps("pageName");
         return App.renderChildren(this,this.propsManager);
    }

    shouldComponentUpdate(nextProps){
        if(this.props.dock !== nextProps.dock){
            return true
        }else if(this.props.position !== nextProps.position){
            return true
        }else if(this.props.useCSS !== nextProps.useCSS){
            return true
        }else{
            return false;
        }
    }






    render() {
        var navFormUI = <div/>;
        if(this.settings.enable.value){
            var styleObject = this.settings.style.getStyleFor(null);
            var cssName = this.settings.CSS.getCSSFor();
            var childrenUI = this.renderChildren();

            if(this.props.useCSS){
                navFormUI = <div  className={cssName} >
                                {childrenUI}
                            </div>
            }else{
                navFormUI = <div  style={styleObject} >
                                {childrenUI}
                            </div>
            }


        }

        return (navFormUI);
    }

}

Weave.registerClass('weavereact.navbar.Form', Form,[weavejs.api.core.ILinkableObject]);

export default Form;
