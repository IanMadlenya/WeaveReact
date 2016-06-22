import React from 'react';
import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";

class Link extends AbstractComponent {

    constructor(props) {
        super(props);
        if(this.props.children)
            this.settings.title.value = this.props.children;
    }


    componentWillReceiveProps(nextProps){
        super.componentWillReceiveProps(nextProps);
        if(this.props.children !== nextProps.children)
            this.settings.title.value = nextProps.children;
    }

    render() {
        if(ComponentManager.debug)console.log("Link - render");
        var title = this.settings.title.value;
        var hrefLink = title.toLowerCase();
        if(this.settings.iconMode.state){
            title = "";
        }
        var styleObject = this.settings.style.state
        if (this.props.isActive) {

            return ( <li style={this.props.style}>
                        <a style={styleObject} href = {'#' + hrefLink}>
                            <i className = {this.settings.iconName.value}> </i>
                            {Weave.lang(title)}
                        </a>
                    </li>
            );
        } else {
            return (<li style={this.props.style}>
                        <a style={styleObject} href = {'#' + hrefLink}>
                            <i className = {this.settings.iconName.value}> </i>
                            {Weave.lang(title)}
                        </a>
                    </li>
            );
        }
    }
}
Weave.registerClass( Link,["weavereact.navbar.Link"],[weavejs.api.core.ILinkableObject],"Navbar Link");
export default Link;
