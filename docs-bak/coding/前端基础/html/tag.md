
# html 主根元素

表示一个HTML文档的根（顶级元素）

## 标签列表

### 文档元数据

- head
规定文档相关的配置信息（元数据）
- title
定义文档的标题，显示在Browser的标题栏或标签页上
  - 描述：
    - 父级：`<head>`
    - 一个 `<head>` 元素只能包含一个 `<title>` 元素
- base
用于一个文档中包含的所有相对 URL 的根 URL
  - href  用于文档中相对 URL 地址的基础 URL
  - target  _self(默认)/_blank(新未命名窗口)/_parent(父窗口)/_top(顶级窗口)
  - 描述：
    - 如果指定了多个 `<base>` 元素，只会使用第一个 href 和 target 值
- link
HTML外部资源链接元素,最常用于链接样式表
  - href 被链接资源的URL
  - type 定义链接的内容的MIME类型 text/css
  - rel 命名链接文档与当前文档的关系 stylesheet|icon|preload
  - disabled 是否应加载所描述的样式表,一旦加载样式表，对Disabled属性的值所做的更改无效
  - crossorigin 表示该资源是否应该使用一个CORS请求来获取
  - importance 资源的相对重要性 auto|high|low
  - media 规定了外部资源适用的媒体类型。它的值必须是"媒体查询"。
  - referrerpolicy 获取资源时使用哪个引荐来源网址
- style
文档的样式信息
- meta
多用于适配、描述基本信息、SEO等
- body
文档的内容
  - onafterprint 用户完成文档打印之后。
  - onbeforeprint 用户要求打印文档之前。
  - onbeforeunload 文档即将被关闭之前。
  - onblur 文档失去焦点时。
  - onfocus 文档获得焦点时。
  - onhashchange 文档当前地址的片段标识部分（以('#')开始的部分）发生改变时。
  - onlanguagechange  用户选择的语言发生改变时。
  - onload 文档完成加载时。
  - onerror 文档加载失败时。
  - onmessage 文档接收到消息时。
  - ononline 网络连接恢复时。
  - onoffline 网络连接失败时。
  - onpopstate 用户回退历史记录时。
  - onresize 文档尺寸发生改变时。
  - onstorage 存储内容（localStorage / sessionStorage）发生改变时。
  - onredo 用户重做操作时。
  - onundo 用户撤销操作时。
  - onunload 文档关闭时。
  - 描述：
    - 它必须是 html 元素的直接子元素。

### 脚本

- canvas
可通过JS绘制图形及图形动画
- script
页面脚本
- noscript
浏览器中关闭了脚本，则使用该标签代替

### 内容分区

- main
文档的 body 或应用的主体部分
- header
一组介绍性的或是辅助导航的实用元素
- nav
提供导航链接，常见示例是菜单，目录和索引
- section
文档中的独立部分，一般来说会有包含一个标题
- h1-h6
六个不同的级别的标题
- article
文档、页面、应用或网站中的独立结构
- aside
和其余页面内容几乎无关的部分
- footer
一个章节内容或者根节点（sectioning root ）元素的页脚
- address
某个人或某个组织（等等）的联系信息

### 文本内容

- div
通用型的流内容容器
- p
表示文本的一个段落
- ul
无序列表、项目符号列表
- ol
有序列表
- li
表示列表里的条目
- dl
包含术语定义以及描述的列表 (键-值对列表)
- dt
该元素仅能作为 dl 的子元素出现，该元素后面会跟着 dd 元素
- dd
描述列表  (dl) 元素中一个术语的描述
- hr
横线（空元素）元素之间的主题转换
- pre
按照原文件中的编排
- figure
可附标题内容元素，经常与说明（caption）配合，作为单独引用单元
- figcaption
其相关联的图片的说明/标题
- blockquote
代表其中的文字是引用内容

### 内联文本语义

- a
锚元素、链接网页、文件、位置
- span
短语内容的通用行内容器，并没有任何特殊语义。
- i
区分普通文本的一系列文本
- strong
表示文本十分重要
- b
吸引读者的注意到该元素的内容上
- em
用户着重阅读的内容
- s
使用删除线来渲染文本,表示不再相关
- u
渲染为一个实线下划线
- abbr
用于代表缩写，并且可以通过可选的 title 属性
- mark
表示为引用或符号目的而标记或突出显示的文本
- cite
一个作品的引用，必须包含作品的标题
- q
表示一个封闭的并且是短的行内引用的文本. 长的文本的引用请使用 blockquote 替代
- br
生成一个换行（回车）符号(空元素)。
- bdi
双向隔离元素
- bdo
双向文本替代元素
- sub
展示得更低并且更小
- sup
展示得更高并且更小
- ruby
被用来展示东亚文字注音或字符注释。
- rp
用于为那些不能使用 ruby 元素展示 ruby 注解的浏览器
- rt
包含字符的发音
- var
表示变量的名称，或者由用户提供的值。
- dfn
表示术语的一个定义
- kbd
表示用户输入，产生一个行内元素
- code
呈现一段计算机代码
- data
指定内容和机器可读的翻译联系在一起
- time
用来表示24小时制时间

