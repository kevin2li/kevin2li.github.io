import{_ as e,W as s,X as n,a1 as a}from"./framework-97524b1f.js";const l={},i=a(`<h2 id="日志管理" tabindex="-1"><a class="header-anchor" href="#日志管理" aria-hidden="true">#</a> 日志管理</h2><ul><li><code>journalctl</code><br><code>journalctl</code>是一种用于查看Systemd系统日志的命令行工具。它可以帮助你查找特定的日志数据或浏览整个日志文件，以便审查系统活动或故障。以下是一些journalctl的常用用法：</li></ul><ol><li>列出所有日志条目：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>journalctl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>根据服务名称列出所有与该服务相关的日志条目：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>journalctl -u service_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>根据日期和时间过滤日志词条。例如，列出12月3日之后的所有日志：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>journalctl --since &quot;2019-12-03&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>使用实时输出功能实时查看系统日志：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>journalctl -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>通过系统日志查找与特定进程相关的条目：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>journalctl _PID=process_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>列出指定进程名称的所有日志条目：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>journalctl _COMM=process_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>列出最近特定行数的日志：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>journalctl -n number_of_lines
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li>列出日志文件大小，磁盘使用量和剩余磁盘空间：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>journalctl --disk-usage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="9"><li>显示特定时间段内的内核消息：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>journalctl --dmesg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>last</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># View last logins, their duration and other information as read from \`/var/log/wtmp\`:</span>
last

<span class="token comment"># Specify how many of the last logins to show:</span>
last <span class="token parameter variable">-n</span> login_count

<span class="token comment"># Print the full date and time for entries and then display the hostname column last to prevent truncation:</span>
last <span class="token parameter variable">-F</span> <span class="token parameter variable">-a</span>

<span class="token comment"># View all logins by a specific user and show the IP address instead of the hostname:</span>
last username <span class="token parameter variable">-i</span>

<span class="token comment"># View all recorded reboots (i.e., the last logins of the pseudo user &quot;reboot&quot;):</span>
last <span class="token function">reboot</span>

<span class="token comment"># View all recorded shutdowns (i.e., the last logins of the pseudo user &quot;shutdown&quot;):</span>
last <span class="token function">shutdown</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>lastb</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Show a list of all last logged in users:</span>
<span class="token function">sudo</span> lastb

<span class="token comment"># Show a list of all last logged in users since a given time:</span>
<span class="token function">sudo</span> lastb <span class="token parameter variable">--since</span> YYYY-MM-DD

<span class="token comment"># Show a list of all last logged in users until a given time:</span>
<span class="token function">sudo</span> lastb <span class="token parameter variable">--until</span> YYYY-MM-DD

<span class="token comment"># Show a list of all logged in users at a specific time:</span>
<span class="token function">sudo</span> lastb <span class="token parameter variable">--present</span> hh:mm

<span class="token comment"># Show a list of all last logged in users and translate the IP into a hostname:</span>
<span class="token function">sudo</span> lastb <span class="token parameter variable">--dns</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>lastlog</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display the most recent login of all users:</span>
lastlog

<span class="token comment"># Display the lastlog record of the specified user:</span>
lastlog <span class="token parameter variable">--user</span> username

<span class="token comment"># Display records older than 7 days:</span>
lastlog <span class="token parameter variable">--before</span> <span class="token number">7</span>

<span class="token comment"># Display records more recent than 3 days:</span>
lastlog <span class="token parameter variable">-time</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>watch</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Monitor files in the current directory:</span>
<span class="token function">watch</span> <span class="token function">ls</span>

<span class="token comment"># Monitor disk space and highlight the changes:</span>
<span class="token function">watch</span> <span class="token parameter variable">-d</span> <span class="token function">df</span>

<span class="token comment"># Monitor &quot;node&quot; processes, refreshing every 3 seconds:</span>
<span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token string">&quot;ps aux | grep node&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),t=[i];function d(r,o){return s(),n("div",null,t)}const u=e(l,[["render",d],["__file","journal.html.vue"]]);export{u as default};
