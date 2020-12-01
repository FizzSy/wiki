---
comment: false
---

# Sass

::: tip 介绍
Sass (英文全称：Syntactically Awesome Stylesheets) 是一个最初由 Hampton Catlin 设计并由 Natalie Weizenbaum 开发的层叠样式表语言。

Sass 是一个 CSS 预处理器。

Sass 是 CSS 扩展语言，可以帮助我们减少 CSS 重复的代码，节省开发时间。

Sass 完全兼容所有版本的 CSS。

Sass 扩展了 CSS3，增加了规则、变量、混入、选择器、继承、内置函数等等特性。

Sass 生成良好格式化的 CSS 代码，易于组织和维护。

Sass 文件后缀为 .scss。
:::

## 1、变量

Sass 变量用于存储一些信息，它可以重复使用  
Sass 变量可以存储以下信息：

-   字符串
-   数字
-   颜色值
-   布尔值
-   列表
-   null 值

```
Sass 变量使用 $ 符号：
$variablename: value;
```

```scss
$myFont: Helvetica, sans-serif;
$myColor: red;
$myFontSize: 18px;
$myWidth: 680px;

body {
	font-family: $myFont;
	font-size: $myFontSize;
	color: $myColor;
}

#container {
	width: $myWidth;
}
```

:::tip 提示
Sass 变量的作用域只能在当前的层级上有效果
:::

## 2、嵌套

Sass 允许 CSS 选择器类似于 HTML 的嵌套规则

```scss
nav {
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		display: inline-block;
	}
	a {
		display: block;
		padding: 6px 12px;
		text-decoration: none;
	}
}
```

## 3、导入

Sass 可以让我们减少可以帮助我们减少 CSS 重复的代码，节省开发时间

Sass 支持`@import`指令,可以让我们导入其他文件等内容

:::tip 提示
CSS`@import`指令在每次调用时，都会创建一个额外的 HTTP 请求
但 Sass`@import`指令将文件包含在 CSS 中，不需要额外的 HTTP 请求
:::

```scss
colors.scss文件：$myPink: #ee82ee;
$myBlue: #4169e1;
$myGreen: #8fbc8f;

@import "colors.scss";

body {
	font-family: Helvetica, sans-serif;
	font-size: 18px;
	color: $myBlue;
}
```

## 4、混合

`@mixin` 指令允许我们定义一个可以在整个样式表中重复使用的样式  
`@include` 指令可以将混入（mixin）引入到文档中

```scss
@mixin important-text {
	color: red;
	font-size: 25px;
	font-weight: bold;
	border: 1px solid blue;
}

使用混入 .danger {
	@include important-text;
	background-color: green;
}
```

### 向混入传递变量

```scss
/* 混入接收两个参数 */
@mixin bordered($color, $width) {
	border: $width solid $color;
}

.myArticle {
	@include bordered(blue, 1px); // 调用混入，并传递两个参数
}

.myNotes {
	@include bordered(red, 2px); // 调用混入，并传递两个参数
}
```

## 5、继承

`@extend`指令告诉 Sass 一个选择器的样式从另一选择器继承

```scss
.button-basic {
	border: none;
	padding: 15px 30px;
	text-align: center;
	font-size: 16px;
	cursor: pointer;
}

.button-report {
	@extend .button-basic;
	background-color: red;
}

.button-submit {
	@extend .button-basic;
	background-color: green;
	color: white;
}
```

## 6、计算

```scss
body {
	margin: (14px/2);
	top: 50px + 100px;
	right: $var * 10%;
}
```

## 7、条件语句

```scss
p {
    @if 1 + 1 == 2 { border: 1px solid; }
    @if 5 < 3 { border: 2px dotted; }
　}
```

## 8、循环语句

```scss
@for $i from 1 to 10 {
	.border-#{$i} {
		border: #{$i}px solid blue;
	}
}
```
