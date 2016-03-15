import React from 'react';
import Style from "../../utils/Style";
import App from "../../utils/App";
import Link from "./Link";


class List extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings;
        App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        App.addForceUpdateToCallbacks(this);
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

        this.settings.props.addChildProps("iconOnly",iconOnly);
        this.settings.props.addChildProps("style",linkStyleObject);
        this.settings.props.addChildProps("isActive",false,true);
        this.settings.props.keyProp = "objectName";
        this.settings.props.addOddChildren([this.settings.activePage.value]);
        return  App.renderChildren(this,this.propsManager);
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
