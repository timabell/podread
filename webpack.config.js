const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'app'),
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'babel-loader',
            },
        ]
    },
    resolve: {
        extensions: ['.ts']
    }
}
