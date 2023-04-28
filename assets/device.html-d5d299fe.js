import{_ as e,W as i,X as a,a1 as n}from"./framework-97524b1f.js";const s={},l=n(`<h3 id="显卡管理" tabindex="-1"><a class="header-anchor" href="#显卡管理" aria-hidden="true">#</a> 显卡管理</h3><ul><li><code>nvidia-smi</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display information on all available GPUs and processes using them:</span>
nvidia-smi

<span class="token comment"># Display more detailed GPU information:</span>
nvidia-smi <span class="token parameter variable">--query</span>

<span class="token comment"># Monitor overall GPU usage with 1-second update interval:</span>
nvidia-smi dmon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>gpustat</code></li></ul><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/dc6fd11aa98f8b564e9957e19ef3f86f.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ul><li><code>nvtop</code></li></ul><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/0e94990aba0beefddd56429077e3c838.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>`,7),d=[l];function t(o,c){return i(),a("div",null,d)}const m=e(s,[["render",t],["__file","device.html.vue"]]);export{m as default};
