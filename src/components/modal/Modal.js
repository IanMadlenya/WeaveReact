import React from 'react';
import ComponentManager from "../../ComponentManager";
import ModalConfig from "./ModalConfig";
import ModalPanel from "./ModalPanel";



class Modal extends React.Component {

    constructor(props) {
        super(props);
        ComponentManager.initialize(this);
        this.openModal = this.openModal.bind(this);

    }

    componentWillUnmount(){
        ComponentManager.componentWillUnmount(this);
    }


    openModal(){
        this.settings.open.value = true;
    }

    componentWillReceiveProps(nextProps){
         ComponentManager.componentWillReceiveProps(this,nextProps);
    }


    render() {
        var isOpen = this.settings.open.value;
        var overlay = Style.overlayContainer(isOpen);
        var modal = Style.modal(isOpen);
        var modalButtonUI = "";
        var modalPanelUI = "";
        if(isOpen){
            modalPanelUI = <ModalPanel title={this.props.title}  sessionOpen={this.settings.open} settings={this.settings.panelConfig}>
                                {this.props.children}
                            </ModalPanel>
        }

        if (!this.props.keyPress){
            if(this.settings.buttonIcon.value){
                modalButtonUI = <span style={{cursor:"pointer"}} onClick={this.openModal}><i className={this.settings.buttonIcon.value}></i></span>;
            }
            else{
                modalButtonUI = <span type="button" className="btn btn-primary" onClick={this.openModal}>Open</span>;
            }

        }
        return (<span >
                        {modalButtonUI}

                        <div style={overlay}/>
                        <div style={modal}>
                            {modalPanelUI}
                        </div>
                </span>
        );
  }
}

Weave.registerClass( Modal,["weavereact.Modal"],[weavejs.api.core.ILinkableObject],"Modal");
ComponentManager.registerToolConfig(Modal,ModalConfig);
ComponentManager.registerToolImplementation("weavereact.ModalConfig",Modal);

export default Modal;
