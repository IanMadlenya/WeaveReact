import ComponentManager from "../ComponentManager";
import AbstractComponent from "../AbstractComponent";
import HTMLWrapperConfig from "../configs/HTMLWrapperConfig";

class HTMLWrapper extends React.Component {

    constructor(props) {
        super(props);
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
