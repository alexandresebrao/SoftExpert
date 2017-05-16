var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', path.normalize(__dirname + '/src/js/main.js')],
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
          {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
          }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
          }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/octet-stream"
          }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
          }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=image/svg+xml"
          },
          { test: /\.css$/,   loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },

        ]
    },
    plugins: [
      new webpack.DefinePlugin( {  'process.env': {
                                                    NODE_ENV: JSON.stringify('production')
                                                  }
                                                    ,'enableFilter': true,
                                                    jQuery: 'jquery',
                                                    $: 'jquery',
                                                    jquery: 'jquery'
                              }),
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new ExtractTextPlugin("styles.css"),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ]
};
