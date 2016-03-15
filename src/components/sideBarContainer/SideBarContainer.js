import React from 'react';
import App from '../../utils/App';
import Overlay from './Overlay';
import SideBar from "./SideBar";
import sideBarContainerConfig from "./Config";


class SideBarContainer extends React.Component {
    constructor(props) {
        super(props)
        this.settings = props.settings;
        App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        App.addForceUpdateToCallbacks(this);
        if(App.debug)console.log("SidebarContainer - constructor");
    }

    componentWillReceiveProps(nextProps){
        if(App.debug)console.log("SidebarContainer - componentWillReceiveProps");
        App.componentWillReceiveProps(this,nextProps);
    }


    componentWillUnmount(){
        if(App.debug)console.log("SidebarContainer - componentWillUnmount");
        App.removeForceUpdateFromCallbacks(this);
    }

    // called only when React Parent render is called
    shouldComponentUpdate(nextProps){
        if(App.debug)console.log("SidebarContainer - shouldComponentUpdate");
        return false;
    }

    renderChildren(){
        return  App.renderChildren(this);
    }

    render() {
         if(App.debug)console.log("SidebarContainer - render");

        var childrenUI = this.renderChildren();
        var leftSideBarUI = this.settings.leftSideBar.enable.state?<SideBar settings={this.settings.leftSideBar}/>:"";
        var rightSideBarUI = this.settings.rightSideBar.enable.state?<SideBar settings={this.settings.rightSideBar}/>:"";
        var topSideBarUI = this.settings.topSideBar.enable.state?<SideBar settings={this.settings.topSideBar}/>:"";
        var bottomSideBarUI = this.settings.bottomSideBar.enable.state?<SideBar settings={this.settings.bottomSideBar}/>:"";

        var styleObject = this.settings.style.getStyleFor();
        return ( <div style = {styleObject}>
                    {leftSideBarUI}
                    <div>
                        {topSideBarUI}
                        {childrenUI}
                        {bottomSideBarUI}
                    </div>
                    {rightSideBarUI}
                </div>
                );
    }
}

SideBarContainer.Overlay = Overlay;
SideBarContainer.SideBar = SideBar;


App.registerToolConfig(SideBarContainer,sideBarContainerConfig.Container);
App.registerToolConfig(SideBarContainer.Overlay,sideBarContainerConfig.Overlay);
App.registerToolConfig(SideBarContainer.SideBar,sideBarContainerConfig.SideBar);

App.registerToolImplementation("weavereact.sideBarContainerConfig.Container",SideBarContainer);
App.registerToolImplementation("weavereact.sideBarContainerConfig.Overlay",SideBarContainer.Overlay);
App.registerToolImplementation("weavereact.sideBarContainerConfig.SideBar",SideBarContainer.SideBar);

Weave.registerClass("weavereact.SideBarContainer", SideBarContainer,[weavejs.api.core.ILinkableObject]);

module.exports = SideBarContainer;
