import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";

class Form extends AbstractComponent {

    constructor(props) {
        super(props,"container");
    }



    // called only when React Parent render is called
    shouldComponentUpdate(nextProps){
        super.shouldComponentUpdate(nextProps)
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

        var styleObject = this.settings.style.state;
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
