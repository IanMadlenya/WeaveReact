

class CSS{
    constructor(){

         Object.defineProperties(this, {
            "className": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
            },
            "classObject": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            }
        });

    }

    getCSSFor(property){
        if(property)
            return this.cssObject.state[property];
        else{
            return this.className.state;
        }
    }
}

Weave.registerClass( CSS,['weavereact.CSS'],[weavejs.api.core.ILinkableObject],"CSS");

export default CSS;
