import Brand from "./Brand";
import List from "./List";
import Form from "./Form";
import InlineStyle from "../../configs/InlineStyle";
import Style from "../../utils/Style";
import ComponentManager from "../../ComponentManager";

class NavConfig {
    constructor() {
        ComponentManager.createDefaultSessionProperties(this,"container");

        Object.defineProperties(this, {
            "addGapAt":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
            },
            "dock":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("top"))
            }
        });

        //initial default values
        this.CSS.className.state = "navbar navbar-default";


        this.style.display.value = "flex";
        this.style.border.state = {border:"1px solid transparent"};
        this.style.other.state = {
            flexDirection:"row",
            height:"7%",
            minHeight:"50px",
            zIndex: "1000",
            alignItems:"center",
            justifyContent:"space-between"
        };
        this.style.padding.state = {padding:"4px"};
        this.style.background.state = "#F8F8F8";

        this.dock.addImmediateCallback(this,this.updateStyle)
    }

    updateStyle(){
        var styleObject = this.style.other.state;
        styleObject["top"] = "";
        styleObject["bottom"] = "";
        styleObject["right"] = "";
        styleObject["left"] = "";

        if(this.dock.value === "top"){
            this.style.position.state = "static";
            styleObject["top"] = "0";
            styleObject["flexDirection"] = "row";
            styleObject["width"] = "100%";
            styleObject["height"] = "5%";
         }else if(this.dock.value === "bottom"){
            this.style.position.state = "fixed";
            styleObject["bottom"] = "0";
            styleObject["flexDirection"] = "row";
            styleObject["width"] = "100%";
            styleObject["height"] = "5%";
         }else if(this.dock.value === "right"){
             this.style.position.state = "fixed";
            styleObject["right"] = "0";
            styleObject["flexDirection"] = "column";
            styleObject["width"] = "5%";
            styleObject["height"] = "100%";
         }else if(this.dock.value === "left"){
             this.style.position.state = "fixed";
            styleObject["left"] = "0";
            styleObject["flexDirection"] = "column";
            styleObject["width"] = "5%";
            styleObject["height"] = "100%";
         }

        this.style.other.state = styleObject;

    }


}


class BrandConfig {
    constructor() {

        ComponentManager.createDefaultSessionProperties(this,"container");

        Object.defineProperties(this, {
            "title": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }
        });

        this.CSS.className.state = "navbar-header";

        this.style.padding.state = {
            padding:"15px 15px"
        };
        this.style.font.state = {
            fontSize: "18px",
            lineHeight: "20px"
        };

        this.style.display.value = "flex";
        this.style.other.state = {
            flexDirection:"inherit",
            alignItems:"inherit"
        };
    }
}


class LogoConfig {
    constructor() {
        ComponentManager.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            src:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }
        });

        this.style.border.state = {
            border:"2px solid #ebebeb",
            borderRadius:"50%"
        };
        this.style.other.state = {
            width:"50",
            height:"50"
        };
    }
}

class TitleConfig {
    constructor() {

        ComponentManager.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            title:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }
        });

        this.CSS.className.state = "navbar-brand";

        this.style.font.state = {
            lineHeight: "20px",
            fontSize:"18px"
        };

    }
}



class ListConfig {
    constructor() {

        ComponentManager.createDefaultSessionProperties(this,"container");

         Object.defineProperties(this, {
            "align": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
            },
            "activePage": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "space":{
                 value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(8))
            }
        });

        this.CSS.className.state = "nav navbar-nav";

        this.style.display.value = "flex";
        this.style.other.state = {
            flexDirection:"inherit",
            listStyleType:"none",
            paddingLeft:"0",
            alignItems:"inherit"
        };

        this.style.margin.state = {
            margin:"7.5px"
        };

        this.align.addImmediateCallback(this,this.updateStyle);

    }


    updateStyle(){
        Style.alignChildren(this.style,this.align.state);
    }
}


class LinkConfig {
    constructor() {

        ComponentManager.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            "title": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "iconName": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-home"))
            },
            "activeLinkStyle":{
                value: Weave.linkableChild(this, new InlineStyle())
            }
        });

        this.style.font.state = {
            lineHeight: "20px",
            color:"#777"
        };
        this.style.padding.state = {
            paddingTop: "10px",
            paddingBottom: "10px"
        };
    }
}



class FormConfig {
    constructor() {

        ComponentManager.createDefaultSessionProperties(this,"container");

         Object.defineProperties(this, {
            "rightAlign": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "addGapAt":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
            },
            "space": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
            }
        });

        this.CSS.className.state = "navbar-form navbar-right";


        this.style.display.value = "flex";
        this.style.other.state = {
            flexDirection:"inherit",
            alignItems:"inherit"
        };

        this.style.margin.state = {
            margin:"4px",
        };
    }
}


const navbarConfig = {};
export default navbarConfig

navbarConfig.Navbar = NavConfig;
navbarConfig.Brand = BrandConfig;
navbarConfig.Logo = LogoConfig;
navbarConfig.Title = TitleConfig;
navbarConfig.List = ListConfig;
navbarConfig.Link = LinkConfig;
navbarConfig.Form = FormConfig;

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbarConfig.Navbar', navbarConfig.Navbar,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Brand', navbarConfig.Brand,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Logo', navbarConfig.Logo,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Title', navbarConfig.Title,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.List', navbarConfig.List,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Link', navbarConfig.Link,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Form', navbarConfig.Form,[weavejs.api.core.ILinkableObject]);

