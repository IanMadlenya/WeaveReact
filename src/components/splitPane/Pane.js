import React from 'react';
import Style from "../../utils/Style";
import PaneConfig from "./PaneConfig";

//code logic taken from https://github.com/tomkp/react-split-pane

class Pane extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new PaneConfig();
        this.setSessionState = this.setSessionState.bind(this);
        //this.state ={};
    }

    componentDidMount(){
        this.settings.size.addImmediateCallback(this,this.forceUpdate);

    }

    componentWillUnmount () {
        this.settings.size.removeCallback(this,this.forceUpdate);
    }

    setSessionState(size){
        this.settings.size.value = size;
    }

    componentWillReceiveProps(nextProps){
        if(this.props.settings !== nextProps.settings){
            this.settings.size.removeCallback(this,this.forceUpdate);
            this.settings = nextProps.settings;
            this.settings.size.addImmediateCallback(this,this.forceUpdate);
        }
    }

    render() {

        const split = this.props.split;
        const classes = ['Pane', split];

        let styleObj = Style.appendVendorPrefix({
            flex: 1,
            position: 'relative',
            outline: 'none',
            overflow: 'auto'
        });



        if (this.settings.size.value) {
            if (split === 'vertical') {
                styleObj.width = this.settings.size.value;
            } else {
                styleObj.height = this.settings.size.value;
                styleObj.display = 'flex';
            }
            styleObj.flex = 'none';
        }

        return (<div className={classes.join(' ')} style={styleObj}>
                    {this.props.children}
                </div>
        );
  }
}

export default Pane;
