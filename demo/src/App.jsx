import React from "react";
import SessionEditor from "./sessionStateEditor/SessionEditor";
import SessionEditorConfig from "./sessionStateEditor/SessionEditorConfig";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.openSettings = this.openSettings.bind(this);
        this.sessionConfig = new SessionEditorConfig();
        //if(this.props.root){

        //}
        /*else if(this.props.tree){
            this.tree = this.props.tree;
        }*/

    }

    openSettings(e){
        if(e.code === "Enter"){
            this.sessionConfig.modalConfig.open.value = true;
        }else if(e.code === "KeyQ"){
            this.sessionConfig.modalConfig.open.value = false;
        }
    }



    componentDidMount(){
        //this.props.root.childListCallbacks.addImmediateCallback(this,this.forceUpdate);
         window.addEventListener('keydown', this.openSettings);
    }

    componentWillUnMount(){
        //this.props.root.childListCallbacks.removeCallback(this,this.forceUpdate);
        window.removeEventListener('keydown', this.openSettings);
    }



    render() {

        return (<div>
                    <SessionEditor root={this.props.root}  settings={this.sessionConfig}/>
                    {this.props.children}
                </div>
        );

    }
}

export default App;
