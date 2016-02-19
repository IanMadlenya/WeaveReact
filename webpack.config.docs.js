var config = require("./webpack.config.dev.js");
const entryFile = './docs/src/index.js';
config.entry = {
    bundle:  entryFile
};

config.output = {
    filename: '[name].js',
    path: './docs/assets',
};

module.exports = config;
