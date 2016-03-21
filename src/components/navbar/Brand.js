import React from "react";
import ComponentManager from "../../ComponentManager";
import HTMLWrapper from "../HTMLWrapper";

class Brand extends React.Component {

    constructor(props) {
        super(props);
        ComponentManager.initialize(this,"container");
    }

    componentWillReceiveProps(nextProps){
        ComponentManager.componentWillReceiveProps(this,nextProps);
    }


    componentWillUnmount () {
        ComponentManager.componentWillUnmount(this);
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


    renderChildren(){
        return ComponentManager.renderChildren(this);
    }



    render() {
        var BrandUI = <div/>;

        if(!this.settings.visible.value)
            return BrandUI;

        var cssName = this.settings.CSS.getCSSFor();
        var styleObject = this.settings.style.getStyleFor(null,true);
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
Weave.registerClass("weavereact.navbar.Brand", Brand,[weavejs.api.core.ILinkableObject]);
export default Brand;
