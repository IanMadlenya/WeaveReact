import React from 'react';
import AbstractComponent from '../../AbstractComponent';
import ComponentManager from "../../ComponentManager";

class SideBar extends AbstractComponent {
    constructor(props) {
        super(props,"container")
    }


    renderChildren(){
        var iconMode = false;
        if(!this.settings.open.state && this.settings.static.state)
             iconMode = true;
        this.settings.props.addChildProps("iconMode",iconMode);
        return  ComponentManager.renderChildren(this);
    }


    render() {
        if(ComponentManager.debug)console.log("Sidebar - render");
        if(!this.settings.visible.state)
            return <div/>;

        var styleObject =  this.settings.style.state;
        var childrenUI = this.renderChildren();
        return <div style={styleObject}>
                   {childrenUI}
            </div>;

    }
}

Weave.registerClass("weavereact.sideBarContainer.SideBar", SideBar,[weavejs.api.core.ILinkableObject]);

export default SideBar;

