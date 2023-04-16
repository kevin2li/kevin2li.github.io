import{_ as i,W as l,X as t,Y as c,$ as n,a0 as s,Z as o,a1 as a,D as d}from"./framework-f38b131a.js";const r={},p=n("h1",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),v=n("p",null,"Git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。它是Linus Torvalds为了帮助管理Linux内核开发而开发的一个开放源码的版本控制软件。Git的作用就是对文件进行版本管理，方便在不同版本进行切换修改，类似文件分不同时间备份让后需要时找回其中一份代替，不过更方便使用。",-1),m=n("p",null,[s("Git文件流： "),n("img",{src:"https://blog.kevin2li.top/static/img/5ca15d0a60362cb3f0ad630d0615d394.image.png",alt:"image.png",loading:"lazy"})],-1),u=a(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><ul><li>Linux系统</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Ubuntu为例</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update 
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),b=n("br",null,null,-1),k={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},g=a(`<h1 id="使用教程" tabindex="-1"><a class="header-anchor" href="#使用教程" aria-hidden="true">#</a> 使用教程</h1><h2 id="配置管理" tabindex="-1"><a class="header-anchor" href="#配置管理" aria-hidden="true">#</a> 配置管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置用户名</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token assign-left variable">user.name</span><span class="token operator">=</span><span class="token string">&quot;kevin2li&quot;</span>

<span class="token comment"># 设置邮箱</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token assign-left variable">user.email</span><span class="token operator">=</span><span class="token string">&quot;kevin2li@qq.com&quot;</span>

<span class="token comment"># 设置初始化分支名称</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> init.defaultBranch main

<span class="token comment"># 设置命令别名</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.co checkout
<span class="token function">git</span> config  <span class="token parameter variable">--global</span> alias.br  branch

<span class="token comment"># 查看配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库管理" tabindex="-1"><a class="header-anchor" href="#仓库管理" aria-hidden="true">#</a> 仓库管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化仓库</span>
<span class="token function">git</span> init

<span class="token comment"># 克隆仓库(将myrepo仓库克隆到/path/to/folder文件夹中，不给参数2将克隆到当前目录)</span>
<span class="token function">git</span> clone https://github.com/username/myrepo.git /path/to/folder

<span class="token comment"># 查看远程仓库</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 添加远程仓库</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:Nyr/openvpn-install.git

<span class="token comment"># 删除远程仓库</span>
<span class="token function">git</span> remote remove origin

<span class="token comment"># 重命名远程仓库</span>
<span class="token function">git</span> remote <span class="token function">rename</span> origin origin-tencent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交管理" tabindex="-1"><a class="header-anchor" href="#提交管理" aria-hidden="true">#</a> 提交管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加文件</span>
<span class="token function">git</span> <span class="token function">add</span> a.txt

<span class="token comment"># 删除文件</span>
<span class="token function">git</span> <span class="token function">rm</span> a.txt

<span class="token comment"># 删除文件(暂存区删除)</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> a.txt

<span class="token comment"># 撤销文件更改</span>
<span class="token function">git</span> restore a.txt

<span class="token comment"># 创建提交</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;message&quot;</span> 

<span class="token comment"># 补充提交</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;message&quot;</span>

<span class="token comment"># 回退提交(reset): 不会产生新提交，适用于已经commit但是没有push的情形</span>
<span class="token function">git</span> reset <span class="token operator">&lt;</span>ID<span class="token operator">&gt;</span>

<span class="token comment"># 回退提交(revert): 会产生新提交</span>
<span class="token function">git</span> revert <span class="token operator">&lt;</span>ID<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">git reset回退的三种模式区别</p><figure><img src="https://blog.kevin2li.top/static/img/a4c1e10cc0f0ecc5fbdb1e8d69136988.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p><code>git reset</code> 有三种模式，分别是 <code>--soft</code>、<code>--mixed</code> 和 <code>--hard</code>。它们之间的区别如下：<br><code>--soft</code>：此模式只重置 HEAD 到所选提交。它基本上与 git checkout 相同，但不会创建分离的 HEAD 状态。<br><code>--mixed</code>：默认模式，此模式将 HEAD 重置为所选提交，同时在历史记录和索引中撤消更改。<br><code>--hard</code>：此模式将 HEAD 重置为所选提交，并在历史记录和索引中撤消更改，同时还将工作树重置为所选提交。</p></div><div class="hint-container tip"><p class="hint-container-title">git reset与git revert的区别</p><p><code>git reset</code>: 此命令用于通过删除所需提交后的所有更改来将分支的状态重置为先前状态。此命令更改提交历史记录。<br><code>git revert</code>：此命令用于通过创建新的还原提交并保留原始提交来重置到先前状态。此命令不更改提交历史记录。</p></div><h2 id="标签管理" tabindex="-1"><a class="header-anchor" href="#标签管理" aria-hidden="true">#</a> 标签管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置标签</span>
<span class="token function">git</span> tag v1.0 main

<span class="token comment"># 删除标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feature-xx
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> totallyNotMain o/main <span class="token comment">#跟踪远程分支</span>
<span class="token function">git</span> branch dev
<span class="token function">git</span> branch dev HEAD~3

<span class="token comment"># 删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> feature-xx

<span class="token comment"># 重命名分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main

<span class="token comment"># 设置远程分支追踪</span>
<span class="token function">git</span> branch <span class="token parameter variable">-u</span> origin/dev dev

<span class="token comment"># 切换分支</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
<span class="token function">git</span> switch <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># 推送分支</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
<span class="token function">git</span> push origin dev:main

<span class="token comment"># 打包分支</span>
<span class="token function">git</span> archive <span class="token parameter variable">-o</span> main.zip main

<span class="token comment"># 修改分支指向点</span>
<span class="token function">git</span> branch <span class="token parameter variable">-f</span> main HEAD^

<span class="token comment"># 合并分支(merge)</span>
<span class="token function">git</span> merge --no-ff dev

<span class="token comment"># 合并分支(rebase)</span>
<span class="token function">git</span> rebase main <span class="token comment"># 将当前分支以main分支为基合并</span>
<span class="token function">git</span> rebase main dev <span class="token comment"># 将dev分支以main分支为基合并</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运维管理" tabindex="-1"><a class="header-anchor" href="#运维管理" aria-hidden="true">#</a> 运维管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看git历史</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--decorate</span> <span class="token parameter variable">--graph</span>

<span class="token comment"># 查看完整git历史</span>
<span class="token function">git</span> reflog

<span class="token comment"># 查看文件修改</span>
<span class="token function">git</span> show main.py

<span class="token comment"># 查看当前状态</span>
<span class="token function">git</span> status

<span class="token comment"># 查看文件修改</span>
<span class="token function">git</span> <span class="token function">diff</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h2><ul><li>暂存修改：<code>git stash</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出stash的所有记录</span>
<span class="token function">git</span> stash list

<span class="token comment"># 保存当前未commit的代码</span>
<span class="token function">git</span> stash

<span class="token comment"># 应用最近一次的stash，随后删除该记录</span>
<span class="token function">git</span> stash pop

<span class="token comment"># 保存当前未commit的代码并添加备注</span>
<span class="token function">git</span> stash save <span class="token string">&quot;备注的内容&quot;</span>

<span class="token comment"># 删除stash的所有记录</span>
<span class="token function">git</span> stash <span class="token function">clear</span>

<span class="token comment"># 应用最近一次的stash</span>
<span class="token function">git</span> stash apply

<span class="token comment"># 删除最近的一次stash</span>
<span class="token function">git</span> stash drop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>整理提交顺序</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在当前位置应用所选的commit</span>
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>ID<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>ID<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token operator">&lt;</span>ID<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>

<span class="token comment"># 打开交互式窗口编辑顺序</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>ID<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function h(f,x){const e=d("ExternalLinkIcon");return l(),t("div",null,[p,v,m,c(" more "),u,n("ul",null,[n("li",null,[s("Windows系统"),b,s(" 可以从"),n("a",k,[s("Git官方网站"),o(e)]),s("下载Git for Windows，也可以安装GitHub Desktop，该安装程序包含图形化和命令行版本的Git")])]),g])}const D=i(r,[["render",h],["__file","Git使用教程.html.vue"]]);export{D as default};
