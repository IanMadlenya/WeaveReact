import React from "react";
import {SessionEditor} from "../../lib/index.js";
import {SessionEditorConfig} from "../../lib/index.js";
import {Navbar} from "../../lib/index.js";
import {navbarConfig} from "../../lib/index.js";
import {Tree} from "../../lib/index.js";
import {TreeConfig} from "../../lib/index.js";
import {Accordion} from "../../lib/index.js";
import {AccordionConfig} from "../../lib/index.js";

import {SideBarContainer} from "../../lib/index.js";
import {sideBarContainerConfig} from "../../lib/index.js";

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

        this.sideBarContainerConfig  = window.dbweave.root.requestObject('sideBarContainer',sideBarContainerConfig.Container);

        var sideBar = this.sideBarContainerConfig.leftSideBar;
        sideBar.enable.state = true;
        sideBar.open.state = false;
        sideBar.static.state = true;

        //this.accordionConfig = window.dbweave.root.requestObject('accordion',AccordionConfig);
        var  accordionConfig = sideBar.children.requestObject('accordion',AccordionConfig);

        this.treeConfig = accordionConfig.children.requestObject('tree',TreeConfig);
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

        this.treeConfig.props.addNewProps("data",this.tree);
        this.treeConfig.props.addNewProps("settings",this.treeConfig);
        this.treeConfig.props.addNewProps("label","label");
        this.treeConfig.props.addNewProps("icon","icon");
        this.treeConfig.props.addNewProps("nodes","children");



        this.treeConfig = accordionConfig.children.requestObject('tree2',TreeConfig);
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
            "label": "Components 2",
            "icon":"./images/Components.png",
            "children": [
              {
                "label": "Navbar",
                "children": [
                    {
                        "label": "Brand",
                        "children": []
                    }
              ]
            },
            {
              "label": "Tab",
              "children": [],
            }
          ]
        };

        this.treeConfig.props.addNewProps("data",this.tree);
        this.treeConfig.props.addNewProps("settings",this.treeConfig);
        this.treeConfig.props.addNewProps("label","label");
        this.treeConfig.props.addNewProps("icon","icon");
        this.treeConfig.props.addNewProps("nodes","children");


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
                    <SideBarContainer settings={this.sideBarContainerConfig}>
                        <div style={{padding:"16px"}}>

                        </div>
                    </SideBarContainer>
                </div>
        );

    }
}

export default App;





/*<Accordion settings={this.accordionConfig}>
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
                            </Accordion>*/
