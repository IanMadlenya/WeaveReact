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
    
## Supported Navbar Components
    1. Brand
    2. Logo
    3. List
    4. Link
    5. Form