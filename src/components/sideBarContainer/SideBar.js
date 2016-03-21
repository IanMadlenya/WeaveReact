import React from 'react';
import ComponentManager from "../../ComponentManager";

class SideBar extends React.Component {
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

    // allowe render only when React Parent render is called with new iconMode value
    shouldComponentUpdate(nextProps){
        if(ComponentManager.debug)console.log("Sidebar - shouldComponentUpdate");
        return false;
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

        var styleObject =  this.settings.style.getStyleFor();
        var childrenUI = this.renderChildren();
        return <div style={styleObject}>
                   {childrenUI}
            </div>;

    }
}

Weave.registerClass("weavereact.sideBarContainer.SideBar", SideBar,[weavejs.api.core.ILinkableObject]);

export default SideBar;

