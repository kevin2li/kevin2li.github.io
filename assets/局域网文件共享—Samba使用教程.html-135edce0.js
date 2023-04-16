import{_ as t,W as l,X as p,$ as n,a0 as a,Z as e,Y as i,a1 as c,D as o}from"./framework-f38b131a.js";const u={},r=n("h1",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),a(" 简介")],-1),d=n("p",null,"Samba协议是一种文件共享协议，用于在不同操作系统之间共享文件和打印机。它允许Linux和Unix系统与Windows系统之间进行文件和打印机共享。Samba协议是开放源代码的，它的实现是基于SMB/CIFS协议。Samba协议是一种客户端/服务器协议，它使用TCP/IP协议进行通信。Samba协议支持许多不同的操作系统，包括Windows、Linux、Unix、Mac OS等。",-1),v=n("p",null,"自1992年以来，Samba一直为所有使用SMB/CIFS协议的客户端（例如所有版本的DOS和Windows，OS/2，Linux和许多其他客户端）提供安全、稳定、快速的文件和打印服务。",-1),m={href:"https://hub.docker.com/r/dperson/samba",target:"_blank",rel:"noopener noreferrer"},k=n("h1",{id:"方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法","aria-hidden":"true"},"#"),a(" 方法")],-1),b=n("br",null,null,-1),y={href:"https://blog.kevin2li.top/post/29",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,[n("p",null,"编写docker compose文件")],-1),g=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/docker-apps/samba
<span class="token builtin class-name">cd</span> ~/docker-apps/samba
<span class="token function">vim</span> docker-compose.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker-compose.yaml</code>内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">samba</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> dperson/samba
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> samba
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> <span class="token string">&#39;Asia/Shanghai&#39;</span>
      <span class="token key atrule">USER</span><span class="token punctuation">:</span> <span class="token string">&quot;smb_user;password1&quot;</span>
      <span class="token key atrule">USER2</span><span class="token punctuation">:</span> <span class="token string">&quot;smb_admin;password2&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> default
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;137:137/udp&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;138:138/udp&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;139:139/tcp&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;445:445/tcp&quot;</span>
    <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">tmpfs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /tmp
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;./data1:/mount1&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;./data2:/mount2&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;./conf:/etc/samba&#39;</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token string">&#39;-p&#39;</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">default</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>填写配置文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> conf
<span class="token function">vim</span> conf/smb.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>conf/smb.conf</code>内容如下：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment"># This is the main Samba configuration file. You should read the</span>
<span class="token comment"># smb.conf(5) manual page in order to understand the options listed</span>
<span class="token comment"># here. Samba has a huge number of configurable options (perhaps too</span>
<span class="token comment"># many!) most of which are not shown in this example</span>
<span class="token comment">#</span>
<span class="token comment"># For a step to step guide on installing, configuring and using samba, </span>
<span class="token comment"># read the Samba-HOWTO-Collection. This may be obtained from:</span>
<span class="token comment">#  http://www.samba.org/samba/docs/Samba-HOWTO-Collection.pdf</span>
<span class="token comment">#</span>
<span class="token comment"># Many working examples of smb.conf files can be found in the </span>
<span class="token comment"># Samba-Guide which is generated daily and can be downloaded from: </span>
<span class="token comment">#  http://www.samba.org/samba/docs/Samba-Guide.pdf</span>
<span class="token comment">#</span>
<span class="token comment"># Any line which starts with a ; (semi-colon) or a # (hash) </span>
<span class="token comment"># is a comment and is ignored. In this example we will use a #</span>
<span class="token comment"># for commentry and a ; for parts of the config file that you</span>
<span class="token comment"># may wish to enable</span>
<span class="token comment">#</span>
<span class="token comment"># NOTE: Whenever you modify this file you should run the command &quot;testparm&quot;</span>
<span class="token comment"># to check that you have not made any basic syntactic errors. </span>
<span class="token comment">#</span>
<span class="token comment">#======================= Global Settings =====================================</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">global</span><span class="token punctuation">]</span></span>
   <span class="token key attr-name">workgroup</span> <span class="token punctuation">=</span> <span class="token value attr-value">MYGROUP</span>
   <span class="token key attr-name">server string</span> <span class="token punctuation">=</span> <span class="token value attr-value">Samba Server</span>
   <span class="token key attr-name">server role</span> <span class="token punctuation">=</span> <span class="token value attr-value">standalone server</span>
   <span class="token comment">; guest account = pcguest</span>
   <span class="token key attr-name">log file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/dev/stdout</span>
   <span class="token key attr-name">max log size</span> <span class="token punctuation">=</span> <span class="token value attr-value">50</span>
   <span class="token key attr-name">dns proxy</span> <span class="token punctuation">=</span> <span class="token value attr-value">no</span> 

   <span class="token key attr-name">pam password change</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>
   <span class="token key attr-name">map to guest</span> <span class="token punctuation">=</span> <span class="token value attr-value">bad user</span>
   <span class="token key attr-name">usershare allow guests</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>
   <span class="token key attr-name">create mask</span> <span class="token punctuation">=</span> <span class="token value attr-value">0664</span>
   <span class="token key attr-name">force create mode</span> <span class="token punctuation">=</span> <span class="token value attr-value">0664</span>
   <span class="token key attr-name">directory mask</span> <span class="token punctuation">=</span> <span class="token value attr-value">0775</span>
   <span class="token key attr-name">force directory mode</span> <span class="token punctuation">=</span> <span class="token value attr-value">0775</span>
   <span class="token key attr-name">force user</span> <span class="token punctuation">=</span> <span class="token value attr-value">smbuser</span>
   <span class="token key attr-name">force group</span> <span class="token punctuation">=</span> <span class="token value attr-value">smb</span>
   <span class="token key attr-name">follow symlinks</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>
   <span class="token key attr-name">load printers</span> <span class="token punctuation">=</span> <span class="token value attr-value">no</span>
   <span class="token key attr-name">printing</span> <span class="token punctuation">=</span> <span class="token value attr-value">bsd</span>
   <span class="token key attr-name">printcap name</span> <span class="token punctuation">=</span> <span class="token value attr-value">/dev/null</span>
   <span class="token key attr-name">disable spoolss</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>
   <span class="token key attr-name">strict locking</span> <span class="token punctuation">=</span> <span class="token value attr-value">no</span>
   <span class="token key attr-name">aio read size</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
   <span class="token key attr-name">aio write size</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
   <span class="token key attr-name">vfs objects</span> <span class="token punctuation">=</span> <span class="token value attr-value">catia fruit recycle streams_xattr</span>
   <span class="token key attr-name">recycle:keeptree</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>
   <span class="token key attr-name">recycle:maxsize</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
   <span class="token key attr-name">recycle:repository</span> <span class="token punctuation">=</span> <span class="token value attr-value">.deleted</span>
   <span class="token key attr-name">recycle:versions</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>

   <span class="token comment"># Security</span>
   <span class="token key attr-name">client ipc max protocol</span> <span class="token punctuation">=</span> <span class="token value attr-value">SMB3</span>
   <span class="token key attr-name">client ipc min protocol</span> <span class="token punctuation">=</span> <span class="token value attr-value">SMB2_10</span>
   <span class="token key attr-name">client max protocol</span> <span class="token punctuation">=</span> <span class="token value attr-value">SMB3</span>
   <span class="token key attr-name">client min protocol</span> <span class="token punctuation">=</span> <span class="token value attr-value">SMB2_10</span>
   <span class="token key attr-name">server max protocol</span> <span class="token punctuation">=</span> <span class="token value attr-value">SMB3</span>
   <span class="token key attr-name">server min protocol</span> <span class="token punctuation">=</span> <span class="token value attr-value">SMB2_10</span>

   <span class="token comment"># Time Machine</span>
   <span class="token key attr-name">fruit:delete_empty_adfiles</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>
   <span class="token key attr-name">fruit:time machine</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>
   <span class="token key attr-name">fruit:veto_appledouble</span> <span class="token punctuation">=</span> <span class="token value attr-value">no</span>
   <span class="token key attr-name">fruit:wipe_intentionally_left_blank_rfork</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>

