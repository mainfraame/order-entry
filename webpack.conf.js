const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const kebabCase = require('lodash.kebabcase');
const theme = require('./src/theme');

module.exports = {
    devtool: 'source-map',
    devServer: {
        hot: true,
        inline: true,
        compress: true,
        contentBase: path.join(__dirname, './dist'),
        port: 8080,
        watchOptions: {
            ignored: [
                /node_modules/
            ],
            poll: true
        }
    },
    entry: [
        path.resolve(__dirname, './src/index.js')
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: Object.keys(theme).reduce((acc, key) => ({
                                ...acc,
                                [kebabCase(key)]: theme[key]
                            }), {})
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    resolve: {
        extensions: ['.js']
    }
};