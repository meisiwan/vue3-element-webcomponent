const path = require('path');
module.exports = {
    /**
    * 在生产中服务时的基本公共路径。
    * @default '/'
    */
    base: './',
    /**
     * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
     * @default 'dist'
     */
    pages: {
        index: {
            // 入口文件
            entry: 'src/main.ts',　　/*这个是根入口文件*/
            // 模板文件
            template: './index.html',
            // 输出文件
            filename: 'index.html',
            // 页面title
            title: 'vue-element-webcomponent'
        },
        // 简写格式
        // 模板文件默认是 `public/subpage.html`
        // 如果不存在，就是 `public/index.html`.
        // 输出文件默认是 `subpage.html`.
        subpage: 'src/main.js'　　　　/*注意这个是*/
    },
    outDir: 'dist',
    assetsDir: '',
    port: 3000,
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    cssPreprocessOptions: {
        // scss: {
        //   additionalData: '@import "./src/assets/style/index.scss";'
        // }
    },
    // 服务端渲染
    ssr: false,
    // 引入第三方的配置
    optimizeDeps: {
        include: [],
    },
    rollupOutputOptions: {
    },
    sourcemap: false,
    minify: 'terser',
    alias: {
        // 键必须以斜线开始和结束
        'vue': 'vue/dist/vue.esm-bundler.js',
        '/@/': path.resolve(__dirname, './src'),
        '/@components/': path.resolve(__dirname, './src/components')
    },
    proxy: {

    }
}