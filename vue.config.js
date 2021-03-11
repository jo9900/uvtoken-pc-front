
const Timestamp = new Date().getTime();
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {


    publicPath:'./',
    configureWebpack: {
        output: {
            filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
            chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
        },
    },
    productionSourceMap: false,

    outputDir: 'dist-web',
    assetsDir: 'assets',

    lintOnSave: true,
    // webpack配置
    pwa: {},

    // webpack-dev-server 相关配置
    devServer: {
        port: 3000,
        https: false,
        hot: true,
        disableHostCheck: true,
        hotOnly: true,
        proxy: {
            '/webmanage':{

                target:'http://192.168.0.81:50523/',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/webmanage':'/webmanage'
                }
            }
        },
        before: app => { }
    },

    pluginOptions: {},
    configureWebpack: config => {
        if (isProduction) {
            config.plugins.push(new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            }))
        }
        if(process.env.NODE_ENV === 'production'){
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }

    },

    chainWebpack: config => {

        config.resolve.symlinks(true);

    },
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'element-ui': 'ElementUI',
        },
    },


}
