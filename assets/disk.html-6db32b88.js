import{_ as n,W as s,X as a,a1 as e}from"./framework-97524b1f.js";const i={},l=e(`<h2 id="磁盘管理" tabindex="-1"><a class="header-anchor" href="#磁盘管理" aria-hidden="true">#</a> 磁盘管理</h2><ul><li><code>fdisk</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List partitions:</span>
<span class="token function">sudo</span> <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>

<span class="token comment"># Start the partition manipulator:</span>
<span class="token function">sudo</span> <span class="token function">fdisk</span> /dev/sdX

<span class="token comment"># Once partitioning a disk, create a partition:</span>
n

<span class="token comment"># Once partitioning a disk, select a partition to delete:</span>
d

<span class="token comment"># Once partitioning a disk, view the partition table:</span>
p

<span class="token comment"># Once partitioning a disk, write the changes made:</span>
w

<span class="token comment"># Once partitioning a disk, discard the changes made:</span>
q

<span class="token comment"># Once partitioning a disk, open a help menu:</span>
m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>mount</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将设备 &quot;/dev/sdb1&quot; 挂载到 &quot;/mnt/media&quot; 目录</span>
<span class="token function">sudo</span> <span class="token function">mount</span> /dev/sdb1 /mnt/media
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::info{title=&quot;相关信息&quot;} 格式： <code>mount [OPTION...] DEVICE_NAME DIRECTORY</code> :::</p><ul><li><code>umount</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">umount</span> DIRECTORY
<span class="token function">umount</span> DEVICE_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>df</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display all filesystems and their disk usage:</span>
<span class="token function">df</span>

<span class="token comment"># Display all filesystems and their disk usage in human-readable form:</span>
<span class="token function">df</span> <span class="token parameter variable">-h</span>

<span class="token comment"># Display the filesystem and its disk usage containing the given file or directory:</span>
<span class="token function">df</span> path/to/file_or_directory

<span class="token comment"># Display statistics on the number of free inodes:</span>
<span class="token function">df</span> <span class="token parameter variable">-i</span>

<span class="token comment"># Display filesystems but exclude the specified types:</span>
<span class="token function">df</span> <span class="token parameter variable">-x</span> squashfs <span class="token parameter variable">-x</span> tmpfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>du</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List the sizes of a directory and any subdirectories, in the given unit (B/KiB/MiB):</span>
<span class="token function">du</span> -b<span class="token operator">|</span>k<span class="token operator">|</span>m path/to/directory

<span class="token comment"># List the sizes of a directory and any subdirectories, in human-readable form (i.e. auto-selecting the appropriate unit for each size):</span>
<span class="token function">du</span> <span class="token parameter variable">-h</span> path/to/directory

<span class="token comment"># Show the size of a single directory, in human-readable units:</span>
<span class="token function">du</span> <span class="token parameter variable">-sh</span> path/to/directory

<span class="token comment"># List the human-readable sizes of a directory and of all the files and directories within it:</span>
<span class="token function">du</span> <span class="token parameter variable">-ah</span> path/to/directory

<span class="token comment"># List the human-readable sizes of a directory and any subdirectories, up to N levels deep:</span>
<span class="token function">du</span> <span class="token parameter variable">-h</span> --max-depth<span class="token operator">=</span>N path/to/directory

<span class="token comment"># List the human-readable size of all \`.jpg\` files in subdirectories of the current directory, and show a cumulative total at the end:</span>
<span class="token function">du</span> <span class="token parameter variable">-ch</span> */*.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>lsblk</code><br> 列出块设备,可以查看到块设备的挂载点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List all storage devices in a tree-like format:</span>
lsblk

<span class="token comment"># Also list empty devices:</span>
lsblk <span class="token parameter variable">-a</span>

<span class="token comment"># Print the SIZE column in bytes rather than in a human-readable format:</span>
lsblk <span class="token parameter variable">-b</span>

<span class="token comment"># Output info about filesystems:</span>
lsblk <span class="token parameter variable">-f</span>

<span class="token comment"># Use ASCII characters for tree formatting:</span>
lsblk <span class="token parameter variable">-i</span>

<span class="token comment"># Output info about block-device topology:</span>
lsblk <span class="token parameter variable">-t</span>

<span class="token comment"># Exclude the devices specified by the comma-separated list of major device numbers:</span>
lsblk <span class="token parameter variable">-e</span> <span class="token number">1,7</span>

<span class="token comment"># Display a customized summary using a comma-separated list of columns:</span>
lsblk <span class="token parameter variable">--output</span> NAME,SERIAL,MODEL,TRAN,TYPE,SIZE,FSTYPE,MOUNTPOINT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/a782557c2deceee5720cf743b319a1c3.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ul><li><code>lsusb</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List all the USB devices available:</span>
lsusb

<span class="token comment"># List the USB hierarchy as a tree:</span>
lsusb <span class="token parameter variable">-t</span>

<span class="token comment"># List verbose information about USB devices:</span>
lsusb <span class="token parameter variable">--verbose</span>

<span class="token comment"># List detailed information about a USB device:</span>
lsusb <span class="token parameter variable">-D</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>device<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># List devices with a specified vendor and product ID only:</span>
lsusb <span class="token parameter variable">-d</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>vendor<span class="token punctuation">}</span><span class="token punctuation">}</span>:<span class="token punctuation">{</span><span class="token punctuation">{</span>product<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>lspci</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Show a brief list of devices:</span>
lspci

<span class="token comment"># Display additional info:</span>
lspci <span class="token parameter variable">-v</span>

<span class="token comment"># Display drivers and modules handling each device:</span>
lspci <span class="token parameter variable">-k</span>

<span class="token comment"># Show a specific device:</span>
lspci <span class="token parameter variable">-s</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>00:18.3<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># Dump info in a readable form:</span>
lspci <span class="token parameter variable">-vm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>iotop</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有进程的磁盘I/O</span>
<span class="token function">sudo</span> iotop

<span class="token comment"># 查看当前实际进行磁盘I/O的进程</span>
<span class="token function">sudo</span> iotop <span class="token parameter variable">-o</span>

<span class="token comment"># 查看指定进程的磁盘I/O情况</span>
<span class="token function">sudo</span> iotop <span class="token parameter variable">-p</span> <span class="token number">22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/db000798190b020829a6a243333aac05.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>`,23),t=[l];function d(c,o){return s(),a("div",null,t)}const p=n(i,[["render",d],["__file","disk.html.vue"]]);export{p as default};
