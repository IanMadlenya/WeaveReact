import React from "react";
import SessionEditor from "./sessionStateEditor/SessionEditor";
import SessionEditorConfig from "./sessionStateEditor/SessionEditorConfig";
import {Navbar} from "../../lib/index.js";
import {navbarConfig} from "../../lib/index.js";
import {Tree} from "../../lib/index.js";
import {TreeConfig} from "../../lib/index.js";

import {SimpleTree} from "../../lib/index.js";
import {SimpleTreeConfig} from "../../lib/index.js";

class App extends React.Component {

    constructor(props) {
        super(props);
        window.weave = new Weave();
        window.dbweave = new Weave();
        this.openSettings = this.openSettings.bind(this);
        this.sessionConfigDashdoard = new SessionEditorConfig();
        this.sessionConfigWeave = new SessionEditorConfig();
        this.navConfig = window.dbweave.root.requestObject('navbar',navbarConfig.Navbar);
        //this.navConfig.brand.logoPath.value = "./logo.png";
        //this.navConfig.brand.title.value = "Brand";

        var brandConfig = this.navConfig.children.requestObject('',navbarConfig.Brand);
        var logoConfig = brandConfig.children.requestObject('',navbarConfig.Logo);
        logoConfig.src.state = "logo.png";
        var titleConfig = brandConfig.children.requestObject('',navbarConfig.Title);
        titleConfig.title.state = "Brand";
        /*var listConfig = this.navConfig.children.requestObject('',navbarConfig.List);
        var linkConfig = listConfig.children.requestObject('',navbarConfig.Link);
        linkConfig.title.value = " Documentation";
        linkConfig.iconName.value = "fa fa-folder";*/

        this.treeConfig = window.dbweave.root.requestObject('tree',TreeConfig);
        this.simpleTreeConfig = window.dbweave.root.requestObject('simpleTree',SimpleTreeConfig);
        this.treeConfig.nodePadding.value ="16px";
        this.treeConfig.align.value = "right";
        this.treeConfig.nodeIcon.value = "fa fa-caret-right";
        this.treeConfig.nodeOpenIcon.value = "fa fa-caret-down";
        this.treeConfig.leafIcon.value = "fa fa-square-o";
        this.treeConfig.leafOpenIcon.value = "fa fa-check-square-o";
        this.treeConfig.enableDataTypeIcon.value = false;
        this.treeConfig.allowMultipleSelection.value = true;
        this.treeConfig.leafStyle.other.state = {
            borderTop:"1px solid #1e5e9f",
            paddingTop: "8px",
            paddingBottom:"8px"
        }




        this.treeConfig.rootStyle.other.state = {
            textTransform: "uppercase",
            color:"#e57a38"
        }

        this.treeConfig.nodeStyle.other.state = {
            paddingTop: "8px",
            paddingBottom:"8px"
        }
        this.treeConfig.setDefaultNodeSelection(['Al Joaf','Tabuk 1'])
        this.treeConfig.rootNode.open.state = true;

        this.tree={
          "label": "Locations",
          "children": [
            {
              "label": "Saudi Kingdom",
              "children": []
            },
            {
              "label": "Al Joaf",
              "children": [],
                "icon":"fa fa-heartbeat"
            },
            {
              "label": "Tabuk",
              "children": [
                {
                  "label": "Tabuk 1"
                },
                {
                  "label": "Tabuk 2"
                },
                {
                  "label": "Tabuk 3"
                }
              ]
            }

          ]
        };
        //this.loadJSON = this.loadJSON.bind(this);
        /*this.loadJSON(function(response){
            this.tree = JSON.parse(response);
            console.log(this.tree);
            this.forceUpdate();
        }.bind(this))*/



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

   openSettings(e) {
        if (e.code === "Enter" && e.ctrlKey) {
            if(this.sessionConfigWeave.modalConfig.open.value)  this.sessionConfigWeave.modalConfig.open.value= false;
            this.sessionConfigDashdoard.modalConfig.open.value = true;
            this.popUpSessionEditor( this.sessionConfigDashdoard, window.dbweave, "Session State Editor (Weave Dashboard)",true)
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


    treeClick(node, open , active){
          console.log(node, open, active);
    }

    componentDidUpdate(){

    }

    render() {

        return (<div>
                    <div id="popUp"/>
                    <Navbar settings={this.navConfig}>
                        <Navbar.List key="list">
                            <Navbar.Link key="link1"/>
                            <Navbar.Link key="link2"/>
                        </Navbar.List>
                        <Navbar.Form key="form">
                            <div key="form1">Form1</div>
                            <div key="di">Form2</div>
                        </Navbar.Form >
                        <div style={{color:"red"}}>Hi I am Sanjay</div>

                    </Navbar>

                <div style={{marginTop:"60px"}}>
                        <div style={{width:"240px",color:"white", border:"1px solid grey",background:"linear-gradient(to right, #036FBB , #013458)"}}>
                            <Tree data={this.tree} settings={this.treeConfig} label="label" nodes="children" icon="icon"/>
                            <SimpleTree data={this.tree} settings={this.simpleTreeConfig} label="label" children="children" click={this.treeClick}/>

                        </div>
                    </div>

                </div>
        );

    }
}

export default App;


/**/
