import React from 'react';
import Styles from "../utils/Style";
import ComponentManager from "../ComponentManager";
import HTMLWrapperConfig from "../configs/HTMLWrapperConfig";

class HTMLWrapper extends React.Component {

    constructor(props) {
        super(props);
        ComponentManager.initialize(this);
    }

    componentWillUnmount () {
         ComponentManager.componentWillUnmount(this);
    }


    render() {

        return (<div style={this.props.style} onClick={this.props.onClick}>
                    {this.props.children}
                </div>
        );
  }
}

ComponentManager.registerToolConfig(HTMLWrapper,HTMLWrapperConfig);
ComponentManager.registerToolImplementation("weavereact.HTMLWrapperConfig",HTMLWrapper);

Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper,[weavejs.api.core.ILinkableObject]);

export default HTMLWrapper;
