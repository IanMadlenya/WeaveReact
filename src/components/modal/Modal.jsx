import React from "react";

import Style from "../../utils/Style";
import ModalConfig from "./ModalConfig";
import ModalPanel from "./ModalPanel";



class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new ModalConfig();


        this.state = {
            open:this.settings.open.value
        }
        this.updateState = this.updateState.bind(this);
        this.openModal = this.openModal.bind(this);

    }

    componentDidMount(){
        this.settings.open.addImmediateCallback(this, this.updateState);
    }

    componentWillUnmount () {
        this.settings.open.removeCallback(this, this.updateState)
    }

    updateState(){
        this.setState({
            open:this.settings.open.value
        });
    }

    openModal(){
        this.settings.open.value = true;
    }


    render() {

    var overlay = Style.overlayContainer(this.state.open);
    var modal = Style.modal(this.state.open);
    //if(this.state.open)modal['width'] = this.state.width;

    // important to put modalpanel in wrapper in style, as style is not applied to custom react component, react takes the style of outer contianer in
    // react Component render function
    return (<span >
                    <span type="button" className="btn btn-primary" onClick={this.openModal}>Open</span>

                    <div style={overlay}/>
                    <div style={modal}>
                        <ModalPanel  sessionOpen={this.settings.open} settings={this.settings.panelConfig}>
                            {this.props.children}
                        </ModalPanel>
                    </div>
            </span>
    );
  }
}

export default Modal;
