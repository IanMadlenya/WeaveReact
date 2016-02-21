
import InlineStyle from "./InlineStyle";

class HTMLWrapperConfig{

    constructor(){//to-do need to add verifier for each Session property to restrict to respective property

         Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "CSS":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "useCSS":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });
    }

}

Weave.registerClass('weavereact.HTMLWrapperConfig', HTMLWrapperConfig,[weavejs.api.core.ILinkableObject]);

export default HTMLWrapperConfig;
