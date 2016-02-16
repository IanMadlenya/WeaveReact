import React from "react";

class Brand extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings;
        this.langSettings = (this.props && this.props.langSettings)?this.props.langSettings:null;
    }

    componentDidMount(){
        this.settings.enable.addImmediateCallback(this,this.forceUpdate);
        this.settings.title.addImmediateCallback(this,this.forceUpdate);
        if(this.langSettings)this.langSettings.addImmediateCallback(this,this.forceUpdate);
    }


    componentWillUnmount () {
        this.settings.enable.removeCallback(this,this.forceUpdate);
        this.settings.title.removeCallback(this,this.forceUpdate);
        if(this.langSettings)this.langSettings.removeCallback(this,this.forceUpdate);
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
        var BrandUI = <div/>;
        if(this.settings.enable.value){
            var title = this.settings.title.value;
            if(this.langSettings){
                title = App.getTranslatedWord(this.settings.title.value);
            }
            if(this.props.useCSS){
                var headerCSS = this.props.css.header;
                var titleCSS = this.props.css.title
                BrandUI = <div className={headerCSS}>
                        <div className={titleCSS}>{title}</div>
                      </div>

            }else{
                BrandUI = <div>{title}</div>
            }

        }
        return (BrandUI);
    }
}
Weave.registerClass("weavereact.navbar.Brand", Brand,[weavejs.api.core.ILinkableObject]);
export default Brand;
