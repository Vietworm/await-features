"use strict"

let path = require('path');
let projectRoot = path.resolve(__dirname, '../');

module.exports = {
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: projectRoot + 'src',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter'),
        configFile: projectRoot + '.eslintrc'
    }
}