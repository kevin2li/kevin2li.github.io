import{_ as l,W as c,X as t,$ as n,a0 as s,Z as a,Y as d,a1 as i,D as o}from"./framework-f38b131a.js";const r={},p=n("h1",{id:"方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法","aria-hidden":"true"},"#"),s(" 方法")],-1),m=n("h2",{id:"通过手机usb共享网络",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#通过手机usb共享网络","aria-hidden":"true"},"#"),s(" 通过手机USB共享网络")],-1),u=n("br",null,null,-1),v={href:"https://blog.51cto.com/u_15077549/4316908",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>在只有命令行界面的系统上，可以通过usb临时共享手机网络，安装相关包，然后设置无线连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看ip(应该会多一个usb0的接口)</span>
<span class="token function">ip</span> addr
<span class="token comment"># 为网络接口分配ip地址</span>
dhclient usb0
<span class="token comment"># 再次查看ip</span>
<span class="token function">ip</span> addr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=n("h2",{id:"连接无线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#连接无线","aria-hidden":"true"},"#"),s(" 连接无线")],-1),_={href:"https://jsrun.net/note/s6Bpp",target:"_blank",rel:"noopener noreferrer"},f=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> net-tools wireless-tools network-manager

<span class="token comment"># 查看wifi网卡名称</span>
iw dev

<span class="token comment"># 查看wifi网卡连接状态</span>
iw wlp2s0 <span class="token function">link</span>

<span class="token comment"># 启动wifi网卡</span>
<span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> wlp2s0 up
<span class="token comment"># ifconfig wlp2s0 up</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nmcli" tabindex="-1"><a class="header-anchor" href="#nmcli" aria-hidden="true">#</a> nmcli</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定wifi网卡扫描wifi</span>
iw dev wlp2s0 scan<span class="token operator">|</span><span class="token function">grep</span> SSID

<span class="token comment"># 开启wifi</span>
nmcli radio wifi on

<span class="token comment"># 查看网络设备列表</span>
nmcli dev
<span class="token comment">#tips: 如果列出的设备状态为unmanaged的，需要清空/etc/network/interfaces后重启</span>

<span class="token comment"># 查看wifi列表</span>
nmcli dev wifi list

<span class="token comment"># 连接wifi</span>
nmcli dev wifi connect <span class="token operator">&lt;</span>SSID<span class="token operator">&gt;</span> password <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span> ifname wlp2s0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(w,g){const e=o("ExternalLinkIcon");return c(),t("div",null,[p,m,n("p",null,[s("参考："),u,n("a",v,[s("https://blog.51cto.com/u_15077549/4316908"),a(e)])]),b,d(" more "),h,n("p",null,[s("参考："),n("a",_,[s("https://jsrun.net/note/s6Bpp"),a(e)])]),f])}const B=l(r,[["render",k],["__file","Linux命令行连接无线网络.html.vue"]]);export{B as default};
