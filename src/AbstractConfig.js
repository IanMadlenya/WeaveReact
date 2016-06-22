import ComponentManager from "./ComponentManager";

class AbstractConfig {
    constructor(type) {
        ComponentManager.createDefaultSessionProperties(this,type);
    }
}

export default AbstractConfig


//This Function makes this class as SessionClass
Weave.registerClass( AbstractConfig,['weavereact.AbstractConfig'],[weavejs.api.core.ILinkableObject],"Abstract Config");

