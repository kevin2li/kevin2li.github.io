import{_ as a,W as o,X as i,$ as e,a0 as n,a1 as l,Y as r,D as t}from"./framework-8f7a7057.js";const c={},d=r(`<h2 id="内存管理" tabindex="-1"><a class="header-anchor" href="#内存管理" aria-hidden="true">#</a> 内存管理</h2><ul><li><code>free</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display system memory:</span>
<span class="token function">free</span>

<span class="token comment"># Display memory in Bytes/KB/MB/GB:</span>
<span class="token function">free</span> -b<span class="token operator">|</span>k<span class="token operator">|</span>m<span class="token operator">|</span>g

<span class="token comment"># Display memory in human-readable units:</span>
<span class="token function">free</span> <span class="token parameter variable">-h</span>

<span class="token comment"># Refresh the output every 2 seconds:</span>
<span class="token function">free</span> <span class="token parameter variable">-s</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="虚拟内存设置" tabindex="-1"><a class="header-anchor" href="#虚拟内存设置" aria-hidden="true">#</a> 虚拟内存设置</h3><ul><li><code>swapon</code></li></ul>`,5),p={href:"https://blog.kevin2li.top/post/25",target:"_blank",rel:"noopener noreferrer"};function m(u,v){const s=t("ExternalLinkIcon");return o(),i("div",null,[d,e("p",null,[n("参考："),e("a",p,[n("https://blog.kevin2li.top/post/25"),l(s)])])])}const b=a(c,[["render",m],["__file","memory.html.vue"]]);export{b as default};
