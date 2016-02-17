import React from "react";
import SessionEditor from "./sessionStateEditor/SessionEditor";
import SessionEditorConfig from "./sessionStateEditor/SessionEditorConfig";
import {Navbar} from "../../lib/index.js";
import {NavbarConfig} from "../../lib/index.js";
import {NavLinkConfig} from "../../lib/index.js";
import {Tree} from "../../lib/index.js";
import {TreeConfig} from "../../lib/index.js";

class App extends React.Component {

    constructor(props) {
        super(props);
        window.weave = new Weave();
        window.dbweave = new Weave();
        this.openSettings = this.openSettings.bind(this);
        this.sessionConfigDashdoard = new SessionEditorConfig();
        this.sessionConfigWeave = new SessionEditorConfig();
        this.navConfig = window.dbweave.root.requestObject('navbar',NavbarConfig);
        this.navConfig.brand.logoPath.value = "./brand.png";
        this.treeConfig = window.dbweave.root.requestObject('tree',TreeConfig);
        this.treeConfig.nodePadding.value ="10px";
        this.treeConfig.rightAlign.value = true;
        this.treeConfig.folderIcon.value = "fa fa-caret-right";
        this.treeConfig.folderOpenIcon.value = "fa fa-caret-down";
        this.treeConfig.fileIcon.value = "";
        this.treeConfig.fileOpenIcon.value = "";
        this.treeConfig.enableDataTypeIcon.value = false;
        this.treeConfig.leafColor.value = "#0470AF";

        this.tree=null;
        this.loadJSON = this.loadJSON.bind(this);
        this.loadJSON(function(response){
            this.tree = JSON.parse(response);
            console.log(this.tree);
            this.forceUpdate();
        }.bind(this))


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

    loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', './test.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }


    render() {


        return (<div>
                    <div id="popUp"/>
                    <Navbar settings={this.navConfig}/>
                    <div style={{marginTop:"60px"}}>
                        <div style={{width:"240px",color:"white", border:"1px solid grey",background:"linear-gradient(to right, #036FBB , #013458)"}}>
                            <Tree data={this.tree} settings={this.treeConfig} label="label" nodes="children"/>
                        </div>
                    </div>
                </div>
        );

    }
}

export default App;
