const path = require("path");

module.exports = {
    // targetted file for webpacking
    entry: {
        app: "./app/app.js"
    },

    // generates the filename output file of the entire webpack
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },

    module: {
        rules: [
            // allows the use of jsx
            {
                test: [/\.jsx?$/],
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            },
            
            // allows the use of CSS
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            
            // allows the app to use images and documents
            {
                test: /\.(pdf|png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },

    devtool: "eval-source-map"
};