'use strict';

const path = require("path");
const webpack = require('webpack');

const DIST_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "dev");

const config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            { 
                test: /(\.css$)/, 
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
    ],
    devServer: {
        proxy: {
            '/api': {
                secure: false,
                target: 'http://localhost:3000',
            }
        },
        overlay: true
    }
};

module.exports = config;