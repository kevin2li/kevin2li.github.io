import{_ as t,W as l,X as r,$ as n,a0 as e,a1 as s,Y as c,Z as i,D as o}from"./framework-805da640.js";const d={},p=n("h1",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),e(" 简介")],-1),u=n("p",null,"Nginx是一个高性能的HTTP和反向代理web服务器，具有占有内存少，并发能力强等特点。",-1),m=n("figure",null,[n("img",{src:"https://minio.kevin2li.top/image-bed/vanblog/img/91dcaa8515bc528fb886bcac4f00edf9.image.png",alt:"image.png",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image.png")],-1),v={href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),h={href:"https://www.nginx.com/resources/wiki/",target:"_blank",rel:"noopener noreferrer"},g=n("h1",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),e(" 安装")],-1),_={href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/",target:"_blank",rel:"noopener noreferrer"},k=i(`<h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-t</span>
nginx <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="常用配置" tabindex="-1"><a class="header-anchor" href="#常用配置" aria-hidden="true">#</a> 常用配置</h1>`,3),f={href:"https://mp.weixin.qq.com/s?__biz=MzU4ODI1MjA3NQ==&mid=2247505559&idx=2&sn=c885d30be2456658bf4d1a044e87f27b&chksm=fddd0053caaa89456dbff5ca37397deafdb54a7e2ccb1fcfd14ea4ac9853b5ff054319a6d7e9&mpshare=1&scene=1&srcid=0818gcbcfKBKRXQ2owHzviRb&sharer_sharetime=1660837414695&sharer_shareid=b44ebbe82718b61b6a9fa0be4bb87fab#rd",target:"_blank",rel:"noopener noreferrer"},x=i(`<figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/92d5a41ece12f2089d9648c5708353f3.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>推荐配置举例： 配置文件位置：<code>/etc/nginx/nginx.conf</code><br> 内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>load_module /usr/lib/nginx/modules/ngx_stream_module.so;
user www<span class="token punctuation">-</span>data;
worker_processes auto;
pid /run/nginx.pid;
events <span class="token punctuation">{</span>
    worker_connections  1024;
    accept_mutex on;
<span class="token punctuation">}</span>
  
http <span class="token punctuation">{</span>
  include mime.types;
  default_type application/octet<span class="token punctuation">-</span>stream;
  keepalive_timeout 75s;
  gzip on;
  gzip_min_length 4k;
  gzip_comp_level 4;
  client_max_body_size 1024m;
  client_header_buffer_size 32k;
  client_body_buffer_size 8m;
  server_names_hash_bucket_size 512;
  proxy_headers_hash_max_size 51200;
  proxy_headers_hash_bucket_size 6400;
  gzip_types application/javascript application/x<span class="token punctuation">-</span>javascript text/javascript text/css application/json application/xml;
  error_log /var/log/nginx/error.log;
  access_log /var/log/nginx/access.log;

  server <span class="token punctuation">{</span>
    server_name blog.example.com;
    listen 443 default ssl http2;
    ssl_certificate <span class="token important">*.cer;</span>
    ssl_certificate_key <span class="token important">*.key;</span>
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    listen 80 default;
    if ($scheme = http) <span class="token punctuation">{</span>
      return 301 https<span class="token punctuation">:</span>//$host<span class="token punctuation">:</span>443$request_uri;
    <span class="token punctuation">}</span>
    location / <span class="token punctuation">{</span>
      <span class="token comment"># blog;</span>
      proxy_pass http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>10011;
      proxy_set_header Host $host;
      proxy_set_header X<span class="token punctuation">-</span>Real<span class="token punctuation">-</span>IP $remote_addr;
      proxy_set_header X<span class="token punctuation">-</span>Forwarded<span class="token punctuation">-</span>For $proxy_add_x_forwarded_for;
      proxy_set_header X<span class="token punctuation">-</span>Forwarded<span class="token punctuation">-</span>Host $http_host;
      proxy_set_header X<span class="token punctuation">-</span>Forwarded<span class="token punctuation">-</span>Port $server_port;
      proxy_set_header X<span class="token punctuation">-</span>Forwarded<span class="token punctuation">-</span>Proto $scheme;
      proxy_redirect http<span class="token punctuation">:</span>// https<span class="token punctuation">:</span>//;
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

stream <span class="token punctuation">{</span>
  log_format basic &#39;$remote_addr <span class="token punctuation">[</span>$time_local<span class="token punctuation">]</span> $protocol $status $bytes_sent $bytes_received $session_time &quot;$upstream_addr&quot; &quot;$upstream_bytes_sent&quot; &quot;$upstream_bytes_received&quot; &quot;$upstream_connect_time&quot;&#39;;
  access_log /var/log/nginx/stream_access.log basic;
  open_log_file_cache off;
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="ssl证书申请与自动续签" tabindex="-1"><a class="header-anchor" href="#ssl证书申请与自动续签" aria-hidden="true">#</a> SSL证书申请与自动续签</h1>`,4),w=n("p",null,"参考：",-1),y={href:"https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/acmesh-official/acme.sh",target:"_blank",rel:"noopener noreferrer"},$={id:"安装acme-sh",tabindex:"-1"},z=n("a",{class:"header-anchor",href:"#安装acme-sh","aria-hidden":"true"},"#",-1),N={href:"http://xn--acme-ke9g492u.sh",target:"_blank",rel:"noopener noreferrer"},S=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载并安装</span>
<span class="token function">curl</span> https://get.acme.sh <span class="token operator">|</span> <span class="token function">sh</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">email</span><span class="token operator">=</span>my@example.com

<span class="token comment"># (可选，创建别名方便使用)</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">acme.sh</span><span class="token operator">=~</span>/.acme.sh/acme.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置dns-api" tabindex="-1"><a class="header-anchor" href="#配置dns-api" aria-hidden="true">#</a> 配置DNS API</h2><ul><li>腾讯云DNSPOD</li></ul><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/ee3622e1c31dc939cc489fa6c71d4127.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/e54eb08f69113e8c057f5a20a10463db.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>记录下申请的密钥的ID和Token值，并执行下面命令存到环境变量中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">DP_Id</span><span class="token operator">=</span><span class="token string">&quot;123456&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DP_Key</span><span class="token operator">=</span><span class="token string">&quot;602abcd&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="申请证书" tabindex="-1"><a class="header-anchor" href="#申请证书" aria-hidden="true">#</a> 申请证书</h2><ul><li>腾讯云</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 为nginx申请证书(可多次使用-d选项，同时申请多个证书)</span>
acme.sh <span class="token parameter variable">--dns</span> dns_dp <span class="token parameter variable">--issue</span> <span class="token parameter variable">-d</span> example.com <span class="token parameter variable">--nginx</span>

<span class="token comment"># 申请泛域名证书</span>
acme.sh <span class="token parameter variable">--dns</span> dns_dp <span class="token parameter variable">--issue</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;*.example.com&quot;</span>  <span class="token parameter variable">-d</span> example.com <span class="token parameter variable">--nginx</span>

<span class="token comment"># 为web root申请证书</span>
acme.sh <span class="token parameter variable">--dns</span> dns_dp <span class="token parameter variable">--issue</span> <span class="token parameter variable">-d</span> example.com <span class="token parameter variable">-d</span> www.example.com <span class="token parameter variable">--webroot</span> /home/wwwroot/mydomain.com/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装证书" tabindex="-1"><a class="header-anchor" href="#安装证书" aria-hidden="true">#</a> 安装证书</h2><p>:::warning{title=&quot;注意&quot;} 默认生成的证书都放在安装目录下: ~/.acme.sh/, 请不要直接使用此目录下的文件, 例如: 不要直接让 nginx/apache 的配置文件使用这下面的文件. 这里面的文件都是内部使用, 而且目录结构可能会变化. :::</p><ul><li>nginx</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>acme.sh --install-cert <span class="token parameter variable">-d</span> example.com <span class="token punctuation">\\</span>
--key-file       /path/to/keyfile/in/nginx/key.pem  <span class="token punctuation">\\</span>
--fullchain-file /path/to/fullchain/nginx/cert.pem <span class="token punctuation">\\</span>
<span class="token parameter variable">--reloadcmd</span>     <span class="token string">&quot;service nginx force-reload&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动续签" tabindex="-1"><a class="header-anchor" href="#自动续签" aria-hidden="true">#</a> 自动续签</h2><p>acme安装成功后会自动为你创建 cronjob, 每天 0:00 点自动检测所有的证书, 如果快过期了, 需要更新, 则会自动更新证书。可通过<code>crontab -l</code>查看定时任务：</p><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/6005f88273a3b369ef0b62d7d6d8eec2.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>`,17);function D(P,T){const a=o("ExternalLinkIcon");return l(),r("div",null,[p,u,m,n("p",null,[e("官网："),n("a",v,[e("https://www.nginx.com/"),s(a)]),b,e(" 文档："),n("a",h,[e("https://www.nginx.com/resources/wiki/"),s(a)])]),c(" more "),g,n("blockquote",null,[n("p",null,[e("参考："),n("a",_,[e("https://www.nginx.com/resources/wiki/start/topics/tutorials/install/"),s(a)])])]),k,n("blockquote",null,[n("p",null,[e("参考："),n("a",f,[e("微信：看完这篇还不懂Nginx服务器配置，那我要哭了"),s(a)])])]),x,n("blockquote",null,[w,n("ol",null,[n("li",null,[n("a",y,[e("https://github.com/acmesh-official/acme.sh/wiki/说明"),s(a)])]),n("li",null,[n("a",q,[e("https://github.com/acmesh-official/acme.sh"),s(a)])])])]),n("h2",$,[z,e(),n("a",N,[e("安装acme.sh"),s(a)])]),S])}const L=t(d,[["render",D],["__file","Nginx使用教程.html.vue"]]);export{L as default};
