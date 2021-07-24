'use strict';

let path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/script.js', /* Ёбанный рот, здесь ошиба в пути была! */
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'js')
    },

    watch: true,

    devtool: 'source-map',

    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', {
                    debug: true,
                    corejs: 3,
                    useBuiltIns: "usage"
                }]]
            }
            }
        }
        ]
    }
};