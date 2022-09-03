"use strict";(self.webpackChunkdumi_template=self.webpackChunkdumi_template||[]).push([[170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>d});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=r(2991),a=r(2802),l=["components"],u={},s="\u7a0b\u5e8f\u8bbe\u8ba1",m={unversionedId:"computer/code-design/index",id:"computer/code-design/index",title:"\u7a0b\u5e8f\u8bbe\u8ba1",description:"\u76ee\u5f55",source:"@site/docs/computer/code-design/index.md",sourceDirName:"computer/code-design",slug:"/computer/code-design/",permalink:"/notebook/docs/computer/code-design/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"computerSidebar",previous:{title:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/notebook/docs/computer/intro"},next:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/notebook/docs/computer/code-design/data-structure/"}},p={},d=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2}],f={toc:d};function y(e){var t=e.components,r=(0,o.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u7a0b\u5e8f\u8bbe\u8ba1"},"\u7a0b\u5e8f\u8bbe\u8ba1"),(0,c.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,c.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0},2991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),o=r(6010),c=r(2802),i=r(9960),a=r(3919),l=r(5999);const u="cardContainer_fWXF",s="cardTitle_rnsV",m="cardDescription_PWke";function p(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},r)}function d(e){var t=e.href,r=e.icon,c=e.title,i=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:c},r," ",c),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",m),title:i},i))}function f(e){var t=e.item,r=(0,c.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,o=(0,a.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:o,title:r.label,description:null==i?void 0:i.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,o.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e}))})))}}}]);