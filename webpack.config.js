const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8080,
    }
};

module.exports = ({develop}) => ({
    mode: develop ? 'development' : 'production',
    entry : {
        index: './src/scripts/index.js',
        menu: './src/scripts/menu.js',
        contact: './src/scripts/contact.js',
        about: './src/scripts/about.js',
        portfolio: './src/scripts/portfolio.js',
        singlePortfolio: './src/scripts/singlePortfolio.js',
        blogs: './src/scripts/blogs.js',
        blog: './src/scripts/blog.js',
        singlePosts: './src/scripts/singlePosts.js',
        singlePost: './src/scripts/singlePost.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/[name].bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './src/html/index.html',
            chunks: ['index']
        }),

        new HtmlWebpackPlugin({
            filename: "menu/index.html",
            template: './src/html/menu.html',
            chunks: ['menu']
        }),

        new HtmlWebpackPlugin({
            filename: "contact/index.html",
            template: './src/html/contact.html',
            chunks: ['contact']
        }),

        new HtmlWebpackPlugin({
            filename: "about/index.html",
            template: './src/html/about.html',
            chunks: ['about']
        }),

        new HtmlWebpackPlugin({
            filename: "portfolio/index.html",
            template: './src/html/portfolio.html',
            chunks: ['portfolio']
        }),

        new HtmlWebpackPlugin({
            filename: "single-portfolio/index.html",
            template: './src/html/single-portfolio.html',
            chunks: ['singlePortfolio']
        }),

        new HtmlWebpackPlugin({
            filename: "blogs/index.html",
            template: './src/html/blogs.html',
            chunks: ['blogs']
        }),

        new HtmlWebpackPlugin({
            filename: "blog/index.html",
            template: './src/html/blog.html',
            chunks: ['blog']
        }),

        new HtmlWebpackPlugin({
            filename: "single-posts/index.html",
            template: './src/html/single-posts.html',
            chunks: ['singlePosts']
        }),

        new HtmlWebpackPlugin({
            filename: "single-post/index.html",
            template: './src/html/single-post.html',
            chunks: ['singlePost']
        }),


        new MiniCssExtractPlugin({
            filename: '[name]/[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
                type: 'asset/inline'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }
        ]
    },
    ...devServer(develop),
});