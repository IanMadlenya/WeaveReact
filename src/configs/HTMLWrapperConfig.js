
import ComponentManager from "../ComponentManager";


class HTMLWrapperConfig{


    constructor(){//to-do need to add verifier for each Session property to restrict to respective property
         ComponentManager.createDefaultSessionProperties(this);
    }
}

Weave.registerClass('weavereact.HTMLWrapperConfig', HTMLWrapperConfig,[weavejs.api.core.ILinkableObject]);

export default HTMLWrapperConfig;
