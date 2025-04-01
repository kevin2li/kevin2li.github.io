"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5666],{48352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"pdf-toolbox/PDF OCR","title":"PDF OCR","description":"\u6b64\u529f\u80fd\u53ef\u4ee5\u4f7f\u7528OCR\u6280\u672f\u8bc6\u522bPDF\u6587\u4ef6\u4e2d\u7684\u6587\u5b57\u3002","source":"@site/docs/pdf-toolbox/21-PDF OCR.md","sourceDirName":"pdf-toolbox","slug":"/pdf-toolbox/ocr","permalink":"/docs/pdf-toolbox/ocr","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pdf-toolbox/21-PDF OCR.md","tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"slug":"ocr","sidebar_position":21,"title":"PDF OCR"},"sidebar":"tutorialSidebar","previous":{"title":"PDF\u538b\u7f29","permalink":"/docs/pdf-toolbox/compress"},"next":{"title":"\u53cc\u5c42PDF","permalink":"/docs/pdf-toolbox/dual_layer"}}');var o=t(74848),s=t(28453);const r={slug:"ocr",sidebar_position:21,title:"PDF OCR"},l=void 0,c={},d=[{value:"PDF\u8bc6\u522b",id:"pdf\u8bc6\u522b",level:2},{value:"\u56fe\u7247\u8bc6\u522b",id:"\u56fe\u7247\u8bc6\u522b",level:2},{value:"\u526a\u8d34\u677f\u8bc6\u522b",id:"\u526a\u8d34\u677f\u8bc6\u522b",level:2}];function a(e){const n={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u6b64\u529f\u80fd\u53ef\u4ee5\u4f7f\u7528OCR\u6280\u672f\u8bc6\u522bPDF\u6587\u4ef6\u4e2d\u7684\u6587\u5b57\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"pdf\u8bc6\u522b",children:"PDF\u8bc6\u522b"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"\u5c0f\u8bd5\u725b\u5200"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u672c\u8f6f\u4ef6\u652f\u6301\u5bf9PDF\u8fdb\u884cOCR\u5e76\u76f4\u63a5\u8f93\u51fatxt\u683c\u5f0f\u6587\u672c\u3002"}),"\n",(0,o.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240605104253.png"}),"\n",(0,o.jsx)("img-annotation",{children:"\u53c2\u6570\u586b\u5199\u793a\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u5904\u7406\u5b8c\u6210\u540e,\u4f1a\u5728\u7528\u6237\u6307\u5b9a\u7684\u8f93\u51fa\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u91cc\u9762\u5305\u542b\u4e86\u6bcf\u9875\u7684OCR\u8bc6\u522b\u7ed3\u679ctxt\u6587\u4ef6\u4ee5\u53ca\u6240\u6709\u9875\u5408\u5e76\u540e\u7684\u7ed3\u679ctxt\u6587\u4ef6\u3002"}),"\n",(0,o.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240605104503.png"}),"\n",(0,o.jsx)("img-annotation",{children:"\u8f93\u51fa\u793a\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u6b64\u5916\u672c\u8f6f\u4ef6\u4e5f\u652f\u6301\u6279\u91cfPDF OCR\uff0c\u53ea\u9700\u8981\u5728\u8f93\u5165\u53c2\u6570\u4e2d\u9009\u62e9\u591a\u4e2aPDF\u6587\u4ef6\u8def\u5f84\u5373\u53ef\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u56fe\u7247\u8bc6\u522b",children:"\u56fe\u7247\u8bc6\u522b"}),"\n",(0,o.jsx)(n.p,{children:"\u672c\u8f6f\u4ef6\u4e5f\u652f\u6301\u5bf9\u56fe\u7247\u8fdb\u884cOCR\u8bc6\u522b\u3002"}),"\n",(0,o.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240624224325.png"}),"\n",(0,o.jsx)("img-annotation",{children:"\u8f93\u51fa\u793a\u4f8b"}),"\n",(0,o.jsx)(n.h2,{id:"\u526a\u8d34\u677f\u8bc6\u522b",children:"\u526a\u8d34\u677f\u8bc6\u522b"}),"\n",(0,o.jsx)(n.p,{children:"\u672c\u8f6f\u4ef6\u4e5f\u652f\u6301\u5bf9\u526a\u8d34\u677f\u7684\u56fe\u7247\u8fdb\u884cOCR\u8bc6\u522b\u3002"}),"\n",(0,o.jsx)("img",{src:"https://minio.kevin2li.site/image-bed/wiki/20240624224400.png"}),"\n",(0,o.jsx)("img-annotation",{children:"\u8f93\u51fa\u793a\u4f8b"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);