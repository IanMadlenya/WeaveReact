import React from 'react';
import Style from "../../utils/Style";
import App from "../../utils/App";
import Link from "./Link";


class List extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings;
        App.hookSessionStateForComponentChildren(this.props.children,this.settings);

    }

    componentWillReceiveProps(nextProps){
        if(this.props.children !== nextProps.children){
            App.hookSessionStateForComponentChildren(nextProps.children,this.settings);
        }
        if(this.props.style !== nextProps.style){
            this.settings.style.other.state = nextProps.style;
        }
    }

    componentDidMount(){
        this.settings.enable.addImmediateCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
        this.settings.space.addImmediateCallback(this, this.forceUpdate);
        this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
        this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
        //this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
    }



    componentWillUnmount(){
        this.settings.enable.removeCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
        this.settings.space.removeCallback(this, this.forceUpdate);
        this.settings.rightAlign.removeCallback(this, this.forceUpdate);
        this.settings.activePage.removeCallback(this, this.forceUpdate);
        //this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
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


    renderChildren(CSS){
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

        var clonedChildren = this.settings.children.getNames().map(function(configName,index){
            var config = this.settings.children.getObject(configName);
            var child = this.props.children[index];
            var props = App.mergeInto({},child.props);
            props["pageName"] = configName;
            props["iconOnly"] = iconOnly;
            props["settings"] = config;
            props["key"] = configName;

            if(configName === this.settings.activePage.value) {
                props["isActive"] = true;
            }
            else{
                props["isActive"] = false;
            }
            if(CSS){
                props["className"] = CSS[childName];
            }
            else{
                props["style"] = config.style.getStyleFor(null,true)
            }
            return React.cloneElement(child,props);
        }.bind(this));

        return clonedChildren;
    }


    render() {
        var navLinks = <div/>;

        var childrenUI = []
        var styleObject = this.props.style;

        if(!this.props.useCSS){
            if((this.props.dock !== "right") && (this.props.dock !== "left") && this.settings.rightAlign){
                styleObject["justifyContent"] = "flex-end";
                styleObject["marginRight"] = "auto";
            }
            styleObject = Style.appendVendorPrefix(styleObject);
        }

        if(this.props.useCSS){
            childrenUI = this.renderChildren(this.props.CSS);
            navLinks = <ul className={this.props.className}>{childrenUI}</ul>;
        }
        else{
            childrenUI = this.renderChildren(null);
            navLinks = <ul style={this.props.style}>{childrenUI}</ul>;
        }



        return (navLinks);
    }

}
Weave.registerClass("weavereact.navbar.List", List,[weavejs.api.core.ILinkableObject]);
export default List;
