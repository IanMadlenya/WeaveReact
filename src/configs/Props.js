class Props {
    constructor() {
         Object.defineProperties(this, {
            "events":{
                value:{}
            }
        });

         Object.defineProperties(this, {
            "childProps": {
                value:{}
            },
            "newProps": {
                value:{}
            }
        });

        this.keyProp = "";
        this.oddChildren = [] // array of odd child :  index | ChildName

    }

    hasChildProps(){
        if(Object.keys(this.childProps).length > 0)
            return true;
        else
            return false;
    }

    // child can hold three type of values
    // 1. defaultValue : common value for all the child
    // 2. oddValue: value for say active children or selected children among children
    // 3. uniqueValue(Array):
    //    3.1 defaultValue: null , oddValue: null needs to null,
    //    3.2 each child value is got from uniqueValues using child index
    addChildProps(propName , defaultValue,oddValue,uniqueValues){
        this.childProps[propName] = [defaultValue,oddValue,uniqueValues];
    }


    getPropsForChild(configName ,index){
        var oddChildIndex = this.oddChildren.indexOf(configName);
        if (oddChildIndex == -1) oddChildIndex = this.oddChildren.indexOf(index);

        var isOdd =  oddChildIndex > -1?true:false;

        var obj = {}
        var keys = Object.keys(this.childProps);
        for(var i = 0; i < keys.length; i++){

            var key = keys[i];
            if(this.childProps[key][0] !== null){// defaultValue || oddValue
                if(isOdd)obj[key] = this.childProps[key][1];
                else obj[key] = this.childProps[key][0];
             }else{ // unique Values
                 var values = this.childProps[key][2];
                 obj[key] = values[index];
             }

        }
        return obj;
    }

    addNewProps(propName , value ){
        this.newProps[propName] = value;
    }


    getNewProps(){
        return this.newProps;
    }


    hasOddChildren(){
        if(this.oddChildren.length > 0 ){
            return true;
        }
        return false;
    }
    addOddChildren(indices){
        this.oddChildren = [...indices];
    }


    addEvent(eventName,callbackFn,bindValues){
        this.events[eventName] = {
            callback:callbackFn,
            bind:bindValues
        }
    }

    getEventProps(thisArg,config,index){
        var eventObj = {};

        var eventNames = Object.keys(this.events);
        if (eventNames.length > 0) {
            eventNames.map(function (eventName, i) {
                var evtObj = this.events[eventName];
                if(!evtObj.bind)eventObj[eventName] = evtObj.callback.bind(thisArg, config, index)
                else evtObj.callback.bind(thisArg, config, index , ...evtObj.bind);
            },this)
        }
        return eventObj;

    }



    merge(obj){
        for (let attr in obj) {
            this.newProps[attr] = obj[attr];
        }
    }



}


export default Props;
