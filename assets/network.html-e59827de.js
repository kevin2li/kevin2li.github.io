import{_ as n,W as s,X as a,a1 as e}from"./framework-c9619a7b.js";const i={},l=e(`<h3 id="基本网络配置" tabindex="-1"><a class="header-anchor" href="#基本网络配置" aria-hidden="true">#</a> 基本网络配置</h3><ul><li><code>ping</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Ping host:</span>
<span class="token function">ping</span> <span class="token function">host</span>

<span class="token comment"># Ping a host only a specific number of times:</span>
<span class="token function">ping</span> <span class="token parameter variable">-c</span> count <span class="token function">host</span>

<span class="token comment"># Ping host, specifying the interval in seconds between requests (default is 1 second):</span>
<span class="token function">ping</span> <span class="token parameter variable">-i</span> seconds <span class="token function">host</span>

<span class="token comment"># Ping host without trying to lookup symbolic names for addresses:</span>
<span class="token function">ping</span> <span class="token parameter variable">-n</span> <span class="token function">host</span>

<span class="token comment"># Ping host and ring the bell when a packet is received (if your terminal supports it):</span>
<span class="token function">ping</span> <span class="token parameter variable">-a</span> <span class="token function">host</span>

<span class="token comment"># Also display a message if no response was received:</span>
<span class="token function">ping</span> <span class="token parameter variable">-O</span> <span class="token function">host</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ifconfig</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># View network settings of an Ethernet adapter:</span>
<span class="token function">ifconfig</span> eth0

<span class="token comment"># Display details of all interfaces, including disabled interfaces:</span>
<span class="token function">ifconfig</span> <span class="token parameter variable">-a</span>

<span class="token comment"># Disable eth0 interface:</span>
<span class="token function">ifconfig</span> eth0 down

<span class="token comment"># Enable eth0 interface:</span>
<span class="token function">ifconfig</span> eth0 up

<span class="token comment"># Assign IP address to eth0 interface:</span>
<span class="token function">ifconfig</span> eth0 ip_address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ip</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List interfaces with detailed info:</span>
<span class="token function">ip</span> address

<span class="token comment"># List interfaces with brief network layer info:</span>
<span class="token function">ip</span> <span class="token parameter variable">-brief</span> address

<span class="token comment"># List interfaces with brief link layer info:</span>
<span class="token function">ip</span> <span class="token parameter variable">-brief</span> <span class="token function">link</span>

<span class="token comment"># Display the routing table:</span>
<span class="token function">ip</span> route

<span class="token comment"># Show neighbors (ARP table):</span>
<span class="token function">ip</span> neighbour

<span class="token comment"># Make an interface up/down:</span>
<span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> interface up/down

<span class="token comment"># Add/Delete an IP address to an interface:</span>
<span class="token function">ip</span> addr add/del ip/mask dev interface

<span class="token comment"># Add a default route:</span>
<span class="token function">ip</span> route <span class="token function">add</span> default via <span class="token function">ip</span> dev interface

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>route</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Display the information of route table:</span>
route <span class="token parameter variable">-n</span>

<span class="token comment"># Add route rule:</span>
<span class="token function">sudo</span> route <span class="token function">add</span> <span class="token parameter variable">-net</span> ip_address netmask netmask_address gw gw_address

<span class="token comment"># Delete route rule:</span>
<span class="token function">sudo</span> route del <span class="token parameter variable">-net</span> ip_address netmask netmask_address dev gw_address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>traceroute</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Traceroute to a host:</span>
<span class="token function">traceroute</span> <span class="token function">host</span>

<span class="token comment"># Disable IP address and host name mapping:</span>
<span class="token function">traceroute</span> <span class="token parameter variable">-n</span> <span class="token function">host</span>

<span class="token comment"># Specify wait time for response:</span>
<span class="token function">traceroute</span> <span class="token parameter variable">-w</span> <span class="token number">0.5</span> <span class="token function">host</span>

<span class="token comment"># Specify number of queries per hop:</span>
<span class="token function">traceroute</span> <span class="token parameter variable">-q</span> <span class="token number">5</span> <span class="token function">host</span>

<span class="token comment"># Specify size in bytes of probing packet:</span>
<span class="token function">traceroute</span> <span class="token function">host</span> <span class="token number">42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>lsof</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Find the processes that have a given file open:</span>
<span class="token function">lsof</span> path/to/file

<span class="token comment"># Find the process that opened a local internet port:</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i</span> :port

<span class="token comment"># Only output the process ID (PID):</span>
<span class="token function">lsof</span> <span class="token parameter variable">-t</span> path/to/file

<span class="token comment"># List files opened by the given user:</span>
<span class="token function">lsof</span> <span class="token parameter variable">-u</span> username

<span class="token comment"># List files opened by the given command or process:</span>
<span class="token function">lsof</span> <span class="token parameter variable">-c</span> process_or_command_name

<span class="token comment"># List files opened by a specific process, given its PID:</span>
<span class="token function">lsof</span> <span class="token parameter variable">-p</span> PID

<span class="token comment"># List open files in a directory:</span>
<span class="token function">lsof</span> +D path/to/directory

<span class="token comment"># Find the process that is listening on a local IPv6 TCP port and don&#39;t convert network or port numbers:</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i6TCP:port</span> <span class="token parameter variable">-sTCP:LISTEN</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-P</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>netstat</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List all ports:</span>
<span class="token function">netstat</span> <span class="token parameter variable">--all</span>

<span class="token comment"># List all listening ports:</span>
<span class="token function">netstat</span> <span class="token parameter variable">--listening</span>

<span class="token comment"># List listening TCP ports:</span>
<span class="token function">netstat</span> <span class="token parameter variable">--tcp</span>

<span class="token comment"># Display PID and program names:</span>
<span class="token function">netstat</span> <span class="token parameter variable">--program</span>

<span class="token comment"># List information continuously:</span>
<span class="token function">netstat</span> <span class="token parameter variable">--continuous</span>

<span class="token comment"># List routes and do not resolve IP addresses to hostnames:</span>
<span class="token function">netstat</span> <span class="token parameter variable">--route</span> <span class="token parameter variable">--numeric</span>

<span class="token comment"># List listening TCP and UDP ports (+ user and process if you&#39;re root):</span>
<span class="token function">netstat</span> <span class="token parameter variable">--listening</span> <span class="token parameter variable">--program</span> <span class="token parameter variable">--numeric</span> <span class="token parameter variable">--tcp</span> <span class="token parameter variable">--udp</span> <span class="token parameter variable">--extend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙" aria-hidden="true">#</a> 防火墙</h3><ul><li><code>firewall-cmd</code></li></ul><blockquote><p>详见：[[Box.x.Linux防火墙设置-firewalld使用教程]]</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># View the available firewall zones:</span>
firewall-cmd --get-active-zones

<span class="token comment"># View the rules which are currently applied:</span>
firewall-cmd --list-all

<span class="token comment"># Permanently move the interface into the block zone, effectively blocking all communication:</span>
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>block --change-interface<span class="token operator">=</span>enp1s0

<span class="token comment"># Permanently open the port for a service in the specified zone (like port 443 when in the \`public\` zone):</span>
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-service<span class="token operator">=</span>https

<span class="token comment"># Permanently close the port for a service in the specified zone (like port 80 when in the \`public\` zone):</span>
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-service<span class="token operator">=</span>http

<span class="token comment"># Permanently open two arbitrary ports in the specified zone:</span>
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">25565</span>/tcp --add-port<span class="token operator">=</span><span class="token number">19132</span>/udp

<span class="token comment"># Reload firewalld to force rule changes to take effect:</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>iptables</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># View chains, rules, and packet/byte counters for the filter table:</span>
<span class="token function">sudo</span> iptables <span class="token parameter variable">-vnL</span>

<span class="token comment"># Set chain policy rule:</span>
<span class="token function">sudo</span> iptables <span class="token parameter variable">-P</span> chain rule

<span class="token comment"># Append rule to chain policy for IP:</span>
<span class="token function">sudo</span> iptables <span class="token parameter variable">-A</span> chain <span class="token parameter variable">-s</span> <span class="token function">ip</span> <span class="token parameter variable">-j</span> rule

<span class="token comment"># Append rule to chain policy for IP considering protocol and port:</span>
<span class="token function">sudo</span> iptables <span class="token parameter variable">-A</span> chain <span class="token parameter variable">-s</span> <span class="token function">ip</span> <span class="token parameter variable">-p</span> protocol <span class="token parameter variable">--dport</span> port <span class="token parameter variable">-j</span> rule

<span class="token comment"># Add a NAT rule to translate all traffic from the \`192.168.0.0/24\` subnet to the host&#39;s public IP:</span>
<span class="token function">sudo</span> iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.0.0/24 <span class="token parameter variable">-j</span> MASQUERADE

<span class="token comment"># Delete chain rule:</span>
<span class="token function">sudo</span> iptables <span class="token parameter variable">-D</span> chain rule_line_number

<span class="token comment"># Save iptables configuration of a given table to a file:</span>
<span class="token function">sudo</span> iptables-save <span class="token parameter variable">-t</span> tablename <span class="token operator">&gt;</span> path/to/iptables_file

<span class="token comment"># Restore iptables configuration from a file:</span>
<span class="token function">sudo</span> iptables-restore <span class="token operator">&lt;</span> path/to/iptables_file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抓包" tabindex="-1"><a class="header-anchor" href="#抓包" aria-hidden="true">#</a> 抓包</h3><ul><li><code>tcpdump</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># List available network interfaces:</span>
tcpdump <span class="token parameter variable">-D</span>

<span class="token comment"># Capture the traffic of a specific interface:</span>
tcpdump <span class="token parameter variable">-i</span> eth0

<span class="token comment"># Capture all TCP traffic showing contents (ASCII) in console:</span>
tcpdump <span class="token parameter variable">-A</span> tcp

<span class="token comment"># Capture the traffic from or to a host:</span>
tcpdump <span class="token function">host</span> www.example.com

<span class="token comment"># Capture the traffic from a specific interface, source, destination and destination port:</span>
tcpdump <span class="token parameter variable">-i</span> eth0 src <span class="token number">192.168</span>.1.1 and dst <span class="token number">192.168</span>.1.2 and dst port <span class="token number">80</span>

<span class="token comment"># Capture the traffic of a network:</span>
tcpdump net <span class="token number">192.168</span>.1.0/24

<span class="token comment"># Capture all traffic except traffic over port 22 and save to a dump file:</span>
tcpdump <span class="token parameter variable">-w</span> dumpfile.pcap port not <span class="token number">22</span>

<span class="token comment"># Read from a given dump file:</span>
tcpdump <span class="token parameter variable">-r</span> dumpfile.pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>tshark</code></li></ul><h3 id="扫描" tabindex="-1"><a class="header-anchor" href="#扫描" aria-hidden="true">#</a> 扫描</h3><ul><li><code>nmap</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nmap

<span class="token comment"># 端口扫描</span>
<span class="token function">sudo</span> nmap <span class="token parameter variable">-Pn</span> <span class="token number">192.168</span>.2.121
nmap <span class="token parameter variable">-sV</span> <span class="token parameter variable">-p</span> <span class="token number">1</span>-65535 <span class="token number">192.168</span>.1.1/24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>ncat</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Connect to example.org on TCP port 8080.</span>
ncat example.org <span class="token number">8080</span>

<span class="token comment"># Listen for connections on TCP port 8080.</span>
ncat <span class="token parameter variable">-l</span> <span class="token number">8080</span>

<span class="token comment"># Redirect TCP port 8080 on the local machine to host on port 80.</span>
ncat --sh-exec <span class="token string">&quot;ncat example.org 80&quot;</span> <span class="token parameter variable">-l</span> <span class="token number">8080</span> --keep-open

<span class="token comment"># Bind to TCP port 8081 and attach /bin/bash for the world to access freely.</span>
ncat <span class="token parameter variable">--exec</span> <span class="token string">&quot;/bin/bash&quot;</span> <span class="token parameter variable">-l</span> <span class="token number">8081</span> --keep-open

<span class="token comment"># Bind a shell to TCP port 8081, limit access to hosts on a local network, and limit the maximum number of simultaneous connections to 3.</span>
ncat <span class="token parameter variable">--exec</span> <span class="token string">&quot;/bin/bash&quot;</span> --max-conns <span class="token number">3</span> <span class="token parameter variable">--allow</span> <span class="token number">192.168</span>.0.0/24 <span class="token parameter variable">-l</span> <span class="token number">8081</span> --keep-open

<span class="token comment"># Connect to smtphost:25 through a SOCKS4 server on port 1080.</span>
ncat <span class="token parameter variable">--proxy</span> socks4host --proxy-type socks4 --proxy-auth joe smtphost <span class="token number">25</span>

<span class="token comment"># Connect to smtphost:25 through a SOCKS5 server on port 1080.</span>
ncat <span class="token parameter variable">--proxy</span> socks5host --proxy-type socks5 --proxy-auth joe:secret smtphost <span class="token number">25</span>

<span class="token comment"># Create an HTTP proxy server on localhost port 8888.</span>
ncat <span class="token parameter variable">-l</span> --proxy-type http localhost <span class="token number">8888</span>

<span class="token comment"># Send a file over TCP port 9899 from host2 (client) to host1 (server).</span>
HOST1$ ncat <span class="token parameter variable">-l</span> <span class="token number">9899</span> <span class="token operator">&gt;</span> outputfile

HOST2$ ncat HOST1 <span class="token number">9899</span> <span class="token operator">&lt;</span> inputfile

<span class="token comment"># Transfer in the other direction, turning Ncat into a “one file” server.</span>
HOST1$ ncat <span class="token parameter variable">-l</span> <span class="token number">9899</span> <span class="token operator">&lt;</span> inputfile
HOST2$ ncat HOST1 <span class="token number">9899</span> <span class="token operator">&gt;</span> outputfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>nc</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Open a TCP connection to port 42 of host.example.com, using port 31337 as the source port, with a timeout of 5 seconds:</span>
<span class="token function">nc</span> <span class="token parameter variable">-p</span> <span class="token number">31337</span> <span class="token parameter variable">-w</span> <span class="token number">5</span> host.example.com <span class="token number">42</span>

<span class="token comment"># Open a UDP connection to port 53 of host.example.com:</span>
<span class="token function">nc</span> <span class="token parameter variable">-u</span> host.example.com <span class="token number">53</span>

<span class="token comment"># Open a TCP connection to port 42 of host.example.com using 10.1.2.3 as the IP for the local end of the connection:</span>
<span class="token function">nc</span> <span class="token parameter variable">-s</span> <span class="token number">10.1</span>.2.3 host.example.com <span class="token number">42</span>

<span class="token comment"># Create and listen on a UNIX-domain stream socket:</span>
<span class="token function">nc</span> <span class="token parameter variable">-lU</span> /var/tmp/dsocket

<span class="token comment"># Connect to port 42 of host.example.com via an HTTP proxy at 10.2.3.4, port 8080.  This example could also be used by ssh(1); see the ProxyCommand directive in ssh_config(5) for more information.</span>
<span class="token function">nc</span> -x10.2.3.4:8080 <span class="token parameter variable">-Xconnect</span> host.example.com <span class="token number">42</span>

<span class="token comment"># The same example again, this time enabling proxy authentication with username “ruser” if the proxy requires it:</span>
<span class="token function">nc</span> -x10.2.3.4:8080 <span class="token parameter variable">-Xconnect</span> <span class="token parameter variable">-Pruser</span> host.example.com <span class="token number">42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3><ul><li><code>wget</code></li><li><code>curl</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 携带数据</span>
<span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;name=curl&quot;</span> https://example.com
<span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;name=curl&quot;</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;tool=cmdline&quot;</span> https://example.com

<span class="token comment"># 表单数据(Content-Type multipart/form-data)</span>
<span class="token function">curl</span> <span class="token parameter variable">-F</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>John <span class="token parameter variable">-F</span> <span class="token assign-left variable">shoesize</span><span class="token operator">=</span><span class="token number">11</span> https://example.com/
<span class="token function">curl</span> <span class="token parameter variable">-F</span> <span class="token assign-left variable">profile</span><span class="token operator">=</span>@portrait.jpg https://example.com/upload.cgi
 
<span class="token comment"># POST请求</span>
<span class="token function">curl</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;channel&quot;:&quot;4&quot;,&quot;ifautologin&quot;:&quot;0&quot;,&quot;pagesign&quot;:&quot;secondauth&quot;}&#39;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token parameter variable">-X</span> POST http://10.255.255.34/api/v1/login

<span class="token comment"># 下载保存</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> output.html http://example.com/
<span class="token function">curl</span> <span class="token parameter variable">-O</span> http://example.com/file.html

<span class="token comment"># 自动重定向</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://example.com

<span class="token comment"># 使用代理</span>
<span class="token function">curl</span> <span class="token parameter variable">-x</span> socks5://192.168.2.1:10080 https://www.baidu.com
<span class="token function">curl</span> <span class="token parameter variable">-x</span> http://user:password@proxy.example.com:8080 http://www.example.com
<span class="token function">curl</span> <span class="token parameter variable">-U</span> daniel:secr3t <span class="token parameter variable">-x</span> myproxy:80 http://example.com
<span class="token function">curl</span> --proxy-header <span class="token string">&quot;User-Agent: magic/3000&quot;</span> <span class="token parameter variable">-x</span> proxy https://example.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>axel</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Download a URL to a file:</span>
axel url

<span class="token comment"># Download and specify filename:</span>
axel url <span class="token parameter variable">-o</span> path/to/file

<span class="token comment"># Download with multiple connections:</span>
axel <span class="token parameter variable">-n</span> connections_num url

<span class="token comment"># Search for mirrors:</span>
axel <span class="token parameter variable">-S</span> mirrors_num url

<span class="token comment"># Limit download speed (bytes per second):</span>
axel <span class="token parameter variable">-s</span> speed url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监控流量" tabindex="-1"><a class="header-anchor" href="#监控流量" aria-hidden="true">#</a> 监控流量</h3><ul><li><code>iftop</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Show the bandwidth usage:</span>
<span class="token function">sudo</span> iftop

<span class="token comment"># Show the bandwidth usage of a given interface:</span>
<span class="token function">sudo</span> iftop <span class="token parameter variable">-i</span> interface

<span class="token comment"># Show the bandwidth usage with port information:</span>
<span class="token function">sudo</span> iftop <span class="token parameter variable">-P</span>

<span class="token comment"># Do not show bar graphs of traffic:</span>
<span class="token function">sudo</span> iftop <span class="token parameter variable">-b</span>

<span class="token comment"># Do not look up hostnames:</span>
<span class="token function">sudo</span> iftop <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><figure><img src="https://minio.kevin2li.top/image-bed/vanblog/img/c3347f697509e1a47e9cb8159b831999.image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>`,42),t=[l];function c(o,p){return s(),a("div",null,t)}const d=n(i,[["render",c],["__file","network.html.vue"]]);export{d as default};
