import React from "react";
import SessionEditor from "./sessionStateEditor/SessionEditor";
import SessionEditorConfig from "./sessionStateEditor/SessionEditorConfig";
import {Navbar} from "../../lib/index.js";
import {NavbarConfig} from "../../lib/index.js";
import {NavLinkConfig} from "../../lib/index.js";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.openSettings = this.openSettings.bind(this);
        this.sessionConfig = new SessionEditorConfig();

        window.dbweave = new Weave();
        this.navConfig = window.dbweave.root.requestObject('navbar',NavbarConfig);
        this.navConfig.navList.links.requestObject('link1',NavLinkConfig).title.value = "Set Up";
        this.navConfig.navList.links.requestObject('link2',NavLinkConfig).title.value = "Documentation";


    }

    openSettings(e){
        if(e.code === "Enter"){
            this.sessionConfig.modalConfig.open.value = true;
        }else if(e.code === "KeyQ"){
            this.sessionConfig.modalConfig.open.value = false;
        }
    }


    componentDidMount(){
         window.addEventListener('keydown', this.openSettings);
    }

    componentWillUnMount(){
        window.removeEventListener('keydown', this.openSettings);
    }


    render() {


        return (<div>
                    <Navbar settings={this.navConfig}/>
                    <SessionEditor root={window.dbweave.root}  settings={this.sessionConfig}/>
                    {this.props.children}
                </div>
        );

    }
}

export default App;
