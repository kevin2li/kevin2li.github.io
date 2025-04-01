"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7816],{50053:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(68675);const i=function(e){return(0,r.A)(e,4)}},7816:(e,n,t)=>{t.r(n),t.d(n,{render:()=>O});var r=t(36157),i=(t(67231),t(44007)),a=t(72355),o=(t(46503),t(74431),t(55395),t(42107)),d=t(62334),s=t(69592),c=t(50053),g=t(74722);t(37981);function l(e){var n={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:f(e),edges:h(e)};return s.A(e.graph())||(n.value=c.A(e.graph())),n}function f(e){return g.A(e.nodes(),(function(n){var t=e.node(n),r=e.parent(n),i={v:n};return s.A(t)||(i.value=t),s.A(r)||(i.parent=r),i}))}function h(e){return g.A(e.edges(),(function(n){var t=e.edge(n),r={v:n.v,w:n.w};return s.A(n.name)||(r.name=n.name),s.A(t)||(r.value=t),r}))}var u=t(697),p=new Map,m=new Map,w=new Map,R=(0,o.K2)((()=>{m.clear(),w.clear(),p.clear()}),"clear"),v=(0,o.K2)(((e,n)=>{const t=m.get(n)||[];return o.Rm.trace("In isDescendant",n," ",e," = ",t.includes(e)),t.includes(e)}),"isDescendant"),y=(0,o.K2)(((e,n)=>{const t=m.get(n)||[];return o.Rm.info("Descendants of ",n," is ",t),o.Rm.info("Edge is ",e),e.v!==n&&e.w!==n&&(t?t.includes(e.v)||v(e.v,n)||v(e.w,n)||t.includes(e.w):(o.Rm.debug("Tilt, ",n,",not in descendants"),!1))}),"edgeInCluster"),X=(0,o.K2)(((e,n,t,r)=>{o.Rm.warn("Copying children of ",e,"root",r,"data",n.node(e),r);const i=n.children(e)||[];e!==r&&i.push(e),o.Rm.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach((i=>{if(n.children(i).length>0)X(i,n,t,r);else{const a=n.node(i);o.Rm.info("cp ",i," to ",r," with parent ",e),t.setNode(i,a),r!==n.parent(i)&&(o.Rm.warn("Setting parent",i,n.parent(i)),t.setParent(i,n.parent(i))),e!==r&&i!==e?(o.Rm.debug("Setting parent",i,e),t.setParent(i,e)):(o.Rm.info("In copy ",e,"root",r,"data",n.node(e),r),o.Rm.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));const d=n.edges(i);o.Rm.debug("Copying Edges",d),d.forEach((i=>{o.Rm.info("Edge",i);const a=n.edge(i.v,i.w,i.name);o.Rm.info("Edge data",a,r);try{y(i,r)?(o.Rm.info("Copying as ",i.v,i.w,a,i.name),t.setEdge(i.v,i.w,a,i.name),o.Rm.info("newGraph edges ",t.edges(),t.edge(t.edges()[0]))):o.Rm.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",e)}catch(d){o.Rm.error(d)}}))}o.Rm.debug("Removing node",i),n.removeNode(i)}))}),"copy"),b=(0,o.K2)(((e,n)=>{const t=n.children(e);let r=[...t];for(const i of t)w.set(i,e),r=[...r,...b(i,n)];return r}),"extractDescendants"),E=(0,o.K2)(((e,n,t)=>{const r=e.edges().filter((e=>e.v===n||e.w===n)),i=e.edges().filter((e=>e.v===t||e.w===t)),a=r.map((e=>({v:e.v===n?t:e.v,w:e.w===n?n:e.w}))),o=i.map((e=>({v:e.v,w:e.w})));return a.filter((e=>o.some((n=>e.v===n.v&&e.w===n.w))))}),"findCommonEdges"),N=(0,o.K2)(((e,n,t)=>{const r=n.children(e);if(o.Rm.trace("Searching children of id ",e,r),r.length<1)return e;let i;for(const a of r){const e=N(a,n,t),r=E(n,t,e);if(e){if(!(r.length>0))return e;i=e}}return i}),"findNonClusterChild"),C=(0,o.K2)((e=>p.has(e)&&p.get(e).externalConnections&&p.has(e)?p.get(e).id:e),"getAnchorId"),S=(0,o.K2)(((e,n)=>{if(!e||n>10)o.Rm.debug("Opting out, no graph ");else{o.Rm.debug("Opting in, graph "),e.nodes().forEach((function(n){e.children(n).length>0&&(o.Rm.warn("Cluster identified",n," Replacement id in edges: ",N(n,e,n)),m.set(n,b(n,e)),p.set(n,{id:N(n,e,n),clusterData:e.node(n)}))})),e.nodes().forEach((function(n){const t=e.children(n),r=e.edges();t.length>0?(o.Rm.debug("Cluster identified",n,m),r.forEach((e=>{v(e.v,n)^v(e.w,n)&&(o.Rm.warn("Edge: ",e," leaves cluster ",n),o.Rm.warn("Descendants of XXX ",n,": ",m.get(n)),p.get(n).externalConnections=!0)}))):o.Rm.debug("Not a cluster ",n,m)}));for(let n of p.keys()){const t=p.get(n).id,r=e.parent(t);r!==n&&p.has(r)&&!p.get(r).externalConnections&&(p.get(n).id=r)}e.edges().forEach((function(n){const t=e.edge(n);o.Rm.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),o.Rm.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let r=n.v,i=n.w;if(o.Rm.warn("Fix XXX",p,"ids:",n.v,n.w,"Translating: ",p.get(n.v)," --- ",p.get(n.w)),p.get(n.v)||p.get(n.w)){if(o.Rm.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),r=C(n.v),i=C(n.w),e.removeEdge(n.v,n.w,n.name),r!==n.v){const i=e.parent(r);p.get(i).externalConnections=!0,t.fromCluster=n.v}if(i!==n.w){const r=e.parent(i);p.get(r).externalConnections=!0,t.toCluster=n.w}o.Rm.warn("Fix Replacing with XXX",r,i,n.name),e.setEdge(r,i,t,n.name)}})),o.Rm.warn("Adjusted Graph",l(e)),x(e,0),o.Rm.trace(p)}}),"adjustClustersAndEdges"),x=(0,o.K2)(((e,n)=>{if(o.Rm.warn("extractor - ",n,l(e),e.children("D")),n>10)return void o.Rm.error("Bailing out");let t=e.nodes(),r=!1;for(const i of t){const n=e.children(i);r=r||n.length>0}if(r){o.Rm.debug("Nodes = ",t,n);for(const r of t)if(o.Rm.debug("Extracting node",r,p,p.has(r)&&!p.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",n),p.has(r))if(!p.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){o.Rm.warn("Cluster without external connections, without a parent and with children",r,n);let t="TB"===e.graph().rankdir?"LR":"TB";p.get(r)?.clusterData?.dir&&(t=p.get(r).clusterData.dir,o.Rm.warn("Fixing dir",p.get(r).clusterData.dir,t));const i=new u.T({multigraph:!0,compound:!0}).setGraph({rankdir:t,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));o.Rm.warn("Old graph before copy",l(e)),X(r,e,i,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:p.get(r).clusterData,label:p.get(r).label,graph:i}),o.Rm.warn("New graph after copy node: (",r,")",l(i)),o.Rm.debug("Old graph after copy",l(e))}else o.Rm.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!p.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),n),o.Rm.debug(p);else o.Rm.debug("Not a cluster",r,n);t=e.nodes(),o.Rm.warn("New list of nodes",t);for(const r of t){const t=e.node(r);o.Rm.warn(" Now next level",r,t),t?.clusterNode&&x(t.graph,n+1)}}else o.Rm.debug("Done, no node has children",e.nodes())}),"extractor"),I=(0,o.K2)(((e,n)=>{if(0===n.length)return[];let t=Object.assign([],n);return n.forEach((n=>{const r=e.children(n),i=I(e,r);t=[...t,...i]})),t}),"sorter"),D=(0,o.K2)((e=>I(e,e.children())),"sortNodesByHierarchy"),A=(0,o.K2)((async(e,n,t,s,c,g)=>{o.Rm.warn("Graph in recursive render:XAX",l(n),c);const f=n.graph().rankdir;o.Rm.trace("Dir in recursive render - dir:",f);const h=e.insert("g").attr("class","root");n.nodes()?o.Rm.info("Recursive render XXX",n.nodes()):o.Rm.info("No nodes found for",n),n.edges().length>0&&o.Rm.info("Recursive edges",n.edge(n.edges()[0]));const u=h.insert("g").attr("class","clusters"),m=h.insert("g").attr("class","edgePaths"),w=h.insert("g").attr("class","edgeLabels"),R=h.insert("g").attr("class","nodes");await Promise.all(n.nodes().map((async function(e){const r=n.node(e);if(void 0!==c){const t=JSON.parse(JSON.stringify(c.clusterData));o.Rm.trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",t.height,"\nParent cluster",c.height),n.setNode(c.id,t),n.parent(e)||(o.Rm.trace("Setting parent",e,c.id),n.setParent(e,c.id,t))}if(o.Rm.info("(Insert) Node XXX"+e+": "+JSON.stringify(n.node(e))),r?.clusterNode){o.Rm.info("Cluster identified XBX",e,r.width,n.node(e));const{ranksep:a,nodesep:d}=n.graph();r.graph.setGraph({...r.graph.graph(),ranksep:a+25,nodesep:d});const c=await A(R,r.graph,t,s,n.node(e),g),l=c.elem;(0,i.lC)(r,l),r.diff=c.diff||0,o.Rm.info("New compound node after recursive render XAX",e,"width",r.width,"height",r.height),(0,i.U7)(l,r)}else n.children(e).length>0?(o.Rm.trace("Cluster - the non recursive path XBX",e,r.id,r,r.width,"Graph:",n),o.Rm.trace(N(r.id,n)),p.set(r.id,{id:N(r.id,n),node:r})):(o.Rm.trace("Node - the non recursive path XAX",e,R,n.node(e),f),await(0,i.on)(R,n.node(e),{config:g,dir:f}))})));const v=(0,o.K2)((async()=>{const e=n.edges().map((async function(e){const t=n.edge(e.v,e.w,e.name);o.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),o.Rm.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(n.edge(e))),o.Rm.info("Fix",p,"ids:",e.v,e.w,"Translating: ",p.get(e.v),p.get(e.w)),await(0,r.jP)(w,t)}));await Promise.all(e)}),"processEdges");await v(),o.Rm.info("Graph before layout:",JSON.stringify(l(n))),o.Rm.info("############################################# XXX"),o.Rm.info("###                Layout                 ### XXX"),o.Rm.info("############################################# XXX"),(0,d.Zp)(n),o.Rm.info("Graph after layout:",JSON.stringify(l(n)));let y=0,{subGraphTitleTotalMargin:X}=(0,a.O)(g);return await Promise.all(D(n).map((async function(e){const t=n.node(e);if(o.Rm.info("Position XBX => "+e+": ("+t.x,","+t.y,") width: ",t.width," height: ",t.height),t?.clusterNode)t.y+=X,o.Rm.info("A tainted cluster node XBX1",e,t.id,t.width,t.height,t.x,t.y,n.parent(e)),p.get(t.id).node=t,(0,i.U_)(t);else if(n.children(e).length>0){o.Rm.info("A pure cluster node XBX1",e,t.id,t.x,t.y,t.width,t.height,n.parent(e)),t.height+=X,n.node(t.parentId);const r=t?.padding/2||0,a=t?.labelBBox?.height||0,d=a-r||0;o.Rm.debug("OffsetY",d,"labelHeight",a,"halfPadding",r),await(0,i.U)(u,t),p.get(t.id).node=t}else{const e=n.node(t.parentId);t.y+=X/2,o.Rm.info("A regular node XBX1 - using the padding",t.id,"parent",t.parentId,t.width,t.height,t.x,t.y,"offsetY",t.offsetY,"parent",e,e?.offsetY,t),(0,i.U_)(t)}}))),n.edges().forEach((function(e){const i=n.edge(e);o.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(i),i),i.points.forEach((e=>e.y+=X/2));const a=n.node(e.v);var d=n.node(e.w);const c=(0,r.Jo)(m,i,p,t,a,d,s);(0,r.T_)(i,c)})),n.nodes().forEach((function(e){const t=n.node(e);o.Rm.info(e,t.type,t.diff),t.isGroup&&(y=t.diff)})),o.Rm.warn("Returning from recursive render XAX",h,y),{elem:h,diff:y}}),"recursiveRender"),O=(0,o.K2)((async(e,n)=>{const t=new u.T({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),a=n.select("g");(0,r.g0)(a,e.markers,e.type,e.diagramId),(0,i.gh)(),(0,r.IU)(),(0,i.IU)(),R(),e.nodes.forEach((e=>{t.setNode(e.id,{...e}),e.parentId&&t.setParent(e.id,e.parentId)})),o.Rm.debug("Edges:",e.edges),e.edges.forEach((e=>{if(e.start===e.end){const n=e.start,r=n+"---"+n+"---1",i=n+"---"+n+"---2",a=t.node(n);t.setNode(r,{domId:r,id:r,parentId:a.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),t.setParent(r,a.parentId),t.setNode(i,{domId:i,id:i,parentId:a.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),t.setParent(i,a.parentId);const o=structuredClone(e),d=structuredClone(e),s=structuredClone(e);o.label="",o.arrowTypeEnd="none",o.id=n+"-cyclic-special-1",d.arrowTypeStart="none",d.arrowTypeEnd="none",d.id=n+"-cyclic-special-mid",s.label="",a.isGroup&&(o.fromCluster=n,s.toCluster=n),s.id=n+"-cyclic-special-2",s.arrowTypeStart="none",t.setEdge(n,r,o,n+"-cyclic-special-0"),t.setEdge(r,i,d,n+"-cyclic-special-1"),t.setEdge(i,n,s,n+"-cyc<lic-special-2")}else t.setEdge(e.start,e.end,{...e},e.id)})),o.Rm.warn("Graph at first:",JSON.stringify(l(t))),S(t),o.Rm.warn("Graph after XAX:",JSON.stringify(l(t)));const d=(0,o.D7)();await A(a,t,e.type,e.diagramId,void 0,d)}),"render")}}]);