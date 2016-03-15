import React from 'react';

class Overlay extends React.Component {
    constructor(props) {
        super(props)
        this.settings = this.props.settings;
        App.addForceUpdateToCallbacks(this);

    }

    componentWillUnmount() {
         App.removeForceUpdateFromCallbacks(this);
    }

    render() {
        var styleObject =  this.settings.style.getStyleFor();
        return ( <div  style = {styleObject} />
        );
    }
}

module.exports = Overlay;
