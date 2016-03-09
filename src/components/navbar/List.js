import React from 'react';
import Style from "../../utils/Style";
import App from "../../utils/App";
import Link from "./Link";
import PropsManager from "../PropsManager";


class List extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings;
        App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        App.addForceUpdateToCallbacks(this);
        this.propsManager = new PropsManager();
        if(App.debug)console.log("List - constructor");
    }

    componentWillReceiveProps(nextProps){
        if(App.debug)console.log("List - componentWillReceiveProps");
        App.componentWillReceiveProps(this,nextProps);
    }


    componentWillUnmount(){
        if(App.debug)console.log("List - componentWillUnmount");
         App.removeForceUpdateFromCallbacks(this);
    }

    // called only when React Parent render is called
    shouldComponentUpdate(nextProps){
        if(App.debug)console.log("List - shouldComponentUpdate");
        if(this.props.dock !== nextProps.dock){
            if(App.debug)console.log("props.dock changed");
            return true
        }else if(this.props.position !== nextProps.position){
            if(App.debug)console.log("props.position changed");
            return true
        }else if(this.props.useCSS !== nextProps.useCSS){
            if(App.debug)console.log("props.useCSS changed");
            return true
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
        if(App.debug)console.log("List - render");
        var navLinks = <div/>;
        if(this.settings.enable.value){
            var styleObject = this.settings.style.getStyleFor(null,true);
            var cssName = this.settings.CSS.getCSSFor();
            var childrenUI = this.renderChildren();
            if(this.props.useCSS){
                navLinks = <ul className={cssName}>{childrenUI}</ul>;
            }
            else{
                navLinks = <ul  style={styleObject}>{childrenUI}</ul>;
            }
        }
        return (navLinks);
    }

}
Weave.registerClass("weavereact.navbar.List", List,[weavejs.api.core.ILinkableObject]);
export default List;
