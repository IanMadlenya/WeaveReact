import React from "react";

class Link extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings;

    }


    componentDidMount() {
        this.settings.title.addImmediateCallback(this, this.forceUpdate);
        this.settings.iconName.addImmediateCallback(this, this.forceUpdate);
    }


    componentWillUnmount() {
        this.settings.title.removeCallback(this, this.forceUpdate);
        this.settings.iconName.removeCallback(this, this.forceUpdate);
    }

    componentWillReceiveProps(nextProps){

    }

    shouldComponentUpdate(nextProps){
        return true;
    }


    render() {
        var title = this.settings.title.value;
        if(this.props.iconOnly){
            title = "";
        }
        if (this.props.isActive) {

            return ( <li style={this.props.style}>
                        <a href = {'#' + this.props.pageName }>
                            <i className = {this.settings.iconName.value}> </i>
                            {title}
                        </a>
                    </li>
            );
        } else {
            return (<li style={this.props.style}>
                        <a href = {'#' + this.props.pageName}>
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
