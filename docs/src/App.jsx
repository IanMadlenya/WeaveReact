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
        this.sideBarContainerConfig.rightSideBar.visible.state = false;
        this.sideBarContainerConfig.topSideBar.visible.state = false;
        this.sideBarContainerConfig.bottomSideBar.visible.state = false;
        var sideBar = this.sideBarContainerConfig.leftSideBar;
	    sideBar.style.state = {"background" : "linear-gradient(to right, #036FBB , #013458)"};
        this.sideBarContainerConfig.reverseLayout.state = true;
        
        var  accordionConfig = sideBar.children.requestObject('accordion',AccordionConfig);

        this.treeConfig = accordionConfig.children.requestObject('tree',TreeConfig);

        this.treeConfig.nodePadding.value ="16";
        this.treeConfig.align.value = "right";
        this.treeConfig.treeIconState.state = {
            "nodeDefault" : "fa fa-caret-right",
            "nodeOpen" : "fa fa-caret-down",
            "leafDefault" : "",
            "leafOpen" : "",
            "select":"fa fa-dot-circle-o",
            "unSelect":"fa fa-circle-o"
        };

        this.treeConfig.leafStyle.state = {
            paddingTop: "8px",
            paddingBottom:"8px"
        };
        this.treeConfig.rootStyle.state = {
	        fontSize: "14px",
	        textTransform: "uppercase",
	        color:"#f8cb27",
	        fontWeight: "bold",
	        backgroundColor : "#1460a1",
	        border: "2px solid #1f7ab8"
        };
        this.treeConfig.nodeStyle.state = {
	        fontSize: "12px",
	        padding: "5px 2px 5px 2px",
	        color:"white"
        };

	    this.treeConfig.nodeListStyle.state = {
		    width:"200px",
		    background: "linear-gradient(to right, rgb(3, 111, 187), rgb(1, 52, 88))"
	    };

	    this.treeConfig.leafStyle.state = {
		    fontSize: "12px",
		    borderTop:"1px solid #1e5e9f ",
		    padding: "5px 2px 5px 2px",
		    color:"white"
	    };

        this.treeConfig.rootNode.open.state = true;
	    this.treeConfig.selectionType.value = "radio";
	    this.treeConfig.enableAccordionMode.value = true;
	    this.treeConfig.enableMenuModeFromLevel.value = 1;

        this.tree={
            "label": "Menu-Accordion-radio",
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
                        "children": [
                            {
                                "label": "Link1",
                                "children": []
                            },
                            {
                                "label": "Link2",
                                "children": []
                            },
                            {
                                "label": "Link3",
                                "children": []
                            }
                        ]
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
        this.treeConfig.nodePadding.value ="16";
        this.treeConfig.align.value = "right";
        this.treeConfig.treeIconState.state = {
            "nodeDefault" : "fa fa-caret-right",
            "nodeOpen" : "fa fa-caret-down",
            "leafDefault" : "",
            "leafOpen" : "",
            "select":"fa fa-check-square-o",
            "unSelect":"fa fa-square-o"
        }

        this.treeConfig.leafStyle.state = {
            paddingTop: "8px",
            paddingBottom:"8px",
	        color:"white"
        }

        this.treeConfig.rootStyle.state = {
            textTransform: "uppercase",
            color:"#5d5d5d",
        }

        this.treeConfig.nodeStyle.state = {
            paddingTop: "8px",
            paddingBottom:"8px",
	        color:"white"

        }

        this.treeConfig.rootNode.open.state = true;
	    this.treeConfig.enableDataTypeIcon.value = false;
	    this.treeConfig.selectionType.value = "check";


	    this.tree={
            "label": "Check",
            "children": [
              {
                "label": "Navbar1",
                "children": [
                    {
                        "label": "Brand1",
                        "children": []
                    }
              ]
            },
            {
              "label": "Tab1",
              "children": [],
            }
          ]
        };

        this.treeConfig.props.addNewProps("data",this.tree);
        this.treeConfig.props.addNewProps("settings",this.treeConfig);
        this.treeConfig.props.addNewProps("label","label");
        this.treeConfig.props.addNewProps("icon","icon");
        this.treeConfig.props.addNewProps("nodes","children");


        this.treeConfig = accordionConfig.children.requestObject('tree3',TreeConfig);
        this.treeConfig.nodePadding.value ="16";
        this.treeConfig.align.value = "right";
        this.treeConfig.treeIconState.state = {
            "nodeDefault" : "fa fa-caret-right",
            "nodeOpen" : "fa fa-caret-down",
            "leafDefault" : "",
            "leafOpen" : "",
            "select":"fa fa-check-square-o",
            "unSelect":"fa fa-square-o"
        }

        this.treeConfig.leafStyle.state = {
            paddingTop: "8px",
            paddingBottom:"8px",
	        color:"white"

        }
        this.treeConfig.rootStyle.state = {
            textTransform: "uppercase",
            color:"#5d5d5d"
        }
        this.treeConfig.nodeStyle.state = {
            paddingTop: "8px",
            paddingBottom:"8px",
	        color:"white"

        }

        this.treeConfig.rootNode.open.state = true;

        this.tree={
            "label": "Default",
            "children": [
                {
                    "label": "accord2",
                    "children": []
                },
                {
                    "label": "Tab2",
                    "children": [],
                },
                {
                    "label": "test2.0",
                    "children": [
	                    {
	                        "label": "level 2.0",
	                        "children": [],
                        },
	                    {
		                    "label": "level 2.1",
		                    "children": [],
	                    },
	                    {
		                    "label": "level 2.2",
		                    "children": [],
	                    }
                    ],
                },
                {
                    "label": "test2.1",
                    "children": [],
                }
          ]
        };

        this.treeConfig.props.addNewProps("data",this.tree);
        this.treeConfig.props.addNewProps("settings",this.treeConfig);
        this.treeConfig.props.addNewProps("label","label");
        this.treeConfig.props.addNewProps("icon","icon");
        this.treeConfig.props.addNewProps("nodes","children");


        sideBar.visible.state = true;
        sideBar.open.state = false;
        sideBar.static.state = true;

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
                        <Navbar.Form  visible="true">
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


