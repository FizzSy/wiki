---
comment : false
---

# Wepy 

## 搭建项目

```
npm install wepy-cli -g
wepy init standard myproject
cd myproject
npm  install
wepy build --watch
```

## 目录结构

```
├── dist                   小程序运行代码目录（该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件）
├── node_modules           
├── src                    代码编写的目录（该目录为使用WePY后的开发目录）
|   ├── components         WePY组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
|   |   ├── com_a.wpy      可复用的WePY组件a
|   |   └── com_b.wpy      可复用的WePY组件b
|   ├── pages              WePY页面目录（属于完整页面）
|   |   ├── index.wpy      index页面（经build后，会在dist目录下的pages目录生成index.js、index.json、index.wxml和index.wxss文件）
|   |   └── other.wpy      other页面（经build后，会在dist目录下的pages目录生成other.js、other.json、other.wxml和other.wxss文件）
|   └── app.wpy            小程序配置项（全局数据、样式、声明钩子等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
└── package.json           项目的package配置
```

::: tip 建议
wepy继承了wx对象的方法，建议在wepy框架开发中不要用到wx对象的方法，虽然运行时效果是一样，但是打包时会cli报错（wepy中没有wx对象）
:::

## methods, events

在vue中，所有方法都定义在methods里面。而在wepy中，普通方法是直接定义在class类方法里面。events只定义组件间交互的方法。methods只定义事件方法。

``` js
# index.wpy
getSliderImg (data) { // 普通方法
  this.sliderImg = data.slice(0, 10)
  this.$apply()
}
onPullDownRefresh () {  // 顶部下拉刷新
  this.showToast()
  this.sliderImg = null
  this.active = true
  this.$apply()
  this.getMovies()
}
events = {  // 与子组件的交互，都要写到events里面
  'showMovieDetail': (id) => {
    wepy.navigateTo({
      url: `./movie-detail?locationId=${290}&movieId=${id}`
    })
  }
}
methods = {
  toggleType (flag) { // 点击事件方法
    this.active = flag
    this.showToast()
    this.getMovies()
  }
}
```

## 事件传值

``` js
# template
<view data-movie="{{movie}}" @tap="showMovie"></view>

# script
methods = {
  showMovie (e) {
    console.log(e.currentTarget.dataset.movie) // 这样就可以获取到data属性绑定的对象
  }
}
```

## 组件传值

``` js 
<child :data.sync="data"></child> // 动态绑定数据需要sync修饰符
```

## 动态绑定class

``` js
<view class="class-a {{true ? 'class-b' : 'class-c'}}">
```

## 循环渲染组件

wepy的循环渲染组件，必须使用 <repeat/>标签，或者微信官方的<block/>标签(这两个标签不会渲染到视图层）否则就不会渲染成功

``` js
# wepy 提供的repeat组件
<view class="movie" wx:if="{{movies}}">
  <repeat for="{{movies}}" key="index" index="index" item="item">
    <movie :movie.sync="item"></movie>
  </repeat>
</view>
```

## globalData

``` js
this.$parent.globalDta.prop
```

## 版本

```
目前全局安装wepy脚手架是下载最新版本的wepy(2.0)，但是该版本的wepy在运行项目热更新
非常慢(一次保存大概要过5s页面才渲染完)，严重影响开发效率，github也有人提issue
但官方并没有给出回答。
所以我开发还是使用的1.7x版本,安装1.7x版本如下命令：
//查看版本
npm ls -g --depth=0

//卸载 wepy-cli
npm uninstall -g wepy-cli

//安装特定版本 @1.7.2
npm install -g wepy-cli@1.7.2
```

::: warning 注意
全局安装 CLI 会覆盖老版本的 CLI 工具，新版本的 CLI 无法编译老版本的代码。因此，如果需要同时维护 WePY 1.7.x 和 WePY 2.0.x 的开发者，应当考虑在当前项目安装 CLI，而非全局安装。可以直接使用 1.7.x 的 CLI 去初始化 2.0.x 的项目，如下：$ wepy init standard#2.0.x myproj
:::