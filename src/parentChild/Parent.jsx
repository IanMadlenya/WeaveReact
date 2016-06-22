import React from 'react';
import Child from "./Child";
import config from "./Config";
import weavereact from "../../../lib/index.js";



class Parent extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings ? this.props.settings : new config.Parent();

        this.renderChildren = this.renderChildren.bind(this);
        weavereact.hookSessionStateForComponentChildren(this.props.children,this.settings);
        Weave.getCallbacks(this.settings).addGroupedCallback(this,this.forceUpdate);
        this.propsManager =  new weavereact.PropsManager();
        if(this.props.debug)console.log("Parent - constructor");
    }



    componentWillMount(){
        if(this.props.debug)console.log("Parent - componentWillMount");
    }

    componentDidMount(){
        if(this.props.debug)console.log("Parent - componentDidMount");
    }

    componentWillUnmount(){
        if(this.props.debug)console.log("Parent - componentWillUnmount");
        Weave.getCallbacks(this.settings).removeCallback(this,this.forceUpdate);
    }


    componentWillReceiveProps(nextProps){
        if(this.props.debug)console.log("Parent - componentWillReceiveProps");
        weavereact.componentWillReceiveProps(this,nextProps);

    }

    // shouldComponentUpdate is invoked when React-Parent render is invoked
    // React will invoke this function pretty often, so the implementation has to be fast.
    shouldComponentUpdate(){
        if(this.props.debug)console.log("Parent - shouldComponentUpdate");
        return false; // this ensures parent render wont render this component
    }


    componentWillUpdate(){
        if(this.props.debug)console.log("Parent - componentWillUpdate");
    }
    componentDidUpdate(){
        if(this.props.debug)console.log("Parent - componentDidUpdate");
    }

    renderChildren(){
         return weavereact.renderChildren(this,this.propsManager);
    }


    render() {
        if(this.props.debug)console.log("Parent - render");

        var styleObj = this.settings.style.getStyleFor();
        var cssName = this.settings.CSS.getCSSFor();
        var childrenUI = this.renderChildren();

        if(this.settings.useCSS.value){
            return (
                <div className={cssName}>
                    {childrenUI}
                </div>
            );
        }else{
            return (
                <div className={cssName} style={styleObj}>
                    {childrenUI}
                </div>
            );
        }
    }

}

Parent.Child = Child;

weavereact.registerToolConfig(Parent,config.Parent);
weavereact.registerToolConfig(Parent.Child,config.Child);

weavereact.registerToolImplementation("weavereact.config.Parent",Parent);
weavereact.registerToolImplementation("weavereact.config.Child",Parent.Child);

Weave.registerClass( Parent,["weavereact.Parent"],[weavejs.api.core.ILinkableObject],"Parent");

export default Parent;






