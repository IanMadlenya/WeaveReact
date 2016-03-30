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

        this.reverseLayout.addImmediateCallback(this,this.updateStyle)


    }

    updateStyle(){
        var flexDir = this.reverseLayout.state?"row-reverse":"row";
        this.style.state = {flexDirection:flexDir};
        //to-do move to manager calss as fliPicons
        var icons = this.icon.state;
        var keys = Object.keys(icons);
        if(this.reverseLayout.state){
            keys.map(function(key,index){
                if(icons[key].indexOf(" fa-flip-horizontal") == -1){//not flipped
                    icons[key] = icons[key] + " fa-flip-horizontal";
                }
            },this);
        }else{
            keys.map(function(key,index){
                if(icons[key].indexOf(" fa-flip-horizontal") != -1){// flipped
                    var index = icons[key].indexOf(" fa-flip-horizontal");
                    icons[key] = icons[key].substring(0,index);
                }
            },this);

        }
        this.icon.state = icons;
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

