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
import Config from "./Config";
import InlineStyle from "../../configs/InlineStyle";
import PropsManager from "../PropsManager";


class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings ? this.props.settings : new navbarConfig.Navbar();
        this.getStyle = this.getStyle.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
        if(this.props.children)App.hookSessionStateForComponentChildren(this.props.children,this.settings);
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

    componentDidMount(){
        this.addCallbacks()
    }

    addCallbacks(){
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this,this.forceUpdate);
        Weave.getCallbacks(this.settings.CSS).addImmediateCallback(this,this.forceUpdate);
        this.settings.useCSS.addImmediateCallback(this,this.forceUpdate);
        this.settings.dock.addImmediateCallback(this,this.forceUpdate);
        this.settings.children.childListCallbacks.addGroupedCallback(this,this.forceUpdate);
    }

    removeCallbacks(){
        Weave.getCallbacks(this.settings.style).removeCallback(this,this.forceUpdate);
        Weave.getCallbacks(this.settings.CSS).removeCallback(this,this.forceUpdate);
        this.settings.useCSS.removeCallback(this,this.forceUpdate);
        this.settings.dock.removeCallback(this,this.forceUpdate);
        this.settings.children.childListCallbacks.removeCallback(this,this.forceUpdate);
    }
    componentWillUnmount(){
        this.removeCallbacks();
    }

    renderChildren(){

         this.propsManager.addNewProps("dock",this.settings.dock.value);
         this.propsManager.addNewProps("useCSS",this.settings.useCSS.value);
         return App.renderChildren(this,this.propsManager);
    }


    render() {

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






