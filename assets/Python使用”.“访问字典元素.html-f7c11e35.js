import{_ as t,W as e,X as p,Y as i,$ as n,a0 as c,a1 as o,Z as s,D as l}from"./framework-805da640.js";const u={},d=s(`<h1 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h1><h2 id="选项1-访问不存在的键会报错" tabindex="-1"><a class="header-anchor" href="#选项1-访问不存在的键会报错" aria-hidden="true">#</a> 选项1：访问不存在的键会报错</h2><ul><li>写法1：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">AttributeDict</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    __getattr__ <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">.</span>__getitem__
    __setattr__ <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">.</span>__setitem__
    __delattr__ <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">.</span>__delitem__


my_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;website&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;bobbyhadz.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;topic&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Python&#39;</span><span class="token punctuation">}</span>

new_dict <span class="token operator">=</span> AttributeDict<span class="token punctuation">(</span>my_dict<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>new_dict<span class="token punctuation">.</span>website<span class="token punctuation">)</span>  <span class="token comment"># 👉️ bobbyhadz.com</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_dict<span class="token punctuation">.</span>topic<span class="token punctuation">)</span>  <span class="token comment"># 👉️ Python</span>

new_dict<span class="token punctuation">.</span>author <span class="token operator">=</span> <span class="token string">&#39;Borislav Hadzhiev&#39;</span>

<span class="token comment"># 👇️ {&#39;id&#39;: 1, &#39;website&#39;: &#39;bobbyhadz.com&#39;, &#39;topic&#39;: &#39;Python&#39;, &#39;author&#39;: &#39;Borislav Hadzhiev&#39;}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_dict<span class="token punctuation">)</span>

<span class="token keyword">del</span> new_dict<span class="token punctuation">.</span>author

<span class="token comment"># 👇️ {&#39;id&#39;: 1, &#39;website&#39;: &#39;bobbyhadz.com&#39;, &#39;topic&#39;: &#39;Python&#39;}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_dict<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=s(`<ul><li>写法2：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">AttributeDict</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>__dict__ <span class="token operator">=</span> self


my_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;website&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;bobbyhadz.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;topic&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Python&#39;</span><span class="token punctuation">}</span>

new_dict <span class="token operator">=</span> AttributeDict<span class="token punctuation">(</span>my_dict<span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span>new_dict<span class="token punctuation">.</span>website<span class="token punctuation">)</span>  <span class="token comment"># 👉️ bobbyhadz.com</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_dict<span class="token punctuation">.</span>topic<span class="token punctuation">)</span>  <span class="token comment"># 👉️ Python</span>

<span class="token comment"># ✅ add a key to the dictionary</span>
new_dict<span class="token punctuation">.</span>author <span class="token operator">=</span> <span class="token string">&#39;Borislav Hadzhiev&#39;</span>

<span class="token comment"># 👇️ {&#39;id&#39;: 1, &#39;website&#39;: &#39;bobbyhadz.com&#39;, &#39;topic&#39;: &#39;Python&#39;, &#39;author&#39;: &#39;Borislav Hadzhiev&#39;}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_dict<span class="token punctuation">)</span>

<span class="token comment"># ✅ delete a key from the dictionary</span>
<span class="token keyword">del</span> new_dict<span class="token punctuation">.</span>author

<span class="token comment"># 👇️ {&#39;id&#39;: 1, &#39;website&#39;: &#39;bobbyhadz.com&#39;, &#39;topic&#39;: &#39;Python&#39;}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_dict<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选项2-访问不存在的键返回none" tabindex="-1"><a class="header-anchor" href="#选项2-访问不存在的键返回none" aria-hidden="true">#</a> 选项2：访问不存在的键返回None</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">AttributeDict</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    __getattr__ <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">.</span>get
    __setattr__ <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">.</span>__setitem__
    __delattr__ <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">.</span>__delitem__


my_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;website&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;bobbyhadz.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;topic&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Python&#39;</span><span class="token punctuation">}</span>

new_dict <span class="token operator">=</span> AttributeDict<span class="token punctuation">(</span>my_dict<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>new_dict<span class="token punctuation">.</span>example<span class="token punctuation">)</span>  <span class="token comment"># 👉️ None</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>new_dict<span class="token punctuation">.</span>website<span class="token punctuation">)</span>  <span class="token comment"># 👉️ bobbyhadz.com</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_dict<span class="token punctuation">.</span>topic<span class="token punctuation">)</span>  <span class="token comment"># 👉️ Python</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选项3-支持嵌套字典" tabindex="-1"><a class="header-anchor" href="#选项3-支持嵌套字典" aria-hidden="true">#</a> 选项3: 支持嵌套字典</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Struct</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> kwargs<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>__dict__<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> Struct<span class="token punctuation">(</span><span class="token operator">**</span>value<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>__dict__<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value


my_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;first&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;bobby&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;last&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;hadz&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;website&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;bobbyhadz.com&#39;</span>
<span class="token punctuation">}</span>

obj <span class="token operator">=</span> Struct<span class="token punctuation">(</span><span class="token operator">**</span>my_dict<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first<span class="token punctuation">)</span>  <span class="token comment"># 👉️ bobby</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">.</span>last<span class="token punctuation">)</span>  <span class="token comment"># 👉️ hadz</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>website<span class="token punctuation">)</span>  <span class="token comment"># 👉️ bobbyhadz.com</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>`,7),k={href:"https://bobbyhadz.com/blog/python-use-dot-to-access-dictionary",target:"_blank",rel:"noopener noreferrer"};function v(b,m){const a=l("ExternalLinkIcon");return e(),p("div",null,[d,i(" more "),r,n("ol",null,[n("li",null,[n("a",k,[c("https://bobbyhadz.com/blog/python-use-dot-to-access-dictionary"),o(a)])])])])}const h=t(u,[["render",v],["__file","Python使用”.“访问字典元素.html.vue"]]);export{h as default};
