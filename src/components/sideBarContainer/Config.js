import InlineStyle from "../../configs/InlineStyle";
import CSS from "../../configs/CSS";
import Props from "../../configs/Props";
import ButtonConfig from "../button/Config";
import ComponentManager from "../../ComponentManager";

class ContainerConfig {
    constructor() {
        ComponentManager.createDefaultSessionProperties(this,"container");
         Object.defineProperties(this, {

            "mode":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "overlay":{
                value: Weave.linkableChild(this, new OverlayConfig())
            },
            "leftSideBar":{
                 value: Weave.linkableChild(this, new SideBarConfig())
            },
            "rightSideBar":{
                 value: Weave.linkableChild(this, new SideBarConfig())
            },
            "topSideBar":{
                 value: Weave.linkableChild(this, new SideBarConfig())
            },
            "bottomSideBar":{
                 value: Weave.linkableChild(this, new SideBarConfig())
            }

        });


        this.leftSideBar.direction = "left";
        this.rightSideBar.direction = "right";
        this.bottomSideBar.direction = "bottom";
        this.topSideBar.direction = "top";


        this.style.display.state = "flex"
        this.style.other.state = {
            flexDirection:"row",
            width:"100%",
            height:"100%"
        }

    }


}


class OverlayConfig {
    constructor() {

        ComponentManager.createDefaultSessionProperties(this);

         Object.defineProperties(this, {
             "open":{
                 value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
             }
        });
        this.style.position.state = "fixed";

        this.open.addImmediateCallback(this, this.updateStyle);

    }

   updateStyle(){
     if(this.open.state){
         this.style.other.state ={
            zIndex: "1",
            width: "100%",
            height: "100%",
            transform: "translate3d(0, 0, 0)",
            background: "rgba(0, 0, 0, 0.1)",
            opacity:  1
        }

     }else{
         this.style.other.state ={
            zIndex: "1",
            width: "100%",
            height: "100%",
            transform: "translate3d(-100%, 0, 0)",
            background: "rgba(0, 0, 0, 0.1)",
            opacity:  0
        }

     }
   }



}



class SideBarConfig {
    constructor() {
        ComponentManager.createDefaultSessionProperties(this,"container");

         Object.defineProperties(this, {

             "size":{
                value:  Weave.linkableChild(this, new weavejs.core.LinkableString("16%"))
            },
             static:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
             iconsOnly:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
             open:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });


        this.direction = "";

        this.open.addImmediateCallback(this,this.updateStyle,true);
        this.static.addImmediateCallback(this,this.updateSideBarController,true);

    }

    updateStyle(){
        this.style.display.state = "flex";

        var styleObject = this.style.other.state ? this.style.other.state: {};
        styleObject["justifyContent"]="flex-start";


        if(this.open.state){
            styleObject["flexBasis"] = this.size.value;
            styleObject["alignItems"] =  "flex-start";
        }else{
            // for static state the switch button with will be taken
            //styleObject["flexBasis"] = this.static.state?"3%":"0%";
            styleObject["flexBasis"] = "0%";
            styleObject["alignItems"] =  "center";
        }

        if(this.direction === "right" || this.direction === "left"){
            styleObject["flexDirection"] = "column";
            this.style.other.state = styleObject
        }else if(this.direction === "top" || this.direction === "bottom"){
            styleObject["flexDirection"] = "row";
            this.style.other.state = styleObject
        }
        this.style.other.state = styleObject;
    }

    toggleSideBarState(){
        var buttonConfig = this.children.getObject("switchButton");
        this.open.state = !buttonConfig.clicked.state;
    }

    updateSideBarController(){

        if(this.static.state){
            var buttonConfig = this.children.requestObject("switchButton", ButtonConfig);
            buttonConfig.icon.state = {"clicked": "fa fa-align-justify" ,"default":"fa fa-times"};
            var iconStyle = buttonConfig.iconModeStyle.other.state;
            iconStyle = iconStyle?iconStyle:{};
            iconStyle["fontSize"] = 24;
            buttonConfig.iconModeStyle.other.state = iconStyle;
            buttonConfig.iconOnly.state = true;
            var btnStyle = buttonConfig.style.other.state;
            btnStyle["justifyContent"] =  "flex-end";
            btnStyle["alignSelf"] =  "flex-end";
            buttonConfig.style.other.state = btnStyle;
            buttonConfig.props.addEvent("onClick",this.toggleSideBarState,null,this);
            var buttonStyle = buttonConfig.style.other.state ;
            buttonStyle["order"] = "-1";
            buttonStyle["margin"] = "4px";
            buttonConfig.clicked.state = !this.open.state;
        }else{
            this.children.removeObject("switchButton");
        }
        //this.updateStyle();
    }



}


const sideBarContainerConfig = {};
export default sideBarContainerConfig

sideBarContainerConfig.Container = ContainerConfig;
sideBarContainerConfig.Overlay = OverlayConfig;
sideBarContainerConfig.SideBar = SideBarConfig;

//This Function makes this class as SessionClass
Weave.registerClass('weavereact.sideBarContainerConfig.Container', sideBarContainerConfig.Container,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.sideBarContainerConfig.Overlay', sideBarContainerConfig.Overlay,[weavejs.api.core.ILinkableObject]);
Weave.registerClass('weavereact.sideBarContainerConfig.SideBar', sideBarContainerConfig.SideBar,[weavejs.api.core.ILinkableObject]);




