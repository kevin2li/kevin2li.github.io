import{_ as l,W as r,X as t,Z as n,$ as s,a0 as e,Y as c,a1 as i,D as o}from"./framework-c9619a7b.js";const d={},p=n("h1",{id:"ubuntu安装教程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ubuntu安装教程","aria-hidden":"true"},"#"),s(" Ubuntu安装教程")],-1),v=n("p",null,"参考：",-1),u={href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-vnc-on-ubuntu-22-04",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="安装桌面环境" tabindex="-1"><a class="header-anchor" href="#安装桌面环境" aria-hidden="true">#</a> 安装桌面环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> xfce4 xfce4-goodies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b=i(`<h2 id="安装vnc" tabindex="-1"><a class="header-anchor" href="#安装vnc" aria-hidden="true">#</a> 安装vnc</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> tigervnc-standalone-server tigervnc-xorg-extension tigervnc-viewer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置vnc" tabindex="-1"><a class="header-anchor" href="#配置vnc" aria-hidden="true">#</a> 配置vnc</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建桌面</span>
vncserver
vncserver :1

<span class="token comment"># 关闭5901端口的桌面</span>
vncserver <span class="token parameter variable">-kill</span> :1

<span class="token comment"># 列出当前桌面会话</span>
vncserver <span class="token parameter variable">-list</span>

<span class="token comment"># 更改密码</span>
vncpasswd

<span class="token comment"># 备份</span>
<span class="token function">mv</span> ~/.vnc/xstartup ~/.vnc/xstartup.bak

<span class="token function">vim</span> ~/.vnc/xstartup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code> ~/.vnc/xstartup</code>内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
xrdb <span class="token environment constant">$HOME</span>/.Xresources
startxfce4 <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x ~/.vnc/xstartup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="连接" tabindex="-1"><a class="header-anchor" href="#连接" aria-hidden="true">#</a> 连接</h2>`,8),h={href:"https://github.com/TigerVNC/tigervnc/releases",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 建立安全隧道</span>
<span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">5901</span>:127.0.0.1:5901 <span class="token parameter variable">-p</span> <span class="token number">53217</span> kevin2li@kevin2li.top 
<span class="token comment"># 连接</span>
<span class="token comment"># 地址：127.0.0.1:5901</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/490930c65aea873ae4d8dc52d805032a.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="配置为系统服务" tabindex="-1"><a class="header-anchor" href="#配置为系统服务" aria-hidden="true">#</a> 配置为系统服务</h2><ul><li><code>/etc/systemd/system/vncserver@.service</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Start TightVNC server at startup
<span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">User</span><span class="token operator">=</span>kevin2li
<span class="token assign-left variable">Group</span><span class="token operator">=</span>kevin2li
<span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/home/kevin2li

<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/home/sammy/.vnc/%H:%i.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>-/usr/bin/vncserver <span class="token parameter variable">-kill</span> :%i <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/vncserver <span class="token parameter variable">-depth</span> <span class="token number">24</span> <span class="token parameter variable">-geometry</span> 1280x800 <span class="token parameter variable">-localhost</span> :%i
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/bin/vncserver <span class="token parameter variable">-kill</span> :%i

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运维命令" tabindex="-1"><a class="header-anchor" href="#运维命令" aria-hidden="true">#</a> 运维命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重载</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token comment"># 启动</span>
<span class="token function">sudo</span> systemctl start vncserver@1
<span class="token comment"># 查看状态</span>
<span class="token function">sudo</span> systemctl status vncserver@1
<span class="token comment"># 停止</span>
<span class="token function">sudo</span> systemctl stop vncserver@1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="manjaro安装教程" tabindex="-1"><a class="header-anchor" href="#manjaro安装教程" aria-hidden="true">#</a> Manjaro安装教程</h1><p>参考：</p>`,10),k={href:"https://wiki.archlinux.org/title/TigerVNC",target:"_blank",rel:"noopener noreferrer"},f={href:"https://forum.manjaro.org/t/root-tip-how-to-tigervnc-over-ssh/75087",target:"_blank",rel:"noopener noreferrer"},_={href:"https://archived.forum.manjaro.org/t/tigervnc-on-manjaro-arm-rpi4-running-gnome/123415/2",target:"_blank",rel:"noopener noreferrer"},x=i(`<h2 id="查看与安装桌面环境" tabindex="-1"><a class="header-anchor" href="#查看与安装桌面环境" aria-hidden="true">#</a> 查看与安装桌面环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> tigervnc

<span class="token comment"># 查看已有桌面环境</span>
<span class="token function">ls</span> /usr/share/xsessions
<span class="token comment"># gnome-classic.desktop  gnome-classic-xorg.desktop  gnome.desktop  gnome-xorg.desktop</span>

<span class="token comment"># 设置密码</span>
vncpasswd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-vnc-config" tabindex="-1"><a class="header-anchor" href="#配置-vnc-config" aria-hidden="true">#</a> 配置：<code>~/.vnc/config</code></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">session</span><span class="token operator">=</span>gnome
<span class="token assign-left variable">geometry</span><span class="token operator">=</span>1280x720
localhost
<span class="token assign-left variable">dpi</span><span class="token operator">=</span><span class="token number">96</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置允许用户-etc-tigervnc-vncserver-users" tabindex="-1"><a class="header-anchor" href="#配置允许用户-etc-tigervnc-vncserver-users" aria-hidden="true">#</a> 配置允许用户：<code>/etc/tigervnc/vncserver.users</code></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># TigerVNC User assignment</span>
<span class="token comment">#</span>
<span class="token comment"># This file assigns users to specific VNC display numbers.</span>
<span class="token comment"># The syntax is &lt;display&gt;=&lt;username&gt;. E.g.:</span>
<span class="token comment">#</span>
<span class="token comment"># :2=andrew</span>
<span class="token comment"># :3=lisa</span>
:1<span class="token operator">=</span>kevin2li
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运维命令-1" tabindex="-1"><a class="header-anchor" href="#运维命令-1" aria-hidden="true">#</a> 运维命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置开机自启</span>
systemctl <span class="token builtin class-name">enable</span> vncserver@:1
<span class="token comment"># 重启</span>
<span class="token function">reboot</span>

<span class="token comment"># 启动</span>
vncserver :1

<span class="token comment"># 连接</span>
<span class="token comment"># 搭建隧道</span>
<span class="token function">ssh</span> WS <span class="token parameter variable">-L</span> <span class="token number">9901</span>:localhost:5901
<span class="token comment"># vnc连接地址：localhost:9901</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function y(w,N){const a=o("ExternalLinkIcon");return r(),t("div",null,[p,v,n("ul",null,[n("li",null,[n("a",u,[s("https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-vnc-on-ubuntu-22-04"),e(a)])])]),m,c(" more "),b,n("p",null,[s("客户端下载："),n("a",h,[s("https://github.com/TigerVNC/tigervnc/releases"),e(a)])]),g,n("ul",null,[n("li",null,[n("a",k,[s("https://wiki.archlinux.org/title/TigerVNC"),e(a)])]),n("li",null,[n("a",f,[s("https://forum.manjaro.org/t/root-tip-how-to-tigervnc-over-ssh/75087"),e(a)])]),n("li",null,[n("a",_,[s("https://archived.forum.manjaro.org/t/tigervnc-on-manjaro-arm-rpi4-running-gnome/123415/2"),e(a)])])]),x])}const C=l(d,[["render",y],["__file","远程桌面工具—VNC安装与使用教程.html.vue"]]);export{C as default};
