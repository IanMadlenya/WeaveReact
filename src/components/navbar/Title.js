import React from "react";
import App from "../../utils/App";

class Title extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings;
        if(this.props.style)
            this.settings.style.domDefined.state = this.props.style;
        if(this.props.title)
            this.settings.title.state =  this.props.title;
        this.addCallbacks = this.addCallbacks.bind(this);
        this.removeCallbacks = this.removeCallbacks.bind(this);
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
        if(this.props.title !== nextProps.title){// user style added through UI is Sessioned
            if(nextProps.title)this.settings.title.state = nextProps.title;
        }



    }

    componentDidMount() {
        this.addCallbacks();
    }



    addCallbacks(){
        this.settings.enable.addImmediateCallback(this,this.forceUpdate);
        this.settings.title.addImmediateCallback(this,this.forceUpdate);
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this,this.forceUpdate);
    }

    removeCallbacks () {
        this.settings.enable.removeCallback(this,this.forceUpdate);
        this.settings.title.removeCallback(this,this.forceUpdate);
        Weave.getCallbacks(this.settings.style).removeCallback(this,this.forceUpdate);
    }

    componentWillUnmount () {
        this.removeCallbacks();
    }

    shouldComponentUpdate(nextProps){
        if(this.props.dock !== nextProps.dock){
            return true
        }else if(this.props.position !== nextProps.position){
            return true
        }else if(this.props.useCSS !== nextProps.useCSS){
            return true
        }else if(this.props.title !== nextProps.title){
            return true
        }else{
            return false;
        }
    }


    render() {
        var titleUI = <div/>;

        if(this.settings.enable.value){

                var styleObj = this.settings.style.getStyleFor();
                titleUI = <span style={styleObj}> {this.settings.title.value}</span>

        }
        return (titleUI);
    }
}
Weave.registerClass("weavereact.navbar.Title", Title,[weavejs.api.core.ILinkableObject]);
export default Title;
