"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8083],{6073:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"anki-extension/sync_server/\u5c40\u57df\u7f51\u540c\u6b65","title":"\u5c40\u57df\u7f51\u540c\u6b65","description":"Anki\u540c\u6b65\u670d\u52a1\u53ef\u4ee5\u65b9\u4fbf\u7528\u6237\u5728\u4e0d\u540c\u8bbe\u5907\u4e4b\u95f4\u540c\u6b65\u6570\u636e\uff0c\u7136\u800c\u7531\u4e8eAnki\u7684\u5b98\u65b9\u670d\u52a1\u5668\u4f4d\u4e8e\u56fd\u5916\uff0c\u5bfc\u81f4\u56fd\u5185\u7528\u6237\u5728\u4f7f\u7528\u540c\u6b65\u670d\u52a1\u65f6\u901f\u5ea6\u4f1a\u6bd4\u8f83\u6162\uff0c\u751a\u81f3\u540c\u6b65\u5931\u8d25\uff0c\u5c24\u5176\u5728\u5a92\u4f53\u6587\u4ef6\u6bd4\u8f83\u5927\u7684\u65f6\u5019\uff0c\u540c\u6b65\u901f\u5ea6\u662f\u96be\u4ee5\u5fcd\u53d7\u7684\u3002","source":"@site/mobile_docs/anki-extension/sync_server/\u5c40\u57df\u7f51\u540c\u6b65.md","sourceDirName":"anki-extension/sync_server","slug":"/anki-extension/sync_server/local-sync","permalink":"/mobile/anki-extension/sync_server/local-sync","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"slug":"local-sync","sidebar_position":2,"title":"\u5c40\u57df\u7f51\u540c\u6b65"},"sidebar":"tutorialSidebar","previous":{"title":"\u540c\u6b65\u539f\u7406","permalink":"/mobile/anki-extension/sync_server/sync-intro"},"next":{"title":"\u516c\u7f51\u540c\u6b65","permalink":"/mobile/anki-extension/sync_server/public-sync"}}');var t=i(74848),r=i(28453),l=i(65537),a=i(79329);const c={slug:"local-sync",sidebar_position:2,title:"\u5c40\u57df\u7f51\u540c\u6b65"},o=void 0,d={},h=[{value:"\u542f\u52a8\u540c\u6b65\u670d\u52a1\u5668",id:"\u542f\u52a8\u540c\u6b65\u670d\u52a1\u5668",level:2},{value:"\u914d\u7f6eAnki\u79c1\u4eba\u540c\u6b65\u670d\u52a1\u5668",id:"\u914d\u7f6eanki\u79c1\u4eba\u540c\u6b65\u670d\u52a1\u5668",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Anki\u540c\u6b65\u670d\u52a1\u53ef\u4ee5\u65b9\u4fbf\u7528\u6237\u5728\u4e0d\u540c\u8bbe\u5907\u4e4b\u95f4\u540c\u6b65\u6570\u636e\uff0c\u7136\u800c\u7531\u4e8eAnki\u7684\u5b98\u65b9\u670d\u52a1\u5668\u4f4d\u4e8e\u56fd\u5916\uff0c\u5bfc\u81f4\u56fd\u5185\u7528\u6237\u5728\u4f7f\u7528\u540c\u6b65\u670d\u52a1\u65f6\u901f\u5ea6\u4f1a\u6bd4\u8f83\u6162\uff0c\u751a\u81f3\u540c\u6b65\u5931\u8d25\uff0c\u5c24\u5176\u5728\u5a92\u4f53\u6587\u4ef6\u6bd4\u8f83\u5927\u7684\u65f6\u5019\uff0c\u540c\u6b65\u901f\u5ea6\u662f\u96be\u4ee5\u5fcd\u53d7\u7684\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u597d\u5728Anki\u5141\u8bb8\u9ad8\u7ea7\u7528\u6237\u81ea\u5efa\u540c\u6b65\u670d\u52a1\u5668\uff0c\u4ee5\u52a0\u5feb\u540c\u6b65\u901f\u5ea6\uff0c\u8be6\u60c5\u53ef\u67e5\u770b",(0,t.jsx)(n.a,{href:"https://docs.ankiweb.net/sync-server.html",children:"Anki\u5b98\u65b9\u624b\u518c"}),"\n\u3002\u4f46\u662f\uff0c\u670d\u52a1\u5668\u642d\u5efa\u8fc7\u7a0b\u4ecd\u7136\u6bd4\u8f83\u590d\u6742\u548c\u7e41\u7410\uff0c\u9700\u8981\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\u547d\u4ee4\u884c\uff0c\u4e0d\u5229\u4e8e\u666e\u901a\u7528\u6237\u4f7f\u7528\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u6b64\u672c\u8f6f\u4ef6\u5c06\u81ea\u5efa\u670d\u52a1\u5668\u7684\u6b65\u9aa4\u5927\u5927\u7b80\u5316\uff0c\u901a\u8fc7\u56fe\u5f62\u5316\u754c\u9762\u7684\u65b9\u5f0f\u7b80\u5355\u914d\u7f6e\u5373\u53ef\u5b8c\u6210\u670d\u52a1\u5668\u642d\u5efa\uff0c\u4f7f\u5f97\u65b0\u624b\u5c0f\u767d\u4e5f\u80fd\u5feb\u901f\u4e0a\u624b\u3002\u4e0b\u9762\u6765\u770b\u4e00\u4e0b\u5177\u4f53\u7684\u6b65\u9aa4\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u89c6\u9891\u6559\u7a0b\uff1a ",(0,t.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1DX4y1L7cW/",children:"Anki\u81ea\u5efa\u540c\u6b65\u670d\u52a1\u5668\u4ece\u672a\u5982\u6b64\u7b80\u5355! | \u54d4\u54e9\u54d4\u54e9"})]}),"\n",(0,t.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u672c\u65b9\u6848\u53ea\u80fd\u5f53\u5404\u8bbe\u5907\u90fd\u4f4d\u4e8e\u540c\u4e00\u5c40\u57df\u7f51\u4e0b\u624d\u80fd\u4e92\u76f8\u540c\u6b65\u3002\u5982\u679c\u4f60\u60f3\u8981\u968f\u65f6\u968f\u5730\u540c\u6b65\uff0c\u53ef\u4ee5\u770b\u4e0b",(0,t.jsx)(n.a,{href:"/docs/anki-toolbox/sync_server/public-sync",children:"\u516c\u7f51\u540c\u6b65"}),"\u7684\u6559\u7a0b(ps: \u9700\u8981\u53e6\u5916\u8d2d\u4e70\u4e91\u670d\u52a1\u5668)\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u542f\u52a8\u540c\u6b65\u670d\u52a1\u5668",children:"\u542f\u52a8\u540c\u6b65\u670d\u52a1\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u8f6f\u4ef6\u652f\u6301\u4f7f\u7528\u7528\u6237\u81ea\u5df1\u7684\u8bbe\u5907\u4f5c\u4e3a\u670d\u52a1\u5668\uff0c\u7535\u8111\u7aef\u3001\u79fb\u52a8\u7aef\u90fd\u652f\u6301\u642d\u5efa\u670d\u52a1\u5668\u3002\u4e0b\u9762\u4ee5\u7535\u8111\u7aef\u4e3a\u4f8b\u8fdb\u884c\u4ecb\u7ecd\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"\u521b\u5efa\u7528\u6237"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\uff0c\u5728\u7535\u8111\u4e0a\u6253\u5f00\u672c\u8f6f\u4ef6\uff0c\u5207\u6362\u5230\u300eAnki\u540c\u6b65\u300f\u83dc\u5355\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7b2c\u4e00\u6b21\u4f7f\u7528\u9700\u8981\u5148\u914d\u7f6e\u540c\u6b65\u4fe1\u606f\uff0c\u70b9\u51fb\u9996\u9875\u53f3\u4e0a\u89d2\u7684\u9f7f\u8f6e\u56fe\u6807\u8fdb\u5165\u914d\u7f6e\u9875\u9762\u3002"}),"\n",(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20250401140011135.png"}),"\n",(0,t.jsx)(n.p,{children:"\u914d\u7f6e\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7528\u6237\u540d"}),"\uff1aAnki\u540c\u6b65\u65f6\u8981\u6c42\u767b\u5f55\u7684\u7528\u6237\u540d\uff0c\u7528\u6237\u81ea\u884c\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u4e0eAnkiweb\u4e2d\u4e0d\u540c\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5bc6\u7801"}),"\uff1a\u4e0e\u4e0a\u9762\u7528\u6237\u540d\u5bf9\u5e94\u7684\u5bc6\u7801"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u76d1\u542c\u5730\u5740"}),"\uff1a\u8868\u793a\u5141\u8bb8\u8fde\u63a5\u6b64\u670d\u52a1\u5668\u7684\u8bbe\u5907IP\u5730\u5740\uff0c",(0,t.jsx)(n.code,{children:"0.0.0.0"}),"\u8868\u793a\u5141\u8bb8\u6240\u6709\u8bbe\u5907\uff0c\u4e00\u822c\u4fdd\u6301\u9ed8\u8ba4\u5373\u53ef\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u76d1\u542c\u7aef\u53e3"}),"\uff1a\u8868\u793a\u670d\u52a1\u5668\u8fd0\u884c\u5728\u54ea\u4e2a\u7aef\u53e3\u4e0a\uff0c\u9664\u975e\u7aef\u53e3\u88ab\u5360\u7528\uff0c\u4e00\u822c\u4e5f\u662f\u4fdd\u6301\u9ed8\u8ba4\u5373\u53ef\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e"}),"\uff1aAnki\u540c\u6b65\u6570\u636e\u5b58\u50a8\u7684\u8def\u5f84\uff0c\u6307\u5b9a\u4e00\u4e2a\u7a7a\u76ee\u5f55\u586b\u5199\u5373\u53ef"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u53c2\u6570\u586b\u5199\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20250401135232910.png"}),"\n",(0,t.jsx)("img-annotation",{children:"\u540c\u6b65\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.admonition,{title:"\u79fb\u52a8\u7aef\u642d\u5efa\u670d\u52a1\u5668\u6ce8\u610f\u4e8b\u9879",type:"warning",children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u662f\u5728Android\u4e0a\u642d\u5efa\u540c\u6b65\u670d\u52a1\u5668\uff0c\u90a3\u4e48\u4f60\u7684",(0,t.jsx)(n.strong,{children:"\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e"}),"\u76ee\u5f55\u5efa\u8bae\u9009\u62e9\u7cfb\u7edf\u4e0b\u8f7d\u76ee\u5f55\u4e0b\u65b0\u5efa\u7684\u7a7a\u6587\u4ef6\u5939\uff0c\u5982",(0,t.jsx)(n.code,{children:"/storage/emulated/0/Download/AnkiSync"}),"\uff0c\u5176\u4ed6\u4f4d\u7f6e\u53ef\u80fd\u6ca1\u6709\u6743\u9650\u5199\u5165\uff0c\u5bfc\u81f4\u670d\u52a1\u5668\u542f\u52a8\u5931\u8d25\uff01"]}),"\n"]}),(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20250401182647498.png",width:"35%"}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u662f\u5728iOS\u4e0a\u642d\u5efa\u540c\u6b65\u670d\u52a1\u5668\uff0c\u90a3\u4e48\u4f60\u7684",(0,t.jsx)(n.strong,{children:"\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e"}),"\u76ee\u5f55\u5efa\u8bae\u5728\u5e94\u7528\u7a0b\u5e8f\u76ee\u5f55\u4e0b\u65b0\u5efa\u7a7a\u6587\u4ef6\u5939\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"]}),"\n"]}),(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20250401182959004.png",width:"60%"}),(0,t.jsx)(n.p,{children:"\u5176\u4ed6\u4f4d\u7f6e\u540c\u6837\u53ef\u80fd\u5b58\u5728\u56e0\u4e3a\u6ca1\u6709\u6743\u9650\u5bfc\u81f4\u670d\u52a1\u5668\u542f\u52a8\u5931\u8d25\u3002"})]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"\u542f\u52a8\u540c\u6b65\u670d\u52a1\u5668"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u56de\u5230Anki\u540c\u6b65\u4e3b\u9875\uff0c\u70b9\u51fb\u300e\u542f\u52a8\u300f\u6309\u94ae\uff0c\u5373\u53ef\u542f\u52a8\u540c\u6b65\u670d\u52a1\u5668\u3002"}),"\n",(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20250401135415086.png"}),"\n",(0,t.jsx)("img-annotation",{children:"\u542f\u52a8\u540c\u6b65\u670d\u52a1\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u56fe\u6807\u53d8\u4e3a\u4e0b\u56fe\u65f6\uff0c\u8868\u793a\u670d\u52a1\u5668\u5df2\u7ecf\u6210\u529f\u542f\u52a8\u3002"}),"\n",(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20250401135656684.png"}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u53ef\u4ee5\u590d\u5236\u4e0b\u65b9\u7684\u670d\u52a1\u5668\u5730\u5740\u5907\u7528\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u7684Anki\u548c\u670d\u52a1\u5668\u5728\u540c\u4e00\u53f0\u8bbe\u5907\u4e0a\uff0c\u90a3\u4e48\u5efa\u8bae\u76f4\u63a5\u7528\u542b\u6709",(0,t.jsx)(n.code,{children:"127.0.0.1"}),"\u7684\u5730\u5740\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u4f60\u7684Anki\u5728\u4e0e\u670d\u52a1\u5668\u540c\u4e00\u5c40\u57df\u7f51\u7684\u5176\u4ed6\u8bbe\u5907\u4e0a\uff0c\u6709\u65f6\u670d\u52a1\u5668\u5730\u5740\u4f1a\u663e\u793a\u591a\u4e2a\uff0c\u4e00\u822c\u53ea\u6709\u4e00\u4e2a\u662f\u6709\u6548\u7684\uff0c\u5982\u679c\u53d1\u751f\u540c\u6b65\u5931\u8d25\uff0c\u53ef\u4ee5\u6362\u5176\u4ed6\u5730\u5740\u7ee7\u7eed\u5c1d\u8bd5\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u914d\u7f6eanki\u79c1\u4eba\u540c\u6b65\u670d\u52a1\u5668",children:"\u914d\u7f6eAnki\u79c1\u4eba\u540c\u6b65\u670d\u52a1\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u670d\u52a1\u5668\u542f\u52a8\u6210\u529f\u540e\uff0c\u63a5\u4e0b\u6765\u662fAnki\u4e2d\u79c1\u4eba\u670d\u52a1\u5668\u7684\u914d\u7f6e\u3002\u4ee5\u4e0b\u662f\u5404\u5e73\u53f0Anki\u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u6559\u7a0b\u3002"}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsxs)(a.A,{value:"1",label:"Windows",default:!0,children:[(0,t.jsx)(n.p,{children:'\u6253\u5f00"\u5de5\u5177>\u8bbe\u7f6e"\uff0c\u5207\u6362\u5230\u300e\u540c\u6b65\u300f\u9009\u9879\u5361\uff0c\u5728\u300e\u81ea\u6258\u7ba1\u540c\u6b65\u670d\u52a1\u5668\u300f\u53c2\u6570\u4f4d\u7f6e\u586b\u5199\u4e0a\u9762\u590d\u5236\u7684\u670d\u52a1\u5668\u5730\u5740\u3002'}),(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/Snipaste_2024-01-28_13-42-01.png",width:"60%"}),(0,t.jsx)("img-annotation",{children:"\u586b\u5199\u79c1\u4eba\u670d\u52a1\u5668\u5730\u5740"}),(0,t.jsx)(n.p,{children:"\u7136\u540e\u56de\u5230\u4e3b\u754c\u9762\uff0c\u70b9\u51fb\u300e\u540c\u6b65\u300f\u6309\u94ae\uff0c\u4f1a\u5f39\u51fa\u767b\u5f55\u7a97\u53e3\uff0c\u586b\u5199\u4e0a\u9762\u5728\u672c\u8f6f\u4ef6\u4e2d\u521b\u5efa\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u8fdb\u884c\u767b\u5f55\uff0c\u767b\u5f55\u6210\u529f\u540e\u4f1a\u81ea\u52a8\u8fdb\u884c\u540c\u6b65\u3002"}),(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/Snipaste_2024-01-28_13-44-58.png",width:"70%"}),(0,t.jsx)("img-annotation",{children:"\u767b\u5f55\u8d26\u53f7\u540c\u6b65"})]}),(0,t.jsxs)(a.A,{value:"2",label:"Mac",children:[(0,t.jsx)(n.p,{children:"\u6253\u5f00Anki\u9996\u9009\u9879\uff0c\u5207\u6362\u5230\u300e\u540c\u6b65\u300f\u9009\u9879\u5361\uff0c\u5728\u300e\u81ea\u6258\u7ba1\u540c\u6b65\u670d\u52a1\u5668\u300f\u53c2\u6570\u4f4d\u7f6e\u586b\u5199\u4e0a\u9762\u590d\u5236\u7684\u670d\u52a1\u5668\u5730\u5740\u3002"}),(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240128133340.png",width:"60%"}),(0,t.jsx)("img-annotation",{children:"\u586b\u5199\u79c1\u4eba\u670d\u52a1\u5668\u5730\u5740"}),(0,t.jsx)(n.p,{children:"\u7136\u540e\u56de\u5230\u4e3b\u754c\u9762\uff0c\u70b9\u51fb\u300e\u540c\u6b65\u300f\u6309\u94ae\uff0c\u4f1a\u5f39\u51fa\u767b\u5f55\u7a97\u53e3\uff0c\u586b\u5199\u4e0a\u9762\u5728\u672c\u8f6f\u4ef6\u4e2d\u521b\u5efa\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u8fdb\u884c\u767b\u5f55\uff0c\u767b\u5f55\u6210\u529f\u540e\u4f1a\u81ea\u52a8\u8fdb\u884c\u540c\u6b65\u3002"}),(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240128133827.png",width:"70%"}),(0,t.jsx)("img-annotation",{children:"\u767b\u5f55\u8d26\u53f7\u540c\u6b65"})]}),(0,t.jsxs)(a.A,{value:"3",label:"\u5b89\u5353",default:!0,children:[(0,t.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,t.jsxs)(n.p,{children:["\u5b89\u5353\u4e0a\u7684Anki\u5ba2\u6237\u7aef\u662f",(0,t.jsx)(n.a,{href:"https://github.com/ankidroid/Anki-Android",children:"AnkiDroid"}),"\uff0c\u5982\u679c\u6ca1\u6709\u5b89\u88c5\uff0c\u53ef\u4ee5\u53c2\u8003\u672c\u6559\u7a0b\u7684",(0,t.jsx)(n.a,{href:"/docs/installation",children:"\u5b89\u88c5\u6307\u5357"}),"\u90e8\u5206\u8fdb\u884c\u5b89\u88c5\u3002"]})}),(0,t.jsxs)(n.p,{children:["\u6253\u5f00",(0,t.jsx)(n.strong,{children:"AnkiDroid"}),"\u8f6f\u4ef6\uff0c\u6309\u7167\u4e0b\u9762\u6b65\u9aa4\u8bbe\u7f6e\u79c1\u4eba\u540c\u6b65\u670d\u52a1\u5668\u5730\u5740\uff1a"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"1.\u6253\u5f00\u8bbe\u7f6e"}),(0,t.jsx)(n.th,{children:"2.\u627e\u5230\u300e\u540c\u6b65\u300f"}),(0,t.jsx)(n.th,{children:"3.\u586b\u5199\u670d\u52a1\u5668\u5730\u5740"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240128142140.png"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240128142358.png"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240128142507.png"})})]})})]}),(0,t.jsx)(n.p,{children:"\u8bbe\u7f6e\u597d\u540e\uff0c\u56de\u5230\u4e3b\u754c\u9762\uff0c\u70b9\u51fb\u300e\u540c\u6b65\u300f\u6309\u94ae\uff0c\u767b\u5f55\u8d26\u53f7\u540e\u5373\u53ef\u5f00\u59cb\u540c\u6b65\u3002"}),(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240128142821.png",width:"60%"})]}),(0,t.jsxs)(a.A,{value:"4",label:"\u82f9\u679c",children:[(0,t.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,t.jsxs)(n.p,{children:["\u82f9\u679c\u4e0a\u7684Anki\u5ba2\u6237\u7aef\u662f",(0,t.jsx)(n.a,{href:"https://apps.apple.com/us/app/ankimobile-flashcards/id373493387",children:"AnkiMobile Flashcards"}),"\uff0c\u5982\u679c\u6ca1\u6709\u5b89\u88c5\uff0c\u53ef\u4ee5\u53c2\u8003\u672c\u6559\u7a0b\u7684",(0,t.jsx)(n.a,{href:"/docs/installation",children:"\u5b89\u88c5\u6307\u5357"}),"\u90e8\u5206\u8fdb\u884c\u5b89\u88c5\u3002"]})}),(0,t.jsxs)(n.p,{children:["\u6253\u5f00",(0,t.jsx)(n.strong,{children:"AnkiMobile Flashcards"}),"\u8f6f\u4ef6\uff0c\u6309\u7167\u4e0b\u9762\u6b65\u9aa4\u8bbe\u7f6e\u79c1\u4eba\u540c\u6b65\u670d\u52a1\u5668\u5730\u5740\uff1a"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"1.\u6253\u5f00\u8bbe\u7f6e"}),(0,t.jsx)(n.th,{children:"2.\u586b\u5199\u670d\u52a1\u5668\u5730\u5740"}),(0,t.jsx)(n.th,{children:"3. \u5f00\u59cb\u540c\u6b65"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240128144531.png"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240128144649.png"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240128150428.png"})})]})})]}),(0,t.jsx)(n.p,{children:"\u8bbe\u7f6e\u597d\u540e\uff0c\u56de\u5230\u4e3b\u754c\u9762\uff0c\u70b9\u51fb\u300e\u540c\u6b65\u300f\u6309\u94ae\uff0c\u767b\u5f55\u8d26\u53f7\u540e\u5373\u53ef\u5f00\u59cb\u540c\u6b65\u3002"})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528Anki\u7684\u8bbe\u5907\u548c\u670d\u52a1\u5668\u4e00\u5b9a\u8981\u4f4d\u4e8e\u540c\u4e00\u5c40\u57df\u7f51\u4e0b\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u540c\u6b65\u5931\u8d25\uff01(\u53ef\u4ee5\u901a\u8fc7\u624b\u673a\u5f00\u70ed\u70b9\u5efa\u7acb\u5c40\u57df\u7f51)"}),"\n",(0,t.jsx)(n.li,{children:"\u767b\u5f55\u65f6\u8981\u4f7f\u7528\u5728PDF Guru Anki\u4e2d\u521b\u5efa\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u767b\u5f55\uff0c\u800c\u4e0d\u662fAnkiweb\u4e0a\u6ce8\u518c\u7684\u8d26\u6237\u767b\u5f55\u3002"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u6b64\u65b9\u5f0f\u8fdb\u884c\u7684\u540c\u6b65\u5fc5\u987b\u5728\u540c\u4e00\u5c40\u57df\u7f51\u4e0b\u624d\u884c\uff0c\u5982\u679c\u767b\u5f55\u65f6\u9047\u5230",(0,t.jsx)(n.code,{children:"\u8fde\u63a5\u8d85\u65f6"}),"\u7b49\u9519\u8bef\uff0c\u53ef\u6309\u4e0b\u9762\u6b65\u9aa4\u68c0\u67e5\uff1a"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u6838\u5bf9\u4e0b\u5730\u5740\u662f\u5426\u586b\u5199\u6b63\u786e(\u7531\u4e8e\u5c40\u57df\u7f51\u4e0bIP\u5730\u5740\u53ef\u80fd\u4e0d\u56fa\u5b9a\uff0c\u6bcf\u6b21\u66f4\u6362\u7f51\u7edc\u65f6IP\u53ef\u80fd\u4f1a\u53d8)"}),"\n",(0,t.jsx)(n.li,{children:"\u6709\u65f6\u7535\u8111\u4e0a\u4f1a\u51fa\u73b0\u591a\u4e2aIP\u5730\u5740\uff0c\u9010\u4e2a\u66f4\u6362\u5176\u4ed6\u5730\u5740\u8bd5\u8bd5"}),"\n",(0,t.jsx)(n.li,{children:"\u5173\u95ed\u7535\u8111\u9632\u706b\u5899\u540e\u91cd\u65b0\u767b\u5f55\u8bd5\u8bd5"}),"\n",(0,t.jsx)(n.li,{children:"\u66f4\u6362Guru\u4e2d\u7684\u76d1\u542c\u7aef\u53e3\u8bd5\u8bd5"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},79329:(e,n,i)=>{i.d(n,{A:()=>l});i(96540);var s=i(34164);const t={tabItem:"tabItem_Ymn6"};var r=i(74848);function l(e){let{children:n,hidden:i,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:i,children:n})}},65537:(e,n,i)=>{i.d(n,{A:()=>w});var s=i(96540),t=i(34164),r=i(65627),l=i(56347),a=i(50372),c=i(30604),o=i(11861),d=i(78749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:t}}=e;return{value:n,label:i,attributes:s,default:t}}))}(i);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function x(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:i}=e;const t=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,c.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,r=u(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[o,h]=p({queryString:i,groupId:t}),[j,m]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,d.Dv)(i);return[t,(0,s.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:t}),b=(()=>{const e=o??j;return x({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=i(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=i(74848);function k(e){let{className:n,block:i,selectedValue:s,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const n=e.currentTarget,i=c.indexOf(n),t=a[i].value;t!==s&&(o(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=c.indexOf(e.currentTarget)+1;n=c[i]??c[0];break}case"ArrowLeft":{const i=c.indexOf(e.currentTarget)-1;n=c[i]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...r,className:(0,t.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:r}=e;const l=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function f(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,g.jsx)(k,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,g.jsx)(f,{...e,children:h(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);