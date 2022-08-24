"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[7918],{3332:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ce});var n=a(7294),r=a(1944),l=a(9688),o=n.createContext(null);function c(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(o.Provider,{value:a},t)}function i(){var e=(0,n.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function s(){var e,t=i(),a=t.metadata,l=t.frontMatter,o=t.assets;return n.createElement(r.d,{title:a.title,description:a.description,keywords:l.keywords,image:null!=(e=o.image)?e:l.image})}var d=a(6010),m=a(7524),u=a(7462),v=a(5999),f=a(9960);function p(e){var t=e.permalink,a=e.title,r=e.subLabel,l=e.isNext;return n.createElement(f.Z,{className:(0,d.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}function h(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(p,(0,u.Z)({},t,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(p,(0,u.Z)({},a,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){var e=i().metadata;return n.createElement(h,{previous:e.previous,next:e.next})}var E=a(2263),g=a(143),Z=a(5281),k=a(373),N=a(4477);var C={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function L(e){var t=C[e.versionMetadata.banner];return n.createElement(t,e)}function _(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(f.Z,{to:a,onClick:r},n.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y(e){var t,a=e.className,r=e.versionMetadata,l=(0,E.Z)().siteConfig.title,o=(0,g.gA)({failfast:!0}).pluginId,c=(0,k.J)(o).savePreferredVersionName,i=(0,g.Jo)(o),s=i.latestDocSuggestion,m=i.latestVersionSuggestion,u=null!=s?s:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.Z)(a,Z.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(L,{siteTitle:l,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(_,{versionLabel:m.label,to:u.path,onClick:function(){return c(m.name)}})))}function T(e){var t=e.className,a=(0,N.E)();return a.banner?n.createElement(y,{className:t,versionMetadata:a}):null}function w(e){var t=e.className,a=(0,N.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,Z.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function x(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function M(e){var t=e.lastUpdatedBy;return n.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function U(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:Z.k.common.lastUpdated},n.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(M,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var A=a(3366);const I="iconEdit_Z9Sw";var B=["className"];function O(e){var t=e.className,a=(0,A.Z)(e,B);return n.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(I,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function D(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:Z.k.common.editThisPage},n.createElement(O,null),n.createElement(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const R="tag_zVej",S="tagRegular_sFm0",H="tagWithCount_h2kH";function V(e){var t=e.permalink,a=e.label,r=e.count;return n.createElement(f.Z,{href:t,className:(0,d.Z)(R,r?H:S)},a,r&&n.createElement("span",null,r))}const z="tags_jXut",P="tag_QGVx";function j(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(z,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:P},n.createElement(V,{label:t,permalink:a}))}))))}const F="lastUpdated_vwxv";function q(e){return n.createElement("div",{className:(0,d.Z)(Z.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(j,e)))}function G(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.Z)(Z.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(D,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",F)},(a||r)&&n.createElement(U,{lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function J(){var e=i().metadata,t=e.editUrl,a=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,l=e.lastUpdatedBy,o=e.tags,c=o.length>0,s=!!(t||a||l);return c||s?n.createElement("footer",{className:(0,d.Z)(Z.k.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(q,{tags:o}),s&&n.createElement(G,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var X=a(6043),Y=a(3743);const $="tocCollapsibleButton_TO0P",K="tocCollapsibleButtonExpanded_MG3E";var Q=["collapsed"];function W(e){var t=e.collapsed,a=(0,A.Z)(e,Q);return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",$,!t&&K,a.className)}),n.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const ee="tocCollapsible_ETCw",te="tocCollapsibleContent_vkbj",ae="tocCollapsibleExpanded_sAul";function ne(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,l=e.maxHeadingLevel,o=(0,X.u)({initialState:!0}),c=o.collapsed,i=o.toggleCollapsed;return n.createElement("div",{className:(0,d.Z)(ee,!c&&ae,a)},n.createElement(W,{collapsed:c,onClick:i}),n.createElement(X.z,{lazy:!0,className:te,collapsed:c},n.createElement(Y.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}const re="tocMobile_ITEo";function le(){var e=i(),t=e.toc,a=e.frontMatter;return n.createElement(ne,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.Z)(Z.k.docs.docTocMobile,re)})}var oe=a(9407);function ce(){var e=i(),t=e.toc,a=e.frontMatter;return n.createElement(oe.Z,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:Z.k.docs.docTocDesktop})}var ie=a(2503),se=a(5042);function de(e){var t,a,r,l,o=e.children,c=(t=i(),a=t.metadata,r=t.frontMatter,l=t.contentTitle,r.hide_title||void 0!==l?null:a.title);return n.createElement("div",{className:(0,d.Z)(Z.k.docs.docMarkdown,"markdown")},c&&n.createElement("header",null,n.createElement(ie.Z,{as:"h1"},c)),n.createElement(se.Z,null,o))}var me=a(2802),ue=a(8596),ve=a(4996);function fe(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const pe={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function he(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(f.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function be(e){var t=e.children,a=e.active,r=e.index,l=e.addMicrodata;return n.createElement("li",(0,u.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function Ee(){var e=(0,ve.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(f.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",pe.breadcrumbsItemLink),href:e},n.createElement(fe,{className:pe.breadcrumbHomeIcon})))}function ge(){var e=(0,me.s1)(),t=(0,ue.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(Z.k.docs.docBreadcrumbs,pe.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(Ee,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement(be,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(he,{href:t.href,isLast:r},t.label))})))):null}const Ze="docItemContainer_Djhp",ke="docItemCol_VOVn";function Ne(e){var t,a,r,l,o,c,s=e.children,u=(t=i(),a=t.frontMatter,r=t.toc,l=(0,m.i)(),o=a.hide_table_of_contents,c=!o&&r.length>0,{hidden:o,mobile:c?n.createElement(le,null):void 0,desktop:!c||"desktop"!==l&&"ssr"!==l?void 0:n.createElement(ce,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!u.hidden&&ke)},n.createElement(T,null),n.createElement("div",{className:Ze},n.createElement("article",null,n.createElement(ge,null),n.createElement(w,null),u.mobile,n.createElement(de,null,s),n.createElement(J,null)),n.createElement(b,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function Ce(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(c,{content:e.content},n.createElement(r.FG,{className:t},n.createElement(s,null),n.createElement(Ne,null,n.createElement(a,null))))}},671:(e,t,a)=>{a.d(t,{Z:()=>ae});var n=a(7242),r=a(7294);var l=a(3366),o=a(4184),c=a.n(o),i=a(1804),s=a.n(i),d=["children"];const m=function(e){var t=e.children,a=(0,l.Z)(e,d),n=c()(a).split(" ").map((function(e){return s()(e)})).join(" ");return r.createElement("span",{className:n},t)};var u=a(7273);u.Z.initialize({startOnLoad:!0});const v=function(e){var t=e.chart;return(0,r.useEffect)((function(){u.Z.contentLoaded()}),[]),r.createElement("div",{className:"mermaid"},t)};var f=a(4592),p=a(3213);const h="a499d",b="abb0d",E="a7d08",g="db44d",Z="d6e0a",k="ec955",N="b13d6",C="ad47a",L="e1f64";var _=a(8775),y=a(2430),T=a(5021),w=a.n(T),x=a(2003);const M=function(e){var t=[];return function e(a,n){void 0===n&&(n=[]);var r=a.state.id||"";a.children?a.children.forEach((function(t){e(t,[].concat(n,[r]))})):t.push({parents:n,content:a.content||"",id:r})}(e),t},U=function(e,t){var a={},n="<]_!->";return t.forEach((function(t){var r=t.content,l=t.parents,o=t.id,c=r.replace(/<[^>]*>?/gm,n);if(w()(c).indexOf(w()(e))>-1){var i=new RegExp("(>[^><]*)("+e+")([^><]*<)","im"),s=("<]_!->"+r+n).replace(i,'$1<span id="mm-match-'+o+'" class="mm-match-text b bg-1">$2</span>$3').replaceAll(n,"");l.forEach((function(e){a[e]||(a[e]=!0)})),a[o]=s}})),a},A={zoomNormal:function(e){var t=e.svg.node().getBoundingClientRect(),a=t.width,n=t.height,r=e.state,l=r.minX,o=r.maxX,c=r.minY,i=r.maxY-c,s=o-l,d=1.2,m=y.CRH.translate((a-i*d)/2-c*d,(n-s*d)/2-l*d).scale(d);return e.transition(e.svg).call(e.zoom.transform,m).end().catch(x.ZT)},allClose:function(e){e.setData(void 0,{autoFit:!0,initialExpandLevel:1})},allOpen:function(e){var t=!1;(0,x.in)(e.state.data,(function(e,a){e.rawContent&&(t=!0,e.content=e.rawContent,e.rawContent=""),e.payload=Object.assign({},e.payload,{fold:0}),a()})),t?e.setData():e.renderData()},centerNode:function(e,t,a){var n=e.svg.node().getBoundingClientRect(),r=1.2*-t+n.width/2,l=1.2*-a+n.height/2,o=y.CRH.translate(r,l).scale(1.2);e.svg.transition().duration(300).call(e.zoom.transform,o).end().catch(x.ZT)}};var I=function(e){if(e.handleClick){e.handleClick=function(t,a){var n,r=null!=(n=a.data.payload)&&n.fold?0:1;(0,x.in)(a.data,(function(e,t){e.payload=Object.assign({},e.payload,{fold:r}),t()})),e.renderData(a.data)}}};const B=function(e,t){var a=new _.o;a.setBrand(!1),a.setItems(["allClose","allOpen","zoomNormal","fit","zoomIn","zoomOut"]),a.attach(t),a.register({id:"zoomNormal",title:"Zoom font normal",content:_.o.icon("M182.032,167.936v1.571219h-4.141567v8.428781h-1.716867v-8.428781h-4.141567v-1.571219h10Z",{transform:"translate(-167.032-162.936)"}),onClick:function(){A.zoomNormal(t)}}),a.register({id:"allClose",title:"Close all",content:_.o.icon("M97.314367,264.472218v1.694444h-8.386724v-1.694444h8.386724Zm-10.931633-6.786124l-.004998,6.784177-3.274059-3.392607l3.279057-3.39157Zm10.931633,2.550015v1.694444h-8.386724v-1.694444h8.386724Zm0-4.236109v1.694444h-8.386724v-1.694444h8.386724Z",{transform:"matrix(1.001583-.000751 0.000738 0.983607-80.544423-246.735547)"}),onClick:function(){A.allClose(t)}}),a.register({id:"allOpen",title:"Open all",content:_.o.icon("M97.314367,264.472218v1.694444h-8.386724v-1.694444h8.386724Zm-10.931633-6.786124l-.004998,6.784177-3.274059-3.392607l3.279057-3.39157Zm10.931633,2.550015v1.694444h-8.386724v-1.694444h8.386724Zm0-4.236109v1.694444h-8.386724v-1.694444h8.386724Z",{transform:"matrix(-1.001579-.00299-.002937 0.983603 101.118148-246.532487)"}),onClick:function(){A.allOpen(t)}}),I(t);var n=a.render();n.classList.add(g),e.current.append(n)};var O=a(3279),D=a.n(O),R=a(7037),S=a.n(R),H=a(1609),V=a.n(H),z=a(7334),P=a.n(z),j=a(5161),F=a.n(j),q=a(6486),G=function(e,t){void 0===e&&(e=6);var a,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[],l=0;if(t=t||n.length,e)for(l=0;l<e;l++)r[l]=n[0|Math.random()*t];else for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",l=0;l<36;l++)r[l]||(a=0|16*Math.random(),r[l]=n[19===l?3&a|8:a]);return r.join("")},J={};const X=function(e){var t=G();return{timerId:t,run:function(a,n){var r="number"==typeof a?n:a;J[t]&&clearTimeout(J[t]),J[t]=setTimeout(r,a||e)},clear:function(){J[t]&&(clearTimeout(J[t]),J[t]=null,delete J[t])}}};const Y={useTimeoutRef:function(e){void 0===e&&(e=[]);var t=e.length?e:["timer"],a=(0,r.useMemo)((function(){var e={};return t.forEach((function(t){e[t]=X()})),e}),[]),n=(0,r.useRef)(a);return(0,r.useEffect)((function(){return function(){(0,q.map)(n.current,(function(e){e.clear()}))}}),[]),n.current}};const $=function(e){var t=e.mm,a=e.filteredMap,n=e.onClear,l=(0,r.useState)(0),o=l[0],c=l[1],i=Y.useTimeoutRef(),s=(0,r.useMemo)((function(){var e=[];F()(a,(function(t,a){S()(t)&&e.push(a)}));var t=e.length;return{matchItems:e,allCount:t,hasCount:t>0,hasMoreCount:t>1}}),[a]),d=s.allCount,m=s.hasCount,u=s.hasMoreCount,v=s.matchItems;(0,r.useEffect)((function(){m?(c(1),t.current&&i.timer.run(450,(function(){p(v[0])}))):c(0)}),[a]);var f=function(e){var a=!1;t.current.g.selectAll("g").filter((function(n){var r=n.data.state,l=r.id,o=void 0===l?"":l,c=r.x0,i=r.y0;if(!a&&""+o===e){A.centerNode(t.current,i,c),a=!0;var s=document.getElementById("mm-match-"+o);return s&&(t.current.svg.node().querySelectorAll(".mm-match-text").forEach((function(e){e.classList.replace("bg-4","bg-1")})),s.classList.replace("bg-1","bg-4")),!0}return!1}))},p=(0,r.useMemo)((function(){return D()(f,200)}),[]),h=function(e){var t=e.currentTarget.dataset.key;if(u){var a=o;if("left"===t){var n=o-1;a=n<1?d:n}else{var r=o+1;a=r>d?1:r}c(a),p(v[a-1])}};return r.createElement("div",{className:N},r.createElement("span",{className:C},o,"/",d),r.createElement("span",{className:L},r.createElement("button",{disabled:!u},r.createElement("i",{"data-key":"left",onClick:h},"<"),r.createElement("i",{"data-key":"right",onClick:h},">")),r.createElement("i",{"data-key":"close",onClick:n},"x")))};const K=function(e){var t=e.mm,a=(0,r.useState)(""),n=a[0],l=a[1],o=(0,r.useState)({}),c=o[0],i=o[1],s=function(e){var a=t.current,n=a.state,r=a.flatData;if(e){var l=U(e,r);V()(l)?i({empty:!0}):((0,x.in)(n.data,(function(t,a){var n=l[t.state.id];t.payload.rawFold=t.payload.fold;var r=0;r=e?n?0:1:t.payload.rawFold,S()(n)?(t.rawContent=t.content,t.content=n):t.rawContent&&(t.content=t.rawContent,t.rawContent=""),t.payload=Object.assign({},t.payload,{fold:0==t.depth?0:r}),a()})),t.current.setData(),i(l))}else A.allOpen(t.current)},d=(0,r.useMemo)((function(){return D()(s,500)}),[]),m=function(){l(""),d(""),i({})};return r.createElement("div",{className:Z},r.createElement("input",{placeholder:"\u641c\u7d22...",className:k,value:n,onKeyDown:function(e){var t=P()(e.code),a={enter:function(){d(n)},escape:m};a[t]&&a[t]()},onChange:function(e){var t=e.target.value;l(void 0===t?"":t)}}),!V()(c)&&r.createElement($,{filteredMap:c,onClear:m,mm:t}))};var Q=p.Markmap,W=p.loadCSS,ee=p.loadJS;const te=function(e){var t,a=e.md,n=void 0===a?"":a,l=e.readOnly,o=void 0!==l&&l,i=e.height,s=void 0===i?"300px":i,d=e.bg,m=void 0!==d&&d,u=e.onResolveData,v=e.initialLevel,g=void 0===v?-1:v,Z=e.onInit,k=e.css,N=void 0===k?"":k,C=(0,r.useRef)(),L=(0,r.useRef)(),_=(0,r.useRef)({}),y={height:s};return(0,r.useEffect)((function(){return e=new f.Transformer,t=e.transform(n),a=t.root,r=t.features,l=e.getUsedAssets(r),c=l.styles,i=l.scripts,c&&W(c),i&&ee(i,{getMarkmap:function(){return p}}),u&&u(a),_.current=Q.create(L.current,{initialExpandLevel:g},a),_.current.flatData=M(a),o||B(C,_.current),Z&&Z(_.current),function(){_.current.destroy()};var e,t,a,r,l,c,i}),[]),r.createElement("div",{ref:C,className:c()(h,(t={},t[E]=m,t[b]=o,t))},N&&r.createElement("style",null,N),!o&&r.createElement(K,{mm:_}),r.createElement("svg",{ref:L,style:y}))},ae=Object.assign({},n.Z,{highlight:function(e){var t=e.children,a=e.color;return r.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},t:m,mermaid:v,markmap:te})}}]);