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
    silent: false,
    cssCodeSplit: true,
    //assetsInclude: () => true,
    port: 8000,
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    cssPreprocessOptions: {
        // scss: {
        //   additionalData: '@import "./src/assets/style/index.scss";'
        // }
    },
    jsx: 'vue',
    // 服务端渲染
    ssr: false,
    // 引入第三方的配置
    optimizeDeps: {
        include: [],
    },
    assetsDir: '',
    rollupOutputOptions: process.env.npm_lifecycle_event == 'build' ? {
        input: 'src/main.ts',
        output: {
            compact: true,
            // dir: 'docs',
            file: 'docs/main.js',
            inlineDynamicImports: true, //打包成一个文件
            entryFileNames: 'main.js',
            assetFileNames: '[name][extname]', //css等静态文件
            // chunkFileNames: "[name].js"
        }
    } : {},
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