import{_ as a,W as e,X as t,$ as n,a0 as i,a1 as l,Z as c,D as d}from"./framework-805da640.js";const p={},o=c(`<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><figure><img src="https://minio.kevin2li.top/image-bed/blog/20230603123531.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="常用场景" tabindex="-1"><a class="header-anchor" href="#常用场景" aria-hidden="true">#</a> 常用场景</h2><h3 id="提取标签" tabindex="-1"><a class="header-anchor" href="#提取标签" aria-hidden="true">#</a> 提取标签</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//html/div/a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="按标签属性提取" tabindex="-1"><a class="header-anchor" href="#按标签属性提取" aria-hidden="true">#</a> 按标签属性提取</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 提取含有class属性的div标签</span>
//div<span class="token punctuation">[</span>@class<span class="token punctuation">]</span>

<span class="token comment"># id为123的任意元素</span>
//*<span class="token punctuation">[</span>@id<span class="token operator">=</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># className为123的任意元素</span>
//*<span class="token punctuation">[</span>@class<span class="token operator">=</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># 类型为submit的input</span>
//input<span class="token punctuation">[</span>@type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按函数匹配提取" tabindex="-1"><a class="header-anchor" href="#按函数匹配提取" aria-hidden="true">#</a> 按函数匹配提取</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># href以&quot;/&quot;开头的a标签</span>
//a<span class="token punctuation">[</span>starts-with<span class="token punctuation">(</span>@href, <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token comment"># href以&quot;.pdf&quot;结尾的a标签 </span>
//a<span class="token punctuation">[</span>ends-with<span class="token punctuation">(</span>@href, <span class="token string">&#39;.pdf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token comment"># href中包含&quot;://&quot;的a标签</span>
//a<span class="token punctuation">[</span>contains<span class="token punctuation">(</span>@href, <span class="token string">&#39;://&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token comment"># 文本中包含&#39;://&#39;的a标签</span>
//a<span class="token punctuation">[</span>contains<span class="token punctuation">(</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>, <span class="token string">&#39;://&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按顺序提取" tabindex="-1"><a class="header-anchor" href="#按顺序提取" aria-hidden="true">#</a> 按顺序提取</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 提取ul元素下的第二个li标签</span>
//ul/li<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>

<span class="token comment"># 提取ul元素下的最后一个li标签</span>
//ul/li<span class="token punctuation">[</span>last<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提取指定元素的文本或属性" tabindex="-1"><a class="header-anchor" href="#提取指定元素的文本或属性" aria-hidden="true">#</a> 提取指定元素的文本或属性</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 提取span元素的文本</span>
//span/text<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 提取a标签的href属性</span>
//div<span class="token punctuation">[</span>@class<span class="token operator">=</span><span class="token string">&#39;lessontable-row-title&#39;</span><span class="token punctuation">]</span>/a/@href&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑连接" tabindex="-1"><a class="header-anchor" href="#逻辑连接" aria-hidden="true">#</a> 逻辑连接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 类型为submit 或者name属性为btnReset的元素</span>
//*<span class="token punctuation">[</span>@type<span class="token operator">=</span><span class="token string">&#39;submit&#39;</span> or @name<span class="token operator">=</span><span class="token string">&#39;btnReset&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># 类型为submit 并且name属性为btnLogin的元素</span>
//input<span class="token punctuation">[</span>@type<span class="token operator">=</span><span class="token string">&#39;submit&#39;</span> and @name<span class="token operator">=</span><span class="token string">&#39;btnLogin&#39;</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axes方法" tabindex="-1"><a class="header-anchor" href="#axes方法" aria-hidden="true">#</a> axes方法</h3><table><thead><tr><th>Axes 方法</th><th>描述</th></tr></thead><tbody><tr><td>following</td><td>返回当前节点之后的所有节点</td></tr><tr><td>following-sibling</td><td>返回当前节点之后的所有同级节点</td></tr><tr><td>preceding</td><td>返回当前节点之前的所有节点</td></tr><tr><td>preceding-sibling</td><td>返回当前节点之前的所有同级节点</td></tr><tr><td>parent</td><td>返回当前节点的父节点</td></tr><tr><td>child</td><td>返回当前节点的所有子节点</td></tr><tr><td>ancestor</td><td>返回所有祖先节点，包括父节点和更高层的祖先节点</td></tr><tr><td>ancestor-or-self</td><td>返回所有祖先节点和当前节点本身</td></tr><tr><td>descendant</td><td>返回当前节点的所有后代节点，不包括自身</td></tr><tr><td>descendant-or-self</td><td>返回当前节点的所有后代节点，包括自身</td></tr><tr><td>namespace</td><td>返回当前节点的所有命名空间节点</td></tr><tr><td>attribute</td><td>返回当前节点的所有属性节点</td></tr><tr><td>self</td><td>返回当前节点本身</td></tr></tbody></table><p>使用举例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前节点之后的所有input标签</span>
//*<span class="token punctuation">[</span>@type<span class="token operator">=</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">]</span>//following::input

<span class="token comment"># 当前节点的所有祖先节点中的div标签</span>
//*<span class="token punctuation">[</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;Enterprise Testing&#39;</span><span class="token punctuation">]</span>//ancestor::div<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token comment"># 当前节点的孩子节点中的li标签</span>
//*<span class="token punctuation">[</span>@id<span class="token operator">=</span><span class="token string">&#39;java_technologies&#39;</span><span class="token punctuation">]</span>//child::li
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,20),r={href:"https://www.guru99.com/xpath-selenium.html",target:"_blank",rel:"noopener noreferrer"};function u(m,v){const s=d("ExternalLinkIcon");return e(),t("div",null,[o,n("ol",null,[n("li",null,[n("a",r,[i("https://www.guru99.com/xpath-selenium.html"),l(s)])])])])}const b=a(p,[["render",u],["__file","Xpath教程.html.vue"]]);export{b as default};
