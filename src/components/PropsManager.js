class PropsManager {
    constructor() {
        this.new = {};
        this.mutated = {};
        this.key = [];
        this.default = {};
        this.style = {}


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

    addKeyProps(propName,value){
        var index = this.all.properties.indexOf(propName);
        if(index === -1){
            this.all.properties.push(propName);
            var valIndex = this.all.properties.indexOf(propName);
            this.all.values[valIndex] = value;
        }
    }

    addOddChild(childKey,childValue){
        //to-do add warning if childValue is missed
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


    updateStyle(style){
        this.style = style
    }





}


export default PropsManager;