<span class="token key attr-name">include</span> <span class="token punctuation">=</span> <span class="token value attr-value">/etc/samba/%U.smb.conf</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">共享文件夹1</span><span class="token punctuation">]</span></span>
   <span class="token key attr-name">path</span> <span class="token punctuation">=</span> <span class="token value attr-value">/mount1/</span>
   <span class="token key attr-name">browsable</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>
   <span class="token key attr-name">read only</span> <span class="token punctuation">=</span> <span class="token value attr-value">no</span>
   <span class="token key attr-name">guest ok</span> <span class="token punctuation">=</span> <span class="token value attr-value">no</span>
   <span class="token key attr-name">admin users</span> <span class="token punctuation">=</span> <span class="token value attr-value">smb_user,smb_admin</span>
   <span class="token key attr-name">read list</span> <span class="token punctuation">=</span> <span class="token value attr-value">smb_user,smb_admin</span>
   <span class="token key attr-name">write list</span> <span class="token punctuation">=</span> <span class="token value attr-value">smb_user,smb_admin</span>
   <span class="token key attr-name">comment</span> <span class="token punctuation">=</span> <span class="token value attr-value">共享文件夹1的说明</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>启动</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>`,10);function _(f,S){const s=o("ExternalLinkIcon");return l(),p("div",null,[r,d,v,n("p",null,[a("docker镜像： "),n("a",m,[a("https://hub.docker.com/r/dperson/samba"),e(s)])]),i(" more "),k,n("ol",null,[n("li",null,[n("p",null,[a("配置docker、docker-compose环境"),b,a(" 参考："),n("a",y,[a("https://blog.kevin2li.top/post/29"),e(s)])])]),h]),g])}const x=t(u,[["render",_],["__file","局域网文件共享—Samba使用教程.html.vue"]]);export{x as default};
