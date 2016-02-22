import React from "react";
import Style from "../../utils/Style";
import App from "../../utils/App";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings;
        if(this.props.children)App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        this.addCallbacks = this.addCallbacks.bind(this);
        this.removeCallbacks = this.removeCallbacks.bind(this);

    }

    componentWillReceiveProps(nextProps){
        if(this.props.settings !== nextProps.settings){
            if(nextProps.settings){
                this.removeCallbacks();
                this.settings = nextProps.settings;
                this.addCallbacks();
            }
        }
        if(this.props.style !== nextProps.style){// user style added through UI is Sessioned
            if(nextProps.style)this.settings.style.domDefined.state = nextProps.style;
        }
        if(this.props.children !== nextProps.children){
            App.hookSessionStateForComponentChildren(nextProps.children,this.settings);
        }

    }

    componentDidMount(){
        this.addCallbacks();
    }

    addCallbacks() {
        this.settings.enable.addImmediateCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
        this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
        this.settings.space.addImmediateCallback(this, this.forceUpdate);
        //this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
    }

    removeCallbacks() {
        this.settings.enable.removeCallback(this, this.forceUpdate);
        Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
        this.settings.rightAlign.removeCallback(this, this.forceUpdate);
        this.settings.space.removeCallback(this, this.forceUpdate);
        //this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
    }


    componentWillUnmount() {
        this.removeCallbacks();
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


    renderChildren(CSS){
        var childStyleObject={};
        var space = this.settings.space.value;
        if((this.props.dock === "right") || (this.props.dock === "left")){
            childStyleObject["marginBottom"] = space;
        }
        else if((this.props.dock === "top") || (this.props.dock === "bottom")){
            childStyleObject["marginRight"] = space;
        }

        var childConfigs = this.settings.children.getObjects();
        var clonedChildren = childConfigs.map(function(childConfig,index){
            var child = this.settings.configChildMap.get(childConfig);
            var configName = this.settings.children.getName(childConfig);
            if(child){
                var props = App.mergeInto({},child.props);

                props["settings"] = childConfig;
                props["key"] = configName;

                if(CSS){
                    props["className"] = CSS[childName];
                }else{
                    props["style"] = childStyleObject;
                }

                if(this.settings.childConfigMap.has(child))
                    this.settings.childConfigMap.delete(child);
                var clonedChild = React.cloneElement(child,props);
                this.settings.configChildMap.set(childConfig,clonedChild);
                this.settings.childConfigMap.set(clonedChild,childConfig);
                return clonedChild;
             }else{
                var configClass = Weave.getPath(childConfig).getType();
                var ToolClass =  App.getToolImplementation(configClass);
                var configName =  this.settings.children.getName(childConfig);
                var newChild = <ToolClass key={configName}  settings={childConfig}/>;
                return newChild;
             }

        }.bind(this));

        return clonedChildren;
    }



    render() {
        var navFormUI = <div/>;
        if(this.settings.enable.value){
            if(!this.props.useCSS){
                var styleObject = this.settings.style.getStyleFor(null);
                if((this.props.dock !== "right") && (this.props.dock !== "left") && this.settings.rightAlign){
                    styleObject["justifyContent"] = "flex-end";
                    //styleObject["marginRight"] = "auto";
                }
                styleObject = Style.appendVendorPrefix(styleObject);
            }


            var controllersUI = []

            if(this.props.useCSS){
                controllersUI = this.renderChildren(this.props.CSS)
                navFormUI = <div  className={this.props.css} >
                                {controllersUI}
                            </div>
            }else{
                controllersUI = this.renderChildren(null)
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
