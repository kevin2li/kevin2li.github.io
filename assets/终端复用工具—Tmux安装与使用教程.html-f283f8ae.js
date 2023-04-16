import{_ as i,W as t,X as p,Y as r,$ as s,a0 as n,Z as l,a1 as a,D as c}from"./framework-f38b131a.js";const o={},d=a(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> tmux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h1><h2 id="session管理" tabindex="-1"><a class="header-anchor" href="#session管理" aria-hidden="true">#</a> session管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看已有会话</span>
tmux <span class="token function">ls</span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, s<span class="token variable">\`</span></span>

<span class="token comment"># 新建会话</span>
tmux new <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>session-name<span class="token operator">&gt;</span>

<span class="token comment"># 分离会话</span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, d<span class="token variable">\`</span></span>

<span class="token comment"># 删除会话</span>
tmux kill-session <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>session-name<span class="token operator">&gt;</span>

<span class="token comment"># 接入会话</span>
tmux attach <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>session-name<span class="token operator">&gt;</span>

<span class="token comment"># 切换会话</span>
tmux switch <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>session-name<span class="token operator">&gt;</span> 

<span class="token comment"># 重命名会话</span>
tmux <span class="token function">rename</span> <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>old-name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>new-name<span class="token operator">&gt;</span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, $<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u=a(`<h2 id="window管理" tabindex="-1"><a class="header-anchor" href="#window管理" aria-hidden="true">#</a> window管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建新窗口</span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, c<span class="token variable">\`</span></span>

<span class="token comment"># 重命名窗口</span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, ,<span class="token variable">\`</span></span>

<span class="token comment"># 切换窗口</span>
鼠标点选
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, <span class="token operator">&lt;</span>id<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 切换到<span class="token operator">&lt;</span>id<span class="token operator">&gt;</span>窗口
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, w<span class="token variable">\`</span></span>：列出所有窗口来选择切换
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, n<span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 切换到下个窗口
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, p<span class="token variable">\`</span></span>：切换到上个窗口

<span class="token comment"># 删除窗口</span>
tmux kill-window <span class="token parameter variable">-t</span> <span class="token number">1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="panel管理" tabindex="-1"><a class="header-anchor" href="#panel管理" aria-hidden="true">#</a> panel管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建panel</span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, <span class="token operator">|</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> vertical <span class="token function">split</span> window
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, -<span class="token variable">\`</span></span><span class="token builtin class-name">:</span> horizontal <span class="token function">split</span> window

<span class="token comment"># 删除panel</span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, x<span class="token variable">\`</span></span>

<span class="token comment"># 调整大小</span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, Alt + <span class="token operator">&lt;</span>arrow<span class="token operator">&gt;</span><span class="token variable">\`</span></span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, z<span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 将当前panel最大化<span class="token punctuation">(</span>复制时有用<span class="token punctuation">)</span>

<span class="token comment"># 查看panel编号</span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, q<span class="token variable">\`</span></span>

<span class="token comment"># 交换panel位置</span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, <span class="token punctuation">{</span><span class="token variable">\`</span></span>：与上一个编号的panel交换
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, <span class="token punctuation">}</span><span class="token variable">\`</span></span>：与下一个编号的panel交换

<span class="token comment"># 旋转panel</span>
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, Ctrl+o<span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 逆时针
<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>, Alt+o<span class="token variable">\`</span></span>：顺时针

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="进阶使用" tabindex="-1"><a class="header-anchor" href="#进阶使用" aria-hidden="true">#</a> 进阶使用</h1><h2 id="复制粘贴" tabindex="-1"><a class="header-anchor" href="#复制粘贴" aria-hidden="true">#</a> 复制粘贴</h2><ol><li>方法：按住shift，鼠标左键选择，Ctrl+C复制，Ctrl+V粘贴</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当横向有多个panel时，可以先最大化再复制</p></div><ol start="2"><li>Vim中粘贴内容出现缩进错误 在<code>~/.vimrc</code>中加入下面代码：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot; 解决tmux中粘贴缩进混乱
if &amp;term =~ &quot;</span><span class="token function">screen</span><span class="token string">&quot;                                                   
    let &amp;t_BE = &quot;</span><span class="token punctuation">\\</span>e<span class="token punctuation">[</span>?2004h<span class="token string">&quot;                                              
    let &amp;t_BD = &quot;</span><span class="token punctuation">\\</span>e<span class="token punctuation">[</span>?2004l<span class="token string">&quot;                                              
    exec &quot;</span><span class="token builtin class-name">set</span> <span class="token assign-left variable">t_PS</span><span class="token operator">=</span><span class="token punctuation">\\</span>e<span class="token punctuation">[</span><span class="token number">200</span>~<span class="token string">&quot;                                              
    exec &quot;</span><span class="token builtin class-name">set</span> <span class="token assign-left variable">t_PE</span><span class="token operator">=</span><span class="token punctuation">\\</span>e<span class="token punctuation">[</span><span class="token number">201</span>~&quot;                                              
endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件管理" tabindex="-1"><a class="header-anchor" href="#插件管理" aria-hidden="true">#</a> 插件管理</h2><h3 id="插件管理器tpm" tabindex="-1"><a class="header-anchor" href="#插件管理器tpm" aria-hidden="true">#</a> 插件管理器<code>tpm</code></h3><ol><li>安装tmux插件管理工具</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>将下面代码放到<code>~/.tmux.conf</code>配置文件最后</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List of plugins</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> @plugin <span class="token string">&#39;tmux-plugins/tpm&#39;</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> @plugin <span class="token string">&#39;tmux-plugins/tmux-sensible&#39;</span>

<span class="token comment"># Other examples:</span>
<span class="token comment"># set -g @plugin &#39;github_username/plugin_name&#39;</span>
<span class="token comment"># set -g @plugin &#39;github_username/plugin_name#branch&#39;</span>
<span class="token comment"># set -g @plugin &#39;git@github.com:user/plugin&#39;</span>
<span class="token comment"># set -g @plugin &#39;git@bitbucket.com:user/plugin&#39;</span>

<span class="token comment"># Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)</span>
run <span class="token string">&#39;~/.tmux/plugins/tpm/tpm&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要安装插件就新增一个条目：<code>set -g @plugin &#39;...&#39;</code>，然后<code>&lt;prefix&gt; + I</code>安装。</p><p>插件安装目录为：<code>~/.tmux/plugins/</code></p><ol start="3"><li>使配置文件生效</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux <span class="token builtin class-name">source</span> ~/.tmux.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>快捷键</li></ol><ul><li>下载安装插件: <code>&lt;prefix&gt; + I</code></li><li>更新插件：<code>&lt;prefix&gt; + U</code></li><li>卸载插件: <code>&lt;prefix&gt; + alt + u</code></li></ul><h3 id="恢复会话插件" tabindex="-1"><a class="header-anchor" href="#恢复会话插件" aria-hidden="true">#</a> 恢复会话插件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> @plugin <span class="token string">&#39;tmux-plugins/tmux-resurrect&#39;</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> @plugin <span class="token string">&#39;tmux-plugins/tmux-continuum&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>tmux-resurrect</code></li></ul>`,25),m={href:"https://github.com/tmux-plugins/tmux-resurrect",target:"_blank",rel:"noopener noreferrer"},v=s("p",null,[n("保存会话："),s("code",null,"prefix + Ctrl-s"),s("br"),n(" 恢复会话："),s("code",null,"prefix + Ctrl-r")],-1),b=s("ul",null,[s("li",null,[s("code",null,"tmux-continuum")])],-1),k={href:"https://github.com/tmux-plugins/tmux-continuum",target:"_blank",rel:"noopener noreferrer"},g=a(`<h1 id="自用配置文件" tabindex="-1"><a class="header-anchor" href="#自用配置文件" aria-hidden="true">#</a> 自用配置文件</h1><p>最后奉上自用的配置文件，供大家参考。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Improve colors</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> default-terminal <span class="token string">&#39;screen-256color&#39;</span>

<span class="token comment"># Set scrollback buffer to 10000</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> history-limit <span class="token number">10000</span>

<span class="token comment"># Customize the status line</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> status-fg  green
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> status-bg  black

<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> mouse on

unbind <span class="token string">&#39;&quot;&#39;</span>
<span class="token builtin class-name">bind</span> - splitw <span class="token parameter variable">-v</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;#{pane_current_path}&#39;</span> <span class="token comment"># 垂直方向新增面板，默认进入当前目录</span>
unbind %
<span class="token builtin class-name">bind</span> <span class="token operator">|</span> splitw <span class="token parameter variable">-h</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;#{pane_current_path}&#39;</span> <span class="token comment"># 水平方向新增面板，默认进入当前目录</span>

<span class="token comment"># 绑定hjkl键为面板切换的上下左右键</span>
<span class="token builtin class-name">bind</span> <span class="token parameter variable">-r</span> k select-pane <span class="token parameter variable">-U</span> <span class="token comment"># 绑定k为↑</span>
<span class="token builtin class-name">bind</span> <span class="token parameter variable">-r</span> j select-pane <span class="token parameter variable">-D</span> <span class="token comment"># 绑定j为↓</span>
<span class="token builtin class-name">bind</span> <span class="token parameter variable">-r</span> h select-pane <span class="token parameter variable">-L</span> <span class="token comment"># 绑定h为←</span>
<span class="token builtin class-name">bind</span> <span class="token parameter variable">-r</span> l select-pane <span class="token parameter variable">-R</span> <span class="token comment"># 绑定l为→</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> prefix C-a <span class="token comment">#</span>
unbind C-b <span class="token comment"># C-b即Ctrl+b键，unbind意味着解除绑定</span>
<span class="token builtin class-name">bind</span> C-a send-prefix <span class="token comment"># 绑定Ctrl+a为新的指令前缀</span>

setw <span class="token parameter variable">-g</span> mode-keys <span class="token function">vi</span>

<span class="token comment"># ------------------tpm------------------------</span>
<span class="token comment"># List of plugins</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> @plugin <span class="token string">&#39;tmux-plugins/tpm&#39;</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> @plugin <span class="token string">&#39;tmux-plugins/tmux-sensible&#39;</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> @plugin <span class="token string">&#39;tmux-plugins/tmux-resurrect&#39;</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> @plugin <span class="token string">&#39;tmux-plugins/tmux-continuum&#39;</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-g</span> @continuum-restore <span class="token string">&#39;on&#39;</span>

<span class="token comment"># Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)</span>
run <span class="token string">&#39;~/.tmux/plugins/tpm/tpm&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(x,f){const e=c("ExternalLinkIcon");return t(),p("div",null,[d,r(" more "),u,s("p",null,[n("github: "),s("a",m,[n("https://github.com/tmux-plugins/tmux-resurrect"),l(e)])]),v,b,s("p",null,[n("github: "),s("a",k,[n("https://github.com/tmux-plugins/tmux-continuum"),l(e)])]),g])}const w=i(o,[["render",h],["__file","终端复用工具—Tmux安装与使用教程.html.vue"]]);export{w as default};
