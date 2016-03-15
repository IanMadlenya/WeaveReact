import React from 'react';
import App from "../../utils/App";

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.settings = props.settings ;
        App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        App.addForceUpdateToCallbacks(this);
        if(App.debug)console.log("Sidebar - constructor");
    }

    componentWillReceiveProps(nextProps){
        if(App.debug)console.log("Sidebar - componentWillReceiveProps");
        App.componentWillReceiveProps(this,nextProps);
    }


    componentWillUnmount(){
        if(App.debug)console.log("Sidebar - componentWillUnmount");
         App.removeForceUpdateFromCallbacks(this);
    }

    // called only when React Parent render is called
    shouldComponentUpdate(nextProps){
        if(App.debug)console.log("Sidebar - shouldComponentUpdate");
        return false;
    }


    renderChildren(){
        return  App.renderChildren(this);
    }


    render() {
        if(App.debug)console.log("Sidebar - render");
        var styleObject =  this.settings.style.getStyleFor();
        var childrenUI = this.settings.open.state?this.renderChildren():[];

        return ( <div style={styleObject}>
                       {childrenUI}
                </div>
               );
    }
}

Weave.registerClass("weavereact.sideBarContainer.SideBar", SideBar,[weavejs.api.core.ILinkableObject]);

export default SideBar;

