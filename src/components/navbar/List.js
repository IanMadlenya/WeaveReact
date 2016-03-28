import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";
import Link from "./Link";


class List extends AbstractComponent {

    constructor(props){
        super(props,"container");
    }


    // called only when React Parent render is called
    shouldComponentUpdate(nextProps){
        super.shouldComponentUpdate(nextProps);
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
        return  ComponentManager.renderChildren(this);
    }


    render() {
        if(ComponentManager.debug)console.log("List - render");
        if(!this.settings.visible.value)
            return <div/>;

        var styleObject = this.settings.style.state;
        var cssName = this.settings.CSS.getCSSFor();
        var childrenUI = this.renderChildren();

        if(this.settings.useCSS.state){
            return <ul className={cssName}>{childrenUI}</ul>;
        }
        else{
            return <ul  style={styleObject}>{childrenUI}</ul>;
        }
    }

}
Weave.registerClass("weavereact.navbar.List", List,[weavejs.api.core.ILinkableObject]);
export default List;
