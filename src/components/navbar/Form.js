import React from "react";

class Form extends React.Component {

    constructor(props) {
        super(props);
         this.settings = this.props.settings;
    }

    componentDidMount() {
        this.settings.enable.addImmediateCallback(this, this.forceUpdate);
        this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
        this.settings.space.addImmediateCallback(this, this.forceUpdate);
        this.settings.controllers.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
    }

    componentWillUnmount() {
        this.settings.enable.removeCallback(this, this.forceUpdate);
        this.settings.rightAlign.removeCallback(this, this.forceUpdate);
        this.settings.space.removeCallback(this, this.forceUpdate);
        this.settings.controllers.childListCallbacks.removeCallback(this, this.forceUpdate);
    }

    render() {
        var navFormUI = <div/>;
        if(this.settings.enable.value){
            var cssNames = this.settings.rightAlign.value?"navbar-form navbar-right":"navbar-form";
            var controllersUI = this.settings.controllers.getNames().map(function(controllerName,index){
                var linkablePlaceHolder = this.settings.controllers.getObject(controllerName);
                var ToolClass = linkablePlaceHolder.getClass();
                var spaceValue = this.settings.space.value;
                var marginStyle = {marginLeft:spaceValue,marginRight:spaceValue}
                return <span key={index} style={marginStyle}><ToolClass /></span>
            }.bind(this));
            navFormUI = <div className={cssNames} style={{margin:"0"}} >
                            <div className="form-group"  style = {{width: "100%"}}>
                                {controllersUI}
                            </div>
                        </div>

        }

        return (navFormUI);
    }

}

Weave.registerClass('weavereact.navbar.Form', Form,[weavejs.api.core.ILinkableObject]);

export default Form;
