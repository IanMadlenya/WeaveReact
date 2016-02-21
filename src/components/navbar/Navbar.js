import React from 'react';
import Style from "../../utils/Style";
import App from "../../utils/App";
import Brand from "./Brand";
import List from "./List";
import Form from "./Form";
import Link from "./Link";
import HTMLWrapper from "../HTMLWrapper";
import navbarConfig from "./Config";
import Config from "./Config";
import InlineStyle from "../../configs/InlineStyle";


class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings ? this.props.settings : new navbarConfig.Navbar();
        this.getStyle = this.getStyle.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
        App.hookSessionStateForComponentChildren(this.props.children,this.settings);
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
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this,this.forceUpdate);
        this.settings.CSS.addImmediateCallback(this,this.forceUpdate);
        this.settings.useCSS.addImmediateCallback(this,this.forceUpdate);
        this.settings.dock.addImmediateCallback(this,this.forceUpdate);
    }

    componentWillUnmount(){
        Weave.getCallbacks(this.settings.style).removeCallback(this,this.forceUpdate);
        this.settings.CSS.removeCallback(this,this.forceUpdate);
        this.settings.useCSS.removeCallback(this,this.forceUpdate);
        this.settings.dock.removeCallback(this,this.forceUpdate);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.children !== nextProps.children){
            App.hookSessionStateForComponentChildren(nextProps.children,this.settings);
        }
        if(this.props.style !== nextProps.style){// user style added through UI is Sessioned
            this.settings.style.domDefined.state = nextProps.style;
        }
    }


    renderChildren(CSS){
        var clonedChildren = React.Children.map(this.props.children,function(child,index){
            var childName = "";
            var props = App.mergeInto({},child.props);
            if(typeof(child.type) === "string"){
                childName =  child.type + index;
                var htmlWrapperConfig = this.settings.children.getObject(childName);
                return <HTMLWrapper settings={htmlWrapperConfig}>{child}</HTMLWrapper>
            }else{
                var additionalProps = {
                    "dock": this.settings.dock.value,
                    "position":this.settings.style.position.value,
                    "useCSS":this.settings.useCSS.value
                }
                props = App.mergeInto(props,additionalProps);
                childName =  child.type.name + index;
                var childConfig = this.settings.children.getObject(childName);
                props["settings"] = childConfig;
                if(CSS){
                     props["className"] = CSS[childName];
                     props["CSS"] = CSS;
                }else{
                    var styleConfig = childConfig.style;
                    props["style"]  = styleConfig.getStyleFor(null,true);
                }
                return React.cloneElement(child,props);
            }

        },this);
        return clonedChildren;
    }


    render() {

        var styleObj = this.getStyle();
        var newProps = {}
        var additionalProps = {
            "dock": this.settings.dock.value,
            "position":this.settings.style.position.value,
            "useCSS":this.settings.useCSS.value
        }

        var childrenUI = []

        if(this.settings.useCSS.value){
            var cssObj = this.settings.CSS.state;
            childrenUI = this.renderChildren(cssObj);
            return (
                <nav className={cssObj.navbar}>
                    {childrenUI}
                </nav>
            );
        }else{
            childrenUI = this.renderChildren();
            return (
                <nav style={styleObj}>
                    {childrenUI}
                </nav>
            );
        }
    }

}

Navbar.Brand = Brand;
Navbar.List = List;
Navbar.Link = Link;
Navbar.Form = Form;


App.registerToolConfig(Navbar,navbarConfig.Navbar);
App.registerToolConfig(Navbar.Brand,navbarConfig.Brand);
App.registerToolConfig(Navbar.List,navbarConfig.List);
App.registerToolConfig(Navbar.Link,navbarConfig.Link);
App.registerToolConfig(Navbar.Form,navbarConfig.Form);

Weave.registerClass("weavereact.Navbar", Navbar,[weavejs.api.core.ILinkableObject]);

export default Navbar;






