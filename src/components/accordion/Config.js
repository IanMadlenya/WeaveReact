import ComponentManager from "../../ComponentManager";
import InlineStyle from "../../configs/InlineStyle";

class AccordionConfig  {
    constructor() {

        ComponentManager.createDefaultSessionProperties(this,"container");

         Object.defineProperties(this, {

            "activeChild": {// can be index || string
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "childStyle":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "activeChildStyle":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            "mode":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("parentHeight"))
            }
        });

        this.mode.addImmediateCallback(this,this.changeActiveChildStyle)

        this.activeChild.state = 0;


        this.style.state = {
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"inherit",
            height:"100%",
            width:"100%"
        };


        this.childStyle.state = {
            flexBasis:"0%"
        };

        this.activeChildStyle.state = {
            flexBasis:"inherit"
        };
    }

    setIconModeLayout(isIcon){
        var styleObject = {};
        if(isIcon)styleObject["alignItems"] = "center";
        else styleObject["alignItems"] = "stretch";
        this.style.state = styleObject;

    }

    changeActiveChildStyle(){
        if(this.mode.state == "parentHeight"){
            this.activeChildStyle.state = {
                flexBasis:"100%"
            };
        }else if(this.mode.state == "childHeight"){
            this.activeChildStyle.state = {
                flexBasis:"inherit"
            };
        }
    }
}


export default AccordionConfig


//This Function makes this class as SessionClass
Weave.registerClass('weavereact.AccordionConfig', AccordionConfig,[weavejs.api.core.ILinkableObject]);

