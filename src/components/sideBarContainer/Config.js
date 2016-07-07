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

        this.style.state = {
            display:"flex",
            flexDirection:"row",
            width:"100%",
            height:"100%"
        }

        //todo move this to componentManager defaultCallbacks
        this.reverseLayout.addGroupedCallback(this, this.updateSideBarLyout);

    }

    updateSideBarLyout(){
        var revLayout = this.reverseLayout.state;
        this.style.state = {
            flexDirection: revLayout?"row-reverse":"row"
        }
        if(this.leftSideBar.visible.state)this.leftSideBar.reverseLayout.state =  revLayout;
        if(this.rightSideBar.visible.state)this.rightSideBar.reverseLayout.state =  revLayout;
        if(this.bottomSideBar.visible.state)this.bottomSideBar.reverseLayout.state =  revLayout;
        if(this.topSideBar.visible.state)this.topSideBar.reverseLayout.state =  revLayout;
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
        this.style.state = {
            position: "fixed"
        };

        this.open.addImmediateCallback(this, this.updateStyle);

    }

   updateStyle(){
     if(this.open.state){
         this.style.state = {
            zIndex: "1",
            width: "100%",
            height: "100%",
            transform: "translate3d(0, 0, 0)",
            background: "rgba(0, 0, 0, 0.1)",
            opacity:  1
        }

     }else{
         this.style.state ={
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
        
        this.visible.state = false;

        this.open.addImmediateCallback(this,this.updateStyle,true);
        this.reverseLayout.addImmediateCallback(this,this.updateStyle,true);
        this.static.addImmediateCallback(this,this.updateSideBarController,true);

    }

    updateStyle(){

        var styleObject =  {
            display : "flex",
            justifyContent:"flex-start"
        };

        if(this.open.state){
            styleObject["flexBasis"] = this.size.value;
            styleObject["alignItems"] =  this.reverseLayout.state?"flex-end":"flex-start";
        }else{
            // for static state the switch button with will be taken
            //styleObject["flexBasis"] = this.static.state?"3%":"0%";
            styleObject["flexBasis"] = "0%";
            styleObject["alignItems"] =  "center";
        }

        if(this.direction === "right" || this.direction === "left"){
            styleObject["flexDirection"] = "column";
            this.style.state = styleObject
        }else if(this.direction === "top" || this.direction === "bottom"){
            styleObject["flexDirection"] = "row";
            this.style.state = styleObject
        }
        this.style.state = styleObject;
    }

    toggleSideBarState(){
        var buttonConfig = this.children.getObject("switchButton");
        this.open.state = !buttonConfig.clicked.state;
    }

    updateSideBarController(){

        if(this.static.state){
            var buttonConfig = this.children.requestObject("switchButton", ButtonConfig);
            buttonConfig.icon.state = {"clicked": "fa fa-align-justify" ,"default":"fa fa-times"};
            buttonConfig.iconModeStyle.state = {
                fontSize: "24"
            };
            buttonConfig.iconOnly.state = true;
            buttonConfig.style.state = {
                justifyContent: "flex-end",
                alignSelf:"flex-end",
                order:"-1",
                margin: "4px"
            };
            buttonConfig.props.addEvent("onClick",this.toggleSideBarState,null,this);
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
Weave.registerClass( sideBarContainerConfig.Container,['weavereact.sideBarContainerConfig.Container'],[weavejs.api.core.ILinkableObject],"Sidebar container config");
Weave.registerClass( sideBarContainerConfig.Overlay,['weavereact.sideBarContainerConfig.Overlay'],[weavejs.api.core.ILinkableObject],"SideBar Container Config - Overlay");
Weave.registerClass( sideBarContainerConfig.SideBar,['weavereact.sideBarContainerConfig.SideBar'],[weavejs.api.core.ILinkableObject],"SideBar Container Config - Sidebar");




