---
title: 文本编辑器—Visual Studio Code日常使用教程
category: 工具
tag: [文本编辑器]
icon: pen-to-square
order: 1
date: 2022-10-18T12:02:05.567Z
---
## Cheetsheet
![](https://blog.kevin2li.top/static/img/6222e6c763413175ed72a5d43b158aff.2022-09-13-22-21-14.png)

<!-- more -->

## 常用快捷键
- `Ctrl+Shift+P`：打开命令面板
- `Ctrl+G`：快速跳转到指定行
- `Ctrl+D`：选中光标所在单词
- `Ctrl+Alt+Up`：在上一行添加一个光标
- `Ctrl+Alt+Down`：在下一行添加一个光标
- `Shift+Alt+Up`: 复制当前行到上一行
- `Shift+Alt+Down`：复制当前行到下一行
- `Ctrl+P`：选择跳转到已打开的编辑器文件(在打开的文件过多折叠到一起时很有用)
- `Ctrl+W`: 关闭当前文件
- `Ctrl + \`：横向分屏
- `Ctrl+Right`: 光标右移一个单词
- `Ctrl+Left`: 光标左移一个单词
- `Ctrl+Up`: 界面向下滚动(光标位置不变)
- `Ctrl+Down`: 界面向上滚动(光标位置不变)
- `Ctrl+Backspace`: 向左删除整个单词
- `Del+Backspace`: 向右删除整个单词
- `Alt+Right`: 切换回打开过的前一个文件
- `Alt+Left`: 切换到打开过的后一个文件
- `Alt+Up`：与上一行交换顺序
- `Alt+Down`: 与下一行交换顺序
- `Ctrl+X`：删除当前行
- `Ctrl+J`：合并下一行
- `Ctrl+K V`:打开预览，支持markdown、latex等
- `Ctrl+Shift+N`: 打开新的vscode实例
- `Ctrl++N`: 打开新的空白文件
- `Ctrl+反引号`: 打开内置终端

## 使用Tips
1. 快速删除空行
`Ctrl+H`在替换窗口勾选正则表达式按钮，在第一个文本框输入`^\s*(?=\r?$)\n`,选择全部替换即可。

![image.png](https://blog.kevin2li.top/static/img/d57619681e2bdf744cc0649f132fef14.image.png)

## 插件推荐

- `Database Client`  
连接数据库工具，支持mysql、mongodb等多种数据库
- `Blockman - Highlight Nested Code Blocks`  
代码块加边框，使代码更加清晰易读
- `Bookmarks`  
在代码指定位置添加标记，方便在文件不同位置来回跳转
- `Color Highlight`  
将16进制颜色代码高亮显示，方便查看其具体颜色
- `Git Graph`  
将git提交历史可视化展示
- `Gitlens`  
git仓库管理工具
- `LeetCode`  
算法刷题插件
- `Material Icon Theme`  
文件(夹)图标美化
- `Project Manager`  
将多个工程目录归档到一起，方便切换
- `Quick and Simple Text Selection`  
支持快速选中双引号、单引号、小括号等配对符号内的文本，非常推荐使用！
- `Rainbow CSV`  
将csv文件每列设置不同的颜色，方便查看
- `Tabnine`  
基于AI的代码智能补全插件，非常推荐！
- `Todo Tree`  
将代码中的todo、fixme的记号高亮显示
- `Color Highlight`  
代码中16进制颜色高亮
- `Better Align`  
代码对齐


## 自定义snippets
> 参考：https://code.visualstudio.com/docs/editor/userdefinedsnippets#_assign-keybindings-to-snippets

1. 打开snippets配置
![image.png](https://blog.kevin2li.top/static/img/ce8137e4fbc1efa3888bee9dff8634ca.image.png)

选择要设置snippet的语言，然后添加snippet

样例：
```json
"Print to console": {
	"prefix": "log",
	"body": [
		"console.log('$1');",
		"$2"
	],
	"description": "Log output to console"
}
```
2. 为snippet设置快捷键

![image.png](https://blog.kevin2li.top/static/img/23bbd953e8d5d8ebf7a00d11295410ec.image.png)


添加条目，示例如下：
```json
  {
    "key": "ctrl+k 3",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "langId": "python",
      "name": "# %%"
    }
  }
```

## 编辑需要sudo权限的文件
先占有文件，修改完后，再复原
```bash
sudo chown kevin2li <path_to_file>
code <path_to_file>
sudo chown root <path_to_file>
```
