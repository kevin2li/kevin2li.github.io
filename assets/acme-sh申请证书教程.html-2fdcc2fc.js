import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2><ul><li><p>创建dns密钥<br> https://console.dnspod.cn/account/token/token <img src="https://kevin2li-storage.oss-cn-nanjing.aliyuncs.com/image/2022-10-10-15-54-57.png" alt=""></p></li><li><p>acme设置</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装acme</span>
<span class="token function">curl</span>  https://get.acme.sh <span class="token operator">|</span> <span class="token function">sh</span> 
<span class="token builtin class-name">cd</span> ~/.acme.sh

<span class="token comment"># 注册账号</span>
./acme.sh --register-account <span class="token parameter variable">-m</span> kevin2li@qq.com

<span class="token comment"># 配置密钥</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DP_Id</span><span class="token operator">=</span><span class="token string">&quot;id&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DP_Key</span><span class="token operator">=</span><span class="token string">&quot;token&quot;</span>

<span class="token comment"># 生成证书</span>
./acme.sh <span class="token parameter variable">--issue</span> <span class="token parameter variable">--dns</span> dns_dp <span class="token parameter variable">-d</span> kevin2li.top <span class="token parameter variable">-d</span> <span class="token string">&quot;*.kevin2li.top&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装证书 <img src="https://kevin2li-storage.oss-cn-nanjing.aliyuncs.com/image/2022-10-10-15-58-07.png" alt=""> fullchain.cer为证书文件，kevin2li.top.key为密钥文件,使用nginx配置ssl即可</li></ul><p>建议：不要直接使用上面的文件，可以将其复制到其他目录再使用，如nginx下可以复制到<code>/etc/nginx/ssl/</code>目录下</p><p><strong>nginx:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拷贝证书</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/nginx/ssl/kevin2li.top
<span class="token function">cp</span> ~/.acme.sh/kevin2li.top/fullchain.cer ~/.acme.sh/kevin2li.top/kevin2li.top.key /etc/nginx/ssl/kevin2li.top/

<span class="token comment"># 安装证书</span>
acme.sh <span class="token parameter variable">--installcert</span> <span class="token parameter variable">-d</span> kevin2li.top --key-file /etc/nginx/ssl/kevin2li.top.key --fullchain-file /etc/nginx/ssl/kevin2li.top.fullchain.cer <span class="token parameter variable">--reloadcmd</span>  <span class="token string">&quot;service nginx force-reload&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装成功后会自动注册一个定时任务来检测证书并适时更新证书。 <img src="https://minio.kevin2li.top/image-bed/202305171340159.png" alt=""></p>`,8),t=[l];function c(p,o){return s(),a("div",null,t)}const d=n(i,[["render",c],["__file","acme-sh申请证书教程.html.vue"]]);export{d as default};
