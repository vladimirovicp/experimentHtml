const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');


module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
        //assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
        assetModuleFilename: path.join('images', '[name][ext]'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('images/svg', '[name].[contenthash][ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    //filename: path.join('fonts', '[name][ext]'),
                    //filename: 'fonts/[name][ext]' // все шрифты в dist/font
                    filename: '[path][name][ext]',
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            //template: path.join(__dirname, 'src', 'template.html'),
            template: path.join(__dirname, 'src', 'template.pug'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'page/test.pug'),
            filename: 'test.html',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'page/bayan.pug'),
            filename: 'bayan.html',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'page/lymphacomplex-program2023.pug'),
            filename: 'lymphacomplex-program2023.html',
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'page/accordions.pug'),
            filename: 'accordions.html',
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'page/details.pug'),
            filename: 'details.html',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'page/carousel.pug'),
            filename: 'carousel.html',
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'page/modal-dialog1.pug'),
            filename: 'modal-dialog1.html',
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'page/youtube-video.pug'),
            filename: 'youtube-video.html',
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'page/rutube.pug'),
            filename: 'rutube.html',
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'page/table.pug'),
            filename: 'table.html',
        }),








        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ['dist'],
                },
                onEnd: {
                    copy: [
                        {
                            source: path.join('src', 'static'), destination: 'dist',
                        },
                    ],
                },
            },
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].[contenthash].css',
        }),
    ],
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },
   optimization: {
     minimizer: [
         new ImageMinimizerPlugin({
             minimizer: {
                 implementation: ImageMinimizerPlugin.imageminMinify,
                 options: {
                     plugins: [
                         ['gifsicle', { interlaced: true }],
                         ['jpegtran', { progressive: true }],
                         ['optipng', { optimizationLevel: 5 }],
                         ['svgo', { name: 'preset-default' }],
                    ],
                },
            },
         }),
     ],
   },

};
