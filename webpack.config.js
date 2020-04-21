const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let sourceMap = true;

if (process.env.NODE_ENV === 'production') {
    sourceMap = false;
}

module.exports = {
    mode: 'development',
    entry: {
        main: [
            './assets/sass/style.scss'
        ],
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'webpack.log'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './assets/css/[name].css',
            chunkFilename: './assets/css/[id].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    },
                ],
            },
        ],
    },
};