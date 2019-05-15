const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/boot.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: '**/*.html', to: '', context: 'src/', }
        ]),
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    }
};