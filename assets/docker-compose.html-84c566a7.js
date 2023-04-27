import{_ as a,W as e,X as t,$ as n,a0 as l,a1 as i,Z as c,D as o}from"./framework-805da640.js";const p={},u={href:"https://docs.docker.com/compose/compose-file/05-services/",target:"_blank",rel:"noopener noreferrer"},d=c(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">srv_name</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> awesome/backend
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> srv_name
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped <span class="token comment"># always</span>
    
    <span class="token comment"># 环境变量设置</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> <span class="token string">&quot;Asia/Shanghai&quot;</span>

    <span class="token comment"># env_file: ./docker.env</span>

    <span class="token comment"># 数据卷设置</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>PWD<span class="token punctuation">}</span>/data<span class="token punctuation">:</span>/app/data
      <span class="token punctuation">-</span> database<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/app/data2

    <span class="token comment"># 网络设置 </span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> internal
    <span class="token comment"># network_mode: &quot;host&quot;</span>
    
    <span class="token comment"># 端口映射</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9001<span class="token punctuation">:</span><span class="token number">6412</span>

    <span class="token comment"># 执行命令</span>
    <span class="token comment"># command: [&quot;redis-server&quot;, &quot;/redis.conf&quot;]</span>

    <span class="token comment"># 依赖顺序</span>
    <span class="token comment"># depends_on:</span>
    <span class="token comment">#   - redis</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">internal</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">name</span><span class="token punctuation">:</span> vanblog<span class="token punctuation">-</span>network
  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">database-data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(v,m){const s=o("ExternalLinkIcon");return e(),t("div",null,[n("p",null,[n("a",u,[l("docker-compose文档"),i(s)])]),d])}const b=a(p,[["render",r],["__file","docker-compose.html.vue"]]);export{b as default};
