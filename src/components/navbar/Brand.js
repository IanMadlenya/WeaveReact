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

    render() {
        var BrandUI = <div/>;
        if(this.settings.enable.value){
            var title = this.settings.title.value;
            if(this.langSettings){
                title = App.getTranslatedWord(this.settings.title.value);
            }
            BrandUI = <div className="navbar-header">
                        <span className="navbar-brand">{title}</span>
                      </div>
        }
        return (BrandUI);
    }
}
Weave.registerClass("weavereact.navbar.Brand", Brand,[weavejs.api.core.ILinkableObject]);
export default Brand;
