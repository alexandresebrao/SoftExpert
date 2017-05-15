var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', path.normalize(__dirname + '/src/js/main')],
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src', 'js')],
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            },

            {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
      new webpack.DefinePlugin( {'enableFilter': true}),
      new ExtractTextPlugin("styles.css"),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ]
};
