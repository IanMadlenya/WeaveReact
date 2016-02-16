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
        this.getCssClassName = this.getCssClassName.bind(this);
    }

     getCssClassName  () {
        return NavbarConfig.MAIN + " " + "navbar-" + this.settings.type.value + " " + "navbar-" + this.settings.positionType.value + '-' + this.settings.position.value;
    }


    componentDidMount(){

    }

    componentWillUnmount(){

    }

    componentDidUpdate(){

    }


    render() {

        var cssClassName = this.getCssClassName();
        return (
            <nav className={cssClassName} style={{margin:"0",height:"50px"}}>
                <div>
                    <Brand settings={this.settings.brand}/>
                    <List settings={this.settings.navList}/>
                    <Form settings={this.settings.form}/>
                </div>
            </nav>
        );
    }

}




Weave.registerClass("weavereact.Navbar", Navbar,[weavejs.api.core.ILinkableObject]);

export default Navbar;






