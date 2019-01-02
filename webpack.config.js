const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => ({
    context: path.resolve(__dirname, './'),
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/docs'),
        filename: 'index_bundle.js',
        publicPath: env === 'production' ? '/ct-cars/' : '/'
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            reducers: path.resolve(__dirname, './src/reducers')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin({ filename: 'app.master.css' })
    ],
    devServer: {
        historyApiFallback: true,
    }
});
