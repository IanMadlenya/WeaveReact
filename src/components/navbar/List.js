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
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
        this.settings.space.addImmediateCallback(this, this.forceUpdate);
        this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
        this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
        this.settings.links.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
    }



    componentWillUnmount(){
        this.settings.enable.removeCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
        this.settings.space.removeCallback(this, this.forceUpdate);
        this.settings.rightAlign.removeCallback(this, this.forceUpdate);
        this.settings.activePage.removeCallback(this, this.forceUpdate);
        this.settings.links.childListCallbacks.removeCallback(this, this.forceUpdate);
    }

    shouldComponentUpdate(nextProps){
        if(this.props.dock !== nextProps.dock){
            return true
        }else if(this.props.position !== nextProps.position){
            return true
        }else if(this.props.useCSS !== nextProps.useCSS){
            return true
        }else{
            return false;
        }
    }


    render() {
        var navLinks = <div/>;

        if(this.settings.enable.value){
            if(!this.props.useCSS){
                var styleObject = this.settings.style.getStyleFor(null)
                if((this.props.dock !== "right") && (this.props.dock !== "left") && this.settings.rightAlign){
                    styleObject["justifyContent"] = "flex-end";
                    styleObject["marginRight"] = "auto";
                }
                styleObject = Style.appendVendorPrefix(styleObject);
            }
            var linkStyleObject={};
            var iconOnly = false;
            var space = this.settings.space.value;
            if((this.props.dock === "right") || (this.props.dock === "left")){
                iconOnly = true;
                linkStyleObject["marginBottom"] = space;
            }
            else if((this.props.dock === "top") || (this.props.dock === "bottom")){
                iconOnly = false;
                linkStyleObject["marginRight"] = space;
            }

            var links = this.settings.links.getNames().map(function(linkName,index){

                //var linkablePlaceHolder = this.links.getObject(linkName);
                //var ToolClass = linkablePlaceHolder.getClass();
                var linkConfig = this.settings.links.getObject(linkName);

                if(linkName === this.settings.activePage.value) {
                    return (<Link style={linkStyleObject} key={index} iconOnly={iconOnly} isActive={true} pageName={linkName} settings={linkConfig} />);
                }
                else{
                    return (<Link style={linkStyleObject} key={index} iconOnly={iconOnly} isActive={false} pageName={linkName} settings={linkConfig}/>);
                }
            }.bind(this));

            styleObject = Style.appendVendorPrefix(styleObject);
            if(this.props.useCSS)
                navLinks = <ul className={this.props.css}>{links}</ul>;
            else
                navLinks = <ul style={styleObject}>{links}</ul>;
        }

        return (navLinks);
    }

}
Weave.registerClass("weavereact.navbar.List", List,[weavejs.api.core.ILinkableObject]);
export default List;
