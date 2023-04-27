import{_ as n,W as a,X as e,a0 as s}from"./framework-407a3ac5.js";const i={},l=s(`<h2 id="软件包管理" tabindex="-1"><a class="header-anchor" href="#软件包管理" aria-hidden="true">#</a> 软件包管理</h2><ul><li><code>apt</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Update the list of available packages and versions (it&#39;s recommended to run this before other \`apt\` commands):</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update

<span class="token comment"># Search for a given package:</span>
<span class="token function">apt</span> search package

<span class="token comment"># Show information for a package:</span>
<span class="token function">apt</span> show package

<span class="token comment"># Install a package, or update it to the latest available version:</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> package

<span class="token comment"># Remove a package (using \`purge\` instead also removes its configuration files):</span>
<span class="token function">sudo</span> <span class="token function">apt</span> remove package

<span class="token comment"># Upgrade all installed packages to their newest available versions:</span>
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade

<span class="token comment"># List all packages:</span>
<span class="token function">apt</span> list

<span class="token comment"># List installed packages:</span>
<span class="token function">apt</span> list <span class="token parameter variable">--installed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>apt-get</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Update the list of available packages and versions (it&#39;s recommended to run this before other \`apt-get\` commands):</span>
<span class="token function">apt-get</span> update

<span class="token comment"># Install a package, or update it to the latest available version:</span>
<span class="token function">apt-get</span> <span class="token function">install</span> package

<span class="token comment"># Remove a package:</span>
<span class="token function">apt-get</span> remove package

<span class="token comment"># Remove a package and its configuration files:</span>
<span class="token function">apt-get</span> purge package

<span class="token comment"># Upgrade all installed packages to their newest available versions:</span>
<span class="token function">apt-get</span> upgrade

<span class="token comment"># Clean the local repository# removing package files (\`.deb\`) from interrupted downloads that can no longer be downloaded:</span>
<span class="token function">apt-get</span> autoclean

<span class="token comment"># Remove all packages that are no longer needed:</span>
<span class="token function">apt-get</span> autoremove

<span class="token comment"># Upgrade installed packages (like \`upgrade\`), but remove obsolete packages and install additional packages to meet new dependencies:</span>
<span class="token function">apt-get</span> dist-upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>dpkg</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Install a package:</span>
dpkg <span class="token parameter variable">-i</span> path/to/file.deb

<span class="token comment"># Remove a package:</span>
dpkg <span class="token parameter variable">-r</span> package_name

<span class="token comment"># List installed packages:</span>
dpkg <span class="token parameter variable">-l</span> pattern

<span class="token comment"># List a package&#39;s contents:</span>
dpkg <span class="token parameter variable">-L</span> package_name

<span class="token comment"># List contents of a local package file:</span>
dpkg <span class="token parameter variable">-c</span> path/to/file.deb

<span class="token comment"># Find out which package owns a file:</span>
dpkg <span class="token parameter variable">-S</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>pacman</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Synchronize and update all packages:</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-Syu</span>

<span class="token comment"># Install a new package:</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> package_name

<span class="token comment"># Remove a package and its dependencies:</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-Rs</span> package_name

<span class="token comment"># Search the package database for a regular expression or keyword:</span>
pacman <span class="token parameter variable">-Ss</span> <span class="token string">&quot;search_pattern&quot;</span>

<span class="token comment"># List installed packages and versions:</span>
pacman <span class="token parameter variable">-Q</span>

<span class="token comment"># List only the explicitly installed packages and versions:</span>
pacman <span class="token parameter variable">-Qe</span>

<span class="token comment"># List orphan packages (installed as dependencies but not actually required by any package):</span>
pacman <span class="token parameter variable">-Qtdq</span>

<span class="token comment"># Empty the entire pacman cache:</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-Scc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[l];function t(d,p){return a(),e("div",null,c)}const r=n(i,[["render",t],["__file","package.html.vue"]]);export{r as default};
