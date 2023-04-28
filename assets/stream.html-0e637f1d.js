import{_ as n,W as s,X as a,a1 as e}from"./framework-97524b1f.js";const i={},t=e(`<h2 id="字符串处理" tabindex="-1"><a class="header-anchor" href="#字符串处理" aria-hidden="true">#</a> 字符串处理</h2><ul><li><code>awk</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Print the fifth column (a.k.a. field) in a space-separated file:</span>
<span class="token function">awk</span> <span class="token string">&#39;{print $5}&#39;</span> path/to/file

<span class="token comment"># Print the second column of the lines containing &quot;foo&quot; in a space-separated file:</span>
<span class="token function">awk</span> <span class="token string">&#39;/foo/ {print $2}&#39;</span> path/to/file

<span class="token comment"># Print the last column of each line in a file, using a comma (instead of space) as a field separator:</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;,&#39;</span> <span class="token string">&#39;{print $NF}&#39;</span> path/to/file

<span class="token comment"># Sum the values in the first column of a file and print the total:</span>
<span class="token function">awk</span> <span class="token string">&#39;{s+=$1} END {print s}&#39;</span> path/to/file

<span class="token comment"># Print every third line starting from the first line:</span>
<span class="token function">awk</span> <span class="token string">&#39;NR%3==1&#39;</span> path/to/file

<span class="token comment"># Print different values based on conditions:</span>
<span class="token function">awk</span> <span class="token string">&#39;{if ($1 == &quot;foo&quot;) print &quot;Exact match foo&quot;; else if ($1 ~ &quot;bar&quot;) print &quot;Partial match bar&quot;; else print &quot;Baz&quot;}&#39;</span> path/to/file

<span class="token comment"># Print all lines where the 10th column value equals the specified value:</span>
<span class="token function">awk</span> <span class="token string">&#39;($10 == value)&#39;</span>

<span class="token comment"># Print all the lines which the 10th column value is between a min and a max:</span>
<span class="token function">awk</span> <span class="token string">&#39;($10 &gt;= min_value &amp;&amp; $10 &lt;= max_value)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>grep</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Search for a pattern within a file:</span>
<span class="token function">grep</span> <span class="token string">&quot;search_pattern&quot;</span> path/to/file

<span class="token comment"># Search for an exact string (disables regular expressions):</span>
<span class="token function">grep</span> --fixed-strings <span class="token string">&quot;exact_string&quot;</span> path/to/file

<span class="token comment"># Search for a pattern in all files recursively in a directory, showing line numbers of matches, ignoring binary files:</span>
<span class="token function">grep</span> <span class="token parameter variable">--recursive</span> --line-number --binary-files<span class="token operator">=</span>without-match <span class="token string">&quot;search_pattern&quot;</span> path/to/directory

<span class="token comment"># Use extended regular expressions (supports \`?\`, \`+\`, \`{}\`, \`()\` and \`|\`), in case-insensitive mode:</span>
<span class="token function">grep</span> --extended-regexp --ignore-case <span class="token string">&quot;search_pattern&quot;</span> path/to/file

<span class="token comment"># Print 3 lines of context around, before, or after each match:</span>
<span class="token function">grep</span> --context<span class="token operator">|</span>before-context<span class="token operator">|</span>after-context<span class="token operator">=</span><span class="token number">3</span> <span class="token string">&quot;search_pattern&quot;</span> path/to/file

<span class="token comment"># Print file name and line number for each match with color output:</span>
<span class="token function">grep</span> --with-filename --line-number <span class="token parameter variable">--color</span><span class="token operator">=</span>always <span class="token string">&quot;search_pattern&quot;</span> path/to/file

<span class="token comment"># Search for lines matching a pattern, printing only the matched text:</span>
<span class="token function">grep</span> --only-matching <span class="token string">&quot;search_pattern&quot;</span> path/to/file

<span class="token comment"># Search \`stdin\` for lines that do not match a pattern:</span>
<span class="token function">cat</span> path/to/file <span class="token operator">|</span> <span class="token function">grep</span> --invert-match <span class="token string">&quot;search_pattern&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>sed</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Replace all \`apple\` (basic regex) occurrences with \`mango\` (basic regex) in all input lines and print the result to \`stdout\`:</span>
<span class="token builtin class-name">command</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/apple/mango/g&#39;</span>

<span class="token comment"># Execute a specific script [f]ile and print the result to \`stdout\`:</span>
<span class="token builtin class-name">command</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-f</span> path/to/script.sed

<span class="token comment"># Replace all \`apple\` (extended regex) occurrences with \`APPLE\` (extended regex) in all input lines and print the result to \`stdout\`:</span>
<span class="token builtin class-name">command</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;s/(apple)/\\U\\1/g&#39;</span>

<span class="token comment"># Print just a first line to \`stdout\`:</span>
<span class="token builtin class-name">command</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;1p&#39;</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;29496,29516p&quot;</span> service.log

<span class="token comment"># Replace all \`apple\` (basic regex) occurrences with \`mango\` (basic regex) in a specific file and overwrite the original file in place:</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/apple/mango/g&#39;</span> path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>jq</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Execute a specific expression (print a colored and formatted json):</span>
<span class="token function">cat</span> path/to/file.json <span class="token operator">|</span> jq <span class="token string">&#39;.&#39;</span>

<span class="token comment"># Execute a specific script:</span>
<span class="token function">cat</span> path/to/file.json <span class="token operator">|</span> jq --from-file path/to/script.jq

<span class="token comment"># Pass specific arguments:</span>
<span class="token function">cat</span> path/to/file.json <span class="token operator">|</span> jq <span class="token parameter variable">--arg</span> <span class="token string">&quot;name1&quot;</span> <span class="token string">&quot;value1&quot;</span> <span class="token parameter variable">--arg</span> <span class="token string">&quot;name2&quot;</span> <span class="token string">&quot;value2&quot;</span> <span class="token punctuation">..</span>. <span class="token string">&#39;. + $ARGS.named&#39;</span>

<span class="token comment"># Print specific keys:</span>
<span class="token function">cat</span> path/to/file.json <span class="token operator">|</span> jq <span class="token string">&#39;.key1, .key2, ...&#39;</span>

<span class="token comment"># Print specific array items:</span>
<span class="token function">cat</span> path/to/file.json <span class="token operator">|</span> jq <span class="token string">&#39;.[index1], .[index2], ...&#39;</span>

<span class="token comment"># Print all array items/object keys:</span>
<span class="token function">cat</span> path/to/file.json <span class="token operator">|</span> jq <span class="token string">&#39;.[]&#39;</span>

<span class="token comment"># Add/remove specific keys:</span>
<span class="token function">cat</span> path/to/file.json <span class="token operator">|</span> jq <span class="token string">&#39;. +|- {&quot;key1&quot;: &quot;value1&quot;, &quot;key2&quot;: &quot;value2&quot;, ...}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>column</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Format the output of a command for a 30 characters wide display:</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;header1 header2<span class="token entity" title="\\n">\\n</span>bar foo<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">|</span> <span class="token function">column</span> --output-width <span class="token number">30</span>

<span class="token comment"># Split columns automatically and auto-align them in a tabular format:</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;header1 header2<span class="token entity" title="\\n">\\n</span>bar foo<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">|</span> <span class="token function">column</span> <span class="token parameter variable">--table</span>

<span class="token comment"># Specify the column delimiter character for the \`--table\` option (e.g. &quot;,&quot; for CSV) (defaults to whitespace):</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;header1,header2<span class="token entity" title="\\n">\\n</span>bar,foo<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">|</span> <span class="token function">column</span> <span class="token parameter variable">--table</span> <span class="token parameter variable">--separator</span> ,

<span class="token comment"># Fill rows before filling columns:</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;header1<span class="token entity" title="\\n">\\n</span>bar<span class="token entity" title="\\n">\\n</span>foobar<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">|</span> <span class="token function">column</span> --output-width <span class="token number">30</span> <span class="token parameter variable">--fillrows</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>cut</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Print a specific character/field range of each line:</span>
<span class="token builtin class-name">command</span> <span class="token operator">|</span> <span class="token function">cut</span> --characters<span class="token operator">|</span><span class="token assign-left variable">fields</span><span class="token operator">=</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">1,10</span><span class="token operator">|</span><span class="token number">1</span>-10<span class="token operator">|</span><span class="token number">1</span>-<span class="token operator">|</span>-10

<span class="token comment"># Print a range of each line with a specific delimiter:</span>
<span class="token builtin class-name">command</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">--delimiter</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span> <span class="token parameter variable">--fields</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># Print a range of each line of the specific file:</span>
<span class="token function">cut</span> <span class="token parameter variable">--characters</span><span class="token operator">=</span><span class="token number">1</span> path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>split</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Split a file, each split having 10 lines (except the last split):</span>
<span class="token function">split</span> <span class="token parameter variable">-l</span> <span class="token number">10</span> path/to/file

<span class="token comment"># Split a file into 5 files. File is split such that each split has same size (except the last split):</span>
<span class="token function">split</span> <span class="token parameter variable">-n</span> <span class="token number">5</span> path/to/file

<span class="token comment"># Split a file with 512 bytes in each split (except the last split; use 512k for kilobytes and 512m for megabytes):</span>
<span class="token function">split</span> <span class="token parameter variable">-b</span> <span class="token number">512</span> path/to/file

<span class="token comment"># Split a file with at most 512 bytes in each split without breaking lines:</span>
<span class="token function">split</span> <span class="token parameter variable">-C</span> <span class="token number">512</span> path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>join</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Join two files on the first (default) field:</span>
<span class="token function">join</span> file1 file2

<span class="token comment"># Join two files using a comma (instead of a space) as the field separator:</span>
<span class="token function">join</span> <span class="token parameter variable">-t</span> <span class="token string">&#39;,&#39;</span> file1 file2

<span class="token comment"># Join field3 of file1 with field1 of file2:</span>
<span class="token function">join</span> <span class="token parameter variable">-1</span> <span class="token number">3</span> <span class="token parameter variable">-2</span> <span class="token number">1</span> file1 file2

<span class="token comment"># Produce a line for each unpairable line for file1:</span>
<span class="token function">join</span> <span class="token parameter variable">-a</span> <span class="token number">1</span> file1 file2

<span class="token comment"># Join a file from \`stdin\`:</span>
<span class="token function">cat</span> path/to/file1 <span class="token operator">|</span> <span class="token function">join</span><span class="token comment"># path/to/file2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>sort</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Sort a file in ascending order:</span>
<span class="token function">sort</span> path/to/file

<span class="token comment"># Sort a file in descending order:</span>
<span class="token function">sort</span> <span class="token parameter variable">--reverse</span> path/to/file

<span class="token comment"># Sort a file in case-insensitive way:</span>
<span class="token function">sort</span> --ignore-case path/to/file

<span class="token comment"># Sort a file using numeric rather than alphabetic order:</span>
<span class="token function">sort</span> --numeric-sort path/to/file

<span class="token comment"># Sort \`/etc/passwd\` by the 3rd field of each line numerically, using &quot;:&quot; as a field separator:</span>
<span class="token function">sort</span> --field-separator<span class="token operator">=</span>: <span class="token parameter variable">--key</span><span class="token operator">=</span>3n /etc/passwd

<span class="token comment"># Sort a file preserving only unique lines:</span>
<span class="token function">sort</span> <span class="token parameter variable">--unique</span> path/to/file

<span class="token comment"># Sort a file, printing the output to the specified output file (can be used to sort a file in-place):</span>
<span class="token function">sort</span> <span class="token parameter variable">--output</span><span class="token operator">=</span>path/to/file path/to/file

<span class="token comment"># Sort numbers with exponents:</span>
<span class="token function">sort</span> --general-numeric-sort path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>uniq</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display each line once:</span>
<span class="token function">sort</span> path/to/file <span class="token operator">|</span> <span class="token function">uniq</span>

<span class="token comment"># Display only unique lines:</span>
<span class="token function">sort</span> path/to/file <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-u</span>

<span class="token comment"># Display only duplicate lines:</span>
<span class="token function">sort</span> path/to/file <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-d</span>

<span class="token comment"># Display number of occurrences of each line along with that line:</span>
<span class="token function">sort</span> path/to/file <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>

<span class="token comment"># Display number of occurrences of each line, sorted by the most frequent:</span>
<span class="token function">sort</span> path/to/file <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>tr</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Replace all occurrences of a character in a file, and print the result:</span>
<span class="token function">tr</span> find_character replace_character <span class="token operator">&lt;</span> path/to/file

<span class="token comment"># Replace all occurrences of a character from another command&#39;s output:</span>
<span class="token builtin class-name">echo</span> text <span class="token operator">|</span> <span class="token function">tr</span> find_character replace_character

<span class="token comment"># Map each character of the first set to the corresponding character of the second set:</span>
<span class="token function">tr</span> <span class="token string">&#39;abcd&#39;</span> <span class="token string">&#39;jkmn&#39;</span> <span class="token operator">&lt;</span> path/to/file

<span class="token comment"># Delete all occurrences of the specified set of characters from the input:</span>
<span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;input_characters&#39;</span> <span class="token operator">&lt;</span> path/to/file

<span class="token comment"># Compress a series of identical characters to a single character:</span>
<span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;input_characters&#39;</span> <span class="token operator">&lt;</span> path/to/file

<span class="token comment"># Translate the contents of a file to upper-case:</span>
<span class="token function">tr</span> <span class="token string">&quot;[:lower:]&quot;</span> <span class="token string">&quot;[:upper:]&quot;</span> <span class="token operator">&lt;</span> path/to/file

<span class="token comment"># Strip out non-printable characters from a file:</span>
<span class="token function">tr</span> <span class="token parameter variable">-cd</span> <span class="token string">&quot;[:print:]&quot;</span> <span class="token operator">&lt;</span> path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>wc</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Count all lines in a file:</span>
<span class="token function">wc</span> <span class="token parameter variable">-l</span> path/to/file

<span class="token comment"># Count all words in a file:</span>
<span class="token function">wc</span> <span class="token parameter variable">-w</span> path/to/file

<span class="token comment"># Count all bytes in a file:</span>
<span class="token function">wc</span> <span class="token parameter variable">-c</span> path/to/file

<span class="token comment"># Count all characters in a file (taking multi-byte characters into account):</span>
<span class="token function">wc</span> <span class="token parameter variable">-m</span> path/to/file

<span class="token comment"># Count all lines, words and bytes from \`stdin\`:</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">wc</span>

<span class="token comment"># Count the length of the longest line in number of characters:</span>
<span class="token function">wc</span> --max-line-length path/to/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>xargs</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Run a command using the input data as arguments:</span>
arguments_source <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token builtin class-name">command</span>

<span class="token comment"># Run multiple chained commands on the input data:</span>
arguments_source <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;command1 &amp;&amp; command2 | command3&quot;</span>

<span class="token comment"># Delete all files with a \`.backup\` extension (\`-print0\` uses a null character to split file names, and \`-0\` uses it as delimiter):</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.backup&#39;</span> <span class="token parameter variable">-print0</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token function">rm</span> <span class="token parameter variable">-v</span>

<span class="token comment"># Execute the command once for each input line, replacing any occurrences of the placeholder (here marked as \`_\`) with the input line:</span>
arguments_source <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-I</span> _ <span class="token builtin class-name">command</span> _ optional_extra_arguments

<span class="token comment"># Parallel runs of up to \`max-procs\` processes at a time; the default is 1. If \`max-procs\` is 0, xargs will run as many processes as possible at a time:</span>
arguments_source <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-P</span> max-procs <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),l=[t];function c(o,p){return s(),a("div",null,l)}const d=n(i,[["render",c],["__file","stream.html.vue"]]);export{d as default};
