import{_ as l,W as i,X as p,Z as n,$ as a,a0 as e,Y as o,a1 as t,D as c}from"./framework-c9619a7b.js";const u={},r=n("h1",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),a(" 简介")],-1),d=n("p",null,"Samba协议是一种文件共享协议，用于在不同操作系统之间共享文件和打印机。它允许Linux和Unix系统与Windows系统之间进行文件和打印机共享。Samba协议是开放源代码的，它的实现是基于SMB/CIFS协议。Samba协议是一种客户端/服务器协议，它使用TCP/IP协议进行通信。Samba协议支持许多不同的操作系统，包括Windows、Linux、Unix、Mac OS等。",-1),m=n("p",null,"自1992年以来，Samba一直为所有使用SMB/CIFS协议的客户端（例如所有版本的DOS和Windows，OS/2，Linux和许多其他客户端）提供安全、稳定、快速的文件和打印服务。",-1),v={href:"https://hub.docker.com/r/dperson/samba",target:"_blank",rel:"noopener noreferrer"},k=n("h1",{id:"方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法","aria-hidden":"true"},"#"),a(" 方法")],-1),b=n("h2",{id:"使用docker安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用docker安装","aria-hidden":"true"},"#"),a(" 使用Docker安装")],-1),h=n("br",null,null,-1),y={href:"https://blog.kevin2li.top/post/29",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,[n("p",null,"编写docker compose文件")],-1),f=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/docker-apps/samba
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="裸机安装" tabindex="-1"><a class="header-anchor" href="#裸机安装" aria-hidden="true">#</a> 裸机安装</h2>`,10),_={href:"https://ubuntu.com/tutorials/install-and-configure-samba#2-installing-samba",target:"_blank",rel:"noopener noreferrer"},w=t(`<ol><li>安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> samba
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建共享目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /home/samba/public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>修改配置文件: <code>/etc/samba/smb.conf</code></li></ol><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment"># 定义共享目录及权限</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">public</span><span class="token punctuation">]</span></span>
  <span class="token key attr-name">path</span> <span class="token punctuation">=</span> <span class="token value attr-value">/home/samba/public</span>
  <span class="token key attr-name">comment</span> <span class="token punctuation">=</span> <span class="token value attr-value">public directory</span>
  <span class="token key attr-name">browsable</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>
  <span class="token key attr-name">read only</span> <span class="token punctuation">=</span> <span class="token value attr-value">no</span>
  <span class="token key attr-name">writable</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>
  <span class="token key attr-name">valid users</span> <span class="token punctuation">=</span> <span class="token value attr-value">user1,user2</span>
  <span class="token key attr-name">create mask</span> <span class="token punctuation">=</span> <span class="token value attr-value">0666 # 创建文件权限</span>
  <span class="token key attr-name">directory mask</span> <span class="token punctuation">=</span> <span class="token value attr-value">0777 # 创建目录权限</span>
  <span class="token key attr-name">guest ok</span> <span class="token punctuation">=</span> <span class="token value attr-value">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>权限说明：</p><ul><li><p><code>browsable</code>: 用于定义共享目录是否可浏览。如果设置为Yes，则共享目录可以被浏览，用户可以在网络上看到该共享目录，并访问其中的文件和子目录。如果设置为No，则共享目录不可以被浏览，用户无法看到该共享目录，也无法访问其中的文件和子目录。</p></li><li><p><code>read only</code>：指定共享目录是否只读。如果设置为Yes，则用户只能读取共享目录中的文件和目录，不能进行创建、修改和删除操作。如果设置为No，则用户可以进行读写操作。</p></li><li><p><code>writable</code>：指定共享目录是否可以被写入。如果设置为Yes，则用户可以进行创建、修改和删除操作。如果设置为No，则用户只能读取共享目录中的文件和目录，不能进行写入操作。</p></li></ul><ol start="4"><li>启动服务</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
<span class="token function">sudo</span> systemctl start smbd

<span class="token comment"># 查看服务状态</span>
<span class="token function">sudo</span> systemctl status smbd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>防火墙放行</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-service<span class="token operator">=</span>samba
<span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>添加用户</li></ol><p>由于samba不使用系统账户的密码，需要单独为用户指定samba密码。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置smb密码</span>
<span class="token function">sudo</span> smbpasswd <span class="token parameter variable">-a</span> username

<span class="token comment"># 查看samba用户列表</span>
<span class="token function">sudo</span> pdbedit <span class="token parameter variable">-w</span> <span class="token parameter variable">-L</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>连接</li></ol><ul><li>Windows</li></ul><p>路径：<code>\\\\ip-address\\sambashare</code></p><p>可以<code>Win+R</code>输入，或者在文件资源管理器地址栏输入。</p><p>为了访问方便，还可以将其加入网络位置。</p><figure><img src="https://minio.kevin2li.top/image-bed/blog/20230521210408.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://minio.kevin2li.top/image-bed/blog/20230521210106.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Linux<br> 路径：<code>smb://ip-address/sambashare</code></li></ul>`,23);function x(S,q){const s=c("ExternalLinkIcon");return i(),p("div",null,[r,d,m,n("p",null,[a("docker镜像： "),n("a",v,[a("https://hub.docker.com/r/dperson/samba"),e(s)])]),o(" more "),k,b,n("ol",null,[n("li",null,[n("p",null,[a("配置docker、docker-compose环境"),h,a(" 参考："),n("a",y,[a("https://blog.kevin2li.top/post/29"),e(s)])])]),g]),f,n("p",null,[a("参考："),n("a",_,[a("https://ubuntu.com/tutorials/install-and-configure-samba#2-installing-samba"),e(s)])]),w])}const B=l(u,[["render",x],["__file","局域网文件共享—Samba使用教程.html.vue"]]);export{B as default};
