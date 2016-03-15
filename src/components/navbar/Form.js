import React from "react";
import Style from "../../utils/Style";
import App from "../../utils/App";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings;
       App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        App.addForceUpdateToCallbacks(this);
        if(App.debug)console.log("Form - constructor");
    }

    componentWillReceiveProps(nextProps){
        if(App.debug)console.log("Form - componentWillReceiveProps");
        App.componentWillReceiveProps(this,nextProps);
    }


    componentWillUnmount(){
        if(App.debug)console.log("Form - componentWillUnmount");
         App.removeForceUpdateFromCallbacks(this);
    }

    // called only when React Parent render is called
    shouldComponentUpdate(nextProps){
        if(App.debug)console.log("Form - shouldComponentUpdate");
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
        var childStyleObject={};
        var space = this.settings.space.value;
        if((this.props.dock === "right") || (this.props.dock === "left")){
            childStyleObject["marginBottom"] = space;
        }
        else if((this.props.dock === "top") || (this.props.dock === "bottom")){
            childStyleObject["marginRight"] = space;
        }

        this.settings.props.addChildProps("style",childStyleObject);
        return App.renderChildren(this);
    }




    render() {
        if(App.debug)console.log("Form - render");
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
