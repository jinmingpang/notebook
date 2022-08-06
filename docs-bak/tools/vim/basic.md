# VIM基础

## 资源

- [学习vim](https://zhuanlan.zhihu.com/p/141248420)
- [vs+vim](https://www.bilibili.com/video/BV1z541177Jy?from=search&seid=12396364962225672766&spm_id_from=333.337.0.0)
- [vsVimDoc](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)

## 哲学

- 模式区分---用更少的按键更多的操作
- 一切设计都是为了高效
- 数字 + 操作: 重复操作几次
- 学习和理解重要, 练习和实践更重要

## 模式

- 模式
  - 普通 --- 用于光标跳转
  - 插入 --- 用于文本写入
  - 可视 --- 用于选择
  - 命令 --- 用于命令
- 切换
  - normal -> insert
    - i 光标前 insert
    - I 行首   Insert
    - a 光标后 after
    - A 航尾   After
    - o 下一行 one line
    - O 上一行 One line
  - insert -> normal
    - esc/jj/caps lock
  - normal -> visual
    - v
  - visual -> normal
    - esc/v
  - normal -> command
    - :
  - command -> normal
    - esc

## 光标移动

- 页移动
  - ctrl + f 向后 一页
  - ctrl + b 向前 一页
  - ctrl + u 向上 半页
  - ctrl + d 向下 半页

- 以行为单位
  - 0 行首
  - 3 space 第三个字符
  - ^ 行首非空字符
  - $ 行尾
  - gg 第一行
  - G 最后一行
  - 3G 第三行

- 以字母单位
  - 记忆：j 基准向下，k 为上 ， h在j左边， l在k右边
  - k 上
    - 10k 上移动10行
  - l 右
  - j 下
  - h 左

- 以单词移动
  - w 单词开头 word--> 往后 每个单词开头
  - b 本单词或上一个单词开头 begin -> 往前 每个单词开头(与w反操作)
  - e 本单词或者下一个单词结尾 end -> 往后 单词结尾
  - ge 上一个单词结尾 -> get end -> 往前 单词结尾----（与e反操作）

- 光标跳跃
  - f+a 光标下一个a 位置
  - F+a 反向移动到上一个a 位置
  - t+a 下一个a 前
  - T+a 反向 上一个a 后
  - ; 重复上一次查找
  - , 反向上一次查找

## 操作符 operator

- d delete 删除
  - D 删除1行
  - dd 删除一行
  - 3dd 删除三行
  - d0 删除光标到第一个字符
  - d$ 删除光标到最后一个字符
- c change 删除当前行并进入编辑状态
  - cc 删除 并 insert
- s 删除当前字符并进入编辑状态
- x 剪切
  - x 向后删除1个字符
  - X 向前删除1个字符
  - 3x 向后删除3个字符
  - 3X 向前删除3个字符
- y yank 复制
  - yy 复制光标所在行
  - 3yy 复制光标所在行的后3行
  - y0 复制光标到第1个字符
  - y$ 复制光标到最后1个字符
- p pate 粘贴
  - p 光标后一行复制
  - P 复制到光标前一行
- u undo 撤销操作
- J join 将光标所在行与下一行合在一起
- v (visual) 选中并进入 visual

## 动作 motion

- inner / around ---成对存在的文本
  - inner 不包含特殊字符,选中纯文本
  - around 包含包裹在单词两头的特殊字符,可理解为打包选中
- 动作 i/a
  - w word
  - e entire 整个文件
  - ( b
  - { B
  - "
  - '
  - `
  - <
  - [
  - t 表示： html tag
  - s
  - p

## operator + motion

选择/粘贴/复制 主要 操作与动作 结合使用，一定要多练习才能使用

- a
- a

## 切换大小写

- ～ 光标字母大小写
- 3～ 前三改变大小写
- g~~ 前面行字母大写
- gUU 整行大写
- guu 整行小写
- gUiw 有特殊字符包裹的字母 改为大写
- guiw 有特殊字符包裹的字母 改成小写

## TIP

- 跳转到定义
  - gd
- 悬浮信息
  - gh
- 跳转编辑器tab
  - gt 往后
  - gT 往前
  - 2gt 跳转到第二个
- 缩进
  - shift+< 左 > 右
- 分屏跳转
  - cmd+0 跳转到侧边栏
    - j/k 上下
    - l 编辑该文件
    - space
      - 文件夹 展开/折叠
      - 文件 打开
  - cmd+2 分屏 第二个面板
  - cmd+/ 分屏当前面板
- 重复操作
  - ctrl+r
  - .

## easyMotion 简单动作

- a

## surround 包裹

- y s <motion> <desired> 添加包裹
- d s <existing> 删除包裹
- c s <existing> <desired> 改变包裹
- S <desired> 在 visual 模式中选择包裹

## multi-cursor 多光标模式

- cmd+d
- gb

## 命令模式

- 查找
  - / 向光标之下寻找
  - ? 向光标之前寻找
  - n 找后一个
  - N 找前一个
- 查找与替换
  - 1,3s/hello/world/g 第1行到第三行 将hello替换为world
  - 1,$s/hello/world/g 第1行到最后一行 替换
  - 1,$s/hello/world/gc 每次替换都需要确认
- 保存
  - w 保存
  - wq 保存并退出
- 退出
  - q 直接退出
  - q! 放弃修改强制退出
  - ZZ 若文档修改则保存后退出，未修改直接退出

- 设置
  - set nu 设置行号
  - set nonu 取消行号

## vscode配置

```json
 { // 设置 jj 为退出编博模式
   "vim.insertModeKeyBindings": [
    {
      "before": ["j", "j"],
      "after": ["<Esc>"]
    }
  ]
 }
```
