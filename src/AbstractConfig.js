import ComponentManager from "../../ComponentManager";

class AbstractConfig {
    constructor() {
        ComponentManager.createDefaultSessionProperties(this);
    }
}

export default AbstractConfig


//This Function makes this class as SessionClass
Weave.registerClass('weavereact.AbstractConfig', AbstractConfig,[weavejs.api.core.ILinkableObject]);

