import ReactDOM from "react-dom";
import Weave from "Weave";
import weavejs from "weavejs";
import reactweave from "reactweave";
import App from "./App";





exports.getSession = function () {
    return session;
}

exports.addComponet = function (name, classObj) {
    session.root.requestObject(name, classObj)
}


exports.init = function (container, session) {
    ReactDOM.render( < App root = {
            session
        }
        /> , document.getElementById(container)
    );
}
