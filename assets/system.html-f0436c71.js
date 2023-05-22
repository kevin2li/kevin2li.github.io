import{_ as n,p as s,q as e,a1 as a}from"./framework-5866ffd3.js";const i={},l=a(`<h2 id="系统管理" tabindex="-1"><a class="header-anchor" href="#系统管理" aria-hidden="true">#</a> 系统管理</h2><ul><li><code>reboot</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Reboot the system:</span>
<span class="token function">reboot</span>

<span class="token comment"># Power off the system (same as \`poweroff\`):</span>
<span class="token function">reboot</span> <span class="token parameter variable">--poweroff</span>

<span class="token comment"># Halt the system (same as \`halt\`):</span>
<span class="token function">reboot</span> <span class="token parameter variable">--halt</span>

<span class="token comment"># Reboot immediately without contacting the system manager:</span>
<span class="token function">reboot</span> <span class="token parameter variable">--force</span>

<span class="token comment"># Write the wtmp shutdown entry without rebooting the system:</span>
<span class="token function">reboot</span> --wtmp-only
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>shutdown</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Power off (halt) immediately:</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-h</span> now

<span class="token comment"># Reboot immediately:</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now

<span class="token comment"># Reboot in 5 minutes:</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> +5 <span class="token operator">&amp;</span>

<span class="token comment"># Shutdown at 1:00 pm (Uses 24h clock):</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-h</span> <span class="token number">13</span>:00

<span class="token comment"># Cancel a pending shutdown/reboot operation:</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>poweroff</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Power off the system:</span>
poweroff

<span class="token comment"># Halt the system (same as \`halt\`):</span>
poweroff <span class="token parameter variable">--halt</span>

<span class="token comment"># Reboot the system (same as \`reboot\`):</span>
poweroff <span class="token parameter variable">--reboot</span>

<span class="token comment"># Shut down immediately without contacting the system manager:</span>
poweroff <span class="token parameter variable">--force</span> <span class="token parameter variable">--force</span>

<span class="token comment"># Write the wtmp shutdown entry without shutting down the system:</span>
poweroff --wtmp-only
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>halt</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Halt the system:</span>
<span class="token function">halt</span>

<span class="token comment"># Power off the system (same as \`poweroff\`):</span>
<span class="token function">halt</span> <span class="token parameter variable">--poweroff</span>

<span class="token comment"># Reboot the system (same as \`reboot\`):</span>
<span class="token function">halt</span> <span class="token parameter variable">--reboot</span>

<span class="token comment"># Halt immediately without contacting the system manager:</span>
<span class="token function">halt</span> <span class="token parameter variable">--force</span> <span class="token parameter variable">--force</span>

<span class="token comment"># Write the wtmp shutdown entry without halting the system:</span>
<span class="token function">halt</span> --wtmp-only
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>uname</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Print all information:</span>
<span class="token function">uname</span> <span class="token parameter variable">--all</span>

<span class="token comment"># Print the current kernel name:</span>
<span class="token function">uname</span> --kernel-name

<span class="token comment"># Print the current network node host name:</span>
<span class="token function">uname</span> <span class="token parameter variable">--nodename</span>

<span class="token comment"># Print the current kernel release:</span>
<span class="token function">uname</span> --kernel-release

<span class="token comment"># Print the current kernel version:</span>
<span class="token function">uname</span> --kernel-version

<span class="token comment"># Print the current machine hardware name:</span>
<span class="token function">uname</span> <span class="token parameter variable">--machine</span>

<span class="token comment"># Print the current processor type:</span>
<span class="token function">uname</span> <span class="token parameter variable">--processor</span>

<span class="token comment"># Print the current operating system name:</span>
<span class="token function">uname</span> --operating-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>neofetch</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Return the default config, and create it if it&#39;s the first time the program runs:</span>
neofetch

<span class="token comment"># Trigger an info line from appearing in the output, where &#39;infoname&#39; is the function name in the config file, e.g. memory:</span>
neofetch --enable<span class="token operator">|</span>disable infoname

<span class="token comment"># Hide/Show OS architecture:</span>
neofetch <span class="token parameter variable">--os_arch</span> on<span class="token operator">|</span>off

<span class="token comment"># Enable/Disable CPU brand in output:</span>
neofetch <span class="token parameter variable">--cpu_brand</span> on<span class="token operator">|</span>off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>systemctl</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Show all running services:</span>
systemctl status

<span class="token comment"># List failed units:</span>
systemctl <span class="token parameter variable">--failed</span>

<span class="token comment"># Start/Stop/Restart/Reload a service:</span>
systemctl start<span class="token operator">|</span>stop<span class="token operator">|</span>restart<span class="token operator">|</span>reload unit

<span class="token comment"># Show the status of a unit:</span>
systemctl status unit

<span class="token comment"># Enable/Disable a unit to be started on bootup:</span>
systemctl <span class="token builtin class-name">enable</span><span class="token operator">|</span>disable unit

<span class="token comment"># Mask/Unmask a unit to prevent enablement and manual activation:</span>
systemctl mask<span class="token operator">|</span>unmask unit

<span class="token comment"># Reload systemd, scanning for new or changed units:</span>
systemctl daemon-reload

<span class="token comment"># Check if a unit is enabled:</span>
systemctl is-enabled unit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[l];function c(o,r){return s(),e("div",null,t)}const m=n(i,[["render",c],["__file","system.html.vue"]]);export{m as default};
