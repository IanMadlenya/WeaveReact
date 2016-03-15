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

    // allowe render only when React Parent render is called with new iconMode value
    shouldComponentUpdate(nextProps){
        if(App.debug)console.log("Sidebar - shouldComponentUpdate");
        if(this.props.iconMode !== nextProps.iconMode)
            return true
        else
            return false;
    }


    renderChildren(childList){
        var iconMode = false;
        if(!this.settings.open.state && this.settings.static.state)
             iconMode = true;
        this.settings.props.addChildProps("iconMode",iconMode);
        return  App.renderChildren(this,childList);
    }


    render() {
        if(App.debug)console.log("Sidebar - render");
        var ui = <div/>;
        if(this.settings.enable.state){
            var styleObject =  this.settings.style.getStyleFor();
            var childrenUI = this.renderChildren();
            // need to consider in a mode where ony the button to bring them visible
            /*if(this.settings.open.state){
                childrenUI = this.renderChildren();
            }else if(this.settings.static.state){
                childrenUI = this.renderChildren(['switchButton']);
            }*/
            ui = <div style={styleObject}>
                       {childrenUI}
                </div>;
        }
        return (ui);
    }
}

Weave.registerClass("weavereact.sideBarContainer.SideBar", SideBar,[weavejs.api.core.ILinkableObject]);

export default SideBar;

