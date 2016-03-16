import InlineStyle from "../../configs/InlineStyle";
import CSS from "../../configs/CSS";
import Props from "../../configs/Props";

class AccordionConfig {
    constructor() {

         Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
             "CSS":{
                value: Weave.linkableChild(this, new CSS())
            },
            "children": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            },
            "activeChild": {// can be index || string
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "childStyle":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "activeChildStyle":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "useCSS":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "mode":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("parentHeight"))
            },
            "props":{
                value:  new Props()
            }
        });

        this.mode.addImmediateCallback(this,this.changeActiveChildStyle)

        this.activeChild.state = 0;

        this.childConfigMap = new Map();
        this.configChildMap = new Map();

        this.style.display.value = "flex";
        this.style.other.state = {
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"inherit",
            height:"100%",
            width:"100%"
        };


        this.childStyle.other.state = {
            flexBasis:"0%"
        };

        this.activeChildStyle.other.state = {
            flexBasis:"inherit"
        };
    }

    changeActiveChildStyle(){
        if(this.mode.state == "parentHeight"){
            this.activeChildStyle.other.state = {
                flexBasis:"100%"
            };
        }else if(this.mode.state == "childHeight"){
            this.activeChildStyle.other.state = {
                flexBasis:"inherit"
            };
        }
    }
}


export default AccordionConfig


//This Function makes this class as SessionClass
Weave.registerClass('weavereact.AccordionConfig', AccordionConfig,[weavejs.api.core.ILinkableObject]);

