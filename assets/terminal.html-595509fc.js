import{_ as s,W as a,X as e,a1 as t,a0 as n}from"./framework-407a3ac5.js";const i={},l=n(`<h2 id="终端管理" tabindex="-1"><a class="header-anchor" href="#终端管理" aria-hidden="true">#</a> 终端管理</h2><ul><li><code>echo</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Print a text message. Note: quotes are optional:</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World&quot;</span>

<span class="token comment"># Print a message with environment variables:</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;My path is <span class="token environment constant">$PATH</span>&quot;</span>

<span class="token comment"># Print a message without the trailing newline:</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Hello World&quot;</span>

<span class="token comment"># Append a message to the file:</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World&quot;</span> <span class="token operator">&gt;&gt;</span> file.txt

<span class="token comment"># Enable interpretation of backslash escapes (special characters):</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Column 1<span class="token entity" title="\\t">\\t</span>Column 2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=n(`<ul><li><code>clear</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Clear the screen (equivalent to pressing Control-L in Bash shell):</span>
<span class="token function">clear</span>

<span class="token comment"># Clear the screen but keep the terminal&#39;s scrollback buffer:</span>
<span class="token function">clear</span> <span class="token parameter variable">-x</span>

<span class="token comment"># Indicate the type of terminal to clean (defaults to the value of the environment variable \`TERM\`):</span>
<span class="token function">clear</span> <span class="token parameter variable">-T</span> type_of_terminal

<span class="token comment"># Show the version of \`ncurses\` used by \`clear\`:</span>
<span class="token function">clear</span> <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>reset</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Reinitialize the current terminal:</span>
reset

<span class="token comment"># Display the terminal type instead:</span>
reset <span class="token parameter variable">-q</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>history</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display the commands history list with line numbers:</span>
<span class="token function">history</span>

<span class="token comment"># Display the last 20 commands (in \`zsh\` it displays all commands starting from the 20th):</span>
<span class="token function">history</span> <span class="token number">20</span>

<span class="token comment"># Clear the commands history list (only for current \`bash\` shell):</span>
<span class="token function">history</span> <span class="token parameter variable">-c</span>

<span class="token comment"># Overwrite history file with history of current \`bash\` shell (often combined with \`history -c\` to purge history):</span>
<span class="token function">history</span> <span class="token parameter variable">-w</span>

<span class="token comment"># Delete the history entry at the specified offset:</span>
<span class="token function">history</span> <span class="token parameter variable">-d</span> offset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>tee</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Copy standard input to each file, and also to standard output:</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;example&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> path/to/file

<span class="token comment"># Append to the given files, do not overwrite:</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;example&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> path/to/file

<span class="token comment"># Print standard input to the terminal, and also pipe it into another program for further processing:</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;example&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> /dev/tty <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;[%s]&quot;</span>

<span class="token comment"># Create a directory called &quot;example&quot;, count the number of characters in &quot;example&quot; and write &quot;example&quot; to the terminal:</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;example&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token function">xargs</span> <span class="token function">mkdir</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token function">wc</span> -c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function c(r,p){return a(),e("div",null,[l,t(" more "),o])}const u=s(i,[["render",c],["__file","terminal.html.vue"]]);export{u as default};
