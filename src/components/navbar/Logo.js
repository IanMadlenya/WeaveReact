import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";

class Logo extends AbstractComponent {

    constructor(props) {
        super(props);
        if(this.props.src)//to-do in component manager check the settings prop is there if there set the state
            this.settings.src.state =  this.props.src;
    }


    componentWillReceiveProps(nextProps){
        super.componentWillReceiveProps(nextProps);
        if(this.props.src !== nextProps.src){// user style added through UI is Sessioned
            this.settings.src.state = nextProps.src;
        }
    }


    shouldComponentUpdate(nextProps){
        super.shouldComponentUpdate(nextProps);
        if(this.props.dock !== nextProps.dock){
            return true
        }else if(this.props.position !== nextProps.position){
            return true
        }else{
            return false;
        }
    }


    render() {
        if(ComponentManager.debug)console.log("Logo - render");
        if(!this.settings.visible.value)
            return <div/>;

        if(this.settings.src.state){
            var styleObj = this.settings.style.state;
            return <img style={styleObj} src={this.settings.src.value}/>
        }
        else
            return <div/>
    }
}
Weave.registerClass("weavereact.navbar.Logo", Logo,[weavejs.api.core.ILinkableObject]);
export default Logo;
