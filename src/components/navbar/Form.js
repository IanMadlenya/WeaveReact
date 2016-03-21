import React from "react";
import ComponentManager from "../../ComponentManager";

class Form extends React.Component {

    constructor(props) {
        super(props);
        ComponentManager.initialize(this,"container");
    }

    componentWillReceiveProps(nextProps){
        ComponentManager.componentWillReceiveProps(this,nextProps);
    }


    componentWillUnmount(){
         ComponentManager.componentWillUnmount(this);
    }

    // called only when React Parent render is called
    shouldComponentUpdate(nextProps){
        if(ComponentManager.debug)console.log("Form - shouldComponentUpdate");
        if(this.props.dock !== nextProps.dock){
            if(ComponentManager.debug)console.log("props.dock changed");
            return true
        }else if(this.props.position !== nextProps.position){
            if(ComponentManager.debug)console.log("props.position changed");
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
        return ComponentManager.renderChildren(this);
    }




    render() {
        if(ComponentManager.debug)console.log("Form - render");
        if(!this.settings.visible.value)
            return <div/>;

        var styleObject = this.settings.style.getStyleFor(null);
        var cssName = this.settings.CSS.getCSSFor();
        var childrenUI = this.renderChildren();

        if(this.settings.useCSS.state){
            return <div  className={cssName} >
                            {childrenUI}
                    </div>;
        }else{
            return <div  style={styleObject} >
                            {childrenUI}
                    </div>;
        }

    }

}

Weave.registerClass('weavereact.navbar.Form', Form,[weavejs.api.core.ILinkableObject]);

export default Form;
