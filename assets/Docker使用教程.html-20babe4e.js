import{_ as i,M as c,p as l,q as o,Q as t,R as n,t as s,N as d,a1 as a}from"./framework-5866ffd3.js";const r={},p=a('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Docker是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。</p><p>Docker的核心是Docker引擎，它是一个轻量级的容器化技术，可以在Linux、Windows和Mac上运行。Docker引擎可以将应用程序及其依赖项打包到一个可移植的容器中，从而实现快速部署、可移植性和可伸缩性。Docker引擎还提供了一组API，可以用于管理和监视容器。</p><p><strong>Docker镜像生命周期：</strong><img src="https://minio.kevin2li.top/image-bed/vanblog/img/55f78e2df8a5e9d5f1044eab3792e4ef.640.jpg" alt="640.jpg"></p><p>官网：https://www.docker.com/<br> engine文档：https://docs.docker.com/engine/<br> Dockerfile文档： https://docs.docker.com/engine/reference/builder/<br> compose-file文档：https://docs.docker.com/compose/compose-file/05-services/</p>',5),v=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),m=n("br",null,null,-1),u={href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载旧版本</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc

<span class="token comment"># 安装相关依赖包</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> ca-certificates <span class="token function">curl</span> gnupg lsb-release

<span class="token comment"># 添加GPG key</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-m</span> 0755 <span class="token parameter variable">-p</span> /etc/apt/keyrings
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.gpg

<span class="token comment"># 设置repository</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
  <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null

<span class="token comment"># 安装</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="镜像管理" tabindex="-1"><a class="header-anchor" href="#镜像管理" aria-hidden="true">#</a> 镜像管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 构建镜像(位于Dockerfile目录下)</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> my/image <span class="token builtin class-name">.</span>

<span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull nginx

<span class="token comment"># 上传镜像</span>
<span class="token function">docker</span> push myimage:1.0

<span class="token comment"># 删除镜像</span>
<span class="token function">docker</span> rmi nginx

<span class="token comment"># 列出镜像</span>
<span class="token function">docker</span> images

<span class="token comment"># 给镜像打标签(参数1为镜像，参数2为新标签名)</span>
<span class="token function">docker</span> tag ubuntu ubuntu:18.04

<span class="token comment"># 导出镜像</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> nginx.tar nginx

<span class="token comment"># 导入镜像</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> nginx.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器管理" tabindex="-1"><a class="header-anchor" href="#容器管理" aria-hidden="true">#</a> 容器管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> /data:/data <span class="token parameter variable">-e</span> <span class="token assign-left variable">PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">--network</span> mynet nginx

<span class="token comment"># 停止容器</span>
<span class="token function">docker</span> stop nginx

<span class="token comment"># 启动停止后的容器</span>
<span class="token function">docker</span> start nginx

<span class="token comment"># 删除容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> nginx

<span class="token comment"># 查看当前运行容器</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># 查看所有容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

<span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> nginx /bin/bash

<span class="token comment"># 宿主机与容器文件移动</span>
<span class="token function">docker</span> <span class="token function">cp</span> /home/user/a.txt nginx:/data/

<span class="token comment"># 提交容器为镜像</span>
<span class="token function">docker</span> commit nginx

<span class="token comment"># 查看容器信息</span>
<span class="token function">docker</span> inspect nginx

<span class="token comment"># 查看容器日志</span>
<span class="token function">docker</span> logs nginx

<span class="token comment"># 查看所有运行容器状态</span>
<span class="token function">docker</span> stats

<span class="token comment"># 查看容器内进程状态</span>
<span class="token function">docker</span> <span class="token function">top</span> nginx

<span class="token comment"># 查看容器映射端口</span>
<span class="token function">docker</span> port nginx

<span class="token comment"># 容器导出</span>
<span class="token function">docker</span> <span class="token builtin class-name">export</span> <span class="token parameter variable">-o</span> nginx.tar nginx

<span class="token comment"># 容器导入</span>
<span class="token function">docker</span> <span class="token function">import</span> nginx.tar nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络管理" tabindex="-1"><a class="header-anchor" href="#网络管理" aria-hidden="true">#</a> 网络管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建网络</span>
<span class="token function">docker</span> network <span class="token parameter variable">-d</span> bridge mynet

<span class="token comment"># 列出网络</span>
<span class="token function">docker</span> network <span class="token function">ls</span>

<span class="token comment"># 删除网络</span>
<span class="token function">docker</span> network <span class="token function">rm</span> mynet

<span class="token comment"># 将容器连接至网络</span>
<span class="token function">docker</span> network connect mynet nginx

<span class="token comment"># 将容器断开网络</span>
<span class="token function">docker</span> network disconnect mynet nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据卷管理" tabindex="-1"><a class="header-anchor" href="#数据卷管理" aria-hidden="true">#</a> 数据卷管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建数据卷</span>
<span class="token function">docker</span> volume create myvol

<span class="token comment"># 列出数据卷</span>
<span class="token function">docker</span> volume <span class="token function">ls</span>

<span class="token comment"># 查看数据卷</span>
<span class="token function">docker</span> volume inspect myvol

<span class="token comment"># 删除数据卷</span>
<span class="token function">docker</span> volume <span class="token function">rm</span> myvol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="镜像加速" tabindex="-1"><a class="header-anchor" href="#镜像加速" aria-hidden="true">#</a> 镜像加速</h3><p>参考： https://blog.kevin2li.top/post/60</p>`,13);function b(h,f){const e=c("ExternalLinkIcon");return l(),o("div",null,[p,t(" more "),v,n("ul",null,[n("li",null,[s("Ubuntu"),m,s(" 参考："),n("a",u,[s("Install Docker Engine on Ubuntu"),d(e)])])]),k])}const x=i(r,[["render",b],["__file","Docker使用教程.html.vue"]]);export{x as default};
