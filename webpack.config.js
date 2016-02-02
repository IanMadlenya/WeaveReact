var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "build/dist/"),
        filename: "weavereact.js",
        publicPath: "js/",
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
        "react-dom": "ReactDOM",
        "d3": "d3",
        "c3": "c3",
        "_": "lodash",
        "weavejs": "weavejs",
        "Weave": "Weave",
        "WeaveUI": "WeaveUI"
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".scss", ".md"]
    }
};
