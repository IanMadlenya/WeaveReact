
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
        this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
        this.settings.nodePadding.addImmediateCallback(this, this.forceUpdate);
        this.settings.nodeColor.addImmediateCallback(this, this.forceUpdate);
        this.settings.leafColor.addImmediateCallback(this, this.forceUpdate);
        this.settings.leafBorder.addImmediateCallback(this, this.forceUpdate);
    }

    componentWillUnmount () {
        this.settings.rightAlign.removeCallback(this, this.forceUpdate);
        this.settings.nodePadding.removeCallback(this, this.forceUpdate);
        this.settings.nodeColor.removeCallback(this, this.forceUpdate);
        this.settings.leafColor.removeCallback(this, this.forceUpdate);
        this.settings.leafBorder.removeCallback(this, this.forceUpdate);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.settings !== nextProps.settings){
            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
            this.settings.nodePadding.removeCallback(this, this.forceUpdate);
            this.settings.nodeColor.removeCallback(this, this.forceUpdate);
            this.settings.leafColor.removeCallback(this, this.forceUpdate);
            this.settings.leafBorder.removeCallback(this, this.forceUpdate);
            this.settings = nextProps.settings;
            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
            this.settings.nodePadding.addImmediateCallback(this, this.forceUpdate);
            this.settings.nodeColor.addImmediateCallback(this, this.forceUpdate);
            this.settings.leafColor.addImmediateCallback(this, this.forceUpdate);
            this.settings.leafBorder.addImmediateCallback(this, this.forceUpdate);

            this.settings.dataTypesMap = this.props.dataTypesMap;
            this.settings.getDataType = this.props.getDataType;
        }
        if(this.props.data !== nextProps.data){
            console.log("Data Changed")
        }

    }





    render() {
return ( <Node data={this.props.data} label={this.props.label} nodes={this.props.nodes} settings={this.settings.rootNode} treeConfig={this.settings} clickCallback={this.props.clickCallback}/> );
    }

}

App.registerToolImplementation("weavereact.TreeConfig",Tree);
export default Tree;
