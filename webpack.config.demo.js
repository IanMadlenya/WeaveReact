var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    entry: {
        app: "./demo/src/index.js"
    },
    output: {
        path: path.join(__dirname, "demo/"),
        filename: "demo.js",
        publicPath: "js/",
        library: "reactweavedemo",
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
        "react-dom": "ReactDOM",
        "weavejs": "weavejs",
        "Weave": "Weave",
        "reactweave": "reactweave"
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".scss", ".md"]
    },
    devtool: "sourcemap",
    debug: true

};
