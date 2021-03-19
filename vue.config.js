const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html)(\?.*)?$/i;
const TerserWebpackJsPlugin = require("terser-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    publicPath: "./",
    productionSourceMap: false,

    outputDir: "dist-web-pc",
    assetsDir: "assets",

    lintOnSave: true,
    // webpack配置
    pwa: {},

    devServer: {
        port: 3004,
        https: false,
        hot: true,
        disableHostCheck: true,
        hotOnly: true, // https:{type:Boolean}
        proxy: {
            '/webmanage':{
                target:'http://192.168.0.81:50523/',
                changeOrigin:true,
                ws:true,
            }
        },
        before: app => { }
    },

    pluginOptions: {},
    configureWebpack: (config) => {
        if (isProd) {
            config.plugins.push(
                new CompressionWebpackPlugin({
                    algorithm: "gzip",
                    test: productionGzipExtensions,
                    threshold: 10240,
                    minRatio: 0.8,
                })
            );
            config.plugins.push(
                new TerserWebpackJsPlugin({
                    terserOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true,
                            drop_debugger: false,
                            pure_funcs: ["console.log"] //移除console
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            )
        }
    },

    chainWebpack: (config) => {

        config.output.filename('./assets/js/[name].[hash:8].js');
        config.output.chunkFilename('./assets/js/[name].[hash:8].js');

        config.resolve.symlinks(true);
        config.set('externals', {
            vue: "Vue",
            "element-ui": "ELEMENT",
        })
        config.optimization.splitChunks({
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'all',
                    minSize: 1,
                    minChunks: 2,
                    priority: 1
                },
                vendor: {
                    name: 'chunk-libs',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10
                }
            }
        });
    }
};
