//https://christianalfoni.github.io/react-webpack-cookbook/Authoring-libraries.html
var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "weavereact.js",
        library: "weavereact",
        libraryTarget: "umd",
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.(js|jsx)$/,
                loaders: ["babel"],
                exclude: /node_modules/
            }
		]
    },
    plugins: [
		new webpack.NoErrorsPlugin()
	],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    "devtool":"sourcemap",
    debug : true
};
