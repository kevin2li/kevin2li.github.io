---
category: Box
created: 1684841520728
date: '2023-05-23 19:32:00'
desc: ''
id: bnwnow1xtfn6spib69ngxl1
title: Conda安装与使用教程
updated: 1684842873674
---



## 简介
xx

## 安装
### Windows
1. 下载安装包  

下载地址：https://docs.conda.io/en/latest/miniconda.html

选择适合自己系统版本的进行安装。

![](https://minio.kevin2li.top/image-bed/blog/20230523194825.png)

2. 配置环境变量

打开环境变量设置，找到系统`PATH`环境变量进行编辑

![](https://minio.kevin2li.top/image-bed/blog/20230523194635.png)

将下面红框标注的路径添加到**系统**`PATH`环境变量中

![](https://minio.kevin2li.top/image-bed/blog/20230523194419.png)

3. 设置权限   

> 参考：https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.3

![](https://minio.kevin2li.top/image-bed/blog/20230523193323.png)

系统默认执行策略为`Restricted`，该策略下是不允许执行脚本的，所以会出现上面红色错误。

![](https://minio.kevin2li.top/image-bed/blog/20230523193555.png)

通过以管理员权限打开终端，输入下面命令修改执行策略来允许运行脚本。
``` powershell
# 查看当前执行策略
Get-ExecutionPolicy

# 修改策略(管理员权限)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

两种策略对比：

![](https://minio.kevin2li.top/image-bed/blog/20230523193924.png)

4. 初始化  

``` powershell
conda init powershell 
```

![](https://minio.kevin2li.top/image-bed/blog/20230523194119.png)

重新启动终端，可以看到已经可以识别python环境名称了。

![](https://minio.kevin2li.top/image-bed/blog/20230523194234.png)

## Ubuntu
xx

# 使用
## 镜像源配置

- 清华源：https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/

方法：用国内源覆盖`$HOME/.condarc`的内容。

>注意: windows用户需要先通过命令`conda config --set show_channel_urls yes`生成`.condarc`文件再进行配置。

## 环境管理

``` bash 
# 查看已有环境
conda env list

# 导出环境

# 迁移环境

```