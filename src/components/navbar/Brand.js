import React from 'react';
import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";
import HTMLWrapper from "../HTMLWrapper";

class Brand extends AbstractComponent {

    constructor(props) {
        super(props,"container");
    }


    shouldComponentUpdate(nextProps){
        super.shouldComponentUpdate(nextProps);
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


    renderChildren(){
        return ComponentManager.renderChildren(this);
    }



    render() {
         if(ComponentManager.debug)console.log("Brand - render");
        var BrandUI = <div/>;

        if(!this.settings.visible.value)
            return BrandUI;

        var cssName = this.settings.CSS.getCSSFor();
        var styleObject = this.settings.style.state;
        var childrenUI = this.renderChildren();

        if(this.settings.useCSS.value){
            BrandUI = <div className={cssName}>
                        {childrenUI}
                      </div>
        }else{
            BrandUI = <div style={styleObject}>
                        {childrenUI}
                      </div>
        }


        return (BrandUI);
    }
}
Weave.registerClass( Brand,["weavereact.navbar.Brand"],[weavejs.api.core.ILinkableObject],'Navbar Brand');
export default Brand;
