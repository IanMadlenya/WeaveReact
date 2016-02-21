import Brand from "./Brand";
import List from "./List";
import Form from "./Form";
import InlineStyle from "../../configs/InlineStyle";

class NavConfig {
    constructor() {

        Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "CSS":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            children:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            },
            "useCSS":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "dock":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("top"))
            }
        });

        //initial default values
        this.CSS.state = {
            navbar:"navbar navbar-default",
            brand:{
                header:"navbar-header",
                title:"navbar-brand"
            },
            list:"nav navbar-nav",
            form:"navbar-form navbar-right"
        };


        this.style.display.value = "flex";
        this.style.border.state = {border:"1px solid transparent"};
        this.style.other.state = {
            flexDirection:"row",
            flex:"1",
            height:"7%",
            minHeight:"50px",
            zIndex: "1000",
            alignItems:"center"
        };
        this.style.padding.state = {padding:"6px"};
        this.style.background.state = "#F8F8F8";
    }
}


class BrandConfig {
    constructor() {

        Object.defineProperties(this, {
            "title": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "enable": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            logoPath:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "logoStyle":{
                value: Weave.linkableChild(this, new InlineStyle())
            }
        });
        this.style.padding.state = {
            padding:"15px 15px"
        };
        this.style.font.state = {
            fontSize: "18px",
            lineHeight: "20px"
        };

        this.logoStyle.border.state = {
            border:"2px solid #ebebeb",
            borderRadius:"50%"
        };
        this.logoStyle.other.state = {
            width:"50",
            height:"50"
        };
    }
}



class ListConfig {
    constructor() {

         Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "enable": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "rightAlign": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "activePage": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "children":{
                 value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
             },
             "space":{
                 value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(8))
             }
        });

        this.style.display.value = "flex";
        this.style.other.state = {
            flexDirection:"inherit",
            flex:"1",
            listStyleType:"none",
            paddingLeft:"0",
            alignItems:"inherit"
        };

        this.style.margin.state = {
            margin:"7.5px"
        };

    }
}


class LinkConfig {
    constructor() {

        Object.defineProperties(this, {
            "title": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("Link"))
            },
            "iconName": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-home"))
            },
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
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

         Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "enable": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "rightAlign": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "controllers": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            },
            "space": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
            }
        });

        this.style.display.value = "flex";
         this.style.other.state = {
            flexDirection:"inherit",
            flex:"1",
            listStyleType:"none",
            paddingLeft:"0",
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
navbarConfig.List = ListConfig;
navbarConfig.Link = LinkConfig;
navbarConfig.Form = FormConfig;

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbarConfig.Navbar', navbarConfig.Navbar,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Brand', navbarConfig.Brand,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.List', navbarConfig.List,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Link', navbarConfig.Link,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.navbarConfig.Form', navbarConfig.Form,[weavejs.api.core.ILinkableObject]);

