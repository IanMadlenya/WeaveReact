import React from 'react';
import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";
import Node from "./Node";

class Tree extends AbstractComponent {

    constructor(props) {
        super(props);
        this.settings.dataTypesMap = this.props.dataTypesMap;
        this.settings.getDataType = this.props.getDataType;
    }


    componentWillReceiveProps(nextProps){
        super.componentWillReceiveProps(nextProps);
        if(this.props.settings !== nextProps.settings){
            this.settings.dataTypesMap = nextProps.dataTypesMap;
            this.settings.getDataType = nextProps.getDataType;
        }

    }

    shouldComponentUpdate(nextProps){
        super.shouldComponentUpdate(nextProps);
        if(this.props.data !== nextProps.data)
            return true;
        return false;
    }


    render() {
        if(ComponentManager.debug)console.log("Tree - render");
        if(this.settings.iconMode.state){
            var iconName = this.settings.rootNode.iconName.state;
            var iconUI = <span/>
            if(iconName && iconName.length > 0){
                var iconStyleObj = this.settings.nodeIconStyle.getStyleFor();
                if(iconName.indexOf("/") == -1){ // fontAwesome Icon Name
                    iconUI = <i style = {iconStyleObj} className={iconName} ></i>
                }else {
                    iconUI = <img style = {iconStyleObj} src={iconName}/>
                }
            }
            return iconUI;
        }

        var rootNodeStyle = this.settings.rootStyle.getStyleFor(null,true);
        return ( <Node style={rootNodeStyle}
                    data={this.props.data}
                    label={this.props.label}
                    nodes={this.props.nodes}
                    icon={this.props.icon}
                    reverseLayout={this.settings.reverseLayout.state}
                    settings={this.settings.rootNode}
                    treeConfig={this.settings}
                    clickCallback={this.props.clickCallback} />
               );
    }

}

ComponentManager.registerToolImplementation("weavereact.TreeConfig",Tree);
export default Tree;
