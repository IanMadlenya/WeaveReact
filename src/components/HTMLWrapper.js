import React from 'react';
import Styles from "../utils/Style";
import App from "../utils/App";
import HTMLWrapperConfig from "../configs/HTMLWrapperConfig";

class HTMLWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new HTMLWrapperConfig();
        this.renderChildren = this.renderChildren.bind(this);
    }

    componentDidMount(){
        Weave.getCallbacks(this.settings).addGroupedCallback(this,this.forceUpdate);
    }

    componentWillUnmount () {
         Weave.getCallbacks(this.settings).removeCallback(this,this.forceUpdate);
    }

    renderChildren(CSS){
        var clonedChildren = React.Children.map(this.props.children,function(child,index){
            var childName = "";
            var props = App.mergeInto({},child.props);
            if(typeof(child.type) === "string"){
                childName =  child.type + index;
                if(CSS){
                    props["className"] = this.props.className;
                }
                else{
                    var styleConfig = this.settings.style;
                    var styleObject = styleConfig.getStyleFor(null,true)
                    props["style"] = child.props.style ? Styles.mergeStyleObjects(styleObject,child.props.style,true): styleObject;
                }
            }
            return React.cloneElement(child,props);
        },this);
        return clonedChildren;
    }

    render() {
        var childrenUI = [];
        if(this.props.useCSS){
            childrenUI = this.renderChildren(this.props.CSS);
        }else{
            childrenUI = this.renderChildren(null);
        }

        return (<div style={this.props.style} onClick={this.props.onClick}>
                    {childrenUI}
                </div>
        );
  }
}

App.registerToolConfig(HTMLWrapper,HTMLWrapperConfig);
App.registerToolImplementation("weavereact.HTMLWrapperConfig",HTMLWrapper);

Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper,[weavejs.api.core.ILinkableObject]);

export default HTMLWrapper;
