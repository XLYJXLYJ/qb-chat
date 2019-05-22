const path = require('path')
const webpack = require('webpack')
// 引入 移动端模拟开发者工具 插件 （另：https://github.com/liriliri/eruda）
// const vConsolePlugin = require('vconsole-webpack-plugin');ƒ
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const plugins = []
function resolve (dir) {return path.join(__dirname, dir)}
// vue.config.js
const externals = {
    'vue': "Vue",
    'vuex': 'Vuex',
    'axios': 'axios',
    'element-ui':'ELEMENT',
}
const cdn = {
    // 开发环境
    dev: {
        js: [
            'https://lib.baomitu.com/vue/2.6.6/vue.min.js',
            'https://lib.baomitu.com/vuex/3.0.1/vuex.min.js',
            'https://lib.baomitu.com/axios/0.18.0/axios.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.8.2/index.js',
        ]
    },
    // 生产环境
    build: {
        js: [
            'https://lib.baomitu.com/vue/2.6.6/vue.min.js',
            'https://lib.baomitu.com/vuex/3.0.1/vuex.min.js',
            'https://lib.baomitu.com/axios/0.18.0/axios.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.8.2/index.js',
        ]
    }
}
module.exports = {
    // 公共路径配置
    publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
    //文件生成目录 ，默认dist
    outputDir:'dist',

    //静态文件生成目录 
    //Default: ''
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir:'',
 
    //Default: 'index.html'
    //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath:'index.html',

    //hash生成 需要html为生成文件
    filenameHashing:true,
    //多页面配置
    pages:{
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/platform.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `platform.html`。
        platform: 'src/platform.js'
        
     },
    //对内部的 webpack 配置进行更细粒度的修改 https://github.com/neutrinojs/webpack-chain see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack :config => {
        // console.log(config)
        //cdn自动引入配置
        // if (process.env.IS_ANALYZ) {
        // config.plugin('webpack-report')
        //     .use(BundleAnalyzerPlugin, [{
        //     analyzerMode: 'static',
        // }]);
        // }
        // console.log(config.plugin('html'))
        // config.plugins.delete('preload');
        // config.plugins.delete('prefetch');
        // config.plugin('html').tap(args => {
        //     args[0].cdn = cdn.build
        //     return args
        // })
        //  config.plugins.delete('html')
        // 路径别名配置
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('pages',resolve('src/pages'))
            .set('store',resolve('src/store'))
            .set('service',resolve('src/service'))
            .set('router',resolve('src/router'))
            .set('theme',resolve('src/theme'))
        
    },
    configureWebpack: config => {
         
         // 列出项不打包进入项目文件
        if(IS_PROD){
            // Object.assign(config, {
            //     externals: externals
            // })
            // plugins.push(
            //     new PurgecssPlugin({
            //         paths: glob.sync([
            //           path.join(__dirname, './../src/index.html'),
            //           path.join(__dirname, './../**/*.vue'),
            //           path.join(__dirname, './../src/**/*.js')
            //         ])
            //     })
            // );
            //gzip
            // plugins.push(
            //     new CompressionWebpackPlugin({
            //         filename: '[path].gz[query]',
            //         algorithm: 'gzip',
            //         test: productionGzipExtensions,
            //         threshold: 10240,
            //         minRatio: 0.8
            //     })
            // );
        // }else{

        // }
        //dll 文件处理
        // plugins.push(
        //     new webpack.DllReferencePlugin({
        //         // context: process.cwd(),
        //         manifest: require('./public/vendor/vendor-manifest.json')
        //     })
        // )
        // plugins.push(
        //     new AddAssetHtmlPlugin({
        //         // dll文件位置
        //         filepath: path.resolve(__dirname, './public/vendor/*.js'),
        //         // // dll 引用路径
        //         publicPath: './vendor',
        //         // dll最终输出的目录
        //         outputPath: './vendor'
        //       })
        // )
        config.plugins = [
            ...config.plugins,
            ...plugins
        ];
        
    }
    },
    css: {
        // 启用 CSS modules
        modules: false,
        // 是否使用css分离插件
        extract: false,
        // 开启 CSS source maps，一般不建议开启
        sourceMap: false
    },
    // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
    devServer: {
         host: 'localhost',
        // host: "0.0.0.0",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
        hotOnly: true, // 热更新
        // proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
        proxy: { //配置自动启动浏览器
            "/api": {
                target: "http://test.merchant.qb-tech.net",
                changeOrigin: true,
                // ws: true,//websocket支持
                // secure: false
                pathRewrite: {
                    '^/api': ''
                }
                
            }
        }
    },



}