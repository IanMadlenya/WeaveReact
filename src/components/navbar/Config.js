import Brand from "./Brand";
import List from "./List";
import Form from "./Form";


export class NavbarConfig {
    constructor() {

        Object.defineProperties(this, {
            "positionType": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(NavbarConfig.positionType.STATIC))
            },
            "position": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(NavbarConfig.position.TOP))
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
            backgroundColor:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("#F8F8F8"))
            },
            border:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            padding:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            useCSS:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            CSS:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            }
        });

        //initial default values
        this.border.state = {border:"1px solid transparent"};
        this.padding.state = {padding:"6px"};
        this.CSS.state = {
            navbar:"navbar navbar-default",
            brand:{
                header:"navbar-header",
                title:"navbar-brand"
            },
            list:"nav navbar-nav",
            form:"navbar-form navbar-right"

        };
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
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("Brand"))
            },
            "enable": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            }
        });
    }
}

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavBrandConfig', NavBrandConfig,[weavejs.api.core.ILinkableObject]);


export class NavListConfig {
    constructor() {

         Object.defineProperties(this, {
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
    }
}

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavListConfig', NavListConfig,[weavejs.api.core.ILinkableObject]);


export class NavFormConfig {
    constructor() {

         Object.defineProperties(this, {
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
    }
}

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavFormConfig', NavFormConfig,[weavejs.api.core.ILinkableObject]);




