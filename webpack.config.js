/*
var HtmlWebpackPlugin = require('html-webpack-plugin');
*/

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist/',
        filename: 'js/app.bundle.js'
    }/*,
    plugins: [new HtmlWebpackPlugin({
        title: 'Linkerat',
        filename: 'index.html'
    })]*/
};