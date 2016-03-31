import React from 'react';
import ComponentManager from "./ComponentManager";


class AbstractComponent extends React.Component {

    constructor(props,type){
        super(props);
        ComponentManager.initialize(this,type);
    }

    componentWillUnmount(){
        ComponentManager.componentWillUnmount(this);
    }

    componentWillReceiveProps(nextProps){
        ComponentManager.componentWillReceiveProps(this,nextProps);
    }

    // allowe render only when React Parent render is called with new iconMode value
    shouldComponentUpdate(nextProps, nextState){
        return ComponentManager.shouldComponentUpdate(this, nextProps, nextState);
    }


}

export default AbstractComponent;






