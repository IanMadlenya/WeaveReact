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

        var styleObject = this.settings.style.getStyleFor(null)
         if(styleObject["position"] === "fixed"){
             if(this.settings.dock.value === "top"){
                styleObject["top"] = "0";
             }else if(this.settings.dock.value === "bottom"){
                styleObject["bottom"] = "0";
             }else if(this.settings.dock.value === "right"){
                styleObject["right"] = "0";
                styleObject["flexDirection"] = "column";
                styleObject["width"] = "5%";
                styleObject["height"] = "100%";

             }else if(this.settings.dock.value === "left"){
                styleObject["left"] = "0";
                styleObject["flexDirection"] = "column";
                styleObject["width"] = "5%";
                styleObject["height"] = "100%";
             }
         }
        return Style.appendVendorPrefix(styleObject);
    }


    componentDidMount(){
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this,this.forceUpdate);
        this.settings.CSS.addImmediateCallback(this,this.forceUpdate);
        this.settings.useCSS.addImmediateCallback(this,this.forceUpdate);
        this.settings.dock.addImmediateCallback(this,this.forceUpdate);
    }

    componentWillUnmount(){
        Weave.getCallbacks(this.settings.style).removeCallback(this,this.forceUpdate);
        this.settings.CSS.removeCallback(this,this.forceUpdate);
        this.settings.useCSS.removeCallback(this,this.forceUpdate);
        this.settings.dock.removeCallback(this,this.forceUpdate);
    }

    componentDidUpdate(){

    }


    render() {

        var styleObj = this.getStyle();
        var pos = this.settings.style.position.value;
        var dock = pos === "fixed"?this.settings.dock.value:null;
        var cssObj = null;
        if(this.settings.useCSS.value){
            cssObj = this.settings.CSS.state;
            var brandCSS = cssObj.brand;
            var listCSS = cssObj.list;
            var formCSS = cssObj.form;
            return (
                <nav className={cssObj.navbar}>
                    <Brand css={brandCSS} useCSS={this.settings.useCSS.value} settings={this.settings.brand} dock={dock} position={pos}/>
                    <List css={listCSS} useCSS={this.settings.useCSS.value} settings={this.settings.navList} dock={dock} position={pos}/>
                    <Form css={formCSS} useCSS={this.settings.useCSS.value} settings={this.settings.form} dock={dock} position={pos}/>
                </nav>
            );
        }else{
            return (
                <nav   style={styleObj}>
                    <Brand useCSS={this.settings.useCSS.value} settings={this.settings.brand} dock={dock} position={pos}/>
                    <List  useCSS={this.settings.useCSS.value} settings={this.settings.navList} dock={dock} position={pos}/>
                    <Form  useCSS={this.settings.useCSS.value} settings={this.settings.form} dock={dock} position={pos}/>
                </nav>
        );

        }


    }

}




Weave.registerClass("weavereact.Navbar", Navbar,[weavejs.api.core.ILinkableObject]);

export default Navbar;






