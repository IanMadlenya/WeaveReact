import Brand from "./Brand";
import List from "./List";
import Form from "./Form";
import InlineStyle from "../../configs/InlineStyle";
import CSS from "../../configs/CSS";
import Style from "../../utils/Style";

class NavConfig {
    constructor() {

        Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "CSS":{
                value: Weave.linkableChild(this, new CSS())
            },
            children:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            },
            "addGapAt":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
            },
            "useCSS":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "dock":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("top"))
            }
        });

        this.childConfigMap = new Map();
        this.configChildMap = new Map();


        //initial default values
        this.CSS.className.state = "navbar navbar-default";

        this.style.display.value = "flex";
        this.style.border.state = {border:"1px solid transparent"};
        this.style.other.state = {
            flexDirection:"row",
            flex:"1",
            height:"7%",
            minHeight:"50px",
            zIndex: "1000",
            alignItems:"center",
            justifyContent:"space-between"
        };
        this.style.padding.state = {padding:"4px"};
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
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "CSS":{
                value: Weave.linkableChild(this, new CSS())
            },
            "children":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            }
        });

        this.CSS.className.state = "navbar-header";

        this.childConfigMap = new Map();
        this.configChildMap = new Map();

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

        Object.defineProperties(this, {
            "enable": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            src:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "CSS":{
                value: Weave.linkableChild(this, new CSS())
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

        Object.defineProperties(this, {
            "enable": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            title:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "CSS":{
                value: Weave.linkableChild(this, new CSS())
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

         Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
             "CSS":{
                value: Weave.linkableChild(this, new CSS())
            },
            "enable": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "align": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
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

        this.CSS.className.state = "nav navbar-nav";

        this.childConfigMap = new Map();
        this.configChildMap = new Map();

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
            },
            "CSS":{
                value: Weave.linkableChild(this, new CSS())
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
            "children": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            },
            "addGapAt":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
            },
            "space": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
            },
             "CSS":{
                value: Weave.linkableChild(this, new CSS())
            }
        });

        this.CSS.className.state = "navbar-form navbar-right";

        this.childConfigMap = new Map();
        this.configChildMap = new Map();
        //this.addGapAt.state = 0;
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

