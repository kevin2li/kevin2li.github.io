import{_ as n,W as s,X as a,Z as t}from"./framework-805da640.js";const p={},e=t(`<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2><p>上传文件到Minio对象存储服务</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> minio <span class="token keyword">import</span> Minio
<span class="token keyword">from</span> minio<span class="token punctuation">.</span>error <span class="token keyword">import</span> S3Error
<span class="token keyword">import</span> traceback

<span class="token comment"># 设置MinIO服务器信息</span>
minio_client <span class="token operator">=</span> Minio<span class="token punctuation">(</span>
    <span class="token string">&quot;server_ip:port&quot;</span><span class="token punctuation">,</span>
    access_key<span class="token operator">=</span><span class="token string">&quot;xx&quot;</span><span class="token punctuation">,</span>
    secret_key<span class="token operator">=</span><span class="token string">&quot;xx&quot;</span><span class="token punctuation">,</span>
    secure<span class="token operator">=</span><span class="token boolean">False</span>
<span class="token punctuation">)</span>

<span class="token comment"># 上传文件到存储桶</span>
<span class="token keyword">def</span> <span class="token function">upload_file</span><span class="token punctuation">(</span>local_path<span class="token punctuation">,</span> bucket_name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token operator">=</span><span class="token string">&quot;image-bed&quot;</span><span class="token punctuation">,</span> <span class="token builtin">dir</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> Path<span class="token punctuation">(</span>local_path<span class="token punctuation">)</span>
    minio_file <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">dir</span><span class="token punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token punctuation">{</span>p<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        client<span class="token punctuation">.</span>fput_object<span class="token punctuation">(</span>bucket_name<span class="token punctuation">,</span> minio_file<span class="token punctuation">,</span> local_path<span class="token punctuation">)</span>
    <span class="token keyword">except</span> S3Error <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        traceback<span class="token punctuation">.</span>print_exc<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 列出存储桶文件</span>
objects <span class="token operator">=</span> client<span class="token punctuation">.</span>list_objects<span class="token punctuation">(</span><span class="token string">&#39;image-bed&#39;</span><span class="token punctuation">,</span> prefix<span class="token operator">=</span><span class="token string">&quot;vanblog/img/&quot;</span><span class="token punctuation">,</span> recursive<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
objs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> obj <span class="token keyword">in</span> objects<span class="token punctuation">:</span>
    obj_name <span class="token operator">=</span> Path<span class="token punctuation">(</span>obj<span class="token punctuation">.</span>object_name<span class="token punctuation">)</span>
    objs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>obj_name<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>objs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","minio.html.vue"]]);export{r as default};
