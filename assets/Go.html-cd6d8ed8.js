import{_ as t,W as p,X as o,$ as n,a0 as s,a1 as e,Y as c,Z as i,D as u}from"./framework-805da640.js";const l={},k=n("h1",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),r=n("br",null,null,-1),d={href:"https://gobyexample.com/",target:"_blank",rel:"noopener noreferrer"},v=i(`<h1 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h1><h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;initial&quot;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

    <span class="token keyword">var</span> b<span class="token punctuation">,</span> c <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>

    <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token boolean">true</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>

    <span class="token keyword">var</span> e <span class="token builtin">int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

    f <span class="token operator">:=</span> <span class="token string">&quot;apple&quot;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常量声明" tabindex="-1"><a class="header-anchor" href="#常量声明" aria-hidden="true">#</a> 常量声明</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;math&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> s <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;constant&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

    <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">500000000</span>

    <span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token number">3e20</span> <span class="token operator">/</span> n
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">int64</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Sin</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;unicode/utf8&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;สวัสดี&quot;</span>
    
    <span class="token comment">// 获取字符串长度</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Len:&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 遍历字符串</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%x &quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 统计rune数量</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Rune count:&quot;</span><span class="token punctuation">,</span> utf8<span class="token punctuation">.</span><span class="token function">RuneCountInString</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 遍历字符串</span>
    <span class="token keyword">for</span> idx<span class="token punctuation">,</span> runeValue <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#U starts at %d\\n&quot;</span><span class="token punctuation">,</span> runeValue<span class="token punctuation">,</span> idx<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="格式化输出" tabindex="-1"><a class="header-anchor" href="#格式化输出" aria-hidden="true">#</a> 格式化输出</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> point <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">,</span> y <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    p <span class="token operator">:=</span> point<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;struct1: %v\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;struct2: %+v\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;struct3: %#v\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type: %T\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;bool: %t\\n&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;int: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;bin: %b\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;char: %c\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;hex: %x\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">456</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;float1: %f\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">78.9</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;float2: %e\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">123400000.0</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;float3: %E\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">123400000.0</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;str1: %s\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\\&quot;string\\&quot;&quot;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;str2: %q\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\\&quot;string\\&quot;&quot;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;str3: %x\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hex this&quot;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;pointer: %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;width1: |%6d|%6d|\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">345</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;width2: |%6.2f|%6.2f|\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">3.45</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;width3: |%-6.2f|%-6.2f|\\n&quot;</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">3.45</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;width4: |%6s|%6s|\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;width5: |%-6s|%-6s|\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>

    s <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;sprintf: a %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;io: an %s\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-log line-numbers-mode" data-ext="log"><pre class="language-log"><code><span class="token property">struct1:</span> <span class="token operator">{</span><span class="token number">1</span> <span class="token number">2</span><span class="token operator">}</span>
<span class="token property">struct2:</span> <span class="token operator">{</span>x<span class="token operator">:</span><span class="token number">1</span> y<span class="token operator">:</span><span class="token number">2</span><span class="token operator">}</span>
<span class="token property">struct3:</span> main<span class="token punctuation">.</span>point<span class="token operator">{</span>x<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token number">2</span><span class="token operator">}</span>
<span class="token property">type:</span> <span class="token domain constant">main.point</span>
<span class="token property">bool:</span> <span class="token boolean">true</span>
<span class="token property">int:</span> <span class="token number">123</span>
<span class="token property">bin:</span> <span class="token number">1110</span>
<span class="token property">char:</span> <span class="token operator">!</span>
<span class="token property">hex:</span> <span class="token number">1c8</span>
<span class="token property">float1:</span> <span class="token number">78.900000</span>
<span class="token property">float2:</span> <span class="token number">1.234000e+08</span>
<span class="token property">float3:</span> <span class="token number">1.234000E+08</span>
<span class="token property">str1:</span> <span class="token string">&quot;string&quot;</span>
<span class="token property">str2:</span> <span class="token string">&quot;\\&quot;string\\&quot;&quot;</span>
<span class="token property">str3:</span> <span class="token number">6865782074686973</span>
<span class="token property">pointer:</span> <span class="token number">0xc0000ba000</span>
<span class="token property">width1:</span> <span class="token operator">|</span>    <span class="token number">12</span><span class="token operator">|</span>   <span class="token number">345</span><span class="token operator">|</span>
<span class="token property">width2:</span> <span class="token operator">|</span>  <span class="token number">1.20</span><span class="token operator">|</span>  <span class="token number">3.45</span><span class="token operator">|</span>
<span class="token property">width3:</span> <span class="token operator">|</span><span class="token number">1.20</span>  <span class="token operator">|</span><span class="token number">3.45</span>  <span class="token operator">|</span>
<span class="token property">width4:</span> <span class="token operator">|</span>   foo<span class="token operator">|</span>     b<span class="token operator">|</span>
<span class="token property">width5:</span> <span class="token operator">|</span>foo   <span class="token operator">|</span>b     <span class="token operator">|</span>
<span class="token property">sprintf:</span> a string
<span class="token property">io:</span> an error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;emp:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

    a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;set:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;get:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len:&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>

    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;dcl:&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>

    <span class="token keyword">var</span> twoD <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            twoD<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">+</span> j
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;2d: &quot;</span><span class="token punctuation">,</span> twoD<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="切片" tabindex="-1"><a class="header-anchor" href="#切片" aria-hidden="true">#</a> 切片</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token comment">// 声明切片</span>
    s <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;emp:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>

    <span class="token comment">// 赋值和访问</span>
    s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span>
    s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;b&quot;</span>
    s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;c&quot;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;set:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;get:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 获取切片长度</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len:&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 切片追加元素</span>
    s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span>
    s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;apd:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>

    <span class="token comment">// 拷贝切片</span>
    c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;cpy:&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>

    <span class="token comment">// 切片子集</span>
    l <span class="token operator">:=</span> s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sl1:&quot;</span><span class="token punctuation">,</span> l<span class="token punctuation">)</span>

    l <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sl2:&quot;</span><span class="token punctuation">,</span> l<span class="token punctuation">)</span>

    l <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sl3:&quot;</span><span class="token punctuation">,</span> l<span class="token punctuation">)</span>

    t <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;g&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;h&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;i&quot;</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;dcl:&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span>

    twoD <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        innerLen <span class="token operator">:=</span> i <span class="token operator">+</span> <span class="token number">1</span>
        twoD<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> innerLen<span class="token punctuation">)</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> innerLen<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            twoD<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">+</span> j
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;2d: &quot;</span><span class="token punctuation">,</span> twoD<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字典" tabindex="-1"><a class="header-anchor" href="#字典" aria-hidden="true">#</a> 字典</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>

    m<span class="token punctuation">[</span><span class="token string">&quot;k1&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">7</span>
    m<span class="token punctuation">[</span><span class="token string">&quot;k2&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">13</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;map:&quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>

    v1 <span class="token operator">:=</span> m<span class="token punctuation">[</span><span class="token string">&quot;k1&quot;</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;v1:&quot;</span><span class="token punctuation">,</span> v1<span class="token punctuation">)</span>

    v3 <span class="token operator">:=</span> m<span class="token punctuation">[</span><span class="token string">&quot;k3&quot;</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;v3:&quot;</span><span class="token punctuation">,</span> v3<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len:&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token string">&quot;k2&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;map:&quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>

    <span class="token boolean">_</span><span class="token punctuation">,</span> prs <span class="token operator">:=</span> m<span class="token punctuation">[</span><span class="token string">&quot;k2&quot;</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;prs:&quot;</span><span class="token punctuation">,</span> prs<span class="token punctuation">)</span>

    n <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;map:&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">newPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>person <span class="token punctuation">{</span>

    p <span class="token operator">:=</span> person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> name<span class="token punctuation">}</span>
    p<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">42</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>p
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">{</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;Fred&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;Ann&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">newPerson</span><span class="token punctuation">(</span><span class="token string">&quot;Jon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    s <span class="token operator">:=</span> person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;Sean&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

    sp <span class="token operator">:=</span> <span class="token operator">&amp;</span>s
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sp<span class="token punctuation">.</span>age<span class="token punctuation">)</span>

    sp<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">51</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sp<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制流" tabindex="-1"><a class="header-anchor" href="#控制流" aria-hidden="true">#</a> 控制流</h2><h3 id="条件" tabindex="-1"><a class="header-anchor" href="#条件" aria-hidden="true">#</a> 条件</h3><h4 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> <code>if</code></h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token number">7</span><span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;7 is even&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;7 is odd&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token number">8</span><span class="token operator">%</span><span class="token number">4</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;8 is divisible by 4&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> num <span class="token operator">:=</span> <span class="token number">9</span><span class="token punctuation">;</span> num <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">&quot;is negative&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> num <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">&quot;has 1 digit&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">&quot;has multiple digits&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> <code>switch</code></h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    i <span class="token operator">:=</span> <span class="token number">2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;Write &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">&quot; as &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">switch</span> i <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;two&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;three&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">switch</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Weekday</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> time<span class="token punctuation">.</span>Saturday<span class="token punctuation">,</span> time<span class="token punctuation">.</span>Sunday<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;It&#39;s the weekend&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;It&#39;s a weekday&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">switch</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> t<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">12</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;It&#39;s before noon&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;It&#39;s after noon&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    whatAmI <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> t <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;I&#39;m a bool&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;I&#39;m an int&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Don&#39;t know type %T\\n&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">whatAmI</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token function">whatAmI</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">whatAmI</span><span class="token punctuation">(</span><span class="token string">&quot;hey&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h3><h4 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> <code>for</code></h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token comment">// 经典for</span>
    <span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> n<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> n<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 使用range遍历数组</span>
    nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
    sum <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> num
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sum:&quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span>

    <span class="token keyword">for</span> i<span class="token punctuation">,</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        <span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">3</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;index:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 使用range遍历字典</span>
    kvs <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> kvs <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s -&gt; %s\\n&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 只遍历key</span>
    <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token keyword">range</span> kvs <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;key:&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 使用range遍历字符串</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token string">&quot;go&quot;</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="普通函数" tabindex="-1"><a class="header-anchor" href="#普通函数" aria-hidden="true">#</a> 普通函数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">plus</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">plusPlus</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    res <span class="token operator">:=</span> <span class="token function">plus</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1+2 =&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>

    res <span class="token operator">=</span> <span class="token function">plusPlus</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1+2+3 =&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多返回值" tabindex="-1"><a class="header-anchor" href="#多返回值" aria-hidden="true">#</a> 多返回值</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">vals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    a<span class="token punctuation">,</span> b <span class="token operator">:=</span> <span class="token function">vals</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>

    <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token function">vals</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变长参数列表" tabindex="-1"><a class="header-anchor" href="#变长参数列表" aria-hidden="true">#</a> 变长参数列表</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">sum</span><span class="token punctuation">(</span>nums <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
    total <span class="token operator">:=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
        total <span class="token operator">+=</span> num
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

    nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
    <span class="token function">sum</span><span class="token punctuation">(</span>nums<span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">zeroval</span><span class="token punctuation">(</span>ival <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ival <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">zeroptr</span><span class="token punctuation">(</span>iptr <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>iptr <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i <span class="token operator">:=</span> <span class="token number">1</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;initial:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

    <span class="token function">zeroval</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;zeroval:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

    <span class="token function">zeroptr</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>i<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;zeroptr:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;pointer:&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>initial<span class="token punctuation">:</span> <span class="token number">1</span>
zeroval<span class="token punctuation">:</span> <span class="token number">1</span>
zeroptr<span class="token punctuation">:</span> <span class="token number">0</span>
pointer<span class="token punctuation">:</span> <span class="token number">0x42131100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> rect <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    width<span class="token punctuation">,</span> height <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>rect<span class="token punctuation">)</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> r<span class="token punctuation">.</span>width <span class="token operator">*</span> r<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r rect<span class="token punctuation">)</span> <span class="token function">perim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span><span class="token operator">*</span>r<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token number">2</span><span class="token operator">*</span>r<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r <span class="token operator">:=</span> rect<span class="token punctuation">{</span>width<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;area: &quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;perim:&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">perim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    rp <span class="token operator">:=</span> <span class="token operator">&amp;</span>r
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;area: &quot;</span><span class="token punctuation">,</span> rp<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;perim:&quot;</span><span class="token punctuation">,</span> rp<span class="token punctuation">.</span><span class="token function">perim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;math&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> geometry <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span>
    <span class="token function">perim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> rect <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    width<span class="token punctuation">,</span> height <span class="token builtin">float64</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> circle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    radius <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r rect<span class="token punctuation">)</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> r<span class="token punctuation">.</span>width <span class="token operator">*</span> r<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r rect<span class="token punctuation">)</span> <span class="token function">perim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span><span class="token operator">*</span>r<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token number">2</span><span class="token operator">*</span>r<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c circle<span class="token punctuation">)</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> math<span class="token punctuation">.</span>Pi <span class="token operator">*</span> c<span class="token punctuation">.</span>radius <span class="token operator">*</span> c<span class="token punctuation">.</span>radius
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c circle<span class="token punctuation">)</span> <span class="token function">perim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> math<span class="token punctuation">.</span>Pi <span class="token operator">*</span> c<span class="token punctuation">.</span>radius
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">measure</span><span class="token punctuation">(</span>g geometry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">perim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r <span class="token operator">:=</span> rect<span class="token punctuation">{</span>width<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span>
    c <span class="token operator">:=</span> circle<span class="token punctuation">{</span>radius<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">}</span>

    <span class="token function">measure</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
    <span class="token function">measure</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="并发" tabindex="-1"><a class="header-anchor" href="#并发" aria-hidden="true">#</a> 并发</h2><h2 id="标准库函数" tabindex="-1"><a class="header-anchor" href="#标准库函数" aria-hidden="true">#</a> 标准库函数</h2><h3 id="文件路径" tabindex="-1"><a class="header-anchor" href="#文件路径" aria-hidden="true">#</a> 文件路径</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;path/filepath&quot;</span>
    <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    p <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token string">&quot;dir1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dir2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;filename&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;p:&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>filepath<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token string">&quot;dir1//&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;filename&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>filepath<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token string">&quot;dir1/../dir1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;filename&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Dir(p):&quot;</span><span class="token punctuation">,</span> filepath<span class="token punctuation">.</span><span class="token function">Dir</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Base(p):&quot;</span><span class="token punctuation">,</span> filepath<span class="token punctuation">.</span><span class="token function">Base</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>filepath<span class="token punctuation">.</span><span class="token function">IsAbs</span><span class="token punctuation">(</span><span class="token string">&quot;dir/file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>filepath<span class="token punctuation">.</span><span class="token function">IsAbs</span><span class="token punctuation">(</span><span class="token string">&quot;/dir/file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    filename <span class="token operator">:=</span> <span class="token string">&quot;config.json&quot;</span>

    ext <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">Ext</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ext<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">TrimSuffix</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> ext<span class="token punctuation">)</span><span class="token punctuation">)</span>

    rel<span class="token punctuation">,</span> err <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">Rel</span><span class="token punctuation">(</span><span class="token string">&quot;a/b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a/b/t/file&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>rel<span class="token punctuation">)</span>

    rel<span class="token punctuation">,</span> err <span class="token operator">=</span> filepath<span class="token punctuation">.</span><span class="token function">Rel</span><span class="token punctuation">(</span><span class="token string">&quot;a/b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a/c/t/file&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>rel<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件读取" tabindex="-1"><a class="header-anchor" href="#文件读取" aria-hidden="true">#</a> 文件读取</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;bufio&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">check</span><span class="token punctuation">(</span>e <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    dat<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;/tmp/dat&quot;</span><span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>dat<span class="token punctuation">)</span><span class="token punctuation">)</span>

    f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;/tmp/dat&quot;</span><span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

    b1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    n1<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d bytes: %s\\n&quot;</span><span class="token punctuation">,</span> n1<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>b1<span class="token punctuation">[</span><span class="token punctuation">:</span>n1<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    o2<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Seek</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    b2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    n2<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d bytes @ %d: &quot;</span><span class="token punctuation">,</span> n2<span class="token punctuation">,</span> o2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>b2<span class="token punctuation">[</span><span class="token punctuation">:</span>n2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    o3<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Seek</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    b3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    n3<span class="token punctuation">,</span> err <span class="token operator">:=</span> io<span class="token punctuation">.</span><span class="token function">ReadAtLeast</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> b3<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d bytes @ %d: %s\\n&quot;</span><span class="token punctuation">,</span> n3<span class="token punctuation">,</span> o3<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>b3<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">Seek</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

    r4 <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    b4<span class="token punctuation">,</span> err <span class="token operator">:=</span> r4<span class="token punctuation">.</span><span class="token function">Peek</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;5 bytes: %s\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>b4<span class="token punctuation">)</span><span class="token punctuation">)</span>

    f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件写入" tabindex="-1"><a class="header-anchor" href="#文件写入" aria-hidden="true">#</a> 文件写入</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;bufio&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">check</span><span class="token punctuation">(</span>e <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    d1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;hello\\ngo\\n&quot;</span><span class="token punctuation">)</span>
    err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span><span class="token string">&quot;/tmp/dat1&quot;</span><span class="token punctuation">,</span> d1<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

    f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">&quot;/tmp/dat2&quot;</span><span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

    <span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    d2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token number">115</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">109</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
    n2<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;wrote %d bytes\\n&quot;</span><span class="token punctuation">,</span> n2<span class="token punctuation">)</span>

    n3<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;writes\\n&quot;</span><span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;wrote %d bytes\\n&quot;</span><span class="token punctuation">,</span> n3<span class="token punctuation">)</span>

    f<span class="token punctuation">.</span><span class="token function">Sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    w <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    n4<span class="token punctuation">,</span> err <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;buffered\\n&quot;</span><span class="token punctuation">)</span>
    <span class="token function">check</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;wrote %d bytes\\n&quot;</span><span class="token punctuation">,</span> n4<span class="token punctuation">)</span>

    w<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    strs <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">}</span>
    sort<span class="token punctuation">.</span><span class="token function">Strings</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Strings:&quot;</span><span class="token punctuation">,</span> strs<span class="token punctuation">)</span>

    ints <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
    sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>ints<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Ints:   &quot;</span><span class="token punctuation">,</span> ints<span class="token punctuation">)</span>

    s <span class="token operator">:=</span> sort<span class="token punctuation">.</span><span class="token function">IntsAreSorted</span><span class="token punctuation">(</span>ints<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Sorted: &quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时间格式化" tabindex="-1"><a class="header-anchor" href="#时间格式化" aria-hidden="true">#</a> 时间格式化</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">:=</span> fmt<span class="token punctuation">.</span>Println

    t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">p</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>RFC3339<span class="token punctuation">)</span><span class="token punctuation">)</span>

    t1<span class="token punctuation">,</span> e <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>
        time<span class="token punctuation">.</span>RFC3339<span class="token punctuation">,</span>
        <span class="token string">&quot;2012-11-01T22:08:41+00:00&quot;</span><span class="token punctuation">)</span>
    <span class="token function">p</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span>

    <span class="token function">p</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;3:04PM&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">p</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;Mon Jan _2 15:04:05 2006&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">p</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;2006-01-02T15:04:05.999999-07:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    form <span class="token operator">:=</span> <span class="token string">&quot;3 04 PM&quot;</span>
    t2<span class="token punctuation">,</span> e <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>form<span class="token punctuation">,</span> <span class="token string">&quot;8 41 PM&quot;</span><span class="token punctuation">)</span>
    <span class="token function">p</span><span class="token punctuation">(</span>t2<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d-%02d-%02dT%02d:%02d:%02d-00:00\\n&quot;</span><span class="token punctuation">,</span>
        t<span class="token punctuation">.</span><span class="token function">Year</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Day</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        t<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Minute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Second</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    ansic <span class="token operator">:=</span> <span class="token string">&quot;Mon Jan _2 15:04:05 2006&quot;</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> e <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>ansic<span class="token punctuation">,</span> <span class="token string">&quot;8:41PM&quot;</span><span class="token punctuation">)</span>
    <span class="token function">p</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json处理" tabindex="-1"><a class="header-anchor" href="#json处理" aria-hidden="true">#</a> json处理</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/json&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> response1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Page   <span class="token builtin">int</span>
    Fruits <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> response2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Page   <span class="token builtin">int</span>      <span class="token string">\`json:&quot;page&quot;\`</span>
    Fruits <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token string">\`json:&quot;fruits&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    bolB<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>bolB<span class="token punctuation">)</span><span class="token punctuation">)</span>

    intB<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>intB<span class="token punctuation">)</span><span class="token punctuation">)</span>

    fltB<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span><span class="token number">2.34</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>fltB<span class="token punctuation">)</span><span class="token punctuation">)</span>

    strB<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span><span class="token string">&quot;gopher&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>strB<span class="token punctuation">)</span><span class="token punctuation">)</span>

    slcD <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;peach&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pear&quot;</span><span class="token punctuation">}</span>
    slcB<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>slcD<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>slcB<span class="token punctuation">)</span><span class="token punctuation">)</span>

    mapD <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;lettuce&quot;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">}</span>
    mapB<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>mapD<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>mapB<span class="token punctuation">)</span><span class="token punctuation">)</span>

    res1D <span class="token operator">:=</span> <span class="token operator">&amp;</span>response1<span class="token punctuation">{</span>
        Page<span class="token punctuation">:</span>   <span class="token number">1</span><span class="token punctuation">,</span>
        Fruits<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;peach&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pear&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    res1B<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>res1D<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>res1B<span class="token punctuation">)</span><span class="token punctuation">)</span>

    res2D <span class="token operator">:=</span> <span class="token operator">&amp;</span>response2<span class="token punctuation">{</span>
        Page<span class="token punctuation">:</span>   <span class="token number">1</span><span class="token punctuation">,</span>
        Fruits<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;peach&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pear&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    res2B<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>res2D<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>res2B<span class="token punctuation">)</span><span class="token punctuation">)</span>

    byt <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">\`{&quot;num&quot;:6.13,&quot;strs&quot;:[&quot;a&quot;,&quot;b&quot;]}\`</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> dat <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">if</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>byt<span class="token punctuation">,</span> <span class="token operator">&amp;</span>dat<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dat<span class="token punctuation">)</span>

    num <span class="token operator">:=</span> dat<span class="token punctuation">[</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">float64</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

    strs <span class="token operator">:=</span> dat<span class="token punctuation">[</span><span class="token string">&quot;strs&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    str1 <span class="token operator">:=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span>

    str <span class="token operator">:=</span> <span class="token string">\`{&quot;page&quot;: 1, &quot;fruits&quot;: [&quot;apple&quot;, &quot;peach&quot;]}\`</span>
    res <span class="token operator">:=</span> response2<span class="token punctuation">{</span><span class="token punctuation">}</span>
    json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>res<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>Fruits<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    enc <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">NewEncoder</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">)</span>
    d <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;lettuce&quot;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">}</span>
    enc<span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>`,63);function m(b,f){const a=u("ExternalLinkIcon");return p(),o("div",null,[k,n("p",null,[s("参考："),r,n("a",d,[s("https://gobyexample.com/"),e(a)])]),c(" more "),v])}const q=t(l,[["render",m],["__file","Go.html.vue"]]);export{q as default};
