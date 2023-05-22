import{_ as i,W as l,X as t,Y as o,Z as n,$ as a,a0 as c,a1 as s,D as d}from"./framework-c9619a7b.js";const r={},p=s('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><p>Vim是Linux下经典的文本编辑器之一，因其功能强大，素有“编辑器之神”的美誉。但是其学习曲线也是比较陡峭的，本文将对其使用方法做一个简单的介绍和总结，希望能对大家快速上手这款编辑器提供帮助。</p><h1 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h1><ul><li>键位图</li></ul><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/00cecf1d98a4d0858aac8f05ef032ba8.20221019174721.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这张图囊括了Vim操作的核心，可以细细品味。既可以作为初学者入门的指南，也可以作为学习过后的总结凝练。</p>',6),u=s('<h2 id="光标移动" tabindex="-1"><a class="header-anchor" href="#光标移动" aria-hidden="true">#</a> 光标移动</h2><ol><li>方向键</li></ol><ul><li><code>h</code>: 光标左移1格</li><li><code>j</code>: 光标下移1格</li><li><code>k</code>: 光标上移1格</li><li><code>l</code>: 光标右移1格</li></ul><ol start="3"><li>其他移动</li></ol><ul><li>光标移动行首(包含字符空)：<code>0</code></li><li>光标移到行尾(包含空字符)：<code>$</code></li><li>光标移到行首(不包含空字符): <code>^</code></li><li>光标移动行尾(不包含空字符): <code>g_</code></li><li>光标移到下一个单词头: <code>w</code></li><li>光标移到下一个单词尾: <code>e</code></li><li>光标移到上一个单词头：<code>b</code></li><li>光标移到上一个单词尾：<code>ge</code></li><li>光标移到下一个<code>a</code>字符(包含): <code>fa</code></li><li>光标移到上一个<code>a</code>字符(包含): <code>Fa</code></li><li>光标移到下一个<code>a</code>字符(不包含): <code>ta</code></li><li>光标移到上一个<code>a</code>字符(不包含): <code>Ta</code></li><li>光标移到下一个句子头: <code>(</code></li><li>光标移到上一个句子头: <code>)</code></li><li>光标移到段首：<code>{</code></li><li>光标移到段尾：<code>}</code></li><li>光标移到首行第一个字符(不包含空字符)：<code>gg</code></li><li>光标移到末行第一个字符(不包含空字符): <code>G</code></li><li>光标移到屏幕顶行：<code>H</code></li><li>光标移到屏幕中间：<code>M</code></li><li>光标移到屏幕底行：<code>L</code></li></ul><h2 id="文本选择" tabindex="-1"><a class="header-anchor" href="#文本选择" aria-hidden="true">#</a> 文本选择</h2><p>在普通文本编辑器中，要对文本进行复制、剪切等操作会先选中文本，再进行相应的操作。在Vim中也可以继续沿用这样的逻辑，如下面的方式一。此外，Vim还有一些高级操作，不用显式地先选中文本，就可以进行复制、删除等操作。 方式一：进入<code>可视模式</code>进行选择</p><h2 id="文本复制、剪切-删除-与粘贴" tabindex="-1"><a class="header-anchor" href="#文本复制、剪切-删除-与粘贴" aria-hidden="true">#</a> 文本复制、剪切(删除)与粘贴</h2><ul><li>复制整行: <code>yy</code></li><li>复制当前单词: <code>yaw</code></li><li>剪切整行: <code>dd</code></li><li>剪切整行并重新输入: <code>cc</code></li><li>剪切当前单词: <code>daw</code></li><li>在光标后粘贴: <code>P</code>(小写)</li><li>在光标前粘贴: <code>P</code>(大写)</li><li>删除当前单词并重输入：<code>caw</code></li></ul><h2 id="文本替换" tabindex="-1"><a class="header-anchor" href="#文本替换" aria-hidden="true">#</a> 文本替换</h2><ul><li>替换光标所在字符：<code>r</code></li><li>进入<code>替换模式</code>替换：<code>R</code></li></ul><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><ul><li>撤销：<code>u</code></li><li>恢复：<code>Ctrl+r</code></li><li>标记: <code>mx</code></li><li>回到指定标记处：`x</li></ul><h1 id="插件管理" tabindex="-1"><a class="header-anchor" href="#插件管理" aria-hidden="true">#</a> 插件管理</h1><h2 id="vim-plug安装" tabindex="-1"><a class="header-anchor" href="#vim-plug安装" aria-hidden="true">#</a> Vim-Plug安装</h2>',15),v={href:"https://github.com/junegunn/vim-plug",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fLo</span> ~/.vim/autoload/plug.vim --create-dirs <span class="token punctuation">\\</span>
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管理" tabindex="-1"><a class="header-anchor" href="#管理" aria-hidden="true">#</a> 管理</h2><p>以下命令在vim窗口下进行</p><ul><li><code>:source ~/.vimrc</code></li><li><code>:PlugInstall</code>: 安装插件</li><li><code>:PlugUpdate</code>: 插件更新</li><li><code>:PlugClean</code>: 插件清理</li></ul><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>自用配置文件，供参考：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ~/.vimrc</span>
<span class="token builtin class-name">set</span> nocompatible    <span class="token string">&quot;去掉有关vi一致性模式,避免以前版本的bug和局限
set history=1000    &quot;</span>记录历史的行数
<span class="token builtin class-name">set</span> <span class="token assign-left variable">background</span><span class="token operator">=</span>dark <span class="token string">&quot;背景使用黑色
set guioptions-=T   &quot;</span>去除vim的GUI版本中得toolbar
<span class="token builtin class-name">set</span> vb <span class="token assign-left variable">t_vb</span><span class="token operator">=</span>        <span class="token string">&quot;当vim进行编辑时,如果命令错误,会发出警报,该设置去掉警报
set nohls           &quot;</span>默认情况下,寻找匹配是高亮度显示,该设置关闭高亮显示
<span class="token builtin class-name">set</span> <span class="token assign-left variable">fileencodings</span><span class="token operator">=</span>utf-8,ucs-bom,gb18030,gbk,gb2312,cp936
<span class="token builtin class-name">set</span> number
<span class="token builtin class-name">set</span> linebreak	<span class="token string">&quot;Break lines at word (requires Wrap lines)
set showbreak=+++	&quot;</span>Wrap-broken line prefix
<span class="token builtin class-name">set</span> <span class="token assign-left variable">textwidth</span><span class="token operator">=</span><span class="token number">100</span>	<span class="token string">&quot;Line wrap (number of cols)
set showmatch	&quot;</span>Highlight matching brace
<span class="token builtin class-name">set</span> visualbell	<span class="token string">&quot;Use visual bell (no beeping)
set hlsearch	&quot;</span>Highlight all search results
<span class="token builtin class-name">set</span> smartcase	<span class="token string">&quot;Enable smart-case search
set ignorecase	&quot;</span>Always case-insensitive
<span class="token builtin class-name">set</span> incsearch	<span class="token string">&quot;Searches for strings incrementally
set autoindent	&quot;</span>Auto-indent new lines
<span class="token builtin class-name">set</span> <span class="token assign-left variable">shiftwidth</span><span class="token operator">=</span><span class="token number">4</span>	<span class="token string">&quot;Number of auto-indent spaces
set smartindent	&quot;</span>Enable smart-indent
<span class="token builtin class-name">set</span> smarttab	<span class="token string">&quot;Enable smart-tabs
set softtabstop=4	&quot;</span>Number of spaces per Tab
<span class="token builtin class-name">set</span> ruler	<span class="token string">&quot;Show row and column ruler information
set undolevels=1000	&quot;</span>Number of undo levels
<span class="token builtin class-name">set</span> <span class="token assign-left variable">backspace</span><span class="token operator">=</span>indent,eol,start

call plug<span class="token comment">#begin()</span>
<span class="token string">&quot; The default plugin directory will be as follows:
&quot;</span>   - Vim <span class="token punctuation">(</span>Linux/macOS<span class="token punctuation">)</span>: <span class="token string">&#39;~/.vim/plugged&#39;</span>
<span class="token string">&quot;   - Vim (Windows): &#39;~/vimfiles/plugged&#39;
&quot;</span>   - Neovim <span class="token punctuation">(</span>Linux/macOS/Windows<span class="token punctuation">)</span>: stdpath<span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span> <span class="token builtin class-name">.</span> <span class="token string">&#39;/plugged&#39;</span>
<span class="token string">&quot; You can specify a custom plugin directory by passing it as the argument
&quot;</span>   - e.g. <span class="token variable"><span class="token variable">\`</span>call plug<span class="token comment">#begin(&#39;~/.vim/plugged&#39;)</span><span class="token variable">\`</span></span>
<span class="token string">&quot;   - Avoid using standard Vim directory names like &#39;plugin&#39;

&quot;</span> Make sure you use single quotes

Plug <span class="token string">&#39;Yggdroot/LeaderF&#39;</span>, <span class="token punctuation">{</span> <span class="token string">&#39;do&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;./install.sh&#39;</span> <span class="token punctuation">}</span>
Plug <span class="token string">&#39;jiangmiao/auto-pairs&#39;</span>
Plug <span class="token string">&#39;vim-airline/vim-airline&#39;</span>
Plug <span class="token string">&#39;vim-airline/vim-airline-themes&#39;</span>
Plug <span class="token string">&#39;preservim/nerdtree&#39;</span>
Plug <span class="token string">&#39;ghifarit53/tokyonight-vim&#39;</span>
Plug <span class="token string">&#39;Yggdroot/indentLine&#39;</span>
Plug <span class="token string">&#39;preservim/tagbar&#39;</span>

<span class="token string">&quot; Initialize plugin system
&quot;</span> - Automatically executes <span class="token variable"><span class="token variable">\`</span>filetype plugin indent on<span class="token variable">\`</span></span> and <span class="token variable"><span class="token variable">\`</span>syntax <span class="token builtin class-name">enable</span><span class="token variable">\`</span></span><span class="token builtin class-name">.</span>
call plug<span class="token comment">#end()</span>
<span class="token string">&quot; You can revert the settings after the call like so:
&quot;</span>   filetype indent off   <span class="token string">&quot; Disable file-type-specific indentation
&quot;</span>   syntax off            <span class="token string">&quot; Disable syntax highlighting
&quot;</span>

<span class="token string">&quot; auto pairs配置
au Filetype FILETYPE let b:AutoPairs = {&quot;</span><span class="token punctuation">(</span><span class="token string">&quot;: &quot;</span><span class="token punctuation">)</span><span class="token string">&quot;}
au FileType php      let b:AutoPairs = AutoPairsDefine({&#39;&lt;?&#39; : &#39;?&gt;&#39;, &#39;&lt;?php&#39;: &#39;?&gt;&#39;})

&quot;</span> airline配置
<span class="token builtin class-name">set</span> <span class="token assign-left variable">laststatus</span><span class="token operator">=</span><span class="token number">2</span>  <span class="token string">&quot;永远显示状态栏
let g:airline_powerline_fonts = 1  &quot;</span> 支持 powerline 字体
<span class="token string">&quot; let g:airline#extensions#tabline#enabled = 1 “ 显示窗口tab和buffer
&quot;</span> <span class="token builtin class-name">let</span> g:airline_theme<span class="token operator">=</span><span class="token string">&#39;moloai&#39;</span>  <span class="token string">&quot; murmur配色不错

if !exists(&#39;g:airline_symbols&#39;)
let g:airline_symbols = {}
endif
let g:airline_left_sep = &#39;▶&#39;
let g:airline_left_alt_sep = &#39;❯&#39;
let g:airline_right_sep = &#39;◀&#39;
let g:airline_right_alt_sep = &#39;❮&#39;
let g:airline_symbols.linenr = &#39;¶&#39;
let g:airline_symbols.branch = &#39;⎇&#39;

&quot;</span> 解决tmux中粘贴缩进混乱
<span class="token keyword">if</span> <span class="token operator">&amp;</span>term <span class="token operator">=~</span> <span class="token string">&quot;screen&quot;</span>                                                   
    <span class="token builtin class-name">let</span> <span class="token operator">&amp;</span>t_BE <span class="token operator">=</span> <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[?2004h&quot;</span>                                              
    <span class="token builtin class-name">let</span> <span class="token operator">&amp;</span>t_BD <span class="token operator">=</span> <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[?2004l&quot;</span>                                              
    <span class="token builtin class-name">exec</span> <span class="token string">&quot;set t_PS=<span class="token entity" title="\\e">\\e</span>[200~&quot;</span>                                              
    <span class="token builtin class-name">exec</span> <span class="token string">&quot;set t_PE=<span class="token entity" title="\\e">\\e</span>[201~&quot;</span>                                              
endif

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(g,k){const e=d("ExternalLinkIcon");return l(),t("div",null,[p,o(" more "),u,n("p",null,[a("github: "),n("a",v,[a("https://github.com/junegunn/vim-plug"),c(e)])]),m])}const f=i(r,[["render",b],["__file","文本编辑器—Vim使用教程.html.vue"]]);export{f as default};
