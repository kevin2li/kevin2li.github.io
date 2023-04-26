import{_ as i,W as l,X as t,$ as s,a0 as n,a1 as o,Y as e,D as c}from"./framework-8f7a7057.js";const d={},r=e(`<h2 id="用户-组-管理" tabindex="-1"><a class="header-anchor" href="#用户-组-管理" aria-hidden="true">#</a> 用户(组)管理</h2><ul><li><code>sudo</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Run a command as the superuser:</span>
<span class="token function">sudo</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>less /var/log/syslog<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># Edit a file as the superuser with your default editor:</span>
<span class="token function">sudo</span> <span class="token parameter variable">--edit</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>/etc/fstab<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># Run a command as another user and/or group:</span>
<span class="token function">sudo</span> <span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token parameter variable">--group</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>group<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>id -a<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># Repeat the last command prefixed with sudo (only in bash, zsh, etc.):</span>
<span class="token function">sudo</span> <span class="token operator">!</span><span class="token operator">!</span>

<span class="token comment"># Launch the default shell with superuser privileges and run login-specific files (.profile, .bash_profile, etc.):</span>
<span class="token function">sudo</span> <span class="token parameter variable">--login</span>

<span class="token comment"># Launch the default shell with superuser privileges without changing the environment:</span>
<span class="token function">sudo</span> <span class="token parameter variable">--shell</span>

<span class="token comment"># Launch the default shell as the specified user, loading the user&#39;s environment and reading login-specific files (.profile, .bash_profile, etc.):</span>
<span class="token function">sudo</span> <span class="token parameter variable">--login</span> <span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># List the allowed (and forbidden) commands for the invoking user:</span>
<span class="token function">sudo</span> <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p title="配置执行特权命令免输入密码">:::info</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">whoami</span><span class="token variable">\`</span></span> ALL=(ALL) NOPASSWD:ALL&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token string">&quot;/etc/sudoers.d/dont-prompt-<span class="token environment constant">$USER</span>-for-sudo-password&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),u={href:"https://zhuanlan.zhihu.com/p/531767015",target:"_blank",rel:"noopener noreferrer"},p=e(`<ul><li><code>passwd</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Change the password of the current user interactively:</span>
<span class="token function">passwd</span>

<span class="token comment"># Change the password of a specific user:</span>
<span class="token function">passwd</span> username

<span class="token comment"># Get the current status of the user:</span>
<span class="token function">passwd</span> <span class="token parameter variable">-S</span>

<span class="token comment"># Make the password of the account blank (it will set the named account passwordless):</span>
<span class="token function">passwd</span> <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>su</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Switch to superuser (requires the root password):</span>
<span class="token function">su</span>

<span class="token comment"># Switch to a given user (requires the user&#39;s password):</span>
<span class="token function">su</span> username

<span class="token comment"># Switch to a given user and simulate a full login shell:</span>
<span class="token function">su</span> - username

<span class="token comment"># Execute a command as another user:</span>
<span class="token function">su</span> - username <span class="token parameter variable">-c</span> <span class="token string">&quot;command&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>whoami</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display currently logged username:</span>
<span class="token function">whoami</span>

<span class="token comment"># Display the username after a change in the user ID:</span>
<span class="token function">sudo</span> <span class="token function">whoami</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>useradd</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Create a new user:</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> username

<span class="token comment"># Create a new user with the specified user id:</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">--uid</span> <span class="token function">id</span> username

<span class="token comment"># Create a new user with the specified shell:</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">--shell</span> path/to/shell username

<span class="token comment"># Create a new user belonging to additional groups (mind the lack of whitespace):</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">--groups</span> group1,group2,<span class="token punctuation">..</span>. username

<span class="token comment"># Create a new user with the default home directory:</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> --create-home username

<span class="token comment"># Create a new user with the home directory filled by template directory files:</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">--skel</span> path/to/template_directory --create-home username

<span class="token comment"># Create a new system user without the home directory:</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">--system</span> username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>userdel</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Remove a user:</span>
<span class="token function">sudo</span> <span class="token function">userdel</span> username

<span class="token comment"># Remove a user in other root directory:</span>
<span class="token function">sudo</span> <span class="token function">userdel</span> <span class="token parameter variable">--root</span> path/to/other/root username

<span class="token comment"># Remove a user along with the home directory and mail spool:</span>
<span class="token function">sudo</span> <span class="token function">userdel</span> <span class="token parameter variable">--remove</span> username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>adduser</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Create a new user with a default home directory and prompt the user to set a password:</span>
adduser username

<span class="token comment"># Create a new user without a home directory:</span>
adduser --no-create-home username

<span class="token comment"># Create a new user with a home directory at the specified path:</span>
adduser <span class="token parameter variable">--home</span> path/to/home username

<span class="token comment"># Create a new user with the specified shell set as the login shell:</span>
adduser <span class="token parameter variable">--shell</span> path/to/shell username

<span class="token comment"># Create a new user belonging to the specified group:</span>
adduser <span class="token parameter variable">--ingroup</span> group username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>deluser</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Remove a user:</span>
<span class="token function">sudo</span> deluser username

<span class="token comment"># Remove a user and their home directory:</span>
<span class="token function">sudo</span> deluser --remove-home username

<span class="token comment"># Remove a user and their home, but backup their files into a \`.tar.gz\` file in the specified directory:</span>
<span class="token function">sudo</span> deluser --backup-to path/to/backup_directory --remove-home username

<span class="token comment"># Remove a user, and all files owned by them:</span>
<span class="token function">sudo</span> deluser --remove-all-files username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>groupadd</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Create a new group:</span>
<span class="token function">sudo</span> <span class="token function">groupadd</span> group_name

<span class="token comment"># Create a new system group:</span>
<span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token parameter variable">--system</span> group_name

<span class="token comment"># Create a new group with the specific groupid:</span>
<span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token parameter variable">--gid</span> <span class="token function">id</span> group_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>groupdel</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Delete an existing group:</span>
<span class="token function">sudo</span> <span class="token function">groupdel</span> group_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>w</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display information about all users who are currently logged in:</span>
w

<span class="token comment"># Display information about a specific user:</span>
w username

<span class="token comment"># Display information without including the header:</span>
w --no-header

<span class="token comment"># Display information without including the login, JCPU and PCPU columns:</span>
w <span class="token parameter variable">--short</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function m(v,b){const a=c("ExternalLinkIcon");return l(),t("div",null,[r,s("p",null,[n("参考："),s("a",u,[n("https://zhuanlan.zhihu.com/p/531767015"),o(a)]),n(" :::")]),p])}const k=i(d,[["render",m],["__file","user.html.vue"]]);export{k as default};
