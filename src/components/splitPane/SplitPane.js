import React from 'react';
import ReactDOM from "react-dom";
import Style from "../../utils/Style";
import SplitPaneConfig from "./SplitPaneConfig";
import Pane from './Pane';
import Resizer from './Resizer';

//code logic taken from https://github.com/tomkp/react-split-pane

class SplitPane extends React.Component {

    constructor(props) {
        super(props);
        this.settings = this.props.settings ? this.props.settings : new SplitPaneConfig();
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }



    componentDidMount() {
        this.settings.active.addGroupedCallback(this, this.forceUpdate);
        this.settings.resized.addGroupedCallback(this, this.forceUpdate);
        this.settings.position.addGroupedCallback(this, this.forceUpdate);
        this.settings.unFocusCount.addImmediateCallback(this, this.unFocus);
        document.addEventListener('mouseup', this.onMouseUp);
        document.addEventListener('mousemove', this.onMouseMove);
        const ref = this.refs.pane1;
        if (ref && this.props.defaultSize && !this.settings.resized.value) {
            this.settings.pane1.size.value = this.props.defaultSize;
            //ref.setSessionState( this.props.defaultSize);
        }
    }

    componentWillUnmount() {
        this.settings.active.removeCallback(this, this.forceUpdate);
        this.settings.resized.removeCallback(this, this.forceUpdate);
        this.settings.position.removeCallback(this, this.forceUpdate);
        this.settings.unFocusCount.removeCallback(this, this.unFocus);
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('mousemove', this.onMouseMove);
    }



    onMouseDown(event) {
        this.settings.updateUnFocus();
        let position = this.props.split === 'vertical' ? event.clientX : event.clientY;
        this.settings.position.value = position;
        this.settings.active.value = true;
    }

    onMouseMove(event) {
        if (this.settings.active.value) {
            this.settings.updateUnFocus();
            const ref = this.refs.pane1;
            if (ref) {
                const node = ReactDOM.findDOMNode(ref);
                if (node.getBoundingClientRect) {
                    const width = node.getBoundingClientRect().width;
                    const height = node.getBoundingClientRect().height;
                    const current = this.props.split === 'vertical' ? event.clientX : event.clientY;
                    const size = this.props.split === 'vertical' ? width : height;
                    const position = this.settings.position.value;

                    const newSize = size - (position - current);

                    this.settings.position.value = current;
                    this.settings.resized.value = true;

                    if (newSize >= this.props.minSize) {
                        if (this.props.onChange) {
                            this.props.onChange(newSize);
                        }
                        this.settings.pane1.size.value = newSize;
                    }
                }
            }
        }
    }

    onMouseUp() {
        if (this.settings.active.value) {
            if (this.props.onDragFinished) {
                this.props.onDragFinished();
            }
            this.settings.active.value = false;
        }
    }

    unFocus() { // need to be called change of session value so that we can see them in session Log
        if (document.selection) {
            document.selection.empty();
        } else {
            window.getSelection().removeAllRanges()
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props.settings !== nextProps.settings){
            this.settings.active.removeCallback(this, this.forceUpdate);
            this.settings.resized.removeCallback(this, this.forceUpdate);
            this.settings.position.removeCallback(this, this.forceUpdate);
            this.settings.unFocusCount.removeCallback(this, this.unFocus);
            this.settings = nextProps.settings;
            this.settings.active.addGroupedCallback(this, this.forceUpdate);
            this.settings.resized.addGroupedCallback(this, this.forceUpdate);
            this.settings.position.addGroupedCallback(this, this.forceUpdate);
            this.settings.unFocusCount.addImmediateCallback(this, this.unFocus);
        }
    }

    render() {
        const split = this.props.split;

        let styleObj = Style.appendVendorPrefix({
            display: 'flex',
            flex: 1,
            position: 'relative',
            outline: 'none',
            overflow: 'hidden',
            MozUserSelect: 'text',
            WebkitUserSelect: 'text',
            msUserSelect: 'text',
            userSelect: 'text'
        });

        if (split === 'vertical') {
            Style.mergeStyleObjects(styleObj, {
                flexDirection: 'row',
                height: '100%',
                position: 'absolute',
                left: 0,
                right: 0
            }, true);
        } else {
            Style.mergeStyleObjects(styleObj, {
                flexDirection: 'column',
                height: '100%',
                minHeight: '100%',
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '100%'
            }, true);
        }
        const children = this.props.children;

        const classes = ['SplitPane', split];

        return ( <div className = {classes.join(' ')} style = { styleObj } ref = "splitPane">
                    <Pane ref = "pane1" key = "pane1" split = {split} settings = { this.settings.pane1 } > 
                        {children[0]} 
                    </Pane> 
                    <Resizer ref = "resizer" key = "resizer" onMouseDown = { this.onMouseDown } split = { split } /> 
                    <Pane ref = "pane2" key = "pane2" split = { split } settings = { this.settings.pane2 } > 
                        {children[1]} 
                    </Pane> 
                </div>
        );
    }
}

SplitPane.defaultProps = {
    minSize: 0,
    split: "vertical"
};

export default SplitPane;
