---
comment: false
---

# Vue3

::: tip 简介
Vue.js 3.0 "One Piece" 正式版在今年 9 月份发布，历经 2 年多开发, 100+位贡献者, 2600+次提交, 600+次 PR，Vue3 支持 vue2 的大多数特性，更好的支持 Typescript
:::

## 1、认识 Vue3

### 1、了解相关信息

-   Vue.js 3.0 "One Piece" 正式版在今年 9 月份发布
-   Vue.js
-   Vue.js Vue3 支持 vue2 的大多数特性
-   Vue.js

### 1、性能提升

-   打包大小减少 41%
-   初次渲染快 55%, 更新渲染快 133%
-   内存减少 54%
-   使用 Proxy 代替 defineProperty 实现数据响应式
-   重写虚拟 DOM 的实现和 Tree-Shaking

### 2、新增特性

-   Composition (组合) API
-   setup
    -   ref 和 reactive
    -   computed 和 watch
    -   新的生命周期函数
    -   provide 与 inject
-   新组件
    -   Fragment - 文档碎片
    -   Teleport - 瞬移组件的位置
    -   Suspense - 异步加载组件的 loading 界面
-   其它 API 更新
    -   全局 API 的修改
    -   将原来的全局 API 转移到应用对象
    -   模板语法变化

## 2、创建 Vue3 项目

-   文档: https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

### 1、使用 vue-cli 创建

```
安装或者升级
npm install -g @vue/cli
保证 vue cli 版本在 4.5.0 以上
vue --version
创建项目
vue create my-project
```

### 2、使用 vite 创建

-   文档: https://v3.cn.vuejs.org/guide/installation.html
-   vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发
-   它做到了本地快速开发启动, 在生产环境下基于 Rollup 打包。
    -   快速的冷启动，不需要等待打包操作
    -   即时的热模块更新，替换性能和模块数量的解耦让更新飞起
    -   真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变

## 3、Composition API(常用部分)

### 1、setup

-   新的 option, 所有的组合 API 函数都在此使用, 只在初始化时执行一次
-   函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用

### 2、ref

-   作用: 定义一个数据的响应式
-   语法: const xxx = ref(initValue)
    -   创建一个包含响应式数据的引用(reference)对象
    -   js 中操作数据: xxx.value
    -   模板中操作数据: 不需要.value
-   一般用来定义一个基本类型的响应式数据

### 3、reactive

-   作用: 定义多个数据的响应式
-   const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
-   响应式转换是“深层的”：会影响对象内部所有嵌套的属性
-   内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的

### 4、比较 Vue2 与 Vue3 的响应式

#### 4.1、vue2 的响应式

-   核心
    -   对象: 通过 defineProperty 对对象的已有属性值的读取和修改进行劫持(监视/拦截)
    -   数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持

```js
Object.defineProperty(data, "count", {
    get() {},
    set() {},
});
```

-   问题

    -   对象直接新添加的属性或删除已有属性, 界面不会自动更新
    -   直接通过下标替换元素或更新 length, 界面不会自动更新 arr[1] = {}

#### 4.2、vue3 的响应式

-   核心
    -   通过 Proxy(代理): 拦截对 data 任意属性的任意(13 种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...
    -   通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作

```js
new Proxy(data, {
    // 拦截读取属性值
    get(target, prop) {
        return Reflect.get(target, prop);
    },
    // 拦截设置属性值或添加新属性
    set(target, prop, value) {
        return Reflect.set(target, prop, value);
    },
    // 拦截删除属性
    deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    },
});
```

### 5、setup 细节

-   setup 执行的时机

    -   在 beforeCreate 之前执行(一次), 此时组件对象还没有创建
    -   this 是 undefined, 不能通过 this 来访问 data/computed/methods / props
    -   其实所有的 composition API 相关回调函数中也都不可以

-   setup 的返回值

    -   一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
    -   返回对象中的属性会与 data 函数返回对象的属性合并成为组件对象的属性
    -   返回对象中的方法会与 methods 中的方法合并成功组件对象的方法
    -   如果有重名, setup 优先
    -   一般不要混合使用: methods 中可以访问 setup 提供的属性和方法, 但在 setup 方法中不能访问 data 和 methods
    -   setup 不能是一个 async 函数: 因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性数据

-   setup 的参数
    -   setup(props, context) / setup(props, {attrs, slots, emit})
    -   props: 包含 props 配置声明且传入了的所有属性的对象
    -   attrs: 包含没有在 props 配置中声明的属性的对象, 相当于 this.\$attrs
    -   slots: 包含所有传入的插槽内容的对象, 相当于 this.\$slots
    -   emit: 用来分发自定义事件的函数, 相当于 this.\$emit

### 6、setup 细节

-   是 Vue3 的 composition API 中 2 个最重要的响应式 API
-   ref 用来处理基本类型数据, reactive 用来处理对象(递归深度响应式)
-   如果用 ref 对象/数组, 内部会自动将对象/数组转换为 reactive 的代理对象
-   ref 内部: 通过给 value 属性添加 getter/setter 来实现对数据的劫持
-   reactive 内部: 通过使用 Proxy 来实现对对象内部所有数据的劫持, 并通过 Reflect 操作对象内部数据
-   ref 的数据操作: 在 js 中要.value, 在模板中不需要(内部解析模板时会自动添加.value)

### 7、setup 细节

-   computed 函数:

    -   与 computed 配置功能一致
    -   只有 getter
    -   有 getter 和 setter

-   watch 函数
    -   与 watch 配置功能一致
    -   监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
    -   默认初始时不执行回调, 但可以通过配置 immediate 为 true, 来指定初始时立即执行第一次
    -   通过配置 deep 为 true, 来指定深度监视
-   watchEffect 函数
    -   不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
    -   默认初始时就会执行第一次, 从而可以收集需要监视的数据
    -   监视数据发生变化时回调

### 8、生命周期

#### 8.1、与 2.x 版本生命周期相对应的组合式 API

-   beforeCreate -> 使用 setup()
-   created -> 使用 setup()
-   beforeMount -> onBeforeMount
-   mounted -> onMounted
-   beforeUpdate -> onBeforeUpdate
-   updated -> onUpdated
-   beforeDestroy -> onBeforeUnmount
-   destroyed -> onUnmounted
-   errorCaptured -> onErrorCaptured

#### 8.2、新增的钩子函数

-   onRenderTracked
-   onRenderTriggered

### 9、自定义 hook 函数

-   使用 Vue3 的组合 API 封装的可复用的功能函数
-   自定义 hook 的作用类似于 vue2 中的 mixin 技术
-   自定义 Hook 的优势: 很清楚复用功能代码的来源, 更清楚易懂

### 10、toRefs

-   把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
-   应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
-   问题: reactive 对象取出的所有属性值都是非响应式的
-   解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性

## 4、其它新组合和 API

### 1、Fragment(片断)

-   在 Vue2 中: 组件必须有一个根标签
-   在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中
-   好处: 减少标签层级, 减小内存占用

### 2、Teleport(瞬移)

-   Teleport 提供了一种干净的方法, 让组件的 html 在父组件界面外的特定标签(很可能是 body)下插入显示

### 3、Suspense(不确定的)

-   它们允许我们的应用程序在等待异步组件时渲染一些后备内容，可以让我们创建一个平滑的用户体验
