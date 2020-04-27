<h1 style="text-align:center">WEB前端开发者规范</h1><br/>
<div style="page-break-after: always;"></div><!-- 手动分页 -->
## 目录 

1. [规范概述](#intro)
3. [代码注释规范](#comment)
    - [HTML注释](#comment-html)
    - [CSS注释](#comment-css)
    - [JavaScript注释](#comment-js)
    - [SVN、Git提交日志](#comment-svn-git)
4. [命名规范](#naming-notations)
   - [项目命名](#naming-project)
   - [文件夹命名](#naming-folder)
   - [HTML命名](#naming-html)
   - [CSS命名](#naming-css)
   - [JavaScript命名](#naming-js)
   - [Vue命名](#naming-vue)
   - [Vue-Router命名](#naming-vue-router)
   - [图片命名](#naming-picture)
5. [通用约定](#general)
   - [编码](#encoding)
   - [缩进](#indentation)
   - [文档目录结构](#directory)
   - [分离](#separate)
   - [待办事项](#todo)
6. [HTML](#html)
   - [语法](#html-general)
   - [HTML doctype](#doctype)
   - [语言属性](#lang)
   - [IE 兼容模式](#ie)
   - [字符编码](#charset)
   - [引入 CSS 和 JavaScript 文件](#links)
   - [属性顺序](#attr)
   - [布尔（boolean）型属性](#boolean)
   - [减少标签的数量](#less-tag)
7. [CSS](#css)
   - [语法](#css-general)
   - [声明顺序](#order)
   - [媒体查询（Media query）的位置](#media-query)
   - [带前缀的属性](#prefix)
   - [单行规则声明](#one-line)
   - [简写形式的属性声明](#short)
   - [Less 和 Sass 中的嵌套](#nest)
   - [注释](#css-comment)
   - [class 命名](#class-name)
   - [选择器](#selector)
8. [JavaScript](#javascript)
   - [变量](#var)
   - [常量](#const)
   - [分号](#semicolon)
   - [多行字符串](#multi-line-string)
   - [命名](#name)
   - [大括号](#brackets)
   - [缩进](#indentation)
   - [空行](#space-line)
   - [引号](#quotation-mark)
   - [注释](#javascript-comment)	
9. [图像](#img)
   - [图像压缩](#img-compress)
   - [背景图](#background-image)
   - [前景图](#image)
    - [Sprite](#sprite)
10. [vue](#vue)
    - [必须的](#vue-necessary)
    - [强烈推荐的](#vue-recommend)
11. [编码规范建议](#recommendation)
     - [编码规范建议细则](#recommendation-item)
     - [技术方案选型](#recommendation-technology)
     - [开发集成环境](#recommendation-IDE)
12. [参考资料](#reference)

<div style="page-break-after: always;"></div><!-- 手动分页 -->
<a name="intro"></a>

## 规范概述

基本准则

本规范的一条基本原则即是：使前端产出的代码更加符合Web标准化，语义化。因此在实际工作当中遇到规范中没有规定的情况，也应遵循标准化和语义化的原则，并同时兼故页面性能和后期维护的便利性。代码要求尽量简洁，清晰，有序。尽可能减少服务器负载，以保证服务器的最快响应速度。

<div style="page-break-after: always;"></div><!-- 手动分页 -->


<a name="comment"></a>

## 代码注释规范

好的命名与代码组织优于注释。如果你为代码添加了注释，在对代码进行改动的时候记得更新它。

- HTML注释： 注释格式 `<!--这儿是注释-->`， '--'只能在注释的始末位置，不可置入注释文字区域
- CSS注释：注释格式 `/*这儿是多行注释*/`，`// 这是单行注释`
- JS注释： 注释格式 `//这儿是单行注释` ；`/* 这儿是多行注释 */`
- 提交代码至SVN 、Git等代码仓库时，应当添加提交内容所对应的注释说明。

<a name="comment-html"></a>

####  HTML注释

HTML注释格式为：`<!-- comment -->`

每一块相对独立的HTML代码都应添加注释。注释添加在代码块前面，并且代码块前后都应与其他代码隔开一定空间。

<a name="comment-css"></a>

####  CSS注释

注释格式 ：

- `/*这儿是多行注释*/`
- `// 这是单行注释`

#####  文件头部注释

每个CSS文件头部都应有文件注释，描述文件的功能，范围，创建时间，作者等，格式如下：

```css
/**
*  @name 样式表名称
*  @description 样式表功能描述
*  @author 作者
*  @createtime 创建时间
**/
```


#####  代码块注释

每个大代码块都应有注释，其下为小代码块，并与其他代码块分隔开。格式如下：

```css
/*---------  大模块功能描述  ---------*/

/* 小模块1描述 */
/* ...... */
/* 小模块n描述 */
```

<a name="comment-js"></a>

####  JavaScript注释

JS注释格式：

- 单行：`// comment` 
-  多行： `/* comment */`

每个完整的功能都应有注释。在其命名空间前加上详细注释，以描述其功能，参数，调用方式，依赖方法等。格式如下：

```javascript
/**
 * @name 函数名称
 * @param 参数名：默认值 {参数类型} 参数描述
 * @param 参数名：默认值 {参数类型} 参数描述
 * @param 参数名：默认值 {参数类型} 参数描述
 * @returns 返回值：{返回值类型} 返回值描述
 * @callback 回调函数
 * @description 函数功能描述
 **/
```

<a name="comment-svn-git"></a>

####  SVN、Git提交日志

提交任何内容、任何操作到svn、git等远程仓库，须写日志，日志格式如下：

```
提交者（修改者）名字
日志 #1、…#2、…
// Eg:
李保宏
#1、初始化工程
#2、添加工程所需依赖资源
#3、删除冗余资源文件
#4、更新登录请求参数…
```

<div style="page-break-after: always;"></div><!-- 手动分页 -->
<a name="naming-notations"></a>

## 命名规范

- 小写+下划线（"_"）为主要命名方式，css中类名用小写+中划线（”-“）连接，其他见以下详细描述。
- 尽量使用文件名的英文翻译作为文件名，当其英文名很复杂或很长的时候才可使用其汉语拼音命名。
- 如果文件功能类似，则应采取“前缀”+“文件名”的形式，方便使用“按名称排序”命令时，相似文件能够排列在一起。

<a name="naming-project"></a>

### 项目命名

- 小写，多个单词用"-"连接，eg：`project-name`

<a name="naming-folder"></a>

### 文件夹命名

- 小写，多个单词用"-"连接，eg：`folder-name`

<a name="naming-html"></a>

 ### HTML命名

- HTML文件命名：小写+下划线（"-"），eg：`html-filename.html`

<a name="naming-css"></a>

### CSS命名

- css文件命名：小写，多个单词用“-”连接，eg：`css-file-name.css`

- css类命名：小写，多个单词用“-”连接，eg：`class-name`

- CSS模块文件，其文件名与模块名一致；假定有这样一个模块：

  	.m-detail { sRules; }
    	.m-detail-hd { sRules; }
    	.m-detail-bd { sRules; }
    	.m-detail-ft { sRules; }

  那么该模块的文件名应该为：`m-detail.css`

  CSS页面文件，其文件名与HTML文件名一致；假定有一个HTML页面叫 `product.html`，那么其相对应的CSS页面文件名应该为：`product.css`

  假定现在有一个 `product.html`，里面有2个模块：

  	<section class="m-list">
  	<section class="m-info">

  那么开发人员能快速找到与该页面相关的3个直接CSS文件，包括：`product.css`, `m-list.css`, `m-info.css`



<a name="naming-js"></a>

### JavaScript命名

- js文件命名：小驼峰，eg：`javascriptFilename.js`
- 变量，常量，方法等命名：通常，使用 `functionNamesLikeThis`，`variableNamesLikeThis`，`ClassNamesLikeThis`，`EnumNamesLikeThis`，`methodNamesLikeThis`，和 `SYMBOLIC_CONSTANTS_LIKE_THIS`。
- 注:

  * 1.文件或类中的 私有属性，变量和方法名应该以下划线 "_" 开头。
  * 2.保护属性，变量和方法名不需要下划线开头，和公共变量名一样。

<a name="naming-vue"></a>

### Vue命名

- 组件名始终为多个单词

- 基础组件名使用特定的前缀开头，eg：`Base`、`App` 或 `V`。

- 单文件组件的文件名应该始终是单词大写开头，eg：` PascalCase`

- 私有属性名：` $_`，作为一个用户定义的私有属性，eg：`$_private`

- 单例组件名（每个页面只使用一次并且永远不接受任何 prop）：只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性，eg：`TheHeading.vue`。

- 紧密耦合的组件名：和父组件紧密耦合的子组件应该以父组件名作为前缀命名

  ```vue
  components/
  |- TodoList.vue
  |- TodoListItem.vue
  |- TodoListItemButton.vue
  ```

- 组件名中的单词顺序：组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾

  ```vue
  components/
  |- SearchButtonClear.vue
  |- SearchButtonRun.vue
  |- SearchInputQuery.vue
  |- SearchInputExcludeGlob.vue
  |- SettingsCheckboxTerms.vue
  |- SettingsCheckboxLaunchOnStartup.vue
  ```

- 完整单词的组件名：组件名应该倾向于完整单词而不是缩写，eg：`StudentDashboardSettings.vue`。

- 模板中的组件名大小写：在单文件组件和字符串模板中组件名应该总是 `PascalCase` 的——但是在 DOM 模板中总是 `kebab-case` 的。

- JS/JSX中的组件名大小写：JS/JSX中的组件名是 `PascalCase` 的;而用Vue.component 进行全局组件注册时，使用` kebab-case `字符串。

- Prop名的大小写：声明 prop 时，命名用 `camelCase`，而在模板和 JSX 中用 `kebab-case`。

<a name="naming-vue-router"></a>

### Vue-Router命名

- path: 

  - 一般路由：单词全部小写，有单词拼接使用'-'，eg：`router-name`、`all-404`、`product-detail`
  - 动态路由：非动态部分与一般路由一致，动态部分用"`:`"拼接动态变量。如：`path: '/user/:userId'`,

- name: 大驼峰，eg: `RouterName`

  ```
  {
      path: '/user/:userId',
      name: 'User',
      component: User
  }
  ```

<a name="naming-picture"></a>

### 图片命名

- 图片名小写，多个单词用"_"下划线链接，eg：“picture_name”

- 图片的名称分为头尾两部分，用下划线隔开，头部分表示此图片的大类性质
  例如：广告、标志、菜单、按钮等等。

  - 放置在页面顶部的广告、装饰图案等长方形的图片取名：` banner`

  - 标志性的图片取名为： `logo`

  - 在页面上位置不固定并且带有链接的小图片我们取名为 `button `

  - 在页面上某一个位置连续出现，性质相同的链接栏目的图片我们取名： `menu `

  - 装饰用的照片我们取名： `pic`

  - 不带链接表示标题的图片我们取名： `title`

  - 鼠标感应效果图片命名规范为`picture_on/picture_off`

    ```
    banner_sohu.gif  banner_sina.gif  menu_aboutus.gif  menu_job.gif  title_news.gif  logo_police.gif   logo_national.gif   pic_people.jpg  menu1_on.gif  menu1_off.gif
    ```

    

<div style="page-break-after: always;"></div><!-- 手动分页 -->
<a name="general"></a>

## 通用约定

<a name="encoding"></a>

### 1.编码

UTF-8为主要编码格式，在html，css，js等中应该显示申明

<a name="indentation"></a>

### 2.缩进

用两个空格代替制表符（soft-tab 即用空格代表 tab 符）。



<a name="directory"></a>

### 3.文档目录结构
**project-name**

- **build文件夹**：项目打包的webpack内容
- **config 文件夹**: 主要是指定开发和打包中的静态资源路径、要压缩的文件类型、开发使用的端口号、开发使用虚拟服务器跨域请求 api 等。这是显示构建设置的一些最常见配置选项的主配置文件。
  - index.js：基础的配置信息
  - dev.env.js：开发环境的配置信息
  - prod.env.js：线上的配置信息

- **node_modules文件夹**: 项目的依赖库；

- **src 文件夹**： 项目源码

  - assets文件夹：样式相关的css，js，图片等资源
  - components文件夹：项目用到的小组件
  - router文件夹：项目的路由
  - store文件夹：项目状态管理
  - views文件夹：页面
  - App.vue文件：项目的根组件
  - main.js文件：整个项目的入口文件

- **static 文件夹**: 静态资源文件夹，放置不会变动的资源，直接被复制到最终的打包目录（默认是dist/static）下；

- **.babelrc**: 使用 babel 的配置文件，用来设置转码规则和插件；

- **.editorconfig**: 代码的规范文件，规定使用空格或 tab 缩进，缩进的长度是两位还是四位之类的代码风格，使用的话需要在编辑器里下载对应的插件；

- **.eslintignore**: 指定 eslint 忽略的文件；

- **.eslintrc**: 配置 eslint 的检测规则，强制按照规则书写代码；

- **.gitignore**: 指定 git 忽略的文件，所有 git 操作均不会对其生效；

- **.postcssrc**: 指定使用的 css 预编译器，里面默认配置了 autoprefixer ，自动补全浏览器前缀；

- **favicon.ico**: 浏览器标签页 title 旁边的小图标，这是需要我们自己粘贴过来的；

- **gulpfile.js**：打包的相关配置；

- **index.html**: 首页文件，项目运行的时候，会自动将我们在 src 文件夹里生成的组件插入这个文件里；

- **LICENSE**: 项目声明的 license；

- **package-lock.json**: 当 node_modules 或 package.json 发生变化时自动生成的文件。这个文件主要功能是确定当前安装的包的依赖，以便后续重新安装的时候生成相同的依赖，而忽略项目开发过程中有些依赖已经发生的更新；

- **package.json**: 指定项目开发和生成环境中需要使用的依赖库；

- **README.md**: 相当于是一个备注文件，对项目开发过程中需要注意的地方进行一些说明。

  

<a name="separate"></a>
### 4.分离

结构（HTML）、表现（CSS）、行为分离（JavaScript）

> 将结构与表现、行为分离，保证它们之间的最小耦合，这对前期开发和后期维护都至关重要。



<a name="todo"></a>

### 5.待办事项

用 TODO 标示待办事项和正在开发的条目
```
	<!-- TODO: 图文混排 -->
	<div class="g-imgtext">
	<img src="1.png" alt="" />
	...
	
	/* TODO: 图文混排 comm: g-imgtext */
	.g-imgtext { sRules; }
```


<div style="page-break-after: always;"></div><!-- 手动分页 --><a name="html"></a>
## HTML

<a name="html-general"></a>

### 语法

用个空格来代替制表符（tab） -- 这是唯一能保证在所有环境下获得一致展现的方法。

嵌套元素应当缩进一次（即两个空格）。

对于属性的定义，确保全部使用双引号，绝不要使用单引号。

不要在自闭合（self-closing）元素的尾部添加斜线 -- HTML5 规范中明确说明这是可选的。

不要省略可选的结束标签（closing tag）（例如，</li> 或 </body>）。

<a name="doctype"></a>

### HTML5 doctype

为每个 HTML 页面的第一行添加标准模式（standard mode）的声明，这样能够确保在每个浏览器中拥有一致的展现。

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```


<a name="lang"></a>

### 语言属性

根据 HTML5 规范：

强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。

	<html lang="zh-CN">
	  <!-- ... -->
	</html>

<a name="ie"></a>

### IE 兼容模式

IE 支持通过特定的 <meta> 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 edge mode，从而通知 IE 采用其所支持的最新的模式。

	<meta http-equiv="X-UA-Compatible" content="IE=Edge/">

<a name="charset"></a>

### 字符编码

通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与文档编码一致（一般采用 UTF-8 编码）。

	<head>
	  <meta charset="UTF-8">
	</head>

<a name="links"></a>

### 引入 CSS 和 JavaScript 文件

根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 type 属性，因为 text/css 和 text/javascript 分别是它们的默认值。

```html
<!-- External CSS -->
<link rel="stylesheet" href="code-guide.css">
<!-- In-document CSS -->
<style> /* ... */</style>
 	
<!-- JavaScript -->
<script src="code-guide.js"></script>
<style>
```


<a name="attr"></a>

### 属性顺序

HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。
```css
	class
	id, name
	data-*
	src, for, type, href
	title, alt
	aria-*, role

```


> class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。

```html
<a class="..." id="..." data-modal="toggle" href="#">
  Example link
</a>
<input class="form-control" type="text">
<img src="..." alt="...">
```


<a name="boolean"></a>

### 布尔（boolean）型属性

布尔型属性不用赋值。

```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
```

<a name="less-tag"></a>

### 减少标签的数量

编写 HTML 代码时，尽量避免多余的父元素。

```html
<!-- Not so great -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

<div style="page-break-after: always;"></div><!-- 手动分页 -->
<a name="css"></a>

## CSS

<a name="css-general"></a>

### 语法



- 空格：两个空格代替tab；逗号分隔属性时在逗号后添加一个空格，eg：`.name, .class {...}`；不要在 rgb()、rgba()、hsl()、hsla() 或 rect() 值的内部的逗号后面插入空格;
- 花括号：在每个声明块的左花括号前添加一个空格，声明块的右花括号应当单独成行，增加代码可读性。

- 声明语句：以分号结尾；每条独占一行；申明语句的”: “后添加一个空格，eg：`width: 180px;`；
- 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）。
- 十六进制值应该全部小，用简写形式的十六进制值。例如，用 #fff 代替 #ffffff。
- 为选择器中的属性添加双引号，例如，input[type="text"]
- 避免为 0 值指定单位，例如，用 margin: 0; 代替 margin: 0px;。

```css
/* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```


<a name="order"></a>

### 声明顺序

相关的属性声明应当归为一组，并按照下面的顺序排列：

	Positioning
	Box model
	Typographic
	Visual

> 由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。

> 其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。

```css
.declaration-order {
 /* Positioning */
  	  position: absolute;
  	  top: 0;
  	  right: 0;
  	  bottom: 0;
  	  left: 0;
  	  z-index: 100;

  	  /* Box-model */
  	  display: block;
  	  float: right;
  	  width: 100px;
  	  height: 100px;

  	  /* Typography */
  	  font: normal 13px "Helvetica Neue", sans-serif;
  	  line-height: 1.5;
  	  color: #333;
  	  text-align: center;

  	  /* Visual */
  	  background-color: #f5f5f5;
  	  border: 1px solid #e5e5e5;
  	  border-radius: 3px;

  	  /* Misc */
  	  opacity: 1;
	}
```


<a name="media-query"></a>	

### 媒体查询（Media query）的位置

将媒体查询放在尽可能相关规则的附近。不要将他们打包放在一个单一样式文件中或者放在文档底部。如果你把他们分开了，将来只会被大家遗忘。下面给出一个典型的实例。

```css
.element { ... }
.element-avatar { ... }
.element-selected { ... }

@media (min-width: 480px) {
  .element { ...}
  .element-avatar { ... }
  .element-selected { ... }
}
```


<a name="prefix"></a>		

### 带前缀的属性

主要是css3新特性的兼容性问题。css/less/sass打包编译时可配置自动添加。

<a name="one-line"></a>	

### 单行规则声明

对于只包含一条声明的样式，为了易读性和便于快速编辑，建议将语句放在同一行。对于带有多条声明的样式，还是应当将声明分为多行。

> 这样做的关键因素是为了错误检测。例如，CSS 校验器指出在 183 行有语法错误。如果是单行单条声明，你就不会忽略这个错误；如果是单行多条声明的话，你就要仔细分析避免漏掉错误了。

```css
/* Single declarations on one line */
.span1 { width: 60px; }
.span2 { width: 140px; }
.span3 { width: 220px; }

/* Multiple declarations, one per line */
.sprite {
      display: inline-block;
  	  width: 16px;
  	  height: 15px;
  	  background-image: url(../img/sprite.png);
}
	.icon           { background-position: 0 0; }
	.icon-home      { background-position: 0 -20px; }
	.icon-account   { background-position: 0 -40px; }
```


<a name="short"></a>		

### 简写形式的属性声明

在需要显示地设置所有值的情况下，应当尽量限制使用简写形式的属性声明。常见的滥用简写属性声明的情况如下：

	padding
	margin
	font
	background
	border
	border-radius

> 大部分情况下，我们不需要为简写形式的属性声明指定所有值。例如，HTML 的 heading 元素只需要设置上、下边距（margin）的值，因此，在必要的时候，只需覆盖这两个值就可以。过度使用简写形式的属性声明会导致代码混乱，并且会对属性值带来不必要的覆盖从而引起意外的副作用。

```css
/* Bad example */
.element {
    margin: 0 0 10px;
    background: red;
    background: url("image.jpg");
    border-radius: 3px 3px 0 0;
}
/* Good example */
.element {
    margin-bottom: 10px;
    background-color: red;
    background-image: url("image.jpg");
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
```




<a name="nest"></a>

###  Less 和 Sass 中的嵌套

避免非必要的嵌套。

这是因为虽然你可以使用嵌套，但是并不意味着应该使用嵌套。只有在必须将样式限制在父元素内（也就是后代选择器），并且存在多个需要嵌套的元素时才使用嵌套。


​	
<a name="css-comment"></a>		

### 注释

好的class名称优于注释。过去的css注释多数用来区分功能块，现在可以用sass、less等模块化的css预处理器来拆分。

<a name="class-name"></a>

### class 命名

- class 名称中只能出现小写字符和破折号（dashe）（不是下划线，也不是驼峰命名法）。破折号应当用于相关 class 的命名（类似于命名空间）（例如，.btn 和 .btn-danger）。

- class 名称应当尽可能短，并且意义明确。避免过度任意的简写。.btn 代表 button，但是 .s 不能表达任何意思。

- 使用有意义的名称。

- 基于最近的父 class 或基本（base） class 作为新 class 的前缀。

- 在为 Sass 和 Less 变量命名是也可以参考上面列出的各项规范。



<a name="selector"></a>
### 选择器

对于通用元素使用 class ，这样利于渲染性能的优化。

对于经常出现的组件，避免使用属性选择器（例如，[class^="..."]）。浏览器的性能会受到这些因素的影响。

选择器要尽可能短，并且尽量限制组成选择器的元素个数，建议不要超过 3 。

只有在必要的时候才将 class 限制在最近的父元素内（也就是后代选择器）（例如，不使用带前缀的 class 时，前缀类似于命名空间）。

	/* Bad example */
	span { ... }
	.page-container #stream .stream-item .tweet .tweet-	header .username { ... }
	.avatar { ... }
	
	/* Good example */
	.avatar { ... }
	.tweet-header .username { ... }
	.tweet .avatar { ... }	

<div style="page-break-after: always;"></div><!-- 手动分页 -->
<a name="javascript"></a>

## JavaScript规范

<a name="var"></a>

### 变量

声明变量必须加上声明关键字：let var const等声明变量的关键字

> 当你没有写 var，变量就会暴露在全局上下文中，这样很可能会和现有变量冲突。另外，如果没有加上，很难明确该变量的作用域是什么，变量也很可能像在局部作用域中，很轻易地泄漏到 Document 或者 Window 中，所以务必用 var 去声明变量。

<a name="const"></a>

### 常量

常量的形式如: NAMES_LIKE_THIS， 即使用大写字符，并用下划线分隔。

<a name="semicolon"></a>
### 分号

总是使用分号。不解释。

<a name="multi-line-string"></a>
### 多行字符串

不要使用。请使用前端模板。

> 不要这样写长字符串:

	var myString = 'A rather long string of English text, an error message \
	            actually that just keeps going and going -- an error \
	            message to make the Energizer bunny blush (right through \
	            those Schwarzenegger shades)! Where was I? Oh yes, \
	            you\'ve got an error and all the extraneous whitespace is \
	            just gravy.  Have a nice day.';

<a name="name"></a>

### 命名

通常，使用 functionNamesLikeThis，variableNamesLikeThis，ClassNamesLikeThis，EnumNamesLikeThis，methodNamesLikeThis，和 SYMBOLIC_CONSTANTS_LIKE_THIS。

注:

* 1.文件或类中的 私有 属性，变量和方法名应该以下划线 "_" 开头。
* 2.保护 属性，变量和方法名不需要下划线开头，和公共变量名一样。

<a name="brackets"></a>
### 大括号

分号会被隐式插入到代码中，所以你务必在同一行上插入大括号。例如：

```javascript
if (something) {
  	  // ...
	} else {
      // ...
	}
```


<a name="indentation"></a>
### 缩进

大多数代码使用两个空格而不是制表符来进行缩进。

除了 初始化数组和对象，和传递匿名函数外，所有被拆开的多行文本要么选择与之前的表达式左对齐，要么以4个(而不是2个)空格作为一缩进层次。

> 如果初始值不是很长，就保持写在单行上：

	var arr = [1, 2, 3];  // No space after [ or before ].
	var obj = {a: 1, b: 2, c: 3};  // No space after { or before }.
> 初始值占用多行时，缩进2个空格。

	// Object initializer.
	var inset = {
	  	  top: 10,
	      right: 20,
	      bottom: 15,
	      left: 12
	    };


	// Array initializer.
	this.rows_ = [
	  	  '"Slartibartfast" <fjordmaster@magrathea.com>',
	  	  '"Zaphod Beeblebrox" <theprez@universe.gov>',
	  	  '"Ford Prefect" <ford@theguide.com>',
	  	  '"Arthur Dent" <has.no.tea@gmail.com>',
	  	  '"Marvin the Paranoid Android" <marv@googlemail.com>',
	  	  'the.mice@magrathea.com'
		];


	// Used in a method call.
	goog.dom.createDom(goog.dom.TagName.DIV, {
	  	  id: 'foo',
	  	  className: 'some-css-class',
	  	  style: 'display:none'
		}, 'Hello, world!');


​	
> 比较长的标识符或者数值, 不要为了让代码好看些而手工对齐. 如:

	CORRECT_Object.prototype = {
	 	  a: 0,
	  	  b: 1,
	  	  lengthyName: 2
		};






> 不要这样做:

	WRONG_Object.prototype = {
	  	  a          : 0,
	  	  b          : 1,
	  	  lengthyName: 2
		};


<a name="space-line"></a>
### 空行

使用空行来划分一组逻辑上相关联的代码片段。

	doSomethingTo(x);
	doSomethingElseTo(x);
	andThen(x);
	
	nowDoSomethingWith(y);
	
	andNowWith(z);

<a name="quotation-mark"></a>
### 引号

使用 ' 优于 "。

> 当你创建一个包含 HTML 代码的字符串时就知道它的好处了。

	var msg = 'This is some HTML';

<a name="javascript-comment"></a>
### 注释

好的函数命名与参数命名优于注释。如果你特别喜爱写注释，请使用[JSDoc](http://usejsdoc.org/)中的注释风格。行内注释使用 // 变量 的形式。

<div style="page-break-after: always;"></div><!-- 手动分页 -->
<a name="img"></a>

## 图像

<a name="img-compress"></a>
### 图像压缩

所有图片经过一定的压缩和优化才能发布

<a name="background-image"></a>
### 背景图

使用PNG格式而不是GIF格式，因为PNG格式色彩更丰富，还能提供更好的压缩比；

<a name="image"></a>
### 前景图

内容图片建议使用JPG，可以拥有更好地显示效果；装饰性图片使用PNG。

<a name="sprite"></a>
### Sprite

CSS Sprite是一种将数个图片合成为一张大图的技术（既可以是背景图也可以是前景图），然后通过偏移来进行图像位置选取；CSS Sprite可以减少http请求。

<div style="page-break-after: always;"></div><!-- 手动分页 -->
<a name="vue"></a>

## Vue

主要参考[vue风格指南](https://cn.vuejs.org/v2/style-guide/)

<a name="vue-necessary"></a>
### 必要的

- 组件名始终为多个单词，用于避免与html标签相冲突

- 组件的 `data` 必须是一个函数。

- Prop 定义应该尽量详细,至少需要指定其类型

- 为`v-for`设置键值key。

- 永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上，不可避免的情况下请将v-if移动到其父元素上

- 组件样式设置作用域，善用scope，module

- 私有属性名：` $_`，作为一个用户定义的私有属性

  

<a name="vue-recommend"></a>
### 强烈推荐的

- 组件文件：只要有能够拼接文件的构建系统，就把每个组件单独分成文件。
- 单文件组件的文件名应该始终是单词大写开头 (PascalCase)
- 基础组件名使用特定的前缀开头：如`Base`、`App` 或 `V`。
- 单例组件名（每个页面只使用一次并且永远不接受任何 prop）：只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性。
- 紧密耦合的组件名：和父组件紧密耦合的子组件应该以父组件名作为前缀命名。
- 组件名中的单词顺序：组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾
- 自闭和组件：在单文件组件、字符串模板和 JSX中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。
- 模板中的组件名大小写：在单文件组件和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。
- JS/JSX中的组件名大小写：JS/JSX中的组件名是 PascalCase 的;而用Vue.component` 进行全局组件注册时，使用 kebab-case 字符串。
- 完整单词的组件名：组件名应该倾向于完整单词而不是缩写。
- Prop名的大小写：声明 prop 时，命名用 camelCase，而在模板和 JSX 中用 kebab-case。
- 多个 attribute 的元素应分多行撰写，每个 attribute 一行。
- 模板中简单的表达式：组件模板应只包含简单的表达式，复杂的表达式则应重构为计算属性或方法。
- 简单的计算属性：把复杂计算属性分割为尽可能多的更简单的属性。
- 带引号的attribute值：非空 HTML attribute 值应该始终带引号（单双视情况而定）
- 指令缩写：能缩写的就缩写



<div style="page-break-after: always;"></div><!-- 手动分页 -->
<a name="recommendation"></a>

## 编码规范建议

<a name="recommendation-item"></a>

### 编码规范建议细则

- 数据一定要效验，例如字符型转数字型，如果转换失败一定要有缺省值；
- 服务端响应数据是否有效判断
- 避免不必要的 DOM 操作

- S异步加载第三方内容，避免阻塞整个页面加载、

- 避免使用jQuery实现动画
  - 禁止使用 slideUp/Down() fadeIn/fadeOut()等方法；
  - 尽量不使用 animate() 方法；

- CSS慎重选择高消耗的样式、高消耗属性在绘制前需要浏览器进行大量计算：box-shadows、border-radius、transparency、transforms、CSS filters（性能杀手）
- CSS多利用硬件能力，如通过 3D 变形开启 GPU 加速

<a name="recommendation-technology"></a>

### 技术方案选型

- 优先使用组件库内的，若组件库内（git组件地址）没有，在另择方案；

<a name="recommendation-IDE"></a>

### 开发工具以及插件

推荐使用Microsoft VS Code ，常用插件安装：

- ESLint：  js语法检测，可以自定制提示规则，实现代码规范(// TODO：统一规范ESlint配置）
- Prettier - Code formatter：代码格式化，主要作用于`JavaScript/TypeScript/Css`
- Beautify：代码格式化主要作用于`JavaScript/Json/Css/Sass/Html`

- Copy Relative Path： 拷贝文件目录的
- Easy LESS：less自动转换为css
- JavaScript (ES6) code snippets：
- Path Intellisense：自动提示路径，快速导入文件。
- Vue VSCode Snippets：
- Vetur：语法高亮、智能感知、Emmet等

更多插件待更新......

<div style="page-break-after: always;"></div><!-- 手动分页 -->
<a name="reference"></a>

## 参考资料

* [google javascript style guide](http://alloyteam.github.io/JX/doc/specification/google-javascript.xml#JavaScript_%E7%BC%96%E7%A0%81%E9%A3%8E%E6%A0%BC)
* [bootstrap code guide](http://codeguide.bootcss.com/)
* [vue-style-guide](https://cn.vuejs.org/v2/style-guide/)

