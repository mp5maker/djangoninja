const path = require('path');

module.exports = {
    entry: "./app/main.js",
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: "react-main.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ]
    }
};