
## React Component Life Cycle order

### Creation
    1. constructor
    2. componentWillMount
    2. render
    3. componentDidMount
    
### Process
##### Props Change from Parent (props is Read-Only)
    1. componentWillReceiveProps
    2. shouldComponentUpdate (default true)
    3. componentWillUpdate
    3. render
    4. componentDidUpdate
    
##### State Change
    1. shouldComponentUpdate
    2. componentWillUpdate
    2. render
    3. componentDidUpdate

### Dispose
    1.componentWillUnmount
    
## React (Parent - Child) Life Cycle order 
#### Creation
    1. parent constructor
    2. parent componentWillMount
    3. parent render
      1. child constructor
      2. child render
      3. child componentWillMount
      3. child componentDidMount
    4. parent componentDidMount
    
#### Process

##### State Change in parent 
    1. parent render (parent renders children with new custom attributes  like html Tag attributes)
      1. child componentWillReceiveProps (child recieves the custom attributes as props property)
      2. child shouldComponentUpdate (default true)
      3. child componentWillUpdate
      3. child render
      4. child componentDidUpdate
    2. parent componentDidUpdate

#### Dispose
    1.componentWillUnmount  
    
