import ComponentManager from "../../ComponentManager";
import AbstractComponent from "../../AbstractComponent";

class Overlay extends AbstractComponent {
    constructor(props) {
        super(props)
    }

    render() {
        var styleObject =  this.settings.style.state;
        return  <div  style={styleObject} />;
    }
}

module.exports = Overlay;
