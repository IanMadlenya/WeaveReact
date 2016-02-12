
import React from 'react';
import App from "../../utils/App";
import Styles from "../../utils/Style";
import Node from "./Node";

class Tree extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new TreeConfig();
        this.settings.dataTypesMap = this.props.dataTypesMap;
        this.settings.getDataType = this.props.getDataType;
    }

    componentDidMount(){

    }

    componentWillUnmount () {

    }

    componentWillReceiveProps(nextProps){
        if(this.props.settings !== nextProps.settings){
            this.settings = nextProps.settings
            this.settings.dataTypesMap = this.props.dataTypesMap;
            this.settings.getDataType = this.props.getDataType;
        }

    }





    render() {
        console.log("Tree render")

return ( <Node data={this.props.data} label={this.props.label} nodes={this.props.nodes} treeConfig={this.settings} clickCallback={this.props.clickCallback}/> );
    }

}

App.registerToolImplementation("weavereact.TreeConfig",Tree);
export default Tree;
