var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var purify = require("purifycss-webpack-plugin");
var path = require("path");
var glob = require('glob');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.marko']
    },
    module: {
        rules: [{
            test: /\.marko$/,
            loader: 'marko-loader'
        }, {
            test: /\.(css|scss|sass)$/,
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!postcss-loader!sass-loader'
            }),
        }, {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [{
                loader: 'srcset-loader',
                options: {
                    sizes: ['200w', '320w', '420w', '512w', '640w', '720w', '800w', '960w', '1024w', '1166w', '1280w', '1400w'],
                },
            }, {
                loader: 'file-loader',
                options: {
                    hash: 'sha512',
                    digest: 'hex',
                    outputPath: './images/',
                    name: '[name].[hash:7].[ext]',
                },
            }, {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        quality: 65,
                    },
                    pngquant: {
                        quality: '65-90',
                        speed: 4,
                    },
                    svgo: {
                        plugins: [{
                            removeViewBox: false,
                        }, {
                            removeEmptyAttrs: false,
                        }],
                    },
                },
            }],
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        /*
          new HtmlWebpackPlugin({
              title: 'Project Demo',
              // minify: { collapseWhitespace: true },
              inject: 'body',
              hash: true,
              template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
          }),
          */
        new HtmlWebpackPlugin({
            // Required
            inject: 'body',
            template: './src/index.ejs',
            // template: 'node_modules/html-webpack-template/index.ejs',
            minify: {
                collapseWhitespace: true
            },

            // Optional
            appMountId: 'myApp',
            //appMountIds: ['about', 'contact'], //e.g. multiple templates
            
            mobile: true,
            lang: 'en',
            title: 'Project Demo',
            description: 'A better default template for html-webpack-plugin.',
            Keywords: 'Awwwards are the Website Awards that recognize and promote the talent and effort of the best developers, designers and web agencies in the world.',
            url: 'localhost:8080',
            site: 'myApp.com',
            creator: '© J Quinn 2017',
            image: 'https://assets.awwwards.com/awards/sites_of_the_day/2016/12/awwwards-sotd-monochrome.jpg',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            // And any other config options from html-webpack-plugin:
            // https://github.com/ampedandwired/html-webpack-plugin#configuration
        }),
        /*
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        */
        new FaviconsWebpackPlugin({
            // Your source logo
            logo: './src/logo.png',
            // The prefix for all image files (might be a folder or a name)
            prefix: 'icons/',
            // Emit all stats of the generated icons
            emitStats: false,
            // The name of the json containing all favicon information
            statsFilename: 'iconstats.json',
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,
            // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
            background: '#fff',
            // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
            title: 'Webpack App',

            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: false,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        }),
        new purify({
            basePath: __dirname,
            paths: [
                "./src/intro.marko",
            ]
        })
    ]
}
