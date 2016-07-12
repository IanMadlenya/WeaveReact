import React from 'react';
import ReactDOM from 'react-dom';
import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";
import Style from "../../utils/Style";
import NodeConfig from "./NodeConfig";


class Node extends AbstractComponent {

    constructor(props) {
        super(props);

        this.toggleOpen = this.toggleOpen.bind(this);
        this.toggleSelect = this.toggleSelect.bind(this);
        this.toggleSelectAll = this.toggleSelectAll.bind(this);
        this.nodeListRefCallback = this.nodeListRefCallback.bind(this);

        this.createSessionStateForTree = this.createSessionStateForTree.bind(this);
        this.isSessionStateCreatedForTreeData = false;
        if(this.props.data){
            this.settings.data = this.props.data;
            this.createSessionStateForTree();
        }
        this.settings.open.addGroupedCallback(this,this.setChildrenSessionValues);
        this.props.treeConfig.defaultSelectedNodes.addGroupedCallback(this,this.setChildrenSessionValues);

        this.selectAll =  this.props.treeConfig.selectAll;
        this.selectAll.addGroupedCallback(this,this.setChildrenSelectAllValues);

        this.selectIdentifier = this.settings.select.state? "select":this.selectAll.state?"selectAll":"";

	    this.state = {
		    left:null
	    }
    }


    componentWillReceiveProps(nextProps)
    {
        super.componentWillReceiveProps(nextProps);
        if(this.props.data !== nextProps.data){
            this.settings.data = nextProps.data;
            this.createSessionStateForTree(nextProps.data,nextProps.label,nextProps.nodes,nextProps.icon);
        }
    }


    componentWillUnmount () 
    {
        super.componentWillUnmount();
        this.settings.open.removeCallback(this,this.setChildrenSessionValues);
	    this.props.treeConfig.defaultSelectedNodes.removeCallback(this,this.setChildrenSessionValues);
        this.selectAll.removeCallback(this,this.setChildrenSelectAllValues);
    }



    toggleSelect()
    {
        this.selectIdentifier = "select";
	    // selection allowed if its not selected or if its multiple selction mode
	    // in single selection deselection is not allowed
	    if(this.props.treeConfig.allowMultipleSelection.value || !this.settings.select.value){
		    this.settings.select.value = !this.settings.select.value;
		    if(this.props.onSelectClick)
			    this.props.onSelectClick.call(this,this.props.data,this.settings,this.selectAll);
		    this.props.treeConfig.changeActiveNode(this.settings);
	    }
	    if(!this.props.treeConfig.allowMultipleSelection.value){
		    this.props.parentConfig.changeActiveChildNode(this.settings);
	    }

    }

    toggleOpen()
    {
        this.settings.open.value = !this.settings.open.value;
        if(this.props.onOpenClick)
            this.props.onOpenClick.call(this,this.props.data,this.settings);
        this.props.treeConfig.changeActiveNode(this.settings);
    }


    toggleSelectAll(){
        this.selectIdentifier = "selectAll";
         // this trigger entire tree

        this.selectAll.state = !this.selectAll.state;
        if(this.props.onSelectAllClick)
            this.props.onSelectAllClick.call(this,this.props.data,this.settings,this.selectAll);
        //this.props.treeConfig.changeActiveNode(this.settings);
     }

    createSessionStateForTree(data,label,nodes,icon) {
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
        if(treeNodes && treeNodes.length){
            this.settings.children.delayCallbacks();
            for(var i = 0; i < treeNodes.length; i++)
            {
                var nodeConfig = this.settings.children.requestObject("node" + i, NodeConfig);
                nodeConfig.label.state = this.settings.getNodeValueFor(label,treeNodes[i]);
                nodeConfig.iconName.state = this.settings.getNodeValueFor(icon,treeNodes[i]);
                if(this.props.treeConfig.selectAll.state){
                    nodeConfig.select.state = true;
                }
            }
            this.settings.children.resumeCallbacks();
        }
        this.isSessionStateCreatedForTreeData = true;
    }

