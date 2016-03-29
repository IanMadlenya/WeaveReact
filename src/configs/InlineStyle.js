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
                    var stateObj = this.default.state;
                    if(this.domDefined.state){
                         stateObj = stateObj ? Styles.mergeStyleObjects(stateObj,this.domDefined.state) :this.domDefined.state
                    }
                    return Styles.mergeStyleObjects({},stateObj);// need to send new copy to avoid react warniing

                },
                set: function(obj){
                    var stateObj = this.default.state;
                    this.default.state = stateObj?Styles.mergeStyleObjects(stateObj,obj,true):obj;
                }
            }
        });

    }

    getStyleFor(){
        //to-do : type: mobile mode | Tablet mode | laptop Mode  | iconMode
        return this.state
    }


}

Weave.registerClass('weavereact.InlineStyle', InlineStyle,[weavejs.api.core.ILinkableObject]);

export default InlineStyle;
