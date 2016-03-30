import ComponentManager from "../../ComponentManager";

(function (module) {

    function NodeConfig() {
        ComponentManager.createDefaultSessionProperties(this,"container");

        Object.defineProperties(this, {
            "label": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
            },
            "iconName": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            "open": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
            },
            "active": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
            }
        });

        this.open.state = false;
        this.active.state = false;

        this.data = null;

        this.reverseLayout.addImmediateCallback(this, this.flipIcon)


    }




    var p = NodeConfig.prototype;


    p.flipIcon = function(){
        var iconName = this.iconName.state;
        if(iconName  && iconName.length > 0 ){
            if(iconName.indexOf("/") == -1){ // fontaweosme icons
                if(this.reverseLayout.state){
                    if(iconName.indexOf(" fa-flip-horizontal") == -1){//notflipped
                        this.iconName.state = iconName + " fa-flip-horizontal";
                    }
                }else{
                    if(iconName.indexOf(" fa-flip-horizontal") != -1){//flipped
                        var index = iconName.indexOf(" fa-flip-horizontal");
                        this.iconName.state = iconName.substring(0,index);
                    }
                }
            }else{//todo for image

            }
        }

    }

    p.getNodes = function () {
        return this.children.getNames();
    }

    p.getNodeValueFor = function(property,data){
        data = data? data:this.data;

        if(data){
            if(data[property] instanceof Function){
                return data[property]();
            }else if(property instanceof Function){
                return property(data);
            }else{
                return data[property];
            }
        }else{
            return "";
        }
    }

    p.reset = function () {
        this.label.value = "";
        this.iconName.value = "";
        this.open.value = false;
        this.active.value = false;
        this.children.removeAllObjects();
    }

    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.NodeConfig', NodeConfig);

    module.exports = NodeConfig;

}(module));
