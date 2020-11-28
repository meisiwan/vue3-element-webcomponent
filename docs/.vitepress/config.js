module.exports = {
    title: 'vue-element-webcomponent', // 设置网站标题
    description: '',
    dest: './build', // 输出目录
    themeConfig: {
        search: true,
        nav: [
            { test: '主页', link: '/' },
            { test: '联系我', link: '/' },
            { test: '源码', link: '/' },
        ],
        sidebar: [
            {
                text: '开发', // 必要的
                link: '/', // 可选的，标题的跳转链接，应为绝对路径且路径正确
                collapsable: false, // 可选的，默认为true
                sidebarDepth: 1, // 可选的，默认1
                children: [{
                    text: '介绍', // 必要的
                    link: '/', // 可选的，标题的跳转链接，应为绝对路径且路径正确
                    sidebarDepth: 1, // 可选的，默认1
                }]
            },
            {
                text: 'Button按钮',
                link: '/button/',
                collapsable: false,
                sidebarDepth: 1
            }
        ]
    }
}