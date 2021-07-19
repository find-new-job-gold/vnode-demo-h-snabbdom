const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: 'ddd',
        filename: 'bundle.js'
    },
    devServer: {
        port: 8096,
        contentBase: 'www'
    }
}