    setChildrenSessionValues()
    {
	    if(!this.settings.open.state){
		    return
	    }
        if(!this.isSessionStateCreatedForTreeData)
        {
            this.createSessionStateForTree()
        }
        var defaultNodes = this.props.treeConfig.defaultSelectedNodes.state;
        if(defaultNodes && defaultNodes.length > 0 ){
            var nodeConfigs = this.settings.children.getObjects();
            nodeConfigs.map(function(nodeConfig,index){
                var nodeLabel = nodeConfig.label.state;
                if(defaultNodes.indexOf(nodeLabel) != -1)
                {
                    nodeConfig.select.value = true;
                    nodeConfig.active.value = true;
                }
                else
                {
	                nodeConfig.select.value = false;
	                nodeConfig.active.value = false;
                }
            }.bind(this));
        }
    }

    setChildrenSelectAllValues()
    {
        var nodeConfigs = this.settings.children.getObjects();
        nodeConfigs.map(function(nodeConfig,index){
            nodeConfig.select.value = this.selectAll.state;
        }.bind(this));
        this.forceUpdate();
    }




    renderChildren(){
        this.settings.props.addChildProps("treeConfig",this.props.treeConfig);
        this.settings.props.addChildProps("parentConfig",this.settings);
        this.settings.props.addChildProps("label",this.props.label);
        this.settings.props.addChildProps("nodes",this.props.nodes);
        this.settings.props.addChildProps("icon",this.props.icon);
        this.settings.props.addChildProps("reverseLayout",this.settings.reverseLayout.state);
        this.settings.props.addChildProps("onOpenClick",this.props.onOpenClick);
        this.settings.props.addChildProps("onSelectClick",this.props.onSelectClick);
        this.settings.props.addChildProps("data",null, null,this.settings.getNodeValueFor(this.props.nodes) );
        return ComponentManager.renderChildren(this);
    }



	nodeListRefCallback(ele)
	{
		if(ele)
		{
			var domEle = ReactDOM.findDOMNode(ele);
			this.nodeListRect = domEle.getBoundingClientRect();
			this.setState({
				left: this.settings.reverseLayout.state? -this.nodeListRect.width : this.nodeListRect.width
			})
		}
		else
		{
			this.nodeListRect = null
			this.setState({
				left: null
			})
		}
	}

	/*componentDidUpdate()
	{
		if(this.nodeListRect && this.state.left != this.nodeListRect.left)
		{
			console.log("componentDidUpdate",this.settings.label.state,this.state.left);
			this.setState({
				left:this.nodeListRect.left + this.nodeListRect.width
			})
		}
	}*/

