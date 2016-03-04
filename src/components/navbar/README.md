# Navbar


## How to Create Navbar through UI ?

    this.navConfig = window.dbweave.root.requestObject('navbar',navbarConfig.Navbar);
   
    render(){
        var colorStyle = this.color.state;
        return <Navbar settings={this.navConfig>
                    <Navbar.Brand>
                        <Navbar.logo src="logo.png"/>
                    </Navbar.Brand>
                        
                    <Navbar.List key="list">
                        <Navbar.Link key="link1"/>
                        <Navbar.Link key="link2"/>
                    </Navbar.List>

                </Navbar>;
    }
    
    
## How to Create Navbar through Data?
    
    this.navConfig = window.dbweave.root.requestObject('navbar',navbarConfig.Navbar);
    var brandConfig = this.navConfig.children.requestObject("brand",Navbar.Brand);
    var logoConfig = brandConfig.children.requestObject("logo",Navbar.Logo);
    logoConfig.src.state = "logo.png";
    var listConfig = this.navConfig.children.requestObject("list",Navbar.List);
    listConfig.children.requestObject("link1",Navbar.Link);
    listConfig.children.requestObject("link2",Navbar.Link);
    
    render(){
        return  <Navbar settings={this.navConfig}/>
    }
    
## Classes (JSX and Config JS)
    1. Navbar
    2. Navbar.Brand 
      1. Navbar.Logo
      2. Navbar.title
    3. Navbar.List
      1. Navbar.Link
    4. Navbar.Form

## Navbar

#### Session State 
    1. style: InlineStyle
    2. CSS: CSS 
    3. children: LinkableHashMap 
    4. addGapAt: LinkableNumber
    5. dock: LinkableString
    
## Navbar.Brand

#### Session State 
    1. style: InlineStyle
    2. CSS: CSS  
    3. enable: LinkableBoolean
    
## Navbar.Logo

#### Session State 
    1. style: InlineStyle
    2. CSS: CSS  
    4. src: LinkableString
    5. enable: LinkableBoolean
    
## Navbar.Title

#### Session State 
    1. style: InlineStyle
    2. CSS: CSS  
    4. title: LinkableString
    5. enable: LinkableBoolean

## Navbar.List

#### Session State
    1. style: InlineStyle
    2. CSS: CSS  
    3. children: LinkableHashMap 
    4. enable: LinkableBoolean
    5. align: LinkableString 
    6. activePage: LinkableString 
    7. space: LinkableNumber 
    
## Navbar.Link

#### Session State
    1. style: InlineStyle
    2. CSS: CSS  
    3. title: LinkableString 
    4. activeLinkStyle: InlineStyle
    5. iconName: LinkableString 
    
## Navbar.Form

#### Session State
    1. style: InlineStyle
    2. CSS: CSS  
    3. children: LinkableHashMap 
    4. enable: LinkableBoolean
    5. align: LinkableString 
    6. addGapAt: LinkableNumber 
    7. space: LinkableNumber 