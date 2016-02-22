import React from "react";
import App from "../../utils/App";

class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings;
        if(this.props.style)
            this.settings.style.domDefined.state = this.props.style;
        if(this.props.src)
            this.settings.src.state =  this.props.src;
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
        if(this.props.src !== nextProps.src){// user style added through UI is Sessioned
            this.settings.src.state = nextProps.src;
        }
    }

    componentDidMount() {
        this.addCallbacks();
    }



    addCallbacks(){
        this.settings.enable.addImmediateCallback(this,this.forceUpdate);
        this.settings.src.addImmediateCallback(this,this.forceUpdate);
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this,this.forceUpdate);
    }

    removeCallbacks () {
        this.settings.enable.removeCallback(this,this.forceUpdate);
        this.settings.src.removeCallback(this,this.forceUpdate);
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
        }else{
            return false;
        }
    }


    render() {
        var logoUI = <div/>;

        if(this.settings.enable.value){

            var logoUI = "";
            if(this.settings.src.state){
                var styleObj = this.settings.style.getStyleFor();
                logoUI = <img style={styleObj} src={this.settings.src.value}/>
            }

        }
        return (logoUI);
    }
}
Weave.registerClass("weavereact.navbar.Logo", Logo,[weavejs.api.core.ILinkableObject]);
export default Logo;
