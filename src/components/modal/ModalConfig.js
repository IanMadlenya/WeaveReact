import ComponentManager from "../../ComponentManager";

import ModalPanelConfig from "./ModalPanelConfig";

(function (module) {

    function ModalConfig() {

        ComponentManager.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            "panelConfig": {
                value: Weave.linkableChild(this, new ModalPanelConfig())
            },
            "open": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "buttonIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }

        });
    }


    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.ModalConfig', ModalConfig,[weavejs.api.core.ILinkableObject]);

    module.exports = ModalConfig;

}(module));
