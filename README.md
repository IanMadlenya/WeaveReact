# WeaveReact
Usefull UI Components built with React as UI layer and Weave as Data Layer.

## How to use weave Session Property in React ?
eg: consider style property "color" 
    this.color = new LinkabaleString("red");
    componentDidMount(){
        this.color.addImmediateCallback(this, this.forceUpdate)
    }
    
    componentWillMount(){
        this.color.removeCallback(this, this.forceUpdate)
    }
    
    render(){
        var colorStyle = this.color.state;
        return <div>
                    <span style={color}>Hi </span>
               </div>
    }
    
## How to make session property part of Data Tree like DOM tree?
**Replace** `this.color = new LinkabaleString();`  **with**  
`this.color = Weave.linkableChild(this,new LinkabaleString("red"));`  
    **Note:** Make Sure owner of color is Session Class too.
    
## How to make interaction Sessioned?
    
    this.color = new LinkabaleString("red");
    componentDidMount(){
        this.color.addImmediateCallback(this, this.forceUpdate)
    }
    
    componentWillMount(){
        this.color.removeCallback(this, this.forceUpdate)
    }
    changeColor(e){
        //as value changed from red to blue callbacks are triggered
        //one of the callback is forceUpdate - which calls render in ReactJS
        this.color.state = "blue"; 
    }
    
    render(){
        var colorStyle = color.state;
        return  <div>
                    <div click={this.changeColor}></div>
                    <span style={color}>Hi</span>
                </div>
    }
    
## How to implement interaction tied between Parent and Children?  (use case: modal -  close and open)
    //Parent Component
    this.color = new LinkabaleString("red");
    
    changeColor(e){
        this.color.state = "blue"; //as value changed from red to blue callbacks are triggered
    }
    
    render(){
        var colorStyle = this.color.state;
        return <div>
                    <div click={changeColor}></div>
                    <child color={color}/>
                </div>
    }
    
    //Child Component 
    componentDidMount(){
        this.props.color.addImmediateCallback(this, this.forceUpdate)
    }
    
    componentWillMount(){
        this.props.color.removeCallback(this, this.forceUpdate)
    }
    
    render(){
        var colorStyle = this.props.color.state;
        return <span style={color}>Hi</span>
    }
    
    ## How to implement interaction tied between childrens? (use case tree, accordion)
        1. create the session property in parent and add its callback in parent too
        2. pass the session property to children make changes to session property in chil interactions
    
