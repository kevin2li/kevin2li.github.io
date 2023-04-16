import{_ as t,W as i,X as p,$ as n,a0 as s,Z as e,Y as l,a1 as c,D as o}from"./framework-f38b131a.js";const r={},d=n("h1",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),u=n("p",null,"Caddy是一款基于Go语言编写的强大且可扩展的平台，可以给你的站点、服务和应用程序提供服务。可以将其看作Nginx的替代品之一，但是配置却更加简单方便，且支持自动HTTPS。",-1),v=n("figure",null,[n("img",{src:"https://blog.kevin2li.top/static/img/fbb3ccc9560a60489346f841f72b063b.image.png",alt:"image.png",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image.png")],-1),m={href:"https://caddyserver.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://caddyserver.com/docs/",target:"_blank",rel:"noopener noreferrer"},b=n("h1",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),h={href:"https://caddyserver.com/docs/install",target:"_blank",rel:"noopener noreferrer"},y=c(`<h2 id="ubuntu安装" tabindex="-1"><a class="header-anchor" href="#ubuntu安装" aria-hidden="true">#</a> Ubuntu安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> debian-keyring debian-archive-keyring apt-transport-https
<span class="token function">curl</span> <span class="token parameter variable">-1sLf</span> <span class="token string">&#39;https://dl.cloudsmith.io/public/caddy/stable/gpg.key&#39;</span> <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /usr/share/keyrings/caddy-stable-archive-keyring.gpg
<span class="token function">curl</span> <span class="token parameter variable">-1sLf</span> <span class="token string">&#39;https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt&#39;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/caddy-stable.list
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> caddy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他系统平台安装参见文档。</p><h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>需要先将DNS的A/AAAA记录指向服务器的公网IP，这样caddy会自动为指定的主机名申请ssl证书</p></div><h2 id="命令行方式" tabindex="-1"><a class="header-anchor" href="#命令行方式" aria-hidden="true">#</a> 命令行方式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置文件服务器</span>
$ caddy file-server
<span class="token comment"># 指定域名</span>
$ caddy file-server <span class="token parameter variable">--domain</span> example.com
<span class="token comment"># 设置反向代理</span>
$ caddy reverse-proxy <span class="token parameter variable">--from</span> example.com <span class="token parameter variable">--to</span> localhost:9000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="caddyfile方式" tabindex="-1"><a class="header-anchor" href="#caddyfile方式" aria-hidden="true">#</a> Caddyfile方式</h2><p><strong>启动</strong>(与Caddyfile同一目录下执行)：<br><code>caddy run</code></p><div class="hint-container tip"><p class="hint-container-title">服务方式运行(推荐)</p><p>caddy也提供了系统服务运行方式，方便管理<br> 需要将配置写入<code>/etc/caddy/Caddyfile</code><br> 启动： <code>sudo systemctl start caddy</code></p></div><ul><li>单站点</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>example.com

<span class="token comment"># Templates give static sites some dynamic features</span>
templates

<span class="token comment"># Compress responses according to Accept-Encoding headers</span>
encode gzip zstd

<span class="token comment"># Make HTML file extension optional</span>
try_files <span class="token punctuation">{</span>path<span class="token punctuation">}</span>.html <span class="token punctuation">{</span>path<span class="token punctuation">}</span>

<span class="token comment"># Send API requests to backend</span>
reverse_proxy /api/* localhost<span class="token punctuation">:</span><span class="token number">9005</span>

<span class="token comment"># Serve everything else from the file system</span>
file_server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置多站点</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 单host</span>
app1.example.com <span class="token punctuation">{</span>
    reverse_proxy 127.0.0.1<span class="token punctuation">:</span><span class="token number">10010</span>
<span class="token punctuation">}</span>

<span class="token comment"># 多host</span>
<span class="token punctuation">:</span><span class="token number">80</span><span class="token punctuation">,</span> example.com<span class="token punctuation">,</span> app2.example.com<span class="token punctuation">{</span>
    reverse_proxy 127.0.0.1<span class="token punctuation">:</span><span class="token number">10011</span>
<span class="token punctuation">}</span>

<span class="token comment"># 带路径</span>
example.com<span class="token punctuation">,</span> app2.example.com<span class="token punctuation">{</span>
    reverse_proxy /api/* 127.0.0.1<span class="token punctuation">:</span><span class="token number">10011</span>
<span class="token punctuation">}</span>

<span class="token comment"># 多node</span>
example.com<span class="token punctuation">,</span> app2.example.com<span class="token punctuation">{</span>
    reverse_proxy 127.0.0.1<span class="token punctuation">:</span><span class="token number">10011</span><span class="token punctuation">,</span> 10.0.1.1<span class="token punctuation">:</span><span class="token number">10011</span><span class="token punctuation">,</span> 10.0.1.2<span class="token punctuation">:</span><span class="token number">10011</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api方式" tabindex="-1"><a class="header-anchor" href="#api方式" aria-hidden="true">#</a> API方式</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /config/

<span class="token punctuation">{</span>
  <span class="token property">&quot;apps&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;http&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;example&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:2080&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">&quot;@id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;handle&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token property">&quot;handler&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file_server&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;browse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function g(f,_){const a=o("ExternalLinkIcon");return i(),p("div",null,[d,u,v,n("p",null,[s("官网： "),n("a",m,[s("https://caddyserver.com/"),e(a)]),s(" 文档："),n("a",k,[s("https://caddyserver.com/docs/"),e(a)])]),l(" more "),b,n("blockquote",null,[n("p",null,[s("参考： "),n("a",h,[s("https://caddyserver.com/docs/install"),e(a)])])]),y])}const q=t(r,[["render",g],["__file","Caddy使用教程.html.vue"]]);export{q as default};
