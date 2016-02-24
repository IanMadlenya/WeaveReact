import React from 'react';
import Style from "../../utils/Style";
import App from "../../utils/App";
import Link from "./Link";
import PropsManager from "../PropsManager";


class List extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings;
        if(this.props.children)App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        this.addCallbacks = this.addCallbacks.bind(this);
        this.removeCallbacks = this.removeCallbacks.bind(this);
        this.propsManager = new PropsManager();
        this.updateRender = this.updateRender.bind(this);

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
        this.addCallbacks()
    }

    addCallbacks(){
       // Weave.getCallbacks(this.settings).addGroupedCallback(this,this.updateRender);
        this.settings.enable.addImmediateCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.CSS).addImmediateCallback(this, this.forceUpdate);
        this.settings.space.addImmediateCallback(this, this.forceUpdate);
        this.settings.align.addImmediateCallback(this, this.forceUpdate);
        this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
    }

    updateRender(){
        if(Weave.detectChange(this,this.settings.enable,this.settings.style,this.settings.space,this.settings.align,this.settings.activePage,this.settings.children.childListCallbacks)){
            this.forceUpdate();
        }
    }


    removeCallbacks(){
         //Weave.getCallbacks(this.settings).removeCallback(this,this.updateRender)
        this.settings.enable.removeCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.CSS).removeCallback(this, this.forceUpdate);
        this.settings.space.removeCallback(this, this.forceUpdate);
        this.settings.align.removeCallback(this, this.forceUpdate);
        this.settings.activePage.removeCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
    }
    componentWillUnmount(){
        this.removeCallbacks();
    }


    shouldComponentUpdate(nextProps){
        if(this.props.dock !== nextProps.dock){
            return true
        }else if(this.props.position !== nextProps.position){
            return true
        }else if(this.props.useCSS !== nextProps.useCSS){
            return true
        }else if(Weave.detectChange(this,this.settings.space,this.settings.rightAlign,this.settings.activePage)){
            return true;
        }else{
            return false
        }
    }



    renderChildren(){
        var linkStyleObject={};
        var iconOnly = false;
        var space = this.settings.space.value;
        if((this.props.dock === "right") || (this.props.dock === "left")){
            iconOnly = true;
            linkStyleObject["marginBottom"] = space;
        }
        else if((this.props.dock === "top") || (this.props.dock === "bottom")){
            iconOnly = false;
            linkStyleObject["marginRight"] = space;
        }

        this.propsManager.addNewProps("iconOnly",iconOnly);
        this.propsManager.updateStyle(linkStyleObject);
        this.propsManager.addKeyProps("pageName");
        this.propsManager.addOddChild(this.settings.activePage.value,{isActive:"true"});
        return  App.renderChildren(this,this.propsManager)

    }


    render() {
        var navLinks = <div/>;
        if(this.settings.enable.value){
            var styleObject = this.settings.style.getStyleFor(null,true);
            var cssName = this.settings.CSS.getCSSFor();
            var childrenUI = this.renderChildren();


            if(this.props.useCSS){
                navLinks = <ul className={cssName}>{childrenUI}</ul>;
            }
            else{
                navLinks = <ul className={cssName} style={styleObject}>{childrenUI}</ul>;
            }
        }



        return (navLinks);
    }

}
Weave.registerClass("weavereact.navbar.List", List,[weavejs.api.core.ILinkableObject]);
export default List;
