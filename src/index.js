import ReactDOM from "react-dom";
import App from "./App";

window.demo ={};
window.demo.App = App;
window.demo.init = function (container) {
    ReactDOM.render( <App/> , document.getElementById(container));
}


