class PropsManager {
    constructor() {
        this.new = {};
        this.mutated = {};
        this.key = [];
        this.default = {};
        this.style = {}
        this.events = {};

        // odd: Propeorties which has to be uniques for certain child
        // all: Propeorties which has to be uniques for all child
         Object.defineProperties(this, {
            "odd": {
                value: {
                    children: [],
                    values: []
                }
            },
            "all": {
                value:{
                    properties: [],
                    values:[]
                }
            }
        });

    }

    resetOddProps(){
        this.odd.children = [];
        this.odd.values = [];
    }

    //value: undefined will make configName as keyValue
    //propName = 'index' and value:undefined makes index as keyVaue
    addKeyProps(propName,value){
        var index = this.all.properties.indexOf(propName);
        if(index === -1){
            this.all.properties.push(propName);
            var valIndex = this.all.properties.indexOf(propName);
            this.all.values[valIndex] = value;
        }
    }

    //to-do: replace reset temp solution
    addOddChild(childKey,childValue,reset){
        //to-do add warning if childValue is missed
        if(reset){
            this.resetOddProps();
        }
        if(typeof childKey === 'number')
            childKey = String(childKey);
        var childIndex = this.odd.children.indexOf(childKey)
        if(childIndex === -1){
            this.odd.children.push(childKey);
            var valIndex = this.odd.children.indexOf(childKey)
            this.odd.values[valIndex] = childValue;
        }
    }

    addNewProps(propName,value){
        this.new[propName] = value;
    }

    addEvent(eventName,callbackFn,bindValues){
        this.events[eventName] = {
            callback:callbackFn,
            bind:bindValues
        }
    }


    updateStyle(style){
        this.style = style
    }





}


export default PropsManager;
