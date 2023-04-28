import{_ as l,W as d,X as s,Z as e,$ as n,a0 as o,a1 as i,D as t}from"./framework-c9619a7b.js";const r={},c=i(`<h1 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h1><ul><li>复合语句(块语句)：A <strong>compound statement</strong> (also called a block, or block statement) is a group of zero or more statements that is treated by the compiler as if it were a single statement.</li></ul><h2 id="自定义命名空间" tabindex="-1"><a class="header-anchor" href="#自定义命名空间" aria-hidden="true">#</a> 自定义命名空间</h2><p>定义命名空间(namespace):</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),v={href:"https://www.learncpp.com/cpp-tutorial/user-defined-namespaces-and-the-scope-resolution-operator/",target:"_blank",rel:"noopener noreferrer"},u=i(`<h2 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h2><p>哪些是局部变量：</p><ul><li>函数参数</li><li>块内定义的变量</li></ul><p>注意：</p><ul><li>局部变量具有块作用域</li><li>同一个作用域下的变量名必须唯一</li><li>局部变量具有自动存储周期(<code>automatic storage duration</code>)</li><li>局部变量创建没有联系(linkage)</li></ul><blockquote><p>An identifier’s <strong>linkage</strong> determines whether other declarations of that name refer to the same object or not.</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
    int x { 2 }; // local variable, no linkage

    {
        int x { 3 }; // this identifier x refers to a different object than the previous x
    }

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>变量遮蔽(<code>Variable shadowing</code>, <code>name hiding</code>)：当内层block定义的变量与外层block定义的变量同名时，内层定义的变量有效。</li></ul><blockquote><p>尽量避免出现这种情况，使用不同的标识符名称 #最佳实践</p></blockquote><h2 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h2><p>哪些是全局变量：</p><ul><li>函数外定义的变量</li></ul><blockquote><p>Consider using a “g” or “g_” prefix when naming non-const global variables, to help differentiate them from local variables and function parameters #最佳实践</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int g_x {}; // global variable g_x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：</p><ul><li>全局变量具有文件作用域(<code>file scope, global scope, global namespace scope</code>三者同一个意思)</li><li>全局变量具有静态存储周期(<code>static duration</code>)</li><li>常量全局变量必须初始化，否则会报错</li></ul><h2 id="linkage" tabindex="-1"><a class="header-anchor" href="#linkage" aria-hidden="true">#</a> Linkage</h2><h3 id="no-linkage" tabindex="-1"><a class="header-anchor" href="#no-linkage" aria-hidden="true">#</a> <code>no linkage</code>:</h3><h3 id="internal-linkage" tabindex="-1"><a class="header-anchor" href="#internal-linkage" aria-hidden="true">#</a> <code>internal linkage</code></h3><p>An identifier with <strong>internal linkage</strong> can be seen and used within a single translation unit, but it is not accessible from other translation units (that is, it is not exposed to the linker).</p><p>注意：</p><ol><li><code>const</code> and <code>constexpr</code> global variables have internal linkage by default.</li><li>To make a non-constant global variable internal, we use the <code>static</code> keyword. Functions default to external linkage (which we’ll cover in the next lesson), but can be set to internal linkage via the static keyword</li></ol><h3 id="external-linkage" tabindex="-1"><a class="header-anchor" href="#external-linkage" aria-hidden="true">#</a> <code>external linkage</code></h3>`,23);function m(b,h){const a=t("ExternalLinkIcon");return d(),s("div",null,[c,e("p",null,[n("参考： "),e("a",v,[n("6.2 — User-defined namespaces and the scope resolution operator"),o(a)])]),u])}const p=l(r,[["render",m],["__file","C__.html.vue"]]);export{p as default};
