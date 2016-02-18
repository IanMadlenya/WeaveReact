import Styles from "../utils/Style";

class InlineStyle{



    constructor(){//to-do need to add verifier for each Session property to restrict to respective property

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

    getStyleFor(properties,appendVendorPrefix){
        properties = properties?properties:['border','margin','padding','font','other','color','background','display','position']
        return Styles.getStyleStateFor(this,properties,appendVendorPrefix);
    }
}

Weave.registerClass('weavereact.InlineStyle', InlineStyle,[weavejs.api.core.ILinkableObject]);

export default InlineStyle;
