import InlineStyle from "../../configs/InlineStyle";
import CSS from "../../configs/CSS";
import Style from "../../utils/Style";

class ParentConfig {
    constructor() {

        Object.defineProperties(this, {
            "title": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "CSS":{
                value: Weave.linkableChild(this, new CSS())
            },
            children:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            }
        });

        this.childConfigMap = new Map();
        this.configChildMap = new Map();


        this.style.display.value = "flex";
        this.style.border.state = {border:"1px solid transparent"};
        this.style.other.state = {
            flexDirection:"column",
            flex:"1"
        };
        this.style.background.state = "#F8F8F8";
    }

}


class ChildConfig {
    constructor() {

        Object.defineProperties(this, {
            "title": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "enable": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "CSS":{
                value: Weave.linkableChild(this, new CSS())
            },
            "children":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            }
        });

        this.childConfigMap = new Map();
        this.configChildMap = new Map();

        this.style.padding.state = {
            padding:"15px 15px"
        };
        this.style.font.state = {
            fontSize: "18px",
            lineHeight: "20px"
        };

        this.style.display.value = "flex";
        this.style.other.state = {
            flexDirection:"inherit"
        };
    }
}


const config = {};
export default config

config.Parent = ParentConfig;
config.Child = ChildConfig;

//This Function makes this class as SessionClass
Weave.registerClass( config.Parent,['weavereact.config.Parent'],[weavejs.api.core.ILinkableObject],"Parent Config");
Weave.registerClass( config.Child,['weavereact.config.Child'],[weavejs.api.core.ILinkableObject],"Child Config");

