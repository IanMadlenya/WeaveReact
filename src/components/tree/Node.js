import React from 'react';
import ReactDOM from 'react-dom';
import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";
import Style from "../../utils/Style";
import NodeConfig from "./NodeConfig";


class Node extends AbstractComponent {

    constructor(props)
    {
        super(props);

	    this.selectClickHandler = this.selectClickHandler.bind(this);
	    this.openClickHandler = this.openClickHandler.bind(this);
	    this.nodeListRefCallback = this.nodeListRefCallback.bind(this);
	    this.createSessionStateForTree = this.createSessionStateForTree.bind(this);
	    this.setChildrenSessionValues = this.setChildrenSessionValues.bind(this);
	    this.renderChildren = this.renderChildren.bind(this);

        this.isSessionStateCreatedForTreeData = false;
	    this.nodeListElement = null;

	    if(this.props.data)
	    {
            this.settings.data = this.props.data;
            this.createSessionStateForTree();
        }

	    this.settings.open.addGroupedCallback(this,this.setChildrenSessionValues);
        this.props.treeConfig.defaultSelectedNodes.addGroupedCallback(this,this.setChildrenSessionValues);


	    this.state = {
		    left:null
	    }
    }


    componentWillReceiveProps(nextProps)
    {
        super.componentWillReceiveProps(nextProps);
        if(this.props.data !== nextProps.data)
        {
            this.settings.data = nextProps.data;
            this.createSessionStateForTree(nextProps.data,nextProps.label,nextProps.nodes,nextProps.icon);
        }
    }


    componentWillUnmount () 
    {
        super.componentWillUnmount();
        this.settings.open.removeCallback(this,this.setChildrenSessionValues);
	    this.props.treeConfig.defaultSelectedNodes.removeCallback(this,this.setChildrenSessionValues);
    }



    selectClickHandler()
    {
	    this.props.treeConfig.changeActiveNode(this.settings,"select");
	    if(this.props.onChange)
		    this.props.onChange.call(this,this.props.data,this.settings);
    };

	openClickHandler(){
		this.props.treeConfig.changeActiveNode(this.settings,"open");
		if(this.props.onClick)
			this.props.onClick.call(this,this.props.data,this.settings);
	};


    createSessionStateForTree(data,label,nodes,icon)
    {
        var label = label?label:this.props.label;
        var nodes = nodes?nodes:this.props.nodes;
        var icon = icon?icon:this.props.icon;
        if(data){ // calling with data arguments indicates data is changed so wipe the session state
             this.settings.reset();
        }else{
            data = this.props.data;
        }
        //to-do only required for rootnode
        this.settings.label.value = this.settings.getNodeValueFor(label);
        this.settings.iconName.value = this.settings.getNodeValueFor(icon);

        var treeNodes = this.settings.getNodeValueFor(nodes);
        if(treeNodes && treeNodes.length)
        {
            this.settings.children.delayCallbacks();
            for(var i = 0; i < treeNodes.length; i++)
            {
                var nodeConfig = this.settings.children.requestObject("node" + i, NodeConfig);
                nodeConfig.label.state = this.settings.getNodeValueFor(label,treeNodes[i]);
                nodeConfig.iconName.state = this.settings.getNodeValueFor(icon,treeNodes[i]);
            }
            this.settings.children.resumeCallbacks();
        }
        this.isSessionStateCreatedForTreeData = true;
    }

    setChildrenSessionValues()
    {
	    if(this.settings.open.state)
	    {
		    return
	    }
	    else
	    {
		    if(this.settings.openedChild)
		    {
			    this.settings.openedChild.open.value = false;
		    }
	    }
        if(!this.isSessionStateCreatedForTreeData)
        {
            this.createSessionStateForTree()
        }
        var defaultNodes = this.props.treeConfig.defaultSelectedNodes.state;
        if(defaultNodes && defaultNodes.length > 0 )
        {
            var nodeConfigs = this.settings.children.getObjects();
            nodeConfigs.map( (nodeConfig,index)=>{
	            nodeConfig.select.value = defaultNodes.indexOf(odeConfig.label.state) != -1;
            });
        }
    }

    renderChildren(){
        this.settings.props.addChildProps("treeConfig",this.props.treeConfig);
        this.settings.props.addChildProps("parentConfig",this.settings);
        this.settings.props.addChildProps("label",this.props.label);
        this.settings.props.addChildProps("nodes",this.props.nodes);
        this.settings.props.addChildProps("icon",this.props.icon);
        this.settings.props.addChildProps("reverseLayout",this.settings.reverseLayout.state);
        this.settings.props.addChildProps("onClick",this.props.onClick);
	    if(this.props.treeConfig.selectionType.state)
	    {
		    this.settings.props.addChildProps("onChange",this.props.onChange);
	    }
        this.settings.props.addChildProps("level",this.props.level + 1);
        this.settings.props.addChildProps("data",null, null,this.settings.getNodeValueFor(this.props.nodes) );
        return ComponentManager.renderChildren(this);
    }



