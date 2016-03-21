import React from 'react';
import ComponentManager from '../../ComponentManager';
import Overlay from './Overlay';
import SideBar from "./SideBar";
import sideBarContainerConfig from "./Config";


class SideBarContainer extends React.Component {
    constructor(props) {
        super(props)
        ComponentManager.initialize(this,"container");
    }

    componentWillReceiveProps(nextProps){
        ComponentManager.componentWillReceiveProps(this,nextProps);
    }


    componentWillUnmount(){
        ComponentManager.componentWillUnmount(this);
    }

    // called only when React Parent render is called
    shouldComponentUpdate(nextProps){
        if(ComponentManager.debug)console.log("SidebarContainer - shouldComponentUpdate");
        return false;
    }

    renderChildren(){
        return  ComponentManager.renderChildren(this);
    }

    render() {
         if(ComponentManager.debug)console.log("SidebarContainer - render");

        var childrenUI = this.renderChildren();
        var leftSideBarUI = this.settings.leftSideBar.visible.state?<SideBar settings={this.settings.leftSideBar}/>:"";
        var rightSideBarUI = this.settings.rightSideBar.visible.state?<SideBar settings={this.settings.rightSideBar}/>:"";
        var topSideBarUI = this.settings.topSideBar.visible.state?<SideBar settings={this.settings.topSideBar}/>:"";
        var bottomSideBarUI = this.settings.bottomSideBar.visible.state?<SideBar settings={this.settings.bottomSideBar}/>:"";

        var styleObject = this.settings.style.getStyleFor();
        return ( <div style = {styleObject}>
                    {leftSideBarUI}
                    <div style={{width:"100%",height:"100%"}}>
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


ComponentManager.registerToolConfig(SideBarContainer,sideBarContainerConfig.Container);
ComponentManager.registerToolConfig(SideBarContainer.Overlay,sideBarContainerConfig.Overlay);
ComponentManager.registerToolConfig(SideBarContainer.SideBar,sideBarContainerConfig.SideBar);

ComponentManager.registerToolImplementation("weavereact.sideBarContainerConfig.Container",SideBarContainer);
ComponentManager.registerToolImplementation("weavereact.sideBarContainerConfig.Overlay",SideBarContainer.Overlay);
ComponentManager.registerToolImplementation("weavereact.sideBarContainerConfig.SideBar",SideBarContainer.SideBar);

Weave.registerClass("weavereact.SideBarContainer", SideBarContainer,[weavejs.api.core.ILinkableObject]);

module.exports = SideBarContainer;
