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
	    this.leafClickHandler = this.leafClickHandler.bind(this);
	    this.nodeListRefCallback = this.nodeListRefCallback.bind(this);
	    this.createSessionStateForTree = this.createSessionStateForTree.bind(this);
	    this.setChildrenSessionValues = this.setChildrenSessionValues.bind(this);
	    this.renderChildren = this.renderChildren.bind(this);
	    this.getIconUI = this.getIconUI.bind(this);

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
		    size:null
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
	    if(this.props.treeConfig.selectionType.state)
	        this.props.treeConfig.changeActiveNode(this.settings,"select");
	    else
		    this.props.treeConfig.changeActiveNode(this.settings,"open");
	    if(this.props.onChange)
		    this.props.onChange.call(this,this.props.data,this.settings);
    };

	openClickHandler(){
		this.props.treeConfig.changeActiveNode(this.settings,"open");
		if(this.props.onOpen)
			this.props.onOpen.call(this,this.props.data,this.settings);
	};

	nodeClickHandler(){
		this.props.treeConfig.changeActiveNode(this.settings,"click");
		if(this.props.onClick)
			this.props.onClick.call(this,this.props.data,this.settings);
	};

	leafClickHandler(){
		this.props.treeConfig.changeActiveNode(this.settings,null);
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
	            nodeConfig.select.value = defaultNodes.indexOf(nodeConfig.label.state) != -1;
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
        this.settings.props.addChildProps("onOpen",this.props.onOpen);
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
			var newSize = nodeListRect.width;

			if(this.state.size != newSize)
			{


				this.setState({
					size:newSize
				});
			}
		}

	}

	shouldComponentUpdate(nextProps, nextState){
		if(ComponentManager.debug)
			console.log("Node - shouldComponentUpdate");
		if(nextState.size !== this.state.size){
			return true
		}
		return false;
	}

	getIconUI(type,iconName)
	{
		let iconStyleObj = this.props.treeConfig.getStyleForIconType(type,iconName);
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
	}

    render() {
        if(ComponentManager.debug)
	        console.log("Node - render");

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

			iconUI = this.getIconUI("branch",iconName);

            /*** Node UI ****/

            var nodeStyle = this.props.treeConfig.nodeStyle.state;
            if(domDefinedStyle)
	            Style.mergeStyleObjects(nodeStyle,domDefinedStyle,true);//this happens for rootNode
            if(!nodeStyle.display)
            {
	            nodeStyle.display = "flex";
            }

            var controlName = this.props.treeConfig.getFolderIcon(isOpen);

            var nodeUI = <div style={nodeStyle}>
                                <div style={ {display:"flex",flex:"1" ,flexDirection:"inherit"} } >
	                                {selectIconUI}
	                                {iconUI}
	                                <span>&nbsp;{labelLang}&nbsp;</span>
	                                <span style={ {flex:"1"} }>&nbsp;</span>
                                </div>
	                            <span onClick={this.openClickHandler}><i className={controlName}></i></span>
                            </div>;


            /*** Node List ****/

            let branchStyle = this.props.treeConfig.branchStyle.state;
            var listStyle = this.props.treeConfig.getListStyle();
            listStyle.listStyleType = "none";
	        if(this.settings.reverseLayout.state){
		        listStyle.paddingRight = this.props.treeConfig.nodePadding.state;
		        listStyle.paddingLeft = 0;
	        }else{
		        listStyle.paddingLeft = this.props.treeConfig.nodePadding.state;
	        }


            var level = this.props.treeConfig.enableMenuModeFromLevel.state;
            var refCallback = null;

            let renderNodeList = isOpen;

            if(level && !isNaN(level) && this.props.level >= level ) // menu mode style Rendering
            {
	            if(renderNodeList) // override if isOpen is true
	                renderNodeList = this.state.size ? true :false;
	            refCallback = this.nodeListRefCallback;
	            branchStyle.position = "relative";
	            listStyle.position ="absolute";
	            listStyle.zIndex = 1;
	            if(this.settings.reverseLayout.state){
		            listStyle.right = this.state.size ? this.state.size : 0;
	            }else{
		            listStyle.left = this.state.size ? this.state.size : 0;
	            }

	            listStyle.top = 0;
            }

            var nodeListUI = renderNodeList ? this.renderChildren() :  null;

            return <div style={branchStyle} ref={refCallback} >
			            {nodeUI}
			            <ul  style={listStyle} >
				            {nodeListUI}
			            </ul>
		            </div>;

        }
        else //leaf
        {
            var fileIcon = this.props.treeConfig.getFileIcon(this.props.data,isOpen);

            var leafStyle = this.props.treeConfig.getLeafStyle(isOpen,this.settings.active.value);
	        if(!leafStyle.display)
		        leafStyle.display = "flex";

	        iconUI = this.getIconUI("leaf",iconName)

            return <li style={leafStyle} onClick={this.leafClickHandler}>
	                    {selectIconUI}
                        {iconUI}
	                    <div  style={{display:"flex",flex:"1",flexDirection:"inherit"}}>
		                    <span>&nbsp;{labelLang}&nbsp;</span>
		                    <span style={ {flex:"1"} }>&nbsp;</span>
		                    <i className={fileIcon}></i>
	                    </div>
                     </li>
        }


    }

}

ComponentManager.registerToolImplementation("weavereact.NodeConfig",Node);
export default Node;