    render() {
        if(ComponentManager.debug)console.log("Node - render");
        var nodeUI = <div/>;
        var domDefinedStyle = this.props.style;
        if(this.props.data){
            var nodesUI = [];
            var nodes = this.settings.getNodes();
            var isOpen = this.settings.open.value;

            var iconName = this.settings.iconName.value;
            var label = this.settings.label.value;

            var iconUI = "";
            var selectAllIconUI = "";


            if(nodes.length > 0){ //folder


                var branchStyle = this.props.treeConfig.branchStyle.state;
                var nodeStyle = this.props.treeConfig.nodeStyle.state;
                if(domDefinedStyle)Style.mergeStyleObjects(nodeStyle,domDefinedStyle,true);//this happens for rootNode
                var controlName = this.props.treeConfig.getFolderIcon(isOpen);

                if(iconName && iconName.length > 0)
                {
                    var iconStyleObj = this.props.treeConfig.nodeIconStyle.state;
                    if(iconName.indexOf("/") == -1){ // fontAwesome Icon Name
                        iconUI = <i style = {iconStyleObj} className={iconName} ></i>
                    }else {
                        iconUI = <img style = {iconStyleObj} src={iconName}/>
                    }
                }

                if(this.props.enableSelectAll)
                {
                    var treeIconState = this.props.treeConfig.treeIconState.state;
                    var selectAllIcon = (this.selectAll.state)? treeIconState["select"]:treeIconState["unSelect"];
                    selectAllIconUI = <span onClick={this.toggleSelectAll}>&nbsp;<i className={selectAllIcon}/>&nbsp;</span>
                }

	            var labelLang = this.settings.reverseLayout.state ? Weave.lang(label) : label;
                var folderUI = <span style={nodeStyle}>
                                    {iconUI}
                                    <span  onClick={this.toggleOpen}>&nbsp;{labelLang}</span>
                                    <span style={{flex:"1"}} onClick={this.toggleOpen}>&nbsp;</span>
                                    {selectAllIconUI}
                                    <i className={controlName} ></i>
                                </span>;

                var nodePadding = this.props.treeConfig.nodePadding.state;
	            var nodeUI = null;

	            if(this.props.treeConfig.enableMenuMode.state )
	            {
		            if(isOpen && this.state.left)
		            {
			            nodesUI = this.renderChildren();
		            }
		            branchStyle.position = "relative";
		            var listStyle = {
			            listStyleType:"none",
			            paddingLeft:nodePadding,
			            position:"absolute",
			            left: this.state.left,
			            top:0
		            };
		            nodeUI = <div style={branchStyle} ref={this.nodeListRefCallback} >
	                            {folderUI}
	                            <ul  style={listStyle}>
	                                {nodesUI}
	                            </ul>
	                         </div>;
	            }else{
		            if(isOpen)
		            {
			            nodesUI = this.renderChildren();
		            }
		            nodeUI = <span style={branchStyle}>
	                            {folderUI}
	                            <ul style={{listStyleType:"none",paddingLeft:nodePadding}}>
	                                {nodesUI}
	                            </ul>
	                         </span>;
	            }
                
            }
            else{ //leaf
                var fileIcon = this.props.treeConfig.getFileIcon(this.props.data,this.settings.open.value);
                // this will return either normal/Active/Slected Style based on state of the leaf
                var leafStyle = this.props.treeConfig.getLeafStyle(isOpen,this.settings.active.value);

                if(iconName && iconName.length > 0){
                    var iconStyleObj = this.props.treeConfig.leafIconStyle.state;
                    if(iconName.indexOf("/") == -1){ // fontAwesome Icon Name
                        iconUI = <i style = {iconStyleObj} className={iconName} ></i>
                    }else {
                        iconUI = <img style = {iconStyleObj} src={iconName}/>
                    }
                }

                //if(this.props.enableSelectAll){
                var treeIconState = this.props.treeConfig.treeIconState.state;

                 var selectAllIcon = ""
                 var onClick =  this.toggleOpen;
                if(this.selectIdentifier == "select"){
                    selectAllIcon = (this.settings.select.state )? treeIconState["select"] :treeIconState["unSelect"];
                }else{
                    selectAllIcon = (this.selectAll.state )? treeIconState["select"] :treeIconState["unSelect"];
                }
                if(selectAllIcon && selectAllIcon.length>0 ){
                    onClick = this.toggleSelect;
                }

                if(selectAllIcon && selectAllIcon.length > 0)
                    selectAllIconUI = <span onClick={this.toggleSelect}>&nbsp;<i className={selectAllIcon}/>&nbsp;</span>;

                var labelLang = this.settings.reverseLayout.state ? Weave.lang(label) : label;
                nodeUI = <li style={leafStyle} >
                            {iconUI}
                            <span onClick={onClick}>&nbsp;{labelLang}</span>
                            <span style={{flex:"1"}} onClick={onClick}>&nbsp;</span>
                            {selectAllIconUI}
                            <i className={fileIcon}></i>
                         </li>
            }
        }


    return ( nodeUI);
    }

}

ComponentManager.registerToolImplementation("weavereact.NodeConfig",Node);
export default Node;
