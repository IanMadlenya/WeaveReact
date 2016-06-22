
import ComponentManager from "../ComponentManager";


class HTMLWrapperConfig{


    constructor(){//to-do need to add verifier for each Session property to restrict to respective property
         ComponentManager.createDefaultSessionProperties(this);
    }
}

Weave.registerClass( HTMLWrapperConfig,['weavereact.HTMLWrapperConfig'],[weavejs.api.core.ILinkableObject],"HTML Wrapper Config");

export default HTMLWrapperConfig;
