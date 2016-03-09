# Accordion

## Classes
    1. Accordion: JSX Element
    2. AccordionConfig : JS (Session Data)
    
## Session State
    1. style: InlineStyle 
    2. CSS: CSS
    3. children: LinkableHashMap 
    4. childStyle: InlineStyle
    5. activeChildStyle: InlineStyle
    6. useCSS: LinkableBoolean 
    
## props passed to Children
    1. open: boolean
    
    
## How to Create Accordion through UI ?

    this.accordionConfig = window.dbweave.root.requestObject('accordion',AccordionConfig);
   
    render(){
        return <Accordion settings={this.accordionConfig}>
                    <div> child 1 </div>
                    <div> child 2 </div>
                    <div> child 3 </div>
               </Accordion>;
    }
    
    
## How to Create Accordion through Data?
    
    this.accordionConfig = window.dbweave.root.requestObject('accordion',AccordionConfig);
    this.accordionConfig.children.requestObject("configName1",CONFIGCLASS);
    this.accordionConfig.children.requestObject("configName2",CONFIGCLASS);
    this.accordionConfig.children.requestObject("configName3",CONFIGCLASS);
    
    render(){
        return  <Navbar settings={this.navConfig}/>
    }