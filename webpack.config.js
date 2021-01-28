const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'app'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js', // just for node_modules stuff
        ],
    }
}
