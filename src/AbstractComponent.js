import React from 'react';
import ComponentManager from "../ComponentManager";


class AbstractComponent extends React.Component {

    constructor(props){
        super(props);
        ComponentManager.initialize(this);
    }

    componentWillUnmount(){
        ComponentManager.componentWillUnmount(this);
    }

    componentWillReceiveProps(nextProps){
        ComponentManager.componentWillReceiveProps(this,nextProps);
    }

    shouldComponentUpdate(nextProps){
        ComponentManager.shouldComponentUpdate(this,nextProps);
    }

    render() {
        return (<div/>);
    }

}

export default AbstractComponent;






