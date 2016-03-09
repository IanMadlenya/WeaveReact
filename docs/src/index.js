import ReactDOM from "react-dom";
import App from "./App";
import weavereact from "../../lib/index.js";

weavereact.setDebug(true);
window.demo ={};
window.demo.App = App;
window.demo.init = function (container) {
    ReactDOM.render( <App/> , document.getElementById(container));
}


