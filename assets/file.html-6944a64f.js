import{_ as n,W as s,X as a,a1 as e}from"./framework-c9619a7b.js";const i={},t=e(`<h3 id="查看、切换、新建、移动、复制、重命名、删除、链接" tabindex="-1"><a class="header-anchor" href="#查看、切换、新建、移动、复制、重命名、删除、链接" aria-hidden="true">#</a> 查看、切换、新建、移动、复制、重命名、删除、链接</h3><ul><li><code>ls</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List files one per line:</span>
<span class="token function">ls</span> <span class="token parameter variable">-1</span>

<span class="token comment"># List all files, including hidden files:</span>
<span class="token function">ls</span> <span class="token parameter variable">-a</span>

<span class="token comment"># List all files, with trailing \`/\` added to directory names:</span>
<span class="token function">ls</span> <span class="token parameter variable">-F</span>

<span class="token comment"># Long format list (permissions, ownership, size, and modification date) of all files:</span>
<span class="token function">ls</span> <span class="token parameter variable">-la</span>

<span class="token comment"># Long format list with size displayed using human-readable units (KiB, MiB, GiB):</span>
<span class="token function">ls</span> <span class="token parameter variable">-lh</span>

<span class="token comment"># Long format list sorted by size (descending):</span>
<span class="token function">ls</span> <span class="token parameter variable">-lS</span>

<span class="token comment"># Long format list of all files, sorted by modification date (oldest first):</span>
<span class="token function">ls</span> <span class="token parameter variable">-ltr</span>

<span class="token comment"># Only list directories:</span>
<span class="token function">ls</span> <span class="token parameter variable">-d</span> */

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>pwd</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Print the current directory:</span>
<span class="token builtin class-name">pwd</span>

<span class="token comment"># Print the current directory, and resolve all symlinks (i.e. show the &quot;physical&quot; path):</span>
<span class="token builtin class-name">pwd</span> <span class="token parameter variable">--physical</span>

<span class="token comment"># Print the current logical directory:</span>
<span class="token builtin class-name">pwd</span> <span class="token parameter variable">--logical</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>cd</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Go to the specified directory:</span>
<span class="token builtin class-name">cd</span> path/to/directory

<span class="token comment"># Go up to the parent of the current directory:</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

<span class="token comment"># Go to the home directory of the current user:</span>
<span class="token builtin class-name">cd</span>

<span class="token comment"># Go to the home directory of the specified user:</span>
<span class="token builtin class-name">cd</span> ~username

<span class="token comment"># Go to the previously chosen directory:</span>
<span class="token builtin class-name">cd</span> -

<span class="token comment"># Go to the root directory:</span>
<span class="token builtin class-name">cd</span> /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>mkdir</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Create specific directories:</span>
<span class="token function">mkdir</span> path/to/directory1 path/to/directory2 <span class="token punctuation">..</span>.

<span class="token comment"># Create specific directories and their [p]arents if needed:</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> path/to/directory1 path/to/directory2 <span class="token punctuation">..</span>.

<span class="token comment"># Create directories with specific permissions:</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-m</span> rwxrw-r-- path/to/directory1 path/to/directory2 <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>touch</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Create specific files:</span>
<span class="token function">touch</span> path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># Set the file [a]ccess or [m]odification times to the current one and don&#39;t [c]reate file if it doesn&#39;t exist:</span>
<span class="token function">touch</span> <span class="token parameter variable">-c</span> -a<span class="token operator">|</span>m path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># Set the file [t]ime to a specific value and don&#39;t [c]reate file if it doesn&#39;t exist:</span>
<span class="token function">touch</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-t</span> YYYYMMDDHHMM.SS path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># Set the file time of a specific file to the time of anothe[r] file and don&#39;t [c]reate file if it doesn&#39;t exist:</span>
<span class="token function">touch</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-r</span> ~/.emacs path/to/file1 path/to/file2 <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>rm</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Remove specific files:</span>
<span class="token function">rm</span> path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># Remove specific files ignoring nonexistent ones:</span>
<span class="token function">rm</span> <span class="token parameter variable">--force</span> path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># Remove specific files interactively prompting before each removal:</span>
<span class="token function">rm</span> <span class="token parameter variable">--interactive</span> path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># Remove specific files printing info about each removal:</span>
<span class="token function">rm</span> <span class="token parameter variable">--verbose</span> path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># Remove specific files and directories recursively:</span>
<span class="token function">rm</span> <span class="token parameter variable">--recursive</span> path/to/file_or_directory1 path/to/file_or_directory2 <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>cat</code></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Print the contents of a file to the standard output:</span>
cat path/to/file

<span class="token comment"># Concatenate several files into an output file:</span>
cat path/to/file1 path/to/file2 <span class="token punctuation">...</span> <span class="token punctuation">&gt;</span> path/to/output_file

<span class="token comment"># Append several files to an output file:</span>
cat path/to/file1 path/to/file2 <span class="token punctuation">...</span> <span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span> path/to/output_file

<span class="token comment"># Copy the contents of a file into an output file in [u]nbuffered mode:</span>
cat <span class="token punctuation">-</span>u /dev/tty12 <span class="token punctuation">&gt;</span> /dev/tty13

<span class="token comment"># 写入内容到文件，内容以EOF结尾表示结束:</span>
cat <span class="token punctuation">&gt;</span> path/to/file &lt;&lt; EOF

<span class="token comment"># [n]umber all output lines:</span>
cat <span class="token punctuation">-</span>n path/to/file

<span class="token comment"># Display non-printable and whitespace characters (with \`M-\` prefix if non-ASCII):</span>
cat <span class="token punctuation">-</span>v <span class="token punctuation">-</span>t <span class="token punctuation">-</span>e path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>tac</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Concatenate specific files in reversed order:</span>
<span class="token function">tac</span> path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># Display \`stdin\` in reversed order:</span>
<span class="token function">cat</span> path/to/file <span class="token operator">|</span> <span class="token function">tac</span>

<span class="token comment"># Use a specific separator:</span>
<span class="token function">tac</span> <span class="token parameter variable">--separator</span> , path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># Use a specific regex as a separator:</span>
<span class="token function">tac</span> <span class="token parameter variable">--regex</span> <span class="token parameter variable">--separator</span> <span class="token punctuation">[</span>,<span class="token punctuation">;</span><span class="token punctuation">]</span> path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># Use a separator before each file:</span>
<span class="token function">tac</span> <span class="token parameter variable">--before</span> path/to/file1 path/to/file2 <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>head</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Output the first few lines of a file:</span>
<span class="token function">head</span> <span class="token parameter variable">-n</span> count path/to/file

<span class="token comment"># Output the first few bytes of a file:</span>
<span class="token function">head</span> <span class="token parameter variable">-c</span> count path/to/file

<span class="token comment"># Output everything but the last few lines of a file:</span>
<span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-count</span> path/to/file

<span class="token comment"># Output everything but the last few bytes of a file:</span>
<span class="token function">head</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-count</span> path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>tail</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Show last &#39;count&#39; lines in file:</span>
<span class="token function">tail</span> <span class="token parameter variable">-n</span> count path/to/file

<span class="token comment"># Print a file from a specific line number:</span>
<span class="token function">tail</span> <span class="token parameter variable">-n</span> +count path/to/file

<span class="token comment"># Print a specific count of bytes from the end of a given file:</span>
<span class="token function">tail</span> <span class="token parameter variable">-c</span> count path/to/file

<span class="token comment"># Print the last lines of a given file and keep reading file until \`Ctrl + C\`:</span>
<span class="token function">tail</span> <span class="token parameter variable">--follow</span> path/to/file

<span class="token comment"># Keep reading file until \`Ctrl + C\`, even if the file is inaccessible:</span>
<span class="token function">tail</span> <span class="token parameter variable">--retry</span> <span class="token parameter variable">--follow</span> path/to/file

<span class="token comment"># Show last &#39;num&#39; lines in &#39;file&#39; and refresh every &#39;n&#39; seconds:</span>
<span class="token function">tail</span> <span class="token parameter variable">-n</span> count --sleep-interval seconds <span class="token parameter variable">--follow</span> path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>less</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Open a file:</span>
<span class="token function">less</span> source_file

<span class="token comment"># Page down / up:</span>
<span class="token operator">&lt;</span>Space<span class="token operator">&gt;</span> <span class="token punctuation">(</span>down<span class="token punctuation">)</span>, b <span class="token punctuation">(</span>up<span class="token punctuation">)</span>

<span class="token comment"># Go to end / start of file:</span>
G <span class="token punctuation">(</span>end<span class="token punctuation">)</span>, g <span class="token punctuation">(</span>start<span class="token punctuation">)</span>

<span class="token comment"># Forward search for a string (press \`n\`/\`N\` to go to next/previous match):</span>
/something

<span class="token comment"># Backward search for a string (press \`n\`/\`N\` to go to next/previous match):</span>
?something

<span class="token comment"># Follow the output of the currently opened file:</span>
F

<span class="token comment"># Open the current file in an editor:</span>
<span class="token function">v</span>

<span class="token comment"># Exit:</span>
q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>more</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Open a file:</span>
<span class="token function">more</span> path/to/file

<span class="token comment"># Open a file displaying from a specific line:</span>
<span class="token function">more</span> +line_number path/to/file

<span class="token comment"># Display help:</span>
<span class="token function">more</span> <span class="token parameter variable">--help</span>

<span class="token comment"># Go to the next page:</span>
<span class="token operator">&lt;</span>Space<span class="token operator">&gt;</span>

<span class="token comment"># Search for a string (press \`n\` to go to the next match):</span>
/something

<span class="token comment"># Exit:</span>
q

<span class="token comment"># Display help about interactive commands:</span>
h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>cp</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Copy a file to another location:</span>
<span class="token function">cp</span> path/to/source_file.ext path/to/target_file.ext

<span class="token comment"># Copy a file into another directory, keeping the filename:</span>
<span class="token function">cp</span> path/to/source_file.ext path/to/target_parent_directory

<span class="token comment"># Recursively copy a directory&#39;s contents to another location (if the destination exists, the directory is copied inside it):</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> path/to/source_directory path/to/target_directory

<span class="token comment"># Copy a directory recursively, in verbose mode (shows files as they are copied):</span>
<span class="token function">cp</span> <span class="token parameter variable">-vr</span> path/to/source_directory path/to/target_directory

<span class="token comment"># Copy text files to another location, in interactive mode (prompts user before overwriting):</span>
<span class="token function">cp</span> <span class="token parameter variable">-i</span> *.txt path/to/target_directory

<span class="token comment"># Follow symbolic links before copying:</span>
<span class="token function">cp</span> <span class="token parameter variable">-L</span> <span class="token function">link</span> path/to/target_directory

<span class="token comment"># Use the full path of source files, creating any missing intermediate directories when copying:</span>
<span class="token function">cp</span> <span class="token parameter variable">--parents</span> source/path/to/file path/to/target_file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>mv</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Rename a file or directory when the target is not an existing directory:</span>
<span class="token function">mv</span> <span class="token builtin class-name">source</span> target

<span class="token comment"># Move a file or directory into an existing directory:</span>
<span class="token function">mv</span> <span class="token builtin class-name">source</span> existing_directory

<span class="token comment"># Move multiple files into an existing directory, keeping the filenames unchanged:</span>
<span class="token function">mv</span> source1 source2 source3 existing_directory

<span class="token comment"># Do not prompt for confirmation before overwriting existing files:</span>
<span class="token function">mv</span> <span class="token parameter variable">-f</span> <span class="token builtin class-name">source</span> target

<span class="token comment"># Prompt for confirmation before overwriting existing files, regardless of file permissions:</span>
<span class="token function">mv</span> <span class="token parameter variable">-i</span> <span class="token builtin class-name">source</span> target

<span class="token comment"># Do not overwrite existing files at the target:</span>
<span class="token function">mv</span> <span class="token parameter variable">-n</span> <span class="token builtin class-name">source</span> target

<span class="token comment"># Move files in verbose mode, showing files after they are moved:</span>
<span class="token function">mv</span> <span class="token parameter variable">-v</span> <span class="token builtin class-name">source</span> target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>rename</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Rename files using simple substitutions (substitute &#39;foo&#39; with &#39;bar&#39; wherever found):</span>
<span class="token function">rename</span> foo bar *

<span class="token comment"># Dry-run# display which renames would occur without performing them:</span>
<span class="token function">rename</span> <span class="token parameter variable">-vn</span> foo bar *

<span class="token comment"># Do not overwrite existing files:</span>
<span class="token function">rename</span> <span class="token parameter variable">-o</span> foo bar *

<span class="token comment"># Change file extensions:</span>
<span class="token function">rename</span> .ext .bak *.ext

<span class="token comment"># Prepend &quot;foo&quot; to all filenames in the current directory:</span>
<span class="token function">rename</span> <span class="token string">&#39;&#39;</span> <span class="token string">&#39;foo&#39;</span> *

<span class="token comment"># Rename a group of increasingly numbered files zero-padding the numbers up to 3 digits:</span>
<span class="token function">rename</span> foo foo00 foo? <span class="token operator">&amp;&amp;</span> <span class="token function">rename</span> foo foo0 foo??
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>realpath</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display the absolute path for a file or directory:</span>
realpath path/to/file_or_directory

<span class="token comment"># Require all path components to exist:</span>
realpath --canonicalize-existing path/to/file_or_directory

<span class="token comment"># Resolve &quot;..&quot; components before symlinks:</span>
realpath <span class="token parameter variable">--logical</span> path/to/file_or_directory

<span class="token comment"># Disable symlink expansion:</span>
realpath --no-symlinks path/to/file_or_directory

<span class="token comment"># Suppress error messages:</span>
realpath <span class="token parameter variable">--quiet</span> path/to/file_or_directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>tree</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Print files and directories up to &#39;num&#39; levels of depth (where 1 means the current directory):</span>
tree <span class="token parameter variable">-L</span> num

<span class="token comment"># Print directories only:</span>
tree <span class="token parameter variable">-d</span>

<span class="token comment"># Print hidden files too with colorization on:</span>
tree <span class="token parameter variable">-a</span> <span class="token parameter variable">-C</span>

<span class="token comment"># Print the tree without indentation lines, showing the full path instead (use \`-N\` to not escape non-printable characters):</span>
tree <span class="token parameter variable">-i</span> <span class="token parameter variable">-f</span>

<span class="token comment"># Print the size of each file and the cumulative size of each directory, in human-readable format:</span>
tree <span class="token parameter variable">-s</span> <span class="token parameter variable">-h</span> <span class="token parameter variable">--du</span>

<span class="token comment"># Print files within the tree hierarchy, using a wildcard (glob) pattern, and pruning out directories that don&#39;t contain matching files:</span>
tree <span class="token parameter variable">-P</span> <span class="token string">&#39;*.txt&#39;</span> <span class="token parameter variable">--prune</span>

<span class="token comment"># Print directories within the tree hierarchy, using the wildcard (glob) pattern, and pruning out directories that aren&#39;t ancestors of the wanted one:</span>
tree <span class="token parameter variable">-P</span> directory_name <span class="token parameter variable">--matchdirs</span> <span class="token parameter variable">--prune</span>

<span class="token comment"># Print the tree ignoring the given directories:</span>
tree <span class="token parameter variable">-I</span> <span class="token string">&#39;directory_name1|directory_name2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ln</code></li></ul><p>:::info{title=&quot;相关信息&quot;} ln命令是Linux系统中的一个非常重要的命令，它的功能是为某一个文件在另外一个位置建立一个同步的链接。当我们需要在不同的目录，用到相同的文件时，我们不需要在每一个需要的目录下都放一个必须相同的文件，我们只要在某个固定的目录，放上该文件，然后在其他的目录下用ln命令链接（link）它就可以，不必重复占用磁盘空间。</p><p>ln命令有两种链接方式：硬链接和软链接。硬链接是指通过索引节点来进行链接，而软链接则是建立一个特殊的文件来指向另外一个文件。硬链接只能对文件进行链接，而软链接可以对目录进行链接。 :::</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Create a symbolic link to a file or directory:</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /path/to/file_or_directory path/to/symlink

<span class="token comment"># Overwrite an existing symbolic link to point to a different file:</span>
<span class="token function">ln</span> <span class="token parameter variable">-sf</span> /path/to/new_file path/to/symlink

<span class="token comment"># Create a hard link to a file:</span>
<span class="token function">ln</span> /path/to/file path/to/hardlink
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件对比、补丁" tabindex="-1"><a class="header-anchor" href="#文件对比、补丁" aria-hidden="true">#</a> 文件对比、补丁</h2><ul><li><code>diff</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Compare files (lists changes to turn \`old_file\` into \`new_file\`):</span>
<span class="token function">diff</span> old_file new_file

<span class="token comment"># Compare files, ignoring white spaces:</span>
<span class="token function">diff</span> --ignore-all-space old_file new_file

<span class="token comment"># Compare files, showing the differences side by side:</span>
<span class="token function">diff</span> --side-by-side old_file new_file

<span class="token comment"># Compare files, showing the differences in unified format (as used by \`git diff\`):</span>
<span class="token function">diff</span> <span class="token parameter variable">--unified</span> old_file new_file

<span class="token comment"># Compare directories recursively (shows names for differing files/directories as well as changes made to files):</span>
<span class="token function">diff</span> <span class="token parameter variable">--recursive</span> old_directory new_directory

<span class="token comment"># Compare directories, only showing the names of files that differ:</span>
<span class="token function">diff</span> <span class="token parameter variable">--recursive</span> <span class="token parameter variable">--brief</span> old_directory new_directory

<span class="token comment"># Create a patch file for Git from the differences of two text files, treating nonexistent files as empty:</span>
<span class="token function">diff</span> <span class="token parameter variable">--text</span> <span class="token parameter variable">--unified</span> --new-file old_file new_file <span class="token operator">&gt;</span> diff.patch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>patch</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Execute commands from standard input (press \`Ctrl + D\` when done):</span>
batch

<span class="token comment"># Execute a command from standard input:</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;./make_db_backup.sh&quot;</span> <span class="token operator">|</span> batch

<span class="token comment"># Execute commands from a given file:</span>
batch <span class="token parameter variable">-f</span> path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件查找" tabindex="-1"><a class="header-anchor" href="#文件查找" aria-hidden="true">#</a> 文件查找</h3><ul><li><code>find</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Find files by extension:</span>
<span class="token function">find</span> root_path <span class="token parameter variable">-name</span> <span class="token string">&#39;*.ext&#39;</span>

<span class="token comment"># Find files matching multiple path/name patterns:</span>
<span class="token function">find</span> root_path <span class="token parameter variable">-path</span> <span class="token string">&#39;**/path/**/*.ext&#39;</span> <span class="token parameter variable">-or</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*pattern*&#39;</span>

<span class="token comment"># Find directories matching a given name, in case-insensitive mode:</span>
<span class="token function">find</span> root_path <span class="token parameter variable">-type</span> d <span class="token parameter variable">-iname</span> <span class="token string">&#39;*lib*&#39;</span>

<span class="token comment"># Find files matching a given pattern, excluding specific paths:</span>
<span class="token function">find</span> root_path <span class="token parameter variable">-name</span> <span class="token string">&#39;*.py&#39;</span> <span class="token parameter variable">-not</span> <span class="token parameter variable">-path</span> <span class="token string">&#39;*/site-packages/*&#39;</span>

<span class="token comment"># Find files matching a given size range, limiting the recursive depth to &quot;1&quot;::</span>
<span class="token function">find</span> root_path <span class="token parameter variable">-maxdepth</span> <span class="token number">1</span> <span class="token parameter variable">-size</span> +500k <span class="token parameter variable">-size</span> <span class="token parameter variable">-10M</span>

<span class="token comment"># Run a command for each file (use \`{}\` within the command to access the filename):</span>
<span class="token function">find</span> root_path <span class="token parameter variable">-name</span> <span class="token string">&#39;*.ext&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>

<span class="token comment"># Find files modified in the last 7 days:</span>
<span class="token function">find</span> root_path <span class="token parameter variable">-daystart</span> <span class="token parameter variable">-mtime</span> <span class="token parameter variable">-7</span>

<span class="token comment"># Find empty (0 byte) files and delete them:</span>
<span class="token function">find</span> root_path <span class="token parameter variable">-type</span> f <span class="token parameter variable">-empty</span> <span class="token parameter variable">-delete</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>locate</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Look for pattern in the database. Note: the database is recomputed periodically (usually weekly or daily):</span>
<span class="token function">locate</span> pattern

<span class="token comment"># Look for a file by its exact filename (a pattern containing no globbing characters is interpreted as \`*pattern*\`):</span>
<span class="token function">locate</span> */filename

<span class="token comment"># Recompute the database. You need to do it if you want to find recently added files:</span>
<span class="token function">sudo</span> updatedb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>which</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Search the PATH environment variable and display the location of any matching executables:</span>
<span class="token function">which</span> executable

<span class="token comment"># If there are multiple executables which match, display all:</span>
<span class="token function">which</span> <span class="token parameter variable">-a</span> executable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>whereis</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Locate binary, source and man pages for ssh:</span>
<span class="token function">whereis</span> <span class="token function">ssh</span>

<span class="token comment"># Locate binary and man pages for ls:</span>
<span class="token function">whereis</span> <span class="token parameter variable">-bm</span> <span class="token function">ls</span>

<span class="token comment"># Locate source of gcc and man pages for Git:</span>
<span class="token function">whereis</span> <span class="token parameter variable">-s</span> gcc <span class="token parameter variable">-m</span> <span class="token function">git</span>

<span class="token comment"># Locate binaries for gcc in \`/usr/bin/\` only:</span>
<span class="token function">whereis</span> <span class="token parameter variable">-b</span> <span class="token parameter variable">-B</span> /usr/bin/ <span class="token parameter variable">-f</span> gcc

<span class="token comment"># Locate unusual binaries (those that have more or less than one binary on the system):</span>
<span class="token function">whereis</span> <span class="token parameter variable">-u</span> *

<span class="token comment"># Locate binaries that have unusual manual entries (binaries that have more or less than one manual installed):</span>
<span class="token function">whereis</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-m</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件所有者-组-、权限和属性" tabindex="-1"><a class="header-anchor" href="#文件所有者-组-、权限和属性" aria-hidden="true">#</a> 文件所有者(组)、权限和属性</h3><ul><li><code>chown</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Change the owner user of a file/directory:</span>
<span class="token function">chown</span> user path/to/file_or_directory

<span class="token comment"># Change the owner user and group of a file/directory:</span>
<span class="token function">chown</span> user:group path/to/file_or_directory

<span class="token comment"># Recursively change the owner of a directory and its contents:</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> user path/to/directory

<span class="token comment"># Change the owner of a symbolic link:</span>
<span class="token function">chown</span> <span class="token parameter variable">-h</span> user path/to/symlink

<span class="token comment"># Change the owner of a file/directory to match a reference file:</span>
<span class="token function">chown</span> <span class="token parameter variable">--reference</span><span class="token operator">=</span>path/to/reference_file path/to/file_or_directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>chmod</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Give the [u]ser who owns a file the right to e[x]ecute it:</span>
<span class="token function">chmod</span> u+x path/to/file

<span class="token comment"># Give the [u]ser rights to [r]ead and [w]rite to a file/directory:</span>
<span class="token function">chmod</span> u+rw path/to/file_or_directory

<span class="token comment"># Remove e[x]ecutable rights from the [g]roup:</span>
<span class="token function">chmod</span> g-x path/to/file

<span class="token comment"># Give [a]ll users rights to [r]ead and e[x]ecute:</span>
<span class="token function">chmod</span> a+rx path/to/file

<span class="token comment"># Give [o]thers (not in the file owner&#39;s group) the same rights as the [g]roup:</span>
<span class="token function">chmod</span> <span class="token assign-left variable">o</span><span class="token operator">=</span>g path/to/file

<span class="token comment"># Remove all rights from [o]thers:</span>
<span class="token function">chmod</span> <span class="token assign-left variable">o</span><span class="token operator">=</span> path/to/file

<span class="token comment"># Change permissions recursively giving [g]roup and [o]thers the ability to [w]rite:</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> g+w,o+w path/to/directory

<span class="token comment"># Recursively give [a]ll users [r]ead permissions to files and e[X]ecute permissions to sub-directories within a directory:</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> a+rX path/to/directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>chgrp</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Change the owner group of a file/directory:</span>
<span class="token function">chgrp</span> group path/to/file_or_directory

<span class="token comment"># Recursively change the owner group of a directory and its contents:</span>
<span class="token function">chgrp</span> <span class="token parameter variable">-R</span> group path/to/directory

<span class="token comment"># Change the owner group of a symbolic link:</span>
<span class="token function">chgrp</span> <span class="token parameter variable">-h</span> group path/to/symlink

<span class="token comment"># Change the owner group of a file/directory to match a reference file:</span>
<span class="token function">chgrp</span> <span class="token parameter variable">--reference</span><span class="token operator">=</span>path/to/reference_file path/to/file_or_directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>lsattr</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display the attributes of the files in the current directory:</span>
lsattr

<span class="token comment"># List the attributes of files in a particular path:</span>
lsattr path

<span class="token comment"># List file attributes recursively in the current and subsequent directories:</span>
lsattr <span class="token parameter variable">-R</span>

<span class="token comment"># Show attributes of all the files in the current directory, including hidden ones:</span>
lsattr <span class="token parameter variable">-a</span>

<span class="token comment"># Display attributes of directories in the current directory:</span>
lsattr <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>chattr</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Make a file or directory immutable to changes and deletion, even by superuser:</span>
chattr +i path/to/file_or_directory

<span class="token comment"># Make a file or directory mutable:</span>
chattr <span class="token parameter variable">-i</span> path/to/file_or_directory

<span class="token comment"># Recursively make an entire directory and contents immutable:</span>
chattr <span class="token parameter variable">-R</span> +i path/to/directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解-压缩类" tabindex="-1"><a class="header-anchor" href="#解-压缩类" aria-hidden="true">#</a> (解)压缩类</h3><ul><li><code>tar</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># [c]reate an archive and write it to a [f]ile:</span>
<span class="token function">tar</span> cf path/to/target.tar path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># [c]reate a g[z]ipped archive and write it to a [f]ile:</span>
<span class="token function">tar</span> czf path/to/target.tar.gz path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># [c]reate a g[z]ipped archive from a directory using relative paths:</span>
<span class="token function">tar</span> czf path/to/target.tar.gz <span class="token parameter variable">--directory</span><span class="token operator">=</span>path/to/directory <span class="token builtin class-name">.</span>

<span class="token comment"># E[x]tract a (compressed) archive [f]ile into the current directory [v]erbosely:</span>
<span class="token function">tar</span> xvf path/to/source.tar<span class="token punctuation">[</span>.gz<span class="token operator">|</span>.bz2<span class="token operator">|</span>.xz<span class="token punctuation">]</span>

<span class="token comment"># E[x]tract a (compressed) archive [f]ile into the target directory:</span>
<span class="token function">tar</span> xf path/to/source.tar<span class="token punctuation">[</span>.gz<span class="token operator">|</span>.bz2<span class="token operator">|</span>.xz<span class="token punctuation">]</span> <span class="token parameter variable">--directory</span><span class="token operator">=</span>path/to/directory

<span class="token comment"># [c]reate a compressed archive and write it to a [f]ile, using [a]rchive suffix to determine the compression program:</span>
<span class="token function">tar</span> caf path/to/target.tar.xz path/to/file1 path/to/file2 <span class="token punctuation">..</span>.

<span class="token comment"># Lis[t] the contents of a tar [f]ile [v]erbosely:</span>
<span class="token function">tar</span> tvf path/to/source.tar

<span class="token comment"># E[x]tract files matching a pattern from an archive [f]ile:</span>
<span class="token function">tar</span> xf path/to/source.tar <span class="token parameter variable">--wildcards</span> <span class="token string">&quot;*.html&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>zip</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Add files/directories to a specific archive:</span>
<span class="token function">zip</span> <span class="token parameter variable">-r</span> path/to/compressed.zip path/to/file_or_directory1 path/to/file_or_directory2 <span class="token punctuation">..</span>.

<span class="token comment"># Remove files/directories from a specific archive:</span>
<span class="token function">zip</span> <span class="token parameter variable">--delete</span> path/to/compressed.zip path/to/file_or_directory1 path/to/file_or_directory2 <span class="token punctuation">..</span>.

<span class="token comment"># Archive files/directories e[x]cluding specified ones:</span>
<span class="token function">zip</span> path/to/compressed.zip path/to/file_or_directory1 path/to/file_or_directory2 <span class="token punctuation">..</span>. <span class="token parameter variable">--exclude</span> path/to/excluded_files_or_directories

<span class="token comment"># Archive files/directories with a specific compression level (\`0\` # the lowest, \`9\` # the highest):</span>
<span class="token function">zip</span> <span class="token parameter variable">-r</span> -0-9 path/to/compressed.zip path/to/file_or_directory1 path/to/file_or_directory2 <span class="token punctuation">..</span>.

<span class="token comment"># Create an encrypted archive with a specific password:</span>
<span class="token function">zip</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--encrypt</span> path/to/compressed.zip path/to/file_or_directory1 path/to/file_or_directory2 <span class="token punctuation">..</span>.

<span class="token comment"># Archive files/directories to a multi-part [s]plit zip file (e.g. 3 GB parts):</span>
<span class="token function">zip</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-s</span> 3g path/to/compressed.zip path/to/file_or_directory1 path/to/file_or_directory2 <span class="token punctuation">..</span>.

<span class="token comment"># Print a specific archive contents:</span>
<span class="token function">zip</span> <span class="token parameter variable">-sf</span> path/to/compressed.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>unzip</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Extract all files/directories from specific archives into the current directory:</span>
<span class="token function">unzip</span> path/to/archive1.zip path/to/archive2.zip <span class="token punctuation">..</span>.

<span class="token comment"># Extract files/directories from archives to a specific path:</span>
<span class="token function">unzip</span> path/to/archive1.zip path/to/archive2.zip <span class="token punctuation">..</span>. <span class="token parameter variable">-d</span> path/to/output

<span class="token comment"># List the contents of a specific archive without extracting them:</span>
<span class="token function">unzip</span> <span class="token parameter variable">-l</span> path/to/archive.zip

<span class="token comment"># Extract files/directories from archives to \`stdout\`:</span>
<span class="token function">unzip</span> <span class="token parameter variable">-c</span> path/to/archive1.zip path/to/archive2.zip <span class="token punctuation">..</span>.

<span class="token comment"># Extract the contents of the file(s) to \`stdout\` alongside the extracted file names:</span>
<span class="token function">unzip</span> <span class="token parameter variable">-O</span> gbk path/to/archive1.zip path/to/archive2.zip <span class="token punctuation">..</span>.

<span class="token comment"># Extract a specific file from an archive:</span>
<span class="token function">unzip</span> <span class="token parameter variable">-j</span> path/to/archive.zip path/to/file_in_archive1 path/to/file_in_archive2 <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>unrar</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Extract files with original directory structure:</span>
<span class="token function">unrar</span> x <span class="token punctuation">{</span><span class="token punctuation">{</span>compressed.rar<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># Extract files to a specified path with the original directory structure:</span>
<span class="token function">unrar</span> x <span class="token punctuation">{</span><span class="token punctuation">{</span>compressed.rar<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/extract<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># Extract files into current directory, losing directory structure in the archive:</span>
<span class="token function">unrar</span> e <span class="token punctuation">{</span><span class="token punctuation">{</span>compressed.rar<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># Test integrity of each file inside the archive file:</span>
<span class="token function">unrar</span> t <span class="token punctuation">{</span><span class="token punctuation">{</span>compressed.rar<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># List files inside the archive file without decompressing it:</span>
<span class="token function">unrar</span> l <span class="token punctuation">{</span><span class="token punctuation">{</span>compressed.rar<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>7z</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> p7zip-full

<span class="token comment"># [a]dd a file or directory to a new or existing archive:</span>
7z a <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/archive.7z<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/file_or_directory<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># Encrypt an existing archive (including filenames):</span>
7z a <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/encrypted.7z<span class="token punctuation">}</span><span class="token punctuation">}</span> -p<span class="token punctuation">{</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token parameter variable">-mhe</span><span class="token operator">=</span>on <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/archive.7z<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># E[x]tract an archive preserving the original directory structure:</span>
7z x <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/archive.7z<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># E[x]tract an archive to a specific directory:</span>
7z x <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/archive.7z<span class="token punctuation">}</span><span class="token punctuation">}</span> -o<span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/output<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># E[x]tract an archive to stdout:</span>
7z x <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/archive.7z<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token parameter variable">-so</span>

<span class="token comment"># [a]rchive using a specific archive type:</span>
7z a -t<span class="token punctuation">{</span><span class="token punctuation">{</span>7z<span class="token operator">|</span><span class="token function">bzip2</span><span class="token operator">|</span><span class="token function">gzip</span><span class="token operator">|</span>lzip<span class="token operator">|</span><span class="token function">tar</span><span class="token operator">|</span>zip<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/archive.7z<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/file_or_directory<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># [l]ist the contents of an archive:</span>
7z l <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/archive.7z<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># List available archive types:</span>
7z i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75),l=[t];function c(o,r){return s(),a("div",null,l)}const d=n(i,[["render",c],["__file","file.html.vue"]]);export{d as default};
