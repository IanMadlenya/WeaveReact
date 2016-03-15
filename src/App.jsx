import React from "react";
import {SessionEditor} from "../../lib/index.js";
import {SessionEditorConfig} from "../../lib/index.js";
import {Navbar} from "../../lib/index.js";
import {navbarConfig} from "../../lib/index.js";
import {Tree} from "../../lib/index.js";
import {TreeConfig} from "../../lib/index.js";
import {Accordion} from "../../lib/index.js";
import {AccordionConfig} from "../../lib/index.js";

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
        var brandConfig = this.navConfig.children.requestObject('',navbarConfig.Brand);
        var logoConfig = brandConfig.children.requestObject('',navbarConfig.Logo);
        logoConfig.src.state = "./images/logo.png";
        var titleConfig = brandConfig.children.requestObject('',navbarConfig.Title);
        titleConfig.title.state = "Brand";


        this.simpleTreeConfig = window.dbweave.root.requestObject('simpleTree',SimpleTreeConfig);

        this.treeConfig = window.dbweave.root.requestObject('tree',TreeConfig);

        this.treeConfig.nodePadding.value ="16px";
        this.treeConfig.align.value = "right";
        this.treeConfig.nodeIcon.value = "fa fa-caret-right";
        this.treeConfig.nodeOpenIcon.value = "fa fa-caret-down";
        this.treeConfig.leafIcon.value = "fa fa-square-o";
        this.treeConfig.leafOpenIcon.value = "fa fa-check-square-o";
        this.treeConfig.enableDataTypeIcon.value = false;
        this.treeConfig.allowMultipleSelection.value = true;
        this.treeConfig.leafStyle.other.state = {
            paddingTop: "8px",
            paddingBottom:"8px"
        }


        this.treeConfig.rootStyle.other.state = {
            textTransform: "uppercase",
            color:"#5d5d5d"
        }

        this.treeConfig.nodeStyle.other.state = {
            paddingTop: "8px",
            paddingBottom:"8px"
        }

        this.treeConfig.rootNode.open.state = true;

        this.tree={
            "label": "Components",
            "icon":"./images/Components.png",
            "children": [
              {
                "label": "Navbar",
                "children": [
                    {
                        "label": "Brand",
                        "children": []
                    },
                    {
                        "label": "Title",
                        "children": []
                    },
                    {
                        "label": "List",
                        "children": []
                    },
                    {
                        "label": "Link",
                        "children": []
                    },
                    {
                        "label": "Form",
                        "children": []
                    }
              ]
            },
            {
              "label": "Accordion",
              "children": [],
            }
          ]
        };

        this.accordionConfig = window.dbweave.root.requestObject('accordion',AccordionConfig);
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

        var styleObject = {
            display:"flex",
            flexDirection:"Column",
            width:"100%",
            height:"100%"
        }


        return (<div style={styleObject}>
                    <div id="popUp"/>
                    <Navbar settings={this.navConfig}>
                        <Navbar.List>
                            <Navbar.Link>Home</Navbar.Link>
                            <Navbar.Link>Components</Navbar.Link>
                        </Navbar.List>
                        <Navbar.Form  enable="true">
                            <div style={{color:"red"}}>Hi I am Sanjay</div>
                        </Navbar.Form>
                    </Navbar>

                    <div style={{display:"flex",flexDirection:"row"}}>
                        <div style={{flexBasis:"15%", border:"1px solid #d0cdcd", padding:"4px" ,background:"linear-gradient(to right, #f8f8f8 , #f8f8f8)"}}>
                            <Tree data={this.tree} settings={this.treeConfig} label="label" nodes="children" icon="icon"/>
                            <SimpleTree data={this.tree} settings={this.simpleTreeConfig} label="label" children="children" click={this.treeClick}/>

                        </div>
                        <div style={{padding:"16px"}}>
                            <Accordion settings={this.accordionConfig}>
                                <div>
                                    Child 1
                                    <div>Hi 1 </div>
                                </div>
                                <div>Child 2</div>
                                <div>
                                    Child 3
                                    <div>Hi 3 </div>
                                    <div>Hi 32 </div>
                                </div>
                                <div>Child 4</div>
                            </Accordion>
                        </div>
                    </div>

                </div>
        );

    }
}

export default App;


/**/
