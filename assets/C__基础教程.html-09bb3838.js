import{_ as p,W as o,X as c,$ as n,a0 as s,a1 as e,Y as i,Z as t,D as l}from"./framework-805da640.js";const u={},r=n("h1",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),d={href:"https://www.programiz.com/cpp-programming/variables-literals",target:"_blank",rel:"noopener noreferrer"},k=t(`<h1 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h1><h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello world!&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本i-o" tabindex="-1"><a class="header-anchor" href="#基本i-o" aria-hidden="true">#</a> 基本I/O</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> a<span class="token punctuation">;</span>
    <span class="token keyword">int</span> num<span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter a character and an integer: &quot;</span><span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> num<span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Character: &quot;</span> <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Number: &quot;</span> <span class="token operator">&lt;&lt;</span> num<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 变量声明及初始化</span>
<span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">;</span>   <span class="token comment">// age is 14</span>
age <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span>       <span class="token comment">// age is 17</span>

<span class="token comment">// 常量声明</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> LIGHT_SPEED <span class="token operator">=</span> <span class="token number">299792458</span><span class="token punctuation">;</span>
LIGHT_SPEED <span class="token operator">=</span> <span class="token number">2500</span> <span class="token comment">// Error! LIGHT_SPEED is a constant.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><p>基本类型：</p><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/0599938bd9f21256faf2e6fff390a4b0.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>延申类型：</p><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/0b012b5b62b8bd5345aa2fa60d9abefc.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h3><ol><li>隐式转换<br> 可能存在精度损失(由大转小)。</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// assigning an int value to num_int</span>
<span class="token keyword">int</span> num_int <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>

<span class="token comment">// declaring a double type variable</span>
<span class="token keyword">double</span> num_double<span class="token punctuation">;</span>

<span class="token comment">// implicit conversion</span>
<span class="token comment">// assigning int value to a double variable</span>
num_double <span class="token operator">=</span> num_int<span class="token punctuation">;</span>

cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;num_int = &quot;</span> <span class="token operator">&lt;&lt;</span> num_int <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;num_double = &quot;</span> <span class="token operator">&lt;&lt;</span> num_double <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>显式转换</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// initializing a double variable</span>
<span class="token keyword">double</span> num_double <span class="token operator">=</span> <span class="token number">3.56</span><span class="token punctuation">;</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;num_double = &quot;</span> <span class="token operator">&lt;&lt;</span> num_double <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token comment">// C风格转换：C-style conversion from double to int</span>
<span class="token keyword">int</span> num_int1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>num_double<span class="token punctuation">;</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;num_int1   = &quot;</span> <span class="token operator">&lt;&lt;</span> num_int1 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token comment">// 函数式转换：function-style conversion from double to int</span>
<span class="token keyword">int</span> num_int2 <span class="token operator">=</span> <span class="token keyword">int</span><span class="token punctuation">(</span>num_double<span class="token punctuation">)</span><span class="token punctuation">;</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;num_int2   = &quot;</span> <span class="token operator">&lt;&lt;</span> num_int2 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储类-storage-class" tabindex="-1"><a class="header-anchor" href="#存储类-storage-class" aria-hidden="true">#</a> 存储类(Storage Class)</h3><h4 id="局部变量-local-variable" tabindex="-1"><a class="header-anchor" href="#局部变量-local-variable" aria-hidden="true">#</a> 局部变量(Local Variable)</h4><p>定义在函数内部的变量，生命周期只存在于函数内部，当函数退出后就会销毁。</p><h4 id="全局变量-global-variable" tabindex="-1"><a class="header-anchor" href="#全局变量-global-variable" aria-hidden="true">#</a> 全局变量(Global Variable)</h4><p>位于所有函数外部的变量。 生命周期从程序开始直到程序结束。</p><h4 id="静态局部变量-static-local-variable" tabindex="-1"><a class="header-anchor" href="#静态局部变量-static-local-variable" aria-hidden="true">#</a> 静态局部变量(Static Local variable)</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token keyword">static</span> <span class="token keyword">float</span> a<span class="token punctuation">;</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生命周期从第一次函数调用开始，直到整个程序结束。</p><h4 id="寄存器变量-register-variable" tabindex="-1"><a class="header-anchor" href="#寄存器变量-register-variable" aria-hidden="true">#</a> 寄存器变量(Register Variable)</h4><p>存储在寄存器中，相比内存速度更快，在C++11中被弃用。</p><h4 id="线程局部变量-thread-local-storage" tabindex="-1"><a class="header-anchor" href="#线程局部变量-thread-local-storage" aria-hidden="true">#</a> 线程局部变量(Thread Local Storage)</h4>`,29),v={href:"http://www.codeproject.com/Articles/8113/Thread-Local-Storage-The-C-Way",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="算子" tabindex="-1"><a class="header-anchor" href="#算子" aria-hidden="true">#</a> 算子</h2><h3 id="赋值运算" tabindex="-1"><a class="header-anchor" href="#赋值运算" aria-hidden="true">#</a> 赋值运算</h3><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/6d9b3f3c26ca49538a161e20820b6d70.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="算术运算" tabindex="-1"><a class="header-anchor" href="#算术运算" aria-hidden="true">#</a> 算术运算</h3><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/dc1f2a6c843dc607c2e1535f5282fc2a.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="逻辑运算" tabindex="-1"><a class="header-anchor" href="#逻辑运算" aria-hidden="true">#</a> 逻辑运算</h3><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/b7321f347263f64ed4b4c5e224f9b8bf.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="比较运算" tabindex="-1"><a class="header-anchor" href="#比较运算" aria-hidden="true">#</a> 比较运算</h3><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/6bc82d2235e1c88634c298caa52aff5e.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h3><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/71d085d7f5e4eff231a2a505484df6b1.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="其他算子" tabindex="-1"><a class="header-anchor" href="#其他算子" aria-hidden="true">#</a> 其他算子</h3><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/55544574d42ea96b4e7c83c5712c79c5.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><h3 id="c-style-string" tabindex="-1"><a class="header-anchor" href="#c-style-string" aria-hidden="true">#</a> C-Style String</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;C++&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="string-class" tabindex="-1"><a class="header-anchor" href="#string-class" aria-hidden="true">#</a> String Class</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Declaring a string object</span>
    string str<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter a string: &quot;</span><span class="token punctuation">;</span>
    <span class="token function">getline</span><span class="token punctuation">(</span>cin<span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;You entered: &quot;</span> <span class="token operator">&lt;&lt;</span> str <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><h3 id="数组声明" tabindex="-1"><a class="header-anchor" href="#数组声明" aria-hidden="true">#</a> 数组声明</h3><h4 id="一维数组" tabindex="-1"><a class="header-anchor" href="#一维数组" aria-hidden="true">#</a> 一维数组</h4><p>格式：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>dataType arrayName<span class="token punctuation">[</span>arraySize<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> x<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// declare and initialize and array</span>
<span class="token keyword">int</span> x<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// declare and initialize an array</span>
<span class="token keyword">int</span> x<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// store only 3 elements in the array</span>
<span class="token keyword">int</span> x<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多维数组" tabindex="-1"><a class="header-anchor" href="#多维数组" aria-hidden="true">#</a> 多维数组</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span>  test<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> test<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token punctuation">{</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组基本操作" tabindex="-1"><a class="header-anchor" href="#数组基本操作" aria-hidden="true">#</a> 数组基本操作</h3><ul><li>遍历数组</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> numbers<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>n <span class="token operator">:</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> n <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;  &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="函数声明" tabindex="-1"><a class="header-anchor" href="#函数声明" aria-hidden="true">#</a> 函数声明</h3><p>格式：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>returnType <span class="token function">functionName</span> <span class="token punctuation">(</span>parameter1<span class="token punctuation">,</span> parameter2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// function body   </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// declaring a function</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> sum<span class="token punctuation">;</span>
    
    <span class="token comment">// calling the function and storing</span>
    <span class="token comment">// the returned value in sum</span>
    sum <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;100 + 78 = &quot;</span> <span class="token operator">&lt;&lt;</span> sum <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载" aria-hidden="true">#</a> 函数重载</h3><p>:::info{title=&quot;什么是函数重载&quot;} <strong>函数重载</strong>是指在同一作用域中的某个函数和运算符指定多个定义，分别称为函数重载和运算符重载。</p><p>重载声明是指一个与之前已经在该作用域内声明过的函数或方法具有相同名称的声明，但是它们的参数列表和定义（实现）不相同。</p><p>当您调用一个重载函数或重载运算符时，编译器通过把您所使用的参数类型与定义中的参数类型进行比较，决定选用最合适的定义。选择最合适的重载函数或重载运算符的过程，称为重载决策。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// same name different arguments</span>
<span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">float</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">double</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">double</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：不能仅仅是返回值类型不同，参数列表需要有所变化(数量或类型上) :::</p><p>举例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// function with 2 parameters</span>
<span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token keyword">int</span> var1<span class="token punctuation">,</span> <span class="token keyword">double</span> var2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Integer number: &quot;</span> <span class="token operator">&lt;&lt;</span> var1<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; and double number: &quot;</span> <span class="token operator">&lt;&lt;</span> var2 <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// function with double type single parameter</span>
<span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token keyword">double</span> var<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Double number: &quot;</span> <span class="token operator">&lt;&lt;</span> var <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// function with int type single parameter</span>
<span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token keyword">int</span> var<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Integer number: &quot;</span> <span class="token operator">&lt;&lt;</span> var <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">5.5</span><span class="token punctuation">;</span>

    <span class="token comment">// call function with int type parameter</span>
    <span class="token function">display</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// call function with double type parameter</span>
    <span class="token function">display</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// call function with 2 parameters</span>
    <span class="token function">display</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作符重载" tabindex="-1"><a class="header-anchor" href="#操作符重载" aria-hidden="true">#</a> 操作符重载</h3><p>格式：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">className</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">public</span>
       returnType <span class="token keyword">operator</span> <span class="token function">symbol</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
       <span class="token punctuation">}</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// Overload ++ when used as prefix</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Count</span> <span class="token punctuation">{</span>
   <span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>

   <span class="token keyword">public</span><span class="token operator">:</span>

    <span class="token comment">// Constructor to initialize count to 5</span>
    <span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// Overload ++ when used as prefix</span>
    <span class="token keyword">void</span> <span class="token keyword">operator</span> <span class="token operator">++</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">++</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Count: &quot;</span> <span class="token operator">&lt;&lt;</span> value <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Count count1<span class="token punctuation">;</span>

    <span class="token comment">// Call the &quot;void operator ++ ()&quot; function</span>
    <span class="token operator">++</span>count1<span class="token punctuation">;</span>

    count1<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// Invalid</span>
<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">,</span> <span class="token keyword">int</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Invalid</span>
<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">,</span> <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Valid</span>
<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">,</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： 默认参数必须放在参数列表最后</p><h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h2><h3 id="指针声明" tabindex="-1"><a class="header-anchor" href="#指针声明" aria-hidden="true">#</a> 指针声明</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token operator">*</span>pointVar<span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> pointVar<span class="token punctuation">;</span> <span class="token comment">// preferred syntax</span>
<span class="token keyword">int</span><span class="token operator">*</span> pointVar<span class="token punctuation">,</span> p<span class="token punctuation">;</span> <span class="token comment">// 只有前者是指针</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指针基础操作" tabindex="-1"><a class="header-anchor" href="#指针基础操作" aria-hidden="true">#</a> 指针基础操作</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span><span class="token operator">*</span> pointVar<span class="token punctuation">,</span> var<span class="token punctuation">;</span>
var <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">// 指针赋值：assign address of var to pointVar</span>
pointVar <span class="token operator">=</span> <span class="token operator">&amp;</span>var<span class="token punctuation">;</span>

<span class="token comment">// 访问指针指向元素值：access value pointed by pointVar</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>pointVar <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>   <span class="token comment">// Output: 5</span>

<span class="token comment">// 修改指针指向元素值</span>
<span class="token operator">*</span>pointVar <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">Person</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">float</span> salary<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Person p1<span class="token punctuation">;</span>
    
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter Full name: &quot;</span><span class="token punctuation">;</span>
    cin<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter age: &quot;</span><span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> p1<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter salary: &quot;</span><span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> p1<span class="token punctuation">.</span>salary<span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\\nDisplaying Information.&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Name: &quot;</span> <span class="token operator">&lt;&lt;</span> p1<span class="token punctuation">.</span>name <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span><span class="token string">&quot;Age: &quot;</span> <span class="token operator">&lt;&lt;</span> p1<span class="token punctuation">.</span>age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Salary: &quot;</span> <span class="token operator">&lt;&lt;</span> p1<span class="token punctuation">.</span>salary<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">enum</span> <span class="token class-name">week</span> <span class="token punctuation">{</span> Sunday<span class="token punctuation">,</span> Monday<span class="token punctuation">,</span> Tuesday<span class="token punctuation">,</span> Wednesday<span class="token punctuation">,</span> Thursday<span class="token punctuation">,</span> Friday<span class="token punctuation">,</span> Saturday <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    week today<span class="token punctuation">;</span>
    today <span class="token operator">=</span> Wednesday<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Day &quot;</span> <span class="token operator">&lt;&lt;</span> today<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// Day 4</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制流" tabindex="-1"><a class="header-anchor" href="#控制流" aria-hidden="true">#</a> 控制流</h2><h3 id="条件" tabindex="-1"><a class="header-anchor" href="#条件" aria-hidden="true">#</a> 条件</h3><h3 id="算子-1" tabindex="-1"><a class="header-anchor" href="#算子-1" aria-hidden="true">#</a> <code>?:</code>算子</h3><p>格式： <code>condition ? expression1 : expression2;</code></p><p>举例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">;</span>
  string result<span class="token punctuation">;</span>

  <span class="token comment">// Using ternary operator</span>
  result <span class="token operator">=</span> <span class="token punctuation">(</span>number <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;Positive Number!&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Negative Number!&quot;</span><span class="token punctuation">;</span>

  cout <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> <code>if</code></h4><p>格式：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// code block 1</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>condition2<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// code block 2</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// code block 3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// Program to check whether an integer is positive, negative or zero</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">int</span> number<span class="token punctuation">;</span>

  cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter an integer: &quot;</span><span class="token punctuation">;</span>
  cin <span class="token operator">&gt;&gt;</span> number<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;You entered a positive integer: &quot;</span> <span class="token operator">&lt;&lt;</span> number <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;You entered a negative integer: &quot;</span> <span class="token operator">&lt;&lt;</span> number <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;You entered 0.&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;This line is always printed.&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> <code>switch</code></h4><p>格式：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>expression<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">case</span> constant1<span class="token operator">:</span>
        <span class="token comment">// code to be executed if </span>
        <span class="token comment">// expression is equal to constant1;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">case</span> constant2<span class="token operator">:</span>
        <span class="token comment">// code to be executed if</span>
        <span class="token comment">// expression is equal to constant2;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">.</span>
        <span class="token punctuation">.</span>
        <span class="token punctuation">.</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token comment">// code to be executed if</span>
        <span class="token comment">// expression doesn&#39;t match any constant</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// Program to build a simple calculator using switch Statement</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> oper<span class="token punctuation">;</span>
    <span class="token keyword">float</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter an operator (+, -, *, /): &quot;</span><span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> oper<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter two numbers: &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> num1 <span class="token operator">&gt;&gt;</span> num2<span class="token punctuation">;</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>oper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token char">&#39;+&#39;</span><span class="token operator">:</span>
            cout <span class="token operator">&lt;&lt;</span> num1 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; + &quot;</span> <span class="token operator">&lt;&lt;</span> num2 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token char">&#39;-&#39;</span><span class="token operator">:</span>
            cout <span class="token operator">&lt;&lt;</span> num1 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; - &quot;</span> <span class="token operator">&lt;&lt;</span> num2 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> num1 <span class="token operator">-</span> num2<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token char">&#39;*&#39;</span><span class="token operator">:</span>
            cout <span class="token operator">&lt;&lt;</span> num1 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; * &quot;</span> <span class="token operator">&lt;&lt;</span> num2 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> num1 <span class="token operator">*</span> num2<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token char">&#39;/&#39;</span><span class="token operator">:</span>
            cout <span class="token operator">&lt;&lt;</span> num1 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; / &quot;</span> <span class="token operator">&lt;&lt;</span> num2 <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">&lt;&lt;</span> num1 <span class="token operator">/</span> num2<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token comment">// operator is doesn&#39;t match any case constant (+, -, *, /)</span>
            cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Error! The operator is not correct&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h3><h4 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> <code>for</code></h4><ul><li>方法一：经典for<br> 格式：</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>initialization<span class="token punctuation">;</span> condition<span class="token punctuation">;</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// body of-loop </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法二：<code>for each</code></li></ul><p>格式：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>variable <span class="token operator">:</span> collection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// body of loop</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> num_array<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> n <span class="token operator">:</span> num_array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> n <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> <code>while</code></h4><p>格式：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// body of the loop</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> 
<span class="token comment">// while loop from 1 to 5</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token operator">++</span>i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><h3 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h3><h4 id="类声明" tabindex="-1"><a class="header-anchor" href="#类声明" aria-hidden="true">#</a> 类声明</h4><p>声明举例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Room</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token keyword">double</span> length<span class="token punctuation">;</span>
        <span class="token keyword">double</span> breadth<span class="token punctuation">;</span>
        <span class="token keyword">double</span> height<span class="token punctuation">;</span>   

        <span class="token keyword">double</span> <span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   
            <span class="token keyword">return</span> length <span class="token operator">*</span> breadth<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">double</span> <span class="token function">calculateVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   
            <span class="token keyword">return</span> length <span class="token operator">*</span> breadth <span class="token operator">*</span> height<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用举例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// Program to illustrate the working of</span>
<span class="token comment">// objects and class in C++ Programming</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// create a class</span>
<span class="token keyword">class</span> <span class="token class-name">Room</span> <span class="token punctuation">{</span>

   <span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">double</span> length<span class="token punctuation">;</span>
    <span class="token keyword">double</span> breadth<span class="token punctuation">;</span>
    <span class="token keyword">double</span> height<span class="token punctuation">;</span>

    <span class="token keyword">double</span> <span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> length <span class="token operator">*</span> breadth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">double</span> <span class="token function">calculateVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> length <span class="token operator">*</span> breadth <span class="token operator">*</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// create object of Room class</span>
    Room room1<span class="token punctuation">;</span>

    <span class="token comment">// assign values to data members</span>
    room1<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">42.5</span><span class="token punctuation">;</span>
    room1<span class="token punctuation">.</span>breadth <span class="token operator">=</span> <span class="token number">30.8</span><span class="token punctuation">;</span>
    room1<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">19.2</span><span class="token punctuation">;</span>

    <span class="token comment">// calculate and display the area and volume of the room</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Area of Room =  &quot;</span> <span class="token operator">&lt;&lt;</span> room1<span class="token punctuation">.</span><span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Volume of Room =  &quot;</span> <span class="token operator">&lt;&lt;</span> room1<span class="token punctuation">.</span><span class="token function">calculateVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// declare a class</span>
<span class="token keyword">class</span> <span class="token class-name">Wall</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">double</span> length<span class="token punctuation">;</span>
    <span class="token keyword">double</span> height<span class="token punctuation">;</span>

  <span class="token keyword">public</span><span class="token operator">:</span>

    <span class="token comment">// 参数化构造：initialize variables with parameterized constructor</span>
    <span class="token function">Wall</span><span class="token punctuation">(</span><span class="token keyword">double</span> len<span class="token punctuation">,</span> <span class="token keyword">double</span> hgt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      length <span class="token operator">=</span> len<span class="token punctuation">;</span>
      height <span class="token operator">=</span> hgt<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 拷贝式构造：copy constructor with a Wall object as parameter</span>
    <span class="token comment">// copies data of the obj parameter</span>
    <span class="token function">Wall</span><span class="token punctuation">(</span>Wall <span class="token operator">&amp;</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      length <span class="token operator">=</span> obj<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      height <span class="token operator">=</span> obj<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">double</span> <span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> length <span class="token operator">*</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// create an object of Wall class</span>
  Wall <span class="token function">wall1</span><span class="token punctuation">(</span><span class="token number">10.5</span><span class="token punctuation">,</span> <span class="token number">8.6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// copy contents of wall1 to wall2</span>
  Wall wall2 <span class="token operator">=</span> wall1<span class="token punctuation">;</span>

  <span class="token comment">// print areas of wall1 and wall2</span>
  cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Area of Wall 1: &quot;</span> <span class="token operator">&lt;&lt;</span> wall1<span class="token punctuation">.</span><span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
  cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Area of Wall 2: &quot;</span> <span class="token operator">&lt;&lt;</span> wall2<span class="token punctuation">.</span><span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="权限控制" tabindex="-1"><a class="header-anchor" href="#权限控制" aria-hidden="true">#</a> 权限控制</h4><ol><li><p><code>public</code><br> 用来创建公有成员(数据或方法)，可在整个程序内访问。</p></li><li><p><code>private</code><br> 用来创建私有成员(数据或方法)，只能在类的内部访问，但是友元类和友元函数可以访问。</p></li><li><p><code>protected</code><br> 用来创建保护成员(数据或方法)，可在当前类以及其派生子类中访问。</p></li></ol><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/8ced491cc150be5587c075746a11011e.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>注意：C++的默认成员权限是<code>private</code></p><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><h4 id="继承语法" tabindex="-1"><a class="header-anchor" href="#继承语法" aria-hidden="true">#</a> 继承语法</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token comment">// eat() function</span>
    <span class="token comment">// sleep() function</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Animal</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// bark() function</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="继承访问控制" tabindex="-1"><a class="header-anchor" href="#继承访问控制" aria-hidden="true">#</a> 继承访问控制</h4><ol><li>公有继承：<code>public inheritance</code><br> 父类public成员仍然public,<br> 父类protected成员仍然protected,<br> 父类private成员无法访问,</li></ol><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/65360be5b9350dc91195e7f935d3dd63.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ol start="3"><li>私有继承：<code>private inheritance</code><br> 父类public成员变为private,<br> 父类protected成员变为private,<br> 父类private成员无法访问,</li></ol><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/d5ce0d8e85d674da7f1465a9a5512641.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ol start="5"><li>保护继承：<code>protected inheritance</code><br> 父类public成员变为protected,<br> 父类protected成员仍然protected,<br> 父类private成员无法访问,</li></ol><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/916530e94a192b434e9c1d3f58d513bf.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h4 id="多继承" tabindex="-1"><a class="header-anchor" href="#多继承" aria-hidden="true">#</a> 多继承</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Mammal</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">Mammal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Mammals can give direct birth.&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">WingedAnimal</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">WingedAnimal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Winged animal can flap.&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Bat</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Mammal</span><span class="token punctuation">,</span> <span class="token keyword">public</span> <span class="token class-name">WingedAnimal</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Bat b1<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-log line-numbers-mode" data-ext="log"><pre class="language-log"><code>Mammals can give direct birth<span class="token punctuation">.</span>
Winged animal can flap<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="友元函数-friend-function-和友元类-friend-class" tabindex="-1"><a class="header-anchor" href="#友元函数-friend-function-和友元类-friend-class" aria-hidden="true">#</a> 友元函数(friend function)和友元类(friend class)</h4><p>可以访问类的私有成员</p><ol><li>友元函数</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// C++ program to demonstrate the working of friend function</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Distance</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span><span class="token operator">:</span>
        <span class="token keyword">int</span> meter<span class="token punctuation">;</span>
        
        <span class="token comment">// friend function</span>
        <span class="token keyword">friend</span> <span class="token keyword">int</span> <span class="token function">addFive</span><span class="token punctuation">(</span>Distance<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token function">Distance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">meter</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// friend function definition</span>
<span class="token keyword">int</span> <span class="token function">addFive</span><span class="token punctuation">(</span>Distance d<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">//accessing private members from the friend function</span>
    d<span class="token punctuation">.</span>meter <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> d<span class="token punctuation">.</span>meter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Distance D<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Distance: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token function">addFive</span><span class="token punctuation">(</span>D<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>友元类</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// C++ program to demonstrate the working of friend class</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">// forward declaration</span>
<span class="token keyword">class</span> <span class="token class-name">ClassB</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ClassA</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span><span class="token operator">:</span>
        <span class="token keyword">int</span> numA<span class="token punctuation">;</span>

        <span class="token comment">// friend class declaration</span>
        <span class="token keyword">friend</span> <span class="token keyword">class</span> <span class="token class-name">ClassB</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token comment">// constructor to initialize numA to 12</span>
        <span class="token function">ClassA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">numA</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ClassB</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span><span class="token operator">:</span>
        <span class="token keyword">int</span> numB<span class="token punctuation">;</span>

    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token comment">// constructor to initialize numB to 1</span>
        <span class="token function">ClassB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">numB</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token comment">// member function to add numA</span>
    <span class="token comment">// from ClassA and numB from ClassB</span>
    <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ClassA objectA<span class="token punctuation">;</span>
        <span class="token keyword">return</span> objectA<span class="token punctuation">.</span>numA <span class="token operator">+</span> numB<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ClassB objectB<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Sum: &quot;</span> <span class="token operator">&lt;&lt;</span> objectB<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><p>父类指针指向子类对象，实现根据对象的不同执行不同的函数。</p><h4 id="场景举例" tabindex="-1"><a class="header-anchor" href="#场景举例" aria-hidden="true">#</a> 场景举例</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> </span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
 
<span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
   <span class="token keyword">protected</span><span class="token operator">:</span>
      <span class="token keyword">int</span> width<span class="token punctuation">,</span> height<span class="token punctuation">;</span>
   <span class="token keyword">public</span><span class="token operator">:</span>
      <span class="token function">Shape</span><span class="token punctuation">(</span> <span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
         width <span class="token operator">=</span> a<span class="token punctuation">;</span>
         height <span class="token operator">=</span> b<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">int</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
         cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Parent class area :&quot;</span> <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
         <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Rectangle</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Shape</span></span><span class="token punctuation">{</span>
   <span class="token keyword">public</span><span class="token operator">:</span>
      <span class="token function">Rectangle</span><span class="token punctuation">(</span> <span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">Shape</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
      <span class="token keyword">int</span> <span class="token function">area</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span> 
         cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Rectangle class area :&quot;</span> <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
         <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">*</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Triangle</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Shape</span></span><span class="token punctuation">{</span>
   <span class="token keyword">public</span><span class="token operator">:</span>
      <span class="token function">Triangle</span><span class="token punctuation">(</span> <span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">Shape</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
      <span class="token keyword">int</span> <span class="token function">area</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span> 
         cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Triangle class area :&quot;</span> <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
         <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">*</span> height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 程序的主函数</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span> <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   Shape <span class="token operator">*</span>shape<span class="token punctuation">;</span>
   Rectangle <span class="token function">rec</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   Triangle  <span class="token function">tri</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
   <span class="token comment">// 存储矩形的地址</span>
   shape <span class="token operator">=</span> <span class="token operator">&amp;</span>rec<span class="token punctuation">;</span>
   <span class="token comment">// 调用矩形的求面积函数 area</span>
   shape<span class="token operator">-&gt;</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
   <span class="token comment">// 存储三角形的地址</span>
   shape <span class="token operator">=</span> <span class="token operator">&amp;</span>tri<span class="token punctuation">;</span>
   <span class="token comment">// 调用三角形的求面积函数 area</span>
   shape<span class="token operator">-&gt;</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="虚函数-virtual-function" tabindex="-1"><a class="header-anchor" href="#虚函数-virtual-function" aria-hidden="true">#</a> 虚函数(virtual function)</h4><p>虚函数是 C++ 实现动态多态性的方式。当某个虚函数通过指针或者引用调用时，编译器产生的代码直到运行时才能确定到底调用哪个版本的函数。被调用的函数是与绑定到指针或者引用上的对象的动态类型相匹配的那个。因此，借助虚函数，我们可以实现多态性。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Base Function&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Base</span></span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Derived Function&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Derived derived1<span class="token punctuation">;</span>

    <span class="token comment">// pointer of Base type that points to derived1</span>
    Base<span class="token operator">*</span> base1 <span class="token operator">=</span> <span class="token operator">&amp;</span>derived1<span class="token punctuation">;</span>

    <span class="token comment">// calls member function of Derived class</span>
    base1<span class="token operator">-&gt;</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-log line-numbers-mode" data-ext="log"><pre class="language-log"><code>Derived Function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="stl" tabindex="-1"><a class="header-anchor" href="#stl" aria-hidden="true">#</a> STL</h2><h3 id="vector" tabindex="-1"><a class="header-anchor" href="#vector" aria-hidden="true">#</a> <code>vector</code></h3><h3 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> <code>stack</code></h3><h3 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> <code>queue</code></h3><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> <code>map</code></h3><h3 id="unordered-map" tabindex="-1"><a class="header-anchor" href="#unordered-map" aria-hidden="true">#</a> <code>unordered_map</code></h3><h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>`,142),b={href:"https://www.programiz.com/cpp-programming/variables-literals",target:"_blank",rel:"noopener noreferrer"};function h(g,y){const a=l("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[s("参考： "),n("a",d,[s("https://www.programiz.com/cpp-programming/variables-literals"),e(a)])]),i(" more "),k,n("p",null,[s("参考： "),n("a",v,[s("http://www.codeproject.com/Articles/8113/Thread-Local-Storage-The-C-Way"),e(a)])]),m,n("p",null,[s("[1] "),n("a",b,[s("https://www.programiz.com/cpp-programming/variables-literals"),e(a)])])])}const f=p(u,[["render",h],["__file","C__基础教程.html.vue"]]);export{f as default};
