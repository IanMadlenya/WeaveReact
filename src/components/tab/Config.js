import InlineStyle from "../../configs/InlineStyle";
import CSS from "../../configs/CSS";
import Style from "../../utils/Style";

class TabsConfig {
    constructor() {

        Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "CSS":{
                value: Weave.linkableChild(this, new CSS())
            },
            "activeTab":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }
        });

        // to-do: Set Bootstrap CSS names for Tabs
        // to-do: set respective CSS - Style in Flexbox
    }
}

class TabConfig {
    constructor() {
        Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "CSS":{
                value: Weave.linkableChild(this, new CSS())
            },
            "title":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            }
        });

        // to-do: Set Bootstrap CSS names for Tabs
        // to-do: set respective CSS - Style in Flexbox
    }
}


const tabsConfig = {};
export default tabsConfig

tabsConfig.Tabs = TabsConfig;
tabsConfig.Tab = TabConfig;

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.tabsConfig.Tabs', tabsConfig.Tabs,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.tabsConfig.Tab', tabsConfig.Tab,[weavejs.api.core.ILinkableObject]);
