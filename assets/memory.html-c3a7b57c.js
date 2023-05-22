import{_ as e,p as n,q as s,a1 as a}from"./framework-5866ffd3.js";const i={},l=a(`<h2 id="内存管理" tabindex="-1"><a class="header-anchor" href="#内存管理" aria-hidden="true">#</a> 内存管理</h2><ul><li><code>free</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display system memory:</span>
<span class="token function">free</span>

<span class="token comment"># Display memory in Bytes/KB/MB/GB:</span>
<span class="token function">free</span> -b<span class="token operator">|</span>k<span class="token operator">|</span>m<span class="token operator">|</span>g

<span class="token comment"># Display memory in human-readable units:</span>
<span class="token function">free</span> <span class="token parameter variable">-h</span>

<span class="token comment"># Refresh the output every 2 seconds:</span>
<span class="token function">free</span> <span class="token parameter variable">-s</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="虚拟内存设置" tabindex="-1"><a class="header-anchor" href="#虚拟内存设置" aria-hidden="true">#</a> 虚拟内存设置</h3><ul><li><code>swapon</code></li></ul><p>参考：https://blog.kevin2li.top/post/25</p>`,6),r=[l];function t(c,o){return n(),s("div",null,r)}const p=e(i,[["render",t],["__file","memory.html.vue"]]);export{p as default};
