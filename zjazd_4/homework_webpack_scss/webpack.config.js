const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        watchContentBase: true
    },
    module: {
        rules: [{
            test: /\.scss$/, 
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.js$/,
            exclude: /node-modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: {
                loader: "file-loader",
                options: {name: "[name].[ext]"}
            }
        }]
    }
}
