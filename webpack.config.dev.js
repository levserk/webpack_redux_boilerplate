'use strict';
let webpack = require(`webpack`);
let config = require('./webpack.config.js');

config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = Object.assign(config, {
    entry: {
        main: ['webpack-dev-server/client', 'webpack/hot/dev-server', config.entry.main]
    },

    devServer: {
        host: 'localhost',
        contentBase: __dirname,
        port: 8088,
        hot: true
    }
});