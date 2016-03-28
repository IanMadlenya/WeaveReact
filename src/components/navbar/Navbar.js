import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";
import Brand from "./Brand";
import Logo from "./Logo";
import Title from "./Title";
import List from "./List";
import Form from "./Form";
import Link from "./Link";
import HTMLWrapper from "../HTMLWrapper";
import navbarConfig from "./Config";


class Navbar extends AbstractComponent {

    constructor(props){
        super(props,"container");
    }


    renderChildren(){
        this.settings.props.addChildProps("dock",this.settings.dock.value);
        this.settings.props.addChildProps("useCSS",this.settings.useCSS.value);
        return ComponentManager.renderChildren(this,this.propsManager);
    }


    render() {
        if(ComponentManager.debug)console.log("Navbar ---Render---");
        var styleObj = this.settings.style.state;
        var cssName = this.settings.CSS.getCSSFor();
        var childrenUI = this.renderChildren();

        if(this.settings.useCSS.value){
            return (
                <nav className={cssName} style={styleObj}>
                    {childrenUI}
                </nav>
            );
        }else{
            return (
                <nav style={styleObj}>
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


ComponentManager.registerToolConfig(Navbar,navbarConfig.Navbar);
ComponentManager.registerToolConfig(Navbar.Brand,navbarConfig.Brand);
ComponentManager.registerToolConfig(Navbar.Logo,navbarConfig.Logo);
ComponentManager.registerToolConfig(Navbar.Title,navbarConfig.Title);
ComponentManager.registerToolConfig(Navbar.List,navbarConfig.List);
ComponentManager.registerToolConfig(Navbar.Link,navbarConfig.Link);
ComponentManager.registerToolConfig(Navbar.Form,navbarConfig.Form);

ComponentManager.registerToolImplementation("weavereact.navbarConfig.Navbar",Navbar);
ComponentManager.registerToolImplementation("weavereact.navbarConfig.Brand",Navbar.Brand);
ComponentManager.registerToolImplementation("weavereact.navbarConfig.Logo",Navbar.Logo);
ComponentManager.registerToolImplementation("weavereact.navbarConfig.Title",Navbar.Title);
ComponentManager.registerToolImplementation("weavereact.navbarConfig.List",Navbar.List);
ComponentManager.registerToolImplementation("weavereact.navbarConfig.Link",Navbar.Link);
ComponentManager.registerToolImplementation("weavereact.navbarConfig.Form",Navbar.Form);

Weave.registerClass("weavereact.Navbar", Navbar,[weavejs.api.core.ILinkableObject]);

export default Navbar;






