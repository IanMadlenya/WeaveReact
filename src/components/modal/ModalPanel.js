import React from 'react';
import ModalPanelConfig from "./ModalPanelConfig";


class ModalPanel extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new ModalPanelConfig();
        this.settings.title.value = this.props.title;
        window.modalLayout = this.settings;// for testing
        this.sessionOpen = this.props.sessionOpen;

        this.state = this.settings.getLayoutState();

        this.closeModal =  this.closeModal.bind(this);
        this.updateState =  this.updateState.bind(this);
    }

    componentDidMount(){
        Weave.getCallbacks(this.settings).addImmediateCallback(this, this.updateState);
    }

    componentWillUnmount () {
        Weave.getCallbacks(this.settings).removeCallback(this, this.updateState);
    }

    updateState(){
        this.setState(this.settings.getLayoutState());
    }

    closeModal(){
        this.sessionOpen.value = false;
    }

    componentWillReceiveProps(nextProps){
        if(this.props.settings !== nextProps.settings){
            Weave.getCallbacks(this.settings).removeCallback(this, this.updateState);
            this.settings = nextProps.settings;
            Weave.getCallbacks(this.settings).addImmediateCallback(this, this.updateState);
        }
        if(this.props.title !== nextProps.title){
            this.settings.title.value = this.props.title
        }
    }

    render() {
    //we could have used this.state.layout, but style of div will get the same reference, which is deprecated in react
    var layoutStyle = this.settings.getLayoutState();// this will make sure we get new object everytime

    var bodyStyle = {
        height:this.settings.height.value,
        width:"100%",
        overflowY: 'scroll',
        overflowX: 'hidden'
    }

    layoutStyle["position"] = 'fixed';
    (this.sessionOpen.value)?(layoutStyle["display"] = 'block'):(layoutStyle["display"] = 'none')

    return (<div style={layoutStyle}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={this.closeModal}>&times;</button>
                        <h4 className="modal-title">{this.settings.title.value}</h4>
                    </div>
                    <div className="modal-body" style={bodyStyle}>
                        {this.props.children}
                    </div>
                </div>
            </div>
    );
  }
}

export default ModalPanel;
