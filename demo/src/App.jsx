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
        this.sessionConfigDashdoard = new SessionEditorConfig();
        this.sessionConfigWeave = new SessionEditorConfig();
        window.weave = new Weave();
        window.dbweave = new Weave();

        this.navConfig = window.dbweave.root.requestObject('navbar',NavbarConfig);
        var linkConfig = this.navConfig.navList.links.requestObject('link1',NavLinkConfig);
        linkConfig.title.value = " Set Up";
        linkConfig.iconName.value = "fa fa-home";
        linkConfig= this.navConfig.navList.links.requestObject('link2',NavLinkConfig);
        linkConfig.title.value = " Documentation";
        linkConfig.iconName.value = "fa fa-folder";
    }

   openSettings(e) {
        if (e.code === "KeyD") {
            if(this.sessionConfigWeave.modalConfig.open.value)  this.sessionConfigWeave.modalConfig.open.value= false;
            this.sessionConfigDashdoard.modalConfig.open.value = true;
            this.popUpSessionEditor( this.sessionConfigDashdoard, window.dbweave, "Session State Editor (Weave Dashboard)",true)
        }else if (e.code === "KeyW") {
            if(this.sessionConfigDashdoard.modalConfig.open.value)  this.sessionConfigDashdoard.modalConfig.open.value= false;
            this.sessionConfigWeave.modalConfig.open.value = true;
            this.popUpSessionEditor( this.sessionConfigWeave, window.weave, "Session State Editor (Weave)",false)
        } else if (e.code === "KeyQ") {
            this.sessionConfigWeave.modalConfig.open.value = false;
            this.sessionConfigDashdoard.modalConfig.open.value = false;
        }
    }

    componentDidMount(){
        window.addEventListener('keydown', this.openSettings);
    }

    componentWillUnMount(){
        window.removeEventListener('keydown', this.openSettings);
    }

    popUpSessionEditor(config,weaveInstance,title,isDb) {
        ReactDOM.render( <SessionEditor isDashboard={isDb} weave={weaveInstance} keyPress = "true" title={title} settings = {config}/>,document.getElementById("popUp")
                       );
    }


    render() {


        return (<div>
                    <div id="popUp"/>
                    <Navbar settings={this.navConfig}/>

                    {this.props.children}
                </div>
        );

    }
}

export default App;
