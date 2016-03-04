import React from "react";
import HTMLWrapper from "../HTMLWrapper";
import App from "../../utils/App";

class Brand extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings;
        this.langSettings = (this.props && this.props.langSettings)?this.props.langSettings:null;
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

    addCallbacks(){
        this.settings.enable.addImmediateCallback(this,this.forceUpdate);
        this.settings.title.addImmediateCallback(this,this.forceUpdate);
        Weave.getCallbacks(this.settings.style).addImmediateCallback(this,this.forceUpdate);
        if(this.langSettings)this.langSettings.addImmediateCallback(this,this.forceUpdate);
        //this.settings.children.childListCallbacks.addGroupedCallback(this,this.forceUpdate);
    }


    removeCallbacks () {
        this.settings.enable.removeCallback(this,this.forceUpdate);
        this.settings.title.removeCallback(this,this.forceUpdate);
        Weave.getCallbacks(this.settings.style).removeCallback(this,this.forceUpdate);
        if(this.langSettings)this.langSettings.removeCallback(this,this.forceUpdate);
        //this.settings.children.childListCallbacks.removeCallback(this,this.forceUpdate);
    }

    componentWillUnmount () {
        this.removeCallbacks();
    }



    shouldComponentUpdate(nextProps){
        if(this.props.dock !== nextProps.dock){
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
        var childConfigs = this.settings.children.getObjects();
        var clonedChildren = childConfigs.map(function(childConfig,index){
            var child = this.settings.configChildMap.get(childConfig);

            if(child){
                var props = App.mergeInto({},child.props);
                if(typeof(child.type) === "string"){
                    var configName =  this.settings.children.getName(childConfig);
                    return <HTMLWrapper key={configName} settings={childConfig}>{child}</HTMLWrapper>
                }else{
                    props["settings"] = childConfig;
                    if(CSS){
                        props["className"] = CSS[childName];
                        props["CSS"] = CSS;
                    }
                    if(this.settings.childConfigMap.has(child))
                        this.settings.childConfigMap.delete(child);
                    var clonedChild = React.cloneElement(child,props);
                    this.settings.configChildMap.set(childConfig,clonedChild);
                    this.settings.childConfigMap.set(clonedChild,childConfig);
                    return clonedChild;
                }
             }else{
                var configClass = Weave.getPath(childConfig).getType();
                var ToolClass =  App.getToolImplementation(configClass);
                var configName =  this.settings.children.getName(childConfig);
                var newChild = <ToolClass key={configName}  settings={childConfig}/>;
                this.settings.configChildMap.set(childConfig,newChild);
                this.settings.childConfigMap.set(newChild,childConfig);
                return newChild;
             }

        }.bind(this));

        return clonedChildren;

    }



    render() {
        var BrandUI = <div/>;

        if(this.settings.enable.value){
            /*var title = this.settings.title.value;

            var titleStyle  = this.settings.style.getStyleFor();
            if(this.langSettings){
                title = App.getTranslatedWord(this.settings.title.value);
            }*/

            var childrenUI = []
            if(this.props.useCSS){
                childrenUI = this.renderChildren(this.props.css);
                var cssName = this.settings.CSS.getCSSFor();

                BrandUI = <div className={cssName}>
                            {childrenUI}
                          </div>
            }else{
                var styleObject = this.settings.style.getStyleFor(null,true);
                childrenUI = this.renderChildren(null);
                BrandUI = <div style={styleObject}>
                            {childrenUI}
                          </div>
            }

        }
        return (BrandUI);
    }
}
Weave.registerClass("weavereact.navbar.Brand", Brand,[weavejs.api.core.ILinkableObject]);
export default Brand;
