---
comment: false
---

# Nuxt 服务端渲染

::: tip 介绍
Nuxt.js 是一个基于 Vue.js 的通用应用框架。

通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI 渲染。

我们的目标是创建一个灵活的应用框架，你可以基于它初始化新项目的基础结构代码，或者在已有 Node.js 项目中使用 Nuxt.js。

Nuxt.js 预设了利用 Vue.js 开发服务端渲染的应用所需要的各种配置。

除此之外，我们还提供了一种命令叫：nuxt generate ，为基于 Vue.js 的应用提供生成对应的静态站点的功能。

我们相信这个命令所提供的功能，是向开发集成各种微服务（Microservices）的 Web 应用迈开的新一步。

作为框架，Nuxt.js 为 客户端/服务端 这种典型的应用架构模式提供了许多有用的特性，例如异步数据加载、中间件支持、布局支持等。
:::

## 安装

### 上手模板

```
npx create-nuxt-app <项目名>
```

### 从零建 Nuxt 项目

```
mkdir <项目名>
cd <项目名>
```

#### 新建 package.json 文件

```
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt"
  }
}
```

#### 安装 nuxt

```
npm install --save nuxt
npm run dev
```

## 目录结构

```
.nuxt                Nuxt自动生成，临时的用于编辑的文件，build
assets               用于组织未编译的静态资源如LESS、SASS或JavaScript
components           用于自己编写的Vue组件，比如波动组件、日历组件、分页组件
layouts              布局目录，用于组织应用的布局组件，不可更改
middleware           用于存放中间件
pages                用于存放写的页面，我们主要的工作区域
plugins              用于存放JavaScript插件的地方
static               用于存放静态资源文件，比如图片
store                用于组织应用的Vuex 状态管理
.editorconfig        开发工具格式配置
.eslintrc.js         ESLint的配置文件，用于检查代码格式
.gitignore           配置git不上传的文件
nuxt.config.json     用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
package-lock.json    npm自动生成，用于帮助package的统一设置的，yarn也有相同的操作
package.json         npm 包管理配置文件
```

## 配置

### build

Nuxt.js 允许你在自动生成的 vendor.bundle.js 文件中添加一些模块，以减少应用 bundle 的体积。如果你的应用依赖第三方模块，这个配置项是十分实用的。

### css

该配置项用于定义应用的全局（所有页面均需引用的）样式文件、模块或第三方库。

### dev

该配置项用于配置 Nuxt.js 应用是开发还是生产模式。

### env

该配置项用于定义应用客户端和服务端的环境变量。

### generate

该配置项用于定义每个动态路由的参数，Nuxt.js 依据这些路由配置生成对应目录结构的静态文件。

### head

该配置项用于配置应用默认的 meta 标签。

### loading

该配置项用于个性化定制 Nuxt.js 使用的加载组件。

### modules

该配置项允许您将 Nuxt 模块添加到项目中。

### modulesDir

该配置项允许您定义 Nuxt.js 应用程序的 node_modules 文件夹。

### plugins

该配置项用于配置那些需要在 根 vue.js 应用 实例化之前需要运行的 Javascript 插件。

### rootDir

该配置项用于配置 Nuxt.js 应用的根目录。

### router

该配置项可用于覆盖 Nuxt.js 默认的 vue-router 配置。

## 路由

::: tip 提示
要在页面之间使用路由，建议使用`<nuxt-link>`标签。
例如：

```
<template>
  <nuxt-link to="/">首页</nuxt-link>
</template>
```

:::

### 基础路由

假设 pages 的目录结构如下：

```js
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```

那么，Nuxt.js 自动生成的路由配置如下：

```js
router: {
	routes: [
		{
			name: "index",
			path: "/",
			component: "pages/index.vue"
		},
		{
			name: "user",
			path: "/user",
			component: "pages/user/index.vue"
		},
		{
			name: "user-one",
			path: "/user/one",
			component: "pages/user/one.vue"
		}
	];
}
```

### 动态路由

在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的以下划线作为前缀的 Vue 文件 或 目录

目录结构：

```js
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue
```

Nuxt.js 生成对应的路由配置表为：

```js
router: {
	routes: [
		{
			name: "index",
			path: "/",
			component: "pages/index.vue"
		},
		{
			name: "users-id",
			path: "/users/:id?",
			component: "pages/users/_id.vue"
		},
		{
			name: "slug",
			path: "/:slug",
			component: "pages/_slug/index.vue"
		},
		{
			name: "slug-comments",
			path: "/:slug/comments",
			component: "pages/_slug/comments.vue"
		}
	];
}
```

### 路由参数校验

Nuxt.js 可以让你在动态路由组件中定义参数校验方法。  
举个例子： pages/users/\_id.vue

```js
export default {
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
}

如果校验方法返回的值不为 true或Promise中resolve 解析为false或抛出Error
Nuxt.js 将自动加载显示 404 错误页面或 500 错误页面。
```

::: tip 提示
若要查看具体路由可查看.nuxt 文件夹下的 router.js
:::

## 异步数据

Nuxt.js 扩展了 Vue.js，增加了一个叫 asyncData 的方法，使得我们可以在设置组件的数据之前能异步获取或处理数据。

### asyncData 方法

asyncData 方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。 在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData 方法来获取数据，Nuxt.js 会将 asyncData 返回的数据融合组件 data 方法返回的数据一并返回给当前组件

::: warning 注意
由于 asyncData 方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象
:::

```js
export default {
	async asyncData({ params }) {
		const { data } = await axios.get(`https://my-api/posts/${params.id}`);
		return { title: data.title };
	}
};
```

### 上下文对象

在服务器端调用 asyncData 时，您可以访问用户请求的 req 和 res 对象。

```js
export default {
	async asyncData({ req, res }) {
		// 请检查您是否在服务器端
		// 使用 req 和 res
		if (process.server) {
			return { host: req.headers.host };
		}

		return {};
	}
};
```

### fetch 方法

如果页面组件设置了 fetch 方法，它会在组件每次加载前被调用（在服务端或切换至目标路由之前）

```js
<template>
  <h1>Stars: {{ $store.state.stars }}</h1>
</template>

<script>
export default {
  async fetch ({ store, params }) {
    await store.dispatch('GET_STARS');
  }
}
</script>
```

::: tip 总结
asyncData 用于服务端渲染，fetch 用于异步调用 vuex
:::

## 中间件

在应用中的特定页面设置中间件

```js
pages/secret.vue：

<template>
  <h1>Secret page</h1>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>

middleware/authenticated.js：

export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
```

### 插件

plugins 属性配置的所有插件会在 Nuxt.js 应用初始化之前被加载导入。

每次你需要使用 Vue.use() 时，你需要在 plugins/ 目录下创建相应的插件文件，并在 nuxt.config.js 中的 plugins 配置项中配置插件的路径。

```js
nuxt.config.js：

module.exports = {
  plugins: ['~plugins/vue-notifications']
}

plugins/vue-notifications.js：

import Vue from 'vue'
import VueNotifications from 'vue-notifications'

Vue.use(VueNotifications)
```
