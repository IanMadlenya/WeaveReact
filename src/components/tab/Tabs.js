import React from "react";
import Style from "../../utils/Style";
import App from "../../utils/App";
import PropsManager from "../PropsManager";
import tabsConfig from "./Config";
import Tab from "./Tab";



class Tabs extends React.Component {

    constructor(props) {
        if(App.debug)console.log("Tabs constructor");
        super(props);
        this.settings = this.props.settings ? this.props.settings:new tabsConfig.Tabs();
        this.WrapperConfigClass = Tab;
        App.hookSessionStateForComponentChildren(this.props.children,this.settings,this.WrapperConfigClass);
        App.addForceUpdateToCallbacks(this);
        this.propsManager =  new PropsManager();

        this.renderChildren = this.renderChildren.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(App.debug)console.log("Tabs componentWillReceiveProps");
        App.componentWillReceiveProps(this,nextProps);
    }



    componentWillUnmount(){
        if(App.debug)console.log("Tabs componentWillUnmount");
        App.removeForceUpdateFromCallbacks(this);
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
        return App.renderChildren(this,this.propsManager);
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
