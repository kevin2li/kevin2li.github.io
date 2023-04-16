import{_ as s,W as e,X as a,Y as i,a1 as n}from"./framework-f38b131a.js";const c={},l=n(`<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><p>crontab命令是Unix和Linux用于设置周期性被执行的指令。该命令从标准输入设备读取指令，并将其存放于“crontab”文件中，以供之后读取和执行。crontab命令常见于 Unix 和 类Unix 的操作系统之中。通常，crontab储存的指令被守护进程激活， crond常常在后台运行，每一分钟检查是否有预定的作业需要执行。</p><p>该命令依赖于<code>cron</code>，可通过下面命令安装和启用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">cron</span>

<span class="token comment"># 启动</span>
systemctl start <span class="token function">cron</span>

<span class="token comment"># 查看状态</span>
systemctl status <span class="token function">cron</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=n(`<h1 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前用户定时任务</span>
<span class="token function">crontab</span> <span class="token parameter variable">-l</span>

<span class="token comment"># 指定用户查看</span>
<span class="token function">crontab</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-l</span>

<span class="token comment"># 编辑当前用户定时任务</span>
<span class="token function">crontab</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 删除当前用户的定时任务</span>
<span class="token function">crontab</span> <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Edit this file to introduce tasks to be run by cron.</span>
<span class="token comment">#</span>
<span class="token comment"># Each task to run has to be defined through a single line</span>
<span class="token comment"># indicating with different fields when the task will be run</span>
<span class="token comment"># and what command to run for the task</span>
<span class="token comment">#</span>
<span class="token comment"># To define the time you can provide concrete values for</span>
<span class="token comment"># minute (m), hour (h), day of month (dom), month (mon),</span>
<span class="token comment"># and day of week (dow) or use &#39;*&#39; in these fields (for &#39;any&#39;).</span>
<span class="token comment">#</span>
<span class="token comment"># Notice that tasks will be started based on the cron&#39;s system</span>
<span class="token comment"># daemon&#39;s notion of time and timezones.</span>
<span class="token comment">#</span>
<span class="token comment"># Output of the crontab jobs (including errors) is sent through</span>
<span class="token comment"># email to the user the crontab file belongs to (unless redirected).</span>
<span class="token comment">#</span>
<span class="token comment"># For example, you can run a backup of all your user accounts</span>
<span class="token comment"># at 5 a.m every week with:</span>
<span class="token comment"># 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/</span>
<span class="token comment">#</span>
<span class="token comment"># For more information see the manual pages of crontab(5) and cron(8)</span>
<span class="token comment">#</span>
<span class="token comment"># m h  dom mon dow   command</span>
<span class="token number">5</span> * * * *  ddns <span class="token parameter variable">-c</span> /home/likai/ddns/config.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5个*分别表示：<code>minute,hour,day,month,weekday</code></p><h1 id="加入日志记录" tabindex="-1"><a class="header-anchor" href="#加入日志记录" aria-hidden="true">#</a> 加入日志记录</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行下面命令后找到包含cron的行，就前面的#去掉</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/rsyslog.d/50-default.conf

<span class="token comment"># 重启rsyslog</span>
<span class="token function">sudo</span> systemctl restart rsyslog

<span class="token comment"># 日志路径</span>
<span class="token function">sudo</span> <span class="token function">less</span> /var/log/cron.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function o(d,r){return e(),a("div",null,[l,i(" more "),t])}const p=s(c,[["render",o],["__file","Linux设置定时任务.html.vue"]]);export{p as default};
