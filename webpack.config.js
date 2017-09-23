const path = require("path");

module.exports = {
    entry: {
        app: "./app/app.js"
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },

    module: {
        rules: [
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