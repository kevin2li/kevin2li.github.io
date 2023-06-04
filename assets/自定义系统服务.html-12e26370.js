import{_ as n,W as a,X as e,Y as t,Z as s}from"./framework-805da640.js";const l={},i=s(`<h1 id="常用服务管理命令" tabindex="-1"><a class="header-anchor" href="#常用服务管理命令" aria-hidden="true">#</a> 常用服务管理命令</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重新载入服务</span>
systemctl daemon-reload

<span class="token comment"># 查看服务状态</span>
systemctl status sshd

<span class="token comment"># 启动服务</span>
systemctl start sshd

<span class="token comment"># 停止服务</span>
systemctl stop sshd

<span class="token comment"># 重启服务</span>
systemctl restart sshd

<span class="token comment"># 开机自启</span>
systemctl <span class="token builtin class-name">enable</span> sshd

<span class="token comment"># 取消开机自启</span>
systemctl disable sshd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=s(`<h1 id="自定义服务示例" tabindex="-1"><a class="header-anchor" href="#自定义服务示例" aria-hidden="true">#</a> 自定义服务示例</h1><h2 id="frp客户端-frpc" tabindex="-1"><a class="header-anchor" href="#frp客户端-frpc" aria-hidden="true">#</a> Frp客户端(frpc)</h2><ol><li>编写服务文件</li></ol><p>位置：<code>/etc/systemd/system/frpc.service</code>，内容如下：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Unit</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Description</span><span class="token punctuation">=</span><span class="token value attr-value">frpc service</span>
<span class="token key attr-name">After</span><span class="token punctuation">=</span><span class="token value attr-value">network.service</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Service</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Type</span><span class="token punctuation">=</span><span class="token value attr-value">simple</span>
<span class="token key attr-name">User</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">Group</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">WorkingDirectory</span><span class="token punctuation">=</span><span class="token value attr-value">/root</span>
<span class="token key attr-name">ExecStart</span><span class="token punctuation">=</span><span class="token value attr-value">sh /home/kevin2li/frp_0.44.0_linux_amd64/frp_start.sh</span>
<span class="token key attr-name">PrivateTmp</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">Restart</span><span class="token punctuation">=</span><span class="token value attr-value">on-failure</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">WantedBy</span><span class="token punctuation">=</span><span class="token value attr-value">multi-user.target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>重新载入文件</li></ol><p><code>systemctl daemon-reload</code></p><ol start="3"><li>启动服务</li></ol><p><code>systemctl start frpc</code></p>`,9);function p(r,o){return a(),e("div",null,[i,t(" more "),c])}const u=n(l,[["render",p],["__file","自定义系统服务.html.vue"]]);export{u as default};
