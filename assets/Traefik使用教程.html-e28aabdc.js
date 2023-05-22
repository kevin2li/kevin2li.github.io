import{_ as s,W as t,X as i,Z as n,$ as e,a0 as o,Y as c,a1 as l,D as r}from"./framework-c9619a7b.js";const p={},d=n("h1",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),e(" 简介")],-1),u=n("figure",null,[n("img",{src:"https://minio.kevin2li.top/image-bed/vanblog/img/1d9e8f9ec5a449c6d5f5d5e3b39914eb.image.png",alt:"image.png",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image.png")],-1),k={href:"https://doc.traefik.io/traefik/routing/providers/docker/",target:"_blank",rel:"noopener noreferrer"},m=l(`<h1 id="教程" tabindex="-1"><a class="header-anchor" href="#教程" aria-hidden="true">#</a> 教程</h1><p><code>docker-compose.yml</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">reverse-proxy</span><span class="token punctuation">:</span>
    <span class="token comment"># The official v2 Traefik docker image</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> traefik<span class="token punctuation">:</span>v2.9
    <span class="token comment"># Enables the web UI and tells Traefik to listen to docker</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>api.insecure=true <span class="token punctuation">-</span><span class="token punctuation">-</span>providers.docker
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token comment"># The HTTP port</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
      <span class="token comment"># The Web UI (enabled by --api.insecure=true)</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token comment"># So that Traefik can listen to the Docker events</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(b,h){const a=r("ExternalLinkIcon");return t(),i("div",null,[d,u,n("p",null,[e("文档："),n("a",k,[e("https://doc.traefik.io/traefik/routing/providers/docker/"),o(a)])]),c(" more "),m])}const _=s(p,[["render",v],["__file","Traefik使用教程.html.vue"]]);export{_ as default};
