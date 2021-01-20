import webpack, {ProgressPlugin} from "webpack";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import path from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"

export default (env) => ({
    entry: './index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        }
    },
    resolveLoader: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
        sockPort: 80,
        historyApiFallback: true,
    },
    devtool: env.mode === 'production' ? 'source-map' : "inline-source-map",
    mode: env.mode ?? 'development',
    output: {
        publicPath: "/",
        path: path.join(__dirname, 'out'),
        filename: env.mode === 'production' ? '[name].[contenthash].js' : '[name].[hash].js',
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendor: {
                    name: 'node_modules',
                    test: new RegExp('/node_modules/'),
                    chunks: 'all',
                },
                src: {
                    test: new RegExp('@njmaeff/website-ui/'),
                    chunks: "all",
                    minSize: 0,
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        },
        moduleIds: "hashed"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192 // in bytes
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            // gifsicle: {
                            //     interlaced: false,
                            // },
                            // // the webp option will enable WEBP
                            // webp: {
                            //     quality: 75
                            // }
                        }
                    },
                    {
                        loader: '@njmaeff/webpack-loader-image',
                        options: {
                            skip: () => false,
                            placeholder: false
                        }
                    }
                ]
            },
            {
                test: /\.md(x)?$/,
                use: ['babel-loader', '@mdx-js/loader']
            },
            {
                test: /\.svg$/,
                use: [
                    '@svgr/webpack',
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192 // in bytes
                        }
                    },
                    'image-webpack-loader'
                ],
            },
        ]
    },
    plugins: [
        new ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        ...(env.bundleanalyzer ? [new BundleAnalyzerPlugin()] : [])
    ]
} as webpack.Configuration);
