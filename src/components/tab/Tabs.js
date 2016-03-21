import React from "react";
import ComponentManager from "../../ComponentManager";
import tabsConfig from "./Config";
import Tab from "./Tab";



class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.WrapperConfigClass = Tab;
        ComponentManager.initialize(this,"container");
    }

    componentWillReceiveProps(nextProps){
        ComponentManager.componentWillReceiveProps(this,nextProps);
    }

    componentWillUnmount(){
        ComponentManager.componentWillUnmount(this);
    }

    // weavestate change directly calls forceUpdate, so no need to use Weave.detectChange
    shouldComponentUpdate(){
        if(App.debug)console.log("Tabs shouldComponentUpdate");
        // default return true
        return false; // this ensures parent render of this wont render the navbar
    }


    renderChildren(){
        this.propsManager.addKeyProps("tabName");
        this.propsManager.addOddChild(this.settings.activeTab.state,{isActive:"true"});
        return componentWillUnmount.renderChildren(this);
    }

    switchTab(tabName,index){
        this.settings.activeTab.value = tabName;
        if(!isDefault &&this.props.clickCallback)this.props.clickCallback.call(this,tabName,index);
    }


    render() {

        if(App.debug)console.log("Tabs ---Render---");

        var styleObject = this.settings.style.getStyleFor();
        var cssName = this.settings.CSS.getCSSFor();
        var tabLinksUI = this.renderChildren();
        var activeTabUI = <div/>

        return (<div style={styleObject}>
                    {tabLinksUI}
                    {activeTabUI}
                </div>
        );
    }
}
//required when we change this to use LinkablePlaceHolder Object
Weave.registerClass("weavereact.Tabs", Tabs,[weavejs.api.core.ILinkableObject]);

export default Tabs;
