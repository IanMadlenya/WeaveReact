import React from 'react';
import Styles from '../../utils/Styles';
import weavereact from 'weavereact';
import Overlay from './Overlay';
import ContentWrap from './ContentWrap';
import SideBar from "./SideBar";


class SideBarContainer extends React.Component {
    constructor(props) {
        super(props)
        this.settings = props.settings;

    }

    componentDidMount() {
       this.settings.height.addImmediateCallback(this, this.forceUpdate);
       this.settings.showSideBars.addImmediateCallback(this, this.forceUpdate);
       this.settings.sideBars.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
    }


    componentWillUnmount() {
        this.settings.height.removeCallback(this, this.forceUpdate);
        this.settings.showSideBars.removeCallback(this, this.forceUpdate);
        this.settings.sideBars.childListCallbacks.removeCallback(this, this.forceUpdate);
        //this.settings.sideBars.dispose();//to-do: double check this to make sure this is required, i m doing this as in render i m adding callback
    }



    render() {

        var isOpen = this.settings.showSideBars.value;
        var sideBarsUI  = [];
        var staticBar = "";
        sideBarsUI = this.settings.sideBars.getNames().map(function(barName,index){
            var obj = this.settings.sideBars.getObject(barName);
            if(obj.static.value)staticBar = obj.direction.value;
            var configClass = Weave.getPath(obj).getType();
            var ToolClass = weavereact.getToolImplementation(configClass);
            var keyIndex = barName + index;
            return <ToolClass key={keyIndex} isOpen={isOpen} settings={obj}/>
        }.bind(this));

        var styleObject =  this.settings.getState(this.props.isOpen,staticBar);

        var overLayUi = "";
        if(this.settings.overlay.enable.true){
            overLayUi = <Overlay isOpen={isOpen} open={this.settings.showSideBars} settings = {this.settings.overlay}/>
        }

        var contentUI = <ContentWrap isOpen={isOpen}  contianerSettings={this.settings}>
                            {this.props.children}
                        </ContentWrap>

        return ( <div style = {Styles.appendVendorPrefix(styleObject)}>
                    {sideBarsUI}
                    {overLayUi}
                    {contentUI}
                </div>
                );
    }
}

module.exports = SideBarContainer;
