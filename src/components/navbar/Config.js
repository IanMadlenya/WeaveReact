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
        this.style.other.state = {flexDirection:"row",flex:"1",height:"6%"};
        this.style.padding.state = {padding:"6px"};
        this.style.background.state = "#F8F8F8";
    }
}




//body { padding-top: 70px; } for fixed status we have to set this
NavbarConfig.positionType = {
    "FIXED": "fixed",
    "STATIC": "static"
};

NavbarConfig.position = {
    "TOP": "top",
    "BOTTOM": "bottom",
    "RIGHT": "right",
    "LEFT": "left"
};


//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavbarConfig', NavbarConfig,[weavejs.api.core.ILinkableObject]);





export class NavLinkConfig {
    constructor() {

        Object.defineProperties(this, {
            "title": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("Link"))
            },
            "iconName": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-home"))
            }
        });
    }
}

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavLinkConfig', NavLinkConfig,[weavejs.api.core.ILinkableObject]);


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
             "logoStyle":{
                value: Weave.linkableChild(this, new InlineStyle())
            }
        });
        this.logoStyle.border.state = {
            border:"2px solid #F3B46E",
            borderRadius:"50%",
            width:"100",
            height: "90"
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
                 value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(2))
             }
        });

        this.style.display.value = "flex";
        this.style.other.state = {
            flexDirection:"inherit",
            flex:"1",
            listStyleType:"none",
            paddingLeft:"0"
        };

    }
}

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavListConfig', NavListConfig,[weavejs.api.core.ILinkableObject]);


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
    }
}

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavFormConfig', NavFormConfig,[weavejs.api.core.ILinkableObject]);




