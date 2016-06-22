import React from 'react';
import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";

class Title extends AbstractComponent {

    constructor(props) {
        super(props);
        if(this.props.title)
            this.settings.title.state =  this.props.title;
    }


    componentWillReceiveProps(nextProps){
        super.componentWillReceiveProps(nextProps);
        if(this.props.title !== nextProps.title){// user style added through UI is Sessioned
            if(nextProps.title)this.settings.title.state = nextProps.title;
        }
    }



    shouldComponentUpdate(nextProps){
        super.shouldComponentUpdate(nextProps)
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
        if(ComponentManager.debug)console.log("Title ---Render---");
        if(!this.settings.visible.value)
             return <div/>;

        var styleObj = this.settings.style.state;

        return <span style={styleObj}>{Weave.lang(this.settings.title.value)}</span>
    }
}
Weave.registerClass( Title,["weavereact.navbar.Title"],[weavejs.api.core.ILinkableObject],"Navbar Title");
export default Title;
