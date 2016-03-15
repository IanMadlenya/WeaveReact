
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
        this.addCallbacks = this.addCallbacks.bind(this);
        this.removeCallbacks = this.removeCallbacks.bind(this);
    }

    componentDidMount(){
       this.addCallbacks();
    }

    addCallbacks(){
        this.settings.align.addGroupedCallback(this, this.forceUpdate);
        this.settings.nodePadding.addGroupedCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.rootStyle).addGroupedCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.branchStyle).addGroupedCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.nodeStyle).addGroupedCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.leafStyle).addGroupedCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.selectedLeafStyle).addGroupedCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.activeLeafStyle).addGroupedCallback(this, this.forceUpdate);
    }

    removeCallbacks(){
        this.settings.align.removeCallback(this, this.forceUpdate);
        this.settings.nodePadding.removeCallback(this, this.forceUpdate);
         Weave.getCallbacks(this.settings.rootStyle).removeCallback(this, this.forceUpdate);
         Weave.getCallbacks(this.settings.branchStyle).removeCallback(this, this.forceUpdate);
         Weave.getCallbacks(this.settings.nodeStyle).removeCallback(this, this.forceUpdate);
         Weave.getCallbacks(this.settings.leafStyle).removeCallback(this, this.forceUpdate);
         Weave.getCallbacks(this.settings.selectedLeafStyle).removeCallback(this, this.forceUpdate);
         Weave.getCallbacks(this.settings.activeLeafStyle).removeCallback(this, this.forceUpdate);
    }



    componentWillUnmount () {
        this.removeCallbacks()
    }

    componentWillReceiveProps(nextProps){
        if(this.props.settings !== nextProps.settings){
            this.addCallbacks();
            this.settings = nextProps.settings;
            this.removeCallbacks();

            this.settings.dataTypesMap = nextProps.dataTypesMap;
            this.settings.getDataType = nextProps.getDataType;
        }
        if(this.props.data !== nextProps.data){
            if(App.debug)console.log("Data Changed")
        }

    }

    // allowe render only when React Parent render is called with new iconMode value
    shouldComponentUpdate(nextProps){
        if(this.props.iconMode !== nextProps.iconMode)
            return true
        else
            return false;
    }


    render() {
        if(this.props.iconMode){
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
        return ( <Node style={rootNodeStyle} data={this.props.data} label={this.props.label} nodes={this.props.nodes} icon={this.props.icon}
                    settings={this.settings.rootNode}
                    treeConfig={this.settings}
                    clickCallback={this.props.clickCallback} />
               );
    }

}

App.registerToolImplementation("weavereact.TreeConfig",Tree);
export default Tree;
