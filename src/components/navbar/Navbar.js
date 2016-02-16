import React from 'react';
import Style from "../../utils/Style";
import Brand from "./Brand";
import List from "./List";
import Form from "./Form";
import Link from "./Link";
import {NavbarConfig} from "./Config";


class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.settings = this.props.settings ? this.props.settings : new NavbarConfig();
        this.getStyle = this.getStyle.bind(this);
    }

     getStyle  () {
         var styleObject = {
             display:"flex",
             flexDirection:"row",
             width:"100%",
             heigh:"5%",
             position:this.settings.positionType.value,
             backgroundColor: this.settings.backgroundColor.value,

         }
         var border = this.settings.border.state;
         var padding = this.settings.padding.state;
         Style.mergeStyleObjects(styleObject,border);
         Style.mergeStyleObjects(styleObject,padding);

         if(styleObject["position"] === "fixed"){
             if(this.settings.position.value === "top"){
                styleObject["top"] = "0";
             }else if(this.settings.position.value === "bottom"){
                styleObject["bottom"] = "0";
             }else if(this.settings.position.value === "right"){
                styleObject["right"] = "0";
                styleObject["flexDirection"] = "column";
                styleObject["width"] = "5%";
                styleObject["height"] = "100%";

             }else if(this.settings.position.value === "left"){
                styleObject["left"] = "0";
                styleObject["flexDirection"] = "column";
                styleObject["width"] = "5%";
                styleObject["height"] = "100%";
             }
         }
        return Style.appendVendorPrefix(styleObject);
    }


    componentDidMount(){
        this.settings.positionType.addImmediateCallback(this,this.forceUpdate);
        this.settings.position.addImmediateCallback(this,this.forceUpdate);
        this.settings.backgroundColor.addImmediateCallback(this,this.forceUpdate);
        this.settings.border.addImmediateCallback(this,this.forceUpdate);
        this.settings.padding.addImmediateCallback(this,this.forceUpdate);
        this.settings.useCSS.addImmediateCallback(this,this.forceUpdate);
    }

    componentWillUnmount(){
        this.settings.positionType.removeCallback(this,this.forceUpdate);
        this.settings.position.removeCallback(this,this.forceUpdate);
        this.settings.backgroundColor.removeCallback(this,this.forceUpdate);
        this.settings.border.removeCallback(this,this.forceUpdate);
        this.settings.padding.removeCallback(this,this.forceUpdate);
        this.settings.useCSS.removeCallback(this,this.forceUpdate);
    }

    componentDidUpdate(){

    }


    render() {

        var styleObj = this.getStyle();
        var posType = this.settings.positionType.value;
        var pos = this.settings.position.value;
        var cssObj = null;
        if(this.settings.useCSS.value){
            cssObj = this.settings.CSS.state;
            var brandCSS = cssObj.brand;
            var listCSS = cssObj.list;
            var formCSS = cssObj.form;
        }
        return (
            <nav id="navbar"  style={styleObj}>
                <Brand css={brandCSS} useCSS={this.settings.useCSS.value} settings={this.settings.brand} positionType={posType} position={pos}/>
                <List css={listCSS} useCSS={this.settings.useCSS.value} settings={this.settings.navList} positionType={posType} position={pos}/>
                <Form css={formCSS} useCSS={this.settings.useCSS.value} settings={this.settings.form} positionType={posType} position={pos}/>
            </nav>
        );
    }

}




Weave.registerClass("weavereact.Navbar", Navbar,[weavejs.api.core.ILinkableObject]);

export default Navbar;






