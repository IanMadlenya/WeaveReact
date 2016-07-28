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
            "select": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
            },
            "active": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
            }
        });

        this.open.state = false; // this one for folder
        this.select.state = false; // this one for leaf
        this.active.state = false;

        this.data = null;
        this.openedChild = null;
        this.selectedChild = null;
        this.selectedNodes = [];

        this.reverseLayout.addImmediateCallback(this, this.flipIcon);


    }




    var p = NodeConfig.prototype;


    p.flipIcon = function(){
        ComponentManager.flipIcons(this,["iconName"]);
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
    Weave.registerClass( NodeConfig,['weavereact.NodeConfig'],[weavejs.api.core.ILinkableObject],"Node Config");

    module.exports = NodeConfig;

}(module));
