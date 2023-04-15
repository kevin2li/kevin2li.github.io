---
title: Ubuntu安装显卡驱动
category: Linux
tag: [显卡,驱动,Ubuntu]
icon: pen-to-square
order: 1
date: 2023-04-07T04:22:15.032Z
---
# 方法
1. 查看当前显卡型号
```bash
ubuntu-drivers devices
```

![image.png](https://blog.kevin2li.top/static/img/845108e694b5d1c58a49151d228221bf.image.png)

2. 安装驱动

```bash
# 自己指定型号
sudo apt install nvidia-driver-515

# 使用推荐型号
sudo ubuntu-drivers autoinstall
```

3. 重启机器

```bash
sudo reboot
```

:::tip 提示
安装完重启后可能失败，可以卸载换个型号的驱动再试。

```bash
# 卸载
sudo apt remove nvidia-driver-515
```
:::
<!-- more -->

# 参考
[1] https://linuxconfig.org/how-to-install-the-nvidia-drivers-on-ubuntu-22-04
