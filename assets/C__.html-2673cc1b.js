import{_ as t,W as o,X as l,$ as n,a0 as s,a1 as i,Z as a,D as c}from"./framework-805da640.js";const p={},d=a(`<h1 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h1><ul><li>复合语句(块语句)：A <strong>compound statement</strong> (also called a block, or block statement) is a group of zero or more statements that is treated by the compiler as if it were a single statement.</li></ul><h2 id="自定义命名空间" tabindex="-1"><a class="header-anchor" href="#自定义命名空间" aria-hidden="true">#</a> 自定义命名空间</h2><p>定义命名空间(namespace):</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

namespace foo // define a namespace named foo
{
    // This doSomething() belongs to namespace foo
    int doSomething(int x, int y)
    {
        return x + y;
    }
}

namespace goo // define a namespace named goo
{
    // This doSomething() belongs to namespace goo
    int doSomething(int x, int y)
    {
        return x - y;
    }
}

int main()
{
    std::cout &lt;&lt; foo::doSomething(4, 3) &lt;&lt; &#39;\\n&#39;; // use the doSomething() that exists in namespace foo
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li>使用<code>::</code>域解析操作符指定对象, 例如<code>foo::doSomething()</code>。</li><li>如果<code>::</code>前不加prefix，如<code>::doSomething()</code>, 则默认使用全局命名空间，这对于在命名空间内部调用全局函数有用，与该命名空间内部的同名函数区分开。</li><li>允许在多个地方定义同一个命名空间(不同block、不同file等)，表示属于该命名空间的一部分。也可以向已有的命名空间中继续添加自己的函数，但是不建议向<code>std</code>空间加(事实上也不允许)。</li><li>命名空间允许嵌套定义，访问时类似<code>foo::goo::add</code>.</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

namespace foo
{
    namespace goo // goo is a namespace inside the foo namespace
    {
        int add(int x, int y)
        {
            return x + y;
        }
    }
}

int main()
{
    std::cout &lt;&lt; foo::goo::add(1, 2) &lt;&lt; &#39;\\n&#39;;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>允许设备命名空间别名</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>namespace active = foo::goo; // active now refers to foo::goo
std::cout &lt;&lt; active::add(1, 2) &lt;&lt; &#39;\\n&#39;; // This is really foo::goo::add()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r={href:"https://www.learncpp.com/cpp-tutorial/user-defined-namespaces-and-the-scope-resolution-operator/",target:"_blank",rel:"noopener noreferrer"},u=a(`<h2 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h2><p>哪些是局部变量：</p><ul><li>函数参数</li><li>块内定义的变量</li></ul><p>注意：</p><ul><li>局部变量具有块作用域</li><li>同一个作用域下的变量名必须唯一</li><li>局部变量具有自动存储周期(<code>automatic storage duration</code>)</li><li>局部变量创建没有联系(linkage)</li></ul><blockquote><p>An identifier’s <strong>linkage</strong> determines whether other declarations of that name refer to the same object or not.</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
    int x { 2 }; // local variable, no linkage

    {
        int x { 3 }; // this identifier x refers to a different object than the previous x
    }

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>变量遮蔽(<code>Variable shadowing</code>, <code>name hiding</code>)：当内层block定义的变量与外层block定义的变量同名时，内层定义的变量有效。</li></ul><blockquote><p>尽量避免出现这种情况，使用不同的标识符名称 #最佳实践</p></blockquote><h2 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h2><p>哪些是全局变量：</p><ul><li>函数外定义的变量</li></ul><blockquote><p>Consider using a “g” or “g_” prefix when naming non-const global variables, to help differentiate them from local variables and function parameters #最佳实践</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int g_x {}; // global variable g_x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：</p><ul><li>全局变量具有文件作用域(<code>file scope, global scope, global namespace scope</code>三者同一个意思)</li><li>全局变量具有静态存储周期(<code>static duration</code>)</li><li>常量全局变量必须初始化，否则会报错</li></ul><h3 id="如何让全局变量跨文件访问" tabindex="-1"><a class="header-anchor" href="#如何让全局变量跨文件访问" aria-hidden="true">#</a> 如何让全局变量跨文件访问</h3><h4 id="_1-公共头文件" tabindex="-1"><a class="header-anchor" href="#_1-公共头文件" aria-hidden="true">#</a> 1. 公共头文件</h4><p><code>constants.h</code>:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">CONSTANTS_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">CONSTANTS_H</span></span>

<span class="token comment">// define your own namespace to hold constants</span>
<span class="token keyword">namespace</span> constants
<span class="token punctuation">{</span>
    <span class="token comment">// constants have internal linkage by default</span>
    <span class="token keyword">constexpr</span> <span class="token keyword">double</span> pi <span class="token punctuation">{</span> <span class="token number">3.14159</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">constexpr</span> <span class="token keyword">double</span> avogadro <span class="token punctuation">{</span> <span class="token number">6.0221413e23</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">constexpr</span> <span class="token keyword">double</span> myGravity <span class="token punctuation">{</span> <span class="token number">9.2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// m/s^2 -- gravity is light on this planet</span>
    <span class="token comment">// ... other related constants</span>
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main.cpp</code>:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;constants.h&quot;</span> <span class="token comment">// include a copy of each constant in this file</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter a radius: &quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> radius<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cin <span class="token operator">&gt;&gt;</span> radius<span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;The circumference is: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2.0</span> <span class="token operator">*</span> radius <span class="token operator">*</span> constants<span class="token double-colon punctuation">::</span>pi <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">优缺点</p><p>优点:</p><ol><li>每个引用头文件的源代码文件都有全局常量的副本, 利于编译器优化</li></ol><p>缺点:</p><ol><li>更改一个常量的值, 所有引用头文件的源代码文件都要重新编译,大项目里会导致冗长的编译时间</li><li>如果常量很大并且无法优化的话, 会占用很大内存</li></ol></div><h4 id="_2-外部链接变量" tabindex="-1"><a class="header-anchor" href="#_2-外部链接变量" aria-hidden="true">#</a> 2. 外部链接变量</h4><p><code>contants.cpp</code>:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;constants.h&quot;</span></span>

<span class="token keyword">namespace</span> constants
<span class="token punctuation">{</span>
    <span class="token comment">// actual global variables</span>
    <span class="token keyword">extern</span> <span class="token keyword">const</span> <span class="token keyword">double</span> pi <span class="token punctuation">{</span> <span class="token number">3.14159</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">extern</span> <span class="token keyword">const</span> <span class="token keyword">double</span> avogadro <span class="token punctuation">{</span> <span class="token number">6.0221413e23</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">extern</span> <span class="token keyword">const</span> <span class="token keyword">double</span> myGravity <span class="token punctuation">{</span> <span class="token number">9.2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// m/s^2 -- gravity is light on this planet</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>contants.h</code>:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">CONSTANTS_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">CONSTANTS_H</span></span>

<span class="token keyword">namespace</span> constants
<span class="token punctuation">{</span>
    <span class="token comment">// since the actual variables are inside a namespace, the forward declarations need to be inside a namespace as well</span>
    <span class="token keyword">extern</span> <span class="token keyword">const</span> <span class="token keyword">double</span> pi<span class="token punctuation">;</span>
    <span class="token keyword">extern</span> <span class="token keyword">const</span> <span class="token keyword">double</span> avogadro<span class="token punctuation">;</span>
    <span class="token keyword">extern</span> <span class="token keyword">const</span> <span class="token keyword">double</span> myGravity<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main.cpp</code>:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;constants.h&quot;</span> <span class="token comment">// include all the forward declarations</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter a radius: &quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> radius<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cin <span class="token operator">&gt;&gt;</span> radius<span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;The circumference is: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2.0</span> <span class="token operator">*</span> radius <span class="token operator">*</span> constants<span class="token double-colon punctuation">::</span>pi <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">缺点</p><p>不利于编译器优化</p></div><h4 id="_3-公共头文件中使用内联变量" tabindex="-1"><a class="header-anchor" href="#_3-公共头文件中使用内联变量" aria-hidden="true">#</a> 3. 公共头文件中使用内联变量</h4><p><code>constants.h</code>:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">CONSTANTS_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">CONSTANTS_H</span></span>

<span class="token comment">// define your own namespace to hold constants</span>
<span class="token keyword">namespace</span> constants
<span class="token punctuation">{</span>
    <span class="token keyword">inline</span> <span class="token keyword">constexpr</span> <span class="token keyword">double</span> pi <span class="token punctuation">{</span> <span class="token number">3.14159</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// note: now inline constexpr</span>
    <span class="token keyword">inline</span> <span class="token keyword">constexpr</span> <span class="token keyword">double</span> avogadro <span class="token punctuation">{</span> <span class="token number">6.0221413e23</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">inline</span> <span class="token keyword">constexpr</span> <span class="token keyword">double</span> myGravity <span class="token punctuation">{</span> <span class="token number">9.2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// m/s^2 -- gravity is light on this planet</span>
    <span class="token comment">// ... other related constants</span>
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main.cpp</code>:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;constants.h&quot;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter a radius: &quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> radius<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cin <span class="token operator">&gt;&gt;</span> radius<span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;The circumference is: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2.0</span> <span class="token operator">*</span> radius <span class="token operator">*</span> constants<span class="token double-colon punctuation">::</span>pi <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链接-linkage" tabindex="-1"><a class="header-anchor" href="#链接-linkage" aria-hidden="true">#</a> 链接(Linkage)</h2><p>An identifier’s <strong>linkage</strong> determines whether other declarations of that name refer to the same object or not.</p><h3 id="无链接-no-linkage" tabindex="-1"><a class="header-anchor" href="#无链接-no-linkage" aria-hidden="true">#</a> 无链接(no linkage)</h3><p>局部变量</p><h3 id="内部链接-internal-linkage" tabindex="-1"><a class="header-anchor" href="#内部链接-internal-linkage" aria-hidden="true">#</a> 内部链接(internal linkage)</h3><p>An identifier with <strong>internal linkage</strong> can be seen and used within a single translation unit, but it is not accessible from other translation units (that is, it is not exposed to the linker).</p><p>注意：</p><ol><li>全局常量(const global variable) <code>const</code> and <code>constexpr</code> global variables have internal linkage by default.</li><li>全局变量(non-constant global variable) To make a non-constant global variable internal, we use the <code>static</code> keyword.</li><li>函数(function) Functions default to external linkage (which we’ll cover in the next lesson), but can be set to internal linkage via the <code>static</code> keyword</li></ol><h3 id="外部链接-external-linkage" tabindex="-1"><a class="header-anchor" href="#外部链接-external-linkage" aria-hidden="true">#</a> 外部链接(external linkage)</h3><p>An identifier with external linkage can be seen and used both from the file in which it is defined, and from other code files (via a forward declaration).</p><ol start="2"><li>全局变量(non-constant global variable)</li></ol><ul><li>全局变量默认是<code>external</code>的，可以通过<code>static</code>变为<code>internal</code></li><li>全局常量默认是<code>internal</code>的，可以通过<code>extern</code>变为<code>external</code></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// External global variable definitions:</span>
<span class="token keyword">int</span> g_x<span class="token punctuation">;</span>                       <span class="token comment">// defines non-initialized external global variable (zero initialized by default)</span>
<span class="token keyword">extern</span> <span class="token keyword">const</span> <span class="token keyword">int</span> g_x<span class="token punctuation">{</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>     <span class="token comment">// defines initialized const external global variable</span>
<span class="token keyword">extern</span> <span class="token keyword">constexpr</span> <span class="token keyword">int</span> g_x<span class="token punctuation">{</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// defines initialized constexpr external global variable</span>

<span class="token comment">// Forward declarations</span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> g_y<span class="token punctuation">;</span>                <span class="token comment">// forward declaration for non-constant global variable</span>
<span class="token keyword">extern</span> <span class="token keyword">const</span> <span class="token keyword">int</span> g_y<span class="token punctuation">;</span>          <span class="token comment">// forward declaration for const global variable</span>
<span class="token keyword">extern</span> <span class="token keyword">constexpr</span> <span class="token keyword">int</span> g_y<span class="token punctuation">;</span>      <span class="token comment">// not allowed: constexpr variables can&#39;t be forward declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),v=n("li",null,"内联变量(inline variable)默认是外部链接的",-1),k={href:"https://www.learncpp.com/cpp-tutorial/why-non-const-global-variables-are-evil/",target:"_blank",rel:"noopener noreferrer"},m=a("<p><strong>non-const global variables</strong> are dangerous is because</p><ol><li>their values can be changed by any function that is called, and there is no easy way for the programmer to know that this will happen.</li><li>Global variables also make your program less modular and less flexible.</li></ol><p><strong>Local variables</strong> are much safer because other functions can not affect them directly.</p><blockquote><p>Use local variables instead of global variables whenever possible. #最佳实践</p></blockquote><blockquote><p>适合使用全局变量的场景: 日志文件</p></blockquote><ul><li><p>全局变量初始化顺序</p><ul><li>静态初始化: In the static initialization phase, global variables with constexpr initializers (including literals) are initialized to those values. Also, global variables without initializers are zero-initialized.</li><li>动态初始化: the gist of it is that global variables with non-constexpr initializers are initialized.</li></ul></li></ul>",6);function b(h,g){const e=c("ExternalLinkIcon");return o(),l("div",null,[d,n("p",null,[s("参考： "),n("a",r,[s("6.2 — User-defined namespaces and the scope resolution operator"),i(e)])]),u,n("ul",null,[v,n("li",null,[s("全局变量容易导致bug 参考："),n("a",k,[s("why-non-const-global-variables-are-evil"),i(e)])])]),m])}const w=t(p,[["render",b],["__file","C__.html.vue"]]);export{w as default};
