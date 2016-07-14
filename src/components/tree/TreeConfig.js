
import NodeConfig from "./NodeConfig";
import InlineStyle from "../../configs/InlineStyle";
import ComponentManager from "../../ComponentManager";

export default class TreeConfig{
    constructor()
    {
        ComponentManager.createDefaultSessionProperties(this);

        Object.defineProperties(this, {
            treeIconState:{
                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
            },
            enableDataTypeIcon: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
            },
            align: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
            },
            nodePadding: {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20px"))
            },
            rootNode:{
                value: Weave.linkableChild(this, new NodeConfig())
            },
            rootStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            nodeStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            nodeListStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            nodeIconStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            leafStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            leafIconStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            selectedLeafStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            activeLeafStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            branchStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            enableAccordionMode:{
                value: Weave.linkableChild(this,  new weavejs.core.LinkableBoolean(false))
            },
            selectionType:{ // radio | check
                value: Weave.linkableChild(this,   weavejs.core.LinkableString)
            },
            defaultSelectedNodes:{
                value: Weave.linkableChild(this,  new weavejs.core.LinkableVariable())
            },
            enableMenuModeFromLevel:{
                value: Weave.linkableChild(this,  weavejs.core.LinkableNumber)
            }
        });


        this.dataTypesMap = null;
        this.getDataType = null;

        this.defaultSelectedNodes.state = [];

        this.branchStyle.state = {
            "display": "flex",
            "flexDirection": "column"
        };

        this.nodeStyle.state = {
            "display": "flex",
            "flexDirection": this.reverseLayout.state?"row-reverse" : "row",
            "alignItems":"center"
        };

        //todo - add getter setter to facilitate settings only one state
        // or create like InlineStyle
        this.treeIconState.state = {
            "nodeDefault" : this.reverseLayout.state?"fa fa-folder fa-flip-horizontal":"fa fa-folder",
            "nodeOpen" : this.reverseLayout.state?"fa fa-folder-open fa-flip-horizontal":"fa fa-folder-open",
            "leafDefault" : this.reverseLayout.state?"fa fa-file-text fa-flip-horizontal":"fa fa-file-text",
            "leafOpen" : this.reverseLayout.state?"fa fa-file-text-o fa-flip-horizontal":"fa-file-text-o",
            "select":this.reverseLayout.state?"fa fa-check-square-o fa-flip-horizontal":"fa fa-check-square-o",
            "unSelect":this.reverseLayout.state?"fa fa-square-o fa-flip-horizontal":"fa fa-square-o",
        };

        this.nodeIconStyle.state = {
            width: "20px",
            height : "20px",
            paddingRight:"2px"
        };


        this.leafStyle.state = {
            "display": "flex",
            "flexDirection": this.reverseLayout.state?"row-reverse" : "row",
            "alignItems":"center"
        };


        this.activeLeafStyle.state = {
            "background" : "orange"
        };


        //todo move this to componentManager defaultCallbacks
        this.reverseLayout.addImmediateCallback(this, this.updateStyle);

    }

    updateStyle()
    {
        var flexDir = this.reverseLayout.state?"row-reverse":"row";
        this.nodeStyle.state = {flexDirection:flexDir};
        this.leafStyle.state = {flexDirection:flexDir};
        ComponentManager.flipIcons(this,["treeIconState"]);
    }


     mergeInto(into, obj)
     {
        for (let attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    };

    getLeafStyle(selected,active)
    {
        var style = this.leafStyle.state;
        if(selected){
            this.mergeInto(style,this.selectedLeafStyle.state);
            if(active)
                return this.mergeInto(style,this.activeLeafStyle.state);
        }
        return style;
    };

   getListStyle()
   {
        var style = this.nodeListStyle.state;
        return style;
    };

    getStyleForIconType(type,iconName)
    {
        var iconStyleObj = (type == "branch") ?  this.nodeIconStyle.state : this.leafIconStyle.state;

        let iconUI = null;
        if(iconName && iconName.length > 0)
        {
            if(iconName.indexOf("/") == -1)
            { // fontAwesome Icon Name
                iconUI = <i style = {iconStyleObj} className={iconName} ></i>
            }
            else
            {
                iconUI = <img style = {iconStyleObj} src={iconName}/>
            }
        }

        return iconUI;
    };



    //to-do do this for entire tree rather only for the first child
    setDefaultNodeSelection(nodesLabel)
    {
        this.defaultSelectedNodes.state = nodesLabel
    };



    getActiveAncestorNode (nodeConfig)
    {
        if(nodeConfig.active.state)
        {
            return null;
        }

        let lhmOwner = Weave.getOwner(nodeConfig);
        let  owner = Weave.getOwner(lhmOwner); // lHM -> NodeConfig
        if(!owner || (owner.constructor !== nodeConfig.constructor) )
        {
            return null;
        }
        else if(owner.active.state)
        {
            return owner;
        }
        else{
            return this.getActiveAncestorNode(owner);
        }


    };

    getActiveSiblingNode(nodeConfig)
    {

        let owner = Weave.getOwner(nodeConfig);
        if(!owner)
        {
            return null;
        }
        let children = owner.getObjects();
        for(let i = 0 ; i < children.length ; i++)
        {
            if(nodeConfig !== children[i])
            {
                if(children[i].active.state)
                    return children[i];
            }

        }

        return null;
    };




    changeActiveNode(nodeConfig,eventType )
    {
        let lhmOwner = Weave.getOwner(nodeConfig);
        let parentNode = Weave.getOwner(lhmOwner); // lHM -> NodeConfig
        let activeSiblingNode = this.getActiveSiblingNode(nodeConfig);
        let activeAncestorNode = this.getActiveAncestorNode(nodeConfig);

        
        /*** active Mode (Active State Update) ****/
        if(activeAncestorNode)
            activeAncestorNode.active.value = false;
        if(activeSiblingNode)
            activeSiblingNode.active.value = false;

        nodeConfig.active.value = true;

        /*** selection Mode (Select state Update) ****/
        if(this.selectionType.value )
        {
            if(this.selectionType.value == "radio")
            {
                if(activeSiblingNode)
                    activeSiblingNode.select.value = false;

                if(parentNode && parentNode.openedChild && (parentNode.openedChild !== nodeConfig) )
                {
                    parentNode.openedChild.select.value = false;
                }

                nodeConfig.select.value = true;
            }
            else if(this.selectionType.value == "check") // toggle selection
            {
                nodeConfig.select.value = !nodeConfig.select.value;
            }
        }


       
            /*** Open Mode (Open State Udpate) ****/
            if(this.enableAccordionMode.state ) // accordion Mode
            {
                if(activeSiblingNode)
                    activeSiblingNode.open.value = false;

                if(parentNode && parentNode.openedChild && (parentNode.openedChild !== nodeConfig) )
                {
                    parentNode.openedChild.open.value = false;
                }

            }
            nodeConfig.open.state = !nodeConfig.open.state; // toggle open state
        


        parentNode.openedChild = nodeConfig;


    };

    getFileIcon(data,isOpen)
    {
        if(data){
            if(this.enableDataTypeIcon.value){
                var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
                if (this.dataTypesMap && this.dataTypesMap[datType])
                    return this.dataTypesMap[datType];
            }else{
                return isOpen ? this.treeIconState.state.leafOpen  : this.treeIconState.state.leafDefault ;
            }
        }else
            return "";
    };



    getFolderIcon( isOpen)
    {
        return isOpen ? this.treeIconState.state.nodeOpen : this.treeIconState.state.nodeDefault;
    };

    getSelectIcon( isSelected)
    {
        return isSelected ? this.treeIconState.state["select"] : this.treeIconState.state["unSelect"];
    };
}



    //This Function makes this class as SessionClass
    Weave.registerClass( TreeConfig,['weavereact.TreeConfig'],[weavejs.api.core.ILinkableObject],"Tree Config");

