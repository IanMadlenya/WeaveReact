import Brand from "./Brand";
import List from "./List";
import Form from "./Form";


export class NavbarConfig {
    constructor() {

        Object.defineProperties(this, {
            "type": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(NavbarConfig.types.DEFAULT))
            },
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
            }
        });
    }
}

//to-do replace with flexbox
NavbarConfig.MAIN = 'navbar';

NavbarConfig.types = {
    "DEFAULT": "default",
    "INVERSE": "inverse"
};

//body { padding-top: 70px; } for fixed status we have to set this
NavbarConfig.positionType = {
    "FIXED": "fixed",
    "STATIC": "static"
};

NavbarConfig.position = {
    "TOP": "top",
    "BOTTOM": "bottom"
};

NavbarConfig.alignment = {
    "RIGHT": "pull-right",
    "LEFT": ""
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
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
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
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "rightAlign": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "controllers": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap(weavejs.core.LinkablePlaceholder))
            },
            "space": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
            }
        });
    }
}

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.navbar.config.NavFormConfig', NavFormConfig,[weavejs.api.core.ILinkableObject]);




