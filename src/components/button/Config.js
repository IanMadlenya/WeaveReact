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
            },
            "label":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            }
        });

        this.style.state = {
            display:"flex",
            flexDirection:"row",
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            margin: "0",
            color: "inherit",
            textTransform: "none",
            cursor: "pointer",
            alignItems:"center"
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

