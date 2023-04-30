const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack0plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.[contenthash].js',
    },
    module: {
        rules: [
            { test: /\.html$/, use: ['html-loader'] },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash]. [ext]',
                        outputPath: 'imgs',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
        new CleanWebpackPlugin(),
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
 * file-loader - handles the images like svgs, pngs, jpgs etc. In the ruleset you can add the output path as well.
 * The outputPath will name the folder that is placed in your specified dist directory.
 *
 *clean-webpack-plugin - used to clean up extra hashed files created by webpack. It is typically used in production mode
 *I believe but it can be used in development mode as well too.
 */
