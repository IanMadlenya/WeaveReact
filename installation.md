# Set up

You can import the library as CommonJS modules, as ES6 modules via Babel, as AMD modules, or as a global JS script.


## CommonJS

If you install WeaveReact using NPM, you can import individual components under weavereact/lib rather than the entire library. Doing so pulls in only the specific components that you use, which will reduce the size of your client bundle

## ES6

$ npm install react react-bootstrap

import Button from 'react-bootstrap/lib/Button';
// or
import { Button } from 'react-bootstrap';
## AMD
$ bower install react react-bootstrap

define(['react-bootstrap'], function(ReactBootstrap) { var Alert = ReactBootstrap.Alert; ... });
## Browser globals
We provide react-bootstrap.js and react-bootstrap.min.js bundles with all components exported on the window.ReactBootstrap object. These bundles are available on CDNJS, and in both the Bower and NPM packages.

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react-dom.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js"></script>
<script>
  var Alert = ReactBootstrap.Alert;
</script>




