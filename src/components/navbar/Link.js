import React from "react";
import ComponentManager from "../../ComponentManager";

class Link extends React.Component {

    constructor(props) {
        super(props);
        ComponentManager.initialize(this);
        if(this.props.children)
            this.settings.title.value = this.props.children;
    }

    componentWillUnmount() {
        ComponentManager.componentWillUnmount(this);
    }

    componentWillReceiveProps(nextProps){
        ComponentManager.componentWillReceiveProps(this,nextProps);
        if(this.props.children !== nextProps.children)
            this.settings.title.value = nextProps.children;
    }

    render() {
        var title = this.settings.title.value;
        var hrefLink = title.toLowerCase();
        if(this.settings.iconMode.state){
            title = "";
        }
        var styleObject = this.settings.style.getStyleFor(null,true)
        if (this.props.isActive) {

            return ( <li style={this.props.style}>
                        <a style={styleObject} href = {'#' + hrefLink}>
                            <i className = {this.settings.iconName.value}> </i>
                            {title}
                        </a>
                    </li>
            );
        } else {
            return (<li style={this.props.style}>
                        <a style={styleObject} href = {'#' + hrefLink}>
                            <i className = {this.settings.iconName.value}> </i>
                            {title}
                        </a>
                    </li>
            );
        }
    }
}
Weave.registerClass("weavereact.navbar.Link", Link,[weavejs.api.core.ILinkableObject]);
export default Link;
