"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3085],{4247:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(7294),r=n(6010),o=n(1944),c=n(5281),l=n(4730),i=n(5042),s=n(9407);const u="mdxPageWrapper_j9I6";function m(e){var t=e.content,n=t.metadata,m=n.title,d=n.description,f=n.frontMatter,v=f.wrapperClassName,h=f.hide_table_of_contents;return a.createElement(o.FG,{className:(0,r.Z)(null!=v?v:c.k.wrapper.mdxPages,c.k.page.mdxPage)},a.createElement(o.d,{title:m,description:d}),a.createElement(l.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",u)},a.createElement("div",{className:(0,r.Z)("col",!h&&"col--8")},a.createElement("article",null,a.createElement(i.Z,null,a.createElement(t,null)))),!h&&t.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:t.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level}))))))}},671:(e,t,n)=>{n.d(t,{Z:()=>ne});var a=n(7242),r=n(7294);var o=n(3366),c=n(4184),l=n.n(c),i=n(1804),s=n.n(i),u=["children"];const m=function(e){var t=e.children,n=(0,o.Z)(e,u),a=l()(n).split(" ").map((function(e){return s()(e)})).join(" ");return r.createElement("span",{className:a},t)};var d=n(7273);d.Z.initialize({startOnLoad:!0});const f=function(e){var t=e.chart;return(0,r.useEffect)((function(){d.Z.contentLoaded()}),[]),r.createElement("div",{className:"mermaid"},t)};var v=n(4592),h=n(3213);const p="a499d",g="abb0d",E="a7d08",C="db44d",y="d6e0a",b="ec955",k="b13d6",Z="ad47a",w="e1f64";var N=n(8775),x=n(2430),M=n(5021),O=n.n(M),R=n(2003);const _=function(e){var t=[];return function e(n,a){void 0===a&&(a=[]);var r=n.state.id||"";n.children?n.children.forEach((function(t){e(t,[].concat(a,[r]))})):t.push({parents:a,content:n.content||"",id:r})}(e),t},L=function(e,t){var n={},a="<]_!->";return t.forEach((function(t){var r=t.content,o=t.parents,c=t.id,l=r.replace(/<[^>]*>?/gm,a);if(O()(l).indexOf(O()(e))>-1){var i=new RegExp("(>[^><]*)("+e+")([^><]*<)","im"),s=("<]_!->"+r+a).replace(i,'$1<span id="mm-match-'+c+'" class="mm-match-text b bg-1">$2</span>$3').replaceAll(a,"");o.forEach((function(e){n[e]||(n[e]=!0)})),n[c]=s}})),n},z={zoomNormal:function(e){var t=e.svg.node().getBoundingClientRect(),n=t.width,a=t.height,r=e.state,o=r.minX,c=r.maxX,l=r.minY,i=r.maxY-l,s=c-o,u=1.2,m=x.CRH.translate((n-i*u)/2-l*u,(a-s*u)/2-o*u).scale(u);return e.transition(e.svg).call(e.zoom.transform,m).end().catch(R.ZT)},allClose:function(e){e.setData(void 0,{autoFit:!0,initialExpandLevel:1})},allOpen:function(e){var t=!1;(0,R.in)(e.state.data,(function(e,n){e.rawContent&&(t=!0,e.content=e.rawContent,e.rawContent=""),e.payload=Object.assign({},e.payload,{fold:0}),n()})),t?e.setData():e.renderData()},centerNode:function(e,t,n){var a=e.svg.node().getBoundingClientRect(),r=1.2*-t+a.width/2,o=1.2*-n+a.height/2,c=x.CRH.translate(r,o).scale(1.2);e.svg.transition().duration(300).call(e.zoom.transform,c).end().catch(R.ZT)}};var D=function(e){if(e.handleClick){e.handleClick=function(t,n){var a,r=null!=(a=n.data.payload)&&a.fold?0:1;(0,R.in)(n.data,(function(e,t){e.payload=Object.assign({},e.payload,{fold:r}),t()})),e.renderData(n.data)}}};const T=function(e,t){var n=new N.o;n.setBrand(!1),n.setItems(["allClose","allOpen","zoomNormal","fit","zoomIn","zoomOut"]),n.attach(t),n.register({id:"zoomNormal",title:"Zoom font normal",content:N.o.icon("M182.032,167.936v1.571219h-4.141567v8.428781h-1.716867v-8.428781h-4.141567v-1.571219h10Z",{transform:"translate(-167.032-162.936)"}),onClick:function(){z.zoomNormal(t)}}),n.register({id:"allClose",title:"Close all",content:N.o.icon("M97.314367,264.472218v1.694444h-8.386724v-1.694444h8.386724Zm-10.931633-6.786124l-.004998,6.784177-3.274059-3.392607l3.279057-3.39157Zm10.931633,2.550015v1.694444h-8.386724v-1.694444h8.386724Zm0-4.236109v1.694444h-8.386724v-1.694444h8.386724Z",{transform:"matrix(1.001583-.000751 0.000738 0.983607-80.544423-246.735547)"}),onClick:function(){z.allClose(t)}}),n.register({id:"allOpen",title:"Open all",content:N.o.icon("M97.314367,264.472218v1.694444h-8.386724v-1.694444h8.386724Zm-10.931633-6.786124l-.004998,6.784177-3.274059-3.392607l3.279057-3.39157Zm10.931633,2.550015v1.694444h-8.386724v-1.694444h8.386724Zm0-4.236109v1.694444h-8.386724v-1.694444h8.386724Z",{transform:"matrix(-1.001579-.00299-.002937 0.983603 101.118148-246.532487)"}),onClick:function(){z.allOpen(t)}}),D(t);var a=n.render();a.classList.add(C),e.current.append(a)};var I=n(3279),j=n.n(I),S=n(7037),A=n.n(S),B=n(1609),F=n.n(B),H=n(7334),P=n.n(H),X=n(5161),Y=n.n(X),$=n(6486),q=function(e,t){void 0===e&&(e=6);var n,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[],o=0;if(t=t||a.length,e)for(o=0;o<e;o++)r[o]=a[0|Math.random()*t];else for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",o=0;o<36;o++)r[o]||(n=0|16*Math.random(),r[o]=a[19===o?3&n|8:n]);return r.join("")},G={};const J=function(e){var t=q();return{timerId:t,run:function(n,a){var r="number"==typeof n?a:n;G[t]&&clearTimeout(G[t]),G[t]=setTimeout(r,n||e)},clear:function(){G[t]&&(clearTimeout(G[t]),G[t]=null,delete G[t])}}};const K={useTimeoutRef:function(e){void 0===e&&(e=[]);var t=e.length?e:["timer"],n=(0,r.useMemo)((function(){var e={};return t.forEach((function(t){e[t]=J()})),e}),[]),a=(0,r.useRef)(n);return(0,r.useEffect)((function(){return function(){(0,$.map)(a.current,(function(e){e.clear()}))}}),[]),a.current}};const U=function(e){var t=e.mm,n=e.filteredMap,a=e.onClear,o=(0,r.useState)(0),c=o[0],l=o[1],i=K.useTimeoutRef(),s=(0,r.useMemo)((function(){var e=[];Y()(n,(function(t,n){A()(t)&&e.push(n)}));var t=e.length;return{matchItems:e,allCount:t,hasCount:t>0,hasMoreCount:t>1}}),[n]),u=s.allCount,m=s.hasCount,d=s.hasMoreCount,f=s.matchItems;(0,r.useEffect)((function(){m?(l(1),t.current&&i.timer.run(450,(function(){h(f[0])}))):l(0)}),[n]);var v=function(e){var n=!1;t.current.g.selectAll("g").filter((function(a){var r=a.data.state,o=r.id,c=void 0===o?"":o,l=r.x0,i=r.y0;if(!n&&""+c===e){z.centerNode(t.current,i,l),n=!0;var s=document.getElementById("mm-match-"+c);return s&&(t.current.svg.node().querySelectorAll(".mm-match-text").forEach((function(e){e.classList.replace("bg-4","bg-1")})),s.classList.replace("bg-1","bg-4")),!0}return!1}))},h=(0,r.useMemo)((function(){return j()(v,200)}),[]),p=function(e){var t=e.currentTarget.dataset.key;if(d){var n=c;if("left"===t){var a=c-1;n=a<1?u:a}else{var r=c+1;n=r>u?1:r}l(n),h(f[n-1])}};return r.createElement("div",{className:k},r.createElement("span",{className:Z},c,"/",u),r.createElement("span",{className:w},r.createElement("button",{disabled:!d},r.createElement("i",{"data-key":"left",onClick:p},"<"),r.createElement("i",{"data-key":"right",onClick:p},">")),r.createElement("i",{"data-key":"close",onClick:a},"x")))};const W=function(e){var t=e.mm,n=(0,r.useState)(""),a=n[0],o=n[1],c=(0,r.useState)({}),l=c[0],i=c[1],s=function(e){var n=t.current,a=n.state,r=n.flatData;if(e){var o=L(e,r);F()(o)?i({empty:!0}):((0,R.in)(a.data,(function(t,n){var a=o[t.state.id];t.payload.rawFold=t.payload.fold;var r=0;r=e?a?0:1:t.payload.rawFold,A()(a)?(t.rawContent=t.content,t.content=a):t.rawContent&&(t.content=t.rawContent,t.rawContent=""),t.payload=Object.assign({},t.payload,{fold:0==t.depth?0:r}),n()})),t.current.setData(),i(o))}else z.allOpen(t.current)},u=(0,r.useMemo)((function(){return j()(s,500)}),[]),m=function(){o(""),u(""),i({})};return r.createElement("div",{className:y},r.createElement("input",{placeholder:"\u641c\u7d22...",className:b,value:a,onKeyDown:function(e){var t=P()(e.code),n={enter:function(){u(a)},escape:m};n[t]&&n[t]()},onChange:function(e){var t=e.target.value;o(void 0===t?"":t)}}),!F()(l)&&r.createElement(U,{filteredMap:l,onClear:m,mm:t}))};var Q=h.Markmap,V=h.loadCSS,ee=h.loadJS;const te=function(e){var t,n=e.md,a=void 0===n?"":n,o=e.readOnly,c=void 0!==o&&o,i=e.height,s=void 0===i?"300px":i,u=e.bg,m=void 0!==u&&u,d=e.onResolveData,f=e.initialLevel,C=void 0===f?-1:f,y=e.onInit,b=e.css,k=void 0===b?"":b,Z=(0,r.useRef)(),w=(0,r.useRef)(),N=(0,r.useRef)({}),x={height:s};return(0,r.useEffect)((function(){return e=new v.Transformer,t=e.transform(a),n=t.root,r=t.features,o=e.getUsedAssets(r),l=o.styles,i=o.scripts,l&&V(l),i&&ee(i,{getMarkmap:function(){return h}}),d&&d(n),N.current=Q.create(w.current,{initialExpandLevel:C},n),N.current.flatData=_(n),c||T(Z,N.current),y&&y(N.current),function(){N.current.destroy()};var e,t,n,r,o,l,i}),[]),r.createElement("div",{ref:Z,className:l()(p,(t={},t[E]=m,t[g]=c,t))},k&&r.createElement("style",null,k),!c&&r.createElement(W,{mm:N}),r.createElement("svg",{ref:w,style:x}))},ne=Object.assign({},a.Z,{highlight:function(e){var t=e.children,n=e.color;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},t:m,mermaid:f,markmap:te})}}]);