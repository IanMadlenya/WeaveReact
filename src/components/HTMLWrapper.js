import React from 'react';
import Styles from "../utils/Style";
import App from "../utils/App";
import HTMLWrapperConfig from "../configs/HTMLWrapperConfig";

class HTMLWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new HTMLWrapperConfig();
    }

    componentDidMount(){
        Weave.getCallbacks(this.settings).addGroupedCallback(this,this.forceUpdate);
    }

    componentWillUnmount () {
         Weave.getCallbacks(this.settings).removeCallback(this,this.forceUpdate);
    }


    render() {

        return (<div style={this.props.style} onClick={this.props.onClick}>
                    {this.props.children}
                </div>
        );
  }
}

App.registerToolConfig(HTMLWrapper,HTMLWrapperConfig);
App.registerToolImplementation("weavereact.HTMLWrapperConfig",HTMLWrapper);

Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper,[weavejs.api.core.ILinkableObject]);

export default HTMLWrapper;
