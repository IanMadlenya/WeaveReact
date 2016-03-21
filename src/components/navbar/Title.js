import React from "react";
import ComponentManager from "../../ComponentManager";

class Title extends React.Component {

    constructor(props) {
        super(props);
        ComponentManager.initialize(this);
        if(this.props.title)
            this.settings.title.state =  this.props.title;
    }


    componentWillReceiveProps(nextProps){
        ComponentManager.componentWillReceiveProps(this,nextProps);
        if(this.props.title !== nextProps.title){// user style added through UI is Sessioned
            if(nextProps.title)this.settings.title.state = nextProps.title;
        }
    }


    componentWillUnmount () {
        ComponentManager.componentWillUnmount(this);
    }

    shouldComponentUpdate(nextProps){
        if(this.props.dock !== nextProps.dock){
            return true
        }else if(this.props.position !== nextProps.position){
            return true
        }else if(this.props.title !== nextProps.title){
            return true
        }else{
            return false;
        }
    }


    render() {
        if(!this.settings.visible.value)
             return <div/>;

        var styleObj = this.settings.style.getStyleFor();

        return <span style={styleObj}>{this.settings.title.value}</span>
    }
}
Weave.registerClass("weavereact.navbar.Title", Title,[weavejs.api.core.ILinkableObject]);
export default Title;
