# Set up

You can import the library as CommonJS modules, as ES6 modules via Babel, as AMD modules, or as a global JS script.


## CommonJS

If you install WeaveReact using NPM, you can import individual components under weavereact/lib rather than the entire library. Doing so pulls in only the specific components that you use, which will reduce the size of your client bundle

## ES6

```$ npm install react weavereact

import Tree from 'weavereact/tree/Tree';
// or
import { Tree } from 'weavereact';```
## AMD
```$ bower install react weavereact

define(['weavereact'], function(WeaveReact) { var Tree = WeaveReact.Tree; ... });```
## Browser globals
We provide weavereact.js and weavereact.min.js bundles with all components exported on the window.weavereact object. These bundles are available in both the Bower and NPM packages.






