import React from "react";
import SessionEditor from "./sessionStateEditor/SessionEditor";
import SessionEditorConfig from "./sessionStateEditor/SessionEditorConfig";
import TestSpan from "./TestSpan";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.openSettings = this.openSettings.bind(this);
        this.sessionConfig = new SessionEditorConfig();

    }

    openSettings(e){
        if(e.code === "Enter"){
            this.sessionConfig.modalConfig.open.value = true;
        }else if(e.code === "KeyQ"){
                 this.sessionConfig.modalConfig.open.value = false;
        }
    }



    componentDidMount(){
        this.props.root.childListCallbacks.addImmediateCallback(this,this.forceUpdate);
         window.addEventListener('keydown', this.openSettings);
    }

    componentWillUnMount(){
        this.props.root.childListCallbacks.removeCallback(this,this.forceUpdate);
    }



    render() {
        var sessionChildren = this.props.root.getNames();
        var toolUI = [];
        for(var i=0; i<sessionChildren.length; i++){
            var sessionName = sessionChildren[i];
            var sessionObj = this.props.root.getObject(sessionName);
            var configClassName = Weave.getPath(sessionObj).getType();
            var ToolClass = weavereact.getToolForConfigName(configClassName);
             var ui;
            if(ToolClass){
                ui = <ToolClass settings={sessionObj} index={i}  key={i}/>

            }else{
               ui =  <TestSpan settings={sessionObj} index={i}  key={i}/>
            }
            toolUI.push(ui);
        }

        return (<div>
        <SessionEditor sessionState={ this.props.root} settings={this.sessionConfig}/>
                    {this.props.children}
                    {toolUI}
                </div>
        );

    }
}

export default App;
