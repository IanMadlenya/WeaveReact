import React from "react";

class Link extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings;
        this.addCallbacks = this.addCallbacks.bind(this);
        this.removeCallbacks = this.removeCallbacks.bind(this);
    }



    componentDidMount() {
        this.addCallbacks();
    }

    addCallbacks() {
        this.settings.title.addImmediateCallback(this, this.forceUpdate);
        this.settings.iconName.addImmediateCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
    }


    removeCallbacks() {
        this.settings.title.removeCallback(this, this.forceUpdate);
        this.settings.iconName.removeCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
    }

    componentWillUnmount() {
        this.removeCallbacks();
    }



    componentWillReceiveProps(nextProps){
        if(this.props.settings !== nextProps.settings){
            if(nextProps.settings){
                this.removeCallbacks();
                this.settings = nextProps.settings;
                this.addCallbacks();
            }
        }
        if(this.props.style !== nextProps.style){// user style added through UI is Sessioned
            if(nextProps.style)this.settings.style.domDefined.state = nextProps.style;
        }
    }




    render() {
        var title = this.settings.title.value;
        if(this.props.iconOnly){
            title = "";
        }
        var styleObject = this.settings.style.getStyleFor(null,true)
        if (this.props.isActive) {

            return ( <li style={this.props.style}>
                        <a style={styleObject} href = {'#' + title.toLowerCase()}>
                            <i className = {this.settings.iconName.value}> </i>
                            {title}
                        </a>
                    </li>
            );
        } else {
            return (<li style={this.props.style}>
                        <a style={styleObject} href = {'#' + title.toLowerCase()}>
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
