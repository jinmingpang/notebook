"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3085],{4247:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(7294),r=n(6010),o=n(1944),c=n(5281),l=n(4730),i=n(5042),s=n(9407);const u="mdxPageWrapper_j9I6";function m(e){var t=e.content,n=t.metadata,m=n.title,d=n.description,f=n.frontMatter,v=f.wrapperClassName,h=f.hide_table_of_contents;return a.createElement(o.FG,{className:(0,r.Z)(null!=v?v:c.k.wrapper.mdxPages,c.k.page.mdxPage)},a.createElement(o.d,{title:m,description:d}),a.createElement(l.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",u)},a.createElement("div",{className:(0,r.Z)("col",!h&&"col--8")},a.createElement("article",null,a.createElement(i.Z,null,a.createElement(t,null)))),!h&&t.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:t.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level}))))))}},4719:(e,t,n)=>{n.d(t,{Z:()=>ae});var a=n(7242),r=n(3366),o=n(7294),c=n(4184),l=n.n(c),i=n(1804),s=n.n(i),u=["children"];const m=function(e){var t=e.children,n=(0,r.Z)(e,u),a=l()(n).split(" ").map((function(e){return s()(e)})).join(" ");return o.createElement("span",{className:a},t)};const d=function(e){var t=e.children,n=e.css;return o.createElement("div",{className:"box"},n&&o.createElement("style",null,n),t)};var f=n(7273);f.Z.initialize({startOnLoad:!0});const v=function(e){var t=e.chart;return(0,o.useEffect)((function(){f.Z.contentLoaded()}),[]),o.createElement("div",{className:"mermaid"},t)};var h=n(4592),p=n(3213);const g="a499d",E="abb0d",C="a7d08",y="db44d",b="d6e0a",k="ec955",Z="b13d6",N="ad47a",w="e1f64";var x=n(8775),M=n(2430),O=n(5021),R=n.n(O),_=n(2003);const L=function(e){var t=[];return function e(n,a){void 0===a&&(a=[]);var r=n.state.id||"";n.children?n.children.forEach((function(t){e(t,[].concat(a,[r]))})):t.push({parents:a,content:n.content||"",id:r})}(e),t},z=function(e,t){var n={},a="<]_!->";return t.forEach((function(t){var r=t.content,o=t.parents,c=t.id,l=r.replace(/<[^>]*>?/gm,a);if(R()(l).indexOf(R()(e))>-1){var i=new RegExp("(>[^><]*)("+e+")([^><]*<)","im"),s=("<]_!->"+r+a).replace(i,'$1<span id="mm-match-'+c+'" class="mm-match-text b bg-1">$2</span>$3').replaceAll(a,"");o.forEach((function(e){n[e]||(n[e]=!0)})),n[c]=s}})),n},D={zoomNormal:function(e){var t=e.svg.node().getBoundingClientRect(),n=t.width,a=t.height,r=e.state,o=r.minX,c=r.maxX,l=r.minY,i=r.maxY-l,s=c-o,u=1.2,m=M.CRH.translate((n-i*u)/2-l*u,(a-s*u)/2-o*u).scale(u);return e.transition(e.svg).call(e.zoom.transform,m).end().catch(_.ZT)},allClose:function(e){e.setData(void 0,{autoFit:!0,initialExpandLevel:1})},allOpen:function(e){var t=!1;(0,_.in)(e.state.data,(function(e,n){e.rawContent&&(t=!0,e.content=e.rawContent,e.rawContent=""),e.payload=Object.assign({},e.payload,{fold:0}),n()})),t?e.setData():e.renderData()},centerNode:function(e,t,n){var a=e.svg.node().getBoundingClientRect(),r=1.2*-t+a.width/2,o=1.2*-n+a.height/2,c=M.CRH.translate(r,o).scale(1.2);e.svg.transition().duration(300).call(e.zoom.transform,c).end().catch(_.ZT)}};var T=function(e){if(e.handleClick){e.handleClick=function(t,n){var a,r=null!=(a=n.data.payload)&&a.fold?0:1;(0,_.in)(n.data,(function(e,t){e.payload=Object.assign({},e.payload,{fold:r}),t()})),e.renderData(n.data)}}};const I=function(e,t){var n=new x.o;n.setBrand(!1),n.setItems(["allClose","allOpen","zoomNormal","fit","zoomIn","zoomOut"]),n.attach(t),n.register({id:"zoomNormal",title:"Zoom font normal",content:x.o.icon("M182.032,167.936v1.571219h-4.141567v8.428781h-1.716867v-8.428781h-4.141567v-1.571219h10Z",{transform:"translate(-167.032-162.936)"}),onClick:function(){D.zoomNormal(t)}}),n.register({id:"allClose",title:"Close all",content:x.o.icon("M97.314367,264.472218v1.694444h-8.386724v-1.694444h8.386724Zm-10.931633-6.786124l-.004998,6.784177-3.274059-3.392607l3.279057-3.39157Zm10.931633,2.550015v1.694444h-8.386724v-1.694444h8.386724Zm0-4.236109v1.694444h-8.386724v-1.694444h8.386724Z",{transform:"matrix(1.001583-.000751 0.000738 0.983607-80.544423-246.735547)"}),onClick:function(){D.allClose(t)}}),n.register({id:"allOpen",title:"Open all",content:x.o.icon("M97.314367,264.472218v1.694444h-8.386724v-1.694444h8.386724Zm-10.931633-6.786124l-.004998,6.784177-3.274059-3.392607l3.279057-3.39157Zm10.931633,2.550015v1.694444h-8.386724v-1.694444h8.386724Zm0-4.236109v1.694444h-8.386724v-1.694444h8.386724Z",{transform:"matrix(-1.001579-.00299-.002937 0.983603 101.118148-246.532487)"}),onClick:function(){D.allOpen(t)}}),T(t);var a=n.render();a.classList.add(y),e.current.append(a)};var j=n(3279),S=n.n(j),A=n(7037),B=n.n(A),F=n(1609),H=n.n(F),P=n(7334),X=n.n(P),Y=n(5161),$=n.n(Y),q=n(6486),G=function(e,t){void 0===e&&(e=6);var n,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[],o=0;if(t=t||a.length,e)for(o=0;o<e;o++)r[o]=a[0|Math.random()*t];else for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",o=0;o<36;o++)r[o]||(n=0|16*Math.random(),r[o]=a[19===o?3&n|8:n]);return r.join("")},J={};const K=function(e){var t=G();return{timerId:t,run:function(n,a){var r="number"==typeof n?a:n;J[t]&&clearTimeout(J[t]),J[t]=setTimeout(r,n||e)},clear:function(){J[t]&&(clearTimeout(J[t]),J[t]=null,delete J[t])}}};const U={useTimeoutRef:function(e){void 0===e&&(e=[]);var t=e.length?e:["timer"],n=(0,o.useMemo)((function(){var e={};return t.forEach((function(t){e[t]=K()})),e}),[]),a=(0,o.useRef)(n);return(0,o.useEffect)((function(){return function(){(0,q.map)(a.current,(function(e){e.clear()}))}}),[]),a.current}};const W=function(e){var t=e.mm,n=e.filteredMap,a=e.onClear,r=(0,o.useState)(0),c=r[0],l=r[1],i=U.useTimeoutRef(),s=(0,o.useMemo)((function(){var e=[];$()(n,(function(t,n){B()(t)&&e.push(n)}));var t=e.length;return{matchItems:e,allCount:t,hasCount:t>0,hasMoreCount:t>1}}),[n]),u=s.allCount,m=s.hasCount,d=s.hasMoreCount,f=s.matchItems;(0,o.useEffect)((function(){m?(l(1),t.current&&i.timer.run(450,(function(){h(f[0])}))):l(0)}),[n]);var v=function(e){var n=!1;t.current.g.selectAll("g").filter((function(a){var r=a.data.state,o=r.id,c=void 0===o?"":o,l=r.x0,i=r.y0;if(!n&&""+c===e){D.centerNode(t.current,i,l),n=!0;var s=document.getElementById("mm-match-"+c);return s&&(t.current.svg.node().querySelectorAll(".mm-match-text").forEach((function(e){e.classList.replace("bg-4","bg-1")})),s.classList.replace("bg-1","bg-4")),!0}return!1}))},h=(0,o.useMemo)((function(){return S()(v,200)}),[]),p=function(e){var t=e.currentTarget.dataset.key;if(d){var n=c;if("left"===t){var a=c-1;n=a<1?u:a}else{var r=c+1;n=r>u?1:r}l(n),h(f[n-1])}};return o.createElement("div",{className:Z},o.createElement("span",{className:N},c,"/",u),o.createElement("span",{className:w},o.createElement("button",{disabled:!d},o.createElement("i",{"data-key":"left",onClick:p},"<"),o.createElement("i",{"data-key":"right",onClick:p},">")),o.createElement("i",{"data-key":"close",onClick:a},"x")))};const Q=function(e){var t=e.mm,n=(0,o.useState)(""),a=n[0],r=n[1],c=(0,o.useState)({}),l=c[0],i=c[1],s=function(e){var n=t.current,a=n.state,r=n.flatData;if(e){var o=z(e,r);H()(o)?i({empty:!0}):((0,_.in)(a.data,(function(t,n){var a=o[t.state.id];t.payload.rawFold=t.payload.fold;var r=0;r=e?a?0:1:t.payload.rawFold,B()(a)?(t.rawContent=t.content,t.content=a):t.rawContent&&(t.content=t.rawContent,t.rawContent=""),t.payload=Object.assign({},t.payload,{fold:0==t.depth?0:r}),n()})),t.current.setData(),i(o))}else D.allOpen(t.current)},u=(0,o.useMemo)((function(){return S()(s,500)}),[]),m=function(){r(""),u(""),i({})};return o.createElement("div",{className:b},o.createElement("input",{placeholder:"\u641c\u7d22...",className:k,value:a,onKeyDown:function(e){var t=X()(e.code),n={enter:function(){u(a)},escape:m};n[t]&&n[t]()},onChange:function(e){var t=e.target.value;r(void 0===t?"":t)}}),!H()(l)&&o.createElement(W,{filteredMap:l,onClear:m,mm:t}))};var V=p.Markmap,ee=p.loadCSS,te=p.loadJS;const ne=function(e){var t,n=e.md,a=void 0===n?"":n,r=e.readOnly,c=void 0!==r&&r,i=e.height,s=void 0===i?"300px":i,u=e.bg,m=void 0!==u&&u,d=e.onResolveData,f=e.initialLevel,v=void 0===f?-1:f,y=e.onInit,b=e.css,k=void 0===b?"":b,Z=(0,o.useRef)(),N=(0,o.useRef)(),w=(0,o.useRef)({}),x={height:s};return(0,o.useEffect)((function(){return e=new h.Transformer,t=e.transform(a),n=t.root,r=t.features,o=e.getUsedAssets(r),l=o.styles,i=o.scripts,l&&ee(l),i&&te(i,{getMarkmap:function(){return p}}),d&&d(n),w.current=V.create(N.current,{initialExpandLevel:v},n),w.current.flatData=L(n),c||I(Z,w.current),y&&y(w.current),function(){w.current.destroy()};var e,t,n,r,o,l,i}),[]),o.createElement("div",{ref:Z,className:l()(g,(t={},t[C]=m,t[E]=c,t))},k&&o.createElement("style",null,k),!c&&o.createElement(Q,{mm:w}),o.createElement("svg",{ref:N,style:x}))},ae=Object.assign({},a.Z,{t:m,box:d,mermaid:v,markmap:ne})}}]);