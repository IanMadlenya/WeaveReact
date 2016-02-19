import Brand from "./Brand";
import List from "./List";
import Form from "./Form";
import InlineStyle from "../../configs/InlineStyle";


export class NavbarConfig {
    constructor() {

        Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "CSS":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "brand": {
                value: Weave.linkableChild(this, new NavBrandConfig())
            },
            "form": {
                value: Weave.linkableChild(this, new NavFormConfig())
            },
            "navList": {
                value: Weave.linkableChild(this, new NavListConfig())
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
            zIndex: "1000"
        };
        this.style.padding.state = {padding:"6px"};
        this.style.background.state = "#F8F8F8";
    }
}



//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavbarConfig', NavbarConfig,[weavejs.api.core.ILinkableObject]);



export class NavBrandConfig {
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

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavBrandConfig', NavBrandConfig,[weavejs.api.core.ILinkableObject]);


export class NavListConfig {
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
             "links":{
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
            paddingLeft:"0"
        };

        this.style.margin.state = {
            margin:"7.5px"
        };

    }
}

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavListConfig', NavListConfig,[weavejs.api.core.ILinkableObject]);

export class NavLinkConfig {
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

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavLinkConfig', NavLinkConfig,[weavejs.api.core.ILinkableObject]);


export class NavFormConfig {
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
            paddingLeft:"0"
        };

        this.style.margin.state = {
            margin:"4px",
            alignItems:"stretch"
        };
    }
}

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavFormConfig', NavFormConfig,[weavejs.api.core.ILinkableObject]);




