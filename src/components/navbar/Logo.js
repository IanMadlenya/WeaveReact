import React from "react";
import ComponentManager from "../../ComponentManager";

class Logo extends React.Component {

    constructor(props) {
        super(props);
        ComponentManager.initialize(this);
        if(this.props.src)//to-do in component manager check the settings prop is there if there set the state
            this.settings.src.state =  this.props.src;
    }


    componentWillReceiveProps(nextProps){
        ComponentManager.componentWillReceiveProps(this,nextProps);
        if(this.props.src !== nextProps.src){// user style added through UI is Sessioned
            this.settings.src.state = nextProps.src;
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
        }else{
            return false;
        }
    }


    render() {
        if(!this.settings.visible.value)
            return <div/>;

        if(this.settings.src.state){
            var styleObj = this.settings.style.getStyleFor();
            return <img style={styleObj} src={this.settings.src.value}/>
        }
        else
            return <div/>
    }
}
Weave.registerClass("weavereact.navbar.Logo", Logo,[weavejs.api.core.ILinkableObject]);
export default Logo;
