import{_ as s,W as t,X as l,$ as n,a0 as a,Z as i,a1 as c,D as o}from"./framework-97524b1f.js";const p={},u={href:"https://learnxinyminutes.com/docs/yaml/",target:"_blank",rel:"noopener noreferrer"},r=c(`<h1 id="key-value" tabindex="-1"><a class="header-anchor" href="#key-value" aria-hidden="true">#</a> key-value</h1><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">key</span><span class="token punctuation">:</span> value
<span class="token key atrule">another_key</span><span class="token punctuation">:</span> Another value goes here.
<span class="token key atrule">a_number_value</span><span class="token punctuation">:</span> <span class="token number">100</span>
<span class="token key atrule">scientific_notation</span><span class="token punctuation">:</span> <span class="token number">1e+12</span>
<span class="token key atrule">hex_notation</span><span class="token punctuation">:</span> <span class="token number">0x123</span>  <span class="token comment"># evaluates to 291</span>
<span class="token key atrule">octal_notation</span><span class="token punctuation">:</span> <span class="token number">0123</span> <span class="token comment"># evaluates to 83</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nested-key-value" tabindex="-1"><a class="header-anchor" href="#nested-key-value" aria-hidden="true">#</a> nested key-value</h1><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Nesting uses indentation. 2 space indent is preferred (but not required).</span>
<span class="token key atrule">a_nested_map</span><span class="token punctuation">:</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span> value
  <span class="token key atrule">another_key</span><span class="token punctuation">:</span> Another Value
  <span class="token key atrule">another_nested_map</span><span class="token punctuation">:</span>
    <span class="token key atrule">hello</span><span class="token punctuation">:</span> hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h1><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Sequences (equivalent to lists or arrays) look like this</span>
<span class="token comment"># (note that the &#39;-&#39; counts as indentation):</span>
<span class="token key atrule">a_sequence</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Item 1
  <span class="token punctuation">-</span> Item 2
  <span class="token punctuation">-</span> <span class="token number">0.5</span>  <span class="token comment"># sequences can contain disparate types.</span>
  <span class="token punctuation">-</span> Item 4
  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> value
    <span class="token key atrule">another_key</span><span class="token punctuation">:</span> another_value
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> This is a sequence
    <span class="token punctuation">-</span> inside another sequence
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> <span class="token punctuation">-</span> Nested sequence indicators
      <span class="token punctuation">-</span> can be collapsed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function d(k,m){const e=o("ExternalLinkIcon");return t(),l("div",null,[n("p",null,[a("参考："),n("a",u,[a("https://learnxinyminutes.com/docs/yaml/"),i(e)])]),r])}const h=s(p,[["render",d],["__file","yaml.html.vue"]]);export{h as default};
