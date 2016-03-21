import React from "react";
import ComponentManager from "../../ComponentManager";

class Tab extends React.Component {

    constructor(props) {
        super(props);
        ComponentManager.initialize(this);

        this.setTabsSessionState = this.setTabsSessionState.bind(this);
        this.setTabsSessionState();// add the same for propsUpdate
    }

    setTabsSessionState(){

        if(this.props.titles){
            var tabs = this.props.titles;
            for(var i=0; i< tabs.length; i++){
                this.settings.tabs.requestObject(this.props.titles[i],TabConfig);
            }
        }

        this.switchTab.call(this,this.props.titles[0],0,true);// let the first value be default value
    }

    switchTab(tabName,index,isDefault){
        this.settings.activeTab.value = tabName;
        if(!isDefault &&this.props.clickCallback)this.props.clickCallback.call(this,tabName,index);
    }

    componentDidMount(){
        this.settings.activeTab.addGroupedCallback(this, this.forceUpdate);
        this.settings.tabs.childListCallbacks.addGroupedCallback(this, this.forceUpdate);
    }

    componentWillUnmount () {
        ComponentManager.componentWillUnmount(this);
        this.settings.activeTab.removeCallback(this, this.forceUpdate)
        this.settings.tabs.childListCallbacks.removeCallback(this, this.forceUpdate);
    }


    render() {

        var tabsNames = this.settings.tabs.getNames();
        var tabsList = tabsNames.map(function(tabName,index){
            if(this.settings.activeTab.value === tabName)
                return <li key={index} onClick={this.switchTab.bind(this,tabName,index)} className="active"><a href="#">{tabName}</a></li>
            else
                return <li key={index} onClick={this.switchTab.bind(this,tabName,index)}><a href="#">{tabName}</a></li>
        }.bind(this));

        return (<ul className="nav nav-tabs">
                    {tabsList}
                </ul>
               );
  }
}

export default TabNav;