	nodeListRefCallback(ele)
	{
		if(ele)
		{
			this.nodeListElement = ReactDOM.findDOMNode(ele);
			console.log(this.settings.data.label, "mounted");
		}
		else
		{
			this.nodeListElement = null;
			console.log(this.settings.data.label, "unMounted");
			
		}
	};
	
	componentDidUpdate()
	{
		if(this.nodeListElement)
		{
			var nodeListRect = this.nodeListElement.getBoundingClientRect();
			var newLeft = this.settings.reverseLayout.state? - nodeListRect.width : nodeListRect.width;
			if(this.state.left != 	newLeft)
			{
				console.log(this.settings.data.label, "updated",this.state.left,newLeft);
				this.setState({
					left:newLeft
				});
			}
		}

	}

	shouldComponentUpdate(nextProps, nextState){
		if(ComponentManager.debug)
			console.log("Node - shouldComponentUpdate");
		if(nextState.left !== this.state.left){
			return true
		}
		return false;
	}


    render() {
        if(ComponentManager.debug)
	        console.log("Node - render");

	    console.log(this.settings.data.label, "render",this.state.left);

	    if(!this.props.data) // no data retun empty div
	       return <div/>;

	    var domDefinedStyle = this.props.style;

        var nodes = this.settings.getNodes();
        var isOpen = this.settings.open.value;

        var iconName = this.settings.iconName.value;
        var label = this.settings.label.value;

        var iconUI = null;
        var selectIconUI = null;

	    /*** Select Icon ****/

	    if(this.props.treeConfig.selectionType.state)
	    {
		    var selectIcon = this.props.treeConfig.getSelectIcon(this.settings.select.value);
		    selectIconUI = <span onClick={this.selectClickHandler}>&nbsp;<i className={selectIcon}/>&nbsp;</span>
	    }

	    /*** Label ****/
	    
	    var labelLang = this.settings.reverseLayout.state ? Weave.lang(label) : label;
	    

        if(nodes.length > 0) //folder mode
        {
            /*** Node Icon ****/
			 iconUI = this.props.treeConfig.getStyleForIconType("branch",iconName);


            /*** Node UI ****/

            var nodeStyle = this.props.treeConfig.nodeStyle.state;
            if(domDefinedStyle)
	            Style.mergeStyleObjects(nodeStyle,domDefinedStyle,true);//this happens for rootNode
            nodeStyle.display = "flex";
            nodeStyle.flexDirection = "row";
            nodeStyle.alignItems = "center";

            var controlName = this.props.treeConfig.getFolderIcon(isOpen);
           

            var nodeUI = <div style={nodeStyle}>
                                {selectIconUI}
                                {iconUI}
                                <div style={ {display:"flex",flex:"1"} } onClick={this.openClickHandler}>
	                                <span style={ {flex:"1"} }>&nbsp;{labelLang}</span>
	                                <i className={controlName}></i>
                                </div>
                            </div>;


            /*** Node List ****/

            let branchStyle = this.props.treeConfig.branchStyle.state;
            var listStyle = this.props.treeConfig.getListStyle();
            listStyle.listStyleType = "none";
            listStyle.paddingLeft = this.props.treeConfig.nodePadding.state;

            var level = this.props.treeConfig.enableMenuModeFromLevel.state;
            var refCallback = null;

            let renderNodeList = isOpen;

            if(level && !isNaN(level) && this.props.level >= level ) // menu mode style Rendering
            {
	            if(renderNodeList) // override if isOpen is true
	                renderNodeList = this.state.left ? true :false;
	            refCallback = this.nodeListRefCallback;
	            branchStyle.position = "relative";
	            listStyle.position ="absolute";
	            listStyle.zIndex = 1;
	            listStyle.left = this.state.left;
	            listStyle.top = 0;
            }

	        console.log(label ,renderNodeList,isOpen);
            var nodeListUI = renderNodeList ? this.renderChildren() :  null;

            return <div style={branchStyle} ref={refCallback} >
			            {nodeUI}
			            <ul  style={listStyle}>
				            {nodeListUI}
			            </ul>
		            </div>;

        }
        else //leaf
        {
            var fileIcon = this.props.treeConfig.getFileIcon(this.props.data,isOpen);

            var leafStyle = this.props.treeConfig.getLeafStyle(isOpen,this.settings.active.value);
	        leafStyle.display = "flex";
	        leafStyle.flexDirection = "row";
	        leafStyle.alignItems = "center";

	        iconUI = this.props.treeConfig.getStyleForIconType("leaf",iconName);

            return <li style={leafStyle} >
	                    {selectIconUI}
                        {iconUI}
	                    <div onClick={this.openClickHandler} style={{display:"flex",flex:"1"}}>
		                    <span style={{flex:"1"}}>&nbsp;{labelLang}</span>
		                    <i className={fileIcon}></i>
	                    </div>
                     </li>
        }


    }

}

ComponentManager.registerToolImplementation("weavereact.NodeConfig",Node);
export default Node;