### 表单

- form
表示包含交互控件区域
- button
可点击的按钮
- input
创建交互式控件
- select
表示一个提供选项菜单的控件
- datalist
包含了一组option元素
- option
元素中包含的项
- textarea
多行纯文本编辑控件
- label
界面中某个元素的说明
- fieldset
表单集合
- legend
表示其父元素 fieldset 的内容标题
- meter
用来显示已知范围的标量值或者分数值
- optgroup
 为select 元素中的选项创建分组。
- output
表示计算或用户操作的结果
- progress
显示一项任务的完成进度

### 编辑标识

- del
表示一些被从文档中删除的文字内容
- ins
定义已经被插入文档中的文本

### 图片和多媒体

- img
将一份图像嵌入文档
- video
 用于在HTML或者XHTML文档中嵌入媒体播放器
- track
被当作媒体元素—audio 和 video的子元素来使用
- audio
元素可以包含一个或多个音频资源
- area
在图片上定义一个热点区域，可以关联一个超链接
- map
与 area 属性一起使用来定义一个图像映射

### 内嵌内容

- embed
外部内容嵌入文档中的指定位置。
- iframe
内联框架
- object
表示引入一个外部资源
- param
为object元素定义参数
- picture
为不同的显示/设备场景提供图像版本
- portal
- source
指定多个媒体资源，是一个空元素

### 表格内容

- table
表格数据
- caption
展示一个表格的标题
- colgroup
表格列组
- col
定义所有公共单元格上的公共语义，colgroup 内
- tbody
表格体
- th
表格头单元
- tr
表格行
- td
表格单元
- tfoot
各列的汇总行

### 交互元素

- details
可创建一个挂件，仅在被切换成展开状态
- dialog
表示一个对话框或其他交互式组
- menu
呈现了一组用户可执行或激活的命令
- summary
用作 一个details元素的一个内容的摘要

### Web 组件

- slot
Web Components  技术套件的一部分
- template
模版可以使用JS实例化
- content
废弃部分，现在已被 slot 元素代替
- shadow
废弃部分

## 输入控件类型

- button
- checkbox
- color
- date
- datetime-local
- email
- file
- hidden
- image
- month
- number
- password
- radio
- range
- reset
- search
- submit
- tel
- text
- time
- url
- week

## 全局属性

所有HTML元素共有的属性

- 全局属性
  - id 定义唯一标识符（ID），整个文档中必须是唯一
  - class 元素的类名（classes ）列表
  - title 鼠标悬浮提示
  - style 样式
  - lang 帮助定义元素的语言
  - translate 用于指定在页面本地化时是否转换元素的属性值及其Text 节点子节点的值
  - accesskey 提供了为当前元素生成键盘快捷键的提示。
  - autocapitalize 控制用户的文本输入是否和如何自动大写
  - autofocus
  - data- 嵌入自定义数据属性
  - dir 元素中文本方向的枚举属性 ltr、rtl、auto
  - draggable 指示是否可以 使用 DND API 拖动元素
  - dropzone 可以使用 DND API 在元素上创建哪些类型的内容  copy、move、link
  - enterkeyhint 用于将阴影部分从嵌套的阴影树传递到包含的光树中。
  - hidden 隐藏元素
  - inputmode  在编辑此元素或其内容时要使用的虚拟键盘配置类型的提示
  - nonce
  - spellcheck 是否可以检查元素是否存在拼写错误
  - tabindex 指示元素是否可以获取输入焦点（可聚焦），是否应该参与顺序键盘导航
  - contenteditable 元素是否可被用户编辑
  - is 允许您指定标准HTML元素应该像已注册的自定义内置元素一样
  - slot 具有slot属性的元素被分配给由<slot>元素创建的插槽，其name属性的值与slot属性的值匹配
  - part 元素的部件名称的空格分隔列表。Part名称允许CSS通过::part() 伪元素选择和设置阴影关联树中的特定元素。
  - exportparts
  - itemid 项的唯一全局标识符。
  - itemprop 用于向项添加属性。
  - itemref 提供了元素ID列表（而不是itemids）以及文档中其他位置的其他属性
  - itemtype 指定将用于在数据结构中定义itemprops（项属性）的词汇表的URL
  - itemscope 与itemtype一起使用，指定包含在关于特定项目代码块中的HTML
- 其他全局属性
  - xml:lang 和 xml:base
  - 多重aria-*属性,改善可访问性。
  - 事件处理

- 资源
  - [语义化](https://www.zhihu.com/search?q=html%E8%AF%AD%E4%B9%89%E5%8C%96%E6%A0%87%E7%AD%BE&utm_content=search_suggestion&type=content)
