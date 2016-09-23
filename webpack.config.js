'use strict';
let webpack = require(`webpack`);

module.exports = {
    entry: {
        main: './src/index.js'
    },

    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'bundle.js'
    },

    module:{
        loaders: [{
            test:   /\.css$/,
            loader: 'style!css'
        }, {
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2|mp3|wav|ogg)$/,
            loader: 'file?name=[name].[ext]?[hash]'
        }]
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};