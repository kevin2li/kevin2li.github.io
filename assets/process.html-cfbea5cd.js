import{_ as n,W as s,X as a,a1 as e}from"./framework-97524b1f.js";const i={},l=e(`<h2 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理" aria-hidden="true">#</a> 进程管理</h2><ul><li><code>ps</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List all running processes:</span>
<span class="token function">ps</span> aux

<span class="token comment"># List all running processes including the full command string:</span>
<span class="token function">ps</span> auxww

<span class="token comment"># Search for a process that matches a string:</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> string

<span class="token comment"># List all processes of the current user in extra full format:</span>
<span class="token function">ps</span> <span class="token parameter variable">--user</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span> <span class="token parameter variable">-F</span>

<span class="token comment"># List all processes of the current user as a tree:</span>
<span class="token function">ps</span> <span class="token parameter variable">--user</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span> f

<span class="token comment"># Get the parent PID of a process:</span>
<span class="token function">ps</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">ppid</span><span class="token operator">=</span> <span class="token parameter variable">-p</span> pid

<span class="token comment"># Sort processes by memory consumption:</span>
<span class="token function">ps</span> <span class="token parameter variable">--sort</span> size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>top</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Start top:</span>
<span class="token function">top</span>

<span class="token comment"># Do not show any idle or zombie processes:</span>
<span class="token function">top</span> <span class="token parameter variable">-i</span>

<span class="token comment"># Show only processes owned by given user:</span>
<span class="token function">top</span> <span class="token parameter variable">-u</span> username

<span class="token comment"># Sort processes by a field:</span>
<span class="token function">top</span> <span class="token parameter variable">-o</span> field_name

<span class="token comment"># Show the individual threads of a given process:</span>
<span class="token function">top</span> <span class="token parameter variable">-Hp</span> process_id

<span class="token comment"># Show only the processes with the given PID(s), passed as a comma-separated list. (Normally you wouldn&#39;t know PIDs off hand. This example picks the PIDs from the process name):</span>
<span class="token function">top</span> <span class="token parameter variable">-p</span> <span class="token variable"><span class="token variable">$(</span>pgrep <span class="token parameter variable">-d</span> <span class="token string">&#39;,&#39;</span> process_name<span class="token variable">)</span></span>

<span class="token comment"># Get help about interactive commands:</span>
?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>htop</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Start htop:</span>
<span class="token function">htop</span>

<span class="token comment"># Start htop displaying processes owned by a specific user:</span>
<span class="token function">htop</span> <span class="token parameter variable">--user</span> username

<span class="token comment"># Sort processes by a specified \`sort_item\` (use \`htop --sort help\` for available options):</span>
<span class="token function">htop</span> <span class="token parameter variable">--sort</span> sort_item

<span class="token comment"># See interactive commands while running htop:</span>
?

<span class="token comment"># Switch to a different tab:</span>
tab

<span class="token comment"># Display help:</span>
<span class="token function">htop</span> <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>kill</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Terminate a program using the default SIGTERM (terminate) signal:</span>
<span class="token function">kill</span> process_id

<span class="token comment"># List available signal names (to be used without the \`SIG\` prefix):</span>
<span class="token function">kill</span> <span class="token parameter variable">-l</span>

<span class="token comment"># Terminate a background job:</span>
<span class="token function">kill</span> %job_id

<span class="token comment"># Terminate a program using the SIGHUP (hang up) signal. Many daemons will reload instead of terminating:</span>
<span class="token function">kill</span> -1<span class="token operator">|</span>HUP process_id

<span class="token comment"># Terminate a program using the SIGINT (interrupt) signal. This is typically initiated by the user pressing \`Ctrl + C\`:</span>
<span class="token function">kill</span> -2<span class="token operator">|</span>INT process_id

<span class="token comment"># Signal the operating system to immediately terminate a program (which gets no chance to capture the signal):</span>
<span class="token function">kill</span> -9<span class="token operator">|</span>KILL process_id

<span class="token comment"># Signal the operating system to pause a program until a SIGCONT (&quot;continue&quot;) signal is received:</span>
<span class="token function">kill</span> -17<span class="token operator">|</span>STOP process_id

<span class="token comment"># Send a \`SIGUSR1\` signal to all processes with the given GID (group id):</span>
<span class="token function">kill</span> <span class="token parameter variable">-SIGUSR1</span> <span class="token parameter variable">-group_id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>pkill</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Kill all processes which match:</span>
<span class="token function">pkill</span> <span class="token string">&quot;process_name&quot;</span>

<span class="token comment"># Kill all processes which match their full command instead of just the process name:</span>
<span class="token function">pkill</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;command_name&quot;</span>

<span class="token comment"># Force kill matching processes (can&#39;t be blocked):</span>
<span class="token function">pkill</span> <span class="token parameter variable">-9</span> <span class="token string">&quot;process_name&quot;</span>

<span class="token comment"># Send SIGUSR1 signal to processes which match:</span>
<span class="token function">pkill</span> <span class="token parameter variable">-USR1</span> <span class="token string">&quot;process_name&quot;</span>

<span class="token comment"># Kill the main \`firefox\` process to close the browser:</span>
<span class="token function">pkill</span> <span class="token parameter variable">--oldest</span> <span class="token string">&quot;firefox&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>fg</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Bring most recently suspended or running background job to foreground:</span>
<span class="token function">fg</span>

<span class="token comment"># Bring a specific job to foreground:</span>
<span class="token function">fg</span> %job_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>bg</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Resume the most recently suspended job and run it in the background:</span>
<span class="token function">bg</span>

<span class="token comment"># Resume a specific job (use \`jobs -l\` to get its ID) and run it in the background:</span>
<span class="token function">bg</span> %job_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>nohup</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Run a process that can live beyond the terminal:</span>
<span class="token function">nohup</span> <span class="token builtin class-name">command</span> argument1 argument2 <span class="token punctuation">..</span>.

<span class="token comment"># Launch \`nohup\` in background mode:</span>
<span class="token function">nohup</span> <span class="token builtin class-name">command</span> argument1 argument2 <span class="token punctuation">..</span>. <span class="token operator">&amp;</span>

<span class="token comment"># Run a shell script that can live beyond the terminal:</span>
<span class="token function">nohup</span> path/to/script.sh <span class="token operator">&amp;</span>

<span class="token comment"># Run a process and write the output to a specific file:</span>
<span class="token function">nohup</span> <span class="token builtin class-name">command</span> argument1 argument2 <span class="token punctuation">..</span>. <span class="token operator">&gt;</span> path/to/output_file <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>jobs</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># View jobs spawned by the current shell:</span>
<span class="token function">jobs</span>

<span class="token comment"># List jobs and their process IDs:</span>
<span class="token function">jobs</span> <span class="token parameter variable">-l</span>

<span class="token comment"># Display information about jobs with changed status:</span>
<span class="token function">jobs</span> <span class="token parameter variable">-n</span>

<span class="token comment"># Display process ID of process group leader:</span>
<span class="token function">jobs</span> <span class="token parameter variable">-p</span>

<span class="token comment"># Display running processes:</span>
<span class="token function">jobs</span> <span class="token parameter variable">-r</span>

<span class="token comment"># Display stopped processes:</span>
<span class="token function">jobs</span> <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),c=[l];function t(o,p){return s(),a("div",null,c)}const d=n(i,[["render",t],["__file","process.html.vue"]]);export{d as default};
