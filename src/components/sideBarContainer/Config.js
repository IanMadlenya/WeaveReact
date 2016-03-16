import InlineStyle from "../../configs/InlineStyle";
import CSS from "../../configs/CSS";
import Props from "../../configs/Props";
import ButtonConfig from "../button/Config";

class ContainerConfig {
    constructor() {

         Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
             "CSS":{
                value: Weave.linkableChild(this, new CSS())
            },
            "children":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            },
            "useCSS":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
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

        this.childConfigMap = new Map();
        this.configChildMap = new Map();

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

         Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
             "CSS":{
                value: Weave.linkableChild(this, new CSS())
            },
            "useCSS":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            "enable":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
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

         Object.defineProperties(this, {
            "style":{
                value: Weave.linkableChild(this, new InlineStyle())
            },
             "CSS":{
                value: Weave.linkableChild(this, new CSS())
            },
             "props":{
                value: new Props()
            },
            "children": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            },
            "useCSS":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
             static:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
             iconsOnly:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
             open:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
             enable:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });


        this.childConfigMap = new Map();
        this.configChildMap = new Map();
        this.direction = "";

        this.open.addImmediateCallback(this,this.updateStyle,true);
        this.static.addImmediateCallback(this,this.updateSideBarController,true);

    }

    updateStyle(){
        this.style.display.state = "flex";

        var styleObject = this.style.other.state ? this.style.other.state: {};
         styleObject["justifyContent"]="flex-start";

        if(this.open.state){
            styleObject["flexBasis"] = "12%";
        }else{
            styleObject["flexBasis"] = this.static.state?"3%":"0%";
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
            var iconStyle = buttonConfig.iconStyle.other.state;
            iconStyle = iconStyle?iconStyle:{};
            iconStyle["fontSize"] = 24;
            buttonConfig.iconStyle.other.state = iconStyle;
            buttonConfig.iconOnly.state = true;
            var btnStyle = buttonConfig.style.other.state;
            btnStyle["justifyContent"] =  "flex-end";
            buttonConfig.style.other.state = btnStyle;
            buttonConfig.props.addEvent("onClick",this.toggleSideBarState,null,this);
            var buttonStyle = buttonConfig.style.other.state ;
            buttonStyle["order"] = "-1";
        }else{
            this.children.removeObject("switchButton");
        }
        this.updateStyle();
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




