import React from 'react';
import Style from "../../utils/Style";
import Link from "./Link";


class List extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings;

    }

    componentDidMount(){
        this.settings.enable.addImmediateCallback(this, this.forceUpdate);
        this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
        this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
        this.settings.links.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
    }



    componentWillUnmount(){
        this.settings.enable.removeCallback(this, this.forceUpdate);
        this.settings.rightAlign.removeCallback(this, this.forceUpdate);
        this.settings.activePage.removeCallback(this, this.forceUpdate);
        this.settings.links.childListCallbacks.removeCallback(this, this.forceUpdate);
    }

    render() {
        var navLinks = "";
        if(this.settings.enable.value){
            var links = this.settings.links.getNames().map(function(linkName,index){

                //var linkablePlaceHolder = this.links.getObject(linkName);
                //var ToolClass = linkablePlaceHolder.getClass();
                var linkConfig = this.settings.links.getObject(linkName);

                if(linkName === this.settings.activePage.value) {
                    return (<Link key={index} isActive={true} pageName={linkName} settings={linkConfig} />);
                }
                else{
                    return (<Link key={index} isActive={false} pageName={linkName} settings={linkConfig}/>);
                }
            }.bind(this));

            navLinks = <ul className="nav navbar-nav">{links}</ul>;
        }

        return (navLinks);
    }

}
Weave.registerClass("weavereact.navbar.List", List,[weavejs.api.core.ILinkableObject]);
export default List;
