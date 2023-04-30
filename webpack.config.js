const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.[contenthash].js',
    },
    module: {
        rules: [{ test: /\.html$/, use: ['html-loader'] }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
};

/**
 * Html webpack plugin - simpflies creationg of HTML files. Useful for bundles that include a hash in the filename.
 * This will let webpack handle automatically update the hashed file names in the script tags
 *
 *
 * Html loader - anytime that you need to handle an image, it will require the image. It will tell the webpack that this
 * is the file that we need to load. You still need to tell webpack how you want to handle these files.
 *
 *
 */
