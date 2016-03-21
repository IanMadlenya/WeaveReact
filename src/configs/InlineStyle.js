import Styles from "../utils/Style";

class InlineStyle{



    constructor(){//to-do need to add verifier for each Session property to restrict to respective property

        Object.defineProperties(this, {
            "default": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "domDefined":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            }
        });

        Object.defineProperties(this, {
            "state": {
                get: function(){
                    var stateObj = Style.mergeStyleObjects(this.default.state,this.domDefined.state)
                    return stateObj;
                },
                set: function(obj){
                    var stateObj = this.default.state;
                    this.default.state = Style.mergeStyleObjects(stateObj,obj);
                }
            },
            "domDefined":{
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            }
        });

         Object.defineProperties(this, {
            "border": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "margin": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "padding": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "font": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "other": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            "domDefined": { // for props.style
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            }
        });


         Object.defineProperties(this, {
            "color": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            "background": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            "display": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            "position": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            }
        });


    }



    merge(into, obj) {
        for (let attr in obj) {
            into[attr] = obj[attr];
        }

        return into;
    }

    getStyleFor(properties,appendVendorPrefix){
        properties = properties?properties:['border','margin','padding','font','other','color','background','display','position','domDefined']
        return Styles.getStyleStateFor(this,properties,appendVendorPrefix);
    }
}

Weave.registerClass('weavereact.InlineStyle', InlineStyle,[weavejs.api.core.ILinkableObject]);

export default InlineStyle;
