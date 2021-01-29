---
comment: false
---

# webpack

::: tip 简介

本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。在 webpack 中，一切都是模块。
:::

## 1、什么是 webpack?

现今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的 JavaScript 代码和一大堆依赖包。为了简化开发的复杂度，前端社区涌现出了很多好的实践方法

-   <b>模块化</b> 让我们可以把复杂的程序细化为小的文件

-   类似于 TypeScript 这种在 JavaScript 基础上拓展的开发语言：使我们能够实现目前版本的 JavaScript 不能直接使用的特性，并且之后还能转换为 JavaScript 文件使浏览器可以识别并兼容老版本的浏览器

-   工程化开发 Vue、React 项目

-   Scss，less 等 CSS 预处理器

-   将代码打包的同时进行混淆，提高代码的安全性

-   ...

## 2、安装

```js
//全局安装
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack
```

## 3、打包

```js
//默认会打包当前目录下的 webpack.config.文件
webpack

//--config可以指定要打包的文件
webpack --config ./build/webpack.config.js
```

## 4、配置

1、入口、输出

```js
// webpack.config.js
module.exports = {
    //已多次提及的唯一入口文件
    entry: __dirname + "/app/main.js",
    //打包后的文件存放的地方
    output: {
        path: __dirname + "/public",
        //打包后输出文件的文件名
        filename: "bundle.js",
    },
};
```

> 注：\_\_dirname 是 node.js 中的一个全局变量，它指向当前执行脚本所在的目录。

2、构建本地开发服务器

```js
//本地开发服务器
npm i webpack-dev-server -D

// webpack.config.js
const path = require('path');
module.exports = {
    entry: path.join(__dirname, "/src/index.js"), // 入口文件
    output: {
        path: path.join( __dirname, "/dist"), //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./dist", // 本地服务器所加载文件的目录
        port: "8088",   // 设置端口号为8088
        inline: true, // 文件修改后实时刷新
        historyApiFallback: true, //不跳转
    }
}

//package.json增加npm run dev命令
{
  "name": "webpack-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.23.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  }
}
```

3、loader

::: tip loader
loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。

本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。
:::

```js
//编辑vue
{
    test: /\.vue$/,
    use: ["vue-loader"]
},
//编辑css
{
    test: /\.css$/,
    // exclude: /node_modules/,
    use: [styleLoader, "css-loader"]
},
//编辑sass
{
    test: /\.scss/,
    exclude: /node_modules/,
    use: [{
            loader: styleLoader // creates style nodes from JS strings
        },
        {
            loader: "css-loader" // translates CSS into CommonJS
        },
        {
            loader: "sass-loader" // compiles Sass to CSS
        }
    ]
},
//编辑svg图片
{
    test: /\.svg$/,
    loader: "svg-sprite-loader",
    include: [path.resolve(rootPath, "src/icons")],
    options: {
        symbolId: "icon-[name]"
    }
},
//编辑图片
{
    test: /\.(eot|png|jpe?g|gif|svg)(\?.*)?$/,
    exclude: [path.resolve(rootPath, "src/icons")],
    use: [{
        loader: "url-loader",
        options: {
            limit: 6000,
            name: "images/[name].[hash:7].[ext]" // 将图片都放入images文件夹下，[hash:7]防缓存
        }
    }]
},
//编辑图标
{
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    use: [{
        loader: "url-loader",
        options: {
            limit: 6000,
            name: "fonts/[name].[hash:7].[ext]" // 将字体放入fonts文件夹下
        }
    }]
}
```

4、plugins

::: tip plugins
插件（Plugins）是用来拓展 Webpack 功能的，它们会在整个构建过程中生效，执行相关的任务。
Loaders 和 Plugins 常常被弄混，但是他们其实是完全不同的东西，可以这么来说，loaders 是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个，插件并不直接操作单个文件，它直接对整个构建过程其作用。
:::

常用 plugin

```js
//构建单页应用入口输出的模板html
"html-webpack-plugin";
//每次打包前清除上次打包文件
"clean-webpack-plugin";
//压缩css
"optimize-css-assets-webpack-plugin";
//压缩js
"terser-webpack-plugin";
//将css从js文件中提取出来
"mini-css-extract-plugin";
//模块热更替
webpack.HotModuleReplacementPlugin();
//开启多线程打包，加快打包速度
("happypack");
//开启打包缓存
("hard-source-webpack-plugin");
```

5、分包

::: tip splitChunks
提取被重复引入的文件，单独生成一个或多个文件，这样避免在多入口重复打包文件
:::

```js
module.exports = {
    //...
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: "~",
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
};
```
