import Style from "../../utils/Style";

//code logic taken from https://github.com/tomkp/react-split-pane

class Resizer extends React.Component {

    constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
    }



    onMouseDown(event) {
        this.props.onMouseDown(event);
    }

    render() {
        var resizerStyle = {
            boxSizing: "border-box",
            background:"#000",
            opacity: ".2",
            zIndex: "1",
            MozBackgroundClip: "padding",
            WebkitBackgroundClip: "padding",
            backgroundClip: "padding-box",
        };

        const split = this.props.split;
        var splitStyle;
        if(split === 'horizontal'){
            splitStyle =  {
                height: "11px",
                margin: "-5px 0",
                borderTop: "5px solid rgba(255, 255, 255, 0)",
                borderBottom: "5px solid rgba(255, 255, 255, 0)",
                cursor: "row-resize",
                width: "100%",
            }
        }else{
            splitStyle = {
                width: "11px",
                margin: "0 -5px",
                borderLeft: "5px solid rgba(255, 255, 255, 0)",
                borderRight: "5px solid rgba(255, 255, 255, 0)",
                cursor: "col-resize",
                height: "100%",
            }
        }

        Style.mergeStyleObjects(resizerStyle,splitStyle,true);


        return (<span style={resizerStyle} onMouseDown={this.onMouseDown} />);
  }
}

export default Resizer;
