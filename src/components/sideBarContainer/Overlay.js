import React from 'react';
import ComponentManager from "../../ComponentManager";

class Overlay extends React.Component {
    constructor(props) {
        super(props)
        ComponentManager.initialize(this);
    }

    componentWillUnmount() {
         ComponentManager.componentWillUnmount(this);
    }

    render() {
        var styleObject =  this.settings.style.getStyleFor();
        return  <div  style={styleObject} />;
    }
}

module.exports = Overlay;
