import React from "react";
import Style from "../../utils/Style";
import App from "../../utils/App";

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

    shouldComponentUpdate(nextProps){
        if(this.props.positionType !== nextProps.positionType){
            return true
        }else if(this.props.position !== nextProps.position){
            return true
        }else if(this.props.useCSS !== nextProps.useCSS){
            return true
        }else{
            return false;
        }
    }

    render() {
        var navFormUI = <div/>;
        if(this.settings.enable.value){
            var styleObject = {
                display:"flex",
                flexDirection:"row",
                flex:"1"
            }
            if((this.props.position !== "right") && (this.props.position !== "left") && this.settings.rightAlign){
                styleObject["justifyContent"] = "flex-end";
                styleObject["marginRight"] = "auto";
            }
            var space = this.settings.space.value;
            var childStyleObject = {
                marginRight:space
            }

            if(this.props.positionType === "fixed"){
                if((this.props.position === "right") || (this.props.position === "left")){
                    styleObject["flexDirection"] = "column";
                    childStyleObject["marginRight"] = 0;
                    childStyleObject["marginBottom"] = space;
                }
            }

            var controllersUI = this.settings.controllers.getNames().map(function(controllerName,index){
                var formConfig = this.settings.controllers.getObject(controllerName);
                var ToolClass = App.getToolImplementation(Weave.getPath(formConfig).getType())
                return <span key={index} style={childStyleObject}><ToolClass settings={formConfig} /></span>
            }.bind(this));

            if(this.props.useCSS){
                navFormUI = <div  className={this.props.css} >
                                {controllersUI}
                        </div>
            }else{
               navFormUI = <div  style={styleObject} >
                                {controllersUI}
                        </div>
            }


        }

        return (navFormUI);
    }

}

Weave.registerClass('weavereact.navbar.Form', Form,[weavejs.api.core.ILinkableObject]);

export default Form;
