const n=JSON.parse('{"key":"v-0d3f70d2","path":"/Box/docker-compose.html","title":"docker-compose","lang":"zh-CN","frontmatter":{"category":"Box","created":1682559590262,"desc":"","id":"2qk9bp379ihkcjmi9xcxac9","title":"docker-compose","updated":1682560644022,"description":"docker-compose文档 version: \\"3.9\\" services: srv_name: image: awesome/backend container_name: srv_name restart: unless-stopped # always # 环境变量设置 environment: TZ: \\"Asia/Shanghai\\" # env_file: ./docker.env # 数据卷设置 volumes: - ${PWD}/data:/app/data - database-data:/app/data2 # 网络设置 networks: - internal # network_mode: \\"host\\" # 端口映射 ports: - 9001:6412 # 执行命令 # command: [\\"redis-server\\", \\"/redis.conf\\"] # 依赖顺序 # depends_on: # - redis networks: internal: driver: bridge name: vanblog-network nginx: external: true volumes: database-data:","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Box/docker-compose.html"}],["meta",{"property":"og:site_name","content":"Kevin2li\'s Blog"}],["meta",{"property":"og:title","content":"docker-compose"}],["meta",{"property":"og:description","content":"docker-compose文档 version: \\"3.9\\" services: srv_name: image: awesome/backend container_name: srv_name restart: unless-stopped # always # 环境变量设置 environment: TZ: \\"Asia/Shanghai\\" # env_file: ./docker.env # 数据卷设置 volumes: - ${PWD}/data:/app/data - database-data:/app/data2 # 网络设置 networks: - internal # network_mode: \\"host\\" # 端口映射 ports: - 9001:6412 # 执行命令 # command: [\\"redis-server\\", \\"/redis.conf\\"] # 依赖顺序 # depends_on: # - redis networks: internal: driver: bridge name: vanblog-network nginx: external: true volumes: database-data:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-27T13:22:25.000Z"}],["meta",{"property":"article:author","content":"Kevin2li"}],["meta",{"property":"article:modified_time","content":"2023-04-27T13:22:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker-compose\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-27T13:22:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kevin2li\\",\\"url\\":\\"https://blog.kevin2li.top\\"}]}"]]},"headers":[],"git":{"createdTime":1682567970000,"updatedTime":1682601745000,"contributors":[{"name":"kevin2li","email":"kevin2li@qq.com","commits":2}]},"readingTime":{"minutes":0.34,"words":102},"filePathRelative":"Box/docker-compose.md","localizedDate":"2023年4月27日","excerpt":"<p><a href=\\"https://docs.docker.com/compose/compose-file/05-services/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">docker-compose文档</a></p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">version</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"3.9\\"</span>\\n\\n<span class=\\"token key atrule\\">services</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">srv_name</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> awesome/backend\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> srv_name\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> unless<span class=\\"token punctuation\\">-</span>stopped <span class=\\"token comment\\"># always</span>\\n    \\n    <span class=\\"token comment\\"># 环境变量设置</span>\\n    <span class=\\"token key atrule\\">environment</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token key atrule\\">TZ</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"Asia/Shanghai\\"</span>\\n\\n    <span class=\\"token comment\\"># env_file: ./docker.env</span>\\n\\n    <span class=\\"token comment\\"># 数据卷设置</span>\\n    <span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> $<span class=\\"token punctuation\\">{</span>PWD<span class=\\"token punctuation\\">}</span>/data<span class=\\"token punctuation\\">:</span>/app/data\\n      <span class=\\"token punctuation\\">-</span> database<span class=\\"token punctuation\\">-</span>data<span class=\\"token punctuation\\">:</span>/app/data2\\n\\n    <span class=\\"token comment\\"># 网络设置 </span>\\n    <span class=\\"token key atrule\\">networks</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> internal\\n    <span class=\\"token comment\\"># network_mode: \\"host\\"</span>\\n    \\n    <span class=\\"token comment\\"># 端口映射</span>\\n    <span class=\\"token key atrule\\">ports</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> 9001<span class=\\"token punctuation\\">:</span><span class=\\"token number\\">6412</span>\\n\\n    <span class=\\"token comment\\"># 执行命令</span>\\n    <span class=\\"token comment\\"># command: [\\"redis-server\\", \\"/redis.conf\\"]</span>\\n\\n    <span class=\\"token comment\\"># 依赖顺序</span>\\n    <span class=\\"token comment\\"># depends_on:</span>\\n    <span class=\\"token comment\\">#   - redis</span>\\n\\n<span class=\\"token key atrule\\">networks</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">internal</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">driver</span><span class=\\"token punctuation\\">:</span> bridge\\n    <span class=\\"token key atrule\\">name</span><span class=\\"token punctuation\\">:</span> vanblog<span class=\\"token punctuation\\">-</span>network\\n  <span class=\\"token key atrule\\">nginx</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">external</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean important\\">true</span>\\n\\n<span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">database-data</span><span class=\\"token punctuation\\">:</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};