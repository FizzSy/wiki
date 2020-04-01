const path = require('path');

module.exports = {
    title: "luyuwen",
    port: '3000',
    base: "/",
    dest: "./dist",
    description: "一个兴趣使然的个人技术博客",
    head: [
        ["link", {
            rel: "icon",
            href: "/profile.jpg"
        }],
        ["meta", {
            name: "author",
            content: "luyuwen"
        }],
        ["meta", {
            name: "keywords",
            content: "一个兴趣使然的个人技术博客"
        }],
        ["meta", {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'
        }]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./")
            }
        }
    },
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: true
        },
        config: md => {
            md.set({
                breaks: true
            })
        },
        externalLinks: {
            target: '_blank',
            rel: 'noopener noreferrer'
        }
    },
    themeConfig: {
        repo: 'https://github.com/FizzSy/wiki.git',
        repoLabel: 'GitHub',
        displayAllHeaders: true,
        //logo: "/logo.png",
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '文档',
                link: '/documents/'
            },
            // {
            //     text: '个人介绍',
            //     link: '/personal/'
            // },
            {
                text: '留言',
                link: '/message/'
            }
        ],
        sidebarDepth: 1,
        sidebar: {
            '/documents/': [{
                title: '文档',
                collapsable: false,
                children: [
                    '',
                    'git',
                    'markdown',
                    'Nuxt.js',
                    'linux',
                    'jenkins',
                    'nginx',
                    'uni-app',
                    'wepy',
                    'sass',
                    'other'
                ]
            }]
        },
        lastUpdated: '上一次更新时间：',
        smoothScroll: true
    },
    plugins: [
        '@vuepress/active-header-links', //滚动条滚动左侧导航栏跟着滚动
        'vuepress-plugin-smooth-scroll',
        ['@vuepress/back-to-top', true], //回到顶部
        // ['@vuepress/medium-zoom',{
        //     selector: 'img',
        //     // See: https://github.com/francoischalifour/medium-zoom#options
        //     options: {
        //       margin: 16
        //     }
        // }],            //图片缩放
        ['vuepress-plugin-baidu-autopush'], //百度SEO推送
        //['vuepress-plugin-code-copy', true], //代码拷贝
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    avatar: 'monsterid',
                    el: '#vuepress-valine',
                    appId: 'FhVnJ7QW1RszfcxQpL1luTy1-gzGzoHsz',
                    appKey: 'xGaFHTwpiKRoWgKiOHcy2Pyf',
                    placeholder: '欢迎留言评论~',
                    notify: false,
                    verify: false,
                    pageSize: 10,
                    language: 'zh-cn'
                }
            }
        ],
    ]
    //base:"/static/",                                  //静态资源路径
    //dest:path.resolve(__dirname,"./dist/static")      //将整个打包输出到指定文件夹 默认是  .vuepress/dist
};