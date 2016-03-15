import InlineStyle from "../../configs/InlineStyle";
import CSS from "../../configs/CSS";

class ContainerConfig {
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


        this.style.display = "flex"
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
            "children": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
            },
            "useCSS":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
             static:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
             iconsOnly:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
             open:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            }
        });


        this.childConfigMap = new Map();
        this.configChildMap = new Map();

    }

    updateStyle(){
        this.style.display.state = "flex";
        var styleObject = {
            justifyContent:"space-around"
        }

        if(this.open.state){
            styleObject["flexBasis"] = "20%"
        }else{
            styleObject["flexBasis"] = "0%"
        }

        if(this.direction.state === "right" || this.direction.state === "left"){
             styleObject["flexDirections"] = "column";
            this.style.other.state = styleObject
        }else if(this.direction.state === "top" || this.direction.state === "bottom"){
             styleObject["flexDirections"] = "row";
            this.style.other.state = styleObject
        }
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




