import React from 'react';
import Style from "../../utils/Style";
import App from "../../utils/App";
import Brand from "./Brand";
import Logo from "./Logo";
import Title from "./Title";
import List from "./List";
import Form from "./Form";
import Link from "./Link";
import HTMLWrapper from "../HTMLWrapper";
import navbarConfig from "./Config";
import InlineStyle from "../../configs/InlineStyle";
import PropsManager from "../PropsManager";


class Navbar extends React.Component {

    constructor(props){
         if(App.debug)console.log("Navbar constructor");
        super(props);
        this.settings = this.props.settings ? this.props.settings : new navbarConfig.Navbar();
        this.getStyle = this.getStyle.bind(this);

        this.renderChildren = this.renderChildren.bind(this);
        App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        App.addForceUpdateToCallbacks(this);
        this.propsManager =  new PropsManager();
    }

     getStyle() {
        var styleObject = this.settings.style.getStyleFor(null)
         if(styleObject["position"] === "fixed"){
             if(this.settings.dock.value === "top"){
                styleObject["top"] = "0";
             }else if(this.settings.dock.value === "bottom"){
                styleObject["bottom"] = "0";
             }else if(this.settings.dock.value === "right"){
                styleObject["right"] = "0";
                styleObject["flexDirection"] = "column";
                styleObject["width"] = "5%";
                styleObject["height"] = "100%";
             }else if(this.settings.dock.value === "left"){
                styleObject["left"] = "0";
                styleObject["flexDirection"] = "column";
                styleObject["width"] = "5%";
                styleObject["height"] = "100%";
             }
         }
        return Style.appendVendorPrefix(styleObject);
    }



    componentWillUnmount(){
        if(App.debug)console.log("Navbar componentWillUnmount");
        App.removeForceUpdateFromCallbacks(this);
    }


    componentWillReceiveProps(nextProps){
        if(App.debug)console.log("Navbar componentWillReceiveProps");
        App.componentWillReceiveProps(this,nextProps);
    }

    // weavestate change directly calls forceUpdate, so no need to use Weave.detectChange
    shouldComponentUpdate(){
        if(App.debug)console.log("Navbar shouldComponentUpdate");
        // default return true
        return false; // this ensures parent render wont render the navbar
    }


    renderChildren(){
         this.propsManager.addNewProps("dock",this.settings.dock.value);
         this.propsManager.addNewProps("useCSS",this.settings.useCSS.value);
         return App.renderChildren(this,this.propsManager);
    }


    render() {
        if(App.debug)console.log("Navbar ---Render---");
        var styleObj = this.getStyle();
        var cssName = this.settings.CSS.getCSSFor();
        var childrenUI = this.renderChildren();

        if(this.settings.useCSS.value){
            return (
                <nav className={cssName}>
                    {childrenUI}
                </nav>
            );
        }else{
            return (
                <nav className={cssName} style={styleObj}>
                    {childrenUI}
                </nav>
            );
        }
    }

}

Navbar.Brand = Brand;
Navbar.Logo = Logo;
Navbar.Title = Title;
Navbar.List = List;
Navbar.Link = Link;
Navbar.Form = Form;


App.registerToolConfig(Navbar,navbarConfig.Navbar);
App.registerToolConfig(Navbar.Brand,navbarConfig.Brand);
App.registerToolConfig(Navbar.Logo,navbarConfig.Logo);
App.registerToolConfig(Navbar.Title,navbarConfig.Title);
App.registerToolConfig(Navbar.List,navbarConfig.List);
App.registerToolConfig(Navbar.Link,navbarConfig.Link);
App.registerToolConfig(Navbar.Form,navbarConfig.Form);

App.registerToolImplementation("weavereact.navbarConfig.Navbar",Navbar);
App.registerToolImplementation("weavereact.navbarConfig.Brand",Navbar.Brand);
App.registerToolImplementation("weavereact.navbarConfig.Logo",Navbar.Logo);
App.registerToolImplementation("weavereact.navbarConfig.Title",Navbar.Title);
App.registerToolImplementation("weavereact.navbarConfig.List",Navbar.List);
App.registerToolImplementation("weavereact.navbarConfig.Link",Navbar.Link);
App.registerToolImplementation("weavereact.navbarConfig.Form",Navbar.Form);

Weave.registerClass("weavereact.Navbar", Navbar,[weavejs.api.core.ILinkableObject]);

export default Navbar;






