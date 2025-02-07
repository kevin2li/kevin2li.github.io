"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9744],{2980:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"anki-toolbox/zotero_card/sync/self_hosted/\u8fdb\u9636\u4f7f\u7528","title":"\u8fdb\u9636\u4f7f\u7528","description":"\u5728\u4e0a\u7bc7\u6559\u7a0b\u4e2d\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528http\u534f\u8bae\u8fdb\u884cZotero\u540c\u6b65\uff0c\u4f46\u662f\u8fd9\u79cd\u65b9\u5f0f\u5b89\u5168\u6027\u8f83\u4f4e\uff0c\u5728Zotero\u7684iOS\u5ba2\u6237\u7aef\u4e2d\u5df2\u7ecf\u5f3a\u5236\u8981\u6c42\u5fc5\u987b\u4f7f\u7528https\u534f\u8bae\u8fdb\u884c\u540c\u6b65\u3002","source":"@site/docs/anki-toolbox/zotero_card/sync/self_hosted/\u8fdb\u9636\u4f7f\u7528.md","sourceDirName":"anki-toolbox/zotero_card/sync/self_hosted","slug":"/anki-toolbox/zotero_card/sync/self_hosted/advanced","permalink":"/docs/anki-toolbox/zotero_card/sync/self_hosted/advanced","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/anki-toolbox/zotero_card/sync/self_hosted/\u8fdb\u9636\u4f7f\u7528.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"slug":"advanced","sidebar_position":2,"title":"\u8fdb\u9636\u4f7f\u7528"},"sidebar":"tutorialSidebar","previous":{"title":"\u5feb\u901f\u5165\u95e8","permalink":"/docs/anki-toolbox/zotero_card/sync/self_hosted/quick-start"},"next":{"title":"\u4f7f\u7528\u575a\u679c\u4e91\u8fdb\u884c\u540c\u6b65","permalink":"/docs/anki-toolbox/zotero_card/sync/jianguoyun"}}');var i=s(4848),d=s(8453),r=s(1470),l=s(9365);const c={slug:"advanced",sidebar_position:2,title:"\u8fdb\u9636\u4f7f\u7528"},a=void 0,o={},h=[{value:"\u57df\u540d\u8d2d\u4e70",id:"\u57df\u540d\u8d2d\u4e70",level:2},{value:"\u57df\u540d\u89e3\u6790",id:"\u57df\u540d\u89e3\u6790",level:2},{value:"\u57df\u540d\u5907\u6848",id:"\u57df\u540d\u5907\u6848",level:2},{value:"\u53cd\u5411\u4ee3\u7406",id:"\u53cd\u5411\u4ee3\u7406",level:2},{value:"Caddy\u5b89\u88c5",id:"caddy\u5b89\u88c5",level:3},{value:"DNS API\u5bc6\u94a5\u83b7\u53d6",id:"dns-api\u5bc6\u94a5\u83b7\u53d6",level:3},{value:"Caddyfile\u914d\u7f6e",id:"caddyfile\u914d\u7f6e",level:3},{value:"Zotero\u914d\u7f6e",id:"zotero\u914d\u7f6e",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.a,{href:"/docs/anki-toolbox/zotero_card/sync/self_hosted/quick-start",children:"\u4e0a\u7bc7\u6559\u7a0b"}),"\u4e2d\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528",(0,i.jsx)(n.strong,{children:"http"}),"\u534f\u8bae\u8fdb\u884cZotero\u540c\u6b65\uff0c\u4f46\u662f\u8fd9\u79cd\u65b9\u5f0f\u5b89\u5168\u6027\u8f83\u4f4e\uff0c\u5728Zotero\u7684iOS\u5ba2\u6237\u7aef\u4e2d\u5df2\u7ecf\u5f3a\u5236\u8981\u6c42\u5fc5\u987b\u4f7f\u7528",(0,i.jsx)(n.strong,{children:"https"}),"\u534f\u8bae\u8fdb\u884c\u540c\u6b65\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u671f\u6559\u7a0b\u4ecb\u7ecd\u5982\u4f55\u642d\u5efa",(0,i.jsx)(n.strong,{children:"https"}),"\u670d\u52a1\u5668\u5b9e\u73b0Zotero\u7684\u591a\u8bbe\u5907\u540c\u6b65\u3002"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,i.jsxs)(n.p,{children:["\u672c\u6559\u7a0b\u4ee5",(0,i.jsx)(n.code,{children:"example.com"}),"\u4f5c\u4e3a\u793a\u4f8b\u57df\u540d\uff0c\u7528\u6237\u9700\u8981\u81ea\u884c\u5c06\u6240\u6709\u5730\u65b9\u51fa\u73b0\u7684",(0,i.jsx)(n.code,{children:"example.com"}),"\u4fee\u6539\u4e3a\u81ea\u5df1\u7684\u5b9e\u9645\u57df\u540d\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u57df\u540d\u8d2d\u4e70",children:"\u57df\u540d\u8d2d\u4e70"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u4f7f\u7528https\u8bbf\u95ee\uff0c\u4f60\u9700\u8981\u5148\u7533\u8bf7\u4e00\u4e2a\u57df\u540d\uff0c\u4f8b\u5982",(0,i.jsx)(n.code,{children:"example.com"}),"\u3002\u4e0b\u9762\u5217\u4e3e\u4e00\u4e9b\u5e38\u7528\u7684\u57df\u540d\u670d\u52a1\u63d0\u4f9b\u5546\uff0c\u7528\u6237\u53ef\u81ea\u884c\u9009\u62e9\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://wanwang.aliyun.com/domain/tld#.com",children:"\u963f\u91cc\u4e91"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cloud.tencent.com/act/pro/domain-sale?fromSource=gwzcw.7849480.7849480.7849480&utm_medium=cpc&utm_id=gwzcw.7849480.7849480.7849480&msclkid=405dbe62d20917f3fc97d88c41562b59",children:"\u817e\u8baf\u4e91"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://activity.huaweicloud.com/domain1.html?utm_source=bing&utm_medium=se-cpc-op&utm_campaign=&utm_content=&utm_term=%E5%9F%9F%E5%90%8D%E8%B4%AD%E4%B9%B0&utm_adplace=AdPlace088896&msclkid=853d1490e03d195a05fd727e73625d9a",children:"\u534e\u4e3a\u4e91"})}),"\n",(0,i.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u822c\u5efa\u8bae\u4f60\u7684\u4e91\u670d\u52a1\u5668\u662f\u54ea\u5bb6\u7684\uff0c\u5c31\u9009\u62e9\u54ea\u5bb6\u7684\u57df\u540d\u670d\u52a1\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u57df\u540d\u89e3\u6790",children:"\u57df\u540d\u89e3\u6790"}),"\n",(0,i.jsxs)(n.p,{children:["\u57df\u540d\u8d2d\u4e70\u540e\uff0c\u53ef\u4ee5\u5728",(0,i.jsx)(n.strong,{children:"\u57df\u540d\u63a7\u5236\u53f0"}),"\u4e2d\u5c06\u57df\u540d\u89e3\u6790\u5230\u4f60\u7684\u4e91\u670d\u52a1\u5668\u7684",(0,i.jsx)(n.strong,{children:"\u516c\u7f51IP"}),"\u4e0a\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\u5c06",(0,i.jsx)(n.code,{children:"alist.example.com"}),"\u89e3\u6790\u5230\u4f60\u7684\u516c\u7f51IP\u4e0a\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u4ee5\u817e\u8baf\u4e91\u548c\u963f\u91cc\u4e91\u5206\u522b\u8fdb\u884c\u6f14\u793a\u3002"}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(l.A,{value:"dnspod",label:"\u817e\u8baf\u4e91\u57df\u540d",children:[(0,i.jsxs)(n.p,{children:["\u6253\u5f00",(0,i.jsx)(n.a,{href:"https://console.cloud.tencent.com/domain/all-domain/all",children:"\u817e\u8baf\u4e91\u57df\u540d\u63a7\u5236\u53f0"}),'\uff0c\u9009\u62e9\u81ea\u5df1\u7684\u57df\u540d\u53f3\u4fa7\u7684"\u89e3\u6790"\u6309\u94ae\u3002']}),(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922204736.png"}),(0,i.jsx)(n.p,{children:"\u6dfb\u52a0A\u7c7b\u578b\u89e3\u6790\u8bb0\u5f55,\u8bb0\u5f55\u503c\u586b\u5199\u516c\u7f51IP\u3002"}),(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922205116.png"})]}),(0,i.jsxs)(l.A,{value:"alidns",label:"\u963f\u91cc\u4e91\u57df\u540d",children:[(0,i.jsx)(n.p,{children:"\u6253\u5f00\u4e91\u89e3\u6790DNS\u63a7\u5236\u53f0\uff0c\u70b9\u51fb\u300e\u6dfb\u52a0\u8bb0\u5f55\u300f\u6309\u94ae\u3002"}),(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922004946.png"}),(0,i.jsx)(n.p,{children:"\u6dfb\u52a0A\u7c7b\u578b\u89e3\u6790\u8bb0\u5f55,\u8bb0\u5f55\u503c\u586b\u5199\u516c\u7f51IP\u3002"}),(0,i.jsx)("div",{style:{textAlign:"center",border:"1px solid #eee"},children:(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922004623.png"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u57df\u540d\u5907\u6848",children:"\u57df\u540d\u5907\u6848"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u80fd\u591f\u6b63\u5e38\u901a\u8fc7\u57df\u540d\u8bbf\u95ee\u4f60\u7684\u7f51\u7ad9\u6216\u670d\u52a1\uff0c\u4f60\u8fd8\u9700\u8981\u7ecf\u8fc7",(0,i.jsx)(n.strong,{children:"ICP\u5907\u6848"}),"\u548c",(0,i.jsx)(n.strong,{children:"\u516c\u5b89\u5907\u6848"}),"\uff0c\u5982\u5b9e\u586b\u5199\u4f60\u7684\u7f51\u7ad9\u7528\u9014\u3001\u8d1f\u8d23\u4eba\u7b49\u4fe1\u606f\u3002\u5907\u6848\u901a\u8fc7\u540e\u624d\u80fd\u6b63\u5e38\u4f7f\u7528\u57df\u540d\u3002\u8be6\u7ec6\u6b65\u9aa4\u53ef\u4ee5\u54a8\u8be2\u4f60\u7684\u57df\u540d\u670d\u52a1\u63d0\u4f9b\u5546\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u53cd\u5411\u4ee3\u7406",children:"\u53cd\u5411\u4ee3\u7406"}),"\n",(0,i.jsx)(n.p,{children:"\u53cd\u5411\u4ee3\u7406\uff0c\u533a\u522b\u4e8e\u4e00\u822c\u610f\u4e49\u4e0a\u7684\u4ee3\u7406(\u5373\u4f5c\u4e3a\u5ba2\u6237\u7aef\u7684\u4ee3\u7406)\uff0c\u53cd\u5411\u4ee3\u7406\u662f\u5bf9\u670d\u52a1\u7aef\u7684\u4ee3\u7406\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u524d\u9762\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u76f4\u63a5\u901a\u8fc7",(0,i.jsx)(n.strong,{children:"\u516c\u7f51IP"}),"\u7684\u65b9\u5f0f\u8bbf\u95eeweb\u670d\u52a1,\u4f8b\u5982",(0,i.jsx)(n.code,{children:"http://server-ip:5244"}),"\u3002\u4e3a\u4e86\u5b9e\u73b0\u57df\u540d\u8bbf\u95ee\uff0c\u8fd8\u9700\u8981\u914d\u7f6e\u4e0b\u53cd\u5411\u4ee3\u7406\uff0c\u5c06\u5bf9\u57df\u540d\u7684\u8bbf\u95ee\u8bf7\u6c42\u8f6c\u53d1\u5230\u4e3b\u673a\u5bf9\u5e94\u7aef\u53e3\u63d0\u4f9b\u7684\u670d\u52a1\u4e2d\u53bb\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u4f7f\u7528",(0,i.jsx)(n.a,{href:"https://caddyserver.com/docs/",children:"Caddy"}),"\u5de5\u5177\u6765\u914d\u7f6e\u53cd\u5411\u4ee3\u7406\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"caddy\u5b89\u88c5",children:"Caddy\u5b89\u88c5"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\u4e0b\u9762\u547d\u4ee4\u5b89\u88c5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl\ncurl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg\ncurl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list\nsudo apt update\nsudo apt install caddy\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u9a8c\u8bc1\u5b89\u88c5\u6210\u529f"})}),"\n",(0,i.jsx)(n.p,{children:"\u7ec8\u7aef\u4e2d\u8f93\u5165\u4e0b\u9762\u547d\u4ee4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"caddy version\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u51fa\u73b0\u7c7b\u4f3c\u4e0b\u9762\u63d0\u793a\uff0c\u8868\u793a\u5b89\u88c5\u6210\u529f\u3002"}),"\n",(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922002445.png"}),"\n",(0,i.jsx)(n.h3,{id:"dns-api\u5bc6\u94a5\u83b7\u53d6",children:"DNS API\u5bc6\u94a5\u83b7\u53d6"}),"\n",(0,i.jsxs)(n.p,{children:["\u8981\u5b9e\u73b0",(0,i.jsx)(n.strong,{children:"https"}),"\u8bbf\u95ee\uff0c\u9700\u8981\u6709\u57df\u540d\u8bc1\u4e66\u3002Caddy\u652f\u6301\u81ea\u52a8\u4ece",(0,i.jsx)(n.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"}),"\u6216",(0,i.jsx)(n.a,{href:"https://zerossl.com/",children:"ZeroSSL"}),"\u7533\u8bf7\u3001\u914d\u7f6e\u548c\u7eed\u671f\u514d\u8d39\u7684\u57df\u540d\u8bc1\u4e66\uff0c\u6bd4\u8f83\u65b9\u4fbf\u3002\u5f53\u7136\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e86\u57df\u540d\u8bc1\u4e66\uff0c\u4e5f\u53ef\u4ee5\u5728Caddy\u4e2d\u76f4\u63a5\u6307\u5b9a\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Caddy\u652f\u6301\u591a\u79cd\u81ea\u52a8\u7533\u8bf7\u8bc1\u4e66\u7684\u65b9\u5f0f\uff0c\u5982",(0,i.jsx)(n.strong,{children:"HTTP challenge"}),"\u548c",(0,i.jsx)(n.strong,{children:"DNS challenge"}),"\u7b49, \u8be6\u89c1\uff1a",(0,i.jsx)(n.a,{href:"https://caddyserver.com/docs/automatic-https",children:"Automatically HPPS | Caddy"}),"\u3002"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"}),"\u7684\u6cdb\u57df\u540d\u8bc1\u4e66\u53ea\u80fd\u901a\u8fc7",(0,i.jsx)(n.strong,{children:"DNS challenge"}),"\u65b9\u5f0f\u83b7\u53d6\u3002"]})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\u4f7f\u7528",(0,i.jsx)(n.strong,{children:"DNS challenge"}),"\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(l.A,{value:"dnspod",label:"\u817e\u8baf\u4e91\u57df\u540d",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5b89\u88c5\u5e26\u63d2\u4ef6\u7248\u672cCaddy"})}),(0,i.jsx)(n.p,{children:"\u524d\u9762\u5b89\u88c5\u7684Caddy\u662f\u6807\u51c6\u7248\u7684\uff0c\u5305\u542b\u5168\u90e8\u6838\u5fc3\u529f\u80fd\u3002\u4f46\u662fCaddy\u4e5f\u5305\u542b\u4e86\u4e30\u5bcc\u7684\u63d2\u4ef6\u751f\u6001\uff0c\u7528\u6765\u6269\u5c55\u5176\u529f\u80fd\u3002"}),(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\u8fd9\u91cc\u7533\u8bf7\u817e\u8baf\u4e91\u57df\u540d\u8bc1\u4e66\u5c31\u8981\u4f7f\u7528\u5230",(0,i.jsx)(n.a,{href:"https://github.com/caddy-dns/dnspod",children:"dns.providers.dnspod"}),"\u63d2\u4ef6\u63d0\u4f9b\u7684\u529f\u80fd\u3002"]}),(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u53bb",(0,i.jsx)(n.a,{href:"https://caddyserver.com/download",children:"Caddy\u5b98\u7f51"}),"\u4e0a\u4e0b\u8f7d\u5305\u542b\u8fd9\u4e2a\u63d2\u4ef6\u7684\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6\u3002"]}),(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240921235754.png"}),(0,i.jsx)("img-annotation",{children:"\u4e0b\u8f7d\u542bdnspod\u63d2\u4ef6\u7684Caddy"}),(0,i.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,i.jsxs)(n.p,{children:["\u65b9\u4fbf\u8d77\u89c1\uff0c\u8fd9\u91cc\u4e5f\u63d0\u4f9b\u4e86\u96c6\u6210\u4e86\u817e\u8baf\u4e91\u548c\u963f\u91cc\u4e91\u63d2\u4ef6\u7684Caddy\u7248\u672c\u4e0b\u8f7d\uff1a",(0,i.jsx)(n.a,{href:"https://pan.baidu.com/s/1Nyz54SWTzFqkBPuLDz8diw?pwd=dm2j",children:"Caddy_linux_amd64_dnspod_alidns | \u767e\u5ea6\u4e91"})]})}),(0,i.jsx)(n.p,{children:"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u5c06\u6587\u4ef6\u4e0a\u4f20\u5230\u4e91\u670d\u52a1\u5668\u4e0a, \u5e76\u66ff\u6362\u6389\u4e4b\u524d\u5b89\u88c5\u7684\u6807\u51c6\u7248Caddy\u3002"}),(0,i.jsx)(n.p,{children:"\u7ec8\u7aef\u4e2d\u4f9d\u6b21\u8f93\u5165\u4e0b\u9762\u547d\u4ee4\uff1a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",metastring:"showLineNumbers",children:"sudo systemctl stop caddy # \u505c\u6b62\u6b63\u5728\u8fd0\u884c\u7684Caddy\n// highlight-next-line\nsudo mv /path/to/new_caddy /usr/bin/caddy # \u5c06\u524d\u4e00\u4e2a\u8def\u5f84\u66ff\u6362\u4e3a\u4f60\u7684\u5e26\u63d2\u4ef6\u7248Caddy\u7684\u5b9e\u9645\u7edd\u5bf9\u8def\u5f84\nsudo systemctl start caddy # \u91cd\u65b0\u542f\u52a8Caddy\nsudo systemctl status caddy\n"})}),(0,i.jsx)(n.p,{children:"\u51fa\u73b0\u7c7b\u4f3c\u4e0b\u9762\u63d0\u793a\u8868\u793a\u542f\u52a8\u6210\u529f\u3002"}),(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922190046.png"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u83b7\u53d6DNS\u8bbf\u95ee\u5bc6\u94a5"})}),(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53c2\u8003\uff1a",(0,i.jsx)(n.a,{href:"https://support.dnspod.cn/account/dnspod-token/",children:"https://support.dnspod.cn/account/dnspod-token/"})]}),"\n"]}),(0,i.jsxs)(n.p,{children:["\u767b\u5f55",(0,i.jsx)(n.a,{href:"https://console.dnspod.cn/account",children:"DNSPod \u8d26\u53f7\u4e2d\u5fc3\u63a7\u5236\u53f0"}),",\u6309\u5982\u4e0b\u56fe\u6240\u793a\u521b\u5efaDNSPOD Token\u3002"]}),(0,i.jsx)("div",{style:{textAlign:"center",border:"1px solid #eee"},children:(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922174358.png"})}),(0,i.jsxs)(n.p,{children:["\u70b9\u51fb\u786e\u8ba4\u5c31\u4f1a\u5f39\u7a97\u544a\u77e5\u751f\u6210\u7684",(0,i.jsx)(n.code,{children:"ID"}),"\u548c",(0,i.jsx)(n.code,{children:"Token"}),"\uff0c\u8bb0\u5f55\u4e0b\u8fd9\u4e24\u4e2a\u503c\u540e\u9762\u4f1a\u7528\u5230\u3002"]}),(0,i.jsx)("div",{style:{textAlign:"center",border:"1px solid #eee"},children:(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922174451.png",width:"65%"})})]}),(0,i.jsxs)(l.A,{value:"alidns",label:"\u963f\u91cc\u4e91\u57df\u540d",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5b89\u88c5\u5e26\u63d2\u4ef6\u7248\u672cCaddy"})}),(0,i.jsx)(n.p,{children:"\u524d\u9762\u5b89\u88c5\u7684Caddy\u662f\u6807\u51c6\u7248\u7684\uff0c\u5305\u542b\u5168\u90e8\u6838\u5fc3\u529f\u80fd\u3002\u4f46\u662fCaddy\u4e5f\u5305\u542b\u4e86\u4e30\u5bcc\u7684\u63d2\u4ef6\u751f\u6001\uff0c\u7528\u6765\u6269\u5c55\u5176\u529f\u80fd\u3002"}),(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\u8fd9\u91cc\u7533\u8bf7\u963f\u91cc\u4e91\u57df\u540d\u8bc1\u4e66\u5c31\u8981\u4f7f\u7528\u5230",(0,i.jsx)(n.a,{href:"https://github.com/caddy-dns/alidns",children:"dns.providers.alidns"}),"\u63d2\u4ef6\u63d0\u4f9b\u7684\u529f\u80fd\u3002"]}),(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u53bb",(0,i.jsx)(n.a,{href:"https://caddyserver.com/download",children:"Caddy\u5b98\u7f51"}),"\u4e0a\u4e0b\u8f7d\u5305\u542b\u8fd9\u4e2a\u63d2\u4ef6\u7684\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6\u3002"]}),(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240921235949.png"}),(0,i.jsx)("img-annotation",{children:"\u4e0b\u8f7d\u542balidns\u63d2\u4ef6\u7684Caddy"}),(0,i.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,i.jsxs)(n.p,{children:["\u65b9\u4fbf\u8d77\u89c1\uff0c\u8fd9\u91cc\u4e5f\u63d0\u4f9b\u4e86\u96c6\u6210\u4e86\u817e\u8baf\u4e91\u548c\u963f\u91cc\u4e91\u63d2\u4ef6\u7684Caddy\u7248\u672c\u4e0b\u8f7d\uff1a",(0,i.jsx)(n.a,{href:"https://pan.baidu.com/s/1Nyz54SWTzFqkBPuLDz8diw?pwd=dm2j",children:"Caddy_linux_amd64_dnspod_alidns | \u767e\u5ea6\u4e91"})]})}),(0,i.jsx)(n.p,{children:"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u5c06\u6587\u4ef6\u4e0a\u4f20\u5230\u4e91\u670d\u52a1\u5668\u4e0a, \u5e76\u66ff\u6362\u6389\u4e4b\u524d\u5b89\u88c5\u7684\u6807\u51c6\u7248Caddy\u3002"}),(0,i.jsx)(n.p,{children:"\u7ec8\u7aef\u4e2d\u4f9d\u6b21\u8f93\u5165\u4e0b\u9762\u547d\u4ee4\uff1a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",metastring:"showLineNumbers",children:"sudo systemctl stop caddy # \u505c\u6b62\u6b63\u5728\u8fd0\u884c\u7684Caddy\n// highlight-next-line\nsudo mv /path/to/new_caddy /usr/bin/caddy # \u5c06\u524d\u4e00\u4e2a\u8def\u5f84\u66ff\u6362\u4e3a\u4f60\u7684\u5e26\u63d2\u4ef6\u7248Caddy\u7684\u5b9e\u9645\u7edd\u5bf9\u8def\u5f84\nsudo systemctl start caddy # \u91cd\u65b0\u542f\u52a8Caddy\nsudo systemctl status caddy\n"})}),(0,i.jsx)(n.p,{children:"\u51fa\u73b0\u7c7b\u4f3c\u4e0b\u9762\u63d0\u793a\u8868\u793a\u542f\u52a8\u6210\u529f\u3002"}),(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922190046.png"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u83b7\u53d6DNS\u8bbf\u95ee\u5bc6\u94a5"})}),(0,i.jsxs)(n.p,{children:["\u767b\u5f55",(0,i.jsx)(n.a,{href:"https://home.console.aliyun.com/",children:"\u963f\u91cc\u4e91\u63a7\u5236\u53f0"}),"\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u5934\u50cf\uff0c\u8fdb\u5165",(0,i.jsx)(n.code,{children:"AccessKey\u7ba1\u7406"}),"\u83dc\u5355\u3002"]}),(0,i.jsx)("div",{style:{textAlign:"center",border:"1px solid #eee"},children:(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240921210049.png",width:"50%"})}),(0,i.jsx)(n.p,{children:'\u70b9\u51fb"\u521b\u5efaAccessKey"\u6309\u94ae\u3002'}),(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240921210438.png"}),(0,i.jsxs)(n.p,{children:["\u4fdd\u7ba1\u597d\u751f\u6210\u7684",(0,i.jsx)(n.code,{children:"AccessKey ID"}),"\u548c",(0,i.jsx)(n.code,{children:"AccessKey Secret"}),"\uff0c\u540e\u9762\u4f1a\u7528\u5230\u3002"]}),(0,i.jsx)("div",{style:{textAlign:"center",border:"1px solid #eee"},children:(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240921211054.png",width:"85%"})})]}),(0,i.jsx)(l.A,{value:"other",label:"\u5176\u4ed6\u57df\u540d\u5382\u5546",children:(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u5176\u4ed6\u5382\u5546\u7684\u57df\u540d\uff0c\u53ef\u4ee5\u53bb",(0,i.jsx)(n.a,{href:"https://caddyserver.com/download",children:"Caddy\u5b98\u7f51"}),"\u4e0a\u641c\u7d22\u5bf9\u5e94\u5382\u5546\u7684dns\u540d\u79f0\uff0c\u67e5\u770b\u5bf9\u5e94\u7684\u5b89\u88c5\u4e0e\u914d\u7f6e\u65b9\u6cd5\u3002"]})})]}),"\n",(0,i.jsx)(n.h3,{id:"caddyfile\u914d\u7f6e",children:"Caddyfile\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Caddyfile"}),"\u662fCaddy\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4f4d\u4e8e",(0,i.jsx)(n.code,{children:"/etc/caddy/Caddyfile"}),"\u8def\u5f84\u4e0b\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u73b0\u5728\u9700\u8981\u66f4\u65b0\u4e0b\u914d\u7f6e\u6587\u4ef6\uff0c\u7ec8\u7aef\u4e2d\u4f9d\u6b21\u8f93\u5165\u4e0b\u9762\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"sudo rm -rf /etc/caddy/Caddyfile\nsudo vi /etc/caddy/Caddyfile\n"})}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(l.A,{value:"dnspod",label:"\u817e\u8baf\u4e91\u57df\u540d",children:[(0,i.jsx)(n.p,{children:"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-conf",metastring:'showLineNumbers title="/etc/caddy/Caddyfile"',children:'{\n\t// highlight-next-line\n\temail user@yours.com\n\tlog access-json {\n\t\toutput file /var/lib/caddy/log/access.log {\n\t\t\troll_size 1gb\n\t\t\troll_keep 5\n\t\t\troll_keep_for 720h\n\t\t}\n\t\tformat json\n\t}\n}\n\n// highlight-next-line\n*.example.com, example.com {\n    header {\n        Strict-Transport-Security "max-age=63072000"\n    }\n    tls {\n        protocols tls1.2 tls1.3\n        ciphers TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256\n        // highlight-next-line\n        dns dnspod DNSPOD_TOKEN\n    }\n\n    // highlight-next-line\n    @alist host alist.example.com\n    handle @alist {\n        reverse_proxy 127.0.0.1:5244\n        encode zstd gzip\n    }\n\n    handle {\n        abort\n    }\n}\n'})}),(0,i.jsx)(n.admonition,{title:"VI\u7f16\u8f91\u5668\u4f7f\u7528\u8bf4\u660e",type:"tip",children:(0,i.jsxs)(n.p,{children:["\u8f93\u5165",(0,i.jsx)(n.code,{children:"i"}),"\u8fdb\u5165\u8f93\u5165\u6a21\u5f0f\uff0c\u7c98\u8d34\u4e0a\u9762\u7684\u5185\u5bb9\uff0c\u7136\u540e\u6309",(0,i.jsx)(n.code,{children:"ESC"}),"\u56de\u5230\u6b63\u5e38\u6a21\u5f0f\uff0c\u8f93\u5165",(0,i.jsx)(n.code,{children:":wq"}),"\u5373\u53ef\u9000\u51fa\u5e76\u4fdd\u5b58\u6587\u4ef6\u3002"]})}),(0,i.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5c06\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684email\u3001",(0,i.jsx)(n.code,{children:"example.com"}),"\u3001",(0,i.jsx)(n.code,{children:"DNSPOD_TOKEN"}),"\u5206\u522b\u4fee\u6539\u4e3a\u81ea\u5df1\u7684\u5b9e\u9645\u90ae\u7bb1\u3001\u57df\u540d\u548cToken\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DNSPOD_TOKEN"}),"\u586b\u5199\uff1a\u7531\u4e0a\u6b65\u5728DNSPOD\u63a7\u5236\u53f0\u751f\u6210\u7684ID\u548cToken\u7ec4\u5408\u800c\u6210\uff0c\u683c\u5f0f\u4e3a",(0,i.jsx)(n.code,{children:"ID,Token"}),"\uff0c\u4f8b\u5982ID\u4e3a",(0,i.jsx)(n.code,{children:"123456"}),",Token\u4e3a",(0,i.jsx)(n.code,{children:"abcdef"}),",\u5219",(0,i.jsx)(n.code,{children:"DNSPOD_TOKEN"}),"\u4e3a",(0,i.jsx)(n.code,{children:"123456,abcdef"}),"\u3002"]}),"\n"]})})]}),(0,i.jsxs)(l.A,{value:"alidns",label:"\u963f\u91cc\u4e91\u57df\u540d",children:[(0,i.jsx)(n.p,{children:"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-conf",metastring:'showLineNumbers title="/etc/caddy/Caddyfile"',children:'{\n\t// highlight-next-line\n\temail user@yours.com\n\tlog access-json {\n\t\toutput file /var/lib/caddy/log/access.log {\n\t\t\troll_size 1gb\n\t\t\troll_keep 5\n\t\t\troll_keep_for 720h\n\t\t}\n\t\tformat json\n\t}\n}\n\n// highlight-next-line\n*.example.com, example.com {\n    header {\n        Strict-Transport-Security "max-age=63072000"\n    }\n    tls {\n        protocols tls1.2 tls1.3\n        ciphers TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256\n        // highlight-start\n        dns alidns {\n            access_key_id ALIYUN_ACCESS_KEY_ID\n            access_key_secret ALIYUN_ACCESS_KEY_SECRET\n        }\n        // highlight-end\n    }\n\n    // highlight-next-line\n    @alist host alist.example.com\n    handle @alist {\n        reverse_proxy 127.0.0.1:5244\n        encode zstd gzip\n    }\n\n    handle {\n        abort\n    }\n}\n'})}),(0,i.jsx)(n.admonition,{title:"VI\u7f16\u8f91\u5668\u4f7f\u7528\u8bf4\u660e",type:"tip",children:(0,i.jsxs)(n.p,{children:["\u8f93\u5165",(0,i.jsx)(n.code,{children:"i"}),"\u8fdb\u5165\u8f93\u5165\u6a21\u5f0f\uff0c\u7c98\u8d34\u4e0a\u9762\u7684\u5185\u5bb9\uff0c\u7136\u540e\u6309",(0,i.jsx)(n.code,{children:"ESC"}),"\u56de\u5230\u6b63\u5e38\u6a21\u5f0f\uff0c\u8f93\u5165",(0,i.jsx)(n.code,{children:":wq"}),"\u5373\u53ef\u9000\u51fa\u5e76\u4fdd\u5b58\u6587\u4ef6\u3002"]})}),(0,i.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5c06\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684email\u3001",(0,i.jsx)(n.code,{children:"example.com"}),"\u5206\u522b\u4fee\u6539\u4e3a\u81ea\u5df1\u7684\u5b9e\u9645\u90ae\u7bb1\u3001\u57df\u540d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ALIYUN_ACCESS_KEY_ID"}),"\u4e3a\u4e0a\u6b65\u5728\u963f\u91cc\u4e91\u63a7\u5236\u53f0\u751f\u6210\u7684",(0,i.jsx)(n.code,{children:"AccessKey ID"}),"\uff0c",(0,i.jsx)(n.code,{children:"ALIYUN_ACCESS_KEY_SECRET"}),"\u4e3a\u751f\u6210\u7684",(0,i.jsx)(n.code,{children:"AccessKey Secret"}),"\u3002"]}),"\n"]})})]})]}),"\n",(0,i.jsx)(n.p,{children:"\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u91cd\u542fcaddy\u670d\u52a1\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7ec8\u7aef\u4e2d\u8f93\u5165\u4e0b\u9762\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"sudo systemctl restart caddy\nsudo systemctl status caddy\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u51fa\u73b0\u7c7b\u4f3c\u4e0b\u9762\u63d0\u793a\uff0c\u8bf4\u660e\u8bc1\u4e66\u7533\u8bf7\u6210\u529f\u3002"}),"\n",(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922110405.png"}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e\u53ef\u4ee5\u53bb\u6d4f\u89c8\u5668\u6253\u5f00",(0,i.jsx)(n.code,{children:"https://alist.example.com"}),"\u6d4b\u8bd5\u662f\u5426\u6b63\u5e38\u8bbf\u95ee\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"zotero\u914d\u7f6e",children:"Zotero\u914d\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u6b65\u9aa4\u6210\u529f\u5b8c\u6210\u540e\uff0c\u4e0b\u9762\u5c31\u53ef\u4ee5\u5728Zotero\u9996\u9009\u9879\u7684\u540c\u6b65\u83dc\u5355\u4e2d\uff0c\u628a\u670d\u52a1\u5668\u5730\u5740\u4ee5\u57df\u540d\u7684\u65b9\u5f0f\u586b\u5199\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u586b\u5199\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(l.A,{value:"pc",label:"\u7535\u8111\u7aef",children:(0,i.jsx)("div",{style:{textAlign:"center",border:"1px solid #eee"},children:(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922200412.png",width:"80%"})})}),(0,i.jsx)(l.A,{value:"ios",label:"iOS\u7aef",children:(0,i.jsx)("div",{style:{textAlign:"center",border:"1px solid #eee"},children:(0,i.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240922201021.png",width:"70%"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>r});s(6540);var t=s(4164);const i={tabItem:"tabItem_Ymn6"};var d=s(4848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,r),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>v});var t=s(6540),i=s(4164),d=s(3104),r=s(6347),l=s(205),c=s(7485),a=s(1682),o=s(679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:i}}=e;return{value:n,label:s,attributes:t,default:i}}))}(s);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const i=(0,r.W6)(),d=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(d),(0,t.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(i.location.search);n.set(d,e),i.replace({...i.location,search:n.toString()})}),[d,i])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,d=u(e),[r,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:d}))),[a,h]=x({queryString:s,groupId:i}),[m,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,d]=(0,o.Dv)(s);return[i,(0,t.useCallback)((e=>{s&&d.set(e)}),[s,d])]}({groupId:i}),g=(()=>{const e=a??m;return p({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{g&&c(g)}),[g]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,d]),tabValues:d}}var j=s(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=s(4848);function _(e){let{className:n,block:s,selectedValue:t,selectValue:r,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.a_)(),o=e=>{const n=e.currentTarget,s=c.indexOf(n),i=l[s].value;i!==t&&(a(n),r(i))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:d}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:o,...d,className:(0,i.A)("tabs__item",g.tabItem,d?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:d}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===d));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==d})))})}function f(e){const n=m(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,y.jsx)(_,{...n,...e}),(0,y.jsx)(b,{...n,...e})]})}function v(e){const n=(0,j.A)();return(0,y.jsx)(f,{...e,children:h(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(6540);const i={},d=t.createContext(i);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);