
class SimpleTreeConfig {
    constructor() {
        Object.defineProperties(this, {
            "nodeIcon": {
                value: new weavejs.core.LinkableString("fa fa-folder")
            },
            "nodeOpenIcon": {
                value: new weavejs.core.LinkableString("fa fa-folder-open")
            },
            "leafIcon": {
                value: new weavejs.core.LinkableString("fa fa-file-text")
            },
            "leafOpenIcon": {
                value: new weavejs.core.LinkableString("fa fa-file-text-o")
            },
            "nodePadding": {
                value: new weavejs.core.LinkableString("20px")
            },
            nodeStyle:{
                value: new weavejs.core.LinkableVariable()
            },
            leafStyle:{
                value: new weavejs.core.LinkableVariable()
            },
            selectedLeafStyle:{
                value: new weavejs.core.LinkableVariable()
            },
            activeLeafStyle:{
                value: new weavejs.core.LinkableVariable()
            }
        });
        this.labelAccessor = null;
        this.childrenAccessor = null;
        this.activeNode = null;

        this.selectedLeafStyle.state = {
            "background" : "grey"
        }

        this.activeLeafStyle.state = {
            "background" : "blue"
        }
    }

    getIcon(type, isOpen){
        var iconName =  (type === "node")? (isOpen ? this.nodeOpenIcon.state : this.nodeIcon.state) : (isOpen ? this.leafOpenIcon.state : this.leafIcon.state);

        return iconName;

    }

    // temp: move to Utils
    mergeInto(into, obj) {
        for(let attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    }

    getTreeNodes(data){
        var nodes = this.childrenAccessor;
        if(data[nodes] instanceof Function)
            return data[nodes]();
        else if(nodes instanceof Function)
            return nodes(data);
        else
           return data[nodes];
    }


    getTreeLabel(data,label){
        var label = this.labelAccessor;
        if(data[label] instanceof Function)
            return data[label]();
        else if(label instanceof Function)
            return label(data);
        else
            return data[label];
    }


    getLeafStyle(open, active){
        var style = this.leafStyle.state ?  this.leafStyle.state : {};

        if(open){
            var selectedStyle = this.selectedLeafStyle.state;
            if(selectedStyle)this.mergeInto(style,this.selectedLeafStyle.state);
            if(active){
                var activeStyle = this.activeLeafStyle.state;
                return activeStyle ? this.mergeInto(style,this.activeLeafStyle.state) : style;
            }
        }
        return style;
    }



    changeActiveNode(nodeComponent) {
        if (this.activeNode) {
            this.activeNode.active.value = false;
        }
        this.activeNode = nodeComponent;
        this.activeNode.active.value = true;
    }

}

export default SimpleTreeConfig;



