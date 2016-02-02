import App from "../../utils/App";
import Styles from "../../utils/Style";
import NodeConfig from "./NodeConfig";

class Node extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings:new NodeConfig();
        this.toggle = this.toggle.bind(this);
        this.getTreeNodes = this.getTreeNodes.bind(this);
        this.getTreeLabel = this.getTreeLabel.bind(this);
        this.setSessionStateFromTree();
    }

    componentDidMount(){
        this.settings.open.addImmediateCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
        this.settings.label.addImmediateCallback(this, this.forceUpdate);
        this.settings.active.addImmediateCallback(this, this.forceUpdate);
    }

    componentWillUnmount () {
        this.settings.open.removeCallback(this, this.forceUpdate);
        this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
        this.settings.label.removeCallback(this, this.forceUpdate);
        this.settings.active.removeCallback(this, this.forceUpdate);
    }

    toggle(){
        this.settings.open.value = !this.settings.open.value;
        if(this.props.clickCallback)
            this.props.clickCallback.call(this,this.props.data);
        this.props.treeConfig.changeActiveNode(this.settings)
    }


    setSessionStateFromTree() {
        this.settings.label.value = this.getTreeLabel();
        var treeNodes = this.getTreeNodes();
        if (treeNodes && treeNodes.length !== this.settings.children.getNames().length) {
            this.settings.children.delayCallbacks();
            for (var i = 0; i < treeNodes.length; i++) {
                var objectName = "node" + i;
                this.settings.children.requestObject(objectName, NodeConfig);
            }
            this.settings.children.resumeCallbacks();
        }
    }

    getTreeNodes(){
        if(this.props.data[this.props.nodes] instanceof Function){
            return this.props.data[this.props.nodes]();
        }else{
           return this.props.data[this.props.nodes];
        }
    }

    getTreeLabel(){
        if(this.props.data[this.props.label] instanceof Function){
            return this.props.data[this.props.label]();
        }else{
            return this.props.data[this.props.label];
        }
    }

    componentWillReceiveProps(nextProps){
        this.setSessionStateFromTree();
    }

    render() {
        var nodesUI = [];
        var folderIcon = this.props.treeConfig.folderIcon.value;
        //var activeLeafColor = "black";

        var nodeUI = "";
        var nodes = this.settings.getNodes();
        if(this.settings.open.value){
            folderIcon = this.props.treeConfig.folderOpenIcon.value;

            if(nodes.length > 0){
                var treeNodes = this.getTreeNodes();
                for (var i = 0 ; i < nodes.length ;i++){
                    var treeItem = treeNodes[i];
                    var nodeConfig = this.settings.children.getObject( nodes[i]);
                    var active = false;
                    nodesUI.push(<Node key={i} data={treeItem} label={this.props.label} nodes={this.props.nodes} treeConfig={this.props.treeConfig} settings={nodeConfig} clickCallback={this.props.clickCallback}/>) ;
                }
            }
        }

        if(nodes.length > 0){ //folder
            var nodeIconStyleObject = Styles.appendVendorPrefix(this.props.treeConfig.getNodeIconStyle());
            nodeUI = <span>
                    <span onClick={this.toggle}>
                        <i className={folderIcon} style={nodeIconStyleObject} ></i>
                        &#160;{this.settings.label.value}
                    </span>
                    <ul style={{listStyleType:"none",paddingLeft:"20px"}}>
                        {nodesUI}
                    </ul>
                </span>;
        }
        else{ //leaf
            var leaf = this.settings.label.value;
            var fileIcon = this.props.treeConfig.getFileIcon(this.props.data);
            var fileIconStyle = this.props.treeConfig.getFileIconStyle();
            var activeLeafColor = this.settings.active.value?"#8e8d8d":"black";
            if(fileIcon.indexOf("fa fa-") > -1)
                nodeUI = <li style={{color:activeLeafColor}} onClick={this.toggle}>
                            <i className={fileIcon}></i>
                            &#160;{leaf}
                         </li>
            else
                nodeUI = <li style={{color:activeLeafColor}} onClick={this.toggle}>
                            <span style={fileIconStyle}>{fileIcon}</span>
                            &#160;{leaf}
                         </li>
        }

    return ( nodeUI);
    }

}

App.registerToolImplementation("weavereact.NodeConfig",Node);
export default Node;
