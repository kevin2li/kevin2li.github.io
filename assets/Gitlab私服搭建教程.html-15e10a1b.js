import{_ as t,W as l,X as p,Z as n,$ as s,a0 as e,a1 as i,D as o}from"./framework-c9619a7b.js";const c={},r=i('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>xx</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="裸机安装" tabindex="-1"><a class="header-anchor" href="#裸机安装" aria-hidden="true">#</a> 裸机安装</h3>',4),d={href:"https://about.gitlab.com/install/#ubuntu",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">curl</span> openssh-server ca-certificates tzdata perl


<span class="token function">curl</span> https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>todo: 未完成</p><h3 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> docker安装</h3>`,3),v={href:"https://docs.gitlab.com/ee/install/docker.html",target:"_blank",rel:"noopener noreferrer"},k=i(`<ol><li>设置<code>GITLAB_HOME</code>环境变量</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">GITLAB_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/gitlab

<span class="token comment"># 写入shell&#39;s profile</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;export GITLAB_HOME=<span class="token environment constant">$HOME</span>/gitlab&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用docker-compose安装</li></ol><p>注意将域名改为自己的.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.6&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab/gitlab-ce:latest&#39;</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gitlab
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab.kevin2li.top&#39;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">GITLAB_OMNIBUS_CONFIG</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
        external_url &#39;https://gitlab.kevin2li.top&#39;
        # Add any other gitlab.rb configuration here, each on its own line
        gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 5022
        nginx[&#39;listen_port&#39;] = 80
        nginx[&#39;listen_https&#39;] = false</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;5080:80&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;5443:443&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;5022:22&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;\${PWD}/config:/etc/gitlab&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;\${PWD}/logs:/var/log/gitlab&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;\${PWD}/data:/var/opt/gitlab&#39;</span>
    <span class="token key atrule">shm_size</span><span class="token punctuation">:</span> <span class="token string">&#39;256m&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可能需要等待一会才能正常运行,可以进入容器查看状态:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab <span class="token function">bash</span>
<span class="token comment"># 查看状态</span>
gitlab-ctl status

<span class="token comment"># 重启各项服务</span>
gitlab-ctl reconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当出现下面结果时,说明已经正常运行</p><figure><img src="https://minio.kevin2li.top/image-bed/blog/20230523142631.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>域名访问配置</li></ol><ul><li><p>域名可解析 添加一条A记录,域名为<code>gitlab.kevin2li.top</code>.</p></li><li><p>内网穿透 将服务器的<code>5022</code>端口映射到本地服务器的<code>5022</code>端口.</p></li><li><p>反向代理</p></li></ul><p>nginx:</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># gitlab</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server_name</span> gitlab.kevin2li.top</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate</span> /etc/nginx/ssl/kevin2li.top/fullchain.cer</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/nginx/ssl/kevin2li.top/kevin2li.top.key</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1 TLSv1.1 TLSv1.2 TLSv1.3</span><span class="token punctuation">;</span>
    
    <span class="token comment"># listen 80 default;</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$scheme</span> = http)</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span>:443<span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:5080</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Port <span class="token variable">$server_port</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection upgrade</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Accept-Encoding gzip</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_redirect</span> http:// https://</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>访问</li></ol><p><code>https://gitlab.example.com</code></p><ul><li>用户名: <code>root</code></li><li>密码: 通过下面命令行查看</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab <span class="token function">grep</span> <span class="token string">&#39;Password:&#39;</span> /etc/gitlab/initial_root_password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意:</p><p>第一次登录建议用管理员root账号登录,否则会出现下面的警告:</p><figure><img src="https://minio.kevin2li.top/image-bed/blog/20230522224543.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以在root登录后,设置界面取消勾选管理员同意注册选项. <img src="https://minio.kevin2li.top/image-bed/blog/20230522224819.png" alt="" loading="lazy"></p><p>或者同意新注册的用户:</p><figure><img src="https://minio.kevin2li.top/image-bed/blog/20230523102457.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>之后就可以愉快的使用了.</p><h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>`,27),b={href:"https://docs.gitlab.com/omnibus/settings/ssl/#change-the-default-ssl-certificate-location",target:"_blank",rel:"noopener noreferrer"};function m(g,h){const a=o("ExternalLinkIcon");return l(),p("div",null,[r,n("blockquote",null,[n("p",null,[s("参考："),n("a",d,[s("https://about.gitlab.com/install/#ubuntu"),e(a)])])]),u,n("blockquote",null,[n("p",null,[s("参考："),n("a",v,[s("https://docs.gitlab.com/ee/install/docker.html"),e(a)])])]),k,n("ol",null,[n("li",null,[n("a",b,[s("Configure SSL for the GitLab Linux package "),e(a)])])])])}const f=t(c,[["render",m],["__file","Gitlab私服搭建教程.html.vue"]]);export{f as default};
