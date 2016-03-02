import React from "react";
import Style from "../../utils/Style";
import App from "../../utils/App";



class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new TabsConfig();
        App.hookSessionStateForComponentChildren(this.props.children,this.settings);
        this.addCallbacks = this.addCallbacks.bind(this);
        this.removeCallbacks = this.removeCallbacks.bind(this);
        this.propsManager =  new PropsManager()

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

    }

    componentWillUnmount(){

    }




    render() {

    var styleObject = this.settings.style.getStyleFor();


    return (<div style={styleObject}>
                <TabNav settings={this.props.settings} clickCallback={this.props.clickCallback} titles={this.props.titles}/>
                <TabChildren settings={this.props.settings}  toolClass={this.props.toolClass} toolProps={this.props.toolProps}>
                    {this.props.children}
                </TabChildren>
            </div>
    );
  }
}

weavereact.registerToolImplementation("admindesk.TabComponentConfig",TabComponent);

export default TabComponent;
