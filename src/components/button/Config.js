import ComponentManager from "../../ComponentManager";

class ButtonConfig {
    constructor() {
        ComponentManager.createDefaultSessionProperties(this);

         Object.defineProperties(this, {
            "icon":{//{default: "" , clicked: "" , mouseOver: ""}
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "iconOnly":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "clicked":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });

        this.style.other.state = {
            display:"flex",
            flexDirection:"row",
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            margin: "0",
            color: "inherit",
            textTransform: "none",
            cursor: "pointer"
        };


    }

    getIcon(){
        if(this.clicked.state){
            return this.icon.state["clicked"]
        }
        else{
            return this.icon.state["default"]
        }
    }



}


export default ButtonConfig


//This Function makes this class as SessionClass
Weave.registerClass('weavereact.ButtonConfig', ButtonConfig,[weavejs.api.core.ILinkableObject]);

