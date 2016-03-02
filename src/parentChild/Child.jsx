import React from 'react';
import config from "./Config";
import weavereact from "../../../lib/index.js";



class Child extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings ? this.props.settings : new config.Child();

        this.renderChildren = this.renderChildren.bind(this);
        weavereact.hookSessionStateForComponentChildren(this.props.children,this.settings);
        Weave.getCallbacks(this.settings).addGroupedCallback(this,this.forceUpdate);
        this.propsManager =  new weavereact.PropsManager();
        if(this.props.debug)console.log("Child - constructor");
    }



    componentWillMount(){
        if(this.props.debug)console.log("Child - componentWillMount");
    }

    componentDidMount(){
        if(this.props.debug)console.log("Child - componentDidMount");
    }

    componentWillUnmount(){
        if(this.props.debug)console.log("Child - componentWillUnmount");
        Weave.getCallbacks(this.settings).removeCallback(this,this.forceUpdate);
    }


    componentWillReceiveProps(nextProps){
        if(this.props.debug)console.log("Child - componentWillReceiveProps");
        weavereact.componentWillReceiveProps(this,nextProps);

    }

    // shouldComponentUpdate is invoked when React-Child render is invoked
    // React will invoke this function pretty often, so the implementation has to be fast.
    shouldComponentUpdate(){
        if(this.props.debug)console.log("Child - shouldComponentUpdate");
        return false; // this ensures parent render wont render this component
    }


    componentWillUpdate(){
        if(this.props.debug)console.log("Child - componentWillUpdate");
    }
    componentDidUpdate(){
        if(this.props.debug)console.log("Child - componentDidUpdate");
    }

    renderChildren(){
         return weavereact.renderChildren(this,this.propsManager);
    }


    render() {
        if(this.props.debug)console.log("Child - render");

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

Weave.registerClass("weavereact.Child", Child,[weavejs.api.core.ILinkableObject]);

export default Child;






